var g=(c,o,l)=>new Promise((m,_)=>{var u=a=>{try{e(l.next(a))}catch(t){_(t)}},p=a=>{try{e(l.throw(a))}catch(t){_(t)}},e=a=>a.done?m(a.value):Promise.resolve(a.value).then(u,p);e((l=l.apply(c,o)).next())});import{d as C,af as B,al as S,r as F,ab as f,o as N,l as U,a as $,c as q,b as r,w as d,u as n,H as v,ag as x,ah as L,F as M,ai as P,aj as T,aa as j,an as A,ad as D}from"./index-BsckSs91.js";/* empty css              *//* empty css                                                              *//* empty css              *//* empty css              */import{F as E,a as G}from"./index-mH-HBxib.js";/* empty css              */import{N as H}from"./index-C1cRV1Vb.js";import{d as I}from"./user-D_j8ooTs.js";/* empty css              */import{_ as z}from"./AppIcon.vue_vue_type_script_setup_true_lang-BueG8wjr.js";import{u as J}from"./index-DbYBhK8P.js";import{S as K}from"./index-rT_7cQpq.js";import{C as O}from"./index-CZm3bwEC.js";import"./index-BxLYQVbA.js";import"./use-id-BbSD8eVd.js";const Q=v("div",{class:"app-divider"},null,-1),R={class:"m-4"},co=C({__name:"change-password",setup(c){const{t:o}=B(),{logout:l}=S(),[m,_]=J(!1),u=F(),p=f({originalPassword:[{required:!0,message:o("common.user_field_original_password_validation")}],newPassword:[{required:!0,message:o("common.user_field_new_password_validation")}],confirmPassword:[{required:!0,message:o("common.user_field_confirm_password_validation")}]}),e=f({originalPassword:"",newPassword:""}),a=()=>{const t={originalPassword:e.originalPassword,newPassword:e.newPassword};I(t).then(s=>{s.code==200?P({message:o("common.user_pages_change_password_success")},()=>{l().then(()=>{j.push(A.app.getLogoutSuccessUrl())})}):P({message:o("common.user_pages_change_password_fail")})})};return N(()=>g(this,null,function*(){U("Page <<ChangePasswordPage>> mounted.")})),(t,s)=>{const h=H,y=K,w=E,b=O,k=T,V=G;return $(),q(M,null,[r(y,null,{default:d(()=>[r(h,{title:t.$t("common.user_pages_change_password_title"),"left-arrow":"",onClickLeft:s[0]||(s[0]=i=>n(D)())},null,8,["title"])]),_:1}),Q,r(V,{ref_key:"form",ref:u,onSubmit:a},{default:d(()=>[r(b,{inset:""},{default:d(()=>[r(w,{modelValue:e.originalPassword,"onUpdate:modelValue":s[1]||(s[1]=i=>e.originalPassword=i),type:"password",placeholder:n(o)("common.user_field_original_password_placeholder"),rules:p.originalPassword},null,8,["modelValue","placeholder","rules"]),r(w,{modelValue:e.newPassword,"onUpdate:modelValue":s[3]||(s[3]=i=>e.newPassword=i),type:"password",placeholder:n(o)("common.user_field_new_password_placeholder"),rules:p.newPassword},{"right-icon":d(()=>[r(n(z),{onClick:s[2]||(s[2]=i=>n(_)(!n(m))),icon:n(m)?"mdi:eye-off-outline":"mdi:eye-outline"},null,8,["icon"])]),_:1},8,["modelValue","placeholder","rules"])]),_:1}),v("div",R,[r(k,{block:"",type:"primary","native-type":"submit"},{default:d(()=>[x(L(n(o)("common.button_submit")),1)]),_:1})])]),_:1},512)],64)}}});export{co as default};
