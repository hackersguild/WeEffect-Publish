
(function($,Edge,compId){var _=null,y=true,n=false,x35='ellipse',x34='rgb(0, 0, 0)',x55='55px',x93='12px',x98='navWithReplay',e84='${_Rectangle3Copy}',e48='${_Ellipse}',x2='SwiftNeueLTPro-Bold',e83='${_TextCopy}',i='none',x36='rgba(192,192,192,1)',x57='Group2',x20='rgba(255,255,255,1)',x25='rgba(173,107,77,1.00)',xc='rgba(0,0,0,1)',x16='stage',x10='32',rz='rotateZ',x4='4.0.0.359',c='color',x37='rgba(221,181,94,1.00)',x45='63px',x46='30px',x8='rgba(242,101,34,1.00)',x56='rgba(49,52,55,1.00)',x64='164px',e105='${_navWithReplay}',p='px',x62='44',x27='rgba(239,239,239,1.00)',e50='${symbolSelector}',bc='border-color',x85='23px',x86='13px',x70='43px',x44='33px',e99='${_arrow_right}',ql='linear',x5='rgba(255,245,104,1.00)',x1='AvenirLTPro-Medium, sans-serif',x11='700',e82='${_Rectangle4}',e17='${_navSym}',a='Base State',dt='Default Timeline',x103='-161px',e23='${_Text3}',x53='Rectangle4',lf='left',x31='90px',x59='781px',bg='background-color',x22='auto',x75='Rectangle3Copy',e101='${_arrow_left}',tp='top',x68='500',e19='${_Text}',ov='overflow',x106='rgba(0,0,0,1.00)',zy='scaleY',t='transform',x61='164',x102='399px',x73='Group',x6='rgba(0,0,0,0)',e100='${_circle-arrow}',e28='${_Text2}',x40='600',g='image',r='deg',x32='50%',x74='21px',x49='rgba(255,255,255,1.00)',x67='rgba(239,239,239,1)',x95='446px',x71='6px',x60='5px',x94='circle-arrow',e81='${_Group2}',x13='19',x='text',x14='400',x91='arrow_right',s='style',m='rect',x29='0px',e21='${_Stage}',h='height',e26='${_burning}',x89='180',x30='98px',x43='16px',x92='897px',x54='960px',x78='navigation',x33='Ellipse',x87='66px',e80='${_Rectangle3}',e79='${_Group}',x96='64px',x77='TextCopy',x65='44px',x76='rgba(139,80,215,1)',fs='font-size',x39='Arial, Helvetica, sans-serif',e18='${_Rectangle2}',l='normal',x3='4.0.0',x72='92px',x66='rgba(139,80,215,1.00)',x41='Text',x63='Rectangle3',w='width',x47='direction_button',x104='navSym',x88='arrow_left',x58='group',x52='direction_button_next',ff='font-family',e24='${_Rectangle}',x38='rgba(104,91,91,1.00)';var im='images/';var g97='circle-arrow.png',g90='arrow_right3.png',g7='burning.png';var s42="BACK",s12=" Controlled burning: Burning is an essential and important practice of range management. Burning can be helpful or destructive on the range.  The best time to burn for bush clearing is when the veldt/range is dormant. To stimulate re-growth on the pasture, early burning, when there is still moisture in the soil, is recommended. <br>",s15="Numbers of stock: The number of animals you put in the range will depend on the carrying capacity of the area. This is the area of grazing land that is required to support a specified number of animals in good productive condition for a given period without deterioration of the grazing area and soil. Keep accurate records on the farm so that unproductive animals are culled from the herd for efficient utilization of the limited resources.",s9="Factors To be Considered In Range management",s51="NEXT<br>",s69="NEXT";var fonts={};fonts[x1]='';fonts[x2]='';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['21px','63px','985px','410px','auto','auto'],f:[x5],s:[5,"rgba(173,107,77,1.00)",i]},{id:'burning',t:g,r:['58px','182px','407px','266px','auto','auto'],f:[x6,im+g7,'0px','0px']},{id:'Rectangle2',t:m,r:['0px','0px','1024px','44px','auto','auto'],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Text2',t:x,r:['44px','7px','889px','37px','auto','auto'],text:s9,align:"left",n:[x2,x10,"rgba(239,239,239,1.00)",x11,i,l]},{id:'Text3',t:x,r:['503px','222px','501px','176px','auto','auto'],text:s12,align:"left",n:[x1,x13,xc,x14,i,l]},{id:'Text',t:x,r:['53px','79px','951px','103px','auto','auto'],text:s15,align:"left",n:[x1,x13,xc,x14,i,l]},{id:'navSym',t:m,r:['36px','467px','auto','auto','auto','auto'],tf:[[],[],[],['1','0.84783']]}],sI:[{id:'navSym',sN:'navSym',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x29,x29,x30,x31,x22,x22],br:[x32,x32,x32,x32],id:x33,s:[0,x34,i],t:x35,f:[x36,[270,[[x37,0],[x38,100]]]]},{n:[x39,22,x20,x40,i,l],t:x,id:x41,text:s42,align:lf,r:[x43,x44,x45,x46,x22,x22]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"direction_button_next":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x29,x29,x30,x31,x22,x22],br:[x32,x32,x32,x32],id:x33,s:[0,x34,i],t:x35,f:[x36,[270,[[x37,0],[x38,100]]]]},{n:[x39,22,x20,x40,i,l],t:x,id:x41,text:s51,align:lf,r:[x43,x44,x45,x46,x22,x22]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navigation":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x53,s:[0,x34,i],r:[x29,x29,x54,x55,x22,x22],f:[x56]},{id:x57,t:x58,r:[x59,x60,x61,x62,x22,x22],c:[{t:m,id:x63,s:[0,x34,i],r:[x29,x29,x64,x65,x22,x22],f:[x66]},{n:[x39,30,x67,x68,i,l],t:x,id:x41,text:s69,align:lf,r:[x70,x71,x72,x46,x22,x22]}]},{id:x73,t:x58,r:[x74,x71,x61,x62,x22,x22],c:[{t:m,id:x75,s:[0,x34,i],r:[x29,x29,x64,x65,x22,x22],f:[x76]},{n:[x39,30,x67,x68,i,l],t:x,id:x77,text:s42,align:lf,r:[x70,x71,x72,x46,x22,x22]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navWithReplay":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x85,x86,x87,x87,x22,x22],id:x88,tf:[[],[x89]],t:g,f:[x6,im+g90,x29,x29]},{id:x91,t:g,r:[x92,x93,x87,x87,x22,x22],f:[x6,im+g90,x29,x29]},{id:x94,t:g,r:[x95,x86,x87,x96,x22,x22],f:[x6,im+g97,x29,x29]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"navSym":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x98,t:m,r:[x102,x103,x22,x22,x22,x22]}],sI:[{id:'navWithReplay',sN:'navWithReplay',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x16];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e17).P(tp,467).P(lf,36).P(zy,0.84783,t,_,"");A1.A(e18).P(tp,0).P(h,44).P(bg,x8,c).P(lf,0).P(w,1024);A1.A(e19).P(tp,79).P(h,103).P(ff,x1).P(lf,53).P(w,951);A1.A(e21).P(bg,x20,c).P(w,1024).P(h,552).P(ov,x22);A1.A(e23).P(tp,222).P(h,176).P(ff,x1).P(lf,503).P(w,501);A1.A(e24).P(tp,63).P(bg,x5,c).P(lf,21).P("border-style",i).P(h,410).P(bc,x25,c).P("border-width",5).P(w,985);A1.A(e26).P(h,266).P(tp,182).P(lf,58).P(w,407);A1.A(e28).P(c,x27,c).P("font-weight",700,_,_,"").P(lf,44,_,_,p).P(w,889).P(tp,7).P(h,37).P(ff,x2).P("text-decoration",i).P(fs,32);var S2=symbols[x47];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e48).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A2.A(e19).P(tp,33).P(fs,22).P(c,x49,c).P(h,30).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(w,63);A2.A(e50).P(h,90).P(w,98);var S3=symbols[x52];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e48).P(tp,0).P(h,90).P("background-image",[270,[['rgba(221,181,94,1.00)',0],['rgba(104,91,91,1.00)',100]]],"gradient").P(lf,0).P(w,98);A3.A(e19).P(tp,33).P(w,63).P(h,30).P(c,x49,c).P("font-weight",600,_,_,"").P(lf,16,_,_,p).P(fs,22);A3.A(e50).P(h,90).P(w,98);var S4=symbols[x78];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e79).P(tp,6).P(lf,21);A4.A(e80).P(bg,x66,c).P(lf,0).P(tp,0);A4.A(e19).P(h,30).P(tp,6).P(lf,43).P(w,92);A4.A(e81).P(lf,781).P(tp,5);A4.A(e50).P(h,55).P(w,960);A4.A(e82).P(bg,x56,c).P(lf,0).P(tp,0);A4.A(e83).P(tp,6).P(h,30).P(lf,43).P(w,92);A4.A(e84).P(bg,x66,c).P(lf,0).P(tp,0);var S5=symbols[x98];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e99).P(tp,12).P(rz,0,t,_,r).P(h,66,_,_,p).P(lf,897).P(w,66);A5.A(e100).P(tp,13).P(h,64).P(lf,446).P(w,66);A5.A(e50).P(h,92).P(w,986);A5.A(e101).P(tp,13).P(rz,180,t,_,r).P(h,66,_,_,p).P(lf,23).P(w,66);var S6=symbols[x104];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e50).P(h,92).P(w,986);A6.A(e105).P("filter.drop-shadow.color",x106,"subproperty").T(0,x106).P(lf,0).T(0,0).P("filter.contrast",1,"subproperty",_,"").T(0,1).P("filter.drop-shadow.offsetH",-3,"subproperty",_,p).T(0,-3).P("filter.drop-shadow.blur",3,"subproperty").T(0,3).P(tp,0).T(0,0).P("filter.drop-shadow.offsetV",0,"subproperty").T(0,0).P("filter.saturate",3.19,"subproperty",_,"").T(0,3.19);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-779817826");