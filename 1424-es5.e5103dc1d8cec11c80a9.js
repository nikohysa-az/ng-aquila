!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var s=r(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[1424],{16209:function(t,s,a){a.d(s,{h:function(){return x}});var r=a(38701),c=a(37716),l=a(38583),g=a(90805);function u(e,t){if(1&e&&c._UZ(0,"nx-icon",3),2&e){var n=c.oxw();c.Q6J("name",n._iconName)}}function _(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"button",4,5),c.NdJ("click",function(){return c.CHM(n),c.oxw()._emitCloseEvent()}),c._UZ(2,"nx-icon",6),c.qZA()}if(2&e){var o=c.oxw();c.uIk("aria-label",o.closeButtonLabel)}}var d,f,h=["*"],x=((f=function(t){o(a,t);var s=i(a);function a(){var t;return e(this,a),(t=s.apply(this,arguments))._context="info",t._closable=!0,t._allowedContexts=["info","error","warning"],t}return n(a,[{key:"context",get:function(){return this._context},set:function(e){this._updateContext(e)}}]),a}(r.w)).\u0275fac=function(e){return(d||(d=c.n5z(f)))(e||f)},f.\u0275cmp=c.Xpm({type:f,selectors:[["nx-message-banner"]],inputs:{context:"context"},exportAs:["nxMessageBanner"],features:[c.qOj],ngContentSelectors:h,decls:4,vars:2,consts:[["class","nx-message__icon","size","s","aria-hidden","true",3,"name",4,"ngIf"],["tabindex","0","class","nx-message__close-icon","type","button",3,"click",4,"ngIf"],[1,"nx-message__content"],["size","s","aria-hidden","true",1,"nx-message__icon",3,"name"],["tabindex","0","type","button",1,"nx-message__close-icon",3,"click"],["closeButton",""],["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&(c.F$t(),c.YNc(0,u,1,1,"nx-icon",0),c.YNc(1,_,3,1,"button",1),c.TgZ(2,"div",2),c.Hsn(3),c.qZA()),2&e&&(c.Q6J("ngIf",t._iconName),c.xp6(1),c.Q6J("ngIf",t.closable))},directives:[l.O5,g.O],styles:["[_nghost-%COMP%]{font-size:var(--message-font-size);line-height:var(--message-line-height);font-weight:var(--message-font-weight);letter-spacing:var(--message-letter-spacing);color:var(--message-text-color);border-radius:var(--message-border-radius);width:100%;display:flex;align-items:flex-start;text-align:left;position:relative;border:1px solid;padding:23px}@media (max-width: 703px){[_nghost-%COMP%]{display:block}}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[_nghost-%COMP%], .context-regular[_nghost-%COMP%]{border-color:var(--message-regular-border-color);background-color:var(--message-regular-background-color)}.context-info[_nghost-%COMP%]{border-color:var(--message-info-border-color);background-color:var(--message-info-background-color)}.context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-info-icon-color)}.context-error[_nghost-%COMP%]{border-color:var(--message-error-border-color);background-color:var(--message-error-background-color)}.context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-error-icon-color)}.context-success[_nghost-%COMP%]{border-color:var(--message-success-border-color);background-color:var(--message-success-background-color)}.context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-success-icon-color)}.context-warning[_nghost-%COMP%]{border-color:var(--message-warning-border-color);background-color:var(--message-warning-background-color)}.context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-warning-icon-color)}@media screen and (-ms-high-contrast: active){.nx-message__icon[_ngcontent-%COMP%]{color:windowText}}.nx-message__icon[_ngcontent-%COMP%]{margin-right:16px}@media (max-width: 703px){.nx-message__icon[_ngcontent-%COMP%]{float:left;margin-right:8px}}[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{float:right;margin-right:initial;margin-left:16px}@media (max-width: 703px){[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{margin-left:8px}}.nx-message--closable[_nghost-%COMP%]{padding-right:39px}@media (max-width: 703px){.nx-message--closable[_nghost-%COMP%]{padding-right:31px}}[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-right:23px;padding-left:39px}@media (max-width: 703px){[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-left:31px}}.nx-message__close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}.nx-message__close-icon[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--message-close-icon-color)}[dir=rtl][_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%]{right:auto;left:16px}.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}","[_nghost-%COMP%]{border-radius:var(--message-banner-border-radius)}"],changeDetection:0}),f)},38701:function(t,o,s){s.d(o,{w:function(){return x}});var i=s(39490),a=s(37716),r=s(4765),c=s(38583),l=s(90805),g=["closeButton"];function u(e,t){if(1&e&&a._UZ(0,"nx-icon",3),2&e){var n=a.oxw();a.Q6J("name",n._iconName)}}function _(e,t){if(1&e){var n=a.EpF();a.TgZ(0,"button",4,5),a.NdJ("click",function(){return a.CHM(n),a.oxw()._emitCloseEvent()}),a._UZ(2,"nx-icon",6),a.qZA()}if(2&e){var o=a.oxw();a.uIk("aria-label",o.closeButtonLabel)}}var d,f=["*"],h={info:"info-circle",error:"exclamation-triangle",success:"check-circle",warning:"exclamation-circle-warning"},x=((d=function(){function t(n,o){e(this,t),this._changeDetectorRef=n,this._focusMonitor=o,this._context="regular",this._allowedContexts=["regular","info","error","warning","success"],this._closable=!1,this._closeButtonLabel="Close dialog",this.closeEvent=new a.vpe}return n(t,[{key:"_isInfo",get:function(){return"info"===this._context}},{key:"_isSuccess",get:function(){return"success"===this._context}},{key:"_isWarning",get:function(){return"warning"===this._context}},{key:"_isError",get:function(){return"error"===this._context}},{key:"context",get:function(){return this._context},set:function(e){this._updateContext(e)}},{key:"closable",get:function(){return this._closable},set:function(e){var t=(0,i.Ig)(e);t!==this._closable&&(this._closable=t,this._changeDetectorRef.markForCheck())}},{key:"closeButtonLabel",get:function(){return this._closeButtonLabel},set:function(e){e!==this._closeButtonLabel&&(this._closeButtonLabel=e,this._changeDetectorRef.markForCheck())}},{key:"ngAfterViewInit",value:function(){this.closable&&this._focusMonitor.monitor(this._closeButton)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._closeButton)}},{key:"_emitCloseEvent",value:function(){this.closeEvent.emit()}},{key:"_iconName",get:function(){var e=this._allowedContexts.indexOf(this._context)>=0?this._context:this._allowedContexts[0];return h[e]}},{key:"_updateContext",value:function(e){e!==this._context&&(this._context=e,this._changeDetectorRef.markForCheck())}}]),t}()).\u0275fac=function(e){return new(e||d)(a.Y36(a.sBO),a.Y36(r.tE))},d.\u0275cmp=a.Xpm({type:d,selectors:[["nx-message"]],viewQuery:function(e,t){var n;1&e&&a.Gf(g,5),2&e&&a.iGM(n=a.CRH())&&(t._closeButton=n.first)},hostVars:10,hostBindings:function(e,t){2&e&&a.ekj("context-info",t._isInfo)("context-success",t._isSuccess)("context-warning",t._isWarning)("context-error",t._isError)("nx-message--closable",t.closable)},inputs:{context:["nxContext","context"],closable:"closable",closeButtonLabel:"closeButtonLabel"},outputs:{closeEvent:"close"},exportAs:["nxMessage"],ngContentSelectors:f,decls:4,vars:2,consts:[["class","nx-message__icon","size","s","aria-hidden","true",3,"name",4,"ngIf"],["tabindex","0","class","nx-message__close-icon","type","button",3,"click",4,"ngIf"],[1,"nx-message__content"],["size","s","aria-hidden","true",1,"nx-message__icon",3,"name"],["tabindex","0","type","button",1,"nx-message__close-icon",3,"click"],["closeButton",""],["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&(a.F$t(),a.YNc(0,u,1,1,"nx-icon",0),a.YNc(1,_,3,1,"button",1),a.TgZ(2,"div",2),a.Hsn(3),a.qZA()),2&e&&(a.Q6J("ngIf",t._iconName),a.xp6(1),a.Q6J("ngIf",t.closable))},directives:[c.O5,l.O],styles:["[_nghost-%COMP%]{font-size:var(--message-font-size);line-height:var(--message-line-height);font-weight:var(--message-font-weight);letter-spacing:var(--message-letter-spacing);color:var(--message-text-color);border-radius:var(--message-border-radius);width:100%;display:flex;align-items:flex-start;text-align:left;position:relative;border:1px solid;padding:23px}@media (max-width: 703px){[_nghost-%COMP%]{display:block}}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[_nghost-%COMP%], .context-regular[_nghost-%COMP%]{border-color:var(--message-regular-border-color);background-color:var(--message-regular-background-color)}.context-info[_nghost-%COMP%]{border-color:var(--message-info-border-color);background-color:var(--message-info-background-color)}.context-info[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-info-icon-color)}.context-error[_nghost-%COMP%]{border-color:var(--message-error-border-color);background-color:var(--message-error-background-color)}.context-error[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-error-icon-color)}.context-success[_nghost-%COMP%]{border-color:var(--message-success-border-color);background-color:var(--message-success-background-color)}.context-success[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-success-icon-color)}.context-warning[_nghost-%COMP%]{border-color:var(--message-warning-border-color);background-color:var(--message-warning-background-color)}.context-warning[_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{color:var(--message-warning-icon-color)}@media screen and (-ms-high-contrast: active){.nx-message__icon[_ngcontent-%COMP%]{color:windowText}}.nx-message__icon[_ngcontent-%COMP%]{margin-right:16px}@media (max-width: 703px){.nx-message__icon[_ngcontent-%COMP%]{float:left;margin-right:8px}}[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{float:right;margin-right:initial;margin-left:16px}@media (max-width: 703px){[dir=rtl][_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__icon[_ngcontent-%COMP%]{margin-left:8px}}.nx-message--closable[_nghost-%COMP%]{padding-right:39px}@media (max-width: 703px){.nx-message--closable[_nghost-%COMP%]{padding-right:31px}}[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-right:23px;padding-left:39px}@media (max-width: 703px){[dir=rtl]   .nx-message--closable[_nghost-%COMP%]{padding-left:31px}}.nx-message__close-icon[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}.nx-message__close-icon[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--message-close-icon-color)}[dir=rtl][_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-message__close-icon[_ngcontent-%COMP%]{right:auto;left:16px}.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-message__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),d)},51424:function(t,s,a){a.d(s,{Ee:function(){return d},VO:function(){return T}});var r,c=a(38583),l=a(42677),g=a(58203),u=a(87636),_=a(37716),d=((r=function t(){e(this,t)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=_.oAB({type:r}),r.\u0275inj=_.cJS({imports:[[c.ez,l.cf,g.U8,u.eL]]}),r),f=a(38701),h=(a(16209),a(17238)),x={toastState:(0,h.X$)("state",[(0,h.SB)("initial, void, hidden",(0,h.oB)({opacity:0,transform:"translateY(100%)"})),(0,h.SB)("visible",(0,h.oB)({opacity:1})),(0,h.eR)("* => visible",(0,h.jt)("300ms cubic-bezier(0, 0, 0.2, 1)",(0,h.oB)({opacity:1,transform:"translateY(0)"}))),(0,h.eR)("* => hidden",(0,h.jt)("300ms cubic-bezier(0, 0, 0.2, 1)",(0,h.oB)({opacity:0,transform:"translateY(200%)"})))])},m=a(79765),p=a(15257),v=function t(){e(this,t),this.politeness="polite",this.announcementMessage="",this.duration=3e3,this.context="info"},b=function t(n){e(this,t),this.data=n};function O(e,t){}function C(e,t){if(1&e&&(_.ynx(0),_._uU(1),_.BQk()),2&e){var n=_.oxw();_.xp6(1),_.Oqu(n.data.data)}}var M=function(){var t=function(t){o(a,t);var s=i(a);function a(t,n,o,i){var r;return e(this,a),(r=s.call(this))._ngZone=t,r._changeDetectorRef=n,r.config=o,r.data=i,r._destroyed=!1,r._onExit=new m.xQ,r._onEnter=new m.xQ,r._animationState="void",r._role=null,r._context=r.config.context,r._setAriaLabels(),r}return n(a,[{key:"attachComponentPortal",value:function(e){return this._assertNotAttached(),this._portalOutlet.attachComponentPortal(e)}},{key:"attachTemplatePortal",value:function(e){return this._assertNotAttached(),this._portalOutlet.attachTemplatePortal(e)}},{key:"onAnimationEnd",value:function(e){var t=e.fromState,n=e.toState;if(("void"===n&&"void"!==t||"hidden"===n)&&this._completeExit(),"visible"===n){var o=this._onEnter;this._ngZone.run(function(){o.next(),o.complete()})}}},{key:"enter",value:function(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}},{key:"exit",value:function(){this._animationState="hidden"}},{key:"ngOnDestroy",value:function(){this._destroyed=!0,this._completeExit()}},{key:"_completeExit",value:function(){var e=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe((0,p.q)(1)).subscribe(function(){e._onExit.next(),e._onExit.complete()})}},{key:"_assertNotAttached",value:function(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach message toastcontent after content is already attached")}},{key:"_setAriaLabels",value:function(){this._role="assertive"!==this.config.politeness||this.config.announcementMessage?"off"===this.config.politeness?null:"status":"alert"}}]),a}(u.en);return t.\u0275fac=function(e){return new(e||t)(_.Y36(_.R0b),_.Y36(_.sBO),_.Y36(v),_.Y36(b))},t.\u0275cmp=_.Xpm({type:t,selectors:[["nx-message-toast"]],viewQuery:function(e,t){var n;(1&e&&_.Gf(u.Pl,7),2&e)&&(_.iGM(n=_.CRH())&&(t._portalOutlet=n.first))},hostVars:2,hostBindings:function(e,t){1&e&&_.WFA("@state.done",function(e){return t.onAnimationEnd(e)}),2&e&&(_.uIk("role",t._role),_.d8E("@state",t._animationState))},features:[_.qOj],decls:3,vars:2,consts:[[3,"nxContext"],["cdkPortalOutlet",""],[4,"ngIf"]],template:function(e,t){1&e&&(_.TgZ(0,"nx-message",0),_.YNc(1,O,0,0,"ng-template",1),_.YNc(2,C,2,1,"ng-container",2),_.qZA()),2&e&&(_.Q6J("nxContext",t._context),_.xp6(2),_.Q6J("ngIf",t.data))},directives:[f.w,u.Pl,c.O5],styles:["nx-message[_ngcontent-%COMP%]{box-shadow:var(--message-box-shadow);max-width:352px}@media (max-width: 703px){nx-message[_ngcontent-%COMP%]{max-width:calc(100vw - 16px)}}"],data:{animation:[x.toastState]}}),t}(),y=Math.pow(2,31)-1,w=function(){function t(n,o){var s=this;e(this,t),this._overlayRef=o,this._afterDismissed=new m.xQ,this._afterOpened=new m.xQ,this.toastInstance=n,n._onExit.subscribe(function(){return s._finishDismiss()})}return n(t,[{key:"dismiss",value:function(){this._afterDismissed.closed||this.toastInstance.exit(),clearTimeout(this._durationTimeoutId)}},{key:"_dismissAfter",value:function(e){var t=this;this._durationTimeoutId=setTimeout(function(){return t.dismiss()},Math.min(e,y))}},{key:"_open",value:function(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}},{key:"_finishDismiss",value:function(){this._overlayRef.dispose(),this._afterDismissed.next(),this._afterDismissed.complete()}},{key:"afterDismissed",value:function(){return this._afterDismissed.asObservable()}},{key:"afterOpened",value:function(){return this.toastInstance._onEnter}}]),t}(),P=a(4765),k=new _.OlP("NX_MESSAGE_TOAST_DEFAULT_CONFIG"),T=function(){var t=function(){function t(n,o,s,i,a){e(this,t),this._overlay=n,this._injector=o,this._live=s,this._parentMessageToastService=i,this._defaultConfig=a,this._toastRefAtThisLevel=null}return n(t,[{key:"_oldToastMessageRef",get:function(){var e=this._parentMessageToastService;return e?e._oldToastMessageRef:this._toastRefAtThisLevel},set:function(e){this._parentMessageToastService?this._parentMessageToastService._oldToastMessageRef=e:this._toastRefAtThisLevel=e}},{key:"open",value:function(e,t){var n=Object.assign(Object.assign(Object.assign({},new v),this._defaultConfig),t),o=this._createOverlay(n),s=this._createInjector(n,new b(e),this._injector),i=new u.C5(M,void 0,s),a=o.attach(i),r=new w(a.instance,o);return this._animateToast(r,n),this._oldToastMessageRef=r,this._oldToastMessageRef}},{key:"openFromTemplate",value:function(e,t){var n=Object.assign(Object.assign(Object.assign({},new v),this._defaultConfig),t),o=this._createOverlay(n),s=this._attachToastComponent(o,n),i=new w(s,o),a=new u.UE(e,null,i);return s.attachTemplatePortal(a),this._animateToast(i,n),this._oldToastMessageRef=i,this._oldToastMessageRef}},{key:"_attachToastComponent",value:function(e,t){var n=this._createInjector(t,null,this._injector),o=new u.C5(M,null,n),s=e.attach(o);return s.instance.config=t,s.instance}},{key:"_createOverlay",value:function(e){var t=new g.X_,n=this._overlay.position().global();return n.bottom("0"),n.centerHorizontally(),t.positionStrategy=n,this._overlay.create(t)}},{key:"_animateToast",value:function(e,t){var n=this;e.afterDismissed().subscribe(function(){n._oldToastMessageRef===e&&(n._oldToastMessageRef=null),t.announcementMessage&&n._live.clear()}),this._oldToastMessageRef?(this._oldToastMessageRef.afterDismissed().subscribe(function(){e.toastInstance.enter()}),this._oldToastMessageRef.dismiss()):e.toastInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(function(){return e._dismissAfter(t.duration)}),t.announcementMessage&&this._live.announce(t.announcementMessage,t.politeness)}},{key:"_createInjector",value:function(e,t,n){var o=new WeakMap;return o.set(v,e),o.set(b,t),new u.nK(n,o)}},{key:"dismiss",value:function(){this._oldToastMessageRef&&this._oldToastMessageRef.dismiss()}},{key:"ngOnDestroy",value:function(){this._toastRefAtThisLevel&&this._toastRefAtThisLevel.dismiss()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(_.LFG(g.aV),_.LFG(_.zs3),_.LFG(P.Kd),_.LFG(t,12),_.LFG(k,8))},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac,providedIn:d}),t}()}}])}();