var n=(o,e,t)=>new Promise((r,i)=>{var s=u=>{try{c(t.next(u))}catch(d){i(d)}},l=u=>{try{c(t.throw(u))}catch(d){i(d)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(s,l);c((t=t.apply(o,e)).next())});import{aJ as X,X as a,aK as ne,aL as B,aM as f,aN as k,aO as q,aP as be,e as Ce,a5 as ye,B as ke,h as b,F as Le}from"./index-5a84dfa4.js";import{C as We}from"./index-c37d70d8.js";import{C as ae}from"./index-ad1a318a.js";import{N as xe}from"./index-a7bd2c8c.js";import{S as Te}from"./index-9c31ede9.js";import{I as G}from"./index-4fd1afda.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const Re=o=>{const e=new Map;e.set("web",{name:"web"});const t=o.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,l)=>{t.platforms.set(s,l)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},Ie=o=>o.CapacitorPlatforms=Re(o),se=Ie(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});se.addPlatform;se.setPlatform;var _;(function(o){o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE"})(_||(_={}));class K extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const Oe=o=>{var e,t;return o!=null&&o.androidBridge?"android":!((t=(e=o==null?void 0:o.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},De=o=>{var e,t,r,i,s;const l=o.CapacitorCustomPlatform||null,c=o.Capacitor||{},u=c.Plugins=c.Plugins||{},d=o.CapacitorPlatforms,E=()=>l!==null?l.name:Oe(o),W=((e=d==null?void 0:d.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||E,F=()=>W()!=="web",de=((t=d==null?void 0:d.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||F,ue=h=>{const g=N.get(h);return!!(g!=null&&g.platforms.has(W())||Y(h))},he=((r=d==null?void 0:d.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||ue,ge=h=>{var g;return(g=c.PluginHeaders)===null||g===void 0?void 0:g.find(x=>x.name===h)},Y=((i=d==null?void 0:d.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||ge,fe=h=>o.console.error(h),me=(h,g,x)=>Promise.reject(`${x} does not have an implementation of "${g}".`),N=new Map,ve=(h,g={})=>{const x=N.get(h);if(x)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),x.proxy;const L=W(),T=Y(h);let S;const pe=()=>n(void 0,null,function*(){return!S&&L in g?S=typeof g[L]=="function"?S=yield g[L]():S=g[L]:l!==null&&!S&&"web"in g&&(S=typeof g.web=="function"?S=yield g.web():S=g.web),S}),Pe=(m,v)=>{var P,C;if(T){const y=T==null?void 0:T.methods.find(p=>v===p.name);if(y)return y.rtype==="promise"?p=>c.nativePromise(h,v.toString(),p):(p,Q)=>c.nativeCallback(h,v.toString(),p,Q);if(m)return(P=m[v])===null||P===void 0?void 0:P.bind(m)}else{if(m)return(C=m[v])===null||C===void 0?void 0:C.bind(m);throw new K(`"${h}" plugin is not implemented on ${L}`,_.Unimplemented)}},j=m=>{let v;const P=(...C)=>{const y=pe().then(p=>{const Q=Pe(p,m);if(Q){const M=Q(...C);return v=M==null?void 0:M.remove,M}else throw new K(`"${h}.${m}()" is not implemented on ${L}`,_.Unimplemented)});return m==="addListener"&&(y.remove=()=>n(void 0,null,function*(){return v()})),y};return P.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:m,writable:!1,configurable:!1}),P},Z=j("addListener"),ee=j("removeListener"),Se=(m,v)=>{const P=Z({eventName:m},v),C=()=>n(void 0,null,function*(){const p=yield P;ee({eventName:m,callbackId:p},v)}),y=new Promise(p=>P.then(()=>p({remove:C})));return y.remove=()=>n(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield C()}),y},H=new Proxy({},{get(m,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?Se:Z;case"removeListener":return ee;default:return j(v)}}});return u[h]=H,N.set(h,{name:h,proxy:H,platforms:new Set([...Object.keys(g),...T?[L]:[]])}),H},we=((s=d==null?void 0:d.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||ve;return c.convertFileSrc||(c.convertFileSrc=h=>h),c.getPlatform=W,c.handleError=fe,c.isNativePlatform=de,c.isPluginAvailable=he,c.pluginMethodNoop=me,c.registerPlugin=we,c.Exception=K,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},Ue=o=>o.Capacitor=De(o),w=Ue(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),A=w.registerPlugin;w.Plugins;class ce{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i);const s=()=>n(this,null,function*(){return this.removeListener(e,t)}),l=Promise.resolve({remove:s});return Object.defineProperty(l,"remove",{value:()=>n(this,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield s()})}),l}removeAllListeners(){return n(this,null,function*(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,t){const r=this.listeners[e];r&&r.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new w.Exception(e,_.Unimplemented)}unavailable(e="not available"){return new w.Exception(e,_.Unavailable)}removeListener(e,t){return n(this,null,function*(){const r=this.listeners[e];if(!r)return;const i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const te=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),re=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class _e extends ce{getCookies(){return n(this,null,function*(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=re(i).trim(),s=re(s).trim(),t[i]=s}),t})}setCookie(e){return n(this,null,function*(){try{const t=te(e.key),r=te(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),l=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${l};`}catch(t){return Promise.reject(t)}})}deleteCookie(e){return n(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})}clearCookies(){return n(this,null,function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return n(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}}A("CapacitorCookies",{web:()=>new _e});const $e=o=>n(void 0,null,function*(){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(o)})}),Ae=(o={})=>{const e=Object.keys(o);return Object.keys(o).map(i=>i.toLocaleLowerCase()).reduce((i,s,l)=>(i[s]=o[e[l]],i),{})},Ee=(o,e=!0)=>o?Object.entries(o).reduce((r,i)=>{const[s,l]=i;let c,u;return Array.isArray(l)?(u="",l.forEach(d=>{c=e?encodeURIComponent(d):d,u+=`${s}=${c}&`}),u.slice(0,-1)):(c=e?encodeURIComponent(l):l,u=`${s}=${c}`),`${r}&${u}`},"").substr(1):null,Qe=(o,e={})=>{const t=Object.assign({method:o.method||"GET",headers:o.headers},e),i=Ae(o.headers)["content-type"]||"";if(typeof o.data=="string")t.body=o.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[l,c]of Object.entries(o.data||{}))s.set(l,c);t.body=s.toString()}else if(i.includes("multipart/form-data")){const s=new FormData;if(o.data instanceof FormData)o.data.forEach((c,u)=>{s.append(u,c)});else for(const c of Object.keys(o.data))s.append(c,o.data[c]);t.body=s;const l=new Headers(t.headers);l.delete("content-type"),t.headers=l}else(i.includes("application/json")||typeof o.data=="object")&&(t.body=JSON.stringify(o.data));return t};class Me extends ce{request(e){return n(this,null,function*(){const t=Qe(e,e.webFetchExtra),r=Ee(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=yield fetch(i,t),l=s.headers.get("content-type")||"";let{responseType:c="text"}=s.ok?e:{};l.includes("application/json")&&(c="json");let u,d;switch(c){case"arraybuffer":case"blob":d=yield s.blob(),u=yield $e(d);break;case"json":u=yield s.json();break;case"document":case"text":default:u=yield s.text()}const E={};return s.headers.forEach((W,F)=>{E[F]=W}),{data:u,headers:E,status:s.status,url:s.url}})}get(e){return n(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return n(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return n(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return n(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return n(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}}A("CapacitorHttp",{web:()=>new Me});const z=A("Browser",{web:()=>X(()=>import("./web-9c9530a3.js"),["assets/web-9c9530a3.js","assets/index-5a84dfa4.js","assets/index-34c8e459.css","assets/index-c37d70d8.js","assets/constant-72a8536f.js","assets/index-ad1a318a.js","assets/use-route-1671b2c2.js","assets/index-4fd1afda.js","assets/index-a7bd2c8c.js","assets/use-placeholder-30960a83.js","assets/on-popup-reopen-84d4d9b5.js","assets/index-9c31ede9.js"]).then(o=>new o.BrowserWeb)});class ze{available(){return n(this,null,function*(){return!0})}open(e,t,r){return n(this,null,function*(){if(w.isNativePlatform())yield z.open({url:e}),yield z.addListener("browserFinished",t),yield z.addListener("browserPageLoaded",r);else return new Promise(i=>{window.open(e,"_self"),i()})})}close(){return n(this,null,function*(){yield z.removeAllListeners()})}}const le=new ze;var ie;(function(o){o.Prompt="PROMPT",o.Camera="CAMERA",o.Photos="PHOTOS"})(ie||(ie={}));var oe;(function(o){o.Rear="REAR",o.Front="FRONT"})(oe||(oe={}));var J;(function(o){o.Uri="uri",o.Base64="base64",o.DataUrl="dataUrl"})(J||(J={}));const Be=A("Camera",{web:()=>X(()=>import("./web-d4777810.js"),["assets/web-d4777810.js","assets/index-5a84dfa4.js","assets/index-34c8e459.css","assets/index-c37d70d8.js","assets/constant-72a8536f.js","assets/index-ad1a318a.js","assets/use-route-1671b2c2.js","assets/index-4fd1afda.js","assets/index-a7bd2c8c.js","assets/use-placeholder-30960a83.js","assets/on-popup-reopen-84d4d9b5.js","assets/index-9c31ede9.js"]).then(o=>new o.CameraWeb)}),V=A("BarcodeScanner",{web:()=>X(()=>import("./web-f93f07ae.js"),["assets/web-f93f07ae.js","assets/index-5a84dfa4.js","assets/index-34c8e459.css","assets/index-c37d70d8.js","assets/constant-72a8536f.js","assets/index-ad1a318a.js","assets/use-route-1671b2c2.js","assets/index-4fd1afda.js","assets/index-a7bd2c8c.js","assets/use-placeholder-30960a83.js","assets/on-popup-reopen-84d4d9b5.js","assets/index-9c31ede9.js"]).then(o=>new o.BarcodeScannerWeb)});class Fe{available(){return n(this,null,function*(){return!0})}isNative(){return w.isNativePlatform()}isIos(){return w.getPlatform()==="ios"}isAndroid(){return w.getPlatform()==="android"}isWeb(){return w.getPlatform()==="web"}config(){return n(this,null,function*(){a("NativeService config...")})}takePhotos(e="",t=1){return n(this,null,function*(){return a("NativeService takePhotos..."),new Promise((r,i)=>n(this,null,function*(){w.isPluginAvailable("Camera")?(a("NativeService Camera available."),yield Be.getPhoto({quality:90,allowEditing:!0,resultType:J.Uri}),r("")):(a("NativeService Camera not available."),i())}))})}scanQRCode(){return a("NativeService scanQRCode..."),new Promise((e,t)=>n(this,null,function*(){if(w.isPluginAvailable("BarcodeScanner")){a("NativeService BarcodeScanner available."),yield V.checkPermission({force:!0}),yield V.hideBackground();const i=yield V.startScan();i.hasContent?(a("LarkService scanQRCode success."),a(i),e(i.content)):(a("LarkService scanQRCode fail."),a(i),t())}else a("NativeService BarcodeScanner not available."),t()}))}}const R=new Fe,Ne=o=>ne("/api/oapis/wecom/signature",o),je=o=>ne("/api/oapis/wechat/signature",o);class He{available(){return n(this,null,function*(){return!0})}isWeChat(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}auth(e,t=!1){return n(this,null,function*(){a("WeChatService auth...");let r;$.isWebPlatform()&&!B(f.wechat.mp.webappRedirectUrl)?r=t?e:k(f.wechat.mp.webappRedirectUrl,q(e,"code")):$.isWapPlatform()&&!B(f.wechat.mp.mobileRedirectUrl)?r=t?e:k(f.wechat.mp.mobileRedirectUrl,q(e,"code")):r=t?e:k(f.wechat.mp.redirectUrl,q(e,"code"));const i=k(f.wechat.mp.appId,encodeURIComponent(r));a(`WeChatService redirect to ${i}.`),yield le.open(i,()=>{},()=>{})})}getSignature(e){return n(this,null,function*(){return a("WeChatService getSignature..."),yield je({url:e})})}config(){return n(this,null,function*(){a("WeChatService config...");const e=location.href.split("#")[0];return new Promise((t,r)=>{this.getSignature(e).then(i=>{i.data?(a("WeChatService config..."),wx.config({debug:!1,appId:i.data.appId,timestamp:i.data.timestamp,nonceStr:i.data.nonceStr,signature:i.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{a("WeChatService config ready."),t()}),wx.error(s=>{a("WeChatService config error."),console.log(s)})):r()}).catch(i=>{a("WeChatService config ready."),a(i),r()})})})}getPhoto(){return n(this,null,function*(){return a("WeChatService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return n(this,null,function*(){return a("WeChatService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",t=1){return n(this,null,function*(){return a("WeChatService takePhotos..."),new Promise((r,i)=>{wx?(a("WeChatService available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:t,sizeType:["original","compressed"],success:s=>{a("WeChatService takePhotos success."),a(s),r(s.localIds)},fail:()=>{a("WeChatService takePhotos fail."),i()}})})):(a("WeChatService not available."),i())})})}scanQRCode(){return a("WeChatService scanQRCode..."),new Promise((e,t)=>{console.log(wx),wx?(a("WeChatService wx available."),wx.ready(()=>{a("WeChatService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:r=>{a("WeChatService scanQRCode success."),a(r),e(r.resultStr)},cancel:r=>{a("WeChatService scanQRCode cancel."),a(r),t(r)},error:r=>{a("WeChatService scanQRCode error."),a(r),r.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),t(r)}})})):(a("WeChatService wx not available."),t())})}}const I=new He;class qe{available(){return n(this,null,function*(){return!0})}isLark(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return n(this,null,function*(){a("LarkService getSignature...")})}config(){return n(this,null,function*(){return this.isLark()?(a("LarkService getSignature..."),new Promise((e,t)=>{this.getSignature("url").then(r=>{r.data?(a("LarkService config..."),h5sdk.config({appId:r.data.appId,timestamp:+r.data.timestamp,nonceStr:r.data.nonceStr,signature:r.data.signature,jsApiList:["biz.navigation.close","biz.util.share"],onSuccess:i=>{a("LarkService config onSuccess."),a(i),e()},onFail:i=>{a("LarkService config onFail."),a(i),t()}}),h5sdk.error(i=>{a("LarkService config error."),a(i)}),h5sdk.ready(()=>{a("LarkService config ready.")})):t()})})):Promise.resolve()})}getPhoto(){return n(this,null,function*(){return a("LarkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return n(this,null,function*(){return a("LarkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",t=1){return n(this,null,function*(){return a("LarkService takePhotos..."),new Promise((r,i)=>{h5sdk?(a("LarkService h5sdk available."),h5sdk.ready(()=>{tt.chooseImage({sourceType:[e],count:t,sizeType:["original","compressed"],success:s=>{a("LarkService takePhotos success."),a(s),r(s.tempFilePaths)},fail:s=>{a("LarkService takePhotos success."),a(s),i()}})})):(a("LarkService h5sdk not available."),i())})})}scanQRCode(){return a("LarkService scanQRCode..."),new Promise((e,t)=>{h5sdk?(a("LarkService h5sdk available."),h5sdk.ready(()=>{a("LarkService h5sdk ready."),tt.scanCode({scanType:["barCode","qrCode"],barCodeInput:!0,success:r=>{a("LarkService scanQRCode success."),a(r),e(r.result)},fail:r=>{a("LarkService scanQRCode fail."),a(r),t()}})})):(a("LarkService h5sdk not available."),t())})}}const O=new qe;class Ge{available(){return n(this,null,function*(){return!0})}isDingTalk(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return n(this,null,function*(){a("DingTalkService getSignature...")})}config(){return n(this,null,function*(){return a("DingTalkService config..."),new Promise((e,t)=>{this.getSignature("url").then(r=>{r.data?(a("DingTalkService config..."),dd.config({agentId:r.data.agentId,corpId:r.data.corpId,timeStamp:r.data.timestamp,nonceStr:r.data.nonceStr,signature:r.data.signature,jsApiList:["runtime.info","biz.contact.choose","device.notification.confirm","device.notification.alert","device.notification.prompt","biz.ding.post","biz.util.openLink","biz.navigation.close","biz.util.share","biz.util.chooseImage","biz.util.scan"],onSuccess:i=>{a("DingTalkService config onSuccess."),a(i),e()},onFail:i=>{a("DingTalkService config onFail."),a(i),t()}}),dd.error(i=>{a("DingTalkService config error."),a(i)}),dd.ready(()=>{a("DingTalkService config ready.")})):t()})})})}getPhoto(){return n(this,null,function*(){return a("DingTalkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return n(this,null,function*(){return a("DingTalkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",t=1){return n(this,null,function*(){return a("DingTalkService takePhotos..."),new Promise((r,i)=>{dd?(a("DingTalkService dd available."),dd.ready(()=>{dd.chooseImage({sourceType:[e],count:t,position:["back"],onSuccess:s=>{a("DingTalkService takePhotos success."),console.log(s.tempFilePaths,s.tempFiles),r()},onFail:s=>{a("DingTalkService takePhotos fail."),i()}})})):(a("DingTalkService dd not available."),i())})})}scanQRCode(){return a("DingTalkService scanQRCode..."),new Promise((e,t)=>{dd?(a("DingTalkService dd available."),dd.ready(()=>{a("DingTalkService dd ready."),dd.biz.util.scan({type:"all",onSuccess:r=>{a("DingTalkService scanQRCode onSuccess."),a(r),e(r.text)},onFail:r=>{a("DingTalkService scanQRCode onFail."),a(r),t()}})})):(a("DingTalkService dd not available."),t())})}}const D=new Ge;class Ke{getPlatform(){return w.getPlatform()}isWapPlatform(){const e=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|phone/i.test(e)}isWebPlatform(){return!this.isWapPlatform()}initialize(){return n(this,null,function*(){a("PlatformService initialize..."),R.isNative()?yield R.config():U.isWeCom()?yield U.config():I.isWeChat()?yield I.config():O.isLark()?yield O.config():D.isDingTalk()&&(yield D.config())})}}const $=new Ke;class Ve{available(){return n(this,null,function*(){return!0})}isWeCom(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}isWeComEnabled(){return f.wechat.cp.enabled}auth(e="",t=!1){return n(this,null,function*(){a("WeComService auth...");let r;$.isWebPlatform()&&!B(f.wechat.cp.webappRedirectUrl)?(a(`WeComService webapp auth. ${f.wechat.cp.webappRedirectUrl}`),r=t?e:k(f.wechat.cp.webappRedirectUrl,e)):$.isWapPlatform()&&!B(f.wechat.cp.mobileRedirectUrl)?(a(`WeComService mobile auth. ${f.wechat.cp.mobileRedirectUrl}`),r=t?e:k(f.wechat.cp.mobileRedirectUrl,e)):(a(`WeComService auth. ${f.wechat.cp.redirectUrl}`),r=t?e:k(f.wechat.cp.redirectUrl,e)),a(`WeComService auth redirectUrl. ${r}`);const i=k(f.wechat.cp.oauthUrl,f.wechat.cp.appId,encodeURIComponent(r),f.wechat.cp.agentId,f.wechat.cp.oauthPrivateEnabled?"snsapi_privateinfo":"snsapi_base");a(`WeComService redirect to ${i}.`),be(i),yield le.open(i,()=>{},()=>{})})}getSignature(e){return n(this,null,function*(){return a("WeComService getSignature..."),yield Ne({url:e})})}config(){return n(this,null,function*(){a("WeComService config...");const e=location.href.split("#")[0];return new Promise((t,r)=>{this.getSignature(e).then(i=>{i.data?(a("WeComService config signature."),wx.config({debug:!1,appId:i.data.appId,timestamp:i.data.timestamp,nonceStr:i.data.nonceStr,signature:i.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{a("WeComService config ready."),t()}),wx.error(s=>{a("WeComService config error."),console.log(s)})):r()}).catch(i=>{a("WeComService config ready."),a(i),r()})})})}getPhoto(){return n(this,null,function*(){return a("WeComService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return n(this,null,function*(){return a("WeComService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",t=1){return n(this,null,function*(){return a("WeComService takePhotos..."),new Promise((r,i)=>{wx?(a("WeComService wx available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:t,sizeType:["original","compressed"],success:s=>{a("WeComService takePhotos success."),a(s),r(s.localIds)},fail:()=>{a("WeComService takePhotos fail."),i()}})})):(a("WeComService not available."),i())})})}scanQRCode(){return a("WeComService scanQRCode..."),new Promise((e,t)=>{console.log(wx),wx?(a("WeComService wx available."),wx.ready(()=>{a("WeComService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:r=>{a("WeComService scanQRCode success."),a(r),e(r.resultStr)},cancel:r=>{a("WeComService scanQRCode cancel."),a(r),t(r)},error:r=>{a("WeComService scanQRCode error."),a(r),r.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),t(r)}})})):(a("WeComService wx not available."),t())})}}const U=new Ve;class Je{available(){return n(this,null,function*(){return!0})}getPhoto(){return n(this,null,function*(){return a("CameraService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return n(this,null,function*(){return a("CameraService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",t=1){return n(this,null,function*(){a("CameraService choosePhotos..."),R.isNative()?yield R.takePhotos(e,t):U.isWeCom()?yield U.takePhotos(e,t):I.isWeChat()?yield I.takePhotos(e,t):O.isLark()?yield O.takePhotos(e,t):D.isDingTalk()&&(yield D.takePhotos(e,t))})}scanQrCode(){return n(this,null,function*(){a("CameraService scanQrCode..."),R.isNative()?yield R.scanQRCode():U.isWeCom()?yield U.scanQRCode():I.isWeChat()?yield I.scanQRCode():O.isLark()?yield O.scanQRCode():D.isDingTalk()&&(yield D.scanQRCode())})}}const Xe=new Je;class Ye{initialize(){return n(this,null,function*(){$.initialize().then(()=>{a("PlatformService initialize successfully.")})})}}const Ze=new Ye,ea=Ce({name:"MePage",setup(){const{t:o}=ye(),e=t=>alert(t);return ke(()=>n(this,null,function*(){a("Page <<MePage>> mounted."),yield Ze.initialize().then()})),()=>b(Le,null,[b(xe,{onClickLeft:Xe.getPhoto},{right:b(Te,null,{default:()=>[b(G,{name:"scan",onClick:e},null),b(G,{name:"setting-o",onClick:e},null),b(G,{name:"chat-o",onClick:e},null)]})}),b(We,{inset:!0,class:"mt-2"},{default:()=>[b(ae,{title:o("common.label_setting"),to:"/setting",isLink:!0},null),b(ae,{title:o("common.label_about"),to:"/about",isLink:!0},null)]})])}}),ca=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"}));export{ie as C,ce as W,oe as a,K as b,ca as m};
