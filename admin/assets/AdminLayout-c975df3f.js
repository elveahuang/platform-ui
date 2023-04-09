import{m as e,at as t,ah as o,v as a,au as l,av as n,aw as s,w as i,ax as r,ay as u,az as d,aA as c,aB as p,h as m,j as v,a4 as y,a3 as h,k as f,t as b,r as g,q as k,o as x,Q as M,A as C,B as S,W as E,E as w,U as T,T as I,V as A,a6 as _,C as z,D as B,_ as P,a1 as O,aC as L,aD as N,aE as $,L as R,aF as D,p as H,aG as F,aH as j,aI as V,N as Y,H as U,a9 as W,aJ as q,aK as G,aL as K,aM as X,aN as Z,$ as Q,a8 as J,Y as ee,Z as te,aO as oe,aP as ae,aQ as le,G as ne,aR as se,aS as ie,y as re,x as ue,I as de,M as ce,aT as pe,aU as me,aV as ve,K as ye,aW as he,X as fe,a2 as be,ab as ge,ad as ke,aX as xe,ar as Me,aY as Ce,ap as Se,aZ as Ee,af as we,an as Te,ao as Ie}from"./index-3cb14d89.js";import{_ as Ae,k as _e,d as ze,e as Be,f as Pe,h as Oe}from"./ThemeSelect.vuevuetypescriptsetuptruelang-e86519b7.js";import{u as Le,T as Ne}from"./button-e2ddac8a.js";import{t as $e,U as Re,E as De,e as He,i as Fe,f as je}from"./tag-31b282ec.js";import"./tooltip-4ed993c7.js";import{_ as Ve}from"./plugin-vueexport-helper-1b428a4d.js";import{g as Ye,m as Ue}from"./typescript-de360de7.js";import{b as We}from"./use-form-item-88b64658.js";const qe=function(e,t,...o){let a;a=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const l=document.createEvent(a);return l.initEvent(t,...o),e.dispatchEvent(l),e};var Ge=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Ge||{});const Ke=o=>{const a=e(o)?o:[o],l=[];return a.forEach((o=>{var a;e(o)?l.push(...Ke(o)):t(o)&&e(o.children)?l.push(...Ke(o.children)):(l.push(o),t(o)&&(null==(a=o.component)?void 0:a.subTree)&&l.push(...Ke(o.component.subTree)))})),l},Xe=m({size:{type:[Number,String],values:v,default:"",validator:e=>y(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:h},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:f(String),default:"cover"}}),Ze={error:e=>e instanceof Event},Qe=["src","alt","srcset"],Je=b({name:"ElAvatar"});const et=O(P(b({...Je,props:Xe,emits:Ze,setup(e,{emit:t}){const o=e,l=a("avatar"),n=g(!1),s=k((()=>{const{size:e,icon:t,shape:a}=o,n=[l.b()];return x(e)&&n.push(l.m(e)),t&&n.push(l.m("icon")),a&&n.push(l.m(a)),n})),r=k((()=>{const{size:e}=o;return y(e)?l.cssVarBlock({size:M(e)||""}):void 0})),u=k((()=>({objectFit:o.fit})));function d(e){n.value=!0,t("error",e)}return i((()=>o.src),(()=>n.value=!1)),(e,t)=>(C(),S("span",{class:B(w(s)),style:E(w(r))},[!e.src&&!e.srcSet||n.value?e.icon?(C(),T(w(_),{key:1},{default:I((()=>[(C(),T(A(e.icon)))])),_:1})):z(e.$slots,"default",{key:2}):(C(),S("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:E(w(u)),onError:d},null,44,Qe))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]])),tt=b({name:"ElCollapseTransition"});var ot=P(b({...tt,setup(e){const t=a("collapse-transition"),o={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,a)=>(C(),T($,L({name:w(t).b()},N(o)),{default:I((()=>[z(e.$slots,"default")])),_:3},16,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ot.install=e=>{e.component(ot.name,ot)};const at=ot,lt=m({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:f([String,Array,Object])},zIndex:{type:f([String,Number])}});const nt=b({name:"ElOverlay",props:lt,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:o}){const l=a("overlay"),{onClick:n,onMousedown:s,onMouseup:i}=(e=>{if(!e)return{onClick:p,onMousedown:p,onMouseup:p};let t=!1,o=!1;return{onClick:a=>{t&&o&&e(a),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}})(e.customMaskEvent?void 0:e=>{o("click",e)});return()=>e.mask?R("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:n,onMousedown:s,onMouseup:i},[z(t,"default")],Ge.STYLE|Ge.CLASS|Ge.PROPS,["onClick","onMouseup","onMousedown"]):D("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[z(t,"default")])}}),st=m({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:h},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),it=m({...st,appendToBody:{type:Boolean,default:!1},beforeClose:{type:f(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),rt={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Re]:e=>H(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ut=(e,t)=>{const p=W().emit,{nextZIndex:m}=F();let v="";const y=We(),h=We(),f=g(!1),b=g(!1),x=g(!1),C=g(e.zIndex||m());let S,E;const w=j("namespace",V),T=k((()=>{const t={},o=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(t[`${o}-margin-top`]=e.top),e.width&&(t[`${o}-width`]=M(e.width))),t})),I=k((()=>e.alignCenter?{display:"flex"}:{}));function A(){null==E||E(),null==S||S(),e.openDelay&&e.openDelay>0?({stop:S}=q((()=>B()),e.openDelay)):B()}function _(){null==S||S(),null==E||E(),e.closeDelay&&e.closeDelay>0?({stop:E}=q((()=>P()),e.closeDelay)):P()}function z(){e.beforeClose?e.beforeClose((function(e){e||(b.value=!0,f.value=!1)})):_()}function B(){n&&(f.value=!0)}function P(){f.value=!1}return e.lockScroll&&((e,t={})=>{o(e)||$e("[useLockscreen]","You need to pass a ref param to this function");const p=t.ns||a("popup"),m=l((()=>p.bm("parent","hidden")));if(!n||s(document.body,m.value))return;let v=0,y=!1,h="0";const f=()=>{setTimeout((()=>{c(null==document?void 0:document.body,m.value),y&&document&&(document.body.style.width=h)}),200)};i(e,(e=>{if(!e)return void f();y=!s(document.body,m.value),y&&(h=document.body.style.width),v=Ye(p.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,o=r(document.body,"overflowY");v>0&&(t||"scroll"===o)&&y&&(document.body.style.width=`calc(100% - ${v}px)`),u(document.body,m.value)})),d((()=>f()))})(f),i((()=>e.modelValue),(o=>{o?(b.value=!1,A(),x.value=!0,C.value=e.zIndex?C.value++:m(),Y((()=>{p("open"),t.value&&(t.value.scrollTop=0)}))):f.value&&_()})),i((()=>e.fullscreen),(e=>{t.value&&(e?(v=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=v)})),U((()=>{e.modelValue&&(f.value=!0,x.value=!0,A())})),{afterEnter:function(){p("opened")},afterLeave:function(){p("closed"),p(Re,!1),e.destroyOnClose&&(x.value=!1)},beforeLeave:function(){p("close")},handleClose:z,onModalClick:function(){e.closeOnClickModal&&z()},close:_,doClose:P,onOpenAutoFocus:function(){p("openAutoFocus")},onCloseAutoFocus:function(){p("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&z()},onFocusoutPrevented:function(e){var t;"pointer"===(null==(t=e.detail)?void 0:t.focusReason)&&e.preventDefault()},titleId:y,bodyId:h,closed:b,style:T,overlayDialogStyle:I,rendered:x,visible:f,zIndex:C}},dt=m({...it,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),ct=b({name:"ElDrawer",components:{ElOverlay:nt,ElFocusTrap:De,ElIcon:_,Close:G},inheritAttrs:!1,props:dt,emits:rt,setup(e,{slots:t}){Le({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},k((()=>!!t.title))),Le({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},k((()=>!!e.customClass)));const o=g(),l=g(),n=a("drawer"),{t:s}=K(),i=k((()=>"rtl"===e.direction||"ltr"===e.direction)),r=k((()=>M(e.size)));return{...ut(e,o),drawerRef:o,focusStartRef:l,isHorizontal:i,drawerSize:r,ns:n,t:s}}}),pt=["aria-label","aria-labelledby","aria-describedby"],mt=["id"],vt=["aria-label"],yt=["id"];const ht=O(P(ct,[["render",function(e,t,o,a,l,n){const s=X("close"),i=X("el-icon"),r=X("el-focus-trap"),u=X("el-overlay");return C(),T(ae,{to:"body",disabled:!e.appendToBody},[R($,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:I((()=>[Z(R(u,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:I((()=>[R(r,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:I((()=>[Q("div",L({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:t[1]||(t[1]=J((()=>{}),["stop"]))}),[Q("span",{ref:"focusStartRef",class:B(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(C(),S("header",{key:0,class:B(e.ns.e("header"))},[e.$slots.title?z(e.$slots,"title",{key:1},(()=>[te(" DEPRECATED SLOT ")])):z(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(()=>[e.$slots.title?te("v-if",!0):(C(),S("span",{key:0,id:e.titleId,role:"heading",class:B(e.ns.e("title"))},ee(e.title),11,mt))])),e.showClose?(C(),S("button",{key:2,"aria-label":e.t("el.drawer.close"),class:B(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[R(i,{class:B(e.ns.e("close"))},{default:I((()=>[R(s)])),_:1},8,["class"])],10,vt)):te("v-if",!0)],2)):te("v-if",!0),e.rendered?(C(),S("div",{key:1,id:e.bodyId,class:B(e.ns.e("body"))},[z(e.$slots,"default")],10,yt)):te("v-if",!0),e.$slots.footer?(C(),S("div",{key:2,class:B(e.ns.e("footer"))},[z(e.$slots,"footer")],2)):te("v-if",!0)],16,pt)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[oe,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));var ft=P(b({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,o){u(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",o()},onAfterEnter(t){c(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),s(t,e.m("collapse"))?(c(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),u(t,e.m("collapse"))):(u(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),c(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){u(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}}),[["render",function(e,t,o,a,l,n){return C(),T($,L({mode:"out-in"},e.listeners),{default:I((()=>[z(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function bt(e,t){const o=k((()=>{let o=e.parent;const a=[t.value];for(;"ElMenu"!==o.type.name;)o.props.index&&a.unshift(o.props.index),o=o.parent;return a}));return{parentMenu:k((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:o}}function gt(e){return k((()=>{const t=e.backgroundColor;return t?new Ne(t).shade(20).toString():""}))}const kt=(e,t)=>{const o=a("menu");return k((()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":gt(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},xt=m({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:h},expandOpenIcon:{type:h},collapseCloseIcon:{type:h},collapseOpenIcon:{type:h}}),Mt="ElSubMenu";var Ct=b({name:Mt,props:xt,setup(e,{slots:t,expose:o}){Le({from:"popper-append-to-body",replacement:"teleported",scope:Mt,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},k((()=>void 0!==e.popperAppendToBody)));const l=W(),{indexPath:n,parentMenu:s}=bt(l,k((()=>e.index))),r=a("menu"),u=a("sub-menu"),d=ne("rootMenu");d||$e(Mt,"can not inject root menu");const c=ne(`subMenu:${s.value.uid}`);c||$e(Mt,"can not inject sub menu");const p=g({}),m=g({});let v;const y=g(!1),h=g(),f=g(null),b=k((()=>"horizontal"===P.value&&C.value?"bottom-start":"right-start")),M=k((()=>"horizontal"===P.value&&C.value||"vertical"===P.value&&!d.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?T.value?e.expandOpenIcon:e.expandCloseIcon:se:e.collapseCloseIcon&&e.collapseOpenIcon?T.value?e.collapseOpenIcon:e.collapseCloseIcon:ie)),C=k((()=>0===c.level)),S=k((()=>{var t;const o=null!=(t=e.teleported)?t:e.popperAppendToBody;return void 0===o?C.value:o})),E=k((()=>d.props.collapse?`${r.namespace.value}-zoom-in-left`:`${r.namespace.value}-zoom-in-top`)),w=k((()=>"horizontal"===P.value&&C.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"])),T=k((()=>d.openedMenus.includes(e.index))),I=k((()=>{let e=!1;return Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),Object.values(m.value).forEach((t=>{t.active&&(e=!0)})),e})),A=k((()=>d.props.backgroundColor||"")),z=k((()=>d.props.activeTextColor||"")),B=k((()=>d.props.textColor||"")),P=k((()=>d.props.mode)),O=re({index:e.index,indexPath:n,active:I}),L=k((()=>"horizontal"!==P.value?{color:B.value}:{borderBottomColor:I.value?d.props.activeTextColor?z.value:"":"transparent",color:I.value?z.value:B.value})),N=e=>{var t,o,a;e||null==(a=null==(o=null==(t=f.value)?void 0:t.popperRef)?void 0:o.popperInstanceRef)||a.destroy()},$=()=>{"hover"===d.props.menuTrigger&&"horizontal"===d.props.mode||d.props.collapse&&"vertical"===d.props.mode||e.disabled||d.handleSubMenuClick({index:e.index,indexPath:n.value,active:I.value})},R=(t,o=e.showTimeout)=>{var a;"focus"!==t.type&&("click"===d.props.menuTrigger&&"horizontal"===d.props.mode||!d.props.collapse&&"vertical"===d.props.mode||e.disabled||(c.mouseInChild.value=!0,null==v||v(),({stop:v}=q((()=>{d.openMenu(e.index,n.value)}),o)),S.value&&(null==(a=s.value.vnode.el)||a.dispatchEvent(new MouseEvent("mouseenter")))))},H=(t=!1)=>{var o,a;"click"===d.props.menuTrigger&&"horizontal"===d.props.mode||!d.props.collapse&&"vertical"===d.props.mode||(null==v||v(),c.mouseInChild.value=!1,({stop:v}=q((()=>!y.value&&d.closeMenu(e.index,n.value)),e.hideTimeout)),S.value&&t&&"ElSubMenu"===(null==(o=l.parent)?void 0:o.type.name)&&(null==(a=c.handleMouseleave)||a.call(c,!0)))};i((()=>d.props.collapse),(e=>N(Boolean(e))));{const e=e=>{m.value[e.index]=e},t=e=>{delete m.value[e.index]};ue(`subMenu:${l.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:H,mouseInChild:y,level:c.level+1})}return o({opened:T}),U((()=>{d.addSubMenu(O),c.addSubMenu(O)})),de((()=>{c.removeSubMenu(O),d.removeSubMenu(O)})),()=>{var o;const a=[null==(o=t.title)?void 0:o.call(t),D(_,{class:u.e("icon-arrow"),style:{transform:T.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&d.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>x(M.value)?D(l.appContext.components[M.value]):D(M.value)})],n=kt(d.props,c.level+1),s=d.isMenuPopup?D(He,{ref:f,visible:T.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:b.value,teleported:S.value,fallbackPlacements:w.value,transition:E.value,gpuAcceleration:!1},{content:()=>{var o;return D("div",{class:[r.m(P.value),r.m("popup-container"),e.popperClass],onMouseenter:e=>R(e,100),onMouseleave:()=>H(!0),onFocus:e=>R(e,100)},[D("ul",{class:[r.b(),r.m("popup"),r.m(`popup-${b.value}`)],style:n.value},[null==(o=t.default)?void 0:o.call(t)])])},default:()=>D("div",{class:u.e("title"),style:[L.value,{backgroundColor:A.value}],onClick:$},a)}):D(ce,{},[D("div",{class:u.e("title"),style:[L.value,{backgroundColor:A.value}],ref:h,onClick:$},a),D(at,{},{default:()=>{var e;return Z(D("ul",{role:"menu",class:[r.b(),r.m("inline")],style:n.value},[null==(e=t.default)?void 0:e.call(t)]),[[oe,T.value]])}})]);return D("li",{class:[u.b(),u.is("active",I.value),u.is("opened",T.value),u.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:T.value,onMouseenter:R,onMouseleave:()=>H(!0),onFocus:R},[s])}}});const St=m({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:f(Array),default:()=>Ue([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),Et=e=>Array.isArray(e)&&e.every((e=>x(e)));var wt=b({name:"ElMenu",props:St,emits:{close:(e,t)=>x(e)&&Et(t),open:(e,t)=>x(e)&&Et(t),select:(e,t,o,a)=>x(e)&&Et(t)&&ve(o)&&(void 0===a||a instanceof Promise)},setup(e,{emit:t,slots:o,expose:l}){const n=W(),s=n.appContext.config.globalProperties.$router,r=g(),u=a("menu"),d=a("sub-menu"),c=g(-1),p=g(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),m=g(e.defaultActive),v=g({}),y=g({}),h=k((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),f=(o,a)=>{p.value.includes(o)||(e.uniqueOpened&&(p.value=p.value.filter((e=>a.includes(e)))),p.value.push(o),t("open",o,a))},b=e=>{const t=p.value.indexOf(e);-1!==t&&p.value.splice(t,1)},x=(e,o)=>{b(e),t("close",e,o)},M=({index:e,indexPath:t})=>{p.value.includes(e)?x(e,t):f(e,t)},C=o=>{("horizontal"===e.mode||e.collapse)&&(p.value=[]);const{index:a,indexPath:l}=o;if(!Fe(a)&&!Fe(l))if(e.router&&s){const e=o.route||a,n=s.push(e).then((e=>(e||(m.value=a),e)));t("select",a,l,{index:a,indexPath:l,route:e},n)}else m.value=a,t("select",a,l,{index:a,indexPath:l})};let S=!0;const E=()=>{const e=()=>{c.value=-1,Y((()=>{c.value=(()=>{var e,t;if(!r.value)return-1;const o=Array.from(null!=(t=null==(e=r.value)?void 0:e.childNodes)?t:[]).filter((e=>"#text"!==e.nodeName||e.nodeValue)),a=Number.parseInt(getComputedStyle(r.value).paddingLeft,10),l=Number.parseInt(getComputedStyle(r.value).paddingRight,10),n=r.value.clientWidth-a-l;let s=0,i=0;return o.forEach(((e,t)=>{s+=e.offsetWidth||0,s<=n-64&&(i=t+1)})),i===o.length?-1:i})()}))};S?e():((e,t=33.34)=>{let o;return()=>{o&&clearTimeout(o),o=setTimeout((()=>{e()}),t)}})(e)(),S=!1};let w;i((()=>e.defaultActive),(t=>{v.value[t]||(m.value=""),(t=>{const o=v.value,a=o[t]||m.value&&o[m.value]||o[e.defaultActive];m.value=a?a.index:t})(t)})),i((()=>e.collapse),(e=>{e&&(p.value=[])})),i(v.value,(()=>{const t=m.value&&v.value[m.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=y.value[e];t&&f(e,t.indexPath)}))})),pe((()=>{"horizontal"===e.mode&&e.ellipsis?w=ye(r,E).stop:null==w||w()}));{const t=e=>{y.value[e.index]=e},o=e=>{delete y.value[e.index]},a=e=>{v.value[e.index]=e},l=e=>{delete v.value[e.index]};ue("rootMenu",re({props:e,openedMenus:p,items:v,subMenus:y,activeIndex:m,isMenuPopup:h,addMenuItem:a,removeMenuItem:l,addSubMenu:t,removeSubMenu:o,openMenu:f,closeMenu:x,handleMenuItemClick:C,handleSubMenuClick:M})),ue(`subMenu:${n.uid}`,{addSubMenu:t,removeSubMenu:o,mouseInChild:g(!1),level:0})}U((()=>{"horizontal"===e.mode&&new class{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${e}-menu`);t&&(this.submenu=new class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const e=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(t=>{t.addEventListener("keydown",(t=>{let o=!1;switch(t.code){case le.down:this.gotoSubIndex(this.subIndex+1),o=!0;break;case le.up:this.gotoSubIndex(this.subIndex-1),o=!0;break;case le.tab:qe(e,"mouseleave");break;case le.enter:case le.space:o=!0,t.currentTarget.click()}return o&&(t.preventDefault(),t.stopPropagation()),!1}))}))}}(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(e=>{let t=!1;switch(e.code){case le.down:qe(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break;case le.up:qe(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break;case le.tab:qe(e.currentTarget,"mouseleave");break;case le.enter:case le.space:t=!0,e.currentTarget.click()}t&&e.preventDefault()}))}}(t,e)}))}}(n.vnode.el,u.namespace.value)}));l({open:e=>{const{indexPath:t}=y.value[e];t.forEach((e=>f(e,t)))},close:b,handleResize:E});return()=>{var t,a;let l=null!=(a=null==(t=o.default)?void 0:t.call(o))?a:[];const n=[];if("horizontal"===e.mode&&r.value){const t=Ke(l),o=-1===c.value?t:t.slice(0,c.value),a=-1===c.value?[]:t.slice(c.value);(null==a?void 0:a.length)&&e.ellipsis&&(l=o,n.push(D(Ct,{index:"sub-menu-more",class:d.e("hide-arrow")},{title:()=>D(_,{class:d.e("icon-more")},{default:()=>D(me)}),default:()=>a})))}const s=kt(e,0),i=D("ul",{key:String(e.collapse),role:"menubar",ref:r,style:s.value,class:{[u.b()]:!0,[u.m(e.mode)]:!0,[u.m("collapse")]:e.collapse}},[...l,...n]);return e.collapseTransition&&"vertical"===e.mode?D(ft,(()=>i)):i}}});const Tt=m({index:{type:f([String,null]),default:null},route:{type:f([String,Object])},disabled:Boolean}),It="ElMenuItem";var At=P(b({name:It,components:{ElTooltip:He},props:Tt,emits:{click:e=>x(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const o=W(),l=ne("rootMenu"),n=a("menu"),s=a("menu-item");l||$e(It,"can not inject root menu");const{parentMenu:i,indexPath:r}=bt(o,he(e,"index")),u=ne(`subMenu:${i.value.uid}`);u||$e(It,"can not inject sub menu");const d=k((()=>e.index===l.activeIndex)),c=re({index:e.index,indexPath:r,active:d});return U((()=>{u.addSubMenu(c),l.addMenuItem(c)})),de((()=>{u.removeSubMenu(c),l.removeMenuItem(c)})),{parentMenu:i,rootMenu:l,active:d,nsMenu:n,nsMenuItem:s,handleClick:()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",c))}}}}),[["render",function(e,t,o,a,l,n){const s=X("el-tooltip");return C(),S("li",{class:B([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(C(),T(s,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:I((()=>[z(e.$slots,"title")])),default:I((()=>[Q("div",{class:B(e.nsMenu.be("tooltip","trigger"))},[z(e.$slots,"default")],2)])),_:3},8,["effect"])):(C(),S(ce,{key:1},[z(e.$slots,"default"),z(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var _t=P(b({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})}),[["render",function(e,t,o,a,l,n){return C(),S("li",{class:B(e.ns.b())},[Q("div",{class:B(e.ns.e("title"))},[e.$slots.title?z(e.$slots,"title",{key:1}):(C(),S(ce,{key:0},[fe(ee(e.title),1)],64))],2),Q("ul",null,[z(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const zt=O(wt,{MenuItem:At,MenuItemGroup:_t,SubMenu:Ct}),Bt=be(At);be(_t);const Pt=be(Ct),Ot=["onClick"],Lt=Ve(b({__name:"ThemeColorSelect",setup(e){const{setTheme:t}=ge();return(e,o)=>(C(!0),S(ce,null,ke(w(xe),((e,o)=>(C(),S("div",{class:"color-wrapper",key:o,style:E({backgroundColor:e.primaryColor}),onClick:o=>w(t)(e.theme)},null,12,Ot)))),128))}}),[["__scopeId","data-v-698475ca"]]),Nt=[{key:"workbench",label:"Workbench",icon:"mdiViewDashboard",authorities:["workbench"],items:[{key:"dashboard",label:"Dashboard",icon:"mdiViewList",authorities:["workbench:dashboard"],link:"/dashboard"},{key:"workbench",label:"Workbench",icon:"mdiBook",authorities:["workbench:workbench"],link:"/workbench"}]},{key:"home",label:"Site",icon:"mdiSitemap",authorities:["home"],items:[{key:"product-management",label:"Product",icon:"mdiViewList",authorities:["home:product"],link:"/product/index"},{key:"product-announcement",label:"Product",icon:"mdiViewList",authorities:["home:product"],link:"/announcement/index"}]},{key:"organization",label:"Organization",icon:"mdiCogs",authorities:["organization"],items:[{key:"organization-organization",label:"Organization",icon:"mdiAccountMultiple",authorities:["organization:organization"],link:"/organization/index"},{key:"organization-position",label:"Position",icon:"mdiAccountMultiple",authorities:["organization:position"],link:"/position/index"},{key:"organization-user",label:"UserModel",icon:"mdiAccountMultiple",authorities:["organization:user"],link:"/user/index"},{key:"organization-group",label:"Group",icon:"mdiAccountMultiple",authorities:["organization:group"],link:"/group/index"}]},{key:"resource",label:"Resource",icon:"mdiCogs",authorities:["resource"],items:[{key:"resource-dictionary",label:"Dictionary",icon:"mdiAccountMultiple",authorities:["resource:dictionary"],link:"/admin/dictionary/index"},{key:"resource-tag",label:"Tag",icon:"mdiAccountMultiple",authorities:["resource:tag"],link:"/admin/tag/index"},{key:"resource:area",label:"Area",icon:"mdiAccountMultiple",authorities:["resource:area"],link:"/admin/area/index"},{key:"resource-attachment",label:"Attachment",icon:"mdiAccountMultiple",authorities:["resource:attachment"],link:"/admin/attachment/index"},{key:"resource-label",label:"Label",icon:"mdiAccountMultiple",authorities:["resource:label"],link:"/admin/label/index"},{key:"resource-message",label:"Message",icon:"mdiAccountMultiple",authorities:["resource:message"],link:"/admin/message/index"}]},{key:"system",label:"System",icon:"mdiCogs",authorities:["system"],items:[{key:"system-authority",label:"AuthorityMiddleware",icon:"mdiAccountMultiple",authorities:["system:authority"],link:"/admin/authority/index"},{key:"system-role",label:"RoleModel",icon:"mdiAccountMultiple",authorities:["system:role"],link:"/admin/role/index"},{key:"system-setting",label:"System Settings",icon:"mdiAccountMultiple",authorities:["system:setting"],link:"/admin/system/settings"},{key:"system-user",label:"On-Line UserModel",icon:"mdiAccountMultiple",authorities:["system:user"],link:"/admin/on-line-user/index"},{key:"system-logging",label:"Logging",icon:"mdiAccountMultiple",authorities:["system:logging"],link:"/admin/logging/index"},{key:"system-task",label:"Task",icon:"mdiAccountMultiple",authorities:["system:task"],link:"/admin/task/index"},{key:"system-application",label:"ApplicationMiddleware",icon:"mdiAccountMultiple",authorities:["system:application"],link:"/admin/application/index"}]},{key:"tenant",label:"Tenant",icon:"mdiSitemap",authorities:["tenant"],items:[{key:"tenant-tenant",label:"Tenant",icon:"mdiViewList",authorities:["tenant:tenant"],link:"/admin/tenant/index"}]}],$t=e=>e.items&&e.items.length&&e.items.length>0,Rt={class:"admin-layout-logo"},Dt={key:1},Ht={class:"admin-layout-header-nav"},Ft={class:"admin-layout-header-menu"},jt={class:"admin-layout-header-item"},Vt={class:"admin-layout-header-item"},Yt={class:"admin-layout-header-item"},Ut=(e=>(Te("data-v-118674da"),e=e(),Ie(),e))((()=>Q("h4",null,"设置",-1))),Wt=Ve(b({__name:"AdminLayout",setup(e){U((()=>{}));const t=ge(),a=Me(),l=Ce(),{t:n}=Se(),{isFullscreen:s,toggle:i}=Ee(),r=()=>i(),u=k((()=>t.sidebar.collapsed)),d=k((()=>/\/about\//.test(l.path)?"doc":"home"===l.name?"home":null)),c=k((()=>t.sidebar.collapsed?"admin-layout-sidebar-collapse":"admin-layout-sidebar")),p=k((()=>Nt&&Nt.length&&Nt.length>0?Nt:[])),m=()=>t.toggleSidebar(),v=k({get:()=>t.controlSidebar.collapsed,set:()=>t.toggleControlSidebar()}),y=()=>t.toggleControlSidebar(),h=k((()=>[{key:"home",label:n("common_label_home"),path:"/"},{key:"products",label:n("common_label_home"),path:"/about"},{key:"about",label:n("common_label_about_us"),path:"/about"}]));return(e,t)=>{const l=_,i=Bt,f=Pt,b=zt,g=je,k=_e,x=et,M=ze,E=Be,A=X("router-view"),z=Pe,P=ht,O=Oe;return C(),T(O,{id:"admin-layout",class:"admin-layout"},{default:I((()=>[R(k,{class:B(w(c)),"show-trigger":"arrow-circle","collapse-mode":"width","native-scrollbar":!1,collapsed:w(u),"collapse-transition":!1,bordered:!0,"onUpdate:collapsed":m},{default:I((()=>[R(g,null,{default:I((()=>[Q("div",Rt,[w(u)?(C(),S(ce,{key:0},[],64)):(C(),S("span",Dt,"Application"))]),R(b,{mode:"vertical",router:!0,collapse:w(u),"default-active":w(d)},{default:I((()=>[(C(!0),S(ce,null,ke(w(p),(e=>(C(),S(ce,null,[w($t)(e)?(C(),T(f,{key:e.key,index:e.key},{title:I((()=>[R(l,null,{default:I((()=>[R(w(we),{icon:"ep:add-location"})])),_:1}),Q("span",null,ee(w(n)(e.label)),1)])),default:I((()=>[(C(!0),S(ce,null,ke(e.items,(e=>(C(),T(i,{key:e.key,index:e.link},{default:I((()=>[fe(ee(w(n)(e.label)),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(C(),T(i,{key:e.key,index:e.link},{default:I((()=>[fe(ee(w(n)(e.label)),1)])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["collapse","default-active"])])),_:1})])),_:1},8,["class","collapsed"]),R(O,{class:"admin-layout-main"},{default:I((()=>[R(E,{class:"admin-layout-header"},{default:I((()=>{var e,t;return[Q("div",Ht,[Q("div",{class:"admin-layout-header-item",onClick:m},[w(u)?(C(),T(l,{key:0,size:"24"},{default:I((()=>[R(w(we),{icon:"ant-design:menu-fold-outlined"})])),_:1})):(C(),T(l,{key:1,size:"24"},{default:I((()=>[R(w(we),{icon:"ant-design:menu-unfold-outlined"})])),_:1}))])]),Q("div",Ft,[Q("div",{class:"admin-layout-header-item",onClick:r},[w(s)?(C(),T(l,{key:0},{default:I((()=>[R(w(we),{icon:"ep:full-screen"})])),_:1})):(C(),T(l,{key:1},{default:I((()=>[R(w(we),{icon:"ep:full-screen"})])),_:1}))]),Q("div",jt,[R(l,{size:"18"},{default:I((()=>[R(w(we),{icon:"ep:bell"})])),_:1})]),Q("div",Vt,[R(Ae)]),Q("div",Yt,[R(M,{trigger:"hover",options:w(h)},{default:I((()=>[R(x,{round:!0,size:"small"},{default:I((()=>[R(l,{size:"12"},{default:I((()=>[R(w(we),{icon:"ep:avatar"})])),_:1})])),_:1})])),_:1},8,["options"]),Q("div",null,ee(null==(t=null==(e=w(a))?void 0:e.user)?void 0:t.username),1)]),Q("div",{class:"admin-layout-header-item",onClick:y},[R(l,{size:"18"},{default:I((()=>[R(w(we),{icon:"ep:setting"})])),_:1})])])]})),_:1}),R(z,{class:"admin-layout-content"},{default:I((()=>[R(A)])),_:1}),R(P,{modelValue:w(v),"onUpdate:modelValue":t[0]||(t[0]=e=>o(v)?v.value=e:null)},{header:I((()=>[Ut])),default:I((()=>[R(Ae),R(Lt)])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-118674da"]]);export{Wt as default};
