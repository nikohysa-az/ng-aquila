import{a as V,b as _,c as ae,d as x,e as me}from"./chunk-6AKNR4CO.js";import{b as te}from"./chunk-7ZEOFDXZ.js";import"./chunk-OA3M5SBI.js";import{c as oe,f as re,g as ne}from"./chunk-FVU6LJ4B.js";import"./chunk-BV3YPCCO.js";import{a as ie}from"./chunk-MAKL5ZTG.js";import{a as p}from"./chunk-NTZM3PIK.js";import{b as E}from"./chunk-6G5NCPWS.js";import{d as N,f,g as C,j as P,l as b,o as h,q as Q,r as g,w as U,x as v}from"./chunk-GP7FEQRA.js";import{a as w}from"./chunk-U7EIQOJW.js";import{a as I,b as j,c as q}from"./chunk-EGRHPY7Q.js";import"./chunk-S7LJ5NW7.js";import"./chunk-AZNKYEEF.js";import"./chunk-ATMVZSAN.js";import{g as O,i as Y}from"./chunk-5RFPKINN.js";import"./chunk-PNCA27QO.js";import"./chunk-K3MRPJ7U.js";import{k as W}from"./chunk-5CERBW6K.js";import{c as Z,e as ee}from"./chunk-AGQ4ALMF.js";import"./chunk-LK5X6SR6.js";import"./chunk-7ONGEGSB.js";import"./chunk-2BGO346T.js";import{n as R,x as T}from"./chunk-UUZACKYZ.js";import{Eb as s,Kb as B,Lb as t,Mb as i,Nb as c,Yb as H,ec as X,fc as o,gc as K,hc as F,ma as $,sc as D,tb as d,tc as M,ua as l,ub as u,va as z}from"./chunk-QYP2T7PT.js";var de=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["card-example"]],decls:8,vars:0,consts:[["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxCopytext","normal"]],template:function(n,m){n&1&&(t(0,"nx-card")(1,"nx-card-header")(2,"h3",0),o(3," Card headline "),i()(),t(4,"p",1),o(5,"2,99\u20AC"),i(),t(6,"p",2),o(7," Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate explicabo ad iste, ratione cupiditate eaque sapiente odit, accusamus placeat ipsam dolor sint voluptatibus nam? Recusandae accusamus iste sapiente necessitatibus? "),i()())},dependencies:[V,_,w,p]});let r=e;return r})();var se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["highlight-card-example"]],decls:10,vars:0,consts:[["highlight",""],["nxHighlightHeader",""],["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxCopytext","normal"]],template:function(n,m){n&1&&(t(0,"nx-card",0)(1,"div",1),o(2,"Highlight"),i(),t(3,"nx-card-header")(4,"h3",2),o(5," Card headline "),i()(),t(6,"p",3),o(7,"2,99\u20AC"),i(),t(8,"p",4),o(9," Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate explicabo ad iste, ratione cupiditate eaque sapiente odit, accusamus placeat ipsam dolor sint voluptatibus nam? Recusandae accusamus iste sapiente necessitatibus? "),i()())},dependencies:[V,_,w,p]});let r=e;return r})();var ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["highlight-selectable-card-example"]],decls:5,vars:0,consts:[["highlight","",1,"nx-margin-bottom-2m"],["nxHighlightHeader",""],["nxCopytext","",1,"content"]],template:function(n,m){n&1&&(t(0,"nx-selectable-card",0)(1,"div",1),o(2,"Highlight"),i(),t(3,"h3",2),o(4,"Default selectable card"),i()())},dependencies:[x,p],styles:[".content[_ngcontent-%COMP%]{height:124px}"]});let r=e;return r})();var pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["selectable-card-basic-example"]],decls:4,vars:0,consts:[[1,"nx-margin-bottom-2m"],[1,"content"],["checked",""]],template:function(n,m){n&1&&(t(0,"nx-selectable-card",0),c(1,"div",1),i(),t(2,"nx-selectable-card",2),c(3,"div",1),i())},dependencies:[x],styles:[".content[_ngcontent-%COMP%]{height:100px}"]});let r=e;return r})();function Se(r,e){if(r&1&&(t(0,"div",8)(1,"nx-selectable-card",9)(2,"h3",10),o(3," Card headline "),i()()()),r&2){let k=e.index;d(1),s("formControlName",k)}}var fe=(()=>{let e=class e{constructor(a){this.fb=a,this.cardArray=new U([new P(!1),new P(!1),new P(!1)]),this.myFormGroup=this.fb.group({cards:this.cardArray})}addNewCard(){this.cardArray.push(new P(!1))}removeFirstCard(){this.cardArray.removeAt(0)}get cards(){return this.myFormGroup.get("cards")}};e.\u0275fac=function(n){return new(n||e)(u(v))},e.\u0275cmp=l({type:e,selectors:[["selectable-card-dynamic-example"]],decls:14,vars:5,consts:[["nxLayout","grid"],["nxRow","",1,"nx-margin-bottom-s"],["nxCol","12,12,3"],["nxButton","primary small","type","button",3,"click"],["nxButton","secondary small","type","button",3,"click"],[3,"formGroup"],["nxRow","","formArrayName","cards"],["nxCol","12,12,12,4",4,"ngFor","ngForOf"],["nxCol","12,12,12,4"],[1,"nx-margin-bottom-xs",3,"formControlName"],["nxCopytext","",1,"nx-margin-bottom-2m"]],template:function(n,m){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),H("click",function(){return m.addNewCard()}),o(4," Add new card "),i()(),t(5,"div",2)(6,"button",4),H("click",function(){return m.removeFirstCard()}),o(7," Remove first card "),i()()(),t(8,"form",5)(9,"div",6),B(10,Se,4,1,"div",7),i(),t(11,"p"),o(12),D(13,"json"),i()()()),n&2&&(d(8),s("formGroup",m.myFormGroup),d(2),s("ngForOf",m.cards.controls),d(2),F("Form value: ",M(13,3,m.myFormGroup.value),""))},dependencies:[x,R,b,f,C,h,g,Q,O,p,I,q,j,T]});let r=e;return r})();var Ce=(()=>{let e=class e{constructor(a){this.fb=a,this.formGroup=this.fb.group({card:[!1,N.requiredTrue]}),this.formGroup.markAllAsTouched()}};e.\u0275fac=function(n){return new(n||e)(u(v))},e.\u0275cmp=l({type:e,selectors:[["selectable-card-expert-example"]],decls:41,vars:1,consts:[["appearance","expert",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-small"],["nxCopytext",""],["appearance","expert","highlight","",1,"nx-margin-bottom-2m"],["nxHighlightHeader",""],["checked","","appearance","expert",1,"nx-margin-bottom-2m"],["appearance","expert","disabled","",1,"nx-margin-bottom-2m"],["checked","","appearance","expert","disabled","",1,"nx-margin-bottom-2m"],[3,"formGroup"],["formControlName","card","appearance","expert"],["appearance","text"]],template:function(n,m){n&1&&(t(0,"nx-selectable-card",0)(1,"h3",1),o(2,"Card headline"),i(),c(3,"hr"),t(4,"p",2),o(5,"Default selectable card"),i()(),t(6,"nx-selectable-card",3)(7,"div",4),o(8,"Highlight"),i(),t(9,"h3",1),o(10,"Card headline"),i(),c(11,"hr"),t(12,"p",2),o(13,"Highlight selectable card"),i()(),t(14,"nx-selectable-card",5)(15,"h3",1),o(16,"Card headline"),i(),c(17,"hr"),t(18,"p",2),o(19,"Checked selectable card"),i()(),t(20,"nx-selectable-card",6)(21,"h3",1),o(22,"Card headline"),i(),c(23,"hr"),t(24,"p",2),o(25,"Disabled selectable card"),i()(),t(26,"nx-selectable-card",7)(27,"h3",1),o(28,"Card headline"),i(),c(29,"hr"),t(30,"p",2),o(31,"Disabled checked selectable card"),i()(),t(32,"form",8)(33,"nx-selectable-card",9)(34,"h3",1),o(35,"Card headline"),i(),c(36,"hr"),t(37,"p",2),o(38,"Required selectable card"),i(),t(39,"nx-error",10),o(40," This card must be selected. "),i()()()),n&2&&(d(32),s("formGroup",m.formGroup))},dependencies:[x,E,b,f,C,h,g,w,p]});let r=e;return r})();var be=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["selectable-card-product-example"]],decls:19,vars:1,consts:[[1,"card"],["height","56","src","/assets/images/selectable-card.svg","alt","product image"],[1,"content"],["nxCopytext","",1,"nx-font-weight-semibold","nx-margin-bottom-2xs"],["nxCopytext","medium",1,"nx-margin-bottom-2xs"],["nxCopytext",""],["nxPlainButton","","nxPopoverTrigger","click",1,"nx-margin-left-xs",3,"nxPopoverTriggerFor"],["size","s","name","info-circle-o"],["popover",""]],template:function(n,m){if(n&1&&(t(0,"nx-selectable-card")(1,"div",0),c(2,"img",1),t(3,"div",2)(4,"div")(5,"h3",3),o(6," Card headline "),i(),t(7,"p",4),o(8," Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,"),c(9,"br"),o(10," consectetur, adipisci velit "),i(),t(11,"span",5),o(12,"$ 10 /monthly"),i()(),t(13,"button",6),c(14,"nx-icon",7),i()()()(),t(15,"nx-popover",null,8)(17,"span",5),o(18,"Trigger by click"),i()()),n&2){let A=X(16);d(13),s("nxPopoverTriggerFor",A)}},dependencies:[x,Z,re,oe,Y,p],styles:[".card[_ngcontent-%COMP%]{display:flex}img[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:16px}.content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-basis:100%}@media (max-width: 703px){.card[_ngcontent-%COMP%]{display:block}img[_ngcontent-%COMP%]{margin-right:0;margin-bottom:8px}}"]});let r=e;return r})();function Ne(r,e){if(r&1&&(t(0,"div")(1,"nx-selectable-card",4)(2,"h3",5),o(3),i()()()),r&2){let k=e.$implicit;d(1),s("value",k.value)("disabled",k.disabled),d(2),K(k.title)}}var he=(()=>{let e=class e{constructor(a){this.fb=a,this.cards=[{value:"a",disabled:!1,title:"Selectable radio card"},{value:"b",disabled:!1,title:"Selectable radio card"},{value:"c",disabled:!0,title:"Disabled selected radio card"},{value:"d",disabled:!0,title:"Disabled radio card"}],this.formGroup=this.fb.group({radio:["c",N.required]})}addNewCard(){this.cards.push({value:(this.cards.length+1).toString(),disabled:!1,title:"New radio card"})}removeFirstCard(){this.cards.pop()}};e.\u0275fac=function(n){return new(n||e)(u(v))},e.\u0275cmp=l({type:e,selectors:[["selectable-card-radio-example"]],decls:10,vars:5,consts:[[3,"formGroup"],["formControlName","radio","name","radio-group"],[4,"ngFor","ngForOf"],["nxButton","primary small","type","button",1,"nx-margin-top-m",3,"click"],[1,"nx-margin-bottom-xs",3,"value","disabled"],["nxCopytext","",1,"nx-margin-bottom-2m"]],template:function(n,m){n&1&&(t(0,"form",0)(1,"nx-selectable-card-group",1),B(2,Ne,4,3,"div",2),t(3,"nx-error"),o(4," This card must be selected. "),i()()(),t(5,"button",3),H("click",function(){return m.addNewCard()}),o(6,` Add new card
`),i(),t(7,"p"),o(8),D(9,"json"),i()),n&2&&(s("formGroup",m.formGroup),d(2),s("ngForOf",m.cards),d(6),F("Form value: ",M(9,3,m.formGroup.value),""))},dependencies:[x,E,ae,R,b,f,C,h,g,O,p,T],changeDetection:0});let r=e;return r})();var ge=(()=>{let e=class e{constructor(a){this.fb=a,this.testForm=this.fb.group({selectableCardTestReactive:[!1,N.requiredTrue]})}};e.\u0275fac=function(n){return new(n||e)(u(v))},e.\u0275cmp=l({type:e,selectors:[["selectable-card-reactive-example"]],decls:11,vars:7,consts:[[3,"formGroup"],["formControlName","selectableCardTestReactive"],[1,"content"]],template:function(n,m){n&1&&(t(0,"form",0)(1,"nx-selectable-card",1),c(2,"div",2),t(3,"nx-error"),o(4," This card must be selected. "),i()(),t(5,"p"),o(6),D(7,"json"),i(),t(8,"p"),o(9),D(10,"json"),i()()),n&2&&(s("formGroup",m.testForm),d(6),F("Form value: ",M(7,3,m.testForm.value),""),d(3),F("Form status: ",M(10,5,m.testForm.status),""))},dependencies:[x,E,b,f,C,h,g,T],styles:[".content[_ngcontent-%COMP%]{height:100px}"]});let r=e;return r})();var ve=(()=>{let e=class e{constructor(a){this.fb=a,this.formGroup=this.fb.group({errorCard:[!1,N.requiredTrue],errorCard2:[!0,Ee]}),this.formGroup.markAllAsTouched()}};e.\u0275fac=function(n){return new(n||e)(u(v))},e.\u0275cmp=l({type:e,selectors:[["selectable-card-states-example"]],decls:30,vars:1,consts:[["nxLayout","grid",3,"formGroup"],["nxRow",""],["nxCol","12,12,6,6"],[1,"nx-margin-bottom-2m"],["nxCopytext","",1,"content"],["checked","",1,"nx-margin-bottom-2m"],["disabled","",1,"nx-margin-bottom-2m"],["disabled","","checked","",1,"nx-margin-bottom-2m"],["formControlName","errorCard",1,"nx-margin-bottom-2m"],["formControlName","errorCard2"]],template:function(n,m){n&1&&(t(0,"form",0)(1,"div",1)(2,"div",2)(3,"nx-selectable-card",3)(4,"h3",4),o(5,"Default selectable card"),i()()(),t(6,"div",2)(7,"nx-selectable-card",5)(8,"h3",4),o(9,"Checked selectable card"),i()()(),t(10,"div",2)(11,"nx-selectable-card",6)(12,"h3",4),o(13,"Disabled selectable card"),i()()(),t(14,"div",2)(15,"nx-selectable-card",7)(16,"h3",4),o(17," Disabled and checked selectable card "),i()()(),t(18,"div",2)(19,"nx-selectable-card",8)(20,"h3",4),o(21,"Selectable card with error"),i(),t(22,"nx-error"),o(23," This card must be selected. "),i()()(),t(24,"div",2)(25,"nx-selectable-card",9)(26,"h3",4),o(27," This card must not be selected. "),i(),t(28,"nx-error"),o(29," This card must not be selected. "),i()()()()()),n&2&&s("formGroup",m.formGroup)},dependencies:[x,E,b,f,C,h,g,p,I,q,j],styles:[".content[_ngcontent-%COMP%]{height:124px}"]});let r=e;return r})();function Ee(r){return r.value?{invalid:!0}:null}var rt=(()=>{let e=class e{static components(){return{"selectable-card-radio":he,card:de,"highlight-card":se,"selectable-card-basic":pe,"selectable-card-dynamic":fe,"selectable-card-reactive":ge,"selectable-card-states":ve,"highlight-selectable-card":ce,"selectable-card-product":be,"selectable-card-expert":Ce}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=$({imports:[me,ee,te,ne,ie,W]});let r=e;return r})();export{rt as CardExamplesModule};
