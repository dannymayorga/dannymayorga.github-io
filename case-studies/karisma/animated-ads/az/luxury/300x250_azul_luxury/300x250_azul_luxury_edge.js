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
         },
         {
            id:'save45_r_text',
            type:'image',
            rect:['23px','145px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_r_text.png",'0px','0px']
         },
         {
            id:'text_3_10x262',
            type:'image',
            rect:['5px','35px','140px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_10x26.png",'0px','0px'],
            transform:[[],[],[],['0.81','0.81']]
         },
         {
            id:'logo-shade',
            type:'image',
            rect:['-5px','177px','315px','73px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"logo-shade.png",'0px','0px']
         },
         {
            id:'logo_11x536',
            type:'image',
            rect:['45px','180px','210px','65px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_11x536.png",'0px','0px']
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
         "${_logo-shade}": [
            ["style", "top", '177px'],
            ["style", "opacity", '1'],
            ["style", "left", '-5px'],
            ["style", "width", '315px']
         ],
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_discover}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '20px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_text_3_10x262}": [
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '250px'],
            ["style", "width", '300px']
         ],
         "${_imagine}": [
            ["style", "top", '20px'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px'],
            ["style", "width", '121px']
         ],
         "${_logo_11x536}": [
            ["style", "top", '180px'],
            ["style", "left", '45px']
         ],
         "${_save45_r_text}": [
            ["style", "top", '145px'],
            ["style", "opacity", '0'],
            ["style", "left", '23px']
         ],
         "${_book-btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_butler-text}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13335,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "style", "${_text_3_10x262}", "top", '15px', { fromValue: '15px'}], position: 7930, duration: 0 },
            { id: "eid131", tween: [ "transform", "${_text_3_10x262}", "scaleX", '1', { fromValue: '1'}], position: 7930, duration: 0 },
            { id: "eid2", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750 },
            { id: "eid6", tween: [ "style", "${_butler-text}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 898 },
            { id: "eid22", tween: [ "style", "${_butler-text}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 891 },
            { id: "eid10", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3000, duration: 4687 },
            { id: "eid4", tween: [ "style", "${_imagine}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_imagine}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750 },
            { id: "eid121", tween: [ "style", "${_imagine}", "width", '121px', { fromValue: '121px'}], position: 13335, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7336, duration: 5999 },
            { id: "eid77", tween: [ "style", "${_text_3_10x262}", "opacity", '1', { fromValue: '0.000000'}], position: 7930, duration: 320 },
            { id: "eid78", tween: [ "style", "${_text_3_10x262}", "opacity", '0.984375', { fromValue: '1'}], position: 8250, duration: 1750 },
            { id: "eid79", tween: [ "style", "${_text_3_10x262}", "opacity", '0', { fromValue: '0.984375'}], position: 10000, duration: 250 },
            { id: "eid8", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 938 },
            { id: "eid9", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 7336, duration: 664 },
            { id: "eid7", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3000, duration: 4687 },
            { id: "eid1", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3405 },
            { id: "eid132", tween: [ "transform", "${_text_3_10x262}", "scaleY", '1', { fromValue: '1'}], position: 7930, duration: 0 },
            { id: "eid120", tween: [ "style", "${_imagine}", "height", '64px', { fromValue: '64px'}], position: 13335, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3405 },
            { id: "eid18", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7336, duration: 1233 },
            { id: "eid46", tween: [ "style", "${_save45_r_text}", "opacity", '1', { fromValue: '0.000000'}], position: 11250, duration: 887 },
            { id: "eid17", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7336, duration: 5999 },
            { id: "eid15", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 10180, duration: 1250 }         ]
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
         duration: 12250,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_cta_bg_12x103}", "opacity", '1', { fromValue: '0.000000'}], position: 11250, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_cta_txt_20x110}", "opacity", '1', { fromValue: '0.000000'}], position: 11250, duration: 1000 }         ]
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
