// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@esm/index.mjs";var r=e,n=t,s=function(e){return 0===e?.13333333333320124:.13333333333320124+e*(.021869488294859542+e*(.0035920791075913124+e*(.0005880412408202641+e*(7817944429395571e-20+-18558637485527546e-21*e))))},o=function(e){return 0===e?.05396825397622605:.05396825397622605+e*(.0088632398235993+e*(.0014562094543252903+e*(.0002464631348184699+e*(7140724913826082e-20+2590730518636337e-20*e))))};var i=function(e,t,i){var d,m,a,u,f,l,b,h,j;return(m=2147483647&(d=r(e))|0)>=1072010280&&(e<0&&(e=-e,t=-t),e=(j=.7853981633974483-e)+(h=3061616997868383e-32-t),t=0),u=t+(j=e*e)*((f=j*e)*((u=s(h=j*j))+(b=j*o(h)))+t),h=e+(u+=.3333333333333341*f),m>=1072010280?(1-(d>>30&2))*((b=i)-2*(e-(h*h/(h+b)-u))):1===i?h:(n(j=h,0),b=u-(j-e),n(l=a=-1/h,0),l+a*((f=1+l*j)+l*b))};export{i as default};
//# sourceMappingURL=index.mjs.map
