System.register(["./index-legacy-f02f7d35.js","./entry-layout-legacy-da09d53f.js","./button-legacy-ed063489.js","./theme-color-select.vuevuetypestyleindex0scopedc40b9f5elang-legacy-cac80a14.js","./main-layout.vuevuetypestyleindex0scoped724951bflang-legacy-9a4ccb27.js","./icon-legacy-9098078c.js","./theme-select.vuevuetypescriptsetuptruelang-legacy-3855c88f.js","./index-legacy-81383bee.js","./plugin-vueexport-helper-legacy-762b7923.js"],(function(e,l){"use strict";var t,a,s,u,n,r,o,d,c,i,p,m,y,_,f,g,v,b,h,j;return{setters:[e=>{t=e.d,a=e.u,s=e.a,u=e.r,n=e.c,r=e.o,o=e.e,d=e.f,c=e.w,i=e.g,p=e.t,m=e.h,y=e.i,_=e.j,f=e.k},e=>{g=e.b,v=e.E,b=e.a},null,null,null,null,e=>{h=e.E},e=>{j=e.E},null],execute:function(){const l={class:"pt-4 text-center text-2xl"};e("default",t({__name:"index",setup(e){const{t:t}=a(),x=s(),w=u(),V=n({username:"",password:""}),$=n({username:[{required:!0,message:"Please input Activity name"}],password:[{required:!0,message:"Please input Activity name"}]});return r((async()=>{})),(e,a)=>{const s=h,u=v,n=j,r=b;return o(),d(y(g),null,{default:c((()=>[i("h3",l,p(e.$t("common_button_register")),1),m(r,{ref_key:"form",ref:w,model:V,rules:$},{default:c((()=>[m(u,{label:y(t)("user_field_username"),prop:"username"},{default:c((()=>[m(s,{modelValue:V.username,"onUpdate:modelValue":a[0]||(a[0]=e=>V.username=e),placeholder:e.$t("user_field_username")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),m(u,{label:y(t)("user_field_password"),prop:"password"},{default:c((()=>[m(s,{modelValue:V.password,"onUpdate:modelValue":a[1]||(a[1]=e=>V.password=e),placeholder:e.$t("user_field_password")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),m(u,null,{default:c((()=>[m(n,{onClick:a[2]||(a[2]=e=>(async e=>{e&&await e.validate(((e,l)=>{e&&f(V).then((e=>{1===e.code&&x.push("/admin")}))})).finally((()=>{}))})(w.value)),type:"primary"},{default:c((()=>[_(p(e.$t("common_button_login")),1)])),_:1}),m(n,{onClick:a[3]||(a[3]=e=>(async e=>{e&&e.resetFields()})(w.value))},{default:c((()=>[_(p(e.$t("common_button_reset")),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})}}}))}}}));
