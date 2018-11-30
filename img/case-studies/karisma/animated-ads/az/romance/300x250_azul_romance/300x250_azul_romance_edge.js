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
            id:'us',
            type:'image',
            rect:['20px','10px','198px','17px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_3_51x21.png",'0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2.jpg",'0px','0px']
         },
         {
            id:'memories',
            type:'image',
            rect:['20px','10px','266px','17px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_2_18x21.png",'0px','0px']
         },
         {
            id:'image-1',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1.jpg",'0px','0px'],
            transform:[[],[],[],['1.2','1.2']]
         },
         {
            id:'intimacy',
            type:'image',
            rect:['20px','10px','256px','17px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1_24x21.png",'0px','0px']
         },
         {
            id:'logo_0x527',
            type:'image',
            rect:['-1px','171px','300px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_0x527.png",'0px','0px']
         },
         {
            id:'logo_54x178',
            type:'image',
            rect:['56px','179px','208px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_54x178.png",'0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['80','40','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'save45_r_text',
            type:'image',
            rect:['93px','85px','108px','24px','auto','auto'],
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
         "${_logo_54x178}": [
            ["style", "top", '179px'],
            ["style", "left", '56px']
         ],
         "${_intimacy}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '23px']
         ],
         "${_us}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '50px']
         ],
         "${_logo_0x527}": [
            ["style", "top", '171px'],
            ["style", "height", '79px'],
            ["style", "left", '-1px'],
            ["style", "width", '300px']
         ],
         "${_memories}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '20px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1']
         ],
         "${_save45_r_text}": [
            ["style", "top", '85px'],
            ["style", "opacity", '0'],
            ["style", "left", '93px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '300px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_book_btn}": [
            ["style", "cursor", 'pointer']
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
            { id: "eid15", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid4", tween: [ "style", "${_intimacy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_intimacy}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid9", tween: [ "style", "${_image-2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 891 },
            { id: "eid10", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 1188 },
            { id: "eid13", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.2'}], position: 7250, duration: 4750 },
            { id: "eid6", tween: [ "style", "${_memories}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 1188 },
            { id: "eid7", tween: [ "style", "${_memories}", "opacity", '0', { fromValue: '1'}], position: 6812, duration: 891 },
            { id: "eid8", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid12", tween: [ "style", "${_us}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 1250 },
            { id: "eid1", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid11", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 3250, duration: 4453 },
            { id: "eid14", tween: [ "style", "${_image-3}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 950 },
            { id: "eid3", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.2'}], position: 0, duration: 3250 },
            { id: "eid34", tween: [ "style", "${_save45_r_text}", "opacity", '1', { fromValue: '0'}], position: 10250, duration: 842 },
            { id: "eid2", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 }         ]
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
      rect: ['0px','0px','134px','30px','auto','auto'],
      id: 'btn_bg_84x51',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_bg_84x51.png','0px','0px']
   },
   {
      rect: ['8px','7px','119px','34px','auto','auto'],
      id: 'btn_tx_91x59',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_tx_91x59.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_tx_91x59}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '8px']
         ],
         "${_btn_bg_84x51}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '134px']
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
            { id: "eid21", tween: [ "style", "${_btn_tx_91x59}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_btn_bg_84x51}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-270263937");
