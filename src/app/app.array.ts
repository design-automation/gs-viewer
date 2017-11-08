import { Component } from '@angular/core';
import { DATA } from '../formatstructure/data';
import { OBJTYPE } from '../formatstructure/data';

export class AppArray<T> {
	values:Array<T>;
	prefix:string;
	postfix:string;

	constructor(input:Array<T>) {
		this.values=input;
	}
	
	static create(pre,input,post) {
		var apparray=new AppArray(input)
		apparray.prefix=pre;
		apparray.postfix=post;
		return apparray;
	}

	push(input) {
		this.values.push(input);
	}
	pop() {
		return this.values.pop();
	}

  public toString = () : string => {
		return this.prefix+this.values.toString()+this.postfix;
  }

  public isEqual = (appArray:AppArray<T>) : boolean => {
     return AppArray.areEqual(this.values, appArray.values);
  }

  public findIndex = (value:T,type:OBJTYPE) : number => {
    var ind;
    if(type==OBJTYPE.NUMARRAY) {
      ind=this.values.findIndex(function(entry, index, arr){
        return AppArray.areEqual(value, entry);
      });
    } else {
      ind=this.values.findIndex(function(entry, index, arr){
        return DATA.areEqualTypes(value,entry,type);
      });
    }
  	return ind;
  }

  public remove() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.values.length) {
      what = a[--L];
      while ((ax = this.findIndex(what, OBJTYPE.NUMARRAY)) !== -1) {
        this.values.splice(ax, 1);
      }
    }
    return this;
  }

	public static areEqual = (array, input) : boolean => {
    if(array.length!=input.length) {
     	return false;
    }
    for(var i=0;i<array.length;i++) {
      if(array[i]!=input[i]) {
      	return false;
     	}
    }
   	return true;
	}
}