import { Component } from '@angular/core';
import { AbstractMapper } from '../base.component';

export class ToThreeJS extends AbstractMapper {
  map(gsjson:any) {
    alert(gsjson);
    //TO DO for gsjson to threejs Translation
    return null;
  }
}