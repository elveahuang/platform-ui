import{e as y,ap as L,aq as D,d as q,ar as B,b as n,a5 as I,n as o,a6 as V,bd as u,aJ as s,K as f,x as _}from"./index-r_gE4c3h.js";const[z,r]=y("cell"),A={tag:I("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:V,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},N=L({},A,D);var R=q({name:z,props:N,setup(e,{slots:a}){const v=B(),g=()=>{if(a.label||s(e.label))return n("div",{class:[r("label"),e.labelClass]},[a.label?a.label():e.label])},h=()=>{var l;if(a.title||s(e.title)){const t=(l=a.title)==null?void 0:l.call(a);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[r("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},m=()=>{const l=a.value||a.default;if(l||s(e.value))return n("div",{class:[r("value"),e.valueClass]},[l?l():n("span",null,[e.value])])},w=()=>{if(a.icon)return a.icon();if(e.icon)return n(f,{name:e.icon,class:r("left-icon"),classPrefix:e.iconPrefix},null)},C=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(f,{name:l,class:r("right-icon")},null)}};return()=>{var l;const{tag:t,size:i,center:P,border:S,isLink:k,required:x}=e,c=(l=e.clickable)!=null?l:k,d={center:P,required:!!x,clickable:c,borderless:!S};return i&&(d[i]=!!i),n(t,{class:r(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var b;return[w(),h(),m(),C(),(b=a.extra)==null?void 0:b.call(a)]}})}}});const K=_(R);export{K as C,A as c};