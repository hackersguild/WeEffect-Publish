
(function($,Edge,compId){var _=null,y=true,n=false,x30='ellipse',x29='rgb(0, 0, 0)',x51='55px',x90='12px',x95='navWithReplay',e80='${_Rectangle3Copy}',e43='${_Ellipse}',x1='SwiftNeueLTPro-Bold',e79='${_TextCopy}',i='none',x31='rgba(192,192,192,1)',x53='Group2',x57='164',x16='rgba(255,255,255,1)',x20='rgba(173,107,77,1.00)',ta='text-align',e17='${_Stage}',x13='stage',x11='32',rz='rotateZ',x4='4.0.0.359',c='color',x32='rgba(221,181,94,1.00)',x40='63px',x41='30px',x9='rgba(242,101,34,1.00)',x52='rgba(49,52,55,1.00)',x60='164px',e102='${_navWithReplay}',p='px',x58='44',x25='98px',x21='rgba(239,239,239,1.00)',e46='${symbolSelector}',bc='border-color',x81='23px',x82='13px',x66='43px',x39='33px',e96='${_arrow_right}',ql='linear',x5='rgba(255,245,104,1.00)',x2='AvenirLTPro-Medium, sans-serif',x12='700',e78='${_Rectangle4}',e14='${_navSym}',a='Base State',x33='rgba(104,91,91,1.00)',x100='-161px',x38='16px',lf='left',x83='66px',x55='781px',bg='background-color',x70='21px',x71='Rectangle3Copy',e98='${_arrow_left}',x35='600',x64='500',x8='400',ov='overflow',x103='rgba(0,0,0,1.00)',x49='Rectangle4',e15='${_Rectangle2}',x101='navSym',x99='399px',x69='Group',x86='rgba(0,0,0,0)',e22='${_Text2}',e97='${_circle-arrow}',t='transform',g='image',po='center',r='deg',x91='circle-arrow',e76='${_Rectangle3}',x63='rgba(239,239,239,1)',x72='rgba(139,80,215,1)',x67='6px',x56='5px',x92='446px',e77='${_Group2}',x7='19',x='text',dt='Default Timeline',x88='arrow_right',m='rect',x24='0px',x68='92px',h='height',x85='180',x28='Ellipse',x26='90px',x89='897px',x50='960px',x74='navigation',x54='group',s='style',e23='${_Text5}',x59='Rectangle3',x93='64px',x18='auto',x61='44px',e75='${_Group}',e44='${_Text}',x27='50%',x34='Arial, Helvetica, sans-serif',x73='TextCopy',l='normal',fs='font-size',tp='top',xc='rgba(0,0,0,1)',x3='4.0.0',x36='Text',x62='rgba(139,80,215,1.00)',w='width',x42='direction_button',x84='arrow_left',x45='rgba(255,255,255,1.00)',x48='direction_button_next',ff='font-family',e19='${_Rectangle}';var im='images/';var g94='circle-arrow.png',g87='arrow_right3.png';var s6="These are naturally occurring grazing lands, where there has been minimal human influence on the type of plant species found, soil types and the general topography of the area.",s37="BACK",s65="NEXT",s10="Importance Of natural Pastures Or Veldt In Dairy",s47="NEXT<br>";var fonts={};fonts[x1]='';fonts[x2]='';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['21px','82px','983px','92px','auto','auto'],f:[x5],s:[5,"rgba(173,107,77,1.00)",i]},{id:'Text5',t:x,r:['50px','114px','960px','55px','auto','auto'],text:s6,align:"left",n:[x2,x7,xc,x8,i,l]},{id:'Rectangle2',t:m,r:['0px','0px','1024px','44px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['50px','7px','945px','37px','auto','auto'],text:s10,align:"center",n:[x1,x11,"rgba(239,239,239,1.00)",x12,i,l]},{id:'navSym',t:m,r:['21px','443px','auto','auto','auto','auto']}],sI:[{id:'navSym',sN:'navSym',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x24,x24,x25,x26,x18,x18],br:[x27,x27,x27,x27],id:x28,s:[0,x29,i],t:x30,f:[x31,[270,[[x32,0],[x33,100]]]]},{n:[x34,22,x16,x35,i,l],t:x,id:x36,text:s37,align:lf,r:[x38,x39,x40,x41,x18,x18]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button_next":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x24,x24,x25,x26,x18,x18],br:[x27,x27,x27,x27],id:x28,s:[0,x29,i],t:x30,f:[x31,[270,[[x32,0],[x33,100]]]]},{n:[x34,22,x16,x35,i,l],t:x,id:x36,text:s47,align:lf,r:[x38,x39,x40,x41,x18,x18]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navigation":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x49,s:[0,x29,i],r:[x24,x24,x50,x51,x18,x18],f:[x52]},{id:x53,t:x54,r:[x55,x56,x57,x58,x18,x18],c:[{t:m,id:x59,s:[0,x29,i],r:[x24,x24,x60,x61,x18,x18],f:[x62]},{n:[x34,30,x63,x64,i,l],t:x,id:x36,text:s65,align:lf,r:[x66,x67,x68,x41,x18,x18]}]},{id:x69,t:x54,r:[x70,x67,x57,x58,x18,x18],c:[{t:m,id:x71,s:[0,x29,i],r:[x24,x24,x60,x61,x18,x18],f:[x72]},{n:[x34,30,x63,x64,i,l],t:x,id:x73,text:s37,align:lf,r:[x66,x67,x68,x41,x18,x18]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navWithReplay":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x81,x82,x83,x83,x18,x18],id:x84,tf:[[],[x85]],t:g,f:[x86,im+g87,x24,x24]},{id:x88,t:g,r:[x89,x90,x83,x83,x18,x18],f:[x86,im+g87,x24,x24]},{id:x91,t:g,r:[x92,x82,x83,x93,x18,x18],f:[x86,im+g94,x24,x24]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navSym":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x95,t:m,r:[x99,x100,x18,x18,x18,x18]}],sI:[{id:'navWithReplay',sN:'navWithReplay',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x13];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e14).P(tp,443).P(lf,21);A1.A(e15).P(tp,0).P(h,44).P(bg,x9,c).P(lf,0).P(w,1024);A1.A(e17).P(bg,x16,c).P(w,1024).P(h,552).P(ov,x18);A1.A(e19).P(tp,82).P(bg,x5,c).P(lf,21).P("border-style",i).P(h,92).P(bc,x20,c).P("border-width",5).P(w,983);A1.A(e22).P(c,x21,c).P("font-weight",700,_,_,"").P(lf,50,_,_,p).P(w,945).P(tp,7).P(ta,po).P(h,37).P(ff,x1).P("text-decoration",i).P(fs,32);A1.A(e23).P(tp,114).P(h,55).P(ff,x2).P(lf,50).P(w,960);var S2=symbols[x42];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e43).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A2.A(e44).P(tp,33).P(fs,22).P(c,x45,c).P(h,30).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(w,63);A2.A(e46).P(h,90).P(w,98);var S3=symbols[x48];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e43).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A3.A(e44).P(tp,33).P(w,63).P(h,30).P(c,x45,c).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(fs,22);A3.A(e46).P(h,90).P(w,98);var S4=symbols[x74];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e75).P(tp,6).P(lf,21);A4.A(e76).P(bg,x62,c).P(lf,0).P(tp,0);A4.A(e44).P(h,30).P(tp,6).P(lf,43).P(w,92);A4.A(e77).P(lf,781).P(tp,5);A4.A(e46).P(h,55).P(w,960);A4.A(e78).P(bg,x52,c).P(lf,0).P(tp,0);A4.A(e79).P(tp,6).P(h,30).P(lf,43).P(w,92);A4.A(e80).P(bg,x62,c).P(lf,0).P(tp,0);var S5=symbols[x95];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e96).P(tp,12).P(rz,0,t,_,r).P(h,66,_,_,p).P(lf,897).P(w,66);A5.A(e97).P(h,64).P(tp,13).P(lf,446).P(w,66);A5.A(e46).P(h,92).P(w,986);A5.A(e98).P(tp,13).P(rz,180,t,_,r).P(h,66,_,_,p).P(lf,23).P(w,66);var S6=symbols[x101];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e46).P(h,92).P(w,986);A6.A(e102).P("filter.drop-shadow.color",x103,"subproperty").T(0,x103).P("filter.drop-shadow.offsetV",0,"subproperty").T(0,0).P("filter.contrast",1,"subproperty",_,"").T(0,1).P("filter.drop-shadow.offsetH",-3,"subproperty",_,p).T(0,-3).P("filter.drop-shadow.blur",3,"subproperty").T(0,3).P(tp,0).T(0,0).P(lf,0).T(0,0).P("filter.saturate",3.19,"subproperty",_,"").T(0,3.19);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-779817826");