"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[9268],{75510:function(t,e,i){i.d(e,{G:function(){return p},a:function(){return m}});var s=i(39490),n=i(80521),r=i(37716),o=i(79765),a=i(95599),l=i(3679),h=i(23674),d=i(59193);i(22759),i(25124),i(46782),i(38583);const u=(0,n.i$)({passive:!0});let c=(()=>{class t{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return d.E;const e=(0,s.fI)(t),i=this._monitoredElements.get(e);if(i)return i.subject;const n=new o.xQ,r="cdk-text-field-autofilled",a=t=>{"cdk-text-field-autofill-start"!==t.animationName||e.classList.contains(r)?"cdk-text-field-autofill-end"===t.animationName&&e.classList.contains(r)&&(e.classList.remove(r),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!1}))):(e.classList.add(r),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",a,u),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:n,unlisten:()=>{e.removeEventListener("animationstart",a,u)}}),n}stopMonitoring(t){const e=(0,s.fI)(t),i=this._monitoredElements.get(e);i&&(i.unlisten(),i.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(n.t4),r.LFG(r.R0b))},t.\u0275prov=r.Yz7({factory:function(){return new t(r.LFG(n.t4),r.LFG(r.R0b))},token:t,providedIn:"root"}),t})();const p=new r.OlP("NX_INPUT_VALUE_ACCESSOR"),_=["button","checkbox","file","hidden","image","radio","range","reset","submit"],f=["date","datetime","datetime-local","month","time","week"].filter(t=>(0,n.qK)().has(t));let g=0,m=(()=>{class t{constructor(t,e,i,s,n,r,a,l){this._elementRef=t,this._platform=e,this.ngControl=i,this._parentForm=s,this._parentFormGroup=n,this._errorStateMatcher=r,this._autofillMonitor=l,this._type="text",this._uid="nx-input-"+g++,this._disabled=!1,this._required=!1,this._readonly=!1,this.errorState=!1,this.controlType="nx-input",this.autofilled=!1,this.stateChanges=new o.xQ,this.focused=!1,this.id=this.id,this._inputValueAccessor=a||this._elementRef.nativeElement,this._previousNativeValue=this.value,"textarea"===this._elementRef.nativeElement.nodeName.toLowerCase()&&(this.controlType="textarea")}get id(){return this._id}set id(t){this._id=t||this._uid}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t)}get readonly(){return this._readonly}set readonly(t){this._readonly=(0,s.Ig)(t),this.stateChanges.next()}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=(0,s.Ig)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get required(){return this._required}set required(t){this._required=(0,s.Ig)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea()&&(0,n.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get placeholder(){return this.empty?this._placeholder:""}set placeholder(t){this._placeholder=t}ngOnInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}get elementRef(){return this._elementRef}_onInput(){}_focusChanged(t){t!==this.focused&&!this.readonly&&(this.focused=t,this.stateChanges.next())}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}updateErrorState(){const t=this.errorState,e=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);e!==t&&(this.errorState=e,this.stateChanges.next())}setDescribedByIds(t){this._ariaDescribedby=t.join(" ")}setAriaLabel(t){this._ariaLabel=t}_isBadInput(){const t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}_isNeverEmpty(){return f.indexOf(this._type)>-1}_isTextarea(){const t=this._elementRef.nativeElement;return!!t.nodeName&&"textarea"===t.nodeName.toLowerCase()}_validateType(){if(_.indexOf(this._type)>-1)throw new Error(`Input of type '${this._type}' is not supported`)}get shouldLabelFloat(){return!!(this.focused||!this.empty||this.placeholder&&this.placeholder.length>0)}_dirtyCheckNativeValue(){const t=this.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(n.t4),r.Y36(l.a5,10),r.Y36(l.F,8),r.Y36(l.sg,8),r.Y36(h.rD),r.Y36(p,10),r.Y36(c))},t.\u0275dir=r.lG2({type:t,selectors:[["input","nxInput",""],["textarea","nxInput",""],["select","nxInput",""]],hostVars:21,hostBindings:function(t,e){1&t&&r.NdJ("blur",function(){return e._focusChanged(!1)})("focus",function(){return e._focusChanged(!0)})("input",function(){return e._onInput()}),2&t&&(r.uIk("id",e.id)("disabled",e.disabled||null)("readonly",e.readonly||null)("required",e.required||null)("aria-label",e._ariaLabel||null)("aria-describedby",e._ariaDescribedby||null)("aria-invalid",e.errorState)("aria-required",e.required.toString())("placeholder",e.placeholder||null),r.ekj("c-input",!0)("nx-input",!0)("is-filled",!1===e.empty)("is-disabled",e.disabled)("has-error",e.errorState)("is-focused",e.focused))},inputs:{_ariaLabel:["nxAriaLabel","_ariaLabel"],id:"id",value:"value",readonly:"readonly",disabled:"disabled",required:"required",type:"type",placeholder:"placeholder"},exportAs:["nxInput"],features:[r._Bn([{provide:a.iC,useExisting:t}]),r.TTD]}),t})()},8995:function(t,e,i){i.d(e,{I:function(){return l}});var s=i(36461),n=i(37716),r=i(4765),o=i(90805);const a="password-show-o";let l=(()=>{class t{constructor(t,e,i){this._changeDetectorRef=t,this._elementRef=e,this._focusMonitor=i,this._currentIcon=a,this._pressed=!1,this._ariaLabel="Show password",this._focusMonitor.monitor(this._elementRef)}set ariaLabel(t){t!==this._ariaLabel&&(this._ariaLabel=t,this._changeDetectorRef.markForCheck())}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.control?this._currentIcon="password"===this.control.type?a:"password-hide-o":console.warn("You need to pass an input as a control to the password toggle.")}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}toggleInputType(){this.control&&(this.control.type="password"===this.control.type?"text":"password",this._pressed=!this._pressed,this.toggleIcon(),this._changeDetectorRef.markForCheck())}toggleIcon(){this._currentIcon=this._currentIcon===a?"password-hide-o":a}_onKeydown(t){t&&(t.keyCode===s.K5||t.keyCode===s.L_)&&this.toggleInputType()}get tabindex(){return this.control?this.control.disabled?-1:0:null}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(r.tE))},t.\u0275cmp=n.Xpm({type:t,selectors:[["nx-password-toggle"]],hostAttrs:["role","button"],hostVars:3,hostBindings:function(t,e){1&t&&n.NdJ("click",function(){return e.toggleInputType()})("keydown",function(t){return e._onKeydown(t)}),2&t&&n.uIk("aria-label",e.ariaLabel)("tabindex",e.tabindex)("aria-pressed",e._pressed)},inputs:{control:"control",ariaLabel:"ariaLabel"},decls:1,vars:1,consts:[["aria-hidden","true",3,"name"]],template:function(t,e){1&t&&n._UZ(0,"nx-icon",0),2&t&&n.Q6J("name",e._currentIcon)},directives:[o.O],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;height:24px;width:24px;cursor:pointer}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{color:buttonText!important}}[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:hover{color:var(--hover-primary)}.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{pointer-events:none}@media screen and (-ms-high-contrast: active){.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{color:GrayText!important}}"],changeDetection:0}),t})()},79268:function(t,e,i){i.d(e,{GH:function(){return l.G},ZI:function(){return a}});var s=i(38583),n=i(95599),r=i(42677),o=i(37716);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,n._0,r.cf],n._0]}),t})();var l=i(75510);i(8995)}}]);