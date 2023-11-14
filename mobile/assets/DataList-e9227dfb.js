var G=Object.defineProperty;var K=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var v=(e,t,a)=>(K(e,typeof t!="symbol"?t+"":t,a),a);var R=(e,t,a)=>new Promise((r,o)=>{var u=s=>{try{i(a.next(s))}catch(l){o(l)}},g=s=>{try{i(a.throw(s))}catch(l){o(l)}},i=s=>s.done?r(s.value):Promise.resolve(s.value).then(u,g);i((a=a.apply(e,t)).next())});import{a4 as Q,e as C,m as $,a5 as X,a6 as J,d as I,r as y,a7 as V,f as Z,W as H,a8 as ee,o as U,a9 as te,i as O,b as f,aa as M,k as w,ab as ae,ac as j,x as F,n as ne,D as L,u as ie,q as se,ad as oe,ae as re,af as N,ag as le,l as k,a as ce,c as de,w as E,E as fe,Q as ue,M as ge,R as he}from"./index-b8efec62.js";/* empty css              *//* empty css                                                                 *//* empty css              */import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";const Te=Symbol(),pe=()=>Q(Te,null),[ve,x,xe]=C("list"),be={error:Boolean,offset:$(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:X("down"),loadingText:String,finishedText:String,immediateCheck:J};var De=I({name:ve,props:be,emits:["load","update:error","update:loading"],setup(e,{emit:t,slots:a}){const r=y(e.loading),o=y(),u=y(),g=pe(),i=V(o),s=Z(()=>e.scroller||i.value),l=()=>{M(()=>{if(r.value||e.finished||e.disabled||e.error||(g==null?void 0:g.value)===!1)return;const{direction:d}=e,p=+e.offset,T=w(s);if(!T.height||ae(o))return;let D=!1;const B=w(u);d==="up"?D=T.top-B.top<=p:D=B.bottom-T.bottom<=p,D&&(r.value=!0,t("update:loading",!0),t("load"))})},m=()=>{if(e.finished){const d=a.finished?a.finished():e.finishedText;if(d)return f("div",{class:x("finished-text")},[d])}},b=()=>{t("update:error",!1),l()},h=()=>{if(e.error){const d=a.error?a.error():e.errorText;if(d)return f("div",{role:"button",class:x("error-text"),tabindex:0,onClick:b},[d])}},P=()=>{if(r.value&&!e.finished&&!e.disabled)return f("div",{class:x("loading")},[a.loading?a.loading():f(j,{class:x("loading-icon")},{default:()=>[e.loadingText||xe("loading")]})])};return H(()=>[e.loading,e.finished,e.error],l),g&&H(g,d=>{d&&l()}),ee(()=>{r.value=e.loading}),U(()=>{e.immediateCheck&&l()}),te({check:l}),O("scroll",l,{target:s,passive:!0}),()=>{var d;const p=(d=a.default)==null?void 0:d.call(a),T=f("div",{ref:u,class:x("placeholder")},null);return f("div",{ref:o,role:"feed",class:x(),"aria-busy":r.value},[e.direction==="down"?p:T,P(),m(),h(),e.direction==="up"?p:T])}}});const Se=F(De),[_e,_,ye]=C("pull-refresh"),Y=50,Pe=["pulling","loosing","success"],Be={disabled:Boolean,modelValue:Boolean,headHeight:$(Y),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:ne,successDuration:$(500),animationDuration:$(300)};var Ee=I({name:_e,props:Be,emits:["change","refresh","update:modelValue"],setup(e,{emit:t,slots:a}){let r;const o=y(),u=y(),g=V(o),i=L({status:"normal",distance:0,duration:0}),s=ie(),l=()=>{if(e.headHeight!==Y)return{height:`${e.headHeight}px`}},m=()=>i.status!=="loading"&&i.status!=="success"&&!e.disabled,b=n=>{const c=+(e.pullDistance||e.headHeight);return n>c&&(n<c*2?n=c+(n-c)/2:n=c*1.5+(n-c*2)/4),Math.round(n)},h=(n,c)=>{const S=+(e.pullDistance||e.headHeight);i.distance=n,c?i.status="loading":n===0?i.status="normal":n<S?i.status="pulling":i.status="loosing",t("change",{status:i.status,distance:n})},P=()=>{const{status:n}=i;return n==="normal"?"":e[`${n}Text`]||ye(n)},d=()=>{const{status:n,distance:c}=i;if(a[n])return a[n]({distance:c});const S=[];return Pe.includes(n)&&S.push(f("div",{class:_("text")},[P()])),n==="loading"&&S.push(f(j,{class:_("loading")},{default:P})),S},p=()=>{i.status="success",setTimeout(()=>{h(0)},+e.successDuration)},T=n=>{r=oe(g.value)===0,r&&(i.duration=0,s.start(n))},D=n=>{m()&&T(n)},B=n=>{if(m()){r||T(n);const{deltaY:c}=s;s.move(n),r&&c.value>=0&&s.isVertical()&&(se(n),h(b(c.value)))}},z=()=>{r&&s.deltaY.value&&m()&&(i.duration=+e.animationDuration,i.status==="loosing"?(h(+e.headHeight,!0),t("update:modelValue",!0),M(()=>t("refresh"))):h(0))};return H(()=>e.modelValue,n=>{i.duration=+e.animationDuration,n?h(+e.headHeight,!0):a.success||e.successText?p():h(0,!1)}),O("touchmove",B,{target:u}),()=>{var n;const c={transitionDuration:`${i.duration}ms`,transform:i.distance?`translate3d(0,${i.distance}px, 0)`:""};return f("div",{ref:o,class:_()},[f("div",{ref:u,class:_("track"),style:c,onTouchstartPassive:D,onTouchend:z,onTouchcancel:z},[f("div",{class:_("head"),style:l()},[d()]),(n=a.default)==null?void 0:n.call(a)])])}}});const $e=F(Ee);var ke=/\s/;function He(e){for(var t=e.length;t--&&ke.test(e.charAt(t)););return t}var Ie=/^\s+/;function ze(e){return e&&e.slice(0,He(e)+1).replace(Ie,"")}var A=0/0,Re=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Ae=parseInt;function Ce(e){if(typeof e=="number")return e;if(re(e))return A;if(N(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=N(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ze(e);var a=we.test(e);return a||Ne.test(e)?Ae(e.slice(2),a?2:8):Re.test(e)?A:+e}let q=class{constructor(){v(this,"refreshing",!1);v(this,"loading",!1);v(this,"finished",!1);v(this,"pagination",{page:1,size:10,total:0});v(this,"items",[])}};const W=(e={page:1,size:12})=>{const t=new q;return e.page>0&&(t.pagination.page=e.page),e.size>0&&(t.pagination.size=e.size),t},Ve=(e,t,a)=>{var r,o,u,g,i,s,l;if((r=t==null?void 0:t.data)!=null&&r.content.length)for(const m of t.data.content)a&&le(a)?e.items.push(a(m)):e.items.push(m);return e.pagination.page=((u=(o=t==null?void 0:t.data)==null?void 0:o.pageable)==null?void 0:u.pageNumber)+1,e.pagination.size=(i=(g=t==null?void 0:t.data)==null?void 0:g.pageable)==null?void 0:i.pageSize,e.pagination.total=Ce((s=t==null?void 0:t.data)==null?void 0:s.totalElements),e.loading=!1,e.refreshing=!1,(l=t==null?void 0:t.data)!=null&&l.last&&(e.finished=!0),e},Ue=e=>(e.loading=!0,e.refreshing&&(e.items=[]),{page:e.pagination.page<=0?1:e.pagination.page+1,size:e.pagination.size}),Ge=()=>({initialize:W,handleResult:Ve,handleParams:Ue}),Oe=I({__name:"DataList",props:{model:{type:q,require:!0,default:()=>W()},offset:{type:Number,default:100},refreshDisabled:{type:Boolean,default:!1},loadDisabled:{type:Boolean,default:!1}},emits:["getDataList"],setup(e,{emit:t}){const a=t,o=L(e.model),u=()=>{k("onLoad..."),o.refreshing&&(o.pagination.page=1,o.finished=!1,o.loading=!1),a("getDataList")},g=()=>{k("onRefresh..."),u()};return U(()=>R(this,null,function*(){k("Component <<DataList>> mounted.")})),(i,s)=>{const l=he,m=Se,b=$e;return ce(),de(b,{"model-value":o.refreshing,"onUpdate:modelValue":s[1]||(s[1]=h=>o.refreshing=h),onRefresh:g,disabled:e.refreshDisabled},{loading:E(()=>[f(l,null,{default:E(()=>[f(fe(ue),{icon:"ep:loading"})]),_:1})]),default:E(()=>[f(m,{loading:o.loading,"onUpdate:loading":s[0]||(s[0]=h=>o.loading=h),finished:o.finished,offset:e.offset,onLoad:u},{default:E(()=>[ge(i.$slots,"default",{},void 0,!0)]),_:3},8,["loading","finished","offset"])]),_:3},8,["model-value","disabled"])}}}),Ke=me(Oe,[["__scopeId","data-v-ef0e2366"]]);export{Ke as D,Ge as u};
