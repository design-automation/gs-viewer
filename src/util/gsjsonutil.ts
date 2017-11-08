import { Component } from '@angular/core';
import { AppArray } from '../app/app.array';
import { DATA } from '../formatstructure/data';
import { OBJTYPE } from '../formatstructure/data';

export class Util {

	static createWiresFromFaces(faces:Array<any>,points:Array<any>) {
		var edges=Util.createEdgesForWires(faces, points);
		var wires=[];
		Util.createWires(edges, null, wires, null)

		return wires;
	}

	static createEdgesForWires(faces:Array<any>, points:Array<any>){
		var edges=new AppArray([]);
		for (var j=0;j<faces.length;j++) {
			var face=faces[j];
			for(var i=0;i<face.length-1;i++) {
    			var index=edges.findIndex([face[i+1], face[i]], OBJTYPE.EDGE);
    			var edge=[face[i], face[i+1]];
    			if(index<0) {
      				edges.values.push(edge);
    			} else {
      				edges.values.splice(index, 1);
    			}
  			}
		}
  		return edges;
	}

	static createWires(edges, edge, wires, wire) {
		if(edge==null) {
    		if(edges.values.length==0) {
      			return;
    		}
    		edge=edges.values[0];
    		wire=[];
    		wire.push(edge[0]);
    		wires.push(wire);
  		}

  		wire.push(edge[1]);
  		edges.remove(edge);
  		edge=Util.findEdge(edges.values,DATA.points[edge[1]]);
  		Util.createWires(edges, edge, wires, wire);
	}

	static findEdge(edges, pointind) {
		for(var i=0;i<edges.length;i++) {
			if(DATA.points[edges[i][0]]==pointind) {
				return edges[i];
			}
		}
		return null;
	}
}