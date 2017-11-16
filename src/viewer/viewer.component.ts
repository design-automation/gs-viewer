import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

export class ViewerComponent {
	viewerwindow:any;
	width:any;
	height:any
	container:any;
	renderer:any;
	scene:any;
	camera:any;
	controls:any;

	constructor() {
		var self=this;
		this.width=window.innerWidth;
		this.height=window.innerHeight;
		this.viewerwindow=window.open('', '', 'height='+this.height+',width='+this.width);
		this.load();
		this.animate();
	}

	load() {
		var doc=this.viewerwindow.document;
		doc.body.innerHTML="<div>"+
  		"<div id=\"container\" style=\"width:100%;"+
  		"height:50px; background:#6C6C6C; color:#FFF\">"+
  		+"<\div><\div>";

		this.scene=new THREE.Scene();
		this.scene.background = new THREE.Color( 0xcccccc );
		this.scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio( this.viewerwindow.devicePixelRatio );
		this.renderer.setSize( this.width, this.height );

		this.container=doc.getElementById( 'container' );
		this.container.appendChild( this.renderer.domElement );

		this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 1000 );
		this.camera.position.z = 500;

		this.controls=new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.addEventListener( 'change', this.render );
		this.controls.enableZoom = false;

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

		var light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 1, 1, 1 );
		this.scene.add( light );
		var light1 = new THREE.DirectionalLight( 0x002288 );
		light.position.set( -1, -1, -1 );
		this.scene.add( light1 );
		var light2 = new THREE.AmbientLight( 0x222222 );
		this.scene.add( light2 );

		this.viewerwindow.addEventListener( 'resize', this.onWindowResize, false );
	}

	onWindowResize() {
		this.camera.aspect = this.viewerwindow.innerWidth / this.viewerwindow.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( this.viewerwindow.innerWidth, this.viewerwindow.innerHeight );
	}
	animate() {
		requestAnimationFrame( this.animate );
		this.controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
		this.render();
	}
	render() {
		alert(1);
		this.renderer.render( this.scene, this.camera );
	}
}

