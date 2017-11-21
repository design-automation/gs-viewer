import { Component } from '@angular/core';
import { AbstractMapper } from '../base.component';

export class ToCityGML extends AbstractMapper {
  constructor() {
    super();
  }

	map(gsjson:any) {
    alert(gsjson);
    //TO DO for gsjson to citygml Translation
    return null;
  }
}