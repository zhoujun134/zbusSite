"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4102],{8459:function(t,e,n){n.d(e,{p:function(){return s}});var r=n(7294),o=n(6014),i=n(2074);function s(t){const e=(0,r.useRef)(0),{isStatic:n}=(0,r.useContext)(o._);(0,r.useEffect)((()=>{if(n)return;const r=({timestamp:n,delta:r})=>{e.current||(e.current=n),t(n-e.current,r)};return i.Wi.update(r,!0),()=>(0,i.Pn)(r)}),[t])}},4025:function(t,e,n){n.d(e,{W:function(){return o}});var r=n(7294);function o(t,e,n){(0,r.useInsertionEffect)((()=>t.on(e,n)),[t,e,n])}},7094:function(t,e,n){n.d(e,{r:function(){return r}});const r=(t,e,n)=>{const r=e-t;return((n-t)%r+r)%r+t}},4960:function(t,e,n){n.d(e,{c:function(){return c}});var r=n(7294),o=n(3234),i=n(6014),s=n(6681);function c(t){const e=(0,s.h)((()=>(0,o.BX)(t))),{isStatic:n}=(0,r.useContext)(i._);if(n){const[,n]=(0,r.useState)(t);(0,r.useEffect)((()=>e.on("change",n)),[])}return e}},8263:function(t,e,n){n.d(e,{v:function(){return D}});var r=n(3234),o=n(6681),i=n(7294),s=n(5487);const c=new WeakMap;let f;function u({target:t,contentRect:e,borderBoxSize:n}){var r;null===(r=c.get(t))||void 0===r||r.forEach((r=>{r({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})}))}function l(t){t.forEach(u)}function a(t,e){f||"undefined"!=typeof ResizeObserver&&(f=new ResizeObserver(l));const n=function(t,e,n){var r;if("string"==typeof t){let o=document;e&&((0,s.k)(Boolean(e.current),"Scope provided, but no element detected."),o=e.current),n?(null!==(r=n[t])&&void 0!==r||(n[t]=o.querySelectorAll(t)),t=n[t]):t=o.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}(t);return n.forEach((t=>{let n=c.get(t);n||(n=new Set,c.set(t,n)),n.add(e),null==f||f.observe(t)})),()=>{n.forEach((t=>{const n=c.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==f||f.unobserve(t)}))}}const g=new Set;let d;function h(t){return g.add(t),d||(d=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};g.forEach((t=>t(e)))},window.addEventListener("resize",d)),()=>{g.delete(t),!g.size&&d&&(d=void 0)}}var p=n(3967),v=n(3038);const y=50,m=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(t,e,n,r){const o=n[e],{length:i,position:s}=w[e],c=o.current,f=n.time;o.current=t["scroll"+s],o.scrollLength=t["scroll"+i]-t["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,p.Y)(0,o.scrollLength,o.current);const u=r-f;o.velocity=u>y?0:(0,v.R)(o.current-c,u)}const x={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function L(t,e,n=0){let r=0;if(void 0!==W[t]&&(t=W[t]),"string"==typeof t){const e=parseFloat(t);t.endsWith("px")?r=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?r=e/100*document.documentElement.clientWidth:t.endsWith("vh")?r=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(r=e*t),n+r}const S=[0,0];function B(t,e,n,r){let o=Array.isArray(t)?t:S,i=0,s=0;return"number"==typeof t?o=[t,t]:"string"==typeof t&&(o=(t=t.trim()).includes(" ")?t.split(" "):[t,W[t]?t:"0"]),i=L(o[0],n,r),s=L(o[1],e),i-s}var b=n(4606),z=n(533);const k={x:0,y:0};function A(t,e,n){let{offset:r=x.All}=n;const{target:o=t,axis:i="y"}=n,s="y"===i?"height":"width",c=o!==t?function(t,e){const n={x:0,y:0};let r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const t=r.getBoundingClientRect();r=r.parentElement;const e=r.getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:t,y:e}=r.getBBox();n.x+=t,n.y+=e;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}}return n}(o,t):k,f=o===t?{width:t.scrollWidth,height:t.scrollHeight}:function(t){return"getBBox"in t&&"svg"!==t.tagName?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}(o),u={width:t.clientWidth,height:t.clientHeight};e[i].offset.length=0;let l=!e[i].interpolate;const a=r.length;for(let g=0;g<a;g++){const t=B(r[g],u[s],f[s],c[i]);l||t===e[i].interpolatorOffsets[g]||(l=!0),e[i].offset[g]=t}l&&(e[i].interpolate=(0,b.s)(e[i].offset,(0,z.Y)(r)),e[i].interpolatorOffsets=[...e[i].offset]),e[i].progress=e[i].interpolate(e[i].current)}function H(t,e,n,r={}){return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!==t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,r.target,n),update:e=>{!function(t,e,n){E(t,"x",e,n),E(t,"y",e,n),e.time=n}(t,n,e),(r.offset||r.target)&&A(t,n,r)},notify:()=>e(n)}}var O=n(2074);const P=new WeakMap,X=new WeakMap,C=new WeakMap,R=t=>t===document.documentElement?window:t;function N(t,{container:e=document.documentElement,...n}={}){let r=C.get(e);r||(r=new Set,C.set(e,r));const o=m(),i=H(e,t,o,n);if(r.add(i),!P.has(e)){const t=()=>{for(const t of r)t.measure()},n=()=>{for(const t of r)t.update(O.frameData.timestamp)},o=()=>{for(const t of r)t.notify()},i=()=>{O.Wi.read(t,!1,!0),O.Wi.update(n,!1,!0),O.Wi.update(o,!1,!0)};P.set(e,i);const f=R(e);window.addEventListener("resize",i,{passive:!0}),e!==document.documentElement&&X.set(e,(c=i,"function"==typeof(s=e)?h(s):a(s,c))),f.addEventListener("scroll",i,{passive:!0})}var s,c;const f=P.get(e);return O.Wi.read(f,!1,!0),()=>{var t;(0,O.Pn)(f);const n=C.get(e);if(!n)return;if(n.delete(i),n.size)return;const r=P.get(e);P.delete(e),r&&(R(e).removeEventListener("scroll",r),null===(t=X.get(e))||void 0===t||t(),window.removeEventListener("resize",r))}}var Y=n(8868);function T(t,e){(0,s.K)(Boolean(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const M=()=>({scrollX:(0,r.BX)(0),scrollY:(0,r.BX)(0),scrollXProgress:(0,r.BX)(0),scrollYProgress:(0,r.BX)(0)});function D({container:t,target:e,layoutEffect:n=!0,...r}={}){const s=(0,o.h)(M);return(n?Y.L:i.useEffect)((()=>(T("target",e),T("container",t),N((({x:t,y:e})=>{s.scrollX.set(t.current),s.scrollXProgress.set(t.progress),s.scrollY.set(e.current),s.scrollYProgress.set(e.progress)}),{...r,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0}))),[t,e,JSON.stringify(r.offset)]),s}},4002:function(t,e,n){n.d(e,{q:function(){return a}});var r=n(7294),o=n(406),i=n(4960),s=n(6014),c=n(8868),f=n(72),u=n(6917),l=n(2074);function a(t,e={}){const{isStatic:n}=(0,r.useContext)(s._),a=(0,r.useRef)(null),g=(0,i.c)((0,o.i)(t)?t.get():t),d=()=>{a.current&&a.current.stop()};return(0,r.useInsertionEffect)((()=>g.attach(((t,r)=>{if(n)return r(t);if(d(),a.current=(0,f.y)({keyframes:[g.get(),t],velocity:g.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:r}),!l.frameData.isProcessing){const t=performance.now()-l.frameData.timestamp;t<30&&(a.current.time=(0,u.X)(t))}return g.get()}),d)),[JSON.stringify(e)]),(0,c.L)((()=>{if((0,o.i)(t))return t.on("change",(t=>g.set(parseFloat(t))))}),[g]),g}},8828:function(t,e,n){n.d(e,{H:function(){return a}});var r=n(4606);const o=t=>(t=>"object"==typeof t&&t.mix)(t)?t.mix:void 0;var i=n(4960),s=n(8868),c=n(2074);function f(t,e){const n=(0,i.c)(e()),r=()=>n.set(e());return r(),(0,s.L)((()=>{const e=()=>c.Wi.update(r,!1,!0),n=t.map((t=>t.on("change",e)));return()=>{n.forEach((t=>t())),(0,c.Pn)(r)}})),n}var u=n(6681),l=n(3234);function a(t,e,n,i){if("function"==typeof t)return function(t){l.S1.current=[],t();const e=f(l.S1.current,t);return l.S1.current=void 0,e}(t);const s="function"==typeof e?e:function(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],s=t[1+n],c=t[2+n],f=t[3+n],u=(0,r.s)(s,c,{mixer:o(c[0]),...f});return e?u(i):u}(e,n,i);return Array.isArray(t)?g(t,s):g([t],(([t])=>s(t)))}function g(t,e){const n=(0,u.h)((()=>[]));return f(t,(()=>{n.length=0;const r=t.length;for(let e=0;e<r;e++)n[e]=t[e].get();return e(n)}))}},975:function(t,e,n){n.d(e,{T:function(){return i}});var r=n(4025),o=n(4960);function i(t){const e=(0,o.c)(t.getVelocity());return(0,r.W)(t,"velocityChange",(t=>{e.set(t)})),e}}}]);