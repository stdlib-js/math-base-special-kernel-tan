// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var i=n&&"symbol"==typeof Symbol.toStringTag?function(n){var o,i,a,f,u;if(null==n)return t.call(n);i=n[e],u=e,o=null!=(f=n)&&r.call(f,u);try{n[e]=void 0}catch(r){return t.call(n)}return a=t.call(n),o?n[e]=i:delete n[e],a}:function(n){return t.call(n)},a="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var u,y="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var n,t,r;if("function"!=typeof f)return!1;try{t=new f(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c=u,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var v,A="function"==typeof Float64Array?Float64Array:void 0;v=function(){var n,t,r;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,NaN]),r=t,n=(l&&r instanceof Float64Array||"[object Float64Array]"===i(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?A:function(){throw new Error("not implemented")};var U=v,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b(t=[1,3.14,-3.14,256,257]),r=t,n=(w&&r instanceof Uint8Array||"[object Uint8Array]"===i(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var h=m,s="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var F,j="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(s&&r instanceof Uint16Array||"[object Uint16Array]"===i(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?j:function(){throw new Error("not implemented")};var g,E={uint16:F,uint8:h};(g=new E.uint16(1))[0]=4660;var O=52===new E.uint8(g.buffer)[0],N=!0===O?1:0,T=new U(1),x=new c(T.buffer);var P=!0===O?0:1,k=new U(1),q=new c(k.buffer);function z(n,t){return k[0]=n,q[P]=t>>>0,k[0]}function B(n,t,r){var o,e,i,a,f,u,y,c,l;return o=function(n){return T[0]=n,x[N]}(n),(e=2147483647&o|0)>=1072010280&&(n<0&&(n=-n,t=-t),n=(l=.7853981633974483-n)+(c=3061616997868383e-32-t),t=0),a=function(n){return 0===n?.13333333333320124:.13333333333320124+n*(.021869488294859542+n*(.0035920791075913124+n*(.0005880412408202641+n*(7817944429395571e-20+-18558637485527546e-21*n))))}(c=(l=n*n)*l),y=l*function(n){return 0===n?.05396825397622605:.05396825397622605+n*(.0088632398235993+n*(.0014562094543252903+n*(.0002464631348184699+n*(7140724913826082e-20+2590730518636337e-20*n))))}(c),a=t+l*((f=l*n)*(a+y)+t),c=n+(a+=.3333333333333341*f),e>=1072010280?(1-(o>>30&2))*((y=r)-2*(n-(c*c/(c+y)-a))):1===r?c:(y=a-((l=z(c,0))-n),(u=z(i=-1/c,0))+i*((f=1+u*l)+u*y))}export{B as default};
//# sourceMappingURL=mod.js.map
