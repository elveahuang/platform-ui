import{ac as q,ak as U,d as X,ab as J,a8 as r,r as Q,bS as Y,aF as Z,ag as ee,c as I,aG as oe,aH as ne,bT as te,aI as ae,h as i,cw as le,a9 as k,b3 as se,a3 as f,a0 as ie,a4 as j,cx as re,cy as z,G as ce,cz as ue,a_ as pe}from"./index-pnIAAE5C.js";import{P as de}from"./index-7vmSXy0P.js";import{t as fe,k as me}from"./index-JesWGt6T.js";import{u as ve}from"./useMergedState-mUeLCElB.js";const ge=o=>{const{componentCls:l,iconCls:t,zIndexPopup:a,colorText:s,colorWarning:C,marginXS:p,fontSize:c,fontWeightStrong:x,lineHeight:d}=o;return{[l]:{zIndex:a,[`${l}-inner-content`]:{color:s},[`${l}-message`]:{position:"relative",marginBottom:p,color:s,fontSize:c,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${l}-message-icon ${t}`]:{color:C,fontSize:c,flex:"none",lineHeight:1,paddingTop:(Math.round(c*d)-c)/2},"&-title":{flex:"auto",marginInlineStart:p},"&-title-only":{fontWeight:x}},[`${l}-description`]:{position:"relative",marginInlineStart:c+p,marginBottom:p,color:s,fontSize:c},[`${l}-buttons`]:{textAlign:"end",button:{marginInlineStart:p}}}}},ye=q("Popconfirm",o=>ge(o),o=>{const{zIndexPopupBase:l}=o;return{zIndexPopup:l+60}});var Ce=function(o,l){var t={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&l.indexOf(a)<0&&(t[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(o);s<a.length;s++)l.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(o,a[s])&&(t[a[s]]=o[a[s]]);return t};const xe=()=>r(r({},me()),{prefixCls:String,content:f(),title:f(),description:f(),okType:ie("primary"),disabled:{type:Boolean,default:!1},okText:f(),cancelText:f(),icon:f(),okButtonProps:j(),cancelButtonProps:j(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),Pe=X({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:J(xe(),r(r({},fe()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(o,l){let{slots:t,emit:a,expose:s,attrs:C}=l;const p=Q();Y(o.visible===void 0),s({getPopupDomNode:()=>{var e,n;return(n=(e=p.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||n===void 0?void 0:n.call(e)}});const[c,x]=ve(!1,{value:Z(o,"open")}),d=(e,n)=>{o.open===void 0&&x(e),a("update:open",e),a("openChange",e,n)},D=e=>{d(!1,e)},T=e=>{var n;return(n=o.onConfirm)===null||n===void 0?void 0:n.call(o,e)},A=e=>{var n;d(!1,e),(n=o.onCancel)===null||n===void 0||n.call(o,e)},E=e=>{e.keyCode===pe.ESC&&c&&d(!1,e)},F=e=>{const{disabled:n}=o;n||d(e)},{prefixCls:u,getPrefixCls:O}=ee("popconfirm",o),R=I(()=>O()),H=I(()=>O("btn")),[L]=ye(u),[S]=oe("Popconfirm",ne.Popconfirm),V=()=>{var e,n,m,v,g;const{okButtonProps:y,cancelButtonProps:P,title:b=(e=t.title)===null||e===void 0?void 0:e.call(t),description:_=(n=t.description)===null||n===void 0?void 0:n.call(t),cancelText:W=(m=t.cancel)===null||m===void 0?void 0:m.call(t),okText:K=(v=t.okText)===null||v===void 0?void 0:v.call(t),okType:h,icon:w=((g=t.icon)===null||g===void 0?void 0:g.call(t))||i(re,null,null),showCancel:M=!0}=o,{cancelButton:B,okButton:N}=t,$=r({onClick:A,size:"small"},P),G=r(r(r({onClick:T},z(h)),{size:"small"}),y);return i("div",{class:`${u.value}-inner-content`},[i("div",{class:`${u.value}-message`},[w&&i("span",{class:`${u.value}-message-icon`},[w]),i("div",{class:[`${u.value}-message-title`,{[`${u.value}-message-title-only`]:!!_}]},[b])]),_&&i("div",{class:`${u.value}-description`},[_]),i("div",{class:`${u.value}-buttons`},[M?B?B($):i(ce,$,{default:()=>[W||S.value.cancelText]}):null,N?N(G):i(ue,{buttonProps:r(r({size:"small"},z(h)),y),actionFn:T,close:D,prefixCls:H.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[K||S.value.okText]})])])};return()=>{var e;const{placement:n,overlayClassName:m,trigger:v="click"}=o,g=Ce(o,["placement","overlayClassName","trigger"]),y=te(g,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),P=ae(u.value,m);return L(i(de,k(k(k({},y),C),{},{trigger:v,placement:n,onOpenChange:F,open:c.value,overlayClassName:P,transitionName:se(R.value,"zoom-big",o.transitionName),ref:p,"data-popover-inject":!0}),{default:()=>[le(((e=t.default)===null||e===void 0?void 0:e.call(t))||[],{onKeydown:b=>{E(b)}},!1)],content:V}))}}}),Oe=U(Pe);export{Oe as _};
