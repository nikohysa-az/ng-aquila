import{b as ge,c as Q,e as w}from"./chunk-ULYGIILG.js";import{D as be,d as m}from"./chunk-ZT3EPJ7I.js";import{B as O,C as ce,Cb as P,G as ae,M as de,Oa as me,Q as I,Qa as _e,Sa as pe,Sc as F,T as ue,U as k,a as V,ba as R,ca as he,ea as x,ga as le,k as ne,la as u,m as S,ma as g,mb as N,n as h,q as oe,qa as A,ra as a,s as re,sa as G,ub as l,va as v,vc as $,wa as C,ya as fe,yb as j,zb as f}from"./chunk-KKDUGSQP.js";var Y;try{Y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Y=!1}var p=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?be(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(i){return new(i||e)(a(_e))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Wt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({});let s=e;return s})(),T,ve=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ht(){if(T)return T;if(typeof document!="object"||!document)return T=new Set(ve),T;let s=document.createElement("input");return T=new Set(ve.filter(e=>(s.setAttribute("type",e),s.type===e))),T}var L;function Ue(){if(L==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>L=!0}))}finally{L=L||!1}return L}function q(s){return Ue()?s:!!s.capture}var B,y;function Zt(){if(y==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return y=!1,y;if("scrollBehavior"in document.documentElement.style)y=!0;else{let s=Element.prototype.scrollTo;s?y=!/\{\s*\[native code\]\s*\}/.test(s.toString()):y=!1}}return y}function Vt(){if(typeof document!="object"||!document)return 0;if(B==null){let s=document.createElement("div"),e=s.style;s.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let o=document.createElement("div"),t=o.style;t.width="2px",t.height="1px",s.appendChild(o),document.body.appendChild(s),B=0,s.scrollLeft===0&&(s.scrollLeft=1,B=s.scrollLeft===0?1:2),s.remove()}return B}var X;function Ke(){if(X==null){let s=typeof document<"u"?document.head:null;X=!!(s&&(s.createShadowRoot||s.attachShadow))}return X}function ye(s){if(Ke()){let e=s.getRootNode?s.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Ee(){let s=typeof document<"u"&&document?document.activeElement:null;for(;s&&s.shadowRoot;){let e=s.shadowRoot.activeElement;if(e===s)break;s=e}return s}function M(s){return s.composedPath?s.composedPath()[0]:s.target}function Gt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ae(s,...e){return e.length?e.some(o=>s[o]):s.altKey||s.shiftKey||s.ctrlKey||s.metaKey}var we=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),We=(()=>{let e=class e{constructor(t){this._mutationObserverFactory=t,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=w(t);return new S(n=>{let c=this._observeElement(i).subscribe(n);return()=>{c.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new h,n=this._mutationObserverFactory.create(r=>i.next(r));n&&n.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:n,stream:i,count:1})}return this._observedElements.get(t).stream}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:n}=this._observedElements.get(t);i&&i.disconnect(),n.complete(),this._observedElements.delete(t)}}};e.\u0275fac=function(i){return new(i||e)(a(we))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),si=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(t){this._debounce=ge(t),this._subscribe()}constructor(t,i,n){this._contentObserver=t,this._elementRef=i,this._ngZone=n,this.event=new j,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?t.pipe(I(this.debounce)):t).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(l(We),l(N),l(f))},e.\u0275dir=C({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled",F],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],features:[P]});let s=e;return s})(),Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({providers:[we]});let s=e;return s})();var Me=new Set,E,He=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ve}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Ze(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(a(p),a(pe,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function Ze(s,e){if(!Me.has(s))try{E||(E=document.createElement("style"),e&&(E.nonce=e),E.setAttribute("type","text/css"),document.head.appendChild(E)),E.sheet&&(E.sheet.insertRule(`@media ${s} {body{ }}`,0),Me.add(s))}catch(o){console.error(o)}}function Ve(s){return{matches:s==="all"||s==="",media:s,addListener:()=>{},removeListener:()=>{}}}var Oe=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new h}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return De(Q(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=De(Q(t)).map(c=>this._registerQuery(c).observable),r=ce(n);return r=ae(r.pipe(k(1)),r.pipe(R(1),I(0))),r.pipe(O(c=>{let d={matches:!1,breakpoints:{}};return c.forEach(({matches:_,query:b})=>{d.matches=d.matches||_,d.breakpoints[b]=_}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new S(c=>{let d=_=>this._zone.run(()=>c.next(_));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(he(i),O(({matches:c})=>({query:t,matches:c})),x(this._destroySubject)),mql:i};return this._queries.set(t,r),r}};e.\u0275fac=function(i){return new(i||e)(a(He),a(f))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function De(s){return s.map(e=>e.split(",")).reduce((e,o)=>e.concat(o)).map(e=>e.trim())}var Re=" ";function ut(s,e,o){let t=W(s,e);t.some(i=>i.trim()==o.trim())||(t.push(o.trim()),s.setAttribute(e,t.join(Re)))}function ht(s,e,o){let i=W(s,e).filter(n=>n!=o.trim());i.length?s.setAttribute(e,i.join(Re)):s.removeAttribute(e)}function W(s,e){return(s.getAttribute(e)||"").match(/\S+/g)||[]}var xe="cdk-describedby-message",U="cdk-describedby-host",te=0,Ni=(()=>{let e=class e{constructor(t,i){this._platform=i,this._messageRegistry=new Map,this._messagesContainer=null,this._id=`${te++}`,this._document=t,this._id=G(me)+"-"+te++}describe(t,i,n){if(!this._canBeDescribed(t,i))return;let r=J(i,n);typeof i!="string"?(Ce(i,this._id),this._messageRegistry.set(r,{messageElement:i,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(i,n),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,i,n){if(!i||!this._isElementNode(t))return;let r=J(i,n);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof i=="string"){let c=this._messageRegistry.get(r);c&&c.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${U}="${this._id}"]`);for(let i=0;i<t.length;i++)this._removeCdkDescribedByReferenceIds(t[i]),t[i].removeAttribute(U);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,i){let n=this._document.createElement("div");Ce(n,this._id),n.textContent=t,i&&n.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(J(t,i),{messageElement:n,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<i.length;r++)i[r].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(t),n.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(t){let i=W(t,"aria-describedby").filter(n=>n.indexOf(xe)!=0);t.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(t,i){let n=this._messageRegistry.get(i);ut(t,"aria-describedby",n.messageElement.id),t.setAttribute(U,this._id),n.referenceCount++}_removeMessageReference(t,i){let n=this._messageRegistry.get(i);n.referenceCount--,ht(t,"aria-describedby",n.messageElement.id),t.removeAttribute(U)}_isElementDescribedByMessage(t,i){let n=W(t,"aria-describedby"),r=this._messageRegistry.get(i),c=r&&r.messageElement.id;return!!c&&n.indexOf(c)!=-1}_canBeDescribed(t,i){if(!this._isElementNode(t))return!1;if(i&&typeof i=="object")return!0;let n=i==null?"":`${i}`.trim(),r=t.getAttribute("aria-label");return n?!r||r.trim()!==n:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}};e.\u0275fac=function(i){return new(i||e)(a(m),a(p))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function J(s,e){return typeof s=="string"?`${e||""}/${s}`:s}function Ce(s,e){s.id||(s.id=`${xe}-${e}-${te++}`)}var H=class{constructor(e){this._items=e,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new h,this._typeaheadSubscription=ne.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=o=>o.disabled,this._pressedLetters=[],this.tabOut=new h,this.change=new h,e instanceof $&&(this._itemChangesSubscription=e.changes.subscribe(o=>{if(this._activeItem){let i=o.toArray().indexOf(this._activeItem);i>-1&&i!==this._activeItemIndex&&(this._activeItemIndex=i)}}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(le(o=>this._pressedLetters.push(o)),I(e),de(()=>this._pressedLetters.length>0),O(()=>this._pressedLetters.join(""))).subscribe(o=>{let t=this._getItemsArray();for(let i=1;i<t.length+1;i++){let n=(this._activeItemIndex+i)%t.length,r=t[n];if(!this._skipPredicateFn(r)&&r.getLabel().toUpperCase().trim().indexOf(o)===0){this.setActiveItem(n);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,o=10){return this._pageUpAndDown={enabled:e,delta:o},this}setActiveItem(e){let o=this._activeItem;this.updateActiveItem(e),this._activeItem!==o&&this.change.next(this._activeItemIndex)}onKeydown(e){let o=e.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(n=>!e[n]||this._allowedModifierKeys.indexOf(n)>-1);switch(o){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let n=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(n>0?n:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let n=this._activeItemIndex+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(n<r?n:r-1,-1);break}else return;default:(i||Ae(e,"shiftKey"))&&(e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(o>=65&&o<=90||o>=48&&o<=57)&&this._letterKeyStream.next(String.fromCharCode(o)));return}this._pressedLetters=[],e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let o=this._getItemsArray(),t=typeof e=="number"?e:o.indexOf(e),i=o[t];this._activeItem=i??null,this._activeItemIndex=t}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let o=this._getItemsArray();for(let t=1;t<=o.length;t++){let i=(this._activeItemIndex+e*t+o.length)%o.length,n=o[i];if(!this._skipPredicateFn(n)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,o){let t=this._getItemsArray();if(t[e]){for(;this._skipPredicateFn(t[e]);)if(e+=o,!t[e])return;this.setActiveItem(e)}}_getItemsArray(){return this._items instanceof $?this._items.toArray():this._items}},Ne=class extends H{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}},Fe=class extends H{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var je=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return ft(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=lt(Et(t));if(i&&(Le(i)===-1||!this.isVisible(i)))return!1;let n=t.nodeName.toLowerCase(),r=Le(t);return t.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!vt(t)?!1:n==="audio"?t.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return yt(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(i){return new(i||e)(a(p))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function lt(s){try{return s.frameElement}catch{return null}}function ft(s){return!!(s.offsetWidth||s.offsetHeight||typeof s.getClientRects=="function"&&s.getClientRects().length)}function mt(s){let e=s.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function _t(s){return bt(s)&&s.type=="hidden"}function pt(s){return gt(s)&&s.hasAttribute("href")}function bt(s){return s.nodeName.toLowerCase()=="input"}function gt(s){return s.nodeName.toLowerCase()=="a"}function Pe(s){if(!s.hasAttribute("tabindex")||s.tabIndex===void 0)return!1;let e=s.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Le(s){if(!Pe(s))return null;let e=parseInt(s.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function vt(s){let e=s.nodeName.toLowerCase(),o=e==="input"&&s.type;return o==="text"||o==="password"||e==="select"||e==="textarea"}function yt(s){return _t(s)?!1:mt(s)||pt(s)||s.hasAttribute("contenteditable")||Pe(s)}function Et(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}var Z=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,o,t,i,n=!1){this._element=e,this._checker=o,this._ngZone=t,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,n||this.attachAnchors()}destroy(){let e=this._startAnchor,o=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),o&&(o.removeEventListener("focus",this.endAnchorListener),o.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let o=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?o.length?o[0]:this._getFirstTabbableElement(this._element):o.length?o[o.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let o=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(o){if(!this._checker.isFocusable(o)){let t=this._getFirstTabbableElement(o);return t?.focus(e),!!t}return o.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let o=this._getRegionBoundary("start");return o&&o.focus(e),!!o}focusLastTabbableElement(e){let o=this._getRegionBoundary("end");return o&&o.focus(e),!!o}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=0;t<o.length;t++){let i=o[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(o[t]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=o.length-1;t>=0;t--){let i=o[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(o[t]):null;if(i)return i}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,o){e?o.setAttribute("tabindex","0"):o.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(k(1)).subscribe(e)}},It=(()=>{let e=class e{constructor(t,i,n){this._checker=t,this._ngZone=i,this._document=n}create(t,i=!1){return new Z(t,this._checker,this._ngZone,this._document,i)}};e.\u0275fac=function(i){return new(i||e)(a(je),a(f),a(m))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Fi=(()=>{let e=class e{get enabled(){return this.focusTrap.enabled}set enabled(t){this.focusTrap.enabled=t}constructor(t,i,n){this._elementRef=t,this._focusTrapFactory=i,this._previouslyFocusedElement=null,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Ee(),this.focusTrap.focusInitialElementWhenReady()}};e.\u0275fac=function(i){return new(i||e)(l(N),l(It),l(m))},e.\u0275dir=C({type:e,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:["cdkTrapFocus","enabled",F],autoCapture:["cdkTrapFocusAutoCapture","autoCapture",F]},exportAs:["cdkTrapFocus"],features:[P,fe]});let s=e;return s})(),ie=class extends Z{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}constructor(e,o,t,i,n,r,c){super(e,o,t,i,c.defer),this._focusTrapManager=n,this._inertStrategy=r,this._focusTrapManager.register(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}},At=new A("FOCUS_TRAP_INERT_STRATEGY"),se=class{constructor(){this._listener=null}preventFocus(e){this._listener&&e._document.removeEventListener("focus",this._listener,!0),this._listener=o=>this._trapFocus(e,o),e._ngZone.runOutsideAngular(()=>{e._document.addEventListener("focus",this._listener,!0)})}allowFocus(e){this._listener&&(e._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(e,o){let t=o.target,i=e._element;t&&!i.contains(t)&&!t.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{e.enabled&&!i.contains(e._document.activeElement)&&e.focusFirstTabbableElement()})}},wt=(()=>{let e=class e{constructor(){this._focusTrapStack=[]}register(t){this._focusTrapStack=this._focusTrapStack.filter(n=>n!==t);let i=this._focusTrapStack;i.length&&i[i.length-1]._disable(),i.push(t),t._enable()}deregister(t){t._disable();let i=this._focusTrapStack,n=i.indexOf(t);n!==-1&&(i.splice(n,1),i.length&&i[i.length-1]._enable())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Li=(()=>{let e=class e{constructor(t,i,n,r,c){this._checker=t,this._ngZone=i,this._focusTrapManager=n,this._document=r,this._inertStrategy=c||new se}create(t,i={defer:!1}){let n;return typeof i=="boolean"?n={defer:i}:n=i,new ie(t,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,n)}};e.\u0275fac=function(i){return new(i||e)(a(je),a(f),a(wt),a(m),a(At,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function Tt(s){return s.buttons===0||s.detail===0}function Mt(s){let e=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Dt=new A("cdk-input-modality-detector-options"),Ot={ignoreKeys:[18,17,224,91,16]},Be=650,D=q({passive:!0,capture:!0}),Ct=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,i,n,r){this._platform=t,this._mostRecentTarget=null,this._modality=new oe(null),this._lastTouchMs=0,this._onKeydown=c=>{this._options?.ignoreKeys?.some(d=>d===c.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=M(c))},this._onMousedown=c=>{Date.now()-this._lastTouchMs<Be||(this._modality.next(Tt(c)?"keyboard":"mouse"),this._mostRecentTarget=M(c))},this._onTouchstart=c=>{if(Mt(c)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=M(c)},this._options=V(V({},Ot),r),this.modalityDetected=this._modality.pipe(R(1)),this.modalityChanged=this.modalityDetected.pipe(ue()),t.isBrowser&&i.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,D),n.addEventListener("mousedown",this._onMousedown,D),n.addEventListener("touchstart",this._onTouchstart,D)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,D),document.removeEventListener("mousedown",this._onMousedown,D),document.removeEventListener("touchstart",this._onTouchstart,D))}};e.\u0275fac=function(i){return new(i||e)(a(p),a(f),a(m),a(Dt,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Nt=new A("liveAnnouncerElement",{providedIn:"root",factory:Ft});function Ft(){return null}var Lt=new A("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),St=0,Si=(()=>{let e=class e{constructor(t,i,n,r){this._ngZone=i,this._defaultOptions=r,this._document=n,this._liveElement=t||this._createLiveElement()}announce(t,...i){let n=this._defaultOptions,r,c;return i.length===1&&typeof i[0]=="number"?c=i[0]:[r,c]=i,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:"polite"),c==null&&n&&(c=n.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=t,typeof c=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),c)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",i=this._document.getElementsByClassName(t),n=this._document.createElement("div");for(let r=0;r<i.length;r++)i[r].remove();return n.classList.add(t),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${St++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(t){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<i.length;n++){let r=i[n],c=r.getAttribute("aria-owns");c?c.indexOf(t)===-1&&r.setAttribute("aria-owns",c+" "+t):r.setAttribute("aria-owns",t)}}};e.\u0275fac=function(i){return new(i||e)(a(Nt,8),a(f),a(m),a(Lt,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var kt=new A("cdk-focus-monitor-default-options"),K=q({passive:!0,capture:!0}),Rt=(()=>{let e=class e{constructor(t,i,n,r,c){this._ngZone=t,this._platform=i,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new h,this._rootNodeFocusAndBlurListener=d=>{let _=M(d);for(let b=_;b;b=b.parentElement)d.type==="focus"?this._onFocus(d,b):this._onBlur(d,b)},this._document=r,this._detectionMode=c?.detectionMode||0}monitor(t,i=!1){let n=w(t);if(!this._platform.isBrowser||n.nodeType!==1)return re();let r=ye(n)||this._getDocument(),c=this._elementInfo.get(n);if(c)return i&&(c.checkChildren=!0),c.subject;let d={checkChildren:i,subject:new h,rootNode:r};return this._elementInfo.set(n,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let i=w(t),n=this._elementInfo.get(i);n&&(n.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(n))}focusVia(t,i,n){let r=w(t),c=this._getDocument().activeElement;r===c?this._getClosestElementsInfo(r).forEach(([d,_])=>this._originChanged(d,i,_)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===1||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===0){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Be:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,i){let n=this._elementInfo.get(i),r=M(t);!n||!n.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),n)}_onBlur(t,i){let n=this._elementInfo.get(i);!n||n.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(n,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,n=this._rootNodeFocusListenerCount.get(i)||0;n||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,K),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,K)}),this._rootNodeFocusListenerCount.set(i,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(x(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let n=this._rootNodeFocusListenerCount.get(i);n>1?this._rootNodeFocusListenerCount.set(i,n-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,K),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,K),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,n){this._setClasses(t,i),this._emitOrigin(n,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((n,r)=>{(r===t||n.checkChildren&&r.contains(t))&&i.push([r,n])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let c=0;c<r.length;c++)if(r[c].contains(i))return!0}return!1}};e.\u0275fac=function(i){return new(i||e)(a(f),a(p),a(Ct),a(m,8),a(kt,8))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),ki=(()=>{let e=class e{constructor(t,i){this._elementRef=t,this._focusMonitor=i,this._focusOrigin=null,this.cdkFocusChange=new j}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(l(N),l(Rt))},e.\u0275dir=C({type:e,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]});let s=e;return s})(),Se="cdk-high-contrast-black-on-white",ke="cdk-high-contrast-white-on-black",ee="cdk-high-contrast-active",xt=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=G(Oe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ee,Se,ke),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===1?t.add(ee,Se):i===2&&t.add(ee,ke)}}};e.\u0275fac=function(i){return new(i||e)(a(p),a(m))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Ri=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(i){return new(i||e)(a(xt))},e.\u0275mod=v({type:e}),e.\u0275inj=g({imports:[Te]});let s=e;return s})();export{p as a,Wt as b,Ht as c,q as d,Zt as e,Vt as f,ye as g,Ee as h,M as i,Gt as j,Ae as k,si as l,Te as m,Ni as n,Ne as o,Fe as p,It as q,Fi as r,Li as s,Tt as t,Mt as u,Si as v,Rt as w,ki as x,Ri as y};
