import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import * as gs from "gs-json";
import { box_with_groups } from '../data/data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  ngOnInit() {
  
  }
}