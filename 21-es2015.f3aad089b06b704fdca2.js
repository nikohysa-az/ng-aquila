(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+IXF":function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return a.b}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return u.a});var r=n("ofXK"),o=n("mN63"),i=n("SqJ0"),s=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({factory:function(t){return new(t||e)},imports:[[r.c,o.c,i.a]]}),e})();var a=n("aXeq");let l=(()=>{class e{}return e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({factory:function(t){return new(t||e)},imports:[[r.c]]}),e})();var u=n("Q3ZH")},"/sJ9":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({factory:function(t){return new(t||e)}}),e})();n("LktG")},"7Ynf":function(e,t,n){"use strict";n.r(t),n.d(t,"CodeExamplesModule",function(){return ee});var r=n("+IXF"),o=n("ofXK"),i=n("3Pt+"),s=n("XNiG"),c=n("fXoL");let a=(()=>{class e{constructor(){this.changes=new s.a,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(t){return new(t||e)},providers:[a],imports:[[o.c,i.k,i.v]]}),e})();var u=n("FtGj"),d=n("8LU1"),g=n("zB3U");function h(e,t){if(1&e){const e=c.Wb();c.Vb(0,"input",1),c.cc("ngModelChange",function(n){c.xc(e);const r=t.index;return c.gc()._keyCode[r]=n})("input",function(t){return c.xc(e),c.gc()._selectNextInput(t)})("paste",function(t){return c.xc(e),c.gc()._pasteClipboard(t)})("blur",function(){return c.xc(e),c.gc()._onBlur()})("focus",function(){return c.xc(e),c.gc()._setFocusState()})("click",function(t){return c.xc(e),c.gc()._selectText(t)})("keydown",function(t){return c.xc(e),c.gc()._keydownAction(t)}),c.Ub()}if(2&e){const e=t.index,n=c.gc();c.mc("ngModel",n._keyCode[e])("ngClass",n._inputGap(e)),c.Eb("aria-label",n.getAriaLabel(e))("type",n.type)("tabindex",n.tabindex)("disabled",n.disabled?"":null)}}let p=(()=>{class e{constructor(e,t,n,r,o,i,s){this._changeDetectorRef=e,this._el=t,this._control=n,this._intl=r,this._errorStateMatcher=o,this._parentForm=i,this._parentFormGroup=s,this.errorState=!1,this._codeLength=6,this._type="text",this._isUpDown=!1,this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this.propagateChange=e=>{},this.propagateTouch=e=>{},this._control&&(this._control.valueAccessor=this)}set codeLength(e){this._codeLength=e,this.setInputLength(),this._changeDetectorRef.markForCheck()}get codeLength(){return this._codeLength}set type(e){this._type=e,this._changeDetectorRef.markForCheck()}get type(){return this._type}set tabindex(e){this._tabindex=e,this._changeDetectorRef.markForCheck()}get tabindex(){return this._tabindex}set convertTo(e){this._convertTo=e,this._changeDetectorRef.markForCheck()}get convertTo(){return this._convertTo}set negative(e){const t=Object(d.b)(e);this._negative!==t&&(this._negative=t,this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set disabled(e){const t=Object(d.b)(e);this._disabled!==t&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}ngDoCheck(){this._control&&this.updateErrorState()}setInputLength(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}_convertLetterSize(e){return"\xdf"===e?e:"string"==typeof e?"upper"===this.convertTo?e.toUpperCase():"lower"===this.convertTo?e.toLowerCase():e:void 0}_keydownAction(e){const t=e.target.previousElementSibling,n=e.target.nextElementSibling;switch(e.keyCode){case u.o:return!1;case u.b:""===e.target.value&&t&&"INPUT"===t.tagName&&this.selectInput(t);break;case u.i:t&&"INPUT"===t.tagName&&(e.preventDefault(),this.selectInput(t));break;case u.m:n&&"INPUT"===n.tagName&&this.selectInput(n),e.preventDefault();break;case u.d:this._isUpDown=!0,"number"!==this._type||""!==e.target.value&&"0"!==e.target.value||e.preventDefault();break;case u.q:this._isUpDown=!0,"number"===this._type&&"9"===e.target.value&&e.preventDefault()}}_selectText(e){this.selectInput(e.target)}_selectNextInput(e){e.target.value=this._convertLetterSize(e.target.value.slice(0,1));const t=this._getFocusedInputIndex(e);if(this._keyCode[t]=e.target.value,this.propagateChange(this._keyCode.join("")),e.target.value&&(!this._isUpDown||"number"!==this.type)){const t=e.target.nextSibling;null!==t&&"INPUT"===t.tagName&&(t.focus(),""!==t.value&&this.selectInput(t))}this._isUpDown=!1}_pasteClipboard(e){let t=(e.clipboardData||window.clipboardData).getData("text"),n=0;const r=this._getFocusedInputIndex(e);t="number"===this.type?this._formatNumberInput(t):t;for(let o=r;o<this.codeLength;o++)this._keyCode[o]=this._convertLetterSize(t[n]),n++;this.propagateChange(this._keyCode.join("")),r+t.length<this.codeLength?this._el.nativeElement.children.item(r+t.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),e.preventDefault()}_getFocusedInputIndex(e){let t;for(let n=0;n<this._el.nativeElement.children.length;n++)e.srcElement===this._el.nativeElement.children.item(n)&&(t=n);return t}_formatNumberInput(e){let t="";for(let n=0;n<e.length;n++)e[n].match(/[0-9]{1}$/)&&(t+=e[n]);return t}_onBlur(){this._focused=!1,setTimeout(()=>{this._focused||this.propagateTouch(this._keyCode.join("")),this._changeDetectorRef.markForCheck()})}_setFocusState(){this._focused=!0}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}writeValue(e){if(e){const t=e.split("").slice(0,this.codeLength);for(let e=0;e<this.codeLength;e++)this._keyCode[e]=t[e]}else this.setInputLength();this._changeDetectorRef.markForCheck()}_trackByKeyCode(e,t){return e}_inputGap(e){switch(this.codeLength){case 4:case 6:case 8:if(e===this.codeLength/2)return"nx-code-input--field-with-gap";break;default:return}}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.propagateTouch=e}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}getAriaLabel(e){return`${this._intl.inputFieldAriaLabel} ${e+1} ${this._intl.ofLabel} ${this._keyCode.length}`}selectInput(e){e.focus();try{e.setSelectionRange(0,e.value.length)}catch(t){if(!(t instanceof DOMException&&"InvalidStateError"===t.name))throw t}}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(c.h),c.Pb(c.l),c.Pb(i.o,10),c.Pb(a),c.Pb(g.a),c.Pb(i.r,8),c.Pb(i.i,8))},e.\u0275cmp=c.Jb({type:e,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(e,t){2&e&&(c.Eb("tabindex",-1),c.Hb("nx-code-input",!0)("has-error",t.errorState)("is-negative",t.negative)("is-disabled",t.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(e,t){1&e&&c.Hc(0,h,1,6,"input",0),2&e&&c.mc("ngForOf",t._keyCode)("ngForTrackBy",t._trackByKeyCode)},directives:[o.p,i.a,i.l,i.p,i.s,o.n],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-1px;color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-1px;font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors:active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (-ms-high-contrast:active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0}),e})();var b=n("LTpZ"),m=n("aXeq");function f(e,t){1&e&&(c.Vb(0,"nx-error",9),c.Jc(1," Entry is required. "),c.Ub())}function x(e,t){1&e&&(c.Vb(0,"nx-error",9),c.Jc(1," Entry must match pattern. "),c.Ub())}function _(e,t){1&e&&(c.Vb(0,"nx-error",9),c.Jc(1," Entry is too short. "),c.Ub())}function y(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,f,2,0,"nx-error",8),c.Hc(2,x,2,0,"nx-error",8),c.Hc(3,_,2,0,"nx-error",8),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("pattern")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let v=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e({value:this.inputValue,disabled:!0},{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}toggleDisabled(){this.keyCode.disabled?this.keyCode.enable():this.keyCode.disable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,y,4,3,"div",4),c.Vb(5,"p"),c.Jc(6),c.Ub(),c.Vb(7,"button",5),c.Jc(8,"Submit"),c.Ub(),c.Vb(9,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(10,"Clear"),c.Ub(),c.Vb(11,"button",7),c.cc("click",function(){return t.toggleDisabled()}),c.Jc(12,"Toggle disabled"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(2),c.mc("length",4),c.Db(2),c.mc("ngIf",e.errorState),c.Db(2),c.Lc("Disabled: ",t.keyCode.disabled,"")}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function C(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function k(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry must match pattern. "),c.Ub())}function w(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function O(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,C,2,0,"nx-error",7),c.Hc(2,k,2,0,"nx-error",7),c.Hc(3,w,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("pattern")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let I=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,O,4,3,"div",4),c.Qb(5,"br"),c.Vb(6,"button",5),c.Jc(7,"Submit"),c.Ub(),c.Vb(8,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(9,"Clear"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(2),c.mc("length",4),c.Db(2),c.mc("ngIf",e.errorState)}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function P(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function M(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry must match pattern. "),c.Ub())}function D(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function V(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,P,2,0,"nx-error",7),c.Hc(2,M,2,0,"nx-error",7),c.Hc(3,D,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("pattern")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let U=(()=>{class e extends a{constructor(){super(...arguments),this.inputFieldAriaLabel="Key eingeben",this.ofLabel="von"}}return e.\u0275fac=function(t){return F(t||e)},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac}),e})();const F=c.Xb(U);let E=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(5)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-localize-example"]],features:[c.Cb([{provide:a,useClass:U}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,V,4,3,"div",4),c.Qb(5,"br"),c.Vb(6,"button",5),c.Jc(7,"Submit"),c.Ub(),c.Vb(8,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(9,"Clear"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(2),c.mc("length",5),c.Db(2),c.mc("ngIf",e.errorState)}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function L(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function J(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function T(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,L,2,0,"nx-error",7),c.Hc(2,J,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let q=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(4)],updateOn:"change"})}),this.keyCode.valueChanges.subscribe(()=>{this.keyCode.valid&&"1234"!==this.keyCode.value&&this.codeForm.setValue({keyCode:"1234"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,T,3,2,"div",4),c.Qb(5,"br"),c.Vb(6,"button",5),c.Jc(7,"Submit"),c.Ub(),c.Vb(8,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(9,"Clear"),c.Ub(),c.Vb(10,"p"),c.Jc(11),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(2),c.mc("length",4),c.Db(2),c.mc("ngIf",e.errorState),c.Db(7),c.Lc(" Code input value: '",t.keyCode.value,"' ")}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})(),N=(()=>{class e{constructor(){this.inputValue=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(e,t){1&e&&(c.Vb(0,"div",0),c.Qb(1,"nx-code-input",1),c.Ub()),2&e&&(c.Db(1),c.mc("length",4))},directives:[p],styles:[""]}),e})();function S(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function H(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry must match pattern. "),c.Ub())}function z(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function B(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,S,2,0,"nx-error",7),c.Hc(2,H,2,0,"nx-error",7),c.Hc(3,z,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("pattern")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let G=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(7)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,B,4,3,"div",4),c.Qb(5,"br"),c.Vb(6,"button",5),c.Jc(7,"Submit"),c.Ub(),c.Vb(8,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(9,"Clear"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(2),c.mc("length",7),c.Db(2),c.mc("ngIf",e.errorState)}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function A(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function R(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function X(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,A,2,0,"nx-error",7),c.Hc(2,R,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let Q=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(6)],updateOn:"blur"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Qb(2,"nx-code-input",2,3),c.Hc(4,X,3,2,"div",4),c.Qb(5,"br"),c.Vb(6,"button",5),c.Jc(7,"Submit"),c.Ub(),c.Vb(8,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(9,"Clear"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(3);c.mc("formGroup",t.codeForm),c.Db(4),c.mc("ngIf",e.errorState)}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),e})();function j(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is required. "),c.Ub())}function W(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry must match pattern. "),c.Ub())}function K(e,t){1&e&&(c.Vb(0,"nx-error",8),c.Jc(1," Entry is too short. "),c.Ub())}function Z(e,t){if(1&e&&(c.Vb(0,"div"),c.Hc(1,j,2,0,"nx-error",7),c.Hc(2,W,2,0,"nx-error",7),c.Hc(3,K,2,0,"nx-error",7),c.Ub()),2&e){const e=c.gc();c.Db(1),c.mc("ngIf",e.keyCode.hasError("required")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("pattern")),c.Db(1),c.mc("ngIf",e.keyCode.hasError("minlength"))}}let $=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern(RegExp("^[0-9]*$")),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Jb({type:e,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=c.Wb();c.Vb(0,"form",0,1),c.Vb(2,"label"),c.Jc(3,"Enter PIN code"),c.Ub(),c.Qb(4,"nx-code-input",2,3),c.Hc(6,Z,4,3,"div",4),c.Qb(7,"br"),c.Vb(8,"button",5),c.Jc(9,"Submit"),c.Ub(),c.Vb(10,"button",6),c.cc("click",function(){return c.xc(e),c.tc(1).resetForm()}),c.Jc(11,"Clear"),c.Ub(),c.Ub()}if(2&e){const e=c.tc(5);c.mc("formGroup",t.codeForm),c.Db(4),c.mc("length",4),c.Db(2),c.mc("ngIf",e.errorState)}},directives:[i.A,i.q,i.i,p,i.p,i.g,o.q,b.a,m.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();var Y=n("ierq");let ee=(()=>{class e{static components(){return{"code-input-disabled":v,"code-input-four-char":I,"code-input-localize":E,"code-input-model":q,"code-input-negative":N,"code-input-seven-char":G,"code-input-six-char":Q,"code-input-type":$}}}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(t){return new(t||e)},imports:[[l,r.c,Y.a]]}),e})()},LktG:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("fXoL");const o=["nxCopytext",""],i=["*"];let s=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&r.Hb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:o,ngContentSelectors:i,decls:1,vars:0,template:function(e,t){1&e&&(r.lc(),r.kc(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},Q3ZH:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG");const s=["*"];let c=0;const a=new r.s("LABEL_DEFAULT_OPTIONS");let l=(()=>{class e{constructor(e){this._defaultOptions=e,this._stateChanges=new i.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+c++}set disabled(e){this._disabled=Object(o.b)(e),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=Object(o.b)(e),this._stateChanges.next()}get negative(){return this._negative}set id(e){this._id!==e&&(this._id=e)}get id(){return this._id}set size(e){this._size=e,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(a,8))},e.\u0275cmp=r.Jb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(r.Eb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),r.Hb("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:s,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(r.lc(),r.Vb(0,"label",0),r.kc(1),r.Ub())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e})()},aXeq:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG"),s=n("1G5W"),c=n("ofXK"),a=n("+vaC"),l=n("Xe60");function u(e,t){1&e&&r.Qb(0,"nx-icon",7),2&e&&r.mc("name","exclamation-triangle")}function d(e,t){if(1&e&&(r.Tb(0),r.Hc(1,u,1,1,"nx-icon",3),r.Vb(2,"div",4),r.Vb(3,"div",5),r.Rb(4,6),r.Ub(),r.Ub(),r.Sb()),2&e){const e=r.gc(),t=r.tc(3);r.Db(1),r.mc("ngIf",e.showIcon),r.Db(3),r.mc("ngTemplateOutlet",t)}}function g(e,t){if(1&e&&(r.Vb(0,"nx-message",8),r.Rb(1,6),r.Ub()),2&e){r.gc();const e=r.tc(3);r.Db(1),r.mc("ngTemplateOutlet",e)}}function h(e,t){1&e&&r.kc(0)}const p=["*"];let b=0;const m=new r.s("ERROR_DEFAULT_OPTIONS");let f=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._defaultOptions=t,this._showIcon=!0,this._id="nx-error-"+b++,this._destroyed=new i.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(s.a)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(e){this._showIcon=Object(o.b)(e),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(r.h),r.Pb(m,8))},e.\u0275cmp=r.Jb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(r.Eb("role","alert")("id",t.id),r.Hb("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:p,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(r.lc(),r.Hc(0,d,5,2,"ng-container",0),r.Hc(1,g,2,1,"nx-message",1),r.Hc(2,h,1,0,"ng-template",null,2,r.Ic)),2&e&&(r.mc("ngIf","text"===t.appearance),r.Db(1),r.mc("ngIf","message"===t.appearance))},directives:[c.q,c.u,a.a,l.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e})()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("tgBs"),o=n("/sJ9"),i=n("eV8M"),s=n("gkbm"),c=n("ofXK"),a=n("3Pt+"),l=n("fXoL");let u=(()=>{class e{}return e.\u0275mod=l.Nb({type:e}),e.\u0275inj=l.Mb({factory:function(t){return new(t||e)},imports:[[],c.c,a.k,a.v,s.b,i.a,o.a,r.a]}),e})()}}]);