var y=(f,i,o)=>new Promise((l,c)=>{var m=t=>{try{e(o.next(t))}catch(s){c(s)}},r=t=>{try{e(o.throw(t))}catch(s){c(s)}},e=t=>t.done?l(t.value):Promise.resolve(t.value).then(m,r);e((o=o.apply(f,i)).next())});import{d as x,f as p,o as B,l as L,a as d,y as u,b as g,w,E as a,A as n,B as h,F as b,z as C,S as _,H as N}from"./index-b8efec62.js";/* empty css              *//* empty css              *//* empty css              */import{N as S}from"./index-ad411b46.js";import{S as H}from"./index-f5147928.js";import{I}from"./index-70db6003.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const T={class:"logo"},V={class:"slogan"},A={class:"app-text"},E={class:"app-text"},F={class:"copyright"},$=["innerHTML"],z=x({__name:"about",setup(f){const i=p(()=>_.app.getTitle()),o=p(()=>_.app.getVersion()),l=p(()=>_.app.getLogo()),c=p(()=>_.app.getCopyright());return B(()=>y(this,null,function*(){L("Page <<About>> mounted.")})),(m,r)=>{const e=S,t=H,s=I;return d(),u(b,null,[g(t,null,{default:w(()=>[g(e,{title:m.$t("common.label_about"),"left-arrow":"",onClickLeft:r[0]||(r[0]=v=>a(N)())},null,8,["title"])]),_:1}),n("div",T,[g(s,{width:"9.375rem",src:a(l)},null,8,["src"])]),n("div",V,[n("p",A,h(a(i)),1),n("p",E,h(a(o)),1)]),n("div",F,[(d(!0),u(b,null,C(a(c),(v,k)=>(d(),u("p",{class:"app-text",key:k,innerHTML:v},null,8,$))),128))])],64)}}});const R=M(z,[["__scopeId","data-v-4cfc2e85"]]);export{R as default};
