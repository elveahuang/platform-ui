var b=(v,n,l)=>new Promise((i,t)=>{var m=s=>{try{p(l.next(s))}catch(_){t(_)}},u=s=>{try{p(l.throw(s))}catch(_){t(_)}},p=s=>s.done?i(s.value):Promise.resolve(s.value).then(m,u);p((l=l.apply(v,n)).next())});import{d as g,J as L,T as V,r as c,U as D,f as M,V as A,W as y,a as h,y as $,b as a,w as C,F as x,X as T,Y as E,Z as P,_ as N,$ as F,a0 as G,a1 as U,a2 as H,E as w,a3 as I,A as J,H as W}from"./index-b8efec62.js";import{C as X}from"./index-ba25a823.js";/* empty css              *//* empty css              */import{N as Y}from"./index-ad411b46.js";/* empty css              *//* empty css              *//* empty css                                                                 *//* empty css              *//* empty css              */import{P as S,u as Z,a as j,b as q}from"./useTheme-81e1d620.js";import{C as B}from"./index-74cfa6f0.js";import{S as z}from"./index-f5147928.js";const K=g({__name:"DarkModeCellPicker",setup(v){const{t:n}=L(),l=V(),{setDarkMode:i}=Z(),t=c(!1),m=c(n("common.label_dark_mode")),u=c(n(D(l.darkMode))),p=M(()=>l.darkMode),s=c(A.map(e=>({text:n(e.label),value:e.mode}))),_=e=>b(this,null,function*(){if(t.value=!1,T(e.selectedValues)){const o=E(e.selectedValues[0]);yield i(o).then()}});return y(p,e=>{u.value=n(D(e))}),(e,o)=>{const d=B,f=S,k=P;return h(),$(x,null,[a(d,{"is-link":"","arrow-direction":"down",title:m.value,value:u.value,onClick:o[0]||(o[0]=r=>t.value=!0)},null,8,["title","value"]),a(k,{show:t.value,"onUpdate:show":o[2]||(o[2]=r=>t.value=r),round:"",position:"bottom"},{default:C(()=>[a(f,{columns:s.value,onConfirm:_,onCancel:o[1]||(o[1]=r=>t.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),O=g({__name:"LocaleCellPicker",setup(v){const{t:n}=L(),l=V(),{setLocale:i}=j(),t=c(!1),m=c(n("common.label_language")),u=c(n(N(l.locale))),p=M(()=>l.locale),s=c(F.map(e=>({text:n(e.label),value:e.locale}))),_=e=>b(this,null,function*(){t.value=!1,T(e.selectedValues)&&(yield i(G(e.selectedValues[0])).then())});return y(p,e=>{u.value=n(N(e))}),(e,o)=>{const d=B,f=S,k=P;return h(),$(x,null,[a(d,{"is-link":"","arrow-direction":"down",title:m.value,value:u.value,onClick:o[0]||(o[0]=r=>t.value=!0)},null,8,["title","value"]),a(k,{show:t.value,"onUpdate:show":o[2]||(o[2]=r=>t.value=r),round:"",position:"bottom"},{default:C(()=>[a(f,{columns:s.value,onConfirm:_,onCancel:o[1]||(o[1]=r=>t.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),Q=g({__name:"ThemeCellPicker",setup(v){const{t:n}=L(),l=V(),{setTheme:i}=q(),t=c(!1),m=c(n("common.label_theme")),u=c(n(U(l.theme))),p=M(()=>l.theme),s=H.map(e=>({text:n(e.label),value:e.theme})),_=e=>b(this,null,function*(){t.value=!1,T(e.selectedValues)&&(yield i(I(e.selectedValues[0])).then())});return y(p,e=>{u.value=n(U(e))}),(e,o)=>{const d=B,f=S,k=P;return h(),$(x,null,[a(d,{"is-link":"","arrow-direction":"down",title:m.value,value:u.value,onClick:o[0]||(o[0]=r=>t.value=!0)},null,8,["title","value"]),a(k,{show:t.value,"onUpdate:show":o[2]||(o[2]=r=>t.value=r),round:"",position:"bottom"},{default:C(()=>[a(f,{columns:w(s),onConfirm:_,onCancel:o[1]||(o[1]=r=>t.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),R=J("div",{class:"app-divider"},null,-1),ve=g({__name:"setting",setup(v){return(n,l)=>{const i=Y,t=z,m=X;return h(),$(x,null,[a(t,null,{default:C(()=>[a(i,{title:n.$t("common.label_settings"),"left-arrow":"",onClickLeft:l[0]||(l[0]=u=>w(W)())},null,8,["title"])]),_:1}),R,a(m,{inset:""},{default:C(()=>[a(w(K)),a(w(O)),a(w(Q))]),_:1})],64)}}});export{ve as default};
