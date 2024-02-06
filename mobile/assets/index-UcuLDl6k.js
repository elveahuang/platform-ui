import{e as G,am as I,n as L,m as D,d as K,r as V,H as U,u as re,ak as ve,f as d,av as j,C as $,b4 as fe,bG as de,bH as he,o as J,b5 as ge,b6 as me,bI as we,F as be,i as ye,b as A,b8 as q,N as Q,bf as k,q as xe,v as R,x as Z,an as Se}from"./index-pyS-jaTs.js";const[ee,z]=G("swipe"),Te={loop:I,width:L,height:L,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:I,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:I,stopPropagation:I},te=Symbol(ee);var pe=K({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:y,slots:g}){const u=V(),h=V(),t=U({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:m,linkChildren:s}=ve(te),i=d(()=>m.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),b=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),M=d(()=>o.value?Math.ceil(Math.abs(b.value)/o.value):i.value),O=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},H=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-b.value));let f=l-n;return a.loop||(f=R(f,b.value,0)),f},w=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),P=H(c,l);if(a.loop){if(m[0]&&P!==b.value){const _=P<b.value;m[0].setOffset(_?O.value:0)}if(m[i.value-1]&&P!==0){const _=P>0;m[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=P,n&&c!==f&&y("change",S.value)},E=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{E(),r.reset(),k(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{E(),r.reset(),k(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let N;const p=()=>clearTimeout(N),C=()=>{p(),+a.autoplay>0&&i.value>1&&(N=setTimeout(()=>{Y(),C()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!q(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=H(e),m.forEach(c=>{c.setOffset(0)}),C()};q(u)?Q().then(l):l()},X=()=>T(t.active);let W;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,W=Date.now(),p(),E())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),w({offset:v.value}),x||(y("dragStart",{index:S.value}),x=!0))))},F=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-W,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});x=!1,t.swiping=!1,y("dragEnd",{index:S.value}),C()},se=(e,l={})=>{E(),r.reset(),k(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?k(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return A("i",{style:f,class:z("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return A("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return j({prev:ne,next:Y,state:t,resize:X,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),$(()=>a.initialSwipe,e=>T(+e)),$(i,()=>T(t.active)),$(()=>a.autoplay,C),$([fe,de,()=>a.width,()=>a.height],X),$(he(),e=>{e==="visible"?C():p()}),J(T),ge(()=>T(t.active)),me(()=>T(t.active)),we(p),be(p),ye("touchmove",oe,{target:h}),()=>{var e;return A("div",{ref:u,class:z()},[A("div",{ref:h,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:F,onTouchcancel:F},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=Z(pe),[Ce,Pe]=G("swipe-item");var $e=K({name:Ce,setup(a,{slots:y}){let g;const u=U({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,b=o===0&&s?v:o-1,M=o===v&&s?0:o+1;return g=t.value===o||t.value===b||t.value===M,g}),m=s=>{u.offset=s};return J(()=>{Q(()=>{u.mounted=!0})}),j({setOffset:m}),()=>{var s;return A("div",{class:Pe(),style:x.value},[r.value?(s=y.default)==null?void 0:s.call(y):null])}}});const Ie=Z($e);export{Ee as S,Ie as a};