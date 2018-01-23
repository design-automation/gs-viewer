import { Component } from '@angular/core';
import { DATA } from '../data/data';

import * as gs from 'gs-json';

@Component({
  	selector: 'app-root',
    templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

export class AppComponent {

	// dummy gs_data
	// to pass to the viewer
	public gs_dummy_data: gs.IModel =gs.genModelOpenPolyline();//gs.genModelTwoBoxesOpen();

    genModelManyBoxes(): gs.IModel {
        const m: gs.IModel = new gs.Model();
        const g: gs.IGeom = m.getGeom();
        for (let i = 0;i < 100; i++) {
            const p0: gs.XYZ = [1 + Math.random(), 1 + Math.random(), 0];
            p0.map((v) => v * 1000);
            const size: gs.XYZ = [Math.random(), Math.random(), Math.random()];
            size.map((v) => v * 80);
            const p1: gs.XYZ = [p0[0] + size[0], p0[1],           p0[2]];
            const p2: gs.XYZ = [p0[0] + size[0], p0[1] + size[1], p0[2]];
            const p3: gs.XYZ = [p0[0],           p0[1] + size[1], p0[2]];
            const p4: gs.XYZ = [p0[0],           p0[1],           p0[2] + size[2]];
            const p5: gs.XYZ = [p0[0] + size[0], p0[1],           p0[2] + size[2]];
            const p6: gs.XYZ = [p0[0] + size[0], p0[1] + size[1], p0[2] + size[2]];
            const p7: gs.XYZ = [p0[0],           p0[1] + size[1], p0[2] + size[2]];
            const points: gs.IPoint[] = [p0, p1, p2, p3, p4, p5, p6, p7].map((v) => g.addPoint(v));
            g.addPolymesh([
                [points[0],points[1],points[2],points[3]],
                [points[0],points[4],points[5],points[1]],
                [points[1],points[5],points[6],points[2]],
                [points[2],points[6],points[7],points[3]],
                [points[3],points[7],points[4],points[0]],
                [points[7],points[6],points[5],points[4]],
            ]);
        }
        return m;
    }
    data_boxes ={
        attribs: null,
        geom: {
            objs: [
                [
                    [
                        [0, 1, 2, 3, -1],
                    ],
                    [
                        [1, 5, 4, 0, -1],
                        [2, 6, 5, 1, -1],
                        [3, 7, 6, 2, -1],
                        [0, 4, 7, 3, -1],
                        [5, 6, 7, 4, -1],
                    ],
                    [200],
                ],
            ],
            points: [
                [0, 1, 2, 3, 4, 5, 6, 7],
                [
                    [-0.7, -1.0, 0.0],
                    [0.2, -1.0, 0.0],
                    [0.2, -1.0, 3.0],
                    [-0.7, -1.0, 3.0],
                    [-0.7, 1.0, 0.0],
                    [0.2, 1.0, 0.0],
                    [0.2, 1.0, 3.0],
                    [-0.7, 1.0, 3.0],
                ],
            ],
        },
        groups: [
            {
                name: "building_obj",
                objs: [0],
                props: [["descr", "The building object, that has wire and faces."]],
            },
            // groups with topo
            {
                name: "building_all_faces",
                topos: [
                    [[0, [0, 1, 2, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "walls",
                parent: "building_obj",
                props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
                topos: [
                    [[0, [1, 3, 4]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "floor",
                parent: "building_obj",
                topos: [
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "roof",
                parent: "building_obj",
                topos: [
                    [[0, [2]]],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "winodw_openings",
                parent: "building_obj",
                topos: [
                    [],
                    [[0, [0]]],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertical_edges_of_faces",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [1, [1, 3]],
                                [3, [1, 3]],
                                [4, [0, 2]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "vertices_on_ground",
                parent: "building_obj",
                topos: [
                    [
                        [0,
                            [
                                [0, [0, 1, 2, 3]],
                                [1, [2, 3]],
                                [3, [0, 1]],
                                [4, [0, 3]],
                            ],
                        ],
                    ],
                    [
                        [0,
                            [
                                [0, [0, 1]],
                            ],
                        ],
                    ],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            {
                name: "points_on_ground",
                parent: "building_obj",
                points: [0, 1, 4, 5],
            },
        ],
        metadata: {
            crs: { epsg: 3857 },
            filetype: "gs-json",
            location: "+0-0",
            version: "0.1.1",
        },
        skins: null,
    };
}
