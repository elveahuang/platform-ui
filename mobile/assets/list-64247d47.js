var u=(d,l,s)=>new Promise((r,t)=>{var p=o=>{try{e(s.next(o))}catch(m){t(m)}},i=o=>{try{e(s.throw(o))}catch(m){t(m)}},e=o=>o.done?r(o.value):Promise.resolve(o.value).then(p,i);e((s=s.apply(d,l)).next())});import{d as _,o as f,c as k,r as y,F as v,b as C,w as c,a as D,t as h,e as z,f as B,g as L,l as x,h as g,u as n,i as N}from"./index-9f8d664e.js";import{C as U}from"./index-54c63fa9.js";/* empty css              */import{N as b}from"./index-98a3ec2a.js";/* empty css                                                                 *//* empty css              */import{u as w,D as P}from"./data-table-83dac55d.js";import{n as A}from"./notice-b6b01966.js";import{S}from"./index-838965de.js";import"./use-route-e0417d80.js";import"./use-placeholder-55253c18.js";import"./_plugin-vue_export-helper-c27b6911.js";const $=_({__name:"notice-list",props:{items:Array},setup(d){const l=d,s=r=>{z.push({path:"/notice/details",query:{id:r}})};return(r,t)=>{const p=U;return f(!0),k(v,null,y(l.items,i=>(f(),C(p,{key:i.id,onClick:e=>s(i.id)},{title:c(()=>[D("p",null,h(i.subject),1)]),_:2},1032,["onClick"]))),128)}}}),O=_({__name:"list",setup(d){const{initialize:l,handleResult:s,handleParams:r}=w(),t=B(l()),p=()=>u(this,null,function*(){const i=yield A(r(t));i&&s(t,i)});return L(()=>u(this,null,function*(){x("Page <<NoticeIndexPage>> mounted.")})),(i,e)=>{const o=b,m=S;return f(),k(v,null,[g(m,null,{default:c(()=>[g(o,{title:"Announcement","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>n(N)())})]),_:1}),g(n(P),{finished:n(t).finished,"onUpdate:finished":e[1]||(e[1]=a=>n(t).finished=a),refreshing:n(t).refreshing,"onUpdate:refreshing":e[2]||(e[2]=a=>n(t).refreshing=a),loading:n(t).loading,"onUpdate:loading":e[3]||(e[3]=a=>n(t).loading=a),page:n(t).pagination.page,"onUpdate:page":e[4]||(e[4]=a=>n(t).pagination.page=a),size:n(t).pagination.size,"onUpdate:size":e[5]||(e[5]=a=>n(t).pagination.size=a),onGetDataList:p},{default:c(()=>[g(n($),{items:n(t).items},null,8,["items"])]),_:1},8,["finished","refreshing","loading","page","size"])],64)}}});export{O as default};