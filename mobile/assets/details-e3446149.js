var m=(u,o,t)=>new Promise((n,s)=>{var l=e=>{try{r(t.next(e))}catch(a){s(a)}},c=e=>{try{r(t.throw(e))}catch(a){s(a)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,c);r((t=t.apply(u,o)).next())});import{d as k,r as d,o as N,l as B,C as y,a as _,y as p,b as v,E as i,A as f,B as g,I as x,F as C,H as D}from"./index-0f416af7.js";import{S as b}from"./index-92ecafb6.js";/* empty css              */import{N as h}from"./index-7293abd7.js";import{a as w}from"./notice-115a338d.js";import"./use-placeholder-ff5c9bd9.js";const P={key:0},S={class:"text-center"},V={class:"text-center"},M=k({__name:"details",setup(u){const o=d(!0),t=d(),n=d();return N(()=>m(this,null,function*(){if(B("Page <<NoticeDetailsPage>> mounted."),t.value=y.currentRoute.value.query.id,t.value>=0){const s=yield w({id:t.value}).then();n.value=s.data,o.value=!1}})),(s,l)=>{var e,a;const c=h,r=b;return _(),p(C,null,[v(c,{title:"NoticeDetailsPage","left-arrow":"",onClickLeft:l[0]||(l[0]=A=>i(D)())}),v(r,{title:"",row:5,loading:i(o)},null,8,["loading"]),i(o)?x("",!0):(_(),p("div",P,[f("div",S,g((e=i(n))==null?void 0:e.subject),1),f("div",V,g((a=i(n))==null?void 0:a.content),1)]))],64)}}});export{M as default};
