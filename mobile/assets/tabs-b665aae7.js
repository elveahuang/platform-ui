var A=(e,c,a)=>new Promise((m,s)=>{var o=l=>{try{t(a.next(l))}catch(n){s(n)}},u=l=>{try{t(a.throw(l))}catch(n){s(n)}},t=l=>l.done?m(l.value):Promise.resolve(l.value).then(o,u);t((a=a.apply(e,c)).next())});import{b as k,d as B,r as y,T as M,t as T,x as P,m as N,j as i,aw as j,ax as z,ay as D,q as S,ag as E,az as F,ak as q,e as H,aA as J,Q as K,aB as Q,F as U,a2 as Y,g as Z,A as G,o as L,c as W,D as _,aC as X,C as p,a6 as h,J as x,H as ee}from"./index-3272740f.js";/* empty css              */import{u as ae}from"./use-placeholder-00d37a30.js";import{r as te,u as ne}from"./use-route-6a1bac27.js";const[O,V]=k("tabbar"),oe={route:Boolean,fixed:T,border:T,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:N(0),safeAreaInsetBottom:{type:Boolean,default:null}},$=Symbol(O);var re=B({name:O,props:oe,emits:["change","update:modelValue"],setup(e,{emit:c,slots:a}){const m=y(),{linkChildren:s}=M($),o=ae(m,V),u=()=>{var n;return(n=e.safeAreaInsetBottom)!=null?n:e.fixed},t=()=>{var n;const{fixed:r,zIndex:d,border:f}=e;return i("div",{ref:m,role:"tablist",style:j(d),class:[V({fixed:r}),{[z]:f,"van-safe-area-bottom":u()}]},[(n=a.default)==null?void 0:n.call(a)])};return s({props:e,setActive:(n,r)=>{D(e.beforeChange,{args:[n],done(){c("update:modelValue",n),c("change",n),r()}})}}),()=>e.fixed&&e.placeholder?o(t):t()}});const ce=S(re),[se,C]=k("tabbar-item"),le=E({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var ie=B({name:se,props:le,emits:["click"],setup(e,{emit:c,slots:a}){const m=ne(),s=F().proxy,{parent:o,index:u}=q($);if(!o)return;const t=H(()=>{var r;const{route:d,modelValue:f}=o.props;if(d&&"$route"in s){const{$route:g}=s,{to:v}=e,b=Q(v)?v:{path:v};return!!g.matched.find(I=>{const R="path"in b&&b.path===I.path,w="name"in b&&b.name===I.name;return R||w})}return((r=e.name)!=null?r:u.value)===f}),l=r=>{var d;t.value||o.setActive((d=e.name)!=null?d:u.value,m),c("click",r)},n=()=>{if(a.icon)return a.icon({active:t.value});if(e.icon)return i(U,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var r;const{dot:d,badge:f}=e,{activeColor:g,inactiveColor:v}=o.props,b=t.value?g:v;return i("div",{role:"tab",class:C({active:t.value}),style:{color:b},tabindex:0,"aria-selected":t.value,onClick:l},[i(J,K({dot:d,class:C("icon"),content:f},e.badgeProps),{default:n}),i("div",{class:C("text")},[(r=a.default)==null?void 0:r.call(a,{active:t.value})])])}}});const ue=S(ie);const _e=B({__name:"tabs",setup(e){const{t:c}=Y(),a=y(0);return Z(()=>A(this,null,function*(){G("Component <<Tabs>> mounted.")})),(m,s)=>{const o=ue,u=ce;return L(),W(ee,null,[i(_(X)),i(u,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),route:""},{default:p(()=>[i(o,{replace:"",to:"/tabs/home",icon:"home-o"},{default:p(()=>[h(x(_(c)("common.label_home")),1)]),_:1}),i(o,{replace:"",to:"/tabs/discover",icon:"search"},{default:p(()=>[h(x(_(c)("common.label_discover")),1)]),_:1}),i(o,{replace:"",to:"/tabs/me",icon:"setting-o"},{default:p(()=>[h(x(_(c)("common.label_me")),1)]),_:1})]),_:1},8,["modelValue"])],64)}}});export{_e as default};
