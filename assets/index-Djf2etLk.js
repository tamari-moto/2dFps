var kE=Object.defineProperty;var XE=(o,t,e)=>t in o?kE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Ht=(o,t,e)=>XE(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();function WE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gd={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function YE(){if(Cv)return Jl;Cv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:i,key:u,ref:r!==void 0?r:null,props:l}}return Jl.Fragment=t,Jl.jsx=e,Jl.jsxs=e,Jl}var wv;function qE(){return wv||(wv=1,Gd.exports=YE()),Gd.exports}var Sn=qE(),kd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function jE(){if(Dv)return fe;Dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(z,it,Et){this.props=z,this.context=it,this.refs=M,this.updater=Et||x}S.prototype.isReactComponent={},S.prototype.setState=function(z,it){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,it,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(z,it,Et){this.props=z,this.context=it,this.refs=M,this.updater=Et||x}var U=L.prototype=new y;U.constructor=L,E(U,S.prototype),U.isPureReactComponent=!0;var R=Array.isArray,O={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function N(z,it,Et,Ct,q,dt){return Et=dt.ref,{$$typeof:o,type:z,key:it,ref:Et!==void 0?Et:null,props:dt}}function B(z,it){return N(z.type,it,void 0,void 0,void 0,z.props)}function b(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function A(z){var it={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return it[Et]})}var H=/\/+/g;function st(z,it){return typeof z=="object"&&z!==null&&z.key!=null?A(""+z.key):it.toString(36)}function K(){}function ut(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(K,K):(z.status="pending",z.then(function(it){z.status==="pending"&&(z.status="fulfilled",z.value=it)},function(it){z.status==="pending"&&(z.status="rejected",z.reason=it)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ct(z,it,Et,Ct,q){var dt=typeof z;(dt==="undefined"||dt==="boolean")&&(z=null);var St=!1;if(z===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(z.$$typeof){case o:case t:St=!0;break;case m:return St=z._init,ct(St(z._payload),it,Et,Ct,q)}}if(St)return q=q(z),St=Ct===""?"."+st(z,0):Ct,R(q)?(Et="",St!=null&&(Et=St.replace(H,"$&/")+"/"),ct(q,it,Et,"",function(te){return te})):q!=null&&(b(q)&&(q=B(q,Et+(q.key==null||z&&z.key===q.key?"":(""+q.key).replace(H,"$&/")+"/")+St)),it.push(q)),1;St=0;var Rt=Ct===""?".":Ct+":";if(R(z))for(var wt=0;wt<z.length;wt++)Ct=z[wt],dt=Rt+st(Ct,wt),St+=ct(Ct,it,Et,dt,q);else if(wt=v(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(Ct=z.next()).done;)Ct=Ct.value,dt=Rt+st(Ct,wt++),St+=ct(Ct,it,Et,dt,q);else if(dt==="object"){if(typeof z.then=="function")return ct(ut(z),it,Et,Ct,q);throw it=String(z),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return St}function X(z,it,Et){if(z==null)return z;var Ct=[],q=0;return ct(z,Ct,"","",function(dt){return it.call(Et,dt,q++)}),Ct}function $(z){if(z._status===-1){var it=z._result;it=it(),it.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var W=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function yt(){}return fe.Children={map:X,forEach:function(z,it,Et){X(z,function(){it.apply(this,arguments)},Et)},count:function(z){var it=0;return X(z,function(){it++}),it},toArray:function(z){return X(z,function(it){return it})||[]},only:function(z){if(!b(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},fe.Component=S,fe.Fragment=e,fe.Profiler=r,fe.PureComponent=L,fe.StrictMode=i,fe.Suspense=d,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(z){return function(){return z.apply(null,arguments)}},fe.cloneElement=function(z,it,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=E({},z.props),q=z.key,dt=void 0;if(it!=null)for(St in it.ref!==void 0&&(dt=void 0),it.key!==void 0&&(q=""+it.key),it)!P.call(it,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&it.ref===void 0||(Ct[St]=it[St]);var St=arguments.length-2;if(St===1)Ct.children=Et;else if(1<St){for(var Rt=Array(St),wt=0;wt<St;wt++)Rt[wt]=arguments[wt+2];Ct.children=Rt}return N(z.type,q,void 0,void 0,dt,Ct)},fe.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},fe.createElement=function(z,it,Et){var Ct,q={},dt=null;if(it!=null)for(Ct in it.key!==void 0&&(dt=""+it.key),it)P.call(it,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(q[Ct]=it[Ct]);var St=arguments.length-2;if(St===1)q.children=Et;else if(1<St){for(var Rt=Array(St),wt=0;wt<St;wt++)Rt[wt]=arguments[wt+2];q.children=Rt}if(z&&z.defaultProps)for(Ct in St=z.defaultProps,St)q[Ct]===void 0&&(q[Ct]=St[Ct]);return N(z,dt,void 0,void 0,null,q)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(z){return{$$typeof:f,render:z}},fe.isValidElement=b,fe.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:$}},fe.memo=function(z,it){return{$$typeof:p,type:z,compare:it===void 0?null:it}},fe.startTransition=function(z){var it=O.T,Et={};O.T=Et;try{var Ct=z(),q=O.S;q!==null&&q(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(yt,W)}catch(dt){W(dt)}finally{O.T=it}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(z){return O.H.use(z)},fe.useActionState=function(z,it,Et){return O.H.useActionState(z,it,Et)},fe.useCallback=function(z,it){return O.H.useCallback(z,it)},fe.useContext=function(z){return O.H.useContext(z)},fe.useDebugValue=function(){},fe.useDeferredValue=function(z,it){return O.H.useDeferredValue(z,it)},fe.useEffect=function(z,it){return O.H.useEffect(z,it)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(z,it,Et){return O.H.useImperativeHandle(z,it,Et)},fe.useInsertionEffect=function(z,it){return O.H.useInsertionEffect(z,it)},fe.useLayoutEffect=function(z,it){return O.H.useLayoutEffect(z,it)},fe.useMemo=function(z,it){return O.H.useMemo(z,it)},fe.useOptimistic=function(z,it){return O.H.useOptimistic(z,it)},fe.useReducer=function(z,it,Et){return O.H.useReducer(z,it,Et)},fe.useRef=function(z){return O.H.useRef(z)},fe.useState=function(z){return O.H.useState(z)},fe.useSyncExternalStore=function(z,it,Et){return O.H.useSyncExternalStore(z,it,Et)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.0.0",fe}var Lv;function zm(){return Lv||(Lv=1,kd.exports=jE()),kd.exports}var Cr=zm();const cx=WE(Cr);var Xd={exports:{}},$l={},Wd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function ZE(){return Uv||(Uv=1,function(o){function t(X,$){var W=X.length;X.push($);t:for(;0<W;){var yt=W-1>>>1,z=X[yt];if(0<r(z,$))X[yt]=$,X[W]=z,W=yt;else break t}}function e(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var $=X[0],W=X.pop();if(W!==$){X[0]=W;t:for(var yt=0,z=X.length,it=z>>>1;yt<it;){var Et=2*(yt+1)-1,Ct=X[Et],q=Et+1,dt=X[q];if(0>r(Ct,W))q<z&&0>r(dt,Ct)?(X[yt]=dt,X[q]=W,yt=q):(X[yt]=Ct,X[Et]=W,yt=Et);else if(q<z&&0>r(dt,W))X[yt]=dt,X[q]=W,yt=q;else break t}}return $}function r(X,$){var W=X.sortIndex-$.sortIndex;return W!==0?W:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],p=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(X){for(var $=e(p);$!==null;){if($.callback===null)i(p);else if($.startTime<=X)i(p),$.sortIndex=$.expirationTime,t(d,$);else break;$=e(p)}}function R(X){if(M=!1,U(X),!E)if(e(d)!==null)E=!0,ut();else{var $=e(p);$!==null&&ct(R,$.startTime-X)}}var O=!1,P=-1,N=5,B=-1;function b(){return!(o.unstable_now()-B<N)}function A(){if(O){var X=o.unstable_now();B=X;var $=!0;try{t:{E=!1,M&&(M=!1,y(P),P=-1),x=!0;var W=v;try{e:{for(U(X),g=e(d);g!==null&&!(g.expirationTime>X&&b());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,v=g.priorityLevel;var z=yt(g.expirationTime<=X);if(X=o.unstable_now(),typeof z=="function"){g.callback=z,U(X),$=!0;break e}g===e(d)&&i(d),U(X)}else i(d);g=e(d)}if(g!==null)$=!0;else{var it=e(p);it!==null&&ct(R,it.startTime-X),$=!1}}break t}finally{g=null,v=W,x=!1}$=void 0}}finally{$?H():O=!1}}}var H;if(typeof L=="function")H=function(){L(A)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,K=st.port2;st.port1.onmessage=A,H=function(){K.postMessage(null)}}else H=function(){S(A,0)};function ut(){O||(O=!0,H())}function ct(X,$){P=S(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){E||x||(E=!0,ut())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return e(d)},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var W=v;v=$;try{return X()}finally{v=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var W=v;v=X;try{return $()}finally{v=W}},o.unstable_scheduleCallback=function(X,$,W){var yt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,X={id:m++,callback:$,priorityLevel:X,startTime:W,expirationTime:z,sortIndex:-1},W>yt?(X.sortIndex=W,t(p,X),e(d)===null&&X===e(p)&&(M?(y(P),P=-1):M=!0,ct(R,W-yt))):(X.sortIndex=z,t(d,X),E||x||(E=!0,ut())),X},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(X){var $=v;return function(){var W=v;v=$;try{return X.apply(this,arguments)}finally{v=W}}}}(Yd)),Yd}var Ov;function KE(){return Ov||(Ov=1,Wd.exports=ZE()),Wd.exports}var qd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function QE(){if(Nv)return Fn;Nv=1;var o=zm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:p,implementation:m}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Fn.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,m)},Fn.flushSync=function(d){var p=u.T,m=i.p;try{if(u.T=null,i.p=2,d)return d()}finally{u.T=p,i.p=m,i.d.f()}},Fn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(d,p))},Fn.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},Fn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?i.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):m==="script"&&i.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(d)},Fn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin);i.d.L(d,m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);i.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(d)},Fn.requestFormReset=function(d){i.d.r(d)},Fn.unstable_batchedUpdates=function(d,p){return d(p)},Fn.useFormState=function(d,p,m){return u.H.useFormState(d,p,m)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.0.0",Fn}var Pv;function JE(){if(Pv)return qd.exports;Pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qd.exports=QE(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function $E(){if(zv)return $l;zv=1;var o=KE(),t=zm(),e=JE();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),x=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),R=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function P(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function B(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case d:return"Fragment";case f:return"Portal";case m:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Provider";case v:return(n._context.displayName||"Context")+".Consumer";case E:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case y:return a=n.displayName||null,a!==null?a:B(n.type)||"Memo";case L:a=n._payload,n=n._init;try{return B(n(a))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,st;function K(n){if(H===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);H=a&&a[1]||"",st=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+n+st}var ut=!1;function ct(n,a){if(!n||ut)return"";ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ht){var ot=ht}Reflect.construct(n,[],xt)}else{try{xt.call()}catch(ht){ot=ht}n.call(xt.prototype)}}else{try{throw Error()}catch(ht){ot=ht}(xt=n())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ht){if(ht&&ot&&typeof ht.stack=="string")return[ht.stack,ot.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=c.DetermineComponentFrameRoot(),T=_[0],w=_[1];if(T&&w){var F=T.split(`
`),j=w.split(`
`);for(h=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(c===F.length||h===j.length)for(c=F.length-1,h=j.length-1;1<=c&&0<=h&&F[c]!==j[h];)h--;for(;1<=c&&0<=h;c--,h--)if(F[c]!==j[h]){if(c!==1||h!==1)do if(c--,h--,0>h||F[c]!==j[h]){var mt=`
`+F[c].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=c&&0<=h);break}}}finally{ut=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?K(s):""}function X(n){switch(n.tag){case 26:case 27:case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return n=ct(n.type,!1),n;case 11:return n=ct(n.type.render,!1),n;case 1:return n=ct(n.type,!0),n;default:return""}}function $(n){try{var a="";do a+=X(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function W(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function yt(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function z(n){if(W(n)!==n)throw Error(i(188))}function it(n){var a=n.alternate;if(!a){if(a=W(n),a===null)throw Error(i(188));return a!==n?null:n}for(var s=n,c=a;;){var h=s.return;if(h===null)break;var _=h.alternate;if(_===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===s)return z(h),n;if(_===c)return z(h),a;_=_.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=_;else{for(var T=!1,w=h.child;w;){if(w===s){T=!0,s=h,c=_;break}if(w===c){T=!0,c=h,s=_;break}w=w.sibling}if(!T){for(w=_.child;w;){if(w===s){T=!0,s=_,c=h;break}if(w===c){T=!0,c=_,s=h;break}w=w.sibling}if(!T)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:a}function Et(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=Et(n),a!==null)return a;n=n.sibling}return null}var Ct=Array.isArray,q=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},St=[],Rt=-1;function wt(n){return{current:n}}function te(n){0>Rt||(n.current=St[Rt],St[Rt]=null,Rt--)}function zt(n,a){Rt++,St[Rt]=n.current,n.current=a}var Ae=wt(null),we=wt(null),se=wt(null),G=wt(null);function mn(n,a){switch(zt(se,a),zt(we,n),zt(Ae,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?iv(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=iv(n),a=av(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}te(Ae),zt(Ae,a)}function ce(){te(Ae),te(we),te(se)}function ue(n){n.memoizedState!==null&&zt(G,n);var a=Ae.current,s=av(a,n.type);a!==s&&(zt(we,n),zt(Ae,s))}function Yt(n){we.current===n&&(te(Ae),te(we)),G.current===n&&(te(G),ql._currentValue=dt)}var De=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,C=o.unstable_shouldYield,at=o.unstable_requestPaint,pt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Vt=o.unstable_LowPriority,_e=o.unstable_IdlePriority,At=o.log,Gt=o.unstable_setDisableYieldValue,Jt=null,Wt=null;function Ft(n){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Jt,n,void 0,(n.current.flags&128)===128)}catch{}}function k(n){if(typeof At=="function"&&Gt(n),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Jt,n)}catch{}}var ft=Math.clz32?Math.clz32:bt,Nt=Math.log,V=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(Nt(n)/V|0)|0}var lt=128,_t=4194304;function Ut(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ot(n,a){var s=n.pendingLanes;if(s===0)return 0;var c=0,h=n.suspendedLanes,_=n.pingedLanes,T=n.warmLanes;n=n.finishedLanes!==0;var w=s&134217727;return w!==0?(s=w&~h,s!==0?c=Ut(s):(_&=w,_!==0?c=Ut(_):n||(T=w&~T,T!==0&&(c=Ut(T))))):(w=s&~h,w!==0?c=Ut(w):_!==0?c=Ut(_):n||(T=s&~T,T!==0&&(c=Ut(T)))),c===0?0:a!==0&&a!==c&&(a&h)===0&&(h=c&-c,T=a&-a,h>=T||h===32&&(T&4194176)!==0)?a:c}function Zt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Re(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var n=lt;return lt<<=1,(lt&4194176)===0&&(lt=128),n}function ge(){var n=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),n}function an(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function ln(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wc(n,a,s,c,h,_){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,F=n.expirationTimes,j=n.hiddenUpdates;for(s=T&~s;0<s;){var mt=31-ft(s),xt=1<<mt;w[mt]=0,F[mt]=-1;var ot=j[mt];if(ot!==null)for(j[mt]=null,mt=0;mt<ot.length;mt++){var ht=ot[mt];ht!==null&&(ht.lane&=-536870913)}s&=~xt}c!==0&&al(n,c,0),_!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~a))}function al(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-ft(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194218}function na(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-ft(s),h=1<<c;h&a|n[c]&a&&(n[c]|=a),s&=~h}}function Ns(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function rl(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:Mv(n.type))}function Dc(n,a){var s=q.p;try{return q.p=n,a()}finally{q.p=s}}var hi=Math.random().toString(36).slice(2),_n="__reactFiber$"+hi,gn="__reactProps$"+hi,va="__reactContainer$"+hi,Ps="__reactEvents$"+hi,Hf="__reactListeners$"+hi,Vf="__reactHandles$"+hi,Lc="__reactResources$"+hi,Gr="__reactMarker$"+hi;function sl(n){delete n[_n],delete n[gn],delete n[Ps],delete n[Hf],delete n[Vf]}function ya(n){var a=n[_n];if(a)return a;for(var s=n.parentNode;s;){if(a=s[va]||s[_n]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=ov(n);n!==null;){if(s=n[_n])return s;n=ov(n)}return a}n=s,s=n.parentNode}return null}function D(n){if(n=n[_n]||n[va]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Z(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function rt(n){var a=n[Lc];return a||(a=n[Lc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function tt(n){n[Gr]=!0}var Q=new Set,Tt={};function Lt(n,a){Bt(n,a),Bt(n+"Capture",a)}function Bt(n,a){for(Tt[n]=a,n=0;n<a.length;n++)Q.add(a[n])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},$t={};function Se(n){return De.call($t,n)?!0:De.call(re,n)?!1:ae.test(n)?$t[n]=!0:(re[n]=!0,!1)}function Me(n,a,s){if(Se(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function We(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function Le(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}function oe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ee(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function vn(n){var a=ee(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,_=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,_.call(this,T)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ee(n){n._valueTracker||(n._valueTracker=vn(n))}function $n(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=ee(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function Gi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Wn=/[\n"\\]/g;function Tn(n){return n.replace(Wn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ze(n,a,s,c,h,_,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),a!=null?T==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+oe(a)):n.value!==""+oe(a)&&(n.value=""+oe(a)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),a!=null?In(n,T,oe(a)):s!=null?In(n,T,oe(s)):c!=null&&n.removeAttribute("value"),h==null&&_!=null&&(n.defaultChecked=!!_),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+oe(w):n.removeAttribute("name")}function Yn(n,a,s,c,h,_,T,w){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),a!=null||s!=null){if(!(_!=="submit"&&_!=="reset"||a!=null))return;s=s!=null?""+oe(s):"",a=a!=null?""+oe(a):s,w||a===n.value||(n.value=a),n.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function In(n,a,s){a==="number"&&Gi(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Qe(n,a,s,c){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+oe(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function Ln(n,a,s){if(a!=null&&(a=""+oe(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+oe(s):""}function zs(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(i(92));if(Ct(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=oe(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function ti(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var HS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function f_(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||HS.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function h_(n,a,s){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&f_(n,h,c)}else for(var _ in a)a.hasOwnProperty(_)&&f_(n,_,a[_])}function Gf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uc(n){return GS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var kf=null;function Xf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Is=null,Bs=null;function d_(n){var a=D(n);if(a&&(n=a.stateNode)){var s=n[gn]||null;t:switch(n=a.stateNode,a.type){case"input":if(ze(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Tn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var h=c[gn]||null;if(!h)throw Error(i(90));ze(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&$n(c)}break t;case"textarea":Ln(n,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&Qe(n,!!s.multiple,a,!1)}}}var Wf=!1;function p_(n,a,s){if(Wf)return n(a,s);Wf=!0;try{var c=n(a);return c}finally{if(Wf=!1,(Is!==null||Bs!==null)&&(mu(),Is&&(a=Is,n=Bs,Bs=Is=null,d_(a),n)))for(a=0;a<n.length;a++)d_(n[a])}}function ol(n,a){var s=n.stateNode;if(s===null)return null;var c=s[gn]||null;if(c===null)return null;s=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,a,typeof s));return s}var Yf=!1;if(It)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{Yf=!1}var Qa=null,qf=null,Oc=null;function m_(){if(Oc)return Oc;var n,a=qf,s=a.length,c,h="value"in Qa?Qa.value:Qa.textContent,_=h.length;for(n=0;n<s&&a[n]===h[n];n++);var T=s-n;for(c=1;c<=T&&a[s-c]===h[_-c];c++);return Oc=h.slice(n,1<c?1-c:void 0)}function Nc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Pc(){return!0}function __(){return!1}function ei(n){function a(s,c,h,_,T){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(_):_[w]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Pc:__,this.isPropagationStopped=__,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pc)},persist:function(){},isPersistent:Pc}),a}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=ei(kr),cl=A({},kr,{view:0,detail:0}),kS=ei(cl),jf,Zf,ul,Ic=A({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ul&&(ul&&n.type==="mousemove"?(jf=n.screenX-ul.screenX,Zf=n.screenY-ul.screenY):Zf=jf=0,ul=n),jf)},movementY:function(n){return"movementY"in n?n.movementY:Zf}}),g_=ei(Ic),XS=A({},Ic,{dataTransfer:0}),WS=ei(XS),YS=A({},cl,{relatedTarget:0}),Kf=ei(YS),qS=A({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=ei(qS),ZS=A({},kr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),KS=ei(ZS),QS=A({},kr,{data:0}),v_=ei(QS),JS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=tM[n])?!!a[n]:!1}function Qf(){return eM}var nM=A({},cl,{key:function(n){if(n.key){var a=JS[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Nc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$S[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(n){return n.type==="keypress"?Nc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iM=ei(nM),aM=A({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y_=ei(aM),rM=A({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),sM=ei(rM),oM=A({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lM=ei(oM),cM=A({},Ic,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=ei(cM),fM=A({},kr,{newState:0,oldState:0}),hM=ei(fM),dM=[9,13,27,32],Jf=It&&"CompositionEvent"in window,fl=null;It&&"documentMode"in document&&(fl=document.documentMode);var pM=It&&"TextEvent"in window&&!fl,x_=It&&(!Jf||fl&&8<fl&&11>=fl),S_=" ",M_=!1;function E_(n,a){switch(n){case"keyup":return dM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function mM(n,a){switch(n){case"compositionend":return T_(a);case"keypress":return a.which!==32?null:(M_=!0,S_);case"textInput":return n=a.data,n===S_&&M_?null:n;default:return null}}function _M(n,a){if(Fs)return n==="compositionend"||!Jf&&E_(n,a)?(n=m_(),Oc=qf=Qa=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return x_&&a.locale!=="ko"?null:a.data;default:return null}}var gM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b_(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!gM[n.type]:a==="textarea"}function A_(n,a,s,c){Is?Bs?Bs.push(c):Bs=[c]:Is=c,a=xu(a,"onChange"),0<a.length&&(s=new zc("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var hl=null,dl=null;function vM(n){J0(n,0)}function Bc(n){var a=Z(n);if($n(a))return n}function R_(n,a){if(n==="change")return a}var C_=!1;if(It){var $f;if(It){var th="oninput"in document;if(!th){var w_=document.createElement("div");w_.setAttribute("oninput","return;"),th=typeof w_.oninput=="function"}$f=th}else $f=!1;C_=$f&&(!document.documentMode||9<document.documentMode)}function D_(){hl&&(hl.detachEvent("onpropertychange",L_),dl=hl=null)}function L_(n){if(n.propertyName==="value"&&Bc(dl)){var a=[];A_(a,dl,n,Xf(n)),p_(vM,a)}}function yM(n,a,s){n==="focusin"?(D_(),hl=a,dl=s,hl.attachEvent("onpropertychange",L_)):n==="focusout"&&D_()}function xM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bc(dl)}function SM(n,a){if(n==="click")return Bc(a)}function MM(n,a){if(n==="input"||n==="change")return Bc(a)}function EM(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var di=typeof Object.is=="function"?Object.is:EM;function pl(n,a){if(di(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!De.call(a,h)||!di(n[h],a[h]))return!1}return!0}function U_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function O_(n,a){var s=U_(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=U_(s)}}function N_(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?N_(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function P_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Gi(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=Gi(n.document)}return a}function eh(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function TM(n,a){var s=P_(a);a=n.focusedElem;var c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&N_(a.ownerDocument.documentElement,a)){if(c!==null&&eh(a)){if(n=c.start,s=c.end,s===void 0&&(s=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(s,a.value.length);else if(s=(n=a.ownerDocument||document)&&n.defaultView||window,s.getSelection){s=s.getSelection();var h=a.textContent.length,_=Math.min(c.start,h);c=c.end===void 0?_:Math.min(c.end,h),!s.extend&&_>c&&(h=c,c=_,_=h),h=O_(a,_);var T=O_(a,c);h&&T&&(s.rangeCount!==1||s.anchorNode!==h.node||s.anchorOffset!==h.offset||s.focusNode!==T.node||s.focusOffset!==T.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),s.removeAllRanges(),_>c?(s.addRange(n),s.extend(T.node,T.offset)):(n.setEnd(T.node,T.offset),s.addRange(n)))}}for(n=[],s=a;s=s.parentNode;)s.nodeType===1&&n.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)s=n[a],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var bM=It&&"documentMode"in document&&11>=document.documentMode,Hs=null,nh=null,ml=null,ih=!1;function z_(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ih||Hs==null||Hs!==Gi(c)||(c=Hs,"selectionStart"in c&&eh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ml&&pl(ml,c)||(ml=c,c=xu(nh,"onSelect"),0<c.length&&(a=new zc("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Hs)))}function Xr(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Vs={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionrun:Xr("Transition","TransitionRun"),transitionstart:Xr("Transition","TransitionStart"),transitioncancel:Xr("Transition","TransitionCancel"),transitionend:Xr("Transition","TransitionEnd")},ah={},I_={};It&&(I_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Wr(n){if(ah[n])return ah[n];if(!Vs[n])return n;var a=Vs[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in I_)return ah[n]=a[s];return n}var B_=Wr("animationend"),F_=Wr("animationiteration"),H_=Wr("animationstart"),AM=Wr("transitionrun"),RM=Wr("transitionstart"),CM=Wr("transitioncancel"),V_=Wr("transitionend"),G_=new Map,k_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ki(n,a){G_.set(n,a),Lt(a,[n])}var Ri=[],Gs=0,rh=0;function Fc(){for(var n=Gs,a=rh=Gs=0;a<n;){var s=Ri[a];Ri[a++]=null;var c=Ri[a];Ri[a++]=null;var h=Ri[a];Ri[a++]=null;var _=Ri[a];if(Ri[a++]=null,c!==null&&h!==null){var T=c.pending;T===null?h.next=h:(h.next=T.next,T.next=h),c.pending=h}_!==0&&X_(s,h,_)}}function Hc(n,a,s,c){Ri[Gs++]=n,Ri[Gs++]=a,Ri[Gs++]=s,Ri[Gs++]=c,rh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function sh(n,a,s,c){return Hc(n,a,s,c),Vc(n)}function Ja(n,a){return Hc(n,null,null,a),Vc(n)}function X_(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,_=n.return;_!==null;)_.childLanes|=s,c=_.alternate,c!==null&&(c.childLanes|=s),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(h=!0)),n=_,_=_.return;h&&a!==null&&n.tag===3&&(_=n.stateNode,h=31-ft(s),_=_.hiddenUpdates,n=_[h],n===null?_[h]=[a]:n.push(a),a.lane=s|536870912)}function Vc(n){if(50<Hl)throw Hl=0,hd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var ks={},W_=new WeakMap;function Ci(n,a){if(typeof n=="object"&&n!==null){var s=W_.get(n);return s!==void 0?s:(a={value:n,source:a,stack:$(a)},W_.set(n,a),a)}return{value:n,source:a,stack:$(a)}}var Xs=[],Ws=0,Gc=null,kc=0,wi=[],Di=0,Yr=null,xa=1,Sa="";function qr(n,a){Xs[Ws++]=kc,Xs[Ws++]=Gc,Gc=n,kc=a}function Y_(n,a,s){wi[Di++]=xa,wi[Di++]=Sa,wi[Di++]=Yr,Yr=n;var c=xa;n=Sa;var h=32-ft(c)-1;c&=~(1<<h),s+=1;var _=32-ft(a)+h;if(30<_){var T=h-h%5;_=(c&(1<<T)-1).toString(32),c>>=T,h-=T,xa=1<<32-ft(a)+h|s<<h|c,Sa=_+n}else xa=1<<_|s<<h|c,Sa=n}function oh(n){n.return!==null&&(qr(n,1),Y_(n,1,0))}function lh(n){for(;n===Gc;)Gc=Xs[--Ws],Xs[Ws]=null,kc=Xs[--Ws],Xs[Ws]=null;for(;n===Yr;)Yr=wi[--Di],wi[Di]=null,Sa=wi[--Di],wi[Di]=null,xa=wi[--Di],wi[Di]=null}var qn=null,Un=null,Ue=!1,Xi=null,ia=!1,ch=Error(i(519));function jr(n){var a=Error(i(418,""));throw vl(Ci(a,n)),ch}function q_(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[_n]=n,a[gn]=c,s){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(s=0;s<Gl.length;s++)Te(Gl[s],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Te("invalid",a),Yn(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ee(a);break;case"select":Te("invalid",a);break;case"textarea":Te("invalid",a),zs(a,c.value,c.defaultValue,c.children),Ee(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||nv(a.textContent,s)?(c.popover!=null&&(Te("beforetoggle",a),Te("toggle",a)),c.onScroll!=null&&Te("scroll",a),c.onScrollEnd!=null&&Te("scrollend",a),c.onClick!=null&&(a.onclick=Su),a=!0):a=!1,a||jr(n)}function j_(n){for(qn=n.return;qn;)switch(qn.tag){case 3:case 27:ia=!0;return;case 5:case 13:ia=!1;return;default:qn=qn.return}}function _l(n){if(n!==qn)return!1;if(!Ue)return j_(n),Ue=!0,!1;var a=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||wd(n.type,n.memoizedProps)),s=!s),s&&(a=!0),a&&Un&&jr(n),j_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Un=Yi(n.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Un=null}}else Un=qn?Yi(n.stateNode.nextSibling):null;return!0}function gl(){Un=qn=null,Ue=!1}function vl(n){Xi===null?Xi=[n]:Xi.push(n)}var yl=Error(i(460)),Z_=Error(i(474)),uh={then:function(){}};function K_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Xc(){}function Q_(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Xc,Xc),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===yl?Error(i(483)):n;default:if(typeof a.status=="string")a.then(Xc,Xc);else{if(n=Ge,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===yl?Error(i(483)):n}throw xl=a,yl}}var xl=null;function J_(){if(xl===null)throw Error(i(459));var n=xl;return xl=null,n}var Ys=null,Sl=0;function Wc(n){var a=Sl;return Sl+=1,Ys===null&&(Ys=[]),Q_(Ys,n,a)}function Ml(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Yc(n,a){throw a.$$typeof===l?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function $_(n){var a=n._init;return a(n._payload)}function tg(n){function a(J,Y){if(n){var et=J.deletions;et===null?(J.deletions=[Y],J.flags|=16):et.push(Y)}}function s(J,Y){if(!n)return null;for(;Y!==null;)a(J,Y),Y=Y.sibling;return null}function c(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function h(J,Y){return J=ur(J,Y),J.index=0,J.sibling=null,J}function _(J,Y,et){return J.index=et,n?(et=J.alternate,et!==null?(et=et.index,et<Y?(J.flags|=33554434,Y):et):(J.flags|=33554434,Y)):(J.flags|=1048576,Y)}function T(J){return n&&J.alternate===null&&(J.flags|=33554434),J}function w(J,Y,et,vt){return Y===null||Y.tag!==6?(Y=ad(et,J.mode,vt),Y.return=J,Y):(Y=h(Y,et),Y.return=J,Y)}function F(J,Y,et,vt){var kt=et.type;return kt===d?mt(J,Y,et.props.children,vt,et.key):Y!==null&&(Y.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===L&&$_(kt)===Y.type)?(Y=h(Y,et.props),Ml(Y,et),Y.return=J,Y):(Y=uu(et.type,et.key,et.props,null,J.mode,vt),Ml(Y,et),Y.return=J,Y)}function j(J,Y,et,vt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==et.containerInfo||Y.stateNode.implementation!==et.implementation?(Y=rd(et,J.mode,vt),Y.return=J,Y):(Y=h(Y,et.children||[]),Y.return=J,Y)}function mt(J,Y,et,vt,kt){return Y===null||Y.tag!==7?(Y=as(et,J.mode,vt,kt),Y.return=J,Y):(Y=h(Y,et),Y.return=J,Y)}function xt(J,Y,et){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=ad(""+Y,J.mode,et),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case u:return et=uu(Y.type,Y.key,Y.props,null,J.mode,et),Ml(et,Y),et.return=J,et;case f:return Y=rd(Y,J.mode,et),Y.return=J,Y;case L:var vt=Y._init;return Y=vt(Y._payload),xt(J,Y,et)}if(Ct(Y)||P(Y))return Y=as(Y,J.mode,et,null),Y.return=J,Y;if(typeof Y.then=="function")return xt(J,Wc(Y),et);if(Y.$$typeof===x)return xt(J,ou(J,Y),et);Yc(J,Y)}return null}function ot(J,Y,et,vt){var kt=Y!==null?Y.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return kt!==null?null:w(J,Y,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case u:return et.key===kt?F(J,Y,et,vt):null;case f:return et.key===kt?j(J,Y,et,vt):null;case L:return kt=et._init,et=kt(et._payload),ot(J,Y,et,vt)}if(Ct(et)||P(et))return kt!==null?null:mt(J,Y,et,vt,null);if(typeof et.then=="function")return ot(J,Y,Wc(et),vt);if(et.$$typeof===x)return ot(J,Y,ou(J,et),vt);Yc(J,et)}return null}function ht(J,Y,et,vt,kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(et)||null,w(Y,J,""+vt,kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case u:return J=J.get(vt.key===null?et:vt.key)||null,F(Y,J,vt,kt);case f:return J=J.get(vt.key===null?et:vt.key)||null,j(Y,J,vt,kt);case L:var ve=vt._init;return vt=ve(vt._payload),ht(J,Y,et,vt,kt)}if(Ct(vt)||P(vt))return J=J.get(et)||null,mt(Y,J,vt,kt,null);if(typeof vt.then=="function")return ht(J,Y,et,Wc(vt),kt);if(vt.$$typeof===x)return ht(J,Y,et,ou(Y,vt),kt);Yc(Y,vt)}return null}function jt(J,Y,et,vt){for(var kt=null,ve=null,Qt=Y,ie=Y=0,Rn=null;Qt!==null&&ie<et.length;ie++){Qt.index>ie?(Rn=Qt,Qt=null):Rn=Qt.sibling;var Oe=ot(J,Qt,et[ie],vt);if(Oe===null){Qt===null&&(Qt=Rn);break}n&&Qt&&Oe.alternate===null&&a(J,Qt),Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe,Qt=Rn}if(ie===et.length)return s(J,Qt),Ue&&qr(J,ie),kt;if(Qt===null){for(;ie<et.length;ie++)Qt=xt(J,et[ie],vt),Qt!==null&&(Y=_(Qt,Y,ie),ve===null?kt=Qt:ve.sibling=Qt,ve=Qt);return Ue&&qr(J,ie),kt}for(Qt=c(Qt);ie<et.length;ie++)Rn=ht(Qt,J,ie,et[ie],vt),Rn!==null&&(n&&Rn.alternate!==null&&Qt.delete(Rn.key===null?ie:Rn.key),Y=_(Rn,Y,ie),ve===null?kt=Rn:ve.sibling=Rn,ve=Rn);return n&&Qt.forEach(function(gr){return a(J,gr)}),Ue&&qr(J,ie),kt}function le(J,Y,et,vt){if(et==null)throw Error(i(151));for(var kt=null,ve=null,Qt=Y,ie=Y=0,Rn=null,Oe=et.next();Qt!==null&&!Oe.done;ie++,Oe=et.next()){Qt.index>ie?(Rn=Qt,Qt=null):Rn=Qt.sibling;var gr=ot(J,Qt,Oe.value,vt);if(gr===null){Qt===null&&(Qt=Rn);break}n&&Qt&&gr.alternate===null&&a(J,Qt),Y=_(gr,Y,ie),ve===null?kt=gr:ve.sibling=gr,ve=gr,Qt=Rn}if(Oe.done)return s(J,Qt),Ue&&qr(J,ie),kt;if(Qt===null){for(;!Oe.done;ie++,Oe=et.next())Oe=xt(J,Oe.value,vt),Oe!==null&&(Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe);return Ue&&qr(J,ie),kt}for(Qt=c(Qt);!Oe.done;ie++,Oe=et.next())Oe=ht(Qt,J,ie,Oe.value,vt),Oe!==null&&(n&&Oe.alternate!==null&&Qt.delete(Oe.key===null?ie:Oe.key),Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe);return n&&Qt.forEach(function(GE){return a(J,GE)}),Ue&&qr(J,ie),kt}function tn(J,Y,et,vt){if(typeof et=="object"&&et!==null&&et.type===d&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case u:t:{for(var kt=et.key;Y!==null;){if(Y.key===kt){if(kt=et.type,kt===d){if(Y.tag===7){s(J,Y.sibling),vt=h(Y,et.props.children),vt.return=J,J=vt;break t}}else if(Y.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===L&&$_(kt)===Y.type){s(J,Y.sibling),vt=h(Y,et.props),Ml(vt,et),vt.return=J,J=vt;break t}s(J,Y);break}else a(J,Y);Y=Y.sibling}et.type===d?(vt=as(et.props.children,J.mode,vt,et.key),vt.return=J,J=vt):(vt=uu(et.type,et.key,et.props,null,J.mode,vt),Ml(vt,et),vt.return=J,J=vt)}return T(J);case f:t:{for(kt=et.key;Y!==null;){if(Y.key===kt)if(Y.tag===4&&Y.stateNode.containerInfo===et.containerInfo&&Y.stateNode.implementation===et.implementation){s(J,Y.sibling),vt=h(Y,et.children||[]),vt.return=J,J=vt;break t}else{s(J,Y);break}else a(J,Y);Y=Y.sibling}vt=rd(et,J.mode,vt),vt.return=J,J=vt}return T(J);case L:return kt=et._init,et=kt(et._payload),tn(J,Y,et,vt)}if(Ct(et))return jt(J,Y,et,vt);if(P(et)){if(kt=P(et),typeof kt!="function")throw Error(i(150));return et=kt.call(et),le(J,Y,et,vt)}if(typeof et.then=="function")return tn(J,Y,Wc(et),vt);if(et.$$typeof===x)return tn(J,Y,ou(J,et),vt);Yc(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,Y!==null&&Y.tag===6?(s(J,Y.sibling),vt=h(Y,et),vt.return=J,J=vt):(s(J,Y),vt=ad(et,J.mode,vt),vt.return=J,J=vt),T(J)):s(J,Y)}return function(J,Y,et,vt){try{Sl=0;var kt=tn(J,Y,et,vt);return Ys=null,kt}catch(Qt){if(Qt===yl)throw Qt;var ve=Ni(29,Qt,null,J.mode);return ve.lanes=vt,ve.return=J,ve}finally{}}}var Zr=tg(!0),eg=tg(!1),qs=wt(null),qc=wt(0);function ng(n,a){n=Ua,zt(qc,n),zt(qs,a),Ua=n|a.baseLanes}function fh(){zt(qc,Ua),zt(qs,qs.current)}function hh(){Ua=qc.current,te(qs),te(qc)}var Li=wt(null),aa=null;function $a(n){var a=n.alternate;zt(yn,yn.current&1),zt(Li,n),aa===null&&(a===null||qs.current!==null||a.memoizedState!==null)&&(aa=n)}function ig(n){if(n.tag===22){if(zt(yn,yn.current),zt(Li,n),aa===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(aa=n)}}else tr()}function tr(){zt(yn,yn.current),zt(Li,Li.current)}function Ma(n){te(Li),aa===n&&(aa=null),te(yn)}var yn=wt(0);function jc(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var wM=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},DM=o.unstable_scheduleCallback,LM=o.unstable_NormalPriority,xn={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dh(){return{controller:new wM,data:new Map,refCount:0}}function El(n){n.refCount--,n.refCount===0&&DM(LM,function(){n.controller.abort()})}var Tl=null,ph=0,js=0,Zs=null;function UM(n,a){if(Tl===null){var s=Tl=[];ph=0,js=xd(),Zs={status:"pending",value:void 0,then:function(c){s.push(c)}}}return ph++,a.then(ag,ag),a}function ag(){if(--ph===0&&Tl!==null){Zs!==null&&(Zs.status="fulfilled");var n=Tl;Tl=null,js=0,Zs=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function OM(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var rg=b.S;b.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&UM(n,a),rg!==null&&rg(n,a)};var Kr=wt(null);function mh(){var n=Kr.current;return n!==null?n:Ge.pooledCache}function Zc(n,a){a===null?zt(Kr,Kr.current):zt(Kr,a.pool)}function sg(){var n=mh();return n===null?null:{parent:xn._currentValue,pool:n}}var er=0,me=null,Ie=null,cn=null,Kc=!1,Ks=!1,Qr=!1,Qc=0,bl=0,Qs=null,NM=0;function rn(){throw Error(i(321))}function _h(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!di(n[s],a[s]))return!1;return!0}function gh(n,a,s,c,h,_){return er=_,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,b.H=n===null||n.memoizedState===null?Jr:nr,Qr=!1,_=s(c,h),Qr=!1,Ks&&(_=lg(a,s,c,h)),og(n),_}function og(n){b.H=ra;var a=Ie!==null&&Ie.next!==null;if(er=0,cn=Ie=me=null,Kc=!1,bl=0,Qs=null,a)throw Error(i(300));n===null||bn||(n=n.dependencies,n!==null&&su(n)&&(bn=!0))}function lg(n,a,s,c){me=n;var h=0;do{if(Ks&&(Qs=null),bl=0,Ks=!1,25<=h)throw Error(i(301));if(h+=1,cn=Ie=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}b.H=$r,_=a(s,c)}while(Ks);return _}function PM(){var n=b.H,a=n.useState()[0];return a=typeof a.then=="function"?Al(a):a,n=n.useState()[0],(Ie!==null?Ie.memoizedState:null)!==n&&(me.flags|=1024),a}function vh(){var n=Qc!==0;return Qc=0,n}function yh(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function xh(n){if(Kc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Kc=!1}er=0,cn=Ie=me=null,Ks=!1,bl=Qc=0,Qs=null}function ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?me.memoizedState=cn=n:cn=cn.next=n,cn}function un(){if(Ie===null){var n=me.alternate;n=n!==null?n.memoizedState:null}else n=Ie.next;var a=cn===null?me.memoizedState:cn.next;if(a!==null)cn=a,Ie=n;else{if(n===null)throw me.alternate===null?Error(i(467)):Error(i(310));Ie=n,n={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?me.memoizedState=cn=n:cn=cn.next=n}return cn}var Jc;Jc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Al(n){var a=bl;return bl+=1,Qs===null&&(Qs=[]),n=Q_(Qs,n,a),a=me,(cn===null?a.memoizedState:cn.next)===null&&(a=a.alternate,b.H=a===null||a.memoizedState===null?Jr:nr),n}function $c(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Al(n);if(n.$$typeof===x)return Bn(n)}throw Error(i(438,String(n)))}function Sh(n){var a=null,s=me.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=me.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Jc(),me.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=R;return a.index++,s}function Ea(n,a){return typeof a=="function"?a(n):a}function tu(n){var a=un();return Mh(a,Ie,n)}function Mh(n,a,s){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=n.baseQueue,_=c.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}a.baseQueue=h=_,c.pending=null}if(_=n.baseState,h===null)n.memoizedState=_;else{a=h.next;var w=T=null,F=null,j=a,mt=!1;do{var xt=j.lane&-536870913;if(xt!==j.lane?(Ce&xt)===xt:(er&xt)===xt){var ot=j.revertLane;if(ot===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),xt===js&&(mt=!0);else if((er&ot)===ot){j=j.next,ot===js&&(mt=!0);continue}else xt={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(w=F=xt,T=_):F=F.next=xt,me.lanes|=ot,fr|=ot;xt=j.action,Qr&&s(_,xt),_=j.hasEagerState?j.eagerState:s(_,xt)}else ot={lane:xt,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(w=F=ot,T=_):F=F.next=ot,me.lanes|=xt,fr|=xt;j=j.next}while(j!==null&&j!==a);if(F===null?T=_:F.next=w,!di(_,n.memoizedState)&&(bn=!0,mt&&(s=Zs,s!==null)))throw s;n.memoizedState=_,n.baseState=T,n.baseQueue=F,c.lastRenderedState=_}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Eh(n){var a=un(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,_=a.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do _=n(_,T.action),T=T.next;while(T!==h);di(_,a.memoizedState)||(bn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),s.lastRenderedState=_}return[_,c]}function cg(n,a,s){var c=me,h=un(),_=Ue;if(_){if(s===void 0)throw Error(i(407));s=s()}else s=a();var T=!di((Ie||h).memoizedState,s);if(T&&(h.memoizedState=s,bn=!0),h=h.queue,Ah(hg.bind(null,c,h,n),[n]),h.getSnapshot!==a||T||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,Js(9,fg.bind(null,c,h,s,a),{destroy:void 0},null),Ge===null)throw Error(i(349));_||(er&60)!==0||ug(c,a,s)}return s}function ug(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=me.updateQueue,a===null?(a=Jc(),me.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function fg(n,a,s,c){a.value=s,a.getSnapshot=c,dg(a)&&pg(n)}function hg(n,a,s){return s(function(){dg(a)&&pg(n)})}function dg(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!di(n,s)}catch{return!0}}function pg(n){var a=Ja(n,2);a!==null&&jn(a,n,2)}function Th(n){var a=ni();if(typeof n=="function"){var s=n;if(n=s(),Qr){k(!0);try{s()}finally{k(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},a}function mg(n,a,s,c){return n.baseState=s,Mh(n,Ie,typeof c=="function"?c:Ea)}function zM(n,a,s,c,h){if(iu(n))throw Error(i(485));if(n=a.action,n!==null){var _={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};b.T!==null?s(!0):_.isTransition=!1,c(_),s=a.pending,s===null?(_.next=a.pending=_,_g(a,_)):(_.next=s.next,a.pending=s.next=_)}}function _g(n,a){var s=a.action,c=a.payload,h=n.state;if(a.isTransition){var _=b.T,T={};b.T=T;try{var w=s(h,c),F=b.S;F!==null&&F(T,w),gg(n,a,w)}catch(j){bh(n,a,j)}finally{b.T=_}}else try{_=s(h,c),gg(n,a,_)}catch(j){bh(n,a,j)}}function gg(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){vg(n,a,c)},function(c){return bh(n,a,c)}):vg(n,a,s)}function vg(n,a,s){a.status="fulfilled",a.value=s,yg(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,_g(n,s)))}function bh(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,yg(a),a=a.next;while(a!==c)}n.action=null}function yg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function xg(n,a){return a}function Sg(n,a){if(Ue){var s=Ge.formState;if(s!==null){t:{var c=me;if(Ue){if(Un){e:{for(var h=Un,_=ia;h.nodeType!==8;){if(!_){h=null;break e}if(h=Yi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){Un=Yi(h.nextSibling),c=h.data==="F!";break t}}jr(c)}c=!1}c&&(a=s[0])}}return s=ni(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:a},s.queue=c,s=Fg.bind(null,me,c),c.dispatch=s,c=Th(!1),_=Lh.bind(null,me,!1,c.queue),c=ni(),h={state:a,dispatch:null,action:n,pending:null},c.queue=h,s=zM.bind(null,me,h,_,s),h.dispatch=s,c.memoizedState=n,[a,s,!1]}function Mg(n){var a=un();return Eg(a,Ie,n)}function Eg(n,a,s){a=Mh(n,a,xg)[0],n=tu(Ea)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Al(a):a;var c=un(),h=c.queue,_=h.dispatch;return s!==c.memoizedState&&(me.flags|=2048,Js(9,IM.bind(null,h,s),{destroy:void 0},null)),[a,_,n]}function IM(n,a){n.action=a}function Tg(n){var a=un(),s=Ie;if(s!==null)return Eg(a,s,n);un(),a=a.memoizedState,s=un();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function Js(n,a,s,c){return n={tag:n,create:a,inst:s,deps:c,next:null},a=me.updateQueue,a===null&&(a=Jc(),me.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function bg(){return un().memoizedState}function eu(n,a,s,c){var h=ni();me.flags|=n,h.memoizedState=Js(1|a,s,{destroy:void 0},c===void 0?null:c)}function nu(n,a,s,c){var h=un();c=c===void 0?null:c;var _=h.memoizedState.inst;Ie!==null&&c!==null&&_h(c,Ie.memoizedState.deps)?h.memoizedState=Js(a,s,_,c):(me.flags|=n,h.memoizedState=Js(1|a,s,_,c))}function Ag(n,a){eu(8390656,8,n,a)}function Ah(n,a){nu(2048,8,n,a)}function Rg(n,a){return nu(4,2,n,a)}function Cg(n,a){return nu(4,4,n,a)}function wg(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Dg(n,a,s){s=s!=null?s.concat([n]):null,nu(4,4,wg.bind(null,a,n),s)}function Rh(){}function Lg(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&_h(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function Ug(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&_h(a,c[1]))return c[0];if(c=n(),Qr){k(!0);try{n()}finally{k(!1)}}return s.memoizedState=[c,a],c}function Ch(n,a,s){return s===void 0||(er&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=N0(),me.lanes|=n,fr|=n,s)}function Og(n,a,s,c){return di(s,a)?s:qs.current!==null?(n=Ch(n,s,c),di(n,a)||(bn=!0),n):(er&42)===0?(bn=!0,n.memoizedState=s):(n=N0(),me.lanes|=n,fr|=n,a)}function Ng(n,a,s,c,h){var _=q.p;q.p=_!==0&&8>_?_:8;var T=b.T,w={};b.T=w,Lh(n,!1,a,s);try{var F=h(),j=b.S;if(j!==null&&j(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var mt=OM(F,c);Rl(n,a,mt,gi(n))}else Rl(n,a,c,gi(n))}catch(xt){Rl(n,a,{then:function(){},status:"rejected",reason:xt},gi())}finally{q.p=_,b.T=T}}function BM(){}function wh(n,a,s,c){if(n.tag!==5)throw Error(i(476));var h=Pg(n).queue;Ng(n,h,a,dt,s===null?BM:function(){return zg(n),s(c)})}function Pg(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:dt},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function zg(n){var a=Pg(n).next.queue;Rl(n,a,{},gi())}function Dh(){return Bn(ql)}function Ig(){return un().memoizedState}function Bg(){return un().memoizedState}function FM(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=gi();n=rr(s);var c=sr(a,n,s);c!==null&&(jn(c,a,s),Dl(c,a,s)),a={cache:dh()},n.payload=a;return}a=a.return}}function HM(n,a,s){var c=gi();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},iu(n)?Hg(a,s):(s=sh(n,a,s,c),s!==null&&(jn(s,n,c),Vg(s,a,c)))}function Fg(n,a,s){var c=gi();Rl(n,a,s,c)}function Rl(n,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(iu(n))Hg(a,h);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var T=a.lastRenderedState,w=_(T,s);if(h.hasEagerState=!0,h.eagerState=w,di(w,T))return Hc(n,a,h,0),Ge===null&&Fc(),!1}catch{}finally{}if(s=sh(n,a,h,c),s!==null)return jn(s,n,c),Vg(s,a,c),!0}return!1}function Lh(n,a,s,c){if(c={lane:2,revertLane:xd(),action:c,hasEagerState:!1,eagerState:null,next:null},iu(n)){if(a)throw Error(i(479))}else a=sh(n,s,c,2),a!==null&&jn(a,n,2)}function iu(n){var a=n.alternate;return n===me||a!==null&&a===me}function Hg(n,a){Ks=Kc=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function Vg(n,a,s){if((s&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,na(n,s)}}var ra={readContext:Bn,use:$c,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};ra.useCacheRefresh=rn,ra.useMemoCache=rn,ra.useHostTransitionStatus=rn,ra.useFormState=rn,ra.useActionState=rn,ra.useOptimistic=rn;var Jr={readContext:Bn,use:$c,useCallback:function(n,a){return ni().memoizedState=[n,a===void 0?null:a],n},useContext:Bn,useEffect:Ag,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,eu(4194308,4,wg.bind(null,a,n),s)},useLayoutEffect:function(n,a){return eu(4194308,4,n,a)},useInsertionEffect:function(n,a){eu(4,2,n,a)},useMemo:function(n,a){var s=ni();a=a===void 0?null:a;var c=n();if(Qr){k(!0);try{n()}finally{k(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=ni();if(s!==void 0){var h=s(a);if(Qr){k(!0);try{s(a)}finally{k(!1)}}}else h=a;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=HM.bind(null,me,n),[c.memoizedState,n]},useRef:function(n){var a=ni();return n={current:n},a.memoizedState=n},useState:function(n){n=Th(n);var a=n.queue,s=Fg.bind(null,me,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:Rh,useDeferredValue:function(n,a){var s=ni();return Ch(s,n,a)},useTransition:function(){var n=Th(!1);return n=Ng.bind(null,me,n.queue,!0,!1),ni().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=me,h=ni();if(Ue){if(s===void 0)throw Error(i(407));s=s()}else{if(s=a(),Ge===null)throw Error(i(349));(Ce&60)!==0||ug(c,a,s)}h.memoizedState=s;var _={value:s,getSnapshot:a};return h.queue=_,Ag(hg.bind(null,c,_,n),[n]),c.flags|=2048,Js(9,fg.bind(null,c,_,s,a),{destroy:void 0},null),s},useId:function(){var n=ni(),a=Ge.identifierPrefix;if(Ue){var s=Sa,c=xa;s=(c&~(1<<32-ft(c)-1)).toString(32)+s,a=":"+a+"R"+s,s=Qc++,0<s&&(a+="H"+s.toString(32)),a+=":"}else s=NM++,a=":"+a+"r"+s.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return ni().memoizedState=FM.bind(null,me)}};Jr.useMemoCache=Sh,Jr.useHostTransitionStatus=Dh,Jr.useFormState=Sg,Jr.useActionState=Sg,Jr.useOptimistic=function(n){var a=ni();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Lh.bind(null,me,!0,s),s.dispatch=a,[n,a]};var nr={readContext:Bn,use:$c,useCallback:Lg,useContext:Bn,useEffect:Ah,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ug,useReducer:tu,useRef:bg,useState:function(){return tu(Ea)},useDebugValue:Rh,useDeferredValue:function(n,a){var s=un();return Og(s,Ie.memoizedState,n,a)},useTransition:function(){var n=tu(Ea)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Al(n),a]},useSyncExternalStore:cg,useId:Ig};nr.useCacheRefresh=Bg,nr.useMemoCache=Sh,nr.useHostTransitionStatus=Dh,nr.useFormState=Mg,nr.useActionState=Mg,nr.useOptimistic=function(n,a){var s=un();return mg(s,Ie,n,a)};var $r={readContext:Bn,use:$c,useCallback:Lg,useContext:Bn,useEffect:Ah,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ug,useReducer:Eh,useRef:bg,useState:function(){return Eh(Ea)},useDebugValue:Rh,useDeferredValue:function(n,a){var s=un();return Ie===null?Ch(s,n,a):Og(s,Ie.memoizedState,n,a)},useTransition:function(){var n=Eh(Ea)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Al(n),a]},useSyncExternalStore:cg,useId:Ig};$r.useCacheRefresh=Bg,$r.useMemoCache=Sh,$r.useHostTransitionStatus=Dh,$r.useFormState=Tg,$r.useActionState=Tg,$r.useOptimistic=function(n,a){var s=un();return Ie!==null?mg(s,Ie,n,a):(s.baseState=n,[n,s.queue.dispatch])};function Uh(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:A({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Oh={isMounted:function(n){return(n=n._reactInternals)?W(n)===n:!1},enqueueSetState:function(n,a,s){n=n._reactInternals;var c=gi(),h=rr(c);h.payload=a,s!=null&&(h.callback=s),a=sr(n,h,c),a!==null&&(jn(a,n,c),Dl(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=gi(),h=rr(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=sr(n,h,c),a!==null&&(jn(a,n,c),Dl(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=gi(),c=rr(s);c.tag=2,a!=null&&(c.callback=a),a=sr(n,c,s),a!==null&&(jn(a,n,s),Dl(a,n,s))}};function Gg(n,a,s,c,h,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,T):a.prototype&&a.prototype.isPureReactComponent?!pl(s,c)||!pl(h,_):!0}function kg(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Oh.enqueueReplaceState(a,a.state,null)}function ts(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=A({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var au=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Xg(n){au(n)}function Wg(n){console.error(n)}function Yg(n){au(n)}function ru(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function qg(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nh(n,a,s){return s=rr(s),s.tag=3,s.payload={element:null},s.callback=function(){ru(n,a)},s}function jg(n){return n=rr(n),n.tag=3,n}function Zg(n,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var _=c.value;n.payload=function(){return h(_)},n.callback=function(){qg(a,s,c)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){qg(a,s,c),typeof h!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function VM(n,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&wl(a,s,h,!0),s=Li.current,s!==null){switch(s.tag){case 13:return aa===null?md():s.alternate===null&&$e===0&&($e=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===uh?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),gd(n,c,h)),!1;case 22:return s.flags|=65536,c===uh?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),gd(n,c,h)),!1}throw Error(i(435,s.tag))}return gd(n,c,h),md(),!1}if(Ue)return a=Li.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==ch&&(n=Error(i(422),{cause:c}),vl(Ci(n,s)))):(c!==ch&&(a=Error(i(423),{cause:c}),vl(Ci(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=Ci(c,s),h=Nh(n.stateNode,c,h),Zh(n,h),$e!==4&&($e=2)),!1;var _=Error(i(520),{cause:c});if(_=Ci(_,s),Bl===null?Bl=[_]:Bl.push(_),$e!==4&&($e=2),a===null)return!0;c=Ci(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Nh(s.stateNode,c,n),Zh(s,n),!1;case 1:if(a=s.type,_=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hr===null||!hr.has(_))))return s.flags|=65536,h&=-h,s.lanes|=h,h=jg(h),Zg(h,n,s,c),Zh(s,h),!1}s=s.return}while(s!==null);return!1}var Kg=Error(i(461)),bn=!1;function On(n,a,s,c){a.child=n===null?eg(a,null,s,c):Zr(a,n.child,s,c)}function Qg(n,a,s,c,h){s=s.render;var _=a.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return ns(a),c=gh(n,a,s,T,_,h),w=vh(),n!==null&&!bn?(yh(n,a,h),Ta(n,a,h)):(Ue&&w&&oh(a),a.flags|=1,On(n,a,c,h),a.child)}function Jg(n,a,s,c,h){if(n===null){var _=s.type;return typeof _=="function"&&!id(_)&&_.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=_,$g(n,a,_,c,h)):(n=uu(s.type,null,c,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(_=n.child,!kh(n,h)){var T=_.memoizedProps;if(s=s.compare,s=s!==null?s:pl,s(T,c)&&n.ref===a.ref)return Ta(n,a,h)}return a.flags|=1,n=ur(_,c),n.ref=a.ref,n.return=a,a.child=n}function $g(n,a,s,c,h){if(n!==null){var _=n.memoizedProps;if(pl(_,c)&&n.ref===a.ref)if(bn=!1,a.pendingProps=c=_,kh(n,h))(n.flags&131072)!==0&&(bn=!0);else return a.lanes=n.lanes,Ta(n,a,h)}return Ph(n,a,s,c,h)}function t0(n,a,s){var c=a.pendingProps,h=c.children,_=(a.stateNode._pendingVisibility&2)!==0,T=n!==null?n.memoizedState:null;if(Cl(n,a),c.mode==="hidden"||_){if((a.flags&128)!==0){if(c=T!==null?T.baseLanes|s:s,n!==null){for(h=a.child=n.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;a.childLanes=_&~c}else a.childLanes=0,a.child=null;return e0(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Zc(a,T!==null?T.cachePool:null),T!==null?ng(a,T):fh(),ig(a);else return a.lanes=a.childLanes=536870912,e0(n,a,T!==null?T.baseLanes|s:s,s)}else T!==null?(Zc(a,T.cachePool),ng(a,T),tr(),a.memoizedState=null):(n!==null&&Zc(a,null),fh(),tr());return On(n,a,h,s),a.child}function e0(n,a,s,c){var h=mh();return h=h===null?null:{parent:xn._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Zc(a,null),fh(),ig(a),n!==null&&wl(n,a,c,!0),null}function Cl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(a.flags|=2097664)}}function Ph(n,a,s,c,h){return ns(a),s=gh(n,a,s,c,void 0,h),c=vh(),n!==null&&!bn?(yh(n,a,h),Ta(n,a,h)):(Ue&&c&&oh(a),a.flags|=1,On(n,a,s,h),a.child)}function n0(n,a,s,c,h,_){return ns(a),a.updateQueue=null,s=lg(a,c,s,h),og(n),c=vh(),n!==null&&!bn?(yh(n,a,_),Ta(n,a,_)):(Ue&&c&&oh(a),a.flags|=1,On(n,a,s,_),a.child)}function i0(n,a,s,c,h){if(ns(a),a.stateNode===null){var _=ks,T=s.contextType;typeof T=="object"&&T!==null&&(_=Bn(T)),_=new s(c,_),a.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Oh,a.stateNode=_,_._reactInternals=a,_=a.stateNode,_.props=c,_.state=a.memoizedState,_.refs={},qh(a),T=s.contextType,_.context=typeof T=="object"&&T!==null?Bn(T):ks,_.state=a.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Uh(a,s,T,c),_.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Oh.enqueueReplaceState(_,_.state,null),Ul(a,c,_,h),Ll(),_.state=a.memoizedState),typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){_=a.stateNode;var w=a.memoizedProps,F=ts(s,w);_.props=F;var j=_.context,mt=s.contextType;T=ks,typeof mt=="object"&&mt!==null&&(T=Bn(mt));var xt=s.getDerivedStateFromProps;mt=typeof xt=="function"||typeof _.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,mt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w||j!==T)&&kg(a,_,c,T),ar=!1;var ot=a.memoizedState;_.state=ot,Ul(a,c,_,h),Ll(),j=a.memoizedState,w||ot!==j||ar?(typeof xt=="function"&&(Uh(a,s,xt,c),j=a.memoizedState),(F=ar||Gg(a,s,F,c,ot,j,T))?(mt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=j),_.props=c,_.state=j,_.context=T,c=F):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{_=a.stateNode,jh(n,a),T=a.memoizedProps,mt=ts(s,T),_.props=mt,xt=a.pendingProps,ot=_.context,j=s.contextType,F=ks,typeof j=="object"&&j!==null&&(F=Bn(j)),w=s.getDerivedStateFromProps,(j=typeof w=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==xt||ot!==F)&&kg(a,_,c,F),ar=!1,ot=a.memoizedState,_.state=ot,Ul(a,c,_,h),Ll();var ht=a.memoizedState;T!==xt||ot!==ht||ar||n!==null&&n.dependencies!==null&&su(n.dependencies)?(typeof w=="function"&&(Uh(a,s,w,c),ht=a.memoizedState),(mt=ar||Gg(a,s,mt,c,ot,ht,F)||n!==null&&n.dependencies!==null&&su(n.dependencies))?(j||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ht,F),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ht,F)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=ht),_.props=c,_.state=ht,_.context=F,c=mt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),c=!1)}return _=c,Cl(n,a),c=(a.flags&128)!==0,_||c?(_=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:_.render(),a.flags|=1,n!==null&&c?(a.child=Zr(a,n.child,null,h),a.child=Zr(a,null,s,h)):On(n,a,s,h),a.memoizedState=_.state,n=a.child):n=Ta(n,a,h),n}function a0(n,a,s,c){return gl(),a.flags|=256,On(n,a,s,c),a.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Ih(n){return{baseLanes:n,cachePool:sg()}}function Bh(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=Pi),n}function r0(n,a,s){var c=a.pendingProps,h=!1,_=(a.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),T&&(h=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ue){if(h?$a(a):tr(),Ue){var w=Un,F;if(F=w){t:{for(F=w,w=ia;F.nodeType!==8;){if(!w){w=null;break t}if(F=Yi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(a.memoizedState={dehydrated:w,treeContext:Yr!==null?{id:xa,overflow:Sa}:null,retryLane:536870912},F=Ni(18,null,null,0),F.stateNode=w,F.return=a,a.child=F,qn=a,Un=null,F=!0):F=!1}F||jr(a)}if(w=a.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?a.lanes=16:a.lanes=536870912,null;Ma(a)}return w=c.children,c=c.fallback,h?(tr(),h=a.mode,w=Hh({mode:"hidden",children:w},h),c=as(c,h,s,null),w.return=a,c.return=a,w.sibling=c,a.child=w,h=a.child,h.memoizedState=Ih(s),h.childLanes=Bh(n,T,s),a.memoizedState=zh,c):($a(a),Fh(a,w))}if(F=n.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(_)a.flags&256?($a(a),a.flags&=-257,a=Vh(n,a,s)):a.memoizedState!==null?(tr(),a.child=n.child,a.flags|=128,a=null):(tr(),h=c.fallback,w=a.mode,c=Hh({mode:"visible",children:c.children},w),h=as(h,w,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,Zr(a,n.child,null,s),c=a.child,c.memoizedState=Ih(s),c.childLanes=Bh(n,T,s),a.memoizedState=zh,a=h);else if($a(a),w.data==="$!"){if(T=w.nextSibling&&w.nextSibling.dataset,T)var j=T.dgst;T=j,c=Error(i(419)),c.stack="",c.digest=T,vl({value:c,source:null,stack:null}),a=Vh(n,a,s)}else if(bn||wl(n,a,s,!1),T=(s&n.childLanes)!==0,bn||T){if(T=Ge,T!==null){if(c=s&-s,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|s))!==0?0:c,c!==0&&c!==F.retryLane)throw F.retryLane=c,Ja(n,c),jn(T,n,c),Kg}w.data==="$?"||md(),a=Vh(n,a,s)}else w.data==="$?"?(a.flags|=128,a.child=n.child,a=nE.bind(null,n),w._reactRetry=a,a=null):(n=F.treeContext,Un=Yi(w.nextSibling),qn=a,Ue=!0,Xi=null,ia=!1,n!==null&&(wi[Di++]=xa,wi[Di++]=Sa,wi[Di++]=Yr,xa=n.id,Sa=n.overflow,Yr=a),a=Fh(a,c.children),a.flags|=4096);return a}return h?(tr(),h=c.fallback,w=a.mode,F=n.child,j=F.sibling,c=ur(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&31457280,j!==null?h=ur(j,h):(h=as(h,w,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,w=n.child.memoizedState,w===null?w=Ih(s):(F=w.cachePool,F!==null?(j=xn._currentValue,F=F.parent!==j?{parent:j,pool:j}:F):F=sg(),w={baseLanes:w.baseLanes|s,cachePool:F}),h.memoizedState=w,h.childLanes=Bh(n,T,s),a.memoizedState=zh,c):($a(a),s=n.child,n=s.sibling,s=ur(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(T=a.deletions,T===null?(a.deletions=[n],a.flags|=16):T.push(n)),a.child=s,a.memoizedState=null,s)}function Fh(n,a){return a=Hh({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Hh(n,a){return L0(n,a,0,null)}function Vh(n,a,s){return Zr(a,n.child,null,s),n=Fh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function s0(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Wh(n.return,a,s)}function Gh(n,a,s,c,h){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=s,_.tailMode=h)}function o0(n,a,s){var c=a.pendingProps,h=c.revealOrder,_=c.tail;if(On(n,a,c.children,s),c=yn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&s0(n,s,a);else if(n.tag===19)s0(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(zt(yn,c),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&jc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Gh(a,!1,h,s,_);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&jc(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Gh(a,!0,s,null,_);break;case"together":Gh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ta(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),fr|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(wl(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,s=ur(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=ur(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function kh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&su(n)))}function GM(n,a,s){switch(a.tag){case 3:mn(a,a.stateNode.containerInfo),ir(a,xn,n.memoizedState.cache),gl();break;case 27:case 5:ue(a);break;case 4:mn(a,a.stateNode.containerInfo);break;case 10:ir(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?($a(a),a.flags|=128,null):(s&a.child.childLanes)!==0?r0(n,a,s):($a(a),n=Ta(n,a,s),n!==null?n.sibling:null);$a(a);break;case 19:var h=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(wl(n,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return o0(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),zt(yn,yn.current),c)break;return null;case 22:case 23:return a.lanes=0,t0(n,a,s);case 24:ir(a,xn,n.memoizedState.cache)}return Ta(n,a,s)}function l0(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)bn=!0;else{if(!kh(n,s)&&(a.flags&128)===0)return bn=!1,GM(n,a,s);bn=(n.flags&131072)!==0}else bn=!1,Ue&&(a.flags&1048576)!==0&&Y_(a,kc,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")id(c)?(n=ts(c,n),a.tag=1,a=i0(null,a,c,n,s)):(a.tag=0,a=Ph(null,a,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===E){a.tag=11,a=Qg(null,a,c,n,s);break t}else if(h===y){a.tag=14,a=Jg(null,a,c,n,s);break t}}throw a=B(c)||c,Error(i(306,a,""))}}return a;case 0:return Ph(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=ts(c,a.pendingProps),i0(n,a,c,h,s);case 3:t:{if(mn(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var _=a.pendingProps;h=a.memoizedState,c=h.element,jh(n,a),Ul(a,_,null,s);var T=a.memoizedState;if(_=T.cache,ir(a,xn,_),_!==h.cache&&Yh(a,[xn],s,!0),Ll(),_=T.element,h.isDehydrated)if(h={element:_,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=h,a.memoizedState=h,a.flags&256){a=a0(n,a,_,s);break t}else if(_!==c){c=Ci(Error(i(424)),a),vl(c),a=a0(n,a,_,s);break t}else for(Un=Yi(a.stateNode.containerInfo.firstChild),qn=a,Ue=!0,Xi=null,ia=!0,s=eg(a,null,_,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(gl(),_===c){a=Ta(n,a,s);break t}On(n,a,_,s)}a=a.child}return a;case 26:return Cl(n,a),n===null?(s=fv(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ue||(s=a.type,n=a.pendingProps,c=Mu(se.current).createElement(s),c[_n]=a,c[gn]=n,Nn(c,s,n),tt(c),a.stateNode=c):a.memoizedState=fv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return ue(a),n===null&&Ue&&(c=a.stateNode=lv(a.type,a.pendingProps,se.current),qn=a,ia=!0,Un=Yi(c.firstChild)),c=a.pendingProps.children,n!==null||Ue?On(n,a,c,s):a.child=Zr(a,null,c,s),Cl(n,a),a.child;case 5:return n===null&&Ue&&((h=c=Un)&&(c=vE(c,a.type,a.pendingProps,ia),c!==null?(a.stateNode=c,qn=a,Un=Yi(c.firstChild),ia=!1,h=!0):h=!1),h||jr(a)),ue(a),h=a.type,_=a.pendingProps,T=n!==null?n.memoizedProps:null,c=_.children,wd(h,_)?c=null:T!==null&&wd(h,T)&&(a.flags|=32),a.memoizedState!==null&&(h=gh(n,a,PM,null,null,s),ql._currentValue=h),Cl(n,a),On(n,a,c,s),a.child;case 6:return n===null&&Ue&&((n=s=Un)&&(s=yE(s,a.pendingProps,ia),s!==null?(a.stateNode=s,qn=a,Un=null,n=!0):n=!1),n||jr(a)),null;case 13:return r0(n,a,s);case 4:return mn(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Zr(a,null,c,s):On(n,a,c,s),a.child;case 11:return Qg(n,a,a.type,a.pendingProps,s);case 7:return On(n,a,a.pendingProps,s),a.child;case 8:return On(n,a,a.pendingProps.children,s),a.child;case 12:return On(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,ir(a,a.type,c.value),On(n,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,ns(a),h=Bn(h),c=c(h),a.flags|=1,On(n,a,c,s),a.child;case 14:return Jg(n,a,a.type,a.pendingProps,s);case 15:return $g(n,a,a.type,a.pendingProps,s);case 19:return o0(n,a,s);case 22:return t0(n,a,s);case 24:return ns(a),c=Bn(xn),n===null?(h=mh(),h===null&&(h=Ge,_=dh(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=s),h=_),a.memoizedState={parent:c,cache:h},qh(a),ir(a,xn,h)):((n.lanes&s)!==0&&(jh(n,a),Ul(a,null,null,s),Ll()),h=n.memoizedState,_=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),ir(a,xn,c)):(c=_.cache,ir(a,xn,c),c!==h.cache&&Yh(a,[xn],s,!0))),On(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var Xh=wt(null),es=null,ba=null;function ir(n,a,s){zt(Xh,a._currentValue),a._currentValue=s}function Aa(n){n._currentValue=Xh.current,te(Xh)}function Wh(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function Yh(n,a,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var w=_;_=h;for(var F=0;F<a.length;F++)if(w.context===a[F]){_.lanes|=s,w=_.alternate,w!==null&&(w.lanes|=s),Wh(_.return,s,n),c||(T=null);break t}_=w.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(i(341));T.lanes|=s,_=T.alternate,_!==null&&(_.lanes|=s),Wh(T,s,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function wl(n,a,s,c){n=null;for(var h=a,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var w=h.type;di(h.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(h===G.current){if(T=h.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(ql):n=[ql])}h=h.return}n!==null&&Yh(a,n,s,c),a.flags|=262144}function su(n){for(n=n.firstContext;n!==null;){if(!di(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ns(n){es=n,ba=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return c0(es,n)}function ou(n,a){return es===null&&ns(n),c0(n,a)}function c0(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},ba===null){if(n===null)throw Error(i(308));ba=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else ba=ba.next=a;return s}var ar=!1;function qh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jh(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function sr(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=Vc(n),X_(n,null,s),a}return Hc(n,c,a,s),Vc(n)}function Dl(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,na(n,s)}}function Zh(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,_=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,s=s.next}while(s!==null);_===null?h=_=a:_=_.next=a}else h=_=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var Kh=!1;function Ll(){if(Kh){var n=Zs;if(n!==null)throw n}}function Ul(n,a,s,c){Kh=!1;var h=n.updateQueue;ar=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var F=w,j=F.next;F.next=null,T===null?_=j:T.next=j,T=F;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==T&&(w===null?mt.firstBaseUpdate=j:w.next=j,mt.lastBaseUpdate=F))}if(_!==null){var xt=h.baseState;T=0,mt=j=F=null,w=_;do{var ot=w.lane&-536870913,ht=ot!==w.lane;if(ht?(Ce&ot)===ot:(c&ot)===ot){ot!==0&&ot===js&&(Kh=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var jt=n,le=w;ot=a;var tn=s;switch(le.tag){case 1:if(jt=le.payload,typeof jt=="function"){xt=jt.call(tn,xt,ot);break t}xt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=le.payload,ot=typeof jt=="function"?jt.call(tn,xt,ot):jt,ot==null)break t;xt=A({},xt,ot);break t;case 2:ar=!0}}ot=w.callback,ot!==null&&(n.flags|=64,ht&&(n.flags|=8192),ht=h.callbacks,ht===null?h.callbacks=[ot]:ht.push(ot))}else ht={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(j=mt=ht,F=xt):mt=mt.next=ht,T|=ot;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,h.lastBaseUpdate=ht,h.shared.pending=null}}while(!0);mt===null&&(F=xt),h.baseState=F,h.firstBaseUpdate=j,h.lastBaseUpdate=mt,_===null&&(h.shared.lanes=0),fr|=T,n.lanes=T,n.memoizedState=xt}}function u0(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function f0(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)u0(s[n],a)}function Ol(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var _=s.create,T=s.inst;c=_(),T.destroy=c}s=s.next}while(s!==h)}}catch(w){He(a,a.return,w)}}function or(n,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var _=h.next;c=_;do{if((c.tag&n)===n){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,h=a;var F=s;try{w()}catch(j){He(h,F,j)}}}c=c.next}while(c!==_)}}catch(j){He(a,a.return,j)}}function h0(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{f0(a,s)}catch(c){He(n,n.return,c)}}}function d0(n,a,s){s.props=ts(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){He(n,a,c)}}function is(n,a){try{var s=n.ref;if(s!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var h=c;break;default:h=c}typeof s=="function"?n.refCleanup=s(h):s.current=h}}catch(_){He(n,a,_)}}function pi(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){He(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){He(n,a,h)}else s.current=null}function p0(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){He(n,n.return,h)}}function m0(n,a,s){try{var c=n.stateNode;dE(c,n.type,s,a),c[gn]=a}catch(h){He(n,n.return,h)}}function _0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Qh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||_0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jh(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.nodeType===8?s.parentNode.insertBefore(n,a):s.insertBefore(n,a):(s.nodeType===8?(a=s.parentNode,a.insertBefore(n,s)):(a=s,a.appendChild(n)),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Su));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(Jh(n,a,s),n=n.sibling;n!==null;)Jh(n,a,s),n=n.sibling}function lu(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(lu(n,a,s),n=n.sibling;n!==null;)lu(n,a,s),n=n.sibling}var Ra=!1,Je=!1,$h=!1,g0=typeof WeakSet=="function"?WeakSet:Set,An=null,v0=!1;function kM(n,a){if(n=n.containerInfo,Rd=Cu,n=P_(n),eh(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,w=-1,F=-1,j=0,mt=0,xt=n,ot=null;e:for(;;){for(var ht;xt!==s||h!==0&&xt.nodeType!==3||(w=T+h),xt!==_||c!==0&&xt.nodeType!==3||(F=T+c),xt.nodeType===3&&(T+=xt.nodeValue.length),(ht=xt.firstChild)!==null;)ot=xt,xt=ht;for(;;){if(xt===n)break e;if(ot===s&&++j===h&&(w=T),ot===_&&++mt===c&&(F=T),(ht=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ht}s=w===-1||F===-1?null:{start:w,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Cd={focusedElem:n,selectionRange:s},Cu=!1,An=a;An!==null;)if(a=An,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,An=n;else for(;An!==null;){switch(a=An,_=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,s=a,h=_.memoizedProps,_=_.memoizedState,c=s.stateNode;try{var jt=ts(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(jt,_),c.__reactInternalSnapshotBeforeUpdate=n}catch(le){He(s,s.return,le)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)Ud(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ud(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,An=n;break}An=a.return}return jt=v0,v0=!1,jt}function y0(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:wa(n,s),c&4&&Ol(5,s);break;case 1:if(wa(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){He(s,s.return,w)}else{var h=ts(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){He(s,s.return,w)}}c&64&&h0(s),c&512&&is(s,s.return);break;case 3:if(wa(n,s),c&64&&(c=s.updateQueue,c!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{f0(c,n)}catch(w){He(s,s.return,w)}}break;case 26:wa(n,s),c&512&&is(s,s.return);break;case 27:case 5:wa(n,s),a===null&&c&4&&p0(s),c&512&&is(s,s.return);break;case 12:wa(n,s);break;case 13:wa(n,s),c&4&&M0(n,s);break;case 22:if(h=s.memoizedState!==null||Ra,!h){a=a!==null&&a.memoizedState!==null||Je;var _=Ra,T=Je;Ra=h,(Je=a)&&!T?lr(n,s,(s.subtreeFlags&8772)!==0):wa(n,s),Ra=_,Je=T}c&512&&(s.memoizedProps.mode==="manual"?is(s,s.return):pi(s,s.return));break;default:wa(n,s)}}function x0(n){var a=n.alternate;a!==null&&(n.alternate=null,x0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&sl(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var fn=null,mi=!1;function Ca(n,a,s){for(s=s.child;s!==null;)S0(n,a,s),s=s.sibling}function S0(n,a,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Jt,s)}catch{}switch(s.tag){case 26:Je||pi(s,a),Ca(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Je||pi(s,a);var c=fn,h=mi;for(fn=s.stateNode,Ca(n,a,s),s=s.stateNode,a=s.attributes;a.length;)s.removeAttributeNode(a[0]);sl(s),fn=c,mi=h;break;case 5:Je||pi(s,a);case 6:h=fn;var _=mi;if(fn=null,Ca(n,a,s),fn=h,mi=_,fn!==null)if(mi)try{n=fn,c=s.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(T){He(s,a,T)}else try{fn.removeChild(s.stateNode)}catch(T){He(s,a,T)}break;case 18:fn!==null&&(mi?(a=fn,s=s.stateNode,a.nodeType===8?Ld(a.parentNode,s):a.nodeType===1&&Ld(a,s),Ql(a)):Ld(fn,s.stateNode));break;case 4:c=fn,h=mi,fn=s.stateNode.containerInfo,mi=!0,Ca(n,a,s),fn=c,mi=h;break;case 0:case 11:case 14:case 15:Je||or(2,s,a),Je||or(4,s,a),Ca(n,a,s);break;case 1:Je||(pi(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&d0(s,a,c)),Ca(n,a,s);break;case 21:Ca(n,a,s);break;case 22:Je||pi(s,a),Je=(c=Je)||s.memoizedState!==null,Ca(n,a,s),Je=c;break;default:Ca(n,a,s)}}function M0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ql(n)}catch(s){He(a,a.return,s)}}function XM(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new g0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new g0),a;default:throw Error(i(435,n.tag))}}function td(n,a){var s=XM(n);a.forEach(function(c){var h=iE.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function Ui(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],_=n,T=a,w=T;t:for(;w!==null;){switch(w.tag){case 27:case 5:fn=w.stateNode,mi=!1;break t;case 3:fn=w.stateNode.containerInfo,mi=!0;break t;case 4:fn=w.stateNode.containerInfo,mi=!0;break t}w=w.return}if(fn===null)throw Error(i(160));S0(_,T,h),fn=null,mi=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)E0(a,n),a=a.sibling}var Wi=null;function E0(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ui(a,n),Oi(n),c&4&&(or(3,n,n.return),Ol(3,n),or(5,n,n.return));break;case 1:Ui(a,n),Oi(n),c&512&&(Je||s===null||pi(s,s.return)),c&64&&Ra&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Wi;if(Ui(a,n),Oi(n),c&512&&(Je||s===null||pi(s,s.return)),c&4){var _=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){t:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":_=h.getElementsByTagName("title")[0],(!_||_[Gr]||_[_n]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(c),h.head.insertBefore(_,h.querySelector("head > title"))),Nn(_,c,s),_[_n]=n,tt(_),c=_;break t;case"link":var T=pv("link","href",h).get(c+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(_=T[w],_.getAttribute("href")===(s.href==null?null:s.href)&&_.getAttribute("rel")===(s.rel==null?null:s.rel)&&_.getAttribute("title")===(s.title==null?null:s.title)&&_.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}_=h.createElement(c),Nn(_,c,s),h.head.appendChild(_);break;case"meta":if(T=pv("meta","content",h).get(c+(s.content||""))){for(w=0;w<T.length;w++)if(_=T[w],_.getAttribute("content")===(s.content==null?null:""+s.content)&&_.getAttribute("name")===(s.name==null?null:s.name)&&_.getAttribute("property")===(s.property==null?null:s.property)&&_.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&_.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}_=h.createElement(c),Nn(_,c,s),h.head.appendChild(_);break;default:throw Error(i(468,c))}_[_n]=n,tt(_),c=_}n.stateNode=c}else mv(h,n.type,n.stateNode);else n.stateNode=dv(h,c,n.memoizedProps);else _!==c?(_===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):_.count--,c===null?mv(h,n.type,n.stateNode):dv(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&m0(n,n.memoizedProps,s.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){h=n.stateNode,_=n.memoizedProps;try{for(var F=h.firstChild;F;){var j=F.nextSibling,mt=F.nodeName;F[Gr]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&F.rel.toLowerCase()==="stylesheet"||h.removeChild(F),F=j}for(var xt=n.type,ot=h.attributes;ot.length;)h.removeAttributeNode(ot[0]);Nn(h,xt,_),h[_n]=n,h[gn]=_}catch(jt){He(n,n.return,jt)}}case 5:if(Ui(a,n),Oi(n),c&512&&(Je||s===null||pi(s,s.return)),n.flags&32){h=n.stateNode;try{ti(h,"")}catch(jt){He(n,n.return,jt)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,m0(n,h,s!==null?s.memoizedProps:h)),c&1024&&($h=!0);break;case 6:if(Ui(a,n),Oi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(jt){He(n,n.return,jt)}}break;case 3:if(bu=null,h=Wi,Wi=Eu(a.containerInfo),Ui(a,n),Wi=h,Oi(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ql(a.containerInfo)}catch(jt){He(n,n.return,jt)}$h&&($h=!1,T0(n));break;case 4:c=Wi,Wi=Eu(n.stateNode.containerInfo),Ui(a,n),Oi(n),Wi=c;break;case 12:Ui(a,n),Oi(n);break;case 13:Ui(a,n),Oi(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(cd=pt()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,td(n,c)));break;case 22:if(c&512&&(Je||s===null||pi(s,s.return)),F=n.memoizedState!==null,j=s!==null&&s.memoizedState!==null,mt=Ra,xt=Je,Ra=mt||F,Je=xt||j,Ui(a,n),Je=xt,Ra=mt,Oi(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=F?a._visibility&-2:a._visibility|1,F&&(a=Ra||Je,s===null||j||a||$s(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(s=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(s===null){j=s=a;try{if(h=j.stateNode,F)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=j.stateNode,w=j.memoizedProps.style;var ht=w!=null&&w.hasOwnProperty("display")?w.display:null;T.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(jt){He(j,j.return,jt)}}}else if(a.tag===6){if(s===null){j=a;try{j.stateNode.nodeValue=F?"":j.memoizedProps}catch(jt){He(j,j.return,jt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,td(n,s))));break;case 19:Ui(a,n),Oi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,td(n,c)));break;case 21:break;default:Ui(a,n),Oi(n)}}function Oi(n){var a=n.flags;if(a&2){try{if(n.tag!==27){t:{for(var s=n.return;s!==null;){if(_0(s)){var c=s;break t}s=s.return}throw Error(i(160))}switch(c.tag){case 27:var h=c.stateNode,_=Qh(n);lu(n,_,h);break;case 5:var T=c.stateNode;c.flags&32&&(ti(T,""),c.flags&=-33);var w=Qh(n);lu(n,w,T);break;case 3:case 4:var F=c.stateNode.containerInfo,j=Qh(n);Jh(n,j,F);break;default:throw Error(i(161))}}}catch(mt){He(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function T0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;T0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function wa(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)y0(n,a.alternate,a),a=a.sibling}function $s(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:or(4,a,a.return),$s(a);break;case 1:pi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&d0(a,a.return,s),$s(a);break;case 26:case 27:case 5:pi(a,a.return),$s(a);break;case 22:pi(a,a.return),a.memoizedState===null&&$s(a);break;default:$s(a)}n=n.sibling}}function lr(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=n,_=a,T=_.flags;switch(_.tag){case 0:case 11:case 15:lr(h,_,s),Ol(4,_);break;case 1:if(lr(h,_,s),c=_,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){He(c,c.return,j)}if(c=_,h=c.updateQueue,h!==null){var w=c.stateNode;try{var F=h.shared.hiddenCallbacks;if(F!==null)for(h.shared.hiddenCallbacks=null,h=0;h<F.length;h++)u0(F[h],w)}catch(j){He(c,c.return,j)}}s&&T&64&&h0(_),is(_,_.return);break;case 26:case 27:case 5:lr(h,_,s),s&&c===null&&T&4&&p0(_),is(_,_.return);break;case 12:lr(h,_,s);break;case 13:lr(h,_,s),s&&T&4&&M0(h,_);break;case 22:_.memoizedState===null&&lr(h,_,s),is(_,_.return);break;default:lr(h,_,s)}a=a.sibling}}function ed(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&El(s))}function nd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&El(n))}function cr(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)b0(n,a,s,c),a=a.sibling}function b0(n,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:cr(n,a,s,c),h&2048&&Ol(9,a);break;case 3:cr(n,a,s,c),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&El(n)));break;case 12:if(h&2048){cr(n,a,s,c),n=a.stateNode;try{var _=a.memoizedProps,T=_.id,w=_.onPostCommit;typeof w=="function"&&w(T,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(F){He(a,a.return,F)}}else cr(n,a,s,c);break;case 23:break;case 22:_=a.stateNode,a.memoizedState!==null?_._visibility&4?cr(n,a,s,c):Nl(n,a):_._visibility&4?cr(n,a,s,c):(_._visibility|=4,to(n,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&ed(a.alternate,a);break;case 24:cr(n,a,s,c),h&2048&&nd(a.alternate,a);break;default:cr(n,a,s,c)}}function to(n,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var _=n,T=a,w=s,F=c,j=T.flags;switch(T.tag){case 0:case 11:case 15:to(_,T,w,F,h),Ol(8,T);break;case 23:break;case 22:var mt=T.stateNode;T.memoizedState!==null?mt._visibility&4?to(_,T,w,F,h):Nl(_,T):(mt._visibility|=4,to(_,T,w,F,h)),h&&j&2048&&ed(T.alternate,T);break;case 24:to(_,T,w,F,h),h&&j&2048&&nd(T.alternate,T);break;default:to(_,T,w,F,h)}a=a.sibling}}function Nl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,h=c.flags;switch(c.tag){case 22:Nl(s,c),h&2048&&ed(c.alternate,c);break;case 24:Nl(s,c),h&2048&&nd(c.alternate,c);break;default:Nl(s,c)}a=a.sibling}}var Pl=8192;function eo(n){if(n.subtreeFlags&Pl)for(n=n.child;n!==null;)A0(n),n=n.sibling}function A0(n){switch(n.tag){case 26:eo(n),n.flags&Pl&&n.memoizedState!==null&&UE(Wi,n.memoizedState,n.memoizedProps);break;case 5:eo(n);break;case 3:case 4:var a=Wi;Wi=Eu(n.stateNode.containerInfo),eo(n),Wi=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Pl,Pl=16777216,eo(n),Pl=a):eo(n));break;default:eo(n)}}function R0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function zl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,w0(c,n)}R0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)C0(n),n=n.sibling}function C0(n){switch(n.tag){case 0:case 11:case 15:zl(n),n.flags&2048&&or(9,n,n.return);break;case 3:zl(n);break;case 12:zl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,cu(n)):zl(n);break;default:zl(n)}}function cu(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,w0(c,n)}R0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:or(8,a,a.return),cu(a);break;case 22:s=a.stateNode,s._visibility&4&&(s._visibility&=-5,cu(a));break;default:cu(a)}n=n.sibling}}function w0(n,a){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:or(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:El(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,An=c;else t:for(s=n;An!==null;){c=An;var h=c.sibling,_=c.return;if(x0(c),c===s){An=null;break t}if(h!==null){h.return=_,An=h;break t}An=_}}}function WM(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(n,a,s,c){return new WM(n,a,s,c)}function id(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ur(n,a){var s=n.alternate;return s===null?(s=Ni(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function D0(n,a){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function uu(n,a,s,c,h,_){var T=0;if(c=n,typeof n=="function")id(n)&&(T=1);else if(typeof n=="string")T=DE(n,s,Ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case d:return as(s.children,h,_,a);case p:T=8,h|=24;break;case m:return n=Ni(12,s,a,h|2),n.elementType=m,n.lanes=_,n;case M:return n=Ni(13,s,a,h),n.elementType=M,n.lanes=_,n;case S:return n=Ni(19,s,a,h),n.elementType=S,n.lanes=_,n;case U:return L0(s,h,_,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case g:case x:T=10;break t;case v:T=9;break t;case E:T=11;break t;case y:T=14;break t;case L:T=16,c=null;break t}T=29,s=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=Ni(T,s,a,h),a.elementType=n,a.type=c,a.lanes=_,a}function as(n,a,s,c){return n=Ni(7,n,c,a),n.lanes=s,n}function L0(n,a,s,c){n=Ni(22,n,c,a),n.elementType=U,n.lanes=s;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var _=h._current;if(_===null)throw Error(i(456));if((h._pendingVisibility&2)===0){var T=Ja(_,2);T!==null&&(h._pendingVisibility|=2,jn(T,_,2))}},attach:function(){var _=h._current;if(_===null)throw Error(i(456));if((h._pendingVisibility&2)!==0){var T=Ja(_,2);T!==null&&(h._pendingVisibility&=-3,jn(T,_,2))}}};return n.stateNode=h,n}function ad(n,a,s){return n=Ni(6,n,null,a),n.lanes=s,n}function rd(n,a,s){return a=Ni(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Da(n){n.flags|=4}function U0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!_v(a)){if(a=Li.current,a!==null&&((Ce&4194176)===Ce?aa!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==aa))throw xl=uh,Z_;n.flags|=8192}}function fu(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?ge():536870912,n.lanes|=a,io|=a)}function Il(n,a){if(!Ue)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&31457280,c|=h.flags&31457280,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function YM(n,a,s){var c=a.pendingProps;switch(lh(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Aa(xn),ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(_l(a)?Da(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Xi!==null&&(dd(Xi),Xi=null))),qe(a),null;case 26:return s=a.memoizedState,n===null?(Da(a),s!==null?(qe(a),U0(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Da(a),qe(a),U0(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&Da(a),qe(a),a.flags&=-16777217),null;case 27:Yt(a),s=se.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return qe(a),null}n=Ae.current,_l(a)?q_(a):(n=lv(h,c,s),a.stateNode=n,Da(a))}return qe(a),null;case 5:if(Yt(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return qe(a),null}if(n=Ae.current,_l(a))q_(a);else{switch(h=Mu(se.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[_n]=a,n[gn]=c;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;t:switch(Nn(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Da(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=se.current,_l(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,h=qn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[_n]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||nv(n.nodeValue,s)),n||jr(a)}else n=Mu(n).createTextNode(c),n[_n]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=_l(a),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[_n]=a}else gl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),h=!1}else Xi!==null&&(dd(Xi),Xi=null),h=!0;if(!h)return a.flags&256?(Ma(a),a):(Ma(a),null)}if(Ma(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var _=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(_=c.memoizedState.cachePool.pool),_!==h&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),fu(a,a.updateQueue),qe(a),null;case 4:return ce(),n===null&&Td(a.stateNode.containerInfo),qe(a),null;case 10:return Aa(a.type),qe(a),null;case 19:if(te(yn),h=a.memoizedState,h===null)return qe(a),null;if(c=(a.flags&128)!==0,_=h.rendering,_===null)if(c)Il(h,!1);else{if($e!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(_=jc(n),_!==null){for(a.flags|=128,Il(h,!1),n=_.updateQueue,a.updateQueue=n,fu(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)D0(s,n),s=s.sibling;return zt(yn,yn.current&1|2),a.child}n=n.sibling}h.tail!==null&&pt()>hu&&(a.flags|=128,c=!0,Il(h,!1),a.lanes=4194304)}else{if(!c)if(n=jc(_),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,fu(a,n),Il(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!Ue)return qe(a),null}else 2*pt()-h.renderingStartTime>hu&&s!==536870912&&(a.flags|=128,c=!0,Il(h,!1),a.lanes=4194304);h.isBackwards?(_.sibling=a.child,a.child=_):(n=h.last,n!==null?n.sibling=_:a.child=_,h.last=_)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=pt(),a.sibling=null,n=yn.current,zt(yn,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Ma(a),hh(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&fu(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&te(Kr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Aa(xn),qe(a),null;case 25:return null}throw Error(i(156,a.tag))}function qM(n,a){switch(lh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Aa(xn),ce(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Yt(a),null;case 13:if(Ma(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));gl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return te(yn),null;case 4:return ce(),null;case 10:return Aa(a.type),null;case 22:case 23:return Ma(a),hh(),n!==null&&te(Kr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Aa(xn),null;case 25:return null;default:return null}}function O0(n,a){switch(lh(a),a.tag){case 3:Aa(xn),ce();break;case 26:case 27:case 5:Yt(a);break;case 4:ce();break;case 13:Ma(a);break;case 19:te(yn);break;case 10:Aa(a.type);break;case 22:case 23:Ma(a),hh(),n!==null&&te(Kr);break;case 24:Aa(xn)}}var jM={getCacheForType:function(n){var a=Bn(xn),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},ZM=typeof WeakMap=="function"?WeakMap:Map,je=0,Ge=null,ye=null,Ce=0,ke=0,_i=null,La=!1,no=!1,sd=!1,Ua=0,$e=0,fr=0,rs=0,od=0,Pi=0,io=0,Bl=null,sa=null,ld=!1,cd=0,hu=1/0,du=null,hr=null,pu=!1,ss=null,Fl=0,ud=0,fd=null,Hl=0,hd=null;function gi(){if((je&2)!==0&&Ce!==0)return Ce&-Ce;if(b.T!==null){var n=js;return n!==0?n:xd()}return rl()}function N0(){Pi===0&&(Pi=(Ce&536870912)===0||Ue?Xe():536870912);var n=Li.current;return n!==null&&(n.flags|=32),Pi}function jn(n,a,s){(n===Ge&&ke===2||n.cancelPendingCommit!==null)&&(ao(n,0),Oa(n,Ce,Pi,!1)),ln(n,s),((je&2)===0||n!==Ge)&&(n===Ge&&((je&2)===0&&(rs|=s),$e===4&&Oa(n,Ce,Pi,!1)),oa(n))}function P0(n,a,s){if((je&6)!==0)throw Error(i(327));var c=!s&&(a&60)===0&&(a&n.expiredLanes)===0||Zt(n,a),h=c?JM(n,a):_d(n,a,!0),_=c;do{if(h===0){no&&!c&&Oa(n,a,0,!1);break}else if(h===6)Oa(n,a,0,!La);else{if(s=n.current.alternate,_&&!KM(s)){h=_d(n,a,!1),_=!1;continue}if(h===2){if(_=a,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;t:{var w=n;h=Bl;var F=w.current.memoizedState.isDehydrated;if(F&&(ao(w,T).flags|=256),T=_d(w,T,!1),T!==2){if(sd&&!F){w.errorRecoveryDisabledLanes|=_,rs|=_,h=4;break t}_=sa,sa=h,_!==null&&dd(_)}h=T}if(_=!1,h!==2)continue}}if(h===1){ao(n,0),Oa(n,a,0,!0);break}t:{switch(c=n,h){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Oa(c,a,Pi,!La);break t}break;case 2:sa=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=s,c.finishedLanes=a,(a&62914560)===a&&(_=cd+300-pt(),10<_)){if(Oa(c,a,Pi,!La),Ot(c,0)!==0)break t;c.timeoutHandle=rv(z0.bind(null,c,s,sa,du,ld,a,Pi,rs,io,La,2,-0,0),_);break t}z0(c,s,sa,du,ld,a,Pi,rs,io,La,0,-0,0)}}break}while(!0);oa(n)}function dd(n){sa===null?sa=n:sa.push.apply(sa,n)}function z0(n,a,s,c,h,_,T,w,F,j,mt,xt,ot){var ht=a.subtreeFlags;if((ht&8192||(ht&16785408)===16785408)&&(Yl={stylesheets:null,count:0,unsuspend:LE},A0(a),a=OE(),a!==null)){n.cancelPendingCommit=a(k0.bind(null,n,s,c,h,T,w,F,1,xt,ot)),Oa(n,_,T,!j);return}k0(n,s,c,h,T,w,F,mt,xt,ot)}function KM(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],_=h.getSnapshot;h=h.value;try{if(!di(_(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Oa(n,a,s,c){a&=~od,a&=~rs,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var h=a;0<h;){var _=31-ft(h),T=1<<_;c[_]=-1,h&=~T}s!==0&&al(n,s,a)}function mu(){return(je&6)===0?(Vl(0),!1):!0}function pd(){if(ye!==null){if(ke===0)var n=ye.return;else n=ye,ba=es=null,xh(n),Ys=null,Sl=0,n=ye;for(;n!==null;)O0(n.alternate,n),n=n.return;ye=null}}function ao(n,a){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,mE(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),pd(),Ge=n,ye=s=ur(n.current,null),Ce=a,ke=0,_i=null,La=!1,no=Zt(n,a),sd=!1,io=Pi=od=rs=fr=$e=0,sa=Bl=null,ld=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var h=31-ft(c),_=1<<h;a|=n[h],c&=~_}return Ua=a,Fc(),s}function I0(n,a){me=null,b.H=ra,a===yl?(a=J_(),ke=3):a===Z_?(a=J_(),ke=4):ke=a===Kg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,_i=a,ye===null&&($e=1,ru(n,Ci(a,n.current)))}function B0(){var n=b.H;return b.H=ra,n===null?ra:n}function F0(){var n=b.A;return b.A=jM,n}function md(){$e=4,La||(Ce&4194176)!==Ce&&Li.current!==null||(no=!0),(fr&134217727)===0&&(rs&134217727)===0||Ge===null||Oa(Ge,Ce,Pi,!1)}function _d(n,a,s){var c=je;je|=2;var h=B0(),_=F0();(Ge!==n||Ce!==a)&&(du=null,ao(n,a)),a=!1;var T=$e;t:do try{if(ke!==0&&ye!==null){var w=ye,F=_i;switch(ke){case 8:pd(),T=6;break t;case 3:case 2:case 6:Li.current===null&&(a=!0);var j=ke;if(ke=0,_i=null,ro(n,w,F,j),s&&no){T=0;break t}break;default:j=ke,ke=0,_i=null,ro(n,w,F,j)}}QM(),T=$e;break}catch(mt){I0(n,mt)}while(!0);return a&&n.shellSuspendCounter++,ba=es=null,je=c,b.H=h,b.A=_,ye===null&&(Ge=null,Ce=0,Fc()),T}function QM(){for(;ye!==null;)H0(ye)}function JM(n,a){var s=je;je|=2;var c=B0(),h=F0();Ge!==n||Ce!==a?(du=null,hu=pt()+500,ao(n,a)):no=Zt(n,a);t:do try{if(ke!==0&&ye!==null){a=ye;var _=_i;e:switch(ke){case 1:ke=0,_i=null,ro(n,a,_,1);break;case 2:if(K_(_)){ke=0,_i=null,V0(a);break}a=function(){ke===2&&Ge===n&&(ke=7),oa(n)},_.then(a,a);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:K_(_)?(ke=0,_i=null,V0(a)):(ke=0,_i=null,ro(n,a,_,7));break;case 5:var T=null;switch(ye.tag){case 26:T=ye.memoizedState;case 5:case 27:var w=ye;if(!T||_v(T)){ke=0,_i=null;var F=w.sibling;if(F!==null)ye=F;else{var j=w.return;j!==null?(ye=j,_u(j)):ye=null}break e}}ke=0,_i=null,ro(n,a,_,5);break;case 6:ke=0,_i=null,ro(n,a,_,6);break;case 8:pd(),$e=6;break t;default:throw Error(i(462))}}$M();break}catch(mt){I0(n,mt)}while(!0);return ba=es=null,b.H=c,b.A=h,je=s,ye!==null?0:(Ge=null,Ce=0,Fc(),$e)}function $M(){for(;ye!==null&&!C();)H0(ye)}function H0(n){var a=l0(n.alternate,n,Ua);n.memoizedProps=n.pendingProps,a===null?_u(n):ye=a}function V0(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=n0(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=n0(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:xh(a);default:O0(s,a),a=ye=D0(a,Ua),a=l0(s,a,Ua)}n.memoizedProps=n.pendingProps,a===null?_u(n):ye=a}function ro(n,a,s,c){ba=es=null,xh(a),Ys=null,Sl=0;var h=a.return;try{if(VM(n,h,a,s,Ce)){$e=1,ru(n,Ci(s,n.current)),ye=null;return}}catch(_){if(h!==null)throw ye=h,_;$e=1,ru(n,Ci(s,n.current)),ye=null;return}a.flags&32768?(Ue||c===1?n=!0:no||(Ce&536870912)!==0?n=!1:(La=n=!0,(c===2||c===3||c===6)&&(c=Li.current,c!==null&&c.tag===13&&(c.flags|=16384))),G0(a,n)):_u(a)}function _u(n){var a=n;do{if((a.flags&32768)!==0){G0(a,La);return}n=a.return;var s=YM(a.alternate,a,Ua);if(s!==null){ye=s;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=n}while(a!==null);$e===0&&($e=5)}function G0(n,a){do{var s=qM(n.alternate,n);if(s!==null){s.flags&=32767,ye=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){ye=n;return}ye=n=s}while(n!==null);$e=6,ye=null}function k0(n,a,s,c,h,_,T,w,F,j){var mt=b.T,xt=q.p;try{q.p=2,b.T=null,tE(n,a,s,c,xt,h,_,T,w,F,j)}finally{b.T=mt,q.p=xt}}function tE(n,a,s,c,h,_,T,w){do so();while(ss!==null);if((je&6)!==0)throw Error(i(327));var F=n.finishedWork;if(c=n.finishedLanes,F===null)return null;if(n.finishedWork=null,n.finishedLanes=0,F===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var j=F.lanes|F.childLanes;if(j|=rh,wc(n,c,j,_,T,w),n===Ge&&(ye=Ge=null,Ce=0),(F.subtreeFlags&10256)===0&&(F.flags&10256)===0||pu||(pu=!0,ud=j,fd=s,aE(Dt,function(){return so(),null})),s=(F.flags&15990)!==0,(F.subtreeFlags&15990)!==0||s?(s=b.T,b.T=null,_=q.p,q.p=2,T=je,je|=4,kM(n,F),E0(F,n),TM(Cd,n.containerInfo),Cu=!!Rd,Cd=Rd=null,n.current=F,y0(n,F.alternate,F),at(),je=T,q.p=_,b.T=s):n.current=F,pu?(pu=!1,ss=n,Fl=c):X0(n,j),j=n.pendingLanes,j===0&&(hr=null),Ft(F.stateNode),oa(n),a!==null)for(h=n.onRecoverableError,F=0;F<a.length;F++)j=a[F],h(j.value,{componentStack:j.stack});return(Fl&3)!==0&&so(),j=n.pendingLanes,(c&4194218)!==0&&(j&42)!==0?n===hd?Hl++:(Hl=0,hd=n):Hl=0,Vl(0),null}function X0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,El(a)))}function so(){if(ss!==null){var n=ss,a=ud;ud=0;var s=Ns(Fl),c=b.T,h=q.p;try{if(q.p=32>s?32:s,b.T=null,ss===null)var _=!1;else{s=fd,fd=null;var T=ss,w=Fl;if(ss=null,Fl=0,(je&6)!==0)throw Error(i(331));var F=je;if(je|=4,C0(T.current),b0(T,T.current,w,s),je=F,Vl(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Jt,T)}catch{}_=!0}return _}finally{q.p=h,b.T=c,X0(n,a)}}return!1}function W0(n,a,s){a=Ci(s,a),a=Nh(n.stateNode,a,2),n=sr(n,a,2),n!==null&&(ln(n,2),oa(n))}function He(n,a,s){if(n.tag===3)W0(n,n,s);else for(;a!==null;){if(a.tag===3){W0(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){n=Ci(s,n),s=jg(2),c=sr(a,s,2),c!==null&&(Zg(s,c,a,n),ln(c,2),oa(c));break}}a=a.return}}function gd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new ZM;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(sd=!0,h.add(s),n=eE.bind(null,n,a,s),a.then(n,n))}function eE(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ge===n&&(Ce&s)===s&&($e===4||$e===3&&(Ce&62914560)===Ce&&300>pt()-cd?(je&2)===0&&ao(n,0):od|=s,io===Ce&&(io=0)),oa(n)}function Y0(n,a){a===0&&(a=ge()),n=Ja(n,a),n!==null&&(ln(n,a),oa(n))}function nE(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),Y0(n,s)}function iE(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Y0(n,s)}function aE(n,a){return qt(n,a)}var gu=null,oo=null,vd=!1,vu=!1,yd=!1,os=0;function oa(n){n!==oo&&n.next===null&&(oo===null?gu=oo=n:oo=oo.next=n),vu=!0,vd||(vd=!0,sE(rE))}function Vl(n,a){if(!yd&&vu){yd=!0;do for(var s=!1,c=gu;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var _=0;else{var T=c.suspendedLanes,w=c.pingedLanes;_=(1<<31-ft(42|n)+1)-1,_&=h&~(T&~w),_=_&201326677?_&201326677|1:_?_|2:0}_!==0&&(s=!0,Z0(c,_))}else _=Ce,_=Ot(c,c===Ge?_:0),(_&3)===0||Zt(c,_)||(s=!0,Z0(c,_));c=c.next}while(s);yd=!1}}function rE(){vu=vd=!1;var n=0;os!==0&&(pE()&&(n=os),os=0);for(var a=pt(),s=null,c=gu;c!==null;){var h=c.next,_=q0(c,a);_===0?(c.next=null,s===null?gu=h:s.next=h,h===null&&(oo=s)):(s=c,(n!==0||(_&3)!==0)&&(vu=!0)),c=h}Vl(n)}function q0(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-ft(_),w=1<<T,F=h[T];F===-1?((w&s)===0||(w&c)!==0)&&(h[T]=Re(w,a)):F<=a&&(n.expiredLanes|=w),_&=~w}if(a=Ge,s=Ce,s=Ot(n,n===a?s:0),c=n.callbackNode,s===0||n===a&&ke===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&I(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Zt(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&I(c),Ns(s)){case 2:case 8:s=Xt;break;case 32:s=Dt;break;case 268435456:s=_e;break;default:s=Dt}return c=j0.bind(null,n),s=qt(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&I(c),n.callbackPriority=2,n.callbackNode=null,2}function j0(n,a){var s=n.callbackNode;if(so()&&n.callbackNode!==s)return null;var c=Ce;return c=Ot(n,n===Ge?c:0),c===0?null:(P0(n,c,a),q0(n,pt()),n.callbackNode!=null&&n.callbackNode===s?j0.bind(null,n):null)}function Z0(n,a){if(so())return null;P0(n,a,!0)}function sE(n){_E(function(){(je&6)!==0?qt(gt,n):n()})}function xd(){return os===0&&(os=Xe()),os}function K0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Uc(""+n)}function Q0(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function oE(n,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var _=K0((h[gn]||null).action),T=c.submitter;T&&(a=(a=T[gn]||null)?K0(a.formAction):T.getAttribute("formAction"),a!==null&&(_=a,T=null));var w=new zc("action","action",null,c,h);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(os!==0){var F=T?Q0(h,T):new FormData(h);wh(s,{pending:!0,data:F,method:h.method,action:_},null,F)}}else typeof _=="function"&&(w.preventDefault(),F=T?Q0(h,T):new FormData(h),wh(s,{pending:!0,data:F,method:h.method,action:_},_,F))},currentTarget:h}]})}}for(var Sd=0;Sd<k_.length;Sd++){var Md=k_[Sd],lE=Md.toLowerCase(),cE=Md[0].toUpperCase()+Md.slice(1);ki(lE,"on"+cE)}ki(B_,"onAnimationEnd"),ki(F_,"onAnimationIteration"),ki(H_,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(AM,"onTransitionRun"),ki(RM,"onTransitionStart"),ki(CM,"onTransitionCancel"),ki(V_,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function J0(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;t:{var _=void 0;if(a)for(var T=c.length-1;0<=T;T--){var w=c[T],F=w.instance,j=w.currentTarget;if(w=w.listener,F!==_&&h.isPropagationStopped())break t;_=w,h.currentTarget=j;try{_(h)}catch(mt){au(mt)}h.currentTarget=null,_=F}else for(T=0;T<c.length;T++){if(w=c[T],F=w.instance,j=w.currentTarget,w=w.listener,F!==_&&h.isPropagationStopped())break t;_=w,h.currentTarget=j;try{_(h)}catch(mt){au(mt)}h.currentTarget=null,_=F}}}}function Te(n,a){var s=a[Ps];s===void 0&&(s=a[Ps]=new Set);var c=n+"__bubble";s.has(c)||($0(a,n,2,!1),s.add(c))}function Ed(n,a,s){var c=0;a&&(c|=4),$0(s,n,c,a)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Td(n){if(!n[yu]){n[yu]=!0,Q.forEach(function(s){s!=="selectionchange"&&(uE.has(s)||Ed(s,!1,n),Ed(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[yu]||(a[yu]=!0,Ed("selectionchange",!1,a))}}function $0(n,a,s,c){switch(Mv(a)){case 2:var h=zE;break;case 8:h=IE;break;default:h=Id}s=h.bind(null,a,s,n),h=void 0,!Yf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function bd(n,a,s,c,h){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var F=T.tag;if((F===3||F===4)&&(F=T.stateNode.containerInfo,F===h||F.nodeType===8&&F.parentNode===h))return;T=T.return}for(;w!==null;){if(T=ya(w),T===null)return;if(F=T.tag,F===5||F===6||F===26||F===27){c=_=T;continue t}w=w.parentNode}}c=c.return}p_(function(){var j=_,mt=Xf(s),xt=[];t:{var ot=G_.get(n);if(ot!==void 0){var ht=zc,jt=n;switch(n){case"keypress":if(Nc(s)===0)break t;case"keydown":case"keyup":ht=iM;break;case"focusin":jt="focus",ht=Kf;break;case"focusout":jt="blur",ht=Kf;break;case"beforeblur":case"afterblur":ht=Kf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=g_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=sM;break;case B_:case F_:case H_:ht=jS;break;case V_:ht=lM;break;case"scroll":case"scrollend":ht=kS;break;case"wheel":ht=uM;break;case"copy":case"cut":case"paste":ht=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=y_;break;case"toggle":case"beforetoggle":ht=hM}var le=(a&4)!==0,tn=!le&&(n==="scroll"||n==="scrollend"),J=le?ot!==null?ot+"Capture":null:ot;le=[];for(var Y=j,et;Y!==null;){var vt=Y;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||J===null||(vt=ol(Y,J),vt!=null&&le.push(kl(Y,vt,et))),tn)break;Y=Y.return}0<le.length&&(ot=new ht(ot,jt,null,s,mt),xt.push({event:ot,listeners:le}))}}if((a&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",ht=n==="mouseout"||n==="pointerout",ot&&s!==kf&&(jt=s.relatedTarget||s.fromElement)&&(ya(jt)||jt[va]))break t;if((ht||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ht?(jt=s.relatedTarget||s.toElement,ht=j,jt=jt?ya(jt):null,jt!==null&&(tn=W(jt),le=jt.tag,jt!==tn||le!==5&&le!==27&&le!==6)&&(jt=null)):(ht=null,jt=j),ht!==jt)){if(le=g_,vt="onMouseLeave",J="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(le=y_,vt="onPointerLeave",J="onPointerEnter",Y="pointer"),tn=ht==null?ot:Z(ht),et=jt==null?ot:Z(jt),ot=new le(vt,Y+"leave",ht,s,mt),ot.target=tn,ot.relatedTarget=et,vt=null,ya(mt)===j&&(le=new le(J,Y+"enter",jt,s,mt),le.target=et,le.relatedTarget=tn,vt=le),tn=vt,ht&&jt)e:{for(le=ht,J=jt,Y=0,et=le;et;et=lo(et))Y++;for(et=0,vt=J;vt;vt=lo(vt))et++;for(;0<Y-et;)le=lo(le),Y--;for(;0<et-Y;)J=lo(J),et--;for(;Y--;){if(le===J||J!==null&&le===J.alternate)break e;le=lo(le),J=lo(J)}le=null}else le=null;ht!==null&&tv(xt,ot,ht,le,!1),jt!==null&&tn!==null&&tv(xt,tn,jt,le,!0)}}t:{if(ot=j?Z(j):window,ht=ot.nodeName&&ot.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ot.type==="file")var kt=R_;else if(b_(ot))if(C_)kt=MM;else{kt=xM;var ve=yM}else ht=ot.nodeName,!ht||ht.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?j&&Gf(j.elementType)&&(kt=R_):kt=SM;if(kt&&(kt=kt(n,j))){A_(xt,kt,s,mt);break t}ve&&ve(n,ot,j),n==="focusout"&&j&&ot.type==="number"&&j.memoizedProps.value!=null&&In(ot,"number",ot.value)}switch(ve=j?Z(j):window,n){case"focusin":(b_(ve)||ve.contentEditable==="true")&&(Hs=ve,nh=j,ml=null);break;case"focusout":ml=nh=Hs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,z_(xt,s,mt);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":z_(xt,s,mt)}var Qt;if(Jf)t:{switch(n){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Fs?E_(n,s)&&(ie="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(x_&&s.locale!=="ko"&&(Fs||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Fs&&(Qt=m_()):(Qa=mt,qf="value"in Qa?Qa.value:Qa.textContent,Fs=!0)),ve=xu(j,ie),0<ve.length&&(ie=new v_(ie,n,null,s,mt),xt.push({event:ie,listeners:ve}),Qt?ie.data=Qt:(Qt=T_(s),Qt!==null&&(ie.data=Qt)))),(Qt=pM?mM(n,s):_M(n,s))&&(ie=xu(j,"onBeforeInput"),0<ie.length&&(ve=new v_("onBeforeInput","beforeinput",null,s,mt),xt.push({event:ve,listeners:ie}),ve.data=Qt)),oE(xt,n,j,s,mt)}J0(xt,a)})}function kl(n,a,s){return{instance:n,listener:a,currentTarget:s}}function xu(n,a){for(var s=a+"Capture",c=[];n!==null;){var h=n,_=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=ol(n,s),h!=null&&c.unshift(kl(n,h,_)),h=ol(n,a),h!=null&&c.push(kl(n,h,_))),n=n.return}return c}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function tv(n,a,s,c,h){for(var _=a._reactName,T=[];s!==null&&s!==c;){var w=s,F=w.alternate,j=w.stateNode;if(w=w.tag,F!==null&&F===c)break;w!==5&&w!==26&&w!==27||j===null||(F=j,h?(j=ol(s,_),j!=null&&T.unshift(kl(s,j,F))):h||(j=ol(s,_),j!=null&&T.push(kl(s,j,F)))),s=s.return}T.length!==0&&n.push({event:a,listeners:T})}var fE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function ev(n){return(typeof n=="string"?n:""+n).replace(fE,`
`).replace(hE,"")}function nv(n,a){return a=ev(a),ev(n)===a}function Su(){}function Be(n,a,s,c,h,_){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ti(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ti(n,""+c);break;case"className":We(n,"class",c);break;case"tabIndex":We(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":We(n,s,c);break;case"style":h_(n,c,_);break;case"data":if(a!=="object"){We(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Uc(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(s==="formAction"?(a!=="input"&&Be(n,a,"name",h.name,h,null),Be(n,a,"formEncType",h.formEncType,h,null),Be(n,a,"formMethod",h.formMethod,h,null),Be(n,a,"formTarget",h.formTarget,h,null)):(Be(n,a,"encType",h.encType,h,null),Be(n,a,"method",h.method,h,null),Be(n,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Uc(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Su);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Uc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Te("beforetoggle",n),Te("toggle",n),Me(n,"popover",c);break;case"xlinkActuate":Le(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Me(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=VS.get(s)||s,Me(n,s,c))}}function Ad(n,a,s,c,h,_){switch(s){case"style":h_(n,c,_);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof c=="string"?ti(n,c):(typeof c=="number"||typeof c=="bigint")&&ti(n,""+c);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),_=n[gn]||null,_=_!=null?_[s]:null,typeof _=="function"&&n.removeEventListener(a,_,h),typeof c=="function")){typeof _!="function"&&_!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,h);break t}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Me(n,s,c)}}}function Nn(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",n),Te("load",n);var c=!1,h=!1,_;for(_ in s)if(s.hasOwnProperty(_)){var T=s[_];if(T!=null)switch(_){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Be(n,a,_,T,s,null)}}h&&Be(n,a,"srcSet",s.srcSet,s,null),c&&Be(n,a,"src",s.src,s,null);return;case"input":Te("invalid",n);var w=_=T=h=null,F=null,j=null;for(c in s)if(s.hasOwnProperty(c)){var mt=s[c];if(mt!=null)switch(c){case"name":h=mt;break;case"type":T=mt;break;case"checked":F=mt;break;case"defaultChecked":j=mt;break;case"value":_=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(i(137,a));break;default:Be(n,a,c,mt,s,null)}}Yn(n,_,w,F,j,T,h,!1),Ee(n);return;case"select":Te("invalid",n),c=T=_=null;for(h in s)if(s.hasOwnProperty(h)&&(w=s[h],w!=null))switch(h){case"value":_=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:Be(n,a,h,w,s,null)}a=_,s=T,n.multiple=!!c,a!=null?Qe(n,!!c,a,!1):s!=null&&Qe(n,!!c,s,!0);return;case"textarea":Te("invalid",n),_=h=c=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":h=w;break;case"children":_=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:Be(n,a,T,w,s,null)}zs(n,c,h,_),Ee(n);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(n,a,F,c,s,null)}return;case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":Te("load",n);break;case"video":case"audio":for(c=0;c<Gl.length;c++)Te(Gl[c],n);break;case"image":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"embed":case"source":case"link":Te("error",n),Te("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in s)if(s.hasOwnProperty(j)&&(c=s[j],c!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Be(n,a,j,c,s,null)}return;default:if(Gf(a)){for(mt in s)s.hasOwnProperty(mt)&&(c=s[mt],c!==void 0&&Ad(n,a,mt,c,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(c=s[w],c!=null&&Be(n,a,w,c,s,null))}function dE(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,w=null,F=null,j=null,mt=null;for(ht in s){var xt=s[ht];if(s.hasOwnProperty(ht)&&xt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":F=xt;default:c.hasOwnProperty(ht)||Be(n,a,ht,null,c,xt)}}for(var ot in c){var ht=c[ot];if(xt=s[ot],c.hasOwnProperty(ot)&&(ht!=null||xt!=null))switch(ot){case"type":_=ht;break;case"name":h=ht;break;case"checked":j=ht;break;case"defaultChecked":mt=ht;break;case"value":T=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(i(137,a));break;default:ht!==xt&&Be(n,a,ot,ht,c,xt)}}ze(n,T,w,F,j,mt,_,h);return;case"select":ht=T=w=ot=null;for(_ in s)if(F=s[_],s.hasOwnProperty(_)&&F!=null)switch(_){case"value":break;case"multiple":ht=F;default:c.hasOwnProperty(_)||Be(n,a,_,null,c,F)}for(h in c)if(_=c[h],F=s[h],c.hasOwnProperty(h)&&(_!=null||F!=null))switch(h){case"value":ot=_;break;case"defaultValue":w=_;break;case"multiple":T=_;default:_!==F&&Be(n,a,h,_,c,F)}a=w,s=T,c=ht,ot!=null?Qe(n,!!s,ot,!1):!!c!=!!s&&(a!=null?Qe(n,!!s,a,!0):Qe(n,!!s,s?[]:"",!1));return;case"textarea":ht=ot=null;for(w in s)if(h=s[w],s.hasOwnProperty(w)&&h!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Be(n,a,w,null,c,h)}for(T in c)if(h=c[T],_=s[T],c.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":ot=h;break;case"defaultValue":ht=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==_&&Be(n,a,T,h,c,_)}Ln(n,ot,ht);return;case"option":for(var jt in s)if(ot=s[jt],s.hasOwnProperty(jt)&&ot!=null&&!c.hasOwnProperty(jt))switch(jt){case"selected":n.selected=!1;break;default:Be(n,a,jt,null,c,ot)}for(F in c)if(ot=c[F],ht=s[F],c.hasOwnProperty(F)&&ot!==ht&&(ot!=null||ht!=null))switch(F){case"selected":n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Be(n,a,F,ot,c,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)ot=s[le],s.hasOwnProperty(le)&&ot!=null&&!c.hasOwnProperty(le)&&Be(n,a,le,null,c,ot);for(j in c)if(ot=c[j],ht=s[j],c.hasOwnProperty(j)&&ot!==ht&&(ot!=null||ht!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:Be(n,a,j,ot,c,ht)}return;default:if(Gf(a)){for(var tn in s)ot=s[tn],s.hasOwnProperty(tn)&&ot!==void 0&&!c.hasOwnProperty(tn)&&Ad(n,a,tn,void 0,c,ot);for(mt in c)ot=c[mt],ht=s[mt],!c.hasOwnProperty(mt)||ot===ht||ot===void 0&&ht===void 0||Ad(n,a,mt,ot,c,ht);return}}for(var J in s)ot=s[J],s.hasOwnProperty(J)&&ot!=null&&!c.hasOwnProperty(J)&&Be(n,a,J,null,c,ot);for(xt in c)ot=c[xt],ht=s[xt],!c.hasOwnProperty(xt)||ot===ht||ot==null&&ht==null||Be(n,a,xt,ot,c,ht)}var Rd=null,Cd=null;function Mu(n){return n.nodeType===9?n:n.ownerDocument}function iv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function wd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Dd=null;function pE(){var n=window.event;return n&&n.type==="popstate"?n===Dd?!1:(Dd=n,!0):(Dd=null,!1)}var rv=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,_E=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(n){return sv.resolve(null).then(n).catch(gE)}:rv;function gE(n){setTimeout(function(){throw n})}function Ld(n,a){var s=a,c=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(c===0){n.removeChild(h),Ql(a);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=h}while(s);Ql(a)}function Ud(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ud(s),sl(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function vE(n,a,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Gr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==h.rel||n.getAttribute("href")!==(h.href==null?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Yi(n.nextSibling),n===null)break}return null}function yE(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Yi(n.nextSibling),n===null))return null;return n}function Yi(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function ov(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function lv(n,a,s){switch(a=Mu(s),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var zi=new Map,cv=new Set;function Eu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Na=q.d;q.d={f:xE,r:SE,D:ME,C:EE,L:TE,m:bE,X:RE,S:AE,M:CE};function xE(){var n=Na.f(),a=mu();return n||a}function SE(n){var a=D(n);a!==null&&a.tag===5&&a.type==="form"?zg(a):Na.r(n)}var co=typeof document>"u"?null:document;function uv(n,a,s){var c=co;if(c&&typeof a=="string"&&a){var h=Tn(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),cv.has(h)||(cv.add(h),n={rel:n,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),Nn(a,"link",n),tt(a),c.head.appendChild(a)))}}function ME(n){Na.D(n),uv("dns-prefetch",n,null)}function EE(n,a){Na.C(n,a),uv("preconnect",n,a)}function TE(n,a,s){Na.L(n,a,s);var c=co;if(c&&n&&a){var h='link[rel="preload"][as="'+Tn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Tn(s.imageSizes)+'"]')):h+='[href="'+Tn(n)+'"]';var _=h;switch(a){case"style":_=uo(n);break;case"script":_=fo(n)}zi.has(_)||(n=A({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),zi.set(_,n),c.querySelector(h)!==null||a==="style"&&c.querySelector(Xl(_))||a==="script"&&c.querySelector(Wl(_))||(a=c.createElement("link"),Nn(a,"link",n),tt(a),c.head.appendChild(a)))}}function bE(n,a){Na.m(n,a);var s=co;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Tn(c)+'"][href="'+Tn(n)+'"]',_=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=fo(n)}if(!zi.has(_)&&(n=A({rel:"modulepreload",href:n},a),zi.set(_,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wl(_)))return}c=s.createElement("link"),Nn(c,"link",n),tt(c),s.head.appendChild(c)}}}function AE(n,a,s){Na.S(n,a,s);var c=co;if(c&&n){var h=rt(c).hoistableStyles,_=uo(n);a=a||"default";var T=h.get(_);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Xl(_)))w.loading=5;else{n=A({rel:"stylesheet",href:n,"data-precedence":a},s),(s=zi.get(_))&&Od(n,s);var F=T=c.createElement("link");tt(F),Nn(F,"link",n),F._p=new Promise(function(j,mt){F.onload=j,F.onerror=mt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Tu(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:w},h.set(_,T)}}}function RE(n,a){Na.X(n,a);var s=co;if(s&&n){var c=rt(s).hoistableScripts,h=fo(n),_=c.get(h);_||(_=s.querySelector(Wl(h)),_||(n=A({src:n,async:!0},a),(a=zi.get(h))&&Nd(n,a),_=s.createElement("script"),tt(_),Nn(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(h,_))}}function CE(n,a){Na.M(n,a);var s=co;if(s&&n){var c=rt(s).hoistableScripts,h=fo(n),_=c.get(h);_||(_=s.querySelector(Wl(h)),_||(n=A({src:n,async:!0,type:"module"},a),(a=zi.get(h))&&Nd(n,a),_=s.createElement("script"),tt(_),Nn(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(h,_))}}function fv(n,a,s,c){var h=(h=se.current)?Eu(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=uo(s.href),s=rt(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=uo(s.href);var _=rt(h).hoistableStyles,T=_.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=h.querySelector(Xl(n)))&&!_._p&&(T.instance=_,T.state.loading=5),zi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},zi.set(n,s),_||wE(h,n,s,T.state))),a&&c===null)throw Error(i(528,""));return T}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=fo(s),s=rt(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function uo(n){return'href="'+Tn(n)+'"'}function Xl(n){return'link[rel="stylesheet"]['+n+"]"}function hv(n){return A({},n,{"data-precedence":n.precedence,precedence:null})}function wE(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Nn(a,"link",s),tt(a),n.head.appendChild(a))}function fo(n){return'[src="'+Tn(n)+'"]'}function Wl(n){return"script[async]"+n}function dv(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+Tn(s.href)+'"]');if(c)return a.instance=c,tt(c),c;var h=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),tt(c),Nn(c,"style",h),Tu(c,s.precedence,n),a.instance=c;case"stylesheet":h=uo(s.href);var _=n.querySelector(Xl(h));if(_)return a.state.loading|=4,a.instance=_,tt(_),_;c=hv(s),(h=zi.get(h))&&Od(c,h),_=(n.ownerDocument||n).createElement("link"),tt(_);var T=_;return T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Nn(_,"link",c),a.state.loading|=4,Tu(_,s.precedence,n),a.instance=_;case"script":return _=fo(s.src),(h=n.querySelector(Wl(_)))?(a.instance=h,tt(h),h):(c=s,(h=zi.get(_))&&(c=A({},s),Nd(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),tt(h),Nn(h,"link",c),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Tu(c,s.precedence,n));return a.instance}function Tu(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,_=h,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===a)_=w;else if(_!==h)break}_?_.parentNode.insertBefore(n,_.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function Od(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Nd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var bu=null;function pv(n,a,s){if(bu===null){var c=new Map,h=bu=new Map;h.set(s,c)}else h=bu,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var _=s[h];if(!(_[Gr]||_[_n]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(a)||"";T=n+T;var w=c.get(T);w?w.push(_):c.set(T,[_])}}return c}function mv(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function DE(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function _v(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Yl=null;function LE(){}function UE(n,a,s){if(Yl===null)throw Error(i(475));var c=Yl;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=uo(s.href),_=n.querySelector(Xl(h));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Au.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=_,tt(_);return}_=n.ownerDocument||n,s=hv(s),(h=zi.get(h))&&Od(s,h),_=_.createElement("link"),tt(_);var T=_;T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Nn(_,"link",s),a.instance=_}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Au.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function OE(){if(Yl===null)throw Error(i(475));var n=Yl;return n.stylesheets&&n.count===0&&Pd(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&Pd(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Au(){if(this.count--,this.count===0){if(this.stylesheets)Pd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Ru=null;function Pd(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Ru=new Map,a.forEach(NE,n),Ru=null,Au.call(n))}function NE(n,a){if(!(a.state.loading&4)){var s=Ru.get(n);if(s)var c=s.get(null);else{s=new Map,Ru.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),c=T)}c&&s.set(null,c)}h=a.instance,T=h.getAttribute("data-precedence"),_=s.get(T)||c,_===c&&s.set(null,h),s.set(T,h),this.count++,c=Au.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),_?_.parentNode.insertBefore(h,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var ql={$$typeof:x,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function PE(n,a,s,c,h,_,T,w){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=an(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.hiddenUpdates=an(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function gv(n,a,s,c,h,_,T,w,F,j,mt,xt){return n=new PE(n,a,s,T,w,F,j,xt),a=1,_===!0&&(a|=24),_=Ni(3,null,null,a),n.current=_,_.stateNode=n,a=dh(),a.refCount++,n.pooledCache=a,a.refCount++,_.memoizedState={element:c,isDehydrated:s,cache:a},qh(_),n}function vv(n){return n?(n=ks,n):ks}function yv(n,a,s,c,h,_){h=vv(h),c.context===null?c.context=h:c.pendingContext=h,c=rr(a),c.payload={element:s},_=_===void 0?null:_,_!==null&&(c.callback=_),s=sr(n,c,a),s!==null&&(jn(s,n,a),Dl(s,n,a))}function xv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function zd(n,a){xv(n,a),(n=n.alternate)&&xv(n,a)}function Sv(n){if(n.tag===13){var a=Ja(n,67108864);a!==null&&jn(a,n,67108864),zd(n,67108864)}}var Cu=!0;function zE(n,a,s,c){var h=b.T;b.T=null;var _=q.p;try{q.p=2,Id(n,a,s,c)}finally{q.p=_,b.T=h}}function IE(n,a,s,c){var h=b.T;b.T=null;var _=q.p;try{q.p=8,Id(n,a,s,c)}finally{q.p=_,b.T=h}}function Id(n,a,s,c){if(Cu){var h=Bd(c);if(h===null)bd(n,a,c,wu,s),Ev(n,c);else if(FE(h,n,a,s,c))c.stopPropagation();else if(Ev(n,c),a&4&&-1<BE.indexOf(n)){for(;h!==null;){var _=D(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Ut(_.pendingLanes);if(T!==0){var w=_;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var F=1<<31-ft(T);w.entanglements[1]|=F,T&=~F}oa(_),(je&6)===0&&(hu=pt()+500,Vl(0))}}break;case 13:w=Ja(_,2),w!==null&&jn(w,_,2),mu(),zd(_,2)}if(_=Bd(c),_===null&&bd(n,a,c,wu,s),_===h)break;h=_}h!==null&&c.stopPropagation()}else bd(n,a,c,null,s)}}function Bd(n){return n=Xf(n),Fd(n)}var wu=null;function Fd(n){if(wu=null,n=ya(n),n!==null){var a=W(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=yt(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return wu=n,null}function Mv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case Xt:return 8;case Dt:case Vt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Hd=!1,dr=null,pr=null,mr=null,jl=new Map,Zl=new Map,_r=[],BE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(n,a){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":jl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(a.pointerId)}}function Kl(n,a,s,c,h,_){return n===null||n.nativeEvent!==_?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:_,targetContainers:[h]},a!==null&&(a=D(a),a!==null&&Sv(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function FE(n,a,s,c,h){switch(a){case"focusin":return dr=Kl(dr,n,a,s,c,h),!0;case"dragenter":return pr=Kl(pr,n,a,s,c,h),!0;case"mouseover":return mr=Kl(mr,n,a,s,c,h),!0;case"pointerover":var _=h.pointerId;return jl.set(_,Kl(jl.get(_)||null,n,a,s,c,h)),!0;case"gotpointercapture":return _=h.pointerId,Zl.set(_,Kl(Zl.get(_)||null,n,a,s,c,h)),!0}return!1}function Tv(n){var a=ya(n.target);if(a!==null){var s=W(a);if(s!==null){if(a=s.tag,a===13){if(a=yt(s),a!==null){n.blockedOn=a,Dc(n.priority,function(){if(s.tag===13){var c=gi(),h=Ja(s,c);h!==null&&jn(h,s,c),zd(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Du(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=Bd(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);kf=c,s.target.dispatchEvent(c),kf=null}else return a=D(s),a!==null&&Sv(a),n.blockedOn=s,!1;a.shift()}return!0}function bv(n,a,s){Du(n)&&s.delete(a)}function HE(){Hd=!1,dr!==null&&Du(dr)&&(dr=null),pr!==null&&Du(pr)&&(pr=null),mr!==null&&Du(mr)&&(mr=null),jl.forEach(bv),Zl.forEach(bv)}function Lu(n,a){n.blockedOn===a&&(n.blockedOn=null,Hd||(Hd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HE)))}var Uu=null;function Av(n){Uu!==n&&(Uu=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Uu===n&&(Uu=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=n[a+2];if(typeof c!="function"){if(Fd(c||s)===null)continue;break}var _=D(s);_!==null&&(n.splice(a,3),a-=3,wh(_,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Ql(n){function a(F){return Lu(F,n)}dr!==null&&Lu(dr,n),pr!==null&&Lu(pr,n),mr!==null&&Lu(mr,n),jl.forEach(a),Zl.forEach(a);for(var s=0;s<_r.length;s++){var c=_r[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<_r.length&&(s=_r[0],s.blockedOn===null);)Tv(s),s.blockedOn===null&&_r.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],_=s[c+1],T=h[gn]||null;if(typeof _=="function")T||Av(s);else if(T){var w=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[gn]||null)w=T.formAction;else if(Fd(h)!==null)continue}else w=T.action;typeof w=="function"?s[c+1]=w:(s.splice(c,3),c-=3),Av(s)}}}function Vd(n){this._internalRoot=n}Ou.prototype.render=Vd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var s=a.current,c=gi();yv(s,c,n,a,null,null)},Ou.prototype.unmount=Vd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&so(),yv(n.current,2,null,n,null,null),mu(),a[va]=null}};function Ou(n){this._internalRoot=n}Ou.prototype.unstable_scheduleHydration=function(n){if(n){var a=rl();n={blockedOn:null,target:n,priority:a};for(var s=0;s<_r.length&&a!==0&&a<_r[s].priority;s++);_r.splice(s,0,n),s===0&&Tv(n)}};var Rv=t.version;if(Rv!=="19.0.0")throw Error(i(527,Rv,"19.0.0"));q.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=it(a),n=n!==null?Et(n):null,n=n===null?null:n.stateNode,n};var VE={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:ya,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{Jt=Nu.inject(VE),Wt=Nu}catch{}}return $l.createRoot=function(n,a){if(!r(n))throw Error(i(299));var s=!1,c="",h=Xg,_=Wg,T=Yg,w=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks)),a=gv(n,1,!1,null,null,s,c,h,_,T,w,null),n[va]=a.current,Td(n.nodeType===8?n.parentNode:n),new Vd(a)},$l.hydrateRoot=function(n,a,s){if(!r(n))throw Error(i(299));var c=!1,h="",_=Xg,T=Wg,w=Yg,F=null,j=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(_=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(F=s.unstable_transitionCallbacks),s.formState!==void 0&&(j=s.formState)),a=gv(n,1,!0,a,s??null,c,h,_,T,w,F,j),a.context=vv(null),s=a.current,c=gi(),h=rr(c),h.callback=null,sr(s,h,c),a.current.lanes=c,ln(a,c),oa(a),n[va]=a.current,Td(n),new Ou(a)},$l.version="19.0.0",$l}var Iv;function tT(){if(Iv)return Xd.exports;Iv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xd.exports=$E(),Xd.exports}var eT=tT();class ux{constructor(){Ht(this,"id",0);Ht(this,"x",0);Ht(this,"y",0)}}class Bv{constructor(){Ht(this,"List");this.List={}}addVertex(t){this.List[t]=[]}addEdge(t,e){this.List[t].push(e),this.List[e].push(t)}addEdgeDirected(t,e){this.List[t].push(e)}removeEdge(t,e){this.List[t]=this.List[t].filter(i=>i!==e),e!==void 0&&(this.List[e]=this.List[e].filter(i=>i!==t))}removeVertex(t){for(;this.List[t].length;){const e=this.List[t].pop();this.removeEdge(t,e)}delete this.List[t]}}const wn={NodesInGridSize:20,NodeSpacing:30,ObstacleMargin:30},zr={ViewAngle:60,MaxViewDistance:1e3,CubeSize:10},Ar={CircleSize:10,CircleSegments:100,DefaultColor:10526880,VisibleColor:16777215,SelectedColor:255,NextMoveColor:65280,ShotTargetColor:16711680},Ki={DefaultCount:3,MinWidth:60,MaxWidth:150,MinHeight:60,MaxHeight:150,WallThickness:20,RoomWallThickness:15,RoomDoorWidth:60,CorridorWallThickness:25,CorridorWidth:120,LineColor:65535},Kt={MazeHorizontalWalls:4,MazeVerticalWalls:4,MazeBaseOffset:100,MazeWallSpacing:150,MazeRandomOffsetStart:60,MazeRandomOffsetRange:100,MazeMinWallLength:200,MazeRandomWallLengthRange:150,RoomCount:3,RoomBaseOffset:60,RoomSpacingMultiplier:250,RoomWidth:180,RoomHeight:180,ScatteredMinCount:8,ScatteredRandomCountRange:5,ScatteredMinSize:40,ScatteredRandomSizeRange:80,ScatteredBaseOffset:60,ScatteredSpacingBuffer:120,SymmetricObstacleCount:4,SymmetricMinSize:60,SymmetricRandomSizeRange:60,SymmetricMinOffset:80,SymmetricRandomOffsetRange:120,SymmetricCentralMinSize:60,SymmetricCentralRandomSizeRange:40,CorridorsQuadrantObstacles:4,CorridorsQuadrantBasePosition:80,CorridorsQuadrantOppositeOffset:150,CorridorsQuadrantMinSize:60,CorridorsQuadrantRandomSizeRange:40},ho={MovementDuration:1,ShotPulseScale:1.3,ShotPulseDuration:.5,ShotPulseRepeatDelay:.02,ShotPulseEase:"elastic.out(1, 0.3)"},tc={FOV:90,InitialZPosition:10,MinDistance:2,MaxDistance:1e3,EnableRotate:!1},ls={ShowViewAngleEdges:!1,EdgeColor:16776960,EdgeOpacity:.6,EdgeLineWidth:2},Fv={get MapSize(){return(wn.NodesInGridSize-1)*wn.NodeSpacing}},Hv=10,nT=o=>`player${o+1}`,Vv={PLAYER_1:"player1"},Gv={TOGGLE_VIEW_ANGLE:"v",TOGGLE_VIEW_ANGLE_UPPER:"V"},kv={ACTIVE_SCALE:1.2,NORMAL_SCALE:1};class lc{constructor(t,e,i,r){Ht(this,"start");Ht(this,"end");this.start={x:t,y:e},this.end={x:i,y:r}}intersects(t,e){function i(r,l,u){return(u.y-r.y)*(l.x-r.x)>(l.y-r.y)*(u.x-r.x)}return i(this.start,t,e)!=i(this.end,t,e)&&i(this.start,this.end,t)!=i(this.start,this.end,e)}}function Pn(o,t,e,i){return[new lc(o,t,o+e,t),new lc(o+e,t,o+e,t+i),new lc(o+e,t+i,o,t+i),new lc(o,t+i,o,t)]}function iT(o,t,e){for(const i of t)for(const r of o.List[i.id]){const l=t.find(u=>u.id===r);if(l){for(const u of e)if(u.intersects({x:i.x,y:i.y},{x:l.x,y:l.y})){o.removeEdge(i.id,l.id);break}}}}class vr{static generateRandomObstacles(t=Ki.DefaultCount,e=Ki.MinWidth,i=Ki.MaxWidth,r=Ki.MinHeight,l=Ki.MaxHeight){const u=[],f=[],d=Fv.MapSize,p=wn.ObstacleMargin;for(let m=0;m<t;m++){const g=Math.floor(Math.random()*(i-e+1))+e,v=Math.floor(Math.random()*(l-r+1))+r,x=Math.floor(Math.random()*(d-g-p*2))+p,E=Math.floor(Math.random()*(d-v-p*2))+p,M=Pn(x,E,g,v);u.push({id:m+1,segments:M}),M.forEach(S=>{f.push(S)})}return{obstacles:u,lines:f}}static generateComplexMap(){const t=[],e=[],i=Fv.MapSize;let r=1;const l=["maze","rooms","scattered","symmetric","corridors"],u=l[Math.floor(Math.random()*l.length)];switch(u){case"maze":this.generateMazePattern(r,i,t,e);break;case"rooms":this.generateRoomsPattern(r,i,t,e);break;case"scattered":this.generateScatteredPattern(r,i,t,e);break;case"symmetric":this.generateSymmetricPattern(r,i,t,e);break;case"corridors":this.generateCorridorsPattern(r,i,t,e);break}return{obstacles:t,lines:e,pattern:u}}static importObstacles(t){const e=[],i=[];for(const r of t){const l=[];for(const u of r.segments){const f=new lc(u.start.x,u.start.y,u.end.x,u.end.y);l.push(f),i.push(f)}e.push({id:r.id,segments:l})}return{obstacles:e,lines:i}}static applyObstaclesToGraph(t,e,i){iT(t,e,i)}static generateMazePattern(t,e,i,r){let l=t;const u=Ki.WallThickness;for(let f=0;f<Kt.MazeHorizontalWalls;f++){const d=Kt.MazeBaseOffset+f*Kt.MazeWallSpacing,p=Kt.MazeRandomOffsetStart+Math.random()*Kt.MazeRandomOffsetRange,m=Kt.MazeMinWallLength+Math.random()*Kt.MazeRandomWallLengthRange,g=Pn(p,d,m,u);i.push({id:l++,segments:g}),g.forEach(v=>r.push(v))}for(let f=0;f<Kt.MazeVerticalWalls;f++){const d=Kt.MazeBaseOffset+f*Kt.MazeWallSpacing,p=Kt.MazeRandomOffsetStart+Math.random()*Kt.MazeRandomOffsetRange,m=Kt.MazeMinWallLength+Math.random()*Kt.MazeRandomWallLengthRange,g=Pn(d,p,u,m);i.push({id:l++,segments:g}),g.forEach(v=>r.push(v))}}static generateRoomsPattern(t,e,i,r){let l=t;const u=Kt.RoomCount;for(let f=0;f<u;f++){const d=Kt.RoomBaseOffset+f%2*Kt.RoomSpacingMultiplier,p=Kt.RoomBaseOffset+Math.floor(f/2)*Kt.RoomSpacingMultiplier,m=Kt.RoomWidth,g=Kt.RoomHeight,v=Ki.RoomWallThickness,x=Ki.RoomDoorWidth,E=(m-x)/2,M=d+E+x,S=m-E-x,y={id:l++,segments:Pn(d,p,E,v)};i.push(y),r.push(...y.segments);const L={id:l++,segments:Pn(M,p,S,v)};i.push(L),r.push(...L.segments);const U={id:l++,segments:Pn(d+m-v,p,v,g)};i.push(U),r.push(...U.segments);const R={id:l++,segments:Pn(d,p+g-v,m,v)};i.push(R),r.push(...R.segments);const O=(g-x)/2,P=p+O+x,N=g-O-x,B={id:l++,segments:Pn(d,p,v,O)};i.push(B),r.push(...B.segments);const b={id:l++,segments:Pn(d,P,v,N)};i.push(b),r.push(...b.segments)}}static generateScatteredPattern(t,e,i,r){let l=t;const u=Kt.ScatteredMinCount+Math.floor(Math.random()*Kt.ScatteredRandomCountRange);for(let f=0;f<u;f++){const d=Kt.ScatteredMinSize+Math.random()*Kt.ScatteredRandomSizeRange,p=Kt.ScatteredMinSize+Math.random()*Kt.ScatteredRandomSizeRange,m=Kt.ScatteredBaseOffset+Math.random()*(e-d-Kt.ScatteredSpacingBuffer),g=Kt.ScatteredBaseOffset+Math.random()*(e-p-Kt.ScatteredSpacingBuffer),v=Pn(m,g,d,p);i.push({id:l++,segments:v}),v.forEach(x=>r.push(x))}}static generateSymmetricPattern(t,e,i,r){let l=t;const u=e/2,f=e/2,d=Kt.SymmetricObstacleCount;for(let g=0;g<d;g++){const v=Kt.SymmetricMinSize+Math.random()*Kt.SymmetricRandomSizeRange,x=Kt.SymmetricMinSize+Math.random()*Kt.SymmetricRandomSizeRange,E=Kt.SymmetricMinOffset+Math.random()*Kt.SymmetricRandomOffsetRange,M=Kt.SymmetricMinOffset+Math.random()*Kt.SymmetricRandomOffsetRange;[{x:u+E,y:f+M},{x:u-E-v,y:f+M},{x:u+E,y:f-M-x},{x:u-E-v,y:f-M-x}].forEach(y=>{if(y.x>=wn.ObstacleMargin&&y.y>=wn.ObstacleMargin&&y.x+v<=e-wn.ObstacleMargin&&y.y+x<=e-wn.ObstacleMargin){const L=Pn(y.x,y.y,v,x);i.push({id:l++,segments:L}),L.forEach(U=>r.push(U))}})}const p=Kt.SymmetricCentralMinSize+Math.random()*Kt.SymmetricCentralRandomSizeRange,m=Pn(u-p/2,f-p/2,p,p);i.push({id:l++,segments:m}),m.forEach(g=>r.push(g))}static generateCorridorsPattern(t,e,i,r){let l=t;const u=Ki.CorridorWallThickness,f=Ki.CorridorWidth,d=e/2,p=e/2,m=d-f/2,g=d+f/2,v={id:l++,segments:Pn(m-u,wn.ObstacleMargin,u,e-wn.ObstacleMargin*2)};i.push(v),r.push(...v.segments);const x={id:l++,segments:Pn(g,wn.ObstacleMargin,u,e-wn.ObstacleMargin*2)};i.push(x),r.push(...x.segments);const E=p-f/2,M=p+f/2,S={id:l++,segments:Pn(wn.ObstacleMargin,E-u,e-wn.ObstacleMargin*2,u)};i.push(S),r.push(...S.segments);const y={id:l++,segments:Pn(wn.ObstacleMargin,M,e-wn.ObstacleMargin*2,u)};i.push(y),r.push(...y.segments);const L=Kt.CorridorsQuadrantObstacles;for(let U=0;U<L;U++){const R=U%4;let O,P;switch(R){case 0:O=Kt.CorridorsQuadrantBasePosition,P=Kt.CorridorsQuadrantBasePosition;break;case 1:O=e-Kt.CorridorsQuadrantOppositeOffset,P=Kt.CorridorsQuadrantBasePosition;break;case 2:O=Kt.CorridorsQuadrantBasePosition,P=e-Kt.CorridorsQuadrantOppositeOffset;break;case 3:O=e-Kt.CorridorsQuadrantOppositeOffset,P=e-Kt.CorridorsQuadrantOppositeOffset;break;default:O=Kt.CorridorsQuadrantBasePosition,P=Kt.CorridorsQuadrantBasePosition}const N=Pn(O,P,Kt.CorridorsQuadrantMinSize+Math.random()*Kt.CorridorsQuadrantRandomSizeRange,Kt.CorridorsQuadrantMinSize+Math.random()*Kt.CorridorsQuadrantRandomSizeRange);i.push({id:l++,segments:N}),N.forEach(B=>r.push(B))}}}var fx=(o=>(o.PLAYER="player",o))(fx||{});class aT{constructor(t,e,i,r,l=0){Ht(this,"id");Ht(this,"type");Ht(this,"node");Ht(this,"color");Ht(this,"angle");this.id=t,this.type=e,this.node=new ux,this.node.id=i.id,this.node.x=i.x,this.node.y=i.y,this.color=r,this.angle=l}setNode(t){this.node.id=t.id,this.node.x=t.x,this.node.y=t.y}setAngle(t){this.angle=t}getPosition(){return{x:this.node.x,y:this.node.y}}isAtSamePositionAs(t){return this.node.id===t.node.id}}var cc=(o=>(o.Idle="Idle",o.Select="Select",o.Move="Move",o.Shot="Shot",o))(cc||{}),la=(o=>(o.SelectPlayer="Select player",o.MovePlayer="Move player",o.ShotPlayer="Shot player",o.Complete="Complete",o.Cancel="Cancel",o))(la||{});class rT{constructor(t="Idle",e=!1){Ht(this,"state");Ht(this,"states");Ht(this,"history",[]);Ht(this,"listeners",new Map);Ht(this,"debugMode",!1);this.state=t,this.debugMode=e,this.states=this.defineStates()}defineStates(){return new Map([["Idle",{onEnter:()=>this.emit("idle:enter"),onExit:()=>this.emit("idle:exit"),validTransitions:new Map([["Select player","Select"],["Cancel","Idle"]])}],["Select",{onEnter:()=>this.emit("select:enter"),onExit:()=>this.emit("select:exit"),validTransitions:new Map([["Move player","Move"],["Cancel","Idle"]])}],["Move",{onEnter:()=>this.emit("move:enter"),onExit:()=>this.emit("move:exit"),validTransitions:new Map([["Shot player","Shot"],["Cancel","Idle"]])}],["Shot",{onEnter:()=>this.emit("shot:enter"),onExit:()=>this.emit("shot:exit"),validTransitions:new Map([["Complete","Idle"],["Shot player","Shot"],["Cancel","Idle"]])}]])}getState(){return this.state}canTransition(t){const e=this.states.get(this.state);return(e==null?void 0:e.validTransitions.has(t))??!1}transition(t){var u,f;const e=this.states.get(this.state),i=e==null?void 0:e.validTransitions.get(t);if(!i)return this.emit("transition:invalid",{event:t,currentState:this.state}),this.debugMode&&console.error(`Invalid transition from ${this.state} with event "${t}"`),!1;(u=e==null?void 0:e.onExit)==null||u.call(e);const r=this.state;this.state=i,this.history.push({from:r,to:i,event:t,timestamp:Date.now()});const l=this.states.get(i);return(f=l==null?void 0:l.onEnter)==null||f.call(l),this.emit("transition:success",{from:r,to:i,event:t}),this.debugMode&&console.log(`Transitioned from ${r} to ${i} via ${t}`),!0}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}off(t,e){const i=this.listeners.get(t);if(i){const r=i.indexOf(e);r>-1&&i.splice(r,1)}}emit(t,e){const i=this.listeners.get(t);i&&i.forEach(r=>r(e))}getHistory(){return[...this.history]}clearHistory(){this.history=[]}reset(){var i,r;const t=this.states.get(this.state);(i=t==null?void 0:t.onExit)==null||i.call(t),this.state="Idle",this.history=[];const e=this.states.get("Idle");(r=e==null?void 0:e.onEnter)==null||r.call(e),this.emit("reset")}setDebugMode(t){this.debugMode=t}}class sT extends aT{constructor(e,i,r,l=100){super(e,fx.PLAYER,i,r,0);Ht(this,"stateMachine");Ht(this,"health");Ht(this,"maxHealth");Ht(this,"isAlive");this.stateMachine=new rT,this.maxHealth=l,this.health=l,this.isAlive=!0}takeDamage(e){this.isAlive&&(this.health=Math.max(0,this.health-e),this.health<=0&&(this.isAlive=!1,console.log(`💀 ${this.id} has been eliminated!`)))}heal(e){this.isAlive&&(this.health=Math.min(this.maxHealth,this.health+e))}getHealthPercentage(){return this.health/this.maxHealth}}class oT{constructor(){Ht(this,"nodeList",[]);Ht(this,"players",new Map);Ht(this,"Edges",new Bv);Ht(this,"viewAngle",zr.ViewAngle);Ht(this,"NodesInGridSize",wn.NodesInGridSize);Ht(this,"Lines",[]);Ht(this,"obstacles",[]);this.Init_model()}Init_model(){const t=this.NodesInGridSize;let e=0;for(let r=0;r<t;r++)for(let l=0;l<t;l++){let u=new ux;u.id=e,u.x=r*wn.NodeSpacing,u.y=l*wn.NodeSpacing,this.nodeList.push(u),this.Edges.addVertex(e),e++}this.connectNearNodes();const i=this.generatePlayerColors(Hv);for(let r=0;r<Hv&&r<this.nodeList.length;r++){const l=nT(r);this.players.set(l,new sT(l,this.nodeList[r],i[r]))}for(const r of this.nodeList)(r.id+1)%t!=0&&this.Edges.addEdgeDirected(r.id,r.id+1),r.id%t!=0&&this.Edges.addEdgeDirected(r.id,r.id-1),r.id+t<t*t&&this.Edges.addEdgeDirected(r.id,r.id+t),r.id-t>=0&&this.Edges.addEdgeDirected(r.id,r.id-t);this.generateRandomObstaclesInternal()}connectNearNodes(){for(let t=0;t<this.nodeList.length;t++)for(let e=t+1;e<this.nodeList.length;e++)this.getNodeDistance(this.nodeList[t],this.nodeList[e])<zr.MaxViewDistance&&(this.Edges.addEdgeDirected(this.nodeList[t].id,this.nodeList[e].id),this.Edges.addEdgeDirected(this.nodeList[e].id,this.nodeList[t].id))}getNodeDistance(t,e){const i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}getNodeInDirection(t,e,i){const r=t.x+i*Math.cos(e),l=t.y+i*Math.sin(e);let u=null,f=1/0;for(const d of this.nodeList){const p=d.x-r,m=d.y-l,g=Math.sqrt(p*p+m*m);g<f&&(f=g,u=d)}return u}setPlayerRef(t,e){const i=this.players.get(t);i&&i.setNode(e)}getPlayer(t){return this.players.get(t)}getNodesAtAngle(t,e,i){return this.nodeList.filter(r=>{const l=this.getAngleBetweenNodes(t,r);return Math.abs(l-e)<this.viewAngle&&this.getNodeDistance(t,r)<=i})}getAngleBetweenNodes(t,e){const i=e.x-t.x,r=e.y-t.y;return Math.atan2(r,i)*(180/Math.PI)}getConnectedNodes(t){const e=[],i=this.Edges.List[t.id];for(const r of i){const l=this.nodeList.find(u=>u.id===r);l&&e.push(l)}return e}hasLineOfSight(t,e){const i={x:t.x,y:t.y},r={x:e.x,y:e.y};for(const l of this.Lines)if(l.intersects(i,r))return!1;return!0}getConnectedNodesAtAngle(t,e,i){const r=this.getConnectedNodes(t),l={x:Math.cos(e*Math.PI/180),y:Math.sin(e*Math.PI/180)};return r.filter(u=>{const f={x:u.x-t.x,y:u.y-t.y},d=this.getNodeDistance(t,u),p=(f.x*l.x+f.y*l.y)/(d*Math.sqrt(l.x*l.x+l.y*l.y));return Math.acos(p)*(180/Math.PI)<this.viewAngle&&d<=i})}getVisibleNodesAtAngle(t,e,i){const r={x:Math.cos(e*Math.PI/180),y:Math.sin(e*Math.PI/180)};return this.nodeList.filter(l=>{if(l.id===t.id)return!1;const u={x:l.x-t.x,y:l.y-t.y},f=this.getNodeDistance(t,l);if(f>i)return!1;const d=(u.x*r.x+u.y*r.y)/(f*Math.sqrt(r.x*r.x+r.y*r.y));return Math.acos(Math.max(-1,Math.min(1,d)))*(180/Math.PI)>=this.viewAngle?!1:this.hasLineOfSight(t,l)})}areNodesConnected(t,e){return this.Edges.List[t.id].includes(e.id)}getObstacles(){return[...this.obstacles]}resetGraphEdges(){this.Edges=new Bv;for(let e=0;e<this.nodeList.length;e++)this.Edges.addVertex(e);const t=this.NodesInGridSize;for(const e of this.nodeList)(e.id+1)%t!=0&&this.Edges.addEdgeDirected(e.id,e.id+1),e.id%t!=0&&this.Edges.addEdgeDirected(e.id,e.id-1),e.id+t<t*t&&this.Edges.addEdgeDirected(e.id,e.id+t),e.id-t>=0&&this.Edges.addEdgeDirected(e.id,e.id-t)}generateRandomObstaclesInternal(){const t=vr.generateRandomObstacles();this.obstacles=t.obstacles,this.Lines=t.lines,vr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}generateRandomObstacles(t,e,i,r,l){this.resetGraphEdges();const u=vr.generateRandomObstacles(t,e,i,r,l);this.obstacles=u.obstacles,this.Lines=u.lines,vr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}importObstacles(t){this.resetGraphEdges();const e=vr.importObstacles(t);this.obstacles=e.obstacles,this.Lines=e.lines,vr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}generateComplexMap(){this.resetGraphEdges();const t=vr.generateComplexMap();this.obstacles=t.obstacles,this.Lines=t.lines,vr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}generatePlayerColors(t){const e=[];for(let i=0;i<t;i++){const r=i/t*360;e.push(this.hslToHex(r,100,50))}return e}hslToHex(t,e,i){e/=100,i/=100;const r=(1-Math.abs(2*i-1))*e,l=r*(1-Math.abs(t/60%2-1)),u=i-r/2;let f=0,d=0,p=0;0<=t&&t<60?(f=r,d=l,p=0):60<=t&&t<120?(f=l,d=r,p=0):120<=t&&t<180?(f=0,d=r,p=l):180<=t&&t<240?(f=0,d=l,p=r):240<=t&&t<300?(f=l,d=0,p=r):300<=t&&t<360&&(f=r,d=0,p=l);const m=Math.round((f+u)*255),g=Math.round((d+u)*255),v=Math.round((p+u)*255);return m<<16|g<<8|v}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Im="174",po={ROTATE:0,DOLLY:1,PAN:2},mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lT=0,Xv=1,cT=2,hx=1,uT=2,Ha=3,Ir=0,ai=1,ka=2,Ur=0,zo=1,Wv=2,Yv=3,qv=4,fT=5,xs=100,hT=101,dT=102,pT=103,mT=104,_T=200,gT=201,vT=202,yT=203,Op=204,Np=205,xT=206,ST=207,MT=208,ET=209,TT=210,bT=211,AT=212,RT=213,CT=214,Pp=0,zp=1,Ip=2,Go=3,Bp=4,Fp=5,Hp=6,Vp=7,dx=0,wT=1,DT=2,Or=0,LT=1,UT=2,OT=3,NT=4,PT=5,zT=6,IT=7,px=300,ko=301,Xo=302,Gp=303,kp=304,Uf=306,Xp=1e3,Ms=1001,Wp=1002,$i=1003,BT=1004,Pu=1005,ha=1006,jd=1007,Es=1008,qa=1009,mx=1010,_x=1011,_c=1012,Bm=1013,ws=1014,Xa=1015,Tc=1016,Fm=1017,Hm=1018,Wo=1020,gx=35902,vx=1021,yx=1022,Ji=1023,xx=1024,Sx=1025,Io=1026,Yo=1027,Mx=1028,Vm=1029,Ex=1030,Gm=1031,km=1033,lf=33776,cf=33777,uf=33778,ff=33779,Yp=35840,qp=35841,jp=35842,Zp=35843,Kp=36196,Qp=37492,Jp=37496,$p=37808,tm=37809,em=37810,nm=37811,im=37812,am=37813,rm=37814,sm=37815,om=37816,lm=37817,cm=37818,um=37819,fm=37820,hm=37821,hf=36492,dm=36494,pm=36495,Tx=36283,mm=36284,_m=36285,gm=36286,FT=3200,HT=3201,VT=0,GT=1,Rr="",Fi="srgb",qo="srgb-linear",vf="linear",Fe="srgb",_o=7680,jv=519,kT=512,XT=513,WT=514,bx=515,YT=516,qT=517,jT=518,ZT=519,Zv=35044,Kv="300 es",Wa=2e3,yf=2001;let el=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}};const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=Math.PI/180,vm=180/Math.PI;function bc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function xe(o,t,e){return Math.max(t,Math.min(e,o))}function KT(o,t){return(o%t+t)%t}function Kd(o,t,e){return(1-e)*o+e*t}function ec(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class pe{constructor(t=0,e=0){pe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*i-u*r+t.x,this.y=l*r+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,i,r,l,u,f,d,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,u,f,d,p)}set(t,e,i,r,l,u,f,d,p){const m=this.elements;return m[0]=t,m[1]=r,m[2]=f,m[3]=e,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,u=i[0],f=i[3],d=i[6],p=i[1],m=i[4],g=i[7],v=i[2],x=i[5],E=i[8],M=r[0],S=r[3],y=r[6],L=r[1],U=r[4],R=r[7],O=r[2],P=r[5],N=r[8];return l[0]=u*M+f*L+d*O,l[3]=u*S+f*U+d*P,l[6]=u*y+f*R+d*N,l[1]=p*M+m*L+g*O,l[4]=p*S+m*U+g*P,l[7]=p*y+m*R+g*N,l[2]=v*M+x*L+E*O,l[5]=v*S+x*U+E*P,l[8]=v*y+x*R+E*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8];return e*u*m-e*f*p-i*l*m+i*f*d+r*l*p-r*u*d}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=m*u-f*p,v=f*d-m*l,x=p*l-u*d,E=e*g+i*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*p-m*i)*M,t[2]=(f*i-r*u)*M,t[3]=v*M,t[4]=(m*e-r*d)*M,t[5]=(r*l-f*e)*M,t[6]=x*M,t[7]=(i*d-p*e)*M,t[8]=(u*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*u+p*f)+u+t,-r*p,r*d,-r*(-p*u+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Qd.makeScale(t,e)),this}rotate(t){return this.premultiply(Qd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new he;function Ax(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function xf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function QT(){const o=xf("canvas");return o.style.display="block",o}const Qv={};function gs(o){o in Qv||(Qv[o]=!0,console.warn(o))}function JT(o,t,e){return new Promise(function(i,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}function $T(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tb(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jv=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){const o={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Fe&&(r.r=Ya(r.r),r.g=Ya(r.g),r.b=Ya(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(r.r=Bo(r.r),r.g=Bo(r.g),r.b=Bo(r.b))),r},fromWorkingColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},toWorkingColorSpace:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?vf:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[qo]:{primaries:t,whitePoint:i,transfer:vf,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fi},outputColorSpaceConfig:{drawingBufferColorSpace:Fi}},[Fi]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fi}}}),o}const Ne=eb();function Ya(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let go;class nb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{go===void 0&&(go=xf("canvas")),go.width=t.width,go.height=t.height;const i=go.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=go}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xf("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Ya(l[u]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ya(e[i]/255)*255):e[i]=Ya(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ib=0;class Xm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=bc(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Jd(r[u].image)):l.push(Jd(r[u]))}else l=Jd(r);i.url=l}return e||(t.images[this.uuid]=i),i}}function Jd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ab=0;class ri extends el{constructor(t=ri.DEFAULT_IMAGE,e=ri.DEFAULT_MAPPING,i=Ms,r=Ms,l=ha,u=Es,f=Ji,d=qa,p=ri.DEFAULT_ANISOTROPY,m=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=bc(),this.name="",this.source=new Xm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xp:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Wp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xp:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Wp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=px;ri.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,e=0,i=0,r=1){on.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*r+u[12]*l,this.y=u[1]*e+u[5]*i+u[9]*r+u[13]*l,this.z=u[2]*e+u[6]*i+u[10]*r+u[14]*l,this.w=u[3]*e+u[7]*i+u[11]*r+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,l;const d=t.elements,p=d[0],m=d[4],g=d[8],v=d[1],x=d[5],E=d[9],M=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(p+1)/2,R=(x+1)/2,O=(y+1)/2,P=(m+v)/4,N=(g+M)/4,B=(E+S)/4;return U>R&&U>O?U<.01?(i=0,r=.707106781,l=.707106781):(i=Math.sqrt(U),r=P/i,l=N/i):R>O?R<.01?(i=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),i=P/r,l=B/r):O<.01?(i=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),i=N/l,r=B/l),this.set(i,r,l,e),this}let L=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(g-M)/L,this.z=(v-m)/L,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rb extends el{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ha,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Xm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends rb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rx extends ri{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends ri{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,l,u,f){let d=i[r+0],p=i[r+1],m=i[r+2],g=i[r+3];const v=l[u+0],x=l[u+1],E=l[u+2],M=l[u+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=M;return}if(g!==M||d!==v||p!==x||m!==E){let S=1-f;const y=d*v+p*x+m*E+g*M,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const O=Math.sqrt(U),P=Math.atan2(O,y*L);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const R=f*L;if(d=d*S+v*R,p=p*S+x*R,m=m*S+E*R,g=g*S+M*R,S===1-f){const O=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=O,p*=O,m*=O,g*=O}}t[e]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,r,l,u){const f=i[r],d=i[r+1],p=i[r+2],m=i[r+3],g=l[u],v=l[u+1],x=l[u+2],E=l[u+3];return t[e]=f*E+m*g+d*x-p*v,t[e+1]=d*E+m*v+p*g-f*x,t[e+2]=p*E+m*x+f*v-d*g,t[e+3]=m*E-f*g-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(i/2),m=f(r/2),g=f(l/2),v=d(i/2),x=d(r/2),E=d(l/2);switch(u){case"XYZ":this._x=v*m*g+p*x*E,this._y=p*x*g-v*m*E,this._z=p*m*E+v*x*g,this._w=p*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+p*x*E,this._y=p*x*g-v*m*E,this._z=p*m*E-v*x*g,this._w=p*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-p*x*E,this._y=p*x*g+v*m*E,this._z=p*m*E+v*x*g,this._w=p*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-p*x*E,this._y=p*x*g+v*m*E,this._z=p*m*E-v*x*g,this._w=p*m*g+v*x*E;break;case"YZX":this._x=v*m*g+p*x*E,this._y=p*x*g+v*m*E,this._z=p*m*E-v*x*g,this._w=p*m*g-v*x*E;break;case"XZY":this._x=v*m*g-p*x*E,this._y=p*x*g-v*m*E,this._z=p*m*E+v*x*g,this._w=p*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],l=e[8],u=e[1],f=e[5],d=e[9],p=e[2],m=e[6],g=e[10],v=i+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-p)*x,this._z=(u-r)*x}else if(i>f&&i>g){const x=2*Math.sqrt(1+i-f-g);this._w=(m-d)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(l+p)/x}else if(f>g){const x=2*Math.sqrt(1+f-i-g);this._w=(l-p)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-i-f);this._w=(u-r)/x,this._x=(l+p)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,l=t._z,u=t._w,f=e._x,d=e._y,p=e._z,m=e._w;return this._x=i*m+u*f+r*p-l*d,this._y=r*m+u*d+l*f-i*p,this._z=l*m+u*p+i*d-r*f,this._w=u*m-i*f-r*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,l=this._z,u=this._w;let f=u*t._w+i*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=i,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-e;return this._w=x*u+e*this._w,this._x=x*i+e*this._x,this._y=x*r+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),g=Math.sin((1-e)*m)/p,v=Math.sin(e*m)/p;return this._w=u*g+this._w*v,this._x=i*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,i=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ty.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ty.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*r,this.y=l[1]*e+l[4]*i+l[7]*r,this.z=l[2]*e+l[5]*i+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=t.elements,u=1/(l[3]*e+l[7]*i+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*r+l[12])*u,this.y=(l[1]*e+l[5]*i+l[9]*r+l[13])*u,this.z=(l[2]*e+l[6]*i+l[10]*r+l[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*r-f*i),m=2*(f*e-l*r),g=2*(l*i-u*e);return this.x=e+d*p+u*g-f*m,this.y=i+d*m+f*p-l*g,this.z=r+d*g+l*m-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r,this.y=l[1]*e+l[5]*i+l[9]*r,this.z=l[2]*e+l[6]*i+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,l=t.z,u=e.x,f=e.y,d=e.z;return this.x=r*d-l*f,this.y=l*u-i*d,this.z=i*f-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $d.copy(this).projectOnVector(t),this.sub($d)}reflect(t){return this.sub($d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new nt,ty=new Ls;class Ac{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,qi):qi.fromBufferAttribute(l,u),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zu.copy(i.boundingBox)),zu.applyMatrix4(t.matrixWorld),this.union(zu)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nc),Iu.subVectors(this.max,nc),vo.subVectors(t.a,nc),yo.subVectors(t.b,nc),xo.subVectors(t.c,nc),yr.subVectors(yo,vo),xr.subVectors(xo,yo),cs.subVectors(vo,xo);let e=[0,-yr.z,yr.y,0,-xr.z,xr.y,0,-cs.z,cs.y,yr.z,0,-yr.x,xr.z,0,-xr.x,cs.z,0,-cs.x,-yr.y,yr.x,0,-xr.y,xr.x,0,-cs.y,cs.x,0];return!tp(e,vo,yo,xo,Iu)||(e=[1,0,0,0,1,0,0,0,1],!tp(e,vo,yo,xo,Iu))?!1:(Bu.crossVectors(yr,xr),e=[Bu.x,Bu.y,Bu.z],tp(e,vo,yo,xo,Iu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],qi=new nt,zu=new Ac,vo=new nt,yo=new nt,xo=new nt,yr=new nt,xr=new nt,cs=new nt,nc=new nt,Iu=new nt,Bu=new nt,us=new nt;function tp(o,t,e,i,r){for(let l=0,u=o.length-3;l<=u;l+=3){us.fromArray(o,l);const f=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),d=t.dot(us),p=e.dot(us),m=i.dot(us);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const ob=new Ac,ic=new nt,ep=new nt;class Of{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ob.setFromPoints(t).getCenter(i);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ic.subVectors(t,this.center);const e=ic.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ic,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ep.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ic.copy(t.center).add(ep)),this.expandByPoint(ic.copy(t.center).sub(ep))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const za=new nt,np=new nt,Fu=new nt,Sr=new nt,ip=new nt,Hu=new nt,ap=new nt;class Nf{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,za)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=za.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(za.copy(this.origin).addScaledVector(this.direction,e),za.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){np.copy(t).add(e).multiplyScalar(.5),Fu.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(np);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Fu),f=Sr.dot(this.direction),d=-Sr.dot(Fu),p=Sr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,E;if(m>0)if(g=u*d-f,v=u*f-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+u*v+2*f)+v*(u*g+v+2*d)+p}else v=l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+p):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+p);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(np).addScaledVector(Fu,v),x}intersectSphere(t,e){za.subVectors(t.center,this.origin);const i=za.dot(this.direction),r=za.dot(za)-i*i,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,l,u,f,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),m>=0?(l=(t.min.y-v.y)*m,u=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,u=(t.min.y-v.y)*m),i>u||l>r||((l>i||isNaN(i))&&(i=l),(u<r||isNaN(r))&&(r=u),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),i>d||f>r)||((f>i||i!==i)&&(i=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,za)!==null}intersectTriangle(t,e,i,r,l){ip.subVectors(e,t),Hu.subVectors(i,t),ap.crossVectors(ip,Hu);let u=this.direction.dot(ap),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Sr.subVectors(this.origin,t);const d=f*this.direction.dot(Hu.crossVectors(Sr,Hu));if(d<0)return null;const p=f*this.direction.dot(ip.cross(Sr));if(p<0||d+p>u)return null;const m=-f*Sr.dot(ap);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,e,i,r,l,u,f,d,p,m,g,v,x,E,M,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,u,f,d,p,m,g,v,x,E,M,S)}set(t,e,i,r,l,u,f,d,p,m,g,v,x,E,M,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=r,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/So.setFromMatrixColumn(t,0).length(),l=1/So.setFromMatrixColumn(t,1).length(),u=1/So.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,l=t.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=u*m,x=u*g,E=f*m,M=f*g;e[0]=d*m,e[4]=-d*g,e[8]=p,e[1]=x+E*p,e[5]=v-M*p,e[9]=-f*d,e[2]=M-v*p,e[6]=E+x*p,e[10]=u*d}else if(t.order==="YXZ"){const v=d*m,x=d*g,E=p*m,M=p*g;e[0]=v+M*f,e[4]=E*f-x,e[8]=u*p,e[1]=u*g,e[5]=u*m,e[9]=-f,e[2]=x*f-E,e[6]=M+v*f,e[10]=u*d}else if(t.order==="ZXY"){const v=d*m,x=d*g,E=p*m,M=p*g;e[0]=v-M*f,e[4]=-u*g,e[8]=E+x*f,e[1]=x+E*f,e[5]=u*m,e[9]=M-v*f,e[2]=-u*p,e[6]=f,e[10]=u*d}else if(t.order==="ZYX"){const v=u*m,x=u*g,E=f*m,M=f*g;e[0]=d*m,e[4]=E*p-x,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=x*p-E,e[2]=-p,e[6]=f*d,e[10]=u*d}else if(t.order==="YZX"){const v=u*d,x=u*p,E=f*d,M=f*p;e[0]=d*m,e[4]=M-v*g,e[8]=E*g+x,e[1]=g,e[5]=u*m,e[9]=-f*m,e[2]=-p*m,e[6]=x*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=u*d,x=u*p,E=f*d,M=f*p;e[0]=d*m,e[4]=-g,e[8]=p*m,e[1]=v*g+M,e[5]=u*m,e[9]=x*g-E,e[2]=E*g-x,e[6]=f*m,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lb,t,cb)}lookAt(t,e,i){const r=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Mr.crossVectors(i,vi),Mr.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Mr.crossVectors(i,vi)),Mr.normalize(),Vu.crossVectors(vi,Mr),r[0]=Mr.x,r[4]=Vu.x,r[8]=vi.x,r[1]=Mr.y,r[5]=Vu.y,r[9]=vi.y,r[2]=Mr.z,r[6]=Vu.z,r[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,u=i[0],f=i[4],d=i[8],p=i[12],m=i[1],g=i[5],v=i[9],x=i[13],E=i[2],M=i[6],S=i[10],y=i[14],L=i[3],U=i[7],R=i[11],O=i[15],P=r[0],N=r[4],B=r[8],b=r[12],A=r[1],H=r[5],st=r[9],K=r[13],ut=r[2],ct=r[6],X=r[10],$=r[14],W=r[3],yt=r[7],z=r[11],it=r[15];return l[0]=u*P+f*A+d*ut+p*W,l[4]=u*N+f*H+d*ct+p*yt,l[8]=u*B+f*st+d*X+p*z,l[12]=u*b+f*K+d*$+p*it,l[1]=m*P+g*A+v*ut+x*W,l[5]=m*N+g*H+v*ct+x*yt,l[9]=m*B+g*st+v*X+x*z,l[13]=m*b+g*K+v*$+x*it,l[2]=E*P+M*A+S*ut+y*W,l[6]=E*N+M*H+S*ct+y*yt,l[10]=E*B+M*st+S*X+y*z,l[14]=E*b+M*K+S*$+y*it,l[3]=L*P+U*A+R*ut+O*W,l[7]=L*N+U*H+R*ct+O*yt,l[11]=L*B+U*st+R*X+O*z,l[15]=L*b+U*K+R*$+O*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],m=t[2],g=t[6],v=t[10],x=t[14],E=t[3],M=t[7],S=t[11],y=t[15];return E*(+l*d*g-r*p*g-l*f*v+i*p*v+r*f*x-i*d*x)+M*(+e*d*x-e*p*v+l*u*v-r*u*x+r*p*m-l*d*m)+S*(+e*p*g-e*f*x-l*u*g+i*u*x+l*f*m-i*p*m)+y*(-r*f*m-e*d*g+e*f*v+r*u*g-i*u*v+i*d*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=t[9],v=t[10],x=t[11],E=t[12],M=t[13],S=t[14],y=t[15],L=g*S*p-M*v*p+M*d*x-f*S*x-g*d*y+f*v*y,U=E*v*p-m*S*p-E*d*x+u*S*x+m*d*y-u*v*y,R=m*M*p-E*g*p+E*f*x-u*M*x-m*f*y+u*g*y,O=E*g*d-m*M*d-E*f*v+u*M*v+m*f*S-u*g*S,P=e*L+i*U+r*R+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=L*N,t[1]=(M*v*l-g*S*l-M*r*x+i*S*x+g*r*y-i*v*y)*N,t[2]=(f*S*l-M*d*l+M*r*p-i*S*p-f*r*y+i*d*y)*N,t[3]=(g*d*l-f*v*l-g*r*p+i*v*p+f*r*x-i*d*x)*N,t[4]=U*N,t[5]=(m*S*l-E*v*l+E*r*x-e*S*x-m*r*y+e*v*y)*N,t[6]=(E*d*l-u*S*l-E*r*p+e*S*p+u*r*y-e*d*y)*N,t[7]=(u*v*l-m*d*l+m*r*p-e*v*p-u*r*x+e*d*x)*N,t[8]=R*N,t[9]=(E*g*l-m*M*l-E*i*x+e*M*x+m*i*y-e*g*y)*N,t[10]=(u*M*l-E*f*l+E*i*p-e*M*p-u*i*y+e*f*y)*N,t[11]=(m*f*l-u*g*l-m*i*p+e*g*p+u*i*x-e*f*x)*N,t[12]=O*N,t[13]=(m*M*r-E*g*r+E*i*v-e*M*v-m*i*S+e*g*S)*N,t[14]=(E*f*r-u*M*r-E*i*d+e*M*d+u*i*S-e*f*S)*N,t[15]=(u*g*r-m*f*r+m*i*d-e*g*d-u*i*v+e*f*v)*N,this}scale(t){const e=this.elements,i=t.x,r=t.y,l=t.z;return e[0]*=i,e[4]*=r,e[8]*=l,e[1]*=i,e[5]*=r,e[9]*=l,e[2]*=i,e[6]*=r,e[10]*=l,e[3]*=i,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),l=1-i,u=t.x,f=t.y,d=t.z,p=l*u,m=l*f;return this.set(p*u+i,p*f-r*d,p*d+r*f,0,p*f+r*d,m*f+i,m*d-r*u,0,p*d-r*f,m*d+r*u,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,l,u){return this.set(1,i,l,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,l=e._x,u=e._y,f=e._z,d=e._w,p=l+l,m=u+u,g=f+f,v=l*p,x=l*m,E=l*g,M=u*m,S=u*g,y=f*g,L=d*p,U=d*m,R=d*g,O=i.x,P=i.y,N=i.z;return r[0]=(1-(M+y))*O,r[1]=(x+R)*O,r[2]=(E-U)*O,r[3]=0,r[4]=(x-R)*P,r[5]=(1-(v+y))*P,r[6]=(S+L)*P,r[7]=0,r[8]=(E+U)*N,r[9]=(S-L)*N,r[10]=(1-(v+M))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let l=So.set(r[0],r[1],r[2]).length();const u=So.set(r[4],r[5],r[6]).length(),f=So.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],ji.copy(this);const p=1/l,m=1/u,g=1/f;return ji.elements[0]*=p,ji.elements[1]*=p,ji.elements[2]*=p,ji.elements[4]*=m,ji.elements[5]*=m,ji.elements[6]*=m,ji.elements[8]*=g,ji.elements[9]*=g,ji.elements[10]*=g,e.setFromRotationMatrix(ji),i.x=l,i.y=u,i.z=f,this}makePerspective(t,e,i,r,l,u,f=Wa){const d=this.elements,p=2*l/(e-t),m=2*l/(i-r),g=(e+t)/(e-t),v=(i+r)/(i-r);let x,E;if(f===Wa)x=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===yf)x=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,l,u,f=Wa){const d=this.elements,p=1/(e-t),m=1/(i-r),g=1/(u-l),v=(e+t)*p,x=(i+r)*m;let E,M;if(f===Wa)E=(u+l)*g,M=-2*g;else if(f===yf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const So=new nt,ji=new nn,lb=new nt(0,0,0),cb=new nt(1,1,1),Mr=new nt,Vu=new nt,vi=new nt,ey=new nn,ny=new Ls;class ja{constructor(t=0,e=0,i=0,r=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,l=r[0],u=r[4],f=r[8],d=r[1],p=r[5],m=r[9],g=r[2],v=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ey.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ey,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ny.setFromEuler(this),this.setFromQuaternion(ny,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class Wm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ub=0;const iy=new nt,Mo=new Ls,Ia=new nn,Gu=new nt,ac=new nt,fb=new nt,hb=new Ls,ay=new nt(1,0,0),ry=new nt(0,1,0),sy=new nt(0,0,1),oy={type:"added"},db={type:"removed"},Eo={type:"childadded",child:null},rp={type:"childremoved",child:null};class si extends el{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=bc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const t=new nt,e=new ja,i=new Ls,r=new nt(1,1,1);function l(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nn},normalMatrix:{value:new he}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mo.setFromAxisAngle(t,e),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,e){return Mo.setFromAxisAngle(t,e),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(ay,t)}rotateY(t){return this.rotateOnAxis(ry,t)}rotateZ(t){return this.rotateOnAxis(sy,t)}translateOnAxis(t,e){return iy.copy(t).applyQuaternion(this.quaternion),this.position.add(iy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ay,t)}translateY(t){return this.translateOnAxis(ry,t)}translateZ(t){return this.translateOnAxis(sy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gu.copy(t):Gu.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(ac,Gu,this.up):Ia.lookAt(Gu,ac,this.up),this.quaternion.setFromRotationMatrix(Ia),r&&(Ia.extractRotation(r.matrixWorld),Mo.setFromRotationMatrix(Ia),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oy),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(db),rp.child=t,this.dispatchEvent(rp),rp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oy),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,t,fb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ac,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(t.animations,d))}}if(e){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),m=u(t.images),g=u(t.shapes),v=u(t.skeletons),x=u(t.animations),E=u(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=r,i;function u(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}si.DEFAULT_UP=new nt(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new nt,Ba=new nt,sp=new nt,Fa=new nt,To=new nt,bo=new nt,ly=new nt,op=new nt,lp=new nt,cp=new nt,up=new on,fp=new on,hp=new on;class Qi{constructor(t=new nt,e=new nt,i=new nt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Zi.subVectors(t,e),r.cross(Zi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,i,r,l){Zi.subVectors(r,e),Ba.subVectors(i,e),sp.subVectors(t,e);const u=Zi.dot(Zi),f=Zi.dot(Ba),d=Zi.dot(sp),p=Ba.dot(Ba),m=Ba.dot(sp),g=u*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(p*d-f*m)*v,E=(u*m-f*d)*v;return l.set(1-x-E,E,x)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(t,e,i,r,l,u,f,d){return this.getBarycoord(t,e,i,r,Fa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Fa.x),d.addScaledVector(u,Fa.y),d.addScaledVector(f,Fa.z),d)}static getInterpolatedAttribute(t,e,i,r,l,u){return up.setScalar(0),fp.setScalar(0),hp.setScalar(0),up.fromBufferAttribute(t,e),fp.fromBufferAttribute(t,i),hp.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(up,l.x),u.addScaledVector(fp,l.y),u.addScaledVector(hp,l.z),u}static isFrontFacing(t,e,i,r){return Zi.subVectors(i,e),Ba.subVectors(t,e),Zi.cross(Ba).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ba.subVectors(this.a,this.b),Zi.cross(Ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,l){return Qi.getInterpolation(t,this.a,this.b,this.c,e,i,r,l)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,l=this.c;let u,f;To.subVectors(r,i),bo.subVectors(l,i),op.subVectors(t,i);const d=To.dot(op),p=bo.dot(op);if(d<=0&&p<=0)return e.copy(i);lp.subVectors(t,r);const m=To.dot(lp),g=bo.dot(lp);if(m>=0&&g<=m)return e.copy(r);const v=d*g-m*p;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),e.copy(i).addScaledVector(To,u);cp.subVectors(t,l);const x=To.dot(cp),E=bo.dot(cp);if(E>=0&&x<=E)return e.copy(l);const M=x*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),e.copy(i).addScaledVector(bo,f);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return ly.subVectors(l,r),f=(g-m)/(g-m+(x-E)),e.copy(r).addScaledVector(ly,f);const y=1/(S+M+v);return u=M*y,f=v*y,e.copy(i).addScaledVector(To,u).addScaledVector(bo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},ku={h:0,s:0,l:0};function dp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Pe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ne.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ne.workingColorSpace){if(t=KT(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,u=2*i-l;this.r=dp(u,l,t+1/3),this.g=dp(u,l,t),this.b=dp(u,l,t-1/3)}return Ne.toWorkingColorSpace(this,r),this}setStyle(t,e=Fi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fi){const i=Cx[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fi){return Ne.fromWorkingColorSpace(Vn.copy(this),t),Math.round(xe(Vn.r*255,0,255))*65536+Math.round(xe(Vn.g*255,0,255))*256+Math.round(xe(Vn.b*255,0,255))}getHexString(t=Fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Vn.copy(this),e);const i=Vn.r,r=Vn.g,l=Vn.b,u=Math.max(i,r,l),f=Math.min(i,r,l);let d,p;const m=(f+u)/2;if(f===u)d=0,p=0;else{const g=u-f;switch(p=m<=.5?g/(u+f):g/(2-u-f),u){case i:d=(r-l)/g+(r<l?6:0);break;case r:d=(l-i)/g+2;break;case l:d=(i-r)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,e=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Fi){Ne.fromWorkingColorSpace(Vn.copy(this),t);const e=Vn.r,i=Vn.g,r=Vn.b;return t!==Fi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Er),this.setHSL(Er.h+t,Er.s+e,Er.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Er),t.getHSL(ku);const i=Kd(Er.h,ku.h,e),r=Kd(Er.s,ku.s,e),l=Kd(Er.l,ku.l,e);return this.setHSL(i,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*r,this.g=l[1]*e+l[4]*i+l[7]*r,this.b=l[2]*e+l[5]*i+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Pe;Pe.NAMES=Cx;let pb=0;class Rc extends el{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=bc(),this.name="",this.type="Material",this.blending=zo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Op,this.blendDst=Np,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Op&&(i.blendSrc=this.blendSrc),this.blendDst!==Np&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(e){const l=r(t.textures),u=r(t.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let l=0;l!==r;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uo extends Rc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new nt,Xu=new pe;let mb=0;class pa{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zv,this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xu.fromBufferAttribute(this,e),Xu.applyMatrix3(t),this.setXY(e,Xu.x,Xu.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ec(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ec(e,this.array)),e}setX(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ec(e,this.array)),e}setY(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ec(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ec(e,this.array)),e}setW(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),r=ii(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,l){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),r=ii(r,this.array),l=ii(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zv&&(t.usage=this.usage),t}}class wx extends pa{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dx extends pa{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ta extends pa{constructor(t,e,i){super(new Float32Array(t),e,i)}}let _b=0;const Ii=new nn,pp=new si,Ao=new nt,yi=new Ac,rc=new Ac,Cn=new nt;class ea extends el{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=bc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ax(t)?Dx:wx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new he().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,i){return Ii.makeTranslation(t,e,i),this.applyMatrix4(Ii),this}scale(t,e,i){return Ii.makeScale(t,e,i),this.applyMatrix4(Ii),this}lookAt(t){return pp.lookAt(t),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ta(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ac);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const l=e[i];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];rc.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(yi.min,rc.min),yi.expandByPoint(Cn),Cn.addVectors(yi.max,rc.max),yi.expandByPoint(Cn)):(yi.expandByPoint(rc.min),yi.expandByPoint(rc.max))}yi.getCenter(i);let r=0;for(let l=0,u=t.count;l<u;l++)Cn.fromBufferAttribute(t,l),r=Math.max(r,i.distanceToSquared(Cn));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Cn.fromBufferAttribute(f,p),d&&(Ao.fromBufferAttribute(t,p),Cn.add(Ao)),r=Math.max(r,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pa(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<i.count;B++)f[B]=new nt,d[B]=new nt;const p=new nt,m=new nt,g=new nt,v=new pe,x=new pe,E=new pe,M=new nt,S=new nt;function y(B,b,A){p.fromBufferAttribute(i,B),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,A),v.fromBufferAttribute(l,B),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,A),m.sub(p),g.sub(p),x.sub(v),E.sub(v);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(H),f[B].add(M),f[b].add(M),f[A].add(M),d[B].add(S),d[b].add(S),d[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let B=0,b=L.length;B<b;++B){const A=L[B],H=A.start,st=A.count;for(let K=H,ut=H+st;K<ut;K+=3)y(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const U=new nt,R=new nt,O=new nt,P=new nt;function N(B){O.fromBufferAttribute(r,B),P.copy(O);const b=f[B];U.copy(b),U.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(P,b);const H=R.dot(d[B])<0?-1:1;u.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,b=L.length;B<b;++B){const A=L[B],H=A.start,st=A.count;for(let K=H,ut=H+st;K<ut;K+=3)N(t.getX(K+0)),N(t.getX(K+1)),N(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pa(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const r=new nt,l=new nt,u=new nt,f=new nt,d=new nt,p=new nt,m=new nt,g=new nt;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),u.fromBufferAttribute(e,S),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),p.fromBufferAttribute(i,S),f.add(m),d.add(m),p.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=e.count;v<x;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,d){const p=f.array,m=f.itemSize,g=f.normalized,v=new p.constructor(d.length*m);let x=0,E=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*m;for(let y=0;y<m;y++)v[E++]=p[x++]}return new pa(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ea,i=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=t(d,i);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const v=p[m],x=t(v,i);d.push(x)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,v=p.length;g<v;g++){const x=p[g];m.push(x.toJSON(t.data))}m.length>0&&(r[d]=m,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(e))}const l=t.morphAttributes;for(const p in l){const m=[],g=l[p];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(e));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cy=new nn,fs=new Nf,Wu=new Of,uy=new nt,Yu=new nt,qu=new nt,ju=new nt,mp=new nt,Zu=new nt,fy=new nt,Ku=new nt;class Hi extends si{constructor(t=new ea,e=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Zu.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],g=l[d];m!==0&&(mp.fromBufferAttribute(g,t),u?Zu.addScaledVector(mp,m):Zu.addScaledVector(mp.sub(e),m))}e.add(Zu)}return e}raycast(t,e){const i=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wu.copy(i.boundingSphere),Wu.applyMatrix4(l),fs.copy(t.ray).recast(t.near),!(Wu.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Wu,uy)===null||fs.origin.distanceToSquared(uy)>(t.far-t.near)**2))&&(cy.copy(l).invert(),fs.copy(t.ray).applyMatrix4(cy),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,O=U;R<O;R+=3){const P=f.getX(R),N=f.getX(R+1),B=f.getX(R+2);r=Qu(this,y,t,i,p,m,g,P,N,B),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const L=f.getX(S),U=f.getX(S+1),R=f.getX(S+2);r=Qu(this,u,t,i,p,m,g,L,U,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,O=U;R<O;R+=3){const P=R,N=R+1,B=R+2;r=Qu(this,y,t,i,p,m,g,P,N,B),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const L=S,U=S+1,R=S+2;r=Qu(this,u,t,i,p,m,g,L,U,R),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}}function gb(o,t,e,i,r,l,u,f){let d;if(t.side===ai?d=i.intersectTriangle(u,l,r,!0,f):d=i.intersectTriangle(r,l,u,t.side===Ir,f),d===null)return null;Ku.copy(f),Ku.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ku);return p<e.near||p>e.far?null:{distance:p,point:Ku.clone(),object:o}}function Qu(o,t,e,i,r,l,u,f,d,p){o.getVertexPosition(f,Yu),o.getVertexPosition(d,qu),o.getVertexPosition(p,ju);const m=gb(o,t,e,i,Yu,qu,ju,fy);if(m){const g=new nt;Qi.getBarycoord(fy,Yu,qu,ju,g),r&&(m.uv=Qi.getInterpolatedAttribute(r,f,d,p,g,new pe)),l&&(m.uv1=Qi.getInterpolatedAttribute(l,f,d,p,g,new pe)),u&&(m.normal=Qi.getInterpolatedAttribute(u,f,d,p,g,new nt),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new nt,materialIndex:0};Qi.getNormal(Yu,qu,ju,v.normal),m.face=v,m.barycoord=g}return m}class nl extends ea{constructor(t=1,e=1,i=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,i,e,t,u,l,0),E("z","y","x",1,-1,i,e,-t,u,l,1),E("x","z","y",1,1,t,i,e,r,u,2),E("x","z","y",1,-1,t,i,-e,r,u,3),E("x","y","z",1,-1,t,e,i,r,l,4),E("x","y","z",-1,-1,t,e,-i,r,l,5),this.setIndex(d),this.setAttribute("position",new ta(p,3)),this.setAttribute("normal",new ta(m,3)),this.setAttribute("uv",new ta(g,2));function E(M,S,y,L,U,R,O,P,N,B,b){const A=R/N,H=O/B,st=R/2,K=O/2,ut=P/2,ct=N+1,X=B+1;let $=0,W=0;const yt=new nt;for(let z=0;z<X;z++){const it=z*H-K;for(let Et=0;Et<ct;Et++){const Ct=Et*A-st;yt[M]=Ct*L,yt[S]=it*U,yt[y]=ut,p.push(yt.x,yt.y,yt.z),yt[M]=0,yt[S]=0,yt[y]=P>0?1:-1,m.push(yt.x,yt.y,yt.z),g.push(Et/N),g.push(1-z/B),$+=1}}for(let z=0;z<B;z++)for(let it=0;it<N;it++){const Et=v+it+ct*z,Ct=v+it+ct*(z+1),q=v+(it+1)+ct*(z+1),dt=v+(it+1)+ct*z;d.push(Et,Ct,dt),d.push(Ct,q,dt),W+=6}f.addGroup(x,W,b),x+=W,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jo(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const r=o[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Kn(o){const t={};for(let e=0;e<o.length;e++){const i=jo(o[e]);for(const r in i)t[r]=i[r]}return t}function vb(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Lx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const yb={clone:jo,merge:Kn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Rc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jo(t.uniforms),this.uniformsGroups=vb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ux extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Wa}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new nt,hy=new pe,dy=new pe;class Qn extends Ux{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vm*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vm*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z)}getViewSize(t,e){return this.getViewBounds(t,hy,dy),e.subVectors(dy,hy)}setViewOffset(t,e,i,r,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zd*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,e-=u.offsetY*i/p,r*=u.width/d,i*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ro=-90,Co=1;class Mb extends si{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Ro,Co,t,e);r.layers=this.layers,this.add(r);const l=new Qn(Ro,Co,t,e);l.layers=this.layers,this.add(l);const u=new Qn(Ro,Co,t,e);u.layers=this.layers,this.add(u);const f=new Qn(Ro,Co,t,e);f.layers=this.layers,this.add(f);const d=new Qn(Ro,Co,t,e);d.layers=this.layers,this.add(d);const p=new Qn(Ro,Co,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,l,u,f,d]=e;for(const p of e)this.remove(p);if(t===Wa)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,l),t.setRenderTarget(i,1,r),t.render(e,u),t.setRenderTarget(i,2,r),t.render(e,f),t.setRenderTarget(i,3,r),t.render(e,d),t.setRenderTarget(i,4,r),t.render(e,p),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,m),t.setRenderTarget(g,v,x),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Ox extends ri{constructor(t,e,i,r,l,u,f,d,p,m){t=t!==void 0?t:[],e=e!==void 0?e:ko,super(t,e,i,r,l,u,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eb extends Ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ox(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ha}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nl(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:Ur});l.uniforms.tEquirect.value=e;const u=new Hi(r,l),f=e.minFilter;return e.minFilter===Es&&(e.minFilter=ha),new Mb(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,i,r){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,r);t.setRenderTarget(l)}}class Ju extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class _p{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ju,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ju,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ju,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,i),y=this._getHandJoint(p,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ju;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class bb extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gp=new nt,Ab=new nt,Rb=new he;class br{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=gp.subVectors(i,e).cross(Ab.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(gp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Rb.getNormalMatrix(t),r=this.coplanarPoint(gp).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Of,$u=new nt;class Nx{constructor(t=new br,e=new br,i=new br,r=new br,l=new br,u=new br){this.planes=[t,e,i,r,l,u]}set(t,e,i,r,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wa){const i=this.planes,r=t.elements,l=r[0],u=r[1],f=r[2],d=r[3],p=r[4],m=r[5],g=r[6],v=r[7],x=r[8],E=r[9],M=r[10],S=r[11],y=r[12],L=r[13],U=r[14],R=r[15];if(i[0].setComponents(d-l,v-p,S-x,R-y).normalize(),i[1].setComponents(d+l,v+p,S+x,R+y).normalize(),i[2].setComponents(d+u,v+m,S+E,R+L).normalize(),i[3].setComponents(d-u,v-m,S-E,R-L).normalize(),i[4].setComponents(d-f,v-g,S-M,R-U).normalize(),e===Wa)i[5].setComponents(d+f,v+g,S+M,R+U).normalize();else if(e===yf)i[5].setComponents(f,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if($u.x=r.normal.x>0?t.max.x:t.min.x,$u.y=r.normal.y>0?t.max.y:t.min.y,$u.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($u)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sf extends Rc{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mf=new nt,Ef=new nt,py=new nn,sc=new Nf,tf=new Of,vp=new nt,my=new nt;class Ym extends si{constructor(t=new ea,e=new Sf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,l=e.count;r<l;r++)Mf.fromBufferAttribute(e,r-1),Ef.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Mf.distanceTo(Ef);t.setAttribute("lineDistance",new ta(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tf.copy(i.boundingSphere),tf.applyMatrix4(r),tf.radius+=l,t.ray.intersectsSphere(tf)===!1)return;py.copy(r).invert(),sc.copy(t.ray).applyMatrix4(py);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=p){const y=m.getX(M),L=m.getX(M+1),U=ef(this,t,sc,d,y,L,M);U&&e.push(U)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=ef(this,t,sc,d,M,S,E-1);y&&e.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=p){const y=ef(this,t,sc,d,M,M+1,M);y&&e.push(y)}if(this.isLineLoop){const M=ef(this,t,sc,d,E-1,x,E-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ef(o,t,e,i,r,l,u){const f=o.geometry.attributes.position;if(Mf.fromBufferAttribute(f,r),Ef.fromBufferAttribute(f,l),e.distanceSqToSegment(Mf,Ef,vp,my)>i)return;vp.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(vp);if(!(p<t.near||p>t.far))return{distance:p,point:my.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}class Px extends ri{constructor(t,e,i,r,l,u,f,d,p,m=Io){if(m!==Io&&m!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Io&&(i=ws),i===void 0&&m===Yo&&(i=Wo),super(null,r,l,u,f,d,m,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=f!==void 0?f:$i,this.minFilter=d!==void 0?d:$i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tf extends ea{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const l=[],u=[],f=[],d=[],p=new nt,m=new pe;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=e;g++,v+=3){const x=i+g/e*r;p.x=t*Math.cos(x),p.y=t*Math.sin(x),u.push(p.x,p.y,p.z),f.push(0,0,1),m.x=(u[v]/t+1)/2,m.y=(u[v+1]/t+1)/2,d.push(m.x,m.y)}for(let g=1;g<=e;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new ta(u,3)),this.setAttribute("normal",new ta(f,3)),this.setAttribute("uv",new ta(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pf extends ea{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const l=t/2,u=e/2,f=Math.floor(i),d=Math.floor(r),p=f+1,m=d+1,g=t/f,v=e/d,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const L=y*v-u;for(let U=0;U<p;U++){const R=U*g-l;E.push(R,-L,0),M.push(0,0,1),S.push(U/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<f;L++){const U=L+p*y,R=L+p*(y+1),O=L+1+p*(y+1),P=L+1+p*y;x.push(U,R,P),x.push(R,O,P)}this.setIndex(x),this.setAttribute("position",new ta(E,3)),this.setAttribute("normal",new ta(M,3)),this.setAttribute("uv",new ta(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cb extends Rc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wb extends Rc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class df extends Ux{constructor(t=-1,e=1,i=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=i-t,u=i+t,f=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Db extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const _y=new nn;class Lb{constructor(t,e,i=0,r=1/0){this.ray=new Nf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Wm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _y.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_y),this}intersectObject(t,e=!0,i=[]){return ym(t,this,i,e),i.sort(gy),i}intersectObjects(t,e=!0,i=[]){for(let r=0,l=t.length;r<l;r++)ym(t[r],this,i,e);return i.sort(gy),i}}function gy(o,t){return o.distance-t.distance}function ym(o,t,e,i){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const l=o.children;for(let u=0,f=l.length;u<f;u++)ym(l[u],t,e,!0)}}class vy{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function yy(o,t,e,i){const r=Ub(i);switch(e){case vx:return o*t;case xx:return o*t;case Sx:return o*t*2;case Mx:return o*t/r.components*r.byteLength;case Vm:return o*t/r.components*r.byteLength;case Ex:return o*t*2/r.components*r.byteLength;case Gm:return o*t*2/r.components*r.byteLength;case yx:return o*t*3/r.components*r.byteLength;case Ji:return o*t*4/r.components*r.byteLength;case km:return o*t*4/r.components*r.byteLength;case lf:case cf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case uf:case ff:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:case Zp:return Math.max(o,16)*Math.max(t,8)/4;case Yp:case jp:return Math.max(o,8)*Math.max(t,8)/2;case Kp:case Qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $p:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case tm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case em:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case im:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case am:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case rm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case sm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case om:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case cm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case um:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case hm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case hf:case dm:case pm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Tx:case mm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case _m:case gm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ub(o){switch(o){case qa:case mx:return{byteLength:1,components:1};case _c:case _x:case Tc:return{byteLength:2,components:1};case Fm:case Hm:return{byteLength:2,components:4};case ws:case Bm:case Xa:return{byteLength:4,components:1};case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let o=null,t=!1,e=null,i=null;function r(l,u){e(l,u),i=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function Ob(o){const t=new WeakMap;function e(f,d){const p=f.array,m=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,p){const m=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];o.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,d),p.version=f.version}}return{get:r,remove:l,update:u}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,jb=`#ifdef USE_BUMPMAP
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i1=`#define PI 3.141592653589793
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
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
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
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
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
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
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
#endif`,U1=`struct PhysicalMaterial {
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
}`,O1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nA=`#ifdef USE_NORMALMAP
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
#endif`,iA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vA=`float getShadowMask() {
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
}`,yA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,SA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MA=`#ifdef USE_SKINNING
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
#endif`,EA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#ifdef USE_TRANSMISSION
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,HA=`#if DEPTH_PACKING == 3200
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
}`,VA=`#define DISTANCE
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
}`,GA=`#define DISTANCE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`uniform float scale;
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
}`,YA=`uniform vec3 diffuse;
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
}`,qA=`#include <common>
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
}`,jA=`uniform vec3 diffuse;
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
}`,ZA=`#define LAMBERT
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
}`,KA=`#define LAMBERT
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
}`,QA=`#define MATCAP
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
}`,JA=`#define MATCAP
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
}`,$A=`#define NORMAL
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
}`,tR=`#define NORMAL
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
}`,eR=`#define PHONG
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
}`,nR=`#define PHONG
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
}`,iR=`#define STANDARD
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
}`,aR=`#define STANDARD
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
}`,rR=`#define TOON
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
}`,sR=`#define TOON
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
}`,oR=`uniform float size;
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
}`,lR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,uR=`uniform vec3 color;
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
}`,fR=`uniform float rotation;
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
}`,hR=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Nb,alphahash_pars_fragment:Pb,alphamap_fragment:zb,alphamap_pars_fragment:Ib,alphatest_fragment:Bb,alphatest_pars_fragment:Fb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:kb,begin_vertex:Xb,beginnormal_vertex:Wb,bsdfs:Yb,iridescence_fragment:qb,bumpmap_pars_fragment:jb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Kb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:$b,color_pars_fragment:t1,color_pars_vertex:e1,color_vertex:n1,common:i1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:l1,emissivemap_pars_fragment:c1,colorspace_fragment:u1,colorspace_pars_fragment:f1,envmap_fragment:h1,envmap_common_pars_fragment:d1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:A1,envmap_vertex:_1,fog_vertex:g1,fog_pars_vertex:v1,fog_fragment:y1,fog_pars_fragment:x1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:M1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:T1,lights_pars_begin:b1,lights_toon_fragment:R1,lights_toon_pars_fragment:C1,lights_phong_fragment:w1,lights_phong_pars_fragment:D1,lights_physical_fragment:L1,lights_physical_pars_fragment:U1,lights_fragment_begin:O1,lights_fragment_maps:N1,lights_fragment_end:P1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:F1,map_fragment:H1,map_pars_fragment:V1,map_particle_fragment:G1,map_particle_pars_fragment:k1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:W1,morphinstance_vertex:Y1,morphcolor_vertex:q1,morphnormal_vertex:j1,morphtarget_pars_vertex:Z1,morphtarget_vertex:K1,normal_fragment_begin:Q1,normal_fragment_maps:J1,normal_pars_fragment:$1,normal_pars_vertex:tA,normal_vertex:eA,normalmap_pars_fragment:nA,clearcoat_normal_fragment_begin:iA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:rA,iridescence_pars_fragment:sA,opaque_fragment:oA,packing:lA,premultiplied_alpha_fragment:cA,project_vertex:uA,dithering_fragment:fA,dithering_pars_fragment:hA,roughnessmap_fragment:dA,roughnessmap_pars_fragment:pA,shadowmap_pars_fragment:mA,shadowmap_pars_vertex:_A,shadowmap_vertex:gA,shadowmask_pars_fragment:vA,skinbase_vertex:yA,skinning_pars_vertex:xA,skinning_vertex:SA,skinnormal_vertex:MA,specularmap_fragment:EA,specularmap_pars_fragment:TA,tonemapping_fragment:bA,tonemapping_pars_fragment:AA,transmission_fragment:RA,transmission_pars_fragment:CA,uv_pars_fragment:wA,uv_pars_vertex:DA,uv_vertex:LA,worldpos_vertex:UA,background_vert:OA,background_frag:NA,backgroundCube_vert:PA,backgroundCube_frag:zA,cube_vert:IA,cube_frag:BA,depth_vert:FA,depth_frag:HA,distanceRGBA_vert:VA,distanceRGBA_frag:GA,equirect_vert:kA,equirect_frag:XA,linedashed_vert:WA,linedashed_frag:YA,meshbasic_vert:qA,meshbasic_frag:jA,meshlambert_vert:ZA,meshlambert_frag:KA,meshmatcap_vert:QA,meshmatcap_frag:JA,meshnormal_vert:$A,meshnormal_frag:tR,meshphong_vert:eR,meshphong_frag:nR,meshphysical_vert:iR,meshphysical_frag:aR,meshtoon_vert:rR,meshtoon_frag:sR,points_vert:oR,points_frag:lR,shadow_vert:cR,shadow_frag:uR,sprite_vert:fR,sprite_frag:hR},Pt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ua={basic:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Kn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Kn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Kn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Kn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Kn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Kn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Kn([Pt.common,Pt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Kn([Pt.lights,Pt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ua.physical={uniforms:Kn([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const nf={r:0,b:0,g:0},ds=new ja,dR=new nn;function pR(o,t,e,i,r,l,u){const f=new Pe(0);let d=l===!0?0:1,p,m,g=null,v=0,x=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function M(U){let R=!1;const O=E(U);O===null?y(f,d):O&&O.isColor&&(y(O,1),R=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,R){const O=E(R);O&&(O.isCubeTexture||O.mapping===Uf)?(m===void 0&&(m=new Hi(new nl(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:jo(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ds.copy(R.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(dR.makeRotationFromEuler(ds)),m.material.toneMapped=Ne.getTransfer(O.colorSpace)!==Fe,(g!==O||v!==O.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=O,v=O.version,x=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Hi(new Pf(2,2),new Br({name:"BackgroundMaterial",uniforms:jo(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,x=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,R){U.getRGB(nf,Lx(o)),i.buffers.color.setClear(nf.r,nf.g,nf.b,R,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,R=1){f.set(U),d=R,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(f,d)},render:M,addToRenderList:S,dispose:L}}function mR(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},r=v(null);let l=r,u=!1;function f(A,H,st,K,ut){let ct=!1;const X=g(K,st,H);l!==X&&(l=X,p(l.object)),ct=x(A,K,st,ut),ct&&E(A,K,st,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ct||u)&&(u=!1,R(A,H,st,K),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function m(A){return o.deleteVertexArray(A)}function g(A,H,st){const K=st.wireframe===!0;let ut=i[A.id];ut===void 0&&(ut={},i[A.id]=ut);let ct=ut[H.id];ct===void 0&&(ct={},ut[H.id]=ct);let X=ct[K];return X===void 0&&(X=v(d()),ct[K]=X),X}function v(A){const H=[],st=[],K=[];for(let ut=0;ut<e;ut++)H[ut]=0,st[ut]=0,K[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:K,object:A,attributes:{},index:null}}function x(A,H,st,K){const ut=l.attributes,ct=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){const z=ut[W];let it=ct[W];if(it===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),z===void 0||z.attribute!==it||it&&z.data!==it.data)return!0;X++}return l.attributesNum!==X||l.index!==K}function E(A,H,st,K){const ut={},ct=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){let z=ct[W];z===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));const it={};it.attribute=z,z&&z.data&&(it.data=z.data),ut[W]=it,X++}l.attributes=ut,l.attributesNum=X,l.index=K}function M(){const A=l.newAttributes;for(let H=0,st=A.length;H<st;H++)A[H]=0}function S(A){y(A,0)}function y(A,H){const st=l.newAttributes,K=l.enabledAttributes,ut=l.attributeDivisors;st[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ut[A]!==H&&(o.vertexAttribDivisor(A,H),ut[A]=H)}function L(){const A=l.newAttributes,H=l.enabledAttributes;for(let st=0,K=H.length;st<K;st++)H[st]!==A[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function U(A,H,st,K,ut,ct,X){X===!0?o.vertexAttribIPointer(A,H,st,ut,ct):o.vertexAttribPointer(A,H,st,K,ut,ct)}function R(A,H,st,K){M();const ut=K.attributes,ct=st.getAttributes(),X=H.defaultAttributeValues;for(const $ in ct){const W=ct[$];if(W.location>=0){let yt=ut[$];if(yt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const z=yt.normalized,it=yt.itemSize,Et=t.get(yt);if(Et===void 0)continue;const Ct=Et.buffer,q=Et.type,dt=Et.bytesPerElement,St=q===o.INT||q===o.UNSIGNED_INT||yt.gpuType===Bm;if(yt.isInterleavedBufferAttribute){const Rt=yt.data,wt=Rt.stride,te=yt.offset;if(Rt.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)y(W.location+zt,Rt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let zt=0;zt<W.locationSize;zt++)S(W.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let zt=0;zt<W.locationSize;zt++)U(W.location+zt,it/W.locationSize,q,z,wt*dt,(te+it/W.locationSize*zt)*dt,St)}else{if(yt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)y(W.location+Rt,yt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)S(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let Rt=0;Rt<W.locationSize;Rt++)U(W.location+Rt,it/W.locationSize,q,z,it*dt,it/W.locationSize*Rt*dt,St)}}else if(X!==void 0){const z=X[$];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(W.location,z);break;case 3:o.vertexAttrib3fv(W.location,z);break;case 4:o.vertexAttrib4fv(W.location,z);break;default:o.vertexAttrib1fv(W.location,z)}}}}L()}function O(){B();for(const A in i){const H=i[A];for(const st in H){const K=H[st];for(const ut in K)m(K[ut].object),delete K[ut];delete H[st]}delete i[A]}}function P(A){if(i[A.id]===void 0)return;const H=i[A.id];for(const st in H){const K=H[st];for(const ut in K)m(K[ut].object),delete K[ut];delete H[st]}delete i[A.id]}function N(A){for(const H in i){const st=i[H];if(st[A.id]===void 0)continue;const K=st[A.id];for(const ut in K)m(K[ut].object),delete K[ut];delete st[A.id]}}function B(){b(),u=!0,l!==r&&(l=r,p(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function _R(o,t,e){let i;function r(p){i=p}function l(p,m){o.drawArrays(i,p,m),e.update(m,i,1)}function u(p,m,g){g!==0&&(o.drawArraysInstanced(i,p,m,g),e.update(m,i,g))}function f(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];e.update(x,i,1)}function d(p,m,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)u(p[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(i,p,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];e.update(E,i,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function gR(o,t,e,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(N){return!(N!==Ji&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const B=N===Tc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==qa&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Xa&&!B)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:O,maxSamples:P}}function vR(o){const t=this;let e=null,i=0,r=!1,l=!1;const u=new br,f=new he,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||r;return r=v,i=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!r||E===null||E.length===0||l&&!S)l?m(null):p();else{const L=l?0:i,U=L*4;let R=y.clippingState||null;d.value=R,R=m(E,v,U,x);for(let O=0;O!==U;++O)R[O]=e[O];y.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const y=x+M*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,R=x;U!==M;++U,R+=4)u.copy(g[U]).applyMatrix4(L,f),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function yR(o){let t=new WeakMap;function e(u,f){return f===Gp?u.mapping=ko:f===kp&&(u.mapping=Xo),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===Gp||f===kp)if(t.has(u)){const d=t.get(u).texture;return e(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Eb(d.height);return p.fromEquirectangularTexture(o,u),t.set(u,p),u.addEventListener("dispose",r),e(p.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const Oo=4,xy=[.125,.215,.35,.446,.526,.582],Ss=20,yp=new df,Sy=new Pe;let xp=null,Sp=0,Mp=0,Ep=!1;const vs=(1+Math.sqrt(5))/2,wo=1/vs,My=[new nt(-vs,wo,0),new nt(vs,wo,0),new nt(-wo,0,vs),new nt(wo,0,vs),new nt(0,vs,-wo),new nt(0,vs,wo),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],xR=new nt;class Ey{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,l={}){const{size:u=256,position:f=xR}=l;xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),Ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,r,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=by(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xp,Sp,Mp),this._renderer.xr.enabled=Ep,t.scissorTest=!1,af(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ko||t.mapping===Xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),Ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ha,minFilter:ha,generateMipmaps:!1,type:Tc,format:Ji,colorSpace:qo,depthBuffer:!1},r=Ty(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ty(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SR(l)),this._blurMaterial=MR(l,t,e)}return r}_compileMaterial(t){const e=new Hi(this._lodPlanes[0],t);this._renderer.compile(e,yp)}_sceneToCubeUV(t,e,i,r,l){const d=new Qn(90,1,e,i),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Sy),g.toneMapping=Or,g.autoClear=!1;const E=new Uo({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),M=new Hi(new nl,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(Sy),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):U===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const R=this._cubeSize;af(r,U*R,L>2?R:0,R,R),g.setRenderTarget(r),S&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ko||t.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=by());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new Hi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;af(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(u,yp)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=My[(r-l-1)%My.length];this._blur(t,l-1,l,u,f)}e.autoClear=i}_blur(t,e,i,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,r,"latitudinal",l),this._halfBlur(u,t,i,i,r,"longitudinal",l)}_halfBlur(t,e,i,r,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Hi(this._lodPlanes[r],p),v=p.uniforms,x=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):Ss;S>Ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const y=[];let L=0;for(let N=0;N<Ss;++N){const B=N/M,b=Math.exp(-B*B/2);y.push(b),N===0?L+=b:N<S&&(L+=2*b)}for(let N=0;N<y.length;N++)y[N]=y[N]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-i;const R=this._sizeLods[r],O=3*R*(r>U-Oo?r-U+Oo:0),P=4*(this._cubeSize-R);af(e,O,P,3*R,2*R),d.setRenderTarget(e),d.render(g,yp)}}function SR(o){const t=[],e=[],i=[];let r=o;const l=o-Oo+1+xy.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);e.push(f);let d=1/f;u>o-Oo?d=xy[u-o+Oo-1]:u===0&&(d=0),i.push(d);const p=1/(f-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,L=new Float32Array(M*E*x),U=new Float32Array(S*E*x),R=new Float32Array(y*E*x);for(let P=0;P<x;P++){const N=P%3*2/3-1,B=P>2?0:-1,b=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];L.set(b,M*E*P),U.set(v,S*E*P);const A=[P,P,P,P,P,P];R.set(A,y*E*P)}const O=new ea;O.setAttribute("position",new pa(L,M)),O.setAttribute("uv",new pa(U,S)),O.setAttribute("faceIndex",new pa(R,y)),t.push(O),r>Oo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ty(o,t,e){const i=new Ds(o,t,e);return i.texture.mapping=Uf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function af(o,t,e,i,r){o.viewport.set(t,e,i,r),o.scissor.set(t,e,i,r)}function MR(o,t,e){const i=new Float32Array(Ss),r=new nt(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qm(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function by(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qm(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Ay(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function qm(){return`

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
	`}function ER(o){let t=new WeakMap,e=null;function i(f){if(f&&f.isTexture){const d=f.mapping,p=d===Gp||d===kp,m=d===ko||d===Xo;if(p||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new Ey(o)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return p&&x&&x.height>0||m&&x&&r(x)?(e===null&&(e=new Ey(o)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:u}}function TR(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bR(o,t,e,i){const r={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,e.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function p(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const L=x.array;M=x.version;for(let U=0,R=L.length;U<R;U+=3){const O=L[U+0],P=L[U+1],N=L[U+2];v.push(O,P,P,N,N,O)}}else if(E!==void 0){const L=E.array;M=E.version;for(let U=0,R=L.length/3-1;U<R;U+=3){const O=U+0,P=U+1,N=U+2;v.push(O,P,P,N,N,O)}}else return;const S=new(Ax(v)?Dx:wx)(v,1);S.version=M;const y=l.get(g);y&&t.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function AR(o,t,e){let i;function r(v){i=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,x){o.drawElements(i,x,l,v*u),e.update(x,i,1)}function p(v,x,E){E!==0&&(o.drawElementsInstanced(i,x,l,v*u,E),e.update(x,i,E))}function m(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];e.update(S,i,1)}function g(v,x,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/u,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,v,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=x[L]*M[L];e.update(y,i,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function RR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function CR(o,t,e){const i=new WeakMap,r=new on;function l(u,f,d){const p=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let A=function(){B.dispose(),i.delete(f),f.removeEventListener("dispose",A)};var x=A;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let O=f.attributes.position.count*R,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*P*4*g),B=new Rx(N,O,P,g);B.type=Xa,B.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const st=y[H],K=L[H],ut=U[H],ct=O*P*4*H;for(let X=0;X<st.count;X++){const $=X*b;E===!0&&(r.fromBufferAttribute(st,X),N[ct+$+0]=r.x,N[ct+$+1]=r.y,N[ct+$+2]=r.z,N[ct+$+3]=0),M===!0&&(r.fromBufferAttribute(K,X),N[ct+$+4]=r.x,N[ct+$+5]=r.y,N[ct+$+6]=r.z,N[ct+$+7]=0),S===!0&&(r.fromBufferAttribute(ut,X),N[ct+$+8]=r.x,N[ct+$+9]=r.y,N[ct+$+10]=r.z,N[ct+$+11]=ut.itemSize===4?r.w:1)}}v={count:g,texture:B,size:new pe(O,P)},i.set(f,v),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function wR(o,t,e,i){let r=new WeakMap;function l(d){const p=i.render.frame,m=d.geometry,g=t.get(d,m);if(r.get(g)!==p&&(t.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return g}function u(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:u}}const Ix=new ri,Ry=new Px(1,1),Bx=new Rx,Fx=new sb,Hx=new Ox,Cy=[],wy=[],Dy=new Float32Array(16),Ly=new Float32Array(9),Uy=new Float32Array(4);function il(o,t,e){const i=o[0];if(i<=0||i>0)return o;const r=t*e;let l=Cy[r];if(l===void 0&&(l=new Float32Array(r),Cy[r]=l),t!==0){i.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,o[u].toArray(l,f)}return l}function Mn(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function En(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function zf(o,t){let e=wy[t];e===void 0&&(e=new Int32Array(t),wy[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function DR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function LR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2fv(this.addr,t),En(e,t)}}function UR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;o.uniform3fv(this.addr,t),En(e,t)}}function OR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4fv(this.addr,t),En(e,t)}}function NR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;Uy.set(i),o.uniformMatrix2fv(this.addr,!1,Uy),En(e,i)}}function PR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;Ly.set(i),o.uniformMatrix3fv(this.addr,!1,Ly),En(e,i)}}function zR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;Dy.set(i),o.uniformMatrix4fv(this.addr,!1,Dy),En(e,i)}}function IR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function BR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2iv(this.addr,t),En(e,t)}}function FR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;o.uniform3iv(this.addr,t),En(e,t)}}function HR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4iv(this.addr,t),En(e,t)}}function VR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function GR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2uiv(this.addr,t),En(e,t)}}function kR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;o.uniform3uiv(this.addr,t),En(e,t)}}function XR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4uiv(this.addr,t),En(e,t)}}function WR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Ry.compareFunction=bx,l=Ry):l=Ix,e.setTexture2D(t||l,r)}function YR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fx,r)}function qR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Hx,r)}function jR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Bx,r)}function ZR(o){switch(o){case 5126:return DR;case 35664:return LR;case 35665:return UR;case 35666:return OR;case 35674:return NR;case 35675:return PR;case 35676:return zR;case 5124:case 35670:return IR;case 35667:case 35671:return BR;case 35668:case 35672:return FR;case 35669:case 35673:return HR;case 5125:return VR;case 36294:return GR;case 36295:return kR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return jR}}function KR(o,t){o.uniform1fv(this.addr,t)}function QR(o,t){const e=il(t,this.size,2);o.uniform2fv(this.addr,e)}function JR(o,t){const e=il(t,this.size,3);o.uniform3fv(this.addr,e)}function $R(o,t){const e=il(t,this.size,4);o.uniform4fv(this.addr,e)}function tC(o,t){const e=il(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function eC(o,t){const e=il(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function nC(o,t){const e=il(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function iC(o,t){o.uniform1iv(this.addr,t)}function aC(o,t){o.uniform2iv(this.addr,t)}function rC(o,t){o.uniform3iv(this.addr,t)}function sC(o,t){o.uniform4iv(this.addr,t)}function oC(o,t){o.uniform1uiv(this.addr,t)}function lC(o,t){o.uniform2uiv(this.addr,t)}function cC(o,t){o.uniform3uiv(this.addr,t)}function uC(o,t){o.uniform4uiv(this.addr,t)}function fC(o,t,e){const i=this.cache,r=t.length,l=zf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||Ix,l[u])}function hC(o,t,e){const i=this.cache,r=t.length,l=zf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||Fx,l[u])}function dC(o,t,e){const i=this.cache,r=t.length,l=zf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||Hx,l[u])}function pC(o,t,e){const i=this.cache,r=t.length,l=zf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||Bx,l[u])}function mC(o){switch(o){case 5126:return KR;case 35664:return QR;case 35665:return JR;case 35666:return $R;case 35674:return tC;case 35675:return eC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return aC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return oC;case 36294:return lC;case 36295:return cC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return hC;case 35680:case 36300:case 36308:case 36293:return dC;case 36289:case 36303:case 36311:case 36292:return pC}}class _C{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ZR(e.type)}}class gC{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mC(e.type)}}class vC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(t,e[f.id],i)}}}const Tp=/(\w+)(\])?(\[|\.)?/g;function Oy(o,t){o.seq.push(t),o.map[t.id]=t}function yC(o,t,e){const i=o.name,r=i.length;for(Tp.lastIndex=0;;){const l=Tp.exec(i),u=Tp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===r){Oy(e,p===void 0?new _C(f,o,t):new gC(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new vC(f),Oy(e,g)),e=g}}}class pf{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=t.getActiveUniform(e,r),u=t.getUniformLocation(e,l.name);yC(l,u,this)}}setValue(t,e,i,r){const l=this.map[e];l!==void 0&&l.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let l=0,u=e.length;l!==u;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in e&&i.push(u)}return i}}function Ny(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const xC=37297;let SC=0;function MC(o,t){const e=o.split(`
`),i=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=r;u<l;u++){const f=u+1;i.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return i.join(`
`)}const Py=new he;function EC(o){Ne._getMatrix(Py,Ne.workingColorSpace,o);const t=`mat3( ${Py.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(o)){case vf:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function zy(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),r=o.getShaderInfoLog(t).trim();if(i&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+MC(o.getShaderSource(t),u)}else return r}function TC(o,t){const e=EC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bC(o,t){let e;switch(t){case LT:e="Linear";break;case UT:e="Reinhard";break;case OT:e="Cineon";break;case NT:e="ACESFilmic";break;case zT:e="AgX";break;case IT:e="Neutral";break;case PT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rf=new nt;function AC(){Ne.getLuminanceCoefficients(rf);const o=rf.x.toFixed(4),t=rf.y.toFixed(4),e=rf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uc).join(`
`)}function CC(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wC(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const l=o.getActiveAttrib(t,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return e}function uc(o){return o!==""}function Iy(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function By(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DC=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(o){return o.replace(DC,UC)}const LC=new Map;function UC(o,t){let e=de[t];if(e===void 0){const i=LC.get(t);if(i!==void 0)e=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xm(e)}const OC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fy(o){return o.replace(OC,NC)}function NC(o,t,e,i){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Hy(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function PC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===uT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ha&&(t="SHADOWMAP_TYPE_VSM"),t}function zC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ko:case Xo:t="ENVMAP_TYPE_CUBE";break;case Uf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function IC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xo:t="ENVMAP_MODE_REFRACTION";break}return t}function BC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dx:t="ENVMAP_BLENDING_MULTIPLY";break;case wT:t="ENVMAP_BLENDING_MIX";break;case DT:t="ENVMAP_BLENDING_ADD";break}return t}function FC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function HC(o,t,e,i){const r=o.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const d=PC(e),p=zC(e),m=IC(e),g=BC(e),v=FC(e),x=RC(e),E=CC(l),M=r.createProgram();let S,y,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(uc).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(uc).join(`
`),y.length>0&&(y+=`
`)):(S=[Hy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uc).join(`
`),y=[Hy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Or?"#define TONE_MAPPING":"",e.toneMapping!==Or?de.tonemapping_pars_fragment:"",e.toneMapping!==Or?bC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,TC("linearToOutputTexel",e.outputColorSpace),AC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uc).join(`
`)),u=xm(u),u=Iy(u,e),u=By(u,e),f=xm(f),f=Iy(f,e),f=By(f,e),u=Fy(u),f=Fy(f),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+S+u,R=L+y+f,O=Ny(r,r.VERTEX_SHADER,U),P=Ny(r,r.FRAGMENT_SHADER,R);r.attachShader(M,O),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(H){if(o.debug.checkShaderErrors){const st=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(O).trim(),ut=r.getShaderInfoLog(P).trim();let ct=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,O,P);else{const $=zy(r,O,"vertex"),W=zy(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+$+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(K===""||ut==="")&&(X=!1);X&&(H.diagnostics={runnable:ct,programLog:st,vertexShader:{log:K,prefix:S},fragmentShader:{log:ut,prefix:y}})}r.deleteShader(O),r.deleteShader(P),B=new pf(r,M),b=wC(r,M)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(M,xC)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let VC=0;class GC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kC(t),e.set(t,i)),i}}class kC{constructor(t){this.id=VC++,this.code=t,this.usedTimes=0}}function XC(o,t,e,i,r,l,u){const f=new Wm,d=new GC,p=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function S(b,A,H,st,K){const ut=st.fog,ct=K.geometry,X=b.isMeshStandardMaterial?st.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),W=$&&$.mapping===Uf?$.image.height:null,yt=E[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const z=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,it=z!==void 0?z.length:0;let Et=0;ct.morphAttributes.position!==void 0&&(Et=1),ct.morphAttributes.normal!==void 0&&(Et=2),ct.morphAttributes.color!==void 0&&(Et=3);let Ct,q,dt,St;if(yt){const ge=ua[yt];Ct=ge.vertexShader,q=ge.fragmentShader}else Ct=b.vertexShader,q=b.fragmentShader,d.update(b),dt=d.getVertexShaderID(b),St=d.getFragmentShaderID(b);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,zt=K.isBatchedMesh===!0,Ae=!!b.map,we=!!b.matcap,se=!!$,G=!!b.aoMap,mn=!!b.lightMap,ce=!!b.bumpMap,ue=!!b.normalMap,Yt=!!b.displacementMap,De=!!b.emissiveMap,qt=!!b.metalnessMap,I=!!b.roughnessMap,C=b.anisotropy>0,at=b.clearcoat>0,pt=b.dispersion>0,Mt=b.iridescence>0,gt=b.sheen>0,Xt=b.transmission>0,Dt=C&&!!b.anisotropyMap,Vt=at&&!!b.clearcoatMap,_e=at&&!!b.clearcoatNormalMap,At=at&&!!b.clearcoatRoughnessMap,Gt=Mt&&!!b.iridescenceMap,Jt=Mt&&!!b.iridescenceThicknessMap,Wt=gt&&!!b.sheenColorMap,Ft=gt&&!!b.sheenRoughnessMap,k=!!b.specularMap,ft=!!b.specularColorMap,Nt=!!b.specularIntensityMap,V=Xt&&!!b.transmissionMap,bt=Xt&&!!b.thicknessMap,lt=!!b.gradientMap,_t=!!b.alphaMap,Ut=b.alphaTest>0,Ot=!!b.alphaHash,Zt=!!b.extensions;let Re=Or;b.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Re=o.toneMapping);const Xe={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:Ct,fragmentShader:q,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:zt,batchingColor:zt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:qo,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:we,envMap:se,envMapMode:se&&$.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:mn,bumpMap:ce,normalMap:ue,displacementMap:v&&Yt,emissiveMap:De,normalMapObjectSpace:ue&&b.normalMapType===GT,normalMapTangentSpace:ue&&b.normalMapType===VT,metalnessMap:qt,roughnessMap:I,anisotropy:C,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Vt,clearcoatNormalMap:_e,clearcoatRoughnessMap:At,dispersion:pt,iridescence:Mt,iridescenceMap:Gt,iridescenceThicknessMap:Jt,sheen:gt,sheenColorMap:Wt,sheenRoughnessMap:Ft,specularMap:k,specularColorMap:ft,specularIntensityMap:Nt,transmission:Xt,transmissionMap:V,thicknessMap:bt,gradientMap:lt,opaque:b.transparent===!1&&b.blending===zo&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ut,alphaHash:Ot,combine:b.combine,mapUv:Ae&&M(b.map.channel),aoMapUv:G&&M(b.aoMap.channel),lightMapUv:mn&&M(b.lightMap.channel),bumpMapUv:ce&&M(b.bumpMap.channel),normalMapUv:ue&&M(b.normalMap.channel),displacementMapUv:Yt&&M(b.displacementMap.channel),emissiveMapUv:De&&M(b.emissiveMap.channel),metalnessMapUv:qt&&M(b.metalnessMap.channel),roughnessMapUv:I&&M(b.roughnessMap.channel),anisotropyMapUv:Dt&&M(b.anisotropyMap.channel),clearcoatMapUv:Vt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(b.sheenRoughnessMap.channel),specularMapUv:k&&M(b.specularMap.channel),specularColorMapUv:ft&&M(b.specularColorMap.channel),specularIntensityMapUv:Nt&&M(b.specularIntensityMap.channel),transmissionMapUv:V&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:_t&&M(b.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ue||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ct.attributes.uv&&(Ae||_t),fog:!!ut,useFog:b.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:wt,skinning:K.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ka,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function y(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(L(A,b),U(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function L(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function U(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=E[b.type];let H;if(A){const st=ua[A];H=yb.clone(st.uniforms)}else H=b.uniforms;return H}function O(b,A){let H;for(let st=0,K=m.length;st<K;st++){const ut=m[st];if(ut.cacheKey===A){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new HC(o,A,b,l),m.push(H)),H}function P(b){if(--b.usedTimes===0){const A=m.indexOf(b);m[A]=m[m.length-1],m.pop(),b.destroy()}}function N(b){d.remove(b)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:O,releaseProgram:P,releaseShaderCache:N,programs:m,dispose:B}}function WC(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:l}}function YC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Vy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Gy(){const o=[];let t=0;const e=[],i=[],r=[];function l(){t=0,e.length=0,i.length=0,r.length=0}function u(g,v,x,E,M,S){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),t++,y}function f(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):e.push(y)}function d(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?i.unshift(y):x.transparent===!0?r.unshift(y):e.unshift(y)}function p(g,v){e.length>1&&e.sort(g||YC),i.length>1&&i.sort(v||Vy),r.length>1&&r.sort(v||Vy)}function m(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:r,init:l,push:f,unshift:d,finish:m,sort:p}}function qC(){let o=new WeakMap;function t(i,r){const l=o.get(i);let u;return l===void 0?(u=new Gy,o.set(i,[u])):r>=l.length?(u=new Gy,l.push(u)):u=l[r],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function jC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new Pe};break;case"SpotLight":e={position:new nt,direction:new nt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":e={color:new Pe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=e,e}}}function ZC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let KC=0;function QC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function JC(o){const t=new jC,e=ZC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new nt);const r=new nt,l=new nn,u=new nn;function f(p){let m=0,g=0,v=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,L=0,U=0,R=0,O=0,P=0,N=0;p.sort(QC);for(let b=0,A=p.length;b<A;b++){const H=p[b],st=H.color,K=H.intensity,ut=H.distance,ct=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=st.r*K,g+=st.g*K,v+=st.b*K;else if(H.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(H.sh.coefficients[X],K);N++}else if(H.isDirectionalLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[x]=W,i.directionalShadowMap[x]=ct,i.directionalShadowMatrix[x]=H.shadow.matrix,L++}i.directional[x]=X,x++}else if(H.isSpotLight){const X=t.get(H);X.position.setFromMatrixPosition(H.matrixWorld),X.color.copy(st).multiplyScalar(K),X.distance=ut,X.coneCos=Math.cos(H.angle),X.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),X.decay=H.decay,i.spot[M]=X;const $=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,$.updateMatrices(H),H.castShadow&&P++),i.spotLightMatrix[M]=$.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=ct,R++}M++}else if(H.isRectAreaLight){const X=t.get(H);X.color.copy(st).multiplyScalar(K),X.halfWidth.set(H.width*.5,0,0),X.halfHeight.set(0,H.height*.5,0),i.rectArea[S]=X,S++}else if(H.isPointLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),X.distance=H.distance,X.decay=H.decay,H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=ct,i.pointShadowMatrix[E]=H.shadow.matrix,U++}i.point[E]=X,E++}else if(H.isHemisphereLight){const X=t.get(H);X.skyColor.copy(H.color).multiplyScalar(K),X.groundColor.copy(H.groundColor).multiplyScalar(K),i.hemi[y]=X,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==x||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==L||B.numPointShadows!==U||B.numSpotShadows!==R||B.numSpotMaps!==O||B.numLightProbes!==N)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=y,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,B.directionalLength=x,B.pointLength=E,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=L,B.numPointShadows=U,B.numSpotShadows=R,B.numSpotMaps=O,B.numLightProbes=N,i.version=KC++)}function d(p,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const U=p[y];if(U.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(S),g++}else if(U.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(U.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:i}}function ky(o){const t=new JC(o),e=[],i=[];function r(m){p.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function u(m){i.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}const p={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function $C(o){let t=new WeakMap;function e(r,l=0){const u=t.get(r);let f;return u===void 0?(f=new ky(o),t.set(r,[f])):l>=u.length?(f=new ky(o),u.push(f)):f=u[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function nw(o,t,e){let i=new Nx;const r=new pe,l=new pe,u=new on,f=new Cb({depthPacking:HT}),d=new wb,p={},m=e.maxTextureSize,g={[Ir]:ai,[ai]:Ir,[ka]:ka},v=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:tw,fragmentShader:ew}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new ea;E.setAttribute("position",new pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Hi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hx;let y=this.type;this.render=function(P,N,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ur),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const K=y!==Ha&&this.type===Ha,ut=y===Ha&&this.type!==Ha;for(let ct=0,X=P.length;ct<X;ct++){const $=P[ct],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const yt=W.getFrameExtents();if(r.multiply(yt),l.copy(W.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/yt.x),r.x=l.x*yt.x,W.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/yt.y),r.y=l.y*yt.y,W.mapSize.y=l.y)),W.map===null||K===!0||ut===!0){const it=this.type!==Ha?{minFilter:$i,magFilter:$i}:{};W.map!==null&&W.map.dispose(),W.map=new Ds(r.x,r.y,it),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const z=W.getViewportCount();for(let it=0;it<z;it++){const Et=W.getViewport(it);u.set(l.x*Et.x,l.y*Et.y,l.x*Et.z,l.y*Et.w),st.viewport(u),W.updateMatrices($,it),i=W.getFrustum(),R(N,B,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Ha&&L(W,B),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,A,H)};function L(P,N){const B=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ds(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,B,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,B,x,M,null)}function U(P,N,B,b){let A=null;const H=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)A=H;else if(A=B.isPointLight===!0?d:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const st=A.uuid,K=N.uuid;let ut=p[st];ut===void 0&&(ut={},p[st]=ut);let ct=ut[K];ct===void 0&&(ct=A.clone(),ut[K]=ct,N.addEventListener("dispose",O)),A=ct}if(A.visible=N.visible,A.wireframe=N.wireframe,b===Ha?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:g[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=B}return A}function R(P,N,B,b,A){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ha)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const K=t.update(P),ut=P.material;if(Array.isArray(ut)){const ct=K.groups;for(let X=0,$=ct.length;X<$;X++){const W=ct[X],yt=ut[W.materialIndex];if(yt&&yt.visible){const z=U(P,yt,b,A);P.onBeforeShadow(o,P,N,B,K,z,W),o.renderBufferDirect(B,null,K,z,P,W),P.onAfterShadow(o,P,N,B,K,z,W)}}}else if(ut.visible){const ct=U(P,ut,b,A);P.onBeforeShadow(o,P,N,B,K,ct,null),o.renderBufferDirect(B,null,K,ct,P,null),P.onAfterShadow(o,P,N,B,K,ct,null)}}const st=P.children;for(let K=0,ut=st.length;K<ut;K++)R(st[K],N,B,b,A)}function O(P){P.target.removeEventListener("dispose",O);for(const B in p){const b=p[B],A=P.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const iw={[Pp]:zp,[Ip]:Hp,[Bp]:Vp,[Go]:Fp,[zp]:Pp,[Hp]:Ip,[Vp]:Bp,[Fp]:Go};function aw(o,t){function e(){let V=!1;const bt=new on;let lt=null;const _t=new on(0,0,0,0);return{setMask:function(Ut){lt!==Ut&&!V&&(o.colorMask(Ut,Ut,Ut,Ut),lt=Ut)},setLocked:function(Ut){V=Ut},setClear:function(Ut,Ot,Zt,Re,Xe){Xe===!0&&(Ut*=Re,Ot*=Re,Zt*=Re),bt.set(Ut,Ot,Zt,Re),_t.equals(bt)===!1&&(o.clearColor(Ut,Ot,Zt,Re),_t.copy(bt))},reset:function(){V=!1,lt=null,_t.set(-1,0,0,0)}}}function i(){let V=!1,bt=!1,lt=null,_t=null,Ut=null;return{setReversed:function(Ot){if(bt!==Ot){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Re=Ut;Ut=null,this.setClear(Re)}bt=Ot},getReversed:function(){return bt},setTest:function(Ot){Ot?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!V&&(o.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(bt&&(Ot=iw[Ot]),_t!==Ot){switch(Ot){case Pp:o.depthFunc(o.NEVER);break;case zp:o.depthFunc(o.ALWAYS);break;case Ip:o.depthFunc(o.LESS);break;case Go:o.depthFunc(o.LEQUAL);break;case Bp:o.depthFunc(o.EQUAL);break;case Fp:o.depthFunc(o.GEQUAL);break;case Hp:o.depthFunc(o.GREATER);break;case Vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ot}},setLocked:function(Ot){V=Ot},setClear:function(Ot){Ut!==Ot&&(bt&&(Ot=1-Ot),o.clearDepth(Ot),Ut=Ot)},reset:function(){V=!1,lt=null,_t=null,Ut=null,bt=!1}}}function r(){let V=!1,bt=null,lt=null,_t=null,Ut=null,Ot=null,Zt=null,Re=null,Xe=null;return{setTest:function(ge){V||(ge?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(ge){bt!==ge&&!V&&(o.stencilMask(ge),bt=ge)},setFunc:function(ge,an,ln){(lt!==ge||_t!==an||Ut!==ln)&&(o.stencilFunc(ge,an,ln),lt=ge,_t=an,Ut=ln)},setOp:function(ge,an,ln){(Ot!==ge||Zt!==an||Re!==ln)&&(o.stencilOp(ge,an,ln),Ot=ge,Zt=an,Re=ln)},setLocked:function(ge){V=ge},setClear:function(ge){Xe!==ge&&(o.clearStencil(ge),Xe=ge)},reset:function(){V=!1,bt=null,lt=null,_t=null,Ut=null,Ot=null,Zt=null,Re=null,Xe=null}}}const l=new e,u=new i,f=new r,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,L=null,U=null,R=null,O=null,P=null,N=new Pe(0,0,0),B=0,b=!1,A=null,H=null,st=null,K=null,ut=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=$>=2);let yt=null,z={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Ct=new on().fromArray(it),q=new on().fromArray(Et);function dt(V,bt,lt,_t){const Ut=new Uint8Array(4),Ot=o.createTexture();o.bindTexture(V,Ot),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<lt;Zt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(bt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return Ot}const St={};St[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Rt(o.DEPTH_TEST),u.setFunc(Go),ce(!1),ue(Xv),Rt(o.CULL_FACE),G(Ur);function Rt(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function wt(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function te(V,bt){return g[V]!==bt?(o.bindFramebuffer(V,bt),g[V]=bt,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function zt(V,bt){let lt=x,_t=!1;if(V){lt=v.get(bt),lt===void 0&&(lt=[],v.set(bt,lt));const Ut=V.textures;if(lt.length!==Ut.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Ot=0,Zt=Ut.length;Ot<Zt;Ot++)lt[Ot]=o.COLOR_ATTACHMENT0+Ot;lt.length=Ut.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Ae(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const we={[xs]:o.FUNC_ADD,[hT]:o.FUNC_SUBTRACT,[dT]:o.FUNC_REVERSE_SUBTRACT};we[pT]=o.MIN,we[mT]=o.MAX;const se={[_T]:o.ZERO,[gT]:o.ONE,[vT]:o.SRC_COLOR,[Op]:o.SRC_ALPHA,[TT]:o.SRC_ALPHA_SATURATE,[MT]:o.DST_COLOR,[xT]:o.DST_ALPHA,[yT]:o.ONE_MINUS_SRC_COLOR,[Np]:o.ONE_MINUS_SRC_ALPHA,[ET]:o.ONE_MINUS_DST_COLOR,[ST]:o.ONE_MINUS_DST_ALPHA,[bT]:o.CONSTANT_COLOR,[AT]:o.ONE_MINUS_CONSTANT_COLOR,[RT]:o.CONSTANT_ALPHA,[CT]:o.ONE_MINUS_CONSTANT_ALPHA};function G(V,bt,lt,_t,Ut,Ot,Zt,Re,Xe,ge){if(V===Ur){M===!0&&(wt(o.BLEND),M=!1);return}if(M===!1&&(Rt(o.BLEND),M=!0),V!==fT){if(V!==S||ge!==b){if((y!==xs||R!==xs)&&(o.blendEquation(o.FUNC_ADD),y=xs,R=xs),ge)switch(V){case zo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wv:o.blendFunc(o.ONE,o.ONE);break;case Yv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Yv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,U=null,O=null,P=null,N.set(0,0,0),B=0,S=V,b=ge}return}Ut=Ut||bt,Ot=Ot||lt,Zt=Zt||_t,(bt!==y||Ut!==R)&&(o.blendEquationSeparate(we[bt],we[Ut]),y=bt,R=Ut),(lt!==L||_t!==U||Ot!==O||Zt!==P)&&(o.blendFuncSeparate(se[lt],se[_t],se[Ot],se[Zt]),L=lt,U=_t,O=Ot,P=Zt),(Re.equals(N)===!1||Xe!==B)&&(o.blendColor(Re.r,Re.g,Re.b,Xe),N.copy(Re),B=Xe),S=V,b=!1}function mn(V,bt){V.side===ka?wt(o.CULL_FACE):Rt(o.CULL_FACE);let lt=V.side===ai;bt&&(lt=!lt),ce(lt),V.blending===zo&&V.transparent===!1?G(Ur):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const _t=V.stencilWrite;f.setTest(_t),_t&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function ue(V){V!==lT?(Rt(o.CULL_FACE),V!==H&&(V===Xv?o.cullFace(o.BACK):V===cT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=V}function Yt(V){V!==st&&(X&&o.lineWidth(V),st=V)}function De(V,bt,lt){V?(Rt(o.POLYGON_OFFSET_FILL),(K!==bt||ut!==lt)&&(o.polygonOffset(bt,lt),K=bt,ut=lt)):wt(o.POLYGON_OFFSET_FILL)}function qt(V){V?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function I(V){V===void 0&&(V=o.TEXTURE0+ct-1),yt!==V&&(o.activeTexture(V),yt=V)}function C(V,bt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+ct-1:lt=yt);let _t=z[lt];_t===void 0&&(_t={type:void 0,texture:void 0},z[lt]=_t),(_t.type!==V||_t.texture!==bt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(V,bt||St[V]),_t.type=V,_t.texture=bt)}function at(){const V=z[yt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pt(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(V){Ct.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Ft(V){q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function k(V,bt){let lt=p.get(bt);lt===void 0&&(lt=new WeakMap,p.set(bt,lt));let _t=lt.get(V);_t===void 0&&(_t=o.getUniformBlockIndex(bt,V.name),lt.set(V,_t))}function ft(V,bt){const _t=p.get(bt).get(V);d.get(bt)!==_t&&(o.uniformBlockBinding(bt,_t,V.__bindingPointIndex),d.set(bt,_t))}function Nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},yt=null,z={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,L=null,U=null,R=null,O=null,P=null,N=new Pe(0,0,0),B=0,b=!1,A=null,H=null,st=null,K=null,ut=null,Ct.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Rt,disable:wt,bindFramebuffer:te,drawBuffers:zt,useProgram:Ae,setBlending:G,setMaterial:mn,setFlipSided:ce,setCullFace:ue,setLineWidth:Yt,setPolygonOffset:De,setScissorTest:qt,activeTexture:I,bindTexture:C,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Gt,texImage3D:Jt,updateUBOMapping:k,uniformBlockBinding:ft,texStorage2D:_e,texStorage3D:At,texSubImage2D:gt,texSubImage3D:Xt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Vt,scissor:Wt,viewport:Ft,reset:Nt}}function rw(o,t,e,i,r,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,C){return x?new OffscreenCanvas(I,C):xf("canvas")}function M(I,C,at){let pt=1;const Mt=qt(I);if((Mt.width>at||Mt.height>at)&&(pt=at/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const gt=Math.floor(pt*Mt.width),Xt=Math.floor(pt*Mt.height);g===void 0&&(g=E(gt,Xt));const Dt=C?E(gt,Xt):g;return Dt.width=gt,Dt.height=Xt,Dt.getContext("2d").drawImage(I,0,0,gt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Xt+")."),Dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(I,C,at,pt,Mt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=C;if(C===o.RED&&(at===o.FLOAT&&(gt=o.R32F),at===o.HALF_FLOAT&&(gt=o.R16F),at===o.UNSIGNED_BYTE&&(gt=o.R8)),C===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.R8UI),at===o.UNSIGNED_SHORT&&(gt=o.R16UI),at===o.UNSIGNED_INT&&(gt=o.R32UI),at===o.BYTE&&(gt=o.R8I),at===o.SHORT&&(gt=o.R16I),at===o.INT&&(gt=o.R32I)),C===o.RG&&(at===o.FLOAT&&(gt=o.RG32F),at===o.HALF_FLOAT&&(gt=o.RG16F),at===o.UNSIGNED_BYTE&&(gt=o.RG8)),C===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RG8UI),at===o.UNSIGNED_SHORT&&(gt=o.RG16UI),at===o.UNSIGNED_INT&&(gt=o.RG32UI),at===o.BYTE&&(gt=o.RG8I),at===o.SHORT&&(gt=o.RG16I),at===o.INT&&(gt=o.RG32I)),C===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),at===o.UNSIGNED_INT&&(gt=o.RGB32UI),at===o.BYTE&&(gt=o.RGB8I),at===o.SHORT&&(gt=o.RGB16I),at===o.INT&&(gt=o.RGB32I)),C===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),at===o.UNSIGNED_INT&&(gt=o.RGBA32UI),at===o.BYTE&&(gt=o.RGBA8I),at===o.SHORT&&(gt=o.RGBA16I),at===o.INT&&(gt=o.RGBA32I)),C===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),C===o.RGBA){const Xt=Mt?vf:Ne.getTransfer(pt);at===o.FLOAT&&(gt=o.RGBA32F),at===o.HALF_FLOAT&&(gt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(gt=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(I,C){let at;return I?C===null||C===ws||C===Wo?at=o.DEPTH24_STENCIL8:C===Xa?at=o.DEPTH32F_STENCIL8:C===_c&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ws||C===Wo?at=o.DEPTH_COMPONENT24:C===Xa?at=o.DEPTH_COMPONENT32F:C===_c&&(at=o.DEPTH_COMPONENT16),at}function O(I,C){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==$i&&I.minFilter!==ha?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function P(I){const C=I.target;C.removeEventListener("dispose",P),B(C),C.isVideoTexture&&m.delete(C)}function N(I){const C=I.target;C.removeEventListener("dispose",N),A(C)}function B(I){const C=i.get(I);if(C.__webglInit===void 0)return;const at=I.source,pt=v.get(at);if(pt){const Mt=pt[C.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&b(I),Object.keys(pt).length===0&&v.delete(at)}i.remove(I)}function b(I){const C=i.get(I);o.deleteTexture(C.__webglTexture);const at=I.source,pt=v.get(at);delete pt[C.__cacheKey],u.memory.textures--}function A(I){const C=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(C.__webglFramebuffer[pt]))for(let Mt=0;Mt<C.__webglFramebuffer[pt].length;Mt++)o.deleteFramebuffer(C.__webglFramebuffer[pt][Mt]);else o.deleteFramebuffer(C.__webglFramebuffer[pt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[pt])}else{if(Array.isArray(C.__webglFramebuffer))for(let pt=0;pt<C.__webglFramebuffer.length;pt++)o.deleteFramebuffer(C.__webglFramebuffer[pt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pt=0;pt<C.__webglColorRenderbuffer.length;pt++)C.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[pt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const at=I.textures;for(let pt=0,Mt=at.length;pt<Mt;pt++){const gt=i.get(at[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),u.memory.textures--),i.remove(at[pt])}i.remove(I)}let H=0;function st(){H=0}function K(){const I=H;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),H+=1,I}function ut(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function ct(I,C){const at=i.get(I);if(I.isVideoTexture&&Yt(I),I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(at,I,C);return}}e.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+C)}function X(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){q(at,I,C);return}e.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+C)}function $(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){q(at,I,C);return}e.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+C)}function W(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){dt(at,I,C);return}e.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+C)}const yt={[Xp]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[Wp]:o.MIRRORED_REPEAT},z={[$i]:o.NEAREST,[BT]:o.NEAREST_MIPMAP_NEAREST,[Pu]:o.NEAREST_MIPMAP_LINEAR,[ha]:o.LINEAR,[jd]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},it={[kT]:o.NEVER,[ZT]:o.ALWAYS,[XT]:o.LESS,[bx]:o.LEQUAL,[WT]:o.EQUAL,[jT]:o.GEQUAL,[YT]:o.GREATER,[qT]:o.NOTEQUAL};function Et(I,C){if(C.type===Xa&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ha||C.magFilter===jd||C.magFilter===Pu||C.magFilter===Es||C.minFilter===ha||C.minFilter===jd||C.minFilter===Pu||C.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,yt[C.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,yt[C.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,yt[C.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,z[C.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===$i||C.minFilter!==Pu&&C.minFilter!==Es||C.type===Xa&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ct(I,C){let at=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",P));const pt=C.source;let Mt=v.get(pt);Mt===void 0&&(Mt={},v.set(pt,Mt));const gt=ut(C);if(gt!==I.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,at=!0),Mt[gt].usedTimes++;const Xt=Mt[I.__cacheKey];Xt!==void 0&&(Mt[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&b(C)),I.__cacheKey=gt,I.__webglTexture=Mt[gt].texture}return at}function q(I,C,at){let pt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pt=o.TEXTURE_3D);const Mt=Ct(I,C),gt=C.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+at);const Xt=i.get(gt);if(gt.version!==Xt.__version||Mt===!0){e.activeTexture(o.TEXTURE0+at);const Dt=Ne.getPrimaries(Ne.workingColorSpace),Vt=C.colorSpace===Rr?null:Ne.getPrimaries(C.colorSpace),_e=C.colorSpace===Rr||Dt===Vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let At=M(C.image,!1,r.maxTextureSize);At=De(C,At);const Gt=l.convert(C.format,C.colorSpace),Jt=l.convert(C.type);let Wt=U(C.internalFormat,Gt,Jt,C.colorSpace,C.isVideoTexture);Et(pt,C);let Ft;const k=C.mipmaps,ft=C.isVideoTexture!==!0,Nt=Xt.__version===void 0||Mt===!0,V=gt.dataReady,bt=O(C,At);if(C.isDepthTexture)Wt=R(C.format===Yo,C.type),Nt&&(ft?e.texStorage2D(o.TEXTURE_2D,1,Wt,At.width,At.height):e.texImage2D(o.TEXTURE_2D,0,Wt,At.width,At.height,0,Gt,Jt,null));else if(C.isDataTexture)if(k.length>0){ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Jt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Gt,Jt,Ft.data);C.generateMipmaps=!1}else ft?(Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,At.width,At.height),V&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Gt,Jt,At.data)):e.texImage2D(o.TEXTURE_2D,0,Wt,At.width,At.height,0,Gt,Jt,At.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Wt,k[0].width,k[0].height,At.depth);for(let lt=0,_t=k.length;lt<_t;lt++)if(Ft=k[lt],C.format!==Ji)if(Gt!==null)if(ft){if(V)if(C.layerUpdates.size>0){const Ut=yy(Ft.width,Ft.height,C.format,C.type);for(const Ot of C.layerUpdates){const Zt=Ft.data.subarray(Ot*Ut/Ft.data.BYTES_PER_ELEMENT,(Ot+1)*Ut/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Ot,Ft.width,Ft.height,1,Gt,Zt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Gt,Ft.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ft.width,Ft.height,At.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?V&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Gt,Jt,Ft.data):e.texImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ft.width,Ft.height,At.depth,0,Gt,Jt,Ft.data)}else{ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],C.format!==Ji?Gt!==null?ft?V&&e.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Ft.data):e.compressedTexImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Jt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Gt,Jt,Ft.data)}else if(C.isDataArrayTexture)if(ft){if(Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Wt,At.width,At.height,At.depth),V)if(C.layerUpdates.size>0){const lt=yy(At.width,At.height,C.format,C.type);for(const _t of C.layerUpdates){const Ut=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Gt,Jt,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Gt,Jt,At.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,Gt,Jt,At.data);else if(C.isData3DTexture)ft?(Nt&&e.texStorage3D(o.TEXTURE_3D,bt,Wt,At.width,At.height,At.depth),V&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Gt,Jt,At.data)):e.texImage3D(o.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,Gt,Jt,At.data);else if(C.isFramebufferTexture){if(Nt)if(ft)e.texStorage2D(o.TEXTURE_2D,bt,Wt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let Ut=0;Ut<bt;Ut++)e.texImage2D(o.TEXTURE_2D,Ut,Wt,lt,_t,0,Gt,Jt,null),lt>>=1,_t>>=1}}else if(k.length>0){if(ft&&Nt){const lt=qt(k[0]);e.texStorage2D(o.TEXTURE_2D,bt,Wt,lt.width,lt.height)}for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Gt,Jt,Ft):e.texImage2D(o.TEXTURE_2D,lt,Wt,Gt,Jt,Ft);C.generateMipmaps=!1}else if(ft){if(Nt){const lt=qt(At);e.texStorage2D(o.TEXTURE_2D,bt,Wt,lt.width,lt.height)}V&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Jt,At)}else e.texImage2D(o.TEXTURE_2D,0,Wt,Gt,Jt,At);S(C)&&y(pt),Xt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dt(I,C,at){if(C.image.length!==6)return;const pt=Ct(I,C),Mt=C.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+at);const gt=i.get(Mt);if(Mt.version!==gt.__version||pt===!0){e.activeTexture(o.TEXTURE0+at);const Xt=Ne.getPrimaries(Ne.workingColorSpace),Dt=C.colorSpace===Rr?null:Ne.getPrimaries(C.colorSpace),Vt=C.colorSpace===Rr||Xt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const _e=C.isCompressedTexture||C.image[0].isCompressedTexture,At=C.image[0]&&C.image[0].isDataTexture,Gt=[];for(let _t=0;_t<6;_t++)!_e&&!At?Gt[_t]=M(C.image[_t],!0,r.maxCubemapSize):Gt[_t]=At?C.image[_t].image:C.image[_t],Gt[_t]=De(C,Gt[_t]);const Jt=Gt[0],Wt=l.convert(C.format,C.colorSpace),Ft=l.convert(C.type),k=U(C.internalFormat,Wt,Ft,C.colorSpace),ft=C.isVideoTexture!==!0,Nt=gt.__version===void 0||pt===!0,V=Mt.dataReady;let bt=O(C,Jt);Et(o.TEXTURE_CUBE_MAP,C);let lt;if(_e){ft&&Nt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,Jt.width,Jt.height);for(let _t=0;_t<6;_t++){lt=Gt[_t].mipmaps;for(let Ut=0;Ut<lt.length;Ut++){const Ot=lt[Ut];C.format!==Ji?Wt!==null?ft?V&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ot.width,Ot.height,Wt,Ot.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,k,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ot.width,Ot.height,Wt,Ft,Ot.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,k,Ot.width,Ot.height,0,Wt,Ft,Ot.data)}}}else{if(lt=C.mipmaps,ft&&Nt){lt.length>0&&bt++;const _t=qt(Gt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt[_t].width,Gt[_t].height,Wt,Ft,Gt[_t].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Gt[_t].width,Gt[_t].height,0,Wt,Ft,Gt[_t].data);for(let Ut=0;Ut<lt.length;Ut++){const Zt=lt[Ut].image[_t].image;ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Zt.width,Zt.height,Wt,Ft,Zt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,k,Zt.width,Zt.height,0,Wt,Ft,Zt.data)}}else{ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Ft,Gt[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Wt,Ft,Gt[_t]);for(let Ut=0;Ut<lt.length;Ut++){const Ot=lt[Ut];ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Wt,Ft,Ot.image[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,k,Wt,Ft,Ot.image[_t])}}}S(C)&&y(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function St(I,C,at,pt,Mt,gt){const Xt=l.convert(at.format,at.colorSpace),Dt=l.convert(at.type),Vt=U(at.internalFormat,Xt,Dt,at.colorSpace),_e=i.get(C),At=i.get(at);if(At.__renderTarget=C,!_e.__hasExternalTextures){const Gt=Math.max(1,C.width>>gt),Jt=Math.max(1,C.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?e.texImage3D(Mt,gt,Vt,Gt,Jt,C.depth,0,Xt,Dt,null):e.texImage2D(Mt,gt,Vt,Gt,Jt,0,Xt,Dt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,0,ce(C)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,gt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(I,C,at){if(o.bindRenderbuffer(o.RENDERBUFFER,I),C.depthBuffer){const pt=C.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,gt=R(C.stencilBuffer,Mt),Xt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ce(C);ue(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,gt,C.width,C.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,gt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,gt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,I)}else{const pt=C.textures;for(let Mt=0;Mt<pt.length;Mt++){const gt=pt[Mt],Xt=l.convert(gt.format,gt.colorSpace),Dt=l.convert(gt.type),Vt=U(gt.internalFormat,Xt,Dt,gt.colorSpace),_e=ce(C);at&&ue(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Vt,C.width,C.height):ue(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,Vt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Vt,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=i.get(C.depthTexture);pt.__renderTarget=C,(!pt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ct(C.depthTexture,0);const Mt=pt.__webglTexture,gt=ce(C);if(C.depthTexture.format===Io)ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(C.depthTexture.format===Yo)ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function te(I){const C=i.get(I),at=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pt){const Mt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),C.__depthDisposeCallback=Mt}C.__boundDepthTexture=pt}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,I)}else if(at){C.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[pt]),C.__webglDepthbuffer[pt]===void 0)C.__webglDepthbuffer[pt]=o.createRenderbuffer(),Rt(C.__webglDepthbuffer[pt],I,!1);else{const Mt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Rt(C.__webglDepthbuffer,I,!1);else{const pt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Mt)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(I,C,at){const pt=i.get(I);C!==void 0&&St(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&te(I)}function Ae(I){const C=I.texture,at=i.get(I),pt=i.get(C);I.addEventListener("dispose",N);const Mt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=C.version,u.memory.textures++),gt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let Vt=0;Vt<C.mipmaps.length;Vt++)at.__webglFramebuffer[Dt][Vt]=o.createFramebuffer()}else at.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<C.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Dt=0,Vt=Mt.length;Dt<Vt;Dt++){const _e=i.get(Mt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&ue(I)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Vt=Mt[Dt];at.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const _e=l.convert(Vt.format,Vt.colorSpace),At=l.convert(Vt.type),Gt=U(Vt.internalFormat,_e,At,Vt.colorSpace,I.isXRRenderTarget===!0),Jt=ce(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Gt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(at.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Et(o.TEXTURE_CUBE_MAP,C);for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Vt=0;Vt<C.mipmaps.length;Vt++)St(at.__webglFramebuffer[Dt][Vt],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Vt);else St(at.__webglFramebuffer[Dt],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(C)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Dt=0,Vt=Mt.length;Dt<Vt;Dt++){const _e=Mt[Dt],At=i.get(_e);e.bindTexture(o.TEXTURE_2D,At.__webglTexture),Et(o.TEXTURE_2D,_e),St(at.__webglFramebuffer,I,_e,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),S(_e)&&y(o.TEXTURE_2D)}e.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Dt,pt.__webglTexture),Et(Dt,C),C.mipmaps&&C.mipmaps.length>0)for(let Vt=0;Vt<C.mipmaps.length;Vt++)St(at.__webglFramebuffer[Vt],I,C,o.COLOR_ATTACHMENT0,Dt,Vt);else St(at.__webglFramebuffer,I,C,o.COLOR_ATTACHMENT0,Dt,0);S(C)&&y(Dt),e.unbindTexture()}I.depthBuffer&&te(I)}function we(I){const C=I.textures;for(let at=0,pt=C.length;at<pt;at++){const Mt=C[at];if(S(Mt)){const gt=L(I),Xt=i.get(Mt).__webglTexture;e.bindTexture(gt,Xt),y(gt),e.unbindTexture()}}}const se=[],G=[];function mn(I){if(I.samples>0){if(ue(I)===!1){const C=I.textures,at=I.width,pt=I.height;let Mt=o.COLOR_BUFFER_BIT;const gt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=i.get(I),Dt=C.length>1;if(Dt)for(let Vt=0;Vt<C.length;Vt++)e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Vt=0;Vt<C.length;Vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Vt]);const _e=i.get(C[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,at,pt,0,0,at,pt,Mt,o.NEAREST),d===!0&&(se.length=0,G.length=0,se.push(o.COLOR_ATTACHMENT0+Vt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(se.push(gt),G.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<C.length;Vt++){e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Vt]);const _e=i.get(C[Vt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,_e,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const C=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function ce(I){return Math.min(r.maxSamples,I.samples)}function ue(I){const C=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Yt(I){const C=u.render.frame;m.get(I)!==C&&(m.set(I,C),I.update())}function De(I,C){const at=I.colorSpace,pt=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||at!==qo&&at!==Rr&&(Ne.getTransfer(at)===Fe?(pt!==Ji||Mt!==qa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),C}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=st,this.setTexture2D=ct,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=zt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ue}function sw(o,t){function e(i,r=Rr){let l;const u=Ne.getTransfer(r);if(i===qa)return o.UNSIGNED_BYTE;if(i===Fm)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Hm)return o.UNSIGNED_SHORT_5_5_5_1;if(i===gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===mx)return o.BYTE;if(i===_x)return o.SHORT;if(i===_c)return o.UNSIGNED_SHORT;if(i===Bm)return o.INT;if(i===ws)return o.UNSIGNED_INT;if(i===Xa)return o.FLOAT;if(i===Tc)return o.HALF_FLOAT;if(i===vx)return o.ALPHA;if(i===yx)return o.RGB;if(i===Ji)return o.RGBA;if(i===xx)return o.LUMINANCE;if(i===Sx)return o.LUMINANCE_ALPHA;if(i===Io)return o.DEPTH_COMPONENT;if(i===Yo)return o.DEPTH_STENCIL;if(i===Mx)return o.RED;if(i===Vm)return o.RED_INTEGER;if(i===Ex)return o.RG;if(i===Gm)return o.RG_INTEGER;if(i===km)return o.RGBA_INTEGER;if(i===lf||i===cf||i===uf||i===ff)if(u===Fe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===lf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===lf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ff)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yp||i===qp||i===jp||i===Zp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Yp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kp||i===Qp||i===Jp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Kp||i===Qp)return u===Fe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Jp)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$p||i===tm||i===em||i===nm||i===im||i===am||i===rm||i===sm||i===om||i===lm||i===cm||i===um||i===fm||i===hm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===$p)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===em)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===im)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===am)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===om)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===um)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hf||i===dm||i===pm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===hf)return u===Fe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tx||i===mm||i===_m||i===gm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(i===mm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_m)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lw=`
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

}`;class cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new ri,l=t.properties.get(r);l.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Br({vertexShader:ow,fragmentShader:lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Hi(new Pf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uw extends el{constructor(t,e){super();const i=this;let r=null,l=1,u=null,f="local-floor",d=1,p=null,m=null,g=null,v=null,x=null,E=null;const M=new cw,S=e.getContextAttributes();let y=null,L=null;const U=[],R=[],O=new pe;let P=null;const N=new Qn;N.viewport=new on;const B=new Qn;B.viewport=new on;const b=[N,B],A=new Db;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=U[q];return dt===void 0&&(dt=new _p,U[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=U[q];return dt===void 0&&(dt=new _p,U[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=U[q];return dt===void 0&&(dt=new _p,U[q]=dt),dt.getHandSpace()};function K(q){const dt=R.indexOf(q.inputSource);if(dt===-1)return;const St=U[dt];St!==void 0&&(St.update(q.inputSource,q.frame,p||u),St.dispatchEvent({type:q.type,data:q.inputSource}))}function ut(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ut),r.removeEventListener("inputsourceschange",ct);for(let q=0;q<U.length;q++){const dt=R[q];dt!==null&&(R[q]=null,U[q].disconnect(dt))}H=null,st=null,M.reset(),t.setRenderTarget(y),x=null,v=null,g=null,r=null,L=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ut),r.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?Yo:Io,Rt=S.stencil?Wo:ws);const te={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:l};g=new XRWebGLBinding(r,e),v=g.createProjectionLayer(te),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Ds(v.textureWidth,v.textureHeight,{format:Ji,type:qa,depthTexture:new Px(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,e,St),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Ds(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:qa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(f),Ct.setContext(r),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ct(q){for(let dt=0;dt<q.removed.length;dt++){const St=q.removed[dt],Rt=R.indexOf(St);Rt>=0&&(R[Rt]=null,U[Rt].disconnect(St))}for(let dt=0;dt<q.added.length;dt++){const St=q.added[dt];let Rt=R.indexOf(St);if(Rt===-1){for(let te=0;te<U.length;te++)if(te>=R.length){R.push(St),Rt=te;break}else if(R[te]===null){R[te]=St,Rt=te;break}if(Rt===-1)break}const wt=U[Rt];wt&&wt.connect(St)}}const X=new nt,$=new nt;function W(q,dt,St){X.setFromMatrixPosition(dt.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const Rt=X.distanceTo($),wt=dt.projectionMatrix.elements,te=St.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),Ae=wt[14]/(wt[10]+1),we=(wt[9]+1)/wt[5],se=(wt[9]-1)/wt[5],G=(wt[8]-1)/wt[0],mn=(te[8]+1)/te[0],ce=zt*G,ue=zt*mn,Yt=Rt/(-G+mn),De=Yt*-G;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=zt+Yt,I=Ae+Yt,C=ce-De,at=ue+(Rt-De),pt=we*Ae/I*qt,Mt=se*Ae/I*qt;q.projectionMatrix.makePerspective(C,at,pt,Mt,qt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let dt=q.near,St=q.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),A.near=B.near=N.near=dt,A.far=B.far=N.far=St,(H!==A.near||st!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,st=A.far),N.layers.mask=q.layers.mask|2,B.layers.mask=q.layers.mask|4,A.layers.mask=N.layers.mask|B.layers.mask;const Rt=q.parent,wt=A.cameras;yt(A,Rt);for(let te=0;te<wt.length;te++)yt(wt[te],Rt);wt.length===2?W(A,N,B):A.projectionMatrix.copy(N.projectionMatrix),z(q,A,Rt)};function z(q,dt,St){St===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(q){d=q,v!==null&&(v.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let it=null;function Et(q,dt){if(m=dt.getViewerPose(p||u),E=dt,m!==null){const St=m.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Rt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let zt=0;zt<St.length;zt++){const Ae=St[zt];let we=null;if(x!==null)we=x.getViewport(Ae);else{const G=g.getViewSubImage(v,Ae);we=G.viewport,zt===0&&(t.setRenderTargetTextures(L,G.colorTexture,v.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(L))}let se=b[zt];se===void 0&&(se=new Qn,se.layers.enable(zt),se.viewport=new on,b[zt]=se),se.matrix.fromArray(Ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),zt===0&&(A.matrix.copy(se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(se)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const zt=g.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,r.renderState)}}for(let St=0;St<U.length;St++){const Rt=R[St],wt=U[St];Rt!==null&&wt!==void 0&&wt.update(Rt,dt,p||u)}it&&it(q,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Ct=new zx;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const ps=new ja,fw=new nn;function hw(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,Lx(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,L,U,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),M(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,L,U):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ai&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ai&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,R=L.envMapRotation;U&&(S.envMap.value=U,ps.copy(R),ps.x*=-1,ps.y*=-1,ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(ps)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=U*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const L=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dw(o,t,e,i){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const R=U.program;i.uniformBlockBinding(L,R)}function p(L,U){let R=r[L.id];R===void 0&&(E(L),R=m(L),r[L.id]=R,L.addEventListener("dispose",S));const O=U.program;i.updateUBOMapping(L,O);const P=t.render.frame;l[L.id]!==P&&(v(L),l[L.id]=P)}function m(L){const U=g();L.__bindingPointIndex=U;const R=o.createBuffer(),O=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function g(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=r[L.id],R=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,N=R.length;P<N;P++){const B=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,A=B.length;b<A;b++){const H=B[b];if(x(H,P,b,O)===!0){const st=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ct=0;ct<K.length;ct++){const X=K[ct],$=M(X);typeof X=="number"||typeof X=="boolean"?(H.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,st+ut,H.__data)):X.isMatrix3?(H.__data[0]=X.elements[0],H.__data[1]=X.elements[1],H.__data[2]=X.elements[2],H.__data[3]=0,H.__data[4]=X.elements[3],H.__data[5]=X.elements[4],H.__data[6]=X.elements[5],H.__data[7]=0,H.__data[8]=X.elements[6],H.__data[9]=X.elements[7],H.__data[10]=X.elements[8],H.__data[11]=0):(X.toArray(H.__data,ut),ut+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,U,R,O){const P=L.value,N=U+"_"+R;if(O[N]===void 0)return typeof P=="number"||typeof P=="boolean"?O[N]=P:O[N]=P.clone(),!0;{const B=O[N];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[N]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function E(L){const U=L.uniforms;let R=0;const O=16;for(let N=0,B=U.length;N<B;N++){const b=Array.isArray(U[N])?U[N]:[U[N]];for(let A=0,H=b.length;A<H;A++){const st=b[A],K=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,ct=K.length;ut<ct;ut++){const X=K[ut],$=M(X),W=R%O,yt=W%$.boundary,z=W+yt;R+=yt,z!==0&&O-z<$.storage&&(R+=O-z),st.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=$.storage}}}const P=R%O;return P>0&&(R+=O-P),L.__size=R,L.__cache={},this}function M(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const R=u.indexOf(U.__bindingPointIndex);u.splice(R,1),o.deleteBuffer(r[U.id]),delete r[U.id],delete l[U.id]}function y(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class pw{constructor(t={}){const{canvas:e=QT(),context:i=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const L=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fi,this.toneMapping=Or,this.toneMappingExposure=1;const R=this;let O=!1,P=0,N=0,B=null,b=-1,A=null;const H=new on,st=new on;let K=null;const ut=new Pe(0);let ct=0,X=e.width,$=e.height,W=1,yt=null,z=null;const it=new on(0,0,X,$),Et=new on(0,0,X,$);let Ct=!1;const q=new Nx;let dt=!1,St=!1;this.transmissionResolutionScale=1;const Rt=new nn,wt=new nn,te=new nt,zt=new on,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function se(){return B===null?W:1}let G=i;function mn(D,Z){return e.getContext(D,Z)}try{const D={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Im}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),G===null){const Z="webgl2";if(G=mn(Z,D),G===null)throw mn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ce,ue,Yt,De,qt,I,C,at,pt,Mt,gt,Xt,Dt,Vt,_e,At,Gt,Jt,Wt,Ft,k,ft,Nt,V;function bt(){ce=new TR(G),ce.init(),ft=new sw(G,ce),ue=new gR(G,ce,t,ft),Yt=new aw(G,ce),ue.reverseDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),De=new RR(G),qt=new WC,I=new rw(G,ce,Yt,qt,ue,ft,De),C=new yR(R),at=new ER(R),pt=new Ob(G),Nt=new mR(G,pt),Mt=new bR(G,pt,De,Nt),gt=new wR(G,Mt,pt,De),Wt=new CR(G,ue,I),At=new vR(qt),Xt=new XC(R,C,at,ce,ue,Nt,At),Dt=new hw(R,qt),Vt=new qC,_e=new $C(ce),Jt=new pR(R,C,at,Yt,gt,x,d),Gt=new nw(R,gt,ue),V=new dw(G,De,ue,Yt),Ft=new _R(G,ce,De),k=new AR(G,ce,De),De.programs=Xt.programs,R.capabilities=ue,R.extensions=ce,R.properties=qt,R.renderLists=Vt,R.shadowMap=Gt,R.state=Yt,R.info=De}bt();const lt=new uw(R,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(X,$,!1))},this.getSize=function(D){return D.set(X,$)},this.setSize=function(D,Z,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,$=Z,e.width=Math.floor(D*W),e.height=Math.floor(Z*W),rt===!0&&(e.style.width=D+"px",e.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(X*W,$*W).floor()},this.setDrawingBufferSize=function(D,Z,rt){X=D,$=Z,W=rt,e.width=Math.floor(D*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,Z,rt,tt){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,Z,rt,tt),Yt.viewport(H.copy(it).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(Et)},this.setScissor=function(D,Z,rt,tt){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,Z,rt,tt),Yt.scissor(st.copy(Et).multiplyScalar(W).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(D){Yt.setScissorTest(Ct=D)},this.setOpaqueSort=function(D){yt=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,rt=!0){let tt=0;if(D){let Q=!1;if(B!==null){const Tt=B.texture.format;Q=Tt===km||Tt===Gm||Tt===Vm}if(Q){const Tt=B.texture.type,Lt=Tt===qa||Tt===ws||Tt===_c||Tt===Wo||Tt===Fm||Tt===Hm,Bt=Jt.getClearColor(),It=Jt.getClearAlpha(),ae=Bt.r,re=Bt.g,$t=Bt.b;Lt?(E[0]=ae,E[1]=re,E[2]=$t,E[3]=It,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=ae,M[1]=re,M[2]=$t,M[3]=It,G.clearBufferiv(G.COLOR,0,M))}else tt|=G.COLOR_BUFFER_BIT}Z&&(tt|=G.DEPTH_BUFFER_BIT),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Jt.dispose(),Vt.dispose(),_e.dispose(),qt.dispose(),C.dispose(),at.dispose(),gt.dispose(),Nt.dispose(),V.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",wc),lt.removeEventListener("sessionend",al),na.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=De.autoReset,Z=Gt.enabled,rt=Gt.autoUpdate,tt=Gt.needsUpdate,Q=Gt.type;bt(),De.autoReset=D,Gt.enabled=Z,Gt.autoUpdate=rt,Gt.needsUpdate=tt,Gt.type=Q}function Ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Zt(D){const Z=D.target;Z.removeEventListener("dispose",Zt),Re(Z)}function Re(D){Xe(D),qt.remove(D)}function Xe(D){const Z=qt.get(D).programs;Z!==void 0&&(Z.forEach(function(rt){Xt.releaseProgram(rt)}),D.isShaderMaterial&&Xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,rt,tt,Q,Tt){Z===null&&(Z=Ae);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Hf(D,Z,rt,tt,Q);Yt.setMaterial(tt,Lt);let It=rt.index,ae=1;if(tt.wireframe===!0){if(It=Mt.getWireframeAttribute(rt),It===void 0)return;ae=2}const re=rt.drawRange,$t=rt.attributes.position;let Se=re.start*ae,Me=(re.start+re.count)*ae;Tt!==null&&(Se=Math.max(Se,Tt.start*ae),Me=Math.min(Me,(Tt.start+Tt.count)*ae)),It!==null?(Se=Math.max(Se,0),Me=Math.min(Me,It.count)):$t!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,$t.count));const We=Me-Se;if(We<0||We===1/0)return;Nt.setup(Q,tt,Bt,rt,It);let Le,oe=Ft;if(It!==null&&(Le=pt.get(It),oe=k,oe.setIndex(Le)),Q.isMesh)tt.wireframe===!0?(Yt.setLineWidth(tt.wireframeLinewidth*se()),oe.setMode(G.LINES)):oe.setMode(G.TRIANGLES);else if(Q.isLine){let ee=tt.linewidth;ee===void 0&&(ee=1),Yt.setLineWidth(ee*se()),Q.isLineSegments?oe.setMode(G.LINES):Q.isLineLoop?oe.setMode(G.LINE_LOOP):oe.setMode(G.LINE_STRIP)}else Q.isPoints?oe.setMode(G.POINTS):Q.isSprite&&oe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ee=Q._multiDrawStarts,vn=Q._multiDrawCounts,Ee=Q._multiDrawCount,$n=It?pt.get(It).bytesPerElement:1,Gi=qt.get(tt).currentProgram.getUniforms();for(let Wn=0;Wn<Ee;Wn++)Gi.setValue(G,"_gl_DrawID",Wn),oe.render(ee[Wn]/$n,vn[Wn])}else if(Q.isInstancedMesh)oe.renderInstances(Se,We,Q.count);else if(rt.isInstancedBufferGeometry){const ee=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,vn=Math.min(rt.instanceCount,ee);oe.renderInstances(Se,We,vn)}else oe.render(Se,We)};function ge(D,Z,rt){D.transparent===!0&&D.side===ka&&D.forceSinglePass===!1?(D.side=ai,D.needsUpdate=!0,gn(D,Z,rt),D.side=Ir,D.needsUpdate=!0,gn(D,Z,rt),D.side=ka):gn(D,Z,rt)}this.compile=function(D,Z,rt=null){rt===null&&(rt=D),y=_e.get(rt),y.init(Z),U.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),D!==rt&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const tt=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Bt=Tt[Lt];ge(Bt,rt,Q),tt.add(Bt)}else ge(Tt,rt,Q),tt.add(Tt)}),y=U.pop(),tt},this.compileAsync=function(D,Z,rt=null){const tt=this.compile(D,Z,rt);return new Promise(Q=>{function Tt(){if(tt.forEach(function(Lt){qt.get(Lt).currentProgram.isReady()&&tt.delete(Lt)}),tt.size===0){Q(D);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let an=null;function ln(D){an&&an(D)}function wc(){na.stop()}function al(){na.start()}const na=new zx;na.setAnimationLoop(ln),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(D){an=D,lt.setAnimationLoop(D),D===null?na.stop():na.start()},lt.addEventListener("sessionstart",wc),lt.addEventListener("sessionend",al),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Z,B),y=_e.get(D,U.length),y.init(Z),U.push(y),wt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(wt),St=this.localClippingEnabled,dt=At.init(this.clippingPlanes,St),S=Vt.get(D,L.length),S.init(),L.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&Ns(Tt,Z,-1/0,R.sortObjects)}Ns(D,Z,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(yt,z),we=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,we&&Jt.addToRenderList(S,D),this.info.render.frame++,dt===!0&&At.beginShadows();const rt=y.state.shadowsArray;Gt.render(rt,D,Z),dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=S.opaque,Q=S.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++){const It=Tt[Lt];Dc(tt,Q,D,It)}we&&Jt.render(D);for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++){const It=Tt[Lt];rl(S,D,It,It.viewport)}}else Q.length>0&&Dc(tt,Q,D,Z),we&&Jt.render(D),rl(S,D,Z);B!==null&&N===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(R,D,Z),Nt.resetDefaultState(),b=-1,A=null,U.pop(),U.length>0?(y=U[U.length-1],dt===!0&&At.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ns(D,Z,rt,tt){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||q.intersectsSprite(D)){tt&&zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(wt);const Lt=gt.update(D),Bt=D.material;Bt.visible&&S.push(D,Lt,Bt,rt,zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||q.intersectsObject(D))){const Lt=gt.update(D),Bt=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),zt.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(D.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){const It=Lt.groups;for(let ae=0,re=It.length;ae<re;ae++){const $t=It[ae],Se=Bt[$t.materialIndex];Se&&Se.visible&&S.push(D,Lt,Se,rt,zt.z,$t)}}else Bt.visible&&S.push(D,Lt,Bt,rt,zt.z,null)}}const Tt=D.children;for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++)Ns(Tt[Lt],Z,rt,tt)}function rl(D,Z,rt,tt){const Q=D.opaque,Tt=D.transmissive,Lt=D.transparent;y.setupLightsView(rt),dt===!0&&At.setGlobalState(R.clippingPlanes,rt),tt&&Yt.viewport(H.copy(tt)),Q.length>0&&hi(Q,Z,rt),Tt.length>0&&hi(Tt,Z,rt),Lt.length>0&&hi(Lt,Z,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Dc(D,Z,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[tt.id]===void 0&&(y.state.transmissionRenderTarget[tt.id]=new Ds(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Tc:qa,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[tt.id],Lt=tt.viewport||H;Tt.setSize(Lt.z*R.transmissionResolutionScale,Lt.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(ut),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),we&&Jt.render(rt);const It=R.toneMapping;R.toneMapping=Or;const ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),y.setupLightsView(tt),dt===!0&&At.setGlobalState(R.clippingPlanes,tt),hi(D,rt,tt),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let $t=0,Se=Z.length;$t<Se;$t++){const Me=Z[$t],We=Me.object,Le=Me.geometry,oe=Me.material,ee=Me.group;if(oe.side===ka&&We.layers.test(tt.layers)){const vn=oe.side;oe.side=ai,oe.needsUpdate=!0,_n(We,rt,tt,Le,oe,ee),oe.side=vn,oe.needsUpdate=!0,re=!0}}re===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Bt),R.setClearColor(ut,ct),ae!==void 0&&(tt.viewport=ae),R.toneMapping=It}function hi(D,Z,rt){const tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=D.length;Q<Tt;Q++){const Lt=D[Q],Bt=Lt.object,It=Lt.geometry,ae=tt===null?Lt.material:tt,re=Lt.group;Bt.layers.test(rt.layers)&&_n(Bt,Z,rt,It,ae,re)}}function _n(D,Z,rt,tt,Q,Tt){D.onBeforeRender(R,Z,rt,tt,Q,Tt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(R,Z,rt,tt,D,Tt),Q.transparent===!0&&Q.side===ka&&Q.forceSinglePass===!1?(Q.side=ai,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=Ir,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=ka):R.renderBufferDirect(rt,Z,tt,Q,D,Tt),D.onAfterRender(R,Z,rt,tt,Q,Tt)}function gn(D,Z,rt){Z.isScene!==!0&&(Z=Ae);const tt=qt.get(D),Q=y.state.lights,Tt=y.state.shadowsArray,Lt=Q.state.version,Bt=Xt.getParameters(D,Q.state,Tt,Z,rt),It=Xt.getProgramCacheKey(Bt);let ae=tt.programs;tt.environment=D.isMeshStandardMaterial?Z.environment:null,tt.fog=Z.fog,tt.envMap=(D.isMeshStandardMaterial?at:C).get(D.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,ae===void 0&&(D.addEventListener("dispose",Zt),ae=new Map,tt.programs=ae);let re=ae.get(It);if(re!==void 0){if(tt.currentProgram===re&&tt.lightsStateVersion===Lt)return Ps(D,Bt),re}else Bt.uniforms=Xt.getUniforms(D),D.onBeforeCompile(Bt,R),re=Xt.acquireProgram(Bt,It),ae.set(It,re),tt.uniforms=Bt.uniforms;const $t=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($t.clippingPlanes=At.uniform),Ps(D,Bt),tt.needsLights=Lc(D),tt.lightsStateVersion=Lt,tt.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=re,tt.uniformsList=null,re}function va(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=pf.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Ps(D,Z){const rt=qt.get(D);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Hf(D,Z,rt,tt,Q){Z.isScene!==!0&&(Z=Ae),I.resetTextureUnits();const Tt=Z.fog,Lt=tt.isMeshStandardMaterial?Z.environment:null,Bt=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:qo,It=(tt.isMeshStandardMaterial?at:C).get(tt.envMap||Lt),ae=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),$t=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let We=Or;tt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=R.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,oe=Le!==void 0?Le.length:0,ee=qt.get(tt),vn=y.state.lights;if(dt===!0&&(St===!0||D!==A)){const Qe=D===A&&tt.id===b;At.setState(tt,D,Qe)}let Ee=!1;tt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==vn.state.version||ee.outputColorSpace!==Bt||Q.isBatchedMesh&&ee.batching===!1||!Q.isBatchedMesh&&ee.batching===!0||Q.isBatchedMesh&&ee.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ee.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ee.instancing===!1||!Q.isInstancedMesh&&ee.instancing===!0||Q.isSkinnedMesh&&ee.skinning===!1||!Q.isSkinnedMesh&&ee.skinning===!0||Q.isInstancedMesh&&ee.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ee.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ee.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ee.instancingMorph===!1&&Q.morphTexture!==null||ee.envMap!==It||tt.fog===!0&&ee.fog!==Tt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==At.numPlanes||ee.numIntersection!==At.numIntersection)||ee.vertexAlphas!==ae||ee.vertexTangents!==re||ee.morphTargets!==$t||ee.morphNormals!==Se||ee.morphColors!==Me||ee.toneMapping!==We||ee.morphTargetsCount!==oe)&&(Ee=!0):(Ee=!0,ee.__version=tt.version);let $n=ee.currentProgram;Ee===!0&&($n=gn(tt,Z,Q));let Gi=!1,Wn=!1,Tn=!1;const ze=$n.getUniforms(),Yn=ee.uniforms;if(Yt.useProgram($n.program)&&(Gi=!0,Wn=!0,Tn=!0),tt.id!==b&&(b=tt.id,Wn=!0),Gi||A!==D){Yt.buffers.depth.getReversed()?(Rt.copy(D.projectionMatrix),$T(Rt),tb(Rt),ze.setValue(G,"projectionMatrix",Rt)):ze.setValue(G,"projectionMatrix",D.projectionMatrix),ze.setValue(G,"viewMatrix",D.matrixWorldInverse);const Ln=ze.map.cameraPosition;Ln!==void 0&&Ln.setValue(G,te.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ze.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,Wn=!0,Tn=!0)}if(Q.isSkinnedMesh){ze.setOptional(G,Q,"bindMatrix"),ze.setOptional(G,Q,"bindMatrixInverse");const Qe=Q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ze.setValue(G,"boneTexture",Qe.boneTexture,I))}Q.isBatchedMesh&&(ze.setOptional(G,Q,"batchingTexture"),ze.setValue(G,"batchingTexture",Q._matricesTexture,I),ze.setOptional(G,Q,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",Q._indirectTexture,I),ze.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",Q._colorsTexture,I));const In=rt.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Wt.update(Q,rt,$n),(Wn||ee.receiveShadow!==Q.receiveShadow)&&(ee.receiveShadow=Q.receiveShadow,ze.setValue(G,"receiveShadow",Q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Yn.envMap.value=It,Yn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Z.environment!==null&&(Yn.envMapIntensity.value=Z.environmentIntensity),Wn&&(ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),ee.needsLights&&Vf(Yn,Tn),Tt&&tt.fog===!0&&Dt.refreshFogUniforms(Yn,Tt),Dt.refreshMaterialUniforms(Yn,tt,W,$,y.state.transmissionRenderTarget[D.id]),pf.upload(G,va(ee),Yn,I)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(pf.upload(G,va(ee),Yn,I),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ze.setValue(G,"center",Q.center),ze.setValue(G,"modelViewMatrix",Q.modelViewMatrix),ze.setValue(G,"normalMatrix",Q.normalMatrix),ze.setValue(G,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Qe=tt.uniformsGroups;for(let Ln=0,zs=Qe.length;Ln<zs;Ln++){const ti=Qe[Ln];V.update(ti,$n),V.bind(ti,$n)}}return $n}function Vf(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Lc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,Z,rt){qt.get(D.texture).__webglTexture=Z,qt.get(D.depthTexture).__webglTexture=rt;const tt=qt.get(D);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=rt===void 0,tt.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Z){const rt=qt.get(D);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Gr=G.createFramebuffer();this.setRenderTarget=function(D,Z=0,rt=0){B=D,P=Z,N=rt;let tt=!0,Q=null,Tt=!1,Lt=!1;if(D){const It=qt.get(D);if(It.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(G.FRAMEBUFFER,null),tt=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(It.__hasExternalTextures)I.rebindTextures(D,qt.get(D.texture).__webglTexture,qt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $t=D.depthTexture;if(It.__boundDepthTexture!==$t){if($t!==null&&qt.has($t)&&(D.width!==$t.image.width||D.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}const ae=D.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Lt=!0);const re=qt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?Q=re[Z][rt]:Q=re[Z],Tt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?Q=qt.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[rt]:Q=re,H.copy(D.viewport),st.copy(D.scissor),K=D.scissorTest}else H.copy(it).multiplyScalar(W).floor(),st.copy(Et).multiplyScalar(W).floor(),K=Ct;if(rt!==0&&(Q=Gr),Yt.bindFramebuffer(G.FRAMEBUFFER,Q)&&tt&&Yt.drawBuffers(D,Q),Yt.viewport(H),Yt.scissor(st),Yt.setScissorTest(K),Tt){const It=qt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(Lt){const It=qt.get(D.texture),ae=Z;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.__webglTexture,rt,ae)}else if(D!==null&&rt!==0){const It=qt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,rt)}b=-1},this.readRenderTargetPixels=function(D,Z,rt,tt,Q,Tt,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){Yt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const It=D.texture,ae=It.format,re=It.type;if(!ue.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q&&G.readPixels(Z,rt,tt,Q,ft.convert(ae),ft.convert(re),Tt)}finally{const It=B!==null?qt.get(B).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(D,Z,rt,tt,Q,Tt,Lt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){const It=D.texture,ae=It.format,re=It.type;if(!ue.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q){Yt.bindFramebuffer(G.FRAMEBUFFER,Bt);const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(Z,rt,tt,Q,ft.convert(ae),ft.convert(re),0);const Se=B!==null?qt.get(B).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Se);const Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await JT(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer($t),G.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Z=null,rt=0){D.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1]);const tt=Math.pow(2,-rt),Q=Math.floor(D.image.width*tt),Tt=Math.floor(D.image.height*tt),Lt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;I.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Lt,Bt,Q,Tt),Yt.unbindTexture()};const sl=G.createFramebuffer(),ya=G.createFramebuffer();this.copyTextureToTexture=function(D,Z,rt=null,tt=null,Q=0,Tt=null){D.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,D=arguments[1],Z=arguments[2],Tt=arguments[3]||0,rt=null),Tt===null&&(Q!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Lt,Bt,It,ae,re,$t,Se,Me,We;const Le=D.isCompressedTexture?D.mipmaps[Tt]:D.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,ae=rt.min.x,re=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const In=Math.pow(2,-Q);Lt=Math.floor(Le.width*In),Bt=Math.floor(Le.height*In),D.isDataArrayTexture?It=Le.depth:D.isData3DTexture?It=Math.floor(Le.depth*In):It=1,ae=0,re=0,$t=0}tt!==null?(Se=tt.x,Me=tt.y,We=tt.z):(Se=0,Me=0,We=0);const oe=ft.convert(Z.format),ee=ft.convert(Z.type);let vn;Z.isData3DTexture?(I.setTexture3D(Z,0),vn=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(I.setTexture2DArray(Z,0),vn=G.TEXTURE_2D_ARRAY):(I.setTexture2D(Z,0),vn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),$n=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gi=G.getParameter(G.UNPACK_SKIP_PIXELS),Wn=G.getParameter(G.UNPACK_SKIP_ROWS),Tn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ae),G.pixelStorei(G.UNPACK_SKIP_ROWS,re),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const ze=D.isDataArrayTexture||D.isData3DTexture,Yn=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const In=qt.get(D),Qe=qt.get(Z),Ln=qt.get(In.__renderTarget),zs=qt.get(Qe.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let ti=0;ti<It;ti++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(D).__webglTexture,Q,$t+ti),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(Z).__webglTexture,Tt,We+ti)),G.blitFramebuffer(ae,re,Lt,Bt,Se,Me,Lt,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||qt.has(D)){const In=qt.get(D),Qe=qt.get(Z);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,sl),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ya);for(let Ln=0;Ln<It;Ln++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,In.__webglTexture,Q,$t+Ln):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,In.__webglTexture,Q),Yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,We+Ln):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,Tt),Q!==0?G.blitFramebuffer(ae,re,Lt,Bt,Se,Me,Lt,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):Yn?G.copyTexSubImage3D(vn,Tt,Se,Me,We+Ln,ae,re,Lt,Bt):G.copyTexSubImage2D(vn,Tt,Se,Me,ae,re,Lt,Bt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Yn?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(vn,Tt,Se,Me,We,Lt,Bt,It,oe,ee,Le.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(vn,Tt,Se,Me,We,Lt,Bt,It,oe,Le.data):G.texSubImage3D(vn,Tt,Se,Me,We,Lt,Bt,It,oe,ee,Le):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,Se,Me,Lt,Bt,oe,ee,Le.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,Se,Me,Le.width,Le.height,oe,Le.data):G.texSubImage2D(G.TEXTURE_2D,Tt,Se,Me,Lt,Bt,oe,ee,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,$n),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Tn),Tt===0&&Z.generateMipmaps&&G.generateMipmap(vn),Yt.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,rt=null,tt=null,Q=0){return D.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,tt=arguments[1]||null,D=arguments[2],Z=arguments[3],Q=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Z,rt,tt,Q)},this.initRenderTarget=function(D){qt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Yt.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,Yt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}}var mw=Object.defineProperty,_w=(o,t,e)=>t in o?mw(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,gw=(o,t,e)=>(_w(o,t+"",e),e);class vw{constructor(){gw(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}var yw=Object.defineProperty,xw=(o,t,e)=>t in o?yw(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ne=(o,t,e)=>(xw(o,typeof t!="symbol"?t+"":t,e),e);const sf=new Nf,Xy=new br,Sw=Math.cos(70*(Math.PI/180)),Wy=(o,t)=>(o%t+t)%t;class Mw extends vw{constructor(t,e){super(),ne(this,"object"),ne(this,"domElement"),ne(this,"enabled",!0),ne(this,"target",new nt),ne(this,"minDistance",0),ne(this,"maxDistance",1/0),ne(this,"minZoom",0),ne(this,"maxZoom",1/0),ne(this,"minPolarAngle",0),ne(this,"maxPolarAngle",Math.PI),ne(this,"minAzimuthAngle",-1/0),ne(this,"maxAzimuthAngle",1/0),ne(this,"enableDamping",!1),ne(this,"dampingFactor",.05),ne(this,"enableZoom",!0),ne(this,"zoomSpeed",1),ne(this,"enableRotate",!0),ne(this,"rotateSpeed",1),ne(this,"enablePan",!0),ne(this,"panSpeed",1),ne(this,"screenSpacePanning",!0),ne(this,"keyPanSpeed",7),ne(this,"zoomToCursor",!1),ne(this,"autoRotate",!1),ne(this,"autoRotateSpeed",2),ne(this,"reverseOrbit",!1),ne(this,"reverseHorizontalOrbit",!1),ne(this,"reverseVerticalOrbit",!1),ne(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ne(this,"mouseButtons",{LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN}),ne(this,"touches",{ONE:mo.ROTATE,TWO:mo.DOLLY_PAN}),ne(this,"target0"),ne(this,"position0"),ne(this,"zoom0"),ne(this,"_domElementKeyEvents",null),ne(this,"getPolarAngle"),ne(this,"getAzimuthalAngle"),ne(this,"setPolarAngle"),ne(this,"setAzimuthalAngle"),ne(this,"getDistance"),ne(this,"getZoomScale"),ne(this,"listenToKeyEvents"),ne(this,"stopListenToKeyEvents"),ne(this,"saveState"),ne(this,"reset"),ne(this,"update"),ne(this,"connect"),ne(this,"dispose"),ne(this,"dollyIn"),ne(this,"dollyOut"),ne(this,"getScale"),ne(this,"setScale"),this.object=t,this.domElement=e,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=k=>{let ft=Wy(k,2*Math.PI),Nt=m.phi;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let V=Math.abs(ft-Nt);2*Math.PI-V<V&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.phi=ft-Nt,i.update()},this.setAzimuthalAngle=k=>{let ft=Wy(k,2*Math.PI),Nt=m.theta;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let V=Math.abs(ft-Nt);2*Math.PI-V<V&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.theta=ft-Nt,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=k=>{k.addEventListener("keydown",Dt),this._domElementKeyEvents=k},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),d=f.NONE},this.update=(()=>{const k=new nt,ft=new nt(0,1,0),Nt=new Ls().setFromUnitVectors(t.up,ft),V=Nt.clone().invert(),bt=new nt,lt=new Ls,_t=2*Math.PI;return function(){const Ot=i.object.position;Nt.setFromUnitVectors(t.up,ft),V.copy(Nt).invert(),k.copy(Ot).sub(i.target),k.applyQuaternion(Nt),m.setFromVector3(k),i.autoRotate&&d===f.NONE&&ut(st()),i.enableDamping?(m.theta+=g.theta*i.dampingFactor,m.phi+=g.phi*i.dampingFactor):(m.theta+=g.theta,m.phi+=g.phi);let Zt=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(Zt)&&isFinite(Re)&&(Zt<-Math.PI?Zt+=_t:Zt>Math.PI&&(Zt-=_t),Re<-Math.PI?Re+=_t:Re>Math.PI&&(Re-=_t),Zt<=Re?m.theta=Math.max(Zt,Math.min(Re,m.theta)):m.theta=m.theta>(Zt+Re)/2?Math.max(Zt,m.theta):Math.min(Re,m.theta)),m.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,m.phi)),m.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(x,i.dampingFactor):i.target.add(x),i.zoomToCursor&&b||i.object.isOrthographicCamera?m.radius=Ct(m.radius):m.radius=Ct(m.radius*v),k.setFromSpherical(m),k.applyQuaternion(V),Ot.copy(i.target).add(k),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(g.theta*=1-i.dampingFactor,g.phi*=1-i.dampingFactor,x.multiplyScalar(1-i.dampingFactor)):(g.set(0,0,0),x.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&b){let ge=null;if(i.object instanceof Qn&&i.object.isPerspectiveCamera){const an=k.length();ge=Ct(an*v);const ln=an-ge;i.object.position.addScaledVector(N,ln),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const an=new nt(B.x,B.y,0);an.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix(),Xe=!0;const ln=new nt(B.x,B.y,0);ln.unproject(i.object),i.object.position.sub(ln).add(an),i.object.updateMatrixWorld(),ge=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ge!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ge).add(i.object.position):(sf.origin.copy(i.object.position),sf.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(sf.direction))<Sw?t.lookAt(i.target):(Xy.setFromNormalAndCoplanarPoint(i.object.up,i.target),sf.intersectPlane(Xy,i.target))))}else i.object instanceof df&&i.object.isOrthographicCamera&&(Xe=v!==1,Xe&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix()));return v=1,b=!1,Xe||bt.distanceToSquared(i.object.position)>p||8*(1-lt.dot(i.object.quaternion))>p?(i.dispatchEvent(r),bt.copy(i.object.position),lt.copy(i.object.quaternion),Xe=!1,!0):!1}})(),this.connect=k=>{i.domElement=k,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",At),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",pt),i.domElement.addEventListener("wheel",Xt)},this.dispose=()=>{var k,ft,Nt,V,bt,lt;i.domElement&&(i.domElement.style.touchAction="auto"),(k=i.domElement)==null||k.removeEventListener("contextmenu",At),(ft=i.domElement)==null||ft.removeEventListener("pointerdown",C),(Nt=i.domElement)==null||Nt.removeEventListener("pointercancel",pt),(V=i.domElement)==null||V.removeEventListener("wheel",Xt),(bt=i.domElement)==null||bt.ownerDocument.removeEventListener("pointermove",at),(lt=i.domElement)==null||lt.ownerDocument.removeEventListener("pointerup",pt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Dt)};const i=this,r={type:"change"},l={type:"start"},u={type:"end"},f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=f.NONE;const p=1e-6,m=new vy,g=new vy;let v=1;const x=new nt,E=new pe,M=new pe,S=new pe,y=new pe,L=new pe,U=new pe,R=new pe,O=new pe,P=new pe,N=new nt,B=new pe;let b=!1;const A=[],H={};function st(){return 2*Math.PI/60/60*i.autoRotateSpeed}function K(){return Math.pow(.95,i.zoomSpeed)}function ut(k){i.reverseOrbit||i.reverseHorizontalOrbit?g.theta+=k:g.theta-=k}function ct(k){i.reverseOrbit||i.reverseVerticalOrbit?g.phi+=k:g.phi-=k}const X=(()=>{const k=new nt;return function(Nt,V){k.setFromMatrixColumn(V,0),k.multiplyScalar(-Nt),x.add(k)}})(),$=(()=>{const k=new nt;return function(Nt,V){i.screenSpacePanning===!0?k.setFromMatrixColumn(V,1):(k.setFromMatrixColumn(V,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(Nt),x.add(k)}})(),W=(()=>{const k=new nt;return function(Nt,V){const bt=i.domElement;if(bt&&i.object instanceof Qn&&i.object.isPerspectiveCamera){const lt=i.object.position;k.copy(lt).sub(i.target);let _t=k.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),X(2*Nt*_t/bt.clientHeight,i.object.matrix),$(2*V*_t/bt.clientHeight,i.object.matrix)}else bt&&i.object instanceof df&&i.object.isOrthographicCamera?(X(Nt*(i.object.right-i.object.left)/i.object.zoom/bt.clientWidth,i.object.matrix),$(V*(i.object.top-i.object.bottom)/i.object.zoom/bt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function yt(k){i.object instanceof Qn&&i.object.isPerspectiveCamera||i.object instanceof df&&i.object.isOrthographicCamera?v=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(k){yt(v/k)}function it(k){yt(v*k)}function Et(k){if(!i.zoomToCursor||!i.domElement)return;b=!0;const ft=i.domElement.getBoundingClientRect(),Nt=k.clientX-ft.left,V=k.clientY-ft.top,bt=ft.width,lt=ft.height;B.x=Nt/bt*2-1,B.y=-(V/lt)*2+1,N.set(B.x,B.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ct(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function q(k){E.set(k.clientX,k.clientY)}function dt(k){Et(k),R.set(k.clientX,k.clientY)}function St(k){y.set(k.clientX,k.clientY)}function Rt(k){M.set(k.clientX,k.clientY),S.subVectors(M,E).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ut(2*Math.PI*S.x/ft.clientHeight),ct(2*Math.PI*S.y/ft.clientHeight)),E.copy(M),i.update()}function wt(k){O.set(k.clientX,k.clientY),P.subVectors(O,R),P.y>0?z(K()):P.y<0&&it(K()),R.copy(O),i.update()}function te(k){L.set(k.clientX,k.clientY),U.subVectors(L,y).multiplyScalar(i.panSpeed),W(U.x,U.y),y.copy(L),i.update()}function zt(k){Et(k),k.deltaY<0?it(K()):k.deltaY>0&&z(K()),i.update()}function Ae(k){let ft=!1;switch(k.code){case i.keys.UP:W(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:W(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:W(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:W(-i.keyPanSpeed,0),ft=!0;break}ft&&(k.preventDefault(),i.update())}function we(){if(A.length==1)E.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);E.set(k,ft)}}function se(){if(A.length==1)y.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);y.set(k,ft)}}function G(){const k=A[0].pageX-A[1].pageX,ft=A[0].pageY-A[1].pageY,Nt=Math.sqrt(k*k+ft*ft);R.set(0,Nt)}function mn(){i.enableZoom&&G(),i.enablePan&&se()}function ce(){i.enableZoom&&G(),i.enableRotate&&we()}function ue(k){if(A.length==1)M.set(k.pageX,k.pageY);else{const Nt=Ft(k),V=.5*(k.pageX+Nt.x),bt=.5*(k.pageY+Nt.y);M.set(V,bt)}S.subVectors(M,E).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ut(2*Math.PI*S.x/ft.clientHeight),ct(2*Math.PI*S.y/ft.clientHeight)),E.copy(M)}function Yt(k){if(A.length==1)L.set(k.pageX,k.pageY);else{const ft=Ft(k),Nt=.5*(k.pageX+ft.x),V=.5*(k.pageY+ft.y);L.set(Nt,V)}U.subVectors(L,y).multiplyScalar(i.panSpeed),W(U.x,U.y),y.copy(L)}function De(k){const ft=Ft(k),Nt=k.pageX-ft.x,V=k.pageY-ft.y,bt=Math.sqrt(Nt*Nt+V*V);O.set(0,bt),P.set(0,Math.pow(O.y/R.y,i.zoomSpeed)),z(P.y),R.copy(O)}function qt(k){i.enableZoom&&De(k),i.enablePan&&Yt(k)}function I(k){i.enableZoom&&De(k),i.enableRotate&&ue(k)}function C(k){var ft,Nt;i.enabled!==!1&&(A.length===0&&((ft=i.domElement)==null||ft.ownerDocument.addEventListener("pointermove",at),(Nt=i.domElement)==null||Nt.ownerDocument.addEventListener("pointerup",pt)),Gt(k),k.pointerType==="touch"?Vt(k):Mt(k))}function at(k){i.enabled!==!1&&(k.pointerType==="touch"?_e(k):gt(k))}function pt(k){var ft,Nt,V;Jt(k),A.length===0&&((ft=i.domElement)==null||ft.releasePointerCapture(k.pointerId),(Nt=i.domElement)==null||Nt.ownerDocument.removeEventListener("pointermove",at),(V=i.domElement)==null||V.ownerDocument.removeEventListener("pointerup",pt)),i.dispatchEvent(u),d=f.NONE}function Mt(k){let ft;switch(k.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case po.DOLLY:if(i.enableZoom===!1)return;dt(k),d=f.DOLLY;break;case po.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;St(k),d=f.PAN}else{if(i.enableRotate===!1)return;q(k),d=f.ROTATE}break;case po.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;q(k),d=f.ROTATE}else{if(i.enablePan===!1)return;St(k),d=f.PAN}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function gt(k){if(i.enabled!==!1)switch(d){case f.ROTATE:if(i.enableRotate===!1)return;Rt(k);break;case f.DOLLY:if(i.enableZoom===!1)return;wt(k);break;case f.PAN:if(i.enablePan===!1)return;te(k);break}}function Xt(k){i.enabled===!1||i.enableZoom===!1||d!==f.NONE&&d!==f.ROTATE||(k.preventDefault(),i.dispatchEvent(l),zt(k),i.dispatchEvent(u))}function Dt(k){i.enabled===!1||i.enablePan===!1||Ae(k)}function Vt(k){switch(Wt(k),A.length){case 1:switch(i.touches.ONE){case mo.ROTATE:if(i.enableRotate===!1)return;we(),d=f.TOUCH_ROTATE;break;case mo.PAN:if(i.enablePan===!1)return;se(),d=f.TOUCH_PAN;break;default:d=f.NONE}break;case 2:switch(i.touches.TWO){case mo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;mn(),d=f.TOUCH_DOLLY_PAN;break;case mo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(),d=f.TOUCH_DOLLY_ROTATE;break;default:d=f.NONE}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function _e(k){switch(Wt(k),d){case f.TOUCH_ROTATE:if(i.enableRotate===!1)return;ue(k),i.update();break;case f.TOUCH_PAN:if(i.enablePan===!1)return;Yt(k),i.update();break;case f.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qt(k),i.update();break;case f.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(k),i.update();break;default:d=f.NONE}}function At(k){i.enabled!==!1&&k.preventDefault()}function Gt(k){A.push(k)}function Jt(k){delete H[k.pointerId];for(let ft=0;ft<A.length;ft++)if(A[ft].pointerId==k.pointerId){A.splice(ft,1);return}}function Wt(k){let ft=H[k.pointerId];ft===void 0&&(ft=new pe,H[k.pointerId]=ft),ft.set(k.pageX,k.pageY)}function Ft(k){const ft=k.pointerId===A[0].pointerId?A[1]:A[0];return H[ft.pointerId]}this.dollyIn=(k=K())=>{it(k),i.update()},this.dollyOut=(k=K())=>{z(k),i.update()},this.getScale=()=>v,this.setScale=k=>{yt(k),i.update()},this.getZoomScale=()=>K(),e!==void 0&&this.connect(e),this.update()}}class Ew{constructor(t){Ht(this,"renderer");Ht(this,"scene");Ht(this,"camera");Ht(this,"orbitControls");Ht(this,"boundHandleResize");const e=window.innerWidth,i=window.innerHeight;this.renderer=new pw({canvas:t}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,i),this.renderer.setClearColor(0),this.scene=new bb,this.camera=new Qn(tc.FOV,1),this.camera.aspect=e/i,this.camera.position.set(0,0,tc.InitialZPosition),this.camera.updateProjectionMatrix(),this.orbitControls=new Mw(this.camera,t),this.orbitControls.target=new nt(0,0,0),this.orbitControls.minDistance=tc.MinDistance,this.orbitControls.maxDistance=tc.MaxDistance,this.orbitControls.enableRotate=tc.EnableRotate,this.boundHandleResize=this.handleResize.bind(this),window.addEventListener("resize",this.boundHandleResize)}handleResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}updateControls(){this.orbitControls.update()}render(){this.renderer.render(this.scene,this.camera)}addToScene(t){this.scene.add(t)}removeFromScene(t){this.scene.remove(t)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.orbitControls}dispose(){window.removeEventListener("resize",this.boundHandleResize),this.orbitControls.dispose(),this.renderer.dispose()}}function Va(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Vx(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zo={duration:.5,overwrite:!1,delay:0},jm,zn,Ye,ma=1e8,kn=1/ma,Sm=Math.PI*2,Tw=Sm/4,bw=0,Gx=Math.sqrt,Aw=Math.cos,Rw=Math.sin,Dn=function(t){return typeof t=="string"},en=function(t){return typeof t=="function"},Za=function(t){return typeof t=="number"},Zm=function(t){return typeof t>"u"},ga=function(t){return typeof t=="object"},oi=function(t){return t!==!1},Km=function(){return typeof window<"u"},of=function(t){return en(t)||Dn(t)},kx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,Mm=/(?:-?\.?\d|\.)+/gi,Xx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,No=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wx=/[+-]=-?[.\d]+/,Yx=/[^,'"\[\]\s]+/gi,Cw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,ca,Em,Qm,bi={},bf={},qx,jx=function(t){return(bf=Ko(t,bi))&&fi},Jm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},gc=function(t,e){return!e&&console.warn(t)},Zx=function(t,e){return t&&(bi[t]=e)&&bf&&(bf[t]=e)||bi},vc=function(){return 0},ww={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},Dw={suppressEvents:!0},$m={},Nr=[],Tm={},Kx,xi={},Ap={},Yy=30,_f=[],t_="",e_=function(t){var e=t[0],i,r;if(ga(e)||en(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=_f.length;r--&&!_f[r].targetTest(e););i=_f[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new xS(t[r],i)))||t.splice(r,1);return t},bs=function(t){return t._gsap||e_(Vi(t))[0]._gsap},Qx=function(t,e,i){return(i=t[e])&&en(i)?t[e]():Zm(i)&&t.getAttribute&&t.getAttribute(e)||i},li=function(t,e){return(t=t.split(",")).forEach(e)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},pn=function(t){return Math.round(t*1e7)/1e7||0},Fo=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Lw=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Af=function(){var t=Nr.length,e=Nr.slice(0),i,r;for(Tm={},Nr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Jx=function(t,e,i,r){Nr.length&&!zn&&Af(),t.render(e,i,zn&&e<0&&(t._initted||t._startAt)),Nr.length&&!zn&&Af()},$x=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yx).length<2?e:Dn(t)?t.trim():t},tS=function(t){return t},Ai=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Uw=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Ko=function(t,e){for(var i in e)t[i]=e[i];return t},qy=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ga(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},Rf=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},dc=function(t){var e=t.parent||Ze,i=t.keyframes?Uw(Xn(t.keyframes)):Ai;if(oi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Ow=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},eS=function(t,e,i,r,l){var u=t[r],f;if(l)for(f=e[l];u&&u[l]>f;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=u,e.parent=e._dp=t,e},If=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=e._prev,u=e._next;l?l._next=u:t[i]===e&&(t[i]=u),u?u._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},Fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},As=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Nw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bm=function(t,e,i,r){return t._startAt&&(zn?t._startAt.revert(mf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Pw=function o(t){return!t||t._ts&&o(t.parent)},jy=function(t){return t._repeat?Qo(t._tTime,t=t.duration()+t._rDelay)*t:0},Qo=function(t,e){var i=Math.floor(t=pn(t/e));return t&&i===t?i-1:i},Cf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bf=function(t){return t._end=pn(t._start+(t._tDur/Math.abs(t._ts||t._rts||kn)||0))},Ff=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=pn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bf(t),i._dirty||As(i,t)),t},nS=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Cf(t.rawTime(),e),(!e._dur||Cc(0,e.totalDuration(),i)-e._tTime>kn)&&e.render(i,!0)),As(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},fa=function(t,e,i,r){return e.parent&&Fr(e),e._start=pn((Za(i)?i:i||t!==Ze?Bi(t,i,e):t._time)+e._delay),e._end=pn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),eS(t,e,"_first","_last",t._sort?"_start":0),Am(e)||(t._recent=e),r||nS(t,e),t._ts<0&&Ff(t,t._tTime),t},iS=function(t,e){return(bi.ScrollTrigger||Jm("scrollTrigger",e))&&bi.ScrollTrigger.create(e,t)},aS=function(t,e,i,r,l){if(i_(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!zn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kx!==Mi.frame)return Nr.push(t),t._lazy=[l,r],1},zw=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Am=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Iw=function(t,e,i,r){var l=t.ratio,u=e<0||!e&&(!t._start&&zw(t)&&!(!t._initted&&Am(t))||(t._ts<0||t._dp._ts<0)&&!Am(t))?0:1,f=t._rDelay,d=0,p,m,g;if(f&&t._repeat&&(d=Cc(0,t._tDur,e),m=Qo(d,f),t._yoyo&&m&1&&(u=1-u),m!==Qo(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||zn||r||t._zTime===kn||!e&&t._zTime){if(!t._initted&&aS(t,e,r,i,d))return;for(g=t._zTime,t._zTime=e||(i?kn:0),i||(i=e&&!g),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=d,p=t._pt;p;)p.r(u,p.d),p=p._next;e<0&&bm(t,e,i,!0),t._onUpdate&&!i&&Ei(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&Ei(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Fr(t,1),!i&&!zn&&(Ei(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Bw=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Jo=function(t,e,i,r){var l=t._repeat,u=pn(e)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:pn(u*(l+1)+t._rDelay*l):u,f>0&&!r&&Ff(t,t._tTime=t._tDur*f),t.parent&&Bf(t),i||As(t.parent,t),t},Zy=function(t){return t instanceof Jn?As(t):Jo(t,t._dur)},Fw={_start:0,endTime:vc,totalDuration:vc},Bi=function o(t,e,i){var r=t.labels,l=t._recent||Fw,u=t.duration()>=ma?l.endTime(!1):t._dur,f,d,p;return Dn(e)&&(isNaN(e)||e in r)?(d=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:i).totalDuration()/100:1)):f<0?(e in r||(r[e]=u),r[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&i&&(d=d/100*(Xn(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+d:u+d)):e==null?u:+e},pc=function(t,e,i){var r=Za(e[1]),l=(r?2:1)+(t<2?0:1),u=e[l],f,d;if(r&&(u.duration=e[1]),u.parent=i,t){for(f=u,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=oi(d.vars.inherit)&&d.parent;u.immediateRender=oi(f.immediateRender),t<2?u.runBackwards=1:u.startAt=e[l-1]}return new dn(e[0],u,e[l+1])},Vr=function(t,e){return t||t===0?e(t):e},Cc=function(t,e,i){return i<t?t:i>e?e:i},Gn=function(t,e){return!Dn(t)||!(e=Cw.exec(t))?"":e[1]},Hw=function(t,e,i){return Vr(i,function(r){return Cc(t,e,r)})},Rm=[].slice,rS=function(t,e){return t&&ga(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ga(t[0]))&&!t.nodeType&&t!==ca},Vw=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var l;return Dn(r)&&!e||rS(r,1)?(l=i).push.apply(l,Vi(r)):i.push(r)})||i},Vi=function(t,e,i){return Ye&&!e&&Ye.selector?Ye.selector(t):Dn(t)&&!i&&(Em||!$o())?Rm.call((e||Qm).querySelectorAll(t),0):Xn(t)?Vw(t,i):rS(t)?Rm.call(t,0):t?[t]:[]},Cm=function(t){return t=Vi(t)[0]||gc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Vi(e,i.querySelectorAll?i:i===t?gc("Invalid scope")||Qm.createElement("div"):t)}},sS=function(t){return t.sort(function(){return .5-Math.random()})},oS=function(t){if(en(t))return t;var e=ga(t)?t:{each:t},i=Rs(e.ease),r=e.from||0,l=parseFloat(e.base)||0,u={},f=r>0&&r<1,d=isNaN(r)||f,p=e.axis,m=r,g=r;return Dn(r)?m=g={center:.5,edges:.5,end:1}[r]||0:!f&&d&&(m=r[0],g=r[1]),function(v,x,E){var M=(E||e).length,S=u[M],y,L,U,R,O,P,N,B,b;if(!S){if(b=e.grid==="auto"?0:(e.grid||[1,ma])[1],!b){for(N=-1e8;N<(N=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=u[M]=[],y=d?Math.min(b,M)*m-.5:r%b,L=b===ma?0:d?M*g/b-.5:r/b|0,N=0,B=ma,P=0;P<M;P++)U=P%b-y,R=L-(P/b|0),S[P]=O=p?Math.abs(p==="y"?R:U):Gx(U*U+R*R),O>N&&(N=O),O<B&&(B=O);r==="random"&&sS(S),S.max=N-B,S.min=B,S.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Gn(e.amount||e.each)||0,i=i&&M<0?gS(i):i}return M=(S[v]-S.min)/S.max||0,pn(S.b+(i?i(M):M)*S.v)+S.u}},wm=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=pn(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Za(i)?0:Gn(i))}},lS=function(t,e){var i=Xn(t),r,l;return!i&&ga(t)&&(r=i=t.radius||ma,t.values?(t=Vi(t.values),(l=!Za(t[0]))&&(r*=r)):t=wm(t.increment)),Vr(e,i?en(t)?function(u){return l=t(u),Math.abs(l-u)<=r?l:u}:function(u){for(var f=parseFloat(l?u.x:u),d=parseFloat(l?u.y:0),p=ma,m=0,g=t.length,v,x;g--;)l?(v=t[g].x-f,x=t[g].y-d,v=v*v+x*x):v=Math.abs(t[g]-f),v<p&&(p=v,m=g);return m=!r||p<=r?t[m]:u,l||m===u||Za(u)?m:m+Gn(u)}:wm(t))},cS=function(t,e,i,r){return Vr(Xn(t)?!e:i===!0?!!(i=0):!r,function(){return Xn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},Gw=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(l,u){return u(l)},r)}},kw=function(t,e){return function(i){return t(parseFloat(i))+(e||Gn(i))}},Xw=function(t,e,i){return fS(t,e,0,1,i)},uS=function(t,e,i){return Vr(i,function(r){return t[~~e(r)]})},Ww=function o(t,e,i){var r=e-t;return Xn(t)?uS(t,o(0,t.length),e):Vr(i,function(l){return(r+(l-t)%r)%r+t})},Yw=function o(t,e,i){var r=e-t,l=r*2;return Xn(t)?uS(t,o(0,t.length-1),e):Vr(i,function(u){return u=(l+(u-t)%l)%l||0,t+(u>r?l-u:u)})},yc=function(t){for(var e=0,i="",r,l,u,f;~(r=t.indexOf("random(",e));)u=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,u-r-7).match(f?Yx:Mm),i+=t.substr(e,r-e)+cS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=u+1;return i+t.substr(e,t.length-e)},fS=function(t,e,i,r,l){var u=e-t,f=r-i;return Vr(l,function(d){return i+((d-t)/u*f||0)})},qw=function o(t,e,i,r){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var u=Dn(t),f={},d,p,m,g,v;if(i===!0&&(r=1)&&(i=null),u)t={p:t},e={p:e};else if(Xn(t)&&!Xn(e)){for(m=[],g=t.length,v=g-2,p=1;p<g;p++)m.push(o(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},i=e}else r||(t=Ko(Xn(t)?[]:{},t));if(!m){for(d in e)n_.call(f,t,d,"get",e[d]);l=function(E){return s_(E,f)||(u?t.p:t)}}}return Vr(i,l)},Ky=function(t,e,i){var r=t.labels,l=ma,u,f,d;for(u in r)f=r[u]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=u,l=f);return d},Ei=function(t,e,i){var r=t.vars,l=r[e],u=Ye,f=t._ctx,d,p,m;if(l)return d=r[e+"Params"],p=r.callbackScope||t,i&&Nr.length&&Af(),f&&(Ye=f),m=d?l.apply(p,d):l.call(p),Ye=u,m},fc=function(t){return Fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!zn),t.progress()<1&&Ei(t,"onInterrupt"),t},Po,hS=[],dS=function(t){if(t)if(t=!t.name&&t.default||t,Km()||t.headless){var e=t.name,i=en(t),r=e&&!i&&t.init?function(){this._props=[]}:t,l={init:vc,render:s_,add:n_,kill:cD,modifier:lD,rawVars:0},u={targetTest:0,get:0,getSetter:r_,aliases:{},register:0};if($o(),t!==r){if(xi[e])return;Ai(r,Ai(Rf(t,l),u)),Ko(r.prototype,Ko(l,Rf(t,u))),xi[r.prop=e]=r,t.targetTest&&(_f.push(r),$m[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zx(e,r),t.register&&t.register(fi,r,ci)}else hS.push(t)},Ve=255,hc={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Rp=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ve+.5|0},pS=function(t,e,i){var r=t?Za(t)?[t>>16,t>>8&Ve,t&Ve]:0:hc.black,l,u,f,d,p,m,g,v,x,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),hc[t])r=hc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ve,r&Ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ve,t&Ve]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(Mm),!e)d=+r[0]%360/360,p=+r[1]/100,m=+r[2]/100,u=m<=.5?m*(p+1):m+p-m*p,l=m*2-u,r.length>3&&(r[3]*=1),r[0]=Rp(d+1/3,l,u),r[1]=Rp(d,l,u),r[2]=Rp(d-1/3,l,u);else if(~t.indexOf("="))return r=t.match(Xx),i&&r.length<4&&(r[3]=1),r}else r=t.match(Mm)||hc.transparent;r=r.map(Number)}return e&&!E&&(l=r[0]/Ve,u=r[1]/Ve,f=r[2]/Ve,g=Math.max(l,u,f),v=Math.min(l,u,f),m=(g+v)/2,g===v?d=p=0:(x=g-v,p=m>.5?x/(2-g-v):x/(g+v),d=g===l?(u-f)/x+(u<f?6:0):g===u?(f-l)/x+2:(l-u)/x+4,d*=60),r[0]=~~(d+.5),r[1]=~~(p*100+.5),r[2]=~~(m*100+.5)),i&&r.length<4&&(r[3]=1),r},mS=function(t){var e=[],i=[],r=-1;return t.split(Pr).forEach(function(l){var u=l.match(No)||[];e.push.apply(e,u),i.push(r+=u.length+1)}),e.c=i,e},Qy=function(t,e,i){var r="",l=(t+r).match(Pr),u=e?"hsla(":"rgba(",f=0,d,p,m,g;if(!l)return t;if(l=l.map(function(v){return(v=pS(v,e,1))&&u+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=mS(t),d=i.c,d.join(r)!==m.c.join(r)))for(p=t.replace(Pr,"1").split(No),g=p.length-1;f<g;f++)r+=p[f]+(~d.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!p)for(p=t.split(Pr),g=p.length-1;f<g;f++)r+=p[f]+l[f];return r+p[g]},Pr=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in hc)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),jw=/hsl[a]?\(/,_S=function(t){var e=t.join(" "),i;if(Pr.lastIndex=0,Pr.test(e))return i=jw.test(e),t[1]=Qy(t[1],i),t[0]=Qy(t[0],i,mS(t[1])),!0},xc,Mi=function(){var o=Date.now,t=500,e=33,i=o(),r=i,l=1e3/240,u=l,f=[],d,p,m,g,v,x,E=function M(S){var y=o()-r,L=S===!0,U,R,O,P;if((y>t||y<0)&&(i+=y-e),r+=y,O=r-i,U=O-u,(U>0||L)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,u+=U+(U>=l?4:l-U),R=1),L||(d=p(M)),R)for(x=0;x<f.length;x++)f[x](O,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){qx&&(!Em&&Km()&&(ca=Em=window,Qm=ca.document||{},bi.gsap=fi,(ca.gsapVersions||(ca.gsapVersions=[])).push(fi.version),jx(bf||ca.GreenSockGlobals||!ca.gsap&&ca||{}),hS.forEach(dS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=m||function(S){return setTimeout(S,u-g.time*1e3+1|0)},xc=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),xc=0,p=vc},lagSmoothing:function(S,y){t=S||1/0,e=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),u=g.time*1e3+l},add:function(S,y,L){var U=y?function(R,O,P,N){S(R,O,P,N),g.remove(U)}:S;return g.remove(S),f[L?"unshift":"push"](U),$o(),U},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},g}(),$o=function(){return!xc&&Mi.wake()},be={},Zw=/^[\d.\-M][\d.\-,\s]/,Kw=/["']/g,Qw=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],l=1,u=i.length,f,d,p;l<u;l++)d=i[l],f=l!==u-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),e[r]=isNaN(p)?p.replace(Kw,"").trim():+p,r=d.substr(f+1).trim();return e},Jw=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},$w=function(t){var e=(t+"").split("("),i=be[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Qw(e[1])]:Jw(t).split(",").map($x)):be._CE&&Zw.test(t)?be._CE("",t):i},gS=function(t){return function(e){return 1-t(1-e)}},vS=function o(t,e){for(var i=t._first,r;i;)i instanceof Jn?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Rs=function(t,e){return t&&(en(t)?t:be[t]||$w(t))||e},Os=function(t,e,i,r){i===void 0&&(i=function(d){return 1-e(1-d)}),r===void 0&&(r=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:r},u;return li(t,function(f){be[f]=bi[f]=l,be[u=f.toLowerCase()]=i;for(var d in l)be[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=be[f+"."+d]=l[d]}),l},yS=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Cp=function o(t,e,i){var r=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),u=l/Sm*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*Rw((m-u)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:yS(f);return l=Sm/l,d.config=function(p,m){return o(t,p,m)},d},wp=function o(t,e){e===void 0&&(e=1.70158);var i=function(u){return u?--u*u*((e+1)*u+e)+1:0},r=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:yS(i);return r.config=function(l){return o(t,l)},r};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Os(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});be.Linear.easeNone=be.none=be.Linear.easeIn;Os("Elastic",Cp("in"),Cp("out"),Cp());(function(o,t){var e=1/t,i=2*e,r=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Os("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Os("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Os("Circ",function(o){return-(Gx(1-o*o)-1)});Os("Sine",function(o){return o===1?1:-Aw(o*Tw)+1});Os("Back",wp("in"),wp("out"),wp());be.SteppedEase=be.steps=bi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),l=e?1:0,u=1-kn;return function(f){return((r*Cc(0,u,f)|0)+l)*i}}};Zo.ease=be["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return t_+=o+","+o+"Params,"});var xS=function(t,e){this.id=bw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Qx,this.set=e?e.getSetter:r_},Sc=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jo(this,+e.duration,1,1),this.data=e.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),xc||Mi.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Jo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if($o(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Ff(this,i),!l._dp||l.parent||nS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fa(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===kn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Jx(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+jy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+jy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,r):this._repeat?Qo(this._tTime,l)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Cf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Cc(-Math.abs(this._delay),this._tDur,l),r!==!1),Bf(this),Nw(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kn&&(this._tTime-=kn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fa(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cf(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Dw);var r=zn;return zn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zn=r,this},t.globalTime=function(i){for(var r=this,l=arguments.length?i:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Zy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Zy(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Bi(this,i),oi(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,oi(r)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=r&&l<this.endTime(!0)-kn)},t.eventCallback=function(i,r,l){var u=this.vars;return arguments.length>1?(r?(u[i]=r,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=r)):delete u[i],this):u[i]},t.then=function(i){var r=this;return new Promise(function(l){var u=en(i)?i:tS,f=function(){var p=r.then;r.then=null,en(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=p),l(u),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){fc(this)},o}();Ai(Sc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jn=function(o){Vx(t,o);function t(i,r){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=oi(i.sortChildren),Ze&&fa(i.parent||Ze,Va(l),r),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&iS(Va(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,u){return pc(0,arguments,this),this},e.from=function(r,l,u){return pc(1,arguments,this),this},e.fromTo=function(r,l,u,f){return pc(2,arguments,this),this},e.set=function(r,l,u){return l.duration=0,l.parent=this,dc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new dn(r,l,Bi(this,u),1),this},e.call=function(r,l,u){return fa(this,dn.delayedCall(0,r,l),u)},e.staggerTo=function(r,l,u,f,d,p,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=p,u.onCompleteParams=m,u.parent=this,new dn(r,u,Bi(this,d)),this},e.staggerFrom=function(r,l,u,f,d,p,m){return u.runBackwards=1,dc(u).immediateRender=oi(u.immediateRender),this.staggerTo(r,l,u,f,d,p,m)},e.staggerFromTo=function(r,l,u,f,d,p,m,g){return f.startAt=u,dc(f).immediateRender=oi(f.immediateRender),this.staggerTo(r,l,f,d,p,m,g)},e.render=function(r,l,u){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=r<=0?0:pn(r),g=this._zTime<0!=r<0&&(this._initted||!p),v,x,E,M,S,y,L,U,R,O,P,N;if(this!==Ze&&m>d&&r>=0&&(m=d),m!==this._tTime||u||g){if(f!==this._time&&p&&(m+=this._time-f,r+=this._time-f),v=m,R=this._start,U=this._ts,y=!U,g&&(p||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,S=p+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,l,u);if(v=pn(m%S),m===d?(M=this._repeat,v=p):(O=pn(m/S),M=~~O,M&&M===O&&(v=p,M--),v>p&&(v=p)),O=Qo(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),P&&M&1&&(v=p-v,N=1),M!==O&&!this._lock){var B=P&&O&1,b=B===(P&&M&1);if(M<O&&(B=!B),f=B?0:m%p?p:m,this._lock=1,this.render(f||(N?0:pn(M*S)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;vS(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=Bw(this,pn(f),pn(v)),L&&(m-=v-(v=L._start))),this._tTime=m,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&v&&!l&&!M&&(Ei(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&L!==x){if(x.parent!==this)return this.render(r,l,u);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,u),v!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=-1e-8);break}}x=E}else{x=this._last;for(var A=r<0?r:v;x;){if(E=x._prev,(x._act||A<=x._end)&&x._ts&&L!==x){if(x.parent!==this)return this.render(r,l,u);if(x.render(x._ts>0?(A-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(A-x._start)*x._ts,l,u||zn&&(x._initted||x._startAt)),v!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=A?-1e-8:kn);break}}x=E}}if(L&&!l&&(this.pause(),L.render(v>=f?0:-1e-8)._zTime=v>=f?1:-1,this._ts))return this._start=R,Bf(this),this.render(r,l,u);this._onUpdate&&!l&&Ei(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(R===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((r||!p)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Fr(this,1),!l&&!(r<0&&!f)&&(m||f||!d)&&(Ei(this,m===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var u=this;if(Za(l)||(l=Bi(this,l,r)),!(r instanceof Sc)){if(Xn(r))return r.forEach(function(f){return u.add(f,l)}),this;if(Dn(r))return this.addLabel(r,l);if(en(r))r=dn.delayedCall(0,r);else return this}return this!==r?fa(this,r,l):this},e.getChildren=function(r,l,u,f){r===void 0&&(r=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-1e8);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof dn?l&&d.push(p):(u&&d.push(p),r&&d.push.apply(d,p.getChildren(!0,l,u)))),p=p._next;return d},e.getById=function(r){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===r)return l[u]},e.remove=function(r){return Dn(r)?this.removeLabel(r):en(r)?this.killTweensOf(r):(r.parent===this&&If(this,r),r===this._recent&&(this._recent=this._last),As(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(Mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=Bi(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,u){var f=dn.delayedCall(0,l||vc,u);return f.data="isPause",this._hasPause=1,fa(this,f,Bi(this,r))},e.removePause=function(r){var l=this._first;for(r=Bi(this,r);l;)l._start===r&&l.data==="isPause"&&Fr(l),l=l._next},e.killTweensOf=function(r,l,u){for(var f=this.getTweensOf(r,u),d=f.length;d--;)wr!==f[d]&&f[d].kill(r,l);return this},e.getTweensOf=function(r,l){for(var u=[],f=Vi(r),d=this._first,p=Za(l),m;d;)d instanceof dn?Lw(d._targets,f)&&(p?(!wr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&u.push(d):(m=d.getTweensOf(f,l)).length&&u.push.apply(u,m),d=d._next;return u},e.tweenTo=function(r,l){l=l||{};var u=this,f=Bi(u,r),d=l,p=d.startAt,m=d.onStart,g=d.onStartParams,v=d.immediateRender,x,E=dn.to(u,Ai({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale())||kn,onStart:function(){if(u.pause(),!x){var S=l.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale());E._dur!==S&&Jo(E,S,0,1).render(E._time,!0,!0),x=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(r,l,u){return this.tweenTo(l,Ai({startAt:{time:Bi(this,r)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Ky(this,Bi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Ky(this,Bi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+kn)},e.shiftChildren=function(r,l,u){u===void 0&&(u=0);for(var f=this._first,d=this.labels,p;f;)f._start>=u&&(f._start+=r,f._end+=r),f=f._next;if(l)for(p in d)d[p]>=u&&(d[p]+=r);return As(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),As(this)},e.totalDuration=function(r){var l=0,u=this,f=u._last,d=ma,p,m,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(g=u.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&u._sort&&f._ts&&!u._lock?(u._lock=1,fa(u,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=m/u._ts,u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Jo(u,u===Ze&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(r){if(Ze._ts&&(Jx(Ze,Cf(r,Ze)),Kx=Mi.frame),Mi.frame>=Yy){Yy+=Ti.autoSleep||120;var l=Ze._first;if((!l||!l._ts)&&Ti.autoSleep&&Mi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Mi.sleep()}}},t}(Sc);Ai(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tD=function(t,e,i,r,l,u,f){var d=new ci(this._pt,t,e,0,1,AS,null,l),p=0,m=0,g,v,x,E,M,S,y,L;for(d.b=i,d.e=r,i+="",r+="",(y=~r.indexOf("random("))&&(r=yc(r)),u&&(L=[i,r],u(L,t,e),i=L[0],r=L[1]),v=i.match(bp)||[];g=bp.exec(r);)E=g[0],M=r.substring(p,g.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Fo(S,E)-S:parseFloat(E)-S,m:x&&x<4?Math.round:0},p=bp.lastIndex);return d.c=p<r.length?r.substring(p,r.length):"",d.fp=f,(Wx.test(r)||y)&&(d.e=0),this._pt=d,d},n_=function(t,e,i,r,l,u,f,d,p,m){en(r)&&(r=r(l||0,t,u));var g=t[e],v=i!=="get"?i:en(g)?p?t[e.indexOf("set")||!en(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,x=en(g)?p?rD:TS:a_,E;if(Dn(r)&&(~r.indexOf("random(")&&(r=yc(r)),r.charAt(1)==="="&&(E=Fo(v,r)+(Gn(v)||0),(E||E===0)&&(r=E))),!m||v!==r||Dm)return!isNaN(v*r)&&r!==""?(E=new ci(this._pt,t,e,+v||0,r-(v||0),typeof g=="boolean"?oD:bS,0,x),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&Jm(e,r),tD.call(this,t,e,v,r,x,d||Ti.stringFilter,p))},eD=function(t,e,i,r,l){if(en(t)&&(t=mc(t,l,e,i,r)),!ga(t)||t.style&&t.nodeType||Xn(t)||kx(t))return Dn(t)?mc(t,l,e,i,r):t;var u={},f;for(f in t)u[f]=mc(t[f],l,e,i,r);return u},SS=function(t,e,i,r,l,u){var f,d,p,m;if(xi[t]&&(f=new xi[t]).init(l,f.rawVars?e[t]:eD(e[t],r,l,u,i),i,r,u)!==!1&&(i._pt=d=new ci(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Po))for(p=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=d;return f},wr,Dm,i_=function o(t,e,i){var r=t.vars,l=r.ease,u=r.startAt,f=r.immediateRender,d=r.lazy,p=r.onUpdate,m=r.runBackwards,g=r.yoyoEase,v=r.keyframes,x=r.autoRevert,E=t._dur,M=t._startAt,S=t._targets,y=t.parent,L=y&&y.data==="nested"?y.vars.targets:S,U=t._overwrite==="auto"&&!jm,R=t.timeline,O,P,N,B,b,A,H,st,K,ut,ct,X,$;if(R&&(!v||!l)&&(l="none"),t._ease=Rs(l,Zo.ease),t._yEase=g?gS(Rs(g===!0?l:g,Zo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!r.runBackwards,!R||v&&!r.stagger){if(st=S[0]?bs(S[0]).harness:0,X=st&&r[st.prop],O=Rf(r,$m),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&E?mf:ww),M._lazy=0),u){if(Fr(t._startAt=dn.set(S,Ai({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&oi(d),startAt:null,delay:0,onUpdate:p&&function(){return Ei(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(zn||!f&&!x)&&t._startAt.revert(mf),f&&E&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),N=Ai({overwrite:!1,data:"isFromStart",lazy:f&&!M&&oi(d),immediateRender:f,stagger:0,parent:y},O),X&&(N[st.prop]=X),Fr(t._startAt=dn.set(S,N)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(zn?t._startAt.revert(mf):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,kn,kn);else if(!e)return}for(t._pt=t._ptCache=0,d=E&&oi(d)||d&&!E,P=0;P<S.length;P++){if(b=S[P],H=b._gsap||e_(S)[P]._gsap,t._ptLookup[P]=ut={},Tm[H.id]&&Nr.length&&Af(),ct=L===S?P:L.indexOf(b),st&&(K=new st).init(b,X||O,t,ct,L)!==!1&&(t._pt=B=new ci(t._pt,b,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(W){ut[W]=B}),K.priority&&(A=1)),!st||X)for(N in O)xi[N]&&(K=SS(N,O,t,ct,b,L))?K.priority&&(A=1):ut[N]=B=n_.call(t,b,N,"get",O[N],ct,L,0,r.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),U&&t._pt&&(wr=t,Ze.killTweensOf(b,ut,t.globalTime(e)),$=!t.parent,wr=0),t._pt&&d&&(Tm[H.id]=1)}A&&RS(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!$,v&&e<=0&&R.render(ma,!0,!0)},nD=function(t,e,i,r,l,u,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,v,x;if(!p)for(p=t._ptCache[e]=[],v=t._ptLookup,x=t._targets.length;x--;){if(m=v[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Dm=1,t.vars[e]="+=0",i_(t,f),Dm=0,d?gc(e+" not eligible for reset"):1;p.push(m)}for(x=p.length;x--;)g=p[x],m=g._pt||g,m.s=(r||r===0)&&!l?r:m.s+(r||0)+u*m.c,m.c=i-m.s,g.e&&(g.e=sn(i)+Gn(g.e)),g.b&&(g.b=m.s+Gn(g.b))},iD=function(t,e){var i=t[0]?bs(t[0]).harness:0,r=i&&i.aliases,l,u,f,d;if(!r)return e;l=Ko({},e);for(u in r)if(u in l)for(d=r[u].split(","),f=d.length;f--;)l[d[f]]=l[u];return l},aD=function(t,e,i,r){var l=e.ease||r||"power1.inOut",u,f;if(Xn(e))f=i[t]||(i[t]=[]),e.forEach(function(d,p){return f.push({t:p/(e.length-1)*100,v:d,e:l})});else for(u in e)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:e[u],e:l})},mc=function(t,e,i,r,l){return en(t)?t.call(e,i,r,l):Dn(t)&&~t.indexOf("random(")?yc(t):t},MS=t_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ES={};li(MS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ES[o]=1});var dn=function(o){Vx(t,o);function t(i,r,l,u){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,u?r:dc(r))||this;var d=f.vars,p=d.duration,m=d.delay,g=d.immediateRender,v=d.stagger,x=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,y=d.yoyoEase,L=r.parent||Ze,U=(Xn(i)||kx(i)?Za(i[0]):"length"in r)?[i]:Vi(i),R,O,P,N,B,b,A,H;if(f._targets=U.length?e_(U):gc("GSAP target "+i+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||of(p)||of(m)){if(r=f.vars,R=f.timeline=new Jn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:U}),R.kill(),R.parent=R._dp=Va(f),R._start=0,v||of(p)||of(m)){if(N=U.length,A=v&&oS(v),ga(v))for(B in v)~MS.indexOf(B)&&(H||(H={}),H[B]=v[B]);for(O=0;O<N;O++)P=Rf(r,ES),P.stagger=0,y&&(P.yoyoEase=y),H&&Ko(P,H),b=U[O],P.duration=+mc(p,Va(f),O,b,U),P.delay=(+mc(m,Va(f),O,b,U)||0)-f._delay,!v&&N===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),R.to(b,P,A?A(O,b,U):0),R._ease=be.none;R.duration()?p=m=0:f.timeline=0}else if(E){dc(Ai(R.vars.defaults,{ease:"none"})),R._ease=Rs(E.ease||r.ease||"none");var st=0,K,ut,ct;if(Xn(E))E.forEach(function(X){return R.to(U,X,">")}),R.duration();else{P={};for(B in E)B==="ease"||B==="easeEach"||aD(B,E[B],P,E.easeEach);for(B in P)for(K=P[B].sort(function(X,$){return X.t-$.t}),st=0,O=0;O<K.length;O++)ut=K[O],ct={ease:ut.e,duration:(ut.t-(O?K[O-1].t:0))/100*p},ct[B]=ut.v,R.to(U,ct,st),st+=ct.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return x===!0&&!jm&&(wr=Va(f),Ze.killTweensOf(U),wr=0),fa(L,Va(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!p&&!E&&f._start===pn(L._time)&&oi(g)&&Pw(Va(f))&&L.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),S&&iS(Va(f),S),f}var e=t.prototype;return e.render=function(r,l,u){var f=this._time,d=this._tDur,p=this._dur,m=r<0,g=r>d-kn&&!m?d:r<kn?0:r,v,x,E,M,S,y,L,U,R;if(!p)Iw(this,r,l,u);else if(g!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,u);if(v=pn(g%M),g===d?(E=this._repeat,v=p):(S=pn(g/M),E=~~S,E&&E===S?(v=p,E--):v>p&&(v=p)),y=this._yoyo&&E&1,y&&(R=this._yEase,v=p-v),S=Qo(this._tTime,M),v===f&&!u&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(U&&this._yEase&&vS(U,y),this.vars.repeatRefresh&&!y&&!this._lock&&v!==M&&this._initted&&(this._lock=u=1,this.render(pn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(aS(this,m?r:v,u,l,g))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&E!==S))return this;if(p!==this._dur)return this.render(r,l,u)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(R||this._ease)(v/p),this._from&&(this.ratio=L=1-L),v&&!f&&!l&&!E&&(Ei(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(L,x.d),x=x._next;U&&U.render(r<0?r:U._dur*U._ease(v/this._dur),l,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&bm(this,r,l,u),Ei(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Ei(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&bm(this,r,!0,!0),(r||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Fr(this,1),!l&&!(m&&!f)&&(g||f||y)&&(Ei(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,u,f,d){xc||Mi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||i_(this,p),m=this._ease(p/this._dur),nD(this,r,l,u,f,m,p,d)?this.resetTo(r,l,u,f,1):(Ff(this,0),this.parent||eS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?fc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,wr&&wr.vars.overwrite!==!0)._first||fc(this),this.parent&&u!==this.timeline.totalDuration()&&Jo(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,d=r?Vi(r):f,p=this._ptLookup,m=this._pt,g,v,x,E,M,S,y;if((!l||l==="all")&&Ow(f,d))return l==="all"&&(this._pt=0),fc(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},li(l,function(L){return M[L]=1}),l=M),l=iD(f,l)),y=f.length;y--;)if(~d.indexOf(f[y])){v=p[y],l==="all"?(g[y]=l,E=v,x={}):(x=g[y]=g[y]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&If(this,S,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&fc(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return pc(1,arguments)},t.delayedCall=function(r,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(r,l,u){return pc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,u){return Ze.killTweensOf(r,l,u)},t}(Sc);Ai(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(o){dn[o]=function(){var t=new Jn,e=Rm.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var a_=function(t,e,i){return t[e]=i},TS=function(t,e,i){return t[e](i)},rD=function(t,e,i,r){return t[e](r.fp,i)},sD=function(t,e,i){return t.setAttribute(e,i)},r_=function(t,e){return en(t[e])?TS:Zm(t[e])&&t.setAttribute?sD:a_},bS=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},oD=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},AS=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},s_=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},lD=function(t,e,i,r){for(var l=this._pt,u;l;)u=l._next,l.p===r&&l.modifier(t,e,i),l=u},cD=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?If(this,e,"_pt"):e.dep||(i=1),e=r;return!i},uD=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},RS=function(t){for(var e=t._pt,i,r,l,u;e;){for(i=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:u)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:u=e,e=i}t._pt=l},ci=function(){function o(e,i,r,l,u,f,d,p,m){this.t=i,this.s=l,this.c=u,this.p=r,this.r=f||bS,this.d=d||this,this.set=p||a_,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,r,l){this.mSet=this.mSet||this.set,this.set=uD,this.m=i,this.mt=l,this.tween=r},o}();li(t_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return $m[o]=1});bi.TweenMax=bi.TweenLite=dn;bi.TimelineLite=bi.TimelineMax=Jn;Ze=new Jn({sortChildren:!1,defaults:Zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=_S;var Cs=[],gf={},fD=[],Jy=0,hD=0,Dp=function(t){return(gf[t]||fD).map(function(e){return e()})},Lm=function(){var t=Date.now(),e=[];t-Jy>2&&(Dp("matchMediaInit"),Cs.forEach(function(i){var r=i.queries,l=i.conditions,u,f,d,p;for(f in r)u=ca.matchMedia(r[f]).matches,u&&(d=1),u!==l[f]&&(l[f]=u,p=1);p&&(i.revert(),d&&e.push(i))}),Dp("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Jy=t,Dp("matchMedia"))},CS=function(){function o(e,i){this.selector=i&&Cm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=hD++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,r,l){en(i)&&(l=r,r=i,i=en);var u=this,f=function(){var p=Ye,m=u.selector,g;return p&&p!==u&&p.data.push(u),l&&(u.selector=Cm(l)),Ye=u,g=r.apply(u,arguments),en(g)&&u._r.push(g),Ye=p,u.selector=m,u.isReverted=!1,g};return u.last=f,i===en?f(u,function(d){return u.add(null,d)}):i?u[i]=f:f},t.ignore=function(i){var r=Ye;Ye=null,i(this),Ye=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof o?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var l=this;if(i?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)p=l.data[d],p instanceof Jn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof dn)&&p.revert&&p.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var u=Cs.length;u--;)Cs[u].id===this.id&&Cs.splice(u,1)},t.revert=function(i){this.kill(i||{})},o}(),dD=function(){function o(e){this.contexts=[],this.scope=e,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(i,r,l){ga(i)||(i={matches:i});var u=new CS(0,l||this.scope),f=u.conditions={},d,p,m;Ye&&!u.selector&&(u.selector=Ye.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=i;for(p in i)p==="all"?m=1:(d=ca.matchMedia(i[p]),d&&(Cs.indexOf(u)<0&&Cs.push(u),(f[p]=d.matches)&&(m=1),d.addListener?d.addListener(Lm):d.addEventListener("change",Lm)));return m&&r(u,function(g){return u.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},o}(),wf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return dS(r)})},timeline:function(t){return new Jn(t)},getTweensOf:function(t,e){return Ze.getTweensOf(t,e)},getProperty:function(t,e,i,r){Dn(t)&&(t=Vi(t)[0]);var l=bs(t||{}).get,u=i?tS:$x;return i==="native"&&(i=""),t&&(e?u((xi[e]&&xi[e].get||l)(t,e,i,r)):function(f,d,p){return u((xi[f]&&xi[f].get||l)(t,f,d,p))})},quickSetter:function(t,e,i){if(t=Vi(t),t.length>1){var r=t.map(function(m){return fi.quickSetter(m,e,i)}),l=r.length;return function(m){for(var g=l;g--;)r[g](m)}}t=t[0]||{};var u=xi[e],f=bs(t),d=f.harness&&(f.harness.aliases||{})[e]||e,p=u?function(m){var g=new u;Po._pt=0,g.init(t,i?m+i:m,Po,0,[t]),g.render(1,g),Po._pt&&s_(1,Po)}:f.set(t,d);return u?p:function(m){return p(t,d,i?m+i:m,f,1)}},quickTo:function(t,e,i){var r,l=fi.to(t,Ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),u=function(d,p,m){return l.resetTo(e,d,p,m)};return u.tween=l,u},isTweening:function(t){return Ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Rs(t.ease,Zo.ease)),qy(Zo,t||{})},config:function(t){return qy(Ti,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,l=t.defaults,u=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!xi[f]&&!bi[f]&&gc(e+" effect requires "+f+" plugin.")}),Ap[e]=function(f,d,p){return i(Vi(f),Ai(d||{},l),p)},u&&(Jn.prototype[e]=function(f,d,p){return this.add(Ap[e](f,ga(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,e){be[t]=Rs(e)},parseEase:function(t,e){return arguments.length?Rs(t,e):be},getById:function(t){return Ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Jn(t),r,l;for(i.smoothChildTiming=oi(t.smoothChildTiming),Ze.remove(i),i._dp=0,i._time=i._tTime=Ze._time,r=Ze._first;r;)l=r._next,(e||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&fa(i,r,r._start-r._delay),r=l;return fa(Ze,i,0),i},context:function(t,e){return t?new CS(t,e):Ye},matchMedia:function(t){return new dD(t)},matchMediaRefresh:function(){return Cs.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||Lm()},addEventListener:function(t,e){var i=gf[t]||(gf[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=gf[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Ww,wrapYoyo:Yw,distribute:oS,random:cS,snap:lS,normalize:Xw,getUnit:Gn,clamp:Hw,splitColor:pS,toArray:Vi,selector:Cm,mapRange:fS,pipe:Gw,unitize:kw,interpolate:qw,shuffle:sS},install:jx,effects:Ap,ticker:Mi,updateRoot:Jn.updateRoot,plugins:xi,globalTimeline:Ze,core:{PropTween:ci,globals:Zx,Tween:dn,Timeline:Jn,Animation:Sc,getCache:bs,_removeLinkedListItem:If,reverting:function(){return zn},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return jm=t}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return wf[o]=dn[o]});Mi.add(Jn.updateRoot);Po=wf.to({},{duration:0});var pD=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},mD=function(t,e){var i=t._targets,r,l,u;for(r in e)for(l=i.length;l--;)u=t._ptLookup[l][r],u&&(u=u.d)&&(u._pt&&(u=pD(u,r)),u&&u.modifier&&u.modifier(e[r],t,i[l],r))},Lp=function(t,e){return{name:t,rawVars:1,init:function(r,l,u){u._onInit=function(f){var d,p;if(Dn(l)&&(d={},li(l,function(m){return d[m]=1}),l=d),e){d={};for(p in l)d[p]=e(l[p]);l=d}mD(f,l)}}}},fi=wf.registerPlugin({name:"attr",init:function(t,e,i,r,l){var u,f,d;this.tween=i;for(u in e)d=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(d||0)+"",e[u],r,l,0,0,u),f.op=u,f.b=d,this._props.push(u)},render:function(t,e){for(var i=e._pt;i;)zn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Lp("roundProps",wm),Lp("modifiers"),Lp("snap",lS))||wf;dn.version=Jn.version=fi.version="3.12.7";qx=1;Km()&&$o();be.Power0;be.Power1;be.Power2;be.Power3;be.Power4;be.Linear;be.Quad;be.Cubic;be.Quart;be.Quint;be.Strong;be.Elastic;be.Back;be.SteppedEase;be.Bounce;be.Sine;be.Expo;be.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $y,Dr,Ho,o_,Ts,tx,l_,_D=function(){return typeof window<"u"},Ka={},ys=180/Math.PI,Vo=Math.PI/180,Do=Math.atan2,ex=1e8,c_=/([A-Z])/g,gD=/(left|right|width|margin|padding|x)/i,vD=/[\s,\(]\S/,da={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Um=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yD=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xD=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},SD=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},wS=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},DS=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},MD=function(t,e,i){return t.style[e]=i},ED=function(t,e,i){return t.style.setProperty(e,i)},TD=function(t,e,i){return t._gsap[e]=i},bD=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},AD=function(t,e,i,r,l){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},RD=function(t,e,i,r,l){var u=t._gsap;u[e]=i,u.renderTransform(l,u)},Ke="transform",ui=Ke+"Origin",CD=function o(t,e){var i=this,r=this.target,l=r.style,u=r._gsap;if(t in Ka&&l){if(this.tfm=this.tfm||{},t!=="transform")t=da[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ga(r,f)}):this.tfm[t]=u.x?u[t]:Ga(r,t),t===ui&&(this.tfm.zOrigin=u.zOrigin);else return da.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(Ke)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,e,"")),t=Ke}(l||e)&&this.props.push(t,e,l[t])},LS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},wD=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(c_,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=l_(),(!l||!l.isStart)&&!i[Ke]&&(LS(i),r.zOrigin&&i[ui]&&(i[ui]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},US=function(t,e){var i={target:t,props:[],revert:wD,save:CD};return t._gsap||fi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},OS,Om=function(t,e){var i=Dr.createElementNS?Dr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Dr.createElement(t);return i&&i.style?i:Dr.createElement(t)},_a=function o(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(c_,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&o(t,tl(e)||e,1)||""},nx="O,Moz,ms,Ms,Webkit".split(","),tl=function(t,e,i){var r=e||Ts,l=r.style,u=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(nx[u]+t in l););return u<0?null:(u===3?"ms":u>=0?nx[u]:"")+t},Nm=function(){_D()&&window.document&&($y=window,Dr=$y.document,Ho=Dr.documentElement,Ts=Om("div")||{style:{}},Om("div"),Ke=tl(Ke),ui=Ke+"Origin",Ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",OS=!!tl("perspective"),l_=fi.core.reverting,o_=1)},ix=function(t){var e=t.ownerSVGElement,i=Om("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",i.appendChild(r),Ho.appendChild(i);try{l=r.getBBox()}catch{}return i.removeChild(r),Ho.removeChild(i),l},ax=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},NS=function(t){var e,i;try{e=t.getBBox()}catch{e=ix(t),i=1}return e&&(e.width||e.height)||i||(e=ix(t)),e&&!e.width&&!e.x&&!e.y?{x:+ax(t,["x","cx","x1"])||0,y:+ax(t,["y","cy","y1"])||0,width:0,height:0}:e},PS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&NS(t))},Us=function(t,e){if(e){var i=t.style,r;e in Ka&&e!==ui&&(e=Ke),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(c_,"-$1").toLowerCase())):i.removeAttribute(e)}},Lr=function(t,e,i,r,l,u){var f=new ci(t._pt,e,i,0,1,u?DS:wS);return t._pt=f,f.b=r,f.e=l,t._props.push(i),f},rx={deg:1,rad:1,turn:1},DD={grid:1,flex:1},Hr=function o(t,e,i,r){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Ts.style,d=gD.test(e),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=r==="px",x=r==="%",E,M,S,y;if(r===u||!l||rx[r]||rx[u])return l;if(u!=="px"&&!v&&(l=o(t,e,i,"px")),y=t.getCTM&&PS(t),(x||u==="%")&&(Ka[e]||~e.indexOf("adius")))return E=y?t.getBBox()[d?"width":"height"]:t[m],sn(x?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?u:r),M=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!p?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Dr||!M.appendChild)&&(M=Dr.body),S=M._gsap,S&&x&&S.width&&d&&S.time===Mi.time&&!S.uncache)return sn(l/S.width*g);if(x&&(e==="height"||e==="width")){var L=t.style[e];t.style[e]=g+r,E=t[m],L?t.style[e]=L:Us(t,e)}else(x||u==="%")&&!DD[_a(M,"display")]&&(f.position=_a(t,"position")),M===t&&(f.position="static"),M.appendChild(Ts),E=Ts[m],M.removeChild(Ts),f.position="absolute";return d&&x&&(S=bs(M),S.time=Mi.time,S.width=M[m]),sn(v?E*l/g:E&&l?g/E*l:0)},Ga=function(t,e,i,r){var l;return o_||Nm(),e in da&&e!=="transform"&&(e=da[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ka[e]&&e!=="transform"?(l=Ec(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Lf(_a(t,ui))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Df[e]&&Df[e](t,e,i)||_a(t,e)||Qx(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Hr(t,e,l,i)+i:l},LD=function(t,e,i,r){if(!i||i==="none"){var l=tl(e,t,1),u=l&&_a(t,l,1);u&&u!==i?(e=l,i=u):e==="borderColor"&&(i=_a(t,"borderTopColor"))}var f=new ci(this._pt,t.style,e,0,1,AS),d=0,p=0,m,g,v,x,E,M,S,y,L,U,R,O;if(f.b=i,f.e=r,i+="",r+="",r==="auto"&&(M=t.style[e],t.style[e]=r,r=_a(t,e)||r,M?t.style[e]=M:Us(t,e)),m=[i,r],_S(m),i=m[0],r=m[1],v=i.match(No)||[],O=r.match(No)||[],O.length){for(;g=No.exec(r);)S=g[0],L=r.substring(d,g.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),S!==(M=v[p++]||"")&&(x=parseFloat(M)||0,R=M.substr((x+"").length),S.charAt(1)==="="&&(S=Fo(x,S)+R),y=parseFloat(S),U=S.substr((y+"").length),d=No.lastIndex-U.length,U||(U=U||Ti.units[e]||R,d===r.length&&(r+=U,f.e+=U)),R!==U&&(x=Hr(t,e,M,U)||0),f._pt={_next:f._pt,p:L||p===1?L:",",s:x,c:y-x,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=d<r.length?r.substring(d,r.length):""}else f.r=e==="display"&&r==="none"?DS:wS;return Wx.test(r)&&(f.e=0),this._pt=f,f},sx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UD=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=sx[i]||i,e[1]=sx[r]||r,e.join(" ")},OD=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,l=e.u,u=i._gsap,f,d,p;if(l==="all"||l===!0)r.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],Ka[f]&&(d=1,f=f==="transformOrigin"?ui:Ke),Us(i,f);d&&(Us(i,Ke),u&&(u.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ec(i,1),u.uncache=1,LS(r)))}},Df={clearProps:function(t,e,i,r,l){if(l.data!=="isFromStart"){var u=t._pt=new ci(t._pt,e,i,0,0,OD);return u.u=r,u.pr=-10,u.tween=l,t._props.push(i),1}}},Mc=[1,0,0,1,0,0],zS={},IS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ox=function(t){var e=_a(t,Ke);return IS(e)?Mc:e.substr(7).match(Xx).map(sn)},u_=function(t,e){var i=t._gsap||bs(t),r=t.style,l=ox(t),u,f,d,p;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Mc:l):(l===Mc&&!t.offsetParent&&t!==Ho&&!i.svg&&(d=r.display,r.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Ho.appendChild(t)),l=ox(t),d?r.display=d:Us(t,"display"),p&&(f?u.insertBefore(t,f):u?u.appendChild(t):Ho.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Pm=function(t,e,i,r,l,u){var f=t._gsap,d=l||u_(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=d[0],E=d[1],M=d[2],S=d[3],y=d[4],L=d[5],U=e.split(" "),R=parseFloat(U[0])||0,O=parseFloat(U[1])||0,P,N,B,b;i?d!==Mc&&(N=x*S-E*M)&&(B=R*(S/N)+O*(-M/N)+(M*L-S*y)/N,b=R*(-E/N)+O*(x/N)-(x*L-E*y)/N,R=B,O=b):(P=NS(t),R=P.x+(~U[0].indexOf("%")?R/100*P.width:R),O=P.y+(~(U[1]||U[0]).indexOf("%")?O/100*P.height:O)),r||r!==!1&&f.smooth?(y=R-p,L=O-m,f.xOffset=g+(y*x+L*M)-y,f.yOffset=v+(y*E+L*S)-L):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=O,f.smooth=!!r,f.origin=e,f.originIsAbsolute=!!i,t.style[ui]="0px 0px",u&&(Lr(u,f,"xOrigin",p,R),Lr(u,f,"yOrigin",m,O),Lr(u,f,"xOffset",g,f.xOffset),Lr(u,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+O)},Ec=function(t,e){var i=t._gsap||new xS(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,l=i.scaleX<0,u="px",f="deg",d=getComputedStyle(t),p=_a(t,ui)||"0",m,g,v,x,E,M,S,y,L,U,R,O,P,N,B,b,A,H,st,K,ut,ct,X,$,W,yt,z,it,Et,Ct,q,dt;return m=g=v=M=S=y=L=U=R=0,x=E=1,i.svg=!!(t.getCTM&&PS(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[Ke]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Ke]!=="none"?d[Ke]:"")),r.scale=r.rotate=r.translate="none"),N=u_(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),p=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Pm(t,$||p,!!$||i.originIsAbsolute,i.smooth!==!1,N)),O=i.xOrigin||0,P=i.yOrigin||0,N!==Mc&&(H=N[0],st=N[1],K=N[2],ut=N[3],m=ct=N[4],g=X=N[5],N.length===6?(x=Math.sqrt(H*H+st*st),E=Math.sqrt(ut*ut+K*K),M=H||st?Do(st,H)*ys:0,L=K||ut?Do(K,ut)*ys+M:0,L&&(E*=Math.abs(Math.cos(L*Vo))),i.svg&&(m-=O-(O*H+P*K),g-=P-(O*st+P*ut))):(dt=N[6],Ct=N[7],z=N[8],it=N[9],Et=N[10],q=N[11],m=N[12],g=N[13],v=N[14],B=Do(dt,Et),S=B*ys,B&&(b=Math.cos(-B),A=Math.sin(-B),$=ct*b+z*A,W=X*b+it*A,yt=dt*b+Et*A,z=ct*-A+z*b,it=X*-A+it*b,Et=dt*-A+Et*b,q=Ct*-A+q*b,ct=$,X=W,dt=yt),B=Do(-K,Et),y=B*ys,B&&(b=Math.cos(-B),A=Math.sin(-B),$=H*b-z*A,W=st*b-it*A,yt=K*b-Et*A,q=ut*A+q*b,H=$,st=W,K=yt),B=Do(st,H),M=B*ys,B&&(b=Math.cos(B),A=Math.sin(B),$=H*b+st*A,W=ct*b+X*A,st=st*b-H*A,X=X*b-ct*A,H=$,ct=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,y=180-y),x=sn(Math.sqrt(H*H+st*st+K*K)),E=sn(Math.sqrt(X*X+dt*dt)),B=Do(ct,X),L=Math.abs(B)>2e-4?B*ys:0,R=q?1/(q<0?-q:q):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!IS(_a(t,Ke)),$&&t.setAttribute("transform",$))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(x*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=g-((i.yPercent=g&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=v+u,i.scaleX=sn(x),i.scaleY=sn(E),i.rotation=sn(M)+f,i.rotationX=sn(S)+f,i.rotationY=sn(y)+f,i.skewX=L+f,i.skewY=U+f,i.transformPerspective=R+u,(i.zOrigin=parseFloat(p.split(" ")[2])||!e&&i.zOrigin||0)&&(r[ui]=Lf(p)),i.xOffset=i.yOffset=0,i.force3D=Ti.force3D,i.renderTransform=i.svg?PD:OS?BS:ND,i.uncache=0,i},Lf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Up=function(t,e,i){var r=Gn(e);return sn(parseFloat(e)+parseFloat(Hr(t,"x",i+"px",r)))+r},ND=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,BS(t,e)},ms="0deg",oc="0px",_s=") ",BS=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.z,p=i.rotation,m=i.rotationY,g=i.rotationX,v=i.skewX,x=i.skewY,E=i.scaleX,M=i.scaleY,S=i.transformPerspective,y=i.force3D,L=i.target,U=i.zOrigin,R="",O=y==="auto"&&t&&t!==1||y===!0;if(U&&(g!==ms||m!==ms)){var P=parseFloat(m)*Vo,N=Math.sin(P),B=Math.cos(P),b;P=parseFloat(g)*Vo,b=Math.cos(P),u=Up(L,u,N*b*-U),f=Up(L,f,-Math.sin(P)*-U),d=Up(L,d,B*b*-U+U)}S!==oc&&(R+="perspective("+S+_s),(r||l)&&(R+="translate("+r+"%, "+l+"%) "),(O||u!==oc||f!==oc||d!==oc)&&(R+=d!==oc||O?"translate3d("+u+", "+f+", "+d+") ":"translate("+u+", "+f+_s),p!==ms&&(R+="rotate("+p+_s),m!==ms&&(R+="rotateY("+m+_s),g!==ms&&(R+="rotateX("+g+_s),(v!==ms||x!==ms)&&(R+="skew("+v+", "+x+_s),(E!==1||M!==1)&&(R+="scale("+E+", "+M+_s),L.style[Ke]=R||"translate(0, 0)"},PD=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.rotation,p=i.skewX,m=i.skewY,g=i.scaleX,v=i.scaleY,x=i.target,E=i.xOrigin,M=i.yOrigin,S=i.xOffset,y=i.yOffset,L=i.forceCSS,U=parseFloat(u),R=parseFloat(f),O,P,N,B,b;d=parseFloat(d),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,d+=m),d||p?(d*=Vo,p*=Vo,O=Math.cos(d)*g,P=Math.sin(d)*g,N=Math.sin(d-p)*-v,B=Math.cos(d-p)*v,p&&(m*=Vo,b=Math.tan(p-m),b=Math.sqrt(1+b*b),N*=b,B*=b,m&&(b=Math.tan(m),b=Math.sqrt(1+b*b),O*=b,P*=b)),O=sn(O),P=sn(P),N=sn(N),B=sn(B)):(O=g,B=v,P=N=0),(U&&!~(u+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(U=Hr(x,"x",u,"px"),R=Hr(x,"y",f,"px")),(E||M||S||y)&&(U=sn(U+E-(E*O+M*N)+S),R=sn(R+M-(E*P+M*B)+y)),(r||l)&&(b=x.getBBox(),U=sn(U+r/100*b.width),R=sn(R+l/100*b.height)),b="matrix("+O+","+P+","+N+","+B+","+U+","+R+")",x.setAttribute("transform",b),L&&(x.style[Ke]=b)},zD=function(t,e,i,r,l){var u=360,f=Dn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?ys:1),p=d-r,m=r+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=u,p!==p%(u/2)&&(p+=p<0?u:-360)),g==="cw"&&p<0?p=(p+u*ex)%u-~~(p/u)*u:g==="ccw"&&p>0&&(p=(p-u*ex)%u-~~(p/u)*u)),t._pt=v=new ci(t._pt,e,i,r,p,yD),v.e=m,v.u="deg",t._props.push(i),v},lx=function(t,e){for(var i in e)t[i]=e[i];return t},ID=function(t,e,i){var r=lx({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,d,p,m,g,v,x,E;r.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),u[Ke]=e,f=Ec(i,1),Us(i,Ke),i.setAttribute("transform",p)):(p=getComputedStyle(i)[Ke],u[Ke]=e,f=Ec(i,1),u[Ke]=p);for(d in Ka)p=r[d],m=f[d],p!==m&&l.indexOf(d)<0&&(x=Gn(p),E=Gn(m),g=x!==E?Hr(i,d,p,E):parseFloat(p),v=parseFloat(m),t._pt=new ci(t._pt,f,d,g,v-g,Um),t._pt.u=E||0,t._props.push(d));lx(f,r)};li("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",r="Bottom",l="Left",u=(t<3?[e,i,r,l]:[e+l,e+i,r+i,r+l]).map(function(f){return t<2?o+f:"border"+f+o});Df[t>1?"border"+o:o]=function(f,d,p,m,g){var v,x;if(arguments.length<4)return v=u.map(function(E){return Ga(f,E,p)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(m+"").split(" "),x={},u.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,x,g)}});var FS={name:"css",register:Nm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,l){var u=this._props,f=t.style,d=i.vars.startAt,p,m,g,v,x,E,M,S,y,L,U,R,O,P,N,B;o_||Nm(),this.styles=this.styles||US(t),B=this.styles.props,this.tween=i;for(M in e)if(M!=="autoRound"&&(m=e[M],!(xi[M]&&SS(M,e,i,r,t,l)))){if(x=typeof m,E=Df[M],x==="function"&&(m=m.call(i,r,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=yc(m)),E)E(this,t,M,m,i)&&(N=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Pr.lastIndex=0,Pr.test(p)||(S=Gn(p),y=Gn(m)),y?S!==y&&(p=Hr(t,M,p,y)+y):S&&(m+=S),this.add(f,"setProperty",p,m,r,l,0,0,M),u.push(M),B.push(M,0,f[M]);else if(x!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(i,r,t,l):d[M],Dn(p)&&~p.indexOf("random(")&&(p=yc(p)),Gn(p+"")||p==="auto"||(p+=Ti.units[M]||Gn(Ga(t,M))||""),(p+"").charAt(1)==="="&&(p=Ga(t,M))):p=Ga(t,M),v=parseFloat(p),L=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),L&&(m=m.substr(2)),g=parseFloat(m),M in da&&(M==="autoAlpha"&&(v===1&&Ga(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),Lr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=da[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Ka,U){if(this.styles.save(M),R||(O=t._gsap,O.renderTransform&&!e.parseTransform||Ec(t,e.parseTransform),P=e.smoothOrigin!==!1&&O.smooth,R=this._pt=new ci(this._pt,f,Ke,0,1,O.renderTransform,O,0,-1),R.dep=1),M==="scale")this._pt=new ci(this._pt,O,"scaleY",O.scaleY,(L?Fo(O.scaleY,L+g):g)-O.scaleY||0,Um),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ui,0,f[ui]),m=UD(m),O.svg?Pm(t,m,0,P,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==O.zOrigin&&Lr(this,O,"zOrigin",O.zOrigin,y),Lr(this,f,M,Lf(p),Lf(m)));continue}else if(M==="svgOrigin"){Pm(t,m,1,P,0,this);continue}else if(M in zS){zD(this,O,M,v,L?Fo(v,L+m):m);continue}else if(M==="smoothOrigin"){Lr(this,O,"smooth",O.smooth,m);continue}else if(M==="force3D"){O[M]=m;continue}else if(M==="transform"){ID(this,m,t);continue}}else M in f||(M=tl(M)||M);if(U||(g||g===0)&&(v||v===0)&&!vD.test(m)&&M in f)S=(p+"").substr((v+"").length),g||(g=0),y=Gn(m)||(M in Ti.units?Ti.units[M]:S),S!==y&&(v=Hr(t,M,p,y)),this._pt=new ci(this._pt,U?O:f,M,v,(L?Fo(v,L+g):g)-v,!U&&(y==="px"||M==="zIndex")&&e.autoRound!==!1?SD:Um),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=p,this._pt.r=xD);else if(M in f)LD.call(this,t,M,p,L?L+m:m);else if(M in t)this.add(t,M,p||t[M],L?L+m:m,r,l);else if(M!=="parseTransform"){Jm(M,m);continue}U||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,p||t[M])),u.push(M)}}N&&RS(this)},render:function(t,e){if(e.tween._time||!l_())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ga,aliases:da,getSetter:function(t,e,i){var r=da[e];return r&&r.indexOf(",")<0&&(e=r),e in Ka&&e!==ui&&(t._gsap.x||Ga(t,"x"))?i&&tx===i?e==="scale"?bD:TD:(tx=i||{})&&(e==="scale"?AD:RD):t.style&&!Zm(t.style[e])?MD:~e.indexOf("-")?ED:r_(t,e)},core:{_removeProperty:Us,_getMatrix:u_}};fi.utils.checkPrefix=tl;fi.core.getStyleSaver=US;(function(o,t,e,i){var r=li(o+","+t+","+e,function(l){Ka[l]=1});li(t,function(l){Ti.units[l]="deg",zS[l]=1}),da[r[13]]=o+","+t,li(i,function(l){var u=l.split(":");da[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ti.units[o]="px"});fi.registerPlugin(FS);var Lo=fi.registerPlugin(FS)||fi;Lo.core.Tween;class BD{constructor(t){Ht(this,"scene");Ht(this,"viewAngleLines");Ht(this,"isVisible");this.scene=t,this.viewAngleLines=[],this.isVisible=ls.ShowViewAngleEdges}toggle(){return this.isVisible=!this.isVisible,this.isVisible}setVisible(t){this.isVisible=t}getVisible(){return this.isVisible}draw(t,e){if(this.clear(),!this.isVisible)return;const i=e*Math.PI/180,r=zr.ViewAngle*Math.PI/180,l=zr.MaxViewDistance,u=new Sf({color:ls.EdgeColor,transparent:!0,opacity:ls.EdgeOpacity,linewidth:ls.EdgeLineWidth});this.drawEdgeLine(t,i-r,l,u),this.drawEdgeLine(t,i+r,l,u);const f=new Sf({color:ls.EdgeColor,transparent:!0,opacity:ls.EdgeOpacity*1.2,linewidth:ls.EdgeLineWidth});this.drawEdgeLine(t,i,l,f)}drawEdgeLine(t,e,i,r){const l={x:t.x+i*Math.cos(e),y:t.y+i*Math.sin(e)},u=[new nt(t.x,t.y,0),new nt(l.x,l.y,0)],f=new ea().setFromPoints(u),d=new Ym(f,r);this.scene.add(d),this.viewAngleLines.push(d)}clear(){for(const t of this.viewAngleLines)this.scene.remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose();this.viewAngleLines=[]}dispose(){this.clear()}}class Zn{static createNodeCircle(t,e,i=Ar.CircleSize){const r=new Tf(i,Ar.CircleSegments).center(),l=new Uo({color:Ar.DefaultColor}),u=new Hi(r,l);return u.position.set(t,e,0),u}static createPlayer(t=16776960){const e=zr.CubeSize,i=new nl(e,e,e),r=new Uo({color:t});return new Hi(i,r)}static createLineSegment(t,e,i,r){const l=new Sf({color:Ki.LineColor}),u=[new nt(t,e,0),new nt(i,r,0)],f=new ea().setFromPoints(u);return new Ym(f,l)}static createUndefinedMesh(){const t=new Tf,e=new Uo;return new Hi(t,e)}static setMeshColor(t,e){t.material instanceof Uo&&t.material.color.setHex(e)}static setMeshPosition(t,e,i,r=0){t.position.set(e,i,r)}static setMeshScale(t,e){t.scale.set(e,e,e)}}class FD{constructor(t,e,i){Ht(this,"sceneManager");Ht(this,"model");Ht(this,"viewAngleVisualizer");Ht(this,"meshList",[]);Ht(this,"playerMeshes",new Map);Ht(this,"meshToNodeMap",new Map);Ht(this,"nodeToMeshMap",new Map);Ht(this,"playerSelectMesh");Ht(this,"playerNextMesh");Ht(this,"playerShotMesh");Ht(this,"undefinedMesh");Ht(this,"activePlayerId");this.sceneManager=t,this.model=e,this.activePlayerId=i,this.viewAngleVisualizer=new BD(t.getScene()),this.playerSelectMesh=Zn.createUndefinedMesh(),this.playerNextMesh=Zn.createUndefinedMesh(),this.playerShotMesh=Zn.createUndefinedMesh(),this.undefinedMesh=Zn.createUndefinedMesh(),this.initializeVisualization()}initializeVisualization(){for(const t of this.model.nodeList){const e=Zn.createNodeCircle(t.x,t.y);this.sceneManager.addToScene(e),this.meshList.push(e),this.meshToNodeMap.set(e.id,t.id),this.nodeToMeshMap.set(t.id,e.id)}for(const t of this.model.Lines){const e=Zn.createLineSegment(t.start.x,t.start.y,t.end.x,t.end.y);this.sceneManager.addToScene(e)}for(const[t,e]of this.model.players){const i=Zn.createPlayer(e.color);this.sceneManager.addToScene(i),this.playerMeshes.set(t,i)}}updateView(){const t=this.model.getPlayer(this.activePlayerId);t&&(this.updatePlayers(),this.resetNodeColors(),this.viewAngleVisualizer.draw(t.node,t.angle),this.updateVisibleNodes(t),this.updateSpecialNodes())}updatePlayers(){for(const[t,e]of this.model.players){const i=this.playerMeshes.get(t);if(i){Lo.to(i.position,{x:e.node.x,y:e.node.y,duration:ho.MovementDuration});const r=t===this.activePlayerId?kv.ACTIVE_SCALE:kv.NORMAL_SCALE;i.scale.set(r,r,r)}}}resetNodeColors(){this.meshList.forEach(t=>{Zn.setMeshColor(t,Ar.DefaultColor)})}updateSpecialNodes(){this.playerShotMesh&&this.playerShotMesh!==this.undefinedMesh&&(Zn.setMeshColor(this.playerShotMesh,Ar.ShotTargetColor),Lo.fromTo(this.playerShotMesh.scale,{x:1,y:1},{x:ho.ShotPulseScale,y:ho.ShotPulseScale,duration:ho.ShotPulseDuration,yoyo:!0,repeat:1,repeatDelay:ho.ShotPulseRepeatDelay,ease:ho.ShotPulseEase,overwrite:"auto"})),this.playerSelectMesh&&this.playerSelectMesh!==this.undefinedMesh&&Zn.setMeshColor(this.playerSelectMesh,Ar.SelectedColor),this.playerNextMesh&&this.playerNextMesh!==this.undefinedMesh&&Zn.setMeshColor(this.playerNextMesh,Ar.NextMoveColor)}updateVisibleNodes(t){const e=this.model.getVisibleNodesAtAngle(t.node,t.angle,zr.MaxViewDistance);for(const i of e){const r=this.meshList.find(l=>this.meshToNodeMap.get(l.id)===i.id);r&&Zn.setMeshColor(r,Ar.VisibleColor)}}updateObstacles(){const t=this.sceneManager.getScene(),e=[];t.traverse(i=>{i instanceof Ym&&e.push(i)}),e.forEach(i=>this.sceneManager.removeFromScene(i));for(const i of this.model.Lines){const r=Zn.createLineSegment(i.start.x,i.start.y,i.end.x,i.end.y);this.sceneManager.addToScene(r)}this.updateView()}toggleViewAngle(){const t=this.viewAngleVisualizer.toggle();return this.updateView(),t}setActivePlayer(t){this.activePlayerId=t,this.updateView()}showHitEffect(t){const e=this.playerMeshes.get(t);e&&(Zn.setMeshColor(e,16711680),Lo.timeline().to(e.scale,{x:1.5,y:1.5,z:1.5,duration:.1,ease:"power2.out"}).to(e.scale,{x:1,y:1,z:1,duration:.2,ease:"elastic.out(1, 0.3)"}),setTimeout(()=>{const i=this.model.getPlayer(t);i&&Zn.setMeshColor(e,i.color)},300))}hidePlayer(t){const e=this.playerMeshes.get(t);if(!e)return;Lo.timeline().to(e.scale,{x:0,y:0,z:0,duration:.5,ease:"power2.in"}).call(()=>{e.visible=!1});const i=e.material;Lo.to(i,{opacity:0,duration:.5,onStart:()=>{i.transparent=!0}})}getMeshList(){return this.meshList}getMeshToNodeMap(){return this.meshToNodeMap}setPlayerSelectMesh(t){this.playerSelectMesh=t}setPlayerNextMesh(t){this.playerNextMesh=t}setPlayerShotMesh(t){this.playerShotMesh=t}getUndefinedMesh(){return this.undefinedMesh}getPlayerSelectMesh(){return this.playerSelectMesh}getPlayerNextMesh(){return this.playerNextMesh}getPlayerShotMesh(){return this.playerShotMesh}}var Si=(o=>(o.PLAYER_MOVED="player:moved",o.PLAYER_SELECTED="player:selected",o.PLAYER_SWITCHED="player:switched",o.PLAYER_SHOT="player:shot",o.PLAYER_ANGLE_CHANGED="player:angle_changed",o.COMBAT_RESOLVED="combat:resolved",o.HIT_DETECTED="hit:detected",o.MISS_DETECTED="miss:detected",o.TURN_STARTED="turn:started",o.TURN_ENDED="turn:ended",o.TURN_ACTION="turn:action",o.NODE_CLICKED="node:clicked",o.CANVAS_CLICKED_EMPTY="canvas:clicked_empty",o.KEY_PRESSED="key:pressed",o.VIEW_UPDATED="view:updated",o.VIEW_ANGLE_TOGGLED="view:angle_toggled",o.CAMERA_MOVED="camera:moved",o.MAP_GENERATED="map:generated",o.OBSTACLES_UPDATED="obstacles:updated",o.GAME_STARTED="game:started",o.GAME_PAUSED="game:paused",o.GAME_RESUMED="game:resumed",o.GAME_OVER="game:over",o))(Si||{});class HD{constructor(t=!1){Ht(this,"listeners",new Map);Ht(this,"eventHistory",[]);Ht(this,"debugMode",!1);Ht(this,"maxHistorySize",100);this.debugMode=t}on(t,e){this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),this.debugMode&&console.log(`[GameEventBus] Listener registered for: ${t}`)}off(t,e){const i=this.listeners.get(t);i&&(i.delete(e),this.debugMode&&console.log(`[GameEventBus] Listener unregistered for: ${t}`))}emit(t,e){this.eventHistory.push({type:t,data:e,timestamp:Date.now()}),this.eventHistory.length>this.maxHistorySize&&this.eventHistory.shift();const i=this.listeners.get(t);i&&i.forEach(r=>{try{r(e)}catch(l){console.error(`[GameEventBus] Error in listener for ${t}:`,l)}}),this.debugMode&&console.log(`[GameEventBus] Event emitted: ${t}`,e)}once(t,e){const i=r=>{e(r),this.off(t,i)};this.on(t,i)}getHistory(){return[...this.eventHistory]}clearHistory(){this.eventHistory=[]}getRegisteredEvents(){return Array.from(this.listeners.keys())}getListenerCount(t){var e;return((e=this.listeners.get(t))==null?void 0:e.size)??0}removeAllListeners(t){t?(this.listeners.delete(t),this.debugMode&&console.log(`[GameEventBus] All listeners removed for: ${t}`)):(this.listeners.clear(),this.debugMode&&console.log("[GameEventBus] All listeners removed"))}setDebugMode(t){this.debugMode=t}setMaxHistorySize(t){for(this.maxHistorySize=t;this.eventHistory.length>this.maxHistorySize;)this.eventHistory.shift()}}const VD=new HD;class GD{constructor(t,e,i,r,l,u){Ht(this,"canvas");Ht(this,"raycaster");Ht(this,"camera");Ht(this,"meshList");Ht(this,"meshToNodeMap");Ht(this,"eventBus");Ht(this,"playerIds");this.canvas=t,this.camera=e,this.meshList=i,this.meshToNodeMap=r,this.eventBus=l,this.raycaster=new Lb,this.playerIds=u,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("click",this.handleCanvasClick.bind(this),!1),window.addEventListener("keydown",this.handleKeyDown.bind(this),!1)}handleCanvasClick(t){const e=this.getIntersects(t);if(e.length>0){const i=e[0].object,r=this.meshToNodeMap.get(i.id);r!==void 0&&this.eventBus.emit(Si.NODE_CLICKED,{nodeId:r,position:{x:i.position.x,y:i.position.y}})}else this.eventBus.emit(Si.CANVAS_CLICKED_EMPTY)}handleKeyDown(t){if(this.eventBus.emit(Si.KEY_PRESSED,{key:t.key}),t.key===Gv.TOGGLE_VIEW_ANGLE||t.key===Gv.TOGGLE_VIEW_ANGLE_UPPER)this.eventBus.emit(Si.VIEW_ANGLE_TOGGLED,{isVisible:!0});else if(t.key>="1"&&t.key<="9"){const i=parseInt(t.key,10)-1;i<this.playerIds.length&&this.eventBus.emit(Si.PLAYER_SWITCHED,{previousPlayerId:"",currentPlayerId:this.playerIds[i]})}}getIntersects(t){const e=this.canvas.clientWidth,i=this.canvas.clientHeight,r=t.offsetX/e*2-1,l=t.offsetY/i*2-1,u=new pe(r,-l);return this.raycaster.setFromCamera(u,this.camera),this.raycaster.intersectObjects(this.meshList)}dispose(){this.canvas.removeEventListener("click",this.handleCanvasClick.bind(this)),window.removeEventListener("keydown",this.handleKeyDown.bind(this))}}class kD{constructor(t,e,i,r){Ht(this,"model");Ht(this,"visualizationSync");Ht(this,"eventBus");Ht(this,"activePlayerId");this.model=t,this.visualizationSync=e,this.eventBus=i,this.activePlayerId=r,this.setupEventListeners()}setupEventListeners(){this.eventBus.on(Si.NODE_CLICKED,this.handleNodeClick.bind(this)),this.eventBus.on(Si.CANVAS_CLICKED_EMPTY,this.handleCanvasEmptyClick.bind(this)),this.eventBus.on(Si.PLAYER_SWITCHED,this.handlePlayerSwitch.bind(this)),this.eventBus.on(Si.VIEW_ANGLE_TOGGLED,this.handleViewAngleToggle.bind(this)),this.eventBus.on(Si.HIT_DETECTED,this.handleHitDetected.bind(this))}handleNodeClick(t){const e=this.model.getPlayer(this.activePlayerId);if(!e)return;const i=e.stateMachine,r=this.model.nodeList[t.nodeId];if(!r)return;const l=i.getState();l===cc.Idle?this.handleIdleStateClick(e,r,i):l===cc.Select?this.handleSelectStateClick(e,r,i):l===cc.Move?this.handleMoveStateClick(e,r,i):l===cc.Shot&&this.handleShotStateClick(e,r,i),this.visualizationSync.updateView()}handleIdleStateClick(t,e,i){if(t.node.id===e.id){i.transition(la.SelectPlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerSelectMesh(r)}}handleSelectStateClick(t,e,i){if(t.node.id===e.id){i.transition(la.MovePlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerNextMesh(r)}else if(this.model.areNodesConnected(t.node,e)){i.transition(la.MovePlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerNextMesh(r)}}handleMoveStateClick(t,e,i){const r=this.visualizationSync.getPlayerNextMesh(),l=this.getMeshToNodeMap().get(r.id);if(l!==void 0){const u=this.model.nodeList[l];if(this.model.getVisibleNodesAtAngle(u,t.angle,zr.MaxViewDistance).some(p=>p.id===e.id)){i.transition(la.ShotPlayer);const p=this.findMeshByNodeId(e.id);p&&this.visualizationSync.setPlayerShotMesh(p)}}}handleShotStateClick(t,e,i){const r=this.visualizationSync.getPlayerShotMesh();if(this.getMeshToNodeMap().get(r.id)===e.id)this.executeTurn(t,i);else{const u=this.visualizationSync.getPlayerNextMesh(),f=this.getMeshToNodeMap().get(u.id);if(f!==void 0){const d=this.model.nodeList[f];if(this.model.getVisibleNodesAtAngle(d,t.angle,zr.MaxViewDistance).some(g=>g.id===e.id)){i.transition(la.ShotPlayer);const g=this.findMeshByNodeId(e.id);g&&this.visualizationSync.setPlayerShotMesh(g)}}}}executeTurn(t,e){e.transition(la.Complete);const i=this.visualizationSync.getPlayerNextMesh(),r=this.getMeshToNodeMap().get(i.id);r!==void 0&&this.model.setPlayerRef(this.activePlayerId,this.model.nodeList[r]);const l=this.visualizationSync.getPlayerShotMesh(),u=this.getMeshToNodeMap().get(l.id);this.checkPlayerShot(u);const f=this.getMeshToNodeMap().get(i.id),d=this.getMeshToNodeMap().get(l.id);if(f!==void 0&&d!==void 0){const p=this.model.getAngleBetweenNodes(this.model.nodeList[f],this.model.nodeList[d]);t.setAngle(p)}e.transition(la.SelectPlayer),this.visualizationSync.setPlayerSelectMesh(i),this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh()),this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh())}checkPlayerShot(t){if(t===void 0)return!1;for(const[e,i]of this.model.players)if(e!==this.activePlayerId&&t===i.node.id)return console.log(`🎯 ${this.activePlayerId} HIT ${e}!`),this.eventBus.emit(Si.HIT_DETECTED,{attackerId:this.activePlayerId,targetId:e,nodeId:t}),!0;return console.log(`❌ ${this.activePlayerId} missed!`),this.eventBus.emit(Si.MISS_DETECTED,{attackerId:this.activePlayerId,nodeId:t}),!1}handleCanvasEmptyClick(){const t=this.model.getPlayer(this.activePlayerId);if(!t)return;const e=t.stateMachine;e.transition(la.Cancel),this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh()),this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh()),e.transition(la.SelectPlayer),this.visualizationSync.updateView()}handlePlayerSwitch(t){this.activePlayerId=t.currentPlayerId,this.visualizationSync.setActivePlayer(t.currentPlayerId),console.log(`Switched to ${t.currentPlayerId}`)}handleViewAngleToggle(){const t=this.visualizationSync.toggleViewAngle();console.log(`View angle edges: ${t?"ON":"OFF"}`)}handleHitDetected(t){console.log(`💥 ${t.attackerId} hit ${t.targetId} at node ${t.nodeId}!`);const e=this.model.getPlayer(t.targetId);e&&(e.takeDamage(34),console.log(`${t.targetId} HP: ${e.health}/${e.maxHealth}`),this.visualizationSync.showHitEffect(t.targetId),e.isAlive||this.handlePlayerElimination(t.targetId))}handlePlayerElimination(t){console.log(`⚰️ ${t} has been eliminated!`),this.visualizationSync.hidePlayer(t);const e=Array.from(this.model.players.values()).filter(i=>i.isAlive);e.length===1&&console.log(`🏆 ${e[0].id} wins!`)}findMeshByNodeId(t){const e=this.visualizationSync.getMeshList(),i=this.getMeshToNodeMap();return e.find(r=>i.get(r.id)===t)}getMeshToNodeMap(){return this.visualizationSync.getMeshToNodeMap()}getModel(){return this.model}regenerateObstacles(){this.model.generateRandomObstacles(),this.visualizationSync.updateObstacles()}importObstacles(t){this.model.importObstacles(t),this.visualizationSync.updateObstacles()}generateComplexMap(){this.model.generateComplexMap(),this.visualizationSync.updateObstacles()}}class XD{constructor(t){Ht(this,"sceneManager");Ht(this,"visualizationSync");Ht(this,"inputHandler");Ht(this,"gameController");Ht(this,"eventBus");Ht(this,"model");this.eventBus=VD,this.sceneManager=new Ew(t),this.model=new oT,this.visualizationSync=new FD(this.sceneManager,this.model,Vv.PLAYER_1);const e=Array.from(this.model.players.keys());this.inputHandler=new GD(t,this.sceneManager.getCamera(),this.visualizationSync.getMeshList(),this.visualizationSync.getMeshToNodeMap(),this.eventBus,e),this.gameController=new kD(this.model,this.visualizationSync,this.eventBus,Vv.PLAYER_1),this.startRenderLoop(),this.visualizationSync.updateView()}startRenderLoop(){const t=()=>{this.sceneManager.updateControls(),this.sceneManager.render(),requestAnimationFrame(t)};t()}getModel(){return this.gameController.getModel()}regenerateObstacles(){this.gameController.regenerateObstacles()}importObstacles(t){this.gameController.importObstacles(t)}generateComplexMap(){this.gameController.generateComplexMap()}dispose(){this.sceneManager.dispose(),this.inputHandler.dispose()}}function WD(o){return new XD(o)}function YD(o){const t={obstacles:o.map(e=>({id:e.id,segments:e.segments.map(i=>({start:{x:i.start.x,y:i.start.y},end:{x:i.end.x,y:i.end.y}}))}))};return JSON.stringify(t,null,2)}function qD(o,t="obstacles.json"){const e=YD(o),i=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(r)}const jD=({threeSetup:o})=>{const t=cx.useRef(null),e=()=>{if(o){const v=o.getModel().getObstacles();qD(v)}},i=()=>{o&&o.regenerateObstacles()},r=()=>{o&&o.generateComplexMap()},l=()=>{var g;(g=t.current)==null||g.click()},u=g=>{var E;const v=(E=g.target.files)==null?void 0:E[0];if(!v||!o)return;const x=new FileReader;x.onload=M=>{var S;try{const y=(S=M.target)==null?void 0:S.result,L=JSON.parse(y);L.obstacles&&Array.isArray(L.obstacles)?o.importObstacles(L.obstacles):alert("無効なJSONファイル形式です。")}catch(y){alert("JSONファイルの読み込みに失敗しました。"),console.error("Import error:",y)}},x.readAsText(v),g.target.value=""},f={position:"absolute",top:"10px",right:"10px",padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",zIndex:1e3},d={...f,top:"60px",backgroundColor:"#FF9800"},p={...f,top:"110px",backgroundColor:"#2196F3"},m={...f,top:"160px",backgroundColor:"#9C27B0"};return Sn.jsxs(Sn.Fragment,{children:[Sn.jsx("button",{onClick:e,style:f,"aria-label":"障害物をエクスポート",children:"障害物をエクスポート"}),Sn.jsx("button",{onClick:i,style:d,"aria-label":"障害物をランダム生成",children:"障害物をランダム生成"}),Sn.jsx("button",{onClick:r,style:m,"aria-label":"複雑なマップ生成",children:"複雑なマップ生成"}),Sn.jsx("button",{onClick:l,style:p,"aria-label":"障害物をインポート",children:"障害物をインポート"}),Sn.jsx("input",{ref:t,type:"file",accept:".json",onChange:u,style:{display:"none"}})]})},ZD=()=>{const[o,t]=Cr.useState([]),e=cx.useRef(0);Cr.useEffect(()=>{const d=console.log,p=console.warn,m=console.error,g=console.info,v=(x,E)=>{const M=new Date().toLocaleTimeString(),S=e.current;e.current+=1,t(y=>[...y,{id:S,message:String(x),timestamp:M,type:E}].slice(-10))};return console.log=(...x)=>{v(x.join(" "),"log"),d(...x)},console.info=(...x)=>{v(x.join(" "),"info"),g(...x)},console.warn=(...x)=>{v(x.join(" "),"warn"),p(...x)},console.error=(...x)=>{v(x.join(" "),"error"),m(...x)},()=>{console.log=d,console.warn=p,console.error=m,console.info=g}},[]);const i=d=>{switch(d){case"error":return"#ff6b6b";case"warn":return"#ffd93d";case"info":return"#6bcf7f";default:return"#ffffff"}},r={position:"absolute",top:"10px",left:"10px",width:"400px",maxHeight:"300px",backgroundColor:"rgba(0, 0, 0, 0.8)",border:"1px solid #444",borderRadius:"5px",padding:"10px",fontSize:"12px",fontFamily:"monospace",color:"#fff",overflowY:"auto",zIndex:999,pointerEvents:"none"},l={marginBottom:"10px",fontWeight:"bold",color:"#aaa",borderBottom:"1px solid #444",paddingBottom:"5px"},u={marginBottom:"5px",paddingBottom:"5px",borderBottom:"1px solid #333"},f={color:"#888",marginRight:"8px"};return Sn.jsxs("div",{style:r,children:[Sn.jsx("div",{style:l,children:"Console Log (Latest 10)"}),o.length===0?Sn.jsx("div",{style:{color:"#666",fontStyle:"italic"},children:"No logs yet..."}):o.map(d=>Sn.jsxs("div",{style:u,children:[Sn.jsxs("span",{style:f,children:["[",d.timestamp,"]"]}),Sn.jsx("span",{style:{color:i(d.type)},children:d.message})]},d.id))]})},KD=()=>{const o=Cr.useRef(null),[t,e]=Cr.useState(null),i=Cr.useRef(!0);return Cr.useEffect(()=>{if(!i.current)return;i.current=!1;const r=o.current;if(r!==null){const l=WD(r);e(l)}},[]),Sn.jsxs("div",{children:[Sn.jsx(ZD,{}),Sn.jsx("canvas",{ref:o}),Sn.jsx(jD,{threeSetup:t})]})};eT.createRoot(document.getElementById("root")).render(Sn.jsx(Cr.StrictMode,{children:Sn.jsx(KD,{})}));
