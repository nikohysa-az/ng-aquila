import{a as te,b as oe,c as ie,d as re,e as ae,g as le,h as ce,i as pe}from"./chunk-5ABIUXTJ.js";import{g as Z,i as ee,j as ne}from"./chunk-5RFPKINN.js";import"./chunk-PNCA27QO.js";import"./chunk-K3MRPJ7U.js";import{i as Q,k as Y}from"./chunk-5CERBW6K.js";import{c as g,e as V}from"./chunk-RYHOTL5Z.js";import{w as G}from"./chunk-LK5X6SR6.js";import"./chunk-7ONGEGSB.js";import{a as L}from"./chunk-2BGO346T.js";import{B as z,n as j,o as _}from"./chunk-UUZACKYZ.js";import{$b as X,Aa as y,Db as W,Eb as p,Gb as H,Kb as d,Lb as l,Mb as c,Nb as u,Ob as P,Pb as F,Rb as k,Yb as x,_b as f,ac as S,ec as U,fc as s,gc as q,hc as O,ma as E,mb as R,tb as a,ua as m,ub as C,va as w,wa as B,wb as A,za as v}from"./chunk-QYP2T7PT.js";function ge(n,e){n&1&&(l(0,"div",1),S(1),c())}var be=["*"],Me=["nxMenuButton",""];function ve(n,e){n&1&&u(0,"nx-icon",2)}var ye=[[["","nxMenuButtonIcon",""]],"*"],Ce=["[nxMenuButtonIcon]","*"],se=(()=>{let e=class e{set open(o){let t=L(o);t!==this._open&&(this._open=t,this._cdr.markForCheck())}get open(){return this._open}constructor(o){this._cdr=o,this._open=!1}toggle(){this.open=!this.open}};e.\u0275fac=function(t){return new(t||e)(C(A))},e.\u0275cmp=m({type:e,selectors:[["nx-menu"]],hostVars:1,hostBindings:function(t,i){t&2&&W("aria-expanded",i.open)},inputs:{open:"open"},ngContentSelectors:be,decls:1,vars:1,consts:[["class","nx-menu__wrapper",4,"ngIf"],[1,"nx-menu__wrapper"]],template:function(t,i){t&1&&(X(),d(0,ge,2,0,"div",0)),t&2&&p("ngIf",i.open)},dependencies:[_],styles:[".nx-menu[_nghost-%COMP%]{display:block}.nx-menu__wrapper[_ngcontent-%COMP%]{position:fixed;inset:60px 0 0;z-index:1;overflow:auto;background:var(--menu-background-color)}  .nx-menu__link{display:block;padding:12px 0;font-size:18px;line-height:24px;outline:none}  .nx-menu__link+.nx-menu__link{margin-top:8px}  .nx-menu__link.cdk-keyboard-focused{box-shadow:var(--focus-box-shadow);border-radius:4px;outline:none}@media screen and (forced-colors: active),(forced-colors: active){  .nx-menu__link.cdk-keyboard-focused{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}  .nx-menu__item.nx-menu__item--small,   .nx-menu__item.nx-menu__item--large{padding:24px;border-bottom:1px solid var(--menu-item-border-color)}@media screen and (forced-colors: active){  .nx-menu__item.nx-menu__item--small,   .nx-menu__item.nx-menu__item--large{border-bottom-color:CanvasText}}  .nx-menu__item.nx-menu__item--large{padding-left:64px}[dir=rtl][_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large, [dir=rtl]   [_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large{padding-right:64px;padding-left:initial}@media screen and (forced-colors: active){  .nx-menu__link{text-decoration:none}}"],changeDetection:0});let n=e;return n})(),b=(()=>{let e=class e{set expandable(o){this._expandable=L(o),this._cdr.markForCheck()}get expandable(){return this._expandable}set expanded(o){this._expanded=L(o),this._cdr.markForCheck()}get expanded(){return this._expanded}set type(o){(o==="root"||o==="nested")&&(this._type=o,this._cdr.markForCheck())}get type(){return this._type}constructor(o,t,i){this._cdr=o,this._focusMonitor=t,this._elementRef=i,this._expandable=!1,this._expanded=!1,this._type="root",this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}};e.\u0275fac=function(t){return new(t||e)(C(A),C(G),C(R))},e.\u0275cmp=m({type:e,selectors:[["","nxMenuButton",""]],hostAttrs:[1,"nx-menu-button"],hostVars:9,hostBindings:function(t,i){t&2&&(W("aria-expanded",i.expandable?i.expanded:null),H("is-expanded",i.expandable&&i.expanded)("is-expandable",i.expandable)("nx-menu-button--nested",i.type==="nested")("nx-menu-button--root",i.type==="root"))},inputs:{expandable:"expandable",expanded:"expanded",type:["menuButtonType","type"]},attrs:Me,ngContentSelectors:Ce,decls:4,vars:1,consts:[[1,"nx-menu-button__label"],["class","nx-menu-button__expand-icon","name","chevron-down","aria-hidden","true",4,"ngIf"],["name","chevron-down","aria-hidden","true",1,"nx-menu-button__expand-icon"]],template:function(t,i){t&1&&(X(ye),S(0),l(1,"span",0),S(2,1),c(),d(3,ve,1,0,"nx-icon",1)),t&2&&(a(3),p("ngIf",i.expandable))},dependencies:[_,g],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background:var(--menu-button-background-color);color:var(--menu-button-text-color);appearance:none;outline:none;box-shadow:none;border:none;margin:0;cursor:pointer;line-height:24px;font-weight:400;font-size:18px;width:100%;transition:all .2s ease,padding 0 none;text-decoration:none;padding:24px}[_nghost-%COMP%]:hover{background:var(--menu-button-hover-background-color)}.is-expanded[_nghost-%COMP%]{font-weight:700;background:var(--menu-button-expanded-background-color);color:var(--menu-button-expanded-text-color);border-color:var(--menu-button-expanded-border-color)}.is-expanded[_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.nx-menu-button--nested[_nghost-%COMP%]{background:var(--menu-button-nested-background-color)}.nx-menu-button--nested.is-expanded[_nghost-%COMP%]{background:var(--menu-button-nested-expanded-background-color);border-color:var(--menu-button-nested-expanded-border-color);color:var(--menu-button-nested-expanded-color)}[_nghost-%COMP%]::-moz-focus-inner{border:0}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow);border-radius:8px;border:none}@media screen and (forced-colors: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px CanvasText,inset 0 0 0 6px background;border:4px solid CanvasText}}.nx-menu-button__expand-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;transition:all .2s ease;transform:rotate(0);width:16px;height:24px;margin-right:8px;flex:0 0 auto;font-size:24px}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}.nx-menu-button__label[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto;text-align:left;line-height:1;padding:4px 0}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%]{text-align:right}  .nx-menu-button__icon{margin-right:16px;height:24px;font-weight:400;flex:0 0 auto}[dir=rtl][_nghost-%COMP%]     .nx-menu-button__icon, [dir=rtl]   [_nghost-%COMP%]     .nx-menu-button__icon{margin-right:initial;margin-left:16px}@media screen and (forced-colors: active){[_nghost-%COMP%], .is-expanded[_nghost-%COMP%], .nx-menu-button--nested[_nghost-%COMP%], .nx-menu-button--nested.is-expanded[_nghost-%COMP%]{forced-color-adjust:none;color:buttonText;background-color:buttonFace}[_nghost-%COMP%]:hover, .nx-menu-button--nested.is-expanded[_nghost-%COMP%]:hover{background-color:highlight;color:highlightText;border-bottom-color:CanvasText}}"],changeDetection:0});let n=e;return n})(),D=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=B({type:e,selectors:[["","nxMenuButtonIcon",""]],hostAttrs:[1,"nx-menu-button__icon"]});let n=e;return n})(),T=(()=>{let e=class e{constructor(){this._size="s"}set size(o){this._size=o==="l"?"l":"s"}get size(){return this._size}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=B({type:e,selectors:[["","nxMenuItem",""]],hostAttrs:[1,"nx-menu__item"],hostVars:4,hostBindings:function(t,i){t&2&&H("nx-menu__item--small",i.size==="s")("nx-menu__item--large",i.size==="l")},inputs:{size:["nxMenuItem","size"]}});let n=e;return n})(),M=(()=>{let e=class e{constructor(o,t){this._elementRef=o,this._focusMonitor=t,this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}};e.\u0275fac=function(t){return new(t||e)(C(R),C(G))},e.\u0275dir=B({type:e,selectors:[["a","nxMenuLink",""]],hostAttrs:[1,"nx-menu__link"]});let n=e;return n})();var de=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w({type:e}),e.\u0275inj=E({imports:[z,V]});let n=e;return n})();function Oe(n,e){if(n&1&&(l(0,"nx-tree-node",7)(1,"a",8),s(2),c()()),n&2){let r=e.$implicit;a(1),p("queryParams",r.query),a(1),O(" ",r.label," ")}}function ke(n,e){if(n&1&&u(0,"nx-icon",11),n&2){let r=f().$implicit;p("name",r.icon)}}function Ie(n,e){if(n&1&&(l(0,"nx-tree-node")(1,"button",9),d(2,ke,1,1,"nx-icon",10),s(3),c()()),n&2){let r=e.$implicit,o=f();a(1),p("nxMenuItem",r.icon?"s":"l")("expanded",o._treeControl.isExpanded(r))("menuButtonType",r.level===0?"root":"nested"),a(1),p("ngIf",r.icon),a(1),O(" ",r.label," ")}}var me=(()=>{let e=class e{constructor(){this.navigationData=[{label:"Option 1",icon:"file",children:[{label:"Option 1.1",children:[{label:"Option 1.2.1",query:{a:"1.1.1"}},{label:"Option 1.1.2",query:{a:"1.1.2"}},{label:"Option 1.1.3",query:{a:"1.1.3"}}]},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",query:{a:"1.2.3"}}]},{label:"Option 1.3",children:[{label:"Option 1.3.1",query:{a:"1.3.1"}},{label:"Option 1.3.2",query:{a:"1.3.2"}},{label:"Option 1.3.3",query:{a:"1.3.3"}}]}]},{label:"Option 2",icon:"user-o",children:[{label:"Option 2.1",children:[{label:"Option 2.2.1",query:{a:"2.1.1"}},{label:"Option 2.1.2",query:{a:"2.1.2"}},{label:"Option 2.1.3",query:{a:"2.1.3"}}]},{label:"Option 2.2",children:[{label:"Option 2.2.1",query:{a:"2.2.1"}},{label:"Option 2.2.2",query:{a:"2.2.2"}},{label:"Option 2.2.3",query:{a:"2.2.3"}}]},{label:"Option 2.3",children:[{label:"Option 2.3.1",query:{a:"2.3.1"}},{label:"Option 2.3.2",query:{a:"2.3.2"}},{label:"Option 2.3.3",query:{a:"2.3.3"}}]}]},{label:"Option 3",icon:"user-o",children:[{label:"Option 3.1",query:{a:"3.1"}},{label:"Option 3.2",query:{a:"3.2"}},{label:"Option 3.3",query:{a:"3.3"}}]}],this._hasChild=(o,t)=>t.expandable,this._isLink=(o,t)=>t.query,this._treeControl=new ie,this._dataSource=new oe(this._treeControl,this.navigationData)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["menu-example"]],decls:9,vars:4,consts:[["nxPlainButton","","aria-label","open menu",3,"click"],["name","bars","aria-hidden","true"],["menu",""],[3,"dataSource","treeControl"],["nxMenuItem","l",4,"nxTreeNodeDef","nxTreeNodeDefWhen"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxButton","","type","button",1,"close-menu",3,"click"],["nxMenuItem","l"],["nxMenuLink","","nxTreeNodeActionItem","","routerLink","./",3,"queryParams"],["nxMenuButton","","nxTreeNodeToggle","","nxTreeNodeActionItem","","expandable","","type","button",3,"nxMenuItem","expanded","menuButtonType"],["nxMenuButtonIcon","","size","s",3,"name",4,"ngIf"],["nxMenuButtonIcon","","size","s",3,"name"]],template:function(t,i){if(t&1){let h=k();l(0,"button",0),x("click",function(){v(h);let $=U(3);return y($.toggle())}),u(1,"nx-icon",1),c(),l(2,"nx-menu",null,2)(4,"nx-tree",3),d(5,Oe,3,2,"nx-tree-node",4)(6,Ie,4,5,"nx-tree-node",5),c(),l(7,"button",6),x("click",function(){v(h);let $=U(3);return y($.toggle())}),s(8," close menu "),c()()}t&2&&(a(4),p("dataSource",i._dataSource)("treeControl",i._treeControl),a(1),p("nxTreeNodeDefWhen",i._isLink),a(1),p("nxTreeNodeDefWhen",i._hasChild))},dependencies:[Z,ee,se,M,T,b,D,g,ce,re,ae,le,te,Q,_],styles:[".close-menu[_ngcontent-%COMP%]{margin:64px 24px}"]});let n=e;return n})();var ue=(()=>{let e=class e{constructor(){this.primaryExpanded=!1,this.secondaryExpanded=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["menu-button-example"]],decls:10,vars:2,consts:[["nxMenuButton","","menuButtonType","root","type","button"],["name","file","size","s","nxMenuButtonIcon","","aria-hidden","true"],["nxMenuButton","","menuButtonType","root","expandable","","type","button",3,"expanded","click"],["nxMenuButton","","menuButtonType","nested","type","button"],["nxMenuButton","","menuButtonType","nested","expandable","","type","button",3,"expanded","click"]],template:function(t,i){t&1&&(l(0,"button",0),u(1,"nx-icon",1),s(2,` Option 1 (root level)
`),c(),l(3,"button",2),x("click",function(){return i.primaryExpanded=!i.primaryExpanded}),u(4,"nx-icon",1),s(5,` Option 2 (root level, expandable)
`),c(),l(6,"button",3),s(7,` Option 2.1 (nested level)
`),c(),l(8,"button",4),x("click",function(){return i.secondaryExpanded=!i.secondaryExpanded}),s(9,` Option 2.2 (nested level, expandable)
`),c()),t&2&&(a(3),p("expanded",i.primaryExpanded),a(5),p("expanded",i.secondaryExpanded))},dependencies:[b,D,g],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();function De(n,e){if(n&1&&(l(0,"a",5),s(1),c()),n&2){let r=e.$implicit;a(1),q(r.label)}}function Te(n,e){if(n&1&&(l(0,"div",3),d(1,De,2,1,"a",4),c()),n&2){let r=f().$implicit;a(1),p("ngForOf",r.children)}}function Ne(n,e){if(n&1){let r=k();P(0),l(1,"button",1),x("click",function(){let i=v(r).$implicit,h=f();return y(h.onClick(i))}),s(2),c(),d(3,Te,2,1,"div",2),F()}if(n&2){let r=e.$implicit;a(1),p("expandable",!!r.children)("expanded",r.expanded),a(1),O(" ",r.label," "),a(1),p("ngIf",r.children&&r.expanded)}}var xe=(()=>{let e=class e{constructor(){this.menuData=[{label:"Option 1",expanded:!1,children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",expanded:!1,children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3"}]}onClick(o){o.expanded=!o.expanded}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["menu-item-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","menuButtonType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuItem","",4,"ngIf"],["nxMenuItem",""],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(t,i){t&1&&d(0,Ne,4,4,"ng-container",0),t&2&&p("ngForOf",i.menuData)},dependencies:[M,T,b,j,_],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();function Ee(n,e){if(n&1&&(l(0,"a",6),s(1),c()),n&2){let r=e.$implicit;a(1),q(r.label)}}function we(n,e){if(n&1&&(l(0,"div",4),d(1,Ee,2,1,"a",5),c()),n&2){let r=f().$implicit;a(1),p("ngForOf",r.children)}}function Be(n,e){if(n&1){let r=k();P(0),l(1,"button",1),x("click",function(){let i=v(r).$implicit,h=f();return y(h.onClick(i))}),u(2,"nx-icon",2),s(3),c(),d(4,we,2,1,"div",3),F()}if(n&2){let r=e.$implicit;a(1),p("expandable",!!r.children)("expanded",r.expanded),a(1),p("name",r.icon),a(1),O(" ",r.label," "),a(1),p("ngIf",r.children&&r.expanded)}}var fe=(()=>{let e=class e{constructor(){this.menuData=[{label:"Option 1",expanded:!1,icon:"file",children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3",icon:"user-o"}]}onClick(o){o.expanded=!o.expanded}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["menu-item-with-icons-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","menuButtonType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuButtonIcon","","size","s","aria-hidden","true",3,"name"],["nxMenuItem","l",4,"ngIf"],["nxMenuItem","l"],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(t,i){t&1&&d(0,Be,5,5,"ng-container",0),t&2&&p("ngForOf",i.menuData)},dependencies:[M,T,b,D,g,j,_],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var _e=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["menu-link-example"]],decls:6,vars:0,consts:[["nxMenuLink","","href","javascript:void(0)"]],template:function(t,i){t&1&&(l(0,"a",0),s(1,"Menu link A"),c(),l(2,"a",0),s(3,"Menu link B"),c(),l(4,"a",0),s(5,"Menu link C"),c())},dependencies:[M],styles:["[_nghost-%COMP%]{display:block}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-top:32px}"]});let n=e;return n})();var on=(()=>{let e=class e{static components(){return{menu:me,"menu-button":ue,"menu-item":xe,"menu-item-with-icons":fe,"menu-link":_e}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w({type:e}),e.\u0275inj=E({imports:[ne,de,V,pe,Y,z]});let n=e;return n})();export{on as MenuExamplesModule};
