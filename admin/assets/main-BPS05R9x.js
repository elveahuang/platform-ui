import{d as R,u as T,a as V,c as m,r as L,o as b,l as B,b as n,e as i,w as a,f as S,F as $,g as M,h as o,i as t,j as l,t as h,k as U,m as I,n as z,p as K,q as D,s as F,v as j,R as q}from"./index-67JxNlCy.js";import"./ThemeDropdown.vue_vue_type_style_index_0_scoped_8799785f_lang-iZ5X_zze.js";import{L as A,a as E,b as H,_ as O,c as W,T as G,d as J}from"./ThemeDropdown-C9tpEQKH.js";import{_ as v}from"./AppIcon.vue_vue_type_script_setup_true_lang-DoCfpG5-.js";import{g as P,a as Q,m as N,_ as X}from"./menus-BjyEUDCy.js";import{_ as Y,a as Z,M as ee}from"./index-DH1WhJbI.js";import{_ as te}from"./index-CTbdFOnK.js";/* empty css                                                             */import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./RightOutlined-Cngp1EPx.js";import"./LeftOutlined-DKRsLhlP.js";import"./index-B8fdW6mP.js";import"./dropdown-BkDT7rQE.js";import"./move-CZy66qfb.js";import"./shallowequal-CLmU0evK.js";import"./useFlexGapSupport-Cm2QfYud.js";const se=R({__name:"sider-menu",setup(_){const c=T(),y=V(),u=m(()=>P(N)),d=L(Q(N,c.path)),r=L([c.path]),f=k=>{y.push(k)};return b(()=>{B("Component - <<SiderMenu>> is mounted.")}),(k,s)=>{const g=Y,C=Z,w=ee;return n(),i(w,{class:"app-menu",mode:"inline",theme:"light","open-keys":t(d),"onUpdate:openKeys":s[0]||(s[0]=e=>I(d)?d.value=e:null),"selected-keys":t(r),"onUpdate:selectedKeys":s[1]||(s[1]=e=>I(r)?r.value=e:null),style:{"overflow-y":"auto"}},{default:a(()=>[(n(!0),S($,null,M(u.value,e=>(n(),S($,{key:e.key},[e.items&&e.items.length&&e.items.length>0?(n(),i(C,{key:e.key},{title:a(()=>[o(t(v),{icon:e.icon},null,8,["icon"]),l("span",null,h(e.title),1)]),default:a(()=>[(n(!0),S($,null,M(e.items,p=>(n(),i(g,{key:p.path,onClick:x=>f(p.path)},{default:a(()=>[U(h(p.title),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)):(n(),i(g,{onClick:p=>f(e.path),key:e.path},{default:a(()=>[o(t(v),{icon:e.icon},null,8,["icon"]),l("span",null,h(e.title),1)]),_:2},1032,["onClick"]))],64))),128))]),_:1},8,["open-keys","selected-keys"])}}}),ae=_=>(D("data-v-5e45915e"),_=_(),F(),_),ne={class:"app-layout-header-container"},le={class:"app-layout-trigger"},pe={class:"app-layout-logo"},ie={class:"logo"},ce=ae(()=>l("div",{class:"app-layout-nav"},null,-1)),_e={class:"app-layout-tools"},ue={class:"app-layout-content-container"},de=R({__name:"main",setup(_){const{sidebar:c,toggleSidebar:y}=z(),u=m(()=>c.collapsed),d=m(()=>c.collapsed?"app-layout-sider collapsed":"app-layout-sider"),r=m(()=>c.collapsed?"app-layout-content collapsed":"app-layout-content"),f=m(()=>j.app.getTitle());return b(()=>{B("Component - <<MainLayout>> is mounted.")}),(k,s)=>{const g=te,C=A,w=E,e=H,p=O;return n(),i(p,{class:"app-layout"},{default:a(()=>[o(C,{class:"app-layout-header"},{default:a(()=>[l("div",ne,[l("div",le,[u.value?(n(),i(t(v),{key:0,width:32,height:32,icon:"ant-design:menu-fold-outlined",class:"trigger",onClick:s[0]||(s[0]=()=>t(y)())})):(n(),i(t(v),{key:1,width:32,height:32,icon:"ant-design:menu-unfold-outlined",class:"trigger",onClick:s[1]||(s[1]=()=>t(y)())}))]),l("div",pe,[l("div",ie,[l("span",null,h(f.value),1)])]),ce,l("div",_e,[o(g,{size:"middle"},{default:a(()=>[o(t(W)),o(t(G)),o(t(J)),o(t(X))]),_:1})])])]),_:1}),o(p,{class:"app-layout-container"},{default:a(()=>[o(w,{trigger:null,collapsible:"",collapsed:u.value,"onUpdate:collapsed":s[2]||(s[2]=x=>u.value=x),class:K(d.value),collapsedWidth:64},{default:a(()=>[o(t(se))]),_:1},8,["collapsed","class"]),o(e,{class:K(r.value)},{default:a(()=>[l("div",ue,[o(t(q))])]),_:1},8,["class"])]),_:1})]),_:1})}}}),Ke=oe(de,[["__scopeId","data-v-5e45915e"]]);export{Ke as default};