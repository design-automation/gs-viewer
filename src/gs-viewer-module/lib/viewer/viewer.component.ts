import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { DataService } from "../data/data.service";
import { SettingComponent } from "../setting/setting.component";
import * as THREE from 'three';
import * as gs from "gs-json";

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

  @ViewChild (SettingComponent) settings: SettingComponent;
  
  constructor(private dataService: DataService, private _vcr: ViewContainerRef) { 
    this.scene=new THREE.Scene();
    this.dataService.addScene(this.scene);
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.dataService.addRender(this.renderer);
    this.dataService.addAmbientLight();
    this.boxes=box_with_groups();
    this.model= new gs.Model(this.boxes);
    console.log(this.model);
    this.geometry = new THREE.Geometry();
    this.dataService.addGeom(this.geometry);

  }

  ngAfterViewInit() {
    this._vcr.createEmbeddedView(settings);
  }

  ngOnInit() {
    this.scene.background = new THREE.Color( 0xcccccc );
  
    this.container=document.getElementById("container");
    
    this.width=this.container.clientWidth;
    this.height=this.container.clientHeight; 

    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.width, this.height );
    this.container.appendChild( this.renderer.domElement );

    this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 1000 );
    //this.camera.position.z = 500;
    this.camera.position.z = 10;
    this.camera.updateMatrixWorld();
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.scene.position);

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
          if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
          INTERSECTED.material.color.setHex( 0xff0000 );
        }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
      }
      self.render();
    }, false );

    /*window.addEventListener( 'mousedown',function(e){
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
          if ( INTERSECTED1 ) {
            INTERSECTED1.material.color.setHex( INTERSECTED1.currentHex );
          }          
          INTERSECTED1 = intersects[ 0 ].object;
          INTERSECTED1.currentHex = INTERSECTED1.material.color.getHex();
          INTERSECTED1.material.color.setHex( 0xff0000 );
          window.addEventListener("keydown", function(event) {
            if(event.key === "Delete") self.scene.remove(INTERSECTED1);
            if(event.key==="s") self.scene.add(INTERSECTED1);
          });
        }
      } else {
        if ( INTERSECTED1 ) INTERSECTED1.material.color.setHex( INTERSECTED1.currentHex );
        INTERSECTED1 = null;
      }
      self.render();
    }, false );*/

    this.light = new THREE.DirectionalLight( 0xffffff,0.5);
    this.controls=new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;
    this.controls.addEventListener( 'change',  function() {
      //this.light.position.copy( this.camera.position );
    } )
    this.scene.add( this.light );

    /*var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
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
    */ 
    var wireMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, side: THREE.DoubleSide,wireframe:false } );
    /*for (const p of this.model.getGeom().getPoints()) {
      // Do something here with your points
      // For example, get the position of each point
      const xyz: number[] = p.getPosition();
      this.geometry.vertices.push(new THREE.Vector3(xyz[0], xyz[1], xyz[2]));
      var points = new THREE.Mesh( this.geometry,wireMaterial);
      this.scene.add(points);
    }
    for (const polymesh of this.model.getGeom().getObjs(gs.EObjType.polymesh)) {
      const faces: gs.IFace[] = polymesh.getFaces();
        for (const face of faces) {
          const point_IDs: number[] = face.getVertices().map((v, i) => v.getPoint().getID());
          // Do something here.
          this.geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[1],point_IDs[2]));
          this.geometry.faces.push(new THREE.Face3(point_IDs[0],point_IDs[2],point_IDs[3]));
          var plane = new THREE.Mesh( this.geometry, wireMaterial);
          this.scene.add(points);
        }
    }
    this.render();*/

  }
  
  render():void {
    let self = this;
    (function render(){
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
    document.body.style.cursor = "crosshair";
    this.controls.mouseButtons={ZOOM:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableZoom=true;
    this.Visible="zoom";
  }

  pan(Visible){
    document.body.style.cursor = "-webkit-grab";
    this.controls.mouseButtons={PAN:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enablePan=true;
    this.Visible="pan";
  }

  rotate(Visible){
    document.body.style.cursor = " -webkit-grab";
    this.controls.mouseButtons={ORBIT:THREE.MOUSE.LEFT};
    this.controls.enabled=true;
    this.controls.enableOrbit=true;
    this.Visible="rotate";
  }

  select(Visible){
    document.body.style.cursor = " default";
    this.controls.enabled=false;
    this.controls.enableOrbit=false;
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