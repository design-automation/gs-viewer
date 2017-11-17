import { Component } from '@angular/core';
import { Importer } from '../importexport/base.component';
import { Exporter } from '../importexport/base.component';
import { ImportExportFactory } from '../importexport/factory.component';
import { JSONReader } from '../importexport/readerwriter.component';
import { ViewerComponent } from './viewer/viewer.component';
import { DATA } from '../data/data';

@Component({
  	selector: 'app-root',
  	styleUrls: ['./app.component.css'],
  	templateUrl: './app.component.html',
})

export class AppComponent {
  constants=ImportExportFactory.KEYS;
  static selection:HTMLSelectElement;
  static input:HTMLInputElement;
  static download:HTMLAnchorElement;

  static initForm(){
    AppComponent.input=document.createElement('input');
    AppComponent.input.type="file";
    AppComponent.download = document.createElement('a');

    var importers=document.getElementsByName("importers");
    for(var i=0;i<importers.length;i++) {
      importers[i].onclick=function(this,event) {
        AppComponent.input.id=this.id;
        AppComponent.input.onchange=function(this,e) {
          AppComponent.importFile(e,this.id);
        };
        AppComponent.input.click();
      }
    }

    var exporters=document.getElementsByName("exporters");
    for(var i=0;i<exporters.length;i++) {
      exporters[i].onclick=function(this,event) {
        AppComponent.exportFile(this.id);
      }
    }
    // document.getElementById("openf").onclick=function() {
    //   AppComponent.input.onclick=function(e) {
    //     AppComponent.importFile(e,"gs");
    //   };
    //   AppComponent.input.click();
    // }
    // document.getElementById("savef").onclick=function() {
    //   AppComponent.exportFile("threejs");
    // }
    // document.getElementById("icitygml").onclick=function() {
    //   AppComponent.input.onclick=function(e) {
    //     AppComponent.importFile(e,"citygml");
    //   };
    //   AppComponent.input.click();
    // }
    // document.getElementById("ethreejs").onclick=function() {
    //   AppComponent.exportFile("threejs");
    // }
  }

  static importFile(inputEvent, inputType) {
    var inputFile=inputEvent.target.files[0];  
    var filepatharray=inputFile.name.split(".");
    var ext=filepatharray[filepatharray.length-1];
    
    if(inputFile==null || inputFile==undefined) {
      alert("Please select input file");
      return;
    }
    var importer=ImportExportFactory.getImporter(inputFile, inputType);
    importer.reader.onload=function() {
      var data = importer.import();
      //viewer code here  
    }
  }

  static exportFile(outputType:string) {
    var exporter=ImportExportFactory.getExporter(outputType);
    AppComponent.save(exporter.export());
  }

  static save(data) {
    AppComponent.download.href = 'data:' + data;
    AppComponent.download.download = 'data';
    AppComponent.download.innerHTML = 'Download File';
    AppComponent.download.click(); 
  }
}

var viewer;
window.onload=function() {
  viewer=new ViewerComponent();
  animate();
  AppComponent.initForm();
}

function animate() {
    requestAnimationFrame( animate );
    viewer.controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
    viewer.render();
}