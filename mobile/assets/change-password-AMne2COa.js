var g=(c,o,l)=>new Promise((m,_)=>{var u=a=>{try{e(l.next(a))}catch(t){_(t)}},p=a=>{try{e(l.throw(a))}catch(t){_(t)}},e=a=>a.done?m(a.value):Promise.resolve(a.value).then(u,p);e((l=l.apply(c,o)).next())});import{d as C,a2 as B,a6 as S,r as N,H as f,o as F,l as U,a as $,y as q,b as r,w as d,O as n,G as v,a3 as x,V as G,Q as L,a4 as P,a5 as M,_ as T,a8 as A,a0 as D}from"./index-pyS-jaTs.js";/* empty css              *//* empty css                                                                 *//* empty css              *//* empty css              */import{F as E,a as H}from"./index-07gBjG2u.js";/* empty css              */import{N as I}from"./index-OSWY0qnD.js";import{d as O}from"./user-sOTWs_LV.js";/* empty css              */import{_ as Q}from"./AppIcon.vue_vue_type_script_setup_true_lang-R3Vlhcw7.js";import{u as j}from"./index-BcEL7lzc.js";import{S as z}from"./index-CykelOPx.js";import{C as J}from"./index-DNHVO5Wz.js";import"./index-QQK-Ut9J.js";import"./use-id-zCBKX6Jo.js";const K=v("div",{class:"app-divider"},null,-1),R={class:"m-4"},co=C({__name:"change-password",setup(c){const{t:o}=B(),{logout:l}=S(),[m,_]=j(!1),u=N(),p=f({originalPassword:[{required:!0,message:o("common.user_field_original_password_validation")}],newPassword:[{required:!0,message:o("common.user_field_new_password_validation")}],confirmPassword:[{required:!0,message:o("common.user_field_confirm_password_validation")}]}),e=f({originalPassword:"",newPassword:""}),a=()=>{const t={originalPassword:e.originalPassword,newPassword:e.newPassword};O(t).then(s=>{s.code==200?P({message:o("common.user_pages_change_password_success")},()=>{l().then(()=>{T.push(A.app.getLogoutSuccessUrl())})}):P({message:o("common.user_pages_change_password_fail")})})};return F(()=>g(this,null,function*(){U("Page <<ChangePasswordPage>> mounted.")})),(t,s)=>{const h=I,y=z,w=E,V=J,k=M,b=H;return $(),q(L,null,[r(y,null,{default:d(()=>[r(h,{title:t.$t("common.user_pages_change_password_title"),"left-arrow":"",onClickLeft:s[0]||(s[0]=i=>n(D)())},null,8,["title"])]),_:1}),K,r(b,{ref_key:"form",ref:u,onSubmit:a},{default:d(()=>[r(V,{inset:""},{default:d(()=>[r(w,{modelValue:e.originalPassword,"onUpdate:modelValue":s[1]||(s[1]=i=>e.originalPassword=i),type:"password",placeholder:n(o)("common.user_field_original_password_placeholder"),rules:p.originalPassword},null,8,["modelValue","placeholder","rules"]),r(w,{modelValue:e.newPassword,"onUpdate:modelValue":s[3]||(s[3]=i=>e.newPassword=i),type:"password",placeholder:n(o)("common.user_field_new_password_placeholder"),rules:p.newPassword},{"right-icon":d(()=>[r(n(Q),{onClick:s[2]||(s[2]=i=>n(_)(!n(m))),icon:n(m)?"mdi:eye-off-outline":"mdi:eye-outline"},null,8,["icon"])]),_:1},8,["modelValue","placeholder","rules"])]),_:1}),v("div",R,[r(k,{block:"",type:"primary","native-type":"submit"},{default:d(()=>[x(G(n(o)("common.button_submit")),1)]),_:1})])]),_:1},512)],64)}}});export{co as default};
