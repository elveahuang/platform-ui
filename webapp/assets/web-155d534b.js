import{W as o}from"./wework-4a30ebb2.js";import"./index-b38b8fed.js";/* empty css             */class s extends o{constructor(){super(),this._lastWindow=null}async open(o){this._lastWindow=window.open(o.url,o.windowName||"_blank")}async close(){return new Promise(((o,s)=>{null!=this._lastWindow?(this._lastWindow.close(),this._lastWindow=null,o()):s("No active window to close!")}))}}const n=new s;export{n as Browser,s as BrowserWeb};
