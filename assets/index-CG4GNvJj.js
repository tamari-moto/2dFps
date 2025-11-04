var YE=Object.defineProperty;var qE=(o,t,e)=>t in o?YE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Gt=(o,t,e)=>qE(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();function jE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Xd={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function ZE(){if(Uv)return $l;Uv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:i,key:u,ref:r!==void 0?r:null,props:l}}return $l.Fragment=t,$l.jsx=e,$l.jsxs=e,$l}var Ov;function KE(){return Ov||(Ov=1,Xd.exports=ZE()),Xd.exports}var xn=KE(),Wd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function QE(){if(Nv)return fe;Nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(z,it,Et){this.props=z,this.context=it,this.refs=M,this.updater=Et||S}x.prototype.isReactComponent={},x.prototype.setState=function(z,it){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,it,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(z,it,Et){this.props=z,this.context=it,this.refs=M,this.updater=Et||S}var U=L.prototype=new y;U.constructor=L,E(U,x.prototype),U.isPureReactComponent=!0;var R=Array.isArray,O={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function N(z,it,Et,Ct,q,dt){return Et=dt.ref,{$$typeof:o,type:z,key:it,ref:Et!==void 0?Et:null,props:dt}}function B(z,it){return N(z.type,it,void 0,void 0,void 0,z.props)}function b(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function A(z){var it={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return it[Et]})}var H=/\/+/g;function st(z,it){return typeof z=="object"&&z!==null&&z.key!=null?A(""+z.key):it.toString(36)}function K(){}function ut(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(K,K):(z.status="pending",z.then(function(it){z.status==="pending"&&(z.status="fulfilled",z.value=it)},function(it){z.status==="pending"&&(z.status="rejected",z.reason=it)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ct(z,it,Et,Ct,q){var dt=typeof z;(dt==="undefined"||dt==="boolean")&&(z=null);var xt=!1;if(z===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(z.$$typeof){case o:case t:xt=!0;break;case m:return xt=z._init,ct(xt(z._payload),it,Et,Ct,q)}}if(xt)return q=q(z),xt=Ct===""?"."+st(z,0):Ct,R(q)?(Et="",xt!=null&&(Et=xt.replace(H,"$&/")+"/"),ct(q,it,Et,"",function(te){return te})):q!=null&&(b(q)&&(q=B(q,Et+(q.key==null||z&&z.key===q.key?"":(""+q.key).replace(H,"$&/")+"/")+xt)),it.push(q)),1;xt=0;var Rt=Ct===""?".":Ct+":";if(R(z))for(var wt=0;wt<z.length;wt++)Ct=z[wt],dt=Rt+st(Ct,wt),xt+=ct(Ct,it,Et,dt,q);else if(wt=v(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(Ct=z.next()).done;)Ct=Ct.value,dt=Rt+st(Ct,wt++),xt+=ct(Ct,it,Et,dt,q);else if(dt==="object"){if(typeof z.then=="function")return ct(ut(z),it,Et,Ct,q);throw it=String(z),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function X(z,it,Et){if(z==null)return z;var Ct=[],q=0;return ct(z,Ct,"","",function(dt){return it.call(Et,dt,q++)}),Ct}function $(z){if(z._status===-1){var it=z._result;it=it(),it.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var W=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function yt(){}return fe.Children={map:X,forEach:function(z,it,Et){X(z,function(){it.apply(this,arguments)},Et)},count:function(z){var it=0;return X(z,function(){it++}),it},toArray:function(z){return X(z,function(it){return it})||[]},only:function(z){if(!b(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},fe.Component=x,fe.Fragment=e,fe.Profiler=r,fe.PureComponent=L,fe.StrictMode=i,fe.Suspense=d,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(z){return function(){return z.apply(null,arguments)}},fe.cloneElement=function(z,it,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=E({},z.props),q=z.key,dt=void 0;if(it!=null)for(xt in it.ref!==void 0&&(dt=void 0),it.key!==void 0&&(q=""+it.key),it)!P.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(Ct[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)Ct.children=Et;else if(1<xt){for(var Rt=Array(xt),wt=0;wt<xt;wt++)Rt[wt]=arguments[wt+2];Ct.children=Rt}return N(z.type,q,void 0,void 0,dt,Ct)},fe.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},fe.createElement=function(z,it,Et){var Ct,q={},dt=null;if(it!=null)for(Ct in it.key!==void 0&&(dt=""+it.key),it)P.call(it,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(q[Ct]=it[Ct]);var xt=arguments.length-2;if(xt===1)q.children=Et;else if(1<xt){for(var Rt=Array(xt),wt=0;wt<xt;wt++)Rt[wt]=arguments[wt+2];q.children=Rt}if(z&&z.defaultProps)for(Ct in xt=z.defaultProps,xt)q[Ct]===void 0&&(q[Ct]=xt[Ct]);return N(z,dt,void 0,void 0,null,q)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(z){return{$$typeof:f,render:z}},fe.isValidElement=b,fe.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:$}},fe.memo=function(z,it){return{$$typeof:p,type:z,compare:it===void 0?null:it}},fe.startTransition=function(z){var it=O.T,Et={};O.T=Et;try{var Ct=z(),q=O.S;q!==null&&q(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(yt,W)}catch(dt){W(dt)}finally{O.T=it}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(z){return O.H.use(z)},fe.useActionState=function(z,it,Et){return O.H.useActionState(z,it,Et)},fe.useCallback=function(z,it){return O.H.useCallback(z,it)},fe.useContext=function(z){return O.H.useContext(z)},fe.useDebugValue=function(){},fe.useDeferredValue=function(z,it){return O.H.useDeferredValue(z,it)},fe.useEffect=function(z,it){return O.H.useEffect(z,it)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(z,it,Et){return O.H.useImperativeHandle(z,it,Et)},fe.useInsertionEffect=function(z,it){return O.H.useInsertionEffect(z,it)},fe.useLayoutEffect=function(z,it){return O.H.useLayoutEffect(z,it)},fe.useMemo=function(z,it){return O.H.useMemo(z,it)},fe.useOptimistic=function(z,it){return O.H.useOptimistic(z,it)},fe.useReducer=function(z,it,Et){return O.H.useReducer(z,it,Et)},fe.useRef=function(z){return O.H.useRef(z)},fe.useState=function(z){return O.H.useState(z)},fe.useSyncExternalStore=function(z,it,Et){return O.H.useSyncExternalStore(z,it,Et)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.0.0",fe}var Pv;function Fm(){return Pv||(Pv=1,Wd.exports=QE()),Wd.exports}var Ya=Fm();const JE=jE(Ya);var Yd={exports:{}},tc={},qd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function $E(){return zv||(zv=1,function(o){function t(X,$){var W=X.length;X.push($);t:for(;0<W;){var yt=W-1>>>1,z=X[yt];if(0<r(z,$))X[yt]=$,X[W]=z,W=yt;else break t}}function e(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var $=X[0],W=X.pop();if(W!==$){X[0]=W;t:for(var yt=0,z=X.length,it=z>>>1;yt<it;){var Et=2*(yt+1)-1,Ct=X[Et],q=Et+1,dt=X[q];if(0>r(Ct,W))q<z&&0>r(dt,Ct)?(X[yt]=dt,X[q]=W,yt=q):(X[yt]=Ct,X[Et]=W,yt=Et);else if(q<z&&0>r(dt,W))X[yt]=dt,X[q]=W,yt=q;else break t}}return $}function r(X,$){var W=X.sortIndex-$.sortIndex;return W!==0?W:X.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],p=[],m=1,g=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(X){for(var $=e(p);$!==null;){if($.callback===null)i(p);else if($.startTime<=X)i(p),$.sortIndex=$.expirationTime,t(d,$);else break;$=e(p)}}function R(X){if(M=!1,U(X),!E)if(e(d)!==null)E=!0,ut();else{var $=e(p);$!==null&&ct(R,$.startTime-X)}}var O=!1,P=-1,N=5,B=-1;function b(){return!(o.unstable_now()-B<N)}function A(){if(O){var X=o.unstable_now();B=X;var $=!0;try{t:{E=!1,M&&(M=!1,y(P),P=-1),S=!0;var W=v;try{e:{for(U(X),g=e(d);g!==null&&!(g.expirationTime>X&&b());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,v=g.priorityLevel;var z=yt(g.expirationTime<=X);if(X=o.unstable_now(),typeof z=="function"){g.callback=z,U(X),$=!0;break e}g===e(d)&&i(d),U(X)}else i(d);g=e(d)}if(g!==null)$=!0;else{var it=e(p);it!==null&&ct(R,it.startTime-X),$=!1}}break t}finally{g=null,v=W,S=!1}$=void 0}}finally{$?H():O=!1}}}var H;if(typeof L=="function")H=function(){L(A)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,K=st.port2;st.port1.onmessage=A,H=function(){K.postMessage(null)}}else H=function(){x(A,0)};function ut(){O||(O=!0,H())}function ct(X,$){P=x(function(){X(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,ut())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return e(d)},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var W=v;v=$;try{return X()}finally{v=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,$){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var W=v;v=X;try{return $()}finally{v=W}},o.unstable_scheduleCallback=function(X,$,W){var yt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,X={id:m++,callback:$,priorityLevel:X,startTime:W,expirationTime:z,sortIndex:-1},W>yt?(X.sortIndex=W,t(p,X),e(d)===null&&X===e(p)&&(M?(y(P),P=-1):M=!0,ct(R,W-yt))):(X.sortIndex=z,t(d,X),E||S||(E=!0,ut())),X},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(X){var $=v;return function(){var W=v;v=$;try{return X.apply(this,arguments)}finally{v=W}}}}(jd)),jd}var Iv;function tT(){return Iv||(Iv=1,qd.exports=$E()),qd.exports}var Zd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function eT(){if(Bv)return Fn;Bv=1;var o=Fm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:p,implementation:m}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Fn.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,m)},Fn.flushSync=function(d){var p=u.T,m=i.p;try{if(u.T=null,i.p=2,d)return d()}finally{u.T=p,i.p=m,i.d.f()}},Fn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(d,p))},Fn.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},Fn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?i.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):m==="script"&&i.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(d)},Fn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin);i.d.L(d,m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);i.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(d)},Fn.requestFormReset=function(d){i.d.r(d)},Fn.unstable_batchedUpdates=function(d,p){return d(p)},Fn.useFormState=function(d,p,m){return u.H.useFormState(d,p,m)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.0.0",Fn}var Fv;function nT(){if(Fv)return Zd.exports;Fv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zd.exports=eT(),Zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function iT(){if(Hv)return tc;Hv=1;var o=tT(),t=Fm(),e=nT();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),R=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function P(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function B(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case d:return"Fragment";case f:return"Portal";case m:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case x:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case S:return(n.displayName||"Context")+".Provider";case v:return(n._context.displayName||"Context")+".Consumer";case E:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case y:return a=n.displayName||null,a!==null?a:B(n.type)||"Memo";case L:a=n._payload,n=n._init;try{return B(n(a))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,st;function K(n){if(H===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);H=a&&a[1]||"",st=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+n+st}var ut=!1;function ct(n,a){if(!n||ut)return"";ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ht){var ot=ht}Reflect.construct(n,[],St)}else{try{St.call()}catch(ht){ot=ht}n.call(St.prototype)}}else{try{throw Error()}catch(ht){ot=ht}(St=n())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ht){if(ht&&ot&&typeof ht.stack=="string")return[ht.stack,ot.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=c.DetermineComponentFrameRoot(),T=_[0],w=_[1];if(T&&w){var F=T.split(`
`),j=w.split(`
`);for(h=c=0;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(c===F.length||h===j.length)for(c=F.length-1,h=j.length-1;1<=c&&0<=h&&F[c]!==j[h];)h--;for(;1<=c&&0<=h;c--,h--)if(F[c]!==j[h]){if(c!==1||h!==1)do if(c--,h--,0>h||F[c]!==j[h]){var mt=`
`+F[c].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=c&&0<=h);break}}}finally{ut=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?K(s):""}function X(n){switch(n.tag){case 26:case 27:case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return n=ct(n.type,!1),n;case 11:return n=ct(n.type.render,!1),n;case 1:return n=ct(n.type,!0),n;default:return""}}function $(n){try{var a="";do a+=X(n),n=n.return;while(n);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function W(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function yt(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function z(n){if(W(n)!==n)throw Error(i(188))}function it(n){var a=n.alternate;if(!a){if(a=W(n),a===null)throw Error(i(188));return a!==n?null:n}for(var s=n,c=a;;){var h=s.return;if(h===null)break;var _=h.alternate;if(_===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===s)return z(h),n;if(_===c)return z(h),a;_=_.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=_;else{for(var T=!1,w=h.child;w;){if(w===s){T=!0,s=h,c=_;break}if(w===c){T=!0,c=h,s=_;break}w=w.sibling}if(!T){for(w=_.child;w;){if(w===s){T=!0,s=_,c=h;break}if(w===c){T=!0,c=_,s=h;break}w=w.sibling}if(!T)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:a}function Et(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=Et(n),a!==null)return a;n=n.sibling}return null}var Ct=Array.isArray,q=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},xt=[],Rt=-1;function wt(n){return{current:n}}function te(n){0>Rt||(n.current=xt[Rt],xt[Rt]=null,Rt--)}function zt(n,a){Rt++,xt[Rt]=n.current,n.current=a}var Ae=wt(null),we=wt(null),se=wt(null),G=wt(null);function mn(n,a){switch(zt(se,a),zt(we,n),zt(Ae,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?ov(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=ov(n),a=lv(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}te(Ae),zt(Ae,a)}function ce(){te(Ae),te(we),te(se)}function ue(n){n.memoizedState!==null&&zt(G,n);var a=Ae.current,s=lv(a,n.type);a!==s&&(zt(we,n),zt(Ae,s))}function Yt(n){we.current===n&&(te(Ae),te(we)),G.current===n&&(te(G),jl._currentValue=dt)}var De=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,C=o.unstable_shouldYield,at=o.unstable_requestPaint,pt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,_e=o.unstable_IdlePriority,At=o.log,Vt=o.unstable_setDisableYieldValue,Jt=null,Wt=null;function Ft(n){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Jt,n,void 0,(n.current.flags&128)===128)}catch{}}function k(n){if(typeof At=="function"&&Vt(n),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Jt,n)}catch{}}var ft=Math.clz32?Math.clz32:bt,Nt=Math.log,V=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(Nt(n)/V|0)|0}var lt=128,_t=4194304;function Ut(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ot(n,a){var s=n.pendingLanes;if(s===0)return 0;var c=0,h=n.suspendedLanes,_=n.pingedLanes,T=n.warmLanes;n=n.finishedLanes!==0;var w=s&134217727;return w!==0?(s=w&~h,s!==0?c=Ut(s):(_&=w,_!==0?c=Ut(_):n||(T=w&~T,T!==0&&(c=Ut(T))))):(w=s&~h,w!==0?c=Ut(w):_!==0?c=Ut(_):n||(T=s&~T,T!==0&&(c=Ut(T)))),c===0?0:a!==0&&a!==c&&(a&h)===0&&(h=c&-c,T=a&-a,h>=T||h===32&&(T&4194176)!==0)?a:c}function Zt(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Re(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var n=lt;return lt<<=1,(lt&4194176)===0&&(lt=128),n}function ge(){var n=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),n}function an(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function ln(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Dc(n,a,s,c,h,_){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,F=n.expirationTimes,j=n.hiddenUpdates;for(s=T&~s;0<s;){var mt=31-ft(s),St=1<<mt;w[mt]=0,F[mt]=-1;var ot=j[mt];if(ot!==null)for(j[mt]=null,mt=0;mt<ot.length;mt++){var ht=ot[mt];ht!==null&&(ht.lane&=-536870913)}s&=~St}c!==0&&rl(n,c,0),_!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~a))}function rl(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-ft(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194218}function ia(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var c=31-ft(s),h=1<<c;h&a|n[c]&a&&(n[c]|=a),s&=~h}}function Bs(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sl(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:Av(n.type))}function Lc(n,a){var s=q.p;try{return q.p=n,a()}finally{q.p=s}}var di=Math.random().toString(36).slice(2),_n="__reactFiber$"+di,gn="__reactProps$"+di,Sa="__reactContainer$"+di,Fs="__reactEvents$"+di,Gf="__reactListeners$"+di,kf="__reactHandles$"+di,Uc="__reactResources$"+di,kr="__reactMarker$"+di;function ol(n){delete n[_n],delete n[gn],delete n[Fs],delete n[Gf],delete n[kf]}function xa(n){var a=n[_n];if(a)return a;for(var s=n.parentNode;s;){if(a=s[Sa]||s[_n]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=fv(n);n!==null;){if(s=n[_n])return s;n=fv(n)}return a}n=s,s=n.parentNode}return null}function D(n){if(n=n[_n]||n[Sa]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Z(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function rt(n){var a=n[Uc];return a||(a=n[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function tt(n){n[kr]=!0}var Q=new Set,Tt={};function Lt(n,a){Bt(n,a),Bt(n+"Capture",a)}function Bt(n,a){for(Tt[n]=a,n=0;n<a.length;n++)Q.add(a[n])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},$t={};function xe(n){return De.call($t,n)?!0:De.call(re,n)?!1:ae.test(n)?$t[n]=!0:(re[n]=!0,!1)}function Me(n,a,s){if(xe(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function We(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function Le(n,a,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+c)}}function oe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ee(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function vn(n){var a=ee(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,_=s.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,_.call(this,T)}}),Object.defineProperty(n,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ee(n){n._valueTracker||(n._valueTracker=vn(n))}function $n(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return n&&(c=ee(n)?n.checked?"true":"false":n.value),n=c,n!==s?(a.setValue(n),!0):!1}function ki(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Wn=/[\n"\\]/g;function Tn(n){return n.replace(Wn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ze(n,a,s,c,h,_,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),a!=null?T==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+oe(a)):n.value!==""+oe(a)&&(n.value=""+oe(a)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),a!=null?In(n,T,oe(a)):s!=null?In(n,T,oe(s)):c!=null&&n.removeAttribute("value"),h==null&&_!=null&&(n.defaultChecked=!!_),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+oe(w):n.removeAttribute("name")}function Yn(n,a,s,c,h,_,T,w){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),a!=null||s!=null){if(!(_!=="submit"&&_!=="reset"||a!=null))return;s=s!=null?""+oe(s):"",a=a!=null?""+oe(a):s,w||a===n.value||(n.value=a),n.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function In(n,a,s){a==="number"&&ki(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Qe(n,a,s,c){if(n=n.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=a.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+oe(s),a=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function Ln(n,a,s){if(a!=null&&(a=""+oe(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+oe(s):""}function Hs(n,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(i(92));if(Ct(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=oe(a),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function ti(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function m_(n,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,s):typeof s!="number"||s===0||kx.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function __(n,a,s){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&m_(n,h,c)}else for(var _ in a)a.hasOwnProperty(_)&&m_(n,_,a[_])}function Xf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oc(n){return Wx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wf=null;function Yf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vs=null,Gs=null;function g_(n){var a=D(n);if(a&&(n=a.stateNode)){var s=n[gn]||null;t:switch(n=a.stateNode,a.type){case"input":if(ze(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Tn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==n&&c.form===n.form){var h=c[gn]||null;if(!h)throw Error(i(90));ze(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===n.form&&$n(c)}break t;case"textarea":Ln(n,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&Qe(n,!!s.multiple,a,!1)}}}var qf=!1;function v_(n,a,s){if(qf)return n(a,s);qf=!0;try{var c=n(a);return c}finally{if(qf=!1,(Vs!==null||Gs!==null)&&(_u(),Vs&&(a=Vs,n=Gs,Gs=Vs=null,g_(a),n)))for(a=0;a<n.length;a++)g_(n[a])}}function ll(n,a){var s=n.stateNode;if(s===null)return null;var c=s[gn]||null;if(c===null)return null;s=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,a,typeof s));return s}var jf=!1;if(It)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){jf=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{jf=!1}var tr=null,Zf=null,Nc=null;function y_(){if(Nc)return Nc;var n,a=Zf,s=a.length,c,h="value"in tr?tr.value:tr.textContent,_=h.length;for(n=0;n<s&&a[n]===h[n];n++);var T=s-n;for(c=1;c<=T&&a[s-c]===h[_-c];c++);return Nc=h.slice(n,1<c?1-c:void 0)}function Pc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function zc(){return!0}function S_(){return!1}function ei(n){function a(s,c,h,_,T){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(_):_[w]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?zc:S_,this.isPropagationStopped=S_,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zc)},persist:function(){},isPersistent:zc}),a}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=ei(Xr),ul=A({},Xr,{view:0,detail:0}),Yx=ei(ul),Kf,Qf,fl,Bc=A({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fl&&(fl&&n.type==="mousemove"?(Kf=n.screenX-fl.screenX,Qf=n.screenY-fl.screenY):Qf=Kf=0,fl=n),Kf)},movementY:function(n){return"movementY"in n?n.movementY:Qf}}),x_=ei(Bc),qx=A({},Bc,{dataTransfer:0}),jx=ei(qx),Zx=A({},ul,{relatedTarget:0}),Jf=ei(Zx),Kx=A({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=ei(Kx),Jx=A({},Xr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$x=ei(Jx),tM=A({},Xr,{data:0}),M_=ei(tM),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=iM[n])?!!a[n]:!1}function $f(){return aM}var rM=A({},ul,{key:function(n){if(n.key){var a=eM[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Pc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(n){return n.type==="keypress"?Pc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sM=ei(rM),oM=A({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E_=ei(oM),lM=A({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),cM=ei(lM),uM=A({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fM=ei(uM),hM=A({},Bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dM=ei(hM),pM=A({},Xr,{newState:0,oldState:0}),mM=ei(pM),_M=[9,13,27,32],th=It&&"CompositionEvent"in window,hl=null;It&&"documentMode"in document&&(hl=document.documentMode);var gM=It&&"TextEvent"in window&&!hl,T_=It&&(!th||hl&&8<hl&&11>=hl),b_=" ",A_=!1;function R_(n,a){switch(n){case"keyup":return _M.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ks=!1;function vM(n,a){switch(n){case"compositionend":return C_(a);case"keypress":return a.which!==32?null:(A_=!0,b_);case"textInput":return n=a.data,n===b_&&A_?null:n;default:return null}}function yM(n,a){if(ks)return n==="compositionend"||!th&&R_(n,a)?(n=y_(),Nc=Zf=tr=null,ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return T_&&a.locale!=="ko"?null:a.data;default:return null}}var SM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w_(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!SM[n.type]:a==="textarea"}function D_(n,a,s,c){Vs?Gs?Gs.push(c):Gs=[c]:Vs=c,a=xu(a,"onChange"),0<a.length&&(s=new Ic("onChange","change",null,s,c),n.push({event:s,listeners:a}))}var dl=null,pl=null;function xM(n){nv(n,0)}function Fc(n){var a=Z(n);if($n(a))return n}function L_(n,a){if(n==="change")return a}var U_=!1;if(It){var eh;if(It){var nh="oninput"in document;if(!nh){var O_=document.createElement("div");O_.setAttribute("oninput","return;"),nh=typeof O_.oninput=="function"}eh=nh}else eh=!1;U_=eh&&(!document.documentMode||9<document.documentMode)}function N_(){dl&&(dl.detachEvent("onpropertychange",P_),pl=dl=null)}function P_(n){if(n.propertyName==="value"&&Fc(pl)){var a=[];D_(a,pl,n,Yf(n)),v_(xM,a)}}function MM(n,a,s){n==="focusin"?(N_(),dl=a,pl=s,dl.attachEvent("onpropertychange",P_)):n==="focusout"&&N_()}function EM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fc(pl)}function TM(n,a){if(n==="click")return Fc(a)}function bM(n,a){if(n==="input"||n==="change")return Fc(a)}function AM(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var pi=typeof Object.is=="function"?Object.is:AM;function ml(n,a){if(pi(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!De.call(a,h)||!pi(n[h],a[h]))return!1}return!0}function z_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function I_(n,a){var s=z_(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=a&&c>=a)return{node:s,offset:a-n};n=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=z_(s)}}function B_(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?B_(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function F_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=ki(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=ki(n.document)}return a}function ih(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function RM(n,a){var s=F_(a);a=n.focusedElem;var c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&B_(a.ownerDocument.documentElement,a)){if(c!==null&&ih(a)){if(n=c.start,s=c.end,s===void 0&&(s=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(s,a.value.length);else if(s=(n=a.ownerDocument||document)&&n.defaultView||window,s.getSelection){s=s.getSelection();var h=a.textContent.length,_=Math.min(c.start,h);c=c.end===void 0?_:Math.min(c.end,h),!s.extend&&_>c&&(h=c,c=_,_=h),h=I_(a,_);var T=I_(a,c);h&&T&&(s.rangeCount!==1||s.anchorNode!==h.node||s.anchorOffset!==h.offset||s.focusNode!==T.node||s.focusOffset!==T.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),s.removeAllRanges(),_>c?(s.addRange(n),s.extend(T.node,T.offset)):(n.setEnd(T.node,T.offset),s.addRange(n)))}}for(n=[],s=a;s=s.parentNode;)s.nodeType===1&&n.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)s=n[a],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var CM=It&&"documentMode"in document&&11>=document.documentMode,Xs=null,ah=null,_l=null,rh=!1;function H_(n,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rh||Xs==null||Xs!==ki(c)||(c=Xs,"selectionStart"in c&&ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_l&&ml(_l,c)||(_l=c,c=xu(ah,"onSelect"),0<c.length&&(a=new Ic("onSelect","select",null,a,s),n.push({event:a,listeners:c}),a.target=Xs)))}function Wr(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Ws={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionrun:Wr("Transition","TransitionRun"),transitionstart:Wr("Transition","TransitionStart"),transitioncancel:Wr("Transition","TransitionCancel"),transitionend:Wr("Transition","TransitionEnd")},sh={},V_={};It&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Yr(n){if(sh[n])return sh[n];if(!Ws[n])return n;var a=Ws[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in V_)return sh[n]=a[s];return n}var G_=Yr("animationend"),k_=Yr("animationiteration"),X_=Yr("animationstart"),wM=Yr("transitionrun"),DM=Yr("transitionstart"),LM=Yr("transitioncancel"),W_=Yr("transitionend"),Y_=new Map,q_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Xi(n,a){Y_.set(n,a),Lt(a,[n])}var wi=[],Ys=0,oh=0;function Hc(){for(var n=Ys,a=oh=Ys=0;a<n;){var s=wi[a];wi[a++]=null;var c=wi[a];wi[a++]=null;var h=wi[a];wi[a++]=null;var _=wi[a];if(wi[a++]=null,c!==null&&h!==null){var T=c.pending;T===null?h.next=h:(h.next=T.next,T.next=h),c.pending=h}_!==0&&j_(s,h,_)}}function Vc(n,a,s,c){wi[Ys++]=n,wi[Ys++]=a,wi[Ys++]=s,wi[Ys++]=c,oh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function lh(n,a,s,c){return Vc(n,a,s,c),Gc(n)}function er(n,a){return Vc(n,null,null,a),Gc(n)}function j_(n,a,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,_=n.return;_!==null;)_.childLanes|=s,c=_.alternate,c!==null&&(c.childLanes|=s),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(h=!0)),n=_,_=_.return;h&&a!==null&&n.tag===3&&(_=n.stateNode,h=31-ft(s),_=_.hiddenUpdates,n=_[h],n===null?_[h]=[a]:n.push(a),a.lane=s|536870912)}function Gc(n){if(50<Vl)throw Vl=0,pd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var qs={},Z_=new WeakMap;function Di(n,a){if(typeof n=="object"&&n!==null){var s=Z_.get(n);return s!==void 0?s:(a={value:n,source:a,stack:$(a)},Z_.set(n,a),a)}return{value:n,source:a,stack:$(a)}}var js=[],Zs=0,kc=null,Xc=0,Li=[],Ui=0,qr=null,Ma=1,Ea="";function jr(n,a){js[Zs++]=Xc,js[Zs++]=kc,kc=n,Xc=a}function K_(n,a,s){Li[Ui++]=Ma,Li[Ui++]=Ea,Li[Ui++]=qr,qr=n;var c=Ma;n=Ea;var h=32-ft(c)-1;c&=~(1<<h),s+=1;var _=32-ft(a)+h;if(30<_){var T=h-h%5;_=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Ma=1<<32-ft(a)+h|s<<h|c,Ea=_+n}else Ma=1<<_|s<<h|c,Ea=n}function ch(n){n.return!==null&&(jr(n,1),K_(n,1,0))}function uh(n){for(;n===kc;)kc=js[--Zs],js[Zs]=null,Xc=js[--Zs],js[Zs]=null;for(;n===qr;)qr=Li[--Ui],Li[Ui]=null,Ea=Li[--Ui],Li[Ui]=null,Ma=Li[--Ui],Li[Ui]=null}var qn=null,Un=null,Ue=!1,Wi=null,aa=!1,fh=Error(i(519));function Zr(n){var a=Error(i(418,""));throw yl(Di(a,n)),fh}function Q_(n){var a=n.stateNode,s=n.type,c=n.memoizedProps;switch(a[_n]=n,a[gn]=c,s){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(s=0;s<kl.length;s++)Te(kl[s],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Te("invalid",a),Yn(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ee(a);break;case"select":Te("invalid",a);break;case"textarea":Te("invalid",a),Hs(a,c.value,c.defaultValue,c.children),Ee(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||sv(a.textContent,s)?(c.popover!=null&&(Te("beforetoggle",a),Te("toggle",a)),c.onScroll!=null&&Te("scroll",a),c.onScrollEnd!=null&&Te("scrollend",a),c.onClick!=null&&(a.onclick=Mu),a=!0):a=!1,a||Zr(n)}function J_(n){for(qn=n.return;qn;)switch(qn.tag){case 3:case 27:aa=!0;return;case 5:case 13:aa=!1;return;default:qn=qn.return}}function gl(n){if(n!==qn)return!1;if(!Ue)return J_(n),Ue=!0,!1;var a=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Ld(n.type,n.memoizedProps)),s=!s),s&&(a=!0),a&&Un&&Zr(n),J_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(a===0){Un=qi(n.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;n=n.nextSibling}Un=null}}else Un=qn?qi(n.stateNode.nextSibling):null;return!0}function vl(){Un=qn=null,Ue=!1}function yl(n){Wi===null?Wi=[n]:Wi.push(n)}var Sl=Error(i(460)),$_=Error(i(474)),hh={then:function(){}};function tg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Wc(){}function eg(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(Wc,Wc),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===Sl?Error(i(483)):n;default:if(typeof a.status=="string")a.then(Wc,Wc);else{if(n=Ge,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===Sl?Error(i(483)):n}throw xl=a,Sl}}var xl=null;function ng(){if(xl===null)throw Error(i(459));var n=xl;return xl=null,n}var Ks=null,Ml=0;function Yc(n){var a=Ml;return Ml+=1,Ks===null&&(Ks=[]),eg(Ks,n,a)}function El(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function qc(n,a){throw a.$$typeof===l?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function ig(n){var a=n._init;return a(n._payload)}function ag(n){function a(J,Y){if(n){var et=J.deletions;et===null?(J.deletions=[Y],J.flags|=16):et.push(Y)}}function s(J,Y){if(!n)return null;for(;Y!==null;)a(J,Y),Y=Y.sibling;return null}function c(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function h(J,Y){return J=dr(J,Y),J.index=0,J.sibling=null,J}function _(J,Y,et){return J.index=et,n?(et=J.alternate,et!==null?(et=et.index,et<Y?(J.flags|=33554434,Y):et):(J.flags|=33554434,Y)):(J.flags|=1048576,Y)}function T(J){return n&&J.alternate===null&&(J.flags|=33554434),J}function w(J,Y,et,vt){return Y===null||Y.tag!==6?(Y=sd(et,J.mode,vt),Y.return=J,Y):(Y=h(Y,et),Y.return=J,Y)}function F(J,Y,et,vt){var kt=et.type;return kt===d?mt(J,Y,et.props.children,vt,et.key):Y!==null&&(Y.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===L&&ig(kt)===Y.type)?(Y=h(Y,et.props),El(Y,et),Y.return=J,Y):(Y=fu(et.type,et.key,et.props,null,J.mode,vt),El(Y,et),Y.return=J,Y)}function j(J,Y,et,vt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==et.containerInfo||Y.stateNode.implementation!==et.implementation?(Y=od(et,J.mode,vt),Y.return=J,Y):(Y=h(Y,et.children||[]),Y.return=J,Y)}function mt(J,Y,et,vt,kt){return Y===null||Y.tag!==7?(Y=rs(et,J.mode,vt,kt),Y.return=J,Y):(Y=h(Y,et),Y.return=J,Y)}function St(J,Y,et){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=sd(""+Y,J.mode,et),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case u:return et=fu(Y.type,Y.key,Y.props,null,J.mode,et),El(et,Y),et.return=J,et;case f:return Y=od(Y,J.mode,et),Y.return=J,Y;case L:var vt=Y._init;return Y=vt(Y._payload),St(J,Y,et)}if(Ct(Y)||P(Y))return Y=rs(Y,J.mode,et,null),Y.return=J,Y;if(typeof Y.then=="function")return St(J,Yc(Y),et);if(Y.$$typeof===S)return St(J,lu(J,Y),et);qc(J,Y)}return null}function ot(J,Y,et,vt){var kt=Y!==null?Y.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return kt!==null?null:w(J,Y,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case u:return et.key===kt?F(J,Y,et,vt):null;case f:return et.key===kt?j(J,Y,et,vt):null;case L:return kt=et._init,et=kt(et._payload),ot(J,Y,et,vt)}if(Ct(et)||P(et))return kt!==null?null:mt(J,Y,et,vt,null);if(typeof et.then=="function")return ot(J,Y,Yc(et),vt);if(et.$$typeof===S)return ot(J,Y,lu(J,et),vt);qc(J,et)}return null}function ht(J,Y,et,vt,kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(et)||null,w(Y,J,""+vt,kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case u:return J=J.get(vt.key===null?et:vt.key)||null,F(Y,J,vt,kt);case f:return J=J.get(vt.key===null?et:vt.key)||null,j(Y,J,vt,kt);case L:var ve=vt._init;return vt=ve(vt._payload),ht(J,Y,et,vt,kt)}if(Ct(vt)||P(vt))return J=J.get(et)||null,mt(Y,J,vt,kt,null);if(typeof vt.then=="function")return ht(J,Y,et,Yc(vt),kt);if(vt.$$typeof===S)return ht(J,Y,et,lu(Y,vt),kt);qc(Y,vt)}return null}function jt(J,Y,et,vt){for(var kt=null,ve=null,Qt=Y,ie=Y=0,Rn=null;Qt!==null&&ie<et.length;ie++){Qt.index>ie?(Rn=Qt,Qt=null):Rn=Qt.sibling;var Oe=ot(J,Qt,et[ie],vt);if(Oe===null){Qt===null&&(Qt=Rn);break}n&&Qt&&Oe.alternate===null&&a(J,Qt),Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe,Qt=Rn}if(ie===et.length)return s(J,Qt),Ue&&jr(J,ie),kt;if(Qt===null){for(;ie<et.length;ie++)Qt=St(J,et[ie],vt),Qt!==null&&(Y=_(Qt,Y,ie),ve===null?kt=Qt:ve.sibling=Qt,ve=Qt);return Ue&&jr(J,ie),kt}for(Qt=c(Qt);ie<et.length;ie++)Rn=ht(Qt,J,ie,et[ie],vt),Rn!==null&&(n&&Rn.alternate!==null&&Qt.delete(Rn.key===null?ie:Rn.key),Y=_(Rn,Y,ie),ve===null?kt=Rn:ve.sibling=Rn,ve=Rn);return n&&Qt.forEach(function(Sr){return a(J,Sr)}),Ue&&jr(J,ie),kt}function le(J,Y,et,vt){if(et==null)throw Error(i(151));for(var kt=null,ve=null,Qt=Y,ie=Y=0,Rn=null,Oe=et.next();Qt!==null&&!Oe.done;ie++,Oe=et.next()){Qt.index>ie?(Rn=Qt,Qt=null):Rn=Qt.sibling;var Sr=ot(J,Qt,Oe.value,vt);if(Sr===null){Qt===null&&(Qt=Rn);break}n&&Qt&&Sr.alternate===null&&a(J,Qt),Y=_(Sr,Y,ie),ve===null?kt=Sr:ve.sibling=Sr,ve=Sr,Qt=Rn}if(Oe.done)return s(J,Qt),Ue&&jr(J,ie),kt;if(Qt===null){for(;!Oe.done;ie++,Oe=et.next())Oe=St(J,Oe.value,vt),Oe!==null&&(Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe);return Ue&&jr(J,ie),kt}for(Qt=c(Qt);!Oe.done;ie++,Oe=et.next())Oe=ht(Qt,J,ie,Oe.value,vt),Oe!==null&&(n&&Oe.alternate!==null&&Qt.delete(Oe.key===null?ie:Oe.key),Y=_(Oe,Y,ie),ve===null?kt=Oe:ve.sibling=Oe,ve=Oe);return n&&Qt.forEach(function(WE){return a(J,WE)}),Ue&&jr(J,ie),kt}function tn(J,Y,et,vt){if(typeof et=="object"&&et!==null&&et.type===d&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case u:t:{for(var kt=et.key;Y!==null;){if(Y.key===kt){if(kt=et.type,kt===d){if(Y.tag===7){s(J,Y.sibling),vt=h(Y,et.props.children),vt.return=J,J=vt;break t}}else if(Y.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===L&&ig(kt)===Y.type){s(J,Y.sibling),vt=h(Y,et.props),El(vt,et),vt.return=J,J=vt;break t}s(J,Y);break}else a(J,Y);Y=Y.sibling}et.type===d?(vt=rs(et.props.children,J.mode,vt,et.key),vt.return=J,J=vt):(vt=fu(et.type,et.key,et.props,null,J.mode,vt),El(vt,et),vt.return=J,J=vt)}return T(J);case f:t:{for(kt=et.key;Y!==null;){if(Y.key===kt)if(Y.tag===4&&Y.stateNode.containerInfo===et.containerInfo&&Y.stateNode.implementation===et.implementation){s(J,Y.sibling),vt=h(Y,et.children||[]),vt.return=J,J=vt;break t}else{s(J,Y);break}else a(J,Y);Y=Y.sibling}vt=od(et,J.mode,vt),vt.return=J,J=vt}return T(J);case L:return kt=et._init,et=kt(et._payload),tn(J,Y,et,vt)}if(Ct(et))return jt(J,Y,et,vt);if(P(et)){if(kt=P(et),typeof kt!="function")throw Error(i(150));return et=kt.call(et),le(J,Y,et,vt)}if(typeof et.then=="function")return tn(J,Y,Yc(et),vt);if(et.$$typeof===S)return tn(J,Y,lu(J,et),vt);qc(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,Y!==null&&Y.tag===6?(s(J,Y.sibling),vt=h(Y,et),vt.return=J,J=vt):(s(J,Y),vt=sd(et,J.mode,vt),vt.return=J,J=vt),T(J)):s(J,Y)}return function(J,Y,et,vt){try{Ml=0;var kt=tn(J,Y,et,vt);return Ks=null,kt}catch(Qt){if(Qt===Sl)throw Qt;var ve=zi(29,Qt,null,J.mode);return ve.lanes=vt,ve.return=J,ve}finally{}}}var Kr=ag(!0),rg=ag(!1),Qs=wt(null),jc=wt(0);function sg(n,a){n=Na,zt(jc,n),zt(Qs,a),Na=n|a.baseLanes}function dh(){zt(jc,Na),zt(Qs,Qs.current)}function ph(){Na=jc.current,te(Qs),te(jc)}var Oi=wt(null),ra=null;function nr(n){var a=n.alternate;zt(yn,yn.current&1),zt(Oi,n),ra===null&&(a===null||Qs.current!==null||a.memoizedState!==null)&&(ra=n)}function og(n){if(n.tag===22){if(zt(yn,yn.current),zt(Oi,n),ra===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(ra=n)}}else ir()}function ir(){zt(yn,yn.current),zt(Oi,Oi.current)}function Ta(n){te(Oi),ra===n&&(ra=null),te(yn)}var yn=wt(0);function Zc(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var UM=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},OM=o.unstable_scheduleCallback,NM=o.unstable_NormalPriority,Sn={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mh(){return{controller:new UM,data:new Map,refCount:0}}function Tl(n){n.refCount--,n.refCount===0&&OM(NM,function(){n.controller.abort()})}var bl=null,_h=0,Js=0,$s=null;function PM(n,a){if(bl===null){var s=bl=[];_h=0,Js=Md(),$s={status:"pending",value:void 0,then:function(c){s.push(c)}}}return _h++,a.then(lg,lg),a}function lg(){if(--_h===0&&bl!==null){$s!==null&&($s.status="fulfilled");var n=bl;bl=null,Js=0,$s=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function zM(n,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var cg=b.S;b.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&PM(n,a),cg!==null&&cg(n,a)};var Qr=wt(null);function gh(){var n=Qr.current;return n!==null?n:Ge.pooledCache}function Kc(n,a){a===null?zt(Qr,Qr.current):zt(Qr,a.pool)}function ug(){var n=gh();return n===null?null:{parent:Sn._currentValue,pool:n}}var ar=0,me=null,Ie=null,cn=null,Qc=!1,to=!1,Jr=!1,Jc=0,Al=0,eo=null,IM=0;function rn(){throw Error(i(321))}function vh(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!pi(n[s],a[s]))return!1;return!0}function yh(n,a,s,c,h,_){return ar=_,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,b.H=n===null||n.memoizedState===null?$r:rr,Jr=!1,_=s(c,h),Jr=!1,to&&(_=hg(a,s,c,h)),fg(n),_}function fg(n){b.H=sa;var a=Ie!==null&&Ie.next!==null;if(ar=0,cn=Ie=me=null,Qc=!1,Al=0,eo=null,a)throw Error(i(300));n===null||bn||(n=n.dependencies,n!==null&&ou(n)&&(bn=!0))}function hg(n,a,s,c){me=n;var h=0;do{if(to&&(eo=null),Al=0,to=!1,25<=h)throw Error(i(301));if(h+=1,cn=Ie=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}b.H=ts,_=a(s,c)}while(to);return _}function BM(){var n=b.H,a=n.useState()[0];return a=typeof a.then=="function"?Rl(a):a,n=n.useState()[0],(Ie!==null?Ie.memoizedState:null)!==n&&(me.flags|=1024),a}function Sh(){var n=Jc!==0;return Jc=0,n}function xh(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function Mh(n){if(Qc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Qc=!1}ar=0,cn=Ie=me=null,to=!1,Al=Jc=0,eo=null}function ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?me.memoizedState=cn=n:cn=cn.next=n,cn}function un(){if(Ie===null){var n=me.alternate;n=n!==null?n.memoizedState:null}else n=Ie.next;var a=cn===null?me.memoizedState:cn.next;if(a!==null)cn=a,Ie=n;else{if(n===null)throw me.alternate===null?Error(i(467)):Error(i(310));Ie=n,n={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?me.memoizedState=cn=n:cn=cn.next=n}return cn}var $c;$c=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Rl(n){var a=Al;return Al+=1,eo===null&&(eo=[]),n=eg(eo,n,a),a=me,(cn===null?a.memoizedState:cn.next)===null&&(a=a.alternate,b.H=a===null||a.memoizedState===null?$r:rr),n}function tu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Rl(n);if(n.$$typeof===S)return Bn(n)}throw Error(i(438,String(n)))}function Eh(n){var a=null,s=me.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=me.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=$c(),me.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),c=0;c<n;c++)s[c]=R;return a.index++,s}function ba(n,a){return typeof a=="function"?a(n):a}function eu(n){var a=un();return Th(a,Ie,n)}function Th(n,a,s){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=n.baseQueue,_=c.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}a.baseQueue=h=_,c.pending=null}if(_=n.baseState,h===null)n.memoizedState=_;else{a=h.next;var w=T=null,F=null,j=a,mt=!1;do{var St=j.lane&-536870913;if(St!==j.lane?(Ce&St)===St:(ar&St)===St){var ot=j.revertLane;if(ot===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),St===Js&&(mt=!0);else if((ar&ot)===ot){j=j.next,ot===Js&&(mt=!0);continue}else St={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(w=F=St,T=_):F=F.next=St,me.lanes|=ot,pr|=ot;St=j.action,Jr&&s(_,St),_=j.hasEagerState?j.eagerState:s(_,St)}else ot={lane:St,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},F===null?(w=F=ot,T=_):F=F.next=ot,me.lanes|=St,pr|=St;j=j.next}while(j!==null&&j!==a);if(F===null?T=_:F.next=w,!pi(_,n.memoizedState)&&(bn=!0,mt&&(s=$s,s!==null)))throw s;n.memoizedState=_,n.baseState=T,n.baseQueue=F,c.lastRenderedState=_}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function bh(n){var a=un(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,_=a.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do _=n(_,T.action),T=T.next;while(T!==h);pi(_,a.memoizedState)||(bn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),s.lastRenderedState=_}return[_,c]}function dg(n,a,s){var c=me,h=un(),_=Ue;if(_){if(s===void 0)throw Error(i(407));s=s()}else s=a();var T=!pi((Ie||h).memoizedState,s);if(T&&(h.memoizedState=s,bn=!0),h=h.queue,Ch(_g.bind(null,c,h,n),[n]),h.getSnapshot!==a||T||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,no(9,mg.bind(null,c,h,s,a),{destroy:void 0},null),Ge===null)throw Error(i(349));_||(ar&60)!==0||pg(c,a,s)}return s}function pg(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=me.updateQueue,a===null?(a=$c(),me.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function mg(n,a,s,c){a.value=s,a.getSnapshot=c,gg(a)&&vg(n)}function _g(n,a,s){return s(function(){gg(a)&&vg(n)})}function gg(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!pi(n,s)}catch{return!0}}function vg(n){var a=er(n,2);a!==null&&jn(a,n,2)}function Ah(n){var a=ni();if(typeof n=="function"){var s=n;if(n=s(),Jr){k(!0);try{s()}finally{k(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:n},a}function yg(n,a,s,c){return n.baseState=s,Th(n,Ie,typeof c=="function"?c:ba)}function FM(n,a,s,c,h){if(au(n))throw Error(i(485));if(n=a.action,n!==null){var _={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};b.T!==null?s(!0):_.isTransition=!1,c(_),s=a.pending,s===null?(_.next=a.pending=_,Sg(a,_)):(_.next=s.next,a.pending=s.next=_)}}function Sg(n,a){var s=a.action,c=a.payload,h=n.state;if(a.isTransition){var _=b.T,T={};b.T=T;try{var w=s(h,c),F=b.S;F!==null&&F(T,w),xg(n,a,w)}catch(j){Rh(n,a,j)}finally{b.T=_}}else try{_=s(h,c),xg(n,a,_)}catch(j){Rh(n,a,j)}}function xg(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Mg(n,a,c)},function(c){return Rh(n,a,c)}):Mg(n,a,s)}function Mg(n,a,s){a.status="fulfilled",a.value=s,Eg(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,Sg(n,s)))}function Rh(n,a,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,Eg(a),a=a.next;while(a!==c)}n.action=null}function Eg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Tg(n,a){return a}function bg(n,a){if(Ue){var s=Ge.formState;if(s!==null){t:{var c=me;if(Ue){if(Un){e:{for(var h=Un,_=aa;h.nodeType!==8;){if(!_){h=null;break e}if(h=qi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){Un=qi(h.nextSibling),c=h.data==="F!";break t}}Zr(c)}c=!1}c&&(a=s[0])}}return s=ni(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:a},s.queue=c,s=kg.bind(null,me,c),c.dispatch=s,c=Ah(!1),_=Oh.bind(null,me,!1,c.queue),c=ni(),h={state:a,dispatch:null,action:n,pending:null},c.queue=h,s=FM.bind(null,me,h,_,s),h.dispatch=s,c.memoizedState=n,[a,s,!1]}function Ag(n){var a=un();return Rg(a,Ie,n)}function Rg(n,a,s){a=Th(n,a,Tg)[0],n=eu(ba)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Rl(a):a;var c=un(),h=c.queue,_=h.dispatch;return s!==c.memoizedState&&(me.flags|=2048,no(9,HM.bind(null,h,s),{destroy:void 0},null)),[a,_,n]}function HM(n,a){n.action=a}function Cg(n){var a=un(),s=Ie;if(s!==null)return Rg(a,s,n);un(),a=a.memoizedState,s=un();var c=s.queue.dispatch;return s.memoizedState=n,[a,c,!1]}function no(n,a,s,c){return n={tag:n,create:a,inst:s,deps:c,next:null},a=me.updateQueue,a===null&&(a=$c(),me.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,a.lastEffect=n),n}function wg(){return un().memoizedState}function nu(n,a,s,c){var h=ni();me.flags|=n,h.memoizedState=no(1|a,s,{destroy:void 0},c===void 0?null:c)}function iu(n,a,s,c){var h=un();c=c===void 0?null:c;var _=h.memoizedState.inst;Ie!==null&&c!==null&&vh(c,Ie.memoizedState.deps)?h.memoizedState=no(a,s,_,c):(me.flags|=n,h.memoizedState=no(1|a,s,_,c))}function Dg(n,a){nu(8390656,8,n,a)}function Ch(n,a){iu(2048,8,n,a)}function Lg(n,a){return iu(4,2,n,a)}function Ug(n,a){return iu(4,4,n,a)}function Og(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Ng(n,a,s){s=s!=null?s.concat([n]):null,iu(4,4,Og.bind(null,a,n),s)}function wh(){}function Pg(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&vh(a,c[1])?c[0]:(s.memoizedState=[n,a],n)}function zg(n,a){var s=un();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&vh(a,c[1]))return c[0];if(c=n(),Jr){k(!0);try{n()}finally{k(!1)}}return s.memoizedState=[c,a],c}function Dh(n,a,s){return s===void 0||(ar&1073741824)!==0?n.memoizedState=a:(n.memoizedState=s,n=B0(),me.lanes|=n,pr|=n,s)}function Ig(n,a,s,c){return pi(s,a)?s:Qs.current!==null?(n=Dh(n,s,c),pi(n,a)||(bn=!0),n):(ar&42)===0?(bn=!0,n.memoizedState=s):(n=B0(),me.lanes|=n,pr|=n,a)}function Bg(n,a,s,c,h){var _=q.p;q.p=_!==0&&8>_?_:8;var T=b.T,w={};b.T=w,Oh(n,!1,a,s);try{var F=h(),j=b.S;if(j!==null&&j(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var mt=zM(F,c);Cl(n,a,mt,vi(n))}else Cl(n,a,c,vi(n))}catch(St){Cl(n,a,{then:function(){},status:"rejected",reason:St},vi())}finally{q.p=_,b.T=T}}function VM(){}function Lh(n,a,s,c){if(n.tag!==5)throw Error(i(476));var h=Fg(n).queue;Bg(n,h,a,dt,s===null?VM:function(){return Hg(n),s(c)})}function Fg(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:dt},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Hg(n){var a=Fg(n).next.queue;Cl(n,a,{},vi())}function Uh(){return Bn(jl)}function Vg(){return un().memoizedState}function Gg(){return un().memoizedState}function GM(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=vi();n=lr(s);var c=cr(a,n,s);c!==null&&(jn(c,a,s),Ll(c,a,s)),a={cache:mh()},n.payload=a;return}a=a.return}}function kM(n,a,s){var c=vi();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},au(n)?Xg(a,s):(s=lh(n,a,s,c),s!==null&&(jn(s,n,c),Wg(s,a,c)))}function kg(n,a,s){var c=vi();Cl(n,a,s,c)}function Cl(n,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(au(n))Xg(a,h);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var T=a.lastRenderedState,w=_(T,s);if(h.hasEagerState=!0,h.eagerState=w,pi(w,T))return Vc(n,a,h,0),Ge===null&&Hc(),!1}catch{}finally{}if(s=lh(n,a,h,c),s!==null)return jn(s,n,c),Wg(s,a,c),!0}return!1}function Oh(n,a,s,c){if(c={lane:2,revertLane:Md(),action:c,hasEagerState:!1,eagerState:null,next:null},au(n)){if(a)throw Error(i(479))}else a=lh(n,s,c,2),a!==null&&jn(a,n,2)}function au(n){var a=n.alternate;return n===me||a!==null&&a===me}function Xg(n,a){to=Qc=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function Wg(n,a,s){if((s&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,ia(n,s)}}var sa={readContext:Bn,use:tu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};sa.useCacheRefresh=rn,sa.useMemoCache=rn,sa.useHostTransitionStatus=rn,sa.useFormState=rn,sa.useActionState=rn,sa.useOptimistic=rn;var $r={readContext:Bn,use:tu,useCallback:function(n,a){return ni().memoizedState=[n,a===void 0?null:a],n},useContext:Bn,useEffect:Dg,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,nu(4194308,4,Og.bind(null,a,n),s)},useLayoutEffect:function(n,a){return nu(4194308,4,n,a)},useInsertionEffect:function(n,a){nu(4,2,n,a)},useMemo:function(n,a){var s=ni();a=a===void 0?null:a;var c=n();if(Jr){k(!0);try{n()}finally{k(!1)}}return s.memoizedState=[c,a],c},useReducer:function(n,a,s){var c=ni();if(s!==void 0){var h=s(a);if(Jr){k(!0);try{s(a)}finally{k(!1)}}}else h=a;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=kM.bind(null,me,n),[c.memoizedState,n]},useRef:function(n){var a=ni();return n={current:n},a.memoizedState=n},useState:function(n){n=Ah(n);var a=n.queue,s=kg.bind(null,me,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:wh,useDeferredValue:function(n,a){var s=ni();return Dh(s,n,a)},useTransition:function(){var n=Ah(!1);return n=Bg.bind(null,me,n.queue,!0,!1),ni().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var c=me,h=ni();if(Ue){if(s===void 0)throw Error(i(407));s=s()}else{if(s=a(),Ge===null)throw Error(i(349));(Ce&60)!==0||pg(c,a,s)}h.memoizedState=s;var _={value:s,getSnapshot:a};return h.queue=_,Dg(_g.bind(null,c,_,n),[n]),c.flags|=2048,no(9,mg.bind(null,c,_,s,a),{destroy:void 0},null),s},useId:function(){var n=ni(),a=Ge.identifierPrefix;if(Ue){var s=Ea,c=Ma;s=(c&~(1<<32-ft(c)-1)).toString(32)+s,a=":"+a+"R"+s,s=Jc++,0<s&&(a+="H"+s.toString(32)),a+=":"}else s=IM++,a=":"+a+"r"+s.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return ni().memoizedState=GM.bind(null,me)}};$r.useMemoCache=Eh,$r.useHostTransitionStatus=Uh,$r.useFormState=bg,$r.useActionState=bg,$r.useOptimistic=function(n){var a=ni();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Oh.bind(null,me,!0,s),s.dispatch=a,[n,a]};var rr={readContext:Bn,use:tu,useCallback:Pg,useContext:Bn,useEffect:Ch,useImperativeHandle:Ng,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:zg,useReducer:eu,useRef:wg,useState:function(){return eu(ba)},useDebugValue:wh,useDeferredValue:function(n,a){var s=un();return Ig(s,Ie.memoizedState,n,a)},useTransition:function(){var n=eu(ba)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Rl(n),a]},useSyncExternalStore:dg,useId:Vg};rr.useCacheRefresh=Gg,rr.useMemoCache=Eh,rr.useHostTransitionStatus=Uh,rr.useFormState=Ag,rr.useActionState=Ag,rr.useOptimistic=function(n,a){var s=un();return yg(s,Ie,n,a)};var ts={readContext:Bn,use:tu,useCallback:Pg,useContext:Bn,useEffect:Ch,useImperativeHandle:Ng,useInsertionEffect:Lg,useLayoutEffect:Ug,useMemo:zg,useReducer:bh,useRef:wg,useState:function(){return bh(ba)},useDebugValue:wh,useDeferredValue:function(n,a){var s=un();return Ie===null?Dh(s,n,a):Ig(s,Ie.memoizedState,n,a)},useTransition:function(){var n=bh(ba)[0],a=un().memoizedState;return[typeof n=="boolean"?n:Rl(n),a]},useSyncExternalStore:dg,useId:Vg};ts.useCacheRefresh=Gg,ts.useMemoCache=Eh,ts.useHostTransitionStatus=Uh,ts.useFormState=Cg,ts.useActionState=Cg,ts.useOptimistic=function(n,a){var s=un();return Ie!==null?yg(s,Ie,n,a):(s.baseState=n,[n,s.queue.dispatch])};function Nh(n,a,s,c){a=n.memoizedState,s=s(c,a),s=s==null?a:A({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Ph={isMounted:function(n){return(n=n._reactInternals)?W(n)===n:!1},enqueueSetState:function(n,a,s){n=n._reactInternals;var c=vi(),h=lr(c);h.payload=a,s!=null&&(h.callback=s),a=cr(n,h,c),a!==null&&(jn(a,n,c),Ll(a,n,c))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var c=vi(),h=lr(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=cr(n,h,c),a!==null&&(jn(a,n,c),Ll(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=vi(),c=lr(s);c.tag=2,a!=null&&(c.callback=a),a=cr(n,c,s),a!==null&&(jn(a,n,s),Ll(a,n,s))}};function Yg(n,a,s,c,h,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,T):a.prototype&&a.prototype.isPureReactComponent?!ml(s,c)||!ml(h,_):!0}function qg(n,a,s,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==n&&Ph.enqueueReplaceState(a,a.state,null)}function es(n,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(n=n.defaultProps){s===a&&(s=A({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ru=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function jg(n){ru(n)}function Zg(n){console.error(n)}function Kg(n){ru(n)}function su(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Qg(n,a,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zh(n,a,s){return s=lr(s),s.tag=3,s.payload={element:null},s.callback=function(){su(n,a)},s}function Jg(n){return n=lr(n),n.tag=3,n}function $g(n,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var _=c.value;n.payload=function(){return h(_)},n.callback=function(){Qg(a,s,c)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Qg(a,s,c),typeof h!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function XM(n,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&Dl(a,s,h,!0),s=Oi.current,s!==null){switch(s.tag){case 13:return ra===null?gd():s.alternate===null&&$e===0&&($e=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===hh?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),yd(n,c,h)),!1;case 22:return s.flags|=65536,c===hh?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),yd(n,c,h)),!1}throw Error(i(435,s.tag))}return yd(n,c,h),gd(),!1}if(Ue)return a=Oi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==fh&&(n=Error(i(422),{cause:c}),yl(Di(n,s)))):(c!==fh&&(a=Error(i(423),{cause:c}),yl(Di(a,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=Di(c,s),h=zh(n.stateNode,c,h),Qh(n,h),$e!==4&&($e=2)),!1;var _=Error(i(520),{cause:c});if(_=Di(_,s),Fl===null?Fl=[_]:Fl.push(_),$e!==4&&($e=2),a===null)return!0;c=Di(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=zh(s.stateNode,c,n),Qh(s,n),!1;case 1:if(a=s.type,_=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(mr===null||!mr.has(_))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Jg(h),$g(h,n,s,c),Qh(s,h),!1}s=s.return}while(s!==null);return!1}var t0=Error(i(461)),bn=!1;function On(n,a,s,c){a.child=n===null?rg(a,null,s,c):Kr(a,n.child,s,c)}function e0(n,a,s,c,h){s=s.render;var _=a.ref;if("ref"in c){var T={};for(var w in c)w!=="ref"&&(T[w]=c[w])}else T=c;return is(a),c=yh(n,a,s,T,_,h),w=Sh(),n!==null&&!bn?(xh(n,a,h),Aa(n,a,h)):(Ue&&w&&ch(a),a.flags|=1,On(n,a,c,h),a.child)}function n0(n,a,s,c,h){if(n===null){var _=s.type;return typeof _=="function"&&!rd(_)&&_.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=_,i0(n,a,_,c,h)):(n=fu(s.type,null,c,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(_=n.child,!Wh(n,h)){var T=_.memoizedProps;if(s=s.compare,s=s!==null?s:ml,s(T,c)&&n.ref===a.ref)return Aa(n,a,h)}return a.flags|=1,n=dr(_,c),n.ref=a.ref,n.return=a,a.child=n}function i0(n,a,s,c,h){if(n!==null){var _=n.memoizedProps;if(ml(_,c)&&n.ref===a.ref)if(bn=!1,a.pendingProps=c=_,Wh(n,h))(n.flags&131072)!==0&&(bn=!0);else return a.lanes=n.lanes,Aa(n,a,h)}return Ih(n,a,s,c,h)}function a0(n,a,s){var c=a.pendingProps,h=c.children,_=(a.stateNode._pendingVisibility&2)!==0,T=n!==null?n.memoizedState:null;if(wl(n,a),c.mode==="hidden"||_){if((a.flags&128)!==0){if(c=T!==null?T.baseLanes|s:s,n!==null){for(h=a.child=n.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;a.childLanes=_&~c}else a.childLanes=0,a.child=null;return r0(n,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Kc(a,T!==null?T.cachePool:null),T!==null?sg(a,T):dh(),og(a);else return a.lanes=a.childLanes=536870912,r0(n,a,T!==null?T.baseLanes|s:s,s)}else T!==null?(Kc(a,T.cachePool),sg(a,T),ir(),a.memoizedState=null):(n!==null&&Kc(a,null),dh(),ir());return On(n,a,h,s),a.child}function r0(n,a,s,c){var h=gh();return h=h===null?null:{parent:Sn._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},n!==null&&Kc(a,null),dh(),og(a),n!==null&&Dl(n,a,c,!0),null}function wl(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(a.flags|=2097664)}}function Ih(n,a,s,c,h){return is(a),s=yh(n,a,s,c,void 0,h),c=Sh(),n!==null&&!bn?(xh(n,a,h),Aa(n,a,h)):(Ue&&c&&ch(a),a.flags|=1,On(n,a,s,h),a.child)}function s0(n,a,s,c,h,_){return is(a),a.updateQueue=null,s=hg(a,c,s,h),fg(n),c=Sh(),n!==null&&!bn?(xh(n,a,_),Aa(n,a,_)):(Ue&&c&&ch(a),a.flags|=1,On(n,a,s,_),a.child)}function o0(n,a,s,c,h){if(is(a),a.stateNode===null){var _=qs,T=s.contextType;typeof T=="object"&&T!==null&&(_=Bn(T)),_=new s(c,_),a.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Ph,a.stateNode=_,_._reactInternals=a,_=a.stateNode,_.props=c,_.state=a.memoizedState,_.refs={},Zh(a),T=s.contextType,_.context=typeof T=="object"&&T!==null?Bn(T):qs,_.state=a.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Nh(a,s,T,c),_.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Ph.enqueueReplaceState(_,_.state,null),Ol(a,c,_,h),Ul(),_.state=a.memoizedState),typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){_=a.stateNode;var w=a.memoizedProps,F=es(s,w);_.props=F;var j=_.context,mt=s.contextType;T=qs,typeof mt=="object"&&mt!==null&&(T=Bn(mt));var St=s.getDerivedStateFromProps;mt=typeof St=="function"||typeof _.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,mt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w||j!==T)&&qg(a,_,c,T),or=!1;var ot=a.memoizedState;_.state=ot,Ol(a,c,_,h),Ul(),j=a.memoizedState,w||ot!==j||or?(typeof St=="function"&&(Nh(a,s,St,c),j=a.memoizedState),(F=or||Yg(a,s,F,c,ot,j,T))?(mt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=j),_.props=c,_.state=j,_.context=T,c=F):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{_=a.stateNode,Kh(n,a),T=a.memoizedProps,mt=es(s,T),_.props=mt,St=a.pendingProps,ot=_.context,j=s.contextType,F=qs,typeof j=="object"&&j!==null&&(F=Bn(j)),w=s.getDerivedStateFromProps,(j=typeof w=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==St||ot!==F)&&qg(a,_,c,F),or=!1,ot=a.memoizedState,_.state=ot,Ol(a,c,_,h),Ul();var ht=a.memoizedState;T!==St||ot!==ht||or||n!==null&&n.dependencies!==null&&ou(n.dependencies)?(typeof w=="function"&&(Nh(a,s,w,c),ht=a.memoizedState),(mt=or||Yg(a,s,mt,c,ot,ht,F)||n!==null&&n.dependencies!==null&&ou(n.dependencies))?(j||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ht,F),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ht,F)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=ht),_.props=c,_.state=ht,_.context=F,c=mt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ot===n.memoizedState||(a.flags|=1024),c=!1)}return _=c,wl(n,a),c=(a.flags&128)!==0,_||c?(_=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:_.render(),a.flags|=1,n!==null&&c?(a.child=Kr(a,n.child,null,h),a.child=Kr(a,null,s,h)):On(n,a,s,h),a.memoizedState=_.state,n=a.child):n=Aa(n,a,h),n}function l0(n,a,s,c){return vl(),a.flags|=256,On(n,a,s,c),a.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function Fh(n){return{baseLanes:n,cachePool:ug()}}function Hh(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=Ii),n}function c0(n,a,s){var c=a.pendingProps,h=!1,_=(a.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),T&&(h=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ue){if(h?nr(a):ir(),Ue){var w=Un,F;if(F=w){t:{for(F=w,w=aa;F.nodeType!==8;){if(!w){w=null;break t}if(F=qi(F.nextSibling),F===null){w=null;break t}}w=F}w!==null?(a.memoizedState={dehydrated:w,treeContext:qr!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912},F=zi(18,null,null,0),F.stateNode=w,F.return=a,a.child=F,qn=a,Un=null,F=!0):F=!1}F||Zr(a)}if(w=a.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?a.lanes=16:a.lanes=536870912,null;Ta(a)}return w=c.children,c=c.fallback,h?(ir(),h=a.mode,w=Gh({mode:"hidden",children:w},h),c=rs(c,h,s,null),w.return=a,c.return=a,w.sibling=c,a.child=w,h=a.child,h.memoizedState=Fh(s),h.childLanes=Hh(n,T,s),a.memoizedState=Bh,c):(nr(a),Vh(a,w))}if(F=n.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(_)a.flags&256?(nr(a),a.flags&=-257,a=kh(n,a,s)):a.memoizedState!==null?(ir(),a.child=n.child,a.flags|=128,a=null):(ir(),h=c.fallback,w=a.mode,c=Gh({mode:"visible",children:c.children},w),h=rs(h,w,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,Kr(a,n.child,null,s),c=a.child,c.memoizedState=Fh(s),c.childLanes=Hh(n,T,s),a.memoizedState=Bh,a=h);else if(nr(a),w.data==="$!"){if(T=w.nextSibling&&w.nextSibling.dataset,T)var j=T.dgst;T=j,c=Error(i(419)),c.stack="",c.digest=T,yl({value:c,source:null,stack:null}),a=kh(n,a,s)}else if(bn||Dl(n,a,s,!1),T=(s&n.childLanes)!==0,bn||T){if(T=Ge,T!==null){if(c=s&-s,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|s))!==0?0:c,c!==0&&c!==F.retryLane)throw F.retryLane=c,er(n,c),jn(T,n,c),t0}w.data==="$?"||gd(),a=kh(n,a,s)}else w.data==="$?"?(a.flags|=128,a.child=n.child,a=rE.bind(null,n),w._reactRetry=a,a=null):(n=F.treeContext,Un=qi(w.nextSibling),qn=a,Ue=!0,Wi=null,aa=!1,n!==null&&(Li[Ui++]=Ma,Li[Ui++]=Ea,Li[Ui++]=qr,Ma=n.id,Ea=n.overflow,qr=a),a=Vh(a,c.children),a.flags|=4096);return a}return h?(ir(),h=c.fallback,w=a.mode,F=n.child,j=F.sibling,c=dr(F,{mode:"hidden",children:c.children}),c.subtreeFlags=F.subtreeFlags&31457280,j!==null?h=dr(j,h):(h=rs(h,w,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,w=n.child.memoizedState,w===null?w=Fh(s):(F=w.cachePool,F!==null?(j=Sn._currentValue,F=F.parent!==j?{parent:j,pool:j}:F):F=ug(),w={baseLanes:w.baseLanes|s,cachePool:F}),h.memoizedState=w,h.childLanes=Hh(n,T,s),a.memoizedState=Bh,c):(nr(a),s=n.child,n=s.sibling,s=dr(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,n!==null&&(T=a.deletions,T===null?(a.deletions=[n],a.flags|=16):T.push(n)),a.child=s,a.memoizedState=null,s)}function Vh(n,a){return a=Gh({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Gh(n,a){return P0(n,a,0,null)}function kh(n,a,s){return Kr(a,n.child,null,s),n=Vh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function u0(n,a,s){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),qh(n.return,a,s)}function Xh(n,a,s,c,h){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=s,_.tailMode=h)}function f0(n,a,s){var c=a.pendingProps,h=c.revealOrder,_=c.tail;if(On(n,a,c.children,s),c=yn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&u0(n,s,a);else if(n.tag===19)u0(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(zt(yn,c),h){case"forwards":for(s=a.child,h=null;s!==null;)n=s.alternate,n!==null&&Zc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Xh(a,!1,h,s,_);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&Zc(n)===null){a.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Xh(a,!0,s,null,_);break;case"together":Xh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Aa(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),pr|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(Dl(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,s=dr(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=dr(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function Wh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&ou(n)))}function WM(n,a,s){switch(a.tag){case 3:mn(a,a.stateNode.containerInfo),sr(a,Sn,n.memoizedState.cache),vl();break;case 27:case 5:ue(a);break;case 4:mn(a,a.stateNode.containerInfo);break;case 10:sr(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(nr(a),a.flags|=128,null):(s&a.child.childLanes)!==0?c0(n,a,s):(nr(a),n=Aa(n,a,s),n!==null?n.sibling:null);nr(a);break;case 19:var h=(n.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(Dl(n,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return f0(n,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),zt(yn,yn.current),c)break;return null;case 22:case 23:return a.lanes=0,a0(n,a,s);case 24:sr(a,Sn,n.memoizedState.cache)}return Aa(n,a,s)}function h0(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)bn=!0;else{if(!Wh(n,s)&&(a.flags&128)===0)return bn=!1,WM(n,a,s);bn=(n.flags&131072)!==0}else bn=!1,Ue&&(a.flags&1048576)!==0&&K_(a,Xc,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")rd(c)?(n=es(c,n),a.tag=1,a=o0(null,a,c,n,s)):(a.tag=0,a=Ih(null,a,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===E){a.tag=11,a=e0(null,a,c,n,s);break t}else if(h===y){a.tag=14,a=n0(null,a,c,n,s);break t}}throw a=B(c)||c,Error(i(306,a,""))}}return a;case 0:return Ih(n,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=es(c,a.pendingProps),o0(n,a,c,h,s);case 3:t:{if(mn(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var _=a.pendingProps;h=a.memoizedState,c=h.element,Kh(n,a),Ol(a,_,null,s);var T=a.memoizedState;if(_=T.cache,sr(a,Sn,_),_!==h.cache&&jh(a,[Sn],s,!0),Ul(),_=T.element,h.isDehydrated)if(h={element:_,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=h,a.memoizedState=h,a.flags&256){a=l0(n,a,_,s);break t}else if(_!==c){c=Di(Error(i(424)),a),yl(c),a=l0(n,a,_,s);break t}else for(Un=qi(a.stateNode.containerInfo.firstChild),qn=a,Ue=!0,Wi=null,aa=!0,s=rg(a,null,_,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(vl(),_===c){a=Aa(n,a,s);break t}On(n,a,_,s)}a=a.child}return a;case 26:return wl(n,a),n===null?(s=mv(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ue||(s=a.type,n=a.pendingProps,c=Eu(se.current).createElement(s),c[_n]=a,c[gn]=n,Nn(c,s,n),tt(c),a.stateNode=c):a.memoizedState=mv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return ue(a),n===null&&Ue&&(c=a.stateNode=hv(a.type,a.pendingProps,se.current),qn=a,aa=!0,Un=qi(c.firstChild)),c=a.pendingProps.children,n!==null||Ue?On(n,a,c,s):a.child=Kr(a,null,c,s),wl(n,a),a.child;case 5:return n===null&&Ue&&((h=c=Un)&&(c=xE(c,a.type,a.pendingProps,aa),c!==null?(a.stateNode=c,qn=a,Un=qi(c.firstChild),aa=!1,h=!0):h=!1),h||Zr(a)),ue(a),h=a.type,_=a.pendingProps,T=n!==null?n.memoizedProps:null,c=_.children,Ld(h,_)?c=null:T!==null&&Ld(h,T)&&(a.flags|=32),a.memoizedState!==null&&(h=yh(n,a,BM,null,null,s),jl._currentValue=h),wl(n,a),On(n,a,c,s),a.child;case 6:return n===null&&Ue&&((n=s=Un)&&(s=ME(s,a.pendingProps,aa),s!==null?(a.stateNode=s,qn=a,Un=null,n=!0):n=!1),n||Zr(a)),null;case 13:return c0(n,a,s);case 4:return mn(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Kr(a,null,c,s):On(n,a,c,s),a.child;case 11:return e0(n,a,a.type,a.pendingProps,s);case 7:return On(n,a,a.pendingProps,s),a.child;case 8:return On(n,a,a.pendingProps.children,s),a.child;case 12:return On(n,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,sr(a,a.type,c.value),On(n,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,is(a),h=Bn(h),c=c(h),a.flags|=1,On(n,a,c,s),a.child;case 14:return n0(n,a,a.type,a.pendingProps,s);case 15:return i0(n,a,a.type,a.pendingProps,s);case 19:return f0(n,a,s);case 22:return a0(n,a,s);case 24:return is(a),c=Bn(Sn),n===null?(h=gh(),h===null&&(h=Ge,_=mh(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=s),h=_),a.memoizedState={parent:c,cache:h},Zh(a),sr(a,Sn,h)):((n.lanes&s)!==0&&(Kh(n,a),Ol(a,null,null,s),Ul()),h=n.memoizedState,_=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),sr(a,Sn,c)):(c=_.cache,sr(a,Sn,c),c!==h.cache&&jh(a,[Sn],s,!0))),On(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var Yh=wt(null),ns=null,Ra=null;function sr(n,a,s){zt(Yh,a._currentValue),a._currentValue=s}function Ca(n){n._currentValue=Yh.current,te(Yh)}function qh(n,a,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===s)break;n=n.return}}function jh(n,a,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var w=_;_=h;for(var F=0;F<a.length;F++)if(w.context===a[F]){_.lanes|=s,w=_.alternate,w!==null&&(w.lanes|=s),qh(_.return,s,n),c||(T=null);break t}_=w.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(i(341));T.lanes|=s,_=T.alternate,_!==null&&(_.lanes|=s),qh(T,s,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Dl(n,a,s,c){n=null;for(var h=a,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var w=h.type;pi(h.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(h===G.current){if(T=h.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(jl):n=[jl])}h=h.return}n!==null&&jh(a,n,s,c),a.flags|=262144}function ou(n){for(n=n.firstContext;n!==null;){if(!pi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function is(n){ns=n,Ra=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return d0(ns,n)}function lu(n,a){return ns===null&&is(n),d0(n,a)}function d0(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Ra===null){if(n===null)throw Error(i(308));Ra=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ra=Ra.next=a;return s}var or=!1;function Zh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kh(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function lr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function cr(n,a,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=Gc(n),j_(n,null,s),a}return Vc(n,c,a,s),Gc(n)}function Ll(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,s|=c,a.lanes=s,ia(n,s)}}function Qh(n,a){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,_=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,s=s.next}while(s!==null);_===null?h=_=a:_=_.next=a}else h=_=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var Jh=!1;function Ul(){if(Jh){var n=$s;if(n!==null)throw n}}function Ol(n,a,s,c){Jh=!1;var h=n.updateQueue;or=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var F=w,j=F.next;F.next=null,T===null?_=j:T.next=j,T=F;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==T&&(w===null?mt.firstBaseUpdate=j:w.next=j,mt.lastBaseUpdate=F))}if(_!==null){var St=h.baseState;T=0,mt=j=F=null,w=_;do{var ot=w.lane&-536870913,ht=ot!==w.lane;if(ht?(Ce&ot)===ot:(c&ot)===ot){ot!==0&&ot===Js&&(Jh=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var jt=n,le=w;ot=a;var tn=s;switch(le.tag){case 1:if(jt=le.payload,typeof jt=="function"){St=jt.call(tn,St,ot);break t}St=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=le.payload,ot=typeof jt=="function"?jt.call(tn,St,ot):jt,ot==null)break t;St=A({},St,ot);break t;case 2:or=!0}}ot=w.callback,ot!==null&&(n.flags|=64,ht&&(n.flags|=8192),ht=h.callbacks,ht===null?h.callbacks=[ot]:ht.push(ot))}else ht={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(j=mt=ht,F=St):mt=mt.next=ht,T|=ot;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ht=w,w=ht.next,ht.next=null,h.lastBaseUpdate=ht,h.shared.pending=null}}while(!0);mt===null&&(F=St),h.baseState=F,h.firstBaseUpdate=j,h.lastBaseUpdate=mt,_===null&&(h.shared.lanes=0),pr|=T,n.lanes=T,n.memoizedState=St}}function p0(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function m0(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)p0(s[n],a)}function Nl(n,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var _=s.create,T=s.inst;c=_(),T.destroy=c}s=s.next}while(s!==h)}}catch(w){He(a,a.return,w)}}function ur(n,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var _=h.next;c=_;do{if((c.tag&n)===n){var T=c.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,h=a;var F=s;try{w()}catch(j){He(h,F,j)}}}c=c.next}while(c!==_)}}catch(j){He(a,a.return,j)}}function _0(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{m0(a,s)}catch(c){He(n,n.return,c)}}}function g0(n,a,s){s.props=es(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){He(n,a,c)}}function as(n,a){try{var s=n.ref;if(s!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var h=c;break;default:h=c}typeof s=="function"?n.refCleanup=s(h):s.current=h}}catch(_){He(n,a,_)}}function mi(n,a){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){He(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){He(n,a,h)}else s.current=null}function v0(n){var a=n.type,s=n.memoizedProps,c=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){He(n,n.return,h)}}function y0(n,a,s){try{var c=n.stateNode;_E(c,n.type,s,a),c[gn]=a}catch(h){He(n,n.return,h)}}function S0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function $h(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||S0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.nodeType===8?s.parentNode.insertBefore(n,a):s.insertBefore(n,a):(s.nodeType===8?(a=s.parentNode,a.insertBefore(n,s)):(a=s,a.appendChild(n)),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Mu));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(td(n,a,s),n=n.sibling;n!==null;)td(n,a,s),n=n.sibling}function cu(n,a,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(cu(n,a,s),n=n.sibling;n!==null;)cu(n,a,s),n=n.sibling}var wa=!1,Je=!1,ed=!1,x0=typeof WeakSet=="function"?WeakSet:Set,An=null,M0=!1;function YM(n,a){if(n=n.containerInfo,wd=wu,n=F_(n),ih(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,w=-1,F=-1,j=0,mt=0,St=n,ot=null;e:for(;;){for(var ht;St!==s||h!==0&&St.nodeType!==3||(w=T+h),St!==_||c!==0&&St.nodeType!==3||(F=T+c),St.nodeType===3&&(T+=St.nodeValue.length),(ht=St.firstChild)!==null;)ot=St,St=ht;for(;;){if(St===n)break e;if(ot===s&&++j===h&&(w=T),ot===_&&++mt===c&&(F=T),(ht=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=ht}s=w===-1||F===-1?null:{start:w,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Dd={focusedElem:n,selectionRange:s},wu=!1,An=a;An!==null;)if(a=An,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,An=n;else for(;An!==null;){switch(a=An,_=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,s=a,h=_.memoizedProps,_=_.memoizedState,c=s.stateNode;try{var jt=es(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(jt,_),c.__reactInternalSnapshotBeforeUpdate=n}catch(le){He(s,s.return,le)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)Nd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Nd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,An=n;break}An=a.return}return jt=M0,M0=!1,jt}function E0(n,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:La(n,s),c&4&&Nl(5,s);break;case 1:if(La(n,s),c&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(w){He(s,s.return,w)}else{var h=es(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){He(s,s.return,w)}}c&64&&_0(s),c&512&&as(s,s.return);break;case 3:if(La(n,s),c&64&&(c=s.updateQueue,c!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{m0(c,n)}catch(w){He(s,s.return,w)}}break;case 26:La(n,s),c&512&&as(s,s.return);break;case 27:case 5:La(n,s),a===null&&c&4&&v0(s),c&512&&as(s,s.return);break;case 12:La(n,s);break;case 13:La(n,s),c&4&&A0(n,s);break;case 22:if(h=s.memoizedState!==null||wa,!h){a=a!==null&&a.memoizedState!==null||Je;var _=wa,T=Je;wa=h,(Je=a)&&!T?fr(n,s,(s.subtreeFlags&8772)!==0):La(n,s),wa=_,Je=T}c&512&&(s.memoizedProps.mode==="manual"?as(s,s.return):mi(s,s.return));break;default:La(n,s)}}function T0(n){var a=n.alternate;a!==null&&(n.alternate=null,T0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&ol(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var fn=null,_i=!1;function Da(n,a,s){for(s=s.child;s!==null;)b0(n,a,s),s=s.sibling}function b0(n,a,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Jt,s)}catch{}switch(s.tag){case 26:Je||mi(s,a),Da(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Je||mi(s,a);var c=fn,h=_i;for(fn=s.stateNode,Da(n,a,s),s=s.stateNode,a=s.attributes;a.length;)s.removeAttributeNode(a[0]);ol(s),fn=c,_i=h;break;case 5:Je||mi(s,a);case 6:h=fn;var _=_i;if(fn=null,Da(n,a,s),fn=h,_i=_,fn!==null)if(_i)try{n=fn,c=s.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(T){He(s,a,T)}else try{fn.removeChild(s.stateNode)}catch(T){He(s,a,T)}break;case 18:fn!==null&&(_i?(a=fn,s=s.stateNode,a.nodeType===8?Od(a.parentNode,s):a.nodeType===1&&Od(a,s),Jl(a)):Od(fn,s.stateNode));break;case 4:c=fn,h=_i,fn=s.stateNode.containerInfo,_i=!0,Da(n,a,s),fn=c,_i=h;break;case 0:case 11:case 14:case 15:Je||ur(2,s,a),Je||ur(4,s,a),Da(n,a,s);break;case 1:Je||(mi(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&g0(s,a,c)),Da(n,a,s);break;case 21:Da(n,a,s);break;case 22:Je||mi(s,a),Je=(c=Je)||s.memoizedState!==null,Da(n,a,s),Je=c;break;default:Da(n,a,s)}}function A0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Jl(n)}catch(s){He(a,a.return,s)}}function qM(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new x0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new x0),a;default:throw Error(i(435,n.tag))}}function nd(n,a){var s=qM(n);a.forEach(function(c){var h=sE.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function Ni(n,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],_=n,T=a,w=T;t:for(;w!==null;){switch(w.tag){case 27:case 5:fn=w.stateNode,_i=!1;break t;case 3:fn=w.stateNode.containerInfo,_i=!0;break t;case 4:fn=w.stateNode.containerInfo,_i=!0;break t}w=w.return}if(fn===null)throw Error(i(160));b0(_,T,h),fn=null,_i=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)R0(a,n),a=a.sibling}var Yi=null;function R0(n,a){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ni(a,n),Pi(n),c&4&&(ur(3,n,n.return),Nl(3,n),ur(5,n,n.return));break;case 1:Ni(a,n),Pi(n),c&512&&(Je||s===null||mi(s,s.return)),c&64&&wa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Yi;if(Ni(a,n),Pi(n),c&512&&(Je||s===null||mi(s,s.return)),c&4){var _=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){t:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":_=h.getElementsByTagName("title")[0],(!_||_[kr]||_[_n]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(c),h.head.insertBefore(_,h.querySelector("head > title"))),Nn(_,c,s),_[_n]=n,tt(_),c=_;break t;case"link":var T=vv("link","href",h).get(c+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(_=T[w],_.getAttribute("href")===(s.href==null?null:s.href)&&_.getAttribute("rel")===(s.rel==null?null:s.rel)&&_.getAttribute("title")===(s.title==null?null:s.title)&&_.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}_=h.createElement(c),Nn(_,c,s),h.head.appendChild(_);break;case"meta":if(T=vv("meta","content",h).get(c+(s.content||""))){for(w=0;w<T.length;w++)if(_=T[w],_.getAttribute("content")===(s.content==null?null:""+s.content)&&_.getAttribute("name")===(s.name==null?null:s.name)&&_.getAttribute("property")===(s.property==null?null:s.property)&&_.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&_.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}_=h.createElement(c),Nn(_,c,s),h.head.appendChild(_);break;default:throw Error(i(468,c))}_[_n]=n,tt(_),c=_}n.stateNode=c}else yv(h,n.type,n.stateNode);else n.stateNode=gv(h,c,n.memoizedProps);else _!==c?(_===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):_.count--,c===null?yv(h,n.type,n.stateNode):gv(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&y0(n,n.memoizedProps,s.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){h=n.stateNode,_=n.memoizedProps;try{for(var F=h.firstChild;F;){var j=F.nextSibling,mt=F.nodeName;F[kr]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&F.rel.toLowerCase()==="stylesheet"||h.removeChild(F),F=j}for(var St=n.type,ot=h.attributes;ot.length;)h.removeAttributeNode(ot[0]);Nn(h,St,_),h[_n]=n,h[gn]=_}catch(jt){He(n,n.return,jt)}}case 5:if(Ni(a,n),Pi(n),c&512&&(Je||s===null||mi(s,s.return)),n.flags&32){h=n.stateNode;try{ti(h,"")}catch(jt){He(n,n.return,jt)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,y0(n,h,s!==null?s.memoizedProps:h)),c&1024&&(ed=!0);break;case 6:if(Ni(a,n),Pi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(jt){He(n,n.return,jt)}}break;case 3:if(Au=null,h=Yi,Yi=Tu(a.containerInfo),Ni(a,n),Yi=h,Pi(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Jl(a.containerInfo)}catch(jt){He(n,n.return,jt)}ed&&(ed=!1,C0(n));break;case 4:c=Yi,Yi=Tu(n.stateNode.containerInfo),Ni(a,n),Pi(n),Yi=c;break;case 12:Ni(a,n),Pi(n);break;case 13:Ni(a,n),Pi(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(fd=pt()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,nd(n,c)));break;case 22:if(c&512&&(Je||s===null||mi(s,s.return)),F=n.memoizedState!==null,j=s!==null&&s.memoizedState!==null,mt=wa,St=Je,wa=mt||F,Je=St||j,Ni(a,n),Je=St,wa=mt,Pi(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=F?a._visibility&-2:a._visibility|1,F&&(a=wa||Je,s===null||j||a||io(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(s=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(s===null){j=s=a;try{if(h=j.stateNode,F)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=j.stateNode,w=j.memoizedProps.style;var ht=w!=null&&w.hasOwnProperty("display")?w.display:null;T.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(jt){He(j,j.return,jt)}}}else if(a.tag===6){if(s===null){j=a;try{j.stateNode.nodeValue=F?"":j.memoizedProps}catch(jt){He(j,j.return,jt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,nd(n,s))));break;case 19:Ni(a,n),Pi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,nd(n,c)));break;case 21:break;default:Ni(a,n),Pi(n)}}function Pi(n){var a=n.flags;if(a&2){try{if(n.tag!==27){t:{for(var s=n.return;s!==null;){if(S0(s)){var c=s;break t}s=s.return}throw Error(i(160))}switch(c.tag){case 27:var h=c.stateNode,_=$h(n);cu(n,_,h);break;case 5:var T=c.stateNode;c.flags&32&&(ti(T,""),c.flags&=-33);var w=$h(n);cu(n,w,T);break;case 3:case 4:var F=c.stateNode.containerInfo,j=$h(n);td(n,j,F);break;default:throw Error(i(161))}}}catch(mt){He(n,n.return,mt)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function C0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;C0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function La(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)E0(n,a.alternate,a),a=a.sibling}function io(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ur(4,a,a.return),io(a);break;case 1:mi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&g0(a,a.return,s),io(a);break;case 26:case 27:case 5:mi(a,a.return),io(a);break;case 22:mi(a,a.return),a.memoizedState===null&&io(a);break;default:io(a)}n=n.sibling}}function fr(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=n,_=a,T=_.flags;switch(_.tag){case 0:case 11:case 15:fr(h,_,s),Nl(4,_);break;case 1:if(fr(h,_,s),c=_,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){He(c,c.return,j)}if(c=_,h=c.updateQueue,h!==null){var w=c.stateNode;try{var F=h.shared.hiddenCallbacks;if(F!==null)for(h.shared.hiddenCallbacks=null,h=0;h<F.length;h++)p0(F[h],w)}catch(j){He(c,c.return,j)}}s&&T&64&&_0(_),as(_,_.return);break;case 26:case 27:case 5:fr(h,_,s),s&&c===null&&T&4&&v0(_),as(_,_.return);break;case 12:fr(h,_,s);break;case 13:fr(h,_,s),s&&T&4&&A0(h,_);break;case 22:_.memoizedState===null&&fr(h,_,s),as(_,_.return);break;default:fr(h,_,s)}a=a.sibling}}function id(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Tl(s))}function ad(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Tl(n))}function hr(n,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)w0(n,a,s,c),a=a.sibling}function w0(n,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:hr(n,a,s,c),h&2048&&Nl(9,a);break;case 3:hr(n,a,s,c),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Tl(n)));break;case 12:if(h&2048){hr(n,a,s,c),n=a.stateNode;try{var _=a.memoizedProps,T=_.id,w=_.onPostCommit;typeof w=="function"&&w(T,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(F){He(a,a.return,F)}}else hr(n,a,s,c);break;case 23:break;case 22:_=a.stateNode,a.memoizedState!==null?_._visibility&4?hr(n,a,s,c):Pl(n,a):_._visibility&4?hr(n,a,s,c):(_._visibility|=4,ao(n,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&id(a.alternate,a);break;case 24:hr(n,a,s,c),h&2048&&ad(a.alternate,a);break;default:hr(n,a,s,c)}}function ao(n,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var _=n,T=a,w=s,F=c,j=T.flags;switch(T.tag){case 0:case 11:case 15:ao(_,T,w,F,h),Nl(8,T);break;case 23:break;case 22:var mt=T.stateNode;T.memoizedState!==null?mt._visibility&4?ao(_,T,w,F,h):Pl(_,T):(mt._visibility|=4,ao(_,T,w,F,h)),h&&j&2048&&id(T.alternate,T);break;case 24:ao(_,T,w,F,h),h&&j&2048&&ad(T.alternate,T);break;default:ao(_,T,w,F,h)}a=a.sibling}}function Pl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,c=a,h=c.flags;switch(c.tag){case 22:Pl(s,c),h&2048&&id(c.alternate,c);break;case 24:Pl(s,c),h&2048&&ad(c.alternate,c);break;default:Pl(s,c)}a=a.sibling}}var zl=8192;function ro(n){if(n.subtreeFlags&zl)for(n=n.child;n!==null;)D0(n),n=n.sibling}function D0(n){switch(n.tag){case 26:ro(n),n.flags&zl&&n.memoizedState!==null&&PE(Yi,n.memoizedState,n.memoizedProps);break;case 5:ro(n);break;case 3:case 4:var a=Yi;Yi=Tu(n.stateNode.containerInfo),ro(n),Yi=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=zl,zl=16777216,ro(n),zl=a):ro(n));break;default:ro(n)}}function L0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Il(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,O0(c,n)}L0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(n),n=n.sibling}function U0(n){switch(n.tag){case 0:case 11:case 15:Il(n),n.flags&2048&&ur(9,n,n.return);break;case 3:Il(n);break;case 12:Il(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,uu(n)):Il(n);break;default:Il(n)}}function uu(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];An=c,O0(c,n)}L0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ur(8,a,a.return),uu(a);break;case 22:s=a.stateNode,s._visibility&4&&(s._visibility&=-5,uu(a));break;default:uu(a)}n=n.sibling}}function O0(n,a){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:ur(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Tl(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,An=c;else t:for(s=n;An!==null;){c=An;var h=c.sibling,_=c.return;if(T0(c),c===s){An=null;break t}if(h!==null){h.return=_,An=h;break t}An=_}}}function jM(n,a,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(n,a,s,c){return new jM(n,a,s,c)}function rd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dr(n,a){var s=n.alternate;return s===null?(s=zi(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function N0(n,a){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function fu(n,a,s,c,h,_){var T=0;if(c=n,typeof n=="function")rd(n)&&(T=1);else if(typeof n=="string")T=OE(n,s,Ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case d:return rs(s.children,h,_,a);case p:T=8,h|=24;break;case m:return n=zi(12,s,a,h|2),n.elementType=m,n.lanes=_,n;case M:return n=zi(13,s,a,h),n.elementType=M,n.lanes=_,n;case x:return n=zi(19,s,a,h),n.elementType=x,n.lanes=_,n;case U:return P0(s,h,_,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case g:case S:T=10;break t;case v:T=9;break t;case E:T=11;break t;case y:T=14;break t;case L:T=16,c=null;break t}T=29,s=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=zi(T,s,a,h),a.elementType=n,a.type=c,a.lanes=_,a}function rs(n,a,s,c){return n=zi(7,n,c,a),n.lanes=s,n}function P0(n,a,s,c){n=zi(22,n,c,a),n.elementType=U,n.lanes=s;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var _=h._current;if(_===null)throw Error(i(456));if((h._pendingVisibility&2)===0){var T=er(_,2);T!==null&&(h._pendingVisibility|=2,jn(T,_,2))}},attach:function(){var _=h._current;if(_===null)throw Error(i(456));if((h._pendingVisibility&2)!==0){var T=er(_,2);T!==null&&(h._pendingVisibility&=-3,jn(T,_,2))}}};return n.stateNode=h,n}function sd(n,a,s){return n=zi(6,n,null,a),n.lanes=s,n}function od(n,a,s){return a=zi(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Ua(n){n.flags|=4}function z0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Sv(a)){if(a=Oi.current,a!==null&&((Ce&4194176)===Ce?ra!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||a!==ra))throw xl=hh,$_;n.flags|=8192}}function hu(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?ge():536870912,n.lanes|=a,oo|=a)}function Bl(n,a){if(!Ue)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qe(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(a)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&31457280,c|=h.flags&31457280,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,a}function ZM(n,a,s){var c=a.pendingProps;switch(uh(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(a),null;case 1:return qe(a),null;case 3:return s=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Ca(Sn),ce(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(gl(a)?Ua(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Wi!==null&&(md(Wi),Wi=null))),qe(a),null;case 26:return s=a.memoizedState,n===null?(Ua(a),s!==null?(qe(a),z0(a,s)):(qe(a),a.flags&=-16777217)):s?s!==n.memoizedState?(Ua(a),qe(a),z0(a,s)):(qe(a),a.flags&=-16777217):(n.memoizedProps!==c&&Ua(a),qe(a),a.flags&=-16777217),null;case 27:Yt(a),s=se.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ua(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return qe(a),null}n=Ae.current,gl(a)?Q_(a):(n=hv(h,c,s),a.stateNode=n,Ua(a))}return qe(a),null;case 5:if(Yt(a),s=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ua(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return qe(a),null}if(n=Ae.current,gl(a))Q_(a);else{switch(h=Eu(se.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[_n]=a,n[gn]=c;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;t:switch(Nn(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ua(a)}}return qe(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Ua(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=se.current,gl(a)){if(n=a.stateNode,s=a.memoizedProps,c=null,h=qn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[_n]=a,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||sv(n.nodeValue,s)),n||Zr(a)}else n=Eu(n).createTextNode(c),n[_n]=a,a.stateNode=n}return qe(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=gl(a),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[_n]=a}else vl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;qe(a),h=!1}else Wi!==null&&(md(Wi),Wi=null),h=!0;if(!h)return a.flags&256?(Ta(a),a):(Ta(a),null)}if(Ta(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var _=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(_=c.memoizedState.cachePool.pool),_!==h&&(c.flags|=2048)}return s!==n&&s&&(a.child.flags|=8192),hu(a,a.updateQueue),qe(a),null;case 4:return ce(),n===null&&Ad(a.stateNode.containerInfo),qe(a),null;case 10:return Ca(a.type),qe(a),null;case 19:if(te(yn),h=a.memoizedState,h===null)return qe(a),null;if(c=(a.flags&128)!==0,_=h.rendering,_===null)if(c)Bl(h,!1);else{if($e!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(_=Zc(n),_!==null){for(a.flags|=128,Bl(h,!1),n=_.updateQueue,a.updateQueue=n,hu(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)N0(s,n),s=s.sibling;return zt(yn,yn.current&1|2),a.child}n=n.sibling}h.tail!==null&&pt()>du&&(a.flags|=128,c=!0,Bl(h,!1),a.lanes=4194304)}else{if(!c)if(n=Zc(_),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,hu(a,n),Bl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!Ue)return qe(a),null}else 2*pt()-h.renderingStartTime>du&&s!==536870912&&(a.flags|=128,c=!0,Bl(h,!1),a.lanes=4194304);h.isBackwards?(_.sibling=a.child,a.child=_):(n=h.last,n!==null?n.sibling=_:a.child=_,h.last=_)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=pt(),a.sibling=null,n=yn.current,zt(yn,c?n&1|2:n&1),a):(qe(a),null);case 22:case 23:return Ta(a),ph(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(qe(a),a.subtreeFlags&6&&(a.flags|=8192)):qe(a),s=a.updateQueue,s!==null&&hu(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),n!==null&&te(Qr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Ca(Sn),qe(a),null;case 25:return null}throw Error(i(156,a.tag))}function KM(n,a){switch(uh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ca(Sn),ce(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Yt(a),null;case 13:if(Ta(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));vl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return te(yn),null;case 4:return ce(),null;case 10:return Ca(a.type),null;case 22:case 23:return Ta(a),ph(),n!==null&&te(Qr),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ca(Sn),null;case 25:return null;default:return null}}function I0(n,a){switch(uh(a),a.tag){case 3:Ca(Sn),ce();break;case 26:case 27:case 5:Yt(a);break;case 4:ce();break;case 13:Ta(a);break;case 19:te(yn);break;case 10:Ca(a.type);break;case 22:case 23:Ta(a),ph(),n!==null&&te(Qr);break;case 24:Ca(Sn)}}var QM={getCacheForType:function(n){var a=Bn(Sn),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s}},JM=typeof WeakMap=="function"?WeakMap:Map,je=0,Ge=null,ye=null,Ce=0,ke=0,gi=null,Oa=!1,so=!1,ld=!1,Na=0,$e=0,pr=0,ss=0,cd=0,Ii=0,oo=0,Fl=null,oa=null,ud=!1,fd=0,du=1/0,pu=null,mr=null,mu=!1,os=null,Hl=0,hd=0,dd=null,Vl=0,pd=null;function vi(){if((je&2)!==0&&Ce!==0)return Ce&-Ce;if(b.T!==null){var n=Js;return n!==0?n:Md()}return sl()}function B0(){Ii===0&&(Ii=(Ce&536870912)===0||Ue?Xe():536870912);var n=Oi.current;return n!==null&&(n.flags|=32),Ii}function jn(n,a,s){(n===Ge&&ke===2||n.cancelPendingCommit!==null)&&(lo(n,0),Pa(n,Ce,Ii,!1)),ln(n,s),((je&2)===0||n!==Ge)&&(n===Ge&&((je&2)===0&&(ss|=s),$e===4&&Pa(n,Ce,Ii,!1)),la(n))}function F0(n,a,s){if((je&6)!==0)throw Error(i(327));var c=!s&&(a&60)===0&&(a&n.expiredLanes)===0||Zt(n,a),h=c?eE(n,a):vd(n,a,!0),_=c;do{if(h===0){so&&!c&&Pa(n,a,0,!1);break}else if(h===6)Pa(n,a,0,!Oa);else{if(s=n.current.alternate,_&&!$M(s)){h=vd(n,a,!1),_=!1;continue}if(h===2){if(_=a,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;t:{var w=n;h=Fl;var F=w.current.memoizedState.isDehydrated;if(F&&(lo(w,T).flags|=256),T=vd(w,T,!1),T!==2){if(ld&&!F){w.errorRecoveryDisabledLanes|=_,ss|=_,h=4;break t}_=oa,oa=h,_!==null&&md(_)}h=T}if(_=!1,h!==2)continue}}if(h===1){lo(n,0),Pa(n,a,0,!0);break}t:{switch(c=n,h){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Pa(c,a,Ii,!Oa);break t}break;case 2:oa=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=s,c.finishedLanes=a,(a&62914560)===a&&(_=fd+300-pt(),10<_)){if(Pa(c,a,Ii,!Oa),Ot(c,0)!==0)break t;c.timeoutHandle=cv(H0.bind(null,c,s,oa,pu,ud,a,Ii,ss,oo,Oa,2,-0,0),_);break t}H0(c,s,oa,pu,ud,a,Ii,ss,oo,Oa,0,-0,0)}}break}while(!0);la(n)}function md(n){oa===null?oa=n:oa.push.apply(oa,n)}function H0(n,a,s,c,h,_,T,w,F,j,mt,St,ot){var ht=a.subtreeFlags;if((ht&8192||(ht&16785408)===16785408)&&(ql={stylesheets:null,count:0,unsuspend:NE},D0(a),a=zE(),a!==null)){n.cancelPendingCommit=a(q0.bind(null,n,s,c,h,T,w,F,1,St,ot)),Pa(n,_,T,!j);return}q0(n,s,c,h,T,w,F,mt,St,ot)}function $M(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],_=h.getSnapshot;h=h.value;try{if(!pi(_(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Pa(n,a,s,c){a&=~cd,a&=~ss,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var h=a;0<h;){var _=31-ft(h),T=1<<_;c[_]=-1,h&=~T}s!==0&&rl(n,s,a)}function _u(){return(je&6)===0?(Gl(0),!1):!0}function _d(){if(ye!==null){if(ke===0)var n=ye.return;else n=ye,Ra=ns=null,Mh(n),Ks=null,Ml=0,n=ye;for(;n!==null;)I0(n.alternate,n),n=n.return;ye=null}}function lo(n,a){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,vE(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),_d(),Ge=n,ye=s=dr(n.current,null),Ce=a,ke=0,gi=null,Oa=!1,so=Zt(n,a),ld=!1,oo=Ii=cd=ss=pr=$e=0,oa=Fl=null,ud=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var h=31-ft(c),_=1<<h;a|=n[h],c&=~_}return Na=a,Hc(),s}function V0(n,a){me=null,b.H=sa,a===Sl?(a=ng(),ke=3):a===$_?(a=ng(),ke=4):ke=a===t0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,gi=a,ye===null&&($e=1,su(n,Di(a,n.current)))}function G0(){var n=b.H;return b.H=sa,n===null?sa:n}function k0(){var n=b.A;return b.A=QM,n}function gd(){$e=4,Oa||(Ce&4194176)!==Ce&&Oi.current!==null||(so=!0),(pr&134217727)===0&&(ss&134217727)===0||Ge===null||Pa(Ge,Ce,Ii,!1)}function vd(n,a,s){var c=je;je|=2;var h=G0(),_=k0();(Ge!==n||Ce!==a)&&(pu=null,lo(n,a)),a=!1;var T=$e;t:do try{if(ke!==0&&ye!==null){var w=ye,F=gi;switch(ke){case 8:_d(),T=6;break t;case 3:case 2:case 6:Oi.current===null&&(a=!0);var j=ke;if(ke=0,gi=null,co(n,w,F,j),s&&so){T=0;break t}break;default:j=ke,ke=0,gi=null,co(n,w,F,j)}}tE(),T=$e;break}catch(mt){V0(n,mt)}while(!0);return a&&n.shellSuspendCounter++,Ra=ns=null,je=c,b.H=h,b.A=_,ye===null&&(Ge=null,Ce=0,Hc()),T}function tE(){for(;ye!==null;)X0(ye)}function eE(n,a){var s=je;je|=2;var c=G0(),h=k0();Ge!==n||Ce!==a?(pu=null,du=pt()+500,lo(n,a)):so=Zt(n,a);t:do try{if(ke!==0&&ye!==null){a=ye;var _=gi;e:switch(ke){case 1:ke=0,gi=null,co(n,a,_,1);break;case 2:if(tg(_)){ke=0,gi=null,W0(a);break}a=function(){ke===2&&Ge===n&&(ke=7),la(n)},_.then(a,a);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:tg(_)?(ke=0,gi=null,W0(a)):(ke=0,gi=null,co(n,a,_,7));break;case 5:var T=null;switch(ye.tag){case 26:T=ye.memoizedState;case 5:case 27:var w=ye;if(!T||Sv(T)){ke=0,gi=null;var F=w.sibling;if(F!==null)ye=F;else{var j=w.return;j!==null?(ye=j,gu(j)):ye=null}break e}}ke=0,gi=null,co(n,a,_,5);break;case 6:ke=0,gi=null,co(n,a,_,6);break;case 8:_d(),$e=6;break t;default:throw Error(i(462))}}nE();break}catch(mt){V0(n,mt)}while(!0);return Ra=ns=null,b.H=c,b.A=h,je=s,ye!==null?0:(Ge=null,Ce=0,Hc(),$e)}function nE(){for(;ye!==null&&!C();)X0(ye)}function X0(n){var a=h0(n.alternate,n,Na);n.memoizedProps=n.pendingProps,a===null?gu(n):ye=a}function W0(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=s0(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=s0(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:Mh(a);default:I0(s,a),a=ye=N0(a,Na),a=h0(s,a,Na)}n.memoizedProps=n.pendingProps,a===null?gu(n):ye=a}function co(n,a,s,c){Ra=ns=null,Mh(a),Ks=null,Ml=0;var h=a.return;try{if(XM(n,h,a,s,Ce)){$e=1,su(n,Di(s,n.current)),ye=null;return}}catch(_){if(h!==null)throw ye=h,_;$e=1,su(n,Di(s,n.current)),ye=null;return}a.flags&32768?(Ue||c===1?n=!0:so||(Ce&536870912)!==0?n=!1:(Oa=n=!0,(c===2||c===3||c===6)&&(c=Oi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Y0(a,n)):gu(a)}function gu(n){var a=n;do{if((a.flags&32768)!==0){Y0(a,Oa);return}n=a.return;var s=ZM(a.alternate,a,Na);if(s!==null){ye=s;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=n}while(a!==null);$e===0&&($e=5)}function Y0(n,a){do{var s=KM(n.alternate,n);if(s!==null){s.flags&=32767,ye=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){ye=n;return}ye=n=s}while(n!==null);$e=6,ye=null}function q0(n,a,s,c,h,_,T,w,F,j){var mt=b.T,St=q.p;try{q.p=2,b.T=null,iE(n,a,s,c,St,h,_,T,w,F,j)}finally{b.T=mt,q.p=St}}function iE(n,a,s,c,h,_,T,w){do uo();while(os!==null);if((je&6)!==0)throw Error(i(327));var F=n.finishedWork;if(c=n.finishedLanes,F===null)return null;if(n.finishedWork=null,n.finishedLanes=0,F===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var j=F.lanes|F.childLanes;if(j|=oh,Dc(n,c,j,_,T,w),n===Ge&&(ye=Ge=null,Ce=0),(F.subtreeFlags&10256)===0&&(F.flags&10256)===0||mu||(mu=!0,hd=j,dd=s,oE(Dt,function(){return uo(),null})),s=(F.flags&15990)!==0,(F.subtreeFlags&15990)!==0||s?(s=b.T,b.T=null,_=q.p,q.p=2,T=je,je|=4,YM(n,F),R0(F,n),RM(Dd,n.containerInfo),wu=!!wd,Dd=wd=null,n.current=F,E0(n,F.alternate,F),at(),je=T,q.p=_,b.T=s):n.current=F,mu?(mu=!1,os=n,Hl=c):j0(n,j),j=n.pendingLanes,j===0&&(mr=null),Ft(F.stateNode),la(n),a!==null)for(h=n.onRecoverableError,F=0;F<a.length;F++)j=a[F],h(j.value,{componentStack:j.stack});return(Hl&3)!==0&&uo(),j=n.pendingLanes,(c&4194218)!==0&&(j&42)!==0?n===pd?Vl++:(Vl=0,pd=n):Vl=0,Gl(0),null}function j0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Tl(a)))}function uo(){if(os!==null){var n=os,a=hd;hd=0;var s=Bs(Hl),c=b.T,h=q.p;try{if(q.p=32>s?32:s,b.T=null,os===null)var _=!1;else{s=dd,dd=null;var T=os,w=Hl;if(os=null,Hl=0,(je&6)!==0)throw Error(i(331));var F=je;if(je|=4,U0(T.current),w0(T,T.current,w,s),je=F,Gl(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Jt,T)}catch{}_=!0}return _}finally{q.p=h,b.T=c,j0(n,a)}}return!1}function Z0(n,a,s){a=Di(s,a),a=zh(n.stateNode,a,2),n=cr(n,a,2),n!==null&&(ln(n,2),la(n))}function He(n,a,s){if(n.tag===3)Z0(n,n,s);else for(;a!==null;){if(a.tag===3){Z0(a,n,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=Di(s,n),s=Jg(2),c=cr(a,s,2),c!==null&&($g(s,c,a,n),ln(c,2),la(c));break}}a=a.return}}function yd(n,a,s){var c=n.pingCache;if(c===null){c=n.pingCache=new JM;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(ld=!0,h.add(s),n=aE.bind(null,n,a,s),a.then(n,n))}function aE(n,a,s){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ge===n&&(Ce&s)===s&&($e===4||$e===3&&(Ce&62914560)===Ce&&300>pt()-fd?(je&2)===0&&lo(n,0):cd|=s,oo===Ce&&(oo=0)),la(n)}function K0(n,a){a===0&&(a=ge()),n=er(n,a),n!==null&&(ln(n,a),la(n))}function rE(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),K0(n,s)}function sE(n,a){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),K0(n,s)}function oE(n,a){return qt(n,a)}var vu=null,fo=null,Sd=!1,yu=!1,xd=!1,ls=0;function la(n){n!==fo&&n.next===null&&(fo===null?vu=fo=n:fo=fo.next=n),yu=!0,Sd||(Sd=!0,cE(lE))}function Gl(n,a){if(!xd&&yu){xd=!0;do for(var s=!1,c=vu;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var _=0;else{var T=c.suspendedLanes,w=c.pingedLanes;_=(1<<31-ft(42|n)+1)-1,_&=h&~(T&~w),_=_&201326677?_&201326677|1:_?_|2:0}_!==0&&(s=!0,$0(c,_))}else _=Ce,_=Ot(c,c===Ge?_:0),(_&3)===0||Zt(c,_)||(s=!0,$0(c,_));c=c.next}while(s);xd=!1}}function lE(){yu=Sd=!1;var n=0;ls!==0&&(gE()&&(n=ls),ls=0);for(var a=pt(),s=null,c=vu;c!==null;){var h=c.next,_=Q0(c,a);_===0?(c.next=null,s===null?vu=h:s.next=h,h===null&&(fo=s)):(s=c,(n!==0||(_&3)!==0)&&(yu=!0)),c=h}Gl(n)}function Q0(n,a){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-ft(_),w=1<<T,F=h[T];F===-1?((w&s)===0||(w&c)!==0)&&(h[T]=Re(w,a)):F<=a&&(n.expiredLanes|=w),_&=~w}if(a=Ge,s=Ce,s=Ot(n,n===a?s:0),c=n.callbackNode,s===0||n===a&&ke===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&I(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Zt(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(c!==null&&I(c),Bs(s)){case 2:case 8:s=Xt;break;case 32:s=Dt;break;case 268435456:s=_e;break;default:s=Dt}return c=J0.bind(null,n),s=qt(s,c),n.callbackPriority=a,n.callbackNode=s,a}return c!==null&&c!==null&&I(c),n.callbackPriority=2,n.callbackNode=null,2}function J0(n,a){var s=n.callbackNode;if(uo()&&n.callbackNode!==s)return null;var c=Ce;return c=Ot(n,n===Ge?c:0),c===0?null:(F0(n,c,a),Q0(n,pt()),n.callbackNode!=null&&n.callbackNode===s?J0.bind(null,n):null)}function $0(n,a){if(uo())return null;F0(n,a,!0)}function cE(n){yE(function(){(je&6)!==0?qt(gt,n):n()})}function Md(){return ls===0&&(ls=Xe()),ls}function tv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Oc(""+n)}function ev(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function uE(n,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var _=tv((h[gn]||null).action),T=c.submitter;T&&(a=(a=T[gn]||null)?tv(a.formAction):T.getAttribute("formAction"),a!==null&&(_=a,T=null));var w=new Ic("action","action",null,c,h);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ls!==0){var F=T?ev(h,T):new FormData(h);Lh(s,{pending:!0,data:F,method:h.method,action:_},null,F)}}else typeof _=="function"&&(w.preventDefault(),F=T?ev(h,T):new FormData(h),Lh(s,{pending:!0,data:F,method:h.method,action:_},_,F))},currentTarget:h}]})}}for(var Ed=0;Ed<q_.length;Ed++){var Td=q_[Ed],fE=Td.toLowerCase(),hE=Td[0].toUpperCase()+Td.slice(1);Xi(fE,"on"+hE)}Xi(G_,"onAnimationEnd"),Xi(k_,"onAnimationIteration"),Xi(X_,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(wM,"onTransitionRun"),Xi(DM,"onTransitionStart"),Xi(LM,"onTransitionCancel"),Xi(W_,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function nv(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;t:{var _=void 0;if(a)for(var T=c.length-1;0<=T;T--){var w=c[T],F=w.instance,j=w.currentTarget;if(w=w.listener,F!==_&&h.isPropagationStopped())break t;_=w,h.currentTarget=j;try{_(h)}catch(mt){ru(mt)}h.currentTarget=null,_=F}else for(T=0;T<c.length;T++){if(w=c[T],F=w.instance,j=w.currentTarget,w=w.listener,F!==_&&h.isPropagationStopped())break t;_=w,h.currentTarget=j;try{_(h)}catch(mt){ru(mt)}h.currentTarget=null,_=F}}}}function Te(n,a){var s=a[Fs];s===void 0&&(s=a[Fs]=new Set);var c=n+"__bubble";s.has(c)||(iv(a,n,2,!1),s.add(c))}function bd(n,a,s){var c=0;a&&(c|=4),iv(s,n,c,a)}var Su="_reactListening"+Math.random().toString(36).slice(2);function Ad(n){if(!n[Su]){n[Su]=!0,Q.forEach(function(s){s!=="selectionchange"&&(dE.has(s)||bd(s,!1,n),bd(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Su]||(a[Su]=!0,bd("selectionchange",!1,a))}}function iv(n,a,s,c){switch(Av(a)){case 2:var h=FE;break;case 8:h=HE;break;default:h=Fd}s=h.bind(null,a,s,n),h=void 0,!jf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(a,s,{capture:!0,passive:h}):n.addEventListener(a,s,!0):h!==void 0?n.addEventListener(a,s,{passive:h}):n.addEventListener(a,s,!1)}function Rd(n,a,s,c,h){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var w=c.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var F=T.tag;if((F===3||F===4)&&(F=T.stateNode.containerInfo,F===h||F.nodeType===8&&F.parentNode===h))return;T=T.return}for(;w!==null;){if(T=xa(w),T===null)return;if(F=T.tag,F===5||F===6||F===26||F===27){c=_=T;continue t}w=w.parentNode}}c=c.return}v_(function(){var j=_,mt=Yf(s),St=[];t:{var ot=Y_.get(n);if(ot!==void 0){var ht=Ic,jt=n;switch(n){case"keypress":if(Pc(s)===0)break t;case"keydown":case"keyup":ht=sM;break;case"focusin":jt="focus",ht=Jf;break;case"focusout":jt="blur",ht=Jf;break;case"beforeblur":case"afterblur":ht=Jf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=x_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=cM;break;case G_:case k_:case X_:ht=Qx;break;case W_:ht=fM;break;case"scroll":case"scrollend":ht=Yx;break;case"wheel":ht=dM;break;case"copy":case"cut":case"paste":ht=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=E_;break;case"toggle":case"beforetoggle":ht=mM}var le=(a&4)!==0,tn=!le&&(n==="scroll"||n==="scrollend"),J=le?ot!==null?ot+"Capture":null:ot;le=[];for(var Y=j,et;Y!==null;){var vt=Y;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||J===null||(vt=ll(Y,J),vt!=null&&le.push(Xl(Y,vt,et))),tn)break;Y=Y.return}0<le.length&&(ot=new ht(ot,jt,null,s,mt),St.push({event:ot,listeners:le}))}}if((a&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",ht=n==="mouseout"||n==="pointerout",ot&&s!==Wf&&(jt=s.relatedTarget||s.fromElement)&&(xa(jt)||jt[Sa]))break t;if((ht||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ht?(jt=s.relatedTarget||s.toElement,ht=j,jt=jt?xa(jt):null,jt!==null&&(tn=W(jt),le=jt.tag,jt!==tn||le!==5&&le!==27&&le!==6)&&(jt=null)):(ht=null,jt=j),ht!==jt)){if(le=x_,vt="onMouseLeave",J="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(le=E_,vt="onPointerLeave",J="onPointerEnter",Y="pointer"),tn=ht==null?ot:Z(ht),et=jt==null?ot:Z(jt),ot=new le(vt,Y+"leave",ht,s,mt),ot.target=tn,ot.relatedTarget=et,vt=null,xa(mt)===j&&(le=new le(J,Y+"enter",jt,s,mt),le.target=et,le.relatedTarget=tn,vt=le),tn=vt,ht&&jt)e:{for(le=ht,J=jt,Y=0,et=le;et;et=ho(et))Y++;for(et=0,vt=J;vt;vt=ho(vt))et++;for(;0<Y-et;)le=ho(le),Y--;for(;0<et-Y;)J=ho(J),et--;for(;Y--;){if(le===J||J!==null&&le===J.alternate)break e;le=ho(le),J=ho(J)}le=null}else le=null;ht!==null&&av(St,ot,ht,le,!1),jt!==null&&tn!==null&&av(St,tn,jt,le,!0)}}t:{if(ot=j?Z(j):window,ht=ot.nodeName&&ot.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ot.type==="file")var kt=L_;else if(w_(ot))if(U_)kt=bM;else{kt=EM;var ve=MM}else ht=ot.nodeName,!ht||ht.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?j&&Xf(j.elementType)&&(kt=L_):kt=TM;if(kt&&(kt=kt(n,j))){D_(St,kt,s,mt);break t}ve&&ve(n,ot,j),n==="focusout"&&j&&ot.type==="number"&&j.memoizedProps.value!=null&&In(ot,"number",ot.value)}switch(ve=j?Z(j):window,n){case"focusin":(w_(ve)||ve.contentEditable==="true")&&(Xs=ve,ah=j,_l=null);break;case"focusout":_l=ah=Xs=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,H_(St,s,mt);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":H_(St,s,mt)}var Qt;if(th)t:{switch(n){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else ks?R_(n,s)&&(ie="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(T_&&s.locale!=="ko"&&(ks||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ks&&(Qt=y_()):(tr=mt,Zf="value"in tr?tr.value:tr.textContent,ks=!0)),ve=xu(j,ie),0<ve.length&&(ie=new M_(ie,n,null,s,mt),St.push({event:ie,listeners:ve}),Qt?ie.data=Qt:(Qt=C_(s),Qt!==null&&(ie.data=Qt)))),(Qt=gM?vM(n,s):yM(n,s))&&(ie=xu(j,"onBeforeInput"),0<ie.length&&(ve=new M_("onBeforeInput","beforeinput",null,s,mt),St.push({event:ve,listeners:ie}),ve.data=Qt)),uE(St,n,j,s,mt)}nv(St,a)})}function Xl(n,a,s){return{instance:n,listener:a,currentTarget:s}}function xu(n,a){for(var s=a+"Capture",c=[];n!==null;){var h=n,_=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=ll(n,s),h!=null&&c.unshift(Xl(n,h,_)),h=ll(n,a),h!=null&&c.push(Xl(n,h,_))),n=n.return}return c}function ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function av(n,a,s,c,h){for(var _=a._reactName,T=[];s!==null&&s!==c;){var w=s,F=w.alternate,j=w.stateNode;if(w=w.tag,F!==null&&F===c)break;w!==5&&w!==26&&w!==27||j===null||(F=j,h?(j=ll(s,_),j!=null&&T.unshift(Xl(s,j,F))):h||(j=ll(s,_),j!=null&&T.push(Xl(s,j,F)))),s=s.return}T.length!==0&&n.push({event:a,listeners:T})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function rv(n){return(typeof n=="string"?n:""+n).replace(pE,`
`).replace(mE,"")}function sv(n,a){return a=rv(a),rv(n)===a}function Mu(){}function Be(n,a,s,c,h,_){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ti(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ti(n,""+c);break;case"className":We(n,"class",c);break;case"tabIndex":We(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":We(n,s,c);break;case"style":__(n,c,_);break;case"data":if(a!=="object"){We(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Oc(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(s==="formAction"?(a!=="input"&&Be(n,a,"name",h.name,h,null),Be(n,a,"formEncType",h.formEncType,h,null),Be(n,a,"formMethod",h.formMethod,h,null),Be(n,a,"formTarget",h.formTarget,h,null)):(Be(n,a,"encType",h.encType,h,null),Be(n,a,"method",h.method,h,null),Be(n,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Oc(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=Mu);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Oc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Te("beforetoggle",n),Te("toggle",n),Me(n,"popover",c);break;case"xlinkActuate":Le(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Me(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Xx.get(s)||s,Me(n,s,c))}}function Cd(n,a,s,c,h,_){switch(s){case"style":__(n,c,_);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof c=="string"?ti(n,c):(typeof c=="number"||typeof c=="bigint")&&ti(n,""+c);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),_=n[gn]||null,_=_!=null?_[s]:null,typeof _=="function"&&n.removeEventListener(a,_,h),typeof c=="function")){typeof _!="function"&&_!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,c,h);break t}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Me(n,s,c)}}}function Nn(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",n),Te("load",n);var c=!1,h=!1,_;for(_ in s)if(s.hasOwnProperty(_)){var T=s[_];if(T!=null)switch(_){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Be(n,a,_,T,s,null)}}h&&Be(n,a,"srcSet",s.srcSet,s,null),c&&Be(n,a,"src",s.src,s,null);return;case"input":Te("invalid",n);var w=_=T=h=null,F=null,j=null;for(c in s)if(s.hasOwnProperty(c)){var mt=s[c];if(mt!=null)switch(c){case"name":h=mt;break;case"type":T=mt;break;case"checked":F=mt;break;case"defaultChecked":j=mt;break;case"value":_=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(i(137,a));break;default:Be(n,a,c,mt,s,null)}}Yn(n,_,w,F,j,T,h,!1),Ee(n);return;case"select":Te("invalid",n),c=T=_=null;for(h in s)if(s.hasOwnProperty(h)&&(w=s[h],w!=null))switch(h){case"value":_=w;break;case"defaultValue":T=w;break;case"multiple":c=w;default:Be(n,a,h,w,s,null)}a=_,s=T,n.multiple=!!c,a!=null?Qe(n,!!c,a,!1):s!=null&&Qe(n,!!c,s,!0);return;case"textarea":Te("invalid",n),_=h=c=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":c=w;break;case"defaultValue":h=w;break;case"children":_=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:Be(n,a,T,w,s,null)}Hs(n,c,h,_),Ee(n);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(n,a,F,c,s,null)}return;case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":Te("load",n);break;case"video":case"audio":for(c=0;c<kl.length;c++)Te(kl[c],n);break;case"image":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"embed":case"source":case"link":Te("error",n),Te("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in s)if(s.hasOwnProperty(j)&&(c=s[j],c!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Be(n,a,j,c,s,null)}return;default:if(Xf(a)){for(mt in s)s.hasOwnProperty(mt)&&(c=s[mt],c!==void 0&&Cd(n,a,mt,c,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(c=s[w],c!=null&&Be(n,a,w,c,s,null))}function _E(n,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,w=null,F=null,j=null,mt=null;for(ht in s){var St=s[ht];if(s.hasOwnProperty(ht)&&St!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":F=St;default:c.hasOwnProperty(ht)||Be(n,a,ht,null,c,St)}}for(var ot in c){var ht=c[ot];if(St=s[ot],c.hasOwnProperty(ot)&&(ht!=null||St!=null))switch(ot){case"type":_=ht;break;case"name":h=ht;break;case"checked":j=ht;break;case"defaultChecked":mt=ht;break;case"value":T=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(i(137,a));break;default:ht!==St&&Be(n,a,ot,ht,c,St)}}ze(n,T,w,F,j,mt,_,h);return;case"select":ht=T=w=ot=null;for(_ in s)if(F=s[_],s.hasOwnProperty(_)&&F!=null)switch(_){case"value":break;case"multiple":ht=F;default:c.hasOwnProperty(_)||Be(n,a,_,null,c,F)}for(h in c)if(_=c[h],F=s[h],c.hasOwnProperty(h)&&(_!=null||F!=null))switch(h){case"value":ot=_;break;case"defaultValue":w=_;break;case"multiple":T=_;default:_!==F&&Be(n,a,h,_,c,F)}a=w,s=T,c=ht,ot!=null?Qe(n,!!s,ot,!1):!!c!=!!s&&(a!=null?Qe(n,!!s,a,!0):Qe(n,!!s,s?[]:"",!1));return;case"textarea":ht=ot=null;for(w in s)if(h=s[w],s.hasOwnProperty(w)&&h!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Be(n,a,w,null,c,h)}for(T in c)if(h=c[T],_=s[T],c.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":ot=h;break;case"defaultValue":ht=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==_&&Be(n,a,T,h,c,_)}Ln(n,ot,ht);return;case"option":for(var jt in s)if(ot=s[jt],s.hasOwnProperty(jt)&&ot!=null&&!c.hasOwnProperty(jt))switch(jt){case"selected":n.selected=!1;break;default:Be(n,a,jt,null,c,ot)}for(F in c)if(ot=c[F],ht=s[F],c.hasOwnProperty(F)&&ot!==ht&&(ot!=null||ht!=null))switch(F){case"selected":n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Be(n,a,F,ot,c,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)ot=s[le],s.hasOwnProperty(le)&&ot!=null&&!c.hasOwnProperty(le)&&Be(n,a,le,null,c,ot);for(j in c)if(ot=c[j],ht=s[j],c.hasOwnProperty(j)&&ot!==ht&&(ot!=null||ht!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:Be(n,a,j,ot,c,ht)}return;default:if(Xf(a)){for(var tn in s)ot=s[tn],s.hasOwnProperty(tn)&&ot!==void 0&&!c.hasOwnProperty(tn)&&Cd(n,a,tn,void 0,c,ot);for(mt in c)ot=c[mt],ht=s[mt],!c.hasOwnProperty(mt)||ot===ht||ot===void 0&&ht===void 0||Cd(n,a,mt,ot,c,ht);return}}for(var J in s)ot=s[J],s.hasOwnProperty(J)&&ot!=null&&!c.hasOwnProperty(J)&&Be(n,a,J,null,c,ot);for(St in c)ot=c[St],ht=s[St],!c.hasOwnProperty(St)||ot===ht||ot==null&&ht==null||Be(n,a,St,ot,c,ht)}var wd=null,Dd=null;function Eu(n){return n.nodeType===9?n:n.ownerDocument}function ov(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Ld(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ud=null;function gE(){var n=window.event;return n&&n.type==="popstate"?n===Ud?!1:(Ud=n,!0):(Ud=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,yE=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(n){return uv.resolve(null).then(n).catch(SE)}:cv;function SE(n){setTimeout(function(){throw n})}function Od(n,a){var s=a,c=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(c===0){n.removeChild(h),Jl(a);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=h}while(s);Jl(a)}function Nd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Nd(s),ol(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function xE(n,a,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[kr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==h.rel||n.getAttribute("href")!==(h.href==null?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=qi(n.nextSibling),n===null)break}return null}function ME(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=qi(n.nextSibling),n===null))return null;return n}function qi(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function fv(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return n;a--}else s==="/$"&&a++}n=n.previousSibling}return null}function hv(n,a,s){switch(a=Eu(s),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var Bi=new Map,dv=new Set;function Tu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var za=q.d;q.d={f:EE,r:TE,D:bE,C:AE,L:RE,m:CE,X:DE,S:wE,M:LE};function EE(){var n=za.f(),a=_u();return n||a}function TE(n){var a=D(n);a!==null&&a.tag===5&&a.type==="form"?Hg(a):za.r(n)}var po=typeof document>"u"?null:document;function pv(n,a,s){var c=po;if(c&&typeof a=="string"&&a){var h=Tn(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),dv.has(h)||(dv.add(h),n={rel:n,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),Nn(a,"link",n),tt(a),c.head.appendChild(a)))}}function bE(n){za.D(n),pv("dns-prefetch",n,null)}function AE(n,a){za.C(n,a),pv("preconnect",n,a)}function RE(n,a,s){za.L(n,a,s);var c=po;if(c&&n&&a){var h='link[rel="preload"][as="'+Tn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Tn(s.imageSizes)+'"]')):h+='[href="'+Tn(n)+'"]';var _=h;switch(a){case"style":_=mo(n);break;case"script":_=_o(n)}Bi.has(_)||(n=A({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),Bi.set(_,n),c.querySelector(h)!==null||a==="style"&&c.querySelector(Wl(_))||a==="script"&&c.querySelector(Yl(_))||(a=c.createElement("link"),Nn(a,"link",n),tt(a),c.head.appendChild(a)))}}function CE(n,a){za.m(n,a);var s=po;if(s&&n){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Tn(c)+'"][href="'+Tn(n)+'"]',_=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=_o(n)}if(!Bi.has(_)&&(n=A({rel:"modulepreload",href:n},a),Bi.set(_,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Yl(_)))return}c=s.createElement("link"),Nn(c,"link",n),tt(c),s.head.appendChild(c)}}}function wE(n,a,s){za.S(n,a,s);var c=po;if(c&&n){var h=rt(c).hoistableStyles,_=mo(n);a=a||"default";var T=h.get(_);if(!T){var w={loading:0,preload:null};if(T=c.querySelector(Wl(_)))w.loading=5;else{n=A({rel:"stylesheet",href:n,"data-precedence":a},s),(s=Bi.get(_))&&Pd(n,s);var F=T=c.createElement("link");tt(F),Nn(F,"link",n),F._p=new Promise(function(j,mt){F.onload=j,F.onerror=mt}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,bu(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:w},h.set(_,T)}}}function DE(n,a){za.X(n,a);var s=po;if(s&&n){var c=rt(s).hoistableScripts,h=_o(n),_=c.get(h);_||(_=s.querySelector(Yl(h)),_||(n=A({src:n,async:!0},a),(a=Bi.get(h))&&zd(n,a),_=s.createElement("script"),tt(_),Nn(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(h,_))}}function LE(n,a){za.M(n,a);var s=po;if(s&&n){var c=rt(s).hoistableScripts,h=_o(n),_=c.get(h);_||(_=s.querySelector(Yl(h)),_||(n=A({src:n,async:!0,type:"module"},a),(a=Bi.get(h))&&zd(n,a),_=s.createElement("script"),tt(_),Nn(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(h,_))}}function mv(n,a,s,c){var h=(h=se.current)?Tu(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=mo(s.href),s=rt(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=mo(s.href);var _=rt(h).hoistableStyles,T=_.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=h.querySelector(Wl(n)))&&!_._p&&(T.instance=_,T.state.loading=5),Bi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bi.set(n,s),_||UE(h,n,s,T.state))),a&&c===null)throw Error(i(528,""));return T}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=_o(s),s=rt(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function mo(n){return'href="'+Tn(n)+'"'}function Wl(n){return'link[rel="stylesheet"]['+n+"]"}function _v(n){return A({},n,{"data-precedence":n.precedence,precedence:null})}function UE(n,a,s,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Nn(a,"link",s),tt(a),n.head.appendChild(a))}function _o(n){return'[src="'+Tn(n)+'"]'}function Yl(n){return"script[async]"+n}function gv(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+Tn(s.href)+'"]');if(c)return a.instance=c,tt(c),c;var h=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),tt(c),Nn(c,"style",h),bu(c,s.precedence,n),a.instance=c;case"stylesheet":h=mo(s.href);var _=n.querySelector(Wl(h));if(_)return a.state.loading|=4,a.instance=_,tt(_),_;c=_v(s),(h=Bi.get(h))&&Pd(c,h),_=(n.ownerDocument||n).createElement("link"),tt(_);var T=_;return T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Nn(_,"link",c),a.state.loading|=4,bu(_,s.precedence,n),a.instance=_;case"script":return _=_o(s.src),(h=n.querySelector(Yl(_)))?(a.instance=h,tt(h),h):(c=s,(h=Bi.get(_))&&(c=A({},s),zd(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),tt(h),Nn(h,"link",c),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,bu(c,s.precedence,n));return a.instance}function bu(n,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,_=h,T=0;T<c.length;T++){var w=c[T];if(w.dataset.precedence===a)_=w;else if(_!==h)break}_?_.parentNode.insertBefore(n,_.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function Pd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function zd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Au=null;function vv(n,a,s){if(Au===null){var c=new Map,h=Au=new Map;h.set(s,c)}else h=Au,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var _=s[h];if(!(_[kr]||_[_n]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(a)||"";T=n+T;var w=c.get(T);w?w.push(_):c.set(T,[_])}}return c}function yv(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function OE(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Sv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ql=null;function NE(){}function PE(n,a,s){if(ql===null)throw Error(i(475));var c=ql;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=mo(s.href),_=n.querySelector(Wl(h));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Ru.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=_,tt(_);return}_=n.ownerDocument||n,s=_v(s),(h=Bi.get(h))&&Pd(s,h),_=_.createElement("link"),tt(_);var T=_;T._p=new Promise(function(w,F){T.onload=w,T.onerror=F}),Nn(_,"link",s),a.instance=_}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Ru.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function zE(){if(ql===null)throw Error(i(475));var n=ql;return n.stylesheets&&n.count===0&&Id(n,n.stylesheets),0<n.count?function(a){var s=setTimeout(function(){if(n.stylesheets&&Id(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Ru(){if(this.count--,this.count===0){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Cu=null;function Id(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Cu=new Map,a.forEach(IE,n),Cu=null,Ru.call(n))}function IE(n,a){if(!(a.state.loading&4)){var s=Cu.get(n);if(s)var c=s.get(null);else{s=new Map,Cu.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),c=T)}c&&s.set(null,c)}h=a.instance,T=h.getAttribute("data-precedence"),_=s.get(T)||c,_===c&&s.set(null,h),s.set(T,h),this.count++,c=Ru.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),_?_.parentNode.insertBefore(h,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var jl={$$typeof:S,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function BE(n,a,s,c,h,_,T,w){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=an(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.hiddenUpdates=an(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function xv(n,a,s,c,h,_,T,w,F,j,mt,St){return n=new BE(n,a,s,T,w,F,j,St),a=1,_===!0&&(a|=24),_=zi(3,null,null,a),n.current=_,_.stateNode=n,a=mh(),a.refCount++,n.pooledCache=a,a.refCount++,_.memoizedState={element:c,isDehydrated:s,cache:a},Zh(_),n}function Mv(n){return n?(n=qs,n):qs}function Ev(n,a,s,c,h,_){h=Mv(h),c.context===null?c.context=h:c.pendingContext=h,c=lr(a),c.payload={element:s},_=_===void 0?null:_,_!==null&&(c.callback=_),s=cr(n,c,a),s!==null&&(jn(s,n,a),Ll(s,n,a))}function Tv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function Bd(n,a){Tv(n,a),(n=n.alternate)&&Tv(n,a)}function bv(n){if(n.tag===13){var a=er(n,67108864);a!==null&&jn(a,n,67108864),Bd(n,67108864)}}var wu=!0;function FE(n,a,s,c){var h=b.T;b.T=null;var _=q.p;try{q.p=2,Fd(n,a,s,c)}finally{q.p=_,b.T=h}}function HE(n,a,s,c){var h=b.T;b.T=null;var _=q.p;try{q.p=8,Fd(n,a,s,c)}finally{q.p=_,b.T=h}}function Fd(n,a,s,c){if(wu){var h=Hd(c);if(h===null)Rd(n,a,c,Du,s),Rv(n,c);else if(GE(h,n,a,s,c))c.stopPropagation();else if(Rv(n,c),a&4&&-1<VE.indexOf(n)){for(;h!==null;){var _=D(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Ut(_.pendingLanes);if(T!==0){var w=_;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var F=1<<31-ft(T);w.entanglements[1]|=F,T&=~F}la(_),(je&6)===0&&(du=pt()+500,Gl(0))}}break;case 13:w=er(_,2),w!==null&&jn(w,_,2),_u(),Bd(_,2)}if(_=Hd(c),_===null&&Rd(n,a,c,Du,s),_===h)break;h=_}h!==null&&c.stopPropagation()}else Rd(n,a,c,null,s)}}function Hd(n){return n=Yf(n),Vd(n)}var Du=null;function Vd(n){if(Du=null,n=xa(n),n!==null){var a=W(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=yt(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Du=n,null}function Av(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case Xt:return 8;case Dt:case Ht:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Gd=!1,_r=null,gr=null,vr=null,Zl=new Map,Kl=new Map,yr=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rv(n,a){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Zl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(a.pointerId)}}function Ql(n,a,s,c,h,_){return n===null||n.nativeEvent!==_?(n={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:_,targetContainers:[h]},a!==null&&(a=D(a),a!==null&&bv(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function GE(n,a,s,c,h){switch(a){case"focusin":return _r=Ql(_r,n,a,s,c,h),!0;case"dragenter":return gr=Ql(gr,n,a,s,c,h),!0;case"mouseover":return vr=Ql(vr,n,a,s,c,h),!0;case"pointerover":var _=h.pointerId;return Zl.set(_,Ql(Zl.get(_)||null,n,a,s,c,h)),!0;case"gotpointercapture":return _=h.pointerId,Kl.set(_,Ql(Kl.get(_)||null,n,a,s,c,h)),!0}return!1}function Cv(n){var a=xa(n.target);if(a!==null){var s=W(a);if(s!==null){if(a=s.tag,a===13){if(a=yt(s),a!==null){n.blockedOn=a,Lc(n.priority,function(){if(s.tag===13){var c=vi(),h=er(s,c);h!==null&&jn(h,s,c),Bd(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lu(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=Hd(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Wf=c,s.target.dispatchEvent(c),Wf=null}else return a=D(s),a!==null&&bv(a),n.blockedOn=s,!1;a.shift()}return!0}function wv(n,a,s){Lu(n)&&s.delete(a)}function kE(){Gd=!1,_r!==null&&Lu(_r)&&(_r=null),gr!==null&&Lu(gr)&&(gr=null),vr!==null&&Lu(vr)&&(vr=null),Zl.forEach(wv),Kl.forEach(wv)}function Uu(n,a){n.blockedOn===a&&(n.blockedOn=null,Gd||(Gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kE)))}var Ou=null;function Dv(n){Ou!==n&&(Ou=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ou===n&&(Ou=null);for(var a=0;a<n.length;a+=3){var s=n[a],c=n[a+1],h=n[a+2];if(typeof c!="function"){if(Vd(c||s)===null)continue;break}var _=D(s);_!==null&&(n.splice(a,3),a-=3,Lh(_,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Jl(n){function a(F){return Uu(F,n)}_r!==null&&Uu(_r,n),gr!==null&&Uu(gr,n),vr!==null&&Uu(vr,n),Zl.forEach(a),Kl.forEach(a);for(var s=0;s<yr.length;s++){var c=yr[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<yr.length&&(s=yr[0],s.blockedOn===null);)Cv(s),s.blockedOn===null&&yr.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],_=s[c+1],T=h[gn]||null;if(typeof _=="function")T||Dv(s);else if(T){var w=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[gn]||null)w=T.formAction;else if(Vd(h)!==null)continue}else w=T.action;typeof w=="function"?s[c+1]=w:(s.splice(c,3),c-=3),Dv(s)}}}function kd(n){this._internalRoot=n}Nu.prototype.render=kd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var s=a.current,c=vi();Ev(s,c,n,a,null,null)},Nu.prototype.unmount=kd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&uo(),Ev(n.current,2,null,n,null,null),_u(),a[Sa]=null}};function Nu(n){this._internalRoot=n}Nu.prototype.unstable_scheduleHydration=function(n){if(n){var a=sl();n={blockedOn:null,target:n,priority:a};for(var s=0;s<yr.length&&a!==0&&a<yr[s].priority;s++);yr.splice(s,0,n),s===0&&Cv(n)}};var Lv=t.version;if(Lv!=="19.0.0")throw Error(i(527,Lv,"19.0.0"));q.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=it(a),n=n!==null?Et(n):null,n=n===null?null:n.stateNode,n};var XE={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:xa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Jt=Pu.inject(XE),Wt=Pu}catch{}}return tc.createRoot=function(n,a){if(!r(n))throw Error(i(299));var s=!1,c="",h=jg,_=Zg,T=Kg,w=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks)),a=xv(n,1,!1,null,null,s,c,h,_,T,w,null),n[Sa]=a.current,Ad(n.nodeType===8?n.parentNode:n),new kd(a)},tc.hydrateRoot=function(n,a,s){if(!r(n))throw Error(i(299));var c=!1,h="",_=jg,T=Zg,w=Kg,F=null,j=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(_=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(F=s.unstable_transitionCallbacks),s.formState!==void 0&&(j=s.formState)),a=xv(n,1,!0,a,s??null,c,h,_,T,w,F,j),a.context=Mv(null),s=a.current,c=vi(),h=lr(c),h.callback=null,cr(s,h,c),a.current.lanes=c,ln(a,c),la(a),n[Sa]=a.current,Ad(n),new Nu(a)},tc.version="19.0.0",tc}var Vv;function aT(){if(Vv)return Yd.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yd.exports=iT(),Yd.exports}var rT=aT();class dS{constructor(){Gt(this,"id",0);Gt(this,"x",0);Gt(this,"y",0)}}class Gv{constructor(){Gt(this,"List");this.List={}}addVertex(t){this.List[t]=[]}addEdge(t,e){this.List[t].push(e),this.List[e].push(t)}addEdgeDirected(t,e){this.List[t].push(e)}removeEdge(t,e){this.List[t]=this.List[t].filter(i=>i!==e),e!==void 0&&(this.List[e]=this.List[e].filter(i=>i!==t))}removeVertex(t){for(;this.List[t].length;){const e=this.List[t].pop();this.removeEdge(t,e)}delete this.List[t]}}const wn={NodesInGridSize:20,NodeSpacing:30,ObstacleMargin:30},ma={ViewAngle:60,MaxViewDistance:1e3,CubeSize:10},Kd={CubeSize:10},wr={CircleSize:10,CircleSegments:100,DefaultColor:10526880,VisibleColor:16777215,SelectedColor:255,NextMoveColor:65280,ShotTargetColor:16711680},Qi={DefaultCount:3,MinWidth:60,MaxWidth:150,MinHeight:60,MaxHeight:150,WallThickness:20,RoomWallThickness:15,RoomDoorWidth:60,CorridorWallThickness:25,CorridorWidth:120,LineColor:65535},Kt={MazeHorizontalWalls:4,MazeVerticalWalls:4,MazeBaseOffset:100,MazeWallSpacing:150,MazeRandomOffsetStart:60,MazeRandomOffsetRange:100,MazeMinWallLength:200,MazeRandomWallLengthRange:150,RoomCount:3,RoomBaseOffset:60,RoomSpacingMultiplier:250,RoomWidth:180,RoomHeight:180,ScatteredMinCount:8,ScatteredRandomCountRange:5,ScatteredMinSize:40,ScatteredRandomSizeRange:80,ScatteredBaseOffset:60,ScatteredSpacingBuffer:120,SymmetricObstacleCount:4,SymmetricMinSize:60,SymmetricRandomSizeRange:60,SymmetricMinOffset:80,SymmetricRandomOffsetRange:120,SymmetricCentralMinSize:60,SymmetricCentralRandomSizeRange:40,CorridorsQuadrantObstacles:4,CorridorsQuadrantBasePosition:80,CorridorsQuadrantOppositeOffset:150,CorridorsQuadrantMinSize:60,CorridorsQuadrantRandomSizeRange:40},cs={MovementDuration:1,ShotPulseScale:1.3,ShotPulseDuration:.5,ShotPulseRepeatDelay:.02,ShotPulseEase:"elastic.out(1, 0.3)"},ec={FOV:90,InitialZPosition:10,MinDistance:2,MaxDistance:1e3,EnableRotate:!1},us={ShowViewAngleEdges:!1,EdgeColor:16776960,EdgeOpacity:.6,EdgeLineWidth:2},kv={get MapSize(){return(wn.NodesInGridSize-1)*wn.NodeSpacing}},Kn={PLAYER_1:"player1",PLAYER_2:"player2",ENEMY_1:"enemy1",ENEMY_2:"enemy2"},go={TOGGLE_VIEW_ANGLE:"v",TOGGLE_VIEW_ANGLE_UPPER:"V",SELECT_PLAYER_1:"1",SELECT_PLAYER_2:"2",SELECT_ENEMY_1:"3",SELECT_ENEMY_2:"4"},Xv={ACTIVE_SCALE:1.2,NORMAL_SCALE:1},Wv={ACTIVE_SCALE:1.2,NORMAL_SCALE:1};class cc{constructor(t,e,i,r){Gt(this,"start");Gt(this,"end");this.start={x:t,y:e},this.end={x:i,y:r}}intersects(t,e){function i(r,l,u){return(u.y-r.y)*(l.x-r.x)>(l.y-r.y)*(u.x-r.x)}return i(this.start,t,e)!=i(this.end,t,e)&&i(this.start,this.end,t)!=i(this.start,this.end,e)}}function Pn(o,t,e,i){return[new cc(o,t,o+e,t),new cc(o+e,t,o+e,t+i),new cc(o+e,t+i,o,t+i),new cc(o,t+i,o,t)]}function sT(o,t,e){for(const i of t)for(const r of o.List[i.id]){const l=t.find(u=>u.id===r);if(l){for(const u of e)if(u.intersects({x:i.x,y:i.y},{x:l.x,y:l.y})){o.removeEdge(i.id,l.id);break}}}}class xr{static generateRandomObstacles(t=Qi.DefaultCount,e=Qi.MinWidth,i=Qi.MaxWidth,r=Qi.MinHeight,l=Qi.MaxHeight){const u=[],f=[],d=kv.MapSize,p=wn.ObstacleMargin;for(let m=0;m<t;m++){const g=Math.floor(Math.random()*(i-e+1))+e,v=Math.floor(Math.random()*(l-r+1))+r,S=Math.floor(Math.random()*(d-g-p*2))+p,E=Math.floor(Math.random()*(d-v-p*2))+p,M=Pn(S,E,g,v);u.push({id:m+1,segments:M}),M.forEach(x=>{f.push(x)})}return{obstacles:u,lines:f}}static generateComplexMap(){const t=[],e=[],i=kv.MapSize;let r=1;const l=["maze","rooms","scattered","symmetric","corridors"],u=l[Math.floor(Math.random()*l.length)];switch(u){case"maze":this.generateMazePattern(r,i,t,e);break;case"rooms":this.generateRoomsPattern(r,i,t,e);break;case"scattered":this.generateScatteredPattern(r,i,t,e);break;case"symmetric":this.generateSymmetricPattern(r,i,t,e);break;case"corridors":this.generateCorridorsPattern(r,i,t,e);break}return{obstacles:t,lines:e,pattern:u}}static importObstacles(t){const e=[],i=[];for(const r of t){const l=[];for(const u of r.segments){const f=new cc(u.start.x,u.start.y,u.end.x,u.end.y);l.push(f),i.push(f)}e.push({id:r.id,segments:l})}return{obstacles:e,lines:i}}static applyObstaclesToGraph(t,e,i){sT(t,e,i)}static generateMazePattern(t,e,i,r){let l=t;const u=Qi.WallThickness;for(let f=0;f<Kt.MazeHorizontalWalls;f++){const d=Kt.MazeBaseOffset+f*Kt.MazeWallSpacing,p=Kt.MazeRandomOffsetStart+Math.random()*Kt.MazeRandomOffsetRange,m=Kt.MazeMinWallLength+Math.random()*Kt.MazeRandomWallLengthRange,g=Pn(p,d,m,u);i.push({id:l++,segments:g}),g.forEach(v=>r.push(v))}for(let f=0;f<Kt.MazeVerticalWalls;f++){const d=Kt.MazeBaseOffset+f*Kt.MazeWallSpacing,p=Kt.MazeRandomOffsetStart+Math.random()*Kt.MazeRandomOffsetRange,m=Kt.MazeMinWallLength+Math.random()*Kt.MazeRandomWallLengthRange,g=Pn(d,p,u,m);i.push({id:l++,segments:g}),g.forEach(v=>r.push(v))}}static generateRoomsPattern(t,e,i,r){let l=t;const u=Kt.RoomCount;for(let f=0;f<u;f++){const d=Kt.RoomBaseOffset+f%2*Kt.RoomSpacingMultiplier,p=Kt.RoomBaseOffset+Math.floor(f/2)*Kt.RoomSpacingMultiplier,m=Kt.RoomWidth,g=Kt.RoomHeight,v=Qi.RoomWallThickness,S=Qi.RoomDoorWidth,E=(m-S)/2,M=d+E+S,x=m-E-S,y={id:l++,segments:Pn(d,p,E,v)};i.push(y),r.push(...y.segments);const L={id:l++,segments:Pn(M,p,x,v)};i.push(L),r.push(...L.segments);const U={id:l++,segments:Pn(d+m-v,p,v,g)};i.push(U),r.push(...U.segments);const R={id:l++,segments:Pn(d,p+g-v,m,v)};i.push(R),r.push(...R.segments);const O=(g-S)/2,P=p+O+S,N=g-O-S,B={id:l++,segments:Pn(d,p,v,O)};i.push(B),r.push(...B.segments);const b={id:l++,segments:Pn(d,P,v,N)};i.push(b),r.push(...b.segments)}}static generateScatteredPattern(t,e,i,r){let l=t;const u=Kt.ScatteredMinCount+Math.floor(Math.random()*Kt.ScatteredRandomCountRange);for(let f=0;f<u;f++){const d=Kt.ScatteredMinSize+Math.random()*Kt.ScatteredRandomSizeRange,p=Kt.ScatteredMinSize+Math.random()*Kt.ScatteredRandomSizeRange,m=Kt.ScatteredBaseOffset+Math.random()*(e-d-Kt.ScatteredSpacingBuffer),g=Kt.ScatteredBaseOffset+Math.random()*(e-p-Kt.ScatteredSpacingBuffer),v=Pn(m,g,d,p);i.push({id:l++,segments:v}),v.forEach(S=>r.push(S))}}static generateSymmetricPattern(t,e,i,r){let l=t;const u=e/2,f=e/2,d=Kt.SymmetricObstacleCount;for(let g=0;g<d;g++){const v=Kt.SymmetricMinSize+Math.random()*Kt.SymmetricRandomSizeRange,S=Kt.SymmetricMinSize+Math.random()*Kt.SymmetricRandomSizeRange,E=Kt.SymmetricMinOffset+Math.random()*Kt.SymmetricRandomOffsetRange,M=Kt.SymmetricMinOffset+Math.random()*Kt.SymmetricRandomOffsetRange;[{x:u+E,y:f+M},{x:u-E-v,y:f+M},{x:u+E,y:f-M-S},{x:u-E-v,y:f-M-S}].forEach(y=>{if(y.x>=wn.ObstacleMargin&&y.y>=wn.ObstacleMargin&&y.x+v<=e-wn.ObstacleMargin&&y.y+S<=e-wn.ObstacleMargin){const L=Pn(y.x,y.y,v,S);i.push({id:l++,segments:L}),L.forEach(U=>r.push(U))}})}const p=Kt.SymmetricCentralMinSize+Math.random()*Kt.SymmetricCentralRandomSizeRange,m=Pn(u-p/2,f-p/2,p,p);i.push({id:l++,segments:m}),m.forEach(g=>r.push(g))}static generateCorridorsPattern(t,e,i,r){let l=t;const u=Qi.CorridorWallThickness,f=Qi.CorridorWidth,d=e/2,p=e/2,m=d-f/2,g=d+f/2,v={id:l++,segments:Pn(m-u,wn.ObstacleMargin,u,e-wn.ObstacleMargin*2)};i.push(v),r.push(...v.segments);const S={id:l++,segments:Pn(g,wn.ObstacleMargin,u,e-wn.ObstacleMargin*2)};i.push(S),r.push(...S.segments);const E=p-f/2,M=p+f/2,x={id:l++,segments:Pn(wn.ObstacleMargin,E-u,e-wn.ObstacleMargin*2,u)};i.push(x),r.push(...x.segments);const y={id:l++,segments:Pn(wn.ObstacleMargin,M,e-wn.ObstacleMargin*2,u)};i.push(y),r.push(...y.segments);const L=Kt.CorridorsQuadrantObstacles;for(let U=0;U<L;U++){const R=U%4;let O,P;switch(R){case 0:O=Kt.CorridorsQuadrantBasePosition,P=Kt.CorridorsQuadrantBasePosition;break;case 1:O=e-Kt.CorridorsQuadrantOppositeOffset,P=Kt.CorridorsQuadrantBasePosition;break;case 2:O=Kt.CorridorsQuadrantBasePosition,P=e-Kt.CorridorsQuadrantOppositeOffset;break;case 3:O=e-Kt.CorridorsQuadrantOppositeOffset,P=e-Kt.CorridorsQuadrantOppositeOffset;break;default:O=Kt.CorridorsQuadrantBasePosition,P=Kt.CorridorsQuadrantBasePosition}const N=Pn(O,P,Kt.CorridorsQuadrantMinSize+Math.random()*Kt.CorridorsQuadrantRandomSizeRange,Kt.CorridorsQuadrantMinSize+Math.random()*Kt.CorridorsQuadrantRandomSizeRange);i.push({id:l++,segments:N}),N.forEach(B=>r.push(B))}}}var Hm=(o=>(o.PLAYER="player",o.ENEMY="enemy",o))(Hm||{});class pS{constructor(t,e,i,r,l=0){Gt(this,"id");Gt(this,"type");Gt(this,"node");Gt(this,"color");Gt(this,"angle");this.id=t,this.type=e,this.node=new dS,this.node.id=i.id,this.node.x=i.x,this.node.y=i.y,this.color=r,this.angle=l}setNode(t){this.node.id=t.id,this.node.x=t.x,this.node.y=t.y}setAngle(t){this.angle=t}getPosition(){return{x:this.node.x,y:this.node.y}}isAtSamePositionAs(t){return this.node.id===t.node.id}}var uc=(o=>(o.Idle="Idle",o.Select="Select",o.Move="Move",o.Shot="Shot",o))(uc||{}),ca=(o=>(o.SelectPlayer="Select player",o.MovePlayer="Move player",o.ShotPlayer="Shot player",o.Complete="Complete",o.Cancel="Cancel",o))(ca||{});class oT{constructor(t="Idle",e=!1){Gt(this,"state");Gt(this,"states");Gt(this,"history",[]);Gt(this,"listeners",new Map);Gt(this,"debugMode",!1);this.state=t,this.debugMode=e,this.states=this.defineStates()}defineStates(){return new Map([["Idle",{onEnter:()=>this.emit("idle:enter"),onExit:()=>this.emit("idle:exit"),validTransitions:new Map([["Select player","Select"],["Cancel","Idle"]])}],["Select",{onEnter:()=>this.emit("select:enter"),onExit:()=>this.emit("select:exit"),validTransitions:new Map([["Move player","Move"],["Cancel","Idle"]])}],["Move",{onEnter:()=>this.emit("move:enter"),onExit:()=>this.emit("move:exit"),validTransitions:new Map([["Shot player","Shot"],["Cancel","Idle"]])}],["Shot",{onEnter:()=>this.emit("shot:enter"),onExit:()=>this.emit("shot:exit"),validTransitions:new Map([["Complete","Idle"],["Shot player","Shot"],["Cancel","Idle"]])}]])}getState(){return this.state}canTransition(t){const e=this.states.get(this.state);return(e==null?void 0:e.validTransitions.has(t))??!1}transition(t){var u,f;const e=this.states.get(this.state),i=e==null?void 0:e.validTransitions.get(t);if(!i)return this.emit("transition:invalid",{event:t,currentState:this.state}),this.debugMode&&console.error(`Invalid transition from ${this.state} with event "${t}"`),!1;(u=e==null?void 0:e.onExit)==null||u.call(e);const r=this.state;this.state=i,this.history.push({from:r,to:i,event:t,timestamp:Date.now()});const l=this.states.get(i);return(f=l==null?void 0:l.onEnter)==null||f.call(l),this.emit("transition:success",{from:r,to:i,event:t}),this.debugMode&&console.log(`Transitioned from ${r} to ${i} via ${t}`),!0}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}off(t,e){const i=this.listeners.get(t);if(i){const r=i.indexOf(e);r>-1&&i.splice(r,1)}}emit(t,e){const i=this.listeners.get(t);i&&i.forEach(r=>r(e))}getHistory(){return[...this.history]}clearHistory(){this.history=[]}reset(){var i,r;const t=this.states.get(this.state);(i=t==null?void 0:t.onExit)==null||i.call(t),this.state="Idle",this.history=[];const e=this.states.get("Idle");(r=e==null?void 0:e.onEnter)==null||r.call(e),this.emit("reset")}setDebugMode(t){this.debugMode=t}}class Yv extends pS{constructor(e,i,r){super(e,Hm.PLAYER,i,r,0);Gt(this,"stateMachine");this.stateMachine=new oT}}class qv extends pS{constructor(t,e,i){super(t,Hm.ENEMY,e,i,0)}}class lT{constructor(){Gt(this,"nodeList",[]);Gt(this,"players",new Map);Gt(this,"enemies",new Map);Gt(this,"Edges",new Gv);Gt(this,"viewAngle",ma.ViewAngle);Gt(this,"NodesInGridSize",wn.NodesInGridSize);Gt(this,"Lines",[]);Gt(this,"obstacles",[]);this.Init_model()}Init_model(){const t=this.NodesInGridSize;let e=0;for(let i=0;i<t;i++)for(let r=0;r<t;r++){let l=new dS;l.id=e,l.x=i*wn.NodeSpacing,l.y=r*wn.NodeSpacing,this.nodeList.push(l),this.Edges.addVertex(e),e++}this.connectNearNodes(),this.players.set(Kn.PLAYER_1,new Yv(Kn.PLAYER_1,this.nodeList[0],16776960)),this.players.set(Kn.PLAYER_2,new Yv(Kn.PLAYER_2,this.nodeList[1],65280)),this.enemies.set(Kn.ENEMY_1,new qv(Kn.ENEMY_1,this.nodeList[2],16711680)),this.enemies.set(Kn.ENEMY_2,new qv(Kn.ENEMY_2,this.nodeList[3],16737792));for(const i of this.nodeList)(i.id+1)%t!=0&&this.Edges.addEdgeDirected(i.id,i.id+1),i.id%t!=0&&this.Edges.addEdgeDirected(i.id,i.id-1),i.id+t<t*t&&this.Edges.addEdgeDirected(i.id,i.id+t),i.id-t>=0&&this.Edges.addEdgeDirected(i.id,i.id-t);this.generateRandomObstaclesInternal()}connectNearNodes(){for(let t=0;t<this.nodeList.length;t++)for(let e=t+1;e<this.nodeList.length;e++)this.getNodeDistance(this.nodeList[t],this.nodeList[e])<ma.MaxViewDistance&&(this.Edges.addEdgeDirected(this.nodeList[t].id,this.nodeList[e].id),this.Edges.addEdgeDirected(this.nodeList[e].id,this.nodeList[t].id))}getNodeDistance(t,e){const i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}getNodeInDirection(t,e,i){const r=t.x+i*Math.cos(e),l=t.y+i*Math.sin(e);let u=null,f=1/0;for(const d of this.nodeList){const p=d.x-r,m=d.y-l,g=Math.sqrt(p*p+m*m);g<f&&(f=g,u=d)}return u}setPlayerRef(t,e){const i=this.players.get(t);i&&i.setNode(e)}getPlayer(t){return this.players.get(t)}setEnemyRef(t,e){const i=this.enemies.get(t);i&&i.setNode(e)}getEnemy(t){return this.enemies.get(t)}getNodesAtAngle(t,e,i){return this.nodeList.filter(r=>{const l=this.getAngleBetweenNodes(t,r);return Math.abs(l-e)<this.viewAngle&&this.getNodeDistance(t,r)<=i})}getAngleBetweenNodes(t,e){const i=e.x-t.x,r=e.y-t.y;return Math.atan2(r,i)*(180/Math.PI)}getConnectedNodes(t){const e=[],i=this.Edges.List[t.id];for(const r of i){const l=this.nodeList.find(u=>u.id===r);l&&e.push(l)}return e}hasLineOfSight(t,e){const i={x:t.x,y:t.y},r={x:e.x,y:e.y};for(const l of this.Lines)if(l.intersects(i,r))return!1;return!0}getConnectedNodesAtAngle(t,e,i){const r=this.getConnectedNodes(t),l={x:Math.cos(e*Math.PI/180),y:Math.sin(e*Math.PI/180)};return r.filter(u=>{const f={x:u.x-t.x,y:u.y-t.y},d=this.getNodeDistance(t,u),p=(f.x*l.x+f.y*l.y)/(d*Math.sqrt(l.x*l.x+l.y*l.y));return Math.acos(p)*(180/Math.PI)<this.viewAngle&&d<=i})}getVisibleNodesAtAngle(t,e,i){const r={x:Math.cos(e*Math.PI/180),y:Math.sin(e*Math.PI/180)};return this.nodeList.filter(l=>{if(l.id===t.id)return!1;const u={x:l.x-t.x,y:l.y-t.y},f=this.getNodeDistance(t,l);if(f>i)return!1;const d=(u.x*r.x+u.y*r.y)/(f*Math.sqrt(r.x*r.x+r.y*r.y));return Math.acos(Math.max(-1,Math.min(1,d)))*(180/Math.PI)>=this.viewAngle?!1:this.hasLineOfSight(t,l)})}areNodesConnected(t,e){return this.Edges.List[t.id].includes(e.id)}getObstacles(){return[...this.obstacles]}resetGraphEdges(){this.Edges=new Gv;for(let e=0;e<this.nodeList.length;e++)this.Edges.addVertex(e);const t=this.NodesInGridSize;for(const e of this.nodeList)(e.id+1)%t!=0&&this.Edges.addEdgeDirected(e.id,e.id+1),e.id%t!=0&&this.Edges.addEdgeDirected(e.id,e.id-1),e.id+t<t*t&&this.Edges.addEdgeDirected(e.id,e.id+t),e.id-t>=0&&this.Edges.addEdgeDirected(e.id,e.id-t)}generateRandomObstaclesInternal(){const t=xr.generateRandomObstacles();this.obstacles=t.obstacles,this.Lines=t.lines,xr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}generateRandomObstacles(t,e,i,r,l){this.resetGraphEdges();const u=xr.generateRandomObstacles(t,e,i,r,l);this.obstacles=u.obstacles,this.Lines=u.lines,xr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}importObstacles(t){this.resetGraphEdges();const e=xr.importObstacles(t);this.obstacles=e.obstacles,this.Lines=e.lines,xr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}generateComplexMap(){this.resetGraphEdges();const t=xr.generateComplexMap();this.obstacles=t.obstacles,this.Lines=t.lines,xr.applyObstaclesToGraph(this.Edges,this.nodeList,this.Lines)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vm="174",vo={ROTATE:0,DOLLY:1,PAN:2},yo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cT=0,jv=1,uT=2,mS=1,fT=2,Ga=3,Br=0,ri=1,Wa=2,Nr=0,Bo=1,Zv=2,Kv=3,Qv=4,hT=5,Ms=100,dT=101,pT=102,mT=103,_T=104,gT=200,vT=201,yT=202,ST=203,zp=204,Ip=205,xT=206,MT=207,ET=208,TT=209,bT=210,AT=211,RT=212,CT=213,wT=214,Bp=0,Fp=1,Hp=2,Xo=3,Vp=4,Gp=5,kp=6,Xp=7,_S=0,DT=1,LT=2,Pr=0,UT=1,OT=2,NT=3,PT=4,zT=5,IT=6,BT=7,gS=300,Wo=301,Yo=302,Wp=303,Yp=304,Nf=306,qp=1e3,bs=1001,jp=1002,ta=1003,FT=1004,zu=1005,da=1006,Qd=1007,As=1008,Ka=1009,vS=1010,yS=1011,gc=1012,Gm=1013,Us=1014,qa=1015,bc=1016,km=1017,Xm=1018,qo=1020,SS=35902,xS=1021,MS=1022,$i=1023,ES=1024,TS=1025,Fo=1026,jo=1027,bS=1028,Wm=1029,AS=1030,Ym=1031,qm=1033,cf=33776,uf=33777,ff=33778,hf=33779,Zp=35840,Kp=35841,Qp=35842,Jp=35843,$p=36196,tm=37492,em=37496,nm=37808,im=37809,am=37810,rm=37811,sm=37812,om=37813,lm=37814,cm=37815,um=37816,fm=37817,hm=37818,dm=37819,pm=37820,mm=37821,df=36492,_m=36494,gm=36495,RS=36283,vm=36284,ym=36285,Sm=36286,HT=3200,VT=3201,GT=0,kT=1,Dr="",Vi="srgb",Zo="srgb-linear",Sf="linear",Fe="srgb",So=7680,Jv=519,XT=512,WT=513,YT=514,CS=515,qT=516,jT=517,ZT=518,KT=519,$v=35044,ty="300 es",ja=2e3,xf=2001;let il=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}};const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,xm=180/Math.PI;function Ac(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function Se(o,t,e){return Math.max(t,Math.min(e,o))}function QT(o,t){return(o%t+t)%t}function $d(o,t,e){return(1-e)*o+e*t}function nc(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class pe{constructor(t=0,e=0){pe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*i-u*r+t.x,this.y=l*r+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,i,r,l,u,f,d,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,u,f,d,p)}set(t,e,i,r,l,u,f,d,p){const m=this.elements;return m[0]=t,m[1]=r,m[2]=f,m[3]=e,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,u=i[0],f=i[3],d=i[6],p=i[1],m=i[4],g=i[7],v=i[2],S=i[5],E=i[8],M=r[0],x=r[3],y=r[6],L=r[1],U=r[4],R=r[7],O=r[2],P=r[5],N=r[8];return l[0]=u*M+f*L+d*O,l[3]=u*x+f*U+d*P,l[6]=u*y+f*R+d*N,l[1]=p*M+m*L+g*O,l[4]=p*x+m*U+g*P,l[7]=p*y+m*R+g*N,l[2]=v*M+S*L+E*O,l[5]=v*x+S*U+E*P,l[8]=v*y+S*R+E*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8];return e*u*m-e*f*p-i*l*m+i*f*d+r*l*p-r*u*d}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=m*u-f*p,v=f*d-m*l,S=p*l-u*d,E=e*g+i*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*p-m*i)*M,t[2]=(f*i-r*u)*M,t[3]=v*M,t[4]=(m*e-r*d)*M,t[5]=(r*l-f*e)*M,t[6]=S*M,t[7]=(i*d-p*e)*M,t[8]=(u*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*u+p*f)+u+t,-r*p,r*d,-r*(-p*u+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(tp.makeScale(t,e)),this}rotate(t){return this.premultiply(tp.makeRotation(-t)),this}translate(t,e){return this.premultiply(tp.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tp=new he;function wS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Mf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function JT(){const o=Mf("canvas");return o.style.display="block",o}const ey={};function ys(o){o in ey||(ey[o]=!0,console.warn(o))}function $T(o,t,e){return new Promise(function(i,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}function tb(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eb(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ny=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iy=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nb(){const o={enabled:!0,workingColorSpace:Zo,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Fe&&(r.r=Za(r.r),r.g=Za(r.g),r.b=Za(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(r.r=Ho(r.r),r.g=Ho(r.g),r.b=Ho(r.b))),r},fromWorkingColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},toWorkingColorSpace:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Sf:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Zo]:{primaries:t,whitePoint:i,transfer:Sf,toXYZ:ny,fromXYZ:iy,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:ny,fromXYZ:iy,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),o}const Ne=nb();function Za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xo;class ib{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xo===void 0&&(xo=Mf("canvas")),xo.width=t.width,xo.height=t.height;const i=xo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xo}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mf("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Za(l[u]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Za(e[i]/255)*255):e[i]=Za(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ab=0;class jm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Ac(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(ep(r[u].image)):l.push(ep(r[u]))}else l=ep(r);i.url=l}return e||(t.images[this.uuid]=i),i}}function ep(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ib.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rb=0;class si extends il{constructor(t=si.DEFAULT_IMAGE,e=si.DEFAULT_MAPPING,i=bs,r=bs,l=da,u=As,f=$i,d=Ka,p=si.DEFAULT_ANISOTROPY,m=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ac(),this.name="",this.source=new jm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qp:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qp:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=gS;si.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,e=0,i=0,r=1){on.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*r+u[12]*l,this.y=u[1]*e+u[5]*i+u[9]*r+u[13]*l,this.z=u[2]*e+u[6]*i+u[10]*r+u[14]*l,this.w=u[3]*e+u[7]*i+u[11]*r+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,l;const d=t.elements,p=d[0],m=d[4],g=d[8],v=d[1],S=d[5],E=d[9],M=d[2],x=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(p+1)/2,R=(S+1)/2,O=(y+1)/2,P=(m+v)/4,N=(g+M)/4,B=(E+x)/4;return U>R&&U>O?U<.01?(i=0,r=.707106781,l=.707106781):(i=Math.sqrt(U),r=P/i,l=N/i):R>O?R<.01?(i=.707106781,r=0,l=.707106781):(r=Math.sqrt(R),i=P/r,l=B/r):O<.01?(i=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),i=N/l,r=B/l),this.set(i,r,l,e),this}let L=Math.sqrt((x-E)*(x-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(g-M)/L,this.z=(v-m)/L,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sb extends il{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:da,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new si(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new jm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends sb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class DS extends si{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ta,this.minFilter=ta,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends si{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ta,this.minFilter=ta,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,l,u,f){let d=i[r+0],p=i[r+1],m=i[r+2],g=i[r+3];const v=l[u+0],S=l[u+1],E=l[u+2],M=l[u+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=S,t[e+2]=E,t[e+3]=M;return}if(g!==M||d!==v||p!==S||m!==E){let x=1-f;const y=d*v+p*S+m*E+g*M,L=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const O=Math.sqrt(U),P=Math.atan2(O,y*L);x=Math.sin(x*P)/O,f=Math.sin(f*P)/O}const R=f*L;if(d=d*x+v*R,p=p*x+S*R,m=m*x+E*R,g=g*x+M*R,x===1-f){const O=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=O,p*=O,m*=O,g*=O}}t[e]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,r,l,u){const f=i[r],d=i[r+1],p=i[r+2],m=i[r+3],g=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return t[e]=f*E+m*g+d*S-p*v,t[e+1]=d*E+m*v+p*g-f*S,t[e+2]=p*E+m*S+f*v-d*g,t[e+3]=m*E-f*g-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(i/2),m=f(r/2),g=f(l/2),v=d(i/2),S=d(r/2),E=d(l/2);switch(u){case"XYZ":this._x=v*m*g+p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g-v*S*E;break;case"YXZ":this._x=v*m*g+p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g+v*S*E;break;case"ZXY":this._x=v*m*g-p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g-v*S*E;break;case"ZYX":this._x=v*m*g-p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g+v*S*E;break;case"YZX":this._x=v*m*g+p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g-v*S*E;break;case"XZY":this._x=v*m*g-p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],l=e[8],u=e[1],f=e[5],d=e[9],p=e[2],m=e[6],g=e[10],v=i+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(u-r)*S}else if(i>f&&i>g){const S=2*Math.sqrt(1+i-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-i-g);this._w=(l-p)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-i-f);this._w=(u-r)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,l=t._z,u=t._w,f=e._x,d=e._y,p=e._z,m=e._w;return this._x=i*m+u*f+r*p-l*d,this._y=r*m+u*d+l*f-i*p,this._z=l*m+u*p+i*d-r*f,this._w=u*m-i*f-r*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,l=this._z,u=this._w;let f=u*t._w+i*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=i,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-e;return this._w=S*u+e*this._w,this._x=S*i+e*this._x,this._y=S*r+e*this._y,this._z=S*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),g=Math.sin((1-e)*m)/p,v=Math.sin(e*m)/p;return this._w=u*g+this._w*v,this._x=i*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,i=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ay.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ay.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*r,this.y=l[1]*e+l[4]*i+l[7]*r,this.z=l[2]*e+l[5]*i+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=t.elements,u=1/(l[3]*e+l[7]*i+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*r+l[12])*u,this.y=(l[1]*e+l[5]*i+l[9]*r+l[13])*u,this.z=(l[2]*e+l[6]*i+l[10]*r+l[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*r-f*i),m=2*(f*e-l*r),g=2*(l*i-u*e);return this.x=e+d*p+u*g-f*m,this.y=i+d*m+f*p-l*g,this.z=r+d*g+l*m-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r,this.y=l[1]*e+l[5]*i+l[9]*r,this.z=l[2]*e+l[6]*i+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,l=t.z,u=e.x,f=e.y,d=e.z;return this.x=r*d-l*f,this.y=l*u-i*d,this.z=i*f-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new nt,ay=new Ns;class Rc{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ji):ji.fromBufferAttribute(l,u),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Iu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Iu.copy(i.boundingBox)),Iu.applyMatrix4(t.matrixWorld),this.union(Iu)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ic),Bu.subVectors(this.max,ic),Mo.subVectors(t.a,ic),Eo.subVectors(t.b,ic),To.subVectors(t.c,ic),Mr.subVectors(Eo,Mo),Er.subVectors(To,Eo),fs.subVectors(Mo,To);let e=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-fs.z,fs.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,fs.z,0,-fs.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-fs.y,fs.x,0];return!ip(e,Mo,Eo,To,Bu)||(e=[1,0,0,0,1,0,0,0,1],!ip(e,Mo,Eo,To,Bu))?!1:(Fu.crossVectors(Mr,Er),e=[Fu.x,Fu.y,Fu.z],ip(e,Mo,Eo,To,Bu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ia=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],ji=new nt,Iu=new Rc,Mo=new nt,Eo=new nt,To=new nt,Mr=new nt,Er=new nt,fs=new nt,ic=new nt,Bu=new nt,Fu=new nt,hs=new nt;function ip(o,t,e,i,r){for(let l=0,u=o.length-3;l<=u;l+=3){hs.fromArray(o,l);const f=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),d=t.dot(hs),p=e.dot(hs),m=i.dot(hs);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const lb=new Rc,ac=new nt,ap=new nt;class Pf{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lb.setFromPoints(t).getCenter(i);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ac.subVectors(t,this.center);const e=ac.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ac,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ac.copy(t.center).add(ap)),this.expandByPoint(ac.copy(t.center).sub(ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ba=new nt,rp=new nt,Hu=new nt,Tr=new nt,sp=new nt,Vu=new nt,op=new nt;class zf{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ba.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,e),Ba.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){rp.copy(t).add(e).multiplyScalar(.5),Hu.copy(e).sub(t).normalize(),Tr.copy(this.origin).sub(rp);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Hu),f=Tr.dot(this.direction),d=-Tr.dot(Hu),p=Tr.lengthSq(),m=Math.abs(1-u*u);let g,v,S,E;if(m>0)if(g=u*d-f,v=u*f-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,S=g*(g+u*v+2*f)+v*(u*g+v+2*d)+p}else v=l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+p);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(rp).addScaledVector(Hu,v),S}intersectSphere(t,e){Ba.subVectors(t.center,this.origin);const i=Ba.dot(this.direction),r=Ba.dot(Ba)-i*i,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,l,u,f,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),m>=0?(l=(t.min.y-v.y)*m,u=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,u=(t.min.y-v.y)*m),i>u||l>r||((l>i||isNaN(i))&&(i=l),(u<r||isNaN(r))&&(r=u),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),i>d||f>r)||((f>i||i!==i)&&(i=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,e,i,r,l){sp.subVectors(e,t),Vu.subVectors(i,t),op.crossVectors(sp,Vu);let u=this.direction.dot(op),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Tr.subVectors(this.origin,t);const d=f*this.direction.dot(Vu.crossVectors(Tr,Vu));if(d<0)return null;const p=f*this.direction.dot(sp.cross(Tr));if(p<0||d+p>u)return null;const m=-f*Tr.dot(op);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,e,i,r,l,u,f,d,p,m,g,v,S,E,M,x){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,u,f,d,p,m,g,v,S,E,M,x)}set(t,e,i,r,l,u,f,d,p,m,g,v,S,E,M,x){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=r,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=m,y[10]=g,y[14]=v,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/bo.setFromMatrixColumn(t,0).length(),l=1/bo.setFromMatrixColumn(t,1).length(),u=1/bo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,l=t.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=u*m,S=u*g,E=f*m,M=f*g;e[0]=d*m,e[4]=-d*g,e[8]=p,e[1]=S+E*p,e[5]=v-M*p,e[9]=-f*d,e[2]=M-v*p,e[6]=E+S*p,e[10]=u*d}else if(t.order==="YXZ"){const v=d*m,S=d*g,E=p*m,M=p*g;e[0]=v+M*f,e[4]=E*f-S,e[8]=u*p,e[1]=u*g,e[5]=u*m,e[9]=-f,e[2]=S*f-E,e[6]=M+v*f,e[10]=u*d}else if(t.order==="ZXY"){const v=d*m,S=d*g,E=p*m,M=p*g;e[0]=v-M*f,e[4]=-u*g,e[8]=E+S*f,e[1]=S+E*f,e[5]=u*m,e[9]=M-v*f,e[2]=-u*p,e[6]=f,e[10]=u*d}else if(t.order==="ZYX"){const v=u*m,S=u*g,E=f*m,M=f*g;e[0]=d*m,e[4]=E*p-S,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=S*p-E,e[2]=-p,e[6]=f*d,e[10]=u*d}else if(t.order==="YZX"){const v=u*d,S=u*p,E=f*d,M=f*p;e[0]=d*m,e[4]=M-v*g,e[8]=E*g+S,e[1]=g,e[5]=u*m,e[9]=-f*m,e[2]=-p*m,e[6]=S*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=u*d,S=u*p,E=f*d,M=f*p;e[0]=d*m,e[4]=-g,e[8]=p*m,e[1]=v*g+M,e[5]=u*m,e[9]=S*g-E,e[2]=E*g-S,e[6]=f*m,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cb,t,ub)}lookAt(t,e,i){const r=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),br.crossVectors(i,yi),br.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),br.crossVectors(i,yi)),br.normalize(),Gu.crossVectors(yi,br),r[0]=br.x,r[4]=Gu.x,r[8]=yi.x,r[1]=br.y,r[5]=Gu.y,r[9]=yi.y,r[2]=br.z,r[6]=Gu.z,r[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,u=i[0],f=i[4],d=i[8],p=i[12],m=i[1],g=i[5],v=i[9],S=i[13],E=i[2],M=i[6],x=i[10],y=i[14],L=i[3],U=i[7],R=i[11],O=i[15],P=r[0],N=r[4],B=r[8],b=r[12],A=r[1],H=r[5],st=r[9],K=r[13],ut=r[2],ct=r[6],X=r[10],$=r[14],W=r[3],yt=r[7],z=r[11],it=r[15];return l[0]=u*P+f*A+d*ut+p*W,l[4]=u*N+f*H+d*ct+p*yt,l[8]=u*B+f*st+d*X+p*z,l[12]=u*b+f*K+d*$+p*it,l[1]=m*P+g*A+v*ut+S*W,l[5]=m*N+g*H+v*ct+S*yt,l[9]=m*B+g*st+v*X+S*z,l[13]=m*b+g*K+v*$+S*it,l[2]=E*P+M*A+x*ut+y*W,l[6]=E*N+M*H+x*ct+y*yt,l[10]=E*B+M*st+x*X+y*z,l[14]=E*b+M*K+x*$+y*it,l[3]=L*P+U*A+R*ut+O*W,l[7]=L*N+U*H+R*ct+O*yt,l[11]=L*B+U*st+R*X+O*z,l[15]=L*b+U*K+R*$+O*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],m=t[2],g=t[6],v=t[10],S=t[14],E=t[3],M=t[7],x=t[11],y=t[15];return E*(+l*d*g-r*p*g-l*f*v+i*p*v+r*f*S-i*d*S)+M*(+e*d*S-e*p*v+l*u*v-r*u*S+r*p*m-l*d*m)+x*(+e*p*g-e*f*S-l*u*g+i*u*S+l*f*m-i*p*m)+y*(-r*f*m-e*d*g+e*f*v+r*u*g-i*u*v+i*d*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=t[9],v=t[10],S=t[11],E=t[12],M=t[13],x=t[14],y=t[15],L=g*x*p-M*v*p+M*d*S-f*x*S-g*d*y+f*v*y,U=E*v*p-m*x*p-E*d*S+u*x*S+m*d*y-u*v*y,R=m*M*p-E*g*p+E*f*S-u*M*S-m*f*y+u*g*y,O=E*g*d-m*M*d-E*f*v+u*M*v+m*f*x-u*g*x,P=e*L+i*U+r*R+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=L*N,t[1]=(M*v*l-g*x*l-M*r*S+i*x*S+g*r*y-i*v*y)*N,t[2]=(f*x*l-M*d*l+M*r*p-i*x*p-f*r*y+i*d*y)*N,t[3]=(g*d*l-f*v*l-g*r*p+i*v*p+f*r*S-i*d*S)*N,t[4]=U*N,t[5]=(m*x*l-E*v*l+E*r*S-e*x*S-m*r*y+e*v*y)*N,t[6]=(E*d*l-u*x*l-E*r*p+e*x*p+u*r*y-e*d*y)*N,t[7]=(u*v*l-m*d*l+m*r*p-e*v*p-u*r*S+e*d*S)*N,t[8]=R*N,t[9]=(E*g*l-m*M*l-E*i*S+e*M*S+m*i*y-e*g*y)*N,t[10]=(u*M*l-E*f*l+E*i*p-e*M*p-u*i*y+e*f*y)*N,t[11]=(m*f*l-u*g*l-m*i*p+e*g*p+u*i*S-e*f*S)*N,t[12]=O*N,t[13]=(m*M*r-E*g*r+E*i*v-e*M*v-m*i*x+e*g*x)*N,t[14]=(E*f*r-u*M*r-E*i*d+e*M*d+u*i*x-e*f*x)*N,t[15]=(u*g*r-m*f*r+m*i*d-e*g*d-u*i*v+e*f*v)*N,this}scale(t){const e=this.elements,i=t.x,r=t.y,l=t.z;return e[0]*=i,e[4]*=r,e[8]*=l,e[1]*=i,e[5]*=r,e[9]*=l,e[2]*=i,e[6]*=r,e[10]*=l,e[3]*=i,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),l=1-i,u=t.x,f=t.y,d=t.z,p=l*u,m=l*f;return this.set(p*u+i,p*f-r*d,p*d+r*f,0,p*f+r*d,m*f+i,m*d-r*u,0,p*d-r*f,m*d+r*u,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,l,u){return this.set(1,i,l,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,l=e._x,u=e._y,f=e._z,d=e._w,p=l+l,m=u+u,g=f+f,v=l*p,S=l*m,E=l*g,M=u*m,x=u*g,y=f*g,L=d*p,U=d*m,R=d*g,O=i.x,P=i.y,N=i.z;return r[0]=(1-(M+y))*O,r[1]=(S+R)*O,r[2]=(E-U)*O,r[3]=0,r[4]=(S-R)*P,r[5]=(1-(v+y))*P,r[6]=(x+L)*P,r[7]=0,r[8]=(E+U)*N,r[9]=(x-L)*N,r[10]=(1-(v+M))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let l=bo.set(r[0],r[1],r[2]).length();const u=bo.set(r[4],r[5],r[6]).length(),f=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Zi.copy(this);const p=1/l,m=1/u,g=1/f;return Zi.elements[0]*=p,Zi.elements[1]*=p,Zi.elements[2]*=p,Zi.elements[4]*=m,Zi.elements[5]*=m,Zi.elements[6]*=m,Zi.elements[8]*=g,Zi.elements[9]*=g,Zi.elements[10]*=g,e.setFromRotationMatrix(Zi),i.x=l,i.y=u,i.z=f,this}makePerspective(t,e,i,r,l,u,f=ja){const d=this.elements,p=2*l/(e-t),m=2*l/(i-r),g=(e+t)/(e-t),v=(i+r)/(i-r);let S,E;if(f===ja)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===xf)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,l,u,f=ja){const d=this.elements,p=1/(e-t),m=1/(i-r),g=1/(u-l),v=(e+t)*p,S=(i+r)*m;let E,M;if(f===ja)E=(u+l)*g,M=-2*g;else if(f===xf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bo=new nt,Zi=new nn,cb=new nt(0,0,0),ub=new nt(1,1,1),br=new nt,Gu=new nt,yi=new nt,ry=new nn,sy=new Ns;class Qa{constructor(t=0,e=0,i=0,r=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,l=r[0],u=r[4],f=r[8],d=r[1],p=r[5],m=r[9],g=r[2],v=r[6],S=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ry.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ry,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sy.setFromEuler(this),this.setFromQuaternion(sy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fb=0;const oy=new nt,Ao=new Ns,Fa=new nn,ku=new nt,rc=new nt,hb=new nt,db=new Ns,ly=new nt(1,0,0),cy=new nt(0,1,0),uy=new nt(0,0,1),fy={type:"added"},pb={type:"removed"},Ro={type:"childadded",child:null},lp={type:"childremoved",child:null};class oi extends il{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new nt,e=new Qa,i=new Ns,r=new nt(1,1,1);function l(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nn},normalMatrix:{value:new he}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(ly,t)}rotateY(t){return this.rotateOnAxis(cy,t)}rotateZ(t){return this.rotateOnAxis(uy,t)}translateOnAxis(t,e){return oy.copy(t).applyQuaternion(this.quaternion),this.position.add(oy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ly,t)}translateY(t){return this.translateOnAxis(cy,t)}translateZ(t){return this.translateOnAxis(uy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ku.copy(t):ku.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(rc,ku,this.up):Fa.lookAt(ku,rc,this.up),this.quaternion.setFromRotationMatrix(Fa),r&&(Fa.extractRotation(r.matrixWorld),Ao.setFromRotationMatrix(Fa),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fy),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pb),lp.child=t,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fy),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,t,hb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,db,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(t.animations,d))}}if(e){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),m=u(t.images),g=u(t.shapes),v=u(t.skeletons),S=u(t.animations),E=u(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=r,i;function u(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}oi.DEFAULT_UP=new nt(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new nt,Ha=new nt,cp=new nt,Va=new nt,Co=new nt,wo=new nt,hy=new nt,up=new nt,fp=new nt,hp=new nt,dp=new on,pp=new on,mp=new on;class Ji{constructor(t=new nt,e=new nt,i=new nt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ki.subVectors(t,e),r.cross(Ki);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,i,r,l){Ki.subVectors(r,e),Ha.subVectors(i,e),cp.subVectors(t,e);const u=Ki.dot(Ki),f=Ki.dot(Ha),d=Ki.dot(cp),p=Ha.dot(Ha),m=Ha.dot(cp),g=u*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(p*d-f*m)*v,E=(u*m-f*d)*v;return l.set(1-S-E,E,S)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(t,e,i,r,l,u,f,d){return this.getBarycoord(t,e,i,r,Va)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Va.x),d.addScaledVector(u,Va.y),d.addScaledVector(f,Va.z),d)}static getInterpolatedAttribute(t,e,i,r,l,u){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(t,e),pp.fromBufferAttribute(t,i),mp.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(dp,l.x),u.addScaledVector(pp,l.y),u.addScaledVector(mp,l.z),u}static isFrontFacing(t,e,i,r){return Ki.subVectors(i,e),Ha.subVectors(t,e),Ki.cross(Ha).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),Ki.cross(Ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ji.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,l){return Ji.getInterpolation(t,this.a,this.b,this.c,e,i,r,l)}containsPoint(t){return Ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,l=this.c;let u,f;Co.subVectors(r,i),wo.subVectors(l,i),up.subVectors(t,i);const d=Co.dot(up),p=wo.dot(up);if(d<=0&&p<=0)return e.copy(i);fp.subVectors(t,r);const m=Co.dot(fp),g=wo.dot(fp);if(m>=0&&g<=m)return e.copy(r);const v=d*g-m*p;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),e.copy(i).addScaledVector(Co,u);hp.subVectors(t,l);const S=Co.dot(hp),E=wo.dot(hp);if(E>=0&&S<=E)return e.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),e.copy(i).addScaledVector(wo,f);const x=m*E-S*g;if(x<=0&&g-m>=0&&S-E>=0)return hy.subVectors(l,r),f=(g-m)/(g-m+(S-E)),e.copy(r).addScaledVector(hy,f);const y=1/(x+M+v);return u=M*y,f=v*y,e.copy(i).addScaledVector(Co,u).addScaledVector(wo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const LS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function _p(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Pe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ne.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ne.workingColorSpace){if(t=QT(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,u=2*i-l;this.r=_p(u,l,t+1/3),this.g=_p(u,l,t),this.b=_p(u,l,t-1/3)}return Ne.toWorkingColorSpace(this,r),this}setStyle(t,e=Vi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vi){const i=LS[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Za(t.r),this.g=Za(t.g),this.b=Za(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vi){return Ne.fromWorkingColorSpace(Vn.copy(this),t),Math.round(Se(Vn.r*255,0,255))*65536+Math.round(Se(Vn.g*255,0,255))*256+Math.round(Se(Vn.b*255,0,255))}getHexString(t=Vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Vn.copy(this),e);const i=Vn.r,r=Vn.g,l=Vn.b,u=Math.max(i,r,l),f=Math.min(i,r,l);let d,p;const m=(f+u)/2;if(f===u)d=0,p=0;else{const g=u-f;switch(p=m<=.5?g/(u+f):g/(2-u-f),u){case i:d=(r-l)/g+(r<l?6:0);break;case r:d=(l-i)/g+2;break;case l:d=(i-r)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,e=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Vi){Ne.fromWorkingColorSpace(Vn.copy(this),t);const e=Vn.r,i=Vn.g,r=Vn.b;return t!==Vi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ar),this.setHSL(Ar.h+t,Ar.s+e,Ar.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ar),t.getHSL(Xu);const i=$d(Ar.h,Xu.h,e),r=$d(Ar.s,Xu.s,e),l=$d(Ar.l,Xu.l,e);return this.setHSL(i,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*r,this.g=l[1]*e+l[4]*i+l[7]*r,this.b=l[2]*e+l[5]*i+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Pe;Pe.NAMES=LS;let mb=0;class Cc extends il{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Ac(),this.name="",this.type="Material",this.blending=Bo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zp,this.blendDst=Ip,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zp&&(i.blendSrc=this.blendSrc),this.blendDst!==Ip&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(i.stencilFail=this.stencilFail),this.stencilZFail!==So&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(e){const l=r(t.textures),u=r(t.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let l=0;l!==r;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Es extends Cc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=_S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new nt,Wu=new pe;let _b=0;class _a{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$v,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wu.fromBufferAttribute(this,e),Wu.applyMatrix3(t),this.setXY(e,Wu.x,Wu.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nc(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ii(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nc(e,this.array)),e}setX(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nc(e,this.array)),e}setY(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nc(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nc(e,this.array)),e}setW(t,e){return this.normalized&&(e=ii(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),r=ii(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,l){return t*=this.itemSize,this.normalized&&(e=ii(e,this.array),i=ii(i,this.array),r=ii(r,this.array),l=ii(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$v&&(t.usage=this.usage),t}}class US extends _a{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class OS extends _a{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ea extends _a{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gb=0;const Fi=new nn,gp=new oi,Do=new nt,Si=new Rc,sc=new Rc,Cn=new nt;class na extends il{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wS(t)?OS:US)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new he().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,i){return Fi.makeTranslation(t,e,i),this.applyMatrix4(Fi),this}scale(t,e,i){return Fi.makeScale(t,e,i),this.applyMatrix4(Fi),this}lookAt(t){return gp.lookAt(t),gp.updateMatrix(),this.applyMatrix4(gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ea(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const l=e[i];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];sc.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(Si.min,sc.min),Si.expandByPoint(Cn),Cn.addVectors(Si.max,sc.max),Si.expandByPoint(Cn)):(Si.expandByPoint(sc.min),Si.expandByPoint(sc.max))}Si.getCenter(i);let r=0;for(let l=0,u=t.count;l<u;l++)Cn.fromBufferAttribute(t,l),r=Math.max(r,i.distanceToSquared(Cn));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Cn.fromBufferAttribute(f,p),d&&(Do.fromBufferAttribute(t,p),Cn.add(Do)),r=Math.max(r,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _a(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<i.count;B++)f[B]=new nt,d[B]=new nt;const p=new nt,m=new nt,g=new nt,v=new pe,S=new pe,E=new pe,M=new nt,x=new nt;function y(B,b,A){p.fromBufferAttribute(i,B),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,A),v.fromBufferAttribute(l,B),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,A),m.sub(p),g.sub(p),S.sub(v),E.sub(v);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),x.copy(g).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(H),f[B].add(M),f[b].add(M),f[A].add(M),d[B].add(x),d[b].add(x),d[A].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let B=0,b=L.length;B<b;++B){const A=L[B],H=A.start,st=A.count;for(let K=H,ut=H+st;K<ut;K+=3)y(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const U=new nt,R=new nt,O=new nt,P=new nt;function N(B){O.fromBufferAttribute(r,B),P.copy(O);const b=f[B];U.copy(b),U.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(P,b);const H=R.dot(d[B])<0?-1:1;u.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,b=L.length;B<b;++B){const A=L[B],H=A.start,st=A.count;for(let K=H,ut=H+st;K<ut;K+=3)N(t.getX(K+0)),N(t.getX(K+1)),N(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _a(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const r=new nt,l=new nt,u=new nt,f=new nt,d=new nt,p=new nt,m=new nt,g=new nt;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),M=t.getX(v+1),x=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),u.fromBufferAttribute(e,x),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),p.fromBufferAttribute(i,x),f.add(m),d.add(m),p.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=e.count;v<S;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),m.subVectors(u,l),g.subVectors(r,l),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,d){const p=f.array,m=f.itemSize,g=f.normalized,v=new p.constructor(d.length*m);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let y=0;y<m;y++)v[E++]=p[S++]}return new _a(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new na,i=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=t(d,i);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const v=p[m],S=t(v,i);d.push(S)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,v=p.length;g<v;g++){const S=p[g];m.push(S.toJSON(t.data))}m.length>0&&(r[d]=m,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(e))}const l=t.morphAttributes;for(const p in l){const m=[],g=l[p];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(e));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dy=new nn,ds=new zf,Yu=new Pf,py=new nt,qu=new nt,ju=new nt,Zu=new nt,vp=new nt,Ku=new nt,my=new nt,Qu=new nt;class Ti extends oi{constructor(t=new na,e=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Ku.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],g=l[d];m!==0&&(vp.fromBufferAttribute(g,t),u?Ku.addScaledVector(vp,m):Ku.addScaledVector(vp.sub(e),m))}e.add(Ku)}return e}raycast(t,e){const i=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yu.copy(i.boundingSphere),Yu.applyMatrix4(l),ds.copy(t.ray).recast(t.near),!(Yu.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Yu,py)===null||ds.origin.distanceToSquared(py)>(t.far-t.near)**2))&&(dy.copy(l).invert(),ds.copy(t.ray).applyMatrix4(dy),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),U=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let R=L,O=U;R<O;R+=3){const P=f.getX(R),N=f.getX(R+1),B=f.getX(R+2);r=Ju(this,y,t,i,p,m,g,P,N,B),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=f.getX(x),U=f.getX(x+1),R=f.getX(x+2);r=Ju(this,u,t,i,p,m,g,L,U,R),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],y=u[x.materialIndex],L=Math.max(x.start,S.start),U=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=L,O=U;R<O;R+=3){const P=R,N=R+1,B=R+2;r=Ju(this,y,t,i,p,m,g,P,N,B),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const L=x,U=x+1,R=x+2;r=Ju(this,u,t,i,p,m,g,L,U,R),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function vb(o,t,e,i,r,l,u,f){let d;if(t.side===ri?d=i.intersectTriangle(u,l,r,!0,f):d=i.intersectTriangle(r,l,u,t.side===Br,f),d===null)return null;Qu.copy(f),Qu.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Qu);return p<e.near||p>e.far?null:{distance:p,point:Qu.clone(),object:o}}function Ju(o,t,e,i,r,l,u,f,d,p){o.getVertexPosition(f,qu),o.getVertexPosition(d,ju),o.getVertexPosition(p,Zu);const m=vb(o,t,e,i,qu,ju,Zu,my);if(m){const g=new nt;Ji.getBarycoord(my,qu,ju,Zu,g),r&&(m.uv=Ji.getInterpolatedAttribute(r,f,d,p,g,new pe)),l&&(m.uv1=Ji.getInterpolatedAttribute(l,f,d,p,g,new pe)),u&&(m.normal=Ji.getInterpolatedAttribute(u,f,d,p,g,new nt),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new nt,materialIndex:0};Ji.getNormal(qu,ju,Zu,v.normal),m.face=v,m.barycoord=g}return m}class Ps extends na{constructor(t=1,e=1,i=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],m=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,i,e,t,u,l,0),E("z","y","x",1,-1,i,e,-t,u,l,1),E("x","z","y",1,1,t,i,e,r,u,2),E("x","z","y",1,-1,t,i,-e,r,u,3),E("x","y","z",1,-1,t,e,i,r,l,4),E("x","y","z",-1,-1,t,e,-i,r,l,5),this.setIndex(d),this.setAttribute("position",new ea(p,3)),this.setAttribute("normal",new ea(m,3)),this.setAttribute("uv",new ea(g,2));function E(M,x,y,L,U,R,O,P,N,B,b){const A=R/N,H=O/B,st=R/2,K=O/2,ut=P/2,ct=N+1,X=B+1;let $=0,W=0;const yt=new nt;for(let z=0;z<X;z++){const it=z*H-K;for(let Et=0;Et<ct;Et++){const Ct=Et*A-st;yt[M]=Ct*L,yt[x]=it*U,yt[y]=ut,p.push(yt.x,yt.y,yt.z),yt[M]=0,yt[x]=0,yt[y]=P>0?1:-1,m.push(yt.x,yt.y,yt.z),g.push(Et/N),g.push(1-z/B),$+=1}}for(let z=0;z<B;z++)for(let it=0;it<N;it++){const Et=v+it+ct*z,Ct=v+it+ct*(z+1),q=v+(it+1)+ct*(z+1),dt=v+(it+1)+ct*z;d.push(Et,Ct,dt),d.push(Ct,q,dt),W+=6}f.addGroup(S,W,b),S+=W,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ko(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const r=o[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Zn(o){const t={};for(let e=0;e<o.length;e++){const i=Ko(o[e]);for(const r in i)t[r]=i[r]}return t}function yb(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function NS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const Sb={clone:Ko,merge:Zn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Cc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ko(t.uniforms),this.uniformsGroups=yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class PS extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ja}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new nt,_y=new pe,gy=new pe;class Qn extends PS{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xm*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xm*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z)}getViewSize(t,e){return this.getViewBounds(t,_y,gy),e.subVectors(gy,_y)}setViewOffset(t,e,i,r,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jd*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,e-=u.offsetY*i/p,r*=u.width/d,i*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lo=-90,Uo=1;class Eb extends oi{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Lo,Uo,t,e);r.layers=this.layers,this.add(r);const l=new Qn(Lo,Uo,t,e);l.layers=this.layers,this.add(l);const u=new Qn(Lo,Uo,t,e);u.layers=this.layers,this.add(u);const f=new Qn(Lo,Uo,t,e);f.layers=this.layers,this.add(f);const d=new Qn(Lo,Uo,t,e);d.layers=this.layers,this.add(d);const p=new Qn(Lo,Uo,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,l,u,f,d]=e;for(const p of e)this.remove(p);if(t===ja)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===xf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,l),t.setRenderTarget(i,1,r),t.render(e,u),t.setRenderTarget(i,2,r),t.render(e,f),t.setRenderTarget(i,3,r),t.render(e,d),t.setRenderTarget(i,4,r),t.render(e,p),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,m),t.setRenderTarget(g,v,S),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class zS extends si{constructor(t,e,i,r,l,u,f,d,p,m){t=t!==void 0?t:[],e=e!==void 0?e:Wo,super(t,e,i,r,l,u,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tb extends Os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new zS(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:da}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),l=new Fr({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:Nr});l.uniforms.tEquirect.value=e;const u=new Ti(r,l),f=e.minFilter;return e.minFilter===As&&(e.minFilter=da),new Eb(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,i,r){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,r);t.setRenderTarget(l)}}class $u extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class yp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const M of t.hand.values()){const x=e.getJointPose(M,i),y=this._getHandJoint(p,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $u;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ab extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sp=new nt,Rb=new nt,Cb=new he;class Cr{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Sp.subVectors(i,e).cross(Rb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cb.getNormalMatrix(t),r=this.coplanarPoint(Sp).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Pf,tf=new nt;class IS{constructor(t=new Cr,e=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr){this.planes=[t,e,i,r,l,u]}set(t,e,i,r,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ja){const i=this.planes,r=t.elements,l=r[0],u=r[1],f=r[2],d=r[3],p=r[4],m=r[5],g=r[6],v=r[7],S=r[8],E=r[9],M=r[10],x=r[11],y=r[12],L=r[13],U=r[14],R=r[15];if(i[0].setComponents(d-l,v-p,x-S,R-y).normalize(),i[1].setComponents(d+l,v+p,x+S,R+y).normalize(),i[2].setComponents(d+u,v+m,x+E,R+L).normalize(),i[3].setComponents(d-u,v-m,x-E,R-L).normalize(),i[4].setComponents(d-f,v-g,x-M,R-U).normalize(),e===ja)i[5].setComponents(d+f,v+g,x+M,R+U).normalize();else if(e===xf)i[5].setComponents(f,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(tf.x=r.normal.x>0?t.max.x:t.min.x,tf.y=r.normal.y>0?t.max.y:t.min.y,tf.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(tf)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ef extends Cc{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tf=new nt,bf=new nt,vy=new nn,oc=new zf,ef=new Pf,xp=new nt,yy=new nt;class Km extends oi{constructor(t=new na,e=new Ef){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,l=e.count;r<l;r++)Tf.fromBufferAttribute(e,r-1),bf.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Tf.distanceTo(bf);t.setAttribute("lineDistance",new ea(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(r),ef.radius+=l,t.ray.intersectsSphere(ef)===!1)return;vy.copy(r).invert(),oc.copy(t.ray).applyMatrix4(vy);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const S=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=S,x=E-1;M<x;M+=p){const y=m.getX(M),L=m.getX(M+1),U=nf(this,t,oc,d,y,L,M);U&&e.push(U)}if(this.isLineLoop){const M=m.getX(E-1),x=m.getX(S),y=nf(this,t,oc,d,M,x,E-1);y&&e.push(y)}}else{const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=S,x=E-1;M<x;M+=p){const y=nf(this,t,oc,d,M,M+1,M);y&&e.push(y)}if(this.isLineLoop){const M=nf(this,t,oc,d,E-1,S,E-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function nf(o,t,e,i,r,l,u){const f=o.geometry.attributes.position;if(Tf.fromBufferAttribute(f,r),bf.fromBufferAttribute(f,l),e.distanceSqToSegment(Tf,bf,xp,yy)>i)return;xp.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(xp);if(!(p<t.near||p>t.far))return{distance:p,point:yy.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}class BS extends si{constructor(t,e,i,r,l,u,f,d,p,m=Fo){if(m!==Fo&&m!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Fo&&(i=Us),i===void 0&&m===jo&&(i=qo),super(null,r,l,u,f,d,m,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=f!==void 0?f:ta,this.minFilter=d!==void 0?d:ta,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Af extends na{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const l=[],u=[],f=[],d=[],p=new nt,m=new pe;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=e;g++,v+=3){const S=i+g/e*r;p.x=t*Math.cos(S),p.y=t*Math.sin(S),u.push(p.x,p.y,p.z),f.push(0,0,1),m.x=(u[v]/t+1)/2,m.y=(u[v+1]/t+1)/2,d.push(m.x,m.y)}for(let g=1;g<=e;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new ea(u,3)),this.setAttribute("normal",new ea(f,3)),this.setAttribute("uv",new ea(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Af(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class If extends na{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const l=t/2,u=e/2,f=Math.floor(i),d=Math.floor(r),p=f+1,m=d+1,g=t/f,v=e/d,S=[],E=[],M=[],x=[];for(let y=0;y<m;y++){const L=y*v-u;for(let U=0;U<p;U++){const R=U*g-l;E.push(R,-L,0),M.push(0,0,1),x.push(U/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<f;L++){const U=L+p*y,R=L+p*(y+1),O=L+1+p*(y+1),P=L+1+p*y;S.push(U,R,P),S.push(R,O,P)}this.setIndex(S),this.setAttribute("position",new ea(E,3)),this.setAttribute("normal",new ea(M,3)),this.setAttribute("uv",new ea(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new If(t.width,t.height,t.widthSegments,t.heightSegments)}}class wb extends Cc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Db extends Cc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pf extends PS{constructor(t=-1,e=1,i=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=i-t,u=i+t,f=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lb extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Sy=new nn;class Ub{constructor(t,e,i=0,r=1/0){this.ray=new zf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Zm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sy.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sy),this}intersectObject(t,e=!0,i=[]){return Mm(t,this,i,e),i.sort(xy),i}intersectObjects(t,e=!0,i=[]){for(let r=0,l=t.length;r<l;r++)Mm(t[r],this,i,e);return i.sort(xy),i}}function xy(o,t){return o.distance-t.distance}function Mm(o,t,e,i){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const l=o.children;for(let u=0,f=l.length;u<f;u++)Mm(l[u],t,e,!0)}}class My{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Ey(o,t,e,i){const r=Ob(i);switch(e){case xS:return o*t;case ES:return o*t;case TS:return o*t*2;case bS:return o*t/r.components*r.byteLength;case Wm:return o*t/r.components*r.byteLength;case AS:return o*t*2/r.components*r.byteLength;case Ym:return o*t*2/r.components*r.byteLength;case MS:return o*t*3/r.components*r.byteLength;case $i:return o*t*4/r.components*r.byteLength;case qm:return o*t*4/r.components*r.byteLength;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kp:case Jp:return Math.max(o,16)*Math.max(t,8)/4;case Zp:case Qp:return Math.max(o,8)*Math.max(t,8)/2;case $p:case tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case im:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case am:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case sm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case om:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case cm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case um:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case fm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case dm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case pm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case mm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case df:case _m:case gm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case RS:case vm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ym:case Sm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ob(o){switch(o){case Ka:case vS:return{byteLength:1,components:1};case gc:case yS:case bc:return{byteLength:2,components:1};case km:case Xm:return{byteLength:2,components:4};case Us:case Gm:case qa:return{byteLength:4,components:1};case SS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function FS(){let o=null,t=!1,e=null,i=null;function r(l,u){e(l,u),i=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function Nb(o){const t=new WeakMap;function e(f,d){const p=f.array,m=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,p){const m=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,m);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];o.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,d),p.version=f.version}}return{get:r,remove:l,update:u}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
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
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
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
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jb=`#ifdef USE_IRIDESCENCE
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
#endif`,Zb=`#ifdef USE_BUMPMAP
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
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
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
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
#endif`,O1=`struct PhysicalMaterial {
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
}`,N1=`
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iA=`#ifdef USE_NORMALMAP
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
#endif`,aA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yA=`float getShadowMask() {
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
}`,SA=`#ifdef USE_SKINNING
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
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EA=`#ifdef USE_SKINNING
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
#endif`,TA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CA=`#ifdef USE_TRANSMISSION
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
#endif`,wA=`#ifdef USE_TRANSMISSION
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PA=`uniform sampler2D t2D;
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`#include <common>
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
}`,VA=`#if DEPTH_PACKING == 3200
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
}`,GA=`#define DISTANCE
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
}`,kA=`#define DISTANCE
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`uniform float scale;
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
}`,qA=`uniform vec3 diffuse;
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
}`,jA=`#include <common>
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
}`,ZA=`uniform vec3 diffuse;
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
}`,KA=`#define LAMBERT
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
}`,QA=`#define LAMBERT
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
}`,JA=`#define MATCAP
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
}`,$A=`#define MATCAP
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
}`,tR=`#define NORMAL
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
}`,eR=`#define NORMAL
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
}`,nR=`#define PHONG
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
}`,iR=`#define PHONG
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
}`,aR=`#define STANDARD
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
}`,rR=`#define STANDARD
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
}`,sR=`#define TOON
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
}`,oR=`#define TOON
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
}`,lR=`uniform float size;
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
}`,cR=`uniform vec3 diffuse;
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
}`,uR=`#include <common>
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
}`,fR=`uniform vec3 color;
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
}`,hR=`uniform float rotation;
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
}`,dR=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Pb,alphahash_pars_fragment:zb,alphamap_fragment:Ib,alphamap_pars_fragment:Bb,alphatest_fragment:Fb,alphatest_pars_fragment:Hb,aomap_fragment:Vb,aomap_pars_fragment:Gb,batching_pars_vertex:kb,batching_vertex:Xb,begin_vertex:Wb,beginnormal_vertex:Yb,bsdfs:qb,iridescence_fragment:jb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:$b,color_fragment:t1,color_pars_fragment:e1,color_pars_vertex:n1,color_vertex:i1,common:a1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:s1,displacementmap_pars_vertex:o1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:u1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:d1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:R1,envmap_vertex:g1,fog_vertex:v1,fog_pars_vertex:y1,fog_fragment:S1,fog_pars_fragment:x1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:E1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:b1,lights_pars_begin:A1,lights_toon_fragment:C1,lights_toon_pars_fragment:w1,lights_phong_fragment:D1,lights_phong_pars_fragment:L1,lights_physical_fragment:U1,lights_physical_pars_fragment:O1,lights_fragment_begin:N1,lights_fragment_maps:P1,lights_fragment_end:z1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:H1,map_fragment:V1,map_pars_fragment:G1,map_particle_fragment:k1,map_particle_pars_fragment:X1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:q1,morphcolor_vertex:j1,morphnormal_vertex:Z1,morphtarget_pars_vertex:K1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:$1,normal_pars_fragment:tA,normal_pars_vertex:eA,normal_vertex:nA,normalmap_pars_fragment:iA,clearcoat_normal_fragment_begin:aA,clearcoat_normal_fragment_maps:rA,clearcoat_pars_fragment:sA,iridescence_pars_fragment:oA,opaque_fragment:lA,packing:cA,premultiplied_alpha_fragment:uA,project_vertex:fA,dithering_fragment:hA,dithering_pars_fragment:dA,roughnessmap_fragment:pA,roughnessmap_pars_fragment:mA,shadowmap_pars_fragment:_A,shadowmap_pars_vertex:gA,shadowmap_vertex:vA,shadowmask_pars_fragment:yA,skinbase_vertex:SA,skinning_pars_vertex:xA,skinning_vertex:MA,skinnormal_vertex:EA,specularmap_fragment:TA,specularmap_pars_fragment:bA,tonemapping_fragment:AA,tonemapping_pars_fragment:RA,transmission_fragment:CA,transmission_pars_fragment:wA,uv_pars_fragment:DA,uv_pars_vertex:LA,uv_vertex:UA,worldpos_vertex:OA,background_vert:NA,background_frag:PA,backgroundCube_vert:zA,backgroundCube_frag:IA,cube_vert:BA,cube_frag:FA,depth_vert:HA,depth_frag:VA,distanceRGBA_vert:GA,distanceRGBA_frag:kA,equirect_vert:XA,equirect_frag:WA,linedashed_vert:YA,linedashed_frag:qA,meshbasic_vert:jA,meshbasic_frag:ZA,meshlambert_vert:KA,meshlambert_frag:QA,meshmatcap_vert:JA,meshmatcap_frag:$A,meshnormal_vert:tR,meshnormal_frag:eR,meshphong_vert:nR,meshphong_frag:iR,meshphysical_vert:aR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:lR,points_frag:cR,shadow_vert:uR,shadow_frag:fR,sprite_vert:hR,sprite_frag:dR},Pt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},fa={basic:{uniforms:Zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Zn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Zn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Zn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Zn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Zn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Zn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Zn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Zn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Zn([Pt.common,Pt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Zn([Pt.lights,Pt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};fa.physical={uniforms:Zn([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const af={r:0,b:0,g:0},ms=new Qa,pR=new nn;function mR(o,t,e,i,r,l,u){const f=new Pe(0);let d=l===!0?0:1,p,m,g=null,v=0,S=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function M(U){let R=!1;const O=E(U);O===null?y(f,d):O&&O.isColor&&(y(O,1),R=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(U,R){const O=E(R);O&&(O.isCubeTexture||O.mapping===Nf)?(m===void 0&&(m=new Ti(new Ps(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Ko(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ms.copy(R.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(pR.makeRotationFromEuler(ms)),m.material.toneMapped=Ne.getTransfer(O.colorSpace)!==Fe,(g!==O||v!==O.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=O,v=O.version,S=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ti(new If(2,2),new Fr({name:"BackgroundMaterial",uniforms:Ko(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,S=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,R){U.getRGB(af,NS(o)),i.buffers.color.setClear(af.r,af.g,af.b,R,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,R=1){f.set(U),d=R,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(f,d)},render:M,addToRenderList:x,dispose:L}}function _R(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},r=v(null);let l=r,u=!1;function f(A,H,st,K,ut){let ct=!1;const X=g(K,st,H);l!==X&&(l=X,p(l.object)),ct=S(A,K,st,ut),ct&&E(A,K,st,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ct||u)&&(u=!1,R(A,H,st,K),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function m(A){return o.deleteVertexArray(A)}function g(A,H,st){const K=st.wireframe===!0;let ut=i[A.id];ut===void 0&&(ut={},i[A.id]=ut);let ct=ut[H.id];ct===void 0&&(ct={},ut[H.id]=ct);let X=ct[K];return X===void 0&&(X=v(d()),ct[K]=X),X}function v(A){const H=[],st=[],K=[];for(let ut=0;ut<e;ut++)H[ut]=0,st[ut]=0,K[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:K,object:A,attributes:{},index:null}}function S(A,H,st,K){const ut=l.attributes,ct=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){const z=ut[W];let it=ct[W];if(it===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),z===void 0||z.attribute!==it||it&&z.data!==it.data)return!0;X++}return l.attributesNum!==X||l.index!==K}function E(A,H,st,K){const ut={},ct=H.attributes;let X=0;const $=st.getAttributes();for(const W in $)if($[W].location>=0){let z=ct[W];z===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));const it={};it.attribute=z,z&&z.data&&(it.data=z.data),ut[W]=it,X++}l.attributes=ut,l.attributesNum=X,l.index=K}function M(){const A=l.newAttributes;for(let H=0,st=A.length;H<st;H++)A[H]=0}function x(A){y(A,0)}function y(A,H){const st=l.newAttributes,K=l.enabledAttributes,ut=l.attributeDivisors;st[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ut[A]!==H&&(o.vertexAttribDivisor(A,H),ut[A]=H)}function L(){const A=l.newAttributes,H=l.enabledAttributes;for(let st=0,K=H.length;st<K;st++)H[st]!==A[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function U(A,H,st,K,ut,ct,X){X===!0?o.vertexAttribIPointer(A,H,st,ut,ct):o.vertexAttribPointer(A,H,st,K,ut,ct)}function R(A,H,st,K){M();const ut=K.attributes,ct=st.getAttributes(),X=H.defaultAttributeValues;for(const $ in ct){const W=ct[$];if(W.location>=0){let yt=ut[$];if(yt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const z=yt.normalized,it=yt.itemSize,Et=t.get(yt);if(Et===void 0)continue;const Ct=Et.buffer,q=Et.type,dt=Et.bytesPerElement,xt=q===o.INT||q===o.UNSIGNED_INT||yt.gpuType===Gm;if(yt.isInterleavedBufferAttribute){const Rt=yt.data,wt=Rt.stride,te=yt.offset;if(Rt.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)y(W.location+zt,Rt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let zt=0;zt<W.locationSize;zt++)x(W.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let zt=0;zt<W.locationSize;zt++)U(W.location+zt,it/W.locationSize,q,z,wt*dt,(te+it/W.locationSize*zt)*dt,xt)}else{if(yt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)y(W.location+Rt,yt.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)x(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let Rt=0;Rt<W.locationSize;Rt++)U(W.location+Rt,it/W.locationSize,q,z,it*dt,it/W.locationSize*Rt*dt,xt)}}else if(X!==void 0){const z=X[$];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(W.location,z);break;case 3:o.vertexAttrib3fv(W.location,z);break;case 4:o.vertexAttrib4fv(W.location,z);break;default:o.vertexAttrib1fv(W.location,z)}}}}L()}function O(){B();for(const A in i){const H=i[A];for(const st in H){const K=H[st];for(const ut in K)m(K[ut].object),delete K[ut];delete H[st]}delete i[A]}}function P(A){if(i[A.id]===void 0)return;const H=i[A.id];for(const st in H){const K=H[st];for(const ut in K)m(K[ut].object),delete K[ut];delete H[st]}delete i[A.id]}function N(A){for(const H in i){const st=i[H];if(st[A.id]===void 0)continue;const K=st[A.id];for(const ut in K)m(K[ut].object),delete K[ut];delete st[A.id]}}function B(){b(),u=!0,l!==r&&(l=r,p(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function gR(o,t,e){let i;function r(p){i=p}function l(p,m){o.drawArrays(i,p,m),e.update(m,i,1)}function u(p,m,g){g!==0&&(o.drawArraysInstanced(i,p,m,g),e.update(m,i,g))}function f(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,m,0,g);let S=0;for(let E=0;E<g;E++)S+=m[E];e.update(S,i,1)}function d(p,m,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],m[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(i,p,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];e.update(E,i,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function vR(o,t,e,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(N){return!(N!==$i&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const B=N===bc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ka&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==qa&&!B)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:O,maxSamples:P}}function yR(o){const t=this;let e=null,i=0,r=!1,l=!1;const u=new Cr,f=new he,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||i!==0||r;return r=v,i=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=m(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,y=o.get(g);if(!r||E===null||E.length===0||l&&!x)l?m(null):p();else{const L=l?0:i,U=L*4;let R=y.clippingState||null;d.value=R,R=m(E,v,U,S);for(let O=0;O!==U;++O)R[O]=e[O];y.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(g,v,S,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const y=S+M*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let U=0,R=S;U!==M;++U,R+=4)u.copy(g[U]).applyMatrix4(L,f),u.normal.toArray(x,R),x[R+3]=u.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function SR(o){let t=new WeakMap;function e(u,f){return f===Wp?u.mapping=Wo:f===Yp&&(u.mapping=Yo),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===Wp||f===Yp)if(t.has(u)){const d=t.get(u).texture;return e(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Tb(d.height);return p.fromEquirectangularTexture(o,u),t.set(u,p),u.addEventListener("dispose",r),e(p.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const Po=4,Ty=[.125,.215,.35,.446,.526,.582],Ts=20,Mp=new pf,by=new Pe;let Ep=null,Tp=0,bp=0,Ap=!1;const Ss=(1+Math.sqrt(5))/2,Oo=1/Ss,Ay=[new nt(-Ss,Oo,0),new nt(Ss,Oo,0),new nt(-Oo,0,Ss),new nt(Oo,0,Ss),new nt(0,Ss,-Oo),new nt(0,Ss,Oo),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],xR=new nt;class Ry{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,l={}){const{size:u=256,position:f=xR}=l;Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,r,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ep,Tp,bp),this._renderer.xr.enabled=Ap,t.scissorTest=!1,rf(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wo||t.mapping===Yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:da,minFilter:da,generateMipmaps:!1,type:bc,format:$i,colorSpace:Zo,depthBuffer:!1},r=Cy(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cy(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MR(l)),this._blurMaterial=ER(l,t,e)}return r}_compileMaterial(t){const e=new Ti(this._lodPlanes[0],t);this._renderer.compile(e,Mp)}_sceneToCubeUV(t,e,i,r,l){const d=new Qn(90,1,e,i),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(by),g.toneMapping=Pr,g.autoClear=!1;const E=new Es({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),M=new Ti(new Ps,E);let x=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,x=!0):(E.color.copy(by),x=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):U===1?(d.up.set(0,0,p[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,p[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const R=this._cubeSize;rf(r,U*R,L>2?R:0,R,R),g.setRenderTarget(r),x&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=v,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Wo||t.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wy());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new Ti(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;rf(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(u,Mp)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Ay[(r-l-1)%Ay.length];this._blur(t,l-1,l,u,f)}e.autoClear=i}_blur(t,e,i,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,r,"latitudinal",l),this._halfBlur(u,t,i,i,r,"longitudinal",l)}_halfBlur(t,e,i,r,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ti(this._lodPlanes[r],p),v=p.uniforms,S=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Ts-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):Ts;x>Ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const y=[];let L=0;for(let N=0;N<Ts;++N){const B=N/M,b=Math.exp(-B*B/2);y.push(b),N===0?L+=b:N<x&&(L+=2*b)}for(let N=0;N<y.length;N++)y[N]=y[N]/L;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-i;const R=this._sizeLods[r],O=3*R*(r>U-Po?r-U+Po:0),P=4*(this._cubeSize-R);rf(e,O,P,3*R,2*R),d.setRenderTarget(e),d.render(g,Mp)}}function MR(o){const t=[],e=[],i=[];let r=o;const l=o-Po+1+Ty.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);e.push(f);let d=1/f;u>o-Po?d=Ty[u-o+Po-1]:u===0&&(d=0),i.push(d);const p=1/(f-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,E=6,M=3,x=2,y=1,L=new Float32Array(M*E*S),U=new Float32Array(x*E*S),R=new Float32Array(y*E*S);for(let P=0;P<S;P++){const N=P%3*2/3-1,B=P>2?0:-1,b=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];L.set(b,M*E*P),U.set(v,x*E*P);const A=[P,P,P,P,P,P];R.set(A,y*E*P)}const O=new na;O.setAttribute("position",new _a(L,M)),O.setAttribute("uv",new _a(U,x)),O.setAttribute("faceIndex",new _a(R,y)),t.push(O),r>Po&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cy(o,t,e){const i=new Os(o,t,e);return i.texture.mapping=Nf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rf(o,t,e,i,r){o.viewport.set(t,e,i,r),o.scissor.set(t,e,i,r)}function ER(o,t,e){const i=new Float32Array(Ts),r=new nt(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function wy(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Dy(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Qm(){return`

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
	`}function TR(o){let t=new WeakMap,e=null;function i(f){if(f&&f.isTexture){const d=f.mapping,p=d===Wp||d===Yp,m=d===Wo||d===Yo;if(p||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new Ry(o)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&r(S)?(e===null&&(e=new Ry(o)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:u}}function bR(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AR(o,t,e,i){const r={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,e.memory.geometries++),v}function d(g){const v=g.attributes;for(const S in v)t.update(v[S],o.ARRAY_BUFFER)}function p(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const L=S.array;M=S.version;for(let U=0,R=L.length;U<R;U+=3){const O=L[U+0],P=L[U+1],N=L[U+2];v.push(O,P,P,N,N,O)}}else if(E!==void 0){const L=E.array;M=E.version;for(let U=0,R=L.length/3-1;U<R;U+=3){const O=U+0,P=U+1,N=U+2;v.push(O,P,P,N,N,O)}}else return;const x=new(wS(v)?OS:US)(v,1);x.version=M;const y=l.get(g);y&&t.remove(y),l.set(g,x)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function RR(o,t,e){let i;function r(v){i=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,S){o.drawElements(i,S,l,v*u),e.update(S,i,1)}function p(v,S,E){E!==0&&(o.drawElementsInstanced(i,S,l,v*u,E),e.update(S,i,E))}function m(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,l,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];e.update(x,i,1)}function g(v,S,E,M){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(i,S,0,l,v,0,M,0,E);let y=0;for(let L=0;L<E;L++)y+=S[L]*M[L];e.update(y,i,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function CR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wR(o,t,e){const i=new WeakMap,r=new on;function l(u,f,d){const p=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let A=function(){B.dispose(),i.delete(f),f.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),x===!0&&(R=3);let O=f.attributes.position.count*R,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*P*4*g),B=new DS(N,O,P,g);B.type=qa,B.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const st=y[H],K=L[H],ut=U[H],ct=O*P*4*H;for(let X=0;X<st.count;X++){const $=X*b;E===!0&&(r.fromBufferAttribute(st,X),N[ct+$+0]=r.x,N[ct+$+1]=r.y,N[ct+$+2]=r.z,N[ct+$+3]=0),M===!0&&(r.fromBufferAttribute(K,X),N[ct+$+4]=r.x,N[ct+$+5]=r.y,N[ct+$+6]=r.z,N[ct+$+7]=0),x===!0&&(r.fromBufferAttribute(ut,X),N[ct+$+8]=r.x,N[ct+$+9]=r.y,N[ct+$+10]=r.z,N[ct+$+11]=ut.itemSize===4?r.w:1)}}v={count:g,texture:B,size:new pe(O,P)},i.set(f,v),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function DR(o,t,e,i){let r=new WeakMap;function l(d){const p=i.render.frame,m=d.geometry,g=t.get(d,m);if(r.get(g)!==p&&(t.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return g}function u(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:u}}const HS=new si,Ly=new BS(1,1),VS=new DS,GS=new ob,kS=new zS,Uy=[],Oy=[],Ny=new Float32Array(16),Py=new Float32Array(9),zy=new Float32Array(4);function al(o,t,e){const i=o[0];if(i<=0||i>0)return o;const r=t*e;let l=Uy[r];if(l===void 0&&(l=new Float32Array(r),Uy[r]=l),t!==0){i.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,o[u].toArray(l,f)}return l}function Mn(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function En(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Bf(o,t){let e=Oy[t];e===void 0&&(e=new Int32Array(t),Oy[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function LR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function UR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2fv(this.addr,t),En(e,t)}}function OR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;o.uniform3fv(this.addr,t),En(e,t)}}function NR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4fv(this.addr,t),En(e,t)}}function PR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;zy.set(i),o.uniformMatrix2fv(this.addr,!1,zy),En(e,i)}}function zR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;Py.set(i),o.uniformMatrix3fv(this.addr,!1,Py),En(e,i)}}function IR(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Mn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(e,t)}else{if(Mn(e,i))return;Ny.set(i),o.uniformMatrix4fv(this.addr,!1,Ny),En(e,i)}}function BR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function FR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2iv(this.addr,t),En(e,t)}}function HR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;o.uniform3iv(this.addr,t),En(e,t)}}function VR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4iv(this.addr,t),En(e,t)}}function GR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function kR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;o.uniform2uiv(this.addr,t),En(e,t)}}function XR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;o.uniform3uiv(this.addr,t),En(e,t)}}function WR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;o.uniform4uiv(this.addr,t),En(e,t)}}function YR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Ly.compareFunction=CS,l=Ly):l=HS,e.setTexture2D(t||l,r)}function qR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||GS,r)}function jR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||kS,r)}function ZR(o,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(o.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||VS,r)}function KR(o){switch(o){case 5126:return LR;case 35664:return UR;case 35665:return OR;case 35666:return NR;case 35674:return PR;case 35675:return zR;case 35676:return IR;case 5124:case 35670:return BR;case 35667:case 35671:return FR;case 35668:case 35672:return HR;case 35669:case 35673:return VR;case 5125:return GR;case 36294:return kR;case 36295:return XR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return ZR}}function QR(o,t){o.uniform1fv(this.addr,t)}function JR(o,t){const e=al(t,this.size,2);o.uniform2fv(this.addr,e)}function $R(o,t){const e=al(t,this.size,3);o.uniform3fv(this.addr,e)}function tC(o,t){const e=al(t,this.size,4);o.uniform4fv(this.addr,e)}function eC(o,t){const e=al(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function nC(o,t){const e=al(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function iC(o,t){const e=al(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function aC(o,t){o.uniform1iv(this.addr,t)}function rC(o,t){o.uniform2iv(this.addr,t)}function sC(o,t){o.uniform3iv(this.addr,t)}function oC(o,t){o.uniform4iv(this.addr,t)}function lC(o,t){o.uniform1uiv(this.addr,t)}function cC(o,t){o.uniform2uiv(this.addr,t)}function uC(o,t){o.uniform3uiv(this.addr,t)}function fC(o,t){o.uniform4uiv(this.addr,t)}function hC(o,t,e){const i=this.cache,r=t.length,l=Bf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||HS,l[u])}function dC(o,t,e){const i=this.cache,r=t.length,l=Bf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||GS,l[u])}function pC(o,t,e){const i=this.cache,r=t.length,l=Bf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||kS,l[u])}function mC(o,t,e){const i=this.cache,r=t.length,l=Bf(e,r);Mn(i,l)||(o.uniform1iv(this.addr,l),En(i,l));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||VS,l[u])}function _C(o){switch(o){case 5126:return QR;case 35664:return JR;case 35665:return $R;case 35666:return tC;case 35674:return eC;case 35675:return nC;case 35676:return iC;case 5124:case 35670:return aC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return lC;case 36294:return cC;case 36295:return uC;case 36296:return fC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return pC;case 36289:case 36303:case 36311:case 36292:return mC}}class gC{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=KR(e.type)}}class vC{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_C(e.type)}}class yC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(t,e[f.id],i)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function Iy(o,t){o.seq.push(t),o.map[t.id]=t}function SC(o,t,e){const i=o.name,r=i.length;for(Rp.lastIndex=0;;){const l=Rp.exec(i),u=Rp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===r){Iy(e,p===void 0?new gC(f,o,t):new vC(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new yC(f),Iy(e,g)),e=g}}}class mf{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=t.getActiveUniform(e,r),u=t.getUniformLocation(e,l.name);SC(l,u,this)}}setValue(t,e,i,r){const l=this.map[e];l!==void 0&&l.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let l=0,u=e.length;l!==u;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in e&&i.push(u)}return i}}function By(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const xC=37297;let MC=0;function EC(o,t){const e=o.split(`
`),i=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=r;u<l;u++){const f=u+1;i.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return i.join(`
`)}const Fy=new he;function TC(o){Ne._getMatrix(Fy,Ne.workingColorSpace,o);const t=`mat3( ${Fy.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Sf:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Hy(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),r=o.getShaderInfoLog(t).trim();if(i&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+EC(o.getShaderSource(t),u)}else return r}function bC(o,t){const e=TC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function AC(o,t){let e;switch(t){case UT:e="Linear";break;case OT:e="Reinhard";break;case NT:e="Cineon";break;case PT:e="ACESFilmic";break;case IT:e="AgX";break;case BT:e="Neutral";break;case zT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sf=new nt;function RC(){Ne.getLuminanceCoefficients(sf);const o=sf.x.toFixed(4),t=sf.y.toFixed(4),e=sf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fc).join(`
`)}function wC(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function DC(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const l=o.getActiveAttrib(t,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return e}function fc(o){return o!==""}function Vy(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(o){return o.replace(LC,OC)}const UC=new Map;function OC(o,t){let e=de[t];if(e===void 0){const i=UC.get(t);if(i!==void 0)e=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Em(e)}const NC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ky(o){return o.replace(NC,PC)}function PC(o,t,e,i){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Xy(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function zC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===fT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ga&&(t="SHADOWMAP_TYPE_VSM"),t}function IC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wo:case Yo:t="ENVMAP_TYPE_CUBE";break;case Nf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yo:t="ENVMAP_MODE_REFRACTION";break}return t}function FC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _S:t="ENVMAP_BLENDING_MULTIPLY";break;case DT:t="ENVMAP_BLENDING_MIX";break;case LT:t="ENVMAP_BLENDING_ADD";break}return t}function HC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function VC(o,t,e,i){const r=o.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const d=zC(e),p=IC(e),m=BC(e),g=FC(e),v=HC(e),S=CC(e),E=wC(l),M=r.createProgram();let x,y,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(fc).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(fc).join(`
`),y.length>0&&(y+=`
`)):(x=[Xy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fc).join(`
`),y=[Xy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pr?"#define TONE_MAPPING":"",e.toneMapping!==Pr?de.tonemapping_pars_fragment:"",e.toneMapping!==Pr?AC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,bC("linearToOutputTexel",e.outputColorSpace),RC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fc).join(`
`)),u=Em(u),u=Vy(u,e),u=Gy(u,e),f=Em(f),f=Vy(f,e),f=Gy(f,e),u=ky(u),f=ky(f),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",e.glslVersion===ty?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ty?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=L+x+u,R=L+y+f,O=By(r,r.VERTEX_SHADER,U),P=By(r,r.FRAGMENT_SHADER,R);r.attachShader(M,O),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(H){if(o.debug.checkShaderErrors){const st=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(O).trim(),ut=r.getShaderInfoLog(P).trim();let ct=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,O,P);else{const $=Hy(r,O,"vertex"),W=Hy(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+$+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(K===""||ut==="")&&(X=!1);X&&(H.diagnostics={runnable:ct,programLog:st,vertexShader:{log:K,prefix:x},fragmentShader:{log:ut,prefix:y}})}r.deleteShader(O),r.deleteShader(P),B=new mf(r,M),b=DC(r,M)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(M,xC)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=MC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let GC=0;class kC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new XC(t),e.set(t,i)),i}}class XC{constructor(t){this.id=GC++,this.code=t,this.usedTimes=0}}function WC(o,t,e,i,r,l,u){const f=new Zm,d=new kC,p=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,A,H,st,K){const ut=st.fog,ct=K.geometry,X=b.isMeshStandardMaterial?st.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),W=$&&$.mapping===Nf?$.image.height:null,yt=E[b.type];b.precision!==null&&(S=r.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const z=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,it=z!==void 0?z.length:0;let Et=0;ct.morphAttributes.position!==void 0&&(Et=1),ct.morphAttributes.normal!==void 0&&(Et=2),ct.morphAttributes.color!==void 0&&(Et=3);let Ct,q,dt,xt;if(yt){const ge=fa[yt];Ct=ge.vertexShader,q=ge.fragmentShader}else Ct=b.vertexShader,q=b.fragmentShader,d.update(b),dt=d.getVertexShaderID(b),xt=d.getFragmentShaderID(b);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,zt=K.isBatchedMesh===!0,Ae=!!b.map,we=!!b.matcap,se=!!$,G=!!b.aoMap,mn=!!b.lightMap,ce=!!b.bumpMap,ue=!!b.normalMap,Yt=!!b.displacementMap,De=!!b.emissiveMap,qt=!!b.metalnessMap,I=!!b.roughnessMap,C=b.anisotropy>0,at=b.clearcoat>0,pt=b.dispersion>0,Mt=b.iridescence>0,gt=b.sheen>0,Xt=b.transmission>0,Dt=C&&!!b.anisotropyMap,Ht=at&&!!b.clearcoatMap,_e=at&&!!b.clearcoatNormalMap,At=at&&!!b.clearcoatRoughnessMap,Vt=Mt&&!!b.iridescenceMap,Jt=Mt&&!!b.iridescenceThicknessMap,Wt=gt&&!!b.sheenColorMap,Ft=gt&&!!b.sheenRoughnessMap,k=!!b.specularMap,ft=!!b.specularColorMap,Nt=!!b.specularIntensityMap,V=Xt&&!!b.transmissionMap,bt=Xt&&!!b.thicknessMap,lt=!!b.gradientMap,_t=!!b.alphaMap,Ut=b.alphaTest>0,Ot=!!b.alphaHash,Zt=!!b.extensions;let Re=Pr;b.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Re=o.toneMapping);const Xe={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:Ct,fragmentShader:q,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:zt,batchingColor:zt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Zo,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:we,envMap:se,envMapMode:se&&$.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:mn,bumpMap:ce,normalMap:ue,displacementMap:v&&Yt,emissiveMap:De,normalMapObjectSpace:ue&&b.normalMapType===kT,normalMapTangentSpace:ue&&b.normalMapType===GT,metalnessMap:qt,roughnessMap:I,anisotropy:C,anisotropyMap:Dt,clearcoat:at,clearcoatMap:Ht,clearcoatNormalMap:_e,clearcoatRoughnessMap:At,dispersion:pt,iridescence:Mt,iridescenceMap:Vt,iridescenceThicknessMap:Jt,sheen:gt,sheenColorMap:Wt,sheenRoughnessMap:Ft,specularMap:k,specularColorMap:ft,specularIntensityMap:Nt,transmission:Xt,transmissionMap:V,thicknessMap:bt,gradientMap:lt,opaque:b.transparent===!1&&b.blending===Bo&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ut,alphaHash:Ot,combine:b.combine,mapUv:Ae&&M(b.map.channel),aoMapUv:G&&M(b.aoMap.channel),lightMapUv:mn&&M(b.lightMap.channel),bumpMapUv:ce&&M(b.bumpMap.channel),normalMapUv:ue&&M(b.normalMap.channel),displacementMapUv:Yt&&M(b.displacementMap.channel),emissiveMapUv:De&&M(b.emissiveMap.channel),metalnessMapUv:qt&&M(b.metalnessMap.channel),roughnessMapUv:I&&M(b.roughnessMap.channel),anisotropyMapUv:Dt&&M(b.anisotropyMap.channel),clearcoatMapUv:Ht&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(b.sheenRoughnessMap.channel),specularMapUv:k&&M(b.specularMap.channel),specularColorMapUv:ft&&M(b.specularColorMap.channel),specularIntensityMapUv:Nt&&M(b.specularIntensityMap.channel),transmissionMapUv:V&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:_t&&M(b.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ue||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ct.attributes.uv&&(Ae||_t),fog:!!ut,useFog:b.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:wt,skinning:K.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&Ne.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wa,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function y(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(L(A,b),U(A,b),A.push(o.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function L(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function U(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=E[b.type];let H;if(A){const st=fa[A];H=Sb.clone(st.uniforms)}else H=b.uniforms;return H}function O(b,A){let H;for(let st=0,K=m.length;st<K;st++){const ut=m[st];if(ut.cacheKey===A){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new VC(o,A,b,l),m.push(H)),H}function P(b){if(--b.usedTimes===0){const A=m.indexOf(b);m[A]=m[m.length-1],m.pop(),b.destroy()}}function N(b){d.remove(b)}function B(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:R,acquireProgram:O,releaseProgram:P,releaseShaderCache:N,programs:m,dispose:B}}function YC(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function i(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:l}}function qC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Wy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Yy(){const o=[];let t=0;const e=[],i=[],r=[];function l(){t=0,e.length=0,i.length=0,r.length=0}function u(g,v,S,E,M,x){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:x},o[t]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=x),t++,y}function f(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?i.push(y):S.transparent===!0?r.push(y):e.push(y)}function d(g,v,S,E,M,x){const y=u(g,v,S,E,M,x);S.transmission>0?i.unshift(y):S.transparent===!0?r.unshift(y):e.unshift(y)}function p(g,v){e.length>1&&e.sort(g||qC),i.length>1&&i.sort(v||Wy),r.length>1&&r.sort(v||Wy)}function m(){for(let g=t,v=o.length;g<v;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:i,transparent:r,init:l,push:f,unshift:d,finish:m,sort:p}}function jC(){let o=new WeakMap;function t(i,r){const l=o.get(i);let u;return l===void 0?(u=new Yy,o.set(i,[u])):r>=l.length?(u=new Yy,l.push(u)):u=l[r],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function ZC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new Pe};break;case"SpotLight":e={position:new nt,direction:new nt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":e={color:new Pe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=e,e}}}function KC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let QC=0;function JC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $C(o){const t=new ZC,e=KC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new nt);const r=new nt,l=new nn,u=new nn;function f(p){let m=0,g=0,v=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let S=0,E=0,M=0,x=0,y=0,L=0,U=0,R=0,O=0,P=0,N=0;p.sort(JC);for(let b=0,A=p.length;b<A;b++){const H=p[b],st=H.color,K=H.intensity,ut=H.distance,ct=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=st.r*K,g+=st.g*K,v+=st.b*K;else if(H.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(H.sh.coefficients[X],K);N++}else if(H.isDirectionalLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[S]=W,i.directionalShadowMap[S]=ct,i.directionalShadowMatrix[S]=H.shadow.matrix,L++}i.directional[S]=X,S++}else if(H.isSpotLight){const X=t.get(H);X.position.setFromMatrixPosition(H.matrixWorld),X.color.copy(st).multiplyScalar(K),X.distance=ut,X.coneCos=Math.cos(H.angle),X.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),X.decay=H.decay,i.spot[M]=X;const $=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,$.updateMatrices(H),H.castShadow&&P++),i.spotLightMatrix[M]=$.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=ct,R++}M++}else if(H.isRectAreaLight){const X=t.get(H);X.color.copy(st).multiplyScalar(K),X.halfWidth.set(H.width*.5,0,0),X.halfHeight.set(0,H.height*.5,0),i.rectArea[x]=X,x++}else if(H.isPointLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),X.distance=H.distance,X.decay=H.decay,H.castShadow){const $=H.shadow,W=e.get(H);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=ct,i.pointShadowMatrix[E]=H.shadow.matrix,U++}i.point[E]=X,E++}else if(H.isHemisphereLight){const X=t.get(H);X.skyColor.copy(H.color).multiplyScalar(K),X.groundColor.copy(H.groundColor).multiplyScalar(K),i.hemi[y]=X,y++}}x>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==y||B.numDirectionalShadows!==L||B.numPointShadows!==U||B.numSpotShadows!==R||B.numSpotMaps!==O||B.numLightProbes!==N)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=x,i.point.length=E,i.hemi.length=y,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,B.directionalLength=S,B.pointLength=E,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=y,B.numDirectionalShadows=L,B.numPointShadows=U,B.numSpotShadows=R,B.numSpotMaps=O,B.numLightProbes=N,i.version=QC++)}function d(p,m){let g=0,v=0,S=0,E=0,M=0;const x=m.matrixWorldInverse;for(let y=0,L=p.length;y<L;y++){const U=p[y];if(U.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),g++}else if(U.isSpotLight){const R=i.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),S++}else if(U.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),u.identity(),l.copy(U.matrixWorld),l.premultiply(x),u.extractRotation(l),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const R=i.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),v++}else if(U.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(x),M++}}}return{setup:f,setupView:d,state:i}}function qy(o){const t=new $C(o),e=[],i=[];function r(m){p.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function u(m){i.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}const p={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function tw(o){let t=new WeakMap;function e(r,l=0){const u=t.get(r);let f;return u===void 0?(f=new qy(o),t.set(r,[f])):l>=u.length?(f=new qy(o),u.push(f)):f=u[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
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
}`;function iw(o,t,e){let i=new IS;const r=new pe,l=new pe,u=new on,f=new wb({depthPacking:VT}),d=new Db,p={},m=e.maxTextureSize,g={[Br]:ri,[ri]:Br,[Wa]:Wa},v=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:ew,fragmentShader:nw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new na;E.setAttribute("position",new _a(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ti(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mS;let y=this.type;this.render=function(P,N,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Nr),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const K=y!==Ga&&this.type===Ga,ut=y===Ga&&this.type!==Ga;for(let ct=0,X=P.length;ct<X;ct++){const $=P[ct],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const yt=W.getFrameExtents();if(r.multiply(yt),l.copy(W.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/yt.x),r.x=l.x*yt.x,W.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/yt.y),r.y=l.y*yt.y,W.mapSize.y=l.y)),W.map===null||K===!0||ut===!0){const it=this.type!==Ga?{minFilter:ta,magFilter:ta}:{};W.map!==null&&W.map.dispose(),W.map=new Os(r.x,r.y,it),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const z=W.getViewportCount();for(let it=0;it<z;it++){const Et=W.getViewport(it);u.set(l.x*Et.x,l.y*Et.y,l.x*Et.z,l.y*Et.w),st.viewport(u),W.updateMatrices($,it),i=W.getFrustum(),R(N,B,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Ga&&L(W,B),W.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(b,A,H)};function L(P,N){const B=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Os(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,B,v,M,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,B,S,M,null)}function U(P,N,B,b){let A=null;const H=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)A=H;else if(A=B.isPointLight===!0?d:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const st=A.uuid,K=N.uuid;let ut=p[st];ut===void 0&&(ut={},p[st]=ut);let ct=ut[K];ct===void 0&&(ct=A.clone(),ut[K]=ct,N.addEventListener("dispose",O)),A=ct}if(A.visible=N.visible,A.wireframe=N.wireframe,b===Ga?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:g[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=B}return A}function R(P,N,B,b,A){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ga)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const K=t.update(P),ut=P.material;if(Array.isArray(ut)){const ct=K.groups;for(let X=0,$=ct.length;X<$;X++){const W=ct[X],yt=ut[W.materialIndex];if(yt&&yt.visible){const z=U(P,yt,b,A);P.onBeforeShadow(o,P,N,B,K,z,W),o.renderBufferDirect(B,null,K,z,P,W),P.onAfterShadow(o,P,N,B,K,z,W)}}}else if(ut.visible){const ct=U(P,ut,b,A);P.onBeforeShadow(o,P,N,B,K,ct,null),o.renderBufferDirect(B,null,K,ct,P,null),P.onAfterShadow(o,P,N,B,K,ct,null)}}const st=P.children;for(let K=0,ut=st.length;K<ut;K++)R(st[K],N,B,b,A)}function O(P){P.target.removeEventListener("dispose",O);for(const B in p){const b=p[B],A=P.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const aw={[Bp]:Fp,[Hp]:kp,[Vp]:Xp,[Xo]:Gp,[Fp]:Bp,[kp]:Hp,[Xp]:Vp,[Gp]:Xo};function rw(o,t){function e(){let V=!1;const bt=new on;let lt=null;const _t=new on(0,0,0,0);return{setMask:function(Ut){lt!==Ut&&!V&&(o.colorMask(Ut,Ut,Ut,Ut),lt=Ut)},setLocked:function(Ut){V=Ut},setClear:function(Ut,Ot,Zt,Re,Xe){Xe===!0&&(Ut*=Re,Ot*=Re,Zt*=Re),bt.set(Ut,Ot,Zt,Re),_t.equals(bt)===!1&&(o.clearColor(Ut,Ot,Zt,Re),_t.copy(bt))},reset:function(){V=!1,lt=null,_t.set(-1,0,0,0)}}}function i(){let V=!1,bt=!1,lt=null,_t=null,Ut=null;return{setReversed:function(Ot){if(bt!==Ot){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Re=Ut;Ut=null,this.setClear(Re)}bt=Ot},getReversed:function(){return bt},setTest:function(Ot){Ot?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!V&&(o.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(bt&&(Ot=aw[Ot]),_t!==Ot){switch(Ot){case Bp:o.depthFunc(o.NEVER);break;case Fp:o.depthFunc(o.ALWAYS);break;case Hp:o.depthFunc(o.LESS);break;case Xo:o.depthFunc(o.LEQUAL);break;case Vp:o.depthFunc(o.EQUAL);break;case Gp:o.depthFunc(o.GEQUAL);break;case kp:o.depthFunc(o.GREATER);break;case Xp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ot}},setLocked:function(Ot){V=Ot},setClear:function(Ot){Ut!==Ot&&(bt&&(Ot=1-Ot),o.clearDepth(Ot),Ut=Ot)},reset:function(){V=!1,lt=null,_t=null,Ut=null,bt=!1}}}function r(){let V=!1,bt=null,lt=null,_t=null,Ut=null,Ot=null,Zt=null,Re=null,Xe=null;return{setTest:function(ge){V||(ge?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(ge){bt!==ge&&!V&&(o.stencilMask(ge),bt=ge)},setFunc:function(ge,an,ln){(lt!==ge||_t!==an||Ut!==ln)&&(o.stencilFunc(ge,an,ln),lt=ge,_t=an,Ut=ln)},setOp:function(ge,an,ln){(Ot!==ge||Zt!==an||Re!==ln)&&(o.stencilOp(ge,an,ln),Ot=ge,Zt=an,Re=ln)},setLocked:function(ge){V=ge},setClear:function(ge){Xe!==ge&&(o.clearStencil(ge),Xe=ge)},reset:function(){V=!1,bt=null,lt=null,_t=null,Ut=null,Ot=null,Zt=null,Re=null,Xe=null}}}const l=new e,u=new i,f=new r,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,L=null,U=null,R=null,O=null,P=null,N=new Pe(0,0,0),B=0,b=!1,A=null,H=null,st=null,K=null,ut=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=$>=2);let yt=null,z={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Ct=new on().fromArray(it),q=new on().fromArray(Et);function dt(V,bt,lt,_t){const Ut=new Uint8Array(4),Ot=o.createTexture();o.bindTexture(V,Ot),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<lt;Zt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(bt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return Ot}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Rt(o.DEPTH_TEST),u.setFunc(Xo),ce(!1),ue(jv),Rt(o.CULL_FACE),G(Nr);function Rt(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function wt(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function te(V,bt){return g[V]!==bt?(o.bindFramebuffer(V,bt),g[V]=bt,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function zt(V,bt){let lt=S,_t=!1;if(V){lt=v.get(bt),lt===void 0&&(lt=[],v.set(bt,lt));const Ut=V.textures;if(lt.length!==Ut.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Ot=0,Zt=Ut.length;Ot<Zt;Ot++)lt[Ot]=o.COLOR_ATTACHMENT0+Ot;lt.length=Ut.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Ae(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const we={[Ms]:o.FUNC_ADD,[dT]:o.FUNC_SUBTRACT,[pT]:o.FUNC_REVERSE_SUBTRACT};we[mT]=o.MIN,we[_T]=o.MAX;const se={[gT]:o.ZERO,[vT]:o.ONE,[yT]:o.SRC_COLOR,[zp]:o.SRC_ALPHA,[bT]:o.SRC_ALPHA_SATURATE,[ET]:o.DST_COLOR,[xT]:o.DST_ALPHA,[ST]:o.ONE_MINUS_SRC_COLOR,[Ip]:o.ONE_MINUS_SRC_ALPHA,[TT]:o.ONE_MINUS_DST_COLOR,[MT]:o.ONE_MINUS_DST_ALPHA,[AT]:o.CONSTANT_COLOR,[RT]:o.ONE_MINUS_CONSTANT_COLOR,[CT]:o.CONSTANT_ALPHA,[wT]:o.ONE_MINUS_CONSTANT_ALPHA};function G(V,bt,lt,_t,Ut,Ot,Zt,Re,Xe,ge){if(V===Nr){M===!0&&(wt(o.BLEND),M=!1);return}if(M===!1&&(Rt(o.BLEND),M=!0),V!==hT){if(V!==x||ge!==b){if((y!==Ms||R!==Ms)&&(o.blendEquation(o.FUNC_ADD),y=Ms,R=Ms),ge)switch(V){case Bo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zv:o.blendFunc(o.ONE,o.ONE);break;case Kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Qv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Qv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,U=null,O=null,P=null,N.set(0,0,0),B=0,x=V,b=ge}return}Ut=Ut||bt,Ot=Ot||lt,Zt=Zt||_t,(bt!==y||Ut!==R)&&(o.blendEquationSeparate(we[bt],we[Ut]),y=bt,R=Ut),(lt!==L||_t!==U||Ot!==O||Zt!==P)&&(o.blendFuncSeparate(se[lt],se[_t],se[Ot],se[Zt]),L=lt,U=_t,O=Ot,P=Zt),(Re.equals(N)===!1||Xe!==B)&&(o.blendColor(Re.r,Re.g,Re.b,Xe),N.copy(Re),B=Xe),x=V,b=!1}function mn(V,bt){V.side===Wa?wt(o.CULL_FACE):Rt(o.CULL_FACE);let lt=V.side===ri;bt&&(lt=!lt),ce(lt),V.blending===Bo&&V.transparent===!1?G(Nr):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const _t=V.stencilWrite;f.setTest(_t),_t&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function ue(V){V!==cT?(Rt(o.CULL_FACE),V!==H&&(V===jv?o.cullFace(o.BACK):V===uT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=V}function Yt(V){V!==st&&(X&&o.lineWidth(V),st=V)}function De(V,bt,lt){V?(Rt(o.POLYGON_OFFSET_FILL),(K!==bt||ut!==lt)&&(o.polygonOffset(bt,lt),K=bt,ut=lt)):wt(o.POLYGON_OFFSET_FILL)}function qt(V){V?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function I(V){V===void 0&&(V=o.TEXTURE0+ct-1),yt!==V&&(o.activeTexture(V),yt=V)}function C(V,bt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+ct-1:lt=yt);let _t=z[lt];_t===void 0&&(_t={type:void 0,texture:void 0},z[lt]=_t),(_t.type!==V||_t.texture!==bt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(V,bt||xt[V]),_t.type=V,_t.texture=bt)}function at(){const V=z[yt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pt(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(V){Ct.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Ft(V){q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function k(V,bt){let lt=p.get(bt);lt===void 0&&(lt=new WeakMap,p.set(bt,lt));let _t=lt.get(V);_t===void 0&&(_t=o.getUniformBlockIndex(bt,V.name),lt.set(V,_t))}function ft(V,bt){const _t=p.get(bt).get(V);d.get(bt)!==_t&&(o.uniformBlockBinding(bt,_t,V.__bindingPointIndex),d.set(bt,_t))}function Nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},yt=null,z={},g={},v=new WeakMap,S=[],E=null,M=!1,x=null,y=null,L=null,U=null,R=null,O=null,P=null,N=new Pe(0,0,0),B=0,b=!1,A=null,H=null,st=null,K=null,ut=null,Ct.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Rt,disable:wt,bindFramebuffer:te,drawBuffers:zt,useProgram:Ae,setBlending:G,setMaterial:mn,setFlipSided:ce,setCullFace:ue,setLineWidth:Yt,setPolygonOffset:De,setScissorTest:qt,activeTexture:I,bindTexture:C,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Vt,texImage3D:Jt,updateUBOMapping:k,uniformBlockBinding:ft,texStorage2D:_e,texStorage3D:At,texSubImage2D:gt,texSubImage3D:Xt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ht,scissor:Wt,viewport:Ft,reset:Nt}}function sw(o,t,e,i,r,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,C){return S?new OffscreenCanvas(I,C):Mf("canvas")}function M(I,C,at){let pt=1;const Mt=qt(I);if((Mt.width>at||Mt.height>at)&&(pt=at/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const gt=Math.floor(pt*Mt.width),Xt=Math.floor(pt*Mt.height);g===void 0&&(g=E(gt,Xt));const Dt=C?E(gt,Xt):g;return Dt.width=gt,Dt.height=Xt,Dt.getContext("2d").drawImage(I,0,0,gt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Xt+")."),Dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function x(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(I,C,at,pt,Mt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=C;if(C===o.RED&&(at===o.FLOAT&&(gt=o.R32F),at===o.HALF_FLOAT&&(gt=o.R16F),at===o.UNSIGNED_BYTE&&(gt=o.R8)),C===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.R8UI),at===o.UNSIGNED_SHORT&&(gt=o.R16UI),at===o.UNSIGNED_INT&&(gt=o.R32UI),at===o.BYTE&&(gt=o.R8I),at===o.SHORT&&(gt=o.R16I),at===o.INT&&(gt=o.R32I)),C===o.RG&&(at===o.FLOAT&&(gt=o.RG32F),at===o.HALF_FLOAT&&(gt=o.RG16F),at===o.UNSIGNED_BYTE&&(gt=o.RG8)),C===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RG8UI),at===o.UNSIGNED_SHORT&&(gt=o.RG16UI),at===o.UNSIGNED_INT&&(gt=o.RG32UI),at===o.BYTE&&(gt=o.RG8I),at===o.SHORT&&(gt=o.RG16I),at===o.INT&&(gt=o.RG32I)),C===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),at===o.UNSIGNED_INT&&(gt=o.RGB32UI),at===o.BYTE&&(gt=o.RGB8I),at===o.SHORT&&(gt=o.RGB16I),at===o.INT&&(gt=o.RGB32I)),C===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),at===o.UNSIGNED_INT&&(gt=o.RGBA32UI),at===o.BYTE&&(gt=o.RGBA8I),at===o.SHORT&&(gt=o.RGBA16I),at===o.INT&&(gt=o.RGBA32I)),C===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),C===o.RGBA){const Xt=Mt?Sf:Ne.getTransfer(pt);at===o.FLOAT&&(gt=o.RGBA32F),at===o.HALF_FLOAT&&(gt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(gt=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(I,C){let at;return I?C===null||C===Us||C===qo?at=o.DEPTH24_STENCIL8:C===qa?at=o.DEPTH32F_STENCIL8:C===gc&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Us||C===qo?at=o.DEPTH_COMPONENT24:C===qa?at=o.DEPTH_COMPONENT32F:C===gc&&(at=o.DEPTH_COMPONENT16),at}function O(I,C){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==ta&&I.minFilter!==da?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function P(I){const C=I.target;C.removeEventListener("dispose",P),B(C),C.isVideoTexture&&m.delete(C)}function N(I){const C=I.target;C.removeEventListener("dispose",N),A(C)}function B(I){const C=i.get(I);if(C.__webglInit===void 0)return;const at=I.source,pt=v.get(at);if(pt){const Mt=pt[C.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&b(I),Object.keys(pt).length===0&&v.delete(at)}i.remove(I)}function b(I){const C=i.get(I);o.deleteTexture(C.__webglTexture);const at=I.source,pt=v.get(at);delete pt[C.__cacheKey],u.memory.textures--}function A(I){const C=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(C.__webglFramebuffer[pt]))for(let Mt=0;Mt<C.__webglFramebuffer[pt].length;Mt++)o.deleteFramebuffer(C.__webglFramebuffer[pt][Mt]);else o.deleteFramebuffer(C.__webglFramebuffer[pt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[pt])}else{if(Array.isArray(C.__webglFramebuffer))for(let pt=0;pt<C.__webglFramebuffer.length;pt++)o.deleteFramebuffer(C.__webglFramebuffer[pt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pt=0;pt<C.__webglColorRenderbuffer.length;pt++)C.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[pt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const at=I.textures;for(let pt=0,Mt=at.length;pt<Mt;pt++){const gt=i.get(at[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),u.memory.textures--),i.remove(at[pt])}i.remove(I)}let H=0;function st(){H=0}function K(){const I=H;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),H+=1,I}function ut(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function ct(I,C){const at=i.get(I);if(I.isVideoTexture&&Yt(I),I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(at,I,C);return}}e.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+C)}function X(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){q(at,I,C);return}e.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+C)}function $(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){q(at,I,C);return}e.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+C)}function W(I,C){const at=i.get(I);if(I.version>0&&at.__version!==I.version){dt(at,I,C);return}e.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+C)}const yt={[qp]:o.REPEAT,[bs]:o.CLAMP_TO_EDGE,[jp]:o.MIRRORED_REPEAT},z={[ta]:o.NEAREST,[FT]:o.NEAREST_MIPMAP_NEAREST,[zu]:o.NEAREST_MIPMAP_LINEAR,[da]:o.LINEAR,[Qd]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},it={[XT]:o.NEVER,[KT]:o.ALWAYS,[WT]:o.LESS,[CS]:o.LEQUAL,[YT]:o.EQUAL,[ZT]:o.GEQUAL,[qT]:o.GREATER,[jT]:o.NOTEQUAL};function Et(I,C){if(C.type===qa&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===da||C.magFilter===Qd||C.magFilter===zu||C.magFilter===As||C.minFilter===da||C.minFilter===Qd||C.minFilter===zu||C.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,yt[C.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,yt[C.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,yt[C.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,z[C.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ta||C.minFilter!==zu&&C.minFilter!==As||C.type===qa&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ct(I,C){let at=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",P));const pt=C.source;let Mt=v.get(pt);Mt===void 0&&(Mt={},v.set(pt,Mt));const gt=ut(C);if(gt!==I.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,at=!0),Mt[gt].usedTimes++;const Xt=Mt[I.__cacheKey];Xt!==void 0&&(Mt[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&b(C)),I.__cacheKey=gt,I.__webglTexture=Mt[gt].texture}return at}function q(I,C,at){let pt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pt=o.TEXTURE_3D);const Mt=Ct(I,C),gt=C.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+at);const Xt=i.get(gt);if(gt.version!==Xt.__version||Mt===!0){e.activeTexture(o.TEXTURE0+at);const Dt=Ne.getPrimaries(Ne.workingColorSpace),Ht=C.colorSpace===Dr?null:Ne.getPrimaries(C.colorSpace),_e=C.colorSpace===Dr||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let At=M(C.image,!1,r.maxTextureSize);At=De(C,At);const Vt=l.convert(C.format,C.colorSpace),Jt=l.convert(C.type);let Wt=U(C.internalFormat,Vt,Jt,C.colorSpace,C.isVideoTexture);Et(pt,C);let Ft;const k=C.mipmaps,ft=C.isVideoTexture!==!0,Nt=Xt.__version===void 0||Mt===!0,V=gt.dataReady,bt=O(C,At);if(C.isDepthTexture)Wt=R(C.format===jo,C.type),Nt&&(ft?e.texStorage2D(o.TEXTURE_2D,1,Wt,At.width,At.height):e.texImage2D(o.TEXTURE_2D,0,Wt,At.width,At.height,0,Vt,Jt,null));else if(C.isDataTexture)if(k.length>0){ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Vt,Jt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Vt,Jt,Ft.data);C.generateMipmaps=!1}else ft?(Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,At.width,At.height),V&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Vt,Jt,At.data)):e.texImage2D(o.TEXTURE_2D,0,Wt,At.width,At.height,0,Vt,Jt,At.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Wt,k[0].width,k[0].height,At.depth);for(let lt=0,_t=k.length;lt<_t;lt++)if(Ft=k[lt],C.format!==$i)if(Vt!==null)if(ft){if(V)if(C.layerUpdates.size>0){const Ut=Ey(Ft.width,Ft.height,C.format,C.type);for(const Ot of C.layerUpdates){const Zt=Ft.data.subarray(Ot*Ut/Ft.data.BYTES_PER_ELEMENT,(Ot+1)*Ut/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Ot,Ft.width,Ft.height,1,Vt,Zt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Vt,Ft.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ft.width,Ft.height,At.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?V&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,At.depth,Vt,Jt,Ft.data):e.texImage3D(o.TEXTURE_2D_ARRAY,lt,Wt,Ft.width,Ft.height,At.depth,0,Vt,Jt,Ft.data)}else{ft&&Nt&&e.texStorage2D(o.TEXTURE_2D,bt,Wt,k[0].width,k[0].height);for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],C.format!==$i?Vt!==null?ft?V&&e.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Vt,Ft.data):e.compressedTexImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Vt,Jt,Ft.data):e.texImage2D(o.TEXTURE_2D,lt,Wt,Ft.width,Ft.height,0,Vt,Jt,Ft.data)}else if(C.isDataArrayTexture)if(ft){if(Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,bt,Wt,At.width,At.height,At.depth),V)if(C.layerUpdates.size>0){const lt=Ey(At.width,At.height,C.format,C.type);for(const _t of C.layerUpdates){const Ut=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Vt,Jt,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Vt,Jt,At.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,Vt,Jt,At.data);else if(C.isData3DTexture)ft?(Nt&&e.texStorage3D(o.TEXTURE_3D,bt,Wt,At.width,At.height,At.depth),V&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Vt,Jt,At.data)):e.texImage3D(o.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,Vt,Jt,At.data);else if(C.isFramebufferTexture){if(Nt)if(ft)e.texStorage2D(o.TEXTURE_2D,bt,Wt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let Ut=0;Ut<bt;Ut++)e.texImage2D(o.TEXTURE_2D,Ut,Wt,lt,_t,0,Vt,Jt,null),lt>>=1,_t>>=1}}else if(k.length>0){if(ft&&Nt){const lt=qt(k[0]);e.texStorage2D(o.TEXTURE_2D,bt,Wt,lt.width,lt.height)}for(let lt=0,_t=k.length;lt<_t;lt++)Ft=k[lt],ft?V&&e.texSubImage2D(o.TEXTURE_2D,lt,0,0,Vt,Jt,Ft):e.texImage2D(o.TEXTURE_2D,lt,Wt,Vt,Jt,Ft);C.generateMipmaps=!1}else if(ft){if(Nt){const lt=qt(At);e.texStorage2D(o.TEXTURE_2D,bt,Wt,lt.width,lt.height)}V&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,Jt,At)}else e.texImage2D(o.TEXTURE_2D,0,Wt,Vt,Jt,At);x(C)&&y(pt),Xt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dt(I,C,at){if(C.image.length!==6)return;const pt=Ct(I,C),Mt=C.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+at);const gt=i.get(Mt);if(Mt.version!==gt.__version||pt===!0){e.activeTexture(o.TEXTURE0+at);const Xt=Ne.getPrimaries(Ne.workingColorSpace),Dt=C.colorSpace===Dr?null:Ne.getPrimaries(C.colorSpace),Ht=C.colorSpace===Dr||Xt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const _e=C.isCompressedTexture||C.image[0].isCompressedTexture,At=C.image[0]&&C.image[0].isDataTexture,Vt=[];for(let _t=0;_t<6;_t++)!_e&&!At?Vt[_t]=M(C.image[_t],!0,r.maxCubemapSize):Vt[_t]=At?C.image[_t].image:C.image[_t],Vt[_t]=De(C,Vt[_t]);const Jt=Vt[0],Wt=l.convert(C.format,C.colorSpace),Ft=l.convert(C.type),k=U(C.internalFormat,Wt,Ft,C.colorSpace),ft=C.isVideoTexture!==!0,Nt=gt.__version===void 0||pt===!0,V=Mt.dataReady;let bt=O(C,Jt);Et(o.TEXTURE_CUBE_MAP,C);let lt;if(_e){ft&&Nt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,Jt.width,Jt.height);for(let _t=0;_t<6;_t++){lt=Vt[_t].mipmaps;for(let Ut=0;Ut<lt.length;Ut++){const Ot=lt[Ut];C.format!==$i?Wt!==null?ft?V&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ot.width,Ot.height,Wt,Ot.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,k,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ot.width,Ot.height,Wt,Ft,Ot.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,k,Ot.width,Ot.height,0,Wt,Ft,Ot.data)}}}else{if(lt=C.mipmaps,ft&&Nt){lt.length>0&&bt++;const _t=qt(Vt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,bt,k,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt[_t].width,Vt[_t].height,Wt,Ft,Vt[_t].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Vt[_t].width,Vt[_t].height,0,Wt,Ft,Vt[_t].data);for(let Ut=0;Ut<lt.length;Ut++){const Zt=lt[Ut].image[_t].image;ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Zt.width,Zt.height,Wt,Ft,Zt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,k,Zt.width,Zt.height,0,Wt,Ft,Zt.data)}}else{ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Ft,Vt[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,k,Wt,Ft,Vt[_t]);for(let Ut=0;Ut<lt.length;Ut++){const Ot=lt[Ut];ft?V&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Wt,Ft,Ot.image[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,k,Wt,Ft,Ot.image[_t])}}}x(C)&&y(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function xt(I,C,at,pt,Mt,gt){const Xt=l.convert(at.format,at.colorSpace),Dt=l.convert(at.type),Ht=U(at.internalFormat,Xt,Dt,at.colorSpace),_e=i.get(C),At=i.get(at);if(At.__renderTarget=C,!_e.__hasExternalTextures){const Vt=Math.max(1,C.width>>gt),Jt=Math.max(1,C.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?e.texImage3D(Mt,gt,Ht,Vt,Jt,C.depth,0,Xt,Dt,null):e.texImage2D(Mt,gt,Ht,Vt,Jt,0,Xt,Dt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,0,ce(C)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,gt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(I,C,at){if(o.bindRenderbuffer(o.RENDERBUFFER,I),C.depthBuffer){const pt=C.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,gt=R(C.stencilBuffer,Mt),Xt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ce(C);ue(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,gt,C.width,C.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,gt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,gt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,I)}else{const pt=C.textures;for(let Mt=0;Mt<pt.length;Mt++){const gt=pt[Mt],Xt=l.convert(gt.format,gt.colorSpace),Dt=l.convert(gt.type),Ht=U(gt.internalFormat,Xt,Dt,gt.colorSpace),_e=ce(C);at&&ue(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Ht,C.width,C.height):ue(C)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,Ht,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=i.get(C.depthTexture);pt.__renderTarget=C,(!pt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ct(C.depthTexture,0);const Mt=pt.__webglTexture,gt=ce(C);if(C.depthTexture.format===Fo)ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(C.depthTexture.format===jo)ue(C)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function te(I){const C=i.get(I),at=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pt){const Mt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),C.__depthDisposeCallback=Mt}C.__boundDepthTexture=pt}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,I)}else if(at){C.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[pt]),C.__webglDepthbuffer[pt]===void 0)C.__webglDepthbuffer[pt]=o.createRenderbuffer(),Rt(C.__webglDepthbuffer[pt],I,!1);else{const Mt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Rt(C.__webglDepthbuffer,I,!1);else{const pt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Mt)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(I,C,at){const pt=i.get(I);C!==void 0&&xt(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&te(I)}function Ae(I){const C=I.texture,at=i.get(I),pt=i.get(C);I.addEventListener("dispose",N);const Mt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=C.version,u.memory.textures++),gt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<C.mipmaps.length;Ht++)at.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else at.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<C.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Dt=0,Ht=Mt.length;Dt<Ht;Dt++){const _e=i.get(Mt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&ue(I)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Ht=Mt[Dt];at.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const _e=l.convert(Ht.format,Ht.colorSpace),At=l.convert(Ht.type),Vt=U(Ht.internalFormat,_e,At,Ht.colorSpace,I.isXRRenderTarget===!0),Jt=ce(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Vt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(at.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Et(o.TEXTURE_CUBE_MAP,C);for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)xt(at.__webglFramebuffer[Dt][Ht],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else xt(at.__webglFramebuffer[Dt],I,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(C)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Dt=0,Ht=Mt.length;Dt<Ht;Dt++){const _e=Mt[Dt],At=i.get(_e);e.bindTexture(o.TEXTURE_2D,At.__webglTexture),Et(o.TEXTURE_2D,_e),xt(at.__webglFramebuffer,I,_e,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),x(_e)&&y(o.TEXTURE_2D)}e.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Dt,pt.__webglTexture),Et(Dt,C),C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)xt(at.__webglFramebuffer[Ht],I,C,o.COLOR_ATTACHMENT0,Dt,Ht);else xt(at.__webglFramebuffer,I,C,o.COLOR_ATTACHMENT0,Dt,0);x(C)&&y(Dt),e.unbindTexture()}I.depthBuffer&&te(I)}function we(I){const C=I.textures;for(let at=0,pt=C.length;at<pt;at++){const Mt=C[at];if(x(Mt)){const gt=L(I),Xt=i.get(Mt).__webglTexture;e.bindTexture(gt,Xt),y(gt),e.unbindTexture()}}}const se=[],G=[];function mn(I){if(I.samples>0){if(ue(I)===!1){const C=I.textures,at=I.width,pt=I.height;let Mt=o.COLOR_BUFFER_BIT;const gt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=i.get(I),Dt=C.length>1;if(Dt)for(let Ht=0;Ht<C.length;Ht++)e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ht=0;Ht<C.length;Ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ht]);const _e=i.get(C[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,at,pt,0,0,at,pt,Mt,o.NEAREST),d===!0&&(se.length=0,G.length=0,se.push(o.COLOR_ATTACHMENT0+Ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(se.push(gt),G.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Ht=0;Ht<C.length;Ht++){e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ht]);const _e=i.get(C[Ht]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,_e,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const C=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function ce(I){return Math.min(r.maxSamples,I.samples)}function ue(I){const C=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Yt(I){const C=u.render.frame;m.get(I)!==C&&(m.set(I,C),I.update())}function De(I,C){const at=I.colorSpace,pt=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||at!==Zo&&at!==Dr&&(Ne.getTransfer(at)===Fe?(pt!==$i||Mt!==Ka)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),C}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=st,this.setTexture2D=ct,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=zt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ue}function ow(o,t){function e(i,r=Dr){let l;const u=Ne.getTransfer(r);if(i===Ka)return o.UNSIGNED_BYTE;if(i===km)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Xm)return o.UNSIGNED_SHORT_5_5_5_1;if(i===SS)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===vS)return o.BYTE;if(i===yS)return o.SHORT;if(i===gc)return o.UNSIGNED_SHORT;if(i===Gm)return o.INT;if(i===Us)return o.UNSIGNED_INT;if(i===qa)return o.FLOAT;if(i===bc)return o.HALF_FLOAT;if(i===xS)return o.ALPHA;if(i===MS)return o.RGB;if(i===$i)return o.RGBA;if(i===ES)return o.LUMINANCE;if(i===TS)return o.LUMINANCE_ALPHA;if(i===Fo)return o.DEPTH_COMPONENT;if(i===jo)return o.DEPTH_STENCIL;if(i===bS)return o.RED;if(i===Wm)return o.RED_INTEGER;if(i===AS)return o.RG;if(i===Ym)return o.RG_INTEGER;if(i===qm)return o.RGBA_INTEGER;if(i===cf||i===uf||i===ff||i===hf)if(u===Fe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===cf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===cf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zp||i===Kp||i===Qp||i===Jp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Zp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$p||i===tm||i===em)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===$p||i===tm)return u===Fe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===em)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nm||i===im||i===am||i===rm||i===sm||i===om||i===lm||i===cm||i===um||i===fm||i===hm||i===dm||i===pm||i===mm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===nm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===im)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===am)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===om)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===um)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mm)return u===Fe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===df||i===_m||i===gm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===df)return u===Fe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_m)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===RS||i===vm||i===ym||i===Sm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===df)return l.COMPRESSED_RED_RGTC1_EXT;if(i===vm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ym)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new si,l=t.properties.get(r);l.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Fr({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ti(new If(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fw extends il{constructor(t,e){super();const i=this;let r=null,l=1,u=null,f="local-floor",d=1,p=null,m=null,g=null,v=null,S=null,E=null;const M=new uw,x=e.getContextAttributes();let y=null,L=null;const U=[],R=[],O=new pe;let P=null;const N=new Qn;N.viewport=new on;const B=new Qn;B.viewport=new on;const b=[N,B],A=new Lb;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=U[q];return dt===void 0&&(dt=new yp,U[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=U[q];return dt===void 0&&(dt=new yp,U[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=U[q];return dt===void 0&&(dt=new yp,U[q]=dt),dt.getHandSpace()};function K(q){const dt=R.indexOf(q.inputSource);if(dt===-1)return;const xt=U[dt];xt!==void 0&&(xt.update(q.inputSource,q.frame,p||u),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function ut(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ut),r.removeEventListener("inputsourceschange",ct);for(let q=0;q<U.length;q++){const dt=R[q];dt!==null&&(R[q]=null,U[q].disconnect(dt))}H=null,st=null,M.reset(),t.setRenderTarget(y),S=null,v=null,g=null,r=null,L=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ut),r.addEventListener("inputsourceschange",ct),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Rt=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?jo:Fo,Rt=x.stencil?qo:Us);const te={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:l};g=new XRWebGLBinding(r,e),v=g.createProjectionLayer(te),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Os(v.textureWidth,v.textureHeight,{format:$i,type:Ka,depthTexture:new BS(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Os(S.framebufferWidth,S.framebufferHeight,{format:$i,type:Ka,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(f),Ct.setContext(r),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ct(q){for(let dt=0;dt<q.removed.length;dt++){const xt=q.removed[dt],Rt=R.indexOf(xt);Rt>=0&&(R[Rt]=null,U[Rt].disconnect(xt))}for(let dt=0;dt<q.added.length;dt++){const xt=q.added[dt];let Rt=R.indexOf(xt);if(Rt===-1){for(let te=0;te<U.length;te++)if(te>=R.length){R.push(xt),Rt=te;break}else if(R[te]===null){R[te]=xt,Rt=te;break}if(Rt===-1)break}const wt=U[Rt];wt&&wt.connect(xt)}}const X=new nt,$=new nt;function W(q,dt,xt){X.setFromMatrixPosition(dt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);const Rt=X.distanceTo($),wt=dt.projectionMatrix.elements,te=xt.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),Ae=wt[14]/(wt[10]+1),we=(wt[9]+1)/wt[5],se=(wt[9]-1)/wt[5],G=(wt[8]-1)/wt[0],mn=(te[8]+1)/te[0],ce=zt*G,ue=zt*mn,Yt=Rt/(-G+mn),De=Yt*-G;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=zt+Yt,I=Ae+Yt,C=ce-De,at=ue+(Rt-De),pt=we*Ae/I*qt,Mt=se*Ae/I*qt;q.projectionMatrix.makePerspective(C,at,pt,Mt,qt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let dt=q.near,xt=q.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),A.near=B.near=N.near=dt,A.far=B.far=N.far=xt,(H!==A.near||st!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,st=A.far),N.layers.mask=q.layers.mask|2,B.layers.mask=q.layers.mask|4,A.layers.mask=N.layers.mask|B.layers.mask;const Rt=q.parent,wt=A.cameras;yt(A,Rt);for(let te=0;te<wt.length;te++)yt(wt[te],Rt);wt.length===2?W(A,N,B):A.projectionMatrix.copy(N.projectionMatrix),z(q,A,Rt)};function z(q,dt,xt){xt===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(q){d=q,v!==null&&(v.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let it=null;function Et(q,dt){if(m=dt.getViewerPose(p||u),E=dt,m!==null){const xt=m.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let Rt=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let zt=0;zt<xt.length;zt++){const Ae=xt[zt];let we=null;if(S!==null)we=S.getViewport(Ae);else{const G=g.getViewSubImage(v,Ae);we=G.viewport,zt===0&&(t.setRenderTargetTextures(L,G.colorTexture,v.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(L))}let se=b[zt];se===void 0&&(se=new Qn,se.layers.enable(zt),se.viewport=new on,b[zt]=se),se.matrix.fromArray(Ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),zt===0&&(A.matrix.copy(se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(se)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const zt=g.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,r.renderState)}}for(let xt=0;xt<U.length;xt++){const Rt=R[xt],wt=U[xt];Rt!==null&&wt!==void 0&&wt.update(Rt,dt,p||u)}it&&it(q,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Ct=new FS;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const _s=new Qa,hw=new nn;function dw(o,t){function e(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function i(x,y){y.color.getRGB(x.fogColor.value,NS(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,L,U,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,L,U):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,e(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ri&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,e(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ri&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,e(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,e(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=t.get(y),U=L.envMap,R=L.envMapRotation;U&&(x.envMap.value=U,_s.copy(R),_s.x*=-1,_s.y*=-1,_s.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.envMapRotation.value.setFromMatrix4(hw.makeRotationFromEuler(_s)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,L,U){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=U*.5,y.map&&(x.map.value=y.map,e(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const L=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pw(o,t,e,i){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,U){const R=U.program;i.uniformBlockBinding(L,R)}function p(L,U){let R=r[L.id];R===void 0&&(E(L),R=m(L),r[L.id]=R,L.addEventListener("dispose",x));const O=U.program;i.updateUBOMapping(L,O);const P=t.render.frame;l[L.id]!==P&&(v(L),l[L.id]=P)}function m(L){const U=g();L.__bindingPointIndex=U;const R=o.createBuffer(),O=L.__size,P=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function g(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=r[L.id],R=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,N=R.length;P<N;P++){const B=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,A=B.length;b<A;b++){const H=B[b];if(S(H,P,b,O)===!0){const st=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ct=0;ct<K.length;ct++){const X=K[ct],$=M(X);typeof X=="number"||typeof X=="boolean"?(H.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,st+ut,H.__data)):X.isMatrix3?(H.__data[0]=X.elements[0],H.__data[1]=X.elements[1],H.__data[2]=X.elements[2],H.__data[3]=0,H.__data[4]=X.elements[3],H.__data[5]=X.elements[4],H.__data[6]=X.elements[5],H.__data[7]=0,H.__data[8]=X.elements[6],H.__data[9]=X.elements[7],H.__data[10]=X.elements[8],H.__data[11]=0):(X.toArray(H.__data,ut),ut+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(L,U,R,O){const P=L.value,N=U+"_"+R;if(O[N]===void 0)return typeof P=="number"||typeof P=="boolean"?O[N]=P:O[N]=P.clone(),!0;{const B=O[N];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[N]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function E(L){const U=L.uniforms;let R=0;const O=16;for(let N=0,B=U.length;N<B;N++){const b=Array.isArray(U[N])?U[N]:[U[N]];for(let A=0,H=b.length;A<H;A++){const st=b[A],K=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,ct=K.length;ut<ct;ut++){const X=K[ut],$=M(X),W=R%O,yt=W%$.boundary,z=W+yt;R+=yt,z!==0&&O-z<$.storage&&(R+=O-z),st.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=$.storage}}}const P=R%O;return P>0&&(R+=O-P),L.__size=R,L.__cache={},this}function M(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function x(L){const U=L.target;U.removeEventListener("dispose",x);const R=u.indexOf(U.__bindingPointIndex);u.splice(R,1),o.deleteBuffer(r[U.id]),delete r[U.id],delete l[U.id]}function y(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class mw{constructor(t={}){const{canvas:e=JT(),context:i=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,y=null;const L=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vi,this.toneMapping=Pr,this.toneMappingExposure=1;const R=this;let O=!1,P=0,N=0,B=null,b=-1,A=null;const H=new on,st=new on;let K=null;const ut=new Pe(0);let ct=0,X=e.width,$=e.height,W=1,yt=null,z=null;const it=new on(0,0,X,$),Et=new on(0,0,X,$);let Ct=!1;const q=new IS;let dt=!1,xt=!1;this.transmissionResolutionScale=1;const Rt=new nn,wt=new nn,te=new nt,zt=new on,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function se(){return B===null?W:1}let G=i;function mn(D,Z){return e.getContext(D,Z)}try{const D={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vm}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),G===null){const Z="webgl2";if(G=mn(Z,D),G===null)throw mn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ce,ue,Yt,De,qt,I,C,at,pt,Mt,gt,Xt,Dt,Ht,_e,At,Vt,Jt,Wt,Ft,k,ft,Nt,V;function bt(){ce=new bR(G),ce.init(),ft=new ow(G,ce),ue=new vR(G,ce,t,ft),Yt=new rw(G,ce),ue.reverseDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),De=new CR(G),qt=new YC,I=new sw(G,ce,Yt,qt,ue,ft,De),C=new SR(R),at=new TR(R),pt=new Nb(G),Nt=new _R(G,pt),Mt=new AR(G,pt,De,Nt),gt=new DR(G,Mt,pt,De),Wt=new wR(G,ue,I),At=new yR(qt),Xt=new WC(R,C,at,ce,ue,Nt,At),Dt=new dw(R,qt),Ht=new jC,_e=new tw(ce),Jt=new mR(R,C,at,Yt,gt,S,d),Vt=new iw(R,gt,ue),V=new pw(G,De,ue,Yt),Ft=new gR(G,ce,De),k=new RR(G,ce,De),De.programs=Xt.programs,R.capabilities=ue,R.extensions=ce,R.properties=qt,R.renderLists=Ht,R.shadowMap=Vt,R.state=Yt,R.info=De}bt();const lt=new fw(R,G);this.xr=lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(X,$,!1))},this.getSize=function(D){return D.set(X,$)},this.setSize=function(D,Z,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,$=Z,e.width=Math.floor(D*W),e.height=Math.floor(Z*W),rt===!0&&(e.style.width=D+"px",e.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(X*W,$*W).floor()},this.setDrawingBufferSize=function(D,Z,rt){X=D,$=Z,W=rt,e.width=Math.floor(D*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,Z,rt,tt){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,Z,rt,tt),Yt.viewport(H.copy(it).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(Et)},this.setScissor=function(D,Z,rt,tt){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,Z,rt,tt),Yt.scissor(st.copy(Et).multiplyScalar(W).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(D){Yt.setScissorTest(Ct=D)},this.setOpaqueSort=function(D){yt=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,rt=!0){let tt=0;if(D){let Q=!1;if(B!==null){const Tt=B.texture.format;Q=Tt===qm||Tt===Ym||Tt===Wm}if(Q){const Tt=B.texture.type,Lt=Tt===Ka||Tt===Us||Tt===gc||Tt===qo||Tt===km||Tt===Xm,Bt=Jt.getClearColor(),It=Jt.getClearAlpha(),ae=Bt.r,re=Bt.g,$t=Bt.b;Lt?(E[0]=ae,E[1]=re,E[2]=$t,E[3]=It,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=ae,M[1]=re,M[2]=$t,M[3]=It,G.clearBufferiv(G.COLOR,0,M))}else tt|=G.COLOR_BUFFER_BIT}Z&&(tt|=G.DEPTH_BUFFER_BIT),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Jt.dispose(),Ht.dispose(),_e.dispose(),qt.dispose(),C.dispose(),at.dispose(),gt.dispose(),Nt.dispose(),V.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Dc),lt.removeEventListener("sessionend",rl),ia.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=De.autoReset,Z=Vt.enabled,rt=Vt.autoUpdate,tt=Vt.needsUpdate,Q=Vt.type;bt(),De.autoReset=D,Vt.enabled=Z,Vt.autoUpdate=rt,Vt.needsUpdate=tt,Vt.type=Q}function Ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Zt(D){const Z=D.target;Z.removeEventListener("dispose",Zt),Re(Z)}function Re(D){Xe(D),qt.remove(D)}function Xe(D){const Z=qt.get(D).programs;Z!==void 0&&(Z.forEach(function(rt){Xt.releaseProgram(rt)}),D.isShaderMaterial&&Xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,rt,tt,Q,Tt){Z===null&&(Z=Ae);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Gf(D,Z,rt,tt,Q);Yt.setMaterial(tt,Lt);let It=rt.index,ae=1;if(tt.wireframe===!0){if(It=Mt.getWireframeAttribute(rt),It===void 0)return;ae=2}const re=rt.drawRange,$t=rt.attributes.position;let xe=re.start*ae,Me=(re.start+re.count)*ae;Tt!==null&&(xe=Math.max(xe,Tt.start*ae),Me=Math.min(Me,(Tt.start+Tt.count)*ae)),It!==null?(xe=Math.max(xe,0),Me=Math.min(Me,It.count)):$t!=null&&(xe=Math.max(xe,0),Me=Math.min(Me,$t.count));const We=Me-xe;if(We<0||We===1/0)return;Nt.setup(Q,tt,Bt,rt,It);let Le,oe=Ft;if(It!==null&&(Le=pt.get(It),oe=k,oe.setIndex(Le)),Q.isMesh)tt.wireframe===!0?(Yt.setLineWidth(tt.wireframeLinewidth*se()),oe.setMode(G.LINES)):oe.setMode(G.TRIANGLES);else if(Q.isLine){let ee=tt.linewidth;ee===void 0&&(ee=1),Yt.setLineWidth(ee*se()),Q.isLineSegments?oe.setMode(G.LINES):Q.isLineLoop?oe.setMode(G.LINE_LOOP):oe.setMode(G.LINE_STRIP)}else Q.isPoints?oe.setMode(G.POINTS):Q.isSprite&&oe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ee=Q._multiDrawStarts,vn=Q._multiDrawCounts,Ee=Q._multiDrawCount,$n=It?pt.get(It).bytesPerElement:1,ki=qt.get(tt).currentProgram.getUniforms();for(let Wn=0;Wn<Ee;Wn++)ki.setValue(G,"_gl_DrawID",Wn),oe.render(ee[Wn]/$n,vn[Wn])}else if(Q.isInstancedMesh)oe.renderInstances(xe,We,Q.count);else if(rt.isInstancedBufferGeometry){const ee=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,vn=Math.min(rt.instanceCount,ee);oe.renderInstances(xe,We,vn)}else oe.render(xe,We)};function ge(D,Z,rt){D.transparent===!0&&D.side===Wa&&D.forceSinglePass===!1?(D.side=ri,D.needsUpdate=!0,gn(D,Z,rt),D.side=Br,D.needsUpdate=!0,gn(D,Z,rt),D.side=Wa):gn(D,Z,rt)}this.compile=function(D,Z,rt=null){rt===null&&(rt=D),y=_e.get(rt),y.init(Z),U.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),D!==rt&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const tt=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Bt=Tt[Lt];ge(Bt,rt,Q),tt.add(Bt)}else ge(Tt,rt,Q),tt.add(Tt)}),y=U.pop(),tt},this.compileAsync=function(D,Z,rt=null){const tt=this.compile(D,Z,rt);return new Promise(Q=>{function Tt(){if(tt.forEach(function(Lt){qt.get(Lt).currentProgram.isReady()&&tt.delete(Lt)}),tt.size===0){Q(D);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let an=null;function ln(D){an&&an(D)}function Dc(){ia.stop()}function rl(){ia.start()}const ia=new FS;ia.setAnimationLoop(ln),typeof self<"u"&&ia.setContext(self),this.setAnimationLoop=function(D){an=D,lt.setAnimationLoop(D),D===null?ia.stop():ia.start()},lt.addEventListener("sessionstart",Dc),lt.addEventListener("sessionend",rl),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Z,B),y=_e.get(D,U.length),y.init(Z),U.push(y),wt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(wt),xt=this.localClippingEnabled,dt=At.init(this.clippingPlanes,xt),x=Ht.get(D,L.length),x.init(),L.push(x),lt.enabled===!0&&lt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&Bs(Tt,Z,-1/0,R.sortObjects)}Bs(D,Z,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(yt,z),we=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,we&&Jt.addToRenderList(x,D),this.info.render.frame++,dt===!0&&At.beginShadows();const rt=y.state.shadowsArray;Vt.render(rt,D,Z),dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=x.opaque,Q=x.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++){const It=Tt[Lt];Lc(tt,Q,D,It)}we&&Jt.render(D);for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++){const It=Tt[Lt];sl(x,D,It,It.viewport)}}else Q.length>0&&Lc(tt,Q,D,Z),we&&Jt.render(D),sl(x,D,Z);B!==null&&N===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(R,D,Z),Nt.resetDefaultState(),b=-1,A=null,U.pop(),U.length>0?(y=U[U.length-1],dt===!0&&At.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Bs(D,Z,rt,tt){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||q.intersectsSprite(D)){tt&&zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(wt);const Lt=gt.update(D),Bt=D.material;Bt.visible&&x.push(D,Lt,Bt,rt,zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||q.intersectsObject(D))){const Lt=gt.update(D),Bt=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),zt.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(D.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){const It=Lt.groups;for(let ae=0,re=It.length;ae<re;ae++){const $t=It[ae],xe=Bt[$t.materialIndex];xe&&xe.visible&&x.push(D,Lt,xe,rt,zt.z,$t)}}else Bt.visible&&x.push(D,Lt,Bt,rt,zt.z,null)}}const Tt=D.children;for(let Lt=0,Bt=Tt.length;Lt<Bt;Lt++)Bs(Tt[Lt],Z,rt,tt)}function sl(D,Z,rt,tt){const Q=D.opaque,Tt=D.transmissive,Lt=D.transparent;y.setupLightsView(rt),dt===!0&&At.setGlobalState(R.clippingPlanes,rt),tt&&Yt.viewport(H.copy(tt)),Q.length>0&&di(Q,Z,rt),Tt.length>0&&di(Tt,Z,rt),Lt.length>0&&di(Lt,Z,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Lc(D,Z,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[tt.id]===void 0&&(y.state.transmissionRenderTarget[tt.id]=new Os(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?bc:Ka,minFilter:As,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[tt.id],Lt=tt.viewport||H;Tt.setSize(Lt.z*R.transmissionResolutionScale,Lt.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(ut),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),we&&Jt.render(rt);const It=R.toneMapping;R.toneMapping=Pr;const ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),y.setupLightsView(tt),dt===!0&&At.setGlobalState(R.clippingPlanes,tt),di(D,rt,tt),I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let $t=0,xe=Z.length;$t<xe;$t++){const Me=Z[$t],We=Me.object,Le=Me.geometry,oe=Me.material,ee=Me.group;if(oe.side===Wa&&We.layers.test(tt.layers)){const vn=oe.side;oe.side=ri,oe.needsUpdate=!0,_n(We,rt,tt,Le,oe,ee),oe.side=vn,oe.needsUpdate=!0,re=!0}}re===!0&&(I.updateMultisampleRenderTarget(Tt),I.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Bt),R.setClearColor(ut,ct),ae!==void 0&&(tt.viewport=ae),R.toneMapping=It}function di(D,Z,rt){const tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=D.length;Q<Tt;Q++){const Lt=D[Q],Bt=Lt.object,It=Lt.geometry,ae=tt===null?Lt.material:tt,re=Lt.group;Bt.layers.test(rt.layers)&&_n(Bt,Z,rt,It,ae,re)}}function _n(D,Z,rt,tt,Q,Tt){D.onBeforeRender(R,Z,rt,tt,Q,Tt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(R,Z,rt,tt,D,Tt),Q.transparent===!0&&Q.side===Wa&&Q.forceSinglePass===!1?(Q.side=ri,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=Br,Q.needsUpdate=!0,R.renderBufferDirect(rt,Z,tt,Q,D,Tt),Q.side=Wa):R.renderBufferDirect(rt,Z,tt,Q,D,Tt),D.onAfterRender(R,Z,rt,tt,Q,Tt)}function gn(D,Z,rt){Z.isScene!==!0&&(Z=Ae);const tt=qt.get(D),Q=y.state.lights,Tt=y.state.shadowsArray,Lt=Q.state.version,Bt=Xt.getParameters(D,Q.state,Tt,Z,rt),It=Xt.getProgramCacheKey(Bt);let ae=tt.programs;tt.environment=D.isMeshStandardMaterial?Z.environment:null,tt.fog=Z.fog,tt.envMap=(D.isMeshStandardMaterial?at:C).get(D.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,ae===void 0&&(D.addEventListener("dispose",Zt),ae=new Map,tt.programs=ae);let re=ae.get(It);if(re!==void 0){if(tt.currentProgram===re&&tt.lightsStateVersion===Lt)return Fs(D,Bt),re}else Bt.uniforms=Xt.getUniforms(D),D.onBeforeCompile(Bt,R),re=Xt.acquireProgram(Bt,It),ae.set(It,re),tt.uniforms=Bt.uniforms;const $t=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($t.clippingPlanes=At.uniform),Fs(D,Bt),tt.needsLights=Uc(D),tt.lightsStateVersion=Lt,tt.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=re,tt.uniformsList=null,re}function Sa(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=mf.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Fs(D,Z){const rt=qt.get(D);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Gf(D,Z,rt,tt,Q){Z.isScene!==!0&&(Z=Ae),I.resetTextureUnits();const Tt=Z.fog,Lt=tt.isMeshStandardMaterial?Z.environment:null,Bt=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zo,It=(tt.isMeshStandardMaterial?at:C).get(tt.envMap||Lt),ae=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),$t=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let We=Pr;tt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=R.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,oe=Le!==void 0?Le.length:0,ee=qt.get(tt),vn=y.state.lights;if(dt===!0&&(xt===!0||D!==A)){const Qe=D===A&&tt.id===b;At.setState(tt,D,Qe)}let Ee=!1;tt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==vn.state.version||ee.outputColorSpace!==Bt||Q.isBatchedMesh&&ee.batching===!1||!Q.isBatchedMesh&&ee.batching===!0||Q.isBatchedMesh&&ee.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ee.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ee.instancing===!1||!Q.isInstancedMesh&&ee.instancing===!0||Q.isSkinnedMesh&&ee.skinning===!1||!Q.isSkinnedMesh&&ee.skinning===!0||Q.isInstancedMesh&&ee.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ee.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ee.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ee.instancingMorph===!1&&Q.morphTexture!==null||ee.envMap!==It||tt.fog===!0&&ee.fog!==Tt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==At.numPlanes||ee.numIntersection!==At.numIntersection)||ee.vertexAlphas!==ae||ee.vertexTangents!==re||ee.morphTargets!==$t||ee.morphNormals!==xe||ee.morphColors!==Me||ee.toneMapping!==We||ee.morphTargetsCount!==oe)&&(Ee=!0):(Ee=!0,ee.__version=tt.version);let $n=ee.currentProgram;Ee===!0&&($n=gn(tt,Z,Q));let ki=!1,Wn=!1,Tn=!1;const ze=$n.getUniforms(),Yn=ee.uniforms;if(Yt.useProgram($n.program)&&(ki=!0,Wn=!0,Tn=!0),tt.id!==b&&(b=tt.id,Wn=!0),ki||A!==D){Yt.buffers.depth.getReversed()?(Rt.copy(D.projectionMatrix),tb(Rt),eb(Rt),ze.setValue(G,"projectionMatrix",Rt)):ze.setValue(G,"projectionMatrix",D.projectionMatrix),ze.setValue(G,"viewMatrix",D.matrixWorldInverse);const Ln=ze.map.cameraPosition;Ln!==void 0&&Ln.setValue(G,te.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ze.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,Wn=!0,Tn=!0)}if(Q.isSkinnedMesh){ze.setOptional(G,Q,"bindMatrix"),ze.setOptional(G,Q,"bindMatrixInverse");const Qe=Q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ze.setValue(G,"boneTexture",Qe.boneTexture,I))}Q.isBatchedMesh&&(ze.setOptional(G,Q,"batchingTexture"),ze.setValue(G,"batchingTexture",Q._matricesTexture,I),ze.setOptional(G,Q,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",Q._indirectTexture,I),ze.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",Q._colorsTexture,I));const In=rt.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Wt.update(Q,rt,$n),(Wn||ee.receiveShadow!==Q.receiveShadow)&&(ee.receiveShadow=Q.receiveShadow,ze.setValue(G,"receiveShadow",Q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Yn.envMap.value=It,Yn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Z.environment!==null&&(Yn.envMapIntensity.value=Z.environmentIntensity),Wn&&(ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),ee.needsLights&&kf(Yn,Tn),Tt&&tt.fog===!0&&Dt.refreshFogUniforms(Yn,Tt),Dt.refreshMaterialUniforms(Yn,tt,W,$,y.state.transmissionRenderTarget[D.id]),mf.upload(G,Sa(ee),Yn,I)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(mf.upload(G,Sa(ee),Yn,I),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ze.setValue(G,"center",Q.center),ze.setValue(G,"modelViewMatrix",Q.modelViewMatrix),ze.setValue(G,"normalMatrix",Q.normalMatrix),ze.setValue(G,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Qe=tt.uniformsGroups;for(let Ln=0,Hs=Qe.length;Ln<Hs;Ln++){const ti=Qe[Ln];V.update(ti,$n),V.bind(ti,$n)}}return $n}function kf(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Uc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,Z,rt){qt.get(D.texture).__webglTexture=Z,qt.get(D.depthTexture).__webglTexture=rt;const tt=qt.get(D);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=rt===void 0,tt.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Z){const rt=qt.get(D);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const kr=G.createFramebuffer();this.setRenderTarget=function(D,Z=0,rt=0){B=D,P=Z,N=rt;let tt=!0,Q=null,Tt=!1,Lt=!1;if(D){const It=qt.get(D);if(It.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(G.FRAMEBUFFER,null),tt=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(It.__hasExternalTextures)I.rebindTextures(D,qt.get(D.texture).__webglTexture,qt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $t=D.depthTexture;if(It.__boundDepthTexture!==$t){if($t!==null&&qt.has($t)&&(D.width!==$t.image.width||D.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}const ae=D.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Lt=!0);const re=qt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?Q=re[Z][rt]:Q=re[Z],Tt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?Q=qt.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[rt]:Q=re,H.copy(D.viewport),st.copy(D.scissor),K=D.scissorTest}else H.copy(it).multiplyScalar(W).floor(),st.copy(Et).multiplyScalar(W).floor(),K=Ct;if(rt!==0&&(Q=kr),Yt.bindFramebuffer(G.FRAMEBUFFER,Q)&&tt&&Yt.drawBuffers(D,Q),Yt.viewport(H),Yt.scissor(st),Yt.setScissorTest(K),Tt){const It=qt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(Lt){const It=qt.get(D.texture),ae=Z;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.__webglTexture,rt,ae)}else if(D!==null&&rt!==0){const It=qt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,rt)}b=-1},this.readRenderTargetPixels=function(D,Z,rt,tt,Q,Tt,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){Yt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const It=D.texture,ae=It.format,re=It.type;if(!ue.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q&&G.readPixels(Z,rt,tt,Q,ft.convert(ae),ft.convert(re),Tt)}finally{const It=B!==null?qt.get(B).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(D,Z,rt,tt,Q,Tt,Lt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=qt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){const It=D.texture,ae=It.format,re=It.type;if(!ue.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=D.width-tt&&rt>=0&&rt<=D.height-Q){Yt.bindFramebuffer(G.FRAMEBUFFER,Bt);const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(Z,rt,tt,Q,ft.convert(ae),ft.convert(re),0);const xe=B!==null?qt.get(B).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,xe);const Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await $T(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer($t),G.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Z=null,rt=0){D.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1]);const tt=Math.pow(2,-rt),Q=Math.floor(D.image.width*tt),Tt=Math.floor(D.image.height*tt),Lt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;I.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Lt,Bt,Q,Tt),Yt.unbindTexture()};const ol=G.createFramebuffer(),xa=G.createFramebuffer();this.copyTextureToTexture=function(D,Z,rt=null,tt=null,Q=0,Tt=null){D.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,D=arguments[1],Z=arguments[2],Tt=arguments[3]||0,rt=null),Tt===null&&(Q!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Lt,Bt,It,ae,re,$t,xe,Me,We;const Le=D.isCompressedTexture?D.mipmaps[Tt]:D.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,ae=rt.min.x,re=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const In=Math.pow(2,-Q);Lt=Math.floor(Le.width*In),Bt=Math.floor(Le.height*In),D.isDataArrayTexture?It=Le.depth:D.isData3DTexture?It=Math.floor(Le.depth*In):It=1,ae=0,re=0,$t=0}tt!==null?(xe=tt.x,Me=tt.y,We=tt.z):(xe=0,Me=0,We=0);const oe=ft.convert(Z.format),ee=ft.convert(Z.type);let vn;Z.isData3DTexture?(I.setTexture3D(Z,0),vn=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(I.setTexture2DArray(Z,0),vn=G.TEXTURE_2D_ARRAY):(I.setTexture2D(Z,0),vn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),$n=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=G.getParameter(G.UNPACK_SKIP_PIXELS),Wn=G.getParameter(G.UNPACK_SKIP_ROWS),Tn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ae),G.pixelStorei(G.UNPACK_SKIP_ROWS,re),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const ze=D.isDataArrayTexture||D.isData3DTexture,Yn=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const In=qt.get(D),Qe=qt.get(Z),Ln=qt.get(In.__renderTarget),Hs=qt.get(Qe.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let ti=0;ti<It;ti++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(D).__webglTexture,Q,$t+ti),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(Z).__webglTexture,Tt,We+ti)),G.blitFramebuffer(ae,re,Lt,Bt,xe,Me,Lt,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||qt.has(D)){const In=qt.get(D),Qe=qt.get(Z);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,ol),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,xa);for(let Ln=0;Ln<It;Ln++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,In.__webglTexture,Q,$t+Ln):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,In.__webglTexture,Q),Yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,We+Ln):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,Tt),Q!==0?G.blitFramebuffer(ae,re,Lt,Bt,xe,Me,Lt,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):Yn?G.copyTexSubImage3D(vn,Tt,xe,Me,We+Ln,ae,re,Lt,Bt):G.copyTexSubImage2D(vn,Tt,xe,Me,ae,re,Lt,Bt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Yn?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(vn,Tt,xe,Me,We,Lt,Bt,It,oe,ee,Le.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(vn,Tt,xe,Me,We,Lt,Bt,It,oe,Le.data):G.texSubImage3D(vn,Tt,xe,Me,We,Lt,Bt,It,oe,ee,Le):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,xe,Me,Lt,Bt,oe,ee,Le.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,xe,Me,Le.width,Le.height,oe,Le.data):G.texSubImage2D(G.TEXTURE_2D,Tt,xe,Me,Lt,Bt,oe,ee,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,$n),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Tn),Tt===0&&Z.generateMipmaps&&G.generateMipmap(vn),Yt.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,rt=null,tt=null,Q=0){return D.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,tt=arguments[1]||null,D=arguments[2],Z=arguments[3],Q=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Z,rt,tt,Q)},this.initRenderTarget=function(D){qt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Yt.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,Yt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}}var _w=Object.defineProperty,gw=(o,t,e)=>t in o?_w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,vw=(o,t,e)=>(gw(o,t+"",e),e);class yw{constructor(){vw(this,"_listeners")}addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}var Sw=Object.defineProperty,xw=(o,t,e)=>t in o?Sw(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ne=(o,t,e)=>(xw(o,typeof t!="symbol"?t+"":t,e),e);const of=new zf,jy=new Cr,Mw=Math.cos(70*(Math.PI/180)),Zy=(o,t)=>(o%t+t)%t;class Ew extends yw{constructor(t,e){super(),ne(this,"object"),ne(this,"domElement"),ne(this,"enabled",!0),ne(this,"target",new nt),ne(this,"minDistance",0),ne(this,"maxDistance",1/0),ne(this,"minZoom",0),ne(this,"maxZoom",1/0),ne(this,"minPolarAngle",0),ne(this,"maxPolarAngle",Math.PI),ne(this,"minAzimuthAngle",-1/0),ne(this,"maxAzimuthAngle",1/0),ne(this,"enableDamping",!1),ne(this,"dampingFactor",.05),ne(this,"enableZoom",!0),ne(this,"zoomSpeed",1),ne(this,"enableRotate",!0),ne(this,"rotateSpeed",1),ne(this,"enablePan",!0),ne(this,"panSpeed",1),ne(this,"screenSpacePanning",!0),ne(this,"keyPanSpeed",7),ne(this,"zoomToCursor",!1),ne(this,"autoRotate",!1),ne(this,"autoRotateSpeed",2),ne(this,"reverseOrbit",!1),ne(this,"reverseHorizontalOrbit",!1),ne(this,"reverseVerticalOrbit",!1),ne(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ne(this,"mouseButtons",{LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN}),ne(this,"touches",{ONE:yo.ROTATE,TWO:yo.DOLLY_PAN}),ne(this,"target0"),ne(this,"position0"),ne(this,"zoom0"),ne(this,"_domElementKeyEvents",null),ne(this,"getPolarAngle"),ne(this,"getAzimuthalAngle"),ne(this,"setPolarAngle"),ne(this,"setAzimuthalAngle"),ne(this,"getDistance"),ne(this,"getZoomScale"),ne(this,"listenToKeyEvents"),ne(this,"stopListenToKeyEvents"),ne(this,"saveState"),ne(this,"reset"),ne(this,"update"),ne(this,"connect"),ne(this,"dispose"),ne(this,"dollyIn"),ne(this,"dollyOut"),ne(this,"getScale"),ne(this,"setScale"),this.object=t,this.domElement=e,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=k=>{let ft=Zy(k,2*Math.PI),Nt=m.phi;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let V=Math.abs(ft-Nt);2*Math.PI-V<V&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.phi=ft-Nt,i.update()},this.setAzimuthalAngle=k=>{let ft=Zy(k,2*Math.PI),Nt=m.theta;Nt<0&&(Nt+=2*Math.PI),ft<0&&(ft+=2*Math.PI);let V=Math.abs(ft-Nt);2*Math.PI-V<V&&(ft<Nt?ft+=2*Math.PI:Nt+=2*Math.PI),g.theta=ft-Nt,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=k=>{k.addEventListener("keydown",Dt),this._domElementKeyEvents=k},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),d=f.NONE},this.update=(()=>{const k=new nt,ft=new nt(0,1,0),Nt=new Ns().setFromUnitVectors(t.up,ft),V=Nt.clone().invert(),bt=new nt,lt=new Ns,_t=2*Math.PI;return function(){const Ot=i.object.position;Nt.setFromUnitVectors(t.up,ft),V.copy(Nt).invert(),k.copy(Ot).sub(i.target),k.applyQuaternion(Nt),m.setFromVector3(k),i.autoRotate&&d===f.NONE&&ut(st()),i.enableDamping?(m.theta+=g.theta*i.dampingFactor,m.phi+=g.phi*i.dampingFactor):(m.theta+=g.theta,m.phi+=g.phi);let Zt=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(Zt)&&isFinite(Re)&&(Zt<-Math.PI?Zt+=_t:Zt>Math.PI&&(Zt-=_t),Re<-Math.PI?Re+=_t:Re>Math.PI&&(Re-=_t),Zt<=Re?m.theta=Math.max(Zt,Math.min(Re,m.theta)):m.theta=m.theta>(Zt+Re)/2?Math.max(Zt,m.theta):Math.min(Re,m.theta)),m.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,m.phi)),m.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(S,i.dampingFactor):i.target.add(S),i.zoomToCursor&&b||i.object.isOrthographicCamera?m.radius=Ct(m.radius):m.radius=Ct(m.radius*v),k.setFromSpherical(m),k.applyQuaternion(V),Ot.copy(i.target).add(k),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(g.theta*=1-i.dampingFactor,g.phi*=1-i.dampingFactor,S.multiplyScalar(1-i.dampingFactor)):(g.set(0,0,0),S.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&b){let ge=null;if(i.object instanceof Qn&&i.object.isPerspectiveCamera){const an=k.length();ge=Ct(an*v);const ln=an-ge;i.object.position.addScaledVector(N,ln),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const an=new nt(B.x,B.y,0);an.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix(),Xe=!0;const ln=new nt(B.x,B.y,0);ln.unproject(i.object),i.object.position.sub(ln).add(an),i.object.updateMatrixWorld(),ge=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ge!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ge).add(i.object.position):(of.origin.copy(i.object.position),of.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(of.direction))<Mw?t.lookAt(i.target):(jy.setFromNormalAndCoplanarPoint(i.object.up,i.target),of.intersectPlane(jy,i.target))))}else i.object instanceof pf&&i.object.isOrthographicCamera&&(Xe=v!==1,Xe&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix()));return v=1,b=!1,Xe||bt.distanceToSquared(i.object.position)>p||8*(1-lt.dot(i.object.quaternion))>p?(i.dispatchEvent(r),bt.copy(i.object.position),lt.copy(i.object.quaternion),Xe=!1,!0):!1}})(),this.connect=k=>{i.domElement=k,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",At),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",pt),i.domElement.addEventListener("wheel",Xt)},this.dispose=()=>{var k,ft,Nt,V,bt,lt;i.domElement&&(i.domElement.style.touchAction="auto"),(k=i.domElement)==null||k.removeEventListener("contextmenu",At),(ft=i.domElement)==null||ft.removeEventListener("pointerdown",C),(Nt=i.domElement)==null||Nt.removeEventListener("pointercancel",pt),(V=i.domElement)==null||V.removeEventListener("wheel",Xt),(bt=i.domElement)==null||bt.ownerDocument.removeEventListener("pointermove",at),(lt=i.domElement)==null||lt.ownerDocument.removeEventListener("pointerup",pt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Dt)};const i=this,r={type:"change"},l={type:"start"},u={type:"end"},f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=f.NONE;const p=1e-6,m=new My,g=new My;let v=1;const S=new nt,E=new pe,M=new pe,x=new pe,y=new pe,L=new pe,U=new pe,R=new pe,O=new pe,P=new pe,N=new nt,B=new pe;let b=!1;const A=[],H={};function st(){return 2*Math.PI/60/60*i.autoRotateSpeed}function K(){return Math.pow(.95,i.zoomSpeed)}function ut(k){i.reverseOrbit||i.reverseHorizontalOrbit?g.theta+=k:g.theta-=k}function ct(k){i.reverseOrbit||i.reverseVerticalOrbit?g.phi+=k:g.phi-=k}const X=(()=>{const k=new nt;return function(Nt,V){k.setFromMatrixColumn(V,0),k.multiplyScalar(-Nt),S.add(k)}})(),$=(()=>{const k=new nt;return function(Nt,V){i.screenSpacePanning===!0?k.setFromMatrixColumn(V,1):(k.setFromMatrixColumn(V,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(Nt),S.add(k)}})(),W=(()=>{const k=new nt;return function(Nt,V){const bt=i.domElement;if(bt&&i.object instanceof Qn&&i.object.isPerspectiveCamera){const lt=i.object.position;k.copy(lt).sub(i.target);let _t=k.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),X(2*Nt*_t/bt.clientHeight,i.object.matrix),$(2*V*_t/bt.clientHeight,i.object.matrix)}else bt&&i.object instanceof pf&&i.object.isOrthographicCamera?(X(Nt*(i.object.right-i.object.left)/i.object.zoom/bt.clientWidth,i.object.matrix),$(V*(i.object.top-i.object.bottom)/i.object.zoom/bt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function yt(k){i.object instanceof Qn&&i.object.isPerspectiveCamera||i.object instanceof pf&&i.object.isOrthographicCamera?v=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(k){yt(v/k)}function it(k){yt(v*k)}function Et(k){if(!i.zoomToCursor||!i.domElement)return;b=!0;const ft=i.domElement.getBoundingClientRect(),Nt=k.clientX-ft.left,V=k.clientY-ft.top,bt=ft.width,lt=ft.height;B.x=Nt/bt*2-1,B.y=-(V/lt)*2+1,N.set(B.x,B.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ct(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function q(k){E.set(k.clientX,k.clientY)}function dt(k){Et(k),R.set(k.clientX,k.clientY)}function xt(k){y.set(k.clientX,k.clientY)}function Rt(k){M.set(k.clientX,k.clientY),x.subVectors(M,E).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ut(2*Math.PI*x.x/ft.clientHeight),ct(2*Math.PI*x.y/ft.clientHeight)),E.copy(M),i.update()}function wt(k){O.set(k.clientX,k.clientY),P.subVectors(O,R),P.y>0?z(K()):P.y<0&&it(K()),R.copy(O),i.update()}function te(k){L.set(k.clientX,k.clientY),U.subVectors(L,y).multiplyScalar(i.panSpeed),W(U.x,U.y),y.copy(L),i.update()}function zt(k){Et(k),k.deltaY<0?it(K()):k.deltaY>0&&z(K()),i.update()}function Ae(k){let ft=!1;switch(k.code){case i.keys.UP:W(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:W(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:W(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:W(-i.keyPanSpeed,0),ft=!0;break}ft&&(k.preventDefault(),i.update())}function we(){if(A.length==1)E.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);E.set(k,ft)}}function se(){if(A.length==1)y.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),ft=.5*(A[0].pageY+A[1].pageY);y.set(k,ft)}}function G(){const k=A[0].pageX-A[1].pageX,ft=A[0].pageY-A[1].pageY,Nt=Math.sqrt(k*k+ft*ft);R.set(0,Nt)}function mn(){i.enableZoom&&G(),i.enablePan&&se()}function ce(){i.enableZoom&&G(),i.enableRotate&&we()}function ue(k){if(A.length==1)M.set(k.pageX,k.pageY);else{const Nt=Ft(k),V=.5*(k.pageX+Nt.x),bt=.5*(k.pageY+Nt.y);M.set(V,bt)}x.subVectors(M,E).multiplyScalar(i.rotateSpeed);const ft=i.domElement;ft&&(ut(2*Math.PI*x.x/ft.clientHeight),ct(2*Math.PI*x.y/ft.clientHeight)),E.copy(M)}function Yt(k){if(A.length==1)L.set(k.pageX,k.pageY);else{const ft=Ft(k),Nt=.5*(k.pageX+ft.x),V=.5*(k.pageY+ft.y);L.set(Nt,V)}U.subVectors(L,y).multiplyScalar(i.panSpeed),W(U.x,U.y),y.copy(L)}function De(k){const ft=Ft(k),Nt=k.pageX-ft.x,V=k.pageY-ft.y,bt=Math.sqrt(Nt*Nt+V*V);O.set(0,bt),P.set(0,Math.pow(O.y/R.y,i.zoomSpeed)),z(P.y),R.copy(O)}function qt(k){i.enableZoom&&De(k),i.enablePan&&Yt(k)}function I(k){i.enableZoom&&De(k),i.enableRotate&&ue(k)}function C(k){var ft,Nt;i.enabled!==!1&&(A.length===0&&((ft=i.domElement)==null||ft.ownerDocument.addEventListener("pointermove",at),(Nt=i.domElement)==null||Nt.ownerDocument.addEventListener("pointerup",pt)),Vt(k),k.pointerType==="touch"?Ht(k):Mt(k))}function at(k){i.enabled!==!1&&(k.pointerType==="touch"?_e(k):gt(k))}function pt(k){var ft,Nt,V;Jt(k),A.length===0&&((ft=i.domElement)==null||ft.releasePointerCapture(k.pointerId),(Nt=i.domElement)==null||Nt.ownerDocument.removeEventListener("pointermove",at),(V=i.domElement)==null||V.ownerDocument.removeEventListener("pointerup",pt)),i.dispatchEvent(u),d=f.NONE}function Mt(k){let ft;switch(k.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case vo.DOLLY:if(i.enableZoom===!1)return;dt(k),d=f.DOLLY;break;case vo.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;xt(k),d=f.PAN}else{if(i.enableRotate===!1)return;q(k),d=f.ROTATE}break;case vo.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;q(k),d=f.ROTATE}else{if(i.enablePan===!1)return;xt(k),d=f.PAN}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function gt(k){if(i.enabled!==!1)switch(d){case f.ROTATE:if(i.enableRotate===!1)return;Rt(k);break;case f.DOLLY:if(i.enableZoom===!1)return;wt(k);break;case f.PAN:if(i.enablePan===!1)return;te(k);break}}function Xt(k){i.enabled===!1||i.enableZoom===!1||d!==f.NONE&&d!==f.ROTATE||(k.preventDefault(),i.dispatchEvent(l),zt(k),i.dispatchEvent(u))}function Dt(k){i.enabled===!1||i.enablePan===!1||Ae(k)}function Ht(k){switch(Wt(k),A.length){case 1:switch(i.touches.ONE){case yo.ROTATE:if(i.enableRotate===!1)return;we(),d=f.TOUCH_ROTATE;break;case yo.PAN:if(i.enablePan===!1)return;se(),d=f.TOUCH_PAN;break;default:d=f.NONE}break;case 2:switch(i.touches.TWO){case yo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;mn(),d=f.TOUCH_DOLLY_PAN;break;case yo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(),d=f.TOUCH_DOLLY_ROTATE;break;default:d=f.NONE}break;default:d=f.NONE}d!==f.NONE&&i.dispatchEvent(l)}function _e(k){switch(Wt(k),d){case f.TOUCH_ROTATE:if(i.enableRotate===!1)return;ue(k),i.update();break;case f.TOUCH_PAN:if(i.enablePan===!1)return;Yt(k),i.update();break;case f.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qt(k),i.update();break;case f.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(k),i.update();break;default:d=f.NONE}}function At(k){i.enabled!==!1&&k.preventDefault()}function Vt(k){A.push(k)}function Jt(k){delete H[k.pointerId];for(let ft=0;ft<A.length;ft++)if(A[ft].pointerId==k.pointerId){A.splice(ft,1);return}}function Wt(k){let ft=H[k.pointerId];ft===void 0&&(ft=new pe,H[k.pointerId]=ft),ft.set(k.pageX,k.pageY)}function Ft(k){const ft=k.pointerId===A[0].pointerId?A[1]:A[0];return H[ft.pointerId]}this.dollyIn=(k=K())=>{it(k),i.update()},this.dollyOut=(k=K())=>{z(k),i.update()},this.getScale=()=>v,this.setScale=k=>{yt(k),i.update()},this.getZoomScale=()=>K(),e!==void 0&&this.connect(e),this.update()}}class Tw{constructor(t){Gt(this,"renderer");Gt(this,"scene");Gt(this,"camera");Gt(this,"orbitControls");const e=window.innerWidth,i=window.innerHeight;this.renderer=new mw({canvas:t}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,i),this.renderer.setClearColor(0),this.scene=new Ab,this.camera=new Qn(ec.FOV,1),this.camera.aspect=e/i,this.camera.position.set(0,0,ec.InitialZPosition),this.camera.updateProjectionMatrix(),this.orbitControls=new Ew(this.camera,t),this.orbitControls.target=new nt(0,0,0),this.orbitControls.minDistance=ec.MinDistance,this.orbitControls.maxDistance=ec.MaxDistance,this.orbitControls.enableRotate=ec.EnableRotate,window.addEventListener("resize",this.handleResize.bind(this))}handleResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}updateControls(){this.orbitControls.update()}render(){this.renderer.render(this.scene,this.camera)}addToScene(t){this.scene.add(t)}removeFromScene(t){this.scene.remove(t)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.orbitControls}dispose(){window.removeEventListener("resize",this.handleResize.bind(this)),this.orbitControls.dispose(),this.renderer.dispose()}}function ka(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function XS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qo={duration:.5,overwrite:!1,delay:0},Jm,zn,Ye,ga=1e8,kn=1/ga,Tm=Math.PI*2,bw=Tm/4,Aw=0,WS=Math.sqrt,Rw=Math.cos,Cw=Math.sin,Dn=function(t){return typeof t=="string"},en=function(t){return typeof t=="function"},Ja=function(t){return typeof t=="number"},$m=function(t){return typeof t>"u"},ya=function(t){return typeof t=="object"},li=function(t){return t!==!1},t_=function(){return typeof window<"u"},lf=function(t){return en(t)||Dn(t)},YS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,bm=/(?:-?\.?\d|\.)+/gi,qS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jS=/[+-]=-?[.\d]+/,ZS=/[^,'"\[\]\s]+/gi,ww=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,ua,Am,e_,Ri={},Rf={},KS,QS=function(t){return(Rf=Jo(t,Ri))&&hi},n_=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},vc=function(t,e){return!e&&console.warn(t)},JS=function(t,e){return t&&(Ri[t]=e)&&Rf&&(Rf[t]=e)||Ri},yc=function(){return 0},Dw={suppressEvents:!0,isStart:!0,kill:!1},_f={suppressEvents:!0,kill:!1},Lw={suppressEvents:!0},i_={},zr=[],Rm={},$S,Mi={},wp={},Ky=30,gf=[],a_="",r_=function(t){var e=t[0],i,r;if(ya(e)||en(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=gf.length;r--&&!gf[r].targetTest(e););i=gf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Ex(t[r],i)))||t.splice(r,1);return t},Cs=function(t){return t._gsap||r_(Gi(t))[0]._gsap},tx=function(t,e,i){return(i=t[e])&&en(i)?t[e]():$m(i)&&t.getAttribute&&t.getAttribute(e)||i},ci=function(t,e){return(t=t.split(",")).forEach(e)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},pn=function(t){return Math.round(t*1e7)/1e7||0},Vo=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Uw=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Cf=function(){var t=zr.length,e=zr.slice(0),i,r;for(Rm={},zr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ex=function(t,e,i,r){zr.length&&!zn&&Cf(),t.render(e,i,zn&&e<0&&(t._initted||t._startAt)),zr.length&&!zn&&Cf()},nx=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ZS).length<2?e:Dn(t)?t.trim():t},ix=function(t){return t},Ci=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ow=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Jo=function(t,e){for(var i in e)t[i]=e[i];return t},Qy=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ya(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},wf=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},pc=function(t){var e=t.parent||Ze,i=t.keyframes?Ow(Xn(t.keyframes)):Ci;if(li(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Nw=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},ax=function(t,e,i,r,l){var u=t[r],f;if(l)for(f=e[l];u&&u[l]>f;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=u,e.parent=e._dp=t,e},Ff=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var l=e._prev,u=e._next;l?l._next=u:t[i]===e&&(t[i]=u),u?u._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},Hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Pw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cm=function(t,e,i,r){return t._startAt&&(zn?t._startAt.revert(_f):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},zw=function o(t){return!t||t._ts&&o(t.parent)},Jy=function(t){return t._repeat?$o(t._tTime,t=t.duration()+t._rDelay)*t:0},$o=function(t,e){var i=Math.floor(t=pn(t/e));return t&&i===t?i-1:i},Df=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hf=function(t){return t._end=pn(t._start+(t._tDur/Math.abs(t._ts||t._rts||kn)||0))},Vf=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=pn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hf(t),i._dirty||ws(i,t)),t},rx=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Df(t.rawTime(),e),(!e._dur||wc(0,e.totalDuration(),i)-e._tTime>kn)&&e.render(i,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},ha=function(t,e,i,r){return e.parent&&Hr(e),e._start=pn((Ja(i)?i:i||t!==Ze?Hi(t,i,e):t._time)+e._delay),e._end=pn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ax(t,e,"_first","_last",t._sort?"_start":0),wm(e)||(t._recent=e),r||rx(t,e),t._ts<0&&Vf(t,t._tTime),t},sx=function(t,e){return(Ri.ScrollTrigger||n_("scrollTrigger",e))&&Ri.ScrollTrigger.create(e,t)},ox=function(t,e,i,r,l){if(o_(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!zn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$S!==Ei.frame)return zr.push(t),t._lazy=[l,r],1},Iw=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},wm=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Bw=function(t,e,i,r){var l=t.ratio,u=e<0||!e&&(!t._start&&Iw(t)&&!(!t._initted&&wm(t))||(t._ts<0||t._dp._ts<0)&&!wm(t))?0:1,f=t._rDelay,d=0,p,m,g;if(f&&t._repeat&&(d=wc(0,t._tDur,e),m=$o(d,f),t._yoyo&&m&1&&(u=1-u),m!==$o(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||zn||r||t._zTime===kn||!e&&t._zTime){if(!t._initted&&ox(t,e,r,i,d))return;for(g=t._zTime,t._zTime=e||(i?kn:0),i||(i=e&&!g),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=d,p=t._pt;p;)p.r(u,p.d),p=p._next;e<0&&Cm(t,e,i,!0),t._onUpdate&&!i&&bi(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&bi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Hr(t,1),!i&&!zn&&(bi(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Fw=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},tl=function(t,e,i,r){var l=t._repeat,u=pn(e)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:pn(u*(l+1)+t._rDelay*l):u,f>0&&!r&&Vf(t,t._tTime=t._tDur*f),t.parent&&Hf(t),i||ws(t.parent,t),t},$y=function(t){return t instanceof Jn?ws(t):tl(t,t._dur)},Hw={_start:0,endTime:yc,totalDuration:yc},Hi=function o(t,e,i){var r=t.labels,l=t._recent||Hw,u=t.duration()>=ga?l.endTime(!1):t._dur,f,d,p;return Dn(e)&&(isNaN(e)||e in r)?(d=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:i).totalDuration()/100:1)):f<0?(e in r||(r[e]=u),r[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&i&&(d=d/100*(Xn(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+d:u+d)):e==null?u:+e},mc=function(t,e,i){var r=Ja(e[1]),l=(r?2:1)+(t<2?0:1),u=e[l],f,d;if(r&&(u.duration=e[1]),u.parent=i,t){for(f=u,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=li(d.vars.inherit)&&d.parent;u.immediateRender=li(f.immediateRender),t<2?u.runBackwards=1:u.startAt=e[l-1]}return new dn(e[0],u,e[l+1])},Gr=function(t,e){return t||t===0?e(t):e},wc=function(t,e,i){return i<t?t:i>e?e:i},Gn=function(t,e){return!Dn(t)||!(e=ww.exec(t))?"":e[1]},Vw=function(t,e,i){return Gr(i,function(r){return wc(t,e,r)})},Dm=[].slice,lx=function(t,e){return t&&ya(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ya(t[0]))&&!t.nodeType&&t!==ua},Gw=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var l;return Dn(r)&&!e||lx(r,1)?(l=i).push.apply(l,Gi(r)):i.push(r)})||i},Gi=function(t,e,i){return Ye&&!e&&Ye.selector?Ye.selector(t):Dn(t)&&!i&&(Am||!el())?Dm.call((e||e_).querySelectorAll(t),0):Xn(t)?Gw(t,i):lx(t)?Dm.call(t,0):t?[t]:[]},Lm=function(t){return t=Gi(t)[0]||vc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Gi(e,i.querySelectorAll?i:i===t?vc("Invalid scope")||e_.createElement("div"):t)}},cx=function(t){return t.sort(function(){return .5-Math.random()})},ux=function(t){if(en(t))return t;var e=ya(t)?t:{each:t},i=Ds(e.ease),r=e.from||0,l=parseFloat(e.base)||0,u={},f=r>0&&r<1,d=isNaN(r)||f,p=e.axis,m=r,g=r;return Dn(r)?m=g={center:.5,edges:.5,end:1}[r]||0:!f&&d&&(m=r[0],g=r[1]),function(v,S,E){var M=(E||e).length,x=u[M],y,L,U,R,O,P,N,B,b;if(!x){if(b=e.grid==="auto"?0:(e.grid||[1,ga])[1],!b){for(N=-1e8;N<(N=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(x=u[M]=[],y=d?Math.min(b,M)*m-.5:r%b,L=b===ga?0:d?M*g/b-.5:r/b|0,N=0,B=ga,P=0;P<M;P++)U=P%b-y,R=L-(P/b|0),x[P]=O=p?Math.abs(p==="y"?R:U):WS(U*U+R*R),O>N&&(N=O),O<B&&(B=O);r==="random"&&cx(x),x.max=N-B,x.min=B,x.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),x.b=M<0?l-M:l,x.u=Gn(e.amount||e.each)||0,i=i&&M<0?Sx(i):i}return M=(x[v]-x.min)/x.max||0,pn(x.b+(i?i(M):M)*x.v)+x.u}},Um=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=pn(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Ja(i)?0:Gn(i))}},fx=function(t,e){var i=Xn(t),r,l;return!i&&ya(t)&&(r=i=t.radius||ga,t.values?(t=Gi(t.values),(l=!Ja(t[0]))&&(r*=r)):t=Um(t.increment)),Gr(e,i?en(t)?function(u){return l=t(u),Math.abs(l-u)<=r?l:u}:function(u){for(var f=parseFloat(l?u.x:u),d=parseFloat(l?u.y:0),p=ga,m=0,g=t.length,v,S;g--;)l?(v=t[g].x-f,S=t[g].y-d,v=v*v+S*S):v=Math.abs(t[g]-f),v<p&&(p=v,m=g);return m=!r||p<=r?t[m]:u,l||m===u||Ja(u)?m:m+Gn(u)}:Um(t))},hx=function(t,e,i,r){return Gr(Xn(t)?!e:i===!0?!!(i=0):!r,function(){return Xn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},kw=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(l,u){return u(l)},r)}},Xw=function(t,e){return function(i){return t(parseFloat(i))+(e||Gn(i))}},Ww=function(t,e,i){return px(t,e,0,1,i)},dx=function(t,e,i){return Gr(i,function(r){return t[~~e(r)]})},Yw=function o(t,e,i){var r=e-t;return Xn(t)?dx(t,o(0,t.length),e):Gr(i,function(l){return(r+(l-t)%r)%r+t})},qw=function o(t,e,i){var r=e-t,l=r*2;return Xn(t)?dx(t,o(0,t.length-1),e):Gr(i,function(u){return u=(l+(u-t)%l)%l||0,t+(u>r?l-u:u)})},Sc=function(t){for(var e=0,i="",r,l,u,f;~(r=t.indexOf("random(",e));)u=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,u-r-7).match(f?ZS:bm),i+=t.substr(e,r-e)+hx(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=u+1;return i+t.substr(e,t.length-e)},px=function(t,e,i,r,l){var u=e-t,f=r-i;return Gr(l,function(d){return i+((d-t)/u*f||0)})},jw=function o(t,e,i,r){var l=isNaN(t+e)?0:function(S){return(1-S)*t+S*e};if(!l){var u=Dn(t),f={},d,p,m,g,v;if(i===!0&&(r=1)&&(i=null),u)t={p:t},e={p:e};else if(Xn(t)&&!Xn(e)){for(m=[],g=t.length,v=g-2,p=1;p<g;p++)m.push(o(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},i=e}else r||(t=Jo(Xn(t)?[]:{},t));if(!m){for(d in e)s_.call(f,t,d,"get",e[d]);l=function(E){return u_(E,f)||(u?t.p:t)}}}return Gr(i,l)},tS=function(t,e,i){var r=t.labels,l=ga,u,f,d;for(u in r)f=r[u]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=u,l=f);return d},bi=function(t,e,i){var r=t.vars,l=r[e],u=Ye,f=t._ctx,d,p,m;if(l)return d=r[e+"Params"],p=r.callbackScope||t,i&&zr.length&&Cf(),f&&(Ye=f),m=d?l.apply(p,d):l.call(p),Ye=u,m},hc=function(t){return Hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!zn),t.progress()<1&&bi(t,"onInterrupt"),t},Io,mx=[],_x=function(t){if(t)if(t=!t.name&&t.default||t,t_()||t.headless){var e=t.name,i=en(t),r=e&&!i&&t.init?function(){this._props=[]}:t,l={init:yc,render:u_,add:s_,kill:u2,modifier:c2,rawVars:0},u={targetTest:0,get:0,getSetter:c_,aliases:{},register:0};if(el(),t!==r){if(Mi[e])return;Ci(r,Ci(wf(t,l),u)),Jo(r.prototype,Jo(l,wf(t,u))),Mi[r.prop=e]=r,t.targetTest&&(gf.push(r),i_[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}JS(e,r),t.register&&t.register(hi,r,ui)}else mx.push(t)},Ve=255,dc={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Dp=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ve+.5|0},gx=function(t,e,i){var r=t?Ja(t)?[t>>16,t>>8&Ve,t&Ve]:0:dc.black,l,u,f,d,p,m,g,v,S,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),dc[t])r=dc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ve,r&Ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ve,t&Ve]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(bm),!e)d=+r[0]%360/360,p=+r[1]/100,m=+r[2]/100,u=m<=.5?m*(p+1):m+p-m*p,l=m*2-u,r.length>3&&(r[3]*=1),r[0]=Dp(d+1/3,l,u),r[1]=Dp(d,l,u),r[2]=Dp(d-1/3,l,u);else if(~t.indexOf("="))return r=t.match(qS),i&&r.length<4&&(r[3]=1),r}else r=t.match(bm)||dc.transparent;r=r.map(Number)}return e&&!E&&(l=r[0]/Ve,u=r[1]/Ve,f=r[2]/Ve,g=Math.max(l,u,f),v=Math.min(l,u,f),m=(g+v)/2,g===v?d=p=0:(S=g-v,p=m>.5?S/(2-g-v):S/(g+v),d=g===l?(u-f)/S+(u<f?6:0):g===u?(f-l)/S+2:(l-u)/S+4,d*=60),r[0]=~~(d+.5),r[1]=~~(p*100+.5),r[2]=~~(m*100+.5)),i&&r.length<4&&(r[3]=1),r},vx=function(t){var e=[],i=[],r=-1;return t.split(Ir).forEach(function(l){var u=l.match(zo)||[];e.push.apply(e,u),i.push(r+=u.length+1)}),e.c=i,e},eS=function(t,e,i){var r="",l=(t+r).match(Ir),u=e?"hsla(":"rgba(",f=0,d,p,m,g;if(!l)return t;if(l=l.map(function(v){return(v=gx(v,e,1))&&u+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=vx(t),d=i.c,d.join(r)!==m.c.join(r)))for(p=t.replace(Ir,"1").split(zo),g=p.length-1;f<g;f++)r+=p[f]+(~d.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!p)for(p=t.split(Ir),g=p.length-1;f<g;f++)r+=p[f]+l[f];return r+p[g]},Ir=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in dc)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Zw=/hsl[a]?\(/,yx=function(t){var e=t.join(" "),i;if(Ir.lastIndex=0,Ir.test(e))return i=Zw.test(e),t[1]=eS(t[1],i),t[0]=eS(t[0],i,vx(t[1])),!0},xc,Ei=function(){var o=Date.now,t=500,e=33,i=o(),r=i,l=1e3/240,u=l,f=[],d,p,m,g,v,S,E=function M(x){var y=o()-r,L=x===!0,U,R,O,P;if((y>t||y<0)&&(i+=y-e),r+=y,O=r-i,U=O-u,(U>0||L)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,u+=U+(U>=l?4:l-U),R=1),L||(d=p(M)),R)for(S=0;S<f.length;S++)f[S](O,v,P,x)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(x){return v/(1e3/(x||60))},wake:function(){KS&&(!Am&&t_()&&(ua=Am=window,e_=ua.document||{},Ri.gsap=hi,(ua.gsapVersions||(ua.gsapVersions=[])).push(hi.version),QS(Rf||ua.GreenSockGlobals||!ua.gsap&&ua||{}),mx.forEach(_x)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=m||function(x){return setTimeout(x,u-g.time*1e3+1|0)},xc=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),xc=0,p=yc},lagSmoothing:function(x,y){t=x||1/0,e=Math.min(y||33,t)},fps:function(x){l=1e3/(x||240),u=g.time*1e3+l},add:function(x,y,L){var U=y?function(R,O,P,N){x(R,O,P,N),g.remove(U)}:x;return g.remove(x),f[L?"unshift":"push"](U),el(),U},remove:function(x,y){~(y=f.indexOf(x))&&f.splice(y,1)&&S>=y&&S--},_listeners:f},g}(),el=function(){return!xc&&Ei.wake()},be={},Kw=/^[\d.\-M][\d.\-,\s]/,Qw=/["']/g,Jw=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],l=1,u=i.length,f,d,p;l<u;l++)d=i[l],f=l!==u-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),e[r]=isNaN(p)?p.replace(Qw,"").trim():+p,r=d.substr(f+1).trim();return e},$w=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},t2=function(t){var e=(t+"").split("("),i=be[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Jw(e[1])]:$w(t).split(",").map(nx)):be._CE&&Kw.test(t)?be._CE("",t):i},Sx=function(t){return function(e){return 1-t(1-e)}},xx=function o(t,e){for(var i=t._first,r;i;)i instanceof Jn?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Ds=function(t,e){return t&&(en(t)?t:be[t]||t2(t))||e},Is=function(t,e,i,r){i===void 0&&(i=function(d){return 1-e(1-d)}),r===void 0&&(r=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:r},u;return ci(t,function(f){be[f]=Ri[f]=l,be[u=f.toLowerCase()]=i;for(var d in l)be[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=be[f+"."+d]=l[d]}),l},Mx=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lp=function o(t,e,i){var r=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),u=l/Tm*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*Cw((m-u)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:Mx(f);return l=Tm/l,d.config=function(p,m){return o(t,p,m)},d},Up=function o(t,e){e===void 0&&(e=1.70158);var i=function(u){return u?--u*u*((e+1)*u+e)+1:0},r=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:Mx(i);return r.config=function(l){return o(t,l)},r};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Is(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});be.Linear.easeNone=be.none=be.Linear.easeIn;Is("Elastic",Lp("in"),Lp("out"),Lp());(function(o,t){var e=1/t,i=2*e,r=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Is("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Is("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Is("Circ",function(o){return-(WS(1-o*o)-1)});Is("Sine",function(o){return o===1?1:-Rw(o*bw)+1});Is("Back",Up("in"),Up("out"),Up());be.SteppedEase=be.steps=Ri.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),l=e?1:0,u=1-kn;return function(f){return((r*wc(0,u,f)|0)+l)*i}}};Qo.ease=be["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return a_+=o+","+o+"Params,"});var Ex=function(t,e){this.id=Aw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tx,this.set=e?e.getSetter:c_},Mc=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,tl(this,+e.duration,1,1),this.data=e.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),xc||Ei.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(el(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Vf(this,i),!l._dp||l.parent||rx(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ha(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===kn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ex(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,r):this._repeat?$o(this._tTime,l)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Df(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(wc(-Math.abs(this._delay),this._tDur,l),r!==!1),Hf(this),Pw(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kn&&(this._tTime-=kn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ha(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(li(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Df(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Lw);var r=zn;return zn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zn=r,this},t.globalTime=function(i){for(var r=this,l=arguments.length?i:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$y(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,$y(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Hi(this,i),li(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,li(r)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=r&&l<this.endTime(!0)-kn)},t.eventCallback=function(i,r,l){var u=this.vars;return arguments.length>1?(r?(u[i]=r,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=r)):delete u[i],this):u[i]},t.then=function(i){var r=this;return new Promise(function(l){var u=en(i)?i:ix,f=function(){var p=r.then;r.then=null,en(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=p),l(u),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){hc(this)},o}();Ci(Mc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jn=function(o){XS(t,o);function t(i,r){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=li(i.sortChildren),Ze&&ha(i.parent||Ze,ka(l),r),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&sx(ka(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,u){return mc(0,arguments,this),this},e.from=function(r,l,u){return mc(1,arguments,this),this},e.fromTo=function(r,l,u,f){return mc(2,arguments,this),this},e.set=function(r,l,u){return l.duration=0,l.parent=this,pc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new dn(r,l,Hi(this,u),1),this},e.call=function(r,l,u){return ha(this,dn.delayedCall(0,r,l),u)},e.staggerTo=function(r,l,u,f,d,p,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=p,u.onCompleteParams=m,u.parent=this,new dn(r,u,Hi(this,d)),this},e.staggerFrom=function(r,l,u,f,d,p,m){return u.runBackwards=1,pc(u).immediateRender=li(u.immediateRender),this.staggerTo(r,l,u,f,d,p,m)},e.staggerFromTo=function(r,l,u,f,d,p,m,g){return f.startAt=u,pc(f).immediateRender=li(f.immediateRender),this.staggerTo(r,l,f,d,p,m,g)},e.render=function(r,l,u){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=r<=0?0:pn(r),g=this._zTime<0!=r<0&&(this._initted||!p),v,S,E,M,x,y,L,U,R,O,P,N;if(this!==Ze&&m>d&&r>=0&&(m=d),m!==this._tTime||u||g){if(f!==this._time&&p&&(m+=this._time-f,r+=this._time-f),v=m,R=this._start,U=this._ts,y=!U,g&&(p||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,x=p+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,l,u);if(v=pn(m%x),m===d?(M=this._repeat,v=p):(O=pn(m/x),M=~~O,M&&M===O&&(v=p,M--),v>p&&(v=p)),O=$o(this._tTime,x),!f&&this._tTime&&O!==M&&this._tTime-O*x-this._dur<=0&&(O=M),P&&M&1&&(v=p-v,N=1),M!==O&&!this._lock){var B=P&&O&1,b=B===(P&&M&1);if(M<O&&(B=!B),f=B?0:m%p?p:m,this._lock=1,this.render(f||(N?0:pn(M*x)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;xx(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=Fw(this,pn(f),pn(v)),L&&(m-=v-(v=L._start))),this._tTime=m,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&v&&!l&&!M&&(bi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(S=this._first;S;){if(E=S._next,(S._act||v>=S._start)&&S._ts&&L!==S){if(S.parent!==this)return this.render(r,l,u);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,u),v!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=-1e-8);break}}S=E}else{S=this._last;for(var A=r<0?r:v;S;){if(E=S._prev,(S._act||A<=S._end)&&S._ts&&L!==S){if(S.parent!==this)return this.render(r,l,u);if(S.render(S._ts>0?(A-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(A-S._start)*S._ts,l,u||zn&&(S._initted||S._startAt)),v!==this._time||!this._ts&&!y){L=0,E&&(m+=this._zTime=A?-1e-8:kn);break}}S=E}}if(L&&!l&&(this.pause(),L.render(v>=f?0:-1e-8)._zTime=v>=f?1:-1,this._ts))return this._start=R,Hf(this),this.render(r,l,u);this._onUpdate&&!l&&bi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(R===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((r||!p)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Hr(this,1),!l&&!(r<0&&!f)&&(m||f||!d)&&(bi(this,m===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var u=this;if(Ja(l)||(l=Hi(this,l,r)),!(r instanceof Mc)){if(Xn(r))return r.forEach(function(f){return u.add(f,l)}),this;if(Dn(r))return this.addLabel(r,l);if(en(r))r=dn.delayedCall(0,r);else return this}return this!==r?ha(this,r,l):this},e.getChildren=function(r,l,u,f){r===void 0&&(r=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-1e8);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof dn?l&&d.push(p):(u&&d.push(p),r&&d.push.apply(d,p.getChildren(!0,l,u)))),p=p._next;return d},e.getById=function(r){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===r)return l[u]},e.remove=function(r){return Dn(r)?this.removeLabel(r):en(r)?this.killTweensOf(r):(r.parent===this&&Ff(this,r),r===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(Ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=Hi(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,u){var f=dn.delayedCall(0,l||yc,u);return f.data="isPause",this._hasPause=1,ha(this,f,Hi(this,r))},e.removePause=function(r){var l=this._first;for(r=Hi(this,r);l;)l._start===r&&l.data==="isPause"&&Hr(l),l=l._next},e.killTweensOf=function(r,l,u){for(var f=this.getTweensOf(r,u),d=f.length;d--;)Lr!==f[d]&&f[d].kill(r,l);return this},e.getTweensOf=function(r,l){for(var u=[],f=Gi(r),d=this._first,p=Ja(l),m;d;)d instanceof dn?Uw(d._targets,f)&&(p?(!Lr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&u.push(d):(m=d.getTweensOf(f,l)).length&&u.push.apply(u,m),d=d._next;return u},e.tweenTo=function(r,l){l=l||{};var u=this,f=Hi(u,r),d=l,p=d.startAt,m=d.onStart,g=d.onStartParams,v=d.immediateRender,S,E=dn.to(u,Ci({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale())||kn,onStart:function(){if(u.pause(),!S){var x=l.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale());E._dur!==x&&tl(E,x,0,1).render(E._time,!0,!0),S=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(r,l,u){return this.tweenTo(l,Ci({startAt:{time:Hi(this,r)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),tS(this,Hi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),tS(this,Hi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+kn)},e.shiftChildren=function(r,l,u){u===void 0&&(u=0);for(var f=this._first,d=this.labels,p;f;)f._start>=u&&(f._start+=r,f._end+=r),f=f._next;if(l)for(p in d)d[p]>=u&&(d[p]+=r);return ws(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ws(this)},e.totalDuration=function(r){var l=0,u=this,f=u._last,d=ga,p,m,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(g=u.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&u._sort&&f._ts&&!u._lock?(u._lock=1,ha(u,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=m/u._ts,u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;tl(u,u===Ze&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(r){if(Ze._ts&&(ex(Ze,Df(r,Ze)),$S=Ei.frame),Ei.frame>=Ky){Ky+=Ai.autoSleep||120;var l=Ze._first;if((!l||!l._ts)&&Ai.autoSleep&&Ei._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ei.sleep()}}},t}(Mc);Ci(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var e2=function(t,e,i,r,l,u,f){var d=new ui(this._pt,t,e,0,1,wx,null,l),p=0,m=0,g,v,S,E,M,x,y,L;for(d.b=i,d.e=r,i+="",r+="",(y=~r.indexOf("random("))&&(r=Sc(r)),u&&(L=[i,r],u(L,t,e),i=L[0],r=L[1]),v=i.match(Cp)||[];g=Cp.exec(r);)E=g[0],M=r.substring(p,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==v[m++]&&(x=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:x,c:E.charAt(1)==="="?Vo(x,E)-x:parseFloat(E)-x,m:S&&S<4?Math.round:0},p=Cp.lastIndex);return d.c=p<r.length?r.substring(p,r.length):"",d.fp=f,(jS.test(r)||y)&&(d.e=0),this._pt=d,d},s_=function(t,e,i,r,l,u,f,d,p,m){en(r)&&(r=r(l||0,t,u));var g=t[e],v=i!=="get"?i:en(g)?p?t[e.indexOf("set")||!en(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,S=en(g)?p?s2:Rx:l_,E;if(Dn(r)&&(~r.indexOf("random(")&&(r=Sc(r)),r.charAt(1)==="="&&(E=Vo(v,r)+(Gn(v)||0),(E||E===0)&&(r=E))),!m||v!==r||Om)return!isNaN(v*r)&&r!==""?(E=new ui(this._pt,t,e,+v||0,r-(v||0),typeof g=="boolean"?l2:Cx,0,S),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&n_(e,r),e2.call(this,t,e,v,r,S,d||Ai.stringFilter,p))},n2=function(t,e,i,r,l){if(en(t)&&(t=_c(t,l,e,i,r)),!ya(t)||t.style&&t.nodeType||Xn(t)||YS(t))return Dn(t)?_c(t,l,e,i,r):t;var u={},f;for(f in t)u[f]=_c(t[f],l,e,i,r);return u},Tx=function(t,e,i,r,l,u){var f,d,p,m;if(Mi[t]&&(f=new Mi[t]).init(l,f.rawVars?e[t]:n2(e[t],r,l,u,i),i,r,u)!==!1&&(i._pt=d=new ui(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Io))for(p=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=d;return f},Lr,Om,o_=function o(t,e,i){var r=t.vars,l=r.ease,u=r.startAt,f=r.immediateRender,d=r.lazy,p=r.onUpdate,m=r.runBackwards,g=r.yoyoEase,v=r.keyframes,S=r.autoRevert,E=t._dur,M=t._startAt,x=t._targets,y=t.parent,L=y&&y.data==="nested"?y.vars.targets:x,U=t._overwrite==="auto"&&!Jm,R=t.timeline,O,P,N,B,b,A,H,st,K,ut,ct,X,$;if(R&&(!v||!l)&&(l="none"),t._ease=Ds(l,Qo.ease),t._yEase=g?Sx(Ds(g===!0?l:g,Qo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!r.runBackwards,!R||v&&!r.stagger){if(st=x[0]?Cs(x[0]).harness:0,X=st&&r[st.prop],O=wf(r,i_),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!S?M.render(-1,!0):M.revert(m&&E?_f:Dw),M._lazy=0),u){if(Hr(t._startAt=dn.set(x,Ci({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&li(d),startAt:null,delay:0,onUpdate:p&&function(){return bi(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(zn||!f&&!S)&&t._startAt.revert(_f),f&&E&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),N=Ci({overwrite:!1,data:"isFromStart",lazy:f&&!M&&li(d),immediateRender:f,stagger:0,parent:y},O),X&&(N[st.prop]=X),Hr(t._startAt=dn.set(x,N)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(zn?t._startAt.revert(_f):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,kn,kn);else if(!e)return}for(t._pt=t._ptCache=0,d=E&&li(d)||d&&!E,P=0;P<x.length;P++){if(b=x[P],H=b._gsap||r_(x)[P]._gsap,t._ptLookup[P]=ut={},Rm[H.id]&&zr.length&&Cf(),ct=L===x?P:L.indexOf(b),st&&(K=new st).init(b,X||O,t,ct,L)!==!1&&(t._pt=B=new ui(t._pt,b,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(W){ut[W]=B}),K.priority&&(A=1)),!st||X)for(N in O)Mi[N]&&(K=Tx(N,O,t,ct,b,L))?K.priority&&(A=1):ut[N]=B=s_.call(t,b,N,"get",O[N],ct,L,0,r.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),U&&t._pt&&(Lr=t,Ze.killTweensOf(b,ut,t.globalTime(e)),$=!t.parent,Lr=0),t._pt&&d&&(Rm[H.id]=1)}A&&Dx(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!$,v&&e<=0&&R.render(ga,!0,!0)},i2=function(t,e,i,r,l,u,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,v,S;if(!p)for(p=t._ptCache[e]=[],v=t._ptLookup,S=t._targets.length;S--;){if(m=v[S][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Om=1,t.vars[e]="+=0",o_(t,f),Om=0,d?vc(e+" not eligible for reset"):1;p.push(m)}for(S=p.length;S--;)g=p[S],m=g._pt||g,m.s=(r||r===0)&&!l?r:m.s+(r||0)+u*m.c,m.c=i-m.s,g.e&&(g.e=sn(i)+Gn(g.e)),g.b&&(g.b=m.s+Gn(g.b))},a2=function(t,e){var i=t[0]?Cs(t[0]).harness:0,r=i&&i.aliases,l,u,f,d;if(!r)return e;l=Jo({},e);for(u in r)if(u in l)for(d=r[u].split(","),f=d.length;f--;)l[d[f]]=l[u];return l},r2=function(t,e,i,r){var l=e.ease||r||"power1.inOut",u,f;if(Xn(e))f=i[t]||(i[t]=[]),e.forEach(function(d,p){return f.push({t:p/(e.length-1)*100,v:d,e:l})});else for(u in e)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:e[u],e:l})},_c=function(t,e,i,r,l){return en(t)?t.call(e,i,r,l):Dn(t)&&~t.indexOf("random(")?Sc(t):t},bx=a_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ax={};ci(bx+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ax[o]=1});var dn=function(o){XS(t,o);function t(i,r,l,u){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,u?r:pc(r))||this;var d=f.vars,p=d.duration,m=d.delay,g=d.immediateRender,v=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,x=d.scrollTrigger,y=d.yoyoEase,L=r.parent||Ze,U=(Xn(i)||YS(i)?Ja(i[0]):"length"in r)?[i]:Gi(i),R,O,P,N,B,b,A,H;if(f._targets=U.length?r_(U):vc("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,E||v||lf(p)||lf(m)){if(r=f.vars,R=f.timeline=new Jn({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:U}),R.kill(),R.parent=R._dp=ka(f),R._start=0,v||lf(p)||lf(m)){if(N=U.length,A=v&&ux(v),ya(v))for(B in v)~bx.indexOf(B)&&(H||(H={}),H[B]=v[B]);for(O=0;O<N;O++)P=wf(r,Ax),P.stagger=0,y&&(P.yoyoEase=y),H&&Jo(P,H),b=U[O],P.duration=+_c(p,ka(f),O,b,U),P.delay=(+_c(m,ka(f),O,b,U)||0)-f._delay,!v&&N===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),R.to(b,P,A?A(O,b,U):0),R._ease=be.none;R.duration()?p=m=0:f.timeline=0}else if(E){pc(Ci(R.vars.defaults,{ease:"none"})),R._ease=Ds(E.ease||r.ease||"none");var st=0,K,ut,ct;if(Xn(E))E.forEach(function(X){return R.to(U,X,">")}),R.duration();else{P={};for(B in E)B==="ease"||B==="easeEach"||r2(B,E[B],P,E.easeEach);for(B in P)for(K=P[B].sort(function(X,$){return X.t-$.t}),st=0,O=0;O<K.length;O++)ut=K[O],ct={ease:ut.e,duration:(ut.t-(O?K[O-1].t:0))/100*p},ct[B]=ut.v,R.to(U,ct,st),st+=ct.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||f.duration(p=R.duration())}else f.timeline=0;return S===!0&&!Jm&&(Lr=ka(f),Ze.killTweensOf(U),Lr=0),ha(L,ka(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!p&&!E&&f._start===pn(L._time)&&li(g)&&zw(ka(f))&&L.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),x&&sx(ka(f),x),f}var e=t.prototype;return e.render=function(r,l,u){var f=this._time,d=this._tDur,p=this._dur,m=r<0,g=r>d-kn&&!m?d:r<kn?0:r,v,S,E,M,x,y,L,U,R;if(!p)Bw(this,r,l,u);else if(g!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,u);if(v=pn(g%M),g===d?(E=this._repeat,v=p):(x=pn(g/M),E=~~x,E&&E===x?(v=p,E--):v>p&&(v=p)),y=this._yoyo&&E&1,y&&(R=this._yEase,v=p-v),x=$o(this._tTime,M),v===f&&!u&&this._initted&&E===x)return this._tTime=g,this;E!==x&&(U&&this._yEase&&xx(U,y),this.vars.repeatRefresh&&!y&&!this._lock&&v!==M&&this._initted&&(this._lock=u=1,this.render(pn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(ox(this,m?r:v,u,l,g))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&E!==x))return this;if(p!==this._dur)return this.render(r,l,u)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(R||this._ease)(v/p),this._from&&(this.ratio=L=1-L),v&&!f&&!l&&!E&&(bi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(L,S.d),S=S._next;U&&U.render(r<0?r:U._dur*U._ease(v/this._dur),l,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&Cm(this,r,l,u),bi(this,"onUpdate")),this._repeat&&E!==x&&this.vars.onRepeat&&!l&&this.parent&&bi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&Cm(this,r,!0,!0),(r||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Hr(this,1),!l&&!(m&&!f)&&(g||f||y)&&(bi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,u,f,d){xc||Ei.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||o_(this,p),m=this._ease(p/this._dur),i2(this,r,l,u,f,m,p,d)?this.resetTo(r,l,u,f,1):(Vf(this,0),this.parent||ax(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?hc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Lr&&Lr.vars.overwrite!==!0)._first||hc(this),this.parent&&u!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,d=r?Gi(r):f,p=this._ptLookup,m=this._pt,g,v,S,E,M,x,y;if((!l||l==="all")&&Nw(f,d))return l==="all"&&(this._pt=0),hc(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},ci(l,function(L){return M[L]=1}),l=M),l=a2(f,l)),y=f.length;y--;)if(~d.indexOf(f[y])){v=p[y],l==="all"?(g[y]=l,E=v,S={}):(S=g[y]=g[y]||{},E=l);for(M in E)x=v&&v[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&Ff(this,x,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&m&&hc(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return mc(1,arguments)},t.delayedCall=function(r,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(r,l,u){return mc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,u){return Ze.killTweensOf(r,l,u)},t}(Mc);Ci(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(o){dn[o]=function(){var t=new Jn,e=Dm.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var l_=function(t,e,i){return t[e]=i},Rx=function(t,e,i){return t[e](i)},s2=function(t,e,i,r){return t[e](r.fp,i)},o2=function(t,e,i){return t.setAttribute(e,i)},c_=function(t,e){return en(t[e])?Rx:$m(t[e])&&t.setAttribute?o2:l_},Cx=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},l2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wx=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},u_=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},c2=function(t,e,i,r){for(var l=this._pt,u;l;)u=l._next,l.p===r&&l.modifier(t,e,i),l=u},u2=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Ff(this,e,"_pt"):e.dep||(i=1),e=r;return!i},f2=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Dx=function(t){for(var e=t._pt,i,r,l,u;e;){for(i=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:u)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:u=e,e=i}t._pt=l},ui=function(){function o(e,i,r,l,u,f,d,p,m){this.t=i,this.s=l,this.c=u,this.p=r,this.r=f||Cx,this.d=d||this,this.set=p||l_,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,r,l){this.mSet=this.mSet||this.set,this.set=f2,this.m=i,this.mt=l,this.tween=r},o}();ci(a_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return i_[o]=1});Ri.TweenMax=Ri.TweenLite=dn;Ri.TimelineLite=Ri.TimelineMax=Jn;Ze=new Jn({sortChildren:!1,defaults:Qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=yx;var Ls=[],vf={},h2=[],nS=0,d2=0,Op=function(t){return(vf[t]||h2).map(function(e){return e()})},Nm=function(){var t=Date.now(),e=[];t-nS>2&&(Op("matchMediaInit"),Ls.forEach(function(i){var r=i.queries,l=i.conditions,u,f,d,p;for(f in r)u=ua.matchMedia(r[f]).matches,u&&(d=1),u!==l[f]&&(l[f]=u,p=1);p&&(i.revert(),d&&e.push(i))}),Op("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),nS=t,Op("matchMedia"))},Lx=function(){function o(e,i){this.selector=i&&Lm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=d2++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,r,l){en(i)&&(l=r,r=i,i=en);var u=this,f=function(){var p=Ye,m=u.selector,g;return p&&p!==u&&p.data.push(u),l&&(u.selector=Lm(l)),Ye=u,g=r.apply(u,arguments),en(g)&&u._r.push(g),Ye=p,u.selector=m,u.isReverted=!1,g};return u.last=f,i===en?f(u,function(d){return u.add(null,d)}):i?u[i]=f:f},t.ignore=function(i){var r=Ye;Ye=null,i(this),Ye=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof o?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var l=this;if(i?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)p=l.data[d],p instanceof Jn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof dn)&&p.revert&&p.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var u=Ls.length;u--;)Ls[u].id===this.id&&Ls.splice(u,1)},t.revert=function(i){this.kill(i||{})},o}(),p2=function(){function o(e){this.contexts=[],this.scope=e,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(i,r,l){ya(i)||(i={matches:i});var u=new Lx(0,l||this.scope),f=u.conditions={},d,p,m;Ye&&!u.selector&&(u.selector=Ye.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=i;for(p in i)p==="all"?m=1:(d=ua.matchMedia(i[p]),d&&(Ls.indexOf(u)<0&&Ls.push(u),(f[p]=d.matches)&&(m=1),d.addListener?d.addListener(Nm):d.addEventListener("change",Nm)));return m&&r(u,function(g){return u.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},o}(),Lf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return _x(r)})},timeline:function(t){return new Jn(t)},getTweensOf:function(t,e){return Ze.getTweensOf(t,e)},getProperty:function(t,e,i,r){Dn(t)&&(t=Gi(t)[0]);var l=Cs(t||{}).get,u=i?ix:nx;return i==="native"&&(i=""),t&&(e?u((Mi[e]&&Mi[e].get||l)(t,e,i,r)):function(f,d,p){return u((Mi[f]&&Mi[f].get||l)(t,f,d,p))})},quickSetter:function(t,e,i){if(t=Gi(t),t.length>1){var r=t.map(function(m){return hi.quickSetter(m,e,i)}),l=r.length;return function(m){for(var g=l;g--;)r[g](m)}}t=t[0]||{};var u=Mi[e],f=Cs(t),d=f.harness&&(f.harness.aliases||{})[e]||e,p=u?function(m){var g=new u;Io._pt=0,g.init(t,i?m+i:m,Io,0,[t]),g.render(1,g),Io._pt&&u_(1,Io)}:f.set(t,d);return u?p:function(m){return p(t,d,i?m+i:m,f,1)}},quickTo:function(t,e,i){var r,l=hi.to(t,Ci((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),u=function(d,p,m){return l.resetTo(e,d,p,m)};return u.tween=l,u},isTweening:function(t){return Ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ds(t.ease,Qo.ease)),Qy(Qo,t||{})},config:function(t){return Qy(Ai,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,l=t.defaults,u=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!Mi[f]&&!Ri[f]&&vc(e+" effect requires "+f+" plugin.")}),wp[e]=function(f,d,p){return i(Gi(f),Ci(d||{},l),p)},u&&(Jn.prototype[e]=function(f,d,p){return this.add(wp[e](f,ya(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,e){be[t]=Ds(e)},parseEase:function(t,e){return arguments.length?Ds(t,e):be},getById:function(t){return Ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Jn(t),r,l;for(i.smoothChildTiming=li(t.smoothChildTiming),Ze.remove(i),i._dp=0,i._time=i._tTime=Ze._time,r=Ze._first;r;)l=r._next,(e||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&ha(i,r,r._start-r._delay),r=l;return ha(Ze,i,0),i},context:function(t,e){return t?new Lx(t,e):Ye},matchMedia:function(t){return new p2(t)},matchMediaRefresh:function(){return Ls.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||Nm()},addEventListener:function(t,e){var i=vf[t]||(vf[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=vf[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Yw,wrapYoyo:qw,distribute:ux,random:hx,snap:fx,normalize:Ww,getUnit:Gn,clamp:Vw,splitColor:gx,toArray:Gi,selector:Lm,mapRange:px,pipe:kw,unitize:Xw,interpolate:jw,shuffle:cx},install:QS,effects:wp,ticker:Ei,updateRoot:Jn.updateRoot,plugins:Mi,globalTimeline:Ze,core:{PropTween:ui,globals:JS,Tween:dn,Timeline:Jn,Animation:Mc,getCache:Cs,_removeLinkedListItem:Ff,reverting:function(){return zn},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return Jm=t}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Lf[o]=dn[o]});Ei.add(Jn.updateRoot);Io=Lf.to({},{duration:0});var m2=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},_2=function(t,e){var i=t._targets,r,l,u;for(r in e)for(l=i.length;l--;)u=t._ptLookup[l][r],u&&(u=u.d)&&(u._pt&&(u=m2(u,r)),u&&u.modifier&&u.modifier(e[r],t,i[l],r))},Np=function(t,e){return{name:t,rawVars:1,init:function(r,l,u){u._onInit=function(f){var d,p;if(Dn(l)&&(d={},ci(l,function(m){return d[m]=1}),l=d),e){d={};for(p in l)d[p]=e(l[p]);l=d}_2(f,l)}}}},hi=Lf.registerPlugin({name:"attr",init:function(t,e,i,r,l){var u,f,d;this.tween=i;for(u in e)d=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(d||0)+"",e[u],r,l,0,0,u),f.op=u,f.b=d,this._props.push(u)},render:function(t,e){for(var i=e._pt;i;)zn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Np("roundProps",Um),Np("modifiers"),Np("snap",fx))||Lf;dn.version=Jn.version=hi.version="3.12.7";KS=1;t_()&&el();be.Power0;be.Power1;be.Power2;be.Power3;be.Power4;be.Linear;be.Quad;be.Cubic;be.Quart;be.Quint;be.Strong;be.Elastic;be.Back;be.SteppedEase;be.Bounce;be.Sine;be.Expo;be.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var iS,Ur,Go,f_,Rs,aS,h_,g2=function(){return typeof window<"u"},$a={},xs=180/Math.PI,ko=Math.PI/180,No=Math.atan2,rS=1e8,d_=/([A-Z])/g,v2=/(left|right|width|margin|padding|x)/i,y2=/[\s,\(]\S/,pa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},M2=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Ux=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ox=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},E2=function(t,e,i){return t.style[e]=i},T2=function(t,e,i){return t.style.setProperty(e,i)},b2=function(t,e,i){return t._gsap[e]=i},A2=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},R2=function(t,e,i,r,l){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},C2=function(t,e,i,r,l){var u=t._gsap;u[e]=i,u.renderTransform(l,u)},Ke="transform",fi=Ke+"Origin",w2=function o(t,e){var i=this,r=this.target,l=r.style,u=r._gsap;if(t in $a&&l){if(this.tfm=this.tfm||{},t!=="transform")t=pa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Xa(r,f)}):this.tfm[t]=u.x?u[t]:Xa(r,t),t===fi&&(this.tfm.zOrigin=u.zOrigin);else return pa.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(Ke)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,e,"")),t=Ke}(l||e)&&this.props.push(t,e,l[t])},Nx=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},D2=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(d_,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=h_(),(!l||!l.isStart)&&!i[Ke]&&(Nx(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Px=function(t,e){var i={target:t,props:[],revert:D2,save:w2};return t._gsap||hi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},zx,zm=function(t,e){var i=Ur.createElementNS?Ur.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ur.createElement(t);return i&&i.style?i:Ur.createElement(t)},va=function o(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(d_,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&o(t,nl(e)||e,1)||""},sS="O,Moz,ms,Ms,Webkit".split(","),nl=function(t,e,i){var r=e||Rs,l=r.style,u=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(sS[u]+t in l););return u<0?null:(u===3?"ms":u>=0?sS[u]:"")+t},Im=function(){g2()&&window.document&&(iS=window,Ur=iS.document,Go=Ur.documentElement,Rs=zm("div")||{style:{}},zm("div"),Ke=nl(Ke),fi=Ke+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zx=!!nl("perspective"),h_=hi.core.reverting,f_=1)},oS=function(t){var e=t.ownerSVGElement,i=zm("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",i.appendChild(r),Go.appendChild(i);try{l=r.getBBox()}catch{}return i.removeChild(r),Go.removeChild(i),l},lS=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Ix=function(t){var e,i;try{e=t.getBBox()}catch{e=oS(t),i=1}return e&&(e.width||e.height)||i||(e=oS(t)),e&&!e.width&&!e.x&&!e.y?{x:+lS(t,["x","cx","x1"])||0,y:+lS(t,["y","cy","y1"])||0,width:0,height:0}:e},Bx=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ix(t))},zs=function(t,e){if(e){var i=t.style,r;e in $a&&e!==fi&&(e=Ke),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(d_,"-$1").toLowerCase())):i.removeAttribute(e)}},Or=function(t,e,i,r,l,u){var f=new ui(t._pt,e,i,0,1,u?Ox:Ux);return t._pt=f,f.b=r,f.e=l,t._props.push(i),f},cS={deg:1,rad:1,turn:1},L2={grid:1,flex:1},Vr=function o(t,e,i,r){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Rs.style,d=v2.test(e),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=r==="px",S=r==="%",E,M,x,y;if(r===u||!l||cS[r]||cS[u])return l;if(u!=="px"&&!v&&(l=o(t,e,i,"px")),y=t.getCTM&&Bx(t),(S||u==="%")&&($a[e]||~e.indexOf("adius")))return E=y?t.getBBox()[d?"width":"height"]:t[m],sn(S?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?u:r),M=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!p?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Ur||!M.appendChild)&&(M=Ur.body),x=M._gsap,x&&S&&x.width&&d&&x.time===Ei.time&&!x.uncache)return sn(l/x.width*g);if(S&&(e==="height"||e==="width")){var L=t.style[e];t.style[e]=g+r,E=t[m],L?t.style[e]=L:zs(t,e)}else(S||u==="%")&&!L2[va(M,"display")]&&(f.position=va(t,"position")),M===t&&(f.position="static"),M.appendChild(Rs),E=Rs[m],M.removeChild(Rs),f.position="absolute";return d&&S&&(x=Cs(M),x.time=Ei.time,x.width=M[m]),sn(v?E*l/g:E&&l?g/E*l:0)},Xa=function(t,e,i,r){var l;return f_||Im(),e in pa&&e!=="transform"&&(e=pa[e],~e.indexOf(",")&&(e=e.split(",")[0])),$a[e]&&e!=="transform"?(l=Tc(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Of(va(t,fi))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Uf[e]&&Uf[e](t,e,i)||va(t,e)||tx(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Vr(t,e,l,i)+i:l},U2=function(t,e,i,r){if(!i||i==="none"){var l=nl(e,t,1),u=l&&va(t,l,1);u&&u!==i?(e=l,i=u):e==="borderColor"&&(i=va(t,"borderTopColor"))}var f=new ui(this._pt,t.style,e,0,1,wx),d=0,p=0,m,g,v,S,E,M,x,y,L,U,R,O;if(f.b=i,f.e=r,i+="",r+="",r==="auto"&&(M=t.style[e],t.style[e]=r,r=va(t,e)||r,M?t.style[e]=M:zs(t,e)),m=[i,r],yx(m),i=m[0],r=m[1],v=i.match(zo)||[],O=r.match(zo)||[],O.length){for(;g=zo.exec(r);)x=g[0],L=r.substring(d,g.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),x!==(M=v[p++]||"")&&(S=parseFloat(M)||0,R=M.substr((S+"").length),x.charAt(1)==="="&&(x=Vo(S,x)+R),y=parseFloat(x),U=x.substr((y+"").length),d=zo.lastIndex-U.length,U||(U=U||Ai.units[e]||R,d===r.length&&(r+=U,f.e+=U)),R!==U&&(S=Vr(t,e,M,U)||0),f._pt={_next:f._pt,p:L||p===1?L:",",s:S,c:y-S,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=d<r.length?r.substring(d,r.length):""}else f.r=e==="display"&&r==="none"?Ox:Ux;return jS.test(r)&&(f.e=0),this._pt=f,f},uS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},O2=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=uS[i]||i,e[1]=uS[r]||r,e.join(" ")},N2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,l=e.u,u=i._gsap,f,d,p;if(l==="all"||l===!0)r.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],$a[f]&&(d=1,f=f==="transformOrigin"?fi:Ke),zs(i,f);d&&(zs(i,Ke),u&&(u.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Tc(i,1),u.uncache=1,Nx(r)))}},Uf={clearProps:function(t,e,i,r,l){if(l.data!=="isFromStart"){var u=t._pt=new ui(t._pt,e,i,0,0,N2);return u.u=r,u.pr=-10,u.tween=l,t._props.push(i),1}}},Ec=[1,0,0,1,0,0],Fx={},Hx=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fS=function(t){var e=va(t,Ke);return Hx(e)?Ec:e.substr(7).match(qS).map(sn)},p_=function(t,e){var i=t._gsap||Cs(t),r=t.style,l=fS(t),u,f,d,p;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Ec:l):(l===Ec&&!t.offsetParent&&t!==Go&&!i.svg&&(d=r.display,r.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Go.appendChild(t)),l=fS(t),d?r.display=d:zs(t,"display"),p&&(f?u.insertBefore(t,f):u?u.appendChild(t):Go.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Bm=function(t,e,i,r,l,u){var f=t._gsap,d=l||p_(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=d[0],E=d[1],M=d[2],x=d[3],y=d[4],L=d[5],U=e.split(" "),R=parseFloat(U[0])||0,O=parseFloat(U[1])||0,P,N,B,b;i?d!==Ec&&(N=S*x-E*M)&&(B=R*(x/N)+O*(-M/N)+(M*L-x*y)/N,b=R*(-E/N)+O*(S/N)-(S*L-E*y)/N,R=B,O=b):(P=Ix(t),R=P.x+(~U[0].indexOf("%")?R/100*P.width:R),O=P.y+(~(U[1]||U[0]).indexOf("%")?O/100*P.height:O)),r||r!==!1&&f.smooth?(y=R-p,L=O-m,f.xOffset=g+(y*S+L*M)-y,f.yOffset=v+(y*E+L*x)-L):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=O,f.smooth=!!r,f.origin=e,f.originIsAbsolute=!!i,t.style[fi]="0px 0px",u&&(Or(u,f,"xOrigin",p,R),Or(u,f,"yOrigin",m,O),Or(u,f,"xOffset",g,f.xOffset),Or(u,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+O)},Tc=function(t,e){var i=t._gsap||new Ex(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,l=i.scaleX<0,u="px",f="deg",d=getComputedStyle(t),p=va(t,fi)||"0",m,g,v,S,E,M,x,y,L,U,R,O,P,N,B,b,A,H,st,K,ut,ct,X,$,W,yt,z,it,Et,Ct,q,dt;return m=g=v=M=x=y=L=U=R=0,S=E=1,i.svg=!!(t.getCTM&&Bx(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[Ke]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Ke]!=="none"?d[Ke]:"")),r.scale=r.rotate=r.translate="none"),N=p_(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),p=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Bm(t,$||p,!!$||i.originIsAbsolute,i.smooth!==!1,N)),O=i.xOrigin||0,P=i.yOrigin||0,N!==Ec&&(H=N[0],st=N[1],K=N[2],ut=N[3],m=ct=N[4],g=X=N[5],N.length===6?(S=Math.sqrt(H*H+st*st),E=Math.sqrt(ut*ut+K*K),M=H||st?No(st,H)*xs:0,L=K||ut?No(K,ut)*xs+M:0,L&&(E*=Math.abs(Math.cos(L*ko))),i.svg&&(m-=O-(O*H+P*K),g-=P-(O*st+P*ut))):(dt=N[6],Ct=N[7],z=N[8],it=N[9],Et=N[10],q=N[11],m=N[12],g=N[13],v=N[14],B=No(dt,Et),x=B*xs,B&&(b=Math.cos(-B),A=Math.sin(-B),$=ct*b+z*A,W=X*b+it*A,yt=dt*b+Et*A,z=ct*-A+z*b,it=X*-A+it*b,Et=dt*-A+Et*b,q=Ct*-A+q*b,ct=$,X=W,dt=yt),B=No(-K,Et),y=B*xs,B&&(b=Math.cos(-B),A=Math.sin(-B),$=H*b-z*A,W=st*b-it*A,yt=K*b-Et*A,q=ut*A+q*b,H=$,st=W,K=yt),B=No(st,H),M=B*xs,B&&(b=Math.cos(B),A=Math.sin(B),$=H*b+st*A,W=ct*b+X*A,st=st*b-H*A,X=X*b-ct*A,H=$,ct=W),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,y=180-y),S=sn(Math.sqrt(H*H+st*st+K*K)),E=sn(Math.sqrt(X*X+dt*dt)),B=No(ct,X),L=Math.abs(B)>2e-4?B*xs:0,R=q?1/(q<0?-q:q):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Hx(va(t,Ke)),$&&t.setAttribute("transform",$))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(S*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=g-((i.yPercent=g&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=v+u,i.scaleX=sn(S),i.scaleY=sn(E),i.rotation=sn(M)+f,i.rotationX=sn(x)+f,i.rotationY=sn(y)+f,i.skewX=L+f,i.skewY=U+f,i.transformPerspective=R+u,(i.zOrigin=parseFloat(p.split(" ")[2])||!e&&i.zOrigin||0)&&(r[fi]=Of(p)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?z2:zx?Vx:P2,i.uncache=0,i},Of=function(t){return(t=t.split(" "))[0]+" "+t[1]},Pp=function(t,e,i){var r=Gn(e);return sn(parseFloat(e)+parseFloat(Vr(t,"x",i+"px",r)))+r},P2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vx(t,e)},gs="0deg",lc="0px",vs=") ",Vx=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.z,p=i.rotation,m=i.rotationY,g=i.rotationX,v=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,x=i.transformPerspective,y=i.force3D,L=i.target,U=i.zOrigin,R="",O=y==="auto"&&t&&t!==1||y===!0;if(U&&(g!==gs||m!==gs)){var P=parseFloat(m)*ko,N=Math.sin(P),B=Math.cos(P),b;P=parseFloat(g)*ko,b=Math.cos(P),u=Pp(L,u,N*b*-U),f=Pp(L,f,-Math.sin(P)*-U),d=Pp(L,d,B*b*-U+U)}x!==lc&&(R+="perspective("+x+vs),(r||l)&&(R+="translate("+r+"%, "+l+"%) "),(O||u!==lc||f!==lc||d!==lc)&&(R+=d!==lc||O?"translate3d("+u+", "+f+", "+d+") ":"translate("+u+", "+f+vs),p!==gs&&(R+="rotate("+p+vs),m!==gs&&(R+="rotateY("+m+vs),g!==gs&&(R+="rotateX("+g+vs),(v!==gs||S!==gs)&&(R+="skew("+v+", "+S+vs),(E!==1||M!==1)&&(R+="scale("+E+", "+M+vs),L.style[Ke]=R||"translate(0, 0)"},z2=function(t,e){var i=e||this,r=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.rotation,p=i.skewX,m=i.skewY,g=i.scaleX,v=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,x=i.xOffset,y=i.yOffset,L=i.forceCSS,U=parseFloat(u),R=parseFloat(f),O,P,N,B,b;d=parseFloat(d),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,d+=m),d||p?(d*=ko,p*=ko,O=Math.cos(d)*g,P=Math.sin(d)*g,N=Math.sin(d-p)*-v,B=Math.cos(d-p)*v,p&&(m*=ko,b=Math.tan(p-m),b=Math.sqrt(1+b*b),N*=b,B*=b,m&&(b=Math.tan(m),b=Math.sqrt(1+b*b),O*=b,P*=b)),O=sn(O),P=sn(P),N=sn(N),B=sn(B)):(O=g,B=v,P=N=0),(U&&!~(u+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(U=Vr(S,"x",u,"px"),R=Vr(S,"y",f,"px")),(E||M||x||y)&&(U=sn(U+E-(E*O+M*N)+x),R=sn(R+M-(E*P+M*B)+y)),(r||l)&&(b=S.getBBox(),U=sn(U+r/100*b.width),R=sn(R+l/100*b.height)),b="matrix("+O+","+P+","+N+","+B+","+U+","+R+")",S.setAttribute("transform",b),L&&(S.style[Ke]=b)},I2=function(t,e,i,r,l){var u=360,f=Dn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?xs:1),p=d-r,m=r+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=u,p!==p%(u/2)&&(p+=p<0?u:-360)),g==="cw"&&p<0?p=(p+u*rS)%u-~~(p/u)*u:g==="ccw"&&p>0&&(p=(p-u*rS)%u-~~(p/u)*u)),t._pt=v=new ui(t._pt,e,i,r,p,S2),v.e=m,v.u="deg",t._props.push(i),v},hS=function(t,e){for(var i in e)t[i]=e[i];return t},B2=function(t,e,i){var r=hS({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,d,p,m,g,v,S,E;r.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),u[Ke]=e,f=Tc(i,1),zs(i,Ke),i.setAttribute("transform",p)):(p=getComputedStyle(i)[Ke],u[Ke]=e,f=Tc(i,1),u[Ke]=p);for(d in $a)p=r[d],m=f[d],p!==m&&l.indexOf(d)<0&&(S=Gn(p),E=Gn(m),g=S!==E?Vr(i,d,p,E):parseFloat(p),v=parseFloat(m),t._pt=new ui(t._pt,f,d,g,v-g,Pm),t._pt.u=E||0,t._props.push(d));hS(f,r)};ci("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",r="Bottom",l="Left",u=(t<3?[e,i,r,l]:[e+l,e+i,r+i,r+l]).map(function(f){return t<2?o+f:"border"+f+o});Uf[t>1?"border"+o:o]=function(f,d,p,m,g){var v,S;if(arguments.length<4)return v=u.map(function(E){return Xa(f,E,p)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(m+"").split(" "),S={},u.forEach(function(E,M){return S[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,S,g)}});var Gx={name:"css",register:Im,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,l){var u=this._props,f=t.style,d=i.vars.startAt,p,m,g,v,S,E,M,x,y,L,U,R,O,P,N,B;f_||Im(),this.styles=this.styles||Px(t),B=this.styles.props,this.tween=i;for(M in e)if(M!=="autoRound"&&(m=e[M],!(Mi[M]&&Tx(M,e,i,r,t,l)))){if(S=typeof m,E=Uf[M],S==="function"&&(m=m.call(i,r,t,l),S=typeof m),S==="string"&&~m.indexOf("random(")&&(m=Sc(m)),E)E(this,t,M,m,i)&&(N=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Ir.lastIndex=0,Ir.test(p)||(x=Gn(p),y=Gn(m)),y?x!==y&&(p=Vr(t,M,p,y)+y):x&&(m+=x),this.add(f,"setProperty",p,m,r,l,0,0,M),u.push(M),B.push(M,0,f[M]);else if(S!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(i,r,t,l):d[M],Dn(p)&&~p.indexOf("random(")&&(p=Sc(p)),Gn(p+"")||p==="auto"||(p+=Ai.units[M]||Gn(Xa(t,M))||""),(p+"").charAt(1)==="="&&(p=Xa(t,M))):p=Xa(t,M),v=parseFloat(p),L=S==="string"&&m.charAt(1)==="="&&m.substr(0,2),L&&(m=m.substr(2)),g=parseFloat(m),M in pa&&(M==="autoAlpha"&&(v===1&&Xa(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),Or(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=pa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in $a,U){if(this.styles.save(M),R||(O=t._gsap,O.renderTransform&&!e.parseTransform||Tc(t,e.parseTransform),P=e.smoothOrigin!==!1&&O.smooth,R=this._pt=new ui(this._pt,f,Ke,0,1,O.renderTransform,O,0,-1),R.dep=1),M==="scale")this._pt=new ui(this._pt,O,"scaleY",O.scaleY,(L?Vo(O.scaleY,L+g):g)-O.scaleY||0,Pm),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(fi,0,f[fi]),m=O2(m),O.svg?Bm(t,m,0,P,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==O.zOrigin&&Or(this,O,"zOrigin",O.zOrigin,y),Or(this,f,M,Of(p),Of(m)));continue}else if(M==="svgOrigin"){Bm(t,m,1,P,0,this);continue}else if(M in Fx){I2(this,O,M,v,L?Vo(v,L+m):m);continue}else if(M==="smoothOrigin"){Or(this,O,"smooth",O.smooth,m);continue}else if(M==="force3D"){O[M]=m;continue}else if(M==="transform"){B2(this,m,t);continue}}else M in f||(M=nl(M)||M);if(U||(g||g===0)&&(v||v===0)&&!y2.test(m)&&M in f)x=(p+"").substr((v+"").length),g||(g=0),y=Gn(m)||(M in Ai.units?Ai.units[M]:x),x!==y&&(v=Vr(t,M,p,y)),this._pt=new ui(this._pt,U?O:f,M,v,(L?Vo(v,L+g):g)-v,!U&&(y==="px"||M==="zIndex")&&e.autoRound!==!1?M2:Pm),this._pt.u=y||0,x!==y&&y!=="%"&&(this._pt.b=p,this._pt.r=x2);else if(M in f)U2.call(this,t,M,p,L?L+m:m);else if(M in t)this.add(t,M,p||t[M],L?L+m:m,r,l);else if(M!=="parseTransform"){n_(M,m);continue}U||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,p||t[M])),u.push(M)}}N&&Dx(this)},render:function(t,e){if(e.tween._time||!h_())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Xa,aliases:pa,getSetter:function(t,e,i){var r=pa[e];return r&&r.indexOf(",")<0&&(e=r),e in $a&&e!==fi&&(t._gsap.x||Xa(t,"x"))?i&&aS===i?e==="scale"?A2:b2:(aS=i||{})&&(e==="scale"?R2:C2):t.style&&!$m(t.style[e])?E2:~e.indexOf("-")?T2:c_(t,e)},core:{_removeProperty:zs,_getMatrix:p_}};hi.utils.checkPrefix=nl;hi.core.getStyleSaver=Px;(function(o,t,e,i){var r=ci(o+","+t+","+e,function(l){$a[l]=1});ci(t,function(l){Ai.units[l]="deg",Fx[l]=1}),pa[r[13]]=o+","+t,ci(i,function(l){var u=l.split(":");pa[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ai.units[o]="px"});hi.registerPlugin(Gx);var yf=hi.registerPlugin(Gx)||hi;yf.core.Tween;class F2{constructor(t){Gt(this,"scene");Gt(this,"viewAngleLines");Gt(this,"isVisible");this.scene=t,this.viewAngleLines=[],this.isVisible=us.ShowViewAngleEdges}toggle(){return this.isVisible=!this.isVisible,this.isVisible}setVisible(t){this.isVisible=t}getVisible(){return this.isVisible}draw(t,e){if(this.clear(),!this.isVisible)return;const i=e*Math.PI/180,r=ma.ViewAngle*Math.PI/180,l=ma.MaxViewDistance,u=new Ef({color:us.EdgeColor,transparent:!0,opacity:us.EdgeOpacity,linewidth:us.EdgeLineWidth});this.drawEdgeLine(t,i-r,l,u),this.drawEdgeLine(t,i+r,l,u);const f=new Ef({color:us.EdgeColor,transparent:!0,opacity:us.EdgeOpacity*1.2,linewidth:us.EdgeLineWidth});this.drawEdgeLine(t,i,l,f)}drawEdgeLine(t,e,i,r){const l={x:t.x+i*Math.cos(e),y:t.y+i*Math.sin(e)},u=[new nt(t.x,t.y,0),new nt(l.x,l.y,0)],f=new na().setFromPoints(u),d=new Km(f,r);this.scene.add(d),this.viewAngleLines.push(d)}clear(){for(const t of this.viewAngleLines)this.scene.remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose();this.viewAngleLines=[]}dispose(){this.clear()}}class ai{static createNodeCircle(t,e,i=wr.CircleSize){const r=new Af(i,wr.CircleSegments).center(),l=new Es({color:wr.DefaultColor}),u=new Ti(r,l);return u.position.set(t,e,0),u}static createPlayer(t=16776960){const e=new Ps(ma.CubeSize,ma.CubeSize,ma.CubeSize),i=new Es({color:t});return new Ti(e,i)}static createEnemy(t=16711680){const e=new Ps(Kd.CubeSize,Kd.CubeSize,Kd.CubeSize),i=new Es({color:t});return new Ti(e,i)}static createLineSegment(t,e,i,r){const l=new Ef({color:Qi.LineColor}),u=[new nt(t,e,0),new nt(i,r,0)],f=new na().setFromPoints(u);return new Km(f,l)}static createUndefinedMesh(){const t=new Af,e=new Es;return new Ti(t,e)}static setMeshColor(t,e){t.material instanceof Es&&t.material.color.setHex(e)}static setMeshPosition(t,e,i,r=0){t.position.set(e,i,r)}static setMeshScale(t,e){t.scale.set(e,e,e)}}class H2{constructor(t,e,i,r){Gt(this,"sceneManager");Gt(this,"model");Gt(this,"viewAngleVisualizer");Gt(this,"meshList",[]);Gt(this,"playerMeshes",new Map);Gt(this,"enemyMeshes",new Map);Gt(this,"meshToNodeMap",new Map);Gt(this,"nodeToMeshMap",new Map);Gt(this,"playerSelectMesh");Gt(this,"playerNextMesh");Gt(this,"playerShotMesh");Gt(this,"undefinedMesh");Gt(this,"activePlayerId");Gt(this,"activeEnemyId");this.sceneManager=t,this.model=e,this.activePlayerId=i,this.activeEnemyId=r,this.viewAngleVisualizer=new F2(t.getScene()),this.playerSelectMesh=ai.createUndefinedMesh(),this.playerNextMesh=ai.createUndefinedMesh(),this.playerShotMesh=ai.createUndefinedMesh(),this.undefinedMesh=ai.createUndefinedMesh(),this.initializeVisualization()}initializeVisualization(){for(const t of this.model.nodeList){const e=ai.createNodeCircle(t.x,t.y);this.sceneManager.addToScene(e),this.meshList.push(e),this.meshToNodeMap.set(e.id,t.id),this.nodeToMeshMap.set(t.id,e.id)}for(const t of this.model.Lines){const e=ai.createLineSegment(t.start.x,t.start.y,t.end.x,t.end.y);this.sceneManager.addToScene(e)}for(const[t,e]of this.model.players){const i=ai.createPlayer(e.color);this.sceneManager.addToScene(i),this.playerMeshes.set(t,i)}for(const[t,e]of this.model.enemies){const i=ai.createEnemy(e.color);this.sceneManager.addToScene(i),this.enemyMeshes.set(t,i)}}updateView(){const t=this.model.getPlayer(this.activePlayerId);t&&(this.updateEnemies(),this.updatePlayers(),this.resetNodeColors(),this.updateSpecialNodes(),this.viewAngleVisualizer.draw(t.node,t.angle),this.updateVisibleNodes(t))}updateEnemies(){for(const[t,e]of this.model.enemies){const i=this.enemyMeshes.get(t);if(i){i.visible=!1,yf.to(i.position,{x:e.node.x,y:e.node.y,duration:cs.MovementDuration});const r=t===this.activeEnemyId?Wv.ACTIVE_SCALE:Wv.NORMAL_SCALE;i.scale.set(r,r,r)}}}updatePlayers(){for(const[t,e]of this.model.players){const i=this.playerMeshes.get(t);if(i){yf.to(i.position,{x:e.node.x,y:e.node.y,duration:cs.MovementDuration});const r=t===this.activePlayerId?Xv.ACTIVE_SCALE:Xv.NORMAL_SCALE;i.scale.set(r,r,r)}}}resetNodeColors(){this.meshList.forEach(t=>{ai.setMeshColor(t,wr.DefaultColor)})}updateSpecialNodes(){this.playerShotMesh&&this.playerShotMesh!==this.undefinedMesh&&(ai.setMeshColor(this.playerShotMesh,wr.ShotTargetColor),yf.fromTo(this.playerShotMesh.scale,{x:1,y:1},{x:cs.ShotPulseScale,y:cs.ShotPulseScale,duration:cs.ShotPulseDuration,yoyo:!0,repeat:1,repeatDelay:cs.ShotPulseRepeatDelay,ease:cs.ShotPulseEase,overwrite:"auto"})),this.playerSelectMesh&&this.playerSelectMesh!==this.undefinedMesh&&ai.setMeshColor(this.playerSelectMesh,wr.SelectedColor),this.playerNextMesh&&this.playerNextMesh!==this.undefinedMesh&&ai.setMeshColor(this.playerNextMesh,wr.NextMoveColor)}updateVisibleNodes(t){const e=this.model.getVisibleNodesAtAngle(t.node,t.angle,ma.MaxViewDistance);for(const i of e){const r=this.meshList.find(l=>this.meshToNodeMap.get(l.id)===i.id);r&&ai.setMeshColor(r,wr.VisibleColor);for(const[l,u]of this.model.enemies)if(u.node.id===i.id){const f=this.enemyMeshes.get(l);f&&(f.visible=!0)}}}updateObstacles(){const t=this.sceneManager.getScene(),e=[];t.traverse(i=>{i instanceof Km&&e.push(i)}),e.forEach(i=>this.sceneManager.removeFromScene(i));for(const i of this.model.Lines){const r=ai.createLineSegment(i.start.x,i.start.y,i.end.x,i.end.y);this.sceneManager.addToScene(r)}this.updateView()}toggleViewAngle(){const t=this.viewAngleVisualizer.toggle();return this.updateView(),t}setActivePlayer(t){this.activePlayerId=t,this.updateView()}setActiveEnemy(t){this.activeEnemyId=t,this.updateView()}getMeshList(){return this.meshList}getMeshToNodeMap(){return this.meshToNodeMap}setPlayerSelectMesh(t){this.playerSelectMesh=t}setPlayerNextMesh(t){this.playerNextMesh=t}setPlayerShotMesh(t){this.playerShotMesh=t}getUndefinedMesh(){return this.undefinedMesh}getPlayerSelectMesh(){return this.playerSelectMesh}getPlayerNextMesh(){return this.playerNextMesh}getPlayerShotMesh(){return this.playerShotMesh}}var xi=(o=>(o.PLAYER_MOVED="player:moved",o.PLAYER_SELECTED="player:selected",o.PLAYER_SWITCHED="player:switched",o.PLAYER_SHOT="player:shot",o.PLAYER_ANGLE_CHANGED="player:angle_changed",o.ENEMY_MOVED="enemy:moved",o.ENEMY_SELECTED="enemy:selected",o.ENEMY_HIT="enemy:hit",o.ENEMY_SWITCHED="enemy:switched",o.COMBAT_RESOLVED="combat:resolved",o.HIT_DETECTED="hit:detected",o.MISS_DETECTED="miss:detected",o.TURN_STARTED="turn:started",o.TURN_ENDED="turn:ended",o.TURN_ACTION="turn:action",o.NODE_CLICKED="node:clicked",o.CANVAS_CLICKED_EMPTY="canvas:clicked_empty",o.KEY_PRESSED="key:pressed",o.VIEW_UPDATED="view:updated",o.VIEW_ANGLE_TOGGLED="view:angle_toggled",o.CAMERA_MOVED="camera:moved",o.MAP_GENERATED="map:generated",o.OBSTACLES_UPDATED="obstacles:updated",o.GAME_STARTED="game:started",o.GAME_PAUSED="game:paused",o.GAME_RESUMED="game:resumed",o.GAME_OVER="game:over",o))(xi||{});class V2{constructor(t=!1){Gt(this,"listeners",new Map);Gt(this,"eventHistory",[]);Gt(this,"debugMode",!1);Gt(this,"maxHistorySize",100);this.debugMode=t}on(t,e){this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),this.debugMode&&console.log(`[GameEventBus] Listener registered for: ${t}`)}off(t,e){const i=this.listeners.get(t);i&&(i.delete(e),this.debugMode&&console.log(`[GameEventBus] Listener unregistered for: ${t}`))}emit(t,e){this.eventHistory.push({type:t,data:e,timestamp:Date.now()}),this.eventHistory.length>this.maxHistorySize&&this.eventHistory.shift();const i=this.listeners.get(t);i&&i.forEach(r=>{try{r(e)}catch(l){console.error(`[GameEventBus] Error in listener for ${t}:`,l)}}),this.debugMode&&console.log(`[GameEventBus] Event emitted: ${t}`,e)}once(t,e){const i=r=>{e(r),this.off(t,i)};this.on(t,i)}getHistory(){return[...this.eventHistory]}clearHistory(){this.eventHistory=[]}getRegisteredEvents(){return Array.from(this.listeners.keys())}getListenerCount(t){var e;return((e=this.listeners.get(t))==null?void 0:e.size)??0}removeAllListeners(t){t?(this.listeners.delete(t),this.debugMode&&console.log(`[GameEventBus] All listeners removed for: ${t}`)):(this.listeners.clear(),this.debugMode&&console.log("[GameEventBus] All listeners removed"))}setDebugMode(t){this.debugMode=t}setMaxHistorySize(t){for(this.maxHistorySize=t;this.eventHistory.length>this.maxHistorySize;)this.eventHistory.shift()}}const G2=new V2;class k2{constructor(t,e,i,r,l){Gt(this,"canvas");Gt(this,"raycaster");Gt(this,"camera");Gt(this,"meshList");Gt(this,"meshToNodeMap");Gt(this,"eventBus");this.canvas=t,this.camera=e,this.meshList=i,this.meshToNodeMap=r,this.eventBus=l,this.raycaster=new Ub,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("click",this.handleCanvasClick.bind(this),!1),window.addEventListener("keydown",this.handleKeyDown.bind(this),!1)}handleCanvasClick(t){const e=this.getIntersects(t);if(e.length>0){const i=e[0].object,r=this.meshToNodeMap.get(i.id);r!==void 0&&this.eventBus.emit(xi.NODE_CLICKED,{nodeId:r,position:{x:i.position.x,y:i.position.y}})}else this.eventBus.emit(xi.CANVAS_CLICKED_EMPTY)}handleKeyDown(t){this.eventBus.emit(xi.KEY_PRESSED,{key:t.key}),t.key===go.TOGGLE_VIEW_ANGLE||t.key===go.TOGGLE_VIEW_ANGLE_UPPER?this.eventBus.emit(xi.VIEW_ANGLE_TOGGLED,{isVisible:!0}):t.key===go.SELECT_PLAYER_1?this.eventBus.emit(xi.PLAYER_SWITCHED,{previousPlayerId:"",currentPlayerId:Kn.PLAYER_1}):t.key===go.SELECT_PLAYER_2?this.eventBus.emit(xi.PLAYER_SWITCHED,{previousPlayerId:"",currentPlayerId:Kn.PLAYER_2}):t.key===go.SELECT_ENEMY_1?this.eventBus.emit(xi.ENEMY_SWITCHED,{enemyId:Kn.ENEMY_1}):t.key===go.SELECT_ENEMY_2&&this.eventBus.emit(xi.ENEMY_SWITCHED,{enemyId:Kn.ENEMY_2})}getIntersects(t){const e=this.canvas.clientWidth,i=this.canvas.clientHeight,r=t.offsetX/e*2-1,l=t.offsetY/i*2-1,u=new pe(r,-l);return this.raycaster.setFromCamera(u,this.camera),this.raycaster.intersectObjects(this.meshList)}dispose(){this.canvas.removeEventListener("click",this.handleCanvasClick.bind(this)),window.removeEventListener("keydown",this.handleKeyDown.bind(this))}}class X2{constructor(t,e,i,r){Gt(this,"model");Gt(this,"visualizationSync");Gt(this,"eventBus");Gt(this,"activePlayerId");this.model=t,this.visualizationSync=e,this.eventBus=i,this.activePlayerId=r,this.setupEventListeners()}setupEventListeners(){this.eventBus.on(xi.NODE_CLICKED,this.handleNodeClick.bind(this)),this.eventBus.on(xi.CANVAS_CLICKED_EMPTY,this.handleCanvasEmptyClick.bind(this)),this.eventBus.on(xi.PLAYER_SWITCHED,this.handlePlayerSwitch.bind(this)),this.eventBus.on(xi.VIEW_ANGLE_TOGGLED,this.handleViewAngleToggle.bind(this))}handleNodeClick(t){const e=this.model.getPlayer(this.activePlayerId);if(!e)return;const i=e.stateMachine,r=this.model.nodeList[t.nodeId];if(!r)return;const l=i.getState();l===uc.Idle?this.handleIdleStateClick(e,r,i):l===uc.Select?this.handleSelectStateClick(e,r,i):l===uc.Move?this.handleMoveStateClick(e,r,i):l===uc.Shot&&this.handleShotStateClick(e,r,i),this.visualizationSync.updateView()}handleIdleStateClick(t,e,i){if(t.node.id===e.id){i.transition(ca.SelectPlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerSelectMesh(r)}}handleSelectStateClick(t,e,i){if(t.node.id===e.id){i.transition(ca.MovePlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerNextMesh(r)}else if(this.model.areNodesConnected(t.node,e)){i.transition(ca.MovePlayer);const r=this.findMeshByNodeId(e.id);r&&this.visualizationSync.setPlayerNextMesh(r)}}handleMoveStateClick(t,e,i){const r=this.visualizationSync.getPlayerNextMesh(),l=this.getMeshToNodeMap().get(r.id);if(l!==void 0){const u=this.model.nodeList[l];if(this.model.getVisibleNodesAtAngle(u,t.angle,ma.MaxViewDistance).some(p=>p.id===e.id)){i.transition(ca.ShotPlayer);const p=this.findMeshByNodeId(e.id);p&&this.visualizationSync.setPlayerShotMesh(p)}}}handleShotStateClick(t,e,i){const r=this.visualizationSync.getPlayerShotMesh();if(this.getMeshToNodeMap().get(r.id)===e.id)this.executeTurn(t,i);else{const u=this.visualizationSync.getPlayerNextMesh(),f=this.getMeshToNodeMap().get(u.id);if(f!==void 0){const d=this.model.nodeList[f];if(this.model.getVisibleNodesAtAngle(d,t.angle,ma.MaxViewDistance).some(g=>g.id===e.id)){i.transition(ca.ShotPlayer);const g=this.findMeshByNodeId(e.id);g&&this.visualizationSync.setPlayerShotMesh(g)}}}}executeTurn(t,e){e.transition(ca.Complete);const i=this.visualizationSync.getPlayerNextMesh(),r=this.getMeshToNodeMap().get(i.id);r!==void 0&&this.model.setPlayerRef(this.activePlayerId,this.model.nodeList[r]),this.moveEnemiesRandomly();const l=this.visualizationSync.getPlayerShotMesh(),u=this.getMeshToNodeMap().get(l.id);this.checkCombatResults(u);const f=this.getMeshToNodeMap().get(i.id),d=this.getMeshToNodeMap().get(l.id);if(f!==void 0&&d!==void 0){const p=this.model.getAngleBetweenNodes(this.model.nodeList[f],this.model.nodeList[d]);t.setAngle(p)}e.transition(ca.SelectPlayer),this.visualizationSync.setPlayerSelectMesh(i),this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh()),this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh())}moveEnemiesRandomly(){for(const[t,e]of this.model.enemies){const i=this.model.Edges.List[e.node.id];if(i&&i.length>0){const r=i[Math.floor(Math.random()*i.length)];this.model.setEnemyRef(t,this.model.nodeList[r])}}}checkCombatResults(t){let e=!1;for(const[i,r]of this.model.enemies)if(t===r.node.id){console.log(`${this.activePlayerId} hit ${i}!`),e=!0;break}if(!e){const i=this.model.getPlayer(this.activePlayerId);if(i){for(const[r,l]of this.model.enemies)if(i.node.id===l.node.id){console.log(`${this.activePlayerId} LOSE to ${r}!`);break}}}}handleCanvasEmptyClick(){const t=this.model.getPlayer(this.activePlayerId);if(!t)return;const e=t.stateMachine;e.transition(ca.Cancel),this.visualizationSync.setPlayerShotMesh(this.visualizationSync.getUndefinedMesh()),this.visualizationSync.setPlayerNextMesh(this.visualizationSync.getUndefinedMesh()),e.transition(ca.SelectPlayer),this.visualizationSync.updateView()}handlePlayerSwitch(t){this.activePlayerId=t.currentPlayerId,this.visualizationSync.setActivePlayer(t.currentPlayerId),console.log(`Switched to ${t.currentPlayerId}`)}handleViewAngleToggle(){const t=this.visualizationSync.toggleViewAngle();console.log(`View angle edges: ${t?"ON":"OFF"}`)}findMeshByNodeId(t){const e=this.visualizationSync.getMeshList(),i=this.getMeshToNodeMap();return e.find(r=>i.get(r.id)===t)}getMeshToNodeMap(){return this.visualizationSync.getMeshToNodeMap()}getModel(){return this.model}regenerateObstacles(){this.model.generateRandomObstacles(),this.visualizationSync.updateObstacles()}importObstacles(t){this.model.importObstacles(t),this.visualizationSync.updateObstacles()}generateComplexMap(){this.model.generateComplexMap(),this.visualizationSync.updateObstacles()}}class W2{constructor(t){Gt(this,"sceneManager");Gt(this,"visualizationSync");Gt(this,"inputHandler");Gt(this,"gameController");Gt(this,"eventBus");Gt(this,"model");this.eventBus=G2,this.sceneManager=new Tw(t),this.model=new lT,this.visualizationSync=new H2(this.sceneManager,this.model,Kn.PLAYER_1,Kn.ENEMY_1),this.inputHandler=new k2(t,this.sceneManager.getCamera(),this.visualizationSync.getMeshList(),this.visualizationSync.getMeshToNodeMap(),this.eventBus),this.gameController=new X2(this.model,this.visualizationSync,this.eventBus,Kn.PLAYER_1),this.startRenderLoop(),this.visualizationSync.updateView()}startRenderLoop(){const t=()=>{this.sceneManager.updateControls(),this.sceneManager.render(),requestAnimationFrame(t)};t()}getModel(){return this.gameController.getModel()}regenerateObstacles(){this.gameController.regenerateObstacles()}importObstacles(t){this.gameController.importObstacles(t)}generateComplexMap(){this.gameController.generateComplexMap()}dispose(){this.sceneManager.dispose(),this.inputHandler.dispose()}}function Y2(o){return new W2(o)}function q2(o){const t={obstacles:o.map(e=>({id:e.id,segments:e.segments.map(i=>({start:{x:i.start.x,y:i.start.y},end:{x:i.end.x,y:i.end.y}}))}))};return JSON.stringify(t,null,2)}function j2(o,t="obstacles.json"){const e=q2(o),i=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(r)}const Z2=({threeSetup:o})=>{const t=JE.useRef(null),e=()=>{if(o){const v=o.getModel().getObstacles();j2(v)}},i=()=>{o&&o.regenerateObstacles()},r=()=>{o&&o.generateComplexMap()},l=()=>{var g;(g=t.current)==null||g.click()},u=g=>{var E;const v=(E=g.target.files)==null?void 0:E[0];if(!v||!o)return;const S=new FileReader;S.onload=M=>{var x;try{const y=(x=M.target)==null?void 0:x.result,L=JSON.parse(y);L.obstacles&&Array.isArray(L.obstacles)?o.importObstacles(L.obstacles):alert("無効なJSONファイル形式です。")}catch(y){alert("JSONファイルの読み込みに失敗しました。"),console.error("Import error:",y)}},S.readAsText(v),g.target.value=""},f={position:"absolute",top:"10px",right:"10px",padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",zIndex:1e3},d={...f,top:"60px",backgroundColor:"#FF9800"},p={...f,top:"110px",backgroundColor:"#2196F3"},m={...f,top:"160px",backgroundColor:"#9C27B0"};return xn.jsxs(xn.Fragment,{children:[xn.jsx("button",{onClick:e,style:f,"aria-label":"障害物をエクスポート",children:"障害物をエクスポート"}),xn.jsx("button",{onClick:i,style:d,"aria-label":"障害物をランダム生成",children:"障害物をランダム生成"}),xn.jsx("button",{onClick:r,style:m,"aria-label":"複雑なマップ生成",children:"複雑なマップ生成"}),xn.jsx("button",{onClick:l,style:p,"aria-label":"障害物をインポート",children:"障害物をインポート"}),xn.jsx("input",{ref:t,type:"file",accept:".json",onChange:u,style:{display:"none"}})]})},K2=()=>{const[o,t]=Ya.useState([]),[e,i]=Ya.useState(0);Ya.useEffect(()=>{const p=console.log,m=console.warn,g=console.error,v=console.info,S=(E,M)=>{const x=new Date().toLocaleTimeString();t(y=>[...y,{id:e,message:String(E),timestamp:x,type:M}].slice(-10)),i(y=>y+1)};return console.log=(...E)=>{S(E.join(" "),"log"),p(...E)},console.info=(...E)=>{S(E.join(" "),"info"),v(...E)},console.warn=(...E)=>{S(E.join(" "),"warn"),m(...E)},console.error=(...E)=>{S(E.join(" "),"error"),g(...E)},()=>{console.log=p,console.warn=m,console.error=g,console.info=v}},[e]);const r=p=>{switch(p){case"error":return"#ff6b6b";case"warn":return"#ffd93d";case"info":return"#6bcf7f";default:return"#ffffff"}},l={position:"absolute",top:"10px",left:"10px",width:"400px",maxHeight:"300px",backgroundColor:"rgba(0, 0, 0, 0.8)",border:"1px solid #444",borderRadius:"5px",padding:"10px",fontSize:"12px",fontFamily:"monospace",color:"#fff",overflowY:"auto",zIndex:999,pointerEvents:"none"},u={marginBottom:"10px",fontWeight:"bold",color:"#aaa",borderBottom:"1px solid #444",paddingBottom:"5px"},f={marginBottom:"5px",paddingBottom:"5px",borderBottom:"1px solid #333"},d={color:"#888",marginRight:"8px"};return xn.jsxs("div",{style:l,children:[xn.jsx("div",{style:u,children:"Console Log (Latest 10)"}),o.length===0?xn.jsx("div",{style:{color:"#666",fontStyle:"italic"},children:"No logs yet..."}):o.map(p=>xn.jsxs("div",{style:f,children:[xn.jsxs("span",{style:d,children:["[",p.timestamp,"]"]}),xn.jsx("span",{style:{color:r(p.type)},children:p.message})]},p.id))]})},Q2=()=>{const o=Ya.useRef(null),[t,e]=Ya.useState(null),i=Ya.useRef(!0);return Ya.useEffect(()=>{if(!i.current)return;i.current=!1;const r=o.current;if(r!==null){const l=Y2(r);e(l)}},[]),xn.jsxs("div",{children:[xn.jsx(K2,{}),xn.jsx("canvas",{ref:o}),xn.jsx(Z2,{threeSetup:t})]})};rT.createRoot(document.getElementById("root")).render(xn.jsx(Ya.StrictMode,{children:xn.jsx(Q2,{})}));
