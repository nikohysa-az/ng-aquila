"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[1170],{9508:(M,b,a)=>{a.d(b,{f:()=>e});var r=a(7146),s=a(303),m=a(5552),g=a(9823),d=a(9808),l=a(3075),f=a(5e3);let e=(()=>{class c{}return c.\u0275fac=function(h){return new(h||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[],d.ez,l.u5,l.UX,g.ru,m.X,s.K,r.TW]}),c})()},1170:(M,b,a)=>{a.r(b),a.d(b,{SidebarExamplesModule:()=>F});var r=a(325),s=a(5955),m=a(9209),g=a(3412),d=a(4091),l=a(102),f=a(9508),e=a(5e3),c=a(9808),_=a(9823);function h(n,o){if(1&n&&(e.TgZ(0,"button",6),e._UZ(1,"nx-icon",7),e._uU(2),e.qZA()),2&n){const t=o.$implicit;e.Q6J("queryParams",t.query),e.xp6(1),e.Q6J("name",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}let C=(()=>{class n{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sidebar-footer-example"]],decls:7,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxIconButton","tertiary small-medium","aria-label","Open settings","nxTooltip","Open settings","type","button",1,"nx-margin-0"],["name","setting"],["nxSidebarToggle","","aria-label","Toggle sidebar","type","button"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(t,i){1&t&&(e.TgZ(0,"nx-sidebar",0,1),e.YNc(2,h,3,3,"button",2),e.TgZ(3,"nx-sidebar-footer")(4,"button",3),e._UZ(5,"nx-icon",4),e.qZA(),e._UZ(6,"button",5),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngForOf",i.actions))},directives:[d.tI,c.sg,s.Ng,r.rH,r.Od,m.O8,s.DQ,d.tF,_.p$,d.sH],styles:["[_nghost-%COMP%]{display:block;height:400px}"]}),n})();var q=a(3252),y=a(3075);function S(n,o){if(1&n&&(e.TgZ(0,"button",10),e._UZ(1,"nx-icon",11),e._uU(2),e.qZA()),2&n){const t=o.$implicit;e.Q6J("queryParams",t.query),e.xp6(1),e.Q6J("name",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}let O=(()=>{class n{constructor(){this.expandedWidth=350,this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sidebar-methods-example"]],decls:17,vars:4,consts:[["resizeable",""],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxButton","small","type","button",1,"nx-margin-bottom-s",3,"click"],["nxButton","small","type","button",3,"click"],[1,"nx-font-weight-bold","nx-margin-bottom-2xs"],[1,"resize-container"],["nxLabel","Width in px",1,"nx-margin-right-xs"],["nxInput","",3,"ngModel","ngModelChange"],["nxButton","small",1,"nx-margin-bottom-m",3,"click"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(t,i){if(1&t){const p=e.EpF();e.TgZ(0,"nx-sidebar",0,1),e.YNc(2,S,3,3,"button",2),e.qZA(),e.TgZ(3,"main")(4,"button",3),e.NdJ("click",function(){return e.CHM(p),e.MAs(1).toggle()}),e._uU(5,"toggle"),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return e.CHM(p),e.MAs(1).expand()}),e._uU(7,"expand"),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return e.CHM(p),e.MAs(1).close()}),e._uU(9,"close"),e.qZA(),e.TgZ(10,"p",5),e._uU(11,"Advanced: Expanded width"),e.qZA(),e.TgZ(12,"div",6)(13,"nx-formfield",7)(14,"input",8),e.NdJ("ngModelChange",function(u){return i.expandedWidth=u}),e.qZA()(),e.TgZ(15,"button",9),e.NdJ("click",function(){return e.CHM(p),e.MAs(1).width=i.expandedWidth}),e._uU(16,"resize"),e.qZA()()()}if(2&t){const p=e.MAs(1);e.xp6(2),e.Q6J("ngForOf",i.actions),e.xp6(4),e.uIk("disabled",p.open||null),e.xp6(2),e.uIk("disabled",!p.open||null),e.xp6(6),e.Q6J("ngModel",i.expandedWidth)}},directives:[d.tI,c.sg,s.Ng,r.rH,r.Od,m.O8,s.DQ,_.XV,q.VM,g.aP,y.Fj,y.JJ,y.On],styles:["[_nghost-%COMP%]{display:block;height:300px;display:flex}main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;flex-direction:column}.resize-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end}nx-formfield[_ngcontent-%COMP%]{width:100px}"]}),n})();function Z(n,o){if(1&n&&e._UZ(0,"nx-icon",10),2&n){const t=e.oxw().$implicit;e.Q6J("name",t.icon)}}function P(n,o){if(1&n&&(e.TgZ(0,"nx-tree-node")(1,"button",8),e.YNc(2,Z,1,1,"nx-icon",9),e._uU(3),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("title",t.label),e.Q6J("queryParams",t.query),e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}function N(n,o){if(1&n&&e._UZ(0,"nx-icon",10),2&n){const t=e.oxw().$implicit;e.Q6J("name",t.icon)}}function v(n,o){if(1&n&&(e.TgZ(0,"nx-tree-node")(1,"button",11),e.YNc(2,N,1,1,"nx-icon",9),e._uU(3),e.qZA()()),2&n){const t=o.$implicit,i=e.oxw();e.xp6(1),e.s9C("title",t.label),e.Q6J("expanded",i._treeControl.isExpanded(t)),e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}function I(n,o){if(1&n&&(e.TgZ(0,"pre"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.logMessage)}}let T=(()=>{class n{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this.messages=[],this._hasChild=(t,i)=>i.expandable,this._treeControl=new l.AI,this._dataSource=new l.L7(this._treeControl,this.navigationData)}log(t){this.messages.push("New width value: "+t),this.logMessage=this.messages.join("\n")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sidebar-outputs-example"]],decls:9,vars:4,consts:[[1,"top"],["resizeHandleAriaLabel","Toggle sidebar width","resizeable","","minWidth","140",1,"my-sidebar",3,"widthChange"],["sidebar",""],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxButton","","type","button",3,"click"],[4,"ngIf"],["nxAction","","nxTreeNodePadding","","nxTreeNodeActionItem","","nxTreeNodePaddingOffset","40","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeToggle","","nxTreeNodeActionItem","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(t,i){if(1&t){const p=e.EpF();e.TgZ(0,"div",0)(1,"nx-sidebar",1,2),e.NdJ("widthChange",function(u){return i.log(u)}),e.TgZ(3,"nx-tree",3),e.YNc(4,P,4,4,"nx-tree-node",4),e.YNc(5,v,4,4,"nx-tree-node",5),e.qZA()(),e.TgZ(6,"button",6),e.NdJ("click",function(){return e.CHM(p),e.MAs(2).toggle()}),e._uU(7,"toggle expansion"),e.qZA()(),e.YNc(8,I,2,1,"pre",7)}2&t&&(e.xp6(3),e.Q6J("dataSource",i._dataSource)("treeControl",i._treeControl),e.xp6(2),e.Q6J("nxTreeNodeDefWhen",i._hasChild),e.xp6(3),e.Q6J("ngIf",i.logMessage))},directives:[d.tI,l.CL,l.yA,l.qc,s.Ng,l.B5,l.WV,r.rH,r.Od,c.O5,m.O8,s.DQ,l.He,_.XV],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.top[_ngcontent-%COMP%]{display:flex;align-items:center}.my-sidebar[_ngcontent-%COMP%]{height:300px}button[_ngcontent-%COMP%]{margin-left:40px}"]}),n})();function J(n,o){if(1&n&&e._UZ(0,"nx-icon",6),2&n){const t=e.oxw().$implicit;e.Q6J("name",t.icon)}}function D(n,o){if(1&n&&(e.TgZ(0,"nx-tree-node")(1,"button",4),e.YNc(2,J,1,1,"nx-icon",5),e._uU(3),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("title",t.label),e.Q6J("queryParams",t.query),e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}function L(n,o){if(1&n&&e._UZ(0,"nx-icon",6),2&n){const t=e.oxw().$implicit;e.Q6J("name",t.icon)}}function Q(n,o){if(1&n&&(e.TgZ(0,"nx-tree-node")(1,"button",7),e.YNc(2,L,1,1,"nx-icon",5),e._uU(3),e.qZA()()),2&n){const t=o.$implicit,i=e.oxw();e.xp6(1),e.s9C("title",t.label),e.Q6J("expanded",i._treeControl.isExpanded(t)),e.xp6(1),e.Q6J("ngIf",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}let E=(()=>{class n{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this._hasChild=(t,i)=>i.expandable,this._treeControl=new l.AI,this._dataSource=new l.L7(this._treeControl,this.navigationData)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sidebar-resizeable-example"]],decls:4,vars:3,consts:[["resizeHandleAriaLabel","Toggle sidebar width","resizeable","","minWidth","140"],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxAction","","nxTreeNodePadding","","nxTreeNodeActionItem","","nxTreeNodePaddingOffset","40","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeToggle","","nxTreeNodeActionItem","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(t,i){1&t&&(e.TgZ(0,"nx-sidebar",0)(1,"nx-tree",1),e.YNc(2,D,4,4,"nx-tree-node",2),e.YNc(3,Q,4,4,"nx-tree-node",3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("dataSource",i._dataSource)("treeControl",i._treeControl),e.xp6(2),e.Q6J("nxTreeNodeDefWhen",i._hasChild))},directives:[d.tI,l.CL,l.yA,l.qc,s.Ng,l.B5,l.WV,r.rH,r.Od,c.O5,m.O8,s.DQ,l.He],styles:["[_nghost-%COMP%]{display:block;height:300px}"]}),n})();function U(n,o){if(1&n&&(e.TgZ(0,"button",3),e._UZ(1,"nx-icon",4),e._uU(2),e.qZA()),2&n){const t=o.$implicit;e.Q6J("queryParams",t.query),e.xp6(1),e.Q6J("name",t.icon),e.xp6(1),e.hij(" ",t.label," ")}}let A=(()=>{class n{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sidebar-example"]],decls:3,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(t,i){1&t&&(e.TgZ(0,"nx-sidebar",0,1),e.YNc(2,U,3,3,"button",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",i.actions))},directives:[d.tI,c.sg,s.Ng,r.rH,r.Od,m.O8,s.DQ],styles:["[_nghost-%COMP%]{display:block;height:300px}.my-sidebar[_ngcontent-%COMP%]{width:320px}"]}),n})(),F=(()=>{class n{static components(){return{sidebar:A,"sidebar-footer":C,"sidebar-methods":O,"sidebar-outputs":T,"sidebar-resizeable":E}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.kL,l.DG,g.ZI,m.cf,r.Bz,s.g3,f.f]]}),n})()}}]);