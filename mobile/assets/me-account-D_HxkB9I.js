var f=(g,s,m)=>new Promise((a,n)=>{var c=t=>{try{p(m.next(t))}catch(d){n(d)}},u=t=>{try{p(m.throw(t))}catch(d){n(d)}},p=t=>t.done?a(t.value):Promise.resolve(t.value).then(c,u);p((m=m.apply(g,s)).next())});import{d as v,af as k,an as N,ab as h,o as b,l as _,a as w,c as y,b as i,u as e,w as l,F as C,H as B,ad as x,ah as o,ai as r}from"./index-BvpFSs7w.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{N as I}from"./index-D42qKdes.js";import{C as M}from"./index-0yS77zH-.js";import{I as V}from"./index-CiDCxW2p.js";import{C as j}from"./index-BlqN4S9N.js";const q=B("div",{class:"divider"},null,-1),z=v({__name:"me-account",setup(g){const{t:s}=k(),{getUserInfo:m}=N(),a=h({adress:"http://www.baidu.com",email:"2390046201@qq.com",role:"黄金会员",username:"钱多多",displayName:"代码根本敲不完",mobileNumber:"17876515985",signature:"暂无签名"});return b(()=>f(this,null,function*(){_("Page <<Me-MessagePage>> mounted."),m().then(n=>{_("个人中心获取用户结果是："),_(n),a.username=n.data.username,a.displayName=n.data.displayName,a.email=n.data.email}).catch(n=>{})})),(n,c)=>{const u=I,p=V,t=j,d=M;return w(),y(C,null,[i(u,{title:e(s)("app.meMessage"),"left-arrow":"",onClickLeft:c[0]||(c[0]=F=>e(x)())},null,8,["title"]),q,i(d,{inset:""},{default:l(()=>[i(t,{title:e(s)("app.photo"),to:"/setting","is-link":""},{default:l(()=>[i(p,{class:"align-middle",round:"",width:"1.5rem",height:"1.5rem",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]),_:1},8,["title"]),i(t,{title:e(s)("app.adress"),to:"/setting","is-link":""},{default:l(()=>[o(r(e(a).adress),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.name")},{default:l(()=>[o(r(e(a).username),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.nickname"),to:"/setting","is-link":""},{default:l(()=>[o(r(e(a).displayName),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.role"),to:"/setting","is-link":""},{default:l(()=>[o(r(e(a).role),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.email")},{default:l(()=>[o(r(e(a).email),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.mobile"),to:"/setting","is-link":""},{default:l(()=>[o(r(e(a).mobileNumber),1)]),_:1},8,["title"]),i(t,{title:e(s)("app.signature"),to:"/setting","is-link":""},{default:l(()=>[o(r(e(a).signature),1)]),_:1},8,["title"])]),_:1})],64)}}});export{z as default};