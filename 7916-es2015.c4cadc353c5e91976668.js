"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[7916],{27149:function(e,t,n){n.d(t,{n9:function(){return P},Wi:function(){return f}});var o=n(39490),c=n(37716),r=n(79765),i=n(78459),a=n(23674),h=n(3679),l=n(38583),s=n(4765),_=n(18553),b=n(90805);function g(e,t){1&e&&(c.TgZ(0,"div",3),c.Hsn(1,2),c.qZA())}const x=[[["nx-label"]],"*",[["nx-error"]]],d=["nx-label","*","nx-error"],k=["checkboxLabelWrapper"],u=["input"];function C(e,t){1&e&&c._UZ(0,"nx-icon",8)}function v(e,t){1&e&&c._UZ(0,"div",9)}const p=["*"];let m=0;class O{constructor(e,t,n){this.checked=e,this.value=t,this.checkbox=n}}class M{constructor(e,t){this.value=e,this.checkboxGroup=t}}let P=(()=>{class e{constructor(e,t,n,o,i){this._changeDetectorRef=e,this._errorStateMatcher=t,this._parentForm=n,this._parentFormGroup=o,this.ngControl=i,this._stateChanges=new r.xQ,this.errorState=!1,this.selectionChange=new c.vpe,this._id="nx-checkbox-group-"+m++,this._name="",this._disabled=!1,this._negative=!1,this._onChange=()=>{},this._onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set id(e){this._id!==e&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set name(e){this._name=e,this._changeDetectorRef.markForCheck()}get name(){return this._name}set disabled(e){this._disabled=(0,o.Ig)(e),this._label&&(this._label.disabled=this._disabled),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=(0,o.Ig)(e),this._changeDetectorRef.markForCheck(),this._stateChanges.next()}get negative(){return this._negative}set labelSize(e){this._labelSize=e,this._stateChanges.next()}get labelSize(){return this._labelSize}get required(){return!!this._required}set required(e){this._required=(0,o.Ig)(e)}ngAfterContentInit(){setTimeout(()=>{this._updateSelectedCheckboxFromValue(!0)}),this._checkboxes.changes.subscribe(()=>{this._value=this._checkboxes.filter(e=>e.checked).map(e=>e.value),this.ngControl&&this.ngControl.control.setValue(this._value),this._updateSelectedCheckboxFromValue()})}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){this._stateChanges.complete()}writeValue(e){this._value!==e&&(this._value=e,this._updateSelectedCheckboxFromValue())}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_updateSelectedCheckboxFromValue(e=!1){this._checkboxes&&this._checkboxes.length&&(e?this._value&&this._value.length:this._value)&&this._checkboxes.map(e=>{e.checked=-1!==this._value.indexOf(e.value)})}change(e){const t=this._checkboxes.filter(e=>e.checked).map(e=>e.value);this._onChange(t),this._onTouched&&this._onTouched(),this.selectionChange.emit(new M(t,this))}get checkboxes(){return this._checkboxes.toArray()}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t,this._changeDetectorRef.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(c.sBO),c.Y36(a.rD),c.Y36(h.F,8),c.Y36(h.sg,8),c.Y36(h.a5,10))},e.\u0275cmp=c.Xpm({type:e,selectors:[["nx-checkbox-group"]],contentQueries:function(e,t,n){if(1&e&&(c.Suo(n,i.UD,5),c.Suo(n,f,5)),2&e){let e;c.iGM(e=c.CRH())&&(t._label=e.first),c.iGM(e=c.CRH())&&(t._checkboxes=e)}},hostVars:9,hostBindings:function(e,t){2&e&&(c.uIk("id",t.id)("required",t.required)("disabled",t.disabled||null)("aria-labelledby",(null==t._label?null:t._label.id)||null)("role","group"),c.ekj("nx-checkbox-group",!0)("nx-checkbox-group--negative",t.negative))},inputs:{id:"id",name:"name",disabled:"disabled",negative:"negative",labelSize:"labelSize",required:"required"},outputs:{selectionChange:"selectionChange"},ngContentSelectors:d,decls:6,vars:1,consts:[[1,"nx-checkbox-group__label"],["class","nx-checkbox-group__errors",4,"ngIf"],[1,"nx-checkbox-group__controls"],[1,"nx-checkbox-group__errors"]],template:function(e,t){1&e&&(c.F$t(x),c.TgZ(0,"div"),c.TgZ(1,"div",0),c.Hsn(2),c.qZA(),c.YNc(3,g,2,0,"div",1),c.TgZ(4,"div",2),c.Hsn(5,1),c.qZA(),c.qZA()),2&e&&(c.xp6(3),c.Q6J("ngIf",t.errorState))},directives:[l.O5],styles:["[_nghost-%COMP%]     nx-error{margin-bottom:8px}[_nghost-%COMP%]     nx-label{margin-bottom:16px;display:block}.nx-checkbox-group--negative[_nghost-%COMP%]     nx-error, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-label, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-icon.nx-error__icon{color:var(--negative)}"],changeDetection:0}),e})(),f=(()=>{class e{constructor(e,t,n,o,r,i,a){this._changeDetectorRef=e,this._errorStateMatcher=t,this.checkboxGroup=n,this.ngControl=o,this._parentForm=r,this._parentFormGroup=i,this._focusMonitor=a,this._id=(m++).toString(),this._disabled=!1,this._negative=!1,this._labelSize="small",this._checked=!1,this._name=null,this._indeterminate=!1,this._value="",this.indeterminateChange=new c.vpe(!1),this.checkedChange=new c.vpe(!1),this.checkboxChange=new c.vpe,this.onChangeCallback=e=>{},this.onTouchedCallback=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set id(e){e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return`nx-checkbox-${this._id}`}set name(e){this._name=e}get name(){return this.checkboxGroup&&this.checkboxGroup.name?this.checkboxGroup.name:this._name}set disabled(e){const t=(0,o.Ig)(e);t!==this._disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get disabled(){return this.checkboxGroup&&this.checkboxGroup.disabled?this.checkboxGroup.disabled:this._disabled}set labelSize(e){this._labelSize=e,this._changeDetectorRef.markForCheck()}get labelSize(){return this.checkboxGroup&&this.checkboxGroup.labelSize?this.checkboxGroup.labelSize:this._labelSize}set negative(e){const t=(0,o.Ig)(e);t!==this._negative&&(this._negative=t,this._changeDetectorRef.markForCheck())}get negative(){return this.checkboxGroup&&this.checkboxGroup.negative?this.checkboxGroup.negative:this._negative}set checked(e){const t=(0,o.Ig)(e);t!==this._checked&&(this._indeterminate&&this._setIndeterminate(!1),this._setChecked(t))}get checked(){return this._checked}set indeterminate(e){const t=(0,o.Ig)(e);this._indeterminate!==t&&(this._checked&&this._setChecked(!1),this._setIndeterminate(t)),this._changeDetectorRef.markForCheck()}get indeterminate(){return this._indeterminate}get required(){return!!this._required}set required(e){this._required=(0,o.Ig)(e)}get value(){return this._value?this._value:this.checked.toString()}set value(e){this._value=e,this._changeDetectorRef.markForCheck()}get labelHasContent(){return!!this._checkboxLabelWrapper.nativeElement.innerHTML.trim()}labelContentChanged(){this._changeDetectorRef.detectChanges()}_controlInvalid(){let e=null;return e=this.checkboxGroup&&this.checkboxGroup.ngControl?this.checkboxGroup.ngControl:this.ngControl?this.ngControl.control:null,this._errorStateMatcher.isErrorState(e,this._parentFormGroup||this._parentForm)}ngOnInit(){this.checkboxGroup&&(this.name=this.checkboxGroup.name,this._parentChangeSubscription=this.checkboxGroup._stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngAfterViewInit(){this._focusMonitor.monitor(this._nativeInput)}ngOnDestroy(){this._parentChangeSubscription&&this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._nativeInput)}_setIndeterminate(e){this._indeterminate=e,this.indeterminateChange.emit(this._indeterminate),this._changeDetectorRef.markForCheck()}_setChecked(e){this._checked=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this.onChangeCallback(this.checked),null!==this.checkboxGroup&&this.checkboxGroup.change(this)}writeValue(e){null===e&&(e=!1),e!==this.checked&&(this.checked=e)}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}focus(e){this._focusMonitor.focusVia(this._nativeInput,e)}touch(){this.onTouchedCallback()}_onInputClick(e){e.stopPropagation(),this.disabled||(this.toggle(),this.checkedChange.emit(this._checked),this.checkboxChange.emit(this._createChangeEvent(this._checked)))}_createChangeEvent(e){const t=new O(e,this.value,this);return t.checked=e,t.value=this.value,t.checkbox=this,t}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(c.sBO),c.Y36(a.rD),c.Y36(P,8),c.Y36(h.a5,10),c.Y36(h.F,8),c.Y36(h.sg,8),c.Y36(s.tE))},e.\u0275cmp=c.Xpm({type:e,selectors:[["nx-checkbox"]],viewQuery:function(e,t){if(1&e&&(c.Gf(k,7),c.Gf(u,5)),2&e){let e;c.iGM(e=c.CRH())&&(t._checkboxLabelWrapper=e.first),c.iGM(e=c.CRH())&&(t._nativeInput=e.first)}},hostVars:14,hostBindings:function(e,t){2&e&&(c.uIk("required",t.required)("aria-invalid",t._controlInvalid()||null),c.ekj("nx-checkbox",!0)("disabled",t.disabled)("nx-checkbox--label-large","large"===t.labelSize)("nx-checkbox--label-small","small"===t.labelSize)("nx-checkbox--negative",t.negative)("has-error",t._controlInvalid()||null))},inputs:{id:"id",name:"name",disabled:"disabled",labelSize:"labelSize",negative:"negative",checked:"checked",indeterminate:"indeterminate",required:"required",value:"value"},outputs:{indeterminateChange:"indeterminateChange",checkedChange:"checkedChange",checkboxChange:"checkboxChange"},ngContentSelectors:p,decls:9,vars:13,consts:[["type","checkbox",1,"nx-checkbox__input",3,"id","name","checked","indeterminate","disabled","value","blur","click"],["input",""],[1,"nx-checkbox__label",3,"id"],[1,"nx-checkbox__control"],["name","check","aria-hidden","true",4,"ngIf"],["class","nx-checkbox__indeterminate-indicator",4,"ngIf"],[1,"nx-checkbox__label-text",3,"cdkObserveContent"],["checkboxLabelWrapper",""],["name","check","aria-hidden","true"],[1,"nx-checkbox__indeterminate-indicator"]],template:function(e,t){1&e&&(c.F$t(),c.TgZ(0,"input",0,1),c.NdJ("blur",function(){return t.touch()})("click",function(e){return t._onInputClick(e)}),c.qZA(),c.TgZ(2,"label",2),c.TgZ(3,"span",3),c.YNc(4,C,1,0,"nx-icon",4),c.YNc(5,v,1,0,"div",5),c.qZA(),c.TgZ(6,"div",6,7),c.NdJ("cdkObserveContent",function(){return t.labelContentChanged()}),c.Hsn(8),c.qZA(),c.qZA()),2&e&&(c.Q6J("id",t.id)("name",t.name)("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled)("value",t.value),c.uIk("aria-labelledby",t.id+"-label"),c.xp6(2),c.ekj("has-label",t.labelHasContent),c.Q6J("id",t.id+"-label"),c.uIk("for",t.id),c.xp6(2),c.Q6J("ngIf",t.checked),c.xp6(1),c.Q6J("ngIf",t.indeterminate))},directives:[l.O5,_.wD,b.O],styles:["[_nghost-%COMP%]{display:block;position:relative}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--danger);border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--danger)}.nx-checkbox__input[_ngcontent-%COMP%]{opacity:0;position:absolute}.nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-small-label-font-size);line-height:var(--checkbox-small-label-line-height);font-weight:var(--checkbox-small-label-font-weight);letter-spacing:var(--checkbox-small-label-letter-spacing);color:var(--checkbox-label-color);cursor:pointer;display:flex}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-large-label-font-size);line-height:var(--checkbox-large-label-line-height);font-weight:var(--checkbox-large-label-font-weight);letter-spacing:var(--checkbox-large-label-letter-spacing)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-text-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-control-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:var(--checkbox-large-label-text-margin-left)}[dir=rtl]   .nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:initial;margin-right:var(--checkbox-large-label-text-margin-left)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-text-margin-top)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-control-margin-top)}.nx-checkbox__label-text[_ngcontent-%COMP%]{padding:0;margin-left:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__label-text[_ngcontent-%COMP%]:empty{display:none}[dir=rtl][_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:initial;margin-right:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-background-color);border-style:solid;border-width:var(--checkbox-border-width);border-color:var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0;cursor:pointer}.nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-indeterminate-color);background-color:var(--checkbox-indeterminate-color);box-sizing:content-box;height:0;width:8px;border:1px solid;border-radius:2px}.nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color);cursor:not-allowed}.nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--checkbox-label-disabled-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-disabled-border-color);background-color:var(--checkbox-disabled-border-color)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--negative);background-color:transparent}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-accent);background-color:var(--negative);border-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-dimmed);border-color:transparent;background-color:var(--negative-02-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative);background-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-negative-background-color);border-color:var(--negative-01-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative-01-dimmed);background-color:var(--negative-01-dimmed)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-hover-border-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-active-border-color)}.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{forced-color-adjust:none;border-color:buttonText!important;background-color:buttonFace!important}[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:highlight!important;border-color:highlight!important;color:highlightText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:buttonFace!important;border-color:GrayText!important;color:GrayText!important}}"],changeDetection:0}),e})()},37916:function(e,t,n){n.d(t,{R0:function(){return h}});var o=n(38583),c=n(42677),r=n(78459),i=n(18553),a=n(37716);let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,c.cf,i.Q8],r.WI,r.$N]}),e})();n(27149)}}]);