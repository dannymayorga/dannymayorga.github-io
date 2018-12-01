package com{
	import flash.display.*;
	import flash.events.*;
	import flash.net.*;
	import com.TweenNano;
	public class Main extends MovieClip{
		private var anim:Number = .5;
		public function Main(){
			text_1_mc.alpha = 0;
			text_2_mc.alpha = 0;
			text_3_mc.alpha = 0;
			text_4_mc.alpha = 0;

			cta_btn.alpha = 0;
			addEventListener(Event.ADDED_TO_STAGE, startTheShow);
		}
		public function startTheShow(evt:Event = null):void{
			TweenNano.to(background_mc, 0, {onComplete:frame01});
			clickMe_btn.addEventListener(MouseEvent.CLICK,catchTheTag);
			cta_btn.addEventListener(MouseEvent.CLICK,catchTheTag);
			removeEventListener(Event.ADDED_TO_STAGE, startTheShow);
		}
		public function frame01(evt:Event = null):void{
			TweenNano.to(text_1_mc, anim, {alpha:1, delay:0});
			
			TweenNano.to(image_1_mc, 5, {scaleX:1, scaleY:1, x:0, y:0});
			
			TweenNano.to(background_mc, 3, {onComplete:frame02});
		}
		public function frame02(evt:Event = null):void{
			TweenNano.to(text_1_mc, anim, {alpha:0, delay:0});
			TweenNano.to(text_2_mc, anim, {alpha:1, delay:anim + .25});
			
			TweenNano.to(image_1_mc, .75, {alpha:0, overwrite:false});
			TweenNano.from(image_2_mc, 5, {scaleX:1, scaleY:1, x:0, y:0});
			
			TweenNano.to(background_mc, 4, {onComplete:frame03});
		}
		public function frame03(evt:Event = null):void{
			TweenNano.to(text_2_mc, anim, {alpha:0, delay:0});
			TweenNano.to(text_3_mc, anim, {alpha:1, delay:anim + .25});
			TweenNano.to(text_4_mc, anim, {alpha:1, delay:anim + 1.75});
						
			TweenNano.to(image_2_mc, .75, {alpha:0, overwrite:false});
			TweenNano.to(image_3_mc, 8, {scaleX:1, scaleY:1, x:0, y:0});
			
			TweenNano.to(background_mc, 4, {onComplete:frame04});
		}
		public function frame04(evt:Event = null):void{
			TweenNano.to(cta_btn, anim, {alpha:1});
		}
		private function catchTheTag(evt:Event){
			var flashVars:Object = LoaderInfo(this.root.loaderInfo).parameters;
			var clickToUse:String = new String;

			if(flashVars.clickTag){
				clickToUse = flashVars.clickTag;
			}else if(flashVars.clickTag1){
				clickToUse = flashVars.clickTag1;
			}else if(flashVars.clickTAG){
				clickToUse = flashVars.clickTAG;
			}
			if(clickToUse != ""){
				navigateToURL(new URLRequest(clickToUse),'_blank');
			}else{
				trace(evt.target.name);
			}
		}
	}
}