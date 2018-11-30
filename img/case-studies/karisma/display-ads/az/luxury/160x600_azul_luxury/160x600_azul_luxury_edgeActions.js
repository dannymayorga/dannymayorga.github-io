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
      
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'book-btn'
   (function(symbolName) {   
   
   })("book-btn");
   //Edge symbol end:'book-btn'

   //=========================================================
   
   //Edge symbol: 'book-btn_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_cta_txt_20x110}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.karismahotels.com/", "_self");
         

      });
      //Edge binding end

   })("book-btn_1");
   //Edge symbol end:'book-btn_1'

})(jQuery, AdobeEdge, "EDGE-2738550");