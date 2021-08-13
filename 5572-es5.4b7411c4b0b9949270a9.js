!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[5572],{97455:function(e,t,n){n.d(t,{e:function(){return p}});var s,a=n(37716),l=n(36461),r=n(39490),c=["*"],u=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(this,e),this.source=t,this.isUserInput=n},h=0,p=((s=function(){function e(t,n){o(this,e),this.elementRef=t,this._changeDetectorRef=n,this._id="nx-autocomplete-option-"+h++,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new a.vpe}return i(e,[{key:"id",get:function(){return this._id}},{key:"selected",get:function(){return this._selected}},{key:"active",get:function(){return this._active}},{key:"disabled",get:function(){return this._disabled},set:function(e){var t=(0,r.Ig)(e);this._disabled!==t&&(this._disabled=t)}},{key:"_handleKeydown",value:function(e){(e.keyCode===l.K5||e.keyCode===l.L_)&&(this._selectViaInteraction(),e.preventDefault())}},{key:"_selectViaInteraction",value:function(){this.disabled||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}},{key:"_getTabIndex",value:function(){return this.disabled?"-1":"0"}},{key:"_emitSelectionChangeEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.onSelectionChange.emit(new u(this,e))}},{key:"viewValue",get:function(){return(this.elementRef.nativeElement.textContent||"").trim()}},{key:"setActiveStyles",value:function(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}},{key:"setInactiveStyles",value:function(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}},{key:"getLabel",value:function(){return this.viewValue}},{key:"select",value:function(){this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}},{key:"deselect",value:function(){this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}},{key:"focus",value:function(){var e=this.elementRef.nativeElement;"function"==typeof e.focus&&e.focus()}}]),e}()).\u0275fac=function(e){return new(e||s)(a.Y36(a.SBq),a.Y36(a.sBO))},s.\u0275cmp=a.Xpm({type:s,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(e,t){1&e&&a.NdJ("click",function(){return t._selectViaInteraction()})("keydown",function(e){return t._handleKeydown(e)}),2&e&&(a.Ikx("id",t.id),a.uIk("tabindex",t._getTabIndex())("aria-selected",t.selected.toString())("aria-disabled",t.disabled.toString()),a.Udp("display","block"),a.ekj("nx-active",t.active)("nx-disabled",t.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:c,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.Hsn(2),a.qZA(),a.qZA()),2&e&&a.ekj("nx-active",t.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px}}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}"],changeDetection:0}),s)},7826:function(t,n,s){s.d(n,{Kl:function(){return E}});var a,l=s(39490),r=s(36461),c=s(58203),u=s(87636),h=s(38583),p=s(37716),_=s(3679),d=s(75319),m=s(79765),f=s(41439),v=s(66682),g=s(25917),y=s(22759),b=s(15257),x=s(43190),C=s(45435),k=s(54395),w=s(28049),O=s(93342),S=s(71289),P=s(75723),F=s(70946),A=s(95599),M=s(20409),R={provide:_.JU,useExisting:(0,p.Gpc)(function(){return E}),multi:!0},E=((a=function(){function t(n,i,s,a,l,r,c,u,h,p){var _=this;o(this,t),this._element=n,this._overlay=i,this._viewContainerRef=s,this._zone=a,this._changeDetectorRef=l,this._dir=r,this._nxFormField=c,this._nxWordField=u,this._document=h,this._viewportRuler=p,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=d.w.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new m.xQ,this._valueChanges=new m.xQ,this._dirChangeSubscription=d.w.EMPTY,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=(0,f.P)(function(){return _.autocomplete&&_.autocomplete.options?v.T.apply(void 0,e(_.autocomplete.options.map(function(e){return e.onSelectionChange}))):_._zone.onStable.asObservable().pipe((0,b.q)(1),(0,x.w)(function(){return _.optionSelections}))}),this._windowBlurHandler=function(){_._canOpenOnNextFocus=document.activeElement!==_._element.nativeElement||_.panelOpen},this._onChange=function(e){_._valueChanges.next(e)},this._onTouched=function(){},"undefined"!=typeof window&&a.runOutsideAngular(function(){window.addEventListener("blur",_._windowBlurHandler)})}return i(t,[{key:"itemsCb",get:function(){return this._itemsCb},set:function(e){if("function"!=typeof e)throw new Error("Wrong value type for nxAutocompleteItems");this._itemsCb=e}},{key:"debounce",set:function(e){this._debounce=(0,l.su)(e)}},{key:"autocompleteDisabled",get:function(){return this._autocompleteDisabled},set:function(e){this._autocompleteDisabled=e,this._bindAutocompleteItems()}},{key:"panelOpen",get:function(){return this._overlayAttached&&this.autocomplete.showPanel}},{key:"activeOption",get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}},{key:"_outsideClickStream",get:function(){var e=this;return this._document?(0,v.T)((0,y.R)(this._document,"mouseup"),(0,y.R)(this._document,"touchend")).pipe((0,C.h)(function(t){var n=t.target,i=e._formField?e._formField.elementRef.nativeElement:null;return e._overlayAttached&&n!==e._element.nativeElement&&(!i||!i.contains(n))&&!!e._overlayRef&&!e._overlayRef.overlayElement.contains(n)})):(0,g.of)(null)}},{key:"_formField",get:function(){return this._nxFormField?this._nxFormField:this._nxWordField}},{key:"ngOnInit",value:function(){var e=this;this._dirChangeSubscription=this._dir.change.subscribe(function(){e._flipDirection(),e._changeDetectorRef.markForCheck()})}},{key:"ngOnDestroy",value:function(){var e,t,n;"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),null===(e=this._controlValueChangesSubscription)||void 0===e||e.unsubscribe(),null===(t=this._itemsSubscription)||void 0===t||t.unsubscribe(),null===(n=this._dirChangeSubscription)||void 0===n||n.unsubscribe()}},{key:"ngOnChanges",value:function(){this._bindAutocompleteItems()}},{key:"ngAfterViewInit",value:function(){this._bindAutocompleteItems()}},{key:"_bindAutocompleteItems",value:function(){var e=this;if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),"function"==typeof this._itemsCb&&this.autocomplete&&!this.autocompleteDisabled){var t=new m.xQ;this.autocomplete.items=t,this._controlValueChangesSubscription=(this._formField&&this._formField._control&&this._formField._control.ngControl&&this._formField._control.ngControl.valueChanges?this._formField._control.ngControl.valueChanges:this._valueChanges).pipe((0,k.b)(this._debounce)).subscribe(function(n){e._itemsSubscription&&e._itemsSubscription.unsubscribe(),e._itemsSubscription=e._itemsCb(n).pipe((0,w.P)()).subscribe(function(e){t.next(e)},function(e){t.next([])})})}}},{key:"openPanel",value:function(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}},{key:"closePanel",value:function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}},{key:"panelClosingActions",get:function(){var e=this;return(0,v.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,C.h)(function(){return e._overlayAttached})),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe((0,C.h)(function(){return e._overlayAttached})):(0,g.of)())}},{key:"writeValue",value:function(e){var t=this;Promise.resolve(null).then(function(){return t._setTriggerValue(e)})}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this._element.nativeElement.disabled=e}},{key:"_handleKeydown",value:function(e){var t=e.keyCode;if(t===r.hY&&e.preventDefault(),this.panelOpen&&(t===r.hY||t===r.LH&&e.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),e.stopPropagation();else if(this.activeOption&&t===r.K5&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else{var n=this.autocomplete._keyManager.activeItem,i=t===r.LH||t===r.JH;this.panelOpen||t===r.Mf?this.autocomplete._keyManager.onKeydown(e):i&&this._isFieldEnabled()&&this.openPanel(),(i||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption()}}},{key:"_handleInput",value:function(e){var t=e.target,n=t.value;"number"===t.type&&(n=""===n?null:parseFloat(n)),this._isFieldEnabled()&&this._previousValue!==n&&document.activeElement===e.target&&(this._previousValue=n,this._onChange(n),this.openPanel())}},{key:"_handleFocus",value:function(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}},{key:"_floatLabel",value:function(){this._nxFormField&&"auto"===this._nxFormField.floatLabel&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}},{key:"_resetLabel",value:function(){this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}},{key:"_scrollToOption",value:function(){if(0!==this.autocomplete.options.length){var e=0,t=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(e=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);var n=this.autocomplete.panel.nativeElement.offsetTop,i=function(e,t,n,i){return e<n?e:e+t>n+i?Math.max(0,e-i+t):n}(e,t,this.autocomplete._getScrollTop()+n,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(i-n)}}},{key:"_subscribeToClosingActions",value:function(){var e=this,t=this._zone.onStable.asObservable().pipe((0,b.q)(1)),n=this.autocomplete.options.changes.pipe((0,O.b)(function(){return e._positionStrategy.reapplyLastPosition()}),(0,S.g)(0));return(0,v.T)(t,n).pipe((0,x.w)(function(){return e._resetActiveItem(),e.autocomplete._setVisibility(),e.panelClosingActions}),(0,b.q)(1)).subscribe(function(t){return e._setValueAndClose(t)})}},{key:"_destroyPanel",value:function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}},{key:"_setTriggerValue",value:function(e){var t=this.autocomplete&&this.autocomplete.valueFormatter?this.autocomplete.valueFormatter(e):e,n=null!=t?t:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n}},{key:"_setValueAndClose",value:function(e){e&&e.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}},{key:"_clearPreviousSelectedOption",value:function(e){this.autocomplete.options.forEach(function(t){t!==e&&t.selected&&t.deselect()})}},{key:"_attachOverlay",value:function(){var e=this;if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new u.UE(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(function(){e.panelOpen&&e._overlayRef&&e._overlayRef.updateSize({minWidth:e._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}},{key:"_getOverlayConfig",value:function(){var e;return new c.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),minWidth:this._getHostWidth(),direction:(null===(e=this._dir)||void 0===e?void 0:e.value)||"ltr"})}},{key:"_getOverlayPosition",value:function(){var e,t="rtl"===(null===(e=this._dir)||void 0===e?void 0:e.value)?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(t).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}},{key:"_scrollStrategy",value:function(){return this._overlay.scrollStrategies.reposition()}},{key:"_getConnectedElement",value:function(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}},{key:"_getHostWidth",value:function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}},{key:"_resetActiveItem",value:function(){this.autocomplete._keyManager.setActiveItem(-1)}},{key:"_isFieldEnabled",value:function(){var e=this._element.nativeElement;return!e.readOnly&&!e.disabled}},{key:"_flipDirection",value:function(){var e,t;null===(e=this._overlayRef)||void 0===e||e.setDirection(this._dir.value),null===(t=this._overlayRef)||void 0===t||t.updatePositionStrategy(this._getOverlayPosition())}}]),t}()).\u0275fac=function(e){return new(e||a)(p.Y36(p.SBq),p.Y36(c.aV),p.Y36(p.s_b),p.Y36(p.R0b),p.Y36(p.sBO),p.Y36(F.Is),p.Y36(A.VM,9),p.Y36(M.u7,9),p.Y36(h.K0,8),p.Y36(P.rL))},a.\u0275dir=p.lG2({type:a,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(e,t){1&e&&p.NdJ("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(e){return t._handleInput(e)})("keydown",function(e){return t._handleKeydown(e)}),2&e&&p.uIk("aria-activedescendant",null==t.activeOption?null:t.activeOption.id)("aria-expanded",t.panelOpen.toString())("aria-owns",null==t.autocomplete?null:t.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[p._Bn([R]),p.TTD]}),a)},80829:function(e,t,n){n.d(t,{E:function(){return y}});var s=n(4765),a=n(37716),l=n(97455),r=n(67574),c=n(95599),u=n(38583),h=["panel"];function p(e,t){if(1&e&&(a.TgZ(0,"nx-autocomplete-option",4),a._uU(1),a.qZA()),2&e){var n=t.$implicit;a.Q6J("value",n),a.xp6(1),a.hij(" ",n," ")}}function _(e,t){if(1&e&&(a.ynx(0),a.YNc(1,p,2,2,"nx-autocomplete-option",3),a.BQk()),2&e){var n=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",n.items)}}function d(e,t){1&e&&(a.ynx(0),a.Hsn(1),a.BQk())}function m(e,t){if(1&e&&(a.TgZ(0,"div",0,1),a.YNc(2,_,2,1,"ng-container",2),a.YNc(3,d,2,0,"ng-container",2),a.qZA()),2&e){var n=a.oxw();a.ekj("nx-autocomplete-panel--in-outline-field",n._isInOutlineField),a.Q6J("id",n.id)("ngClass",n._classList),a.xp6(2),a.Q6J("ngIf",n.hasItems),a.xp6(1),a.Q6J("ngIf",!n.hasItems)}}var f=["*"],v=0,g=function e(t,n){o(this,e),this.source=t,this.option=n},y=function(){var e=function(){function e(t,n,i){o(this,e),this._changeDetectorRef=t,this._elementRef=n,this.formFieldComponent=i,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new a.vpe,this.opened=new a.vpe,this.closed=new a.vpe,this._classList={},this.id="nx-autocomplete-"+v++,this.valueFormatter=function(e){return e?e.toString():null}}return i(e,[{key:"isOpen",get:function(){return this._isOpen&&this.showPanel}},{key:"items",get:function(){return this._items},set:function(e){var t=this;if(this._hasItems=!0,Array.isArray(e))this._items=e;else if(e instanceof r.y)this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=e.subscribe(function(e){t._items=e,t._changeDetectorRef.markForCheck(),setTimeout(function(){return t._setVisibility()})});else{if(null!==e)throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>");this._items=e}}},{key:"hasItems",get:function(){return this._hasItems}},{key:"options",get:function(){return this.hasItems?this._vOptions:this._cOptions}},{key:"classList",set:function(e){var t=this;e&&e.length&&(e.split(" ").forEach(function(e){return t._classList[e.trim()]=!0}),this._elementRef.nativeElement.className="")}},{key:"ngAfterViewInit",value:function(){this._keyManager=new s.s1(this.options).withWrap(),this._setVisibility()}},{key:"ngOnDestroy",value:function(){this._itemsSubscription&&this._itemsSubscription.unsubscribe()}},{key:"_setScrollTop",value:function(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}},{key:"_getScrollTop",value:function(){return this.panel?this.panel.nativeElement.scrollTop:0}},{key:"_setVisibility",value:function(){this.showPanel=!(!this.options||!this.options.length),this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._changeDetectorRef.markForCheck()}},{key:"_emitSelectEvent",value:function(e){var t=new g(this,e);this.optionSelected.emit(t)}},{key:"_isInOutlineField",get:function(){return null!==this.formFieldComponent&&"outline"===this.formFieldComponent.appearance}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.sBO),a.Y36(a.SBq),a.Y36(c.VM,8))},e.\u0275cmp=a.Xpm({type:e,selectors:[["nx-autocomplete"]],contentQueries:function(e,t,n){var i;(1&e&&a.Suo(n,l.e,5),2&e)&&(a.iGM(i=a.CRH())&&(t._cOptions=i))},viewQuery:function(e,t){var n;(1&e&&(a.Gf(a.Rgc,5),a.Gf(h,5),a.Gf(l.e,5)),2&e)&&(a.iGM(n=a.CRH())&&(t.template=n.first),a.iGM(n=a.CRH())&&(t.panel=n.first),a.iGM(n=a.CRH())&&(t._vOptions=n))},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:f,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(a.F$t(),a.YNc(0,m,4,6,"ng-template"))},directives:[u.mk,u.O5,u.sg,l.e],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:0 2px 4px #41414180;overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (-ms-high-contrast: active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px windowText}}"],changeDetection:0}),e}()},55572:function(e,t,n){n.d(t,{_R:function(){return c}});var i,s=n(4765),a=n(58203),l=n(38583),r=n(37716),c=((i=function e(){o(this,e)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[l.ez,a.U8,s.rt]]}),i);n(80829),n(7826)}}])}();