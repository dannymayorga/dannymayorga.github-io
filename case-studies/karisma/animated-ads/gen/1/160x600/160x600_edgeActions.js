/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_book_now_btn4}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.karismahotels.com/", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'book_now_btn'
   (function(symbolName) {   
   
   })("book_now_btn");
   //Edge symbol end:'book_now_btn'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

})(jQuery, AdobeEdge, "EDGE-2738550");