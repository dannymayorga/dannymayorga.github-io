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
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_3.jpg",'0px','0px']
         },
         {
            id:'us',
            type:'image',
            rect:['0','0','148px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_7x33.png",'0px','0px']
         },
         {
            id:'image_2',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_2.jpg",'0px','0px']
         },
         {
            id:'memories',
            type:'image',
            rect:['11px','20px','142px','49px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_10x30.png",'0px','0px']
         },
         {
            id:'image_1',
            type:'image',
            rect:['8px','-26px','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image_1.jpg",'0px','0px'],
            transform:[[],[],[],['1.2','1.2']]
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['8px','540px','143px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_10x541.png",'0px','0px']
         },
         {
            id:'intimacy',
            type:'image',
            rect:['10px','20px','142px','49px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_10x30.png",'0px','0px']
         },
         {
            id:'line-break',
            type:'image',
            rect:['0','520px','160px','10px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_0x517.png",'0px','0px']
         },
         {
            id:'logo_0x527',
            type:'image',
            rect:['0px','528px','160px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_0x527.png",'0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['15','462','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_r_text',
            type:'image',
            rect:['26px','429px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_r_text.png",'0px','0px']
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
         "${_line-break}": [
            ["style", "top", '520px']
         ],
         "${_memories}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '11px']
         ],
         "${_us}": [
            ["style", "top", '22px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '7px']
         ],
         "${_intimacy}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_image_1}": [
            ["style", "top", '-10px'],
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_GI-logo}": [
            ["style", "top", '540px'],
            ["style", "left", '8px']
         ],
         "${_logo_0x527}": [
            ["style", "left", '0px'],
            ["style", "top", '528px']
         ],
         "${_image_2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '160px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_save45_r_text}": [
            ["style", "top", '429px'],
            ["style", "opacity", '0'],
            ["style", "left", '26px']
         ],
         "${_book_btn}": [
            ["style", "cursor", 'pointer']
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
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "transform", "${_image_1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid14", tween: [ "style", "${_intimacy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_intimacy}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid37", tween: [ "style", "${_image_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_save45_r_text}", "opacity", '1', { fromValue: '0.000000'}], position: 10290, duration: 710 },
            { id: "eid16", tween: [ "style", "${_image_1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_memories}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 1188 },
            { id: "eid18", tween: [ "style", "${_memories}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 891 },
            { id: "eid22", tween: [ "transform", "${_image_2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid7", tween: [ "transform", "${_image_1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid26", tween: [ "style", "${_image_3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid25", tween: [ "transform", "${_image_3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid27", tween: [ "transform", "${_image_3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid24", tween: [ "style", "${_us}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 },
            { id: "eid13", tween: [ "style", "${_image_1}", "top", '0px', { fromValue: '-10px'}], position: 0, duration: 2000 },
            { id: "eid20", tween: [ "style", "${_image_2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid21", tween: [ "style", "${_image_2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid19", tween: [ "transform", "${_image_2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 }         ]
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
      id: 'btn_bg_17x455',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_bg_17x455.png','0px','0px']
   },
   {
      rect: ['7px','7px','119px','37px','auto','auto'],
      id: 'btn_txt_22x463',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_txt_22x463.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_txt_22x463}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '129px']
         ],
         "${_btn_bg_17x455}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
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
            { id: "eid32", tween: [ "style", "${_btn_txt_22x463}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_btn_bg_17x455}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-268281899");
