
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
(function(symbolName){})("navigation");
//Edge symbol end:'navigation'

//=========================================================

//Edge symbol: 'navSym'
(function(symbolName){})("navSym");
//Edge symbol end:'navSym'

//=========================================================

//=========================================================

//Edge symbol: 'navWithReplay'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mousedown",function(sym,e){sym.$("arrow_left").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mouseup",function(sym,e){window.open("title_partten_of_range.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mousedown",function(sym,e){sym.$("arrow_right").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mouseup",function(sym,e){window.open("partten_of_range.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_circle-arrow}","click",function(sym,e){if(!sym.getComposition().getStage().isPlaying()){sym.getComposition().getStage().play(0);}});
//Edge binding end
})("navWithReplay");
//Edge symbol end:'navWithReplay'
})(jQuery,AdobeEdge,"EDGE-4801759");