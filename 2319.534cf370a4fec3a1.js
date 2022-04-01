"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[2319],{2319:(M,_,s)=>{s.r(_),s.d(_,{RadioExamplesModule:()=>r});var d=s(9209),a=s(9343),f=s(9508),e=s(5e3),u=s(4204);let c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-disabled-example"]],decls:7,vars:0,consts:[["name","disabledTest","nxDisabled","true"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio-group",0)(1,"nx-label",1),e._uU(2,"What do you prefer?"),e.qZA(),e.TgZ(3,"nx-radio",2),e._uU(4,"I like Apples"),e.qZA(),e.TgZ(5,"nx-radio",3),e._uU(6,"I like Oranges"),e.qZA()())},directives:[a.tc,u.UD,a.R9],styles:[""]}),t})();var p=s(9808);function A(t,n){if(1&t&&(e.TgZ(0,"pre"),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.logMessage)}}let h=(()=>{class t{constructor(){this.messages=[]}log(o){this.messages.push(o),this.logMessage=this.messages.join("\n")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-event-example"]],decls:9,vars:1,consts:[["name","singleRadioOutputTest",3,"nxGroupValueChange"],[1,"nx-margin-bottom-m"],["nxValue","option1",1,"nx-margin-bottom-m",3,"nxValueChange"],["nxValue","option2",3,"nxValueChange"],[4,"ngIf"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio-group",0),e.NdJ("nxGroupValueChange",function(m){return i.log("nxGroupValueChange occured: "+m.value)}),e.TgZ(1,"nx-label",1),e._uU(2,"This is a nx-radio-group label"),e.qZA(),e.TgZ(3,"nx-radio",2),e.NdJ("nxValueChange",function(m){return i.log("nxValueChange occured: "+m.value)}),e._uU(4," Option 1 "),e.qZA(),e.TgZ(5,"nx-radio",3),e.NdJ("nxValueChange",function(m){return i.log("nxValueChange occured: "+m.value)}),e._uU(6," Option 2 "),e.qZA()(),e._UZ(7,"br"),e.YNc(8,A,2,1,"pre",4)),2&o&&(e.xp6(8),e.Q6J("ngIf",i.logMessage))},directives:[a.tc,u.UD,a.R9,p.O5],styles:[""]}),t})();var l=s(3075);let b=(()=>{class t{constructor(){this.templateModel="apples"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-form-example"]],decls:10,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(o,i){1&o&&(e.TgZ(0,"form")(1,"nx-radio-group",0),e.NdJ("ngModelChange",function(m){return i.templateModel=m}),e.TgZ(2,"nx-label",1),e._uU(3,"What do you prefer?"),e.qZA(),e.TgZ(4,"nx-radio",2),e._uU(5,"I like Apples"),e.qZA(),e.TgZ(6,"nx-radio",3),e._uU(7,"I like Oranges"),e.qZA()(),e.TgZ(8,"p"),e._uU(9),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("ngModel",i.templateModel),e.xp6(8),e.hij("Current Value: ",i.templateModel,""))},directives:[l._Y,l.JL,l.F,a.tc,l.JJ,l.On,u.UD,a.R9],styles:[""]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-group-horizontal-example"]],decls:8,vars:0,consts:[["name","myGroup"],[1,"nx-margin-bottom-m"],[1,"horizontal-buttons"],["nxValue","1",1,"nx-margin-bottom-m"],["nxValue","2",1,"nx-margin-left-s","nx-margin-bottom-m"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio-group",0)(1,"nx-label",1),e._uU(2,"This is a nx-radio-group"),e.qZA(),e.TgZ(3,"div",2)(4,"nx-radio",3),e._uU(5,"Select 1"),e.qZA(),e.TgZ(6,"nx-radio",4),e._uU(7,"Select 2"),e.qZA()()())},directives:[a.tc,u.UD,a.R9],styles:[".horizontal-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),t})(),v=(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-group-label-size-example"]],decls:7,vars:3,consts:[["name","labelSize"],[3,"size"],["nxValue","choice1",1,"nx-margin-bottom-s",3,"labelSize"],["nxValue","choice2",3,"labelSize"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio-group",0)(1,"nx-label",1),e._uU(2,"This is an expert label for the radio button group"),e.qZA(),e.TgZ(3,"nx-radio",2),e._uU(4,"Choice 1"),e.qZA(),e.TgZ(5,"nx-radio",3),e._uU(6,"Choice 2"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("size","small"),e.xp6(2),e.Q6J("labelSize","small"),e.xp6(2),e.Q6J("labelSize","small"))},directives:[a.tc,u.UD,a.R9],styles:["[_nghost-%COMP%]   nx-radio-group[_ngcontent-%COMP%]   .nx-radio-button--small-label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),t})();var U=s(9823);let x=(()=>{class t{constructor(o){this.formBuilder=o,this.createForm()}createForm(){this.testForm=this.formBuilder.group({radioTestReactive:[null,l.kI.required]})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(l.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-group-validation-example"]],decls:15,vars:6,consts:[[3,"formGroup"],["name","reactiveTest","formControlName","radioTestReactive",3,"required"],[1,"nx-margin-bottom-s",3,"size"],["appearance","text"],["nxValue","coffee",1,"radio-item","nx-margin-bottom-s",3,"labelSize"],["nxValue","tea",1,"radio-item","nx-margin-bottom-s",3,"labelSize"],["nxValue","water",1,"radio-item",3,"labelSize"],["type","submit","nxButton","primary small"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0)(1,"nx-radio-group",1)(2,"nx-label",2),e._uU(3,"What do you prefer?"),e.qZA(),e.TgZ(4,"nx-error",3),e._uU(5," Please make a choice. "),e.qZA(),e.TgZ(6,"nx-radio",4),e._uU(7,"Coffee"),e.qZA(),e.TgZ(8,"nx-radio",5),e._uU(9,"Tea"),e.qZA(),e.TgZ(10,"nx-radio",6),e._uU(11,"Water"),e.qZA()(),e._UZ(12,"br"),e.TgZ(13,"button",7),e._uU(14,"Submit"),e.qZA()()),2&o&&(e.Q6J("formGroup",i.testForm),e.xp6(1),e.Q6J("required",!0),e.xp6(1),e.Q6J("size","small"),e.xp6(4),e.Q6J("labelSize","small"),e.xp6(2),e.Q6J("labelSize","small"),e.xp6(2),e.Q6J("labelSize","small"))},directives:[l._Y,l.JL,l.sg,a.tc,l.JJ,l.u,l.Q7,u.UD,u.vV,a.R9,U.XV],styles:["[_nghost-%COMP%]   nx-radio-group[_ngcontent-%COMP%]   .nx-radio-button--small-label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-group-example"]],decls:7,vars:0,consts:[["name","myGroup"],[1,"nx-margin-bottom-m"],["nxValue","1",1,"nx-margin-bottom-m"],["nxValue","2"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio-group",0)(1,"nx-label",1),e._uU(2,"This is a nx-radio-group"),e.qZA(),e.TgZ(3,"nx-radio",2),e._uU(4,"Select 1"),e.qZA(),e.TgZ(5,"nx-radio",3),e._uU(6,"Select 2"),e.qZA()())},directives:[a.tc,u.UD,a.R9],styles:[""]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-negative-example"]],decls:9,vars:0,consts:[[1,"docs-inverse-container"],["name","negativeGroup","negative","true"],["nxValue","1",1,"nx-margin-bottom-m"],["nxValue","2"],["name","weight","negative","true"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"nx-radio-group",1)(2,"nx-radio",2),e._uU(3,"Radio 1"),e.qZA(),e.TgZ(4,"nx-radio",3),e._uU(5,"Radio 2"),e.qZA()(),e._UZ(6,"br"),e.TgZ(7,"nx-radio",4),e._uU(8,"Single negative radio"),e.qZA()())},directives:[a.tc,a.R9],styles:[""]}),t})(),Z=(()=>{class t{constructor(o){this.formBuilder=o,this.createForm()}createForm(){this.testForm=this.formBuilder.group({radioTestReactive:["oranges",l.kI.required]})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(l.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-reactive-example"]],decls:14,vars:7,consts:[[3,"formGroup"],["name","reactiveTest","formControlName","radioTestReactive"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0)(1,"nx-radio-group",1)(2,"nx-label",2),e._uU(3,"What do you prefer?"),e.qZA(),e.TgZ(4,"nx-radio",3),e._uU(5,"I like Apples"),e.qZA(),e.TgZ(6,"nx-radio",4),e._uU(7,"I like Oranges"),e.qZA()(),e.TgZ(8,"p"),e._uU(9),e.ALo(10,"json"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.ALo(13,"json"),e.qZA()()),2&o&&(e.Q6J("formGroup",i.testForm),e.xp6(9),e.hij("Form value: ",e.lcZ(10,3,i.testForm.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(13,5,i.testForm.status),""))},directives:[l._Y,l.JL,l.sg,a.tc,l.JJ,l.u,u.UD,a.R9],pipes:[p.Ts],styles:[""]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-sample-example"]],decls:19,vars:4,consts:[["name","group1"],["name","group1",3,"nxChecked"],["name","group1",3,"nxDisabled"],["name","group2",3,"nxChecked","nxDisabled"]],template:function(o,i){1&o&&(e.TgZ(0,"h3"),e._uU(1,"The radio button hasn't been clicked."),e.qZA(),e.TgZ(2,"nx-radio",0),e._uU(3,"Default"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"h3"),e._uU(6,"An action or item is selected."),e.qZA(),e.TgZ(7,"nx-radio",1),e._uU(8,"Checked"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"h3"),e._uU(11,"The button is inactive due to previously checked or unchecked options."),e.qZA(),e.TgZ(12,"nx-radio",2),e._uU(13,"Disabled"),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"h3"),e._uU(16,"An action or item has been pre-selected due to previously checked or unchecked options."),e.qZA(),e.TgZ(17,"nx-radio",3),e._uU(18,"Checked & disabled"),e.qZA()),2&o&&(e.xp6(7),e.Q6J("nxChecked",!0),e.xp6(5),e.Q6J("nxDisabled",!0),e.xp6(5),e.Q6J("nxChecked",!0)("nxDisabled",!0))},directives:[a.R9],styles:[""]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-sizes-example"]],decls:4,vars:0,consts:[["name","size","labelSize","small",1,"nx-margin-bottom-m"],["name","size"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio",0),e._uU(1,"Radio with a small label"),e.qZA(),e.TgZ(2,"nx-radio",1),e._uU(3,"Radio with a big label (default)"),e.qZA())},directives:[a.R9],styles:[""]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["radio-button-example"]],decls:6,vars:0,consts:[["name","fruit",1,"nx-margin-bottom-m"],["name","fruit"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-radio",0),e._uU(1,"Apples"),e.qZA(),e.TgZ(2,"nx-radio",0),e._uU(3,"Oranges"),e.qZA(),e.TgZ(4,"nx-radio",1),e._uU(5,"Bananas"),e.qZA())},directives:[a.R9],styles:[""]}),t})(),r=(()=>{class t{static components(){return{"radio-button":O,"radio-button-disabled":c,"radio-button-event":h,"radio-button-form":b,"radio-button-group":C,"radio-button-group-horizontal":g,"radio-button-group-label-size":v,"radio-button-group-validation":x,"radio-button-negative":E,"radio-button-reactive":Z,"radio-button-sample":T,"radio-button-sizes":R}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.IV,d.cf,f.f]]}),t})()},4204:(M,_,s)=>{s.d(_,{$N:()=>E,UD:()=>O,WI:()=>y,hZ:()=>x,vV:()=>C});var d=s(3191),a=s(5e3),f=s(8929),e=s(7625),u=s(9209),c=s(3102),p=s(9808);function A(r,t){1&r&&a._UZ(0,"nx-icon",7),2&r&&a.Q6J("name","exclamation-triangle")}function h(r,t){if(1&r&&(a.ynx(0),a.YNc(1,A,1,1,"nx-icon",3),a.TgZ(2,"div",4)(3,"div",5),a.GkF(4,6),a.qZA()(),a.BQk()),2&r){const n=a.oxw(),o=a.MAs(3);a.xp6(1),a.Q6J("ngIf",n.showIcon),a.xp6(3),a.Q6J("ngTemplateOutlet",o)}}function l(r,t){if(1&r&&(a.TgZ(0,"nx-message",8),a.GkF(1,6),a.qZA()),2&r){a.oxw();const n=a.MAs(3);a.xp6(1),a.Q6J("ngTemplateOutlet",n)}}function b(r,t){1&r&&a.Hsn(0)}const g=["*"];let v=0;const x=new a.OlP("ERROR_DEFAULT_OPTIONS");let C=(()=>{class r{constructor(n,o){var i;this._cdr=n,this._defaultOptions=o,this._showIcon=!0,this._id="nx-error-"+v++,this._destroyed=new f.xQ,(null===(i=this._defaultOptions)||void 0===i?void 0:i.changes)&&this._defaultOptions.changes.pipe((0,e.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()})}set showIcon(n){this._showIcon=(0,d.Ig)(n),this._cdr.markForCheck()}get showIcon(){return this._showIcon}set id(n){n&&n!==this._id&&(this._id=n,this._cdr.markForCheck())}get id(){return this._id}set appearance(n){n!==this.appearance&&(this._appearance=n,this._cdr.markForCheck())}get appearance(){var n;return this._appearance||(null===(n=this._defaultOptions)||void 0===n?void 0:n.appearance)||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return r.\u0275fac=function(n){return new(n||r)(a.Y36(a.sBO),a.Y36(x,8))},r.\u0275cmp=a.Xpm({type:r,selectors:[["nx-error"]],hostVars:4,hostBindings:function(n,o){2&n&&(a.uIk("role","alert")("id",o.id),a.ekj("nx-error--message","message"==o.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:g,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(n,o){1&n&&(a.F$t(),a.YNc(0,h,5,2,"ng-container",0),a.YNc(1,l,2,1,"nx-message",1),a.YNc(2,b,1,0,"ng-template",null,2,a.W1O)),2&n&&(a.Q6J("ngIf","text"===o.appearance),a.xp6(1),a.Q6J("ngIf","message"===o.appearance))},directives:[u.O8,c.wM,p.O5,p.tP],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}"],changeDetection:0}),r})(),E=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[p.ez,u.cf,c.Ee]]}),r})(),Z=0;const R=new a.OlP("LABEL_DEFAULT_OPTIONS");let O=(()=>{class r{constructor(n,o){this._defaultOptions=n,this._cdr=o,this._stateChanges=new f.xQ,this._disabled=!1,this._negative=!1,this._for=null,this._id="nx-label-"+Z++}set disabled(n){this._disabled=(0,d.Ig)(n),this._stateChanges.next()}get disabled(){return this._disabled}set negative(n){this._negative=(0,d.Ig)(n),this._stateChanges.next()}get negative(){return this._negative}set id(n){this._id=n}get id(){return this._id}set size(n){this._size=n,this._stateChanges.next()}get size(){var n;return this._size||(null===(n=this._defaultOptions)||void 0===n?void 0:n.size)||"large"}set for(n){this._for=n,this._cdr.markForCheck(),this._stateChanges.next()}get for(){return this._for}}return r.\u0275fac=function(n){return new(n||r)(a.Y36(R,8),a.Y36(a.sBO))},r.\u0275cmp=a.Xpm({type:r,selectors:[["nx-label"]],hostVars:7,hostBindings:function(n,o){2&n&&(a.uIk("disabled",o.disabled),a.ekj("nx-label--negative",o.negative)("nx-label--large","large"===o.size)("nx-label--small","small"===o.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size",for:"for"},ngContentSelectors:g,decls:2,vars:2,consts:[[1,"nx-label__content",3,"for","id"]],template:function(n,o){1&n&&(a.F$t(),a.TgZ(0,"label",0),a.Hsn(1),a.qZA()),2&n&&a.Q6J("for",o.for)("id",o.id)},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),r})(),y=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[p.ez]]}),r})()}}]);