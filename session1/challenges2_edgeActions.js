
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'direction_button'
(function(symbolName){})("direction_button");
//Edge symbol end:'direction_button'

//=========================================================

//Edge symbol: 'direction_button_1'
(function(symbolName){})("direction_button_next");
//Edge symbol end:'direction_button_next'

//=========================================================

//Edge symbol: 'navigation'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("challenges1.html","_self")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){window.open("title_business.html","_self")});
//Edge binding end
})("navigation");
//Edge symbol end:'navigation'
})(jQuery,AdobeEdge,"EDGE-779817826");