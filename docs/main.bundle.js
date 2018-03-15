webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  overflow: hidden;\r\n}\r\n\r\n#appdiv {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  overflow: hidden;\r\n  font-family:sans-serif;\r\n\r\n}\r\n\r\n#input-container{\r\n  position: absolute;\r\n  width: 300px; \r\n  left: calc(50% - 150px);\r\n  top: 15px;\r\n  z-index: 100;\r\n  font-family:sans-serif;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-orient: horizontal; \r\n  -webkit-box-direction: normal; \r\n      -ms-flex-direction: row; \r\n          flex-direction: row; \r\n  -webkit-box-pack: justify; \r\n      -ms-flex-pack: justify; \r\n          justify-content: space-between;\r\n\r\n}\r\n\r\na { text-decoration: none; color: #fff; text-transform: uppercase; }\r\n.toolbar { background-color: #333; }\r\n.toolbar ul { list-style: none; overflow: hidden; margin-bottom: 0px; z-index: 1; }\r\n.toolbar div > ul > li { display:inline-block; float: left; }\r\n.toolbar div > ul > li:hover { background-color: #fff; }\r\n.toolbar div > ul > li:hover a { color: #333; }\r\n.toolbar div > ul > li > a { \r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  display: block; float: left;\r\n  padding: 0 16px;\r\n}\r\n/**\r\n * Carets\r\n */\r\n.toolbar div ul li i.icon-sort { display: none; }\r\n.toolbar div ul li:hover i.icon-sort { display: inline; }\r\n.toolbar div ul li:hover i.icon-caret-down { display: none; }\r\n.toolbar .dropdown i {\r\n  margin: 0px;\r\n}\r\n.toolbar div > ul > li > a:hover {\r\n  background-color: #fff; \r\n  color: #333\r\n} \r\n.dropdown { float: left; }\r\n/**\r\n * Sub navigaton\r\n **/\r\n.sub { \r\n  min-width: 180px; margin: 20px;\r\n  display: none; position: absolute; \r\n  border-left: 1px solid #ebebeb;\r\n  border-right: 1px solid #ebebeb;\r\n  border-bottom: 1px solid #ebebeb\r\n}\r\n.sub li a { \r\n  display: block; \r\n  background-color: #fff;\r\n  color: #333 !important;\r\n  border-left: 4px solid #fff;\r\n  padding: 4px 12px;\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n}\r\n.sub li a:hover { \r\n  border-left: 4px solid #ff0000;\r\n  float: top;\r\n}\r\n.toolbar div > ul > li:hover .sub { display: block; }\r\n.sub li a { transition: all .5s linear ; overflow: hidden; }\r\n\r\n#toolwindow {\r\n    position: relative;\r\n    background-color: slategrey;\r\n}\r\n\r\n.sidebar {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 100%;\r\n}\r\n\r\n.tool-form {\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    color: white;\r\n}\r\n.tool-form-heading{ \r\n    border-bottom: 2px solid #ddd;\r\n    margin: 0px;\r\n    padding-bottom: 3px;\r\n}\r\n.tool-form label{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    color:black;\r\n    display: block;\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n.tool-form label > span{\r\n    width: 150px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    float: left;\r\n    padding-top: 4px;\r\n    padding-right: 5px;\r\n}\r\n.tool-form span.required{\r\n    color:red;\r\n}\r\n.tool-form .tel-number-field{\r\n    width: 30px;\r\n    text-align: center;\r\n}\r\n.tool-form input.input-field{\r\n    width: 30px;\r\n}\r\n.tool-form input.file-input-field{\r\n    border: 1px solid #ccc;\r\n    height: 20px;\r\n    display: inline-block;\r\n    padding: 6px 6px;\r\n    cursor: pointer; \r\n    background-color: #888888;\r\n}\r\n.tool-form input.input-field, \r\n.tool-form .tel-number-field, \r\n.tool-form .textarea-field, \r\n.tool-form .select-field{\r\n   height: 20px;\r\n   overflow: hidden;\r\n   width: 240px;\r\n   background-color: #888888;\r\n   border-radius: 5px;\r\n   color: #ffffff;\r\n}\r\n.tool-form .input-field:focus, \r\n.tool-form .tel-number-field:focus, \r\n.tool-form .textarea-field:focus,  \r\n.tool-form .select-field:focus{\r\n    border: 1px solid #0C0;\r\n}\r\n.tool-form .textarea-field{\r\n    height:100px;\r\n    width: 55%;\r\n}\r\n.tool-form input[type=submit],\r\n.tool-form input[type=button]{\r\n    height: 25px;\r\n    border: none;\r\n    padding: 2px 8px 2px 8px;\r\n    background: #444466;\r\n    color: #fff;\r\n    box-shadow: 1px 1px 4px #DADADA;\r\n    -moz-box-shadow: 1px 1px 4px #DADADA;\r\n    -webkit-box-shadow: 1px 1px 4px #DADADA;\r\n    border-radius: 3px;\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    color: #ffffff;\r\n}\r\n.tool-form input[type=submit]:hover,\r\n.tool-form input[type=button]:hover{\r\n    background: #333377;\r\n    color: #fff;\r\n}\r\n\r\n.rightstyle {\r\n  width: 30px;\r\n  height: 100%;\r\n  float: right;\r\n  background: #FFFFFF;\r\n  background-repeat: repeat; \r\n  background-attachment: scroll; \r\n  overflow: auto; \r\n}\r\n\r\n.leftstyle {\r\n    background: #e6e6e6;\r\n    height: 100%;\r\n}\r\n\r\n.slider {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 30px solid transparent;\r\n    border-right: 10px solid black;\r\n    border-bottom: 30px solid transparent;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div id=\"input-container\">\r\n    <div class=\"version\" style=\"font-family:sans-serif;\"> v0.0.11</div>\r\n    <input type=\"file\" id=\"files\" name=\"files[]\" style=\"font-family:sans-serif;\" (change)=\"handleFileSelect($event)\" />\r\n  </div>\r\n  <!-- gs-viewer demo -->\r\n  <gs-viewer [data]=\"gs_dummy_data\"></gs-viewer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gs_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // dummy gs_data
        // to pass to the viewer
        // gs.genModelTwoBoxesOpen();//gs.genModelTwoBoxesOpen();//gs.genModelPlanes();//
        this.gs_dummy_data = __WEBPACK_IMPORTED_MODULE_1_gs_json__["genModelGroups"](); //gs.genModelBoxWithAttribs();//gs.genModelTwoBoxesOpen();//gs.genModelBoxWithAttribs();//gs.genModelGroups();//gs.genModelObjWithAttribs();//gs.genModelObjWithAttribs();//gs.genModelBoxWithAttribs();//gs.genModelGroups();//gs.genModelClosedPolyline();//gs.genModelOpenPolyline();//gs.genModelClosedPolyline();
        this.test_data1 = {
            "metadata": {
                "filetype": "gs-json",
                "version": "0.1.8",
                "uuid": "02c96aa7-dd89-4a7c-87e8-022179fc5872"
            },
            "geom": {
                "points": [
                    [
                        1,
                        2,
                        3,
                        4,
                        null,
                        6,
                        null,
                        8,
                        9,
                        null,
                        11,
                        null,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        null,
                        61,
                        null,
                        63,
                        64,
                        null,
                        66,
                        null,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        82,
                        83,
                        84,
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        91,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        98,
                        99,
                        100,
                        101,
                        102,
                        70,
                        103,
                        104,
                        105,
                        106,
                        107,
                        108,
                        109,
                        110,
                        111,
                        112,
                        113,
                        null,
                        115,
                        null,
                        117,
                        118,
                        null,
                        120,
                        null,
                        122,
                        123,
                        124,
                        125,
                        124,
                        126,
                        127,
                        128,
                        129,
                        130,
                        131,
                        132,
                        133,
                        134,
                        135,
                        136,
                        137,
                        138,
                        139,
                        140,
                        141,
                        142,
                        143,
                        144,
                        145,
                        146,
                        147,
                        148,
                        149,
                        150,
                        151,
                        152,
                        153,
                        154,
                        155,
                        156,
                        157,
                        158,
                        159,
                        160,
                        161,
                        162,
                        163,
                        164,
                        165,
                        166,
                        167,
                        null,
                        169,
                        null,
                        171,
                        172,
                        null,
                        174,
                        null,
                        176,
                        177,
                        178,
                        179,
                        180,
                        181,
                        182,
                        183,
                        184,
                        185,
                        186,
                        187,
                        188,
                        189,
                        190,
                        191,
                        192,
                        193,
                        194,
                        195,
                        196,
                        197,
                        198,
                        199,
                        200,
                        201,
                        202,
                        203,
                        204,
                        205,
                        206,
                        207,
                        208,
                        209,
                        210,
                        178,
                        211,
                        212,
                        213,
                        214,
                        215,
                        216,
                        217,
                        218,
                        219,
                        220,
                        221,
                        null,
                        223,
                        null,
                        225,
                        226,
                        null,
                        228,
                        null,
                        230,
                        231,
                        232,
                        233,
                        234,
                        235,
                        236,
                        237,
                        238,
                        239,
                        240,
                        241,
                        242,
                        243,
                        244,
                        245,
                        246,
                        247,
                        248,
                        249,
                        250,
                        251,
                        252,
                        253,
                        254,
                        255,
                        256,
                        257,
                        258,
                        259,
                        260,
                        261,
                        262,
                        263,
                        264,
                        232,
                        265,
                        266,
                        267,
                        268,
                        269,
                        270,
                        271,
                        272,
                        273,
                        274,
                        275,
                        null,
                        277,
                        null,
                        279,
                        280,
                        null,
                        282,
                        null,
                        284,
                        285,
                        286,
                        287,
                        288,
                        289,
                        290,
                        291,
                        292,
                        293,
                        294,
                        295,
                        296,
                        297,
                        298,
                        299,
                        300,
                        301,
                        302,
                        303,
                        304,
                        305,
                        306,
                        307,
                        308,
                        309,
                        310,
                        311,
                        312,
                        313,
                        314,
                        315,
                        316,
                        317,
                        318,
                        319,
                        320,
                        321,
                        322,
                        323,
                        324,
                        325,
                        326,
                        327,
                        328,
                        329,
                        330,
                        null,
                        332,
                        null,
                        334,
                        335,
                        null,
                        337,
                        null,
                        339,
                        340,
                        341,
                        342,
                        343,
                        344,
                        345,
                        346,
                        347,
                        348,
                        349,
                        350,
                        351,
                        352,
                        353,
                        354,
                        355,
                        356,
                        357,
                        358,
                        359,
                        360,
                        361,
                        362,
                        363,
                        364,
                        365,
                        366,
                        367,
                        368,
                        369,
                        370,
                        371,
                        372,
                        373,
                        374,
                        375,
                        376,
                        377,
                        378,
                        379,
                        380,
                        381,
                        382,
                        383,
                        384,
                        385,
                        null,
                        387,
                        null,
                        389,
                        390,
                        null,
                        392,
                        null,
                        394,
                        395,
                        396,
                        397,
                        398,
                        399,
                        400,
                        401,
                        402,
                        403,
                        404,
                        405,
                        406,
                        407,
                        408,
                        409,
                        410,
                        411,
                        412,
                        413,
                        414,
                        415,
                        416,
                        417,
                        418,
                        419,
                        420,
                        421,
                        422,
                        423,
                        424,
                        425,
                        426,
                        427,
                        428,
                        396,
                        429,
                        430,
                        431,
                        432,
                        433,
                        434,
                        435,
                        436,
                        437,
                        438
                    ],
                    [
                        null,
                        [
                            0,
                            22.5,
                            22.5
                        ],
                        [
                            0,
                            -12.5,
                            10
                        ],
                        [
                            0,
                            -12.5,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            61.47114317029974,
                            0
                        ],
                        [
                            0,
                            -16.47114317029974,
                            -3.552713678800501e-15
                        ],
                        [
                            0,
                            -23.680339887498945,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            -1.3196601125010528,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            12.5,
                            0
                        ],
                        [
                            0,
                            -37.5,
                            3.061616997868383e-15
                        ],
                        [
                            0,
                            13.5,
                            0
                        ],
                        [
                            0,
                            -38.5,
                            3.184081677783118e-15
                        ],
                        [
                            0,
                            -1.98557158514987,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            6.090169943749474,
                            -8.881784197001252e-16
                        ],
                        [
                            -4.904734474995108,
                            11.644372063974135,
                            -1.7763568394002505e-15
                        ],
                        [
                            4.904734474995108,
                            11.644372063974135,
                            -1.7763568394002505e-15
                        ],
                        [
                            -4.9047344749951085,
                            11.644372063974139,
                            -1.7763568394002505e-15
                        ],
                        [
                            -7.345849660634137,
                            10.49923025195843,
                            -1.7763568394002505e-15
                        ],
                        [
                            -9.532440894890101,
                            8.92150660902882,
                            -1.7763568394002505e-15
                        ],
                        [
                            -11.388745690547275,
                            6.965867167617322,
                            -1.7763568394002505e-15
                        ],
                        [
                            -12.850445547583266,
                            4.700072241520733,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.866894503919307,
                            2.2026286208663066,
                            -1.7763568394002505e-15
                        ],
                        [
                            -14.40287395085825,
                            -0.43993058407936747,
                            -1.7763568394002505e-15
                        ],
                        [
                            -14.439812911182035,
                            -3.1360442004528126,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.97643149889027,
                            -5.7922954660386905,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.028785265553253,
                            -8.316648796225703,
                            -1.7763568394002505e-15
                        ],
                        [
                            -11.629708896737014,
                            -10.6216386949897,
                            -1.7763568394002505e-15
                        ],
                        [
                            -9.827678533681695,
                            -12.62740031836642,
                            -1.7763568394002505e-15
                        ],
                        [
                            -7.685132139278778,
                            -14.264436685407537,
                            -1.7763568394002505e-15
                        ],
                        [
                            -5.276306105439114,
                            -15.47602665642924,
                            -1.7763568394002505e-15
                        ],
                        [
                            -2.6846630605381305,
                            -16.22019024529962,
                            -1.7763568394002505e-15
                        ],
                        [
                            3.552713678800501e-15,
                            -16.471143170299744,
                            -1.7763568394002505e-15
                        ],
                        [
                            2.6846630605381323,
                            -16.22019024529962,
                            -1.7763568394002505e-15
                        ],
                        [
                            5.276306105439113,
                            -15.476026656429243,
                            -1.7763568394002505e-15
                        ],
                        [
                            7.685132139278779,
                            -14.264436685407539,
                            -1.7763568394002505e-15
                        ],
                        [
                            9.827678533681699,
                            -12.627400318366423,
                            -1.7763568394002505e-15
                        ],
                        [
                            11.629708896737014,
                            -10.621638694989706,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.028785265553248,
                            -8.316648796225717,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.976431498890268,
                            -5.792295466038703,
                            -1.7763568394002505e-15
                        ],
                        [
                            14.439812911182035,
                            -3.136044200452803,
                            -1.7763568394002505e-15
                        ],
                        [
                            14.402873950858249,
                            -0.43993058407936303,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.866894503919308,
                            2.202628620866295,
                            -1.7763568394002505e-15
                        ],
                        [
                            12.850445547583261,
                            4.700072241520739,
                            -1.7763568394002505e-15
                        ],
                        [
                            11.388745690547271,
                            6.965867167617326,
                            -1.7763568394002505e-15
                        ],
                        [
                            9.532440894890097,
                            8.921506609028818,
                            -1.7763568394002505e-15
                        ],
                        [
                            7.34584966063414,
                            10.499230251958425,
                            -1.7763568394002505e-15
                        ],
                        [
                            4.904734474995102,
                            11.644372063974139,
                            -1.7763568394002505e-15
                        ],
                        [
                            -4.9047344749951085,
                            11.644372063974137,
                            -1.7763568394002505e-15
                        ],
                        [
                            -5.654253381075659,
                            10.879219971167036,
                            -1.7670777232270062e-15
                        ],
                        [
                            -6.285628290787386,
                            10.014002056947863,
                            -1.7394342591679785e-15
                        ],
                        [
                            -6.785666807183593,
                            9.066796800512094,
                            -1.6940040494453e-15
                        ],
                        [
                            -7.143920769440232,
                            8.057395782964218,
                            -1.6317363452104092e-15
                        ],
                        [
                            -7.35290456416799,
                            7.006890147929137,
                            -1.5539322122145586e-15
                        ],
                        [
                            -7.408251535148719,
                            5.937229908178903,
                            -1.4622173454145586e-15
                        ],
                        [
                            -7.308805223359823,
                            4.870765306435905,
                            -1.3585081005447404e-15
                        ],
                        [
                            -7.056643530852563,
                            3.8297798134864838,
                            -1.2449714524156636e-15
                        ],
                        [
                            -6.657035303586982,
                            2.836024521474949,
                            -1.1239797165993867e-15
                        ],
                        [
                            -6.118330240412627,
                            1.9102636610959944,
                            -9.980609805786495e-16
                        ],
                        [
                            0,
                            0,
                            3
                        ],
                        [
                            0,
                            63.05551750378732,
                            3
                        ],
                        [
                            0,
                            -18.05551750378732,
                            3.0000000000000036
                        ],
                        [
                            0,
                            -25.7664991614216,
                            2.9999999999999982
                        ],
                        [
                            0,
                            0.7664991614215992,
                            2.9999999999999982
                        ],
                        [
                            0,
                            12.319347291981714,
                            3
                        ],
                        [
                            0,
                            -37.319347291981714,
                            3.0000000000000013
                        ],
                        [
                            0,
                            13.326343140289918,
                            3
                        ],
                        [
                            0,
                            -38.326343140289914,
                            3.0000000000000067
                        ],
                        [
                            0,
                            -2.8680851059028036,
                            3.0000000000000018
                        ],
                        [
                            0,
                            7.046421150855759,
                            2.999999999999999
                        ],
                        [
                            -4.180514237983153,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            4.180514237983153,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            -4.180514237983154,
                            11.732647873859976,
                            3.0000000000000018
                        ],
                        [
                            -6.8742575664086605,
                            10.67453966741886,
                            3.0000000000000018
                        ],
                        [
                            -9.318377219397142,
                            9.124660569601732,
                            3.0000000000000018
                        ],
                        [
                            -11.424120320715359,
                            7.139291060612109,
                            3.0000000000000018
                        ],
                        [
                            -13.115021400834532,
                            4.7905255054264115,
                            3.0000000000000018
                        ],
                        [
                            -14.329679073737017,
                            2.163654204118699,
                            3.0000000000000018
                        ],
                        [
                            -15.02398569437481,
                            -0.6459337394263147,
                            3.0000000000000018
                        ],
                        [
                            -15.172729031630649,
                            -3.5362142648419663,
                            3.0000000000000018
                        ],
                        [
                            -14.770507795520286,
                            -6.402233136586676,
                            3.0000000000000018
                        ],
                        [
                            -13.831927773261725,
                            -9.13991712817374,
                            3.0000000000000018
                        ],
                        [
                            -12.391071451957695,
                            -11.649853214478167,
                            3.0000000000000018
                        ],
                        [
                            -10.500260387387264,
                            -13.840898538991791,
                            3.0000000000000018
                        ],
                        [
                            -8.228155260785531,
                            -15.633490067936703,
                            3.0000000000000018
                        ],
                        [
                            -5.657262615906833,
                            -16.962533748363963,
                            3.0000000000000018
                        ],
                        [
                            -2.8809388137791303,
                            -17.779768256760498,
                            3.0000000000000018
                        ],
                        [
                            -4.440892098500626e-15,
                            -18.05551750378732,
                            3.0000000000000018
                        ],
                        [
                            2.880938813779128,
                            -17.779768256760498,
                            3.0000000000000018
                        ],
                        [
                            5.657262615906831,
                            -16.962533748363967,
                            3.0000000000000018
                        ],
                        [
                            8.228155260785522,
                            -15.633490067936712,
                            3.0000000000000018
                        ],
                        [
                            10.500260387387257,
                            -13.8408985389918,
                            3.0000000000000018
                        ],
                        [
                            12.39107145195769,
                            -11.649853214478176,
                            3.0000000000000018
                        ],
                        [
                            13.831927773261718,
                            -9.13991712817376,
                            3.0000000000000018
                        ],
                        [
                            14.770507795520286,
                            -6.402233136586681,
                            3.0000000000000018
                        ],
                        [
                            15.172729031630649,
                            -3.536214264841969,
                            3.0000000000000018
                        ],
                        [
                            15.023985694374812,
                            -0.6459337394263311,
                            3.0000000000000018
                        ],
                        [
                            14.329679073737017,
                            2.163654204118698,
                            3.0000000000000018
                        ],
                        [
                            13.115021400834529,
                            4.790525505426415,
                            3.0000000000000018
                        ],
                        [
                            11.424120320715362,
                            7.139291060612106,
                            3.0000000000000018
                        ],
                        [
                            9.318377219397144,
                            9.12466056960173,
                            3.0000000000000018
                        ],
                        [
                            6.87425756640867,
                            10.674539667418852,
                            3.0000000000000018
                        ],
                        [
                            4.180514237983161,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            -4.816529384868654,
                            11.0761190152217,
                            3.0000000000000018
                        ],
                        [
                            -5.350498581574945,
                            10.334214502321627,
                            3.0000000000000018
                        ],
                        [
                            -5.771108828701352,
                            9.522652779896944,
                            3.0000000000000013
                        ],
                        [
                            -6.069448819185585,
                            8.658628093113908,
                            3.0000000000000013
                        ],
                        [
                            -6.239197738729058,
                            7.760446199727897,
                            3.000000000000001
                        ],
                        [
                            -6.276759182451296,
                            6.847136533055001,
                            3.000000000000001
                        ],
                        [
                            -6.181337350532871,
                            5.938049032708644,
                            3.0000000000000004
                        ],
                        [
                            -5.954953908519217,
                            5.052444184892921,
                            3
                        ],
                        [
                            -5.602405155072541,
                            4.209084957910821,
                            3
                        ],
                        [
                            -5.13116040464216,
                            3.4258392783922775,
                            2.9999999999999996
                        ],
                        [
                            0,
                            0,
                            6
                        ],
                        [
                            0,
                            64.3658572108586,
                            6
                        ],
                        [
                            0,
                            -19.365857210858593,
                            6.000000000000007
                        ],
                        [
                            0,
                            -26.95683229480096,
                            6.000000000000001
                        ],
                        [
                            0,
                            1.9568322948009609,
                            6.000000000000001
                        ],
                        [
                            0,
                            11.769322199023193,
                            6
                        ],
                        [
                            0,
                            -36.76932219902319,
                            6.0000000000000036
                        ],
                        [
                            0,
                            12.798221281347033,
                            6
                        ],
                        [
                            0,
                            -37.79822128134703,
                            6.0000000000000036
                        ],
                        [
                            0,
                            -3.7982675059177,
                            6.0000000000000036
                        ],
                        [
                            0,
                            7.377526788073997,
                            6
                        ],
                        [
                            -3.7228381389924676,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            3.7228381389924676,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            -6.557819694944979,
                            10.320686069683198,
                            6.0000000000000036
                        ],
                        [
                            -9.148428202664586,
                            8.79760922585738,
                            6.0000000000000036
                        ],
                        [
                            -11.398126256846059,
                            6.805154915846803,
                            6.0000000000000036
                        ],
                        [
                            -13.223080266955064,
                            4.41757070299594,
                            6.0000000000000036
                        ],
                        [
                            -14.555284463531528,
                            1.7238284192776785,
                            6.0000000000000036
                        ],
                        [
                            -15.345095090642817,
                            -1.1756913143626555,
                            6.0000000000000036
                        ],
                        [
                            -15.563080349390482,
                            -4.172939709046741,
                            6.0000000000000036
                        ],
                        [
                            -15.20111715548309,
                            -7.156226178483424,
                            6.0000000000000036
                        ],
                        [
                            -14.272693840890412,
                            -10.014380418791035,
                            6.0000000000000036
                        ],
                        [
                            -12.812407519591105,
                            -12.640895100321245,
                            6.0000000000000036
                        ],
                        [
                            -10.874674847764936,
                            -14.937894796665374,
                            6.0000000000000036
                        ],
                        [
                            -8.531704221144345,
                            -16.81978325118674,
                            6.0000000000000036
                        ],
                        [
                            -5.870804974322493,
                            -18.216433067973504,
                            6.0000000000000036
                        ],
                        [
                            -2.9911338530219975,
                            -19.075798965374343,
                            6.0000000000000036
                        ],
                        [
                            3.9968028886505635e-15,
                            -19.365857210858593,
                            6.0000000000000036
                        ],
                        [
                            2.9911338530219997,
                            -19.07579896537434,
                            6.0000000000000036
                        ],
                        [
                            5.870804974322496,
                            -18.216433067973504,
                            6.0000000000000036
                        ],
                        [
                            8.531704221144352,
                            -16.81978325118673,
                            6.0000000000000036
                        ],
                        [
                            10.874674847764929,
                            -14.937894796665383,
                            6.0000000000000036
                        ],
                        [
                            12.812407519591101,
                            -12.640895100321249,
                            6.0000000000000036
                        ],
                        [
                            14.272693840890412,
                            -10.014380418791031,
                            6.0000000000000036
                        ],
                        [
                            15.20111715548309,
                            -7.156226178483431,
                            6.0000000000000036
                        ],
                        [
                            15.563080349390482,
                            -4.172939709046732,
                            6.0000000000000036
                        ],
                        [
                            15.345095090642817,
                            -1.1756913143626404,
                            6.0000000000000036
                        ],
                        [
                            14.555284463531523,
                            1.7238284192776945,
                            6.0000000000000036
                        ],
                        [
                            13.223080266955058,
                            4.4175707029959455,
                            6.0000000000000036
                        ],
                        [
                            11.39812625684605,
                            6.805154915846812,
                            6.0000000000000036
                        ],
                        [
                            9.148428202664583,
                            8.797609225857382,
                            6.0000000000000036
                        ],
                        [
                            6.557819694944974,
                            10.320686069683202,
                            6.0000000000000036
                        ],
                        [
                            3.722838138992458,
                            11.317628941605513,
                            6.0000000000000036
                        ],
                        [
                            -3.7228381389924685,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            -4.274542799549424,
                            10.711025347278838,
                            6.0000000000000036
                        ],
                        [
                            -4.728439860130299,
                            10.028146579468368,
                            6.0000000000000036
                        ],
                        [
                            -5.074143512424484,
                            9.284617872611152,
                            6.0000000000000036
                        ],
                        [
                            -5.30374356670656,
                            8.497452217743021,
                            6.000000000000003
                        ],
                        [
                            -5.411986448192794,
                            7.6846610811415825,
                            6.000000000000003
                        ],
                        [
                            -5.396395406281043,
                            6.864842276439953,
                            6.000000000000002
                        ],
                        [
                            -5.257327186116231,
                            6.056754420281664,
                            6.000000000000002
                        ],
                        [
                            -4.9979638657556205,
                            5.27888770857469,
                            6.000000000000001
                        ],
                        [
                            -4.624240045711099,
                            4.549040834592458,
                            6.000000000000001
                        ],
                        [
                            -4.144707056875017,
                            3.883913729635642,
                            6
                        ],
                        [
                            0,
                            0,
                            9
                        ],
                        [
                            0,
                            65.42726406376255,
                            9
                        ],
                        [
                            0,
                            -20.427264063762557,
                            9.000000000000004
                        ],
                        [
                            0,
                            -27.466629547095764,
                            9.000000000000002
                        ],
                        [
                            0,
                            2.4666295470957653,
                            9.000000000000002
                        ],
                        [
                            0,
                            10.823807579381203,
                            9
                        ],
                        [
                            0,
                            -35.823807579381196,
                            9.000000000000007
                        ],
                        [
                            0,
                            11.892621835300936,
                            9
                        ],
                        [
                            0,
                            -36.892621835300936,
                            9.000000000000002
                        ],
                        [
                            0,
                            -4.801728242190677,
                            9.000000000000002
                        ],
                        [
                            0,
                            7.179625691198351,
                            9
                        ],
                        [
                            -3.392655733594062,
                            10.451050415632208,
                            9.000000000000002
                        ],
                        [
                            3.392655733594062,
                            10.451050415632208,
                            9.000000000000002
                        ],
                        [
                            -3.392655733594063,
                            10.451050415632213,
                            9.000000000000002
                        ],
                        [
                            -6.281667070533208,
                            9.50554363354457,
                            9.000000000000002
                        ],
                        [
                            -8.932942698824704,
                            8.018564439754636,
                            9.000000000000002
                        ],
                        [
                            -11.246142552171685,
                            6.046388986502025,
                            9.000000000000002
                        ],
                        [
                            -13.133721365884979,
                            3.6636561433243973,
                            9.000000000000002
                        ],
                        [
                            -14.524241911300969,
                            0.9605427175294956,
                            9.000000000000002
                        ],
                        [
                            -15.365078606143204,
                            -1.9606493734743515,
                            9.000000000000002
                        ],
                        [
                            -15.624409180103385,
                            -4.989364816256341,
                            9.000000000000002
                        ],
                        [
                            -15.292419019149571,
                            -8.010978973121262,
                            9.000000000000002
                        ],
                        [
                            -14.381672608997446,
                            -10.911135961343046,
                            9.000000000000002
                        ],
                        [
                            -12.926638020110586,
                            -13.580076561109076,
                            9.000000000000002
                        ],
                        [
                            -10.98238243055044,
                            -15.916792158352518,
                            9.000000000000002
                        ],
                        [
                            -8.62248805586366,
                            -17.832847512526385,
                            9.000000000000002
                        ],
                        [
                            -5.936267359636783,
                            -19.255727673010405,
                            9.000000000000002
                        ],
                        [
                            -3.0253829377429966,
                            -20.131582376892666,
                            9.000000000000002
                        ],
                        [
                            -2.220446049250313e-15,
                            -20.42726406376256,
                            9.000000000000002
                        ],
                        [
                            3.0253829377429846,
                            -20.131582376892666,
                            9.000000000000002
                        ],
                        [
                            5.936267359636773,
                            -19.25572767301041,
                            9.000000000000002
                        ],
                        [
                            8.622488055863652,
                            -17.832847512526392,
                            9.000000000000002
                        ],
                        [
                            10.982382430550432,
                            -15.916792158352534,
                            9.000000000000002
                        ],
                        [
                            12.926638020110577,
                            -13.580076561109093,
                            9.000000000000002
                        ],
                        [
                            14.381672608997441,
                            -10.91113596134306,
                            9.000000000000002
                        ],
                        [
                            15.29241901914957,
                            -8.010978973121272,
                            9.000000000000002
                        ],
                        [
                            15.624409180103385,
                            -4.98936481625635,
                            9.000000000000002
                        ],
                        [
                            15.365078606143204,
                            -1.9606493734743533,
                            9.000000000000002
                        ],
                        [
                            14.52424191130097,
                            0.9605427175294832,
                            9.000000000000002
                        ],
                        [
                            13.133721365884984,
                            3.66365614332439,
                            9.000000000000002
                        ],
                        [
                            11.246142552171696,
                            6.046388986502013,
                            9.000000000000002
                        ],
                        [
                            8.932942698824714,
                            8.018564439754625,
                            9.000000000000002
                        ],
                        [
                            6.281667070533217,
                            9.505543633544569,
                            9.000000000000002
                        ],
                        [
                            3.392655733594068,
                            10.451050415632213,
                            9.000000000000002
                        ],
                        [
                            -3.87244847269155,
                            9.865975534512636,
                            9.000000000000002
                        ],
                        [
                            -4.252430453725259,
                            9.21166109703059,
                            9.000000000000002
                        ],
                        [
                            -4.522807798262718,
                            8.504971787242601,
                            9.000000000000002
                        ],
                        [
                            -4.676611642053866,
                            7.764122229881042,
                            9.000000000000002
                        ],
                        [
                            -4.709877754625351,
                            7.008207515933673,
                            9.000000000000002
                        ],
                        [
                            -4.621748715681717,
                            6.256711034569575,
                            9.000000000000002
                        ],
                        [
                            -4.414496014758958,
                            5.529002296839998,
                            9
                        ],
                        [
                            -4.093461504521027,
                            4.843837694540636,
                            9
                        ],
                        [
                            -3.666919716716364,
                            4.218877061969151,
                            9
                        ],
                        [
                            -3.1458645895437307,
                            3.6702285009987774,
                            9
                        ],
                        [
                            0,
                            0,
                            12
                        ],
                        [
                            0,
                            66.25785643744447,
                            12
                        ],
                        [
                            0,
                            -21.257856437444467,
                            11.999999999999996
                        ],
                        [
                            0,
                            -27.366068747318508,
                            11.999999999999998
                        ],
                        [
                            0,
                            2.366068747318506,
                            11.999999999999998
                        ],
                        [
                            0,
                            9.431712199461309,
                            12
                        ],
                        [
                            0,
                            -34.43171219946131,
                            12.000000000000002
                        ],
                        [
                            0,
                            10.56512518934159,
                            12
                        ],
                        [
                            0,
                            -35.565125189341586,
                            12.000000000000005
                        ],
                        [
                            0,
                            -5.913072118991579,
                            11.999999999999998
                        ],
                        [
                            0,
                            6.465596968330048,
                            12
                        ],
                        [
                            -3.13409723515881,
                            9.108240749742881,
                            11.999999999999998
                        ],
                        [
                            3.13409723515881,
                            9.108240749742881,
                            11.999999999999998
                        ],
                        [
                            -3.134097235158811,
                            9.108240749742887,
                            11.999999999999998
                        ],
                        [
                            -5.995592414416443,
                            8.211915575871373,
                            11.999999999999998
                        ],
                        [
                            -8.628135164307048,
                            6.7762024609947,
                            11.999999999999998
                        ],
                        [
                            -10.931197127274041,
                            4.8559266805493255,
                            11.999999999999998
                        ],
                        [
                            -12.816831759430249,
                            2.5244174027973365,
                            11.999999999999998
                        ],
                        [
                            -14.213032726773935,
                            -0.12929251673400355,
                            11.999999999999998
                        ],
                        [
                            -15.066483595954937,
                            -3.00386641422293,
                            11.999999999999998
                        ],
                        [
                            -15.344593817726691,
                            -5.989533539469237,
                            11.999999999999998
                        ],
                        [
                            -15.036743255411238,
                            -8.972280848497023,
                            11.999999999999998
                        ],
                        [
                            -14.15468773382993,
                            -11.838206795739627,
                            11.999999999999998
                        ],
                        [
                            -12.732110122087922,
                            -14.477870868458137,
                            11.999999999999998
                        ],
                        [
                            -10.823334092919925,
                            -16.790472768635542,
                            11.999999999999998
                        ],
                        [
                            -8.501249675999194,
                            -18.687701652804343,
                            11.999999999999998
                        ],
                        [
                            -5.854529821670214,
                            -20.097108439694225,
                            11.999999999999998
                        ],
                        [
                            -2.9842442656017223,
                            -20.96487240809524,
                            11.999999999999998
                        ],
                        [
                            1.7763568394002505e-15,
                            -21.25785643744447,
                            11.999999999999998
                        ],
                        [
                            2.9842442656017116,
                            -20.96487240809524,
                            11.999999999999998
                        ],
                        [
                            5.854529821670203,
                            -20.09710843969423,
                            11.999999999999998
                        ],
                        [
                            8.501249675999185,
                            -18.68770165280435,
                            11.999999999999998
                        ],
                        [
                            10.823334092919918,
                            -16.790472768635553,
                            11.999999999999998
                        ],
                        [
                            12.732110122087915,
                            -14.477870868458155,
                            11.999999999999998
                        ],
                        [
                            14.154687733829924,
                            -11.838206795739643,
                            11.999999999999998
                        ],
                        [
                            15.036743255411235,
                            -8.972280848497041,
                            11.999999999999998
                        ],
                        [
                            15.344593817726691,
                            -5.9895335394692335,
                            11.999999999999998
                        ],
                        [
                            15.066483595954937,
                            -3.003866414222939,
                            11.999999999999998
                        ],
                        [
                            14.213032726773935,
                            -0.12929251673401154,
                            11.999999999999998
                        ],
                        [
                            12.816831759430254,
                            2.524417402797331,
                            11.999999999999998
                        ],
                        [
                            10.931197127274045,
                            4.85592668054932,
                            11.999999999999998
                        ],
                        [
                            8.628135164307048,
                            6.776202460994696,
                            11.999999999999998
                        ],
                        [
                            5.995592414416453,
                            8.211915575871364,
                            11.999999999999998
                        ],
                        [
                            3.1340972351588077,
                            9.108240749742887,
                            11.999999999999998
                        ],
                        [
                            -3.5443866787778715,
                            8.52556170253595,
                            11.999999999999998
                        ],
                        [
                            -3.847570872682512,
                            7.880634075460158,
                            11.999999999999998
                        ],
                        [
                            -4.034488113666914,
                            7.192946468605129,
                            11.999999999999998
                        ],
                        [
                            -4.099490085227846,
                            6.483279614868525,
                            11.999999999999998
                        ],
                        [
                            -4.040612539943423,
                            5.773078422064334,
                            11.999999999999998
                        ],
                        [
                            -3.859634655640945,
                            5.083803944811175,
                            11.999999999999998
                        ],
                        [
                            -3.5620252717128684,
                            4.436284868492054,
                            12
                        ],
                        [
                            -3.156777630226665,
                            3.8500881023212656,
                            12
                        ],
                        [
                            -2.656137615667076,
                            3.3429275011099833,
                            12
                        ],
                        [
                            -2.075233705436831,
                            2.9301285831384978,
                            12
                        ],
                        [
                            0,
                            0,
                            15
                        ],
                        [
                            0,
                            66.87059837324712,
                            15
                        ],
                        [
                            0,
                            -21.87059837324712,
                            15.000000000000007
                        ],
                        [
                            0,
                            -26.64213562373095,
                            15
                        ],
                        [
                            0,
                            1.642135623730951,
                            15
                        ],
                        [
                            0,
                            7.5,
                            15
                        ],
                        [
                            0,
                            -32.5,
                            15
                        ],
                        [
                            0,
                            8.736760581595302,
                            14.999999999999998
                        ],
                        [
                            0,
                            -33.736760581595306,
                            14.999999999999998
                        ],
                        [
                            0,
                            -7.18529918662356,
                            15.000000000000004
                        ],
                        [
                            0,
                            5.1894481026631265,
                            15
                        ],
                        [
                            -2.917498443291182,
                            7.207275810021069,
                            15.000000000000004
                        ],
                        [
                            2.917498443291182,
                            7.207275810021069,
                            15.000000000000004
                        ],
                        [
                            -2.917498443291182,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -5.665995899387532,
                            6.362929578376326,
                            15.000000000000004
                        ],
                        [
                            -8.197289795438088,
                            4.999217718459434,
                            15.000000000000004
                        ],
                        [
                            -10.414344048906361,
                            3.168417548523065,
                            15.000000000000004
                        ],
                        [
                            -12.232168821250458,
                            0.9407120199325139,
                            15.000000000000004
                        ],
                        [
                            -13.581078567492263,
                            -1.5985007166365737,
                            15.000000000000004
                        ],
                        [
                            -14.409363402155892,
                            -4.351881013240559,
                            15.000000000000004
                        ],
                        [
                            -14.68527137589024,
                            -7.2138791989651025,
                            15.000000000000004
                        ],
                        [
                            -14.398225673038493,
                            -10.074781781985909,
                            15.000000000000004
                        ],
                        [
                            -13.559230069399703,
                            -12.824917269945654,
                            15.000000000000004
                        ],
                        [
                            -12.200447107130465,
                            -15.358860380299086,
                            15.000000000000004
                        ],
                        [
                            -10.37396515727361,
                            -17.579473473998185,
                            15.000000000000004
                        ],
                        [
                            -8.149801634051254,
                            -19.401630285863714,
                            15.000000000000004
                        ],
                        [
                            -5.61321890685908,
                            -20.755479204011923,
                            15.000000000000004
                        ],
                        [
                            -2.8614558033418933,
                            -21.589121001897716,
                            15.000000000000004
                        ],
                        [
                            -2.6645352591003757e-15,
                            -21.87059837324712,
                            15.000000000000004
                        ],
                        [
                            2.861455803341895,
                            -21.589121001897716,
                            15.000000000000004
                        ],
                        [
                            5.613218906859082,
                            -20.75547920401192,
                            15.000000000000004
                        ],
                        [
                            8.149801634051261,
                            -19.40163028586371,
                            15.000000000000004
                        ],
                        [
                            10.37396515727361,
                            -17.579473473998185,
                            15.000000000000004
                        ],
                        [
                            12.200447107130469,
                            -15.358860380299085,
                            15.000000000000004
                        ],
                        [
                            13.559230069399703,
                            -12.824917269945656,
                            15.000000000000004
                        ],
                        [
                            14.398225673038493,
                            -10.07478178198591,
                            15.000000000000004
                        ],
                        [
                            14.68527137589024,
                            -7.213879198965102,
                            15.000000000000004
                        ],
                        [
                            14.409363402155885,
                            -4.351881013240542,
                            15.000000000000004
                        ],
                        [
                            13.581078567492263,
                            -1.5985007166365701,
                            15.000000000000004
                        ],
                        [
                            12.232168821250454,
                            0.9407120199325156,
                            15.000000000000004
                        ],
                        [
                            10.414344048906365,
                            3.1684175485230597,
                            15.000000000000004
                        ],
                        [
                            8.197289795438083,
                            4.999217718459436,
                            15.000000000000004
                        ],
                        [
                            5.665995899387527,
                            6.362929578376329,
                            15.000000000000004
                        ],
                        [
                            2.917498443291187,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -2.917498443291183,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -3.2505592956558247,
                            6.609761479567462,
                            15.000000000000004
                        ],
                        [
                            -3.462738228307521,
                            5.959428482546651,
                            15.000000000000004
                        ],
                        [
                            -3.546144723225002,
                            5.280461426585269,
                            15.000000000000004
                        ],
                        [
                            -3.497677056580117,
                            4.598109763756428,
                            15.000000000000002
                        ],
                        [
                            -3.319137645758658,
                            3.9377488130190224,
                            15.000000000000002
                        ],
                        [
                            -3.0171660209957336,
                            3.32393610191463,
                            15.000000000000002
                        ],
                        [
                            -2.6029919142789923,
                            2.7794981203219846,
                            15
                        ],
                        [
                            -2.0920176476587424,
                            2.324681448104284,
                            15
                        ],
                        [
                            -1.5032453511239747,
                            1.9763998245459051,
                            15
                        ],
                        [
                            -0.8585703106871732,
                            1.7476051595882374,
                            14.999999999999998
                        ],
                        [
                            0,
                            0,
                            18
                        ],
                        [
                            0,
                            67.2744346697979,
                            18
                        ],
                        [
                            0,
                            -22.2744346697979,
                            18.000000000000007
                        ],
                        [
                            0,
                            -25.188577540449522,
                            18
                        ],
                        [
                            0,
                            0.18857754044952024,
                            18
                        ],
                        [
                            0,
                            4.849351572897472,
                            18
                        ],
                        [
                            0,
                            -29.849351572897472,
                            18
                        ],
                        [
                            0,
                            6.261663039293719,
                            18
                        ],
                        [
                            0,
                            -31.26166303929372,
                            18
                        ],
                        [
                            0,
                            -8.712541548450213,
                            18.000000000000004
                        ],
                        [
                            0,
                            3.2251202898716196,
                            18
                        ],
                        [
                            -2.720672623783253,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            2.720672623783253,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -2.7206726237832535,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -5.255708798773098,
                            3.7895570776747878,
                            18.000000000000004
                        ],
                        [
                            -7.589540347268448,
                            2.5268455501438165,
                            18.000000000000004
                        ],
                        [
                            -9.632821051091147,
                            0.8338558679845782,
                            18.000000000000004
                        ],
                        [
                            -11.307327868102323,
                            -1.2245991396109055,
                            18.000000000000004
                        ],
                        [
                            -12.548955549784806,
                            -3.56971551168961,
                            18.000000000000004
                        ],
                        [
                            -13.310170786455142,
                            -6.111715012470981,
                            18.000000000000004
                        ],
                        [
                            -13.561831927911571,
                            -8.753282117125465,
                            18.000000000000004
                        ],
                        [
                            -13.294304615039342,
                            -11.393289548058029,
                            18.000000000000004
                        ],
                        [
                            -12.517830612579322,
                            -13.930669736759663,
                            18.000000000000004
                        ],
                        [
                            -11.262135723012067,
                            -16.268283999812166,
                            18.000000000000004
                        ],
                        [
                            -9.575291791814522,
                            -18.316641305140955,
                            18.000000000000004
                        ],
                        [
                            -7.521876370012779,
                            -19.99732426275628,
                            18.000000000000004
                        ],
                        [
                            -5.180500487783807,
                            -21.245991182566485,
                            18.000000000000004
                        ],
                        [
                            -2.640799183502833,
                            -22.01483927129751,
                            18.000000000000004
                        ],
                        [
                            -1.3322676295501878e-15,
                            -22.274434669797895,
                            18.000000000000004
                        ],
                        [
                            2.6407991835028297,
                            -22.01483927129751,
                            18.000000000000004
                        ],
                        [
                            5.180500487783809,
                            -21.245991182566488,
                            18.000000000000004
                        ],
                        [
                            7.521876370012779,
                            -19.99732426275628,
                            18.000000000000004
                        ],
                        [
                            9.575291791814514,
                            -18.316641305140955,
                            18.000000000000004
                        ],
                        [
                            11.262135723012069,
                            -16.268283999812162,
                            18.000000000000004
                        ],
                        [
                            12.51783061257932,
                            -13.93066973675967,
                            18.000000000000004
                        ],
                        [
                            13.294304615039342,
                            -11.393289548058034,
                            18.000000000000004
                        ],
                        [
                            13.561831927911571,
                            -8.753282117125453,
                            18.000000000000004
                        ],
                        [
                            13.310170786455144,
                            -6.111715012470981,
                            18.000000000000004
                        ],
                        [
                            12.548955549784807,
                            -3.5697155116896084,
                            18.000000000000004
                        ],
                        [
                            11.307327868102321,
                            -1.224599139610902,
                            18.000000000000004
                        ],
                        [
                            9.632821051091137,
                            0.8338558679845907,
                            18.000000000000004
                        ],
                        [
                            7.5895403472684455,
                            2.52684555014382,
                            18.000000000000004
                        ],
                        [
                            5.2557087987730915,
                            3.7895570776747913,
                            18.000000000000004
                        ],
                        [
                            2.7206726237832553,
                            4.573649986713425,
                            18.000000000000004
                        ],
                        [
                            -2.720672623783254,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -2.9509150214883313,
                            3.941145711922007,
                            18.000000000000004
                        ],
                        [
                            -3.0361579888161345,
                            3.273458018571623,
                            18.000000000000004
                        ],
                        [
                            -2.9722129328671087,
                            2.6033951490212512,
                            18.000000000000004
                        ],
                        [
                            -2.762221928767284,
                            1.9638820549195333,
                            18.000000000000004
                        ],
                        [
                            -2.416503327183184,
                            1.3863425602967514,
                            18
                        ],
                        [
                            -1.9520447404098051,
                            0.8991552857268186,
                            18
                        ],
                        [
                            -1.3916683202290714,
                            0.5262592049806791,
                            18
                        ],
                        [
                            -0.7629093433708718,
                            0.28597735308454775,
                            18
                        ],
                        [
                            -0.09666320764407121,
                            0.19011648536727144,
                            18
                        ],
                        [
                            0.5743326785651286,
                            0.24338692764753977,
                            17.999999999999996
                        ],
                        [
                            0,
                            0,
                            21
                        ],
                        [
                            0,
                            67.47499305169485,
                            21
                        ],
                        [
                            0,
                            -22.474993051694852,
                            21
                        ],
                        [
                            0,
                            -22.698039027185573,
                            21
                        ],
                        [
                            0,
                            -2.3019609728144292,
                            21
                        ],
                        [
                            0,
                            1.0646599662505398,
                            21
                        ],
                        [
                            0,
                            -26.064659966250538,
                            20.999999999999996
                        ],
                        [
                            0,
                            2.8297097167558913,
                            21
                        ],
                        [
                            0,
                            -27.82970971675589,
                            21
                        ],
                        [
                            0,
                            -10.705166542722157,
                            21
                        ],
                        [
                            0,
                            0.26387437197073105,
                            21
                        ],
                        [
                            -2.510516866023987,
                            0.7937951980927682,
                            21
                        ],
                        [
                            2.510516866023987,
                            0.7937951980927682,
                            21
                        ],
                        [
                            -2.510516866023987,
                            0.79379519809277,
                            21
                        ],
                        [
                            -4.692230929378789,
                            0.08889594351060737,
                            21
                        ],
                        [
                            -6.695888694612602,
                            -1.0256060857243554,
                            21
                        ],
                        [
                            -8.445457270388996,
                            -2.5074188309814502,
                            21
                        ],
                        [
                            -9.874545699272124,
                            -4.30031187736848,
                            21
                        ],
                        [
                            -10.928924298374625,
                            -6.336250231814717,
                            21
                        ],
                        [
                            -11.56858251557326,
                            -8.537976050012993,
                            21
                        ],
                        [
                            -11.7692472117299,
                            -10.821940343312473,
                            21
                        ],
                        [
                            -11.523303754594131,
                            -13.101473415948774,
                            21
                        ],
                        [
                            -10.840084971595754,
                            -15.290073723887351,
                            21
                        ],
                        [
                            -9.745516996622547,
                            -17.304690352805533,
                            21
                        ],
                        [
                            -8.281135449851517,
                            -19.068874554873755,
                            21
                        ],
                        [
                            -6.502509283701906,
                            -20.51568075282791,
                            21
                        ],
                        [
                            -4.477132105298384,
                            -21.590206926800796,
                            21
                        ],
                        [
                            -2.2818609935258185,
                            -22.251677983739384,
                            21
                        ],
                        [
                            -4.440892098500626e-16,
                            -22.474993051694852,
                            21
                        ],
                        [
                            2.281860993525819,
                            -22.251677983739384,
                            21
                        ],
                        [
                            4.477132105298386,
                            -21.590206926800796,
                            21
                        ],
                        [
                            6.502509283701906,
                            -20.51568075282791,
                            21
                        ],
                        [
                            8.281135449851515,
                            -19.06887455487376,
                            21
                        ],
                        [
                            9.745516996622545,
                            -17.304690352805537,
                            21
                        ],
                        [
                            10.840084971595756,
                            -15.290073723887353,
                            21
                        ],
                        [
                            11.52330375459413,
                            -13.10147341594878,
                            21
                        ],
                        [
                            11.7692472117299,
                            -10.821940343312468,
                            21
                        ],
                        [
                            11.568582515573262,
                            -8.537976050012997,
                            21
                        ],
                        [
                            10.928924298374625,
                            -6.336250231814722,
                            21
                        ],
                        [
                            9.87454569927212,
                            -4.300311877368477,
                            21
                        ],
                        [
                            8.445457270388989,
                            -2.507418830981443,
                            21
                        ],
                        [
                            6.695888694612595,
                            -1.0256060857243519,
                            21
                        ],
                        [
                            4.692230929378784,
                            0.08889594351060737,
                            21
                        ],
                        [
                            2.5105168660239863,
                            0.79379519809277,
                            21
                        ],
                        [
                            -2.5604954343144373,
                            0.09842302745009568,
                            21
                        ],
                        [
                            -2.421440521961776,
                            -0.584734380724081,
                            21
                        ],
                        [
                            -2.1036181242613967,
                            -1.2052416220296496,
                            21
                        ],
                        [
                            -1.6304920885838086,
                            -1.7172885606560562,
                            21
                        ],
                        [
                            -1.0369918508922362,
                            -2.0830723504181385,
                            21
                        ],
                        [
                            -0.36693370321743857,
                            -2.275588302295599,
                            21
                        ],
                        [
                            0.33021402804141653,
                            -2.2806235573334814,
                            21
                        ],
                        [
                            1.0029830760808802,
                            -2.0978063781824514,
                            21
                        ],
                        [
                            1.601704977089023,
                            -1.7406335933207555,
                            21
                        ],
                        [
                            2.0821779397374702,
                            -1.2354741678356036,
                            21
                        ]
                    ]
                ],
                "objs": [
                    [
                        [
                            [
                                0
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                45,
                                0
                            ],
                            [
                                0,
                                0,
                                45
                            ],
                            [
                                2025,
                                0,
                                0
                            ],
                            [
                                180,
                                215
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                1
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                0,
                                15
                            ],
                            [
                                0,
                                15,
                                0
                            ],
                            [
                                -225,
                                0,
                                0
                            ],
                            [
                                0,
                                150
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                2
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                25,
                                0
                            ],
                            [
                                0,
                                0,
                                25
                            ],
                            [
                                625,
                                0,
                                0
                            ],
                            [
                                0,
                                90
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                2
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                26,
                                0
                            ],
                            [
                                0,
                                0,
                                26
                            ],
                            [
                                676,
                                0,
                                0
                            ],
                            [
                                0,
                                90
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                3
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                14.48557158514987,
                                0,
                                0
                            ],
                            [
                                0,
                                14.48557158514987,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                7.409830056250526,
                                0,
                                0
                            ],
                            [
                                0,
                                7.409830056250526,
                                0
                            ],
                            [
                                0,
                                0,
                                54.90558146251368
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.904734474995108,
                                13.629943649124005,
                                0
                            ],
                            [
                                -13.629943649124005,
                                4.9047344749951085,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                39.58252976502565
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.904734474995108,
                                13.629943649124005,
                                0
                            ],
                            [
                                -13.629943649124005,
                                -4.9047344749951085,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                320.41747023497436
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.904734474995108,
                                5.554202120224661,
                                -8.881784197001252e-16
                            ],
                            [
                                5.5542021202246605,
                                4.904734474995107,
                                -7.843213517900697e-16
                            ],
                            [
                                0,
                                -8.780010435435745e-15,
                                -54.90558146251365
                            ],
                            [
                                0,
                                82.89334337482593
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.904734474995108,
                                5.554202120224661,
                                -8.881784197001252e-16
                            ],
                            [
                                5.5542021202246605,
                                -4.904734474995107,
                                7.843213517900697e-16
                            ],
                            [
                                0,
                                -8.780010435435745e-15,
                                -54.90558146251365
                            ],
                            [
                                0,
                                277.1066566251741
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38,
                                39,
                                40,
                                41,
                                42,
                                43,
                                44,
                                45,
                                46
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                47,
                                48,
                                49,
                                50,
                                51,
                                52,
                                53,
                                54,
                                55,
                                56,
                                57
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                58
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.187432397884518,
                                0,
                                0
                            ],
                            [
                                0,
                                15.187432397884518,
                                0
                            ],
                            [
                                0,
                                0,
                                230.65810284031227
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                6.279921989434159,
                                0,
                                0
                            ],
                            [
                                0,
                                6.279921989434159,
                                0
                            ],
                            [
                                0,
                                0,
                                39.43742019337869
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.180514237983153,
                                14.600732979762775,
                                0
                            ],
                            [
                                -14.600732979762775,
                                4.180514237983153,
                                0
                            ],
                            [
                                0,
                                0,
                                230.6581028403122
                            ],
                            [
                                0,
                                31.955187613121435
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.180514237983153,
                                14.600732979762775,
                                0
                            ],
                            [
                                -14.600732979762775,
                                -4.180514237983153,
                                0
                            ],
                            [
                                0,
                                0,
                                230.6581028403122
                            ],
                            [
                                0,
                                328.04481238687856
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.180514237983153,
                                4.6862267230042125,
                                2.6645352591003757e-15
                            ],
                            [
                                4.6862267230042125,
                                4.180514237983153,
                                2.376992887176457e-15
                            ],
                            [
                                0,
                                2.2423668944008994e-14,
                                -39.43742019337866
                            ],
                            [
                                0,
                                83.4713703886842
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.180514237983153,
                                4.6862267230042125,
                                2.6645352591003757e-15
                            ],
                            [
                                4.6862267230042125,
                                -4.180514237983153,
                                -2.376992887176457e-15
                            ],
                            [
                                0,
                                2.2423668944008994e-14,
                                -39.43742019337866
                            ],
                            [
                                0,
                                276.5286296113158
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                71,
                                72,
                                73,
                                74,
                                75,
                                76,
                                77,
                                78,
                                79,
                                80,
                                81,
                                82,
                                83,
                                84,
                                85,
                                86,
                                87,
                                88,
                                89,
                                90,
                                91,
                                92,
                                93,
                                94,
                                95,
                                96,
                                97,
                                98,
                                99,
                                100,
                                101
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                102,
                                103,
                                104,
                                105,
                                106,
                                107,
                                108,
                                109,
                                110,
                                111,
                                112
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                113
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.567589704940893,
                                0,
                                0
                            ],
                            [
                                0,
                                15.567589704940893,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                5.420694493273036,
                                0,
                                0
                            ],
                            [
                                0,
                                5.420694493273036,
                                0
                            ],
                            [
                                0,
                                0,
                                29.383928789400617
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.7228381389924676,
                                15.115896447523209,
                                0
                            ],
                            [
                                -15.115896447523209,
                                3.7228381389924676,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                27.671611983447548
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.7228381389924676,
                                15.115896447523209,
                                0
                            ],
                            [
                                -15.115896447523209,
                                -3.7228381389924676,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                332.3283880165525
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.7228381389924676,
                                3.9401021535315124,
                                3.552713678800501e-15
                            ],
                            [
                                3.940102153531513,
                                3.7228381389924676,
                                3.356810931539965e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                2.6494918578046532e-14,
                                -29.383928789400564
                            ],
                            [
                                0,
                                86.75190550714683
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.7228381389924676,
                                3.9401021535315124,
                                3.552713678800501e-15
                            ],
                            [
                                3.940102153531513,
                                -3.7228381389924676,
                                -3.356810931539965e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                2.6494918578046532e-14,
                                -29.383928789400564
                            ],
                            [
                                0,
                                273.24809449285317
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                126,
                                127,
                                128,
                                129,
                                130,
                                131,
                                132,
                                133,
                                134,
                                135,
                                136,
                                137,
                                138,
                                139,
                                140,
                                141,
                                142,
                                143,
                                144,
                                145,
                                146,
                                147,
                                148,
                                149,
                                150,
                                151,
                                152,
                                153,
                                154,
                                155,
                                156
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                157,
                                158,
                                159,
                                160,
                                161,
                                162,
                                163,
                                164,
                                165,
                                166,
                                167
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                168
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.62553582157188,
                                0,
                                0
                            ],
                            [
                                0,
                                15.62553582157188,
                                0
                            ],
                            [
                                0,
                                0,
                                244.157369711226
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.712996144102585,
                                0,
                                0
                            ],
                            [
                                0,
                                4.712996144102585,
                                0
                            ],
                            [
                                0,
                                0,
                                22.212332654325838
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.392655733594062,
                                15.252778657822885,
                                0
                            ],
                            [
                                -15.252778657822883,
                                3.3926557335940615,
                                0
                            ],
                            [
                                0,
                                0,
                                244.15736971122593
                            ],
                            [
                                0,
                                25.08016164043014
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.392655733594062,
                                15.252778657822885,
                                0
                            ],
                            [
                                -15.252778657822883,
                                -3.3926557335940615,
                                0
                            ],
                            [
                                0,
                                0,
                                244.15736971122593
                            ],
                            [
                                0,
                                334.91983835956984
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.392655733594062,
                                3.2714247244338575,
                                1.7763568394002505e-15
                            ],
                            [
                                3.271424724433858,
                                3.392655733594062,
                                1.8421842847517225e-15
                            ],
                            [
                                7.888609052210118e-31,
                                1.2061114759830972e-14,
                                -22.212332654325806
                            ],
                            [
                                0,
                                92.08438632507122
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.392655733594062,
                                3.2714247244338575,
                                1.7763568394002505e-15
                            ],
                            [
                                3.271424724433858,
                                -3.392655733594062,
                                -1.8421842847517225e-15
                            ],
                            [
                                -7.888609052210118e-31,
                                1.2061114759830972e-14,
                                -22.212332654325806
                            ],
                            [
                                0,
                                267.91561367492875
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                181,
                                182,
                                183,
                                184,
                                185,
                                186,
                                187,
                                188,
                                189,
                                190,
                                191,
                                192,
                                193,
                                194,
                                195,
                                196,
                                197,
                                198,
                                199,
                                200,
                                201,
                                202,
                                203,
                                204,
                                205,
                                206,
                                207,
                                208,
                                209,
                                210,
                                211
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                212,
                                213,
                                214,
                                215,
                                216,
                                217,
                                218,
                                219,
                                220,
                                221,
                                222
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                223
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.344784318452888,
                                0,
                                0
                            ],
                            [
                                0,
                                15.344784318452888,
                                0
                            ],
                            [
                                0,
                                0,
                                235.46240577983767
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.099528221011542,
                                0,
                                0
                            ],
                            [
                                0,
                                4.099528221011542,
                                0
                            ],
                            [
                                0,
                                0,
                                16.806131634870056
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.13409723515881,
                                15.02131286873446,
                                0
                            ],
                            [
                                -15.02131286873446,
                                3.1340972351588094,
                                0
                            ],
                            [
                                0,
                                0,
                                235.4624057798376
                            ],
                            [
                                0,
                                23.570624730044177
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.13409723515881,
                                15.02131286873446,
                                0
                            ],
                            [
                                -15.02131286873446,
                                -3.1340972351588094,
                                0
                            ],
                            [
                                0,
                                0,
                                235.4624057798376
                            ],
                            [
                                0,
                                336.4293752699558
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.13409723515881,
                                2.6426437814128336,
                                -1.7763568394002505e-15
                            ],
                            [
                                2.6426437814128336,
                                3.1340972351588103,
                                -2.106706586100432e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                -1.1296901641999446e-14,
                                -16.80613163487002
                            ],
                            [
                                0,
                                99.72540359002763
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.13409723515881,
                                2.6426437814128336,
                                -1.7763568394002505e-15
                            ],
                            [
                                2.6426437814128336,
                                -3.1340972351588103,
                                2.106706586100432e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                -1.1296901641999446e-14,
                                -16.80613163487002
                            ],
                            [
                                0,
                                260.2745964099724
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                236,
                                237,
                                238,
                                239,
                                240,
                                241,
                                242,
                                243,
                                244,
                                245,
                                246,
                                247,
                                248,
                                249,
                                250,
                                251,
                                252,
                                253,
                                254,
                                255,
                                256,
                                257,
                                258,
                                259,
                                260,
                                261,
                                262,
                                263,
                                264,
                                265,
                                266
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                267,
                                268,
                                269,
                                270,
                                271,
                                272,
                                273,
                                274,
                                275,
                                276,
                                277
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                278
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                14.68529918662356,
                                0,
                                0
                            ],
                            [
                                0,
                                14.68529918662356,
                                0
                            ],
                            [
                                0,
                                0,
                                215.6580122006466
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.5473124789321755,
                                0,
                                0
                            ],
                            [
                                0,
                                3.5473124789321755,
                                0
                            ],
                            [
                                0,
                                0,
                                12.583425823187936
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.917498443291182,
                                14.39257499664463,
                                0
                            ],
                            [
                                -14.39257499664463,
                                2.917498443291182,
                                0
                            ],
                            [
                                0,
                                0,
                                215.65801220064662
                            ],
                            [
                                0,
                                22.918151623561727
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.917498443291182,
                                14.39257499664463,
                                0
                            ],
                            [
                                -14.39257499664463,
                                -2.917498443291182,
                                0
                            ],
                            [
                                0,
                                0,
                                215.65801220064662
                            ],
                            [
                                0,
                                337.0818483764383
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.917498443291182,
                                2.0178277073579425,
                                3.552713678800501e-15
                            ],
                            [
                                2.017827707357942,
                                2.9174984432911817,
                                5.136730251826745e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                2.2155166610704467e-14,
                                -12.58342582318788
                            ],
                            [
                                0,
                                110.66225252881955
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.917498443291182,
                                2.0178277073579425,
                                3.552713678800501e-15
                            ],
                            [
                                2.017827707357942,
                                -2.9174984432911817,
                                -5.136730251826745e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                2.2155166610704467e-14,
                                -12.58342582318788
                            ],
                            [
                                0,
                                249.33774747118045
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                291,
                                292,
                                293,
                                294,
                                295,
                                296,
                                297,
                                298,
                                299,
                                300,
                                301,
                                302,
                                303,
                                304,
                                305,
                                306,
                                307,
                                308,
                                309,
                                310,
                                311,
                                312,
                                313,
                                314,
                                315,
                                316,
                                317,
                                318,
                                319,
                                320,
                                321
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                322,
                                323,
                                324,
                                325,
                                326,
                                327,
                                328,
                                329,
                                330,
                                331,
                                332
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                333
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                13.561893121347685,
                                0,
                                0
                            ],
                            [
                                0,
                                13.561893121347685,
                                0
                            ],
                            [
                                0,
                                0,
                                183.92494503485767
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.0365427494220993,
                                0,
                                0
                            ],
                            [
                                0,
                                3.0365427494220993,
                                0
                            ],
                            [
                                0,
                                0,
                                9.220591869067922
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.720672623783253,
                                13.28619153516364,
                                0
                            ],
                            [
                                -13.286191535163638,
                                2.7206726237832526,
                                0
                            ],
                            [
                                0,
                                0,
                                183.9249450348576
                            ],
                            [
                                0,
                                23.14544809398025
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.720672623783253,
                                13.28619153516364,
                                0
                            ],
                            [
                                -13.286191535163638,
                                -2.7206726237832526,
                                0
                            ],
                            [
                                0,
                                0,
                                183.9249450348576
                            ],
                            [
                                0,
                                336.85455190601976
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.720672623783253,
                                1.3485296968418075,
                                3.552713678800501e-15
                            ],
                            [
                                1.3485296968418077,
                                2.7206726237832526,
                                7.167636625792956e-15
                            ],
                            [
                                0,
                                2.4291732645259648e-14,
                                -9.220591869067906
                            ],
                            [
                                0,
                                127.26841248805668
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.720672623783253,
                                1.3485296968418075,
                                3.552713678800501e-15
                            ],
                            [
                                1.3485296968418077,
                                -2.7206726237832526,
                                -7.167636625792956e-15
                            ],
                            [
                                0,
                                2.4291732645259648e-14,
                                -9.220591869067906
                            ],
                            [
                                0,
                                232.7315875119433
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                346,
                                347,
                                348,
                                349,
                                350,
                                351,
                                352,
                                353,
                                354,
                                355,
                                356,
                                357,
                                358,
                                359,
                                360,
                                361,
                                362,
                                363,
                                364,
                                365,
                                366,
                                367,
                                368,
                                369,
                                370,
                                371,
                                372,
                                373,
                                374,
                                375,
                                376
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                377,
                                378,
                                379,
                                380,
                                381,
                                382,
                                383,
                                384,
                                385,
                                386,
                                387
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                388
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                11.769826508972695,
                                0,
                                0
                            ],
                            [
                                0,
                                11.769826508972695,
                                0
                            ],
                            [
                                0,
                                0,
                                138.52881605131637
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.5658353447851603,
                                0,
                                0
                            ],
                            [
                                0,
                                2.5658353447851603,
                                0
                            ],
                            [
                                0,
                                0,
                                6.5835110165487825
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.510516866023987,
                                11.498961740814925,
                                0
                            ],
                            [
                                -11.498961740814925,
                                2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                138.5288160513163
                            ],
                            [
                                0,
                                24.631750528737044
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.510516866023987,
                                11.498961740814925,
                                0
                            ],
                            [
                                -11.498961740814925,
                                -2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                138.5288160513163
                            ],
                            [
                                0,
                                335.36824947126297
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.510516866023987,
                                0.5299208261220372,
                                0
                            ],
                            [
                                0.5299208261220372,
                                2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                -6.583511016548765
                            ],
                            [
                                0,
                                156.1618954379184
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.510516866023987,
                                0.5299208261220372,
                                0
                            ],
                            [
                                0.5299208261220372,
                                -2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                -6.583511016548765
                            ],
                            [
                                0,
                                203.8381045620816
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                401,
                                402,
                                403,
                                404,
                                405,
                                406,
                                407,
                                408,
                                409,
                                410,
                                411,
                                412,
                                413,
                                414,
                                415,
                                416,
                                417,
                                418,
                                419,
                                420,
                                421,
                                422,
                                423,
                                424,
                                425,
                                426,
                                427,
                                428,
                                429,
                                430,
                                431
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                432,
                                433,
                                434,
                                435,
                                436,
                                437,
                                438,
                                439,
                                440,
                                441,
                                442
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ]
                ]
            },
            "attribs": {
                "points": [],
                "vertices": [],
                "edges": [],
                "wires": [],
                "faces": [],
                "objs": []
            }
        };
        //public gs_dummy_data: gs.IModel = new gs.Model(this.test_data1);
        this.data_boxes = {
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
    AppComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        var fr = new FileReader();
        var self = this;
        fr.onload = function (text) {
            var js_data = JSON.parse(text.target["result"]);
            var model = new __WEBPACK_IMPORTED_MODULE_1_gs_json__["Model"](js_data);
            self.gs_dummy_data = model;
        };
        fr.readAsText(files[0]);
    };
    AppComponent.prototype.genModelManyBoxes = function () {
        var m = new __WEBPACK_IMPORTED_MODULE_1_gs_json__["Model"]();
        var g = m.getGeom();
        for (var i = 0; i < 100; i++) {
            var p0 = [1 + Math.random(), 1 + Math.random(), 0];
            p0.map(function (v) { return v * 1000; });
            var size = [Math.random(), Math.random(), Math.random()];
            size.map(function (v) { return v * 80; });
            var p1 = [p0[0] + size[0], p0[1], p0[2]];
            var p2 = [p0[0] + size[0], p0[1] + size[1], p0[2]];
            var p3 = [p0[0], p0[1] + size[1], p0[2]];
            var p4 = [p0[0], p0[1], p0[2] + size[2]];
            var p5 = [p0[0] + size[0], p0[1], p0[2] + size[2]];
            var p6 = [p0[0] + size[0], p0[1] + size[1], p0[2] + size[2]];
            var p7 = [p0[0], p0[1] + size[1], p0[2] + size[2]];
            var points = [p0, p1, p2, p3, p4, p5, p6, p7].map(function (v) { return g.addPoint(v); });
            g.addPolymesh([
                [points[0], points[1], points[2], points[3]],
                [points[0], points[4], points[5], points[1]],
                [points[1], points[5], points[6], points[2]],
                [points[2], points[6], points[7], points[3]],
                [points[3], points[7], points[4], points[0]],
                [points[7], points[6], points[5], points[4]],
            ]);
        }
        return m;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gs_viewer_gs_viewer_module__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// if importing from npm
// import {GSViewer} from 'gs-viewer';
// for dev purpose -

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__gs_viewer_gs_viewer_module__["a" /* GSViewer */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");

var DataSubscriber = /** @class */ (function () {
    function DataSubscriber(injector) {
        var _this = this;
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
    }
    DataSubscriber.prototype.notify = function (message) {
        console.warn("Notify function not Implemented");
    };
    return DataSubscriber;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__ = __webpack_require__("../../../../three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService() {
        // intializations
        // this only runs once
        this.selecting = [];
        this.grid = true;
        this.scenechildren = [];
        this.textlabels = [];
        this.point = true;
        this.click = false;
        this.checkpointid = false;
        this.checkedgeid = false;
        this.imVisible = false;
        // ---- 
        // Subscription Handling
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var default_width = 1510, default_height = 720;
        // scene
        var scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xcccccc);
        // renderer
        var renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // camera settings
        var aspect_ratio = this._width / this._height;
        var camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](50, aspect_ratio, 0.01, 1000); //0.0001, 100000000 );
        camera.position.y = 10;
        camera.up.set(0, 0, 1);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
        // orbit controls
        var _OC = __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_2_three__);
        var controls = new _OC(camera, renderer.domElement);
        controls.enableKeys = false;
        // default directional lighting
        var directional_light = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xffffff, 0.5);
        directional_light.castShadow = false;
        directional_light.position.copy(camera.position);
        controls.addEventListener('change', function () {
            directional_light.position.copy(camera.position);
        });
        directional_light.target.position.set(0, 0, 0);
        scene.add(directional_light);
        // default ambient lighting
        var default_hue = 0;
        var default_saturation = 0.01;
        var default_lightness = 0.47;
        var hemi_light = new __WEBPACK_IMPORTED_MODULE_2_three__["HemisphereLight"](0xffffff, 0.5);
        hemi_light.color.setHSL(default_hue, default_saturation, default_lightness);
        scene.add(hemi_light);
        this._scene = scene;
        this._renderer = renderer;
        this._camera = camera;
        this._orbitControls = controls;
        // add it to alight - what does alight do?
        this._alight = hemi_light;
        //this._alight.push(hemi_light);
        this.checkname = [];
        this.pointname = [];
    }
    DataService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    DataService.prototype.clearMessage = function () {
        this.subject.next();
    };
    DataService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    //
    //  Getter and Setting for gs-model
    //
    DataService.prototype.getGsModel = function () {
        return this._gsModel;
    };
    DataService.prototype.setGsModel = function (model) {
        this._gsModel = model;
        if (this._gsModel !== undefined) {
            this.generateSceneMaps();
        }
        else {
            // remove all children from the scene
            for (var i = 0; i < this._scene.children.length; i++) {
                if (this._scene.children[i].type === "Scene") {
                    this._scene.remove(this._scene.children[i]);
                }
            }
        }
        this.sendMessage("model_update");
    };
    DataService.prototype.generateSceneMaps = function () {
        var scene_and_maps = __WEBPACK_IMPORTED_MODULE_3_gs_json__["genThreeOptModelAndMaps"](this._gsModel);
        this.scenemaps = scene_and_maps;
    };
    DataService.prototype.getscememaps = function () {
        return this.scenemaps;
    };
    DataService.prototype.getScene = function (width, height) {
        if (width && height) {
            this._width = width;
            this._height = height;
        }
        return this._scene;
    };
    DataService.prototype.getRenderer = function () {
        this._camera.aspect = this._width / this._height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this._width, this._height);
        return this._renderer;
    };
    DataService.prototype.getCamera = function () {
        return this._camera;
    };
    DataService.prototype.getControls = function () {
        return this._orbitControls;
    };
    //
    //
    //
    DataService.prototype.getalight = function () {
        return this._alight;
    };
    DataService.prototype.addraycaster = function (raycaster) {
        this.raycaster = raycaster;
    };
    DataService.prototype.getraycaster = function () {
        return this.raycaster;
    };
    DataService.prototype.gethue = function (_hue) {
        this.hue = _hue;
    };
    DataService.prototype.getsaturation = function (_saturation) {
        this.saturation = _saturation;
    };
    DataService.prototype.getlightness = function (_lightness) {
        this.lightness = _lightness;
    };
    DataService.prototype.getpointsize = function (pointszie) {
        this.pointsize = pointszie;
    };
    DataService.prototype.getmaterialpoint = function (materialpoint) {
        this.materialpoint = materialpoint;
    };
    DataService.prototype.getradius = function (point) {
        this.pointradius = point;
    };
    DataService.prototype.getcenterx = function (centerx) {
        this.centerx = centerx;
    };
    DataService.prototype.getcentery = function (centery) {
        this.centery = centery;
    };
    DataService.prototype.getcenterz = function (centerz) {
        this.centerz = centerz;
    };
    DataService.prototype.getcentersize = function (centersize) {
        this.centersize = centersize;
    };
    DataService.prototype.addGeom = function (Geom) {
        this._Geom = Geom;
    };
    DataService.prototype.getGeom = function () {
        return this._Geom;
    };
    DataService.prototype.addscenechange = function (scenechange) {
        this.scenechange = scenechange;
    };
    DataService.prototype.getscenechange = function () {
        return this.scenechange;
    };
    DataService.prototype.addINTERSECTEDColor = function (INTERSECTEDColor) {
        if (this.INTERSECTEDColor == null) {
            this.INTERSECTEDColor = INTERSECTEDColor;
        }
    };
    DataService.prototype.getINTERSECTEDColor = function () {
        return this.INTERSECTEDColor;
    };
    DataService.prototype.addselecting = function (selecting) {
        if (selecting[selecting.length - 1] == undefined) {
            this.selecting = [];
        }
        this.sendMessage();
    };
    DataService.prototype.pushselecting = function (selecting) {
        this.selecting.push(selecting);
        this.sendMessage();
    };
    DataService.prototype.spliceselecting = function (index, number) {
        this.selecting.splice(index, number);
        this.sendMessage();
    };
    DataService.prototype.getselecting = function () {
        return this.selecting;
    };
    DataService.prototype.addclickshow = function (clickshow) {
        this.clickshow = clickshow;
    };
    DataService.prototype.addattrvertix = function (attributevertix) {
        this.attributevertix = attributevertix;
    };
    DataService.prototype.getattrvertix = function () {
        return this.attributevertix;
    };
    DataService.prototype.addgrid = function (grid) {
        this.grid = grid;
    };
    DataService.prototype.addaxis = function (axis) {
        this.axis = axis;
    };
    DataService.prototype.addshadow = function (shadow) {
        this.shadow = shadow;
    };
    DataService.prototype.addframe = function (frame) {
        this.frame = frame;
    };
    DataService.prototype.addpoint = function (point) {
        this.point = point;
    };
    DataService.prototype.getSelectingIndex = function (uuid) {
        for (var i = 0; i < this.selecting.length; i++) {
            if (this.selecting[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    };
    DataService.prototype.addscenechild = function (scenechildren) {
        this.scenechildren = scenechildren;
        this.sendMessage();
    };
    DataService.prototype.getscenechild = function () {
        this.sendMessage();
        return this.scenechildren;
    };
    DataService.prototype.addlabel = function (label) {
        this.label = label;
        this.sendMessage();
    };
    DataService.prototype.getlabel = function () {
        this.sendMessage();
        return this.label;
    };
    DataService.prototype.addgetpoints = function (getpoints) {
        this.getpoints = getpoints;
    };
    DataService.prototype.addpointname = function (pointname) {
        this.pointname = pointname;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appdiv\" (mousedown)=\"leaflet()\">\r\n\t<split direction=\"vertical\">\r\n\t\t<split-area [size]=\"94\" id=\"splitcontainer\">\r\n\t\t  <div style=\"height: 100%\">\r\n\t\t    <split direction=\"horizontal\">\r\n\t\t      <split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow-x:hidden;overflow-y: auto;\">\r\n\t\t        <app-groups></app-groups>\r\n\t\t      </split-area>\r\n\t\t      <split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t        <!-- <app-viewer *ngIf=\"imVisible===false\"></app-viewer>\r\n\t\t        <app-map *ngIf=\"imVisible===true\"></app-map> -->\r\n\t\t        <app-viewer></app-viewer>\r\n\t\t      </split-area>\r\n\t\t    </split>\r\n\t\t  </div>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"6\" id=\"splittoolwindow\">\r\n\t\t\t<app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t</split>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: \"FontAwesome\"; }\n\n.font-awesome-hand {\n  font-family: FontAwesome; }\n\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n  margin: 0px;\n  padding: 0px; }\n\n#appdiv {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n\n#splittoolwindow {\n  overflow: scroll !important; }\n\na {\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase; }\n\n.toolbar {\n  background-color: #333; }\n\n.toolbar ul {\n  list-style: none;\n  overflow: hidden;\n  margin-bottom: 0px;\n  z-index: 1; }\n\n.toolbar div > ul > li {\n  display: inline-block;\n  float: left; }\n\n.toolbar div > ul > li:hover {\n  background-color: #fff; }\n\n.toolbar div > ul > li:hover a {\n  color: #333; }\n\n.toolbar div > ul > li > a {\n  font-size: 12px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  padding: 0 16px; }\n\n/**\r\n * Carets\r\n */\n.toolbar div ul li i.icon-sort {\n  display: none; }\n\n.toolbar div ul li:hover i.icon-sort {\n  display: inline; }\n\n.toolbar div ul li:hover i.icon-caret-down {\n  display: none; }\n\n.toolbar .dropdown i {\n  margin: 0px; }\n\n.toolbar div > ul > li > a:hover {\n  background-color: #fff;\n  color: #333; }\n\n.dropdown {\n  float: left; }\n\n/**\r\n * Sub navigaton\r\n **/\n.sub {\n  min-width: 180px;\n  margin: 20px;\n  display: none;\n  position: absolute;\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb; }\n\n.sub li a {\n  display: block;\n  background-color: #fff;\n  color: #333 !important;\n  border-left: 4px solid #fff;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 26px; }\n\n.sub li a:hover {\n  border-left: 4px solid #ff0000;\n  float: top; }\n\n.toolbar div > ul > li:hover .sub {\n  display: block; }\n\n.sub li a {\n  transition: all .5s linear;\n  overflow: hidden; }\n\n#toolwindow {\n  position: relative;\n  background-color: slategrey; }\n\n.sidebar {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%; }\n\n.tool-form {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: white; }\n\n.tool-form-heading {\n  border-bottom: 2px solid #ddd;\n  margin: 0px;\n  padding-bottom: 3px; }\n\n.tool-form label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  color: black;\n  display: block;\n  margin: 0px 0px 15px 0px; }\n\n.tool-form label > span {\n  width: 150px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  float: left;\n  padding-top: 4px;\n  padding-right: 5px; }\n\n.tool-form span.required {\n  color: red; }\n\n.tool-form .tel-number-field {\n  width: 30px;\n  text-align: center; }\n\n.tool-form input.input-field {\n  width: 30px; }\n\n.tool-form input.file-input-field {\n  border: 1px solid #ccc;\n  height: 20px;\n  display: inline-block;\n  padding: 6px 6px;\n  cursor: pointer;\n  background-color: #888888; }\n\n.tool-form input.input-field,\n.tool-form .tel-number-field,\n.tool-form .textarea-field,\n.tool-form .select-field {\n  height: 20px;\n  overflow: hidden;\n  width: 240px;\n  background-color: #888888;\n  border-radius: 5px;\n  color: #ffffff; }\n\n.tool-form .input-field:focus,\n.tool-form .tel-number-field:focus,\n.tool-form .textarea-field:focus,\n.tool-form .select-field:focus {\n  border: 1px solid #0C0; }\n\n.tool-form .textarea-field {\n  height: 100px;\n  width: 55%; }\n\n.tool-form input[type=submit],\n.tool-form input[type=button] {\n  height: 25px;\n  border: none;\n  padding: 2px 8px 2px 8px;\n  background: #444466;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: #ffffff; }\n\n.tool-form input[type=submit]:hover,\n.tool-form input[type=button]:hover {\n  background: #333377;\n  color: #fff; }\n\n.rightstyle {\n  width: 30px;\n  height: 100%;\n  float: right;\n  background: #FFFFFF;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  overflow: auto; }\n\n.leftstyle {\n  background: #e6e6e6;\n  height: 100%; }\n\n.slider {\n  width: 0;\n  height: 0;\n  border-top: 30px solid transparent;\n  border-right: 10px solid black;\n  border-bottom: 30px solid transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gs_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GSViewerComponent = /** @class */ (function () {
    function GSViewerComponent(dataService) {
        this.dataService = dataService;
        this.imVisible = false;
    }
    ;
    GSViewerComponent.prototype.setModel = function (data) {
        try {
            this.dataService.setGsModel(data);
        }
        catch (ex) {
            this.data = undefined;
            console.error("Error generating model");
        }
    };
    GSViewerComponent.prototype.ngOnInit = function () {
        this.setModel(this.data);
    };
    GSViewerComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
        }
    };
    GSViewerComponent.prototype.leaflet = function () {
        this.imVisible = this.dataService.imVisible;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], GSViewerComponent.prototype, "data", void 0);
    GSViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gs-viewer',
            template: __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], GSViewerComponent);
    return GSViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_split__ = __webpack_require__("../../../../angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__ = __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import 'hammerjs';
var GSViewer = /** @class */ (function () {
    function GSViewer() {
    }
    GSViewer_1 = GSViewer;
    GSViewer.forRoot = function () {
        return {
            ngModule: GSViewer_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]
            ]
        };
    };
    GSViewer = GSViewer_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["a" /* BrowserModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__["a" /* GroupsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]],
        })
    ], GSViewer);
    return GSViewer;
    var GSViewer_1;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settingview{\r\n  position:absolute;\r\n  background-color: white;\r\n  top:0px;\r\n  right:30px;\r\n  color:#395d73;\r\n  width:400px;\r\n  height:430px;\r\n}\r\n#grid{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n  margin-top:10px;\r\n}\r\n#axis{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#shadow{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#frame{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#nomal{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#point{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#huerange{\r\n  margin-left: 41px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#satrange{\r\n  margin-left: 18px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#lirange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#oprange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#name{\r\n  font-family:sans-serif;\r\n}\r\n#redrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#greenrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#bluerange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#linerange{\r\n  margin-left: 5px;\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n#pointrange{\r\n  margin-left: 3px;\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#sizerange{\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#centerx{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centery{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centerz{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centersize{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n.name{\r\n  margin-left: 10px;\r\n}\r\n.center{\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingview\" (click)=\"setting($event)\">\r\n  <input id=\"grid\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label>\r\n  <input id=\"axis\"  type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label>\r\n  <input id=\"shadow\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label>\r\n  <input id=\"frame\"  type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">frame</label><br/>\r\n  <!-- <input id=\"nomal\"  type=\"checkbox\" [checked]=\"normalVisible\" (click)=\"changenormal()\"> <label id=\"name\" value=\"nomalVisible\">nomal</label> -->\r\n  <input id=\"point\"  type=\"checkbox\" [checked]=\"pointVisible\" (click)=\"changepoint()\"> <label id=\"name\" value=\"pointVisible\">point</label><br/>\r\n  \r\n  <hr/><label class=\"name\" >Grid Center</label><br/>\r\n  <label class=\"name\" >X</label><input type=\"text\" name=\"center\" id=\"centerx\" #centerx value={{_centerx}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Y</label><input type=\"text\" name=\"center\" #centery id=\"centery\" value={{_centery}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Z</label><input type=\"text\" name=\"center\"  #centerz id=\"centerz\" value={{_centerz}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Size</label><input type=\"text\" name=\"center\"  #size id=\"centersize\" value={{_centersize}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<button (click)=\"getcenter()\">Get</button><br/>\r\n  <!--< button (click)=\"changecenter(centerx.value,centery.value,centerz.value)\">Set</button> -->\r\n  <!-- <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Raycaster Precision</label>&nbsp;&nbsp;<br/>-->\r\n  <label class=\"name\" >Line Precision</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"linerange\" min=0 max=1 step=0.01  value={{_linepre}} #linepre (change)=\"changeline(linepre.value)\" ></mat-slider><label id=\"name\" >{{linepre.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Point Precision</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"pointrange\" min=0 max=1 step=0.01  value={{_pointpre}} #pointpre (change)=\"changepoint(pointpre.value)\" ></mat-slider><label id=\"name\" >{{pointpre.value.toPrecision(2)}}</label><br/> -->\r\n  <label class=\"name\" >Points Size</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1  value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value)\" ></mat-slider><label id=\"name\" >{{pointsize.value.toPrecision(2)}}</label><br/>\r\n\r\n  <hr/><label class=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n  <label class=\"name\" >hue</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=1 step=0.01  value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider.value.toPrecision(2)}}</label><br/>\r\n  <label class=\"name\" >saturation</label>\r\n  <mat-slider name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider1.value.toPrecision(2)}}</label><br/>\r\n  <label class=\"name\" >lightness</label>\r\n  <mat-slider name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider2.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >opacity</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider name=\"range\" id=\"oprange\" min=0 max=1 step=0.01 value={{opacity}} #slider3 (change)=\"changeopa(slider3.value)\" ></mat-slider><label id=\"name\" >{{slider3.value.toPrecision(2)}}</label><br/> -->\r\n  <!-- <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Backeground Color</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >R</label>\r\n  <mat-slider  name=\"range\" id=\"redrange\" min=0 max=1 step=0.01  value={{red}} #slider4 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider4.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >G</label>\r\n  <mat-slider name=\"range\" id=\"greenrange\" min=0 max=1 step=0.01 value={{green}} #slider5 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider5.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >B</label>\r\n  <mat-slider name=\"range\" id=\"bluerange\" min=0 max=1 step=0.01 value={{blue}} #slider6 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider6.value.toPrecision(2)}}</label><br/> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = /** @class */ (function () {
    function SettingComponent(dataService) {
        this.dataService = dataService;
        // avoid manipulating the scene here
        // shift to dataservice
        this.scene = this.dataService.getScene();
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
        this._centerx = this.dataService.centerx;
        this._centery = this.dataService.centery;
        this._centerz = this.dataService.centerz;
        this._centersize = this.dataService.centersize;
        this.raycaster = this.dataService.getraycaster();
        this._linepre = this.raycaster.linePrecision;
        this._pointpre = this.raycaster.params.Points.threshold;
        this._pointsize = this.dataService.pointsize;
    }
    SettingComponent.prototype.ngOnInit = function () {
        if (this.hue == undefined) {
            this.hue = 0;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation == undefined) {
            this.saturation = 0.01;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        this.pointVisible = this.dataService.point;
        if (this._centerx == undefined) {
            this._centerx = 0;
        }
        else {
            this._centerx = this.dataService.centerx;
        }
        if (this._centery == undefined) {
            this._centery = 0;
        }
        else {
            this._centery = this.dataService.centery;
        }
        if (this._centerz == undefined) {
            this._centerz = 0;
        }
        else {
            this._centerz = this.dataService.centerz;
        }
        if (this._centersize == undefined) {
            this._centersize = 100;
        }
        else {
            this._centersize = this.dataService.centersize;
        }
        this.raycaster = this.dataService.getraycaster();
        if (this._linepre == undefined) {
            this._linepre = 0.05;
        }
        else {
            this._linepre = this.raycaster.linePrecision;
        }
        if (this._pointpre == undefined) {
            this._pointpre = 1;
        }
        else {
            this._pointpre = this.raycaster.params.Points.threshold;
        }
        if (this._pointsize == undefined) {
            this._pointsize = 1;
        }
        else {
            this._pointsize = this.dataService.pointsize;
        }
    };
    SettingComponent.prototype.changegrid = function () {
        this.gridVisible = !this.gridVisible;
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](100, 100);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.dataService.addgrid(this.gridVisible);
    };
    SettingComponent.prototype.changecenter = function (centerx, centery, centerz, centersize) {
        if (this.gridVisible) {
            var gridhelper = this.scene.getObjectByName("GridHelper");
            gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](centersize, centersize);
            gridhelper.position.set(centerx, centery, centerz);
            console.log(gridhelper);
            this._centerx = centerx;
            this._centery = centery;
            this._centerz = centerz;
            this._centersize = centersize;
            this.dataService.getcenterx(centerx);
            this.dataService.getcentery(centery);
            this.dataService.getcenterz(centerz);
            this.dataService.getcentersize(centersize);
        }
    };
    SettingComponent.prototype.changeline = function (lineprecision) {
        this._linepre = lineprecision;
        this.raycaster.linePrecision = lineprecision;
        this.dataService.addraycaster(this.raycaster);
    };
    SettingComponent.prototype.changepoint = function () {
        this.pointVisible = !this.pointVisible;
        var children = [];
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].type === "Points") {
                        children.push(this.scene.children[i].children[j]);
                    }
                }
            }
        }
        if (this.pointVisible) {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = false;
                children[i]["material"].opacity = 1;
            }
        }
        else {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = true;
                children[i]["material"].opacity = 0;
            }
        }
        this.dataService.addpoint(this.pointVisible);
    };
    SettingComponent.prototype.changepointsize = function (pointsize) {
        this._pointsize = pointsize;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](pointsize / 3);
                this.scene.children[i]["geometry"] = geometry;
            }
            if (this.scene.children[i].name === "selects" && this.scene.children[i].type === "Points") {
                this.scene.children[i]["material"].size = pointsize;
            }
        }
        this.dataService.getpointsize(pointsize);
    };
    SettingComponent.prototype.changeaxis = function () {
        this.axisVisible = !this.axisVisible;
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxesHelper"](10);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.dataService.addaxis(this.axisVisible);
    };
    SettingComponent.prototype.changeshadow = function () {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.dataService.addshadow(this.shadowVisible);
    };
    SettingComponent.prototype.changelight = function (_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        this.alight.color.setHSL(_hue, _saturation, _lightness);
    };
    SettingComponent.prototype.changeframe = function () {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.dataService.addframe(this.frameVisible);
    };
    SettingComponent.prototype.changenormal = function () {
        this.nomalVisible = !this.nomalVisible;
        if (this.nomalVisible) {
            /*for(var i=0;i<this.scene.children.length;i++){
              if(this.scene.children[i].type==="Scene"){
                for(var j=0;j<this.scene.children[i].children.length;j++){
                  if(this.scene.children[i].children[j].type==="Mesh"){
                    var mesh=this.scene.children[i].children[j];
                    var faceNormalsHelper = new THREE.FaceNormalsHelper( mesh, 10 );
                    mesh.add( faceNormalsHelper );
                    var verticehelper = new THREE.VertexNormalsHelper( mesh, 10 );
                    this.scene.add(verticehelper);
                    console.log(this.scene);
                    //facehelper.visible=false;
                    //this.scene.add(verticehelper);
                  }
                }
              }
            }*/
        }
    };
    SettingComponent.prototype.setting = function (event) {
        event.stopPropagation();
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#setandgroup{\r\n  background-color: #F1F1F1 !important;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 12px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  overflow-y: hidden !important;\r\n}\r\n#groupsview{\r\n  color:#395d73;\r\n  background-color: #F1F1F1 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 12px !important;\r\n}\r\n#settingview{\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  background-color: #F1F1F1 !important;\r\n  font-size: 12px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  overflow-y: hidden !important;\r\n  width: 1600px;\r\n  height: 800px;\r\n  color: #395d73;\r\n}\r\n.check{\r\n  margin-left:10px;\r\n}\r\n#GridCenter{\r\n  margin-left: 10px;\r\n  margin-top: 3px !important;\r\n  height: 8px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n#centerx{\r\n  width:50px;\r\n  margin-left: 10px;\r\n/*  margin-left:25px;*/\r\n}\r\n#centery{\r\n  width:50px;\r\n  /*margin-left:25px;*/\r\n}\r\n#centerz{\r\n  width:50px;\r\n  /*margin-left:25px;*/\r\n}\r\n#centersize{\r\n  width:50px;\r\n  margin-left:9px;\r\n}\r\n.name{\r\n  width: 10px;\r\n  margin-left: 10px;\r\n}\r\n#slider-conainer{\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: right;\r\n}\r\n\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: white;\r\n    color:#395d73;\r\n    font-family:sans-serif;\r\n}\r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n}\r\n\r\n/deep/.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb, .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n}\r\n/*::ng-deep .mat-expansion-panel {\r\n  margin: 0px !important;\r\n  overflow: hidden !important;\r\n} */\r\n/deep/ .slider {\r\n  height: 25px !important;\r\n  vertical-align: unset !important;\r\n  width: unset !important;\r\n}\r\n\r\n\r\n\r\n\r\n/*.mat-expansion-panel{\r\n   background-color: #F1F1F1 !important;\r\n   border-color: #395d73;\r\n   line-height: 14px;\r\n   font-weight: bold !important;\r\n   font-size: 12px !important;\r\n}\r\n.mat-tab-group{\r\n  border: 0px solid #F1F1F1;\r\n  color:#395d73;\r\n}*/\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 3px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#395d73;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n.mat-expansion-panel-spacing {\r\n  margin-top:0px;\r\n  margin-bottom: 0px;\r\n}\r\n.mat-expansion-panel{\r\n  background-color: #F1F1F1 !important;\r\n  border-color: #395d73;\r\n  line-height: 14px;\r\n  font-weight: bold !important;\r\n  font-size: 12px !important;\r\n  overflow: hidden !important;\r\n}\r\n\r\n#groupname{\r\n  margin-right: 0px;\r\n}\r\n.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n}\r\n.mat-list-text{\r\n  cursor :pointer;\r\n  color:#f3a32a;\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700px;\r\n  line-height: 14px;\r\n  border-top: 2px !important;\r\n  /*margin-top: 2px;*/\r\n}\r\n\r\n.mat-list-text-parent{\r\n  cursor :pointer;\r\n  color:#f3a32a;\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700px;\r\n  line-height: 14px;\r\n  border-top: 2px !important;\r\n  /*margin-top: 2px;*/\r\n}\r\n\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ccc;\r\n  /*margin: 1em 0;*/\r\n  padding: 0; \r\n  color:#395d73;\r\n  width: 100%;\r\n  background-color: #395d73;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setandgroup\" >\r\n<mat-tab-group class=\"mat-tab-group\">\r\n  <mat-tab label=\"Groups\" >\r\n  \t<div id=\"groupsview\">\r\n\t<mat-accordion>\r\n\t  <mat-expansion-panel *ngFor=\"let group of groups\">\r\n\t  <mat-expansion-panel-header class=\"mat-header\">\r\n\t    <div class=\"mat-header\" ><label id=\"groupname\">{{group.name}}</label></div>\r\n\t  </mat-expansion-panel-header>\r\n\t    <div class=\"mat-list-text-parent\"><span id=\"parent\">parent : {{group.parent}} </span></div>\r\n\t    <div class=\"mat-list-text\"><hr/><span (click)=\"selectpoint(group)\">point : {{group.num_point}} </span></div>\r\n\t    <div class=\"mat-list-text\"><span (click)=\"selectvertice(group)\">vertice : {{group.num_vertice}} </span></div>\r\n\t    <div class=\"mat-list-text\"><span (click)=\"selectedge(group)\">edge : {{group.num_edge}} </span></div>\r\n\t    <div class=\"mat-list-text\"><span (click)=\"selectwire(group)\">wire : {{group.num_wire}} </span></div>\r\n\t    <div class=\"mat-list-text\"><span (click)=\"selectface(group)\">face : {{group.num_face}} </span></div>\r\n\t    <div class=\"mat-list-text\"><span (click)=\"selectobject(group)\">object : {{group.num_object}} </span><hr/></div>\r\n\t    <div class=\"mat-list-text\" *ngFor=\"let prop of group.props\"><span >{{prop[0]}} : {{prop[1]}} </span></div> \r\n \t\t</mat-expansion-panel>\r\n\t</mat-accordion>\r\n\t</div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Settings\" >\r\n  \t<div id=\"settingview\">\r\n  \t\t<input id=\"grid\" class=\"check\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label><br/>\r\n\t\t<input id=\"axis\" class=\"check\" type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label><br/>\r\n\t\t<input id=\"shadow\" class=\"check\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label><br/>\r\n\t\t<input id=\"frame\" class=\"check\" type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">wireframe</label><br/>\r\n\t\t<input id=\"point\" class=\"check\" type=\"checkbox\" [checked]=\"pointVisible\" (click)=\"changepoint()\"> <label id=\"name\" value=\"pointVisible\">point</label><br/>\r\n\t\t<hr/><div  id=\"GridCenter\" >Grid Center<button (click)=\"getcenter()\" style=\"margin-left: 30px;width: 40px;height: 20px; font-family: sans-serif;font-size: 12px;\">Get</button></div><br/>\r\n\t\t<label class=\"name\" >XYZ</label><input type=\"text\" name=\"center\" id=\"centerx\" #centerx value={{_centerx}} (change)=changecenter(centerx.value,centery.value,centerz.value)><input type=\"text\" name=\"center\" #centery id=\"centery\" value={{_centery}} (change)=changecenter(centerx.value,centery.value,centerz.value)><input type=\"text\" name=\"center\"  #centerz id=\"centerz\" value={{_centerz}} (change)=changecenter(centerx.value,centery.value,centerz.value)><br/>\r\n\t\t<label class=\"name\" >Size</label><input type=\"text\" name=\"center\"  #size id=\"centersize\" value={{_centersize}} (change)=changecentersize(size.value)><br/>\r\n\t\t<hr/><label class=\"name\" >Selection Settings:</label><br/>\r\n\t\t<label class=\"name\" >Line Precision</label><br/>\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Radius</label>&nbsp;<input type=\"text\" value={{_linepre}} #linetext (change)=\"changeline(linetext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"linerange\" min=0 max=1 step=0.01 thumbLabel=true value={{_linepre}} #linepre (change)=\"changeline(linepre.value.toPrecision(2))\" ></mat-slider><span>1</span><br/>\r\n  \t\t<label class=\"name\" >Points Precision</label><br/>\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Radius</label>&nbsp;<input type=\"text\" value={{_materialpoint}} #pointtext1 (change)=\"changeradius(pointtext1.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_materialpoint}} #pointsize1 (change)=\"changeradius(pointsize1.value.toPrecision(2))\" ></mat-slider><span>5</span><br/>\r\n  \t\t<!-- &nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Selected</label>&nbsp;<input type=\"text\" value={{_pointsize}} #pointtext (change)=\"changepointsize(pointtext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value.toPrecision(2))\" ></mat-slider><span>5</span><br/> -->\r\n  \t\t<label class=\"name\" >Points Size</label><br/>\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Size</label>&nbsp;<input type=\"text\" value={{_pointsize}} #pointtext (change)=\"changepointsize(pointtext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value.toPrecision(2))\" ></mat-slider><span>5</span><br/><!-- <input type=\"text\" value={{_materialpoint}} #pointtext1 (change)=\"changematerialpoint(pointtext1.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize1}} #pointsize1 (change)=\"changematerialpoint(pointsize1.value.toPrecision(2))\" ></mat-slider><span>5</span><br/> -->\r\n  \t\t<hr/><label class=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Hue</label>&nbsp;\r\n\t\t<input type=\"text\" value={{hue}} #huetext (change)=\"changelight(huetext.value,slider1.value,slider2.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=1 step=0.01 thumbLabel=true value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n\t\t&nbsp;<label class=\"name\" >Saturation</label>&nbsp;\r\n\t\t<input type=\"text\" value={{saturation}} #satutext (change)=\"changelight(slider.value,satutext.value,slider2.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 thumbLabel=true value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n\t\t&nbsp;&nbsp;<label class=\"name\" >Lightness</label>&nbsp;\r\n\t\t<input type=\"text\" value={{lightness}} #lighttext (change)=\"changelight(slider.value,slider1.value,lighttext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 thumbLabel=true value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n  \t</div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gs_json__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import {MatTabsModule} from '@angular/material/tabs';*/
var GroupsComponent = /** @class */ (function (_super) {
    __extends(GroupsComponent, _super);
    function GroupsComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.scene = _this.dataService.getScene();
        _this.renderer = _this.dataService.getRenderer();
        _this.camera = _this.dataService.getCamera();
        _this.myElement = myElement;
        _this._centerx = _this.dataService.centerx;
        _this._centery = _this.dataService.centery;
        _this._centerz = _this.dataService.centerz;
        _this._centersize = _this.dataService.centersize;
        _this.raycaster = _this.dataService.getraycaster();
        _this._pointsize = _this.dataService.pointsize;
        _this._materialpoint = _this.dataService.pointradius;
        _this.alight = _this.dataService.getalight();
        _this.hue = _this.dataService.hue;
        _this.saturation = _this.dataService.saturation;
        _this.lightness = _this.dataService.lightness;
        return _this;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.model = this.dataService.getGsModel();
        this.updateModel();
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        this.pointVisible = this.dataService.point;
        if (this._centerx === undefined || this._centerx === 0) {
            this._centerx = 0;
        }
        else {
            this._centerx = this.dataService.centerx;
        }
        if (this._centery === undefined || this._centery === 0) {
            this._centery = 0;
        }
        else {
            this._centery = this.dataService.centery;
        }
        if (this._centerz === undefined || this._centerz === 0) {
            this._centerz = 0;
        }
        else {
            this._centerz = this.dataService.centerz;
        }
        if (this._centersize === undefined || this._centersize === 100) {
            this._centersize = 100;
        }
        else {
            this._centersize = this.dataService.centersize;
        }
        this.raycaster = this.dataService.getraycaster();
        if (this._linepre === undefined || this._linepre === 0.05) {
            this._linepre = 0.05;
        }
        else {
            this._linepre = this.raycaster.linePrecision;
        }
        if (this._pointsize === undefined || this._pointsize === 1) {
            this._pointsize = 1;
        }
        else {
            this._pointsize = this.dataService.pointsize;
        }
        if (this._materialpoint === undefined || this._materialpoint === 0.1) {
            this._materialpoint = 0.1;
        }
        else {
            this._materialpoint = this.dataService.pointradius;
        }
        if (this.hue === undefined || this.hue === 0) {
            this.hue = 0;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation === undefined || this.saturation === 0.01) {
            this.saturation = 0.01;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined || this.lightness === 0.47) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
    };
    GroupsComponent.prototype.notify = function (message) {
        if (message == "model_update" && this.scene) {
            this.ngOnInit();
        }
    };
    GroupsComponent.prototype.updateModel = function () {
        if (this.model !== undefined) {
            try {
                this.scene_and_maps = this.dataService.getscememaps();
                this.getgroupname();
            }
            catch (ex) {
                console.error("Error displaying model:", ex);
            }
        }
    };
    GroupsComponent.prototype.animate = function (self) {
    };
    GroupsComponent.prototype.changegrid = function () {
        this.gridVisible = !this.gridVisible;
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](this._centersize, this._centersize);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(this._centerx, this._centery, this._centerz);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addgrid(this.gridVisible);
    };
    GroupsComponent.prototype.changepoint = function () {
        this.pointVisible = !this.pointVisible;
        var children = [];
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].type === "Points") {
                        children.push(this.scene.children[i].children[j]);
                    }
                }
            }
        }
        if (this.pointVisible) {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = false;
                children[i]["material"].opacity = 1;
            }
        }
        else {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = true;
                children[i]["material"].opacity = 0;
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addpoint(this.pointVisible);
    };
    GroupsComponent.prototype.changeaxis = function () {
        this.axisVisible = !this.axisVisible;
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxesHelper"](10);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addaxis(this.axisVisible);
    };
    GroupsComponent.prototype.changeshadow = function () {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addshadow(this.shadowVisible);
    };
    GroupsComponent.prototype.changeframe = function () {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addframe(this.frameVisible);
    };
    GroupsComponent.prototype.changecenter = function (centerx, centery, centerz) {
        if (this.gridVisible) {
            var gridhelper = this.scene.getObjectByName("GridHelper");
            gridhelper.position.set(centerx, centery, centerz);
            this._centerx = centerx;
            this._centery = centery;
            this._centerz = centerz;
            this.dataService.getcenterx(centerx);
            this.dataService.getcentery(centery);
            this.dataService.getcenterz(centerz);
        }
        this.renderer.render(this.scene, this.camera);
    };
    GroupsComponent.prototype.changecentersize = function (centersize) {
        if (this.gridVisible) {
            this._centersize = centersize;
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](centersize, centersize);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(this._centerx, this._centery, this._centerz);
            this.scene.add(gridhelper);
            this.dataService.getcentersize(centersize);
        }
        this.renderer.render(this.scene, this.camera);
    };
    GroupsComponent.prototype.getcenter = function () {
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].name === "All points") {
                        var center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        var radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        var max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        this._centerx = center.x;
                        this._centery = center.y;
                        this._centerz = center.z;
                        this._centersize = max;
                    }
                }
            }
        }
        this.scene.remove(this.scene.getObjectByName("GridHelper"));
        var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](this._centersize, this._centersize);
        gridhelper.name = "GridHelper";
        var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
        gridhelper.lookAt(vector);
        gridhelper.position.set(this._centerx, this._centery, this._centerz);
        this.scene.add(gridhelper);
        this.dataService.getcenterx(this._centerx);
        this.dataService.getcentery(this._centery);
        this.dataService.getcenterz(this._centerz);
        this.dataService.getcentersize(this._centersize);
        this.renderer.render(this.scene, this.camera);
    };
    //chiange line precision
    GroupsComponent.prototype.changeline = function (lineprecision) {
        this._linepre = lineprecision;
        this.raycaster = this.dataService.getraycaster();
        this.raycaster.linePrecision = lineprecision;
        this.dataService.addraycaster(this.raycaster);
        if (this.dataService.SelectVisible === 'Edges' || this.dataService.SelectVisible === 'Wires') {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "sphereInter") {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](lineprecision * 2);
                    this.scene.children[i]["geometry"] = geometry;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
    };
    //change points size
    GroupsComponent.prototype.changepointsize = function (pointsize) {
        this._pointsize = pointsize;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].name === "All points") {
                        this.scene.children[i].children[j]["material"].size = pointsize * 10;
                    }
                }
            }
            if (this.scene.children[i].name === "selects" && this.scene.children[i].type === "Points") {
                this.scene.children[i]["material"].size = pointsize;
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.getpointsize(pointsize);
        //this.dataService.getmaterialpoint(pointsize);
    };
    //change radius
    GroupsComponent.prototype.changeradius = function (point) {
        this._materialpoint = point;
        if (this.dataService.SelectVisible !== 'Edges' && this.dataService.SelectVisible !== 'Wires') {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "sphereInter") {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](point / 4);
                    this.scene.children[i]["geometry"] = geometry;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.getradius(point);
    };
    GroupsComponent.prototype.changelight = function (_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        this.alight.color.setHSL(_hue, _saturation, _lightness);
        this.renderer.render(this.scene, this.camera);
    };
    GroupsComponent.prototype.getgroupname = function () {
        this.groups = [];
        var allgroup = this.model.getAllGroups();
        for (var i = 0; i < allgroup.length; i++) {
            var group = {};
            group.parent = allgroup[i].getParentGroup().getName();
            group.props = allgroup[i].getProps();
            group.name = allgroup[i].getName();
            group.num_point = allgroup[i].getPoints().length;
            group.points = allgroup[i].getPoints();
            group.num_vertice = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].vertices).length;
            group.vertices = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].vertices);
            group.num_edge = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].edges).length;
            group.edges = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].edges);
            group.num_wire = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].wires).length;
            group.wires = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].wires);
            group.num_face = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].faces).length;
            group.faces = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].faces);
            group.num_object = allgroup[i].getObjs().length;
            group.objects = allgroup[i].getObjs();
            this.groups.push(group);
        }
        //this.renderer.render(this.scene, this.camera);
    };
    GroupsComponent.prototype.selectpoint = function (group) {
        if (group.point !== 0) {
            var pointinitial = false;
            var grouppoints = group.points;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < grouppoints.length; i++) {
                    if (grouppoints[i].getLabel() === this.scene.children[j].userData.id) {
                        pointinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (pointinitial === false) {
                for (var i = 0; i < grouppoints.length; i++) {
                    var point = {};
                    var label = grouppoints[i].getLabel();
                    //let id:string=grouppoints[i]._id;
                    var id = grouppoints[i].getID();
                    var verts_xyz = grouppoints[i].getLabelCentroid();
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 2 });
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    var points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = label;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    point.label = label;
                    point.id = id;
                    point.label_xyz = verts_xyz;
                    point.path = id;
                    point.type = "All points";
                }
            }
        }
    };
    GroupsComponent.prototype.selectvertice = function (group) {
        if (group.vertice !== 0) {
            var vertixinitial = false;
            var groupvertices = group.vertices;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupvertices.length; i++) {
                    if (groupvertices[i].getLabel() === this.scene.children[j].userData.id) {
                        vertixinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (vertixinitial === false) {
                for (var i = 0; i < groupvertices.length; i++) {
                    var point = [];
                    var label = groupvertices[i].getLabel();
                    var id = groupvertices[i].getPoint().getID();
                    var verts_xyz = groupvertices[i].getLabelCentroid();
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 2 });
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    var points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = label;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    point.label = label;
                    point.id = id;
                    point.label_xyz = verts_xyz;
                    point.path = id;
                    point.type = "All points";
                }
            }
        }
    };
    GroupsComponent.prototype.selectedge = function (group) {
        if (group.edge !== 0) {
            var edgeinitial = false;
            var groupedges = group.edges;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupedges.length; i++) {
                    if (groupedges[i].getLabel() === this.scene.children[j].userData.id) {
                        edgeinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (edgeinitial === false) {
                for (var i = 0; i < groupedges.length; i++) {
                    var edge = [];
                    var label = groupedges[i].getLabel();
                    var id = groupedges[i].getLabel();
                    var label_xyz = groupedges[i].getLabelCentroid();
                    var verts = groupedges[i].getVertices();
                    var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = edge.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    };
    GroupsComponent.prototype.selectwire = function (group) {
        if (group.wire !== 0) {
            var groupwires = group.wires;
            var wireinitial = false;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupwires.length; i++) {
                    if (groupwires[i].getLabel() === this.scene.children[j].userData.id) {
                        wireinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (wireinitial === false) {
                for (var i = 0; i < groupwires.length; i++) {
                    var wire = [];
                    var label = groupwires[i].getLabel();
                    var label_xyz = groupwires[i].getLabelCentroid();
                    var verts = groupwires[i].getVertices();
                    var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                    if (groupwires[i].isClosed()) {
                        verts_xyz.push(verts_xyz[0]);
                    }
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = label;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    };
    GroupsComponent.prototype.selectface = function (group) {
        if (group.face !== 0) {
            var groupfaces = group.faces;
            var faceinitial = false;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupfaces.length; i++) {
                    if (groupfaces[i].getLabel() === this.scene.children[j].userData.id) {
                        faceinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (faceinitial === false) {
                for (var i = 0; i < groupfaces.length; i++) {
                    var face = [];
                    var label = groupfaces[i].getLabel();
                    var label_xyz = face.getLabelCentroid();
                    var verts = face.getVertices();
                    var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                    var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = face.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    };
    GroupsComponent.prototype.selectobject = function (group) {
        if (group.face !== 0) {
            this.selectface(group);
        }
        else if (group.wire !== 0) {
            this.selectwire(group);
        }
        else if (group.edge !== 0) {
            this.selectedge(group);
        }
        else if (group.point !== 0) {
            this.selectpoint(group);
        }
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */]])
    ], GroupsComponent);
    return GroupsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolwindow{\r\n  background-color:white;\r\n  /*overflow-x: scroll !important;*/\r\n  font-family:sans-serif;\r\n  width: 100%;\r\n}\r\n#toolbar{\r\n  background-color: #E6E6E6 !important;\r\n  float: left;\r\n  width: 50%;\r\n  height: 30px;\r\n  left: 0px;\r\n  margin-top:0px;\r\n  overflow: hidden !important;\r\n  font-family:sans-serif;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n#pagination{\r\n  float: right;\r\n  width: 50%;\r\n  height: 30px;\r\n  right: 0px;\r\n  position: fixed !important;\r\n  top:unset !important;\r\n  margin-top: 0px;\r\n}\r\n\r\n.table_ojbs{\r\n  table-layout:fixed;\r\n  overflow-x: scroll !important;\r\n  font-family:sans-serif;\r\n}\r\n.Number{\r\n  overflow:hidden; \r\n  white-space:nowrap; \r\n}\r\n#toolview{\r\n  position:relative;\r\n  margin-top: 30px;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n#selectedname{\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n#point{\r\n  margin-left:25px;\r\n  font-size:15px;\r\n  background:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#vertice{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edge{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wire{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#face{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#object{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#selected{\r\n  margin-left:30px;\r\n}\r\n.visible{\r\n  background-color: white !important;\r\n  color:#395d73;\r\n}\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}\r\n#table{\r\n  width:100% ;\r\n  height: 15px;\r\n}\r\n#tablename{\r\n  width:100% ;\r\n  height: 15px;\r\n  color:grey;\r\n}\r\n#numberbutton{\r\n  width:100%;\r\n  border:0;\r\n}\r\n#attrib{\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n/*.selectid{\r\n  background-color:#66CCFF;\r\n}*/\r\n#select{\r\n  position: relative;\r\n  float:right;\r\n  margin-right: 30px;\r\n}\r\n#pagination{\r\n  position:relative;\r\n  width: 50%;\r\n  background-color: #E6E6E6;\r\n  float: right;\r\n  right: 0px;\r\n  height: 30px;\r\n  color:black !important;\r\n  top:0px;\r\n  overflow: hidden !important;\r\n}\r\n.my-pagination /deep/ .ngx-pagination{\r\n  margin:0px !important;\r\n  color:black !important;\r\n  float: right;\r\n  margin-right:20px !important;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n  margin-top:0px;\r\n  color:black;\r\n  background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <div style=\"position:relative;\">\r\n  <div id=\"toolbar\">\r\n    <button id=\"point\" [class.visible]=\"Visible === 'Points'\" (click)=\"point(Visible)\">P</button>\r\n    <button id=\"vertice\" [class.visible]=\"Visible === 'Vertices'\" (click)=\"vertice(Visible)\">V</button>\r\n    <button id=\"edge\" [class.visible]=\"Visible === 'Edges'\" (click)=\"edge(Visible)\">E</button>\r\n    <button id=\"wire\" [class.visible]=\"Visible === 'Wires'\" (click)=\"wire(Visible)\">W</button>\r\n    <button id=\"face\" [class.visible]=\"Visible === 'Faces'\" (click)=\"face(Visible)\">F</button>\r\n    <button id=\"object\" [class.visible]=\"Visible === 'Objs'\" (click)=\"object(Visible)\">O</button>\r\n    <input id=\"selected\" type=\"checkbox\" (click)=\"changeselected()\">\r\n    <label id=\"selectedname\" value=\"selected\">Show selected only</label>\r\n  </div>\r\n  <div id=\"pagination\" >\r\n    <pagination-controls *ngIf=\"Visible === 'Points'\" class=\"my-pagination\" (pageChange)=\"p1 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Vertices'\" class=\"my-pagination\" (pageChange)=\"p2 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Edges'\" class=\"my-pagination\" (pageChange)=\"p3 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Wires'\" class=\"my-pagination\" (pageChange)=\"p4 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Faces'\" class=\"my-pagination\" (pageChange)=\"p5 = $event\"></pagination-controls>\r\n    <pagination-controls *ngIf=\"Visible === 'Objs'\" class=\"my-pagination\" (pageChange)=\"p6 = $event\"></pagination-controls>  \r\n  </div>\r\n</div>\r\n  <div id=\"toolview\">\r\n    <div *ngIf=\"Visible === 'Points'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n        <tr>\r\n          <td align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Points ID <input type=\"checkbox\" id=\"id\" class=\"checkbox\" style=\"float:right\" [checked]=\"checkpointid\" (click)=\"checkbox()\"></div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >X<input type=\"checkbox\" style=\"float:right\" id=\"X\"  class=\"checkbox\" [checked]=\"checkX\" (click)=\"checkbox()\"></div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >Y<input type=\"checkbox\" style=\"float:right\" id=\"Y\" class=\"checkbox\" [checked]=\"checkY\" (click)=\"checkbox()\"></div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >Z<input type=\"checkbox\" style=\"float:right\" id=\"Z\" class=\"checkbox\" [checked]=\"checkZ\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" class=\"checkbox\" *ngFor=\"let name of point_name;let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" id={{name}} style=\"float:right\" (click)=\"checkbox()\"></div></td>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p1 }\">\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button width=\"180px\" id=\"numberbutton\" (click)=Onselect(datascale)>{{datascale.id}}</button></div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.x}}</div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.y}}</div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.z}}</div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of point_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td> \r\n        <tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Vertices'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" >\r\n        <tr>\r\n          <td  align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Vertices Label<input type=\"checkbox\" id=\"vertixid\" style=\"float:right\" [checked]=\"vertixid\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Points ID<input type=\"checkbox\" id=\"pointid\" style=\"float:right\"  [checked]=\"pointid\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" *ngFor=\"let name of vertex_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" id={{name}} style=\"float:right\" (click)=\"checkbox()\"></div></td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p2 }\">\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.vertixlabel}}</button></div></td>\r\n          <td  align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.pointid}}</div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of vertex_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td> \r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Edges'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" >\r\n        <tr>\r\n          <td  align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Edge ID<input type=\"checkbox\" style=\"float:right\" id=\"edgeid\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" *ngFor=\"let name of edge_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></td> \r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p3 }\" >\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of edge_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Wires'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" >\r\n        <tr>\r\n          <td  align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Wire ID<input type=\"checkbox\" style=\"float:right\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" *ngFor=\"let name of wire_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></td> \r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p4 }\" >\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of wire_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Faces'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" >\r\n        <tr>\r\n          <td  align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Face ID<input type=\"checkbox\" style=\"float:right\" id=\"checkface\" [checked]=\"checkface\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" *ngFor=\"let name of face_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></td> \r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p5 }\" >\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of face_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Objs'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" class=\"table_ojbs\" >\r\n        <tr>\r\n          <td name=\"Number\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Object ID<input type=\"checkbox\" style=\"float:right\" id=\"checkobj\" [checked]=\"checkobj\" (click)=\"checkbox()\"></div></td>\r\n          <td  align=center width=\"180px\" *ngFor=\"let name of obj_name\" ><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" (click)=\"checkbox()\"></div></td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p6 } \" class=\"table_ojbs\" >\r\n        <tr>\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of obj_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolwindowComponent = /** @class */ (function (_super) {
    __extends(ToolwindowComponent, _super);
    function ToolwindowComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.Visible = "Objs";
        _this.scene = _this.dataService.getScene();
        _this.renderer = _this.dataService.getRenderer();
        _this.camera = _this.dataService.getCamera();
        _this.selectedVisible = false;
        _this.attribute = [];
        _this.selectObj = [];
        _this.checkname = [];
        _this.myElement = myElement;
        return _this;
    }
    ToolwindowComponent.prototype.ngOnInit = function () {
        this.model = this.dataService.getGsModel();
        this.Visible = this.dataService.visible;
        this.updateModel();
    };
    ToolwindowComponent.prototype.notify = function (message) {
        if (message == "model_update" && this.scene) {
            //this.updateModel();
            this.ngOnInit();
        }
        this.selectObj = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            for (var n = 0; n < this.scene.children.length; n++) {
                if (this.scene.children[n].type === "Scene") {
                    if (this.dataService.selecting[i].uuid === this.scene.children[n].children[0].uuid) {
                        this.selectObj.push(this.scene.children[n].children[0].parent);
                    }
                }
            }
        }
        if (this.selectedVisible == true) {
            if (this.Visible === "Objs")
                this.objectcheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Points")
                this.pointcheck();
        }
    };
    ToolwindowComponent.prototype.updateModel = function () {
        if (this.model !== undefined) {
            try {
                this.scene_and_maps = this.dataService.getscememaps();
                this.object(this.Visible);
                this.getvertices();
            }
            catch (ex) {
                console.error("Error displaying model:", ex);
            }
        }
    };
    ToolwindowComponent.prototype.getpoints = function () {
        var attrubtepoints = [];
        this.point_name = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.points_map !== null && this.scene_and_maps.points_map.size !== 0 && this.scene_and_maps.points_map !== undefined) {
                var point_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].points);
                if (point_attribs.length !== 0) {
                    for (var j = 0; j < point_attribs.length; j++) {
                        this.point_name.push(point_attribs[0].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.points_map.size; i++) {
                    var points = this.model.getGeom().getPoint(i);
                    var label = points.getLabel();
                    var verts_xyz = points.getLabelCentroid();
                    var attributepoint = [];
                    if (verts_xyz !== undefined) {
                        attributepoint.id = label;
                        attributepoint.x = verts_xyz[0];
                        attributepoint.y = verts_xyz[1];
                        attributepoint.z = verts_xyz[2];
                        if (point_attribs.length !== 0) {
                            for (var j = 0; j < point_attribs.length; j++) {
                                attributepoint[j] = points.getAttribValue(point_attribs[j]);
                            }
                        }
                        attrubtepoints.push(attributepoint);
                    }
                }
            }
        }
        return attrubtepoints;
    };
    ToolwindowComponent.prototype.getvertices = function () {
        var attributevertix = [];
        var points = this.getpoints();
        this.vertex_name = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.vertices_map !== null && this.scene_and_maps.vertices_map.size !== 0 && this.scene_and_maps.vertices_map !== undefined) {
                var vertex_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].vertices);
                if (vertex_attribs.length !== 0) {
                    for (var n = 0; n < vertex_attribs.length; n++) {
                        this.vertex_name.push(vertex_attribs[n].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.vertices_map.size; i++) {
                    var path = this.scene_and_maps.vertices_map.get(i);
                    var vertices = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = vertices.getLabel();
                    var verts_xyz = vertices.getLabelCentroid();
                    var attributes = [];
                    for (var j = 0; j < points.length; j++) {
                        if (points[j].x === verts_xyz[0] && points[j].y === verts_xyz[1] && points[j].z === verts_xyz[2]) {
                            attributes.pointid = points[j].id;
                        }
                    }
                    attributes.vertixlabel = label;
                    attributes.path = path;
                    if (vertex_attribs.length !== 0) {
                        for (var j = 0; j < vertex_attribs.length; j++) {
                            //attributes[j]=vertices.getAttribValue(vertex_attribs[j]);
                        }
                    }
                    attributevertix.push(attributes);
                }
                this.dataService.addattrvertix(attributevertix);
            }
        }
        return attributevertix;
    };
    ToolwindowComponent.prototype.getedges = function () {
        var attributeedge = [];
        this.edge_name = [];
        var edgelable = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.edges_map !== null && this.scene_and_maps.edges_map.size !== 0 && this.scene_and_maps.edges_map !== undefined) {
                var edge_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].edges);
                if (edge_attribs.length !== 0) {
                    for (var j = 0; j < edge_attribs.length; j++) {
                        this.edge_name.push(edge_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.edges_map.size; i++) {
                    var path = this.scene_and_maps.edges_map.get(i);
                    var edge = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = edge.getLabel();
                    attributes.label = label;
                    if (edgelable.indexOf(label) === -1) {
                        edgelable.push(label);
                        if (edge_attribs.length !== 0) {
                            for (var j = 0; j < edge_attribs.length; j++) {
                                //attributes[j]=edge.getAttribValue(edge_attribs[j]);
                            }
                        }
                        attributeedge.push(attributes);
                    }
                }
            }
        }
        return attributeedge;
    };
    ToolwindowComponent.prototype.getwires = function () {
        var attributewire = [];
        this.wire_name = [];
        var wirelabel = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.wires_map !== null && this.scene_and_maps.wires_map.size !== 0 && this.scene_and_maps.wires_map !== undefined) {
                var wire_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].wires);
                if (wire_attribs.length !== 0) {
                    for (var j = 0; j < wire_attribs.length; j++) {
                        this.wire_name.push(wire_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.wires_map.size; i++) {
                    var path = this.scene_and_maps.wires_map.get(i);
                    var wire = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = wire.getLabel();
                    attributes.label = label;
                    if (wirelabel.indexOf(label) === -1) {
                        wirelabel.push(label);
                        if (wire_attribs.length !== 0) {
                            for (var j = 0; j < wire_attribs.length; j++) {
                                attributes[j] = wire.getAttribValue(wire_attribs[j]);
                            }
                        }
                        attributewire.push(attributes);
                    }
                }
            }
        }
        return attributewire;
    };
    ToolwindowComponent.prototype.getfaces = function () {
        var attributeface = [];
        this.face_name = [];
        var facelabel = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.faces_map !== null && this.scene_and_maps.faces_map.size !== 0 && this.scene_and_maps.faces_map !== undefined) {
                var face_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].faces);
                if (face_attribs.length !== 0) {
                    for (var j = 0; j < face_attribs.length; j++) {
                        this.face_name.push(face_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                    var path = this.scene_and_maps.faces_map.get(i);
                    var face = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = face.getLabel();
                    attributes.label = label;
                    if (facelabel.indexOf(label) === -1) {
                        facelabel.push(label);
                        if (face_attribs.length !== 0) {
                            for (var j = 0; j < face_attribs.length; j++) {
                                attributes[j] = face.getAttribValue(face_attribs[j]);
                            }
                        }
                        attributeface.push(attributes);
                    }
                }
            }
        }
        return attributeface;
    };
    ToolwindowComponent.prototype.getoject = function () {
        var attributeobject = [];
        this.obj_name = [];
        this.attrib_name = [];
        var atrib = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.faces_map !== null && this.scene_and_maps.faces_map.size !== 0 && this.scene_and_maps.faces_map !== undefined) {
                var obj_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].objs);
                if (obj_attribs.length !== 0) {
                    for (var j = 0; j < obj_attribs.length; j++) {
                        this.obj_name.push(obj_attribs[j].getName());
                        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                            var path = this.scene_and_maps.faces_map.get(i);
                            var obj = this.model.getGeom().getObj(path.id);
                            atrib[j] = obj.getAttribValue(obj_attribs[j]);
                            this.attrib_name.push(atrib[j]);
                        }
                    }
                }
                for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                    var path = this.scene_and_maps.faces_map.get(i);
                    if (i === 0 || path.id !== this.scene_and_maps.faces_map.get(i - 1).id) {
                        var attribute = [];
                        var label = "o" + path.id;
                        attribute.label = label;
                        for (var j = 0; j < obj_attribs.length; j++) {
                            var obj = this.model.getGeom().getObj(path.id);
                            attribute[j] = obj.getAttribValue(obj_attribs[j]);
                        }
                        attributeobject.push(attribute);
                    }
                }
            }
        }
        return attributeobject;
    };
    ToolwindowComponent.prototype.getchildren = function () {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    };
    ToolwindowComponent.prototype.getscenechildren = function () {
        var scenechildren = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    scenechildren.push(this.scene.children[n].children[i]);
                }
            }
        }
        return scenechildren;
    };
    ToolwindowComponent.prototype.point = function (Visible) {
        this.Visible = "Points";
        this.attribute = this.getpoints();
        if (this.selectedVisible == true) {
            this.pointcheck();
        }
        if (this.dataService.checkpointid == undefined) {
            this.dataService.checkpointid = false;
        }
        else {
            this.checkpointid = this.dataService.checkpointid;
        }
        if (this.dataService.checkX == undefined) {
            this.dataService.checkX = false;
        }
        else {
            this.checkX = this.dataService.checkX;
        }
        if (this.dataService.checkY == undefined) {
            this.dataService.checkY = false;
        }
        else {
            this.checkY = this.dataService.checkY;
        }
        if (this.dataService.checkZ == undefined) {
            this.dataService.checkZ = false;
        }
        else {
            this.checkZ = this.dataService.checkZ;
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
    };
    ToolwindowComponent.prototype.pointcheck = function () {
        this.attribute = [];
        var attributes = this.pointtovertix();
        var points = this.getpoints();
        for (var i = 0; i < points.length; i++) {
            for (var j = 0; j < attributes.length; j++) {
                if (points[i].id === attributes[j].pointid && this.attribute.indexOf(points[i]) === -1) {
                    this.attribute.push(points[i]);
                }
            }
        }
    };
    ToolwindowComponent.prototype.pointtovertix = function () {
        var attributes = [];
        var vertices = this.getvertices();
        var selecting = this.dataService.getselecting();
        var char;
        var labels = [];
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < vertices.length; j++) {
                    if (selecting[i]["id"] === vertices[j].pointid && attributes.indexOf(vertices[j]) == -1) {
                        attributes.push(vertices[j]);
                    }
                    if (selecting[i]["type"] === "All edges") {
                        var edge = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var verts = edge.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All wires") {
                        var wire = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var verts = wire.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All faces") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var verts = face.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All objs") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            var verts = faces[f].getVertices();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === vertices[j].vertixlabel && this.attribute.indexOf(vertices[j]) == -1) {
                                    attributes.push(vertices[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
        return attributes;
    };
    ToolwindowComponent.prototype.vertice = function (Visible) {
        this.Visible = "Vertices";
        this.attribute = this.getvertices();
        if (this.selectedVisible == true) {
            this.verticecheck();
        }
        if (this.dataService.checkvertixid == undefined) {
            this.dataService.checkvertixid = false;
        }
        else {
            this.vertixid = this.dataService.checkvertixid;
        }
        if (this.dataService.pointid == undefined) {
            this.dataService.pointid = false;
        }
        else {
            this.pointid = this.dataService.pointid;
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
    };
    ToolwindowComponent.prototype.verticecheck = function () {
        this.attribute = this.pointtovertix();
    };
    ToolwindowComponent.prototype.edge = function (Visible) {
        this.Visible = "Edges";
        this.attribute = [];
        this.attribute = this.getedges();
        if (this.selectedVisible == true) {
            this.edgecheck();
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
    };
    ToolwindowComponent.prototype.edgecheck = function () {
        this.attribute = [];
        var edges = this.getedges();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < edges.length; j++) {
                    if (selecting[i].type === "All edges") {
                        if (selecting[i]["id"].indexOf(edges[j].label) > -1) {
                            this.attribute.push(edges[j]);
                        }
                    }
                    if (selecting[i]["type"] === "All faces") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var verts = face.getEdges();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === edges[j].label && this.attribute.indexOf(edges[j]) == -1) {
                                this.attribute.push(edges[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All objs") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            var verts = faces[f].getEdges();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === edges[j].label && this.attribute.indexOf(edges[j]) == -1) {
                                    this.attribute.push(edges[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.wire = function (Visible) {
        this.Visible = "Wires";
        this.attribute = [];
        this.attribute = this.getwires();
        if (this.selectedVisible == true) {
            this.wirecheck();
        }
        this.dataService.visible = this.Visible;
    };
    ToolwindowComponent.prototype.wirecheck = function () {
        this.attribute = [];
        var wires = this.getwires();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < wires.length; j++) {
                    if (selecting[i]["id"] === wires[j].label) {
                        this.attribute.push(wires[j]);
                    }
                    if (selecting[i]["type"] === "All objs") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var wireses = face.getObj().getWires();
                        for (var w = 0; w < wireses.length; w++) {
                            var label = wireses[w].getLabel();
                            if (label === wires[j].label && this.attribute.indexOf(wires[j]) == -1) {
                                this.attribute.push(wires[j]);
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.face = function (Visible) {
        this.Visible = "Faces";
        this.attribute = [];
        this.attribute = this.getfaces();
        if (this.selectedVisible == true) {
            this.facecheck();
        }
        if (this.dataService.checkface == undefined) {
            this.dataService.checkface = false;
        }
        else {
            this.checkface = this.dataService.checkface;
        }
        for (var n = 0; n < this.face_name.length; n++) {
            if (this.dataService.checkname[n] === undefined) {
                this.dataService.checkname[n] = false;
            }
            /*else{
              this.face_name[n]=this.dataService.checkname[n];
            }*/
        }
    };
    ToolwindowComponent.prototype.facecheck = function () {
        this.attribute = [];
        var faces = this.getfaces();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < faces.length; j++) {
                    if (selecting[i]["id"] === faces[j].label) {
                        this.attribute.push(faces[j]);
                    }
                    if (selecting[i]["type"] === "All objs") {
                        var face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        var faceses = face.getObj().getFaces();
                        for (var f = 0; f < faceses.length; f++) {
                            var label = faceses[f].getLabel();
                            if (label === faces[j].label && this.attribute.indexOf(faces[j]) == -1) {
                                this.attribute.push(faces[j]);
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.object = function (Visible) {
        this.Visible = "Objs";
        this.attribute = [];
        this.attribute = this.getoject();
        if (this.selectedVisible == true) {
            this.objectcheck();
        }
        if (this.dataService.checkobj == undefined) {
            this.dataService.checkobj = false;
        }
        else {
            this.checkobj = this.dataService.checkobj;
        }
        this.dataService.visible = this.Visible;
    };
    ToolwindowComponent.prototype.objectcheck = function () {
        this.attribute = [];
        var object = this.getoject();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < object.length; j++) {
                    if (selecting[i]["id"] === object[j].label) {
                        this.attribute.push(object[j]);
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.changeselected = function () {
        this.selectedVisible = !this.selectedVisible;
        if (this.selectedVisible) {
            if (this.Visible === "Points")
                this.pointcheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Objs")
                this.objectcheck();
        }
        else {
            if (this.Visible === "Points")
                this.point(this.Visible);
            if (this.Visible === "Vertices")
                this.vertice(this.Visible);
            if (this.Visible === "Edges")
                this.edge(this.Visible);
            if (this.Visible === "Wires")
                this.wire(this.Visible);
            if (this.Visible === "Faces")
                this.face(this.Visible);
            if (this.Visible === "Objs")
                this.object(this.Visible);
        }
    };
    ToolwindowComponent.prototype.Onselect = function (datascale) {
        if (this.Visible === "Points") {
            var point = [];
            point.label = datascale.id;
            point.id = datascale.id;
            point.path = datascale.id;
            point.type = "All points";
            point.label_xyz = [datascale.x, datascale.y, datascale.z];
            var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](point.label_xyz[0], point.label_xyz[1], point.label_xyz[2]));
            var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
            if (this.dataService.pointsize !== undefined) {
                pointsmaterial.size = this.dataService.pointsize;
            }
            var points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
            points.userData.id = point.id;
            points["material"].needsUpdate = true;
            points.name = "selects";
            this.scene.add(points);
            this.renderer.render(this.scene, this.camera);
            this.dataService.addclickshow(point);
        }
        if (this.Visible === "Vertices") {
            var vertice = [];
            var path = datascale.path;
            var vertices = this.model.getGeom().getTopo(path);
            var label = vertices.getLabel();
            var verts_xyz = vertices.getLabelCentroid();
            vertice.label = label;
            vertice.id = datascale.pointid;
            vertice.path = datascale.path;
            vertice.type = "All points";
            vertice.label_xyz = [verts_xyz[0], verts_xyz[1], verts_xyz[2]];
            var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
            var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
            if (this.dataService.pointsize !== undefined) {
                pointsmaterial.size = this.dataService.pointsize;
            }
            var points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
            points.userData.id = vertice.id;
            points["material"].needsUpdate = true;
            points.name = "selects";
            this.scene.add(points);
            this.renderer.render(this.scene, this.camera);
            this.dataService.addclickshow(vertice);
        }
        /*if(this.Visible==="Vertices"){
          var vertice:any=[];
          const path: gs.ITopoPathData=datascale.path;
          const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
          const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          vertice.label=label;
          vertice.id=datascale.pointid;
          vertice.path=datascale.path;
          vertice.type="All points";
          vertice.label_xyz=[verts_xyz[0],verts_xyz[1],verts_xyz[2]];
          var geometry=new THREE.Geometry();
          geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
          var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
          if(this.dataService.pointsize!==undefined){
              pointsmaterial.size=this.dataService.pointsize;
          }
          const points = new THREE.Points( geometry, pointsmaterial);
          points.userData.id=vertice.id;
          points["material"].needsUpdate=true;
          points.name="selects";
          this.scene.add(points);
          this.dataService.addclickshow(vertice);
        }*/
        if (this.Visible === "Edges") {
        }
    };
    ToolwindowComponent.prototype.pointcheckbox = function () {
        var index = [];
        for (var i = 0; i < this.getpoints().length; i++) {
            if (this.dataService.selecting.length !== 0) {
                for (var j = 0; j < this.dataService.selecting.length; j++) {
                    if (this.dataService.selecting[j].type === "All points") {
                        var label = "";
                        if (this.getpoints()[i].id === this.dataService.selecting[j]["id"]) {
                            if (document.getElementById("X")["checked"] === true) {
                                label = label.concat("X:", this.getpoints()[i].x, '\n');
                            }
                            if (document.getElementById("Y")["checked"] === true) {
                                label = label.concat("Y:", this.getpoints()[i].y, '\n');
                            }
                            if (document.getElementById("Z")["checked"] === true) {
                                label = label.concat("Z:", this.getpoints()[i].z, '\n');
                            }
                            for (var n = 0; n < this.point_name.length; n++) {
                                if (document.getElementById(this.point_name[n])["checked"] == true) {
                                    label = label.concat(this.point_name[n], ":", this.getpoints()[i][n]);
                                }
                            }
                            //console.log(label);
                            this.dataService.addlabel(label);
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.checkbox = function () {
        if (this.Visible === "Points") {
            this.dataService.addgetpoints(this.getpoints());
            this.dataService.checkX = document.getElementById("X")["checked"];
            this.dataService.checkY = document.getElementById("Y")["checked"];
            this.dataService.checkZ = document.getElementById("Z")["checked"];
            this.dataService.checkpointid = document.getElementById("id")["checked"];
            for (var n = 0; n < this.point_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.point_name[n])["checked"];
            }
            this.dataService.addpointname(this.point_name);
        }
        if (this.Visible === "Vertices") {
            this.dataService.addgetpoints(this.getvertices());
            this.dataService.checkvertixid = document.getElementById("vertixid")["checked"];
            this.dataService.pointid = document.getElementById("pointid")["checked"];
            for (var n = 0; n < this.vertex_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.vertex_name[n])["checked"];
            }
            this.dataService.addpointname(this.vertex_name);
        }
        if (this.Visible === "Edges") {
            this.dataService.addgetpoints(this.getedges());
            this.dataService.checkedgeid = document.getElementById("edgeid")["checked"];
            for (var n = 0; n < this.edge_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.edge_name[n])["checked"];
            }
            this.dataService.addpointname(this.edge_name);
        }
        if (this.Visible === "Faces") {
            this.dataService.addgetpoints(this.getfaces());
            this.dataService.checkface = document.getElementById("checkface")["checked"];
            for (var n = 0; n < this.face_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.face_name[n])["checked"];
            }
            this.dataService.addpointname(this.face_name);
        }
        if (this.Visible === "Objs") {
            this.dataService.addgetpoints(this.getoject());
            this.dataService.checkobj = document.getElementById("checkobj")["checked"];
            for (var n = 0; n < this.obj_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.obj_name[n])["checked"];
            }
            this.dataService.addpointname(this.obj_name);
        }
    };
    ToolwindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-toolwindow',
            template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */]])
    ], ToolwindowComponent);
    return ToolwindowComponent;
}(__WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin:0px;\r\n  overflow: hidden;\r\n  color: white;\r\n  font-family:sans-serif;\r\n}\r\n#container-top-right-resize { top: 0px; right: 0px; }\r\n#shownumber{\r\n  position: absolute;\r\n  float: right;\r\n  color:black;\r\n  right: 0px;\r\n  width: 115px;\r\n  bottom: 0px;\r\n  color:#395d73;\r\n  font-family:sans-serif;\r\n}\r\n/*#rotating{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 0px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#paning{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 25px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zooming{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n\r\n/*#imagery{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n\r\n#zoomingfit{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#selecting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 35px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#points{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 70px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertices{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 95px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edges{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 120px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wires{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 145px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#faces{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 170px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#objects{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 195px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#setting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n\r\n\r\n.selected{\r\n  color: grey;\r\n\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n\r\n.cursor {\r\n\r\n}\r\n\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"  \r\n    (mousemove)=\"onDocumentMouseMove($event)\" \r\n    (mousedown)=\"mousedown($event)\"\r\n    (mouseup)=\"mouseup($event)\"\r\n    (click)=\"render(this)\"\r\n\t\t(click)=\"onDocumentMouseDown($event)\">\r\n    <div *ngIf=\"_updatemodel === false\" style=\"position:absolute;color:red;margin-top: 50px;left:40%;width: auto;text-align: center;font-family:sans-serif;font-size: 14px;background-color: white;\">Error displaying model:{{text}}</div>\r\n    <div *ngIf=\"_modelshow === false\" style=\"position:absolute;color:red;margin-top: 50px;left:40%;width: auto;text-align: center;font-family:sans-serif;font-size: 14px;background-color: white;\">Model or Scene not defined.</div>\r\n\r\n\r\n    <!-- (mousemove)=\"requestanimate()\" \r\n    (click)=\"requestanimate()\" -->\r\n\r\n    <!-- (window:resize)=\"onResize($event)\" -->\r\n\r\n\t\r\n  \t\t<!-- <button id=\"rotating\" \r\n  \t\t\t[class.visible]=\"Visible === 'rotate'\" \r\n  \t\t\t(click)=\"rotate()\">\r\n  \t\t\t<i class=\"fa fa-refresh\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"paning\"  \r\n  \t\t\t[class.visible]=\"Visible === 'pan'\" \r\n  \t\t\t(click)=\"pan()\">\r\n  \t\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"zooming\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoom'\" \r\n  \t\t\t(click)=\"Visible='zoom'\">\r\n  \t\t\t<i class=\"fa fa-search\"></i>\r\n  \t\t</button>-->\r\n  \t\t\r\n  \t\t<button id=\"zoomingfit\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoomfit'\" \r\n  \t\t\t(click)=\"zoomfit()\">\r\n  \t\t\t<i class=\"fa fa-arrows-alt\"></i>\r\n  \t\t</button> \r\n  \t\t\r\n  \t\t<!-- <button id=\"selecting\" [class.visible]=\"Visible === 'select'\" (click)= \"select($event, Visible)\" ><i class=\"fa fa-mouse-pointer\"></i></button> -->\r\n  \t\t\r\n  \t\t<!-- <button id=\"setting\" [class.selected]=\"settingVisible\" (click)= \"setting(settingVisible)\"><i class=\"fa fa-cog\"></i></button> -->\r\n\r\n      <button id=\"selecting\" [class.selected]=\"seVisible\" (click)= \"select(seVisible)\" ><i class=\"fa fa-mouse-pointer\"></i></button>\r\n      <div id=\"shownumber\">\r\n        <tr>\r\n        <td  align=left style=\"width: 60px;\">Triangles&nbsp;&nbsp;</td>\r\n        <td  align=left style=\"width: 10px;\">{{renderer.info.render.faces}}</td>\r\n        </tr>\r\n        <tr>\r\n        <td  align=left style=\"width: 60px;\">Lines</td>\r\n        <td  align=left style=\"width: 10px;\">{{LineNo}}</td>\r\n        </tr>\r\n      </div>\r\n\r\n      <!-- <button id=\"imagery\"  \r\n        [class.selected]=\"imVisible\" (click)=\"leaflet()\">I\r\n      </button> -->\r\n      \t\r\n      \t<!--setting-->\r\n      \t\r\n \t\t<!-- <app-setting *ngIf=\"settingVisible == true\"></app-setting> -->\r\n    <div *ngIf=\"seVisible == true\">\r\n        <button id=\"points\" [class.selectvisible]=\"SelectVisible === 'Points'\" (click)=\"pointselect(SelectVisible)\">P</button>\r\n        <button id=\"vertices\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\">V</button>\r\n        <button id=\"edges\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\">E</button>\r\n        <button id=\"wires\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\">W</button>\r\n        <button id=\"faces\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\">F</button>\r\n        <button id=\"objects\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\">O</button>\r\n      </div>\r\n</div>\r\n\r\n\r\n\t\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as L from 'leaflet';
var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.textlabels = [];
        _this.starsGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        _this.seVisible = false;
        _this.imVisible = false;
        _this.SelectVisible = 'Objs';
        _this.settingVisible = false;
        _this.LineNo = 0;
        _this._updatemodel = true;
        _this._modelshow = true;
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        var container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        var width = container.offsetWidth; //container.clientWidth;
        var height = container.offsetHeight; //container.clientHeight;
        var scene = this.dataService.getScene(width, height);
        var renderer = this.dataService.getRenderer();
        var camera = this.dataService.getCamera();
        var controls = this.dataService.getControls();
        container.appendChild(renderer.domElement);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.width = width;
        this.height = height;
        this.updateModel();
        // todo: check and refactor what is required?
        this.selecting = this.dataService.getselecting(); // todo: should this be in the data service??
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.raycaster.linePrecision = 0.05;
        this.scenechildren = this.dataService.getscenechild();
        this.dataService.SelectVisible = this.SelectVisible;
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](0.1);
        //var geometry = new THREE.CircleGeometry( 5 );
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00ff00, transparent: true, opacity: 0.5 });
        this.sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.sphere.visible = false;
        this.sphere.name = "sphereInter";
        this.scene.add(this.sphere);
        var self = this;
        controls.addEventListener('change', function () { self.render(self); });
        for (var i = 0; i < this.getchildren().length; i++) {
            this.getchildren()[i]["material"].transparent = false;
        }
        this.dataService.addraycaster(this.raycaster);
        this.addgrid();
        self.renderer.render(self.scene, self.camera);
    };
    //
    //  checks if the data service has a data and calls update function for the viewer
    //
    ViewerComponent.prototype.notify = function (message) {
        if (message == "model_update" && this.scene) {
            this.updateModel();
        }
    };
    ViewerComponent.prototype.animate = function (self) {
        self.raycaster.setFromCamera(self.mouse, self.camera);
        self.scenechildren = self.dataService.getscenechild();
        var intersects = self.raycaster.intersectObjects(self.scenechildren);
        for (var i = 0; i < self.scenechildren.length; i++) {
            var currObj = self.scenechildren[i];
            if (self.dataService.getSelectingIndex(currObj.uuid) < 0) {
                if (intersects[0] != undefined && intersects[0].object.uuid == currObj.uuid) {
                    self.sphere.visible = true;
                    self.sphere.position.copy(intersects[0].point);
                }
                else {
                    self.sphere.visible = false;
                }
            }
        }
        for (var i = 0; i < self.textlabels.length; i++) {
            self.textlabels[i].updatePosition();
        }
        if (self.dataService.clickshow !== undefined && self.clickatt !== self.dataService.clickshow) {
            self.clickatt = self.dataService.clickshow;
            self.clickshow();
        }
        self.renderer.render(self.scene, self.camera);
    };
    ViewerComponent.prototype.render = function (self) {
        for (var i = 0; i < self.textlabels.length; i++) {
            self.textlabels[i].updatePosition();
        }
        if (self.dataService.clickshow !== undefined && self.clickatt !== self.dataService.clickshow) {
            self.clickatt = self.dataService.clickshow;
            self.clickshow();
        }
        //self.onDocumentMouseDown();
        self.renderer.render(self.scene, self.camera);
    };
    /// clears all children from the scene
    ViewerComponent.prototype.clearScene = function () {
        /// remove children from scene
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
            if (this.scene.children[i].name == "selects") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "selects") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        for (var i = 0; i < this.textlabels.length; i++) {
            this.removeTextLabel(this.textlabels[i]["id"]);
            i = i - 1;
        }
    };
    ViewerComponent.prototype.onResize = function () {
        var container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            this.renderer.setSize(this.width, this.height);
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
        }
        // }
    };
    //
    // update mode
    // todo: optimize
    // 
    ViewerComponent.prototype.updateModel = function () {
        this._model = this.dataService.getGsModel();
        if (!this._model || !this.scene) {
            console.warn("Model or Scene not defined.");
            this._modelshow = false;
            return;
        }
        try {
            this._updatemodel = true;
            this._modelshow = true;
            this.scene_and_maps = this.dataService.getscememaps();
            var scene_data = this.scene_and_maps.scene;
            this.clearScene();
            var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ObjectLoader"]();
            // loading data
            var objectData = loader.parse(scene_data);
            this.seVisible = false;
            this.imVisible = false;
            this.LineNo = 0;
            // preprocessing
            if (objectData.children !== undefined) {
                var radius = 0;
                for (var i = 0; i < objectData.children.length; i++) {
                    var chd = objectData.children[i];
                    chd["material"].needsUpdate = true;
                    chd["material"].transparent = true;
                    chd["material"].blending = 1;
                    if (chd.name === "All faces" || chd.name === "All wires" || chd.name === "All edges" || chd.name === "All vertices" ||
                        chd.name === "Other lines" || chd.name === "All points") {
                        chd["material"].transparent = false;
                        chd["geometry"].computeVertexNormals();
                        chd["geometry"].computeBoundingBox();
                        chd["geometry"].computeBoundingSphere();
                        if (chd.name === "All edges") {
                            this.basicMat = chd["material"].color;
                        }
                        else if (chd.name === "Other lines") {
                            this.basicMat = chd["material"].color;
                        }
                        if (chd.type === "LineSegments" && chd["geometry"].index.count !== undefined) {
                            this.LineNo = this.LineNo + chd["geometry"].index.count;
                        }
                    }
                    if (chd["geometry"] != undefined && chd["geometry"].boundingSphere.radius !== null) {
                        if (chd["geometry"].boundingSphere.radius > radius) {
                            radius = chd["geometry"].boundingSphere.radius;
                            this.center = chd["geometry"].boundingSphere.center;
                        }
                    }
                }
            }
            // setting controls
            this.controls.target.set(this.center.x, this.center.y, this.center.z);
            this.controls.update();
            // adding the object to the scene
            this.scene.add(objectData);
            this.render(this);
            this.dataService.getpoints = [];
        }
        catch (ex) {
            console.error("Error displaying model:", ex);
            this._updatemodel = false;
            this.text = ex;
        }
    };
    ViewerComponent.prototype.getMaterial = function (name) {
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        var context = canvas.getContext('2d');
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, canvas.height / 2);
        context.font = "Bold  100px sans-serif";
        var texture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["SpriteMaterial"]({ map: texture, color: 0xffffff });
        return spriteMaterial;
    };
    ViewerComponent.prototype.getchildren = function () {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    };
    ViewerComponent.prototype.clickshow = function () {
        var label = this.clickatt["label"];
        var id = this.clickatt["id"];
        var label_xyz = this.clickatt["label_xyz"];
        var path = this.clickatt["path"];
        this.addTextLabel(label, label_xyz, id, path, "All points");
    };
    ViewerComponent.prototype.select = function (seVisible) {
        event.stopPropagation();
        this.seVisible = !this.seVisible;
        if (this.seVisible) {
            if (this.SelectVisible === "Objs")
                this.objectselect(this.SelectVisible);
            if (this.SelectVisible === "Faces")
                this.faceselect(this.SelectVisible);
            if (this.SelectVisible === "Edges")
                this.edgeselect(this.SelectVisible);
            if (this.SelectVisible === "Vertices")
                this.verticeselect(this.SelectVisible);
            if (this.SelectVisible === "Points")
                this.pointselect(this.SelectVisible);
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = true;
            }
        }
        else {
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = false;
                if (this.getchildren()[i].name == "All edges") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
                else if (this.getchildren()[i].name == "Other lines") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
            }
        }
    };
    ViewerComponent.prototype.objectselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Objs";
        this.dataService.visible = "Objs";
        document.getElementById("object").style.color = null;
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        var objsvisibel = true;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                if (children[i]["geometry"].attributes.position.array.length !== 0) {
                    children[i]["material"].opacity = 0.3;
                    children[i].name = "All objs";
                    scenechildren.push(children[i]);
                }
                else {
                    objsvisibel = false;
                }
            }
            if (children[i].name === "All wires") {
                if (objsvisibel === true) {
                    children[i]["material"].opacity = 0;
                }
                else {
                    children[i]["material"].opacity = 0.6;
                    scenechildren.push(children[i]);
                }
            }
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0;
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    ViewerComponent.prototype.faceselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Faces";
        this.dataService.visible = "Faces";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.3;
                children[i].name = "All faces";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    ViewerComponent.prototype.wireselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Wires";
        var lineprecision = this.raycaster.linePrecision;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](lineprecision * 2);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires") {
                children[i]["material"].opacity = 0.6;
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    ViewerComponent.prototype.edgeselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Edges";
        var lineprecision = this.raycaster.linePrecision;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](lineprecision * 2);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        var edgevisible = true;
        for (var i = 0; i < children.length; i++) {
            children[i]["material"].transparent = true;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                if (children[i].name === "All edges") {
                    if (children[i]["geometry"].attributes.position.array.length !== 0) {
                        children[i]["material"].opacity = 0.3;
                        children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                        scenechildren.push(children[i]);
                    }
                    else {
                        edgevisible = false;
                    }
                }
                else {
                    if (children[i]["geometry"].attributes.position.array.length !== 0) {
                        children[i]["material"].opacity = 0.3;
                        children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                        scenechildren.push(children[i]);
                    }
                }
            }
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    ViewerComponent.prototype.verticeselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Vertices";
        var pointradius = this.dataService.pointradius;
        ;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](pointradius / 4);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = "grey";
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            /*if(children[i].name==="All vertices"){
              scenechildren.push(children[i]);
            }*/
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
                children[i]["material"].opacity = 1;
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    ViewerComponent.prototype.pointselect = function (SelectVisible) {
        /*event.stopPropagation();
        this.verticeselect("Vertices");
        this.SelectVisible="Points";
        this.dataService.SelectVisible=this.SelectVisible;*/
        event.stopPropagation();
        this.SelectVisible = "Points";
        var pointradius = this.dataService.pointradius;
        ;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](pointradius / 4);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = "grey";
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices") {
                children[i]["material"].opacity = 1;
            }
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    };
    //
    //  events
    //
    ViewerComponent.prototype.mousedown = function ($event) {
        this.animate(this);
        this.mDownTime = (new Date()).getTime();
    };
    ViewerComponent.prototype.mouseup = function ($event) {
        this.mUpTime = (new Date()).getTime();
    };
    ViewerComponent.prototype.onDocumentMouseMove = function (event) {
        this.onResize();
        if (this.seVisible === true) {
            this.animate(this);
            this.mouse.x = (event.offsetX / this.width) * 2 - 1;
            this.mouse.y = -(event.offsetY / this.height) * 2 + 1;
        }
        else {
            this.render(this);
        }
    };
    ViewerComponent.prototype.addgrid = function () {
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "GridHelper") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        // todo: change grid -> grid_value
        if (this.dataService.grid) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_1_three__["GridHelper"](100, 100);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(0, 0, 0);
            this.scene.add(gridhelper);
            this.dataService.centerx = 0;
            this.dataService.centery = 0;
            this.dataService.centerz = 0;
        }
    };
    /// selects object from three.js scene
    ViewerComponent.prototype.onDocumentMouseDown = function (event) {
        var threshold;
        if (this.seVisible === true) {
            threshold = 100;
        }
        else {
            threshold = 0.1;
        }
        if (Math.abs(this.mDownTime - this.mUpTime) > threshold) {
            this.mDownTime = 0;
            this.mUpTime = 0;
            return;
        }
        var selectedObj, intersects;
        var select = false;
        this.scenechildren = this.dataService.getscenechild();
        this.raycaster.setFromCamera(this.mouse, this.camera);
        intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            selectedObj = intersects[0].object;
            if (this.scenechildren[0].name === "All objs") {
                var index_1 = Math.floor(intersects[0].faceIndex);
                var path_1 = this.scene_and_maps.faces_map.get(index_1);
                var face = this._model.getGeom().getTopo(path_1);
                var label = "";
                var id_1 = "o" + path_1.id;
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (getpoints !== undefined && getpoints.length !== 0) {
                    for (var i = 0; i < getpoints.length; i++) {
                        if (id_1 === getpoints[i].label) {
                            if (this.dataService.checkobj === true)
                                label = id_1;
                            for (var n = 0; n < pointname.length; n++) {
                                if (this.dataService.checkname[n] === true) {
                                    label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                }
                            }
                        }
                    }
                }
                var label_xyz = face.getLabelCentroid();
                var faces = face.getObj().getFaces();
                if (this.textlabels.length === 0) {
                    for (var n = 0; n < faces.length; n++) {
                        var verts = faces[n].getVertices();
                        var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        /*if(verts.length===4){
                          geometry.faces.push(new THREE.Face3(0,2,1));
                          geometry.faces.push(new THREE.Face3(0,3,2));
                        }else if(verts.length===3){
                          geometry.faces.push(new THREE.Face3(0,2,1));
                        }
                        var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
                        mesh["geometry"].computeVertexNormals();
                        mesh.userData.id=label;
                        mesh.name="selects";
                        this.scene.add(mesh);*/
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = id_1;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                    }
                    this.addTextLabel(label, label_xyz, label, path_1, "All objs");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id_1 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                            j = j - 1;
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id_1 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                            j = j - 1;
                        }
                    }
                    if (select == false) {
                        for (var n = 0; n < faces.length; n++) {
                            var verts = faces[n].getVertices();
                            var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = id_1;
                            line["material"].needsUpdate = true;
                            line.name = "selects";
                            this.scene.add(line);
                        }
                        this.addTextLabel(label, label_xyz, id_1, path_1, "All objs");
                    }
                }
            }
            if (this.scenechildren[0].name === "All faces") {
                var index_2 = Math.floor(intersects[0].faceIndex);
                var path_2 = this.scene_and_maps.faces_map.get(index_2);
                var face = this._model.getGeom().getTopo(path_2);
                var label = "";
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (getpoints !== undefined && getpoints.length !== 0) {
                    for (var i = 0; i < getpoints.length; i++) {
                        if (face.getLabel() === getpoints[i].label) {
                            for (var n = 0; n < pointname.length; n++) {
                                if (this.dataService.checkface === true)
                                    label = face.getLabel();
                                if (this.dataService.checkname[n] === true) {
                                    label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                }
                            }
                        }
                    }
                }
                var label_xyz = face.getLabelCentroid();
                var verts_1 = face.getVertices();
                var verts_xyz_1 = verts_1.map(function (v) { return v.getPoint().getPosition(); });
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz_1.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_1[i][0], verts_xyz_1[i][1], verts_xyz_1[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = face.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label, label_xyz, face.getLabel(), path_2, "All faces");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (face.getLabel() === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (face.getLabel() === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_1.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_1[i][0], verts_xyz_1[i][1], verts_xyz_1[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = face.getLabel();
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, face.getLabel(), path_2, "All faces");
                    }
                }
            }
            if (this.scenechildren[0].name == "All wires") {
                var index_3 = Math.floor(intersects[0].index / 2);
                var path_3 = this.scene_and_maps.wires_map.get(index_3);
                var wire = this._model.getGeom().getTopo(path_3);
                var label_1 = wire.getLabel();
                var label_xyz = wire.getLabelCentroid();
                var verts_2 = wire.getVertices();
                var verts_xyz_2 = verts_2.map(function (v) { return v.getPoint().getPosition(); });
                if (wire.isClosed()) {
                    verts_xyz_2.push(verts_xyz_2[0]);
                }
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz_2.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_2[i][0], verts_xyz_2[i][1], verts_xyz_2[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label_1;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label_1, label_xyz, label_1, path_3, "All wires");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label_1 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label_1 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_2.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_2[i][0], verts_xyz_2[i][1], verts_xyz_2[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label_1;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label_1, label_xyz, label_1, path_3, "All wires");
                    }
                }
            }
            if (this.scenechildren[0].name == "All edges") {
                var label = "";
                var index = Math.floor(intersects[0].index / 2);
                if (this.scene_and_maps.edges_map !== null && (index < this.scene_and_maps.edges_map.size || index === this.scene_and_maps.edges_map.size)) {
                    var path = this.scene_and_maps.edges_map.get(index);
                    var edge = this._model.getGeom().getTopo(path);
                    var id = edge.getLabel();
                    var label_show = id;
                    for (var i = 1; i < intersects.length; i++) {
                        if (intersects[0].distance === intersects[i].distance) {
                            index = Math.floor(intersects[i].index / 2);
                            path = this.scene_and_maps.edges_map.get(index);
                            edge = this._model.getGeom().getTopo(path);
                            id = edge.getLabel();
                            if (label_show !== id)
                                label_show = label_show + "<br/>" + id;
                        }
                    }
                    var getpoints;
                    var getpoints = this.dataService.getpoints;
                    var pointname = this.dataService.pointname;
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < getpoints.length; i++) {
                            if (edge.getLabel() === getpoints[i].label) {
                                if (this.dataService.checkedgeid === true) {
                                    label = label_show;
                                }
                                for (var n = 0; n < pointname.length; n++) {
                                    if (this.dataService.checkname[n] === true) {
                                        label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                    }
                                }
                            }
                        }
                    }
                    var label_xyz = edge.getLabelCentroid();
                    var verts_3 = edge.getVertices();
                    var verts_xyz_3 = verts_3.map(function (v) { return v.getPoint().getPosition(); });
                    if (this.textlabels.length === 0) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_3.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_3[i][0], verts_xyz_3[i][1], verts_xyz_3[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = edge.getLabel();
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, edge.getLabel(), path, "All edges");
                    }
                    else {
                        for (var j = 0; j < this.scene.children.length; j++) {
                            if (edge.getLabel() === this.scene.children[j].userData.id) {
                                select = true;
                                this.scene.remove(this.scene.children[j]);
                            }
                        }
                        for (var j = 0; j < this.textlabels.length; j++) {
                            if (edge.getLabel() === this.textlabels[j]["id"]) {
                                select = true;
                                this.removeTextLabel(this.textlabels[j]["id"]);
                            }
                        }
                        if (select == false) {
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz_3.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_3[i][0], verts_xyz_3[i][1], verts_xyz_3[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = edge.getLabel();
                            line.name = "selects";
                            this.scene.add(line);
                            this.addTextLabel(label, label_xyz, edge.getLabel(), path, "All edges");
                        }
                    }
                }
            }
            else if (this.scenechildren[0].name == "Other lines") {
                var label = "";
                var index = Math.floor(intersects[0].index / 2);
                if (this.scene_and_maps.edges_map !== null && (index < this.scene_and_maps.edges_map.size || index === this.scene_and_maps.edges_map.size)) {
                    var path = this.scene_and_maps.edges_map.get(index);
                    var edge = this._model.getGeom().getTopo(path);
                    var id = edge.getLabel();
                    label = id;
                    for (var i = 1; i < intersects.length; i++) {
                        if (intersects[0].distance === intersects[i].distance) {
                            index = Math.floor(intersects[i].index / 2);
                            path = this.scene_and_maps.edges_map.get(index);
                            edge = this._model.getGeom().getTopo(path);
                            id = edge.getLabel();
                            if (label !== id)
                                label = label + "<br/>" + id;
                        }
                    }
                    var label_xyz = edge.getLabelCentroid();
                    var verts_4 = edge.getVertices();
                    var verts_xyz_4 = verts_4.map(function (v) { return v.getPoint().getPosition(); });
                    if (this.textlabels.length === 0) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_4.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_4[i][0], verts_xyz_4[i][1], verts_xyz_4[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, label, path, "Other lines");
                    }
                    else {
                        for (var j = 0; j < this.scene.children.length; j++) {
                            if (label === this.scene.children[j].userData.id) {
                                select = true;
                                this.scene.remove(this.scene.children[j]);
                            }
                        }
                        for (var j = 0; j < this.textlabels.length; j++) {
                            if (label === this.textlabels[j]["id"]) {
                                select = true;
                                this.removeTextLabel(this.textlabels[j]["id"]);
                            }
                        }
                        if (select == false) {
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz_4.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_4[i][0], verts_xyz_4[i][1], verts_xyz_4[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = label;
                            line.name = "selects";
                            this.scene.add(line);
                            this.addTextLabel(label, label_xyz, label, path, "Other lines");
                        }
                    }
                }
            }
            if (this.scenechildren[0].name === "All points") {
                var distance = intersects[0].distanceToRay;
                var index = intersects[0].index;
                for (var i = 1; i < intersects.length; i++) {
                    if (distance > intersects[i].distanceToRay) {
                        distance = intersects[i].distanceToRay;
                        index = intersects[i].index;
                    }
                }
                var attributevertix = this.dataService.getattrvertix();
                var id = this._model.getGeom().getAllPoints()[index].getLabel();
                var label = "";
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (this.SelectVisible === "Points") {
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < getpoints.length; i++) {
                            if (id === getpoints[i].id) {
                                if (this.dataService.checkpointid === true) {
                                    label = id;
                                    for (var j = 1; j < intersects.length; j++) {
                                        if (intersects[0].distance === intersects[j].distance) {
                                            var index = intersects[j].index;
                                            var id = this._model.getGeom().getAllPoints()[index].getLabel();
                                            if (label !== id)
                                                label = label + "<br/>" + id;
                                        }
                                    }
                                }
                                if (this.dataService.checkX === true)
                                    label = label.concat('<br/>', "X:", getpoints[i].x);
                                if (this.dataService.checkY === true)
                                    label = label.concat('<br/>', "Y:", getpoints[i].y);
                                if (this.dataService.checkZ === true)
                                    label = label.concat('<br/>', "Z:", getpoints[i].z);
                                for (var n = 0; n < pointname.length; n++) {
                                    if (this.dataService.checkname[n] === true) {
                                        label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.SelectVisible === "Vertices") {
                    var pointid = "";
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < attributevertix.length; i++) {
                            if (id === attributevertix[i].pointid) {
                                pointid = id;
                                if (this.dataService.checkvertixid === true) {
                                    if (label === "")
                                        label = attributevertix[i].vertixlabel;
                                    else {
                                        label = label + "<br/>" + attributevertix[i].vertixlabel;
                                    }
                                }
                            }
                        }
                        if (this.dataService.pointid === true) {
                            if (pointid !== "") {
                                if (label === "")
                                    label = id;
                                else {
                                    label = label + "<br/>" + id;
                                }
                            }
                        }
                    }
                }
                var verts_xyz_5 = this._model.getGeom().getAllPoints()[index].getPosition(); //vertices.getPoint().getPosition();
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_5[0], verts_xyz_5[1], verts_xyz_5[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                    //pointsmaterial.sizeAttenuation=false;
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    var points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = id;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    this.addTextLabel(label, verts_xyz_5, id, id, "All points");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_5[0], verts_xyz_5[1], verts_xyz_5[2]));
                        var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                        if (this.dataService.pointsize !== undefined) {
                            pointsmaterial.size = this.dataService.pointsize;
                        }
                        var points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                        points.userData.id = id;
                        points["material"].needsUpdate = true;
                        points.name = "selects";
                        this.scene.add(points);
                        this.addTextLabel(label, verts_xyz_5, id, id, "All points");
                    }
                }
            }
            /*if(this.scenechildren[0].name === "All vertices"){
              var distance:number=intersects[ 0 ].distanceToRay;
              var index:number=intersects[ 0 ].index;
              for(var i=1;i<intersects.length;i++){
                if(distance>intersects[ i ].distanceToRay){
                  distance=intersects[ i ].distanceToRay;
                  index=intersects[ i ].index;
                }
              }
              var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
              var label:string="";
              var getpoints:Array<any>;
              var getpoints=this.dataService.getpoints;
              var pointname=this.dataService.pointname;
      
              /*var path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(index);
              var vertices: gs.IVertex = this._model.getGeom().getTopo(path) as gs.IVertex;
              var id: string = "";
              var attributevertix=this.dataService.getattrvertix();*/
            //var vertices: gs.IVertex= this._model.getGeom().getTopo(path) as gs.IVertex;
            //var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
            //console.log(vertices.getPoint().getPosition());
            /*var label:string="";
            var attributevertix=this.dataService.getattrvertix();
            console.log(attributevertix);
            for(var i=0;i<attributevertix.length;i++){
              if(vertices.getLabel()===attributevertix[i].vertixlabel){
                id=attributevertix[i].pointid;
                label=vertices.getLabel();
                break;
              }
            }
            console.log(id);
            if(id!==""){
              for(var i=0;i<attributevertix.length;i++){
                if(id===attributevertix[i].pointid){
                  var str=attributevertix[i].vertixlabel;
                  if(label!==str) label=label+"<br/>"+str;
                }
              }
            }*/
            /*const verts_xyz: gs.XYZ = vertices.getPoint().getPosition();//this._model.getGeom().getAllPoints()[index].getPosition();//vertices.getPoint().getPosition();
            console.log(verts_xyz);
            if(this.textlabels.length===0) {
              var geometry=new THREE.Geometry();
              geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
              var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
              //pointsmaterial.sizeAttenuation=false;
              if(this.dataService.pointsize!==undefined){
                pointsmaterial.size=this.dataService.pointsize;
              }
              const points = new THREE.Points( geometry, pointsmaterial);
              points.userData.id=id;
              points["material"].needsUpdate=true;
              points.name="selects";
              this.scene.add(points);
              this.addTextLabel(label,verts_xyz, id,id,"All points");
            }else{
              for(var j=0;j<this.scene.children.length;j++){
                if(id===this.scene.children[j].userData.id){
                  select=true;
                  this.scene.remove(this.scene.children[j]);
                }
              }
              for(var j=0;j<this.textlabels.length;j++){
                  if(id===this.textlabels[j]["id"]){
                    select=true;
                    this.removeTextLabel(this.textlabels[j]["id"]);
                  }
              }
              if(select==false){
                var geometry=new THREE.Geometry();
                geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
                var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
                if(this.dataService.pointsize!==undefined){
                  pointsmaterial.size=this.dataService.pointsize;
                }
                const points = new THREE.Points( geometry, pointsmaterial);
                points.userData.id=id;
                points["material"].needsUpdate=true;
                points.name="selects";
                this.scene.add(points);
                this.addTextLabel(label,verts_xyz, id,id,"All points");
              }
            }
          }*/
        }
        else {
            /*for(var i=0;i<this.dataService.sprite.length;i++){
              this.dataService.sprite[i].visible=false;
            }*/
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name == "selects") {
                    this.scene.remove(this.scene.children[i]);
                    i = i - 1;
                }
            }
            for (var i = 0; i < this.textlabels.length; i++) {
                this.removeTextLabel(this.textlabels[i]["id"]);
                i = i - 1;
            }
        }
    };
    //To add text labels just provide label text, label position[x,y,z] and its id
    ViewerComponent.prototype.addTextLabel = function (label, label_xyz, id, path, type) {
        var container = this.myElement.nativeElement.children.namedItem("container");
        var star = this.creatStarGeometry(label_xyz);
        var textLabel = this.createTextLabel(label, star, id, path, type);
        this.starsGeometry.vertices.push(star);
        this.textlabels.push(textLabel);
        this.dataService.pushselecting(textLabel);
        container.appendChild(textLabel.element);
    };
    //To remove text labels just provide its id
    ViewerComponent.prototype.removeTextLabel = function (id) {
        var i = 0;
        for (i = 0; i < this.textlabels.length; i++) {
            if (this.textlabels[i].id == id) {
                var container = this.myElement.nativeElement.children.namedItem("container");
                container.removeChild(this.textlabels[i].element);
                var index = this.starsGeometry.vertices.indexOf(this.textlabels[i].parent);
                if (index !== -1) {
                    this.starsGeometry.vertices.splice(index, 1);
                }
                break;
            }
        }
        if (i < this.textlabels.length) {
            this.textlabels.splice(i, 1);
            this.dataService.spliceselecting(i, 1);
        }
    };
    ViewerComponent.prototype.creatStarGeometry = function (label_xyz) {
        var star = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
        star.x = label_xyz[0];
        star.y = label_xyz[1];
        star.z = label_xyz[2];
        return star;
    };
    ViewerComponent.prototype.createTextLabel = function (label, star, id, path, type) {
        var div = this.createLabelDiv();
        var self = this;
        var textLabel = {
            id: id,
            path: path,
            element: div,
            parent: false,
            type: type,
            position: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0),
            setHTML: function (html) {
                this.element.innerHTML = html;
            },
            setParent: function (threejsobj) {
                this.parent = threejsobj;
            },
            updatePosition: function () {
                if (parent) {
                    //this.position.copy(this.parent);
                    this.position.copy(this.parent);
                }
                var coords2d = this.get2DCoords(this.position, self.camera);
                this.element.style.left = coords2d.x + 'px';
                this.element.style.top = coords2d.y + 'px';
            },
            get2DCoords: function (position, camera) {
                var vector = position.project(camera);
                vector.x = (vector.x + 1) / 2 * self.width;
                vector.y = -(vector.y - 1) / 2 * self.height;
                return vector;
            }
        };
        textLabel.setHTML(label);
        textLabel.setParent(star);
        return textLabel;
    };
    ViewerComponent.prototype.createLabelDiv = function () {
        var div = document.createElement("div");
        div.style.color = '#00f';
        div.style.fontFamily = '"Fira Mono", Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace';
        div.style.margin = '-5px 0 0 15px';
        div.style.pointerEvents = 'none';
        div.style.position = 'absolute';
        div.style.width = '100';
        div.style.height = '100';
        div.style.top = '-1000';
        div.style.left = '-1000';
        div.style.textShadow = "0px 0px 3px white";
        div.style.color = "black";
        return div;
    };
    ViewerComponent.prototype.zoomfit = function () {
        event.stopPropagation();
        if (this.dataService.selecting.length === 0) {
            var obj = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.getchildren().length; i++) {
                obj.children.push(this.getchildren()[i]);
            }
            var boxHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](obj);
            boxHelper["geometry"].computeBoundingBox();
            boxHelper["geometry"].computeBoundingSphere();
            var boundingSphere = boxHelper["geometry"].boundingSphere;
            var center = boundingSphere.center;
            var radius = boundingSphere.radius;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2) / 2), Math.abs(radius / Math.sin(fov / 2) / 2), Math.abs(radius / Math.sin(fov / 2) / 2));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
            this.controls.update();
        }
        else {
            var box = this.selectbox();
            var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](box["geometry"].boundingSphere.center.x, box["geometry"].boundingSphere.center.y, box["geometry"].boundingSphere.center.z);
            var radius = box["geometry"].boundingSphere.radius;
            if (radius === 0)
                radius = 1;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
            this.controls.update();
        }
    };
    ViewerComponent.prototype.selectbox = function () {
        if (this.dataService.selecting.length !== 0) {
            var select = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "selects") {
                    select.children.push(this.scene.children[i]);
                }
            }
            var box = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](select);
            box["geometry"].computeBoundingBox();
            box["geometry"].computeBoundingSphere();
            return box;
        }
    };
    ViewerComponent.prototype.setting = function (settingVisible) {
        event.stopPropagation();
        this.settingVisible = !this.settingVisible;
    };
    ViewerComponent.prototype.leaflet = function () {
        event.stopPropagation();
        this.imVisible = !this.imVisible;
        this.dataService.imVisible = this.imVisible;
        //console.log(this.dataService.imVisible);
        /*for(var i=0;i<this.scene.children.length;i++){
          if(this.scene.children[i].type!=="DirectionalLight"&&this.scene.children[i].type!=="HemisphereLight"){
            this.scene.remove(this.scene.children[i]);
          }
        }*/
        /*var mymap = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);*/
        /*let map = L.map("map").setView([38, -77], 13);
        console.log(map);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);*/
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-viewer',
            template: __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ViewerComponent);
    return ViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map