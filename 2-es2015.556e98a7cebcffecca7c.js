(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+IXF":function(e,i,t){"use strict";t.d(i,"c",function(){return a}),t.d(i,"a",function(){return f.a}),t.d(i,"b",function(){return f.b}),t.d(i,"e",function(){return s}),t.d(i,"d",function(){return d.a});var n=t("ofXK"),o=t("mN63"),r=t("SqJ0"),l=t("fXoL");let a=(()=>{class e{}return e.\u0275mod=l.Nb({type:e}),e.\u0275inj=l.Mb({factory:function(i){return new(i||e)},imports:[[n.c,o.c,r.a]]}),e})();var f=t("aXeq");let s=(()=>{class e{}return e.\u0275mod=l.Nb({type:e}),e.\u0275inj=l.Mb({factory:function(i){return new(i||e)},imports:[[n.c]]}),e})();var d=t("Q3ZH")},BJg0:function(e,i,t){"use strict";t.d(i,"a",function(){return o});var n=t("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldSuffix",""]]}),e})()},HXSb:function(e,i,t){"use strict";t.d(i,"a",function(){return I}),t.d(i,"b",function(){return F});var n=t("fXoL"),o=t("JX91"),r=t("zB3U"),l=t("VamS"),a=t("xR9B"),f=t("v44Z"),s=t("N48+"),d=t("BJg0"),c=t("XeSt"),h=t("rtdK"),m=t("N3x+"),u=t("ofXK");const p=["connectionContainer"];function x(e,i){1&e&&(n.Vb(0,"div",15),n.kc(1,2),n.Ub())}function g(e,i){if(1&e&&(n.Tb(0),n.Jc(1),n.Sb()),2&e){const e=n.gc();n.Db(1),n.Lc(" ",e.label," ")}}function _(e,i){1&e&&(n.Vb(0,"div",16),n.kc(1,3),n.Ub())}function b(e,i){1&e&&(n.Vb(0,"div",17),n.kc(1,4),n.Ub())}function v(e,i){1&e&&(n.Vb(0,"div",18),n.kc(1,5),n.Ub())}function w(e,i){1&e&&(n.Vb(0,"div",19),n.kc(1,6),n.Ub())}function y(e,i){1&e&&(n.Vb(0,"div",19),n.kc(1,7),n.Ub())}const k=[[["nx-formfield-label"]],"*",[["","nxFormfieldPrefix",""]],[["","nxFormfieldSuffix",""]],[["","nxFormfieldHint",""]],[["","nxFormfieldAppendix",""]],[["","nxFormfieldError",""]],[["","nxFormfieldNote",""]]],C=["nx-formfield-label","*","[nxFormfieldPrefix]","[nxFormfieldSuffix]","[nxFormfieldHint]","[nxFormfieldAppendix]","[nxFormfieldError]","[nxFormfieldNote]"],z={negative:"nx-formfield--negative"};let O=0;const I=new n.s("FORMFIELD_DEFAULT_OPTIONS");let F=(()=>{class e{constructor(e,i,t,n){this.elementRef=e,this.renderer=i,this._changeDetectorRef=t,this._defaultOptions=n,this._styles="",this._subscriptions=[],this.labelId="nx-formfield-label-"+O++}get floatLabel(){return this._floatLabel||this._defaultOptions&&this._defaultOptions.nxFloatLabel||"auto"}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e||"auto",this._changeDetectorRef.markForCheck())}set styles(e){this._styles!==e&&(Object(r.f)(e,z).forEach(e=>{this.renderer.addClass(this.elementRef.nativeElement,e)}),this._styles=e)}set appearance(e){this._appearance!==e&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"auto"}get _shouldAlwaysFloat(){return"always"===this.floatLabel}get shouldLabelFloat(){return this._control.shouldLabelFloat||this._shouldAlwaysFloat}get control(){return this._control}ngAfterContentInit(){let e;const i=[];this._validateControlChild(),this._control.controlType&&this.elementRef.nativeElement.classList.add("nx-formfield--type-"+this._control.controlType),e=this._control.stateChanges.pipe(Object(o.a)(null)).subscribe(()=>{Promise.resolve().then(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()})}),i.push(e),e=this._hintChildren.changes.pipe(Object(o.a)(null)).subscribe(()=>{this._changeDetectorRef.markForCheck()}),i.push(e),e=this._errorChildren.changes.pipe(Object(o.a)(null)).subscribe(()=>{Promise.resolve().then(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()})}),i.push(e),this._subscriptions=i}ngAfterContentChecked(){this._validateControlChild()}ngOnDestroy(){this._subscriptions.forEach(e=>e.unsubscribe())}getDisplayedMessage(){return this._control.errorState&&this._errorChildren&&this._errorChildren.length>0?"error":this._noteChildren&&this._noteChildren.length>0?"note":""}_syncDescribedByIds(){if(this._control){let e=[];e=this._hintChildren.map(e=>e.id),"note"===this.getDisplayedMessage()?e=[...this._noteChildren.map(e=>e.id),...e]:this._errorChildren&&(e=[...this._errorChildren.map(e=>e.id),...e]),this._control.setDescribedByIds(e)}}_validateControlChild(){if(!this._control)throw new Error("Formfield must contain a NxFormfieldControl like input[nxInput] or a custom implementation")}getConnectedOverlayOrigin(){return this._connectionContainerRef||this.elementRef}_hasLabel(){return!!this._labelChild||!!this.label}_hideControlPlaceholder(){return!this.shouldLabelFloat&&this._hasLabel()||!1===this._control.empty}}return e.\u0275fac=function(i){return new(i||e)(n.Pb(n.l),n.Pb(n.H),n.Pb(n.h),n.Pb(I,8))},e.\u0275cmp=n.Jb({type:e,selectors:[["nx-formfield"]],contentQueries:function(e,i,t){if(1&e&&(n.Ib(t,s.a,1),n.Ib(t,m.a,1),n.Ib(t,l.a,0),n.Ib(t,a.a,0),n.Ib(t,f.a,0),n.Ib(t,d.a,0),n.Ib(t,c.a,0),n.Ib(t,h.a,0)),2&e){let e;n.sc(e=n.dc())&&(i._control=e.first),n.sc(e=n.dc())&&(i._labelChild=e.first),n.sc(e=n.dc())&&(i._hintChildren=e),n.sc(e=n.dc())&&(i._noteChildren=e),n.sc(e=n.dc())&&(i._errorChildren=e),n.sc(e=n.dc())&&(i._suffixChildren=e),n.sc(e=n.dc())&&(i._prefixChildren=e),n.sc(e=n.dc())&&(i._appendixChildren=e)}},viewQuery:function(e,i){if(1&e&&n.Nc(p,3),2&e){let e;n.sc(e=n.dc())&&(i._connectionContainerRef=e.first)}},hostVars:18,hostBindings:function(e,i){2&e&&n.Hb("nx-formfield",!0)("is-disabled",i._control.disabled)("is-readonly",i._control.readonly)("is-filled",!1===i._control.empty)("is-focused",i._control.focused)("is-floating",i.shouldLabelFloat)("has-error",i._control.errorState)("has-outline","outline"===i.appearance)("has-hint",(null==i._hintChildren?null:i._hintChildren.length)>0)},inputs:{label:["nxLabel","label"],floatLabel:["nxFloatLabel","floatLabel"],styles:["nxStyle","styles"],appearance:"appearance"},ngContentSelectors:C,decls:18,vars:11,consts:[[1,"nx-formfield__wrapper"],[1,"nx-formfield__row"],["connectionContainer",""],[1,"nx-formfield__flexfield"],[1,"nx-formfield__input-container"],["class","nx-formfield__prefix",4,"ngIf"],[1,"nx-formfield__input"],[1,"nx-formfield__label-holder"],[1,"nx-formfield__label",3,"id"],[4,"ngIf"],["class","nx-formfield__suffix",4,"ngIf"],["class","nx-formfield__hints",4,"ngIf"],["class","nx-formfield__appendix",4,"ngIf"],[3,"ngSwitch"],["class","nx-formfield__message",4,"ngSwitchCase"],[1,"nx-formfield__prefix"],[1,"nx-formfield__suffix"],[1,"nx-formfield__hints"],[1,"nx-formfield__appendix"],[1,"nx-formfield__message"]],template:function(e,i){1&e&&(n.lc(k),n.Vb(0,"div",0),n.Vb(1,"div",1,2),n.Vb(3,"div",3),n.Vb(4,"div",4),n.Hc(5,x,2,0,"div",5),n.Vb(6,"div",6),n.Vb(7,"span",7),n.Vb(8,"label",8),n.Hc(9,g,2,1,"ng-container",9),n.kc(10),n.Ub(),n.Ub(),n.kc(11,1),n.Ub(),n.Hc(12,_,2,0,"div",10),n.Ub(),n.Hc(13,b,2,0,"div",11),n.Ub(),n.Hc(14,v,2,0,"div",12),n.Ub(),n.Tb(15,13),n.Hc(16,w,2,0,"div",14),n.Hc(17,y,2,0,"div",14),n.Sb(),n.Ub()),2&e&&(n.Db(5),n.mc("ngIf",i._prefixChildren.length),n.Db(3),n.mc("id",i.labelId),n.Eb("aria-owns",i._control.id)("for",i._control.id),n.Db(1),n.mc("ngIf",!i._labelChild),n.Db(3),n.mc("ngIf",i._suffixChildren.length),n.Db(1),n.mc("ngIf",i._hintChildren.length),n.Db(1),n.mc("ngIf",i._appendixChildren.length),n.Db(1),n.mc("ngSwitch",i.getDisplayedMessage()),n.Db(1),n.mc("ngSwitchCase","error"),n.Db(1),n.mc("ngSwitchCase","note"))},directives:[u.q,u.s,u.t],styles:['.nx-formfield{display:block;color:var(--text-01)}.nx-formfield nx-message{margin-top:12px}.nx-formfield__wrapper{padding-bottom:var(--formfield-bottom-padding);padding-top:var(--formfield-label-height)}.has-hint .nx-formfield__wrapper{padding-bottom:0}.nx-formfield__row{min-height:var(--formfield-control-height);background-color:var(--formfield-background-color);display:flex;align-items:stretch;width:100%}.nx-formfield__row:after{content:"";font-size:0;display:block;min-height:inherit}.nx-formfield__flexfield{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);align-items:stretch;flex-direction:column;display:inline-flex;width:100%;position:relative;min-width:0;flex:0 1 auto}.nx-formfield__input-container{display:flex;border-bottom:var(--formfield-border-width) solid var(--formfield-border-color);height:var(--formfield-control-height);flex:auto;padding:var(--formfield-input-padding)}.nx-formfield__input{position:relative;flex:auto;min-width:0;display:flex;text-align:left}[dir=rtl] .nx-formfield__input{text-align:right}.nx-formfield__label-holder{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}[dir=rtl] .nx-formfield__label-holder{right:0;left:auto}.nx-formfield__label{font-size:var(--formfield-placeholder-label-font-size);line-height:var(--formfield-placeholder-label-line-height);font-weight:var(--formfield-placeholder-label-font-weight);letter-spacing:var(--formfield-placeholder-label-letter-spacing);color:var(--formfield-label-color);display:block;position:absolute;left:0;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .15s ease-out,font-size .15s ease-out;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;text-align:left}[dir=rtl] .nx-formfield__label{right:0;left:auto;text-align:right}.nx-formfield__appendix,.nx-formfield__prefix,.nx-formfield__suffix{align-items:center;flex:none;white-space:nowrap;color:var(--formfield-control-color)}.nx-formfield__appendix nx-icon.nx-icon--auto,.nx-formfield__prefix nx-icon.nx-icon--auto,.nx-formfield__suffix nx-icon.nx-icon--auto{font-size:var(--formfield-icon-size)}.nx-formfield__appendix nx-icon,.nx-formfield__prefix nx-icon,.nx-formfield__suffix nx-icon{display:block}.nx-formfield__prefix,.nx-formfield__suffix{display:inline-flex}.nx-formfield__appendix{height:var(--formfield-control-height);margin-left:8px;display:flex;border-bottom:var(--formfield-border-width) solid transparent;padding:var(--formfield-input-padding)}[dir=rtl] .nx-formfield__appendix{margin-right:8px;margin-left:0}.nx-formfield__prefix{margin-right:8px}[dir=rtl] .nx-formfield__prefix{margin-right:0;margin-left:8px}.nx-formfield__suffix{margin-left:8px}[dir=rtl] .nx-formfield__suffix{margin-right:8px;margin-left:0}.nx-formfield__hints{color:var(--text-01);font-size:var(--formfield-hint-font-size);line-height:var(--formfield-hint-line-height);font-weight:var(--formfield-hint-font-weight);letter-spacing:var(--formfield-hint-letter-spacing);padding-top:8px;text-align:right}[dir=rtl] .nx-formfield__hints{text-align:left}[nxformfieldhint]{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.nx-formfield__message{margin-top:4px}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:var(--formfield-active-color)}.nx-formfield.is-focused .nx-formfield__label{text-overflow:ellipsis}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error){color:var(--formfield-active-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error) .nx-formfield__input-container{border-bottom-color:var(--formfield-active-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error).nx-formfield--negative{color:var(--negative)}.nx-formfield:not(.nx-formfield--negative):not(.has-error):not(.is-disabled):not(.is-focused):not(.has-outline) .nx-formfield__row:hover .nx-formfield__input-container{border-bottom-color:var(--formfield-hover-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--formfield-outline-active-border-color);box-shadow:var(--formfield-outline-focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{box-shadow:0 0 0 2px highlight;border:1px solid highlight}}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline.has-error .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-outline{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing)}.nx-formfield.has-outline.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}.nx-formfield.has-outline .nx-formfield__wrapper{padding-top:var(--formfield-outline-label-height)}.nx-formfield.has-outline .nx-formfield__row{min-height:var(--formfield-outline-control-height)}.nx-formfield.has-outline .nx-formfield__flexfield{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing);padding:0}.nx-formfield.has-outline .nx-formfield__input-container{padding:0;background-color:var(--formfield-outline-background-color);border:var(--formfield-border-width) solid var(--formfield-outline-border-color);border-radius:4px;height:var(--formfield-outline-control-height)}.nx-formfield.has-outline input,.nx-formfield.has-outline nx-dropdown .nx-dropdown__container{padding:0 7px}.nx-formfield.has-outline .nx-formfield__suffix{margin-right:7px;margin-left:0}.nx-formfield.has-outline .nx-formfield__prefix,[dir=rtl] .nx-formfield.has-outline .nx-formfield__suffix{margin-right:0;margin-left:7px}[dir=rtl] .nx-formfield.has-outline .nx-formfield__prefix{margin-right:7px;margin-left:0}.nx-formfield.has-outline .nx-formfield__input textarea[nxInput]{line-height:24px;padding:7px}.nx-formfield.has-outline .nx-formfield__appendix{height:var(--formfield-outline-control-height);margin-left:8px;display:flex;border-top:var(--formfield-border-width) solid transparent;border-bottom:var(--formfield-border-width) solid transparent;padding:0}[dir=rtl] .nx-formfield.has-outline .nx-formfield__appendix{margin-left:0;margin-right:8px}.nx-formfield.has-outline .nx-formfield__hints{text-align:left;font-size:var(--formfield-outline-hint-font-size);line-height:var(--formfield-outline-hint-line-height);font-weight:var(--formfield-outline-hint-font-weight);letter-spacing:var(--formfield-outline-hint-letter-spacing)}[dir=rtl] .nx-formfield.has-outline .nx-formfield__hints{text-align:right}.nx-formfield.has-outline input::placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-moz-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-webkit-input-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input:-ms-input-placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::-moz-placeholder{line-height:calc(var(--formfield-outline-control-height) - 2 * var(--formfield-border-width))}.nx-formfield.has-outline.is-readonly .nx-formfield__input-container{border-color:var(--formfield-readonly-border-color);background-color:var(--formfield-readonly-background-color)}.nx-formfield.is-floating .nx-formfield__label{transform:translateY(var(--formfield-floating-distance));font-size:var(--formfield-label-font-size);line-height:var(--formfield-label-line-height);font-weight:var(--formfield-label-font-weight);letter-spacing:var(--formfield-label-letter-spacing)}.nx-formfield.is-floating.is-filled .nx-formfield__label{transition:none}.nx-formfield.is-floating.has-outline .nx-formfield__label{padding-top:0;transform:translateY(var(--formfield-outline-floating-distance));font-size:var(--formfield-outline-label-font-size);line-height:var(--formfield-outline-label-line-height);font-weight:var(--formfield-outline-label-font-weight);letter-spacing:var(--formfield-outline-label-letter-spacing)}.nx-formfield.is-floating.has-outline .nx-formfield__prefix~.nx-formfield__input .nx-formfield__label{padding:0}.nx-formfield.is-floating.has-outline .nx-formfield__input-container{position:relative}.nx-formfield.is-floating.has-outline .nx-formfield__input{position:unset}.nx-formfield.has-error:not(.has-outline) .nx-formfield__input input[nxInput],.nx-formfield.has-error:not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.has-outline) .nx-formfield__suffix,.nx-formfield.has-error:not(.has-outline):not(.is-floating) .nx-formfield__label{font-weight:var(--formfield-error-input-font-weight)}.nx-formfield.has-error:not(.nx-formfield--negative),.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__label,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__suffix{color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative) .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative).is-floating .nx-formfield__label{color:var(--formfield-label-color)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline{color:var(--text-01)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--danger)}.nx-formfield.is-disabled{color:var(--formfield-disabled-text-color);-webkit-text-fill-color:var(--formfield-disabled-text-color);cursor:not-allowed}.nx-formfield.is-disabled .nx-formfield__hints{color:inherit}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled nx-datepicker-toggle button,.nx-formfield.is-readonly nx-datepicker-toggle button{color:var(--formfield-disabled-text-color)}.nx-formfield--negative{color:var(--negative)}.nx-formfield--negative .nx-formfield__hints{color:inherit}.nx-formfield--negative.has-outline .nx-formfield__input-container,.nx-formfield--negative .nx-formfield__input-container{border-color:var(--negative)}.nx-formfield--negative .nx-formfield__appendix,.nx-formfield--negative .nx-formfield__label,.nx-formfield--negative .nx-formfield__prefix,.nx-formfield--negative .nx-formfield__suffix{color:var(--negative)}.nx-formfield--type-nx-dropdown .nx-formfield__label{width:calc(100% - var(--formfield-icon-size))}.nx-formfield__input textarea[nxInput]{vertical-align:bottom}@media screen and (-ms-high-contrast:active){.nx-formfield.has-error:not(.nx-formfield--negative) .nx-formfield__input-container,.nx-formfield.nx-formfield--negative .nx-formfield__input-container,.nx-formfield:not(.nx-formfield--negative):not(.has-error):not(.is-disabled):not(.is-focused):not(.has-outline) .nx-formfield__row:hover .nx-formfield__input-container,.nx-formfield__input-container{border-bottom-color:buttonText}.nx-formfield.has-outline .nx-formfield__input-container{border-color:buttonText}.nx-formfield.has-outline .nx-formfield__appendix{border-bottom-color:window;border-top-color:window}.nx-formfield.is-disabled{color:GrayText;-webkit-text-fill-color:GrayText}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:GrayText}.nx-formfield.is-disabled .nx-formfield__hints{color:windowText}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:GrayText}.nx-formfield.is-focused:not(.has-outline) .nx-formfield__input-container,.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error) .nx-formfield__input-container{border-bottom-color:highlight}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:inherit}}.nx-formfield--type-textarea .nx-formfield__flexfield{padding:0}.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}input:-webkit-autofill:first-line{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);font-family:var(--font-family)}',"@-webkit-keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@-webkit-keyframes cdk-text-field-autofill-end{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.c-input{text-align:inherit;font-size:inherit;font-weight:inherit;background:0 0;color:inherit;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%}.c-input::-ms-clear{display:none}.c-input::-webkit-search-cancel-button,.c-input::-webkit-search-decoration,.c-input::-webkit-search-results-button,.c-input::-webkit-search-results-decoration{display:none;-webkit-appearance:none}.c-input::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);transition:color .1s ease-in .2s}.c-input::placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{-moz-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-moz-transition:color ease-in .1s .2s;transition:color .1s ease-in .2s}.c-input::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-webkit-transition:color .1s ease-in .2s;transition:color .1s ease-in .2s}.c-input::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input:-ms-input-placeholder{-ms-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-ms-transition:color ease-in .1s .2s;transition:color .1s ease-in .2s}.c-input:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{line-height:calc(var(--formfield-control-height) - var(--formfield-border-width))}textarea.c-input{height:auto;font-family:inherit}.c-input.is-focused{border:none;outline:none;box-shadow:none}.c-input.is-focused::placeholder{opacity:1;transition:opacity .2s ease-in .15s}.c-input.is-focused::-moz-placeholder{opacity:1;-moz-transition:opacity ease-in .2s .15s;transition:opacity .2s ease-in .15s}.c-input.is-focused::-webkit-input-placeholder{opacity:1;-webkit-transition:opacity .2s ease-in .15s;transition:opacity .2s ease-in .15s}.c-input.is-focused:-ms-input-placeholder{opacity:1;-ms-transition:opacity ease-in .2s .15s;transition:opacity .2s ease-in .15s}.c-input.is-disabled{cursor:not-allowed}textarea.nx-input-element{resize:vertical;overflow:auto}.c-input:invalid,.c-input:required{box-shadow:none}"],encapsulation:2,changeDetection:0}),e})()},"N3x+":function(e,i,t){"use strict";t.d(i,"a",function(){return o});var n=t("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["nx-formfield-label"]]}),e})()},"N48+":function(e,i,t){"use strict";t.d(i,"a",function(){return o});var n=t("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e}),e})()},Q3ZH:function(e,i,t){"use strict";t.d(i,"a",function(){return s});var n=t("fXoL"),o=t("8LU1"),r=t("XNiG");const l=["*"];let a=0;const f=new n.s("LABEL_DEFAULT_OPTIONS");let s=(()=>{class e{constructor(e){this._defaultOptions=e,this._stateChanges=new r.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+a++}set disabled(e){this._disabled=Object(o.b)(e),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=Object(o.b)(e),this._stateChanges.next()}get negative(){return this._negative}set id(e){this._id!==e&&(this._id=e)}get id(){return this._id}set size(e){this._size=e,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return e.\u0275fac=function(i){return new(i||e)(n.Pb(f,8))},e.\u0275cmp=n.Jb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,i){2&e&&(n.Eb("disabled",i.disabled)("aria-labelledby",i.id||null)("id",i.id),n.Hb("nx-label--negative",i.negative)("nx-label--large","large"===i.size)("nx-label--small","small"===i.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:l,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,i){1&e&&(n.lc(),n.Vb(0,"label",0),n.kc(1),n.Ub())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e})()},VamS:function(e,i,t){"use strict";t.d(i,"a",function(){return r});var n=t("fXoL");let o=0,r=(()=>{class e{constructor(){this.id="nx-formfield-hint-"+o++}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldHint",""]],hostVars:1,hostBindings:function(e,i){2&e&&n.Eb("id",i.id)},inputs:{id:"id"}}),e})()},XeSt:function(e,i,t){"use strict";t.d(i,"a",function(){return o});var n=t("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldPrefix",""]]}),e})()},aXeq:function(e,i,t){"use strict";t.d(i,"a",function(){return x}),t.d(i,"b",function(){return g});var n=t("fXoL"),o=t("8LU1"),r=t("XNiG"),l=t("1G5W"),a=t("ofXK"),f=t("+vaC"),s=t("Xe60");function d(e,i){1&e&&n.Qb(0,"nx-icon",7),2&e&&n.mc("name","exclamation-triangle")}function c(e,i){if(1&e&&(n.Tb(0),n.Hc(1,d,1,1,"nx-icon",3),n.Vb(2,"div",4),n.Vb(3,"div",5),n.Rb(4,6),n.Ub(),n.Ub(),n.Sb()),2&e){const e=n.gc(),i=n.tc(3);n.Db(1),n.mc("ngIf",e.showIcon),n.Db(3),n.mc("ngTemplateOutlet",i)}}function h(e,i){if(1&e&&(n.Vb(0,"nx-message",8),n.Rb(1,6),n.Ub()),2&e){n.gc();const e=n.tc(3);n.Db(1),n.mc("ngTemplateOutlet",e)}}function m(e,i){1&e&&n.kc(0)}const u=["*"];let p=0;const x=new n.s("ERROR_DEFAULT_OPTIONS");let g=(()=>{class e{constructor(e,i){this._changeDetectorRef=e,this._defaultOptions=i,this._showIcon=!0,this._id="nx-error-"+p++,this._destroyed=new r.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(l.a)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(e){this._showIcon=Object(o.b)(e),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(i){return new(i||e)(n.Pb(n.h),n.Pb(x,8))},e.\u0275cmp=n.Jb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,i){2&e&&(n.Eb("role","alert")("id",i.id),n.Hb("nx-error--message","message"==i.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:u,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,i){1&e&&(n.lc(),n.Hc(0,c,5,2,"ng-container",0),n.Hc(1,h,2,1,"nx-message",1),n.Hc(2,m,1,0,"ng-template",null,2,n.Ic)),2&e&&(n.mc("ngIf","text"===i.appearance),n.Db(1),n.mc("ngIf","message"===i.appearance))},directives:[a.q,a.u,f.a,s.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e})()},hbct:function(e,i,t){"use strict";t.d(i,"d",function(){return n.a}),t.d(i,"c",function(){return o.a}),t.d(i,"a",function(){return r.a}),t.d(i,"b",function(){return r.b}),t.d(i,"e",function(){return s}),t("rtdK");var n=t("v44Z"),o=t("N48+"),r=t("HXSb"),l=t("ofXK"),a=t("+IXF"),f=t("fXoL");let s=(()=>{class e{}return e.\u0275mod=f.Nb({type:e}),e.\u0275inj=f.Mb({factory:function(i){return new(i||e)},imports:[[l.c],a.c,a.e]}),e})();t("VamS"),t("N3x+"),t("xR9B"),t("XeSt"),t("BJg0")},rtdK:function(e,i,t){"use strict";t.d(i,"a",function(){return r});var n=t("fXoL");let o=0,r=(()=>{class e{constructor(){this.id="nx-formfield-appendix-"+o++}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldAppendix",""]],hostVars:1,hostBindings:function(e,i){2&e&&n.Eb("id",i.id)},inputs:{id:"id"}}),e})()},v44Z:function(e,i,t){"use strict";t.d(i,"a",function(){return r});var n=t("fXoL");let o=0,r=(()=>{class e{constructor(){this.id="nx-formfield-error-"+o++}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldError",""],["","nxError",""]],hostAttrs:["role","alert"],hostVars:1,hostBindings:function(e,i){2&e&&n.Eb("id",i.id)},inputs:{id:"id"}}),e})()},xR9B:function(e,i,t){"use strict";t.d(i,"a",function(){return r});var n=t("fXoL");let o=0,r=(()=>{class e{constructor(){this.id="nx-formfield-note-"+o++}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=n.Kb({type:e,selectors:[["","nxFormfieldNote",""]],hostVars:1,hostBindings:function(e,i){2&e&&n.Eb("id",i.id)},inputs:{id:"id"}}),e})()}}]);