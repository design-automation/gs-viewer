import { Component } from '@angular/core';
import { GSJSON } from '../data/gsjson';
import { Collections } from '../data/gsjson';
import { Metadata } from '../data/gsjson';
import { Skins } from '../data/gsjson';
import { Attribute } from '../data/gsjson';

export enum OBJTYPE {
	NUMARRAY,
	POINT,
	VERTEX,
    EDGE,
    WIRE,
    FACE,
    SHELL
}

export class DATA {
  static json:GSJSON;
  static points: Array<any>;
  static positions:Array<Array<number>>;
  static initDataset() {
    DATA.json=new GSJSON();
    
    DATA.json.metadata=new Metadata("",0.1,"","",""); 
    DATA.json.skins=new Skins([],[],[]);
    
    DATA.json.geometry=[];
    
    DATA.points=[];
    DATA.positions=[];
    DATA.json.attributes=new Array<Attribute>(); 
    DATA.json.attributes.push(new Attribute("", "position", "points", DATA.points, DATA.positions)); 
    
    DATA.json.collections=new Collections();
  }
  static areEqualTypes(value,entry,type) {
    if(type==OBJTYPE.EDGE) {
      return (DATA.points[value[0]]==DATA.points[entry[0]]
        && DATA.points[value[1]]==DATA.points[entry[1]]);
    }
    return false;
  }
}