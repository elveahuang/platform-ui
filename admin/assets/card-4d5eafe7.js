import{a as e,bD as r,e as t,bN as a,bt as s,bO as o,bP as n,h as u,k as c,t as f,v as i,A as l,B as d,D as p,E as v,C as y,X as b,Y as h,Z as m,$ as w,W as g,_ as j,a1 as O}from"./index-b5d96581.js";import{r as x,v as k}from"./tag-d7bb1b3c.js";var S=Object.create;const $=function(){function r(){}return function(t){if(!e(t))return{};if(S)return S(t);r.prototype=t;var a=new r;return r.prototype=void 0,a}}();function A(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function E(e,a,s,o){var n=!s;s||(s={});for(var u=-1,c=a.length;++u<c;){var f=a[u],i=o?o(s[f],e[f],f,s,e):void 0;void 0===i&&(i=e[f]),n?r(s,f,i):t(s,f,i)}return s}var P=Object.prototype.hasOwnProperty;function _(r){if(!e(r))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(r);var t=a(r),s=[];for(var o in r)("constructor"!=o||!t&&P.call(r,o))&&s.push(o);return s}function B(e){return s(e)?x(e,!0):_(e)}const C=o(Object.getPrototypeOf,Object);var D="object"==typeof exports&&exports&&!exports.nodeType&&exports,T=D&&"object"==typeof module&&module&&!module.nodeType&&module,L=T&&T.exports===D?n.Buffer:void 0,N=L?L.allocUnsafe:void 0;function U(e,r){if(r)return e.slice();var t=e.length,a=N?N(t):new e.constructor(t);return e.copy(a),a}function W(e){var r=new e.constructor(e.byteLength);return new k(r).set(new k(e)),r}function X(e,r){var t=r?W(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function Y(e){return"function"!=typeof e.constructor||a(e)?{}:$(C(e))}const Z=u({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),q=f({name:"ElCard"});const z=O(j(f({...q,props:Z,setup(e){const r=i("card");return(e,t)=>(l(),d("div",{class:p([v(r).b(),v(r).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(l(),d("div",{key:0,class:p(v(r).e("header"))},[y(e.$slots,"header",{},(()=>[b(h(e.header),1)]))],2)):m("v-if",!0),w("div",{class:p(v(r).e("body")),style:g(e.bodyStyle)},[y(e.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{z as E,W as a,X as b,E as c,A as d,U as e,C as g,Y as i,B as k};
