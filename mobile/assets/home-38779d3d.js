var H=(e,r,i)=>new Promise((f,l)=>{var t=o=>{try{u(i.next(o))}catch(d){l(d)}},g=o=>{try{u(i.throw(o))}catch(d){l(d)}},u=o=>o.done?f(o.value):Promise.resolve(o.value).then(t,g);u((i=i.apply(e,r)).next())});import{m as J,d as L,j as D,f as ce,a1 as Le,n as Me,U as x,p as Q,a9 as A,aC as ze,aD as Oe,aE as Ne,g as Z,aF as Fe,aG as we,aH as Ve,aI as je,a4 as be,h as s,s as W,q as de,a6 as Y,aJ as E,ap as ve,ac as ye,v as ke,_ as ne,y as ee,a2 as We,aK as Ye,aL as He,aM as Xe,C as oe,ao as he,aN as qe,Y as Ke,Z as Ie,a7 as me,ad as ge,ae as Ue,l as Ce,o as B,b as _e,w as b,c as q,F as K,r as ie,u as U,Q as G,t as Ge,e as Je,aO as Qe,I as pe,a as F}from"./index-eaaf9806.js";/* empty css              *//* empty css              */import{I as Ze}from"./index-6968fbc2.js";import"./index-b0a9572a.js";import{f as xe,u as et,F as tt,C as at,S as nt,R as ot,B as it}from"./index-65e687be.js";/* empty css                                                         */import{a as ct}from"./announcement-884c3f19.js";import{S as st}from"./index-cefbd342.js";import"./use-route-e45c23a3.js";const[Se,X]=J("swipe"),lt={loop:W,width:de,height:de,vertical:Boolean,autoplay:Y(0),duration:Y(500),touchable:W,lazyRender:Boolean,initialSwipe:Y(0),indicatorColor:String,showIndicators:W,stopPropagation:W},Te=Symbol(Se);var rt=L({name:Se,props:lt,emits:["change","dragStart","dragEnd"],setup(e,{emit:r,slots:i}){const f=D(),l=D(),t=ce({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let g=!1;const u=Le(),{children:o,linkChildren:d}=Me(Te),c=x(()=>o.length),v=x(()=>t[e.vertical?"height":"width"]),p=x(()=>e.vertical?u.deltaY.value:u.deltaX.value),y=x(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-v.value*c.value:0),C=x(()=>v.value?Math.ceil(Math.abs(y.value)/v.value):c.value),w=x(()=>c.value*v.value),h=x(()=>(t.active+c.value)%c.value),S=x(()=>{const a=e.vertical?"vertical":"horizontal";return u.direction.value===a}),T=x(()=>{const a={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(v.value){const _=e.vertical?"height":"width",m=e.vertical?"width":"height";a[_]=`${w.value}px`,a[m]=e[m]?`${e[m]}px`:""}return a}),M=a=>{const{active:_}=t;return a?e.loop?ne(_+a,-1,c.value):ne(_+a,0,C.value):_},P=(a,_=0)=>{let m=a*v.value;e.loop||(m=Math.min(m,-y.value));let I=_-m;return e.loop||(I=ne(I,y.value,0)),I},n=({pace:a=0,offset:_=0,emitChange:m})=>{if(c.value<=1)return;const{active:I}=t,k=M(a),N=P(k,_);if(e.loop){if(o[0]&&N!==y.value){const ae=N<y.value;o[0].setOffset(ae?w.value:0)}if(o[c.value-1]&&N!==0){const ae=N>0;o[c.value-1].setOffset(ae?-w.value:0)}}t.active=k,t.offset=N,m&&k!==I&&r("change",h.value)},R=()=>{t.swiping=!0,t.active<=-1?n({pace:c.value}):t.active>=c.value&&n({pace:-c.value})},te=()=>{R(),u.reset(),E(()=>{t.swiping=!1,n({pace:-1,emitChange:!0})})},se=()=>{R(),u.reset(),E(()=>{t.swiping=!1,n({pace:1,emitChange:!0})})};let le;const z=()=>clearTimeout(le),O=()=>{z(),+e.autoplay>0&&c.value>1&&(le=setTimeout(()=>{se(),O()},+e.autoplay))},$=(a=+e.initialSwipe)=>{if(!f.value)return;const _=()=>{var m,I;if(!ve(f)){const k={width:f.value.offsetWidth,height:f.value.offsetHeight};t.rect=k,t.width=+((m=e.width)!=null?m:k.width),t.height=+((I=e.height)!=null?I:k.height)}c.value&&(a=Math.min(c.value-1,a),a===-1&&(a=c.value-1)),t.active=a,t.swiping=!0,t.offset=P(a),o.forEach(k=>{k.setOffset(0)}),O()};ve(f)?ye().then(_):_()},re=()=>$(t.active);let ue;const $e=a=>{!e.touchable||a.touches.length>1||(u.start(a),g=!1,ue=Date.now(),z(),R())},Ae=a=>{e.touchable&&t.swiping&&(u.move(a),S.value&&(!e.loop&&(t.active===0&&p.value>0||t.active===c.value-1&&p.value<0)||(ke(a,e.stopPropagation),n({offset:p.value}),g||(r("dragStart",{index:h.value}),g=!0))))},fe=()=>{if(!e.touchable||!t.swiping)return;const a=Date.now()-ue,_=p.value/a;if((Math.abs(_)>.25||Math.abs(p.value)>v.value/2)&&S.value){const I=e.vertical?u.offsetY.value:u.offsetX.value;let k=0;e.loop?k=I>0?p.value>0?-1:1:0:k=-Math[p.value>0?"ceil":"floor"](p.value/v.value),n({pace:k,emitChange:!0})}else p.value&&n({pace:0});g=!1,t.swiping=!1,r("dragEnd",{index:h.value}),O()},Ee=(a,_={})=>{R(),u.reset(),E(()=>{let m;e.loop&&a===c.value?m=t.active===0?0:a:m=a%c.value,_.immediate?E(()=>{t.swiping=!1}):t.swiping=!1,n({pace:m-t.active,emitChange:!0})})},Be=(a,_)=>{const m=_===h.value,I=m?{backgroundColor:e.indicatorColor}:void 0;return s("i",{style:I,class:X("indicator",{active:m})},null)},De=()=>{if(i.indicator)return i.indicator({active:h.value,total:c.value});if(e.showIndicators&&c.value>1)return s("div",{class:X("indicators",{vertical:e.vertical})},[Array(c.value).fill("").map(Be)])};return Q({prev:te,next:se,state:t,resize:re,swipeTo:Ee}),d({size:v,props:e,count:c,activeIndicator:h}),A(()=>e.initialSwipe,a=>$(+a)),A(c,()=>$(t.active)),A(()=>e.autoplay,O),A([ze,Oe,()=>e.width,()=>e.height],re),A(Ne(),a=>{a==="visible"?O():z()}),Z($),Fe(()=>$(t.active)),we(()=>$(t.active)),Ve(z),je(z),be("touchmove",Ae,{target:l}),()=>{var a;return s("div",{ref:f,class:X()},[s("div",{ref:l,style:T.value,class:X("track",{vertical:e.vertical}),onTouchstartPassive:$e,onTouchend:fe,onTouchcancel:fe},[(a=i.default)==null?void 0:a.call(i)]),De()])}}});const Pe=ee(rt),[ut,ft]=J("swipe-item");var dt=L({name:ut,setup(e,{slots:r}){let i;const f=ce({offset:0,inited:!1,mounted:!1}),{parent:l,index:t}=We(Te);if(!l)return;const g=x(()=>{const d={},{vertical:c}=l.props;return l.size.value&&(d[c?"height":"width"]=`${l.size.value}px`),f.offset&&(d.transform=`translate${c?"Y":"X"}(${f.offset}px)`),d}),u=x(()=>{const{loop:d,lazyRender:c}=l.props;if(!c||i)return!0;if(!f.mounted)return!1;const v=l.activeIndicator.value,p=l.count.value-1,y=v===0&&d?p:v-1,C=v===p&&d?0:v+1;return i=t.value===v||t.value===y||t.value===C,i}),o=d=>{f.offset=d};return Z(()=>{ye(()=>{f.mounted=!0})}),Q({setOffset:o}),()=>{var d;return s("div",{class:ft(),style:g.value},[u.value?(d=r.default)==null?void 0:d.call(r):null])}}});const Re=ee(dt),[vt,V]=J("notice-bar"),ht={text:String,mode:String,color:String,delay:Y(1),speed:Y(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var mt=L({name:vt,props:ht,emits:["close","replay"],setup(e,{emit:r,slots:i}){let f=0,l=0,t;const g=D(),u=D(),o=ce({show:!0,offset:0,duration:0}),d=()=>{if(i["left-icon"])return i["left-icon"]();if(e.leftIcon)return s(oe,{class:V("left-icon"),name:e.leftIcon},null)},c=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},v=h=>{e.mode==="closeable"&&(o.show=!1,r("close",h))},p=()=>{if(i["right-icon"])return i["right-icon"]();const h=c();if(h)return s(oe,{name:h,class:V("right-icon"),onClick:v},null)},y=()=>{o.offset=f,o.duration=0,qe(()=>{E(()=>{o.offset=-l,o.duration=(l+f)/+e.speed,r("replay")})})},C=()=>{const h=e.scrollable===!1&&!e.wrapable,S={transform:o.offset?`translateX(${o.offset}px)`:"",transitionDuration:`${o.duration}s`};return s("div",{ref:g,role:"marquee",class:V("wrap")},[s("div",{ref:u,style:S,class:[V("content"),{"van-ellipsis":h}],onTransitionend:y},[i.default?i.default():e.text])])},w=()=>{const{delay:h,speed:S,scrollable:T}=e,M=Ke(h)?+h*1e3:0;f=0,l=0,o.offset=0,o.duration=0,clearTimeout(t),t=setTimeout(()=>{if(!g.value||!u.value||T===!1)return;const P=he(g).width,n=he(u).width;(T||n>P)&&E(()=>{f=P,l=n,o.offset=-l,o.duration=l/+S})},M)};return we(w),Ye(w),be("pageshow",w),Q({reset:w}),A(()=>[e.text,e.scrollable],w),()=>{const{color:h,wrapable:S,background:T}=e;return He(s("div",{role:"alert",class:V({wrapable:S}),style:{color:h,background:T}},[d(),C(),p()]),[[Xe,o.show]])}}});const gt=ee(mt),[_t,j,pt]=J("search"),wt=Ie({},xe,{label:String,shape:me("square"),leftIcon:me("search"),clearable:W,actionText:String,background:String,showAction:Boolean});var bt=L({name:_t,props:wt,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:r,slots:i,attrs:f}){const l=et(),t=D(),g=()=>{i.action||(r("update:modelValue",""),r("cancel"))},u=n=>{n.keyCode===13&&(ke(n),r("search",e.modelValue))},o=()=>e.id||`${l}-input`,d=()=>{if(i.label||e.label)return s("label",{class:j("label"),for:o()},[i.label?i.label():e.label])},c=()=>{if(e.showAction){const n=e.actionText||pt("cancel");return s("div",{class:j("action"),role:"button",tabindex:0,onClick:g},[i.action?i.action():n])}},v=()=>{var n;return(n=t.value)==null?void 0:n.blur()},p=()=>{var n;return(n=t.value)==null?void 0:n.focus()},y=n=>r("blur",n),C=n=>r("focus",n),w=n=>r("clear",n),h=n=>r("clickInput",n),S=n=>r("clickLeftIcon",n),T=n=>r("clickRightIcon",n),M=Object.keys(xe),P=()=>{const n=Ie({},f,ge(e,M),{id:o()}),R=te=>r("update:modelValue",te);return s(tt,Ue({ref:t,type:"search",class:j("field",{"with-message":n.errorMessage}),border:!1,onBlur:y,onFocus:C,onClear:w,onKeypress:u,onClickInput:h,onClickLeftIcon:S,onClickRightIcon:T,"onUpdate:modelValue":R},n),ge(i,["left-icon","right-icon"]))};return Q({focus:p,blur:v}),()=>{var n;return s("div",{class:j({"show-action":e.showAction}),style:{background:e.background}},[(n=i.left)==null?void 0:n.call(i),s("div",{class:j("content",e.shape)},[d(),P()]),c()])}}});const yt=ee(bt),kt=L({__name:"announcement-new",setup(e){const r=D([]),i=()=>{Je.push({path:"/announcement/index"})},f=()=>H(this,null,function*(){const l=yield ct({page:1,size:5});console.log(l),l.code=="200"&&(r.value=l.data.content)});return Z(()=>H(this,null,function*(){Ce("Page <<AnnouncementDetailsPage>> mounted."),f().then()})),(l,t)=>{const g=Re,u=Pe,o=gt;return B(),_e(o,{"left-icon":"volume-o",scrollable:!1,mode:"link",onClick:i},{default:b(()=>[s(u,{class:"custom-swipe",vertical:"",autoplay:3e3,touchable:!1,"show-indicators":!1},{default:b(()=>[(B(!0),q(K,null,ie(U(r),d=>(B(),_e(g,{key:d.id},{default:b(()=>[G(Ge(d.title),1)]),_:2},1024))),128))]),_:1})]),_:1})}}}),It="/platform-ui-vue/mobile/assets/1-39c4f371.jpeg",Ct="/platform-ui-vue/mobile/assets/2-fade683f.jpeg",xt="/platform-ui-vue/mobile/assets/3-8ab82bda.jpeg",St="/platform-ui-vue/mobile/assets/4-ffd21e42.jpeg";const Tt=()=>Qe("/api/v1/home"),Pt={class:"m-4"},Rt={class:"my-4"},$t={class:"m-8 text-center"},jt=L({__name:"home",setup(e){const r=[{id:1,img:It},{id:2,img:Ct},{id:3,img:xt},{id:4,img:St}],i=f=>{alert(f)};return Z(()=>H(this,null,function*(){Ce("Page <<HomePage>> mounted."),Tt().then()})),(f,l)=>{const t=yt,g=at,u=oe,o=nt,d=ot,c=st,v=Ze,p=Re,y=Pe,C=it;return B(),q(K,null,[s(c,null,{default:b(()=>[s(d,{justify:"center",align:"center",class:"app-header"},{default:b(()=>[s(g,{span:"20"},{default:b(()=>[s(t,{shape:"round"})]),_:1}),s(g,{span:"4"},{default:b(()=>[s(o,{class:"flex align-middle"},{default:b(()=>[s(u,{size:"24",onClick:i},{default:b(()=>[s(U(pe),{icon:"mdi:account-circle-outline"})]),_:1}),s(u,{size:"24",onClick:i},{default:b(()=>[s(U(pe),{icon:"mdi:account-circle-outline"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),F("div",Pt,[s(y,{autoplay:3e3,"lazy-render":"","show-indicators":!1},{default:b(()=>[(B(),q(K,null,ie(r,w=>s(p,{class:"aspect-[16/9] w-full",key:w.id},{default:b(()=>[s(v,{fit:"fill",position:"top",class:"aspect-[16/9] w-full",radius:5,alt:"IMG",src:w.img},null,8,["src"])]),_:2},1024)),64))]),_:1})]),F("div",Rt,[s(U(kt))]),F("div",null,[F("div",$t,[s(C,{type:"primary",to:"/login"},{default:b(()=>[G("Login")]),_:1}),s(C,{type:"primary",to:"/announcement/index"},{default:b(()=>[G("Announcement")]),_:1})]),(B(),q(K,null,ie(100,w=>F("div",{key:w},[s(C,{type:"primary",to:"/login"},{default:b(()=>[G("Login")]),_:1})])),64))])],64)}}});export{jt as default};
