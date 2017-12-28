import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import * as dat from 'dat.gui/build/dat.gui.js';
import { AngularSplitModule } from 'angular-split';
import { SettingComponent } from '../setting/setting.component';
import * as gs from "gs-json";
import { DataService } from "../data.service";
//import { Octree } from "octree";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  scene:any;
  renderer:any;
  container:any;
  camera:any;
  width:any;
  height:any;
  light:any;
  controls:any;
  changeside:string="❱";
  initial:boolean=true;
  view:any;
  raycaster:any;
  mouse:any;
  settingVisible: boolean=false;
  Visible:string="select";
  model:any;
  boxes:any;
  geometry:THREE.Geometry;
  scenechange:any;
  INTERSECTED:any;
  INTERSECTEDcolor:any;
  
  constructor(private dataService: DataService) { 
    this.scene=new THREE.Scene();
    this.dataService.addScene(this.scene);
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.dataService.addRender(this.renderer);
    this.dataService.addAmbientLight();
    this.boxes=box_with_groups();
    this.model= new gs.Model(this.boxes);
    this.geometry = new THREE.Geometry();
    this.dataService.addGeom(this.geometry);
    this.scenechange=this.scene;
    this.mouse=new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
  }

  ngOnInit() {
    this.scene.background = new THREE.Color( 0xcccccc );
  
    this.container=document.getElementById( 'container' );
    this.width=this.container.clientWidth;
    this.height=this.container.clientHeight;    

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

    /*window.addEventListener( 'mousedown',function(e){
      var INTERSECTED;
      e.preventDefault();
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(self.scene.children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
          if ( INTERSECTED ) {
            INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
          }
          console.log("1");         
          INTERSECTED = intersects[ 0 ].object;
          console.log(self.INTERSECTEDcolor);
          INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          
          INTERSECTED.material.color.setHex( 0xff0000 );
          window.addEventListener("keydown", function(event) {
            if(event.key === "Delete") self.scene.remove(INTERSECTED);
            if(event.key==="s") self.scene.add(INTERSECTED);
          });
        }
      } else {
        console.log("3");
        //INTERSECTED.material.color=self.INTERSECTEDcolor;
        if ( INTERSECTED ) {INTERSECTED.material.color.setHex( INTERSECTED.currentHex );}
        INTERSECTED = null;
      }
      self.render();
    }, false );*/


    this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 1000 );
    this.camera.position.z = 10;
    this.camera.updateMatrixWorld();
    this.camera.lookAt(this.scene.position);
    console.log(this.camera);

    self.light = new THREE.DirectionalLight( 0xffffff,0.5);
    this.controls=new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.addEventListener( 'change',  function() {
      self.light.position.copy( self.camera.position );
    } );
    this.scene.add( self.light );
    this.geometry=this.pushGSGeometry();
    for ( var i = 0; i < 50; i ++ ) {
      var material = new THREE.MeshPhongMaterial( { color: 0xffffff} );
      var mesh = new THREE.Mesh( this.geometry, material );
      mesh.position.x = ( Math.random() - 0.5 ) * 50;
      mesh.position.y = ( Math.random() - 0.5 ) * 50;
      mesh.position.z = ( Math.random() - 0.5 ) * 50;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      this.scene.add( mesh );
    }

    this.render();
  }

  pushThreeGeometry(){
    //var geom = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
    var geom = new THREE.BoxBufferGeometry( 20, 20, 20 )
    return geom;
  }
  pushGSGeometry(){
    var geom=new THREE.Geometry();
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff,side:THREE.DoubleSide} );
    for (const p of this.model.getGeom().getPoints()) {
      const xyz: number[] = p.getPosition();
      geom.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
    }
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
          const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
          geom.faces.push(new THREE.Face3(point_IDs[0],point_IDs[1],point_IDs[2]));
          geom.faces.push(new THREE.Face3(point_IDs[0],point_IDs[2],point_IDs[3]));
        
        }
    }
    return geom;
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse=new THREE.Vector2();
    this.mouse.x = ( event.offsetX / this.container.clientWidth ) * 2 - 1;
    this.mouse.y =-( event.offsetY / this.container.clientHeight ) * 2 + 1;
  }

  onDocumentMouseDown(event){
    var INTERSECTED;
    this.raycaster.setFromCamera(this.mouse,this.camera);
      var intersects = this.raycaster.intersectObjects(this.scene.children);
      if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
          if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          //INTERSECTEDcolor=INTERSECTED.material.color;
          console.log(this.INTERSECTEDcolor);
          INTERSECTED.material.color.setHex( 0xFF0000);
        }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
      }

  }


  render():void {
    let self = this;
    (function render(){
      self.raycaster.setFromCamera(self.mouse,self.camera);
      var intersects = self.raycaster.intersectObjects(self.scene.children);
      if ( intersects.length > 0 ) {
        if ( self.INTERSECTED != intersects[ 0 ].object ) {
          if ( self.INTERSECTED ) self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
          self.INTERSECTED = intersects[ 0 ].object;
          self.INTERSECTED.currentHex = self.INTERSECTED.material.color.getHex();
          self.INTERSECTEDcolor=self.INTERSECTED.material.color;
          console.log(self.INTERSECTEDcolor);
          self.INTERSECTED.material.color.setHex( 0xFF0000);
        }
      } else {
        if ( self.INTERSECTED ) self.INTERSECTED.material.color.setHex( self.INTERSECTED.currentHex );
        self.INTERSECTED = null;
      }
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
    }());
    this.renderer.render( this.scene, this.camera );

  }

  
  
  sidebar(initial):void{
    var change=document.getElementById("change");
    var sidebar=document.getElementById("sidebar");
    if(this.initial){
      this.changeside="❱";
      sidebar.style.display="block";
    }
    else{
      this.changeside="❰";
      sidebar.style.display="none";
    }
    this.initial=!this.initial;
  }

  zoom(Visible){
    /*document.body.style.cursor = "crosshair";
    this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableZoom=true;*/
    this.Visible="zoom";
  }

  pan(Visible){
    /*document.body.style.cursor = "-webkit-grab";
    this.controls.mouseButtons={PAN:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enablePan=true;*/
    this.Visible="pan";
  }

  rotate(Visible){
    /*document.body.style.cursor = " -webkit-grab";
    this.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableOrbit=true;*/
    this.Visible="rotate";
  }

  select(Visible){
    /*document.body.style.cursor = " default";
    this.controls.enabled=false;
    this.controls.enableOrbit=false;*/
    this.Visible="select";
  }
 
}

export function box_with_groups() {
    return {
        attribs: null,
        geom: {
            objs: [
                [
                    [
                        [0, 1, 2, 3, -1],
                    ],
                    [
                        [1, 5, 4, 0, -1],
                        [2, 6, 5, 1, -1],
                        [3, 7, 6, 2, -1],
                        [0, 4, 7, 3, -1],
                        [5, 6, 7, 4, -1],
                    ],
                    [200],
                ],
            ],
            points: [
                [0, 1, 2, 3, 4, 5, 6, 7],
                [
                    [-0.7, -1.0, 0.0],
                    [0.2, -1.0, 0.0],
                    [0.2, -1.0, 3.0],
                    [-0.7, -1.0, 3.0],
                    [-0.7, 1.0, 0.0],
                    [0.2, 1.0, 0.0],
                    [0.2, 1.0, 3.0],
                    [-0.7, 1.0, 3.0],
                ],
            ],
        },
        groups: [
            {
                name: "building_obj",
                objs: [0],
                props: [["descr", "The building object, that has wire and faces."]],
            },
            // groups with topo
            {
                name: "building_all_faces",
                topos: [
                    [[0, [0, 1, 2, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "walls",
                parent: "building_obj",
                props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
                topos: [
                    [[0, [1, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "floor",
                parent: "building_obj",
                topos: [
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "roof",
                parent: "building_obj",
                topos: [
                    [[0, [2]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "winodw_openings",
                parent: "building_obj",
                topos: [
                    [],
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertical_edges_of_faces",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [1, [1, 3]],
                                [3, [1, 3]],
                                [4, [0, 2]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertices_on_ground",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [0, [0, 1, 2, 3]],
                                [1, [2, 3]],
                                [3, [0, 1]],
                                [4, [0, 3]],
                            ],
                        ],
                    ],
                    [
                        [0,
                            [
                                [0, [0, 1]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "points_on_ground",
                parent: "building_obj",
                points: [0, 1, 4, 5],
            },
        ],
        metadata: {
            crs: { epsg: 3857 },
            filetype: "gs-json",
            location: "+0-0",
            version: "0.1.1",
        },
        skins: null,
    };
}