"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[8315],{28315:function(e,t,n){n.r(t),n.d(t,{CodeExamplesModule:function(){return ee}});var r=n(78459),o=n(38583),i=n(3679),s=n(79765),a=n(37716);let c=(()=>{class e{constructor(){this.changes=new s.xQ,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({providers:[c],imports:[[o.ez,i.u5,i.UX]]}),e})();var u=n(36461),d=n(39490),g=n(23674);function p(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"input",1),a.NdJ("ngModelChange",function(t){const n=a.CHM(e).index;return a.oxw()._keyCode[n]=t})("input",function(t){return a.CHM(e),a.oxw()._selectNextInput(t)})("paste",function(t){return a.CHM(e),a.oxw()._pasteClipboard(t)})("blur",function(){return a.CHM(e),a.oxw()._onBlur()})("focus",function(){return a.CHM(e),a.oxw()._setFocusState()})("click",function(t){return a.CHM(e),a.oxw()._selectText(t)})("keydown",function(t){return a.CHM(e),a.oxw()._keydownAction(t)}),a.qZA()}if(2&e){const e=t.index,n=a.oxw();a.Q6J("ngModel",n._keyCode[e])("ngClass",n._inputGap(e)),a.uIk("aria-label",n.getAriaLabel(e))("type",n.type)("tabindex",n.tabindex)("disabled",n.disabled?"":null)}}const h="INPUT";let f=(()=>{class e{constructor(e,t,n,r,o,i,s){this._changeDetectorRef=e,this._el=t,this._control=n,this._intl=r,this._errorStateMatcher=o,this._parentForm=i,this._parentFormGroup=s,this.errorState=!1,this._codeLength=6,this._type="text",this._isUpDown=!1,this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this.propagateChange=e=>{},this.propagateTouch=e=>{},this._control&&(this._control.valueAccessor=this)}set codeLength(e){this._codeLength=e,this.setInputLength(),this._changeDetectorRef.markForCheck()}get codeLength(){return this._codeLength}set type(e){this._type=e,this._changeDetectorRef.markForCheck()}get type(){return this._type}set tabindex(e){this._tabindex=e,this._changeDetectorRef.markForCheck()}get tabindex(){return this._tabindex}set convertTo(e){this._convertTo=e,this._changeDetectorRef.markForCheck()}get convertTo(){return this._convertTo}set negative(e){const t=(0,d.Ig)(e);this._negative!==t&&(this._negative=t,this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set disabled(e){const t=(0,d.Ig)(e);this._disabled!==t&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}ngDoCheck(){this._control&&this.updateErrorState()}setInputLength(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}_convertLetterSize(e){return"\xdf"===e?e:"string"==typeof e?"upper"===this.convertTo?e.toUpperCase():"lower"===this.convertTo?e.toLowerCase():e:void 0}_keydownAction(e){const t=e.target,n=t.previousElementSibling,r=t.nextElementSibling;switch(e.keyCode){case u.L_:return!1;case u.ZH:""===t.value&&n&&n.tagName===h&&this.selectInput(n);break;case u.oh:n&&n.tagName===h&&(e.preventDefault(),this.selectInput(n));break;case u.SV:r&&r.tagName===h&&this.selectInput(r),e.preventDefault();break;case u.JH:this._isUpDown=!0,"number"===this._type&&(""===t.value||"0"===t.value)&&e.preventDefault();break;case u.LH:this._isUpDown=!0,"number"===this._type&&"9"===t.value&&e.preventDefault()}}_selectText(e){this.selectInput(e.target)}_selectNextInput(e){const t=e.target;t.value=this._convertLetterSize(t.value.slice(0,1));const n=Number(this._getFocusedInputIndex(e));if(this._keyCode[n]=t.value,this.propagateChange(this._keyCode.join("")),t.value&&(!this._isUpDown||"number"!==this.type)){const e=t.nextSibling;null!==e&&e.tagName===h&&(e.focus(),""!==e.value&&this.selectInput(e))}this._isUpDown=!1}_pasteClipboard(e){let t=(e.clipboardData||window.clipboardData).getData("text"),n=0;const r=Number(this._getFocusedInputIndex(e));t="number"===this.type?this._formatNumberInput(t):t;for(let o=r;o<this.codeLength;o++)this._keyCode[o]=this._convertLetterSize(t[n]),n++;this.propagateChange(this._keyCode.join("")),r+t.length<this.codeLength?this._el.nativeElement.children.item(r+t.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),e.preventDefault()}_getFocusedInputIndex(e){let t;for(let n=0;n<this._el.nativeElement.children.length;n++)e.srcElement===this._el.nativeElement.children.item(n)&&(t=n);return t}_formatNumberInput(e){let t="";for(let n=0;n<e.length;n++)e[n].match(/[0-9]{1}$/)&&(t+=e[n]);return t}_onBlur(){this._focused=!1,setTimeout(()=>{this._focused||this.propagateTouch(this._keyCode.join("")),this._changeDetectorRef.markForCheck()})}_setFocusState(){this._focused=!0}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}writeValue(e){if(e){const t=e.split("").slice(0,this.codeLength);for(let e=0;e<this.codeLength;e++)this._keyCode[e]=t[e]}else this.setInputLength();this._changeDetectorRef.markForCheck()}_trackByKeyCode(e,t){return e}_inputGap(e){switch(this.codeLength){case 4:case 6:case 8:return e===this.codeLength/2?"nx-code-input--field-with-gap":"";default:return""}}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.propagateTouch=e}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}getAriaLabel(e){return`${this._intl.inputFieldAriaLabel} ${e+1} ${this._intl.ofLabel} ${this._keyCode.length}`}selectInput(e){e.focus();try{e.setSelectionRange(0,e.value.length)}catch(t){if(!(t instanceof DOMException&&"InvalidStateError"===t.name))throw t}}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.sBO),a.Y36(a.SBq),a.Y36(i.a5,10),a.Y36(c),a.Y36(g.rD),a.Y36(i.F,8),a.Y36(i.sg,8))},e.\u0275cmp=a.Xpm({type:e,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(e,t){2&e&&(a.uIk("tabindex",-1),a.ekj("nx-code-input",!0)("has-error",t.errorState)("is-negative",t.negative)("is-disabled",t.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(e,t){1&e&&a.YNc(0,p,1,6,"input",0),2&e&&a.Q6J("ngForOf",t._keyCode)("ngForTrackBy",t._trackByKeyCode)},directives:[o.sg,i.Fj,i.nD,i.JJ,i.On,o.mk],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px var(--code-input-color);-webkit-appearance:none;width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-1px;color:var(--code-input-active-color);box-shadow:inset 0 -2px var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-1px;font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%], .nx-code-input__field[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors: active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}.nx-code-input__field[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (-ms-high-contrast: active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px GrayText;opacity:1}}"],changeDetection:0}),e})();var m=n(90722),_=n(37871);function x(e,t){1&e&&(a.TgZ(0,"nx-error",9),a._uU(1," Entry is required. "),a.qZA())}function C(e,t){1&e&&(a.TgZ(0,"nx-error",9),a._uU(1," Entry must match pattern. "),a.qZA())}function y(e,t){1&e&&(a.TgZ(0,"nx-error",9),a._uU(1," Entry is too short. "),a.qZA())}function b(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,x,2,0,"nx-error",8),a.YNc(2,C,2,0,"nx-error",8),a.YNc(3,y,2,0,"nx-error",8),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("pattern")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let v=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI({value:this.inputValue,disabled:!0},{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}toggleDisabled(){var e,t;(null===(e=this.keyCode)||void 0===e?void 0:e.disabled)?this.keyCode.enable():null===(t=this.keyCode)||void 0===t||t.disable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,b,4,3,"div",4),a.TgZ(5,"p"),a._uU(6),a.qZA(),a.TgZ(7,"button",5),a._uU(8,"Submit"),a.qZA(),a.TgZ(9,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(10,"Clear"),a.qZA(),a.TgZ(11,"button",7),a.NdJ("click",function(){return t.toggleDisabled()}),a._uU(12,"Toggle disabled"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(2),a.Q6J("length",4),a.xp6(2),a.Q6J("ngIf",e.errorState),a.xp6(2),a.hij("Disabled: ",null==t.keyCode?null:t.keyCode.disabled,"")}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function k(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function Z(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry must match pattern. "),a.qZA())}function w(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function I(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,k,2,0,"nx-error",7),a.YNc(2,Z,2,0,"nx-error",7),a.YNc(3,w,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("pattern")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let O=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,I,4,3,"div",4),a._UZ(5,"br"),a.TgZ(6,"button",5),a._uU(7,"Submit"),a.qZA(),a.TgZ(8,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(9,"Clear"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(2),a.Q6J("length",4),a.xp6(2),a.Q6J("ngIf",e.errorState)}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function M(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function T(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry must match pattern. "),a.qZA())}function A(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function J(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,M,2,0,"nx-error",7),a.YNc(2,T,2,0,"nx-error",7),a.YNc(3,A,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("pattern")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let F=(()=>{class e extends c{constructor(){super(...arguments),this.inputFieldAriaLabel="Key eingeben",this.ofLabel="von"}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=a.n5z(e)))(n||e)}}(),e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),q=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(5)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-localize-example"]],features:[a._Bn([{provide:c,useClass:F}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,J,4,3,"div",4),a._UZ(5,"br"),a.TgZ(6,"button",5),a._uU(7,"Submit"),a.qZA(),a.TgZ(8,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(9,"Clear"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(2),a.Q6J("length",5),a.xp6(2),a.Q6J("ngIf",e.errorState)}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function P(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function N(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function E(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,P,2,0,"nx-error",7),a.YNc(2,N,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let U=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){var e;this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.minLength(4)],updateOn:"change"})}),null===(e=this.keyCode)||void 0===e||e.valueChanges.subscribe(()=>{var e;(null===(e=this.keyCode)||void 0===e?void 0:e.valid)&&"1234"!==this.keyCode.value&&this.codeForm.setValue({keyCode:"1234"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,E,3,2,"div",4),a._UZ(5,"br"),a.TgZ(6,"button",5),a._uU(7,"Submit"),a.qZA(),a.TgZ(8,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(9,"Clear"),a.qZA(),a.TgZ(10,"p"),a._uU(11),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(2),a.Q6J("length",4),a.xp6(2),a.Q6J("ngIf",e.errorState),a.xp6(7),a.hij(" Code input value: '",null==t.keyCode?null:t.keyCode.value,"' ")}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})(),Q=(()=>{class e{constructor(){this.inputValue=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a._UZ(1,"nx-code-input",1),a.qZA()),2&e&&(a.xp6(1),a.Q6J("length",4))},directives:[f],styles:[""]}),e})();function L(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function Y(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry must match pattern. "),a.qZA())}function S(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function D(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,L,2,0,"nx-error",7),a.YNc(2,Y,2,0,"nx-error",7),a.YNc(3,S,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("pattern")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let B=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.minLength(7)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,D,4,3,"div",4),a._UZ(5,"br"),a.TgZ(6,"button",5),a._uU(7,"Submit"),a.qZA(),a.TgZ(8,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(9,"Clear"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(2),a.Q6J("length",7),a.xp6(2),a.Q6J("ngIf",e.errorState)}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function z(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function V(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function G(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,z,2,0,"nx-error",7),a.YNc(2,V,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let R=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.minLength(6)],updateOn:"blur"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a._UZ(2,"nx-code-input",2,3),a.YNc(4,G,3,2,"div",4),a._UZ(5,"br"),a.TgZ(6,"button",5),a._uU(7,"Submit"),a.qZA(),a.TgZ(8,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(9,"Clear"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(3);a.Q6J("formGroup",t.codeForm),a.xp6(4),a.Q6J("ngIf",e.errorState)}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),e})();function X(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is required. "),a.qZA())}function H(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry must match pattern. "),a.qZA())}function j(e,t){1&e&&(a.TgZ(0,"nx-error",8),a._uU(1," Entry is too short. "),a.qZA())}function $(e,t){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,X,2,0,"nx-error",7),a.YNc(2,H,2,0,"nx-error",7),a.YNc(3,j,2,0,"nx-error",7),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("required")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("pattern")),a.xp6(1),a.Q6J("ngIf",null==e.keyCode?null:e.keyCode.hasError("minlength"))}}let K=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.cw({keyCode:new i.NI(this.inputValue,{validators:[i.kI.required,i.kI.pattern(RegExp("^[0-9]*$")),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"form",0,1),a.TgZ(2,"label"),a._uU(3,"Enter PIN code"),a.qZA(),a._UZ(4,"nx-code-input",2,3),a.YNc(6,$,4,3,"div",4),a._UZ(7,"br"),a.TgZ(8,"button",5),a._uU(9,"Submit"),a.qZA(),a.TgZ(10,"button",6),a.NdJ("click",function(){return a.CHM(e),a.MAs(1).resetForm()}),a._uU(11,"Clear"),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(5);a.Q6J("formGroup",t.codeForm),a.xp6(4),a.Q6J("length",4),a.xp6(2),a.Q6J("ngIf",e.errorState)}},directives:[i._Y,i.JL,i.sg,f,i.JJ,i.u,o.O5,m.X,_.vV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();var W=n(29508);let ee=(()=>{class e{static components(){return{"code-input-disabled":v,"code-input-four-char":O,"code-input-localize":q,"code-input-model":U,"code-input-negative":Q,"code-input-seven-char":B,"code-input-six-char":R,"code-input-type":K}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[l,r.$N,W.f]]}),e})()},29508:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(50214),o=n(76198),i=n(77549),s=n(79661),a=n(38583),c=n(3679),l=n(37716);let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[],a.ez,c.u5,c.UX,s.ru,i.X,o.K,r.TW]}),e})()},37871:function(e,t,n){n.d(t,{hZ:function(){return m},vV:function(){return _}});var r=n(37716),o=n(39490),i=n(79765),s=n(46782),a=n(38583),c=n(90805),l=n(38701);function u(e,t){1&e&&r._UZ(0,"nx-icon",7),2&e&&r.Q6J("name","exclamation-triangle")}function d(e,t){if(1&e&&(r.ynx(0),r.YNc(1,u,1,1,"nx-icon",3),r.TgZ(2,"div",4),r.TgZ(3,"div",5),r.GkF(4,6),r.qZA(),r.qZA(),r.BQk()),2&e){const e=r.oxw(),t=r.MAs(3);r.xp6(1),r.Q6J("ngIf",e.showIcon),r.xp6(3),r.Q6J("ngTemplateOutlet",t)}}function g(e,t){if(1&e&&(r.TgZ(0,"nx-message",8),r.GkF(1,6),r.qZA()),2&e){r.oxw();const e=r.MAs(3);r.xp6(1),r.Q6J("ngTemplateOutlet",e)}}function p(e,t){1&e&&r.Hsn(0)}const h=["*"];let f=0;const m=new r.OlP("ERROR_DEFAULT_OPTIONS");let _=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._defaultOptions=t,this._showIcon=!0,this._id="nx-error-"+f++,this._destroyed=new i.xQ,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe((0,s.R)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(e){this._showIcon=(0,o.Ig)(e),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.sBO),r.Y36(m,8))},e.\u0275cmp=r.Xpm({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(r.uIk("role","alert")("id",t.id),r.ekj("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:h,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(r.F$t(),r.YNc(0,d,5,2,"ng-container",0),r.YNc(1,g,2,1,"nx-message",1),r.YNc(2,p,1,0,"ng-template",null,2,r.W1O)),2&e&&(r.Q6J("ngIf","text"===t.appearance),r.xp6(1),r.Q6J("ngIf","message"===t.appearance))},directives:[a.O5,a.tP,c.O,l.w],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}"],changeDetection:0}),e})()},23061:function(e,t,n){n.d(t,{U:function(){return l}});var r=n(37716),o=n(39490),i=n(79765);const s=["*"];let a=0;const c=new r.OlP("LABEL_DEFAULT_OPTIONS");let l=(()=>{class e{constructor(e){this._defaultOptions=e,this._stateChanges=new i.xQ,this._disabled=!1,this._negative=!1,this._id="nx-label-"+a++}set disabled(e){this._disabled=(0,o.Ig)(e),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=(0,o.Ig)(e),this._stateChanges.next()}get negative(){return this._negative}set id(e){this._id!==e&&(this._id=e)}get id(){return this._id}set size(e){this._size=e,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c,8))},e.\u0275cmp=r.Xpm({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(r.uIk("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),r.ekj("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:s,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(r.F$t(),r.TgZ(0,"label",0),r.Hsn(1),r.qZA())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e})()},78459:function(e,t,n){n.d(t,{hZ:function(){return c.hZ},vV:function(){return c.vV},$N:function(){return a},UD:function(){return u.U},WI:function(){return l}});var r=n(38583),o=n(42677),i=n(51424),s=n(37716);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,o.cf,i.Ee]]}),e})();var c=n(37871);let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez]]}),e})();var u=n(23061)}}]);