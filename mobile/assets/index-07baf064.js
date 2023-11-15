import{as as Ve,e as ee,d as te,ak as Ce,a9 as ne,b as h,n as W,a6 as G,q as N,bi as ae,x as ie,bj as ke,bk as Ee,av as we,bl as xe,bm as Me,a5 as O,m as Pe,ap as Te,bg as Be,D as Ae,r as D,at as Le,f as w,g as Q,bn as Re,W as _e,aa as $,o as Fe,i as $e,aJ as x,bo as X,bp as Ne,K as j,bq as Oe,ai as We,P as qe,br as ze}from"./index-8228b4be.js";import{c as De,C as je}from"./index-056655e5.js";let Ke=0;function He(){const e=Ve(),{name:r="unknown"}=(e==null?void 0:e.type)||{};return`${r}-${++Ke}`}const[Je,Ue]=ee("form"),Ye={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:W,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:G,showErrorMessage:G,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Ge=te({name:Je,props:Ye,emits:["submit","failed"],setup(e,{emit:r,slots:o}){const{children:u,linkChildren:l}=Ce(ae),d=n=>n?u.filter(s=>n.includes(s.name)):u,A=n=>new Promise((s,m)=>{const V=[];d(n).reduce((z,T)=>z.then(()=>{if(!V.length)return T.validate().then(B=>{B&&V.push(B)})}),Promise.resolve()).then(()=>{V.length?m(V):s()})}),M=n=>new Promise((s,m)=>{const V=d(n);Promise.all(V.map(b=>b.validate())).then(b=>{b=b.filter(Boolean),b.length?m(b):s()})}),y=n=>{const s=u.find(m=>m.name===n);return s?new Promise((m,V)=>{s.validate().then(b=>{b?V(b):m()})}):Promise.reject()},C=n=>typeof n=="string"?y(n):e.validateFirst?A(n):M(n),g=n=>{typeof n=="string"&&(n=[n]),d(n).forEach(m=>{m.resetValidation()})},q=()=>u.reduce((n,s)=>(n[s.name]=s.getValidationStatus(),n),{}),P=(n,s)=>{u.some(m=>m.name===n?(m.$el.scrollIntoView(s),!0):!1)},L=()=>u.reduce((n,s)=>(s.name!==void 0&&(n[s.name]=s.formValue.value),n),{}),R=()=>{const n=L();C().then(()=>r("submit",n)).catch(s=>{r("failed",{values:n,errors:s}),e.scrollToError&&s[0].name&&P(s[0].name)})},E=n=>{N(n),R()};return l({props:e}),ne({submit:R,validate:C,getValues:L,scrollToField:P,resetValidation:g,getValidationStatus:q}),()=>{var n;return h("form",{class:Ue(),onSubmit:E},[(n=o.default)==null?void 0:n.call(o)])}}});const ot=ie(Ge);function re(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Qe(e,r){if(re(e)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(e)))}function Xe(e,r){return new Promise(o=>{const u=r.validator(e,r);if(xe(u)){u.then(o);return}o(u)})}function Z(e,r){const{message:o}=r;return Me(o)?o(e,r):o||""}function Ze({target:e}){e.composing=!0}function p({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function pe(e,r){const o=ke();e.style.height="auto";let u=e.scrollHeight;if(we(r)){const{maxHeight:l,minHeight:d}=r;l!==void 0&&(u=Math.min(u,l)),d!==void 0&&(u=Math.max(u,d))}u&&(e.style.height=`${u}px`,Ee(o))}function et(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function k(e){return[...e].length}function K(e,r){return[...e].slice(0,r).join("")}const[tt,S]=ee("field"),nt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:W,formatter:Function,clearIcon:O("clear"),modelValue:Pe(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:O("focus"),formatTrigger:O("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},at=Te({},De,nt,{rows:W,type:O("text"),rules:Array,autosize:[Boolean,Object],labelWidth:W,labelClass:Be,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var it=te({name:tt,props:at,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:r,slots:o}){const u=He(),l=Ae({status:"unvalidated",focused:!1,validateMessage:""}),d=D(),A=D(),M=D(),{parent:y}=Le(ae),C=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(x(e[t]))return e[t];if(y&&x(y.props[t]))return y.props[t]},q=w(()=>{const t=g("readonly");if(e.clearable&&!t){const a=C()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&l.focused;return a&&i}return!1}),P=w(()=>M.value&&o.input?M.value():e.modelValue),L=w(()=>{var t;const a=g("required");return a==="auto"?(t=e.rules)==null?void 0:t.some(i=>i.required):a}),R=t=>t.reduce((a,i)=>a.then(()=>{if(l.status==="failed")return;let{value:c}=P;if(i.formatter&&(c=i.formatter(c,i)),!Qe(c,i)){l.status="failed",l.validateMessage=Z(c,i);return}if(i.validator)return re(c)&&i.validateEmpty===!1?void 0:Xe(c,i).then(f=>{f&&typeof f=="string"?(l.status="failed",l.validateMessage=f):f===!1&&(l.status="failed",l.validateMessage=Z(c,i))})}),Promise.resolve()),E=()=>{l.status="unvalidated",l.validateMessage=""},n=()=>r("endValidate",{status:l.status,message:l.validateMessage}),s=(t=e.rules)=>new Promise(a=>{E(),t?(r("startValidate"),R(t).then(()=>{l.status==="failed"?(a({name:e.name,message:l.validateMessage}),n()):(l.status="passed",a(),n())})):a()}),m=t=>{if(y&&e.rules){const{validateTrigger:a}=y.props,i=X(a).includes(t),c=e.rules.filter(f=>f.trigger?X(f.trigger).includes(t):i);c.length&&s(c)}},V=t=>{var a;const{maxlength:i}=e;if(x(i)&&k(t)>+i){const c=C();if(c&&k(c)===+i)return c;const f=(a=d.value)==null?void 0:a.selectionEnd;if(l.focused&&f){const v=[...t],I=v.length-+i;return v.splice(f-I,I),v.join("")}return K(t,+i)}return t},b=(t,a="onChange")=>{const i=t;t=V(t);const c=k(i)-k(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";t=Ne(t,v,v)}let f=0;if(e.formatter&&a===e.formatTrigger){const{formatter:v,maxlength:I}=e;if(t=v(t),x(I)&&k(t)>+I&&(t=K(t,+I)),d.value&&l.focused){const{selectionEnd:F}=d.value,Y=K(i,F);f=k(v(Y))-k(Y)}}if(d.value&&d.value.value!==t)if(l.focused){let{selectionStart:v,selectionEnd:I}=d.value;if(d.value.value=t,x(v)&&x(I)){const F=k(t);c?(v-=c,I-=c):f&&(v+=f,I+=f),d.value.setSelectionRange(Math.min(v,F),Math.min(I,F))}}else d.value.value=t;t!==e.modelValue&&r("update:modelValue",t)},z=t=>{t.target.composing||b(t.target.value)},T=()=>{var t;return(t=d.value)==null?void 0:t.blur()},B=()=>{var t;return(t=d.value)==null?void 0:t.focus()},_=()=>{const t=d.value;e.type==="textarea"&&e.autosize&&t&&pe(t,e.autosize)},le=t=>{l.focused=!0,r("focus",t),$(_),g("readonly")&&T()},oe=t=>{l.focused=!1,b(C(),"onBlur"),r("blur",t),!g("readonly")&&(m("onBlur"),$(_),ze())},H=t=>r("clickInput",t),se=t=>r("clickLeftIcon",t),ce=t=>r("clickRightIcon",t),ue=t=>{N(t),r("update:modelValue",""),r("clear",t)},J=w(()=>{if(typeof e.error=="boolean")return e.error;if(y&&y.props.showError&&l.status==="failed")return!0}),de=w(()=>{const t=g("labelWidth"),a=g("labelAlign");if(t&&a!=="top")return{width:Q(t)}}),fe=t=>{t.keyCode===13&&(!(y&&y.props.submitOnEnter)&&e.type!=="textarea"&&N(t),e.type==="search"&&T()),r("keypress",t)},U=()=>e.id||`${u}-input`,ge=()=>l.status,me=()=>{const t=S("control",[g("inputAlign"),{error:J.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return h("div",{class:t,onClick:H},[o.input()]);const a={id:U(),ref:d,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${u}-label`:void 0,onBlur:oe,onFocus:le,onInput:z,onClick:H,onChange:p,onKeypress:fe,onCompositionend:p,onCompositionstart:Ze};return e.type==="textarea"?h("textarea",a,null):h("input",We(et(e.type),a),null)},he=()=>{const t=o["left-icon"];if(e.leftIcon||t)return h("div",{class:S("left-icon"),onClick:se},[t?t():h(j,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},be=()=>{const t=o["right-icon"];if(e.rightIcon||t)return h("div",{class:S("right-icon"),onClick:ce},[t?t():h(j,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ve=()=>{if(e.showWordLimit&&e.maxlength){const t=k(C());return h("div",{class:S("word-limit")},[h("span",{class:S("word-num")},[t]),qe("/"),e.maxlength])}},ye=()=>{if(y&&y.props.showErrorMessage===!1)return;const t=e.errorMessage||l.validateMessage;if(t){const a=o["error-message"],i=g("errorMessageAlign");return h("div",{class:S("error-message",i)},[a?a({message:t}):t])}},Se=()=>{const t=g("labelWidth"),a=g("labelAlign"),i=g("colon")?":":"";if(o.label)return[o.label(),i];if(e.label)return h("label",{id:`${u}-label`,for:o.input?void 0:U(),onClick:c=>{N(c),B()},style:a==="top"&&t?{width:Q(t)}:void 0},[e.label+i])},Ie=()=>[h("div",{class:S("body")},[me(),q.value&&h(j,{ref:A,name:e.clearIcon,class:S("clear")},null),be(),o.button&&h("div",{class:S("button")},[o.button()])]),ve(),ye()];return ne({blur:T,focus:B,validate:s,formValue:P,resetValidation:E,getValidationStatus:ge}),Re(Oe,{customValue:M,resetValidation:E,validateWithTrigger:m}),_e(()=>e.modelValue,()=>{b(C()),E(),m("onChange"),$(_)}),Fe(()=>{b(C(),e.formatTrigger),$(_)}),$e("touchstart",ue,{target:w(()=>{var t;return(t=A.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),a=g("labelAlign"),i=he(),c=()=>{const f=Se();return a==="top"?[i,f].filter(Boolean):f||[]};return h(je,{size:e.size,class:S({error:J.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:de.value,valueClass:S("value"),titleClass:[S("label",[a,{required:L.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:i&&a!=="top"?()=>i:null,title:c,value:Ie,extra:o.extra})}}});const st=ie(it);export{st as F,ot as a};
