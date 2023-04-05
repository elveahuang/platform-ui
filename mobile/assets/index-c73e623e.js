import{a7 as e,a8 as t,a9 as l,aa as a,c as n,V as o,ab as i,ac as s,d as c,n as u,ad as r,ae as v,r as d,af as m,ag as p,e as f,ah as h,ai as g,f as b,p as x,aj as w,u as y,ak as T,al as k,t as H,$ as O,B,am as C,X as S,an as N,ao as D,a2 as V,_ as M,ap as $,w as j}from"./index-cb371d87.js";import{a as I,T as P}from"./index-d6c258a4.js";const L=async n=>{const o=e();await o.setLocale(n),await(async e=>{l.global.setLocaleMessage(e,await a(e))})(n),await(async e=>{"legacy"===l.mode?l.global.locale=e:l.global.locale.value=e})(n),await t(n)},E=()=>({changeLocale:L}),[z,A,F]=n("picker"),R=e=>e.find((e=>!e.disabled))||e[0];function U(e,t){for(let l=t=s(t,0,e.length);l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const X=(e,t,l)=>void 0!==t&&!!e.find((e=>e[l.value]===t));function Y(e,t,l){const a=e.findIndex((e=>e[l.value]===t));return e[U(e,a)]}const[_,q]=n("picker-column"),G=Symbol(_);var J=c({name:_,props:{value:u,fields:r(Object),options:v(),readonly:Boolean,allowHtml:Boolean,optionHeight:r(Number),swipeDuration:r(u),visibleOptionNum:r(u)},emits:["change","clickOption"],setup(e,{emit:t,slots:l}){let a,n,o,i,c;const u=d(),r=d(),v=d(0),w=d(0),y=m(),T=()=>e.options.length,k=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,H=l=>{const n=U(e.options,l),o=-n*e.optionHeight,i=()=>{const l=e.options[n][e.fields.value];l!==e.value&&t("change",l)};a&&o!==v.value?c=i:i(),v.value=o},O=()=>e.readonly||!e.options.length,B=t=>s(Math.round(-t/e.optionHeight),0,T()-1),C=()=>{a=!1,w.value=0,c&&(c(),c=null)},S=e=>{if(!O()){if(y.start(e),a){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(r.value);v.value=Math.min(0,e-k())}w.value=0,n=v.value,o=Date.now(),i=n,c=null}},N=()=>{if(O())return;const t=v.value-i,l=Date.now()-o;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const a=Math.abs(t/l);t=v.value+a/.003*(t<0?-1:1);const n=B(t);w.value=+e.swipeDuration,H(n)})(t,l);const n=B(v.value);w.value=200,H(n),setTimeout((()=>{a=!1}),0)},D=()=>{const n={height:`${e.optionHeight}px`};return e.options.map(((o,i)=>{const s=o[e.fields.text],{disabled:u}=o,r=o[e.fields.value],v={role:"button",style:n,tabindex:u?-1:0,class:[q("item",{disabled:u,selected:r===e.value}),o.className],onClick:()=>(l=>{a||O()||(c=null,w.value=200,H(l),t("clickOption",e.options[l]))})(i)},d={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return b("li",v,[l.option?l.option(o,i):b("div",d,null)])}))};return p(G),f({stopMomentum:C}),h((()=>{const t=e.options.findIndex((t=>t[e.fields.value]===e.value)),l=-U(e.options,t)*e.optionHeight;v.value=l})),g("touchmove",(t=>{if(O())return;y.move(t),y.isVertical()&&(a=!0,x(t,!0)),v.value=s(n+y.deltaY.value,-T()*e.optionHeight,e.optionHeight);const l=Date.now();l-o>300&&(o=l,i=v.value)}),{target:u}),()=>b("div",{ref:u,class:q(),onTouchstartPassive:S,onTouchend:N,onTouchcancel:N},[b("ul",{ref:r,style:{transform:`translate3d(0, ${v.value+k()}px, 0)`,transitionDuration:`${w.value}ms`,transitionProperty:w.value?"all":"none"},class:q("wrapper"),onTransitionend:C},[D()])])}});const[K]=n("picker-toolbar"),Q={title:String,cancelButtonText:String,confirmButtonText:String},W=["cancel","confirm","title","toolbar"],Z=Object.keys(Q);var ee=c({name:K,props:Q,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const a=()=>t("cancel"),n=()=>t("confirm"),o=()=>{const t=e.cancelButtonText||F("cancel");return b("button",{type:"button",class:[A("cancel"),w],onClick:a},[l.cancel?l.cancel():t])},i=()=>{const t=e.confirmButtonText||F("confirm");return b("button",{type:"button",class:[A("confirm"),w],onClick:n},[l.confirm?l.confirm():t])};return()=>b("div",{class:A("toolbar")},[l.toolbar?l.toolbar():[o(),l.title?l.title():e.title?b("div",{class:[A("title"),"van-ellipsis"]},[e.title]):void 0,i()]])}});const[te,le]=n("picker-group"),ae=Symbol(te);c({name:te,props:i({tabs:v(),nextStepText:String},Q),emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const a=d(0),{children:n,linkChildren:o}=y(ae);o();const i=()=>a.value<e.tabs.length-1&&e.nextStepText,s=()=>{i()?a.value++:t("confirm",n.map((e=>e.confirm())))},c=()=>t("cancel");return()=>{var t;const n=null==(t=l.default)?void 0:t.call(l),o=i()?e.nextStepText:e.confirmButtonText;return b("div",{class:le()},[b(ee,{title:e.title,cancelButtonText:e.cancelButtonText,confirmButtonText:o,onConfirm:s,onCancel:c},T(l,W)),b(I,{active:a.value,"onUpdate:active":e=>a.value=e,class:le("tabs"),shrink:!0,animated:!0,lazyRender:!1},{default:()=>[e.tabs.map(((e,t)=>b(P,{title:e,titleClass:le("tab-title")},{default:()=>[null==n?void 0:n[t]]})))]})])}}});const ne=i({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:k(44),showToolbar:H,swipeDuration:k(1e3),visibleOptionNum:k(6)},Q);const oe=j(c({name:z,props:i({},ne,{columns:v(),modelValue:v(),toolbarPosition:O("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:t,slots:l}){const a=d(),n=d(e.modelValue.slice(0)),{parent:s}=p(ae),{children:c,linkChildren:u}=y(G);u();const r=B((()=>function(e){return i({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),v=B((()=>C(e.optionHeight))),m=B((()=>function(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}(e.columns,r.value))),h=B((()=>{const{columns:t}=e;switch(m.value){case"multiple":return t;case"cascade":return function(e,t,l){const a=[];let n={[t.children]:e},i=0;for(;n&&n[t.children];){const e=n[t.children],s=l.value[i];n=o(s)?Y(e,s,t):void 0,!n&&e.length&&(n=Y(e,R(e)[t.value],t)),i++,a.push(e)}return a}(t,r.value,n);default:return[t]}})),w=B((()=>h.value.some((e=>e.length)))),k=B((()=>h.value.map(((e,t)=>Y(e,n.value[t],r.value))))),H=B((()=>h.value.map(((e,t)=>e.findIndex((e=>e[r.value.value]===n.value[t])))))),O=(e,t)=>{if(n.value[e]!==t){const l=n.value.slice(0);l[e]=t,n.value=l}},j=()=>({selectedValues:n.value.slice(0),selectedOptions:k.value,selectedIndexes:H.value}),I=()=>{c.forEach((e=>e.stopMomentum()));const e=j();return M((()=>{t("confirm",e)})),e},P=()=>t("cancel",j()),L=()=>h.value.map(((a,o)=>b(J,{value:n.value[o],fields:r.value,options:a,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:v.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,l)=>{O(l,e),"cascade"===m.value&&n.value.forEach(((e,t)=>{const l=h.value[t];X(l,e,r.value)||O(t,l.length?l[0][r.value.value]:void 0)})),M((()=>{t("change",i({columnIndex:l},j()))}))})(e,o),onClickOption:e=>((e,l)=>t("clickOption",i({columnIndex:l,currentOption:e},j())))(e,o)},{option:l.option}))),E=e=>{if(w.value){const t={height:`${v.value}px`},l={backgroundSize:`100% ${(e-v.value)/2}px`};return[b("div",{class:A("mask"),style:l},null),b("div",{class:[$,A("frame")],style:t},null)]}},z=()=>{const t=v.value*+e.visibleOptionNum,l={height:`${t}px`};return b("div",{ref:a,class:A("columns"),style:l},[L(),E(t)])},F=()=>{if(e.showToolbar&&!s)return b(ee,V(T(e,Z),{onConfirm:I,onCancel:P}),T(l,W))};let U;S(h,(e=>{e.forEach(((e,t)=>{e.length&&!X(e,n.value[t],r.value)&&O(t,R(e)[r.value.value])}))}),{immediate:!0}),S((()=>e.modelValue),(e=>{N(e,n.value)||N(e,U)||(n.value=e.slice(0),U=e.slice(0))}),{deep:!0}),S(n,(l=>{N(l,e.modelValue)||(U=l.slice(0),t("update:modelValue",U))}),{immediate:!0}),g("touchmove",x,{target:a});return f({confirm:I,getSelectedOptions:()=>k.value}),()=>{var t,a;return b("div",{class:A()},["top"===e.toolbarPosition?F():null,e.loading?b(D,{class:A("loading")},null):null,null==(t=l["columns-top"])?void 0:t.call(l),z(),null==(a=l["columns-bottom"])?void 0:a.call(l),"bottom"===e.toolbarPosition?F():null])}}}));export{oe as P,E as u};