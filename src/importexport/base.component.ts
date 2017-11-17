import { DATA } from '../data/data';

export class Importer {
	reader:AbstractReader;
	mapper:AbstractMapper;
	constructor(reader, mapper) {
		this.reader=reader;
		this.mapper=mapper;
	}

	import() {
		if(this.reader.result==null || this.reader.result==undefined) {
			alert("Please select input file");
			return;
		}
		return this.mapper.map(this.reader.read());
	}
}

export class Exporter {
	mapper:AbstractMapper;
	header:string;

	constructor(header,mapper) {
		this.header=header;
		this.mapper=mapper;
	}

	export() {
		if(DATA.json==null || DATA.json==undefined) {
			alert("No Data to Export!!");
			return;
		}
		return this.header+encodeURIComponent(this.mapper.map(DATA.json));
	};
}

export abstract class AbstractReader extends FileReader {
	constructor(inputf:File) {
		super();
		if(inputf==null || inputf==undefined) {
			alert("input file is undefined");
		}
		this.readAsText(inputf);
	}
	abstract read():any;
}

export abstract class AbstractMapper {
	abstract map(input:any):any;
}