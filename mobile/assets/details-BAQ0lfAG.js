var u=(v,l,t)=>new Promise((r,s)=>{var f=e=>{try{a(t.next(e))}catch(i){s(i)}},c=e=>{try{a(t.throw(e))}catch(i){s(i)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(f,c);a((t=t.apply(v,l)).next())});import{d as B,r as d,o as H,l as L,a as k,c as w,b as n,w as _,u as o,ac as M,F as y,aa as N,ad as A,H as p,ae as D}from"./index-DvAKdRm_.js";/* empty css              *//* empty css                                                                      *//* empty css              */import{S as P}from"./index-D0nqcC8y.js";/* empty css              *//* empty css              */import{N as R}from"./index-DhTZOBP6.js";import{b as S}from"./announcement-BqASOiaz.js";/* empty css              *//* empty css              */import{A as T}from"./Divider-DyGF9VMS.js";import{S as V}from"./index-Cb_eeWbz.js";import{P as F}from"./index-X5MCRIdm.js";import{C as $}from"./index-BDAtoRTz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"app-page"},E={class:"app-page-content"},G=["innerHTML"],U=p("div",{class:"app-line"},null,-1),j=["innerHTML"],re=B({__name:"details",setup(v){const l=d(!0),t=d(!1),r=d(),s=d(),f=()=>u(this,null,function*(){yield c().then(()=>{t.value=!1})}),c=()=>u(this,null,function*(){if(r.value=N.currentRoute.value.query.id,r.value>=0){const a=yield S({id:r.value}).then();s.value=a.data,l.value=!1}});return H(()=>u(this,null,function*(){L("Page <<AnnouncementDetailsPage>> mounted."),yield c().then()})),(a,e)=>{const i=R,C=V,b=P,g=$,x=F;return k(),w(y,null,[n(C,null,{default:_(()=>[n(i,{title:a.$t("common.announcement_pages_details_title"),"left-arrow":"",onClickLeft:e[0]||(e[0]=m=>o(A)())},null,8,["title"])]),_:1}),n(x,{"model-value":o(t),"onUpdate:modelValue":e[1]||(e[1]=m=>M(t)?t.value=m:null),onRefresh:f},{default:_(()=>[p("div",q,[p("div",E,[n(b,{title:"",row:5,loading:o(l)},null,8,["loading"]),o(l)?D("",!0):(k(),w(y,{key:0},[n(o(T)),n(g,{inset:""},{default:_(()=>[n(g,{inset:""},{default:_(()=>{var m,h;return[p("div",{class:"app-text app-text-bold mt-2",innerHTML:(m=o(s))==null?void 0:m.title},null,8,G),U,p("div",{class:"app-text-muted mb-4",innerHTML:(h=o(s))==null?void 0:h.content},null,8,j)]}),_:1})]),_:1})],64))])])]),_:1},8,["model-value"])],64)}}});export{re as default};