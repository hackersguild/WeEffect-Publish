
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'navigation'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("menu1.html","_self")});
//Edge binding end
})("navigation");
//Edge symbol end:'navigation'
})(jQuery,AdobeEdge,"EDGE-33142668");