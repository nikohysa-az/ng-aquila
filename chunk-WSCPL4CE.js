import{b as v,d as X}from"./chunk-BNG6CEQN.js";import"./chunk-FFH2IEYO.js";import{b as x,d as H,j as C}from"./chunk-C24BGEL7.js";import"./chunk-4TTPH4Z5.js";import{b as s,c as P}from"./chunk-6G5NCPWS.js";import{A as q,b as d,d as l,f as u,g as I,j as T,l as V,n as j,o as G,r as k,y as R}from"./chunk-GP7FEQRA.js";import"./chunk-S7LJ5NW7.js";import"./chunk-AZNKYEEF.js";import{a as U}from"./chunk-ATMVZSAN.js";import{g as A,j as L}from"./chunk-5RFPKINN.js";import"./chunk-PNCA27QO.js";import"./chunk-K3MRPJ7U.js";import"./chunk-5CERBW6K.js";import"./chunk-AGQ4ALMF.js";import"./chunk-LK5X6SR6.js";import"./chunk-7ONGEGSB.js";import"./chunk-2BGO346T.js";import"./chunk-UUZACKYZ.js";import{Aa as g,Eb as c,Lb as i,Mb as n,Nb as f,Rb as S,Yb as M,ec as w,fc as m,jc as B,la as E,ma as F,tb as b,ua as a,ub as D,va as N,za as y}from"./chunk-QYP2T7PT.js";var J=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=a({type:e,selectors:[["error-example"]],decls:4,vars:0,consts:[[1,"nx-margin-bottom-m"],["appearance","text"]],template:function(r,p){r&1&&(i(0,"nx-error",0),m(1,` This is an error message for a customer facing application (B2C).
`),n(),i(2,"nx-error",1),m(3,` This is an error message for an internal application (B2B/B2E).
`),n())},dependencies:[s]});let t=e;return t})();var _=(()=>{let e=class e{isErrorState(o,r){return!!(o?.invalid&&(o.dirty||r?.submitted))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac});let t=e;return t})(),K=(()=>{let e=class e{constructor(){this.emailFormControl=new T("",[l.required,l.email])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=a({type:e,selectors:[["error-custom-matcher-formfield-example"]],features:[B([{provide:U,useClass:_}])],decls:6,vars:1,consts:[["label","Label"],["nxInput","",3,"formControl"],["nxFormfieldHint",""],["nxFormfieldError",""]],template:function(r,p){r&1&&(i(0,"nx-formfield",0),f(1,"input",1),i(2,"span",2),m(3," This field will show an error while typing. "),n(),i(4,"nx-error",3),m(5," Please enter a valid email address. "),n()()),r&2&&(b(1),c("formControl",p.emailFormControl))},dependencies:[s,C,H,x,v,d,u,j]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(o){this.fb=o,this.form=this.fb.group({label:["",l.required]})}};e.\u0275fac=function(r){return new(r||e)(D(R))},e.\u0275cmp=a({type:e,selectors:[["error-reset-example"]],decls:10,vars:1,consts:[[3,"formGroup"],["formGroupDirective",""],["label","Label"],["nxInput","","formControlName","label"],["nxFormfieldError",""],["type","submit","nxButton","primary small"],["type","button","nxButton","secondary small",1,"nx-margin-left-s",3,"click"]],template:function(r,p){if(r&1){let W=S();i(0,"form",0,1)(2,"nx-formfield",2),f(3,"input",3),i(4,"nx-error",4),m(5," This field is required. "),n()(),i(6,"button",5),m(7,"submit"),n(),i(8,"button",6),M("click",function(){y(W);let Y=w(1);return g(Y.reset())}),m(9," Reset "),n()()}r&2&&c("formGroup",p.form)},dependencies:[s,C,x,v,A,V,d,u,I,G,k]});let t=e;return t})();var xe=(()=>{let e=class e{static components(){return{error:J,"error-custom-matcher-formfield":K,"error-reset":Q}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=F({imports:[P,X,L,q]});let t=e;return t})();export{xe as ErrorExamplesModule};
