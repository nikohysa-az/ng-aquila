!function(){"use strict";function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,a=o(t);if(e){var r=o(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return n(this,i)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[2056],{65014:function(t,e,n){n.d(e,{N:function(){return g},Qv:function(){return x}});var o,a=n(58203),s=n(87636),l=n(37716),c=n(79765),u=n(41439),d=n(39761),h=n(89326),f=n(70371),p=n(36138),_=new l.OlP("NxModalData"),v=new l.OlP("nx-modal-default-options"),m=new l.OlP("nx-modal-scroll-strategy"),g={provide:m,deps:[a.aV],useFactory:function(t){return function(){return t.scrollStrategies.block()}}},x=((o=function(){function t(e,n,o,a,r,s){var l=this;i(this,t),this._overlay=e,this._injector=n,this._defaultOptions=o,this._parentDialogService=r,this._overlayContainer=s,this._openModalsAtThisLevel=[],this._afterAllClosedAtThisLevel=new c.xQ,this._afterOpenedAtThisLevel=new c.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,u.P)(function(){return l.openModals.length?l._afterAllClosed:l._afterAllClosed.pipe((0,d.O)(void 0))}),this._scrollStrategy=a}return r(t,[{key:"openModals",get:function(){return this._parentDialogService?this._parentDialogService.openModals:this._openModalsAtThisLevel}},{key:"afterOpened",get:function(){return this._parentDialogService?this._parentDialogService.afterOpened:this._afterOpenedAtThisLevel}},{key:"_afterAllClosed",get:function(){var t=this._parentDialogService;return t?t._afterAllClosed:this._afterAllClosedAtThisLevel}},{key:"open",value:function(t,e){var n=this;if((e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new h.I)).id&&this.getModalById(e.id))throw Error('Modal with id "'.concat(e.id,'" exists already. The modal id must be unique.'));var o=this._createOverlay(e),i=this._attachModalContainer(o,e),a=this._attachModalContent(t,i,o,e);return this.openModals.length||this._hideNonModalContentFromAssistiveTechnology(),this.openModals.push(a),a.afterClosed().subscribe(function(){return n._removeOpenModal(a)}),this.afterOpened.next(a),a}},{key:"closeAll",value:function(){this._closeModals(this.openModals)}},{key:"getModalById",value:function(t){return this.openModals.find(function(e){return e.id===t})}},{key:"ngOnDestroy",value:function(){this._closeModals(this._openModalsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}},{key:"_createOverlay",value:function(t){var e=this._getOverlayConfig(t);return this._overlay.create(e)}},{key:"_getOverlayConfig",value:function(t){var e=new a.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation,direction:t.direction});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}},{key:"_attachModalContainer",value:function(t,e){var n=l.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:h.I,useValue:e}]}),o=new s.C5(f.h,e.viewContainerRef,n,e.componentFactoryResolver);return t.attach(o).instance}},{key:"_attachModalContent",value:function(t,e,n,o){var i=new p.h(n,e,o.id);if(o.hasBackdrop&&n.backdropClick().subscribe(function(){i.disableClose||i.close()}),t instanceof l.Rgc)e.attachTemplatePortal(new s.UE(t,null,{$implicit:o.data,modalRef:i}));else{var a=this._createInjector(o,i,e),r=e.attachComponentPortal(new s.C5(t,o.viewContainerRef,a));i.componentInstance=r.instance}return i.updateSize(o.width,o.height).updatePosition(o.position),i}},{key:"_createInjector",value:function(t,e,n){return l.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:f.h,useValue:n},{provide:_,useValue:t.data},{provide:p.h,useValue:e}]})}},{key:"_removeOpenModal",value:function(t){var e=this.openModals.indexOf(t);e>-1&&(this.openModals.splice(e,1),this.openModals.length||(this._ariaHiddenElements.forEach(function(t,e){t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._afterAllClosed.next()))}},{key:"_hideNonModalContentFromAssistiveTechnology",value:function(){var t=this._overlayContainer.getContainerElement();if(t.parentElement)for(var e=t.parentElement.children,n=e.length-1;n>-1;n--){var o=e[n];o!==t&&"SCRIPT"!==o.nodeName&&"STYLE"!==o.nodeName&&!o.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}},{key:"_closeModals",value:function(t){for(var e=t.length;e--;)t[e].close()}}]),t}()).\u0275fac=function(t){return new(t||o)(l.LFG(a.aV),l.LFG(l.zs3),l.LFG(v,8),l.LFG(m),l.LFG(o,12),l.LFG(a.Xj))},o.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac}),o)},62674:function(t,e,n){n.d(e,{v:function(){return i}});var o=n(17238),i={modalContainer:(0,o.X$)("modalContainer",[(0,o.SB)("void, exit",(0,o.oB)({opacity:0,transform:"scale(1.3)"})),(0,o.SB)("enter",(0,o.oB)({transform:"none"})),(0,o.eR)("* => enter",(0,o.jt)("200ms cubic-bezier(0, 0, 0.2, 1)",(0,o.oB)({transform:"scale(1)",opacity:1}))),(0,o.eR)("* => void, * => exit",(0,o.jt)("200ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,o.oB)({opacity:0,transform:"scale(1.3)"})))])}},65945:function(t,e,n){n.d(e,{T:function(){return c}});var o,a=n(37716),s=n(36138),l=n(65014),c=((o=function(){function t(e,n,o){i(this,t),this.modalRef=e,this._elementRef=n,this._dialogService=o,this.type="button"}return r(t,[{key:"ngOnInit",value:function(){this.modalRef||(this.modalRef=function(t,e){for(var n=t.nativeElement.parentElement;n&&!n.classList.contains("nx-modal__container");)n=n.parentElement;return n?e.find(function(t){return t.id===n.id}):null}(this._elementRef,this._dialogService.openModals))}},{key:"ngOnChanges",value:function(t){var e=t.modalResult;e&&(this.modalResult=e.currentValue)}}]),t}()).\u0275fac=function(t){return new(t||o)(a.Y36(s.h,8),a.Y36(a.SBq),a.Y36(l.Qv))},o.\u0275dir=a.lG2({type:o,selectors:[["","nxModalClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&a.NdJ("click",function(){return e.modalRef.close(e.modalResult)}),2&t&&a.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",modalResult:["nxModalClose","modalResult"]},features:[a.TTD]}),o)},89326:function(t,e,n){n.d(e,{I:function(){return o}});var o=function t(){i(this,t),this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="736px",this.height="",this.maxWidth="736px",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0,this.showCloseIcon=!1,this.closeIconButtonLabel="Close dialog",this.direction="ltr"}},70371:function(n,o,a){a.d(o,{h:function(){return x}});var s=a(37716),l=a(38583),c=a(62674),u=a(87636),d=a(4765),h=a(89326),f=a(90805),p=["closeButton"];function _(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"button",2,3),s.NdJ("click",function(){return s.CHM(n),s.oxw()._closeButtonClick()}),s._UZ(2,"nx-icon",4),s.qZA()}if(2&t){var o=s.oxw();s.uIk("aria-label",o._config.closeIconButtonLabel)}}function v(t,e){}function m(){throw Error("Attempting to attach modal content after content is already attached")}var g,x=((g=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(a,n);var o=e(a);function a(t,e,n,r,l,c){var u;return i(this,a),(u=o.call(this))._elementRef=t,u._focusTrapFactory=e,u._changeDetectorRef=n,u._config=l,u._focusMonitor=c,u._elementFocusedBeforeDialogWasOpened=null,u._state="enter",u._animationStateChanged=new s.vpe,u._closeButtonClicked=new s.vpe,u.attachDomPortal=function(t){return u._portalOutlet.hasAttached()&&m(),u._savePreviouslyFocusedElement(),u._portalOutlet.attachDomPortal(t)},u._ariaLabelledBy=l.ariaLabelledBy||null,u._document=r,u}return r(a,[{key:"ngAfterViewInit",value:function(){this._config.showCloseIcon&&this._focusMonitor.monitor(this._closeButton)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._closeButton)}},{key:"attachComponentPortal",value:function(t){return this._portalOutlet.hasAttached()&&m(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachComponentPortal(t)}},{key:"attachTemplatePortal",value:function(t){return this._portalOutlet.hasAttached()&&m(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachTemplatePortal(t)}},{key:"_trapFocus",value:function(){var t=this._elementRef.nativeElement;if(this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(t)),this._config.autoFocus)this._focusTrap.focusInitialElementWhenReady();else{var e=this._document.activeElement;e!==t&&!t.contains(e)&&t.focus()}}},{key:"_restoreFocus",value:function(){var t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){var e=this._document.activeElement,n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&t.focus()}this._focusTrap&&this._focusTrap.destroy()}},{key:"_savePreviouslyFocusedElement",value:function(){var t=this;this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(function(){return t._elementRef.nativeElement.focus()}))}},{key:"_onAnimationDone",value:function(t){"enter"===t.toState?this._trapFocus():"exit"===t.toState&&this._restoreFocus(),this._animationStateChanged.emit(t)}},{key:"_onAnimationStart",value:function(t){this._animationStateChanged.emit(t)}},{key:"_startExitAnimation",value:function(){this._state="exit",this._changeDetectorRef.markForCheck()}},{key:"_closeButtonClick",value:function(){this._closeButtonClicked.emit()}}]),a}(u.en)).\u0275fac=function(t){return new(t||g)(s.Y36(s.SBq),s.Y36(d.qV),s.Y36(s.sBO),s.Y36(l.K0,8),s.Y36(h.I),s.Y36(d.tE))},g.\u0275cmp=s.Xpm({type:g,selectors:[["nx-modal-container"]],viewQuery:function(t,e){var n;1&t&&(s.Gf(u.Pl,7),s.Gf(p,5)),2&t&&(s.iGM(n=s.CRH())&&(e._portalOutlet=n.first),s.iGM(n=s.CRH())&&(e._closeButton=n.first))},hostAttrs:["tabindex","-1","aria-modal","true",1,"nx-modal__container"],hostVars:6,hostBindings:function(t,e){1&t&&s.WFA("@modalContainer.start",function(t){return e._onAnimationStart(t)})("@modalContainer.done",function(t){return e._onAnimationDone(t)}),2&t&&(s.uIk("id",e._id)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),s.d8E("@modalContainer",e._state))},features:[s.qOj],decls:2,vars:1,consts:[["class","nx-modal__close","type","button",3,"click",4,"ngIf"],["cdkPortalOutlet",""],["type","button",1,"nx-modal__close",3,"click"],["closeButton",""],["name","close"]],template:function(t,e){1&t&&(s.YNc(0,_,3,1,"button",0),s.YNc(1,v,0,0,"ng-template",1)),2&t&&s.Q6J("ngIf",e._config.showCloseIcon)},directives:[l.O5,u.Pl,f.O],styles:["[_nghost-%COMP%]{background:var(--modal-background-color);color:var(--modal-text-color);padding:40px 40px 48px;border-radius:4px;box-shadow:0 8px 24px #41414159;display:block;position:relative;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (max-width: 703px){[_nghost-%COMP%]{margin:0 8px;padding:40px 32px 48px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{border:2px solid windowText}}  .nx-modal__content{display:block;margin:0 -40px;padding:0 40px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}  .nx-modal__actions{margin-bottom:-48px;margin-left:-40px;margin-right:-40px;height:72px;border-top:1px solid var(--modal-actions-border-color);display:flex;align-items:center;justify-content:flex-end;padding:0 40px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.nx-modal__close[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;position:absolute;top:16px;right:16px;height:24px;outline:none;padding:0;color:var(--modal-close-icon-color)}.nx-modal__close[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{font-size:24px}[dir=rtl][_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%]{right:auto;left:16px}.nx-modal__close[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],data:{animation:[c.v.modalContainer]}}),g)},36138:function(t,e,n){n.d(e,{h:function(){return u}});var o=n(36461),a=n(79765),s=n(45435),l=n(15257),c=0,u=function(){function t(e,n){var r=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nx-modal-"+c++;i(this,t),this._overlayRef=e,this._containerInstance=n,this.id=u,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new a.xQ,this._afterClosed=new a.xQ,this._beforeClosed=new a.xQ,this._state=0,n._id=u,n._animationStateChanged.pipe((0,s.h)(function(t){return"done"===t.phaseName&&"enter"===t.toState}),(0,l.q)(1)).subscribe(function(){r._afterOpened.next(),r._afterOpened.complete()}),n._animationStateChanged.pipe((0,s.h)(function(t){return"done"===t.phaseName&&"exit"===t.toState}),(0,l.q)(1)).subscribe(function(){clearTimeout(r._closeFallbackTimeout),r._overlayRef.dispose()}),n._closeButtonClicked.subscribe(function(){r.close()}),e.detachments().subscribe(function(){r._beforeClosed.next(r._result),r._beforeClosed.complete(),r._afterClosed.next(r._result),r._afterClosed.complete(),r.componentInstance=null,r._overlayRef.dispose()}),e.keydownEvents().pipe((0,s.h)(function(t){return t.keyCode===o.hY&&!r.disableClose&&!(0,o.Vb)(t)})).subscribe(function(t){t.preventDefault(),r.close()})}return r(t,[{key:"close",value:function(t){var e=this;this._result=t,this._containerInstance._animationStateChanged.pipe((0,s.h)(function(t){return"start"===t.phaseName}),(0,l.q)(1)).subscribe(function(n){e._beforeClosed.next(t),e._beforeClosed.complete(),e._state=2,e._overlayRef.detachBackdrop(),e._closeFallbackTimeout=setTimeout(function(){e._overlayRef.dispose()},n.totalTime+100)}),this._containerInstance._startExitAnimation(),this._state=1}},{key:"afterOpened",value:function(){return this._afterOpened.asObservable()}},{key:"afterClosed",value:function(){return this._afterClosed.asObservable()}},{key:"beforeClosed",value:function(){return this._beforeClosed.asObservable()}},{key:"backdropClick",value:function(){return this._overlayRef.backdropClick()}},{key:"keydownEvents",value:function(){return this._overlayRef.keydownEvents()}},{key:"updatePosition",value:function(t){var e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}},{key:"updateSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._getPositionStrategy().width(t).height(e),this._overlayRef.updatePosition(),this}},{key:"addPanelClass",value:function(t){return this._overlayRef.addPanelClass(t),this}},{key:"removePanelClass",value:function(t){return this._overlayRef.removePanelClass(t),this}},{key:"getState",value:function(){return this._state}},{key:"_getPositionStrategy",value:function(){return this._overlayRef.getConfig().positionStrategy}}]),t}()},4422:function(t,e,n){n.d(e,{x$:function(){return w},nU:function(){return P},tY:function(){return M}});var o=n(37716),a=n(17238),s=(0,a.oQ)([(0,a.oB)({opacity:0}),(0,a.jt)("300ms",(0,a.oB)({opacity:1}))]),l=(0,a.oQ)((0,a.jt)("300ms",(0,a.oB)({opacity:0}))),c=(0,a.oQ)([(0,a.oB)({transform:"scale(1)",opacity:1}),(0,a.jt)("250ms",(0,a.oB)({transform:"scale(1.3)",opacity:0}))]),u=(0,a.oQ)([(0,a.oB)({transform:"scale(1.3)",opacity:0}),(0,a.jt)("250ms",(0,a.oB)({transform:"scale(1)",opacity:1}))]),d=n(75319),h=n(2825),f=n(39075),p=n(4765),_=n(38583),v=n(75723),m=n(90805),g=["closeButton"];function x(t,e){if(1&t){var n=o.EpF();o.TgZ(0,"button",8,9),o.NdJ("click",function(){return o.CHM(n),o.oxw().closeButtonClick()}),o._UZ(2,"nx-icon",10),o.qZA()}if(2&t){var i=o.oxw();o.uIk("aria-label",i.closeButtonLabel)}}function b(t,e){1&t&&o.GkF(0)}function y(t,e){if(1&t&&(o.ynx(0),o.YNc(1,b,1,0,"ng-container",11),o.BQk()),2&t){var n=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",n.body)}}function C(t,e){1&t&&o.Hsn(0)}var k,O=["*"],w=((k=function t(){i(this,t)}).\u0275fac=function(t){return new(t||k)},k.\u0275dir=o.lG2({type:k,selectors:[["","nxModalActions",""]],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("nx-modal__actions",!0)}}),k),M=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.lG2({type:t,selectors:[["","nxModalContent",""]],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("nx-modal__content",!0)}}),t}(),P=function(){var t=function(){function t(e,n,a,r){i(this,t),this.modalService=e,this.eventManager=n,this._changeDetectorRef=a,this._focusMonitor=r,this._closeButtonLabel="Close dialog",this.hideOnEsc=!0,this.hideOnClickOutside=!0,this.showCloseIcon=!0,this.size="auto",this.closeEvent=new o.vpe,this.closeSubscription=d.w.EMPTY}return r(t,[{key:"closeButtonLabel",get:function(){return this._closeButtonLabel},set:function(t){t!==this._closeButtonLabel&&(this._closeButtonLabel=t,this._changeDetectorRef.markForCheck())}},{key:"ngOnInit",value:function(){var t=this;this.closeSubscription=this.modalService.close$.subscribe(function(){return t.closeEvent.emit()}),this.removeEventListener=this.eventManager.addGlobalEventListener("window","keyup.esc",function(){t.hideOnEsc&&t.modalService.close()})}},{key:"ngAfterViewInit",value:function(){this.showCloseIcon&&this._focusMonitor.monitor(this._closeButton)}},{key:"ngOnDestroy",value:function(){this.removeEventListener(),this.closeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._closeButton)}},{key:"clickOutsideModal",value:function(){this.hideOnClickOutside&&this.modalService.close()}},{key:"closeButtonClick",value:function(){this.modalService.close()}},{key:"cancelClick",value:function(t){t.stopPropagation()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Y36(h.H),o.Y36(f.Qz),o.Y36(o.sBO),o.Y36(p.tE))},t.\u0275cmp=o.Xpm({type:t,selectors:[["nx-modal"]],viewQuery:function(t,e){var n;(1&t&&o.Gf(g,5),2&t)&&(o.iGM(n=o.CRH())&&(e._closeButton=n.first))},hostVars:3,hostBindings:function(t,e){2&t&&(o.d8E("@fadeInOut",void 0),o.ekj("nx-modal--fixed-width","fixed"===e.size))},inputs:{closeButtonLabel:"closeButtonLabel",body:["nxBody","body"],hideOnEsc:["nxHideOnEsc","hideOnEsc"],hideOnClickOutside:["nxHideOnClickOutside","hideOnClickOutside"],showCloseIcon:["nxShowCloseIcon","showCloseIcon"],size:["nxSize","size"]},outputs:{closeEvent:"nxClose"},ngContentSelectors:O,decls:9,vars:4,consts:[["role","dialog","cdkTrapFocus","","cdkTrapFocusAutoCapture","","cdkFocusInitial","",1,"nx-modal"],[1,"nx-modal__backdrop",3,"click"],[1,"nx-modal__position"],[1,"nx-modal__container",3,"click"],["class","nx-modal__close","type","button",3,"click",4,"ngIf"],["cdkScrollable","",1,"nx-modal__content-wrapper"],[4,"ngIf","ngIfElse"],["projectContent",""],["type","button",1,"nx-modal__close",3,"click"],["closeButton",""],["name","close"],[4,"ngTemplateOutlet"]],template:function(t,e){if(1&t&&(o.F$t(),o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.NdJ("click",function(){return e.clickOutsideModal()}),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.NdJ("click",function(t){return e.cancelClick(t)}),o.YNc(4,x,3,1,"button",4),o.TgZ(5,"div",5),o.YNc(6,y,2,1,"ng-container",6),o.YNc(7,C,1,0,"ng-template",null,7,o.W1O),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){var n=o.MAs(8);o.xp6(3),o.Q6J("@scaleUpDown",void 0),o.xp6(1),o.Q6J("ngIf",e.showCloseIcon),o.xp6(2),o.Q6J("ngIf",e.body)("ngIfElse",n)}},directives:[p.mK,_.O5,v.PQ,m.O,_.tP],styles:["[_nghost-%COMP%]{position:relative;z-index:1000}.nx-modal[_ngcontent-%COMP%]{display:flex;position:fixed;width:100vw;height:100vh;top:0;bottom:0;left:0;right:0;z-index:1000;align-items:center;justify-content:center;transition:opacity .3s ease}.nx-modal__backdrop[_ngcontent-%COMP%]{background-color:#00000059;height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.nx-modal__position[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:50%;left:50%;transform:translate(-50%,-50%);z-index:20}.nx-modal__container[_ngcontent-%COMP%]{border-radius:4px;box-shadow:0 8px 24px #41414159;background:var(--modal-background-color);color:var(--modal-text-color)}.nx-modal__content-wrapper[_ngcontent-%COMP%]{padding:40px 40px 48px;max-height:calc(100vh - 48px);overflow-y:auto}@media (max-width: 703px){.nx-modal__content-wrapper[_ngcontent-%COMP%]{max-height:70vh;padding:40px 32px 48px}}.nx-modal__close[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;position:absolute;top:16px;right:16px;height:24px;outline:none;padding:0;color:var(--modal-close-icon-color)}.nx-modal__close[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{font-size:24px}.nx-modal__close[_ngcontent-%COMP%]::-moz-focus-inner{border:0}[dir=rtl][_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%]{right:auto;left:16px}.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media (max-width: 703px){.nx-modal__position[_ngcontent-%COMP%]{width:100%}.nx-modal__container[_ngcontent-%COMP%]{position:relative;max-width:calc(100vw - 16px);max-height:70vh;margin:0 auto}}.nx-modal--fixed-width[_nghost-%COMP%]   .nx-modal__container[_ngcontent-%COMP%]{width:736px;max-width:calc(100vw - 16px)}  .nx-modal__actions{height:72px;border-top:1px solid var(--modal-actions-border-color);display:flex;align-items:center;justify-content:flex-end;padding:0 40px;position:absolute;bottom:0;left:0;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:var(--modal-actions-background-color)}  .nx-modal__content{overflow-y:auto;max-height:calc(100vh - 72px - 48px);padding:0 40px;margin:0 -40px}@media (max-width: 703px){  .nx-modal__content{max-height:calc(70vh - 72px - 48px)}}@media screen and (-ms-high-contrast: active){.nx-modal__content-wrapper[_ngcontent-%COMP%],   .nx-modal__actions{border:2px solid windowText}}"],data:{animation:[(0,a.X$)("fadeInOut",[(0,a.eR)(":enter",[(0,a._7)(s),(0,a.IO)("@scaleUpDown",[(0,a.pV)()])]),(0,a.eR)(":leave",[(0,a.IO)("@scaleUpDown",[(0,a.pV)()]),(0,a._7)(l)])]),(0,a.X$)("scaleUpDown",[(0,a.eR)(":enter",(0,a._7)(u)),(0,a.eR)(":leave",(0,a._7)(c))])]},changeDetection:0}),t}()},81543:function(t,e,n){n.d(e,{$:function(){return p}});var o,a=n(42677),s=n(38583),l=n(2825),c=n(4765),u=n(58203),d=n(87636),h=n(65014),f=n(37716),p=((o=function(){function t(){i(this,t)}return r(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[l.H]}}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({providers:[h.Qv,h.N],imports:[[c.rt,u.U8,d.eL,s.ez,a.cf]]}),o)},2825:function(t,e,n){n.d(e,{H:function(){return l}});var o,a=n(79765),s=n(37716),l=((o=function(){function t(){i(this,t),this.subject=new a.xQ,this.close$=this.subject.asObservable()}return r(t,[{key:"close",value:function(){this.subject.next()}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac}),o)},62056:function(t,e,n){n.d(e,{$w:function(){return o.$},Qv:function(){return i.Qv}});var o=n(81543),i=(n(4422),n(70371),n(65945),n(65014));n(62674)}}])}();