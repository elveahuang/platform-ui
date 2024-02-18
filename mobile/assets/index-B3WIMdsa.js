import{e as y,m as f,n as $,d as w,r as D,b2 as A,I,f as L,C as N,j as p,b as c,aW as B,O as C,a_ as M,t as R,y as U}from"./index-Ca7YfF0C.js";const[Y,r,j]=y("pull-refresh"),x=50,F=["pulling","loosing","success"],G={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:$,successDuration:f(500),animationDuration:f(300)};var O=w({name:Y,props:G,emits:["change","refresh","update:modelValue"],setup(s,{emit:d,slots:o}){let u;const g=D(),T=D(),H=A(g),e=I({status:"normal",distance:0,duration:0}),i=L(),P=()=>{if(s.headHeight!==x)return{height:`${s.headHeight}px`}},h=()=>e.status!=="loading"&&e.status!=="success"&&!s.disabled,b=t=>{const a=+(s.pullDistance||s.headHeight);return t>a&&(t<a*2?t=a+(t-a)/2:t=a*1.5+(t-a*2)/4),Math.round(t)},n=(t,a)=>{const l=+(s.pullDistance||s.headHeight);e.distance=t,a?e.status="loading":t===0?e.status="normal":t<l?e.status="pulling":e.status="loosing",d("change",{status:e.status,distance:t})},m=()=>{const{status:t}=e;return t==="normal"?"":s[`${t}Text`]||j(t)},k=()=>{const{status:t,distance:a}=e;if(o[t])return o[t]({distance:a});const l=[];return F.includes(t)&&l.push(c("div",{class:r("text")},[m()])),t==="loading"&&l.push(c(B,{class:r("loading")},{default:m})),l},E=()=>{e.status="success",setTimeout(()=>{n(0)},+s.successDuration)},v=t=>{u=M(H.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{h()&&v(t)},_=t=>{if(h()){u||v(t);const{deltaY:a}=i;i.move(t),u&&a.value>=0&&i.isVertical()&&(R(t),n(b(a.value)))}},S=()=>{u&&i.deltaY.value&&h()&&(e.duration=+s.animationDuration,e.status==="loosing"?(n(+s.headHeight,!0),d("update:modelValue",!0),C(()=>d("refresh"))):n(0))};return N(()=>s.modelValue,t=>{e.duration=+s.animationDuration,t?n(+s.headHeight,!0):o.success||s.successText?E():n(0,!1)}),p("touchmove",_,{target:T}),()=>{var t;const a={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return c("div",{ref:g,class:r()},[c("div",{ref:T,class:r("track"),style:a,onTouchstartPassive:V,onTouchend:S,onTouchcancel:S},[c("div",{class:r("head"),style:P()},[k()]),(t=o.default)==null?void 0:t.call(o)])])}}});const X=U(O);export{X as P};
