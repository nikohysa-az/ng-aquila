!function(){function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function e(o,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function n(o,n,r){return n&&e(o.prototype,n),r&&e(o,r),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"+62R":function(e,r,t){"use strict";t.r(r),t.d(r,"PopoverExamplesModule",function(){return R});var i,l,c,a=t("iWzP"),p=t("mN63"),s=t("gkbm"),g=t("+Gny"),b=t("fXoL"),u=t("LTpZ"),v=t("eSmh"),m=t("gt5x"),f=((l=function(){function e(){o(this,e),this.closeOnDocClick=!0,this.popoverManualOpenFlag=!1}return n(e,[{key:"closeOnClickOutside",value:function(){this.closeOnDocClick=!this.closeOnDocClick}}]),e}()).\u0275fac=function(o){return new(o||l)},l.\u0275cmp=b.Jb({type:l,selectors:[["popover-click-outside-example"]],decls:18,vars:6,consts:[[1,"nx-margin-top-0"],["nxButton","primary small","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"nxPopoverTriggerFor","closeOnClickOutside"],["popoverClick",""],["nxButton","primary small","nxPopoverDirection","top","nxPopoverTrigger","manual","type","button",1,"nx-margin-bottom-s",3,"nxPopoverTriggerFor","nxPopoverShow","closeOnClickOutside","nxPopoverShowChange","click"],["popoverTrigger","nxPopoverTrigger"],["popoverManual",""],["nxButton","secondary small","type","button",3,"click"]],template:function(o,e){if(1&o&&(b.Vb(0,"p",0),b.Jc(1),b.Ub(),b.Vb(2,"button",1),b.Jc(3," Click\n"),b.Ub(),b.Vb(4,"nx-popover",null,2),b.Vb(6,"span"),b.Jc(7,"Trigger by click"),b.Ub(),b.Ub(),b.Vb(8,"button",3,4),b.cc("nxPopoverShowChange",function(o){return e.popoverManualOpenFlag=o})("click",function(){return e.popoverManualOpenFlag=!e.popoverManualOpenFlag}),b.Jc(10," Manual\n"),b.Ub(),b.Vb(11,"nx-popover",null,5),b.Vb(13,"span"),b.Jc(14,"Trigger manually"),b.Ub(),b.Ub(),b.Qb(15,"br"),b.Vb(16,"button",6),b.cc("click",function(){return e.closeOnClickOutside()}),b.Jc(17,"Toggle closing on click outside"),b.Ub()),2&o){var n=b.tc(5),r=b.tc(12);b.Db(1),b.Lc("Close on document click: ",e.closeOnDocClick,""),b.Db(1),b.mc("nxPopoverTriggerFor",n)("closeOnClickOutside",e.closeOnDocClick),b.Db(6),b.mc("nxPopoverTriggerFor",r)("nxPopoverShow",e.popoverManualOpenFlag)("closeOnClickOutside",e.closeOnDocClick)}},directives:[u.a,v.a,m.a],styles:[""]}),l),x=((i=function e(){o(this,e)}).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=b.Jb({type:i,selectors:[["popover-custom-example"]],decls:5,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverCustomContent",""],["src","docs-assets/images/adli-wahid-eagle-unsplash.jpg","alt","An eagle sitting on a branch and thinking. Photo made by Adli Wahid",1,"popover-demo__img"]],template:function(o,e){if(1&o&&(b.Vb(0,"button",0),b.Jc(1," Click\n"),b.Ub(),b.Vb(2,"nx-popover",null,1),b.Qb(4,"img",2),b.Ub()),2&o){var n=b.tc(3);b.mc("nxPopoverTriggerFor",n)}},directives:[u.a,v.a,m.a],styles:[".popover-demo__img[_ngcontent-%COMP%]{width:200px;height:160px}"]}),i),d=t("u47x"),h=t("+vaC"),k=["hoverTriggerIcon"],y=((c=function(){function e(n){o(this,e),this._focusMonitor=n,this.popoverManualOpenFlag=!1}return n(e,[{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._hoverTriggerIcon)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._hoverTriggerIcon)}}]),e}()).\u0275fac=function(o){return new(o||c)(b.Pb(d.g))},c.\u0275cmp=b.Jb({type:c,selectors:[["popover-hover-example"]],viewQuery:function(o,e){var n;1&o&&b.Nc(k,1),2&o&&b.sc(n=b.dc())&&(e._hoverTriggerIcon=n.first)},decls:5,vars:1,consts:[["name","refresh","size","s","nxPopoverDirection","top","nxPopoverTrigger","hover","tabindex","0","role","button","aria-label","progress",3,"nxPopoverTriggerFor"],["hoverTriggerIcon",""],["progress",""]],template:function(o,e){if(1&o&&(b.Qb(0,"nx-icon",0,1),b.Vb(2,"nx-popover",null,2),b.Jc(4," Your application status is in progress.\n"),b.Ub()),2&o){var n=b.tc(3);b.mc("nxPopoverTriggerFor",n)}},directives:[h.a,v.a,m.a],styles:["nx-icon.cdk-mouse-focused[_ngcontent-%COMP%]{outline:none}"]}),c),P=t("Bt75");function T(o,e){1&o&&b.Qb(0,"img",3)}var V,U,C,_,J,w,F,O,D=((J=function e(){o(this,e)}).\u0275fac=function(o){return new(o||J)},J.\u0275cmp=b.Jb({type:J,selectors:[["popover-lazyload-example"]],decls:5,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverCustomLazyloadedContent",""],["nxPopoverContent",""],["src","docs-assets/images/adli-wahid-eagle-unsplash-large.jpg","alt","An eagle sitting on a branch and thinking. Photo made by Adli Wahid",1,"popover-demo__img"]],template:function(o,e){if(1&o&&(b.Vb(0,"button",0),b.Jc(1,"click\n"),b.Ub(),b.Vb(2,"nx-popover",null,1),b.Hc(4,T,1,0,"ng-template",2),b.Ub()),2&o){var n=b.tc(3);b.mc("nxPopoverTriggerFor",n)}},directives:[u.a,v.a,m.a,P.a],styles:[".popover-demo__img[_ngcontent-%COMP%]{width:200px;height:160px}"]}),J),M=((_=function e(){o(this,e)}).\u0275fac=function(o){return new(o||_)},_.\u0275cmp=b.Jb({type:_,selectors:[["popover-modal-example"]],decls:6,vars:1,consts:[["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","nxPopoverModal","true",3,"nxPopoverTriggerFor"],["modalPopover",""]],template:function(o,e){if(1&o&&(b.Vb(0,"button",0),b.Jc(1," Modal popover\n"),b.Ub(),b.Vb(2,"nx-popover",null,1),b.Vb(4,"span"),b.Jc(5,"Modal popover"),b.Ub(),b.Ub()),2&o){var n=b.tc(3);b.mc("nxPopoverTriggerFor",n)}},directives:[u.a,v.a,m.a],styles:[""]}),_),S=((C=function e(){o(this,e)}).\u0275fac=function(o){return new(o||C)},C.\u0275cmp=b.Jb({type:C,selectors:[["popover-positioning-example"]],decls:24,vars:4,consts:[["nxButton","primary small","nxPopoverDirection","top","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverTopAnchor",""],["nxButton","primary small","nxPopoverDirection","right","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverRightAnchor",""],["nxButton","primary small","nxPopoverDirection","bottom","nxPopoverTrigger","click","type","button",1,"nx-margin-right-2xs",3,"nxPopoverTriggerFor"],["popoverBottomAnchor",""],["nxButton","primary small","nxPopoverDirection","left","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverLeftAnchor",""]],template:function(o,e){if(1&o&&(b.Vb(0,"button",0),b.Jc(1," Top\n"),b.Ub(),b.Vb(2,"nx-popover",null,1),b.Vb(4,"span"),b.Jc(5,"A popover pointing to the top side of the target"),b.Ub(),b.Ub(),b.Vb(6,"button",2),b.Jc(7," Right\n"),b.Ub(),b.Vb(8,"nx-popover",null,3),b.Vb(10,"span"),b.Jc(11,"A popover pointing right side of the target"),b.Ub(),b.Ub(),b.Vb(12,"button",4),b.Jc(13," Bottom\n"),b.Ub(),b.Vb(14,"nx-popover",null,5),b.Vb(16,"span"),b.Jc(17,"A popover pointing bottom side of the target"),b.Ub(),b.Ub(),b.Vb(18,"button",6),b.Jc(19," Left\n"),b.Ub(),b.Vb(20,"nx-popover",null,7),b.Vb(22,"span"),b.Jc(23,"A popover pointing bottom side of the target"),b.Ub(),b.Ub()),2&o){var n=b.tc(3),r=b.tc(9),t=b.tc(15),i=b.tc(21);b.mc("nxPopoverTriggerFor",n),b.Db(6),b.mc("nxPopoverTriggerFor",r),b.Db(6),b.mc("nxPopoverTriggerFor",t),b.Db(6),b.mc("nxPopoverTriggerFor",i)}},directives:[u.a,v.a,m.a],styles:[""]}),C),I=((U=function e(){o(this,e)}).\u0275fac=function(o){return new(o||U)},U.\u0275cmp=b.Jb({type:U,selectors:[["popover-scroll-example"]],decls:17,vars:2,consts:[["cdkScrollable","",1,"popover-demo__scroll-panel"],["nxButton","primary small","nxPopoverScrollStrategy","close","nxPopoverTrigger","click","type","button",1,"nx-margin-bottom-s",3,"nxPopoverTriggerFor"],["popoverStrategyClose",""],["nxButton","primary small","nxPopoverScrollStrategy","reposition","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverStrategyReposition",""]],template:function(o,e){if(1&o&&(b.Vb(0,"span",0),b.Vb(1,"p"),b.Jc(2,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Ub(),b.Vb(3,"div"),b.Vb(4,"button",1),b.Jc(5," Click "),b.Ub(),b.Vb(6,"nx-popover",null,2),b.Vb(8,"span"),b.Jc(9,"Close"),b.Ub(),b.Ub(),b.Qb(10,"br"),b.Vb(11,"button",3),b.Jc(12," Click "),b.Ub(),b.Vb(13,"nx-popover",null,4),b.Vb(15,"span"),b.Jc(16,"Reposition"),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&o){var n=b.tc(7),r=b.tc(14);b.Db(4),b.mc("nxPopoverTriggerFor",n),b.Db(7),b.mc("nxPopoverTriggerFor",r)}},directives:[u.a,v.a,m.a],styles:[".popover-demo__scroll-panel[_ngcontent-%COMP%]{border:1px solid;overflow:scroll;width:200px;height:150px;display:flex;justify-content:center;align-items:center;padding:10px;margin-right:20px}"]}),U),B=((V=function e(){o(this,e)}).\u0275fac=function(o){return new(o||V)},V.\u0275cmp=b.Jb({type:V,selectors:[["popover-scrollable-example"]],decls:19,vars:2,consts:[[2,"display","flex"],[1,"popover-demo__scroll-panel"],["nxButton","primary small","nxPopoverTrigger","click","type","button",3,"nxPopoverTriggerFor"],["popoverScroll",""],["cdkScrollable","",1,"popover-demo__scroll-panel"],["popoverScroll2",""]],template:function(o,e){if(1&o&&(b.Vb(0,"div",0),b.Vb(1,"span",1),b.Vb(2,"p"),b.Jc(3,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Ub(),b.Vb(4,"button",2),b.Jc(5," Click "),b.Ub(),b.Vb(6,"nx-popover",null,3),b.Vb(8,"span"),b.Jc(9,"Scroll"),b.Ub(),b.Ub(),b.Ub(),b.Vb(10,"span",4),b.Vb(11,"p"),b.Jc(12,"sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),b.Ub(),b.Vb(13,"button",2),b.Jc(14," Click "),b.Ub(),b.Vb(15,"nx-popover",null,5),b.Vb(17,"span"),b.Jc(18,"Scroll"),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&o){var n=b.tc(7),r=b.tc(16);b.Db(4),b.mc("nxPopoverTriggerFor",n),b.Db(9),b.mc("nxPopoverTriggerFor",r)}},directives:[u.a,v.a,m.a],styles:[".popover-demo__scroll-panel[_ngcontent-%COMP%]{border:1px solid;overflow:scroll;width:200px;height:150px;display:flex;justify-content:center;align-items:center;padding:10px;margin-right:20px}"]}),V),A=t("xWuV"),Q=((w=function e(){o(this,e),this.data=[{nxDirection:"top",fallback1:"top-left",fallback2:"top-right",fallback3:"bottom",fallback4:"bottom-left",fallback5:"bottom-right",fallback6:"left",fallback7:"right"},{nxDirection:"bottom",fallback1:"bottom-left",fallback2:"bottom-right",fallback3:"top",fallback4:"top-left",fallback5:"top-right",fallback6:"left",fallback7:"right"},{nxDirection:"left",fallback1:"right",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"},{nxDirection:"right",fallback1:"left",fallback2:"bottom",fallback3:"bottom-left",fallback4:"bottom-right",fallback5:"top",fallback6:"top-left",fallback7:"top-right"}],this.displayedColumns=[{title:"nxDirection",key:"nxDirection",type:"string"},{title:"fallback\xa01",key:"fallback1",type:"string"},{title:"fallback\xa02",key:"fallback2",type:"string"},{title:"fallback\xa03",key:"fallback3",type:"string"},{title:"fallback\xa04",key:"fallback4",type:"string"},{title:"fallback\xa05",key:"fallback5",type:"string"},{title:"fallback\xa06",key:"fallback6",type:"string"},{title:"fallback\xa07",key:"fallback7",type:"string"}]}).\u0275fac=function(o){return new(o||w)},w.\u0275cmp=b.Jb({type:w,selectors:[["popover-table-example"]],decls:1,vars:2,consts:[[3,"nxData","nxDisplayedColumns"]],template:function(o,e){1&o&&b.Qb(0,"nx-dynamic-table",0),2&o&&b.mc("nxData",e.data)("nxDisplayedColumns",e.displayedColumns)},directives:[A.a],styles:[".nx-table__cell,   .nx-table__header-cell{padding:12px!important}"]}),w),j=t("FtGj"),z=["clickTriggerIcon"],L=["manualTriggerIcon"],N=((O=function(){function e(n){o(this,e),this._focusMonitor=n,this.popoverManualOpenFlag=!1}return n(e,[{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._clickTriggerIcon),this._focusMonitor.monitor(this._manualTriggerIcon)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._clickTriggerIcon),this._focusMonitor.stopMonitoring(this._manualTriggerIcon)}},{key:"handleKeydown",value:function(o){switch(o.keyCode){case j.o:case j.f:this.popoverManualOpenFlag=!this.popoverManualOpenFlag;break;default:return}}}]),e}()).\u0275fac=function(o){return new(o||O)(b.Pb(d.g))},O.\u0275cmp=b.Jb({type:O,selectors:[["popover-trigger-example"]],viewQuery:function(o,e){var n;1&o&&(b.Nc(z,1),b.Nc(L,1)),2&o&&(b.sc(n=b.dc())&&(e._clickTriggerIcon=n.first),b.sc(n=b.dc())&&(e._manualTriggerIcon=n.first))},decls:17,vars:3,consts:[["aria-label","trigger by click","name","info-circle-o","size","s","nxPopoverTrigger","click","tabindex","0","role","button",3,"nxPopoverTriggerFor"],["clickTriggerIcon",""],["popoverClick",""],["name","info-circle-o","size","s","nxPopoverDirection","top","nxPopoverTrigger","manual","tabindex","0","aria-label","trigger manually","role","button",3,"nxPopoverTriggerFor","nxPopoverShow","nxPopoverShowChange","click","keydown"],["manualTriggerIcon","","popoverTrigger","nxPopoverTrigger"],["popoverManual",""]],template:function(o,e){if(1&o&&(b.Vb(0,"p"),b.Qb(1,"nx-icon",0,1),b.Jc(3," Triggered by click\n"),b.Ub(),b.Vb(4,"nx-popover",null,2),b.Vb(6,"span"),b.Jc(7,"Trigger by click"),b.Ub(),b.Ub(),b.Vb(8,"p"),b.Vb(9,"nx-icon",3,4),b.cc("nxPopoverShowChange",function(o){return e.popoverManualOpenFlag=o})("click",function(){return e.popoverManualOpenFlag=!e.popoverManualOpenFlag})("keydown",function(o){return e.handleKeydown(o)}),b.Ub(),b.Jc(12," Triggered manually\n"),b.Ub(),b.Vb(13,"nx-popover",null,5),b.Vb(15,"span"),b.Jc(16,"Trigger manually"),b.Ub(),b.Ub()),2&o){var n=b.tc(5),r=b.tc(14);b.Db(1),b.mc("nxPopoverTriggerFor",n),b.Db(8),b.mc("nxPopoverTriggerFor",r)("nxPopoverShow",e.popoverManualOpenFlag)}},directives:[h.a,v.a,m.a],styles:["nx-icon[_ngcontent-%COMP%]{color:var(--interactive-primary,#27abd6);vertical-align:middle;cursor:pointer}nx-icon[_ngcontent-%COMP%]:hover{color:var(--hover-primary,#3bb4db)}nx-icon.cdk-mouse-focused[_ngcontent-%COMP%]{outline:none}"]}),O),R=((F=function(){function e(){o(this,e)}return n(e,null,[{key:"components",value:function(){return{"popover-click-outside":f,"popover-custom":x,"popover-hover":y,"popover-lazyload":D,"popover-modal":M,"popover-positioning":S,"popover-scroll":I,"popover-scrollable":B,"popover-table":Q,"popover-trigger":N}}}]),e}()).\u0275mod=b.Nb({type:F}),F.\u0275inj=b.Mb({factory:function(o){return new(o||F)},imports:[[g.a,s.b,p.c,a.a]]}),F)}}])}();