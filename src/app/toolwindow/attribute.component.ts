import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';
import { TreeView} from '@syncfusion/ej2-navigations'; 
import { box_with_groups } from '../viewer/viewer.component';
import * as gs from "gs-json";
import {DataService} from '../data.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  sixtool:string="objects";
  model:any;
  boxes:any;
  geometry:THREE.Geometry;
  scene:any;
  scenechange:any;
  attributeScale:any;

  ngOnInit() {

  }
  constructor(private dataService: DataService){
    this.boxes=box_with_groups();
    this.model= new gs.Model(this.boxes);
    this.geometry=this.dataService.getGeom();
    this.scene=this.dataService.getScene();
    this.scenechange=this.dataService.getScene();
    this.dataService.addscenechange(this.scenechange);
    this.attributeScale=[];
  }
  objects(sixtool){
  	this.sixtool="objects";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var geometry=new THREE.Geometry();
    var wireMaterial = new THREE.MeshPhongMaterial( { color: 0x0000FF,side:THREE.BackSide,wireframe:false } );
    for (const p of this.model.getGeom().getPoints()) {
      const xyz: number[] = p.getPosition();
      geometry.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
      var points = new THREE.Mesh( geometry,wireMaterial);
      this.scenechange.add(points);
    }
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
          const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
          geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[1],point_IDs[2]));
          geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[2],point_IDs[3]));
          var objects = new THREE.Mesh( geometry, wireMaterial);
          this.scenechange.add(objects);
        }
    }
    this.scene.children[this.scene.children.length-1] = this.scenechange;
    this.dataService.addscenechange(this.scenechange);
    for(var i=0;i<this.scenechange.children.length;i++){
      this.attributeScale[i]=this.scenechange.children[i].scale
    }
  }

  faces(sixtool){
  	this.sixtool="faces";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var geometry=new THREE.Geometry();
    var wireMaterial = new THREE.MeshPhongMaterial( { color: 0x0000FF,side:THREE.BackSide,wireframe:false } );
    for (const p of this.model.getGeom().getPoints()) {
      const xyz: number[] = p.getPosition();
      geometry.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
      var points = new THREE.Mesh( geometry,wireMaterial);
      this.scenechange.add(points);
    }
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
          const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
          geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[1],point_IDs[2]));
          geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[2],point_IDs[3]));
          var objects = new THREE.Mesh( geometry, wireMaterial);
          this.scenechange.add(objects);
        }
    }
    this.scene.children[this.scene.children.length-1] = this.scenechange;
    this.dataService.addscenechange(this.scenechange);
  }
  wires(sixtool){
  	this.sixtool="wires";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var geometry_wires=new THREE.Geometry();
    var material_wires = new THREE.LineBasicMaterial({ color: 0x0000FF});
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const wires: gs.IWire[] = polymesh.getWires();
      for (const wire of wires) {
        const is_closed: boolean = wire.isClosed();
        const point_IDs: number[] = wire.getVertices().map((v, i) => v.getPoint().getID());
        for(var i=0;i<point_IDs.length-1;i++){
          var vex1=this.geometry.vertices[point_IDs[i]];
          var vex2=this.geometry.vertices[point_IDs[i+1]];
          geometry_wires.vertices.push(vex1);
          geometry_wires.vertices.push(vex2);
          var wiresline = new THREE.Line( geometry_wires, material_wires);
          this.scenechange.add(wiresline);
        }
        if(is_closed==true){
          var vex1=this.geometry.vertices[point_IDs[point_IDs.length-1]];
          var vex2=this.geometry.vertices[point_IDs[0]];
          geometry_wires.vertices.push(vex1);
          geometry_wires.vertices.push(vex2);
          var wiresline = new THREE.Line( geometry_wires, material_wires);
          this.scenechange.add(wiresline);
        }
      }
    }
    this.scene.children[this.scene.children.length-1] = this.scenechange;
    this.dataService.addscenechange(this.scenechange);
  }
  edges(sixtool){
  	this.sixtool="edges";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var geometry_edges=new THREE.Geometry();
    var material_edges = new THREE.LineBasicMaterial({ color: 0x0000FF});
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
      for (const face of faces) {
        const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
        for(var i=0;i<point_IDs.length-1;i++){
          var vex1=this.geometry.vertices[point_IDs[i]];
          var vex2=this.geometry.vertices[point_IDs[i+1]];
          geometry_edges.vertices.push(vex1);
          geometry_edges.vertices.push(vex2);
          var line = new THREE.Line( geometry_edges, material_edges);
          this.scenechange.add(line);
        }
        var vex1=this.geometry.vertices[point_IDs[point_IDs.length-1]];
        var vex2=this.geometry.vertices[point_IDs[0]];
        geometry_edges.vertices.push(vex1);
        geometry_edges.vertices.push(vex2);
        var line = new THREE.Line( geometry_edges, material_edges);
        this.scenechange.add(line);
      }
    }
    this.scene.children[this.scene.children.length-1] = this.scenechange;
    this.dataService.addscenechange(this.scenechange);
  }
  vertices(sixtool,model: gs.IModel){
  	this.sixtool="vertices";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var material_vertices=new THREE.PointsMaterial({color:0x0000ff,size:0.08});
    var points=new THREE.Points(this.geometry,material_vertices);
    this.scenechange.add(points);
    this.scene.children[this.scene.children.length-1] = this.scenechange;
    this.dataService.addscenechange(this.scenechange);
    for(var i=0;i<this.geometry.vertices.length;i++){
      this.attributeScale[i]=this.geometry.vertices[i];
    }
  }
  points(sixtool){
  	this.sixtool="points";
    this.attributeScale=[];
    this.scenechange=new THREE.Scene();
    var pointsposition=this.model._kernel._points[1];
    var material_points=new THREE.PointsMaterial({color:0x0000ff,size:0.08});
    var geometry_points=new THREE.Geometry();
    for(var i=0;i<pointsposition.length;i++){
      geometry_points.vertices.push(new THREE.Vector3(pointsposition[i][0], pointsposition[i][1], pointsposition[i][2]));
      var points=new THREE.Points(geometry_points,material_points);
      this.scenechange.add(points);
      this.scene.children[this.scene.children.length-1] = this.scenechange;
    }
    this.dataService.addscenechange(this.scenechange);
    for(var i=0;i<this.scenechange.children.length;i++){
      var attributepoints=new THREE.Vector3();
      attributepoints.x=pointsposition[i][0];
      attributepoints.y=pointsposition[i][1];
      attributepoints.z=pointsposition[i][2];
      this.attributeScale.push(attributepoints);
    }
  }


}