System.register(["./index-legacy-e63f363a.js","./main-layout.vuevuetypestyleindex0scopedac135a6elang-legacy-9f36a8fe.js","./theme-color-select.vuevuetypestyleindex0scoped78f6b12elang-legacy-6d0f38a9.js","./dark-switch.vuevuetypescriptsetuptruelang-legacy-71101025.js","./button-legacy-97561911.js","./icon-legacy-9098078c.js","./plugin-vueexport-helper-legacy-762b7923.js"],(function(e,t){"use strict";var l,o,n,a,s,u,r,i,d,p,c,v,m,h,b,f,y,g,x,M,k,I,C,S,T,w,E,P,B,$,O,_,A,z,N,j,H,L,W,q,R,V,D,F,G,U,Y,Z,K,Q,X,J,ee,te,le,oe,ne,ae,se,ue,re,ie,de,pe,ce,ve,me,he,be;return{setters:[e=>{l=e.P,o=e.bg,n=e.d,a=e.U,s=e.f,u=e.g,r=e.w,i=e.Z,d=e.as,p=e.bh,c=e.j,v=e.b0,m=e.$,h=e.ag,b=e.bi,f=e.bj,y=e.bk,g=e.T,x=e.M,M=e.an,k=e.a0,I=e.r,C=e.ao,S=e.bl,T=e.c,w=e.V,E=e.W,P=e.o,B=e.a1,$=e.bm,O=e.Q,_=e.E,A=e.aX,z=e.aY,N=e.a4,j=e.aq,H=e.bn,L=e.O,W=e.bo,q=e.bp,R=e.a$,V=e.a3,D=e.a5,F=e.ai,G=e.ak,U=e.Y,Y=e.h,Z=e._,K=e.k,Q=e.t,X=e.ae,J=e.af,ee=e.u,te=e.i,le=e.aw,oe=e.ay,ne=e.az},e=>{ae=e.E,se=e.a,ue=e.b,re=e.c},e=>{ie=e.t,de=e.E,pe=e.m,ce=e.i},e=>{ve=e._},e=>{me=e.T,he=e.g},null,e=>{be=e._}],execute:function(){const t=function(e,t,...l){let o;o=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const n=document.createEvent(o);return n.initEvent(t,...l),e.dispatchEvent(n),e},fe=e=>{const t=l(e)?e:[e],n=[];return t.forEach((e=>{var t;l(e)?n.push(...fe(e)):o(e)&&l(e.children)?n.push(...fe(e.children)):(n.push(e),o(e)&&(null==(t=e.component)?void 0:t.subTree)&&n.push(...fe(e.component.subTree)))})),n},ye=n({name:"ElCollapseTransition"}),ge=n({...ye,setup(e){const t=a("collapse-transition"),l={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}};return(e,o)=>(s(),u(v,d({name:c(t).b()},p(l)),{default:r((()=>[i(e.$slots,"default")])),_:3},16,["name"]))}});var xe=m(ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);xe.install=e=>{e.component(xe.name,xe)};const Me=xe,ke=n({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,l){b(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",l()},onAfterEnter(t){f(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),y(t,e.m("collapse"))?(f(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),b(t,e.m("collapse"))):(b(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),f(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){b(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}});var Ie=m(ke,[["render",function(e,t,l,o,n,a){return s(),u(v,d({mode:"out-in"},e.listeners),{default:r((()=>[i(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Ce(e,t){const l=g((()=>{let l=e.parent;const o=[t.value];for(;"ElMenu"!==l.type.name;)l.props.index&&o.unshift(l.props.index),l=l.parent;return o}));return{parentMenu:g((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:l}}function Se(e){return g((()=>{const t=e.backgroundColor;return t?new me(t).shade(20).toString():""}))}const Te=(e,t)=>{const l=a("menu");return g((()=>l.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Se(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},we=x({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:M},expandOpenIcon:{type:M},collapseCloseIcon:{type:M},collapseOpenIcon:{type:M}}),Ee="ElSubMenu";var Pe=n({name:Ee,props:we,setup(e,{slots:t,expose:l}){he({from:"popper-append-to-body",replacement:"teleported",scope:Ee,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},g((()=>void 0!==e.popperAppendToBody)));const o=j(),{indexPath:n,parentMenu:s}=Ce(o,g((()=>e.index))),u=a("menu"),r=a("sub-menu"),i=k("rootMenu");i||ie(Ee,"can not inject root menu");const d=k(`subMenu:${s.value.uid}`);d||ie(Ee,"can not inject sub menu");const p=I({}),c=I({});let v;const m=I(!1),h=I(),b=I(null),f=g((()=>"horizontal"===G.value&&x.value?"bottom-start":"right-start")),y=g((()=>"horizontal"===G.value&&x.value||"vertical"===G.value&&!i.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?q.value?e.expandOpenIcon:e.expandCloseIcon:C:e.collapseCloseIcon&&e.collapseOpenIcon?q.value?e.collapseOpenIcon:e.collapseCloseIcon:S)),x=g((()=>0===d.level)),M=g((()=>{var t;const l=null!=(t=e.teleported)?t:e.popperAppendToBody;return void 0===l?x.value:l})),L=g((()=>i.props.collapse?`${u.namespace.value}-zoom-in-left`:`${u.namespace.value}-zoom-in-top`)),W=g((()=>"horizontal"===G.value&&x.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"])),q=g((()=>i.openedMenus.includes(e.index))),R=g((()=>{let e=!1;return Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),Object.values(c.value).forEach((t=>{t.active&&(e=!0)})),e})),V=g((()=>i.props.backgroundColor||"")),D=g((()=>i.props.activeTextColor||"")),F=g((()=>i.props.textColor||"")),G=g((()=>i.props.mode)),U=T({index:e.index,indexPath:n,active:R}),Y=Te(i.props,d.level+1),Z=g((()=>"horizontal"!==G.value?{color:F.value}:{borderBottomColor:R.value?i.props.activeTextColor?D.value:"":"transparent",color:R.value?D.value:F.value})),K=e=>{var t,l,o;e||null==(o=null==(l=null==(t=b.value)?void 0:t.popperRef)?void 0:l.popperInstanceRef)||o.destroy()},Q=()=>{"hover"===i.props.menuTrigger&&"horizontal"===i.props.mode||i.props.collapse&&"vertical"===i.props.mode||e.disabled||i.handleSubMenuClick({index:e.index,indexPath:n.value,active:R.value})},X=(t,l=e.showTimeout)=>{var o;"focus"!==t.type&&("click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||e.disabled||(d.mouseInChild.value=!0,null==v||v(),({stop:v}=H((()=>{i.openMenu(e.index,n.value)}),l)),M.value&&(null==(o=s.value.vnode.el)||o.dispatchEvent(new MouseEvent("mouseenter")))))},J=(t=!1)=>{var l,a;"click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||(null==v||v(),d.mouseInChild.value=!1,({stop:v}=H((()=>!m.value&&i.closeMenu(e.index,n.value)),e.hideTimeout)),M.value&&t&&"ElSubMenu"===(null==(l=o.parent)?void 0:l.type.name)&&(null==(a=d.handleMouseleave)||a.call(d,!0)))};w((()=>i.props.collapse),(e=>K(Boolean(e))));{const e=e=>{c.value[e.index]=e},t=e=>{delete c.value[e.index]};E(`subMenu:${o.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:J,mouseInChild:m,level:d.level+1})}return l({opened:q}),P((()=>{i.addSubMenu(U),d.addSubMenu(U)})),B((()=>{d.removeSubMenu(U),i.removeSubMenu(U)})),()=>{var l;const n=[null==(l=t.title)?void 0:l.call(t),$(_,{class:r.e("icon-arrow"),style:{transform:q.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&i.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>O(y.value)?$(o.appContext.components[y.value]):$(y.value)})],a=i.isMenuPopup?$(de,{ref:b,visible:q.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:f.value,teleported:M.value,fallbackPlacements:W.value,transition:L.value,gpuAcceleration:!1},{content:()=>{var l;return $("div",{class:[u.m(G.value),u.m("popup-container"),e.popperClass],onMouseenter:e=>X(e,100),onMouseleave:()=>J(!0),onFocus:e=>X(e,100)},[$("ul",{class:[u.b(),u.m("popup"),u.m(`popup-${f.value}`)],style:Y.value},[null==(l=t.default)?void 0:l.call(t)])])},default:()=>$("div",{class:r.e("title"),style:[Z.value,{backgroundColor:V.value}],onClick:Q},n)}):$(N,{},[$("div",{class:r.e("title"),style:[Z.value,{backgroundColor:V.value}],ref:h,onClick:Q},n),$(Me,{},{default:()=>{var e;return A($("ul",{role:"menu",class:[u.b(),u.m("inline")],style:Y.value},[null==(e=t.default)?void 0:e.call(t)]),[[z,q.value]])}})]);return $("li",{class:[r.b(),r.is("active",R.value),r.is("opened",q.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:q.value,onMouseenter:X,onMouseleave:()=>J(!0),onFocus:X},[a])}}});const Be=x({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:L(Array),default:()=>pe([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),$e=e=>Array.isArray(e)&&e.every((e=>O(e)));var Oe=n({name:"ElMenu",props:Be,emits:{close:(e,t)=>O(e)&&$e(t),open:(e,t)=>O(e)&&$e(t),select:(e,t,l,o)=>O(e)&&$e(t)&&R(l)&&(void 0===o||o instanceof Promise)},setup(e,{emit:l,slots:o,expose:n}){const s=j(),u=s.appContext.config.globalProperties.$router,r=I(),i=a("menu"),d=a("sub-menu"),p=I(-1),c=I(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),v=I(e.defaultActive),m=I({}),b=I({}),f=g((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),y=(t,o)=>{c.value.includes(t)||(e.uniqueOpened&&(c.value=c.value.filter((e=>o.includes(e)))),c.value.push(t),l("open",t,o))},x=e=>{const t=c.value.indexOf(e);-1!==t&&c.value.splice(t,1)},M=(e,t)=>{x(e),l("close",e,t)},k=({index:e,indexPath:t})=>{c.value.includes(e)?M(e,t):y(e,t)},C=t=>{("horizontal"===e.mode||e.collapse)&&(c.value=[]);const{index:o,indexPath:n}=t;if(!ce(o)&&!ce(n))if(e.router&&u){const e=t.route||o,a=u.push(e).then((e=>(e||(v.value=o),e)));l("select",o,n,{index:o,indexPath:n,route:e},a)}else v.value=o,l("select",o,n,{index:o,indexPath:n})};let S=!0;const B=()=>{const e=()=>{p.value=-1,D((()=>{p.value=(()=>{var e,t;if(!r.value)return-1;const l=Array.from(null!=(t=null==(e=r.value)?void 0:e.childNodes)?t:[]).filter((e=>"#text"!==e.nodeName||e.nodeValue)),o=Number.parseInt(getComputedStyle(r.value).paddingLeft,10),n=Number.parseInt(getComputedStyle(r.value).paddingRight,10),a=r.value.clientWidth-o-n;let s=0,u=0;return l.forEach(((e,t)=>{s+=e.offsetWidth||0,s<=a-64&&(u=t+1)})),u===l.length?-1:u})()}))};S?e():((e,t=33.34)=>{let l;return()=>{l&&clearTimeout(l),l=setTimeout((()=>{e()}),t)}})(e)(),S=!1};let O;w((()=>e.defaultActive),(t=>{m.value[t]||(v.value=""),(t=>{const l=m.value,o=l[t]||v.value&&l[v.value]||l[e.defaultActive];v.value=o?o.index:t})(t)})),w((()=>e.collapse),(e=>{e&&(c.value=[])})),w(m.value,(()=>{const t=v.value&&m.value[v.value];t&&"horizontal"!==e.mode&&!e.collapse&&t.indexPath.forEach((e=>{const t=b.value[e];t&&y(e,t.indexPath)}))})),W((()=>{"horizontal"===e.mode&&e.ellipsis?O=V(r,B).stop:null==O||O()}));{const t=e=>{b.value[e.index]=e},l=e=>{delete b.value[e.index]},o=e=>{m.value[e.index]=e},n=e=>{delete m.value[e.index]};E("rootMenu",T({props:e,openedMenus:c,items:m,subMenus:b,activeIndex:v,isMenuPopup:f,addMenuItem:o,removeMenuItem:n,addSubMenu:t,removeSubMenu:l,openMenu:y,closeMenu:M,handleMenuItemClick:C,handleSubMenuClick:k})),E(`subMenu:${s.uid}`,{addSubMenu:t,removeSubMenu:l,mouseInChild:I(!1),level:0})}return P((()=>{"horizontal"===e.mode&&new class{constructor(e,t){this.domNode=e,this.init(t)}init(e){const l=this.domNode.childNodes;Array.from(l).forEach((l=>{1===l.nodeType&&new class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const l=this.domNode.querySelector(`.${e}-menu`);l&&(this.submenu=new class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const e=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(l=>{l.addEventListener("keydown",(l=>{let o=!1;switch(l.code){case h.down:this.gotoSubIndex(this.subIndex+1),o=!0;break;case h.up:this.gotoSubIndex(this.subIndex-1),o=!0;break;case h.tab:t(e,"mouseleave");break;case h.enter:case h.space:o=!0,l.currentTarget.click()}return o&&(l.preventDefault(),l.stopPropagation()),!1}))}))}}(this,l)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(e=>{let l=!1;switch(e.code){case h.down:t(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),l=!0;break;case h.up:t(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),l=!0;break;case h.tab:t(e.currentTarget,"mouseleave");break;case h.enter:case h.space:l=!0,e.currentTarget.click()}l&&e.preventDefault()}))}}(l,e)}))}}(s.vnode.el,i.namespace.value)})),n({open:e=>{const{indexPath:t}=b.value[e];t.forEach((e=>y(e,t)))},close:x,handleResize:B}),()=>{var t,l;let n=null!=(l=null==(t=o.default)?void 0:t.call(o))?l:[];const a=[];if("horizontal"===e.mode&&r.value){const t=fe(n),l=-1===p.value?t:t.slice(0,p.value),o=-1===p.value?[]:t.slice(p.value);(null==o?void 0:o.length)&&e.ellipsis&&(n=l,a.push($(Pe,{index:"sub-menu-more",class:d.e("hide-arrow")},{title:()=>$(_,{class:d.e("icon-more")},{default:()=>$(q)}),default:()=>o})))}const s=Te(e,0),u=$("ul",{key:String(e.collapse),role:"menubar",ref:r,style:s.value,class:{[i.b()]:!0,[i.m(e.mode)]:!0,[i.m("collapse")]:e.collapse}},[...n,...a]);return e.collapseTransition&&"vertical"===e.mode?$(Ie,(()=>u)):u}}});const _e=x({index:{type:L([String,null]),default:null},route:{type:L([String,Object])},disabled:Boolean}),Ae="ElMenuItem",ze=n({name:Ae,components:{ElTooltip:de},props:_e,emits:{click:e=>O(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const l=j(),o=k("rootMenu"),n=a("menu"),s=a("menu-item");o||ie(Ae,"can not inject root menu");const{parentMenu:u,indexPath:r}=Ce(l,F(e,"index")),i=k(`subMenu:${u.value.uid}`);i||ie(Ae,"can not inject sub menu");const d=g((()=>e.index===o.activeIndex)),p=T({index:e.index,indexPath:r,active:d});return P((()=>{i.addSubMenu(p),o.addMenuItem(p)})),B((()=>{i.removeSubMenu(p),o.removeMenuItem(p)})),{parentMenu:u,rootMenu:o,active:d,nsMenu:n,nsMenuItem:s,handleClick:()=>{e.disabled||(o.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",p))}}}});var Ne=m(ze,[["render",function(e,t,l,o,n,a){const d=G("el-tooltip");return s(),U("li",{class:Z([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(s(),u(d,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:r((()=>[i(e.$slots,"title")])),default:r((()=>[Y("div",{class:Z(e.nsMenu.be("tooltip","trigger"))},[i(e.$slots,"default")],2)])),_:3},8,["effect"])):(s(),U(N,{key:1},[i(e.$slots,"default"),i(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const je=n({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})});var He=m(je,[["render",function(e,t,l,o,n,a){return s(),U("li",{class:Z(e.ns.b())},[Y("div",{class:Z(e.ns.e("title"))},[e.$slots.title?i(e.$slots,"title",{key:1}):(s(),U(N,{key:0},[K(Q(e.title),1)],64))],2),Y("ul",null,[i(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Le=X(Oe,{MenuItem:Ne,MenuItemGroup:He,SubMenu:Pe}),We=J(Ne);J(He),J(Pe);const qe=[{key:"home",label:"home",link:"/"},{key:"product",label:"product",link:"/product"},{key:"announcement",label:"announcement",link:"/announcement"},{key:"about",label:"about",link:"/about"}],Re={class:"main-layout-navbar"},Ve=(e=>(oe("data-v-ac135a6e"),e=e(),ne(),e))((()=>Y("div",{class:"main-layout-logo"},[Y("div",{class:"logo"},[Y("span",null,"Application")])],-1))),De={class:"main-layout-nav"};e("default",be(n({__name:"main-layout",setup(e){const{t:t}=ee(),l=g((()=>qe.map((e=>({key:e.key,label:t(e.label),path:e.link})))));return P((()=>{})),(e,t)=>{const o=We,n=Le,a=ae,i=G("router-view"),d=se,p=ue,v=re;return s(),u(v,{class:"main-layout"},{default:r((()=>[te(a,{class:"main-layout-header"},{default:r((()=>[Y("div",Re,[Ve,Y("div",De,[te(n,{class:"main-layout-menu",mode:"horizontal",ellipsis:!1,router:!0},{default:r((()=>[(s(!0),U(N,null,le(c(l),(e=>(s(),u(o,{key:e.key,index:e.path},{default:r((()=>[K(Q(e.label),1)])),_:2},1032,["index"])))),128))])),_:1}),te(c(ve))])])])),_:1}),te(d,{class:"main-layout-content"},{default:r((()=>[te(i)])),_:1}),te(p,{class:"main-layout-footer"},{default:r((()=>[K("Copyright@2022")])),_:1})])),_:1})}}}),[["__scopeId","data-v-ac135a6e"]]))}}}));