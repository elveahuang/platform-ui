var c=(u,t,r)=>new Promise((e,o)=>{var p=s=>{try{_(r.next(s))}catch(m){o(m)}},d=s=>{try{_(r.throw(s))}catch(m){o(m)}},_=s=>s.done?e(s.value):Promise.resolve(s.value).then(p,d);_((r=r.apply(u,t)).next())});import{_ as x,e as k,g as v,d as C,a as $,o as g,l as B,k as n,i,w as l,n as a,K as E,T as b}from"./index-DzxqvCZ5.js";/* empty css                 *//* empty css                  */import"./el-progress-BaytRhHS.js";/* empty css                 */const y={},M={class:"app-divider"};function w(u,t){return k(),v("div",M)}const f=x(y,[["render",w]]),D={class:"p-6"},R=C({__name:"index",setup(u){const t=$();return g(()=>c(this,null,function*(){B("Page <<Demo>> mounted.")})),(r,e)=>{const o=E,p=b;return k(),v("div",D,[n(i(f)),n(p,null,{default:l(()=>[n(o,{link:"",onClick:e[0]||(e[0]=d=>i(t).push("/demo/editor/"))},{default:l(()=>[a("Editor")]),_:1}),n(o,{link:"",onClick:e[1]||(e[1]=d=>i(t).push("/demo/player/"))},{default:l(()=>[a("Player")]),_:1}),n(o,{link:"",onClick:e[2]||(e[2]=d=>i(t).push("/demo/builder/"))},{default:l(()=>[a("Builder")]),_:1}),n(o,{link:"",onClick:e[3]||(e[3]=d=>i(t).push("/demo/media/"))},{default:l(()=>[a("Media")]),_:1}),n(o,{link:"",onClick:e[4]||(e[4]=d=>i(t).push("/demo/magic-builder/"))},{default:l(()=>[a("Magic Builder")]),_:1})]),_:1}),n(i(f))])}}});export{R as default};