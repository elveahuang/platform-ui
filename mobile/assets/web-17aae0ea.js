var n=(e,t,i)=>new Promise((w,l)=>{var m=o=>{try{s(i.next(o))}catch(r){l(r)}},p=o=>{try{s(i.throw(o))}catch(r){l(r)}},s=o=>o.done?w(o.value):Promise.resolve(o.value).then(m,p);s((i=i.apply(e,t)).next())});import{W as a}from"./me-f2227e1f.js";import"./index-a4820355.js";import"./index-9111c1ec.js";import"./constant-72a8536f.js";import"./index-44c3ce8f.js";import"./use-route-a8b62a53.js";import"./index-2728d79a.js";import"./index-e263c078.js";import"./use-placeholder-68e1c3da.js";import"./on-popup-reopen-25405d04.js";import"./index-63bf7971.js";class c extends a{constructor(){super(),this._lastWindow=null}open(t){return n(this,null,function*(){this._lastWindow=window.open(t.url,t.windowName||"_blank")})}close(){return n(this,null,function*(){return new Promise((t,i)=>{this._lastWindow!=null?(this._lastWindow.close(),this._lastWindow=null,t()):i("No active window to close!")})})}}const g=new c;export{g as Browser,c as BrowserWeb};