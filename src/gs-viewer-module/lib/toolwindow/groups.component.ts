import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import * as gs from "gs-json";
import { box_with_groups } from '../viewer/viewer.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  boxes:any;
  model:any;
  groupName:any;

  constructor(){
    this.boxes=box_with_groups();
    this.model= new gs.Model(this.boxes);
    this.Groupname(this.boxes);
    console.log(this.boxes);
  }
  ngOnInit() {
  
  }

  Groupname(boxes){
    var groups=[];
    for (var i=0 ; i<boxes.groups.length ; i++){
      var name=boxes.groups[i];
      groups.push(name);
    }
    this.groupName = groups;
  }
}