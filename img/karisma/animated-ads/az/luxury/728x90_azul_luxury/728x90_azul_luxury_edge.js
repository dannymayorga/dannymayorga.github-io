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
            id:'image-2',
            type:'image',
            rect:['0','0','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
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
         },
         {
            id:'save45_b_text',
            type:'image',
            rect:['370px','9px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_b_text.png",'0px','0px']
         },
         {
            id:'text_3_21x27',
            type:'image',
            rect:['-24px','24px','335px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_21x27.png",'0px','0px'],
            transform:[[],[],[],['0.79','0.79']]
         },
         {
            id:'text_3_335x37',
            type:'image',
            rect:['-34px','26px','335px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_335x37.png",'0px','0px'],
            transform:[[],[],[],['0.73','0.73']]
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
         "${_book_btn}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '37px']
         ],
         "${_bkgd}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '500px'],
            ["style", "width", '228px']
         ],
         "${_imagine-text}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px']
         ],
         "${_text_3_335x37}": [
            ["style", "top", '26px'],
            ["transform", "scaleY", '0.73'],
            ["transform", "scaleX", '0.73'],
            ["style", "opacity", '0'],
            ["style", "left", '-34px']
         ],
         "${_GI-logo}": [
            ["style", "top", '10px'],
            ["style", "left", '513px']
         ],
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '90px'],
            ["style", "width", '728px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_save45_b_text}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '370px']
         ],
         "${_text_3_21x27}": [
            ["style", "top", '24px'],
            ["transform", "scaleY", '0.79'],
            ["transform", "scaleX", '0.79'],
            ["style", "opacity", '0'],
            ["style", "left", '-24px']
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
         duration: 14000,
         autoPlay: true,
         timeline: [
            { id: "eid27", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 6750 },
            { id: "eid41", tween: [ "style", "${_save45_b_text}", "opacity", '1', { fromValue: '0.000000'}], position: 12538, duration: 750 },
            { id: "eid44", tween: [ "style", "${_text_3_21x27}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 500 },
            { id: "eid45", tween: [ "style", "${_text_3_21x27}", "opacity", '0.96875', { fromValue: '1'}], position: 9500, duration: 1250 },
            { id: "eid46", tween: [ "style", "${_text_3_21x27}", "opacity", '0', { fromValue: '0.968750'}], position: 10750, duration: 340 },
            { id: "eid23", tween: [ "style", "${_bkgd}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 750 },
            { id: "eid14", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3389, duration: 752 },
            { id: "eid15", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid25", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 6750 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3389, duration: 4314 },
            { id: "eid17", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3500 },
            { id: "eid9", tween: [ "style", "${_butler-text}", "opacity", '1', { fromValue: '0'}], position: 4539, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_butler-text}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 891 },
            { id: "eid38", tween: [ "style", "${_book_btn}", "top", '37px', { fromValue: '37px'}], position: 11000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_imagine-text}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid8", tween: [ "style", "${_imagine-text}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid16", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3389, duration: 4314 },
            { id: "eid26", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid19", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3500 },
            { id: "eid49", tween: [ "style", "${_text_3_335x37}", "opacity", '1', { fromValue: '0.000000'}], position: 11319, duration: 1181 },
            { id: "eid18", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 }         ]
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
      id: 'cta_bg_403x28',
      type: 'image',
      rect: ['0px','0px','110px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_403x28.png','0px','0px']
   },
   {
      id: 'cta_txt_404x34',
      type: 'image',
      rect: ['0px','6px','108px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_404x34.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_txt_404x34}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_bg_403x28}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_cta_bg_403x28}", "opacity", '1', { fromValue: '0.000000'}], position: 12500, duration: 750 },
            { id: "eid35", tween: [ "style", "${_cta_txt_404x34}", "opacity", '1', { fromValue: '0.000000'}], position: 12500, duration: 750 }         ]
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
