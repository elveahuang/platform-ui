import{e as B,d as $,r as u,ac as j,f as D,g as f,ao as _,am as C,bn as N,bh as R,o as U,an as I,b as n,n as d,a3 as P,a2 as z,bk as F,bo as M,as as S,X as O,x as T}from"./index-q8XU2Mr1.js";const[V,t]=B("image"),X={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:P,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:P,loadingIcon:z("photo")};var q=$({name:V,props:X,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,k=D(()=>{const e={width:f(a.width),height:f(a.height)};return _(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});C(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},m=e=>{i.value=!0,o.value=!1,v("error",e)},b=(e,c,L)=>L?L():n(O,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),x=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[b(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[b(a.errorIcon,t("error-icon"),s.error)])},E=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?F(n("img",S({ref:r},e),null),[[M("lazy"),a.src]]):n("img",S({ref:r,src:a.src,onLoad:g,onError:m},e),null)},w=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():I(c)},y=({el:e})=>{e===r.value&&!i.value&&m()};return l&&N&&(l.$on("loaded",w),l.$on("error",y),R(()=>{l.$off("loaded",w),l.$off("error",y)})),U(()=>{I(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:k.value},[E(),x(),(e=s.default)==null?void 0:e.call(s)])}}});const G=T(q);export{G as I};
