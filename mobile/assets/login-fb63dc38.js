var b=(p,d,s)=>new Promise((c,_)=>{var n=r=>{try{i(s.next(r))}catch(v){_(v)}},o=r=>{try{i(s.throw(r))}catch(v){_(v)}},i=r=>r.done?c(r.value):Promise.resolve(r.value).then(n,o);i((s=s.apply(p,d)).next())});import{b as W,d as S,T as Y,h as G,j as e,x as H,t as q,y as J,U as K,q as X,r as y,V as Z,o as F,c as T,C as l,D as m,I as C,H as D,W as I,X as Q,F as E,Y as N,Z as ee,_ as te,$ as ne,a0 as oe,a1 as se,a2 as ae,a3 as le,a4 as re,s as z,a5 as ue,g as ie,A as ce,a as L,E as A,a6 as x,J as me}from"./index-f0f0e99e.js";import{B as M,F as de,C as pe,R as _e}from"./index-5a969834.js";import{S as fe}from"./index-d052e57a.js";import{C as ve}from"./index-bb72951a.js";/* empty css              *//* empty css              */import"./index-0ada1099.js";import{N as ge}from"./index-b082d769.js";/* empty css              */import{P as U,u as he,a as we,b as ye}from"./useTheme-1910640b.js";import"./use-route-d8e3ca14.js";import"./use-placeholder-df5d1574.js";const[ke,Ve]=W("form"),be={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:H,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:q,showErrorMessage:q,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Ce=S({name:ke,props:be,emits:["submit","failed"],setup(p,{emit:d,slots:s}){const{children:c,linkChildren:_}=Y(K),n=t=>t?c.filter(a=>t.includes(a.name)):c,o=t=>new Promise((a,f)=>{const w=[];n(t).reduce((V,O)=>V.then(()=>{if(!w.length)return O.validate().then(R=>{R&&w.push(R)})}),Promise.resolve()).then(()=>{w.length?f(w):a()})}),i=t=>new Promise((a,f)=>{const w=n(t);Promise.all(w.map(g=>g.validate())).then(g=>{g=g.filter(Boolean),g.length?f(g):a()})}),r=t=>{const a=c.find(f=>f.name===t);return a?new Promise((f,w)=>{a.validate().then(g=>{g?w(g):f()})}):Promise.reject()},v=t=>typeof t=="string"?r(t):p.validateFirst?o(t):i(t),h=t=>{typeof t=="string"&&(t=[t]),n(t).forEach(f=>{f.resetValidation()})},u=()=>c.reduce((t,a)=>(t[a.name]=a.getValidationStatus(),t),{}),$=(t,a)=>{c.some(f=>f.name===t?(f.$el.scrollIntoView(a),!0):!1)},k=()=>c.reduce((t,a)=>(a.name!==void 0&&(t[a.name]=a.formValue.value),t),{}),P=()=>{const t=k();v().then(()=>d("submit",t)).catch(a=>{d("failed",{values:t,errors:a}),p.scrollToError&&a[0].name&&$(a[0].name)})},B=t=>{J(t),P()};return _({props:p}),G({submit:P,validate:v,getValues:k,scrollToField:$,resetValidation:h,getValidationStatus:u}),()=>{var t;return e("form",{class:Ve(),onSubmit:B},[(t=s.default)==null?void 0:t.call(s)])}}});const Pe=X(Ce),Be=S({__name:"DarkModePicker",setup(p){const{setDarkMode:d}=he(),s=y(!1),c=y(Z.map(n=>({text:n.title,value:n.mode}))),_=n=>b(this,null,function*(){if(s.value=!1,I(n.selectedValues)){const o=Q(n.selectedValues[0]);yield d(o).then()}});return(n,o)=>{const i=E,r=M,v=U,h=N;return F(),T(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:l(()=>[e(i,null,{default:l(()=>[e(m(C),{icon:"line-md:light-dark-loop"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:l(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),Se=S({__name:"LocalePicker",setup(p){const{setLocale:d}=we(),s=y(!1),c=y(ee.map(n=>({text:n.title,value:n.locale}))),_=n=>b(this,null,function*(){s.value=!1,I(n.selectedValues)&&(yield d(te(n.selectedValues[0])).then())});return(n,o)=>{const i=E,r=M,v=U,h=N;return F(),T(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:l(()=>[e(i,null,{default:l(()=>[e(m(C),{icon:"mdi:translate"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:l(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}}),$e=S({__name:"ThemePicker",setup(p){const{setTheme:d}=ye(),s=y(!1),c=y(ne.map(n=>({text:n.title,value:n.theme}))),_=n=>b(this,null,function*(){s.value=!1,I(n.selectedValues)&&(yield d(oe(n.selectedValues[0])).then())});return(n,o)=>{const i=E,r=M,v=U,h=N;return F(),T(D,null,[e(r,{plain:"",hairline:"",type:"primary",size:"small",onClick:o[0]||(o[0]=u=>s.value=!0)},{icon:l(()=>[e(i,null,{default:l(()=>[e(m(C),{icon:"ant-design:skin-outlined"})]),_:1})]),_:1}),e(h,{show:s.value,"onUpdate:show":o[2]||(o[2]=u=>s.value=u),round:"",position:"bottom"},{default:l(()=>[e(v,{columns:c.value,onConfirm:_,onCancel:o[1]||(o[1]=u=>s.value=!1)},null,8,["columns"])]),_:1},8,["show"])],64)}}});function j(p){return typeof p=="function"?p():m(p)}function xe(p=!1,d={}){const{truthyValue:s=!0,falsyValue:c=!1}=d,_=se(p),n=y(p);function o(i){if(arguments.length)return n.value=i,n.value;{const r=j(s);return n.value=n.value===r?j(c):r,n.value}}return _?o:[n,o]}const Fe={class:"mt-6"},Te={class:"my-2"},We=S({__name:"login",setup(p){const{t:d}=ae(),s=le(),c=re(),[_,n]=xe(!1),o=y(),i=z(ue),r=z({username:[{required:!0,message:"Please input username"}],password:[{required:!0,message:"Please input password"}]}),v=()=>b(this,null,function*(){yield o.value.validate(),s.login(i).then(()=>{c.push("/")})});return ie(()=>b(this,null,function*(){ce("Page <<Login>> mounted.")})),(h,u)=>{const $=ge,k=E,P=de,B=M,t=ve,a=fe,f=pe,w=_e,g=Pe;return F(),T("div",null,[e($,{title:m(d)("common.title")},null,8,["title"]),L("div",Fe,[e(g,{ref_key:"form",ref:o},{default:l(()=>[e(t,{inset:""},{default:l(()=>[e(P,{modelValue:i.username,"onUpdate:modelValue":u[0]||(u[0]=V=>i.username=V),placeholder:m(d)("common.user_field_username"),rules:r.username},{default:l(()=>[A(h.$slots,"left-icon",{},()=>[e(k,null,{default:l(()=>[e(m(C),{icon:"ion:person-outline"})]),_:1})])]),_:3},8,["modelValue","placeholder","rules"]),e(P,{modelValue:i.password,"onUpdate:modelValue":u[2]||(u[2]=V=>i.password=V),placeholder:m(d)("common.user_field_password"),rules:r.password,type:m(_)?"password":"text"},{default:l(()=>[A(h.$slots,"left-icon",{},()=>[e(k,null,{default:l(()=>[e(m(C),{icon:"ion:lock-closed-outline"})]),_:1})]),A(h.$slots,"right-icon",{},()=>[e(k,{name:m(_)?"closed-eye":"eye",onClick:u[1]||(u[1]=V=>m(n)(!m(_)))},null,8,["name"]),x(" , "),e(k,null,{default:l(()=>[e(m(C),{icon:"ion:lock-closed-outline"})]),_:1})])]),_:3},8,["modelValue","placeholder","rules","type"]),L("div",Te,[e(B,{onClick:v,type:"primary",block:""},{default:l(()=>[x(me(m(d)("common.button_login")),1)]),_:1})])]),_:3}),e(w,{class:"px-4 pt-4"},{default:l(()=>[e(f,{span:"12",class:"text-left"},{default:l(()=>[e(a,null,{default:l(()=>[e(m(Se)),e(m(Be)),e(m($e))]),_:1})]),_:1}),e(f,{span:"12",class:"text-right"},{default:l(()=>[e(B,{size:"small"},{default:l(()=>[x("忘记密码")]),_:1}),e(B,{size:"small"},{default:l(()=>[x("注册")]),_:1})]),_:1})]),_:1})]),_:3},512)])])}}});export{We as default};