import{c as e,d as t,u as o,f as s,U as r,b7 as a,t as n,n as i,al as c,w as l,ab as d,aJ as u,ag as g,aK as p,B as b,b8 as f,a2 as v,aV as x,Q as m}from"./index-cb371d87.js";const[S,P]=e("grid"),q={square:Boolean,center:n,border:n,gutter:i,reverse:Boolean,iconSize:i,direction:String,clickable:Boolean,columnNum:c(4)},B=Symbol(S);const h=l(t({name:S,props:q,setup(e,{slots:t}){const{linkChildren:n}=o(B);return n({props:e}),()=>{var o;return s("div",{style:{paddingLeft:r(e.gutter)},class:[P(),{[a]:e.border&&!e.gutter}]},[null==(o=t.default)?void 0:o.call(t)])}}})),[k,y]=e("grid-item");const C=l(t({name:k,props:d({},u,{dot:Boolean,text:String,icon:String,badge:i,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:o,index:a}=g(B),n=p();if(!o)return;const i=b((()=>{const{square:e,gutter:t,columnNum:s}=o.props,n=100/+s+"%",i={flexBasis:n};if(e)i.paddingTop=n;else if(t){const e=r(t);i.paddingRight=e,a.value>=+s&&(i.marginTop=e)}return i})),c=b((()=>{const{square:e,gutter:t}=o.props;if(e&&t){const e=r(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:r,border:a,square:l,gutter:d,reverse:u,direction:g,clickable:p}=o.props,b=[y("content",[g,{center:r,square:l,reverse:u,clickable:p,surround:a&&d}]),{[f]:a}];return s("div",{class:[y({square:l})],style:i.value},[s("div",{role:p?"button":void 0,class:b,style:c.value,tabindex:p?0:void 0,onClick:n},[t.default?t.default():[t.icon?s(x,v({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?s(m,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:y("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?s("span",{class:y("text")},[e.text]):void 0]])])}}}));export{C as G,h as a};
