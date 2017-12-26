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
  scenechange:THREE.Scene;
  ngOnInit() {
  
  }
  constructor(private dataService: DataService){
    this.boxes=box_with_groups();
    this.model= new gs.Model(this.boxes);
    this.geometry=this.dataService.getGeom();
    this.scene=this.dataService.getScene();
    this.scenechange=new THREE.Scene();
  }
  objects(sixtool){
  	this.sixtool="objects";
  }
  shells(sixtool){
  	this.sixtool="shells";
  }
  faces(sixtool){
  	this.sixtool="faces";
  }
  wires(sixtool){
  	this.sixtool="wires";
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
  }
  edges(sixtool){
  	this.sixtool="edges";
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
  }
  vertices(sixtool,model: gs.IModel){
  	this.sixtool="vertices";
    this.scenechange=new THREE.Scene();
    var material_vertices=new THREE.PointsMaterial({color:0x0000ff,size:0.08});
    var points=new THREE.Points(this.geometry,material_vertices);
    this.scenechange.add(points);
    this.scene.children[this.scene.children.length-1] = this.scenechange;
  }
  points(sixtool){
  	this.sixtool="points";
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
  }

}