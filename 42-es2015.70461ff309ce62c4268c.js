(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"/sJ9":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)}}),t})();n("LktG")},Cbtz:function(t,e,n){"use strict";n.r(e),n.d(e,"TaglistExamplesModule",function(){return j});var a=n("AqTC"),s=n("mN63"),r=n("ofXK"),i=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[r.c,s.c]]}),t})();var l=n("8LU1"),c=n("3Pt+"),g=n("FtGj"),u=n("u47x"),h=n("+vaC");function b(t,e){if(1&t){const t=i.Wb();i.Vb(0,"span",1),i.cc("click",function(e){return i.xc(t),i.gc().removeClickHandler(e)}),i.Qb(1,"nx-icon",2),i.Ub()}}let p=(()=>{class t{constructor(t,e,n){this._changeDetectorRef=t,this._elementRef=e,this._focusMonitor=n,this._tabindex=-1,this.clicked=new i.o,this.removed=new i.o,this._focusMonitor.monitor(this._elementRef)}set removable(t){this._removable=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get removable(){return this._removable}set tabindex(t){this._tabindex=Object(l.e)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.removable?0:this._tabindex}set value(t){this._value!==t&&(this._value=t,this._changeDetectorRef.markForCheck())}get value(){return this._value}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}removeClickHandler(t){t.stopPropagation(),this.removed.emit(this.value)}removeKeyHandler(t){!this.removable||t.keyCode!==g.c&&t.keyCode!==g.b||(t.preventDefault(),t.stopPropagation(),this.removed.emit(this.value)),t.keyCode===g.f&&this.clicked.emit(this.value)}tagClickHandler(){this.clicked.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.h),i.Pb(i.l),i.Pb(u.g))},t.\u0275cmp=i.Jb({type:t,selectors:[["nx-tag"]],hostVars:1,hostBindings:function(t,e){1&t&&i.cc("click",function(){return e.tagClickHandler()})("keydown",function(t){return e.removeKeyHandler(t)}),2&t&&i.Eb("tabindex",e.tabindex)},inputs:{removable:"removable",tabindex:"tabindex",value:"value"},outputs:{clicked:"clicked",removed:"removed"},decls:2,vars:2,consts:[["role","link","aria-label","close","class","nx-tag__close",3,"click",4,"ngIf"],["role","link","aria-label","close",1,"nx-tag__close",3,"click"],["name","close",1,"nx-tag__close-icon"]],template:function(t,e){1&t&&(i.Jc(0),i.Hc(1,b,2,0,"span",0)),2&t&&(i.Lc("",e.value,"\n"),i.Db(1),i.mc("ngIf",e.removable))},directives:[r.q,h.a],styles:["[_nghost-%COMP%]{font-size:var(--taglist-font-size);line-height:var(--taglist-line-height);font-weight:var(--taglist-font-weight);letter-spacing:var(--taglist-letter-spacing);height:auto;max-width:100%;color:var(--taglist-color);background-color:var(--taglist-background-color);padding:6px 14px;display:flex;align-items:center;border:2px solid var(--taglist-border-color);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease,box-shadow .2s ease;cursor:pointer}[_nghost-%COMP%]:hover{border-color:var(--taglist-hover-border-color);color:var(--taglist-hover-color);background-color:var(--taglist-hover-background-color)}[_nghost-%COMP%]:focus{outline:2px solid transparent}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-tag__close-icon[_ngcontent-%COMP%]{outline:none;display:block;font-size:var(--taglist-close-icon-size)}.nx-tag__close[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%]{margin-right:8px;margin-left:0}.nx-taglist--keyword[_nghost-%COMP%], .nx-taglist--keyword   [_nghost-%COMP%]{padding:14px 22px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%], [_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{color:buttonText;background-color:buttonFace;border-color:buttonText;-ms-high-contrast-adjust:none}}"],changeDetection:0}),t})();function m(t,e){if(1&t){const t=i.Wb();i.Vb(0,"li",4),i.Vb(1,"nx-tag",5),i.cc("clicked",function(n){i.xc(t);const a=e.index;return i.gc(2).tagClick(a,n)})("removed",function(n){i.xc(t);const a=e.index;return i.gc(2).delete(a,n)}),i.Ub(),i.Ub()}if(2&t){const t=e.$implicit,n=i.gc(2);i.Db(1),i.mc("value",n.renderTag(t))("removable",n.allowTagDeletion)("tabindex",n.tabindex)}}function d(t,e){if(1&t&&(i.Vb(0,"ul",2),i.Hc(1,m,2,3,"li",3),i.Ub()),2&t){const t=i.gc();i.Db(1),i.mc("ngForOf",t.tags)}}function x(t,e){1&t&&i.kc(0,0,["*ngIf","tags.length < 1"])}const f=["*"];let v=(()=>{class t{constructor(t){this._changeDetectorRef=t,this.tagsChange=new i.o,this.tagClickEvent=new i.o,this._tags=[],this._tabindex=-1,this._allowTagDeletion=!0,this._isKeywordList=!1,this._labelProperty="nxTaglistLabel",this._valueFormatterFn=t=>t,this._onChange=()=>{},this._onTouched=()=>{}}set tags(t){this._tags=t,this._changeDetectorRef.markForCheck()}get tags(){return this._tags}set tabindex(t){this._tabindex=Object(l.e)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.allowTagDeletion?0:this._tabindex}set allowTagDeletion(t){this._allowTagDeletion=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get allowTagDeletion(){return this._allowTagDeletion}set isKeywordList(t){this._isKeywordList=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get isKeywordList(){return this._isKeywordList}set labelProp(t){this._labelProperty!==t&&(this._labelProperty=t,this._changeDetectorRef.markForCheck())}get labelProp(){return this._labelProperty}set labelledby(t){this._ariaLabelledBy!==t&&(this._ariaLabelledBy=t,this._changeDetectorRef.markForCheck())}get labelledby(){return this._ariaLabelledBy}set valueFormatter(t){this._valueFormatterFn=t,this._changeDetectorRef.markForCheck()}get valueFormatter(){return this._valueFormatterFn}delete(t,e){this.allowTagDeletion&&(this.tags=[...this.tags.slice(0,t),...this.tags.slice(t+1)],this.tagChildren.toArray()[t+1]&&this.tagChildren.toArray()[t+1].nativeElement.focus(),this._onChange(this.tags),this.tagsChange.emit(this.tags))}addTag(t){t&&("string"==typeof t&&-1===this.tags.indexOf(t)||t[this.labelProp]&&this.tags.filter(e=>e[this.labelProp]===t[this.labelProp]).length<1)&&(this.tags=[...this.tags,t],this._onChange(this.tags),this.tagsChange.emit(this.tags))}clearTags(){this.tags=[],this._onChange(this.tags),this.tagsChange.emit(this.tags)}writeValue(t){this.tags=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}renderTag(t){return this.valueFormatter("string"==typeof t?t:t[this.labelProp])}tagClick(t,e){this.tagClickEvent.emit(this.tags[t])}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.h))},t.\u0275cmp=i.Jb({type:t,selectors:[["nx-taglist"]],viewQuery:function(t,e){if(1&t&&i.Nc(p,1,i.l),2&t){let t;i.sc(t=i.dc())&&(e.tagChildren=t)}},hostVars:4,hostBindings:function(t,e){2&t&&(i.Eb("aria-labelledby",e.labelledby||null)("tabindex",-1),i.Hb("nx-taglist--keyword",e.isKeywordList))},inputs:{tags:["nxTags","tags"],tabindex:"tabindex",allowTagDeletion:["nxAllowTagDeletion","allowTagDeletion"],isKeywordList:["nxIsKeywordList","isKeywordList"],labelProp:["nxLabelProperty","labelProp"],labelledby:["aria-labelledby","labelledby"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{tagsChange:"nxTagsChange",tagClickEvent:"nxTagClick"},features:[i.Cb([{provide:c.n,useExisting:Object(i.W)(()=>t),multi:!0}])],ngContentSelectors:f,decls:2,vars:2,consts:[["class","nx-taglist",4,"ngIf"],[4,"ngIf"],[1,"nx-taglist"],["class","nx-taglist__list-item","tabindex","-1",4,"ngFor","ngForOf"],["tabindex","-1",1,"nx-taglist__list-item"],[3,"value","removable","tabindex","clicked","removed"]],template:function(t,e){1&t&&(i.lc(),i.Hc(0,d,2,1,"ul",0),i.Hc(1,x,1,0,"ng-content",1)),2&t&&(i.mc("ngIf",e.tags.length>0),i.Db(1),i.mc("ngIf",e.tags.length<1))},directives:[r.q,r.p,p],styles:["[_nghost-%COMP%]{position:relative;min-height:32px;display:flex;justify-content:space-between}[_nghost-%COMP%]:focus{outline:none}.nx-taglist[_ngcontent-%COMP%], .nx-taglist__list-item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-taglist__list-item[_ngcontent-%COMP%]{list-style:none;margin-right:12px;margin-bottom:12px}[dir=rtl][_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%]{margin-right:0;margin-left:12px}@media (max-width:703px){.nx-taglist--keyword[_ngcontent-%COMP%]{justify-content:center}}"],changeDetection:0}),t})(),y=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&i.Qb(0,"nx-taglist",0),2&t&&i.mc("nxTags",e.tags)("nxAllowTagDeletion",!1)},directives:[v],styles:[""]}),t})(),_=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-a11y-example"]],decls:3,vars:2,consts:[["id","fruit-headline"],["aria-labelledby","fruit-headline",3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&(i.Vb(0,"h5",0),i.Jc(1,"Some fruit:"),i.Ub(),i.Qb(2,"nx-taglist",1)),2&t&&(i.Db(2),i.mc("nxTags",e.tags)("nxAllowTagDeletion",!1))},directives:[v],styles:[""]}),t})();var w=n("HXSb"),C=n("nK+a"),k=n("VamS"),T=n("LTpZ");let M=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-basic-example"]],decls:14,vars:2,consts:[[3,"nxTags","nxTagsChange"],["taglistBasic",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInput",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=i.Wb();i.Vb(0,"nx-taglist",0,1),i.cc("nxTagsChange",function(t){return e.tags=t}),i.Jc(2,"Sorry, you don't have any fruit."),i.Ub(),i.Vb(3,"nx-formfield",2),i.Qb(4,"input",3,4),i.Vb(6,"span",5),i.Jc(7," Note that the tag list will just ignore empty tag values. "),i.Ub(),i.Ub(),i.Vb(8,"button",6),i.cc("click",function(){i.xc(t);const e=i.tc(5);return i.tc(1).addTag(e.value)}),i.Jc(9,"Add tag"),i.Ub(),i.Vb(10,"button",7),i.cc("click",function(){return i.xc(t),i.tc(1).clearTags()}),i.Jc(11,"Clear tags"),i.Ub(),i.Qb(12,"br"),i.Jc(13)}2&t&&(i.mc("nxTags",e.tags),i.Db(13),i.Lc("\nCurrent Value: ",e.tags,"\n"))},directives:[v,w.b,C.b,k.a,T.a],styles:[""]}),t})(),P=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-delete-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&i.Qb(0,"nx-taglist",0),2&t&&i.mc("nxTags",e.tags)("nxAllowTagDeletion",!0)},directives:[v],styles:[""]}),t})(),O=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}myFormatter(t){return"my "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-formatter-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxValueFormatter","nxAllowTagDeletion"]],template:function(t,e){1&t&&i.Qb(0,"nx-taglist",0),2&t&&i.mc("nxTags",e.tags)("nxValueFormatter",e.myFormatter)("nxAllowTagDeletion",!1)},directives:[v],styles:[""]}),t})(),D=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-keyword-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxAllowTagDeletion","nxIsKeywordList"]],template:function(t,e){1&t&&i.Qb(0,"nx-taglist",0),2&t&&i.mc("nxTags",e.tags)("nxAllowTagDeletion",!1)("nxIsKeywordList",!0)},directives:[v],styles:[""]}),t})(),L=(()=>{class t{constructor(){this.tags=[{nxTaglistLabel:"Apples"},{nxTaglistLabel:"Oranges"},{nxTaglistLabel:"asd"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-objects-example"]],decls:15,vars:4,consts:[[3,"nxTags","nxTagsChange"],["taglistObjects",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputObjects",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=i.Wb();i.Vb(0,"nx-taglist",0,1),i.cc("nxTagsChange",function(t){return e.tags=t}),i.Jc(2,"Sorry, you don't have any fruit."),i.Ub(),i.Vb(3,"nx-formfield",2),i.Qb(4,"input",3,4),i.Vb(6,"span",5),i.Jc(7," Note that the tag list will just ignore empty tag values. "),i.Ub(),i.Ub(),i.Vb(8,"button",6),i.cc("click",function(){i.xc(t);const e=i.tc(5);return i.tc(1).addTag({nxTaglistLabel:e.value})}),i.Jc(9,"Add tag"),i.Ub(),i.Vb(10,"button",7),i.cc("click",function(){return i.xc(t),i.tc(1).clearTags()}),i.Jc(11,"Clear tags"),i.Ub(),i.Qb(12,"br"),i.Jc(13),i.hc(14,"json")}2&t&&(i.mc("nxTags",e.tags),i.Db(13),i.Lc("\nCurrent Value: ",i.ic(14,2,e.tags),"\n"))},directives:[v,w.b,C.b,k.a,T.a],pipes:[r.h],styles:[""]}),t})();function F(t,e){if(1&t&&(i.Vb(0,"pre"),i.Jc(1),i.Ub()),2&t){const t=i.gc();i.Db(1),i.Kc(t.logMessage)}}let V=(()=>{class t{constructor(){this.tags=["Apples","Oranges"],this.messages=[]}log(t){this.messages.push(t),this.logMessage=this.messages.join("\n")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-output-example"]],decls:2,vars:3,consts:[["tabindex","0",3,"nxTags","nxAllowTagDeletion","nxTagClick"],[4,"ngIf"]],template:function(t,e){1&t&&(i.Vb(0,"nx-taglist",0),i.cc("nxTagClick",function(t){return e.log(t)}),i.Ub(),i.Hc(1,F,2,1,"pre",1)),2&t&&(i.mc("nxTags",e.tags)("nxAllowTagDeletion",!1),i.Db(1),i.mc("ngIf",e.logMessage))},directives:[v,r.q],styles:[""]}),t})(),J=(()=>{class t{constructor(t){this.fb=t,this.createForm()}createForm(){this.testForm=this.fb.group({tagsTestReactive:[["Apples","Oranges"],c.y.required]})}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(c.d))},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-reactive-example"]],decls:20,vars:7,consts:[["name","reactiveTest",3,"formGroup"],["formControlName","tagsTestReactive"],["taglistReactive",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputReactive",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs",3,"click"],["nxButton","secondary small","type","button",3,"click"]],template:function(t,e){if(1&t){const t=i.Wb();i.Vb(0,"form",0),i.Vb(1,"nx-taglist",1,2),i.Jc(3,"Sorry, you don't have any fruit."),i.Ub(),i.Vb(4,"nx-formfield",3),i.Qb(5,"input",4,5),i.Vb(7,"span",6),i.Jc(8," Note that the tag list will just ignore empty tag values. "),i.Ub(),i.Ub(),i.Ub(),i.Vb(9,"button",7),i.cc("click",function(){i.xc(t);const e=i.tc(6);return i.tc(2).addTag(e.value)}),i.Jc(10,"Add tag"),i.Ub(),i.Vb(11,"button",8),i.cc("click",function(){return i.xc(t),i.tc(2).clearTags()}),i.Jc(12,"Clear tags"),i.Ub(),i.Qb(13,"br"),i.Vb(14,"p"),i.Jc(15),i.hc(16,"json"),i.Ub(),i.Vb(17,"p"),i.Jc(18),i.hc(19,"json"),i.Ub()}2&t&&(i.mc("formGroup",e.testForm),i.Db(15),i.Lc("Form value: ",i.ic(16,3,e.testForm.value),""),i.Db(3),i.Lc("Form status: ",i.ic(19,5,e.testForm.status),""))},directives:[c.A,c.q,c.i,v,c.p,c.g,w.b,C.b,k.a,T.a],pipes:[r.h],styles:[""]}),t})(),A=(()=>{class t{constructor(){this.templateModel=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["taglist-templatedriven-example"]],decls:15,vars:2,consts:[["name","taglistNgModel",3,"ngModel","ngModelChange"],["taglistNgModel",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputNgModel",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=i.Wb();i.Vb(0,"form"),i.Vb(1,"nx-taglist",0,1),i.cc("ngModelChange",function(t){return e.templateModel=t}),i.Jc(3," Sorry, you don't have any fruit. "),i.Ub(),i.Vb(4,"nx-formfield",2),i.Qb(5,"input",3,4),i.Vb(7,"span",5),i.Jc(8," Note that the tag list will just ignore empty tag values. "),i.Ub(),i.Ub(),i.Ub(),i.Vb(9,"button",6),i.cc("click",function(){i.xc(t);const e=i.tc(6);return i.tc(2).addTag(e.value)}),i.Jc(10,"Add tag"),i.Ub(),i.Vb(11,"button",7),i.cc("click",function(){return i.xc(t),i.tc(2).clearTags()}),i.Jc(12,"Clear tags"),i.Ub(),i.Qb(13,"br"),i.Jc(14)}2&t&&(i.Db(1),i.mc("ngModel",e.templateModel),i.Db(13),i.Lc("\nCurrent Value: ",e.templateModel,"\n"))},directives:[c.A,c.q,c.r,v,c.p,c.s,w.b,C.b,k.a,T.a],styles:[""]}),t})();var U=n("ierq");let j=(()=>{class t{static components(){return{taglist:y,"taglist-a11y":_,"taglist-basic":M,"taglist-delete":P,"taglist-formatter":O,"taglist-keyword":D,"taglist-objects":L,"taglist-output":V,"taglist-reactive":J,"taglist-templatedriven":A}}}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[o,a.b,U.a]]}),t})()},LktG:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("fXoL");const s=["nxCopytext",""],r=["*"];let i=(()=>{class t{constructor(){this.type="normal",this.negative=!1}set classNames(t){if(this._classNames===t)return;this._classNames=t;const[e=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=e,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Jb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,e){2&t&&a.Hb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t})()},ierq:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var a=n("tgBs"),s=n("/sJ9"),r=n("eV8M"),i=n("gkbm"),o=n("ofXK"),l=n("3Pt+"),c=n("fXoL");let g=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[],o.c,l.k,l.v,i.b,r.a,s.a,a.a]}),t})()}}]);