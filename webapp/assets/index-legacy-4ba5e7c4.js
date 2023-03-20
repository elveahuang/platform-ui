System.register(["./index-legacy-bc1007e8.js","./button-legacy-84695730.js"],(function(e,o){"use strict";var t,r,l,a,n,s,i,c,d,u,p,b,g,v,f,k,m,y,h,B,x,S,_,$,V,N,w,z,E,I,T,C,G,A,U;return{setters:[e=>{t=e.N,r=e.W,l=e.bE,a=e.r,n=e.a1,s=e.bx,i=e.G,c=e.aM,d=e.ai,u=e.bl,p=e.O,b=e.d,g=e.e,v=e.T,f=e.$,k=e.U,m=e.f,y=e.w,h=e.a5,B=e.V,x=e.i,S=e.E,_=e.a7,$=e.a6,V=e._,N=e.Q,w=e.c,z=e.ad,E=e.a9,I=e.aa},e=>{T=e.g,C=e.c,G=e.u,A=e.e,U=e.T}],execute:function(){const o=Symbol("buttonGroupContextKey"),j=i({size:c,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:d},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:d,default:()=>u},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),M={click:e=>e instanceof MouseEvent};function q(e,o=20){return e.mix("#141414",o).toString()}const D=["aria-disabled","disabled","autofocus","type"],F=b({name:"ElButton"}),K=b({...F,props:j,emits:M,setup(e,{expose:i,emit:c}){const d=e,u=function(e){const o=A(),r=p("button");return t((()=>{let t={};const l=e.color;if(l){const a=new U(l),n=e.dark?a.tint(20).toString():q(a,20);if(e.plain)t=r.cssVarBlock({"bg-color":e.dark?q(a,90):a.tint(90).toString(),"text-color":l,"border-color":e.dark?q(a,50):a.tint(50).toString(),"hover-text-color":`var(${r.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":n,"active-text-color":`var(${r.cssVarName("color-white")})`,"active-border-color":n}),o.value&&(t[r.cssVarBlockName("disabled-bg-color")]=e.dark?q(a,90):a.tint(90).toString(),t[r.cssVarBlockName("disabled-text-color")]=e.dark?q(a,50):a.tint(50).toString(),t[r.cssVarBlockName("disabled-border-color")]=e.dark?q(a,80):a.tint(80).toString());else{const s=e.dark?q(a,30):a.tint(30).toString(),i=a.isDark()?`var(${r.cssVarName("color-white")})`:`var(${r.cssVarName("color-black")})`;if(t=r.cssVarBlock({"bg-color":l,"text-color":i,"border-color":l,"hover-bg-color":s,"hover-text-color":i,"hover-border-color":s,"active-bg-color":n,"active-border-color":n}),o.value){const o=e.dark?q(a,50):a.tint(50).toString();t[r.cssVarBlockName("disabled-bg-color")]=o,t[r.cssVarBlockName("disabled-text-color")]=e.dark?"rgba(255, 255, 255, 0.5)":`var(${r.cssVarName("color-white")})`,t[r.cssVarBlockName("disabled-border-color")]=o}}}return t}))}(d),b=p("button"),{_ref:V,_size:N,_type:w,_disabled:z,shouldAddSpace:E,handleClick:I}=((e,i)=>{T({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},t((()=>"text"===e.type)));const c=r(o,void 0),d=l("button"),{form:u}=C(),p=G(t((()=>null==c?void 0:c.size))),b=A(),g=a(),v=n(),f=t((()=>e.type||(null==c?void 0:c.type)||"")),k=t((()=>{var o,t,r;return null!=(r=null!=(t=e.autoInsertSpace)?t:null==(o=d.value)?void 0:o.autoInsertSpace)&&r}));return{_disabled:b,_size:p,_type:f,_ref:g,shouldAddSpace:t((()=>{var e;const o=null==(e=v.default)?void 0:e.call(v);if(k.value&&1===(null==o?void 0:o.length)){const e=o[0];if((null==e?void 0:e.type)===s){const o=e.children;return/^\p{Unified_Ideograph}{2}$/u.test(o.trim())}}return!1})),handleClick:o=>{"reset"===e.nativeType&&(null==u||u.resetFields()),i("click",o)}}})(d,c);return i({ref:V,size:N,type:w,disabled:z,shouldAddSpace:E}),(e,o)=>(g(),v("button",{ref_key:"_ref",ref:V,class:B([x(b).b(),x(b).m(x(w)),x(b).m(x(N)),x(b).is("disabled",x(z)),x(b).is("loading",e.loading),x(b).is("plain",e.plain),x(b).is("round",e.round),x(b).is("circle",e.circle),x(b).is("text",e.text),x(b).is("link",e.link),x(b).is("has-bg",e.bg)]),"aria-disabled":x(z)||e.loading,disabled:x(z)||e.loading,autofocus:e.autofocus,type:e.nativeType,style:$(x(u)),onClick:o[0]||(o[0]=(...e)=>x(I)&&x(I)(...e))},[e.loading?(g(),v(f,{key:0},[e.$slots.loading?k(e.$slots,"loading",{key:0}):(g(),m(x(S),{key:1,class:B(x(b).is("loading"))},{default:y((()=>[(g(),m(h(e.loadingIcon)))])),_:1},8,["class"]))],64)):e.icon||e.$slots.icon?(g(),m(x(S),{key:1},{default:y((()=>[e.icon?(g(),m(h(e.icon),{key:0})):k(e.$slots,"icon",{key:1})])),_:3})):_("v-if",!0),e.$slots.default?(g(),v("span",{key:2,class:B({[x(b).em("text","expand")]:x(E)})},[k(e.$slots,"default")],2)):_("v-if",!0)],14,D))}});var O=V(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const Q={size:j.size,type:j.type},W=b({name:"ElButtonGroup"}),H=b({...W,props:Q,setup(e){const t=e;N(o,w({size:z(t,"size"),type:z(t,"type")}));const r=p("button");return(e,o)=>(g(),v("div",{class:B(`${x(r).b("group")}`)},[k(e.$slots,"default")],2))}});var J=V(H,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);e("E",E(O,{ButtonGroup:J})),I(J)}}}));
