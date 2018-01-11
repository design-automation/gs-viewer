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

  settingVisible: boolean=false;
<<<<<<< HEAD
  Visible:string="rotate";

  // check what needs to be global and refactor
=======
  activeTool:string="rotate";
  model: gs.IModel;
>>>>>>> 337e6e0fedfe5dfd6d8c932e4f6185e98194f3ca
  geometry:THREE.Geometry;
  
  INTERSECTED:any;
  INTERSECTEDcolor:any;
  
  selecting:Array<any>;
  
  spritey:Array<any>;
  myElement;
  
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

    // render loop
    let self = this;
    function animate() {
      requestAnimationFrame( animate );
      self.renderer.render( self.scene, self.camera );
    };
    animate();

    // todo: check and refactor what is required?
    this.selecting = [];  // todo: should this be in the data service??
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.spritey = [];

    // todo: make angular based
    document.body.style.cursor = " pointer";

    // this.geometry = new THREE.Geometry();
    // this.dataService.addGeom(this.geometry);

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
        const scene_data: gs.IThreeScene = gs.genThreeModel( this._model );
        
        this.clearScene();

        let loader = new THREE.ObjectLoader();

        let objectData = loader.parse( scene_data );
        for(var i =0;i< objectData.children.length;i++){
          if( objectData.children[i].children!==undefined){
            for(var j=0;j< objectData.children[i].children.length;j++){
              let chd = objectData.children[i].children[j];
              if( chd.type==="Mesh"){
                 objectData.children[i].children[j]["geometry"].computeVertexNormals();
                 objectData.children[i].children[j]["geometry"].computeBoundingBox();
                 objectData.children[i].children[j]["geometry"].computeBoundingSphere();
              }
              /// 
              if( chd.children.length > 0){
                for(let s=0; s < chd.children.length; s++ ){
                    let spr: THREE.Sprite = chd.children[s];
                    //spr.visible = true; 
                    spr.material = this.getMaterial(spr.name);
                    this.scene.add(spr);
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
    canvas.height = 128;
    var context = canvas.getContext('2d');

    context.textAlign = "center";

    // context.font = "Bold " + fontsize + "px " + fontface;
    // var metrics = context.measureText( message );
    // var textWidth = metrics.width;

    // context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
    // context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

    // context.lineWidth = borderThickness;

    // context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
    
    context.fillText( name , 1, 18);

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

<<<<<<< HEAD
  /// selects object from three.js scene
=======
  Mousedown(event){
    if(this.activeTool=="select"){
      var e=event;
      this.onDocumentMouseDown(e);
    }
  }
  selectMat=new THREE.MeshPhongMaterial( { color: 0xaaaaFF, blending:0, flatShading:true, side:THREE.DoubleSide} );
  basicMat=new THREE.MeshPhongMaterial( { color: 0xFFFFFF, blending:0, flatShading:true, side:THREE.DoubleSide} );
  mousehovMat=new THREE.MeshPhongMaterial( { color: 0xFFaaaa, blending:0, flatShading:true, side:THREE.DoubleSide} );
  
>>>>>>> 337e6e0fedfe5dfd6d8c932e4f6185e98194f3ca
  onDocumentMouseDown(event){
    var selectedObj, intersects;
    var scenechildren=this.getSceneChildren();
    this.raycaster.setFromCamera(this.mouse,this.camera);
    intersects = this.raycaster.intersectObjects(scenechildren);
    if ( intersects.length > 0 ) {
      selectedObj=intersects[ 0 ].object;
      var index=this.dataService.getSelectingIndex(selectedObj.uuid);
      if(index<0) {
        selectedObj.material=this.selectMat;
        this.dataService.selecting.push(selectedObj);
      } else {
        selectedObj.material=this.basicMat;
        this.dataService.selecting.splice(index,1);
      }
    } else {
      for(var i=0;i<this.dataService.selecting.length;i++){
        this.dataService.selecting[i].material=this.basicMat;
      }
      this.dataService.selecting=[];
    }
    this.updateViewer();
  }

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
      for(var j=0;j<children[i].children.length;j++){
        if(children[i].children[j].type==="Mesh"){
          scenechildren.push(children[i].children[j]);
        }
      }
    }
<<<<<<< HEAD
    this.raycaster.setFromCamera(this.mouse,this.camera);
    intersects = this.raycaster.intersectObjects(scenechildren);
    if ( intersects.length > 0 ) {
      selectedObj=intersects[ 0 ].object;
      var index=this.dataService.getSelectingIndex(selectedObj.uuid);
      if(index<0) {
        selectedObj.material=this.selMaterial;
        //this.dataService.selecting.push(selectedObj);
        this.dataService.pushselecting(selectedObj);
      } else {
        selectedObj.material=this.basicColHex;
        //this.dataService.selecting.splice(index,1);
        this.dataService.spliceselecting(index,1);
      }
    } else {
      for(var i=0;i<this.dataService.selecting.length;i++){
        this.dataService.selecting[i].material=this.basicColHex;
      }
      this.dataService.selecting=[];
    }
    this.updateViewer();
  }

  // ???
  selMaterial=new THREE.MeshBasicMaterial( { color: 0xaaaaFF, side:THREE.DoubleSide} );
  basicColHex=new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side:THREE.DoubleSide} );
  mouseHovHex=new THREE.MeshBasicMaterial( { color: 0xFFaaaa, side:THREE.DoubleSide} );

  //
  //  related to sprites??
  //
=======
    return scenechildren;
  }

>>>>>>> 337e6e0fedfe5dfd6d8c932e4f6185e98194f3ca
  updateViewer() {
    this.updateSprite();
  }

  updateSprite() {
    for (var i = this.spritey.length - 1; i >= 0; i--) {
      this.scene.remove(this.spritey[i]);
    }
    if(!this.dataService.selectedVisible) {
      return;
    }
    this.spritey=[];
    for (var i = 0; i < this.dataService.selecting.length; i++) {
      var obj=this.dataService.selecting[i];
      var childArray=obj.parent.children;
      var sprit;
      var position:THREE.Vector3;
<<<<<<< HEAD
      if(childArray[childArray.length-1].type==this.dataService.visible) {
        sprit=this.sprite(childArray[childArray.length-1].children[0].name,{fontsize: 70});
        position=obj.geometry.boundingBox.max;
        sprit.position.set(position.x,position.y,position.z);
        this.scene.add(sprit);
        this.spritey.push(sprit);
      } else {
        for (var j = 0; j < childArray.length-1; j++) {
          if(childArray[j].type=="Group" && this.dataService.visible==childArray[j].name) {
            this.addSprites(childArray[j]);
            break;
          }
        }
        if(j==childArray.length-1) {
            sprit=this.sprite(childArray[j].children[0].name,{fontsize: 30});
            position=obj.geometry.boundingBox.max;
            sprit.position.set(position.x,position.y,position.z);
            this.scene.add(sprit);
            this.spritey.push(sprit);
=======
      for (var j = 0; j < childArray.length-1; j++) {
        if(childArray[j].type=="Group" && this.dataService.visible==childArray[j].name) {
          this.addSprites(childArray[j]);
          break;
>>>>>>> 337e6e0fedfe5dfd6d8c932e4f6185e98194f3ca
        }
      }
      if(j==childArray.length-1) {
          sprit=this.sprite(childArray[j].children[0].name,{fontsize: 30});
          position=obj.geometry.boundingBox.max;
          sprit.position.set(position.x,position.y,position.z);
          this.scene.add(sprit);
          this.spritey.push(sprit);
      }
    }
  }

  addSprites(childArray) {
    var sprit;
    var position:THREE.Vector3;
    console.log(childArray);
    for (var i = 0; i < childArray.children.length; i++) {
      sprit=this.sprite(childArray.children[i].name,{fontsize: 30});
      position=childArray.children[i].position;
      sprit.position.set(position.x,position.y,position.z);
      this.scene.add(sprit);
      this.spritey.push(sprit);
    }
  }

<<<<<<< HEAD
  sprite( message: string, parameters?: any ): THREE.Sprite{
=======
  render():void {
    let self = this;
    (function render(){
      if(self.activeTool=="select"){
        var scenechildren=self.getSceneChildren();
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
      }
      if(self.dataService.modified) {
        self.updateViewer();
        self.dataService.modified=false;
      }
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
    }());
    this.renderer.render( this.scene, this.camera );
  }

  zoom(Visible){
    document.body.style.cursor = "crosshair";
    this.controls.mouseButtons={ORBIT:null,ZOOM:0,PAN:null};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.activeTool="zoom";
  }

  zoomfit(Visible){
    document.body.style.cursor = "no-drop";
    this.controls.mouseButtons={ORBIT:null,ZOOM:0,PAN:null};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.activeTool="zoomfit";
    if(this.selecting.length===0){
      var obj=new THREE.Object3D();
      obj=this.scene;
      var boxHelper = new THREE.BoxHelper(obj);
      var boundingSphere=boxHelper.geometry.boundingSphere;
      var center = boundingSphere.center;
      var radius = boundingSphere.radius;
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3( Math.abs( radius / Math.sin( fov / 2 )),
                                     Math.abs( radius / Math.sin( fov / 2 ) ),
                                     Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    }else{
      var axisX,axisY,axisZ,centerX,centerY,centerZ=0;
      var radius=0;
      for(var i=0;i<this.selecting.length;i++){
        axisX+=this.selecting[i].geometry.boundingSphere.center.x;
        axisY+=this.selecting[i].geometry.boundingSphere.center.y;
        axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
        radius=Math.max(this.selecting[i].geometry.boundingSphere.radius,radius);
      }
      centerX=axisX/this.scene.children[1].children.length;
      centerY=axisY/this.scene.children[1].children.length;
      centerY=axisY/this.scene.children[1].children.length;
      var center = new THREE.Vector3(centerX,centerY,centerZ);
      var fov=this.camera.fov * ( Math.PI / 180 );
      var vec_centre_to_pos: THREE.Vector3 = new THREE.Vector3();
      vec_centre_to_pos.subVectors(this.camera.position, center);
      var tmp_vec=new THREE.Vector3(Math.abs( radius / Math.sin( fov / 2 )),
                                    Math.abs( radius / Math.sin( fov / 2 ) ),
                                    Math.abs( radius / Math.sin( fov / 2 )));
      vec_centre_to_pos.setLength(tmp_vec.length());
      var perspectiveNewPos: THREE.Vector3 = new THREE.Vector3();
      perspectiveNewPos.addVectors(center, vec_centre_to_pos);
      var newLookAt = new THREE.Vector3(center.x,center.y,center.z)
      this.camera.position.copy(perspectiveNewPos);
      this.camera.lookAt(newLookAt);
      this.camera.updateProjectionMatrix();
      this.controls.target.set(newLookAt.x, newLookAt.y,newLookAt.z);
    }
  }

  pan(Visible){
    this.camera.updateProjectionMatrix();
    document.body.style.cursor = "-webkit-grab";
    this.controls.mouseButtons={ORBIT:null,ZOOM:null,PAN:0};
    this.controls.enabled=true;
    this.controls.enablePan=true;
    this.activeTool="pan";
  }

  rotate(Visible){
    document.body.style.cursor = " pointer";
    if(this.selecting.length===0){
      var centerX=0;
      var centerY=0;
      var centerZ=0;
      for(var i=0;i<this.scene.children[1].children.length;i++){
        centerX+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.x;
        centerY+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.y;
        centerZ+=this.scene.children[1].children[i].children[0]["geometry"].boundingSphere.center.z;
      }
      centerX=centerX/this.scene.children[1].children.length;
      centerY=centerY/this.scene.children[1].children.length;
      centerZ=centerZ/this.scene.children[1].children.length;
      //this.controls.target.set(centerX,centerY,centerZ);
    }else{
      var axisX=0;
      var axisY=0;
      var axisZ=0;
      var centerX=0;
      var centerY=0;
      var centerZ=0;
      for(var i=0;i<this.selecting.length;i++){
        axisX+=this.selecting[i].geometry.boundingSphere.center.x;
        axisY+=this.selecting[i].geometry.boundingSphere.center.y;
        axisZ+=this.selecting[i].geometry.boundingSphere.center.z;
      }
      centerX=axisX/this.scene.children[1].children.length;
      centerY=axisY/this.scene.children[1].children.length;
      centerZ=axisY/this.scene.children[1].children.length;
      //this.controls.target.set(centerX,centerY,centerZ);
    }
    this.controls.mouseButtons={ORBIT:0,ZOOM:null,PAN:null};
    this.controls.enabled=true;
    this.controls.enableRotate=true;
    this.activeTool="rotate";
  }

  select(event, Visible){
    document.body.style.cursor ="default";
    this.controls.enabled=false;
    this.activeTool="select";
    event.stopPropagation();
  }

  setting(event){
    this.settingVisible=!this.settingVisible;
    event.stopPropagation();
  }

  sprite( message, parameters ){
>>>>>>> 337e6e0fedfe5dfd6d8c932e4f6185e98194f3ca

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
  }

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
