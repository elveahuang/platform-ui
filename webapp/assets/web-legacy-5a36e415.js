System.register(["./wework-legacy-eb7e8436.js","./index-legacy-e63f363a.js","./icon-legacy-9098078c.js"],(function(e,s){"use strict";var n;return{setters:[e=>{n=e.W},null,null],execute:function(){class s extends n{constructor(){super(),this._lastWindow=null}async open(e){this._lastWindow=window.open(e.url,e.windowName||"_blank")}async close(){return new Promise(((e,s)=>{null!=this._lastWindow?(this._lastWindow.close(),this._lastWindow=null,e()):s("No active window to close!")}))}}e("BrowserWeb",s),e("Browser",new s)}}}));