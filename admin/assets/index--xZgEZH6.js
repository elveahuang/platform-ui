var Ye=Object.defineProperty,Ge=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Ee=(o,s,n)=>s in o?Ye(o,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[s]=n,oe=(o,s)=>{for(var n in s||(s={}))Je.call(s,n)&&Ee(o,n,s[n]);if(Ce)for(var n of Ce(s))Qe.call(s,n)&&Ee(o,n,s[n]);return o},Ie=(o,s)=>Ge(o,qe(s));var U=(o,s,n)=>new Promise((a,u)=>{var c=d=>{try{m(n.next(d))}catch(b){u(b)}},p=d=>{try{m(n.throw(d))}catch(b){u(b)}},m=d=>d.done?a(d.value):Promise.resolve(d.value).then(c,p);m((n=n.apply(o,s)).next())});import{E as Te,c as f,b2 as Ze,aA as Re,r as N,S as q,T as J,a9 as et,b0 as tt,J as ze,H as at,bh as ot,I as ne,az as Fe,ah as se,d as Ae,ad as nt,aK as st,O as ke,bO as lt,c0 as it,c1 as rt,aF as ut,U as P,o as ct,aG as dt,a5 as pt,a4 as ft,e as v,g as S,A as h,F as le,n as g,i as t,q as X,k as V,f as E,w as M,a1 as Y,X as O,af as ie,bQ as vt,j as mt,W as ht,b7 as yt,t as G,V as gt,a8 as bt,aE as Pe,ac as xt}from"./index-OstrK1OQ.js";import{m as wt,e as St,h as Ct,b as Et,d as It,i as zt,g as Ve}from"./index-9rPCpThB.js";const Ft=()=>Te&&/firefox/i.test(window.navigator.userAgent),re="update:modelValue",Gt="change",kt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),Pt=["class","style"],Vt=/^on[A-Z]/,Nt=(o={})=>{const{excludeListeners:s=!1,excludeKeys:n}=o,a=f(()=>((n==null?void 0:n.value)||[]).concat(Pt)),u=Re();return u?f(()=>{var c;return Ze(Object.entries((c=u.proxy)==null?void 0:c.$attrs).filter(([p])=>!a.value.includes(p)&&!(s&&Vt.test(p))))}):f(()=>({}))};function Tt(o){const s=N();function n(){if(o.value==null)return;const{selectionStart:u,selectionEnd:c,value:p}=o.value;if(u==null||c==null)return;const m=p.slice(0,Math.max(0,u)),d=p.slice(Math.max(0,c));s.value={selectionStart:u,selectionEnd:c,value:p,beforeTxt:m,afterTxt:d}}function a(){if(o.value==null||s.value==null)return;const{value:u}=o.value,{beforeTxt:c,afterTxt:p,selectionStart:m}=s.value;if(c==null||p==null||m==null)return;let d=u.length;if(u.endsWith(p))d=u.length-p.length;else if(u.startsWith(c))d=c.length;else{const b=c[m-1],w=u.indexOf(b,m-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[n,a]}function Rt(o,{afterFocus:s,beforeBlur:n,afterBlur:a}={}){const u=Re(),{emit:c}=u,p=q(),m=N(!1),d=i=>{m.value||(m.value=!0,c("focus",i),s==null||s())},b=i=>{var T;tt(n)&&n(i)||i.relatedTarget&&((T=p.value)!=null&&T.contains(i.relatedTarget))||(m.value=!1,c("blur",i),a==null||a())},w=()=>{var i;(i=o.value)==null||i.focus()};return J(p,i=>{i&&i.setAttribute("tabindex","-1")}),et(p,"click",w),{wrapperRef:p,isFocused:m,handleFocus:d,handleBlur:b}}let x;const At=`
  height:0 !important;
  visibility:hidden !important;
  ${Ft()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function $t(o){const s=window.getComputedStyle(o),n=s.getPropertyValue("box-sizing"),a=Number.parseFloat(s.getPropertyValue("padding-bottom"))+Number.parseFloat(s.getPropertyValue("padding-top")),u=Number.parseFloat(s.getPropertyValue("border-bottom-width"))+Number.parseFloat(s.getPropertyValue("border-top-width"));return{contextStyle:Bt.map(p=>`${p}:${s.getPropertyValue(p)}`).join(";"),paddingSize:a,borderSize:u,boxSizing:n}}function Ne(o,s=1,n){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:u,borderSize:c,boxSizing:p,contextStyle:m}=$t(o);x.setAttribute("style",`${m};${At}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};p==="border-box"?d=d+c:p==="content-box"&&(d=d-u),x.value="";const w=x.scrollHeight-u;if(ze(s)){let i=w*s;p==="border-box"&&(i=i+u+c),d=Math.max(i,d),b.minHeight=`${i}px`}if(ze(n)){let i=w*n;p==="border-box"&&(i=i+u+c),d=Math.min(i,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const Mt=at({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:ne([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ne([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Fe},prefixIcon:{type:Fe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ne([Object,Array,String]),default:()=>wt({})},autofocus:{type:Boolean,default:!1}}),Ot={[re]:o=>se(o),input:o=>se(o),change:o=>se(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Ht=["role"],Lt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Dt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Kt=Ae({name:"ElInput",inheritAttrs:!1}),jt=Ae(Ie(oe({},Kt),{props:Mt,emits:Ot,setup(o,{expose:s,emit:n}){const a=o,u=nt(),c=st(),p=f(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e}),m=f(()=>[a.type==="textarea"?ce.b():r.b(),r.m(ue.value),r.is("disabled",z.value),r.is("exceed",Oe.value),{[r.b("group")]:c.prepend||c.append,[r.bm("group","append")]:c.append,[r.bm("group","prepend")]:c.prepend,[r.m("prefix")]:c.prefix||a.prefixIcon,[r.m("suffix")]:c.suffix||a.suffixIcon||a.clearable||a.showPassword,[r.bm("suffix","password-clear")]:W.value&&ee.value},u.class]),d=f(()=>[r.e("wrapper"),r.is("focus",Z.value)]),b=Nt({excludeKeys:f(()=>Object.keys(p.value))}),{form:w,formItem:i}=St(),{inputId:T}=Ct(a,{formItemContext:i}),ue=Et(),z=It(),r=ke("input"),ce=ke("textarea"),H=q(),C=q(),Q=N(!1),R=N(!1),L=N(!1),de=N(),D=q(a.inputStyle),F=f(()=>H.value||C.value),{wrapperRef:Be,isFocused:Z,handleFocus:K,handleBlur:j}=Rt(F,{afterBlur(){var e;a.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"blur").catch(l=>Ve()))}}),pe=f(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),A=f(()=>(i==null?void 0:i.validateState)||""),fe=f(()=>A.value&&lt[A.value]),$e=f(()=>L.value?it:rt),Me=f(()=>[u.style]),ve=f(()=>[a.inputStyle,D.value,{resize:a.resize}]),I=f(()=>zt(a.modelValue)?"":String(a.modelValue)),W=f(()=>a.clearable&&!z.value&&!a.readonly&&!!I.value&&(Z.value||Q.value)),ee=f(()=>a.showPassword&&!z.value&&!a.readonly&&!!I.value&&(!!I.value||Z.value)),k=f(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),te=f(()=>I.value.length),Oe=f(()=>!!k.value&&te.value>Number(a.maxlength)),He=f(()=>!!c.suffix||!!a.suffixIcon||W.value||a.showPassword||k.value||!!A.value&&pe.value),[Le,De]=Tt(H);ut(C,e=>{if(Ke(),!k.value||a.resize!=="both")return;const l=e[0],{width:y}=l.contentRect;de.value={right:`calc(100% - ${y+15+6}px)`}});const B=()=>{const{type:e,autosize:l}=a;if(!(!Te||e!=="textarea"||!C.value))if(l){const y=Pe(l)?l.minRows:void 0,_=Pe(l)?l.maxRows:void 0,Se=Ne(C.value,y,_);D.value=oe({overflowY:"hidden"},Se),P(()=>{C.value.offsetHeight,D.value=Se})}else D.value={minHeight:Ne(C.value).minHeight}},Ke=(e=>{let l=!1;return()=>{var y;if(l||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),l=!0)}})(B),$=()=>{const e=F.value,l=a.formatter?a.formatter(I.value):I.value;!e||e.value===l||(e.value=l)},ae=e=>U(this,null,function*(){Le();let{value:l}=e.target;if(a.formatter&&(l=a.parser?a.parser(l):l),!R.value){if(l===I.value){$();return}n(re,l),n("input",l),yield P(),$(),De()}}),me=e=>{n("change",e.target.value)},he=e=>{n("compositionstart",e),R.value=!0},ye=e=>{var l;n("compositionupdate",e);const y=(l=e.target)==null?void 0:l.value,_=y[y.length-1]||"";R.value=!kt(_)},ge=e=>{n("compositionend",e),R.value&&(R.value=!1,ae(e))},je=()=>{L.value=!L.value,be()},be=()=>U(this,null,function*(){var e;yield P(),(e=F.value)==null||e.focus()}),We=()=>{var e;return(e=F.value)==null?void 0:e.blur()},_e=e=>{Q.value=!1,n("mouseleave",e)},Ue=e=>{Q.value=!0,n("mouseenter",e)},xe=e=>{n("keydown",e)},Xe=()=>{var e;(e=F.value)==null||e.select()},we=()=>{n(re,""),n("change",""),n("clear"),n("input","")};return J(()=>a.modelValue,()=>{var e;P(()=>B()),a.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"change").catch(l=>Ve()))}),J(I,()=>$()),J(()=>a.type,()=>U(this,null,function*(){yield P(),$(),B()})),ct(()=>{!a.formatter&&a.parser,$(),P(B)}),s({input:H,textarea:C,ref:F,textareaStyle:ve,autosize:dt(a,"autosize"),focus:be,blur:We,select:Xe,clear:we,resizeTextarea:B}),(e,l)=>pt((v(),S("div",ie(t(p),{class:t(m),style:t(Me),role:e.containerRole,onMouseenter:Ue,onMouseleave:_e}),[h(" input "),e.type!=="textarea"?(v(),S(le,{key:0},[h(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:g(t(r).be("group","prepend"))},[X(e.$slots,"prepend")],2)):h("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Be,class:g(t(d))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:g(t(r).e("prefix"))},[V("span",{class:g(t(r).e("prefix-inner"))},[X(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(O),{key:0,class:g(t(r).e("icon"))},{default:M(()=>[(v(),E(Y(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),V("input",ie({id:t(T),ref_key:"input",ref:H,class:t(r).e("inner")},t(b),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?L.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:he,onCompositionupdate:ye,onCompositionend:ge,onInput:ae,onFocus:l[0]||(l[0]=(...y)=>t(K)&&t(K)(...y)),onBlur:l[1]||(l[1]=(...y)=>t(j)&&t(j)(...y)),onChange:me,onKeydown:xe}),null,16,Lt),h(" suffix slot "),t(He)?(v(),S("span",{key:1,class:g(t(r).e("suffix"))},[V("span",{class:g(t(r).e("suffix-inner"))},[!t(W)||!t(ee)||!t(k)?(v(),S(le,{key:0},[X(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(O),{key:0,class:g(t(r).e("icon"))},{default:M(()=>[(v(),E(Y(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(W)?(v(),E(t(O),{key:1,class:g([t(r).e("icon"),t(r).e("clear")]),onMousedown:ht(t(yt),["prevent"]),onClick:we},{default:M(()=>[mt(t(vt))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(ee)?(v(),E(t(O),{key:2,class:g([t(r).e("icon"),t(r).e("password")]),onClick:je},{default:M(()=>[(v(),E(Y(t($e))))]),_:1},8,["class"])):h("v-if",!0),t(k)?(v(),S("span",{key:3,class:g(t(r).e("count"))},[V("span",{class:g(t(r).e("count-inner"))},G(t(te))+" / "+G(e.maxlength),3)],2)):h("v-if",!0),t(A)&&t(fe)&&t(pe)?(v(),E(t(O),{key:4,class:g([t(r).e("icon"),t(r).e("validateIcon"),t(r).is("loading",t(A)==="validating")])},{default:M(()=>[(v(),E(Y(t(fe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:g(t(r).be("group","append"))},[X(e.$slots,"append")],2)):h("v-if",!0)],64)):(v(),S(le,{key:1},[h(" textarea "),V("textarea",ie({id:t(T),ref_key:"textarea",ref:C,class:t(ce).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ve),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:he,onCompositionupdate:ye,onCompositionend:ge,onInput:ae,onFocus:l[2]||(l[2]=(...y)=>t(K)&&t(K)(...y)),onBlur:l[3]||(l[3]=(...y)=>t(j)&&t(j)(...y)),onChange:me,onKeydown:xe}),null,16,Dt),t(k)?(v(),S("span",{key:0,style:gt(de.value),class:g(t(r).e("count"))},G(t(te))+" / "+G(e.maxlength),7)):h("v-if",!0)],64))],16,Ht)),[[ft,e.type!=="hidden"]])}}));var Wt=bt(jt,[["__file","input.vue"]]);const qt=xt(Wt);export{Gt as C,qt as E,re as U,Rt as a,kt as i,Nt as u};
