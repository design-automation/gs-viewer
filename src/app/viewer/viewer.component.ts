import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';
//import { TreeView } from 'js-treeview';
import * as gs from "gs-json";

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
    this.viewers=new Viewers(this);
    this.sixfunction=new SixFunction(this);
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
  viewers:Viewers;
  sixfunction:SixFunction;

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

export class DatGUI {
  tooltab:any;
  toolview:any;
  alightgui:dat.GUI;
  dlightgui:dat.GUI;
  viewer:ViewerComponent;
  constructor(viewer:ViewerComponent) {
    var toolwindow=document.getElementById("toolwindow");
    this.addButton();
    this.viewer=viewer;
    var lights=viewer.lights;

    this.alightgui=this.addTool('alight');
    this.dlightgui=this.addTool('dlight');

    var h = this.alightgui.addFolder( "Ambient Light" );
    h.add( lights.effectController, "hue", 0.0, 1.0, 0.025 ).name("hue").onChange( Lights.changeLights );
    h.add( lights.effectController, "saturation", 0.0, 1.0, 0.025 ).name("saturation").onChange( Lights.changeLights );
    h.add( lights.effectController, "lightness", 0.0, 1.0, 0.025 ).name("lightness").onChange( Lights.changeLights );
    h.add( lights.effectController, "ambient", 0.0, 1.0, 0.025 ).name("ambient").onChange( Lights.changeLights );
    h.open();
    
    h = this.dlightgui.addFolder( "Direction Light" );
    h.add( lights.effectController, "x", -1.0, 1.0, 0.025 ).name("x").onChange( Lights.changeLights );
    h.add( lights.effectController, "y", -1.0, 1.0, 0.025 ).name("y").onChange( Lights.changeLights );
    h.add( lights.effectController, "z", -1.0, 1.0, 0.025 ).name("z").onChange( Lights.changeLights );
    this.enableTool(-1);
    h.open();

    var tools=document.getElementsByName("tool1");
    var gui=this;
    for(var i=0;i<tools.length;i++) {
      //tools[i].style.background="grey";
      tools[i].onclick=function(event) {
        gui.enableTool(((event.target) as any).value);
        //tools[i].style.background="white";
      }
    };
  }

  Properties(){
    this.toolview.innerHTML=
      "<table style=\"background-color:black; color:white;\" width=100% height= 15px border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name =\"table\">"+
      "<tr>"+"<td width=\"200\" name=\"points\"  align=center ></td>"+
      "<td width=\"300\" name=\"X\" align=center>X</td>"+
      "<td width=\"300\" name=\"Y\" align=center>Y</td>"+
      "<td width=\"300\" name=\"Z\" align=center>Z</td>"+
      "<td width=\"300\" name=\"Z\" align=center></td>"+
      "<td width=\"300\" name=\"Z\" align=center></td>"+
      "<td width=\"300\" name=\"Z\" align=center></td></tr></table>";
  }

  AttributeView(){
    this.toolview.innerHTML="<div id=\"buttonview\"><input name=\"check\" checked=\"checked\" type=\"checkbox\"> <label style=\" margin-right: 30px; color:white;\">selection</label></input></div>"+
    "<div id=\"tableview\">"+"<table style=\"background-color:black; color:white;\" width=100% height= 15px border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name =\"table\">"+
      "<tr>"+"<td width=\"200\" name=\"Number\"  align=center >Number</td>"+
      "<td width=\"300\" name=\"\" align=center></td>"+
      "<td width=\"300\" name=\"\" align=center></td>"+
      "<td width=\"300\" name=\"\" align=center></td>"+
      "<td width=\"300\" name=\"\" align=center></td>"+
      "<td width=\"300\" name=\"\" align=center></td></tr></table>"+"</div>";
    var buttonview=document.getElementById("buttonview");
    buttonview.style.background="black";
    var groups=SideTools.createSideTool("Groups", buttonview);
    groups.style.width="60px";
    groups.style.marginRight="30px";
    var objects=SideTools.createSideTool("Objects", buttonview);
    objects.style.width="60px";
    objects.style.marginRight="30px";
    var faces=SideTools.createSideTool("Faces", buttonview);
    faces.style.width="60px";
    faces.style.marginRight="30px";
    var wires=SideTools.createSideTool("Wires", buttonview);
    wires.style.width="60px";
    wires.style.marginRight="30px";
    var edges=SideTools.createSideTool("Edges", buttonview);
    edges.style.width="60px";
    edges.style.marginRight="30px";
    var vertices=SideTools.createSideTool("Vertices", buttonview);
    vertices.style.width="60px";
    vertices.style.marginRight="30px";
    var points=SideTools.createSideTool("Points", buttonview);
    points.style.width="60px";
    vertices.style.marginRight="30px";

  }

  addTool(id) {
    var gui = new dat.GUI({autoPlace: false, width:"100%" });
    gui.domElement.id=id;
    return gui;
  }

  enableTool(index) {
    var tools=document.getElementsByName("tool1");
    this.toolview.innerHTML="";
    if(index==-1) {
      var splittoolwindow=document.getElementById("splittoolwindow");
      splittoolwindow.style.flexBasis="calc(8.5% - 5px)";
      var splitcontainer=document.getElementById("splitcontainer");
      splitcontainer.style.flexBasis="calc(91.5% - 5px)";
      tools[0].style.background="#696969";
      tools[0].style.color="white"; 
      tools[1].style.background=null;
      tools[1].style.color=null;  
      tools[2].style.background=null;
      tools[2].style.color=null;  
      tools[3].style.background=null;
      tools[3].style.color=null;  
      tools[4].style.background=null;
      tools[4].style.color=null; 
    }else if(index==0) {
      this.AttributeView();
      var splittoolwindow=document.getElementById("splittoolwindow");
      splittoolwindow.style.flexBasis="calc(30% - 5px)";
      var splitcontainer=document.getElementById("splitcontainer");
      splitcontainer.style.flexBasis="calc(70% - 5px)";
      tools[1].style.background="#696969";
      tools[1].style.color="white"; 
      tools[0].style.background=null;
      tools[0].style.color=null;  
      tools[2].style.background=null;
      tools[2].style.color=null;  
      tools[3].style.background=null;
      tools[3].style.color=null;  
      tools[4].style.background=null;
      tools[4].style.color=null; 
    }else if(index==1) {
      this.Properties();
      var splittoolwindow=document.getElementById("splittoolwindow");
      splittoolwindow.style.flexBasis="calc(26% - 5px)";
      var splitcontainer=document.getElementById("splitcontainer");
      splitcontainer.style.flexBasis="calc(74% - 5px)";
      tools[2].style.background="#696969";
      tools[2].style.color="white"; 
      tools[0].style.background=null;
      tools[0].style.color=null;  
      tools[1].style.background=null;
      tools[1].style.color=null;  
      tools[3].style.background=null;
      tools[3].style.color=null;  
      tools[4].style.background=null;
      tools[4].style.color=null;
    }else if(index==2) {
      this.toolview.appendChild(this.alightgui.domElement);
      var splittoolwindow=document.getElementById("splittoolwindow");
      splittoolwindow.style.flexBasis="calc(30% - 5px)";
      var splitcontainer=document.getElementById("splitcontainer");
      splitcontainer.style.flexBasis="calc(70% - 5px)";
      tools[3].style.background="#696969";
      tools[3].style.color="white"; 
      tools[0].style.background=null;
      tools[0].style.color=null;  
      tools[1].style.background=null;
      tools[1].style.color=null;  
      tools[2].style.background=null;
      tools[2].style.color=null;  
      tools[4].style.background=null;
      tools[4].style.color=null;  
    } else if(index==3) {
      this.toolview.appendChild(this.dlightgui.domElement);
      var splittoolwindow=document.getElementById("splittoolwindow");
      splittoolwindow.style.flexBasis="calc(26% - 5px)";
      var splitcontainer=document.getElementById("splitcontainer");
      splitcontainer.style.flexBasis="calc(74% - 5px)";
      tools[4].style.background="#696969";
      tools[4].style.color="white"; 
      tools[0].style.background=null;
      tools[0].style.color=null;  
      tools[1].style.background=null;
      tools[1].style.color=null;  
      tools[2].style.background=null;
      tools[2].style.color=null;  
      tools[3].style.background=null;
      tools[3].style.color=null; 
    }
  }
  addButton(){
    var toolwindow=document.getElementById("toolwindow");
    this.tooltab=document.createElement("div"); 
    this.tooltab.style.background="grey"; 
    this.tooltab.innerHTML="<a href=\"#\"><button name=\"tool1\" id=\"tool\" value=\"-1\">▼</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"0\">&nbsp;Attributes</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"1\">&nbsp;Properties</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"2\">&nbsp;Ambient Light</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"3\">&nbsp;Directional Light</button>";
    toolwindow.appendChild(this.tooltab);
    this.toolview=document.createElement("div");
    this.toolview.id="toolview";
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

    this.button=SideTools.createSideTool("❰", td);
    this.button.style.width="4px";
    this.button.style.height="80px";

    this.right=document.createElement("td");
    this.right.style.background="grey";
    this.right.style.height="100%";
    this.right.style.width="30px";
    this.right.style.display="none";
    tr.appendChild(this.right);

    this.sidetools=new SideTools(this.right);

    var self=this;
    this.button.onclick= function(this,e) {
        if (self.right.style.display == "none") {
          self.right.style.display = "block";
          self.button.value="❱";
      } else {
          self.right.style.display = "none";
          self.button.value="❰";
      }
    }
  }
}

export class SideTools {
  zoom:any;
  groups:any;
  objects:any;
  faces:any;
  wires:any;
  edges:any;
  vertices:any;
  points:any;
  grid:any;
  axes:any;
  fog:any;
  viewer:ViewerComponent;

  constructor(parent){
    this.zoom=SideTools.createSideTool("Z", parent);

    this.groups=SideTools.createSideTool("G", parent);
    this.groups.style.width="100%";
    this.groups.title="click to show groups";
    this.groups.name="sixtool";
    this.objects=SideTools.createSideTool("O", parent);
    this.objects.style.width="100%";
    this.objects.title="click to show objects";
    this.objects.name="sixtool";
    this.faces=SideTools.createSideTool("F", parent);
    this.faces.style.width="100%";
    this.faces.title="click to show faces";
    this.faces.name="sixtool";
    this.wires=SideTools.createSideTool("W", parent);
    this.wires.style.width="100%";
    this.wires.title="click to show wires";
    this.wires.name="sixtool";
    this.edges=SideTools.createSideTool("E", parent);
    this.edges.style.width="100%";
    this.edges.title="click to show edges";
    this.edges.name="sixtool";
    this.vertices=SideTools.createSideTool("V", parent);
    this.vertices.style.width="100%";
    this.vertices.title="click to show vertices";
    this.vertices.name="sixtool";
    this.points=SideTools.createSideTool("P", parent);
    this.points.style.width="100%";
    this.points.title="click to show points";
    this.points.name="sixtool";
    this.points.style.marginBottom="30px";

    this.grid=SideTools.createSideTool("g", parent);
    this.grid.style.width="100%";
    this.grid.title="add grid";
    this.axes=SideTools.createSideTool("a", parent);
    this.axes.style.width="100%";
    this.axes.title="add axis";
    this.fog=SideTools.createSideTool("f", parent);
    this.fog.style.width="100%";
    this.fog.title="add fog";
  }

  static createSideTool(val, parent) {
    var btn=document.createElement("input");
    btn.type="button";
    btn.id=val;
    btn.value=val;
    btn.style.marginBottom="5px";
    parent.appendChild(btn);
    //parent.appendChild(document.createElement("br"));
    return btn;
  }
}
export class Viewers{
  grid:any;
  axes:any;
  fog:any;
  zoom:any;
  constructor(viewer:ViewerComponent){
    this.zoom=document.getElementById("Z");
    this.zoom.title="zoom to fit";
    this.zoom.style.width="100%";
    this.zoom.style.marginTop="10px";
    this.zoom.style.marginBottom="30px";
    this.zoom.onclick= function(this,e) {
      //viewer.camera.position.z = 500;
     // viewer.renderer.render( viewer.scene, viewer.camera );
    }

    var gridinitialized=true;
    this.grid=document.getElementById("g");
    var gridself=this;
    var gridhelper=new THREE.GridHelper( 500, 500 );
    gridhelper.name="GridHelper";
    this.grid.onclick= function(this,e) {
      if(gridinitialized){
        viewer.scene.add( gridhelper);
        gridself.grid.style.background="#696969";
        gridself.grid.style.color="white";
        gridinitialized=false;
      }else{
        viewer.scene.remove(viewer.scene.getObjectByName("GridHelper"));
        gridself.grid.style.background=null;
        gridself.grid.style.color=null;
        gridinitialized=true;
      }
    }

    var axesself=this;
    var axesinitialized=true;
    this.axes=document.getElementById("a");
    var axishelper = new THREE.AxisHelper( 500 );
    axishelper.name="AxisHelper";
    this.axes.onclick= function(this,e) {
      if(axesinitialized){
        viewer.scene.add( axishelper);
        axesself.axes.style.background="#696969";
        axesself.axes.style.color="white";
        axesinitialized=false;
      }else{
        viewer.scene.remove(viewer.scene.getObjectByName("AxisHelper"));
        axesself.axes.style.background=null;
        axesself.axes.style.color=null;
        axesinitialized=true;
      }
    }

    var fogself=this;
    var foginitialized=true;
    this.fog=document.getElementById("f");
    this.fog.onclick= function(this,e) {
      if(foginitialized){
        viewer.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
        fogself.fog.style.background="#696969";
        fogself.fog.style.color="white";
        foginitialized=false;
      }else{
        viewer.scene.fog=null;
        fogself.fog.style.background=null;
        fogself.fog.style.color=null;
        foginitialized=true;
      }
    }
  }
}

export class SixFunction{
  groups:any;
  objects:any;
  faces:any;
  wires:any;
  edges:any;
  vertices:any;
  points:any;
  constructor(viewer:ViewerComponent){
    var sixtool=document.getElementsByName("sixtool");
    sixtool[0].onclick=function(this,e) {
      sixtool[0].style.background="#696969";
      sixtool[0].style.color="white"; 
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[1].onclick=function(this,e) {
      sixtool[1].style.background="#696969";
      sixtool[1].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[2].onclick=function(this,e) {
      sixtool[2].style.background="#696969";
      sixtool[2].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[3].onclick=function(this,e) {
      sixtool[3].style.background="#696969";
      sixtool[3].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[4].onclick=function(this,e) {
      sixtool[4].style.background="#696969";
      sixtool[4].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[5].onclick=function(this,e) {
      sixtool[5].style.background="#696969";
      sixtool[5].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[6].style.background=null;
      sixtool[6].style.color=null;   
    }
    sixtool[6].onclick=function(this,e) {
      sixtool[6].style.background="#696969";
      sixtool[6].style.color="white"; 
      sixtool[0].style.background=null;
      sixtool[0].style.color=null;  
      sixtool[1].style.background=null;
      sixtool[1].style.color=null;  
      sixtool[2].style.background=null;
      sixtool[2].style.color=null;  
      sixtool[3].style.background=null;
      sixtool[3].style.color=null;  
      sixtool[4].style.background=null;
      sixtool[4].style.color=null;  
      sixtool[5].style.background=null;
      sixtool[5].style.color=null;   
    }
  }
}
