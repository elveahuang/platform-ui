var v=(a,r,n)=>new Promise((i,t)=>{var c=s=>{try{e(n.next(s))}catch(l){t(l)}},o=s=>{try{e(n.throw(s))}catch(l){t(l)}},e=s=>s.done?i(s.value):Promise.resolve(s.value).then(c,o);e((n=n.apply(a,r)).next())});import{d as k,o as d,c as m,r as x,q as C,w as f,b as u,t as y,F as g,e as D,aR as N,aS as S,f as B,g as I,l as w,a as _,u as p,i as P,h as R}from"./index-NS3bFuoT.js";/* empty css              *//* empty css              */import{N as $}from"./index-tWdSW0yP.js";/* empty css              *//* empty css                                                                 *//* empty css              */import{u as b,D as q}from"./DataList-W_2Elykw.js";import{n as A}from"./notice-g9iLosz2.js";import{C as F}from"./index-7XZZree4.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{S as z}from"./index-MrjgNczr.js";import"./toNumber-FiTFfB40.js";import"./index-dVxbU6Do.js";const L=a=>(N("data-v-842d4678"),a=a(),S(),a),E={key:0,class:"container"},G={style:{color:"#6a6a6a"}},M=L(()=>u("p",{class:"indicator",style:{color:"green"}},"已读",-1)),U={key:1,class:"container"},j={style:{color:"#000000"}},H=L(()=>u("p",{class:"indicator",style:{color:"red"}},"未读",-1)),J=k({__name:"notice-list",props:{items:Array},setup(a){const r=a,n=i=>{D.push({path:"/notifications/details",query:{id:i}})};return(i,t)=>{const c=F;return d(!0),m(g,null,x(r.items,o=>(d(),C(c,{key:o.id,onClick:e=>n(o.id)},{title:f(()=>[o.readInd===!0?(d(),m("div",E,[u("p",G,y(o.content),1),M])):(d(),m("div",U,[u("p",j,y(o.content),1),H]))]),_:2},1032,["onClick"]))),128)}}}),K=V(J,[["__scopeId","data-v-842d4678"]]),ct=k({__name:"index",setup(a){const{initialize:r,handleResult:n,handleParams:i}=b(),t=B(r()),c=()=>v(this,null,function*(){yield A(i(t)).then(o=>{n(t,o)})});return I(()=>{w("Page <<NoticeIndexPage>> mounted.")}),(o,e)=>{const s=$,l=z;return d(),m(g,null,[_(l,null,{default:f(()=>[_(s,{title:"Notice","left-arrow":"",onClickLeft:e[0]||(e[0]=h=>p(R)())})]),_:1}),_(p(q),{model:p(t),"onUpdate:model":e[1]||(e[1]=h=>P(t)?t.value=h:null),onGetDataList:c},{default:f(()=>[_(p(K),{items:p(t).items},null,8,["items"])]),_:1},8,["model"])],64)}}});export{ct as default};
