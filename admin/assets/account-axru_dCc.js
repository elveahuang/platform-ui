var p=(c,r,t)=>new Promise((m,i)=>{var s=e=>{try{o(t.next(e))}catch(a){i(a)}},d=e=>{try{o(t.throw(e))}catch(a){i(a)}},o=e=>e.done?m(e.value):Promise.resolve(e.value).then(s,d);o((t=t.apply(c,r)).next())});/* empty css             */import{E as w}from"./card-qIO08p9S.js";/* empty css                  *//* empty css               */import{d as b,x as v,ai as V,r as k,y as _,o as x,l as f,e as C,f as B,w as n,k as I,t as y,j as l,i as U,z as A}from"./index-4apzAS8a.js";import{u as P}from"./user-4s__wbrD.js";import{E as S}from"./index-4hAFsq7K.js";import{E as $,a as F}from"./index-ILndNSjc.js";import{E as j}from"./index-kED19skF.js";import"./castArray-Ff_u6xGd.js";const Q=b({__name:"account",setup(c){const{t:r}=v(),{getUserInfo:t}=V(),m=k(),i=_({displayName:[{required:!0,message:r("common.user_field_display_name_validation")}]}),s=_({displayName:""}),d=()=>p(this,null,function*(){yield m.value.validate(o=>{if(o){const e={displayName:s.displayName};P(e).then(a=>{a.code==200&&t().then()}).catch(a=>{f(a)})}})});return x(()=>p(this,null,function*(){f("Page <<UserCenterAccountPage>> mounted.")})),(o,e)=>{const a=S,u=$,h=j,g=F,E=w;return C(),B(E,{shadow:"never"},{header:n(()=>[I("div",null,y(o.$t("common.user_pages_change_password_title")),1)]),default:n(()=>[l(g,{ref_key:"form",ref:m,model:s,rules:i,"label-width":"200px",style:{"max-width":"500px"}},{default:n(()=>[l(u,{prop:"originalPassword",label:o.$t("common.user_field_display_name")},{default:n(()=>[l(a,{modelValue:s.displayName,"onUpdate:modelValue":e[0]||(e[0]=N=>s.displayName=N),placeholder:U(r)("common.user_field_display_name_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,null,{default:n(()=>[l(h,{onClick:d,type:"primary"},{default:n(()=>[A(y(o.$t("common.button_submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}});export{Q as default};