"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9243],{9243:(v,c,t)=>{t.r(c),t.d(c,{ViewportExamplesModule:()=>b});var l=t(9808),r=t(325),s=t(5955),p=t(9209),u=t(4091),m=t(5423),e=t(5e3);const f=["sidebar"];function g(n,i){if(1&n&&(e.TgZ(0,"button",3),e._UZ(1,"nx-icon",4),e._uU(2),e.qZA()),2&n){const o=i.$implicit;e.Q6J("queryParams",o.query),e.xp6(1),e.Q6J("name",o.icon),e.xp6(1),e.hij(" ",o.label," ")}}let d=(()=>{class n{constructor(o){this.viewportService=o,this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}],this.viewportServiceSubscription=this.viewportService.min(m.Yz.BREAKPOINT_MEDIUM).subscribe(a=>{a&&!this.sidebar.open?this.sidebar.expand():a||this.sidebar.open&&this.sidebar.close()})}ngOnDestroy(){this.viewportServiceSubscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(m.fg))},n.\u0275cmp=e.Xpm({type:n,selectors:[["viewport-change-example"]],viewQuery:function(o,a){if(1&o&&e.Gf(f,5),2&o){let h;e.iGM(h=e.CRH())&&(a.sidebar=h.first)}},decls:6,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(o,a){1&o&&(e._uU(0,"Change the size of the window in order to see how this side navigation is closed\nand expanded according to the viewport:\n"),e._UZ(1,"br")(2,"br"),e.TgZ(3,"nx-sidebar",0,1),e.YNc(5,g,3,3,"button",2),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngForOf",a.actions))},directives:[u.tI,l.sg,s.Ng,r.rH,r.Od,p.O8,s.DQ],styles:[""]}),n})(),b=(()=>{class n{static components(){return{"viewport-change":d}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.kL,p.cf,r.Bz,l.ez,s.g3]]}),n})()}}]);