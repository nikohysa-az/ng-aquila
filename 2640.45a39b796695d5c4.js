"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[2640],{2640:(C,E,i)=>{i.r(E),i.d(E,{AccordionExamplesModule:()=>_});var o=i(5395),A=i(9195),h=i(6942),T=i(8468),U=i(9508),n=i(4650),q=i(4188),r=i(1486);class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["accordion-example"]],decls:17,vars:0,consts:[["nxHeadline","subsection-medium",1,"nx-margin-bottom-2m"],["nxCopytext","normal"],["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion")(1,"nx-expansion-panel")(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title"),n._uU(4,"General information"),n.qZA()(),n.TgZ(5,"h2",0),n._uU(6," What's important "),n.qZA(),n.TgZ(7,"p",1),n._uU(8,"Lorem ipsum"),n.qZA()(),n.TgZ(9,"nx-expansion-panel")(10,"nx-expansion-panel-header")(11,"nx-expansion-panel-title"),n._uU(12,"Payment details"),n.qZA()(),n.TgZ(13,"h2",2),n._uU(14," What's included "),n.qZA(),n.TgZ(15,"p",1),n._uU(16,"Lorem ipsum"),n.qZA()()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,q.s,r.v]});var p=i(4006),y=i(6566),L=i(7823),b=i(6895),v=i(9561);function M(a,e){1&a&&n._UZ(0,"nx-icon",12),2&a&&n.Q6J("name","exclamation-triangle")}function I(a,e){1&a&&n._UZ(0,"nx-icon",12),2&a&&n.Q6J("name","exclamation-triangle")}function P(a,e){1&a&&(n.TgZ(0,"nx-message",13)(1,"strong"),n._uU(2," Error: "),n.qZA(),n._uU(3," Please check the red marked areas.\n"),n.qZA())}class l{constructor(e){this.fb=e,this.formGroupInfo=this.fb.group({surname:["Mustermann",p.kI.required]}),this.formGroupPayment=this.fb.group({input:["",p.kI.required]}),this.showErrorPayment=!0,this.showErrorInfo=!1,this.formGroupPayment.markAllAsTouched()}get infoHasError(){var e;return null==(e=this.formGroupInfo.get("surname"))?void 0:e.hasError("required")}get paymentHasError(){var e;return null==(e=this.formGroupPayment.get("input"))?void 0:e.hasError("required")}}l.\u0275fac=function(e){return new(e||l)(n.Y36(p.QS))},l.\u0275cmp=n.Xpm({type:l,selectors:[["accordion-error-example"]],decls:36,vars:5,consts:[[1,"expansion-title-with-icon"],["class","nx-error__icon",3,"name",4,"ngIf"],[3,"formGroup"],["nxLayout","grid nogutters"],["nxRow",""],["nxCol","12,12,12,6,6"],["nxLabel","Surname"],["required","","nxInput","","formControlName","surname"],["nxFormfieldError",""],["nxLabel","Label"],["required","","nxInput","","formControlName","input"],["nxContext","error","class","nx-margin-top-xs",4,"ngIf"],[1,"nx-error__icon",3,"name"],["nxContext","error",1,"nx-margin-top-xs"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion")(1,"nx-expansion-panel")(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title")(4,"div",0),n.YNc(5,M,1,1,"nx-icon",1),n.TgZ(6,"span"),n._uU(7,"General Information"),n.qZA()()()(),n.TgZ(8,"form",2)(9,"div",3)(10,"div",4)(11,"div",5)(12,"nx-formfield",6),n._UZ(13,"input",7),n.TgZ(14,"nx-error",8)(15,"strong"),n._uU(16," Please note: "),n.qZA(),n._uU(17," you have to fill out this field to continue. "),n.qZA()()()()()()(),n.TgZ(18,"nx-expansion-panel")(19,"nx-expansion-panel-header")(20,"nx-expansion-panel-title")(21,"div",0),n.YNc(22,I,1,1,"nx-icon",1),n.TgZ(23,"span"),n._uU(24,"Payment details"),n.qZA()()()(),n.TgZ(25,"form",2)(26,"div",3)(27,"div",4)(28,"div",5)(29,"nx-formfield",9),n._UZ(30,"input",10),n.TgZ(31,"nx-error",8)(32,"strong"),n._uU(33," Please note: "),n.qZA(),n._uU(34," you have to fill out this field to continue. "),n.qZA()()()()()()()(),n.YNc(35,P,4,0,"nx-message",11)),2&e&&(n.xp6(5),n.Q6J("ngIf",t.infoHasError),n.xp6(3),n.Q6J("formGroup",t.formGroupInfo),n.xp6(14),n.Q6J("ngIf",t.paymentHasError),n.xp6(3),n.Q6J("formGroup",t.formGroupPayment),n.xp6(10),n.Q6J("ngIf",t.infoHasError||t.paymentHasError))},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,y.VM,y.Sr,L.vV,h.aP,A.O8,T.wM,b.O5,p._Y,p.Fj,p.JJ,p.JL,p.Q7,p.sg,p.u,v.RH,v.yI,v.s7],styles:[".expansion-title-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center}nx-accordion[_ngcontent-%COMP%]     .nx-error__icon{color:var(--danger, #ed6f7c);margin-right:16px}"]});class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["accordion-extra-light-example"]],decls:25,vars:1,consts:[["nxStyle","extra-light"],["nxCopytext","normal",1,"nx-margin-0"],[3,"disabled"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion",0)(1,"nx-expansion-panel")(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title"),n._uU(4,"Insurance details"),n.qZA()(),n.TgZ(5,"p",1),n._uU(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()(),n.TgZ(7,"nx-expansion-panel",2)(8,"nx-expansion-panel-header")(9,"nx-expansion-panel-title"),n._uU(10,"Insurance details (disabled)"),n.qZA()(),n.TgZ(11,"p",1),n._uU(12," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()(),n.TgZ(13,"nx-expansion-panel")(14,"nx-expansion-panel-header")(15,"nx-expansion-panel-title"),n._uU(16,"Insurance details"),n.qZA()(),n.TgZ(17,"p",1),n._uU(18," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()(),n.TgZ(19,"nx-expansion-panel")(20,"nx-expansion-panel-header")(21,"nx-expansion-panel-title"),n._uU(22,"Insurance details"),n.qZA()(),n.TgZ(23,"p",1),n._uU(24," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()()()),2&e&&(n.xp6(7),n.Q6J("disabled",!0))},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,r.v]});class c{}function G(a,e){1&a&&(n.TgZ(0,"p",1),n._uU(1,"Lorem ipsum"),n.qZA())}function N(a,e){1&a&&(n.TgZ(0,"p",1),n._uU(1,"Lorem ipsum"),n.qZA())}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["accordion-extra-light-negative-example"]],decls:26,vars:0,consts:[[1,"docs-inverse-container"],["nxStyle","extra-light","negative","true"],["nxCopytext","normal",1,"nx-margin-0"],["disabled","true"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"nx-accordion",1)(2,"nx-expansion-panel")(3,"nx-expansion-panel-header")(4,"nx-expansion-panel-title"),n._uU(5,"About us"),n.qZA()(),n.TgZ(6,"p",2),n._uU(7,"Lorem ipsum"),n.qZA()(),n.TgZ(8,"nx-expansion-panel")(9,"nx-expansion-panel-header")(10,"nx-expansion-panel-title"),n._uU(11,"Contact us"),n.qZA()(),n.TgZ(12,"p",2),n._uU(13,"Lorem ipsum"),n.qZA()(),n.TgZ(14,"nx-expansion-panel")(15,"nx-expansion-panel-header")(16,"nx-expansion-panel-title"),n._uU(17,"More information"),n.qZA()(),n.TgZ(18,"p",2),n._uU(19,"Lorem ipsum"),n.qZA()(),n.TgZ(20,"nx-expansion-panel",3)(21,"nx-expansion-panel-header")(22,"nx-expansion-panel-title"),n._uU(23,"Insurance details (disabled)"),n.qZA()(),n.TgZ(24,"p",2),n._uU(25," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()()()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,r.v]});class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["accordion-lazy-example"]],decls:11,vars:0,consts:[["nxExpansionPanelBody",""],["nxCopytext","normal"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion")(1,"nx-expansion-panel")(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title"),n._uU(4,"General information"),n.qZA()(),n.YNc(5,G,2,0,"ng-template",0),n.qZA(),n.TgZ(6,"nx-expansion-panel")(7,"nx-expansion-panel-header")(8,"nx-expansion-panel-title"),n._uU(9,"Payment Details"),n.qZA()(),n.YNc(10,N,2,0,"ng-template",0),n.qZA()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,o.FF,r.v]});class x{}x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=n.Xpm({type:x,selectors:[["accordion-light-example"]],decls:19,vars:0,consts:[["nxStyle","light"],["disabled",""],["nxCopytext","normal"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion",0)(1,"nx-expansion-panel",1)(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title"),n._uU(4,"About us (disabled)"),n.qZA()(),n.TgZ(5,"p",2),n._uU(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()(),n.TgZ(7,"nx-expansion-panel")(8,"nx-expansion-panel-header")(9,"nx-expansion-panel-title"),n._uU(10,"Contact us"),n.qZA()(),n.TgZ(11,"p",2),n._uU(12," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()(),n.TgZ(13,"nx-expansion-panel")(14,"nx-expansion-panel-header")(15,"nx-expansion-panel-title"),n._uU(16,"More information"),n.qZA()(),n.TgZ(17,"p",2),n._uU(18," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fugit. Rem tempora corporis illum aut fugit quidem dicta! Excepturi consequuntur mollitia quibusdam sequi deserunt beatae labore expedita dolorum omnis incidunt! "),n.qZA()()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,r.v],styles:["p[_ngcontent-%COMP%]{margin:0}"]});class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["accordion-light-negative-example"]],decls:20,vars:0,consts:[[1,"docs-inverse-container"],["nxStyle","light","negative","true"],["nxCopytext","normal"],["disabled","true"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"nx-accordion",1)(2,"nx-expansion-panel")(3,"nx-expansion-panel-header")(4,"nx-expansion-panel-title"),n._uU(5,"About us"),n.qZA()(),n.TgZ(6,"p",2),n._uU(7,"Lorem ipsum"),n.qZA()(),n.TgZ(8,"nx-expansion-panel")(9,"nx-expansion-panel-header")(10,"nx-expansion-panel-title"),n._uU(11,"Contact us"),n.qZA()(),n.TgZ(12,"p",2),n._uU(13,"Lorem ipsum"),n.qZA()(),n.TgZ(14,"nx-expansion-panel",3)(15,"nx-expansion-panel-header")(16,"nx-expansion-panel-title"),n._uU(17,"More information (disabled)"),n.qZA()(),n.TgZ(18,"p",2),n._uU(19,"Lorem ipsum"),n.qZA()()()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,r.v]});var S=i(690);class g{constructor(){this.multi=!0}toggleMulti(){this.multi=!this.multi}}g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["accordion-multi-example"]],decls:17,vars:2,consts:[[3,"multi"],["nxCopytext","normal"],["nxButton","","type","button",3,"click"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-accordion",0)(1,"nx-expansion-panel")(2,"nx-expansion-panel-header")(3,"nx-expansion-panel-title"),n._uU(4,"About us"),n.qZA()(),n.TgZ(5,"p",1),n._uU(6,"Lorem ipsum"),n.qZA()(),n.TgZ(7,"nx-expansion-panel")(8,"nx-expansion-panel-header")(9,"nx-expansion-panel-title"),n._uU(10,"Contact us"),n.qZA()(),n.TgZ(11,"p",1),n._uU(12,"Lorem ipsum"),n.qZA()()(),n.TgZ(13,"p"),n._uU(14),n.qZA(),n.TgZ(15,"button",2),n.NdJ("click",function(){return t.toggleMulti()}),n._uU(16,"Toggle Multi"),n.qZA()),2&e&&(n.Q6J("multi",t.multi),n.xp6(14),n.hij("Is [multi] active? ",t.multi,""))},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,S.XV,r.v]});class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["accordion-negative-example"]],decls:14,vars:0,consts:[[1,"docs-inverse-container"],["negative","true"],["nxCopytext","normal"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"nx-accordion",1)(2,"nx-expansion-panel")(3,"nx-expansion-panel-header")(4,"nx-expansion-panel-title"),n._uU(5,"About us"),n.qZA()(),n.TgZ(6,"p",2),n._uU(7,"Lorem ipsum"),n.qZA()(),n.TgZ(8,"nx-expansion-panel")(9,"nx-expansion-panel-header")(10,"nx-expansion-panel-title"),n._uU(11,"Contact us"),n.qZA()(),n.TgZ(12,"p",2),n._uU(13,"Lorem ipsum"),n.qZA()()()())},dependencies:[o.Yq,o.Gs,o.SZ,o.Km,r.v]});class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["accordion-standalone-example"]],decls:24,vars:1,consts:[["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxCopytext","normal",1,"nx-margin-bottom-2m"],["nxCopytext","normal"],[3,"disabled"]],template:function(e,t){1&e&&(n.TgZ(0,"nx-expansion-panel")(1,"nx-expansion-panel-header")(2,"nx-expansion-panel-title"),n._uU(3,"Insurance details"),n.qZA()(),n.TgZ(4,"h2",0),n._uU(5,"General"),n.qZA(),n.TgZ(6,"p",1),n._uU(7,"Lorem ipsum"),n.qZA(),n.TgZ(8,"h2",0),n._uU(9," What's included "),n.qZA(),n.TgZ(10,"p",2),n._uU(11,"Lorem ipsum"),n.qZA()(),n.TgZ(12,"nx-expansion-panel",3)(13,"nx-expansion-panel-header")(14,"nx-expansion-panel-title"),n._uU(15,"Insurance details (disabled)"),n.qZA()(),n.TgZ(16,"h2",0),n._uU(17,"General"),n.qZA(),n.TgZ(18,"p",1),n._uU(19,"Lorem ipsum"),n.qZA(),n.TgZ(20,"h2",0),n._uU(21," What's included "),n.qZA(),n.TgZ(22,"p",2),n._uU(23,"Lorem ipsum"),n.qZA()()),2&e&&(n.xp6(12),n.Q6J("disabled",!0))},dependencies:[o.Gs,o.SZ,o.Km,q.s,r.v]});class _{static components(){return{accordion:s,"accordion-error":l,"accordion-extra-light":m,"accordion-extra-light-negative":c,"accordion-lazy":u,"accordion-light":x,"accordion-light-negative":d,"accordion-multi":g,"accordion-negative":Z,"accordion-standalone":f}}}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[o.yM,h.ZI,A.cf,T.Ee,U.f]})},9508:(C,E,i)=>{i.d(E,{f:()=>r});var o=i(6895),A=i(4006),h=i(690),T=i(1486),U=i(9561),n=i(4188),q=i(4650);class r{}r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=q.oAB({type:r}),r.\u0275inj=q.cJS({imports:[o.ez,A.u5,A.UX,h.ru,n.X,T.K,U.TW]})}}]);