import{A as se,a as Z,f as N,g as ee,k as te,l as ne,o as ie,r as oe,x as re,z as ae}from"./chunk-3IMO4XDX.js";import{c as R,e as Y}from"./chunk-EJUTEBJE.js";import{w as X}from"./chunk-CTAMBHIU.js";import"./chunk-6Y75KBYQ.js";import{a as T,b as q}from"./chunk-ULYGIILG.js";import{B as L,n as U,o as J,x as W}from"./chunk-ZT3EPJ7I.js";import{Aa as M,Ac as K,Db as V,Eb as l,Fb as B,Gb as F,Kb as E,Lb as r,Mb as a,Nb as g,Rb as A,Yb as x,_b as h,fc as _,gc as w,hc as C,ja as S,jc as j,ma as O,mb as D,pc as k,sc as G,tb as d,tc as H,ua as s,ub as y,va as P,wb as z,xc as Q,yb as I,yc as $,za as b}from"./chunk-KKDUGSQP.js";function xe(i,t){if(i&1){let p=A();r(0,"nx-icon",3),x("click",function(){let o=b(p).$implicit,m=h();return M(m.setSelection(o))})("keyup",function(n){let m=b(p).$implicit,v=h();return M(v.handleKeyUp(n,m))})("mouseenter",function(){let o=b(p).$implicit,m=h();return M(m.setHover(o))})("mouseleave",function(){b(p);let n=h();return M(n.setHover(0))}),a()}if(i&2){let p=t.$implicit,e=h();F("nx-rating__icon--selected",e.isChecked(p)),l("tabindex",e.disabled?-1:0)("name",e.getIconName(p))("size",e.size),V("aria-label",e.getAriaLabel(p))("aria-checked",e.isSelected(p))}}function Ce(i,t){if(i&1&&(r(0,"div",4)(1,"span",5),_(2),a(),r(3,"span",6),_(4),a()()),i&2){let p=h();d(2),w(p.startLabel),d(2),w(p.endLabel)}}var ve=()=>[1,2,3,4,5],c=(()=>{let t=class t{set size(e){this._size=e,this._cdr.markForCheck()}get size(){return this._size}set value(e){this._value=q(e),this._cdr.markForCheck()}get value(){return this._value}set disabled(e){this._disabled!==e&&(this._disabled=T(e),this._cdr.markForCheck())}get disabled(){return this._disabled}set negative(e){this._negative!==e&&(this._negative=T(e),this._cdr.markForCheck())}get negative(){return this._negative}set startLabel(e){this._startLabel=e,this._cdr.markForCheck()}get startLabel(){return this._startLabel}set endLabel(e){this._endLabel=e,this._cdr.markForCheck()}get endLabel(){return this._endLabel}set ariaLabel(e){this._ariaLabel=e,this._cdr.markForCheck()}get ariaLabel(){return this._ariaLabel}set iconColor(e){this._iconColor=e,this._cdr.markForCheck()}get iconColor(){return this._iconColor}constructor(e,n){this._cdr=e,this._focusMonitor=n,this._size="l",this._value=0,this._hover=0,this._disabled=!1,this._negative=!1,this._startLabel="",this._endLabel=null,this._ariaLabel=["1/5","2/5","3/5","4/5","5/5"],this._iconColor="",this.valueChange=new I,this.onTouchedCallback=()=>{},this.onChangeCallback=o=>{}}ngAfterViewInit(){this.icons.forEach(e=>this._focusMonitor.monitor(e))}ngOnDestroy(){this.icons.forEach(e=>this._focusMonitor.stopMonitoring(e))}isSelected(e){return e<=this.value||e<=this._hover}isChecked(e){return e<=this.value}setSelection(e){this.disabled||(this.value=e,this.valueChange.emit(e),this.onTouchedCallback(),this.onChangeCallback(this.value))}handleKeyUp(e,n){let o=e.keyCode;if(e.preventDefault(),e.stopPropagation(),o===13&&this.setSelection(n),o===39){this.value=Math.min(this.value+1,5);let m=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(m,"keyboard")}if(o===37){this.value=Math.max(this.value-1,1);let m=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(m,"keyboard")}}writeValue(e){this.value=e}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}getAriaLabel(e){return this.ariaLabel[e-1]}getIconName(e){return"star"+(this.isSelected(e)?"":"-o")}setHover(e){this.disabled||(this._hover=e)}};t.\u0275fac=function(n){return new(n||t)(y(z),y(X))},t.\u0275cmp=s({type:t,selectors:[["nx-rating"]],viewQuery:function(n,o){if(n&1&&$(R,5,D),n&2){let m;Q(m=K())&&(o.icons=m)}},hostVars:6,hostBindings:function(n,o){n&2&&(B("--iconColor",o.iconColor),F("nx-rating--negative",o.negative)("nx-rating--disabled",o.disabled))},inputs:{size:"size",value:"value",disabled:"disabled",negative:"negative",startLabel:"startLabel",endLabel:"endLabel",ariaLabel:"ariaLabel",iconColor:"iconColor"},outputs:{valueChange:"valueChange"},features:[j([{provide:Z,useExisting:S(()=>t),multi:!0}])],decls:3,vars:3,consts:[["role","radiogroup",1,"nx-rating__container"],["role","radio","class","nx-rating__icon",3,"tabindex","nx-rating__icon--selected","name","size","click","keyup","mouseenter","mouseleave",4,"ngFor","ngForOf"],["class","nx-rating__label",4,"ngIf"],["role","radio",1,"nx-rating__icon",3,"tabindex","name","size","click","keyup","mouseenter","mouseleave"],[1,"nx-rating__label"],[1,"nx-rating__label--start"],[1,"nx-rating__label--end"]],template:function(n,o){n&1&&(r(0,"div",0),E(1,xe,1,7,"nx-icon",1),a(),E(2,Ce,5,2,"div",2)),n&2&&(d(1),l("ngForOf",k(2,ve)),d(1),l("ngIf",o.startLabel||o.endLabel))},dependencies:[U,J,R],styles:["[_nghost-%COMP%]{display:inline-block}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--negative)}.nx-rating--disabled[_nghost-%COMP%]{cursor:not-allowed;outline:none}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--rating-disabled-label-color)}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--rating-disabled-icon-color);cursor:not-allowed}.nx-rating__container[_ngcontent-%COMP%]{display:flex}.nx-rating__label[_ngcontent-%COMP%]{display:flex;font-size:var(--rating-label-font-size);line-height:var(--rating-label-line-height);font-weight:var(--rating-label-font-weight);letter-spacing:var(--rating-label-letter-spacing);color:var(--rating-label-color)}.nx-rating__label--end[_ngcontent-%COMP%]{margin-left:auto}[dir=rtl][_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%]{margin-right:auto;margin-left:initial}.nx-rating__icon[_ngcontent-%COMP%]{font-size:var(--rating-icon-size-l);color:var(--iconColor, var(--rating-icon-color));width:auto;background:none;border:none;margin-right:16px;cursor:pointer;outline:none}.nx-rating__icon.nx-icon--s[_ngcontent-%COMP%]{font-size:var(--rating-icon-size-s);margin-right:8px}.nx-rating__icon.nx-icon--m[_ngcontent-%COMP%]{font-size:var(--rating-icon-size-m);margin-right:12px}.nx-rating__icon.nx-icon--l[_ngcontent-%COMP%]{font-size:var(--rating-icon-size-l);margin-right:16px}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:16px}[_nghost-%COMP%]:not(.nx-rating--negative)   .nx-rating__icon.nx-rating__icon--selected[_ngcontent-%COMP%]:hover{color:var(--hover-primary)}[_nghost-%COMP%]:not(.nx-rating--negative)   .nx-rating__icon.nx-rating__icon--selected[_ngcontent-%COMP%]:active{color:var(--active-primary)}.nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:initial;margin-left:0}.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (forced-colors: active),(forced-colors: active){.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (forced-colors: active){[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:buttonText}[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{forced-colors-adjust:none;color:CanvasText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:GrayText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:CanvasText}}"],changeDetection:0});let i=t;return i})(),le=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=P({type:t}),t.\u0275inj=O({imports:[L,Y]});let i=t;return i})();var be=()=>["Hated","Didn't like it","Just OK","Liked it","Loved it"],ce=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-accessibility-example"]],decls:1,vars:2,consts:[[3,"ariaLabel"]],template:function(n,o){n&1&&g(0,"nx-rating",0),n&2&&l("ariaLabel",k(1,be))},dependencies:[c]});let i=t;return i})();var me=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-basic-example"]],decls:1,vars:0,consts:[["startLabel","poor","endLabel","great"]],template:function(n,o){n&1&&g(0,"nx-rating",0)},dependencies:[c]});let i=t;return i})();var ge=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-disabled-example"]],decls:1,vars:1,consts:[["startLabel","poor","endLabel","great",3,"disabled"]],template:function(n,o){n&1&&g(0,"nx-rating",0),n&2&&l("disabled",!0)},dependencies:[c]});let i=t;return i})();var de=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["startLabel","poor","endLabel","great",3,"negative"]],template:function(n,o){n&1&&(r(0,"div",0),g(1,"nx-rating",1),a()),n&2&&(d(1),l("negative",!0))},dependencies:[c]});let i=t;return i})();var pe=(()=>{let t=class t{constructor(e){this.fb=e,this.testForm=this.fb.group({rating:[1]})}};t.\u0275fac=function(n){return new(n||t)(y(re))},t.\u0275cmp=s({type:t,selectors:[["rating-reactive-example"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","rating"]],template:function(n,o){n&1&&(r(0,"form",0),g(1,"nx-rating",1),a(),r(2,"p"),_(3),G(4,"json"),a()),n&2&&(l("formGroup",o.testForm),d(3),C("Form value: ",H(4,2,o.testForm.value),""))},dependencies:[c,ne,N,ee,ie,oe,W]});let i=t;return i})();var _e=(()=>{let t=class t{constructor(){this.simpleBinding=1}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-simple-example"]],decls:3,vars:2,consts:[[3,"value","valueChange"]],template:function(n,o){n&1&&(r(0,"nx-rating",0),x("valueChange",function(v){return o.simpleBinding=v}),a(),r(1,"p"),_(2),a()),n&2&&(l("value",o.simpleBinding),d(2),C("Value: ",o.simpleBinding,""))},dependencies:[c]});let i=t;return i})();var ue=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-sizes-example"]],decls:7,vars:0,consts:[["nxRow",""],["nxCol","12,4",1,"nx-margin-bottom-s"],["size","s"],["size","m"],["size","l"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1),g(2,"nx-rating",2),a(),r(3,"div",1),g(4,"nx-rating",3),a(),r(5,"div",1),g(6,"nx-rating",4),a()())},dependencies:[c]});let i=t;return i})();var fe=(()=>{let t=class t{constructor(){this.ngModelBinding=1}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["rating-template-example"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"]],template:function(n,o){n&1&&(r(0,"nx-rating",0),x("ngModelChange",function(v){return o.ngModelBinding=v}),a(),r(1,"p"),_(2),a()),n&2&&(l("ngModel",o.ngModelBinding),d(2),C("Value: ",o.ngModelBinding,""))},dependencies:[c,N,te]});let i=t;return i})();var ot=(()=>{let t=class t{static components(){return{"rating-accessibility":ce,"rating-basic":me,"rating-disabled":ge,"rating-negative":de,"rating-reactive":pe,"rating-simple":_e,"rating-template":fe,"rating-sizes":ue}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=P({type:t}),t.\u0275inj=O({imports:[le,se,ae,L]});let i=t;return i})();export{ot as RatingExamplesModule};
