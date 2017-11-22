import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js'

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  constructor() { 
    this.init();
    this.lights=Lights.getInstance(this);
    this.lights.addDirectionalLight();
    this.lights.addAmbientLight();
    this.gui=new DatGUI(this);
    this.sidebar=new SideBar(this);
  }

  ngOnInit() {
  }

  container:any;
  renderer:any;
  scene:any;
  camera:any;
  width:any;
  height:any;
  controls:any;
  lights:Lights;
  gui:DatGUI;
  sidebar:SideBar;

  init() {
  	this.scene=new THREE.Scene();
  	this.scene.background = new THREE.Color( 0xcccccc );
  	this.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
  
  	this.container=document.getElementById( 'container' );
  	this.width=this.container.clientWidth;
  	this.height=this.container.clientHeight;

  	this.renderer = new THREE.WebGLRenderer( { antialias: true } );
	  this.renderer.setPixelRatio( window.devicePixelRatio );
	  this.renderer.setSize( this.width, this.height );
	  this.container.appendChild( this.renderer.domElement );
    window.addEventListener( 'resize', this.onWindowResize, false );

  	this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 1000 );
  	this.camera.position.z = 500;
  	this.controls=new OrbitControls(this.camera, this.renderer.domElement);
  	this.controls.enableZoom = true;

  	var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
  	var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
  	for ( var i = 0; i < 500; i ++ ) {
    	var mesh = new THREE.Mesh( geometry, material );
    	mesh.position.x = ( Math.random() - 0.5 ) * 1000;
    	mesh.position.y = ( Math.random() - 0.5 ) * 1000;
    	mesh.position.z = ( Math.random() - 0.5 ) * 1000;
    	mesh.updateMatrix();
    	mesh.matrixAutoUpdate = false;
    	this.scene.add( mesh );
  	}
  }

  onWindowResize(this,e) {
  	this.renderer.setPixelRatio( this.devicePixelRatio );
  	this.camera.aspect = this.width / this.height;
  	this.camera.updateProjectionMatrix();
  	this.renderer.setSize( this.width, this.height );
  	this.render();
  }

  render() {
  	this.renderer.render( this.scene, this.camera );
  }
}

export class Lights {
  static lights:Lights;
  viewer:ViewerComponent;
  dlight:Array<THREE.DirectionalLight>;
  alight:Array<THREE.AmbientLight>;
  effectController:any;

  static getInstance(viewer:ViewerComponent) {
    if(Lights.lights==null || Lights.lights==undefined) {
      Lights.lights=new Lights(viewer);
    }
    return Lights.lights;
  }

  private constructor(viewer:ViewerComponent) {
    this.viewer=viewer;
    this.dlight=[];
    this.alight=[];
    this.effectController={
        ambient: 0.17,
        hue:        0.04,
        saturation: 0.01,  // non-zero so that fractions will be shown
        lightness:  1.0,
        x: 0.32,
        y: 0.39,
        z: 0.7,
        lambient: 0.17,
        lhue:        0.04,
        lsaturation: 0.01,  // non-zero so that fractions will be shown
        llightness:  1.0,
        lx: 0.32,
        ly: 0.39,
        lz: 0.7
  }
    this.addAmbientLight();
    this.addDirectionalLight();
  }

  addDirectionalLight() {
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    this.viewer.scene.add( light );
    this.dlight.push(light);
  }

  addAmbientLight() {
    var light = new THREE.AmbientLight( 0x222222 );
    this.viewer.scene.add( light );
    this.alight.push(light);
  }

  static changeLights() {
    var effectController=Lights.lights.effectController;
    var alight=Lights.lights.alight;
    var dlight=Lights.lights.dlight;
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( effectController.hue, effectController.saturation, effectController.lightness * effectController.ambient );
    }

    for(var i=0;i<dlight.length;i++) {
      var light=dlight[i];
      light.position.set( effectController.x, effectController.y, effectController.z );
      light.color.setHSL( effectController.hue, effectController.saturation, effectController.lightness );
    }
    Lights.lights.viewer.render();
  }
}

export class DatGUI {
  toolwindow:any;
  alightgui:dat.GUI;
  dlightgui:dat.GUI;
  viewer:ViewerComponent;
  constructor(viewer:ViewerComponent) {
    this.toolwindow=document.getElementById("toolwindow");
    this.viewer=viewer;
    var lights=viewer.lights;
    
    this.alightgui=this.addTool('alight');
    this.dlightgui=this.addTool('dlight');

    var h = this.alightgui.addFolder( "Lighting" );
    h.add( lights.effectController, "hue", 0.0, 1.0, 0.025 ).name("hue").onChange( Lights.changeLights );
    h.add( lights.effectController, "saturation", 0.0, 1.0, 0.025 ).name("saturation").onChange( Lights.changeLights );
    h.add( lights.effectController, "lightness", 0.0, 1.0, 0.025 ).name("lightness").onChange( Lights.changeLights );
    h.add( lights.effectController, "ambient", 0.0, 1.0, 0.025 ).name("ambient").onChange( Lights.changeLights );

    h = this.dlightgui.addFolder( "Light direction" );
    h.add( lights.effectController, "x", -1.0, 1.0, 0.025 ).name("x").onChange( Lights.changeLights );
    h.add( lights.effectController, "y", -1.0, 1.0, 0.025 ).name("y").onChange( Lights.changeLights );
    h.add( lights.effectController, "z", -1.0, 1.0, 0.025 ).name("z").onChange( Lights.changeLights );
    this.enableTool(0);


    var tools=document.getElementsByName("tool");
    var gui=this;
    for(var i=0;i<tools.length;i++) {
      tools[i].onchange=function(event) {
        gui.enableTool(((event.target) as any).value);
      }
    };
  }

  addTool(id) {
    var gui = new dat.GUI({autoPlace: false, width:"100%" });
    gui.domElement.id=id;
    return gui;
  }

  enableTool(index) {
    this.toolwindow.innerHTML="";
    if(index==4) {
      this.toolwindow.appendChild(this.alightgui.domElement);
    } else if(index==5) {
      this.toolwindow.appendChild(this.dlightgui.domElement);
    }
  }
}

export class SideBar {
  sidebar:any;
  right:any;
  button:any;
  sidetools:SideTools;

  constructor(viewer:ViewerComponent){
    var alltools=document.getElementById("sidebar");
    
    this.sidebar=document.createElement("table");
    alltools.appendChild(this.sidebar);
    this.sidebar.style.height="100%";

    var tr=document.createElement("tr");
    viewer.container.appendChild(alltools);
    tr.setAttribute('valign','top');
    this.sidebar.appendChild(tr);

    var td=document.createElement("td");
    tr.appendChild(td);
    tr.style.height="100%";

    this.button=SideTools.createSideTool(">", td);

    this.right=document.createElement("td");
    this.right.style.background="grey";
    this.right.style.height="100%";
    tr.appendChild(this.right);

    this.sidetools=new SideTools(this.right);

    var self=this;
    this.button.onclick= function(this,e) {
        if (self.right.style.display == "none") {
          self.right.style.display = "block";
          self.button.value=">";
      } else {
          self.right.style.display = "none";
          self.button.value="<";
      }
    }
  }
}

export class SideTools {
  zoom:any;
  selector:any;
  view:any;

  constructor(parent){
    this.zoom=SideTools.createSideTool("Z", parent);
    this.selector=SideTools.createSideTool("S", parent);
    this.view=SideTools.createSideTool("V", parent);
  }

  static createSideTool(val, parent) {
    var btn=document.createElement("input");
    btn.type="button";
    btn.id=val;
    btn.value=val;
    parent.appendChild(btn);
    parent.appendChild(document.createElement("br"));
    return btn;
  }
}