var y=(e,n,a)=>new Promise((u,s)=>{var d=c=>{try{r(a.next(c))}catch(g){s(g)}},m=c=>{try{r(a.throw(c))}catch(g){s(g)}},r=c=>c.done?u(c.value):Promise.resolve(c.value).then(d,m);r((a=a.apply(e,n)).next())});import{e as R,ao as he,a5 as M,v as Q,d as X,n as q,aJ as B,aK as L,r as E,u as ge,f as O,a4 as se,ad as ce,aL as be,i as ie,b as v,q as ue,aM as Z,m as V,a3 as pe,a2 as Te,a1 as Oe,aN as ke,am as z,j as G,aO as ye,an as ee,aP as te,as as Se,aQ as xe,x as Ce,aR as A,aS as we,aT as Ee,aU as _,aV as Me}from"./index-q8XU2Mr1.js";const[Pe,p,ne]=R("picker"),re=e=>e.find(n=>!n.disabled)||e[0];function De(e,n){const a=e[0];if(a){if(Array.isArray(a))return"multiple";if(n.children in a)return"cascade"}return"default"}function $(e,n){n=Q(n,0,e.length);for(let a=n;a<e.length;a++)if(!e[a].disabled)return a;for(let a=n-1;a>=0;a--)if(!e[a].disabled)return a;return 0}const ae=(e,n,a)=>n!==void 0&&!!e.find(u=>u[a.value]===n);function W(e,n,a){const u=e.findIndex(d=>d[a.value]===n),s=$(e,u);return e[s]}function Ie(e,n,a){const u=[];let s={[n.children]:e},d=0;for(;s&&s[n.children];){const m=s[n.children],r=a.value[d];if(s=he(r)?W(m,r,n):void 0,!s&&m.length){const c=re(m)[n.value];s=W(m,c,n)}d++,u.push(m)}return u}function He(e){const{transform:n}=window.getComputedStyle(e),a=n.slice(7,n.length-1).split(", ")[5];return Number(a)}function Ne(e){return M({text:"text",value:"value",children:"children"},e)}const oe=200,le=300,Be=15,[de,J]=R("picker-column"),me=Symbol(de);var Ve=X({name:de,props:{value:q,fields:B(Object),options:L(),readonly:Boolean,allowHtml:Boolean,optionHeight:B(Number),swipeDuration:B(q),visibleOptionNum:B(q)},emits:["change","clickOption","scrollInto"],setup(e,{emit:n,slots:a}){let u,s,d,m,r;const c=E(),g=E(),f=E(0),h=E(0),S=ge(),x=()=>e.options.length,H=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,k=i=>{let t=$(e.options,i);const o=-t*e.optionHeight,l=()=>{t>x()-1&&(t=$(e.options,i));const T=e.options[t][e.fields.value];T!==e.value&&n("change",T)};u&&o!==f.value?r=l:l(),f.value=o},b=()=>e.readonly||!e.options.length,U=i=>{u||b()||(r=null,h.value=oe,k(i),n("clickOption",e.options[i]))},C=i=>Q(Math.round(-i/e.optionHeight),0,x()-1),N=O(()=>C(f.value)),F=(i,t)=>{const o=Math.abs(i/t);i=f.value+o/.003*(i<0?-1:1);const l=C(i);h.value=+e.swipeDuration,k(l)},P=()=>{u=!1,h.value=0,r&&(r(),r=null)},Y=i=>{if(!b()){if(S.start(i),u){const t=He(g.value);f.value=Math.min(0,t-H())}h.value=0,s=f.value,d=Date.now(),m=s,r=null}},j=i=>{if(b())return;S.move(i),S.isVertical()&&(u=!0,ue(i,!0));const t=Q(s+S.deltaY.value,-(x()*e.optionHeight),e.optionHeight),o=C(t);o!==N.value&&n("scrollInto",e.options[o]),f.value=t;const l=Date.now();l-d>le&&(d=l,m=t)},D=()=>{if(b())return;const i=f.value-m,t=Date.now()-d;if(t<le&&Math.abs(i)>Be){F(i,t);return}const l=C(f.value);h.value=oe,k(l),setTimeout(()=>{u=!1},0)},w=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((t,o)=>{const l=t[e.fields.text],{disabled:T}=t,I=t[e.fields.value],fe={role:"button",style:i,tabindex:T?-1:0,class:[J("item",{disabled:T,selected:I===e.value}),t.className],onClick:()=>U(o)},ve={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:l};return v("li",fe,[a.option?a.option(t,o):v("div",ve,null)])})};return se(me),ce({stopMomentum:P}),be(()=>{const i=u?Math.floor(-f.value/e.optionHeight):e.options.findIndex(l=>l[e.fields.value]===e.value),t=$(e.options,i),o=-t*e.optionHeight;u&&t<i&&P(),f.value=o}),ie("touchmove",j,{target:c}),()=>v("div",{ref:c,class:J(),onTouchstartPassive:Y,onTouchend:D,onTouchcancel:D},[v("ul",{ref:g,style:{transform:`translate3d(0, ${f.value+H()}px, 0)`,transitionDuration:`${h.value}ms`,transitionProperty:h.value?"all":"none"},class:J("wrapper"),onTransitionend:P},[w()])])}});const[_e]=R("picker-toolbar"),K={title:String,cancelButtonText:String,confirmButtonText:String},$e=["cancel","confirm","title","toolbar"],Le=Object.keys(K);var Re=X({name:_e,props:K,emits:["confirm","cancel"],setup(e,{emit:n,slots:a}){const u=()=>{if(a.title)return a.title();if(e.title)return v("div",{class:[p("title"),"van-ellipsis"]},[e.title])},s=()=>n("cancel"),d=()=>n("confirm"),m=()=>{const c=e.cancelButtonText||ne("cancel");return v("button",{type:"button",class:[p("cancel"),Z],onClick:s},[a.cancel?a.cancel():c])},r=()=>{const c=e.confirmButtonText||ne("confirm");return v("button",{type:"button",class:[p("confirm"),Z],onClick:d},[a.confirm?a.confirm():c])};return()=>v("div",{class:p("toolbar")},[a.toolbar?a.toolbar():[m(),u(),r()]])}});const[Ae,Ze]=R("picker-group"),Ke=Symbol(Ae);M({tabs:L(),activeTab:V(0),nextStepText:String},K);const Ue=M({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:V(44),showToolbar:pe,swipeDuration:V(1e3),visibleOptionNum:V(6)},K),Fe=M({},Ue,{columns:L(),modelValue:L(),toolbarPosition:Te("top"),columnsFieldNames:Object});var Ye=X({name:Pe,props:Fe,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:n,slots:a}){const u=E(),s=E(e.modelValue.slice(0)),{parent:d}=se(Ke),{children:m,linkChildren:r}=Oe(me);r();const c=O(()=>Ne(e.columnsFieldNames)),g=O(()=>ke(e.optionHeight)),f=O(()=>De(e.columns,c.value)),h=O(()=>{const{columns:t}=e;switch(f.value){case"multiple":return t;case"cascade":return Ie(t,c.value,s);default:return[t]}}),S=O(()=>h.value.some(t=>t.length)),x=O(()=>h.value.map((t,o)=>W(t,s.value[o],c.value))),H=O(()=>h.value.map((t,o)=>t.findIndex(l=>l[c.value.value]===s.value[o]))),k=(t,o)=>{if(s.value[t]!==o){const l=s.value.slice(0);l[t]=o,s.value=l}},b=()=>({selectedValues:s.value.slice(0),selectedOptions:x.value,selectedIndexes:H.value}),U=(t,o)=>{k(o,t),f.value==="cascade"&&s.value.forEach((l,T)=>{const I=h.value[T];ae(I,l,c.value)||k(T,I.length?I[0][c.value.value]:void 0)}),ee(()=>{n("change",M({columnIndex:o},b()))})},C=(t,o)=>{const l={columnIndex:o,currentOption:t};n("clickOption",M(b(),l)),n("scrollInto",l)},N=()=>{m.forEach(o=>o.stopMomentum());const t=b();return ee(()=>{n("confirm",t)}),t},F=()=>n("cancel",b()),P=()=>h.value.map((t,o)=>v(Ve,{value:s.value[o],fields:c.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:l=>U(l,o),onClickOption:l=>C(l,o),onScrollInto:l=>{n("scrollInto",{currentOption:l,columnIndex:o})}},{option:a.option})),Y=t=>{if(S.value){const o={height:`${g.value}px`},l={backgroundSize:`100% ${(t-g.value)/2}px`};return[v("div",{class:p("mask"),style:l},null),v("div",{class:[xe,p("frame")],style:o},null)]}},j=()=>{const t=g.value*+e.visibleOptionNum,o={height:`${t}px`};return v("div",{ref:u,class:p("columns"),style:o},[P(),Y(t)])},D=()=>{if(e.showToolbar&&!d)return v(Re,Se(te(e,Le),{onConfirm:N,onCancel:F}),te(a,$e))};z(h,t=>{t.forEach((o,l)=>{o.length&&!ae(o,s.value[l],c.value)&&k(l,re(o)[c.value.value])})},{immediate:!0});let w;return z(()=>e.modelValue,t=>{!G(t,s.value)&&!G(t,w)&&(s.value=t.slice(0),w=t.slice(0))},{deep:!0}),z(s,t=>{G(t,e.modelValue)||(w=t.slice(0),n("update:modelValue",w))},{immediate:!0}),ie("touchmove",ue,{target:u}),ce({confirm:N,getSelectedOptions:()=>x.value}),()=>{var t,o;return v("div",{class:p()},[e.toolbarPosition==="top"?D():null,e.loading?v(ye,{class:p("loading")},null):null,(t=a["columns-top"])==null?void 0:t.call(a),j(),(o=a["columns-bottom"])==null?void 0:o.call(a),e.toolbarPosition==="bottom"?D():null])}}});const et=Ce(Ye),je=e=>y(void 0,null,function*(){A().setDark(e)}),qe=e=>y(void 0,null,function*(){const n=A();n.setDarkMode(e),n.setDark(we(e))}),tt=()=>({setDark:je,setDarkMode:qe}),ze=e=>y(void 0,null,function*(){_.mode==="legacy"?_.global.locale=e:_.global.locale.value=e}),Ge=e=>y(void 0,null,function*(){_.global.setLocaleMessage(e,yield Me(e))}),Je=e=>y(void 0,null,function*(){yield A().setLocale(e),yield Ge(e),yield ze(e),yield Ee(e)}),nt=()=>({setLocale:Je}),Qe=e=>y(void 0,null,function*(){A().setTheme(e)}),at=()=>({setTheme:Qe});export{et as P,nt as a,at as b,tt as u};