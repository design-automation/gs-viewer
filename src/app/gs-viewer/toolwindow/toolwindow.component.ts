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
  boxes:any;
  model:gs.IModel;
  scene:THREE.Scene;
  attribute:Array<any>;
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
  	this.object(this.dataService.visible);
  }

  notify(){ 
  	if(this.dataService.selectedVisible==true){
  	  this.objectcheck();
  	}
    /*for(var i=0;i<this.dataService.selecting.length;i++){
      for(var j=0;j<this.scene.children[1].children.length;j++){
        if(this.dataService.selecting[i].uuid===this.scene.children[1].children[j].children[0].uuid){
           console.log(this.scene.children[1].children[j].children[0].parent);
           this.selectObj.push(this.scene.children[1].children[j].children[0].parent);
        }
      }
    }*/
  }

  point(Visible){
  	this.dataService.visible="Points";
  	this.attribute=[];
    for(var i=0;i<this.model.getGeom().getAllPoints().length;i++){
      var attributepoints:any=[];
      attributepoints.id=this.model.getGeom().getAllPoints()[i].getID();
      attributepoints.x=this.model.getGeom().getAllPoints()[i].getPosition()[0];
      attributepoints.y=this.model.getGeom().getAllPoints()[i].getPosition()[1];
      attributepoints.z=this.model.getGeom().getAllPoints()[i].getPosition()[2];
      this.attribute.push(attributepoints);
    }
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  vertice(Visible){
  	this.dataService.visible="Vertices";
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
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  edge(Visible){
  	this.dataService.visible="Edges";
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
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  wire(Visible){
  	this.dataService.visible="Wires";
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
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  face(Visible){
  	this.dataService.visible="Faces";
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
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  object(Visible){
  	this.dataService.visible="Objects";
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
    this.dataService.modified=true;
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
    this.dataService.modified=true;
  }

  changeselected(){
  	this.dataService.selectedVisible = !this.dataService.selectedVisible;
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
    if(this.dataService.selectedVisible){
      if(this.dataService.visible==="point"){
      	this.pointcheck();
      }
      if(this.dataService.visible==="vertice"){
      	this.verticecheck();
      }
      if(this.dataService.visible==="edge"){
        this.edgecheck();
      }
      if(this.dataService.visible==="wire"){
        this.wirecheck();
      }
      if(this.dataService.visible==="face"){
      	this.facecheck();
      }
      if(this.dataService.visible==="object"){
      	this.objectcheck();
      }
    }
    else{
      if(this.dataService.visible==="point"){
      	this.point(this.dataService.visible);
      }
      if(this.dataService.visible==="vertice"){
      	this.vertice(this.dataService.visible);
      }
      if(this.dataService.visible==="edge"){
      	this.edge(this.dataService.visible);
      }
      if(this.dataService.visible==="wire"){
      	this.wire(this.dataService.visible);
      }
      if(this.dataService.visible==="face"){
      	this.face(this.dataService.visible);
      }
      if(this.dataService.visible==="object"){
      	this.object(this.dataService.visible);
      } 
    }
    this.dataService.modified=true;
  }

  Onselect(i){
  	var select;
  	for(var j=0;j<this.attribute.length;j++){
  	  if(this.attribute[j].original==i){
  	  	select=this.attribute[j].mesh;
  	  	this.dataService.pushselecting(select);
  	  	select.material.color.setHex(0x2E9AFE);
  	  }
  	}
    this.dataService.modified=true;
  }
}