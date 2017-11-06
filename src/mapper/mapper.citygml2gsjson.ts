import { Component } from '@angular/core';
import { AppArray } from '../app/app.array';
import { Mapper } from './mapper.component';
import { GSJSON } from '../formatstructure/formatstructure.gsjson';
import { Metadata } from '../formatstructure/formatstructure.gsjson';
import { Skins } from '../formatstructure/formatstructure.gsjson';
import { Semantics } from '../formatstructure/formatstructure.gsjson';
import { Attribute } from '../formatstructure/formatstructure.gsjson';
import { Collection } from '../formatstructure/formatstructure.gsjson';
import { Util } from '../util/gsjsonutil';

export class CityGML2GSJSON implements Mapper {
  positions:AppArray<Array<number>>;
  geometry:Array<any>;
  points: Array<any>;
  
  constructor() {
    this.positions=new AppArray([]);
    this.geometry=[];
    this.points=[];
  }

	map(citygml:any) {	
    this.mapBuildElement(citygml.getElementsByTagName("bldg:RoofSurface"));
    this.mapBuildElement(citygml.getElementsByTagName("bldg:WallSurface"));
    this.mapBuildElement(citygml.getElementsByTagName("bldg:InteriorWallSurface"));
    this.mapBuildElement(citygml.getElementsByTagName("bldg:FloorSurface"));
    var attrArray=new Array<Attribute>();
    attrArray.push(new Attribute("", "position", "points", this.points, this.positions.values));
    var data=new GSJSON(new Metadata("",0.1,"","",""),new Skins([],[],[]),this.geometry,new Semantics(attrArray,[]));
    return JSON.stringify(data);
  }

  mapBuildElement(features) {
    for (var i=0;i<features.length ;i++) {
      var feature=features[i];
      var shell=this.mapGeometry(feature);
      shell.push(200);
      this.geometry.push(shell);
      
      this.mapOpenings(feature.getElementsByTagName("bldg:Window"));
      this.mapOpenings(feature.getElementsByTagName("bldg:Door"));
    }
  }

  mapOpenings(openings) {
    for (var i=0;i<openings.length ;i++) {
      var shell=this.mapGeometry(openings[i]);
      shell.push(200);
      this.geometry.push(shell);
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