
(function($,Edge,compId){var _=null,y=true,n=false,x6='rgba(255,245,104,1.00)',x38='ellipse',e22='${_Text2}',x13='700',x37='rgb(0, 0, 0)',x66='89px',e29='${_navSym}',a='Base State',x68='navWithReplay',s='style',x1='SwiftNeueLTPro-Bold',ql='linear',i='none',x39='rgba(192,192,192,1)',x49='direction_button',x55='direction_button_next',m='rect',e20='${_Text3}',x42='16px',lf='left',x83='-161px',x82='399px',x65='1px',x34='90px',x79='64px',x78='446px',x77='12px',x52='rgba(255,255,255,1.00)',bg='background-color',x74='66px',x26='auto',x58='180',x41='rgba(104,91,91,1.00)',x72='23px',e71='${_circle-arrow}',fs='font-size',x17='600',x28='rgba(173,107,77,1.00)',x9='400',ov='overflow',xc='rgba(0,0,0,1)',x18='stage',x12='32',e70='${_arrow_left}',e19='${_Rectangle2}',x3='4.0.0',rz='rotateZ',c='color',x59='rgba(0,0,0,0)',x40='rgba(221,181,94,1.00)',t='transform',r='deg',g='image',x5='both',e25='${_Stage}',x44='63px',x81='navWithReplay_1',x64='449px',e31='${_Text4}',x45='30px',x63='circle-arrow',x62='894px',x8='19',x10='rgba(242,101,34,1.00)',x61='arrow_right',x14='rgba(20,210,216,1.00)',e23='${_Rectangle3}',x32='0px',dt='Default Timeline',h='height',x56='92px',e85='${_navWithReplay}',x35='50%',x76='897px',e51='${_Text}',e50='${_Ellipse}',p='px',o='opacity',x86='rgba(0,0,0,1.00)',x33='98px',x21='rgba(239,239,239,1.00)',e53='${symbolSelector}',x4='4.0.0.359',e27='${_Rectangle}',x46='Arial, Helvetica, sans-serif',x2='AvenirLTPro-Medium, sans-serif',l='normal',x73='13px',bc='border-color',x43='33px',x36='Ellipse',x47='Text',x='text',w='width',e69='${_arrow_right}',x84='navSym',x57='arrow_left',x30='rgba(249,247,247,1.00)',x16='20',ff='font-family',x24='rgba(255,255,255,1)',tp='top';var im='images/';var g75='arrow_right32.png',g80='circle-arrow2.png',g67='circle-arrow.png',g60='arrow_right3.png';var s11="Phases Of Heat",s15="Phase one - Early/ Pre- heat<br>",s54="NEXT<br>",s7="A cow exhibiting pre-heat signs by sniffing the behind of other cows",s48="BACK";var fonts={};fonts[x1]='';fonts[x2]='';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,stf:x5,cg:x5,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['23px','96px','968px','77px','auto','auto'],f:[x6],s:[5,"rgba(173,107,77,1.00)",i]},{id:'Text3',t:x,r:['48px','107px','917px','30px','auto','auto'],text:s7,align:"left",n:[x2,x8,xc,x9,i,l]},{id:'Rectangle2',t:m,r:['0px','0px','1024px','44px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['55px','7px','937px','37px','auto','auto'],text:s11,align:"left",n:[x1,x12,"rgba(239,239,239,1.00)",x13,i,l]},{id:'Rectangle3',t:m,r:['22px','65px','970px','30px','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i]},{id:'Text4',t:x,r:['55px','68px','428px','23px','auto','auto'],text:s15,align:"left",n:[x1,x16,"rgba(249,247,247,1.00)",x17,i,l]},{id:'navSym',t:m,r:['30px','452px','auto','auto','auto','auto']}],sI:[{id:'navSym',sN:'navSym',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x33,x34,x26,x26],br:[x35,x35,x35,x35],id:x36,s:[0,x37,i],t:x38,f:[x39,[270,[[x40,0],[x41,100]]]]},{r:[x42,x43,x44,x45,x26,x26],n:[x46,22,x24,x17,i,l],id:x47,text:s48,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button_next":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x33,x34,x26,x26],br:[x35,x35,x35,x35],id:x36,s:[0,x37,i],t:x38,f:[x39,[270,[[x40,0],[x41,100]]]]},{r:[x42,x43,x44,x45,x26,x26],n:[x46,22,x24,x17,i,l],id:x47,text:s54,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navWithReplay":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x56,x56,x26,x26],id:x57,tf:[[0,0],[x58]],t:g,f:[x59,im+g60,x32,x32]},{id:x61,t:g,r:[x62,x32,x56,x56,x26,x26],f:[x59,im+g60,x32,x32]},{id:x63,t:g,r:[x64,x65,x56,x66,x26,x26],f:[x59,im+g67,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navWithReplay_1":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{tf:[[0,0],[x58]],id:x57,t:g,r:[x72,x73,x74,x74,x26,x26],f:[x59,im+g75,x32,x32]},{id:x61,t:g,r:[x76,x77,x74,x74,x26,x26],f:[x59,im+g75,x32,x32]},{id:x63,t:g,r:[x78,x73,x74,x79,x26,x26],f:[x59,im+g80,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navSym":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x68,t:m,r:[x82,x83,x26,x26,x26,x26]}],sI:[{id:'navWithReplay',sN:'navWithReplay_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x18];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e19).P(tp,0).P(h,44).P(bg,x10,c).P(lf,0).P(w,1024);A1.A(e20).P(tp,107).P(fs,19).P(o,1,_,_,"").P(h,30,_,_,p).P(ff,x2).P(lf,48).P(w,917);A1.A(e22).P(c,x21,c).P("font-weight",700,_,_,"").P(lf,55,_,_,p).P(w,937).P(tp,7).P(h,37).P(ff,x1).P("text-decoration",i).P(fs,32);A1.A(e23).P(tp,65).P(bg,x14,c).P(lf,22).P(w,970);A1.A(e25).P(bg,x24,c).P(ov,x26).P(h,552).P(w,1024);A1.A(e27).P(tp,96).P(bg,x6,c).P("border-width",5).P(bc,x28,c).P(h,77).P("border-style",i).P(lf,23).P(w,968);A1.A(e29).P(lf,30).P(tp,452);A1.A(e31).P(c,x30,c).P("font-weight",600,_,_,"").P(lf,55,_,_,p).P(fs,20).P(tp,68).P("font-style",l).P(ff,x1).P(h,23).P(w,428);var S2=symbols[x49];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e50).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A2.A(e51).P(tp,33).P(w,63).P(h,30).P(c,x52,c).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(fs,22);A2.A(e53).P(h,90).P(w,98);var S3=symbols[x55];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e50).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A3.A(e51).P(tp,33).P(fs,22).P(c,x52,c).P(h,30).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(w,63);A3.A(e53).P(h,90).P(w,98);var S4=symbols[x68];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e69).P(tp,0).P(rz,0,t,_,r).P(h,92,_,_,p).P(lf,894).P(w,92);A4.A(e70).P(tp,0).P(rz,180,t,_,r).P(h,92,_,_,p).P(lf,0).P(w,92);A4.A(e71).P(tp,1).P(h,89).P(lf,449).P(w,92);A4.A(e53).P(h,92).P(w,986);var S5=symbols[x81];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e69).P(tp,12).P(rz,0,t,_,r).P(h,66,_,_,p).P(lf,897).P(w,66);A5.A(e70).P(tp,13).P(rz,180,t,_,r).P(h,66,_,_,p).P(lf,23).P(w,66);A5.A(e71).P(tp,13).P(h,64).P(lf,446).P(w,66);A5.A(e53).P(h,92).P(w,986);var S6=symbols[x84];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e53).P(h,92).P(w,986);A6.A(e85).P("filter.drop-shadow.color",x86,"subproperty").T(0,x86).P(lf,0).T(0,0).P("filter.contrast",1,"subproperty",_,"").T(0,1).P("filter.drop-shadow.offsetH",-3,"subproperty",_,p).T(0,-3).P("filter.drop-shadow.blur",3,"subproperty").T(0,3).P(tp,0).T(0,0).P("filter.drop-shadow.offsetV",0,"subproperty").T(0,0).P("filter.saturate",3.19,"subproperty",_,"").T(0,3.19);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-779817826");