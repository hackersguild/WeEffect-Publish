
(function($,Edge,compId){var _=null,y=true,n=false,x5='rgba(255,245,104,1.00)',x38='ellipse',e23='${_Text2}',x12='700',x37='rgb(0, 0, 0)',e19='${_navSym}',x60='measure_1',a='Base State',x74='navWithReplay',s='style',x1='SwiftNeueLTPro-Bold',i='none',x39='rgba(192,192,192,1)',x55='Rectangle2',e21='${_Text3}',x44='16px',lf='left',ql='linear',x82='rgba(0,0,0,1.00)',x34='90px',x31='rgba(91,72,66,1.00)',x79='-161px',x78='399px',e77='${_circle-arrow}',e76='${_arrow_left}',bg='background-color',rz='rotateZ',x27='auto',x61='180',t='transform',x69='12px',x59='measure',fs='font-size',tp='top',x29='rgba(173,107,77,1.00)',x8='400',ov='overflow',xc='rgba(0,0,0,1)',x18='stage',x11='32',e75='${_arrow_right}',e20='${_Rectangle2}',x4='4.0.0.359',x72='64px',c='color',x16='rgba(0,0,0,0)',x40='rgba(221,181,94,1.00)',x71='446px',x70='circle-arrow',g='image',r='deg',x51='rgba(255,255,255,1.00)',x46='63px',x67='arrow_right',x15='600',e30='${_Text4}',x47='30px',x65='66px',x2='AvenirLTPro-Medium, sans-serif',x63='23px',x7='19',x9='rgba(242,101,34,1.00)',dt='Default Timeline',x35='50%',x58='rgba(226,104,255,1.00)',m='rect',x32='0px',e26='${_Stage}',h='height',x54='direction_button_next',e81='${_navWithReplay}',x68='897px',e50='${_Text}',e49='${_Ellipse}',x36='Ellipse',o='opacity',x48='direction_button',x57='14px',x33='98px',x22='rgba(239,239,239,1.00)',e52='${symbolSelector}',x3='4.0.0',e28='${_Rectangle}',x14='Arial, Helvetica, sans-serif',x41='rgba(104,91,91,1.00)',l='normal',x64='13px',p='px',x45='33px',e24='${_artificial_insemination}',x42='Text',x='text',w='width',x13='14',x80='navSym',x62='arrow_left',bc='border-color',ff='font-family',x56='220px',x25='rgba(255,255,255,1)';var im='images/';var g17='artificial%20insemination.jpg',g73='circle-arrow.png',g66='arrow_right3.png';var s53="NEXT<br>",s10="Problems Associated With Artificial Insemination",s43="BACK",s6="Requires that you always keep your cows under close observation in order to detect heat. It is after you have detected heat that you can call in someone to inseminate the cows/heifers for you. because of the human error element, this has led to low success rates to as low as 15%, if not done well.";var fonts={};fonts[x1]='';fonts[x2]='';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['639px','72px','365px','210px','auto','auto'],f:[x5],s:[5,"rgba(173,107,77,1.00)",i]},{id:'Text3',t:x,r:['654px','88px','342px','183px','auto','auto'],text:s6,align:"left",n:[x2,x7,xc,x8,i,l]},{id:'Rectangle2',t:m,r:['0px','0px','1024px','44px','auto','auto'],f:[x9],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['44px','7px','800px','37px','auto','auto'],text:s10,align:"left",n:[x1,x11,"rgba(239,239,239,1.00)",x12,i,l]},{id:'Text4',t:x,r:['23px','65px','353px','15px','auto','auto'],text:"",align:"left",n:[x14,x13,"rgba(255,255,255,1.00)",x15,i,l]},{id:'artificial_insemination',t:g,r:['51px','72px','568px','327px','auto','auto'],f:[x16,im+g17,'0px','0px']},{id:'navSym',t:m,r:['32px','453px','auto','auto','auto','auto']}],sI:[{id:'navSym',sN:'navSym',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x33,x34,x27,x27],br:[x35,x35,x35,x35],id:x36,s:[0,x37,i],t:x38,f:[x39,[270,[[x40,0],[x41,100]]]]},{n:[x14,22,x25,x15,i,l],t:x,id:x42,text:s43,align:lf,r:[x44,x45,x46,x47,x27,x27]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button_next":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x33,x34,x27,x27],br:[x35,x35,x35,x35],id:x36,s:[0,x37,i],t:x38,f:[x39,[270,[[x40,0],[x41,100]]]]},{n:[x14,22,x25,x15,i,l],t:x,id:x42,text:s53,align:lf,r:[x44,x45,x46,x47,x27,x27]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"measure":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x55,s:[0,x37,i],r:[x32,x32,x56,x57,x27,x27],f:[x58]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"measure_1":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x55,s:[0,x37,i],r:[x32,x32,x56,x57,x27,x27],f:[x58]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navWithReplay":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{tf:[[0,0],[x61]],id:x62,t:g,r:[x63,x64,x65,x65,x27,x27],f:[x16,im+g66,x32,x32]},{id:x67,t:g,r:[x68,x69,x65,x65,x27,x27],f:[x16,im+g66,x32,x32]},{id:x70,t:g,r:[x71,x64,x65,x72,x27,x27],f:[x16,im+g73,x32,x32]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navSym":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x74,t:m,r:[x78,x79,x27,x27,x27,x27]}],sI:[{id:'navWithReplay',sN:'navWithReplay',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x18];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e19).P(lf,32).P(tp,453);A1.A(e20).P(tp,0).P(h,44).P(bg,x9,c).P(lf,0).P(w,1024);A1.A(e21).P(tp,88).P(w,342).P(ff,x2).P("font-weight",400,_,_,"").P(h,183,_,_,p).P(o,1,_,_,"").P(lf,654,_,_,p).P(fs,19);A1.A(e23).P(c,x22,c).P("font-weight",700,_,_,"").P(lf,44,_,_,p).P(w,800).P(tp,7).P(h,37).P(ff,x1).P("text-decoration",i).P(fs,32);A1.A(e24).P(tp,72).P(h,327).P(lf,51).P(w,568);A1.A(e26).P(bg,x25,c).P(w,1024).P(h,552).P(ov,x27);A1.A(e28).P(tp,72).P(bg,x5,c).P(lf,639).P("border-style",i).P(h,210).P(bc,x29,c).P("border-width",5).P(w,365);A1.A(e30).P(tp,65).P(w,353).P(h,15).P("font-style",l).P(c,x31,c).P("font-weight",600,_,_,"").P(lf,23,_,_,p).P(fs,14);var S2=symbols[x48];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e49).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A2.A(e50).P(tp,33).P(fs,22).P(c,x51,c).P(h,30).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(w,63);A2.A(e52).P(h,90).P(w,98);var S3=symbols[x54];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e49).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A3.A(e50).P(tp,33).P(w,63).P(h,30).P(c,x51,c).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(fs,22);A3.A(e52).P(h,90).P(w,98);var S4=symbols[x59];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e52).P(h,14).P(w,220);A4.A(e20).P(bg,x58,c).P(lf,0).P(tp,0);var S5=symbols[x60];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e20).P(bg,x58,c).P(lf,0).P(tp,0);A5.A(e52).P(h,14).P(w,220);var S6=symbols[x74];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e75).P(tp,12).P(rz,0,t,_,r).P(h,66,_,_,p).P(lf,897).P(w,66);A6.A(e76).P(tp,13).P(rz,180,t,_,r).P(h,66,_,_,p).P(lf,23).P(w,66);A6.A(e77).P(tp,13).P(h,64).P(lf,446).P(w,66);A6.A(e52).P(h,92).P(w,986);var S7=symbols[x80];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e52).P(h,92).P(w,986);A7.A(e81).P("filter.drop-shadow.color",x82,"subproperty").T(0,x82).P(tp,0).T(0,0).P("filter.contrast",1,"subproperty",_,"").T(0,1).P("filter.drop-shadow.offsetH",-3,"subproperty",_,p).T(0,-3).P("filter.drop-shadow.blur",3,"subproperty").T(0,3).P(lf,0).T(0,0).P("filter.drop-shadow.offsetV",0,"subproperty").T(0,0).P("filter.saturate",3.19,"subproperty",_,"").T(0,3.19);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-779817826");