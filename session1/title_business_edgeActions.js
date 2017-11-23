
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'navigation'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("challenges2.html","_self")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){window.open("discuss_why_dairy_farming_is_a_business.html","_self")});
//Edge binding end
})("navigation");
//Edge symbol end:'navigation'
})(jQuery,AdobeEdge,"EDGE-6541542");