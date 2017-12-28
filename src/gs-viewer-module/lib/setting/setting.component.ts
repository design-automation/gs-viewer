import {Component, OnInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as THREE from 'three';

import {DataService} from '../data/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [DataService]
})
export class SettingComponent implements OnInit {
  
  scene: THREE.Scene; 

  effectController:any;
  renderer:any;
  camera:any;
  light:any;
  alight:Array<THREE.AmbientLight>;
  gridVisible: boolean; 
  axisVisible: boolean; 
  fogVisible: boolean; 
  hue:number;
  saturation:number;
  lightness:number;
  hueValue:number;
  saturationValue:number;
  lightnessValue:number;

  constructor(dataService: DataService){  }

  ngOnInit(){
    this.hue = this.dataService._setting.hue;
    this.saturation = this.dataService._setting.saturation; 
    this.lightness = this.dataService._setting.lightness; 
    this.alight = this.dataService._alight;
    this.gridVisible = this.dataService._gridVisible;

    this.scene = this.dataService.getScene();
  }

  //
  //    Toggles grid in the scene
  //
  toggleGrid(): void{

      let default_grid_name: string = "GridHelper";
      this.gridVisible = !this.gridVisible;

      if(this.gridVisible){
          let gridhelper = new THREE.GridHelper( 500, 500 );
          gridhelper.name = default_grid_name;
          this.dataService.addToScene( gridhelper);
      }
      else{
          this.dataService.removeFromScene( "GridHelper" );
      }
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    if(this.axisVisible){
      var axishelper = new THREE.AxisHelper( 1000 );
      axishelper.name="AxisHelper";
      this.scene.add( axishelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("AxisHelper"));
    }
  }

  changefog(){
    this.fogVisible = !this.fogVisible;
    if(this.fogVisible){
      this.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
    }else {
      this.scene.fog=null;
    }
  }

  changelight(_hue,_saturation,_lightness){
    this.hue=_hue;
    this.saturation=_saturation;
    this.lightness=_lightness;
    var alight=this.alight;
    this.dataService.gethue(_hue);
    this.dataService.getsaturation(_saturation);
    this.dataService.getlightness(_lightness);
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( _hue, _saturation,_lightness );
    }
  }

}

