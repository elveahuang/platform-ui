System.register(["./index-legacy-1b70f568.js"],(function(e,n){"use strict";var i,a,t,l,r,o,s,c,d,p,u,g,f,y,v,m,h,x=document.createElement("style");return x.textContent=".van-space{display:inline-flex}.van-space--horizontal .van-space-item{display:flex;align-items:center}.van-space--vertical{flex-direction:column}.van-space--align-baseline{align-items:baseline}.van-space--align-start{align-items:flex-start}.van-space--align-end{align-items:flex-end}.van-space--align-center{align-items:center}.van-space--wrap{flex-wrap:wrap}.van-space--fill{display:flex}\n",document.head.appendChild(x),{setters:[e=>{i=e.c,a=e.aa,t=e.aI,l=e._,r=e.n,o=e.d,s=e.aJ,c=e.aK,d=e.f,p=e.O,u=e.p,g=e.an,f=e.w,y=e.B,v=e.k,m=e.aL,h=e.aM}],execute:function(){const[n,x]=i("button"),b=a({},t,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:r,loadingText:String,loadingType:String,iconPosition:l("left")});var z=o({name:n,props:b,emits:["click"],setup(e,{emit:n,slots:i}){const a=s(),t=()=>e.loading?i.loading?i.loading():d(g,{size:e.loadingSize,type:e.loadingType,class:x("loading")},null):i.icon?d("div",{class:x("icon")},[i.icon()]):e.icon?d(p,{name:e.icon,class:x("icon"),classPrefix:e.iconPrefix},null):void 0,l=()=>{let n;if(n=e.loading?e.loadingText:i.default?i.default():e.text,n)return d("span",{class:x("text")},[n])},r=()=>{const{color:n,plain:i}=e;if(n){const e={color:i?n:"white"};return i||(e.background=n),n.includes("gradient")?e.border=0:e.borderColor=n,e}},o=i=>{e.loading?u(i):e.disabled||(n("click",i),a())};return()=>{const{tag:n,type:i,size:a,block:s,round:p,plain:u,square:g,loading:f,disabled:y,hairline:v,nativeType:m,iconPosition:h}=e,b=[x([i,a,{plain:u,block:s,round:p,square:g,loading:f,disabled:y,hairline:v}]),{[c]:v}];return d(n,{type:m,class:b,style:r(),disabled:y,onClick:o},{default:()=>[d("div",{class:x("content")},["left"===h&&t(),l(),"right"===h&&t()])]})}}});e("B",f(z));const[B,S]=i("space"),w={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function k(e=[]){const n=[];return e.forEach((e=>{Array.isArray(e)?n.push(...e):e.type===v?n.push(...k(e.children)):n.push(e)})),n.filter((e=>{var n;return!(e&&(e.type===m||e.type===v&&0===(null==(n=e.children)?void 0:n.length)||e.type===h&&""===e.children.trim()))}))}var A=o({name:B,props:w,setup(e,{slots:n}){const i=y((()=>{var n;return null!=(n=e.align)?n:"horizontal"===e.direction?"center":""})),a=e=>"number"==typeof e?e+"px":e,t=n=>{const i={},t=`${a(Array.isArray(e.size)?e.size[0]:e.size)}`,l=`${a(Array.isArray(e.size)?e.size[1]:e.size)}`;return n?e.wrap?{marginBottom:l}:{}:("horizontal"===e.direction&&(i.marginRight=t),("vertical"===e.direction||e.wrap)&&(i.marginBottom=l),i)};return()=>{var a;const l=k(null==(a=n.default)?void 0:a.call(n));return d("div",{class:[S({[e.direction]:e.direction,[`align-${i.value}`]:i.value,wrap:e.wrap,fill:e.fill})]},[l.map(((e,n)=>d("div",{key:`item-${n}`,class:`${B}-item`,style:t(n===l.length-1)},[e])))])}}});e("S",f(A))}}}));
