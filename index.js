module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){e.exports=r(4)()},function(e,t){e.exports=require("react")},function(e,t,r){(function(t){var r;r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=r}).call(this,r(3))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=r(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(2),i=r.n(a),l=r(0),c=r.n(l);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e,t){switch(t.type){case"init":case"setKnobPosition":return u({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":case"onKeyDown":case"onKeyUp":case"onFocusIn":case"onFocusOut":return u({},e,{},t.payload);default:throw new Error}},p=function(e,t){var r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(void 0!==i.a){var t=function(e){return r.current(e)};return i.a.addEventListener(e,t,{passive:!1}),function(){i.a.removeEventListener(e,t)}}}),[e])};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(){var e=b(Object(n.useState)(!0),2),t=e[0],r=e[1];return Object(n.useEffect)((function(){r(!1)}),[]),t};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){var t=e.isDragging,r=e.knobPosition,n=e.knobColor,a=e.knobSize,i=e.hideKnob,l=e.onMouseDown,c=e.trackSize,s=e.children,u=e.highlightColor,d=e.isFocused,f={knob:{position:"absolute",left:"-".concat(a/2-c/2,"px"),top:"-".concat(a/2-c/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},hide:{opacity:0}};return o.a.createElement("div",{style:h({transform:"translate(".concat(r.x,"px, ").concat(r.y,"px)")},f.knob,{},t&&f.dragging,{},i&&f.hide),onMouseDown:l,onTouchStart:l},o.a.createElement("svg",{width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a," ").concat(a)},o.a.createElement("circle",{fill:n,stroke:d?u:"none",strokeWidth:"3",cx:a/2,cy:a/2,r:2*a/3/2}),s||o.a.createElement("svg",{width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 36 36"})))};O.propTypes={isDragging:c.a.bool,knobPosition:c.a.object,knobColor:c.a.string,knobRadius:c.a.number,knobSize:c.a.number,trackSize:c.a.number,children:c.a.element,onMouseDown:c.a.func,highlightColor:c.a.string,isFocused:c.a.bool};var P=O;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t=e.labelColor,r=e.labelBottom,n=e.labelFontSize,a=e.valueFontSize,i=e.appendToValue,l=e.prependToValue,c=e.verticalOffset,s=e.hideLabelValue,u=e.label,d=e.value,f={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(a),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(c,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:k({},f.labels,{},s&&f.hide)},r||o.a.createElement("div",{style:{fontSize:n}},u),o.a.createElement("div",{style:k({},f.value,{},!r&&f.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:f.prepended},l),d,o.a.createElement("span",{style:f.appended},i))),r&&o.a.createElement("div",{style:{fontSize:n}},u))};S.propTypes={label:c.a.string.isRequired,value:c.a.string.isRequired,labelColor:c.a.string,labelBottom:c.a.bool,labelFontSize:c.a.string,valueFontSize:c.a.string,appendToValue:c.a.string,prependToValue:c.a.string,verticalOffset:c.a.string,hideLabelValue:c.a.bool};var E=S,C=function(e){var t=e.width,r=e.label,n=e.direction,a=e.strokeDasharray,i=e.strokeDashoffset,l=e.progressColorFrom,c=e.progressColorTo,s=e.trackColor,u=e.progressSize,d=e.trackSize,f=e.svgFullPath,p=e.radiansOffset,b=e.progressLineCap,g={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(p,"rad) ").concat(-1===n?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"}},y=d/2,v=t/2-y;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:g.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:r,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:l}),o.a.createElement("stop",{offset:"100%",stopColor:c}))),o.a.createElement("circle",{strokeWidth:d,fill:"none",stroke:s,cx:t/2,cy:t/2,r:v}),o.a.createElement("path",{style:g.path,ref:f,strokeDasharray:a,strokeDashoffset:i,strokeWidth:u,strokeLinecap:"round"!==b?"butt":"round",fill:"none",stroke:"url(#".concat(r,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2-y,"\n                        a ").concat(t/2-y,",").concat(t/2-y," 0 0,1 0,").concat(t-2*y,"\n                        a -").concat(t/2-y,",-").concat(t/2-y," 0 0,1 0,-").concat(t-2*y,"\n                    ")}))};C.propTypes={width:c.a.number,label:c.a.string,direction:c.a.number,svgFullPath:c.a.object,strokeDasharray:c.a.number,strokeDashoffset:c.a.number,progressColorFrom:c.a.string,progressColorTo:c.a.string,progressLineCap:c.a.string,progressSize:c.a.number,trackColor:c.a.string,trackSize:c.a.number,radiansOffset:c.a.number};var D=C;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},L=[87,68,38,39],V=[83,65,40,37],U=function(e){return e<0?-1:1},K=function(e){return e*Math.PI/180},R=function(e,t){for(var r=[],n=e;n<=t;n++)r.push(n);return r},B={circularSlider:{position:"relative",display:"inline-block",opacity:0,outline:"none"},mounted:{opacity:1}},W=function(e){var t=e.label,r=void 0===t?"ANGLE":t,a=e.width,l=void 0===a?280:a,c=e.direction,s=void 0===c?1:c,u=e.min,d=void 0===u?0:u,b=e.max,g=void 0===b?360:b,v=e.knobColor,h=void 0===v?"#4e63ea":v,m=e.knobSize,O=void 0===m?36:m,j=e.knobPosition,k=void 0===j?"top":j,w=e.highlightColor,S=void 0===w?"yellow":w,C=e.labelColor,x=void 0===C?"#272b77":C,T=e.labelBottom,z=void 0!==T&&T,_=e.labelFontSize,W=void 0===_?"1rem":_,Y=e.valueFontSize,N=void 0===Y?"3rem":Y,q=e.appendToValue,X=void 0===q?"":q,G=e.prependToValue,$=void 0===G?"":G,H=e.verticalOffset,J=void 0===H?"1.5rem":H,Q=e.hideLabelValue,Z=void 0!==Q&&Q,ee=e.hideKnob,te=void 0!==ee&&ee,re=e.knobDraggable,ne=void 0===re||re,oe=e.progressColorFrom,ae=void 0===oe?"#80C3F3":oe,ie=e.progressColorTo,le=void 0===ie?"#4990E2":ie,ce=e.progressSize,se=void 0===ce?8:ce,ue=e.trackColor,de=void 0===ue?"#DDDEFB":ue,fe=e.trackSize,pe=void 0===fe?8:fe,be=e.data,ge=void 0===be?[]:be,ye=e.dataIndex,ve=void 0===ye?0:ye,he=e.progressLineCap,me=void 0===he?"round":he,Oe=e.renderLabelValue,Pe=void 0===Oe?null:Oe,je=e.isPeriodic,ke=void 0===je||je,we=e.children,Se=e.onChange,Ee=void 0===Se?function(e){}:Se,Ce={mounted:!1,isDragging:!1,keyPressed:!1,isFocused:!1,width:l,radius:l/2,knobPosition:k,label:0,data:ge,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},De=y(),xe=M(Object(n.useReducer)(f,Ce),2),Fe=xe[0],Te=xe[1],Ie=Object(n.useRef)(null),Me=Object(n.useRef)(null),ze=!De&&"ontouchstart"in i.a,_e={DOWN:ze?"touchstart":"mousedown",UP:ze?"touchend":"mouseup",MOVE:ze?"touchmove":"mousemove",KEY_DOWN:"keydown",KEY_UP:"keyup",FOCUS_IN:"focusin",FOCUS_OUT:"focusout"},Ae=Object(n.useCallback)((function(e){var t=Fe.radius-pe/2,r=e+A[k],n=(r>0?r:2*Math.PI+r)*(360/(2*Math.PI)),o=n/360*Fe.dashFullArray;n=-1===U(s)?360-n:n;var a=(Fe.data.length-1)/360,i=Math.round(n*a);Fe.data[i]!==Fe.label&&Ee(Fe.data[i]),Te({type:"setKnobPosition",payload:{dashFullOffset:-1===U(s)?o:Fe.dashFullArray-o,label:Fe.data[i],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[Fe.radius,Fe.dashFullArray,Fe.data,Fe.label,pe,k,s,Ee]),Le=Object(n.useCallback)((function(e){if(Fe.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var r=function(e){var t,r,n,o,a,l,c,s,u=e.current.getBoundingClientRect(),d=!De&&((null!==(t=null===i.a||void 0===i.a?void 0:i.a.pageXOffset)&&void 0!==t?t:0)||(null!==(r=null===(n=document)||void 0===n||null===(o=n.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==r?r:0)),f=!De&&((null!==(a=null===i.a||void 0===i.a?void 0:i.a.pageYOffset)&&void 0!==a?a:0)||(null!==(l=null===(c=document)||void 0===c||null===(s=c.documentElement)||void 0===s?void 0:s.scrollTop)&&void 0!==l?l:0));return{top:u.top+f,left:u.left+d}},n=("touchmove"===e.type?t.pageX:e.pageX)-(r(Ie).left+Fe.radius),o=("touchmove"===e.type?t.pageY:e.pageY)-(r(Ie).top+Fe.radius),a=Math.atan2(o,n),l=a+A[k],c=(l>0?l:2*Math.PI+l)*(360/(2*Math.PI));c=-1===U(s)?360-c:c;var u=(Fe.data.length-1)/360,d=Math.round(c*u),f=Fe.data[d],p=Math.round(Fe.data.length/4);!ke&&(Fe.data.slice(0,p).includes(Fe.label)&&Fe.data.slice(3*p,Fe.data.length).includes(f)||Fe.data.slice(0,p).includes(f)&&Fe.data.slice(3*p,Fe.data.length).includes(Fe.label))?Fe.data.slice(0,p).includes(Fe.label)&&Fe.data.slice(3*p,Fe.data.length).includes(f)?Ae(-A[Fe.knobPosition]*U(s)+Fe.offset*U(s)):Fe.data.slice(0,p).includes(f)&&Fe.data.slice(3*p,Fe.data.length).includes(Fe.label)&&Ae(-A[Fe.knobPosition]*U(s)-Fe.offset*U(s)):Ae(a)}}),[Fe.isDragging,Fe.radius,Fe.data,Fe.label,Fe.knobPosition,Fe.offset,k,s,ke,De,Ae]),Ve=Object(n.useCallback)((function(e){if(document.activeElement===Ie.current){Te({type:"onKeyDown",payload:{keyPressed:!0}});var t=function(e,t){return t.indexOf(e)}(Fe.label,Fe.data);if(L.includes(e.keyCode)&&(e.preventDefault(),t!==Fe.data.length-1)){var r=(t+1)*(360/Fe.data.length),n=K(r)-A[Fe.knobPosition]+Fe.offset;Ae(n)}if(V.includes(e.keyCode)&&(e.preventDefault(),0!==t)){var o=(t-1)*(360/Fe.data.length),a=K(o)-A[Fe.knobPosition]+Fe.offset;Ae(a)}}}),[Ae,Fe.data,Fe.knobPosition,Fe.label,Fe.offset]),Ue=Object(n.useCallback)((function(){document.activeElement===Ie.current&&Te({type:"onFocusIn",payload:{isFocused:!0}})}),[]),Ke=Object(n.useCallback)((function(){document.activeElement!==Ie.current&&Te({type:"onFocusOut",payload:{isFocused:!1}})}),[]);Object(n.useEffect)((function(){Te({type:"init",payload:{mounted:!0,data:Fe.data.length?I(Fe.data):I(R(d,g)),dashFullArray:Me.current.getTotalLength?Me.current.getTotalLength():0}})}),[g,d]),Object(n.useEffect)((function(){var e=Fe.data.length,t=ve>e-1?e-1:ve;if(e){var r=360/e,n=K(r)/2;if(Te({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-A[Fe.knobPosition],offset:n}}),t){var o=U(s)*t*r,a=K(o)-A[Fe.knobPosition];return Ae(a+n*U(s))}Ae(-A[Fe.knobPosition]*U(s)+n*U(s))}}),[Fe.dashFullArray,Fe.knobPosition,Fe.data.length,ve,s]),p(_e.MOVE,Le),p(_e.UP,(function(){Te({type:"onMouseUp",payload:{isDragging:!1}})})),p(_e.KEY_DOWN,Ve),p(_e.KEY_UP,(function(){Te({type:"onKeyUp",payload:{keyPressed:!1}})})),p(_e.FOCUS_IN,Ue),p(_e.FOCUS_OUT,Ke);var Re=r.replace(/[\W_]/g,"_");return o.a.createElement("div",{style:F({},B.circularSlider,{},Fe.mounted&&B.mounted),ref:Ie,tabIndex:"0"},o.a.createElement(D,{width:l,label:Re,direction:s,strokeDasharray:Fe.dashFullArray,strokeDashoffset:Fe.dashFullOffset,svgFullPath:Me,progressSize:se,progressColorFrom:ae,progressColorTo:le,progressLineCap:me,trackColor:de,trackSize:pe,radiansOffset:Fe.radians}),ne&&o.a.createElement(P,{isDragging:Fe.isDragging,knobPosition:{x:Fe.knob.x,y:Fe.knob.y},knobSize:O,knobColor:h,trackSize:pe,hideKnob:te,highlightColor:S,onMouseDown:function(){Te({type:"onMouseDown",payload:{isDragging:!0}})},isFocused:Fe.isFocused},we),Pe||o.a.createElement(E,{label:r,labelColor:x,labelBottom:z,labelFontSize:W,verticalOffset:J,valueFontSize:N,appendToValue:X,prependToValue:$,hideLabelValue:Z,value:"".concat(Fe.label)}))};W.propTypes={label:c.a.string,width:c.a.number,direction:c.a.number,min:c.a.number,max:c.a.number,knobColor:c.a.string,knobPosition:c.a.string,highlightColor:c.a.string,hideKnob:c.a.bool,knobDraggable:c.a.bool,labelColor:c.a.string,labelBottom:c.a.bool,labelFontSize:c.a.string,valueFontSize:c.a.string,appendToValue:c.a.string,renderLabelValue:c.a.element,prependToValue:c.a.string,verticalOffset:c.a.string,hideLabelValue:c.a.bool,progressLineCap:c.a.string,progressColorFrom:c.a.string,progressColorTo:c.a.string,progressSize:c.a.number,trackColor:c.a.string,trackSize:c.a.number,data:c.a.array,dataIndex:c.a.number,isPeriodic:c.a.bool,onChange:c.a.func};t.default=W}]);