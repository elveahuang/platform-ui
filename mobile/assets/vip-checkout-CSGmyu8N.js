var U=(n,c,o)=>new Promise((r,g)=>{var x=u=>{try{y(o.next(u))}catch(h){g(h)}},v=u=>{try{y(o.throw(u))}catch(h){g(h)}},y=u=>u.done?r(u.value):Promise.resolve(u.value).then(x,v);y((o=o.apply(n,c)).next())});import{e as Q,ao as le,aR as re,am as $,aS as ue,al as E,aT as pe,d as H,b as e,U as de,aU as me,af as ve,ae as W,aV as _e,aW as fe,O as be,y as X,m as he,r as T,aX as ge,a5 as ye,a6 as Ce,g as D,o as ke,l as Se,a as m,c as A,w as p,u as l,R as O,F as L,Q as N,$ as G,a1 as F,H as _,a3 as Te,a0 as xe,V as S,aO as we}from"./index-Dg6krunW.js";/* empty css              *//* empty css                                                              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{N as Ae}from"./index-B7K4zIpN.js";import{C as Be,a as Ie}from"./core.service-EHN00aWy.js";import{A as M}from"./index-8x4MoJQq.js";import{_ as Pe}from"./AppIcon.vue_vue_type_script_setup_true_lang-P6EICWmI.js";import{v as Le,p as Oe,T as $e,a as Ne}from"./mall-2HNWyd9d.js";import{S as Ve}from"./index-BzL8c2d_.js";import{C as Re}from"./index-BW19SpzX.js";import{S as Ue,a as De}from"./index-BPy-68uq.js";import{I as Fe}from"./index-D5uBY3Xj.js";import{C as Ee}from"./index-BsPfJtAB.js";import{_ as He}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-id-BWRHXKiP.js";import"./use-tab-status-CjcOPuWf.js";const[Ke,f]=Q("action-sheet"),ze=le({},re,{title:String,round:$,actions:ue(),closeIcon:E("cross"),closeable:$,cancelText:String,description:String,closeOnPopstate:$,closeOnClickAction:Boolean,safeAreaInsetBottom:$}),Ge=[...pe,"round","closeOnPopstate","safeAreaInsetBottom"];var Me=H({name:Ke,props:ze,emits:["select","cancel","update:show"],setup(n,{slots:c,emit:o}){const r=t=>o("update:show",t),g=()=>{r(!1),o("cancel")},x=()=>{if(n.title)return e("div",{class:f("header")},[n.title,n.closeable&&e(W,{name:n.closeIcon,class:[f("close"),_e],onClick:g},null)])},v=()=>{if(c.cancel||n.cancelText)return[e("div",{class:f("gap")},null),e("button",{type:"button",class:f("cancel"),onClick:g},[c.cancel?c.cancel():n.cancelText])]},y=(t,i)=>t.loading?e(fe,{class:f("loading-icon")},null):c.action?c.action({action:t,index:i}):[e("span",{class:f("name")},[t.name]),t.subname&&e("div",{class:f("subname")},[t.subname])],u=(t,i)=>{const{color:k,loading:B,callback:d,disabled:w,className:I}=t,P=()=>{w||B||(d&&d(t),n.closeOnClickAction&&r(!1),be(()=>o("select",t,i)))};return e("button",{type:"button",style:{color:k},class:[f("item",{loading:B,disabled:w}),I],onClick:P},[y(t,i)])},h=()=>{if(n.description||c.description){const t=c.description?c.description():n.description;return e("div",{class:f("description")},[t])}};return()=>e(ve,de({class:f(),position:"bottom","onUpdate:show":r},me(n,Ge)),{default:()=>{var t;return[x(),h(),e("div",{class:f("content")},[n.actions.map(u),(t=c.default)==null?void 0:t.call(c)]),v()]}})}});const Qe=X(Me),[We,b,Xe]=Q("submit-bar"),je={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:E("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:E("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:he(2),safeAreaInsetBottom:$};var qe=H({name:We,props:je,emits:["submit"],setup(n,{emit:c,slots:o}){const r=T(),g=ge(r,b),x=()=>{const{price:t,label:i,currency:k,textAlign:B,suffixLabel:d,decimalLength:w}=n;if(typeof t=="number"){const I=(t/100).toFixed(+w).split("."),P=w?`.${I[1]}`:"";return e("div",{class:b("text"),style:{textAlign:B}},[e("span",null,[i||Xe("label")]),e("span",{class:b("price")},[k,e("span",{class:b("price-integer")},[I[0]]),P]),d&&e("span",{class:b("suffix-label")},[d])])}},v=()=>{var t;const{tip:i,tipIcon:k}=n;if(o.tip||i)return e("div",{class:b("tip")},[k&&e(W,{class:b("tip-icon"),name:k},null),i&&e("span",{class:b("tip-text")},[i]),(t=o.tip)==null?void 0:t.call(o)])},y=()=>c("submit"),u=()=>o.button?o.button():e(ye,{round:!0,type:n.buttonType,text:n.buttonText,class:b("button",n.buttonType),color:n.buttonColor,loading:n.loading,disabled:n.disabled,onClick:y},null),h=()=>{var t,i;return e("div",{ref:r,class:[b(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(t=o.top)==null?void 0:t.call(o),v(),e("div",{class:b("bar")},[(i=o.default)==null?void 0:i.call(o),x(),u()])])};return()=>n.placeholder?g(h):h()}});const Je=X(qe),Ye={class:"mx-4"},Ze={class:"flex"},et={class:"flex-none p-4 text-center"},tt={class:"flex-1 py-4"},nt={class:"app-text-primary"},at={class:"vip-item-container"},ot=["onClick"],st=["onClick"],it=H({__name:"vip-checkout",setup(n){const{user:c,isAuthenticated:o}=Ce(),r=T([]),g=D(()=>r.value.length&&r.value.length>0),x=T(),v=T(0),y=s=>{u.value.swipeTo(s),i.value=0},u=T(),h=s=>{v.value=s},t=D(()=>r.value.at(v.value)),i=T(0),k=(s=0)=>i.value===s?"vip-item vip-item-active":"vip-item",B=(s=0)=>{i.value=s},d=T(!1),w=()=>{d.value=!1},I=()=>{d.value=!1},P=T([]),j=D(()=>{var s,C;return((C=(s=t==null?void 0:t.value)==null?void 0:s.items)==null?void 0:C.at(i.value).price)*100}),q=()=>{d.value=!0},J=(s="")=>{alert(s)};return ke(()=>U(this,null,function*(){Se("Page <<VipOrderCheckout>> mounted."),yield Be.initialize().then(()=>U(this,null,function*(){yield Le().then(s=>{r.value=s.data}),yield Oe().then(s=>{P.value=s.data})}))})),(s,C)=>{var K,z;const Y=Ne,Z=$e,ee=Ae,te=Ve,ne=Fe,V=Re,ae=De,oe=Ue,se=Je,ie=Ee,ce=Qe;return m(),A(L,null,[e(te,null,{default:p(()=>[e(ee,{border:!1,"left-arrow":"",onClickLeft:C[1]||(C[1]=a=>l(xe)())},{title:p(()=>[l(g)?(m(),O(Z,{key:0,ref_key:"vipTypeTabsRef",ref:x,active:l(v),"onUpdate:active":C[0]||(C[0]=a=>G(v)?v.value=a:null),"line-width":20,onChange:y},{default:p(()=>[(m(!0),A(L,null,N(l(r),a=>(m(),O(Y,{key:a.code},{title:p(()=>[_("div",Ye,S(a.title),1)]),_:2},1024))),128))]),_:1},8,["active"])):F("",!0)]),_:1})]),_:1}),e(l(M)),e(oe,{ref_key:"vipTypeSwipeRef",ref:u,"indicator-color":"white",onChange:h},{default:p(()=>[(m(!0),A(L,null,N(l(r),a=>(m(),O(ae,{key:a.code},{default:p(()=>[l(o)?(m(),O(V,{key:0,inset:""},{default:p(()=>[_("div",Ze,[_("div",et,[e(ne,{round:"",class:"!align-middle",width:"3.2rem",height:"3.2rem",src:l(Ie)},null,8,["src"])]),_("div",tt,[_("div",nt,S(l(c).username)+" - "+S(a.code),1)])])]),_:2},1024)):F("",!0)]),_:2},1024))),128))]),_:1},512),((z=(K=l(t))==null?void 0:K.items)==null?void 0:z.length)>0?(m(),A(L,{key:0},[e(l(M)),_("div",at,[(m(!0),A(L,null,N(l(t).items,(a,R)=>(m(),A("div",{key:a.code,class:we(k(R)),onClick:ct=>B(R)},[e(V,{border:!0,inset:"",class:"app-no-margin p-2"},{default:p(()=>[_("div",null,S(a.code),1),_("div",null,S(a.title),1),_("div",null,S(a.listPrice),1),_("div",null,S(a.price),1)]),_:2},1024)],10,ot))),128))])],64)):F("",!0),e(se,{price:l(j),"button-text":s.$t("common.button_renew"),onSubmit:q},{tip:p(()=>[Te("开通会员代表接受会员服务协议")]),_:1},8,["price","button-text"]),e(ce,{show:l(d),"onUpdate:show":C[2]||(C[2]=a=>G(d)?d.value=a:null),"cancel-text":s.$t("common.button_cancel"),"close-on-click-action":"",closeable:"",onCancel:w,onSelect:I,title:"请选择支付方式"},{default:p(()=>[e(V,{inset:"",class:"!my-4"},{default:p(()=>[(m(!0),A(L,null,N(l(P),a=>(m(),O(ie,{key:a.code,"is-link":""},{icon:p(()=>[e(l(Pe),{icon:a.icon},null,8,["icon"])]),title:p(()=>[_("div",{class:"app-text ml-4",onClick:R=>J(a.code)},S(a.title),9,st)]),_:2},1024))),128))]),_:1})]),_:1},8,["show","cancel-text"])],64)}}}),It=He(it,[["__scopeId","data-v-9679ad2e"]]);export{It as default};