import{c as o,d as a,r,T as e,B as l,U as s,V as i,X as n,Y as t,Z as d,L as c,_ as u,f as v,n as g,t as f,$ as h,a0 as m,a1 as p,a2 as b,Q as w,w as y}from"./index-cb371d87.js";const[z,L]=o("image");const S=y(a({name:z,props:{src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:g,height:g,radius:g,lazyLoad:Boolean,iconSize:g,showError:f,errorIcon:h("photo-fail"),iconPrefix:String,showLoading:f,loadingIcon:h("photo")},emits:["load","error"],setup(o,{emit:a,slots:g}){const f=r(!1),h=r(!0),y=r(),{$Lazyload:z}=e().proxy,S=l((()=>{const a={width:s(o.width),height:s(o.height)};return i(o.radius)&&(a.overflow="hidden",a.borderRadius=s(o.radius)),a}));n((()=>o.src),(()=>{f.value=!1,h.value=!0}));const x=o=>{h.value&&(h.value=!1,a("load",o))},$=()=>{const o=new Event("load");Object.defineProperty(o,"target",{value:y.value,enumerable:!0}),x(o)},I=o=>{f.value=!0,h.value=!1,a("error",o)},P=(a,r,e)=>e?e():v(w,{name:a,size:o.iconSize,class:r,classPrefix:o.iconPrefix},null),j=()=>{if(f.value||!o.src)return;const a={alt:o.alt,class:L("img"),style:{objectFit:o.fit,objectPosition:o.position}};return o.lazyLoad?m(v("img",b({ref:y},a),null),[[p("lazy"),o.src]]):v("img",b({ref:y,src:o.src,onLoad:x,onError:I},a),null)},B=({el:o})=>{const a=()=>{o===y.value&&h.value&&$()};y.value?a():u(a)},E=({el:o})=>{o!==y.value||f.value||I()};return z&&t&&(z.$on("loaded",B),z.$on("error",E),d((()=>{z.$off("loaded",B),z.$off("error",E)}))),c((()=>{u((()=>{var o;(null==(o=y.value)?void 0:o.complete)&&$()}))})),()=>{var a;return v("div",{class:L({round:o.round,block:o.block}),style:S.value},[j(),h.value&&o.showLoading?v("div",{class:L("loading")},[P(o.loadingIcon,L("loading-icon"),g.loading)]):f.value&&o.showError?v("div",{class:L("error")},[P(o.errorIcon,L("error-icon"),g.error)]):void 0,null==(a=g.default)?void 0:a.call(g)])}}})),x="/platform-ui-vue/mobile/assets/logo-bc5de347.png";export{S as I,x as l};
