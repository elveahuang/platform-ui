var I=(e,l,o)=>new Promise((m,s)=>{var c=a=>{try{t(o.next(a))}catch(n){s(n)}},u=a=>{try{t(o.throw(a))}catch(n){s(n)}},t=a=>a.done?m(a.value):Promise.resolve(a.value).then(c,u);t((o=o.apply(e,l)).next())});import{e as S,M as k,n as P,m as z,d as B,r as O,K as F,b as i,aL as j,aM as D,aN as K,x as $,U as L,J as U,W as J,f as Q,aO as W,a3 as Y,Q as Z,a1 as M,ak as q,o as G,l as H,a as g,y,E as x,A as V,w as v,F as A,z as X,aP as ee,c as ae,a7 as te,B as ne}from"./index-59fdb514.js";/* empty css              */import{u as oe}from"./use-placeholder-193416d9.js";import{r as re,u as se}from"./use-route-20825356.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";const[N,T]=S("tabbar"),le={route:Boolean,fixed:k,border:k,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:z(0),safeAreaInsetBottom:{type:Boolean,default:null}},R=Symbol(N);var ie=B({name:N,props:le,emits:["change","update:modelValue"],setup(e,{emit:l,slots:o}){const m=O(),{linkChildren:s}=F(R),c=oe(m,T),u=()=>{var n;return(n=e.safeAreaInsetBottom)!=null?n:e.fixed},t=()=>{var n;const{fixed:r,zIndex:d,border:_}=e;return i("div",{ref:m,role:"tablist",style:j(d),class:[T({fixed:r}),{[D]:_,"van-safe-area-bottom":u()}]},[(n=o.default)==null?void 0:n.call(o)])};return s({props:e,setActive:(n,r)=>{K(e.beforeChange,{args:[n],done(){l("update:modelValue",n),l("change",n),r()}})}}),()=>e.fixed&&e.placeholder?c(t):t()}});const ue=$(ie),[de,h]=S("tabbar-item"),me=L({},re,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var be=B({name:de,props:me,emits:["click"],setup(e,{emit:l,slots:o}){const m=se(),s=U().proxy,{parent:c,index:u}=J(R);if(!c)return;const t=Q(()=>{var r;const{route:d,modelValue:_}=c.props;if(d&&"$route"in s){const{$route:p}=s,{to:f}=e,b=Z(f)?f:{path:f};return!!p.matched.find(C=>{const w="path"in b&&b.path===C.path,E="name"in b&&b.name===C.name;return w||E})}return((r=e.name)!=null?r:u.value)===_}),a=r=>{var d;t.value||c.setActive((d=e.name)!=null?d:u.value,m),l("click",r)},n=()=>{if(o.icon)return o.icon({active:t.value});if(e.icon)return i(M,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var r;const{dot:d,badge:_}=e,{activeColor:p,inactiveColor:f}=c.props,b=t.value?p:f;return i("div",{role:"tab",class:h({active:t.value}),style:{color:b},tabindex:0,"aria-selected":t.value,onClick:a},[i(W,Y({dot:d,class:h("icon"),content:_},e.badgeProps),{default:n}),i("div",{class:h("text")},[(r=o.default)==null?void 0:r.call(o,{active:t.value})])])}}});const _e=$(be);const fe={class:"van-clearfix"},ve=B({__name:"tabs",setup(e){const l=O(0),o=q.app.getTabs();return G(()=>I(this,null,function*(){H("Component <<Tabs>> mounted.")})),(m,s)=>{const c=M,u=_e,t=ue;return g(),y(A,null,[i(x(ee)),V("div",fe,[i(t,{route:"",placeholder:"","safe-area-inset-bottom":"",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=a=>l.value=a)},{default:v(()=>[(g(!0),y(A,null,X(x(o),a=>(g(),ae(u,{replace:"",key:a.id,to:a.link},{icon:v(()=>[i(c,null,{default:v(()=>[i(x(te),{icon:a.icon},null,8,["icon"])]),_:2},1024)]),default:v(()=>[V("span",null,ne(a.title),1)]),_:2},1032,["to"]))),128))]),_:1},8,["modelValue"])])],64)}}});const Ce=ce(ve,[["__scopeId","data-v-c5b8e99b"]]);export{Ce as default};
