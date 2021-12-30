"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[787],{787:(K,g,a)=>{a.r(g),a.d(g,{MenuExamplesModule:()=>V});var r=a(9808),h=a(325),I=a(8667),b=a(6894),x=a(3191),n=a(5e3);function E(t,o){1&t&&(n.TgZ(0,"div",1),n.Hsn(1),n.qZA())}const Z=["*"];let f=(()=>{class t{constructor(e){this._changeDetectorRef=e,this._open=!1}set open(e){const i=(0,x.Ig)(e);i!==this._open&&(this._open=i,this._changeDetectorRef.markForCheck())}get open(){return this._open}toggle(){this.open=!this.open}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.sBO))},t.\u0275cmp=n.Xpm({type:t,selectors:[["nx-menu"]],hostVars:1,hostBindings:function(e,i){2&e&&n.uIk("aria-expanded",i.open)},inputs:{open:"open"},ngContentSelectors:Z,decls:1,vars:1,consts:[["class","nx-menu__wrapper",4,"ngIf"],[1,"nx-menu__wrapper"]],template:function(e,i){1&e&&(n.F$t(),n.YNc(0,E,2,0,"div",0)),2&e&&n.Q6J("ngIf",i.open)},directives:[r.O5],styles:[".nx-menu[_nghost-%COMP%]{display:block}.nx-menu__wrapper[_ngcontent-%COMP%]{position:fixed;top:60px;left:0;right:0;bottom:0;z-index:1;overflow:auto;background:var(--menu-background-color)}  .nx-menu__link{display:block;padding:12px 0;font-size:18px;line-height:24px;outline:none}  .nx-menu__link+.nx-menu__link{margin-top:8px}  .nx-menu__link.cdk-keyboard-focused{box-shadow:var(--focus-box-shadow);border-radius:4px;outline:none}@media screen and (-ms-high-contrast: active){  .nx-menu__link.cdk-keyboard-focused{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}  .nx-menu__item.nx-menu__item--small,   .nx-menu__item.nx-menu__item--large{padding:24px;border-bottom:1px solid var(--menu-item-border-color)}@media screen and (-ms-high-contrast: active){  .nx-menu__item.nx-menu__item--small,   .nx-menu__item.nx-menu__item--large{border-bottom-color:windowText}}  .nx-menu__item.nx-menu__item--large{padding-left:64px}[dir=rtl][_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large, [dir=rtl]   [_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large{padding-right:64px;padding-left:0;padding-left:initial}@media screen and (-ms-high-contrast: active){  .nx-menu__link{text-decoration:none}}"],changeDetection:0}),t})();var M=a(5583);let u=(()=>{class t{constructor(e,i){this._elementRef=e,this._focusMonitor=i,this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(M.tE))},t.\u0275dir=n.lG2({type:t,selectors:[["a","nxMenuLink",""]],hostAttrs:[1,"nx-menu__link"]}),t})(),p=(()=>{class t{constructor(){this._size="s"}set size(e){this._size="l"===e?"l":"s"}get size(){return this._size}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","nxMenuItem",""]],hostAttrs:[1,"nx-menu__item"],hostVars:4,hostBindings:function(e,i){2&e&&n.ekj("nx-menu__item--small","s"===i.size)("nx-menu__item--large","l"===i.size)},inputs:{size:["nxMenuItem","size"]}}),t})();var d=a(805);const N=["nxMenuButton",""];function B(t,o){1&t&&n._UZ(0,"nx-icon",2)}const P=[[["","nxMenuButtonIcon",""]],"*"],w=["[nxMenuButtonIcon]","*"];let c=(()=>{class t{constructor(e,i,l){this._changeDetectorRef=e,this._focusMonitor=i,this._elementRef=l,this._expandable=!1,this._expanded=!1,this._type="root",this._focusMonitor.monitor(this._elementRef)}set expandable(e){this._expandable=(0,x.Ig)(e),this._changeDetectorRef.markForCheck()}get expandable(){return this._expandable}set expanded(e){this._expanded=(0,x.Ig)(e),this._changeDetectorRef.markForCheck()}get expanded(){return this._expanded}set type(e){("root"===e||"nested"===e)&&(this._type=e,this._changeDetectorRef.markForCheck())}get type(){return this._type}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.sBO),n.Y36(M.tE),n.Y36(n.SBq))},t.\u0275cmp=n.Xpm({type:t,selectors:[["","nxMenuButton",""]],hostAttrs:[1,"nx-menu-button"],hostVars:8,hostBindings:function(e,i){2&e&&n.ekj("is-expanded",i.expandable&&i.expanded)("is-expandable",i.expandable)("nx-menu-button--nested","nested"===i.type)("nx-menu-button--root","root"===i.type)},inputs:{expandable:"expandable",expanded:"expanded",type:["nxType","type"]},attrs:N,ngContentSelectors:w,decls:4,vars:1,consts:[[1,"nx-menu-button__label"],["class","nx-menu-button__expand-icon","name","chevron-down",4,"ngIf"],["name","chevron-down",1,"nx-menu-button__expand-icon"]],template:function(e,i){1&e&&(n.F$t(P),n.Hsn(0),n.TgZ(1,"span",0),n.Hsn(2,1),n.qZA(),n.YNc(3,B,1,0,"nx-icon",1)),2&e&&(n.xp6(3),n.Q6J("ngIf",i.expandable))},directives:[r.O5,d.O],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background:var(--menu-button-background-color);color:var(--menu-button-text-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:none;border:none;margin:0;cursor:pointer;line-height:24px;font-weight:400;font-size:18px;width:100%;transition:all .2s ease,padding 0 none;text-decoration:none;padding:24px}[_nghost-%COMP%]:hover{background:var(--menu-button-hover-background-color)}.is-expanded[_nghost-%COMP%]{font-weight:700;background:var(--menu-button-expanded-background-color);color:var(--menu-button-expanded-text-color);border-color:var(--menu-button-expanded-border-color)}.is-expanded[_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.nx-menu-button--nested[_nghost-%COMP%]{background:var(--menu-button-nested-background-color)}.nx-menu-button--nested.is-expanded[_nghost-%COMP%]{background:var(--menu-button-nested-expanded-background-color);border-color:var(--menu-button-nested-expanded-border-color);color:var(--menu-button-nested-expanded-color)}[_nghost-%COMP%]::-moz-focus-inner{border:0}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow);border-radius:8px;border:none}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background;border:4px solid CanvasText}}.nx-menu-button__expand-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;transition:all .2s ease;transform:rotate(0);width:16px;height:24px;margin-right:8px;flex:0 0 auto;font-size:24px}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}.nx-menu-button__label[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto;text-align:left;line-height:1;padding:4px 0}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%]{text-align:right}  .nx-menu-button__icon{margin-right:16px;height:24px;font-weight:400;flex:0 0 auto}[dir=rtl][_nghost-%COMP%]     .nx-menu-button__icon, [dir=rtl]   [_nghost-%COMP%]     .nx-menu-button__icon{margin-right:0;margin-right:initial;margin-left:16px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%], .is-expanded[_nghost-%COMP%], .nx-menu-button--nested[_nghost-%COMP%], .nx-menu-button--nested.is-expanded[_nghost-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace}[_nghost-%COMP%]:hover, .nx-menu-button--nested.is-expanded[_nghost-%COMP%]:hover{background-color:highlight;color:highlightText;border-bottom-color:windowText}}"],changeDetection:0}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","nxMenuButtonIcon",""]],hostAttrs:[1,"nx-menu-button__icon"]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[r.ez,b.cf]]}),t})();var A=a(5957),D=a(5261),F=a(9809),J=a(3781),z=a(1803),C=a(6640),Q=a(722),U=a(4219),L=a(7256);function Y(t,o){if(1&t&&(n.TgZ(0,"nx-tree-node",7),n.TgZ(1,"a",8),n._uU(2),n.qZA(),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Q6J("queryParams",e.query),n.xp6(1),n.hij(" ",e.label," ")}}function j(t,o){if(1&t&&n._UZ(0,"nx-icon",11),2&t){const e=n.oxw().$implicit;n.Q6J("name",e.icon)}}function R(t,o){if(1&t&&(n.TgZ(0,"nx-tree-node"),n.TgZ(1,"button",9),n.YNc(2,j,1,1,"nx-icon",10),n._uU(3),n.qZA(),n.qZA()),2&t){const e=o.$implicit,i=n.oxw();n.xp6(1),n.Q6J("nxMenuItem",e.icon?"s":"l")("expanded",i._treeControl.isExpanded(e))("nxType",0===e.level?"root":"nested"),n.xp6(1),n.Q6J("ngIf",e.icon),n.xp6(1),n.hij(" ",e.label," ")}}let O=(()=>{class t{constructor(){this.navigationData=[{label:"Option 1",icon:"file",children:[{label:"Option 1.1",children:[{label:"Option 1.2.1",query:{a:"1.1.1"}},{label:"Option 1.1.2",query:{a:"1.1.2"}},{label:"Option 1.1.3",query:{a:"1.1.3"}}]},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",query:{a:"1.2.3"}}]},{label:"Option 1.3",children:[{label:"Option 1.3.1",query:{a:"1.3.1"}},{label:"Option 1.3.2",query:{a:"1.3.2"}},{label:"Option 1.3.3",query:{a:"1.3.3"}}]}]},{label:"Option 2",icon:"user-o",children:[{label:"Option 2.1",children:[{label:"Option 2.2.1",query:{a:"2.1.1"}},{label:"Option 2.1.2",query:{a:"2.1.2"}},{label:"Option 2.1.3",query:{a:"2.1.3"}}]},{label:"Option 2.2",children:[{label:"Option 2.2.1",query:{a:"2.2.1"}},{label:"Option 2.2.2",query:{a:"2.2.2"}},{label:"Option 2.2.3",query:{a:"2.2.3"}}]},{label:"Option 2.3",children:[{label:"Option 2.3.1",query:{a:"2.3.1"}},{label:"Option 2.3.2",query:{a:"2.3.2"}},{label:"Option 2.3.3",query:{a:"2.3.3"}}]}]},{label:"Option 3",icon:"user-o",children:[{label:"Option 3.1",query:{a:"3.1"}},{label:"Option 3.2",query:{a:"3.2"}},{label:"Option 3.3",query:{a:"3.3"}}]}],this._hasChild=(e,i)=>i.expandable,this._isLink=(e,i)=>i.query,this._treeControl=new D.A,this._dataSource=new F.L(this._treeControl,this.navigationData)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["menu-example"]],decls:9,vars:4,consts:[["nxPlainButton","","aria-label","open menu",3,"click"],["name","bars"],["menu",""],[3,"dataSource","treeControl"],["nxMenuItem","l",4,"nxTreeNodeDef","nxTreeNodeDefWhen"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxButton","","type","button",1,"close-menu",3,"click"],["nxMenuItem","l"],["nxMenuLink","","nxTreeNodeActionItem","","routerLink","./",3,"queryParams"],["nxMenuButton","","nxTreeNodeToggle","","nxTreeNodeActionItem","","expandable","","type","button",3,"nxMenuItem","expanded","nxType"],["nxMenuButtonIcon","","size","s",3,"name",4,"ngIf"],["nxMenuButtonIcon","","size","s",3,"name"]],template:function(e,i){if(1&e){const l=n.EpF();n.TgZ(0,"button",0),n.NdJ("click",function(){return n.CHM(l),n.MAs(3).toggle()}),n._UZ(1,"nx-icon",1),n.qZA(),n.TgZ(2,"nx-menu",null,2),n.TgZ(4,"nx-tree",3),n.YNc(5,Y,3,2,"nx-tree-node",4),n.YNc(6,R,4,5,"nx-tree-node",5),n.qZA(),n.TgZ(7,"button",6),n.NdJ("click",function(){return n.CHM(l),n.MAs(3).toggle()}),n._uU(8,"close menu"),n.qZA(),n.qZA()}2&e&&(n.xp6(4),n.Q6J("dataSource",i._dataSource)("treeControl",i._treeControl),n.xp6(1),n.Q6J("nxTreeNodeDefWhen",i._isLink),n.xp6(1),n.Q6J("nxTreeNodeDefWhen",i._hasChild))},directives:[J.q,d.O,f,z.C,C.y,Q.X,C.q,p,u,h.yS,U.W,c,L.H,r.O5,m],styles:[".close-menu[_ngcontent-%COMP%]{margin:64px 24px}"]}),t})(),y=(()=>{class t{constructor(){this.primaryExpanded=!1,this.secondaryExpanded=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["menu-button-example"]],decls:10,vars:2,consts:[["nxMenuButton","","nxType","root","type","button"],["name","file","size","s","nxMenuButtonIcon",""],["nxMenuButton","","nxType","root","expandable","","type","button",3,"expanded","click"],["nxMenuButton","","nxType","nested","type","button"],["nxMenuButton","","nxType","nested","expandable","","type","button",3,"expanded","click"]],template:function(e,i){1&e&&(n.TgZ(0,"button",0),n._UZ(1,"nx-icon",1),n._uU(2," Option 1 (root level)\n"),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(){return i.primaryExpanded=!i.primaryExpanded}),n._UZ(4,"nx-icon",1),n._uU(5," Option 2 (root level, expandable)\n"),n.qZA(),n.TgZ(6,"button",3),n._uU(7," Option 2.1 (nested level)\n"),n.qZA(),n.TgZ(8,"button",4),n.NdJ("click",function(){return i.secondaryExpanded=!i.secondaryExpanded}),n._uU(9," Option 2.2 (nested level, expandable)\n"),n.qZA()),2&e&&(n.xp6(3),n.Q6J("expanded",i.primaryExpanded),n.xp6(5),n.Q6J("expanded",i.secondaryExpanded))},directives:[c,d.O,m],styles:["[_nghost-%COMP%]{display:block}"]}),t})();function S(t,o){if(1&t&&(n.TgZ(0,"a",5),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Oqu(e.label)}}function W(t,o){if(1&t&&(n.TgZ(0,"div",3),n.YNc(1,S,2,1,"a",4),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("ngForOf",e.children)}}function $(t,o){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"button",1),n.NdJ("click",function(){const s=n.CHM(e).$implicit;return n.oxw().onClick(s)}),n._uU(2),n.qZA(),n.YNc(3,W,2,1,"div",2),n.BQk()}if(2&t){const e=o.$implicit;n.xp6(1),n.Q6J("expandable",!!e.children)("expanded",e.expanded),n.xp6(1),n.hij(" ",e.label," "),n.xp6(1),n.Q6J("ngIf",e.children&&e.expanded)}}let v=(()=>{class t{constructor(){this.menuData=[{label:"Option 1",expanded:!1,children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",expanded:!1,children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3"}]}onClick(e){e.expanded=!e.expanded}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["menu-item-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","nxType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuItem","",4,"ngIf"],["nxMenuItem",""],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(e,i){1&e&&n.YNc(0,$,4,4,"ng-container",0),2&e&&n.Q6J("ngForOf",i.menuData)},directives:[r.sg,c,p,r.O5,u],styles:["[_nghost-%COMP%]{display:block}"]}),t})();function H(t,o){if(1&t&&(n.TgZ(0,"a",6),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Oqu(e.label)}}function X(t,o){if(1&t&&(n.TgZ(0,"div",4),n.YNc(1,H,2,1,"a",5),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("ngForOf",e.children)}}function G(t,o){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"button",1),n.NdJ("click",function(){const s=n.CHM(e).$implicit;return n.oxw().onClick(s)}),n._UZ(2,"nx-icon",2),n._uU(3),n.qZA(),n.YNc(4,X,2,1,"div",3),n.BQk()}if(2&t){const e=o.$implicit;n.xp6(1),n.Q6J("expandable",!!e.children)("expanded",e.expanded),n.xp6(1),n.Q6J("name",e.icon),n.xp6(1),n.hij(" ",e.label," "),n.xp6(1),n.Q6J("ngIf",e.children&&e.expanded)}}let k=(()=>{class t{constructor(){this.menuData=[{label:"Option 1",expanded:!1,icon:"file",children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3",icon:"user-o"}]}onClick(e){e.expanded=!e.expanded}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["menu-item-with-icons-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","nxType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuButtonIcon","","size","s",3,"name"],["nxMenuItem","l",4,"ngIf"],["nxMenuItem","l"],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(e,i){1&e&&n.YNc(0,G,5,5,"ng-container",0),2&e&&n.Q6J("ngForOf",i.menuData)},directives:[r.sg,c,p,d.O,m,r.O5,u],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["menu-link-example"]],decls:6,vars:0,consts:[["nxMenuLink","","href","javascript:void(0)"]],template:function(e,i){1&e&&(n.TgZ(0,"a",0),n._uU(1,"Menu link A"),n.qZA(),n.TgZ(2,"a",0),n._uU(3,"Menu link B"),n.qZA(),n.TgZ(4,"a",0),n._uU(5,"Menu link C"),n.qZA())},directives:[u],styles:["[_nghost-%COMP%]{display:block}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-top:32px}"]}),t})(),V=(()=>{class t{static components(){return{menu:O,"menu-button":y,"menu-item":v,"menu-item-with-icons":k,"menu-link":T}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[A.ru,q,b.cf,I.D,h.Bz,r.ez]]}),t})()}}]);