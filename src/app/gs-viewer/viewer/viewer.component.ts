import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbit-controls';
//import { OrbitControls } from 'three-orbitcontrols-ts';
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

  OC; 

  scene:THREE.Scene;
  renderer:THREE.WebGLRenderer;
  container:any;
  camera:THREE.PerspectiveCamera;
  width:any;
  height:any;
  light:THREE.DirectionalLight;
  controls:THREE.OrbitControls;
  view:any;
  raycaster:THREE.Raycaster;
  mouse:THREE.Vector2;
  settingVisible: boolean=false;
  Visible:string="rotate";
  model: gs.IModel;
  geometry:THREE.Geometry;
  INTERSECTED:any;
  INTERSECTEDcolor:any;
  selecting:Array<any>;
  objectdata:any;
  spritey:Array<any>;
  myElement;
  
  constructor(injector: Injector, myElement: ElementRef) { 
    super(injector);
    this.scene=this.dataService.scene;
    this.dataService.addScene(this.scene);
    this.renderer = new THREE.WebGLRenderer( {antialias: true} );
    this.dataService.addRender(this.renderer);
    this.dataService.addAmbientLight();
    this.geometry = new THREE.Geometry();
    this.dataService.addGeom(this.geometry);
    this.mouse=new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.selecting=[];
    this.spritey=[];
    this.myElement = myElement;
    document.body.style.cursor = " pointer";
    this.OC = OrbitControls(THREE);

  }

  //
  //  checks if the flowchart service has a flowchart and calls update function for the viewer
  //
  notify(message): void{
    if(message == "model_update"){
      this.updateViewer();
    }
  }


  ngOnInit() {
    this.updateViewer();
  }

  sceneViewer(){
    this.scene.background = new THREE.Color( 0xcccccc );
    this.container= this.myElement.nativeElement.children[0];//document.getElementById( 'container' );
    this.width=this.container.clientWidth || 600;
    this.height=this.container.clientHeight;    
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.width, this.height );
    this.container.appendChild( this.renderer.domElement );
    this.camera = new THREE.PerspectiveCamera( 50, this.width / this.height, 0.01, 1000 );
    this.camera.position.z = 10;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.scene.position);
    this.light = new THREE.DirectionalLight( 0xffffff,0.5);
    this.light.castShadow = false; 
    this.controls=new this.OC(this.camera, this.renderer.domElement);
    this.controls.mouseButtons={ORBIT:0,ZOOM:null,PAN:null};
    this.controls.enableKeys=false;
    var self=this;
    self.light.position.copy( self.camera.position );
    self.controls.addEventListener( 'change',  function() {
      self.light.position.copy( self.camera.position );
    } );
    self.light.target.position.set( 0, 0, 0 );
    this.scene.add( self.light );
    this.render();
  }

  updateViewer(){
    this.model = this.dataService.getGsModel(); 
    if(this.model == undefined){
      return this.sceneViewer();
    }else{
      for(var i=0;i<this.scene.children.length;i++){
        if(this.scene.children[i].type==="Scene"){
          this.scene.remove(this.scene.children[i]);
        }
      }
      const scene_data: gs.IThreeScene = gs.genThreeModel(this.model);
      let loader = new THREE.ObjectLoader();
      this.objectdata = loader.parse( scene_data );
      for(var i =0;i<this.objectdata.children.length;i++){
        if(this.objectdata.children[i].children!==undefined){
          for(var j=0;j<this.objectdata.children[i].children.length;j++){
            if(this.objectdata.children[i].children[j].type==="Mesh"){
              this.objectdata.children[i].children[j]["geometry"].computeVertexNormals();
              this.objectdata.children[i].children[j]["geometry"].computeBoundingBox();
              this.objectdata.children[i].children[j]["geometry"].computeBoundingSphere();
            }
          }
        }
      }
      this.scene.add( this.objectdata );
    }
    this.sceneViewer();
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse=new THREE.Vector2();
    this.mouse.x = ( event.offsetX / this.width) * 2 - 1;
    this.mouse.y =-( event.clientY / this.height ) * 2 + 1;
  }

  Mousedown(event){
    if(this.Visible=="select"){
      var e=event;
      this.onDocumentMouseDown(e);
    }
  }

  onDocumentMouseDown(event){
    this.INTERSECTEDcolor=this.dataService.getINTERSECTEDColor();
    this.selecting=this.dataService.selecting;
    var scenechildren=new THREE.Scene();
    for(var i=0;i<this.scene.children[1].children.length;i++){
      for(var j=0;j<this.scene.children[1].children[i].children.length;j++){
        if(this.scene.children[1].children[i].children[j].type==="Mesh"){
        var children=this.scene.children[1].children[i].children[j];
        scenechildren.children.push(children);
        }
      }
    }
    var INTERSECTED;
    this.raycaster.setFromCamera(this.mouse,this.camera);
      var intersects = this.raycaster.intersectObjects(scenechildren.children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED!= intersects[ 0 ].object ) {
          if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
          INTERSECTED= intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          var flagInArr = false; 
          for(var i=0;i<this.selecting.length;i++){
              if(this.selecting[i].uuid==INTERSECTED.uuid){
                flagInArr = true;
                this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
                this.selecting.splice(i,1);
                i=i-1;
              }
          }
          if(flagInArr == false){
            INTERSECTED.material.color.setHex( 0x2E9AFE);
            this.selecting.push(INTERSECTED);
            var threesprite=this.sprite("O1", { fontsize: 70} );
            this.spritey.push(threesprite);
            var position:THREE.Vector3=this.selecting[this.selecting.length-1].geometry.boundingBox.max;
            this.spritey[this.spritey.length-1].position.set(position.x,position.y,position.z);
            this.scene.add(this.spritey[this.spritey.length-1]);
          }
        }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
        for(var i=0;i<this.selecting.length;i++){
          this.selecting[i].material.color.setHex(this.INTERSECTEDcolor);
        }
        for(var j=0;j<this.scene.children.length;j++){
          if(this.scene.children[j].type==="Sprite"){
            this.scene.remove(this.scene.children[j]);
            j=j-1;
          }
        }
        this.spritey=[];
        this.selecting=[];
      }
      this.dataService.addselecting(this.selecting);
  }

  render():void {
    let self = this;
    (function render(){
      if(self.Visible=="select"){
      var scenechildren=new THREE.Scene();
      for(var i=0;i<self.scene.children[1].children.length;i++){
        for(var j=0;j<self.scene.children[1].children[i].children.length;j++){
          if(self.scene.children[1].children[i].children[j].type==="Mesh"){
          var children=self.scene.children[1].children[i].children[j];
          scenechildren.children.push(children);
          }
        }
      }
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(scenechildren.children);
      if ( intersects.length > 0 ) {
        if ( self.INTERSECTED != intersects[ 0 ].object ) {
          if ( self.INTERSECTED ) self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
          self.INTERSECTED = intersects[ 0 ].object;
          self.INTERSECTED.currentHex = self.INTERSECTED.material.color.getHex();
          self.dataService.addINTERSECTEDColor(self.INTERSECTED.currentHex);
          self.INTERSECTED.material.color.setHex( 0xFF0000);
        }
      } else {
        if ( self.INTERSECTED ) {
          if(self.INTERSECTED.currentHex!=16711680){
            self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
          }
        }
        self.INTERSECTED = null;
      }
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
    this.Visible="zoom";
  }

  zoomfit(Visible){
    document.body.style.cursor = "no-drop";
    this.controls.mouseButtons={ORBIT:null,ZOOM:0,PAN:null};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.Visible="zoomfit";
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
    this.Visible="pan";
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
    this.Visible="rotate";
  }

  select(event, Visible){
    document.body.style.cursor ="default";
    this.controls.enabled=false;
    this.Visible="select";
    event.stopPropagation();
  }

  setting(event){
    this.settingVisible=!this.settingVisible;
    event.stopPropagation();
  }

  sprite( message, parameters ){

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
 
}
