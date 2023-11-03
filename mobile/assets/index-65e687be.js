import{r as Pe,u as Te}from"./use-route-e45c23a3.js";import{m as M,Z as le,a7 as x,q as A,d as _,aP as Ve,h as m,C as W,v as F,ab as Re,y as z,ay as Be,aQ as Ae,aR as Me,aS as _e,aT as ze,aA as Le,aU as Ne,f as Oe,j as Y,a2 as oe,U as k,as as ee,p as De,aV as We,aW as Fe,a9 as je,ac as D,g as qe,a4 as pe,a6 as H,x as Ue,Y as T,aX as te,aY as Ye,ae as Ke,Q as He,aZ as Qe,n as Ze,s as Je,F as ne,a_ as Xe,a$ as Ge}from"./index-eaaf9806.js";import{c as et,C as tt}from"./index-b0a9572a.js";const[nt,V]=M("button"),at=le({},Pe,{tag:x("button"),text:String,icon:String,type:x("default"),size:x("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:x("button"),loadingSize:A,loadingText:String,loadingType:String,iconPosition:x("left")});var it=_({name:nt,props:at,emits:["click"],setup(e,{emit:a,slots:n}){const d=Te(),r=()=>n.loading?n.loading():m(Re,{size:e.loadingSize,type:e.loadingType,class:V("loading")},null),i=()=>{if(e.loading)return r();if(n.icon)return m("div",{class:V("icon")},[n.icon()]);if(e.icon)return m(W,{name:e.icon,class:V("icon"),classPrefix:e.iconPrefix},null)},u=()=>{let c;if(e.loading?c=e.loadingText:c=n.default?n.default():e.text,c)return m("span",{class:V("text")},[c])},f=()=>{const{color:c,plain:g}=e;if(c){const C={color:g?c:"white"};return g||(C.background=c),c.includes("gradient")?C.border=0:C.borderColor=c,C}},s=c=>{e.loading?F(c):e.disabled||(a("click",c),d())};return()=>{const{tag:c,type:g,size:C,block:I,round:R,plain:j,square:$,loading:L,disabled:B,hairline:P,nativeType:q,iconPosition:E}=e,p=[V([g,C,{plain:j,block:I,round:R,square:$,loading:L,disabled:B,hairline:P}]),{[Ve]:P}];return m(c,{type:q,class:p,style:f(),disabled:B,onClick:s},{default:()=>[m("div",{class:V("content")},[E==="left"&&i(),u(),E==="right"&&i()])]})}}});const Vt=z(it);let rt=0;function lt(){const e=Be(),{name:a="unknown"}=(e==null?void 0:e.type)||{};return`${a}-${++rt}`}function se(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function ot(e,a){if(se(e)){if(a.required)return!1;if(a.validateEmpty===!1)return!0}return!(a.pattern&&!a.pattern.test(String(e)))}function st(e,a){return new Promise(n=>{const d=a.validator(e,a);if(_e(d)){d.then(n);return}n(d)})}function ae(e,a){const{message:n}=a;return ze(n)?n(e,a):n||""}function ct({target:e}){e.composing=!0}function ie({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ut(e,a){const n=Ae();e.style.height="auto";let d=e.scrollHeight;if(Le(a)){const{maxHeight:r,minHeight:i}=a;r!==void 0&&(d=Math.min(d,r)),i!==void 0&&(d=Math.max(d,i))}d&&(e.style.height=`${d}px`,Me(n))}function dt(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function w(e){return[...e].length}function K(e,a){return[...e].slice(0,a).join("")}const[ft,v]=M("field"),gt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:A,formatter:Function,clearIcon:x("clear"),modelValue:H(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:x("focus"),formatTrigger:x("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},mt=le({},et,gt,{rows:A,type:x("text"),rules:Array,autosize:[Boolean,Object],labelWidth:A,labelClass:Ne,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ht=_({name:ft,props:mt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:n}){const d=lt(),r=Oe({status:"unvalidated",focused:!1,validateMessage:""}),i=Y(),u=Y(),f=Y(),{parent:s}=oe(Ue),c=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(T(e[t]))return e[t];if(s&&T(s.props[t]))return s.props[t]},C=k(()=>{const t=g("readonly");if(e.clearable&&!t){const l=c()!=="",o=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return l&&o}return!1}),I=k(()=>f.value&&n.input?f.value():e.modelValue),R=k(()=>{var t;const l=g("required");return l==="auto"?(t=e.rules)==null?void 0:t.some(o=>o.required):l}),j=t=>t.reduce((l,o)=>l.then(()=>{if(r.status==="failed")return;let{value:h}=I;if(o.formatter&&(h=o.formatter(h,o)),!ot(h,o)){r.status="failed",r.validateMessage=ae(h,o);return}if(o.validator)return se(h)&&o.validateEmpty===!1?void 0:st(h,o).then(y=>{y&&typeof y=="string"?(r.status="failed",r.validateMessage=y):y===!1&&(r.status="failed",r.validateMessage=ae(h,o))})}),Promise.resolve()),$=()=>{r.status="unvalidated",r.validateMessage=""},L=()=>a("endValidate",{status:r.status,message:r.validateMessage}),B=(t=e.rules)=>new Promise(l=>{$(),t?(a("startValidate"),j(t).then(()=>{r.status==="failed"?(l({name:e.name,message:r.validateMessage}),L()):(r.status="passed",l(),L())})):l()}),P=t=>{if(s&&e.rules){const{validateTrigger:l}=s.props,o=te(l).includes(t),h=e.rules.filter(y=>y.trigger?te(y.trigger).includes(t):o);h.length&&B(h)}},q=t=>{var l;const{maxlength:o}=e;if(T(o)&&w(t)>+o){const h=c();if(h&&w(h)===+o)return h;const y=(l=i.value)==null?void 0:l.selectionEnd;if(r.focused&&y){const b=[...t],S=b.length-+o;return b.splice(y-S,S),b.join("")}return K(t,+o)}return t},E=(t,l="onChange")=>{const o=t;t=q(t);const h=w(o)-w(t);if(e.type==="number"||e.type==="digit"){const b=e.type==="number";t=Ye(t,b,b)}let y=0;if(e.formatter&&l===e.formatTrigger){const{formatter:b,maxlength:S}=e;if(t=b(t),T(S)&&w(t)>+S&&(t=K(t,+S)),i.value&&r.focused){const{selectionEnd:O}=i.value,G=K(o,O);y=w(b(G))-w(G)}}if(i.value&&i.value.value!==t)if(r.focused){let{selectionStart:b,selectionEnd:S}=i.value;if(i.value.value=t,T(b)&&T(S)){const O=w(t);h?(b-=h,S-=h):y&&(b+=y,S+=y),i.value.setSelectionRange(Math.min(b,O),Math.min(S,O))}}else i.value.value=t;t!==e.modelValue&&a("update:modelValue",t)},p=t=>{t.target.composing||E(t.target.value)},U=()=>{var t;return(t=i.value)==null?void 0:t.blur()},Q=()=>{var t;return(t=i.value)==null?void 0:t.focus()},N=()=>{const t=i.value;e.type==="textarea"&&e.autosize&&t&&ut(t,e.autosize)},fe=t=>{r.focused=!0,a("focus",t),D(N),g("readonly")&&U()},ge=t=>{r.focused=!1,E(c(),"onBlur"),a("blur",t),!g("readonly")&&(P("onBlur"),D(N),Qe())},Z=t=>a("clickInput",t),me=t=>a("clickLeftIcon",t),he=t=>a("clickRightIcon",t),ye=t=>{F(t),a("update:modelValue",""),a("clear",t)},J=k(()=>{if(typeof e.error=="boolean")return e.error;if(s&&s.props.showError&&r.status==="failed")return!0}),be=k(()=>{const t=g("labelWidth"),l=g("labelAlign");if(t&&l!=="top")return{width:ee(t)}}),ve=t=>{t.keyCode===13&&(!(s&&s.props.submitOnEnter)&&e.type!=="textarea"&&F(t),e.type==="search"&&U()),a("keypress",t)},X=()=>e.id||`${d}-input`,Se=()=>r.status,xe=()=>{const t=v("control",[g("inputAlign"),{error:J.value,custom:!!n.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(n.input)return m("div",{class:t,onClick:Z},[n.input()]);const l={id:X(),ref:i,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${d}-label`:void 0,onBlur:ge,onFocus:fe,onInput:p,onClick:Z,onChange:ie,onKeypress:ve,onCompositionend:ie,onCompositionstart:ct};return e.type==="textarea"?m("textarea",l,null):m("input",Ke(dt(e.type),l),null)},Ce=()=>{const t=n["left-icon"];if(e.leftIcon||t)return m("div",{class:v("left-icon"),onClick:me},[t?t():m(W,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ke=()=>{const t=n["right-icon"];if(e.rightIcon||t)return m("div",{class:v("right-icon"),onClick:he},[t?t():m(W,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},we=()=>{if(e.showWordLimit&&e.maxlength){const t=w(c());return m("div",{class:v("word-limit")},[m("span",{class:v("word-num")},[t]),He("/"),e.maxlength])}},Ie=()=>{if(s&&s.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const l=n["error-message"],o=g("errorMessageAlign");return m("div",{class:v("error-message",o)},[l?l({message:t}):t])}},Ee=()=>{const t=g("labelWidth"),l=g("labelAlign"),o=g("colon")?":":"";if(n.label)return[n.label(),o];if(e.label)return m("label",{id:`${d}-label`,for:n.input?void 0:X(),onClick:h=>{F(h),Q()},style:l==="top"&&t?{width:ee(t)}:void 0},[e.label+o])},$e=()=>[m("div",{class:v("body")},[xe(),C.value&&m(W,{ref:u,name:e.clearIcon,class:v("clear")},null),ke(),n.button&&m("div",{class:v("button")},[n.button()])]),we(),Ie()];return De({blur:U,focus:Q,validate:B,formValue:I,resetValidation:$,getValidationStatus:Se}),We(Fe,{customValue:f,resetValidation:$,validateWithTrigger:P}),je(()=>e.modelValue,()=>{E(c()),$(),P("onChange"),D(N)}),qe(()=>{E(c(),e.formatTrigger),D(N)}),pe("touchstart",ye,{target:k(()=>{var t;return(t=u.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),l=g("labelAlign"),o=Ce(),h=()=>{const y=Ee();return l==="top"?[o,y].filter(Boolean):y||[]};return m(tt,{size:e.size,class:v({error:J.value,disabled:t,[`label-${l}`]:l}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:be.value,valueClass:v("value"),titleClass:[v("label",[l,{required:R.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:o&&l!=="top"?()=>o:null,title:h,value:$e,extra:n.extra})}}});const Rt=z(ht),[ce,yt]=M("row"),ue=Symbol(ce),bt={tag:x("div"),wrap:Je,align:String,gutter:H(0),justify:String};var vt=_({name:ce,props:bt,setup(e,{slots:a}){const{children:n,linkChildren:d}=Ze(ue),r=k(()=>{const u=[[]];let f=0;return n.forEach((s,c)=>{f+=Number(s.span),f>24?(u.push([c]),f-=24):u[u.length-1].push(c)}),u}),i=k(()=>{const u=Number(e.gutter),f=[];return u&&r.value.forEach(s=>{const c=u*(s.length-1)/s.length;s.forEach((g,C)=>{if(C===0)f.push({right:c});else{const I=u-f[g-1].right,R=c-I;f.push({left:I,right:R})}})}),f});return d({spaces:i}),()=>{const{tag:u,wrap:f,align:s,justify:c}=e;return m(u,{class:yt({[`align-${s}`]:s,[`justify-${c}`]:c,nowrap:!f})},{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a)]}})}}});const[St,xt]=M("col"),Ct={tag:x("div"),span:H(0),offset:A};var kt=_({name:St,props:Ct,setup(e,{slots:a}){const{parent:n,index:d}=oe(ue),r=k(()=>{if(!n)return;const{spaces:i}=n;if(i&&i.value&&i.value[d.value]){const{left:u,right:f}=i.value[d.value];return{paddingLeft:u?`${u}px`:null,paddingRight:f?`${f}px`:null}}});return()=>{const{tag:i,span:u,offset:f}=e;return m(i,{style:r.value,class:xt({[u]:u,[`offset-${f}`]:f})},{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a)]}})}}});const Bt=z(kt),At=z(vt),[re,wt]=M("space"),It={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function de(e=[]){const a=[];return e.forEach(n=>{Array.isArray(n)?a.push(...n):n.type===ne?a.push(...de(n.children)):a.push(n)}),a.filter(n=>{var d;return!(n&&(n.type===Xe||n.type===ne&&((d=n.children)==null?void 0:d.length)===0||n.type===Ge&&n.children.trim()===""))})}var Et=_({name:re,props:It,setup(e,{slots:a}){const n=k(()=>{var i;return(i=e.align)!=null?i:e.direction==="horizontal"?"center":""}),d=i=>typeof i=="number"?i+"px":i,r=i=>{const u={},f=`${d(Array.isArray(e.size)?e.size[0]:e.size)}`,s=`${d(Array.isArray(e.size)?e.size[1]:e.size)}`;return i?e.wrap?{marginBottom:s}:{}:(e.direction==="horizontal"&&(u.marginRight=f),(e.direction==="vertical"||e.wrap)&&(u.marginBottom=s),u)};return()=>{var i;const u=de((i=a.default)==null?void 0:i.call(a));return m("div",{class:[wt({[e.direction]:e.direction,[`align-${n.value}`]:n.value,wrap:e.wrap,fill:e.fill})]},[u.map((f,s)=>m("div",{key:`item-${s}`,class:`${re}-item`,style:r(s===u.length-1)},[f]))])}}});const Mt=z(Et);export{Vt as B,Bt as C,Rt as F,At as R,Mt as S,gt as f,lt as u};
