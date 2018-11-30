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
            rect:['70px','20px','152px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_75x22.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'lifetime',
            type:'image',
            rect:['60px','20px','170px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_67x23.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px'],
            transform:[]
         },
         {
            id:'love',
            type:'image',
            rect:['68px','24px','163px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_73x23.png",'0px','0px']
         },
         {
            id:'border',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"border.png",'0px','0px']
         },
         {
            id:'book-btn',
            type:'rect',
            rect:['80','64','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_b_text2',
            type:'image',
            rect:['103px','93px','84px','19px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45_b_text.png",'0px','0px']
         },
         {
            id:'GI-logo',
            type:'image',
            rect:['58px','175px','183px','51px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_59x179.png",'0px','0px']
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
            ["transform", "scaleY", '1.2'],
            ["style", "top", '3px']
         ],
         "${_image-1}": [
            ["transform", "scaleX", '1.2'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.2']
         ],
         "${_love}": [
            ["style", "top", '13px'],
            ["style", "opacity", '0'],
            ["style", "left", '46px']
         ],
         "${_save45_b_text2}": [
            ["style", "top", '96px'],
            ["style", "height", '19px'],
            ["style", "opacity", '0'],
            ["style", "left", '101px'],
            ["style", "width", '84px']
         ],
         "${_GI-logo}": [
            ["style", "top", '175px'],
            ["style", "left", '58px']
         ],
         "${_lifetime}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '60px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1'],
            ["style", "top", '-1px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '300px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_book-btn}": [
            ["style", "top", '57px'],
            ["transform", "scaleY", '0.81301'],
            ["transform", "scaleX", '0.81301'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '84px']
         ],
         "${_discover}": [
            ["style", "top", '17px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "style", "${_lifetime}", "opacity", '1', { fromValue: '0.000000'}], position: 6637, duration: 1188 },
            { id: "eid9", tween: [ "style", "${_lifetime}", "opacity", '0', { fromValue: '1'}], position: 9794, duration: 1151 },
            { id: "eid19", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 11398, duration: 5602 },
            { id: "eid60", tween: [ "style", "${_save45_b_text2}", "top", '96px', { fromValue: '96px'}], position: 14250, duration: 0 },
            { id: "eid32", tween: [ "transform", "${_book-btn}", "scaleY", '0.81301', { fromValue: '0.81301'}], position: 10050, duration: 0 },
            { id: "eid73", tween: [ "style", "${_love}", "top", '23px', { fromValue: '13px'}], position: 430, duration: 9620 },
            { id: "eid61", tween: [ "transform", "${_discover}", "scaleX", '0.9', { fromValue: '0.9'}], position: 11398, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 4293, duration: 7105 },
            { id: "eid72", tween: [ "style", "${_discover}", "top", '17px', { fromValue: '17px'}], position: 11398, duration: 0 },
            { id: "eid58", tween: [ "style", "${_book-btn}", "top", '56px', { fromValue: '57px'}], position: 10050, duration: 115 },
            { id: "eid56", tween: [ "style", "${_image-3}", "top", '0px', { fromValue: '3px'}], position: 12058, duration: 4942 },
            { id: "eid21", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 11398, duration: 5602 },
            { id: "eid1", tween: [ "style", "${_love}", "opacity", '1', { fromValue: '0'}], position: 430, duration: 820 },
            { id: "eid2", tween: [ "style", "${_love}", "opacity", '0', { fromValue: '1'}], position: 4345, duration: 636 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 4981 },
            { id: "eid31", tween: [ "transform", "${_book-btn}", "scaleX", '0.81301', { fromValue: '0.81301'}], position: 10050, duration: 0 },
            { id: "eid11", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 4293, duration: 1196 },
            { id: "eid12", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 10707, duration: 1188 },
            { id: "eid4", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 4598, duration: 1532 },
            { id: "eid10", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 4293, duration: 7105 },
            { id: "eid48", tween: [ "style", "${_image-2}", "top", '0px', { fromValue: '-1px'}], position: 8598, duration: 2800 },
            { id: "eid57", tween: [ "style", "${_book-btn}", "left", '80px', { fromValue: '84px'}], position: 10050, duration: 115 },
            { id: "eid67", tween: [ "style", "${_book-btn}", "left", '80px', { fromValue: '80px'}], position: 16293, duration: 0 },
            { id: "eid65", tween: [ "style", "${_save45_b_text2}", "left", '101px', { fromValue: '101px'}], position: 14250, duration: 0 },
            { id: "eid66", tween: [ "style", "${_save45_b_text2}", "left", '101px', { fromValue: '101px'}], position: 16293, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_discover}", "scaleY", '0.9', { fromValue: '0.9'}], position: 11398, duration: 0 },
            { id: "eid40", tween: [ "style", "${_save45_b_text2}", "opacity", '1', { fromValue: '0.000000'}], position: 14250, duration: 1085 },
            { id: "eid20", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 11398, duration: 903 },
            { id: "eid5", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 4981 },
            { id: "eid74", tween: [ "style", "${_love}", "left", '46px', { fromValue: '46px'}], position: 430, duration: 0 },
            { id: "eid18", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 12131, duration: 1351 }         ]
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
      id: 'cta_bg_89x67',
      type: 'image',
      rect: ['0px','6px','123px','28px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_89x67.png','0px','0px']
   },
   {
      id: 'cta_txt_97x73',
      type: 'image',
      rect: ['10px','13px','108px','34px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_97x73.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_txt_97x73}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '123px']
         ],
         "${_cta_bg_89x67}": [
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
         duration: 16293,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_cta_bg_89x67}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 1000 },
            { id: "eid16", tween: [ "style", "${_cta_txt_97x73}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 1000 },
            { id: "eid69", tween: [ "style", "${_cta_txt_97x73}", "left", '10px', { fromValue: '10px'}], position: 16293, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-3925062");
