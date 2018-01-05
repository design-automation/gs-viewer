import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './data/data.service';
import * as gs from "gs-json";

@Component({
  selector: 'gs-viewer',
  templateUrl: './gs-viewer.component.html',
  styleUrls: ['./gs-viewer.component.scss']
})
export class GSViewerComponent {

	// gs model data passed to the viewer
	@Input() data:gs.IModel;

	constructor(private dataService: DataService){};

	ngOnInit() {
		this.dataService.setGsModel(this.data);
	}

	ngDoCheck(){
		if(this.dataService.getGsModel() !== this.data){
			this.dataService.setGsModel(this.data);
		}
	}

}