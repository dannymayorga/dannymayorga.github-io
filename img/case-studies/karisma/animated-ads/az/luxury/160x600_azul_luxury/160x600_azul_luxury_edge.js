/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'image-3',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.jpg",'0px','0px']
         },
         {
            id:'discover',
            type:'image',
            rect:['0','0','107px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_4_27x91.png",'0px','0px']
         },
         {
            id:'rethink',
            type:'image',
            rect:['10px','10px','140px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_10x26.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'butler',
            type:'image',
            rect:['0','0','118px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_21x28.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px']
         },
         {
            id:'bkgd',
            type:'image',
            rect:['0','527px','160px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-shade.png",'0px','0px']
         },
         {
            id:'logo-shadow',
            type:'image',
            rect:['0px','521px','160px','6px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-shadow.png",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['10px','535px','141px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_11x536.png",'0px','0px']
         },
         {
            id:'imagine',
            type:'image',
            rect:['17px','13px','125px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_17x28.png",'0px','0px']
         },
         {
            id:'book-btnCopy',
            type:'rect',
            rect:['10','100','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_r_text',
            type:'image',
            rect:['23px','200px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_r_text2.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'book-btnCopy',
            symbolName:'book-btn_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_image-3}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.2']
         ],
         "${_rethink}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '10px']
         ],
         "${_imagine}": [
            ["style", "top", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px']
         ],
         "${_butler}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '20px']
         ],
         "${_bkgd}": [
            ["style", "top", '527px']
         ],
         "${_image-1}": [
            ["style", "top", '-2px'],
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_GI-logo}": [
            ["style", "top", '535px'],
            ["style", "left", '10px']
         ],
         "${_book-btnCopy}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '155px']
         ],
         "${_logo-shadow}": [
            ["style", "top", '521px'],
            ["style", "left", '0px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_save45_r_text}": [
            ["style", "top", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '23px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '160px']
         ],
         "${_discover}": [
            ["style", "top", '80px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13460,
         autoPlay: true,
         timeline: [
            { id: "eid21", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 6750, duration: 6710 },
            { id: "eid10", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 2750, duration: 4953 },
            { id: "eid35", tween: [ "style", "${_rethink}", "opacity", '1', { fromValue: '0.000000'}], position: 7925, duration: 290 },
            { id: "eid47", tween: [ "style", "${_rethink}", "opacity", '0', { fromValue: '0.500000'}], position: 9500, duration: 375 },
            { id: "eid11", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 1391 },
            { id: "eid12", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 1250 },
            { id: "eid19", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 6750, duration: 6710 },
            { id: "eid6", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid8", tween: [ "style", "${_butler}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 1688 },
            { id: "eid9", tween: [ "style", "${_butler}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 891 },
            { id: "eid45", tween: [ "style", "${_save45_r_text}", "opacity", '1', { fromValue: '0.000000'}], position: 11906, duration: 1000 },
            { id: "eid20", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 1450 },
            { id: "eid5", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 2750, duration: 4953 },
            { id: "eid1", tween: [ "style", "${_imagine}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_imagine}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid4", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid43", tween: [ "style", "${_book-btnCopy}", "top", '155px', { fromValue: '155px'}], position: 10120, duration: 0 },
            { id: "eid22", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 10195, duration: 1055 }         ]
      }
   }
},
"book-btn": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cta_bg_14x177',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_14x177.png','0px','0px']
   },
   {
      id: 'cta_txt_14x1772',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_14x1772.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_bg_14x177}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_14x1772}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '134px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11250,
         autoPlay: true,
         timeline: [
            { id: "eid39", tween: [ "style", "${_cta_bg_14x177}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid38", tween: [ "style", "${_cta_txt_14x1772}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
      }
   }
},
"book-btn_1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cta_bg_12x103',
      type: 'image',
      rect: ['-10px','-100px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_12x103.png','0px','0px']
   },
   {
      id: 'cta_txt_20x110',
      type: 'image',
      rect: ['-10px','-100px','119px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_20x110.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_txt_20x110}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '9px']
         ],
         "${_cta_bg_12x103}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '43px'],
            ["style", "width", '134px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12906,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_cta_bg_12x103}", "opacity", '1', { fromValue: '0.000000'}], position: 11906, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_cta_txt_20x110}", "opacity", '1', { fromValue: '0.000000'}], position: 11906, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2738550");
