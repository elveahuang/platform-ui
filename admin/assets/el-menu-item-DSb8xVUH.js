var c=(e,t,o)=>new Promise((_,s)=>{var h=n=>{try{r(o.next(n))}catch(p){s(p)}},d=n=>{try{r(o.throw(n))}catch(p){s(p)}},r=n=>n.done?_(n.value):Promise.resolve(n.value).then(h,d);r((o=o.apply(e,t)).next())});import{a2 as w,a3 as A,a4 as B,a5 as k,a6 as I,d as f,b as S,c as $,e as l,f as i,w as a,D as y,r as D,a7 as N,k as u,g as b,h as C,F as L,K as x,L as v,m as z,t as V,J as T,_ as E,a8 as F,a9 as H}from"./index-DnwLZJOM.js";/* empty css                 */import{_ as g}from"./Icon.vue_vue_type_script_setup_true_lang-DKR2ybp1.js";import"./el-progress-CRgrIIOP.js";const J=()=>({setDark:e=>c(void 0,null,function*(){const{setDark:t}=w();t(e)}),setDarkMode:e=>c(void 0,null,function*(){const{setDarkMode:t,setDark:o}=w();t(e),o(A(e))})}),K=e=>c(void 0,null,function*(){k.mode==="legacy"?k.global.locale=e:k.global.locale.value=e}),j=e=>c(void 0,null,function*(){k.global.setLocaleMessage(e,yield I(e))}),q=()=>({setLocale:e=>c(void 0,null,function*(){const{setLocale:t}=w();yield j(e),yield K(e),t(e),B(e)})}),G=()=>({setTheme:e=>c(void 0,null,function*(){const{setTheme:t}=w();t(e)})}),Z=f({__name:"DarkToggle",setup(e){const t=S(),{setDark:o}=J(),_=$(()=>t.dark),s=()=>c(this,null,function*(){yield o(!t.dark).then()});return(h,d)=>{const r=y;return l(),i(r,{text:"",circle:"",size:"large",onClick:s},{icon:a(()=>[_.value?(l(),i(g,{key:0,size:24,icon:"mdi:weather-night"})):(l(),i(g,{key:1,size:24,icon:"mdi:white-balance-sunny"}))]),_:1})}}}),O={class:"item"},P=f({__name:"LocaleDropdown",setup(e){const{setLocale:t}=q(),o=D(N),_=s=>c(this,null,function*(){yield t(s).then()});return(s,h)=>{const d=y,r=T,n=x,p=v;return l(),i(p,{placement:"bottom-end"},{dropdown:a(()=>[u(n,null,{default:a(()=>[(l(!0),b(L,null,C(o.value,m=>(l(),i(r,{key:m.locale,onClick:M=>_(m.locale)},{default:a(()=>[z("span",O,V(m.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:a(()=>[u(d,{text:"",circle:"",size:"large"},{icon:a(()=>[u(g,{size:24,icon:"mdi:translate"})]),_:1})]),_:1})}}}),ee=E(P,[["__scopeId","data-v-1d4bc433"]]),Q=f({__name:"ThemeDropdown",setup(e){const{setTheme:t}=G(),o=D(F),_=s=>c(this,null,function*(){yield t(s).then()});return(s,h)=>{const d=y,r=T,n=x,p=v;return l(),i(p,{placement:"bottom-end"},{dropdown:a(()=>[u(n,null,{default:a(()=>[(l(!0),b(L,null,C(o.value,m=>(l(),i(r,{key:m.theme,onClick:M=>_(m.theme)},{default:a(()=>[z("span",{class:"item",style:H({backgroundColor:m.primaryColor})},null,4)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:a(()=>[u(d,{text:"",circle:"",size:"large"},{icon:a(()=>[u(g,{size:24,icon:"mdi:theme"})]),_:1})]),_:1})}}}),te=E(Q,[["__scopeId","data-v-f8cf2220"]]);export{te as A,Z as _,ee as a};