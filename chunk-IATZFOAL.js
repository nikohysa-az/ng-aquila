import{a as Me}from"./chunk-IFHU6E2Z.js";import{b as Ee}from"./chunk-K6OVDSKW.js";import{j}from"./chunk-3NOR76Y5.js";import{a as Ae}from"./chunk-3IMO4XDX.js";import{c as Oe,g as we,m as Pe,p as P,s as Se}from"./chunk-BEZOOHB2.js";import{a as xe}from"./chunk-25NSX5VO.js";import{i as ge,o as ye,y as Ce}from"./chunk-CTAMBHIU.js";import{a as ve,b as be}from"./chunk-ULYGIILG.js";import{B as fe,d as ue,l as de,n as me,o as _e}from"./chunk-ZT3EPJ7I.js";import{$b as L,Ac as _,B as U,Db as R,Eb as h,Fb as ne,Gb as y,H as Y,J as E,Jb as se,Kb as C,L as p,Lb as x,M as f,Mb as O,Ob as T,Pb as D,Q as z,S as X,Sb as le,U as g,W as $,Yb as k,_b as V,ac as N,da as M,ea as F,fc as ae,ga as q,hc as re,ja as G,jc as ce,k as K,m as Q,ma as Z,mb as v,n as c,qa as J,s as A,tb as u,ua as I,ub as a,va as ee,wa as te,wb as b,wc as he,xc as m,ya as ie,yb as d,yc as w,zb as oe,zc as pe}from"./chunk-KKDUGSQP.js";var Fe=["*"],We=["panel"];function Ke(n,o){if(n&1&&(x(0,"nx-autocomplete-option",4),ae(1),O()),n&2){let l=o.$implicit;h("value",l),u(1),re(" ",l," ")}}function Qe(n,o){if(n&1&&(T(0),C(1,Ke,2,2,"nx-autocomplete-option",3),D()),n&2){let l=V(2);u(1),h("ngForOf",l.items)}}function Ue(n,o){n&1&&(T(0),N(1),D())}function Ye(n,o){if(n&1&&(x(0,"div",0,1),C(2,Qe,2,1,"ng-container",2)(3,Ue,2,0,"ng-container",2),O()),n&2){let l=V();y("nx-autocomplete-panel--in-outline-field",l._isInOutlineField),h("id",l.id)("ngClass",l._classList),u(2),h("ngIf",l.hasItems),u(1),h("ngIf",!l.hasItems)}}var B=class{constructor(o,l=!1){this.source=o,this.isUserInput=l}},ze=0,H=(()=>{let o=class o{get id(){return this._id}get selected(){return this._selected}get active(){return this._active}set disabled(e){let t=ve(e);this._disabled!==t&&(this._disabled=t)}get disabled(){return this._disabled}constructor(e,t){this.elementRef=e,this._cdr=t,this._id=`nx-autocomplete-option-${ze++}`,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new d}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new B(this,e))}get viewValue(){return(this.elementRef.nativeElement.textContent||"").trim()}setActiveStyles(){this._active||(this._active=!0,this._cdr.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._cdr.markForCheck())}getLabel(){return this.viewValue}select(){this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}deselect(){this._selected=!1,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}focus(){let e=this.elementRef.nativeElement;typeof e.focus=="function"&&e.focus()}};o.\u0275fac=function(t){return new(t||o)(a(v),a(b))},o.\u0275cmp=I({type:o,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(t,i){t&1&&k("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(le("id",i.id),R("tabindex",i._getTabIndex())("aria-selected",i.selected.toString())("aria-disabled",i.disabled.toString()),ne("display","block"),y("nx-active",i.active)("nx-disabled",i.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:Fe,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(t,i){t&1&&(L(),x(0,"div",0)(1,"div",1),N(2),O()()),t&2&&y("nx-active",i.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (forced-colors: active),(forced-colors: active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (forced-colors: active){[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{forced-colors-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}[_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (forced-colors: active){[_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px;forced-color-adjust:none}}@media screen and (forced-colors: active){.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:GrayText}}.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{cursor:not-allowed}.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-text-color-disabled)}"],changeDetection:0});let n=o;return n})(),Xe=0,W=class{constructor(o,l){this.source=o,this.option=l}},Tt=(()=>{let o=class o{get isOpen(){return this._isOpen&&this.showPanel}set items(e){if(this._hasItems=!0,Array.isArray(e))this._items=e;else if(e instanceof Q)this._itemsSubscription?.unsubscribe(),this._itemsSubscription=e.subscribe(t=>{this._items=t,this._cdr.markForCheck(),setTimeout(()=>this._setVisibility())});else if(e===null)this._items=e;else throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>")}get items(){return this._items}get hasItems(){return this._hasItems}get options(){return this.hasItems?this._vOptions:this._cOptions}set classList(e){e?.length&&(e.split(" ").forEach(t=>this._classList[t.trim()]=!0),this._elementRef.nativeElement.className="")}constructor(e,t,i){this._cdr=e,this._elementRef=t,this.formFieldComponent=i,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new d,this.opened=new d,this.closed=new d,this._classList={},this.id=`nx-autocomplete-${Xe++}`,this._destroyed=new c,this.valueFormatter=s=>s?s.toString():null}ngAfterViewInit(){this._keyManager=new ye(this.options).withWrap(),this._setVisibility()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._itemsSubscription?.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._cdr.markForCheck()}_emitSelectEvent(e){let t=new W(this,e);this.optionSelected.emit(t)}get _isInOutlineField(){return this.formFieldComponent!==null&&this.formFieldComponent.appearance==="outline"}};o.\u0275fac=function(t){return new(t||o)(a(b),a(v),a(j,8))},o.\u0275cmp=I({type:o,selectors:[["nx-autocomplete"]],contentQueries:function(t,i,s){if(t&1&&pe(s,H,5),t&2){let r;m(r=_())&&(i._cOptions=r)}},viewQuery:function(t,i){if(t&1&&(w(he,5),w(We,5),w(H,5)),t&2){let s;m(s=_())&&(i.template=s.first),m(s=_())&&(i.panel=s.first),m(s=_())&&(i._vOptions=s)}},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:"valueFormatter"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:Fe,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,i){t&1&&(L(),C(0,Ye,4,6,"ng-template"))},dependencies:[de,me,_e,H],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:var(--shadow-small);overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (forced-colors: active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px CanvasText}}"],changeDetection:0});let n=o;return n})(),$e={provide:Ae,useExisting:G(()=>Je),multi:!0},Ie=new J("nx-autocomplete-scroll-strategy");function qe(n){return()=>n.scrollStrategies.reposition()}var Ge={provide:Ie,useFactory:qe,deps:[P]};function Ze(){return Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}var Je=(()=>{let o=class o{set itemsCb(e){if(typeof e=="function")this._itemsCb=e;else throw new Error("Wrong value type for nxAutocompleteItems")}get itemsCb(){return this._itemsCb}set debounce(e){this._debounce=be(e)}set autocompleteDisabled(e){this._autocompleteDisabled=e,this._bindAutocompleteItems()}get autocompleteDisabled(){return this._autocompleteDisabled}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}get activeOption(){return this.autocomplete?._keyManager?this.autocomplete._keyManager.activeItem:null}get _outsideClickStream(){return this._document?p(E(this._document,"mouseup"),E(this._document,"touchend")).pipe(U(e=>ge(e)),f(e=>{let t=e,i=this._formField?this._formField.elementRef.nativeElement:null;return this._overlayAttached&&!this._element.nativeElement.contains(e)&&(!i||!i.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)})):A(null)}get _formField(){return this._nxFormField?this._nxFormField:this._nxWordField}constructor(e,t,i,s,r,Re,Te,De,ke,Ve,Le,Ne){this._element=e,this._overlay=t,this._viewContainerRef=i,this._zone=s,this._cdr=r,this._dir=Re,this._autofillMonitor=Te,this._nxFormField=De,this._nxWordField=ke,this._document=Ve,this._defaultScrollStrategyFactory=Le,this._viewportRuler=Ne,this._componentDestroyed=!1,this._isAutofill=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=K.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new c,this._valueChanges=new c,this._scrollStrategyFactory=this._defaultScrollStrategyFactory,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=Y(()=>this.autocomplete?.options?p(...this.autocomplete.options.map(S=>S.onSelectionChange)):this._zone.onStable.asObservable().pipe(g(1),M(()=>this.optionSelections))),this._destroyed=new c,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=S=>{this._valueChanges.next(S)},this._onTouched=()=>{},typeof window<"u"&&s.runOutsideAngular(()=>{window.addEventListener("blur",this._windowBlurHandler)})}ngOnInit(){this._dir.change.pipe(F(this._destroyed)).subscribe(()=>{this._flipDirection(),this._cdr.markForCheck()}),this._autofillMonitor.monitor(this._element.nativeElement).pipe(F(this._destroyed)).subscribe(e=>{this._isAutofill=e.isAutofilled})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),typeof window<"u"&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._controlValueChangesSubscription?.unsubscribe(),this._itemsSubscription?.unsubscribe(),this._autofillMonitor.stopMonitoring(this._element.nativeElement)}ngOnChanges(){this._bindAutocompleteItems()}ngAfterViewInit(){this._bindAutocompleteItems()}_bindAutocompleteItems(){if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),typeof this._itemsCb=="function"&&this.autocomplete&&!this.autocompleteDisabled){let e=new c;this.autocomplete.items=e;let t=this._formField?._control?.ngControl?.valueChanges||this._valueChanges;this._controlValueChangesSubscription=t.pipe(z(this._debounce)).subscribe(i=>{this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=this._itemsCb(i).pipe($()).subscribe(s=>{e.next(s)},s=>{e.next([])})})}}openPanel(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef?.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._cdr.detectChanges())}get panelClosingActions(){return p(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(f(()=>this._overlayAttached)),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe(f(()=>this._overlayAttached)):A())}writeValue(e){Promise.resolve(null).then(()=>this._setTriggerValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode;if(t===27&&e.preventDefault(),this.panelOpen&&(t===27||t===38&&e.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),e.stopPropagation();else if(this.activeOption&&t===13&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else{let i=this.autocomplete._keyManager.activeItem,s=t===38||t===40;this.panelOpen||t===9?this.autocomplete._keyManager.onKeydown(e):s&&this._isFieldEnabled()&&this.openPanel(),(s||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption()}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i===""?null:parseFloat(i)),this._isFieldEnabled()&&this._previousValue!==i&&this._isAutofill){this._previousValue=i,this._onChange(i),this._isAutofill=!1;return}this._isFieldEnabled()&&this._previousValue!==i&&this._rootElement().activeElement===e.target&&(this._previousValue=i,this._onChange(i),this.openPanel())}_rootElement(){return this._element.nativeElement.getRootNode()}_handleFocus(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}_floatLabel(){this._nxFormField&&this._nxFormField.floatLabel==="auto"&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._nxFormField&&this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){if(this.autocomplete.options.length===0)return;let e=0,t=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(e=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);let i=this.autocomplete.panel.nativeElement.offsetTop,s=et(e,t,this.autocomplete._getScrollTop()+i,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(s-i)}_subscribeToClosingActions(){let e=this._zone.onStable.asObservable().pipe(g(1)),t=this.autocomplete.options.changes.pipe(q(()=>this._positionStrategy.reapplyLastPosition()),X(0));return p(e,t).pipe(M(()=>(this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelClosingActions)),g(1)).subscribe(i=>this._setValueAndClose(i))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(e){let i=(this.autocomplete?.valueFormatter?this.autocomplete.valueFormatter(e):e)??"";this._formField?this._formField._control.value=i:this._element.nativeElement.value=i}_setValueAndClose(e){e?.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(t=>{t!==e&&t.selected&&t.deselect()})}_attachOverlay(){if(!this.autocomplete)throw Ze();this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new we(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&this._overlayRef&&this._overlayRef.updateSize({minWidth:this._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());let e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new Pe({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategyFactory(),minWidth:this._getHostWidth(),direction:this._dir?.value||"ltr"})}_getOverlayPosition(){let t=this._dir?.value==="rtl"?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(t).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}_getConnectedElement(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(-1)}_isFieldEnabled(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled}_flipDirection(){this._overlayRef?.setDirection(this._dir.value),this._overlayRef?.updatePositionStrategy(this._getOverlayPosition())}};o.\u0275fac=function(t){return new(t||o)(a(v),a(P),a(se),a(oe),a(b),a(xe),a(Ee),a(j,9),a(Me,9),a(ue,8),a(Ie),a(Oe))},o.\u0275dir=te({type:o,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(t,i){t&1&&k("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(r){return i._handleInput(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&R("aria-activedescendant",i.activeOption==null?null:i.activeOption.id)("aria-expanded",i.panelOpen.toString())("aria-owns",i.autocomplete==null?null:i.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[ce([$e]),ie]});let n=o;return n})();function et(n,o,l,e){return n<l?n:n+o>l+e?Math.max(0,n-e+o):l}var Dt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=ee({type:o}),o.\u0275inj=Z({providers:[Ge],imports:[fe,Se,Ce]});let n=o;return n})();export{H as a,Tt as b,Ie as c,Je as d,Dt as e};
