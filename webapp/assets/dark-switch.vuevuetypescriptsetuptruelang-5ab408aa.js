import{H as e,aj as a,K as t,N as i,M as l,aM as n,d as o,P as s,O as c,r,a4 as u,Q as v,o as d,f as p,U as m,h as f,j as b,W as y,b5 as h,g,w as k,a6 as x,E as V,a8 as C,t as I,i as S,bm as w,a7 as T,ap as _,_ as B,am as N,a1 as P,bn as j,aa as E,bo as U,aq as q,bp as K,bq as M,br as z,bs as A}from"./index-fbb6e2f3.js";import{b as D,U as F,C as H,I as O,d as Q,t as W}from"./theme-color-select.vuevuetypestyleindex0scopedc40b9f5elang-d7005aa5.js";import{c as G,u as J,g as L,d as R,e as X}from"./button-47119b68.js";const Y=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a},inactiveIcon:{type:a},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:t(Function)},size:{type:String,validator:D},tabindex:{type:[String,Number]}}),Z={[F]:e=>i(e)||l(e)||n(e),[H]:e=>i(e)||l(e)||n(e),[O]:e=>i(e)||l(e)||n(e)},$=["onClick"],ee=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ae=["aria-hidden"],te=["aria-hidden"],ie=["aria-hidden"],le="ElSwitch",ne=o({name:le});const oe=E(B(o({...ne,props:Y,emits:Z,setup(e,{expose:a,emit:t}){const l=e,n=N(),{formItem:o}=G(),B=J(),E=s("switch");L({from:'"value"',replacement:'"model-value" or "v-model"',scope:le,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},c((()=>{var e;return!!(null==(e=n.vnode.props)?void 0:e.value)})));const{inputId:U}=R(l,{formItemContext:o}),q=X(c((()=>l.loading))),K=r(!1!==l.modelValue),M=r(),z=r(),A=c((()=>[E.b(),E.m(B.value),E.is("disabled",q.value),E.is("checked",Z.value)])),D=c((()=>({width:u(l.width)})));v((()=>l.modelValue),(()=>{K.value=!0})),v((()=>l.value),(()=>{K.value=!1}));const Y=c((()=>K.value?l.modelValue:l.value)),Z=c((()=>Y.value===l.activeValue));[l.activeValue,l.inactiveValue].includes(Y.value)||(t(F,l.inactiveValue),t(H,l.inactiveValue),t(O,l.inactiveValue)),v(Z,(e=>{var a;M.value.checked=e,l.validateEvent&&(null==(a=null==o?void 0:o.validate)||a.call(o,"change").catch((e=>Q())))}));const ne=()=>{const e=Z.value?l.inactiveValue:l.activeValue;t(F,e),t(H,e),t(O,e),P((()=>{M.value.checked=Z.value}))},oe=()=>{if(q.value)return;const{beforeChange:e}=l;if(!e)return void ne();const a=e();[j(a),i(a)].includes(!0)||W(le,"beforeChange must return type `Promise<boolean>` or `boolean`"),j(a)?a.then((e=>{e&&ne()})).catch((e=>{})):a&&ne()},se=c((()=>E.cssVarBlock({...l.activeColor?{"on-color":l.activeColor}:null,...l.inactiveColor?{"off-color":l.inactiveColor}:null,...l.borderColor?{"border-color":l.borderColor}:null})));return d((()=>{M.value.checked=Z.value})),a({focus:()=>{var e,a;null==(a=null==(e=M.value)?void 0:e.focus)||a.call(e)},checked:Z}),(e,a)=>(p(),m("div",{class:y(b(A)),style:T(b(se)),onClick:_(oe,["prevent"])},[f("input",{id:b(U),ref_key:"input",ref:M,class:y(b(E).e("input")),type:"checkbox",role:"switch","aria-checked":b(Z),"aria-disabled":b(q),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:b(q),tabindex:e.tabindex,onChange:ne,onKeydown:h(oe,["enter"])},null,42,ee),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?C("v-if",!0):(p(),m("span",{key:0,class:y([b(E).e("label"),b(E).em("label","left"),b(E).is("active",!b(Z))])},[e.inactiveIcon?(p(),g(b(V),{key:0},{default:k((()=>[(p(),g(x(e.inactiveIcon)))])),_:1})):C("v-if",!0),!e.inactiveIcon&&e.inactiveText?(p(),m("span",{key:1,"aria-hidden":b(Z)},I(e.inactiveText),9,ae)):C("v-if",!0)],2)),f("span",{ref_key:"core",ref:z,class:y(b(E).e("core")),style:T(b(D))},[e.inlinePrompt?(p(),m("div",{key:0,class:y(b(E).e("inner"))},[e.activeIcon||e.inactiveIcon?(p(),g(b(V),{key:0,class:y(b(E).is("icon"))},{default:k((()=>[(p(),g(x(b(Z)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(p(),m("span",{key:1,class:y(b(E).is("text")),"aria-hidden":!b(Z)},I(b(Z)?e.activeText:e.inactiveText),11,te)):C("v-if",!0)],2)):C("v-if",!0),f("div",{class:y(b(E).e("action"))},[e.loading?(p(),g(b(V),{key:0,class:y(b(E).is("loading"))},{default:k((()=>[S(b(w))])),_:1},8,["class"])):C("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?C("v-if",!0):(p(),m("span",{key:1,class:y([b(E).e("label"),b(E).em("label","right"),b(E).is("active",b(Z))])},[e.activeIcon?(p(),g(b(V),{key:0},{default:k((()=>[(p(),g(x(e.activeIcon)))])),_:1})):C("v-if",!0),!e.activeIcon&&e.activeText?(p(),m("span",{key:1,"aria-hidden":!b(Z)},I(e.activeText),9,ie)):C("v-if",!0)],2))],14,$))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])),se=o({__name:"dark-switch",setup(e){const a=U(),t=q(),i=e=>{A(t.dark),t.setDark(e)};return(e,t)=>{const l=oe;return p(),g(l,{modelValue:b(a),"onUpdate:modelValue":t[0]||(t[0]=e=>K(a)?a.value=e:null),"inline-prompt":"",onChange:i,"active-icon":b(M),"inactive-icon":b(z)},null,8,["modelValue","active-icon","inactive-icon"])}}});export{se as _};
