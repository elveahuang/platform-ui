var g=(d,l,s)=>new Promise((r,n)=>{var p=o=>{try{t(s.next(o))}catch(m){n(m)}},i=o=>{try{t(s.throw(o))}catch(m){n(m)}},t=o=>o.done?r(o.value):Promise.resolve(o.value).then(p,i);t((s=s.apply(d,l)).next())});import{d as _,o as f,c as k,r as y,F as v,b as C,w as c,a as D,t as h,e as z,f as B,g as L,l as x,h as u,u as e,i as U}from"./index-eaaf9806.js";import{C as w}from"./index-b0a9572a.js";/* empty css              */import{N as A}from"./index-c775ef82.js";/* empty css                                                                 *//* empty css              */import{u as N,D as P}from"./data-table-2944976c.js";import{a as b}from"./announcement-884c3f19.js";/* empty css                                                         */import{S}from"./index-cefbd342.js";import"./use-route-e45c23a3.js";import"./use-placeholder-14fff404.js";import"./_plugin-vue_export-helper-c27b6911.js";const $=_({__name:"announcement-list",props:{items:Array},setup(d){const l=d,s=r=>{z.push({path:"/announcement/details",query:{id:r}})};return(r,n)=>{const p=w;return f(!0),k(v,null,y(l.items,i=>(f(),C(p,{key:i.id,onClick:t=>s(i.id)},{title:c(()=>[D("p",null,h(i.title),1)]),_:2},1032,["onClick"]))),128)}}}),Q=_({__name:"list",setup(d){const{initialize:l,handleResult:s,handleParams:r}=N(),n=B(l()),p=()=>g(this,null,function*(){const i=yield b(r(n));i&&s(n,i)});return L(()=>g(this,null,function*(){x("Page <<AnnouncementIndexPage>> mounted.")})),(i,t)=>{const o=A,m=S;return f(),k(v,null,[u(m,null,{default:c(()=>[u(o,{title:"Announcement","left-arrow":"",onClickLeft:t[0]||(t[0]=a=>e(U)())})]),_:1}),u(e(P),{finished:e(n).finished,"onUpdate:finished":t[1]||(t[1]=a=>e(n).finished=a),refreshing:e(n).refreshing,"onUpdate:refreshing":t[2]||(t[2]=a=>e(n).refreshing=a),loading:e(n).loading,"onUpdate:loading":t[3]||(t[3]=a=>e(n).loading=a),page:e(n).pagination.page,"onUpdate:page":t[4]||(t[4]=a=>e(n).pagination.page=a),size:e(n).pagination.size,"onUpdate:size":t[5]||(t[5]=a=>e(n).pagination.size=a),onGetDataList:p},{default:c(()=>[u(e($),{items:e(n).items},null,8,["items"])]),_:1},8,["finished","refreshing","loading","page","size"])],64)}}});export{Q as default};
