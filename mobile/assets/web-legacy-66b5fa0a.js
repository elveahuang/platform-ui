System.register(["./index-legacy-1b70f568.js"],(function(e,t){"use strict";var a,n,i,r;return{setters:[e=>{a=e.W,n=e.C,i=e.a,r=e.b}],execute:function(){class t extends a{async getPhoto(e){return new Promise((async(t,a)=>{if(e.webUseInput||e.source===n.Photos)this.fileInputExperience(e,t);else if(e.source===n.Prompt){let n=document.querySelector("pwa-action-sheet");n||(n=document.createElement("pwa-action-sheet"),document.body.appendChild(n)),n.header=e.promptLabelHeader||"Photo",n.cancelable=!1,n.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],n.addEventListener("onSelection",(async n=>{0===n.detail?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)}))}else this.cameraExperience(e,t,a)}))}async pickImages(e){return new Promise((async e=>{this.multipleFileInputExperience(e)}))}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const o=document.createElement("pwa-camera-modal");o.facingMode=e.direction===i.Front?"user":"environment",document.body.appendChild(o);try{await o.componentOnReady(),o.addEventListener("onPhoto",(async n=>{const i=n.detail;null===i?a(new r("User cancelled photos app")):i instanceof Error?a(i):t(await this._getCameraPhoto(i,e)),o.dismiss(),document.body.removeChild(o)})),o.present()}catch(n){this.fileInputExperience(e,t)}}else this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const r=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",(n=>{const i=a.files[0];let o="jpeg";if("image/png"===i.type?o="png":"image/gif"===i.type&&(o="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const a=new FileReader;a.addEventListener("load",(()=>{if("dataUrl"===e.resultType)t({dataUrl:a.result,format:o});else if("base64"===e.resultType){const e=a.result.split(",")[1];t({base64String:e,format:o})}r()})),a.readAsDataURL(i)}else t({webPath:URL.createObjectURL(i),format:o}),r()}))),a.accept="image/*",a.capture=!0,e.source===n.Photos||e.source===n.Prompt?a.removeAttribute("capture"):e.direction===i.Front?a.capture="user":e.direction===i.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e){let t=document.querySelector("#_capacitor-camera-input-multiple");t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",(a=>{const n=[];for(let e=0;e<t.files.length;e++){const a=t.files[e];let i="jpeg";"image/png"===a.type?i="png":"image/gif"===a.type&&(i="gif"),n.push({webPath:URL.createObjectURL(a),format:i})}var i;e({photos:n}),null===(i=t.parentNode)||void 0===i||i.removeChild(t)}))),t.accept="image/*",t.click()}_getCameraPhoto(e,t){return new Promise(((a,n)=>{const i=new FileReader,r=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:r,saved:!1}):(i.readAsDataURL(e),i.onloadend=()=>{const e=i.result;"dataUrl"===t.resultType?a({dataUrl:e,format:r,saved:!1}):a({base64String:e.split(",")[1],format:r,saved:!1})},i.onerror=e=>{n(e)})}))}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}e("CameraWeb",t),e("Camera",new t)}}}));
