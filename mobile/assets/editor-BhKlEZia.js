var s=(n,i,t)=>new Promise((l,c)=>{var u=e=>{try{a(t.next(e))}catch(r){c(r)}},d=e=>{try{a(t.throw(e))}catch(r){c(r)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(u,d);a((t=t.apply(n,i)).next())});import{z as g,d as v,A as w,g as f,r as B,B as S,C as h,D as _,E as A,L as H,o as y,l as p,G as L,a as b,c as E,H as N,b as O,u as x}from"./index-BsckSs91.js";import{S as z}from"./index.min-CvQ45cQ2.js";const K=["undo","redo","brush","eraser","|","heading","font-family","font-size","|","bold","italic","underline","strike","link","code","subscript","superscript","hr","todo","emoji","|","highlight","font-color","|","align","line-height","|","bullet-list","ordered-list","indent-decrease","indent-increase","break","|","quote","code-block","table"],R=()=>K,j={element:"",content:"",toolbarKeys:R()},q=n=>g(j,n),D={class:"editor"},P=v({__name:"AEditor",props:{options:{type:Object,default(){return{}}},value:{type:String,default:""}},emits:["update:value"],setup(n,{emit:i}){const t=i,l=n,{locale:c}=w(),u=f(()=>c),d=B(),a=f(()=>l.value),e=S(),r=o=>s(this,null,function*(){const m={element:d.value,content:a.value,onChange:C=>{t("update:value",C.getHtml())}};e.value=new z(q(g(m,o)))}),k=()=>s(this,null,function*(){_(e.value)||e.value.destroy()});return h(a,o=>{!_(e.value)&&!A(e.value.getHtml(),o)&&(e.value.clear(),e.value.focus().insert(o))}),h(u,o=>{e.value.changeLang(o===H.ZH_CN?"zh":"en")}),y(()=>s(this,null,function*(){p("Component <<AiEditor>> mounted."),yield r(l.options).then()})),L(()=>s(this,null,function*(){p("Component <<AiEditor>> onBeforeUnmount."),yield k().then()})),(o,m)=>(b(),E("div",D,[N("div",{class:"ai-editor",ref_key:"editorRef",ref:d},null,512)]))}}),T={class:"m-6"},G=v({__name:"editor",setup(n){return y(()=>s(this,null,function*(){p("Page <<ShowCaseSliderPage>> mounted.")})),(i,t)=>(b(),E("div",T,[O(x(P))]))}});export{G as default};
