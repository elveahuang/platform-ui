var _=(d,c,e)=>new Promise((u,a)=>{var m=o=>{try{r(e.next(o))}catch(s){a(s)}},l=o=>{try{r(e.throw(o))}catch(s){a(s)}},r=o=>o.done?u(o.value):Promise.resolve(o.value).then(m,l);r((e=e.apply(d,c)).next())});import{d as x,r as w,o as N,l as B,u as i,a as p,R as b,w as n,b as t,c as g,F as v,Q as I,a3 as h,V as T,_ as A,a1 as V,as as j,g as L,H as $,ae as z,a5 as F,a8 as G,ab as H}from"./index-DK8UeraX.js";/* empty css              *//* empty css                                                              *//* empty css              *//* empty css              */import{N as M}from"./index-DIZqfRyk.js";/* empty css              */import{a as P}from"./announcement-BVYie_6c.js";import{a as C,S}from"./index-USnJLzmn.js";import{N as Q}from"./index-CbcWgwlV.js";/* empty css                                                          *//* empty css              *//* empty css              */import{A as k}from"./index-Nfe160tC.js";import{S as X}from"./index-Ds6mEuvx.js";import{I as q}from"./index-CmP3jxeN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E="/platform-ui/mobile/assets/1-B--sTOqT.jpeg",O="/platform-ui/mobile/assets/2-DrXyT27Q.jpeg",R="/platform-ui/mobile/assets/3-226kfuGI.jpeg",Y="/platform-ui/mobile/assets/4-DchymYxX.jpeg",J=x({__name:"announcement-home",setup(d){const c=w(!1),e=w([]),u=()=>_(this,null,function*(){const a=yield P({page:1,size:5});a.code=="200"&&(e.value=a.data.content,c.value=e.value.length&&e.value.length>0)});return N(()=>_(this,null,function*(){B("Component <<AnnouncementNew>> mounted."),u().then()})),(a,m)=>{const l=C,r=S,o=Q;return i(c)?(p(),b(o,{key:0,"left-icon":"volume-o",scrollable:!1,mode:"link",onClick:m[0]||(m[0]=s=>i(A).push({path:"/announcement/index"}))},{default:n(()=>[t(r,{class:"custom-swipe",vertical:"",autoplay:3e3,touchable:!1,"show-indicators":!1},{default:n(()=>[(p(!0),g(v,null,I(i(e),s=>(p(),b(l,{key:s.id},{default:n(()=>[h(T(s.title),1)]),_:2},1024))),128))]),_:1})]),_:1})):V("",!0)}}}),K=()=>j("/api/v1/home"),U={class:"m-8 text-center"},gt=x({__name:"home",setup(d){const c=L(()=>G.app.getTitle()),e=[{id:1,img:E},{id:2,img:O},{id:3,img:R},{id:4,img:Y}];return N(()=>_(this,null,function*(){B("Page <<HomePage>> mounted."),K().then()})),(u,a)=>{const m=z,l=M,r=X,o=q,s=C,D=S,y=F;return p(),g(v,null,[t(r,null,{default:n(()=>[t(l,{fixed:!0,placeholder:!0,title:i(c)},{right:n(()=>[t(m,{size:"24",onClick:a[0]||(a[0]=f=>i(A).push({path:"/notifications/index"}))},{default:n(()=>[t(i(H),{icon:"mdi:bell-outline"})]),_:1})]),_:1},8,["title"])]),_:1}),t(i(J)),t(i(k)),t(D,{class:"mx-4",autoplay:3e3,"lazy-render":"","show-indicators":!1},{default:n(()=>[(p(),g(v,null,I(e,f=>t(s,{class:"aspect-[16/9] w-full",key:f.id},{default:n(()=>[t(o,{fit:"fill",position:"top",class:"aspect-[16/9] w-full",radius:5,alt:"IMG",src:f.img},null,8,["src"])]),_:2},1024)),64))]),_:1}),t(i(k)),$("div",U,[t(y,{type:"primary",to:"/login"},{default:n(()=>[h("Login")]),_:1}),t(y,{type:"primary",to:"/announcement/index"},{default:n(()=>[h("Announcement")]),_:1})])],64)}}});export{gt as default};
