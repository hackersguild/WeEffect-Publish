
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'navigation'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){window.open("discuss.html","_self")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("learning_objectives.html","_self")});
//Edge binding end
})("navigation");
//Edge symbol end:'navigation'
})(jQuery,AdobeEdge,"EDGE-6541542");