import{N as e,W as o,bD as t,r as a,a1 as s,bw as r,G as l,aM as n,ai as i,bk as c,O as d,d as u,e as p,T as b,$ as g,U as v,f as k,w as f,a5 as m,V as y,i as h,E as B,a7 as x,a6 as S,_,Q as $,c as V,ad as N,a9 as w,aa as z}from"./index-b38b8fed.js";import{g as E,c as I,u as T,e as C,T as G}from"./button-544101d6.js";const A=Symbol("buttonGroupContextKey"),U=l({size:n,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:i},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:i,default:()=>c},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),j={click:e=>e instanceof MouseEvent};function D(e,o=20){return e.mix("#141414",o).toString()}const M=["aria-disabled","disabled","autofocus","type"],q=u({name:"ElButton"});var F=_(u({...q,props:U,emits:j,setup(l,{expose:n,emit:i}){const c=l,u=function(o){const t=C(),a=d("button");return e((()=>{let e={};const s=o.color;if(s){const r=new G(s),l=o.dark?r.tint(20).toString():D(r,20);if(o.plain)e=a.cssVarBlock({"bg-color":o.dark?D(r,90):r.tint(90).toString(),"text-color":s,"border-color":o.dark?D(r,50):r.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":l,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":l}),t.value&&(e[a.cssVarBlockName("disabled-bg-color")]=o.dark?D(r,90):r.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=o.dark?D(r,50):r.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=o.dark?D(r,80):r.tint(80).toString());else{const n=o.dark?D(r,30):r.tint(30).toString(),i=r.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(e=a.cssVarBlock({"bg-color":s,"text-color":i,"border-color":s,"hover-bg-color":n,"hover-text-color":i,"hover-border-color":n,"active-bg-color":l,"active-border-color":l}),t.value){const t=o.dark?D(r,50):r.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=t,e[a.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,e[a.cssVarBlockName("disabled-border-color")]=t}}}return e}))}(c),_=d("button"),{_ref:$,_size:V,_type:N,_disabled:w,shouldAddSpace:z,handleClick:U}=((l,n)=>{E({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},e((()=>"text"===l.type)));const i=o(A,void 0),c=t("button"),{form:d}=I(),u=T(e((()=>null==i?void 0:i.size))),p=C(),b=a(),g=s(),v=e((()=>l.type||(null==i?void 0:i.type)||"")),k=e((()=>{var e,o,t;return null!=(t=null!=(o=l.autoInsertSpace)?o:null==(e=c.value)?void 0:e.autoInsertSpace)&&t}));return{_disabled:p,_size:u,_type:v,_ref:b,shouldAddSpace:e((()=>{var e;const o=null==(e=g.default)?void 0:e.call(g);if(k.value&&1===(null==o?void 0:o.length)){const e=o[0];if((null==e?void 0:e.type)===r){const o=e.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(o.trim())}}return!1})),handleClick:e=>{"reset"===l.nativeType&&(null==d||d.resetFields()),n("click",e)}}})(c,i);return n({ref:$,size:V,type:N,disabled:w,shouldAddSpace:z}),(e,o)=>(p(),b("button",{ref_key:"_ref",ref:$,class:y([h(_).b(),h(_).m(h(N)),h(_).m(h(V)),h(_).is("disabled",h(w)),h(_).is("loading",e.loading),h(_).is("plain",e.plain),h(_).is("round",e.round),h(_).is("circle",e.circle),h(_).is("text",e.text),h(_).is("link",e.link),h(_).is("has-bg",e.bg)]),"aria-disabled":h(w)||e.loading,disabled:h(w)||e.loading,autofocus:e.autofocus,type:e.nativeType,style:S(h(u)),onClick:o[0]||(o[0]=(...e)=>h(U)&&h(U)(...e))},[e.loading?(p(),b(g,{key:0},[e.$slots.loading?v(e.$slots,"loading",{key:0}):(p(),k(h(B),{key:1,class:y(h(_).is("loading"))},{default:f((()=>[(p(),k(m(e.loadingIcon)))])),_:1},8,["class"]))],64)):e.icon||e.$slots.icon?(p(),k(h(B),{key:1},{default:f((()=>[e.icon?(p(),k(m(e.icon),{key:0})):v(e.$slots,"icon",{key:1})])),_:3})):x("v-if",!0),e.$slots.default?(p(),b("span",{key:2,class:y({[h(_).em("text","expand")]:h(z)})},[v(e.$slots,"default")],2)):x("v-if",!0)],14,M))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const K={size:U.size,type:U.type},O=u({name:"ElButtonGroup"});var Q=_(u({...O,props:K,setup(e){const o=e;$(A,V({size:N(o,"size"),type:N(o,"type")}));const t=d("button");return(e,o)=>(p(),b("div",{class:y(`${h(t).b("group")}`)},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const R=w(F,{ButtonGroup:Q});z(Q);export{R as E};
