var K=Object.defineProperty;var G=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);var w=(e,t,n)=>new Promise((l,i)=>{var f=s=>{try{o(n.next(s))}catch(r){i(r)}},g=s=>{try{o(n.throw(s))}catch(r){i(r)}},o=s=>s.done?l(s.value):Promise.resolve(s.value).then(f,g);o((n=n.apply(e,t)).next())});import{a4 as J,e as V,m as y,a5 as O,a6 as W,d as z,r as P,a7 as N,f as X,W as $,a8 as Q,o as U,a9 as Z,i as A,b as u,aa as I,k as C,ab as ee,ac as F,x as L,n as te,D as M,u as ae,q as ne,ad as oe,ae as se,l as B,a as ie,c as le,w as H,J as re,E as ce,af as de,K as ue}from"./index-r_gE4c3h.js";/* empty css              *//* empty css                                                                 *//* empty css              */import{t as fe}from"./toNumber-trfczVns.js";import{_ as ge}from"./_plugin-vue_export-helper-x3n3nnut.js";const he=Symbol(),me=()=>J(he,null),[ve,p,Te]=V("list"),xe={error:Boolean,offset:y(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:O("down"),loadingText:String,finishedText:String,immediateCheck:W};var pe=z({name:ve,props:xe,emits:["load","update:error","update:loading"],setup(e,{emit:t,slots:n}){const l=P(e.loading),i=P(),f=P(),g=me(),o=N(i),s=X(()=>e.scroller||o.value),r=()=>{I(()=>{if(l.value||e.finished||e.disabled||e.error||(g==null?void 0:g.value)===!1)return;const{direction:d}=e,T=+e.offset,v=C(s);if(!v.height||ee(i))return;let b=!1;const E=C(f);d==="up"?b=v.top-E.top<=T:b=E.bottom-v.bottom<=T,b&&(l.value=!0,t("update:loading",!0),t("load"))})},m=()=>{if(e.finished){const d=n.finished?n.finished():e.finishedText;if(d)return u("div",{class:p("finished-text")},[d])}},D=()=>{t("update:error",!1),r()},h=()=>{if(e.error){const d=n.error?n.error():e.errorText;if(d)return u("div",{role:"button",class:p("error-text"),tabindex:0,onClick:D},[d])}},k=()=>{if(l.value&&!e.finished&&!e.disabled)return u("div",{class:p("loading")},[n.loading?n.loading():u(F,{class:p("loading-icon")},{default:()=>[e.loadingText||Te("loading")]})])};return $(()=>[e.loading,e.finished,e.error],r),g&&$(g,d=>{d&&r()}),Q(()=>{l.value=e.loading}),U(()=>{e.immediateCheck&&r()}),Z({check:r}),A("scroll",r,{target:s,passive:!0}),()=>{var d;const T=(d=n.default)==null?void 0:d.call(n),v=u("div",{ref:f,class:p("placeholder")},null);return u("div",{ref:i,role:"feed",class:p(),"aria-busy":l.value},[e.direction==="down"?T:v,k(),m(),h(),e.direction==="up"?T:v])}}});const De=L(pe),[be,_,Se]=V("pull-refresh"),Y=50,_e=["pulling","loosing","success"],Pe={disabled:Boolean,modelValue:Boolean,headHeight:y(Y),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:te,successDuration:y(500),animationDuration:y(300)};var ke=z({name:be,props:Pe,emits:["change","refresh","update:modelValue"],setup(e,{emit:t,slots:n}){let l;const i=P(),f=P(),g=N(i),o=M({status:"normal",distance:0,duration:0}),s=ae(),r=()=>{if(e.headHeight!==Y)return{height:`${e.headHeight}px`}},m=()=>o.status!=="loading"&&o.status!=="success"&&!e.disabled,D=a=>{const c=+(e.pullDistance||e.headHeight);return a>c&&(a<c*2?a=c+(a-c)/2:a=c*1.5+(a-c*2)/4),Math.round(a)},h=(a,c)=>{const S=+(e.pullDistance||e.headHeight);o.distance=a,c?o.status="loading":a===0?o.status="normal":a<S?o.status="pulling":o.status="loosing",t("change",{status:o.status,distance:a})},k=()=>{const{status:a}=o;return a==="normal"?"":e[`${a}Text`]||Se(a)},d=()=>{const{status:a,distance:c}=o;if(n[a])return n[a]({distance:c});const S=[];return _e.includes(a)&&S.push(u("div",{class:_("text")},[k()])),a==="loading"&&S.push(u(F,{class:_("loading")},{default:k})),S},T=()=>{o.status="success",setTimeout(()=>{h(0)},+e.successDuration)},v=a=>{l=oe(g.value)===0,l&&(o.duration=0,s.start(a))},b=a=>{m()&&v(a)},E=a=>{if(m()){l||v(a);const{deltaY:c}=s;s.move(a),l&&c.value>=0&&s.isVertical()&&(ne(a),h(D(c.value)))}},R=()=>{l&&s.deltaY.value&&m()&&(o.duration=+e.animationDuration,o.status==="loosing"?(h(+e.headHeight,!0),t("update:modelValue",!0),I(()=>t("refresh"))):h(0))};return $(()=>e.modelValue,a=>{o.duration=+e.animationDuration,a?h(+e.headHeight,!0):n.success||e.successText?T():h(0,!1)}),A("touchmove",E,{target:f}),()=>{var a;const c={transitionDuration:`${o.duration}ms`,transform:o.distance?`translate3d(0,${o.distance}px, 0)`:""};return u("div",{ref:i,class:_()},[u("div",{ref:f,class:_("track"),style:c,onTouchstartPassive:b,onTouchend:R,onTouchcancel:R},[u("div",{class:_("head"),style:r()},[d()]),(a=n.default)==null?void 0:a.call(n)])])}}});const Ee=L(ke);let j=class{constructor(){x(this,"refreshing",!1);x(this,"loading",!1);x(this,"finished",!1);x(this,"pagination",{page:1,size:10,total:0});x(this,"items",[])}};const q=(e={page:1,size:12})=>{const t=new j;return e.page>0&&(t.pagination.page=e.page),e.size>0&&(t.pagination.size=e.size),t},He=(e,t,n)=>{var l,i,f,g,o,s,r;if((l=t==null?void 0:t.data)!=null&&l.content.length)for(const m of t.data.content)n&&se(n)?e.items.push(n(m)):e.items.push(m);return e.pagination.page=((f=(i=t==null?void 0:t.data)==null?void 0:i.pageable)==null?void 0:f.pageNumber)+1,e.pagination.size=(o=(g=t==null?void 0:t.data)==null?void 0:g.pageable)==null?void 0:o.pageSize,e.pagination.total=fe((s=t==null?void 0:t.data)==null?void 0:s.totalElements),e.loading=!1,e.refreshing=!1,(r=t==null?void 0:t.data)!=null&&r.last&&(e.finished=!0),e},ye=e=>(e.loading=!0,e.refreshing&&(e.items=[]),{page:e.pagination.page<=0?1:e.pagination.page+1,size:e.pagination.size}),Ae=()=>({initialize:q,handleResult:He,handleParams:ye}),Be=z({__name:"DataList",props:{model:{type:j,require:!0,default:()=>q()},offset:{type:Number,default:100},refreshDisabled:{type:Boolean,default:!1},loadDisabled:{type:Boolean,default:!1}},emits:["getDataList"],setup(e,{emit:t}){const n=t,i=M(e.model),f=()=>{B("onLoad..."),i.refreshing&&(i.pagination.page=1,i.finished=!1,i.loading=!1),n("getDataList")},g=()=>{B("onRefresh..."),f()};return U(()=>w(this,null,function*(){B("Component <<DataList>> mounted.")})),(o,s)=>{const r=ue,m=De,D=Ee;return ie(),le(D,{"model-value":i.refreshing,"onUpdate:modelValue":s[1]||(s[1]=h=>i.refreshing=h),onRefresh:g,disabled:e.refreshDisabled},{loading:H(()=>[u(r,null,{default:H(()=>[u(ce(re),{icon:"ep:loading"})]),_:1})]),default:H(()=>[u(m,{loading:i.loading,"onUpdate:loading":s[0]||(s[0]=h=>i.loading=h),finished:i.finished,offset:e.offset,onLoad:f},{default:H(()=>[de(o.$slots,"default",{},void 0,!0)]),_:3},8,["loading","finished","offset"])]),_:3},8,["model-value","disabled"])}}}),Ie=ge(Be,[["__scopeId","data-v-ef0e2366"]]);export{Ie as D,Ae as u};