System.register(["./index-legacy-1b70f568.js"],(function(e,t){"use strict";var n,r,i,a,o,d,c,v,s,g,l,m,u,p,_,x,b,f,h,z=document.createElement("style");return z.textContent=".van-grid{display:flex;flex-wrap:wrap}:root{--van-grid-item-content-padding: var(--van-padding-md) var(--van-padding-xs);--van-grid-item-content-background: var(--van-background-2);--van-grid-item-content-active-color: var(--van-active-color);--van-grid-item-icon-size: 28px;--van-grid-item-text-color: var(--van-text-color);--van-grid-item-text-font-size: var(--van-font-size-sm)}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:var(--van-grid-item-icon-size)}.van-grid-item__text{color:var(--van-grid-item-text-color);font-size:var(--van-grid-item-text-font-size);line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:var(--van-padding-xs)}.van-grid-item__content{display:flex;flex-direction:column;box-sizing:border-box;height:100%;padding:var(--van-grid-item-content-padding);background:var(--van-grid-item-content-background)}.van-grid-item__content:after{z-index:1;border-width:0 var(--van-border-width) var(--van-border-width) 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{align-items:center;justify-content:center}.van-grid-item__content--horizontal{flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__text{margin:0 0 0 var(--van-padding-xs)}.van-grid-item__content--reverse{flex-direction:column-reverse}.van-grid-item__content--reverse .van-grid-item__text{margin:0 0 var(--van-padding-xs)}.van-grid-item__content--horizontal.van-grid-item__content--reverse{flex-direction:row-reverse}.van-grid-item__content--horizontal.van-grid-item__content--reverse .van-grid-item__text{margin:0 var(--van-padding-xs) 0 0}.van-grid-item__content--surround:after{border-width:var(--van-border-width)}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:var(--van-grid-item-content-active-color)}\n",document.head.appendChild(z),{setters:[e=>{n=e.c,r=e.d,i=e.u,a=e.f,o=e.T,d=e.b6,c=e.t,v=e.n,s=e.ak,g=e.w,l=e.aa,m=e.aI,u=e.af,p=e.aJ,_=e.B,x=e.b7,b=e.a1,f=e.aU,h=e.O}],execute:function(){const[t,z]=n("grid"),k={square:Boolean,center:c,border:c,gutter:v,reverse:Boolean,iconSize:v,direction:String,clickable:Boolean,columnNum:s(4)},w=Symbol(t);var y=r({name:t,props:k,setup(e,{slots:t}){const{linkChildren:n}=i(w);return n({props:e}),()=>{var n;return a("div",{style:{paddingLeft:o(e.gutter)},class:[z(),{[d]:e.border&&!e.gutter}]},[null==(n=t.default)?void 0:n.call(t)])}}});e("a",g(y));const[S,q]=n("grid-item"),P=l({},m,{dot:Boolean,text:String,icon:String,badge:v,iconColor:String,iconPrefix:String,badgeProps:Object});var B=r({name:S,props:P,setup(e,{slots:t}){const{parent:n,index:r}=u(w),i=p();if(!n)return;const d=_((()=>{const{square:e,gutter:t,columnNum:i}=n.props,a=100/+i+"%",d={flexBasis:a};if(e)d.paddingTop=a;else if(t){const e=o(t);d.paddingRight=e,r.value>=i&&(d.marginTop=e)}return d})),c=_((()=>{const{square:e,gutter:t}=n.props;if(e&&t){const e=o(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:r,border:o,square:v,gutter:s,reverse:g,direction:l,clickable:m}=n.props,u=[q("content",[l,{center:r,square:v,reverse:g,clickable:m,surround:o&&s}]),{[x]:o}];return a("div",{class:[q({square:v})],style:d.value},[a("div",{role:m?"button":void 0,class:u,style:c.value,tabindex:m?0:void 0,onClick:i},[t.default?t.default():[t.icon?a(f,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?a(h,{dot:e.dot,name:e.icon,size:n.props.iconSize,badge:e.badge,class:q("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?a("span",{class:q("text")},[e.text]):void 0]])])}}});e("G",g(B))}}}));
