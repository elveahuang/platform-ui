var _=(e,o,t)=>new Promise((d,i)=>{var m=n=>{try{l(t.next(n))}catch(s){i(s)}},u=n=>{try{l(t.throw(n))}catch(s){i(s)}},l=n=>n.done?d(n.value):Promise.resolve(n.value).then(m,u);l((t=t.apply(e,o)).next())});import{_ as E,av as f,b as c,f as g,j as a,w as r,m as $,F as w,L as M,y as V,A as b,B as k,N as y,d as N,o as A,l as F,h as H}from"./index-DWWmRPTa.js";import{_ as O}from"./el-progress-D9WVLMog.js";/* empty css                  *//* empty css                 */function U(e,o,t,d,i,m){const u=M,l=V,n=f("app-form-designer"),s=b,C=k,v=f("app-form"),B=y;return c(),g(w,null,[a(C,null,{default:r(()=>[a(l,null,{default:r(()=>[a(u,{onClick:o[0]||(o[0]=p=>e.preview())},{default:r(()=>[$("预览")]),_:1})]),_:1}),a(s,null,{default:r(()=>[a(n,{ref:"designer",menu:e.designerMenu,config:e.designerConfig},null,8,["menu","config"])]),_:1})]),_:1}),a(B,{class:"app-modal block",modelValue:e.previewModalOpen,"onUpdate:modelValue":o[2]||(o[2]=p=>e.previewModalOpen=p),title:"预览","destroy-on-close":""},{default:r(()=>[a(v,{ref:"form",rule:e.rule,api:e.api,"onUpdate:api":o[1]||(o[1]=p=>e.api=p),option:e.options},null,8,["rule","api","option"])]),_:1},8,["modelValue"])],64)}const j=E(O,[["render",U]]),D={class:"m-6"},z=N({__name:"builder",setup(e){return A(()=>_(this,null,function*(){F("Page <<Builder>> mounted.")})),(o,t)=>(c(),g("div",D,[a(H(j))]))}});export{z as default};