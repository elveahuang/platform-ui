var p=(i,c,t)=>new Promise((m,n)=>{var o=a=>{try{e(t.next(a))}catch(l){n(l)}},s=a=>{try{e(t.throw(a))}catch(l){n(l)}},e=a=>a.done?m(a.value):Promise.resolve(a.value).then(o,s);e((t=t.apply(i,c)).next())});import{d as _,J as h,r as u,o as f,l as v,a as g,c as y,w as C,K as b,L as x,a7 as w,a8 as k,N as B}from"./index-q8XU2Mr1.js";/* empty css              *//* empty css                                                                 */import{a as I}from"./captcha-CAJ12oIU.js";const A=_({__name:"MailCaptcha",props:{email:{type:String,default:""}},emits:["change"],setup(i,{emit:c}){const{t}=h(),m=c,n=i,o=u(!1),s=u(t("common.field_captcha_button"));let e=0,a=null;const l=()=>p(this,null,function*(){if(w(n.email)){k({message:t("common.field_captcha_validation_email")}).then();return}yield I({email:n.email}).then(r=>{m("change",r.data.key),o.value=!0,e=60,a=setInterval(()=>{e--,e<=0?(s.value=t("common.field_captcha_button"),o.value=!1,clearInterval(a)):s.value=t(`${e}`)},1e3)})});return f(()=>p(this,null,function*(){v("Component <<MailCaptcha>> mounted.")})),(r,M)=>{const d=B;return g(),y(d,{style:{"min-width":"60px"},size:"small",type:"primary",disabled:o.value,onClick:l},{default:C(()=>[b(x(s.value),1)]),_:1},8,["disabled"])}}});export{A as _};