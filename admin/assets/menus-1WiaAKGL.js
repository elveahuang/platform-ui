var He=Object.defineProperty,Re=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var xe=(e,o,t)=>o in e?He(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,we=(e,o)=>{for(var t in o||(o={}))We.call(o,t)&&xe(e,t,o[t]);if(_e)for(var t of _e(o))Ve.call(o,t)&&xe(e,t,o[t]);return e},Ie=(e,o)=>Re(e,je(o));var Ce=(e,o,t)=>new Promise((s,n)=>{var b=a=>{try{d(t.next(a))}catch(m){n(m)}},c=a=>{try{d(t.throw(a))}catch(m){n(m)}},d=a=>a.done?s(a.value):Promise.resolve(a.value).then(b,c);d((t=t.apply(e,o)).next())});import{d as L,M as A,e as O,f as K,w,m as B,ad as Te,aq as Fe,i as S,a4 as $e,a6 as le,a8 as $,ar as Y,as as de,at as Ue,c as k,E as ve,au as ne,r as I,av as qe,Y as Ge,v as be,Q as X,aw as he,o as ie,ak as Ae,ax as M,af as F,V as Ne,a3 as Ke,a2 as Qe,F as ge,ay as Z,az as ye,aA as Ee,ai as Ye,aB as Ze,G as fe,aC as Je,aD as Xe,S as et,aE as tt,aF as nt,g as oe,n as ae,k as z,x as ot,t as V,aa as at,aG as Me,a as st,ag as lt,l as it,j as E,y as ut,s as rt,ap as ct,aH as dt}from"./index-IAXvUOsH.js";import{T as mt,b as Oe,i as Se,a as pt,c as ht}from"./space-JamSp4wB.js";import{u as ft,t as se,f as vt,m as bt}from"./index-WJd91LdX.js";/* empty css             *//* empty css                   */import{_ as G,h as gt,i as yt,j as Mt}from"./menu-item-2wf2eQsO.js";const ee=function(e,o,...t){let s;o.includes("mouse")||o.includes("click")?s="MouseEvents":o.includes("key")?s="KeyboardEvent":s="HTMLEvents";const n=document.createEvent(s);return n.initEvent(o,...t),e.dispatchEvent(n),e},kt=L({name:"ElCollapseTransition"}),_t=L(Ie(we({},kt),{setup(e){const o=A("collapse-transition"),t=n=>{n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom},s={beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom,n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},enterCancelled(n){t(n)},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight=`${n.scrollHeight}px`,n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){t(n)},leaveCancelled(n){t(n)}};return(n,b)=>(O(),K($e,Te({name:S(o).b()},Fe(s)),{default:w(()=>[B(n.$slots,"default")]),_:3},16,["name"]))}}));var te=le(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);te.install=e=>{e.component(te.name,te)};const xt=te;let wt=class{constructor(o,t){this.parent=o,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",s=>{let n=!1;switch(s.code){case $.down:{this.gotoSubIndex(this.subIndex+1),n=!0;break}case $.up:{this.gotoSubIndex(this.subIndex-1),n=!0;break}case $.tab:{ee(o,"mouseleave");break}case $.enter:case $.space:{n=!0,s.currentTarget.click();break}}return n&&(s.preventDefault(),s.stopPropagation()),!1})})}},It=class{constructor(o,t){this.domNode=o,this.submenu=null,this.submenu=null,this.init(t)}init(o){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${o}-menu`);t&&(this.submenu=new wt(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let t=!1;switch(o.code){case $.down:{ee(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case $.up:{ee(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case $.tab:{ee(o.currentTarget,"mouseleave");break}case $.enter:case $.space:{t=!0,o.currentTarget.click();break}}t&&o.preventDefault()})}},Ct=class{constructor(o,t){this.domNode=o,this.init(t)}init(o){const t=this.domNode.childNodes;Array.from(t).forEach(s=>{s.nodeType===1&&new It(s,o)})}};const Et=L({name:"ElMenuCollapseTransition",setup(){const e=A("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,s){Y(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",s()},onAfterEnter(t){de(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),Ue(t,e.m("collapse"))?(de(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Y(t,e.m("collapse"))):(Y(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),de(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){Y(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function St(e,o,t,s,n,b){return O(),K($e,Te({mode:"out-in"},e.listeners),{default:w(()=>[B(e.$slots,"default")]),_:3},16)}var Tt=le(Et,[["render",St],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Pe(e,o){const t=k(()=>{let n=e.parent;const b=[o.value];for(;n.type.name!=="ElMenu";)n.props.index&&b.unshift(n.props.index),n=n.parent;return b});return{parentMenu:k(()=>{let n=e.parent;for(;n&&!["ElMenu","ElSubMenu"].includes(n.type.name);)n=n.parent;return n}),indexPath:t}}function $t(e){return k(()=>{const t=e.backgroundColor;return t?new mt(t).shade(20).toString():""})}const ze=(e,o)=>{const t=A("menu");return k(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":$t(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},At=ve({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:Z},expandOpenIcon:{type:Z},collapseCloseIcon:{type:Z},collapseOpenIcon:{type:Z}}),J="ElSubMenu";var ke=L({name:J,props:At,setup(e,{slots:o,expose:t}){ft({from:"popper-append-to-body",replacement:"teleported",scope:J,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},k(()=>e.popperAppendToBody!==void 0));const s=ye(),{indexPath:n,parentMenu:b}=Pe(s,k(()=>e.index)),c=A("menu"),d=A("sub-menu"),a=ne("rootMenu");a||se(J,"can not inject root menu");const m=ne(`subMenu:${b.value.uid}`);m||se(J,"can not inject sub menu");const h=I({}),g=I({});let _;const C=I(!1),ue=I(),Q=I(null),D=k(()=>P.value==="horizontal"&&H.value?"bottom-start":"right-start"),j=k(()=>P.value==="horizontal"&&H.value||P.value==="vertical"&&!a.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?T.value?e.expandOpenIcon:e.expandCloseIcon:qe:e.collapseCloseIcon&&e.collapseOpenIcon?T.value?e.collapseOpenIcon:e.collapseCloseIcon:Ge),H=k(()=>m.level===0),U=k(()=>{var r;const p=(r=e.teleported)!=null?r:e.popperAppendToBody;return p===void 0?H.value:p}),re=k(()=>a.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),ce=k(()=>P.value==="horizontal"&&H.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),T=k(()=>a.openedMenus.includes(e.index)),q=k(()=>{let r=!1;return Object.values(h.value).forEach(p=>{p.active&&(r=!0)}),Object.values(g.value).forEach(p=>{p.active&&(r=!0)}),r}),P=k(()=>a.props.mode),R=be({index:e.index,indexPath:n,active:q}),W=ze(a.props,m.level+1),l=()=>{var r,p,f;return(f=(p=(r=Q.value)==null?void 0:r.popperRef)==null?void 0:p.popperInstanceRef)==null?void 0:f.destroy()},i=r=>{r||l()},u=()=>{a.props.menuTrigger==="hover"&&a.props.mode==="horizontal"||a.props.collapse&&a.props.mode==="vertical"||e.disabled||a.handleSubMenuClick({index:e.index,indexPath:n.value,active:q.value})},y=(r,p=e.showTimeout)=>{var f;r.type!=="focus"&&(a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"||e.disabled||(m.mouseInChild.value=!0,_==null||_(),{stop:_}=Ee(()=>{a.openMenu(e.index,n.value)},p),U.value&&((f=b.value.vnode.el)==null||f.dispatchEvent(new MouseEvent("mouseenter")))))},v=(r=!1)=>{var p,f;a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"||(_==null||_(),m.mouseInChild.value=!1,{stop:_}=Ee(()=>!C.value&&a.closeMenu(e.index,n.value),e.hideTimeout),U.value&&r&&((p=s.parent)==null?void 0:p.type.name)==="ElSubMenu"&&((f=m.handleMouseleave)==null||f.call(m,!0)))};X(()=>a.props.collapse,r=>i(!!r));{const r=f=>{g.value[f.index]=f},p=f=>{delete g.value[f.index]};he(`subMenu:${s.uid}`,{addSubMenu:r,removeSubMenu:p,handleMouseleave:v,mouseInChild:C,level:m.level+1})}return t({opened:T}),ie(()=>{a.addSubMenu(R),m.addSubMenu(R)}),Ae(()=>{m.removeSubMenu(R),a.removeSubMenu(R)}),()=>{var r;const p=[(r=o.title)==null?void 0:r.call(o),M(Ne,{class:d.e("icon-arrow"),style:{transform:T.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&a.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>F(j.value)?M(s.appContext.components[j.value]):M(j.value)})],f=a.isMenuPopup?M(Oe,{ref:Q,visible:T.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:D.value,teleported:U.value,fallbackPlacements:ce.value,transition:re.value,gpuAcceleration:!1},{content:()=>{var x;return M("div",{class:[c.m(P.value),c.m("popup-container"),e.popperClass],onMouseenter:N=>y(N,100),onMouseleave:()=>v(!0),onFocus:N=>y(N,100)},[M("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${D.value}`)],style:W.value},[(x=o.default)==null?void 0:x.call(o)])])},default:()=>M("div",{class:d.e("title"),onClick:u},p)}):M(ge,{},[M("div",{class:d.e("title"),ref:ue,onClick:u},p),M(xt,{},{default:()=>{var x;return Ke(M("ul",{role:"menu",class:[c.b(),c.m("inline")],style:W.value},[(x=o.default)==null?void 0:x.call(o)]),[[Qe,T.value]])}})]);return M("li",{class:[d.b(),d.is("active",q.value),d.is("opened",T.value),d.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:T.value,onMouseenter:y,onMouseleave:()=>v(!0),onFocus:y},[f])}}});const Nt=ve({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:fe(Array),default:()=>bt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),me=e=>Array.isArray(e)&&e.every(o=>F(o)),Ot={close:(e,o)=>F(e)&&me(o),open:(e,o)=>F(e)&&me(o),select:(e,o,t,s)=>F(e)&&me(o)&&Je(t)&&(s===void 0||s instanceof Promise)};var Pt=L({name:"ElMenu",props:Nt,emits:Ot,setup(e,{emit:o,slots:t,expose:s}){const n=ye(),b=n.appContext.config.globalProperties.$router,c=I(),d=A("menu"),a=A("sub-menu"),m=I(-1),h=I(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=I(e.defaultActive),_=I({}),C=I({}),ue=k(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Q=()=>{const l=g.value&&_.value[g.value];if(!l||e.mode==="horizontal"||e.collapse)return;l.indexPath.forEach(u=>{const y=C.value[u];y&&D(u,y.indexPath)})},D=(l,i)=>{h.value.includes(l)||(e.uniqueOpened&&(h.value=h.value.filter(u=>i.includes(u))),h.value.push(l),o("open",l,i))},j=l=>{const i=h.value.indexOf(l);i!==-1&&h.value.splice(i,1)},H=(l,i)=>{j(l),o("close",l,i)},U=({index:l,indexPath:i})=>{h.value.includes(l)?H(l,i):D(l,i)},re=l=>{(e.mode==="horizontal"||e.collapse)&&(h.value=[]);const{index:i,indexPath:u}=l;if(!(Se(i)||Se(u)))if(e.router&&b){const y=l.route||i,v=b.push(y).then(r=>(r||(g.value=i),r));o("select",i,u,{index:i,indexPath:u,route:y},v)}else g.value=i,o("select",i,u,{index:i,indexPath:u})},ce=l=>{const i=_.value,u=i[l]||g.value&&i[g.value]||i[e.defaultActive];u?g.value=u.index:g.value=l},T=()=>{var l,i;if(!c.value)return-1;const u=Array.from((i=(l=c.value)==null?void 0:l.childNodes)!=null?i:[]).filter(N=>N.nodeName!=="#comment"&&(N.nodeName!=="#text"||N.nodeValue)),y=64,v=Number.parseInt(getComputedStyle(c.value).paddingLeft,10),r=Number.parseInt(getComputedStyle(c.value).paddingRight,10),p=c.value.clientWidth-v-r;let f=0,x=0;return u.forEach((N,De)=>{f+=N.offsetWidth||0,f<=p-y&&(x=De+1)}),x===u.length?-1:x},q=(l,i=33.34)=>{let u;return()=>{u&&clearTimeout(u),u=setTimeout(()=>{l()},i)}};let P=!0;const R=()=>{const l=()=>{m.value=-1,et(()=>{m.value=T()})};P?l():q(l)(),P=!1};X(()=>e.defaultActive,l=>{_.value[l]||(g.value=""),ce(l)}),X(()=>e.collapse,l=>{l&&(h.value=[])}),X(_.value,Q);let W;Ye(()=>{e.mode==="horizontal"&&e.ellipsis?W=Xe(c,R).stop:W==null||W()});{const l=v=>{C.value[v.index]=v},i=v=>{delete C.value[v.index]};he("rootMenu",be({props:e,openedMenus:h,items:_,subMenus:C,activeIndex:g,isMenuPopup:ue,addMenuItem:v=>{_.value[v.index]=v},removeMenuItem:v=>{delete _.value[v.index]},addSubMenu:l,removeSubMenu:i,openMenu:D,closeMenu:H,handleMenuItemClick:re,handleSubMenuClick:U})),he(`subMenu:${n.uid}`,{addSubMenu:l,removeSubMenu:i,mouseInChild:I(!1),level:0})}return ie(()=>{e.mode==="horizontal"&&new Ct(n.vnode.el,d.namespace.value)}),s({open:i=>{const{indexPath:u}=C.value[i];u.forEach(y=>D(y,u))},close:j,handleResize:R}),()=>{var l,i;let u=(i=(l=t.default)==null?void 0:l.call(t))!=null?i:[];const y=[];if(e.mode==="horizontal"&&c.value){const p=vt(u),f=m.value===-1?p:p.slice(0,m.value),x=m.value===-1?[]:p.slice(m.value);x!=null&&x.length&&e.ellipsis&&(u=f,y.push(M(ke,{index:"sub-menu-more",class:a.e("hide-arrow")},{title:()=>M(Ne,{class:a.e("icon-more")},{default:()=>M(Ze)}),default:()=>x})))}const v=ze(e,0),r=M("ul",{key:String(e.collapse),role:"menubar",ref:c,style:v.value,class:{[d.b()]:!0,[d.m(e.mode)]:!0,[d.m("collapse")]:e.collapse}},[...u,...y]);return e.collapseTransition&&e.mode==="vertical"?M(Tt,()=>r):r}}});const zt=ve({index:{type:fe([String,null]),default:null},route:{type:fe([String,Object])},disabled:Boolean}),Bt={click:e=>F(e.index)&&Array.isArray(e.indexPath)},pe="ElMenuItem",Lt=L({name:pe,components:{ElTooltip:Oe},props:zt,emits:Bt,setup(e,{emit:o}){const t=ye(),s=ne("rootMenu"),n=A("menu"),b=A("menu-item");s||se(pe,"can not inject root menu");const{parentMenu:c,indexPath:d}=Pe(t,tt(e,"index")),a=ne(`subMenu:${c.value.uid}`);a||se(pe,"can not inject sub menu");const m=k(()=>e.index===s.activeIndex),h=be({index:e.index,indexPath:d,active:m}),g=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:d.value,route:e.route}),o("click",h))};return ie(()=>{a.addSubMenu(h),s.addMenuItem(h)}),Ae(()=>{a.removeSubMenu(h),s.removeMenuItem(h)}),{parentMenu:c,rootMenu:s,active:m,nsMenu:n,nsMenuItem:b,handleClick:g}}});function Dt(e,o,t,s,n,b){const c=nt("el-tooltip");return O(),oe("li",{class:ae([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...d)=>e.handleClick&&e.handleClick(...d))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(O(),K(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:w(()=>[B(e.$slots,"title")]),default:w(()=>[z("div",{class:ae(e.nsMenu.be("tooltip","trigger"))},[B(e.$slots,"default")],2)]),_:3},8,["effect"])):(O(),oe(ge,{key:1},[B(e.$slots,"default"),B(e.$slots,"title")],64))],2)}var Be=le(Lt,[["render",Dt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Ht={title:String},Rt="ElMenuItemGroup",jt=L({name:Rt,props:Ht,setup(){return{ns:A("menu-item-group")}}});function Wt(e,o,t,s,n,b){return O(),oe("li",{class:ae(e.ns.b())},[z("div",{class:ae(e.ns.e("title"))},[e.$slots.title?B(e.$slots,"title",{key:1}):(O(),oe(ge,{key:0},[ot(V(e.title),1)],64))],2),z("ul",null,[B(e.$slots,"default")])],2)}var Le=le(jt,[["render",Wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const ln=at(Pt,{MenuItem:Be,MenuItemGroup:Le,SubMenu:ke}),un=Me(Be);Me(Le);const rn=Me(ke),Vt={class:"!my-2 inline-block"},Ft={class:"ml-2"},Ut={class:"ml-2"},qt={class:"ml-2"},Gt={class:"ml-2"},cn=L({__name:"avatar-dropdown",setup(e){const o=st(),{isAuthenticated:t,user:s,logout:n,clearUser:b}=lt(),c=()=>{n().finally(()=>Ce(this,null,function*(){yield b().then(),yield o.push(rt.app.getLogoutSuccessUrl()).then()}))};return ie(()=>{it("Component - <<AvatarDropdown>> is mounted.")}),(d,a)=>{const m=pt,h=gt,g=yt,_=Mt;return O(),K(_,{placement:"bottom-end"},{dropdown:w(()=>[E(g,{style:{width:"250px"}},{default:w(()=>[S(t)?(O(),K(h,{key:0},{default:w(()=>[z("span",Vt,V(S(s).displayName),1)]),_:1})):ut("",!0),E(h,{divided:"",class:"!px-2",onClick:a[0]||(a[0]=C=>S(o).push("/user-center"))},{default:w(()=>[E(S(G),{icon:"mdi:account-circle-outline"}),z("span",Ft,V(d.$t("common.label_user_center")),1)]),_:1}),E(h,{class:"!px-2",onClick:a[1]||(a[1]=C=>S(o).push("/user-center"))},{default:w(()=>[E(S(G),{icon:"mdi:account-cog-outline"}),z("span",Ut,V(d.$t("common.label_account")),1)]),_:1}),E(h,{class:"!px-2",onClick:a[2]||(a[2]=C=>S(o).push("/user-center"))},{default:w(()=>[E(S(G),{icon:"mdi:lock-minus-outline"}),z("span",qt,V(d.$t("common.label_change_password")),1)]),_:1}),E(h,{divided:"",class:"!px-2",onClick:c},{default:w(()=>[E(S(G),{icon:"mdi:logout"}),z("span",Gt,V(d.$t("common.label_logout")),1)]),_:1})]),_:1})]),default:w(()=>[E(m,{circle:""},{icon:w(()=>[E(S(G),{icon:"mdi:account-outline"})]),_:1})]),_:1})}}}),Kt=e=>e.filter(o=>ht(o.enabled)||ct(o.enabled)||o.enabled).map(o=>Qt(o));function Qt(e){var t;const{t:o}=dt();return e.title=(t=e==null?void 0:e.title)!=null?t:o(e.label),e.items&&e.items.length&&e.items.length>0&&(e.items=Kt(e.items)),e}const dn=(e,o)=>e.filter(t=>{var s;return(s=t==null?void 0:t.items)==null?void 0:s.find(n=>n.path===o)}).map(t=>t.key),mn=e=>e.items&&e.items.length&&e.items.length>0,pn=[{key:"workbench",label:"common.label_workbench",icon:"mdi:view-dashboard-outline",authorities:["workbench"],path:"/workbench"},{key:"dashboard",label:"common.label_dashboard",icon:"mdi:view-dashboard-outline",authorities:["dashboard"],path:"/dashboard"},{key:"home",label:"common.site_management",icon:"mdi:apps",authorities:["site"],enabled:!0,items:[{key:"announcement-management",label:"common.announcement_management",icon:"mdi:bullhorn-outline",authorities:["site:announcement"],enabled:!0,path:"/announcement/index"},{key:"product-management",label:"common.product_management",icon:"mdi:map-outline",authorities:["site:product"],enabled:!1,path:"/product/index"}]},{key:"organization",label:"common.organization_management",icon:"mdi:account-group-outline",authorities:["organization"],items:[{key:"organization-organization",title:"Organization",icon:"mdiAccountMultiple",authorities:["organization:organization"],enabled:!1,path:"/organization/index"},{key:"organization-position",title:"Position",icon:"mdiAccountMultiple",authorities:["organization:position"],enabled:!1,path:"/position/index"},{key:"organization-user",label:"common.user_management",icon:"mdiAccountMultiple",authorities:["organization:user"],enabled:!0,path:"/user/index"},{key:"organization-group",title:"Group",icon:"mdiAccountMultiple",authorities:["organization:group"],enabled:!1,path:"/group/index"}]},{key:"resource",title:"Resource",icon:"mdiCogs",authorities:["resource"],enabled:!1,items:[{key:"resource-dictionary",title:"Dictionary",icon:"mdiAccountMultiple",authorities:["resource:dictionary"],enabled:!1,path:"/admin/dictionary/index"},{key:"resource-tag",title:"Tag",icon:"mdiAccountMultiple",authorities:["resource:tag"],enabled:!1,path:"/admin/tag/index"},{key:"resource:area",title:"Area",icon:"mdiAccountMultiple",authorities:["resource:area"],enabled:!1,path:"/admin/area/index"},{key:"resource-attachment",title:"Attachment",icon:"mdiAccountMultiple",authorities:["resource:attachment"],enabled:!1,path:"/admin/attachment/index"},{key:"resource-label",title:"Label",icon:"mdiAccountMultiple",authorities:["resource:label"],enabled:!1,path:"/admin/label/index"},{key:"resource-message",title:"Message",icon:"mdiAccountMultiple",authorities:["resource:message"],enabled:!1,path:"/admin/message/index"}]},{key:"system",title:"系统设置",icon:"mdi:cog-outline",authorities:["system"],enabled:!0,items:[{key:"system-authority",title:"AuthorityMiddleware",icon:"mdiAccountMultiple",authorities:["system:authority"],enabled:!1,path:"/admin/authority/index"},{key:"system-role",title:"RoleModel",icon:"mdiAccountMultiple",authorities:["system:role"],enabled:!1,path:"/admin/role/index"},{key:"system-setting",title:"System Settings",icon:"mdiAccountMultiple",authorities:["system:setting"],enabled:!1,path:"/admin/system/settings"},{key:"system-user",title:"On-Line UserModel",icon:"mdiAccountMultiple",authorities:["system:user"],enabled:!1,path:"/admin/on-line-user/index"},{key:"system-logging",title:"Logging",icon:"mdiAccountMultiple",authorities:["system:logging"],enabled:!1,path:"/admin/logging/index"},{key:"system-task",title:"Task",icon:"mdiAccountMultiple",authorities:["system:task"],enabled:!1,path:"/admin/task/index"},{key:"system-application",title:"ApplicationMiddleware",icon:"mdiAccountMultiple",authorities:["system:application"],enabled:!1,path:"/admin/application/index"},{key:"system-message",title:"消息管理",authorities:["system:message"],enabled:!0,path:"/message/notice/index"}]},{key:"tenant",title:"Tenant",icon:"mdiSitemap",authorities:["tenant"],enabled:!1,items:[{key:"tenant-tenant",title:"Tenant",icon:"mdiViewList",authorities:["tenant:tenant"],enabled:!1,path:"/admin/tenant/index"}]}],hn=[{key:"user-center",label:"common.user_pages_user_center_title",icon:"mdi:shield-account-outline",path:"/user-center"},{key:"user-profile",label:"common.user_label_my_notice",icon:"mdi:message-outline",path:"/user-center/profile"},{key:"user-profile",label:"common.user_label_my_profile",icon:"mdi:information-outline",path:"/user-center/profile"},{key:"user-account",label:"common.user_label_settings",icon:"mdi:information-outline",path:"/user-center/account"},{key:"user-password",label:"common.user_pages_change_password_title",icon:"mdi:information-outline",path:"/user-center/password"}];export{ln as E,cn as _,Kt as a,un as b,rn as c,dn as g,mn as h,pn as m,hn as u};
