var u=(c,l,n)=>new Promise((i,o)=>{var _=e=>{try{a(n.next(e))}catch(d){o(d)}},s=e=>{try{a(n.throw(e))}catch(d){o(d)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(_,s);a((n=n.apply(c,l)).next())});import{d as V,D as v,r as y,H as p,o as k,l as f,b as C,e as E,w as t,P as $,j as q,t as P,q as r,h as w,k as B,K as N,L as U,N as F,O as I}from"./index-CqV8-mTv.js";/* empty css                *//* empty css                     *//* empty css                 */import{c as x}from"./user-DQvVhYBp.js";const L=V({__name:"password",setup(c){const{t:l}=v(),n=y(),i=p({originalPassword:[{required:!0,message:l("common.user_field_original_password_validation")}],newPassword:[{required:!0,message:l("common.user_field_new_password_validation")}],confirmPassword:[{required:!0,message:l("common.user_field_confirm_password_validation")}]}),o=p({originalPassword:"",newPassword:"",confirmPassword:""}),_=()=>u(this,null,function*(){yield n.value.validate(s=>{if(s){const a={originalPassword:o.originalPassword,newPassword:o.newPassword};x(a).then(e=>{e.code==200&&n.value.resetFields()}).catch(e=>{f(e)})}})});return k(()=>u(this,null,function*(){f("Page <<UserCenterPasswordPage>> mounted.")})),(s,a)=>{const e=N,d=U,g=F,b=I,h=$;return C(),E(h,{shadow:"never"},{title:t(()=>[q("div",null,P(s.$t("common.user_pages_change_password_title")),1)]),default:t(()=>[r(b,{ref_key:"form",ref:n,model:o,rules:i,"label-width":"200px",style:{"max-width":"500px"}},{default:t(()=>[r(d,{name:"originalPassword",label:s.$t("common.user_field_original_password")},{default:t(()=>[r(e,{modelValue:o.originalPassword,"onUpdate:modelValue":a[0]||(a[0]=m=>o.originalPassword=m),placeholder:w(l)("common.user_field_original_password_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{name:"newPassword",label:s.$t("common.user_field_new_password")},{default:t(()=>[r(e,{modelValue:o.newPassword,"onUpdate:modelValue":a[1]||(a[1]=m=>o.newPassword=m),placeholder:w(l)("common.user_field_new_password")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{name:"confirmPassword",label:s.$t("common.user_field_confirm_password")},{default:t(()=>[r(e,{modelValue:o.confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=m=>o.confirmPassword=m),placeholder:w(l)("common.user_field_new_password_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,null,{default:t(()=>[r(g,{onClick:_,type:"primary"},{default:t(()=>[B(P(s.$t("common.button_submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}});export{L as default};