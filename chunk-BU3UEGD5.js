import{c as te}from"./chunk-GVJMYUB3.js";import{b as ee,c as j}from"./chunk-RXOGEG22.js";import{e as w,i as T,o as E}from"./chunk-3IMO4XDX.js";import{a as I}from"./chunk-ZLNTCZEZ.js";import{c as Y,e as Z}from"./chunk-EJUTEBJE.js";import{w as S}from"./chunk-CTAMBHIU.js";import{a as p}from"./chunk-ULYGIILG.js";import{B as X,o as x,s as W}from"./chunk-ZT3EPJ7I.js";import{$b as C,Ac as M,Bc as K,Db as v,Eb as s,Gb as m,Hb as V,Kb as _,Lb as l,Mb as u,Nb as P,Ob as A,Pb as B,Qb as H,Yb as Q,_b as z,ac as d,ea as N,ec as $,ma as R,mb as q,n as F,qa as L,qc as U,tb as h,ua as b,ub as a,va as G,wb as f,xc as k,yb as O,yc as J,zc as y}from"./chunk-KKDUGSQP.js";function ce(r,o){r&1&&(l(0,"div",2),d(1,1),u())}var ae=["*",[["","nxHighlightHeader",""]]],de=["*","[nxHighlightHeader]"],se=["*"];function le(r,o){r&1&&(A(0),d(1,1),B())}var he=["*",[["nx-error"]]],ge=["*","nx-error"],_e=["input"];function ue(r,o){r&1&&(l(0,"div",8),d(1,3),u())}function pe(r,o){r&1&&H(0)}function be(r,o){r&1&&d(0,4,["*ngIf","_errorState"])}function Ce(r,o){r&1&&P(0,"nx-icon",11)}function fe(r,o){r&1&&P(0,"div",12)}var ve=r=>["indicator-element",r];function me(r,o){if(r&1&&(l(0,"span"),_(1,Ce,1,0,"nx-icon",9)(2,fe,1,0,"div",10),u()),r&2){let g=z();V(U(4,ve,g.inputType)),h(1),s("ngIf",g.checked&&g.inputType==="checkbox"),h(1),s("ngIf",g.checked&&g.inputType==="radio")}}var ke=[[["nx-card-header"]],"*",[["nx-card-footer"]],[["","nxHighlightHeader",""]],[["nx-error"]]],Me=["nx-card-header","*","nx-card-footer","[nxHighlightHeader]","nx-error"],Ze=(()=>{let o=class o{constructor(e,t,n){this._elementRef=e,this._focusMonitor=t,this._cdr=n,this._highlight=!1,this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}set highlight(e){let t=p(e);t!==this._highlight&&(this._highlight=t,this._cdr.markForCheck())}get highlight(){return this._highlight}};o.\u0275fac=function(t){return new(t||o)(a(q),a(S),a(f))},o.\u0275cmp=b({type:o,selectors:[["nx-card"]],hostAttrs:[1,"nx-card"],hostVars:2,hostBindings:function(t,n){t&2&&m("is-highlight",n.highlight)},inputs:{highlight:"highlight"},ngContentSelectors:de,decls:3,vars:1,consts:[["class","nx-card-highlight",4,"ngIf"],[1,"nx-card-inner"],[1,"nx-card-highlight"]],template:function(t,n){t&1&&(C(ae),_(0,ce,2,0,"div",0),l(1,"div",1),d(2),u()),t&2&&s("ngIf",n.highlight)},dependencies:[x],styles:["[_nghost-%COMP%]{background:var(--card-background-color);border-color:var(--card-border-color);border-width:var(--card-border-width);border-style:solid;border-radius:var(--card-border-radius);box-shadow:none;display:inline-block;transition:background-color .2s ease,box-shadow .2s ease}[_nghost-%COMP%]   .nx-card-inner[_ngcontent-%COMP%]{padding:23px}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (forced-colors: active),(forced-colors: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}.nx-card-highlight[_ngcontent-%COMP%]{padding:0 23px;border-radius:var(--selectable-card-border-radius) var(--selectable-card-border-radius) 0 0;background:var(--card-highlight-background-color);color:var(--card-highlight-text-color);line-height:28px;font-size:14px;text-align:center}.is-expert[_ngcontent-%COMP%]   .nx-card-highlight[_ngcontent-%COMP%]{text-align:left}"],changeDetection:0});let r=o;return r})();var et=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=b({type:o,selectors:[["nx-card-header"]],ngContentSelectors:se,decls:1,vars:0,template:function(t,n){t&1&&(C(),d(0))},encapsulation:2,changeDetection:0});let r=o;return r})(),D=class{constructor(o,g,e){this.checked=o,this.value=g,this.card=e}},xe=0,Oe=new L("SELECTABLE_CARD_DEFAULT_OPTIONS"),Pe=(()=>{let o=class o{ngAfterContentInit(){setTimeout(()=>{this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton()})}change(e){this.value=e,this._onChange(e)}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}get value(){return this._value}constructor(e,t,n,i,c){this._cdr=e,this.ngControl=t,this._parentForm=n,this._parentFormGroup=i,this._errorStateMatcher=c,this._selected=null,this.errorState=!1,this._value=null,this._onChange=()=>{},this._onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}writeValue(e){this.value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}_updateSelectedRadioFromValue(){this._cards!=null&&(this._selected=null,this._cards.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}ngDoCheck(){this.ngControl&&this.updateErrorState()}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null,i=this._errorStateMatcher.isErrorState(n,t);i!==e&&(this.errorState=i,this._cards.forEach(c=>{c._errorState=i}),this._cdr.markForCheck())}};o.\u0275fac=function(t){return new(t||o)(a(f),a(w,10),a(T,8),a(E,8),a(I))},o.\u0275cmp=b({type:o,selectors:[["nx-selectable-card-group"]],contentQueries:function(t,n,i){if(t&1&&y(i,ye,5),t&2){let c;k(c=M())&&(n._cards=c)}},hostAttrs:["role","radiogroup"],hostVars:4,hostBindings:function(t,n){t&2&&(v("id",n.id)("aria-labelledby",(n._label==null?null:n._label.id)||null),m("has-error",n.errorState))},inputs:{value:"value"},ngContentSelectors:ge,decls:2,vars:1,consts:[[4,"ngIf"]],template:function(t,n){t&1&&(C(he),d(0),_(1,le,2,0,"ng-container",0)),t&2&&(h(1),s("ngIf",n.errorState))},dependencies:[x],changeDetection:0});let r=o;return r})(),ye=(()=>{let o=class o{set appearance(e){e!==this.appearance&&(this._appearance=e,this._cdr.markForCheck())}get appearance(){return this._appearance||this._defaultOptions?.appearance||"default"}set id(e){e!==this._id&&(this._id=e,this._cdr.markForCheck())}get id(){return this._id}set checked(e){let t=p(e);t!==this._checked&&(this._checked=t,this._cdr.markForCheck())}get checked(){return this._checked}set value(e){e&&(this._value=e),this._cdr.markForCheck()}get value(){return this._value}set disabled(e){let t=p(e);t!==this._disabled&&(this._disabled=t,this._cdr.markForCheck())}get disabled(){return this._disabled}set negative(e){let t=p(e);t!==this._negative&&(this._negative=t,this._cdr.markForCheck())}get negative(){return this._negative}set required(e){this._required=p(e)}get required(){return!!this._required}set name(e){this._name=e}get name(){return this._name}set tabindex(e){this._tabindex=e}get tabindex(){return this.disabled?"-1":this._tabindex}set highlight(e){let t=p(e);t!==this._highlight&&(this._highlight=t,this._cdr.markForCheck())}get highlight(){return this._highlight}get _isExpert(){return this.appearance==="expert"}constructor(e,t,n,i,c,ne,oe,re){this._cdr=e,this._errorStateMatcher=t,this.ngControl=n,this._parentForm=i,this._parentFormGroup=c,this._focusMonitor=ne,this._defaultOptions=oe,this.cardGroup=re,this._errorListIds="",this.inputType="checkbox",this._errorState=!1,this.selectionChange=new O,this.checkedChange=new O,this._id=`nx-selectable-card-${xe++}`,this._checked=!1,this._value="",this._disabled=!1,this._negative=!1,this._name="",this._tabindex="0",this._highlight=!1,this._destroyed=new F,this.onChangeCallback=ie=>{},this.onTouchedCallback=ie=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}ngAfterViewInit(){this._focusMonitor.monitor(this._nativeInput)}ngAfterContentInit(){this._errorList.changes.pipe(N(this._destroyed)).subscribe(()=>{this._errorListIds=this._getErrorListIds(),this._cdr.markForCheck()}),this._errorListIds=this._getErrorListIds(),this.cardGroup&&(this.inputType="radio")}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._focusMonitor.stopMonitoring(this._nativeInput)}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}writeValue(e){this.checked=!!e}ngDoCheck(){this.ngControl&&this._updateErrorState()}_updateErrorState(){let e=this._errorState,t=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null,i=this._errorStateMatcher.isErrorState(n,t);i!==e&&(this._errorState=i,this._cdr.markForCheck())}toggle(){this.disabled||(this.cardGroup?this.checked=!0:this.checked=!this.checked)}_onInputClick(e){e.stopPropagation(),this.disabled||(this.toggle(),this._emitChangeEvent())}_onInteractionEvent(e){e.stopPropagation()}_emitChangeEvent(){let e=new D(this.checked,this.value,this);this.onChangeCallback(this.checked),this.selectionChange.emit(e),this.checkedChange.emit(this.checked),this.cardGroup?.change(this.value)}_getErrorListIds(){return this._errorList.map(e=>e.id).join(" ")}};o.\u0275fac=function(t){return new(t||o)(a(f),a(I),a(w,10),a(T,8),a(E,8),a(S),a(Oe,8),a(Pe,8))},o.\u0275cmp=b({type:o,selectors:[["nx-selectable-card"]],contentQueries:function(t,n,i){if(t&1&&y(i,ee,4),t&2){let c;k(c=M())&&(n._errorList=c)}},viewQuery:function(t,n){if(t&1&&J(_e,5),t&2){let i;k(i=M())&&(n._nativeInput=i.first)}},hostVars:8,hostBindings:function(t,n){t&2&&m("is-disabled",n.disabled)("has-error",n._errorState)("is-highlight",n.highlight)("is-expert",n._isExpert)},inputs:{appearance:"appearance",id:"id",checked:"checked",value:"value",disabled:"disabled",negative:"negative",required:"required",name:"name",tabindex:"tabindex",highlight:"highlight"},outputs:{selectionChange:"selectionChange",checkedChange:"checkedChange"},ngContentSelectors:Me,decls:13,vars:15,consts:[[3,"type","checked","value","required","change","blur","click"],["input",""],["class","nx-card-highlight",4,"ngIf"],[1,"nx-card-inner"],[4,"ngTemplateOutlet"],[1,"content"],[4,"ngIf"],["indicatorElement",""],[1,"nx-card-highlight"],["name","check","aria-hidden","true",4,"ngIf"],["class","check-dot",4,"ngIf"],["name","check","aria-hidden","true"],[1,"check-dot"]],template:function(t,n){if(t&1&&(C(ke),l(0,"input",0,1),Q("change",function(c){return n._onInteractionEvent(c)})("blur",function(c){return n.onTouchedCallback(c)})("click",function(c){return n._onInputClick(c)}),u(),l(2,"label"),_(3,ue,2,0,"div",2),l(4,"div",3),_(5,pe,1,0,"ng-container",4),l(6,"div",5),d(7),d(8,1),d(9,2),u()()(),_(10,be,1,0,"ng-content",6)(11,me,3,6,"ng-template",null,7,K)),t&2){let i=$(12);s("type",n.inputType)("checked",n.checked)("value",n.value||null)("required",n.required),v("disabled",n.disabled||null)("id",n.id)("name",n.name)("aria-required",n.required)("tabindex",n.tabindex)("aria-invalid",n._errorState)("aria-describedby",n._errorListIds||null),h(2),v("for",n.id),h(1),s("ngIf",n.highlight),h(2),s("ngTemplateOutlet",i),h(5),s("ngIf",n._errorState)}},dependencies:[x,W,Y],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nx-error{margin-top:8px}[_nghost-%COMP%]     nx-error.nx-error--message{margin-top:12px}  nx-card-footer,   nx-card-content,   nx-card-header{display:block}.indicator-element[_ngcontent-%COMP%]{float:left;color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0}[dir=rtl][_nghost-%COMP%]   .indicator-element[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .indicator-element[_ngcontent-%COMP%]{float:right}.checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-background-color);border-style:solid;border-width:var(--checkbox-border-width);border-color:var(--checkbox-border-color);border-radius:var(--checkbox-border-radius)}.radio[_ngcontent-%COMP%]{border-style:solid;border-width:2px;border-color:var(--radio-button-circle-color);border-radius:50%}.check-dot[_ngcontent-%COMP%]{width:var(--radio-button-dot-size);height:var(--radio-button-dot-size);border-radius:50%;transition:background-color .2s ease;background-color:var(--radio-button-selected-dot-color)}[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{overflow:hidden;padding-left:16px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:0;padding-right:16px}@media (max-width: 703px){[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:8px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-right:8px}}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-hover-color)}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-selected-color)}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-selected-hover-color)}.is-expert[_nghost-%COMP%]   .indicator-element[_ngcontent-%COMP%]{float:right;position:relative}[dir=rtl]   .is-expert[_nghost-%COMP%]   .indicator-element[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]{position:absolute;height:0;width:0;overflow:hidden;opacity:0}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-selected-color);border-color:var(--selectable-card-border-selected-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-hover-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]{border-color:var(--checkbox-selected-border-color)}label[_ngcontent-%COMP%]{border:var(--selectable-card-border-width) solid var(--selectable-card-border-color);display:block;position:relative;cursor:pointer;width:100%;min-height:56px;border-radius:var(--selectable-card-border-radius);background:var(--selectable-card-background-color)}label[_ngcontent-%COMP%]   .nx-card-inner[_ngcontent-%COMP%]{padding:16px}label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-hover-color);border-color:var(--selectable-card-border-hover-color)}.nx-card-highlight[_ngcontent-%COMP%]{padding:0 16px;border-radius:var(--selectable-card-border-radius) var(--selectable-card-border-radius) 0 0;background:var(--card-highlight-background-color);color:var(--card-highlight-text-color);line-height:28px;font-size:14px}@media (hover: none){label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-color);border-color:var(--selectable-card-border-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-color)}}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:var(--selectable-card-border-disabled-color);cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-card-highlight[_ngcontent-%COMP%]{opacity:40%}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-disabled-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-disabled-selected-color);border-color:var(--selectable-card-border-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .indicator-element[_ngcontent-%COMP%]{border-color:var(--checkbox-disabled-border-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color);color:var(--checkbox-disabled-icon-color)}.is-disabled.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color)}.is-disabled[_nghost-%COMP%]   .radio[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--radio-button-disabled-text-color);border-color:var(--radio-button-disabled-border-color)}.is-disabled[_nghost-%COMP%]   .check-dot[_ngcontent-%COMP%]{border-color:var(--radio-button-disabled-border-color);background-color:var(--radio-button-disabled-selected-dot-color)}.has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-color:var(--selectable-card-border-error-color)}input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (forced-colors: active),(forced-colors: active){input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (forced-colors: active){[_nghost-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{border-color:buttonText}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-width:3px;border-color:highlight}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .nx-card-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .nx-card-inner[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .nx-card-inner[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .nx-card-inner[_ngcontent-%COMP%]{padding:14px}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:GrayText;color:GrayText}}"],changeDetection:0});let r=o;return r})(),tt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=G({type:o}),o.\u0275inj=R({imports:[X,Z,j,te,j]});let r=o;return r})();export{Ze as a,et as b,Pe as c,ye as d,tt as e};
