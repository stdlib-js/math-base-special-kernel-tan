"use strict";var l=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var q=l(function(z,c){
function W(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}c.exports=W
});var d=l(function(B,O){
function _(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}O.exports=_
});var I=l(function(D,H){
var g=require('@stdlib/number-float64-base-get-high-word/dist'),E=require('@stdlib/number-float64-base-set-low-word/dist'),h=q(),w=d(),A=.7853981633974483,F=3061616997868383e-32,L=.3333333333333341,P=2147483647;function S(r,a,p){var f,o,s,v,u,n,i,e,t;return f=g(r),o=f&P|0,o>=1072010280&&(r<0&&(r=-r,a=-a),t=A-r,e=F-a,r=t+e,a=0),t=r*r,e=t*t,v=h(e),i=t*w(e),u=t*r,v=a+t*(u*(v+i)+a),v+=L*u,e=r+v,o>=1072010280?(i=p,(1-(f>>30&2))*(i-2*(r-(e*e/(e+i)-v)))):p===1?e:(t=E(e,0),i=v-(t-r),s=-1/e,n=E(s,0),u=1+n*t,n+s*(u+n*i))}H.exports=S
});var T=I();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
