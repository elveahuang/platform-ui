var n=(e,t,i)=>new Promise((w,l)=>{var m=o=>{try{s(i.next(o))}catch(r){l(r)}},p=o=>{try{s(i.throw(o))}catch(r){l(r)}},s=o=>o.done?w(o.value):Promise.resolve(o.value).then(m,p);s((i=i.apply(e,t)).next())});import{W as a}from"./me-cee0730f.js";import"./index-553dc345.js";/* empty css              */import"./index-e12799e1.js";import"./use-route-73484ecd.js";import"./index-bf0a0d84.js";import"./index-4b704db9.js";import"./index-8dd00e31.js";import"./use-placeholder-a66f5307.js";import"./index-f0103cd9.js";class c extends a{constructor(){super(),this._lastWindow=null}open(t){return n(this,null,function*(){this._lastWindow=window.open(t.url,t.windowName||"_blank")})}close(){return n(this,null,function*(){return new Promise((t,i)=>{this._lastWindow!=null?(this._lastWindow.close(),this._lastWindow=null,t()):i("No active window to close!")})})}}const P=new c;export{P as Browser,c as BrowserWeb};
