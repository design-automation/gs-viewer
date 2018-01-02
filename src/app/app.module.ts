import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// if importing from npm
// import {GSViewer} from 'gs-viewer';


// for dev purpose -
import {GSViewer} from './gs-viewer/gs-viewer.module';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GSViewer
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}