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
            id:'image_3',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_3.jpg",'0px','0px']
         },
         {
            id:'us',
            type:'image',
            rect:['20px','20px','167px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_21x22.png",'0px','0px']
         },
         {
            id:'image_2',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_2.jpg",'0px','0px']
         },
         {
            id:'memories',
            type:'image',
            rect:['20px','20px','142px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_33x22.png",'0px','0px']
         },
         {
            id:'image_1',
            type:'image',
            rect:['0','0','728px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_1.jpg",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['504px','14px','210px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_504x15.png",'0px','0px']
         },
         {
            id:'intimacy',
            type:'image',
            rect:['20px','20px','142px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_33x22.png",'0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['340','17','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_b_text',
            type:'image',
            rect:['351px','63px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_b_text.png",'0px','0px']
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
         "${_memories}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_us}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '10px']
         ],
         "${_intimacy}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_image_1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_GI-logo}": [
            ["style", "left", '504px'],
            ["style", "top", '14px']
         ],
         "${_image_2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '728px'],
            ["style", "height", '90px'],
            ["style", "overflow", 'hidden']
         ],
         "${_save45_b_text}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '351px']
         ],
         "${_book_btn}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '10px']
         ],
         "${_image_3}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.2']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13130,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "transform", "${_image_1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid1", tween: [ "style", "${_intimacy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_intimacy}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_save45_b_text}", "top", '54px', { fromValue: '54px'}], position: 11090, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_image_2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid4", tween: [ "style", "${_image_1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_memories}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000 },
            { id: "eid7", tween: [ "style", "${_memories}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 891 },
            { id: "eid8", tween: [ "transform", "${_image_2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid3", tween: [ "transform", "${_image_1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid14", tween: [ "style", "${_image_3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid13", tween: [ "transform", "${_image_3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid15", tween: [ "transform", "${_image_3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid12", tween: [ "style", "${_us}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 },
            { id: "eid29", tween: [ "style", "${_book_btn}", "top", '10px', { fromValue: '10px'}], position: 13130, duration: 0 },
            { id: "eid9", tween: [ "style", "${_image_2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid10", tween: [ "style", "${_image_2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid32", tween: [ "style", "${_save45_b_text}", "opacity", '1', { fromValue: '0'}], position: 10250, duration: 840 }         ]
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
      rect: ['0px','0px','129px','30px','auto','auto'],
      id: 'cta_bg_341x25',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_bg_341x25.png','0px','0px']
   },
   {
      rect: ['6px','7px','120px','35px','auto','auto'],
      id: 'cta_txt_345x33',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cta_txt_345x33.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_bg_341x25}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '129px']
         ],
         "${_cta_txt_345x33}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px']
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
            { id: "eid26", tween: [ "style", "${_cta_bg_341x25}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_cta_txt_345x33}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-272320738");
