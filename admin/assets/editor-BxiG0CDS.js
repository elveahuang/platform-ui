var s=(i,d,o)=>new Promise((u,c)=>{var r=t=>{try{e(o.next(t))}catch(n){c(n)}},p=t=>{try{e(o.throw(t))}catch(n){c(n)}},e=t=>t.done?u(t.value):Promise.resolve(t.value).then(r,p);e((o=o.apply(i,d)).next())});import{g as k,A as E}from"./AEditor-CrAJp-6X.js";import{d as Q,b as A,c as g,r as N,aa as b,ab as h,N as y,ac as C,o as x,l as f,ad as O,e as w,g as B,m as l,ae as R,_ as S,k as _,i as m,F as T}from"./index-DnwLZJOM.js";import{Q as q}from"./index.min-Di2gdxwh.js";const F={class:"editor"},L=Q({__name:"QEditor",props:{options:{type:Object,default(){return{}}},value:{type:String,default:""}},emits:["update:value"],setup(i,{emit:d}){const o=i,{locale:u}=A(),c=g(()=>u),r=N(),p=g(()=>o.value),e=b(),t=a=>s(this,null,function*(){const v={};e.value=new q(r.value,k(R(v,a)))}),n=()=>s(this,null,function*(){y(e.value)});return h(p,a=>{!y(e.value)&&!C(e.value.getSemanticHTML(),a)&&(e.value.getText(),e.value.focus(),e.value.setText(a))}),h(c,a=>{}),x(()=>s(this,null,function*(){f("Component <<QuillEditor>> mounted."),yield t(o.options).then()})),O(()=>s(this,null,function*(){f("Component <<QuillEditor>> onBeforeUnmount."),yield n().then()})),(a,v)=>(w(),B("div",F,[l("div",{ref_key:"editorRef",ref:r,class:"quill-editor"},null,512)]))}}),M=S(L,[["__scopeId","data-v-c39ad602"]]),U={class:"m-6"},V={class:"m-6"},$={class:"m-6"},z=Q({__name:"editor",setup(i){return x(()=>s(this,null,function*(){f("Page <<Editor>> mounted.")})),(d,o)=>(w(),B(T,null,[l("div",U,[_(m(E))]),l("div",V,[_(m(E))]),l("div",$,[_(m(M))])],64))}});export{z as default};