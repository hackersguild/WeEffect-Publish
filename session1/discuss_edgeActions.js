
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Discussion'
(function(symbolName){})("Discussion");
//Edge symbol end:'Discussion'

//=========================================================

//Edge symbol: 'navigation'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("learning_objectives.html","_self")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){window.open("introduction_to_dairy_farming.html","_self")});
//Edge binding end
})("navigation");
//Edge symbol end:'navigation'
})(jQuery,AdobeEdge,"EDGE-4801759");