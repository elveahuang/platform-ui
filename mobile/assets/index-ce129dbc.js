import{b as B,d as $,r as u,aA as j,e as D,P as f,ag as R,w as _,aE as C,aG as G,g as N,n as P,k as n,y as d,t as I,l as z,b9 as U,ba as A,R as E,G as F,s as M}from"./index-8cf3448a.js";const[O,t]=B("image"),T={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:I,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:I,loadingIcon:z("photo")};var V=$({name:O,props:T,emits:["load","error"],setup(a,{emit:g,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,S=D(()=>{const e={width:f(a.width),height:f(a.height)};return R(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});_(()=>a.src,()=>{i.value=!1,o.value=!0});const v=e=>{o.value&&(o.value=!1,g("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),v(e)},m=e=>{i.value=!0,o.value=!1,g("error",e)},w=(e,c,b)=>b?b():n(F,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),k=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[w(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[w(a.errorIcon,t("error-icon"),s.error)])},x=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?U(n("img",E({ref:r},e),null),[[A("lazy"),a.src]]):n("img",E({ref:r,src:a.src,onLoad:v,onError:m},e),null)},y=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():P(c)},L=({el:e})=>{e===r.value&&!i.value&&m()};return l&&C&&(l.$on("loaded",y),l.$on("error",L),G(()=>{l.$off("loaded",y),l.$off("error",L)})),N(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:S.value},[x(),k(),(e=s.default)==null?void 0:e.call(s)])}}});const H=M(V);export{H as I};
