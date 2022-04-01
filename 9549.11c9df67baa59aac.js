"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9549],{9549:(I,d,p)=>{p.r(d),p.d(d,{MessageExamplesModule:()=>l});var _=p(9808),t=p(4204),u=p(9823),h=p(5552),g=p(3102),e=p(5e3);function x(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"nx-message-banner",4),e.NdJ("close",function(){return e.CHM(o),e.oxw().infoBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," You are logged in as Max Mustermann.\n"),e.qZA()}}function v(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"nx-message-banner",6),e.NdJ("close",function(){return e.CHM(o),e.oxw().warningBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Your password expires in three days!\n"),e.qZA()}}function O(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"nx-message-banner",7),e.NdJ("close",function(){return e.CHM(o),e.oxw().errorBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," The object could not be found.\n"),e.qZA()}}let b=(()=>{class n{constructor(){this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}showAllBanners(){this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-banner-example"]],decls:5,vars:4,consts:[["closeButtonLabel","Close info message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","warning","closeButtonLabel","Close warning message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","error","closeButtonLabel","Close error message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["nxButton","","type","button",3,"disabled","click"],["closeButtonLabel","Close info message banner",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"],["context","warning","closeButtonLabel","Close warning message banner",1,"nx-margin-bottom-xs",3,"close"],["context","error","closeButtonLabel","Close error message banner",1,"nx-margin-bottom-xs",3,"close"]],template:function(o,i){1&o&&(e.YNc(0,x,5,0,"nx-message-banner",0),e.YNc(1,v,5,0,"nx-message-banner",1),e.YNc(2,O,5,0,"nx-message-banner",2),e.TgZ(3,"button",3),e.NdJ("click",function(){return i.showAllBanners()}),e._uU(4," Show all message banners\n"),e.qZA()),2&o&&(e.Q6J("ngIf",i.infoBanner),e.xp6(1),e.Q6J("ngIf",i.warningBanner),e.xp6(1),e.Q6J("ngIf",i.errorBanner),e.xp6(1),e.Q6J("disabled",i.infoBanner&&i.warningBanner&&i.errorBanner))},directives:[_.O5,g.h0,u.XV],styles:[""]}),n})();function Z(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"nx-message",3),e.NdJ("close",function(){return e.CHM(o),e.oxw().closed=!0}),e.TgZ(1,"span",4),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA()}}function C(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," A close event was emitted!"),e.qZA())}let M=(()=>{class n{constructor(){this.closed=!1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-closable-example"]],decls:4,vars:2,consts:[["nxContext","info","closable","true","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],[4,"ngIf"],["nxButton","","type","button",3,"click"],["nxContext","info","closable","true",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"]],template:function(o,i){1&o&&(e.YNc(0,Z,5,0,"nx-message",0),e.YNc(1,C,2,0,"p",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.closed=!i.closed}),e._uU(3," Toggle closed"),e.qZA()),2&o&&(e.Q6J("ngIf",!i.closed),e.xp6(1),e.Q6J("ngIf",i.closed))},directives:[_.O5,g.wM,u.XV],styles:[""]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-error-example"]],decls:14,vars:0,consts:[["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-s"],["nxContext","error"],[1,"nx-font-weight-bold"],[1,"nx-margin-bottom-xs"],["appearance","text"]],template:function(o,i){1&o&&(e.TgZ(0,"h5",0),e._uU(1,"Using nx-message:"),e.qZA(),e.TgZ(2,"nx-message",1)(3,"span",2),e._uU(4,"Notification title:"),e.qZA(),e._UZ(5,"br"),e._uU(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h5",0),e._uU(9,"Using nx-error:"),e.qZA(),e.TgZ(10,"nx-error",3),e._uU(11," This is an error message for a customer facing application (B2C).\n"),e.qZA(),e.TgZ(12,"nx-error",4),e._uU(13," This is an error message for an internal application (B2B/B2E).\n"),e.qZA())},directives:[h.s,g.wM,t.vV],styles:[""]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-info-example"]],decls:5,vars:0,consts:[["nxContext","info"],[1,"nx-font-weight-bold"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-message",0)(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[g.wM],styles:[""]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-success-example"]],decls:5,vars:0,consts:[["nxContext","success"],[1,"nx-font-weight-bold"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-message",0)(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[g.wM],styles:[""]}),n})();const y=["template"];function B(n,r){1&n&&(e.TgZ(0,"span",3),e._uU(1,"Notification title:"),e.qZA(),e._UZ(2,"br"),e._uU(3," Yay, you see a success message toast. Great job!\n"))}const U={duration:0,context:"success",announcementMessage:"Yay, you see a success message toast"};let T=(()=>{class n{constructor(o){this.messageToastService=o}open(){this.toastRef=this.messageToastService.openFromTemplate(this.templateRef,U)}close(){this.toastRef&&this.toastRef.dismiss()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(g.VO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-toast-custom-settings-example"]],viewQuery:function(o,i){if(1&o&&e.Gf(y,5),2&o){let m;e.iGM(m=e.CRH())&&(i.templateRef=m.first)}},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["nxButton","",3,"click"],["template",""],[1,"nx-font-weight-bold"]],template:function(o,i){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.open()}),e._uU(1,"open message toast"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return i.close()}),e._uU(3,"close message toast"),e.qZA(),e.YNc(4,B,4,0,"ng-template",null,2,e.W1O))},directives:[u.XV],styles:[""]}),n})();const A=["template"];function N(n,r){1&n&&(e.TgZ(0,"strong"),e._uU(1,"Information"),e.qZA(),e._UZ(2,"br"),e._uU(3," You see an info message toast (from a template). It will disappear in 3000 ms.\n"))}let a=(()=>{class n{constructor(o){this.messageToastService=o,this.toastText="A success message toast with a custom text."}openFromText(){this.messageToastService.open(this.toastText,{context:"success",duration:5e3})}openFromTemplate(){this.messageToastService.openFromTemplate(this.templateRef,{announcementMessage:"You see an info message. It will disappear in 3000 ms."})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(g.VO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-toast-opening-example"]],viewQuery:function(o,i){if(1&o&&e.Gf(A,5),2&o){let m;e.iGM(m=e.CRH())&&(i.templateRef=m.first)}},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-s",3,"click"],["nxButton","",3,"click"],["template",""]],template:function(o,i){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.openFromText()}),e._uU(1,"open from text"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return i.openFromTemplate()}),e._uU(3,"open from template"),e.qZA(),e.YNc(4,N,4,0,"ng-template",null,2,e.W1O))},directives:[u.XV],styles:[""]}),n})(),c=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-warning-example"]],decls:5,vars:0,consts:[["nxContext","warning"],[1,"nx-font-weight-bold"]],template:function(o,i){1&o&&(e.TgZ(0,"nx-message",0)(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[g.wM],styles:[""]}),n})(),l=(()=>{class n{static components(){return{"message-banner":b,"message-closable":M,"message-error":w,"message-info":f,"message-success":E,"message-toast-custom-settings":T,"message-toast-opening":a,"message-warning":c}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Ee,t.$N,u.ru,_.ez,h.X]]}),n})()},4204:(I,d,p)=>{p.d(d,{$N:()=>y,UD:()=>A,WI:()=>N,hZ:()=>f,vV:()=>E});var _=p(3191),t=p(5e3),u=p(8929),h=p(7625),g=p(9209),e=p(3102),x=p(9808);function v(a,c){1&a&&t._UZ(0,"nx-icon",7),2&a&&t.Q6J("name","exclamation-triangle")}function O(a,c){if(1&a&&(t.ynx(0),t.YNc(1,v,1,1,"nx-icon",3),t.TgZ(2,"div",4)(3,"div",5),t.GkF(4,6),t.qZA()(),t.BQk()),2&a){const s=t.oxw(),l=t.MAs(3);t.xp6(1),t.Q6J("ngIf",s.showIcon),t.xp6(3),t.Q6J("ngTemplateOutlet",l)}}function b(a,c){if(1&a&&(t.TgZ(0,"nx-message",8),t.GkF(1,6),t.qZA()),2&a){t.oxw();const s=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function Z(a,c){1&a&&t.Hsn(0)}const C=["*"];let M=0;const f=new t.OlP("ERROR_DEFAULT_OPTIONS");let E=(()=>{class a{constructor(s,l){var n;this._cdr=s,this._defaultOptions=l,this._showIcon=!0,this._id="nx-error-"+M++,this._destroyed=new u.xQ,(null===(n=this._defaultOptions)||void 0===n?void 0:n.changes)&&this._defaultOptions.changes.pipe((0,h.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()})}set showIcon(s){this._showIcon=(0,_.Ig)(s),this._cdr.markForCheck()}get showIcon(){return this._showIcon}set id(s){s&&s!==this._id&&(this._id=s,this._cdr.markForCheck())}get id(){return this._id}set appearance(s){s!==this.appearance&&(this._appearance=s,this._cdr.markForCheck())}get appearance(){var s;return this._appearance||(null===(s=this._defaultOptions)||void 0===s?void 0:s.appearance)||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return a.\u0275fac=function(s){return new(s||a)(t.Y36(t.sBO),t.Y36(f,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["nx-error"]],hostVars:4,hostBindings:function(s,l){2&s&&(t.uIk("role","alert")("id",l.id),t.ekj("nx-error--message","message"==l.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:C,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(s,l){1&s&&(t.F$t(),t.YNc(0,O,5,2,"ng-container",0),t.YNc(1,b,2,1,"nx-message",1),t.YNc(2,Z,1,0,"ng-template",null,2,t.W1O)),2&s&&(t.Q6J("ngIf","text"===l.appearance),t.xp6(1),t.Q6J("ngIf","message"===l.appearance))},directives:[g.O8,e.wM,x.O5,x.tP],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}"],changeDetection:0}),a})(),y=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[x.ez,g.cf,e.Ee]]}),a})(),B=0;const T=new t.OlP("LABEL_DEFAULT_OPTIONS");let A=(()=>{class a{constructor(s,l){this._defaultOptions=s,this._cdr=l,this._stateChanges=new u.xQ,this._disabled=!1,this._negative=!1,this._for=null,this._id="nx-label-"+B++}set disabled(s){this._disabled=(0,_.Ig)(s),this._stateChanges.next()}get disabled(){return this._disabled}set negative(s){this._negative=(0,_.Ig)(s),this._stateChanges.next()}get negative(){return this._negative}set id(s){this._id=s}get id(){return this._id}set size(s){this._size=s,this._stateChanges.next()}get size(){var s;return this._size||(null===(s=this._defaultOptions)||void 0===s?void 0:s.size)||"large"}set for(s){this._for=s,this._cdr.markForCheck(),this._stateChanges.next()}get for(){return this._for}}return a.\u0275fac=function(s){return new(s||a)(t.Y36(T,8),t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["nx-label"]],hostVars:7,hostBindings:function(s,l){2&s&&(t.uIk("disabled",l.disabled),t.ekj("nx-label--negative",l.negative)("nx-label--large","large"===l.size)("nx-label--small","small"===l.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size",for:"for"},ngContentSelectors:C,decls:2,vars:2,consts:[[1,"nx-label__content",3,"for","id"]],template:function(s,l){1&s&&(t.F$t(),t.TgZ(0,"label",0),t.Hsn(1),t.qZA()),2&s&&t.Q6J("for",l.for)("id",l.id)},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),a})(),N=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[x.ez]]}),a})()}}]);