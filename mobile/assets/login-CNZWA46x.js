var d=(o,e,i)=>new Promise((h,u)=>{var _=s=>{try{g(i.next(s))}catch(f){u(f)}},c=s=>{try{g(i.throw(s))}catch(f){u(f)}},g=s=>s.done?h(s.value):Promise.resolve(s.value).then(_,c);g((i=i.apply(o,e)).next())});import{d as U,r as w,o as R,l as N,a as $,R as A,a2 as K,A as P,a6 as H,a7 as X,I as B,c as Y,b as t,u as a,w as l,a1 as j,H as E,a3 as b,V as k,F as J,a8 as O,a4 as F,a5 as Q,a9 as W,a0 as Z}from"./index-Bgj8EFX7.js";import{C as ee,R as ae}from"./index-D1mPStYG.js";import{S as oe}from"./index-Dyuo2-DG.js";/* empty css              *//* empty css                                                              *//* empty css              *//* empty css              */import{F as te,a as ne}from"./index-aUy-3xUy.js";import{N as se}from"./index-CPKoU0kA.js";/* empty css              */import{g as re}from"./captcha-DTAMg_DP.js";import{I as ie}from"./index-CJws_luU.js";/* empty css              */import{_ as le,a as me,b as ce}from"./ThemePicker.vue_vue_type_script_setup_true_lang-kbWQ2-oc.js";import{_ as pe}from"./AppIcon.vue_vue_type_script_setup_true_lang-Ba6-do8Q.js";import{t as de}from"./toNumber-DMAIevZF.js";import{u as _e}from"./index-Be9y23Hs.js";import{C as ue}from"./index-3CkvOF-z.js";import"./index-BfsnM3bz.js";import"./use-id-7BkpWuz2.js";import"./useTheme-DrlBIEQE.js";var S=1/0,fe=17976931348623157e292;function ge(o){if(!o)return o===0?o:0;if(o=de(o),o===S||o===-S){var e=o<0?-1:1;return e*fe}return o===o?o:0}function he(o){var e=ge(o),i=e%1;return e===e?i?e-i:e:0}const ye=U({__name:"CodeCaptcha",props:{width:{type:Number,default:120},height:{type:Number,default:24}},emits:["change"],setup(o,{expose:e,emit:i}){const h=i,u=o,_=w(""),c=()=>d(this,null,function*(){yield re({}).then(s=>{_.value=s.data.image,h("change",s.data.key)})});return e({refresh:()=>d(this,null,function*(){c().then()})}),R(()=>d(this,null,function*(){N("Component <<Captcha>> mounted."),c().then()})),(s,f)=>{const y=ie;return $(),A(y,{alt:s.$t("common.field_captcha"),width:u.width,height:u.height,src:_.value,onClick:c},null,8,["alt","width","height","src"])}}}),we=E("div",{class:"app-divider"},null,-1),ve={class:"m-4"},Ke=U({__name:"login",setup(o){const{t:e}=K(),{isLoginCaptchaEnabled:i}=P(),{login:h,getUserInfo:u}=H(),_=X(),[c,g]=_e(!1),s=w(),f=w(),y=w(!1),m=B(W),v=B({username:[{required:!0,message:e("common.user_field_username_validation_login")}],password:[{required:!0,message:e("common.user_field_password_validation")}],captchaValue:[{required:i,message:e("common.field_captcha_validation")}]}),L=n=>d(this,null,function*(){N(n)}),T=()=>d(this,null,function*(){y.value=!0,h(m).then(n=>d(this,null,function*(){n.access_token&&n.refresh_token?(yield u().then(),_.push(O.app.getLoginSuccessUrl()).then()):n!=null&&n.code&&he(n==null?void 0:n.code)>=1e7?F({message:e(`common.error__${n==null?void 0:n.code}`)}):F({message:e("common.system_error")})})).finally(()=>{y.value=!1,i&&(m.captchaKey="",m.captchaValue="",f.value.refresh())})}),q=n=>d(this,null,function*(){m.captchaKey=n});return R(()=>d(this,null,function*(){N("Page <<Login>> mounted.")})),(n,r)=>{const M=se,C=te,z=ue,V=Q,I=oe,x=ee,D=ae,G=ne;return $(),Y(J,null,[t(M,{title:a(e)("common.user_pages_login_title"),"left-arrow":"",onClickLeft:r[0]||(r[0]=p=>a(Z)("/tabs/welcome"))},null,8,["title"]),we,t(G,{ref_key:"form",ref:s,"validate-trigger":"onSubmit",onSubmit:T,onFailed:L},{default:l(()=>[t(z,{inset:""},{default:l(()=>[t(C,{modelValue:m.username,"onUpdate:modelValue":r[1]||(r[1]=p=>m.username=p),placeholder:a(e)("common.user_field_username"),rules:v.username},null,8,["modelValue","placeholder","rules"]),t(C,{modelValue:m.password,"onUpdate:modelValue":r[3]||(r[3]=p=>m.password=p),placeholder:a(e)("common.user_field_password"),rules:v.password,type:a(c)?"text":"password"},{"right-icon":l(()=>[t(a(pe),{onClick:r[2]||(r[2]=p=>a(g)(!a(c))),icon:a(c)?"mdi:eye-off-outline":"mdi:eye-outline"},null,8,["icon"])]),_:1},8,["modelValue","placeholder","rules","type"]),a(i)?($(),A(C,{key:0,modelValue:m.captchaValue,"onUpdate:modelValue":r[4]||(r[4]=p=>m.captchaValue=p),placeholder:a(e)("common.field_captcha_placeholder"),rules:v.captchaValue},{button:l(()=>[t(a(ye),{ref_key:"captcha",ref:f,onChange:q},null,512)]),_:1},8,["modelValue","placeholder","rules"])):j("",!0)]),_:1}),E("div",ve,[t(V,{block:"","native-type":"submit",type:"primary",disabled:y.value},{default:l(()=>[b(k(a(e)("common.button_login")),1)]),_:1},8,["disabled"])]),t(D,{class:"px-4 pt-4"},{default:l(()=>[t(x,{span:"12",class:"text-left"},{default:l(()=>[t(I,null,{default:l(()=>[t(a(le)),t(a(me)),t(a(ce))]),_:1})]),_:1}),t(x,{span:"12",class:"text-right"},{default:l(()=>[t(I,null,{default:l(()=>[t(V,{plain:"",hairline:"",type:"primary",size:"small",onClick:r[5]||(r[5]=p=>a(_).push({path:"find-password"}))},{default:l(()=>[b(k(a(e)("common.user_pages_find_password_title")),1)]),_:1}),t(V,{plain:"",hairline:"",type:"primary",size:"small",onClick:r[6]||(r[6]=p=>a(_).push({path:"register"}))},{default:l(()=>[b(k(a(e)("common.user_pages_register_title")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)],64)}}});export{Ke as default};