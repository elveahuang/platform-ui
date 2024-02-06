import{aT as T,aU as _,c as m,ac as E,ad as D,a8 as g,d as k,ag as F,r as M,o as P,am as V,aI as L,h as W,a9 as C,a5 as O}from"./index-LAUg_gIy.js";import{u as X,r as j}from"./responsiveObserve-mytNdmoG.js";import{u as H}from"./useFlexGapSupport-a8fynpvT.js";const B=Symbol("rowContextKey"),K=e=>{T(B,e)},U=()=>_(B,{gutter:m(()=>{}),wrap:m(()=>{}),supportFlexGap:m(()=>{})}),J=K,q=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Q=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},Y=(e,t)=>{const{componentCls:l,gridColumns:u}=e,o={};for(let s=u;s>=0;s--)s===0?(o[`${l}${t}-${s}`]={display:"none"},o[`${l}-push-${s}`]={insetInlineStart:"auto"},o[`${l}-pull-${s}`]={insetInlineEnd:"auto"},o[`${l}${t}-push-${s}`]={insetInlineStart:"auto"},o[`${l}${t}-pull-${s}`]={insetInlineEnd:"auto"},o[`${l}${t}-offset-${s}`]={marginInlineEnd:0},o[`${l}${t}-order-${s}`]={order:0}):(o[`${l}${t}-${s}`]={display:"block",flex:`0 0 ${s/u*100}%`,maxWidth:`${s/u*100}%`},o[`${l}${t}-push-${s}`]={insetInlineStart:`${s/u*100}%`},o[`${l}${t}-pull-${s}`]={insetInlineEnd:`${s/u*100}%`},o[`${l}${t}-offset-${s}`]={marginInlineStart:`${s/u*100}%`},o[`${l}${t}-order-${s}`]={order:s});return o},R=(e,t)=>Y(e,t),Z=(e,t,l)=>({[`@media (min-width: ${t}px)`]:g({},R(e,l))}),z=E("Grid",e=>[q(e)]),ee=E("Grid",e=>{const t=D(e,{gridColumns:24}),l={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[Q(t),R(t,""),R(t,"-xs"),Object.keys(l).map(u=>Z(t,l[u],u)).reduce((u,o)=>g(g({},u),o),{})]}),te=()=>({align:O([String,Object]),justify:O([String,Object]),prefixCls:String,gutter:O([Number,Array,Object],0),wrap:{type:Boolean,default:void 0}}),ne=k({compatConfig:{MODE:3},name:"ARow",inheritAttrs:!1,props:te(),setup(e,t){let{slots:l,attrs:u}=t;const{prefixCls:o,direction:s}=F("row",e),[G,y]=z(o);let b;const v=X(),x=M({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=M({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=n=>m(()=>{if(typeof e[n]=="string")return e[n];if(typeof e[n]!="object")return"";for(let r=0;r<j.length;r++){const a=j[r];if(!S.value[a])continue;const i=e[n][a];if(i!==void 0)return i}return""}),f=h("align"),p=h("justify"),d=H();P(()=>{b=v.value.subscribe(n=>{S.value=n;const r=e.gutter||0;(!Array.isArray(r)&&typeof r=="object"||Array.isArray(r)&&(typeof r[0]=="object"||typeof r[1]=="object"))&&(x.value=n)})}),V(()=>{v.value.unsubscribe(b)});const $=m(()=>{const n=[void 0,void 0],{gutter:r=0}=e;return(Array.isArray(r)?r:[r,void 0]).forEach((i,A)=>{if(typeof i=="object")for(let I=0;I<j.length;I++){const N=j[I];if(x.value[N]&&i[N]!==void 0){n[A]=i[N];break}}else n[A]=i}),n});J({gutter:$,supportFlexGap:d,wrap:m(()=>e.wrap)});const w=m(()=>L(o.value,{[`${o.value}-no-wrap`]:e.wrap===!1,[`${o.value}-${p.value}`]:p.value,[`${o.value}-${f.value}`]:f.value,[`${o.value}-rtl`]:s.value==="rtl"},u.class,y.value)),c=m(()=>{const n=$.value,r={},a=n[0]!=null&&n[0]>0?`${n[0]/-2}px`:void 0,i=n[1]!=null&&n[1]>0?`${n[1]/-2}px`:void 0;return a&&(r.marginLeft=a,r.marginRight=a),d.value?r.rowGap=`${n[1]}px`:i&&(r.marginTop=i,r.marginBottom=i),r});return()=>{var n;return G(W("div",C(C({},u),{},{class:w.value,style:g(g({},c.value),u.style)}),[(n=l.default)===null||n===void 0?void 0:n.call(l)]))}}}),ie=ne;function re(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const se=()=>({span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}),oe=["xs","sm","md","lg","xl","xxl"],de=k({compatConfig:{MODE:3},name:"ACol",inheritAttrs:!1,props:se(),setup(e,t){let{slots:l,attrs:u}=t;const{gutter:o,supportFlexGap:s,wrap:G}=U(),{prefixCls:y,direction:b}=F("col",e),[v,x]=ee(y),S=m(()=>{const{span:f,order:p,offset:d,push:$,pull:w}=e,c=y.value;let n={};return oe.forEach(r=>{let a={};const i=e[r];typeof i=="number"?a.span=i:typeof i=="object"&&(a=i||{}),n=g(g({},n),{[`${c}-${r}-${a.span}`]:a.span!==void 0,[`${c}-${r}-order-${a.order}`]:a.order||a.order===0,[`${c}-${r}-offset-${a.offset}`]:a.offset||a.offset===0,[`${c}-${r}-push-${a.push}`]:a.push||a.push===0,[`${c}-${r}-pull-${a.pull}`]:a.pull||a.pull===0,[`${c}-rtl`]:b.value==="rtl"})}),L(c,{[`${c}-${f}`]:f!==void 0,[`${c}-order-${p}`]:p,[`${c}-offset-${d}`]:d,[`${c}-push-${$}`]:$,[`${c}-pull-${w}`]:w},n,u.class,x.value)}),h=m(()=>{const{flex:f}=e,p=o.value,d={};if(p&&p[0]>0){const $=`${p[0]/2}px`;d.paddingLeft=$,d.paddingRight=$}if(p&&p[1]>0&&!s.value){const $=`${p[1]/2}px`;d.paddingTop=$,d.paddingBottom=$}return f&&(d.flex=re(f),G.value===!1&&!d.minWidth&&(d.minWidth=0)),d});return()=>{var f;return v(W("div",C(C({},u),{},{class:S.value,style:[h.value,u.style]}),[(f=l.default)===null||f===void 0?void 0:f.call(l)]))}}});export{de as C,ie as R};