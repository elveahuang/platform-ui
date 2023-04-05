import{O as e,X as o,bF as t,r as a,a2 as s,by as r,H as l,aN as n,aj as i,bm as c,P as d,d as u,f as p,U as b,a0 as g,V as v,g as m,w as f,a6 as k,W as y,j as h,E as B,a8 as x,a7 as S,_,R as V,c as $,ae as N,aa as w,ab as z}from"./index-fbb6e2f3.js";import{g as E,c as I,u as j,e as C,T}from"./button-47119b68.js";const A=Symbol("buttonGroupContextKey"),G=l({size:n,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:i},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:i,default:()=>c},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),U={click:e=>e instanceof MouseEvent};function F(e,o=20){return e.mix("#141414",o).toString()}const R=["aria-disabled","disabled","autofocus","type"],q=u({name:"ElButton"});var D=_(u({...q,props:G,emits:U,setup(l,{expose:n,emit:i}){const c=l,u=function(o){const t=C(),a=d("button");return e((()=>{let e={};const s=o.color;if(s){const r=new T(s),l=o.dark?r.tint(20).toString():F(r,20);if(o.plain)e=a.cssVarBlock({"bg-color":o.dark?F(r,90):r.tint(90).toString(),"text-color":s,"border-color":o.dark?F(r,50):r.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":l,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":l}),t.value&&(e[a.cssVarBlockName("disabled-bg-color")]=o.dark?F(r,90):r.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=o.dark?F(r,50):r.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=o.dark?F(r,80):r.tint(80).toString());else{const n=o.dark?F(r,30):r.tint(30).toString(),i=r.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(e=a.cssVarBlock({"bg-color":s,"text-color":i,"border-color":s,"hover-bg-color":n,"hover-text-color":i,"hover-border-color":n,"active-bg-color":l,"active-border-color":l}),t.value){const t=o.dark?F(r,50):r.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=t,e[a.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,e[a.cssVarBlockName("disabled-border-color")]=t}}}return e}))}(c),_=d("button"),{_ref:V,_size:$,_type:N,_disabled:w,shouldAddSpace:z,handleClick:G}=((l,n)=>{E({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},e((()=>"text"===l.type)));const i=o(A,void 0),c=t("button"),{form:d}=I(),u=j(e((()=>null==i?void 0:i.size))),p=C(),b=a(),g=s(),v=e((()=>l.type||(null==i?void 0:i.type)||"")),m=e((()=>{var e,o,t;return null!=(t=null!=(o=l.autoInsertSpace)?o:null==(e=c.value)?void 0:e.autoInsertSpace)&&t}));return{_disabled:p,_size:u,_type:v,_ref:b,shouldAddSpace:e((()=>{var e;const o=null==(e=g.default)?void 0:e.call(g);if(m.value&&1===(null==o?void 0:o.length)){const e=o[0];if((null==e?void 0:e.type)===r){const o=e.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(o.trim())}}return!1})),handleClick:e=>{"reset"===l.nativeType&&(null==d||d.resetFields()),n("click",e)}}})(c,i);return n({ref:V,size:$,type:N,disabled:w,shouldAddSpace:z}),(e,o)=>(p(),b("button",{ref_key:"_ref",ref:V,class:y([h(_).b(),h(_).m(h(N)),h(_).m(h($)),h(_).is("disabled",h(w)),h(_).is("loading",e.loading),h(_).is("plain",e.plain),h(_).is("round",e.round),h(_).is("circle",e.circle),h(_).is("text",e.text),h(_).is("link",e.link),h(_).is("has-bg",e.bg)]),"aria-disabled":h(w)||e.loading,disabled:h(w)||e.loading,autofocus:e.autofocus,type:e.nativeType,style:S(h(u)),onClick:o[0]||(o[0]=(...e)=>h(G)&&h(G)(...e))},[e.loading?(p(),b(g,{key:0},[e.$slots.loading?v(e.$slots,"loading",{key:0}):(p(),m(h(B),{key:1,class:y(h(_).is("loading"))},{default:f((()=>[(p(),m(k(e.loadingIcon)))])),_:1},8,["class"]))],64)):e.icon||e.$slots.icon?(p(),m(h(B),{key:1},{default:f((()=>[e.icon?(p(),m(k(e.icon),{key:0})):v(e.$slots,"icon",{key:1})])),_:3})):x("v-if",!0),e.$slots.default?(p(),b("span",{key:2,class:y({[h(_).em("text","expand")]:h(z)})},[v(e.$slots,"default")],2)):x("v-if",!0)],14,R))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const H={size:G.size,type:G.type},K=u({name:"ElButtonGroup"});var M=_(u({...K,props:H,setup(e){const o=e;V(A,$({size:N(o,"size"),type:N(o,"type")}));const t=d("button");return(e,o)=>(p(),b("div",{class:y(`${h(t).b("group")}`)},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const O=w(D,{ButtonGroup:M});z(M);export{O as E};