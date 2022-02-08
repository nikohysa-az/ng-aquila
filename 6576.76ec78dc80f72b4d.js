"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[6576],{6576:(B,A,u)=>{u.r(A),u.d(A,{SidepanelExamplesModule:()=>k});var p=u(3075),_=u(9209),l=u(6),S=u(3191),e=u(5e3),r=u(1777),T=u(226),M=u(9808),y=u(9823),O=u(5583);const q=["*"],P=function(t){return{transformX:t}},w=function(t,s){return{value:t,params:s}},V=["*",[["nx-sidepanel"]]],N=["*","nx-sidepanel"],E=["nxSidepanelCloseButton",""],F={sidepanelExpansion:(0,r.X$)("sidepanelExpansion",[(0,r.SB)("closed",(0,r.oB)({transform:"translateX({{ transformX }})",boxShadow:"none",visibility:"hidden"}),{params:{transformX:"100%"}}),(0,r.SB)("open",(0,r.oB)({transform:"none",boxShadow:"*",visibility:"visible"})),(0,r.eR)("closed => open",(0,r.jt)(".4s cubic-bezier(0, 0, 0.1, 1)")),(0,r.eR)("open-instant => closed, open => closed",(0,r.jt)(".2s cubic-bezier(0.8, 0, 1, 1)"))])};let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nx-sidepanel-header"]],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){1&n&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;font-size:var(--sidepanel-header-font-size);line-height:var(--sidepanel-header-line-height);font-weight:var(--sidepanel-header-font-weight);letter-spacing:var(--sidepanel-header-letter-spacing)}"],changeDetection:0}),t})(),d=(()=>{class t{constructor(n,i,o,a){this._cdr=n,this._elementRef=i,this._dir=o,this._wrapper=a,this._opened=!0,this.openedChange=new e.vpe,this._position="floating",this._appearance="dark",this._openState="open-instant",null==this._wrapper&&console.warn("NxSidepanelComponent needs a wrapping NxSidepanelOuterContainerComponent to work as expected.")}set opened(n){var i;this._opened=(0,S.Ig)(n),this._setOpenState(this._opened),null===(i=this._wrapper)||void 0===i||i._update(),this._cdr.markForCheck()}get opened(){return this._opened}set position(n){var i;this._position=n,this._cdr.markForCheck(),null===(i=this._wrapper)||void 0===i||i._update()}get position(){return this._position}set appearance(n){this._appearance=n,this._cdr.markForCheck()}get appearance(){return this._appearance}toggle(){this.opened=!this.opened,this.openedChange.emit(this._opened)}open(){this.opened||this.toggle()}close(){this.opened&&this.toggle()}_getWidth(){return this._elementRef.nativeElement.offsetWidth}_getOpenState(){return this._openState}_setOpenState(n){"open-instant"===this._openState&&n||(this._openState=n?"open":"closed")}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(T.Is),e.Y36((0,e.Gpc)(()=>g),8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["nx-sidepanel"]],contentQueries:function(n,i,o){if(1&n&&e.Suo(o,c,5,e.SBq),2&n){let a;e.iGM(a=e.CRH())&&(i._header=a.first)}},hostAttrs:["role","complementary"],hostVars:16,hostBindings:function(n,i){2&n&&(e.d8E("@sidepanelExpansion",e.WLB(13,w,i._wrapper?i._getOpenState():"",e.VKq(11,P,"rtl"===i.dir?"-100%":"100%"))),e.ekj("is-closed",!i.opened)("is-static","static"===i.position)("is-floating","floating"===i.position)("light","light"===i.appearance)("without-wrapper",!i._wrapper))},inputs:{opened:"opened",position:"position",appearance:"appearance"},outputs:{openedChange:"openedChange"},ngContentSelectors:q,decls:1,vars:0,template:function(n,i){1&n&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:absolute;right:0;top:0;height:100%;overflow:hidden;background:var(--sidepanel-background-color)}[dir=rtl]   [_nghost-%COMP%]{right:auto;left:0}.is-floating[_nghost-%COMP%]{z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translate(100%)}[dir=rtl]   [_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translate(-100%)}.light[_nghost-%COMP%]{background:var(--sidepanel-light-background-color);border-left:1px solid var(--sidepanel-light-border-color)}[dir=rtl]   .light[_nghost-%COMP%]{border-left:unset;border-right:1px solid var(--sidepanel-light-border-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{border-left:1px solid windowText}[dir=rtl]   [_nghost-%COMP%]{border-left:none;border-right:1px solid windowText}}.without-wrapper.is-floating[_nghost-%COMP%]{position:fixed;right:0;z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[dir=rtl]   .without-wrapper.is-floating[_nghost-%COMP%]{right:auto;left:0}.without-wrapper.is-static[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.without-wrapper.is-closed[_nghost-%COMP%]{display:none}"],data:{animation:[F.sidepanelExpansion]},changeDetection:0}),t})(),g=(()=>{class t{constructor(n,i){this._dir=n,this._cdr=i,this._dir.change.subscribe(()=>{this._cdr.markForCheck()})}_update(){this._cdr.markForCheck()}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_getOpenState(){var n;return"static"===(null===(n=this._sidepanel)||void 0===n?void 0:n.position)?this._sidepanel._getOpenState():"closed"}_getSidepanelWidth(){var n,i;return"static"===(null===(n=this._sidepanel)||void 0===n?void 0:n.position)&&(null===(i=this._sidepanel)||void 0===i?void 0:i.opened)?this._sidepanel._getWidth():0}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.Is,8),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["nx-sidepanel-outer-container"]],contentQueries:function(n,i,o){if(1&n&&e.Suo(o,d,5),2&n){let a;e.iGM(a=e.CRH())&&(i._sidepanel=a.first)}},ngContentSelectors:N,decls:3,vars:8,consts:[[1,"nx-sidepanel-outer-container__content"]],template:function(n,i){1&n&&(e.F$t(V),e.TgZ(0,"div",0),e.Hsn(1),e.qZA(),e.Hsn(2,1)),2&n&&(e.Udp("margin-right","ltr"===i.dir?i._getSidepanelWidth():0,"px")("margin-left","rtl"===i.dir?i._getSidepanelWidth():0,"px"),e.ekj("with-margin","open"===i._getOpenState())("without-margin","closed"===i._getOpenState()))},styles:["[_nghost-%COMP%]{position:relative;display:block;height:100%;overflow:hidden}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;height:100%;overflow:auto}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-duration:.4s;transition-timing-function:cubic-bezier(0,0,.1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-property:margin-left}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-duration:.2s;transition-timing-function:cubic-bezier(.8,0,1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-property:margin-left}"],changeDetection:0}),t})(),m=(()=>{class t{constructor(n,i,o){this._sidepanel=n,this._focusMonitor=i,this._elementRef=o,this._focusMonitor.monitor(this._elementRef)}_toggle(){this._sidepanel.toggle()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d),e.Y36(O.tE),e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["button","nxSidepanelCloseButton",""]],hostBindings:function(n,i){1&n&&e.NdJ("click",function(){return i._toggle()})},attrs:E,decls:1,vars:0,consts:[["name","close","size","s","aria-hidden","true"]],template:function(n,i){1&n&&e._UZ(0,"nx-icon",0)},directives:[_.O8],styles:["[_nghost-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--sidepanel-close-icon-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:buttonText}}.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nx-sidepanel-content"]],hostAttrs:["tabindex","0"],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){1&n&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;overflow-y:scroll;height:100%}"],changeDetection:0}),t})(),J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[M.ez,_.cf,y.ru]]}),t})();var h=u(7917);let x=(()=>{class t{constructor(){this.opened=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidepanel-dark-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-sidepanel-outer-container",0),e.TgZ(1,"div",1),e.TgZ(2,"nx-radio-toggle",2),e.NdJ("ngModelChange",function(a){return i.opened=a}),e.TgZ(3,"nx-radio-toggle-button",3),e._uU(4,"Open"),e.qZA(),e.TgZ(5,"nx-radio-toggle-button",3),e._uU(6,"Close"),e.qZA(),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e.TgZ(10,"i"),e._uU(11,"Here is some example content that can be scrolled."),e.qZA(),e.qZA(),e.TgZ(12,"p"),e.TgZ(13,"i"),e._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.qZA(),e.TgZ(15,"p"),e.TgZ(16,"i"),e._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),e.qZA(),e.qZA(),e.TgZ(18,"p"),e.TgZ(19,"i"),e._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),e.qZA(),e.qZA(),e.TgZ(21,"p"),e.TgZ(22,"i"),e._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),e.qZA(),e.qZA(),e.TgZ(24,"p"),e.TgZ(25,"i"),e._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),e.qZA(),e.qZA(),e.TgZ(27,"p"),e.TgZ(28,"i"),e._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),e.qZA(),e.qZA(),e.TgZ(30,"p"),e.TgZ(31,"i"),e._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"nx-sidepanel",4),e.NdJ("openedChange",function(a){return i.opened=a}),e.TgZ(34,"nx-sidepanel-header"),e.TgZ(35,"div",5),e._uU(36," Sidepanel "),e._UZ(37,"button",6),e.qZA(),e.qZA(),e.TgZ(38,"nx-sidepanel-content"),e.TgZ(39,"div",7),e.TgZ(40,"p",8),e._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(48,"p"),e._uU(49,"Cras ornare tristique elit."),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(60,"p"),e._uU(61,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(62,"p"),e._uU(63,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.TgZ(66,"p"),e._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(70,"p"),e._uU(71,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Cras ornare tristique elit."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngModel",i.opened),e.xp6(1),e.Q6J("nxValue",!0),e.xp6(2),e.Q6J("nxValue",!1),e.xp6(3),e.hij("Opened: ",i.opened,""),e.xp6(25),e.Q6J("opened",i.opened))},directives:[g,l.W8,p.JJ,p.On,l.pl,d,c,m,Z],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),t})();var C=u(5423);let b=(()=>{class t{constructor(n,i){this.viewportService=n,this._cdr=i,this.opened=!0,this.isGreaterThanSmall=!0,this.viewportServiceSubscription=this.viewportService.min(C.Yz.BREAKPOINT_SMALL).subscribe(o=>{o!==this.isGreaterThanSmall&&(this.isGreaterThanSmall=o,o&&!this.opened?this.opened=!0:!o&&this.opened&&(this.opened=!1),this._cdr.detectChanges())})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.fg),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidepanel-floating-example"]],decls:91,vars:5,consts:[[1,"example-container"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],[1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-sidepanel-outer-container",0),e.TgZ(1,"nx-radio-toggle",1),e.NdJ("ngModelChange",function(a){return i.opened=a}),e.TgZ(2,"nx-radio-toggle-button",2),e._uU(3,"Open"),e.qZA(),e.TgZ(4,"nx-radio-toggle-button",2),e._uU(5,"Close"),e.qZA(),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e.TgZ(9,"i"),e._uU(10,"Here is some example content that can be scrolled."),e.qZA(),e.qZA(),e.TgZ(11,"p"),e.TgZ(12,"i"),e._uU(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.qZA(),e.TgZ(14,"p"),e.TgZ(15,"i"),e._uU(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),e.qZA(),e.qZA(),e.TgZ(17,"p"),e.TgZ(18,"i"),e._uU(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),e.qZA(),e.qZA(),e.TgZ(20,"p"),e.TgZ(21,"i"),e._uU(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),e.qZA(),e.qZA(),e.TgZ(23,"p"),e.TgZ(24,"i"),e._uU(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),e.qZA(),e.qZA(),e.TgZ(26,"p"),e.TgZ(27,"i"),e._uU(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),e.qZA(),e.qZA(),e.TgZ(29,"p"),e.TgZ(30,"i"),e._uU(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),e.qZA(),e.qZA(),e.TgZ(32,"nx-sidepanel",3),e.NdJ("openedChange",function(a){return i.opened=a}),e.TgZ(33,"nx-sidepanel-header"),e.TgZ(34,"div",4),e._uU(35," Sidepanel "),e._UZ(36,"button",5),e.qZA(),e.qZA(),e.TgZ(37,"nx-sidepanel-content"),e.TgZ(38,"div",6),e.TgZ(39,"p",7),e._uU(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(41,"p"),e._uU(42,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(45,"p"),e._uU(46,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Cras ornare tristique elit."),e.qZA(),e.TgZ(49,"p"),e._uU(50,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(51,"p"),e._uU(52,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(55,"p"),e._uU(56,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(57,"p"),e._uU(58,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(59,"p"),e._uU(60,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(63,"p"),e._uU(64,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.TgZ(65,"p"),e._uU(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(67,"p"),e._uU(68,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(69,"p"),e._uU(70,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(71,"p"),e._uU(72,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(73,"p"),e._uU(74,"Cras ornare tristique elit."),e.qZA(),e.TgZ(75,"p"),e._uU(76,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(77,"p"),e._uU(78,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(79,"p"),e._uU(80,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(81,"p"),e._uU(82,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(83,"p"),e._uU(84,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(85,"p"),e._uU(86,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(87,"p"),e._uU(88,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(89,"p"),e._uU(90,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngModel",i.opened),e.xp6(1),e.Q6J("nxValue",!0),e.xp6(2),e.Q6J("nxValue",!1),e.xp6(3),e.hij("Opened: ",i.opened,""),e.xp6(25),e.Q6J("opened",i.opened))},directives:[g,l.W8,p.JJ,p.On,l.pl,d,c,m,Z],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.example-hint[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),t})(),f=(()=>{class t{constructor(){this.opened=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidepanel-light-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static","appearance","light",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-sidepanel-outer-container",0),e.TgZ(1,"div",1),e.TgZ(2,"nx-radio-toggle",2),e.NdJ("ngModelChange",function(a){return i.opened=a}),e.TgZ(3,"nx-radio-toggle-button",3),e._uU(4,"Open"),e.qZA(),e.TgZ(5,"nx-radio-toggle-button",3),e._uU(6,"Close"),e.qZA(),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e.TgZ(10,"i"),e._uU(11,"Here is some example content that can be scrolled."),e.qZA(),e.qZA(),e.TgZ(12,"p"),e.TgZ(13,"i"),e._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.qZA(),e.TgZ(15,"p"),e.TgZ(16,"i"),e._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),e.qZA(),e.qZA(),e.TgZ(18,"p"),e.TgZ(19,"i"),e._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),e.qZA(),e.qZA(),e.TgZ(21,"p"),e.TgZ(22,"i"),e._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),e.qZA(),e.qZA(),e.TgZ(24,"p"),e.TgZ(25,"i"),e._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),e.qZA(),e.qZA(),e.TgZ(27,"p"),e.TgZ(28,"i"),e._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),e.qZA(),e.qZA(),e.TgZ(30,"p"),e.TgZ(31,"i"),e._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"nx-sidepanel",4),e.NdJ("openedChange",function(a){return i.opened=a}),e.TgZ(34,"nx-sidepanel-header"),e.TgZ(35,"div",5),e._uU(36," Sidepanel "),e._UZ(37,"button",6),e.qZA(),e.qZA(),e.TgZ(38,"nx-sidepanel-content"),e.TgZ(39,"div",7),e.TgZ(40,"p",8),e._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(48,"p"),e._uU(49,"Cras ornare tristique elit."),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(60,"p"),e._uU(61,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(62,"p"),e._uU(63,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.TgZ(66,"p"),e._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(70,"p"),e._uU(71,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Cras ornare tristique elit."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngModel",i.opened),e.xp6(1),e.Q6J("nxValue",!0),e.xp6(2),e.Q6J("nxValue",!1),e.xp6(3),e.hij("Opened: ",i.opened,""),e.xp6(25),e.Q6J("opened",i.opened))},directives:[g,l.W8,p.JJ,p.On,l.pl,d,c,m,Z],styles:[".example-container[_ngcontent-%COMP%]{height:400px;background-color:var(--ui-02)}.main-content[_ngcontent-%COMP%]{padding:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),t})(),U=(()=>{class t{constructor(){this.opened=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidepanel-static-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-sidepanel-outer-container",0),e.TgZ(1,"div",1),e.TgZ(2,"nx-radio-toggle",2),e.NdJ("ngModelChange",function(a){return i.opened=a}),e.TgZ(3,"nx-radio-toggle-button",3),e._uU(4,"Open"),e.qZA(),e.TgZ(5,"nx-radio-toggle-button",3),e._uU(6,"Close"),e.qZA(),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e.TgZ(10,"i"),e._uU(11,"Here is some example content that can be scrolled."),e.qZA(),e.qZA(),e.TgZ(12,"p"),e.TgZ(13,"i"),e._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.qZA(),e.TgZ(15,"p"),e.TgZ(16,"i"),e._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),e.qZA(),e.qZA(),e.TgZ(18,"p"),e.TgZ(19,"i"),e._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),e.qZA(),e.qZA(),e.TgZ(21,"p"),e.TgZ(22,"i"),e._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),e.qZA(),e.qZA(),e.TgZ(24,"p"),e.TgZ(25,"i"),e._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),e.qZA(),e.qZA(),e.TgZ(27,"p"),e.TgZ(28,"i"),e._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),e.qZA(),e.qZA(),e.TgZ(30,"p"),e.TgZ(31,"i"),e._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"nx-sidepanel",4),e.NdJ("openedChange",function(a){return i.opened=a}),e.TgZ(34,"nx-sidepanel-header"),e.TgZ(35,"div",5),e._uU(36," Sidepanel "),e._UZ(37,"button",6),e.qZA(),e.qZA(),e.TgZ(38,"nx-sidepanel-content"),e.TgZ(39,"div",7),e.TgZ(40,"p",8),e._uU(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(42,"p"),e._uU(43,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(48,"p"),e._uU(49,"Cras ornare tristique elit."),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(60,"p"),e._uU(61,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(62,"p"),e._uU(63,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.TgZ(66,"p"),e._uU(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(70,"p"),e._uU(71,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Cras ornare tristique elit."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngModel",i.opened),e.xp6(1),e.Q6J("nxValue",!0),e.xp6(2),e.Q6J("nxValue",!1),e.xp6(3),e.hij("Opened: ",i.opened,""),e.xp6(25),e.Q6J("opened",i.opened))},directives:[g,l.W8,p.JJ,p.On,l.pl,d,c,m,Z],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),t})(),v=(()=>{class t{constructor(){this.opened=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sidepanel-with-tabs-example"]],decls:81,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],["appearance","expert","mobileAccordion","false"],["label","First tab"],["label","Second tab"],["nxCopytext","normal"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-sidepanel-outer-container",0),e.TgZ(1,"div",1),e.TgZ(2,"nx-radio-toggle",2),e.NdJ("ngModelChange",function(a){return i.opened=a}),e.TgZ(3,"nx-radio-toggle-button",3),e._uU(4,"Open"),e.qZA(),e.TgZ(5,"nx-radio-toggle-button",3),e._uU(6,"Close"),e.qZA(),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e.TgZ(10,"i"),e._uU(11,"Here is some example content that can be scrolled."),e.qZA(),e.qZA(),e.TgZ(12,"p"),e.TgZ(13,"i"),e._uU(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.qZA(),e.TgZ(15,"p"),e.TgZ(16,"i"),e._uU(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),e.qZA(),e.qZA(),e.TgZ(18,"p"),e.TgZ(19,"i"),e._uU(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),e.qZA(),e.qZA(),e.TgZ(21,"p"),e.TgZ(22,"i"),e._uU(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),e.qZA(),e.qZA(),e.TgZ(24,"p"),e.TgZ(25,"i"),e._uU(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),e.qZA(),e.qZA(),e.TgZ(27,"p"),e.TgZ(28,"i"),e._uU(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),e.qZA(),e.qZA(),e.TgZ(30,"p"),e.TgZ(31,"i"),e._uU(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"nx-sidepanel",4),e.NdJ("openedChange",function(a){return i.opened=a}),e.TgZ(34,"nx-sidepanel-header"),e.TgZ(35,"div",5),e._uU(36," Sidepanel "),e._UZ(37,"button",6),e.qZA(),e.qZA(),e.TgZ(38,"nx-sidepanel-content"),e.TgZ(39,"div",7),e.TgZ(40,"nx-tab-group",8),e.TgZ(41,"nx-tab",9),e.TgZ(42,"p"),e._uU(43,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(48,"p"),e._uU(49,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Cras ornare tristique elit."),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Vivamus vestibulum ntulla nec ante."),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Praesent placerat risus quis eros."),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Fusce pellentesque suscipit nibh."),e.qZA(),e.TgZ(58,"p"),e._uU(59,"Integer vitae libero ac risus egestas placerat."),e.qZA(),e.TgZ(60,"p"),e._uU(61,"Vestibulum commodo felis quis tortor."),e.qZA(),e.TgZ(62,"p"),e._uU(63,"Ut aliquam sollicitudin leo."),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Cras iaculis ultricies nulla."),e.qZA(),e.TgZ(66,"p"),e._uU(67,"Donec quis dui at dolor tempor interdum."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),e.qZA(),e.TgZ(70,"p"),e._uU(71,"Aliquam tincidunt mauris eu risus."),e.qZA(),e.TgZ(72,"p"),e._uU(73,"Vestibulum auctor dapibus neque."),e.qZA(),e.TgZ(74,"p"),e._uU(75,"Nunc dignissim risus id metus."),e.qZA(),e.TgZ(76,"p"),e._uU(77,"Cras ornare tristique elit."),e.qZA(),e.qZA(),e.TgZ(78,"nx-tab",10),e.TgZ(79,"p",11),e._uU(80," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngModel",i.opened),e.xp6(1),e.Q6J("nxValue",!0),e.xp6(2),e.Q6J("nxValue",!1),e.xp6(3),e.hij("Opened: ",i.opened,""),e.xp6(25),e.Q6J("opened",i.opened))},directives:[g,l.W8,p.JJ,p.On,l.pl,d,c,m,Z,h.f_,h.oh],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:384px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 0}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.my-sidepanel[_ngcontent-%COMP%]     nx-tab-header{position:-webkit-sticky;position:sticky;top:0;padding-top:24px;background:var(--sidepanel-background-color)}"]}),t})(),k=(()=>{class t{static components(){return{"sidepanel-floating":b,"sidepanel-static":U,"sidepanel-light":f,"sidepanel-with-tabs":v,"sidepanel-dark":x}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[J,l.A4,p.u5,_.cf,h.tN]]}),t})()}}]);