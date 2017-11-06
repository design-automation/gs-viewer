import { Component } from '@angular/core';
import { AppArray } from '../app/app.array';
import { Mapper } from './mapper.component';
import { GSJSON } from '../formatstructure/formatstructure.gsjson';
import { Metadata } from '../formatstructure/formatstructure.gsjson';
import { Skins } from '../formatstructure/formatstructure.gsjson';
import { Attribute } from '../formatstructure/formatstructure.gsjson';
import { Collections } from '../formatstructure/formatstructure.gsjson';
import { CEntry } from '../formatstructure/formatstructure.gsjson';
import { Util } from '../util/gsjsonutil';

export class CityGML2GSJSON implements Mapper {
  positions:AppArray<Array<number>>;
  geometry:Array<any>;
  collections:Collections;
  points: Array<any>;
  
  constructor() {
    this.positions=new AppArray([]);
    this.collections=new Collections();
    this.geometry=[];
    this.points=[];
  }

	map(citygml:any) {	
    this.mapBuildElement(citygml, "bldg:RoofSurface");
    this.mapBuildElement(citygml, "bldg:WallSurface");
    this.mapBuildElement(citygml, "bldg:InteriorWallSurface");
    this.mapBuildElement(citygml, "bldg:FloorSurface");
    var attrArray=new Array<Attribute>();
    attrArray.push(new Attribute("", "position", "points", this.points, this.positions.values));
    var data=new GSJSON(new Metadata("",0.1,"","",""),new Skins([],[],[]),this.geometry,attrArray,this.collections);
    return JSON.stringify(data);
  }

  mapBuildElement(citygml, type) {
    var features=citygml.getElementsByTagName(type);
    var entry=new CEntry(type, []);
    this.collections.push(entry);
    for (var i=0;i<features.length ;i++) {
      var feature=features[i];
      var shell=this.mapGeometry(feature);
      shell.push(200);
      this.geometry.push(shell);
      entry.entities.push(this.geometry.length-1);
      this.mapOpenings(feature, "bldg:Window");
      this.mapOpenings(feature, "bldg:Door");
    }
  }

  mapOpenings(feature, type) {
    var openings=feature.getElementsByTagName(type);
    var ind=this.collections.getIndex(type);
    var entry;
    if(ind<0) {
      entry=new CEntry(type, []);
      this.collections.push(entry);
    } else {
      entry=this.collections[ind];
    }
    
    for (var i=0;i<openings.length ;i++) {
      var shell=this.mapGeometry(openings[i]);
      shell.push(200);
      this.geometry.push(shell);
      entry.entities.push(this.geometry.length-1);
    }
  }

  mapGeometry(feature:Document) {
    var surface=feature.getElementsByTagName("gml:posList");
    var shell=[];
    var wires=[];
    var faces=[];
    for (var i=0;i<surface.length ;i++)
    { 
      var newpoints = surface[i].textContent.split(' ').map(function(item) {
        return parseFloat(item);
      });
      var poly=[];
      for (var j=0;j<newpoints.length-3 ;j=j+3) {
        var point = [newpoints[j],newpoints[j+1],newpoints[j+2]];
        var ind=this.positions.findIndex(point);
        if(ind<0) {
          this.positions.push(point);
          ind=this.positions.values.length-1;
        }
        this.points.push(ind);
        poly.push(ind);
      }
      if(poly.length>0 && poly[0] != poly[poly.length-1]) {
        poly.push(poly[0]);
      }
      faces.push(poly);
    }
    shell.push(faces);
    shell.push(Util.createWiresFromFaces(faces));
    return shell;
  }
}