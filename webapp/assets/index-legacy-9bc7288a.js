System.register(["./index-legacy-5751f86c.js","./entry-layout-legacy-da9e1909.js","./button-legacy-185ea506.js","./theme-color-select.vuevuetypestyleindex0scopedc40b9f5elang-legacy-85bd005c.js","./main-layout.vuevuetypestyleindex0scoped724951bflang-legacy-6bff1664.js","./icon-legacy-9098078c.js","./theme-select.vuevuetypescriptsetuptruelang-legacy-62ec762b.js","./index-legacy-44d3695c.js","./plugin-vueexport-helper-legacy-762b7923.js"],(function(e,l){"use strict";var a,s,t,u,n,r,o,d,c,p,m,i,y,_,f,g,v,b,h,j;return{setters:[e=>{a=e.d,s=e.u,t=e.a,u=e.r,n=e.c,r=e.o,o=e.f,d=e.g,c=e.w,p=e.h,m=e.t,i=e.i,y=e.j,_=e.k,f=e.m},e=>{g=e.b,v=e.E,b=e.a},null,null,null,null,e=>{h=e.E},e=>{j=e.E},null],execute:function(){const l={class:"pt-4 text-center text-2xl"};e("default",a({__name:"index",setup(e){const{t:a}=s(),w=t(),x=u(),V=n({username:"",password:""}),$=n({username:[{required:!0,message:"Please input username"}],password:[{required:!0,message:"Please input password"}]});return r((async()=>{})),(e,s)=>{const t=h,u=v,n=j,r=b;return o(),d(y(g),null,{default:c((()=>[p("h3",l,m(e.$t("common_button_register")),1),i(r,{ref_key:"form",ref:x,model:V,rules:$},{default:c((()=>[i(u,{label:y(a)("user_field_username"),prop:"username"},{default:c((()=>[i(t,{modelValue:V.username,"onUpdate:modelValue":s[0]||(s[0]=e=>V.username=e),placeholder:e.$t("user_field_username")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(u,{label:y(a)("user_field_password"),prop:"password"},{default:c((()=>[i(t,{modelValue:V.password,"onUpdate:modelValue":s[1]||(s[1]=e=>V.password=e),placeholder:e.$t("user_field_password")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(u,null,{default:c((()=>[i(n,{onClick:s[2]||(s[2]=e=>(async e=>{e&&await e.validate(((e,l)=>{e&&f(V).then((e=>{1===e.code&&w.push("/admin")}))})).finally((()=>{}))})(x.value)),type:"primary"},{default:c((()=>[_(m(e.$t("common_button_login")),1)])),_:1}),i(n,{onClick:s[3]||(s[3]=e=>(async e=>{e&&e.resetFields()})(x.value))},{default:c((()=>[_(m(e.$t("common_button_reset")),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})}}}))}}}));
