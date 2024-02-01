import{a as Fe,b as Z,c as C,d as ee,e as Me,f as v,g as L,h as De}from"./chunk-W4V3LEYT.js";import"./chunk-HPQ4J3OL.js";import{a as Ne}from"./chunk-MAKL5ZTG.js";import"./chunk-HUY7YDCX.js";import{a as Ce,b as q,f as Y,i as ge,j as c,k as ye}from"./chunk-JJGKAP26.js";import"./chunk-4TTPH4Z5.js";import"./chunk-NTZM3PIK.js";import{b as K,c as we}from"./chunk-43WIV4BX.js";import{d as Q,f as S,g as $,i as ae,j as se,k as V,l as j,n as ce,o as J,r as H,v as ue,x as X}from"./chunk-GP7FEQRA.js";import{a as he}from"./chunk-U7EIQOJW.js";import{a as u,b as f,c as x}from"./chunk-EGRHPY7Q.js";import"./chunk-6ICUETWH.js";import"./chunk-AZNKYEEF.js";import"./chunk-ATMVZSAN.js";import{g as U}from"./chunk-5RFPKINN.js";import{p as fe}from"./chunk-PNCA27QO.js";import"./chunk-K3MRPJ7U.js";import"./chunk-5CERBW6K.js";import{c as xe,e as ve}from"./chunk-DZCYYYDW.js";import"./chunk-LK5X6SR6.js";import"./chunk-7ONGEGSB.js";import"./chunk-2BGO346T.js";import{n as _,x as k}from"./chunk-UUZACKYZ.js";import{Aa as I,Ac as pe,Eb as l,Kb as h,Lb as t,Mb as n,Nb as p,Rb as W,Yb as y,_b as ie,ec as B,fc as a,gc as re,hc as E,ic as le,jc as G,ma as te,sc as R,tb as m,tc as A,ua as s,va as ne,xc as me,yc as de,za as P}from"./chunk-QYP2T7PT.js";function ze(o,e){if(o&1&&(t(0,"span"),a(1),n()),o&2){let w=ie();m(1),re(w.customLabelDropdownValue==null?null:w.customLabelDropdownValue.prefix)}}function Qe(o,e){if(o&1&&(t(0,"nx-dropdown-item",7),a(1),n()),o&2){let w=e.$implicit;l("value",w),m(1),le(" ",w.prefix," (",w.countryId,") ")}}var be=(()=>{let e=class e{constructor(){this.telPrefixDemoData=[{prefix:"+1",countryId:"United States of America"},{prefix:"+49",countryId:"Germany"},{prefix:"+41",countryId:"Switzerland"}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-custom-label-example"]],decls:7,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["label","Country Code"],[3,"ngModel","ngModelChange"],["nxClosedLabel",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),y("ngModelChange",function(F){return r.customLabelDropdownValue=F}),h(5,ze,2,1,"ng-template",5)(6,Qe,2,3,"nx-dropdown-item",6),n()()()()()),i&2&&(m(4),l("ngModel",r.customLabelDropdownValue),m(2),l("ngForOf",r.telPrefixDemoData))},dependencies:[v,C,Fe,c,_,S,V,u,x,f]});let o=e;return o})();var Ee=(()=>{let e=class e{constructor(){this.options=[{name:"BMW",id:1},{name:"Audi",id:2},{name:"Volvo",id:3},{name:"Mini",id:4}]}isOptionDisabled(d){return d.id%2===0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-disabled-items-example"]],decls:27,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["label","Disabled dropdown"],["disabled","true"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["label","With disabled item"],["disabled","true","value","BMW"],["label","With disabled multi item"],["selectValue","id","selectLabel","name",3,"options","selectDisabled"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4)(5,"nx-dropdown-item",5),a(6,"B"),n(),t(7,"nx-dropdown-item",6),a(8,"A"),n(),t(9,"nx-dropdown-item",7),a(10,"V"),n(),t(11,"nx-dropdown-item",8),a(12,"M"),n()()()(),t(13,"div",2)(14,"nx-formfield",9)(15,"nx-dropdown")(16,"nx-dropdown-item",10),a(17,"B"),n(),t(18,"nx-dropdown-item",6),a(19,"A"),n(),t(20,"nx-dropdown-item",7),a(21,"V"),n(),t(22,"nx-dropdown-item",8),a(23,"M"),n()()()(),t(24,"div",2)(25,"nx-formfield",11),p(26,"nx-multi-select",12),n()()()()),i&2&&(m(26),l("options",r.options)("selectDisabled",r.isOptionDisabled))},dependencies:[v,C,L,c,u,x,f]});let o=e;return o})();function Je(o,e){if(o&1&&p(0,"nx-dropdown-item",7),o&2){let w=e.$implicit;l("value",w)}}var _e=(()=>{let e=class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-filter-example"]],decls:9,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],["filterPlaceholder","Type to search car",3,"showFilter"],[3,"value",4,"ngFor","ngForOf"],["filter","","filterPlaceholder","Type to search car",3,"options"],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),h(5,Je,1,1,"nx-dropdown-item",5),n()()(),t(6,"div",2)(7,"nx-formfield",3),p(8,"nx-multi-select",6),n()()()()),i&2&&(m(4),l("showFilter",!0),m(1),l("ngForOf",r.options),m(3),l("options",r.options))},dependencies:[v,C,L,c,_,u,x,f]});let o=e;return o})();function He(o,e){if(o&1&&p(0,"nx-dropdown-item",6),o&2){let w=e.$implicit;l("value",w)}}var Se=(()=>{let e=class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}myFilter(d,i){return i.match(new RegExp("^"+d,"g"))!==null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-filter-custom-example"]],decls:6,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],["filterPlaceholder","Type to search car",3,"showFilter","filterFn"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),h(5,He,1,1,"nx-dropdown-item",5),n()()()()()),i&2&&(m(4),l("showFilter",!0)("filterFn",r.myFilter),m(1),l("ngForOf",r.demoData))},dependencies:[v,C,c,_,u,x,f]});let o=e;return o})();var Le=(()=>{let e=class e{constructor(){this.form=new X().group({dropdown:["BMW"]}),this.focusing=!1}onFocusOut(){this.focusing=!1}onFocus(){this.focusing=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-focus-out-example"]],decls:14,vars:2,consts:[[3,"formGroup"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],["formControlName","dropdown",3,"focusOut","focus"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["context","info","nxFormfieldNote",""]],template:function(i,r){i&1&&(t(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"nx-formfield",4)(5,"nx-dropdown",5),y("focusOut",function(){return r.onFocusOut()})("focus",function(){return r.onFocus()}),t(6,"nx-dropdown-item"),a(7,"CLEAR VALUE"),n(),p(8,"nx-dropdown-item",6)(9,"nx-dropdown-item",7)(10,"nx-dropdown-item",8)(11,"nx-dropdown-item",9),n(),t(12,"nx-message",10),a(13),n()()()()()()),i&2&&(l("formGroup",r.form),m(13),E(" Focusing: ",r.focusing," "))},dependencies:[v,C,c,Y,j,S,$,J,H,u,x,f]});let o=e;return o})();var Oe=(()=>{let e=class e{constructor(){this.testBind="Catfish"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-group-example"]],decls:13,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Animals"],[3,"value","valueChange"],["label","Birds"],["disabled","true","value","Parrot"],["value","Pidgin"],["value","Swallow"],["label","Fish"],["value","Salmon"],["value","Mackerel"],["value","Catfish"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),y("valueChange",function(F){return r.testBind=F}),t(5,"nx-dropdown-group",5),p(6,"nx-dropdown-item",6)(7,"nx-dropdown-item",7)(8,"nx-dropdown-item",8),n(),t(9,"nx-dropdown-group",9),p(10,"nx-dropdown-item",10)(11,"nx-dropdown-item",11)(12,"nx-dropdown-item",12),n()()()()()()),i&2&&(m(4),l("value",r.testBind))},dependencies:[v,C,Z,c,u,x,f]});let o=e;return o})();var Te=(()=>{let e=class e{constructor(){this.items=[];for(let d=1;d<=500;d++)this.items.push({label:`Item ${d}`,value:d})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-lazy-example"]],decls:5,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["label","Lazy options"],[3,"options"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3),p(4,"nx-dropdown",4),n()()()()),i&2&&(m(4),l("options",r.items))},dependencies:[v,c,u,x,f]});let o=e;return o})();var Be=(()=>{let e=class e{constructor(){this.options=["Apple","Orange","Plum","Cherry"],this.complexOptions=[{name:"Apple",id:1},{name:"Orange",id:2},{name:"Plum",id:3},{name:"Cherry",id:4}]}selectLabel(d){return d.name}selectValue(d){return d.id}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-multi-select-example"]],decls:15,vars:6,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["label","Fruits"],[3,"options"],["selectLabel","name","selectValue","id",3,"options"],["placeholder","Choose options","selectLabel","name","selectValue","id",3,"options"],["label","Readonly"],["placeholder","Choose options","readonly","",3,"options","selectLabel","selectValue"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3),p(4,"nx-multi-select",4),n()(),t(5,"div",2)(6,"nx-formfield",3),p(7,"nx-multi-select",5),n()()(),t(8,"div",1)(9,"div",2)(10,"nx-formfield",3),p(11,"nx-multi-select",6),n()(),t(12,"div",2)(13,"nx-formfield",7),p(14,"nx-multi-select",8),n()()()()),i&2&&(m(4),l("options",r.options),m(3),l("options",r.complexOptions),m(4),l("options",r.complexOptions),m(3),l("options",r.complexOptions)("selectLabel",r.selectLabel)("selectValue",r.selectValue))},dependencies:[L,c,u,x,f]});let o=e;return o})();var Ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-negative-example"]],decls:17,vars:1,consts:[[1,"docs-inverse-container"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand","negative","negative"],["variant","negative"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["variant","negative",3,"disabled"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"nx-formfield",4)(5,"nx-dropdown",5),p(6,"nx-dropdown-item",6)(7,"nx-dropdown-item",7)(8,"nx-dropdown-item",8)(9,"nx-dropdown-item",9),n()()(),t(10,"div",3)(11,"nx-formfield",4)(12,"nx-dropdown",10),p(13,"nx-dropdown-item",6)(14,"nx-dropdown-item",7)(15,"nx-dropdown-item",8)(16,"nx-dropdown-item",9),n()()()()()()),i&2&&(m(12),l("disabled",!0))},dependencies:[v,C,c,u,x,f]});let o=e;return o})();var Xe=["exampleErrorNgModel"];function Ye(o,e){if(o&1&&p(0,"nx-dropdown-item",23),o&2){let w=e.$implicit;l("value",w)}}function Ze(o,e){if(o&1&&p(0,"nx-dropdown-item",23),o&2){let w=e.$implicit;l("value",w)}}function eo(o,e){if(o&1&&p(0,"nx-dropdown-item",23),o&2){let w=e.$implicit;l("value",w)}}function oo(o,e){if(o&1&&p(0,"nx-dropdown-item",23),o&2){let w=e.$implicit;l("value",w)}}function to(o,e){if(o&1&&p(0,"nx-dropdown-item",23),o&2){let w=e.$implicit;l("value",w)}}function no(o,e){if(o&1&&(t(0,"nx-dropdown-group",24),h(1,to,1,1,"nx-dropdown-item",5),n()),o&2){let w=e.$implicit;l("label",w.label),m(1),l("ngForOf",w.items)}}var Ae=(()=>{let e=class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.groups=[{label:"Birds",items:["Parrot","Pidgin","Swallow"]},{label:"Fish",items:["Salmon","Mackerel","Catfish"]}],this.model="Catfish",this.brands=[]}ngAfterContentInit(){this.exampleErrorNgModel.ngControl?.control?.markAsTouched()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-outline-example"]],viewQuery:function(i,r){if(i&1&&de(Xe,7),i&2){let g;me(g=pe())&&(r.exampleErrorNgModel=g.first)}},features:[G([{provide:ge,useValue:{appearance:"outline",nxFloatLabel:"always"}}])],decls:44,vars:10,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12"],["nxHeadline","subsection-xsmall"],["label","Car brand"],[3,"value",4,"ngFor","ngForOf"],["label","Readonly Dropdown"],["value","BMW","readonly",""],["value","BMW"],["value","Audi"],["label","Disabled Dropdown"],["value","BMW","disabled",""],["label","Error dropdown"],["required","",3,"ngModel","ngModelChange"],["exampleErrorNgModel",""],["nxFormfieldError","","appearance","text"],["label","With icon dropdown"],["nxFormfieldAppendix","","name","info-circle-o"],["filterPlaceholder","Type to search car",3,"showFilter"],["label","Animals"],[3,"value","valueChange"],[3,"label",4,"ngFor","ngForOf"],["filter","",3,"ngModel","options","ngModelChange"],[3,"value"],[3,"label"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),a(4,"Standard dropdown"),n(),t(5,"nx-formfield",4)(6,"nx-dropdown"),h(7,Ye,1,1,"nx-dropdown-item",5),n()(),t(8,"nx-formfield",6)(9,"nx-dropdown",7),p(10,"nx-dropdown-item",8)(11,"nx-dropdown-item",9),n()(),t(12,"nx-formfield",10)(13,"nx-dropdown",11),p(14,"nx-dropdown-item",8)(15,"nx-dropdown-item",9),n()(),t(16,"nx-formfield",12)(17,"nx-dropdown",13,14),y("ngModelChange",function(F){return r.modelBlank=F}),h(19,Ze,1,1,"nx-dropdown-item",5),n(),t(20,"nx-error",15),a(21," Error message "),n()(),t(22,"nx-formfield",16)(23,"nx-dropdown"),h(24,eo,1,1,"nx-dropdown-item",5),n(),p(25,"nx-icon",17),n()()(),t(26,"div",1)(27,"div",2)(28,"h4",3),a(29,"Filter dropdown"),n(),t(30,"nx-formfield",4)(31,"nx-dropdown",18),h(32,oo,1,1,"nx-dropdown-item",5),n()()(),t(33,"div",2)(34,"h4",3),a(35,"Group dropdown"),n(),t(36,"nx-formfield",19)(37,"nx-dropdown",20),y("valueChange",function(F){return r.model=F}),h(38,no,2,2,"nx-dropdown-group",21),n()()(),t(39,"div",2)(40,"h4",3),a(41,"Multi select dropdown"),n(),t(42,"nx-formfield",4)(43,"nx-multi-select",22),y("ngModelChange",function(F){return r.brands=F}),n()()()()()),i&2&&(m(7),l("ngForOf",r.options),m(10),l("ngModel",r.modelBlank),m(2),l("ngForOf",r.options),m(5),l("ngForOf",r.options),m(7),l("showFilter",!0),m(1),l("ngForOf",r.options),m(5),l("value",r.model),m(1),l("ngForOf",r.groups),m(5),l("ngModel",r.brands)("options",r.options))},dependencies:[v,C,Z,L,c,q,Ce,K,_,S,ue,V,he,u,x,f,xe],styles:["[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:12px}"]});let o=e;return o})();function io(o,e){if(o&1&&p(0,"nx-dropdown-item",7),o&2){let w=e.$implicit;l("value",w)}}function ro(o,e){if(o&1&&p(0,"nx-dropdown-item",7),o&2){let w=e.$implicit;l("value",w)}}var Pe=(()=>{let e=class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-placeholder-example"]],decls:10,vars:2,consts:[["nxLayout","grid"],["nxRow","",2,"align-items","flex-end"],["nxCol","12, 12, 6"],["label","Car brand"],["placeholder","Choose a car brand"],[3,"value",4,"ngFor","ngForOf"],["label","Car brand","appearance","outline"],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),h(5,io,1,1,"nx-dropdown-item",5),n()()(),t(6,"div",2)(7,"nx-formfield",6)(8,"nx-dropdown",4),h(9,ro,1,1,"nx-dropdown-item",5),n()()()()()),i&2&&(m(5),l("ngForOf",r.demoData),m(4),l("ngForOf",r.demoData))},dependencies:[v,C,c,_,u,x,f]});let o=e;return o})();var We=(()=>{let e=class e{constructor(){this.form=new X().group({dropdown:["BMW",Q.required]})}patch(d){this.form.patchValue({dropdown:d})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-reactive-example"]],decls:31,vars:7,consts:[[3,"formGroup"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],["formControlName","dropdown"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["nxFormfieldError",""],["context","info","nxFormfieldNote",""],["nxCol","12"],[1,"nx-margin-y-0"],[1,"nx-margin-top-0"],[1,"update-container"],["type","text"],["reactiveInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(i,r){if(i&1){let g=W();t(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"nx-formfield",4)(5,"nx-dropdown",5)(6,"nx-dropdown-item"),a(7,"CLEAR VALUE"),n(),p(8,"nx-dropdown-item",6)(9,"nx-dropdown-item",7)(10,"nx-dropdown-item",8)(11,"nx-dropdown-item",9),n(),t(12,"nx-error",10),a(13," Please select a value "),n(),t(14,"nx-message",11),a(15," This field is required "),n()()()(),t(16,"div",2)(17,"div",12)(18,"p",13),a(19),R(20,"json"),n(),t(21,"p",13),a(22),R(23,"json"),n(),t(24,"p",14),a(25," Try to set the value to BMW, Audi, Volvo or Mini. "),n(),t(26,"div",15),p(27,"input",16,17),t(29,"button",18),y("click",function(){P(g);let O=B(28);return I(r.patch(O.value))}),a(30," Update "),n()()()()()()}i&2&&(l("formGroup",r.form),m(19),E("Form value: ",A(20,3,r.form.value),""),m(3),E(" Form status: ",A(23,5,r.form.status)," "))},dependencies:[v,C,c,q,Y,K,j,S,$,J,H,U,u,x,f,k],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]});let o=e;return o})();function lo(o,e){if(o&1&&p(0,"nx-dropdown-item",10),o&2){let w=e.$implicit;l("value",w)}}var Ge=(()=>{let e=class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}toText(d){return d?d.toUpperCase():null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-rendering-items-example"]],decls:24,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["label","Car brand"],[3,"valueFormatter"],[3,"value",4,"ngFor","ngForOf"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),h(5,lo,1,1,"nx-dropdown-item",5),n()()(),t(6,"div",2)(7,"nx-formfield",3)(8,"nx-dropdown")(9,"nx-dropdown-item",6),a(10,"B"),n(),t(11,"nx-dropdown-item",7),a(12,"A"),n(),t(13,"nx-dropdown-item",8),a(14,"V"),n(),t(15,"nx-dropdown-item",9),a(16,"M"),n()()()(),t(17,"div",2)(18,"nx-formfield",3)(19,"nx-dropdown"),p(20,"nx-dropdown-item",6)(21,"nx-dropdown-item",7)(22,"nx-dropdown-item",8)(23,"nx-dropdown-item",9),n()()()()()),i&2&&(m(4),l("valueFormatter",r.toText),m(1),l("ngForOf",r.demoData))},dependencies:[v,C,c,_,u,x,f]});let o=e;return o})();function mo(o){return()=>o.scrollStrategies.close({threshold:100})}var ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-scroll-strategy-provider-example"]],features:[G([{provide:Me,useFactory:mo,deps:[fe]}])],decls:8,vars:0,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["label","Fruit"],["value","Apple"],["value","Orange"],["value","Pear"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown"),p(5,"nx-dropdown-item",4)(6,"nx-dropdown-item",5)(7,"nx-dropdown-item",6),n()()()()())},dependencies:[v,C,c,u,x,f]});let o=e;return o})();var $e=(()=>{let e=class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.simpleBinding="Audi"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-simple-binding-example"]],decls:21,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],[3,"value","valueChange"],["simpleDropdown",""],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["nxCol","12"],[1,"nx-margin-y-0"],[1,"nx-margin-top-0"],[1,"update-container"],["type","text"],["simpleInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(i,r){if(i&1){let g=W();t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4,5),y("valueChange",function(O){return r.simpleBinding=O}),p(6,"nx-dropdown-item",6)(7,"nx-dropdown-item",7)(8,"nx-dropdown-item",8)(9,"nx-dropdown-item",9),n()()()(),t(10,"div",1)(11,"div",10)(12,"p",11),a(13),n(),t(14,"p",12),a(15," Try to set the value to BMW, Audi, Volvo or Mini. "),n(),t(16,"div",13),p(17,"input",14,15),t(19,"button",16),y("click",function(){P(g);let O=B(18);return I(r.simpleBinding=O.value)}),a(20," Update "),n()()()()()}if(i&2){let g=B(5);m(4),l("value",r.simpleBinding),m(9),E(" Model value is: ",g.value," ")}},dependencies:[v,C,c,U,u,x,f],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]});let o=e;return o})();function po(o,e){if(o&1&&p(0,"nx-dropdown-item",16),o&2){let w=e.$implicit;l("value",w)}}var je=(()=>{let e=class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}toText(d){return d?d.toUpperCase():null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-standard-example"]],decls:24,vars:2,consts:[["nxLayout","grid"],["nxRow","",1,"nx-margin-bottom-m"],["nxCol","12, 12, 6"],["label","Car brand"],[3,"valueFormatter"],[3,"value",4,"ngFor","ngForOf"],["label","Preselected Dropdown"],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],["nxRow",""],["label","Readonly Dropdown"],["value","BMW","readonly",""],["label","Disabled Dropdown"],["value","BMW","disabled",""],[3,"value"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),h(5,po,1,1,"nx-dropdown-item",5),n()()(),t(6,"div",2)(7,"nx-formfield",6)(8,"nx-dropdown",7),p(9,"nx-dropdown-item",7)(10,"nx-dropdown-item",8)(11,"nx-dropdown-item",9)(12,"nx-dropdown-item",10),n()()()(),t(13,"div",11)(14,"div",2)(15,"nx-formfield",12)(16,"nx-dropdown",13),p(17,"nx-dropdown-item",7)(18,"nx-dropdown-item",8),n()()(),t(19,"div",2)(20,"nx-formfield",14)(21,"nx-dropdown",15),p(22,"nx-dropdown-item",7)(23,"nx-dropdown-item",8),n()()()()()),i&2&&(m(4),l("valueFormatter",r.toText),m(1),l("ngForOf",r.options))},dependencies:[v,C,c,_,u,x,f]});let o=e;return o})();var Ue=(()=>{let e=class e{constructor(){this.ngModelBinding="Mini"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["dropdown-template-driven-example"]],decls:25,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["label","Car brand"],["name","test",3,"ngModel","ngModelChange"],["ngModelDropdown",""],["value","BMW"],["value","Audi"],["value","Volvo"],["value","Mini"],[1,"nx-margin-y-0"],["nxCol","12"],[1,"nx-margin-top-0","nx-margin-bottom-xs"],[1,"update-container"],["type","text"],["templateInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(i,r){if(i&1){let g=W();t(0,"div",0)(1,"div",1)(2,"div",2)(3,"form")(4,"nx-formfield",3)(5,"nx-dropdown",4,5),y("ngModelChange",function(O){return r.ngModelBinding=O}),p(7,"nx-dropdown-item",6)(8,"nx-dropdown-item",7)(9,"nx-dropdown-item",8)(10,"nx-dropdown-item",9),n()()(),t(11,"p",10),a(12),n(),t(13,"p",10),a(14),R(15,"json"),n()()(),t(16,"div",1)(17,"div",11)(18,"p",12),a(19," Try to set the value to BMW, Audi, Volvo or Mini. "),n(),t(20,"div",13),p(21,"input",14,15),t(23,"button",16),y("click",function(){P(g);let O=B(22);return I(r.ngModelBinding=O.value)}),a(24," Update "),n()()()()()}if(i&2){let g=B(6);m(5),l("ngModel",r.ngModelBinding),m(7),E(" Current Value: ",g.value," "),m(2),E("Model: ",A(15,3,r.ngModelBinding),"")}},dependencies:[v,C,c,j,S,$,V,ae,U,u,x,f,k],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]});let o=e;return o})();function ao(){return[{label:"Apple",id:1},{label:"Banana",id:2},{label:"Strawberry",id:3},{label:"Orange",id:4},{label:"Lemon",id:5},{label:"Grapefruit",id:6},{label:"Mango",id:7},{label:"Pineapple",id:8},{label:"Kiwi",id:9},{label:"Cherry",id:10},{label:"Blueberry",id:11},{label:"Avocado",id:12},{label:"Watermelon",id:13},{label:"Raspberry",id:14},{label:"Papaya",id:15}]}var Ke=(()=>{let e=class e{constructor(){this.model=[3],this.modelWithFilter=[],this.options=ao(),this.control=new se([],{validators:Q.minLength(3)})}selectLabel(d){return d.label}selectValue(d){return d.id}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["multi-select-example"]],decls:31,vars:17,consts:[["appearance","outline","floatLabel","always","label","Multi select"],["filter","","placeholder","Choose options","selectValue","id","selectLabel","label",3,"ngModel","options","ngModelChange"],["placeholder","Choose options",3,"ngModel","options","selectLabel","selectValue","ngModelChange"],["floatLabel","always","label","Multi select with validation"],["placeholder","Choose options",3,"formControl","options","selectLabel","selectValue"],["nxFormfieldError",""],["filter","","placeholder","Choose options","selectValue","i'","selectLabel","label","readonly","",3,"options"]],template:function(i,r){i&1&&(t(0,"h3"),a(1,"With filter"),n(),t(2,"nx-formfield",0)(3,"nx-multi-select",1),y("ngModelChange",function(F){return r.modelWithFilter=F}),n()(),t(4,"div"),a(5," Selected options: "),t(6,"pre"),a(7),n()(),t(8,"h3"),a(9,"Without filter"),n(),t(10,"nx-formfield",0)(11,"nx-multi-select",2),y("ngModelChange",function(F){return r.model=F}),n()(),t(12,"div"),a(13," Selected options: "),t(14,"pre"),a(15),n()(),t(16,"h3"),a(17,"Reactive forms validation"),n(),t(18,"nx-formfield",3),p(19,"nx-multi-select",4),t(20,"nx-error",5),a(21),R(22,"json"),n()(),t(23,"div"),a(24," Selected options: "),t(25,"pre"),a(26),n()(),t(27,"h3"),a(28,"Readonly"),n(),t(29,"nx-formfield",0),p(30,"nx-multi-select",6),n()),i&2&&(m(3),l("ngModel",r.modelWithFilter)("options",r.options),m(4),E("[",r.modelWithFilter.join(", "),"]"),m(4),l("ngModel",r.model)("options",r.options)("selectLabel",r.selectLabel)("selectValue",r.selectValue),m(4),E("[",r.model.join(", "),"]"),m(4),l("formControl",r.control)("options",r.options)("selectLabel",r.selectLabel)("selectValue",r.selectValue),m(2),E("Error ",A(22,15,r.control.errors),""),m(5),E("[",r.control.value==null?null:r.control.value.join(", "),"]"),m(4),l("options",r.options))},dependencies:[L,c,q,K,S,V,ce,k]});let o=e;return o})();var oe=class extends ee{constructor(){super(...arguments),this.selectAll="Alle ausw\xE4hlen",this.clearAll="Alle abw\xE4hlen"}},qe=(()=>{let e=class e{constructor(){this.options=["Apple","Orange","Plum","Cherry"]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["multi-select-intl-example"]],features:[G([{provide:ee,useClass:oe}])],decls:5,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["appearance","outline","floatLabel","always","label","Fruits"],["filter","",3,"options"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3),p(4,"nx-multi-select",4),n()()()()),i&2&&(m(4),l("options",r.options))},dependencies:[L,c,u,x,f]});let o=e;return o})();var pt=(()=>{let e=class e{static components(){return{"dropdown-custom-label":be,"dropdown-disabled-items":Ee,"dropdown-filter":_e,"dropdown-filter-custom":Se,"dropdown-group":Oe,"dropdown-multi-select":Be,"dropdown-negative":Ve,"dropdown-outline":Ae,"dropdown-placeholder":Pe,"dropdown-reactive":We,"dropdown-rendering-items":Ge,"dropdown-simple-binding":$e,"dropdown-standard":je,"dropdown-template-driven":Ue,"dropdown-lazy":Te,"dropdown-focus-out":Le,"dropdown-scroll-strategy-provider":ke,"multi-select":Ke,"multi-select-intl":qe}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=ne({type:e}),e.\u0275inj=te({imports:[De,ye,Ne,ve,we]});let o=e;return o})();export{pt as DropdownExamplesModule};
