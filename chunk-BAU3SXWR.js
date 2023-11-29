import{a as _e}from"./chunk-I3GP7RBK.js";import"./chunk-NTMIDPZV.js";import{b as P,c as fe}from"./chunk-RXOGEG22.js";import{A as ue,b as le,d as c,e as pe,f as I,g as w,h as N,i as me,j as M,k as de,l as T,o as E,r as O,z as ce}from"./chunk-3IMO4XDX.js";import"./chunk-GQ727JTY.js";import"./chunk-GMSXOXJ6.js";import"./chunk-IMEAWFVZ.js";import"./chunk-AZNKYEEF.js";import{a as se}from"./chunk-ZLNTCZEZ.js";import{g as F}from"./chunk-Q3RH2ON6.js";import"./chunk-BEZOOHB2.js";import"./chunk-25NSX5VO.js";import"./chunk-L4WV7CZG.js";import"./chunk-EJUTEBJE.js";import"./chunk-CTAMBHIU.js";import"./chunk-6Y75KBYQ.js";import{a as Z}from"./chunk-ULYGIILG.js";import{B as ae,l as re,n as ie,o as S}from"./chunk-ZT3EPJ7I.js";import{Aa as g,Da as Y,Db as H,Eb as l,Gb as ne,Kb as u,Lb as i,Mb as a,Nb as f,Rb as b,Yb as v,_b as _,ea as Q,ec as x,fc as p,hc as $,jc as oe,la as R,ma as K,mb as ee,n as U,tb as d,ua as h,ub as L,va as W,wb as te,za as C}from"./chunk-KKDUGSQP.js";function Fe(t,e){if(t&1){let s=b();i(0,"input",1),v("input",function(n){C(s);let r=_();return g(r._handleInput(n))})("blur",function(){C(s);let n=_();return g(n._onBlur())})("focus",function(){C(s);let n=_();return g(n._setFocusState())})("mousedown",function(n){C(s);let r=_();return g(r._selectText(n))})("keydown",function(n){C(s);let r=_();return g(r._keydownAction(n))}),a()}if(t&2){let s=e.index,o=_();l("ngModel",o._keyCode[s])("ngClass",o._inputGap(s))("disabled",!!o.disabled),H("aria-label",o.getAriaLabel(s))("type",o.type)("tabindex",o.tabindex)}}var z=(()=>{let e=class e{constructor(){this.changes=new U,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac});let t=e;return t})(),X=6,J="INPUT",we="upper",Ne="lower",Me="nx-code-input--field-with-gap",k=(()=>{let e=class e{set codeLength(o){this._codeLength=o,this.setInputLength()}get codeLength(){return this._codeLength}set type(o){this._type=o}get type(){return this._type}set tabindex(o){this._tabindex=o}get tabindex(){return this._tabindex}set convertTo(o){this._convertTo=o}get convertTo(){return this._convertTo}set negative(o){let n=Z(o);this._negative!==n&&(this._negative=n)}get negative(){return this._negative}set disabled(o){let n=Z(o);this._disabled!==n&&(this._disabled=n)}get disabled(){return this._disabled}constructor(o,n,r,m,V,y,ke){this._cdr=o,this._el=n,this._control=r,this._intl=m,this._errorStateMatcher=V,this._parentForm=y,this._parentFormGroup=ke,this.errorState=!1,this._codeLength=X,this._type="text",this._tabindex=0,this._keyCode=new Array(X).fill(""),this._focused=!1,this._negative=!1,this._disabled=!1,this._isUpDown=!1,this.propagateChange=Se=>{},this.propagateTouch=Se=>{},this._control&&(this._control.valueAccessor=this)}ngDoCheck(){this._control&&this.updateErrorState()}setInputLength(){this.codeLength?this._keyCode=new Array(this.codeLength):this._keyCode=new Array(X),this._keyCode.fill("")}_convertLetterSize(o){return o==="\xDF"?o:typeof o=="string"?this.convertTo===we?o.toUpperCase():this.convertTo===Ne?o.toLowerCase():o:""}_keydownAction(o){let n=o.target,r=n.previousElementSibling,m=n.nextElementSibling;switch(o.keyCode){case 32:return!1;case 8:n.value===""&&r&&r.tagName===J&&this.selectInput(r);break;case 37:r&&r.tagName===J&&(o.preventDefault(),this.selectInput(r));break;case 39:m&&m.tagName===J&&this.selectInput(m),o.preventDefault();break;case 40:this._isUpDown=!0,this._type==="number"&&(n.value===""||n.value==="0")&&o.preventDefault();break;case 38:this._isUpDown=!0,this._type==="number"&&n.value==="9"&&o.preventDefault();break;default:this.selectInput(n);break}return!0}_selectText(o){this.selectInput(o.target),o.preventDefault()}_handleInput(o){let n=o.target,r=o.data?.trim()||n.value.trim(),m=this.type==="number"?this._filterNumbers(r):r,V=Number(this._getFocusedInputIndex(o));this._setKeyCodes(V,m),n.value=this._keyCode[V]??"",this.propagateChange(this._keyCode.join(""));let y=!(this._isUpDown&&this.type==="number");m&&y&&this.moveFocus(V,m.length),this._isUpDown=!1}_setKeyCodes(o,n){if(n.length<=1)this._keyCode[o]=this._convertLetterSize(n);else for(let r=o,m=0;r<this.codeLength;r++,m++)this._keyCode[r]=this._convertLetterSize(n[m]?.[0]??""),this._el.nativeElement.children[r].value=this._keyCode[r]}moveFocus(o,n){o+n<this.codeLength?this.selectInput(this._el.nativeElement.children.item(o+n)):this._el.nativeElement.children.item(this.codeLength-1).focus()}_getFocusedInputIndex(o){let n;for(let r=0;r<this._el.nativeElement.children.length;r++)o.target===this._el.nativeElement.children.item(r)&&(n=r);return n}_filterNumbers(o){let n="";for(let r of o)r.match(/\d$/)&&(n+=r);return n}_onBlur(){this._focused=!1,setTimeout(()=>{this._focused||this.propagateTouch(this._keyCode.join("")),this._cdr.markForCheck()})}_setFocusState(){this._focused=!0}setDisabledState(o){this.disabled=o,this._cdr.markForCheck()}writeValue(o){if(o){let n=o.split("").slice(0,this.codeLength);for(let r=0;r<this.codeLength;r++)this._keyCode[r]=n[r]}else this.setInputLength();this._cdr.markForCheck()}_trackByKeyCode(o,n){return o}_inputGap(o){switch(this.codeLength){case 4:case 6:case 8:return o===this.codeLength/2?Me:"";default:return""}}registerOnChange(o){this.propagateChange=o}registerOnTouched(o){this.propagateTouch=o}updateErrorState(){let o=this.errorState,n=this._parentFormGroup||this._parentForm,r=this._control?this._control.control:null,m=this._errorStateMatcher.isErrorState(r,n);m!==o&&(this.errorState=m)}getAriaLabel(o){return`${this._intl.inputFieldAriaLabel} ${o+1} ${this._intl.ofLabel} ${this._keyCode.length}`}selectInput(o){o.focus();try{o.setSelectionRange(0,o.value.length)}catch(n){if(!(n instanceof DOMException&&n.name==="InvalidStateError"))throw n}}};e.\u0275fac=function(n){return new(n||e)(L(te),L(ee),L(pe,10),L(z),L(se),L(me,8),L(E,8))},e.\u0275cmp=h({type:e,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(n,r){n&2&&(H("tabindex",-1),ne("nx-code-input",!0)("has-error",r.errorState)("is-negative",r.negative)("is-disabled",r.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:"convertTo",negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","autocomplete","one-time-code",3,"ngModel","ngClass","disabled","input","blur","focus","mousedown","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["autocomplete","one-time-code",1,"nx-code-input__field",3,"ngModel","ngClass","disabled","input","blur","focus","mousedown","keydown"]],template:function(n,r){n&1&&u(0,Fe,1,6,"input",0),n&2&&l("ngForOf",r._keyCode)("ngForTrackBy",r._trackByKeyCode)},dependencies:[re,ie,le,I,de],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);-webkit-appearance:none;width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-nx-border-size(xs);color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-nx-border-size(xs);font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%], .nx-code-input__field[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors: active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}.nx-code-input__field[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (forced-colors: active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0});let t=e;return t})(),xe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=W({type:e}),e.\u0275inj=K({providers:[z],imports:[ae,ce,ue]});let t=e;return t})();function Te(t,e){t&1&&(i(0,"nx-error",9),p(1," Entry is required. "),a())}function Oe(t,e){t&1&&(i(0,"nx-error",9),p(1," Entry must match pattern. "),a())}function Pe(t,e){t&1&&(i(0,"nx-error",9),p(1," Entry is too short. "),a())}function Ve(t,e){if(t&1&&(i(0,"div"),u(1,Te,2,0,"nx-error",8)(2,Oe,2,0,"nx-error",8)(3,Pe,2,0,"nx-error",8),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("pattern")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var Ce=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M({value:this.inputValue,disabled:!0},{validators:[c.required,c.pattern("[A-Z]+"),c.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}toggleDisabled(){this.keyCode?.disabled?this.keyCode.enable():this.keyCode?.disable()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["convertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,Ve,4,3,"div",4),i(5,"p"),p(6),a(),i(7,"button",5),p(8,"Submit"),a(),i(9,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(10," Clear "),a(),i(11,"button",7),v("click",function(){return r.toggleDisabled()}),p(12," Toggle disabled "),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(2),l("length",4),d(2),l("ngIf",m.errorState),d(2),$("Disabled: ",r.keyCode==null?null:r.keyCode.disabled,"")}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();function De(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function Le(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry must match pattern. "),a())}function Ge(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function Ae(t,e){if(t&1&&(i(0,"div"),u(1,De,2,0,"nx-error",7)(2,Le,2,0,"nx-error",7)(3,Ge,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("pattern")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var ge=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.pattern("[A-Z]+"),c.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["convertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,Ae,4,3,"div",4),f(5,"br"),i(6,"button",5),p(7,"Submit"),a(),i(8,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(9," Clear "),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(2),l("length",4),d(2),l("ngIf",m.errorState)}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();function Be(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function qe(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry must match pattern. "),a())}function je(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function ze(t,e){if(t&1&&(i(0,"div"),u(1,Be,2,0,"nx-error",7)(2,qe,2,0,"nx-error",7)(3,je,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("pattern")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var Ue=(()=>{let e=class e extends z{constructor(){super(...arguments),this.inputFieldAriaLabel="Key eingeben",this.ofLabel="von"}};e.\u0275fac=(()=>{let o;return function(r){return(o||(o=Y(e)))(r||e)}})(),e.\u0275prov=R({token:e,factory:e.\u0275fac});let t=e;return t})(),he=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.pattern("[A-Z]+"),c.minLength(5)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-localize-example"]],features:[oe([{provide:z,useClass:Ue}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["convertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,ze,4,3,"div",4),f(5,"br"),i(6,"button",5),p(7,"Submit"),a(),i(8,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(9," Clear "),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(2),l("length",5),d(2),l("ngIf",m.errorState)}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();function Re(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function Ke(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function We(t,e){if(t&1&&(i(0,"div"),u(1,Re,2,0,"nx-error",7)(2,Ke,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var ye=(()=>{let e=class e{constructor(){this.inputValue="",this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.minLength(4)],updateOn:"change"})}),this._destroyed=new U}get keyCode(){return this.codeForm.get("keyCode")}ngOnInit(){this.keyCode?.valueChanges.pipe(Q(this._destroyed)).subscribe(()=>{this.keyCode?.valid&&this.keyCode.value!=="1234"&&this.codeForm.setValue({keyCode:"1234"})})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["convertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,We,3,2,"div",4),f(5,"br"),i(6,"button",5),p(7,"Submit"),a(),i(8,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(9," Clear "),a(),i(10,"p"),p(11),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(2),l("length",4),d(2),l("ngIf",m.errorState),d(7),$("Code input value: '",r.keyCode==null?null:r.keyCode.value,"'")}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();var ve=(()=>{let e=class e{constructor(){this.inputValue=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(n,r){n&1&&(i(0,"div",0),f(1,"nx-code-input",1),a()),n&2&&(d(1),l("length",4))},dependencies:[k]});let t=e;return t})();function $e(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function He(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry must match pattern. "),a())}function Ze(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function Xe(t,e){if(t&1&&(i(0,"div"),u(1,$e,2,0,"nx-error",7)(2,He,2,0,"nx-error",7)(3,Ze,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("pattern")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var be=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.minLength(7)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["convertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,Xe,4,3,"div",4),f(5,"br"),i(6,"button",5),p(7,"Submit"),a(),i(8,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(9," Clear "),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(2),l("length",7),d(2),l("ngIf",m.errorState)}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();function Je(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function Qe(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function Ye(t,e){if(t&1&&(i(0,"div"),u(1,Je,2,0,"nx-error",7)(2,Qe,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var Ie=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.minLength(6)],updateOn:"blur"})})}get keyCode(){return this.codeForm.get("keyCode")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1),f(2,"nx-code-input",2,3),u(4,Ye,3,2,"div",4),f(5,"br"),i(6,"button",5),p(7,"Submit"),a(),i(8,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(9," Clear "),a()()}if(n&2){let m=x(3);l("formGroup",r.codeForm),d(4),l("ngIf",m.errorState)}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0});let t=e;return t})();function et(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is required. "),a())}function tt(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry must match pattern. "),a())}function nt(t,e){t&1&&(i(0,"nx-error",8),p(1," Entry is too short. "),a())}function ot(t,e){if(t&1&&(i(0,"div"),u(1,et,2,0,"nx-error",7)(2,tt,2,0,"nx-error",7)(3,nt,2,0,"nx-error",7),a()),t&2){let s=_();d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("required")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("pattern")),d(1),l("ngIf",s.keyCode==null?null:s.keyCode.hasError("minlength"))}}var Ee=(()=>{let e=class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new N({keyCode:new M(this.inputValue,{validators:[c.required,c.pattern(/^\d*$/),c.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(n,r){if(n&1){let m=b();i(0,"form",0,1)(2,"label"),p(3,"Enter PIN code"),a(),f(4,"nx-code-input",2,3),u(6,ot,4,3,"div",4),f(7,"br"),i(8,"button",5),p(9,"Submit"),a(),i(10,"button",6),v("click",function(){C(m);let y=x(1);return g(y.resetForm())}),p(11," Clear "),a()()}if(n&2){let m=x(5);l("formGroup",r.codeForm),d(4),l("length",4),d(2),l("ngIf",m.errorState)}},dependencies:[k,P,S,T,I,w,E,O,F],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});let t=e;return t})();var Rt=(()=>{let e=class e{static components(){return{"code-input-disabled":Ce,"code-input-four-char":ge,"code-input-localize":he,"code-input-model":ye,"code-input-negative":ve,"code-input-seven-char":be,"code-input-six-char":Ie,"code-input-type":Ee}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=W({type:e}),e.\u0275inj=K({imports:[xe,fe,_e]});let t=e;return t})();export{Rt as CodeExamplesModule};
