import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { AngularSplitModule } from 'angular-split';
import { SettingComponent } from '../setting/setting.component';
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent extends DataSubscriber implements OnInit {


  _model: gs.IModel;

  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  controls: THREE.OrbitControls;

  width: number;
  height: number;
  
  raycaster:THREE.Raycaster;
  mouse:THREE.Vector2;

  Visible:string="Objs";

  // check what needs to be global and refactor
  
  selecting:Array<any>;
  basicMat:THREE.MeshPhongMaterial;
  selectMat:THREE.MeshPhongMaterial;
  mousehovMat:THREE.MeshPhongMaterial;
  
  myElement;
  
  mySprites: THREE.Sprite[] = [];
  scenechildren:Array<any>;

  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.myElement = myElement;
  }

  ngOnInit() {

    let container = this.myElement.nativeElement.children.namedItem("container");

    /// check for container
    if(!container){
      console.error("No container in Three Viewer");
      return;
    }

    ///
    let width: number = container.clientWidth;
    let height: number = container.clientHeight;

    let scene: THREE.Scene = this.dataService.getScene(width, height);
    let renderer: THREE.WebGLRenderer = this.dataService.getRenderer();
    let camera: THREE.PerspectiveCamera = this.dataService.getCamera();
    let controls: THREE.OrbitControls = this.dataService.getControls();

    container.appendChild( renderer.domElement );

    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.controls = controls;

    this.width = width;
    this.height = height;

    this.updateModel();

    // todo: check and refactor what is required?
    this.selecting = this.dataService.getselecting();  // todo: should this be in the data service??
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.scenechildren=this.getSceneChildren();
    
    console.log(this.scene);
    //Material of select and basic;
    /*for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        this.basicMat=this.scene.children[i].children[0].children[0]["material"];
        break;
      }
    }*/
    ///One Mesh
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j].type=="Mesh"){
            this.basicMat=this.scene.children[i].children[j]["material"];
          }
        }
        break;
      }
    }
    this.selectMat=new THREE.MeshPhongMaterial( { visible:false} );
    this.mousehovMat=new THREE.MeshPhongMaterial( { color: 0xFFaaaa, blending:0, flatShading:true, side:THREE.DoubleSide} );

    // render loop
    let self = this;
    function animate() {
        self.raycaster.setFromCamera(self.mouse,self.camera);
        var intersects = self.raycaster.intersectObjects(self.scenechildren);
        for (var i = 0; i < self.scenechildren.length; i++) {
          var currObj=self.scenechildren[i];
          if(self.dataService.getSelectingIndex(currObj.uuid)<0) {
            if ( intersects.length > 0 &&  intersects[ 0 ].object.uuid==currObj.uuid) {
              currObj.material=self.mousehovMat;
            } else {
              currObj.material=self.basicMat;
            }
          }
        }
        if(self.dataService.selecting.length!=0){
          self.updateview();
      }

      requestAnimationFrame( animate );
      self.renderer.render( self.scene, self.camera );
    };
    animate();
    this.zoomfit();
  }
  //
  //  checks if the flowchart service has a flowchart and calls update function for the viewer
  //
  notify(message: string): void{
    if(message == "model_update"){
      this.updateModel();
    }
    
  }


  /// clears all children from the scene
  clearScene(): void{
    /// remove children from scene
    for(var i=0; i < this.scene.children.length; i++){
      if( this.scene.children[i].type === "Scene" ){
         this.scene.remove(this.scene.children[i]);
      }
    }
  }


  //
  // update mode
  // todo: optimize
  // 
  updateModel(): void{

    this._model = this.dataService.getGsModel(); 

    if( !this._model || !this.scene){
      console.warn("Model or Scene not defined");
      return;
    }

    try{
      const scene_and_maps: {
          scene: gs.IThreeScene, 
          faces_map: Map<number, gs.ITopoPathData>, 
          wires_map: Map<number, gs.ITopoPathData>, 
          edges_map: Map<number, gs.ITopoPathData>} 
        = gs.genThreeOptModelAndMaps( this._model );
        console.log(scene_and_maps);

      const scene_data = scene_and_maps.scene;
      //[three_mode, egde_map, tri_map] = genThreeModelandMaps()
      //[three_mode, label_data] = gs.getThreeWire(labels)
      //gs.getThreeFace(label)
      //gs.getThreeObj

      
      this.clearScene();

      let loader = new THREE.ObjectLoader();

      let objectData = loader.parse( scene_data );
      for(var i =0;i< objectData.children.length;i++){
        if( objectData.children[i].children!==undefined){
          for(var j=0;j< objectData.children[i].children.length;j++){
            let chd = objectData.children[i].children[j];
            if( chd.type==="Mesh"||chd.type==="LineLoop"||chd.type==="LineSegments"||chd.type==="Line"){
               objectData.children[i].children[j]["geometry"].computeVertexNormals();
               objectData.children[i].children[j]["geometry"].computeBoundingBox();
               objectData.children[i].children[j]["geometry"].computeBoundingSphere();
            }
            /// 
            if( chd.children.length > 0){
              for(let s=0; s < chd.children.length; s++ ){
                let spr: any = chd.children[s];
                this.mySprites.push(spr);
                spr.material = this.getMaterial(spr.name);
              }
            }
          }
        }
      }
      this.scene.add(objectData);
    }
    catch(ex){
      console.error("Error displaying model:", ex);
    }
  }

  getMaterial(name: string): THREE.SpriteMaterial{
    var canvas = document.createElement('canvas');
    canvas.width = 256; 
    canvas.height = 256;
    var context = canvas.getContext('2d');
    context.textAlign = "center";
    context.fillText( name , canvas.width/2, canvas.height/2);
    context.font ="Bold  100px Arial";
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
    return spriteMaterial;
  }

  //
  //  events
  //
  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse.x = ( event.offsetX / this.width) * 2 - 1;
    this.mouse.y =-( event.clientY / this.height ) * 2 + 1;
  }

  /// selects object from three.js scene
  onDocumentMouseDown(event){
    event.preventDefault();
    var selectedObj, intersects;
    this.raycaster.setFromCamera(this.mouse,this.camera);
    intersects = this.raycaster.intersectObjects(this.scenechildren);
    if ( intersects.length > 0 ) {
      selectedObj=intersects[ 0 ].object;
      console.log(intersects);
      var index=this.dataService.getSelectingIndex(selectedObj.uuid);
      if(index<0) {
        selectedObj.material=this.selectMat;
        this.dataService.pushselecting(selectedObj);
      } else {
        selectedObj.material=this.basicMat;
        this.dataService.spliceselecting(index,1);
        for(var i=0;i<this.dataService.sprite.length;i++){
        this.dataService.sprite[i].visible=false;
        }
        var sprite=[];
        this.dataService.pushsprite(sprite);
      }
    } else {
      for(var i=0;i<this.dataService.selecting.length;i++){
        this.dataService.selecting[i].material=this.basicMat;
      }
      for(var i=0;i<this.dataService.sprite.length;i++){
        this.dataService.sprite[i].visible=false;
      }
      var sprite=[];
      this.dataService.pushsprite(sprite);
      var select=[];
      this.dataService.addselecting(select);
    }
    //this.updateview();
  }

  updateview(){
    this.Visible=this.dataService.visible;
    var intersects = this.raycaster.intersectObjects(this.scenechildren);
    if ( intersects.length > 0 ) {
      if(this.dataService.selecting.length!=0){
        for(var i=0;i<this.mySprites.length;i++){
          if(this.mySprites[i].parent.name===this.Visible){
            let spr: THREE.Sprite =this.mySprites[i];
            if(Math.abs(intersects[0].point.x-this.mySprites[i].position.x)<0.05
              &&Math.abs(intersects[0].point.y-this.mySprites[i].position.y)<0.05
              &&Math.abs(intersects[0].point.z-this.mySprites[i].position.z)<0.05){
              //let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = true; 
            }else{
              //let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = false; 
            }
          }
        }
      }
    }/*else{
      this.Visible=this.dataService.visible;
      for(var i=0;i<this.mySprites.length;i++){
        if(this.mySprites[i].parent.name===this.Visible){
          let spr: THREE.Sprite =this.mySprites[i];
          spr.visible = false; 
        }
      }
    }*/
    for(var i=0;i<this.dataService.sprite.length;i++){
      let spr: THREE.Sprite =this.dataService.sprite[i];
      spr.visible = true;
    }
  }

  /*getSceneChildren() {
    var scenechildren=[];
    var children;
    for (var i = 0; i<this.scene.children.length; i++) {
      if(this.scene.children[i].name=="Scene") {
        children=this.scene.children[i].children;
        break;
      }
      if(i==this.scene.children.length-1) {
        return [];
      }
    }
    for(var i=0;i<children.length;i++){
      for(var j=0;j<children[i].children.length;j++){
        if(children[i].children[j].type==="Mesh"||children[i].children[j].type==="LineSegments"||children[i].children[j].type==="LineLoop"){
          scenechildren.push(children[i].children[j]);
        }
      }
    }
    return scenechildren;
  }*/
  //One Mesh
  getSceneChildren() {
    var scenechildren=[];
    var children;
    for (var i = 0; i<this.scene.children.length; i++) {
      if(this.scene.children[i].name=="Scene") {
        children=this.scene.children[i].children;
        break;
      }
      if(i==this.scene.children.length-1) {
        return [];
      }
    }
    for(var i=0;i<children.length;i++){
        if(children[i].type==="Mesh"||children[i].type==="LineSegments"||children[i].type==="LineLoop"){
          scenechildren.push(children[i]);
        }
      }
    return scenechildren;
  }


  zoomfit(){
    //if(this.selecting.length===0){
      var obj=new THREE.Object3D();
      obj=this.scene;
      var boxHelper = new THREE.BoxHelper(obj);
      boxHelper["geometry"].computeBoundingBox();
      boxHelper["geometry"].computeBoundingSphere();
      var boundingSphere=boxHelper["geometry"].boundingSphere;
      var center = boundingSphere.center;
      var radius = boundingSphere.radius;
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3( center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                     center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                     center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    /*}else{
      event.stopPropagation();
      var axisX,axisY,axisZ,centerX,centerY,centerZ=0;
      var radius=0;
      for(var i=0;i<this.selecting.length;i++){
        axisX+=this.selecting[i].geometry.boundingSphere.center.x;
        axisY+=this.selecting[i].geometry.boundingSphere.center.y;
        axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
        radius=Math.max(this.selecting[i].geometry.boundingSphere.radius,radius);
      }
      console.log(this.selecting);
      centerX=axisX/this.scene.children[1].children.length;
      centerY=axisY/this.scene.children[1].children.length;
      centerY=axisY/this.scene.children[1].children.length;
      var center = new THREE.Vector3(centerX,centerY,centerZ);
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3(center.x+Math.abs( radius / Math.sin( fov / 2 )),
                                    center.y+Math.abs( radius / Math.sin( fov / 2 ) ),
                                    center.z+Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    }*/
  }


  /*render():void {
    let self = this;
    (function render(){
        var scenechildren=self.getSceneChildren();
        console.log(scenechildren);
        self.raycaster.setFromCamera(self.mouse,self.camera);
        var intersects = self.raycaster.intersectObjects(scenechildren);
        for (var i = 0; i < scenechildren.length; i++) {
          var currObj=scenechildren[i];
          if(self.dataService.getSelectingIndex(currObj.uuid)<0) {
            if ( intersects.length > 0 &&  intersects[ 0 ].object.uuid==currObj.uuid) {
              currObj.material=self.mousehovMat;
            } else {
              currObj.material=self.basicMat;
            }
          }
        }
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
    }());
    this.renderer.render( this.scene, this.camera );
  }
*/
  /*sprite( message: string, parameters?: any ): THREE.Sprite{

    if ( parameters === undefined ) parameters = {};
    var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
    var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 30;
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 0.1;
    var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:0, a:1.0 };
    var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:255, a:1.0 };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    context.font = "Bold " + fontsize + "px " + fontface;
    var metrics = context.measureText( message );
    var textWidth = metrics.width;

    context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

    context.lineWidth = borderThickness;

    context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
    context.fillText( message, borderThickness, fontsize + borderThickness);

    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    return sprite;  
  }*/

  //
  //  viewer functionality
  //  not required for now
  //
  // zoomfit(){
     
  //   // todo: fix
  //   document.body.style.cursor = "no-drop";

  //   // enable zoom; disable everything else
  //   this.controls.enabled = true;
  //   this.controls.enableZoom = true;
  //   this.controls.enableRotate = false;
  //   this.controls.enablePan = false;

  //   this.Visible="zoomfit";
    
  //   // repeat??
  //   if(this.selecting.length===0){
  //     var obj=new THREE.Object3D();
  //     obj=this.scene;
  //     var boxHelper = new THREE.BoxHelper(obj);
  //     var boundingSphere=boxHelper.geometry.boundingSphere;
  //     var center = boundingSphere.center;
  //     var radius = boundingSphere.radius;
  //     var fov=this.camera.fov * ( Math.PI / 180 );
  //     var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
  //     vec_centre_to_pos.subVectors(this.camera.position, center);
  //     var tmp_vec=new THREE.Vector3( Math.abs( radius / Math.sin( fov / 2 )),
  //                                    Math.abs( radius / Math.sin( fov / 2 ) ),
  //                                    Math.abs( radius / Math.sin( fov / 2 )));
  //     vec_centre_to_pos.setLength(tmp_vec.length());
  //     var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
  //     perspectiveNewPos.addVectors(center, vec_centre_to_pos);
  //     var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
  //     this.camera.position.copy(perspectiveNewPos);
  //     this.camera.lookAt(newLookAt);
  //     this.camera.updateProjectionMatrix();
  //     this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
  //   }else{
  //     var axisX,axisY,axisZ,centerX,centerY,centerZ=0;
  //     var radius=0;
  //     for(var i=0;i<this.selecting.length;i++){
  //       axisX+=this.selecting[i].geometry.boundingSphere.center.x;
  //       axisY+=this.selecting[i].geometry.boundingSphere.center.y;
  //       axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
  //       radius=Math.max(this.selecting[i].geometry.boundingSphere.radius,radius);
  //     }
  //     centerX=axisX/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     var center = new THREE.Vector3(centerX,centerY,centerZ);
  //     var fov=this.camera.fov * ( Math.PI / 180 );
  //     var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
  //     vec_centre_to_pos.subVectors(this.camera.position, center);
  //     var tmp_vec=new THREE.Vector3(Math.abs( radius / Math.sin( fov / 2 )),
  //                                   Math.abs( radius / Math.sin( fov / 2 ) ),
  //                                   Math.abs( radius / Math.sin( fov / 2 )));
  //     vec_centre_to_pos.setLength(tmp_vec.length());
  //     var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
  //     perspectiveNewPos.addVectors(center, vec_centre_to_pos);
  //     var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
  //     this.camera.position.copy(perspectiveNewPos);
  //     this.camera.lookAt(newLookAt);
  //     this.camera.updateProjectionMatrix();
  //     this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
  //   }

  // }

  // pan(){
    
  //   this.camera.updateProjectionMatrix();

  //   this.controls.enabled = true;
  //   this.controls.enableZoom = false;
  //   this.controls.enableRotate = false;
  //   this.controls.enablePan = true;

  //   //todo: remove
  //   document.body.style.cursor = "-webkit-grab";
  //   this.Visible="pan";

  // }

  // rotate(){
  //   document.body.style.cursor = " pointer";

  //   // reset controls
  //   this.controls.enabled = true;
  //   this.controls.enableZoom = false;
  //   this.controls.enableRotate = true;
  //   this.controls.enablePan = false;

  //   if(this.selecting.length===0){
  //     var centerX=0;
  //     var centerY=0;
  //     var centerZ=0;
  //     for(var i=0;i<this.scene.children[1].children.length;i++){
  //       centerX+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.x;
  //       centerY+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.y;
  //       centerZ+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.z;
  //     }
  //     centerX=centerX/this.scene.children[1].children.length;
  //     centerY=centerY/this.scene.children[1].children.length;
  //     centerZ=centerZ/this.scene.children[1].children.length;
  //     //this.controls.target.set(centerX,centerY,centerZ);
  //   }else{
  //     var axisX=0;
  //     var axisY=0;
  //     var axisZ=0;
  //     var centerX=0;
  //     var centerY=0;
  //     var centerZ=0;
  //     for(var i=0;i<this.selecting.length;i++){
  //       axisX+=this.selecting[i].geometry.boundingSphere.center.x;
  //       axisY+=this.selecting[i].geometry.boundingSphere.center.y;
  //       axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
  //     }
  //     centerX=axisX/this.scene.children[1].children.length;
  //     centerY=axisY/this.scene.children[1].children.length;
  //     centerZ=axisY/this.scene.children[1].children.length;
  //     //this.controls.target.set(centerX,centerY,centerZ);
  //   }

  //   this.Visible="rotate";
  // }

  // select(event){
  //   event.stopPropagation();

  //   document.body.style.cursor = "default";

  //   // reset controls
  //   // this.controls.enabled = false;
  //   // this.controls.enableZoom = false;
  //   // this.controls.enableRotate = false;
  //   // this.controls.enablePan = false;

  //   this.Visible="select";
  // }


 
}
