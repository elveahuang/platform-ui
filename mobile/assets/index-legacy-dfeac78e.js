System.register(["./index-legacy-c33c20bf.js"],(function(a,t){"use strict";var e,n,o,r,i,l,v,d,s,c,u,b,f,p,g,h,m,w,x,_,y,k,z,C,I,S,$,B,T,R,M,O,A,X,Z,j,L,W,Y,E,q,D,H,N,P,V,F,J,U,Q,G,K,aa,ta,ea,na,oa,ra,ia=document.createElement("style");return ia.textContent=':root{--van-sticky-z-index: 99}.van-sticky--fixed{position:fixed;z-index:var(--van-sticky-z-index)}:root{--van-swipe-indicator-size: 6px;--van-swipe-indicator-margin: var(--van-padding-sm);--van-swipe-indicator-active-opacity: 1;--van-swipe-indicator-inactive-opacity: .3;--van-swipe-indicator-active-background: var(--van-primary-color);--van-swipe-indicator-inactive-background: var(--van-border-color)}.van-swipe{position:relative;overflow:hidden;transform:translateZ(0);cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-swipe__track{display:flex;height:100%}.van-swipe__track--vertical{flex-direction:column}.van-swipe__indicators{position:absolute;bottom:var(--van-swipe-indicator-margin);left:50%;display:flex;transform:translate(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:var(--van-swipe-indicator-margin);flex-direction:column;transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:var(--van-swipe-indicator-size)}.van-swipe__indicator{width:var(--van-swipe-indicator-size);height:var(--van-swipe-indicator-size);background-color:var(--van-swipe-indicator-inactive-background);border-radius:100%;opacity:var(--van-swipe-indicator-inactive-opacity);transition:opacity var(--van-duration-fast),background-color var(--van-duration-fast)}.van-swipe__indicator:not(:last-child){margin-right:var(--van-swipe-indicator-size)}.van-swipe__indicator--active{background-color:var(--van-swipe-indicator-active-background);opacity:var(--van-swipe-indicator-active-opacity)}:root{--van-tab-text-color: var(--van-gray-7);--van-tab-active-text-color: var(--van-text-color);--van-tab-disabled-text-color: var(--van-text-color-3);--van-tab-font-size: var(--van-font-size-md);--van-tab-line-height: var(--van-line-height-md);--van-tabs-default-color: var(--van-primary-color);--van-tabs-line-height: 44px;--van-tabs-card-height: 30px;--van-tabs-nav-background: var(--van-background-2);--van-tabs-bottom-bar-width: 40px;--van-tabs-bottom-bar-height: 3px;--van-tabs-bottom-bar-color: var(--van-primary-color)}.van-tab{position:relative;display:flex;flex:1;align-items:center;justify-content:center;box-sizing:border-box;padding:0 var(--van-padding-base);color:var(--van-tab-text-color);font-size:var(--van-tab-font-size);line-height:var(--van-tab-line-height);cursor:pointer}.van-tab--active{color:var(--van-tab-active-text-color);font-weight:var(--van-font-bold)}.van-tab--disabled{color:var(--van-tab-disabled-text-color);cursor:not-allowed}.van-tab--grow{flex:1 0 auto;padding:0 var(--van-padding-sm)}.van-tab--shrink{flex:none;padding:0 var(--van-padding-xs)}.van-tab--card{color:var(--van-tabs-default-color);border-right:var(--van-border-width) solid var(--van-tabs-default-color)}.van-tab--card:last-child{border-right:none}.van-tab--card.van-tab--active{color:var(--van-white);background-color:var(--van-tabs-default-color)}.van-tab--card--disabled{color:var(--van-tab-disabled-text-color)}.van-tab__text--ellipsis{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__nav{position:relative;display:flex;background:var(--van-tabs-nav-background);-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-tabs__nav--complete{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-tabs__nav--complete::-webkit-scrollbar{display:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--line.van-tabs__nav--shrink,.van-tabs__nav--line.van-tabs__nav--complete{padding-right:var(--van-padding-xs);padding-left:var(--van-padding-xs)}.van-tabs__nav--card{box-sizing:border-box;height:var(--van-tabs-card-height);margin:0 var(--van-padding-md);border:var(--van-border-width) solid var(--van-tabs-default-color);border-radius:var(--van-border-radius-sm)}.van-tabs__nav--card.van-tabs__nav--shrink{display:inline-flex}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;width:var(--van-tabs-bottom-bar-width);height:var(--van-tabs-bottom-bar-height);background:var(--van-tabs-bottom-bar-color);border-radius:var(--van-tabs-bottom-bar-height)}.van-tabs__track{position:relative;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:var(--van-tabs-line-height)}.van-tabs--card>.van-tabs__wrap{height:var(--van-tabs-card-height)}.van-swipe-item{position:relative;flex-shrink:0;width:100%;height:100%}.van-tab__panel,.van-tab__panel-wrapper{flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__panel-wrapper--inactive{height:0;overflow:visible}:root{--van-button-mini-height: 24px;--van-button-mini-padding: 0 var(--van-padding-base);--van-button-mini-font-size: var(--van-font-size-xs);--van-button-small-height: 32px;--van-button-small-padding: 0 var(--van-padding-xs);--van-button-small-font-size: var(--van-font-size-sm);--van-button-normal-padding: 0 15px;--van-button-normal-font-size: var(--van-font-size-md);--van-button-large-height: 50px;--van-button-default-height: 44px;--van-button-default-line-height: 1.2;--van-button-default-font-size: var(--van-font-size-lg);--van-button-default-color: var(--van-text-color);--van-button-default-background: var(--van-background-2);--van-button-default-border-color: var(--van-gray-4);--van-button-primary-color: var(--van-white);--van-button-primary-background: var(--van-primary-color);--van-button-primary-border-color: var(--van-primary-color);--van-button-success-color: var(--van-white);--van-button-success-background: var(--van-success-color);--van-button-success-border-color: var(--van-success-color);--van-button-danger-color: var(--van-white);--van-button-danger-background: var(--van-danger-color);--van-button-danger-border-color: var(--van-danger-color);--van-button-warning-color: var(--van-white);--van-button-warning-background: var(--van-warning-color);--van-button-warning-border-color: var(--van-warning-color);--van-button-border-width: var(--van-border-width);--van-button-radius: var(--van-radius-md);--van-button-round-radius: var(--van-radius-max);--van-button-plain-background: var(--van-white);--van-button-disabled-opacity: var(--van-disabled-opacity);--van-button-icon-size: 1.2em;--van-button-loading-icon-size: 20px}.van-theme-dark{--van-button-plain-background: transparent}.van-button{position:relative;display:inline-block;box-sizing:border-box;height:var(--van-button-default-height);margin:0;padding:0;font-size:var(--van-button-default-font-size);line-height:var(--van-button-default-line-height);text-align:center;border-radius:var(--van-button-radius);cursor:pointer;transition:opacity var(--van-duration-fast);-webkit-appearance:none;-webkit-font-smoothing:auto}.van-button:before{position:absolute;top:50%;left:50%;width:100%;height:100%;background:var(--van-black);border:inherit;border-color:var(--van-black);border-radius:inherit;transform:translate(-50%,-50%);opacity:0;content:" "}.van-button:active:before{opacity:.1}.van-button--loading:before,.van-button--disabled:before{display:none}.van-button--default{color:var(--van-button-default-color);background:var(--van-button-default-background);border:var(--van-button-border-width) solid var(--van-button-default-border-color)}.van-button--primary{color:var(--van-button-primary-color);background:var(--van-button-primary-background);border:var(--van-button-border-width) solid var(--van-button-primary-border-color)}.van-button--success{color:var(--van-button-success-color);background:var(--van-button-success-background);border:var(--van-button-border-width) solid var(--van-button-success-border-color)}.van-button--danger{color:var(--van-button-danger-color);background:var(--van-button-danger-background);border:var(--van-button-border-width) solid var(--van-button-danger-border-color)}.van-button--warning{color:var(--van-button-warning-color);background:var(--van-button-warning-background);border:var(--van-button-border-width) solid var(--van-button-warning-border-color)}.van-button--plain{background:var(--van-button-plain-background)}.van-button--plain.van-button--primary{color:var(--van-button-primary-background)}.van-button--plain.van-button--success{color:var(--van-button-success-background)}.van-button--plain.van-button--danger{color:var(--van-button-danger-background)}.van-button--plain.van-button--warning{color:var(--van-button-warning-background)}.van-button--large{width:100%;height:var(--van-button-large-height)}.van-button--normal{padding:var(--van-button-normal-padding);font-size:var(--van-button-normal-font-size)}.van-button--small{height:var(--van-button-small-height);padding:var(--van-button-small-padding);font-size:var(--van-button-small-font-size)}.van-button__loading{color:inherit;font-size:inherit}.van-button__loading .van-loading__spinner{color:currentColor;width:var(--van-button-loading-icon-size);height:var(--van-button-loading-icon-size)}.van-button--mini{height:var(--van-button-mini-height);padding:var(--van-button-mini-padding);font-size:var(--van-button-mini-font-size)}.van-button--mini+.van-button--mini{margin-left:var(--van-padding-base)}.van-button--block{display:block;width:100%}.van-button--disabled{cursor:not-allowed;opacity:var(--van-button-disabled-opacity)}.van-button--loading{cursor:default}.van-button--round{border-radius:var(--van-button-round-radius)}.van-button--square{border-radius:0}.van-button__content{display:flex;align-items:center;justify-content:center;height:100%}.van-button__content:before{content:" "}.van-button__icon{font-size:var(--van-button-icon-size);line-height:inherit}.van-button__icon+.van-button__text,.van-button__loading+.van-button__text,.van-button__text+.van-button__icon,.van-button__text+.van-button__loading{margin-left:var(--van-padding-base)}.van-button--hairline{border-width:0}.van-button--hairline:after{border-color:inherit;border-radius:calc(var(--van-button-radius) * 2)}.van-button--hairline.van-button--round:after{border-radius:var(--van-button-round-radius)}.van-button--hairline.van-button--square:after{border-radius:0}:root{--van-field-label-width: 6.2em;--van-field-label-color: var(--van-text-color);--van-field-label-margin-right: var(--van-padding-sm);--van-field-input-text-color: var(--van-text-color);--van-field-input-error-text-color: var(--van-danger-color);--van-field-input-disabled-text-color: var(--van-text-color-3);--van-field-placeholder-text-color: var(--van-text-color-3);--van-field-icon-size: 16px;--van-field-clear-icon-size: 16px;--van-field-clear-icon-color: var(--van-gray-5);--van-field-right-icon-color: var(--van-gray-6);--van-field-error-message-color: var(--van-danger-color);--van-field-error-message-font-size: 12px;--van-field-text-area-min-height: 60px;--van-field-word-limit-color: var(--van-gray-7);--van-field-word-limit-font-size: var(--van-font-size-sm);--van-field-word-limit-line-height: 16px;--van-field-disabled-text-color: var(--van-text-color-3);--van-field-required-mark-color: var(--van-red)}.van-field{flex-wrap:wrap}.van-field__label{flex:none;box-sizing:border-box;width:var(--van-field-label-width);margin-right:var(--van-field-label-margin-right);color:var(--van-field-label-color);text-align:left;word-wrap:break-word}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field__label--top{display:flex;width:100%;text-align:left;margin-bottom:var(--van-padding-base);word-break:break-word}.van-field__label--required:before{margin-right:2px;color:var(--van-field-required-mark-color);content:"*"}.van-field--disabled .van-field__label{color:var(--van-field-disabled-text-color)}.van-field__value{overflow:visible}.van-field__body{display:flex;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;color:var(--van-field-input-text-color);line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}.van-field__control::-moz-placeholder{color:var(--van-field-placeholder-text-color)}.van-field__control::placeholder{color:var(--van-field-placeholder-text-color)}.van-field__control:disabled{color:var(--van-field-input-disabled-text-color);cursor:not-allowed;opacity:1;-webkit-text-fill-color:var(--van-field-input-disabled-text-color)}.van-field__control:-moz-read-only{cursor:default}.van-field__control:read-only{cursor:default}.van-field__control--center{justify-content:center;text-align:center}.van-field__control--right{justify-content:flex-end;text-align:right}.van-field__control--custom{display:flex;align-items:center;min-height:var(--van-cell-line-height)}.van-field__control--error::-moz-placeholder{color:var(--van-field-input-error-text-color);-webkit-text-fill-color:currentColor}.van-field__control--error,.van-field__control--error::placeholder{color:var(--van-field-input-error-text-color);-webkit-text-fill-color:currentColor}.van-field__control--min-height{min-height:var(--van-field-text-area-min-height)}.van-field__control[type=date],.van-field__control[type=time],.van-field__control[type=datetime-local]{min-height:var(--van-cell-line-height)}.van-field__control[type=search]{-webkit-appearance:none}.van-field__clear,.van-field__icon,.van-field__button,.van-field__right-icon{flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:calc(var(--van-padding-xs) * -1);padding:0 var(--van-padding-xs);line-height:inherit}.van-field__clear{color:var(--van-field-clear-icon-color);font-size:var(--van-field-clear-icon-size);cursor:pointer}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;font-size:var(--van-field-icon-size);line-height:inherit}.van-field__left-icon{margin-right:var(--van-padding-base)}.van-field__right-icon{color:var(--van-field-right-icon-color)}.van-field__button{padding-left:var(--van-padding-xs)}.van-field__error-message{color:var(--van-field-error-message-color);font-size:var(--van-field-error-message-font-size);text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field__word-limit{margin-top:var(--van-padding-base);color:var(--van-field-word-limit-color);font-size:var(--van-field-word-limit-font-size);line-height:var(--van-field-word-limit-line-height);text-align:right}\n',document.head.appendChild(ia),{setters:[a=>{e=a.aw,n=a.aO,o=a.aP,r=a.T,i=a.r,l=a.aQ,v=a.Y,d=a.aR,s=a.Z,c=a.as,u=a.c,b=a.d,f=a.aS,p=a.J,g=a.B,h=a.am,m=a.ab,w=a.aT,x=a.X,_=a.ai,y=a.f,k=a.n,z=a.$,C=a.al,I=a.aU,S=a.au,$=a.w,B=a.t,T=a.V,R=a.aV,M=a.af,O=a.u,A=a.e,X=a.aW,Z=a.aX,j=a.aY,L=a.L,W=a.aZ,Y=a.ar,E=a.av,q=a._,D=a.p,H=a.ac,N=a.ad,P=a.U,V=a.a_,F=a.az,J=a.a$,U=a.a2,Q=a.ak,G=a.b0,K=a.b1,aa=a.ag,ta=a.aJ,ea=a.aD,na=a.aE,oa=a.a0,ra=a.at}],execute:function(){a("u",ia);let t=0;function ia(){const a=r(),{name:e="unknown"}=(null==a?void 0:a.type)||{};return`${e}-${++t}`}function la(a,t){if(!v||!window.IntersectionObserver)return;const e=new IntersectionObserver((a=>{t(a[0].intersectionRatio>0)}),{root:document.body}),n=()=>{a.value&&e.unobserve(a.value)};d(n),s(n),c((()=>{a.value&&e.observe(a.value)}))}const[va,da]=u("sticky"),sa={zIndex:k,position:z("top"),container:Object,offsetTop:C(0),offsetBottom:C(0)};var ca=b({name:va,props:sa,emits:["scroll","change"],setup(a,{emit:t,slots:e}){const o=i(),r=f(o),l=p({fixed:!1,width:0,height:0,transform:0}),v=g((()=>h("top"===a.position?a.offsetTop:a.offsetBottom))),d=g((()=>{const{fixed:a,height:t,width:e}=l;if(a)return{width:`${e}px`,height:`${t}px`}})),s=g((()=>{if(!l.fixed)return;const t=m(w(a.zIndex),{width:`${l.width}px`,height:`${l.height}px`,[a.position]:`${v.value}px`});return l.transform&&(t.transform=`translate3d(0, ${l.transform}px, 0)`),t})),c=()=>{if(!o.value||I(o))return;const{container:e,position:r}=a,i=S(o),d=n(window);if(l.width=i.width,l.height=i.height,"top"===r)if(e){const a=S(e),t=a.bottom-v.value-l.height;l.fixed=v.value>i.top&&a.bottom>0,l.transform=t<0?t:0}else l.fixed=v.value>i.top;else{const{clientHeight:a}=document.documentElement;if(e){const t=S(e),n=a-t.top-v.value-l.height;l.fixed=a-v.value<i.bottom&&a>t.top,l.transform=n<0?-n:0}else l.fixed=a-v.value<i.bottom}(a=>{t("scroll",{scrollTop:a,isFixed:l.fixed})})(d)};return x((()=>l.fixed),(a=>t("change",a))),_("scroll",c,{target:r,passive:!0}),la(o,c),()=>{var a;return y("div",{ref:o,style:d.value},[y("div",{class:da({fixed:l.fixed}),style:s.value},[null==(a=e.default)?void 0:a.call(e)])])}}});const ua=a("S",$(ca)),[ba,fa]=u("tab");var pa=b({name:ba,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:k,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:B},setup(a,{slots:t}){const e=g((()=>{const t={},{type:e,color:n,disabled:o,isActive:r,activeColor:i,inactiveColor:l}=a;n&&"card"===e&&(t.borderColor=n,o||(r?t.backgroundColor=n:t.color=n));const v=r?i:l;return v&&(t.color=v),t})),n=()=>{const e=y("span",{class:fa("text",{ellipsis:!a.scrollable})},[t.title?t.title():a.title]);return a.dot||T(a.badge)&&""!==a.badge?y(R,{dot:a.dot,content:a.badge,showZero:a.showZeroBadge},{default:()=>[e]}):e};return()=>y("div",{id:a.id,role:"tab",class:[fa([a.type,{grow:a.scrollable&&!a.shrink,shrink:a.shrink,active:a.isActive,disabled:a.disabled}])],style:e.value,tabindex:a.disabled?void 0:a.isActive?0:-1,"aria-selected":a.isActive,"aria-disabled":a.disabled||void 0,"aria-controls":a.controls},[n()])}});const[ga,ha]=u("swipe"),ma={loop:B,width:k,height:k,vertical:Boolean,autoplay:C(0),duration:C(500),touchable:B,lazyRender:Boolean,initialSwipe:C(0),indicatorColor:String,showIndicators:B,stopPropagation:B},wa=Symbol(ga);var xa=b({name:ga,props:ma,emits:["change","dragStart","dragEnd"],setup(a,{emit:t,slots:e}){const n=i(),o=i(),r=p({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let l=!1;const v=M(),{children:c,linkChildren:u}=O(wa),b=g((()=>c.length)),f=g((()=>r[a.vertical?"height":"width"])),h=g((()=>a.vertical?v.deltaY.value:v.deltaX.value)),m=g((()=>r.rect?(a.vertical?r.rect.height:r.rect.width)-f.value*b.value:0)),w=g((()=>f.value?Math.ceil(Math.abs(m.value)/f.value):b.value)),k=g((()=>b.value*f.value)),z=g((()=>(r.active+b.value)%b.value)),C=g((()=>{const t=a.vertical?"vertical":"horizontal";return v.direction.value===t})),S=g((()=>{const t={transitionDuration:`${r.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${r.offset}px)`};if(f.value){const e=a.vertical?"height":"width",n=a.vertical?"width":"height";t[e]=`${k.value}px`,t[n]=a[n]?`${a[n]}px`:""}return t})),$=(t,e=0)=>{let n=t*f.value;a.loop||(n=Math.min(n,-m.value));let o=e-n;return a.loop||(o=H(o,m.value,0)),o},B=({pace:e=0,offset:n=0,emitChange:o})=>{if(b.value<=1)return;const{active:i}=r,l=(t=>{const{active:e}=r;return t?a.loop?H(e+t,-1,b.value):H(e+t,0,w.value):e})(e),v=$(l,n);if(a.loop){if(c[0]&&v!==m.value){const a=v<m.value;c[0].setOffset(a?k.value:0)}if(c[b.value-1]&&0!==v){const a=v>0;c[b.value-1].setOffset(a?-k.value:0)}}r.active=l,r.offset=v,o&&l!==i&&t("change",z.value)},T=()=>{r.swiping=!0,r.active<=-1?B({pace:b.value}):r.active>=b.value&&B({pace:-b.value})},R=()=>{T(),v.reset(),E((()=>{r.swiping=!1,B({pace:1,emitChange:!0})}))};let N;const P=()=>clearTimeout(N),V=()=>{P(),+a.autoplay>0&&b.value>1&&(N=setTimeout((()=>{R(),V()}),+a.autoplay))},F=(t=+a.initialSwipe)=>{if(!n.value)return;const e=()=>{var e,o;if(!I(n)){const t={width:n.value.offsetWidth,height:n.value.offsetHeight};r.rect=t,r.width=+(null!=(e=a.width)?e:t.width),r.height=+(null!=(o=a.height)?o:t.height)}b.value&&-1===(t=Math.min(b.value-1,t))&&(t=b.value-1),r.active=t,r.swiping=!0,r.offset=$(t),c.forEach((a=>{a.setOffset(0)})),V()};I(n)?q().then(e):e()},J=()=>F(r.active);let U;const Q=t=>{!a.touchable||t.touches.length>1||(v.start(t),l=!1,U=Date.now(),P(),T())},G=()=>{if(!a.touchable||!r.swiping)return;const e=Date.now()-U,n=h.value/e;if((Math.abs(n)>.25||Math.abs(h.value)>f.value/2)&&C.value){const t=a.vertical?v.offsetY.value:v.offsetX.value;let e=0;e=a.loop?t>0?h.value>0?-1:1:0:-Math[h.value>0?"ceil":"floor"](h.value/f.value),B({pace:e,emitChange:!0})}else h.value&&B({pace:0});l=!1,r.swiping=!1,t("dragEnd",{index:z.value}),V()},K=(t,e)=>{const n=e===z.value,o=n?{backgroundColor:a.indicatorColor}:void 0;return y("i",{style:o,class:ha("indicator",{active:n})},null)};return A({prev:()=>{T(),v.reset(),E((()=>{r.swiping=!1,B({pace:-1,emitChange:!0})}))},next:R,state:r,resize:J,swipeTo:(t,e={})=>{T(),v.reset(),E((()=>{let n;n=a.loop&&t===b.value?0===r.active?0:t:t%b.value,e.immediate?E((()=>{r.swiping=!1})):r.swiping=!1,B({pace:n-r.active,emitChange:!0})}))}}),u({size:f,props:a,count:b,activeIndicator:z}),x((()=>a.initialSwipe),(a=>F(+a))),x(b,(()=>F(r.active))),x((()=>a.autoplay),V),x([X,Z],J),x(j(),(a=>{"visible"===a?V():P()})),L(F),W((()=>F(r.active))),Y((()=>F(r.active))),d(P),s(P),_("touchmove",(e=>{a.touchable&&r.swiping&&(v.move(e),C.value)&&(!a.loop&&(0===r.active&&h.value>0||r.active===b.value-1&&h.value<0)||(D(e,a.stopPropagation),B({offset:h.value}),l||(t("dragStart",{index:z.value}),l=!0)))}),{target:o}),()=>{var t;return y("div",{ref:n,class:ha()},[y("div",{ref:o,style:S.value,class:ha("track",{vertical:a.vertical}),onTouchstartPassive:Q,onTouchend:G,onTouchcancel:G},[null==(t=e.default)?void 0:t.call(e)]),e.indicator?e.indicator({active:z.value,total:b.value}):a.showIndicators&&b.value>1?y("div",{class:ha("indicators",{vertical:a.vertical})},[Array(b.value).fill("").map(K)]):void 0])}}});const _a=$(xa),[ya,ka]=u("tabs");var za=b({name:ya,props:{count:N(Number),inited:Boolean,animated:Boolean,duration:N(k),swipeable:Boolean,lazyRender:Boolean,currentIndex:N(Number)},emits:["change"],setup(a,{emit:t,slots:e}){const n=i(),o=a=>t("change",a),r=()=>{var t;const r=null==(t=e.default)?void 0:t.call(e);return a.animated||a.swipeable?y(_a,{ref:n,loop:!1,class:ka("track"),duration:1e3*+a.duration,touchable:a.swipeable,lazyRender:a.lazyRender,showIndicators:!1,onChange:o},{default:()=>[r]}):r},l=t=>{const e=n.value;e&&e.state.active!==t&&e.swipeTo(t,{immediate:!a.inited})};return x((()=>a.currentIndex),l),L((()=>{l(a.currentIndex)})),A({swipeRef:n}),()=>y("div",{class:ka("content",{animated:a.animated||a.swipeable})},[r()])}});const[Ca,Ia]=u("tabs"),Sa={type:z("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:C(0),duration:C(.3),animated:Boolean,ellipsis:B,swipeable:Boolean,scrollspy:Boolean,offsetTop:C(0),background:String,lazyRender:B,lineWidth:k,lineHeight:k,beforeChange:Function,swipeThreshold:C(5),titleActiveColor:String,titleInactiveColor:String},$a=Symbol(Ca);var Ba=b({name:Ca,props:Sa,emits:["change","scroll","rendered","clickTab","update:active"],setup(a,{emit:t,slots:r}){let v,d,s;const u=i(),b=i(),m=i(),w=i(),k=ia(),z=f(u),[C,$]=function(){const a=i([]),t=[];return l((()=>{a.value=[]})),[a,e=>(t[e]||(t[e]=t=>{a.value[e]=t}),t[e])]}(),{children:B,linkChildren:R}=O($a),M=p({inited:!1,position:"",lineStyle:{},currentIndex:-1}),Z=g((()=>B.length>+a.swipeThreshold||!a.ellipsis||a.shrink)),j=g((()=>({borderColor:a.color,background:a.background}))),L=(a,t)=>{var e;return null!=(e=a.name)?e:t},E=g((()=>{const a=B[M.currentIndex];if(a)return L(a,M.currentIndex)})),D=g((()=>h(a.offsetTop))),H=g((()=>a.sticky?D.value+v:0)),N=t=>{const n=b.value,o=C.value;if(!(Z.value&&n&&o&&o[M.currentIndex]))return;const r=o[M.currentIndex].$el;!function(a,t,n){let o=0;const r=a.scrollLeft,i=0===n?1:Math.round(1e3*n/16);!function n(){a.scrollLeft+=(t-r)/i,++o<i&&e(n)}()}(n,r.offsetLeft-(n.offsetWidth-r.offsetWidth)/2,t?0:+a.duration)},aa=()=>{const t=M.inited;q((()=>{const e=C.value;if(!e||!e[M.currentIndex]||"line"!==a.type||I(u.value))return;const n=e[M.currentIndex].$el,{lineWidth:o,lineHeight:r}=a,i=n.offsetLeft+n.offsetWidth/2,l={width:P(o),backgroundColor:a.color,transform:`translateX(${i}px) translateX(-50%)`};if(t&&(l.transitionDuration=`${a.duration}s`),T(r)){const a=P(r);l.height=a,l.borderRadius=a}M.lineStyle=l}))},ta=(e,n)=>{const o=(a=>{const t=a<M.currentIndex?-1:1;for(;a>=0&&a<B.length;){if(!B[a].disabled)return a;a+=t}})(e);if(!T(o))return;const r=B[o],i=L(r,o),l=null!==M.currentIndex;M.currentIndex!==o&&(M.currentIndex=o,n||N(),aa()),i!==a.active&&(t("update:active",i),l&&t("change",i,r.title)),s&&!a.scrollspy&&F(Math.ceil(J(u.value)-D.value))},ea=(a,t)=>{const e=B.find(((t,e)=>L(t,e)===a)),n=e?B.indexOf(e):0;ta(n,t)},na=(t=!1)=>{if(a.scrollspy){const r=B[M.currentIndex].$el;if(r&&z.value){const i=J(r,z.value)-H.value;d=!0,function(a,t,r,i){let l=n(a);const v=l<t,d=0===r?1:Math.round(1e3*r/16),s=(t-l)/d;!function n(){l+=s,(v&&l>t||!v&&l<t)&&(l=t),o(a,l),v&&l<t||!v&&l>t?e(n):i&&e(i)}()}(z.value,i,t?0:+a.duration,(()=>{d=!1}))}}},oa=a=>{s=a.isFixed,t("scroll",a)},ra=()=>B.map(((e,n)=>y(pa,U({key:e.id,id:`${k}-${n}`,ref:$(n),type:a.type,color:a.color,style:e.titleStyle,class:e.titleClass,shrink:a.shrink,isActive:n===M.currentIndex,controls:e.id,scrollable:Z.value,activeColor:a.titleActiveColor,inactiveColor:a.titleInactiveColor,onClick:o=>((e,n,o)=>{const{title:r,disabled:i}=B[n],l=L(B[n],n);i||(G(a.beforeChange,{args:[l],done:()=>{ta(n),na()}}),K(e)),t("clickTab",{name:l,title:r,event:o,disabled:i})})(e,n,o)},Q(e,["dot","badge","title","disabled","showZeroBadge"])),{title:e.$slots.title}))),va=()=>{if("line"===a.type&&B.length)return y("div",{class:Ia("line"),style:M.lineStyle},null)},da=()=>{var t,e,n;const{type:o,border:i,sticky:l}=a,v=[y("div",{ref:l?void 0:m,class:[Ia("wrap"),{[V]:"line"===o&&i}]},[y("div",{ref:b,role:"tablist",class:Ia("nav",[o,{shrink:a.shrink,complete:Z.value}]),style:j.value,"aria-orientation":"horizontal"},[null==(t=r["nav-left"])?void 0:t.call(r),ra(),va(),null==(e=r["nav-right"])?void 0:e.call(r)])]),null==(n=r["nav-bottom"])?void 0:n.call(r)];return l?y("div",{ref:m},[v]):v};return x([()=>a.color,X],aa),x((()=>a.active),(a=>{a!==E.value&&ea(a)})),x((()=>B.length),(()=>{M.inited&&(ea(a.active),aa(),q((()=>{N(!0)})))})),A({resize:()=>{aa(),q((()=>{var a,t;return null==(t=null==(a=w.value)?void 0:a.swipeRef.value)?void 0:t.resize()}))},scrollTo:a=>{q((()=>{ea(a),na(!0)}))}}),W(aa),Y(aa),c((()=>{ea(a.active,!0),q((()=>{M.inited=!0,m.value&&(v=S(m.value).height),N(!0)}))})),la(u,aa),_("scroll",(()=>{if(a.scrollspy&&!d){const a=(()=>{for(let a=0;a<B.length;a++){const{top:t}=S(B[a].$el);if(t>H.value)return 0===a?0:a-1}return B.length-1})();ta(a)}}),{target:z,passive:!0}),R({id:k,props:a,setLine:aa,onRendered:(a,e)=>t("rendered",a,e),currentName:E,scrollIntoView:N}),()=>y("div",{ref:u,class:Ia([a.type])},[a.sticky?y(ua,{container:u.value,offsetTop:D.value,onScroll:oa},{default:()=>[da()]}):da(),y(za,{ref:w,count:B.length,inited:M.inited,animated:a.animated,duration:a.duration,swipeable:a.swipeable,lazyRender:a.lazyRender,currentIndex:M.currentIndex,onChange:ta},{default:()=>{var a;return[null==(a=r.default)?void 0:a.call(r)]}})])}});const Ta=Symbol(),[Ra,Ma]=u("swipe-item");var Oa=b({name:Ra,setup(a,{slots:t}){let e;const n=p({offset:0,inited:!1,mounted:!1}),{parent:o,index:r}=aa(wa);if(!o)return;const i=g((()=>{const a={},{vertical:t}=o.props;return o.size.value&&(a[t?"height":"width"]=`${o.size.value}px`),n.offset&&(a.transform=`translate${t?"Y":"X"}(${n.offset}px)`),a})),l=g((()=>{const{loop:a,lazyRender:t}=o.props;if(!t||e)return!0;if(!n.mounted)return!1;const i=o.activeIndicator.value,l=o.count.value-1,v=0===i&&a?l:i-1,d=i===l&&a?0:i+1;return e=r.value===i||r.value===v||r.value===d,e}));return L((()=>{q((()=>{n.mounted=!0}))})),A({setOffset:a=>{n.offset=a}}),()=>{var a;return y("div",{class:Ma(),style:i.value},[l.value?null==(a=t.default)?void 0:a.call(t):null])}}});const Aa=$(Oa),[Xa,Za]=u("tab"),ja=m({},ta,{dot:Boolean,name:k,badge:k,title:String,disabled:Boolean,titleClass:ea,titleStyle:[String,Object],showZeroBadge:B});var La=b({name:Xa,props:ja,setup(a,{slots:t}){const e=ia(),n=i(!1),{parent:o,index:r}=aa($a);if(!o)return;const l=()=>{var t;return null!=(t=a.name)?t:r.value},v=g((()=>{const t=l()===o.currentName.value;return t&&!n.value&&(n.value=!0,o.props.lazyRender&&q((()=>{o.onRendered(l(),a.title)}))),t})),d=i(!v.value);return x(v,(a=>{a?d.value=!1:E((()=>{d.value=!0}))})),x((()=>a.title),(()=>{o.setLine(),o.scrollIntoView()})),na(Ta,v),()=>{var a;const i=`${o.id}-${r.value}`,{animated:l,swipeable:s,scrollspy:c,lazyRender:u}=o.props;if(!t.default&&!l)return;const b=c||v.value;if(l||s)return y(Aa,{id:e,role:"tabpanel",class:Za("panel-wrapper",{inactive:d.value}),tabindex:v.value?0:-1,"aria-hidden":!v.value,"aria-labelledby":i},{default:()=>{var a;return[y("div",{class:Za("panel")},[null==(a=t.default)?void 0:a.call(t)])]}});const f=n.value||c||!u?null==(a=t.default)?void 0:a.call(t):null;return A({id:e}),oa(y("div",{id:e,role:"tabpanel",class:Za("panel"),tabindex:b?0:-1,"aria-labelledby":i},[f]),[[ra,b]])}}});a("T",$(La)),a("a",$(Ba))}}}));
