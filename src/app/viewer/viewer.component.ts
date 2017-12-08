import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';
import { TreeView} from '@syncfusion/ej2-navigations'; 
//import * as gs from  "gs-json";

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
    this.lights.addAmbientLight();
    this.gui=new DatGUI(this);
    this.sidebar=new SideBar(this);
    this.viewers=new Viewers(this);
    this.treeview=new treeView(this);
  }

  ngOnInit() {
    //var model = this.exportThreejsUrl("../mixed.gs");
  }

  container:any;
  renderer:any;
  scene:any;
  camera:any;
  light:any;
  width:any;
  height:any;
  controls:any;
  lights:Lights;
  view:View;
  gui:DatGUI;
  sidebar:SideBar;
  viewers:Viewers;
  treeview:treeView;
  raycaster:any;
  mouse:any;

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
    var INTERSECTED;
    window.addEventListener( 'mousemove',function(e){
      self.raycaster = new THREE.Raycaster();
      self.mouse = new THREE.Vector2();
      e.preventDefault();
      self.mouse.x = (e.clientX/self.width)*2 -1;
      self.mouse.y = -(e.clientY/self.height)*2 + 1;
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(self.scene.children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
          if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex( 0xff0000 );
        }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
      }
      self.render();
    }, false );

    window.addEventListener( 'click',function(e){
      self.raycaster = new THREE.Raycaster();
      self.mouse = new THREE.Vector2();
      var INTERSECTED1;
      e.preventDefault();
      self.mouse.x = (e.clientX/self.width)*2 -1;
      self.mouse.y = -(e.clientY/self.height)*2 + 1;
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(self.scene.children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED1 != intersects[ 0 ].object ) {
          if ( INTERSECTED1 ) INTERSECTED1.material.emissive.setHex( INTERSECTED1.currentHex );
          INTERSECTED1 = intersects[ 0 ].object;
          INTERSECTED1.currentHex = INTERSECTED1.material.emissive.getHex();
          INTERSECTED1.material.emissive.setHex( 0xff0000 );
          window.addEventListener("keydown", function(event) {
            if(event.key === "Delete") self.scene.remove(INTERSECTED1);
            if(event.key==="s") self.scene.add(INTERSECTED1);
          });
        }
      } else {
        console.log(INTERSECTED1.material.emissive.getHex());
        if ( INTERSECTED1 ) INTERSECTED1.material.emissive.setHex( INTERSECTED1.currentHex );
        INTERSECTED1 = null;
      }
      self.render();
    }, false );

    this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 1000 );
    this.camera.position.z = 500;
    this.camera.updateMatrixWorld();
    var light = new THREE.DirectionalLight( 0xffffff,0.5 );
    this.controls=new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;
    this.controls.addEventListener( 'change',  function() {
      light.position.copy( self.camera.position );
    } );
    this.scene.add( light );

    var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
    for ( var i = 0; i < 500; i ++ ) {
      var material = new THREE.MeshPhongMaterial( { color: 0xffffff} );
      var mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = ( Math.random() - 0.5 ) * 1000;
      mesh.position.y = ( Math.random() - 0.5 ) * 1000;
      mesh.position.z = ( Math.random() - 0.5 ) * 1000;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      this.scene.add( mesh );
    }
  }
  /*exportThreejsUrl(url:string):boolean {
    //For example, the url can be "./base/assets/gs-json/box.gs"
    let xmlhttp = new XMLHttpRequest();
    let data: gs.IModelData;
    let exportThreejsData=this.exportThreejsData;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        let model:gs.IModel = new gs.Model();
        model.setData(data);
        exportThreejsData(model);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    return true;
  }

  exportThreejsData(model: gs.IModel): void {
    for (const p of model.getGeom().getPoints()) {
        // Do something here with your points
        // For example, get the position of each point
        const xyz: number[] = p.getPosition();
    }
    for (const polyline of model.getGeom().getObjs(gs.EObjType.polymesh)) {
        // Do something here with your polylines
        // For example, get the wires and faces
        const wires: gs.IWire[] = polyline.getWires();
        for (const wire of wires) {
            const is_closed: boolean = wire.isClosed();
            const point_IDs: number[] = wire.getVertices().map((v, i) => v.getPoint().getID());
            // Do something here.
        }
    }
    for (const polymesh of model.getGeom().getObjs(gs.EObjType.polymesh)) {
        // Do something here with your polymeshes.
        // For example, get the wires and faces
        const wires: gs.IWire[] = polymesh.getWires();
        for (const wire of wires) {
            const is_closed: boolean = wire.isClosed();
            const point_IDs: number[] = wire.getVertices().map((v, i) => v.getPoint().getID());
            // Do something here.
        }
        const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
            const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
            // Do something here.
        }

    }
  }*/
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
  materialColor:THREE.Color;
  wireMaterial:THREE.MeshBasicMaterial;
  flatMaterial:THREE.MeshPhongMaterial;
  gouraudMaterial:THREE.MeshLambertMaterial;
  phongMaterial:THREE.MeshPhongMaterial;

  static getInstance(viewer:ViewerComponent) {
    if(Lights.lights==null || Lights.lights==undefined) {
      Lights.lights=new Lights(viewer);
    }
    return Lights.lights;
  }

  private constructor(viewer:ViewerComponent) {
    this.materialColor=new THREE.Color()
    this.materialColor.setRGB( 1.0, 1.0, 1.0 );
    this.wireMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true } ) ;
    this.flatMaterial = new THREE.MeshPhongMaterial( { color: this.materialColor, specular: 0x000000, flatShading: true, side: THREE.DoubleSide } );
    this.gouraudMaterial = new THREE.MeshLambertMaterial( { color: this.materialColor, side: THREE.DoubleSide } );
    this.phongMaterial = new THREE.MeshPhongMaterial( { color: this.materialColor, side: THREE.DoubleSide } );
    this.viewer=viewer;
    this.dlight=[];
    this.alight=[];
    this.effectController={
        ambient: 0.15,
        hue:        0,
        saturation: 0,  // non-zero so that fractions will be shown
        lightness:  0.7,
        lambient: 0.17,
        lhue:        0.04,
        lsaturation: 0.01,  // non-zero so that fractions will be shown
        llightness:  1.0,
        lx: 0.32,
        ly: 0.39,
        lz: 0.7,
        shadow:false,
        newshading:this.wireMaterial,
  }
    this.addAmbientLight();
    //this.addDirectionalLight();
  }

  addAmbientLight() {
    var light = new THREE.AmbientLight( 0x333333);
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
    Lights.lights.viewer.render();
  }

  static changeshadow(){
    var effectController=Lights.lights.effectController;
    var dlight=Lights.lights.dlight;
    if(effectController.shadow){
      for(var i=0;i<dlight.length;i++) {
        var light=dlight[i];
        light.castShadow=true;
        //light.shadowDarkness=0.7;
      }
      Lights.lights.viewer.render();
    }else{
      for(var i=0;i<dlight.length;i++) {
        var light=dlight[i];
        light.castShadow=false;
        //light.shadowDarkness=0;
      }
      Lights.lights.viewer.render();
    }
  }

  static changematerial(){

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
    //h.add( lights.effectController, "shadow" ).name( "shadow" ).onChange( Lights.changeshadow );
    this.enableTool(-1);
    h.open();

    h = this.alightgui.addFolder( "Views" );
    h.add( view.effectController, "grid" ).name( "grid" ).onChange( View.changegird );
    h.add( view.effectController, "axis" ).name( "axis" ).onChange( View.changeaxis );
    h.add( view.effectController, "fog" ).name( "fog" ).onChange( View.changefog );
    h.open();

    var tools=document.getElementsByName("tool1");
    var gui=this;
    for(var i=0;i<tools.length;i++) {
      tools[i].onclick=function(event) {
        gui.enableTool(((event.target) as any).value);
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
    }
  }
  addButton(){
    var toolwindow=document.getElementById("toolwindow");
    this.tooltab=document.createElement("div"); 
    this.tooltab.style.background="grey"; 
    this.tooltab.innerHTML="<a href=\"#\"><button name=\"tool1\" id=\"tool\" value=\"-1\">▼</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"0\">&nbsp;Attributes</button>"+
        "<button name=\"tool1\" id=\"tool\" value=\"1\">&nbsp;Properties</button>";
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
    //this.right.innerHTML="<a class=\"list-group-item\" href=\"#\"><i class=\"fa fa-cog fa-fw\" align=\"center\" ></i></a></br>"+
    //"<a class=\"list-group-item\" href=\"#\"><i class=\"fa fa-mouse-pointer\" align=\"center\"></i></a>"+
    //"<a class=\"list-group-item\" href=\"#\"><i class=\"fa fa-hand-paper-o\" align=\"center\"></i></a>"+
    //"<a class=\"list-group-item\" href=\"#\"><i class=\"fa fa-arrows-alt\" align=\"center\"></i></a>";
    //console.log(this.right);
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
  setting:any;
  zoom:any;
  pan:any;
  rotate:any;
  viewer:ViewerComponent;

  constructor(parent){
    this.setting=SideTools.createSideTool("S", parent);
    this.zoom=SideTools.createSideTool("Z", parent);
    this.zoom.style.width="100%";
    this.zoom.title="click to zoom";
    this.zoom.name="sixtool";
    this.pan=SideTools.createSideTool("P", parent);
    this.pan.style.width="100%";
    this.pan.title="click to pan";
    this.pan.name="sixtool";
    this.rotate=SideTools.createSideTool("R", parent);
    this.rotate.style.width="100%";
    this.rotate.title="click to rotate";
    this.rotate.name="sixtool";
  }

  static createSideTool(val, parent) {
    var btn=document.createElement("input");
    btn.type="button";
    btn.id=val;
    btn.value=val;
    btn.style.marginBottom="5px";
    parent.appendChild(btn);
    return btn;
  }
}

export class Viewers{
  zoom:any;
  pan:any;
  rotate:any;
  axes:any;
  fog:any;
  setting:any;
  constructor(viewer:ViewerComponent){
    this.setting=document.getElementById("S");
    this.setting.title="setting";
    var settingstyle=this.setting.style;
    settingstyle.width="100%";
    var settingwindow=document.createElement("settingwindow");
    var container=document.getElementById("container");
    var setitialized=true;
    this.setting.onclick= function(this,e) {
      if(setitialized){
        settingstyle.background="#696969";
        settingstyle.color="white";
        console.log(this.setting);
        settingwindow.style.width="600px";
        settingwindow.style.height="260px";
        settingwindow.style.position="absolute";
        settingwindow.style.background="rgba(0, 0, 0, 0.5)";
        settingwindow.style.top="0px";
        settingwindow.style.right="50px";
        settingwindow.appendChild(viewer.gui.alightgui.domElement);
        container.appendChild(settingwindow);
        setitialized=false;
      }else{
        settingstyle.background=null;
        settingstyle.color=null;
        container.removeChild(settingwindow);
        setitialized=true;
      }
    }

    this.zoom=document.getElementById("Z");
    var zoomself=this;
    this.zoom.onclick= function(this,e) {
      zoomself.zoom.style.background="#696969";
      zoomself.zoom.style.color="white";
      zoomself.pan.style.background=null;
      zoomself.pan.style.color=null;
      zoomself.rotate.style.background=null;
      zoomself.rotate.style.color=null;
      viewer.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
      viewer.controls.enabled=true;
      viewer.controls.enableZoom=true;
    }

    this.pan=document.getElementById("P");
    var panself=this;
    this.pan.onclick= function(this,e) {
      panself.pan.style.background="#696969";
      panself.pan.style.color="white";
      panself.zoom.style.background=null;
      panself.zoom.style.color=null;
      panself.rotate.style.background=null;
      panself.rotate.style.color=null;
      viewer.controls.mouseButtons={PAN:THREE.MOUSE.LEFT};
      viewer.controls.enabled=true;
      viewer.controls.enablePan=true;
    }

    this.rotate=document.getElementById("R");
    var rotateself=this;
    this.rotate.onclick= function(this,e) {
      rotateself.pan.style.background=null;
      rotateself.pan.style.color=null;
      rotateself.zoom.style.background=null;
      rotateself.zoom.style.color=null;
      rotateself.rotate.style.background="#696969";;
      rotateself.rotate.style.color="white";
      viewer.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};
      viewer.controls.enabled=true;
      viewer.controls.enableOrbit=true;
    }
  }
}

export class treeView{
  constructor(viewer:ViewerComponent){
    let hierarchicalData: { [key: string]: Object }[] = [
      { id: '01', name: 'part_Scaria_cutting_tool_assembly', 
        subChild: [
          {
            id: '01-01', name: 'Secania_cutting_tool_assembly',
            subChild: [
                { id: '01-01-01', name: 'Secania_cutting_tool_assembly',
                  subChild:[
                  {
                    id: '01-01-01-01', name: 'Secania_cutting_tool_assembly',
                    subChild:[
                      {id: '01-01-01-01-01', name: '3105316-T490 FLN d050'},
                      {id: '01-01-01-01-02', name: '5605374-t4901 LNHT'},
                    ]
                  }
                  ]
                 },
                //{ id: '01-01-02', name: 'Git' },
                //{ id: '01-01-03', name: 'IIS Express' },
            ]
        }
        ]
      }
    ];
    var treeViewInstance = new TreeView({
          fields:{ dataSource: hierarchicalData, id: 'id', text: 'name', child: 'subChild' }
    })
    var container=document.getElementById("container");
    var treeview=document.createElement("div"); 
    var treebutton=document.createElement("div"); 
    var tree=SideTools.createSideTool("T", treebutton);
    tree.style.width="30px";
    tree.title="show treeview";
    treeview.style.width="400px";
    treeview.id="treeview";
    treeview.style.height="300px";
    treeview.style.position="absolute";
    treeview.style.top="20px";
    treeview.style.left="0px";
    treeview.style.color="white";
    container.appendChild(treeview);
    treebutton.style.width="30px";
    treebutton.id="treebutton";
    treebutton.style.height="20px";
    treebutton.style.position="absolute";
    treebutton.style.top="0px";
    treebutton.style.left="0px";
    container.appendChild(treebutton);
    var initial=true;
    tree.onclick=function(this,e) { 
      if(initial){
        tree.style.background="#696969";
        tree.style.color="white";
        treeview.style.backgroundColor="rgba(0, 0, 0, 0.5)";
        treeViewInstance.appendTo(treeview);
        container.appendChild(treeview);
        initial=false;
      }else{
        tree.style.background=null;
        tree.style.color=null;
        container.removeChild(treeview);
        initial=true;
      }  
    }
  }

}
