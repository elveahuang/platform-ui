import{c as x,ab as C,a_ as I,$ as g,n as N,d as B,a$ as D,b0 as E,f as o,Q as q,p as L,an as M,w as z,T as O,B as U,k as S,b1 as F,b2 as Q}from"./index-104d3409.js";const[V,u]=x("button"),j=C({},I,{tag:g("button"),text:String,icon:String,type:g("default"),size:g("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:g("button"),loadingSize:N,loadingText:String,loadingType:String,iconPosition:g("left")});var G=B({name:V,props:j,emits:["click"],setup(e,{emit:a,slots:n}){const l=D(),m=()=>n.loading?n.loading():o(M,{size:e.loadingSize,type:e.loadingType,class:u("loading")},null),i=()=>{if(e.loading)return m();if(n.icon)return o("div",{class:u("icon")},[n.icon()]);if(e.icon)return o(q,{name:e.icon,class:u("icon"),classPrefix:e.iconPrefix},null)},r=()=>{let t;if(e.loading?t=e.loadingText:t=n.default?n.default():e.text,t)return o("span",{class:u("text")},[t])},d=()=>{const{color:t,plain:f}=e;if(t){const s={color:f?t:"white"};return f||(s.background=t),t.includes("gradient")?s.border=0:s.borderColor=t,s}},c=t=>{e.loading?L(t):e.disabled||(a("click",t),l())};return()=>{const{tag:t,type:f,size:s,block:k,round:P,plain:w,square:T,loading:A,disabled:y,hairline:b,nativeType:R,iconPosition:v}=e,_=[u([f,s,{plain:w,block:k,round:P,square:T,loading:A,disabled:y,hairline:b}]),{[E]:b}];return o(t,{type:R,class:_,style:d(),disabled:y,onClick:c},{default:()=>[o("div",{class:u("content")},[v==="left"&&i(),r(),v==="right"&&i()])]})}}});const Y=z(G);let H=0;function Z(){const e=O(),{name:a="unknown"}=(e==null?void 0:e.type)||{};return`${a}-${++H}`}const[h,J]=x("space"),K={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function $(e=[]){const a=[];return e.forEach(n=>{Array.isArray(n)?a.push(...n):n.type===S?a.push(...$(n.children)):a.push(n)}),a.filter(n=>{var l;return!(n&&(n.type===F||n.type===S&&((l=n.children)==null?void 0:l.length)===0||n.type===Q&&n.children.trim()===""))})}var W=B({name:h,props:K,setup(e,{slots:a}){const n=U(()=>{var i;return(i=e.align)!=null?i:e.direction==="horizontal"?"center":""}),l=i=>typeof i=="number"?i+"px":i,m=i=>{const r={},d=`${l(Array.isArray(e.size)?e.size[0]:e.size)}`,c=`${l(Array.isArray(e.size)?e.size[1]:e.size)}`;return i?e.wrap?{marginBottom:c}:{}:(e.direction==="horizontal"&&(r.marginRight=d),(e.direction==="vertical"||e.wrap)&&(r.marginBottom=c),r)};return()=>{var i;const r=$((i=a.default)==null?void 0:i.call(a));return o("div",{class:[J({[e.direction]:e.direction,[`align-${n.value}`]:n.value,wrap:e.wrap,fill:e.fill})]},[r.map((d,c)=>o("div",{key:`item-${c}`,class:`${h}-item`,style:m(c===r.length-1)},[d]))])}}});const p=z(W);export{Y as B,p as S,Z as u};
