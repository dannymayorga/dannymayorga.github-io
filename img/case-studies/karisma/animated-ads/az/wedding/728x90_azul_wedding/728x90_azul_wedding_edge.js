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
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.jpg",'0px','0px']
         },
         {
            id:'discover',
            type:'image',
            rect:['0','0','153px','39px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_52x29.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'lifetime',
            type:'image',
            rect:['0','0','167px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_51x28.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['524px','20px','161px','51px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_527x20.png",'0px','0px']
         },
         {
            id:'love',
            type:'image',
            rect:['40px','25px','162px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_52x282.png",'0px','0px']
         },
         {
            id:'border2',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"border2.png",'0px','0px']
         },
         {
            id:'book-btn',
            type:'rect',
            rect:['401','29','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_b_text',
            type:'image',
            rect:['412px','55px','90px','20px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_b_text.png",'0px','0px']
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
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_love}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '40px']
         ],
         "${_GI-logo}": [
            ["style", "left", '524px'],
            ["style", "top", '20px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '90px'],
            ["style", "width", '728px']
         ],
         "${_lifetime}": [
            ["style", "top", '26px'],
            ["style", "opacity", '0'],
            ["style", "left", '40px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_save45_b_text}": [
            ["style", "top", '55px'],
            ["style", "height", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '412px'],
            ["style", "width", '90px']
         ],
         "${_book-btn}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '17px']
         ],
         "${_discover}": [
            ["style", "top", '26px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14500,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 9295, duration: 5205 },
            { id: "eid42", tween: [ "style", "${_save45_b_text}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_lifetime}", "opacity", '1', { fromValue: '0'}], position: 5615, duration: 1000 },
            { id: "eid7", tween: [ "style", "${_lifetime}", "opacity", '0', { fromValue: '1'}], position: 8974, duration: 991 },
            { id: "eid24", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 9295, duration: 5205 },
            { id: "eid8", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 4192, duration: 5231 },
            { id: "eid4", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 4211, duration: 1404 },
            { id: "eid1", tween: [ "style", "${_love}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_love}", "opacity", '0', { fromValue: '1'}], position: 4192, duration: 1000 },
            { id: "eid5", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 4562 },
            { id: "eid38", tween: [ "style", "${_book-btn}", "top", '17px', { fromValue: '17px'}], position: 10250, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 4192, duration: 5231 },
            { id: "eid25", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 9295, duration: 670 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 4562 },
            { id: "eid9", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 4192, duration: 802 },
            { id: "eid10", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 8974, duration: 991 },
            { id: "eid23", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 10449, duration: 1111 }         ]
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
      id: 'cta_bg_397x27',
      type: 'image',
      rect: ['0px','0px','111px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_397x27.png','0px','0px']
   },
   {
      id: 'cta_txt_396x33',
      type: 'image',
      rect: ['0px','6px','111px','31px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_396x33.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_bg_397x27}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_396x33}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '111px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12500,
         autoPlay: true,
         timeline: [
            { id: "eid31", tween: [ "style", "${_cta_txt_396x33}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 1500 },
            { id: "eid32", tween: [ "style", "${_cta_bg_397x27}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 1500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-18371332");
