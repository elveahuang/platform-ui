var f=(g,i,l)=>new Promise((m,n)=>{var s=e=>{try{r(l.next(e))}catch(o){n(o)}},_=e=>{try{r(l.throw(e))}catch(o){n(o)}},r=e=>e.done?m(e.value):Promise.resolve(e.value).then(s,_);r((l=l.apply(g,i)).next())});import{d as k,u as x,a as $,b as v,r as B,c as b,e as h,o as S,l as C,f as N,g as P,w as a,h as U,t as w,i as t,j as u,k as q,I as y,E as F}from"./index-37dfe933.js";/* empty css             */import{E as L,a as j,b as D}from"./entry-layout-e91edcb8.js";import"./button-6effd2a3.js";import"./theme-color-select.vuevuetypestyleindex0scoped78f6b12elang-170f4242.js";import"./main-layout.vuevuetypestyleindex0scopedac135a6elang-e44974a0.js";import{E as M}from"./theme-select.vuevuetypescriptsetuptruelang-11482cb7.js";import{E as R}from"./index-8f540b26.js";import"./plugin-vueexport-helper-c27b6911.js";const T={class:"pb-4 text-2xl"},Y=k({__name:"index",setup(g){const{t:i}=x(),l=$(),m=v(),n=B(),s=b({grant_type:"password",client_id:h.auth.oauth.clientId,client_secret:h.auth.oauth.clientSecret,username:"admin",password:"admin"}),_=b({username:[{required:!0,message:"Please input username"}],password:[{required:!0,message:"Please input password"}]}),r=e=>f(this,null,function*(){e&&(yield e.validate((o,d)=>{o?(console.log("error submit!",o),m.login(s).then(()=>{l.push("/")})):console.log("error submit!",d)}).finally(()=>{}))});return S(()=>f(this,null,function*(){C("Page - <Login> is mounted.")})),(e,o)=>{const d=M,c=L,E=R,V=j,I=F;return N(),P(u(D),null,{default:a(()=>[U("h3",T,w(e.$t("user_pages_login_title")),1),t(V,{ref_key:"form",ref:n,"label-position":"top",model:s,rules:_},{default:a(()=>[t(c,{label:u(i)("user_field_username"),prop:"username"},{default:a(()=>[t(d,{modelValue:s.username,"onUpdate:modelValue":o[0]||(o[0]=p=>s.username=p),placeholder:e.$t("user_field_username")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(c,{label:u(i)("user_field_password"),prop:"password"},{default:a(()=>[t(d,{modelValue:s.password,"onUpdate:modelValue":o[1]||(o[1]=p=>s.password=p),placeholder:e.$t("user_field_password")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(c,null,{default:a(()=>[t(E,{onClick:o[2]||(o[2]=p=>r(n.value)),type:"primary"},{default:a(()=>[q(w(e.$t("common_button_login")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"]),t(u(y),{icon:"ep:add-location",width:"36px",height:"36px"}),t(I,null,{default:a(()=>[t(u(y),{icon:"ep:add-location"})]),_:1})]),_:1})}}});export{Y as default};
