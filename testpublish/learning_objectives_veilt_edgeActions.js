
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
(function(symbolName){})("navigation");
//Edge symbol end:'navigation'

//=========================================================

//Edge symbol: 'listItem'
(function(symbolName){})("listItem");
//Edge symbol end:'listItem'

//=========================================================

//Edge symbol: 'diamondBulllet'
(function(symbolName){})("diamondBulllet");
//Edge symbol end:'diamondBulllet'

//=========================================================

//Edge symbol: 'listItem_1'
(function(symbolName){})("listItem_1");
//Edge symbol end:'listItem_1'

//=========================================================

//Edge symbol: 'listItem_2'
(function(symbolName){})("listItem_2");
//Edge symbol end:'listItem_2'

//=========================================================

//Edge symbol: 'listItem_3'
(function(symbolName){})("listItem_3");
//Edge symbol end:'listItem_3'

//=========================================================

//Edge symbol: 'listItem_4'
(function(symbolName){})("listItem_4");
//Edge symbol end:'listItem_4'

//=========================================================

//Edge symbol: 'listItem_5'
(function(symbolName){})("listItem_5");
//Edge symbol end:'listItem_5'

//=========================================================

//Edge symbol: 'listItem_6'
(function(symbolName){})("listItem_6");
//Edge symbol end:'listItem_6'

//=========================================================

//Edge symbol: 'listItem_7'
(function(symbolName){})("listItem_7");
//Edge symbol end:'listItem_7'

//=========================================================

//Edge symbol: 'navSym'
(function(symbolName){})("navSym");
//Edge symbol end:'navSym'

//=========================================================

//=========================================================

//Edge symbol: 'navWithReplay'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mousedown",function(sym,e){sym.$("arrow_left").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mouseup",function(sym,e){window.open("title_velt_and_range.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mousedown",function(sym,e){sym.$("arrow_right").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mouseup",function(sym,e){window.open("introduction_chpt13.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_circle-arrow}","click",function(sym,e){if(!sym.getComposition().getStage().isPlaying()){sym.getComposition().getStage().play(0);}});
//Edge binding end
})("navWithReplay");
//Edge symbol end:'navWithReplay'
})(jQuery,AdobeEdge,"EDGE-779817826");