var s=(r,e,a)=>new Promise((o,n)=>{var i=m=>{try{c(a.next(m))}catch(l){n(l)}},u=m=>{try{c(a.throw(m))}catch(l){n(l)}},c=m=>m.done?o(m.value):Promise.resolve(m.value).then(i,u);c((a=a.apply(r,e)).next())});import{S as Re,V as ve,a3 as ce,T as Ne,d as ue,af as je,h as d,ab as le,aH as qe,a2 as Ie,ak as He,al as Ve,ao as Ge,am as Ke,C as he,aI as Je,ad as Ye,ap as Xe,n as $e,aJ as me,l as t,ae as Oe,aK as w,aL as Z,aM as D,aN as Ze,aO as oe,s as et,k as at,y as we,g as ot,o as A,c as re,b as B,w as f,aP as rt,u as b,a as J,x as be,t as ne,F as nt,r as it,m as Se,e as j,B as st,aQ as ct,aR as lt,I as z}from"./index-yr82g5Id.js";/* empty css              *//* empty css              */import{C as dt}from"./index-uT4UsI-2.js";/* empty css              *//* empty css              *//* empty css              */import{N as ut}from"./index-2lpc9fcE.js";import{S as mt}from"./index-LSB3hadS.js";import{S as gt}from"./index-_6WxTWae.js";import{I as pt}from"./index-7jJToemQ.js";import{C as ft}from"./index-QhCywFPO.js";import{_ as vt}from"./_plugin-vue_export-helper-x3n3nnut.js";const[Ee,ht]=Re("grid"),wt={square:Boolean,center:ve,border:ve,gutter:ce,reverse:Boolean,iconSize:ce,direction:String,clickable:Boolean,columnNum:Ne(4)},De=Symbol(Ee);var bt=ue({name:Ee,props:wt,setup(r,{slots:e}){const{linkChildren:a}=je(De);return a({props:r}),()=>{var o;return d("div",{style:{paddingLeft:le(r.gutter)},class:[ht(),{[qe]:r.border&&!r.gutter}]},[(o=e.default)==null?void 0:o.call(e)])}}});const St=Ie(bt),[Pt,Y]=Re("grid-item"),yt=He({},Ve,{dot:Boolean,text:String,icon:String,badge:ce,iconColor:String,iconPrefix:String,badgeProps:Object});var Ct=ue({name:Pt,props:yt,setup(r,{slots:e}){const{parent:a,index:o}=Ge(De),n=Ke();if(!a)return;const i=he(()=>{const{square:p,gutter:g,columnNum:P}=a.props,T=`${100/+P}%`,_={flexBasis:T};if(p)_.paddingTop=T;else if(g){const R=le(g);_.paddingRight=R,o.value>=+P&&(_.marginTop=R)}return _}),u=he(()=>{const{square:p,gutter:g}=a.props;if(p&&g){const P=le(g);return{right:P,bottom:P,height:"auto"}}}),c=()=>{if(e.icon)return d(Xe,Ye({dot:r.dot,content:r.badge},r.badgeProps),{default:e.icon});if(r.icon)return d($e,{dot:r.dot,name:r.icon,size:a.props.iconSize,badge:r.badge,class:Y("icon"),color:r.iconColor,badgeProps:r.badgeProps,classPrefix:r.iconPrefix},null)},m=()=>{if(e.text)return e.text();if(r.text)return d("span",{class:Y("text")},[r.text])},l=()=>e.default?e.default():[c(),m()];return()=>{const{center:p,border:g,square:P,gutter:T,reverse:_,direction:R,clickable:I}=a.props,M=[Y("content",[R,{center:p,square:P,reverse:_,clickable:I,surround:g&&T}]),{[Je]:g}];return d("div",{class:[Y({square:P})],style:i.value},[d("div",{role:I?"button":void 0,class:M,style:u.value,tabindex:I?0:void 0,onClick:n},[l()])])}}});const kt=Ie(Ct),_t="/platform-ui/mobile/assets/avatar-YO7jExdN.png";/*! Capacitor: https://capacitorjs.com/ - MIT License */const Lt=r=>{const e=new Map;e.set("web",{name:"web"});const a=r.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(i,u)=>{a.platforms.set(i,u)},n=i=>{a.platforms.has(i)&&(a.currentPlatform=a.platforms.get(i))};return a.addPlatform=o,a.setPlatform=n,a},xt=r=>r.CapacitorPlatforms=Lt(r),Ue=xt(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});Ue.addPlatform;Ue.setPlatform;var N;(function(r){r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE"})(N||(N={}));class ie extends Error{constructor(e,a,o){super(e),this.message=e,this.code=a,this.data=o}}const Wt=r=>{var e,a;return r!=null&&r.androidBridge?"android":!((a=(e=r==null?void 0:r.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},Tt=r=>{var e,a,o,n,i;const u=r.CapacitorCustomPlatform||null,c=r.Capacitor||{},m=c.Plugins=c.Plugins||{},l=r.CapacitorPlatforms,p=()=>u!==null?u.name:Wt(r),g=((e=l==null?void 0:l.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,P=()=>g()!=="web",T=((a=l==null?void 0:l.currentPlatform)===null||a===void 0?void 0:a.isNativePlatform)||P,_=v=>{const h=$.get(v);return!!(h!=null&&h.platforms.has(g())||M(v))},R=((o=l==null?void 0:l.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||_,I=v=>{var h;return(h=c.PluginHeaders)===null||h===void 0?void 0:h.find(Q=>Q.name===v)},M=((n=l==null?void 0:l.currentPlatform)===null||n===void 0?void 0:n.getPluginHeader)||I,ee=v=>r.console.error(v),V=(v,h,Q)=>Promise.reject(`${Q} does not have an implementation of "${h}".`),$=new Map,L=(v,h={})=>{const Q=$.get(v);if(Q)return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`),Q.proxy;const U=g(),F=M(v);let W;const Me=()=>s(void 0,null,function*(){return!W&&U in h?W=typeof h[U]=="function"?W=yield h[U]():W=h[U]:u!==null&&!W&&"web"in h&&(W=typeof h.web=="function"?W=yield h.web():W=h.web),W}),Qe=(S,y)=>{var x,O;if(F){const E=F==null?void 0:F.methods.find(k=>y===k.name);if(E)return E.rtype==="promise"?k=>c.nativePromise(v,y.toString(),k):(k,G)=>c.nativeCallback(v,y.toString(),k,G);if(S)return(x=S[y])===null||x===void 0?void 0:x.bind(S)}else{if(S)return(O=S[y])===null||O===void 0?void 0:O.bind(S);throw new ie(`"${v}" plugin is not implemented on ${U}`,N.Unimplemented)}},te=S=>{let y;const x=(...O)=>{const E=Me().then(k=>{const G=Qe(k,S);if(G){const K=G(...O);return y=K==null?void 0:K.remove,K}else throw new ie(`"${v}.${S}()" is not implemented on ${U}`,N.Unimplemented)});return S==="addListener"&&(E.remove=()=>s(void 0,null,function*(){return y()})),E};return x.toString=()=>`${S.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:S,writable:!1,configurable:!1}),x},pe=te("addListener"),fe=te("removeListener"),Fe=(S,y)=>{const x=pe({eventName:S},y),O=()=>s(void 0,null,function*(){const k=yield x;fe({eventName:S,callbackId:k},y)}),E=new Promise(k=>x.then(()=>k({remove:O})));return E.remove=()=>s(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield O()}),E},ae=new Proxy({},{get(S,y){switch(y){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return F?Fe:pe;case"removeListener":return fe;default:return te(y)}}});return m[v]=ae,$.set(v,{name:v,proxy:ae,platforms:new Set([...Object.keys(h),...F?[U]:[]])}),ae},Be=((i=l==null?void 0:l.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||L;return c.convertFileSrc||(c.convertFileSrc=v=>v),c.getPlatform=g,c.handleError=ee,c.isNativePlatform=T,c.isPluginAvailable=R,c.pluginMethodNoop=V,c.registerPlugin=Be,c.Exception=ie,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},Rt=r=>r.Capacitor=Tt(r),C=Rt(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),H=C.registerPlugin;C.Plugins;class Ae{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,a){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(a);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const i=()=>s(this,null,function*(){return this.removeListener(e,a)}),u=Promise.resolve({remove:i});return Object.defineProperty(u,"remove",{value:()=>s(this,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield i()})}),u}removeAllListeners(){return s(this,null,function*(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,a){const o=this.listeners[e];o&&o.forEach(n=>n(a))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,a){this.windowListeners[a]={registered:!1,windowEventName:e,pluginEventName:a,handler:o=>{this.notifyListeners(a,o)}}}unimplemented(e="not implemented"){return new C.Exception(e,N.Unimplemented)}unavailable(e="not available"){return new C.Exception(e,N.Unavailable)}removeListener(e,a){return s(this,null,function*(){const o=this.listeners[e];if(!o)return;const n=o.indexOf(a);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const Pe=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ye=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class It extends Ae{getCookies(){return s(this,null,function*(){const e=document.cookie,a={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,i]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=ye(n).trim(),i=ye(i).trim(),a[n]=i}),a})}setCookie(e){return s(this,null,function*(){try{const a=Pe(e.key),o=Pe(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),u=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${a}=${o||""}${n}; path=${i}; ${u};`}catch(a){return Promise.reject(a)}})}deleteCookie(e){return s(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}})}clearCookies(){return s(this,null,function*(){try{const e=document.cookie.split(";")||[];for(const a of e)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return s(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}}H("CapacitorCookies",{web:()=>new It});const $t=r=>s(void 0,null,function*(){return new Promise((e,a)=>{const o=new FileReader;o.onload=()=>{const n=o.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},o.onerror=n=>a(n),o.readAsDataURL(r)})}),Ot=(r={})=>{const e=Object.keys(r);return Object.keys(r).map(n=>n.toLocaleLowerCase()).reduce((n,i,u)=>(n[i]=r[e[u]],n),{})},Et=(r,e=!0)=>r?Object.entries(r).reduce((o,n)=>{const[i,u]=n;let c,m;return Array.isArray(u)?(m="",u.forEach(l=>{c=e?encodeURIComponent(l):l,m+=`${i}=${c}&`}),m.slice(0,-1)):(c=e?encodeURIComponent(u):u,m=`${i}=${c}`),`${o}&${m}`},"").substr(1):null,Dt=(r,e={})=>{const a=Object.assign({method:r.method||"GET",headers:r.headers},e),n=Ot(r.headers)["content-type"]||"";if(typeof r.data=="string")a.body=r.data;else if(n.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[u,c]of Object.entries(r.data||{}))i.set(u,c);a.body=i.toString()}else if(n.includes("multipart/form-data")||r.data instanceof FormData){const i=new FormData;if(r.data instanceof FormData)r.data.forEach((c,m)=>{i.append(m,c)});else for(const c of Object.keys(r.data))i.append(c,r.data[c]);a.body=i;const u=new Headers(a.headers);u.delete("content-type"),a.headers=u}else(n.includes("application/json")||typeof r.data=="object")&&(a.body=JSON.stringify(r.data));return a};class Ut extends Ae{request(e){return s(this,null,function*(){const a=Dt(e,e.webFetchExtra),o=Et(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,i=yield fetch(n,a),u=i.headers.get("content-type")||"";let{responseType:c="text"}=i.ok?e:{};u.includes("application/json")&&(c="json");let m,l;switch(c){case"arraybuffer":case"blob":l=yield i.blob(),m=yield $t(l);break;case"json":m=yield i.json();break;case"document":case"text":default:m=yield i.text()}const p={};return i.headers.forEach((g,P)=>{p[P]=g}),{data:m,headers:p,status:i.status,url:i.url}})}get(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return s(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}}H("CapacitorHttp",{web:()=>new Ut});const X=H("Browser",{web:()=>me(()=>import("./web-SooHdv3A.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(r=>new r.BrowserWeb)});class At{available(){return s(this,null,function*(){return!0})}open(e,a,o){return s(this,null,function*(){if(C.isNativePlatform())yield X.open({url:e}),yield X.addListener("browserFinished",a),yield X.addListener("browserPageLoaded",o);else return new Promise(n=>{window.open(e,"_self"),n()})})}close(){return s(this,null,function*(){yield X.removeAllListeners()})}}const ze=new At;class zt{available(){return s(this,null,function*(){return!0})}isDingTalk(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return s(this,null,function*(){t(e),t("DingTalkService getSignature...")})}config(){return s(this,null,function*(){return t("DingTalkService config..."),new Promise((e,a)=>{this.getSignature("url").then(o=>{o.data?(t("DingTalkService config..."),dd.config({agentId:o.data.agentId,corpId:o.data.corpId,timeStamp:o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature,jsApiList:["runtime.info","biz.contact.choose","device.notification.confirm","device.notification.alert","device.notification.prompt","biz.ding.post","biz.util.openLink","biz.navigation.close","biz.util.share","biz.util.chooseImage","biz.util.scan"],onSuccess:n=>{t("DingTalkService config onSuccess."),t(n),e()},onFail:n=>{t("DingTalkService config onFail."),t(n),a()}}),dd.error(n=>{t("DingTalkService config error."),t(n)}),dd.ready(()=>{t("DingTalkService config ready.")})):a()})})})}getPhoto(){return s(this,null,function*(){return t("DingTalkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("DingTalkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",a=1){return s(this,null,function*(){return t("DingTalkService takePhotos..."),new Promise((o,n)=>{dd?(t("DingTalkService dd available."),dd.ready(()=>{dd.chooseImage({sourceType:[e],count:a,position:["back"],onSuccess:i=>{t("DingTalkService takePhotos success."),console.log(i.tempFilePaths,i.tempFiles),o()},onFail:i=>{t("DingTalkService takePhotos fail."),t(i),n()}})})):(t("DingTalkService dd not available."),n())})})}scanQRCode(){return t("DingTalkService scanQRCode..."),new Promise((e,a)=>{dd?(t("DingTalkService dd available."),dd.ready(()=>{t("DingTalkService dd ready."),dd.biz.util.scan({type:"all",onSuccess:o=>{t("DingTalkService scanQRCode onSuccess."),t(o),e(o.text)},onFail:o=>{t("DingTalkService scanQRCode onFail."),t(o),a()}})})):(t("DingTalkService dd not available."),a())})}}const Ce=new zt;class Bt{available(){return s(this,null,function*(){return!0})}isLark(){return window.navigator.userAgent.toLowerCase().indexOf("lark")!==-1}getSignature(e){return s(this,null,function*(){t(e),t("LarkService getSignature...")})}config(){return s(this,null,function*(){return this.isLark()?(t("LarkService getSignature..."),new Promise((e,a)=>{this.getSignature("url").then(o=>{o.data?(t("LarkService config..."),h5sdk.config({appId:o.data.appId,timestamp:+o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature,jsApiList:["biz.navigation.close","biz.util.share"],onSuccess:n=>{t("LarkService config onSuccess."),t(n),e()},onFail:n=>{t("LarkService config onFail."),t(n),a()}}),h5sdk.error(n=>{t("LarkService config error."),t(n)}),h5sdk.ready(()=>{t("LarkService config ready.")})):a()})})):Promise.resolve()})}getPhoto(){return s(this,null,function*(){return t("LarkService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("LarkService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",a=1){return s(this,null,function*(){return t("LarkService takePhotos..."),new Promise((o,n)=>{h5sdk?(t("LarkService h5sdk available."),h5sdk.ready(()=>{tt.chooseImage({sourceType:[e],count:a,sizeType:["original","compressed"],success:i=>{t("LarkService takePhotos success."),t(i),o(i.tempFilePaths)},fail:i=>{t("LarkService takePhotos success."),t(i),n()}})})):(t("LarkService h5sdk not available."),n())})})}scanQRCode(){return t("LarkService scanQRCode..."),new Promise((e,a)=>{h5sdk?(t("LarkService h5sdk available."),h5sdk.ready(()=>{t("LarkService h5sdk ready."),tt.scanCode({scanType:["barCode","qrCode"],barCodeInput:!0,success:o=>{t("LarkService scanQRCode success."),t(o),e(o.result)},fail:o=>{t("LarkService scanQRCode fail."),t(o),a()}})})):(t("LarkService h5sdk not available."),a())})}}const ke=new Bt,se=H("BarcodeScanner",{web:()=>me(()=>import("./web-AdcrfOVg.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(r=>new r.BarcodeScannerWeb)});var _e;(function(r){r.Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS"})(_e||(_e={}));var Le;(function(r){r.Rear="REAR",r.Front="FRONT"})(Le||(Le={}));var de;(function(r){r.Uri="uri",r.Base64="base64",r.DataUrl="dataUrl"})(de||(de={}));const Mt=H("Camera",{web:()=>me(()=>import("./web-9nITuzlX.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(r=>new r.CameraWeb)});class Qt{available(){return s(this,null,function*(){return!0})}isNative(){return C.isNativePlatform()}isIos(){return C.getPlatform()==="ios"}isAndroid(){return C.getPlatform()==="android"}isWeb(){return C.getPlatform()==="web"}config(){return s(this,null,function*(){t("NativeService config...")})}takePhotos(e="",a=1){return s(this,null,function*(){return t("NativeService takePhotos..."),t(e),t(a),new Promise((o,n)=>s(this,null,function*(){C.isPluginAvailable("Camera")?(t("NativeService Camera available."),yield Mt.getPhoto({quality:90,allowEditing:!0,resultType:de.Uri}),o("")):(t("NativeService Camera not available."),n())}))})}scanQRCode(){return t("NativeService scanQRCode..."),new Promise((e,a)=>s(this,null,function*(){if(C.isPluginAvailable("BarcodeScanner")){t("NativeService BarcodeScanner available."),yield se.checkPermission({force:!0}),yield se.hideBackground();const n=yield se.startScan();n.hasContent?(t("LarkService scanQRCode success."),t(n),e(n.content)):(t("LarkService scanQRCode fail."),t(n),a())}else t("NativeService BarcodeScanner not available."),a()}))}}const xe=new Qt,Ft=r=>Oe("/api/oapis/wecom/signature",r),Nt=r=>Oe("/api/oapis/wechat/signature",r);class jt{available(){return s(this,null,function*(){return!0})}isWeCom(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}isWeComEnabled(){return w.wechat.cp.enabled}auth(e="",a=!1){return s(this,null,function*(){t("WeComService auth...");let o;q.isWebPlatform()&&!Z(w.wechat.cp.webappRedirectUrl)?(t(`WeComService webapp auth. ${w.wechat.cp.webappRedirectUrl}`),o=a?e:D(w.wechat.cp.webappRedirectUrl,e)):q.isWapPlatform()&&!Z(w.wechat.cp.mobileRedirectUrl)?(t(`WeComService mobile auth. ${w.wechat.cp.mobileRedirectUrl}`),o=a?e:D(w.wechat.cp.mobileRedirectUrl,e)):(t(`WeComService auth. ${w.wechat.cp.redirectUrl}`),o=a?e:D(w.wechat.cp.redirectUrl,e)),t(`WeComService auth redirectUrl. ${o}`);const n=D(w.wechat.cp.oauthUrl,w.wechat.cp.appId,encodeURIComponent(o),w.wechat.cp.agentId,w.wechat.cp.oauthPrivateEnabled?"snsapi_privateinfo":"snsapi_base");t(`WeComService redirect to ${n}.`),Ze(n),yield ze.open(n,()=>{},()=>{})})}getSignature(e){return s(this,null,function*(){return t("WeComService getSignature..."),yield Ft({url:e})})}config(){return s(this,null,function*(){t("WeComService config...");const e=location.href.split("#")[0];return new Promise((a,o)=>{this.getSignature(e).then(n=>{n.data?(t("WeComService config signature."),wx.config({debug:!1,appId:n.data.appId,timestamp:n.data.timestamp,nonceStr:n.data.nonceStr,signature:n.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{t("WeComService config ready."),a()}),wx.error(i=>{t("WeComService config error."),console.log(i)})):o()}).catch(n=>{t("WeComService config ready."),t(n),o()})})})}getPhoto(){return s(this,null,function*(){return t("WeComService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("WeComService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",a=1){return s(this,null,function*(){return t("WeComService takePhotos..."),new Promise((o,n)=>{wx?(t("WeComService wx available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:a,sizeType:["original","compressed"],success:i=>{t("WeComService takePhotos success."),t(i),o(i.localIds)},fail:()=>{t("WeComService takePhotos fail."),n()}})})):(t("WeComService not available."),n())})})}scanQRCode(){return t("WeComService scanQRCode..."),new Promise((e,a)=>{console.log(wx),wx?(t("WeComService wx available."),wx.ready(()=>{t("WeComService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:o=>{t("WeComService scanQRCode success."),t(o),e(o.resultStr)},cancel:o=>{t("WeComService scanQRCode cancel."),t(o),a(o)},error:o=>{t("WeComService scanQRCode error."),t(o),o.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),a(o)}})})):(t("WeComService wx not available."),a())})}}const We=new jt;class qt{getPlatform(){return C.getPlatform()}isWapPlatform(){const e=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|phone/i.test(e)}isWebPlatform(){return!this.isWapPlatform()}initialize(){return s(this,null,function*(){t("PlatformService initialize..."),xe.isNative()?yield xe.config():We.isWeCom()?yield We.config():Te.isWeChat()?yield Te.config():ke.isLark()?yield ke.config():Ce.isDingTalk()&&(yield Ce.config())})}}const q=new qt;class Ht{available(){return s(this,null,function*(){return!0})}isWeChat(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!=-1&&e.indexOf("wxwork")!=-1}auth(e,a=!1){return s(this,null,function*(){t("WeChatService auth...");let o;q.isWebPlatform()&&!Z(w.wechat.mp.webappRedirectUrl)?o=a?e:D(w.wechat.mp.webappRedirectUrl,oe(e,"code")):q.isWapPlatform()&&!Z(w.wechat.mp.mobileRedirectUrl)?o=a?e:D(w.wechat.mp.mobileRedirectUrl,oe(e,"code")):o=a?e:D(w.wechat.mp.redirectUrl,oe(e,"code"));const n=D(w.wechat.mp.appId,encodeURIComponent(o));t(`WeChatService redirect to ${n}.`),yield ze.open(n,()=>{},()=>{})})}getSignature(e){return s(this,null,function*(){return t("WeChatService getSignature..."),yield Nt({url:e})})}config(){return s(this,null,function*(){t("WeChatService config...");const e=location.href.split("#")[0];return new Promise((a,o)=>{this.getSignature(e).then(n=>{n.data?(t("WeChatService config..."),wx.config({debug:!1,appId:n.data.appId,timestamp:n.data.timestamp,nonceStr:n.data.nonceStr,signature:n.data.signature,jsApiList:["chooseImage","getLocalImgData","previewImage","scanQRCode","getLocation","uploadImage","downloadImage","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","invoke"]}),wx.ready(()=>{t("WeChatService config ready."),a()}),wx.error(i=>{t("WeChatService config error."),console.log(i)})):o()}).catch(n=>{t("WeChatService config ready."),t(n),o()})})})}getPhoto(){return s(this,null,function*(){return t("WeChatService getPhoto..."),this.takePhotos("camera",1)})}choosePhotos(e=1){return s(this,null,function*(){return t("WeChatService choosePhotos..."),this.takePhotos("album",e)})}takePhotos(e="",a=1){return s(this,null,function*(){return t("WeChatService takePhotos..."),new Promise((o,n)=>{wx?(t("WeChatService available."),wx.ready(()=>{wx.chooseImage({sourceType:[e],count:a,sizeType:["original","compressed"],success:i=>{t("WeChatService takePhotos success."),t(i),o(i.localIds)},fail:()=>{t("WeChatService takePhotos fail."),n()}})})):(t("WeChatService not available."),n())})})}scanQRCode(){return t("WeChatService scanQRCode..."),new Promise((e,a)=>{console.log(wx),wx?(t("WeChatService wx available."),wx.ready(()=>{t("WeChatService wx ready."),wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:o=>{t("WeChatService scanQRCode success."),t(o),e(o.resultStr)},cancel:o=>{t("WeChatService scanQRCode cancel."),t(o),a(o)},error:o=>{t("WeChatService scanQRCode error."),t(o),o.errMsg.indexOf("function_not_exist")>0&&console.log("版本过低请升级"),a(o)}})})):(t("WeChatService wx not available."),a())})}}const Te=new Ht;class Vt{initialize(){return s(this,null,function*(){q.initialize().then(()=>{t("PlatformService initialize successfully.")})})}}const Gt=new Vt,ge=r=>(ct("data-v-aa707501"),r=r(),lt(),r),Kt={class:"app-page"},Jt={class:"app-page-content"},Yt={class:"m-4 flex"},Xt={class:"flex-none"},Zt={class:"mt-2 w-1 flex-grow pl-4"},ea={key:1,class:"app-text-primary"},ta=ge(()=>B("div",{class:"app-divider"},null,-1)),aa=ge(()=>B("div",{class:"app-divider"},null,-1)),oa=ge(()=>B("div",{class:"app-divider"},null,-1)),ra=ue({__name:"me",setup(r){const{user:e,logout:a,isAnonymous:o,isAuthenticated:n}=et(),i=at("app-header app-header-transparent"),u=l=>{l.isFixed&&l.scrollTop&&l.scrollTop>60?i.value="app-header":i.value="app-header app-header-transparent"},c=we.me.getApps(),m=()=>{a().then(()=>{j.push(we.app.getLogoutSuccessUrl())})};return ot(()=>s(this,null,function*(){t("Page <<MePage>> mounted."),yield Gt.initialize().then()})),(l,p)=>{const g=$e,P=mt,T=ut,_=gt,R=pt,I=st,M=kt,ee=St,V=dt,$=ft;return A(),re("div",Kt,[B("div",Jt,[d(_,{onScroll:u},{default:f(()=>[d(T,{border:!1,class:rt(b(i))},{right:f(()=>[d(P,null,{default:f(()=>[d(g,{size:"24",onClick:p[0]||(p[0]=L=>b(j).push({path:"/notifications/index"}))},{default:f(()=>[d(b(z),{icon:"mdi:bell-outline"})]),_:1}),d(g,{size:"24",onClick:p[1]||(p[1]=L=>b(j).push({path:"/setting"}))},{default:f(()=>[d(b(z),{icon:"mdi:cog-outline"})]),_:1})]),_:1})]),_:1},8,["class"])]),_:1}),B("div",Yt,[B("div",Xt,[d(R,{round:"",class:"!align-middle",width:"3.6rem",height:"3.6rem",src:b(_t)},null,8,["src"])]),B("div",Zt,[b(o)?(A(),J(P,{key:0},{default:f(()=>[d(I,{plain:"",hairline:"",type:"primary",size:"small",onClick:p[2]||(p[2]=L=>b(j).push({path:"/login"}))},{default:f(()=>[be(ne(l.$t("common.user_pages_login_title")),1)]),_:1}),d(I,{plain:"",hairline:"",type:"primary",size:"small",onClick:p[3]||(p[3]=L=>b(j).push({path:"/register"}))},{default:f(()=>[be(ne(l.$t("common.user_pages_register_title")),1)]),_:1})]),_:1})):(A(),re("div",ea,ne(b(e).displayName),1))])]),ta,d(V,{inset:""},{default:f(()=>[d(ee,{square:"","column-num":"4"},{default:f(()=>[(A(!0),re(nt,null,it(b(c),L=>(A(),J(M,{key:L.id,text:L.title},{icon:f(()=>[d(g,{class:"app-icon mb-2",size:"28"},{default:f(()=>[d(b(z),{icon:L.icon},null,8,["icon"])]),_:2},1024)]),_:2},1032,["text"]))),128))]),_:1})]),_:1}),aa,d(V,{inset:""},{default:f(()=>[d($,{title:l.$t("common.label_settings"),to:"/setting",isLink:""},{icon:f(()=>[d(g,{class:"app-icon mr-4",size:"24"},{default:f(()=>[d(b(z),{icon:"mdi:cog-outline"})]),_:1})]),_:1},8,["title"]),b(n)?(A(),J($,{key:0,title:l.$t("common.label_change_password"),to:"/change-password",isLink:""},{icon:f(()=>[d(g,{class:"app-icon mr-4",size:"24"},{default:f(()=>[d(b(z),{icon:"mdi:lock-outline"})]),_:1})]),_:1},8,["title"])):Se("",!0),d($,{title:l.$t("common.label_about"),to:"/about",isLink:""},{icon:f(()=>[d(g,{class:"app-icon mr-4",size:"24"},{default:f(()=>[d(b(z),{icon:"mdi:information-outline"})]),_:1})]),_:1},8,["title"]),b(n)?(A(),J($,{key:1,title:l.$t("common.label_logout"),isLink:"",onClick:p[4]||(p[4]=L=>m())},{icon:f(()=>[d(g,{class:"app-icon mr-4",size:"24"},{default:f(()=>[d(b(z),{icon:"mdi:logout"})]),_:1})]),_:1},8,["title"])):Se("",!0)]),_:1}),oa])])}}}),na=vt(ra,[["__scopeId","data-v-aa707501"]]),Sa=Object.freeze(Object.defineProperty({__proto__:null,default:na},Symbol.toStringTag,{value:"Module"}));export{_e as C,Ae as W,Le as a,ie as b,Sa as m};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/web-SooHdv3A.js","assets/index-yr82g5Id.js","assets/index-b0kGtYqm.css","assets/index-uT4UsI-2.js","assets/index-rHmRMBNN.css","assets/index-2lpc9fcE.js","assets/index-77gEKLkW.css","assets/index-LSB3hadS.js","assets/index-3Z3WLORr.css","assets/index-_6WxTWae.js","assets/index-7jJToemQ.js","assets/index-QhCywFPO.js","assets/_plugin-vue_export-helper-x3n3nnut.js","assets/index-hMkrbRz-.css","assets/index-o2_jW2Kc.css","assets/index-ASpd5Mej.css","assets/index-w0h_iFXW.css","assets/index-uXiK-tWw.css","assets/web-AdcrfOVg.js","assets/web-9nITuzlX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}