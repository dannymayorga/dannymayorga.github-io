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
            id:'GI-logo',
            type:'image',
            rect:['58px','175px','183px','51px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_59x179.png",'0px','0px']
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
            ["style", "top", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '68px']
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '250px'],
            ["style", "width", '300px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_book-btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_discover}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '70px']
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
            { id: "eid21", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid1", tween: [ "style", "${_love}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_love}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 1000 },
            { id: "eid8", tween: [ "style", "${_lifetime}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 1188 },
            { id: "eid9", tween: [ "style", "${_lifetime}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 891 },
            { id: "eid19", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid4", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid10", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid11", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid12", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid20", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid5", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid18", tween: [ "style", "${_discover}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 }         ]
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
      type: 'image',
      id: 'cta_bg_89x67',
      opacity: 0,
      rect: ['0px','6px','123px','28px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_89x67.png','0px','0px']
   },
   {
      type: 'image',
      id: 'cta_txt_97x73',
      opacity: 0,
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
         "${_cta_bg_89x67}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '123px']
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
            { id: "eid17", tween: [ "style", "${_cta_bg_89x67}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid16", tween: [ "style", "${_cta_txt_97x73}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
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
