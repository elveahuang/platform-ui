var s=(n,e,r)=>new Promise((a,o)=>{var i=u=>{try{c(r.next(u))}catch(d){o(d)}},l=u=>{try{c(r.throw(u))}catch(d){o(d)}},c=u=>u.done?a(u.value):Promise.resolve(u.value).then(i,l);c((r=r.apply(n,e)).next())});import{b as Pe,d as ae,T as Ae,j as h,O as Z,b8 as Ue,t as ie,x as ee,m as Be,q as Se,ag as Me,ak as Qe,e as se,b9 as ze,Q as Fe,aA as je,F as Ce,ba as re,A as t,S as ye,bb as f,bc as N,bd as T,be as qe,bf as K,a2 as Ne,g as He,o as ce,c as le,C as U,E as Ge,D as J,I as Ve,a as E,H as de,G as Ke}from"./index-3272740f.js";/* empty css              */import{C as Je}from"./index-f672dff6.js";import{C as Ye}from"./index-c3d4d5a3.js";import{I as Xe}from"./index-e967be72.js";import{N as Ze}from"./index-631fb688.js";import{S as et}from"./index-872d4945.js";import{r as at,u as rt}from"./use-route-6a1bac27.js";const[ke,nt]=Pe("grid"),ot={square:Boolean,center:ie,border:ie,gutter:ee,reverse:Boolean,iconSize:ee,direction:String,clickable:Boolean,columnNum:Be(4)},_e=Symbol(ke);var it=ae({name:ke,props:ot,setup(n,{slots:e}){const{linkChildren:r}=Ae(_e);return r({props:n}),()=>{var a;return h("div",{style:{paddingLeft:Z(n.gutter)},class:[nt(),{[Ue]:n.border&&!n.gutter}]},[(a=e.default)==null?void 0:a.call(e)])}}});const st=Se(it),[ct,j]=Pe("grid-item"),lt=Me({},at,{dot:Boolean,text:String,icon:String,badge:ee,iconColor:String,iconPrefix:String,badgeProps:Object});var dt=ae({name:ct,props:lt,setup(n,{slots:e}){const{parent:r,index:a}=Qe(_e),o=rt();if(!r)return;const i=se(()=>{const{square:P,gutter:v,columnNum:w}=r.props,_=`${100/+w}%`,L={flexBasis:_};if(P)L.paddingTop=_;else if(v){const I=Z(v);L.paddingRight=I,a.value>=+w&&(L.marginTop=I)}return L}),l=se(()=>{const{square:P,gutter:v}=r.props;if(P&&v){const w=Z(v);return{right:w,bottom:w,height:"auto"}}}),c=()=>{if(e.icon)return h(je,Fe({dot:n.dot,content:n.badge},n.badgeProps),{default:e.icon});if(n.icon)return h(Ce,{dot:n.dot,name:n.icon,size:r.props.iconSize,badge:n.badge,class:j("icon"),color:n.iconColor,badgeProps:n.badgeProps,classPrefix:n.iconPrefix},null)},u=()=>{if(e.text)return e.text();if(n.text)return h("span",{class:j("text")},[n.text])},d=()=>e.default?e.default():[c(),u()];return()=>{const{center:P,border:v,square:w,gutter:_,reverse:L,direction:I,clickable:A}=r.props,Q=[j("content",[I,{center:P,square:w,reverse:L,clickable:A,surround:v&&_}]),{[ze]:v}];return h("div",{class:[j({square:w})],style:i.value},[h("div",{role:A?"button":void 0,class:Q,style:l.value,tabindex:A?0:void 0,onClick:o},[d()])])}}});const ut=Se(dt);/*! Capacitor: https://capacitorjs.com/ - MIT License */const gt=n=>{const e=new Map;e.set("web",{name:"web"});const r=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},a=(i,l)=>{r.platforms.set(i,l)},o=i=>{r.platforms.has(i)&&(r.currentPlatform=r.platforms.get(i))};return r.addPlatform=a,r.setPlatform=o,r},mt=n=>n.CapacitorPlatforms=gt(n),Le=mt(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});Le.addPlatform;Le.setPlatform;var D;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(D||(D={}));class Y extends Error{constructor(e,r,a){super(e),this.message=e,this.code=r,this.data=a}}const ft=n=>{var e,r;return n!=null&&n.androidBridge?"android":!((r=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},vt=n=>{var e,r,a,o,i;const l=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},u=c.Plugins=c.Plugins||{},d=n.CapacitorPlatforms,P=()=>l!==null?l.name:ft(n),v=((e=d==null?void 0:d.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||P,w=()=>v()!=="web",_=((r=d==null?void 0:d.currentPlatform)===null||r===void 0?void 0:r.isNativePlatform)||w,L=g=>{const m=H.get(g);return!!(m!=null&&m.platforms.has(v())||Q(g))},I=((a=d==null?void 0:d.currentPlatform)===null||a===void 0?void 0:a.isPluginAvailable)||L,A=g=>{var m;return(m=c.PluginHeaders)===null||m===void 0?void 0:m.find(O=>O.name===g)},Q=((o=d==null?void 0:d.currentPlatform)===null||o===void 0?void 0:o.getPluginHeader)||A,Te=g=>n.console.error(g),Re=(g,m,O)=>Promise.reject(`${O} does not have an implementation of "${m}".`),H=new Map,Ie=(g,m={})=>{const O=H.get(g);if(O)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),O.proxy;const R=v(),$=Q(g);let k;const $e=()=>s(void 0,null,function*(){return!k&&R in m?k=typeof m[R]=="function"?k=yield m[R]():k=m[R]:l!==null&&!k&&"web"in m&&(k=typeof m.web=="function"?k=yield m.web():k=m.web),k}),Ee=(p,b)=>{var y,x;if($){const W=$==null?void 0:$.methods.find(C=>b===C.name);if(W)return W.rtype==="promise"?C=>c.nativePromise(g,b.toString(),C):(C,z)=>c.nativeCallback(g,b.toString(),C,z);if(p)return(y=p[b])===null||y===void 0?void 0:y.bind(p)}else{if(p)return(x=p[b])===null||x===void 0?void 0:x.bind(p);throw new Y(`"${g}" plugin is not implemented on ${R}`,D.Unimplemented)}},G=p=>{let b;const y=(...x)=>{const W=$e().then(C=>{const z=Ee(C,p);if(z){const F=z(...x);return b=F==null?void 0:F.remove,F}else throw new Y(`"${g}.${p}()" is not implemented on ${R}`,D.Unimplemented)});return p==="addListener"&&(W.remove=()=>s(void 0,null,function*(){return b()})),W};return y.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(y,"name",{value:p,writable:!1,configurable:!1}),y},ne=G("addListener"),oe=G("removeListener"),De=(p,b)=>{const y=ne({eventName:p},b),x=()=>s(void 0,null,function*(){const C=yield y;oe({eventName:p,callbackId:C},b)}),W=new Promise(C=>y.then(()=>C({remove:x})));return W.remove=()=>s(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield x()}),W},V=new Proxy({},{get(p,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?De:ne;case"removeListener":return oe;default:return G(b)}}});return u[g]=V,H.set(g,{name:g,proxy:V,platforms:new Set([...Object.keys(m),...$?[R]:[]])}),V},Oe=((i=d==null?void 0:d.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||Ie;return c.convertFileSrc||(c.convertFileSrc=g=>g),c.getPlatform=v,c.handleError=Te,c.isNativePlatform=_,c.isPluginAvailable=I,c.pluginMethodNoop=Re,c.registerPlugin=Oe,c.Exception=Y,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},ht=n=>n.Capacitor=vt(n),S=ht(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),M=S.registerPlugin;S.Plugins;class xe{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,r){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(r);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const i=()=>s(this,null,function*(){return this.removeListener(e,r)}),l=Promise.resolve({remove:i});return Object.defineProperty(l,"remove",{value:()=>s(this,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield i()})}),l}removeAllListeners(){return s(this,null,function*(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,r){const a=this.listeners[e];a&&a.forEach(o=>o(r))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,r){this.windowListeners[r]={registered:!1,windowEventName:e,pluginEventName:r,handler:a=>{this.notifyListeners(r,a)}}}unimplemented(e="not implemented"){return new S.Exception(e,D.Unimplemented)}unavailable(e="not available"){return new S.Exception(e,D.Unavailable)}removeListener(e,r){return s(this,null,function*(){const a=this.listeners[e];if(!a)return;const o=a.indexOf(r);this.listeners[e].splice(o,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const ue=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ge=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class pt extends xe{getCookies(){return s(this,null,function*(){const e=document.cookie,r={};return e.split(";").forEach(a=>{if(a.length<=0)return;let[o,i]=a.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=ge(o).trim(),i=ge(i).trim(),r[o]=i}),r})}setCookie(e){return s(this,null,function*(){try{const r=ue(e.key),a=ue(e.value),o=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),l=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${r}=${a||""}${o}; path=${i}; ${l};`}catch(r){return Promise.reject(r)}})}deleteCookie(e){return s(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}})}clearCookies(){return s(this,null,function*(){try{const e=document.cookie.split(";")||[];for(const r of e)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return s(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}}M("CapacitorCookies",{web:()=>new pt});const wt=n=>s(void 0,null,function*(){return new Promise((e,r)=>{const a=new FileReader;a.onload=()=>{const o=a.result;e(o.indexOf(",")>=0?o.split(",")[1]:o)},a.onerror=o=>r(o),a.readAsDataURL(n)})}),bt=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(o=>o.toLocaleLowerCase()).reduce((o,i,l)=>(o[i]=n[e[l]],o),{})},Pt=(n,e=!0)=>n?Object.entries(n).reduce((a,o)=>{const[i,l]=o;let c,u;return Array.isArray(l)?(u="",l.forEach(d=>{c=e?encodeURIComponent(d):d,u+=`${i}=${c}&`}),u.slice(0,-1)):(c=e?encodeURIComponent(l):l,u=`${i}=${c}`),`${a}&${u}`},"").substr(1):null,St=(n,e={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},e),o=bt(n.headers)["content-type"]||"";if(typeof n.data=="string")r.body=n.data;else if(o.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[l,c]of Object.entries(n.data||{}))i.set(l,c);r.body=i.toString()}else if(o.includes("multipart/form-data")){const i=new FormData;if(n.data instanceof FormData)n.data.forEach((c,u)=>{i.append(u,c)});else for(const c of Object.keys(n.data))i.append(c,n.data[c]);r.body=i;const l=new Headers(r.headers);l.delete("content-type"),r.headers=l}else(o.includes("application/json")||typeof n.data=="object")&&(r.body=JSON.stringify(n.data));return r};class Ct extends xe{request(e){return s(this,null,function*(){const r=St(e,e.webFetchExtra),a=Pt(e.params,e.shouldEncodeUrlParams),o=a?`${e.url}?${a}`:e.url,i=yield fetch(o,r),l=i.headers.get("content-type")||"";let{responseType:c="text"}=i.ok?e:{};l.includes("application/json")&&(c="json");let u,d;switch(c){case"arraybuffer":case"blob":d=yield i.blob(),u=yield wt(d);break;case"json":u=yield i.json();break;case"document":case"text":default:u=yield i.text()}const P={};return i.headers.forEach((v,w)=>{P[w]=v}),{data:u,headers:P,status:i.status,url:i.url}})}get(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}}M("CapacitorHttp",{web:()=>new Ct});const q=M("Browser",{web:()=>re(()=>import("./web-7a61c747.js"),["assets/web-7a61c747.js","assets/index-3272740f.js","assets/index-e907ac2a.css","assets/index-f672dff6.js","assets/use-route-6a1bac27.js","assets/index-84d44fe9.css","assets/index-c3d4d5a3.js","assets/index-5987bc0e.css","assets/index-e967be72.js","assets/index-24ee41ea.css","assets/index-631fb688.js","assets/use-placeholder-00d37a30.js","assets/index-7bc4136f.css","assets/index-872d4945.js","assets/index-5005ec54.css","assets/index-58c5c4aa.css"]).then(n=>new n.BrowserWeb)});class yt{available(){return s(this,null,function*(){return!0})}open(e,r,a){return s(this,null,function*(){if(S.isNativePlatform())yield q.open({url:e}),yield q.addListener("browserFinished",r),yield q.addListener("browserPageLoaded",a);else return new Promise(o=>{window.open(e,"_self"),o()})})}close(){return s(this,null,function*(){yield q.removeAllListeners()})}}const We=new yt;class kt{available(){return s(this,null,function*(){return!0})}isDingTalk(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return s(this,null,function*(){t(e),t("DingTalkService getSignature...")})}config(){return s(this,null,function*(){return t("DingTalkService config..."),new Promise((e,r)=>{this.getSignature("url").then(a=>{a.data?(t("DingTalkService config..."),dd.config({agentId:a.data.agentId,corpId:a.data.corpId,timeStamp:a.data.timestamp,nonceStr:a.data.nonceStr,signature:a.data.signature,jsApiList:["runtime.info","biz.contact.choose","device.notification.confirm","device.notification.alert","device.notification.prompt","biz.ding.post","biz.util.openLink","biz.navigation.close","biz.util.share","biz.util.chooseImage","biz.util.scan"],onSuccess:o=>{t("DingTalkService config onSuccess."),t(o),e()},onFail:o=>{t("DingTalkService config onFail."),t(o),r()}}),dd.error(o=>{t("DingTalkService config error."),t(o)}),dd.ready(()=>{t("DingTalkService config ready.")})):r()})})})}getPhoto(){return s(this,null,function*(){return t("DingTalkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("DingTalkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",r=1){return s(this,null,function*(){return t("DingTalkService takePhotos..."),new Promise((a,o)=>{dd?(t("DingTalkService dd available."),dd.ready(()=>{dd.chooseImage({sourceType:[e],count:r,position:["back"],onSuccess:i=>{t("DingTalkService takePhotos success."),console.log(i.tempFilePaths,i.tempFiles),a()},onFail:i=>{t("DingTalkService takePhotos fail."),t(i),o()}})})):(t("DingTalkService dd not available."),o())})})}scanQRCode(){return t("DingTalkService scanQRCode..."),new Promise((e,r)=>{dd?(t("DingTalkService dd available."),dd.ready(()=>{t("DingTalkService dd ready."),dd.biz.util.scan({type:"all",onSuccess:a=>{t("DingTalkService scanQRCode onSuccess."),t(a),e(a.text)},onFail:a=>{t("DingTalkService scanQRCode onFail."),t(a),r()}})})):(t("DingTalkService dd not available."),r())})}}const me=new kt;class _t{available(){return s(this,null,function*(){return!0})}isLark(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return s(this,null,function*(){t(e),t("LarkService getSignature...")})}config(){return s(this,null,function*(){return this.isLark()?(t("LarkService getSignature..."),new Promise((e,r)=>{this.getSignature("url").then(a=>{a.data?(t("LarkService config..."),h5sdk.config({appId:a.data.appId,timestamp:+a.data.timestamp,nonceStr:a.data.nonceStr,signature:a.data.signature,jsApiList:["biz.navigation.close","biz.util.share"],onSuccess:o=>{t("LarkService config onSuccess."),t(o),e()},onFail:o=>{t("LarkService config onFail."),t(o),r()}}),h5sdk.error(o=>{t("LarkService config error."),t(o)}),h5sdk.ready(()=>{t("LarkService config ready.")})):r()})})):Promise.resolve()})}getPhoto(){return s(this,null,function*(){return t("LarkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("LarkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",r=1){return s(this,null,function*(){return t("LarkService takePhotos..."),new Promise((a,o)=>{h5sdk?(t("LarkService h5sdk available."),h5sdk.ready(()=>{tt.chooseImage({sourceType:[e],count:r,sizeType:["original","compressed"],success:i=>{t("LarkService takePhotos success."),t(i),a(i.tempFilePaths)},fail:i=>{t("LarkService takePhotos success."),t(i),o()}})})):(t("LarkService h5sdk not available."),o())})})}scanQRCode(){return t("LarkService scanQRCode..."),new Promise((e,r)=>{h5sdk?(t("LarkService h5sdk available."),h5sdk.ready(()=>{t("LarkService h5sdk ready."),tt.scanCode({scanType:["barCode","qrCode"],barCodeInput:!0,success:a=>{t("LarkService scanQRCode success."),t(a),e(a.result)},fail:a=>{t("LarkService scanQRCode fail."),t(a),r()}})})):(t("LarkService h5sdk not available."),r())})}}const fe=new _t,X=M("BarcodeScanner",{web:()=>re(()=>import("./web-c65a4b66.js"),["assets/web-c65a4b66.js","assets/index-3272740f.js","assets/index-e907ac2a.css","assets/index-f672dff6.js","assets/use-route-6a1bac27.js","assets/index-84d44fe9.css","assets/index-c3d4d5a3.js","assets/index-5987bc0e.css","assets/index-e967be72.js","assets/index-24ee41ea.css","assets/index-631fb688.js","assets/use-placeholder-00d37a30.js","assets/index-7bc4136f.css","assets/index-872d4945.js","assets/index-5005ec54.css","assets/index-58c5c4aa.css"]).then(n=>new n.BarcodeScannerWeb)});var ve;(function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"})(ve||(ve={}));var he;(function(n){n.Rear="REAR",n.Front="FRONT"})(he||(he={}));var te;(function(n){n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl"})(te||(te={}));const Lt=M("Camera",{web:()=>re(()=>import("./web-df580b30.js"),["assets/web-df580b30.js","assets/index-3272740f.js","assets/index-e907ac2a.css","assets/index-f672dff6.js","assets/use-route-6a1bac27.js","assets/index-84d44fe9.css","assets/index-c3d4d5a3.js","assets/index-5987bc0e.css","assets/index-e967be72.js","assets/index-24ee41ea.css","assets/index-631fb688.js","assets/use-placeholder-00d37a30.js","assets/index-7bc4136f.css","assets/index-872d4945.js","assets/index-5005ec54.css","assets/index-58c5c4aa.css"]).then(n=>new n.CameraWeb)});class xt{available(){return s(this,null,function*(){return!0})}isNative(){return S.isNativePlatform()}isIos(){return S.getPlatform()==="ios"}isAndroid(){return S.getPlatform()==="android"}isWeb(){return S.getPlatform()==="web"}config(){return s(this,null,function*(){t("NativeService config...")})}takePhotos(e="",r=1){return s(this,null,function*(){return t("NativeService takePhotos..."),t(e),t(r),new Promise((a,o)=>s(this,null,function*(){S.isPluginAvailable("Camera")?(t("NativeService Camera available."),yield Lt.getPhoto({quality:90,allowEditing:!0,resultType:te.Uri}),a("")):(t("NativeService Camera not available."),o())}))})}scanQRCode(){return t("NativeService scanQRCode..."),new Promise((e,r)=>s(this,null,function*(){if(S.isPluginAvailable("BarcodeScanner")){t("NativeService BarcodeScanner available."),yield X.checkPermission({force:!0}),yield X.hideBackground();const o=yield X.startScan();o.hasContent?(t("LarkService scanQRCode success."),t(o),e(o.content)):(t("LarkService scanQRCode fail."),t(o),r())}else t("NativeService BarcodeScanner not available."),r()}))}}const pe=new xt,Wt=n=>ye("/api/oapis/wecom/signature",n),Tt=n=>ye("/api/oapis/wechat/signature",n);class Rt{available(){return s(this,null,function*(){return!0})}isWeCom(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}isWeComEnabled(){return f.wechat.cp.enabled}auth(e="",r=!1){return s(this,null,function*(){t("WeComService auth...");let a;B.isWebPlatform()&&!N(f.wechat.cp.webappRedirectUrl)?(t(`WeComService webapp auth. ${f.wechat.cp.webappRedirectUrl}`),a=r?e:T(f.wechat.cp.webappRedirectUrl,e)):B.isWapPlatform()&&!N(f.wechat.cp.mobileRedirectUrl)?(t(`WeComService mobile auth. ${f.wechat.cp.mobileRedirectUrl}`),a=r?e:T(f.wechat.cp.mobileRedirectUrl,e)):(t(`WeComService auth. ${f.wechat.cp.redirectUrl}`),a=r?e:T(f.wechat.cp.redirectUrl,e)),t(`WeComService auth redirectUrl. ${a}`);const o=T(f.wechat.cp.oauthUrl,f.wechat.cp.appId,encodeURIComponent(a),f.wechat.cp.agentId,f.wechat.cp.oauthPrivateEnabled?"snsapi_privateinfo":"snsapi_base");t(`WeComService redirect to ${o}.`),qe(o),yield We.open(o,()=>{},()=>{})})}getSignature(e){return s(this,null,function*(){return t("WeComService getSignature..."),yield Wt({url:e})})}config(){return s(this,null,function*(){t("WeComService config...");const e=location.href.split("#")[0];return new Promise((r,a)=>{this.getSignature(e).then(o=>{o.data?(t("WeComService config signature."),wx.config({debug:!1,appId:o.data.appId,timestamp:o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{t("WeComService config ready."),r()}),wx.error(i=>{t("WeComService config error."),console.log(i)})):a()}).catch(o=>{t("WeComService config ready."),t(o),a()})})})}getPhoto(){return s(this,null,function*(){return t("WeComService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("WeComService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",r=1){return s(this,null,function*(){return t("WeComService takePhotos..."),new Promise((a,o)=>{wx?(t("WeComService wx available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:r,sizeType:["original","compressed"],success:i=>{t("WeComService takePhotos success."),t(i),a(i.localIds)},fail:()=>{t("WeComService takePhotos fail."),o()}})})):(t("WeComService not available."),o())})})}scanQRCode(){return t("WeComService scanQRCode..."),new Promise((e,r)=>{console.log(wx),wx?(t("WeComService wx available."),wx.ready(()=>{t("WeComService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:a=>{t("WeComService scanQRCode success."),t(a),e(a.resultStr)},cancel:a=>{t("WeComService scanQRCode cancel."),t(a),r(a)},error:a=>{t("WeComService scanQRCode error."),t(a),a.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),r(a)}})})):(t("WeComService wx not available."),r())})}}const we=new Rt;class It{getPlatform(){return S.getPlatform()}isWapPlatform(){const e=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|phone/i.test(e)}isWebPlatform(){return!this.isWapPlatform()}initialize(){return s(this,null,function*(){t("PlatformService initialize..."),pe.isNative()?yield pe.config():we.isWeCom()?yield we.config():be.isWeChat()?yield be.config():fe.isLark()?yield fe.config():me.isDingTalk()&&(yield me.config())})}}const B=new It;class Ot{available(){return s(this,null,function*(){return!0})}isWeChat(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}auth(e,r=!1){return s(this,null,function*(){t("WeChatService auth...");let a;B.isWebPlatform()&&!N(f.wechat.mp.webappRedirectUrl)?a=r?e:T(f.wechat.mp.webappRedirectUrl,K(e,"code")):B.isWapPlatform()&&!N(f.wechat.mp.mobileRedirectUrl)?a=r?e:T(f.wechat.mp.mobileRedirectUrl,K(e,"code")):a=r?e:T(f.wechat.mp.redirectUrl,K(e,"code"));const o=T(f.wechat.mp.appId,encodeURIComponent(a));t(`WeChatService redirect to ${o}.`),yield We.open(o,()=>{},()=>{})})}getSignature(e){return s(this,null,function*(){return t("WeChatService getSignature..."),yield Tt({url:e})})}config(){return s(this,null,function*(){t("WeChatService config...");const e=location.href.split("#")[0];return new Promise((r,a)=>{this.getSignature(e).then(o=>{o.data?(t("WeChatService config..."),wx.config({debug:!1,appId:o.data.appId,timestamp:o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{t("WeChatService config ready."),r()}),wx.error(i=>{t("WeChatService config error."),console.log(i)})):a()}).catch(o=>{t("WeChatService config ready."),t(o),a()})})})}getPhoto(){return s(this,null,function*(){return t("WeChatService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("WeChatService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",r=1){return s(this,null,function*(){return t("WeChatService takePhotos..."),new Promise((a,o)=>{wx?(t("WeChatService available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:r,sizeType:["original","compressed"],success:i=>{t("WeChatService takePhotos success."),t(i),a(i.localIds)},fail:()=>{t("WeChatService takePhotos fail."),o()}})})):(t("WeChatService not available."),o())})})}scanQRCode(){return t("WeChatService scanQRCode..."),new Promise((e,r)=>{console.log(wx),wx?(t("WeChatService wx available."),wx.ready(()=>{t("WeChatService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:a=>{t("WeChatService scanQRCode success."),t(a),e(a.resultStr)},cancel:a=>{t("WeChatService scanQRCode cancel."),t(a),r(a)},error:a=>{t("WeChatService scanQRCode error."),t(a),a.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),r(a)}})})):(t("WeChatService wx not available."),r())})}}const be=new Ot;class $t{initialize(){return s(this,null,function*(){B.initialize().then(()=>{t("PlatformService initialize successfully.")})})}}const Et=new $t,Dt={class:"m-6 flex"},At={class:"flex-none"},Ut=E("div",{class:"ml-3 mt-2 w-1 flex-grow"},[E("div",{class:"van-ellipsis name font-medium"},"用户名")],-1),Bt=E("div",{class:"divider"},null,-1),Mt=E("div",{class:"divider"},null,-1),Qt=ae({__name:"me",setup(n){const{t:e}=Ne(),r=a=>alert(a);return He(()=>s(this,null,function*(){t("Page <<MePage>> mounted."),yield Et.initialize().then()})),(a,o)=>{const i=Ce,l=et,c=Ze,u=Xe,d=ut,P=st,v=Ye,w=Je;return ce(),le(de,null,[h(c,null,{default:U(()=>[Ge(a.$slots,"right",{},()=>[h(l,null,{default:U(()=>[h(J(Ve),{icon:"ion:person-outline"}),h(i,{color:"primary",onClick:r,name:"scan"})]),_:1})])]),_:3}),E("div",Dt,[E("div",At,[h(u,{round:"",width:"3.5rem",height:"3.5rem",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"})]),Ut]),Bt,h(v,{inset:""},{default:U(()=>[h(P,{square:""},{default:U(()=>[(ce(),le(de,null,Ke(8,_=>h(d,{key:_,icon:"photo-o",text:"文字"})),64))]),_:1})]),_:1}),Mt,h(v,{inset:""},{default:U(()=>[h(w,{title:J(e)("common.label_setting"),to:"/setting",isLink:""},null,8,["title"]),h(w,{title:J(e)("common.label_about"),to:"/about",isLink:""},null,8,["title"])]),_:1})],64)}}}),Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"}));export{ve as C,xe as W,he as a,Y as b,Jt as m};
