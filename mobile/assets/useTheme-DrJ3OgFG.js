var y=(e,a,n)=>new Promise((r,s)=>{var m=c=>{try{u(n.next(c))}catch(d){s(d)}},f=c=>{try{u(n.throw(c))}catch(d){s(d)}},u=c=>c.done?r(c.value):Promise.resolve(c.value).then(m,f);u((n=n.apply(e,a)).next())});import{e as A,aV as be,aG as D,x as Q,d as X,n as G,bi as _,b7 as L,r as E,f as ge,g as O,aF as se,aK as ce,bu as pe,j as ie,b as h,t as re,ba as Z,m as B,aE as ue,aD as Te,aC as Oe,bk as ke,C as q,k as z,bb as ye,aU as ee,b9 as te,aY as Ce,bI as Se,y as xe,bJ as R,bK as we,bL as Ee,bM as V,bN as De}from"./index-CLZvx8Ks.js";const[Ie,p,ne]=A("picker"),de=e=>e.find(a=>!a.disabled)||e[0];function Me(e,a){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(a.children in n)return"cascade"}return"default"}function $(e,a){a=Q(a,0,e.length);for(let n=a;n<e.length;n++)if(!e[n].disabled)return n;for(let n=a-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const ae=(e,a,n)=>a!==void 0&&!!e.find(r=>r[n.value]===a);function W(e,a,n){const r=e.findIndex(m=>m[n.value]===a),s=$(e,r);return e[s]}function Pe(e,a,n){const r=[];let s={[a.children]:e},m=0;for(;s&&s[a.children];){const f=s[a.children],u=n.value[m];if(s=be(u)?W(f,u,a):void 0,!s&&f.length){const c=de(f)[a.value];s=W(f,c,a)}m++,r.push(f)}return r}function He(e){const{transform:a}=window.getComputedStyle(e),n=a.slice(7,a.length-1).split(", ")[5];return Number(n)}function Ne(e){return D({text:"text",value:"value",children:"children"},e)}const oe=200,le=300,_e=15,[me,J]=A("picker-column"),fe=Symbol(me);var Be=X({name:me,props:{value:G,fields:_(Object),options:L(),readonly:Boolean,allowHtml:Boolean,optionHeight:_(Number),swipeDuration:_(G),visibleOptionNum:_(G)},emits:["change","clickOption","scrollInto"],setup(e,{emit:a,slots:n}){let r,s,m,f,u;const c=E(),d=E(),v=E(0),b=E(0),C=ge(),S=()=>e.options.length,H=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,k=i=>{let t=$(e.options,i);const o=-t*e.optionHeight,l=()=>{t>S()-1&&(t=$(e.options,i));const T=e.options[t][e.fields.value];T!==e.value&&a("change",T)};r&&o!==v.value?u=l:l(),v.value=o},g=()=>e.readonly||!e.options.length,F=i=>{r||g()||(u=null,b.value=oe,k(i),a("clickOption",e.options[i]))},x=i=>Q(Math.round(-i/e.optionHeight),0,S()-1),N=O(()=>x(v.value)),U=(i,t)=>{const o=Math.abs(i/t);i=v.value+o/.003*(i<0?-1:1);const l=x(i);b.value=+e.swipeDuration,k(l)},I=()=>{r=!1,b.value=0,u&&(u(),u=null)},Y=i=>{if(!g()){if(C.start(i),r){const t=He(d.value);v.value=Math.min(0,t-H())}b.value=0,s=v.value,m=Date.now(),f=s,u=null}},j=i=>{if(g())return;C.move(i),C.isVertical()&&(r=!0,re(i,!0));const t=Q(s+C.deltaY.value,-(S()*e.optionHeight),e.optionHeight),o=x(t);o!==N.value&&a("scrollInto",e.options[o]),v.value=t;const l=Date.now();l-m>le&&(m=l,f=t)},M=()=>{if(g())return;const i=v.value-f,t=Date.now()-m;if(t<le&&Math.abs(i)>_e){U(i,t);return}const l=x(v.value);b.value=oe,k(l),setTimeout(()=>{r=!1},0)},w=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((t,o)=>{const l=t[e.fields.text],{disabled:T}=t,P=t[e.fields.value],ve={role:"button",style:i,tabindex:T?-1:0,class:[J("item",{disabled:T,selected:P===e.value}),t.className],onClick:()=>F(o)},he={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:l};return h("li",ve,[n.option?n.option(t,o):h("div",he,null)])})};return se(fe),ce({stopMomentum:I}),pe(()=>{const i=r?Math.floor(-v.value/e.optionHeight):e.options.findIndex(l=>l[e.fields.value]===e.value),t=$(e.options,i),o=-t*e.optionHeight;r&&t<i&&I(),v.value=o}),ie("touchmove",j,{target:c}),()=>h("div",{ref:c,class:J(),onTouchstartPassive:Y,onTouchend:M,onTouchcancel:M},[h("ul",{ref:d,style:{transform:`translate3d(0, ${v.value+H()}px, 0)`,transitionDuration:`${b.value}ms`,transitionProperty:b.value?"all":"none"},class:J("wrapper"),onTransitionend:I},[w()])])}});const[Ve]=A("picker-toolbar"),K={title:String,cancelButtonText:String,confirmButtonText:String},$e=["cancel","confirm","title","toolbar"],Le=Object.keys(K);var Ae=X({name:Ve,props:K,emits:["confirm","cancel"],setup(e,{emit:a,slots:n}){const r=()=>{if(n.title)return n.title();if(e.title)return h("div",{class:[p("title"),"van-ellipsis"]},[e.title])},s=()=>a("cancel"),m=()=>a("confirm"),f=()=>{var c;const d=(c=e.cancelButtonText)!=null?c:ne("cancel");if(!(!n.cancel&&!d))return h("button",{type:"button",class:[p("cancel"),Z],onClick:s},[n.cancel?n.cancel():d])},u=()=>{var c;const d=(c=e.confirmButtonText)!=null?c:ne("confirm");if(!(!n.confirm&&!d))return h("button",{type:"button",class:[p("confirm"),Z],onClick:m},[n.confirm?n.confirm():d])};return()=>h("div",{class:p("toolbar")},[n.toolbar?n.toolbar():[f(),r(),u()]])}});const[Re,Ze]=A("picker-group"),Ke=Symbol(Re);D({tabs:L(),activeTab:B(0),nextStepText:String,showToolbar:ue},K);const Fe=D({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:B(44),showToolbar:ue,swipeDuration:B(1e3),visibleOptionNum:B(6)},K),Ue=D({},Fe,{columns:L(),modelValue:L(),toolbarPosition:Te("top"),columnsFieldNames:Object});var Ye=X({name:Ie,props:Ue,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:a,slots:n}){const r=E(),s=E(e.modelValue.slice(0)),{parent:m}=se(Ke),{children:f,linkChildren:u}=Oe(fe);u();const c=O(()=>Ne(e.columnsFieldNames)),d=O(()=>ke(e.optionHeight)),v=O(()=>Me(e.columns,c.value)),b=O(()=>{const{columns:t}=e;switch(v.value){case"multiple":return t;case"cascade":return Pe(t,c.value,s);default:return[t]}}),C=O(()=>b.value.some(t=>t.length)),S=O(()=>b.value.map((t,o)=>W(t,s.value[o],c.value))),H=O(()=>b.value.map((t,o)=>t.findIndex(l=>l[c.value.value]===s.value[o]))),k=(t,o)=>{if(s.value[t]!==o){const l=s.value.slice(0);l[t]=o,s.value=l}},g=()=>({selectedValues:s.value.slice(0),selectedOptions:S.value,selectedIndexes:H.value}),F=(t,o)=>{k(o,t),v.value==="cascade"&&s.value.forEach((l,T)=>{const P=b.value[T];ae(P,l,c.value)||k(T,P.length?P[0][c.value.value]:void 0)}),ee(()=>{a("change",D({columnIndex:o},g()))})},x=(t,o)=>{const l={columnIndex:o,currentOption:t};a("clickOption",D(g(),l)),a("scrollInto",l)},N=()=>{f.forEach(o=>o.stopMomentum());const t=g();return ee(()=>{a("confirm",t)}),t},U=()=>a("cancel",g()),I=()=>b.value.map((t,o)=>h(Be,{value:s.value[o],fields:c.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:d.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:l=>F(l,o),onClickOption:l=>x(l,o),onScrollInto:l=>{a("scrollInto",{currentOption:l,columnIndex:o})}},{option:n.option})),Y=t=>{if(C.value){const o={height:`${d.value}px`},l={backgroundSize:`100% ${(t-d.value)/2}px`};return[h("div",{class:p("mask"),style:l},null),h("div",{class:[Se,p("frame")],style:o},null)]}},j=()=>{const t=d.value*+e.visibleOptionNum,o={height:`${t}px`};return h("div",{ref:r,class:p("columns"),style:o},[I(),Y(t)])},M=()=>{if(e.showToolbar&&!m)return h(Ae,Ce(te(e,Le),{onConfirm:N,onCancel:U}),te(n,$e))};q(b,t=>{t.forEach((o,l)=>{o.length&&!ae(o,s.value[l],c.value)&&k(l,de(o)[c.value.value])})},{immediate:!0});let w;return q(()=>e.modelValue,t=>{!z(t,s.value)&&!z(t,w)&&(s.value=t.slice(0),w=t.slice(0))},{deep:!0}),q(s,t=>{z(t,e.modelValue)||(w=t.slice(0),a("update:modelValue",w))},{immediate:!0}),ie("touchmove",re,{target:r}),ce({confirm:N,getSelectedOptions:()=>S.value}),()=>{var t,o;return h("div",{class:p()},[e.toolbarPosition==="top"?M():null,e.loading?h(ye,{class:p("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),j(),(o=n["columns-bottom"])==null?void 0:o.call(n),e.toolbarPosition==="bottom"?M():null])}}});const et=xe(Ye),je=e=>y(void 0,null,function*(){R().setDark(e)}),Ge=e=>y(void 0,null,function*(){const a=R();a.setDarkMode(e),a.setDark(we(e))}),tt=()=>({setDark:je,setDarkMode:Ge}),qe=e=>y(void 0,null,function*(){V.mode==="legacy"?V.global.locale=e:V.global.locale.value=e}),ze=e=>y(void 0,null,function*(){V.global.setLocaleMessage(e,yield De(e))}),Je=e=>y(void 0,null,function*(){yield R().setLocale(e),yield ze(e),yield qe(e),yield Ee(e)}),nt=()=>({setLocale:Je}),Qe=e=>y(void 0,null,function*(){R().setTheme(e)}),at=()=>({setTheme:Qe});export{et as P,nt as a,at as b,tt as u};