!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],a=!0,i=!1,o=void 0;try{for(var r,s=n[Symbol.iterator]();!(a=(r=s.next()).done)&&(t.push(r.value),!e||t.length!==e);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}return t}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);"Object"===a&&n.constructor&&(a=n.constructor.name);if("Map"===a||"Set"===a)return Array.from(n);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function t(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function a(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/sJ9":function(n,e,t){"use strict";t.d(e,"a",function(){return r});var a,o=t("fXoL"),r=((a=function n(){i(this,n)}).\u0275mod=o.Nb({type:a}),a.\u0275inj=o.Mb({factory:function(n){return new(n||a)}}),a);t("LktG")},LktG:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var r=o("fXoL"),s=["nxCopytext",""],c=["*"],l=function(){var e=function(){function e(){i(this,e),this.type="normal",this.negative=!1}return a(e,[{key:"classNames",set:function(e){if(this._classNames!==e){this._classNames=e;var t=n(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],a=void 0===t?null:t;this.type=a,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(n,e){2&n&&r.Hb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:s,ngContentSelectors:c,decls:1,vars:0,template:function(n,e){1&n&&(r.lc(),r.kc(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e}()},Mamh:function(n,e,t){"use strict";t.r(e),t.d(e,"AccordionExamplesModule",function(){return en});var o,r=t("ierq"),s=t("SqJ0"),c=t("mN63"),l=t("AqTC"),p=t("BEHP"),b=t("fXoL"),u=t("3vtQ"),m=t("JEl4"),x=t("4iB5"),d=t("eC/v"),f=t("LktG"),h=((o=function n(){i(this,n)}).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Jb({type:o,selectors:[["accordion-example"]],decls:17,vars:0,consts:[["nxHeadline","subsection-medium",1,"nx-margin-bottom-2m"],["nxCopytext","normal"],["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion"),b.Vb(1,"nx-expansion-panel"),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Jc(4,"General information"),b.Ub(),b.Ub(),b.Vb(5,"h2",0),b.Jc(6,"What's important"),b.Ub(),b.Vb(7,"p",1),b.Jc(8,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(9,"nx-expansion-panel"),b.Vb(10,"nx-expansion-panel-header"),b.Vb(11,"nx-expansion-panel-title"),b.Jc(12,"Payment details"),b.Ub(),b.Ub(),b.Vb(13,"h2",2),b.Jc(14,"What's included"),b.Ub(),b.Vb(15,"p",1),b.Jc(16,"Lorem ipsum"),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,d.a,f.a],styles:[""]}),o),g=t("3Pt+"),V=t("ofXK"),U=t("aQnR"),y=t("BQ2b"),v=t("5/jY"),J=t("HXSb"),q=t("nK+a"),w=t("aXeq"),L=t("v44Z"),C=t("+vaC"),P=t("Xe60");function E(n,e){1&n&&b.Qb(0,"nx-icon",12),2&n&&b.mc("name","exclamation-triangle")}function I(n,e){1&n&&b.Qb(0,"nx-icon",12),2&n&&b.mc("name","exclamation-triangle")}function M(n,e){1&n&&(b.Vb(0,"nx-message",13),b.Vb(1,"strong"),b.Jc(2," Error: "),b.Ub(),b.Jc(3," Please check the red marked areas.\n"),b.Ub())}var N,k,_,G=((_=function(){function n(e){i(this,n),this.fb=e,this.showErrorPayment=!0,this.showErrorInfo=!1,this.createForm()}return a(n,[{key:"createForm",value:function(){this.formGroupInfo=this.fb.group({surname:["Mustermann",g.y.required]}),this.formGroupPayment=this.fb.group({input:[,g.y.required]}),this.formGroupPayment.markAllAsTouched()}},{key:"infoHasError",get:function(){return this.formGroupInfo.get("surname").hasError("required")}},{key:"paymentHasError",get:function(){return this.formGroupPayment.get("input").hasError("required")}}]),n}()).\u0275fac=function(n){return new(n||_)(b.Pb(g.d))},_.\u0275cmp=b.Jb({type:_,selectors:[["accordion-error-example"]],decls:36,vars:5,consts:[[1,"expansion-title-with-icon"],["class","nx-error__icon",3,"name",4,"ngIf"],[3,"formGroup"],["nxLayout","grid nogutters"],["nxRow",""],["nxCol","12,12,12,6,6"],["nxLabel","Surname"],["required","","nxInput","","formControlName","surname"],["nxFormfieldError",""],["nxLabel","Label"],["required","","nxInput","","formControlName","input"],["nxContext","error","class","nx-margin-top-xs",4,"ngIf"],[1,"nx-error__icon",3,"name"],["nxContext","error",1,"nx-margin-top-xs"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion"),b.Vb(1,"nx-expansion-panel"),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Vb(4,"div",0),b.Hc(5,E,1,1,"nx-icon",1),b.Vb(6,"span"),b.Jc(7,"General Information"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(8,"form",2),b.Vb(9,"div",3),b.Vb(10,"div",4),b.Vb(11,"div",5),b.Vb(12,"nx-formfield",6),b.Qb(13,"input",7),b.Vb(14,"nx-error",8),b.Vb(15,"strong"),b.Jc(16," Please note: "),b.Ub(),b.Jc(17," you have to fill out this field to continue. "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(18,"nx-expansion-panel"),b.Vb(19,"nx-expansion-panel-header"),b.Vb(20,"nx-expansion-panel-title"),b.Vb(21,"div",0),b.Hc(22,I,1,1,"nx-icon",1),b.Vb(23,"span"),b.Jc(24,"Payment details"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(25,"form",2),b.Vb(26,"div",3),b.Vb(27,"div",4),b.Vb(28,"div",5),b.Vb(29,"nx-formfield",9),b.Qb(30,"input",10),b.Vb(31,"nx-error",8),b.Vb(32,"strong"),b.Jc(33," Please note: "),b.Ub(),b.Jc(34," you have to fill out this field to continue. "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Hc(35,M,4,0,"nx-message",11)),2&n&&(b.Db(5),b.mc("ngIf",e.infoHasError),b.Db(3),b.mc("formGroup",e.formGroupInfo),b.Db(14),b.mc("ngIf",e.paymentHasError),b.Db(3),b.mc("formGroup",e.formGroupPayment),b.Db(10),b.mc("ngIf",e.infoHasError||e.paymentHasError))},directives:[u.a,m.a,x.a,x.b,V.q,g.A,g.q,g.i,U.a,y.a,v.a,J.b,q.b,g.a,g.w,g.p,g.g,w.b,L.a,C.a,P.a],styles:[".expansion-title-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center}nx-accordion[_ngcontent-%COMP%]     .nx-error__icon{color:var(--danger,#ed6f7c);margin-right:16px}"]}),_),H=((k=function n(){i(this,n)}).\u0275fac=function(n){return new(n||k)},k.\u0275cmp=b.Jb({type:k,selectors:[["accordion-extra-light-example"]],decls:25,vars:1,consts:[["nxStyle","extra-light"],["nxCopytext","normal",1,"nx-margin-0"],[3,"disabled"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion",0),b.Vb(1,"nx-expansion-panel"),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Jc(4,"Insurance details"),b.Ub(),b.Ub(),b.Vb(5,"p",1),b.Jc(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Vb(7,"nx-expansion-panel",2),b.Vb(8,"nx-expansion-panel-header"),b.Vb(9,"nx-expansion-panel-title"),b.Jc(10,"Insurance details (disabled)"),b.Ub(),b.Ub(),b.Vb(11,"p",1),b.Jc(12," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Vb(13,"nx-expansion-panel"),b.Vb(14,"nx-expansion-panel-header"),b.Vb(15,"nx-expansion-panel-title"),b.Jc(16,"Insurance details"),b.Ub(),b.Ub(),b.Vb(17,"p",1),b.Jc(18," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Vb(19,"nx-expansion-panel"),b.Vb(20,"nx-expansion-panel-header"),b.Vb(21,"nx-expansion-panel-title"),b.Jc(22,"Insurance details"),b.Ub(),b.Ub(),b.Vb(23,"p",1),b.Jc(24," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Ub()),2&n&&(b.Db(7),b.mc("disabled",!0))},directives:[u.a,m.a,x.a,x.b,f.a],styles:[""]}),k),A=((N=function n(){i(this,n)}).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=b.Jb({type:N,selectors:[["accordion-extra-light-negative-example"]],decls:26,vars:0,consts:[[1,"docs-inverse-container"],["nxStyle","extra-light","negative","true"],["nxCopytext","normal",1,"nx-margin-0"],["disabled","true"]],template:function(n,e){1&n&&(b.Vb(0,"div",0),b.Vb(1,"nx-accordion",1),b.Vb(2,"nx-expansion-panel"),b.Vb(3,"nx-expansion-panel-header"),b.Vb(4,"nx-expansion-panel-title"),b.Jc(5,"About us"),b.Ub(),b.Ub(),b.Vb(6,"p",2),b.Jc(7,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(8,"nx-expansion-panel"),b.Vb(9,"nx-expansion-panel-header"),b.Vb(10,"nx-expansion-panel-title"),b.Jc(11,"Contact us"),b.Ub(),b.Ub(),b.Vb(12,"p",2),b.Jc(13,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(14,"nx-expansion-panel"),b.Vb(15,"nx-expansion-panel-header"),b.Vb(16,"nx-expansion-panel-title"),b.Jc(17,"More information"),b.Ub(),b.Ub(),b.Vb(18,"p",2),b.Jc(19,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(20,"nx-expansion-panel",3),b.Vb(21,"nx-expansion-panel-header"),b.Vb(22,"nx-expansion-panel-title"),b.Jc(23,"Insurance details (disabled)"),b.Ub(),b.Ub(),b.Vb(24,"p",2),b.Jc(25," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,f.a],styles:[""]}),N),O=t("PmOb");function S(n,e){1&n&&(b.Vb(0,"p",1),b.Jc(1,"Lorem ipsum"),b.Ub())}function z(n,e){1&n&&(b.Vb(0,"p",1),b.Jc(1,"Lorem ipsum"),b.Ub())}var D,R,j,X,B,Q,T,W=((j=function n(){i(this,n)}).\u0275fac=function(n){return new(n||j)},j.\u0275cmp=b.Jb({type:j,selectors:[["accordion-lazy-example"]],decls:11,vars:0,consts:[["nxExpansionPanelBody",""],["nxCopytext","normal"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion"),b.Vb(1,"nx-expansion-panel"),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Jc(4,"General information"),b.Ub(),b.Ub(),b.Hc(5,S,2,0,"ng-template",0),b.Ub(),b.Vb(6,"nx-expansion-panel"),b.Vb(7,"nx-expansion-panel-header"),b.Vb(8,"nx-expansion-panel-title"),b.Jc(9,"Payment Details"),b.Ub(),b.Ub(),b.Hc(10,z,2,0,"ng-template",0),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,O.a,f.a],styles:[""]}),j),F=((R=function n(){i(this,n)}).\u0275fac=function(n){return new(n||R)},R.\u0275cmp=b.Jb({type:R,selectors:[["accordion-light-example"]],decls:19,vars:0,consts:[["nxStyle","light"],["disabled",""],["nxCopytext","normal"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion",0),b.Vb(1,"nx-expansion-panel",1),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Jc(4,"About us (disabled)"),b.Ub(),b.Ub(),b.Vb(5,"p",2),b.Jc(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Vb(7,"nx-expansion-panel"),b.Vb(8,"nx-expansion-panel-header"),b.Vb(9,"nx-expansion-panel-title"),b.Jc(10,"Contact us"),b.Ub(),b.Ub(),b.Vb(11,"p",2),b.Jc(12," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Vb(13,"nx-expansion-panel"),b.Vb(14,"nx-expansion-panel-header"),b.Vb(15,"nx-expansion-panel-title"),b.Jc(16,"More information"),b.Ub(),b.Ub(),b.Vb(17,"p",2),b.Jc(18," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,f.a],styles:["p[_ngcontent-%COMP%]{margin:0}"]}),R),K=((D=function n(){i(this,n)}).\u0275fac=function(n){return new(n||D)},D.\u0275cmp=b.Jb({type:D,selectors:[["accordion-light-negative-example"]],decls:20,vars:0,consts:[[1,"docs-inverse-container"],["nxStyle","light","negative","true"],["nxCopytext","normal"],["disabled","true"]],template:function(n,e){1&n&&(b.Vb(0,"div",0),b.Vb(1,"nx-accordion",1),b.Vb(2,"nx-expansion-panel"),b.Vb(3,"nx-expansion-panel-header"),b.Vb(4,"nx-expansion-panel-title"),b.Jc(5,"About us"),b.Ub(),b.Ub(),b.Vb(6,"p",2),b.Jc(7,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(8,"nx-expansion-panel"),b.Vb(9,"nx-expansion-panel-header"),b.Vb(10,"nx-expansion-panel-title"),b.Jc(11,"Contact us"),b.Ub(),b.Ub(),b.Vb(12,"p",2),b.Jc(13,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(14,"nx-expansion-panel",3),b.Vb(15,"nx-expansion-panel-header"),b.Vb(16,"nx-expansion-panel-title"),b.Jc(17,"More information (disabled)"),b.Ub(),b.Ub(),b.Vb(18,"p",2),b.Jc(19,"Lorem ipsum"),b.Ub(),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,f.a],styles:[""]}),D),Z=t("LTpZ"),Y=((T=function(){function n(){i(this,n),this.multi=!0}return a(n,[{key:"toggleMulti",value:function(){this.multi=!this.multi}}]),n}()).\u0275fac=function(n){return new(n||T)},T.\u0275cmp=b.Jb({type:T,selectors:[["accordion-multi-example"]],decls:17,vars:2,consts:[[3,"multi"],["nxCopytext","normal"],["nxButton","","type","button",3,"click"]],template:function(n,e){1&n&&(b.Vb(0,"nx-accordion",0),b.Vb(1,"nx-expansion-panel"),b.Vb(2,"nx-expansion-panel-header"),b.Vb(3,"nx-expansion-panel-title"),b.Jc(4,"About us"),b.Ub(),b.Ub(),b.Vb(5,"p",1),b.Jc(6,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(7,"nx-expansion-panel"),b.Vb(8,"nx-expansion-panel-header"),b.Vb(9,"nx-expansion-panel-title"),b.Jc(10,"Contact us"),b.Ub(),b.Ub(),b.Vb(11,"p",1),b.Jc(12,"Lorem ipsum"),b.Ub(),b.Ub(),b.Ub(),b.Vb(13,"p"),b.Jc(14),b.Ub(),b.Vb(15,"button",2),b.cc("click",function(){return e.toggleMulti()}),b.Jc(16,"Toggle Multi"),b.Ub()),2&n&&(b.mc("multi",e.multi),b.Db(14),b.Lc("Is [multi] active? ",e.multi,""))},directives:[u.a,m.a,x.a,x.b,f.a,Z.a],styles:[""]}),T),$=((Q=function n(){i(this,n)}).\u0275fac=function(n){return new(n||Q)},Q.\u0275cmp=b.Jb({type:Q,selectors:[["accordion-negative-example"]],decls:14,vars:0,consts:[[1,"docs-inverse-container"],["negative","true"],["nxCopytext","normal"]],template:function(n,e){1&n&&(b.Vb(0,"div",0),b.Vb(1,"nx-accordion",1),b.Vb(2,"nx-expansion-panel"),b.Vb(3,"nx-expansion-panel-header"),b.Vb(4,"nx-expansion-panel-title"),b.Jc(5,"About us"),b.Ub(),b.Ub(),b.Vb(6,"p",2),b.Jc(7,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(8,"nx-expansion-panel"),b.Vb(9,"nx-expansion-panel-header"),b.Vb(10,"nx-expansion-panel-title"),b.Jc(11,"Contact us"),b.Ub(),b.Ub(),b.Vb(12,"p",2),b.Jc(13,"Lorem ipsum"),b.Ub(),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,m.a,x.a,x.b,f.a],styles:[""]}),Q),nn=((B=function n(){i(this,n)}).\u0275fac=function(n){return new(n||B)},B.\u0275cmp=b.Jb({type:B,selectors:[["accordion-standalone-example"]],decls:24,vars:1,consts:[["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxCopytext","normal",1,"nx-margin-bottom-2m"],["nxCopytext","normal"],[3,"disabled"]],template:function(n,e){1&n&&(b.Vb(0,"nx-expansion-panel"),b.Vb(1,"nx-expansion-panel-header"),b.Vb(2,"nx-expansion-panel-title"),b.Jc(3,"Insurance details"),b.Ub(),b.Ub(),b.Vb(4,"h2",0),b.Jc(5,"General"),b.Ub(),b.Vb(6,"p",1),b.Jc(7,"Lorem ipsum"),b.Ub(),b.Vb(8,"h2",0),b.Jc(9,"What's included"),b.Ub(),b.Vb(10,"p",2),b.Jc(11,"Lorem ipsum"),b.Ub(),b.Ub(),b.Vb(12,"nx-expansion-panel",3),b.Vb(13,"nx-expansion-panel-header"),b.Vb(14,"nx-expansion-panel-title"),b.Jc(15,"Insurance details (disabled)"),b.Ub(),b.Ub(),b.Vb(16,"h2",0),b.Jc(17,"General"),b.Ub(),b.Vb(18,"p",1),b.Jc(19,"Lorem ipsum"),b.Ub(),b.Vb(20,"h2",0),b.Jc(21,"What's included"),b.Ub(),b.Vb(22,"p",2),b.Jc(23,"Lorem ipsum"),b.Ub(),b.Ub()),2&n&&(b.Db(12),b.mc("disabled",!0))},directives:[m.a,x.a,x.b,d.a,f.a],styles:[""]}),B),en=((X=function(){function n(){i(this,n)}return a(n,null,[{key:"components",value:function(){return{accordion:h,"accordion-error":G,"accordion-extra-light":H,"accordion-extra-light-negative":A,"accordion-lazy":W,"accordion-light":F,"accordion-light-negative":K,"accordion-multi":Y,"accordion-negative":$,"accordion-standalone":nn}}}]),n}()).\u0275mod=b.Nb({type:X}),X.\u0275inj=b.Mb({factory:function(n){return new(n||X)},imports:[[p.b,l.b,c.c,s.a,r.a]]}),X)},ierq:function(n,e,t){"use strict";t.d(e,"a",function(){return b});var a=t("tgBs"),o=t("/sJ9"),r=t("eV8M"),s=t("gkbm"),c=t("ofXK"),l=t("3Pt+"),p=t("fXoL"),b=function(){var n=function n(){i(this,n)};return n.\u0275mod=p.Nb({type:n}),n.\u0275inj=p.Mb({factory:function(e){return new(e||n)},imports:[[],c.c,l.k,l.v,s.b,r.a,o.a,a.a]}),n}()}}])}();