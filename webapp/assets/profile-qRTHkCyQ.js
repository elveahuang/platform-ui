var b=(i,t,o)=>new Promise((r,a)=>{var _=e=>{try{n(o.next(e))}catch(c){a(c)}},f=e=>{try{n(o.throw(e))}catch(c){a(c)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(_,f);n((o=o.apply(i,t)).next())});import"./base-KLZmYrxz.js";import{E as d}from"./card-JzQglY02.js";import{E as m,a as u}from"./tab-pane-TgZ93oe5.js";import{d as T,r as y,o as C,l as P,e as k,f as v,w as s,j as l,n as p,i as E,bK as K}from"./index-9D-n7b0w.js";import"./event-m6_tN6NJ.js";const V=T({__name:"profile",setup(i){const t=y(1);return C(()=>b(this,null,function*(){P("Page <<UserCenterProfilePage>> mounted.")})),(o,r)=>{const a=m,_=u,f=d;return k(),v(f,null,{default:s(()=>[l(_,{activeKey:E(t),"onUpdate:activeKey":r[0]||(r[0]=n=>K(t)?t.value=n:null)},{default:s(()=>[l(a,{key:"1",tab:"Tab 1"},{default:s(()=>[p("Content of Tab Pane 1")]),_:1}),l(a,{key:"3",tab:"Tab 2"},{default:s(()=>[p("Content of Tab Pane 1")]),_:1}),l(a,{key:"3",tab:"Tab 3"},{default:s(()=>[p("Content of Tab Pane 1")]),_:1})]),_:1},8,["activeKey"])]),_:1})}}});export{V as default};