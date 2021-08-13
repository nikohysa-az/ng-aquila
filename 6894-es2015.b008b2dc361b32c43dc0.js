"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[6894],{76894:function(n,t,e){e.r(t),e.d(t,{RatingExamplesModule:function(){return k}});var i=e(38583),a=e(3679),r=e(42677),s=e(37716);let o=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[i.ez,r.cf]]}),n})();var l=e(36461),c=e(39490),g=e(4765),d=e(90805);function u(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"nx-icon",3),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().setSelection(t)})("keyup",function(t){const e=s.CHM(n).$implicit;return s.oxw().handleKeyUp(t,e)}),s.qZA()}if(2&n){const n=t.$implicit,e=s.oxw();s.Q6J("tabindex",e.disabled?-1:0)("name",e.getIconName(n)),s.uIk("aria-label",e.getAriaLabel(n))("aria-checked",e.isSelected(n))}}function h(n,t){if(1&n&&(s.TgZ(0,"div",4),s.TgZ(1,"span",5),s._uU(2),s.qZA(),s.TgZ(3,"span",6),s._uU(4),s.qZA(),s.qZA()),2&n){const n=s.oxw();s.xp6(2),s.Oqu(n.startLabel),s.xp6(2),s.Oqu(n.endLabel)}}const _=function(){return[1,2,3,4,5]};let x=(()=>{class n{constructor(n,t){this._changeDetectorRef=n,this._focusMonitor=t,this._value=0,this._disabled=!1,this._negative=!1,this._startLabel="",this._endLabel=null,this._ariaLabel=["1/5","2/5","3/5","4/5","5/5"],this.valueChange=new s.vpe,this.onTouchedCallback=()=>{},this.onChangeCallback=n=>{}}set value(n){this._value=(0,c.su)(n),this._changeDetectorRef.markForCheck()}get value(){return this._value}set disabled(n){this._disabled!==n&&(this._disabled=(0,c.Ig)(n),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set negative(n){this._negative!==n&&(this._negative=(0,c.Ig)(n),this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set startLabel(n){this._startLabel=n,this._changeDetectorRef.markForCheck()}get startLabel(){return this._startLabel}set endLabel(n){this._endLabel=n,this._changeDetectorRef.markForCheck()}get endLabel(){return this._endLabel}set ariaLabel(n){this._ariaLabel=n,this._changeDetectorRef.markForCheck()}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.icons.forEach(n=>this._focusMonitor.monitor(n))}ngOnDestroy(){this.icons.forEach(n=>this._focusMonitor.stopMonitoring(n))}isSelected(n){return n<=this.value}setSelection(n){this.disabled||(this.value=n,this.valueChange.emit(n),this.onTouchedCallback(),this.onChangeCallback(this.value))}handleKeyUp(n,t){const e=n.keyCode;if(n.preventDefault(),n.stopPropagation(),e===l.K5&&this.setSelection(t),e===l.SV){this.value=Math.min(this.value+1,5);const n=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(n,"keyboard")}if(e===l.oh){this.value=Math.max(this.value-1,1);const n=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(n,"keyboard")}}writeValue(n){this.value=n}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.disabled=n}getAriaLabel(n){return this.ariaLabel[n-1]}getIconName(n){return"star"+(this.isSelected(n)?"":"-o")}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(s.sBO),s.Y36(g.tE))},n.\u0275cmp=s.Xpm({type:n,selectors:[["nx-rating"]],viewQuery:function(n,t){if(1&n&&s.Gf(r.O8,5,s.SBq),2&n){let n;s.iGM(n=s.CRH())&&(t.icons=n)}},hostVars:4,hostBindings:function(n,t){2&n&&s.ekj("nx-rating--negative",t.negative)("nx-rating--disabled",t.disabled)},inputs:{value:["nxValue","value"],disabled:["nxDisabled","disabled"],negative:["nxNegative","negative"],startLabel:["nxStartLabel","startLabel"],endLabel:["nxEndLabel","endLabel"],ariaLabel:["nxAriaLabel","ariaLabel"]},outputs:{valueChange:"nxValueChange"},features:[s._Bn([{provide:a.JU,useExisting:(0,s.Gpc)(()=>n),multi:!0}])],decls:3,vars:3,consts:[["role","radiogroup",1,"nx-rating__container"],["role","radio","class","nx-rating__icon","size","m",3,"tabindex","name","click","keyup",4,"ngFor","ngForOf"],["class","nx-rating__label",4,"ngIf"],["role","radio","size","m",1,"nx-rating__icon",3,"tabindex","name","click","keyup"],[1,"nx-rating__label"],[1,"nx-rating__label--start"],[1,"nx-rating__label--end"]],template:function(n,t){1&n&&(s.TgZ(0,"div",0),s.YNc(1,u,1,4,"nx-icon",1),s.qZA(),s.YNc(2,h,5,2,"div",2)),2&n&&(s.xp6(1),s.Q6J("ngForOf",s.DdM(2,_)),s.xp6(1),s.Q6J("ngIf",t.startLabel||t.endLabel))},directives:[i.sg,i.O5,d.O],styles:["[_nghost-%COMP%]{display:inline-block}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--negative)}.nx-rating--disabled[_nghost-%COMP%]{cursor:not-allowed;outline:none}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--rating-disabled-label-color)}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--rating-disabled-icon-color);cursor:not-allowed}.nx-rating__container[_ngcontent-%COMP%]{display:flex}.nx-rating__label[_ngcontent-%COMP%]{display:flex;font-size:var(--rating-label-font-size);line-height:var(--rating-label-line-height);font-weight:var(--rating-label-font-weight);letter-spacing:var(--rating-label-letter-spacing);color:var(--rating-label-color)}.nx-rating__label--end[_ngcontent-%COMP%]{margin-left:auto}[dir=rtl][_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%]{margin-right:auto;margin-left:initial}.nx-rating__icon[_ngcontent-%COMP%]{font-size:var(--rating-icon-size);color:var(--rating-icon-color);width:auto;background:none;border:none;margin-right:16px;cursor:pointer;outline:none}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:16px}.nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:initial;margin-left:0}.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:buttonText}[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:CanvasText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:GrayText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:windowText}}"],changeDetection:0}),n})();const b=function(){return["Hated","Didn't like it","Just OK","Liked it","Loved it"]};let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-accessibility-example"]],decls:1,vars:2,consts:[[3,"nxAriaLabel"]],template:function(n,t){1&n&&s._UZ(0,"nx-rating",0),2&n&&s.Q6J("nxAriaLabel",s.DdM(1,b))},directives:[x],styles:[""]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-basic-example"]],decls:1,vars:0,consts:[["nxStartLabel","poor","nxEndLabel","great"]],template:function(n,t){1&n&&s._UZ(0,"nx-rating",0)},directives:[x],styles:[""]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-disabled-example"]],decls:1,vars:1,consts:[["nxStartLabel","poor","nxEndLabel","great",3,"nxDisabled"]],template:function(n,t){1&n&&s._UZ(0,"nx-rating",0),2&n&&s.Q6J("nxDisabled",!0)},directives:[x],styles:[""]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["nxStartLabel","poor","nxEndLabel","great",3,"nxNegative"]],template:function(n,t){1&n&&(s.TgZ(0,"div",0),s._UZ(1,"nx-rating",1),s.qZA()),2&n&&(s.xp6(1),s.Q6J("nxNegative",!0))},directives:[x],styles:[""]}),n})(),C=(()=>{class n{constructor(n){this.fb=n,this.createForm()}createForm(){this.testForm=this.fb.group({rating:[1]})}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(a.qu))},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-reactive-example"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","rating"]],template:function(n,t){1&n&&(s.TgZ(0,"form",0),s._UZ(1,"nx-rating",1),s.qZA(),s.TgZ(2,"p"),s._uU(3),s.ALo(4,"json"),s.qZA()),2&n&&(s.Q6J("formGroup",t.testForm),s.xp6(3),s.hij("Form value: ",s.lcZ(4,2,t.testForm.value),""))},directives:[a._Y,a.JL,a.sg,x,a.JJ,a.u],pipes:[i.Ts],styles:[""]}),n})(),M=(()=>{class n{constructor(){this.simpleBinding=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-simple-example"]],decls:3,vars:2,consts:[[3,"nxValue","nxValueChange"]],template:function(n,t){1&n&&(s.TgZ(0,"nx-rating",0),s.NdJ("nxValueChange",function(n){return t.simpleBinding=n}),s.qZA(),s.TgZ(1,"p"),s._uU(2),s.qZA()),2&n&&(s.Q6J("nxValue",t.simpleBinding),s.xp6(2),s.hij("Value: ",t.simpleBinding,""))},directives:[x],styles:[""]}),n})(),O=(()=>{class n{constructor(){this.ngModelBinding=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["rating-template-example"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(s.TgZ(0,"nx-rating",0),s.NdJ("ngModelChange",function(n){return t.ngModelBinding=n}),s.qZA(),s.TgZ(1,"p"),s._uU(2),s.qZA()),2&n&&(s.Q6J("ngModel",t.ngModelBinding),s.xp6(2),s.hij("Value: ",t.ngModelBinding,""))},directives:[x,a.JJ,a.On],styles:[""]}),n})(),k=(()=>{class n{static components(){return{"rating-accessibility":p,"rating-basic":f,"rating-disabled":m,"rating-negative":v,"rating-reactive":C,"rating-simple":M,"rating-template":O}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o,a.UX,a.u5,i.ez]]}),n})()}}]);