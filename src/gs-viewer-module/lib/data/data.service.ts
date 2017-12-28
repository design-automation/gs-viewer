import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class DataService {

  _data: any;
  _camera:any;
  _renderer:any;
  _Geom:any;


  _scene: THREE.Scene;

  _alight: any[] = [];
  _setting: {hue: number, saturation: number, lightness: number} = {
    hue: 0, 
    saturation: 0,
    lightness: 0
  }

  _gridVisible: boolean = false; 

  addToScene(object: any): void{
    this._scene.add(object);
  }

  removeFromScene(objectName: string): void{
    this._scene.remove(this._scene.getObjectByName(objectName));
  }

  addScene(scene): void{
  	this._data = scene;
  }

  getScene(): any{
  	return this._data;
  }

  addCamera(camera): void{
  	this._camera = camera;
  }

  getCamera(): any{
  	return this._camera;
  }

  addRender(renderer): void{
  	this._renderer = renderer;
  }

  getRender(): any{
  	return this._renderer;
  }

  addAmbientLight() {
    this._setting = {
      hue: 0, 
      saturation: 0,
      lightness: 0.7
    }

    var light = new THREE.AmbientLight( 0xffffff);

    this._data.add( light );
    this._alight.push(light);
    var alight=this._alight;

    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( this._setting.hue, this._setting.saturation, this._setting.lightness);
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
  
}
