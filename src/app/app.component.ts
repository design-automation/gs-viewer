import { Component } from '@angular/core';
import { Exporter } from '../exporter/exporter.component';
import { GSJSONExporter } from '../exporter/exporter.component';
import { ThreejsExporter } from '../exporter/exporter.component';
import { JSONReaderWriter } from '../exporter/exporter.readerwriter';
import { ViewerComponent } from './viewer/viewer.component';

@Component({
  	selector: 'app-root',
  	styleUrls: ['./app.component.css'],
  	templateUrl: './app.component.html',
})

export class AppComponent {
  static exporter:Exporter;
  static selection:HTMLSelectElement;
  static input:HTMLInputElement;
  static data:string;
  static inputFile:File;
  static inputType:string;
  static outputType:string;

  static reset() {
    AppComponent.inputType="";
    AppComponent.outputType="";
    AppComponent.inputFile=null;
    AppComponent.data="";
  }

  static initForm(){
    AppComponent.input=document.createElement('input');
    AppComponent.input.type="file";
    document.getElementById("openf").onclick=function() {
      AppComponent.reset();
      AppComponent.inputType="gsjson";
      AppComponent.outputType="gsjson";
      AppComponent.input.click();
    }
    document.getElementById("icitygml").onclick=function() {
      AppComponent.reset();
      AppComponent.inputType="citygml";
      AppComponent.outputType="gsjson";
      AppComponent.input.click();
    }
    document.getElementById("ethreejs").onclick=function() {
      AppComponent.reset();
      AppComponent.inputType="gsjson";
      AppComponent.outputType="threejs";
      AppComponent.exportf();
    }
  }

  static setListeners() {
    AppComponent.input.addEventListener("change", this.openf, false);
  }

  static savef(inputEvent) {
    AppComponent.save(AppComponent.data);
  }

  static openf(inputEvent) {
    AppComponent.inputFile=inputEvent.target.files[0];
    var filepatharray=AppComponent.inputFile.name.split(".");
    var ext=filepatharray[filepatharray.length-1];
    var it=AppComponent.inputType;
    var ot=AppComponent.outputType;
    if(it=="citygml" && ot=="gsjson") {
      if(ext=="gml" || ext=="xml") {
        var exporter=new GSJSONExporter(AppComponent.inputFile);
        AppComponent.exporter=exporter;
        exporter.reader.onload=function() {
          AppComponent.data=AppComponent.translate();
          var exporter=new ThreejsExporter(AppComponent.inputFile);
          AppComponent.exporter=exporter;
          exporter.reader.onload=function() {
            var data=AppComponent.translate();
            //Viewer Code here  
          }     
        }     
        AppComponent.outputType=null;   
      } else {
        alert("Select gml or xml file as input for this conversion.");
        AppComponent.inputFile=null;
      }
    } else if(it=="gsjson" && ot=="gsjson") {
      AppComponent.data=null;//to do
      //To Do Viewer
    }
  }

  static exportf() {
    var exporter=new GSJSONExporter(AppComponent.inputFile);
    //var exporter=new ThreeJSExporter(AppComponent.data);
    AppComponent.exporter=exporter;
    exporter.reader.onload=function() {
      var data=AppComponent.translate();
      AppComponent.save(data);
    }     
    AppComponent.outputType=null;  
  }

  static translate() {
    if(AppComponent.inputFile==null) {
      alert("Select appropriate input for this conversion.");
      return;
    }
    var data = AppComponent.exporter.export();
    return data;
  }

  static save(data) {
    var op=JSONReaderWriter.write(data);
    var a = document.createElement('a');
    a.href = 'data:' + op;
    a.download = 'data';
    a.innerHTML = 'Download File';
    a.click();
  }
}

var viewer;
window.onload=function() {
  viewer=new ViewerComponent();
  animate();
  AppComponent.initForm();
  AppComponent.setListeners();
}

function animate() {
    requestAnimationFrame( animate );
    viewer.controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
    viewer.render();
}