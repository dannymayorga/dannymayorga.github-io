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
            rect:['0','0','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.jpg",'0px','0px']
         },
         {
            id:'discover-text',
            type:'image',
            rect:['21px','25px','194px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_21x27.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-22.jpg",'0px','0px']
         },
         {
            id:'butler-text',
            type:'image',
            rect:['20px','25px','180px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_21x26.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','530px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px'],
            transform:[[],[],[],['1.2','1.2']]
         },
         {
            id:'bkgd',
            type:'rect',
            rect:['500px','0px','228px','90px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['513px','10px','200px','66px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_557x12.png",'0px','0px']
         },
         {
            id:'imagine-text',
            type:'image',
            rect:['20px','25px','159px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_21x26.png",'0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['369','27','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'book_btn',
            symbolName:'book_btn'
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
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '500px'],
            ["style", "width", '228px']
         ],
         "${_discover-text}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '21px']
         ],
         "${_imagine-text}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px']
         ],
         "${_GI-logo}": [
            ["style", "top", '10px'],
            ["style", "left", '513px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '728px'],
            ["style", "height", '90px'],
            ["style", "overflow", 'hidden']
         ],
         "${_book_btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_butler-text}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
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
            { id: "eid27", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid24", tween: [ "style", "${_discover-text}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 },
            { id: "eid14", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid15", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid25", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid18", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_bkgd}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 750 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid1", tween: [ "style", "${_imagine-text}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid8", tween: [ "style", "${_imagine-text}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid16", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid26", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid17", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid9", tween: [ "style", "${_butler-text}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_butler-text}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 891 },
            { id: "eid19", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 }         ]
      }
   }
},
"book_btn": {
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
      rect: ['0px','0px','110px','26px','auto','auto'],
      id: 'cta_bg_403x28',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_bg_403x28.png','0px','0px']
   },
   {
      rect: ['0px','6px','108px','33px','auto','auto'],
      id: 'cta_txt_404x34',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_txt_404x34.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '110px']
         ],
         "${_cta_bg_403x28}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_404x34}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         timeline: [
            { id: "eid35", tween: [ "style", "${_cta_txt_404x34}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 750 },
            { id: "eid36", tween: [ "style", "${_cta_bg_403x28}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "EDGE-265105945");
