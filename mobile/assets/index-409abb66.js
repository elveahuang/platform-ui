var u=(c,r,a)=>new Promise((s,t)=>{var i=n=>{try{e(a.next(n))}catch(m){t(m)}},o=n=>{try{e(a.throw(n))}catch(m){t(m)}},e=n=>n.done?s(n.value):Promise.resolve(n.value).then(i,o);e((a=a.apply(c,r)).next())});import{d as k,a as _,y as g,z as y,c as C,w as d,A as D,B,F as v,C as L,D as x,o as A,l as h,b as p,E as l,G as w,H as N}from"./index-8228b4be.js";/* empty css              *//* empty css              */import{N as P}from"./index-4360460d.js";/* empty css              *//* empty css              *//* empty css                                                                 *//* empty css              *//* empty css              */import{u as S,D as $}from"./DataList-db564a07.js";import{a as b}from"./announcement-f666a62f.js";import{C as z}from"./index-056655e5.js";/* empty css                                                         */import{S as E}from"./index-d3908a50.js";import"./toNumber-d55a4a0c.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=k({__name:"announcement-list",props:{items:Array},setup(c){const r=c,a=s=>{L.push({path:"/announcement/details",query:{id:s}})};return(s,t)=>{const i=z;return _(!0),g(v,null,y(r.items,o=>(_(),C(i,{key:o.id,onClick:e=>a(o.id)},{title:d(()=>[D("p",null,B(o.title),1)]),_:2},1032,["onClick"]))),128)}}}),Z=k({__name:"index",setup(c){const{initialize:r,handleResult:a,handleParams:s}=S(),t=x(r()),i=()=>u(this,null,function*(){yield b(s(t)).then(o=>{a(t,o)})});return A(()=>u(this,null,function*(){h("Page <<AnnouncementIndexPage>> mounted.")})),(o,e)=>{const n=P,m=E;return _(),g(v,null,[p(m,null,{default:d(()=>[p(n,{title:"Announcement","left-arrow":"",onClickLeft:e[0]||(e[0]=f=>l(N)())})]),_:1}),p(l($),{model:l(t),"onUpdate:model":e[1]||(e[1]=f=>w(t)?t.value=f:null),onGetDataList:i},{default:d(()=>[p(l(F),{items:l(t).items},null,8,["items"])]),_:1},8,["model"])],64)}}});export{Z as default};
