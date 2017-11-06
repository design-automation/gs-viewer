import { Component } from '@angular/core';
import { AppArray } from '../app/app.array';

export class Util {

	static createWiresFromFaces(faces:Array<any>) {
		var edges=Util.createEdgesFromFaces(faces);
		var wires=[];
		alert(JSON.stringify(edges.values));
		Util.createWires(edges, null, wires, null)

		return wires;
	}

	static createEdgesFromFaces(faces:Array<any>){
		var edges=new AppArray([]);
		for (var j=0;j<faces.length;j++) {
			var face=faces[j];
			for(var i=0;i<face.length-1;i++) {
    			var index=edges.findIndex([face[i+1], face[i]]);
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
  		edge=Util.findEdge(edges.values,edge[1]);
  		Util.createWires(edges, edge, wires, wire);
	}

	static findEdge(edges, pointind) {
		for(var i=0;i<edges.length;i++) {
			if(edges[i][0]==pointind) {
				return edges[i];
			}
		}
		return null;
	}
}