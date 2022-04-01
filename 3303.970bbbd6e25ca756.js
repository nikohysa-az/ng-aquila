"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[3303],{3303:(Z,T,m)=>{m.r(T),m.d(T,{TimefieldExamplesModule:()=>b});var c=m(4204),o=m(3191),e=m(5e3),p=m(5423),l=m(3075),O=m(8929),M=m(9343),h=m(9808);function A(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"nx-radio-group",9),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw()._toggleAMPM=a})("ngModelChange",function(){return e.CHM(t),e.oxw()._updateTime()})("click",function(){return e.CHM(t),e.oxw()._updateTime()}),e.TgZ(1,"nx-radio",10),e._uU(2),e.qZA(),e.TgZ(3,"nx-radio",11),e._uU(4),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("name",t.idRadioGroup)("ngModel",t._toggleAMPM)("disabled",t.disabled)("negative",t.negative),e.xp6(2),e.Oqu(t.labelAM),e.xp6(2),e.Oqu(t.labelPM)}}let x=(()=>{class n{constructor(){this.changes=new O.xQ,this.inputFieldHoursAriaLabel="hours",this.inputFieldMinutesAriaLabel="minutes"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),C=0,f=(()=>{class n{constructor(t,i,a,_,J,H){this._cdr=t,this.ngControl=i,this._errorStateMatcher=a,this._parentForm=_,this._parentFormGroup=J,this._intl=H,this.errorState=!1,this.valueChange=new e.vpe,this._idHours="nx-timefield__hours-"+C++,this._idMinutes="nx-timefield__minutes-"+C++,this._idRadioGroup="nx-timefield__radio-group-"+C++,this._maxHours=23,this._minHours=0,this._maxMinutes=59,this._minMinutes=0,this._twelveHourFormat=!1,this._labelAM="AM",this._labelPM="PM",this._placeholderHours="hh",this._placeholderMinutes="mm",this._negative=!1,this._disabled=!1,this._onTouchedCallback=()=>{},this._onChangeCallback=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get idHours(){return this._idHours}get idMinutes(){return this._idMinutes}get idRadioGroup(){return this._idRadioGroup}get maxHours(){return this._maxHours}get minHours(){return this._minHours}get maxMinutes(){return this._maxMinutes}get minMinutes(){return this._minMinutes}set time(t){this._time=t,this._onChangeCallback(t),this._cdr.markForCheck()}get time(){return this._time}set twelveHourFormat(t){this._twelveHourFormat=(0,o.Ig)(t),this._twelveHourFormat?(this._maxHours=12,this._minHours=1,this._toggleAMPM="AM"):(this._maxHours=23,this._minHours=0,this._toggleAMPM=null),this._cdr.markForCheck()}get twelveHourFormat(){return this._twelveHourFormat}set label(t){this._label!==t&&(this._label=t,this._cdr.markForCheck())}get label(){return this._label}set labelAM(t){this._labelAM!==t&&(this._labelAM=t,this._cdr.markForCheck())}get labelAM(){return this._labelAM}set labelPM(t){this._labelPM!==t&&(this._labelPM=t,this._cdr.markForCheck())}get labelPM(){return this._labelPM}set placeholderHours(t){this._placeholderHours!==t&&(this._placeholderHours=t,this._cdr.markForCheck())}get placeholderHours(){return this._placeholderHours}set placeholderMinutes(t){this._placeholderMinutes!==t&&(this._placeholderMinutes=t,this._cdr.markForCheck())}get placeholderMinutes(){return this._placeholderMinutes}get required(){return this._required}set required(t){this._required=(0,o.Ig)(t)}set negative(t){const i=(0,o.Ig)(t);this._negative!==i&&(this._negative=i,this._cdr.markForCheck())}get negative(){return this._negative}set disabled(t){const i=(0,o.Ig)(t);this._disabled!==i&&(this._disabled=i,this._cdr.markForCheck())}get disabled(){return this._disabled}set hours(t){this._hours=t,this._cdr.markForCheck()}get hours(){return this._hours}set minutes(t){this._minutes=t,this._cdr.markForCheck()}get minutes(){return this._minutes}get hasFocus(){return this._hasFocus?"has-focus":null}ngDoCheck(){this.ngControl&&this.updateErrorState()}updateErrorState(){const t=this.errorState,_=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);_!==t&&(this.errorState=_)}_convertToISOFormat(t,i){return`${t}:${i}`}_updateTime(){if(this._time=null,this._isValidInput(this.hours)&&this._isValidInput(this.minutes)){const t=Number(this.hours),i=Number(this.minutes);this._isValidTime(t,"hours")&&this._isValidTime(i,"minutes")&&(this._time=this._timeInTwentyFourHourFormat(t,i))}this._onChangeCallback(this._time)}_onFocus(){this._hasFocus=!0}_getAriaLabel(t){let i;switch(t){case"hours":i=this._intl.inputFieldHoursAriaLabel;break;case"minutes":i=this._intl.inputFieldMinutesAriaLabel}return i}_onInput(t,i){this._onTouchedCallback(),"hours"===i?this.hours=t.target.value:"minutes"===i&&(this.minutes=t.target.value),this._updateTime()}_onBlur(t){this._onTouchedCallback(),this._hasFocus=!1,"hours"===t&&Number(this.hours)<10&&""!==this.hours?this.hours=(0,p.vk)(String(this.hours)):"minutes"===t&&Number(this.minutes)<10&&""!==this.minutes&&(this.minutes=(0,p.vk)(String(this.minutes)))}_timeInTwentyFourHourFormat(t,i){return this.twelveHourFormat&&("AM"===this._toggleAMPM?12===t&&(t-=12):"PM"===this._toggleAMPM&&t>=1&&t<12&&(t+=12)),this._convertToISOFormat((0,p.vk)(String(t)),(0,p.vk)(String(i)))}_isValidInput(t){return/^\d{1,2}$/.test(t)}_isValidTime(t,i){let a=!1;const _=Number(t);return"minutes"===i?a=_>=this._minMinutes&&_<=this._maxMinutes:"hours"===i&&(a=_>=this._minHours&&_<=this._maxHours),a}_parseAndSetTime(t){const i=t.split(":");if(i&&2===i.length&&this._isValidInput(i[0])&&this._isValidInput(i[1])){let a=Number(i[0]);const _=Number(i[1]);if(this.twelveHourFormat&&(0===a?(a+=12,this._toggleAMPM="AM"):a>12&&a<=23?(a-=12,this._toggleAMPM="PM"):12===a&&(this._toggleAMPM="PM")),this._isValidTime(a,"hours")&&this._isValidTime(_,"minutes"))return this.hours=(0,p.vk)(String(a)),this.minutes=(0,p.vk)(String(_)),this._timeInTwentyFourHourFormat(a,_)}return null}writeValue(t){this._hours="",this._minutes="",this._time=null,t&&(this.time=this._parseAndSetTime(t)),this.valueChange.emit(this.time)}registerOnChange(t){this._onChangeCallback=t}registerOnTouched(t){this._onTouchedCallback=t}setDisabledState(t){this.disabled=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(l.a5,10),e.Y36(p.rD),e.Y36(l.F,8),e.Y36(l.sg,8),e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-timefield"]],hostVars:6,hostBindings:function(t,i){2&t&&e.ekj("has-error",i.errorState)("is-negative",i.negative)("is-disabled",i.disabled)},inputs:{twelveHourFormat:"twelveHourFormat",label:"label",labelAM:"labelAM",labelPM:"labelPM",placeholderHours:"placeholderHours",placeholderMinutes:"placeholderMinutes",required:"required",negative:"negative",disabled:"disabled"},outputs:{valueChange:"valueChange"},decls:11,vars:22,consts:[[1,"nx-timefield__label",3,"ngClass"],[1,"nx-timefield__wrapper"],[1,"nx-timefield-input__fields",3,"ngClass"],["type","text","maxlength","2","autocomplete","off",1,"nx-timefield-input__field__hours",3,"id","value","required","disabled","ngClass","placeholder","focusout","input","focus"],["inputHours",""],[1,"nx-timefield-hours-separator",3,"ngClass"],["required","","type","text","maxlength","2","autocomplete","off",1,"nx-timefield-input__field__minutes",3,"id","value","required","disabled","ngClass","placeholder","input","focus","focusout"],["inputMinutes",""],[3,"name","ngModel","disabled","negative","ngModelChange","click",4,"ngIf"],[3,"name","ngModel","disabled","negative","ngModelChange","click"],["labelSize","small","nxValue","AM"],["labelSize","small","nxValue","PM"]],template:function(t,i){1&t&&(e.TgZ(0,"label",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"input",3,4),e.NdJ("focusout",function(){return i._onBlur("hours")})("input",function(_){return i._onInput(_,"hours")})("focus",function(){return i._onFocus()}),e.qZA(),e.TgZ(6,"span",5),e._uU(7,":"),e.qZA(),e.TgZ(8,"input",6,7),e.NdJ("input",function(_){return i._onInput(_,"minutes")})("focus",function(){return i._onFocus()})("focusout",function(){return i._onBlur("minutes")}),e.qZA()(),e.YNc(10,A,5,6,"nx-radio-group",8),e.qZA()),2&t&&(e.Q6J("ngClass",i.hasFocus||""),e.uIk("for",i.hours),e.xp6(1),e.Oqu(i.label),e.xp6(2),e.Q6J("ngClass",i.hasFocus||""),e.xp6(1),e.Q6J("id",i.idHours)("value",i.hours||null)("required",i.required)("disabled",i.disabled)("ngClass",i.hasFocus||"")("placeholder",i.placeholderHours),e.uIk("aria-required",i.required)("aria-label",i._getAriaLabel("hours")),e.xp6(2),e.Q6J("ngClass",i.hasFocus||""),e.xp6(2),e.Q6J("id",i.idMinutes)("value",i.minutes||null)("required",i.required)("disabled",i.disabled)("ngClass",i.hasFocus||"")("placeholder",i.placeholderMinutes),e.uIk("aria-required",i.required)("aria-label",i._getAriaLabel("minutes")),e.xp6(2),e.Q6J("ngIf",i.twelveHourFormat))},directives:[M.tc,M.R9,h.mk,h.O5,l.JJ,l.On],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .nx-timefield__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 var(--timefield-color)}[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   .nx-timefield-input__fields.has-focus[_ngcontent-%COMP%]{box-shadow:inset 0 -2px 0 0 var(--timefield-active-color)}[_nghost-%COMP%]   .nx-timefield__label[_ngcontent-%COMP%]{font-size:var(--timefield-label-font-size);line-height:var(--timefield-label-line-height);font-weight:var(--timefield-label-font-weight);letter-spacing:var(--timefield-label-letter-spacing)}[_nghost-%COMP%]   .nx-timefield-input__field__hours[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-timefield-input__field__minutes[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%]{font-size:var(--timefield-font-size);line-height:var(--timefield-line-height);font-weight:var(--timefield-font-weight);letter-spacing:var(--timefield-letter-spacing);color:var(--timefield-color);margin:0 4px;text-align:center;border:0;outline:0;width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-timefield-input__field__hours[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .nx-timefield-input__field__minutes[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%]:focus{color:var(--timefield-active-color);outline:none}[_nghost-%COMP%]   .nx-timefield-input__field__hours.has-focus[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-timefield-input__field__minutes.has-focus[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-timefield-hours-separator.has-focus[_ngcontent-%COMP%]{color:var(--timefield-active-color)}[_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   nx-radio-group[_ngcontent-%COMP%]{margin-left:24px}[_nghost-%COMP%]   nx-radio[_ngcontent-%COMP%]{display:inline-block;margin-right:24px;padding:0;vertical-align:middle}[_nghost-%COMP%]:focus{outline:none}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-timefield-input__field__hours[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]:not(.is-negative)   .nx-timefield-input__field__minutes[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]:not(.is-negative)   .nx-timefield-hours-separator[_ngcontent-%COMP%]{color:var(--danger)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-timefield-input__fields[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 var(--danger)}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-timefield__label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .nx-timefield-input__field__hours[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .nx-timefield-input__field__minutes[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--timefield-disabled-color)}.is-disabled[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 nx-theme-color(timefield-disabled-color);box-shadow:inset 0 -1px 0 0 var(--timefield-disabled-color)}.is-negative[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 nx-theme-color(negative);box-shadow:inset 0 -1px 0 0 var(--negative)}.is-negative[_nghost-%COMP%]   .nx-timefield__label[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-timefield-input__field__hours[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-timefield-input__field__minutes[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{color:var(--negative)}.is-disabled.is-negative[_nghost-%COMP%]{cursor:not-allowed}.is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield__label[_ngcontent-%COMP%], .is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield-input__field__hours[_ngcontent-%COMP%], .is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield-input__field__minutes[_ngcontent-%COMP%], .is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%], .is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--timefield-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 nx-theme-color(timefield-disabled-color);box-shadow:inset 0 -1px 0 0 var(--timefield-disabled-color)}@media screen and (-ms-high-contrast: active){.nx-timefield-input__fields[_ngcontent-%COMP%]{border-bottom:1px solid buttonText}.nx-timefield-input__fields.has-focus[_ngcontent-%COMP%]{border-bottom:1px solid highlight}.is-disabled[_nghost-%COMP%]   .nx-timefield__label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .nx-timefield-hours-separator[_ngcontent-%COMP%]{color:GrayText}.is-disabled[_nghost-%COMP%]   .nx-timefield-input__fields[_ngcontent-%COMP%]{border-bottom:1px solid GrayText}}"],changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[x],imports:[[h.ez,l.u5,M.IV]]}),n})();var D=m(9508);let v=(()=>{class n{constructor(){this.templateModel="12:54"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["timefield-disabled-example"]],decls:3,vars:1,consts:[["disabled","","name","templateTest","label","Time","twelveHourFormat","",3,"ngModel","ngModelChange"],["timefield",""]],template:function(t,i){1&t&&(e.TgZ(0,"form")(1,"nx-timefield",0,1),e.NdJ("ngModelChange",function(_){return i.templateModel=_}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngModel",i.templateModel))},directives:[l._Y,l.JL,l.F,f,l.JJ,l.On],styles:[""]}),n})();function w(n,d){1&n&&(e.TgZ(0,"div")(1,"nx-error"),e._uU(2," Invalid time input. "),e.qZA()())}let P=(()=>{class n{constructor(){this.templateModel="12:01"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["timefield-format-toggler-example"]],decls:6,vars:3,consts:[["required","","name","templateTest","label","Time","twelveHourFormat","",3,"ngModel","ngModelChange"],["timefield",""],[4,"ngIf"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form")(1,"nx-timefield",0,1),e.NdJ("ngModelChange",function(_){return i.templateModel=_}),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.YNc(5,w,3,0,"div",2),e.qZA()),2&t){const a=e.MAs(2);e.xp6(1),e.Q6J("ngModel",i.templateModel),e.xp6(3),e.hij("Model Value (24h format): ",i.templateModel,""),e.xp6(1),e.Q6J("ngIf",a.errorState)}},directives:[l._Y,l.JL,l.F,f,l.Q7,l.JJ,l.On,h.O5,c.vV],styles:[""]}),n})();function N(n,d){1&n&&(e.TgZ(0,"div")(1,"nx-error",5),e._uU(2," Invalid time input. "),e.qZA()())}let y=(()=>{class n extends x{constructor(){super(...arguments),this.inputFieldHoursAriaLabel="stunden",this.inputFieldMinutesAriaLabel="minuten"}}return n.\u0275fac=function(){let d;return function(i){return(d||(d=e.n5z(n)))(i||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),F=(()=>{class n{ngOnInit(){this.testForm=new l.cw({today:new l.NI("",{validators:[l.kI.required]})})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["timefield-localize-example"]],features:[e._Bn([{provide:x,useClass:y}])],decls:5,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","today"],["timefield",""],[4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form",0,1),e._UZ(2,"nx-timefield",2,3),e.YNc(4,N,3,0,"div",4),e.qZA()),2&t){const a=e.MAs(3);e.Q6J("formGroup",i.testForm),e.xp6(4),e.Q6J("ngIf",a.errorState)}},directives:[l._Y,l.JL,l.sg,f,l.JJ,l.u,h.O5,c.vV],styles:[""]}),n})(),E=(()=>{class n{constructor(){this.templateModel="00:54",this.templateModel2="12:54"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["timefield-negative-example"]],decls:5,vars:2,consts:[[1,"docs-inverse-container"],["negative","","twelveHourFormat","","name","templateTest","label","Time",3,"ngModel","ngModelChange"],["negative","","disabled","","twelveHourFormat","","name","templateTest2","label","Time",3,"ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"form")(2,"nx-timefield",1),e.NdJ("ngModelChange",function(_){return i.templateModel=_}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"nx-timefield",2),e.NdJ("ngModelChange",function(_){return i.templateModel2=_}),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngModel",i.templateModel),e.xp6(2),e.Q6J("ngModel",i.templateModel2))},directives:[l._Y,l.JL,l.F,f,l.JJ,l.On],styles:[""]}),n})();function k(n,d){1&n&&(e.TgZ(0,"div")(1,"nx-error",6),e._uU(2," Invalid time input. "),e.qZA()())}let r=(()=>{class n{constructor(t){this.fb=t,this.createForm()}createForm(){this.testForm=this.fb.group({timefieldReactive:["22:54",l.kI.required]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-timefield-reactive-example"]],decls:10,vars:8,consts:[[3,"formGroup"],["label","Time","formControlName","timefieldReactive"],["timefield",""],[4,"ngIf"],[1,"nx-margin-bottom-0"],[1,"nx-margin-y-0"],[1,"nx-margin-y-xs"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form",0),e._UZ(1,"nx-timefield",1,2),e.YNc(3,k,3,0,"div",3),e.qZA(),e.TgZ(4,"p",4),e._uU(5),e.ALo(6,"json"),e.qZA(),e.TgZ(7,"p",5),e._uU(8),e.ALo(9,"json"),e.qZA()),2&t){const a=e.MAs(2);e.Q6J("formGroup",i.testForm),e.xp6(3),e.Q6J("ngIf",a.errorState),e.xp6(2),e.hij("Form value (24h): ",e.lcZ(6,4,i.testForm.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(9,6,i.testForm.status),"")}},directives:[l._Y,l.JL,l.sg,f,l.JJ,l.u,h.O5,c.vV],pipes:[h.Ts],styles:[""]}),n})();function g(n,d){1&n&&(e.TgZ(0,"div")(1,"nx-error"),e._uU(2," Invalid time input. "),e.qZA()())}let s=(()=>{class n{constructor(){this.templateModel="14:54"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["timefield-template-driven-example"]],decls:6,vars:3,consts:[["name","templateTest","label","Time","required","",3,"ngModel","ngModelChange"],["timefield",""],[4,"ngIf"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form")(1,"nx-timefield",0,1),e.NdJ("ngModelChange",function(_){return i.templateModel=_}),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.YNc(5,g,3,0,"div",2),e.qZA()),2&t){const a=e.MAs(2);e.xp6(1),e.Q6J("ngModel",i.templateModel),e.xp6(3),e.hij("Model Value (24h format): ",i.templateModel,""),e.xp6(1),e.Q6J("ngIf",a.errorState)}},directives:[l._Y,l.JL,l.F,f,l.Q7,l.JJ,l.On,h.O5,c.vV],styles:[""]}),n})(),b=(()=>{class n{static components(){return{"timefield-disabled":v,"timefield-format-toggler":P,"timefield-localize":F,"timefield-negative":E,"timefield-reactive":r,"timefield-template-driven":s}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[I,D.f,c.$N]]}),n})()},4204:(Z,T,m)=>{m.d(T,{$N:()=>P,UD:()=>E,WI:()=>k,hZ:()=>v,vV:()=>w});var c=m(3191),o=m(5e3),e=m(8929),p=m(7625),l=m(9209),O=m(3102),M=m(9808);function h(r,g){1&r&&o._UZ(0,"nx-icon",7),2&r&&o.Q6J("name","exclamation-triangle")}function A(r,g){if(1&r&&(o.ynx(0),o.YNc(1,h,1,1,"nx-icon",3),o.TgZ(2,"div",4)(3,"div",5),o.GkF(4,6),o.qZA()(),o.BQk()),2&r){const s=o.oxw(),u=o.MAs(3);o.xp6(1),o.Q6J("ngIf",s.showIcon),o.xp6(3),o.Q6J("ngTemplateOutlet",u)}}function x(r,g){if(1&r&&(o.TgZ(0,"nx-message",8),o.GkF(1,6),o.qZA()),2&r){o.oxw();const s=o.MAs(3);o.xp6(1),o.Q6J("ngTemplateOutlet",s)}}function C(r,g){1&r&&o.Hsn(0)}const f=["*"];let I=0;const v=new o.OlP("ERROR_DEFAULT_OPTIONS");let w=(()=>{class r{constructor(s,u){var b;this._cdr=s,this._defaultOptions=u,this._showIcon=!0,this._id="nx-error-"+I++,this._destroyed=new e.xQ,(null===(b=this._defaultOptions)||void 0===b?void 0:b.changes)&&this._defaultOptions.changes.pipe((0,p.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()})}set showIcon(s){this._showIcon=(0,c.Ig)(s),this._cdr.markForCheck()}get showIcon(){return this._showIcon}set id(s){s&&s!==this._id&&(this._id=s,this._cdr.markForCheck())}get id(){return this._id}set appearance(s){s!==this.appearance&&(this._appearance=s,this._cdr.markForCheck())}get appearance(){var s;return this._appearance||(null===(s=this._defaultOptions)||void 0===s?void 0:s.appearance)||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return r.\u0275fac=function(s){return new(s||r)(o.Y36(o.sBO),o.Y36(v,8))},r.\u0275cmp=o.Xpm({type:r,selectors:[["nx-error"]],hostVars:4,hostBindings:function(s,u){2&s&&(o.uIk("role","alert")("id",u.id),o.ekj("nx-error--message","message"==u.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:f,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(s,u){1&s&&(o.F$t(),o.YNc(0,A,5,2,"ng-container",0),o.YNc(1,x,2,1,"nx-message",1),o.YNc(2,C,1,0,"ng-template",null,2,o.W1O)),2&s&&(o.Q6J("ngIf","text"===u.appearance),o.xp6(1),o.Q6J("ngIf","message"===u.appearance))},directives:[l.O8,O.wM,M.O5,M.tP],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}"],changeDetection:0}),r})(),P=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[M.ez,l.cf,O.Ee]]}),r})(),N=0;const F=new o.OlP("LABEL_DEFAULT_OPTIONS");let E=(()=>{class r{constructor(s,u){this._defaultOptions=s,this._cdr=u,this._stateChanges=new e.xQ,this._disabled=!1,this._negative=!1,this._for=null,this._id="nx-label-"+N++}set disabled(s){this._disabled=(0,c.Ig)(s),this._stateChanges.next()}get disabled(){return this._disabled}set negative(s){this._negative=(0,c.Ig)(s),this._stateChanges.next()}get negative(){return this._negative}set id(s){this._id=s}get id(){return this._id}set size(s){this._size=s,this._stateChanges.next()}get size(){var s;return this._size||(null===(s=this._defaultOptions)||void 0===s?void 0:s.size)||"large"}set for(s){this._for=s,this._cdr.markForCheck(),this._stateChanges.next()}get for(){return this._for}}return r.\u0275fac=function(s){return new(s||r)(o.Y36(F,8),o.Y36(o.sBO))},r.\u0275cmp=o.Xpm({type:r,selectors:[["nx-label"]],hostVars:7,hostBindings:function(s,u){2&s&&(o.uIk("disabled",u.disabled),o.ekj("nx-label--negative",u.negative)("nx-label--large","large"===u.size)("nx-label--small","small"===u.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size",for:"for"},ngContentSelectors:f,decls:2,vars:2,consts:[[1,"nx-label__content",3,"for","id"]],template:function(s,u){1&s&&(o.F$t(),o.TgZ(0,"label",0),o.Hsn(1),o.qZA()),2&s&&o.Q6J("for",u.for)("id",u.id)},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),r})(),k=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[M.ez]]}),r})()}}]);