import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { ViewerComponent } from './viewer/viewer.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}