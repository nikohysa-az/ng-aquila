"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[5412],{85412:function(n,t,e){e.r(t),e.d(t,{ActionExamplesModule:function(){return y}});var i=e(38583),c=e(42677),o=e(63423),l=e(94203),a=e(1429),s=e(37716),r=e(79719),u=e(90805),f=e(1978);function d(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"button",1),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().onSelect(t)}),s._UZ(1,"nx-icon",2),s._uU(2),s.qZA()}if(2&n){const n=t.$implicit,e=s.oxw();s.Q6J("selected",n===e.selectedAction),s.xp6(1),s.Q6J("name",n.icon),s.xp6(1),s.hij(" ",n.label,"\n")}}let p=(()=>{class n{constructor(){this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}ngOnInit(){this.selectedAction=this.actions[1]}onSelect(n){this.selectedAction=n}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(n,t){1&n&&s.YNc(0,d,3,3,"button",0),2&n&&s.Q6J("ngForOf",t.actions)},directives:[i.sg,r.N,u.O,f.D],styles:[""]}),n})();function x(n,t){if(1&n&&(s.TgZ(0,"button",1),s._UZ(1,"nx-icon",2),s._uU(2),s.qZA()),2&n){const n=t.$implicit;s.Q6J("queryParams",n.query),s.xp6(1),s.Q6J("name",n.icon),s.xp6(1),s.hij(" ",n.label,"\n")}}let m=(()=>{class n{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(n,t){1&n&&s.YNc(0,x,3,3,"button",0),2&n&&s.Q6J("ngForOf",t.actions)},directives:[i.sg,r.N,o.rH,o.Od,u.O,f.D],styles:[""]}),n})();var b=e(18257);function A(n,t){if(1&n&&(s.TgZ(0,"nx-indicator",5),s._uU(1),s.qZA()),2&n){const n=s.oxw().$implicit,t=s.oxw();s.uIk("aria-label",t.getAriaLabel(n.notificationCount)),s.xp6(1),s.Oqu(t.getIndicatorText(n.notificationCount))}}function g(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"button",1),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().onSelect(t)}),s._UZ(1,"nx-icon",2),s.TgZ(2,"span",3),s._uU(3),s.YNc(4,A,2,2,"nx-indicator",4),s.qZA(),s.qZA()}if(2&n){const n=t.$implicit,e=s.oxw();s.Q6J("selected",n===e.selectedAction),s.xp6(1),s.Q6J("name",n.icon),s.xp6(2),s.hij(" ",n.label," "),s.xp6(1),s.Q6J("ngIf",n.notification)}}let w=(()=>{class n{constructor(){this.actions=[{icon:"file-text",label:"All Files",notification:!1},{icon:"calendar",label:"Calendar",notification:!0},{icon:"mail-o",label:"Email",notification:!0,notificationCount:105},{icon:"user-o",label:"My Profile",notification:!0,notificationCount:4},{icon:"file",label:"Recent Downloads"}],this.selectedAction=this.actions[0]}onSelect(n){this.selectedAction=n}getIndicatorText(n){return n?n>99?"99+":n:""}getAriaLabel(n){return n?`${n} new notifications available`:"new notifications available"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["action-indicator-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"],[1,"label-content"],["position","after-text",4,"ngIf"],["position","after-text"]],template:function(n,t){1&n&&s.YNc(0,g,5,4,"button",0),2&n&&s.Q6J("ngForOf",t.actions)},directives:[i.sg,r.N,u.O,f.D,i.O5,b.I],styles:[""]}),n})(),y=(()=>{class n{static components(){return{action:p,"action-with-router":m,"action-indicator":w}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[l.g3,o.Bz,c.cf,a.e,i.ez]]}),n})()}}]);