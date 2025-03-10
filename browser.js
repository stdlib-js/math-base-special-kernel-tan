// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,e,f,u,a;if(null==n)return r.call(n);e=n[i],a=i,t=null!=(u=n)&&o.call(u,a);try{n[i]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[i]=e:delete n[i],f}:function(n){return r.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=n,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,b=c,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(v&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?m:function(){throw new Error("not implemented")};var s,h=U,S="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,65536,65537]),r=t,n=(S&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?j:function(){throw new Error("not implemented")};var F,T={uint16:s,uint8:h};(F=new T.uint16(1))[0]=4660;var E=52===new T.uint8(F.buffer)[0],O=!0===E?1:0,x=new b(1),N=new l(x.buffer),k=!0===E?0:1,P=new b(1),q=new l(P.buffer);function z(n,t){return P[0]=n,q[k]=t>>>0,P[0]}return function(n,t,r){var o,e,i,f,u,a,y,c,l;return o=function(n){return x[0]=n,N[O]}(n),(e=2147483647&o|0)>=1072010280&&(n<0&&(n=-n,t=-t),n=(l=.7853981633974483-n)+(c=3061616997868383e-32-t),t=0),f=function(n){return 0===n?.13333333333320124:.13333333333320124+n*(.021869488294859542+n*(.0035920791075913124+n*(.0005880412408202641+n*(7817944429395571e-20+-18558637485527546e-21*n))))}(c=(l=n*n)*l),y=l*function(n){return 0===n?.05396825397622605:.05396825397622605+n*(.0088632398235993+n*(.0014562094543252903+n*(.0002464631348184699+n*(7140724913826082e-20+2590730518636337e-20*n))))}(c),f=t+l*((u=l*n)*(f+y)+t),c=n+(f+=.3333333333333341*u),e>=1072010280?(1-(o>>30&2))*((y=r)-2*(n-(c*c/(c+y)-f))):1===r?c:(y=f-((l=z(c,0))-n),(a=z(i=-1/c,0))+i*((u=1+a*l)+a*y))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).kernelTan=t();
//# sourceMappingURL=browser.js.map
