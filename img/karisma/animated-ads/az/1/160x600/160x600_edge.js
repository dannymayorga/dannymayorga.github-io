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
            id:'image-3a',
            type:'image',
            rect:['238','110','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3a.png",'0px','0px']
         },
         {
            id:'image-3b',
            type:'image',
            rect:['230','124','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-3b.png",'0px','0px']
         },
         {
            id:'image-2b',
            type:'image',
            rect:['188','48','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2b.png",'0px','0px']
         },
         {
            id:'image-2a',
            type:'image',
            rect:['188','48','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-2a.png",'0px','0px']
         },
         {
            id:'image-1a',
            type:'image',
            rect:['314','232','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1a.png",'0px','0px']
         },
         {
            id:'image-1b2',
            type:'image',
            rect:['258','166','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1b.png",'0px','0px']
         },
         {
            id:'image-1c',
            type:'image',
            rect:['249','145','160px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"image-1c.png",'0px','0px']
         },
         {
            id:'rethink3',
            type:'image',
            rect:['69','44','134px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"rethink.png",'0px','0px']
         },
         {
            id:'gen_text',
            type:'image',
            rect:['5px','11px','149px','74px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gen_text.png",'0px','0px']
         },
         {
            id:'gi_text2',
            type:'image',
            rect:['7px','16px','142px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gi_text.png",'0px','0px']
         },
         {
            id:'save45text5',
            type:'image',
            rect:['14px','177px','128px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"save45text.png",'0px','0px']
         },
         {
            id:'book_now_btn4',
            type:'rect',
            rect:['56','139','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'logo2',
            type:'rect',
            rect:['53','562','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'book_now_btn4',
            symbolName:'book_now_btn'
         },
         {
            id:'logo2',
            symbolName:'logo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_gi_text2}": [
            ["style", "top", '16px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px']
         ],
         "${_logo2}": [
            ["style", "top", '562px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px']
         ],
         "${_save45text5}": [
            ["style", "top", '166px'],
            ["style", "opacity", '0'],
            ["style", "left", '14px']
         ],
         "${_image-2a}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '160px']
         ],
         "${_rethink3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '12px']
         ],
         "${_image-3a}": [
            ["style", "left", '238px'],
            ["style", "top", '110px']
         ],
         "${_book_now_btn4}": [
            ["style", "top", '124px'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["style", "cursor", 'pointer']
         ],
         "${_image-1b2}": [
            ["style", "top", '5px'],
            ["style", "opacity", '1'],
            ["style", "left", '160px']
         ],
         "${_image-3b}": [
            ["style", "left", '230px'],
            ["style", "top", '124px']
         ],
         "${_image-2b}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '160px']
         ],
         "${_gen_text}": [
            ["style", "top", '11px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(250,154,51,1.00)'],
            ["style", "width", '160px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_image-1c}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '160px']
         ],
         "${_image-1a}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16740,
         autoPlay: true,
         timeline: [
            { id: "eid192", tween: [ "style", "${_rethink3}", "opacity", '0.0078125', { fromValue: '0'}], position: 0, duration: 3087, easing: "easeOutQuad" },
            { id: "eid193", tween: [ "style", "${_rethink3}", "opacity", '1', { fromValue: '0.007813000120222569'}], position: 3087, duration: 2367, easing: "easeOutQuad" },
            { id: "eid201", tween: [ "style", "${_rethink3}", "opacity", '0.99', { fromValue: '1'}], position: 5455, duration: 273, easing: "easeOutQuad" },
            { id: "eid208", tween: [ "style", "${_rethink3}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5727, duration: 273, easing: "easeOutQuad" },
            { id: "eid250", tween: [ "style", "${_save45text5}", "opacity", '1', { fromValue: '0.000000'}], position: 14974, duration: 1016, easing: "easeOutQuad" },
            { id: "eid353", tween: [ "style", "${_image-2a}", "top", '0px', { fromValue: '0px'}], position: 5727, duration: 0, easing: "easeOutQuad" },
            { id: "eid314", tween: [ "style", "${_image-2b}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 10182, easing: "easeOutQuad" },
            { id: "eid315", tween: [ "style", "${_image-2b}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 10182, duration: 371, easing: "easeOutQuad" },
            { id: "eid354", tween: [ "style", "${_image-2a}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 10182, easing: "easeOutQuad" },
            { id: "eid355", tween: [ "style", "${_image-2a}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 10182, duration: 371, easing: "easeOutQuad" },
            { id: "eid286", tween: [ "style", "${_image-1a}", "left", '160px', { fromValue: '160px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid301", tween: [ "style", "${_image-1a}", "left", '0px', { fromValue: '160px'}], position: 2000, duration: 1250, easing: "easeOutCubic" },
            { id: "eid302", tween: [ "style", "${_image-1c}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 5727, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "style", "${_image-1c}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5727, duration: 273, easing: "easeOutQuad" },
            { id: "eid312", tween: [ "style", "${_image-2b}", "top", '0px', { fromValue: '0px'}], position: 5727, duration: 0, easing: "easeOutQuad" },
            { id: "eid356", tween: [ "style", "${_image-2a}", "left", '0px', { fromValue: '160px'}], position: 5727, duration: 1773, easing: "easeOutQuad" },
            { id: "eid295", tween: [ "style", "${_image-1c}", "left", '0px', { fromValue: '160px'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid307", tween: [ "style", "${_image-1a}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 5727, easing: "easeOutQuad" },
            { id: "eid308", tween: [ "style", "${_image-1a}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5727, duration: 273, easing: "easeOutQuad" },
            { id: "eid317", tween: [ "style", "${_image-3a}", "top", '0px', { fromValue: '110px'}], position: 10357, duration: 0, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_gi_text2}", "opacity", '1', { fromValue: '0.000000'}], position: 12773, duration: 2201, easing: "easeOutQuad" },
            { id: "eid313", tween: [ "style", "${_image-2b}", "left", '0px', { fromValue: '160px'}], position: 5727, duration: 1773, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "style", "${_rethink3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid294", tween: [ "style", "${_image-1b2}", "left", '160px', { fromValue: '160px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "style", "${_image-1b2}", "left", '-1px', { fromValue: '160px'}], position: 1000, duration: 1250, easing: "easeOutCubic" },
            { id: "eid351", tween: [ "style", "${_image-1b2}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid352", tween: [ "style", "${_image-1b2}", "top", '5px', { fromValue: '5px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
            { id: "eid349", tween: [ "style", "${_image-1c}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_book_now_btn4}", "opacity", '1', { fromValue: '0'}], position: 15990, duration: 750, easing: "easeOutQuad" },
            { id: "eid305", tween: [ "style", "${_image-1b2}", "opacity", '0.99', { fromValue: '1'}], position: 0, duration: 5727, easing: "easeOutQuad" },
            { id: "eid306", tween: [ "style", "${_image-1b2}", "opacity", '0', { fromValue: '0.9900000095367432'}], position: 5727, duration: 273, easing: "easeOutQuad" },
            { id: "eid266", tween: [ "style", "${_book_now_btn4}", "top", '124px', { fromValue: '124px'}], position: 15990, duration: 0, easing: "easeOutQuad" },
            { id: "eid285", tween: [ "style", "${_image-1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "style", "${_image-1a}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid336", tween: [ "style", "${_logo2}", "left", '0px', { fromValue: '-1px'}], position: 10837, duration: 1163 },
            { id: "eid273", tween: [ "style", "${_save45text5}", "top", '166px', { fromValue: '166px'}], position: 14974, duration: 0, easing: "easeOutQuad" },
            { id: "eid189", tween: [ "style", "${_rethink3}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid331", tween: [ "style", "${_logo2}", "top", '531px', { fromValue: '562px'}], position: 10837, duration: 0 },
            { id: "eid324", tween: [ "style", "${_image-3b}", "top", '5px', { fromValue: '124px'}], position: 10357, duration: 0, easing: "easeOutQuad" },
            { id: "eid325", tween: [ "style", "${_image-3b}", "top", '5px', { fromValue: '5px'}], position: 11475, duration: 0, easing: "easeOutQuad" },
            { id: "eid323", tween: [ "style", "${_image-3b}", "left", '160px', { fromValue: '230px'}], position: 10357, duration: 0, easing: "easeOutQuad" },
            { id: "eid327", tween: [ "style", "${_image-3b}", "left", '0px', { fromValue: '160px'}], position: 11475, duration: 1525, easing: "easeOutQuad" },
            { id: "eid335", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 10837, duration: 1163 },
            { id: "eid321", tween: [ "style", "${_image-3a}", "left", '0px', { fromValue: '159px'}], position: 10357, duration: 1643, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_gen_text}", "opacity", '1', { fromValue: '0.000000'}], position: 7053, duration: 812, easing: "easeInQuad" },
            { id: "eid215", tween: [ "style", "${_gen_text}", "opacity", '0.99', { fromValue: '1'}], position: 7865, duration: 1938, easing: "easeInQuad" },
            { id: "eid216", tween: [ "style", "${_gen_text}", "opacity", '0', { fromValue: '0.990000'}], position: 9803, duration: 750, easing: "easeInQuad" },
            { id: "eid267", tween: [ "style", "${_book_now_btn4}", "left", '11px', { fromValue: '11px'}], position: 15990, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"book_now_btn": {
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
      id: 'cta_bg_12x1032',
      type: 'image',
      rect: ['0px','0px','134px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_bg_12x103.png','0px','0px']
   },
   {
      id: 'cta_txt_20x1102',
      type: 'image',
      rect: ['9px','6px','119px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cta_txt_20x110.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_txt_20x1102}": [
            ["style", "left", '9px'],
            ["style", "top", '6px']
         ],
         "${_cta_bg_12x1032}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '134px']
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
      id: 'logo-shadow',
      type: 'image',
      rect: ['100px','-13px','160px','6px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo-shadow.png','0px','0px']
   },
   {
      id: 'logo-shade',
      type: 'image',
      rect: ['91px','31px','160px','73px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo-shade.png','0px','0px']
   },
   {
      id: 'logo_11x536',
      type: 'image',
      rect: ['64px','-34px','141px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo_11x536.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_logo_11x536}": [
            ["style", "left", '9px'],
            ["style", "top", '9px']
         ],
         "${_logo-shade}": [
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${symbolSelector}": [
            ["style", "height", '79px'],
            ["style", "width", '160px']
         ],
         "${_logo-shadow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
})(jQuery, AdobeEdge, "EDGE-2738550");
