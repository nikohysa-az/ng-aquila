"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[3698],{9508:(E,m,o)=>{o.d(m,{f:()=>C});var f=o(7146),e=o(303),g=o(5552),h=o(9823),v=o(9808),u=o(3075),p=o(5e3);let C=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275mod=p.oAB({type:l}),l.\u0275inj=p.cJS({imports:[[],v.ez,u.u5,u.UX,h.ru,g.X,e.K,f.TW]}),l})()},4608:(E,m,o)=>{o.d(m,{iQ:()=>S,mr:()=>A,u7:()=>w});var f=o(3191),e=o(5e3),g=o(2654),h=o(8929),v=o(6787),u=o(1059),p=o(7625),C=o(3164),l=o(8583),_=o(1314),P=o(7429),y=o(4359),x=o(3252),b=o(5423),M=o(6729),O=o(9808),D=o(3412);const R=["popover"];function z(i,s){1&i&&(e.TgZ(0,"div",2),e.Hsn(1,2),e.qZA())}const T=[[["nx-dropdown"]],[["","nxError",""]],[["","nxInput",""]]],W=["nx-dropdown","[nxError]","[nxInput]"],L=["*"];let w=(()=>{class i{constructor(t,n,r,a,d,c){this.elementRef=t,this._cdr=n,this._renderer=r,this._overlay=a,this._viewContainerRef=d,this._overlayPositionBuilder=c,this.subscription=g.w.EMPTY,this.subscriptionValues=g.w.EMPTY,this.inputChanges=new h.xQ,this._hasErrors=!1,this.currentTextWidth=0,this.size="regular",this.label=""}ngOnInit(){this.setupErrorPopover()}ngAfterContentInit(){this._validateControlChild(),this.subscription=this._control.stateChanges.pipe((0,u.O)(null)).subscribe(()=>{this._hasErrors=this._control.errorState,this.updateErrorPopoverState(),this._cdr.markForCheck()}),this.subscriptionValues=this._control.ngControl?this._control.ngControl.valueChanges.subscribe(t=>{this.updateCurrentTextWidth(),this.inputChanges.next()}):this._control.stateChanges.subscribe(t=>{this.updateCurrentTextWidth(),this.inputChanges.next()}),this._control.setAriaLabel(this.label)}ngOnDestroy(){this._overlayRef&&this._overlayRef.dispose(),this.subscription.unsubscribe()}updateCurrentTextWidth(){this.measureCanvas||(this.measureCanvas=this._renderer.createElement("canvas"));const t=this.measureCanvas.getContext("2d"),r=window.getComputedStyle(this._control.elementRef.nativeElement);t.font=(0,b.N1)(r);const d=t.measureText(this._control.value).width+parseInt(r.paddingRight,10)+parseInt(r.paddingLeft,10)+1,N=this.elementRef.nativeElement.parentElement.getBoundingClientRect();this.currentTextWidth=Math.max(parseInt(r.minWidth,10),d),this.currentTextWidth=Math.min(this.currentTextWidth,N.width),this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}repositionError(){this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}_validateControlChild(){if(!this._control)throw new Error("NxWordComponent requires an NxFormfieldControl compatible input.")}getConnectedOverlayOrigin(){return this.elementRef}get isFocused(){return this._control.focused}get isFilled(){return!this._control.empty}get hasDropdown(){return Boolean(this._dropdown)}updateErrorPopoverState(){this._hasErrors&&this._errorChildren.length>0?this.showPopover():this.hidePopover()}setupErrorPopover(){const t=this._overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withLockedPosition(!0).withFlexibleDimensions(!1).withPush(!0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}]).withDefaultOffsetY(-8);this._overlayState=new _.X_,this._overlayState.positionStrategy=t,this._overlayState.scrollStrategy=this._overlay.scrollStrategies.reposition(),this._overlayRef=this._overlay.create(this._overlayState),this._overlayState.positionStrategy.positionChanges.subscribe(n=>{this.positionArrow(n.connectionPair),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}positionArrow(t){const c=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this._overlayRef.overlayElement.parentElement.offsetLeft+this._overlayRef.overlayElement.offsetLeft);this._popover.direction="top"===t.originY&&"bottom"===t.overlayY?"top":"bottom",this._popover.arrowStyle={left:c+"px"}}showPopover(){if(!this._overlayRef.hasAttached()){const t=new P.UE(this._popover.templateRef,this._viewContainerRef);this._embeddedViewRef=this._overlayRef.attach(t)}}hidePopover(){this._overlayRef.detach()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(_.aV),e.Y36(e.s_b),e.Y36(_.wJ))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nx-word"]],contentQueries:function(t,n,r){if(1&t&&(e.Suo(r,x.iC,5),e.Suo(r,y.Uu,5),e.Suo(r,x.Sr,4)),2&t){let a;e.iGM(a=e.CRH())&&(n._control=a.first),e.iGM(a=e.CRH())&&(n._dropdown=a.first),e.iGM(a=e.CRH())&&(n._errorChildren=a)}},viewQuery:function(t,n){if(1&t&&e.Gf(R,7),2&t){let r;e.iGM(r=e.CRH())&&(n._popover=r.first)}},hostVars:16,hostBindings:function(t,n){2&t&&(e.Udp("width",n.currentTextWidth,"px"),e.ekj("size-short","short"==n.size)("size-regular","regular"==n.size)("size-long","long"==n.size)("has-error",n._hasErrors)("is-focused",n.isFocused)("is-filled",n.isFilled)("has-dropdown",n.hasDropdown))},inputs:{size:["nxSize","size"],label:["nxLabel","label"]},ngContentSelectors:W,decls:6,vars:1,consts:[["class","nx-word__inner-wrapper",4,"ngIf"],["popover",""],[1,"nx-word__inner-wrapper"]],template:function(t,n){1&t&&(e.F$t(T),e.TgZ(0,"div"),e.YNc(1,z,2,0,"div",0),e.Hsn(2),e.qZA(),e.TgZ(3,"nx-popover",null,1),e.Hsn(5,1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!n.hasDropdown))},directives:[M.NE,O.O5],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;font-weight:400;text-align:center;-webkit-hyphens:none;hyphens:none;width:100%;margin:0 4px}[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:var(--natural-language-form-border-color)}.size-short[_nghost-%COMP%]{min-width:80px}.size-regular[_nghost-%COMP%]{min-width:152px}.size-long[_nghost-%COMP%]{min-width:360px}@media (max-width: 991px){.size-long[_nghost-%COMP%]{min-width:280px}}@media (max-width: 703px){.size-long[_nghost-%COMP%]{min-width:248px}}[_nghost-%COMP%]     .c-input{display:inline-block;text-align:inherit;font-size:inherit;line-height:inherit;background:0 0;color:inherit;border:none;outline:0;margin:0;width:100%;max-width:100%;height:auto;box-shadow:none;padding:0 8px}[_nghost-%COMP%]     .c-input.is-focused{outline:none;box-shadow:none}[_nghost-%COMP%]     .c-input.is-filled, [_nghost-%COMP%]     .c-input.is-focused{color:var(--natural-language-form-active-color);font-weight:400}[_nghost-%COMP%]     .c-input.is-disabled{cursor:not-allowed}[_nghost-%COMP%]     .c-input::-ms-clear{display:none}[_nghost-%COMP%]     nx-dropdown{position:relative;border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:var(--natural-language-form-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:inherit;margin-bottom:-nx-spacer(4xs)}@media (max-width: 991px){[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:26px}}[_nghost-%COMP%]     nx-dropdown.is-filled, [_nghost-%COMP%]     nx-dropdown.has-focus{color:var(--natural-language-form-active-color);border-color:var(--natural-language-form-active-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__icon{line-height:inherit}[_nghost-%COMP%]     .nx-word__input-wrapper{width:100%}.is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-filled[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-active-border-color)}.has-error[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     nx-dropdown{color:var(--natural-language-form-error-color);border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     .c-input.has-error{color:var(--natural-language-form-error-color)}.is-negative[_nghost-%COMP%]     .nx-dropdown, .is-negative   [_nghost-%COMP%]     .nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown, .is-negative   [_nghost-%COMP%]     nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown.is-filled, .is-negative   [_nghost-%COMP%]     nx-dropdown.is-filled{border-color:var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]     .c-input, .is-negative   [_nghost-%COMP%]     .c-input, .is-negative[_nghost-%COMP%]     .c-input.has-error, .is-negative   [_nghost-%COMP%]     .c-input.has-error{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-negative   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--negative)}.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-large-line-height)}@media (max-width: 991px){.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}}.nx-natural-language-form--small[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .nx-natural-language-form--small   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}@media screen and (-ms-high-contrast: active){.nx-word__inner-wrapper[_ngcontent-%COMP%],   nx-dropdown{border-bottom-color:buttonText!important}.is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]     nx-dropdown{border-bottom-color:highlight!important}}"],changeDetection:0}),i})(),A=(()=>{class i{constructor(t,n){this._cdr=t,this._ngZone=n,this._negative=!1,this.resizeEvent$=new h.xQ,this._destroyed=new h.xQ,this.updatePopoversSubscription=g.w.EMPTY,this._size="large",this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe((0,p.R)(this._destroyed)).subscribe(()=>{this.updatePositionPopovers()})})}set negative(t){this._negative=(0,f.Ig)(t)}get negative(){return this._negative}set size(t){this._size=t,this._cdr.markForCheck()}get size(){return this._size}onResize(t){this.resizeEvent$.next()}ngAfterContentInit(){const t=this._words.map(r=>r.inputChanges),n=(0,v.T)(...t);this.updatePopoversSubscription=n.subscribe(()=>{this.updatePositionPopovers()}),this.resizeObservable=this.resizeEvent$.pipe((0,C.p)(500),(0,l.g)(100)),this.resizeObservable.subscribe(()=>this.resizeWords())}resizeWords(){this._words.forEach(t=>{t.updateCurrentTextWidth()})}ngOnDestroy(){this.updatePopoversSubscription.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}updatePositionPopovers(){this._words&&this._words.forEach(t=>{t.repositionError()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(e.R0b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nx-natural-language-form"]],contentQueries:function(t,n,r){if(1&t&&e.Suo(r,w,4),2&t){let a;e.iGM(a=e.CRH())&&(n._words=a)}},hostVars:6,hostBindings:function(t,n){1&t&&e.NdJ("orientationchange",function(a){return n.onResize(a)},!1,e.Jf7)("resize",function(a){return n.onResize(a)},!1,e.Jf7),2&t&&e.ekj("is-negative",n.negative)("nx-natural-language-form--small","small"===n.size)("nx-natural-language-form--large","large"===n.size)},inputs:{negative:["nxNegative","negative"],size:"size"},ngContentSelectors:L,decls:2,vars:0,consts:[[1,"nx-natural-language-form__wrapper"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]{display:block;font-size:var(--natural-language-form-large-font-size);line-height:var(--natural-language-form-large-line-height);font-weight:var(--natural-language-form-large-font-weight);letter-spacing:var(--natural-language-form-large-letter-spacing);color:var(--natural-language-form-text-color);padding-top:72px;padding-bottom:80px}[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}[_nghost-%COMP%]     nx-word+nx-word{margin-left:2px}[dir=rtl]   [_nghost-%COMP%]     nx-word+nx-word{margin-right:2px;margin-left:0;margin-left:initial}.is-negative[_nghost-%COMP%]{color:var(--negative)}@media (max-width: 991px){[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}}.nx-natural-language-form__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-natural-language-form__wrapper[_ngcontent-%COMP%] >   *{margin-bottom:8px}.nx-natural-language-form--small[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}.nx-natural-language-form--small[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}"],changeDetection:0}),i})(),S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[O.ez,D.ZI,M.Fc]]}),i})()}}]);