var u=(c,r,a)=>new Promise((s,t)=>{var i=o=>{try{e(a.next(o))}catch(l){t(l)}},n=o=>{try{e(a.throw(o))}catch(l){t(l)}},e=o=>o.done?s(o.value):Promise.resolve(o.value).then(i,n);e((a=a.apply(c,r)).next())});import{d as g,o as _,c as k,r as y,a as C,w as d,t as D,b as L,F as v,e as B,f as h,g as x,l as w,h as p,u as m,i as A,j as N}from"./index-tXE1FYac.js";/* empty css              *//* empty css              */import{N as P}from"./index-nr4YMGjn.js";/* empty css              *//* empty css              *//* empty css                                                                 *//* empty css              *//* empty css              */import{u as b,D as S}from"./DataList-cOBvQtkW.js";import{C as $}from"./index-L70HCqv-.js";import{n as j}from"./notice-BCTZEFfr.js";import{S as F}from"./index-XdxlyJay.js";import"./toNumber-Qp360JGv.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const R=g({__name:"notice-list",props:{items:Array},setup(c){const r=c,a=s=>{B.push({path:"/notice/details",query:{id:s}})};return(s,t)=>{const i=$;return _(!0),k(v,null,y(r.items,n=>(_(),C(i,{key:n.id,onClick:e=>a(n.id)},{title:d(()=>[L("p",null,D(n.subject),1)]),_:2},1032,["onClick"]))),128)}}}),Y=g({__name:"list",setup(c){const{initialize:r,handleResult:a,handleParams:s}=b(),t=h(r()),i=()=>u(this,null,function*(){yield j(s(t)).then(n=>{a(t,n)})});return x(()=>u(this,null,function*(){w("Page <<AnnouncementIndexPage>> mounted.")})),(n,e)=>{const o=P,l=F;return _(),k(v,null,[p(l,null,{default:d(()=>[p(o,{title:"Announcement","left-arrow":"",onClickLeft:e[0]||(e[0]=f=>m(N)())})]),_:1}),p(m(S),{model:m(t),"onUpdate:model":e[1]||(e[1]=f=>A(t)?t.value=f:null),onGetDataList:i},{default:d(()=>[p(m(R),{items:m(t).items},null,8,["items"])]),_:1},8,["model"])],64)}}});export{Y as default};