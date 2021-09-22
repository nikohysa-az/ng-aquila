!function(){"use strict";function t(t,o){for(var l=0;l<o.length;l++){var e=o[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(o,l,e){return l&&t(o.prototype,l),e&&t(o,e),o}function l(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[5227],{85227:function(t,e,n){n.r(e),n.d(e,{TooltipExamplesModule:function(){return Z}});var i,a=n(79661),s=n(38583),c=n(85066),p=n(72565),r=n(92967),f=n(37716),u=n(43403),b=n(54881),m=((i=function t(){l(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f.Xpm({type:i,selectors:[["tooltip-basic-example"]],decls:2,vars:0,consts:[["type","active","nxTooltip","This message gets displayed in a tooltip"]],template:function(t,o){1&t&&(f.TgZ(0,"nx-badge",0),f._uU(1," I have a tooltip\n"),f.qZA())},directives:[u.Q,b.A2],styles:[""]}),i),g=n(90722),d=function(){var t=function t(){l(this,t)};return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-delay-example"]],decls:2,vars:2,consts:[["nxButton","","nxTooltip","This message appears after 1 second","type","button",3,"nxTooltipShowDelay","nxTooltipHideDelay"]],template:function(t,o){1&t&&(f.TgZ(0,"button",0),f._uU(1," Delayed tooltip\n"),f.qZA()),2&t&&f.Q6J("nxTooltipShowDelay",1e3)("nxTooltipHideDelay",1500)},directives:[g.X,b.A2],styles:[""]}),t}(),y=function(){var t=function(){function t(){l(this,t),this.disabled=!1}return o(t,[{key:"toggle",value:function(){this.disabled=!this.disabled}}]),t}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-disabled-example"]],decls:4,vars:2,consts:[["nxButton","small secondary","type","button",1,"nx-margin-bottom-s",3,"click"],["nxButton","","nxTooltip","This is a tooltip","type","button",3,"nxTooltipDisabled"]],template:function(t,o){1&t&&(f.TgZ(0,"button",0),f.NdJ("click",function(){return o.toggle()}),f._uU(1),f.qZA(),f.TgZ(2,"button",1),f._uU(3," I have a tooltip\n"),f.qZA()),2&t&&(f.xp6(1),f.hij(" ",o.disabled?"en":"dis","able tooltip\n"),f.xp6(1),f.Q6J("nxTooltipDisabled",o.disabled))},directives:[g.X,b.A2],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}button[nxButton=small][_ngcontent-%COMP%]{margin-bottom:32px}"]}),t}(),x=n(35491),k=function(){var t=function t(){l(this,t),this.data=[{nxTooltipPosition:"top",fallback1:"top-left",fallback2:"top-right",fallback3:"bottom",fallback4:"bottom-left",fallback5:"bottom-right",fallback6:"left",fallback7:"right"},{nxTooltipPosition:"bottom",fallback1:"bottom-left",fallback2:"bottom-right",fallback3:"top",fallback4:"top-left",fallback5:"top-right",fallback6:"left",fallback7:"right"},{nxTooltipPosition:"left",fallback1:"right",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"},{nxTooltipPosition:"right",fallback1:"left",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"}],this.displayedColumns=[{title:"nxTooltipPosition",key:"nxTooltipPosition",type:"string"},{title:"fallback\xa01",key:"fallback1",type:"string"},{title:"fallback\xa02",key:"fallback2",type:"string"},{title:"fallback\xa03",key:"fallback3",type:"string"},{title:"fallback\xa04",key:"fallback4",type:"string"},{title:"fallback\xa05",key:"fallback5",type:"string"},{title:"fallback\xa06",key:"fallback6",type:"string"},{title:"fallback\xa07",key:"fallback7",type:"string"}]};return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-fallbacks-table-example"]],decls:1,vars:2,consts:[[3,"nxData","nxDisplayedColumns"]],template:function(t,o){1&t&&f._UZ(0,"nx-dynamic-table",0),2&t&&f.Q6J("nxData",o.data)("nxDisplayedColumns",o.displayedColumns)},directives:[x.g],styles:[".nx-table__header-cell,   .nx-table__cell{padding:12px!important}"]}),t}();function h(t,o){if(1&t&&(f.ynx(0),f.TgZ(1,"nx-badge",1),f._uU(2),f.qZA(),f.BQk()),2&t){var l=o.$implicit;f.xp6(1),f.Q6J("nxTooltipPosition",l)("nxTooltip","This tooltip is on the "+l),f.xp6(1),f.hij(" ",l," ")}}var v=function(){var t=function t(){l(this,t),this.positions=["top","right","bottom","left"]};return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-positions-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["type","active",3,"nxTooltipPosition","nxTooltip"]],template:function(t,o){1&t&&f.YNc(0,h,3,3,"ng-container",0),2&t&&f.Q6J("ngForOf",o.positions)},directives:[s.sg,u.Q,b.A2],styles:["[_nghost-%COMP%]{display:flex;margin:0 -16px;align-items:flex-start;flex-wrap:wrap}nx-badge[_ngcontent-%COMP%]{margin:16px;flex-shrink:0}"]}),t}(),T=function(){var t=function(){function t(){l(this,t)}return o(t,[{key:"toggle",value:function(){this.tooltip.toggle()}}]),t}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-programmatic-example"]],viewQuery:function(t,o){var l;(1&t&&f.Gf(p.A2,7),2&t)&&(f.iGM(l=f.CRH())&&(o.tooltip=l.first))},decls:4,vars:0,consts:[["nxButton","small secondary","type","button",1,"nx-margin-bottom-s",3,"click"],["type","active","nxTooltip","This tooltip is controlled by a button"]],template:function(t,o){1&t&&(f.TgZ(0,"button",0),f.NdJ("click",function(){return o.toggle()}),f._uU(1," toggle tooltip "),f.qZA(),f.TgZ(2,"nx-badge",1),f._uU(3," I have a tooltip\n"),f.qZA())},directives:[g.X,u.Q,b.A2],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}button[nxButton=small][_ngcontent-%COMP%]{margin-bottom:32px}"]}),t}(),_={position:"right",showDelay:500,hideDelay:0,touchendHideDelay:1500},w=function(){var t=function t(){l(this,t)};return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["tooltip-settings-example"]],features:[f._Bn([{provide:p.rm,useValue:_}])],decls:2,vars:0,consts:[["type","active","nxTooltip","This is a tooltip"]],template:function(t,o){1&t&&(f.TgZ(0,"nx-badge",0),f._uU(1," I have a tooltip\n"),f.qZA())},directives:[u.Q,b.A2],styles:[""]}),t}(),Z=function(){var t=function(){function t(){l(this,t)}return o(t,null,[{key:"components",value:function(){return{"tooltip-basic":m,"tooltip-delay":d,"tooltip-disabled":y,"tooltip-fallbacks-table":k,"tooltip-positions":v,"tooltip-programmatic":T,"tooltip-settings":w}}}]),t}();return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[p.K$,c.f,s.ez,a.ru,r.m]]}),t}()}}])}();