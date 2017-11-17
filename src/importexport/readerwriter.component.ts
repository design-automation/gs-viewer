import { AbstractReader } from './base.component';
export class JSONReader extends AbstractReader {
	constructor(inputf:File) {
		super(inputf);
	}
	read() {
		return JSON.parse(this.result);
	};
}

export class XMLReader extends AbstractReader {
	constructor(inputf:File) {
		super(inputf);
	}
	read() {		
		var xmlDoc=(new DOMParser()).parseFromString(this.result,"text/xml");
		return xmlDoc;
	};
}