var _=(w,l,n)=>new Promise((i,e)=>{var p=o=>{try{a(n.next(o))}catch(d){e(d)}},r=o=>{try{a(n.throw(o))}catch(d){e(d)}},a=o=>o.done?i(o.value):Promise.resolve(o.value).then(p,r);a((n=n.apply(w,l)).next())});/* empty css             */import{E as b}from"./card-T9bNKV5Z.js";/* empty css                  *//* empty css               */import{d as v,q as E,r as y,v as c,o as k,l as f,e as C,f as $,w as t,k as q,t as P,j as s,i as u,x as B}from"./index-A7bhECbp.js";import{c as U}from"./user-BcfDNDzI.js";import{E as x}from"./index-I0dX4THf.js";import{E as F,a as I}from"./index-6Rwy8JEJ.js";import{E as N}from"./index-VZb_J77w.js";import"./index-7VBiOmgs.js";import"./event-Bjhng1YN.js";import"./castArray-W7AxUl58.js";const Q=v({__name:"password",setup(w){const{t:l}=E(),n=y(),i=c({originalPassword:[{required:!0,message:l("common.user_field_original_password_validation")}],newPassword:[{required:!0,message:l("common.user_field_new_password_validation")}],confirmPassword:[{required:!0,message:l("common.user_field_confirm_password_validation")}]}),e=c({originalPassword:"",newPassword:"",confirmPassword:""}),p=()=>_(this,null,function*(){yield n.value.validate(r=>{if(r){const a={originalPassword:e.originalPassword,newPassword:e.newPassword};U(a).then(o=>{o.code==200&&n.value.resetFields()}).catch(o=>{f(o)})}})});return k(()=>_(this,null,function*(){f("Page <<UserCenterPasswordPage>> mounted.")})),(r,a)=>{const o=x,d=F,g=N,h=I,V=b;return C(),$(V,{shadow:"never"},{header:t(()=>[q("div",null,P(r.$t("common.user_pages_change_password_title")),1)]),default:t(()=>[s(h,{ref_key:"form",ref:n,model:e,rules:i,"label-width":"200px",style:{"max-width":"500px"}},{default:t(()=>[s(d,{prop:"originalPassword",label:r.$t("common.user_field_original_password")},{default:t(()=>[s(o,{modelValue:e.originalPassword,"onUpdate:modelValue":a[0]||(a[0]=m=>e.originalPassword=m),placeholder:u(l)("common.user_field_original_password_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,{prop:"newPassword",label:r.$t("common.user_field_new_password")},{default:t(()=>[s(o,{modelValue:e.newPassword,"onUpdate:modelValue":a[1]||(a[1]=m=>e.newPassword=m),placeholder:u(l)("common.user_field_new_password")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,{prop:"confirmPassword",label:r.$t("common.user_field_confirm_password")},{default:t(()=>[s(o,{modelValue:e.confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=m=>e.confirmPassword=m),placeholder:u(l)("common.user_field_new_password_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,null,{default:t(()=>[s(g,{onClick:p,type:"primary"},{default:t(()=>[B(P(r.$t("common.button_submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}});export{Q as default};
