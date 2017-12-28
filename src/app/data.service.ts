import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class DataService {

  _data: any;
  _renderer:any;
  _saturation:any;
  _lightness:any;
  _alight:any;
  _hueValue:number;
  _saturationValue:number;
  _lightnessValue:number;
  _Geom:any;
  hue: number;
  saturation:number;
  lightness:number;
  scenechange:any;

  constructor() { 
    this._alight=[];
    this.scenechange=this._data;
  }

  addScene(scene): void{
  	this._data = scene;
  }

  getScene(): any{
  	return this._data;
  }

  addRender(renderer): void{
  	this._renderer = renderer;
  }

  getRender(): any{
  	return this._renderer;
  }

  addAmbientLight() {
    this._hueValue=0;
    this._saturationValue=0;
    this._lightnessValue=0.7;
    var light = new THREE.AmbientLight( 0xffffff);
    this._data.add( light );
    this._alight.push(light);
    var alight=this._alight;
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( this._hueValue, this._saturationValue, this._lightnessValue);
    }
  }
  getalight():any{
    return this._alight;
  }

  addlightvalue(hue,saturation,lightness){
    this._hueValue=hue;
    this._saturationValue=saturation;
    this._lightnessValue=lightness;
  }

  gethue(_hue):any{
    this.hue = _hue;
  }
  getsaturation(_saturation):any{
    this.saturation = _saturation;
  }
  getlightness(_lightness):any{
    this.lightness = _lightness;
  }

  addGeom(Geom): void{
    this._Geom = Geom;
  }

  getGeom(): any{
    return this._Geom;
  }
  addscenechange(scenechange){
    this.scenechange=scenechange;
  }
  getscenechange():any{
    return this.scenechange;
  }
  
}
