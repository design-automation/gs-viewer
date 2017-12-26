import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';
import { TreeView} from '@syncfusion/ej2-navigations'; 

@Component({
  selector: 'app-toolwindow',
  templateUrl: './toolwindow.component.html',
  styleUrls: ['./toolwindow.component.css']
})
export class ToolwindowComponent implements OnInit {
  Visible:string="close";
  ngOnInit() {
  	/*var tools=document.getElementsByName("tools");
  	tools[0].style.background="#696969";
    tools[0].style.color="white";*/ 
  }

  close(Visible){
  	//var tools=document.getElementsByName("tools");
  	var splittoolwindow=document.getElementById("splittoolwindow");
  	splittoolwindow.style.flexBasis="calc(8.5% - 5px)";
    var splitcontainer=document.getElementById("splitcontainer");
    splitcontainer.style.flexBasis="calc(91.5% - 5px)";
    /*tools[0].style.background="#696969";
    tools[0].style.color="white"; 
    tools[1].style.background=null;
    tools[1].style.color=null;  
    tools[2].style.background=null;
    tools[2].style.color=null;*/
    this.Visible="close";  
  }
  Attributes(Visible){
  	//var tools=document.getElementsByName("tools");
  	var splittoolwindow=document.getElementById("splittoolwindow");
    splittoolwindow.style.flexBasis="calc(30% - 5px)";
    var splitcontainer=document.getElementById("splitcontainer");
    splitcontainer.style.flexBasis="calc(70% - 5px)";
    /*tools[1].style.background="#696969";
    tools[1].style.color="white"; 
    tools[0].style.background=null;
    tools[0].style.color=null;  
    tools[2].style.background=null;
    tools[2].style.color=null;*/
    this.Visible="attributes";
  }
  Groups(Visible){
  	//var tools=document.getElementsByName("tools");
  	var splittoolwindow=document.getElementById("splittoolwindow");
    splittoolwindow.style.flexBasis="calc(26% - 5px)";
    var splitcontainer=document.getElementById("splitcontainer");
    splitcontainer.style.flexBasis="calc(74% - 5px)";
    /*tools[2].style.background="#696969";
    tools[2].style.color="white"; 
    tools[0].style.background=null;
    tools[0].style.color=null;  
    tools[1].style.background=null;
    tools[1].style.color=null;*/
    this.Visible="groups";
  }
}