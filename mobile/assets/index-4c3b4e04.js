import{e as B,d as $,r as u,aC as j,f as C,g as f,a7 as D,a4 as R,bg as _,aM as M,o as N,ah as P,b as n,n as d,L as I,ae as z,aP as U,bh as F,aj as x,R as O,x as T}from"./index-0f416af7.js";const[V,t]=B("image"),q={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:I,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:I,loadingIcon:z("photo")};var A=$({name:V,props:q,emits:["load","error"],setup(a,{emit:g,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,S=C(()=>{const e={width:f(a.width),height:f(a.height)};return D(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});R(()=>a.src,()=>{i.value=!1,o.value=!0});const v=e=>{o.value&&(o.value=!1,g("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),v(e)},m=e=>{i.value=!0,o.value=!1,g("error",e)},L=(e,c,b)=>b?b():n(O,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),E=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[L(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[L(a.errorIcon,t("error-icon"),s.error)])},k=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?U(n("img",x({ref:r},e),null),[[F("lazy"),a.src]]):n("img",x({ref:r,src:a.src,onLoad:v,onError:m},e),null)},w=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():P(c)},y=({el:e})=>{e===r.value&&!i.value&&m()};return l&&_&&(l.$on("loaded",w),l.$on("error",y),M(()=>{l.$off("loaded",w),l.$off("error",y)})),N(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:S.value},[k(),E(),(e=s.default)==null?void 0:e.call(s)])}}});const H=T(A);export{H as I};
