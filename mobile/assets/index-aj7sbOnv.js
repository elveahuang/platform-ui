import{e as l,d as i,b as a,g as m,n as r,x as d,t as w,a5 as v,m as g,a6 as u,ai as $,F as y}from"./index-ETH6JYW0.js";const[A,P]=l("skeleton-title"),p={round:Boolean,titleWidth:r};var T=i({name:A,props:p,setup(t){return()=>a("h3",{class:P([{round:t.round}]),style:{width:m(t.titleWidth)}},null)}});const b=d(T);var z=b;const[B,D]=l("skeleton-avatar"),F={avatarSize:r,avatarShape:v("round")};var N=i({name:B,props:F,setup(t){return()=>a("div",{class:D([t.avatarShape]),style:w(t.avatarSize)},null)}});const R=d(N);var I=R;const s="100%",L={round:Boolean,rowWidth:{type:r,default:s}},[U,C]=l("skeleton-paragraph");var E=i({name:U,props:L,setup(t){return()=>a("div",{class:C([{round:t.round}]),style:{width:t.rowWidth}},null)}});const H=d(E);var O=H;const[x,c]=l("skeleton"),V="60%",j={row:g(0),round:Boolean,title:Boolean,titleWidth:r,avatar:Boolean,avatarSize:r,avatarShape:v("round"),loading:u,animate:u,rowWidth:{type:[Number,String,Array],default:s}};var q=i({name:x,inheritAttrs:!1,props:j,setup(t,{slots:o,attrs:h}){const f=()=>{if(t.avatar)return a(I,{avatarShape:t.avatarShape,avatarSize:t.avatarSize},null)},S=()=>{if(t.title)return a(z,{round:t.round,titleWidth:t.titleWidth},null)},k=n=>{const{rowWidth:e}=t;return e===s&&n===+t.row-1?V:Array.isArray(e)?e[n]:e},W=()=>Array(+t.row).fill("").map((n,e)=>a(O,{key:e,round:t.round,rowWidth:m(k(e))},null)),_=()=>o.template?o.template():a(y,null,[f(),a("div",{class:c("content")},[S(),W()])]);return()=>{var n;return t.loading?a("div",$({class:c({animate:t.animate,round:t.round})},h),[_()]):(n=o.default)==null?void 0:n.call(o)}}});const J=d(q);export{J as S};