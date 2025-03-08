var EE=Object.defineProperty;var TE=(o,t,e)=>t in o?EE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Re=(o,t,e)=>TE(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();var wd={exports:{}},Fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function bE(){if(_v)return Fl;_v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:i,key:c,ref:s!==void 0?s:null,props:l}}return Fl.Fragment=t,Fl.jsx=e,Fl.jsxs=e,Fl}var gv;function AE(){return gv||(gv=1,wd.exports=bE()),wd.exports}var sf=AE(),Dd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function RE(){if(vv)return ue;vv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function S(P,nt,Et){this.props=P,this.context=nt,this.refs=M,this.updater=Et||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,nt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,nt,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(P,nt,Et){this.props=P,this.context=nt,this.refs=M,this.updater=Et||y}var U=L.prototype=new x;U.constructor=L,T(U,S.prototype),U.isPureReactComponent=!0;var R=Array.isArray,O={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function N(P,nt,Et,Ct,Y,dt){return Et=dt.ref,{$$typeof:o,type:P,key:nt,ref:Et!==void 0?Et:null,props:dt}}function F(P,nt){return N(P.type,nt,void 0,void 0,void 0,P.props)}function b(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function A(P){var nt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Et){return nt[Et]})}var H=/\/+/g;function st(P,nt){return typeof P=="object"&&P!==null&&P.key!=null?A(""+P.key):nt.toString(36)}function K(){}function ct(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(K,K):(P.status="pending",P.then(function(nt){P.status==="pending"&&(P.status="fulfilled",P.value=nt)},function(nt){P.status==="pending"&&(P.status="rejected",P.reason=nt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ut(P,nt,Et,Ct,Y){var dt=typeof P;(dt==="undefined"||dt==="boolean")&&(P=null);var St=!1;if(P===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(P.$$typeof){case o:case t:St=!0;break;case _:return St=P._init,ut(St(P._payload),nt,Et,Ct,Y)}}if(St)return Y=Y(P),St=Ct===""?"."+st(P,0):Ct,R(Y)?(Et="",St!=null&&(Et=St.replace(H,"$&/")+"/"),ut(Y,nt,Et,"",function(Jt){return Jt})):Y!=null&&(b(Y)&&(Y=F(Y,Et+(Y.key==null||P&&P.key===Y.key?"":(""+Y.key).replace(H,"$&/")+"/")+St)),nt.push(Y)),1;St=0;var Rt=Ct===""?".":Ct+":";if(R(P))for(var wt=0;wt<P.length;wt++)Ct=P[wt],dt=Rt+st(Ct,wt),St+=ut(Ct,nt,Et,dt,Y);else if(wt=v(P),typeof wt=="function")for(P=wt.call(P),wt=0;!(Ct=P.next()).done;)Ct=Ct.value,dt=Rt+st(Ct,wt++),St+=ut(Ct,nt,Et,dt,Y);else if(dt==="object"){if(typeof P.then=="function")return ut(ct(P),nt,Et,Ct,Y);throw nt=String(P),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function X(P,nt,Et){if(P==null)return P;var Ct=[],Y=0;return ut(P,Ct,"","",function(dt){return nt.call(Et,dt,Y++)}),Ct}function $(P){if(P._status===-1){var nt=P._result;nt=nt(),nt.then(function(Et){(P._status===0||P._status===-1)&&(P._status=1,P._result=Et)},function(Et){(P._status===0||P._status===-1)&&(P._status=2,P._result=Et)}),P._status===-1&&(P._status=0,P._result=nt)}if(P._status===1)return P._result.default;throw P._result}var W=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function xt(){}return ue.Children={map:X,forEach:function(P,nt,Et){X(P,function(){nt.apply(this,arguments)},Et)},count:function(P){var nt=0;return X(P,function(){nt++}),nt},toArray:function(P){return X(P,function(nt){return nt})||[]},only:function(P){if(!b(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ue.Component=S,ue.Fragment=e,ue.Profiler=s,ue.PureComponent=L,ue.StrictMode=i,ue.Suspense=d,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.act=function(){throw Error("act(...) is not supported in production builds of React.")},ue.cache=function(P){return function(){return P.apply(null,arguments)}},ue.cloneElement=function(P,nt,Et){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ct=T({},P.props),Y=P.key,dt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(dt=void 0),nt.key!==void 0&&(Y=""+nt.key),nt)!z.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(Ct[St]=nt[St]);var St=arguments.length-2;if(St===1)Ct.children=Et;else if(1<St){for(var Rt=Array(St),wt=0;wt<St;wt++)Rt[wt]=arguments[wt+2];Ct.children=Rt}return N(P.type,Y,void 0,void 0,dt,Ct)},ue.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},ue.createElement=function(P,nt,Et){var Ct,Y={},dt=null;if(nt!=null)for(Ct in nt.key!==void 0&&(dt=""+nt.key),nt)z.call(nt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Y[Ct]=nt[Ct]);var St=arguments.length-2;if(St===1)Y.children=Et;else if(1<St){for(var Rt=Array(St),wt=0;wt<St;wt++)Rt[wt]=arguments[wt+2];Y.children=Rt}if(P&&P.defaultProps)for(Ct in St=P.defaultProps,St)Y[Ct]===void 0&&(Y[Ct]=St[Ct]);return N(P,dt,void 0,void 0,null,Y)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(P){return{$$typeof:f,render:P}},ue.isValidElement=b,ue.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:$}},ue.memo=function(P,nt){return{$$typeof:p,type:P,compare:nt===void 0?null:nt}},ue.startTransition=function(P){var nt=O.T,Et={};O.T=Et;try{var Ct=P(),Y=O.S;Y!==null&&Y(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(xt,W)}catch(dt){W(dt)}finally{O.T=nt}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(P){return O.H.use(P)},ue.useActionState=function(P,nt,Et){return O.H.useActionState(P,nt,Et)},ue.useCallback=function(P,nt){return O.H.useCallback(P,nt)},ue.useContext=function(P){return O.H.useContext(P)},ue.useDebugValue=function(){},ue.useDeferredValue=function(P,nt){return O.H.useDeferredValue(P,nt)},ue.useEffect=function(P,nt){return O.H.useEffect(P,nt)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(P,nt,Et){return O.H.useImperativeHandle(P,nt,Et)},ue.useInsertionEffect=function(P,nt){return O.H.useInsertionEffect(P,nt)},ue.useLayoutEffect=function(P,nt){return O.H.useLayoutEffect(P,nt)},ue.useMemo=function(P,nt){return O.H.useMemo(P,nt)},ue.useOptimistic=function(P,nt){return O.H.useOptimistic(P,nt)},ue.useReducer=function(P,nt,Et){return O.H.useReducer(P,nt,Et)},ue.useRef=function(P){return O.H.useRef(P)},ue.useState=function(P){return O.H.useState(P)},ue.useSyncExternalStore=function(P,nt,Et){return O.H.useSyncExternalStore(P,nt,Et)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.0.0",ue}var xv;function bm(){return xv||(xv=1,Dd.exports=RE()),Dd.exports}var Yc=bm(),Ud={exports:{}},Hl={},Ld={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function CE(){return yv||(yv=1,function(o){function t(X,$){var W=X.length;X.push($);t:for(;0<W;){var xt=W-1>>>1,P=X[xt];if(0<s(P,$))X[xt]=$,X[W]=P,W=xt;else break t}}function e(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var $=X[0],W=X.pop();if(W!==$){X[0]=W;t:for(var xt=0,P=X.length,nt=P>>>1;xt<nt;){var Et=2*(xt+1)-1,Ct=X[Et],Y=Et+1,dt=X[Y];if(0>s(Ct,W))Y<P&&0>s(dt,Ct)?(X[xt]=dt,X[Y]=W,xt=Y):(X[xt]=Ct,X[Et]=W,xt=Et);else if(Y<P&&0>s(dt,W))X[xt]=dt,X[Y]=W,xt=Y;else break t}}return $}function s(X,$){var W=X.sortIndex-$.sortIndex;return W!==0?W:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],_=1,g=null,v=3,y=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(X){for(var $=e(p);$!==null;){if($.callback===null)i(p);else if($.startTime<=X)i(p),$.sortIndex=$.expirationTime,t(d,$);else break;$=e(p)}}function R(X){if(M=!1,U(X),!T)if(e(d)!==null)T=!0,ct();else{var $=e(p);$!==null&&ut(R,$.startTime-X)}}var O=!1,z=-1,N=5,F=-1;function b(){return!(o.unstable_now()-F<N)}function A(){if(O){var X=o.unstable_now();F=X;var $=!0;try{t:{T=!1,M&&(M=!1,x(z),z=-1),y=!0;var W=v;try{e:{for(U(X),g=e(d);g!==null&&!(g.expirationTime>X&&b());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var P=xt(g.expirationTime<=X);if(X=o.unstable_now(),typeof P=="function"){g.callback=P,U(X),$=!0;break e}g===e(d)&&i(d),U(X)}else i(d);g=e(d)}if(g!==null)$=!0;else{var nt=e(p);nt!==null&&ut(R,nt.startTime-X),$=!1}}break t}finally{g=null,v=W,y=!1}$=void 0}}finally{$?H():O=!1}}}var H;if(typeof L=="function")H=function(){L(A)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,K=st.port2;st.port1.onmessage=A,H=function(){K.postMessage(null)}}else H=function(){S(A,0)};function ct(){O||(O=!0,H())}function ut(X,$){z=S(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){T||y||(T=!0,ct())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return e(d)},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var W=v;v=$;try{return X()}finally{v=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var W=v;v=X;try{return $()}finally{v=W}},o.unstable_scheduleCallback=function(X,$,W){var xt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xt+W:xt):W=xt,X){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=W+P,X={id:_++,callback:$,priorityLevel:X,startTime:W,expirationTime:P,sortIndex:-1},W>xt?(X.sortIndex=W,t(p,X),e(d)===null&&X===e(p)&&(M?(x(z),z=-1):M=!0,ut(R,W-xt))):(X.sortIndex=P,t(d,X),T||y||(T=!0,ct())),X},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(X){var $=v;return function(){var W=v;v=$;try{return X.apply(this,arguments)}finally{v=W}}}}(Od)),Od}var Sv;function wE(){return Sv||(Sv=1,Ld.exports=CE()),Ld.exports}var Nd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function DE(){if(Mv)return Pn;Mv=1;var o=bm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Pn.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,_)},Pn.flushSync=function(d){var p=c.T,_=i.p;try{if(c.T=null,i.p=2,d)return d()}finally{c.T=p,i.p=_,i.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?i.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&i.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);i.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);i.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=f(p.as,p.crossOrigin);i.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(d)},Pn.requestFormReset=function(d){i.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,_){return c.H.useFormState(d,p,_)},Pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Pn.version="19.0.0",Pn}var Ev;function UE(){if(Ev)return Nd.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nd.exports=DE(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function LE(){if(Tv)return Hl;Tv=1;var o=wE(),t=bm(),e=UE();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),R=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function z(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function F(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case d:return"Fragment";case f:return"Portal";case _:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case y:return(n.displayName||"Context")+".Provider";case v:return(n._context.displayName||"Context")+".Consumer";case T:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case x:return a=n.displayName||null,a!==null?a:F(n.type)||"Memo";case L:a=n._payload,n=n._init;try{return F(n(a))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,st;function K(n){if(H===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);H=a&&a[1]||"",st=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+n+st}var ct=!1;function ut(n,a){if(!n||ct)return"";ct=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ot=ht}Reflect.construct(n,[],yt)}else{try{yt.call()}catch(ht){ot=ht}n.call(yt.prototype)}}else{try{throw Error()}catch(ht){ot=ht}(yt=n())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ot&&typeof ht.stack=="string")return[ht.stack,ot.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var B=E.split(`
`),j=w.split(`
`);for(h=u=0;u<B.length&&!B[u].includes("DetermineComponentFrameRoot");)u++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(u===B.length||h===j.length)for(u=B.length-1,h=j.length-1;1<=u&&0<=h&&B[u]!==j[h];)h--;for(;1<=u&&0<=h;u--,h--)if(B[u]!==j[h]){if(u!==1||h!==1)do if(u--,h--,0>h||B[u]!==j[h]){var mt=`
`+B[u].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=u&&0<=h);break}}}finally{ct=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?K(r):""}function X(n){switch(n.tag){case 26:case 27:case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return n=ut(n.type,!1),n;case 11:return n=ut(n.type.render,!1),n;case 1:return n=ut(n.type,!0),n;default:return""}}function $(n){try{var a="";do a+=X(n),n=n.return;while(n);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function W(n){var a=n,r=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(r=a.return),n=a.return;while(n)}return a.tag===3?r:null}function xt(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function P(n){if(W(n)!==n)throw Error(i(188))}function nt(n){var a=n.alternate;if(!a){if(a=W(n),a===null)throw Error(i(188));return a!==n?null:n}for(var r=n,u=a;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return P(h),n;if(m===u)return P(h),a;m=m.sibling}throw Error(i(188))}if(r.return!==u.return)r=h,u=m;else{for(var E=!1,w=h.child;w;){if(w===r){E=!0,r=h,u=m;break}if(w===u){E=!0,u=h,r=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===r){E=!0,r=m,u=h;break}if(w===u){E=!0,u=m,r=h;break}w=w.sibling}if(!E)throw Error(i(189))}}if(r.alternate!==u)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?n:a}function Et(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=Et(n),a!==null)return a;n=n.sibling}return null}var Ct=Array.isArray,Y=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},St=[],Rt=-1;function wt(n){return{current:n}}function Jt(n){0>Rt||(n.current=St[Rt],St[Rt]=null,Rt--)}function zt(n,a){Rt++,St[Rt]=n.current,n.current=a}var Te=wt(null),Ce=wt(null),ae=wt(null),V=wt(null);function pn(n,a){switch(zt(ae,a),zt(Ce,n),zt(Te,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?W0(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=W0(n),a=q0(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Jt(Te),zt(Te,a)}function oe(){Jt(Te),Jt(Ce),Jt(ae)}function le(n){n.memoizedState!==null&&zt(V,n);var a=Te.current,r=q0(a,n.type);a!==r&&(zt(Ce,n),zt(Te,r))}function Wt(n){Ce.current===n&&(Jt(Te),Jt(Ce)),V.current===n&&(Jt(V),Nl._currentValue=dt)}var we=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,C=o.unstable_shouldYield,at=o.unstable_requestPaint,pt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,pe=o.unstable_IdlePriority,At=o.log,Gt=o.unstable_setDisableYieldValue,Kt=null,Xt=null;function Ft(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Kt,n,void 0,(n.current.flags&128)===128)}catch{}}function k(n){if(typeof At=="function"&&Gt(n),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Kt,n)}catch{}}var ft=Math.clz32?Math.clz32:bt,Nt=Math.log,G=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(Nt(n)/G|0)|0}var lt=128,_t=4194304;function Lt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ot(n,a){var r=n.pendingLanes;if(r===0)return 0;var u=0,h=n.suspendedLanes,m=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var w=r&134217727;return w!==0?(r=w&~h,r!==0?u=Lt(r):(m&=w,m!==0?u=Lt(m):n||(E=w&~E,E!==0&&(u=Lt(E))))):(w=r&~h,w!==0?u=Lt(w):m!==0?u=Lt(m):n||(E=r&~E,E!==0&&(u=Lt(E)))),u===0?0:a!==0&&a!==u&&(a&h)===0&&(h=u&-u,E=a&-a,h>=E||h===32&&(E&4194176)!==0)?a:u}function jt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function be(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ke(){var n=lt;return lt<<=1,(lt&4194176)===0&&(lt=128),n}function me(){var n=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),n}function nn(n){for(var a=[],r=0;31>r;r++)a.push(n);return a}function on(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function pu(n,a,r,u,h,m){var E=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var w=n.entanglements,B=n.expirationTimes,j=n.hiddenUpdates;for(r=E&~r;0<r;){var mt=31-ft(r),yt=1<<mt;w[mt]=0,B[mt]=-1;var ot=j[mt];if(ot!==null)for(j[mt]=null,mt=0;mt<ot.length;mt++){var ht=ot[mt];ht!==null&&(ht.lane&=-536870913)}r&=~yt}u!==0&&Wo(n,u,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~a))}function Wo(n,a,r){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-ft(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|r&4194218}function Zi(n,a){var r=n.entangledLanes|=a;for(n=n.entanglements;r;){var u=31-ft(r),h=1<<u;h&a|n[u]&a&&(n[u]|=a),r&=~h}}function bs(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function qo(){var n=Y.p;return n!==0?n:(n=window.event,n===void 0?32:cv(n.type))}function mu(n,a){var r=Y.p;try{return Y.p=n,a()}finally{Y.p=r}}var li=Math.random().toString(36).slice(2),mn="__reactFiber$"+li,_n="__reactProps$"+li,fa="__reactContainer$"+li,As="__reactEvents$"+li,Rf="__reactListeners$"+li,Cf="__reactHandles$"+li,_u="__reactResources$"+li,Lr="__reactMarker$"+li;function Yo(n){delete n[mn],delete n[_n],delete n[As],delete n[Rf],delete n[Cf]}function ha(n){var a=n[mn];if(a)return a;for(var r=n.parentNode;r;){if(a=r[fa]||r[mn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(n=Z0(n);n!==null;){if(r=n[mn])return r;n=Z0(n)}return a}n=r,r=n.parentNode}return null}function D(n){if(n=n[mn]||n[fa]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Z(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function rt(n){var a=n[_u];return a||(a=n[_u]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function tt(n){n[Lr]=!0}var Q=new Set,Tt={};function Ut(n,a){Bt(n,a),Bt(n+"Capture",a)}function Bt(n,a){for(Tt[n]=a,n=0;n<a.length;n++)Q.add(a[n])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Qt={};function xe(n){return we.call(Qt,n)?!0:we.call(ie,n)?!1:ne.test(n)?Qt[n]=!0:(ie[n]=!0,!1)}function ye(n,a,r){if(xe(a))if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+r)}}function Xe(n,a,r){if(r===null)n.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+r)}}function De(n,a,r,u){if(u===null)n.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(a,r,""+u)}}function re(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $t(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function gn(n){var a=$t(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var h=r.get,m=r.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,a,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Se(n){n._valueTracker||(n._valueTracker=gn(n))}function Zn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var r=a.getValue(),u="";return n&&(u=$t(n)?n.checked?"true":"false":n.value),n=u,n!==r?(a.setValue(n),!0):!1}function zi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Vn=/[\n"\\]/g;function Mn(n){return n.replace(Vn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Pe(n,a,r,u,h,m,E,w){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+re(a)):n.value!==""+re(a)&&(n.value=""+re(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?On(n,E,re(a)):r!=null?On(n,E,re(r)):u!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+re(w):n.removeAttribute("name")}function kn(n,a,r,u,h,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;r=r!=null?""+re(r):"",a=a!=null?""+re(a):r,w||a===n.value||(n.value=a),n.defaultValue=a}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=w?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function On(n,a,r){a==="number"&&zi(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Ke(n,a,r,u){if(n=n.options,a){a={};for(var h=0;h<r.length;h++)a["$"+r[h]]=!0;for(r=0;r<n.length;r++)h=a.hasOwnProperty("$"+n[r].value),n[r].selected!==h&&(n[r].selected=h),h&&u&&(n[r].defaultSelected=!0)}else{for(r=""+re(r),a=null,h=0;h<n.length;h++){if(n[h].value===r){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function Cn(n,a,r){if(a!=null&&(a=""+re(a),a!==n.value&&(n.value=a),r==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=r!=null?""+re(r):""}function Rs(n,a,r,u){if(a==null){if(u!=null){if(r!=null)throw Error(i(92));if(Ct(u)){if(1<u.length)throw Error(i(93));u=u[0]}r=u}r==null&&(r=""),a=r}r=re(a),n.defaultValue=r,u=n.textContent,u===r&&u!==""&&u!==null&&(n.value=u)}function Kn(n,a){if(a){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=a;return}}n.textContent=a}var yS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $m(n,a,r){var u=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,r):typeof r!="number"||r===0||yS.has(a)?a==="float"?n.cssFloat=r:n[a]=(""+r).trim():n[a]=r+"px"}function t_(n,a,r){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in a)u=a[h],a.hasOwnProperty(h)&&r[h]!==u&&$m(n,h,u)}else for(var m in a)a.hasOwnProperty(m)&&$m(n,m,a[m])}function wf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var SS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gu(n){return MS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Df=null;function Uf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cs=null,ws=null;function e_(n){var a=D(n);if(a&&(n=a.stateNode)){var r=n[_n]||null;t:switch(n=a.stateNode,a.type){case"input":if(Pe(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Mn(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var u=r[a];if(u!==n&&u.form===n.form){var h=u[_n]||null;if(!h)throw Error(i(90));Pe(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<r.length;a++)u=r[a],u.form===n.form&&Zn(u)}break t;case"textarea":Cn(n,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ke(n,!!r.multiple,a,!1)}}}var Lf=!1;function n_(n,a,r){if(Lf)return n(a,r);Lf=!0;try{var u=n(a);return u}finally{if(Lf=!1,(Cs!==null||ws!==null)&&(tc(),Cs&&(a=Cs,n=ws,ws=Cs=null,e_(a),n)))for(a=0;a<n.length;a++)e_(n[a])}}function jo(n,a){var r=n.stateNode;if(r===null)return null;var u=r[_n]||null;if(u===null)return null;r=u[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(i(231,a,typeof r));return r}var Of=!1;if(It)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Of=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Of=!1}var Wa=null,Nf=null,vu=null;function i_(){if(vu)return vu;var n,a=Nf,r=a.length,u,h="value"in Wa?Wa.value:Wa.textContent,m=h.length;for(n=0;n<r&&a[n]===h[n];n++);var E=r-n;for(u=1;u<=E&&a[r-u]===h[m-u];u++);return vu=h.slice(n,1<u?1-u:void 0)}function xu(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function yu(){return!0}function a_(){return!1}function Qn(n){function a(r,u,h,m,E){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(r=n[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?yu:a_,this.isPropagationStopped=a_,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),a}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Qn(Or),Ko=A({},Or,{view:0,detail:0}),ES=Qn(Ko),Pf,zf,Qo,Mu=A({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qo&&(Qo&&n.type==="mousemove"?(Pf=n.screenX-Qo.screenX,zf=n.screenY-Qo.screenY):zf=Pf=0,Qo=n),Pf)},movementY:function(n){return"movementY"in n?n.movementY:zf}}),r_=Qn(Mu),TS=A({},Mu,{dataTransfer:0}),bS=Qn(TS),AS=A({},Ko,{relatedTarget:0}),If=Qn(AS),RS=A({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),CS=Qn(RS),wS=A({},Or,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),DS=Qn(wS),US=A({},Or,{data:0}),s_=Qn(US),LS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=NS[n])?!!a[n]:!1}function Bf(){return PS}var zS=A({},Ko,{key:function(n){if(n.key){var a=LS[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=xu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?OS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(n){return n.type==="keypress"?xu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),IS=Qn(zS),BS=A({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o_=Qn(BS),FS=A({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),HS=Qn(FS),GS=A({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Qn(GS),kS=A({},Mu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),XS=Qn(kS),WS=A({},Or,{newState:0,oldState:0}),qS=Qn(WS),YS=[9,13,27,32],Ff=It&&"CompositionEvent"in window,Jo=null;It&&"documentMode"in document&&(Jo=document.documentMode);var jS=It&&"TextEvent"in window&&!Jo,l_=It&&(!Ff||Jo&&8<Jo&&11>=Jo),u_=" ",c_=!1;function f_(n,a){switch(n){case"keyup":return YS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function ZS(n,a){switch(n){case"compositionend":return h_(a);case"keypress":return a.which!==32?null:(c_=!0,u_);case"textInput":return n=a.data,n===u_&&c_?null:n;default:return null}}function KS(n,a){if(Ds)return n==="compositionend"||!Ff&&f_(n,a)?(n=i_(),vu=Nf=Wa=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return l_&&a.locale!=="ko"?null:a.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d_(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!QS[n.type]:a==="textarea"}function p_(n,a,r,u){Cs?ws?ws.push(u):ws=[u]:Cs=u,a=rc(a,"onChange"),0<a.length&&(r=new Su("onChange","change",null,r,u),n.push({event:r,listeners:a}))}var $o=null,tl=null;function JS(n){H0(n,0)}function Eu(n){var a=Z(n);if(Zn(a))return n}function m_(n,a){if(n==="change")return a}var __=!1;if(It){var Hf;if(It){var Gf="oninput"in document;if(!Gf){var g_=document.createElement("div");g_.setAttribute("oninput","return;"),Gf=typeof g_.oninput=="function"}Hf=Gf}else Hf=!1;__=Hf&&(!document.documentMode||9<document.documentMode)}function v_(){$o&&($o.detachEvent("onpropertychange",x_),tl=$o=null)}function x_(n){if(n.propertyName==="value"&&Eu(tl)){var a=[];p_(a,tl,n,Uf(n)),n_(JS,a)}}function $S(n,a,r){n==="focusin"?(v_(),$o=a,tl=r,$o.attachEvent("onpropertychange",x_)):n==="focusout"&&v_()}function tM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eu(tl)}function eM(n,a){if(n==="click")return Eu(a)}function nM(n,a){if(n==="input"||n==="change")return Eu(a)}function iM(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var ui=typeof Object.is=="function"?Object.is:iM;function el(n,a){if(ui(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var r=Object.keys(n),u=Object.keys(a);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!we.call(a,h)||!ui(n[h],a[h]))return!1}return!0}function y_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function S_(n,a){var r=y_(n);n=0;for(var u;r;){if(r.nodeType===3){if(u=n+r.textContent.length,n<=a&&u>=a)return{node:r,offset:a-n};n=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=y_(r)}}function M_(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?M_(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function E_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=zi(n.document);a instanceof n.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)n=a.contentWindow;else break;a=zi(n.document)}return a}function Vf(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function aM(n,a){var r=E_(a);a=n.focusedElem;var u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&M_(a.ownerDocument.documentElement,a)){if(u!==null&&Vf(a)){if(n=u.start,r=u.end,r===void 0&&(r=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(r,a.value.length);else if(r=(n=a.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!r.extend&&m>u&&(h=u,u=m,m=h),h=S_(a,m);var E=S_(a,u);h&&E&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),r.removeAllRanges(),m>u?(r.addRange(n),r.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),r.addRange(n)))}}for(n=[],r=a;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)r=n[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var rM=It&&"documentMode"in document&&11>=document.documentMode,Us=null,kf=null,nl=null,Xf=!1;function T_(n,a,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Us==null||Us!==zi(u)||(u=Us,"selectionStart"in u&&Vf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),nl&&el(nl,u)||(nl=u,u=rc(kf,"onSelect"),0<u.length&&(a=new Su("onSelect","select",null,a,r),n.push({event:a,listeners:u}),a.target=Us)))}function Nr(n,a){var r={};return r[n.toLowerCase()]=a.toLowerCase(),r["Webkit"+n]="webkit"+a,r["Moz"+n]="moz"+a,r}var Ls={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Wf={},b_={};It&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Pr(n){if(Wf[n])return Wf[n];if(!Ls[n])return n;var a=Ls[n],r;for(r in a)if(a.hasOwnProperty(r)&&r in b_)return Wf[n]=a[r];return n}var A_=Pr("animationend"),R_=Pr("animationiteration"),C_=Pr("animationstart"),sM=Pr("transitionrun"),oM=Pr("transitionstart"),lM=Pr("transitioncancel"),w_=Pr("transitionend"),D_=new Map,U_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ii(n,a){D_.set(n,a),Ut(a,[n])}var Mi=[],Os=0,qf=0;function Tu(){for(var n=Os,a=qf=Os=0;a<n;){var r=Mi[a];Mi[a++]=null;var u=Mi[a];Mi[a++]=null;var h=Mi[a];Mi[a++]=null;var m=Mi[a];if(Mi[a++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&L_(r,h,m)}}function bu(n,a,r,u){Mi[Os++]=n,Mi[Os++]=a,Mi[Os++]=r,Mi[Os++]=u,qf|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Yf(n,a,r,u){return bu(n,a,r,u),Au(n)}function qa(n,a){return bu(n,null,null,a),Au(n)}function L_(n,a,r){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=n.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;h&&a!==null&&n.tag===3&&(m=n.stateNode,h=31-ft(r),m=m.hiddenUpdates,n=m[h],n===null?m[h]=[a]:n.push(a),a.lane=r|536870912)}function Au(n){if(50<Rl)throw Rl=0,$h=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ns={},O_=new WeakMap;function Ei(n,a){if(typeof n=="object"&&n!==null){var r=O_.get(n);return r!==void 0?r:(a={value:n,source:a,stack:$(a)},O_.set(n,a),a)}return{value:n,source:a,stack:$(a)}}var Ps=[],zs=0,Ru=null,Cu=0,Ti=[],bi=0,zr=null,da=1,pa="";function Ir(n,a){Ps[zs++]=Cu,Ps[zs++]=Ru,Ru=n,Cu=a}function N_(n,a,r){Ti[bi++]=da,Ti[bi++]=pa,Ti[bi++]=zr,zr=n;var u=da;n=pa;var h=32-ft(u)-1;u&=~(1<<h),r+=1;var m=32-ft(a)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,da=1<<32-ft(a)+h|r<<h|u,pa=m+n}else da=1<<m|r<<h|u,pa=n}function jf(n){n.return!==null&&(Ir(n,1),N_(n,1,0))}function Zf(n){for(;n===Ru;)Ru=Ps[--zs],Ps[zs]=null,Cu=Ps[--zs],Ps[zs]=null;for(;n===zr;)zr=Ti[--bi],Ti[bi]=null,pa=Ti[--bi],Ti[bi]=null,da=Ti[--bi],Ti[bi]=null}var Xn=null,wn=null,Ue=!1,Bi=null,Ki=!1,Kf=Error(i(519));function Br(n){var a=Error(i(418,""));throw rl(Ei(a,n)),Kf}function P_(n){var a=n.stateNode,r=n.type,u=n.memoizedProps;switch(a[mn]=n,a[_n]=u,r){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(r=0;r<wl.length;r++)Me(wl[r],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),kn(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Se(a);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),Rs(a,u.value,u.defaultValue,u.children),Se(a)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||u.suppressHydrationWarning===!0||X0(a.textContent,r)?(u.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),u.onScroll!=null&&Me("scroll",a),u.onScrollEnd!=null&&Me("scrollend",a),u.onClick!=null&&(a.onclick=sc),a=!0):a=!1,a||Br(n)}function z_(n){for(Xn=n.return;Xn;)switch(Xn.tag){case 3:case 27:Ki=!0;return;case 5:case 13:Ki=!1;return;default:Xn=Xn.return}}function il(n){if(n!==Xn)return!1;if(!Ue)return z_(n),Ue=!0,!1;var a=!1,r;if((r=n.tag!==3&&n.tag!==27)&&((r=n.tag===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||_d(n.type,n.memoizedProps)),r=!r),r&&(a=!0),a&&wn&&Br(n),z_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(r=n.data,r==="/$"){if(a===0){wn=Hi(n.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;n=n.nextSibling}wn=null}}else wn=Xn?Hi(n.stateNode.nextSibling):null;return!0}function al(){wn=Xn=null,Ue=!1}function rl(n){Bi===null?Bi=[n]:Bi.push(n)}var sl=Error(i(460)),I_=Error(i(474)),Qf={then:function(){}};function B_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function wu(){}function F_(n,a,r){switch(r=n[r],r===void 0?n.push(a):r!==a&&(a.then(wu,wu),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===sl?Error(i(483)):n;default:if(typeof a.status=="string")a.then(wu,wu);else{if(n=Ge,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=u}},function(u){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===sl?Error(i(483)):n}throw ol=a,sl}}var ol=null;function H_(){if(ol===null)throw Error(i(459));var n=ol;return ol=null,n}var Is=null,ll=0;function Du(n){var a=ll;return ll+=1,Is===null&&(Is=[]),F_(Is,n,a)}function ul(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Uu(n,a){throw a.$$typeof===l?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function G_(n){var a=n._init;return a(n._payload)}function V_(n){function a(J,q){if(n){var et=J.deletions;et===null?(J.deletions=[q],J.flags|=16):et.push(q)}}function r(J,q){if(!n)return null;for(;q!==null;)a(J,q),q=q.sibling;return null}function u(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function h(J,q){return J=ar(J,q),J.index=0,J.sibling=null,J}function m(J,q,et){return J.index=et,n?(et=J.alternate,et!==null?(et=et.index,et<q?(J.flags|=33554434,q):et):(J.flags|=33554434,q)):(J.flags|=1048576,q)}function E(J){return n&&J.alternate===null&&(J.flags|=33554434),J}function w(J,q,et,vt){return q===null||q.tag!==6?(q=Wh(et,J.mode,vt),q.return=J,q):(q=h(q,et),q.return=J,q)}function B(J,q,et,vt){var Vt=et.type;return Vt===d?mt(J,q,et.props.children,vt,et.key):q!==null&&(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===L&&G_(Vt)===q.type)?(q=h(q,et.props),ul(q,et),q.return=J,q):(q=Zu(et.type,et.key,et.props,null,J.mode,vt),ul(q,et),q.return=J,q)}function j(J,q,et,vt){return q===null||q.tag!==4||q.stateNode.containerInfo!==et.containerInfo||q.stateNode.implementation!==et.implementation?(q=qh(et,J.mode,vt),q.return=J,q):(q=h(q,et.children||[]),q.return=J,q)}function mt(J,q,et,vt,Vt){return q===null||q.tag!==7?(q=jr(et,J.mode,vt,Vt),q.return=J,q):(q=h(q,et),q.return=J,q)}function yt(J,q,et){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Wh(""+q,J.mode,et),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case c:return et=Zu(q.type,q.key,q.props,null,J.mode,et),ul(et,q),et.return=J,et;case f:return q=qh(q,J.mode,et),q.return=J,q;case L:var vt=q._init;return q=vt(q._payload),yt(J,q,et)}if(Ct(q)||z(q))return q=jr(q,J.mode,et,null),q.return=J,q;if(typeof q.then=="function")return yt(J,Du(q),et);if(q.$$typeof===y)return yt(J,qu(J,q),et);Uu(J,q)}return null}function ot(J,q,et,vt){var Vt=q!==null?q.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Vt!==null?null:w(J,q,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case c:return et.key===Vt?B(J,q,et,vt):null;case f:return et.key===Vt?j(J,q,et,vt):null;case L:return Vt=et._init,et=Vt(et._payload),ot(J,q,et,vt)}if(Ct(et)||z(et))return Vt!==null?null:mt(J,q,et,vt,null);if(typeof et.then=="function")return ot(J,q,Du(et),vt);if(et.$$typeof===y)return ot(J,q,qu(J,et),vt);Uu(J,et)}return null}function ht(J,q,et,vt,Vt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(et)||null,w(q,J,""+vt,Vt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case c:return J=J.get(vt.key===null?et:vt.key)||null,B(q,J,vt,Vt);case f:return J=J.get(vt.key===null?et:vt.key)||null,j(q,J,vt,Vt);case L:var _e=vt._init;return vt=_e(vt._payload),ht(J,q,et,vt,Vt)}if(Ct(vt)||z(vt))return J=J.get(et)||null,mt(q,J,vt,Vt,null);if(typeof vt.then=="function")return ht(J,q,et,Du(vt),Vt);if(vt.$$typeof===y)return ht(J,q,et,qu(q,vt),Vt);Uu(q,vt)}return null}function Yt(J,q,et,vt){for(var Vt=null,_e=null,Zt=q,ee=q=0,bn=null;Zt!==null&&ee<et.length;ee++){Zt.index>ee?(bn=Zt,Zt=null):bn=Zt.sibling;var Le=ot(J,Zt,et[ee],vt);if(Le===null){Zt===null&&(Zt=bn);break}n&&Zt&&Le.alternate===null&&a(J,Zt),q=m(Le,q,ee),_e===null?Vt=Le:_e.sibling=Le,_e=Le,Zt=bn}if(ee===et.length)return r(J,Zt),Ue&&Ir(J,ee),Vt;if(Zt===null){for(;ee<et.length;ee++)Zt=yt(J,et[ee],vt),Zt!==null&&(q=m(Zt,q,ee),_e===null?Vt=Zt:_e.sibling=Zt,_e=Zt);return Ue&&Ir(J,ee),Vt}for(Zt=u(Zt);ee<et.length;ee++)bn=ht(Zt,J,ee,et[ee],vt),bn!==null&&(n&&bn.alternate!==null&&Zt.delete(bn.key===null?ee:bn.key),q=m(bn,q,ee),_e===null?Vt=bn:_e.sibling=bn,_e=bn);return n&&Zt.forEach(function(fr){return a(J,fr)}),Ue&&Ir(J,ee),Vt}function se(J,q,et,vt){if(et==null)throw Error(i(151));for(var Vt=null,_e=null,Zt=q,ee=q=0,bn=null,Le=et.next();Zt!==null&&!Le.done;ee++,Le=et.next()){Zt.index>ee?(bn=Zt,Zt=null):bn=Zt.sibling;var fr=ot(J,Zt,Le.value,vt);if(fr===null){Zt===null&&(Zt=bn);break}n&&Zt&&fr.alternate===null&&a(J,Zt),q=m(fr,q,ee),_e===null?Vt=fr:_e.sibling=fr,_e=fr,Zt=bn}if(Le.done)return r(J,Zt),Ue&&Ir(J,ee),Vt;if(Zt===null){for(;!Le.done;ee++,Le=et.next())Le=yt(J,Le.value,vt),Le!==null&&(q=m(Le,q,ee),_e===null?Vt=Le:_e.sibling=Le,_e=Le);return Ue&&Ir(J,ee),Vt}for(Zt=u(Zt);!Le.done;ee++,Le=et.next())Le=ht(Zt,J,ee,Le.value,vt),Le!==null&&(n&&Le.alternate!==null&&Zt.delete(Le.key===null?ee:Le.key),q=m(Le,q,ee),_e===null?Vt=Le:_e.sibling=Le,_e=Le);return n&&Zt.forEach(function(ME){return a(J,ME)}),Ue&&Ir(J,ee),Vt}function $e(J,q,et,vt){if(typeof et=="object"&&et!==null&&et.type===d&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case c:t:{for(var Vt=et.key;q!==null;){if(q.key===Vt){if(Vt=et.type,Vt===d){if(q.tag===7){r(J,q.sibling),vt=h(q,et.props.children),vt.return=J,J=vt;break t}}else if(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===L&&G_(Vt)===q.type){r(J,q.sibling),vt=h(q,et.props),ul(vt,et),vt.return=J,J=vt;break t}r(J,q);break}else a(J,q);q=q.sibling}et.type===d?(vt=jr(et.props.children,J.mode,vt,et.key),vt.return=J,J=vt):(vt=Zu(et.type,et.key,et.props,null,J.mode,vt),ul(vt,et),vt.return=J,J=vt)}return E(J);case f:t:{for(Vt=et.key;q!==null;){if(q.key===Vt)if(q.tag===4&&q.stateNode.containerInfo===et.containerInfo&&q.stateNode.implementation===et.implementation){r(J,q.sibling),vt=h(q,et.children||[]),vt.return=J,J=vt;break t}else{r(J,q);break}else a(J,q);q=q.sibling}vt=qh(et,J.mode,vt),vt.return=J,J=vt}return E(J);case L:return Vt=et._init,et=Vt(et._payload),$e(J,q,et,vt)}if(Ct(et))return Yt(J,q,et,vt);if(z(et)){if(Vt=z(et),typeof Vt!="function")throw Error(i(150));return et=Vt.call(et),se(J,q,et,vt)}if(typeof et.then=="function")return $e(J,q,Du(et),vt);if(et.$$typeof===y)return $e(J,q,qu(J,et),vt);Uu(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,q!==null&&q.tag===6?(r(J,q.sibling),vt=h(q,et),vt.return=J,J=vt):(r(J,q),vt=Wh(et,J.mode,vt),vt.return=J,J=vt),E(J)):r(J,q)}return function(J,q,et,vt){try{ll=0;var Vt=$e(J,q,et,vt);return Is=null,Vt}catch(Zt){if(Zt===sl)throw Zt;var _e=wi(29,Zt,null,J.mode);return _e.lanes=vt,_e.return=J,_e}finally{}}}var Fr=V_(!0),k_=V_(!1),Bs=wt(null),Lu=wt(0);function X_(n,a){n=ba,zt(Lu,n),zt(Bs,a),ba=n|a.baseLanes}function Jf(){zt(Lu,ba),zt(Bs,Bs.current)}function $f(){ba=Lu.current,Jt(Bs),Jt(Lu)}var Ai=wt(null),Qi=null;function Ya(n){var a=n.alternate;zt(vn,vn.current&1),zt(Ai,n),Qi===null&&(a===null||Bs.current!==null||a.memoizedState!==null)&&(Qi=n)}function W_(n){if(n.tag===22){if(zt(vn,vn.current),zt(Ai,n),Qi===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Qi=n)}}else ja()}function ja(){zt(vn,vn.current),zt(Ai,Ai.current)}function ma(n){Jt(Ai),Qi===n&&(Qi=null),Jt(vn)}var vn=wt(0);function Ou(n){for(var a=n;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var uM=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(r,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(r){return r()})}},cM=o.unstable_scheduleCallback,fM=o.unstable_NormalPriority,xn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function th(){return{controller:new uM,data:new Map,refCount:0}}function cl(n){n.refCount--,n.refCount===0&&cM(fM,function(){n.controller.abort()})}var fl=null,eh=0,Fs=0,Hs=null;function hM(n,a){if(fl===null){var r=fl=[];eh=0,Fs=od(),Hs={status:"pending",value:void 0,then:function(u){r.push(u)}}}return eh++,a.then(q_,q_),a}function q_(){if(--eh===0&&fl!==null){Hs!==null&&(Hs.status="fulfilled");var n=fl;fl=null,Fs=0,Hs=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function dM(n,a){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var h=0;h<r.length;h++)(0,r[h])(a)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var Y_=b.S;b.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&hM(n,a),Y_!==null&&Y_(n,a)};var Hr=wt(null);function nh(){var n=Hr.current;return n!==null?n:Ge.pooledCache}function Nu(n,a){a===null?zt(Hr,Hr.current):zt(Hr,a.pool)}function j_(){var n=nh();return n===null?null:{parent:xn._currentValue,pool:n}}var Za=0,de=null,ze=null,ln=null,Pu=!1,Gs=!1,Gr=!1,zu=0,hl=0,Vs=null,pM=0;function an(){throw Error(i(321))}function ih(n,a){if(a===null)return!1;for(var r=0;r<a.length&&r<n.length;r++)if(!ui(n[r],a[r]))return!1;return!0}function ah(n,a,r,u,h,m){return Za=m,de=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,b.H=n===null||n.memoizedState===null?Vr:Ka,Gr=!1,m=r(u,h),Gr=!1,Gs&&(m=K_(a,r,u,h)),Z_(n),m}function Z_(n){b.H=Ji;var a=ze!==null&&ze.next!==null;if(Za=0,ln=ze=de=null,Pu=!1,hl=0,Vs=null,a)throw Error(i(300));n===null||En||(n=n.dependencies,n!==null&&Wu(n)&&(En=!0))}function K_(n,a,r,u){de=n;var h=0;do{if(Gs&&(Vs=null),hl=0,Gs=!1,25<=h)throw Error(i(301));if(h+=1,ln=ze=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}b.H=kr,m=a(r,u)}while(Gs);return m}function mM(){var n=b.H,a=n.useState()[0];return a=typeof a.then=="function"?dl(a):a,n=n.useState()[0],(ze!==null?ze.memoizedState:null)!==n&&(de.flags|=1024),a}function rh(){var n=zu!==0;return zu=0,n}function sh(n,a,r){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~r}function oh(n){if(Pu){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Pu=!1}Za=0,ln=ze=de=null,Gs=!1,hl=zu=0,Vs=null}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?de.memoizedState=ln=n:ln=ln.next=n,ln}function un(){if(ze===null){var n=de.alternate;n=n!==null?n.memoizedState:null}else n=ze.next;var a=ln===null?de.memoizedState:ln.next;if(a!==null)ln=a,ze=n;else{if(n===null)throw de.alternate===null?Error(i(467)):Error(i(310));ze=n,n={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?de.memoizedState=ln=n:ln=ln.next=n}return ln}var Iu;Iu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function dl(n){var a=hl;return hl+=1,Vs===null&&(Vs=[]),n=F_(Vs,n,a),a=de,(ln===null?a.memoizedState:ln.next)===null&&(a=a.alternate,b.H=a===null||a.memoizedState===null?Vr:Ka),n}function Bu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return dl(n);if(n.$$typeof===y)return Nn(n)}throw Error(i(438,String(n)))}function lh(n){var a=null,r=de.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var u=de.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Iu(),de.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(n),u=0;u<n;u++)r[u]=R;return a.index++,r}function _a(n,a){return typeof a=="function"?a(n):a}function Fu(n){var a=un();return uh(a,ze,n)}function uh(n,a,r){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=r;var h=n.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}a.baseQueue=h=m,u.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{a=h.next;var w=E=null,B=null,j=a,mt=!1;do{var yt=j.lane&-536870913;if(yt!==j.lane?(Ae&yt)===yt:(Za&yt)===yt){var ot=j.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),yt===Fs&&(mt=!0);else if((Za&ot)===ot){j=j.next,ot===Fs&&(mt=!0);continue}else yt={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(w=B=yt,E=m):B=B.next=yt,de.lanes|=ot,rr|=ot;yt=j.action,Gr&&r(m,yt),m=j.hasEagerState?j.eagerState:r(m,yt)}else ot={lane:yt,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(w=B=ot,E=m):B=B.next=ot,de.lanes|=yt,rr|=yt;j=j.next}while(j!==null&&j!==a);if(B===null?E=m:B.next=w,!ui(m,n.memoizedState)&&(En=!0,mt&&(r=Hs,r!==null)))throw r;n.memoizedState=m,n.baseState=E,n.baseQueue=B,u.lastRenderedState=m}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ch(n){var a=un(),r=a.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var u=r.dispatch,h=r.pending,m=a.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);ui(m,a.memoizedState)||(En=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,u]}function Q_(n,a,r){var u=de,h=un(),m=Ue;if(m){if(r===void 0)throw Error(i(407));r=r()}else r=a();var E=!ui((ze||h).memoizedState,r);if(E&&(h.memoizedState=r,En=!0),h=h.queue,dh(tg.bind(null,u,h,n),[n]),h.getSnapshot!==a||E||ln!==null&&ln.memoizedState.tag&1){if(u.flags|=2048,ks(9,$_.bind(null,u,h,r,a),{destroy:void 0},null),Ge===null)throw Error(i(349));m||(Za&60)!==0||J_(u,a,r)}return r}function J_(n,a,r){n.flags|=16384,n={getSnapshot:a,value:r},a=de.updateQueue,a===null?(a=Iu(),de.updateQueue=a,a.stores=[n]):(r=a.stores,r===null?a.stores=[n]:r.push(n))}function $_(n,a,r,u){a.value=r,a.getSnapshot=u,eg(a)&&ng(n)}function tg(n,a,r){return r(function(){eg(a)&&ng(n)})}function eg(n){var a=n.getSnapshot;n=n.value;try{var r=a();return!ui(n,r)}catch{return!0}}function ng(n){var a=qa(n,2);a!==null&&Wn(a,n,2)}function fh(n){var a=Jn();if(typeof n=="function"){var r=n;if(n=r(),Gr){k(!0);try{r()}finally{k(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},a}function ig(n,a,r,u){return n.baseState=r,uh(n,ze,typeof u=="function"?u:_a)}function _M(n,a,r,u,h){if(Vu(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};b.T!==null?r(!0):m.isTransition=!1,u(m),r=a.pending,r===null?(m.next=a.pending=m,ag(a,m)):(m.next=r.next,a.pending=r.next=m)}}function ag(n,a){var r=a.action,u=a.payload,h=n.state;if(a.isTransition){var m=b.T,E={};b.T=E;try{var w=r(h,u),B=b.S;B!==null&&B(E,w),rg(n,a,w)}catch(j){hh(n,a,j)}finally{b.T=m}}else try{m=r(h,u),rg(n,a,m)}catch(j){hh(n,a,j)}}function rg(n,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){sg(n,a,u)},function(u){return hh(n,a,u)}):sg(n,a,r)}function sg(n,a,r){a.status="fulfilled",a.value=r,og(a),n.state=r,a=n.pending,a!==null&&(r=a.next,r===a?n.pending=null:(r=r.next,a.next=r,ag(n,r)))}function hh(n,a,r){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=r,og(a),a=a.next;while(a!==u)}n.action=null}function og(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function lg(n,a){return a}function ug(n,a){if(Ue){var r=Ge.formState;if(r!==null){t:{var u=de;if(Ue){if(wn){e:{for(var h=wn,m=Ki;h.nodeType!==8;){if(!m){h=null;break e}if(h=Hi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){wn=Hi(h.nextSibling),u=h.data==="F!";break t}}Br(u)}u=!1}u&&(a=r[0])}}return r=Jn(),r.memoizedState=r.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:a},r.queue=u,r=Rg.bind(null,de,u),u.dispatch=r,u=fh(!1),m=vh.bind(null,de,!1,u.queue),u=Jn(),h={state:a,dispatch:null,action:n,pending:null},u.queue=h,r=_M.bind(null,de,h,m,r),h.dispatch=r,u.memoizedState=n,[a,r,!1]}function cg(n){var a=un();return fg(a,ze,n)}function fg(n,a,r){a=uh(n,a,lg)[0],n=Fu(_a)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?dl(a):a;var u=un(),h=u.queue,m=h.dispatch;return r!==u.memoizedState&&(de.flags|=2048,ks(9,gM.bind(null,h,r),{destroy:void 0},null)),[a,m,n]}function gM(n,a){n.action=a}function hg(n){var a=un(),r=ze;if(r!==null)return fg(a,r,n);un(),a=a.memoizedState,r=un();var u=r.queue.dispatch;return r.memoizedState=n,[a,u,!1]}function ks(n,a,r,u){return n={tag:n,create:a,inst:r,deps:u,next:null},a=de.updateQueue,a===null&&(a=Iu(),de.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=n.next=n:(u=r.next,r.next=n,n.next=u,a.lastEffect=n),n}function dg(){return un().memoizedState}function Hu(n,a,r,u){var h=Jn();de.flags|=n,h.memoizedState=ks(1|a,r,{destroy:void 0},u===void 0?null:u)}function Gu(n,a,r,u){var h=un();u=u===void 0?null:u;var m=h.memoizedState.inst;ze!==null&&u!==null&&ih(u,ze.memoizedState.deps)?h.memoizedState=ks(a,r,m,u):(de.flags|=n,h.memoizedState=ks(1|a,r,m,u))}function pg(n,a){Hu(8390656,8,n,a)}function dh(n,a){Gu(2048,8,n,a)}function mg(n,a){return Gu(4,2,n,a)}function _g(n,a){return Gu(4,4,n,a)}function gg(n,a){if(typeof a=="function"){n=n();var r=a(n);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function vg(n,a,r){r=r!=null?r.concat([n]):null,Gu(4,4,gg.bind(null,a,n),r)}function ph(){}function xg(n,a){var r=un();a=a===void 0?null:a;var u=r.memoizedState;return a!==null&&ih(a,u[1])?u[0]:(r.memoizedState=[n,a],n)}function yg(n,a){var r=un();a=a===void 0?null:a;var u=r.memoizedState;if(a!==null&&ih(a,u[1]))return u[0];if(u=n(),Gr){k(!0);try{n()}finally{k(!1)}}return r.memoizedState=[u,a],u}function mh(n,a,r){return r===void 0||(Za&1073741824)!==0?n.memoizedState=a:(n.memoizedState=r,n=M0(),de.lanes|=n,rr|=n,r)}function Sg(n,a,r,u){return ui(r,a)?r:Bs.current!==null?(n=mh(n,r,u),ui(n,a)||(En=!0),n):(Za&42)===0?(En=!0,n.memoizedState=r):(n=M0(),de.lanes|=n,rr|=n,a)}function Mg(n,a,r,u,h){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=b.T,w={};b.T=w,vh(n,!1,a,r);try{var B=h(),j=b.S;if(j!==null&&j(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var mt=dM(B,u);pl(n,a,mt,di(n))}else pl(n,a,u,di(n))}catch(yt){pl(n,a,{then:function(){},status:"rejected",reason:yt},di())}finally{Y.p=m,b.T=E}}function vM(){}function _h(n,a,r,u){if(n.tag!==5)throw Error(i(476));var h=Eg(n).queue;Mg(n,h,a,dt,r===null?vM:function(){return Tg(n),r(u)})}function Eg(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:dt},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:r},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Tg(n){var a=Eg(n).next.queue;pl(n,a,{},di())}function gh(){return Nn(Nl)}function bg(){return un().memoizedState}function Ag(){return un().memoizedState}function xM(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var r=di();n=$a(r);var u=tr(a,n,r);u!==null&&(Wn(u,a,r),gl(u,a,r)),a={cache:th()},n.payload=a;return}a=a.return}}function yM(n,a,r){var u=di();r={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Vu(n)?Cg(a,r):(r=Yf(n,a,r,u),r!==null&&(Wn(r,n,u),wg(r,a,u)))}function Rg(n,a,r){var u=di();pl(n,a,r,u)}function pl(n,a,r,u){var h={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vu(n))Cg(a,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var E=a.lastRenderedState,w=m(E,r);if(h.hasEagerState=!0,h.eagerState=w,ui(w,E))return bu(n,a,h,0),Ge===null&&Tu(),!1}catch{}finally{}if(r=Yf(n,a,h,u),r!==null)return Wn(r,n,u),wg(r,a,u),!0}return!1}function vh(n,a,r,u){if(u={lane:2,revertLane:od(),action:u,hasEagerState:!1,eagerState:null,next:null},Vu(n)){if(a)throw Error(i(479))}else a=Yf(n,r,u,2),a!==null&&Wn(a,n,2)}function Vu(n){var a=n.alternate;return n===de||a!==null&&a===de}function Cg(n,a){Gs=Pu=!0;var r=n.pending;r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a}function wg(n,a,r){if((r&4194176)!==0){var u=a.lanes;u&=n.pendingLanes,r|=u,a.lanes=r,Zi(n,r)}}var Ji={readContext:Nn,use:Bu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an};Ji.useCacheRefresh=an,Ji.useMemoCache=an,Ji.useHostTransitionStatus=an,Ji.useFormState=an,Ji.useActionState=an,Ji.useOptimistic=an;var Vr={readContext:Nn,use:Bu,useCallback:function(n,a){return Jn().memoizedState=[n,a===void 0?null:a],n},useContext:Nn,useEffect:pg,useImperativeHandle:function(n,a,r){r=r!=null?r.concat([n]):null,Hu(4194308,4,gg.bind(null,a,n),r)},useLayoutEffect:function(n,a){return Hu(4194308,4,n,a)},useInsertionEffect:function(n,a){Hu(4,2,n,a)},useMemo:function(n,a){var r=Jn();a=a===void 0?null:a;var u=n();if(Gr){k(!0);try{n()}finally{k(!1)}}return r.memoizedState=[u,a],u},useReducer:function(n,a,r){var u=Jn();if(r!==void 0){var h=r(a);if(Gr){k(!0);try{r(a)}finally{k(!1)}}}else h=a;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=yM.bind(null,de,n),[u.memoizedState,n]},useRef:function(n){var a=Jn();return n={current:n},a.memoizedState=n},useState:function(n){n=fh(n);var a=n.queue,r=Rg.bind(null,de,a);return a.dispatch=r,[n.memoizedState,r]},useDebugValue:ph,useDeferredValue:function(n,a){var r=Jn();return mh(r,n,a)},useTransition:function(){var n=fh(!1);return n=Mg.bind(null,de,n.queue,!0,!1),Jn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,r){var u=de,h=Jn();if(Ue){if(r===void 0)throw Error(i(407));r=r()}else{if(r=a(),Ge===null)throw Error(i(349));(Ae&60)!==0||J_(u,a,r)}h.memoizedState=r;var m={value:r,getSnapshot:a};return h.queue=m,pg(tg.bind(null,u,m,n),[n]),u.flags|=2048,ks(9,$_.bind(null,u,m,r,a),{destroy:void 0},null),r},useId:function(){var n=Jn(),a=Ge.identifierPrefix;if(Ue){var r=pa,u=da;r=(u&~(1<<32-ft(u)-1)).toString(32)+r,a=":"+a+"R"+r,r=zu++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=pM++,a=":"+a+"r"+r.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return Jn().memoizedState=xM.bind(null,de)}};Vr.useMemoCache=lh,Vr.useHostTransitionStatus=gh,Vr.useFormState=ug,Vr.useActionState=ug,Vr.useOptimistic=function(n){var a=Jn();a.memoizedState=a.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=vh.bind(null,de,!0,r),r.dispatch=a,[n,a]};var Ka={readContext:Nn,use:Bu,useCallback:xg,useContext:Nn,useEffect:dh,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:_g,useMemo:yg,useReducer:Fu,useRef:dg,useState:function(){return Fu(_a)},useDebugValue:ph,useDeferredValue:function(n,a){var r=un();return Sg(r,ze.memoizedState,n,a)},useTransition:function(){var n=Fu(_a)[0],a=un().memoizedState;return[typeof n=="boolean"?n:dl(n),a]},useSyncExternalStore:Q_,useId:bg};Ka.useCacheRefresh=Ag,Ka.useMemoCache=lh,Ka.useHostTransitionStatus=gh,Ka.useFormState=cg,Ka.useActionState=cg,Ka.useOptimistic=function(n,a){var r=un();return ig(r,ze,n,a)};var kr={readContext:Nn,use:Bu,useCallback:xg,useContext:Nn,useEffect:dh,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:_g,useMemo:yg,useReducer:ch,useRef:dg,useState:function(){return ch(_a)},useDebugValue:ph,useDeferredValue:function(n,a){var r=un();return ze===null?mh(r,n,a):Sg(r,ze.memoizedState,n,a)},useTransition:function(){var n=ch(_a)[0],a=un().memoizedState;return[typeof n=="boolean"?n:dl(n),a]},useSyncExternalStore:Q_,useId:bg};kr.useCacheRefresh=Ag,kr.useMemoCache=lh,kr.useHostTransitionStatus=gh,kr.useFormState=hg,kr.useActionState=hg,kr.useOptimistic=function(n,a){var r=un();return ze!==null?ig(r,ze,n,a):(r.baseState=n,[n,r.queue.dispatch])};function xh(n,a,r,u){a=n.memoizedState,r=r(u,a),r=r==null?a:A({},a,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var yh={isMounted:function(n){return(n=n._reactInternals)?W(n)===n:!1},enqueueSetState:function(n,a,r){n=n._reactInternals;var u=di(),h=$a(u);h.payload=a,r!=null&&(h.callback=r),a=tr(n,h,u),a!==null&&(Wn(a,n,u),gl(a,n,u))},enqueueReplaceState:function(n,a,r){n=n._reactInternals;var u=di(),h=$a(u);h.tag=1,h.payload=a,r!=null&&(h.callback=r),a=tr(n,h,u),a!==null&&(Wn(a,n,u),gl(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var r=di(),u=$a(r);u.tag=2,a!=null&&(u.callback=a),a=tr(n,u,r),a!==null&&(Wn(a,n,r),gl(a,n,r))}};function Dg(n,a,r,u,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):a.prototype&&a.prototype.isPureReactComponent?!el(r,u)||!el(h,m):!0}function Ug(n,a,r,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,u),a.state!==n&&yh.enqueueReplaceState(a,a.state,null)}function Xr(n,a){var r=a;if("ref"in a){r={};for(var u in a)u!=="ref"&&(r[u]=a[u])}if(n=n.defaultProps){r===a&&(r=A({},r));for(var h in n)r[h]===void 0&&(r[h]=n[h])}return r}var ku=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Lg(n){ku(n)}function Og(n){console.error(n)}function Ng(n){ku(n)}function Xu(n,a){try{var r=n.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function Pg(n,a,r){try{var u=n.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sh(n,a,r){return r=$a(r),r.tag=3,r.payload={element:null},r.callback=function(){Xu(n,a)},r}function zg(n){return n=$a(n),n.tag=3,n}function Ig(n,a,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;n.payload=function(){return h(m)},n.callback=function(){Pg(a,r,u)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Pg(a,r,u),typeof h!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function SM(n,a,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=r.alternate,a!==null&&_l(a,r,h,!0),r=Ai.current,r!==null){switch(r.tag){case 13:return Qi===null?nd():r.alternate===null&&Je===0&&(Je=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Qf?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([u]):a.add(u),ad(n,u,h)),!1;case 22:return r.flags|=65536,u===Qf?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([u]):r.add(u)),ad(n,u,h)),!1}throw Error(i(435,r.tag))}return ad(n,u,h),nd(),!1}if(Ue)return a=Ai.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,u!==Kf&&(n=Error(i(422),{cause:u}),rl(Ei(n,r)))):(u!==Kf&&(a=Error(i(423),{cause:u}),rl(Ei(a,r))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=Ei(u,r),h=Sh(n.stateNode,u,h),zh(n,h),Je!==4&&(Je=2)),!1;var m=Error(i(520),{cause:u});if(m=Ei(m,r),bl===null?bl=[m]:bl.push(m),Je!==4&&(Je=2),a===null)return!0;u=Ei(u,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,n=h&-h,r.lanes|=n,n=Sh(r.stateNode,u,n),zh(r,n),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sr===null||!sr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=zg(h),Ig(h,n,r,u),zh(r,h),!1}r=r.return}while(r!==null);return!1}var Bg=Error(i(461)),En=!1;function Dn(n,a,r,u){a.child=n===null?k_(a,null,r,u):Fr(a,n.child,r,u)}function Fg(n,a,r,u,h){r=r.render;var m=a.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return qr(a),u=ah(n,a,r,E,m,h),w=rh(),n!==null&&!En?(sh(n,a,h),ga(n,a,h)):(Ue&&w&&jf(a),a.flags|=1,Dn(n,a,u,h),a.child)}function Hg(n,a,r,u,h){if(n===null){var m=r.type;return typeof m=="function"&&!Xh(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,Gg(n,a,m,u,h)):(n=Zu(r.type,null,u,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!Dh(n,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:el,r(E,u)&&n.ref===a.ref)return ga(n,a,h)}return a.flags|=1,n=ar(m,u),n.ref=a.ref,n.return=a,a.child=n}function Gg(n,a,r,u,h){if(n!==null){var m=n.memoizedProps;if(el(m,u)&&n.ref===a.ref)if(En=!1,a.pendingProps=u=m,Dh(n,h))(n.flags&131072)!==0&&(En=!0);else return a.lanes=n.lanes,ga(n,a,h)}return Mh(n,a,r,u,h)}function Vg(n,a,r){var u=a.pendingProps,h=u.children,m=(a.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(ml(n,a),u.mode==="hidden"||m){if((a.flags&128)!==0){if(u=E!==null?E.baseLanes|r:r,n!==null){for(h=a.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;a.childLanes=m&~u}else a.childLanes=0,a.child=null;return kg(n,a,u,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nu(a,E!==null?E.cachePool:null),E!==null?X_(a,E):Jf(),W_(a);else return a.lanes=a.childLanes=536870912,kg(n,a,E!==null?E.baseLanes|r:r,r)}else E!==null?(Nu(a,E.cachePool),X_(a,E),ja(),a.memoizedState=null):(n!==null&&Nu(a,null),Jf(),ja());return Dn(n,a,h,r),a.child}function kg(n,a,r,u){var h=nh();return h=h===null?null:{parent:xn._currentValue,pool:h},a.memoizedState={baseLanes:r,cachePool:h},n!==null&&Nu(a,null),Jf(),W_(a),n!==null&&_l(n,a,u,!0),null}function ml(n,a){var r=a.ref;if(r===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(i(284));(n===null||n.ref!==r)&&(a.flags|=2097664)}}function Mh(n,a,r,u,h){return qr(a),r=ah(n,a,r,u,void 0,h),u=rh(),n!==null&&!En?(sh(n,a,h),ga(n,a,h)):(Ue&&u&&jf(a),a.flags|=1,Dn(n,a,r,h),a.child)}function Xg(n,a,r,u,h,m){return qr(a),a.updateQueue=null,r=K_(a,u,r,h),Z_(n),u=rh(),n!==null&&!En?(sh(n,a,m),ga(n,a,m)):(Ue&&u&&jf(a),a.flags|=1,Dn(n,a,r,m),a.child)}function Wg(n,a,r,u,h){if(qr(a),a.stateNode===null){var m=Ns,E=r.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new r(u,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=u,m.state=a.memoizedState,m.refs={},Nh(a),E=r.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):Ns,m.state=a.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(xh(a,r,E,u),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&yh.enqueueReplaceState(m,m.state,null),xl(a,u,m,h),vl(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){m=a.stateNode;var w=a.memoizedProps,B=Xr(r,w);m.props=B;var j=m.context,mt=r.contextType;E=Ns,typeof mt=="object"&&mt!==null&&(E=Nn(mt));var yt=r.getDerivedStateFromProps;mt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||j!==E)&&Ug(a,m,u,E),Ja=!1;var ot=a.memoizedState;m.state=ot,xl(a,u,m,h),vl(),j=a.memoizedState,w||ot!==j||Ja?(typeof yt=="function"&&(xh(a,r,yt,u),j=a.memoizedState),(B=Ja||Dg(a,r,B,u,ot,j,E))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=j),m.props=u,m.state=j,m.context=E,u=B):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{m=a.stateNode,Ph(n,a),E=a.memoizedProps,mt=Xr(r,E),m.props=mt,yt=a.pendingProps,ot=m.context,j=r.contextType,B=Ns,typeof j=="object"&&j!==null&&(B=Nn(j)),w=r.getDerivedStateFromProps,(j=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==yt||ot!==B)&&Ug(a,m,u,B),Ja=!1,ot=a.memoizedState,m.state=ot,xl(a,u,m,h),vl();var ht=a.memoizedState;E!==yt||ot!==ht||Ja||n!==null&&n.dependencies!==null&&Wu(n.dependencies)?(typeof w=="function"&&(xh(a,r,w,u),ht=a.memoizedState),(mt=Ja||Dg(a,r,mt,u,ot,ht,B)||n!==null&&n.dependencies!==null&&Wu(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ht,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ht,B)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=ht),m.props=u,m.state=ht,m.context=B,u=mt):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),u=!1)}return m=u,ml(n,a),u=(a.flags&128)!==0,m||u?(m=a.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&u?(a.child=Fr(a,n.child,null,h),a.child=Fr(a,null,r,h)):Dn(n,a,r,h),a.memoizedState=m.state,n=a.child):n=ga(n,a,h),n}function qg(n,a,r,u){return al(),a.flags|=256,Dn(n,a,r,u),a.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:j_()}}function bh(n,a,r){return n=n!==null?n.childLanes&~r:0,a&&(n|=Di),n}function Yg(n,a,r){var u=a.pendingProps,h=!1,m=(a.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),E&&(h=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ue){if(h?Ya(a):ja(),Ue){var w=wn,B;if(B=w){t:{for(B=w,w=Ki;B.nodeType!==8;){if(!w){w=null;break t}if(B=Hi(B.nextSibling),B===null){w=null;break t}}w=B}w!==null?(a.memoizedState={dehydrated:w,treeContext:zr!==null?{id:da,overflow:pa}:null,retryLane:536870912},B=wi(18,null,null,0),B.stateNode=w,B.return=a,a.child=B,Xn=a,wn=null,B=!0):B=!1}B||Br(a)}if(w=a.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?a.lanes=16:a.lanes=536870912,null;ma(a)}return w=u.children,u=u.fallback,h?(ja(),h=a.mode,w=Rh({mode:"hidden",children:w},h),u=jr(u,h,r,null),w.return=a,u.return=a,w.sibling=u,a.child=w,h=a.child,h.memoizedState=Th(r),h.childLanes=bh(n,E,r),a.memoizedState=Eh,u):(Ya(a),Ah(a,w))}if(B=n.memoizedState,B!==null&&(w=B.dehydrated,w!==null)){if(m)a.flags&256?(Ya(a),a.flags&=-257,a=Ch(n,a,r)):a.memoizedState!==null?(ja(),a.child=n.child,a.flags|=128,a=null):(ja(),h=u.fallback,w=a.mode,u=Rh({mode:"visible",children:u.children},w),h=jr(h,w,r,null),h.flags|=2,u.return=a,h.return=a,u.sibling=h,a.child=u,Fr(a,n.child,null,r),u=a.child,u.memoizedState=Th(r),u.childLanes=bh(n,E,r),a.memoizedState=Eh,a=h);else if(Ya(a),w.data==="$!"){if(E=w.nextSibling&&w.nextSibling.dataset,E)var j=E.dgst;E=j,u=Error(i(419)),u.stack="",u.digest=E,rl({value:u,source:null,stack:null}),a=Ch(n,a,r)}else if(En||_l(n,a,r,!1),E=(r&n.childLanes)!==0,En||E){if(E=Ge,E!==null){if(u=r&-r,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(E.suspendedLanes|r))!==0?0:u,u!==0&&u!==B.retryLane)throw B.retryLane=u,qa(n,u),Wn(E,n,u),Bg}w.data==="$?"||nd(),a=Ch(n,a,r)}else w.data==="$?"?(a.flags|=128,a.child=n.child,a=zM.bind(null,n),w._reactRetry=a,a=null):(n=B.treeContext,wn=Hi(w.nextSibling),Xn=a,Ue=!0,Bi=null,Ki=!1,n!==null&&(Ti[bi++]=da,Ti[bi++]=pa,Ti[bi++]=zr,da=n.id,pa=n.overflow,zr=a),a=Ah(a,u.children),a.flags|=4096);return a}return h?(ja(),h=u.fallback,w=a.mode,B=n.child,j=B.sibling,u=ar(B,{mode:"hidden",children:u.children}),u.subtreeFlags=B.subtreeFlags&31457280,j!==null?h=ar(j,h):(h=jr(h,w,r,null),h.flags|=2),h.return=a,u.return=a,u.sibling=h,a.child=u,u=h,h=a.child,w=n.child.memoizedState,w===null?w=Th(r):(B=w.cachePool,B!==null?(j=xn._currentValue,B=B.parent!==j?{parent:j,pool:j}:B):B=j_(),w={baseLanes:w.baseLanes|r,cachePool:B}),h.memoizedState=w,h.childLanes=bh(n,E,r),a.memoizedState=Eh,u):(Ya(a),r=n.child,n=r.sibling,r=ar(r,{mode:"visible",children:u.children}),r.return=a,r.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=r,a.memoizedState=null,r)}function Ah(n,a){return a=Rh({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Rh(n,a){return x0(n,a,0,null)}function Ch(n,a,r){return Fr(a,n.child,null,r),n=Ah(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function jg(n,a,r){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),Lh(n.return,a,r)}function wh(n,a,r,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=r,m.tailMode=h)}function Zg(n,a,r){var u=a.pendingProps,h=u.revealOrder,m=u.tail;if(Dn(n,a,u.children,r),u=vn.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jg(n,r,a);else if(n.tag===19)jg(n,r,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(zt(vn,u),h){case"forwards":for(r=a.child,h=null;r!==null;)n=r.alternate,n!==null&&Ou(n)===null&&(h=r),r=r.sibling;r=h,r===null?(h=a.child,a.child=null):(h=r.sibling,r.sibling=null),wh(a,!1,h,r,m);break;case"backwards":for(r=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&Ou(n)===null){a.child=h;break}n=h.sibling,h.sibling=r,r=h,h=n}wh(a,!0,r,null,m);break;case"together":wh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ga(n,a,r){if(n!==null&&(a.dependencies=n.dependencies),rr|=a.lanes,(r&a.childLanes)===0)if(n!==null){if(_l(n,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,r=ar(n,n.pendingProps),a.child=r,r.return=a;n.sibling!==null;)n=n.sibling,r=r.sibling=ar(n,n.pendingProps),r.return=a;r.sibling=null}return a.child}function Dh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Wu(n)))}function MM(n,a,r){switch(a.tag){case 3:pn(a,a.stateNode.containerInfo),Qa(a,xn,n.memoizedState.cache),al();break;case 27:case 5:le(a);break;case 4:pn(a,a.stateNode.containerInfo);break;case 10:Qa(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(Ya(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Yg(n,a,r):(Ya(a),n=ga(n,a,r),n!==null?n.sibling:null);Ya(a);break;case 19:var h=(n.flags&128)!==0;if(u=(r&a.childLanes)!==0,u||(_l(n,a,r,!1),u=(r&a.childLanes)!==0),h){if(u)return Zg(n,a,r);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),zt(vn,vn.current),u)break;return null;case 22:case 23:return a.lanes=0,Vg(n,a,r);case 24:Qa(a,xn,n.memoizedState.cache)}return ga(n,a,r)}function Kg(n,a,r){if(n!==null)if(n.memoizedProps!==a.pendingProps)En=!0;else{if(!Dh(n,r)&&(a.flags&128)===0)return En=!1,MM(n,a,r);En=(n.flags&131072)!==0}else En=!1,Ue&&(a.flags&1048576)!==0&&N_(a,Cu,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var u=a.elementType,h=u._init;if(u=h(u._payload),a.type=u,typeof u=="function")Xh(u)?(n=Xr(u,n),a.tag=1,a=Wg(null,a,u,n,r)):(a.tag=0,a=Mh(null,a,u,n,r));else{if(u!=null){if(h=u.$$typeof,h===T){a.tag=11,a=Fg(null,a,u,n,r);break t}else if(h===x){a.tag=14,a=Hg(null,a,u,n,r);break t}}throw a=F(u)||u,Error(i(306,a,""))}}return a;case 0:return Mh(n,a,a.type,a.pendingProps,r);case 1:return u=a.type,h=Xr(u,a.pendingProps),Wg(n,a,u,h,r);case 3:t:{if(pn(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var m=a.pendingProps;h=a.memoizedState,u=h.element,Ph(n,a),xl(a,m,null,r);var E=a.memoizedState;if(m=E.cache,Qa(a,xn,m),m!==h.cache&&Oh(a,[xn],r,!0),vl(),m=E.element,h.isDehydrated)if(h={element:m,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=h,a.memoizedState=h,a.flags&256){a=qg(n,a,m,r);break t}else if(m!==u){u=Ei(Error(i(424)),a),rl(u),a=qg(n,a,m,r);break t}else for(wn=Hi(a.stateNode.containerInfo.firstChild),Xn=a,Ue=!0,Bi=null,Ki=!0,r=k_(a,null,m,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(al(),m===u){a=ga(n,a,r);break t}Dn(n,a,m,r)}a=a.child}return a;case 26:return ml(n,a),n===null?(r=$0(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ue||(r=a.type,n=a.pendingProps,u=oc(ae.current).createElement(r),u[mn]=a,u[_n]=n,Un(u,r,n),tt(u),a.stateNode=u):a.memoizedState=$0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return le(a),n===null&&Ue&&(u=a.stateNode=K0(a.type,a.pendingProps,ae.current),Xn=a,Ki=!0,wn=Hi(u.firstChild)),u=a.pendingProps.children,n!==null||Ue?Dn(n,a,u,r):a.child=Fr(a,null,u,r),ml(n,a),a.child;case 5:return n===null&&Ue&&((h=u=wn)&&(u=JM(u,a.type,a.pendingProps,Ki),u!==null?(a.stateNode=u,Xn=a,wn=Hi(u.firstChild),Ki=!1,h=!0):h=!1),h||Br(a)),le(a),h=a.type,m=a.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,_d(h,m)?u=null:E!==null&&_d(h,E)&&(a.flags|=32),a.memoizedState!==null&&(h=ah(n,a,mM,null,null,r),Nl._currentValue=h),ml(n,a),Dn(n,a,u,r),a.child;case 6:return n===null&&Ue&&((n=r=wn)&&(r=$M(r,a.pendingProps,Ki),r!==null?(a.stateNode=r,Xn=a,wn=null,n=!0):n=!1),n||Br(a)),null;case 13:return Yg(n,a,r);case 4:return pn(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=Fr(a,null,u,r):Dn(n,a,u,r),a.child;case 11:return Fg(n,a,a.type,a.pendingProps,r);case 7:return Dn(n,a,a.pendingProps,r),a.child;case 8:return Dn(n,a,a.pendingProps.children,r),a.child;case 12:return Dn(n,a,a.pendingProps.children,r),a.child;case 10:return u=a.pendingProps,Qa(a,a.type,u.value),Dn(n,a,u.children,r),a.child;case 9:return h=a.type._context,u=a.pendingProps.children,qr(a),h=Nn(h),u=u(h),a.flags|=1,Dn(n,a,u,r),a.child;case 14:return Hg(n,a,a.type,a.pendingProps,r);case 15:return Gg(n,a,a.type,a.pendingProps,r);case 19:return Zg(n,a,r);case 22:return Vg(n,a,r);case 24:return qr(a),u=Nn(xn),n===null?(h=nh(),h===null&&(h=Ge,m=th(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),a.memoizedState={parent:u,cache:h},Nh(a),Qa(a,xn,h)):((n.lanes&r)!==0&&(Ph(n,a),xl(a,null,null,r),vl()),h=n.memoizedState,m=a.memoizedState,h.parent!==u?(h={parent:u,cache:u},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Qa(a,xn,u)):(u=m.cache,Qa(a,xn,u),u!==h.cache&&Oh(a,[xn],r,!0))),Dn(n,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var Uh=wt(null),Wr=null,va=null;function Qa(n,a,r){zt(Uh,a._currentValue),a._currentValue=r}function xa(n){n._currentValue=Uh.current,Jt(Uh)}function Lh(n,a,r){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===r)break;n=n.return}}function Oh(n,a,r,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=h;for(var B=0;B<a.length;B++)if(w.context===a[B]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),Lh(m.return,r,n),u||(E=null);break t}m=w.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(i(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),Lh(E,r,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function _l(n,a,r,u){n=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var w=h.type;ui(h.pendingProps.value,E.value)||(n!==null?n.push(w):n=[w])}}else if(h===V.current){if(E=h.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Nl):n=[Nl])}h=h.return}n!==null&&Oh(a,n,r,u),a.flags|=262144}function Wu(n){for(n=n.firstContext;n!==null;){if(!ui(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qr(n){Wr=n,va=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Nn(n){return Qg(Wr,n)}function qu(n,a){return Wr===null&&qr(n),Qg(n,a)}function Qg(n,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},va===null){if(n===null)throw Error(i(308));va=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else va=va.next=a;return r}var Ja=!1;function Nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ph(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function $a(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function tr(n,a,r){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var h=u.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a,a=Au(n),L_(n,null,r),a}return bu(n,u,a,r),Au(n)}function gl(n,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194176)!==0)){var u=a.lanes;u&=n.pendingLanes,r|=u,a.lanes=r,Zi(n,r)}}function zh(n,a){var r=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=a:m=m.next=a}else h=m=a;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=a:n.next=a,r.lastBaseUpdate=a}var Ih=!1;function vl(){if(Ih){var n=Hs;if(n!==null)throw n}}function xl(n,a,r,u){Ih=!1;var h=n.updateQueue;Ja=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var B=w,j=B.next;B.next=null,E===null?m=j:E.next=j,E=B;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==E&&(w===null?mt.firstBaseUpdate=j:w.next=j,mt.lastBaseUpdate=B))}if(m!==null){var yt=h.baseState;E=0,mt=j=B=null,w=m;do{var ot=w.lane&-536870913,ht=ot!==w.lane;if(ht?(Ae&ot)===ot:(u&ot)===ot){ot!==0&&ot===Fs&&(Ih=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Yt=n,se=w;ot=a;var $e=r;switch(se.tag){case 1:if(Yt=se.payload,typeof Yt=="function"){yt=Yt.call($e,yt,ot);break t}yt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=se.payload,ot=typeof Yt=="function"?Yt.call($e,yt,ot):Yt,ot==null)break t;yt=A({},yt,ot);break t;case 2:Ja=!0}}ot=w.callback,ot!==null&&(n.flags|=64,ht&&(n.flags|=8192),ht=h.callbacks,ht===null?h.callbacks=[ot]:ht.push(ot))}else ht={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(j=mt=ht,B=yt):mt=mt.next=ht,E|=ot;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,h.lastBaseUpdate=ht,h.shared.pending=null}}while(!0);mt===null&&(B=yt),h.baseState=B,h.firstBaseUpdate=j,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),rr|=E,n.lanes=E,n.memoizedState=yt}}function Jg(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function $g(n,a){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)Jg(r[n],a)}function yl(n,a){try{var r=a.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&n)===n){u=void 0;var m=r.create,E=r.inst;u=m(),E.destroy=u}r=r.next}while(r!==h)}}catch(w){Fe(a,a.return,w)}}function er(n,a,r){try{var u=a.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&n)===n){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,h=a;var B=r;try{w()}catch(j){Fe(h,B,j)}}}u=u.next}while(u!==m)}}catch(j){Fe(a,a.return,j)}}function t0(n){var a=n.updateQueue;if(a!==null){var r=n.stateNode;try{$g(a,r)}catch(u){Fe(n,n.return,u)}}}function e0(n,a,r){r.props=Xr(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(u){Fe(n,a,u)}}function Yr(n,a){try{var r=n.ref;if(r!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var h=u;break;default:h=u}typeof r=="function"?n.refCleanup=r(h):r.current=h}}catch(m){Fe(n,a,m)}}function ci(n,a){var r=n.ref,u=n.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Fe(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Fe(n,a,h)}else r.current=null}function n0(n){var a=n.type,r=n.memoizedProps,u=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Fe(n,n.return,h)}}function i0(n,a,r){try{var u=n.stateNode;YM(u,n.type,r,a),u[_n]=a}catch(h){Fe(n,n.return,h)}}function a0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Bh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||a0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,a,r){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(n,a):r.insertBefore(n,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(n,r)):(a=r,a.appendChild(n)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=sc));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(Fh(n,a,r),n=n.sibling;n!==null;)Fh(n,a,r),n=n.sibling}function Yu(n,a,r){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?r.insertBefore(n,a):r.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(Yu(n,a,r),n=n.sibling;n!==null;)Yu(n,a,r),n=n.sibling}var ya=!1,Qe=!1,Hh=!1,r0=typeof WeakSet=="function"?WeakSet:Set,Tn=null,s0=!1;function EM(n,a){if(n=n.containerInfo,pd=dc,n=E_(n),Vf(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else t:{r=(r=n.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,w=-1,B=-1,j=0,mt=0,yt=n,ot=null;e:for(;;){for(var ht;yt!==r||h!==0&&yt.nodeType!==3||(w=E+h),yt!==m||u!==0&&yt.nodeType!==3||(B=E+u),yt.nodeType===3&&(E+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ot=yt,yt=ht;for(;;){if(yt===n)break e;if(ot===r&&++j===h&&(w=E),ot===m&&++mt===u&&(B=E),(ht=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ht}r=w===-1||B===-1?null:{start:w,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(md={focusedElem:n,selectionRange:r},dc=!1,Tn=a;Tn!==null;)if(a=Tn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Tn=n;else for(;Tn!==null;){switch(a=Tn,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,r=a,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var Yt=Xr(r.type,h,r.elementType===r.type);n=u.getSnapshotBeforeUpdate(Yt,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(se){Fe(r,r.return,se)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,r=n.nodeType,r===9)xd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":xd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Tn=n;break}Tn=a.return}return Yt=s0,s0=!1,Yt}function o0(n,a,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ma(n,r),u&4&&yl(5,r);break;case 1:if(Ma(n,r),u&4)if(n=r.stateNode,a===null)try{n.componentDidMount()}catch(w){Fe(r,r.return,w)}else{var h=Xr(r.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Fe(r,r.return,w)}}u&64&&t0(r),u&512&&Yr(r,r.return);break;case 3:if(Ma(n,r),u&64&&(u=r.updateQueue,u!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{$g(u,n)}catch(w){Fe(r,r.return,w)}}break;case 26:Ma(n,r),u&512&&Yr(r,r.return);break;case 27:case 5:Ma(n,r),a===null&&u&4&&n0(r),u&512&&Yr(r,r.return);break;case 12:Ma(n,r);break;case 13:Ma(n,r),u&4&&c0(n,r);break;case 22:if(h=r.memoizedState!==null||ya,!h){a=a!==null&&a.memoizedState!==null||Qe;var m=ya,E=Qe;ya=h,(Qe=a)&&!E?nr(n,r,(r.subtreeFlags&8772)!==0):Ma(n,r),ya=m,Qe=E}u&512&&(r.memoizedProps.mode==="manual"?Yr(r,r.return):ci(r,r.return));break;default:Ma(n,r)}}function l0(n){var a=n.alternate;a!==null&&(n.alternate=null,l0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Yo(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var cn=null,fi=!1;function Sa(n,a,r){for(r=r.child;r!==null;)u0(n,a,r),r=r.sibling}function u0(n,a,r){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Kt,r)}catch{}switch(r.tag){case 26:Qe||ci(r,a),Sa(n,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Qe||ci(r,a);var u=cn,h=fi;for(cn=r.stateNode,Sa(n,a,r),r=r.stateNode,a=r.attributes;a.length;)r.removeAttributeNode(a[0]);Yo(r),cn=u,fi=h;break;case 5:Qe||ci(r,a);case 6:h=cn;var m=fi;if(cn=null,Sa(n,a,r),cn=h,fi=m,cn!==null)if(fi)try{n=cn,u=r.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(E){Fe(r,a,E)}else try{cn.removeChild(r.stateNode)}catch(E){Fe(r,a,E)}break;case 18:cn!==null&&(fi?(a=cn,r=r.stateNode,a.nodeType===8?vd(a.parentNode,r):a.nodeType===1&&vd(a,r),Bl(a)):vd(cn,r.stateNode));break;case 4:u=cn,h=fi,cn=r.stateNode.containerInfo,fi=!0,Sa(n,a,r),cn=u,fi=h;break;case 0:case 11:case 14:case 15:Qe||er(2,r,a),Qe||er(4,r,a),Sa(n,a,r);break;case 1:Qe||(ci(r,a),u=r.stateNode,typeof u.componentWillUnmount=="function"&&e0(r,a,u)),Sa(n,a,r);break;case 21:Sa(n,a,r);break;case 22:Qe||ci(r,a),Qe=(u=Qe)||r.memoizedState!==null,Sa(n,a,r),Qe=u;break;default:Sa(n,a,r)}}function c0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Bl(n)}catch(r){Fe(a,a.return,r)}}function TM(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new r0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new r0),a;default:throw Error(i(435,n.tag))}}function Gh(n,a){var r=TM(n);a.forEach(function(u){var h=IM.bind(null,n,u);r.has(u)||(r.add(u),u.then(h,h))})}function Ri(n,a){var r=a.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=n,E=a,w=E;t:for(;w!==null;){switch(w.tag){case 27:case 5:cn=w.stateNode,fi=!1;break t;case 3:cn=w.stateNode.containerInfo,fi=!0;break t;case 4:cn=w.stateNode.containerInfo,fi=!0;break t}w=w.return}if(cn===null)throw Error(i(160));u0(m,E,h),cn=null,fi=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)f0(a,n),a=a.sibling}var Fi=null;function f0(n,a){var r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ri(a,n),Ci(n),u&4&&(er(3,n,n.return),yl(3,n),er(5,n,n.return));break;case 1:Ri(a,n),Ci(n),u&512&&(Qe||r===null||ci(r,r.return)),u&64&&ya&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Fi;if(Ri(a,n),Ci(n),u&512&&(Qe||r===null||ci(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=n.memoizedState,r===null)if(u===null)if(n.stateNode===null){t:{u=n.type,r=n.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Lr]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Un(m,u,r),m[mn]=n,tt(m),u=m;break t;case"link":var E=nv("link","href",h).get(u+(r.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(r.href==null?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(w,1);break e}}m=h.createElement(u),Un(m,u,r),h.head.appendChild(m);break;case"meta":if(E=nv("meta","content",h).get(u+(r.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(w,1);break e}}m=h.createElement(u),Un(m,u,r),h.head.appendChild(m);break;default:throw Error(i(468,u))}m[mn]=n,tt(m),u=m}n.stateNode=u}else iv(h,n.type,n.stateNode);else n.stateNode=ev(h,u,n.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?iv(h,n.type,n.stateNode):ev(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&i0(n,n.memoizedProps,r.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){h=n.stateNode,m=n.memoizedProps;try{for(var B=h.firstChild;B;){var j=B.nextSibling,mt=B.nodeName;B[Lr]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||h.removeChild(B),B=j}for(var yt=n.type,ot=h.attributes;ot.length;)h.removeAttributeNode(ot[0]);Un(h,yt,m),h[mn]=n,h[_n]=m}catch(Yt){Fe(n,n.return,Yt)}}case 5:if(Ri(a,n),Ci(n),u&512&&(Qe||r===null||ci(r,r.return)),n.flags&32){h=n.stateNode;try{Kn(h,"")}catch(Yt){Fe(n,n.return,Yt)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,i0(n,h,r!==null?r.memoizedProps:h)),u&1024&&(Hh=!0);break;case 6:if(Ri(a,n),Ci(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,r=n.stateNode;try{r.nodeValue=u}catch(Yt){Fe(n,n.return,Yt)}}break;case 3:if(cc=null,h=Fi,Fi=lc(a.containerInfo),Ri(a,n),Fi=h,Ci(n),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Bl(a.containerInfo)}catch(Yt){Fe(n,n.return,Yt)}Hh&&(Hh=!1,h0(n));break;case 4:u=Fi,Fi=lc(n.stateNode.containerInfo),Ri(a,n),Ci(n),Fi=u;break;case 12:Ri(a,n),Ci(n);break;case 13:Ri(a,n),Ci(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Kh=pt()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Gh(n,u)));break;case 22:if(u&512&&(Qe||r===null||ci(r,r.return)),B=n.memoizedState!==null,j=r!==null&&r.memoizedState!==null,mt=ya,yt=Qe,ya=mt||B,Qe=yt||j,Ri(a,n),Qe=yt,ya=mt,Ci(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,u&8192&&(a._visibility=B?a._visibility&-2:a._visibility|1,B&&(a=ya||Qe,r===null||j||a||Xs(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(r=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(r===null){j=r=a;try{if(h=j.stateNode,B)m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{E=j.stateNode,w=j.memoizedProps.style;var ht=w!=null&&w.hasOwnProperty("display")?w.display:null;E.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(Yt){Fe(j,j.return,Yt)}}}else if(a.tag===6){if(r===null){j=a;try{j.stateNode.nodeValue=B?"":j.memoizedProps}catch(Yt){Fe(j,j.return,Yt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,Gh(n,r))));break;case 19:Ri(a,n),Ci(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Gh(n,u)));break;case 21:break;default:Ri(a,n),Ci(n)}}function Ci(n){var a=n.flags;if(a&2){try{if(n.tag!==27){t:{for(var r=n.return;r!==null;){if(a0(r)){var u=r;break t}r=r.return}throw Error(i(160))}switch(u.tag){case 27:var h=u.stateNode,m=Bh(n);Yu(n,m,h);break;case 5:var E=u.stateNode;u.flags&32&&(Kn(E,""),u.flags&=-33);var w=Bh(n);Yu(n,w,E);break;case 3:case 4:var B=u.stateNode.containerInfo,j=Bh(n);Fh(n,j,B);break;default:throw Error(i(161))}}}catch(mt){Fe(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function h0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;h0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ma(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)o0(n,a.alternate,a),a=a.sibling}function Xs(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:er(4,a,a.return),Xs(a);break;case 1:ci(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&e0(a,a.return,r),Xs(a);break;case 26:case 27:case 5:ci(a,a.return),Xs(a);break;case 22:ci(a,a.return),a.memoizedState===null&&Xs(a);break;default:Xs(a)}n=n.sibling}}function nr(n,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,h=n,m=a,E=m.flags;switch(m.tag){case 0:case 11:case 15:nr(h,m,r),yl(4,m);break;case 1:if(nr(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){Fe(u,u.return,j)}if(u=m,h=u.updateQueue,h!==null){var w=u.stateNode;try{var B=h.shared.hiddenCallbacks;if(B!==null)for(h.shared.hiddenCallbacks=null,h=0;h<B.length;h++)Jg(B[h],w)}catch(j){Fe(u,u.return,j)}}r&&E&64&&t0(m),Yr(m,m.return);break;case 26:case 27:case 5:nr(h,m,r),r&&u===null&&E&4&&n0(m),Yr(m,m.return);break;case 12:nr(h,m,r);break;case 13:nr(h,m,r),r&&E&4&&c0(h,m);break;case 22:m.memoizedState===null&&nr(h,m,r),Yr(m,m.return);break;default:nr(h,m,r)}a=a.sibling}}function Vh(n,a){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&cl(r))}function kh(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&cl(n))}function ir(n,a,r,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)d0(n,a,r,u),a=a.sibling}function d0(n,a,r,u){var h=a.flags;switch(a.tag){case 0:case 11:case 15:ir(n,a,r,u),h&2048&&yl(9,a);break;case 3:ir(n,a,r,u),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&cl(n)));break;case 12:if(h&2048){ir(n,a,r,u),n=a.stateNode;try{var m=a.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(B){Fe(a,a.return,B)}}else ir(n,a,r,u);break;case 23:break;case 22:m=a.stateNode,a.memoizedState!==null?m._visibility&4?ir(n,a,r,u):Sl(n,a):m._visibility&4?ir(n,a,r,u):(m._visibility|=4,Ws(n,a,r,u,(a.subtreeFlags&10256)!==0)),h&2048&&Vh(a.alternate,a);break;case 24:ir(n,a,r,u),h&2048&&kh(a.alternate,a);break;default:ir(n,a,r,u)}}function Ws(n,a,r,u,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,E=a,w=r,B=u,j=E.flags;switch(E.tag){case 0:case 11:case 15:Ws(m,E,w,B,h),yl(8,E);break;case 23:break;case 22:var mt=E.stateNode;E.memoizedState!==null?mt._visibility&4?Ws(m,E,w,B,h):Sl(m,E):(mt._visibility|=4,Ws(m,E,w,B,h)),h&&j&2048&&Vh(E.alternate,E);break;case 24:Ws(m,E,w,B,h),h&&j&2048&&kh(E.alternate,E);break;default:Ws(m,E,w,B,h)}a=a.sibling}}function Sl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=n,u=a,h=u.flags;switch(u.tag){case 22:Sl(r,u),h&2048&&Vh(u.alternate,u);break;case 24:Sl(r,u),h&2048&&kh(u.alternate,u);break;default:Sl(r,u)}a=a.sibling}}var Ml=8192;function qs(n){if(n.subtreeFlags&Ml)for(n=n.child;n!==null;)p0(n),n=n.sibling}function p0(n){switch(n.tag){case 26:qs(n),n.flags&Ml&&n.memoizedState!==null&&hE(Fi,n.memoizedState,n.memoizedProps);break;case 5:qs(n);break;case 3:case 4:var a=Fi;Fi=lc(n.stateNode.containerInfo),qs(n),Fi=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ml,Ml=16777216,qs(n),Ml=a):qs(n));break;default:qs(n)}}function m0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function El(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];Tn=u,g0(u,n)}m0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(n),n=n.sibling}function _0(n){switch(n.tag){case 0:case 11:case 15:El(n),n.flags&2048&&er(9,n,n.return);break;case 3:El(n);break;case 12:El(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,ju(n)):El(n);break;default:El(n)}}function ju(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];Tn=u,g0(u,n)}m0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:er(8,a,a.return),ju(a);break;case 22:r=a.stateNode,r._visibility&4&&(r._visibility&=-5,ju(a));break;default:ju(a)}n=n.sibling}}function g0(n,a){for(;Tn!==null;){var r=Tn;switch(r.tag){case 0:case 11:case 15:er(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:cl(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,Tn=u;else t:for(r=n;Tn!==null;){u=Tn;var h=u.sibling,m=u.return;if(l0(u),u===r){Tn=null;break t}if(h!==null){h.return=m,Tn=h;break t}Tn=m}}}function bM(n,a,r,u){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,a,r,u){return new bM(n,a,r,u)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ar(n,a){var r=n.alternate;return r===null?(r=wi(n.tag,a,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=a,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&31457280,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,a=n.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function v0(n,a){n.flags&=31457282;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,a=r.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Zu(n,a,r,u,h,m){var E=0;if(u=n,typeof n=="function")Xh(n)&&(E=1);else if(typeof n=="string")E=cE(n,r,Te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case d:return jr(r.children,h,m,a);case p:E=8,h|=24;break;case _:return n=wi(12,r,a,h|2),n.elementType=_,n.lanes=m,n;case M:return n=wi(13,r,a,h),n.elementType=M,n.lanes=m,n;case S:return n=wi(19,r,a,h),n.elementType=S,n.lanes=m,n;case U:return x0(r,h,m,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case g:case y:E=10;break t;case v:E=9;break t;case T:E=11;break t;case x:E=14;break t;case L:E=16,u=null;break t}E=29,r=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=wi(E,r,a,h),a.elementType=n,a.type=u,a.lanes=m,a}function jr(n,a,r,u){return n=wi(7,n,u,a),n.lanes=r,n}function x0(n,a,r,u){n=wi(22,n,u,a),n.elementType=U,n.lanes=r;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=h._current;if(m===null)throw Error(i(456));if((h._pendingVisibility&2)===0){var E=qa(m,2);E!==null&&(h._pendingVisibility|=2,Wn(E,m,2))}},attach:function(){var m=h._current;if(m===null)throw Error(i(456));if((h._pendingVisibility&2)!==0){var E=qa(m,2);E!==null&&(h._pendingVisibility&=-3,Wn(E,m,2))}}};return n.stateNode=h,n}function Wh(n,a,r){return n=wi(6,n,null,a),n.lanes=r,n}function qh(n,a,r){return a=wi(4,n.children!==null?n.children:[],n.key,a),a.lanes=r,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Ea(n){n.flags|=4}function y0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!av(a)){if(a=Ai.current,a!==null&&((Ae&4194176)===Ae?Qi!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||a!==Qi))throw ol=Qf,I_;n.flags|=8192}}function Ku(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?me():536870912,n.lanes|=a,js|=a)}function Tl(n,a){if(!Ue)switch(n.tailMode){case"hidden":a=n.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,r=0,u=0;if(a)for(var h=n.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&31457280,u|=h.flags&31457280,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=r,a}function AM(n,a,r){var u=a.pendingProps;switch(Zf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return r=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),xa(xn),oe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(il(a)?Ea(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Bi!==null&&(td(Bi),Bi=null))),qe(a),null;case 26:return r=a.memoizedState,n===null?(Ea(a),r!==null?(qe(a),y0(a,r)):(qe(a),a.flags&=-16777217)):r?r!==n.memoizedState?(Ea(a),qe(a),y0(a,r)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==u&&Ea(a),qe(a),a.flags&=-16777217),null;case 27:Wt(a),r=ae.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Ea(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return qe(a),null}n=Te.current,il(a)?P_(a):(n=K0(h,u,r),a.stateNode=n,Ea(a))}return qe(a),null;case 5:if(Wt(a),r=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Ea(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return qe(a),null}if(n=Te.current,il(a))P_(a);else{switch(h=oc(ae.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(r,{is:u.is}):h.createElement(r)}}n[mn]=a,n[_n]=u;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;t:switch(Un(n,r,u),r){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ea(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Ea(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=ae.current,il(a)){if(n=a.stateNode,r=a.memoizedProps,u=null,h=Xn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[mn]=a,n=!!(n.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||X0(n.nodeValue,r)),n||Br(a)}else n=oc(n).createTextNode(u),n[mn]=a,a.stateNode=n}return qe(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=il(a),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[mn]=a}else al(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),h=!1}else Bi!==null&&(td(Bi),Bi=null),h=!0;if(!h)return a.flags&256?(ma(a),a):(ma(a),null)}if(ma(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=u!==null,n=n!==null&&n.memoizedState!==null,r){u=a.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return r!==n&&r&&(a.child.flags|=8192),Ku(a,a.updateQueue),qe(a),null;case 4:return oe(),n===null&&fd(a.stateNode.containerInfo),qe(a),null;case 10:return xa(a.type),qe(a),null;case 19:if(Jt(vn),h=a.memoizedState,h===null)return qe(a),null;if(u=(a.flags&128)!==0,m=h.rendering,m===null)if(u)Tl(h,!1);else{if(Je!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=Ou(n),m!==null){for(a.flags|=128,Tl(h,!1),n=m.updateQueue,a.updateQueue=n,Ku(a,n),a.subtreeFlags=0,n=r,r=a.child;r!==null;)v0(r,n),r=r.sibling;return zt(vn,vn.current&1|2),a.child}n=n.sibling}h.tail!==null&&pt()>Qu&&(a.flags|=128,u=!0,Tl(h,!1),a.lanes=4194304)}else{if(!u)if(n=Ou(m),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,Ku(a,n),Tl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ue)return qe(a),null}else 2*pt()-h.renderingStartTime>Qu&&r!==536870912&&(a.flags|=128,u=!0,Tl(h,!1),a.lanes=4194304);h.isBackwards?(m.sibling=a.child,a.child=m):(n=h.last,n!==null?n.sibling=m:a.child=m,h.last=m)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=pt(),a.sibling=null,n=vn.current,zt(vn,u?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return ma(a),$f(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(r&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),r=a.updateQueue,r!==null&&Ku(a,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048),n!==null&&Jt(Hr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),xa(xn),qe(a),null;case 25:return null}throw Error(i(156,a.tag))}function RM(n,a){switch(Zf(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return xa(xn),oe(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Wt(a),null;case 13:if(ma(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));al()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Jt(vn),null;case 4:return oe(),null;case 10:return xa(a.type),null;case 22:case 23:return ma(a),$f(),n!==null&&Jt(Hr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return xa(xn),null;case 25:return null;default:return null}}function S0(n,a){switch(Zf(a),a.tag){case 3:xa(xn),oe();break;case 26:case 27:case 5:Wt(a);break;case 4:oe();break;case 13:ma(a);break;case 19:Jt(vn);break;case 10:xa(a.type);break;case 22:case 23:ma(a),$f(),n!==null&&Jt(Hr);break;case 24:xa(xn)}}var CM={getCacheForType:function(n){var a=Nn(xn),r=a.data.get(n);return r===void 0&&(r=n(),a.data.set(n,r)),r}},wM=typeof WeakMap=="function"?WeakMap:Map,Ye=0,Ge=null,ge=null,Ae=0,Ve=0,hi=null,Ta=!1,Ys=!1,Yh=!1,ba=0,Je=0,rr=0,Zr=0,jh=0,Di=0,js=0,bl=null,$i=null,Zh=!1,Kh=0,Qu=1/0,Ju=null,sr=null,$u=!1,Kr=null,Al=0,Qh=0,Jh=null,Rl=0,$h=null;function di(){if((Ye&2)!==0&&Ae!==0)return Ae&-Ae;if(b.T!==null){var n=Fs;return n!==0?n:od()}return qo()}function M0(){Di===0&&(Di=(Ae&536870912)===0||Ue?ke():536870912);var n=Ai.current;return n!==null&&(n.flags|=32),Di}function Wn(n,a,r){(n===Ge&&Ve===2||n.cancelPendingCommit!==null)&&(Zs(n,0),Aa(n,Ae,Di,!1)),on(n,r),((Ye&2)===0||n!==Ge)&&(n===Ge&&((Ye&2)===0&&(Zr|=r),Je===4&&Aa(n,Ae,Di,!1)),ta(n))}function E0(n,a,r){if((Ye&6)!==0)throw Error(i(327));var u=!r&&(a&60)===0&&(a&n.expiredLanes)===0||jt(n,a),h=u?LM(n,a):id(n,a,!0),m=u;do{if(h===0){Ys&&!u&&Aa(n,a,0,!1);break}else if(h===6)Aa(n,a,0,!Ta);else{if(r=n.current.alternate,m&&!DM(r)){h=id(n,a,!1),m=!1;continue}if(h===2){if(m=a,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;t:{var w=n;h=bl;var B=w.current.memoizedState.isDehydrated;if(B&&(Zs(w,E).flags|=256),E=id(w,E,!1),E!==2){if(Yh&&!B){w.errorRecoveryDisabledLanes|=m,Zr|=m,h=4;break t}m=$i,$i=h,m!==null&&td(m)}h=E}if(m=!1,h!==2)continue}}if(h===1){Zs(n,0),Aa(n,a,0,!0);break}t:{switch(u=n,h){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Aa(u,a,Di,!Ta);break t}break;case 2:$i=null;break;case 3:case 5:break;default:throw Error(i(329))}if(u.finishedWork=r,u.finishedLanes=a,(a&62914560)===a&&(m=Kh+300-pt(),10<m)){if(Aa(u,a,Di,!Ta),Ot(u,0)!==0)break t;u.timeoutHandle=Y0(T0.bind(null,u,r,$i,Ju,Zh,a,Di,Zr,js,Ta,2,-0,0),m);break t}T0(u,r,$i,Ju,Zh,a,Di,Zr,js,Ta,0,-0,0)}}break}while(!0);ta(n)}function td(n){$i===null?$i=n:$i.push.apply($i,n)}function T0(n,a,r,u,h,m,E,w,B,j,mt,yt,ot){var ht=a.subtreeFlags;if((ht&8192||(ht&16785408)===16785408)&&(Ol={stylesheets:null,count:0,unsuspend:fE},p0(a),a=dE(),a!==null)){n.cancelPendingCommit=a(U0.bind(null,n,r,u,h,E,w,B,1,yt,ot)),Aa(n,m,E,!j);return}U0(n,r,u,h,E,w,B,mt,yt,ot)}function DM(n){for(var a=n;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!ui(m(),h))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Aa(n,a,r,u){a&=~jh,a&=~Zr,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var h=a;0<h;){var m=31-ft(h),E=1<<m;u[m]=-1,h&=~E}r!==0&&Wo(n,r,a)}function tc(){return(Ye&6)===0?(Cl(0),!1):!0}function ed(){if(ge!==null){if(Ve===0)var n=ge.return;else n=ge,va=Wr=null,oh(n),Is=null,ll=0,n=ge;for(;n!==null;)S0(n.alternate,n),n=n.return;ge=null}}function Zs(n,a){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,ZM(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),ed(),Ge=n,ge=r=ar(n.current,null),Ae=a,Ve=0,hi=null,Ta=!1,Ys=jt(n,a),Yh=!1,js=Di=jh=Zr=rr=Je=0,$i=bl=null,Zh=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var h=31-ft(u),m=1<<h;a|=n[h],u&=~m}return ba=a,Tu(),r}function b0(n,a){de=null,b.H=Ji,a===sl?(a=H_(),Ve=3):a===I_?(a=H_(),Ve=4):Ve=a===Bg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,hi=a,ge===null&&(Je=1,Xu(n,Ei(a,n.current)))}function A0(){var n=b.H;return b.H=Ji,n===null?Ji:n}function R0(){var n=b.A;return b.A=CM,n}function nd(){Je=4,Ta||(Ae&4194176)!==Ae&&Ai.current!==null||(Ys=!0),(rr&134217727)===0&&(Zr&134217727)===0||Ge===null||Aa(Ge,Ae,Di,!1)}function id(n,a,r){var u=Ye;Ye|=2;var h=A0(),m=R0();(Ge!==n||Ae!==a)&&(Ju=null,Zs(n,a)),a=!1;var E=Je;t:do try{if(Ve!==0&&ge!==null){var w=ge,B=hi;switch(Ve){case 8:ed(),E=6;break t;case 3:case 2:case 6:Ai.current===null&&(a=!0);var j=Ve;if(Ve=0,hi=null,Ks(n,w,B,j),r&&Ys){E=0;break t}break;default:j=Ve,Ve=0,hi=null,Ks(n,w,B,j)}}UM(),E=Je;break}catch(mt){b0(n,mt)}while(!0);return a&&n.shellSuspendCounter++,va=Wr=null,Ye=u,b.H=h,b.A=m,ge===null&&(Ge=null,Ae=0,Tu()),E}function UM(){for(;ge!==null;)C0(ge)}function LM(n,a){var r=Ye;Ye|=2;var u=A0(),h=R0();Ge!==n||Ae!==a?(Ju=null,Qu=pt()+500,Zs(n,a)):Ys=jt(n,a);t:do try{if(Ve!==0&&ge!==null){a=ge;var m=hi;e:switch(Ve){case 1:Ve=0,hi=null,Ks(n,a,m,1);break;case 2:if(B_(m)){Ve=0,hi=null,w0(a);break}a=function(){Ve===2&&Ge===n&&(Ve=7),ta(n)},m.then(a,a);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:B_(m)?(Ve=0,hi=null,w0(a)):(Ve=0,hi=null,Ks(n,a,m,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var w=ge;if(!E||av(E)){Ve=0,hi=null;var B=w.sibling;if(B!==null)ge=B;else{var j=w.return;j!==null?(ge=j,ec(j)):ge=null}break e}}Ve=0,hi=null,Ks(n,a,m,5);break;case 6:Ve=0,hi=null,Ks(n,a,m,6);break;case 8:ed(),Je=6;break t;default:throw Error(i(462))}}OM();break}catch(mt){b0(n,mt)}while(!0);return va=Wr=null,b.H=u,b.A=h,Ye=r,ge!==null?0:(Ge=null,Ae=0,Tu(),Je)}function OM(){for(;ge!==null&&!C();)C0(ge)}function C0(n){var a=Kg(n.alternate,n,ba);n.memoizedProps=n.pendingProps,a===null?ec(n):ge=a}function w0(n){var a=n,r=a.alternate;switch(a.tag){case 15:case 0:a=Xg(r,a,a.pendingProps,a.type,void 0,Ae);break;case 11:a=Xg(r,a,a.pendingProps,a.type.render,a.ref,Ae);break;case 5:oh(a);default:S0(r,a),a=ge=v0(a,ba),a=Kg(r,a,ba)}n.memoizedProps=n.pendingProps,a===null?ec(n):ge=a}function Ks(n,a,r,u){va=Wr=null,oh(a),Is=null,ll=0;var h=a.return;try{if(SM(n,h,a,r,Ae)){Je=1,Xu(n,Ei(r,n.current)),ge=null;return}}catch(m){if(h!==null)throw ge=h,m;Je=1,Xu(n,Ei(r,n.current)),ge=null;return}a.flags&32768?(Ue||u===1?n=!0:Ys||(Ae&536870912)!==0?n=!1:(Ta=n=!0,(u===2||u===3||u===6)&&(u=Ai.current,u!==null&&u.tag===13&&(u.flags|=16384))),D0(a,n)):ec(a)}function ec(n){var a=n;do{if((a.flags&32768)!==0){D0(a,Ta);return}n=a.return;var r=AM(a.alternate,a,ba);if(r!==null){ge=r;return}if(a=a.sibling,a!==null){ge=a;return}ge=a=n}while(a!==null);Je===0&&(Je=5)}function D0(n,a){do{var r=RM(n.alternate,n);if(r!==null){r.flags&=32767,ge=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(n=n.sibling,n!==null)){ge=n;return}ge=n=r}while(n!==null);Je=6,ge=null}function U0(n,a,r,u,h,m,E,w,B,j){var mt=b.T,yt=Y.p;try{Y.p=2,b.T=null,NM(n,a,r,u,yt,h,m,E,w,B,j)}finally{b.T=mt,Y.p=yt}}function NM(n,a,r,u,h,m,E,w){do Qs();while(Kr!==null);if((Ye&6)!==0)throw Error(i(327));var B=n.finishedWork;if(u=n.finishedLanes,B===null)return null;if(n.finishedWork=null,n.finishedLanes=0,B===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var j=B.lanes|B.childLanes;if(j|=qf,pu(n,u,j,m,E,w),n===Ge&&(ge=Ge=null,Ae=0),(B.subtreeFlags&10256)===0&&(B.flags&10256)===0||$u||($u=!0,Qh=j,Jh=r,BM(Dt,function(){return Qs(),null})),r=(B.flags&15990)!==0,(B.subtreeFlags&15990)!==0||r?(r=b.T,b.T=null,m=Y.p,Y.p=2,E=Ye,Ye|=4,EM(n,B),f0(B,n),aM(md,n.containerInfo),dc=!!pd,md=pd=null,n.current=B,o0(n,B.alternate,B),at(),Ye=E,Y.p=m,b.T=r):n.current=B,$u?($u=!1,Kr=n,Al=u):L0(n,j),j=n.pendingLanes,j===0&&(sr=null),Ft(B.stateNode),ta(n),a!==null)for(h=n.onRecoverableError,B=0;B<a.length;B++)j=a[B],h(j.value,{componentStack:j.stack});return(Al&3)!==0&&Qs(),j=n.pendingLanes,(u&4194218)!==0&&(j&42)!==0?n===$h?Rl++:(Rl=0,$h=n):Rl=0,Cl(0),null}function L0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,cl(a)))}function Qs(){if(Kr!==null){var n=Kr,a=Qh;Qh=0;var r=bs(Al),u=b.T,h=Y.p;try{if(Y.p=32>r?32:r,b.T=null,Kr===null)var m=!1;else{r=Jh,Jh=null;var E=Kr,w=Al;if(Kr=null,Al=0,(Ye&6)!==0)throw Error(i(331));var B=Ye;if(Ye|=4,_0(E.current),d0(E,E.current,w,r),Ye=B,Cl(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Kt,E)}catch{}m=!0}return m}finally{Y.p=h,b.T=u,L0(n,a)}}return!1}function O0(n,a,r){a=Ei(r,a),a=Sh(n.stateNode,a,2),n=tr(n,a,2),n!==null&&(on(n,2),ta(n))}function Fe(n,a,r){if(n.tag===3)O0(n,n,r);else for(;a!==null;){if(a.tag===3){O0(a,n,r);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){n=Ei(r,n),r=zg(2),u=tr(a,r,2),u!==null&&(Ig(r,u,a,n),on(u,2),ta(u));break}}a=a.return}}function ad(n,a,r){var u=n.pingCache;if(u===null){u=n.pingCache=new wM;var h=new Set;u.set(a,h)}else h=u.get(a),h===void 0&&(h=new Set,u.set(a,h));h.has(r)||(Yh=!0,h.add(r),n=PM.bind(null,n,a,r),a.then(n,n))}function PM(n,a,r){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,Ge===n&&(Ae&r)===r&&(Je===4||Je===3&&(Ae&62914560)===Ae&&300>pt()-Kh?(Ye&2)===0&&Zs(n,0):jh|=r,js===Ae&&(js=0)),ta(n)}function N0(n,a){a===0&&(a=me()),n=qa(n,a),n!==null&&(on(n,a),ta(n))}function zM(n){var a=n.memoizedState,r=0;a!==null&&(r=a.retryLane),N0(n,r)}function IM(n,a){var r=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),N0(n,r)}function BM(n,a){return qt(n,a)}var nc=null,Js=null,rd=!1,ic=!1,sd=!1,Qr=0;function ta(n){n!==Js&&n.next===null&&(Js===null?nc=Js=n:Js=Js.next=n),ic=!0,rd||(rd=!0,HM(FM))}function Cl(n,a){if(!sd&&ic){sd=!0;do for(var r=!1,u=nc;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-ft(42|n)+1)-1,m&=h&~(E&~w),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(r=!0,I0(u,m))}else m=Ae,m=Ot(u,u===Ge?m:0),(m&3)===0||jt(u,m)||(r=!0,I0(u,m));u=u.next}while(r);sd=!1}}function FM(){ic=rd=!1;var n=0;Qr!==0&&(jM()&&(n=Qr),Qr=0);for(var a=pt(),r=null,u=nc;u!==null;){var h=u.next,m=P0(u,a);m===0?(u.next=null,r===null?nc=h:r.next=h,h===null&&(Js=r)):(r=u,(n!==0||(m&3)!==0)&&(ic=!0)),u=h}Cl(n)}function P0(n,a){for(var r=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-ft(m),w=1<<E,B=h[E];B===-1?((w&r)===0||(w&u)!==0)&&(h[E]=be(w,a)):B<=a&&(n.expiredLanes|=w),m&=~w}if(a=Ge,r=Ae,r=Ot(n,n===a?r:0),u=n.callbackNode,r===0||n===a&&Ve===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&I(u),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||jt(n,r)){if(a=r&-r,a===n.callbackPriority)return a;switch(u!==null&&I(u),bs(r)){case 2:case 8:r=kt;break;case 32:r=Dt;break;case 268435456:r=pe;break;default:r=Dt}return u=z0.bind(null,n),r=qt(r,u),n.callbackPriority=a,n.callbackNode=r,a}return u!==null&&u!==null&&I(u),n.callbackPriority=2,n.callbackNode=null,2}function z0(n,a){var r=n.callbackNode;if(Qs()&&n.callbackNode!==r)return null;var u=Ae;return u=Ot(n,n===Ge?u:0),u===0?null:(E0(n,u,a),P0(n,pt()),n.callbackNode!=null&&n.callbackNode===r?z0.bind(null,n):null)}function I0(n,a){if(Qs())return null;E0(n,a,!0)}function HM(n){KM(function(){(Ye&6)!==0?qt(gt,n):n()})}function od(){return Qr===0&&(Qr=ke()),Qr}function B0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:gu(""+n)}function F0(n,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,n.id&&r.setAttribute("form",n.id),a.parentNode.insertBefore(r,a),n=new FormData(n),r.parentNode.removeChild(r),n}function GM(n,a,r,u,h){if(a==="submit"&&r&&r.stateNode===h){var m=B0((h[_n]||null).action),E=u.submitter;E&&(a=(a=E[_n]||null)?B0(a.formAction):E.getAttribute("formAction"),a!==null&&(m=a,E=null));var w=new Su("action","action",null,u,h);n.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Qr!==0){var B=E?F0(h,E):new FormData(h);_h(r,{pending:!0,data:B,method:h.method,action:m},null,B)}}else typeof m=="function"&&(w.preventDefault(),B=E?F0(h,E):new FormData(h),_h(r,{pending:!0,data:B,method:h.method,action:m},m,B))},currentTarget:h}]})}}for(var ld=0;ld<U_.length;ld++){var ud=U_[ld],VM=ud.toLowerCase(),kM=ud[0].toUpperCase()+ud.slice(1);Ii(VM,"on"+kM)}Ii(A_,"onAnimationEnd"),Ii(R_,"onAnimationIteration"),Ii(C_,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(sM,"onTransitionRun"),Ii(oM,"onTransitionStart"),Ii(lM,"onTransitionCancel"),Ii(w_,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function H0(n,a){a=(a&4)!==0;for(var r=0;r<n.length;r++){var u=n[r],h=u.event;u=u.listeners;t:{var m=void 0;if(a)for(var E=u.length-1;0<=E;E--){var w=u[E],B=w.instance,j=w.currentTarget;if(w=w.listener,B!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=j;try{m(h)}catch(mt){ku(mt)}h.currentTarget=null,m=B}else for(E=0;E<u.length;E++){if(w=u[E],B=w.instance,j=w.currentTarget,w=w.listener,B!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=j;try{m(h)}catch(mt){ku(mt)}h.currentTarget=null,m=B}}}}function Me(n,a){var r=a[As];r===void 0&&(r=a[As]=new Set);var u=n+"__bubble";r.has(u)||(G0(a,n,2,!1),r.add(u))}function cd(n,a,r){var u=0;a&&(u|=4),G0(r,n,u,a)}var ac="_reactListening"+Math.random().toString(36).slice(2);function fd(n){if(!n[ac]){n[ac]=!0,Q.forEach(function(r){r!=="selectionchange"&&(XM.has(r)||cd(r,!1,n),cd(r,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[ac]||(a[ac]=!0,cd("selectionchange",!1,a))}}function G0(n,a,r,u){switch(cv(a)){case 2:var h=_E;break;case 8:h=gE;break;default:h=Td}r=h.bind(null,a,r,n),h=void 0,!Of||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(a,r,{capture:!0,passive:h}):n.addEventListener(a,r,!0):h!==void 0?n.addEventListener(a,r,{passive:h}):n.addEventListener(a,r,!1)}function hd(n,a,r,u,h){var m=u;if((a&1)===0&&(a&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;E=E.return}for(;w!==null;){if(E=ha(w),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){u=m=E;continue t}w=w.parentNode}}u=u.return}n_(function(){var j=m,mt=Uf(r),yt=[];t:{var ot=D_.get(n);if(ot!==void 0){var ht=Su,Yt=n;switch(n){case"keypress":if(xu(r)===0)break t;case"keydown":case"keyup":ht=IS;break;case"focusin":Yt="focus",ht=If;break;case"focusout":Yt="blur",ht=If;break;case"beforeblur":case"afterblur":ht=If;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=r_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=bS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=HS;break;case A_:case R_:case C_:ht=CS;break;case w_:ht=VS;break;case"scroll":case"scrollend":ht=ES;break;case"wheel":ht=XS;break;case"copy":case"cut":case"paste":ht=DS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=o_;break;case"toggle":case"beforetoggle":ht=qS}var se=(a&4)!==0,$e=!se&&(n==="scroll"||n==="scrollend"),J=se?ot!==null?ot+"Capture":null:ot;se=[];for(var q=j,et;q!==null;){var vt=q;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||J===null||(vt=jo(q,J),vt!=null&&se.push(Dl(q,vt,et))),$e)break;q=q.return}0<se.length&&(ot=new ht(ot,Yt,null,r,mt),yt.push({event:ot,listeners:se}))}}if((a&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",ht=n==="mouseout"||n==="pointerout",ot&&r!==Df&&(Yt=r.relatedTarget||r.fromElement)&&(ha(Yt)||Yt[fa]))break t;if((ht||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ht?(Yt=r.relatedTarget||r.toElement,ht=j,Yt=Yt?ha(Yt):null,Yt!==null&&($e=W(Yt),se=Yt.tag,Yt!==$e||se!==5&&se!==27&&se!==6)&&(Yt=null)):(ht=null,Yt=j),ht!==Yt)){if(se=r_,vt="onMouseLeave",J="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(se=o_,vt="onPointerLeave",J="onPointerEnter",q="pointer"),$e=ht==null?ot:Z(ht),et=Yt==null?ot:Z(Yt),ot=new se(vt,q+"leave",ht,r,mt),ot.target=$e,ot.relatedTarget=et,vt=null,ha(mt)===j&&(se=new se(J,q+"enter",Yt,r,mt),se.target=et,se.relatedTarget=$e,vt=se),$e=vt,ht&&Yt)e:{for(se=ht,J=Yt,q=0,et=se;et;et=$s(et))q++;for(et=0,vt=J;vt;vt=$s(vt))et++;for(;0<q-et;)se=$s(se),q--;for(;0<et-q;)J=$s(J),et--;for(;q--;){if(se===J||J!==null&&se===J.alternate)break e;se=$s(se),J=$s(J)}se=null}else se=null;ht!==null&&V0(yt,ot,ht,se,!1),Yt!==null&&$e!==null&&V0(yt,$e,Yt,se,!0)}}t:{if(ot=j?Z(j):window,ht=ot.nodeName&&ot.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ot.type==="file")var Vt=m_;else if(d_(ot))if(__)Vt=nM;else{Vt=tM;var _e=$S}else ht=ot.nodeName,!ht||ht.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?j&&wf(j.elementType)&&(Vt=m_):Vt=eM;if(Vt&&(Vt=Vt(n,j))){p_(yt,Vt,r,mt);break t}_e&&_e(n,ot,j),n==="focusout"&&j&&ot.type==="number"&&j.memoizedProps.value!=null&&On(ot,"number",ot.value)}switch(_e=j?Z(j):window,n){case"focusin":(d_(_e)||_e.contentEditable==="true")&&(Us=_e,kf=j,nl=null);break;case"focusout":nl=kf=Us=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,T_(yt,r,mt);break;case"selectionchange":if(rM)break;case"keydown":case"keyup":T_(yt,r,mt)}var Zt;if(Ff)t:{switch(n){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Ds?f_(n,r)&&(ee="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&(l_&&r.locale!=="ko"&&(Ds||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ds&&(Zt=i_()):(Wa=mt,Nf="value"in Wa?Wa.value:Wa.textContent,Ds=!0)),_e=rc(j,ee),0<_e.length&&(ee=new s_(ee,n,null,r,mt),yt.push({event:ee,listeners:_e}),Zt?ee.data=Zt:(Zt=h_(r),Zt!==null&&(ee.data=Zt)))),(Zt=jS?ZS(n,r):KS(n,r))&&(ee=rc(j,"onBeforeInput"),0<ee.length&&(_e=new s_("onBeforeInput","beforeinput",null,r,mt),yt.push({event:_e,listeners:ee}),_e.data=Zt)),GM(yt,n,j,r,mt)}H0(yt,a)})}function Dl(n,a,r){return{instance:n,listener:a,currentTarget:r}}function rc(n,a){for(var r=a+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=jo(n,r),h!=null&&u.unshift(Dl(n,h,m)),h=jo(n,a),h!=null&&u.push(Dl(n,h,m))),n=n.return}return u}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function V0(n,a,r,u,h){for(var m=a._reactName,E=[];r!==null&&r!==u;){var w=r,B=w.alternate,j=w.stateNode;if(w=w.tag,B!==null&&B===u)break;w!==5&&w!==26&&w!==27||j===null||(B=j,h?(j=jo(r,m),j!=null&&E.unshift(Dl(r,j,B))):h||(j=jo(r,m),j!=null&&E.push(Dl(r,j,B)))),r=r.return}E.length!==0&&n.push({event:a,listeners:E})}var WM=/\r\n?/g,qM=/\u0000|\uFFFD/g;function k0(n){return(typeof n=="string"?n:""+n).replace(WM,`
`).replace(qM,"")}function X0(n,a){return a=k0(a),k0(n)===a}function sc(){}function Ie(n,a,r,u,h,m){switch(r){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||Kn(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&Kn(n,""+u);break;case"className":Xe(n,"class",u);break;case"tabIndex":Xe(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(n,r,u);break;case"style":t_(n,u,m);break;case"data":if(a!=="object"){Xe(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||r!=="href")){n.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(r);break}u=gu(""+u),n.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&Ie(n,a,"name",h.name,h,null),Ie(n,a,"formEncType",h.formEncType,h,null),Ie(n,a,"formMethod",h.formMethod,h,null),Ie(n,a,"formTarget",h.formTarget,h,null)):(Ie(n,a,"encType",h.encType,h,null),Ie(n,a,"method",h.method,h,null),Ie(n,a,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(r);break}u=gu(""+u),n.setAttribute(r,u);break;case"onClick":u!=null&&(n.onclick=sc);break;case"onScroll":u!=null&&Me("scroll",n);break;case"onScrollEnd":u!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}r=gu(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(r,""+u):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":u===!0?n.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(r,u):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(r,u):n.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(r):n.setAttribute(r,u);break;case"popover":Me("beforetoggle",n),Me("toggle",n),ye(n,"popover",u);break;case"xlinkActuate":De(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":De(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":De(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":De(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":De(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":De(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":De(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":De(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":De(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ye(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=SS.get(r)||r,ye(n,r,u))}}function dd(n,a,r,u,h,m){switch(r){case"style":t_(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=r}}break;case"children":typeof u=="string"?Kn(n,u):(typeof u=="number"||typeof u=="bigint")&&Kn(n,""+u);break;case"onScroll":u!=null&&Me("scroll",n);break;case"onScrollEnd":u!=null&&Me("scrollend",n);break;case"onClick":u!=null&&(n.onclick=sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),a=r.slice(2,h?r.length-7:void 0),m=n[_n]||null,m=m!=null?m[r]:null,typeof m=="function"&&n.removeEventListener(a,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(a,u,h);break t}r in n?n[r]=u:u===!0?n.setAttribute(r,""):ye(n,r,u)}}}function Un(n,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ie(n,a,m,E,r,null)}}h&&Ie(n,a,"srcSet",r.srcSet,r,null),u&&Ie(n,a,"src",r.src,r,null);return;case"input":Me("invalid",n);var w=m=E=h=null,B=null,j=null;for(u in r)if(r.hasOwnProperty(u)){var mt=r[u];if(mt!=null)switch(u){case"name":h=mt;break;case"type":E=mt;break;case"checked":B=mt;break;case"defaultChecked":j=mt;break;case"value":m=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(i(137,a));break;default:Ie(n,a,u,mt,r,null)}}kn(n,m,w,B,j,E,h,!1),Se(n);return;case"select":Me("invalid",n),u=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(w=r[h],w!=null))switch(h){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:Ie(n,a,h,w,r,null)}a=m,r=E,n.multiple=!!u,a!=null?Ke(n,!!u,a,!1):r!=null&&Ke(n,!!u,r,!0);return;case"textarea":Me("invalid",n),m=h=u=null;for(E in r)if(r.hasOwnProperty(E)&&(w=r[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":h=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:Ie(n,a,E,w,r,null)}Rs(n,u,h,m),Se(n);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(u=r[B],u!=null))switch(B){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ie(n,a,B,u,r,null)}return;case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(u=0;u<wl.length;u++)Me(wl[u],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(u=r[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ie(n,a,j,u,r,null)}return;default:if(wf(a)){for(mt in r)r.hasOwnProperty(mt)&&(u=r[mt],u!==void 0&&dd(n,a,mt,u,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(u=r[w],u!=null&&Ie(n,a,w,u,r,null))}function YM(n,a,r,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,w=null,B=null,j=null,mt=null;for(ht in r){var yt=r[ht];if(r.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":B=yt;default:u.hasOwnProperty(ht)||Ie(n,a,ht,null,u,yt)}}for(var ot in u){var ht=u[ot];if(yt=r[ot],u.hasOwnProperty(ot)&&(ht!=null||yt!=null))switch(ot){case"type":m=ht;break;case"name":h=ht;break;case"checked":j=ht;break;case"defaultChecked":mt=ht;break;case"value":E=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(i(137,a));break;default:ht!==yt&&Ie(n,a,ot,ht,u,yt)}}Pe(n,E,w,B,j,mt,m,h);return;case"select":ht=E=w=ot=null;for(m in r)if(B=r[m],r.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":ht=B;default:u.hasOwnProperty(m)||Ie(n,a,m,null,u,B)}for(h in u)if(m=u[h],B=r[h],u.hasOwnProperty(h)&&(m!=null||B!=null))switch(h){case"value":ot=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==B&&Ie(n,a,h,m,u,B)}a=w,r=E,u=ht,ot!=null?Ke(n,!!r,ot,!1):!!u!=!!r&&(a!=null?Ke(n,!!r,a,!0):Ke(n,!!r,r?[]:"",!1));return;case"textarea":ht=ot=null;for(w in r)if(h=r[w],r.hasOwnProperty(w)&&h!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ie(n,a,w,null,u,h)}for(E in u)if(h=u[E],m=r[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":ot=h;break;case"defaultValue":ht=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==m&&Ie(n,a,E,h,u,m)}Cn(n,ot,ht);return;case"option":for(var Yt in r)if(ot=r[Yt],r.hasOwnProperty(Yt)&&ot!=null&&!u.hasOwnProperty(Yt))switch(Yt){case"selected":n.selected=!1;break;default:Ie(n,a,Yt,null,u,ot)}for(B in u)if(ot=u[B],ht=r[B],u.hasOwnProperty(B)&&ot!==ht&&(ot!=null||ht!=null))switch(B){case"selected":n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(n,a,B,ot,u,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in r)ot=r[se],r.hasOwnProperty(se)&&ot!=null&&!u.hasOwnProperty(se)&&Ie(n,a,se,null,u,ot);for(j in u)if(ot=u[j],ht=r[j],u.hasOwnProperty(j)&&ot!==ht&&(ot!=null||ht!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:Ie(n,a,j,ot,u,ht)}return;default:if(wf(a)){for(var $e in r)ot=r[$e],r.hasOwnProperty($e)&&ot!==void 0&&!u.hasOwnProperty($e)&&dd(n,a,$e,void 0,u,ot);for(mt in u)ot=u[mt],ht=r[mt],!u.hasOwnProperty(mt)||ot===ht||ot===void 0&&ht===void 0||dd(n,a,mt,ot,u,ht);return}}for(var J in r)ot=r[J],r.hasOwnProperty(J)&&ot!=null&&!u.hasOwnProperty(J)&&Ie(n,a,J,null,u,ot);for(yt in u)ot=u[yt],ht=r[yt],!u.hasOwnProperty(yt)||ot===ht||ot==null&&ht==null||Ie(n,a,yt,ot,u,ht)}var pd=null,md=null;function oc(n){return n.nodeType===9?n:n.ownerDocument}function W0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function _d(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gd=null;function jM(){var n=window.event;return n&&n.type==="popstate"?n===gd?!1:(gd=n,!0):(gd=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,KM=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(n){return j0.resolve(null).then(n).catch(QM)}:Y0;function QM(n){setTimeout(function(){throw n})}function vd(n,a){var r=a,u=0;do{var h=r.nextSibling;if(n.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(u===0){n.removeChild(h),Bl(a);return}u--}else r!=="$"&&r!=="$?"&&r!=="$!"||u++;r=h}while(r);Bl(a)}function xd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xd(r),Yo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function JM(n,a,r,u){for(;n.nodeType===1;){var h=r;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Lr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Hi(n.nextSibling),n===null)break}return null}function $M(n,a,r){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Hi(n.nextSibling),n===null))return null;return n}function Hi(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function Z0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return n;a--}else r==="/$"&&a++}n=n.previousSibling}return null}function K0(n,a,r){switch(a=oc(r),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var Ui=new Map,Q0=new Set;function lc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Ra=Y.d;Y.d={f:tE,r:eE,D:nE,C:iE,L:aE,m:rE,X:oE,S:sE,M:lE};function tE(){var n=Ra.f(),a=tc();return n||a}function eE(n){var a=D(n);a!==null&&a.tag===5&&a.type==="form"?Tg(a):Ra.r(n)}var to=typeof document>"u"?null:document;function J0(n,a,r){var u=to;if(u&&typeof a=="string"&&a){var h=Mn(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Q0.has(h)||(Q0.add(h),n={rel:n,crossOrigin:r,href:a},u.querySelector(h)===null&&(a=u.createElement("link"),Un(a,"link",n),tt(a),u.head.appendChild(a)))}}function nE(n){Ra.D(n),J0("dns-prefetch",n,null)}function iE(n,a){Ra.C(n,a),J0("preconnect",n,a)}function aE(n,a,r){Ra.L(n,a,r);var u=to;if(u&&n&&a){var h='link[rel="preload"][as="'+Mn(a)+'"]';a==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Mn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Mn(r.imageSizes)+'"]')):h+='[href="'+Mn(n)+'"]';var m=h;switch(a){case"style":m=eo(n);break;case"script":m=no(n)}Ui.has(m)||(n=A({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:n,as:a},r),Ui.set(m,n),u.querySelector(h)!==null||a==="style"&&u.querySelector(Ul(m))||a==="script"&&u.querySelector(Ll(m))||(a=u.createElement("link"),Un(a,"link",n),tt(a),u.head.appendChild(a)))}}function rE(n,a){Ra.m(n,a);var r=to;if(r&&n){var u=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Mn(u)+'"][href="'+Mn(n)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=no(n)}if(!Ui.has(m)&&(n=A({rel:"modulepreload",href:n},a),Ui.set(m,n),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ll(m)))return}u=r.createElement("link"),Un(u,"link",n),tt(u),r.head.appendChild(u)}}}function sE(n,a,r){Ra.S(n,a,r);var u=to;if(u&&n){var h=rt(u).hoistableStyles,m=eo(n);a=a||"default";var E=h.get(m);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Ul(m)))w.loading=5;else{n=A({rel:"stylesheet",href:n,"data-precedence":a},r),(r=Ui.get(m))&&yd(n,r);var B=E=u.createElement("link");tt(B),Un(B,"link",n),B._p=new Promise(function(j,mt){B.onload=j,B.onerror=mt}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,uc(E,a,u)}E={type:"stylesheet",instance:E,count:1,state:w},h.set(m,E)}}}function oE(n,a){Ra.X(n,a);var r=to;if(r&&n){var u=rt(r).hoistableScripts,h=no(n),m=u.get(h);m||(m=r.querySelector(Ll(h)),m||(n=A({src:n,async:!0},a),(a=Ui.get(h))&&Sd(n,a),m=r.createElement("script"),tt(m),Un(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function lE(n,a){Ra.M(n,a);var r=to;if(r&&n){var u=rt(r).hoistableScripts,h=no(n),m=u.get(h);m||(m=r.querySelector(Ll(h)),m||(n=A({src:n,async:!0,type:"module"},a),(a=Ui.get(h))&&Sd(n,a),m=r.createElement("script"),tt(m),Un(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function $0(n,a,r,u){var h=(h=ae.current)?lc(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=eo(r.href),r=rt(h).hoistableStyles,u=r.get(a),u||(u={type:"style",instance:null,count:0,state:null},r.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=eo(r.href);var m=rt(h).hoistableStyles,E=m.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=h.querySelector(Ul(n)))&&!m._p&&(E.instance=m,E.state.loading=5),Ui.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ui.set(n,r),m||uE(h,n,r,E.state))),a&&u===null)throw Error(i(528,""));return E}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=no(r),r=rt(h).hoistableScripts,u=r.get(a),u||(u={type:"script",instance:null,count:0,state:null},r.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function eo(n){return'href="'+Mn(n)+'"'}function Ul(n){return'link[rel="stylesheet"]['+n+"]"}function tv(n){return A({},n,{"data-precedence":n.precedence,precedence:null})}function uE(n,a,r,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Un(a,"link",r),tt(a),n.head.appendChild(a))}function no(n){return'[src="'+Mn(n)+'"]'}function Ll(n){return"script[async]"+n}function ev(n,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+Mn(r.href)+'"]');if(u)return a.instance=u,tt(u),u;var h=A({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),tt(u),Un(u,"style",h),uc(u,r.precedence,n),a.instance=u;case"stylesheet":h=eo(r.href);var m=n.querySelector(Ul(h));if(m)return a.state.loading|=4,a.instance=m,tt(m),m;u=tv(r),(h=Ui.get(h))&&yd(u,h),m=(n.ownerDocument||n).createElement("link"),tt(m);var E=m;return E._p=new Promise(function(w,B){E.onload=w,E.onerror=B}),Un(m,"link",u),a.state.loading|=4,uc(m,r.precedence,n),a.instance=m;case"script":return m=no(r.src),(h=n.querySelector(Ll(m)))?(a.instance=h,tt(h),h):(u=r,(h=Ui.get(m))&&(u=A({},r),Sd(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),tt(h),Un(h,"link",u),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,uc(u,r.precedence,n));return a.instance}function uc(n,a,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===a)m=w;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(n,a.firstChild))}function yd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Sd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var cc=null;function nv(n,a,r){if(cc===null){var u=new Map,h=cc=new Map;h.set(r,u)}else h=cc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(n))return u;for(u.set(n,null),r=r.getElementsByTagName(n),h=0;h<r.length;h++){var m=r[h];if(!(m[Lr]||m[mn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(a)||"";E=n+E;var w=u.get(E);w?w.push(m):u.set(E,[m])}}return u}function iv(n,a,r){n=n.ownerDocument||n,n.head.insertBefore(r,a==="title"?n.querySelector("head > title"):null)}function cE(n,a,r){if(r===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function av(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ol=null;function fE(){}function hE(n,a,r){if(Ol===null)throw Error(i(475));var u=Ol;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=eo(r.href),m=n.querySelector(Ul(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=fc.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=m,tt(m);return}m=n.ownerDocument||n,r=tv(r),(h=Ui.get(h))&&yd(r,h),m=m.createElement("link"),tt(m);var E=m;E._p=new Promise(function(w,B){E.onload=w,E.onerror=B}),Un(m,"link",r),a.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=fc.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function dE(){if(Ol===null)throw Error(i(475));var n=Ol;return n.stylesheets&&n.count===0&&Md(n,n.stylesheets),0<n.count?function(a){var r=setTimeout(function(){if(n.stylesheets&&Md(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(r)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)Md(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var hc=null;function Md(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,hc=new Map,a.forEach(pE,n),hc=null,fc.call(n))}function pE(n,a){if(!(a.state.loading&4)){var r=hc.get(n);if(r)var u=r.get(null);else{r=new Map,hc.set(n,r);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),u=E)}u&&r.set(null,u)}h=a.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||u,m===u&&r.set(null,h),r.set(E,h),this.count++,u=fc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var Nl={$$typeof:y,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function mE(n,a,r,u,h,m,E,w){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nn(0),this.hiddenUpdates=nn(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function rv(n,a,r,u,h,m,E,w,B,j,mt,yt){return n=new mE(n,a,r,E,w,B,j,yt),a=1,m===!0&&(a|=24),m=wi(3,null,null,a),n.current=m,m.stateNode=n,a=th(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:a},Nh(m),n}function sv(n){return n?(n=Ns,n):Ns}function ov(n,a,r,u,h,m){h=sv(h),u.context===null?u.context=h:u.pendingContext=h,u=$a(a),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=tr(n,u,a),r!==null&&(Wn(r,n,a),gl(r,n,a))}function lv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<a?r:a}}function Ed(n,a){lv(n,a),(n=n.alternate)&&lv(n,a)}function uv(n){if(n.tag===13){var a=qa(n,67108864);a!==null&&Wn(a,n,67108864),Ed(n,67108864)}}var dc=!0;function _E(n,a,r,u){var h=b.T;b.T=null;var m=Y.p;try{Y.p=2,Td(n,a,r,u)}finally{Y.p=m,b.T=h}}function gE(n,a,r,u){var h=b.T;b.T=null;var m=Y.p;try{Y.p=8,Td(n,a,r,u)}finally{Y.p=m,b.T=h}}function Td(n,a,r,u){if(dc){var h=bd(u);if(h===null)hd(n,a,u,pc,r),fv(n,u);else if(xE(h,n,a,r,u))u.stopPropagation();else if(fv(n,u),a&4&&-1<vE.indexOf(n)){for(;h!==null;){var m=D(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Lt(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var B=1<<31-ft(E);w.entanglements[1]|=B,E&=~B}ta(m),(Ye&6)===0&&(Qu=pt()+500,Cl(0))}}break;case 13:w=qa(m,2),w!==null&&Wn(w,m,2),tc(),Ed(m,2)}if(m=bd(u),m===null&&hd(n,a,u,pc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else hd(n,a,u,null,r)}}function bd(n){return n=Uf(n),Ad(n)}var pc=null;function Ad(n){if(pc=null,n=ha(n),n!==null){var a=W(n);if(a===null)n=null;else{var r=a.tag;if(r===13){if(n=xt(a),n!==null)return n;n=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return pc=n,null}function cv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case kt:return 8;case Dt:case Ht:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Rd=!1,or=null,lr=null,ur=null,Pl=new Map,zl=new Map,cr=[],vE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fv(n,a){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Pl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(a.pointerId)}}function Il(n,a,r,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},a!==null&&(a=D(a),a!==null&&uv(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function xE(n,a,r,u,h){switch(a){case"focusin":return or=Il(or,n,a,r,u,h),!0;case"dragenter":return lr=Il(lr,n,a,r,u,h),!0;case"mouseover":return ur=Il(ur,n,a,r,u,h),!0;case"pointerover":var m=h.pointerId;return Pl.set(m,Il(Pl.get(m)||null,n,a,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,zl.set(m,Il(zl.get(m)||null,n,a,r,u,h)),!0}return!1}function hv(n){var a=ha(n.target);if(a!==null){var r=W(a);if(r!==null){if(a=r.tag,a===13){if(a=xt(r),a!==null){n.blockedOn=a,mu(n.priority,function(){if(r.tag===13){var u=di(),h=qa(r,u);h!==null&&Wn(h,r,u),Ed(r,u)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var r=bd(n.nativeEvent);if(r===null){r=n.nativeEvent;var u=new r.constructor(r.type,r);Df=u,r.target.dispatchEvent(u),Df=null}else return a=D(r),a!==null&&uv(a),n.blockedOn=r,!1;a.shift()}return!0}function dv(n,a,r){mc(n)&&r.delete(a)}function yE(){Rd=!1,or!==null&&mc(or)&&(or=null),lr!==null&&mc(lr)&&(lr=null),ur!==null&&mc(ur)&&(ur=null),Pl.forEach(dv),zl.forEach(dv)}function _c(n,a){n.blockedOn===a&&(n.blockedOn=null,Rd||(Rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yE)))}var gc=null;function pv(n){gc!==n&&(gc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gc===n&&(gc=null);for(var a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],h=n[a+2];if(typeof u!="function"){if(Ad(u||r)===null)continue;break}var m=D(r);m!==null&&(n.splice(a,3),a-=3,_h(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function Bl(n){function a(B){return _c(B,n)}or!==null&&_c(or,n),lr!==null&&_c(lr,n),ur!==null&&_c(ur,n),Pl.forEach(a),zl.forEach(a);for(var r=0;r<cr.length;r++){var u=cr[r];u.blockedOn===n&&(u.blockedOn=null)}for(;0<cr.length&&(r=cr[0],r.blockedOn===null);)hv(r),r.blockedOn===null&&cr.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],E=h[_n]||null;if(typeof m=="function")E||pv(r);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[_n]||null)w=E.formAction;else if(Ad(h)!==null)continue}else w=E.action;typeof w=="function"?r[u+1]=w:(r.splice(u,3),u-=3),pv(r)}}}function Cd(n){this._internalRoot=n}vc.prototype.render=Cd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var r=a.current,u=di();ov(r,u,n,a,null,null)},vc.prototype.unmount=Cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&Qs(),ov(n.current,2,null,n,null,null),tc(),a[fa]=null}};function vc(n){this._internalRoot=n}vc.prototype.unstable_scheduleHydration=function(n){if(n){var a=qo();n={blockedOn:null,target:n,priority:a};for(var r=0;r<cr.length&&a!==0&&a<cr[r].priority;r++);cr.splice(r,0,n),r===0&&hv(n)}};var mv=t.version;if(mv!=="19.0.0")throw Error(i(527,mv,"19.0.0"));Y.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=nt(a),n=n!==null?Et(n):null,n=n===null?null:n.stateNode,n};var SE={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:ha,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Kt=xc.inject(SE),Xt=xc}catch{}}return Hl.createRoot=function(n,a){if(!s(n))throw Error(i(299));var r=!1,u="",h=Lg,m=Og,E=Ng,w=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks)),a=rv(n,1,!1,null,null,r,u,h,m,E,w,null),n[fa]=a.current,fd(n.nodeType===8?n.parentNode:n),new Cd(a)},Hl.hydrateRoot=function(n,a,r){if(!s(n))throw Error(i(299));var u=!1,h="",m=Lg,E=Og,w=Ng,B=null,j=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(j=r.formState)),a=rv(n,1,!0,a,r??null,u,h,m,E,w,B,j),a.context=sv(null),r=a.current,u=di(),h=$a(u),h.callback=null,tr(r,h,u),a.current.lanes=u,on(a,u),ta(a),n[fa]=a.current,fd(n),new vc(a)},Hl.version="19.0.0",Hl}var bv;function OE(){if(bv)return Ud.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ud.exports=LE(),Ud.exports}var NE=OE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Am="174",io={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PE=0,Av=1,zE=2,Wx=1,IE=2,Oa=3,Rr=0,ti=1,Ia=2,Er=0,To=1,Rv=2,Cv=3,wv=4,BE=5,us=100,FE=101,HE=102,GE=103,VE=104,kE=200,XE=201,WE=202,qE=203,Mp=204,Ep=205,YE=206,jE=207,ZE=208,KE=209,QE=210,JE=211,$E=212,tT=213,eT=214,Tp=0,bp=1,Ap=2,Do=3,Rp=4,Cp=5,wp=6,Dp=7,qx=0,nT=1,iT=2,Tr=0,aT=1,rT=2,sT=3,oT=4,lT=5,uT=6,cT=7,Yx=300,Uo=301,Lo=302,Up=303,Lp=304,xf=306,Op=1e3,hs=1001,Np=1002,Yi=1003,fT=1004,yc=1005,aa=1006,Pd=1007,ds=1008,Ga=1009,jx=1010,Zx=1011,eu=1012,Rm=1013,xs=1014,Ba=1015,uu=1016,Cm=1017,wm=1018,Oo=1020,Kx=35902,Qx=1021,Jx=1022,qi=1023,$x=1024,ty=1025,bo=1026,No=1027,ey=1028,Dm=1029,ny=1030,Um=1031,Lm=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,Pp=35840,zp=35841,Ip=35842,Bp=35843,Fp=36196,Hp=37492,Gp=37496,Vp=37808,kp=37809,Xp=37810,Wp=37811,qp=37812,Yp=37813,jp=37814,Zp=37815,Kp=37816,Qp=37817,Jp=37818,$p=37819,tm=37820,em=37821,Jc=36492,nm=36494,im=36495,iy=36283,am=36284,rm=36285,sm=36286,hT=3200,dT=3201,pT=0,mT=1,xr="",Ni="srgb",Po="srgb-linear",of="linear",Be="srgb",ro=7680,Dv=519,_T=512,gT=513,vT=514,ay=515,xT=516,yT=517,ST=518,MT=519,Uv=35044,Lv="300 es",Fa=2e3,lf=2001;let ko=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const l=s.indexOf(e);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}};const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,om=180/Math.PI;function cu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function ve(o,t,e){return Math.max(t,Math.min(e,o))}function ET(o,t){return(o%t+t)%t}function Id(o,t,e){return(1-e)*o+e*t}function Gl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $n(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*s+t.x,this.y=l*s+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,i,s,l,c,f,d,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,c,f,d,p)}set(t,e,i,s,l,c,f,d,p){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=e,_[4]=l,_[5]=d,_[6]=i,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,c=i[0],f=i[3],d=i[6],p=i[1],_=i[4],g=i[7],v=i[2],y=i[5],T=i[8],M=s[0],S=s[3],x=s[6],L=s[1],U=s[4],R=s[7],O=s[2],z=s[5],N=s[8];return l[0]=c*M+f*L+d*O,l[3]=c*S+f*U+d*z,l[6]=c*x+f*R+d*N,l[1]=p*M+_*L+g*O,l[4]=p*S+_*U+g*z,l[7]=p*x+_*R+g*N,l[2]=v*M+y*L+T*O,l[5]=v*S+y*U+T*z,l[8]=v*x+y*R+T*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8];return e*c*_-e*f*p-i*l*_+i*f*d+s*l*p-s*c*d}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=_*c-f*p,v=f*d-_*l,y=p*l-c*d,T=e*g+i*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(s*p-_*i)*M,t[2]=(f*i-s*c)*M,t[3]=v*M,t[4]=(_*e-s*d)*M,t[5]=(s*l-f*e)*M,t[6]=y*M,t[7]=(i*d-p*e)*M,t[8]=(c*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*c+p*f)+c+t,-s*p,s*d,-s*(-p*c+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Bd.makeScale(t,e)),this}rotate(t){return this.premultiply(Bd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bd=new ce;function ry(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function uf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TT(){const o=uf("canvas");return o.style.display="block",o}const Ov={};function ss(o){o in Ov||(Ov[o]=!0,console.warn(o))}function bT(o,t,e){return new Promise(function(i,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}function AT(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function RT(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Nv=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const o={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Be&&(s.r=Ha(s.r),s.g=Ha(s.g),s.b=Ha(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Be&&(s.r=Ao(s.r),s.g=Ao(s.g),s.b=Ao(s.b))),s},fromWorkingColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},toWorkingColorSpace:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xr?of:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Po]:{primaries:t,whitePoint:i,transfer:of,toXYZ:Nv,fromXYZ:Pv,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:t,whitePoint:i,transfer:Be,toXYZ:Nv,fromXYZ:Pv,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),o}const Oe=CT();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let so;class wT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{so===void 0&&(so=uf("canvas")),so.width=t.width,so.height=t.height;const i=so.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=so}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=uf("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ha(l[c]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ha(e[i]/255)*255):e[i]=Ha(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DT=0;class Om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=cu(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Fd(s[c].image)):l.push(Fd(s[c]))}else l=Fd(s);i.url=l}return e||(t.images[this.uuid]=i),i}}function Fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UT=0;class ei extends ko{constructor(t=ei.DEFAULT_IMAGE,e=ei.DEFAULT_MAPPING,i=hs,s=hs,l=aa,c=ds,f=qi,d=Ga,p=ei.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=cu(),this.name="",this.source=new Om(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Op:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Np:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Op:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Np:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Yx;ei.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,e=0,i=0,s=1){sn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,l;const d=t.elements,p=d[0],_=d[4],g=d[8],v=d[1],y=d[5],T=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(p+1)/2,R=(y+1)/2,O=(x+1)/2,z=(_+v)/4,N=(g+M)/4,F=(T+S)/4;return U>R&&U>O?U<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(U),s=z/i,l=N/i):R>O?R<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(R),i=z/s,l=F/s):O<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),i=N/l,s=F/l),this.set(i,s,l,e),this}let L=Math.sqrt((S-T)*(S-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(S-T)/L,this.y=(g-M)/L,this.z=(v-_)/L,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LT extends ko{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:aa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new ei(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Om(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends LT{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class sy extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class OT extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,l,c,f){let d=i[s+0],p=i[s+1],_=i[s+2],g=i[s+3];const v=l[c+0],y=l[c+1],T=l[c+2],M=l[c+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=y,t[e+2]=T,t[e+3]=M;return}if(g!==M||d!==v||p!==y||_!==T){let S=1-f;const x=d*v+p*y+_*T+g*M,L=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const O=Math.sqrt(U),z=Math.atan2(O,x*L);S=Math.sin(S*z)/O,f=Math.sin(f*z)/O}const R=f*L;if(d=d*S+v*R,p=p*S+y*R,_=_*S+T*R,g=g*S+M*R,S===1-f){const O=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=O,p*=O,_*=O,g*=O}}t[e]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,l,c){const f=i[s],d=i[s+1],p=i[s+2],_=i[s+3],g=l[c],v=l[c+1],y=l[c+2],T=l[c+3];return t[e]=f*T+_*g+d*y-p*v,t[e+1]=d*T+_*v+p*g-f*y,t[e+2]=p*T+_*y+f*v-d*g,t[e+3]=_*T-f*g-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(i/2),_=f(s/2),g=f(l/2),v=d(i/2),y=d(s/2),T=d(l/2);switch(c){case"XYZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"YZX":this._x=v*_*g+p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g-v*y*T;break;case"XZY":this._x=v*_*g-p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],d=e[9],p=e[2],_=e[6],g=e[10],v=i+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(l-p)*y,this._z=(c-s)*y}else if(i>f&&i>g){const y=2*Math.sqrt(1+i-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-i-g);this._w=(l-p)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-i-f);this._w=(c-s)/y,this._x=(l+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,l=t._z,c=t._w,f=e._x,d=e._y,p=e._z,_=e._w;return this._x=i*_+c*f+s*p-l*d,this._y=s*_+c*d+l*f-i*p,this._z=l*_+c*p+i*d-s*f,this._w=c*_-i*f-s*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+i*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-e;return this._w=y*c+e*this._w,this._x=y*i+e*this._x,this._y=y*s+e*this._y,this._z=y*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),g=Math.sin((1-e)*_)/p,v=Math.sin(e*_)/p;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,i=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*s,this.y=l[1]*e+l[4]*i+l[7]*s,this.z=l[2]*e+l[5]*i+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*s-f*i),_=2*(f*e-l*s),g=2*(l*i-c*e);return this.x=e+d*p+c*g-f*_,this.y=i+d*_+f*p-l*g,this.z=s+d*g+l*_-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s,this.y=l[1]*e+l[5]*i+l[9]*s,this.z=l[2]*e+l[6]*i+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,l=t.z,c=e.x,f=e.y,d=e.z;return this.x=s*d-l*f,this.y=l*c-i*d,this.z=i*f-s*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new it,zv=new Ss;class fu{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Gi):Gi.fromBufferAttribute(l,c),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sc.copy(i.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vl),Mc.subVectors(this.max,Vl),oo.subVectors(t.a,Vl),lo.subVectors(t.b,Vl),uo.subVectors(t.c,Vl),hr.subVectors(lo,oo),dr.subVectors(uo,lo),Jr.subVectors(oo,uo);let e=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Jr.z,Jr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Jr.z,0,-Jr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Jr.y,Jr.x,0];return!Gd(e,oo,lo,uo,Mc)||(e=[1,0,0,0,1,0,0,0,1],!Gd(e,oo,lo,uo,Mc))?!1:(Ec.crossVectors(hr,dr),e=[Ec.x,Ec.y,Ec.z],Gd(e,oo,lo,uo,Mc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ca=[new it,new it,new it,new it,new it,new it,new it,new it],Gi=new it,Sc=new fu,oo=new it,lo=new it,uo=new it,hr=new it,dr=new it,Jr=new it,Vl=new it,Mc=new it,Ec=new it,$r=new it;function Gd(o,t,e,i,s){for(let l=0,c=o.length-3;l<=c;l+=3){$r.fromArray(o,l);const f=s.x*Math.abs($r.x)+s.y*Math.abs($r.y)+s.z*Math.abs($r.z),d=t.dot($r),p=e.dot($r),_=i.dot($r);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const NT=new fu,kl=new it,Vd=new it;class yf{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):NT.setFromPoints(t).getCenter(i);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kl.subVectors(t,this.center);const e=kl.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(kl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kl.copy(t.center).add(Vd)),this.expandByPoint(kl.copy(t.center).sub(Vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wa=new it,kd=new it,Tc=new it,pr=new it,Xd=new it,bc=new it,Wd=new it;class Sf{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wa.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,e),wa.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){kd.copy(t).add(e).multiplyScalar(.5),Tc.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(kd);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Tc),f=pr.dot(this.direction),d=-pr.dot(Tc),p=pr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,T;if(_>0)if(g=c*d-f,v=c*f-d,T=l*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v<=-T?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p):v<=T?(g=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+p):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(kd).addScaledVector(Tc,v),y}intersectSphere(t,e){wa.subVectors(t.center,this.origin);const i=wa.dot(this.direction),s=wa.dot(wa)-i*i,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,l,c,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),i>c||l>s||((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,e,i,s,l){Xd.subVectors(e,t),bc.subVectors(i,t),Wd.crossVectors(Xd,bc);let c=this.direction.dot(Wd),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,t);const d=f*this.direction.dot(bc.crossVectors(pr,bc));if(d<0)return null;const p=f*this.direction.dot(Xd.cross(pr));if(p<0||d+p>c)return null;const _=-f*pr.dot(Wd);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,e,i,s,l,c,f,d,p,_,g,v,y,T,M,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,l,c,f,d,p,_,g,v,y,T,M,S)}set(t,e,i,s,l,c,f,d,p,_,g,v,y,T,M,S){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=T,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/co.setFromMatrixColumn(t,0).length(),l=1/co.setFromMatrixColumn(t,1).length(),c=1/co.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,l=t.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(s),p=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,y=c*g,T=f*_,M=f*g;e[0]=d*_,e[4]=-d*g,e[8]=p,e[1]=y+T*p,e[5]=v-M*p,e[9]=-f*d,e[2]=M-v*p,e[6]=T+y*p,e[10]=c*d}else if(t.order==="YXZ"){const v=d*_,y=d*g,T=p*_,M=p*g;e[0]=v+M*f,e[4]=T*f-y,e[8]=c*p,e[1]=c*g,e[5]=c*_,e[9]=-f,e[2]=y*f-T,e[6]=M+v*f,e[10]=c*d}else if(t.order==="ZXY"){const v=d*_,y=d*g,T=p*_,M=p*g;e[0]=v-M*f,e[4]=-c*g,e[8]=T+y*f,e[1]=y+T*f,e[5]=c*_,e[9]=M-v*f,e[2]=-c*p,e[6]=f,e[10]=c*d}else if(t.order==="ZYX"){const v=c*_,y=c*g,T=f*_,M=f*g;e[0]=d*_,e[4]=T*p-y,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=y*p-T,e[2]=-p,e[6]=f*d,e[10]=c*d}else if(t.order==="YZX"){const v=c*d,y=c*p,T=f*d,M=f*p;e[0]=d*_,e[4]=M-v*g,e[8]=T*g+y,e[1]=g,e[5]=c*_,e[9]=-f*_,e[2]=-p*_,e[6]=y*g+T,e[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,y=c*p,T=f*d,M=f*p;e[0]=d*_,e[4]=-g,e[8]=p*_,e[1]=v*g+M,e[5]=c*_,e[9]=y*g-T,e[2]=T*g-y,e[6]=f*_,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PT,t,zT)}lookAt(t,e,i){const s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),mr.crossVectors(i,pi),mr.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),mr.crossVectors(i,pi)),mr.normalize(),Ac.crossVectors(pi,mr),s[0]=mr.x,s[4]=Ac.x,s[8]=pi.x,s[1]=mr.y,s[5]=Ac.y,s[9]=pi.y,s[2]=mr.z,s[6]=Ac.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,l=this.elements,c=i[0],f=i[4],d=i[8],p=i[12],_=i[1],g=i[5],v=i[9],y=i[13],T=i[2],M=i[6],S=i[10],x=i[14],L=i[3],U=i[7],R=i[11],O=i[15],z=s[0],N=s[4],F=s[8],b=s[12],A=s[1],H=s[5],st=s[9],K=s[13],ct=s[2],ut=s[6],X=s[10],$=s[14],W=s[3],xt=s[7],P=s[11],nt=s[15];return l[0]=c*z+f*A+d*ct+p*W,l[4]=c*N+f*H+d*ut+p*xt,l[8]=c*F+f*st+d*X+p*P,l[12]=c*b+f*K+d*$+p*nt,l[1]=_*z+g*A+v*ct+y*W,l[5]=_*N+g*H+v*ut+y*xt,l[9]=_*F+g*st+v*X+y*P,l[13]=_*b+g*K+v*$+y*nt,l[2]=T*z+M*A+S*ct+x*W,l[6]=T*N+M*H+S*ut+x*xt,l[10]=T*F+M*st+S*X+x*P,l[14]=T*b+M*K+S*$+x*nt,l[3]=L*z+U*A+R*ct+O*W,l[7]=L*N+U*H+R*ut+O*xt,l[11]=L*F+U*st+R*X+O*P,l[15]=L*b+U*K+R*$+O*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],M=t[7],S=t[11],x=t[15];return T*(+l*d*g-s*p*g-l*f*v+i*p*v+s*f*y-i*d*y)+M*(+e*d*y-e*p*v+l*c*v-s*c*y+s*p*_-l*d*_)+S*(+e*p*g-e*f*y-l*c*g+i*c*y+l*f*_-i*p*_)+x*(-s*f*_-e*d*g+e*f*v+s*c*g-i*c*v+i*d*_)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],M=t[13],S=t[14],x=t[15],L=g*S*p-M*v*p+M*d*y-f*S*y-g*d*x+f*v*x,U=T*v*p-_*S*p-T*d*y+c*S*y+_*d*x-c*v*x,R=_*M*p-T*g*p+T*f*y-c*M*y-_*f*x+c*g*x,O=T*g*d-_*M*d-T*f*v+c*M*v+_*f*S-c*g*S,z=e*L+i*U+s*R+l*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return t[0]=L*N,t[1]=(M*v*l-g*S*l-M*s*y+i*S*y+g*s*x-i*v*x)*N,t[2]=(f*S*l-M*d*l+M*s*p-i*S*p-f*s*x+i*d*x)*N,t[3]=(g*d*l-f*v*l-g*s*p+i*v*p+f*s*y-i*d*y)*N,t[4]=U*N,t[5]=(_*S*l-T*v*l+T*s*y-e*S*y-_*s*x+e*v*x)*N,t[6]=(T*d*l-c*S*l-T*s*p+e*S*p+c*s*x-e*d*x)*N,t[7]=(c*v*l-_*d*l+_*s*p-e*v*p-c*s*y+e*d*y)*N,t[8]=R*N,t[9]=(T*g*l-_*M*l-T*i*y+e*M*y+_*i*x-e*g*x)*N,t[10]=(c*M*l-T*f*l+T*i*p-e*M*p-c*i*x+e*f*x)*N,t[11]=(_*f*l-c*g*l-_*i*p+e*g*p+c*i*y-e*f*y)*N,t[12]=O*N,t[13]=(_*M*s-T*g*s+T*i*v-e*M*v-_*i*S+e*g*S)*N,t[14]=(T*f*s-c*M*s-T*i*d+e*M*d+c*i*S-e*f*S)*N,t[15]=(c*g*s-_*f*s+_*i*d-e*g*d-c*i*v+e*f*v)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,l=t.z;return e[0]*=i,e[4]*=s,e[8]*=l,e[1]*=i,e[5]*=s,e[9]*=l,e[2]*=i,e[6]*=s,e[10]*=l,e[3]*=i,e[7]*=s,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),l=1-i,c=t.x,f=t.y,d=t.z,p=l*c,_=l*f;return this.set(p*c+i,p*f-s*d,p*d+s*f,0,p*f+s*d,_*f+i,_*d-s*c,0,p*d-s*f,_*d+s*c,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,l,c){return this.set(1,i,l,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,l=e._x,c=e._y,f=e._z,d=e._w,p=l+l,_=c+c,g=f+f,v=l*p,y=l*_,T=l*g,M=c*_,S=c*g,x=f*g,L=d*p,U=d*_,R=d*g,O=i.x,z=i.y,N=i.z;return s[0]=(1-(M+x))*O,s[1]=(y+R)*O,s[2]=(T-U)*O,s[3]=0,s[4]=(y-R)*z,s[5]=(1-(v+x))*z,s[6]=(S+L)*z,s[7]=0,s[8]=(T+U)*N,s[9]=(S-L)*N,s[10]=(1-(v+M))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let l=co.set(s[0],s[1],s[2]).length();const c=co.set(s[4],s[5],s[6]).length(),f=co.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Vi.copy(this);const p=1/l,_=1/c,g=1/f;return Vi.elements[0]*=p,Vi.elements[1]*=p,Vi.elements[2]*=p,Vi.elements[4]*=_,Vi.elements[5]*=_,Vi.elements[6]*=_,Vi.elements[8]*=g,Vi.elements[9]*=g,Vi.elements[10]*=g,e.setFromRotationMatrix(Vi),i.x=l,i.y=c,i.z=f,this}makePerspective(t,e,i,s,l,c,f=Fa){const d=this.elements,p=2*l/(e-t),_=2*l/(i-s),g=(e+t)/(e-t),v=(i+s)/(i-s);let y,T;if(f===Fa)y=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===lf)y=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,l,c,f=Fa){const d=this.elements,p=1/(e-t),_=1/(i-s),g=1/(c-l),v=(e+t)*p,y=(i+s)*_;let T,M;if(f===Fa)T=(c+l)*g,M=-2*g;else if(f===lf)T=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const co=new it,Vi=new en,PT=new it(0,0,0),zT=new it(1,1,1),mr=new it,Ac=new it,pi=new it,Iv=new en,Bv=new Ss;class Va{constructor(t=0,e=0,i=0,s=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],d=s[1],p=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Iv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iv,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IT=0;const Fv=new it,fo=new Ss,Da=new en,Rc=new it,Xl=new it,BT=new it,FT=new Ss,Hv=new it(1,0,0),Gv=new it(0,1,0),Vv=new it(0,0,1),kv={type:"added"},HT={type:"removed"},ho={type:"childadded",child:null},qd={type:"childremoved",child:null};class ni extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=cu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new it,e=new Va,i=new Ss,s=new it(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new en},normalMatrix:{value:new ce}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(Hv,t)}rotateY(t){return this.rotateOnAxis(Gv,t)}rotateZ(t){return this.rotateOnAxis(Vv,t)}translateOnAxis(t,e){return Fv.copy(t).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hv,t)}translateY(t){return this.translateOnAxis(Gv,t)}translateZ(t){return this.translateOnAxis(Vv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rc.copy(t):Rc.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(Xl,Rc,this.up):Da.lookAt(Rc,Xl,this.up),this.quaternion.setFromRotationMatrix(Da),s&&(Da.extractRotation(s.matrixWorld),fo.setFromRotationMatrix(Da),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kv),ho.child=t,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(HT),qd.child=t,this.dispatchEvent(qd),qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kv),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,t,BT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,FT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(e){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),T=c(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),_.length>0&&(i.images=_),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),T.length>0&&(i.nodes=T)}return i.object=s,i;function c(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ni.DEFAULT_UP=new it(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new it,Ua=new it,Yd=new it,La=new it,po=new it,mo=new it,Xv=new it,jd=new it,Zd=new it,Kd=new it,Qd=new sn,Jd=new sn,$d=new sn;class Wi{constructor(t=new it,e=new it,i=new it){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ki.subVectors(t,e),s.cross(ki);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,e,i,s,l){ki.subVectors(s,e),Ua.subVectors(i,e),Yd.subVectors(t,e);const c=ki.dot(ki),f=ki.dot(Ua),d=ki.dot(Yd),p=Ua.dot(Ua),_=Ua.dot(Yd),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(p*d-f*_)*v,T=(c*_-f*d)*v;return l.set(1-y-T,T,y)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(t,e,i,s,l,c,f,d){return this.getBarycoord(t,e,i,s,La)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,La.x),d.addScaledVector(c,La.y),d.addScaledVector(f,La.z),d)}static getInterpolatedAttribute(t,e,i,s,l,c){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(t,e),Jd.fromBufferAttribute(t,i),$d.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Qd,l.x),c.addScaledVector(Jd,l.y),c.addScaledVector($d,l.z),c}static isFrontFacing(t,e,i,s){return ki.subVectors(i,e),Ua.subVectors(t,e),ki.cross(Ua).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),ki.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,l){return Wi.getInterpolation(t,this.a,this.b,this.c,e,i,s,l)}containsPoint(t){return Wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,l=this.c;let c,f;po.subVectors(s,i),mo.subVectors(l,i),jd.subVectors(t,i);const d=po.dot(jd),p=mo.dot(jd);if(d<=0&&p<=0)return e.copy(i);Zd.subVectors(t,s);const _=po.dot(Zd),g=mo.dot(Zd);if(_>=0&&g<=_)return e.copy(s);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return c=d/(d-_),e.copy(i).addScaledVector(po,c);Kd.subVectors(t,l);const y=po.dot(Kd),T=mo.dot(Kd);if(T>=0&&y<=T)return e.copy(l);const M=y*p-d*T;if(M<=0&&p>=0&&T<=0)return f=p/(p-T),e.copy(i).addScaledVector(mo,f);const S=_*T-y*g;if(S<=0&&g-_>=0&&y-T>=0)return Xv.subVectors(l,s),f=(g-_)/(g-_+(y-T)),e.copy(s).addScaledVector(Xv,f);const x=1/(S+M+v);return c=M*x,f=v*x,e.copy(i).addScaledVector(po,c).addScaledVector(mo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function tp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Oe.workingColorSpace){if(t=ET(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=tp(c,l,t+1/3),this.g=tp(c,l,t),this.b=tp(c,l,t-1/3)}return Oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ni){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ni){const i=oy[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ni){return Oe.fromWorkingColorSpace(In.copy(this),t),Math.round(ve(In.r*255,0,255))*65536+Math.round(ve(In.g*255,0,255))*256+Math.round(ve(In.b*255,0,255))}getHexString(t=Ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b,c=Math.max(i,s,l),f=Math.min(i,s,l);let d,p;const _=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case i:d=(s-l)/g+(s<l?6:0);break;case s:d=(l-i)/g+2;break;case l:d=(i-s)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=_,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Ni){Oe.fromWorkingColorSpace(In.copy(this),t);const e=In.r,i=In.g,s=In.b;return t!==Ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+e,_r.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_r),t.getHSL(Cc);const i=Id(_r.h,Cc.h,e),s=Id(_r.s,Cc.s,e),l=Id(_r.l,Cc.l,e);return this.setHSL(i,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*s,this.g=l[1]*e+l[4]*i+l[7]*s,this.b=l[2]*e+l[5]*i+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ne;Ne.NAMES=oy;let GT=0;class hu extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=cu(),this.name="",this.type="Material",this.blending=To,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=Ep,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mp&&(i.blendSrc=this.blendSrc),this.blendDst!==Ep&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(e){const l=s(t.textures),c=s(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Na extends hu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Va,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new it,wc=new he;let VT=0;class sa{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VT++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uv,this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wc.fromBufferAttribute(this,e),wc.applyMatrix3(t),this.setXY(e,wc.x,wc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gl(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gl(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gl(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gl(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,l){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uv&&(t.usage=this.usage),t}}class ly extends sa{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class uy extends sa{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ji extends sa{constructor(t,e,i){super(new Float32Array(t),e,i)}}let kT=0;const Li=new en,ep=new ni,_o=new it,mi=new fu,Wl=new fu,An=new it;class ca extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=cu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ry(t)?uy:ly)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ce().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,e,i){return Li.makeTranslation(t,e,i),this.applyMatrix4(Li),this}scale(t,e,i){return Li.makeScale(t,e,i),this.applyMatrix4(Li),this}lookAt(t){return ep.lookAt(t),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const l=t[s];e.setXYZ(s,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const l=e[i];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];Wl.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(mi.min,Wl.min),mi.expandByPoint(An),An.addVectors(mi.max,Wl.max),mi.expandByPoint(An)):(mi.expandByPoint(Wl.min),mi.expandByPoint(Wl.max))}mi.getCenter(i);let s=0;for(let l=0,c=t.count;l<c;l++)An.fromBufferAttribute(t,l),s=Math.max(s,i.distanceToSquared(An));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)An.fromBufferAttribute(f,p),d&&(_o.fromBufferAttribute(t,p),An.add(_o)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let F=0;F<i.count;F++)f[F]=new it,d[F]=new it;const p=new it,_=new it,g=new it,v=new he,y=new he,T=new he,M=new it,S=new it;function x(F,b,A){p.fromBufferAttribute(i,F),_.fromBufferAttribute(i,b),g.fromBufferAttribute(i,A),v.fromBufferAttribute(l,F),y.fromBufferAttribute(l,b),T.fromBufferAttribute(l,A),_.sub(p),g.sub(p),y.sub(v),T.sub(v);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(H),f[F].add(M),f[b].add(M),f[A].add(M),d[F].add(S),d[b].add(S),d[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let F=0,b=L.length;F<b;++F){const A=L[F],H=A.start,st=A.count;for(let K=H,ct=H+st;K<ct;K+=3)x(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const U=new it,R=new it,O=new it,z=new it;function N(F){O.fromBufferAttribute(s,F),z.copy(O);const b=f[F];U.copy(b),U.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(z,b);const H=R.dot(d[F])<0?-1:1;c.setXYZW(F,U.x,U.y,U.z,H)}for(let F=0,b=L.length;F<b;++F){const A=L[F],H=A.start,st=A.count;for(let K=H,ct=H+st;K<ct;K+=3)N(t.getX(K+0)),N(t.getX(K+1)),N(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sa(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new it,l=new it,c=new it,f=new it,d=new it,p=new it,_=new it,g=new it;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(e,T),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,S),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),p.fromBufferAttribute(i,S),f.add(_),d.add(_),p.add(_),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=e.count;v<y;v+=3)s.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),i.setXYZ(v+0,_.x,_.y,_.z),i.setXYZ(v+1,_.x,_.y,_.z),i.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(f,d){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(d.length*_);let y=0,T=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*_;for(let x=0;x<_;x++)v[T++]=p[y++]}return new sa(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ca,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=t(d,i);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,i);d.push(y)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(s[d]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(e))}const l=t.morphAttributes;for(const p in l){const _=[],g=l[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(e));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wv=new en,ts=new Sf,Dc=new yf,qv=new it,Uc=new it,Lc=new it,Oc=new it,np=new it,Nc=new it,Yv=new it,Pc=new it;class Bn extends ni{constructor(t=new ca,e=new Na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Nc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const _=f[d],g=l[d];_!==0&&(np.fromBufferAttribute(g,t),c?Nc.addScaledVector(np,_):Nc.addScaledVector(np.sub(e),_))}e.add(Nc)}return e}raycast(t,e){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(l),ts.copy(t.ray).recast(t.near),!(Dc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Dc,qv)===null||ts.origin.distanceToSquared(qv)>(t.far-t.near)**2))&&(Wv.copy(l).invert(),ts.copy(t.ray).applyMatrix4(Wv),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=c[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=L,O=U;R<O;R+=3){const z=f.getX(R),N=f.getX(R+1),F=f.getX(R+2);s=zc(this,x,t,i,p,_,g,z,N,F),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const L=f.getX(S),U=f.getX(S+1),R=f.getX(S+2);s=zc(this,c,t,i,p,_,g,L,U,R),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=c[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=L,O=U;R<O;R+=3){const z=R,N=R+1,F=R+2;s=zc(this,x,t,i,p,_,g,z,N,F),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const L=S,U=S+1,R=S+2;s=zc(this,c,t,i,p,_,g,L,U,R),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}}}function XT(o,t,e,i,s,l,c,f){let d;if(t.side===ti?d=i.intersectTriangle(c,l,s,!0,f):d=i.intersectTriangle(s,l,c,t.side===Rr,f),d===null)return null;Pc.copy(f),Pc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Pc);return p<e.near||p>e.far?null:{distance:p,point:Pc.clone(),object:o}}function zc(o,t,e,i,s,l,c,f,d,p){o.getVertexPosition(f,Uc),o.getVertexPosition(d,Lc),o.getVertexPosition(p,Oc);const _=XT(o,t,e,i,Uc,Lc,Oc,Yv);if(_){const g=new it;Wi.getBarycoord(Yv,Uc,Lc,Oc,g),s&&(_.uv=Wi.getInterpolatedAttribute(s,f,d,p,g,new he)),l&&(_.uv1=Wi.getInterpolatedAttribute(l,f,d,p,g,new he)),c&&(_.normal=Wi.getInterpolatedAttribute(c,f,d,p,g,new it),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new it,materialIndex:0};Wi.getNormal(Uc,Lc,Oc,v.normal),_.face=v,_.barycoord=g}return _}class Ms extends ca{constructor(t=1,e=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,i,e,t,c,l,0),T("z","y","x",1,-1,i,e,-t,c,l,1),T("x","z","y",1,1,t,i,e,s,c,2),T("x","z","y",1,-1,t,i,-e,s,c,3),T("x","y","z",1,-1,t,e,i,s,l,4),T("x","y","z",-1,-1,t,e,-i,s,l,5),this.setIndex(d),this.setAttribute("position",new ji(p,3)),this.setAttribute("normal",new ji(_,3)),this.setAttribute("uv",new ji(g,2));function T(M,S,x,L,U,R,O,z,N,F,b){const A=R/N,H=O/F,st=R/2,K=O/2,ct=z/2,ut=N+1,X=F+1;let $=0,W=0;const xt=new it;for(let P=0;P<X;P++){const nt=P*H-K;for(let Et=0;Et<ut;Et++){const Ct=Et*A-st;xt[M]=Ct*L,xt[S]=nt*U,xt[x]=ct,p.push(xt.x,xt.y,xt.z),xt[M]=0,xt[S]=0,xt[x]=z>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(Et/N),g.push(1-P/F),$+=1}}for(let P=0;P<F;P++)for(let nt=0;nt<N;nt++){const Et=v+nt+ut*P,Ct=v+nt+ut*(P+1),Y=v+(nt+1)+ut*(P+1),dt=v+(nt+1)+ut*P;d.push(Et,Ct,dt),d.push(Ct,Y,dt),W+=6}f.addGroup(y,W,b),y+=W,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zo(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const s=o[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qn(o){const t={};for(let e=0;e<o.length;e++){const i=zo(o[e]);for(const s in i)t[s]=i[s]}return t}function WT(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function cy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const qT={clone:zo,merge:qn};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends hu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zo(t.uniforms),this.uniformsGroups=WT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fy extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Fa}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new it,jv=new he,Zv=new he;class Yn extends fy{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=om*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return om*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,e){return this.getViewBounds(t,jv,Zv),e.subVectors(Zv,jv)}setViewOffset(t,e,i,s,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zd*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/d,e-=c.offsetY*i/p,s*=c.width/d,i*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const go=-90,vo=1;class ZT extends ni{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yn(go,vo,t,e);s.layers=this.layers,this.add(s);const l=new Yn(go,vo,t,e);l.layers=this.layers,this.add(l);const c=new Yn(go,vo,t,e);c.layers=this.layers,this.add(c);const f=new Yn(go,vo,t,e);f.layers=this.layers,this.add(f);const d=new Yn(go,vo,t,e);d.layers=this.layers,this.add(d);const p=new Yn(go,vo,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,l,c,f,d]=e;for(const p of e)this.remove(p);if(t===Fa)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===lf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,l),t.setRenderTarget(i,1,s),t.render(e,c),t.setRenderTarget(i,2,s),t.render(e,f),t.setRenderTarget(i,3,s),t.render(e,d),t.setRenderTarget(i,4,s),t.render(e,p),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class hy extends ei{constructor(t,e,i,s,l,c,f,d,p,_){t=t!==void 0?t:[],e=e!==void 0?e:Uo,super(t,e,i,s,l,c,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KT extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hy(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:aa}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Er});l.uniforms.tEquirect.value=e;const c=new Bn(s,l),f=e.minFilter;return e.minFilter===ds&&(e.minFilter=aa),new ZT(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,s){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,s);t.setRenderTarget(l)}}class Ic extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,i),x=this._getHandJoint(p,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&v>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ic;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class JT extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Va,this.environmentIntensity=1,this.environmentRotation=new Va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ap=new it,$T=new it,tb=new ce;class vr{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ap.subVectors(i,e).cross($T.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ap),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tb.getNormalMatrix(t),s=this.coplanarPoint(ap).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new yf,Bc=new it;class dy{constructor(t=new vr,e=new vr,i=new vr,s=new vr,l=new vr,c=new vr){this.planes=[t,e,i,s,l,c]}set(t,e,i,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fa){const i=this.planes,s=t.elements,l=s[0],c=s[1],f=s[2],d=s[3],p=s[4],_=s[5],g=s[6],v=s[7],y=s[8],T=s[9],M=s[10],S=s[11],x=s[12],L=s[13],U=s[14],R=s[15];if(i[0].setComponents(d-l,v-p,S-y,R-x).normalize(),i[1].setComponents(d+l,v+p,S+y,R+x).normalize(),i[2].setComponents(d+c,v+_,S+T,R+L).normalize(),i[3].setComponents(d-c,v-_,S-T,R-L).normalize(),i[4].setComponents(d-f,v-g,S-M,R-U).normalize(),e===Fa)i[5].setComponents(d+f,v+g,S+M,R+U).normalize();else if(e===lf)i[5].setComponents(f,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bc.x=s.normal.x>0?t.max.x:t.min.x,Bc.y=s.normal.y>0?t.max.y:t.min.y,Bc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class py extends hu{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cf=new it,ff=new it,Kv=new en,ql=new Sf,Fc=new yf,rp=new it,Qv=new it;class eb extends ni{constructor(t=new ca,e=new py){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,l=e.count;s<l;s++)cf.fromBufferAttribute(e,s-1),ff.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=cf.distanceTo(ff);t.setAttribute("lineDistance",new ji(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=l,t.ray.intersectsSphere(Fc)===!1)return;Kv.copy(s).invert(),ql.copy(t.ray).applyMatrix4(Kv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const y=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let M=y,S=T-1;M<S;M+=p){const x=_.getX(M),L=_.getX(M+1),U=Hc(this,t,ql,d,x,L,M);U&&e.push(U)}if(this.isLineLoop){const M=_.getX(T-1),S=_.getX(y),x=Hc(this,t,ql,d,M,S,T-1);x&&e.push(x)}}else{const y=Math.max(0,c.start),T=Math.min(v.count,c.start+c.count);for(let M=y,S=T-1;M<S;M+=p){const x=Hc(this,t,ql,d,M,M+1,M);x&&e.push(x)}if(this.isLineLoop){const M=Hc(this,t,ql,d,T-1,y,T-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Hc(o,t,e,i,s,l,c){const f=o.geometry.attributes.position;if(cf.fromBufferAttribute(f,s),ff.fromBufferAttribute(f,l),e.distanceSqToSegment(cf,ff,rp,Qv)>i)return;rp.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(rp);if(!(p<t.near||p>t.far))return{distance:p,point:Qv.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}class my extends ei{constructor(t,e,i,s,l,c,f,d,p,_=bo){if(_!==bo&&_!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&_===bo&&(i=xs),i===void 0&&_===No&&(i=Oo),super(null,s,l,c,f,d,_,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=f!==void 0?f:Yi,this.minFilter=d!==void 0?d:Yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Om(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cs extends ca{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const l=[],c=[],f=[],d=[],p=new it,_=new he;c.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=e;g++,v+=3){const y=i+g/e*s;p.x=t*Math.cos(y),p.y=t*Math.sin(y),c.push(p.x,p.y,p.z),f.push(0,0,1),_.x=(c[v]/t+1)/2,_.y=(c[v+1]/t+1)/2,d.push(_.x,_.y)}for(let g=1;g<=e;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new ji(c,3)),this.setAttribute("normal",new ji(f,3)),this.setAttribute("uv",new ji(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mf extends ca{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const l=t/2,c=e/2,f=Math.floor(i),d=Math.floor(s),p=f+1,_=d+1,g=t/f,v=e/d,y=[],T=[],M=[],S=[];for(let x=0;x<_;x++){const L=x*v-c;for(let U=0;U<p;U++){const R=U*g-l;T.push(R,-L,0),M.push(0,0,1),S.push(U/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const U=L+p*x,R=L+p*(x+1),O=L+1+p*(x+1),z=L+1+p*x;y.push(U,R,z),y.push(R,O,z)}this.setIndex(y),this.setAttribute("position",new ji(T,3)),this.setAttribute("normal",new ji(M,3)),this.setAttribute("uv",new ji(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mf(t.width,t.height,t.widthSegments,t.heightSegments)}}class nb extends hu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ib extends hu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $c extends fy{constructor(t=-1,e=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-t,c=i+t,f=s+e,d=s-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ab extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Jv=new en;class rb{constructor(t,e,i=0,s=1/0){this.ray=new Sf(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Nm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jv),this}intersectObject(t,e=!0,i=[]){return lm(t,this,i,e),i.sort($v),i}intersectObjects(t,e=!0,i=[]){for(let s=0,l=t.length;s<l;s++)lm(t[s],this,i,e);return i.sort($v),i}}function $v(o,t){return o.distance-t.distance}function lm(o,t,e,i){let s=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const l=o.children;for(let c=0,f=l.length;c<f;c++)lm(l[c],t,e,!0)}}class tx{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function ex(o,t,e,i){const s=sb(i);switch(e){case Qx:return o*t;case $x:return o*t;case ty:return o*t*2;case ey:return o*t/s.components*s.byteLength;case Dm:return o*t/s.components*s.byteLength;case ny:return o*t*2/s.components*s.byteLength;case Um:return o*t*2/s.components*s.byteLength;case Jx:return o*t*3/s.components*s.byteLength;case qi:return o*t*4/s.components*s.byteLength;case Lm:return o*t*4/s.components*s.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zp:case Bp:return Math.max(o,16)*Math.max(t,8)/4;case Pp:case Ip:return Math.max(o,8)*Math.max(t,8)/2;case Fp:case Hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Gp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Xp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Kp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case tm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case em:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Jc:case nm:case im:return Math.ceil(o/4)*Math.ceil(t/4)*16;case iy:case am:return Math.ceil(o/4)*Math.ceil(t/4)*8;case rm:case sm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sb(o){switch(o){case Ga:case jx:return{byteLength:1,components:1};case eu:case Zx:case uu:return{byteLength:2,components:1};case Cm:case wm:return{byteLength:2,components:4};case xs:case Rm:case Ba:return{byteLength:4,components:1};case Kx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _y(){let o=null,t=!1,e=null,i=null;function s(l,c){e(l,c),i=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function ob(o){const t=new WeakMap;function e(f,d){const p=f.array,_=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,p){const _=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],M=g[y];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const M=g[y];o.bufferSubData(p,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,d),p.version=f.version}}return{get:s,remove:l,update:c}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_A=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:lb,alphahash_pars_fragment:ub,alphamap_fragment:cb,alphamap_pars_fragment:fb,alphatest_fragment:hb,alphatest_pars_fragment:db,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:_b,batching_vertex:gb,begin_vertex:vb,beginnormal_vertex:xb,bsdfs:yb,iridescence_fragment:Sb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Nb,displacementmap_vertex:Pb,emissivemap_fragment:zb,emissivemap_pars_fragment:Ib,colorspace_fragment:Bb,colorspace_pars_fragment:Fb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:t1,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:e1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:r1,lights_physical_pars_fragment:s1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:u1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:d1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:_1,map_particle_pars_fragment:g1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:T1,normal_fragment_begin:b1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:w1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:N1,opaque_fragment:P1,packing:z1,premultiplied_alpha_fragment:I1,project_vertex:B1,dithering_fragment:F1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:X1,shadowmap_vertex:W1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:j1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:Q1,specularmap_pars_fragment:J1,tonemapping_fragment:$1,tonemapping_pars_fragment:tA,transmission_fragment:eA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:aA,uv_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:lA,backgroundCube_vert:uA,backgroundCube_frag:cA,cube_vert:fA,cube_frag:hA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:_A,equirect_vert:gA,equirect_frag:vA,linedashed_vert:xA,linedashed_frag:yA,meshbasic_vert:SA,meshbasic_frag:MA,meshlambert_vert:EA,meshlambert_frag:TA,meshmatcap_vert:bA,meshmatcap_frag:AA,meshnormal_vert:RA,meshnormal_frag:CA,meshphong_vert:wA,meshphong_frag:DA,meshphysical_vert:UA,meshphysical_frag:LA,meshtoon_vert:OA,meshtoon_frag:NA,points_vert:PA,points_frag:zA,shadow_vert:IA,shadow_frag:BA,sprite_vert:FA,sprite_frag:HA},Pt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},na={basic:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:qn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:qn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:qn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:qn([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:qn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:qn([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:qn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:qn([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:qn([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:qn([Pt.lights,Pt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};na.physical={uniforms:qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Gc={r:0,b:0,g:0},ns=new Va,GA=new en;function VA(o,t,e,i,s,l,c){const f=new Ne(0);let d=l===!0?0:1,p,_,g=null,v=0,y=null;function T(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function M(U){let R=!1;const O=T(U);O===null?x(f,d):O&&O.isColor&&(x(O,1),R=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,R){const O=T(R);O&&(O.isCubeTexture||O.mapping===xf)?(_===void 0&&(_=new Bn(new Ms(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:zo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),ns.copy(R.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(GA.makeRotationFromEuler(ns)),_.material.toneMapped=Oe.getTransfer(O.colorSpace)!==Be,(g!==O||v!==O.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Bn(new Mf(2,2),new Cr({name:"BackgroundMaterial",uniforms:zo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(O.colorSpace)!==Be,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,R){U.getRGB(Gc,cy(o)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,R,c)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,R=1){f.set(U),d=R,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,x(f,d)},render:M,addToRenderList:S,dispose:L}}function kA(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let l=s,c=!1;function f(A,H,st,K,ct){let ut=!1;const X=g(K,st,H);l!==X&&(l=X,p(l.object)),ut=y(A,K,st,ct),ut&&T(A,K,st,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(ut||c)&&(c=!1,R(A,H,st,K),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function d(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function g(A,H,st){const K=st.wireframe===!0;let ct=i[A.id];ct===void 0&&(ct={},i[A.id]=ct);let ut=ct[H.id];ut===void 0&&(ut={},ct[H.id]=ut);let X=ut[K];return X===void 0&&(X=v(d()),ut[K]=X),X}function v(A){const H=[],st=[],K=[];for(let ct=0;ct<e;ct++)H[ct]=0,st[ct]=0,K[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:K,object:A,attributes:{},index:null}}function y(A,H,st,K){const ct=l.attributes,ut=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){const P=ct[W];let nt=ut[W];if(nt===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),P===void 0||P.attribute!==nt||nt&&P.data!==nt.data)return!0;X++}return l.attributesNum!==X||l.index!==K}function T(A,H,st,K){const ct={},ut=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){let P=ut[W];P===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(P=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(P=A.instanceColor));const nt={};nt.attribute=P,P&&P.data&&(nt.data=P.data),ct[W]=nt,X++}l.attributes=ct,l.attributesNum=X,l.index=K}function M(){const A=l.newAttributes;for(let H=0,st=A.length;H<st;H++)A[H]=0}function S(A){x(A,0)}function x(A,H){const st=l.newAttributes,K=l.enabledAttributes,ct=l.attributeDivisors;st[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ct[A]!==H&&(o.vertexAttribDivisor(A,H),ct[A]=H)}function L(){const A=l.newAttributes,H=l.enabledAttributes;for(let st=0,K=H.length;st<K;st++)H[st]!==A[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function U(A,H,st,K,ct,ut,X){X===!0?o.vertexAttribIPointer(A,H,st,ct,ut):o.vertexAttribPointer(A,H,st,K,ct,ut)}function R(A,H,st,K){M();const ct=K.attributes,ut=st.getAttributes(),X=H.defaultAttributeValues;for(const $ in ut){const W=ut[$];if(W.location>=0){let xt=ct[$];if(xt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const P=xt.normalized,nt=xt.itemSize,Et=t.get(xt);if(Et===void 0)continue;const Ct=Et.buffer,Y=Et.type,dt=Et.bytesPerElement,St=Y===o.INT||Y===o.UNSIGNED_INT||xt.gpuType===Rm;if(xt.isInterleavedBufferAttribute){const Rt=xt.data,wt=Rt.stride,Jt=xt.offset;if(Rt.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)x(W.location+zt,Rt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let zt=0;zt<W.locationSize;zt++)S(W.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let zt=0;zt<W.locationSize;zt++)U(W.location+zt,nt/W.locationSize,Y,P,wt*dt,(Jt+nt/W.locationSize*zt)*dt,St)}else{if(xt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)x(W.location+Rt,xt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)S(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let Rt=0;Rt<W.locationSize;Rt++)U(W.location+Rt,nt/W.locationSize,Y,P,nt*dt,nt/W.locationSize*Rt*dt,St)}}else if(X!==void 0){const P=X[$];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(W.location,P);break;case 3:o.vertexAttrib3fv(W.location,P);break;case 4:o.vertexAttrib4fv(W.location,P);break;default:o.vertexAttrib1fv(W.location,P)}}}}L()}function O(){F();for(const A in i){const H=i[A];for(const st in H){const K=H[st];for(const ct in K)_(K[ct].object),delete K[ct];delete H[st]}delete i[A]}}function z(A){if(i[A.id]===void 0)return;const H=i[A.id];for(const st in H){const K=H[st];for(const ct in K)_(K[ct].object),delete K[ct];delete H[st]}delete i[A.id]}function N(A){for(const H in i){const st=i[H];if(st[A.id]===void 0)continue;const K=st[A.id];for(const ct in K)_(K[ct].object),delete K[ct];delete st[A.id]}}function F(){b(),c=!0,l!==s&&(l=s,p(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function XA(o,t,e){let i;function s(p){i=p}function l(p,_){o.drawArrays(i,p,_),e.update(_,i,1)}function c(p,_,g){g!==0&&(o.drawArraysInstanced(i,p,_,g),e.update(_,i,g))}function f(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];e.update(y,i,1)}function d(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)c(p[T],_[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(i,p,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M]*v[M];e.update(T,i,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function WA(o,t,e,i){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==qi&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const F=N===uu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ga&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ba&&!F)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:O,maxSamples:z}}function qA(o){const t=this;let e=null,i=0,s=!1,l=!1;const c=new vr,f=new ce,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||i!==0||s;return s=v,i=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||T===null||T.length===0||l&&!S)l?_(null):p();else{const L=l?0:i,U=L*4;let R=x.clippingState||null;d.value=R,R=_(T,v,U,y);for(let O=0;O!==U;++O)R[O]=e[O];x.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(g,v,y,T){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,T!==!0||S===null){const x=y+M*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,R=y;U!==M;++U,R+=4)c.copy(g[U]).applyMatrix4(L,f),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function YA(o){let t=new WeakMap;function e(c,f){return f===Up?c.mapping=Uo:f===Lp&&(c.mapping=Lo),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===Up||f===Lp)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new KT(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",s),e(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const So=4,nx=[.125,.215,.35,.446,.526,.582],fs=20,sp=new $c,ix=new Ne;let op=null,lp=0,up=0,cp=!1;const os=(1+Math.sqrt(5))/2,xo=1/os,ax=[new it(-os,xo,0),new it(os,xo,0),new it(-xo,0,os),new it(xo,0,os),new it(0,os,-xo),new it(0,os,xo),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],jA=new it;class rx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,l={}){const{size:c=256,position:f=jA}=l;op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,s,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(op,lp,up),this._renderer.xr.enabled=cp,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Uo||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:aa,minFilter:aa,generateMipmaps:!1,type:uu,format:qi,colorSpace:Po,depthBuffer:!1},s=sx(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(l)),this._blurMaterial=KA(l,t,e)}return s}_compileMaterial(t){const e=new Bn(this._lodPlanes[0],t);this._renderer.compile(e,sp)}_sceneToCubeUV(t,e,i,s,l){const d=new Yn(90,1,e,i),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(ix),g.toneMapping=Tr,g.autoClear=!1;const T=new Na({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),M=new Bn(new Ms,T);let S=!1;const x=t.background;x?x.isColor&&(T.color.copy(x),t.background=null,S=!0):(T.color.copy(ix),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+_[L],l.y,l.z)):U===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+_[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+_[L]));const R=this._cubeSize;Vc(s,U*R,L>2?R:0,R,R),g.setRenderTarget(s),S&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Uo||t.mapping===Lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Bn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Vc(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,sp)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ax[(s-l-1)%ax.length];this._blur(t,l-1,l,c,f)}e.autoClear=i}_blur(t,e,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,s,"latitudinal",l),this._halfBlur(c,t,i,i,s,"longitudinal",l)}_halfBlur(t,e,i,s,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Bn(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[i]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*fs-1),M=l/T,S=isFinite(l)?1+Math.floor(_*M):fs;S>fs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fs}`);const x=[];let L=0;for(let N=0;N<fs;++N){const F=N/M,b=Math.exp(-F*F/2);x.push(b),N===0?L+=b:N<S&&(L+=2*b)}for(let N=0;N<x.length;N++)x[N]=x[N]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-i;const R=this._sizeLods[s],O=3*R*(s>U-So?s-U+So:0),z=4*(this._cubeSize-R);Vc(e,O,z,3*R,2*R),d.setRenderTarget(e),d.render(g,sp)}}function ZA(o){const t=[],e=[],i=[];let s=o;const l=o-So+1+nx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);let d=1/f;c>o-So?d=nx[c-o+So-1]:c===0&&(d=0),i.push(d);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,M=3,S=2,x=1,L=new Float32Array(M*T*y),U=new Float32Array(S*T*y),R=new Float32Array(x*T*y);for(let z=0;z<y;z++){const N=z%3*2/3-1,F=z>2?0:-1,b=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];L.set(b,M*T*z),U.set(v,S*T*z);const A=[z,z,z,z,z,z];R.set(A,x*T*z)}const O=new ca;O.setAttribute("position",new sa(L,M)),O.setAttribute("uv",new sa(U,S)),O.setAttribute("faceIndex",new sa(R,x)),t.push(O),s>So&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sx(o,t,e){const i=new ys(o,t,e);return i.texture.mapping=xf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(o,t,e,i,s){o.viewport.set(t,e,i,s),o.scissor.set(t,e,i,s)}function KA(o,t,e){const i=new Float32Array(fs),s=new it(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function ox(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function lx(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Pm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QA(o){let t=new WeakMap,e=null;function i(f){if(f&&f.isTexture){const d=f.mapping,p=d===Up||d===Lp,_=d===Uo||d===Lo;if(p||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new rx(o)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&s(y)?(e===null&&(e=new rx(o)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function JA(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $A(o,t,e,i){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,e.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,T=g.attributes.position;let M=0;if(y!==null){const L=y.array;M=y.version;for(let U=0,R=L.length;U<R;U+=3){const O=L[U+0],z=L[U+1],N=L[U+2];v.push(O,z,z,N,N,O)}}else if(T!==void 0){const L=T.array;M=T.version;for(let U=0,R=L.length/3-1;U<R;U+=3){const O=U+0,z=U+1,N=U+2;v.push(O,z,z,N,N,O)}}else return;const S=new(ry(v)?uy:ly)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function tR(o,t,e){let i;function s(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,y){o.drawElements(i,y,l,v*c),e.update(y,i,1)}function p(v,y,T){T!==0&&(o.drawElementsInstanced(i,y,l,v*c,T),e.update(y,i,T))}function _(v,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,v,0,T);let S=0;for(let x=0;x<T;x++)S+=y[x];e.update(S,i,1)}function g(v,y,T,M){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,l,v,0,M,0,T);let x=0;for(let L=0;L<T;L++)x+=y[L]*M[L];e.update(x,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function eR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nR(o,t,e){const i=new WeakMap,s=new sn;function l(c,f,d){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let A=function(){F.dispose(),i.delete(f),f.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let O=f.attributes.position.count*R,z=1;O>t.maxTextureSize&&(z=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*z*4*g),F=new sy(N,O,z,g);F.type=Ba,F.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const st=x[H],K=L[H],ct=U[H],ut=O*z*4*H;for(let X=0;X<st.count;X++){const $=X*b;T===!0&&(s.fromBufferAttribute(st,X),N[ut+$+0]=s.x,N[ut+$+1]=s.y,N[ut+$+2]=s.z,N[ut+$+3]=0),M===!0&&(s.fromBufferAttribute(K,X),N[ut+$+4]=s.x,N[ut+$+5]=s.y,N[ut+$+6]=s.z,N[ut+$+7]=0),S===!0&&(s.fromBufferAttribute(ct,X),N[ut+$+8]=s.x,N[ut+$+9]=s.y,N[ut+$+10]=s.z,N[ut+$+11]=ct.itemSize===4?s.w:1)}}v={count:g,texture:F,size:new he(O,z)},i.set(f,v),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const M=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function iR(o,t,e,i){let s=new WeakMap;function l(d){const p=i.render.frame,_=d.geometry,g=t.get(d,_);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:c}}const gy=new ei,ux=new my(1,1),vy=new sy,xy=new OT,yy=new hy,cx=[],fx=[],hx=new Float32Array(16),dx=new Float32Array(9),px=new Float32Array(4);function Xo(o,t,e){const i=o[0];if(i<=0||i>0)return o;const s=t*e;let l=cx[s];if(l===void 0&&(l=new Float32Array(s),cx[s]=l),t!==0){i.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,o[c].toArray(l,f)}return l}function yn(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Sn(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Ef(o,t){let e=fx[t];e===void 0&&(e=new Int32Array(t),fx[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function aR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function rR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;o.uniform2fv(this.addr,t),Sn(e,t)}}function sR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(yn(e,t))return;o.uniform3fv(this.addr,t),Sn(e,t)}}function oR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;o.uniform4fv(this.addr,t),Sn(e,t)}}function lR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(yn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(e,t)}else{if(yn(e,i))return;px.set(i),o.uniformMatrix2fv(this.addr,!1,px),Sn(e,i)}}function uR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(yn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(e,t)}else{if(yn(e,i))return;dx.set(i),o.uniformMatrix3fv(this.addr,!1,dx),Sn(e,i)}}function cR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(yn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(e,t)}else{if(yn(e,i))return;hx.set(i),o.uniformMatrix4fv(this.addr,!1,hx),Sn(e,i)}}function fR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function hR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;o.uniform2iv(this.addr,t),Sn(e,t)}}function dR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;o.uniform3iv(this.addr,t),Sn(e,t)}}function pR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;o.uniform4iv(this.addr,t),Sn(e,t)}}function mR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function _R(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;o.uniform2uiv(this.addr,t),Sn(e,t)}}function gR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;o.uniform3uiv(this.addr,t),Sn(e,t)}}function vR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;o.uniform4uiv(this.addr,t),Sn(e,t)}}function xR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(ux.compareFunction=ay,l=ux):l=gy,e.setTexture2D(t||l,s)}function yR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xy,s)}function SR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yy,s)}function MR(o,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vy,s)}function ER(o){switch(o){case 5126:return aR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return lR;case 35675:return uR;case 35676:return cR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return dR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return _R;case 36295:return gR;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return SR;case 36289:case 36303:case 36311:case 36292:return MR}}function TR(o,t){o.uniform1fv(this.addr,t)}function bR(o,t){const e=Xo(t,this.size,2);o.uniform2fv(this.addr,e)}function AR(o,t){const e=Xo(t,this.size,3);o.uniform3fv(this.addr,e)}function RR(o,t){const e=Xo(t,this.size,4);o.uniform4fv(this.addr,e)}function CR(o,t){const e=Xo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function wR(o,t){const e=Xo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function DR(o,t){const e=Xo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function UR(o,t){o.uniform1iv(this.addr,t)}function LR(o,t){o.uniform2iv(this.addr,t)}function OR(o,t){o.uniform3iv(this.addr,t)}function NR(o,t){o.uniform4iv(this.addr,t)}function PR(o,t){o.uniform1uiv(this.addr,t)}function zR(o,t){o.uniform2uiv(this.addr,t)}function IR(o,t){o.uniform3uiv(this.addr,t)}function BR(o,t){o.uniform4uiv(this.addr,t)}function FR(o,t,e){const i=this.cache,s=t.length,l=Ef(e,s);yn(i,l)||(o.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==s;++c)e.setTexture2D(t[c]||gy,l[c])}function HR(o,t,e){const i=this.cache,s=t.length,l=Ef(e,s);yn(i,l)||(o.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||xy,l[c])}function GR(o,t,e){const i=this.cache,s=t.length,l=Ef(e,s);yn(i,l)||(o.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||yy,l[c])}function VR(o,t,e){const i=this.cache,s=t.length,l=Ef(e,s);yn(i,l)||(o.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||vy,l[c])}function kR(o){switch(o){case 5126:return TR;case 35664:return bR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return OR;case 35669:case 35673:return NR;case 5125:return PR;case 36294:return zR;case 36295:return IR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return VR}}class XR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ER(e.type)}}class WR{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kR(e.type)}}class qR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,e[f.id],i)}}}const fp=/(\w+)(\])?(\[|\.)?/g;function mx(o,t){o.seq.push(t),o.map[t.id]=t}function YR(o,t,e){const i=o.name,s=i.length;for(fp.lastIndex=0;;){const l=fp.exec(i),c=fp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){mx(e,p===void 0?new XR(f,o,t):new WR(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new qR(f),mx(e,g)),e=g}}}class tf{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=t.getActiveUniform(e,s),c=t.getUniformLocation(e,l.name);YR(l,c,this)}}setValue(t,e,i,s){const l=this.map[e];l!==void 0&&l.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let l=0,c=e.length;l!==c;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in e&&i.push(c)}return i}}function _x(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const jR=37297;let ZR=0;function KR(o,t){const e=o.split(`
`),i=[],s=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=s;c<l;c++){const f=c+1;i.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return i.join(`
`)}const gx=new ce;function QR(o){Oe._getMatrix(gx,Oe.workingColorSpace,o);const t=`mat3( ${gx.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(o)){case of:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function vx(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(i&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+s+`

`+KR(o.getShaderSource(t),c)}else return s}function JR(o,t){const e=QR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $R(o,t){let e;switch(t){case aT:e="Linear";break;case rT:e="Reinhard";break;case sT:e="Cineon";break;case oT:e="ACESFilmic";break;case uT:e="AgX";break;case cT:e="Neutral";break;case lT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kc=new it;function tC(){Oe.getLuminanceCoefficients(kc);const o=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jl).join(`
`)}function nC(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iC(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return e}function jl(o){return o!==""}function xx(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(o){return o.replace(aC,sC)}const rC=new Map;function sC(o,t){let e=fe[t];if(e===void 0){const i=rC.get(t);if(i!==void 0)e=fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return um(e)}const oC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(o){return o.replace(oC,lC)}function lC(o,t,e,i){let s="";for(let l=parseInt(t);l<parseInt(e);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Mx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function uC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Wx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===IE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(t="SHADOWMAP_TYPE_VSM"),t}function cC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Uo:case Lo:t="ENVMAP_TYPE_CUBE";break;case xf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Lo:t="ENVMAP_MODE_REFRACTION";break}return t}function hC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qx:t="ENVMAP_BLENDING_MULTIPLY";break;case nT:t="ENVMAP_BLENDING_MIX";break;case iT:t="ENVMAP_BLENDING_ADD";break}return t}function dC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function pC(o,t,e,i){const s=o.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const d=uC(e),p=cC(e),_=fC(e),g=hC(e),v=dC(e),y=eC(e),T=nC(l),M=s.createProgram();let S,x,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(jl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(jl).join(`
`),x.length>0&&(x+=`
`)):(S=[Mx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),x=[Mx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tr?"#define TONE_MAPPING":"",e.toneMapping!==Tr?fe.tonemapping_pars_fragment:"",e.toneMapping!==Tr?$R("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,JR("linearToOutputTexel",e.outputColorSpace),tC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jl).join(`
`)),c=um(c),c=xx(c,e),c=yx(c,e),f=um(f),f=xx(f,e),f=yx(f,e),c=Sx(c),f=Sx(f),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+S+c,R=L+x+f,O=_x(s,s.VERTEX_SHADER,U),z=_x(s,s.FRAGMENT_SHADER,R);s.attachShader(M,O),s.attachShader(M,z),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(H){if(o.debug.checkShaderErrors){const st=s.getProgramInfoLog(M).trim(),K=s.getShaderInfoLog(O).trim(),ct=s.getShaderInfoLog(z).trim();let ut=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,O,z);else{const $=vx(s,O,"vertex"),W=vx(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+$+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(K===""||ct==="")&&(X=!1);X&&(H.diagnostics={runnable:ut,programLog:st,vertexShader:{log:K,prefix:S},fragmentShader:{log:ct,prefix:x}})}s.deleteShader(O),s.deleteShader(z),F=new tf(s,M),b=iC(s,M)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,jR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=z,this}let mC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gC(t),e.set(t,i)),i}}class gC{constructor(t){this.id=mC++,this.code=t,this.usedTimes=0}}function vC(o,t,e,i,s,l,c){const f=new Nm,d=new _C,p=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function S(b,A,H,st,K){const ct=st.fog,ut=K.geometry,X=b.isMeshStandardMaterial?st.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),W=$&&$.mapping===xf?$.image.height:null,xt=T[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const P=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,nt=P!==void 0?P.length:0;let Et=0;ut.morphAttributes.position!==void 0&&(Et=1),ut.morphAttributes.normal!==void 0&&(Et=2),ut.morphAttributes.color!==void 0&&(Et=3);let Ct,Y,dt,St;if(xt){const me=na[xt];Ct=me.vertexShader,Y=me.fragmentShader}else Ct=b.vertexShader,Y=b.fragmentShader,d.update(b),dt=d.getVertexShaderID(b),St=d.getFragmentShaderID(b);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Jt=K.isInstancedMesh===!0,zt=K.isBatchedMesh===!0,Te=!!b.map,Ce=!!b.matcap,ae=!!$,V=!!b.aoMap,pn=!!b.lightMap,oe=!!b.bumpMap,le=!!b.normalMap,Wt=!!b.displacementMap,we=!!b.emissiveMap,qt=!!b.metalnessMap,I=!!b.roughnessMap,C=b.anisotropy>0,at=b.clearcoat>0,pt=b.dispersion>0,Mt=b.iridescence>0,gt=b.sheen>0,kt=b.transmission>0,Dt=C&&!!b.anisotropyMap,Ht=at&&!!b.clearcoatMap,pe=at&&!!b.clearcoatNormalMap,At=at&&!!b.clearcoatRoughnessMap,Gt=Mt&&!!b.iridescenceMap,Kt=Mt&&!!b.iridescenceThicknessMap,Xt=gt&&!!b.sheenColorMap,Ft=gt&&!!b.sheenRoughnessMap,k=!!b.specularMap,ft=!!b.specularColorMap,Nt=!!b.specularIntensityMap,G=kt&&!!b.transmissionMap,bt=kt&&!!b.thicknessMap,lt=!!b.gradientMap,_t=!!b.alphaMap,Lt=b.alphaTest>0,Ot=!!b.alphaHash,jt=!!b.extensions;let be=Tr;b.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(be=o.toneMapping);const ke={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:Ct,fragmentShader:Y,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:zt,batchingColor:zt&&K._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&K.instanceColor!==null,instancingMorph:Jt&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Po,alphaToCoverage:!!b.alphaToCoverage,map:Te,matcap:Ce,envMap:ae,envMapMode:ae&&$.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:pn,bumpMap:oe,normalMap:le,displacementMap:v&&Wt,emissiveMap:we,normalMapObjectSpace:le&&b.normalMapType===mT,normalMapTangentSpace:le&&b.normalMapType===pT,metalnessMap:qt,roughnessMap:I,anisotropy:C,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Ht,clearcoatNormalMap:pe,clearcoatRoughnessMap:At,dispersion:pt,iridescence:Mt,iridescenceMap:Gt,iridescenceThicknessMap:Kt,sheen:gt,sheenColorMap:Xt,sheenRoughnessMap:Ft,specularMap:k,specularColorMap:ft,specularIntensityMap:Nt,transmission:kt,transmissionMap:G,thicknessMap:bt,gradientMap:lt,opaque:b.transparent===!1&&b.blending===To&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:Ot,combine:b.combine,mapUv:Te&&M(b.map.channel),aoMapUv:V&&M(b.aoMap.channel),lightMapUv:pn&&M(b.lightMap.channel),bumpMapUv:oe&&M(b.bumpMap.channel),normalMapUv:le&&M(b.normalMap.channel),displacementMapUv:Wt&&M(b.displacementMap.channel),emissiveMapUv:we&&M(b.emissiveMap.channel),metalnessMapUv:qt&&M(b.metalnessMap.channel),roughnessMapUv:I&&M(b.roughnessMap.channel),anisotropyMapUv:Dt&&M(b.anisotropyMap.channel),clearcoatMapUv:Ht&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(b.sheenRoughnessMap.channel),specularMapUv:k&&M(b.specularMap.channel),specularColorMapUv:ft&&M(b.specularColorMap.channel),specularIntensityMapUv:Nt&&M(b.specularIntensityMap.channel),transmissionMapUv:G&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:_t&&M(b.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(le||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ut.attributes.uv&&(Te||_t),fog:!!ct,useFog:b.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:wt,skinning:K.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:be,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&Oe.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ia,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:jt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&b.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=p.has(1),ke.vertexUv2s=p.has(2),ke.vertexUv3s=p.has(3),p.clear(),ke}function x(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(L(A,b),U(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function L(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function U(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=T[b.type];let H;if(A){const st=na[A];H=qT.clone(st.uniforms)}else H=b.uniforms;return H}function O(b,A){let H;for(let st=0,K=_.length;st<K;st++){const ct=_[st];if(ct.cacheKey===A){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new pC(o,A,b,l),_.push(H)),H}function z(b){if(--b.usedTimes===0){const A=_.indexOf(b);_[A]=_[_.length-1],_.pop(),b.destroy()}}function N(b){d.remove(b)}function F(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:O,releaseProgram:z,releaseShaderCache:N,programs:_,dispose:F}}function xC(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:l}}function yC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ex(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Tx(){const o=[];let t=0;const e=[],i=[],s=[];function l(){t=0,e.length=0,i.length=0,s.length=0}function c(g,v,y,T,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,T,M,S){const x=c(g,v,y,T,M,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):e.push(x)}function d(g,v,y,T,M,S){const x=c(g,v,y,T,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):e.unshift(x)}function p(g,v){e.length>1&&e.sort(g||yC),i.length>1&&i.sort(v||Ex),s.length>1&&s.sort(v||Ex)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:s,init:l,push:f,unshift:d,finish:_,sort:p}}function SC(){let o=new WeakMap;function t(i,s){const l=o.get(i);let c;return l===void 0?(c=new Tx,o.set(i,[c])):s>=l.length?(c=new Tx,l.push(c)):c=l[s],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function MC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new Ne};break;case"SpotLight":e={position:new it,direction:new it,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":e={color:new Ne,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=e,e}}}function EC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let TC=0;function bC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function AC(o){const t=new MC,e=EC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new it);const s=new it,l=new en,c=new en;function f(p){let _=0,g=0,v=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let y=0,T=0,M=0,S=0,x=0,L=0,U=0,R=0,O=0,z=0,N=0;p.sort(bC);for(let b=0,A=p.length;b<A;b++){const H=p[b],st=H.color,K=H.intensity,ct=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=st.r*K,g+=st.g*K,v+=st.b*K;else if(H.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(H.sh.coefficients[X],K);N++}else if(H.isDirectionalLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=ut,i.directionalShadowMatrix[y]=H.shadow.matrix,L++}i.directional[y]=X,y++}else if(H.isSpotLight){const X=t.get(H);X.position.setFromMatrixPosition(H.matrixWorld),X.color.copy(st).multiplyScalar(K),X.distance=ct,X.coneCos=Math.cos(H.angle),X.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),X.decay=H.decay,i.spot[M]=X;const $=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,$.updateMatrices(H),H.castShadow&&z++),i.spotLightMatrix[M]=$.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=ut,R++}M++}else if(H.isRectAreaLight){const X=t.get(H);X.color.copy(st).multiplyScalar(K),X.halfWidth.set(H.width*.5,0,0),X.halfHeight.set(0,H.height*.5,0),i.rectArea[S]=X,S++}else if(H.isPointLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),X.distance=H.distance,X.decay=H.decay,H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[T]=W,i.pointShadowMap[T]=ut,i.pointShadowMatrix[T]=H.shadow.matrix,U++}i.point[T]=X,T++}else if(H.isHemisphereLight){const X=t.get(H);X.skyColor.copy(H.color).multiplyScalar(K),X.groundColor.copy(H.groundColor).multiplyScalar(K),i.hemi[x]=X,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=g,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==y||F.pointLength!==T||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==L||F.numPointShadows!==U||F.numSpotShadows!==R||F.numSpotMaps!==O||F.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=T,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+O-z,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=N,F.directionalLength=y,F.pointLength=T,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=L,F.numPointShadows=U,F.numSpotShadows=R,F.numSpotMaps=O,F.numLightProbes=N,i.version=TC++)}function d(p,_){let g=0,v=0,y=0,T=0,M=0;const S=_.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const U=p[x];if(U.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),g++}else if(U.isSpotLight){const R=i.spot[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const R=i.rectArea[T];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),c.identity(),l.copy(U.matrixWorld),l.premultiply(S),c.extractRotation(l),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:i}}function bx(o){const t=new AC(o),e=[],i=[];function s(_){p.camera=_,e.length=0,i.length=0}function l(_){e.push(_)}function c(_){i.push(_)}function f(){t.setup(e)}function d(_){t.setupView(e,_)}const p={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function RC(o){let t=new WeakMap;function e(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new bx(o),t.set(s,[f])):l>=c.length?(f=new bx(o),c.push(f)):f=c[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const CC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DC(o,t,e){let i=new dy;const s=new he,l=new he,c=new sn,f=new nb({depthPacking:dT}),d=new ib,p={},_=e.maxTextureSize,g={[Rr]:ti,[ti]:Rr,[Ia]:Ia},v=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:CC,fragmentShader:wC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new ca;T.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Bn(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wx;let x=this.type;this.render=function(z,N,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Er),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const K=x!==Oa&&this.type===Oa,ct=x===Oa&&this.type!==Oa;for(let ut=0,X=z.length;ut<X;ut++){const $=z[ut],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const xt=W.getFrameExtents();if(s.multiply(xt),l.copy(W.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/xt.x),s.x=l.x*xt.x,W.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/xt.y),s.y=l.y*xt.y,W.mapSize.y=l.y)),W.map===null||K===!0||ct===!0){const nt=this.type!==Oa?{minFilter:Yi,magFilter:Yi}:{};W.map!==null&&W.map.dispose(),W.map=new ys(s.x,s.y,nt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const P=W.getViewportCount();for(let nt=0;nt<P;nt++){const Et=W.getViewport(nt);c.set(l.x*Et.x,l.y*Et.y,l.x*Et.z,l.y*Et.w),st.viewport(c),W.updateMatrices($,nt),i=W.getFrustum(),R(N,F,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Oa&&L(W,F),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,A,H)};function L(z,N){const F=t.update(M);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ys(s.x,s.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(N,null,F,v,M,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(N,null,F,y,M,null)}function U(z,N,F,b){let A=null;const H=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)A=H;else if(A=F.isPointLight===!0?d:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const st=A.uuid,K=N.uuid;let ct=p[st];ct===void 0&&(ct={},p[st]=ct);let ut=ct[K];ut===void 0&&(ut=A.clone(),ct[K]=ut,N.addEventListener("dispose",O)),A=ut}if(A.visible=N.visible,A.wireframe=N.wireframe,b===Oa?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:g[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=F}return A}function R(z,N,F,b,A){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Oa)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const K=t.update(z),ct=z.material;if(Array.isArray(ct)){const ut=K.groups;for(let X=0,$=ut.length;X<$;X++){const W=ut[X],xt=ct[W.materialIndex];if(xt&&xt.visible){const P=U(z,xt,b,A);z.onBeforeShadow(o,z,N,F,K,P,W),o.renderBufferDirect(F,null,K,P,z,W),z.onAfterShadow(o,z,N,F,K,P,W)}}}else if(ct.visible){const ut=U(z,ct,b,A);z.onBeforeShadow(o,z,N,F,K,ut,null),o.renderBufferDirect(F,null,K,ut,z,null),z.onAfterShadow(o,z,N,F,K,ut,null)}}const st=z.children;for(let K=0,ct=st.length;K<ct;K++)R(st[K],N,F,b,A)}function O(z){z.target.removeEventListener("dispose",O);for(const F in p){const b=p[F],A=z.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const UC={[Tp]:bp,[Ap]:wp,[Rp]:Dp,[Do]:Cp,[bp]:Tp,[wp]:Ap,[Dp]:Rp,[Cp]:Do};function LC(o,t){function e(){let G=!1;const bt=new sn;let lt=null;const _t=new sn(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!G&&(o.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,Ot,jt,be,ke){ke===!0&&(Lt*=be,Ot*=be,jt*=be),bt.set(Lt,Ot,jt,be),_t.equals(bt)===!1&&(o.clearColor(Lt,Ot,jt,be),_t.copy(bt))},reset:function(){G=!1,lt=null,_t.set(-1,0,0,0)}}}function i(){let G=!1,bt=!1,lt=null,_t=null,Lt=null;return{setReversed:function(Ot){if(bt!==Ot){const jt=t.get("EXT_clip_control");bt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const be=Lt;Lt=null,this.setClear(be)}bt=Ot},getReversed:function(){return bt},setTest:function(Ot){Ot?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!G&&(o.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(bt&&(Ot=UC[Ot]),_t!==Ot){switch(Ot){case Tp:o.depthFunc(o.NEVER);break;case bp:o.depthFunc(o.ALWAYS);break;case Ap:o.depthFunc(o.LESS);break;case Do:o.depthFunc(o.LEQUAL);break;case Rp:o.depthFunc(o.EQUAL);break;case Cp:o.depthFunc(o.GEQUAL);break;case wp:o.depthFunc(o.GREATER);break;case Dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ot}},setLocked:function(Ot){G=Ot},setClear:function(Ot){Lt!==Ot&&(bt&&(Ot=1-Ot),o.clearDepth(Ot),Lt=Ot)},reset:function(){G=!1,lt=null,_t=null,Lt=null,bt=!1}}}function s(){let G=!1,bt=null,lt=null,_t=null,Lt=null,Ot=null,jt=null,be=null,ke=null;return{setTest:function(me){G||(me?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(me){bt!==me&&!G&&(o.stencilMask(me),bt=me)},setFunc:function(me,nn,on){(lt!==me||_t!==nn||Lt!==on)&&(o.stencilFunc(me,nn,on),lt=me,_t=nn,Lt=on)},setOp:function(me,nn,on){(Ot!==me||jt!==nn||be!==on)&&(o.stencilOp(me,nn,on),Ot=me,jt=nn,be=on)},setLocked:function(me){G=me},setClear:function(me){ke!==me&&(o.clearStencil(me),ke=me)},reset:function(){G=!1,bt=null,lt=null,_t=null,Lt=null,Ot=null,jt=null,be=null,ke=null}}}const l=new e,c=new i,f=new s,d=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,L=null,U=null,R=null,O=null,z=null,N=new Ne(0,0,0),F=0,b=!1,A=null,H=null,st=null,K=null,ct=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=$>=2);let xt=null,P={};const nt=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Ct=new sn().fromArray(nt),Y=new sn().fromArray(Et);function dt(G,bt,lt,_t){const Lt=new Uint8Array(4),Ot=o.createTexture();o.bindTexture(G,Ot),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<lt;jt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(bt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Ot}const St={};St[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Rt(o.DEPTH_TEST),c.setFunc(Do),oe(!1),le(Av),Rt(o.CULL_FACE),V(Er);function Rt(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function wt(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Jt(G,bt){return g[G]!==bt?(o.bindFramebuffer(G,bt),g[G]=bt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function zt(G,bt){let lt=y,_t=!1;if(G){lt=v.get(bt),lt===void 0&&(lt=[],v.set(bt,lt));const Lt=G.textures;if(lt.length!==Lt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Ot=0,jt=Lt.length;Ot<jt;Ot++)lt[Ot]=o.COLOR_ATTACHMENT0+Ot;lt.length=Lt.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Te(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const Ce={[us]:o.FUNC_ADD,[FE]:o.FUNC_SUBTRACT,[HE]:o.FUNC_REVERSE_SUBTRACT};Ce[GE]=o.MIN,Ce[VE]=o.MAX;const ae={[kE]:o.ZERO,[XE]:o.ONE,[WE]:o.SRC_COLOR,[Mp]:o.SRC_ALPHA,[QE]:o.SRC_ALPHA_SATURATE,[ZE]:o.DST_COLOR,[YE]:o.DST_ALPHA,[qE]:o.ONE_MINUS_SRC_COLOR,[Ep]:o.ONE_MINUS_SRC_ALPHA,[KE]:o.ONE_MINUS_DST_COLOR,[jE]:o.ONE_MINUS_DST_ALPHA,[JE]:o.CONSTANT_COLOR,[$E]:o.ONE_MINUS_CONSTANT_COLOR,[tT]:o.CONSTANT_ALPHA,[eT]:o.ONE_MINUS_CONSTANT_ALPHA};function V(G,bt,lt,_t,Lt,Ot,jt,be,ke,me){if(G===Er){M===!0&&(wt(o.BLEND),M=!1);return}if(M===!1&&(Rt(o.BLEND),M=!0),G!==BE){if(G!==S||me!==b){if((x!==us||R!==us)&&(o.blendEquation(o.FUNC_ADD),x=us,R=us),me)switch(G){case To:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFunc(o.ONE,o.ONE);break;case Cv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case To:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Cv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,U=null,O=null,z=null,N.set(0,0,0),F=0,S=G,b=me}return}Lt=Lt||bt,Ot=Ot||lt,jt=jt||_t,(bt!==x||Lt!==R)&&(o.blendEquationSeparate(Ce[bt],Ce[Lt]),x=bt,R=Lt),(lt!==L||_t!==U||Ot!==O||jt!==z)&&(o.blendFuncSeparate(ae[lt],ae[_t],ae[Ot],ae[jt]),L=lt,U=_t,O=Ot,z=jt),(be.equals(N)===!1||ke!==F)&&(o.blendColor(be.r,be.g,be.b,ke),N.copy(be),F=ke),S=G,b=!1}function pn(G,bt){G.side===Ia?wt(o.CULL_FACE):Rt(o.CULL_FACE);let lt=G.side===ti;bt&&(lt=!lt),oe(lt),G.blending===To&&G.transparent===!1?V(Er):V(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const _t=G.stencilWrite;f.setTest(_t),_t&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),we(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(G){A!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),A=G)}function le(G){G!==PE?(Rt(o.CULL_FACE),G!==H&&(G===Av?o.cullFace(o.BACK):G===zE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=G}function Wt(G){G!==st&&(X&&o.lineWidth(G),st=G)}function we(G,bt,lt){G?(Rt(o.POLYGON_OFFSET_FILL),(K!==bt||ct!==lt)&&(o.polygonOffset(bt,lt),K=bt,ct=lt)):wt(o.POLYGON_OFFSET_FILL)}function qt(G){G?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function I(G){G===void 0&&(G=o.TEXTURE0+ut-1),xt!==G&&(o.activeTexture(G),xt=G)}function C(G,bt,lt){lt===void 0&&(xt===null?lt=o.TEXTURE0+ut-1:lt=xt);let _t=P[lt];_t===void 0&&(_t={type:void 0,texture:void 0},P[lt]=_t),(_t.type!==G||_t.texture!==bt)&&(xt!==lt&&(o.activeTexture(lt),xt=lt),o.bindTexture(G,bt||St[G]),_t.type=G,_t.texture=bt)}function at(){const G=P[xt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(G){Ct.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ct.copy(G))}function Ft(G){Y.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Y.copy(G))}function k(G,bt){let lt=p.get(bt);lt===void 0&&(lt=new WeakMap,p.set(bt,lt));let _t=lt.get(G);_t===void 0&&(_t=o.getUniformBlockIndex(bt,G.name),lt.set(G,_t))}function ft(G,bt){const _t=p.get(bt).get(G);d.get(bt)!==_t&&(o.uniformBlockBinding(bt,_t,G.__bindingPointIndex),d.set(bt,_t))}function Nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,P={},g={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,L=null,U=null,R=null,O=null,z=null,N=new Ne(0,0,0),F=0,b=!1,A=null,H=null,st=null,K=null,ct=null,Ct.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Rt,disable:wt,bindFramebuffer:Jt,drawBuffers:zt,useProgram:Te,setBlending:V,setMaterial:pn,setFlipSided:oe,setCullFace:le,setLineWidth:Wt,setPolygonOffset:we,setScissorTest:qt,activeTexture:I,bindTexture:C,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Gt,texImage3D:Kt,updateUBOMapping:k,uniformBlockBinding:ft,texStorage2D:pe,texStorage3D:At,texSubImage2D:gt,texSubImage3D:kt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ht,scissor:Xt,viewport:Ft,reset:Nt}}function OC(o,t,e,i,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,C){return y?new OffscreenCanvas(I,C):uf("canvas")}function M(I,C,at){let pt=1;const Mt=qt(I);if((Mt.width>at||Mt.height>at)&&(pt=at/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const gt=Math.floor(pt*Mt.width),kt=Math.floor(pt*Mt.height);g===void 0&&(g=T(gt,kt));const Dt=C?T(gt,kt):g;return Dt.width=gt,Dt.height=kt,Dt.getContext("2d").drawImage(I,0,0,gt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+kt+")."),Dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){o.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(I,C,at,pt,Mt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=C;if(C===o.RED&&(at===o.FLOAT&&(gt=o.R32F),at===o.HALF_FLOAT&&(gt=o.R16F),at===o.UNSIGNED_BYTE&&(gt=o.R8)),C===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.R8UI),at===o.UNSIGNED_SHORT&&(gt=o.R16UI),at===o.UNSIGNED_INT&&(gt=o.R32UI),at===o.BYTE&&(gt=o.R8I),at===o.SHORT&&(gt=o.R16I),at===o.INT&&(gt=o.R32I)),C===o.RG&&(at===o.FLOAT&&(gt=o.RG32F),at===o.HALF_FLOAT&&(gt=o.RG16F),at===o.UNSIGNED_BYTE&&(gt=o.RG8)),C===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RG8UI),at===o.UNSIGNED_SHORT&&(gt=o.RG16UI),at===o.UNSIGNED_INT&&(gt=o.RG32UI),at===o.BYTE&&(gt=o.RG8I),at===o.SHORT&&(gt=o.RG16I),at===o.INT&&(gt=o.RG32I)),C===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),at===o.UNSIGNED_INT&&(gt=o.RGB32UI),at===o.BYTE&&(gt=o.RGB8I),at===o.SHORT&&(gt=o.RGB16I),at===o.INT&&(gt=o.RGB32I)),C===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),at===o.UNSIGNED_INT&&(gt=o.RGBA32UI),at===o.BYTE&&(gt=o.RGBA8I),at===o.SHORT&&(gt=o.RGBA16I),at===o.INT&&(gt=o.RGBA32I)),C===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),C===o.RGBA){const kt=Mt?of:Oe.getTransfer(pt);at===o.FLOAT&&(gt=o.RGBA32F),at===o.HALF_FLOAT&&(gt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(gt=kt===Be?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(I,C){let at;return I?C===null||C===xs||C===Oo?at=o.DEPTH24_STENCIL8:C===Ba?at=o.DEPTH32F_STENCIL8:C===eu&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===xs||C===Oo?at=o.DEPTH_COMPONENT24:C===Ba?at=o.DEPTH_COMPONENT32F:C===eu&&(at=o.DEPTH_COMPONENT16),at}function O(I,C){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Yi&&I.minFilter!==aa?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function z(I){const C=I.target;C.removeEventListener("dispose",z),F(C),C.isVideoTexture&&_.delete(C)}function N(I){const C=I.target;C.removeEventListener("dispose",N),A(C)}function F(I){const C=i.get(I);if(C.__webglInit===void 0)return;const at=I.source,pt=v.get(at);if(pt){const Mt=pt[C.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&b(I),Object.keys(pt).length===0&&v.delete(at)}i.remove(I)}function b(I){const C=i.get(I);o.deleteTexture(C.__webglTexture);const at=I.source,pt=v.get(at);delete pt[C.__cacheKey],c.memory.textures--}function A(I){const C=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(C.__webglFramebuffer[pt]))for(let Mt=0;Mt<C.__webglFramebuffer[pt].length;Mt++)o.deleteFramebuffer(C.__webglFramebuffer[pt][Mt]);else o.deleteFramebuffer(C.__webglFramebuffer[pt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[pt])}else{if(Array.isArray(C.__webglFramebuffer))for(let pt=0;pt<C.__webglFramebuffer.length;pt++)o.deleteFramebuffer(C.__webglFramebuffer[pt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pt=0;pt<C.__webglColorRenderbuffer.length;pt++)C.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[pt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const at=I.textures;for(let pt=0,Mt=at.length;pt<Mt;pt++){const gt=i.get(at[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),c.memory.textures--),i.remove(at[pt])}i.remove(I)}let H=0;function st(){H=0}function K(){const I=H;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function ct(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function ut(I,C){const at=i.get(I);if(I.isVideoTexture&&Wt(I),I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(at,I,C);return}}e.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+C)}function X(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){Y(at,I,C);return}e.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+C)}function $(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){Y(at,I,C);return}e.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+C)}function W(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){dt(at,I,C);return}e.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+C)}const xt={[Op]:o.REPEAT,[hs]:o.CLAMP_TO_EDGE,[Np]:o.MIRRORED_REPEAT},P={[Yi]:o.NEAREST,[fT]:o.NEAREST_MIPMAP_NEAREST,[yc]:o.NEAREST_MIPMAP_LINEAR,[aa]:o.LINEAR,[Pd]:o.LINEAR_MIPMAP_NEAREST,[ds]:o.LINEAR_MIPMAP_LINEAR},nt={[_T]:o.NEVER,[MT]:o.ALWAYS,[gT]:o.LESS,[ay]:o.LEQUAL,[vT]:o.EQUAL,[ST]:o.GEQUAL,[xT]:o.GREATER,[yT]:o.NOTEQUAL};function Et(I,C){if(C.type===Ba&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===aa||C.magFilter===Pd||C.magFilter===yc||C.magFilter===ds||C.minFilter===aa||C.minFilter===Pd||C.minFilter===yc||C.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,xt[C.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,xt[C.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,xt[C.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,P[C.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,P[C.minFilter]),C.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,nt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Yi||C.minFilter!==yc&&C.minFilter!==ds||C.type===Ba&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ct(I,C){let at=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",z));const pt=C.source;let Mt=v.get(pt);Mt===void 0&&(Mt={},v.set(pt,Mt));const gt=ct(C);if(gt!==I.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,at=!0),Mt[gt].usedTimes++;const kt=Mt[I.__cacheKey];kt!==void 0&&(Mt[I.__cacheKey].usedTimes--,kt.usedTimes===0&&b(C)),I.__cacheKey=gt,I.__webglTexture=Mt[gt].texture}return at}function Y(I,C,at){let pt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pt=o.TEXTURE_3D);const Mt=Ct(I,C),gt=C.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+at);const kt=i.get(gt);if(gt.version!==kt.__version||Mt===!0){e.activeTexture(o.TEXTURE0+at);const Dt=Oe.getPrimaries(Oe.workingColorSpace),Ht=C.colorSpace===xr?null:Oe.getPrimaries(C.colorSpace),pe=C.colorSpace===xr||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let At=M(C.image,!1,s.maxTextureSize);At=we(C,At);const Gt=l.convert(C.format,C.colorSpace),Kt=l.convert(C.type);let Xt=U(C.internalFormat,Gt,Kt,C.colorSpace,C.isVideoTexture);Et(pt,C);let Ft;const k=C.mipmaps,ft=C.isVideoTexture!==!0,Nt=kt.__version===void 0||Mt===!0,G=gt.dataReady,bt=O(C,At);if(C.isDepthTexture)Xt=R(C.format===No,C.type),Nt&&(ft?e.texStorage2D(o.TEXTURE_2D,1,Xt,At.width,At.height):e.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Gt,Kt,null));else if(C.isDataTexture)if(k.length>0){ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Xt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?G&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Kt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Xt,Ft.width,Ft.height,0,Gt,Kt,Ft.data);C.generateMipmaps=!1}else ft?(Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Xt,At.width,At.height),G&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Gt,Kt,At.data)):e.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Gt,Kt,At.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Xt,k[0].width,k[0].height,At.depth);for(let lt=0,_t=k.length;lt<_t;lt++)if(Ft=k[lt],C.format!==qi)if(Gt!==null)if(ft){if(G)if(C.layerUpdates.size>0){const Lt=ex(Ft.width,Ft.height,C.format,C.type);for(const Ot of C.layerUpdates){const jt=Ft.data.subarray(Ot*Lt/Ft.data.BYTES_PER_ELEMENT,(Ot+1)*Lt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Ot,Ft.width,Ft.height,1,Gt,jt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Gt,Ft.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Ft.width,Ft.height,At.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?G&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Gt,Kt,Ft.data):e.texImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Ft.width,Ft.height,At.depth,0,Gt,Kt,Ft.data)}else{ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Xt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],C.format!==qi?Gt!==null?ft?G&&e.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Ft.data):e.compressedTexImage2D(o.TEXTURE_2D,lt,Xt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?G&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Kt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Xt,Ft.width,Ft.height,0,Gt,Kt,Ft.data)}else if(C.isDataArrayTexture)if(ft){if(Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Xt,At.width,At.height,At.depth),G)if(C.layerUpdates.size>0){const lt=ex(At.width,At.height,C.format,C.type);for(const _t of C.layerUpdates){const Lt=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Gt,Kt,Lt)}C.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Gt,Kt,At.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,At.width,At.height,At.depth,0,Gt,Kt,At.data);else if(C.isData3DTexture)ft?(Nt&&e.texStorage3D(o.TEXTURE_3D,bt,Xt,At.width,At.height,At.depth),G&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Gt,Kt,At.data)):e.texImage3D(o.TEXTURE_3D,0,Xt,At.width,At.height,At.depth,0,Gt,Kt,At.data);else if(C.isFramebufferTexture){if(Nt)if(ft)e.texStorage2D(o.TEXTURE_2D,bt,Xt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let Lt=0;Lt<bt;Lt++)e.texImage2D(o.TEXTURE_2D,Lt,Xt,lt,_t,0,Gt,Kt,null),lt>>=1,_t>>=1}}else if(k.length>0){if(ft&&Nt){const lt=qt(k[0]);e.texStorage2D(o.TEXTURE_2D,bt,Xt,lt.width,lt.height)}for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?G&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Gt,Kt,Ft):e.texImage2D(o.TEXTURE_2D,lt,Xt,Gt,Kt,Ft);C.generateMipmaps=!1}else if(ft){if(Nt){const lt=qt(At);e.texStorage2D(o.TEXTURE_2D,bt,Xt,lt.width,lt.height)}G&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Kt,At)}else e.texImage2D(o.TEXTURE_2D,0,Xt,Gt,Kt,At);S(C)&&x(pt),kt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dt(I,C,at){if(C.image.length!==6)return;const pt=Ct(I,C),Mt=C.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+at);const gt=i.get(Mt);if(Mt.version!==gt.__version||pt===!0){e.activeTexture(o.TEXTURE0+at);const kt=Oe.getPrimaries(Oe.workingColorSpace),Dt=C.colorSpace===xr?null:Oe.getPrimaries(C.colorSpace),Ht=C.colorSpace===xr||kt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const pe=C.isCompressedTexture||C.image[0].isCompressedTexture,At=C.image[0]&&C.image[0].isDataTexture,Gt=[];for(let _t=0;_t<6;_t++)!pe&&!At?Gt[_t]=M(C.image[_t],!0,s.maxCubemapSize):Gt[_t]=At?C.image[_t].image:C.image[_t],Gt[_t]=we(C,Gt[_t]);const Kt=Gt[0],Xt=l.convert(C.format,C.colorSpace),Ft=l.convert(C.type),k=U(C.internalFormat,Xt,Ft,C.colorSpace),ft=C.isVideoTexture!==!0,Nt=gt.__version===void 0||pt===!0,G=Mt.dataReady;let bt=O(C,Kt);Et(o.TEXTURE_CUBE_MAP,C);let lt;if(pe){ft&&Nt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){lt=Gt[_t].mipmaps;for(let Lt=0;Lt<lt.length;Lt++){const Ot=lt[Lt];C.format!==qi?Xt!==null?ft?G&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Ot.width,Ot.height,Xt,Ot.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,k,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?G&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Ot.width,Ot.height,Xt,Ft,Ot.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,k,Ot.width,Ot.height,0,Xt,Ft,Ot.data)}}}else{if(lt=C.mipmaps,ft&&Nt){lt.length>0&&bt++;const _t=qt(Gt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ft?G&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt[_t].width,Gt[_t].height,Xt,Ft,Gt[_t].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Gt[_t].width,Gt[_t].height,0,Xt,Ft,Gt[_t].data);for(let Lt=0;Lt<lt.length;Lt++){const jt=lt[Lt].image[_t].image;ft?G&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,jt.width,jt.height,Xt,Ft,jt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,k,jt.width,jt.height,0,Xt,Ft,jt.data)}}else{ft?G&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ft,Gt[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Xt,Ft,Gt[_t]);for(let Lt=0;Lt<lt.length;Lt++){const Ot=lt[Lt];ft?G&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,Xt,Ft,Ot.image[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,k,Xt,Ft,Ot.image[_t])}}}S(C)&&x(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function St(I,C,at,pt,Mt,gt){const kt=l.convert(at.format,at.colorSpace),Dt=l.convert(at.type),Ht=U(at.internalFormat,kt,Dt,at.colorSpace),pe=i.get(C),At=i.get(at);if(At.__renderTarget=C,!pe.__hasExternalTextures){const Gt=Math.max(1,C.width>>gt),Kt=Math.max(1,C.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?e.texImage3D(Mt,gt,Ht,Gt,Kt,C.depth,0,kt,Dt,null):e.texImage2D(Mt,gt,Ht,Gt,Kt,0,kt,Dt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),le(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,0,oe(C)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,gt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(I,C,at){if(o.bindRenderbuffer(o.RENDERBUFFER,I),C.depthBuffer){const pt=C.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,gt=R(C.stencilBuffer,Mt),kt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=oe(C);le(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,gt,C.width,C.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,gt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,gt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,I)}else{const pt=C.textures;for(let Mt=0;Mt<pt.length;Mt++){const gt=pt[Mt],kt=l.convert(gt.format,gt.colorSpace),Dt=l.convert(gt.type),Ht=U(gt.internalFormat,kt,Dt,gt.colorSpace),pe=oe(C);at&&le(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Ht,C.width,C.height):le(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Ht,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=i.get(C.depthTexture);pt.__renderTarget=C,(!pt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ut(C.depthTexture,0);const Mt=pt.__webglTexture,gt=oe(C);if(C.depthTexture.format===bo)le(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(C.depthTexture.format===No)le(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Jt(I){const C=i.get(I),at=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pt){const Mt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),C.__depthDisposeCallback=Mt}C.__boundDepthTexture=pt}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,I)}else if(at){C.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[pt]),C.__webglDepthbuffer[pt]===void 0)C.__webglDepthbuffer[pt]=o.createRenderbuffer(),Rt(C.__webglDepthbuffer[pt],I,!1);else{const Mt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Rt(C.__webglDepthbuffer,I,!1);else{const pt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Mt)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(I,C,at){const pt=i.get(I);C!==void 0&&St(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Jt(I)}function Te(I){const C=I.texture,at=i.get(I),pt=i.get(C);I.addEventListener("dispose",N);const Mt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,kt=Mt.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=C.version,c.memory.textures++),gt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<C.mipmaps.length;Ht++)at.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else at.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<C.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Dt=0,Ht=Mt.length;Dt<Ht;Dt++){const pe=i.get(Mt[Dt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&le(I)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Ht=Mt[Dt];at.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const pe=l.convert(Ht.format,Ht.colorSpace),At=l.convert(Ht.type),Gt=U(Ht.internalFormat,pe,At,Ht.colorSpace,I.isXRRenderTarget===!0),Kt=oe(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Gt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(at.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Et(o.TEXTURE_CUBE_MAP,C);for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)St(at.__webglFramebuffer[Dt][Ht],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else St(at.__webglFramebuffer[Dt],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(C)&&x(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let Dt=0,Ht=Mt.length;Dt<Ht;Dt++){const pe=Mt[Dt],At=i.get(pe);e.bindTexture(o.TEXTURE_2D,At.__webglTexture),Et(o.TEXTURE_2D,pe),St(at.__webglFramebuffer,I,pe,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),S(pe)&&x(o.TEXTURE_2D)}e.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Dt,pt.__webglTexture),Et(Dt,C),C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)St(at.__webglFramebuffer[Ht],I,C,o.COLOR_ATTACHMENT0,Dt,Ht);else St(at.__webglFramebuffer,I,C,o.COLOR_ATTACHMENT0,Dt,0);S(C)&&x(Dt),e.unbindTexture()}I.depthBuffer&&Jt(I)}function Ce(I){const C=I.textures;for(let at=0,pt=C.length;at<pt;at++){const Mt=C[at];if(S(Mt)){const gt=L(I),kt=i.get(Mt).__webglTexture;e.bindTexture(gt,kt),x(gt),e.unbindTexture()}}}const ae=[],V=[];function pn(I){if(I.samples>0){if(le(I)===!1){const C=I.textures,at=I.width,pt=I.height;let Mt=o.COLOR_BUFFER_BIT;const gt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=i.get(I),Dt=C.length>1;if(Dt)for(let Ht=0;Ht<C.length;Ht++)e.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ht=0;Ht<C.length;Ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const pe=i.get(C[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,at,pt,0,0,at,pt,Mt,o.NEAREST),d===!0&&(ae.length=0,V.length=0,ae.push(o.COLOR_ATTACHMENT0+Ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ae.push(gt),V.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Ht=0;Ht<C.length;Ht++){e.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Ht]);const pe=i.get(C[Ht]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,pe,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const C=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function oe(I){return Math.min(s.maxSamples,I.samples)}function le(I){const C=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Wt(I){const C=c.render.frame;_.get(I)!==C&&(_.set(I,C),I.update())}function we(I,C){const at=I.colorSpace,pt=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||at!==Po&&at!==xr&&(Oe.getTransfer(at)===Be?(pt!==qi||Mt!==Ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),C}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=zt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=le}function NC(o,t){function e(i,s=xr){let l;const c=Oe.getTransfer(s);if(i===Ga)return o.UNSIGNED_BYTE;if(i===Cm)return o.UNSIGNED_SHORT_4_4_4_4;if(i===wm)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Kx)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===jx)return o.BYTE;if(i===Zx)return o.SHORT;if(i===eu)return o.UNSIGNED_SHORT;if(i===Rm)return o.INT;if(i===xs)return o.UNSIGNED_INT;if(i===Ba)return o.FLOAT;if(i===uu)return o.HALF_FLOAT;if(i===Qx)return o.ALPHA;if(i===Jx)return o.RGB;if(i===qi)return o.RGBA;if(i===$x)return o.LUMINANCE;if(i===ty)return o.LUMINANCE_ALPHA;if(i===bo)return o.DEPTH_COMPONENT;if(i===No)return o.DEPTH_STENCIL;if(i===ey)return o.RED;if(i===Dm)return o.RED_INTEGER;if(i===ny)return o.RG;if(i===Um)return o.RG_INTEGER;if(i===Lm)return o.RGBA_INTEGER;if(i===jc||i===Zc||i===Kc||i===Qc)if(c===Be)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===jc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===jc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pp||i===zp||i===Ip||i===Bp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Pp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ip)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fp||i===Hp||i===Gp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Fp||i===Hp)return c===Be?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Gp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vp||i===kp||i===Xp||i===Wp||i===qp||i===Yp||i===jp||i===Zp||i===Kp||i===Qp||i===Jp||i===$p||i===tm||i===em)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Vp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$p)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tm)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===em)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jc||i===nm||i===im)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Jc)return c===Be?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===im)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iy||i===am||i===rm||i===sm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Jc)return l.COMPRESSED_RED_RGTC1_EXT;if(i===am)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const PC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ei,l=t.properties.get(s);l.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Cr({vertexShader:PC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Mf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BC extends ko{constructor(t,e){super();const i=this;let s=null,l=1,c=null,f="local-floor",d=1,p=null,_=null,g=null,v=null,y=null,T=null;const M=new IC,S=e.getContextAttributes();let x=null,L=null;const U=[],R=[],O=new he;let z=null;const N=new Yn;N.viewport=new sn;const F=new Yn;F.viewport=new sn;const b=[N,F],A=new ab;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let dt=U[Y];return dt===void 0&&(dt=new ip,U[Y]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Y){let dt=U[Y];return dt===void 0&&(dt=new ip,U[Y]=dt),dt.getGripSpace()},this.getHand=function(Y){let dt=U[Y];return dt===void 0&&(dt=new ip,U[Y]=dt),dt.getHandSpace()};function K(Y){const dt=R.indexOf(Y.inputSource);if(dt===-1)return;const St=U[dt];St!==void 0&&(St.update(Y.inputSource,Y.frame,p||c),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ct(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ct),s.removeEventListener("inputsourceschange",ut);for(let Y=0;Y<U.length;Y++){const dt=R[Y];dt!==null&&(R[Y]=null,U[Y].disconnect(dt))}H=null,st=null,M.reset(),t.setRenderTarget(x),y=null,v=null,g=null,s=null,L=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ct),s.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?No:bo,Rt=S.stencil?Oo:xs);const Jt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:l};g=new XRWebGLBinding(s,e),v=g.createProjectionLayer(Jt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new ys(v.textureWidth,v.textureHeight,{format:qi,type:Ga,depthTexture:new my(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new ys(y.framebufferWidth,y.framebufferHeight,{format:qi,type:Ga,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(Y){for(let dt=0;dt<Y.removed.length;dt++){const St=Y.removed[dt],Rt=R.indexOf(St);Rt>=0&&(R[Rt]=null,U[Rt].disconnect(St))}for(let dt=0;dt<Y.added.length;dt++){const St=Y.added[dt];let Rt=R.indexOf(St);if(Rt===-1){for(let Jt=0;Jt<U.length;Jt++)if(Jt>=R.length){R.push(St),Rt=Jt;break}else if(R[Jt]===null){R[Jt]=St,Rt=Jt;break}if(Rt===-1)break}const wt=U[Rt];wt&&wt.connect(St)}}const X=new it,$=new it;function W(Y,dt,St){X.setFromMatrixPosition(dt.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const Rt=X.distanceTo($),wt=dt.projectionMatrix.elements,Jt=St.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),Te=wt[14]/(wt[10]+1),Ce=(wt[9]+1)/wt[5],ae=(wt[9]-1)/wt[5],V=(wt[8]-1)/wt[0],pn=(Jt[8]+1)/Jt[0],oe=zt*V,le=zt*pn,Wt=Rt/(-V+pn),we=Wt*-V;if(dt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(we),Y.translateZ(Wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=zt+Wt,I=Te+Wt,C=oe-we,at=le+(Rt-we),pt=Ce*Te/I*qt,Mt=ae*Te/I*qt;Y.projectionMatrix.makePerspective(C,at,pt,Mt,qt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xt(Y,dt){dt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(dt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let dt=Y.near,St=Y.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),A.near=F.near=N.near=dt,A.far=F.far=N.far=St,(H!==A.near||st!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,st=A.far),N.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,A.layers.mask=N.layers.mask|F.layers.mask;const Rt=Y.parent,wt=A.cameras;xt(A,Rt);for(let Jt=0;Jt<wt.length;Jt++)xt(wt[Jt],Rt);wt.length===2?W(A,N,F):A.projectionMatrix.copy(N.projectionMatrix),P(Y,A,Rt)};function P(Y,dt,St){St===null?Y.matrix.copy(dt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(dt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=om*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(Y){d=Y,v!==null&&(v.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let nt=null;function Et(Y,dt){if(_=dt.getViewerPose(p||c),T=dt,_!==null){const St=_.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Rt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let zt=0;zt<St.length;zt++){const Te=St[zt];let Ce=null;if(y!==null)Ce=y.getViewport(Te);else{const V=g.getViewSubImage(v,Te);Ce=V.viewport,zt===0&&(t.setRenderTargetTextures(L,V.colorTexture,v.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(L))}let ae=b[zt];ae===void 0&&(ae=new Yn,ae.layers.enable(zt),ae.viewport=new sn,b[zt]=ae),ae.matrix.fromArray(Te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),zt===0&&(A.matrix.copy(ae.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(ae)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const zt=g.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,s.renderState)}}for(let St=0;St<U.length;St++){const Rt=R[St],wt=U[St];Rt!==null&&wt!==void 0&&wt.update(Rt,dt,p||c)}nt&&nt(Y,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Ct=new _y;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}}const is=new Va,FC=new en;function HC(o,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,cy(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,U,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),T(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,L,U):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=t.get(x),U=L.envMap,R=L.envMapRotation;U&&(S.envMap.value=U,is.copy(R),is.x*=-1,is.y*=-1,is.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),S.envMapRotation.value.setFromMatrix4(FC.makeRotationFromEuler(is)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,L,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=U*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const L=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GC(o,t,e,i){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const R=U.program;i.uniformBlockBinding(L,R)}function p(L,U){let R=s[L.id];R===void 0&&(T(L),R=_(L),s[L.id]=R,L.addEventListener("dispose",S));const O=U.program;i.updateUBOMapping(L,O);const z=t.render.frame;l[L.id]!==z&&(v(L),l[L.id]=z)}function _(L){const U=g();L.__bindingPointIndex=U;const R=o.createBuffer(),O=L.__size,z=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function g(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=s[L.id],R=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let z=0,N=R.length;z<N;z++){const F=Array.isArray(R[z])?R[z]:[R[z]];for(let b=0,A=F.length;b<A;b++){const H=F[b];if(y(H,z,b,O)===!0){const st=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let ut=0;ut<K.length;ut++){const X=K[ut],$=M(X);typeof X=="number"||typeof X=="boolean"?(H.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,st+ct,H.__data)):X.isMatrix3?(H.__data[0]=X.elements[0],H.__data[1]=X.elements[1],H.__data[2]=X.elements[2],H.__data[3]=0,H.__data[4]=X.elements[3],H.__data[5]=X.elements[4],H.__data[6]=X.elements[5],H.__data[7]=0,H.__data[8]=X.elements[6],H.__data[9]=X.elements[7],H.__data[10]=X.elements[8],H.__data[11]=0):(X.toArray(H.__data,ct),ct+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,U,R,O){const z=L.value,N=U+"_"+R;if(O[N]===void 0)return typeof z=="number"||typeof z=="boolean"?O[N]=z:O[N]=z.clone(),!0;{const F=O[N];if(typeof z=="number"||typeof z=="boolean"){if(F!==z)return O[N]=z,!0}else if(F.equals(z)===!1)return F.copy(z),!0}return!1}function T(L){const U=L.uniforms;let R=0;const O=16;for(let N=0,F=U.length;N<F;N++){const b=Array.isArray(U[N])?U[N]:[U[N]];for(let A=0,H=b.length;A<H;A++){const st=b[A],K=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,ut=K.length;ct<ut;ct++){const X=K[ct],$=M(X),W=R%O,xt=W%$.boundary,P=W+xt;R+=xt,P!==0&&O-P<$.storage&&(R+=O-P),st.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=$.storage}}}const z=R%O;return z>0&&(R+=O-z),L.__size=R,L.__cache={},this}function M(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const R=c.indexOf(U.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete l[U.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},l={}}return{bind:d,update:p,dispose:x}}class VC{constructor(t={}){const{canvas:e=TT(),context:i=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const T=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const L=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ni,this.toneMapping=Tr,this.toneMappingExposure=1;const R=this;let O=!1,z=0,N=0,F=null,b=-1,A=null;const H=new sn,st=new sn;let K=null;const ct=new Ne(0);let ut=0,X=e.width,$=e.height,W=1,xt=null,P=null;const nt=new sn(0,0,X,$),Et=new sn(0,0,X,$);let Ct=!1;const Y=new dy;let dt=!1,St=!1;this.transmissionResolutionScale=1;const Rt=new en,wt=new en,Jt=new it,zt=new sn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ae(){return F===null?W:1}let V=i;function pn(D,Z){return e.getContext(D,Z)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Am}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),V===null){const Z="webgl2";if(V=pn(Z,D),V===null)throw pn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let oe,le,Wt,we,qt,I,C,at,pt,Mt,gt,kt,Dt,Ht,pe,At,Gt,Kt,Xt,Ft,k,ft,Nt,G;function bt(){oe=new JA(V),oe.init(),ft=new NC(V,oe),le=new WA(V,oe,t,ft),Wt=new LC(V,oe),le.reverseDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),we=new eR(V),qt=new xC,I=new OC(V,oe,Wt,qt,le,ft,we),C=new YA(R),at=new QA(R),pt=new ob(V),Nt=new kA(V,pt),Mt=new $A(V,pt,we,Nt),gt=new iR(V,Mt,pt,we),Xt=new nR(V,le,I),At=new qA(qt),kt=new vC(R,C,at,oe,le,Nt,At),Dt=new HC(R,qt),Ht=new SC,pe=new RC(oe),Kt=new VA(R,C,at,Wt,gt,y,d),Gt=new DC(R,gt,le),G=new GC(V,we,le,Wt),Ft=new XA(V,oe,we),k=new tR(V,oe,we),we.programs=kt.programs,R.capabilities=le,R.extensions=oe,R.properties=qt,R.renderLists=Ht,R.shadowMap=Gt,R.state=Wt,R.info=we}bt();const lt=new BC(R,V);this.xr=lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=oe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=oe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(X,$,!1))},this.getSize=function(D){return D.set(X,$)},this.setSize=function(D,Z,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,$=Z,e.width=Math.floor(D*W),e.height=Math.floor(Z*W),rt===!0&&(e.style.width=D+"px",e.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(X*W,$*W).floor()},this.setDrawingBufferSize=function(D,Z,rt){X=D,$=Z,W=rt,e.width=Math.floor(D*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,Z,rt,tt){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,Z,rt,tt),Wt.viewport(H.copy(nt).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(Et)},this.setScissor=function(D,Z,rt,tt){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,Z,rt,tt),Wt.scissor(st.copy(Et).multiplyScalar(W).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(D){Wt.setScissorTest(Ct=D)},this.setOpaqueSort=function(D){xt=D},this.setTransparentSort=function(D){P=D},this.getClearColor=function(D){return D.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,rt=!0){let tt=0;if(D){let Q=!1;if(F!==null){const Tt=F.texture.format;Q=Tt===Lm||Tt===Um||Tt===Dm}if(Q){const Tt=F.texture.type,Ut=Tt===Ga||Tt===xs||Tt===eu||Tt===Oo||Tt===Cm||Tt===wm,Bt=Kt.getClearColor(),It=Kt.getClearAlpha(),ne=Bt.r,ie=Bt.g,Qt=Bt.b;Ut?(T[0]=ne,T[1]=ie,T[2]=Qt,T[3]=It,V.clearBufferuiv(V.COLOR,0,T)):(M[0]=ne,M[1]=ie,M[2]=Qt,M[3]=It,V.clearBufferiv(V.COLOR,0,M))}else tt|=V.COLOR_BUFFER_BIT}Z&&(tt|=V.DEPTH_BUFFER_BIT),rt&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Kt.dispose(),Ht.dispose(),pe.dispose(),qt.dispose(),C.dispose(),at.dispose(),gt.dispose(),Nt.dispose(),G.dispose(),kt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",pu),lt.removeEventListener("sessionend",Wo),Zi.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=we.autoReset,Z=Gt.enabled,rt=Gt.autoUpdate,tt=Gt.needsUpdate,Q=Gt.type;bt(),we.autoReset=D,Gt.enabled=Z,Gt.autoUpdate=rt,Gt.needsUpdate=tt,Gt.type=Q}function Ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function jt(D){const Z=D.target;Z.removeEventListener("dispose",jt),be(Z)}function be(D){ke(D),qt.remove(D)}function ke(D){const Z=qt.get(D).programs;Z!==void 0&&(Z.forEach(function(rt){kt.releaseProgram(rt)}),D.isShaderMaterial&&kt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,rt,tt,Q,Tt){Z===null&&(Z=Te);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Rf(D,Z,rt,tt,Q);Wt.setMaterial(tt,Ut);let It=rt.index,ne=1;if(tt.wireframe===!0){if(It=Mt.getWireframeAttribute(rt),It===void 0)return;ne=2}const ie=rt.drawRange,Qt=rt.attributes.position;let xe=ie.start*ne,ye=(ie.start+ie.count)*ne;Tt!==null&&(xe=Math.max(xe,Tt.start*ne),ye=Math.min(ye,(Tt.start+Tt.count)*ne)),It!==null?(xe=Math.max(xe,0),ye=Math.min(ye,It.count)):Qt!=null&&(xe=Math.max(xe,0),ye=Math.min(ye,Qt.count));const Xe=ye-xe;if(Xe<0||Xe===1/0)return;Nt.setup(Q,tt,Bt,rt,It);let De,re=Ft;if(It!==null&&(De=pt.get(It),re=k,re.setIndex(De)),Q.isMesh)tt.wireframe===!0?(Wt.setLineWidth(tt.wireframeLinewidth*ae()),re.setMode(V.LINES)):re.setMode(V.TRIANGLES);else if(Q.isLine){let $t=tt.linewidth;$t===void 0&&($t=1),Wt.setLineWidth($t*ae()),Q.isLineSegments?re.setMode(V.LINES):Q.isLineLoop?re.setMode(V.LINE_LOOP):re.setMode(V.LINE_STRIP)}else Q.isPoints?re.setMode(V.POINTS):Q.isSprite&&re.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,gn=Q._multiDrawCounts,Se=Q._multiDrawCount,Zn=It?pt.get(It).bytesPerElement:1,zi=qt.get(tt).currentProgram.getUniforms();for(let Vn=0;Vn<Se;Vn++)zi.setValue(V,"_gl_DrawID",Vn),re.render($t[Vn]/Zn,gn[Vn])}else if(Q.isInstancedMesh)re.renderInstances(xe,Xe,Q.count);else if(rt.isInstancedBufferGeometry){const $t=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,gn=Math.min(rt.instanceCount,$t);re.renderInstances(xe,Xe,gn)}else re.render(xe,Xe)};function me(D,Z,rt){D.transparent===!0&&D.side===Ia&&D.forceSinglePass===!1?(D.side=ti,D.needsUpdate=!0,_n(D,Z,rt),D.side=Rr,D.needsUpdate=!0,_n(D,Z,rt),D.side=Ia):_n(D,Z,rt)}this.compile=function(D,Z,rt=null){rt===null&&(rt=D),x=pe.get(rt),x.init(Z),U.push(x),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),D!==rt&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const tt=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];me(Bt,rt,Q),tt.add(Bt)}else me(Tt,rt,Q),tt.add(Tt)}),x=U.pop(),tt},this.compileAsync=function(D,Z,rt=null){const tt=this.compile(D,Z,rt);return new Promise(Q=>{function Tt(){if(tt.forEach(function(Ut){qt.get(Ut).currentProgram.isReady()&&tt.delete(Ut)}),tt.size===0){Q(D);return}setTimeout(Tt,10)}oe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let nn=null;function on(D){nn&&nn(D)}function pu(){Zi.stop()}function Wo(){Zi.start()}const Zi=new _y;Zi.setAnimationLoop(on),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(D){nn=D,lt.setAnimationLoop(D),D===null?Zi.stop():Zi.start()},lt.addEventListener("sessionstart",pu),lt.addEventListener("sessionend",Wo),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Z,F),x=pe.get(D,U.length),x.init(Z),U.push(x),wt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(wt),St=this.localClippingEnabled,dt=At.init(this.clippingPlanes,St),S=Ht.get(D,L.length),S.init(),L.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&bs(Tt,Z,-1/0,R.sortObjects)}bs(D,Z,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(xt,P),Ce=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(S,D),this.info.render.frame++,dt===!0&&At.beginShadows();const rt=x.state.shadowsArray;Gt.render(rt,D,Z),dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=S.opaque,Q=S.transmissive;if(x.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const It=Tt[Ut];mu(tt,Q,D,It)}Ce&&Kt.render(D);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const It=Tt[Ut];qo(S,D,It,It.viewport)}}else Q.length>0&&mu(tt,Q,D,Z),Ce&&Kt.render(D),qo(S,D,Z);F!==null&&N===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(R,D,Z),Nt.resetDefaultState(),b=-1,A=null,U.pop(),U.length>0?(x=U[U.length-1],dt===!0&&At.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function bs(D,Z,rt,tt){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Y.intersectsSprite(D)){tt&&zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(wt);const Ut=gt.update(D),Bt=D.material;Bt.visible&&S.push(D,Ut,Bt,rt,zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Y.intersectsObject(D))){const Ut=gt.update(D),Bt=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),zt.copy(D.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),zt.copy(Ut.boundingSphere.center)),zt.applyMatrix4(D.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){const It=Ut.groups;for(let ne=0,ie=It.length;ne<ie;ne++){const Qt=It[ne],xe=Bt[Qt.materialIndex];xe&&xe.visible&&S.push(D,Ut,xe,rt,zt.z,Qt)}}else Bt.visible&&S.push(D,Ut,Bt,rt,zt.z,null)}}const Tt=D.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)bs(Tt[Ut],Z,rt,tt)}function qo(D,Z,rt,tt){const Q=D.opaque,Tt=D.transmissive,Ut=D.transparent;x.setupLightsView(rt),dt===!0&&At.setGlobalState(R.clippingPlanes,rt),tt&&Wt.viewport(H.copy(tt)),Q.length>0&&li(Q,Z,rt),Tt.length>0&&li(Tt,Z,rt),Ut.length>0&&li(Ut,Z,rt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function mu(D,Z,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[tt.id]===void 0&&(x.state.transmissionRenderTarget[tt.id]=new ys(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?uu:Ga,minFilter:ds,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[tt.id],Ut=tt.viewport||H;Tt.setSize(Ut.z*R.transmissionResolutionScale,Ut.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(ct),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&Kt.render(rt);const It=R.toneMapping;R.toneMapping=Tr;const ne=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),x.setupLightsView(tt),dt===!0&&At.setGlobalState(R.clippingPlanes,tt),li(D,rt,tt),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Qt=0,xe=Z.length;Qt<xe;Qt++){const ye=Z[Qt],Xe=ye.object,De=ye.geometry,re=ye.material,$t=ye.group;if(re.side===Ia&&Xe.layers.test(tt.layers)){const gn=re.side;re.side=ti,re.needsUpdate=!0,mn(Xe,rt,tt,De,re,$t),re.side=gn,re.needsUpdate=!0,ie=!0}}ie===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Bt),R.setClearColor(ct,ut),ne!==void 0&&(tt.viewport=ne),R.toneMapping=It}function li(D,Z,rt){const tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=D.length;Q<Tt;Q++){const Ut=D[Q],Bt=Ut.object,It=Ut.geometry,ne=tt===null?Ut.material:tt,ie=Ut.group;Bt.layers.test(rt.layers)&&mn(Bt,Z,rt,It,ne,ie)}}function mn(D,Z,rt,tt,Q,Tt){D.onBeforeRender(R,Z,rt,tt,Q,Tt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(R,Z,rt,tt,D,Tt),Q.transparent===!0&&Q.side===Ia&&Q.forceSinglePass===!1?(Q.side=ti,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=Rr,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=Ia):R.renderBufferDirect(rt,Z,tt,Q,D,Tt),D.onAfterRender(R,Z,rt,tt,Q,Tt)}function _n(D,Z,rt){Z.isScene!==!0&&(Z=Te);const tt=qt.get(D),Q=x.state.lights,Tt=x.state.shadowsArray,Ut=Q.state.version,Bt=kt.getParameters(D,Q.state,Tt,Z,rt),It=kt.getProgramCacheKey(Bt);let ne=tt.programs;tt.environment=D.isMeshStandardMaterial?Z.environment:null,tt.fog=Z.fog,tt.envMap=(D.isMeshStandardMaterial?at:C).get(D.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,ne===void 0&&(D.addEventListener("dispose",jt),ne=new Map,tt.programs=ne);let ie=ne.get(It);if(ie!==void 0){if(tt.currentProgram===ie&&tt.lightsStateVersion===Ut)return As(D,Bt),ie}else Bt.uniforms=kt.getUniforms(D),D.onBeforeCompile(Bt,R),ie=kt.acquireProgram(Bt,It),ne.set(It,ie),tt.uniforms=Bt.uniforms;const Qt=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qt.clippingPlanes=At.uniform),As(D,Bt),tt.needsLights=_u(D),tt.lightsStateVersion=Ut,tt.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=ie,tt.uniformsList=null,ie}function fa(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=tf.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function As(D,Z){const rt=qt.get(D);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Rf(D,Z,rt,tt,Q){Z.isScene!==!0&&(Z=Te),I.resetTextureUnits();const Tt=Z.fog,Ut=tt.isMeshStandardMaterial?Z.environment:null,Bt=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Po,It=(tt.isMeshStandardMaterial?at:C).get(tt.envMap||Ut),ne=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Qt=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,ye=!!rt.morphAttributes.color;let Xe=Tr;tt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Xe=R.toneMapping);const De=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,re=De!==void 0?De.length:0,$t=qt.get(tt),gn=x.state.lights;if(dt===!0&&(St===!0||D!==A)){const Ke=D===A&&tt.id===b;At.setState(tt,D,Ke)}let Se=!1;tt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==gn.state.version||$t.outputColorSpace!==Bt||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isBatchedMesh&&$t.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$t.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$t.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$t.instancingMorph===!1&&Q.morphTexture!==null||$t.envMap!==It||tt.fog===!0&&$t.fog!==Tt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==At.numPlanes||$t.numIntersection!==At.numIntersection)||$t.vertexAlphas!==ne||$t.vertexTangents!==ie||$t.morphTargets!==Qt||$t.morphNormals!==xe||$t.morphColors!==ye||$t.toneMapping!==Xe||$t.morphTargetsCount!==re)&&(Se=!0):(Se=!0,$t.__version=tt.version);let Zn=$t.currentProgram;Se===!0&&(Zn=_n(tt,Z,Q));let zi=!1,Vn=!1,Mn=!1;const Pe=Zn.getUniforms(),kn=$t.uniforms;if(Wt.useProgram(Zn.program)&&(zi=!0,Vn=!0,Mn=!0),tt.id!==b&&(b=tt.id,Vn=!0),zi||A!==D){Wt.buffers.depth.getReversed()?(Rt.copy(D.projectionMatrix),AT(Rt),RT(Rt),Pe.setValue(V,"projectionMatrix",Rt)):Pe.setValue(V,"projectionMatrix",D.projectionMatrix),Pe.setValue(V,"viewMatrix",D.matrixWorldInverse);const Cn=Pe.map.cameraPosition;Cn!==void 0&&Cn.setValue(V,Jt.setFromMatrixPosition(D.matrixWorld)),le.logarithmicDepthBuffer&&Pe.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Pe.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,Vn=!0,Mn=!0)}if(Q.isSkinnedMesh){Pe.setOptional(V,Q,"bindMatrix"),Pe.setOptional(V,Q,"bindMatrixInverse");const Ke=Q.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Pe.setValue(V,"boneTexture",Ke.boneTexture,I))}Q.isBatchedMesh&&(Pe.setOptional(V,Q,"batchingTexture"),Pe.setValue(V,"batchingTexture",Q._matricesTexture,I),Pe.setOptional(V,Q,"batchingIdTexture"),Pe.setValue(V,"batchingIdTexture",Q._indirectTexture,I),Pe.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pe.setValue(V,"batchingColorTexture",Q._colorsTexture,I));const On=rt.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Xt.update(Q,rt,Zn),(Vn||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,Pe.setValue(V,"receiveShadow",Q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(kn.envMap.value=It,kn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Z.environment!==null&&(kn.envMapIntensity.value=Z.environmentIntensity),Vn&&(Pe.setValue(V,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&Cf(kn,Mn),Tt&&tt.fog===!0&&Dt.refreshFogUniforms(kn,Tt),Dt.refreshMaterialUniforms(kn,tt,W,$,x.state.transmissionRenderTarget[D.id]),tf.upload(V,fa($t),kn,I)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(tf.upload(V,fa($t),kn,I),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Pe.setValue(V,"center",Q.center),Pe.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pe.setValue(V,"normalMatrix",Q.normalMatrix),Pe.setValue(V,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ke=tt.uniformsGroups;for(let Cn=0,Rs=Ke.length;Cn<Rs;Cn++){const Kn=Ke[Cn];G.update(Kn,Zn),G.bind(Kn,Zn)}}return Zn}function Cf(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function _u(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,Z,rt){qt.get(D.texture).__webglTexture=Z,qt.get(D.depthTexture).__webglTexture=rt;const tt=qt.get(D);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=rt===void 0,tt.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Z){const rt=qt.get(D);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Lr=V.createFramebuffer();this.setRenderTarget=function(D,Z=0,rt=0){F=D,z=Z,N=rt;let tt=!0,Q=null,Tt=!1,Ut=!1;if(D){const It=qt.get(D);if(It.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(V.FRAMEBUFFER,null),tt=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(It.__hasExternalTextures)I.rebindTextures(D,qt.get(D.texture).__webglTexture,qt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Qt=D.depthTexture;if(It.__boundDepthTexture!==Qt){if(Qt!==null&&qt.has(Qt)&&(D.width!==Qt.image.width||D.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}const ne=D.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ut=!0);const ie=qt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?Q=ie[Z][rt]:Q=ie[Z],Tt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?Q=qt.get(D).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[rt]:Q=ie,H.copy(D.viewport),st.copy(D.scissor),K=D.scissorTest}else H.copy(nt).multiplyScalar(W).floor(),st.copy(Et).multiplyScalar(W).floor(),K=Ct;if(rt!==0&&(Q=Lr),Wt.bindFramebuffer(V.FRAMEBUFFER,Q)&&tt&&Wt.drawBuffers(D,Q),Wt.viewport(H),Wt.scissor(st),Wt.setScissorTest(K),Tt){const It=qt.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(Ut){const It=qt.get(D.texture),ne=Z;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.__webglTexture,rt,ne)}else if(D!==null&&rt!==0){const It=qt.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,rt)}b=-1},this.readRenderTargetPixels=function(D,Z,rt,tt,Q,Tt,Ut){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Wt.bindFramebuffer(V.FRAMEBUFFER,Bt);try{const It=D.texture,ne=It.format,ie=It.type;if(!le.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q&&V.readPixels(Z,rt,tt,Q,ft.convert(ne),ft.convert(ie),Tt)}finally{const It=F!==null?qt.get(F).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(D,Z,rt,tt,Q,Tt,Ut){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){const It=D.texture,ne=It.format,ie=It.type;if(!le.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q){Wt.bindFramebuffer(V.FRAMEBUFFER,Bt);const Qt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qt),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),V.readPixels(Z,rt,tt,Q,ft.convert(ne),ft.convert(ie),0);const xe=F!==null?qt.get(F).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,xe);const ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await bT(V,ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(Qt),V.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Z=null,rt=0){D.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1]);const tt=Math.pow(2,-rt),Q=Math.floor(D.image.width*tt),Tt=Math.floor(D.image.height*tt),Ut=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;I.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Ut,Bt,Q,Tt),Wt.unbindTexture()};const Yo=V.createFramebuffer(),ha=V.createFramebuffer();this.copyTextureToTexture=function(D,Z,rt=null,tt=null,Q=0,Tt=null){D.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,D=arguments[1],Z=arguments[2],Tt=arguments[3]||0,rt=null),Tt===null&&(Q!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Ut,Bt,It,ne,ie,Qt,xe,ye,Xe;const De=D.isCompressedTexture?D.mipmaps[Tt]:D.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,ie=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const On=Math.pow(2,-Q);Ut=Math.floor(De.width*On),Bt=Math.floor(De.height*On),D.isDataArrayTexture?It=De.depth:D.isData3DTexture?It=Math.floor(De.depth*On):It=1,ne=0,ie=0,Qt=0}tt!==null?(xe=tt.x,ye=tt.y,Xe=tt.z):(xe=0,ye=0,Xe=0);const re=ft.convert(Z.format),$t=ft.convert(Z.type);let gn;Z.isData3DTexture?(I.setTexture3D(Z,0),gn=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(I.setTexture2DArray(Z,0),gn=V.TEXTURE_2D_ARRAY):(I.setTexture2D(Z,0),gn=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Se=V.getParameter(V.UNPACK_ROW_LENGTH),Zn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),zi=V.getParameter(V.UNPACK_SKIP_PIXELS),Vn=V.getParameter(V.UNPACK_SKIP_ROWS),Mn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,De.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,De.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ne),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);const Pe=D.isDataArrayTexture||D.isData3DTexture,kn=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const On=qt.get(D),Ke=qt.get(Z),Cn=qt.get(On.__renderTarget),Rs=qt.get(Ke.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Kn=0;Kn<It;Kn++)Pe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.get(D).__webglTexture,Q,Qt+Kn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.get(Z).__webglTexture,Tt,Xe+Kn)),V.blitFramebuffer(ne,ie,Ut,Bt,xe,ye,Ut,Bt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||qt.has(D)){const On=qt.get(D),Ke=qt.get(Z);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Yo),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ha);for(let Cn=0;Cn<It;Cn++)Pe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,Q,Qt+Cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,Q),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ke.__webglTexture,Tt,Xe+Cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ke.__webglTexture,Tt),Q!==0?V.blitFramebuffer(ne,ie,Ut,Bt,xe,ye,Ut,Bt,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(gn,Tt,xe,ye,Xe+Cn,ne,ie,Ut,Bt):V.copyTexSubImage2D(gn,Tt,xe,ye,ne,ie,Ut,Bt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(gn,Tt,xe,ye,Xe,Ut,Bt,It,re,$t,De.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(gn,Tt,xe,ye,Xe,Ut,Bt,It,re,De.data):V.texSubImage3D(gn,Tt,xe,ye,Xe,Ut,Bt,It,re,$t,De):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,xe,ye,Ut,Bt,re,$t,De.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,xe,ye,De.width,De.height,re,De.data):V.texSubImage2D(V.TEXTURE_2D,Tt,xe,ye,Ut,Bt,re,$t,De);V.pixelStorei(V.UNPACK_ROW_LENGTH,Se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,zi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Vn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Mn),Tt===0&&Z.generateMipmaps&&V.generateMipmap(gn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,rt=null,tt=null,Q=0){return D.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,tt=arguments[1]||null,D=arguments[2],Z=arguments[3],Q=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Z,rt,tt,Q)},this.initRenderTarget=function(D){qt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Wt.unbindTexture()},this.resetState=function(){z=0,N=0,F=null,Wt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}}var kC=Object.defineProperty,XC=(o,t,e)=>t in o?kC(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,WC=(o,t,e)=>(XC(o,t+"",e),e);class qC{constructor(){WC(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const l=s.indexOf(e);l!==-1&&s.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}var YC=Object.defineProperty,jC=(o,t,e)=>t in o?YC(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,te=(o,t,e)=>(jC(o,typeof t!="symbol"?t+"":t,e),e);const Xc=new Sf,Ax=new vr,ZC=Math.cos(70*(Math.PI/180)),Rx=(o,t)=>(o%t+t)%t;class KC extends qC{constructor(t,e){super(),te(this,"object"),te(this,"domElement"),te(this,"enabled",!0),te(this,"target",new it),te(this,"minDistance",0),te(this,"maxDistance",1/0),te(this,"minZoom",0),te(this,"maxZoom",1/0),te(this,"minPolarAngle",0),te(this,"maxPolarAngle",Math.PI),te(this,"minAzimuthAngle",-1/0),te(this,"maxAzimuthAngle",1/0),te(this,"enableDamping",!1),te(this,"dampingFactor",.05),te(this,"enableZoom",!0),te(this,"zoomSpeed",1),te(this,"enableRotate",!0),te(this,"rotateSpeed",1),te(this,"enablePan",!0),te(this,"panSpeed",1),te(this,"screenSpacePanning",!0),te(this,"keyPanSpeed",7),te(this,"zoomToCursor",!1),te(this,"autoRotate",!1),te(this,"autoRotateSpeed",2),te(this,"reverseOrbit",!1),te(this,"reverseHorizontalOrbit",!1),te(this,"reverseVerticalOrbit",!1),te(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),te(this,"mouseButtons",{LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN}),te(this,"touches",{ONE:ao.ROTATE,TWO:ao.DOLLY_PAN}),te(this,"target0"),te(this,"position0"),te(this,"zoom0"),te(this,"_domElementKeyEvents",null),te(this,"getPolarAngle"),te(this,"getAzimuthalAngle"),te(this,"setPolarAngle"),te(this,"setAzimuthalAngle"),te(this,"getDistance"),te(this,"getZoomScale"),te(this,"listenToKeyEvents"),te(this,"stopListenToKeyEvents"),te(this,"saveState"),te(this,"reset"),te(this,"update"),te(this,"connect"),te(this,"dispose"),te(this,"dollyIn"),te(this,"dollyOut"),te(this,"getScale"),te(this,"setScale"),this.object=t,this.domElement=e,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>_.phi,this.getAzimuthalAngle=()=>_.theta,this.setPolarAngle=k=>{let ft=Rx(k,2*Math.PI),Nt=_.phi;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let G=Math.abs(ft-Nt);2*Math.PI-G<G&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.phi=ft-Nt,i.update()},this.setAzimuthalAngle=k=>{let ft=Rx(k,2*Math.PI),Nt=_.theta;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let G=Math.abs(ft-Nt);2*Math.PI-G<G&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.theta=ft-Nt,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=k=>{k.addEventListener("keydown",Dt),this._domElementKeyEvents=k},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(s),i.update(),d=f.NONE},this.update=(()=>{const k=new it,ft=new it(0,1,0),Nt=new Ss().setFromUnitVectors(t.up,ft),G=Nt.clone().invert(),bt=new it,lt=new Ss,_t=2*Math.PI;return function(){const Ot=i.object.position;Nt.setFromUnitVectors(t.up,ft),G.copy(Nt).invert(),k.copy(Ot).sub(i.target),k.applyQuaternion(Nt),_.setFromVector3(k),i.autoRotate&&d===f.NONE&&ct(st()),i.enableDamping?(_.theta+=g.theta*i.dampingFactor,_.phi+=g.phi*i.dampingFactor):(_.theta+=g.theta,_.phi+=g.phi);let jt=i.minAzimuthAngle,be=i.maxAzimuthAngle;isFinite(jt)&&isFinite(be)&&(jt<-Math.PI?jt+=_t:jt>Math.PI&&(jt-=_t),be<-Math.PI?be+=_t:be>Math.PI&&(be-=_t),jt<=be?_.theta=Math.max(jt,Math.min(be,_.theta)):_.theta=_.theta>(jt+be)/2?Math.max(jt,_.theta):Math.min(be,_.theta)),_.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,_.phi)),_.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(y,i.dampingFactor):i.target.add(y),i.zoomToCursor&&b||i.object.isOrthographicCamera?_.radius=Ct(_.radius):_.radius=Ct(_.radius*v),k.setFromSpherical(_),k.applyQuaternion(G),Ot.copy(i.target).add(k),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(g.theta*=1-i.dampingFactor,g.phi*=1-i.dampingFactor,y.multiplyScalar(1-i.dampingFactor)):(g.set(0,0,0),y.set(0,0,0));let ke=!1;if(i.zoomToCursor&&b){let me=null;if(i.object instanceof Yn&&i.object.isPerspectiveCamera){const nn=k.length();me=Ct(nn*v);const on=nn-me;i.object.position.addScaledVector(N,on),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const nn=new it(F.x,F.y,0);nn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix(),ke=!0;const on=new it(F.x,F.y,0);on.unproject(i.object),i.object.position.sub(on).add(nn),i.object.updateMatrixWorld(),me=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(Xc.origin.copy(i.object.position),Xc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Xc.direction))<ZC?t.lookAt(i.target):(Ax.setFromNormalAndCoplanarPoint(i.object.up,i.target),Xc.intersectPlane(Ax,i.target))))}else i.object instanceof $c&&i.object.isOrthographicCamera&&(ke=v!==1,ke&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix()));return v=1,b=!1,ke||bt.distanceToSquared(i.object.position)>p||8*(1-lt.dot(i.object.quaternion))>p?(i.dispatchEvent(s),bt.copy(i.object.position),lt.copy(i.object.quaternion),ke=!1,!0):!1}})(),this.connect=k=>{i.domElement=k,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",At),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",pt),i.domElement.addEventListener("wheel",kt)},this.dispose=()=>{var k,ft,Nt,G,bt,lt;i.domElement&&(i.domElement.style.touchAction="auto"),(k=i.domElement)==null||k.removeEventListener("contextmenu",At),(ft=i.domElement)==null||ft.removeEventListener("pointerdown",C),(Nt=i.domElement)==null||Nt.removeEventListener("pointercancel",pt),(G=i.domElement)==null||G.removeEventListener("wheel",kt),(bt=i.domElement)==null||bt.ownerDocument.removeEventListener("pointermove",at),(lt=i.domElement)==null||lt.ownerDocument.removeEventListener("pointerup",pt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Dt)};const i=this,s={type:"change"},l={type:"start"},c={type:"end"},f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=f.NONE;const p=1e-6,_=new tx,g=new tx;let v=1;const y=new it,T=new he,M=new he,S=new he,x=new he,L=new he,U=new he,R=new he,O=new he,z=new he,N=new it,F=new he;let b=!1;const A=[],H={};function st(){return 2*Math.PI/60/60*i.autoRotateSpeed}function K(){return Math.pow(.95,i.zoomSpeed)}function ct(k){i.reverseOrbit||i.reverseHorizontalOrbit?g.theta+=k:g.theta-=k}function ut(k){i.reverseOrbit||i.reverseVerticalOrbit?g.phi+=k:g.phi-=k}const X=(()=>{const k=new it;return function(Nt,G){k.setFromMatrixColumn(G,0),k.multiplyScalar(-Nt),y.add(k)}})(),$=(()=>{const k=new it;return function(Nt,G){i.screenSpacePanning===!0?k.setFromMatrixColumn(G,1):(k.setFromMatrixColumn(G,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(Nt),y.add(k)}})(),W=(()=>{const k=new it;return function(Nt,G){const bt=i.domElement;if(bt&&i.object instanceof Yn&&i.object.isPerspectiveCamera){const lt=i.object.position;k.copy(lt).sub(i.target);let _t=k.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),X(2*Nt*_t/bt.clientHeight,i.object.matrix),$(2*G*_t/bt.clientHeight,i.object.matrix)}else bt&&i.object instanceof $c&&i.object.isOrthographicCamera?(X(Nt*(i.object.right-i.object.left)/i.object.zoom/bt.clientWidth,i.object.matrix),$(G*(i.object.top-i.object.bottom)/i.object.zoom/bt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function xt(k){i.object instanceof Yn&&i.object.isPerspectiveCamera||i.object instanceof $c&&i.object.isOrthographicCamera?v=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function P(k){xt(v/k)}function nt(k){xt(v*k)}function Et(k){if(!i.zoomToCursor||!i.domElement)return;b=!0;const ft=i.domElement.getBoundingClientRect(),Nt=k.clientX-ft.left,G=k.clientY-ft.top,bt=ft.width,lt=ft.height;F.x=Nt/bt*2-1,F.y=-(G/lt)*2+1,N.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ct(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function Y(k){T.set(k.clientX,k.clientY)}function dt(k){Et(k),R.set(k.clientX,k.clientY)}function St(k){x.set(k.clientX,k.clientY)}function Rt(k){M.set(k.clientX,k.clientY),S.subVectors(M,T).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ct(2*Math.PI*S.x/ft.clientHeight),ut(2*Math.PI*S.y/ft.clientHeight)),T.copy(M),i.update()}function wt(k){O.set(k.clientX,k.clientY),z.subVectors(O,R),z.y>0?P(K()):z.y<0&&nt(K()),R.copy(O),i.update()}function Jt(k){L.set(k.clientX,k.clientY),U.subVectors(L,x).multiplyScalar(i.panSpeed),W(U.x,U.y),x.copy(L),i.update()}function zt(k){Et(k),k.deltaY<0?nt(K()):k.deltaY>0&&P(K()),i.update()}function Te(k){let ft=!1;switch(k.code){case i.keys.UP:W(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:W(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:W(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:W(-i.keyPanSpeed,0),ft=!0;break}ft&&(k.preventDefault(),i.update())}function Ce(){if(A.length==1)T.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);T.set(k,ft)}}function ae(){if(A.length==1)x.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);x.set(k,ft)}}function V(){const k=A[0].pageX-A[1].pageX,ft=A[0].pageY-A[1].pageY,Nt=Math.sqrt(k*k+ft*ft);R.set(0,Nt)}function pn(){i.enableZoom&&V(),i.enablePan&&ae()}function oe(){i.enableZoom&&V(),i.enableRotate&&Ce()}function le(k){if(A.length==1)M.set(k.pageX,k.pageY);else{const Nt=Ft(k),G=.5*(k.pageX+Nt.x),bt=.5*(k.pageY+Nt.y);M.set(G,bt)}S.subVectors(M,T).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ct(2*Math.PI*S.x/ft.clientHeight),ut(2*Math.PI*S.y/ft.clientHeight)),T.copy(M)}function Wt(k){if(A.length==1)L.set(k.pageX,k.pageY);else{const ft=Ft(k),Nt=.5*(k.pageX+ft.x),G=.5*(k.pageY+ft.y);L.set(Nt,G)}U.subVectors(L,x).multiplyScalar(i.panSpeed),W(U.x,U.y),x.copy(L)}function we(k){const ft=Ft(k),Nt=k.pageX-ft.x,G=k.pageY-ft.y,bt=Math.sqrt(Nt*Nt+G*G);O.set(0,bt),z.set(0,Math.pow(O.y/R.y,i.zoomSpeed)),P(z.y),R.copy(O)}function qt(k){i.enableZoom&&we(k),i.enablePan&&Wt(k)}function I(k){i.enableZoom&&we(k),i.enableRotate&&le(k)}function C(k){var ft,Nt;i.enabled!==!1&&(A.length===0&&((ft=i.domElement)==null||ft.ownerDocument.addEventListener("pointermove",at),(Nt=i.domElement)==null||Nt.ownerDocument.addEventListener("pointerup",pt)),Gt(k),k.pointerType==="touch"?Ht(k):Mt(k))}function at(k){i.enabled!==!1&&(k.pointerType==="touch"?pe(k):gt(k))}function pt(k){var ft,Nt,G;Kt(k),A.length===0&&((ft=i.domElement)==null||ft.releasePointerCapture(k.pointerId),(Nt=i.domElement)==null||Nt.ownerDocument.removeEventListener("pointermove",at),(G=i.domElement)==null||G.ownerDocument.removeEventListener("pointerup",pt)),i.dispatchEvent(c),d=f.NONE}function Mt(k){let ft;switch(k.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case io.DOLLY:if(i.enableZoom===!1)return;dt(k),d=f.DOLLY;break;case io.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;St(k),d=f.PAN}else{if(i.enableRotate===!1)return;Y(k),d=f.ROTATE}break;case io.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;Y(k),d=f.ROTATE}else{if(i.enablePan===!1)return;St(k),d=f.PAN}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function gt(k){if(i.enabled!==!1)switch(d){case f.ROTATE:if(i.enableRotate===!1)return;Rt(k);break;case f.DOLLY:if(i.enableZoom===!1)return;wt(k);break;case f.PAN:if(i.enablePan===!1)return;Jt(k);break}}function kt(k){i.enabled===!1||i.enableZoom===!1||d!==f.NONE&&d!==f.ROTATE||(k.preventDefault(),i.dispatchEvent(l),zt(k),i.dispatchEvent(c))}function Dt(k){i.enabled===!1||i.enablePan===!1||Te(k)}function Ht(k){switch(Xt(k),A.length){case 1:switch(i.touches.ONE){case ao.ROTATE:if(i.enableRotate===!1)return;Ce(),d=f.TOUCH_ROTATE;break;case ao.PAN:if(i.enablePan===!1)return;ae(),d=f.TOUCH_PAN;break;default:d=f.NONE}break;case 2:switch(i.touches.TWO){case ao.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pn(),d=f.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),d=f.TOUCH_DOLLY_ROTATE;break;default:d=f.NONE}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function pe(k){switch(Xt(k),d){case f.TOUCH_ROTATE:if(i.enableRotate===!1)return;le(k),i.update();break;case f.TOUCH_PAN:if(i.enablePan===!1)return;Wt(k),i.update();break;case f.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qt(k),i.update();break;case f.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(k),i.update();break;default:d=f.NONE}}function At(k){i.enabled!==!1&&k.preventDefault()}function Gt(k){A.push(k)}function Kt(k){delete H[k.pointerId];for(let ft=0;ft<A.length;ft++)if(A[ft].pointerId==k.pointerId){A.splice(ft,1);return}}function Xt(k){let ft=H[k.pointerId];ft===void 0&&(ft=new he,H[k.pointerId]=ft),ft.set(k.pageX,k.pageY)}function Ft(k){const ft=k.pointerId===A[0].pointerId?A[1]:A[0];return H[ft.pointerId]}this.dollyIn=(k=K())=>{nt(k),i.update()},this.dollyOut=(k=K())=>{P(k),i.update()},this.getScale=()=>v,this.setScale=k=>{xt(k),i.update()},this.getZoomScale=()=>K(),e!==void 0&&this.connect(e),this.update()}}var Zl=(o=>(o.Idle="Idle",o.Select="Select",o.Move="Move",o.Shot="Shot",o))(Zl||{}),Xi=(o=>(o.SelectPlayer="Select player",o.MovePlayer="Move player",o.ShotPlayer="Shot player",o.Complete="Complete",o.Cancel="Cancel",o))(Xi||{});class QC{constructor(){Re(this,"state");this.state="Idle"}getState(){return this.state}transition(t){if(t==="Cancel")return this.state="Idle",!0;switch(this.state){case"Idle":if(t==="Select player")return this.state="Select",!0;break;case"Select":if(t==="Move player")return this.state="Move",!0;break;case"Move":if(t==="Shot player")return this.state="Shot",!0;break;case"Shot":if(t==="Complete")return this.state="Idle",!0;break}return!1}}class hp{constructor(){Re(this,"id",0);Re(this,"x",0);Re(this,"y",0)}}class JC{constructor(){Re(this,"List");this.List={}}addVertex(t){this.List[t]=[]}addEdge(t,e){this.List[t].push(e),this.List[e].push(t)}addEdgeDirected(t,e){this.List[t].push(e)}removeEdge(t,e){this.List[t]=this.List[t].filter(i=>i!==e),e!==void 0&&(this.List[e]=this.List[e].filter(i=>i!==t))}removeVertex(t){for(;this.List[t].length;){const e=this.List[t].pop();this.removeEdge(t,e)}delete this.List[t]}}class Wc{constructor(t,e,i,s){Re(this,"start");Re(this,"end");this.start={x:t,y:e},this.end={x:i,y:s}}intersects(t,e){function i(s,l,c){return(c.y-s.y)*(l.x-s.x)>(l.y-s.y)*(c.x-s.x)}return i(this.start,t,e)!=i(this.end,t,e)&&i(this.start,this.end,t)!=i(this.start,this.end,e)}}function dp(o,t,e,i){return[new Wc(o,t,o+e,t),new Wc(o+e,t,o+e,t+i),new Wc(o+e,t+i,o,t+i),new Wc(o,t+i,o,t)]}function $C(o,t,e){for(const i of t)for(const s of o.List[i.id]){const l=t.find(c=>c.id===s);if(l){for(const c of e)if(c.intersects({x:i.x,y:i.y},{x:l.x,y:l.y})){o.removeEdge(i.id,l.id);break}}}}class tw{constructor(){Re(this,"nodeList",[]);Re(this,"player",new hp);Re(this,"emeny",new hp);Re(this,"Edges",new JC);Re(this,"kakudo",50);Re(this,"NodesInGridSize",50);Re(this,"Lines",[]);this.Init_model()}Init_model(){const t=this.NodesInGridSize;let e=0;for(let i=0;i<t;i++)for(let s=0;s<t;s++){let l=new hp;l.id=e,l.x=i*30,l.y=s*30,this.nodeList.push(l),this.Edges.addVertex(e),e++}this.connectNearNodes(),this.setPlayerRef(this.nodeList[0]),this.setEmenyRef(this.nodeList[2]);for(const i of this.nodeList)(i.id+1)%t!=0&&this.Edges.addEdgeDirected(i.id,i.id+1),i.id%t!=0&&this.Edges.addEdgeDirected(i.id,i.id-1),i.id+t<t*t&&this.Edges.addEdgeDirected(i.id,i.id+t),i.id-t>=0&&this.Edges.addEdgeDirected(i.id,i.id-t);dp(10,10,100,100).forEach(i=>{this.Lines.push(i)}),dp(10,150,150,100).forEach(i=>{this.Lines.push(i)}),dp(150,10,100,100).forEach(i=>{this.Lines.push(i)}),$C(this.Edges,this.nodeList,this.Lines)}connectAllNodes(){for(let t=0;t<this.nodeList.length;t++)for(let e=t+1;e<this.nodeList.length;e++)this.Edges.addEdgeDirected(this.nodeList[t].id,this.nodeList[e].id),this.Edges.addEdgeDirected(this.nodeList[e].id,this.nodeList[t].id)}connectNearNodes(){for(let t=0;t<this.nodeList.length;t++)for(let e=t+1;e<this.nodeList.length;e++)this.getNodeDistance(this.nodeList[t],this.nodeList[e])<1e3&&(this.Edges.addEdgeDirected(this.nodeList[t].id,this.nodeList[e].id),this.Edges.addEdgeDirected(this.nodeList[e].id,this.nodeList[t].id))}getNodeDistance(t,e){const i=t.x-e.x,s=t.y-e.y;return Math.sqrt(i*i+s*s)}getNodeInDirection(t,e,i){const s=t.x+i*Math.cos(e),l=t.y+i*Math.sin(e);let c=null,f=1/0;for(const d of this.nodeList){const p=d.x-s,_=d.y-l,g=Math.sqrt(p*p+_*_);g<f&&(f=g,c=d)}return c}setPlayerRef(t){this.player.id=t.id,this.player.x=t.x,this.player.y=t.y}setEmenyRef(t){this.emeny.id=t.id,this.emeny.x=t.x,this.emeny.y=t.y}connectNodesInGrid(t){for(let e=0;e<t;e++)for(let i=0;i<t;i++){let s=e*t+i;i+1<t&&this.Edges.addEdgeDirected(s,s+1),e+1<t&&this.Edges.addEdgeDirected(s,s+t)}}getNodesAtAngle(t,e,i){return this.nodeList.filter(s=>{const l=this.getAngleBetweenNodes(t,s);return Math.abs(l-e)<this.kakudo&&this.getNodeDistance(t,s)<=i})}getAngleBetweenNodes(t,e){const i=e.x-t.x,s=e.y-t.y;return Math.atan2(s,i)*(180/Math.PI)}getConnectedNodes(t){const e=[],i=this.Edges.List[t.id];for(const s of i){const l=this.nodeList.find(c=>c.id===s);l&&e.push(l)}return e}getConnectedNodesAtAngle(t,e,i){const s=this.getConnectedNodes(t),l={x:Math.cos(e*Math.PI/180),y:Math.sin(e*Math.PI/180)};return s.filter(c=>{const f={x:c.x-t.x,y:c.y-t.y},d=this.getNodeDistance(t,c),p=(f.x*l.x+f.y*l.y)/(d*Math.sqrt(l.x*l.x+l.y*l.y));return Math.acos(p)*(180/Math.PI)<this.kakudo&&d<=i})}areNodesConnected(t,e){return this.Edges.List[t.id].includes(e.id)}}function Pa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Sy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},zm,Ln,We,oa=1e8,Hn=1/oa,cm=Math.PI*2,ew=cm/4,nw=0,My=Math.sqrt,iw=Math.cos,aw=Math.sin,Rn=function(t){return typeof t=="string"},tn=function(t){return typeof t=="function"},ka=function(t){return typeof t=="number"},Im=function(t){return typeof t>"u"},ua=function(t){return typeof t=="object"},ii=function(t){return t!==!1},Bm=function(){return typeof window<"u"},qc=function(t){return tn(t)||Rn(t)},Ey=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,fm=/(?:-?\.?\d|\.)+/gi,Ty=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,by=/[+-]=-?[.\d]+/,Ay=/[^,'"\[\]\s]+/gi,rw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,ea,hm,Fm,yi={},hf={},Ry,Cy=function(t){return(hf=Bo(t,yi))&&oi},Hm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},nu=function(t,e){return!e&&console.warn(t)},wy=function(t,e){return t&&(yi[t]=e)&&hf&&(hf[t]=e)||yi},iu=function(){return 0},sw={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},ow={suppressEvents:!0},Gm={},br=[],dm={},Dy,_i={},mp={},Cx=30,nf=[],Vm="",km=function(t){var e=t[0],i,s;if(ua(e)||tn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=nf.length;s--&&!nf[s].targetTest(e););i=nf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new tS(t[s],i)))||t.splice(s,1);return t},ms=function(t){return t._gsap||km(Pi(t))[0]._gsap},Uy=function(t,e,i){return(i=t[e])&&tn(i)?t[e]():Im(i)&&t.getAttribute&&t.getAttribute(e)||i},ai=function(t,e){return(t=t.split(",")).forEach(e)||t},rn=function(t){return Math.round(t*1e5)/1e5||0},dn=function(t){return Math.round(t*1e7)/1e7||0},Ro=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},lw=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},df=function(){var t=br.length,e=br.slice(0),i,s;for(dm={},br.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Ly=function(t,e,i,s){br.length&&!Ln&&df(),t.render(e,i,Ln&&e<0&&(t._initted||t._startAt)),br.length&&!Ln&&df()},Oy=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ay).length<2?e:Rn(t)?t.trim():t},Ny=function(t){return t},Si=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},uw=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Bo=function(t,e){for(var i in e)t[i]=e[i];return t},wx=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ua(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},pf=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},Jl=function(t){var e=t.parent||je,i=t.keyframes?uw(Gn(t.keyframes)):Si;if(ii(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},cw=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Py=function(t,e,i,s,l){var c=t[s],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=c,e.parent=e._dp=t,e},Tf=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=e._prev,c=e._next;l?l._next=c:t[i]===e&&(t[i]=c),c?c._prev=l:t[s]===e&&(t[s]=l),e._next=e._prev=e.parent=null},wr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},_s=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},fw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},pm=function(t,e,i,s){return t._startAt&&(Ln?t._startAt.revert(ef):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},hw=function o(t){return!t||t._ts&&o(t.parent)},Dx=function(t){return t._repeat?Fo(t._tTime,t=t.duration()+t._rDelay)*t:0},Fo=function(t,e){var i=Math.floor(t=dn(t/e));return t&&i===t?i-1:i},mf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},bf=function(t){return t._end=dn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Hn)||0))},Af=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=dn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),bf(t),i._dirty||_s(i,t)),t},zy=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=mf(t.rawTime(),e),(!e._dur||du(0,e.totalDuration(),i)-e._tTime>Hn)&&e.render(i,!0)),_s(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},ia=function(t,e,i,s){return e.parent&&wr(e),e._start=dn((ka(i)?i:i||t!==je?Oi(t,i,e):t._time)+e._delay),e._end=dn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Py(t,e,"_first","_last",t._sort?"_start":0),mm(e)||(t._recent=e),s||zy(t,e),t._ts<0&&Af(t,t._tTime),t},Iy=function(t,e){return(yi.ScrollTrigger||Hm("scrollTrigger",e))&&yi.ScrollTrigger.create(e,t)},By=function(t,e,i,s,l){if(Wm(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!Ln&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dy!==gi.frame)return br.push(t),t._lazy=[l,s],1},dw=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},mm=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},pw=function(t,e,i,s){var l=t.ratio,c=e<0||!e&&(!t._start&&dw(t)&&!(!t._initted&&mm(t))||(t._ts<0||t._dp._ts<0)&&!mm(t))?0:1,f=t._rDelay,d=0,p,_,g;if(f&&t._repeat&&(d=du(0,t._tDur,e),_=Fo(d,f),t._yoyo&&_&1&&(c=1-c),_!==Fo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Ln||s||t._zTime===Hn||!e&&t._zTime){if(!t._initted&&By(t,e,s,i,d))return;for(g=t._zTime,t._zTime=e||(i?Hn:0),i||(i=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;e<0&&pm(t,e,i,!0),t._onUpdate&&!i&&vi(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&vi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&wr(t,1),!i&&!Ln&&(vi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},mw=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Ho=function(t,e,i,s){var l=t._repeat,c=dn(e)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:dn(c*(l+1)+t._rDelay*l):c,f>0&&!s&&Af(t,t._tTime=t._tDur*f),t.parent&&bf(t),i||_s(t.parent,t),t},Ux=function(t){return t instanceof jn?_s(t):Ho(t,t._dur)},_w={_start:0,endTime:iu,totalDuration:iu},Oi=function o(t,e,i){var s=t.labels,l=t._recent||_w,c=t.duration()>=oa?l.endTime(!1):t._dur,f,d,p;return Rn(e)&&(isNaN(e)||e in s)?(d=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:i).totalDuration()/100:1)):f<0?(e in s||(s[e]=c),s[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&i&&(d=d/100*(Gn(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+d:c+d)):e==null?c:+e},$l=function(t,e,i){var s=ka(e[1]),l=(s?2:1)+(t<2?0:1),c=e[l],f,d;if(s&&(c.duration=e[1]),c.parent=i,t){for(f=c,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ii(d.vars.inherit)&&d.parent;c.immediateRender=ii(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new hn(e[0],c,e[l+1])},Ur=function(t,e){return t||t===0?e(t):e},du=function(t,e,i){return i<t?t:i>e?e:i},Fn=function(t,e){return!Rn(t)||!(e=rw.exec(t))?"":e[1]},gw=function(t,e,i){return Ur(i,function(s){return du(t,e,s)})},_m=[].slice,Fy=function(t,e){return t&&ua(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ua(t[0]))&&!t.nodeType&&t!==ea},vw=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var l;return Rn(s)&&!e||Fy(s,1)?(l=i).push.apply(l,Pi(s)):i.push(s)})||i},Pi=function(t,e,i){return We&&!e&&We.selector?We.selector(t):Rn(t)&&!i&&(hm||!Go())?_m.call((e||Fm).querySelectorAll(t),0):Gn(t)?vw(t,i):Fy(t)?_m.call(t,0):t?[t]:[]},gm=function(t){return t=Pi(t)[0]||nu("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Pi(e,i.querySelectorAll?i:i===t?nu("Invalid scope")||Fm.createElement("div"):t)}},Hy=function(t){return t.sort(function(){return .5-Math.random()})},Gy=function(t){if(tn(t))return t;var e=ua(t)?t:{each:t},i=gs(e.ease),s=e.from||0,l=parseFloat(e.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,p=e.axis,_=s,g=s;return Rn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(_=s[0],g=s[1]),function(v,y,T){var M=(T||e).length,S=c[M],x,L,U,R,O,z,N,F,b;if(!S){if(b=e.grid==="auto"?0:(e.grid||[1,oa])[1],!b){for(N=-1e8;N<(N=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],x=d?Math.min(b,M)*_-.5:s%b,L=b===oa?0:d?M*g/b-.5:s/b|0,N=0,F=oa,z=0;z<M;z++)U=z%b-x,R=L-(z/b|0),S[z]=O=p?Math.abs(p==="y"?R:U):My(U*U+R*R),O>N&&(N=O),O<F&&(F=O);s==="random"&&Hy(S),S.max=N-F,S.min=F,S.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Fn(e.amount||e.each)||0,i=i&&M<0?Qy(i):i}return M=(S[v]-S.min)/S.max||0,dn(S.b+(i?i(M):M)*S.v)+S.u}},vm=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=dn(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(ka(i)?0:Fn(i))}},Vy=function(t,e){var i=Gn(t),s,l;return!i&&ua(t)&&(s=i=t.radius||oa,t.values?(t=Pi(t.values),(l=!ka(t[0]))&&(s*=s)):t=vm(t.increment)),Ur(e,i?tn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=oa,_=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-d,v=v*v+y*y):v=Math.abs(t[g]-f),v<p&&(p=v,_=g);return _=!s||p<=s?t[_]:c,l||_===c||ka(c)?_:_+Fn(c)}:vm(t))},ky=function(t,e,i,s){return Ur(Gn(t)?!e:i===!0?!!(i=0):!s,function(){return Gn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},xw=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(l,c){return c(l)},s)}},yw=function(t,e){return function(i){return t(parseFloat(i))+(e||Fn(i))}},Sw=function(t,e,i){return Wy(t,e,0,1,i)},Xy=function(t,e,i){return Ur(i,function(s){return t[~~e(s)]})},Mw=function o(t,e,i){var s=e-t;return Gn(t)?Xy(t,o(0,t.length),e):Ur(i,function(l){return(s+(l-t)%s)%s+t})},Ew=function o(t,e,i){var s=e-t,l=s*2;return Gn(t)?Xy(t,o(0,t.length-1),e):Ur(i,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},au=function(t){for(var e=0,i="",s,l,c,f;~(s=t.indexOf("random(",e));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?Ay:fm),i+=t.substr(e,s-e)+ky(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return i+t.substr(e,t.length-e)},Wy=function(t,e,i,s,l){var c=e-t,f=s-i;return Ur(l,function(d){return i+((d-t)/c*f||0)})},Tw=function o(t,e,i,s){var l=isNaN(t+e)?0:function(y){return(1-y)*t+y*e};if(!l){var c=Rn(t),f={},d,p,_,g,v;if(i===!0&&(s=1)&&(i=null),c)t={p:t},e={p:e};else if(Gn(t)&&!Gn(e)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(o(t[p-1],t[p]));g--,l=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},i=e}else s||(t=Bo(Gn(t)?[]:{},t));if(!_){for(d in e)Xm.call(f,t,d,"get",e[d]);l=function(T){return jm(T,f)||(c?t.p:t)}}}return Ur(i,l)},Lx=function(t,e,i){var s=t.labels,l=oa,c,f,d;for(c in s)f=s[c]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},vi=function(t,e,i){var s=t.vars,l=s[e],c=We,f=t._ctx,d,p,_;if(l)return d=s[e+"Params"],p=s.callbackScope||t,i&&br.length&&df(),f&&(We=f),_=d?l.apply(p,d):l.call(p),We=c,_},Kl=function(t){return wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ln),t.progress()<1&&vi(t,"onInterrupt"),t},Eo,qy=[],Yy=function(t){if(t)if(t=!t.name&&t.default||t,Bm()||t.headless){var e=t.name,i=tn(t),s=e&&!i&&t.init?function(){this._props=[]}:t,l={init:iu,render:jm,add:Xm,kill:Hw,modifier:Fw,rawVars:0},c={targetTest:0,get:0,getSetter:Ym,aliases:{},register:0};if(Go(),t!==s){if(_i[e])return;Si(s,Si(pf(t,l),c)),Bo(s.prototype,Bo(l,pf(t,c))),_i[s.prop=e]=s,t.targetTest&&(nf.push(s),Gm[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wy(e,s),t.register&&t.register(oi,s,ri)}else qy.push(t)},He=255,Ql={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},_p=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*He+.5|0},jy=function(t,e,i){var s=t?ka(t)?[t>>16,t>>8&He,t&He]:0:Ql.black,l,c,f,d,p,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ql[t])s=Ql[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&He,s&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(fm),!e)d=+s[0]%360/360,p=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(p+1):_+p-_*p,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=_p(d+1/3,l,c),s[1]=_p(d,l,c),s[2]=_p(d-1/3,l,c);else if(~t.indexOf("="))return s=t.match(Ty),i&&s.length<4&&(s[3]=1),s}else s=t.match(fm)||Ql.transparent;s=s.map(Number)}return e&&!T&&(l=s[0]/He,c=s[1]/He,f=s[2]/He,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?d=p=0:(y=g-v,p=_>.5?y/(2-g-v):y/(g+v),d=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(_*100+.5)),i&&s.length<4&&(s[3]=1),s},Zy=function(t){var e=[],i=[],s=-1;return t.split(Ar).forEach(function(l){var c=l.match(Mo)||[];e.push.apply(e,c),i.push(s+=c.length+1)}),e.c=i,e},Ox=function(t,e,i){var s="",l=(t+s).match(Ar),c=e?"hsla(":"rgba(",f=0,d,p,_,g;if(!l)return t;if(l=l.map(function(v){return(v=jy(v,e,1))&&c+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(_=Zy(t),d=i.c,d.join(s)!==_.c.join(s)))for(p=t.replace(Ar,"1").split(Mo),g=p.length-1;f<g;f++)s+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:i).shift());if(!p)for(p=t.split(Ar),g=p.length-1;f<g;f++)s+=p[f]+l[f];return s+p[g]},Ar=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ql)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),bw=/hsl[a]?\(/,Ky=function(t){var e=t.join(" "),i;if(Ar.lastIndex=0,Ar.test(e))return i=bw.test(e),t[1]=Ox(t[1],i),t[0]=Ox(t[0],i,Zy(t[1])),!0},ru,gi=function(){var o=Date.now,t=500,e=33,i=o(),s=i,l=1e3/240,c=l,f=[],d,p,_,g,v,y,T=function M(S){var x=o()-s,L=S===!0,U,R,O,z;if((x>t||x<0)&&(i+=x-e),s+=x,O=s-i,U=O-c,(U>0||L)&&(z=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=U+(U>=l?4:l-U),R=1),L||(d=p(M)),R)for(y=0;y<f.length;y++)f[y](O,v,z,S)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Ry&&(!hm&&Bm()&&(ea=hm=window,Fm=ea.document||{},yi.gsap=oi,(ea.gsapVersions||(ea.gsapVersions=[])).push(oi.version),Cy(hf||ea.GreenSockGlobals||!ea.gsap&&ea||{}),qy.forEach(Yy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},ru=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(d),ru=0,p=iu},lagSmoothing:function(S,x){t=S||1/0,e=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,L){var U=x?function(R,O,z,N){S(R,O,z,N),g.remove(U)}:S;return g.remove(S),f[L?"unshift":"push"](U),Go(),U},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g}(),Go=function(){return!ru&&gi.wake()},Ee={},Aw=/^[\d.\-M][\d.\-,\s]/,Rw=/["']/g,Cw=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],l=1,c=i.length,f,d,p;l<c;l++)d=i[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),e[s]=isNaN(p)?p.replace(Rw,"").trim():+p,s=d.substr(f+1).trim();return e},ww=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},Dw=function(t){var e=(t+"").split("("),i=Ee[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Cw(e[1])]:ww(t).split(",").map(Oy)):Ee._CE&&Aw.test(t)?Ee._CE("",t):i},Qy=function(t){return function(e){return 1-t(1-e)}},Jy=function o(t,e){for(var i=t._first,s;i;)i instanceof jn?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},gs=function(t,e){return t&&(tn(t)?t:Ee[t]||Dw(t))||e},Ts=function(t,e,i,s){i===void 0&&(i=function(d){return 1-e(1-d)}),s===void 0&&(s=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:s},c;return ai(t,function(f){Ee[f]=yi[f]=l,Ee[c=f.toLowerCase()]=i;for(var d in l)Ee[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Ee[f+"."+d]=l[d]}),l},$y=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gp=function o(t,e,i){var s=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),c=l/cm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*aw((_-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:$y(f);return l=cm/l,d.config=function(p,_){return o(t,p,_)},d},vp=function o(t,e){e===void 0&&(e=1.70158);var i=function(c){return c?--c*c*((e+1)*c+e)+1:0},s=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:$y(i);return s.config=function(l){return o(t,l)},s};ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ts(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;Ts("Elastic",gp("in"),gp("out"),gp());(function(o,t){var e=1/t,i=2*e,s=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ts("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ts("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ts("Circ",function(o){return-(My(1-o*o)-1)});Ts("Sine",function(o){return o===1?1:-iw(o*ew)+1});Ts("Back",vp("in"),vp("out"),vp());Ee.SteppedEase=Ee.steps=yi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),l=e?1:0,c=1-Hn;return function(f){return((s*du(0,c,f)|0)+l)*i}}};Io.ease=Ee["quad.out"];ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Vm+=o+","+o+"Params,"});var tS=function(t,e){this.id=nw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Uy,this.set=e?e.getSetter:Ym},su=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ho(this,+e.duration,1,1),this.data=e.data,We&&(this._ctx=We,We.data.push(this)),ru||gi.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ho(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(Go(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Af(this,i),!l._dp||l.parent||zy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ia(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Hn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ly(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Dx(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Dx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?Fo(this._tTime,l)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?mf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(du(-Math.abs(this._delay),this._tDur,l),s!==!1),bf(this),fw(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Hn&&(this._tTime-=Hn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ia(s,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ii(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mf(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=ow);var s=Ln;return Ln=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ln=s,this},t.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ux(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Ux(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(Oi(this,i),ii(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ii(s)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-Hn)},t.eventCallback=function(i,s,l){var c=this.vars;return arguments.length>1?(s?(c[i]=s,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},t.then=function(i){var s=this;return new Promise(function(l){var c=tn(i)?i:Ny,f=function(){var p=s.then;s.then=null,tn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),l(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Kl(this)},o}();Si(su.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var jn=function(o){Sy(t,o);function t(i,s){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=ii(i.sortChildren),je&&ia(i.parent||je,Pa(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Iy(Pa(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(s,l,c){return $l(0,arguments,this),this},e.from=function(s,l,c){return $l(1,arguments,this),this},e.fromTo=function(s,l,c,f){return $l(2,arguments,this),this},e.set=function(s,l,c){return l.duration=0,l.parent=this,Jl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new hn(s,l,Oi(this,c),1),this},e.call=function(s,l,c){return ia(this,hn.delayedCall(0,s,l),c)},e.staggerTo=function(s,l,c,f,d,p,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=_,c.parent=this,new hn(s,c,Oi(this,d)),this},e.staggerFrom=function(s,l,c,f,d,p,_){return c.runBackwards=1,Jl(c).immediateRender=ii(c.immediateRender),this.staggerTo(s,l,c,f,d,p,_)},e.staggerFromTo=function(s,l,c,f,d,p,_,g){return f.startAt=c,Jl(f).immediateRender=ii(f.immediateRender),this.staggerTo(s,l,f,d,p,_,g)},e.render=function(s,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=s<=0?0:dn(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,T,M,S,x,L,U,R,O,z,N;if(this!==je&&_>d&&s>=0&&(_=d),_!==this._tTime||c||g){if(f!==this._time&&p&&(_+=this._time-f,s+=this._time-f),v=_,R=this._start,U=this._ts,x=!U,g&&(p||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(z=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=dn(_%S),_===d?(M=this._repeat,v=p):(O=dn(_/S),M=~~O,M&&M===O&&(v=p,M--),v>p&&(v=p)),O=Fo(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),z&&M&1&&(v=p-v,N=1),M!==O&&!this._lock){var F=z&&O&1,b=F===(z&&M&1);if(M<O&&(F=!F),f=F?0:_%p?p:_,this._lock=1,this.render(f||(N?0:dn(M*S)),l,!p)._lock=0,this._tTime=_,!l&&this.parent&&vi(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=F?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Jy(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=mw(this,dn(f),dn(v)),L&&(_-=v-(v=L._start))),this._tTime=_,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&v&&!l&&!M&&(vi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=-1e-8);break}}y=T}else{y=this._last;for(var A=s<0?s:v;y;){if(T=y._prev,(y._act||A<=y._end)&&y._ts&&L!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(A-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(A-y._start)*y._ts,l,c||Ln&&(y._initted||y._startAt)),v!==this._time||!this._ts&&!x){L=0,T&&(_+=this._zTime=A?-1e-8:Hn);break}}y=T}}if(L&&!l&&(this.pause(),L.render(v>=f?0:-1e-8)._zTime=v>=f?1:-1,this._ts))return this._start=R,bf(this),this.render(s,l,c);this._onUpdate&&!l&&vi(this,"onUpdate",!0),(_===d&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(_===d&&this._ts>0||!_&&this._ts<0)&&wr(this,1),!l&&!(s<0&&!f)&&(_||f||!d)&&(vi(this,_===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,l){var c=this;if(ka(l)||(l=Oi(this,l,s)),!(s instanceof su)){if(Gn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Rn(s))return this.addLabel(s,l);if(tn(s))s=hn.delayedCall(0,s);else return this}return this!==s?ia(this,s,l):this},e.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof hn?l&&d.push(p):(c&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},e.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},e.remove=function(s){return Rn(s)?this.removeLabel(s):tn(s)?this.killTweensOf(s):(s.parent===this&&Tf(this,s),s===this._recent&&(this._recent=this._last),_s(this))},e.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dn(gi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},e.addLabel=function(s,l){return this.labels[s]=Oi(this,l),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,l,c){var f=hn.delayedCall(0,l||iu,c);return f.data="isPause",this._hasPause=1,ia(this,f,Oi(this,s))},e.removePause=function(s){var l=this._first;for(s=Oi(this,s);l;)l._start===s&&l.data==="isPause"&&wr(l),l=l._next},e.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)yr!==f[d]&&f[d].kill(s,l);return this},e.getTweensOf=function(s,l){for(var c=[],f=Pi(s),d=this._first,p=ka(l),_;d;)d instanceof hn?lw(d._targets,f)&&(p?(!yr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(_=d.getTweensOf(f,l)).length&&c.push.apply(c,_),d=d._next;return c},e.tweenTo=function(s,l){l=l||{};var c=this,f=Oi(c,s),d=l,p=d.startAt,_=d.onStart,g=d.onStartParams,v=d.immediateRender,y,T=hn.to(c,Si({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||Hn,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());T._dur!==S&&Ho(T,S,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},l));return v?T.render(0):T},e.tweenFromTo=function(s,l,c){return this.tweenTo(l,Si({startAt:{time:Oi(this,s)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Lx(this,Oi(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Lx(this,Oi(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Hn)},e.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=s);return _s(this)},e.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),_s(this)},e.totalDuration=function(s){var l=0,c=this,f=c._last,d=oa,p,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ia(c,f,_-f._delay,1)._lock=0):d=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Ho(c,c===je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(je._ts&&(Ly(je,mf(s,je)),Dy=gi.frame),gi.frame>=Cx){Cx+=xi.autoSleep||120;var l=je._first;if((!l||!l._ts)&&xi.autoSleep&&gi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||gi.sleep()}}},t}(su);Si(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Uw=function(t,e,i,s,l,c,f){var d=new ri(this._pt,t,e,0,1,sS,null,l),p=0,_=0,g,v,y,T,M,S,x,L;for(d.b=i,d.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=au(s)),c&&(L=[i,s],c(L,t,e),i=L[0],s=L[1]),v=i.match(pp)||[];g=pp.exec(s);)T=g[0],M=s.substring(p,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(S=parseFloat(v[_-1])||0,d._pt={_next:d._pt,p:M||_===1?M:",",s:S,c:T.charAt(1)==="="?Ro(S,T)-S:parseFloat(T)-S,m:y&&y<4?Math.round:0},p=pp.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=f,(by.test(s)||x)&&(d.e=0),this._pt=d,d},Xm=function(t,e,i,s,l,c,f,d,p,_){tn(s)&&(s=s(l||0,t,c));var g=t[e],v=i!=="get"?i:tn(g)?p?t[e.indexOf("set")||!tn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,y=tn(g)?p?zw:aS:qm,T;if(Rn(s)&&(~s.indexOf("random(")&&(s=au(s)),s.charAt(1)==="="&&(T=Ro(v,s)+(Fn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||xm)return!isNaN(v*s)&&s!==""?(T=new ri(this._pt,t,e,+v||0,s-(v||0),typeof g=="boolean"?Bw:rS,0,y),p&&(T.fp=p),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(e in t)&&Hm(e,s),Uw.call(this,t,e,v,s,y,d||xi.stringFilter,p))},Lw=function(t,e,i,s,l){if(tn(t)&&(t=tu(t,l,e,i,s)),!ua(t)||t.style&&t.nodeType||Gn(t)||Ey(t))return Rn(t)?tu(t,l,e,i,s):t;var c={},f;for(f in t)c[f]=tu(t[f],l,e,i,s);return c},eS=function(t,e,i,s,l,c){var f,d,p,_;if(_i[t]&&(f=new _i[t]).init(l,f.rawVars?e[t]:Lw(e[t],s,l,c,i),i,s,c)!==!1&&(i._pt=d=new ri(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Eo))for(p=i._ptLookup[i._targets.indexOf(l)],_=f._props.length;_--;)p[f._props[_]]=d;return f},yr,xm,Wm=function o(t,e,i){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,p=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,M=t._startAt,S=t._targets,x=t.parent,L=x&&x.data==="nested"?x.vars.targets:S,U=t._overwrite==="auto"&&!zm,R=t.timeline,O,z,N,F,b,A,H,st,K,ct,ut,X,$;if(R&&(!v||!l)&&(l="none"),t._ease=gs(l,Io.ease),t._yEase=g?Qy(gs(g===!0?l:g,Io.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!s.runBackwards,!R||v&&!s.stagger){if(st=S[0]?ms(S[0]).harness:0,X=st&&s[st.prop],O=pf(s,Gm),M&&(M._zTime<0&&M.progress(1),e<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&T?ef:sw),M._lazy=0),c){if(wr(t._startAt=hn.set(S,Si({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ii(d),startAt:null,delay:0,onUpdate:p&&function(){return vi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ln||!f&&!y)&&t._startAt.revert(ef),f&&T&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(_&&T&&!M){if(e&&(f=!1),N=Si({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ii(d),immediateRender:f,stagger:0,parent:x},O),X&&(N[st.prop]=X),wr(t._startAt=hn.set(S,N)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ln?t._startAt.revert(ef):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,Hn,Hn);else if(!e)return}for(t._pt=t._ptCache=0,d=T&&ii(d)||d&&!T,z=0;z<S.length;z++){if(b=S[z],H=b._gsap||km(S)[z]._gsap,t._ptLookup[z]=ct={},dm[H.id]&&br.length&&df(),ut=L===S?z:L.indexOf(b),st&&(K=new st).init(b,X||O,t,ut,L)!==!1&&(t._pt=F=new ri(t._pt,b,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(W){ct[W]=F}),K.priority&&(A=1)),!st||X)for(N in O)_i[N]&&(K=eS(N,O,t,ut,b,L))?K.priority&&(A=1):ct[N]=F=Xm.call(t,b,N,"get",O[N],ut,L,0,s.stringFilter);t._op&&t._op[z]&&t.kill(b,t._op[z]),U&&t._pt&&(yr=t,je.killTweensOf(b,ct,t.globalTime(e)),$=!t.parent,yr=0),t._pt&&d&&(dm[H.id]=1)}A&&oS(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!$,v&&e<=0&&R.render(oa,!0,!0)},Ow=function(t,e,i,s,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],_,g,v,y;if(!p)for(p=t._ptCache[e]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][e],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==e&&_.fp!==e;)_=_._next;if(!_)return xm=1,t.vars[e]="+=0",Wm(t,f),xm=0,d?nu(e+" not eligible for reset"):1;p.push(_)}for(y=p.length;y--;)g=p[y],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=i-_.s,g.e&&(g.e=rn(i)+Fn(g.e)),g.b&&(g.b=_.s+Fn(g.b))},Nw=function(t,e){var i=t[0]?ms(t[0]).harness:0,s=i&&i.aliases,l,c,f,d;if(!s)return e;l=Bo({},e);for(c in s)if(c in l)for(d=s[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},Pw=function(t,e,i,s){var l=e.ease||s||"power1.inOut",c,f;if(Gn(e))f=i[t]||(i[t]=[]),e.forEach(function(d,p){return f.push({t:p/(e.length-1)*100,v:d,e:l})});else for(c in e)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},tu=function(t,e,i,s,l){return tn(t)?t.call(e,i,s,l):Rn(t)&&~t.indexOf("random(")?au(t):t},nS=Vm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",iS={};ai(nS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return iS[o]=1});var hn=function(o){Sy(t,o);function t(i,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:Jl(s))||this;var d=f.vars,p=d.duration,_=d.delay,g=d.immediateRender,v=d.stagger,y=d.overwrite,T=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,L=s.parent||je,U=(Gn(i)||Ey(i)?ka(i[0]):"length"in s)?[i]:Pi(i),R,O,z,N,F,b,A,H;if(f._targets=U.length?km(U):nu("GSAP target "+i+" not found. https://gsap.com",!xi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,T||v||qc(p)||qc(_)){if(s=f.vars,R=f.timeline=new jn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:U}),R.kill(),R.parent=R._dp=Pa(f),R._start=0,v||qc(p)||qc(_)){if(N=U.length,A=v&&Gy(v),ua(v))for(F in v)~nS.indexOf(F)&&(H||(H={}),H[F]=v[F]);for(O=0;O<N;O++)z=pf(s,iS),z.stagger=0,x&&(z.yoyoEase=x),H&&Bo(z,H),b=U[O],z.duration=+tu(p,Pa(f),O,b,U),z.delay=(+tu(_,Pa(f),O,b,U)||0)-f._delay,!v&&N===1&&z.delay&&(f._delay=_=z.delay,f._start+=_,z.delay=0),R.to(b,z,A?A(O,b,U):0),R._ease=Ee.none;R.duration()?p=_=0:f.timeline=0}else if(T){Jl(Si(R.vars.defaults,{ease:"none"})),R._ease=gs(T.ease||s.ease||"none");var st=0,K,ct,ut;if(Gn(T))T.forEach(function(X){return R.to(U,X,">")}),R.duration();else{z={};for(F in T)F==="ease"||F==="easeEach"||Pw(F,T[F],z,T.easeEach);for(F in z)for(K=z[F].sort(function(X,$){return X.t-$.t}),st=0,O=0;O<K.length;O++)ct=K[O],ut={ease:ct.e,duration:(ct.t-(O?K[O-1].t:0))/100*p},ut[F]=ct.v,R.to(U,ut,st),st+=ut.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return y===!0&&!zm&&(yr=Pa(f),je.killTweensOf(U),yr=0),ia(L,Pa(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!p&&!T&&f._start===dn(L._time)&&ii(g)&&hw(Pa(f))&&L.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-_)||0)),S&&Iy(Pa(f),S),f}var e=t.prototype;return e.render=function(s,l,c){var f=this._time,d=this._tDur,p=this._dur,_=s<0,g=s>d-Hn&&!_?d:s<Hn?0:s,v,y,T,M,S,x,L,U,R;if(!p)pw(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=dn(g%M),g===d?(T=this._repeat,v=p):(S=dn(g/M),T=~~S,T&&T===S?(v=p,T--):v>p&&(v=p)),x=this._yoyo&&T&1,x&&(R=this._yEase,v=p-v),S=Fo(this._tTime,M),v===f&&!c&&this._initted&&T===S)return this._tTime=g,this;T!==S&&(U&&this._yEase&&Jy(U,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(dn(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(By(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==S))return this;if(p!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(R||this._ease)(v/p),this._from&&(this.ratio=L=1-L),v&&!f&&!l&&!T&&(vi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(L,y.d),y=y._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&pm(this,s,l,c),vi(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!l&&this.parent&&vi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&pm(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&wr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(vi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},e.resetTo=function(s,l,c,f,d){ru||gi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Wm(this,p),_=this._ease(p/this._dur),Ow(this,s,l,c,f,_,p,d)?this.resetTo(s,l,c,f,1):(Af(this,0),this.parent||Py(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,yr&&yr.vars.overwrite!==!0)._first||Kl(this),this.parent&&c!==this.timeline.totalDuration()&&Ho(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?Pi(s):f,p=this._ptLookup,_=this._pt,g,v,y,T,M,S,x;if((!l||l==="all")&&cw(f,d))return l==="all"&&(this._pt=0),Kl(this);for(g=this._op=this._op||[],l!=="all"&&(Rn(l)&&(M={},ai(l,function(L){return M[L]=1}),l=M),l=Nw(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=p[x],l==="all"?(g[x]=l,T=v,y={}):(y=g[x]=g[x]||{},T=l);for(M in T)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Tf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&Kl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return $l(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return $l(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return je.killTweensOf(s,l,c)},t}(su);Si(hn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ai("staggerTo,staggerFrom,staggerFromTo",function(o){hn[o]=function(){var t=new jn,e=_m.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var qm=function(t,e,i){return t[e]=i},aS=function(t,e,i){return t[e](i)},zw=function(t,e,i,s){return t[e](s.fp,i)},Iw=function(t,e,i){return t.setAttribute(e,i)},Ym=function(t,e){return tn(t[e])?aS:Im(t[e])&&t.setAttribute?Iw:qm},rS=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Bw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},sS=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},jm=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Fw=function(t,e,i,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,e,i),l=c},Hw=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Tf(this,e,"_pt"):e.dep||(i=1),e=s;return!i},Gw=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},oS=function(t){for(var e=t._pt,i,s,l,c;e;){for(i=e._next,s=l;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:c)?e._prev._next=e:l=e,(e._next=s)?s._prev=e:c=e,e=i}t._pt=l},ri=function(){function o(e,i,s,l,c,f,d,p,_){this.t=i,this.s=l,this.c=c,this.p=s,this.r=f||rS,this.d=d||this,this.set=p||qm,this.pr=_||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=Gw,this.m=i,this.mt=l,this.tween=s},o}();ai(Vm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Gm[o]=1});yi.TweenMax=yi.TweenLite=hn;yi.TimelineLite=yi.TimelineMax=jn;je=new jn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xi.stringFilter=Ky;var vs=[],af={},Vw=[],Nx=0,kw=0,xp=function(t){return(af[t]||Vw).map(function(e){return e()})},ym=function(){var t=Date.now(),e=[];t-Nx>2&&(xp("matchMediaInit"),vs.forEach(function(i){var s=i.queries,l=i.conditions,c,f,d,p;for(f in s)c=ea.matchMedia(s[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(i.revert(),d&&e.push(i))}),xp("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Nx=t,xp("matchMedia"))},lS=function(){function o(e,i){this.selector=i&&gm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=kw++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,s,l){tn(i)&&(l=s,s=i,i=tn);var c=this,f=function(){var p=We,_=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=gm(l)),We=c,g=s.apply(c,arguments),tn(g)&&c._r.push(g),We=p,c.selector=_,c.isReverted=!1,g};return c.last=f,i===tn?f(c,function(d){return c.add(null,d)}):i?c[i]=f:f},t.ignore=function(i){var s=We;We=null,i(this),We=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof hn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var l=this;if(i?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(i)}),d=l.data.length;d--;)p=l.data[d],p instanceof jn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof hn)&&p.revert&&p.revert(i);l._r.forEach(function(_){return _(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=vs.length;c--;)vs[c].id===this.id&&vs.splice(c,1)},t.revert=function(i){this.kill(i||{})},o}(),Xw=function(){function o(e){this.contexts=[],this.scope=e,We&&We.data.push(this)}var t=o.prototype;return t.add=function(i,s,l){ua(i)||(i={matches:i});var c=new lS(0,l||this.scope),f=c.conditions={},d,p,_;We&&!c.selector&&(c.selector=We.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(p in i)p==="all"?_=1:(d=ea.matchMedia(i[p]),d&&(vs.indexOf(c)<0&&vs.push(c),(f[p]=d.matches)&&(_=1),d.addListener?d.addListener(ym):d.addEventListener("change",ym)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o}(),_f={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Yy(s)})},timeline:function(t){return new jn(t)},getTweensOf:function(t,e){return je.getTweensOf(t,e)},getProperty:function(t,e,i,s){Rn(t)&&(t=Pi(t)[0]);var l=ms(t||{}).get,c=i?Ny:Oy;return i==="native"&&(i=""),t&&(e?c((_i[e]&&_i[e].get||l)(t,e,i,s)):function(f,d,p){return c((_i[f]&&_i[f].get||l)(t,f,d,p))})},quickSetter:function(t,e,i){if(t=Pi(t),t.length>1){var s=t.map(function(_){return oi.quickSetter(_,e,i)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=_i[e],f=ms(t),d=f.harness&&(f.harness.aliases||{})[e]||e,p=c?function(_){var g=new c;Eo._pt=0,g.init(t,i?_+i:_,Eo,0,[t]),g.render(1,g),Eo._pt&&jm(1,Eo)}:f.set(t,d);return c?p:function(_){return p(t,d,i?_+i:_,f,1)}},quickTo:function(t,e,i){var s,l=oi.to(t,Si((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(d,p,_){return l.resetTo(e,d,p,_)};return c.tween=l,c},isTweening:function(t){return je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gs(t.ease,Io.ease)),wx(Io,t||{})},config:function(t){return wx(xi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!_i[f]&&!yi[f]&&nu(e+" effect requires "+f+" plugin.")}),mp[e]=function(f,d,p){return i(Pi(f),Si(d||{},l),p)},c&&(jn.prototype[e]=function(f,d,p){return this.add(mp[e](f,ua(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,e){Ee[t]=gs(e)},parseEase:function(t,e){return arguments.length?gs(t,e):Ee},getById:function(t){return je.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new jn(t),s,l;for(i.smoothChildTiming=ii(t.smoothChildTiming),je.remove(i),i._dp=0,i._time=i._tTime=je._time,s=je._first;s;)l=s._next,(e||!(!s._dur&&s instanceof hn&&s.vars.onComplete===s._targets[0]))&&ia(i,s,s._start-s._delay),s=l;return ia(je,i,0),i},context:function(t,e){return t?new lS(t,e):We},matchMedia:function(t){return new Xw(t)},matchMediaRefresh:function(){return vs.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||ym()},addEventListener:function(t,e){var i=af[t]||(af[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=af[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:Mw,wrapYoyo:Ew,distribute:Gy,random:ky,snap:Vy,normalize:Sw,getUnit:Fn,clamp:gw,splitColor:jy,toArray:Pi,selector:gm,mapRange:Wy,pipe:xw,unitize:yw,interpolate:Tw,shuffle:Hy},install:Cy,effects:mp,ticker:gi,updateRoot:jn.updateRoot,plugins:_i,globalTimeline:je,core:{PropTween:ri,globals:wy,Tween:hn,Timeline:jn,Animation:su,getCache:ms,_removeLinkedListItem:Tf,reverting:function(){return Ln},context:function(t){return t&&We&&(We.data.push(t),t._ctx=We),We},suppressOverwrites:function(t){return zm=t}}};ai("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return _f[o]=hn[o]});gi.add(jn.updateRoot);Eo=_f.to({},{duration:0});var Ww=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},qw=function(t,e){var i=t._targets,s,l,c;for(s in e)for(l=i.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=Ww(c,s)),c&&c.modifier&&c.modifier(e[s],t,i[l],s))},yp=function(t,e){return{name:t,rawVars:1,init:function(s,l,c){c._onInit=function(f){var d,p;if(Rn(l)&&(d={},ai(l,function(_){return d[_]=1}),l=d),e){d={};for(p in l)d[p]=e(l[p]);l=d}qw(f,l)}}}},oi=_f.registerPlugin({name:"attr",init:function(t,e,i,s,l){var c,f,d;this.tween=i;for(c in e)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",e[c],s,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,e){for(var i=e._pt;i;)Ln?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},yp("roundProps",vm),yp("modifiers"),yp("snap",Vy))||_f;hn.version=jn.version=oi.version="3.12.7";Ry=1;Bm()&&Go();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Px,Sr,Co,Zm,ps,zx,Km,Yw=function(){return typeof window<"u"},Xa={},ls=180/Math.PI,wo=Math.PI/180,yo=Math.atan2,Ix=1e8,Qm=/([A-Z])/g,jw=/(left|right|width|margin|padding|x)/i,Zw=/[\s,\(]\S/,ra={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kw=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Qw=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Jw=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},uS=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cS=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$w=function(t,e,i){return t.style[e]=i},t2=function(t,e,i){return t.style.setProperty(e,i)},e2=function(t,e,i){return t._gsap[e]=i},n2=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},i2=function(t,e,i,s,l){var c=t._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},a2=function(t,e,i,s,l){var c=t._gsap;c[e]=i,c.renderTransform(l,c)},Ze="transform",si=Ze+"Origin",r2=function o(t,e){var i=this,s=this.target,l=s.style,c=s._gsap;if(t in Xa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ra[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=za(s,f)}):this.tfm[t]=c.x?c[t]:za(s,t),t===si&&(this.tfm.zOrigin=c.zOrigin);else return ra.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(Ze)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(si,e,"")),t=Ze}(l||e)&&this.props.push(t,e,l[t])},fS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},s2=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Qm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=Km(),(!l||!l.isStart)&&!i[Ze]&&(fS(i),s.zOrigin&&i[si]&&(i[si]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},hS=function(t,e){var i={target:t,props:[],revert:s2,save:r2};return t._gsap||oi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},dS,Mm=function(t,e){var i=Sr.createElementNS?Sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Sr.createElement(t);return i&&i.style?i:Sr.createElement(t)},la=function o(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Qm,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&o(t,Vo(e)||e,1)||""},Bx="O,Moz,ms,Ms,Webkit".split(","),Vo=function(t,e,i){var s=e||ps,l=s.style,c=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Bx[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Bx[c]:"")+t},Em=function(){Yw()&&window.document&&(Px=window,Sr=Px.document,Co=Sr.documentElement,ps=Mm("div")||{style:{}},Mm("div"),Ze=Vo(Ze),si=Ze+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dS=!!Vo("perspective"),Km=oi.core.reverting,Zm=1)},Fx=function(t){var e=t.ownerSVGElement,i=Mm("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",i.appendChild(s),Co.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),Co.removeChild(i),l},Hx=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},pS=function(t){var e,i;try{e=t.getBBox()}catch{e=Fx(t),i=1}return e&&(e.width||e.height)||i||(e=Fx(t)),e&&!e.width&&!e.x&&!e.y?{x:+Hx(t,["x","cx","x1"])||0,y:+Hx(t,["y","cy","y1"])||0,width:0,height:0}:e},mS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pS(t))},Es=function(t,e){if(e){var i=t.style,s;e in Xa&&e!==si&&(e=Ze),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(Qm,"-$1").toLowerCase())):i.removeAttribute(e)}},Mr=function(t,e,i,s,l,c){var f=new ri(t._pt,e,i,0,1,c?cS:uS);return t._pt=f,f.b=s,f.e=l,t._props.push(i),f},Gx={deg:1,rad:1,turn:1},o2={grid:1,flex:1},Dr=function o(t,e,i,s){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=ps.style,d=jw.test(e),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,M,S,x;if(s===c||!l||Gx[s]||Gx[c])return l;if(c!=="px"&&!v&&(l=o(t,e,i,"px")),x=t.getCTM&&mS(t),(y||c==="%")&&(Xa[e]||~e.indexOf("adius")))return T=x?t.getBBox()[d?"width":"height"]:t[_],rn(y?l/T*g:l/100*T);if(f[d?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Sr||!M.appendChild)&&(M=Sr.body),S=M._gsap,S&&y&&S.width&&d&&S.time===gi.time&&!S.uncache)return rn(l/S.width*g);if(y&&(e==="height"||e==="width")){var L=t.style[e];t.style[e]=g+s,T=t[_],L?t.style[e]=L:Es(t,e)}else(y||c==="%")&&!o2[la(M,"display")]&&(f.position=la(t,"position")),M===t&&(f.position="static"),M.appendChild(ps),T=ps[_],M.removeChild(ps),f.position="absolute";return d&&y&&(S=ms(M),S.time=gi.time,S.width=M[_]),rn(v?T*l/g:T&&l?g/T*l:0)},za=function(t,e,i,s){var l;return Zm||Em(),e in ra&&e!=="transform"&&(e=ra[e],~e.indexOf(",")&&(e=e.split(",")[0])),Xa[e]&&e!=="transform"?(l=lu(t,s),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:vf(la(t,si))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=gf[e]&&gf[e](t,e,i)||la(t,e)||Uy(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Dr(t,e,l,i)+i:l},l2=function(t,e,i,s){if(!i||i==="none"){var l=Vo(e,t,1),c=l&&la(t,l,1);c&&c!==i?(e=l,i=c):e==="borderColor"&&(i=la(t,"borderTopColor"))}var f=new ri(this._pt,t.style,e,0,1,sS),d=0,p=0,_,g,v,y,T,M,S,x,L,U,R,O;if(f.b=i,f.e=s,i+="",s+="",s==="auto"&&(M=t.style[e],t.style[e]=s,s=la(t,e)||s,M?t.style[e]=M:Es(t,e)),_=[i,s],Ky(_),i=_[0],s=_[1],v=i.match(Mo)||[],O=s.match(Mo)||[],O.length){for(;g=Mo.exec(s);)S=g[0],L=s.substring(d,g.index),T?T=(T+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(T=1),S!==(M=v[p++]||"")&&(y=parseFloat(M)||0,R=M.substr((y+"").length),S.charAt(1)==="="&&(S=Ro(y,S)+R),x=parseFloat(S),U=S.substr((x+"").length),d=Mo.lastIndex-U.length,U||(U=U||xi.units[e]||R,d===s.length&&(s+=U,f.e+=U)),R!==U&&(y=Dr(t,e,M,U)||0),f._pt={_next:f._pt,p:L||p===1?L:",",s:y,c:x-y,m:T&&T<4||e==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=e==="display"&&s==="none"?cS:uS;return by.test(s)&&(f.e=0),this._pt=f,f},Vx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},u2=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=Vx[i]||i,e[1]=Vx[s]||s,e.join(" ")},c2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,l=e.u,c=i._gsap,f,d,p;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],Xa[f]&&(d=1,f=f==="transformOrigin"?si:Ze),Es(i,f);d&&(Es(i,Ze),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",lu(i,1),c.uncache=1,fS(s)))}},gf={clearProps:function(t,e,i,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ri(t._pt,e,i,0,0,c2);return c.u=s,c.pr=-10,c.tween=l,t._props.push(i),1}}},ou=[1,0,0,1,0,0],_S={},gS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},kx=function(t){var e=la(t,Ze);return gS(e)?ou:e.substr(7).match(Ty).map(rn)},Jm=function(t,e){var i=t._gsap||ms(t),s=t.style,l=kx(t),c,f,d,p;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?ou:l):(l===ou&&!t.offsetParent&&t!==Co&&!i.svg&&(d=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Co.appendChild(t)),l=kx(t),d?s.display=d:Es(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Co.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Tm=function(t,e,i,s,l,c){var f=t._gsap,d=l||Jm(t,!0),p=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=d[0],T=d[1],M=d[2],S=d[3],x=d[4],L=d[5],U=e.split(" "),R=parseFloat(U[0])||0,O=parseFloat(U[1])||0,z,N,F,b;i?d!==ou&&(N=y*S-T*M)&&(F=R*(S/N)+O*(-M/N)+(M*L-S*x)/N,b=R*(-T/N)+O*(y/N)-(y*L-T*x)/N,R=F,O=b):(z=pS(t),R=z.x+(~U[0].indexOf("%")?R/100*z.width:R),O=z.y+(~(U[1]||U[0]).indexOf("%")?O/100*z.height:O)),s||s!==!1&&f.smooth?(x=R-p,L=O-_,f.xOffset=g+(x*y+L*M)-x,f.yOffset=v+(x*T+L*S)-L):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=O,f.smooth=!!s,f.origin=e,f.originIsAbsolute=!!i,t.style[si]="0px 0px",c&&(Mr(c,f,"xOrigin",p,R),Mr(c,f,"yOrigin",_,O),Mr(c,f,"xOffset",g,f.xOffset),Mr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+O)},lu=function(t,e){var i=t._gsap||new tS(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,l=i.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=la(t,si)||"0",_,g,v,y,T,M,S,x,L,U,R,O,z,N,F,b,A,H,st,K,ct,ut,X,$,W,xt,P,nt,Et,Ct,Y,dt;return _=g=v=M=S=x=L=U=R=0,y=T=1,i.svg=!!(t.getCTM&&mS(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Ze]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Ze]!=="none"?d[Ze]:"")),s.scale=s.rotate=s.translate="none"),N=Jm(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),p=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Tm(t,$||p,!!$||i.originIsAbsolute,i.smooth!==!1,N)),O=i.xOrigin||0,z=i.yOrigin||0,N!==ou&&(H=N[0],st=N[1],K=N[2],ct=N[3],_=ut=N[4],g=X=N[5],N.length===6?(y=Math.sqrt(H*H+st*st),T=Math.sqrt(ct*ct+K*K),M=H||st?yo(st,H)*ls:0,L=K||ct?yo(K,ct)*ls+M:0,L&&(T*=Math.abs(Math.cos(L*wo))),i.svg&&(_-=O-(O*H+z*K),g-=z-(O*st+z*ct))):(dt=N[6],Ct=N[7],P=N[8],nt=N[9],Et=N[10],Y=N[11],_=N[12],g=N[13],v=N[14],F=yo(dt,Et),S=F*ls,F&&(b=Math.cos(-F),A=Math.sin(-F),$=ut*b+P*A,W=X*b+nt*A,xt=dt*b+Et*A,P=ut*-A+P*b,nt=X*-A+nt*b,Et=dt*-A+Et*b,Y=Ct*-A+Y*b,ut=$,X=W,dt=xt),F=yo(-K,Et),x=F*ls,F&&(b=Math.cos(-F),A=Math.sin(-F),$=H*b-P*A,W=st*b-nt*A,xt=K*b-Et*A,Y=ct*A+Y*b,H=$,st=W,K=xt),F=yo(st,H),M=F*ls,F&&(b=Math.cos(F),A=Math.sin(F),$=H*b+st*A,W=ut*b+X*A,st=st*b-H*A,X=X*b-ut*A,H=$,ut=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=rn(Math.sqrt(H*H+st*st+K*K)),T=rn(Math.sqrt(X*X+dt*dt)),F=yo(ut,X),L=Math.abs(F)>2e-4?F*ls:0,R=Y?1/(Y<0?-Y:Y):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!gS(la(t,Ze)),$&&t.setAttribute("transform",$))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(y*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,L+=L<=0?180:-180)),e=e||i.uncache,i.x=_-((i.xPercent=_&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+c,i.y=g-((i.yPercent=g&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=rn(y),i.scaleY=rn(T),i.rotation=rn(M)+f,i.rotationX=rn(S)+f,i.rotationY=rn(x)+f,i.skewX=L+f,i.skewY=U+f,i.transformPerspective=R+c,(i.zOrigin=parseFloat(p.split(" ")[2])||!e&&i.zOrigin||0)&&(s[si]=vf(p)),i.xOffset=i.yOffset=0,i.force3D=xi.force3D,i.renderTransform=i.svg?h2:dS?vS:f2,i.uncache=0,i},vf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sp=function(t,e,i){var s=Fn(e);return rn(parseFloat(e)+parseFloat(Dr(t,"x",i+"px",s)))+s},f2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vS(t,e)},as="0deg",Yl="0px",rs=") ",vS=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.z,p=i.rotation,_=i.rotationY,g=i.rotationX,v=i.skewX,y=i.skewY,T=i.scaleX,M=i.scaleY,S=i.transformPerspective,x=i.force3D,L=i.target,U=i.zOrigin,R="",O=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==as||_!==as)){var z=parseFloat(_)*wo,N=Math.sin(z),F=Math.cos(z),b;z=parseFloat(g)*wo,b=Math.cos(z),c=Sp(L,c,N*b*-U),f=Sp(L,f,-Math.sin(z)*-U),d=Sp(L,d,F*b*-U+U)}S!==Yl&&(R+="perspective("+S+rs),(s||l)&&(R+="translate("+s+"%, "+l+"%) "),(O||c!==Yl||f!==Yl||d!==Yl)&&(R+=d!==Yl||O?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+rs),p!==as&&(R+="rotate("+p+rs),_!==as&&(R+="rotateY("+_+rs),g!==as&&(R+="rotateX("+g+rs),(v!==as||y!==as)&&(R+="skew("+v+", "+y+rs),(T!==1||M!==1)&&(R+="scale("+T+", "+M+rs),L.style[Ze]=R||"translate(0, 0)"},h2=function(t,e){var i=e||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.rotation,p=i.skewX,_=i.skewY,g=i.scaleX,v=i.scaleY,y=i.target,T=i.xOrigin,M=i.yOrigin,S=i.xOffset,x=i.yOffset,L=i.forceCSS,U=parseFloat(c),R=parseFloat(f),O,z,N,F,b;d=parseFloat(d),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,d+=_),d||p?(d*=wo,p*=wo,O=Math.cos(d)*g,z=Math.sin(d)*g,N=Math.sin(d-p)*-v,F=Math.cos(d-p)*v,p&&(_*=wo,b=Math.tan(p-_),b=Math.sqrt(1+b*b),N*=b,F*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),O*=b,z*=b)),O=rn(O),z=rn(z),N=rn(N),F=rn(F)):(O=g,F=v,z=N=0),(U&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(U=Dr(y,"x",c,"px"),R=Dr(y,"y",f,"px")),(T||M||S||x)&&(U=rn(U+T-(T*O+M*N)+S),R=rn(R+M-(T*z+M*F)+x)),(s||l)&&(b=y.getBBox(),U=rn(U+s/100*b.width),R=rn(R+l/100*b.height)),b="matrix("+O+","+z+","+N+","+F+","+U+","+R+")",y.setAttribute("transform",b),L&&(y.style[Ze]=b)},d2=function(t,e,i,s,l){var c=360,f=Rn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?ls:1),p=d-s,_=s+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),g==="cw"&&p<0?p=(p+c*Ix)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*Ix)%c-~~(p/c)*c)),t._pt=v=new ri(t._pt,e,i,s,p,Kw),v.e=_,v.u="deg",t._props.push(i),v},Xx=function(t,e){for(var i in e)t[i]=e[i];return t},p2=function(t,e,i){var s=Xx({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,d,p,_,g,v,y,T;s.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),c[Ze]=e,f=lu(i,1),Es(i,Ze),i.setAttribute("transform",p)):(p=getComputedStyle(i)[Ze],c[Ze]=e,f=lu(i,1),c[Ze]=p);for(d in Xa)p=s[d],_=f[d],p!==_&&l.indexOf(d)<0&&(y=Fn(p),T=Fn(_),g=y!==T?Dr(i,d,p,T):parseFloat(p),v=parseFloat(_),t._pt=new ri(t._pt,f,d,g,v-g,Sm),t._pt.u=T||0,t._props.push(d));Xx(f,s)};ai("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",s="Bottom",l="Left",c=(t<3?[e,i,s,l]:[e+l,e+i,s+i,s+l]).map(function(f){return t<2?o+f:"border"+f+o});gf[t>1?"border"+o:o]=function(f,d,p,_,g){var v,y;if(arguments.length<4)return v=c.map(function(T){return za(f,T,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(T,M){return y[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,g)}});var xS={name:"css",register:Em,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,l){var c=this._props,f=t.style,d=i.vars.startAt,p,_,g,v,y,T,M,S,x,L,U,R,O,z,N,F;Zm||Em(),this.styles=this.styles||hS(t),F=this.styles.props,this.tween=i;for(M in e)if(M!=="autoRound"&&(_=e[M],!(_i[M]&&eS(M,e,i,s,t,l)))){if(y=typeof _,T=gf[M],y==="function"&&(_=_.call(i,s,t,l),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=au(_)),T)T(this,t,M,_,i)&&(N=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Ar.lastIndex=0,Ar.test(p)||(S=Fn(p),x=Fn(_)),x?S!==x&&(p=Dr(t,M,p,x)+x):S&&(_+=S),this.add(f,"setProperty",p,_,s,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(i,s,t,l):d[M],Rn(p)&&~p.indexOf("random(")&&(p=au(p)),Fn(p+"")||p==="auto"||(p+=xi.units[M]||Fn(za(t,M))||""),(p+"").charAt(1)==="="&&(p=za(t,M))):p=za(t,M),v=parseFloat(p),L=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),L&&(_=_.substr(2)),g=parseFloat(_),M in ra&&(M==="autoAlpha"&&(v===1&&za(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Mr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ra[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Xa,U){if(this.styles.save(M),R||(O=t._gsap,O.renderTransform&&!e.parseTransform||lu(t,e.parseTransform),z=e.smoothOrigin!==!1&&O.smooth,R=this._pt=new ri(this._pt,f,Ze,0,1,O.renderTransform,O,0,-1),R.dep=1),M==="scale")this._pt=new ri(this._pt,O,"scaleY",O.scaleY,(L?Ro(O.scaleY,L+g):g)-O.scaleY||0,Sm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(si,0,f[si]),_=u2(_),O.svg?Tm(t,_,0,z,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==O.zOrigin&&Mr(this,O,"zOrigin",O.zOrigin,x),Mr(this,f,M,vf(p),vf(_)));continue}else if(M==="svgOrigin"){Tm(t,_,1,z,0,this);continue}else if(M in _S){d2(this,O,M,v,L?Ro(v,L+_):_);continue}else if(M==="smoothOrigin"){Mr(this,O,"smooth",O.smooth,_);continue}else if(M==="force3D"){O[M]=_;continue}else if(M==="transform"){p2(this,_,t);continue}}else M in f||(M=Vo(M)||M);if(U||(g||g===0)&&(v||v===0)&&!Zw.test(_)&&M in f)S=(p+"").substr((v+"").length),g||(g=0),x=Fn(_)||(M in xi.units?xi.units[M]:S),S!==x&&(v=Dr(t,M,p,x)),this._pt=new ri(this._pt,U?O:f,M,v,(L?Ro(v,L+g):g)-v,!U&&(x==="px"||M==="zIndex")&&e.autoRound!==!1?Jw:Sm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=Qw);else if(M in f)l2.call(this,t,M,p,L?L+_:_);else if(M in t)this.add(t,M,p||t[M],L?L+_:_,s,l);else if(M!=="parseTransform"){Hm(M,_);continue}U||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,p||t[M])),c.push(M)}}N&&oS(this)},render:function(t,e){if(e.tween._time||!Km())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:za,aliases:ra,getSetter:function(t,e,i){var s=ra[e];return s&&s.indexOf(",")<0&&(e=s),e in Xa&&e!==si&&(t._gsap.x||za(t,"x"))?i&&zx===i?e==="scale"?n2:e2:(zx=i||{})&&(e==="scale"?i2:a2):t.style&&!Im(t.style[e])?$w:~e.indexOf("-")?t2:Ym(t,e)},core:{_removeProperty:Es,_getMatrix:Jm}};oi.utils.checkPrefix=Vo;oi.core.getStyleSaver=hS;(function(o,t,e,i){var s=ai(o+","+t+","+e,function(l){Xa[l]=1});ai(t,function(l){xi.units[l]="deg",_S[l]=1}),ra[s[13]]=o+","+t,ai(i,function(l){var c=l.split(":");ra[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){xi.units[o]="px"});oi.registerPlugin(xS);var rf=oi.registerPlugin(xS)||oi;rf.core.Tween;class m2{constructor(t){Re(this,"canvas");Re(this,"renderer");Re(this,"scene");Re(this,"camera");Re(this,"oribitControls");Re(this,"raycaster");Re(this,"player_next");Re(this,"player_shot");Re(this,"player_select");Re(this,"Undefind_Mesh");Re(this,"meshList");Re(this,"playercube");Re(this,"emenycube");Re(this,"meshid_to_nodeid");Re(this,"nodeid_to_meshid");Re(this,"player_Angle");Re(this,"sm");Re(this,"model");this.canvas=t,this.meshList=[],this.player_next=new Bn(new cs,new Na),this.player_shot=new Bn(new cs,new Na),this.player_select=new Bn(new cs,new Na),this.Undefind_Mesh=new Bn(new cs,new Na);const e=window.innerWidth;t.clientWidth;const i=window.innerHeight;t.clientHeight,this.renderer=new VC({canvas:t}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,i),this.renderer.setClearColor(0),this.scene=new JT,this.camera=new Yn(90,1),this.camera.aspect=e/i,this.camera.position.set(0,0,10),this.camera.updateProjectionMatrix(),this.oribitControls=new KC(this.camera,t),this.oribitControls.target=new it(0,0,0),this.oribitControls.minDistance=2,this.oribitControls.maxDistance=1e3,this.oribitControls.enableRotate=!1,this.raycaster=new rb,this.playercube=this.API_setPlayer(),this.emenycube=this.API_setEmenyc(),this.sm=new QC,this.meshid_to_nodeid=new Map,this.nodeid_to_meshid=new Map,this.model=new tw,this.player_Angle=0,this.API_Init(),this.glRender(),this.sm.transition(Xi.SelectPlayer),t.addEventListener("click",this.onCanvasClick.bind(this),!1)}API_Init(){for(const t of this.model.nodeList){let e=this.API_setCircle(t.x,t.y,10).id;this.meshid_to_nodeid.set(e,t.id),this.nodeid_to_meshid.set(t.id,e)}for(const t of this.model.Lines)this.API_setLineSegment(t.start.x,t.start.y,t.end.x,t.end.y);this.API_Veiw()}API_Veiw(){this.emenycube.visible=!1,rf.to(this.emenycube.position,{x:this.model.emeny.x,y:this.model.emeny.y,duration:1}),rf.to(this.playercube.position,{x:this.model.player.x,y:this.model.player.y,duration:1}),this.meshList.map(t=>{t.material.color.setHex(10526880)}),this.player_shot!==void 0&&this.player_shot.material.color.setHex(16711680);for(const t of this.model.getConnectedNodesAtAngle(this.model.player,this.player_Angle,1e3)){let e=this.meshList.find(i=>this.meshid_to_nodeid.get(i.id)==t.id);e!==void 0&&e.material.color.setHex(16777215),this.model.emeny.id==t.id&&(this.emenycube.visible=!0)}this.player_select!==void 0&&this.player_select.material.color.setHex(255),this.player_next!==void 0&&this.player_next.material.color.setHex(65280),this.player_shot!==void 0&&(this.player_shot.material.color.setHex(16711680),rf.fromTo(this.player_shot.scale,{x:1,y:1},{x:1.3,y:1.3,duration:.5,yoyo:!0,repeat:1,repeatDelay:.02,ease:"elastic.out(1, 0.3)",overwrite:"auto"}))}API_setCircle(t,e,i){const s=new cs(i,100).center(),l=new Na({color:16776960}),c=new Bn(s,l);return this.scene.add(c),this.meshList.push(c),c.position.set(t,e,0),c}API_setLineSegment(t,e,i,s){const l=new py({color:65535}),c=[];c.push(new it(t,e,0)),c.push(new it(i,s,0));const f=new ca().setFromPoints(c),d=new eb(f,l);this.scene.add(d)}API_setPlayer(){const t=new Ms(10,10,10),e=new Na({color:16776960}),i=new Bn(t,e);return this.scene.add(i),i}API_setEmenyc(){const t=new Ms(10,10,10),e=new Na({color:16711680}),i=new Bn(t,e);return this.scene.add(i),i}glRender(){this.oribitControls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.glRender.bind(this))}getIntersects(t){const e=this.canvas.clientWidth,i=this.canvas.clientHeight,s=t.offsetX/e*2-1,l=t.offsetY/i*2-1;let c=new he(s,-l);return this.raycaster.setFromCamera(c,this.camera),this.raycaster.intersectObjects(this.meshList)}onCanvasClick(t){const e=this.getIntersects(t);if(e.length>0){let i=e[0].object;if(this.sm.getState()==Zl.Idle)this.model.player.id==this.meshid_to_nodeid.get(i.id)&&(this.sm.transition(Xi.SelectPlayer),this.player_select=i);else if(this.sm.getState()==Zl.Select){this.model.player.id==this.meshid_to_nodeid.get(i.id)&&(this.sm.transition(Xi.MovePlayer),this.player_next=i);const s=this.meshid_to_nodeid.get(i.id);s!==void 0&&this.model.areNodesConnected(this.model.player,this.model.nodeList[s])&&(this.sm.transition(Xi.MovePlayer),this.player_next=i)}else if(this.sm.getState()==Zl.Move){const s=this.meshid_to_nodeid.get(i.id),l=this.meshid_to_nodeid.get(this.player_next.id);l!==void 0&&s!==void 0&&this.model.areNodesConnected(this.model.nodeList[l],this.model.nodeList[s])&&(this.sm.transition(Xi.ShotPlayer),this.player_shot=i)}else if(this.sm.getState()==Zl.Shot)if(this.player_shot.id==i.id){this.sm.transition(Xi.Complete);let s=this.meshid_to_nodeid.get(this.player_next.id);s!==void 0&&this.model.setPlayerRef(this.model.nodeList[s]),s=this.model.Edges.List[this.model.emeny.id][Math.floor(Math.random()*this.model.Edges.List[this.model.emeny.id].length)],s!==void 0&&this.model.setEmenyRef(this.model.nodeList[s]),this.meshid_to_nodeid.get(this.player_shot.id)==this.model.emeny.id?console.log("WIN"):this.model.player==this.model.nodeList[this.model.Edges.List[this.model.emeny.id][Math.floor(Math.random()*this.model.Edges.List[this.model.emeny.id].length)]]&&console.log("LOSE");const l=this.meshid_to_nodeid.get(this.player_next.id),c=this.meshid_to_nodeid.get(this.player_shot.id);l!==void 0&&c!==void 0&&(this.player_Angle=this.model.getAngleBetweenNodes(this.model.nodeList[l],this.model.nodeList[c])),this.sm.transition(Xi.SelectPlayer),this.player_select=this.player_next,this.player_next=this.Undefind_Mesh,this.player_shot=this.Undefind_Mesh}else{const s=this.meshid_to_nodeid.get(i.id),l=this.meshid_to_nodeid.get(this.player_next.id);l!==void 0&&s!==void 0&&this.model.areNodesConnected(this.model.nodeList[l],this.model.nodeList[s])&&(this.sm.transition(Xi.ShotPlayer),this.player_shot=i)}}e.length==0&&(this.sm.transition(Xi.Cancel),this.player_shot=this.Undefind_Mesh,this.player_next=this.Undefind_Mesh,this.sm.transition(Xi.SelectPlayer)),this.API_Veiw()}}function _2(o){new m2(o)}const g2=()=>{const o=Yc.useRef(null),t=Yc.useRef(!0);return Yc.useEffect(()=>{if(!t.current)return;t.current=!1;const e=o.current;e!==null&&_2(e)},[]),sf.jsx("div",{children:sf.jsx("canvas",{ref:o})})};NE.createRoot(document.getElementById("root")).render(sf.jsx(Yc.StrictMode,{children:sf.jsx(g2,{})}));
