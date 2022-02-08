"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[8592],{4949:(b,v,a)=>{a.d(v,{aY:()=>l,Yx:()=>p,iM:()=>_});var t=a(3191),n=a(5e3),x=a(8929),m=a(1059),f=a(2198),g=a(7625),s=a(5583),e=a(9209);const r=["nxBreadcrumbItem",""],d=["*"],o=["nxBreadcrumb",""];let p=(()=>{class c{constructor(i,u,M){this._renderer=i,this._elemRef=u,this._focusMonitor=M,this._focusMonitor.monitor(this._elemRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elemRef)}setAsLast(){this._renderer.setAttribute(this._elemRef.nativeElement,"aria-current","page")}resetAriaLabel(){this._renderer.removeAttribute(this._elemRef.nativeElement,"aria-current")}_onIconClick(i){i.stopPropagation(),i.preventDefault()}}return c.\u0275fac=function(i){return new(i||c)(n.Y36(n.Qsj),n.Y36(n.SBq),n.Y36(s.tE))},c.\u0275cmp=n.Xpm({type:c,selectors:[["a","nxBreadcrumbItem",""]],hostAttrs:[1,"nx-breadcrumb-item"],attrs:r,ngContentSelectors:d,decls:3,vars:0,consts:[[1,"nx-breadcrumb-item__text"],["aria-hidden","true","name","chevron-right",1,"nx-breadcrumb-item__chevron",3,"click"]],template:function(i,u){1&i&&(n.F$t(),n.TgZ(0,"span",0),n.Hsn(1),n.qZA(),n.TgZ(2,"nx-icon",1),n.NdJ("click",function(C){return u._onIconClick(C)}),n.qZA())},directives:[e.O8],styles:["[_nghost-%COMP%]{text-decoration:none;display:flex;align-items:center;cursor:auto;color:var(--breadcrumb-color);font-size:var(--breadcrumb-font-size);line-height:var(--breadcrumb-line-height);font-weight:var(--breadcrumb-font-weight);letter-spacing:var(--breadcrumb-letter-spacing)}.nx-breadcrumb-item__chevron[_ngcontent-%COMP%]{margin-left:4px}[dir=rtl][_nghost-%COMP%]   .nx-breadcrumb-item__chevron[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-breadcrumb-item__chevron[_ngcontent-%COMP%]{margin-left:0;margin-left:initial;margin-right:4px;transform:rotate(180deg)}.nx-breadcrumb-item__text[_ngcontent-%COMP%]{cursor:pointer}.cdk-keyboard-focused[_nghost-%COMP%]   .nx-breadcrumb-item__text[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]   .nx-breadcrumb-item__text[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),c})(),l=(()=>{class c{constructor(i){this._cdr=i,this._destroyed=new x.xQ,this._negative=!1,this._appeareance="default"}set appearance(i){this._appeareance=i,this._cdr.markForCheck()}get appearance(){return this._appeareance}set negative(i){this._negative=(0,t.Ig)(i),this._cdr.markForCheck()}get negative(){return this._negative}ngAfterContentInit(){0===this.breadcrumbItems.length&&console.warn("A breadcrumb needs NxBreadcrumbItemComponent children wrapped in <li>!"),this.breadcrumbItems.changes.pipe((0,m.O)(this.breadcrumbItems),(0,f.h)(i=>0!==i.length),(0,g.R)(this._destroyed)).subscribe(i=>{this.breadcrumbItems.forEach(u=>u.resetAriaLabel()),this.breadcrumbItems.last.setAsLast()})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return c.\u0275fac=function(i){return new(i||c)(n.Y36(n.sBO))},c.\u0275cmp=n.Xpm({type:c,selectors:[["ol","nxBreadcrumb",""]],contentQueries:function(i,u,M){if(1&i&&n.Suo(M,p,5),2&i){let C;n.iGM(C=n.CRH())&&(u.breadcrumbItems=C)}},hostVars:4,hostBindings:function(i,u){2&i&&n.ekj("is-negative",u.negative)("is-link","link"===u.appearance)},inputs:{appearance:"appearance",negative:"negative"},attrs:o,ngContentSelectors:d,decls:1,vars:0,template:function(i,u){1&i&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;list-style:none;height:24px;padding:0}.is-link[_nghost-%COMP%]     .nx-breadcrumb-item{color:var(--breadcrumb-link-color)}.is-link[_nghost-%COMP%]     .nx-breadcrumb-item__text:hover{color:var(--breadcrumb-link-hover-color)}.is-link[_nghost-%COMP%]     .nx-breadcrumb-item__text:active{color:var(--breadcrumb-link-active-color)}  li:last-child .nx-breadcrumb-item{font-weight:600;cursor:auto}  li:last-child .nx-breadcrumb-item__chevron{display:none}  li+li .nx-breadcrumb-item{margin-left:4px}[dir=rtl][_nghost-%COMP%]     li+li .nx-breadcrumb-item, [dir=rtl]   [_nghost-%COMP%]     li+li .nx-breadcrumb-item{margin-left:0;margin-left:initial;margin-right:4px}.is-negative[_nghost-%COMP%]     .nx-breadcrumb-item{color:var(--negative)}@media screen and (-ms-high-contrast: active){  .nx-breadcrumb-item__chevron{color:windowText}}"],changeDetection:0}),c})(),_=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[[e.cf]]}),c})()},9307:(b,v,a)=>{a.d(v,{lR:()=>f,Yc:()=>s});var t=a(5e3);const n=["nxFigure",""],x=["*"],m="auto";let f=(()=>{class e{constructor(){this.rounded=!1,this.size=m}set classNames(d){var o,p;if(this._classNames===d)return;this._classNames=d;const[_=null]=(null===(o=this._classNames)||void 0===o?void 0:o.match(/^(auto|1by1|1dot8by1|1dot2by1|1by1dot1|2dot6by1)$/))||[m];this.size=_,this.rounded=!!(null===(p=this._classNames)||void 0===p?void 0:p.match(/rounded/))}get classNames(){return this._classNames}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["figure","nxFigure",""]],hostVars:16,hostBindings:function(d,o){2&d&&t.ekj("nx-image",!0)("nx-image--auto","auto"===o.size&&!o.rounded)("nx-image--1by1","1by1"===o.size)("nx-image--1dot8by1","1dot8by1"===o.size)("nx-image--1dot2by1","1dot2by1"===o.size)("nx-image--1by1dot1","1by1dot1"===o.size)("nx-image--2dot6by1","2dot6by1"===o.size)("nx-image--rounded",o.rounded)},inputs:{classNames:["nxFigure","classNames"]},attrs:n,ngContentSelectors:x,decls:1,vars:0,template:function(d,o){1&d&&(t.F$t(),t.Hsn(0))},styles:['[_nghost-%COMP%]{display:block;position:relative;line-height:0}[_nghost-%COMP%]     img{display:block;font-family:"object-fit: cover;";-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.nx-image--auto[_nghost-%COMP%]     img{height:auto}[_nghost-%COMP%]:not(.nx-image--auto)     img{position:absolute;top:0;left:0}[dir=rtl]   [_nghost-%COMP%]:not(.nx-image--auto)     img{right:0;left:auto}.nx-image--rounded[_nghost-%COMP%]{padding-top:100%}.nx-image--rounded[_nghost-%COMP%]     img{border-radius:50%;bottom:0;left:0;position:absolute;right:0;top:0}.nx-image--1by1[_nghost-%COMP%]{padding-top:100%}.nx-image--1dot8by1[_nghost-%COMP%]{padding-top:55.5555555556%}.nx-image--1dot2by1[_nghost-%COMP%]{padding-top:83.3333333333%}.nx-image--1by1dot1[_nghost-%COMP%]{padding-top:110%}.nx-image--2dot6by1[_nghost-%COMP%]{padding-top:38.4615384615%}.nx-image--1by1dot4[_nghost-%COMP%]{padding-top:140%}'],changeDetection:0}),e})(),s=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})()},2825:(b,v,a)=>{a.d(v,{I:()=>m,e:()=>f});var t=a(5e3),n=a(9808);const x=["*"];let m=(()=>{class g{constructor(){this._position=[]}set position(e){this._position=e.split(" ")}get position(){return this._position.join(" ")}_hasPosition(e){return this._position.includes(e)}}return g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["nx-indicator"]],hostVars:10,hostBindings:function(e,r){2&e&&t.ekj("nx-indicator",!0)("nx-indicator--over-text",r._hasPosition("over-text"))("nx-indicator--over-icon",r._hasPosition("over-icon"))("nx-indicator--after-text",r._hasPosition("after-text"))("nx-indicator--with-overlap",r._hasPosition("with-overlap"))},inputs:{position:"position"},ngContentSelectors:x,decls:1,vars:0,template:function(e,r){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;border-radius:12px;padding-left:3px;padding-right:3px;height:16px;font-size:var(--indicator-font-size);line-height:var(--indicator-line-height);font-weight:var(--indicator-font-weight);letter-spacing:var(--indicator-letter-spacing);color:var(--indicator-color);background-color:var(--indicator-background-color);border:1px solid var(--indicator-border-color)}[_nghost-%COMP%]:empty{height:10px;width:10px}[_nghost-%COMP%]:not(:empty){min-width:16px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{border:1px solid windowText;color:windowText;background-color:window}}.nx-indicator--over-text[_nghost-%COMP%]{position:absolute;top:0;left:100%}.nx-indicator--over-text[_nghost-%COMP%]:not(:empty){top:-4px}[dir=rtl]   .nx-indicator--over-text[_nghost-%COMP%]{left:auto;right:100%}.nx-indicator--with-overlap[_nghost-%COMP%]{position:absolute}.nx-indicator--with-overlap[_nghost-%COMP%]:not(:empty){left:calc(100% - 4px)}[dir=rtl]   .nx-indicator--with-overlap[_nghost-%COMP%]:not(:empty){left:auto;right:calc(100% - 4px)}.nx-indicator--after-text[_nghost-%COMP%]{vertical-align:top;margin-left:4px}[dir=rtl]   .nx-indicator--after-text[_nghost-%COMP%]{margin-left:0;margin-left:initial;margin-right:4px}.nx-indicator--over-icon[_nghost-%COMP%]{position:absolute;left:50%;bottom:50%}.nx-indicator--over-icon[_nghost-%COMP%]:empty{left:calc(50% + 2px);bottom:calc(50% + 2px)}[dir=rtl]   .nx-indicator--over-icon[_nghost-%COMP%]{left:auto;right:50%}[dir=rtl]   .nx-indicator--over-icon[_nghost-%COMP%]:empty{left:auto;right:calc(50% + 2px)}_:-ms-fullscreen.nx-indicator--over-icon[_nghost-%COMP%], _:-ms-fullscreen   .nx-indicator--over-icon[_nghost-%COMP%], :root.nx-indicator--over-icon[_nghost-%COMP%], :root   .nx-indicator--over-icon[_nghost-%COMP%], _:-ms-fullscreen.nx-indicator--over-text[_nghost-%COMP%], _:-ms-fullscreen   .nx-indicator--over-text[_nghost-%COMP%], :root.nx-indicator--over-text[_nghost-%COMP%], :root   .nx-indicator--over-text[_nghost-%COMP%]{display:block;padding-top:1px;text-align:center}"],changeDetection:0}),g})(),f=(()=>{class g{}return g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[[n.ez]]}),g})()},6901:(b,v,a)=>{a.d(v,{K:()=>e,jN:()=>r,$1:()=>d});var t=a(5e3),n=a(9209);const x=["nxList",""],m=["*"],f=["viewRefPrefix"],g=["nxListIcon",""],s="normal";let e=(()=>{class o{constructor(){this._classNames="",this.type=s,this.negative=!1,this.orderedCircle=!1}set classNames(l){var _,c,h;if(this._classNames===l)return;this._classNames=l;const[i=null]=(null===(_=this._classNames)||void 0===_?void 0:_.match(/xsmall|small|normal/))||[s];this.type=i,this.negative=!!(null===(c=this._classNames)||void 0===c?void 0:c.match(/negative/)),this.orderedCircle=!!(null===(h=this._classNames)||void 0===h?void 0:h.match(/ordered-circle/))}get classNames(){return this._classNames}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ul","nxList",""],["ol","nxList",""]],hostVars:12,hostBindings:function(l,_){2&l&&t.ekj("nx-list",!0)("nx-list--xsmall","xsmall"===_.type)("nx-list--small","small"===_.type)("nx-list--normal","normal"===_.type)("nx-list--negative",_.negative)("nx-list--ordered-circle",_.orderedCircle)},inputs:{classNames:["nxList","classNames"]},attrs:x,ngContentSelectors:m,decls:1,vars:0,template:function(l,_){1&l&&(t.F$t(),t.Hsn(0))},styles:['[_nghost-%COMP%]{color:var(--list-text-color);list-style:none;padding:0;counter-reset:list}.nx-list--normal[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}.nx-list--small[_nghost-%COMP%]{font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-list--xsmall[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-list--negative[_nghost-%COMP%]{color:var(--negative)}.nx-list--negative[_nghost-%COMP%]     .nx-list__icon{color:var(--negative)}[_nghost-%COMP%]     .nx-list__icon{position:absolute;left:0;font-size:var(--list-icon-size);color:var(--list-icon-color);top:calc((var(--paragraph-02-line-height) - var(--list-icon-size)) / 2);line-height:var(--list-icon-size);height:var(--list-icon-size)}[dir=rtl]   [_nghost-%COMP%]     .nx-list__icon{right:0;left:auto}ul.nx-list--small[_nghost-%COMP%]     li .nx-list__icon{top:calc((var(--paragraph-03-line-height) - var(--list-icon-size)) / 2)}ul.nx-list--xsmall[_nghost-%COMP%]     li .nx-list__icon{top:calc((var(--paragraph-04-line-height) - var(--list-icon-size)) / 2)}[_nghost-%COMP%]     li{padding-left:calc(var(--list-icon-size) + 12px);position:relative}[dir=rtl]   [_nghost-%COMP%]     li{padding-right:calc(var(--list-icon-size) + 12px);padding-left:0;padding-left:initial}[_nghost-%COMP%]     li:not(:last-child){margin-bottom:16px}ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:var(--list-icon-color);border-radius:50%;content:"";display:inline-block;height:8px;width:8px;margin-right:16px;position:absolute;margin-left:calc(-1 * var(--list-icon-size));margin-top:calc((var(--paragraph-02-line-height) - 8px) / 2);transform:translate(-50%)}[dir=rtl]   ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-right:calc(-1 * var(--list-icon-size));margin-left:16px;transform:translate(50%)}@media screen and (-ms-high-contrast: active){ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:windowText!important}}ul.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-top:calc((var(--paragraph-03-line-height) - 8px) / 2)}ul.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-top:calc((var(--paragraph-04-line-height) - 8px) / 2)}ol[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{counter-increment:list;content:counter(list);position:absolute;font-size:inherit;font-weight:700;display:inline-block;width:var(--list-icon-size);text-align:center;left:0}[dir=rtl]   ol[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{right:0;left:auto}[_nghost-%COMP%]     li>  ol, [_nghost-%COMP%]     li>  ul{margin-bottom:16px;margin-top:16px}ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{width:var(--list-circle-size);font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing);color:#adff2f;color:var(--list-circle-text-color);left:0;top:calc((var(--paragraph-02-line-height) - var(--paragraph-03-line-height)) / 2);z-index:2}[dir=rtl]   ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{right:0;left:auto}@media screen and (-ms-high-contrast: active){ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{border:1px solid windowText;border-radius:50%}}ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{border-radius:50%;width:var(--list-circle-size);height:var(--list-circle-size);background-color:var(--list-icon-color);left:0;top:calc((var(--paragraph-02-line-height) - var(--list-circle-size)) / 2);content:"";position:absolute}[dir=rtl]   ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{right:0;left:auto}@media screen and (-ms-high-contrast: active){ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{color:windowText}}ol.nx-list--ordered-circle.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{top:calc((var(--paragraph-03-line-height) - var(--paragraph-03-line-height)) / 2)}ol.nx-list--ordered-circle.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{top:calc((var(--paragraph-03-line-height) - var(--list-circle-size)) / 2)}ol.nx-list--ordered-circle.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{top:calc((var(--paragraph-04-line-height) - var(--paragraph-03-line-height)) / 2)}ol.nx-list--ordered-circle.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{top:calc((var(--paragraph-04-line-height) - var(--list-circle-size)) / 2)}ol.nx-list--ordered-circle.nx-list--negative[_nghost-%COMP%] >li:not(.nx-list__icon-wrapper):after{background-color:var(--negative)}ol.nx-list--ordered-circle.nx-list--negative[_nghost-%COMP%] >li:not(.nx-list__icon-wrapper):before{color:var(--negative-background)}ul.nx-list--negative[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:var(--negative)}'],changeDetection:0}),o})(),r=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["li","nxListIcon",""]],viewQuery:function(l,_){if(1&l&&t.Gf(f,5,t.s_b),2&l){let c;t.iGM(c=t.CRH())&&(_.viewRefPrefix=c.first)}},hostVars:2,hostBindings:function(l,_){2&l&&t.ekj("nx-list__icon-wrapper",!0)},inputs:{name:["nxListIcon","name"]},attrs:g,ngContentSelectors:m,decls:3,vars:1,consts:[[1,"nx-list__icon"],[3,"name"]],template:function(l,_){1&l&&(t.F$t(),t.TgZ(0,"span",0),t._UZ(1,"nx-icon",1),t.qZA(),t.Hsn(2)),2&l&&(t.xp6(1),t.Q6J("name",_.name))},directives:[n.O8],encapsulation:2}),o})(),d=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.oAB({type:o,bootstrap:[n.O8]}),o.\u0275inj=t.cJS({imports:[[n.cf]]}),o})()},2112:(b,v,a)=>{a.d(v,{j:()=>f,O:()=>g});var t=a(5e3),n=a(5423),x=a(9808);let m=0,f=(()=>{class s{constructor(){this.progressbarId="nx-progress-bar-"+m++,this._value=0}get value(){return this._value}set value(r){this._value=(0,n.uZ)(r||0)}_primaryTransform(){return{transform:`scaleX(${this.value})`}}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["nx-progressbar"]],hostVars:1,hostBindings:function(r,d){2&r&&t.uIk("aria-valuenow",d.value)},inputs:{value:"value"},decls:2,vars:1,consts:[[1,"nx-progress__track"],[1,"nx-progress__indicator",3,"ngStyle"]],template:function(r,d){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngStyle",d._primaryTransform()))},directives:[x.PC],styles:['[_nghost-%COMP%]{display:block;height:4px;overflow:hidden;position:relative;width:100%}.nx-progress__track[_ngcontent-%COMP%]{background-color:var(--progressbar-background-color);height:100%}.nx-progress__indicator[_ngcontent-%COMP%]{transform-origin:top left;height:100%;position:absolute;width:100%}[dir=rtl][_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]{transform-origin:top right}.nx-progress__indicator[_ngcontent-%COMP%]:after{height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:"";display:inline-block;left:0;background-color:var(--progressbar-indicator-color)}[dir=rtl][_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]:after, [dir=rtl]   [_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]:after{right:0;left:auto}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{height:8px}.nx-progress__track[_ngcontent-%COMP%]{border:1px solid windowFrame;border-radius:2px}.nx-progress__indicator[_ngcontent-%COMP%]{border-right:1px solid windowFrame}[dir=rtl][_ngcontent-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]{border-right:none;border-left:1px solid windowFrame}.nx-progress__indicator[_ngcontent-%COMP%]:after{background:highlight}}'],changeDetection:0}),s})(),g=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[],imports:[[x.ez]]}),s})()}}]);