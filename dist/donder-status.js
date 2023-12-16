/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(o,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a,l;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=h){var o,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,o,n;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p,v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null===(a=globalThis.reactiveElementPolyfillSupport)||void 0===a||a.call(globalThis,{ReactiveElement:u}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,$=`<${_}>`,y=document,b=(t="")=>y.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,x=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,T=/"/g,P=/^(?:script|style|textarea)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),R=new WeakMap,N=y.createTreeWalker(y,129,null,!1),M=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===E?"!--"===l[1]?r=S:void 0!==l[1]?r=x:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=n?n:E,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?T:k):r===T||r===k?r=C:r===S||r===x?r=E:(r=C,n=void 0);const h=r===C&&t[e+1].startsWith("/>")?" ":"";s+=r===E?i+$:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+f+h):i+f+(-2===d?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,o]};class z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,d]=M(t,e);if(this.el=z.createElement(l,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=N.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?V:"@"===e[1]?B:q})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(P.test(o.tagName)){const t=o.textContent.split(f),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],b()),N.nextNode(),a.push({type:2,index:++n});o.append(t[e],b())}}}else if(8===o.nodeType)if(o.data===_)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(f,t+1));)a.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,o){var n,s,r,a;if(e===H)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const d=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,o)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);N.currentNode=n;let s=N.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new j(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new W(s,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=N.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,o){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),w(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==U&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=z.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new D(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new z(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new j(this.A(b()),this.A(b()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,o,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=L(this,t,e,0),s=!w(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=L(this,o[i+r],e,r),a===H&&(a=this._$AH[r]),s||(s=!w(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.k(t)}k(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends q{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===U?void 0:t}}class V extends q{constructor(){super(...arguments),this.type=4}k(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:U)===H)return;const o=this._$AH,n=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==U&&(o===U||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,J,K;null===(p=globalThis.litHtmlPolyfillSupport)||void 0===p||p.call(globalThis,z,j),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.0");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new j(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Z}),null===(J=globalThis.litElementPolyfillSupport)||void 0===J||J.call(globalThis,{LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function G(t){return Y({...t,state:!0})}var Q="[^\\s]+";function tt(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var et=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),n=o.indexOf(e.toLowerCase());return n>-1?n:null}};function it(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var s=n[o];for(var r in s)t[r]=s[r]}return t}var ot=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],nt=["January","February","March","April","May","June","July","August","September","October","November","December"],st=tt(nt,3),rt={dayNamesShort:tt(ot,3),dayNames:ot,monthNamesShort:st,monthNames:nt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},at=(it({},rt),function(t){return+t-1}),lt=[null,"[1-9]\\d?"],dt=[null,Q],ct=["isPm",Q,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],ht=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];et("monthNamesShort"),et("monthNames");var ut,pt;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(pt||(pt={}));var vt=["closed","locked","off"],gt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},mt=function(t){gt(window,"haptic",t)},ft=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(mt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&gt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,vt.includes(t.states[e].state))}(e,i.entity),mt("success"));break;case"call-service":if(!o.service)return void mt("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data),mt("success");break;case"fire-dom-event":gt(t,"ll-custom",o)}};function _t(t){return void 0!==t&&"none"!==t.action}const $t={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let yt=class extends Z{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_warning(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_warning)||!1}get _show_error(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_error)||!1}get _tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.tap_action)||{action:"more-info"}}get _hold_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hold_action)||{action:"none"}}get _double_tap_action(){var t;return(null===(t=this._config)||void 0===t?void 0:t.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return O``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter((t=>"sun"===t.substr(0,t.indexOf("."))));return O`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${$t.required.icon}`}></ha-icon>
            <div class="title">${$t.required.name}</div>
          </div>
          <div class="secondary">${$t.required.secondary}</div>
        </div>
        ${$t.required.show?O`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map((t=>O`
                        <paper-item>${t}</paper-item>
                      `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${$t.actions.icon}`}></ha-icon>
            <div class="title">${$t.actions.name}</div>
          </div>
          <div class="secondary">${$t.actions.secondary}</div>
        </div>
        ${$t.actions.show?O`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${$t.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${$t.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.tap.secondary}</div>
                </div>
                ${$t.actions.options.tap.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${$t.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${$t.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.hold.secondary}</div>
                </div>
                ${$t.actions.options.hold.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${$t.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${$t.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.double_tap.secondary}</div>
                </div>
                ${$t.actions.options.double_tap.show?O`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${$t.appearance.icon}`}></ha-icon>
            <div class="title">${$t.appearance.name}</div>
          </div>
          <div class="secondary">${$t.appearance.secondary}</div>
        </div>
        ${$t.appearance.show?O`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_warning}
                    .configValue=${"show_warning"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                  <ha-switch
                    .checked=${!1!==this._show_error}
                    .configValue=${"show_error"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(t){this._toggleThing(t,$t.actions.options)}_toggleOption(t){this._toggleThing(t,$t)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});gt(this,"config-changed",{config:this._config})}}static get styles(){return s`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([Y({attribute:!1})],yt.prototype,"hass",void 0),t([G()],yt.prototype,"_config",void 0),t([G()],yt.prototype,"_toggle",void 0),t([G()],yt.prototype,"_helpers",void 0),yt=t([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e))("donder-status-editor")],yt);const bt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class wt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:bt?"100px":"50px",height:bt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?gt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,gt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,gt(t,"action",{action:"double_tap"})):gt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-donder-status",wt);const At=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-donder-status"))return t.querySelector("action-handler-donder-status");const e=document.createElement("action-handler-donder-status");return t.appendChild(e),e})();i&&i.bind(t,e)},Et=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return At(t.element,e),H}render(t){}});console.info("%c  Donder Status \n%c  version: 1.0.2  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"donder-status",name:"Donder Status",description:"A template custom card for you to create something awesome"});class St extends Z{constructor(){super(...arguments),this.calculateTotalConsumption=t=>{var e,i;const o={W:0,kW:0};for(let n=0;n<=t.length-1;n++){const s=null===(e=this.hass.states[t[n]])||void 0===e?void 0:e.state,r=null===(i=this.hass.states[t[n]])||void 0===i?void 0:i.attributes.unit_of_measurement;s&&(o[r]+=parseFloat(s))}return o.W+o.kW/1e3}}static async getConfigElement(){return document.createElement("donder-status-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error("Invalid configuration");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Boilerplate"},t)}shouldUpdate(t){return!!this.config&&this.hasConfigOrEntityChanged(this,t,!1)}hasConfigOrEntityChanged(t,e,i){if(e.has("config")||i)return!0;if(t.config.all_consumption_entities){const i=e.get("hass");if(i&&t.config.all_consumption_entities){let e=!1;for(let o=0;o<=t.config.all_consumption_entities.length-1;o++){const n=t.config.all_consumption_entities[o];if(i.states[n]!==t.hass.states[n]){e=!0;break}}return e}return!0}return!1}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),ft(t,e,i,n)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return O`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),O`
      ${e}
    `}static get styles(){return s`
      /* REPLACE "stats-widget" with actual widget name */
      .type-custom-stats-widget {
        height: 100%;
        width: 100%;
      }
      .donder-widget {
        background-color: transparent;
        color: var(--text-primary-color);
        padding: 15px 22px 22px;
        box-sizing: border-box;
        text-align: center;
        border-radius: var(--ha-card-border-radius)
      }
      .donder-stat-wrapper {
        position: relative;
      }
      .donder-outside {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      .donder-mid, .donder-inside {
        position: absolute;
        width: 100%;
        top: 0px;
        box-sizing: border-box;
      }
      .donder-mid {
        padding: 60px;
      }
      .donder-inside {
        padding: 75px;
      }
      .donder-inside > img {
        animation: innerspin 60s linear infinite;
      }
      .donder-outside > img {
        animation: outterspin 180s linear infinite;
      }
      .donder-stats-values {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding-bottom: 40%; */
        box-sizing: border-box;
      }
      .donder-stats-values .donder-stats-balance {
        font-size: 1.5em;
        margin-bottom: 5px;
        color: #49aae3;
      }
      .donder-stats-values .donder-stats-balance.negative {
        color: red;
      }
      .donder-stats-values .donder-stats-balance.positive {
        color: #49aae3;
      }
      .donder-stats-values .donder-stats-consumption {
        font-size: 2em;
        font-weight: 600;        
      }
      .donder-stats-values .donder-stats-temperature {    
        margin-top: 5px;
        opacity: .5;
        font-size: 1.5em;
      }
      @media (max-width: 600px) {
        .donder-stats-values .donder-stats-balance,
        .donder-stats-values .donder-stats-consumption {
          font-size: 6vw;
        } 
      }

      @keyframes innerspin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      @keyframes outterspin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
    `}render(){if(this.config.show_warning)return this._showWarning("warning message");if(this.config.show_error)return this._showError("error message");const t=this.calculateTotalConsumption(this.config.all_consumption_entities),e=0-t;return O`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${Et({hasHold:_t(this.config.hold_action),hasDoubleClick:_t(this.config.double_tap_action)})}
        tabindex="0" 
      >
        <div class='donder-widget'>
          <div class="donder-stat-wrapper">
            <div class="donder-outside">
              <img src="/local/donder/assets/jarvis_outside.svg" />
            </div>
            <div class="donder-mid">
              <img src="/local/donder/assets/jarvis_mid.svg" />
            </div>
            <div class="donder-inside">
              <img src="/local/donder/assets/jarvis_inside.svg" />
            </div>
            <div class="donder-stats-values">
              <div class=${"donder-stats-balance "+(e<0?"negative":"positive")}></0>${t>=1e3?`${(t/1e3).toFixed(1)} kW`:`${t.toFixed(1)} W`}</div>
              <div class="donder-stats-consumption">${t>=1e3?`${(t/1e3).toFixed(1)} kW`:`${t.toFixed(1)} W`}</div>
            </div>
          </div>  
        </div>
      </ha-card>
    `}}t([Y({attribute:!1})],St.prototype,"hass",void 0),t([G()],St.prototype,"config",void 0),customElements.define("donder-status",St);export{St as BoilerplateCard};
