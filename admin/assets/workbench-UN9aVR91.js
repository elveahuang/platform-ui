var l=(u,i,e)=>new Promise((p,a)=>{var d=n=>{try{t(e.next(n))}catch(m){a(m)}},r=n=>{try{t(e.throw(n))}catch(m){a(m)}},t=n=>n.done?p(n.value):Promise.resolve(n.value).then(d,r);t((e=e.apply(u,i)).next())});import{v,V,g as k,_ as B}from"./index.min-CHlTovfQ.js";import{d as P,r as b,o as g,l as c,am as x,O as j,b as h,f as C,A as w,h as o,w as y,i as s,j as _,F as $}from"./index-I6IEj8VZ.js";import"./ThemeDropdown.vue_vue_type_style_index_0_scoped_8799785f_lang-iZ5X_zze.js";import{A as f}from"./index-CA2M8UXb.js";import{C as T}from"./index-BO2ohnF2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BEdVc3wF.js";import"./shallowequal-BUhI_f4j.js";import"./isMobile-DTq5YDvJ.js";import"./useMergedState-B9wjZyMD.js";const O=P({__name:"VPlayer",props:{options:{type:Object,default(){return{}}}},setup(u){const i=u;let e=null,p=b();const a=()=>l(this,null,function*(){c("VPlayer setup..."),v.registerComponent("fullscreenButton",V)}),d=r=>l(this,null,function*(){const t=n=>{r.debug&&c(n)};r=k(r),e=v(p.value,r,()=>{r.disablePictureInPicture&&e.getChild("ControlBar").removeChild("PictureInPictureToggle"),e.getChild("ControlBar").addChild("fullscreenButton"),e.on("seeking",()=>{t(`VPlayer seeking. ${e.currentTime()}`)}),e.on("seeked",()=>{t(`VPlayer seeked. ${e.currentTime()}`)}),e.on("ended",()=>{t(`VPlayer ended. ${e.currentTime()}`)}),e.on("timeupdate",()=>{t(`VPlayer timeupdate. ${e.currentTime()}`)})})});return g(()=>l(this,null,function*(){c("Component <<VPlayer>> mounted."),yield a(),yield d(i.options).then()})),x(()=>l(this,null,function*(){c("Component <<VPlayer>> onBeforeUnmount."),j(e)||e.dispose()})),(r,t)=>(h(),C("video",{ref_key:"playerRef",ref:p,class:"video-js vjs-16-9 app-video-player","webkit-playsinline":"",playsinline:"","x5-playsinline":"","x5-video-player-fullscreen":"true","x5-video-player-type":"h5","x5-video-orientation":"portrait",preload:"metadata"},null,512))}}),A=_("span",null,"开心每一天",-1),q=P({__name:"workbench",setup(u){const i=w({src:"https://vjs.zencdn.net/v/oceans.mp4"});return g(()=>l(this,null,function*(){c("Page <<Workbench>> mounted.")})),(e,p)=>{const a=T;return h(),C($,null,[o(a,{title:"工作台"},{default:y(()=>[A]),_:1}),o(s(f)),o(a,{title:"播放器"},{default:y(()=>[_("div",null,[o(s(O),{options:s(i)},null,8,["options"])])]),_:1}),o(s(f)),o(a,{title:"编辑器",class:"mt-4"},{default:y(()=>[_("div",null,[o(s(B))])]),_:1}),o(s(f))],64)}}});export{q as default};