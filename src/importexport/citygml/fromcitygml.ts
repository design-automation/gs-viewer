import { Component } from '@angular/core';
import { AppArray } from '../../app/app.array';
import { AbstractMapper } from '../base.component';
import { GSJSON } from '../../data/gsjson';
import { Metadata } from '../../data/gsjson';
import { Skins } from '../../data/gsjson';
import { Attribute } from '../../data/gsjson';
import { Collections } from '../../data/gsjson';
import { DATA } from '../../data/data';
import { OBJTYPE } from '../../data/data';
import { CEntry } from '../../data/gsjson';
import { Util } from '../../util/gsjsonutil';

export class FromCityGML extends AbstractMapper {
  posAppArray:AppArray<Array<number>>;
  constructor() {
    super();
    DATA.initDataset();
    this.posAppArray=new AppArray(DATA.positions);
  }

	map(citygml:any) {	
    this.mapBuildElement(citygml, "bldg:RoofSurface");
    this.mapBuildElement(citygml, "bldg:WallSurface");
    this.mapBuildElement(citygml, "bldg:InteriorWallSurface");
    this.mapBuildElement(citygml, "bldg:FloorSurface");
    return JSON.stringify(DATA.json);
  }

  mapBuildElement(citygml, type) {
    var features=citygml.getElementsByTagName(type);
    if(features.length==0) {
      return;
    }
    var entry=DATA.json.collections.generateEntry(type);
    for (var i=0;i<features.length ;i++) {
      var feature=features[i];
      DATA.json.geometry.push(this.mapGeometry(feature));
      entry.entities.push([DATA.json.geometry.length-1]);
      this.mapOpenings(feature, "bldg:Window");
      this.mapOpenings(feature, "bldg:Door");
    }
  }

  mapOpenings(feature, type) {
    var subFeatures=feature.getElementsByTagName(type);
    if(subFeatures.length==0) {
      return;
    }
    var entry=DATA.json.collections.generateEntry(type);
    for (var i=0;i<subFeatures.length ;i++) {
      DATA.json.geometry.push(this.mapGeometry(subFeatures[i]));
      entry.entities.push([DATA.json.geometry.length-1]);
    }
  }

  mapGeometry(feature:Document) {
    var surface=feature.getElementsByTagName("gml:posList");
    var faces=[];
    var shell=[];
    for (var i=0;i<surface.length ;i++)
    { 
      faces.push(this.mapPolygon(surface[i]));
    }
    shell.push(faces);
    shell.push(Util.createWiresFromFaces(faces, DATA.points));
    shell.push([200]);
    return shell;
  }

  mapPolygon(surface) {
    var newpoints = surface.textContent.split(' ').map(function(item) {
      return parseFloat(item);
    });
    if(newpoints.length<3) {
      return [];
    }

    var poly=[]
    DATA.points.push(this.getPositionIndex([newpoints[0],newpoints[1],newpoints[2]]));
    poly.push(DATA.points.length-1);
    for (var j=3;j<newpoints.length-3 ;j=j+3) {
      var point = [newpoints[j],newpoints[j+1],newpoints[j+2]];
      var ind=this.getPositionIndex(point);
      if(AppArray.areEqual(point,poly[0])) {
        break;
      } else {
        DATA.points.push(ind);
        poly.push(DATA.points.length-1);
      }
    }
    poly.push(poly[0]);
    return poly;
  }

  getPositionIndex(point) {
    var ind=this.posAppArray.findIndex(point, OBJTYPE.NUMARRAY);
    if(ind<0) {
      this.posAppArray.values.push(point);
      ind=this.posAppArray.values.length-1;
    }
    return ind;
  }
}