"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[1232],{1232:(A,r,n)=>{n.r(r),n.d(r,{TooltipExamplesModule:()=>D});var k=n(5957),f=n(9808),h=n(5066),c=n(4172),C=n(2967),t=n(5e3),p=n(3403),i=n(4881);let x=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-basic-example"]],decls:2,vars:0,consts:[["type","active","nxTooltip","This message gets displayed in a tooltip"]],template:function(l,a){1&l&&(t.TgZ(0,"nx-badge",0),t._uU(1," I have a tooltip\n"),t.qZA())},directives:[p.Q,i.A2],styles:[""]}),o})();var m=n(722);let b=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-delay-example"]],decls:2,vars:2,consts:[["nxButton","","nxTooltip","This message appears after 1 second","type","button",3,"nxTooltipShowDelay","nxTooltipHideDelay"]],template:function(l,a){1&l&&(t.TgZ(0,"button",0),t._uU(1," Delayed tooltip\n"),t.qZA()),2&l&&t.Q6J("nxTooltipShowDelay",1e3)("nxTooltipHideDelay",1500)},directives:[m.X,i.A2],styles:[""]}),o})(),d=(()=>{class o{constructor(){this.disabled=!1}toggle(){this.disabled=!this.disabled}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-disabled-example"]],decls:4,vars:2,consts:[["nxButton","small secondary","type","button",1,"nx-margin-bottom-s",3,"click"],["nxButton","","nxTooltip","This is a tooltip","type","button",3,"nxTooltipDisabled"]],template:function(l,a){1&l&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.toggle()}),t._uU(1),t.qZA(),t.TgZ(2,"button",1),t._uU(3," I have a tooltip\n"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",a.disabled?"en":"dis","able tooltip\n"),t.xp6(1),t.Q6J("nxTooltipDisabled",a.disabled))},directives:[m.X,i.A2],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}button[nxButton=small][_ngcontent-%COMP%]{margin-bottom:32px}"]}),o})();var E=n(6671);let u=(()=>{class o{constructor(){this.data=[{nxTooltipPosition:"top",fallback1:"top-left",fallback2:"top-right",fallback3:"bottom",fallback4:"bottom-left",fallback5:"bottom-right",fallback6:"left",fallback7:"right"},{nxTooltipPosition:"bottom",fallback1:"bottom-left",fallback2:"bottom-right",fallback3:"top",fallback4:"top-left",fallback5:"top-right",fallback6:"left",fallback7:"right"},{nxTooltipPosition:"left",fallback1:"right",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"},{nxTooltipPosition:"right",fallback1:"left",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"}],this.displayedColumns=[{title:"nxTooltipPosition",key:"nxTooltipPosition",type:"string"},{title:"fallback\xa01",key:"fallback1",type:"string"},{title:"fallback\xa02",key:"fallback2",type:"string"},{title:"fallback\xa03",key:"fallback3",type:"string"},{title:"fallback\xa04",key:"fallback4",type:"string"},{title:"fallback\xa05",key:"fallback5",type:"string"},{title:"fallback\xa06",key:"fallback6",type:"string"},{title:"fallback\xa07",key:"fallback7",type:"string"}]}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-fallbacks-table-example"]],decls:1,vars:2,consts:[[3,"nxData","nxDisplayedColumns"]],template:function(l,a){1&l&&t._UZ(0,"nx-dynamic-table",0),2&l&&t.Q6J("nxData",a.data)("nxDisplayedColumns",a.displayedColumns)},directives:[E.g],styles:[".nx-table__header-cell,   .nx-table__cell{padding:12px!important}"]}),o})();function v(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"nx-badge",1),t._uU(2),t.qZA(),t.BQk()),2&o){const l=e.$implicit;t.xp6(1),t.Q6J("nxTooltipPosition",l)("nxTooltip","This tooltip is on the "+l),t.xp6(1),t.hij(" ",l," ")}}let g=(()=>{class o{constructor(){this.positions=["top","right","bottom","left"]}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-positions-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["type","active",3,"nxTooltipPosition","nxTooltip"]],template:function(l,a){1&l&&t.YNc(0,v,3,3,"ng-container",0),2&l&&t.Q6J("ngForOf",a.positions)},directives:[f.sg,p.Q,i.A2],styles:["[_nghost-%COMP%]{display:flex;margin:0 -16px;align-items:flex-start;flex-wrap:wrap}nx-badge[_ngcontent-%COMP%]{margin:16px;flex-shrink:0}"]}),o})(),T=(()=>{class o{toggle(){this.tooltip.toggle()}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-programmatic-example"]],viewQuery:function(l,a){if(1&l&&t.Gf(c.A2,7),2&l){let s;t.iGM(s=t.CRH())&&(a.tooltip=s.first)}},decls:4,vars:0,consts:[["nxButton","small secondary","type","button",1,"nx-margin-bottom-s",3,"click"],["type","active","nxTooltip","This tooltip is controlled by a button"]],template:function(l,a){1&l&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.toggle()}),t._uU(1," toggle tooltip\n"),t.qZA(),t.TgZ(2,"nx-badge",1),t._uU(3," I have a tooltip\n"),t.qZA())},directives:[m.X,p.Q,i.A2],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}button[nxButton=small][_ngcontent-%COMP%]{margin-bottom:32px}"]}),o})();const P={position:"right",showDelay:500,hideDelay:0,touchendHideDelay:1500};let y=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tooltip-settings-example"]],features:[t._Bn([{provide:c.rm,useValue:P}])],decls:2,vars:0,consts:[["type","active","nxTooltip","This is a tooltip"]],template:function(l,a){1&l&&(t.TgZ(0,"nx-badge",0),t._uU(1," I have a tooltip\n"),t.qZA())},directives:[p.Q,i.A2],styles:[""]}),o})(),D=(()=>{class o{static components(){return{"tooltip-basic":x,"tooltip-delay":b,"tooltip-disabled":d,"tooltip-fallbacks-table":u,"tooltip-positions":g,"tooltip-programmatic":T,"tooltip-settings":y}}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.K$,h.f,f.ez,k.ru,C.m]]}),o})()}}]);