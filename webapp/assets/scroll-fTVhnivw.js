import{bI as R,p as x,bJ as A,n as I,bK as B}from"./index-DXNlIQS2.js";var H=/\s/;function L(e){for(var n=e.length;n--&&H.test(e.charAt(n)););return n}var M=/^\s+/;function P(e){return e&&e.slice(0,L(e)+1).replace(M,"")}var E=NaN,$=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,_=/^0o[0-7]+$/i,j=parseInt;function k(e){if(typeof e=="number")return e;if(R(e))return E;if(x(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=x(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=P(e);var t=F.test(e);return t||_.test(e)?j(e.slice(2),t?2:8):$.test(e)?E:+e}var h=function(){return A.Date.now()},D="Expected a function",J=Math.max,K=Math.min;function X(e,n,t){var i,f,c,s,o,a,l=0,y=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(D);n=k(n)||0,x(t)&&(y=!!t.leading,d="maxWait"in t,c=d?J(k(t.maxWait)||0,n):c,p="trailing"in t?!!t.trailing:p);function T(r){var u=i,m=f;return i=f=void 0,l=r,s=e.apply(m,u),s}function C(r){return l=r,o=setTimeout(g,n),y?T(r):s}function W(r){var u=r-a,m=r-l,S=n-u;return d?K(S,c-m):S}function b(r){var u=r-a,m=r-l;return a===void 0||u>=n||u<0||d&&m>=c}function g(){var r=h();if(b(r))return w(r);o=setTimeout(g,W(r))}function w(r){return o=void 0,p&&i?T(r):(i=f=void 0,s)}function N(){o!==void 0&&clearTimeout(o),l=0,i=a=f=o=void 0}function O(){return o===void 0?s:w(h())}function v(){var r=h(),u=b(r);if(i=arguments,f=this,a=r,u){if(o===void 0)return C(a);if(d)return clearTimeout(o),o=setTimeout(g,n),T(a)}return o===void 0&&(o=setTimeout(g,n)),s}return v.cancel=N,v.flush=O,v}const U=(e,n)=>{if(!I)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],i=B(e,t);return["scroll","auto","overlay"].some(f=>i.includes(f))},q=(e,n)=>{if(!I)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(U(t,n))return t;t=t.parentNode}return t};function z(e,n){if(!I)return;if(!n){e.scrollTop=0;return}const t=[];let i=n.offsetParent;for(;i!==null&&e!==i&&e.contains(i);)t.push(i),i=i.offsetParent;const f=n.offsetTop+t.reduce((a,l)=>a+l.offsetTop,0),c=f+n.offsetHeight,s=e.scrollTop,o=s+e.clientHeight;f<s?e.scrollTop=f:c>o&&(e.scrollTop=c-e.clientHeight)}export{X as d,q as g,z as s,k as t};
