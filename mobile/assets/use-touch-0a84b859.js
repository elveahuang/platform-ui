import{T as h}from"./constant-72a8536f.js";import{r as e}from"./index-5a84dfa4.js";function X(t,a){return t>a?"horizontal":a>t?"vertical":""}function C(){const t=e(0),a=e(0),s=e(0),c=e(0),u=e(0),l=e(0),o=e(""),n=e(!0),T=()=>o.value==="vertical",m=()=>o.value==="horizontal",i=()=>{s.value=0,c.value=0,u.value=0,l.value=0,o.value="",n.value=!0};return{move:v=>{const r=v.touches[0];s.value=(r.clientX<0?0:r.clientX)-t.value,c.value=r.clientY-a.value,u.value=Math.abs(s.value),l.value=Math.abs(c.value);const f=10;(!o.value||u.value<f&&l.value<f)&&(o.value=X(u.value,l.value)),n.value&&(u.value>h||l.value>h)&&(n.value=!1)},start:v=>{i(),t.value=v.touches[0].clientX,a.value=v.touches[0].clientY},reset:i,startX:t,startY:a,deltaX:s,deltaY:c,offsetX:u,offsetY:l,direction:o,isVertical:T,isHorizontal:m,isTap:n}}export{C as u};
