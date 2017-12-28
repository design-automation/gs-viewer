import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { ViewerComponent } from './viewer/viewer.component';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { SettingComponent } from './setting/setting.component';
import { AttributeComponent } from './toolwindow/attribute.component';
import { GroupsComponent } from './toolwindow/groups.component';
import { AngularSplitModule } from 'angular-split';
import { DataService } from './data.service';
import {MatSliderModule} from '@angular/material/slider';
import { CanvasComponent } from './viewer/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    ToolwindowComponent,
    SettingComponent,
    AttributeComponent,
    GroupsComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,AngularSplitModule,
    MatSliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
}