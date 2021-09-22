!function(){"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function t(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[8055],{58055:function(n,s,i){i.r(s),i.d(s,{MessageExamplesModule:function(){return J}});var o=i(38583),a=i(78459),r=i(51424),c=i(79661),u=i(77549),l=i(37716),g=i(90722),m=i(16209);function f(e,n){if(1&e){var t=l.EpF();l.TgZ(0,"nx-message-banner",4),l.NdJ("close",function(){return l.CHM(t),l.oxw().infoBanner=!1}),l.TgZ(1,"span",5),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," You are logged in as Max Mustermann.\n"),l.qZA()}}function p(e,n){if(1&e){var t=l.EpF();l.TgZ(0,"nx-message-banner",6),l.NdJ("close",function(){return l.CHM(t),l.oxw().warningBanner=!1}),l.TgZ(1,"span",5),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," Your password expires in three days!\n"),l.qZA()}}function h(e,n){if(1&e){var t=l.EpF();l.TgZ(0,"nx-message-banner",7),l.NdJ("close",function(){return l.CHM(t),l.oxw().errorBanner=!1}),l.TgZ(1,"span",5),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," The object could not be found.\n"),l.qZA()}}var d,x=((d=function(){function n(){e(this,n),this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}return t(n,[{key:"showAllBanners",value:function(){this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}}]),n}()).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["message-banner-example"]],decls:5,vars:4,consts:[["closeButtonLabel","Close info message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","warning","closeButtonLabel","Close warning message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","error","closeButtonLabel","Close error message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["nxButton","","type","button",3,"disabled","click"],["closeButtonLabel","Close info message banner",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"],["context","warning","closeButtonLabel","Close warning message banner",1,"nx-margin-bottom-xs",3,"close"],["context","error","closeButtonLabel","Close error message banner",1,"nx-margin-bottom-xs",3,"close"]],template:function(e,n){1&e&&(l.YNc(0,f,5,0,"nx-message-banner",0),l.YNc(1,p,5,0,"nx-message-banner",1),l.YNc(2,h,5,0,"nx-message-banner",2),l.TgZ(3,"button",3),l.NdJ("click",function(){return n.showAllBanners()}),l._uU(4," Show all message banners "),l.qZA()),2&e&&(l.Q6J("ngIf",n.infoBanner),l.xp6(1),l.Q6J("ngIf",n.warningBanner),l.xp6(1),l.Q6J("ngIf",n.errorBanner),l.xp6(1),l.Q6J("disabled",n.infoBanner&&n.warningBanner&&n.errorBanner))},directives:[o.O5,g.X,m.h],styles:[""]}),d),b=i(38701);function _(e,n){if(1&e){var t=l.EpF();l.TgZ(0,"nx-message",3),l.NdJ("close",function(){return l.CHM(t),l.oxw().closed=!0}),l.TgZ(1,"span",4),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),l.qZA()}}function v(e,n){1&e&&(l.TgZ(0,"p"),l._uU(1," A close event was emitted!"),l.qZA())}var w=function(){var n=function n(){e(this,n),this.closed=!1};return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-closable-example"]],decls:4,vars:2,consts:[["nxContext","info","closable","true","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],[4,"ngIf"],["nxButton","","type","button",3,"click"],["nxContext","info","closable","true",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"]],template:function(e,n){1&e&&(l.YNc(0,_,5,0,"nx-message",0),l.YNc(1,v,2,0,"p",1),l.TgZ(2,"button",2),l.NdJ("click",function(){return n.closed=!n.closed}),l._uU(3," Toggle closed"),l.qZA()),2&e&&(l.Q6J("ngIf",!n.closed),l.xp6(1),l.Q6J("ngIf",n.closed))},directives:[o.O5,g.X,b.w],styles:[""]}),n}(),Z=i(22822),y=i(37871),T=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-error-example"]],decls:14,vars:0,consts:[["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-s"],["nxContext","error"],[1,"nx-font-weight-bold"],[1,"nx-margin-bottom-xs"],["appearance","text"]],template:function(e,n){1&e&&(l.TgZ(0,"h5",0),l._uU(1,"Using nx-message:"),l.qZA(),l.TgZ(2,"nx-message",1),l.TgZ(3,"span",2),l._uU(4,"Notification title:"),l.qZA(),l._UZ(5,"br"),l._uU(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),l.qZA(),l._UZ(7,"br"),l.TgZ(8,"h5",0),l._uU(9,"Using nx-error:"),l.qZA(),l.TgZ(10,"nx-error",3),l._uU(11," This is an error message for a customer facing application (B2C).\n"),l.qZA(),l.TgZ(12,"nx-error",4),l._uU(13," This is an error message for an internal application (B2B/B2E).\n"),l.qZA())},directives:[Z.s,b.w,y.vV],styles:[""]}),n}(),C=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-info-example"]],decls:5,vars:0,consts:[["nxContext","info"],[1,"nx-font-weight-bold"]],template:function(e,n){1&e&&(l.TgZ(0,"nx-message",0),l.TgZ(1,"span",1),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),l.qZA())},directives:[b.w],styles:[""]}),n}(),q=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-success-example"]],decls:5,vars:0,consts:[["nxContext","success"],[1,"nx-font-weight-bold"]],template:function(e,n){1&e&&(l.TgZ(0,"nx-message",0),l.TgZ(1,"span",1),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),l.qZA())},directives:[b.w],styles:[""]}),n}(),U=["template"];function k(e,n){1&e&&(l.TgZ(0,"span",3),l._uU(1,"Notification title:"),l.qZA(),l._UZ(2,"br"),l._uU(3," Yay, you see a success message toast. Great job!\n"))}var O={duration:0,context:"success",announcementMessage:"Yay, you see a success message toast"},A=function(){var n=function(){function n(t){e(this,n),this.messageToastService=t}return t(n,[{key:"open",value:function(){this.toastRef=this.messageToastService.openFromTemplate(this.templateRef,O)}},{key:"close",value:function(){this.toastRef&&this.toastRef.dismiss()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(l.Y36(r.VO))},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-toast-custom-settings-example"]],viewQuery:function(e,n){var t;(1&e&&l.Gf(U,5),2&e)&&(l.iGM(t=l.CRH())&&(n.templateRef=t.first))},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["nxButton","",3,"click"],["template",""],[1,"nx-font-weight-bold"]],template:function(e,n){1&e&&(l.TgZ(0,"button",0),l.NdJ("click",function(){return n.open()}),l._uU(1,"open message toast"),l.qZA(),l.TgZ(2,"button",1),l.NdJ("click",function(){return n.close()}),l._uU(3,"close message toast"),l.qZA(),l.YNc(4,k,4,0,"ng-template",null,2,l.W1O))},directives:[g.X],styles:[""]}),n}(),B=["template"];function I(e,n){1&e&&(l.TgZ(0,"strong"),l._uU(1,"Information"),l.qZA(),l._UZ(2,"br"),l._uU(3," You see an info message toast (from a template). It will disappear in 3000 ms.\n"))}var N=function(){var n=function(){function n(t){e(this,n),this.messageToastService=t,this.toastText="A success message toast with a custom text."}return t(n,[{key:"openFromText",value:function(){this.messageToastService.open(this.toastText,{context:"success",duration:5e3})}},{key:"openFromTemplate",value:function(){this.messageToastService.openFromTemplate(this.templateRef,{announcementMessage:"You see an info message. It will disappear in 3000 ms."})}}]),n}();return n.\u0275fac=function(e){return new(e||n)(l.Y36(r.VO))},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-toast-opening-example"]],viewQuery:function(e,n){var t;(1&e&&l.Gf(B,5),2&e)&&(l.iGM(t=l.CRH())&&(n.templateRef=t.first))},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-s",3,"click"],["nxButton","",3,"click"],["template",""]],template:function(e,n){1&e&&(l.TgZ(0,"button",0),l.NdJ("click",function(){return n.openFromText()}),l._uU(1,"open from text"),l.qZA(),l.TgZ(2,"button",1),l.NdJ("click",function(){return n.openFromTemplate()}),l._uU(3,"open from template"),l.qZA(),l.YNc(4,I,4,0,"ng-template",null,2,l.W1O))},directives:[g.X],styles:[""]}),n}(),M=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["message-warning-example"]],decls:5,vars:0,consts:[["nxContext","warning"],[1,"nx-font-weight-bold"]],template:function(e,n){1&e&&(l.TgZ(0,"nx-message",0),l.TgZ(1,"span",1),l._uU(2,"Notification title:"),l.qZA(),l._UZ(3,"br"),l._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),l.qZA())},directives:[b.w],styles:[""]}),n}(),J=function(){var n=function(){function n(){e(this,n)}return t(n,null,[{key:"components",value:function(){return{"message-banner":x,"message-closable":w,"message-error":T,"message-info":C,"message-success":q,"message-toast-custom-settings":A,"message-toast-opening":N,"message-warning":M}}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[r.Ee,a.$N,c.ru,o.ez,u.X]]}),n}()},37871:function(n,s,i){i.d(s,{hZ:function(){return _},vV:function(){return v}});var o=i(37716),a=i(39490),r=i(79765),c=i(46782),u=i(38583),l=i(90805),g=i(38701);function m(e,n){1&e&&o._UZ(0,"nx-icon",7),2&e&&o.Q6J("name","exclamation-triangle")}function f(e,n){if(1&e&&(o.ynx(0),o.YNc(1,m,1,1,"nx-icon",3),o.TgZ(2,"div",4),o.TgZ(3,"div",5),o.GkF(4,6),o.qZA(),o.qZA(),o.BQk()),2&e){var t=o.oxw(),s=o.MAs(3);o.xp6(1),o.Q6J("ngIf",t.showIcon),o.xp6(3),o.Q6J("ngTemplateOutlet",s)}}function p(e,n){if(1&e&&(o.TgZ(0,"nx-message",8),o.GkF(1,6),o.qZA()),2&e){o.oxw();var t=o.MAs(3);o.xp6(1),o.Q6J("ngTemplateOutlet",t)}}function h(e,n){1&e&&o.Hsn(0)}var d,x=["*"],b=0,_=new o.OlP("ERROR_DEFAULT_OPTIONS"),v=((d=function(){function n(t,s){var i=this;e(this,n),this._changeDetectorRef=t,this._defaultOptions=s,this._showIcon=!0,this._id="nx-error-"+b++,this._destroyed=new r.xQ,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe((0,c.R)(this._destroyed)).subscribe(function(){i._changeDetectorRef.markForCheck()})}return t(n,[{key:"showIcon",get:function(){return this._showIcon},set:function(e){this._showIcon=(0,a.Ig)(e),this._changeDetectorRef.markForCheck()}},{key:"id",get:function(){return this._id},set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"appearance",get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"},set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}}]),n}()).\u0275fac=function(e){return new(e||d)(o.Y36(o.sBO),o.Y36(_,8))},d.\u0275cmp=o.Xpm({type:d,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,n){2&e&&(o.uIk("role","alert")("id",n.id),o.ekj("nx-error--message","message"==n.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:x,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,n){1&e&&(o.F$t(),o.YNc(0,f,5,2,"ng-container",0),o.YNc(1,p,2,1,"nx-message",1),o.YNc(2,h,1,0,"ng-template",null,2,o.W1O)),2&e&&(o.Q6J("ngIf","text"===n.appearance),o.xp6(1),o.Q6J("ngIf","message"===n.appearance))},directives:[u.O5,u.tP,l.O,g.w],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}"],changeDetection:0}),d)},23061:function(n,s,i){i.d(s,{U:function(){return m}});var o,a=i(37716),r=i(39490),c=i(79765),u=["*"],l=0,g=new a.OlP("LABEL_DEFAULT_OPTIONS"),m=((o=function(){function n(t){e(this,n),this._defaultOptions=t,this._stateChanges=new c.xQ,this._disabled=!1,this._negative=!1,this._id="nx-label-"+l++}return t(n,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=(0,r.Ig)(e),this._stateChanges.next()}},{key:"negative",get:function(){return this._negative},set:function(e){this._negative=(0,r.Ig)(e),this._stateChanges.next()}},{key:"id",get:function(){return this._id},set:function(e){this._id!==e&&(this._id=e)}},{key:"size",get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"},set:function(e){this._size=e,this._stateChanges.next()}}]),n}()).\u0275fac=function(e){return new(e||o)(a.Y36(g,8))},o.\u0275cmp=a.Xpm({type:o,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,n){2&e&&(a.uIk("disabled",n.disabled)("aria-labelledby",n.id||null)("id",n.id),a.ekj("nx-label--negative",n.negative)("nx-label--large","large"===n.size)("nx-label--small","small"===n.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:u,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,n){1&e&&(a.F$t(),a.TgZ(0,"label",0),a.Hsn(1),a.qZA())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),o)},78459:function(n,t,s){s.d(t,{hZ:function(){return l.hZ},vV:function(){return l.vV},$N:function(){return u},UD:function(){return m.U},WI:function(){return g}});var i,o=s(38583),a=s(42677),r=s(51424),c=s(37716),u=((i=function n(){e(this,n)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[o.ez,a.cf,r.Ee]]}),i),l=s(37871),g=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez]]}),n}(),m=s(23061)}}])}();