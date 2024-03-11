import{ac as q,ak as U,d as X,ab as J,a8 as r,r as Q,bM as Y,aF as Z,ag as ee,c as I,aG as oe,aH as ne,bN as te,aI as ae,h as i,cr as le,a9 as k,b3 as se,a3 as f,a0 as ie,a4 as j,cs as re,ct as z,G as ce,cu as ue,a_ as pe}from"./index-DmTi9gH0.js";import{P as de}from"./index-CTezoTxf.js";import{t as fe,k as me}from"./index-BHA-otaK.js";import{u as ve}from"./useMergedState-1dDlk8rH.js";const ge=o=>{const{componentCls:l,iconCls:t,zIndexPopup:a,colorText:s,colorWarning:y,marginXS:p,fontSize:c,fontWeightStrong:P,lineHeight:d}=o;return{[l]:{zIndex:a,[`${l}-inner-content`]:{color:s},[`${l}-message`]:{position:"relative",marginBottom:p,color:s,fontSize:c,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${l}-message-icon ${t}`]:{color:y,fontSize:c,flex:"none",lineHeight:1,paddingTop:(Math.round(c*d)-c)/2},"&-title":{flex:"auto",marginInlineStart:p},"&-title-only":{fontWeight:P}},[`${l}-description`]:{position:"relative",marginInlineStart:c+p,marginBottom:p,color:s,fontSize:c},[`${l}-buttons`]:{textAlign:"end",button:{marginInlineStart:p}}}}},Ce=q("Popconfirm",o=>ge(o),o=>{const{zIndexPopupBase:l}=o;return{zIndexPopup:l+60}});var ye=function(o,l){var t={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&l.indexOf(a)<0&&(t[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(o);s<a.length;s++)l.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(o,a[s])&&(t[a[s]]=o[a[s]]);return t};const Pe=()=>r(r({},me()),{prefixCls:String,content:f(),title:f(),description:f(),okType:ie("primary"),disabled:{type:Boolean,default:!1},okText:f(),cancelText:f(),icon:f(),okButtonProps:j(),cancelButtonProps:j(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),xe=X({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:J(Pe(),r(r({},fe()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(o,l){let{slots:t,emit:a,expose:s,attrs:y}=l;const p=Q();Y(o.visible===void 0),s({getPopupDomNode:()=>{var e,n;return(n=(e=p.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||n===void 0?void 0:n.call(e)}});const[c,P]=ve(!1,{value:Z(o,"open")}),d=(e,n)=>{o.open===void 0&&P(e),a("update:open",e),a("openChange",e,n)},D=e=>{d(!1,e)},T=e=>{var n;return(n=o.onConfirm)===null||n===void 0?void 0:n.call(o,e)},A=e=>{var n;d(!1,e),(n=o.onCancel)===null||n===void 0||n.call(o,e)},E=e=>{e.keyCode===pe.ESC&&c&&d(!1,e)},F=e=>{const{disabled:n}=o;n||d(e)},{prefixCls:u,getPrefixCls:O}=ee("popconfirm",o),R=I(()=>O()),H=I(()=>O("btn")),[L]=Ce(u),[h]=oe("Popconfirm",ne.Popconfirm),M=()=>{var e,n,m,v,g;const{okButtonProps:C,cancelButtonProps:x,title:b=(e=t.title)===null||e===void 0?void 0:e.call(t),description:_=(n=t.description)===null||n===void 0?void 0:n.call(t),cancelText:V=(m=t.cancel)===null||m===void 0?void 0:m.call(t),okText:W=(v=t.okText)===null||v===void 0?void 0:v.call(t),okType:S,icon:B=((g=t.icon)===null||g===void 0?void 0:g.call(t))||i(re,null,null),showCancel:K=!0}=o,{cancelButton:N,okButton:w}=t,$=r({onClick:A,size:"small"},x),G=r(r(r({onClick:T},z(S)),{size:"small"}),C);return i("div",{class:`${u.value}-inner-content`},[i("div",{class:`${u.value}-message`},[B&&i("span",{class:`${u.value}-message-icon`},[B]),i("div",{class:[`${u.value}-message-title`,{[`${u.value}-message-title-only`]:!!_}]},[b])]),_&&i("div",{class:`${u.value}-description`},[_]),i("div",{class:`${u.value}-buttons`},[K?N?N($):i(ce,$,{default:()=>[V||h.value.cancelText]}):null,w?w(G):i(ue,{buttonProps:r(r({size:"small"},z(S)),C),actionFn:T,close:D,prefixCls:H.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[W||h.value.okText]})])])};return()=>{var e;const{placement:n,overlayClassName:m,trigger:v="click"}=o,g=ye(o,["placement","overlayClassName","trigger"]),C=te(g,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),x=ae(u.value,m);return L(i(de,k(k(k({},C),y),{},{trigger:v,placement:n,onOpenChange:F,open:c.value,overlayClassName:x,transitionName:se(R.value,"zoom-big",o.transitionName),ref:p,"data-popover-inject":!0}),{default:()=>[le(((e=t.default)===null||e===void 0?void 0:e.call(t))||[],{onKeydown:b=>{E(b)}},!1)],content:M}))}}}),Oe=U(xe);export{Oe as _};
