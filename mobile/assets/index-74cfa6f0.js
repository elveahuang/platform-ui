import{e as y,ao as L,ap as D,d as I,aq as q,b as n,a5 as B,n as o,a6 as V,bg as u,aI as s,R as f,x as _}from"./index-b8efec62.js";const[R,i]=y("cell"),z={tag:B("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:V,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},A=L({},z,D);var N=I({name:R,props:A,setup(e,{slots:a}){const v=q(),g=()=>{if(a.label||s(e.label))return n("div",{class:[i("label"),e.labelClass]},[a.label?a.label():e.label])},h=()=>{var l;if(a.title||s(e.title)){const t=(l=a.title)==null?void 0:l.call(a);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[i("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},m=()=>{const l=a.value||a.default;if(l||s(e.value))return n("div",{class:[i("value"),e.valueClass]},[l?l():n("span",null,[e.value])])},w=()=>{if(a.icon)return a.icon();if(e.icon)return n(f,{name:e.icon,class:i("left-icon"),classPrefix:e.iconPrefix},null)},C=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(f,{name:l,class:i("right-icon")},null)}};return()=>{var l;const{tag:t,size:r,center:P,border:S,isLink:k,required:x}=e,c=(l=e.clickable)!=null?l:k,d={center:P,required:!!x,clickable:c,borderless:!S};return r&&(d[r]=!!r),n(t,{class:i(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var b;return[w(),h(),m(),C(),(b=a.extra)==null?void 0:b.call(a)]}})}}});const $=_(N);export{$ as C,z as c};