import{aS as T,ax as $,ay as I,aB as B,S as O,a3 as _,U as C,T as p,d as H,k as w,W as N,f as z,C as v,a_ as E,ak as U,ah as V,G as g,Z as W,a0 as b,_ as Z,$ as u,as as j,at as A,h as y,a6 as D,a2 as F}from"./index-tXE1FYac.js";function G(o,f){if(!T||!window.IntersectionObserver)return;const r=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),s=()=>{o.value&&r.observe(o.value)},d=()=>{o.value&&r.unobserve(o.value)};$(d),I(d),B(s)}const[L,M]=O("sticky"),q={zIndex:_,position:C("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)};var J=H({name:L,props:q,emits:["scroll","change"],setup(o,{emit:f,slots:r}){const s=w(),d=N(s),e=z({fixed:!1,width:0,height:0,transform:0}),c=w(!1),i=v(()=>E(o.position==="top"?o.offsetTop:o.offsetBottom)),S=v(()=>{if(c.value)return;const{fixed:t,height:h,width:n}=e;if(t)return{width:`${n}px`,height:`${h}px`}}),k=v(()=>{if(!e.fixed||c.value)return;const t=U(V(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),P=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),m=()=>{if(!s.value||b(s))return;const{container:t,position:h}=o,n=u(s),R=D(window);if(e.width=n.width,e.height=n.height,h==="top")if(t){const a=u(t),l=a.bottom-i.value-e.height;e.fixed=i.value>n.top&&a.bottom>0,e.transform=l<0?l:0}else e.fixed=i.value>n.top;else{const{clientHeight:a}=document.documentElement;if(t){const l=u(t),x=a-l.top-i.value-e.height;e.fixed=a-i.value<n.bottom&&a>l.top,e.transform=x<0?-x:0}else e.fixed=a-i.value<n.bottom}P(R)};return g(()=>e.fixed,t=>f("change",t)),W("scroll",m,{target:d,passive:!0}),G(s,m),g([j,A],()=>{!s.value||b(s)||!e.fixed||(c.value=!0,Z(()=>{const t=u(s);e.width=t.width,e.height=t.height,c.value=!1}))}),()=>{var t;return y("div",{ref:s,style:S.value},[y("div",{class:M({fixed:e.fixed&&!c.value}),style:k.value},[(t=r.default)==null?void 0:t.call(r)])])}}});const Q=F(J);export{Q as S};