import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  constructor() { 
    this.init();
    this.view = View.getInstance(this);
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
  view:View;
  gui:DatGUI;
  sidebar:SideBar;

  init() {
    this.scene=new THREE.Scene();
    this.scene.background = new THREE.Color( 0xcccccc );
  
    this.container=document.getElementById( 'container' );
    this.width=this.container.clientWidth;
    this.height=this.container.clientHeight;    

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.width, this.height );
    this.container.appendChild( this.renderer.domElement );
    var self=this;
    window.addEventListener( 'resize', function() {
      self.width=self.container.clientWidth;
      self.height=self.container.clientHeight;
      self.renderer.setPixelRatio( window.devicePixelRatio );
      self.camera.aspect = self.width / self.height;
      self.camera.updateProjectionMatrix();
      self.renderer.setSize( self.width, self.height );
      self.render();
    }, false );

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

export class View{
  static view:View;
  viewer:ViewerComponent;
  effectController:any;
  static getInstance(viewer:ViewerComponent) {
    if(View.view==null || View.view==undefined) {
      View.view=new View(viewer);
    }
    return View.view;
  }

  private constructor(viewer:ViewerComponent){
    this.viewer=viewer;
    this.effectController={
      grid:false,
      axis:false,
      fog:false
    }
  }
  static changegird(){
    var effectController=View.view.effectController;
    var gridhelper=new THREE.GridHelper( 10000, 10000 );
    gridhelper.name="GridHelper";
    if(effectController.grid){
      View.view.viewer.scene.add( gridhelper);
    }else {
      View.view.viewer.scene.remove(View.view.viewer.scene.getObjectByName("GridHelper"));
    }
    View.view.viewer.render();
  }
  static changeaxis(){
    var effectController=View.view.effectController;
    var axishelper = new THREE.AxisHelper( 1000 );
    axishelper.name="AxisHelper";
    if(effectController.axis){
        View.view.viewer.scene.add( axishelper);
    }else{
        View.view.viewer.scene.remove(View.view.viewer.scene.getObjectByName("AxisHelper"));
    }
    View.view.viewer.render();
  }
  static changefog(){
    var effectController=View.view.effectController;
    if(effectController.fog){
      View.view.viewer.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
    }else {
        View.view.viewer.scene.fog=null;
    }
    View.view.viewer.render();
  }

}

export class DatGUI {
  tooltab:any;
  toolview:any;
  alightgui:dat.GUI;
  dlightgui:dat.GUI;
  viewgui:dat.GUI;
  viewer:ViewerComponent;
  constructor(viewer:ViewerComponent) {
    var toolwindow=document.getElementById("toolwindow");
    this.addButton();
    this.viewer=viewer;
    var lights=viewer.lights;
    var view=viewer.view;

    this.alightgui=this.addTool('alight');
    this.dlightgui=this.addTool('dlight');
    this.viewgui=this.addTool('view');

    var h = this.alightgui.addFolder( "Ambient Light" );
    h.add( lights.effectController, "hue", 0.0, 1.0, 0.025 ).name("hue").onChange( Lights.changeLights );
    h.add( lights.effectController, "saturation", 0.0, 1.0, 0.025 ).name("saturation").onChange( Lights.changeLights );
    h.add( lights.effectController, "lightness", 0.0, 1.0, 0.025 ).name("lightness").onChange( Lights.changeLights );
    h.add( lights.effectController, "ambient", 0.0, 1.0, 0.025 ).name("ambient").onChange( Lights.changeLights );

    h = this.dlightgui.addFolder( "Direction Light" );
    h.add( lights.effectController, "x", -1.0, 1.0, 0.025 ).name("x").onChange( Lights.changeLights );
    h.add( lights.effectController, "y", -1.0, 1.0, 0.025 ).name("y").onChange( Lights.changeLights );
    h.add( lights.effectController, "z", -1.0, 1.0, 0.025 ).name("z").onChange( Lights.changeLights );
    this.enableTool(-1);

    h = this.viewgui.addFolder( "Views" );
    h.add( view.effectController, "grid" ).name( "grid" ).onChange( View.changegird );
    h.add( view.effectController, "axis" ).name( "axis" ).onChange( View.changeaxis );
    h.add( view.effectController, "fog" ).name( "fog" ).onChange( View.changefog );

    var tools=document.getElementsByName("tool1");
    var gui=this;
    for(var i=0;i<tools.length;i++) {
      tools[i].onclick=function(event) {
        gui.enableTool(((event.target) as any).value);
      }
    };
  }

  Numbering(){
    this.toolview.innerHTML=
      "<table style=\"background-color:black; color:white;\" width=100% height= 15px border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name =\"table\">"+
      "<tr>"+"<td width=\"200\" name=\"points\"  align=center >Points</td>"+
      "<td width=\"300\" name=\"X\" align=center>X</td>"+
      "<td width=\"300\" name=\"Y\" align=center>Y</td>"+
      "<td width=\"300\" name=\"Z\" align=center>Z</td></tr></table></div>";
  }

  AttributeView(){
    this.toolview.innerHTML="<split direction=\"vertical\">"+
    "<split-area [size]=\"40\" >"+"<div id=\"buttonview\"></div>"+
    "</split-area>"+"<split-area [size]=\"60\" >"+"<div id=\"tableview\"></div>"+
    "</split-area></split>";
    var buttonview=document.getElementById("buttonview");
    buttonview.style.background="black";
    var boxes=SideTools.createSideTool("Boxes", buttonview);
    boxes.style.width="60px";
    var floors=SideTools.createSideTool("Floors", buttonview);
    floors.style.width="60px";
    var roofs=SideTools.createSideTool("Roofs", buttonview);
    roofs.style.width="60px";
    var text=SideTools.createSideTool("Text", buttonview);
    text.style.width="60px";
    var walls=SideTools.createSideTool("Walls", buttonview);
    walls.style.width="60px";
  }

  addTool(id) {
    var gui = new dat.GUI({autoPlace: false, width:"100%" });
    gui.domElement.id=id;
    return gui;
  }

  enableTool(index) {
    this.toolview.innerHTML="";
    if(index==0) {
      this.toolview.appendChild(this.viewgui.domElement);
    }else if(index==1) {
      this.AttributeView();
    }else if(index==2) {
      this.Numbering();
    }else if(index==4) {
      this.toolview.appendChild(this.alightgui.domElement);
    } else if(index==5) {
      this.toolview.appendChild(this.dlightgui.domElement);
    }
  }
  addButton(){
    var toolwindow=document.getElementById("toolwindow");
    this.tooltab=document.createElement("div"); 
    this.tooltab.style.background="grey"; 
    this.tooltab.innerHTML="<a href=\"#\"><button name=\"tool1\" id=\"tool\" value=\"-1\">&nbsp;None</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"0\">&nbsp;Views</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"1\">&nbsp;Attirbute</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"2\">&nbsp;Numbering</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"3\">&nbsp;Colors</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"4\">&nbsp;Ambient Light</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"5\">&nbsp;Directional Light</button>";
    toolwindow.appendChild(this.tooltab);
    this.toolview=document.createElement("div");
    toolwindow.appendChild(this.toolview);
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
    this.right.style.display="none";
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
  viewer:ViewerComponent;

  constructor(parent){
    this.zoom=SideTools.createSideTool("Z", parent);
    this.zoomfunction(this.viewer);
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
    var br=document.createElement("br");
    parent.appendChild(document.createElement("br"));
    return btn;
  }

  zoomfunction(viewer:ViewerComponent){
    this.viewer=viewer;
    var z=document.getElementById("Z");
    this.zoom.onclick= function(this,e) {
      //alert(this.viewer);
    }
  }
  
}
