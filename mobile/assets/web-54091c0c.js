var r=(e,t,i)=>new Promise((w,l)=>{var a=o=>{try{s(i.next(o))}catch(n){l(n)}},m=o=>{try{s(i.throw(o))}catch(n){l(n)}},s=o=>o.done?w(o.value):Promise.resolve(o.value).then(a,m);s((i=i.apply(e,t)).next())});import{W as p}from"./me-91a4ac5d.js";import"./index-da393970.js";import"./index-a7341202.js";/* empty css              */import"./index-2b390d93.js";import"./use-route-5ca44a63.js";import"./index-1b3dfeef.js";import"./use-placeholder-19b9d0f2.js";import"./index-e0da2094.js";class c extends p{constructor(){super(),this._lastWindow=null}open(t){return r(this,null,function*(){this._lastWindow=window.open(t.url,t.windowName||"_blank")})}close(){return r(this,null,function*(){return new Promise((t,i)=>{this._lastWindow!=null?(this._lastWindow.close(),this._lastWindow=null,t()):i("No active window to close!")})})}}const N=new c;export{N as Browser,c as BrowserWeb};
