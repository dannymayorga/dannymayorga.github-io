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
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.jpg",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['45px','174px','210px','65px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_50x177.png",'0px','0px']
         },
         {
            id:'discover',
            type:'image',
            rect:['0','0','109px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_22x19.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'butler-text',
            type:'image',
            rect:['0','0','232px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_18x18.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px']
         },
         {
            id:'imagine',
            type:'image',
            rect:['20px','20px','113px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_18x18.png",'0px','0px']
         },
         {
            id:'book-btn',
            type:'rect',
            rect:['10','100','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'book-btn',
            symbolName:'book-btn'
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
         "${_imagine}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px']
         ],
         "${_GI-logo}": [
            ["style", "top", '174px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '45px']
         ],
         "${_butler-text}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '30px']
         ],
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '300px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_book-btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_discover}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid8", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid9", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid17", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid7", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid2", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_butler-text}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 1188 },
            { id: "eid22", tween: [ "style", "${_butler-text}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 891 },
            { id: "eid43", tween: [ "style", "${_GI-logo}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 },
            { id: "eid18", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid10", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid4", tween: [ "style", "${_imagine}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_imagine}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid1", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid15", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 }         ]
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
      rect: ['-10px','-100px','134px','30px','auto','auto'],
      id: 'cta_bg_12x103',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_bg_12x103.png','0px','0px']
   },
   {
      rect: ['-10px','-100px','119px','36px','auto','auto'],
      id: 'cta_txt_20x110',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_txt_20x110.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '43px'],
            ["style", "width", '134px']
         ],
         "${_cta_bg_12x103}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_20x110}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '9px']
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
            { id: "eid25", tween: [ "style", "${_cta_txt_20x110}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_cta_bg_12x103}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-1448641");
