
(function($,Edge,compId){var _=null,y=true,n=false,x4='rgba(255,245,104,1.00)',x33='ellipse',e24='${_Text2}',x32='rgb(0, 0, 0)',x52='55px',e81='${_Rectangle4}',a='Base State',e78='${_Rectangle3Copy}',s='style',e80='${_TextCopy}',i='none',x34='rgba(192,192,192,1)',x55='Group2',e22='${_Text3}',x37='16px',lf='left',x29='90px',e79='${_Rectangle3}',x57='781px',e23='${_quality_milk}',e77='${_Group}',x59='164',bg='background-color',x44='direction_button',x19='auto',x72='Rectangle3Copy',x74='TextCopy',x73='rgba(139,80,215,1)',x71='21px',x17='rgba(255,255,255,1)',tp='top',x12='500',x8='400',ov='overflow',xc='rgba(0,0,0,1)',x70='Group',x15='stage',x62='44px',e16='${_Rectangle2}',x1='4.0.0',x67='92px',c='color',x13='rgba(0,0,0,0)',x35='rgba(221,181,94,1.00)',x66='6px',x31='Ellipse',g='image',po='center',x64='rgba(139,80,215,1.00)',x39='63px',x63='Rectangle3',x68='rgba(239,239,239,1)',x61='164px',x40='30px',x58='5px',x9='rgba(242,101,34,1.00)',e76='${_Group2}',x6='19',x='text',x56='group',x53='Rectangle4',x54='rgba(49,52,55,1.00)',m='rect',x27='0px',e45='${_Ellipse}',h='height',x50='direction_button_next',x2='4.0.0.359',x47='rgba(255,255,255,1.00)',e46='${_Text}',x51='960px',x75='navigation',p='px',o='opacity',x60='44',x28='98px',x41='600',x25='rgba(239,239,239,1.00)',e48='${symbolSelector}',x3='both',e20='${_Rectangle}',x7='Arial, Helvetica, sans-serif',x36='rgba(104,91,91,1.00)',l='normal',x65='43px',x38='33px',x30='50%',x42='Text',w='width',x21='rgba(173,107,77,1.00)',dt='Default Timeline',e26='${_navigation}',e18='${_Stage}',ta='text-align',x11='30',fs='font-size',bc='border-color';var im='images/';var g14='quality%20milk.png';var s69="NEXT",s49="NEXT<br>",s43="BACK",s10="Conclusion",s5="In this session, we learned the importance of keeping dairy records. It is imperative that records must be complete enough to provide the needed information. It is necessary that the record system is accurate since it forms the basis of important and crucial decision making. Always remember records should be effectively and efficiently used.";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:x3,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['19px','64px','922px','139px','auto','auto'],f:[x4],s:[5,"rgba(173,107,77,1.00)",i]},{id:'Text3',t:x,r:['44px','85px','858px','96px','auto','auto'],text:s5,align:"left",n:[x7,x6,xc,x8,i,l]},{id:'navigation',t:m,r:['0px','445px','auto','auto','auto','auto']},{id:'Rectangle2',t:m,r:['0px','0px','960px','53px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['387px','11px','185px','30px','auto','auto'],text:s10,align:"center",n:[x7,x11,"rgba(239,239,239,1.00)",x12,i,l]},{id:'quality_milk',t:g,r:['329px','208px','303px','230px','auto','auto'],f:[x13,im+g14,'0px','0px']}],sI:[{id:'navigation',sN:'navigation',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x27,x27,x28,x29,x19,x19],br:[x30,x30,x30,x30],id:x31,s:[0,x32,i],t:x33,f:[x34,[270,[[x35,0],[x36,100]]]]},{r:[x37,x38,x39,x40,x19,x19],n:[x7,22,x17,x41,i,l],id:x42,text:s43,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button_next":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x27,x27,x28,x29,x19,x19],br:[x30,x30,x30,x30],id:x31,s:[0,x32,i],t:x33,f:[x34,[270,[[x35,0],[x36,100]]]]},{r:[x37,x38,x39,x40,x19,x19],n:[x7,22,x17,x41,i,l],id:x42,text:s49,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navigation":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x27,x27,x51,x52,x19,x19],id:x53,s:[0,x32,i],t:m,f:[x54]},{id:x55,t:x56,r:[x57,x58,x59,x60,x19,x19],c:[{r:[x27,x27,x61,x62,x19,x19],id:x63,s:[0,x32,i],t:m,f:[x64]},{r:[x65,x66,x67,x40,x19,x19],n:[x7,30,x68,x12,i,l],id:x42,text:s69,align:lf,t:x}]},{id:x70,t:x56,r:[x71,x66,x59,x60,x19,x19],c:[{r:[x27,x27,x61,x62,x19,x19],id:x72,s:[0,x32,i],t:m,f:[x73]},{r:[x65,x66,x67,x40,x19,x19],n:[x7,30,x68,x12,i,l],id:x74,text:s43,align:lf,t:x}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x15];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e16).P(tp,0).P(h,53).P(bg,x9,c).P(lf,0).P(w,960);A1.A(e18).P(bg,x17,c).P(w,960).P(h,500).P(ov,x19);A1.A(e20).P(tp,64).P(bg,x4,c).P(lf,19).P("border-style",i).P(h,139).P(bc,x21,c).P("border-width",5).P(w,922);A1.A(e22).P(tp,85).P(w,858).P(h,96).P(o,1,_,_,"").P(lf,44,_,_,p).P(fs,19);A1.A(e23).P(h,230).P(tp,208).P(lf,329).P(w,303);A1.A(e24).P(tp,11).P(fs,30).P(ta,po).P("text-decoration",i).P(c,x25,c).P("font-weight",500,_,_,"").P(lf,387,_,_,p).P(w,185);A1.A(e26).P(lf,0).P(tp,445);var S2=symbols[x44];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e45).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A2.A(e46).P(tp,33).P(fs,22).P(c,x47,c).P(h,30).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(w,63);A2.A(e48).P(h,90).P(w,98);var S3=symbols[x50];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e45).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A3.A(e46).P(tp,33).P(w,63).P(h,30).P(c,x47,c).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(fs,22);A3.A(e48).P(h,90).P(w,98);var S4=symbols[x75];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e76).P(lf,781).P(tp,5);A4.A(e77).P(tp,6).P(lf,21);A4.A(e78).P(bg,x64,c).P(lf,0).P(tp,0);A4.A(e46).P(h,30).P(tp,6).P(lf,43).P(w,92);A4.A(e48).P(h,55).P(w,960);A4.A(e79).P(bg,x64,c).P(lf,0).P(tp,0);A4.A(e80).P(tp,6).P(h,30).P(lf,43).P(w,92);A4.A(e81).P(bg,x54,c).P(lf,0).P(tp,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-779817826");