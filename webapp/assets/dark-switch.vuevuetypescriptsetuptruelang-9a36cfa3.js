import{M as e,an as t,O as a,R as n,Q as r,aQ as i,d as o,U as l,T as s,r as u,a8 as c,V as v,o as d,f,Y as p,h as m,j as y,_ as b,b9 as g,g as h,w,aa as O,E as k,ac as S,t as j,i as C,bq as x,ab as I,at as V,$ as P,aq as T,a5 as E,br as A,ae as _,bs as N,ai as L,ah as B,bt as F,bu as D,bv as M,aT as J,bo as q,au as U,bw as z,bx as K}from"./index-c33ad300.js";import{b as Q,U as R,C as $,I as H,d as Y,t as G}from"./theme-color-select.vuevuetypestyleindex0scoped78f6b12elang-2c291be7.js";import{c as W,u as X,g as Z,d as ee,e as te}from"./button-81eb3b6e.js";const ae=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:t},inactiveIcon:{type:t},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:a(Function)},size:{type:String,validator:Q},tabindex:{type:[String,Number]}}),ne={[R]:e=>n(e)||r(e)||i(e),[$]:e=>n(e)||r(e)||i(e),[H]:e=>n(e)||r(e)||i(e)},re=["onClick"],ie=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],oe=["aria-hidden"],le=["aria-hidden"],se=["aria-hidden"],ue="ElSwitch",ce=o({name:ue});const ve=_(P(o({...ce,props:ae,emits:ne,setup(e,{expose:t,emit:a}){const r=e,i=T(),{formItem:o}=W(),P=X(),_=l("switch");Z({from:'"value"',replacement:'"model-value" or "v-model"',scope:ue,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},s((()=>{var e;return!!(null==(e=i.vnode.props)?void 0:e.value)})));const{inputId:N}=ee(r,{formItemContext:o}),L=te(s((()=>r.loading))),B=u(!1!==r.modelValue),F=u(),D=u(),M=s((()=>[_.b(),_.m(P.value),_.is("disabled",L.value),_.is("checked",U.value)])),J=s((()=>({width:c(r.width)})));v((()=>r.modelValue),(()=>{B.value=!0})),v((()=>r.value),(()=>{B.value=!1}));const q=s((()=>B.value?r.modelValue:r.value)),U=s((()=>q.value===r.activeValue));[r.activeValue,r.inactiveValue].includes(q.value)||(a(R,r.inactiveValue),a($,r.inactiveValue),a(H,r.inactiveValue)),v(U,(e=>{var t;F.value.checked=e,r.validateEvent&&(null==(t=null==o?void 0:o.validate)||t.call(o,"change").catch((e=>Y())))}));const z=()=>{const e=U.value?r.inactiveValue:r.activeValue;a(R,e),a($,e),a(H,e),E((()=>{F.value.checked=U.value}))},K=()=>{if(L.value)return;const{beforeChange:e}=r;if(!e)return void z();const t=e();[A(t),n(t)].includes(!0)||G(ue,"beforeChange must return type `Promise<boolean>` or `boolean`"),A(t)?t.then((e=>{e&&z()})).catch((e=>{})):t&&z()},Q=s((()=>_.cssVarBlock({...r.activeColor?{"on-color":r.activeColor}:null,...r.inactiveColor?{"off-color":r.inactiveColor}:null,...r.borderColor?{"border-color":r.borderColor}:null})));return d((()=>{F.value.checked=U.value})),t({focus:()=>{var e,t;null==(t=null==(e=F.value)?void 0:e.focus)||t.call(e)},checked:U}),(e,t)=>(f(),p("div",{class:b(y(M)),style:I(y(Q)),onClick:V(K,["prevent"])},[m("input",{id:y(N),ref_key:"input",ref:F,class:b(y(_).e("input")),type:"checkbox",role:"switch","aria-checked":y(U),"aria-disabled":y(L),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:y(L),tabindex:e.tabindex,onChange:z,onKeydown:g(K,["enter"])},null,42,ie),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?S("v-if",!0):(f(),p("span",{key:0,class:b([y(_).e("label"),y(_).em("label","left"),y(_).is("active",!y(U))])},[e.inactiveIcon?(f(),h(y(k),{key:0},{default:w((()=>[(f(),h(O(e.inactiveIcon)))])),_:1})):S("v-if",!0),!e.inactiveIcon&&e.inactiveText?(f(),p("span",{key:1,"aria-hidden":y(U)},j(e.inactiveText),9,oe)):S("v-if",!0)],2)),m("span",{ref_key:"core",ref:D,class:b(y(_).e("core")),style:I(y(J))},[e.inlinePrompt?(f(),p("div",{key:0,class:b(y(_).e("inner"))},[e.activeIcon||e.inactiveIcon?(f(),h(y(k),{key:0,class:b(y(_).is("icon"))},{default:w((()=>[(f(),h(O(y(U)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(f(),p("span",{key:1,class:b(y(_).is("text")),"aria-hidden":!y(U)},j(y(U)?e.activeText:e.inactiveText),11,le)):S("v-if",!0)],2)):S("v-if",!0),m("div",{class:b(y(_).e("action"))},[e.loading?(f(),h(y(k),{key:0,class:b(y(_).is("loading"))},{default:w((()=>[C(y(x))])),_:1},8,["class"])):S("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?S("v-if",!0):(f(),p("span",{key:1,class:b([y(_).e("label"),y(_).em("label","right"),y(_).is("active",y(U))])},[e.activeIcon?(f(),h(y(k),{key:0},{default:w((()=>[(f(),h(O(e.activeIcon)))])),_:1})):S("v-if",!0),!e.activeIcon&&e.activeText?(f(),p("span",{key:1,"aria-hidden":!y(U)},j(e.activeText),9,se)):S("v-if",!0)],2))],14,re))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));function de(e){return!!D()&&(M(e),!0)}function fe(e){return"function"==typeof e?e():y(e)}const pe="undefined"!=typeof window,me=()=>{};const ye=e=>e();function be(...e){if(1!==e.length)return L(...e);const t=e[0];return"function"==typeof t?B(F((()=>({get:t,set:me})))):u(t)}var ge=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Oe=(e,t)=>{var a={};for(var n in e)he.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ge)for(var n of ge(e))t.indexOf(n)<0&&we.call(e,n)&&(a[n]=e[n]);return a};function ke(e,t,a={}){const n=a,{eventFilter:r=ye}=n,i=Oe(n,["eventFilter"]);return v(e,(o=r,l=t,function(...e){return new Promise(((t,a)=>{Promise.resolve(o((()=>l.apply(this,e)),{fn:l,thisArg:this,args:e})).then(t).catch(a)}))}),i);var o,l}var Se=Object.defineProperty,je=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,Pe=(e,t,a)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Te=(e,t)=>{for(var a in t||(t={}))Ie.call(t,a)&&Pe(e,a,t[a]);if(xe)for(var a of xe(t))Ve.call(t,a)&&Pe(e,a,t[a]);return e},Ee=(e,t)=>je(e,Ce(t)),Ae=(e,t)=>{var a={};for(var n in e)Ie.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&xe)for(var n of xe(e))t.indexOf(n)<0&&Ve.call(e,n)&&(a[n]=e[n]);return a};function _e(e,t,a={}){const n=a,{eventFilter:r}=n,i=Ae(n,["eventFilter"]),{eventFilter:o,pause:l,resume:s,isActive:c}=function(e=ye){const t=u(!0);return{isActive:B(t),pause:function(){t.value=!1},resume:function(){t.value=!0},eventFilter:(...a)=>{t.value&&e(...a)}}}(r);return{stop:ke(e,t,Ee(Te({},i),{eventFilter:o})),pause:l,resume:s,isActive:c}}function Ne(e){var t;const a=fe(e);return null!=(t=null==a?void 0:a.$el)?t:a}const Le=pe?window:void 0;function Be(...e){let t,a,n,r;if("string"==typeof e[0]||Array.isArray(e[0])?([a,n,r]=e,t=Le):[t,a,n,r]=e,!t)return me;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const i=[],o=()=>{i.forEach((e=>e())),i.length=0},l=v((()=>[Ne(t),fe(r)]),(([e,t])=>{o(),e&&i.push(...a.flatMap((a=>n.map((n=>((e,t,a,n)=>(e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)))(e,a,n,t))))))}),{immediate:!0,flush:"post"}),s=()=>{l(),o()};return de(s),s}function Fe(e){const t=function(){const e=u(!1);return T()&&d((()=>{e.value=!0})),e}();return s((()=>(t.value,Boolean(e()))))}const De="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Me="__vueuse_ssr_handlers__",Je=qe();function qe(){return Me in De||(De[Me]=De[Me]||{}),De[Me]}function Ue(e,t){return Je[e]||t}var ze=Object.defineProperty,Ke=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,$e=(e,t,a)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,He=(e,t)=>{for(var a in t||(t={}))Qe.call(t,a)&&$e(e,a,t[a]);if(Ke)for(var a of Ke(t))Re.call(t,a)&&$e(e,a,t[a]);return e};const Ye={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Ge="vueuse-storage";function We(e,t,a,n={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:l=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:v,window:d=Le,eventFilter:f,onError:p=(e=>{})}=n,m=(v?J:u)(t);if(!a)try{a=Ue("getDefaultStorage",(()=>{var e;return null==(e=Le)?void 0:e.localStorage}))()}catch(k){p(k)}if(!a)return m;const y=fe(t),b=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e?"object":Number.isNaN(e)?"any":"number"}(y),g=null!=(r=n.serializer)?r:Ye[b],{pause:h,resume:w}=_e(m,(()=>function(t){try{if(null==t)a.removeItem(e);else{const n=g.write(t),r=a.getItem(e);r!==n&&(a.setItem(e,n),d&&d.dispatchEvent(new CustomEvent(Ge,{detail:{key:e,oldValue:r,newValue:n,storageArea:a}})))}}catch(k){p(k)}}(m.value)),{flush:i,deep:o,eventFilter:f});return d&&l&&(Be(d,"storage",O),Be(d,Ge,(function(e){O(e.detail)}))),O(),m;function O(t){if(!t||t.storageArea===a)if(t&&null==t.key)m.value=y;else if(!t||t.key===e){h();try{m.value=function(t){const n=t?t.newValue:a.getItem(e);if(null==n)return s&&null!==y&&a.setItem(e,g.write(y)),y;if(!t&&c){const e=g.read(n);return"function"==typeof c?c(e,y):"object"!==b||Array.isArray(e)?e:He(He({},y),e)}return"string"!=typeof n?n:g.read(n)}(t)}catch(k){p(k)}finally{t?E(w):w()}}}}function Xe(e){return function(e,t={}){const{window:a=Le}=t,n=Fe((()=>a&&"matchMedia"in a&&"function"==typeof a.matchMedia));let r;const i=u(!1),o=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},l=()=>{n.value&&(o(),r=a.matchMedia(be(e).value),i.value=!!(null==r?void 0:r.matches),r&&("addEventListener"in r?r.addEventListener("change",l):r.addListener(l)))};return q(l),de((()=>o())),i}("(prefers-color-scheme: dark)",e)}var Ze=Object.defineProperty,et=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,nt=(e,t,a)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,rt=(e,t)=>{for(var a in t||(t={}))tt.call(t,a)&&nt(e,a,t[a]);if(et)for(var a of et(t))at.call(t,a)&&nt(e,a,t[a]);return e};function it(e={}){const{selector:t="html",attribute:a="class",initialValue:n="auto",window:r=Le,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:u,emitAuto:c,disableTransition:f=!0}=e,p=rt({auto:"",light:"light",dark:"dark"},e.modes||{}),m=Xe({window:r}),y=s((()=>m.value?"dark":"light")),b=u||(null==o?be(n):We(o,n,i,{window:r,listenToStorageChanges:l})),g=s((()=>"auto"===b.value?y.value:b.value)),h=Ue("updateHTMLAttrs",((e,t,a)=>{const n="string"==typeof e?null==r?void 0:r.document.querySelector(e):Ne(e);if(!n)return;let i;if(f&&(i=r.document.createElement("style"),i.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),r.document.head.appendChild(i)),"class"===t){const e=a.split(/\s/g);Object.values(p).flatMap((e=>(e||"").split(/\s/g))).filter(Boolean).forEach((t=>{e.includes(t)?n.classList.add(t):n.classList.remove(t)}))}else n.setAttribute(t,a);f&&(r.getComputedStyle(i).opacity,document.head.removeChild(i))}));function w(e){var n;h(t,a,null!=(n=p[e])?n:e)}function O(t){e.onChanged?e.onChanged(t,w):w(t)}v(g,O,{flush:"post",immediate:!0}),function(e,t=!0){T()?d(e):t?e():E(e)}((()=>O(g.value)));const k=s({get:()=>c?b.value:g.value,set(e){b.value=e}});try{return Object.assign(k,{store:b,system:y,state:g})}catch(S){return k}}var ot=Object.defineProperty,lt=Object.defineProperties,st=Object.getOwnPropertyDescriptors,ut=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,dt=(e,t,a)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function ft(e={}){const{valueDark:t="dark",valueLight:a=""}=e,n=it((r=((e,t)=>{for(var a in t||(t={}))ct.call(t,a)&&dt(e,a,t[a]);if(ut)for(var a of ut(t))vt.call(t,a)&&dt(e,a,t[a]);return e})({},e),lt(r,st({onChanged:(t,a)=>{var n;e.onChanged?null==(n=e.onChanged)||n.call(e,"dark"===t,a,t):a(t)},modes:{dark:t,light:a}}))));var r;return s({get:()=>"dark"===n.value,set(e){const t=e?"dark":"light";n.system.value===t?n.value="auto":n.value=t}})}const pt=o({__name:"dark-switch",setup(e){const t=ft(),a=U(),n=e=>{!function(e=!1,t={}){const{truthyValue:a=!0,falsyValue:n=!1}=t,r=N(e),i=u(e);function o(e){if(arguments.length)return i.value=e,i.value;{const e=fe(a);return i.value=i.value===e?fe(n):e,i.value}}}(a.dark),a.setDark(e)};return(e,a)=>{const r=ve;return f(),h(r,{modelValue:y(t),"onUpdate:modelValue":a[0]||(a[0]=e=>N(t)?t.value=e:null),"inline-prompt":"",onChange:n,"active-icon":y(z),"inactive-icon":y(K)},null,8,["modelValue","active-icon","inactive-icon"])}}});export{pt as _};