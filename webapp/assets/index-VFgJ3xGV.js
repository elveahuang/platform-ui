var b=(p,t,n)=>new Promise((r,a)=>{var _=e=>{try{o(n.next(e))}catch(f){a(f)}},c=e=>{try{o(n.throw(e))}catch(f){a(f)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(_,c);o((n=n.apply(p,t)).next())});import"./base-KLZmYrxz.js";import{E as i}from"./card-JzQglY02.js";import{E as m,a as u}from"./tab-pane-TgZ93oe5.js";import{d as T,r as y,o as C,l as x,e as P,f as k,w as s,j as l,n as d,i as v,bK as E}from"./index-9D-n7b0w.js";import"./event-m6_tN6NJ.js";const V=T({__name:"index",setup(p){const t=y(1);return C(()=>b(this,null,function*(){x("Page <<UserCenterIndexPage>> mounted.")})),(n,r)=>{const a=m,_=u,c=i;return P(),k(c,null,{default:s(()=>[l(_,{activeKey:v(t),"onUpdate:activeKey":r[0]||(r[0]=o=>E(t)?t.value=o:null)},{default:s(()=>[l(a,{key:"1",tab:"Tab 1"},{default:s(()=>[d("Content of Tab Pane 1")]),_:1}),l(a,{key:"3",tab:"Tab 2"},{default:s(()=>[d("Content of Tab Pane 1")]),_:1}),l(a,{key:"3",tab:"Tab 3"},{default:s(()=>[d("Content of Tab Pane 1")]),_:1})]),_:1},8,["activeKey"])]),_:1})}}});export{V as default};