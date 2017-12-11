
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

//Edge symbol: 'measure'
(function(symbolName){})("measure");
//Edge symbol end:'measure'

//=========================================================

//Edge symbol: 'measure_1'
(function(symbolName){})("measure_1");
//Edge symbol end:'measure_1'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'navWithReplay'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mousedown",function(sym,e){sym.$("arrow_left").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mouseup",function(sym,e){window.open("menu1.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mousedown",function(sym,e){sym.$("arrow_right").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mouseup",function(sym,e){window.open("learning_objectives.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_circle-arrow}","click",function(sym,e){if(!sym.getComposition().getStage().isPlaying()){sym.getComposition().getStage().play(0);}});
//Edge binding end
})("navWithReplay");
//Edge symbol end:'navWithReplay'

//=========================================================

//Edge symbol: 'navSym'
(function(symbolName){})("navSym");
//Edge symbol end:'navSym'

//=========================================================

//=========================================================

//Edge symbol: 'navWithReplay'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mousedown",function(sym,e){sym.$("arrow_left").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_left}","mouseup",function(sym,e){window.open("phase3_scene2.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mousedown",function(sym,e){sym.$("arrow_right").fadeIn(100).fadeOut(100).fadeIn(100);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow_right}","mouseup",function(sym,e){window.open("title_ pregnancy.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_circle-arrow}","click",function(sym,e){if(!sym.getComposition().getStage().isPlaying()){sym.getComposition().getStage().play(0);}});
//Edge binding end
})("navWithReplay_1");
//Edge symbol end:'navWithReplay_1'
})(jQuery,AdobeEdge,"EDGE-779817826");