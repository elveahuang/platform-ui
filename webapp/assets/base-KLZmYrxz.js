import{a4 as T,by as o,F as t,bo as A,_ as S,i as N}from"./index-9D-n7b0w.js";class p extends Error{constructor(E){super(E),this.name="ElementPlusError"}}function Y(e,E){throw new p(`[${e}] ${E}`)}function C(e,E){}var _=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(_||{});function f(e){return o(e)&&e.type===t}function i(e){return o(e)&&e.type===A}function M(e){return o(e)&&!f(e)&&!i(e)}const s=e=>{const E=T(e)?e:[e],n=[];return E.forEach(r=>{var u;T(r)?n.push(...s(r)):o(r)&&T(r.children)?n.push(...s(r.children)):(n.push(r),o(r)&&((u=r.component)!=null&&u.subTree)&&n.push(...s(r.component.subTree)))}),n},O=e=>e,I=({from:e,replacement:E,scope:n,version:r,ref:u,type:L="API"},m)=>{S(()=>N(m),D=>{},{immediate:!0})};export{_ as P,M as a,C as d,s as f,f as i,O as m,Y as t,I as u};