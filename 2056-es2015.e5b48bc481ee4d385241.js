"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[2056],{65014:function(t,e,o){o.d(e,{N:function(){return f},Qv:function(){return m}});var n=o(58203),i=o(87636),s=o(37716),a=o(79765),r=o(41439),l=o(39761),c=o(89326),d=o(70371),h=o(36138);const u=new s.OlP("NxModalData"),p=new s.OlP("nx-modal-default-options"),_=new s.OlP("nx-modal-scroll-strategy"),f={provide:_,deps:[n.aV],useFactory:function(t){return()=>t.scrollStrategies.block()}};let m=(()=>{class t{constructor(t,e,o,n,i,s){this._overlay=t,this._injector=e,this._defaultOptions=o,this._parentDialogService=i,this._overlayContainer=s,this._openModalsAtThisLevel=[],this._afterAllClosedAtThisLevel=new a.xQ,this._afterOpenedAtThisLevel=new a.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,r.P)(()=>this.openModals.length?this._afterAllClosed:this._afterAllClosed.pipe((0,l.O)(void 0))),this._scrollStrategy=n}get openModals(){return this._parentDialogService?this._parentDialogService.openModals:this._openModalsAtThisLevel}get afterOpened(){return this._parentDialogService?this._parentDialogService.afterOpened:this._afterOpenedAtThisLevel}get _afterAllClosed(){const t=this._parentDialogService;return t?t._afterAllClosed:this._afterAllClosedAtThisLevel}open(t,e){if((e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new c.I)).id&&this.getModalById(e.id))throw Error(`Modal with id "${e.id}" exists already. The modal id must be unique.`);const o=this._createOverlay(e),n=this._attachModalContainer(o,e),i=this._attachModalContent(t,n,o,e);return this.openModals.length||this._hideNonModalContentFromAssistiveTechnology(),this.openModals.push(i),i.afterClosed().subscribe(()=>this._removeOpenModal(i)),this.afterOpened.next(i),i}closeAll(){this._closeModals(this.openModals)}getModalById(t){return this.openModals.find(e=>e.id===t)}ngOnDestroy(){this._closeModals(this._openModalsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new n.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation,direction:t.direction});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachModalContainer(t,e){const o=s.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:c.I,useValue:e}]}),n=new i.C5(d.h,e.viewContainerRef,o,e.componentFactoryResolver);return t.attach(n).instance}_attachModalContent(t,e,o,n){const a=new h.h(o,e,n.id);if(n.hasBackdrop&&o.backdropClick().subscribe(()=>{a.disableClose||a.close()}),t instanceof s.Rgc)e.attachTemplatePortal(new i.UE(t,null,{$implicit:n.data,modalRef:a}));else{const o=this._createInjector(n,a,e),s=e.attachComponentPortal(new i.C5(t,n.viewContainerRef,o));a.componentInstance=s.instance}return a.updateSize(n.width,n.height).updatePosition(n.position),a}_createInjector(t,e,o){return s.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:d.h,useValue:o},{provide:u,useValue:t.data},{provide:h.h,useValue:e}]})}_removeOpenModal(t){const e=this.openModals.indexOf(t);e>-1&&(this.openModals.splice(e,1),this.openModals.length||(this._ariaHiddenElements.forEach((t,e)=>{t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._afterAllClosed.next()))}_hideNonModalContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){const n=e[o];n!==t&&"SCRIPT"!==n.nodeName&&"STYLE"!==n.nodeName&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_closeModals(t){let e=t.length;for(;e--;)t[e].close()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(n.aV),s.LFG(s.zs3),s.LFG(p,8),s.LFG(_),s.LFG(t,12),s.LFG(n.Xj))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})()},62674:function(t,e,o){o.d(e,{v:function(){return i}});var n=o(17238);const i={modalContainer:(0,n.X$)("modalContainer",[(0,n.SB)("void, exit",(0,n.oB)({opacity:0,transform:"scale(1.3)"})),(0,n.SB)("enter",(0,n.oB)({transform:"none"})),(0,n.eR)("* => enter",(0,n.jt)("200ms cubic-bezier(0, 0, 0.2, 1)",(0,n.oB)({transform:"scale(1)",opacity:1}))),(0,n.eR)("* => void, * => exit",(0,n.jt)("200ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,n.oB)({opacity:0,transform:"scale(1.3)"})))])}},65945:function(t,e,o){o.d(e,{T:function(){return a}});var n=o(37716),i=o(36138),s=o(65014);let a=(()=>{class t{constructor(t,e,o){this.modalRef=t,this._elementRef=e,this._dialogService=o,this.type="button"}ngOnInit(){this.modalRef||(this.modalRef=function(t,e){let o=t.nativeElement.parentElement;for(;o&&!o.classList.contains("nx-modal__container");)o=o.parentElement;return o?e.find(t=>t.id===o.id):null}(this._elementRef,this._dialogService.openModals))}ngOnChanges(t){const e=t.modalResult;e&&(this.modalResult=e.currentValue)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(i.h,8),n.Y36(n.SBq),n.Y36(s.Qv))},t.\u0275dir=n.lG2({type:t,selectors:[["","nxModalClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&n.NdJ("click",function(){return e.modalRef.close(e.modalResult)}),2&t&&n.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",modalResult:["nxModalClose","modalResult"]},features:[n.TTD]}),t})()},89326:function(t,e,o){o.d(e,{I:function(){return n}});class n{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="736px",this.height="",this.maxWidth="736px",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0,this.showCloseIcon=!1,this.closeIconButtonLabel="Close dialog",this.direction="ltr"}}},70371:function(t,e,o){o.d(e,{h:function(){return _}});var n=o(37716),i=o(38583),s=o(62674),a=o(87636),r=o(4765),l=o(89326),c=o(90805);const d=["closeButton"];function h(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",2,3),n.NdJ("click",function(){return n.CHM(t),n.oxw()._closeButtonClick()}),n._UZ(2,"nx-icon",4),n.qZA()}if(2&t){const t=n.oxw();n.uIk("aria-label",t._config.closeIconButtonLabel)}}function u(t,e){}function p(){throw Error("Attempting to attach modal content after content is already attached")}let _=(()=>{class t extends a.en{constructor(t,e,o,i,s,a){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=o,this._config=s,this._focusMonitor=a,this._elementFocusedBeforeDialogWasOpened=null,this._state="enter",this._animationStateChanged=new n.vpe,this._closeButtonClicked=new n.vpe,this.attachDomPortal=t=>(this._portalOutlet.hasAttached()&&p(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachDomPortal(t)),this._ariaLabelledBy=s.ariaLabelledBy||null,this._document=i}ngAfterViewInit(){this._config.showCloseIcon&&this._focusMonitor.monitor(this._closeButton)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._closeButton)}attachComponentPortal(t){return this._portalOutlet.hasAttached()&&p(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached()&&p(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachTemplatePortal(t)}_trapFocus(){const t=this._elementRef.nativeElement;if(this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(t)),this._config.autoFocus)this._focusTrap.focusInitialElementWhenReady();else{const e=this._document.activeElement;e!==t&&!t.contains(e)&&t.focus()}}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=this._document.activeElement,o=this._elementRef.nativeElement;(!e||e===this._document.body||e===o||o.contains(e))&&t.focus()}this._focusTrap&&this._focusTrap.destroy()}_savePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(()=>this._elementRef.nativeElement.focus()))}_onAnimationDone(t){"enter"===t.toState?this._trapFocus():"exit"===t.toState&&this._restoreFocus(),this._animationStateChanged.emit(t)}_onAnimationStart(t){this._animationStateChanged.emit(t)}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_closeButtonClick(){this._closeButtonClicked.emit()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(r.qV),n.Y36(n.sBO),n.Y36(i.K0,8),n.Y36(l.I),n.Y36(r.tE))},t.\u0275cmp=n.Xpm({type:t,selectors:[["nx-modal-container"]],viewQuery:function(t,e){if(1&t&&(n.Gf(a.Pl,7),n.Gf(d,5)),2&t){let t;n.iGM(t=n.CRH())&&(e._portalOutlet=t.first),n.iGM(t=n.CRH())&&(e._closeButton=t.first)}},hostAttrs:["tabindex","-1","aria-modal","true",1,"nx-modal__container"],hostVars:6,hostBindings:function(t,e){1&t&&n.WFA("@modalContainer.start",function(t){return e._onAnimationStart(t)})("@modalContainer.done",function(t){return e._onAnimationDone(t)}),2&t&&(n.uIk("id",e._id)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),n.d8E("@modalContainer",e._state))},features:[n.qOj],decls:2,vars:1,consts:[["class","nx-modal__close","type","button",3,"click",4,"ngIf"],["cdkPortalOutlet",""],["type","button",1,"nx-modal__close",3,"click"],["closeButton",""],["name","close"]],template:function(t,e){1&t&&(n.YNc(0,h,3,1,"button",0),n.YNc(1,u,0,0,"ng-template",1)),2&t&&n.Q6J("ngIf",e._config.showCloseIcon)},directives:[i.O5,a.Pl,c.O],styles:["[_nghost-%COMP%]{background:var(--modal-background-color);color:var(--modal-text-color);padding:40px 40px 48px;border-radius:4px;box-shadow:0 8px 24px #41414159;display:block;position:relative;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (max-width: 703px){[_nghost-%COMP%]{margin:0 8px;padding:40px 32px 48px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{border:2px solid windowText}}  .nx-modal__content{display:block;margin:0 -40px;padding:0 40px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}  .nx-modal__actions{margin-bottom:-48px;margin-left:-40px;margin-right:-40px;height:72px;border-top:1px solid var(--modal-actions-border-color);display:flex;align-items:center;justify-content:flex-end;padding:0 40px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.nx-modal__close[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;position:absolute;top:16px;right:16px;height:24px;outline:none;padding:0;color:var(--modal-close-icon-color)}.nx-modal__close[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{font-size:24px}[dir=rtl][_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%]{right:auto;left:16px}.nx-modal__close[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],data:{animation:[s.v.modalContainer]}}),t})()},36138:function(t,e,o){o.d(e,{h:function(){return l}});var n=o(36461),i=o(79765),s=o(45435),a=o(15257);let r=0;class l{constructor(t,e,o="nx-modal-"+r++){this._overlayRef=t,this._containerInstance=e,this.id=o,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new i.xQ,this._afterClosed=new i.xQ,this._beforeClosed=new i.xQ,this._state=0,e._id=o,e._animationStateChanged.pipe((0,s.h)(t=>"done"===t.phaseName&&"enter"===t.toState),(0,a.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,s.h)(t=>"done"===t.phaseName&&"exit"===t.toState),(0,a.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._overlayRef.dispose()}),e._closeButtonClicked.subscribe(()=>{this.close()}),t.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),t.keydownEvents().pipe((0,s.h)(t=>t.keyCode===n.hY&&!this.disableClose&&!(0,n.Vb)(t))).subscribe(t=>{t.preventDefault(),this.close()})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe((0,s.h)(t=>"start"===t.phaseName),(0,a.q)(1)).subscribe(e=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._state=2,this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>{this._overlayRef.dispose()},e.totalTime+100)}),this._containerInstance._startExitAnimation(),this._state=1}afterOpened(){return this._afterOpened.asObservable()}afterClosed(){return this._afterClosed.asObservable()}beforeClosed(){return this._beforeClosed.asObservable()}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(t){const e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(t="",e=""){return this._getPositionStrategy().width(t).height(e),this._overlayRef.updatePosition(),this}addPanelClass(t){return this._overlayRef.addPanelClass(t),this}removePanelClass(t){return this._overlayRef.removePanelClass(t),this}getState(){return this._state}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}},4422:function(t,e,o){o.d(e,{x$:function(){return y},nU:function(){return w},tY:function(){return O}});var n=o(37716),i=o(17238);const s=(0,i.oQ)([(0,i.oB)({opacity:0}),(0,i.jt)("300ms",(0,i.oB)({opacity:1}))]),a=(0,i.oQ)((0,i.jt)("300ms",(0,i.oB)({opacity:0}))),r=(0,i.oQ)([(0,i.oB)({transform:"scale(1)",opacity:1}),(0,i.jt)("250ms",(0,i.oB)({transform:"scale(1.3)",opacity:0}))]),l=(0,i.oQ)([(0,i.oB)({transform:"scale(1.3)",opacity:0}),(0,i.jt)("250ms",(0,i.oB)({transform:"scale(1)",opacity:1}))]);var c=o(75319),d=o(2825),h=o(39075),u=o(4765),p=o(38583),_=o(75723),f=o(90805);const m=["closeButton"];function g(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"button",8,9),n.NdJ("click",function(){return n.CHM(t),n.oxw().closeButtonClick()}),n._UZ(2,"nx-icon",10),n.qZA()}if(2&t){const t=n.oxw();n.uIk("aria-label",t.closeButtonLabel)}}function x(t,e){1&t&&n.GkF(0)}function b(t,e){if(1&t&&(n.ynx(0),n.YNc(1,x,1,0,"ng-container",11),n.BQk()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",t.body)}}function v(t,e){1&t&&n.Hsn(0)}const C=["*"];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","nxModalActions",""]],hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("nx-modal__actions",!0)}}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","nxModalContent",""]],hostVars:2,hostBindings:function(t,e){2&t&&n.ekj("nx-modal__content",!0)}}),t})(),w=(()=>{class t{constructor(t,e,o,i){this.modalService=t,this.eventManager=e,this._changeDetectorRef=o,this._focusMonitor=i,this._closeButtonLabel="Close dialog",this.hideOnEsc=!0,this.hideOnClickOutside=!0,this.showCloseIcon=!0,this.size="auto",this.closeEvent=new n.vpe,this.closeSubscription=c.w.EMPTY}set closeButtonLabel(t){t!==this._closeButtonLabel&&(this._closeButtonLabel=t,this._changeDetectorRef.markForCheck())}get closeButtonLabel(){return this._closeButtonLabel}ngOnInit(){this.closeSubscription=this.modalService.close$.subscribe(()=>this.closeEvent.emit()),this.removeEventListener=this.eventManager.addGlobalEventListener("window","keyup.esc",()=>{this.hideOnEsc&&this.modalService.close()})}ngAfterViewInit(){this.showCloseIcon&&this._focusMonitor.monitor(this._closeButton)}ngOnDestroy(){this.removeEventListener(),this.closeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._closeButton)}clickOutsideModal(){this.hideOnClickOutside&&this.modalService.close()}closeButtonClick(){this.modalService.close()}cancelClick(t){t.stopPropagation()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.H),n.Y36(h.Qz),n.Y36(n.sBO),n.Y36(u.tE))},t.\u0275cmp=n.Xpm({type:t,selectors:[["nx-modal"]],viewQuery:function(t,e){if(1&t&&n.Gf(m,5),2&t){let t;n.iGM(t=n.CRH())&&(e._closeButton=t.first)}},hostVars:3,hostBindings:function(t,e){2&t&&(n.d8E("@fadeInOut",void 0),n.ekj("nx-modal--fixed-width","fixed"===e.size))},inputs:{closeButtonLabel:"closeButtonLabel",body:["nxBody","body"],hideOnEsc:["nxHideOnEsc","hideOnEsc"],hideOnClickOutside:["nxHideOnClickOutside","hideOnClickOutside"],showCloseIcon:["nxShowCloseIcon","showCloseIcon"],size:["nxSize","size"]},outputs:{closeEvent:"nxClose"},ngContentSelectors:C,decls:9,vars:4,consts:[["role","dialog","cdkTrapFocus","","cdkTrapFocusAutoCapture","","cdkFocusInitial","",1,"nx-modal"],[1,"nx-modal__backdrop",3,"click"],[1,"nx-modal__position"],[1,"nx-modal__container",3,"click"],["class","nx-modal__close","type","button",3,"click",4,"ngIf"],["cdkScrollable","",1,"nx-modal__content-wrapper"],[4,"ngIf","ngIfElse"],["projectContent",""],["type","button",1,"nx-modal__close",3,"click"],["closeButton",""],["name","close"],[4,"ngTemplateOutlet"]],template:function(t,e){if(1&t&&(n.F$t(),n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.NdJ("click",function(){return e.clickOutsideModal()}),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.NdJ("click",function(t){return e.cancelClick(t)}),n.YNc(4,g,3,1,"button",4),n.TgZ(5,"div",5),n.YNc(6,b,2,1,"ng-container",6),n.YNc(7,v,1,0,"ng-template",null,7,n.W1O),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t){const t=n.MAs(8);n.xp6(3),n.Q6J("@scaleUpDown",void 0),n.xp6(1),n.Q6J("ngIf",e.showCloseIcon),n.xp6(2),n.Q6J("ngIf",e.body)("ngIfElse",t)}},directives:[u.mK,p.O5,_.PQ,f.O,p.tP],styles:["[_nghost-%COMP%]{position:relative;z-index:1000}.nx-modal[_ngcontent-%COMP%]{display:flex;position:fixed;width:100vw;height:100vh;top:0;bottom:0;left:0;right:0;z-index:1000;align-items:center;justify-content:center;transition:opacity .3s ease}.nx-modal__backdrop[_ngcontent-%COMP%]{background-color:#00000059;height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.nx-modal__position[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:50%;left:50%;transform:translate(-50%,-50%);z-index:20}.nx-modal__container[_ngcontent-%COMP%]{border-radius:4px;box-shadow:0 8px 24px #41414159;background:var(--modal-background-color);color:var(--modal-text-color)}.nx-modal__content-wrapper[_ngcontent-%COMP%]{padding:40px 40px 48px;max-height:calc(100vh - 48px);overflow-y:auto}@media (max-width: 703px){.nx-modal__content-wrapper[_ngcontent-%COMP%]{max-height:70vh;padding:40px 32px 48px}}.nx-modal__close[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;position:absolute;top:16px;right:16px;height:24px;outline:none;padding:0;color:var(--modal-close-icon-color)}.nx-modal__close[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{font-size:24px}.nx-modal__close[_ngcontent-%COMP%]::-moz-focus-inner{border:0}[dir=rtl][_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-modal__close[_ngcontent-%COMP%]{right:auto;left:16px}.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-modal__close.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media (max-width: 703px){.nx-modal__position[_ngcontent-%COMP%]{width:100%}.nx-modal__container[_ngcontent-%COMP%]{position:relative;max-width:calc(100vw - 16px);max-height:70vh;margin:0 auto}}.nx-modal--fixed-width[_nghost-%COMP%]   .nx-modal__container[_ngcontent-%COMP%]{width:736px;max-width:calc(100vw - 16px)}  .nx-modal__actions{height:72px;border-top:1px solid var(--modal-actions-border-color);display:flex;align-items:center;justify-content:flex-end;padding:0 40px;position:absolute;bottom:0;left:0;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:var(--modal-actions-background-color)}  .nx-modal__content{overflow-y:auto;max-height:calc(100vh - 72px - 48px);padding:0 40px;margin:0 -40px}@media (max-width: 703px){  .nx-modal__content{max-height:calc(70vh - 72px - 48px)}}@media screen and (-ms-high-contrast: active){.nx-modal__content-wrapper[_ngcontent-%COMP%],   .nx-modal__actions{border:2px solid windowText}}"],data:{animation:[(0,i.X$)("fadeInOut",[(0,i.eR)(":enter",[(0,i._7)(s),(0,i.IO)("@scaleUpDown",[(0,i.pV)()])]),(0,i.eR)(":leave",[(0,i.IO)("@scaleUpDown",[(0,i.pV)()]),(0,i._7)(a)])]),(0,i.X$)("scaleUpDown",[(0,i.eR)(":enter",(0,i._7)(l)),(0,i.eR)(":leave",(0,i._7)(r))])]},changeDetection:0}),t})()},81543:function(t,e,o){o.d(e,{$:function(){return h}});var n=o(42677),i=o(38583),s=o(2825),a=o(4765),r=o(58203),l=o(87636),c=o(65014),d=o(37716);let h=(()=>{class t{static forRoot(){return{ngModule:t,providers:[s.H]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[c.Qv,c.N],imports:[[a.rt,r.U8,l.eL,i.ez,n.cf]]}),t})()},2825:function(t,e,o){o.d(e,{H:function(){return s}});var n=o(79765),i=o(37716);let s=(()=>{class t{constructor(){this.subject=new n.xQ,this.close$=this.subject.asObservable()}close(){this.subject.next()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})()},62056:function(t,e,o){o.d(e,{$w:function(){return n.$},Qv:function(){return i.Qv}});var n=o(81543),i=(o(4422),o(70371),o(65945),o(65014));o(62674)}}]);