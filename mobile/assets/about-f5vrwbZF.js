var h=(f,l,o)=>new Promise((_,r)=>{var m=t=>{try{s(o.next(t))}catch(e){r(e)}},c=t=>{try{s(o.throw(t))}catch(e){r(e)}},s=t=>t.done?_(t.value):Promise.resolve(t.value).then(m,c);s((o=o.apply(f,l)).next())});import{d as x,g as p,o as B,l as L,a as d,c as u,b as g,w,u as a,H as n,V as y,F as b,Q as C,a8 as i,a0 as N}from"./index-Dg6krunW.js";/* empty css              *//* empty css              *//* empty css              */import{N as V}from"./index-B7K4zIpN.js";import{S as H}from"./index-BzL8c2d_.js";import{I}from"./index-D5uBY3Xj.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"logo"},T={class:"slogan"},F={class:"app-text"},$={class:"app-text"},A={class:"copyright"},D=["innerHTML"],E=x({__name:"about",setup(f){const l=p(()=>i.app.getTitle()),o=p(()=>i.app.getVersion()),_=p(()=>i.app.getLogo()),r=p(()=>i.app.getCopyright());return B(()=>h(this,null,function*(){L("Page <<About>> mounted.")})),(m,c)=>{const s=V,t=H,e=I;return d(),u(b,null,[g(t,null,{default:w(()=>[g(s,{title:m.$t("common.label_about"),"left-arrow":"",onClickLeft:c[0]||(c[0]=v=>a(N)())},null,8,["title"])]),_:1}),n("div",S,[g(e,{width:"9.375rem",src:a(_)},null,8,["src"])]),n("div",T,[n("p",F,y(a(l)),1),n("p",$,y(a(o)),1)]),n("div",A,[(d(!0),u(b,null,C(a(r),(v,k)=>(d(),u("p",{class:"app-text",key:k,innerHTML:v},null,8,D))),128))])],64)}}}),R=M(E,[["__scopeId","data-v-265a3c62"]]);export{R as default};