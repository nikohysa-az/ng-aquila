!function(){"use strict";function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[1513],{11513:function(e,i,s){s.r(i),s.d(i,{SidepanelExamplesModule:function(){return R}});var a,u=s(42677),o=s(76085),r=s(37716),p=s(39490),l=["*"],c=((a=function e(){t(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["nx-sidepanel-header"]],ngContentSelectors:l,decls:1,vars:0,template:function(e,n){1&e&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;font-size:var(--sidepanel-header-font-size);line-height:var(--sidepanel-header-line-height);font-weight:var(--sidepanel-header-font-weight);letter-spacing:var(--sidepanel-header-letter-spacing)}"],changeDetection:0}),a),d=s(17238),g={sidepanelExpansion:(0,d.X$)("sidepanelExpansion",[(0,d.SB)("closed",(0,d.oB)({transform:"translateX({{ transformX }})",boxShadow:"none",visibility:"hidden"}),{params:{transformX:"100%"}}),(0,d.SB)("open",(0,d.oB)({transform:"none",boxShadow:"*",visibility:"visible"})),(0,d.eR)("closed => open",(0,d.jt)(".4s cubic-bezier(0, 0, 0.1, 1)")),(0,d.eR)("open-instant => closed, open => closed",(0,d.jt)(".2s cubic-bezier(0.8, 0, 1, 1)"))])},Z=s(70946),m=function(e){return{transformX:e}},q=function(e,n){return{value:e,params:n}},_=["*"],h=["*",[["nx-sidepanel"]]],A=["*","nx-sidepanel"],T=function(){var e=function(){function e(n,i,s,a){t(this,e),this._changeDetectorRef=n,this._elementRef=i,this._dir=s,this._wrapper=a,this._opened=!0,this.openedChange=new r.vpe,this._position="floating",this._appearance="dark",this._openState="open-instant",this._wrapper||console.warn("NxSidepanelComponent needs a wrapping NxSidepanelOuterContainerComponent to work as expected.")}return n(e,[{key:"opened",get:function(){return this._opened},set:function(e){var n;this._opened=(0,p.Ig)(e),this._setOpenState(this._opened),null===(n=this._wrapper)||void 0===n||n._update(),this._changeDetectorRef.markForCheck()}},{key:"position",get:function(){return this._position},set:function(e){var n;this._position=e,this._changeDetectorRef.markForCheck(),null===(n=this._wrapper)||void 0===n||n._update()}},{key:"appearance",get:function(){return this._appearance},set:function(e){this._appearance=e,this._changeDetectorRef.markForCheck()}},{key:"toggle",value:function(){this.opened=!this.opened,this.openedChange.emit(this._opened)}},{key:"open",value:function(){this.opened||this.toggle()}},{key:"close",value:function(){this.opened&&this.toggle()}},{key:"_getWidth",value:function(){return this._elementRef.nativeElement.offsetWidth}},{key:"_getOpenState",value:function(){return this._openState}},{key:"_setOpenState",value:function(e){"open-instant"===this._openState&&e||(this._openState=e?"open":"closed")}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Y36(r.sBO),r.Y36(r.SBq),r.Y36(Z.Is),r.Y36(x,8))},e.\u0275cmp=r.Xpm({type:e,selectors:[["nx-sidepanel"]],contentQueries:function(e,n,t){var i;(1&e&&r.Suo(t,c,5,r.SBq),2&e)&&(r.iGM(i=r.CRH())&&(n._header=i.first))},hostAttrs:["role","complementary"],hostVars:16,hostBindings:function(e,n){2&e&&(r.d8E("@sidepanelExpansion",r.WLB(13,q,n._wrapper?n._getOpenState():"",r.VKq(11,m,"rtl"===n.dir?"-100%":"100%"))),r.ekj("is-closed",!n.opened)("is-static","static"===n.position)("is-floating","floating"===n.position)("light","light"===n.appearance)("without-wrapper",!n._wrapper))},inputs:{opened:"opened",position:"position",appearance:"appearance"},outputs:{openedChange:"openedChange"},ngContentSelectors:_,decls:1,vars:0,template:function(e,n){1&e&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:absolute;right:0;top:0;height:100%;overflow:hidden;background:var(--sidepanel-background-color)}[dir=rtl]   [_nghost-%COMP%]{right:auto;left:0}.is-floating[_nghost-%COMP%]{z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translate(100%)}[dir=rtl]   [_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translate(-100%)}.light[_nghost-%COMP%]{background:var(--sidepanel-light-background-color);border-left:1px solid var(--sidepanel-light-border-color)}[dir=rtl]   .light[_nghost-%COMP%]{border-left:unset;border-right:1px solid var(--sidepanel-light-border-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{border-left:1px solid windowText}[dir=rtl]   [_nghost-%COMP%]{border-left:none;border-right:1px solid windowText}}.without-wrapper.is-floating[_nghost-%COMP%]{position:fixed;right:0;z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[dir=rtl]   .without-wrapper.is-floating[_nghost-%COMP%]{right:auto;left:0}.without-wrapper.is-static[_nghost-%COMP%]{position:sticky;top:0}.without-wrapper.is-closed[_nghost-%COMP%]{display:none}"],data:{animation:[g.sidepanelExpansion]},changeDetection:0}),e}(),x=function(){var e=function(){function e(n,i){var s=this;t(this,e),this._dir=n,this._changeDetectorRef=i,this._dir.change.subscribe(function(){s._changeDetectorRef.markForCheck()})}return n(e,[{key:"_update",value:function(){this._changeDetectorRef.markForCheck()}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}},{key:"_getOpenState",value:function(){var e;return"static"===(null===(e=this._sidepanel)||void 0===e?void 0:e.position)?this._sidepanel._getOpenState():"closed"}},{key:"_getSidepanelWidth",value:function(){var e,n;return"static"===(null===(e=this._sidepanel)||void 0===e?void 0:e.position)&&(null===(n=this._sidepanel)||void 0===n?void 0:n.opened)?this._sidepanel._getWidth():0}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Y36(Z.Is,8),r.Y36(r.sBO))},e.\u0275cmp=r.Xpm({type:e,selectors:[["nx-sidepanel-outer-container"]],contentQueries:function(e,n,t){var i;(1&e&&r.Suo(t,T,5),2&e)&&(r.iGM(i=r.CRH())&&(n._sidepanel=i.first))},ngContentSelectors:A,decls:3,vars:8,consts:[[1,"nx-sidepanel-outer-container__content"]],template:function(e,n){1&e&&(r.F$t(h),r.TgZ(0,"div",0),r.Hsn(1),r.qZA(),r.Hsn(2,1)),2&e&&(r.Udp("margin-right","ltr"===n.dir?n._getSidepanelWidth():0,"px")("margin-left","rtl"===n.dir?n._getSidepanelWidth():0,"px"),r.ekj("with-margin","open"===n._getOpenState())("without-margin","closed"===n._getOpenState()))},styles:["[_nghost-%COMP%]{position:relative;display:block;height:100%;overflow:hidden}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;height:100%;overflow:auto}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-duration:.4s;transition-timing-function:cubic-bezier(0,0,.1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-property:margin-left}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-duration:.2s;transition-timing-function:cubic-bezier(.8,0,1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-property:margin-left}"],changeDetection:0}),e}(),f=s(4765),b=s(90805),U=["nxSidepanelCloseButton",""],v=function(){var e=function(){function e(n,i,s){t(this,e),this._sidepanel=n,this._focusMonitor=i,this._elementRef=s,this._focusMonitor.monitor(this._elementRef)}return n(e,[{key:"_toggle",value:function(){this._sidepanel.toggle()}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Y36(T),r.Y36(f.tE),r.Y36(r.SBq))},e.\u0275cmp=r.Xpm({type:e,selectors:[["button","nxSidepanelCloseButton",""]],hostBindings:function(e,n){1&e&&r.NdJ("click",function(){return n._toggle()})},attrs:U,decls:1,vars:0,consts:[["name","close","size","s","aria-hidden","true"]],template:function(e,n){1&e&&r._UZ(0,"nx-icon",0)},directives:[b.O],styles:["[_nghost-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--sidepanel-close-icon-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:buttonText}}.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),e}(),C=s(79661),y=s(38583),O=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[y.ez,u.cf,C.ru]]}),e}(),M=s(33508),P=s(33816),w=s(97817),S=s(3679),V=s(51776),k=["*"],J=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["nx-sidepanel-content"]],hostAttrs:["tabindex","0"],ngContentSelectors:k,decls:1,vars:0,template:function(e,n){1&e&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;overflow-y:scroll;height:100%}"],changeDetection:0}),e}(),F=function(){var e=function e(n,i){var s=this;t(this,e),this.viewportService=n,this._cdRef=i,this.opened=!0,this.isGreaterThanSmall=!0,this.viewportServiceSubscription=this.viewportService.min(P.Y.BREAKPOINT_SMALL).subscribe(function(e){e!==s.isGreaterThanSmall&&(s.isGreaterThanSmall=e,e&&!s.opened?s.opened=!0:!e&&s.opened&&(s.opened=!1),s._cdRef.detectChanges())})};return e.\u0275fac=function(n){return new(n||e)(r.Y36(P.f),r.Y36(r.sBO))},e.\u0275cmp=r.Xpm({type:e,selectors:[["sidepanel-floating-example"]],decls:91,vars:5,consts:[[1,"example-container"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],[1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(r.TgZ(0,"nx-sidepanel-outer-container",0),r.TgZ(1,"nx-radio-toggle",1),r.NdJ("ngModelChange",function(e){return n.opened=e}),r.TgZ(2,"nx-radio-toggle-button",2),r._uU(3,"Open"),r.qZA(),r.TgZ(4,"nx-radio-toggle-button",2),r._uU(5,"Close"),r.qZA(),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.qZA(),r.TgZ(8,"p"),r.TgZ(9,"i"),r._uU(10,"Here is some example content that can be scrolled."),r.qZA(),r.qZA(),r.TgZ(11,"p"),r.TgZ(12,"i"),r._uU(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.qZA(),r.TgZ(14,"p"),r.TgZ(15,"i"),r._uU(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),r.qZA(),r.qZA(),r.TgZ(17,"p"),r.TgZ(18,"i"),r._uU(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),r.qZA(),r.qZA(),r.TgZ(20,"p"),r.TgZ(21,"i"),r._uU(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),r.qZA(),r.qZA(),r.TgZ(23,"p"),r.TgZ(24,"i"),r._uU(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),r.qZA(),r.qZA(),r.TgZ(26,"p"),r.TgZ(27,"i"),r._uU(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),r.qZA(),r.qZA(),r.TgZ(29,"p"),r.TgZ(30,"i"),r._uU(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),r.qZA(),r.qZA(),r.TgZ(32,"nx-sidepanel",3),r.NdJ("openedChange",function(e){return n.opened=e}),r.TgZ(33,"nx-sidepanel-header"),r.TgZ(34,"div",4),r._uU(35," Sidepanel "),r._UZ(36,"button",5),r.qZA(),r.qZA(),r.TgZ(37,"nx-sidepanel-content"),r.TgZ(38,"div",6),r.TgZ(39,"p",7),r._uU(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(41,"p"),r._uU(42,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(43,"p"),r._uU(44,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(45,"p"),r._uU(46,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(47,"p"),r._uU(48,"Cras ornare tristique elit."),r.qZA(),r.TgZ(49,"p"),r._uU(50,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(51,"p"),r._uU(52,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(53,"p"),r._uU(54,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(55,"p"),r._uU(56,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(57,"p"),r._uU(58,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(59,"p"),r._uU(60,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(61,"p"),r._uU(62,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(63,"p"),r._uU(64,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.TgZ(65,"p"),r._uU(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(67,"p"),r._uU(68,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(69,"p"),r._uU(70,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(71,"p"),r._uU(72,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(73,"p"),r._uU(74,"Cras ornare tristique elit."),r.qZA(),r.TgZ(75,"p"),r._uU(76,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(77,"p"),r._uU(78,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(79,"p"),r._uU(80,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(81,"p"),r._uU(82,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(83,"p"),r._uU(84,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(85,"p"),r._uU(86,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(87,"p"),r._uU(88,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(89,"p"),r._uU(90,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngModel",n.opened),r.xp6(1),r.Q6J("nxValue",!0),r.xp6(2),r.Q6J("nxValue",!1),r.xp6(3),r.hij("Opened: ",n.opened,""),r.xp6(25),r.Q6J("opened",n.opened))},directives:[x,w.W,S.JJ,S.On,V.p,T,c,v,J],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.example-hint[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),e}(),N=function(){var e=function e(){t(this,e),this.opened=!0};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sidepanel-static-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(r.TgZ(0,"nx-sidepanel-outer-container",0),r.TgZ(1,"div",1),r.TgZ(2,"nx-radio-toggle",2),r.NdJ("ngModelChange",function(e){return n.opened=e}),r.TgZ(3,"nx-radio-toggle-button",3),r._uU(4,"Open"),r.qZA(),r.TgZ(5,"nx-radio-toggle-button",3),r._uU(6,"Close"),r.qZA(),r.qZA(),r.TgZ(7,"p"),r._uU(8),r.qZA(),r.TgZ(9,"p"),r.TgZ(10,"i"),r._uU(11,"Here is some example content that can be scrolled."),r.qZA(),r.qZA(),r.TgZ(12,"p"),r.TgZ(13,"i"),r._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.qZA(),r.TgZ(15,"p"),r.TgZ(16,"i"),r._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),r.qZA(),r.qZA(),r.TgZ(18,"p"),r.TgZ(19,"i"),r._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),r.qZA(),r.qZA(),r.TgZ(21,"p"),r.TgZ(22,"i"),r._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),r.qZA(),r.qZA(),r.TgZ(24,"p"),r.TgZ(25,"i"),r._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),r.qZA(),r.qZA(),r.TgZ(27,"p"),r.TgZ(28,"i"),r._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),r.qZA(),r.qZA(),r.TgZ(30,"p"),r.TgZ(31,"i"),r._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"nx-sidepanel",4),r.NdJ("openedChange",function(e){return n.opened=e}),r.TgZ(34,"nx-sidepanel-header"),r.TgZ(35,"div",5),r._uU(36," Sidepanel "),r._UZ(37,"button",6),r.qZA(),r.qZA(),r.TgZ(38,"nx-sidepanel-content"),r.TgZ(39,"div",7),r.TgZ(40,"p",8),r._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(42,"p"),r._uU(43,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(44,"p"),r._uU(45,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(46,"p"),r._uU(47,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(48,"p"),r._uU(49,"Cras ornare tristique elit."),r.qZA(),r.TgZ(50,"p"),r._uU(51,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(52,"p"),r._uU(53,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(54,"p"),r._uU(55,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(56,"p"),r._uU(57,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(58,"p"),r._uU(59,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(60,"p"),r._uU(61,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(62,"p"),r._uU(63,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(64,"p"),r._uU(65,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.TgZ(66,"p"),r._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(68,"p"),r._uU(69,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(70,"p"),r._uU(71,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(72,"p"),r._uU(73,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(74,"p"),r._uU(75,"Cras ornare tristique elit."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngModel",n.opened),r.xp6(1),r.Q6J("nxValue",!0),r.xp6(2),r.Q6J("nxValue",!1),r.xp6(3),r.hij("Opened: ",n.opened,""),r.xp6(25),r.Q6J("opened",n.opened))},directives:[x,w.W,S.JJ,S.On,V.p,T,c,v,J],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e}(),B=function(){var e=function e(){t(this,e),this.opened=!0};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sidepanel-light-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static","appearance","light",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(r.TgZ(0,"nx-sidepanel-outer-container",0),r.TgZ(1,"div",1),r.TgZ(2,"nx-radio-toggle",2),r.NdJ("ngModelChange",function(e){return n.opened=e}),r.TgZ(3,"nx-radio-toggle-button",3),r._uU(4,"Open"),r.qZA(),r.TgZ(5,"nx-radio-toggle-button",3),r._uU(6,"Close"),r.qZA(),r.qZA(),r.TgZ(7,"p"),r._uU(8),r.qZA(),r.TgZ(9,"p"),r.TgZ(10,"i"),r._uU(11,"Here is some example content that can be scrolled."),r.qZA(),r.qZA(),r.TgZ(12,"p"),r.TgZ(13,"i"),r._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.qZA(),r.TgZ(15,"p"),r.TgZ(16,"i"),r._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),r.qZA(),r.qZA(),r.TgZ(18,"p"),r.TgZ(19,"i"),r._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),r.qZA(),r.qZA(),r.TgZ(21,"p"),r.TgZ(22,"i"),r._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),r.qZA(),r.qZA(),r.TgZ(24,"p"),r.TgZ(25,"i"),r._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),r.qZA(),r.qZA(),r.TgZ(27,"p"),r.TgZ(28,"i"),r._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),r.qZA(),r.qZA(),r.TgZ(30,"p"),r.TgZ(31,"i"),r._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"nx-sidepanel",4),r.NdJ("openedChange",function(e){return n.opened=e}),r.TgZ(34,"nx-sidepanel-header"),r.TgZ(35,"div",5),r._uU(36," Sidepanel "),r._UZ(37,"button",6),r.qZA(),r.qZA(),r.TgZ(38,"nx-sidepanel-content"),r.TgZ(39,"div",7),r.TgZ(40,"p",8),r._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(42,"p"),r._uU(43,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(44,"p"),r._uU(45,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(46,"p"),r._uU(47,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(48,"p"),r._uU(49,"Cras ornare tristique elit."),r.qZA(),r.TgZ(50,"p"),r._uU(51,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(52,"p"),r._uU(53,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(54,"p"),r._uU(55,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(56,"p"),r._uU(57,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(58,"p"),r._uU(59,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(60,"p"),r._uU(61,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(62,"p"),r._uU(63,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(64,"p"),r._uU(65,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.TgZ(66,"p"),r._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(68,"p"),r._uU(69,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(70,"p"),r._uU(71,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(72,"p"),r._uU(73,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(74,"p"),r._uU(75,"Cras ornare tristique elit."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngModel",n.opened),r.xp6(1),r.Q6J("nxValue",!0),r.xp6(2),r.Q6J("nxValue",!1),r.xp6(3),r.hij("Opened: ",n.opened,""),r.xp6(25),r.Q6J("opened",n.opened))},directives:[x,w.W,S.JJ,S.On,V.p,T,c,v,J],styles:[".example-container[_ngcontent-%COMP%]{height:400px;background-color:var(--ui-02)}.main-content[_ngcontent-%COMP%]{padding:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e}(),L=s(64609),Q=s(63371),I=function(){var e=function e(){t(this,e),this.opened=!0};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sidepanel-with-tabs-example"]],decls:81,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],["appearance","expert","mobileAccordion","false"],["label","First tab"],["label","Second tab"],["nxCopytext","normal"]],template:function(e,n){1&e&&(r.TgZ(0,"nx-sidepanel-outer-container",0),r.TgZ(1,"div",1),r.TgZ(2,"nx-radio-toggle",2),r.NdJ("ngModelChange",function(e){return n.opened=e}),r.TgZ(3,"nx-radio-toggle-button",3),r._uU(4,"Open"),r.qZA(),r.TgZ(5,"nx-radio-toggle-button",3),r._uU(6,"Close"),r.qZA(),r.qZA(),r.TgZ(7,"p"),r._uU(8),r.qZA(),r.TgZ(9,"p"),r.TgZ(10,"i"),r._uU(11,"Here is some example content that can be scrolled."),r.qZA(),r.qZA(),r.TgZ(12,"p"),r.TgZ(13,"i"),r._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.qZA(),r.TgZ(15,"p"),r.TgZ(16,"i"),r._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),r.qZA(),r.qZA(),r.TgZ(18,"p"),r.TgZ(19,"i"),r._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),r.qZA(),r.qZA(),r.TgZ(21,"p"),r.TgZ(22,"i"),r._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),r.qZA(),r.qZA(),r.TgZ(24,"p"),r.TgZ(25,"i"),r._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),r.qZA(),r.qZA(),r.TgZ(27,"p"),r.TgZ(28,"i"),r._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),r.qZA(),r.qZA(),r.TgZ(30,"p"),r.TgZ(31,"i"),r._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"nx-sidepanel",4),r.NdJ("openedChange",function(e){return n.opened=e}),r.TgZ(34,"nx-sidepanel-header"),r.TgZ(35,"div",5),r._uU(36," Sidepanel "),r._UZ(37,"button",6),r.qZA(),r.qZA(),r.TgZ(38,"nx-sidepanel-content"),r.TgZ(39,"div",7),r.TgZ(40,"nx-tab-group",8),r.TgZ(41,"nx-tab",9),r.TgZ(42,"p"),r._uU(43,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(44,"p"),r._uU(45,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(46,"p"),r._uU(47,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(48,"p"),r._uU(49,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(50,"p"),r._uU(51,"Cras ornare tristique elit."),r.qZA(),r.TgZ(52,"p"),r._uU(53,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(54,"p"),r._uU(55,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(56,"p"),r._uU(57,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(58,"p"),r._uU(59,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(60,"p"),r._uU(61,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(62,"p"),r._uU(63,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(64,"p"),r._uU(65,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(66,"p"),r._uU(67,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.TgZ(68,"p"),r._uU(69,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(70,"p"),r._uU(71,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(72,"p"),r._uU(73,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(74,"p"),r._uU(75,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(76,"p"),r._uU(77,"Cras ornare tristique elit."),r.qZA(),r.qZA(),r.TgZ(78,"nx-tab",10),r.TgZ(79,"p",11),r._uU(80," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngModel",n.opened),r.xp6(1),r.Q6J("nxValue",!0),r.xp6(2),r.Q6J("nxValue",!1),r.xp6(3),r.hij("Opened: ",n.opened,""),r.xp6(25),r.Q6J("opened",n.opened))},directives:[x,w.W,S.JJ,S.On,V.p,T,c,v,J,L.f_,Q.o],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:384px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 0}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.my-sidepanel[_ngcontent-%COMP%]     nx-tab-header{position:sticky;top:0;padding-top:24px;background:var(--sidepanel-background-color)}"]}),e}(),D=function(){var e=function e(){t(this,e),this.opened=!0};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["sidepanel-dark-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,n){1&e&&(r.TgZ(0,"nx-sidepanel-outer-container",0),r.TgZ(1,"div",1),r.TgZ(2,"nx-radio-toggle",2),r.NdJ("ngModelChange",function(e){return n.opened=e}),r.TgZ(3,"nx-radio-toggle-button",3),r._uU(4,"Open"),r.qZA(),r.TgZ(5,"nx-radio-toggle-button",3),r._uU(6,"Close"),r.qZA(),r.qZA(),r.TgZ(7,"p"),r._uU(8),r.qZA(),r.TgZ(9,"p"),r.TgZ(10,"i"),r._uU(11,"Here is some example content that can be scrolled."),r.qZA(),r.qZA(),r.TgZ(12,"p"),r.TgZ(13,"i"),r._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.qZA(),r.TgZ(15,"p"),r.TgZ(16,"i"),r._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),r.qZA(),r.qZA(),r.TgZ(18,"p"),r.TgZ(19,"i"),r._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),r.qZA(),r.qZA(),r.TgZ(21,"p"),r.TgZ(22,"i"),r._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),r.qZA(),r.qZA(),r.TgZ(24,"p"),r.TgZ(25,"i"),r._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),r.qZA(),r.qZA(),r.TgZ(27,"p"),r.TgZ(28,"i"),r._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),r.qZA(),r.qZA(),r.TgZ(30,"p"),r.TgZ(31,"i"),r._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"nx-sidepanel",4),r.NdJ("openedChange",function(e){return n.opened=e}),r.TgZ(34,"nx-sidepanel-header"),r.TgZ(35,"div",5),r._uU(36," Sidepanel "),r._UZ(37,"button",6),r.qZA(),r.qZA(),r.TgZ(38,"nx-sidepanel-content"),r.TgZ(39,"div",7),r.TgZ(40,"p",8),r._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(42,"p"),r._uU(43,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(44,"p"),r._uU(45,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(46,"p"),r._uU(47,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(48,"p"),r._uU(49,"Cras ornare tristique elit."),r.qZA(),r.TgZ(50,"p"),r._uU(51,"Vivamus vestibulum ntulla nec ante."),r.qZA(),r.TgZ(52,"p"),r._uU(53,"Praesent placerat risus quis eros."),r.qZA(),r.TgZ(54,"p"),r._uU(55,"Fusce pellentesque suscipit nibh."),r.qZA(),r.TgZ(56,"p"),r._uU(57,"Integer vitae libero ac risus egestas placerat."),r.qZA(),r.TgZ(58,"p"),r._uU(59,"Vestibulum commodo felis quis tortor."),r.qZA(),r.TgZ(60,"p"),r._uU(61,"Ut aliquam sollicitudin leo."),r.qZA(),r.TgZ(62,"p"),r._uU(63,"Cras iaculis ultricies nulla."),r.qZA(),r.TgZ(64,"p"),r._uU(65,"Donec quis dui at dolor tempor interdum."),r.qZA(),r.TgZ(66,"p"),r._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),r.qZA(),r.TgZ(68,"p"),r._uU(69,"Aliquam tincidunt mauris eu risus."),r.qZA(),r.TgZ(70,"p"),r._uU(71,"Vestibulum auctor dapibus neque."),r.qZA(),r.TgZ(72,"p"),r._uU(73,"Nunc dignissim risus id metus."),r.qZA(),r.TgZ(74,"p"),r._uU(75,"Cras ornare tristique elit."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngModel",n.opened),r.xp6(1),r.Q6J("nxValue",!0),r.xp6(2),r.Q6J("nxValue",!1),r.xp6(3),r.hij("Opened: ",n.opened,""),r.xp6(25),r.Q6J("opened",n.opened))},directives:[x,w.W,S.JJ,S.On,V.p,T,c,v,J],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),e}(),R=function(){var e=function(){function e(){t(this,e)}return n(e,null,[{key:"components",value:function(){return{"sidepanel-floating":F,"sidepanel-static":N,"sidepanel-light":B,"sidepanel-with-tabs":I,"sidepanel-dark":D}}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[O,o.A4,S.u5,u.cf,M.tN]]}),e}()}}])}();