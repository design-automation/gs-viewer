import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSplitModule } from 'angular-split';
import { MatSliderModule } from '@angular/material/slider';

import { GSViewerComponent } from './gs-viewer.component';
import { ViewerComponent } from './viewer/viewer.component';
import { SettingComponent } from './setting/setting.component';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { DataService } from '../lib/data/data.service';
/*
import { AttributeComponent } from './toolwindow/attribute.component';
import { GroupsComponent } from './toolwindow/groups.component';*/


@NgModule({
    imports: [ 	CommonModule,
    			/*AngularSplitModule,*/
			   	MatSliderModule
			 ],
    exports: [ GSViewerComponent/*, AngularSplitModule*/ ],
    declarations: [GSViewerComponent,
    			ViewerComponent,
			    SettingComponent,
			    ToolwindowComponent,
    			/*
			    AttributeComponent,
			    GroupsComponent*/],
    providers: [/*DataService*/],
})
export class GSViewerModule {
 	
 	static forRoot(): ModuleWithProviders {
        return {
            ngModule: GSViewerModule,
            providers: [
                DataService
            ]
        };
    }

}