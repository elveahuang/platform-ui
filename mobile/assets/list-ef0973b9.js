var u=(c,r,a)=>new Promise((s,t)=>{var i=o=>{try{e(a.next(o))}catch(l){t(l)}},n=o=>{try{e(a.throw(o))}catch(l){t(l)}},e=o=>o.done?s(o.value):Promise.resolve(o.value).then(i,n);e((a=a.apply(c,r)).next())});import{d as k,a as _,y as g,z as y,c as C,w as d,A as D,B,F as v,C as L,D as x,o as A,l as h,b as p,E as m,G as w,H as N}from"./index-8228b4be.js";/* empty css              *//* empty css              */import{N as P}from"./index-4360460d.js";/* empty css              *//* empty css              *//* empty css                                                                 *//* empty css              *//* empty css              */import{u as b,D as S}from"./DataList-db564a07.js";import{C as $}from"./index-056655e5.js";import{n as z}from"./notice-5fddf0c3.js";import{S as E}from"./index-d3908a50.js";import"./toNumber-d55a4a0c.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=k({__name:"notice-list",props:{items:Array},setup(c){const r=c,a=s=>{L.push({path:"/notice/details",query:{id:s}})};return(s,t)=>{const i=$;return _(!0),g(v,null,y(r.items,n=>(_(),C(i,{key:n.id,onClick:e=>a(n.id)},{title:d(()=>[D("p",null,B(n.subject),1)]),_:2},1032,["onClick"]))),128)}}}),Y=k({__name:"list",setup(c){const{initialize:r,handleResult:a,handleParams:s}=b(),t=x(r()),i=()=>u(this,null,function*(){yield z(s(t)).then(n=>{a(t,n)})});return A(()=>u(this,null,function*(){h("Page <<AnnouncementIndexPage>> mounted.")})),(n,e)=>{const o=P,l=E;return _(),g(v,null,[p(l,null,{default:d(()=>[p(o,{title:"Announcement","left-arrow":"",onClickLeft:e[0]||(e[0]=f=>m(N)())})]),_:1}),p(m(S),{model:m(t),"onUpdate:model":e[1]||(e[1]=f=>w(t)?t.value=f:null),onGetDataList:i},{default:d(()=>[p(m(F),{items:m(t).items},null,8,["items"])]),_:1},8,["model"])],64)}}});export{Y as default};
