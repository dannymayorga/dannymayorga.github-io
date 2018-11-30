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
            id:'rethink2',
            type:'image',
            rect:['150px','0px','134px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rethink.png",'0px','0px']
         },
         {
            id:'art_text',
            type:'image',
            rect:['147px','12px','149px','58px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"art_text.png",'0px','0px']
         },
         {
            id:'image-3',
            type:'image',
            rect:['300px','0px','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['300px','0px','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['300px','0px','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.png",'0px','0px']
         },
         {
            id:'gi_text',
            type:'image',
            rect:['146px','12px','142px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gi_text.png",'0px','0px']
         },
         {
            id:'save45text',
            type:'image',
            rect:['168px','158px','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45text.png",'0px','0px']
         },
         {
            id:'book-btn',
            type:'rect',
            rect:['155px','111px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'logo',
            type:'rect',
            rect:['-6','188','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'logo',
            symbolName:'logo'
         },
         {
            id:'book-btn',
            symbolName:'book-btn'
         }
         ]
      },
   states: {
      "Base State": {
         "${_image-3}": [
            ["style", "left", '0px'],
            ["style", "top", '249px']
         ],
         "${_logo}": [
            ["style", "opacity", '0']
         ],
         "${_image-1}": [
            ["style", "top", '249px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '0px']
         ],
         "${_gi_text}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '146px']
         ],
         "${_rethink2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '150px']
         ],
         "${_image-2}": [
            ["style", "top", '249px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '1px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,174,239,1.00)'],
            ["style", "width", '300px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_save45text}": [
            ["style", "top", '158px'],
            ["style", "opacity", '0'],
            ["style", "left", '168px']
         ],
         "${_book-btn}": [
            ["style", "top", '111px'],
            ["style", "left", '155px'],
            ["style", "cursor", 'pointer']
         ],
         "${_art_text}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '147px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13440,
         autoPlay: true,
         timeline: [
            { id: "eid161", tween: [ "style", "${_rethink2}", "top", '0px', { fromValue: '0px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid189", tween: [ "style", "${_save45text}", "opacity", '1', { fromValue: '0.000000'}], position: 12250, duration: 1190, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 4000, duration: 250, easing: "easeOutQuad" },
            { id: "eid215", tween: [ "style", "${_image-1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid216", tween: [ "style", "${_image-1}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid172", tween: [ "style", "${_art_text}", "top", '12px', { fromValue: '12px'}], position: 6400, duration: 0, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_art_text}", "left", '147px', { fromValue: '147px'}], position: 6400, duration: 0, easing: "easeOutQuad" },
            { id: "eid195", tween: [ "style", "${_image-3}", "left", '0px', { fromValue: '0px'}], position: 8685, duration: 0 },
            { id: "eid196", tween: [ "style", "${_image-3}", "left", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid187", tween: [ "style", "${_gi_text}", "opacity", '1', { fromValue: '0.000000'}], position: 10870, duration: 1130, easing: "easeOutQuad" },
            { id: "eid213", tween: [ "style", "${_image-2}", "left", '0px', { fromValue: '1px'}], position: 4125, duration: 2625, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 8500, duration: 250, easing: "easeOutQuad" },
            { id: "eid218", tween: [ "style", "${_image-1}", "top", '0px', { fromValue: '249px'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid175", tween: [ "style", "${_art_text}", "opacity", '1', { fromValue: '0'}], position: 6400, duration: 500, easing: "easeOutQuad" },
            { id: "eid179", tween: [ "style", "${_art_text}", "opacity", '0.99', { fromValue: '1'}], position: 6900, duration: 500, easing: "easeOutQuad" },
            { id: "eid181", tween: [ "style", "${_art_text}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 8500, duration: 250, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_image-2}", "top", '0px', { fromValue: '249px'}], position: 4125, duration: 2625, easing: "easeOutQuad" },
            { id: "eid205", tween: [ "style", "${_image-3}", "top", '0px', { fromValue: '249px'}], position: 8685, duration: 2315 },
            { id: "eid162", tween: [ "style", "${_rethink2}", "left", '150px', { fromValue: '150px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid221", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 1000 },
            { id: "eid164", tween: [ "style", "${_rethink2}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 605, easing: "easeOutQuad" },
            { id: "eid165", tween: [ "style", "${_rethink2}", "opacity", '0.99', { fromValue: '1'}], position: 2355, duration: 395, easing: "easeOutQuad" },
            { id: "eid167", tween: [ "style", "${_rethink2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 4000, duration: 250, easing: "easeOutQuad" }         ]
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
         duration: 14440,
         autoPlay: true,
         timeline: [
            { id: "eid25", tween: [ "style", "${_cta_txt_20x110}", "opacity", '1', { fromValue: '0.000000'}], position: 13440, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_cta_bg_12x103}", "opacity", '1', { fromValue: '0.000000'}], position: 13440, duration: 1000 }         ]
      }
   }
},
"logo": {
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
      id: 'logo-shade',
      type: 'image',
      rect: ['4px','11px','302px','73px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo-shade.png','0px','0px']
   },
   {
      type: 'image',
      id: 'logo-shadow',
      rect: ['75px','3px','160px','6px','auto','auto'],
      transform: [[0,0],[],[],['1.94','1.94']],
      fill: ['rgba(0,0,0,0)','images/logo-shadow.png','0px','0px']
   },
   {
      type: 'image',
      id: 'logo_11x536',
      rect: ['53px','3px','210px','65px','auto','auto'],
      transform: [[0,0],[],[],['0.7','0.7']],
      fill: ['rgba(0,0,0,0)','images/logo_11x536.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_logo_11x536}": [
            ["style", "top", '3px'],
            ["transform", "scaleX", '0.7'],
            ["transform", "scaleY", '0.7'],
            ["style", "left", '53px']
         ],
         "${_logo-shade}": [
            ["style", "top", '11px'],
            ["style", "left", '4px'],
            ["style", "width", '302px']
         ],
         "${_logo-shadow}": [
            ["style", "top", '3px'],
            ["transform", "scaleY", '1.94'],
            ["style", "left", '75px'],
            ["transform", "scaleX", '1.94']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '310px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
