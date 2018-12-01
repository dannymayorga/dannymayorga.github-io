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
            rect:['0','0','88px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_35x44.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'i_do',
            type:'image',
            rect:['32px','35px','101px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_30x43.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['17px','519px','126px','43px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_18x527.png",'0px','0px']
         },
         {
            id:'paradise',
            type:'image',
            rect:['30px','35px','100px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_28x43.png",'0px','0px']
         },
         {
            id:'border_8x8',
            type:'image',
            rect:['8px','8px','144px','583px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"border_8x8.png",'0px','0px']
         },
         {
            id:'book-btn',
            type:'rect',
            rect:['13','453','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_b_text',
            type:'image',
            rect:['26px','420px','108px','24px','auto','auto'],
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
            ["style", "top", '0px'],
            ["transform", "scaleY", '1.2'],
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_paradise}": [
            ["style", "top", '404px'],
            ["style", "opacity", '0'],
            ["style", "left", '29px']
         ],
         "${_i_do}": [
            ["style", "top", '35px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '32px']
         ],
         "${_GI-logo}": [
            ["style", "top", '519px'],
            ["style", "left", '17px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '160px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_book-btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_save45_b_text}": [
            ["style", "top", '420px'],
            ["style", "opacity", '0'],
            ["style", "left", '26px']
         ],
         "${_border_8x8}": [
            ["style", "top", '8px'],
            ["style", "left", '8px']
         ],
         "${_discover}": [
            ["style", "top", '35px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '36px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13750,
         autoPlay: true,
         timeline: [
            { id: "eid47", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 9000, duration: 4750 },
            { id: "eid60", tween: [ "style", "${_save45_b_text}", "opacity", '1', { fromValue: '0.000000'}], position: 11945, duration: 1055 },
            { id: "eid63", tween: [ "style", "${_paradise}", "top", '404px', { fromValue: '404px'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 4050, duration: 91 },
            { id: "eid41", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 8491, duration: 1188 },
            { id: "eid45", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 9000, duration: 4750 },
            { id: "eid34", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 4050, duration: 1000 },
            { id: "eid32", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 4500 },
            { id: "eid39", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 4050, duration: 4950 },
            { id: "eid1", tween: [ "style", "${_paradise}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_paradise}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid64", tween: [ "style", "${_paradise}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 4050, duration: 4950 },
            { id: "eid46", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 950 },
            { id: "eid33", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 4500 },
            { id: "eid38", tween: [ "style", "${_i_do}", "opacity", '1', { fromValue: '0.000000'}], position: 5160, duration: 1188 },
            { id: "eid43", tween: [ "style", "${_i_do}", "opacity", '0', { fromValue: '1'}], position: 8265, duration: 891 },
            { id: "eid44", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 10710, duration: 1250 }         ]
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
      id: 'cta_bg_14x447',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_14x447.png','0px','0px']
   },
   {
      id: 'cta_txt_20x454',
      type: 'image',
      rect: ['7px','7px','123px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_20x454.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_bg_14x447}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_20x454}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '134px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13010,
         autoPlay: true,
         timeline: [
            { id: "eid54", tween: [ "style", "${_cta_bg_14x447}", "opacity", '1', { fromValue: '0.000000'}], position: 12005, duration: 1000 },
            { id: "eid55", tween: [ "style", "${_cta_txt_20x454}", "opacity", '1', { fromValue: '0.000000'}], position: 12010, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-274987693");
