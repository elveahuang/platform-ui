import{e as _,m as f,n as $,d as w,r as D,bi as A,ab as L,f as N,C as p,j as B,b as c,ba as C,aS as I,be as M,t as R,y as U}from"./index-BsckSs91.js";const[Y,r,j]=_("pull-refresh"),x=50,F=["pulling","loosing","success"],G={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:$,successDuration:f(500),animationDuration:f(300)};var X=w({name:Y,props:G,emits:["change","refresh","update:modelValue"],setup(s,{emit:d,slots:o}){let u;const g=D(),T=D(),H=A(g),e=L({status:"normal",distance:0,duration:0}),i=N(),b=()=>{if(s.headHeight!==x)return{height:`${s.headHeight}px`}},h=()=>e.status!=="loading"&&e.status!=="success"&&!s.disabled,P=t=>{const a=+(s.pullDistance||s.headHeight);return t>a&&(t<a*2?t=a+(t-a)/2:t=a*1.5+(t-a*2)/4),Math.round(t)},n=(t,a)=>{const l=+(s.pullDistance||s.headHeight);e.distance=t,a?e.status="loading":t===0?e.status="normal":t<l?e.status="pulling":e.status="loosing",d("change",{status:e.status,distance:t})},m=()=>{const{status:t}=e;return t==="normal"?"":s[`${t}Text`]||j(t)},k=()=>{const{status:t,distance:a}=e;if(o[t])return o[t]({distance:a});const l=[];return F.includes(t)&&l.push(c("div",{class:r("text")},[m()])),t==="loading"&&l.push(c(C,{class:r("loading")},{default:m})),l},E=()=>{e.status="success",setTimeout(()=>{n(0)},+s.successDuration)},v=t=>{u=M(H.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{h()&&v(t)},y=t=>{if(h()){u||v(t);const{deltaY:a}=i;i.move(t),u&&a.value>=0&&i.isVertical()&&(R(t),n(P(a.value)))}},S=()=>{u&&i.deltaY.value&&h()&&(e.duration=+s.animationDuration,e.status==="loosing"?(n(+s.headHeight,!0),d("update:modelValue",!0),I(()=>d("refresh"))):n(0))};return p(()=>s.modelValue,t=>{e.duration=+s.animationDuration,t?n(+s.headHeight,!0):o.success||s.successText?E():n(0,!1)}),B("touchmove",y,{target:T}),()=>{var t;const a={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return c("div",{ref:g,class:r()},[c("div",{ref:T,class:r("track"),style:a,onTouchstartPassive:V,onTouchend:S,onTouchcancel:S},[c("div",{class:r("head"),style:b()},[k()]),(t=o.default)==null?void 0:t.call(o)])])}}});const z=U(X);export{z as P};
