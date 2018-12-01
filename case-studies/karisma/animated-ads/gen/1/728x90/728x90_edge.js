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
            rect:['0px','89px','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0px','90px','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0px','90px','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.png",'0px','0px']
         },
         {
            id:'rethink2',
            type:'image',
            rect:['572px','12px','134px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rethink.png",'0px','0px']
         },
         {
            id:'image-4',
            type:'image',
            rect:['0px','90px','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-4.png",'0px','0px']
         },
         {
            id:'art_text2',
            type:'image',
            rect:['607','39','149px','58px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"art_text.png",'0px','0px']
         },
         {
            id:'image-6',
            type:'image',
            rect:['292','135','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-6.png",'0px','0px']
         },
         {
            id:'image-5',
            type:'image',
            rect:['248','103','768px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-5.png",'0px','0px']
         },
         {
            id:'gi_text2',
            type:'image',
            rect:['590','47','142px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gi_text.png",'0px','0px']
         },
         {
            id:'save45text3',
            type:'image',
            rect:['413px','58','108px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45text.png",'0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['412px','15px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'logo-shade',
            type:'image',
            rect:['681px','-3px','63px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-shade.png",'0px','0px']
         },
         {
            id:'logo_45x90',
            type:'image',
            rect:['683px','1px','45px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_45x90.png",'0px','0px']
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
         "${_gi_text2}": [
            ["style", "top", '-2px'],
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["style", "left", '581px']
         ],
         "${_logo-shade}": [
            ["style", "top", '-3px'],
            ["style", "height", '95px'],
            ["style", "opacity", '0'],
            ["style", "left", '681px'],
            ["style", "width", '63px']
         ],
         "${_book_btn}": [
            ["style", "top", '15px'],
            ["style", "left", '412px'],
            ["style", "cursor", 'pointer']
         ],
         "${_image-4}": [
            ["style", "top", '90px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_image-6}": [
            ["style", "left", '0px'],
            ["style", "top", '90px']
         ],
         "${_logo_45x90}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '683px']
         ],
         "${_save45text3}": [
            ["style", "left", '413px'],
            ["style", "opacity", '0']
         ],
         "${_rethink2}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '572px']
         ],
         "${_image-1}": [
            ["style", "top", '90px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '0px']
         ],
         "${_image-5}": [
            ["style", "left", '0px'],
            ["style", "top", '90px']
         ],
         "${_image-2}": [
            ["style", "top", '90px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,174,239,1.00)'],
            ["style", "width", '728px'],
            ["style", "height", '90px'],
            ["style", "overflow", 'hidden']
         ],
         "${_image-3}": [
            ["style", "top", '90px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '0px']
         ],
         "${_art_text2}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '572px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15750,
         autoPlay: true,
         timeline: [
            { id: "eid64", tween: [ "style", "${_rethink2}", "top", '12px', { fromValue: '12px'}], position: 3250, duration: 0, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_rethink2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 2295, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_rethink2}", "opacity", '0.99', { fromValue: '1'}], position: 5545, duration: 287, easing: "easeOutQuad" },
            { id: "eid70", tween: [ "style", "${_rethink2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5832, duration: 287, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 6000, duration: 250, easing: "easeOutQuad" },
            { id: "eid178", tween: [ "style", "${_gi_text2}", "left", '522px', { fromValue: '522px'}], position: 14044, duration: 0, easing: "easeOutQuad" },
            { id: "eid160", tween: [ "style", "${_gi_text2}", "opacity", '1', { fromValue: '0'}], position: 14044, duration: 750, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,174,239,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,174,239,1.00)'}], position: 0, duration: 0 },
            { id: "eid209", tween: [ "style", "${_logo-shade}", "left", '681px', { fromValue: '681px'}], position: 12826, duration: 0 },
            { id: "eid213", tween: [ "style", "${_logo-shade}", "opacity", '1', { fromValue: '0'}], position: 12826, duration: 1000 },
            { id: "eid167", tween: [ "transform", "${_gi_text2}", "scaleY", '0.84', { fromValue: '0.84'}], position: 14044, duration: 0, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "transform", "${_gi_text2}", "scaleY", '0.84', { fromValue: '0.84'}], position: 14794, duration: 0, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_image-1}", "top", '0px', { fromValue: '90px'}], position: 0, duration: 1500, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_image-2}", "top", '0px', { fromValue: '90px'}], position: 1000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid138", tween: [ "style", "${_image-6}", "left", '0px', { fromValue: '0px'}], position: 11083, duration: 0, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_image-6}", "left", '0px', { fromValue: '0px'}], position: 12343, duration: 0, easing: "easeOutQuad" },
            { id: "eid104", tween: [ "style", "${_image-4}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 250, easing: "easeOutQuad" },
            { id: "eid106", tween: [ "style", "${_art_text2}", "left", '564px', { fromValue: '572px'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid207", tween: [ "style", "${_logo-shade}", "top", '-3px', { fromValue: '-3px'}], position: 12826, duration: 0 },
            { id: "eid108", tween: [ "style", "${_art_text2}", "top", '18px', { fromValue: '20px'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_image-3}", "top", '0px', { fromValue: '90px'}], position: 2000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid137", tween: [ "style", "${_image-6}", "top", '90px', { fromValue: '90px'}], position: 11083, duration: 0, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_image-6}", "top", '0px', { fromValue: '90px'}], position: 12343, duration: 2157, easing: "easeOutQuad" },
            { id: "eid208", tween: [ "style", "${_logo_45x90}", "left", '683px', { fromValue: '683px'}], position: 12826, duration: 0 },
            { id: "eid60", tween: [ "style", "${_image-3}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_image-2}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_rethink2}", "left", '572px', { fromValue: '572px'}], position: 3250, duration: 0, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 6000, duration: 250, easing: "easeOutQuad" },
            { id: "eid206", tween: [ "style", "${_logo_45x90}", "top", '1px', { fromValue: '1px'}], position: 12826, duration: 0 },
            { id: "eid115", tween: [ "style", "${_image-5}", "top", '0px', { fromValue: '90px'}], position: 11171, duration: 2250, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_image-3}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 6000, duration: 250, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_image-4}", "top", '0px', { fromValue: '90px'}], position: 6119, duration: 2381, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_image-4}", "left", '0px', { fromValue: '0px'}], position: 6119, duration: 0, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_image-1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "transform", "${_gi_text2}", "scaleX", '0.84', { fromValue: '0.84'}], position: 14044, duration: 0, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "transform", "${_gi_text2}", "scaleX", '0.84', { fromValue: '0.84'}], position: 14794, duration: 0, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "style", "${_logo_45x90}", "opacity", '1', { fromValue: '0'}], position: 12826, duration: 1000 },
            { id: "eid205", tween: [ "style", "${_save45text3}", "opacity", '1', { fromValue: '0.000000'}], position: 14794, duration: 956, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_art_text2}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_art_text2}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 250, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_image-5}", "left", '0px', { fromValue: '0px'}], position: 11171, duration: 0, easing: "easeOutQuad" }         ]
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
         duration: 16500,
         autoPlay: true,
         timeline: [
            { id: "eid35", tween: [ "style", "${_cta_txt_404x34}", "opacity", '1', { fromValue: '0.000000'}], position: 15750, duration: 750 },
            { id: "eid36", tween: [ "style", "${_cta_bg_403x28}", "opacity", '1', { fromValue: '0.000000'}], position: 15750, duration: 750 }         ]
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
