var v=(c,p,o)=>new Promise((r,t)=>{var l=a=>{try{n(o.next(a))}catch(m){t(m)}},e=a=>{try{n(o.throw(a))}catch(m){t(m)}},n=a=>a.done?r(a.value):Promise.resolve(a.value).then(l,e);n((o=o.apply(c,p)).next())});import{d as x,a as u,c as _,F as d,a9 as h,b as s,u as i,w as f,H as L,aa as y,ab as C,o as D,l as b,ac as A,ad as B}from"./index-CLZvx8Ks.js";/* empty css              *//* empty css              */import{N as H}from"./index-DBBqCFGn.js";/* empty css              *//* empty css              *//* empty css                                                                      *//* empty css              */import{u as M,D as w}from"./DataList-DXdCDEvE.js";import{a as N}from"./announcement-2nYKPqia.js";/* empty css              *//* empty css                                                          *//* empty css              */import{A as k}from"./Divider-CtXlFOkp.js";import{C as P}from"./index-DxIfiGhZ.js";import{S as T}from"./index-oaCOlSrp.js";import"./toNumber-Bh-CWPFs.js";import"./use-tab-status-D5Xk7q6a.js";import"./index-BjMi_eHg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $=["innerHTML"],F=L("div",{class:"app-line"},null,-1),G=["innerHTML"],R=x({__name:"announcement-list",props:{items:Array},setup(c){const p=c,o=r=>{y.push({path:"/announcement/details",query:{id:r}})};return(r,t)=>{const l=P;return u(),_(d,null,[(u(!0),_(d,null,h(p.items,e=>(u(),_(d,{key:e.id},[s(i(k)),s(l,{inset:"",onClick:n=>o(e.id)},{default:f(()=>[s(l,{inset:""},{default:f(()=>[L("div",{class:"app-text app-text-bold app-text-ellipsis-1 mt-2",innerHTML:e.title},null,8,$),F,L("div",{class:"app-text-muted app-text-ellipsis-2 mb-4",innerHTML:e.content},null,8,G)]),_:2},1024)]),_:2},1032,["onClick"])],64))),128)),s(i(k))],64)}}}),st=x({__name:"list",setup(c){const{initialize:p,handleResult:o,handleParams:r}=M(),t=C(p()),l=()=>v(this,null,function*(){yield N(r(t)).then(e=>{o(t,e)})});return D(()=>v(this,null,function*(){b("Page <<AnnouncementListPage>> mounted.")})),(e,n)=>{const a=H,m=T;return u(),_(d,null,[s(m,null,{default:f(()=>[s(a,{title:e.$t("common.announcement_pages_list_title"),"left-arrow":"",onClickLeft:n[0]||(n[0]=g=>i(B)())},null,8,["title"])]),_:1}),s(i(w),{model:i(t),"onUpdate:model":n[1]||(n[1]=g=>A(t)?t.value=g:null),onGetDataList:l},{default:f(()=>[s(i(R),{items:i(t).items},null,8,["items"])]),_:1},8,["model"])],64)}}});export{st as default};