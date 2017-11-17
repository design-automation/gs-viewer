import { JSONReader } from './readerwriter.component';
import { XMLReader } from './readerwriter.component';
import { FromCityGML } from './citygml/fromcitygml';
import { AbstractMapper } from './base.component';
import { Importer } from './base.component';
import { Exporter } from './base.component';
import { DATA } from '../data/data';

export class ImportExportFactory {
	static KEYS={
		importers: {
			citygml:"icitygml",
			gs:"igs"
		},
		exporters: {
			gs:"egs",
			threejs:"ethreejs"
		}
	}

	static DONOTHING:AbstractMapper={
		map(data) {
			DATA.json=data;
			return JSON.stringify(DATA.json);
		}
	};
	
	static getImporter(inputf:File,inputType:string):Importer {
		var importers=ImportExportFactory.KEYS.importers;
		if(inputType==importers.citygml) {
			return new Importer(new XMLReader(inputf), new FromCityGML());
		} else {
	 		return new Importer(new JSONReader(inputf), ImportExportFactory.DONOTHING);
		}
	}

	static getExporter(outputType:string):Exporter {
		var exporters=ImportExportFactory.KEYS.exporters;
		if(outputType==null || outputType==undefined) {
			alert("Please select input file");
			return null;
		} else {
			 return new Exporter("text/json;charset=utf-8,",ImportExportFactory.DONOTHING);
		}
	}
}