import { Component } from '@angular/core';
import { AppArray } from '../app/app.array';

export class GSJSON {
  metadata:Metadata;
  skins:Skins;
  points:Array<any>;
  objs:Array<any>;
  groups:Groups;
  geometry:Array<any>;
}

export class Metadata { 
  filetype:string;
  version: number;
  schema:string;
  crs: string;
  location: string;

  constructor(filetype:string,version: number, schema:string, crs: string,location: string) {
    this.filetype=filetype;
    this.version=version;
    this.schema=schema;
    this.crs=crs;
    this.location=location;
  }
}

export class Skins { 
  images:Array<any>;
  textures: Array<any>;
  materials:Array<any>;

  constructor(images:Array<any>, textures: Array<any>, materials:Array<any>) {
    this.images=images;
    this.textures=textures;
    this.materials=materials;
  }
}

export class Attribute {
    uuid:string;
    name:string;
    topology:string;
    map:Array<number>;
    values:Array<any>;
    constructor(uuid:string,name:string,topology:string,map:Array<number>,values:Array<any>) {
      this.uuid=uuid;
      this.name=name;
      this.topology=topology;
      this.map=map;
      this.values=values;
    }
}

export class Groups extends Array<GEntry> {

  public getIndex = (name:string, ptype:string) : number => {
      var ind=this.findIndex(function(entry, index, arr){
        return Groups.areEqual(name, ptype, entry);
      });
      return ind;
  }

  private static areEqual = (name:string, pname:string, gEntry) : boolean => {
    if(name!=gEntry.name) {
      return false;
    } else if(pname!=gEntry.parent) {
      return false;
    }
    return true;
  }

  public generateEntry = (type:string, ptype:string): GEntry => {
    var ind=this.getIndex(type, ptype);
    var entry;
    if(ind<0) {
      entry=new GEntry(type, ptype, []);
      this.push(entry);
    } else {
      entry=this[ind];
    }
    return entry;
  }
}

export class GEntry {
  name:string;
  objects:Array<number>;
  parent:string;
  props:any;

  constructor(name:string, pname:string, objects:Array<number>) {
    this.name=name;
    this.parent=pname;
    this.objects=objects;
  }
}