import{c as g,d as f,h as y,p as s,O as c,aX as h,aY as v,G as z}from"./index-ceb4400b.js";const[u,A]=g("space"),w={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function m(e=[]){const n=[];return e.forEach(t=>{Array.isArray(t)?n.push(...t):t.type===c?n.push(...m(t.children)):n.push(t)}),n.filter(t=>{var i;return!(t&&(t.type===h||t.type===c&&((i=t.children)==null?void 0:i.length)===0||t.type===v&&t.children.trim()===""))})}var S=f({name:u,props:w,setup(e,{slots:n}){const t=y(()=>{var a;return(a=e.align)!=null?a:e.direction==="horizontal"?"center":""}),i=a=>typeof a=="number"?a+"px":a,d=a=>{const r={},o=`${i(Array.isArray(e.size)?e.size[0]:e.size)}`,l=`${i(Array.isArray(e.size)?e.size[1]:e.size)}`;return a?e.wrap?{marginBottom:l}:{}:(e.direction==="horizontal"&&(r.marginRight=o),(e.direction==="vertical"||e.wrap)&&(r.marginBottom=l),r)};return()=>{var a;const r=m((a=n.default)==null?void 0:a.call(n));return s("div",{class:[A({[e.direction]:e.direction,[`align-${t.value}`]:t.value,wrap:e.wrap,fill:e.fill})]},[r.map((o,l)=>s("div",{key:`item-${l}`,class:`${u}-item`,style:d(l===r.length-1)},[o]))])}}});const B=z(S);export{B as S};
