import{aw as e,aO as t,aP as a,T as l,r as i,aQ as n,Y as o,aR as r,Z as s,as as u,c,d,aS as v,J as f,B as p,am as h,ab as g,aT as b,X as m,ai as w,aU as x,_ as y,au as C,aV as k,aW as I,f as S,n as $,$ as B,al as T,w as z,af as R,u as M,e as O,aX as A,L as W,aY as X,ar as L,t as Z,av as Y,p as D,ac as E,ad as H,U as N,V as P,aZ as V,az as j,a_ as F,a$ as J,b0 as U,b1 as _,ag as Q,aJ as q,aD as G,aE as K,a0 as ee,at as te,a2 as ae,ak as le}from"./index-c0bed8fe.js";let ie=0;function ne(){const e=l(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return`${t}-${++ie}`}function oe(e,t){if(!o||!window.IntersectionObserver)return;const a=new IntersectionObserver((e=>{t(e[0].intersectionRatio>0)}),{root:document.body}),l=()=>{e.value&&a.unobserve(e.value)};r(l),s(l),u((()=>{e.value&&a.observe(e.value)}))}const[re,se]=c("sticky");const ue=z(d({name:re,props:{zIndex:$,position:B("top"),container:Object,offsetTop:T(0),offsetBottom:T(0)},emits:["scroll","change"],setup(e,{emit:a,slots:l}){const n=i(),o=v(n),r=f({fixed:!1,width:0,height:0,transform:0}),s=i(!1),u=p((()=>h("top"===e.position?e.offsetTop:e.offsetBottom))),c=p((()=>{if(s.value)return;const{fixed:e,height:t,width:a}=r;return e?{width:`${a}px`,height:`${t}px`}:void 0})),d=p((()=>{if(!r.fixed||s.value)return;const t=g(b(e.zIndex),{width:`${r.width}px`,height:`${r.height}px`,[e.position]:`${u.value}px`});return r.transform&&(t.transform=`translate3d(0, ${r.transform}px, 0)`),t})),$=()=>{if(!n.value||x(n))return;const{container:l,position:i}=e,o=C(n),s=t(window);if(r.width=o.width,r.height=o.height,"top"===i)if(l){const e=C(l),t=e.bottom-u.value-r.height;r.fixed=u.value>o.top&&e.bottom>0,r.transform=t<0?t:0}else r.fixed=u.value>o.top;else{const{clientHeight:e}=document.documentElement;if(l){const t=C(l),a=e-t.top-u.value-r.height;r.fixed=e-u.value<o.bottom&&e>t.top,r.transform=a<0?-a:0}else r.fixed=e-u.value<o.bottom}(e=>{a("scroll",{scrollTop:e,isFixed:r.fixed})})(s)};return m((()=>r.fixed),(e=>a("change",e))),w("scroll",$,{target:o,passive:!0}),oe(n,$),m([k,I],(()=>{n.value&&!x(n)&&r.fixed&&(s.value=!0,y((()=>{const e=C(n);r.width=e.width,r.height=e.height,s.value=!1})))})),()=>{var e;return S("div",{ref:n,style:c.value},[S("div",{class:se({fixed:r.fixed&&!s.value}),style:d.value},[null==(e=l.default)?void 0:e.call(l)])])}}})),[ce,de]=c("swipe"),ve={loop:Z,width:$,height:$,vertical:Boolean,autoplay:T(0),duration:T(500),touchable:Z,lazyRender:Boolean,initialSwipe:T(0),indicatorColor:String,showIndicators:Z,stopPropagation:Z},fe=Symbol(ce);const pe=z(d({name:ce,props:ve,emits:["change","dragStart","dragEnd"],setup(e,{emit:t,slots:a}){const l=i(),n=i(),o=f({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let u=!1;const c=R(),{children:d,linkChildren:v}=M(fe),h=p((()=>d.length)),g=p((()=>o[e.vertical?"height":"width"])),b=p((()=>e.vertical?c.deltaY.value:c.deltaX.value)),C=p((()=>{if(o.rect){return(e.vertical?o.rect.height:o.rect.width)-g.value*h.value}return 0})),$=p((()=>g.value?Math.ceil(Math.abs(C.value)/g.value):h.value)),B=p((()=>h.value*g.value)),T=p((()=>(o.active+h.value)%h.value)),z=p((()=>{const t=e.vertical?"vertical":"horizontal";return c.direction.value===t})),Z=p((()=>{const t={transitionDuration:`${o.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${o.offset}px)`};if(g.value){const a=e.vertical?"height":"width",l=e.vertical?"width":"height";t[a]=`${B.value}px`,t[l]=e[l]?`${e[l]}px`:""}return t})),H=(t,a=0)=>{let l=t*g.value;e.loop||(l=Math.min(l,-C.value));let i=a-l;return e.loop||(i=E(i,C.value,0)),i},N=({pace:a=0,offset:l=0,emitChange:i})=>{if(h.value<=1)return;const{active:n}=o,r=(t=>{const{active:a}=o;return t?e.loop?E(a+t,-1,h.value):E(a+t,0,$.value):a})(a),s=H(r,l);if(e.loop){if(d[0]&&s!==C.value){const e=s<C.value;d[0].setOffset(e?B.value:0)}if(d[h.value-1]&&0!==s){const e=s>0;d[h.value-1].setOffset(e?-B.value:0)}}o.active=r,o.offset=s,i&&r!==n&&t("change",T.value)},P=()=>{o.swiping=!0,o.active<=-1?N({pace:h.value}):o.active>=h.value&&N({pace:-h.value})},V=()=>{P(),c.reset(),Y((()=>{o.swiping=!1,N({pace:1,emitChange:!0})}))};let j;const F=()=>clearTimeout(j),J=()=>{F(),+e.autoplay>0&&h.value>1&&(j=setTimeout((()=>{V(),J()}),+e.autoplay))},U=(t=+e.initialSwipe)=>{if(!l.value)return;const a=()=>{var a,i;if(!x(l)){const t={width:l.value.offsetWidth,height:l.value.offsetHeight};o.rect=t,o.width=+(null!=(a=e.width)?a:t.width),o.height=+(null!=(i=e.height)?i:t.height)}h.value&&-1===(t=Math.min(h.value-1,t))&&(t=h.value-1),o.active=t,o.swiping=!0,o.offset=H(t),d.forEach((e=>{e.setOffset(0)})),J()};x(l)?y().then(a):a()},_=()=>U(o.active);let Q;const q=t=>{!e.touchable||t.touches.length>1||(c.start(t),u=!1,Q=Date.now(),F(),P())},G=()=>{if(!e.touchable||!o.swiping)return;const a=Date.now()-Q,l=b.value/a;if((Math.abs(l)>.25||Math.abs(b.value)>g.value/2)&&z.value){const t=e.vertical?c.offsetY.value:c.offsetX.value;let a=0;a=e.loop?t>0?b.value>0?-1:1:0:-Math[b.value>0?"ceil":"floor"](b.value/g.value),N({pace:a,emitChange:!0})}else b.value&&N({pace:0});u=!1,o.swiping=!1,t("dragEnd",{index:T.value}),J()},K=(t,a)=>{const l=a===T.value,i=l?{backgroundColor:e.indicatorColor}:void 0;return S("i",{style:i,class:de("indicator",{active:l})},null)};return O({prev:()=>{P(),c.reset(),Y((()=>{o.swiping=!1,N({pace:-1,emitChange:!0})}))},next:V,state:o,resize:_,swipeTo:(t,a={})=>{P(),c.reset(),Y((()=>{let l;l=e.loop&&t===h.value?0===o.active?0:t:t%h.value,a.immediate?Y((()=>{o.swiping=!1})):o.swiping=!1,N({pace:l-o.active,emitChange:!0})}))}}),v({size:g,props:e,count:h,activeIndicator:T}),m((()=>e.initialSwipe),(e=>U(+e))),m(h,(()=>U(o.active))),m((()=>e.autoplay),J),m([k,I,()=>e.width,()=>e.height],_),m(A(),(e=>{"visible"===e?J():F()})),W(U),X((()=>U(o.active))),L((()=>U(o.active))),r(F),s(F),w("touchmove",(a=>{if(e.touchable&&o.swiping&&(c.move(a),z.value)){!e.loop&&(0===o.active&&b.value>0||o.active===h.value-1&&b.value<0)||(D(a,e.stopPropagation),N({offset:b.value}),u||(t("dragStart",{index:T.value}),u=!0))}}),{target:n}),()=>{var t;return S("div",{ref:l,class:de()},[S("div",{ref:n,style:Z.value,class:de("track",{vertical:e.vertical}),onTouchstartPassive:q,onTouchend:G,onTouchcancel:G},[null==(t=a.default)?void 0:t.call(a)]),a.indicator?a.indicator({active:T.value,total:h.value}):e.showIndicators&&h.value>1?S("div",{class:de("indicators",{vertical:e.vertical})},[Array(h.value).fill("").map(K)]):void 0])}}})),[he,ge]=c("tabs");var be=d({name:he,props:{count:H(Number),inited:Boolean,animated:Boolean,duration:H($),swipeable:Boolean,lazyRender:Boolean,currentIndex:H(Number)},emits:["change"],setup(e,{emit:t,slots:a}){const l=i(),n=e=>t("change",e),o=()=>{var t;const i=null==(t=a.default)?void 0:t.call(a);return e.animated||e.swipeable?S(pe,{ref:l,loop:!1,class:ge("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},{default:()=>[i]}):i},r=t=>{const a=l.value;a&&a.state.active!==t&&a.swipeTo(t,{immediate:!e.inited})};return m((()=>e.currentIndex),r),W((()=>{r(e.currentIndex)})),O({swipeRef:l}),()=>S("div",{class:ge("content",{animated:e.animated||e.swipeable})},[o()])}});const[me,we]=c("tabs"),xe={type:B("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:T(0),duration:T(.3),animated:Boolean,ellipsis:Z,swipeable:Boolean,scrollspy:Boolean,offsetTop:T(0),background:String,lazyRender:Z,lineWidth:$,lineHeight:$,beforeChange:Function,swipeThreshold:T(5),titleActiveColor:String,titleInactiveColor:String},ye=Symbol(me);var Ce=d({name:me,props:xe,emits:["change","scroll","rendered","clickTab","update:active"],setup(l,{emit:o,slots:r}){let s,c,d;const g=i(),b=i(),I=i(),$=i(),B=ne(),T=v(g),[z,R]=function(){const e=i([]),t=[];return n((()=>{e.value=[]})),[e,a=>(t[a]||(t[a]=t=>{e.value[a]=t}),t[a])]}(),{children:A,linkChildren:W}=M(ye),Z=f({inited:!1,position:"",lineStyle:{},currentIndex:-1}),Y=p((()=>A.length>+l.swipeThreshold||!l.ellipsis||l.shrink)),D=p((()=>({borderColor:l.color,background:l.background}))),E=(e,t)=>{var a;return null!=(a=e.name)?a:t},H=p((()=>{const e=A[Z.currentIndex];if(e)return E(e,Z.currentIndex)})),_=p((()=>h(l.offsetTop))),Q=p((()=>l.sticky?_.value+s:0)),q=t=>{const a=b.value,i=z.value;if(!(Y.value&&a&&i&&i[Z.currentIndex]))return;const n=i[Z.currentIndex].$el;!function(t,a,l){let i=0;const n=t.scrollLeft,o=0===l?1:Math.round(1e3*l/16);!function l(){t.scrollLeft+=(a-n)/o,++i<o&&e(l)}()}(a,n.offsetLeft-(a.offsetWidth-n.offsetWidth)/2,t?0:+l.duration)},G=()=>{const e=Z.inited;y((()=>{const t=z.value;if(!t||!t[Z.currentIndex]||"line"!==l.type||x(g.value))return;const a=t[Z.currentIndex].$el,{lineWidth:i,lineHeight:n}=l,o=a.offsetLeft+a.offsetWidth/2,r={width:N(i),backgroundColor:l.color,transform:`translateX(${o}px) translateX(-50%)`};if(e&&(r.transitionDuration=`${l.duration}s`),P(n)){const e=N(n);r.height=e,r.borderRadius=e}Z.lineStyle=r}))},K=(e,t)=>{const a=(e=>{const t=e<Z.currentIndex?-1:1;for(;e>=0&&e<A.length;){if(!A[e].disabled)return e;e+=t}})(e);if(!P(a))return;const i=A[a],n=E(i,a),r=null!==Z.currentIndex;Z.currentIndex!==a&&(Z.currentIndex=a,t||q(),G()),n!==l.active&&(o("update:active",n),r&&o("change",n,i.title)),d&&!l.scrollspy&&j(Math.ceil(F(g.value)-_.value))},ee=(e,t)=>{const a=A.find(((t,a)=>E(t,a)===e)),l=a?A.indexOf(a):0;K(l,t)},te=(i=!1)=>{if(l.scrollspy){const n=A[Z.currentIndex].$el;if(n&&T.value){const o=F(n,T.value)-Q.value;c=!0,function(l,i,n,o){let r=t(l);const s=r<i,u=0===n?1:Math.round(1e3*n/16),c=(i-r)/u;!function t(){r+=c,(s&&r>i||!s&&r<i)&&(r=i),a(l,r),s&&r<i||!s&&r>i?e(t):o&&e(o)}()}(T.value,o,i?0:+l.duration,(()=>{c=!1}))}}},ae=(e,t,a)=>{const{title:i,disabled:n}=A[t],r=E(A[t],t);n||(J(l.beforeChange,{args:[r],done:()=>{K(t),te()}}),U(e)),o("clickTab",{name:r,title:i,event:a,disabled:n})},le=e=>{d=e.isFixed,o("scroll",e)},ie=()=>{if("line"===l.type&&A.length)return S("div",{class:we("line"),style:Z.lineStyle},null)},re=()=>{var e,t,a;const{type:i,border:n,sticky:o}=l,s=[S("div",{ref:o?void 0:I,class:[we("wrap"),{[V]:"line"===i&&n}]},[S("div",{ref:b,role:"tablist",class:we("nav",[i,{shrink:l.shrink,complete:Y.value}]),style:D.value,"aria-orientation":"horizontal"},[null==(e=r["nav-left"])?void 0:e.call(r),A.map((e=>e.renderTitle(ae))),ie(),null==(t=r["nav-right"])?void 0:t.call(r)])]),null==(a=r["nav-bottom"])?void 0:a.call(r)];return o?S("div",{ref:I},[s]):s},se=()=>{G(),y((()=>{var e,t;q(!0),null==(t=null==(e=$.value)?void 0:e.swipeRef.value)||t.resize()}))};m((()=>[l.color,l.duration,l.lineWidth,l.lineHeight]),G),m(k,se),m((()=>l.active),(e=>{e!==H.value&&ee(e)})),m((()=>A.length),(()=>{Z.inited&&(ee(l.active),G(),y((()=>{q(!0)})))}));return O({resize:se,scrollTo:e=>{y((()=>{ee(e),te(!0)}))}}),X(G),L(G),u((()=>{ee(l.active,!0),y((()=>{Z.inited=!0,I.value&&(s=C(I.value).height),q(!0)}))})),oe(g,G),w("scroll",(()=>{if(l.scrollspy&&!c){const e=(()=>{for(let e=0;e<A.length;e++){const{top:t}=C(A[e].$el);if(t>Q.value)return 0===e?0:e-1}return A.length-1})();K(e)}}),{target:T,passive:!0}),W({id:B,props:l,setLine:G,scrollable:Y,onRendered:(e,t)=>o("rendered",e,t),currentName:H,setTitleRefs:R,scrollIntoView:q}),()=>S("div",{ref:g,class:we([l.type])},[l.sticky?S(ue,{container:g.value,offsetTop:_.value,onScroll:le},{default:()=>[re()]}):re(),S(be,{ref:$,count:A.length,inited:Z.inited,animated:l.animated,duration:l.duration,swipeable:l.swipeable,lazyRender:l.lazyRender,currentIndex:Z.currentIndex,onChange:K},{default:()=>{var e;return[null==(e=r.default)?void 0:e.call(r)]}})])}});const ke=Symbol(),[Ie,Se]=c("tab"),$e=d({name:Ie,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:$,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:Z},setup(e,{slots:t}){const a=p((()=>{const t={},{type:a,color:l,disabled:i,isActive:n,activeColor:o,inactiveColor:r}=e;l&&"card"===a&&(t.borderColor=l,i||(n?t.backgroundColor=l:t.color=l));const s=n?o:r;return s&&(t.color=s),t})),l=()=>{const a=S("span",{class:Se("text",{ellipsis:!e.scrollable})},[t.title?t.title():e.title]);return e.dot||P(e.badge)&&""!==e.badge?S(_,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[a]}):a};return()=>S("div",{id:e.id,role:"tab",class:[Se([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:a.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[l()])}}),[Be,Te]=c("swipe-item");const ze=z(d({name:Be,setup(e,{slots:t}){let a;const l=f({offset:0,inited:!1,mounted:!1}),{parent:i,index:n}=Q(fe);if(!i)return;const o=p((()=>{const e={},{vertical:t}=i.props;return i.size.value&&(e[t?"height":"width"]=`${i.size.value}px`),l.offset&&(e.transform=`translate${t?"Y":"X"}(${l.offset}px)`),e})),r=p((()=>{const{loop:e,lazyRender:t}=i.props;if(!t||a)return!0;if(!l.mounted)return!1;const o=i.activeIndicator.value,r=i.count.value-1,s=0===o&&e?r:o-1,u=o===r&&e?0:o+1;return a=n.value===o||n.value===s||n.value===u,a}));return W((()=>{y((()=>{l.mounted=!0}))})),O({setOffset:e=>{l.offset=e}}),()=>{var e;return S("div",{class:Te(),style:o.value},[r.value?null==(e=t.default)?void 0:e.call(t):null])}}})),[Re,Me]=c("tab");const Oe=z(d({name:Re,props:g({},q,{dot:Boolean,name:$,badge:$,title:String,disabled:Boolean,titleClass:G,titleStyle:[String,Object],showZeroBadge:Z}),setup(e,{slots:t}){const a=ne(),n=i(!1),o=l(),{parent:r,index:s}=Q(ye);if(!r)return;const u=()=>{var t;return null!=(t=e.name)?t:s.value},c=p((()=>{const t=u()===r.currentName.value;return t&&!n.value&&(n.value=!0,r.props.lazyRender&&y((()=>{r.onRendered(u(),e.title)}))),t})),d=i(!c.value);return m(c,(e=>{e?d.value=!1:Y((()=>{d.value=!0}))})),m((()=>e.title),(()=>{r.setLine(),r.scrollIntoView()})),K(ke,c),O({id:a,renderTitle:l=>S($e,ae({key:a,id:`${r.id}-${s.value}`,ref:r.setTitleRefs(s.value),style:e.titleStyle,class:e.titleClass,isActive:c.value,controls:a,scrollable:r.scrollable.value,activeColor:r.props.titleActiveColor,inactiveColor:r.props.titleInactiveColor,onClick:e=>l(o.proxy,s.value,e)},le(r.props,["type","color","shrink"]),le(e,["dot","badge","title","disabled","showZeroBadge"])),{title:t.title})}),()=>{var e;const l=`${r.id}-${s.value}`,{animated:i,swipeable:o,scrollspy:u,lazyRender:v}=r.props;if(!t.default&&!i)return;const f=u||c.value;if(i||o)return S(ze,{id:a,role:"tabpanel",class:Me("panel-wrapper",{inactive:d.value}),tabindex:c.value?0:-1,"aria-hidden":!c.value,"aria-labelledby":l},{default:()=>{var e;return[S("div",{class:Me("panel")},[null==(e=t.default)?void 0:e.call(t)])]}});const p=n.value||u||!v?null==(e=t.default)?void 0:e.call(t):null;return ee(S("div",{id:a,role:"tabpanel",class:Me("panel"),tabindex:f?0:-1,"aria-labelledby":l},[p]),[[te,f]])}}})),Ae=z(Ce);export{ue as S,Oe as T,Ae as a,ne as u};
