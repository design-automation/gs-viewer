import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ViewerComponent } from './viewer.component';

@NgModule({
  declarations: [
    ViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ViewerComponent]
})
export class ViewerModule { }