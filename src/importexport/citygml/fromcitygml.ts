import { Component } from '@angular/core';
import { AppArray } from '../../app/app.array';
import { AbstractMapper } from '../base.component';
import { GSJSON } from '../../data/gsjson';
import { Metadata } from '../../data/gsjson';
import { Skins } from '../../data/gsjson';
import { Attribute } from '../../data/gsjson';
import { Groups } from '../../data/gsjson';
import { DATA } from '../../data/data';
import { OBJTYPE } from '../../data/data';
import { GEntry } from '../../data/gsjson';
import { Util } from '../../util/gsjsonutil';

export class FromCityGML extends AbstractMapper {
  posAppArray:AppArray<Array<number>>;
  constructor() {
    super();
    DATA.initDataset();
    DATA.json.metadata.filetype="mobius";
    this.posAppArray=new AppArray(DATA.positions);
  }

	map(citygml:any) { 
    this.mapBuildings(citygml,"bldg:Building");
    return JSON.stringify(DATA.json);
  }

  mapBuildings(citygml:any, type) {
    var bldgs=citygml.getElementsByTagName(type);
    if(bldgs.length==0) {
      return;
    }
    var building=DATA.json.groups.generateEntry(type, "citygml");
    building.objects=undefined;
    var num_roofs=0,num_walls=0,num_interiorwalls=0,num_floors=0;
    for (var i=0;i<bldgs.length ;i++) {
      var bldg=bldgs[i];
      num_roofs=num_roofs+this.mapBuildElement(bldg, "bldg:RoofSurface", building);
      num_walls=num_walls+this.mapBuildElement(bldg, "bldg:WallSurface", building);
      num_interiorwalls=num_interiorwalls+this.mapBuildElement(bldg, "bldg:InteriorWallSurface", building);
      num_floors=num_floors+this.mapBuildElement(bldg, "bldg:FloorSurface", building);
    }
    var props={
        "num_roofs":num_roofs,
        "num_walls":num_walls,
        "num_interiorwalls":num_interiorwalls,
        "num_floors":num_floors
    };
    building.props=props;
  }

  mapBuildElement(bldg, type, parent) {
    var features=bldg.getElementsByTagName(type);
    if(features.length==0) {
      return 0;
    }
    var entry=DATA.json.groups.generateEntry(type, parent.name);
    for (var i=0;i<features.length ;i++) {
      var feature=features[i];
      DATA.json.objs.push(this.mapGeometry(feature));
      entry.objects.push(DATA.json.objs.length-1);
      this.mapOpenings(feature, "bldg:Window", entry);
      this.mapOpenings(feature, "bldg:Door", entry);
    }
    return entry.objects.length;
  }

  mapOpenings(feature, type, parent) {
    var subFeatures=feature.getElementsByTagName(type);
    if(subFeatures.length==0) {
      return;
    }
    var entry=DATA.json.groups.generateEntry(type, parent.name);
    for (var i=0;i<subFeatures.length ;i++) {
      DATA.json.objs.push(this.mapGeometry(subFeatures[i]));
      entry.objects.push(DATA.json.objs.length-1);
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