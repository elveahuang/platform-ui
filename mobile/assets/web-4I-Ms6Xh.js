var s=(d,t,e)=>new Promise((a,i)=>{var n=c=>{try{o(e.next(c))}catch(l){i(l)}},r=c=>{try{o(e.throw(c))}catch(l){i(l)}},o=c=>c.done?a(c.value):Promise.resolve(c.value).then(n,r);o((e=e.apply(d,t)).next())});import{W as u,C as m,a as p,b as h}from"./me-OKicCS5C.js";import"./index-r_gE4c3h.js";/* empty css              *//* empty css              */import"./index-WHj4oEXz.js";/* empty css              *//* empty css              *//* empty css              */import"./index-Rgx1zju0.js";import"./index-DEvHrUoc.js";import"./index--Bj26cv7.js";import"./index-pDUP9iOr.js";import"./index-imyC-rqw.js";import"./_plugin-vue_export-helper-x3n3nnut.js";class f extends u{getPhoto(t){return s(this,null,function*(){return new Promise((e,a)=>s(this,null,function*(){if(t.webUseInput||t.source===m.Photos)this.fileInputExperience(t,e);else if(t.source===m.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=t.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",n=>s(this,null,function*(){n.detail===0?this.fileInputExperience(t,e):this.cameraExperience(t,e,a)}))}else this.cameraExperience(t,e,a)}))})}pickImages(t){return s(this,null,function*(){return new Promise(e=>s(this,null,function*(){this.multipleFileInputExperience(e)}))})}cameraExperience(t,e,a){return s(this,null,function*(){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=t.direction===p.Front?"user":"environment",document.body.appendChild(i);try{yield i.componentOnReady(),i.addEventListener("onPhoto",n=>s(this,null,function*(){const r=n.detail;r===null?a(new h("User cancelled photos app")):r instanceof Error?a(r):e(yield this._getCameraPhoto(r,t)),i.dismiss(),document.body.removeChild(i)})),i.present()}catch(n){this.fileInputExperience(t,e)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,e)})}fileInputExperience(t,e){let a=document.querySelector("#_capacitor-camera-input");const i=()=>{var n;(n=a.parentNode)===null||n===void 0||n.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",n=>{const r=a.files[0];let o="jpeg";if(r.type==="image/png"?o="png":r.type==="image/gif"&&(o="gif"),t.resultType==="dataUrl"||t.resultType==="base64"){const c=new FileReader;c.addEventListener("load",()=>{if(t.resultType==="dataUrl")e({dataUrl:c.result,format:o});else if(t.resultType==="base64"){const l=c.result.split(",")[1];e({base64String:l,format:o})}i()}),c.readAsDataURL(r)}else e({webPath:URL.createObjectURL(r),format:o}),i()})),a.accept="image/*",a.capture=!0,t.source===m.Photos||t.source===m.Prompt?a.removeAttribute("capture"):t.direction===p.Front?a.capture="user":t.direction===p.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(t){let e=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var i;(i=e.parentNode)===null||i===void 0||i.removeChild(e)};e||(e=document.createElement("input"),e.id="_capacitor-camera-input-multiple",e.type="file",e.hidden=!0,e.multiple=!0,document.body.appendChild(e),e.addEventListener("change",i=>{const n=[];for(let r=0;r<e.files.length;r++){const o=e.files[r];let c="jpeg";o.type==="image/png"?c="png":o.type==="image/gif"&&(c="gif"),n.push({webPath:URL.createObjectURL(o),format:c})}t({photos:n}),a()})),e.accept="image/*",e.click()}_getCameraPhoto(t,e){return new Promise((a,i)=>{const n=new FileReader,r=t.type.split("/")[1];e.resultType==="uri"?a({webPath:URL.createObjectURL(t),format:r,saved:!1}):(n.readAsDataURL(t),n.onloadend=()=>{const o=n.result;e.resultType==="dataUrl"?a({dataUrl:o,format:r,saved:!1}):a({base64String:o.split(",")[1],format:r,saved:!1})},n.onerror=o=>{i(o)})})}checkPermissions(){return s(this,null,function*(){if(typeof navigator=="undefined"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}})}requestPermissions(){return s(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}pickLimitedLibraryPhotos(){return s(this,null,function*(){throw this.unavailable("Not implemented on web.")})}getLimitedLibraryPhotos(){return s(this,null,function*(){throw this.unavailable("Not implemented on web.")})}}const F=new f;export{F as Camera,f as CameraWeb};