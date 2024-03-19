var P=Object.defineProperty;var y=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(n,t,e)=>t in n?P(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,w=(n,t)=>{for(var e in t||(t={}))M.call(t,e)&&T(n,e,t[e]);if(y)for(var e of y(t))O.call(t,e)&&T(n,e,t[e]);return n};var a=(n,t,e)=>new Promise((i,s)=>{var d=o=>{try{r(e.next(o))}catch(c){s(c)}},p=o=>{try{r(e.throw(o))}catch(c){s(c)}},r=o=>o.done?i(o.value):Promise.resolve(o.value).then(d,p);r((e=e.apply(n,t)).next())});import{A as b,dz as k,d as v,r as $,au as q,b7 as F,i as l,am as C,b6 as g,bf as N,dA as D,b5 as I,o as E,l as h,b as u,f as m,j as _,F as B,g as U,e as V,dB as j,U as L,t as R,ap as z,c as H,B as G,O as S,bT as J,h as f,bi as K}from"./index-I6IEj8VZ.js";import{E as Q,a as W,_ as X}from"./index.min-CHlTovfQ.js";function x(n){return D((t,e)=>({get(){return t(),n},set(i){n=i,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})}}))}class A extends Q{constructor(t={}){return super(t),this.vueRenderers=b(new Map),this.contentComponent=null,this.reactiveState=x(this.view.state),this.reactiveExtensionStorage=x(this.extensionStorage),this.on("transaction",()=>{this.reactiveState.value=this.view.state,this.reactiveExtensionStorage.value=this.extensionStorage}),k(this)}get state(){return this.reactiveState?this.reactiveState.value:this.view.state}get storage(){return this.reactiveExtensionStorage?this.reactiveExtensionStorage.value:super.storage}registerPlugin(t,e){super.registerPlugin(t,e),this.reactiveState.value=this.view.state}unregisterPlugin(t){super.unregisterPlugin(t),this.reactiveState.value=this.view.state}}const Y=v({name:"EditorContent",props:{editor:{default:null,type:Object}},setup(n){const t=$(),e=I();return q(()=>{const i=n.editor;i&&i.options.element&&t.value&&F(()=>{if(!t.value||!i.options.element.firstChild)return;const s=l(t.value);t.value.append(...i.options.element.childNodes),i.contentComponent=e.ctx._,i.setOptions({element:s}),i.createNodeViews()})}),C(()=>{const i=n.editor;if(!i||(i.isDestroyed||i.view.setProps({nodeViews:{}}),i.contentComponent=null,!i.options.element.firstChild))return;const s=document.createElement("div");s.append(...i.options.element.childNodes),i.setOptions({element:s})}),{rootEl:t}},render(){const n=[];return this.editor&&this.editor.vueRenderers.forEach(t=>{const e=g(N,{to:t.teleportElement,key:t.id},g(t.component,w({ref:t.id},t.props)));n.push(e)}),g("div",{ref:t=>{this.rootEl=t}},...n)}}),Z={class:"editor-menu"},tt=v({__name:"TipTapMenu",props:{editor:{type:A,default:null}},setup(n){const t=n,e=b([{icon:"bold",title:"Bold",action:()=>t.editor.chain().focus().toggleBold().run(),isActive:()=>t.editor.isActive("bold")},{icon:"italic",title:"Italic",action:()=>t.editor.chain().focus().toggleItalic().run(),isActive:()=>t.editor.isActive("italic")}]),i=()=>a(this,null,function*(){});return E(()=>a(this,null,function*(){h("Component <<TipTapEditor>> mounted."),yield i().then()})),(s,d)=>(u(),m("div",Z,[_("div",null,[(u(!0),m(B,null,U(e,(p,r)=>(u(),V(l(et),j(L({key:r},p)),null,16))),128))])]))}}),et=v({__name:"TipTapMenuItem",props:{icon:{type:String,required:!0},title:{type:String,required:!0},action:{type:Function,required:!0,default:()=>{}},isActive:{type:Function,default:()=>{}}},setup(n){return(t,e)=>(u(),m("a",null,R(n.title),1))}}),nt={class:"editor"},it=v({__name:"TipTapEditor",props:{options:{type:Object,default(){return{}}},value:{type:String,default:""}},emits:["update:value"],setup(n,{emit:t}){const e=t,i=n,s=z(),d=H(()=>i.value),p=o=>a(this,null,function*(){const c={content:d.value,onUpdate:()=>{e("update:value",s.value.getHTML())}};s.value=new A(W(K(c,o)))}),r=()=>a(this,null,function*(){S(s.value)||s.value.destroy()});return G(d,o=>{!S(s.value)&&!J(s.value.getHTML(),o)&&s.value.setOptions({content:o})}),E(()=>a(this,null,function*(){h("Component <<TipTapEditor>> onMounted."),yield p(i.options).then()})),C(()=>a(this,null,function*(){h("Component <<TipTapEditor>> onBeforeUnmount."),yield r().then()})),(o,c)=>(u(),m("div",nt,[f(l(tt)),f(l(Y),{editor:s.value},null,8,["editor"])]))}}),st={class:"m-6"},ot={class:"m-6"},ut=v({__name:"editor",setup(n){return E(()=>a(this,null,function*(){h("Page <<EditorDemoPage>> mounted.")})),(t,e)=>(u(),m(B,null,[_("div",st,[f(l(X))]),_("div",ot,[f(l(it))])],64))}});export{ut as default};