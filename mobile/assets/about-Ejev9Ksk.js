var h=(f,l,o)=>new Promise((_,r)=>{var m=t=>{try{s(o.next(t))}catch(e){r(e)}},c=t=>{try{s(o.throw(t))}catch(e){r(e)}},s=t=>t.done?_(t.value):Promise.resolve(t.value).then(m,c);s((o=o.apply(f,l)).next())});import{d as x,f as p,o as B,l as L,a as d,y as u,b as g,w,A as a,B as n,L as y,F as b,z as C,R as i,G as N}from"./index-q8XU2Mr1.js";/* empty css              *//* empty css              *//* empty css              */import{N as I}from"./index-v8FGRVtz.js";import{S as M}from"./index-FLW9CrLW.js";import{I as S}from"./index-pmpXI4Gj.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={class:"logo"},A={class:"slogan"},F={class:"app-text"},H={class:"app-text"},$={class:"copyright"},z=["innerHTML"],D=x({__name:"about",setup(f){const l=p(()=>i.app.getTitle()),o=p(()=>i.app.getVersion()),_=p(()=>i.app.getLogo()),r=p(()=>i.app.getCopyright());return B(()=>h(this,null,function*(){L("Page <<About>> mounted.")})),(m,c)=>{const s=I,t=M,e=S;return d(),u(b,null,[g(t,null,{default:w(()=>[g(s,{title:m.$t("common.label_about"),"left-arrow":"",onClickLeft:c[0]||(c[0]=v=>a(N)())},null,8,["title"])]),_:1}),n("div",V,[g(e,{width:"9.375rem",src:a(_)},null,8,["src"])]),n("div",A,[n("p",F,y(a(l)),1),n("p",H,y(a(o)),1)]),n("div",$,[(d(!0),u(b,null,C(a(r),(v,k)=>(d(),u("p",{class:"app-text",key:k,innerHTML:v},null,8,z))),128))])],64)}}}),Q=T(D,[["__scopeId","data-v-265a3c62"]]);export{Q as default};