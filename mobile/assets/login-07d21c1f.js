var b=(p,d,s)=>new Promise((c,_)=>{var n=r=>{try{i(s.next(r))}catch(v){_(v)}},o=r=>{try{i(s.throw(r))}catch(v){_(v)}},i=r=>r.done?c(r.value):Promise.resolve(r.value).then(n,o);i((s=s.apply(p,d)).next())});import{c as K,d as S,u as O,a as H,b as e,n as J,t as U,p as W,F as Y,w as Q,r as y,e as X,o as F,f as E,g as a,h as m,I as C,i as D,j as I,k as Z,l as T,P as N,m as ee,q as te,s as ne,v as oe,x as se,y as le,z as ae,A as re,B as L,C as ue,D as ie,E as ce,G as q,H as A,J as x,K as me}from"./index-da67061a.js";import{B as M,F as de,C as pe,R as _e}from"./index-072b52ca.js";import{S as fe}from"./index-da163fd4.js";import{C as ve}from"./index-27eddbf2.js";/* empty css              *//* empty css              *//* empty css              */import{N as ge}from"./index-06757af3.js";/* empty css              */import{P as z,u as he,a as we,b as ye}from"./useTheme-3fd7c28a.js";import"./use-route-4f5c58a3.js";import"./index-f9ef05c0.js";import"./use-placeholder-6bc1a265.js";const[ke,Ve]=K("form"),be={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:J,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:U,showErrorMessage:U,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Ce=S({name:ke,props:be,emits:["submit","failed"],setup(p,{emit:d,slots:s}){const{children:c,linkChildren:_}=O(Y),n=t=>t?c.filter(l=>t.includes(l.name)):c,o=t=>new Promise((l,f)=>{const w=[];n(t).reduce((V,G)=>V.then(()=>{if(!w.length)return G.validate().then(R=>{R&&w.push(R)})}),Promise.resolve()).then(()=>{w.length?f(w):l()})}),i=t=>new Promise((l,f)=>{const w=n(t);Promise.all(w.map(g=>g.validate())).then(g=>{g=g.filter(Boolean),g.length?f(g):l()})}),r=t=>{const l=c.find(f=>f.name===t);return l?new Promise((f,w)=>{l.validate().then(g=>{g?w(g):f()})}):Promise.reject()},v=t=>typeof t=="string"?r(t):p.validateFirst?o(t):i(t),h=t=>{typeof t=="string"&&(t=[t]),n(t).forEach(f=>{f.resetValidation()})},u=()=>c.reduce((t,l)=>(t[l.name]=l.getValidationStatus(),t),{}),$=(t,l)=>{c.some(f=>f.name===t?(f.$el.scrollIntoView(l),!0):!1)},k=()=>c.reduce((t,l)=>(l.name!==void 0&&(t[l.name]=l.formValue.value),t),{}),P=()=>{const t=k();v().then(()=>d("submit",t)).catch(l=>{d("failed",{values:t,errors:l}),p.scrollToError&&l[0].name&&$(l[0].name)})},B=t=>{W(t),P()};return _({props:p}),H({submit:P,validate:v,getValues:k,scrollToField:$,resetValidation:h,getValidationStatus:u}),()=>{var t;return e("form",{class:Ve(),onSubmit:B},[(t=s.default)==null?void 0:t.call(s)])}}});const Pe=Q(Ce),Be=S({__name:"DarkModePicker",setup(p){const{setDarkMode:d}=he(),s=y(!1),c=y(X.map(n=>({text:n.title,value:n.mode}))),_=n=>b(this,null,function*(){if(s.value=!1,I(n.selectedValues)){const o=Z(n.selectedValues[0]);yield d(o).then()}});return(n,o)=>{const i=T,r=M,v=z,h=N;return F(),E(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:a(()=>[e(i,null,{default:a(()=>[e(m(C),{icon:"line-md:light-dark-loop"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:a(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),Se=S({__name:"LocalePicker",setup(p){const{setLocale:d}=we(),s=y(!1),c=y(ee.map(n=>({text:n.title,value:n.locale}))),_=n=>b(this,null,function*(){s.value=!1,I(n.selectedValues)&&(yield d(te(n.selectedValues[0])).then())});return(n,o)=>{const i=T,r=M,v=z,h=N;return F(),E(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:a(()=>[e(i,null,{default:a(()=>[e(m(C),{icon:"mdi:translate"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:a(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),$e=S({__name:"ThemePicker",setup(p){const{setTheme:d}=ye(),s=y(!1),c=y(ne.map(n=>({text:n.title,value:n.theme}))),_=n=>b(this,null,function*(){s.value=!1,I(n.selectedValues)&&(yield d(oe(n.selectedValues[0])).then())});return(n,o)=>{const i=T,r=M,v=z,h=N;return F(),E(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:a(()=>[e(i,null,{default:a(()=>[e(m(C),{icon:"ant-design:skin-outlined"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:a(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}});function j(p){return typeof p=="function"?p():m(p)}function xe(p=!1,d={}){const{truthyValue:s=!0,falsyValue:c=!1}=d,_=se(p),n=y(p);function o(i){if(arguments.length)return n.value=i,n.value;{const r=j(s);return n.value=n.value===r?j(c):r,n.value}}return _?o:[n,o]}const Fe={class:"mt-6"},Ee={class:"my-2"},Oe=S({__name:"login",setup(p){const{t:d}=le(),s=ae(),c=re(),[_,n]=xe(!1),o=y(),i=L(ue),r=L({username:[{required:!0,message:"Please input username"}],password:[{required:!0,message:"Please input password"}]}),v=()=>b(this,null,function*(){yield o.value.validate(),s.login(i).then(()=>{c.push("/")})});return ie(()=>b(this,null,function*(){ce("Page <<Login>> mounted.")})),(h,u)=>{const $=ge,k=T,P=de,B=M,t=ve,l=fe,f=pe,w=_e,g=Pe;return F(),E("div",null,[e($,{title:m(d)("common.title")},null,8,["title"]),q("div",Fe,[e(g,{ref_key:"form",ref:o},{default:a(()=>[e(t,{inset:""},{default:a(()=>[e(P,{modelValue:i.username,"onUpdate:modelValue":u[0]||(u[0]=V=>i.username=V),placeholder:m(d)("common.user_field_username"),rules:r.username},{default:a(()=>[A(h.$slots,"left-icon",{},()=>[e(k,null,{default:a(()=>[e(m(C),{icon:"ion:person-outline"})]),_:1})])]),_:3},8,["modelValue","placeholder","rules"]),e(P,{modelValue:i.password,"onUpdate:modelValue":u[2]||(u[2]=V=>i.password=V),placeholder:m(d)("common.user_field_password"),rules:r.password,type:m(_)?"password":"text"},{default:a(()=>[A(h.$slots,"left-icon",{},()=>[e(k,null,{default:a(()=>[e(m(C),{icon:"ion:lock-closed-outline"})]),_:1})]),A(h.$slots,"right-icon",{},()=>[e(k,{name:m(_)?"closed-eye":"eye",onClick:u[1]||(u[1]=V=>m(n)(!m(_)))},null,8,["name"]),x(" , "),e(k,null,{default:a(()=>[e(m(C),{icon:"ion:lock-closed-outline"})]),_:1})])]),_:3},8,["modelValue","placeholder","rules","type"]),q("div",Ee,[e(B,{onClick:v,type:"primary",block:""},{default:a(()=>[x(me(m(d)("common.button_login")),1)]),_:1})])]),_:3}),e(w,{class:"px-4 pt-4"},{default:a(()=>[e(f,{span:"12",class:"text-left"},{default:a(()=>[e(l,null,{default:a(()=>[e(m(Se)),e(m(Be)),e(m($e))]),_:1})]),_:1}),e(f,{span:"12",class:"text-right"},{default:a(()=>[e(B,{size:"small"},{default:a(()=>[x("忘记密码")]),_:1}),e(B,{size:"small"},{default:a(()=>[x("注册")]),_:1})]),_:1})]),_:1})]),_:3},512)])])}}});export{Oe as default};
