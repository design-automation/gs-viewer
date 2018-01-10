import * as THREE from 'three';
import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { DataService } from "../data/data.service";
import * as gs from "gs-json";
import {DataSubscriber} from "../data/DataSubscriber";


@Component({
  selector: 'app-toolwindow',
  templateUrl: './toolwindow.component.html',
  styleUrls: ['./toolwindow.component.css']
})
export class ToolwindowComponent extends DataSubscriber implements OnInit {
  Visible:string="object";
  boxes:any;
  model:gs.IModel;
  scene:THREE.Scene;
  attribute:Array<any>;
  selectedVisible:boolean=false;
  collection:any;
  myElement;
  selecting:any;
  geometry:any;
  num:Array<any>;
  selectObj:Array<any>;

  constructor(injector: Injector, myElement: ElementRef){
  	super(injector);
    this.scene=this.dataService.getScene();
    this.attribute=[];
    this.num=[];
    this.collection=[];
    this.selectObj=[];
    this.myElement = myElement;
  }

  ngOnInit() {
    this.model= this.dataService.getGsModel(); 
  	this.object(this.Visible);
  }

  notify(){ 
    this.selectObj=[];
    for(var i=0;i<this.dataService.selecting.length;i++){
       for(var n=0;n<this.scene.children.length;n++){
        if(this.scene.children[n].type==="Scene"){
          for(var j=0;j<this.scene.children[n].children.length;j++){
            if(this.dataService.selecting[i].uuid===this.scene.children[n].children[j].children[0].uuid){
               this.selectObj.push(this.scene.children[n].children[j].children[0].parent);
            }
          }
        }
      }
    }
    if(this.selectedVisible==true){
      if(this.Visible==="object"){
        this.objectcheck();
      }
      if(this.Visible==="face"){
        this.facecheck();
      }
      if(this.Visible==="wire"){
        this.wirecheck();
      }
      if(this.Visible==="edge"){
        this.edgecheck();
      }
      if(this.Visible==="vertice"){
        this.verticecheck();
      }
    }
    this.dataService.visible=this.Visible;
  }

  point(Visible){
  	this.Visible="point";
  	this.attribute=[];
    for(var i=0;i<this.model.getGeom().getAllPoints().length;i++){
      var attributepoints:any=[];
      attributepoints.id=this.model.getGeom().getAllPoints()[i].getID();
      attributepoints.x=this.model.getGeom().getAllPoints()[i].getPosition()[0];
      attributepoints.y=this.model.getGeom().getAllPoints()[i].getPosition()[1];
      attributepoints.z=this.model.getGeom().getAllPoints()[i].getPosition()[2];
      this.attribute.push(attributepoints);
    }
  }

  pointcheck(){
    this.attribute=[];
    for(var i=0;i<this.model.getGeom().getAllPoints().length;i++){
      var attributepoints:any=[];
      attributepoints.id=this.model.getGeom().getAllPoints()[i].getID();
      attributepoints.x=this.model.getGeom().getAllPoints()[i].getPosition()[0];
      attributepoints.y=this.model.getGeom().getAllPoints()[i].getPosition()[1];
      attributepoints.z=this.model.getGeom().getAllPoints()[i].getPosition()[2];
      this.attribute.push(attributepoints);
    }
  }

  vertice(Visible){
  	this.Visible="vertice";
  	this.attribute=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          for(var j=0;j<this.scene.children[n].children[i].children.length;j++){
            if(this.scene.children[n].children[i].children[j].name==="Vertices"){
              for(var m=0;m<this.scene.children[n].children[i].children[j].children.length;m++){
                var attributeface:any=[];
                attributeface.id=this.scene.children[n].children[i].children[j].children[m].name;
                this.attribute.push(attributeface);
              }
            }
          }
        }
        break;
      }
    }
    if(this.selectedVisible==true){
      this.verticecheck();
    }
  }

  verticecheck(){
  	this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Vertices"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributevertice:any=[];
            attributevertice.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributevertice);
          }
        }
      }
    }
  }

  edge(Visible){
  	this.Visible="edge";
    this.attribute=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          for(var j=0;j<this.scene.children[n].children[i].children.length;j++){
            if(this.scene.children[n].children[i].children[j].name==="Edges"){
              for(var m=0;m<this.scene.children[n].children[i].children[j].children.length;m++){
                var attributeedge:any=[];
                attributeedge.id=this.scene.children[n].children[i].children[j].children[m].name;
                this.attribute.push(attributeedge);
              }
              break;
            }
          }
        }
        break;
      }
    }
    if(this.selectedVisible==true){
      this.edgecheck();
    }
  }

  edgecheck(){
    this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Edges"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributeedge:any=[];
            attributeedge.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributeedge);
          }
          break;
        }
      }
    }
  }

  wire(Visible){
  	this.Visible="wire";
    this.attribute=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          for(var j=0;j<this.scene.children[n].children[i].children.length;j++){
            if(this.scene.children[n].children[i].children[j].name==="Wires"){
              for(var m=0;m<this.scene.children[n].children[i].children[j].children.length;m++){
                var attributeface:any=[];
                attributeface.id=this.scene.children[n].children[i].children[j].children[m].name;
                this.attribute.push(attributeface);
              }
            }
          }
        }
        break;
      }
    }
    if(this.selectedVisible==true){
      this.wirecheck();
    }
  }

  wirecheck(){
    this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Wires"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributewire:any=[];
            attributewire.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributewire);
          }
        }
      }
    }
  }

  face(Visible){
  	this.Visible="face";
  	this.attribute=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          for(var j=0;j<this.scene.children[n].children[i].children.length;j++){
            if(this.scene.children[n].children[i].children[j].name==="Faces"){
              for(var m=0;m<this.scene.children[n].children[i].children[j].children.length;m++){
                var attributeface:any=[];
                attributeface.id=this.scene.children[n].children[i].children[j].children[m].name;
                this.attribute.push(attributeface);
              }
            }
          }
        }
        break;
      }
    }
    if(this.selectedVisible==true){
      this.facecheck();
    }
  }
  
  facecheck(){
  	this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children.length;j++){
        if(this.selectObj[i].children[j].name==="Faces"){
          for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
            var attributeface:any=[];
            attributeface.id=this.selectObj[i].children[j].children[n].name;
            this.attribute.push(attributeface);
          }
        }
      }
    }
  }

  object(Visible){
  	this.Visible="object";
    this.attribute=[];
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        for(var i=0;i<this.scene.children[n].children.length;i++){
          for(var j=0;j<this.scene.children[n].children[i].children[this.scene.children[n].children[i].children.length-1].children.length;j++){
            var attributeobj:any=[];
            attributeobj.id=this.scene.children[n].children[i].children[this.scene.children[n].children[i].children.length-1].children[j].name;
            this.attribute.push(attributeobj);
          }
        }
        break;
      }
    }
    if(this.selectedVisible==true){
      this.objectcheck();
    }
  }

  objectcheck(){
  	this.attribute=[];
    for(var i=0;i<this.selectObj.length;i++){
      for(var j=0;j<this.selectObj[i].children[this.selectObj[i].children.length-1].children.length;j++){
        var attributeobj:any=[];
        attributeobj.id=this.selectObj[i].children[this.selectObj[i].children.length-1].children[j].name;
        this.attribute.push(attributeobj);
      } 
    }
  }

  changeselected(){
  	this.selectedVisible = !this.selectedVisible;
    if(this.selectedVisible){
      if(this.Visible==="point"){
      	this.pointcheck();
      }
      if(this.Visible==="vertice"){
      	this.verticecheck();
      }
      if(this.Visible==="edge"){
        this.edgecheck();
      }
      if(this.Visible==="wire"){
        this.wirecheck();
      }
      if(this.Visible==="face"){
      	this.facecheck();
      }
      if(this.Visible==="object"){
      	this.objectcheck();
      }
      
    }
    else{
      if(this.Visible==="point"){
      	this.point(this.Visible);
      }
      if(this.Visible==="vertice"){
      	this.vertice(this.Visible);
      }
      if(this.Visible==="edge"){
      	this.edge(this.Visible);
      }
      if(this.Visible==="wire"){
      	this.wire(this.Visible);
      }
      if(this.Visible==="face"){
      	this.face(this.Visible);
      }
      if(this.Visible==="object"){
      	this.object(this.Visible);
      }
     
    }
  }

  Onselect(i){
  	var select;
    console.log(i);
    for(var n=0;n<this.scene.children.length;n++){
      if(this.scene.children[n].type==="Scene"){
        console.log(this.scene.children[n].children.length);
        for(var m=0;m<this.scene.children[n].children.length;m++){
          var sprite:Array<any>=this.scene.children[n].children[m].children[this.scene.children[n].children[m].children.length-1].children;
          console.log(sprite);
          for(var j=0;j<sprite.length;j++){
            if(sprite[j].name===i){
              console.log(sprite[j].parent.parent);
            }
          }
        }
        
        //this.scene.children[n].children
      }
    }
  	// for(var j=0;j<this.attribute.length;j++){
  	//   if(this.attribute[j].id==i){
  	//   	select=this.attribute[j].mesh;
  	//   	this.dataService.pushselecting(select);
  	//   	select.material.color.setHex(0x2E9AFE);
   //      console.log(this.attribute[j]);
  	//   }
  	// }

  }

}