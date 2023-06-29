import{r as Ee,u as Pe}from"./use-route-1671b2c2.js";import{I as q}from"./index-4fd1afda.js";import{j as K,ac as re,d as _,h as c,e as A,z as k,az as Te,n as E,y as S,as as G,x as z,p as H,aA as Ve,at as Be,ad as Le,aB as Re,aC as $e,N as J,a as Me,a8 as _e,r as U,L as le,D as Ae,aD as ze,w as pe,A as j,B as De,f as Ne,m as B,aE as ne,aF as Oe,H as We,W as Fe,aG as je,t as qe,O as He}from"./index-5a84dfa4.js";import{b as Ke,F as Ue}from"./constant-72a8536f.js";import{c as Ye,C as Ge}from"./index-ad1a318a.js";function Je(e){const n=re();n&&K(n.proxy,e)}const[Qe,M]=_("loading"),Xe=Array(12).fill(null).map((e,n)=>c("i",{class:M("line",String(n+1))},null)),Ze=c("svg",{class:M("circular"),viewBox:"25 25 50 50"},[c("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),et={size:E,type:S("circular"),color:String,vertical:Boolean,textSize:E,textColor:String};var tt=A({name:Qe,props:et,setup(e,{slots:n}){const a=k(()=>K({color:e.color},Te(e.size))),f=()=>{const i=e.type==="spinner"?Xe:Ze;return c("span",{class:M("spinner",e.type),style:a.value},[n.icon?n.icon():i])},r=()=>{var i;if(n.default)return c("span",{class:M("text"),style:{fontSize:G(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[n.default()])};return()=>{const{type:i,vertical:g}=e;return c("div",{class:M([i,{vertical:g}]),"aria-live":"polite","aria-busy":!0},[f(),r()])}}});const nt=z(tt),[at,L]=_("button"),it=K({},Ee,{tag:S("button"),text:String,icon:String,type:S("default"),size:S("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:S("button"),loadingSize:E,loadingText:String,loadingType:String,iconPosition:S("left")});var rt=A({name:at,props:it,emits:["click"],setup(e,{emit:n,slots:a}){const f=Pe(),r=()=>a.loading?a.loading():c(nt,{size:e.loadingSize,type:e.loadingType,class:L("loading")},null),i=()=>{if(e.loading)return r();if(a.icon)return c("div",{class:L("icon")},[a.icon()]);if(e.icon)return c(q,{name:e.icon,class:L("icon"),classPrefix:e.iconPrefix},null)},g=()=>{let o;if(e.loading?o=e.loadingText:o=a.default?a.default():e.text,o)return c("span",{class:L("text")},[o])},m=()=>{const{color:o,plain:d}=e;if(o){const C={color:d?o:"white"};return d||(C.background=o),o.includes("gradient")?C.border=0:C.borderColor=o,C}},u=o=>{e.loading?H(o):e.disabled||(n("click",o),f())};return()=>{const{tag:o,type:d,size:C,block:w,round:R,plain:P,square:p,loading:D,disabled:T,hairline:N,nativeType:V,iconPosition:O}=e,$=[L([d,C,{plain:P,block:w,round:R,square:p,loading:D,disabled:T,hairline:N}]),{[Ke]:N}];return c(o,{type:V,class:$,style:m(),disabled:T,onClick:u},{default:()=>[c("div",{class:L("content")},[O==="left"&&i(),g(),O==="right"&&i()])]})}}});const Bt=z(rt);let lt=0;function ot(){const e=re(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++lt}`}function oe(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function st(e,n){if(oe(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function ct(e,n){return new Promise(a=>{const f=n.validator(e,n);if(Re(f)){f.then(a);return}a(f)})}function ae(e,n){const{message:a}=n;return $e(a)?a(e,n):a||""}function ut({target:e}){e.composing=!0}function ie({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function dt(e,n){const a=Ve();e.style.height="auto";let f=e.scrollHeight;if(Le(n)){const{maxHeight:r,minHeight:i}=n;r!==void 0&&(f=Math.min(f,r)),i!==void 0&&(f=Math.max(f,i))}f&&(e.style.height=`${f}px`,Be(a))}function ft(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function I(e){return[...e].length}function Y(e,n){return[...e].slice(0,n).join("")}const[gt,y]=_("field"),mt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:E,formatter:Function,clearIcon:S("clear"),modelValue:J(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:S("focus"),formatTrigger:S("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},ht=K({},Ye,mt,{rows:E,type:S("text"),rules:Array,autosize:[Boolean,Object],labelWidth:E,labelClass:Me,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var bt=A({name:gt,props:ht,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:a}){const f=ot(),r=_e({status:"unvalidated",focused:!1,validateMessage:""}),i=U(),g=U(),m=U(),{parent:u}=le(Ue),o=()=>{var t;return String((t=e.modelValue)!=null?t:"")},d=t=>{if(B(e[t]))return e[t];if(u&&B(u.props[t]))return u.props[t]},C=k(()=>{const t=d("readonly");if(e.clearable&&!t){const s=o()!=="",l=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return s&&l}return!1}),w=k(()=>m.value&&a.input?m.value():e.modelValue),R=t=>t.reduce((s,l)=>s.then(()=>{if(r.status==="failed")return;let{value:h}=w;if(l.formatter&&(h=l.formatter(h,l)),!st(h,l)){r.status="failed",r.validateMessage=ae(h,l);return}if(l.validator)return oe(h)&&l.validateEmpty===!1?void 0:ct(h,l).then(b=>{b&&typeof b=="string"?(r.status="failed",r.validateMessage=b):b===!1&&(r.status="failed",r.validateMessage=ae(h,l))})}),Promise.resolve()),P=()=>{r.status="unvalidated",r.validateMessage=""},p=()=>n("endValidate",{status:r.status,message:r.validateMessage}),D=(t=e.rules)=>new Promise(s=>{P(),t?(n("startValidate"),R(t).then(()=>{r.status==="failed"?(s({name:e.name,message:r.validateMessage}),p()):(r.status="passed",s(),p())})):s()}),T=t=>{if(u&&e.rules){const{validateTrigger:s}=u.props,l=ne(s).includes(t),h=e.rules.filter(b=>b.trigger?ne(b.trigger).includes(t):l);h.length&&D(h)}},N=t=>{var s;const{maxlength:l}=e;if(B(l)&&I(t)>+l){const h=o();if(h&&I(h)===+l)return h;const b=(s=i.value)==null?void 0:s.selectionEnd;if(r.focused&&b){const v=[...t],x=v.length-+l;return v.splice(b-x,x),v.join("")}return Y(t,+l)}return t},V=(t,s="onChange")=>{const l=t;t=N(t);const h=I(l)-I(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";t=Oe(t,v,v)}let b=0;if(e.formatter&&s===e.formatTrigger){const{formatter:v,maxlength:x}=e;if(t=v(t),B(x)&&I(t)>+x&&(t=Y(t,+x)),i.value&&r.focused){const{selectionEnd:F}=i.value,te=Y(l,F);b=I(v(te))-I(te)}}if(i.value&&i.value.value!==t)if(r.focused){let{selectionStart:v,selectionEnd:x}=i.value;if(i.value.value=t,B(v)&&B(x)){const F=I(t);h?(v-=h,x-=h):b&&(v+=b,x+=b),i.value.setSelectionRange(Math.min(v,F),Math.min(x,F))}}else i.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},O=t=>{t.target.composing||V(t.target.value)},$=()=>{var t;return(t=i.value)==null?void 0:t.blur()},Q=()=>{var t;return(t=i.value)==null?void 0:t.focus()},W=()=>{const t=i.value;e.type==="textarea"&&e.autosize&&t&&dt(t,e.autosize)},ue=t=>{r.focused=!0,n("focus",t),j(W),d("readonly")&&$()},de=t=>{r.focused=!1,V(o(),"onBlur"),n("blur",t),!d("readonly")&&(T("onBlur"),j(W),je())},X=t=>n("clickInput",t),fe=t=>n("clickLeftIcon",t),ge=t=>n("clickRightIcon",t),me=t=>{H(t),n("update:modelValue",""),n("clear",t)},Z=k(()=>{if(typeof e.error=="boolean")return e.error;if(u&&u.props.showError&&r.status==="failed")return!0}),he=k(()=>{const t=d("labelWidth"),s=d("labelAlign");if(t&&s!=="top")return{width:G(t)}}),be=t=>{t.keyCode===13&&(!(u&&u.props.submitOnEnter)&&e.type!=="textarea"&&H(t),e.type==="search"&&$()),n("keypress",t)},ee=()=>e.id||`${f}-input`,ve=()=>r.status,ye=()=>{const t=y("control",[d("inputAlign"),{error:Z.value,custom:!!a.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(a.input)return c("div",{class:t,onClick:X},[a.input()]);const s={id:ee(),ref:i,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:d("disabled"),readonly:d("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${f}-label`:void 0,onBlur:de,onFocus:ue,onInput:O,onClick:X,onChange:ie,onKeypress:be,onCompositionend:ie,onCompositionstart:ut};return e.type==="textarea"?c("textarea",s,null):c("input",We(ft(e.type),s),null)},Se=()=>{const t=a["left-icon"];if(e.leftIcon||t)return c("div",{class:y("left-icon"),onClick:fe},[t?t():c(q,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},xe=()=>{const t=a["right-icon"];if(e.rightIcon||t)return c("div",{class:y("right-icon"),onClick:ge},[t?t():c(q,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Ce=()=>{if(e.showWordLimit&&e.maxlength){const t=I(o());return c("div",{class:y("word-limit")},[c("span",{class:y("word-num")},[t]),Fe("/"),e.maxlength])}},Ie=()=>{if(u&&u.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const s=a["error-message"],l=d("errorMessageAlign");return c("div",{class:y("error-message",l)},[s?s({message:t}):t])}},ke=()=>{const t=d("labelWidth"),s=d("labelAlign"),l=d("colon")?":":"";if(a.label)return[a.label(),l];if(e.label)return c("label",{id:`${f}-label`,for:a.input?void 0:ee(),onClick:h=>{H(h),Q()},style:s==="top"&&t?{width:G(t)}:void 0},[e.label+l])},we=()=>[c("div",{class:y("body")},[ye(),C.value&&c(q,{ref:g,name:e.clearIcon,class:y("clear")},null),xe(),a.button&&c("div",{class:y("button")},[a.button()])]),Ce(),Ie()];return Je({blur:$,focus:Q,validate:D,formValue:w,resetValidation:P,getValidationStatus:ve}),Ae(ze,{customValue:m,resetValidation:P,validateWithTrigger:T}),pe(()=>e.modelValue,()=>{V(o()),P(),T("onChange"),j(W)}),De(()=>{V(o(),e.formatTrigger),j(W)}),Ne("touchstart",me,{target:k(()=>{var t;return(t=g.value)==null?void 0:t.$el})}),()=>{const t=d("disabled"),s=d("labelAlign"),l=Se(),h=()=>{const b=ke();return s==="top"?[l,b].filter(Boolean):b||[]};return c(Ge,{size:e.size,class:y({error:Z.value,disabled:t,[`label-${s}`]:s}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:he.value,valueClass:y("value"),titleClass:[y("label",[s,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:l&&s!=="top"?()=>l:null,title:h,value:we,extra:a.extra})}}});const Lt=z(bt),[se,vt]=_("row"),ce=Symbol(se),yt={tag:S("div"),wrap:qe,align:String,gutter:J(0),justify:String};var St=A({name:se,props:yt,setup(e,{slots:n}){const{children:a,linkChildren:f}=He(ce),r=k(()=>{const g=[[]];let m=0;return a.forEach((u,o)=>{m+=Number(u.span),m>24?(g.push([o]),m-=24):g[g.length-1].push(o)}),g}),i=k(()=>{const g=Number(e.gutter),m=[];return g&&r.value.forEach(u=>{const o=g*(u.length-1)/u.length;u.forEach((d,C)=>{if(C===0)m.push({right:o});else{const w=g-m[d-1].right,R=o-w;m.push({left:w,right:R})}})}),m});return f({spaces:i}),()=>{const{tag:g,wrap:m,align:u,justify:o}=e;return c(g,{class:vt({[`align-${u}`]:u,[`justify-${o}`]:o,nowrap:!m})},{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n)]}})}}});const[xt,Ct]=_("col"),It={tag:S("div"),span:J(0),offset:E};var kt=A({name:xt,props:It,setup(e,{slots:n}){const{parent:a,index:f}=le(ce),r=k(()=>{if(!a)return;const{spaces:i}=a;if(i&&i.value&&i.value[f.value]){const{left:g,right:m}=i.value[f.value];return{paddingLeft:g?`${g}px`:null,paddingRight:m?`${m}px`:null}}});return()=>{const{tag:i,span:g,offset:m}=e;return c(i,{style:r.value,class:Ct({[g]:g,[`offset-${m}`]:m})},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n)]}})}}});const Rt=z(kt),$t=z(St);export{Bt as B,Rt as C,Lt as F,nt as L,$t as R,ot as a,mt as f,Je as u};
