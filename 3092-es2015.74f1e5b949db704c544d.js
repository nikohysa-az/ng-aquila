"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[3092],{29508:function(t,e,n){n.d(e,{f:function(){return c}});var s=n(50214),a=n(76198),i=n(77549),o=n(79661),r=n(38583),l=n(3679),g=n(37716);let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[],r.ez,l.u5,l.UX,o.ru,i.X,a.K,s.TW]}),t})()},43092:function(t,e,n){n.r(e),n.d(e,{TaglistExamplesModule:function(){return L}});var s=n(79268),a=n(42677),i=n(38583),o=n(37716);let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez,a.cf]]}),t})();var l=n(39490),g=n(3679),c=n(36461),u=n(4765),d=n(90805);function h(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"span",1),o.NdJ("click",function(e){return o.CHM(t),o.oxw().removeClickHandler(e)}),o._UZ(1,"nx-icon",2),o.qZA()}}let p=(()=>{class t{constructor(t,e,n){this._changeDetectorRef=t,this._elementRef=e,this._focusMonitor=n,this._tabindex=-1,this.clicked=new o.vpe,this.removed=new o.vpe,this._focusMonitor.monitor(this._elementRef)}set removable(t){this._removable=(0,l.Ig)(t),this._changeDetectorRef.markForCheck()}get removable(){return this._removable}set tabindex(t){this._tabindex=(0,l.su)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.removable?0:this._tabindex}set value(t){this._value!==t&&(this._value=t,this._changeDetectorRef.markForCheck())}get value(){return this._value}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}removeClickHandler(t){t.stopPropagation(),this.removed.emit(this.value)}removeKeyHandler(t){this.removable&&(t.keyCode===c.yY||t.keyCode===c.ZH)&&(t.preventDefault(),t.stopPropagation(),this.removed.emit(this.value)),t.keyCode===c.K5&&this.clicked.emit(this.value)}tagClickHandler(){this.clicked.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.sBO),o.Y36(o.SBq),o.Y36(u.tE))},t.\u0275cmp=o.Xpm({type:t,selectors:[["nx-tag"]],hostVars:1,hostBindings:function(t,e){1&t&&o.NdJ("click",function(){return e.tagClickHandler()})("keydown",function(t){return e.removeKeyHandler(t)}),2&t&&o.uIk("tabindex",e.tabindex)},inputs:{removable:"removable",tabindex:"tabindex",value:"value"},outputs:{clicked:"clicked",removed:"removed"},decls:2,vars:2,consts:[["role","link","aria-label","close","class","nx-tag__close",3,"click",4,"ngIf"],["role","link","aria-label","close",1,"nx-tag__close",3,"click"],["name","close",1,"nx-tag__close-icon"]],template:function(t,e){1&t&&(o._uU(0),o.YNc(1,h,2,0,"span",0)),2&t&&(o.hij("",e.value,"\n"),o.xp6(1),o.Q6J("ngIf",e.removable))},directives:[i.O5,d.O],styles:["[_nghost-%COMP%]{font-size:var(--taglist-font-size);line-height:var(--taglist-line-height);font-weight:var(--taglist-font-weight);letter-spacing:var(--taglist-letter-spacing);height:auto;max-width:100%;color:var(--taglist-color);background-color:var(--taglist-background-color);padding:6px 14px;display:flex;align-items:center;border:2px solid var(--taglist-border-color);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease,box-shadow .2s ease;cursor:pointer}[_nghost-%COMP%]:hover{border-color:var(--taglist-hover-border-color);color:var(--taglist-hover-color);background-color:var(--taglist-hover-background-color)}[_nghost-%COMP%]:focus{outline:2px solid transparent}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-tag__close-icon[_ngcontent-%COMP%]{outline:none;display:block;font-size:var(--taglist-close-icon-size)}.nx-tag__close[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%]{margin-right:8px;margin-left:initial}.nx-taglist--keyword[_nghost-%COMP%], .nx-taglist--keyword   [_nghost-%COMP%]{padding:14px 22px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%], [_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{color:buttonText;background-color:buttonFace;border-color:buttonText;-ms-high-contrast-adjust:none}}"],changeDetection:0}),t})();function m(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"li",4),o.TgZ(1,"nx-tag",5),o.NdJ("clicked",function(e){const n=o.CHM(t).index;return o.oxw(2).tagClick(n,e)})("removed",function(e){const n=o.CHM(t).index;return o.oxw(2).delete(n,e)}),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,n=o.oxw(2);o.xp6(1),o.Q6J("value",n.renderTag(t))("removable",n.allowTagDeletion)("tabindex",n.tabindex)}}function x(t,e){if(1&t&&(o.TgZ(0,"ul",2),o.YNc(1,m,2,3,"li",3),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.tags)}}function f(t,e){1&t&&o.Hsn(0,0,["*ngIf","tags.length < 1"])}const _=["*"];let b=(()=>{class t{constructor(t){this._changeDetectorRef=t,this.tagsChange=new o.vpe,this.tagClickEvent=new o.vpe,this._tags=[],this._tabindex=-1,this._allowTagDeletion=!0,this._isKeywordList=!1,this._labelProperty="nxTaglistLabel",this._valueFormatterFn=t=>t,this._onChange=()=>{},this._onTouched=()=>{}}set tags(t){this._tags=t,this._changeDetectorRef.markForCheck()}get tags(){return this._tags}set tabindex(t){this._tabindex=(0,l.su)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.allowTagDeletion?0:this._tabindex}set allowTagDeletion(t){this._allowTagDeletion=(0,l.Ig)(t),this._changeDetectorRef.markForCheck()}get allowTagDeletion(){return this._allowTagDeletion}set isKeywordList(t){this._isKeywordList=(0,l.Ig)(t),this._changeDetectorRef.markForCheck()}get isKeywordList(){return this._isKeywordList}set labelProp(t){this._labelProperty!==t&&(this._labelProperty=t,this._changeDetectorRef.markForCheck())}get labelProp(){return this._labelProperty}set labelledby(t){this._ariaLabelledBy!==t&&(this._ariaLabelledBy=t,this._changeDetectorRef.markForCheck())}get labelledby(){return this._ariaLabelledBy}set valueFormatter(t){this._valueFormatterFn=t,this._changeDetectorRef.markForCheck()}get valueFormatter(){return this._valueFormatterFn}delete(t,e){this.allowTagDeletion&&(this.tags=[...this.tags.slice(0,t),...this.tags.slice(t+1)],this.tagChildren.toArray()[t+1]&&this.tagChildren.toArray()[t+1].nativeElement.focus(),this._onChange(this.tags),this.tagsChange.emit(this.tags))}addTag(t){!t||("string"==typeof t&&-1===this.tags.indexOf(t)||t[this.labelProp]&&this.tags.filter(e=>e[this.labelProp]===t[this.labelProp]).length<1)&&(this.tags=[...this.tags,t],this._onChange(this.tags),this.tagsChange.emit(this.tags))}clearTags(){this.tags=[],this._onChange(this.tags),this.tagsChange.emit(this.tags)}writeValue(t){this.tags=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}renderTag(t){return this.valueFormatter("string"==typeof t?t:t[this.labelProp])}tagClick(t,e){this.tagClickEvent.emit(this.tags[t])}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.sBO))},t.\u0275cmp=o.Xpm({type:t,selectors:[["nx-taglist"]],viewQuery:function(t,e){if(1&t&&o.Gf(p,5,o.SBq),2&t){let t;o.iGM(t=o.CRH())&&(e.tagChildren=t)}},hostVars:4,hostBindings:function(t,e){2&t&&(o.uIk("aria-labelledby",e.labelledby||null)("tabindex",-1),o.ekj("nx-taglist--keyword",e.isKeywordList))},inputs:{tags:["nxTags","tags"],tabindex:"tabindex",allowTagDeletion:["nxAllowTagDeletion","allowTagDeletion"],isKeywordList:["nxIsKeywordList","isKeywordList"],labelProp:["nxLabelProperty","labelProp"],labelledby:["aria-labelledby","labelledby"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{tagsChange:"nxTagsChange",tagClickEvent:"nxTagClick"},features:[o._Bn([{provide:g.JU,useExisting:(0,o.Gpc)(()=>t),multi:!0}])],ngContentSelectors:_,decls:2,vars:2,consts:[["class","nx-taglist",4,"ngIf"],[4,"ngIf"],[1,"nx-taglist"],["class","nx-taglist__list-item","tabindex","-1",4,"ngFor","ngForOf"],["tabindex","-1",1,"nx-taglist__list-item"],[3,"value","removable","tabindex","clicked","removed"]],template:function(t,e){1&t&&(o.F$t(),o.YNc(0,x,2,1,"ul",0),o.YNc(1,f,1,0,"ng-content",1)),2&t&&(o.Q6J("ngIf",e.tags.length>0),o.xp6(1),o.Q6J("ngIf",e.tags.length<1))},directives:[i.O5,i.sg,p],styles:["[_nghost-%COMP%]{position:relative;min-height:32px;display:flex;justify-content:space-between}[_nghost-%COMP%]:focus{outline:none}.nx-taglist[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-taglist__list-item[_ngcontent-%COMP%]{list-style:none;margin-right:12px;margin-bottom:12px;flex-wrap:wrap;display:flex}[dir=rtl][_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%]{margin-right:initial;margin-left:12px}@media (max-width: 703px){.nx-taglist--keyword[_ngcontent-%COMP%]{justify-content:center}}"],changeDetection:0}),t})(),v=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&o._UZ(0,"nx-taglist",0),2&t&&o.Q6J("nxTags",e.tags)("nxAllowTagDeletion",!1)},directives:[b],styles:[""]}),t})(),y=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-a11y-example"]],decls:3,vars:2,consts:[["id","fruit-headline"],["aria-labelledby","fruit-headline",3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&(o.TgZ(0,"h5",0),o._uU(1,"Some fruit:"),o.qZA(),o._UZ(2,"nx-taglist",1)),2&t&&(o.xp6(2),o.Q6J("nxTags",e.tags)("nxAllowTagDeletion",!1))},directives:[b],styles:[""]}),t})();var T=n(87222),w=n(20693),C=n(48033),k=n(90722);let Z=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-basic-example"]],decls:14,vars:2,consts:[[3,"nxTags","nxTagsChange"],["taglistBasic",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInput",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"nx-taglist",0,1),o.NdJ("nxTagsChange",function(t){return e.tags=t}),o._uU(2,"Sorry, you don't have any fruit."),o.qZA(),o.TgZ(3,"nx-formfield",2),o._UZ(4,"input",3,4),o.TgZ(6,"span",5),o._uU(7," Note that the tag list will just ignore empty tag values. "),o.qZA(),o.qZA(),o.TgZ(8,"button",6),o.NdJ("click",function(){o.CHM(t);const e=o.MAs(5);return o.MAs(1).addTag(e.value)}),o._uU(9,"Add tag"),o.qZA(),o.TgZ(10,"button",7),o.NdJ("click",function(){return o.CHM(t),o.MAs(1).clearTags()}),o._uU(11,"Clear tags"),o.qZA(),o._UZ(12,"br"),o._uU(13)}2&t&&(o.Q6J("nxTags",e.tags),o.xp6(13),o.hij("\nCurrent Value: ",e.tags,"\n"))},directives:[b,T.V,w.a,C.B,k.X],styles:[""]}),t})(),A=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-delete-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&o._UZ(0,"nx-taglist",0),2&t&&o.Q6J("nxTags",e.tags)("nxAllowTagDeletion",!0)},directives:[b],styles:[""]}),t})(),M=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}myFormatter(t){return"my "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-formatter-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxValueFormatter","nxAllowTagDeletion"]],template:function(t,e){1&t&&o._UZ(0,"nx-taglist",0),2&t&&o.Q6J("nxTags",e.tags)("nxValueFormatter",e.myFormatter)("nxAllowTagDeletion",!1)},directives:[b],styles:[""]}),t})(),O=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-keyword-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxAllowTagDeletion","nxIsKeywordList"]],template:function(t,e){1&t&&o._UZ(0,"nx-taglist",0),2&t&&o.Q6J("nxTags",e.tags)("nxAllowTagDeletion",!1)("nxIsKeywordList",!0)},directives:[b],styles:[""]}),t})(),F=(()=>{class t{constructor(){this.tags=[{nxTaglistLabel:"Apples"},{nxTaglistLabel:"Oranges"},{nxTaglistLabel:"asd"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-objects-example"]],decls:15,vars:4,consts:[[3,"nxTags","nxTagsChange"],["taglistObjects",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputObjects",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"nx-taglist",0,1),o.NdJ("nxTagsChange",function(t){return e.tags=t}),o._uU(2,"Sorry, you don't have any fruit."),o.qZA(),o.TgZ(3,"nx-formfield",2),o._UZ(4,"input",3,4),o.TgZ(6,"span",5),o._uU(7," Note that the tag list will just ignore empty tag values. "),o.qZA(),o.qZA(),o.TgZ(8,"button",6),o.NdJ("click",function(){o.CHM(t);const e=o.MAs(5);return o.MAs(1).addTag({nxTaglistLabel:e.value})}),o._uU(9,"Add tag"),o.qZA(),o.TgZ(10,"button",7),o.NdJ("click",function(){return o.CHM(t),o.MAs(1).clearTags()}),o._uU(11,"Clear tags"),o.qZA(),o._UZ(12,"br"),o._uU(13),o.ALo(14,"json")}2&t&&(o.Q6J("nxTags",e.tags),o.xp6(13),o.hij("\nCurrent Value: ",o.lcZ(14,2,e.tags),"\n"))},directives:[b,T.V,w.a,C.B,k.X],pipes:[i.Ts],styles:[""]}),t})();function P(t,e){if(1&t&&(o.TgZ(0,"pre"),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Oqu(t.logMessage)}}let J=(()=>{class t{constructor(){this.tags=["Apples","Oranges"],this.messages=[],this.logMessage=""}log(t){this.messages.push(t),this.logMessage=this.messages.join("\n")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-output-example"]],decls:2,vars:3,consts:[["tabindex","0",3,"nxTags","nxAllowTagDeletion","nxTagClick"],[4,"ngIf"]],template:function(t,e){1&t&&(o.TgZ(0,"nx-taglist",0),o.NdJ("nxTagClick",function(t){return e.log(t)}),o.qZA(),o.YNc(1,P,2,1,"pre",1)),2&t&&(o.Q6J("nxTags",e.tags)("nxAllowTagDeletion",!1),o.xp6(1),o.Q6J("ngIf",e.logMessage))},directives:[b,i.O5],styles:[""]}),t})(),U=(()=>{class t{constructor(t){this.fb=t,this.createForm()}createForm(){this.testForm=this.fb.group({tagsTestReactive:[["Apples","Oranges"],g.kI.required]})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-reactive-example"]],decls:20,vars:7,consts:[["name","reactiveTest",3,"formGroup"],["formControlName","tagsTestReactive"],["taglistReactive",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputReactive",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs",3,"click"],["nxButton","secondary small","type","button",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"form",0),o.TgZ(1,"nx-taglist",1,2),o._uU(3,"Sorry, you don't have any fruit."),o.qZA(),o.TgZ(4,"nx-formfield",3),o._UZ(5,"input",4,5),o.TgZ(7,"span",6),o._uU(8," Note that the tag list will just ignore empty tag values. "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"button",7),o.NdJ("click",function(){o.CHM(t);const e=o.MAs(6);return o.MAs(2).addTag(e.value)}),o._uU(10,"Add tag"),o.qZA(),o.TgZ(11,"button",8),o.NdJ("click",function(){return o.CHM(t),o.MAs(2).clearTags()}),o._uU(12,"Clear tags"),o.qZA(),o._UZ(13,"br"),o.TgZ(14,"p"),o._uU(15),o.ALo(16,"json"),o.qZA(),o.TgZ(17,"p"),o._uU(18),o.ALo(19,"json"),o.qZA()}2&t&&(o.Q6J("formGroup",e.testForm),o.xp6(15),o.hij("Form value: ",o.lcZ(16,3,e.testForm.value),""),o.xp6(3),o.hij("Form status: ",o.lcZ(19,5,e.testForm.status),""))},directives:[g._Y,g.JL,g.sg,b,g.JJ,g.u,T.V,w.a,C.B,k.X],pipes:[i.Ts],styles:[""]}),t})(),D=(()=>{class t{constructor(){this.templateModel=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["taglist-templatedriven-example"]],decls:15,vars:2,consts:[["name","taglistNgModel",3,"ngModel","ngModelChange"],["taglistNgModel",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputNgModel",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"form"),o.TgZ(1,"nx-taglist",0,1),o.NdJ("ngModelChange",function(t){return e.templateModel=t}),o._uU(3," Sorry, you don't have any fruit. "),o.qZA(),o.TgZ(4,"nx-formfield",2),o._UZ(5,"input",3,4),o.TgZ(7,"span",5),o._uU(8," Note that the tag list will just ignore empty tag values. "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"button",6),o.NdJ("click",function(){o.CHM(t);const e=o.MAs(6);return o.MAs(2).addTag(e.value)}),o._uU(10,"Add tag"),o.qZA(),o.TgZ(11,"button",7),o.NdJ("click",function(){return o.CHM(t),o.MAs(2).clearTags()}),o._uU(12,"Clear tags"),o.qZA(),o._UZ(13,"br"),o._uU(14)}2&t&&(o.xp6(1),o.Q6J("ngModel",e.templateModel),o.xp6(13),o.hij("\nCurrent Value: ",e.templateModel,"\n"))},directives:[g._Y,g.JL,g.F,b,g.JJ,g.On,T.V,w.a,C.B,k.X],styles:[""]}),t})();var q=n(29508);let L=(()=>{class t{static components(){return{taglist:v,"taglist-a11y":y,"taglist-basic":Z,"taglist-delete":A,"taglist-formatter":M,"taglist-keyword":O,"taglist-objects":F,"taglist-output":J,"taglist-reactive":U,"taglist-templatedriven":D}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r,s.ZI,q.f]]}),t})()}}]);