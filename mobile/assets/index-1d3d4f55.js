import{a7 as e,a8 as t,a9 as l,aa as n,c as a,V as o,ab as i,ac as s,d as c,n as u,ad as r,ae as v,r as d,af as m,B as p,ag as f,e as h,ah as g,ai as b,f as x,p as w,aj as y,u as T,ak as k,al as O,t as H,$ as B,am as C,X as I,an as S,ao as N,a2 as D,_ as V,ap as M,w as $}from"./index-c0bed8fe.js";import{a as j,T as P}from"./index-f08d4781.js";const L=async a=>{const o=e();await o.setLocale(a),await(async e=>{l.global.setLocaleMessage(e,await n(e))})(a),await(async e=>{"legacy"===l.mode?l.global.locale=e:l.global.locale.value=e})(a),await t(a)},E=()=>({changeLocale:L}),[z,A,F]=a("picker"),R=e=>e.find((e=>!e.disabled))||e[0];function U(e,t){for(let l=t=s(t,0,e.length);l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const X=(e,t,l)=>void 0!==t&&!!e.find((e=>e[l.value]===t));function Y(e,t,l){const n=e.findIndex((e=>e[l.value]===t));return e[U(e,n)]}const[_,q]=a("picker-column"),G=Symbol(_);var J=c({name:_,props:{value:u,fields:r(Object),options:v(),readonly:Boolean,allowHtml:Boolean,optionHeight:r(Number),swipeDuration:r(u),visibleOptionNum:r(u)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:l}){let n,a,o,i,c;const u=d(),r=d(),v=d(0),y=d(0),T=m(),k=()=>e.options.length,O=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,H=l=>{const a=U(e.options,l),o=-a*e.optionHeight,i=()=>{const l=e.options[a][e.fields.value];l!==e.value&&t("change",l)};n&&o!==v.value?c=i:i(),v.value=o},B=()=>e.readonly||!e.options.length,C=t=>s(Math.round(-t/e.optionHeight),0,k()-1),I=p((()=>C(v.value))),S=()=>{n=!1,y.value=0,c&&(c(),c=null)},N=e=>{if(!B()){if(T.start(e),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(r.value);v.value=Math.min(0,e-O())}y.value=0,a=v.value,o=Date.now(),i=a,c=null}},D=()=>{if(B())return;const t=v.value-i,l=Date.now()-o;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const n=Math.abs(t/l);t=v.value+n/.003*(t<0?-1:1);const a=C(t);y.value=+e.swipeDuration,H(a)})(t,l);const a=C(v.value);y.value=200,H(a),setTimeout((()=>{n=!1}),0)},V=()=>{const a={height:`${e.optionHeight}px`};return e.options.map(((o,i)=>{const s=o[e.fields.text],{disabled:u}=o,r=o[e.fields.value],v={role:"button",style:a,tabindex:u?-1:0,class:[q("item",{disabled:u,selected:r===e.value}),o.className],onClick:()=>(l=>{n||B()||(c=null,y.value=200,H(l),t("clickOption",e.options[l]))})(i)},d={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return x("li",v,[l.option?l.option(o,i):x("div",d,null)])}))};return f(G),h({stopMomentum:S}),g((()=>{const t=e.options.findIndex((t=>t[e.fields.value]===e.value)),l=-U(e.options,t)*e.optionHeight;v.value=l})),b("touchmove",(l=>{if(B())return;T.move(l),T.isVertical()&&(n=!0,w(l,!0));const c=s(a+T.deltaY.value,-k()*e.optionHeight,e.optionHeight),u=C(c);u!==I.value&&t("scrollInto",e.options[u]),v.value=c;const r=Date.now();r-o>300&&(o=r,i=c)}),{target:u}),()=>x("div",{ref:u,class:q(),onTouchstartPassive:N,onTouchend:D,onTouchcancel:D},[x("ul",{ref:r,style:{transform:`translate3d(0, ${v.value+O()}px, 0)`,transitionDuration:`${y.value}ms`,transitionProperty:y.value?"all":"none"},class:q("wrapper"),onTransitionend:S},[V()])])}});const[K]=a("picker-toolbar"),Q={title:String,cancelButtonText:String,confirmButtonText:String},W=["cancel","confirm","title","toolbar"],Z=Object.keys(Q);var ee=c({name:K,props:Q,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const n=()=>t("cancel"),a=()=>t("confirm"),o=()=>{const t=e.cancelButtonText||F("cancel");return x("button",{type:"button",class:[A("cancel"),y],onClick:n},[l.cancel?l.cancel():t])},i=()=>{const t=e.confirmButtonText||F("confirm");return x("button",{type:"button",class:[A("confirm"),y],onClick:a},[l.confirm?l.confirm():t])};return()=>x("div",{class:A("toolbar")},[l.toolbar?l.toolbar():[o(),l.title?l.title():e.title?x("div",{class:[A("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[te,le]=a("picker-group"),ne=Symbol(te);c({name:te,props:i({tabs:v(),nextStepText:String},Q),emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const n=d(0),{children:a,linkChildren:o}=T(ne);o();const i=()=>n.value<e.tabs.length-1&&e.nextStepText,s=()=>{i()?n.value++:t("confirm",a.map((e=>e.confirm())))},c=()=>t("cancel");return()=>{var t;const a=null==(t=l.default)?void 0:t.call(l),o=i()?e.nextStepText:e.confirmButtonText;return x("div",{class:le()},[x(ee,{title:e.title,cancelButtonText:e.cancelButtonText,confirmButtonText:o,onConfirm:s,onCancel:c},k(l,W)),x(j,{active:n.value,"onUpdate:active":e=>n.value=e,class:le("tabs"),shrink:!0,animated:!0,lazyRender:!1},{default:()=>[e.tabs.map(((e,t)=>x(P,{title:e,titleClass:le("tab-title")},{default:()=>[null==a?void 0:a[t]]})))]})])}}});const ae=i({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:O(44),showToolbar:H,swipeDuration:O(1e3),visibleOptionNum:O(6)},Q);const oe=$(c({name:z,props:i({},ae,{columns:v(),modelValue:v(),toolbarPosition:B("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:t,slots:l}){const n=d(),a=d(e.modelValue.slice(0)),{parent:s}=f(ne),{children:c,linkChildren:u}=T(G);u();const r=p((()=>function(e){return i({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),v=p((()=>C(e.optionHeight))),m=p((()=>function(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}(e.columns,r.value))),g=p((()=>{const{columns:t}=e;switch(m.value){case"multiple":return t;case"cascade":return function(e,t,l){const n=[];let a={[t.children]:e},i=0;for(;a&&a[t.children];){const e=a[t.children],s=l.value[i];a=o(s)?Y(e,s,t):void 0,!a&&e.length&&(a=Y(e,R(e)[t.value],t)),i++,n.push(e)}return n}(t,r.value,a);default:return[t]}})),y=p((()=>g.value.some((e=>e.length)))),O=p((()=>g.value.map(((e,t)=>Y(e,a.value[t],r.value))))),H=p((()=>g.value.map(((e,t)=>e.findIndex((e=>e[r.value.value]===a.value[t])))))),B=(e,t)=>{if(a.value[e]!==t){const l=a.value.slice(0);l[e]=t,a.value=l}},$=()=>({selectedValues:a.value.slice(0),selectedOptions:O.value,selectedIndexes:H.value}),j=()=>{c.forEach((e=>e.stopMomentum()));const e=$();return V((()=>{t("confirm",e)})),e},P=()=>t("cancel",$()),L=()=>g.value.map(((n,o)=>x(J,{value:a.value[o],fields:r.value,options:n,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:v.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,l)=>{B(l,e),"cascade"===m.value&&a.value.forEach(((e,t)=>{const l=g.value[t];X(l,e,r.value)||B(t,l.length?l[0][r.value.value]:void 0)})),V((()=>{t("change",i({columnIndex:l},$()))}))})(e,o),onClickOption:e=>((e,l)=>{const n={columnIndex:l,currentOption:e};t("clickOption",i($(),n)),t("scrollInto",n)})(e,o),onScrollInto:e=>{t("scrollInto",{currentOption:e,columnIndex:o})}},{option:l.option}))),E=e=>{if(y.value){const t={height:`${v.value}px`},l={backgroundSize:`100% ${(e-v.value)/2}px`};return[x("div",{class:A("mask"),style:l},null),x("div",{class:[M,A("frame")],style:t},null)]}},z=()=>{const t=v.value*+e.visibleOptionNum,l={height:`${t}px`};return x("div",{ref:n,class:A("columns"),style:l},[L(),E(t)])},F=()=>{if(e.showToolbar&&!s)return x(ee,D(k(e,Z),{onConfirm:j,onCancel:P}),k(l,W))};let U;I(g,(e=>{e.forEach(((e,t)=>{e.length&&!X(e,a.value[t],r.value)&&B(t,R(e)[r.value.value])}))}),{immediate:!0}),I((()=>e.modelValue),(e=>{S(e,a.value)||S(e,U)||(a.value=e.slice(0),U=e.slice(0))}),{deep:!0}),I(a,(l=>{S(l,e.modelValue)||(U=l.slice(0),t("update:modelValue",U))}),{immediate:!0}),b("touchmove",w,{target:n});return h({confirm:j,getSelectedOptions:()=>O.value}),()=>{var t,n;return x("div",{class:A()},["top"===e.toolbarPosition?F():null,e.loading?x(N,{class:A("loading")},null):null,null==(t=l["columns-top"])?void 0:t.call(l),z(),null==(n=l["columns-bottom"])?void 0:n.call(l),"bottom"===e.toolbarPosition?F():null])}}}));export{oe as P,E as u};
