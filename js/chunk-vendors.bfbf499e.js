"use strict";(self["webpackChunkmundialfifa"]=self["webpackChunkmundialfifa"]||[]).push([[998],{444:function(e,t,n){n.d(t,{BH:function(){return h},G6:function(){return _},L:function(){return a},LL:function(){return A},Mn:function(){return I},Sg:function(){return d},UG:function(){return m},ZB:function(){return u},ZR:function(){return k},b$:function(){return v},d:function(){return w},eu:function(){return E},hl:function(){return T},jU:function(){return g},m9:function(){return j},ne:function(){return F},pd:function(){return M},r3:function(){return D},ru:function(){return y},tV:function(){return c},uI:function(){return p},vZ:function(){return R},w1:function(){return b},xO:function(){return P},xb:function(){return x},z$:function(){return f},zd:function(){return L}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return f().indexOf("MSAppHost/")>=0}function _(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?C(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new k(r,o,n);return a}}function C(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}},262:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return Ue},IU:function(){return Ce},Jd:function(){return T},PG:function(){return Ee},Um:function(){return Ie},WL:function(){return Fe},X$:function(){return A},X3:function(){return Ae},Xl:function(){return Ne},dq:function(){return Pe},j:function(){return S},lk:function(){return E},qj:function(){return be},qq:function(){return w},yT:function(){return ke}});var r=n(577);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,I=!0,p=1<<++f,f<=m?l(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const _=[];function T(){_.push(I),I=!1}function E(){const e=_.pop();I=void 0===e||e}function S(e,t,n){if(I&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function A(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),R=F(),O=F(!1,!0),P=F(!0),L=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ce(this)[t].apply(this,e);return E(),n}})),e}function F(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ye:ge:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(L,i))return Reflect.get(L,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?x.has(i):D(i))?a:(e||S(n,"get",i),t?a:Pe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?_e(a):be(a):a)}}const V=B(),U=B(!0);function B(e=!1){return function(t,n,i,s){let o=t[n];if(Se(o)&&Pe(o)&&!Pe(i))return!1;if(!e&&!Se(i)&&(ke(i)||(i=Ce(i),o=Ce(o)),!(0,r.kJ)(t)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ce(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&x.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const G={get:R,set:V,deleteProperty:j,has:q,ownKeys:$},K={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},z=(0,r.l7)({},G,{get:O,set:U}),H=e=>e,W=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),s=Ce(t);n||(t!==s&&S(i,"get",t),S(i,"get",s));const{has:o}=W(i),a=r?H:n?xe:De;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Y(e,t=!1){return e=e["__v_raw"],!t&&S(Ce(e),"iterate",y),Reflect.get(e,"size",e)}function X(e){e=Ce(e);const t=Ce(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function Z(e,t){t=Ce(t);const n=Ce(this),{has:i,get:s}=W(n);let o=i.call(n,e);o||(e=Ce(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=W(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ce(s),a=t?H:e?xe:De;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ce(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?H:t?xe:De;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Q(this,e)},get size(){return Y(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Y(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Y(this,!0)},has(e){return J.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return J.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,ue]=se();function le(e,t){const n=t?e?ue:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:le(!1,!1)},de={get:le(!1,!0)},fe={get:le(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ye=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return Se(e)?e:Te(e,!1,G,he,pe)}function Ie(e){return Te(e,!1,z,de,me)}function _e(e){return Te(e,!0,K,fe,ge)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return Se(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Ae(e){return Ee(e)||Se(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?be(e):e,xe=e=>(0,r.Kn)(e)?_e(e):e;function Re(e){I&&g&&(e=Ce(e),k(e.dep||(e.dep=a())))}function Oe(e,t){e=Ce(e),e.dep&&C(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return Pe(e)?e.value:e}const Me={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fe(e){return Ee(e)?e:new Proxy(e,Me)}class Ve{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Oe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Re(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ue(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ve(i,s,o||!s,n);return a}},252:function(e,t,n){n.d(t,{$d:function(){return o},Cn:function(){return j},FN:function(){return pn},HY:function(){return Lt},Ko:function(){return $e},P$:function(){return ce},Q6:function(){return pe},U2:function(){return le},Uk:function(){return rn},Us:function(){return Nt},Wm:function(){return Zt},Y8:function(){return se},_:function(){return Xt},dD:function(){return B},h:function(){return xn},iD:function(){return zt},ic:function(){return Ne},nK:function(){return fe},up:function(){return Ue},w5:function(){return q},wg:function(){return jt},wy:function(){return Me}});var r=n(262),i=n(577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let b=null,I=null;function _(e){const t=b||w;return e?t.then(this?e.bind(this):e):t}function T(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=R(h[r]);i<e?t=r+1:n=r}return t}function E(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||e===I||(null==e.id?h.push(e):h.splice(T(e.id),0,e),S())}function S(){u||l||(l=!0,b=w.then(O))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function A(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),S()}function C(e){A(e,p,f,m)}function N(e){A(e,y,g,v)}function D(e,t=null){if(f.length){for(I=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,I=null,D(e,t)}}function x(e){if(D(),g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>R(e)-R(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const R=e=>null==e.id?1/0:e.id;function O(e){l=!1,u=!0,D(e),h.sort(((e,t)=>R(e)-R(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,x(e),u=!1,b=null,(h.length||f.length||g.length)&&O(e)}}new Set;new Map;function P(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function L(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=L(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,V=null;function U(e){const t=F;return F=e,V=e&&e.type.__scopeId||null,t}function B(e){V=e}function j(){V=null}function q(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gt(-1);const i=U(t),s=e(...n);return U(i),r._d&&Gt(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function $(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=U(e);try{if(4&n.shapeFlag){const e=s||r;v=sn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=sn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:G(l)}}catch(_){Ut.length=0,a(_,e,1),v=Zt(Ft)}let I=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=I;e.length&&7&t&&(c&&e.some(i.tR)&&(w=K(w,c)),I=nn(I,w))}return n.dirs&&(I=nn(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),v=I,U(b),v}const G=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},K=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function z(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||H(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?H(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function H(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function W({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Q=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function Y(e,t){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[e]=t}else 0}function X(e,t,n=!1){const r=fn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Z={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=fn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ie(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ie(e())}let g=e=>{f=b.onStop=()=>{s(e,h,4)}};if(bn)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let y=m?[]:Z;const v=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Z?void 0:y,g]),y=e)}else b.run()};let w;v.allowRecurse=!!t,w="sync"===c?v:"post"===c?()=>Ct(v,h&&h.suspense):()=>C(v);const b=new r.qq(d,w);return t?n?v():y=b.run():"post"===c?Ct(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function ne(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=fn;mn(this);const c=te(s,o.bind(r),n);return a?mn(a):gn(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ie(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ie(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ie(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ie(e,t)}));else if((0,i.PO)(e))for(const n in e)ie(e[n],t);return e}function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ae((()=>{e.isMounted=!0})),De((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=pn(),i=se();let s;return()=>{const o=t.default&&pe(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Ft){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return he(a);const l=de(a);if(!l)return he(a);const h=le(l,c,i,n);fe(l,h);const d=n.subTree,f=d&&de(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ft&&(!Wt(l,f)||p)){const e=le(f,c,i,n);if(fe(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},he(a);"in-out"===u&&l.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=ue(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ce=ae;function ue(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function le(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,I=String(e.key),_=ue(n,e),T=(e,t)=>{e&&o(e,r,9,t)},E=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=_[I];i&&Wt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,p?E(p,[t,o]):o()},clone(e){return le(e,t,n,r)}};return S}function he(e){if(ge(e))return e=nn(e),e.children=null,e}function de(e){return ge(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Lt?(128&o.patchFlag&&i++,r=r.concat(pe(o.children,t,a))):(t||o.type!==Ft)&&r.push(null!=a?nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}const me=e=>!!e.type.__asyncLoader;const ge=e=>e.type.__isKeepAlive;RegExp,RegExp;function ye(e,t){return(0,i.kJ)(e)?e.some((e=>ye(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ve(e,t){be(e,"a",t)}function we(e,t){be(e,"da",t)}function be(e,t,n=fn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)ge(e.parent.vnode)&&Ie(r,t,n,e),e=e.parent}}function Ie(e,t,n,r){const s=Ee(t,e,r,!0);xe((()=>{(0,i.Od)(r[t],s)}),n)}function _e(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Te(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=fn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const s=o(t,n,e,i);return gn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Se=e=>(t,n=fn)=>(!bn||"sp"===e)&&Ee(e,t,n),ke=Se("bm"),Ae=Se("m"),Ce=Se("bu"),Ne=Se("u"),De=Se("bum"),xe=Se("um"),Re=Se("sp"),Oe=Se("rtg"),Pe=Se("rtc");function Le(e,t=fn){Ee("ec",e,t)}function Me(e,t){const n=F;if(null===n)return e;const r=An(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Fe(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Ve="components";function Ue(e,t){return je(Ve,e,!0,t)||e}const Be=Symbol();function je(e,t,n=!0,r=!1){const s=F||fn;if(s){const n=s.type;if(e===Ve){const e=Cn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=qe(s[e]||n[e],t)||qe(s.appContext[e],t);return!o&&r?n:o}}function qe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function $e(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ge=e=>e?yn(e)?An(e)||e.proxy:Ge(e.parent):null,Ke=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ge(e.parent),$root:e=>Ge(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>E(e.update)),$nextTick:e=>e.n||(e.n=_.bind(e.proxy)),$watch:e=>ne.bind(e)}),ze={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];He&&(c[t]=0)}}const d=Ke[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ke,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let He=!0;function We(e){const t=Xe(e),n=e.proxy,s=e.ctx;He=!1,t.beforeCreate&&Je(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:I,unmounted:_,render:T,renderTracked:E,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:N,components:D,directives:x,filters:R}=t,O=null;if(h&&Qe(h,s,O,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(He=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ye(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Y(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Je(d,e,"c"),P(ke,f),P(Ae,p),P(Ce,m),P(Ne,g),P(ve,y),P(we,v),P(Le,k),P(Pe,E),P(Oe,S),P(De,b),P(xe,_),P(Re,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=N&&(e.inheritAttrs=N),D&&(e.components=D),x&&(e.directives=x)}function Qe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=rt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Je(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ye(e,t,n,r){const s=r.includes(".")?re(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&ee(s,n)}else if((0,i.mf)(e))ee(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ye(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&ee(s,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Ze(c,e,o,!0))),Ze(c,t,o)):c=t,s.set(t,c),c}function Ze(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ze(e,s,n,!0),i&&i.forEach((t=>Ze(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=et[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const et={data:tt,props:st,emits:st,methods:st,computed:st,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:st,directives:st,watch:ot,provide:tt,inject:nt};function tt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function nt(e,t){return st(rt(e),rt(t))}function rt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ot(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=it(e[r],t[r]);return n}function at(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Qt,1),e.propsDefaults=Object.create(null),ut(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ct(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ut(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=lt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=lt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ut(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=lt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function lt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(mn(s),r=i[n]=e.call(null,t),gn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ht(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ht(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);dt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(dt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=mt(Boolean,r.type),n=mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function dt(e){return"$"!==e[0]}function ft(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function pt(e,t){return ft(e)===ft(t)}function mt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>pt(t,e))):(0,i.mf)(t)&&pt(t,e)?0:-1}const gt=e=>"_"===e[0]||"$stable"===e,yt=e=>(0,i.kJ)(e)?e.map(sn):[sn(e)],vt=(e,t,n)=>{if(t._n)return t;const r=q(((...e)=>yt(t(...e))),n);return r._c=!1,r},wt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(gt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=vt(s,n,r);else if(null!=n){0;const e=yt(n);t[s]=()=>e}}},bt=(e,t)=>{const n=yt(t);e.slots.default=()=>n},It=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):wt(t,e.slots={})}else e.slots={},t&&bt(e,t);(0,i.Nj)(e.slots,Qt,1)},_t=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,wt(t,s)),a=t}else t&&(bt(e,t),a={default:1});if(o)for(const i in s)gt(i)||i in a||delete s[i]};function Tt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Et=0;function St(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Tt(),o=new Set;let a=!1;const c=s.app={_uid:Et++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Rn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=Zt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,An(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function kt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>kt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(me(o)&&!a)return;const c=4&o.shapeFlag?An(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Ct(r,n)):r()}else 0}}function At(){}const Ct=J;function Nt(e){return Dt(e)}function Dt(e,t){At();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wt(e,t)&&(r=Z(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Mt:w(e,t,n,r);break;case Ft:b(e,t,n,r);break;case Vt:null==e&&I(t,n,r,o);break;case Lt:L(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&kt(l,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},_=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:I}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),I&&Fe(e,null,r,"created"),y){for(const t in y)"value"===t||(0,i.Gg)(t)||a(f,t,null,y[t],u,e.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&un(p,r,e)}C(f,e,e.scopeId,l,r)}I&&Fe(e,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(f),s(f,t,n),((p=y&&y.onVnodeMounted)||_||I)&&Ct((()=>{p&&un(p,r,e),_&&w.enter(f),I&&Fe(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?on(e[u]):sn(e[u]);v(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&xt(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,t,e),f&&Fe(t,e,n,"beforeUpdate"),n&&xt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,y,o):c||j(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)P(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Ct((()=>{g&&un(g,n,t,e),f&&Fe(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Lt||!Wt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},P=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Rt(e,t,!0)):j(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=dn(e,r,i);if(ge(e)&&(a.ctx.renderer=te),In(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=Zt(Ft);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(z(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,k(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,xt(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,u,n,l),xt(e,!0);const d=$(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&W(e,d.el),s&&Ct(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ct((()=>un(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=me(t);if(xt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&un(r,d,t),xt(e,!0),c&&re){const n=()=>{e.subTree=$(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=$(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ct(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Ct((()=>un(r,d,e)),o)}(256&t.shapeFlag||d&&me(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ct(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>E(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,xt(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,i,n),_t(e,t.children,n),(0,r.Jd)(),D(void 0,e.update),(0,r.lk)()},j=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},q=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?on(t[f]):sn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?on(t[l]):sn(t[l]);if(!Wt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?on(t[f]):sn(t[f]);if(!Wt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?on(t[l]):sn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?on(t[l]):sn(t[l]);null!=e.key&&g.set(e.key,l)}let y,w=0;const b=f-m+1;let I=!1,_=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&Wt(r,t[y])){i=y;break}void 0===i?H(r,s,o,!0):(T[i-m]=l+1,i>=_?_=i:I=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const E=I?Ot(T):i.Z6;for(y=E.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):I&&(y<0||l!==E[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Lt){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Vt)return void _(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Ct((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&kt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!me(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&un(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Fe(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Lt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Lt&&384&h||!i&&16&l)&&X(c,t,n),r&&Q(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Ct((()=>{m&&un(m,t,e),f&&Fe(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Lt)return void J(n,r);if(t===Vt)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&Ct(c,t),Ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),x(),t._vnode=e},te={p:v,um:H,m:K,r:Q,mt:F,mc:N,pc:j,pbc:O,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:St(ee,ne)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=on(s[i]),t.el=e.el),n||Rt(e,t))}}function Ot(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Pt=e=>e.__isTeleport;const Lt=Symbol(void 0),Mt=Symbol(void 0),Ft=Symbol(void 0),Vt=Symbol(void 0),Ut=[];let Bt=null;function jt(e=!1){Ut.push(Bt=e?null:[])}function qt(){Ut.pop(),Bt=Ut[Ut.length-1]||null}let $t=1;function Gt(e){$t+=e}function Kt(e){return e.dynamicChildren=$t>0?Bt||i.Z6:null,qt(),$t>0&&Bt&&Bt.push(e),e}function zt(e,t,n,r,i,s){return Kt(Xt(e,t,n,r,i,s,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function Wt(e,t){return e.type===t.type&&e.key===t.key}const Qt="__vInternal",Jt=({key:e})=>null!=e?e:null,Yt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Xt(e,t=null,n=null,r=0,s=null,o=(e===Lt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Yt(t),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(an(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),$t>0&&!a&&Bt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Bt.push(u),u}const Zt=en;function en(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Be||(e=Ft),Ht(e)){const r=nn(e,t,!0);return n&&an(r,n),$t>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=tn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:Q(e)?128:Pt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Xt(e,t,n,s,o,c,a,!0)}function tn(e){return e?(0,r.X3)(e)||Qt in e?(0,i.l7)({},e):e:null}function nn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?cn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Jt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function rn(e=" ",t=0){return Zt(Mt,null,e,t)}function sn(e){return null==e||"boolean"===typeof e?Zt(Ft):(0,i.kJ)(e)?Zt(Lt,null,e.slice()):"object"===typeof e?on(e):Zt(Mt,null,String(e))}function on(e){return null===e.el||e.memo?e:nn(e)}function an(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),an(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[rn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){o(e,t,7,[n,r])}const ln=Tt();let hn=0;function dn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||ln,a={uid:hn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ht(s,o),emitsOptions:L(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let fn=null;const pn=()=>fn||F,mn=e=>{fn=e,e.scope.on()},gn=()=>{fn&&fn.scope.off(),fn=null};function yn(e){return 4&e.vnode.shapeFlag}let vn,wn,bn=!1;function In(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,i=yn(e);at(e,n,i,t),It(e,r);const s=i?_n(e,t):void 0;return bn=!1,s}function _n(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ze));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?kn(e):null;mn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),gn(),(0,i.tI)(c)){if(c.then(gn,gn),t)return c.then((n=>{Tn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Tn(e,c,t)}else En(e,t)}function Tn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),En(e,n)}function En(e,t,n){const s=e.type;if(!e.render){if(!t&&vn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=vn(t,c)}}e.render=s.render||i.dG,wn&&wn(e)}mn(e),(0,r.Jd)(),We(e),(0,r.lk)(),gn()}function Sn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function kn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Sn(e))},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ke?Ke[n](e):void 0}}))}function Cn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,bn);function xn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Ht(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ht(n)&&(n=[n]),Zt(e,t,n))}Symbol("");const Rn="3.2.37"},963:function(e,t,n){n.d(t,{F8:function(){return Z},ri:function(){return ie}});var r=n(577),i=n(252);n(262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[w,b]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let I=0;const _=Promise.resolve(),T=()=>{I=0},E=()=>I||(_.then(T),I=w());function S(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=s[t]=D(r,i);S(e,n,o,a)}else o&&(k(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function N(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function D(e,t){const n=e=>{const r=e.timeStamp||w();(b||r>=n.attached-1)&&(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,O=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?u(e,i,s):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function P(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",F=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},i.P$.props,V),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=q(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:I,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:E=w,onAppearCancelled:S=b}=t,k=(e,t,n)=>{K(e,t?h:c),K(e,t?l:a),n&&n()},A=(e,t)=>{e._isLeaving=!1,K(e,d),K(e,p),K(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:w,s=()=>k(t,e,n);U(r,[t,s]),z((()=>{K(t,e?u:o),G(t,e?h:c),B(r)||W(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(v,[e]),G(e,o),G(e,a)},onBeforeAppear(e){U(T,[e]),G(e,u),G(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);G(e,d),X(),G(e,f),z((()=>{e._isLeaving&&(K(e,d),G(e,p),B(I)||W(e,i,y,n))})),U(I,[e,n])},onEnterCancelled(e){k(e,!1),U(b,[e])},onAppearCancelled(e){k(e,!0),U(S,[e])},onLeaveCancelled(e){A(e),U(_,[e])}})}function q(e){if(null==e)return null;if((0,r.Kn)(e))return[$(e.enter),$(e.leave)];{const t=$(e);return[t,t]}}function $(e){const t=(0,r.He)(e);return t}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function W(e,t,n,r){const i=e._endId=++H,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(L+"Delay"),s=r(L+"Duration"),o=J(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=J(a,c);let l=null,h=0,d=0;t===L?o>0&&(l=L,h=o,d=s.length):t===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?L:M:null,d=l?l===L?s.length:c.length:0);const f=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ee(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ee(e,!0),r.enter(e)):r.leave(e,(()=>{ee(e,!1)})):ee(e,t))},beforeUnmount(e,{value:t}){ee(e,t)}};function ee(e,t){e.style.display=t?e._vod:"none"}const te=(0,r.l7)({patchProp:O},c);let ne;function re(){return ne||(ne=(0,i.Us)(te))}const ie=(...e)=>{const t=re().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=se(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function se(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return R},E9:function(){return re},F7:function(){return E},Gg:function(){return G},HD:function(){return L},He:function(){return te},Kn:function(){return F},NO:function(){return _},Nj:function(){return ee},Od:function(){return A},PO:function(){return q},Pq:function(){return a},RI:function(){return N},S0:function(){return $},W7:function(){return j},WV:function(){return m},Z6:function(){return b},_A:function(){return H},_N:function(){return x},aU:function(){return X},dG:function(){return I},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return D},kT:function(){return w},l7:function(){return k},mf:function(){return P},rs:function(){return Q},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=O(e),r=O(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=M(e),r=M(t),n||r)return e===t;if(n=D(e),r=D(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":D(e)||F(e)&&(e.toString===U||!P(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:R(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||D(t)||q(t)?t:String(t),w={},b=[],I=()=>{},_=()=>!1,T=/^on[^a-z]/,E=e=>T.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,N=(e,t)=>C.call(e,t),D=Array.isArray,x=e=>"[object Map]"===B(e),R=e=>"[object Set]"===B(e),O=e=>"[object Date]"===B(e),P=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&P(e.then)&&P(e.catch),U=Object.prototype.toString,B=e=>U.call(e),j=e=>B(e).slice(8,-1),q=e=>"[object Object]"===B(e),$=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,H=K((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),W=/\B([A-Z])/g,Q=K((e=>e.replace(W,"-$1").toLowerCase())),J=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=K((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},902:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(180),i="firebase",s="9.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},394:function(e,t,n){var r=n(180),i=n(444),s=n(816);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(333),c=n(463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function y(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function w(e,...t){return _(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw _(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function S(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function A(e){S(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(A);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function D(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(D()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,s={}){return j(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new G(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw K(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw K(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw K(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw K(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof i.ZR)throw s;v(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await B(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class G{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function K(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return B(e,"POST","/v1/accounts:update",t)}async function W(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=X(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Q(Y(s.auth_time)),issuedAtTime:Q(Y(s.iat)),expirationTime:Q(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(r);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(o){return y("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function Z(e){const t=X(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Q(this.lastLoginAt),this.creationTime=Q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,W(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=$(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return se(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:_}=t;T(v&&_,e,"internal-error");const E=ue.fromJSON(this.name,_);T("string"===typeof v,e,"internal-error"),le(l,e.name),le(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof b,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(y,e.name);const S=new he({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(A(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||A(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Te(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(Ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.z$)()){return/firefox\//i.test(e)}function ve(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function Ie(e=(0,i.z$)()){return/android/i.test(e)}function _e(e=(0,i.z$)()){return/blackberry/i.test(e)}function Te(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ae(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||Ie(e)||Te(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ne(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ie(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(A(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=De(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Oe(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Me(t),{host:o,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ue()}function Me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=Me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ve(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ve(t)}}}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ue(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return B(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function qe(e,t){return B(e,"POST","/v1/accounts:update",t)}async function $e(e,t){return B(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function Ke(e,t){return B(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function ze(e,t){return Ke(e,t)}async function He(e,t){return Ke(e,t)}async function We(e,t){return Ke(e,t)}async function Qe(e,t){return Ke(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ge(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function rt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function it(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw K(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return T(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch(t){return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class wt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new wt(n,i):null}static _create(e,t){return new wt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class It extends dt{constructor(e){T(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return It.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return It.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return q(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=St(n),o=new Et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=St(n);return new Et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Oe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Tt(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function Ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t){const n=(0,i.m9)(e);await Rt(!0,n,t);const{providerUserInfo:r}=await H(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Nt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Et._forOperation(e,"link",r)}async function Rt(e,t,n){await ie(t);const r=Nt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await ee(e,Ct(i,s,t,e),n);T(r.idToken,i,"internal-error");const o=X(r.idToken);T(o,i,"internal-error");const{sub:a}=o;return T(e.uid===a,i,"user-mismatch"),Et._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&v(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await Ct(e,r,t),s=await Et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(Oe(e),t)}async function Mt(e,t){const n=(0,i.m9)(e);return await Rt(!1,n,t.providerId),xt(n,t)}async function Ft(e,t){return Ot((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){const n=Oe(e),r=await Vt(n,{token:t,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jt._fromServerResponse(e,t):v(e,"internal-error")}}class jt extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&qt(r,s,n),await He(r,s)}async function Gt(e,t,n){await je((0,i.m9)(e),{oobCode:t,newPassword:n})}async function Kt(e,t){await $e((0,i.m9)(e),{oobCode:t})}async function zt(e,t){const n=(0,i.m9)(e),r=await je(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Bt._fromServerResponse(Oe(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ht(e,t){const{data:n}=await zt((0,i.m9)(e),t);return n.email}async function Wt(e,t,n){const r=Oe(e),i=await Tt(r,{returnSecureToken:!0,email:t,password:n}),s=await Et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Qt(e,t,n){return Lt((0,i.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,r,"argument-error"),n&&qt(r,s,n),await We(r,s)}function Yt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xt(e,t,n){const r=(0,i.m9)(e),s=ht.credentialWithLink(t,n||N());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=D()?N():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt((0,i.m9)(e),r);return s||[]}async function tn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&qt(n.auth,s,t);const{email:o}=await ze(n.auth,s);o!==e.email&&await e.reload()}async function nn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&qt(r.auth,o,n);const{email:a}=await Qe(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,rn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function on(e,t){return cn((0,i.m9)(e),t,null)}function an(e,t){return cn((0,i.m9)(e),null,t)}async function cn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,qe(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new dn(s,i);case"github.com":return new fn(s,i);case"google.com":return new pn(s,i);case"twitter.com":return new mn(s,i,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class fn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends ln{constructor(e,t){super(e,"google.com",t)}}class mn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:un(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new yn("enroll",e)}static _fromMfaPendingCredential(e){return new yn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return yn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return yn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Oe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Bt._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=yn._fromMfaPendingCredential(r.mfaPendingCredential);return new vn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Et._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Et._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function wn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function In(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class Tn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Bt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Tn(e)}async getSession(){return yn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,r=await this.user.getIdToken(),i=await ee(this.user,_n(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(t=s)||void 0===t?void 0:t.code))throw s}}}const En=new WeakMap;function Sn(e){const t=(0,i.m9)(e);return En.has(t)||En.set(t,Tn._fromUser(t)),En.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=(0,i.z$)();return ve(e)||Ee(e)}const Nn=1e3,Dn=10;class xn extends An{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&Ne(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ae()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Dn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Nn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xn.type="LOCAL";const Rn=xn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends An{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}On.type="SESSION";const Pn=On;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Mn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.receivers=[];class Vn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Fn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function Bn(e){Un().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return"undefined"!==typeof Un()["WorkerGlobalScope"]&&"function"===typeof Un()["importScripts"]}async function qn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $n(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Gn(){return jn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="firebaseLocalStorageDb",zn=1,Hn="firebaseLocalStorage",Wn="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jn(e,t){return e.transaction([Hn],t?"readwrite":"readonly").objectStore(Hn)}function Yn(){const e=indexedDB.deleteDatabase(Kn);return new Qn(e).toPromise()}function Xn(){const e=indexedDB.open(Kn,zn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Hn,{keyPath:Wn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Hn)?t(n):(n.close(),await Yn(),t(await Xn()))}))}))}async function Zn(e,t,n){const r=Jn(e,!0).put({[Wn]:t,value:n});return new Qn(r).toPromise()}async function er(e,t){const n=Jn(e,!1).get(t),r=await new Qn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Jn(e,!0).delete(t);return new Qn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mn._getInstance(Gn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await qn(),!this.activeServiceWorker)return;this.sender=new Vn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$n()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await Zn(e,kn,"1"),await tr(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>er(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jn(e,!1).getAll();return new Qn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function ar(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)}))}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,fr=6e4,pr=1e12;class mr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=yr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),fr)}),dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function yr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=hr("rcb"),wr=new P(3e4,6e4),br="https://www.google.com/recaptcha/api.js?";class Ir{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Un().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(_r(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Un().grecaptcha):new Promise(((n,r)=>{const s=Un().setTimeout((()=>{r(w(e,"network-request-failed"))}),wr.get());Un()[vr]=()=>{Un().clearTimeout(s),delete Un()[vr];const i=Un().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${br}?${(0,i.xO)({onload:vr,render:"explicit",hl:t})}`;lr(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Un().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _r(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Tr{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="recaptcha",Sr={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Sr),n){this.parameters=t,this.type=Er,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Oe(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Tr:new Ir,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Un()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(D()&&!jn(),this.auth,"internal-error"),await Ar(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ar(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Nr(e,t,n){const r=Oe(e),s=await Rr(r,t,(0,i.m9)(n));return new Cr(s,(e=>Lt(r,e)))}async function Dr(e,t,n){const r=(0,i.m9)(e);await Rt(!1,r,"phone");const s=await Rr(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Mt(r,e)))}async function xr(e,t,n){const r=(0,i.m9)(e),s=await Rr(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Ft(r,e)))}async function Rr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Er,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Or(e,t){await xt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return Rr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?A(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Mr extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){return Pt(e.auth,new Mr(e),e.bypassAuthState)}function Vr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ot(n,new Mr(e),e.bypassAuthState)}async function Ur(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),xt(n,new Mr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return Ur;case"reauthViaPopup":case"reauthViaRedirect":return Vr;default:v(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new P(2e3,1e4);async function qr(e,t,n){const r=Oe(e);I(e,t,dt);const i=Lr(r,n),s=new Kr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function $r(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,dt);const s=Lr(r.auth,n),o=new Kr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Gr(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,dt);const s=Lr(r.auth,n),o=new Kr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class Kr extends Br{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jr.get())};e()}}Kr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr="pendingRedirect",Hr=new Map;class Wr extends Br{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const t=await Qr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qr(e,t){const n=ei(t),r=Zr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Jr(e,t){return Zr(e)._set(ei(t),"true")}function Yr(){Hr.clear()}function Xr(e,t){Hr.set(e._key(),t)}function Zr(e){return A(e._redirectPersistence)}function ei(e){return pe(zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=Oe(e);I(e,t,dt);const i=Lr(r,n);return await Jr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,dt);const s=Lr(r.auth,n);await Jr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function si(e,t,n){return oi(e,t,n)}async function oi(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,dt);const s=Lr(r.auth,n);await Rt(!1,r,t.providerId),await Jr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function ai(e,t){return await Oe(e)._initializationPromise,ci(e,t,!1)}async function ci(e,t,n=!1){const r=Oe(e),i=Lr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ui(e){const t=Fn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=6e5;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!pi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=li&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yi=/^https?/;async function vi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(wi(r))return}catch(n){}v(e,"unauthorized-domain")}function wi(e){const t=N(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!yi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new P(3e4,6e4);function Ii(){const e=Un().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _i(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ii(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ii(),n(w(e,"network-request-failed"))},timeout:bi.get()})}if(null===(i=null===(r=Un().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Un().gapi)||void 0===s?void 0:s.load)){const t=hr("iframefcb");return Un()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},lr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ti=null,e}))}let Ti=null;function Ei(e){return Ti=Ti||_i(e),Ti}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new P(5e3,15e3),ki="__/auth/iframe",Ai="emulator/auth/iframe",Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ni=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Di(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Ai):`https://${e.config.authDomain}/${ki}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ni.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function xi(e){const t=await Ei(e),n=Un().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Di(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Un().setTimeout((()=>{r(i)}),Si.get());function o(){Un().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oi=500,Pi=600,Li="_blank",Mi="http://localhost";class Fi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Vi(e,t,n,r=Oi,s=Pi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ri),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Li:n),ye(l)&&(t=t||Mi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Ui(t||"",c),new Fi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Fi(d)}function Ui(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__/auth/handler",ji="emulator/auth/handler";function qi(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${$i(e)}?${(0,i.xO)(u).slice(1)}`}function $i({config:e}){return e.emulator?L(e,ji):`https://${e.authDomain}/${Bi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class Ki{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,N(),r);return Vi(e,s,Fn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Bn(qi(e,t,n,N(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await xi(e),n=new hi(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Gi,{type:Gi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Gi];void 0!==i&&t(!!i),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ve()||Ee()}}const zi=Ki;class Hi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Wi extends Hi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wi(e)}_finalizeEnroll(e,t,n){return In(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qi{constructor(){}static assertion(e){return Wi._fromCredential(e)}}Qi.FACTOR_ID="phone";var Ji="@firebase/auth",Yi="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function es(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),T(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:De(e)},a=new Re(t,r,i);return C(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new Xi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Ji,Yi,Zi(e)),(0,s.registerVersion)(Ji,Yi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ts(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es("Browser");const ns=2e3;async function rs(e,t,n){var r;const{BuildInfo:i}=ts();S(t.sessionId,"AuthEvent did not contain a session ID");const s=await cs(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:Ie()?o["apn"]=i.packageName:v(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,qi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function is(e){const{BuildInfo:t}=ts(),n={};Ee()?n.iosBundleId=t.packageName:Ie()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await mi(e,n)}function ss(e){const{cordova:t}=ts();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function os(e,t,n){const{cordova:r}=ts();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),ns))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Ie()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function as(e){var t,n,r,i,s,o,a,c,u,l;const h=ts();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function cs(e){const t=us(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function us(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=20;class hs extends hi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function ds(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:gs(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function fs(e,t){return ys()._set(vs(e),t)}async function ps(e){const t=await ys()._get(vs(e));return t&&await ys()._remove(vs(e)),t}function ms(e,t){var n,r;const i=bs(t);if(i.includes("/__/auth/callback")){const t=Is(i),s=t["firebaseError"]?ws(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function gs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ls;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ys(){return A(Rn)}function vs(e){return pe("authEvent",e.config.apiKey,e.name)}function ws(e){try{return JSON.parse(e)}catch(t){return null}}function bs(e){const t=Is(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Is(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Is(i)["link"];return s||i||r||n||e}function Is(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=500;class Ts{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){as(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Yr(),await this._originValidation(e);const s=ds(e,n,r);await fs(e,s);const o=await rs(e,s,t),a=await ss(o);return os(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=is(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ts(),s=setTimeout((async()=>{await ps(e),t.onEvent(Ss())}),_s),o=async n=>{clearTimeout(s);const r=await ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ms(r,n["url"])),t.onEvent(i||Ss())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;ts().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Es=Ts;function Ss(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){Oe(e)._logFramework(t)}var As="@firebase/auth-compat",Cs="0.2.18";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=1e3;function Ds(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xs(){return"http:"===Ds()||"https:"===Ds()}function Rs(e=(0,i.z$)()){return!("file:"!==Ds()&&"ionic:"!==Ds()&&"capacitor:"!==Ds()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Os(){return(0,i.b$)()||(0,i.UG)()}function Ps(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Ls(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ms(e=(0,i.z$)()){return Ps()||Ls(e)}function Fs(){try{const e=self.localStorage,t=Fn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ms()||(0,i.hl)()}catch(e){return Vs()&&(0,i.hl)()}return!1}function Vs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Us(){return(xs()||(0,i.ru)()||Rs())&&!Os()&&Fs()&&!Vs()}function Bs(){return Rs()&&"undefined"!==typeof document}async function js(){return!!Bs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ns);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function qs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={LOCAL:"local",NONE:"none",SESSION:"session"},Gs=T,Ks="persistence";function zs(e,t){Gs(Object.values($s).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?Gs(t!==$s.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?Gs(t===$s.NONE,e,"unsupported-persistence-type"):Vs()?Gs(t===$s.NONE||t===$s.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):Gs(t===$s.NONE||Fs(),e,"unsupported-persistence-type")}async function Hs(e){await e._initializationPromise;const t=Qs(),n=pe(Ks,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ws(e,t){const n=Qs();if(!n)return[];const r=pe(Ks,e,t),i=n.getItem(r);switch(i){case $s.NONE:return[fe];case $s.LOCAL:return[sr,Pn];case $s.SESSION:return[Pn];default:return[]}}function Qs(){var e;try{return(null===(e=qs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=T;class Ys{constructor(){this.browserResolver=A(zi),this.cordovaResolver=A(Es),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Bs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Js(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await js();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){return e.unwrap()}function Zs(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){return no(e)}function to(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new so(e,wn(e,t))}else if(i){const e=no(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function no(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Pr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=gt;break;case u.FACEBOOK:r=mt;break;case u.GITHUB:r=yt;break;case u.TWITTER:r=_t;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?wt._create(n,o):tt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new pt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function ro(e,t){return t.catch((t=>{throw t instanceof i.ZR&&to(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:eo(e),additionalUserInfo:gn(e),user:oo.getOrCreate(n)}}))}async function io(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ro(e,n.confirm(t))}}class so{constructor(e,t){this.resolver=t,this.auth=Zs(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ro(Xs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this._delegate=e,this.multiFactor=Sn(e)}static getOrCreate(e){return oo.USER_MAP.has(e)||oo.USER_MAP.set(e,new oo(e)),oo.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ro(this.auth,Mt(this._delegate,e))}async linkWithPhoneNumber(e,t){return io(this.auth,Dr(this._delegate,e,t))}async linkWithPopup(e){return ro(this.auth,Gr(this._delegate,e,Ys))}async linkWithRedirect(e){return await Hs(Oe(this.auth)),si(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ro(this.auth,Ft(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return io(this.auth,xr(this._delegate,e,t))}reauthenticateWithPopup(e){return ro(this.auth,$r(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Hs(Oe(this.auth)),ri(this._delegate,e,Ys)}sendEmailVerification(e){return tn(this._delegate,e)}async unlink(e){return await Dt(this._delegate,e),this}updateEmail(e){return on(this._delegate,e)}updatePassword(e){return an(this._delegate,e)}updatePhoneNumber(e){return Or(this._delegate,e)}updateProfile(e){return sn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}oo.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao=T;class co{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;ao(n,"invalid-api-key",{appName:e.name}),ao(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Ys:void 0;this._delegate=t.initialize({options:{persistence:lo(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?oo.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return Kt(this._delegate,e)}checkActionCode(e){return zt(this._delegate,e)}confirmPasswordReset(e,t){return Gt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ro(this._delegate,Wt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return en(this._delegate,e)}isSignInWithEmailLink(e){return Yt(this._delegate,e)}async getRedirectResult(){ao(Us(),this._delegate,"operation-not-supported-in-this-environment");const e=await ai(this._delegate,Ys);return e?ro(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ks(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=uo(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=uo(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Jt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return $t(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zs(this._delegate,e),e){case $s.SESSION:t=Pn;break;case $s.LOCAL:const e=await A(sr)._isAvailable();t=e?sr:Rn;break;case $s.NONE:t=fe;break;default:return v("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ro(this._delegate,kt(this._delegate))}signInWithCredential(e){return ro(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return ro(this._delegate,Ut(this._delegate,e))}signInWithEmailAndPassword(e,t){return ro(this._delegate,Qt(this._delegate,e,t))}signInWithEmailLink(e,t){return ro(this._delegate,Xt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return io(this._delegate,Nr(this._delegate,e,t))}async signInWithPopup(e){return ao(Us(),this._delegate,"operation-not-supported-in-this-environment"),ro(this._delegate,qr(this._delegate,e,Ys))}async signInWithRedirect(e){return ao(Us(),this._delegate,"operation-not-supported-in-this-environment"),await Hs(this._delegate),ti(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Ht(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function uo(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&oo.getOrCreate(e));return{next:s,error:t,complete:n}}function lo(e,t){const n=Ws(e,t);if("undefined"===typeof self||n.includes(sr)||n.push(sr),"undefined"!==typeof window)for(const r of[Rn,Pn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.Persistence=$s;class ho{constructor(){this.providerId="phone",this._delegate=new Pr(Xs(r.Z.auth()))}static credential(e,t){return Pr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ho.PHONE_SIGN_IN_METHOD=Pr.PHONE_SIGN_IN_METHOD,ho.PROVIDER_ID=Pr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fo=T;class po{constructor(e,t,n=r.Z.app()){var i;fo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="auth-compat";function go(e){e.INTERNAL.registerComponent(new c.wA(mo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new co(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:ht,FacebookAuthProvider:mt,GithubAuthProvider:yt,GoogleAuthProvider:gt,OAuthProvider:pt,SAMLAuthProvider:It,PhoneAuthProvider:ho,PhoneMultiFactorGenerator:Qi,RecaptchaVerifier:po,TwitterAuthProvider:_t,Auth:co,AuthCredential:Be,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(As,Cs)}go(r.Z)},621:function(e,t,n){var r,i=n(180),s=n(816),o=n(463),a=n(333),c=n(444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,y)&&e[y]||(e[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function I(e,t,n){return I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,I.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var S=0,k={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var e=g(this);delete k[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function N(e){e:{var t=Hn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function D(e){return Array.prototype.concat.apply([],arguments)}function x(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function R(e){return/^[\s\xa0]*$/.test(e)}var O,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function M(e,t){return e<t?-1:e>t?1:0}e:{var F=d.navigator;if(F){var V=F.userAgent;if(V){O=V;break e}}O=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function B(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $(e){return $[" "](e),e}function G(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=f;var K,z=L(O,"Opera"),H=L(O,"Trident")||L(O,"MSIE"),W=L(O,"Edge"),Q=W||H,J=L(O,"Gecko")&&!(L(O.toLowerCase(),"webkit")&&!L(O,"Edge"))&&!(L(O,"Trident")||L(O,"MSIE"))&&!L(O,"Edge"),Y=L(O.toLowerCase(),"webkit")&&!L(O,"Edge");function X(){var e=d.document;return e?e.documentMode:void 0}e:{var Z="",ee=function(){var e=O;return J?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Y?/WebKit\/(\S+)/.exec(e):z?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(Z=ee?ee[1]:""),H){var te=X();if(null!=te&&te>parseFloat(Z)){K=String(te);break e}}K=Z}var ne,re={};function ie(){return G((function(){let e=0;const t=P(String(K)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=M(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||M(0==i[2].length,0==s[2].length)||M(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&H){var se=X();ne=se||(parseInt(K,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ue(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(J){e:{try{$(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},T(ue,ce);var le={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}me.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ye(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),we={};function be(e,t,n,r,i){if(r&&r.once)return Te(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);return null}return n=De(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,i):Ie(e,t,n,!1,r,i)}function Ie(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ve]=a=new me(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=_e(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _e(){function e(n){return t.call(e.src,e.listener,n)}var t=Ae;return e}function Te(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Te(e,t[s],n,r,i);return null}return n=De(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,i):Ie(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=De(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ye(s,n,r,i),-1<n&&(pe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,i)),(n=-1<e?t[e]:null)&&Se(n))}function Se(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ve]=null)):pe(e)}}}function ke(e){return e in we?we[e]:we[e]="on"+e}function Ae(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Se(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ve],e instanceof me?e:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(e){return"function"===typeof e?e:(e[Ne]||(e[Ne]=function(t){return e.handleEvent(t)}),e[Ne])}function xe(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function Re(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var i=t;t=new ce(r,e),q(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Oe(o,r,!0,t)&&i}if(o=t.g=e,i=Oe(o,r,!0,t)&&i,i=Oe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Oe(o,r,!1,t)&&i}function Oe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(xe,E),xe.prototype[he]=!0,xe.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},xe.prototype.M=function(){if(xe.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},xe.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},xe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Pe=d.JSON.stringify;function Le(){var e=Ge;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Me{constructor(){this.h=this.g=null}add(e,t){const n=Ve.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Ve=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Be(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Fe||qe(),$e||(Fe(),$e=!0),Ge.add(e,t)}function qe(){var e=d.Promise.resolve(void 0);Fe=function(){e.then(Ke)}}var $e=!1,Ge=new Me;function Ke(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){Be(n)}var t=Ve;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function ze(e,t){xe.call(this),this.h=e||1,this.g=t||d,this.j=I(this.kb,this),this.l=Date.now()}function He(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=I(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=I(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Qe(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Qe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}T(ze,xe),r=ze.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(He(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){ze.Z.M.call(this),He(this),delete this.g};class Je extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qe(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(e){E.call(this),this.h=e,this.g={}}T(Ye,E);var Xe=[];function Ze(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var s=be(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Se(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function it(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Pe(n)}catch(a){return t}}Ye.prototype.M=function(){Ye.Z.M.call(this),et(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function ut(){return ct=ct||new xe}function lt(e){ce.call(this,at.Ma,e)}function ht(e){const t=ut();Re(t,new lt(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=ut();Re(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",T(lt,ce),at.STAT_EVENT="statevent",T(dt,ce),at.Na="timingevent",T(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function wt(e){return e.h||(e.h=e.i())}function bt(){}vt.prototype.h=null;var It,_t={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tt(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function St(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ye(this),this.P=Ct,e=Q?125:void 0,this.W=new ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}T(Tt,ce),T(Et,ce),T(St,vt),St.prototype.g=function(){return new XMLHttpRequest},St.prototype.i=function(){return{}},It=new St;var Ct=45e3,Nt={},Dt={};function xt(e,t,n){e.K=1,e.v=nn(Jt(t)),e.s=n,e.U=!0,Rt(e,null)}function Rt(e,t){e.F=Date.now(),Mt(e),e.A=Jt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new At,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Je(I(e.Ia,e,e.g),e.O)),Ze(e.V,e.g,"readystatechange",e.gb),t=e.H?B(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Ot(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Lt(e,n),r==Dt){4==t&&(e.o=4,ft(14),i=!1),it(e.j,e.m,null,"[Incomplete Response]");break}if(r==Nt){e.o=4,ft(15),it(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}it(e.j,e.m,r,null),jt(e,r)}Ot(e)&&r!=Dt&&r!=Nt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(it(e.j,e.m,n,"[Invalid Chunked Response]"),Bt(e),Ut(e))}function Lt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Dt:(n=Number(t.substring(n,r)),isNaN(n)?Nt:(r+=1,r+n>t.length?Dt:(t=t.substr(r,n),e.C=r+n,t)))}function Mt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(I(e.eb,e),t)}function Vt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||wr(e.l,e)}function Bt(e){Vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,He(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vr(n),or(n)}mr(n),ft(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(I(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Ir(n,11)}else if((e.J||n.g==e)&&vr(n),!R(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(An(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Tr(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Vt(a),Mt(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||Ir(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ir(n,7):sr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ht(4)}catch(u){}}function qt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=qt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Gt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Gt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Kt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];zt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],zt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function zt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Zn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Zn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Q||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=l||7==t||ht(8==t||0>=h?3:2),Vt(this);var n=this.g.ba();this.N=n;t:if(Ot(this)){var r=er(this.g);e="";var i=r.length,s=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Bt(this),Ut(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ft(12),Bt(this),Ut(this);break e}it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Pt(this,l,o),Q&&this.i&&3==l&&(Ze(this.V,this.W,"tick",this.fb),this.W.start())):(it(this.j,this.m,o,null),jt(this,o)),4==l&&Bt(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Mt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Bt(this),Ut(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Zn(this.g),t=this.g.ga();this.C<t.length&&(Vt(this),Pt(this,e,t),this.i&&4!=e&&Mt(this))}},r.cancel=function(){this.I=!0,Bt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),ft(17)),Bt(this),this.o=2,Ut(this)):Ft(this,this.Y-e)},r=Gt.prototype,r.R=function(){Kt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Kt(this),this.g.concat()},r.get=function(e,t){return zt(this.h,e)?this.h[e]:t},r.set=function(e,t){zt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Ht=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Qt){this.g=void 0!==t?t:e.g,Yt(this,e.j),this.s=e.s,Xt(this,e.i),Zt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new Gt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Ht))?(this.g=!!t,Yt(this,n[1]||"",!0),this.s=on(n[2]||""),Xt(this,n[3]||"",!0),Zt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Jt(e){return new Qt(e)}function Yt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xt(e,t,n){e.i=n?on(t,!0):t}function Zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,bn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Qt?Jt(e):new Qt(e,void 0)}function sn(e,t,n,r){var i=new Qt(null,void 0);return e&&Yt(i,e),t&&Xt(i,t),n&&Zt(i,n),r&&(i.l=r),i}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new Gt,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),zt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,zt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Kt(e)))}function yn(e,t){return mn(e),t=wn(e,t),zt(e.g.h,t)}function vn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),x(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),vn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)yn(this,e)&&(t=D(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=D(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),yn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var In=class{constructor(e,t){this.h=e,this.g=t}};function _n(e){this.l=e||Tn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function An(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Nn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function Dn(){}function xn(){this.g=new Dn}function Rn(e,t,n){const r=n||"";try{$t(e,(function(e,n){let i=e;m(e)&&(i=Pe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function On(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=_(Pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Pn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Pn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Pn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Mn(e,t){xe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Dn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},Dn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},T(Ln,vt),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),T(Mn,xe);var Fn=0;function Vn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bn(e)}function Bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Mn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):Bn(this),3==this.readyState&&Vn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function qn(e){xe.call(this),this.headers=new Gt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}T(qn,xe);var $n="",Gn=/^https?$/i,Kn=["POST","PUT"];function zn(e){return H&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Hn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Qn(e),Yn(e)}function Qn(e){e.D||(e.D=!0,Re(e,"complete"),Re(e,"error"))}function Jn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Zn(e)||2!=e.ba()))if(e.v&&4==Zn(e))We(e.Fa,0,e);else if(Re(e,"readystatechange"),4==Zn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Ht)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!Gn.test(i?i.toLowerCase():"")}n=r}if(n)Re(e,"complete"),Re(e,"success");else{e.m=6;try{var o=2<Zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Qn(e)}}finally{Yn(e)}}}function Yn(e,t){if(e.g){Xn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||Re(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Zn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ir(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(e&&e.concurrentRequestLimit),this.Ca=new xn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(ar(e),3==e.G){var t=e.V++,n=Jt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=nn(Jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Mt(t)}_r(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),vr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new In(e.Za++,t)),3==e.G&&ur(e)}function ur(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function lr(e,t){return!(Sn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(I(e.Ha,e,t),br(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Jt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),An(e.i,n),xt(n,r,t)}function dr(e,t){e.j&&$t({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?I(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Rn(a,e,"req"+n+"_")}catch(ei){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(I(e.Ga,e),br(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function yr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Jt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Jt(t)),n.s=null,n.U=!0,Rt(n,e)}function vr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){vr(e),gr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ut(),Re(r,new pt(r,n,t,i)),ur(e)}else pr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&lr(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ir(e,5);break;case 4:Ir(e,10);break;case 3:Ir(e,6);break;default:Ir(e,2)}}function br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ir(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=I(e.jb,e);n||(n=new Qt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Yt(n,"https"),nn(n)),On(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),_r(e),ar(e)}function _r(e){e.G=0,e.I=-1,e.j&&(0==Nn(e.i).length&&0==e.l.length||(e.i.i.length=0,x(e.l),e.l.length=0),e.j.ua())}function Tr(e,t,n){let r=rn(n);if(""!=r.i)t&&Xt(r,t+"."+r.i),Zt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new qn(new Ln({ib:!0})):new qn(e.qa),t.L=e.H,t}function Sr(){}function kr(){if(H&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function Ar(e,t){xe.call(this),this.g=new ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Dr(this)}function Cr(e){Tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Nr(){Et.call(this),this.status=1}function Dr(e){this.g=e}r=qn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():It.g(),this.C=this.u?wt(this.u):wt(It),this.g.onreadystatechange=I(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Wn(this,s)}e=n||"";const i=new Gt(this.headers);r&&$t(r,(function(e,t){i.set(t,e)})),r=N(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=A(Kn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Wn(this,s)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Re(this,"complete"),Re(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=ir.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new kt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=B(s),q(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,i,t),n=Jt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&s&&nr(n,this.o,s),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),i.$=!0,xt(i,n,null)):xt(i,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||En(this.i)||hr(this))},r.Ga=function(){if(this.u=null,yr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(I(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),yr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new Ar(e,t)},T(Ar,xe),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(I(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Tr(e,null,e.W),ur(e)},Ar.prototype.close=function(){sr(this.g)},Ar.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Pe(e),cr(this.g,t)):cr(this.g,e)},Ar.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,Ar.Z.M.call(this)},T(Cr,Tt),T(Nr,Et),T(Dr,Sr),Dr.prototype.xa=function(){Re(this.g,"a")},Dr.prototype.wa=function(e){Re(this.g,new Cr(e))},Dr.prototype.va=function(e){Re(this.g,new Nr(e))},Dr.prototype.ua=function(){Re(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,yt.COMPLETE="complete",bt.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",xe.prototype.listen=xe.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var xr=l.createWebChannelTransport=function(){return new kr},Rr=l.getStatEventTarget=function(){return ut()},Or=l.ErrorCode=gt,Pr=l.EventType=yt,Lr=l.Event=at,Mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Vr=l.WebChannel=bt,Ur=l.XhrIo=qn;const Br="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qr="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new a.Yd("@firebase/firestore");function Gr(){return $r.logLevel}function Kr(e){$r.setLogLevel(e)}function zr(e,...t){if($r.logLevel<=a["in"].DEBUG){const n=t.map(Qr);$r.debug(`Firestore (${qr}): ${e}`,...n)}}function Hr(e,...t){if($r.logLevel<=a["in"].ERROR){const n=t.map(Qr);$r.error(`Firestore (${qr}): ${e}`,...n)}}function Wr(e,...t){if($r.logLevel<=a["in"].WARN){const n=t.map(Qr);$r.warn(`Firestore (${qr}): ${e}`,...n)}}function Qr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e="Unexpected state"){const t=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+e;throw Hr(t),new Error(t)}function Yr(e,t){e||Jr()}function Xr(e,t){e||Jr()}function Zr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ti extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class si{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oi{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ni,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ni)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yr("string"==typeof t.accessToken),new ri(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yr(null===e||"string"==typeof e),new jr(e)}}class ai{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ci{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ai(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ui{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class li{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Yr("string"==typeof e.token),this.p=e.token,new ui(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=hi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function fi(e,t){return e<t?-1:e>t?1:0}function pi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function mi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gi.fromMillis(Date.now())}static fromDate(e){return gi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new gi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fi(this.nanoseconds,e.nanoseconds):fi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new yi(e)}static min(){return new yi(new gi(0,0))}static max(){return new yi(new gi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Jr(),void 0===n?n=e.length-t:n>e.length-t&&Jr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===vi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class wi extends vi{construct(e,t,n){return new wi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new wi(t)}static emptyPath(){return new wi([])}}const bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ii extends vi{construct(e,t,n){return new Ii(e,t,n)}static isValidIdentifier(e){return bi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ii.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ii(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ti(ei.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ti(ei.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ti(ei.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ii(t)}static emptyPath(){return new Ii([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.path=e}static fromPath(e){return new _i(wi.fromString(e))}static fromName(e){return new _i(wi.fromString(e).popFirst(5))}static empty(){return new _i(wi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===wi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return wi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _i(new wi(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Ei(e){return e.fields.find((e=>2===e.kind))}function Si(e){return e.fields.filter((e=>2!==e.kind))}Ti.UNKNOWN_ID=-1;class ki{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ai{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ai(0,Di.min())}}function Ci(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=yi.fromTimestamp(1e9===r?new gi(n+1,0):new gi(n,r));return new Di(i,_i.empty(),t)}function Ni(e){return new Di(e.readTime,e.key,-1)}class Di{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Di(yi.min(),_i.empty(),-1)}static max(){return new Di(yi.max(),_i.empty(),-1)}}function xi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=_i.comparator(e.documentKey,t.documentKey),0!==n?n:fi(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e){if(e.code!==ei.FAILED_PRECONDITION||e.message!==Ri)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Li(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Li?t:Li.resolve(t)}catch(e){return Li.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.reject(t)}static resolve(e){return new Li(((t,n)=>{t(e)}))}static reject(e){return new Li(((t,n)=>{n(e)}))}static waitFor(e){return new Li(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Li.resolve(!1);for(const n of e)t=t.next((e=>e?Li.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Li(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Li(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new ni,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new Ui(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=Gi(t.target.error);this.T.reject(new Ui(e,n))}}static open(e,t,n,r){try{return new Mi(t,e.transaction(r,n))}catch(e){throw new Ui(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(zr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ji(t)}}class Fi{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===Fi.v((0,c.z$)())&&Hr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return zr("SimpleDb","Removing database:",e),qi(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!(0,c.hl)())return!1;if(Fi.S())return!0;const e=(0,c.z$)(),t=Fi.v(e),n=0<t&&t<10,r=Fi.D(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/Qatar2022.github.io/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(zr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ui(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ui(e,r))},r.onupgradeneeded=e=>{zr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.M(t,r.transaction,e.oldVersion,this.version).next((()=>{zr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.O&&(this.db.onversionchange=e=>this.O(e)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.k(e);const t=Mi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),Li.reject(e)))).toPromise();return s.catch((()=>{})),await t.A,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(zr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Vi{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return qi(this.$.delete())}}class Ui extends ti{constructor(e,t){super(ei.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Bi(e){return"IndexedDbTransactionError"===e.name}class ji{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(zr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(zr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),qi(n)}add(e){return zr("SimpleDb","ADD",this.store.name,e,e),qi(this.store.add(e))}get(e){return qi(this.store.get(e)).next((t=>(void 0===t&&(t=null),zr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return zr("SimpleDb","DELETE",this.store.name,e),qi(this.store.delete(e))}count(){return zr("SimpleDb","COUNT",this.store.name),qi(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Li(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Li(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){zr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new Li(((n,r)=>{t.onerror=e=>{const t=Gi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Li(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Vi(i),o=t(i.primaryKey,i.value,s);if(o instanceof Li){const e=o.catch((e=>(s.done(),Li.reject(e))));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}})).next((()=>Li.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function qi(e){return new Li(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Gi(e.target.error);n(t)}}))}let $i=!1;function Gi(e){const t=Fi.v((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ti("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $i||($i=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Ki{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){zr("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{zr("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){Bi(e)?zr("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Pi(e)}await this.Z(1)}))}}class zi{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,i=!0;return Li.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return zr("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.st(r,n))).next((n=>(zr("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Ni(t);xi(r,n)>0&&(n=r)})),new Di(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Qi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ji(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi.ot=-1;class Yi{constructor(e,t){this.comparator=e,this.root=t||Zi.EMPTY}insert(e,t){return new Yi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Zi.BLACK,null,null))}remove(e){return new Yi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Zi.RED,this.left=null!=r?r:Zi.EMPTY,this.right=null!=i?i:Zi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Zi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Zi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Zi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const e=this.left.check();if(e!==this.right.check())throw Jr();return e+(this.isRed()?0:1)}}Zi.EMPTY=null,Zi.RED=!0,Zi.BLACK=!1,Zi.EMPTY=new class{constructor(){this.size=0}get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Zi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e){this.comparator=e,this.data=new Yi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ts(this.data.getIterator())}getIteratorFrom(e){return new ts(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof es))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new es(this.comparator);return t.data=e,t}}class ts{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ns(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.fields=e,e.sort(Ii.comparator)}static empty(){return new rs([])}unionWith(e){let t=new es(Ii.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new rs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ss(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ss(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ss.EMPTY_BYTE_STRING=new ss("");const os=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(e){if(Yr(!!e),"string"==typeof e){let t=0;const n=os.exec(e);if(Yr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:cs(e.seconds),nanos:cs(e.nanos)}}function cs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function us(e){return"string"==typeof e?ss.fromBase64String(e):ss.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function hs(e){const t=e.mapValue.fields.__previous_value__;return ls(t)?hs(t):t}function ds(e){const t=as(e.mapValue.fields.__local_write_time__.timestampValue);return new gi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ps{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){return null==e}function gs(e){return 0===e&&1/e==-1/0}function ys(e){return"number"==typeof e&&Number.isInteger(e)&&!gs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ws={nullValue:"NULL_VALUE"};function bs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ls(e)?4:Ps(e)?9007199254740991:10:Jr()}function Is(e,t){if(e===t)return!0;const n=bs(e);if(n!==bs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ds(e).isEqual(ds(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=as(e.timestampValue),r=as(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return us(e.bytesValue).isEqual(us(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return cs(e.geoPointValue.latitude)===cs(t.geoPointValue.latitude)&&cs(e.geoPointValue.longitude)===cs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return cs(e.integerValue)===cs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=cs(e.doubleValue),r=cs(t.doubleValue);return n===r?gs(n)===gs(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pi(e.arrayValue.values||[],t.arrayValue.values||[],Is);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Wi(n)!==Wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Is(n[i],r[i])))return!1;return!0}(e,t);default:return Jr()}}function _s(e,t){return void 0!==(e.values||[]).find((e=>Is(e,t)))}function Ts(e,t){if(e===t)return 0;const n=bs(e),r=bs(t);if(n!==r)return fi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=cs(e.integerValue||e.doubleValue),r=cs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Es(e.timestampValue,t.timestampValue);case 4:return Es(ds(e),ds(t));case 5:return fi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=us(e),r=us(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=fi(n[i],r[i]);if(0!==e)return e}return fi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=fi(cs(e.latitude),cs(t.latitude));return 0!==n?n:fi(cs(e.longitude),cs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ts(n[i],r[i]);if(e)return e}return fi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vs.mapValue&&t===vs.mapValue)return 0;if(e===vs.mapValue)return 1;if(t===vs.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=fi(r[o],s[o]);if(0!==e)return e;const t=Ts(n[r[o]],i[s[o]]);if(0!==t)return t}return fi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Jr()}}function Es(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return fi(e,t);const n=as(e),r=as(t),i=fi(n.seconds,r.seconds);return 0!==i?i:fi(n.nanos,r.nanos)}function Ss(e){return ks(e)}function ks(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=as(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?us(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,_i.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ks(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ks(e.fields[i])}`;return n+"}"}(e.mapValue):Jr();var t,n}function As(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Cs(e){return!!e&&"integerValue"in e}function Ns(e){return!!e&&"arrayValue"in e}function Ds(e){return!!e&&"nullValue"in e}function xs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rs(e){return!!e&&"mapValue"in e}function Os(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Qi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Os(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Os(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ps(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ls(e){return"nullValue"in e?ws:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?As(ps.empty(),_i.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Jr()}function Ms(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?As(ps.empty(),_i.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?vs:Jr()}function Fs(e,t){const n=Ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Vs(e,t){const n=Ts(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.value=e}static empty(){return new Us({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=Ii.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Os(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Is(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Rs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Qi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Us(Os(this.value))}}function Bs(e){const t=[];return Qi(e.fields,((e,n)=>{const r=new Ii([e]);if(Rs(n)){const e=Bs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new rs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class js{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new js(e,0,yi.min(),yi.min(),Us.empty(),0)}static newFoundDocument(e,t,n){return new js(e,1,t,yi.min(),n,0)}static newNoDocument(e,t){return new js(e,2,t,yi.min(),Us.empty(),0)}static newUnknownDocument(e,t){return new js(e,3,t,yi.min(),Us.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Us.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Us.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yi.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof js&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new js(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function $s(e,t=null,n=[],r=[],i=null,s=null,o=null){return new qs(e,t,n,r,i,s,o)}function Gs(e){const t=Zr(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Ss(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ms(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ss(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ss(e))).join(",")),t.ut=e}return t.ut}function Ks(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ss(t.value)}`;var t})).join(", ")}]`),ms(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ss(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ss(e))).join(",")),`Target(${t})`}function zs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!co(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Is(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lo(e.startAt,t.startAt)&&lo(e.endAt,t.endAt)}function Hs(e){return _i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Ws(e,t){return e.filters.filter((e=>e instanceof Ys&&e.field.isEqual(t)))}function Qs(e,t,n){let r=ws,i=!0;for(const s of Ws(e,t)){let e=ws,t=!0;switch(s.op){case"<":case"<=":e=Ls(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=ws}Fs({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Fs({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Js(e,t,n){let r=vs,i=!0;for(const s of Ws(e,t)){let e=vs,t=!0;switch(s.op){case">=":case">":e=Ms(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=vs}Vs({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Vs({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class Ys extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Xs(e,t,n):"array-contains"===t?new no(e,n):"in"===t?new ro(e,n):"not-in"===t?new io(e,n):"array-contains-any"===t?new so(e,n):new Ys(e,t,n)}static ct(e,t,n){return"in"===t?new Zs(e,n):new eo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Ts(t,this.value)):null!==t&&bs(this.value)===bs(t)&&this.at(Ts(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Jr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xs extends Ys{constructor(e,t,n){super(e,t,n),this.key=_i.fromName(n.referenceValue)}matches(e){const t=_i.comparator(e.key,this.key);return this.at(t)}}class Zs extends Ys{constructor(e,t){super(e,"in",t),this.keys=to("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class eo extends Ys{constructor(e,t){super(e,"not-in",t),this.keys=to("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function to(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>_i.fromName(e.referenceValue)))}class no extends Ys{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ns(t)&&_s(t.arrayValue,this.value)}}class ro extends Ys{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&_s(this.value.arrayValue,t)}}class io extends Ys{constructor(e,t){super(e,"not-in",t)}matches(e){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!_s(this.value.arrayValue,t)}}class so extends Ys{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ns(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>_s(this.value.arrayValue,e)))}}class oo{constructor(e,t){this.position=e,this.inclusive=t}}class ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function co(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function uo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?_i.comparator(_i.fromName(o.referenceValue),n.key):Ts(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function lo(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Is(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fo(e,t,n,r,i,s,o,a){return new ho(e,t,n,r,i,s,o,a)}function po(e){return new ho(e)}function mo(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function go(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function yo(e){for(const t of e.filters)if(t.ht())return t.field;return null}function vo(e){return null!==e.collectionGroup}function wo(e){const t=Zr(e);if(null===t.lt){t.lt=[];const e=yo(t),n=go(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new ao(e)),t.lt.push(new ao(Ii.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new ao(Ii.keyField(),e))}}}return t.lt}function bo(e){const t=Zr(e);if(!t.ft)if("F"===t.limitType)t.ft=$s(t.path,t.collectionGroup,wo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of wo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ao(i.field,t))}const n=t.endAt?new oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oo(t.startAt.position,t.startAt.inclusive):null;t.ft=$s(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Io(e,t,n){return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _o(e,t){return zs(bo(e),bo(t))&&e.limitType===t.limitType}function To(e){return`${Gs(bo(e))}|lt:${e.limitType}`}function Eo(e){return`Query(target=${Ks(bo(e))}; limitType=${e.limitType})`}function So(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):_i.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=uo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,wo(e),t))&&!(e.endAt&&!function(e,t,n){const r=uo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,wo(e),t))}(e,t)}function ko(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ao(e){return(t,n)=>{let r=!1;for(const i of wo(e)){const e=Co(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Co(e,t,n){const r=e.field.isKeyField()?_i.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ts(r,i):Jr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gs(t)?"-0":t}}function Do(e){return{integerValue:""+e}}function xo(e,t){return ys(t)?Do(t):No(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this._=void 0}}function Oo(e,t,n){return e instanceof Mo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Fo?Vo(e,t):e instanceof Uo?Bo(e,t):function(e,t){const n=Lo(e,t),r=qo(n)+qo(e._t);return Cs(n)&&Cs(e._t)?Do(r):No(e.wt,r)}(e,t)}function Po(e,t,n){return e instanceof Fo?Vo(e,t):e instanceof Uo?Bo(e,t):n}function Lo(e,t){return e instanceof jo?Cs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Mo extends Ro{}class Fo extends Ro{constructor(e){super(),this.elements=e}}function Vo(e,t){const n=$o(t);for(const r of e.elements)n.some((e=>Is(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Ro{constructor(e){super(),this.elements=e}}function Bo(e,t){let n=$o(t);for(const r of e.elements)n=n.filter((e=>!Is(e,r)));return{arrayValue:{values:n}}}class jo extends Ro{constructor(e,t){super(),this.wt=e,this._t=t}}function qo(e){return cs(e.integerValue||e.doubleValue)}function $o(e){return Ns(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.field=e,this.transform=t}}function Ko(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Fo&&t instanceof Fo||e instanceof Uo&&t instanceof Uo?pi(e.elements,t.elements,Is):e instanceof jo&&t instanceof jo?Is(e._t,t._t):e instanceof Mo&&t instanceof Mo}(e.transform,t.transform)}class zo{constructor(e,t){this.version=e,this.transformResults=t}}class Ho{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ho}static exists(e){return new Ho(void 0,e)}static updateTime(e){return new Ho(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Qo{}function Jo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new oa(e.key,Ho.none()):new ta(e.key,e.data,Ho.none());{const n=e.data,r=Us.empty();let i=new es(Ii.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new na(e.key,r,new rs(i.toArray()),Ho.none())}}function Yo(e,t,n){e instanceof ta?function(e,t,n){const r=e.value.clone(),i=ia(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof na?function(e,t,n){if(!Wo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ia(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ra(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Xo(e,t,n,r){return e instanceof ta?function(e,t,n,r){if(!Wo(e.precondition,t))return n;const i=e.value.clone(),s=sa(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof na?function(e,t,n,r){if(!Wo(e.precondition,t))return n;const i=sa(e.fieldTransforms,r,t),s=t.data;return s.setAll(ra(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Wo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Zo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Lo(r.transform,e||null);null!=i&&(null===n&&(n=Us.empty()),n.set(r.field,i))}return n||null}function ea(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&pi(e,t,((e,t)=>Ko(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ta extends Qo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class na extends Qo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ra(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ia(e,t,n){const r=new Map;Yr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Po(o,a,n[i]))}return r}function sa(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Oo(e,s,t))}return r}class oa extends Qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aa extends Qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua,la;function ha(e){switch(e){default:return Jr();case ei.CANCELLED:case ei.UNKNOWN:case ei.DEADLINE_EXCEEDED:case ei.RESOURCE_EXHAUSTED:case ei.INTERNAL:case ei.UNAVAILABLE:case ei.UNAUTHENTICATED:return!1;case ei.INVALID_ARGUMENT:case ei.NOT_FOUND:case ei.ALREADY_EXISTS:case ei.PERMISSION_DENIED:case ei.FAILED_PRECONDITION:case ei.ABORTED:case ei.OUT_OF_RANGE:case ei.UNIMPLEMENTED:case ei.DATA_LOSS:return!0}}function da(e){if(void 0===e)return Hr("GRPC error has no .code"),ei.UNKNOWN;switch(e){case ua.OK:return ei.OK;case ua.CANCELLED:return ei.CANCELLED;case ua.UNKNOWN:return ei.UNKNOWN;case ua.DEADLINE_EXCEEDED:return ei.DEADLINE_EXCEEDED;case ua.RESOURCE_EXHAUSTED:return ei.RESOURCE_EXHAUSTED;case ua.INTERNAL:return ei.INTERNAL;case ua.UNAVAILABLE:return ei.UNAVAILABLE;case ua.UNAUTHENTICATED:return ei.UNAUTHENTICATED;case ua.INVALID_ARGUMENT:return ei.INVALID_ARGUMENT;case ua.NOT_FOUND:return ei.NOT_FOUND;case ua.ALREADY_EXISTS:return ei.ALREADY_EXISTS;case ua.PERMISSION_DENIED:return ei.PERMISSION_DENIED;case ua.FAILED_PRECONDITION:return ei.FAILED_PRECONDITION;case ua.ABORTED:return ei.ABORTED;case ua.OUT_OF_RANGE:return ei.OUT_OF_RANGE;case ua.UNIMPLEMENTED:return ei.UNIMPLEMENTED;case ua.DATA_LOSS:return ei.DATA_LOSS;default:return Jr()}}(la=ua||(ua={}))[la.OK=0]="OK",la[la.CANCELLED=1]="CANCELLED",la[la.UNKNOWN=2]="UNKNOWN",la[la.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",la[la.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",la[la.NOT_FOUND=5]="NOT_FOUND",la[la.ALREADY_EXISTS=6]="ALREADY_EXISTS",la[la.PERMISSION_DENIED=7]="PERMISSION_DENIED",la[la.UNAUTHENTICATED=16]="UNAUTHENTICATED",la[la.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",la[la.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",la[la.ABORTED=10]="ABORTED",la[la.OUT_OF_RANGE=11]="OUT_OF_RANGE",la[la.UNIMPLEMENTED=12]="UNIMPLEMENTED",la[la.INTERNAL=13]="INTERNAL",la[la.UNAVAILABLE=14]="UNAVAILABLE",la[la.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ji(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Yi(_i.comparator);function ma(){return pa}const ga=new Yi(_i.comparator);function ya(...e){let t=ga;for(const n of e)t=t.insert(n.key,n);return t}function va(e){let t=ga;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function wa(){return Ia()}function ba(){return Ia()}function Ia(){return new fa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const _a=new Yi(_i.comparator),Ta=new es(_i.comparator);function Ea(...e){let t=Ta;for(const n of e)t=t.add(n);return t}const Sa=new es(fi);function ka(){return Sa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,t)),new Aa(yi.min(),n,ka(),ma(),Ea())}}class Ca{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ca(ss.EMPTY_BYTE_STRING,t,Ea(),Ea(),Ea())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class Da{constructor(e,t){this.targetId=e,this.It=t}}class xa{constructor(e,t,n=ss.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ra{constructor(){this.Tt=0,this.Et=La(),this.At=ss.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Ea(),t=Ea(),n=Ea();return this.Et.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Jr()}})),new Ca(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=La()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Oa{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=ma(),this.Bt=Pa(),this.Lt=new es(fi)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Jr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Hs(e))if(0===n){const n=new _i(e.path);this.Kt(t,n,js.newNoDocument(n,yi.min()))}else Yr(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&Hs(i.target)){const t=new _i(i.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,js.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=Ea();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new Aa(e,t,this.Lt,this.$t,n);return this.$t=ma(),this.Bt=Pa(),this.Lt=new es(fi),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new Ra,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new es(fi),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Ra),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function Pa(){return new Yi(_i.comparator)}function La(){return new Yi(_i.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Fa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Va{constructor(e,t){this.databaseId=e,this.dt=t}}function Ua(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ba(e,t){return e.dt?t.toBase64():t.toUint8Array()}function ja(e,t){return Ua(e,t.toTimestamp())}function qa(e){return Yr(!!e),yi.fromTimestamp(function(e){const t=as(e);return new gi(t.seconds,t.nanos)}(e))}function $a(e,t){return function(e){return new wi(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ga(e){const t=wi.fromString(e);return Yr(gc(t)),t}function Ka(e,t){return $a(e.databaseId,t.path)}function za(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _i(Ja(n))}function Ha(e,t){return $a(e.databaseId,t)}function Wa(e){const t=Ga(e);return 4===t.length?wi.emptyPath():Ja(t)}function Qa(e){return new wi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ja(e){return Yr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ya(e,t,n){return{name:Ka(e,t),fields:n.value.mapValue.fields}}function Xa(e,t,n){const r=za(e,t.name),i=qa(t.updateTime),s=new Us({mapValue:{fields:t.fields}}),o=js.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Za(e,t){return"found"in t?function(e,t){Yr(!!t.found),t.found.name,t.found.updateTime;const n=za(e,t.found.name),r=qa(t.found.updateTime),i=new Us({mapValue:{fields:t.found.fields}});return js.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Yr(!!t.missing),Yr(!!t.readTime);const n=za(e,t.missing),r=qa(t.readTime);return js.newNoDocument(n,r)}(e,t):Jr()}function ec(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Jr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.dt?(Yr(void 0===t||"string"==typeof t),ss.fromBase64String(t||"")):(Yr(void 0===t||t instanceof Uint8Array),ss.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ei.UNKNOWN:da(e.code);return new ti(t,e.message||"")}(o);n=new xa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=za(e,r.document.name),s=qa(r.document.updateTime),o=new Us({mapValue:{fields:r.document.fields}}),a=js.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Na(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=za(e,r.document),s=r.readTime?qa(r.readTime):yi.min(),o=js.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=za(e,r.document),s=r.removedTargetIds||[];n=new Na([],s,i,null)}else{if(!("filter"in t))return Jr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new ca(r),s=e.targetId;n=new Da(s,i)}}return n}function tc(e,t){let n;if(t instanceof ta)n={update:Ya(e,t.key,t.value)};else if(t instanceof oa)n={delete:Ka(e,t.key)};else if(t instanceof na)n={update:Ya(e,t.key,t.data),updateMask:mc(t.fieldMask)};else{if(!(t instanceof aa))return Jr();n={verify:Ka(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Mo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Uo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jo)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Jr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ja(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Jr()}(e,t.precondition)),n}function nc(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ho.updateTime(qa(e.updateTime)):void 0!==e.exists?Ho.exists(e.exists):Ho.none()}(t.currentDocument):Ho.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Yr("REQUEST_TIME"===t.setToServerValue),n=new Mo;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Fo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Uo(e)}else"increment"in t?n=new jo(e,t.increment):Jr();const r=Ii.fromServerFormat(t.fieldPath);return new Go(r,n)}(e,t))):[];if(t.update){t.update.name;const i=za(e,t.update.name),s=new Us({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new rs(t.map((e=>Ii.fromServerFormat(e))))}(t.updateMask);return new na(i,s,e,n,r)}return new ta(i,s,n,r)}if(t.delete){const r=za(e,t.delete);return new oa(r,n)}if(t.verify){const r=za(e,t.verify);return new aa(r,n)}return Jr()}function rc(e,t){return e&&e.length>0?(Yr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?qa(e.updateTime):qa(t);return n.isEqual(yi.min())&&(n=qa(t)),new zo(n,e.transformResults||[])}(e,t)))):[]}function ic(e,t){return{documents:[Ha(e,t.path)]}}function sc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ha(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ha(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(xs(e.value))return{unaryFilter:{field:hc(e.field),op:"IS_NAN"}};if(Ds(e.value))return{unaryFilter:{field:hc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(xs(e.value))return{unaryFilter:{field:hc(e.field),op:"IS_NOT_NAN"}};if(Ds(e.value))return{unaryFilter:{field:hc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hc(e.field),op:lc(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:hc(e.field),direction:uc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.dt||ms(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function oc(e){let t=Wa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Yr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=cc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ao(dc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ms(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new oo(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new oo(n,t)}(n.endAt)),fo(t,i,o,s,a,"F",c,u)}function ac(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function cc(e){return e?void 0!==e.unaryFilter?[pc(e)]:void 0!==e.fieldFilter?[fc(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>cc(e))).reduce(((e,t)=>e.concat(t))):Jr():[]}function uc(e){return Ma[e]}function lc(e){return Fa[e]}function hc(e){return{fieldPath:e.canonicalString()}}function dc(e){return Ii.fromServerFormat(e.fieldPath)}function fc(e){return Ys.create(dc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Jr()}}(e.fieldFilter.op),e.fieldFilter.value)}function pc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=dc(e.unaryFilter.field);return Ys.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=dc(e.unaryFilter.field);return Ys.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dc(e.unaryFilter.field);return Ys.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=dc(e.unaryFilter.field);return Ys.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Jr()}}function mc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=wc(t)),t=vc(e.get(n),t);return wc(t)}function vc(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function wc(e){return e+""}function bc(e){const t=e.length;if(Yr(t>=2),2===t)return Yr(""===e.charAt(0)&&""===e.charAt(1)),wi.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Jr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Jr()}s=t+2}return new wi(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e,t){return[e,yc(t)]}function Tc(e,t,n){return[e,yc(t),n]}const Ec={},Sc=["prefixPath","collectionGroup","readTime","documentId"],kc=["prefixPath","collectionGroup","documentId"],Ac=["collectionGroup","readTime","prefixPath","documentId"],Cc=["canonicalId","targetId"],Nc=["targetId","path"],Dc=["path","targetId"],xc=["collectionId","parent"],Rc=["indexId","uid"],Oc=["uid","sequenceNumber"],Pc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Lc=["indexId","uid","orderedDocumentKey"],Mc=["userId","collectionPath","documentId"],Fc=["userId","collectionPath","largestBatchId"],Vc=["userId","collectionGroup","largestBatchId"],Uc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bc=[...Uc,"documentOverlays"],jc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qc=jc,$c=[...qc,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Oi{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function Kc(e,t){const n=Zr(e);return Fi.N(n.ee,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Yo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ba();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Jo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(yi.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ea())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,((e,t)=>ea(e,t)))&&pi(this.baseMutations,e.baseMutations,((e,t)=>ea(e,t)))}}class Hc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Yr(e.mutations.length===n.length);let r=_a;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,n,r,i=yi.min(),s=yi.min(),o=ss.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Qc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.ne=e}}function Yc(e,t){let n;if(t.document)n=Xa(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=_i.fromSegments(t.noDocument.path),r=tu(t.noDocument.readTime);n=js.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Jr();{const e=_i.fromSegments(t.unknownDocument.path),r=tu(t.unknownDocument.version);n=js.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new gi(e[0],e[1]);return yi.fromTimestamp(t)}(t.readTime)),n}function Xc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Ka(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ua(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:eu(t.version)};else{if(!t.isUnknownDocument())return Jr();r.unknownDocument={path:n.path.toArray(),version:eu(t.version)}}return r}function Zc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function eu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function tu(e){const t=new gi(e.seconds,e.nanoseconds);return yi.fromTimestamp(t)}function nu(e,t){const n=(t.baseMutations||[]).map((t=>nc(e.ne,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>nc(e.ne,t))),i=gi.fromMillis(t.localWriteTimeMs);return new zc(t.batchId,i,n,r)}function ru(e){const t=tu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?tu(e.lastLimboFreeSnapshotVersion):yi.min();let r;var i;return void 0!==e.query.documents?(Yr(1===(i=e.query).documents.length),r=bo(po(Wa(i.documents[0])))):r=function(e){return bo(oc(e))}(e.query),new Qc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,ss.fromBase64String(e.resumeToken))}function iu(e,t){const n=eu(t.snapshotVersion),r=eu(t.lastLimboFreeSnapshotVersion);let i;i=Hs(t.target)?ic(e.ne,t.target):sc(e.ne,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Gs(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function su(e){const t=oc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Io(t,t.limit,"L"):t}function ou(e,t){return new Wc(t.largestBatchId,nc(e.ne,t.overlayMutation))}function au(e,t){const n=t.path.lastSegment();return[e,yc(t.path.popLast()),n]}function cu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:eu(r.readTime),documentKey:yc(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{getBundleMetadata(e,t){return lu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:tu(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return lu(e).put({bundleId:(n=t).id,createTime:eu(qa(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return hu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:su(t.bundledQuery),readTime:tu(t.readTime)};var t}))}saveNamedQuery(e,t){return hu(e).put(function(e){return{name:e.name,readTime:eu(qa(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function lu(e){return Kc(e,"bundles")}function hu(e){return Kc(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new du(e,n)}getOverlay(e,t){return fu(e).get(au(this.userId,t)).next((e=>e?ou(this.wt,e):null))}getOverlays(e,t){const n=wa();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Wc(t,i);r.push(this.ie(e,s))})),Li.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(yc(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(fu(e).W("collectionPathOverlayIndex",r))})),Li.waitFor(i)}getOverlaysForCollection(e,t,n){const r=wa(),i=yc(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return fu(e).K("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=ou(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=wa();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fu(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=ou(this.wt,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ie(e,t){return fu(e).put(function(e,t,n){const[r,i,s]=au(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:tc(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function fu(e){return Kc(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(cs(e.integerValue));else if("doubleValue"in e){const n=cs(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),gs(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(us(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?Ps(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Jr()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),_i.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function mu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function gu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=mu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}pu.ye=new pu;class yu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=gu(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=gu(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class vu{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class wu{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class bu{constructor(){this.Oe=new yu,this.Fe=new vu(this.Oe),this.$e=new wu(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Iu(this.indexId,this.documentKey,this.arrayValue,n)}}function _u(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Tu(e.arrayValue,t.arrayValue),0!==n?n:(n=Tu(e.directionalValue,t.directionalValue),0!==n?n:_i.comparator(e.documentKey,t.documentKey)))}function Tu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=Ei(e);if(void 0!==t&&!this.Qe(t))return!1;const n=Si(e);let r=0,i=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ze=new ku}addToCollectionParentIndex(e,t){return this.ze.add(t),Li.resolve()}getCollectionParents(e,t){return Li.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Li.resolve()}deleteFieldIndex(e,t){return Li.resolve()}getDocumentsMatchingTarget(e,t){return Li.resolve(null)}getIndexType(e,t){return Li.resolve(0)}getFieldIndexes(e,t){return Li.resolve([])}getNextCollectionGroupToUpdate(e){return Li.resolve(null)}getMinOffset(e,t){return Li.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return Li.resolve(Di.min())}updateCollectionGroup(e,t,n){return Li.resolve()}updateIndexEntries(e,t){return Li.resolve()}}class ku{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new es(wi.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new es(wi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Uint8Array(0);class Cu{constructor(e,t){this.user=e,this.databaseId=t,this.He=new ku,this.Je=new fa((e=>Gs(e)),((e,t)=>zs(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const i={collectionId:n,parent:yc(r)};return Nu(e).put(i)}return Li.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[mi(t),""],!1,!0);return Nu(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(bc(r.parent))}return n}))}addFieldIndex(e,t){const n=xu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Ru(e);return i.next((e=>{n.put(cu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=xu(e),r=Ru(e),i=Du(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Du(e);let r=!0;const i=new Map;return Li.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Ea();const r=[];return Li.forEach(i,((i,s)=>{var o;zr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Gs(t)}`);const a=function(e,t){const n=Ei(t);if(void 0===n)return null;for(const r of Ws(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Si(t))for(const t of Ws(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Si(t)){const t=0===i.kind?Qs(e,i.fieldPath,e.startAt):Js(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new oo(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Si(t)){const t=0===i.kind?Js(e,i.fieldPath,e.endAt):Qs(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new oo(n,r)}(s,i),h=this.Ze(i,s,u),d=this.Ze(i,s,l),f=this.tn(i,s,c),p=this.en(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Li.forEach(p,(i=>n.j(i,t.limit).next((t=>{t.forEach((t=>{const n=_i.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Li.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.nn(t[l/c]):Au,h=this.sn(e,a,n[l%c],r),d=this.rn(e,a,i[l%c],s),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}sn(e,t,n,r){const i=new Iu(e,_i.empty(),t,n);return r?i:i.Le()}rn(e,t,n,r){const i=new Iu(e,_i.empty(),t,n);return r?i.Le():i}Xe(e,t){const n=new Eu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Li.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new es(Ii.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new bu;for(const r of Si(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Be(r.kind);pu.ye.re(e,i)}return n.Me()}nn(e){const t=new bu;return pu.ye.re(e,t.Be(0)),t.Me()}un(e,t){const n=new bu;return pu.ye.re(As(this.databaseId,t),n.Be(function(e){const t=Si(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Me()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new bu);let i=0;for(const s of Si(e)){const e=n[i++];for(const n of r)if(this.cn(t,s.fieldPath)&&Ns(e))r=this.an(r,s,e);else{const t=n.Be(s.kind);pu.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Me();return t}an(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new bu;n.seed(e.Me()),pu.ye.re(s,n.Be(t.kind)),i.push(n)}return i}cn(e,t){return!!e.filters.find((e=>e instanceof Ys&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=xu(e),r=Ru(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return Li.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Ai(t.sequenceNumber,new Di(tu(t.readTime),new _i(bc(t.documentKey)),t.largestBatchId)):Ai.empty(),r=e.fields.map((([e,t])=>new ki(Ii.fromServerFormat(e),t)));return new Ti(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:fi(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=xu(e),i=Ru(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Li.forEach(t,(t=>i.put(cu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Li.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Li.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Li.forEach(i,(n=>this.fn(e,t,n).next((t=>{const i=this.dn(r,n);return t.isEqual(i)?Li.resolve():this._n(e,r,n,t,i)})))))))}))}wn(e,t,n,r){return Du(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return Du(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=Du(e);let i=new es(_u);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{i=i.add(new Iu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}dn(e,t){let n=new es(_u);const r=this.on(t,e);if(null==r)return n;const i=Ei(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Ns(s))for(const i of s.arrayValue.values||[])n=n.add(new Iu(t.indexId,e.key,this.nn(i),r))}else n=n.add(new Iu(t.indexId,e.key,Au,r));return n}_n(e,t,n,r,i){zr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=ns(s),c=ns(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=ns(o)):t?(i(a),a=ns(s)):(a=ns(s),c=ns(o))}}(r,i,_u,(r=>{s.push(this.wn(e,t,n,r))}),(r=>{s.push(this.mn(e,t,n,r))})),Li.waitFor(s)}ln(e){let t=1;return Ru(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>_u(e,t))).filter(((e,t,n)=>!t||0!==_u(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=_u(s,e),i=_u(s,t);if(0===n)r[0]=e.Le();else if(n>0&&i<0)r.push(s),r.push(s.Le());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Au,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Au,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ou)}getMinOffset(e,t){return Li.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||Jr())))).next(Ou)}}function Nu(e){return Kc(e,"collectionParents")}function Du(e){return Kc(e,"indexEntries")}function xu(e){return Kc(e,"indexConfiguration")}function Ru(e){return Kc(e,"indexState")}function Ou(e){Yr(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;xi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Di(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Lu(e,Lu.DEFAULT_COLLECTION_PERCENTILE,Lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Yr(1===a)})));const u=[];for(const l of n.mutations){const e=Tc(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Li.waitFor(s).next((()=>u))}function Fu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Jr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lu.DEFAULT_COLLECTION_PERCENTILE=10,Lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lu.DEFAULT=new Lu(41943040,Lu.DEFAULT_COLLECTION_PERCENTILE,Lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lu.DISABLED=new Lu(-1,0,0);class Vu{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){Yr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Vu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bu(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=ju(e),s=Bu(e);return s.add({}).next((o=>{Yr("number"==typeof o);const a=new zc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>tc(e.ne,t))),i=n.mutations.map((t=>tc(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.wt,this.userId,a),u=[];let l=new es(((e,t)=>fi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Tc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Ec))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Li.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Bu(e).get(t).next((e=>e?(Yr(e.userId===this.userId),nu(this.wt,e)):null))}yn(e,t){return this.gn[t]?Li.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Bu(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Yr(t.batchId>=n),i=nu(this.wt,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Bu(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Bu(e).K("userMutationsIndex",t).next((e=>e.map((e=>nu(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=_c(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ju(e).J({range:r},((n,r,s)=>{const[o,a,c]=n,u=bc(a);if(o===this.userId&&t.path.isEqual(u))return Bu(e).get(c).next((e=>{if(!e)throw Jr();Yr(e.userId===this.userId),i.push(nu(this.wt,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new es(fi);const r=[];return t.forEach((t=>{const i=_c(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=ju(e).J({range:s},((e,r,i)=>{const[s,o,a]=e,c=bc(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Li.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=_c(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new es(fi);return ju(e).J({range:s},((e,t,i)=>{const[s,a,c]=e,u=bc(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Bu(e).get(t).next((e=>{if(null===e)throw Jr();Yr(e.userId===this.userId),n.push(nu(this.wt,e))})))})),Li.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Mu(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),Li.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Li.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return ju(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=bc(e[1]);r.push(t)}else n.done()})).next((()=>{Yr(0===r.length)}))}))}containsKey(e,t){return Uu(e,this.userId,t)}Tn(e){return qu(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Uu(e,t,n){const r=_c(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ju(e).J({range:s,H:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Bu(e){return Kc(e,"mutations")}function ju(e){return Kc(e,"documentMutations")}function qu(e){return Kc(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new $u(0)}static Rn(){return new $u(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new $u(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>yi.fromTimestamp(new gi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Ku(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(Yr(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Ku(e).J(((s,o)=>{const a=ru(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Li.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Ku(e).J(((e,n)=>{const r=ru(n);t(r)}))}bn(e){return zu(e).get("targetGlobalKey").next((e=>(Yr(null!==e),e)))}Pn(e,t){return zu(e).put("targetGlobalKey",t)}vn(e,t){return Ku(e).put(iu(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Gs(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ku(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=ru(n);zs(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Hu(e);return t.forEach((t=>{const s=yc(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Li.waitFor(r)}removeMatchingKeys(e,t,n){const r=Hu(e);return Li.forEach(t,(t=>{const i=yc(t.path);return Li.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Hu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Hu(e);let i=Ea();return r.J({range:n,H:!0},((e,t,n)=>{const r=bc(e[1]),s=new _i(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=yc(t.path),r=IDBKeyRange.bound([n],[mi(n)],!1,!0);let i=0;return Hu(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}te(e,t){return Ku(e).get(t).next((e=>e?ru(e):null))}}function Ku(e){return Kc(e,"targets")}function zu(e){return Kc(e,"targetGlobal")}function Hu(e){return Kc(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu([e,t],[n,r]){const i=fi(e,n);return 0===i?fi(t,r):i}class Qu{constructor(e){this.Sn=e,this.buffer=new es(Wu),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Wu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ju{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){zr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Bi(e)?zr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Pi(e)}await this.kn(3e5)}))}}class Yu{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.On(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Li.resolve(Hi.ot);const n=new Qu(t);return this.Mn.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.Mn.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector","Garbage collection skipped; disabled"),Li.resolve(Pu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pu):this.$n(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(zr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Gr()<=a["in"].DEBUG&&zr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Li.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Yu(e,t)}(this,t)}On(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return Zu(e,n)}removeReference(e,t,n){return Zu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Zu(e,t)}Un(e,t){return function(e,t){let n=!1;return qu(e).Y((r=>Uu(e,r,t).next((e=>(e&&(n=!0),Li.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ln(e,((s,o)=>{if(o<=t){const t=this.Un(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,yi.min()),Hu(e).delete([0,yc(s.path)]))))}));r.push(t)}})).next((()=>Li.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Zu(e,t)}Ln(e,t){const n=Hu(e);let r,i=Hi.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Hi.ot&&t(new _i(bc(r)),i),i=o,r=s):i=Hi.ot})).next((()=>{i!==Hi.ot&&t(new _i(bc(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Zu(e,t){return Hu(e).put(function(e,t){return{targetId:0,path:yc(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.changes=new fa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,js.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Li.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return sl(e).put(n)}removeEntry(e,t,n){return sl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Zc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=js.newInvalidDocument(t);return sl(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ol(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:js.newInvalidDocument(t)};return sl(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ol(t))},((e,r)=>{n={document:this.Kn(t,r),size:Fu(r)}})).next((()=>n))}getEntries(e,t){let n=ma();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=ma(),r=new Yi(_i.comparator);return this.Qn(e,t,((e,t)=>{const i=this.Kn(e,t);n=n.insert(e,i),r=r.insert(e,Fu(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return Li.resolve();let r=new es(cl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(ol(r.first()),ol(r.last())),s=r.getIterator();let o=s.getNext();return sl(e).J({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=_i.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&cl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.q(ol(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Zc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return sl(e).K(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=ma();for(const n of e){const e=this.Kn(_i.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=ma();const s=al(t,n),o=al(t,Di.max());return sl(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Kn(_i.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new rl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return il(e).get("remoteDocumentGlobalKey").next((e=>(Yr(!!e),e)))}qn(e,t){return il(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=Yc(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(yi.min()))return e}return js.newInvalidDocument(e)}}function nl(e){return new tl(e)}class rl extends el{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new fa((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new es(((e,t)=>fi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Hn.get(i);if(t.push(this.zn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Xc(this.zn.wt,s);r=r.add(i.path.popLast());const c=Fu(a);n+=c-o.size,t.push(this.zn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Xc(this.zn.wt,s.convertToNoDocument(yi.min()));t.push(this.zn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),Li.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function il(e){return Kc(e,"remoteDocumentGlobal")}function sl(e){return Kc(e,"remoteDocumentsV14")}function ol(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function al(e,t){const n=t.documentKey.path.toArray();return[e,Zc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function cl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=fi(n[s],r[s]),i)return i;return i=fi(n.length,r.length),i||(i=fi(n[n.length-2],r[r.length-2]),i||fi(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ul{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Xo(n.mutation,e,rs.empty(),gi.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ea()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ea()){const r=wa();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ya();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=wa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ea())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ma();const s=Ia(),o=Ia();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof na)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Xo(o.mutation,t,o.mutation.getFieldMask(),gi.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new ul(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ia();let r=new Yi(((e,t)=>e-t)),i=Ea();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||rs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ea()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ba();c.forEach((e=>{if(!i.has(e)){const r=Jo(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return _i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Li.resolve(wa());let o=-1,a=i;return s.next((t=>Li.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Li.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ea()))).next((e=>({batchId:o,changes:va(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _i(t)).next((e=>{let t=ya();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ya();return this.indexManager.getCollectionParents(e,r).next((s=>Li.forEach(s,(s=>{const o=function(e,t){return new ho(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,js.newInvalidDocument(n)))}));let n=ya();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Xo(s.mutation,i,rs.empty(),gi.now()),So(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Li.resolve(js.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Li.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:qa(n.createTime)}),Li.resolve()}getNamedQuery(e,t){return Li.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:su(e.bundledQuery),readTime:qa(e.readTime)}}(t)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.overlays=new Yi(_i.comparator),this.Xn=new Map}getOverlay(e,t){return Li.resolve(this.overlays.get(t))}getOverlays(e,t){const n=wa();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),Li.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Li.resolve()}getOverlaysForCollection(e,t,n){const r=wa(),i=t.length+1,s=new _i(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Li.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Yi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=wa(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=wa(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Li.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Wc(t,n));let i=this.Xn.get(t);void 0===i&&(i=Ea(),this.Xn.set(t,i)),this.Xn.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Zn=new es(pl.ts),this.es=new es(pl.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new pl(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new pl(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new _i(new wi([])),n=new pl(t,e),r=new pl(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new _i(new wi([])),n=new pl(t,e),r=new pl(t,e+1);let i=Ea();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new pl(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class pl{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return _i.comparator(e.key,t.key)||fi(e.ls,t.ls)}static ns(e,t){return fi(e.ls,t.ls)||_i.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new es(pl.ts)}checkEmpty(e){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new pl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(e,t){return Li.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new pl(t,0),r=new pl(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);i.push(t)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new es(fi);return t.forEach((e=>{const t=new pl(e,0),r=new pl(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Li.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;_i.isDocumentKey(i)||(i=i.child(""));const s=new pl(new _i(i),0);let o=new es(fi);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),Li.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Yr(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Li.forEach(t.mutations,(r=>{const i=new pl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new pl(t,0),r=this.ds.firstAfterOrEqual(n);return Li.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Li.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.ps=e,this.docs=new Yi(_i.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Li.resolve(n?n.document.mutableCopy():js.newInvalidDocument(t))}getEntries(e,t){let n=ma();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():js.newInvalidDocument(e))})),Li.resolve(n)}getAllFromCollection(e,t,n){let r=ma();const i=new _i(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||xi(Ni(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Li.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Jr()}Is(e,t){return Li.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new yl(this)}getSize(e){return Li.resolve(this.size)}}class yl extends el{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),Li.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.persistence=e,this.Ts=new fa((e=>Gs(e)),zs),this.lastRemoteSnapshotVersion=yi.min(),this.highestTargetId=0,this.Es=0,this.As=new fl,this.targetCount=0,this.Rs=$u.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Li.resolve()}getLastRemoteSnapshotVersion(e){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Li.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Li.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new $u(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Li.resolve()}updateTargetData(e,t){return this.vn(t),Li.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Li.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(e){return Li.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Li.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Li.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Li.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Li.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Li.resolve(n)}containsKey(e,t){return Li.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Hi(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new vl(this),this.indexManager=new Su,this.remoteDocumentCache=function(e){return new gl(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Jc(t),this.Ds=new hl(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new ml(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new bl(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return Li.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class bl extends Oi{constructor(e){super(),this.currentSequenceNumber=e}}class Il{constructor(e){this.persistence=e,this.ks=new fl,this.Ms=null}static Os(e){return new Il(e)}get Fs(){if(this.Ms)return this.Ms;throw Jr()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Li.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Li.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Fs,(n=>{const r=_i.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,yi.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Li.or([()=>Li.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.wt=e}M(e,t,n,r){const i=new Mi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0}),e.createObjectStore("documentMutations")}(e),Tl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Li.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Tl(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:yi.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Li.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Bs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(i))))),n<7&&r>=7&&(s=s.next((()=>this.Us(i)))),n<8&&r>=8&&(s=s.next((()=>this.qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.Ks(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Mc});t.createIndex("collectionPathOverlayIndex",Fc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Vc,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Sc});t.createIndex("documentKeyIndex",kc),t.createIndex("collectionGroupIndex",Ac)}(e))).next((()=>this.Gs(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.Qs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Rc}).createIndex("sequenceNumberIndex",Oc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Pc}).createIndex("documentKeyIndex",Lc,{unique:!1})}(e)))),s}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=Fu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>Li.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Li.forEach(n,(n=>{Yr(n.userId===t.userId);const r=nu(this.wt,n);return Mu(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,i)=>{const s=new wi(n),o=function(e){return[0,yc(e)]}(s);r.push(t.get(o).next((n=>n?Li.resolve():(n=>t.put({targetId:0,path:yc(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Li.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:xc});const n=t.store("collectionParents"),r=new ku,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:yc(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new wi(e);return i(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const s=bc(t);return i(s.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=ru(n),i=iu(this.wt,r);return t.put(i)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new _i(wi.fromString(o.document.name).popFirst(5)):o.noDocument?_i.fromSegments(o.noDocument.path):o.unknownDocument?_i.fromSegments(o.unknownDocument.path):Jr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Li.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=nl(this.wt),i=new wl(Il.Os,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Ea();nu(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Li.forEach(n,((e,n)=>{const s=new jr(n),o=du.se(this.wt,s),a=i.getIndexManager(s),c=Vu.se(s,this.wt,a,i.referenceDelegate);return new ll(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Gc(t,Hi.ot),e).next()}))}))}}function Tl(e){e.createObjectStore("targetDocuments",{keyPath:Nc}).createIndex("documentTargetsIndex",Dc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Cc,{unique:!0}),e.createObjectStore("targetGlobal")}const El="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Sl{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=i,this.window=s,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!Sl.V())throw new ti(ei.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xu(this,r),this.ei=t+"main",this.wt=new Jc(a),this.ni=new Fi(this.ei,this.Hs,new _l(this.wt)),this.Vs=new Gu(this.referenceDelegate,this.wt),this.remoteDocumentCache=nl(this.wt),this.Ds=new uu,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Hr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,El);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new Hi(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Al(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(Bi(e))return zr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return zr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return kl(e).get("owner").next((e=>Li.resolve(this.di(e))))}_i(e){return Al(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Kc(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Li.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?Li.resolve(!0):kl(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,El);return!1}}return!(!this.networkEnabled||!this.inForeground)||Al(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&zr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Gc(e,Hi.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>Al(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return Vu.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Cu(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return du.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){zr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Hs)?$c:14===s?qc:13===s?jc:12===s?Bc:11===s?Uc:void Jr();var s;let o;return this.ni.runTransaction(e,r,i,(r=>(o=new Gc(r,this.Ps?this.Ps.next():Hi.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw Hr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new ti(ei.FAILED_PRECONDITION,Ri);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return kl(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ti(ei.FAILED_PRECONDITION,El)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return kl(e).put("owner",t)}static V(){return Fi.V()}li(e){const t=kl(e);return t.get("owner").next((e=>this.di(e)?(zr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Li.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Hr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return zr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Hr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(T){Hr("Failed to set zombie client id.",T)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(T){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function kl(e){return Kc(e,"owner")}function Al(e){return Kc(e,"clientMetadata")}function Cl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Nl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=Ea(),r=Ea();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Nl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((i=>i||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(mo(t))return Li.resolve(null);let n=bo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Io(t,null,"F"),n=bo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ea(...r);return this.Di.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ki(t,r);return this.Mi(t,s,i,n.readTime)?this.Ci(e,Io(t,null,"F")):this.Oi(e,s,t,n)}))))})))))}xi(e,t,n,r){return mo(t)||r.isEqual(yi.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((i=>{const s=this.ki(t,i);return this.Mi(t,s,n,r)?this.Ni(e,t):(Gr()<=a["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Eo(t)),this.Oi(e,s,t,Ci(r,-1)))}))}ki(e,t){let n=new es(Ao(e));return t.forEach(((t,r)=>{So(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,t){return Gr()<=a["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.Di.getDocumentsMatchingQuery(e,t,Di.min())}Oi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new Yi(fi),this.Bi=new fa((e=>Gs(e)),zs),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ll(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function Rl(e,t,n,r){return new xl(e,t,n,r)}async function Ol(e,t){const n=Zr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ea();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Pl(e,t){const n=Zr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Yr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ea();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ll(e){const t=Zr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function Ml(e,t){const n=Zr(e),r=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ss.EMPTY_BYTE_STRING,yi.min()).withLastLimboFreeSnapshotVersion(yi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Vs.updateTargetData(e,u))}));let a=ma(),c=Ea();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Fl(e,s,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(yi.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Li.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=i,e)))}function Fl(e,t,n){let r=Ea(),i=Ea();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ma();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(yi.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function Vl(e,t){const n=Zr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ul(e,t){const n=Zr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((i=>i?(r=i,Li.resolve(r)):n.Vs.allocateTargetId(e).next((i=>(r=new Qc(t,i,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function Bl(e,t,n){const r=Zr(e),i=r.$i.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Bi(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(i.target)}function jl(e,t,n){const r=Zr(e);let i=yi.min(),s=Ea();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zr(e),i=r.Bi.get(n);return void 0!==i?Li.resolve(r.$i.get(i)):r.Vs.getTargetData(t,n)}(r,e,bo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?i:yi.min(),n?s:Ea()))).next((e=>(Gl(r,ko(t),e),{documents:e,ji:s})))))}function ql(e,t){const n=Zr(e),r=Zr(n.Vs),i=n.$i.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function $l(e,t){const n=Zr(e),r=n.Li.get(t)||yi.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,Ci(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Gl(n,t,e),e)))}function Gl(e,t,n){let r=yi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function Kl(e,t,n,r){const i=Zr(e);let s=Ea(),o=ma();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(s=s.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Ui.newChangeBuffer({trackRemovals:!0}),c=await Ul(i,function(e){return bo(po(wi.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Fl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Vs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function zl(e,t,n=Ea()){const r=await Ul(e,bo(su(t.bundledQuery))),i=Zr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=qa(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(ss.EMPTY_BYTE_STRING,s);return i.$i=i.$i.insert(o.targetId,o),i.Vs.updateTargetData(e,o).next((()=>i.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ds.saveNamedQuery(e,t)))}))}function Hl(e,t){return`firestore_clients_${e}_${t}`}function Wl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ql(e,t){return`firestore_targets_${e}_${t}`}class Jl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ti(r.error.code,r.error.message))),s?new Jl(e,t,r.state,i):(Hr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ti(n.error.code,n.error.message))),i?new Yl(e,n.state,r):(Hr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=ka();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ys(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Xl(e,i):(Hr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zl{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Zl(t.clientId,t.onlineState):(Hr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class eh{constructor(){this.activeTargetIds=ka()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class th{constructor(e,t,n,r,i){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Yi(fi),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=Hl(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new eh),this.cr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Hl(this.persistenceKey,n));if(e){const t=Xl.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Ql(this.persistenceKey,e));if(n){const r=Yl.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ql(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return zr("SharedClientState","READ",e,t),t}setItem(e,t){zr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){zr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(zr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Hr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=Hi.ot;if(null!=e)try{const n=JSON.parse(e);Yr("number"==typeof n),t=n}catch(e){Hr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Hi.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new Jl(this.currentUser,e,t,n),i=Wl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const t=Wl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=Ql(this.persistenceKey,e),i=new Yl(e,t,n);this.setItem(r,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Xl.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Jl.Ji(new jr(i),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return Yl.Ji(r,t)}wr(e){return Zl.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);zr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Or(s,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=ka();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class nh{constructor(){this.Fr=new eh,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new eh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,i){const s=this.oo(e,t);zr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(e,s,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Wr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ao(e,t,n,r,i,s){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=sh[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Or.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Or.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),s(new ti(ei.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ei).indexOf(t)>=0?t:ei.UNKNOWN}(e.status);s(new ti(t,e.message))}else s(new ti(ei.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ti(ei.UNAVAILABLE,"Connection failed."));break;default:Jr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=xr(),s=Rr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.uo(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");zr("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,h=!1;const d=new oh({jr:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",e),u.send(e))},Wr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Vr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(u,Vr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.eo())})),f(u,Vr.EventType.ERROR,(e=>{h||(h=!0,Wr("Connection","WebChannel transport errored:",e),d.eo(new ti(ei.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Yr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){zr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=ua[e];if(void 0!==t)return da(t)}(e),n=i.message;void 0===t&&(t=ei.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.eo(new ti(t,n)),u.close()}else zr("Connection","WebChannel received:",n),d.no(n)}})),f(s,Lr.STAT_EVENT,(e=>{e.stat===Mr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Mr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){return"undefined"!=typeof window?window:null}function uh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(e){return new Va(e,!0)}class hh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,n,r,i,s,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new hh(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===ei.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===ei.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new ti(ei.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fh extends dh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.wt=i}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=ec(this.wt,e),n=function(e){if(!("targetChange"in e))return yi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?yi.min():t.readTime?qa(t.readTime):yi.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=Qa(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Hs(r)?{documents:ic(e,r)}:{query:sc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Ba(e,t.resumeToken):t.snapshotVersion.compareTo(yi.min())>0&&(n.readTime=Ua(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=ac(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Qa(this.wt),t.removeTarget=e,this.Oo(t)}}class ph extends dh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Yr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=rc(e.writeResults,e.commitTime),n=qa(e.commitTime);return this.listener.Jo(n,t)}return Yr(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Qa(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>tc(this.wt,e)))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class gh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Hr(t),this.su=!1):zr("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((e=>{n.enqueueAndForget((async()=>{kh(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zr(e);t.lu.add(4),await wh(t),t._u.set("Unknown"),t.lu.delete(4),await vh(t)}(this))}))})),this._u=new gh(n,r)}}async function vh(e){if(kh(e))for(const t of e.fu)await t(!0)}async function wh(e){for(const t of e.fu)await t(!1)}function bh(e,t){const n=Zr(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Sh(n)?Eh(n):Gh(n).Co()&&_h(n,t))}function Ih(e,t){const n=Zr(e),r=Gh(n);n.hu.delete(t),r.Co()&&Th(n,t),0===n.hu.size&&(r.Co()?r.ko():kh(n)&&n._u.set("Unknown"))}function _h(e,t){e.wu.Nt(t.targetId),Gh(e).Qo(t)}function Th(e,t){e.wu.Nt(t),Gh(e).jo(t)}function Eh(e){e.wu=new Oa({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Gh(e).start(),e._u.iu()}function Sh(e){return kh(e)&&!Gh(e).Do()&&e.hu.size>0}function kh(e){return 0===Zr(e).lu.size}function Ah(e){e.wu=void 0}async function Ch(e){e.hu.forEach(((t,n)=>{_h(e,t)}))}async function Nh(e,t){Ah(e),Sh(e)?(e._u.uu(t),Eh(e)):e._u.set("Unknown")}async function Dh(e,t,n){if(e._u.set("Online"),t instanceof xa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await xh(e,n)}else if(t instanceof Na?e.wu.Ut(t):t instanceof Da?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(yi.min()))try{const t=await Ll(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(ss.EMPTY_BYTE_STRING,n.snapshotVersion)),Th(e,t);const r=new Qc(n.target,t,1,n.sequenceNumber);_h(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await xh(e,t)}}async function xh(e,t,n){if(!Bi(t))throw t;e.lu.add(1),await wh(e),e._u.set("Offline"),n||(n=()=>Ll(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await vh(e)}))}function Rh(e,t){return t().catch((n=>xh(e,n,t)))}async function Oh(e){const t=Zr(e),n=Kh(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Ph(t);)try{const e=await Vl(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,Lh(t,e)}catch(e){await xh(t,e)}Mh(t)&&Fh(t)}function Ph(e){return kh(e)&&e.au.length<10}function Lh(e,t){e.au.push(t);const n=Kh(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Mh(e){return kh(e)&&!Kh(e).Do()&&e.au.length>0}function Fh(e){Kh(e).start()}async function Vh(e){Kh(e).Xo()}async function Uh(e){const t=Kh(e);for(const n of e.au)t.Ho(n.mutations)}async function Bh(e,t,n){const r=e.au.shift(),i=Hc.from(r,t,n);await Rh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Oh(e)}async function jh(e,t){t&&Kh(e).zo&&await async function(e,t){if(n=t.code,ha(n)&&n!==ei.ABORTED){const n=e.au.shift();Kh(e).No(),await Rh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Oh(e)}var n}(e,t),Mh(e)&&Fh(e)}async function qh(e,t){const n=Zr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=kh(n);n.lu.add(3),await wh(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await vh(n)}async function $h(e,t){const n=Zr(e);t?(n.lu.delete(2),await vh(n)):t||(n.lu.add(2),await wh(n),n._u.set("Unknown"))}function Gh(e){return e.mu||(e.mu=function(e,t,n){const r=Zr(e);return r.tu(),new fh(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:Ch.bind(null,e),Jr:Nh.bind(null,e),Go:Dh.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),Sh(e)?Eh(e):e._u.set("Unknown")):(await e.mu.stop(),Ah(e))}))),e.mu}function Kh(e){return e.gu||(e.gu=function(e,t,n){const r=Zr(e);return r.tu(),new ph(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:Vh.bind(null,e),Jr:jh.bind(null,e),Yo:Uh.bind(null,e),Jo:Bh.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await Oh(e)):(await e.gu.stop(),e.au.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new zh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ti(ei.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hh(e,t){if(Hr("AsyncQueue",`${t}: ${e}`),Bi(e))return new ti(ei.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||_i.comparator(t.key,n.key):(e,t)=>_i.comparator(e.key,t.key),this.keyedMap=ya(),this.sortedSet=new Yi(this.comparator)}static emptySet(e){return new Wh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.yu=new Yi(_i.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Jr():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Jh{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Jh(e,t,Wh.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.Iu=void 0,this.listeners=[]}}class Xh{constructor(){this.queries=new fa((e=>To(e)),_o),this.onlineState="Unknown",this.Tu=new Set}}async function Zh(e,t){const n=Zr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Yh),i)try{s.Iu=await n.onListen(r)}catch(e){const n=Hh(e,`Initialization of query '${Eo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&rd(n)}async function ed(e,t){const n=Zr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function td(e,t){const n=Zr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(i)&&(r=!0);t.Iu=i}}r&&rd(n)}function nd(e,t,n){const r=Zr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function rd(e){e.Tu.forEach((e=>{e.next()}))}class id{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Jh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Jh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.wt=e}Wi(e){return za(this.wt,e)}zi(e){return e.metadata.exists?Xa(this.wt,e.document,!1):js.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return qa(e)}}class ad{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=cd(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=wi.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new od(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ea()).add(e);t.set(n,r)}}return t}async complete(){const e=await Kl(this.localStore,new od(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await zl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function cd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.key=e}}class ld{constructor(e){this.key=e}}class hd{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Ea(),this.mutatedKeys=Ea(),this.Lu=Ao(e),this.Uu=new Wh(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new Qh,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=So(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Gu:n,Mi:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Jh(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Qh,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Ea(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new ld(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new ud(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Ea();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Jh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class dd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fd{constructor(e){this.key=e,this.Xu=!1}}class pd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new fa((e=>To(e)),_o),this.ec=new Map,this.nc=new Set,this.sc=new Yi(_i.comparator),this.ic=new Map,this.rc=new fl,this.oc={},this.uc=new Map,this.cc=$u.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function md(e,t){const n=Gd(e);let r,i;const s=n.tc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await Ul(n.localStore,bo(t));n.isPrimaryClient&&bh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await gd(n,t,r,"current"===s)}return i}async function gd(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ku(n);i.Mi&&(i=await jl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Nd(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await jl(e.localStore,t,!0),s=new hd(t,i.ji),o=s.Ku(i.documents),a=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Nd(e,n,c.zu);const u=new dd(t,n,s);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function yd(e,t){const n=Zr(e),r=n.tc.get(t),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((e=>!_o(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ih(n.remoteStore,r.targetId),Ad(n,r.targetId)})).catch(Pi)):(Ad(n,r.targetId),await Bl(n.localStore,r.targetId,!0))}async function vd(e,t,n){const r=Kd(e);try{const e=await function(e,t){const n=Zr(e),r=gi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ea());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ma(),c=Ea();return n.Ui.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Zo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new na(e.key,t,Bs(t.value.mapValue),Ho.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:va(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new Yi(fi)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Rd(r,e.changes),await Oh(r.remoteStore)}catch(e){const t=Hh(e,"Failed to persist write");n.reject(t)}}async function wd(e,t){const n=Zr(e);try{const e=await Ml(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(Yr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?Yr(r.Xu):e.removedDocuments.size>0&&(Yr(r.Xu),r.Xu=!1))})),await Rd(n,e,t)}catch(e){await Pi(e)}}function bd(e,t,n){const r=Zr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Zr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Eu(t)&&(r=!0)})),r&&rd(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Id(e,t,n){const r=Zr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ic.get(t),s=i&&i.key;if(s){let e=new Yi(_i.comparator);e=e.insert(s,js.newNoDocument(s,yi.min()));const n=Ea().add(s),i=new Aa(yi.min(),new Map,new es(fi),e,n);await wd(r,i),r.sc=r.sc.remove(s),r.ic.delete(t),xd(r)}else await Bl(r.localStore,t,!1).then((()=>Ad(r,t,n))).catch(Pi)}async function _d(e,t){const n=Zr(e),r=t.batch.batchId;try{const e=await Pl(n.localStore,t);kd(n,r,null),Sd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rd(n,e)}catch(e){await Pi(e)}}async function Td(e,t,n){const r=Zr(e);try{const e=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Yr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);kd(r,t,n),Sd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Rd(r,e)}catch(n){await Pi(n)}}async function Ed(e,t){const n=Zr(e);kh(n.remoteStore)||zr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Zr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=Hh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Sd(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function kd(e,t,n){const r=Zr(e);let i=r.oc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oc[r.currentUser.toKey()]=i}}function Ad(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Cd(e,t)}))}function Cd(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Ih(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),xd(e))}function Nd(e,t,n){for(const r of n)r instanceof ud?(e.rc.addReference(r.key,t),Dd(e,r)):r instanceof ld?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Cd(e,r.key)):Jr()}function Dd(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.nc.add(r),xd(e))}function xd(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new _i(wi.fromString(t)),r=e.cc.next();e.ic.set(r,new fd(n)),e.sc=e.sc.insert(n,r),bh(e.remoteStore,new Qc(bo(po(n.path)),r,2,Hi.ot))}}async function Rd(e,t,n){const r=Zr(e),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Nl.Vi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(e,t){const n=Zr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Li.forEach(t,(t=>Li.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Li.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Bi(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}async function Od(e,t){const n=Zr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await Ol(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new ti(ei.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Rd(n,e.Ki)}}function Pd(e,t){const n=Zr(e),r=n.ic.get(t);if(r&&r.Xu)return Ea().add(r.key);{let e=Ea();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function Ld(e,t){const n=Zr(e),r=await jl(n.localStore,t.query,!0),i=t.view.Ju(r);return n.isPrimaryClient&&Nd(n,t.targetId,i.zu),i}async function Md(e,t){const n=Zr(e);return $l(n.localStore,t).then((e=>Rd(n,e)))}async function Fd(e,t,n,r){const i=Zr(e),s=await function(e,t){const n=Zr(e),r=Zr(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Li.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Oh(i.remoteStore):"acknowledged"===n||"rejected"===n?(kd(i,t,r||null),Sd(i,t),function(e,t){Zr(Zr(e).mutationQueue).In(t)}(i.localStore,t)):Jr(),await Rd(i,s)):zr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Vd(e,t){const n=Zr(e);if(Gd(n),Kd(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ud(n,e.toArray());n.ac=!0,await $h(n.remoteStore,!0);for(const r of t)bh(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Ad(n,i),Bl(n.localStore,i,!0)))),Ih(n.remoteStore,i)})),await t,await Ud(n,e),function(e){const t=Zr(e);t.ic.forEach(((e,n)=>{Ih(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new Yi(_i.comparator)}(n),n.ac=!1,await $h(n.remoteStore,!1)}}async function Ud(e,t,n){const r=Zr(e),i=[],s=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await Ul(r.localStore,bo(t[0]));for(const e of t){const t=r.tc.get(e),n=await Ld(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await ql(r.localStore,o);e=await Ul(r.localStore,t),await gd(r,Bd(t),o,!1)}i.push(e)}return r.Zu.Go(s),i}function Bd(e){return fo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function jd(e){const t=Zr(e);return Zr(Zr(t.localStore).persistence).Ri()}async function qd(e,t,n,r){const i=Zr(e);if(i.ac)return void zr("SyncEngine","Ignoring unexpected query state notification.");const s=i.ec.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await $l(i.localStore,ko(s[0])),r=Aa.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Rd(i,e,r);break}case"rejected":await Bl(i.localStore,t,!0),Ad(i,t,r);break;default:Jr()}}async function $d(e,t,n){const r=Gd(e);if(r.ac){for(const e of t){if(r.ec.has(e)){zr("SyncEngine","Adding an already active target "+e);continue}const t=await ql(r.localStore,e),n=await Ul(r.localStore,t);await gd(r,Bd(t),n.targetId,!1),bh(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await Bl(r.localStore,e,!1).then((()=>{Ih(r.remoteStore,e),Ad(r,e)})).catch(Pi)}}function Gd(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Id.bind(null,t),t.Zu.Go=td.bind(null,t.eventManager),t.Zu.lc=nd.bind(null,t.eventManager),t}function Kd(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_d.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Td.bind(null,t),t}function zd(e,t,n){const r=Zr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Zr(e),r=qa(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(cd(r));const i=new ad(r,e.localStore,t.wt);let s=await t.fc();for(;s;){const e=await i.Nu(s);e&&n._updateProgress(e),s=await t.fc()}const o=await i.complete();return await Rd(e,o.Ou,void 0),await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return Wr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Hd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=lh(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Rl(this.persistence,new Dl,e.initialUser,this.wt)}_c(e){return new wl(Il.Os,this.wt)}dc(e){return new nh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wd extends Hd{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Kd(this.yc.syncEngine),await Oh(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return Rl(this.persistence,new Dl,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ju(n,e.asyncQueue,t)}gc(e,t){const n=new zi(t,this.persistence);return new Ki(e.asyncQueue,n)}_c(e){const t=Cl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Lu.withCacheSize(this.cacheSizeBytes):Lu.DEFAULT;return new Sl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ch(),uh(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new nh}}class Qd extends Wd{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof th&&(this.sharedClientState.syncEngine={kr:Fd.bind(null,t),Mr:qd.bind(null,t),Or:$d.bind(null,t),Ri:jd.bind(null,t),Nr:Md.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await Vd(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=ch();if(!th.V(t))throw new ti(ei.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Cl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new th(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>bd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Od.bind(null,this.syncEngine),await $h(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Xh}createDatastore(e){const t=lh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ah(r));var r;return function(e,t,n,r){return new mh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>bd(this.syncEngine,e,0),s=ih.V()?new ih:new rh,new yh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new pd(e,t,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zr(e);zr("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await wh(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new ni,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new sd(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ti(ei.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Zr(e),r=Qa(n.wt)+"/documents",i={documents:t.map((e=>Ka(n.wt,e)))},s=await n.ao("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=Za(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Yr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new oa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=_i.fromPath(t);this.mutations.push(new aa(n,this.precondition(n)))})),await async function(e,t){const n=Zr(e),r=Qa(n.wt)+"/documents",i={writes:t.map((e=>tc(n.wt,e)))};await n.ro("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Jr();t=yi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ti(ei.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ho.updateTime(t):Ho.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(yi.min()))throw new ti(ei.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ho.updateTime(t)}return Ho.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Dc=n.maxAttempts,this.So=new hh(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new ef(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!ms(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!ha(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=di.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Hh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function rf(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ol(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function sf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await of(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>qh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>qh(t.remoteStore,n))),e.onlineComponents=t}async function of(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await rf(e,new Hd)),e.offlineComponents}async function af(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await sf(e,new Jd)),e.onlineComponents}function cf(e){return of(e).then((e=>e.persistence))}function uf(e){return of(e).then((e=>e.localStore))}function lf(e){return af(e).then((e=>e.remoteStore))}function hf(e){return af(e).then((e=>e.syncEngine))}async function df(e){const t=await af(e),n=t.eventManager;return n.onListen=md.bind(null,t.syncEngine),n.onUnlisten=yd.bind(null,t.syncEngine),n}function ff(e){return e.asyncQueue.enqueue((async()=>{const t=await cf(e),n=await lf(e);return t.setNetworkEnabled(!0),function(e){const t=Zr(e);return t.lu.delete(0),vh(t)}(n)}))}function pf(e){return e.asyncQueue.enqueue((async()=>{const t=await cf(e),n=await lf(e);return t.setNetworkEnabled(!1),async function(e){const t=Zr(e);t.lu.add(0),await wh(t),t._u.set("Offline")}(n)}))}function mf(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ti(ei.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Hh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await uf(e),t,n))),n.promise}function gf(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Xd({next:s=>{t.enqueueAndForget((()=>ed(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ti(ei.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new id(po(n.path),s,{includeMetadataChanges:!0,Du:!0});return Zh(e,o)}(await df(e),e.asyncQueue,t,n,r))),r.promise}function yf(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await jl(e,t,!0),i=new hd(t,r.ji),s=i.Ku(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Hh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await uf(e),t,n))),n.promise}function vf(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Xd({next:n=>{t.enqueueAndForget((()=>ed(e,o))),n.fromCache&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new id(n,s,{includeMetadataChanges:!0,Du:!0});return Zh(e,o)}(await df(e),e.asyncQueue,t,n,r))),r.promise}function wf(e,t){const n=new Xd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Tu.add(t),t.next()}(await df(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Tu.delete(t)}(await df(e),n)))}}function bf(e,t,n){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>{const i=await function(e){return af(e).then((e=>e.datastore))}(e);new tf(e.asyncQueue,i,n,t,r).run()})),r.promise}function If(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Zd(e,t)}(function(e,t){if(e instanceof Uint8Array)return Yd(e,t);if(e instanceof ArrayBuffer)return Yd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,lh(t));e.asyncQueue.enqueueAndForget((async()=>{zd(await hf(e),i,r)}))}function _f(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Zr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await uf(e),t)))}const Tf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(e,t,n){if(!n)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sf(e,t,n,r){if(!0===t&&!0===r)throw new ti(ei.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kf(e){if(!_i.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Af(e){if(_i.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Jr()}function Nf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ti(ei.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cf(e);throw new ti(ei.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Df(e,t){if(t<=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ti(ei.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ti(ei.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Sf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1,e instanceof ps?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ti(ei.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(e.options.projectId)}(e))}get app(){if(!this._app)throw new ti(ei.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ii;switch(e.type){case"gapi":const t=e.client;return Yr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ci(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ti(ei.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Tf.get(e);t&&(zr("ComponentProvider","Removing Datastore"),Tf.delete(e),t.terminate())}(this),Promise.resolve()}}function Of(e,t,n,r={}){var i;const s=(e=Nf(e,Rf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Wr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ti(ei.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(s)}e._authCredentials=new si(new ri(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pf(this.firestore,e,this._key)}}class Lf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Lf(this.firestore,e,this._query)}}class Mf extends Lf{constructor(e,t,n){super(e,t,po(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pf(this.firestore,null,new _i(e))}withConverter(e){return new Mf(this.firestore,e,this._path)}}function Ff(e,t,...n){if(e=(0,c.m9)(e),Ef("collection","path",t),e instanceof Rf){const r=wi.fromString(t,...n);return Af(r),new Mf(e,null,r)}{if(!(e instanceof Pf||e instanceof Mf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(wi.fromString(t,...n));return Af(r),new Mf(e.firestore,null,r)}}function Vf(e,t){if(e=Nf(e,Rf),Ef("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Lf(e,null,function(e){return new ho(wi.emptyPath(),e)}(t))}function Uf(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=di.I()),Ef("doc","path",t),e instanceof Rf){const r=wi.fromString(t,...n);return kf(r),new Pf(e,null,new _i(r))}{if(!(e instanceof Pf||e instanceof Mf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(wi.fromString(t,...n));return kf(r),new Pf(e.firestore,e instanceof Mf?e.converter:null,new _i(r))}}function Bf(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Pf||e instanceof Mf)&&(t instanceof Pf||t instanceof Mf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function jf(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Lf&&t instanceof Lf&&e.firestore===t.firestore&&_o(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qf{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new hh(this,"async_queue_retry"),this.Kc=()=>{const e=uh();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=uh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=uh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new ni;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(T){if(!Bi(T))throw T;zr("AsyncQueue","Operation failed with retryable error: "+T)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Hr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=zh.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Jr()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function $f(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Gf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ni,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=-1;class zf extends Rf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new qf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wf(this),this._firestoreClient.terminate()}}function Hf(e){return e._firestoreClient||Wf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new fs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new nf(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Qf(e,t){ip(e=Nf(e,zf));const n=Hf(e),r=e._freezeSettings(),i=new Jd;return Yf(n,i,new Wd(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Jf(e){ip(e=Nf(e,zf));const t=Hf(e),n=e._freezeSettings(),r=new Jd;return Yf(t,r,new Qd(r,n.cacheSizeBytes))}function Yf(e,t,n){const r=new ni;return e.asyncQueue.enqueue((async()=>{try{await rf(e,n),await sf(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===ei.FAILED_PRECONDITION||e.code===ei.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;Wr("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function Xf(e){if(e._initialized&&!e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ni;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Fi.V())return Promise.resolve();const t=e+"main";await Fi.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Cl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Zf(e){return function(e){const t=new ni;return e.asyncQueue.enqueueAndForget((async()=>Ed(await hf(e),t))),t.promise}(Hf(e=Nf(e,zf)))}function ep(e){return ff(Hf(e=Nf(e,zf)))}function tp(e){return pf(Hf(e=Nf(e,zf)))}function np(e,t){const n=Hf(e=Nf(e,zf)),r=new Gf;return If(n,e._databaseId,t,r),r}function rp(e,t){return _f(Hf(e=Nf(e,zf)),t).then((t=>t?new Lf(e,null,t.query):null))}function ip(e){if(e._initialized||e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ti(ei.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ii(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class op{constructor(e){this._byteString=e}static fromBase64String(e){try{return new op(ss.fromBase64String(e))}catch(e){throw new ti(ei.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new op(ss.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ti(ei.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ti(ei.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fi(this._lat,e._lat)||fi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=/^__.*__$/;class lp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new na(e,this.data,this.fieldMask,t,this.fieldTransforms):new ta(e,this.data,t,this.fieldTransforms)}}class hp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new na(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jr()}}class fp{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Op(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(dp(this.Zc)&&up.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class pp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||lh(e)}aa(e,t,n,r=!1){return new fp({Zc:e,methodName:t,ca:n,path:Ii.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function mp(e){const t=e._freezeSettings(),n=lh(e._databaseId);return new pp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gp(e,t,n,r,i,s={}){const o=e.aa(s.merge||s.mergeFields?2:0,t,n,i);Np("Data must be an object, but it was:",o,r);const a=Ap(r,o);let c,u;if(s.merge)c=new rs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Dp(t,r,n);if(!o.contains(i))throw new ti(ei.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Pp(e,i)||e.push(i)}c=new rs(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new lp(new Us(a),c,u)}class yp extends ap{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yp}}function vp(e,t,n){return new fp({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class wp extends ap{_toFieldTransform(e){return new Go(e.path,new Mo)}isEqual(e){return e instanceof wp}}class bp extends ap{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=vp(this,e,!0),n=this.ha.map((e=>kp(e,t))),r=new Fo(n);return new Go(e.path,r)}isEqual(e){return this===e}}class Ip extends ap{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=vp(this,e,!0),n=this.ha.map((e=>kp(e,t))),r=new Uo(n);return new Go(e.path,r)}isEqual(e){return this===e}}class _p extends ap{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new jo(e.wt,xo(e.wt,this.la));return new Go(e.path,t)}isEqual(e){return this===e}}function Tp(e,t,n,r){const i=e.aa(1,t,n);Np("Data must be an object, but it was:",i,r);const s=[],o=Us.empty();Qi(r,((e,r)=>{const a=Rp(t,e,n);r=(0,c.m9)(r);const u=i.ia(a);if(r instanceof yp)s.push(a);else{const e=kp(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new rs(s);return new hp(o,a,i.fieldTransforms)}function Ep(e,t,n,r,i,s){const o=e.aa(1,t,n),a=[Dp(t,r,n)],u=[i];if(s.length%2!=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Dp(t,s[c])),u.push(s[c+1]);const l=[],h=Us.empty();for(let f=a.length-1;f>=0;--f)if(!Pp(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.ia(e);if(t instanceof yp)l.push(e);else{const r=kp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new rs(l);return new hp(h,d,o.fieldTransforms)}function Sp(e,t,n,r=!1){return kp(n,e.aa(r?4:3,t))}function kp(e,t){if(Cp(e=(0,c.m9)(e)))return Np("Unsupported field value:",t,e),Ap(e,t);if(e instanceof ap)return function(e,t){if(!dp(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=kp(i,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xo(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=gi.fromDate(e);return{timestampValue:Ua(t.wt,n)}}if(e instanceof gi){const n=new gi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ua(t.wt,n)}}if(e instanceof cp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof op)return{bytesValue:Ba(t.wt,e._byteString)};if(e instanceof Pf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${Cf(e)}`)}(e,t)}function Ap(e,t){const n={};return Ji(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qi(e,((e,r)=>{const i=kp(r,t.ea(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Cp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof gi||e instanceof cp||e instanceof op||e instanceof Pf||e instanceof ap)}function Np(e,t,n){if(!Cp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Cf(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function Dp(e,t,n){if((t=(0,c.m9)(t))instanceof sp)return t._internalPath;if("string"==typeof t)return Rp(e,t);throw Op("Field path arguments must be of type string or ",e,!1,void 0,n)}const xp=new RegExp("[~\\*/\\[\\]]");function Rp(e,t,n){if(t.search(xp)>=0)throw Op(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sp(...t.split("."))._internalPath}catch(r){throw Op(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Op(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ti(ei.INVALID_ARGUMENT,a+e+c)}function Pp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Mp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Mp extends Lp{data(){return super.data()}}function Fp(e,t){return"string"==typeof t?Rp(e,t):t instanceof sp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Up extends Lp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Bp extends Up{data(e={}){return super.data(e)}}class jp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Vp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Bp(this._firestore,this._userDataWriter,n.key,n,new Vp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ti(ei.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Bp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Vp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Bp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Vp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:qp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jr()}}function $p(e,t){return e instanceof Up&&t instanceof Up?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof jp&&t instanceof jp&&e._firestore===t._firestore&&jf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ti(ei.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kp{}function zp(e,...t){for(const n of t)e=n._apply(e);return e}class Hp extends Kp{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=mp(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){cm(o,s);const t=[];for(const n of o)t.push(am(r,e,n));a={arrayValue:{values:t}}}else a=am(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||cm(o,s),a=Sp(n,t,o,"in"===s||"not-in"===s);const c=Ys.create(i,s,a);return function(e,t){if(t.ht()){const n=yo(e);if(null!==n&&!n.isEqual(t.field))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=go(e);null!==r&&um(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new Lf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Wp(e,t,n){const r=t,i=Fp("where",e);return new Hp(i,r,n)}class Qp extends Kp{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ao(t,n);return function(e,t){if(null===go(e)){const n=yo(e);null!==n&&um(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new Lf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ho(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Jp(e,t="asc"){const n=t,r=Fp("orderBy",e);return new Qp(r,n)}class Yp extends Kp{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new Lf(e.firestore,e.converter,Io(e._query,this.ma,this.ga))}}function Xp(e){return Df("limit",e),new Yp("limit",e,"F")}function Zp(e){return Df("limitToLast",e),new Yp("limitToLast",e,"L")}class em extends Kp{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=om(e,this.type,this.ya,this.pa);return new Lf(e.firestore,e.converter,function(e,t){return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function tm(...e){return new em("startAt",e,!0)}function nm(...e){return new em("startAfter",e,!1)}class rm extends Kp{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=om(e,this.type,this.ya,this.pa);return new Lf(e.firestore,e.converter,function(e,t){return new ho(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function im(...e){return new rm("endBefore",e,!1)}function sm(...e){return new rm("endAt",e,!0)}function om(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Lp)return function(e,t,n,r,i){if(!r)throw new ti(ei.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of wo(e))if(o.field.isKeyField())s.push(As(t,r.key));else{const e=r.data.field(o.field);if(ls(e))throw new ti(ei.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new oo(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=mp(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ti(ei.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ti(ei.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!vo(e)&&-1!==s.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(wi.fromString(s));if(!_i.isDocumentKey(n))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new _i(n);a.push(As(t,i))}else{const e=Sp(n,r,s);a.push(e)}}return new oo(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function am(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vo(t)&&-1!==n.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(wi.fromString(n));if(!_i.isDocumentKey(r))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return As(e,new _i(r))}if(n instanceof Pf)return As(e,n._key);throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cf(n)}.`)}function cm(e,t){if(!Array.isArray(e)||0===e.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function um(e,t,n){if(!n.isEqual(t))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{convertValue(e,t="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return cs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Jr()}}convertObject(e,t){const n={};return Qi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new cp(cs(e.latitude),cs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=hs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=as(e);return new gi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=wi.fromString(e);Yr(gc(n));const r=new ps(n.get(1),n.get(3)),i=new _i(n.popFirst(5));return r.isEqual(t)||Hr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class fm extends hm{constructor(e){super(),this.firestore=e}convertBytes(e){return new op(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=mp(e)}set(e,t,n){this._verifyNotCommitted();const r=mm(e,this._firestore),i=dm(r.converter,t,n),s=gp(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ho.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=mm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof sp?Ep(this._dataReader,"WriteBatch.update",i._key,t,n,r):Tp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Ho.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=mm(e,this._firestore);return this._mutations=this._mutations.concat(new oa(t._key,Ho.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ti(ei.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mm(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ti(ei.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e){e=Nf(e,Pf);const t=Nf(e.firestore,zf);return gf(Hf(t),e._key).then((n=>Dm(t,e,n)))}class ym extends hm{constructor(e){super(),this.firestore=e}convertBytes(e){return new op(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pf(this.firestore,null,t)}}function vm(e){e=Nf(e,Pf);const t=Nf(e.firestore,zf),n=Hf(t),r=new ym(t);return mf(n,e._key).then((n=>new Up(t,r,e._key,n,new Vp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function wm(e){e=Nf(e,Pf);const t=Nf(e.firestore,zf);return gf(Hf(t),e._key,{source:"server"}).then((n=>Dm(t,e,n)))}function bm(e){e=Nf(e,Lf);const t=Nf(e.firestore,zf),n=Hf(t),r=new ym(t);return Gp(e._query),vf(n,e._query).then((n=>new jp(t,r,e,n)))}function Im(e){e=Nf(e,Lf);const t=Nf(e.firestore,zf),n=Hf(t),r=new ym(t);return yf(n,e._query).then((n=>new jp(t,r,e,n)))}function _m(e){e=Nf(e,Lf);const t=Nf(e.firestore,zf),n=Hf(t),r=new ym(t);return vf(n,e._query,{source:"server"}).then((n=>new jp(t,r,e,n)))}function Tm(e,t,n){e=Nf(e,Pf);const r=Nf(e.firestore,zf),i=dm(e.converter,t,n);return Nm(r,[gp(mp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ho.none())])}function Em(e,t,n,...r){e=Nf(e,Pf);const i=Nf(e.firestore,zf),s=mp(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof sp?Ep(s,"updateDoc",e._key,t,n,r):Tp(s,"updateDoc",e._key,t),Nm(i,[o.toMutation(e._key,Ho.exists(!0))])}function Sm(e){return Nm(Nf(e.firestore,zf),[new oa(e._key,Ho.none())])}function km(e,t){const n=Nf(e.firestore,zf),r=Uf(e),i=dm(e.converter,t);return Nm(n,[gp(mp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ho.exists(!1))]).then((()=>r))}function Am(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||$f(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if($f(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Pf)l=Nf(e.firestore,zf),h=po(e._key.path),u={next:n=>{t[o]&&t[o](Dm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Nf(e,Lf);l=Nf(n.firestore,zf),h=n._query;const r=new ym(l);u={next:e=>{t[o]&&t[o](new jp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Gp(e._query)}return function(e,t,n,r){const i=new Xd(r),s=new id(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Zh(await df(e),s))),()=>{i.Tc(),e.asyncQueue.enqueueAndForget((async()=>ed(await df(e),s)))}}(Hf(l),h,a,u)}function Cm(e,t){return wf(Hf(e=Nf(e,zf)),$f(t)?t:{next:t})}function Nm(e,t){return function(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>vd(await hf(e),t,n))),n.promise}(Hf(e),t)}function Dm(e,t,n){const r=n.docs.get(t._key),i=new ym(e);return new Up(e,i,t._key,r,new Vp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=mp(e)}get(e){const t=mm(e,this._firestore),n=new fm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Jr();const r=e[0];if(r.isFoundDocument())return new Lp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Lp(this._firestore,n,t._key,null,t.converter);throw Jr()}))}set(e,t,n){const r=mm(e,this._firestore),i=dm(r.converter,t,n),s=gp(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=mm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof sp?Ep(this._dataReader,"Transaction.update",i._key,t,n,r):Tp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=mm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=mm(e,this._firestore),n=new ym(this._firestore);return super.get(e).then((e=>new Up(this._firestore,n,t._key,e._document,new Vp(!1,!1),t.converter)))}}function Rm(e,t,n){e=Nf(e,zf);const r=Object.assign(Object.assign({},lm),n);return function(e){if(e.maxAttempts<1)throw new ti(ei.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),bf(Hf(e),(n=>t(new xm(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){return new yp("deleteField")}function Pm(){return new wp("serverTimestamp")}function Lm(...e){return new bp("arrayUnion",e)}function Mm(...e){return new Ip("arrayRemove",e)}function Fm(e){return new _p("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){qr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new zf(r,new oi(e.getProvider("auth-internal")),new li(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,s.registerVersion)(Br,"3.4.14",e),(0,s.registerVersion)(Br,"3.4.14","esm2017")}();const Vm="@firebase/firestore-compat",Um="0.1.23";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ti("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){if("undefined"===typeof Uint8Array)throw new ti("unimplemented","Uint8Arrays are not available in this environment.")}function qm(){if(!is())throw new ti("unimplemented","Blobs are unavailable in Firestore in this environment.")}class $m{constructor(e){this._delegate=e}static fromBase64String(e){return qm(),new $m(op.fromBase64String(e))}static fromUint8Array(e){return jm(),new $m(op.fromUint8Array(e))}toBase64(){return qm(),this._delegate.toBase64()}toUint8Array(){return jm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e){return Km(e,["next","error","complete"])}function Km(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{enableIndexedDbPersistence(e,t){return Qf(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Jf(e._delegate)}clearIndexedDbPersistence(e){return Xf(e._delegate)}}class Hm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof ps||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Wr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Of(this._delegate,e,t,n)}enableNetwork(){return ep(this._delegate)}disableNetwork(){return tp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Sf("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Zf(this._delegate)}onSnapshotsInSync(e){return Cm(this._delegate,e)}get app(){if(!this._appCompat)throw new ti("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new cg(this,Ff(this._delegate,e))}catch(t){throw eg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Zm(this,Uf(this._delegate,e))}catch(t){throw eg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new sg(this,Vf(this._delegate,e))}catch(t){throw eg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Rm(this._delegate,(t=>e(new Jm(this,t))))}batch(){return Hf(this._delegate),new Ym(new pm(this._delegate,(e=>Nm(this._delegate,e))))}loadBundle(e){return np(this._delegate,e)}namedQuery(e){return rp(this._delegate,e).then((e=>e?new sg(this,e):null))}}class Wm extends hm{constructor(e){super(),this.firestore=e}convertBytes(e){return new $m(new op(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Zm.forKey(t,this.firestore,null)}}function Qm(e){Kr(e)}class Jm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Wm(e)}get(e){const t=ug(e);return this._delegate.get(t).then((e=>new rg(this._firestore,new Up(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=ug(e);return n?(Bm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ug(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ug(e);return this._delegate.delete(t),this}}class Ym{constructor(e){this._delegate=e}set(e,t,n){const r=ug(e);return n?(Bm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ug(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ug(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Xm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Bp(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ig(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Xm.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Xm(e,new Wm(e),t),r.set(t,i)),i}}Xm.INSTANCES=new WeakMap;class Zm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Wm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ti("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Zm(t,new Pf(t._delegate,n,new _i(e)))}static forKey(e,t,n){return new Zm(t,new Pf(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new cg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new cg(this.firestore,Ff(this._delegate,e))}catch(t){throw eg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Pf&&Bf(this._delegate,e)}set(e,t){t=Bm("DocumentReference.set",t);try{return t?Tm(this._delegate,e,t):Tm(this._delegate,e)}catch(n){throw eg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Em(this._delegate,e):Em(this._delegate,e,t,...n)}catch(r){throw eg(r,"updateDoc()","DocumentReference.update()")}}delete(){return Sm(this._delegate)}onSnapshot(...e){const t=tg(e),n=ng(e,(e=>new rg(this.firestore,new Up(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Am(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?vm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?wm(this._delegate):gm(this._delegate),t.then((e=>new rg(this.firestore,new Up(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Zm(this.firestore,e?this._delegate.withConverter(Xm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function eg(e,t,n){return e.message=e.message.replace(t,n),e}function tg(e){for(const t of e)if("object"===typeof t&&!Gm(t))return t;return{}}function ng(e,t){var n,r;let i;return i=Gm(e[0])?e[0]:Gm(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class rg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Zm(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return $p(this._delegate,e._delegate)}}class ig extends rg{data(e){const t=this._delegate.data(e);return Xr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class sg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Wm(e)}where(e,t,n){try{return new sg(this.firestore,zp(this._delegate,Wp(e,t,n)))}catch(r){throw eg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new sg(this.firestore,zp(this._delegate,Jp(e,t)))}catch(n){throw eg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new sg(this.firestore,zp(this._delegate,Xp(e)))}catch(t){throw eg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new sg(this.firestore,zp(this._delegate,Zp(e)))}catch(t){throw eg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new sg(this.firestore,zp(this._delegate,tm(...e)))}catch(t){throw eg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new sg(this.firestore,zp(this._delegate,nm(...e)))}catch(t){throw eg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new sg(this.firestore,zp(this._delegate,im(...e)))}catch(t){throw eg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new sg(this.firestore,zp(this._delegate,sm(...e)))}catch(t){throw eg(t,"endAt()","Query.endAt()")}}isEqual(e){return jf(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Im(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?_m(this._delegate):bm(this._delegate),t.then((e=>new ag(this.firestore,new jp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=tg(e),n=ng(e,(e=>new ag(this.firestore,new jp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Am(this._delegate,t,n)}withConverter(e){return new sg(this.firestore,e?this._delegate.withConverter(Xm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class og{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ig(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ag{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new sg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new ig(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new og(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new ig(this._firestore,n))}))}isEqual(e){return $p(this._delegate,e._delegate)}}class cg extends sg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Zm(this.firestore,e):null}doc(e){try{return new Zm(this.firestore,void 0===e?Uf(this._delegate):Uf(this._delegate,e))}catch(t){throw eg(t,"doc()","CollectionReference.doc()")}}add(e){return km(this._delegate,e).then((e=>new Zm(this.firestore,e)))}isEqual(e){return Bf(this._delegate,e._delegate)}withConverter(e){return new cg(this.firestore,e?this._delegate.withConverter(Xm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ug(e){return Nf(e,Pf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(...e){this._delegate=new sp(...e)}static documentId(){return new lg(Ii.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof sp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this._delegate=e}static serverTimestamp(){const e=Pm();return e._methodName="FieldValue.serverTimestamp",new hg(e)}static delete(){const e=Om();return e._methodName="FieldValue.delete",new hg(e)}static arrayUnion(...e){const t=Lm(...e);return t._methodName="FieldValue.arrayUnion",new hg(t)}static arrayRemove(...e){const t=Mm(...e);return t._methodName="FieldValue.arrayRemove",new hg(t)}static increment(e){const t=Fm(e);return t._methodName="FieldValue.increment",new hg(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={Firestore:Hm,GeoPoint:cp,Timestamp:gi,Blob:$m,Transaction:Jm,WriteBatch:Ym,DocumentReference:Zm,DocumentSnapshot:rg,Query:sg,QueryDocumentSnapshot:ig,QuerySnapshot:ag,CollectionReference:cg,FieldPath:lg,FieldValue:hg,setLogLevel:Qm,CACHE_SIZE_UNLIMITED:Kf};function fg(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},dg)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(e){fg(e,((e,t)=>new Hm(e,t,new zm))),e.registerVersion(Vm,Um)}pg(i.Z)},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},180:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(444),i=n(463),s=n(816),o=n(333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.31";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},816:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return _e},getApp:function(){return be},getApps:function(){return Ie},initializeApp:function(){return we},onLog:function(){return Ee},registerVersion:function(){return Te},setLogLevel:function(){return Se}});var r=n(463),i=n(333),s=n(444);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(_(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),_(h.get(this))}:function(...t){return _(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),_(r)}}function I(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function _(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=I(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=_(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(_(o.result),e.oldVersion,e.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(D(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function D(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",R="0.7.30",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",G="@firebase/functions-compat",K="@firebase/installations",z="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.9.2",se="[DEFAULT]",oe={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[G]:"fire-fn-compat",[K]:"fire-iid",[z]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw ge.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw ge.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ce.values())a.addComponent(r);const c=new ye(e,n,a);return ae.set(i,c),c}function be(e=se){const t=ae.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function Ie(){return Array.from(ae.values())}async function _e(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Te(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ae=1,Ce="firebase-heartbeat-store";let Ne=null;function De(){return Ne||(Ne=E(ke,Ae,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ne}async function xe(e){var t;try{const t=await De();return t.transaction(Ce).objectStore(Ce).get(Oe(e))}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});O.warn(e.message)}}}async function Re(e,t){var n;try{const n=await De(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);return await i.put(t,Oe(e)),r.done}catch(r){if(r instanceof s.ZR)O.warn(r.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){he(new r.wA("platform-logger",(e=>new N(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Te(x,R,e),Te(x,R,"esm2017"),Te("fire-js","")}je("")},463:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.bfbf499e.js.map