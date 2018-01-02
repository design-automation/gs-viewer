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
  INTERSECTEDColor:any;

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
  addINTERSECTEDColor(INTERSECTEDColor):void{
    if(this.INTERSECTEDColor==null){
      this.INTERSECTEDColor=INTERSECTEDColor;
    }
  }
  getINTERSECTEDColor():any{
    return this.INTERSECTEDColor
  }
}

export function box_with_groups() {
    return {
        attribs: null,
        geom: {
            objs: [
                [
                    [
                        [0, 1, 2, 3, -1],
                    ],
                    [
                        [1, 5, 4, 0, -1],
                        [2, 6, 5, 1, -1],
                        [3, 7, 6, 2, -1],
                        [0, 4, 7, 3, -1],
                        [5, 6, 7, 4, -1],
                    ],
                    [200],
                ],
            ],
            points: [
                [0, 1, 2, 3, 4, 5, 6, 7],
                [
                    [-0.7, -1.0, 0.0],
                    [0.2, -1.0, 0.0],
                    [0.2, -1.0, 3.0],
                    [-0.7, -1.0, 3.0],
                    [-0.7, 1.0, 0.0],
                    [0.2, 1.0, 0.0],
                    [0.2, 1.0, 3.0],
                    [-0.7, 1.0, 3.0],
                ],
            ],
        },
        groups: [
            {
                name: "building_obj",
                objs: [0],
                props: [["descr", "The building object, that has wire and faces."]],
            },
            // groups with topo
            {
                name: "building_all_faces",
                topos: [
                    [[0, [0, 1, 2, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "walls",
                parent: "building_obj",
                props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
                topos: [
                    [[0, [1, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "floor",
                parent: "building_obj",
                topos: [
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "roof",
                parent: "building_obj",
                topos: [
                    [[0, [2]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "winodw_openings",
                parent: "building_obj",
                topos: [
                    [],
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertical_edges_of_faces",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [1, [1, 3]],
                                [3, [1, 3]],
                                [4, [0, 2]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertices_on_ground",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [0, [0, 1, 2, 3]],
                                [1, [2, 3]],
                                [3, [0, 1]],
                                [4, [0, 3]],
                            ],
                        ],
                    ],
                    [
                        [0,
                            [
                                [0, [0, 1]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "points_on_ground",
                parent: "building_obj",
                points: [0, 1, 4, 5],
            },
        ],
        metadata: {
            crs: { epsg: 3857 },
            filetype: "gs-json",
            location: "+0-0",
            version: "0.1.1",
        },
        skins: null,
    };
}
