"use strict";var p=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var q=p(function(z,c){
function W(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}c.exports=W
});var d=p(function(B,O){
function _(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}O.exports=_
});var I=p(function(D,H){
var g=require('@stdlib/number-float64-base-get-high-word/dist'),E=require('@stdlib/number-float64-base-set-low-word/dist'),h=q(),w=d(),A=.7853981633974483,F=3061616997868383e-32,L=.3333333333333341,P=2147483647;function S(r,e,n){var o,s,l,v,u,f,i,a,t;return o=g(r),s=o&P|0,s>=1072010280&&(r<0&&(r=-r,e=-e),t=A-r,a=F-e,r=t+a,e=0),t=r*r,a=t*t,v=h(a),i=t*w(a),u=t*r,v=e+t*(u*(v+i)+e),v+=L*u,a=r+v,s>=1072010280?(i=n,(1-(o>>30&2))*(i-2*(r-(a*a/(a+i)-v)))):n===1?a:(t=E(a,0),i=v-(t-r),l=-1/a,f=E(l,0),u=1+f*t,f+l*(u+f*i))}H.exports=S
});var T=I();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
