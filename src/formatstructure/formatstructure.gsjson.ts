import { Component } from '@angular/core';

export class GSJSON {
  metadata:Metadata;
  skins:Skins;
  geometry:Array<any>;
  attributes:Array<Attribute>;
  collections:Collections;

  constructor(metadata:Metadata, skins:Skins, geometry:Array<any>, attributes:Array<Attribute>, collections:Collections) {
    this.metadata=metadata;
    this.skins=skins;
    this.geometry=geometry;
    this.attributes=attributes;
    this.collections=collections;
  }
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

// export class Semantics {
//     attributes:Array<Attribute>;
//     collections:Collections;

//     constructor(attributes:Array<Attribute>,collections:Collections) {
//       this.attributes=attributes;
//       this.collections=collections;
//     }
// }

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

export class Collections extends Array<CEntry> {

  public getIndex = (name:string) : number => {
      var ind=this.findIndex(function(entry, index, arr){
        return Collections.areEqual(name, entry);
      });
      return ind;
  }

  private static areEqual = (name:string, cEntry) : boolean => {
    if(name!=cEntry.name) {
      return false;
    }
    return true;
  }

  public generateEntry = (type:string): CEntry => {
    var ind=this.getIndex(type);
    var entry;
    if(ind<0) {
      entry=new CEntry(type, []);
      this.push(entry);
    } else {
      entry=this[ind];
    }
    return entry;
  }
}

export class CEntry {
  name:string;
  entities:Array<any>;

  constructor(name:string, entities:Array<any>) {
    this.name=name;
    this.entities=entities;
  }
}

