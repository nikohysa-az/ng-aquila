(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/sJ9":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)}}),t})();n("LktG")},Db2k:function(t,e,n){"use strict";n.r(e),n.d(e,"TabsExamplesModule",function(){return tt});var a=n("mN63"),c=n("tyNb"),i=n("rU6a"),s=n("2H/T"),b=n("fXoL"),o=n("BYLl"),r=n("Rmhm");let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-appearance-example"]],decls:10,vars:1,consts:[["appearance","expert",3,"selectedIndex","selectedIndexChange"],["label","First tab"],[1,"tab__content"],["label","Second tab"],["label","Third tab","disabled","true"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.currentIndex=t}),b.Vb(1,"nx-tab",1),b.Vb(2,"p",2),b.Jc(3," Fill in your first content! "),b.Ub(),b.Ub(),b.Vb(4,"nx-tab",3),b.Vb(5,"p",2),b.Jc(6," Fill in your second content! "),b.Ub(),b.Ub(),b.Vb(7,"nx-tab",4),b.Vb(8,"p",2),b.Jc(9," Fill in your third content! "),b.Ub(),b.Ub(),b.Ub()),2&t&&b.mc("selectedIndex",e.currentIndex)},directives:[o.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();var u=n("eC/v"),p=n("LTpZ");let d=(()=>{class t{constructor(){this.autoselect=!0}toggleAutoselect(){this.autoselect=!this.autoselect}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-auto-manual-select-example"]],decls:13,vars:2,consts:[[3,"autoselect"],["label","First tab"],[1,"tab__content"],["nxHeadline","subsection-large"],["label","Second tab"],["type","button","nxButton","primary small",3,"click"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.Vb(1,"nx-tab",1),b.Vb(2,"div",2),b.Vb(3,"h2",3),b.Jc(4,"First"),b.Ub(),b.Ub(),b.Ub(),b.Vb(5,"nx-tab",4),b.Vb(6,"div",2),b.Vb(7,"h2",3),b.Jc(8,"Second"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(9,"p"),b.Jc(10),b.Ub(),b.Vb(11,"button",5),b.cc("click",function(){return e.toggleAutoselect()}),b.Jc(12,"Toggle autoselect"),b.Ub()),2&t&&(b.mc("autoselect",e.autoselect),b.Db(10),b.Lc("Autoselect setting: ",e.autoselect,""))},directives:[o.a,r.a,u.a,p.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();var g=n("LktG");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-basic-example"]],decls:10,vars:1,consts:[[3,"selectedIndex","selectedIndexChange"],["label","First tab"],[1,"tab__content"],["label","Second tab"],["nxHeadline","subsection-large"],["nxCopytext","normal"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.currentIndex=t}),b.Vb(1,"nx-tab",1),b.Vb(2,"p",2),b.Jc(3," Fill in your content! "),b.Ub(),b.Ub(),b.Vb(4,"nx-tab",3),b.Vb(5,"div",2),b.Vb(6,"h2",4),b.Jc(7,"Ut enim ad minim veniam"),b.Ub(),b.Vb(8,"p",5),b.Jc(9," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&b.mc("selectedIndex",e.currentIndex)},directives:[o.a,r.a,u.a,g.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-disabled-example"]],decls:22,vars:0,consts:[["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["disabled","true","selectedIndex","1"],["label","First tab"],[1,"tab__content"],["label","Second tab"],["disabled","true","label","Disabled First tab"],["label","Third tab"]],template:function(t,e){1&t&&(b.Vb(0,"h3",0),b.Jc(1,"Disabled tab group:"),b.Ub(),b.Vb(2,"nx-tab-group",1),b.Vb(3,"nx-tab",2),b.Vb(4,"p",3),b.Jc(5," First tab content. "),b.Ub(),b.Ub(),b.Vb(6,"nx-tab",4),b.Vb(7,"div",3),b.Jc(8," Second tab content. "),b.Ub(),b.Ub(),b.Ub(),b.Qb(9,"br"),b.Vb(10,"h3",0),b.Jc(11,"Tab group with a disabled tab:"),b.Ub(),b.Vb(12,"nx-tab-group"),b.Vb(13,"nx-tab",5),b.Vb(14,"p",3),b.Jc(15," Disabled first tab content. "),b.Ub(),b.Ub(),b.Vb(16,"nx-tab",4),b.Vb(17,"div",3),b.Jc(18," Second tab content. "),b.Ub(),b.Ub(),b.Vb(19,"nx-tab",6),b.Vb(20,"div",3),b.Jc(21," Third tab content. "),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,o.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();var f=n("ofXK");function h(t,e){if(1&t){const t=b.Wb();b.Vb(0,"nx-tab",5),b.Vb(1,"div",6),b.Jc(2),b.Vb(3,"button",7),b.cc("click",function(){b.xc(t);const n=e.index;return b.gc().removeTab(n)}),b.Jc(4,"Remove tab"),b.Ub(),b.Ub(),b.Ub()}if(2&t){const t=e.$implicit;b.mc("label",t),b.Db(2),b.Lc(" Content of tab ",t," ")}}let v=(()=>{class t{constructor(){this.tabs=["one","two","three"]}addTab(t){this.tabs=[...this.tabs,t]}removeTab(t){this.tabs.splice(t,1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-dynamic-example"]],decls:8,vars:1,consts:[[3,"label",4,"ngFor","ngForOf"],[1,"add-container"],["type","text",1,"nx-margin-left-s","nx-margin-right-2xs"],["newTabText",""],["nxButton","primary small","type","button",3,"click"],[3,"label"],[1,"tab__content","nx-margin-bottom-m"],["nxButton","small","type","button",1,"nx-margin-left-s",3,"click"]],template:function(t,e){if(1&t){const t=b.Wb();b.Vb(0,"nx-tab-group"),b.Hc(1,h,5,2,"nx-tab",0),b.Ub(),b.Vb(2,"div",1),b.Jc(3," New tab label: "),b.Qb(4,"input",2,3),b.Vb(6,"button",4),b.cc("click",function(){b.xc(t);const n=b.tc(5);return e.addTab(n.value)}),b.Jc(7,"Add"),b.Ub(),b.Ub()}2&t&&(b.Db(1),b.mc("ngForOf",e.tabs))},directives:[o.a,f.p,p.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px}.add-container[_ngcontent-%COMP%], .tab__content[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),t})();const U={appearance:"expert"};let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-injection-token-example"]],features:[b.Cb([{provide:i.c,useValue:U}])],decls:7,vars:1,consts:[[3,"selectedIndex","selectedIndexChange"],["label","First tab"],[1,"tab__content"],["label","Second tab"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.currentIndex=t}),b.Vb(1,"nx-tab",1),b.Vb(2,"p",2),b.Jc(3," Fill in your first content! "),b.Ub(),b.Ub(),b.Vb(4,"nx-tab",3),b.Vb(5,"p",2),b.Jc(6," Fill in your second content! "),b.Ub(),b.Ub(),b.Ub()),2&t&&b.mc("selectedIndex",e.currentIndex)},directives:[o.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();var y=n("YBrq");function k(t,e){1&t&&(b.Vb(0,"p"),b.Jc(1,"Fill in your content!"),b.Ub())}function _(t,e){1&t&&(b.Vb(0,"div"),b.Vb(1,"h2",3),b.Jc(2,"Ut enim ad minim veniam"),b.Ub(),b.Vb(3,"p",4),b.Jc(4," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),b.Ub(),b.Ub())}let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-lazy-example"]],decls:5,vars:0,consts:[["label","First tab"],["nxTabContent",""],["label","Second tab"],["nxHeadline","subsection-large"],["nxCopytext","normal"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group"),b.Vb(1,"nx-tab",0),b.Hc(2,k,2,0,"ng-template",1),b.Ub(),b.Vb(3,"nx-tab",2),b.Hc(4,_,5,0,"ng-template",1),b.Ub(),b.Ub())},directives:[o.a,r.a,y.a,u.a,g.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();var C=n("09D9");function L(t,e){if(1&t){const t=b.Wb();b.Vb(0,"a",1),b.cc("click",function(){b.xc(t);const n=e.$implicit;return b.gc().setActiveLink(n)}),b.Jc(1),b.Ub()}if(2&t){const t=e.$implicit,n=b.gc();b.mc("active",n.currentLink.label===t.label)("disabled",t.disabled)("routerLink",t.path),b.Db(1),b.Lc(" ",t.label," ")}}let w=(()=>{class t{constructor(){this.links=[{label:"Subpage 1",path:"...",disabled:!1},{label:"Subpage 2",path:"...",disabled:!1},{label:"Subpage 3",path:"...",disabled:!0}],this.currentLink=this.links[0]}setActiveLink(t){t.disabled||(this.currentLink=t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-nav-bar-example"]],decls:2,vars:1,consts:[["nxTabLink","",3,"active","disabled","routerLink","click",4,"ngFor","ngForOf"],["nxTabLink","",3,"active","disabled","routerLink","click"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-nav-bar"),b.Hc(1,L,2,4,"a",0),b.Ub()),2&t&&(b.Db(1),b.mc("ngForOf",e.links))},directives:[C.b,f.p,c.h,C.a],styles:[""]}),t})();function F(t,e){if(1&t){const t=b.Wb();b.Vb(0,"a",2),b.cc("click",function(){b.xc(t);const n=e.$implicit;return b.gc().setActiveLink(n)}),b.Jc(1),b.Ub()}if(2&t){const t=e.$implicit,n=b.gc();b.mc("active",n.currentLink.label===t.label)("disabled",t.disabled)("routerLink",t.path),b.Db(1),b.Lc(" ",t.label," ")}}let I=(()=>{class t{constructor(){this.links=[{label:"Subpage 1",path:"...",disabled:!1},{label:"Subpage 2",path:"...",disabled:!1},{label:"Subpage 3",path:"...",disabled:!0}],this.currentLink=this.links[0]}setActiveLink(t){t.disabled||(this.currentLink=t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-nav-bar-appearance-example"]],decls:2,vars:1,consts:[["appearance","expert"],["nxTabLink","",3,"active","disabled","routerLink","click",4,"ngFor","ngForOf"],["nxTabLink","",3,"active","disabled","routerLink","click"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-nav-bar",0),b.Hc(1,F,2,4,"a",1),b.Ub()),2&t&&(b.Db(1),b.mc("ngForOf",e.links))},directives:[C.b,f.p,c.h,C.a],styles:[""]}),t})();function O(t,e){if(1&t){const t=b.Wb();b.Vb(0,"a",1),b.cc("click",function(){b.xc(t);const n=e.$implicit;return b.gc().setActiveLink(n)}),b.Jc(1),b.Ub()}if(2&t){const t=e.$implicit,n=b.gc();b.mc("active",n.currentLink.label===t.label)("disabled",t.disabled)("routerLink",t.path),b.Db(1),b.Lc(" ",t.label," ")}}const M={appearance:"expert"};let T=(()=>{class t{constructor(){this.links=[{label:"Subpage 1",path:"...",disabled:!1},{label:"Subpage 2",path:"...",disabled:!1},{label:"Subpage 3",path:"...",disabled:!0}],this.currentLink=this.links[0]}setActiveLink(t){t.disabled||(this.currentLink=t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-nav-bar-injection-token-example"]],features:[b.Cb([{provide:i.d,useValue:M}])],decls:2,vars:1,consts:[["nxTabLink","",3,"active","disabled","routerLink","click",4,"ngFor","ngForOf"],["nxTabLink","",3,"active","disabled","routerLink","click"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-nav-bar"),b.Hc(1,O,2,4,"a",0),b.Ub()),2&t&&(b.Db(1),b.mc("ngForOf",e.links))},directives:[C.b,f.p,c.h,C.a],styles:[""]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-negative-example"]],decls:8,vars:0,consts:[[1,"docs-inverse-container"],["negative","true"],["label","First tab"],[1,"tab__content"],["label","Second tab"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"nx-tab-group",1),b.Vb(2,"nx-tab",2),b.Vb(3,"div",3),b.Jc(4," First "),b.Ub(),b.Ub(),b.Vb(5,"nx-tab",4),b.Vb(6,"div",3),b.Jc(7," Second "),b.Ub(),b.Ub(),b.Ub(),b.Ub())},directives:[o.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})();function P(t,e){if(1&t&&(b.Vb(0,"pre"),b.Jc(1),b.Ub()),2&t){const t=b.gc();b.Db(1),b.Kc(t.logMessage)}}let D=(()=>{class t{constructor(){this.messages=[]}tabChanged(t){this.messages.push(`Selected Index: ${t.index} Label: ${t.tab.label}`),Promise.resolve().then(()=>this.logMessage=this.messages.join("\n"))}tabFocused(t){this.messages.push(`Focused Index: ${t.index} Label: ${t.tab.label}`),Promise.resolve().then(()=>this.logMessage=this.messages.join("\n"))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-output-events-example"]],decls:10,vars:1,consts:[[4,"ngIf"],["autoselect","false",3,"selectedTabChange","focusChange"],["label","First tab"],[1,"tab__content"],["nxHeadline","subsection-large"],["label","Second tab"]],template:function(t,e){1&t&&(b.Hc(0,P,2,1,"pre",0),b.Vb(1,"nx-tab-group",1),b.cc("selectedTabChange",function(t){return e.tabChanged(t)})("focusChange",function(t){return e.tabFocused(t)}),b.Vb(2,"nx-tab",2),b.Vb(3,"div",3),b.Vb(4,"h2",4),b.Jc(5,"First"),b.Ub(),b.Ub(),b.Ub(),b.Vb(6,"nx-tab",5),b.Vb(7,"div",3),b.Vb(8,"h2",4),b.Jc(9,"Second"),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&b.mc("ngIf",e.logMessage)},directives:[f.q,o.a,r.a,u.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-responsive-example"]],decls:9,vars:0,consts:[["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["mobileAccordion","false"],["label","First tab"],[1,"tab__content"],["label","Second tab"]],template:function(t,e){1&t&&(b.Vb(0,"h3",0),b.Jc(1,"This tab will not switch to accordion on mobile:"),b.Ub(),b.Vb(2,"nx-tab-group",1),b.Vb(3,"nx-tab",2),b.Vb(4,"div",3),b.Jc(5," First tab content "),b.Ub(),b.Ub(),b.Vb(6,"nx-tab",4),b.Vb(7,"div",3),b.Jc(8," Second tab content "),b.Ub(),b.Ub(),b.Ub())},directives:[u.a,o.a,r.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}"]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-styling-example"]],decls:10,vars:1,consts:[[3,"selectedIndex","selectedIndexChange"],["label","First tab"],[1,"tab__content"],["label","Second tab"],["nxHeadline","subsection-large"],["nxCopytext","normal"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.currentIndex=t}),b.Vb(1,"nx-tab",1),b.Vb(2,"p",2),b.Jc(3," Fill in your content! "),b.Ub(),b.Ub(),b.Vb(4,"nx-tab",3),b.Vb(5,"div",2),b.Vb(6,"h2",4),b.Jc(7,"Ut enim ad minim veniam"),b.Ub(),b.Vb(8,"p",5),b.Jc(9," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&b.mc("selectedIndex",e.currentIndex)},directives:[o.a,r.a,u.a,g.a],styles:[".tab__content[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]     .nx-tab-header{justify-content:flex-start!important}"]}),t})();var A=n("wxmd"),$=n("+vaC");function N(t,e){1&t&&(b.Qb(0,"nx-icon",4),b.Jc(1," Documents "))}function z(t,e){1&t&&(b.Qb(0,"nx-icon",5),b.Jc(1," Users "))}function j(t,e){1&t&&(b.Qb(0,"nx-icon",6),b.Jc(1," Settings "))}let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-template-example"]],decls:11,vars:1,consts:[[3,"selectedIndex","selectedIndexChange"],["nxTabLabel",""],[1,"tab__content"],["disabled","true"],["name","file-text","size","s","aria-hidden","true"],["name","users","size","s","aria-hidden","true"],["name","setting","size","s","aria-hidden","true"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.currentIndex=t}),b.Vb(1,"nx-tab"),b.Hc(2,N,2,0,"ng-template",1),b.Vb(3,"p",2),b.Jc(4,"Tab content 1."),b.Ub(),b.Ub(),b.Vb(5,"nx-tab"),b.Hc(6,z,2,0,"ng-template",1),b.Vb(7,"p",2),b.Jc(8,"Tab content 2."),b.Ub(),b.Ub(),b.Vb(9,"nx-tab",3),b.Hc(10,j,2,0,"ng-template",1),b.Ub(),b.Ub()),2&t&&b.mc("selectedIndex",e.currentIndex)},directives:[o.a,r.a,A.a,$.a],styles:["nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),t})();var W=n("2XWH");function X(t,e){if(1&t&&(b.Vb(0,"nx-indicator"),b.Jc(1),b.Ub()),2&t){const t=b.gc(2).$implicit,e=b.gc();b.Eb("aria-label",e.getAriaLabel(t.notificationCount)),b.Db(1),b.Kc(e.getIndicatorText(t.notificationCount))}}function E(t,e){if(1&t&&(b.Vb(0,"span",4),b.Jc(1),b.Hc(2,X,2,2,"nx-indicator",5),b.Ub()),2&t){const t=b.gc().$implicit;b.Db(1),b.Lc(" ",t.label," "),b.Db(1),b.mc("ngIf",t.notification)}}function K(t,e){if(1&t&&(b.Vb(0,"nx-tab"),b.Hc(1,E,3,2,"ng-template",2),b.Vb(2,"p",3),b.Jc(3),b.Ub(),b.Ub()),2&t){const t=e.$implicit;b.Db(3),b.Lc("Content of ",t.label,"")}}let Q=(()=>{class t{constructor(){this.tabs=[{label:"First tab",notification:!1},{label:"Second tab",notification:!0},{label:"Third tab",notification:!0,notificationCount:2},{label:"Fourth tab",notification:!0,notificationCount:105}]}setSelectedTab(t){let e=this.tabs[t];e.notification=!1,e.notificationCount&&(e.notificationCount=0)}getIndicatorText(t){return t?t>99?"99+":t:""}getAriaLabel(t){return t?t>99?"more than 99 new notifications available":t+" new notifications available":"new notifications available"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-with-indicator-example"]],decls:2,vars:1,consts:[["appearance","expert",3,"selectedIndexChange"],[4,"ngFor","ngForOf"],["nxTabLabel",""],[1,"nx-margin-top-s"],[1,"tab-header-content"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-group",0),b.cc("selectedIndexChange",function(t){return e.setSelectedTab(t)}),b.Hc(1,K,4,1,"nx-tab",1),b.Ub()),2&t&&(b.Db(1),b.mc("ngForOf",e.tabs))},directives:[o.a,f.p,r.a,A.a,f.q,W.a],styles:[".tab-header-content[_ngcontent-%COMP%]{position:relative;display:inline-block}nx-indicator[_ngcontent-%COMP%]{position:absolute;top:0;left:100%}nx-indicator[_ngcontent-%COMP%]:not(:empty){top:-4px}"]}),t})();function G(t,e){if(1&t&&(b.Vb(0,"nx-indicator"),b.Jc(1),b.Ub()),2&t){const t=b.gc().$implicit,e=b.gc();b.Eb("aria-label",e.getAriaLabel(t.notificationCount)),b.Db(1),b.Kc(t.notificationCount)}}function R(t,e){if(1&t){const t=b.Wb();b.Vb(0,"a",2),b.cc("click",function(){b.xc(t);const n=e.$implicit;return b.gc().setActiveLink(n)}),b.Vb(1,"span",3),b.Jc(2),b.Hc(3,G,2,2,"nx-indicator",4),b.Ub(),b.Ub()}if(2&t){const t=e.$implicit,n=b.gc();b.mc("active",n.currentLink.label===t.label)("routerLink",t.path),b.Db(2),b.Lc(" ",t.label," "),b.Db(1),b.mc("ngIf",t.notification)}}let Y=(()=>{class t{constructor(){this.links=[{label:"First tab",path:"...",notification:!1},{label:"Second tab",path:"...",notification:!0},{label:"Third tab",path:"...",notification:!0,notificationCount:5}],this.currentLink=this.links[0]}setActiveLink(t){this.currentLink=t,this.currentLink.notification=!1,this.currentLink.notificationCount&&(this.currentLink.notificationCount=0)}getAriaLabel(t){return t?t+" new notifications available":"new notifications available"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["tabs-nav-bar-with-indicator-example"]],decls:2,vars:1,consts:[["appearance","expert"],["nxTabLink","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["nxTabLink","",3,"active","routerLink","click"],[1,"link-content"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Vb(0,"nx-tab-nav-bar",0),b.Hc(1,R,4,4,"a",1),b.Ub()),2&t&&(b.Db(1),b.mc("ngForOf",e.links))},directives:[C.b,f.p,c.h,C.a,f.q,W.a],styles:[".tab-header-content[_ngcontent-%COMP%]{position:relative}nx-indicator[_ngcontent-%COMP%]{position:absolute;top:0;left:100%}nx-indicator[_ngcontent-%COMP%]:not(:empty){top:-4px}"]}),t})();var Z=n("ierq");let tt=(()=>{class t{static components(){return{"tabs-appearance":l,"tabs-auto-manual-select":d,"tabs-basic":m,"tabs-disabled":x,"tabs-dynamic":v,"tabs-injection-token":V,"tabs-lazy":J,"tabs-nav-bar":w,"tabs-nav-bar-appearance":I,"tabs-nav-bar-injection-token":T,"tabs-negative":S,"tabs-output-events":D,"tabs-responsive":H,"tabs-styling":q,"tabs-template":B,"tabs-with-indicator":Q,"tabs-nav-bar-with-indicator":Y}}}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(e){return new(e||t)},imports:[[i.b,c.i,a.c,s.a,Z.a]]}),t})()},LktG:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n("fXoL");const c=["nxCopytext",""],i=["*"];let s=(()=>{class t{constructor(){this.type="normal",this.negative=!1}set classNames(t){if(this._classNames===t)return;this._classNames=t;const[e=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=e,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Jb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,e){2&t&&a.Hb("nx-copy",!0)("nx-copy--small","small"===e.type)("nx-copy--medium","medium"===e.type)("nx-copy--normal","normal"===e.type)("nx-copy--large","large"===e.type)("nx-copy--negative",e.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:c,ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t})()},ierq:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n("tgBs"),c=n("/sJ9"),i=n("eV8M"),s=n("gkbm"),b=n("ofXK"),o=n("3Pt+"),r=n("fXoL");let l=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[],b.c,o.k,o.v,s.b,i.a,c.a,a.a]}),t})()}}]);