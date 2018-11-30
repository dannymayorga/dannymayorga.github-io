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
            fill:["rgba(0,0,0,0)",'_assets/image-3.jpg','0px','0px']
         },
         {
            id:'image-2',
            type:'image',
            rect:['0','0','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/image-2.jpg','0px','0px']
         },
         {
            id:'imagine_pic',
            type:'rect',
            rect:['-12','-45','auto','auto','auto','auto']
         },
         {
            id:'logo-shadow',
            type:'image',
            rect:['0','520px','160px','6px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/logo-shadow.png','0px','0px']
         },
         {
            id:'logo-shade',
            type:'image',
            rect:['0','527px','160px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/logo-shade.png','0px','0px']
         },
         {
            id:'text_1_17x28',
            type:'image',
            rect:['15px','27px','125px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/text_1_17x28.png','0px','0px']
         },
         {
            id:'logo_11x536',
            type:'image',
            rect:['9px','538px','141px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/logo_11x536.png','0px','0px']
         },
         {
            id:'book_btn',
            type:'rect',
            rect:['13','167','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'text_2_21x28',
            type:'image',
            rect:['20px','27px','118px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/text_2_21x28.png','0px','0px']
         },
         {
            id:'text_3_10x26',
            type:'image',
            rect:['10px','27px','140px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/text_3_10x26.png','0px','0px']
         },
         {
            id:'text_4_27x91',
            type:'image',
            rect:['31px','86px','107px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",'_assets/text_4_27x91.png','0px','0px']
         }],
         symbolInstances: [
         {
            id:'book_btn',
            symbolName:'book_btn'
         },
         {
            id:'imagine_pic',
            symbolName:'imagine_pic'
         }
         ]
      },
   states: {
      "Base State": {
         "${_image-3}": [
            ["transform", "scaleX", '1.12'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.12']
         ],
         "${_imagine_pic}": [
            ["style", "opacity", '1']
         ],
         "${_book_btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_text_2_21x28}": [
            ["style", "top", '27px'],
            ["style", "opacity", '0'],
            ["style", "left", '20px']
         ],
         "${_text_1_17x28}": [
            ["style", "top", '27px'],
            ["style", "opacity", '1'],
            ["style", "left", '15px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '160px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_logo_11x536}": [
            ["style", "left", '9px'],
            ["style", "top", '538px']
         ],
         "${_logo-shadow}": [
            ["style", "top", '520px']
         ],
         "${_image-2}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0.99'],
            ["transform", "scaleY", '1']
         ],
         "${_text_3_10x26}": [
            ["style", "top", '27px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_logo-shade}": [
            ["style", "top", '527px']
         ],
         "${_text_4_27x91}": [
            ["style", "top", '86px'],
            ["style", "opacity", '0'],
            ["style", "left", '31px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9505,
         autoPlay: true,
         timeline: [
            { id: "eid44", tween: [ "transform", "${_image-3}", "scaleY", '1', { fromValue: '1.12'}], position: 5250, duration: 4255 },
            { id: "eid33", tween: [ "style", "${_text_1_17x28}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 1940 },
            { id: "eid35", tween: [ "style", "${_text_1_17x28}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 1940, duration: 310 },
            { id: "eid43", tween: [ "transform", "${_image-3}", "scaleX", '1', { fromValue: '1.12'}], position: 5250, duration: 4255 },
            { id: "eid12", tween: [ "transform", "${_image-2}", "scaleX", '1.2', { fromValue: '1'}], position: 2070, duration: 3430 },
            { id: "eid53", tween: [ "style", "${_text_2_21x28}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 500 },
            { id: "eid54", tween: [ "style", "${_text_2_21x28}", "opacity", '0.99', { fromValue: '1'}], position: 2750, duration: 2090 },
            { id: "eid55", tween: [ "style", "${_text_2_21x28}", "opacity", '0', { fromValue: '0.990000'}], position: 4840, duration: 410 },
            { id: "eid57", tween: [ "style", "${_imagine_pic}", "opacity", '0.97088623046875', { fromValue: '1'}], position: 0, duration: 2211 },
            { id: "eid58", tween: [ "style", "${_imagine_pic}", "opacity", '0', { fromValue: '0.970886'}], position: 2211, duration: 39 },
            { id: "eid37", tween: [ "style", "${_image-2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5163, duration: 337 },
            { id: "eid13", tween: [ "transform", "${_image-2}", "scaleY", '1.2', { fromValue: '1'}], position: 2070, duration: 3430 },
            { id: "eid78", tween: [ "style", "${_text_3_10x26}", "opacity", '1', { fromValue: '0.000000'}], position: 5250, duration: 750 },
            { id: "eid80", tween: [ "style", "${_text_4_27x91}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 911 },
            { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_imagine_pic}', [] ], ""], position: 2250 }         ]
      }
   }
},
"imagine_pic": {
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
      id: 'image-1',
      rect: ['12px','45px','160px','600px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','_assets/image-1.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_image-1}": [
            ["style", "top", '45px'],
            ["transform", "scaleY", '1.14999'],
            ["transform", "scaleX", '1.14999'],
            ["style", "opacity", '1'],
            ["style", "left", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '690px'],
            ["style", "width", '184px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "transform", "${_image-1}", "scaleX", '1', { fromValue: '1.14999'}], position: 0, duration: 2250 },
            { id: "eid16", tween: [ "style", "${_image-1}", "opacity", '0', { fromValue: '1'}], position: 1944, duration: 306 },
            { id: "eid9", tween: [ "transform", "${_image-1}", "scaleY", '1', { fromValue: '1.14999'}], position: 0, duration: 2250 }         ]
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
      id: 'cta_bg_14x177',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','_assets/cta_bg_14x177.png','0px','0px']
   },
   {
      id: 'cta_txt_14x177',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','_assets/cta_txt_14x177.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_bg_14x177}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_cta_txt_14x177}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '134px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8295.0234375,
         autoPlay: true,
         timeline: [
            { id: "eid70", tween: [ "style", "${_cta_bg_14x177}", "opacity", '1', { fromValue: '0.000000'}], position: 7639, duration: 656 },
            { id: "eid71", tween: [ "style", "${_cta_txt_14x177}", "opacity", '1', { fromValue: '0.000000'}], position: 7639, duration: 656 }         ]
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
})(jQuery, AdobeEdge, "EDGE-5799611");
