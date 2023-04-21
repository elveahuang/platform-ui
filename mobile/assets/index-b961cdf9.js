import{c as e,d as a,u as t,e as l,f as s,n,t as o,p as r,F as i,w as u,r as d,l as m,o as c,g as p,h as f,i as h,j as v,k as g,m as _,q as y,s as w,P as x,v as V,x as C,y as b,z as j,A as k,B,D as P,E as S,G as z,H as E,I as A,J as F,K as I,L as T,M as U,N as $,O as q,Q as L}from"./index-daa68374.js";import{F as D,C as M,R as N}from"./index-5fdc7cd3.js";import{B as O,S as G}from"./index-b85b8c04.js";import{C as H}from"./index-1474ce60.js";/* empty css              */import"./index-64d73252.js";import"./index-dd29652b.js";import{l as J,I as K}from"./logo-d34ccbb8.js";import{N as Q}from"./index-5f9fe67c.js";import{P as R,u as W}from"./index-9efd3b50.js";import{_ as X}from"./plugin-vueexport-helper-1b428a4d.js";const[Y,Z]=e("form");const ee=u(a({name:Y,props:{colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:n,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:o,showErrorMessage:o,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},emits:["submit","failed"],setup(e,{emit:a,slots:n}){const{children:o,linkChildren:u}=t(i),d=e=>e?o.filter((a=>e.includes(a.name))):o,m=a=>{return"string"==typeof a?(e=>{const a=o.find((a=>a.name===e));return a?new Promise(((e,t)=>{a.validate().then((a=>{a?t(a):e()}))})):Promise.reject()})(a):e.validateFirst?(t=a,new Promise(((e,a)=>{const l=[];d(t).reduce(((e,a)=>e.then((()=>{if(!l.length)return a.validate().then((e=>{e&&l.push(e)}))}))),Promise.resolve()).then((()=>{l.length?a(l):e()}))}))):(e=>new Promise(((a,t)=>{const l=d(e);Promise.all(l.map((e=>e.validate()))).then((e=>{(e=e.filter(Boolean)).length?t(e):a()}))})))(a);var t},c=(e,a)=>{o.some((t=>t.name===e&&(t.$el.scrollIntoView(a),!0)))},p=()=>o.reduce(((e,a)=>(void 0!==a.name&&(e[a.name]=a.formValue.value),e)),{}),f=()=>{const t=p();m().then((()=>a("submit",t))).catch((l=>{a("failed",{values:t,errors:l}),e.scrollToError&&l[0].name&&c(l[0].name)}))},h=e=>{r(e),f()};return u({props:e}),l({submit:f,validate:m,getValues:p,scrollToField:c,resetValidation:e=>{"string"==typeof e&&(e=[e]);d(e).forEach((e=>{e.resetValidation()}))},getValidationStatus:()=>o.reduce(((e,a)=>(e[a.name]=a.getValidationStatus(),e)),{})}),()=>{var e;return s("form",{class:Z(),onSubmit:h},[null==(e=n.default)?void 0:e.call(n)])}}})),ae=a({__name:"locale-selector",setup(e){const{changeLocale:a}=W(),t=d(!1),l=m.map((e=>({text:e.title,value:e.locale}))),n=e=>{_(e),y(e.selectedValues)&&a(w(e.selectedValues[0])),t.value=!1};return(e,a)=>{const o=O,r=R,i=x;return c(),p(g,null,[s(o,{plain:"",hairline:"",square:"",type:"primary",size:"small",onClick:a[0]||(a[0]=e=>t.value=!t.value)},{default:f((()=>[h("语言")])),_:1}),s(i,{show:t.value,"onUpdate:show":a[2]||(a[2]=e=>t.value=e),round:"",position:"bottom"},{default:f((()=>[s(r,{columns:v(l),onConfirm:n,onCancel:a[1]||(a[1]=e=>t.value=!1)},null,8,["columns"])])),_:1},8,["show"])],64)}}}),te=a({__name:"dark-selector",setup(e){const a=V(),t=d(!1),l=C.map((e=>({text:e.title,value:e.strategy}))),n=e=>{if(_(e),t.value=!1,y(e.selectedValues)){const t=b(e.selectedValues[0]);a.setDarkStrategy(t),a.setDark(j(t)),k(j(t))}};return(e,a)=>{const o=O,r=R,i=x;return c(),p(g,null,[s(o,{plain:"",hairline:"",type:"primary",size:"small",onClick:a[0]||(a[0]=e=>t.value=!t.value)},{default:f((()=>[h("深色模式")])),_:1}),s(i,{show:t.value,"onUpdate:show":a[2]||(a[2]=e=>t.value=e),round:"",position:"bottom"},{default:f((()=>[s(r,{columns:v(l),onConfirm:n,onCancel:a[1]||(a[1]=e=>t.value=!1)},null,8,["columns"])])),_:1},8,["show"])],64)}}}),le=a({__name:"theme-selector",setup(e){const a=V();B((()=>a.theme));const t=d(!1),l=P.map((e=>({text:e.title,value:e.theme}))),n=e=>{_(e),t.value=!1,y(e.selectedValues)&&a.setTheme(S(e.selectedValues[0]))};return(e,a)=>{const o=O,r=R,i=x;return c(),p(g,null,[s(o,{plain:"",hairline:"",type:"primary",size:"small",onClick:a[0]||(a[0]=e=>t.value=!t.value)},{default:f((()=>[h("主题")])),_:1}),s(i,{show:t.value,"onUpdate:show":a[2]||(a[2]=e=>t.value=e),round:"",position:"bottom"},{default:f((()=>[s(r,{columns:v(l),onConfirm:n,onCancel:a[1]||(a[1]=e=>t.value=!1)},null,8,["columns"])])),_:1},8,["show"])],64)}}});function se(e){return"function"==typeof e?e():v(e)}const ne={id:"entry-page",class:"entry-page"},oe={class:"entry-page-logo"},re={id:"entry-page-content"},ie={class:"my-2"},ue=X(a({__name:"index",setup(e){const a=E(),t=A(),[l,n]=function(e=!1,a={}){const{truthyValue:t=!0,falsyValue:l=!1}=a,s=z(e),n=d(e);function o(e){if(arguments.length)return n.value=e,n.value;{const e=se(t);return n.value=n.value===e?se(l):e,n.value}}return s?o:[n,o]}(!1),o=d(),r=F({grant_type:"password",client_id:I.auth.oauth.clientId,client_secret:I.auth.oauth.clientSecret,username:"admin",password:"admin"}),i=F({username:[{required:!0,message:"Please input username"}],password:[{required:!0,message:"Please input password"}]});return T((async()=>{_("Page - <Login> is mounted.")})),(e,u)=>{const d=Q,m=K,_=L,y=D,w=O,x=H,V=G,C=M,b=N,j=ee;return c(),p(g,null,[s(d,{title:e.$t("common.title")},null,8,["title"]),U("div",ne,[U("div",oe,[s(m,{fit:"contain",src:v(J),alt:"Logo"},null,8,["src"])]),U("div",re,[s(j,{ref_key:"form",ref:o},{default:f((()=>[s(x,{inset:""},{default:f((()=>[s(y,{modelValue:r.username,"onUpdate:modelValue":u[0]||(u[0]=e=>r.username=e),placeholder:e.$t("common.user_field_username"),rules:i.username},{"left-icon":f((()=>[s(_,null,{default:f((()=>[s(v($),{icon:"ion:person-outline"})])),_:1})])),_:1},8,["modelValue","placeholder","rules"]),s(y,{modelValue:r.password,"onUpdate:modelValue":u[2]||(u[2]=e=>r.password=e),placeholder:e.$t("common.user_field_password"),rules:i.password,type:v(l)?"password":"text"},{"left-icon":f((()=>[s(_,null,{default:f((()=>[s(v($),{icon:"ion:lock-closed-outline"})])),_:1})])),"right-icon":f((()=>[s(_,{name:v(l)?"closed-eye":"eye",onClick:u[1]||(u[1]=e=>v(n)(!v(l)))},null,8,["name"])])),_:1},8,["modelValue","placeholder","rules","type"]),U("div",ie,[s(w,{onClick:u[3]||(u[3]=e=>(async e=>{try{await e.validate(),a.login(r).then((()=>{t.push("/")}))}catch(l){return}})(o.value)),type:"primary",block:""},{default:f((()=>[h(q(e.$t("common.button_login")),1)])),_:1})])])),_:1}),s(b,{class:"px-4 pt-4"},{default:f((()=>[s(C,{span:"12",class:"text-left"},{default:f((()=>[s(V,null,{default:f((()=>[s(v(ae)),s(v(te)),s(v(le))])),_:1})])),_:1}),s(C,{span:"12",class:"text-right"},{default:f((()=>[s(w,{type:"text",size:"small"},{default:f((()=>[h("忘记密码")])),_:1}),s(w,{type:"text",size:"small"},{default:f((()=>[h("注册")])),_:1})])),_:1})])),_:1})])),_:1},512)])])],64)}}}),[["__scopeId","data-v-2a17c5e4"]]);export{ue as default};
