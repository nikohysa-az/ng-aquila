"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[3196],{3196:(T,d,r)=>{r.d(d,{_Y:()=>N,gx:()=>p,wu:()=>w});var n=r(5e3),u=r(226),m=r(5583),l=r(9209),c=r(9808);const h=["link"];function P(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"button",19,7),n.NdJ("click",function(){n.CHM(t);const a=n.oxw().$implicit;return n.oxw(3).onPage(a.value)}),n._uU(2),n.qZA()}if(2&e){const t=n.oxw().$implicit,i=n.oxw(3);n.Q6J("ngClass",i.getPaginationNumberClasses(t)),n.uIk("aria-current",t.value===i.page?"page":""),n.xp6(2),n.hij(" ",t.label," ")}}function b(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.label," ")}}function f(e,s){if(1&e&&(n.TgZ(0,"li",16),n.YNc(1,P,3,3,"button",17),n.YNc(2,b,2,1,"span",18),n.qZA()),2&e){const t=s.$implicit,i=n.oxw(3);n.Q6J("ngClass",i.getPaginationItemClasses(t)),n.xp6(1),n.Q6J("ngIf","..."!==t.label),n.xp6(1),n.Q6J("ngIf","..."===t.label)}}function C(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"li",20)(1,"button",19,7),n.NdJ("click",function(){const o=n.CHM(t).$implicit;return n.oxw(3).onPage(o.value)}),n._uU(3),n.qZA()()}if(2&e){const t=s.$implicit,i=n.oxw(3);n.Q6J("ngClass",i.getPaginationItemClasses(t)),n.xp6(1),n.Q6J("ngClass",i.getPaginationNumberClasses(t)),n.uIk("aria-current",t.value===i.page?"page":""),n.xp6(2),n.hij(" ",t.label," ")}}function M(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"ul",4)(1,"li",5)(2,"button",6,7),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).onFirst()}),n._UZ(4,"nx-icon",8),n.qZA()(),n.TgZ(5,"li",9)(6,"button",10,7),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).onPrev()}),n._UZ(8,"nx-icon",8),n.qZA()(),n.YNc(9,f,3,3,"li",11),n.YNc(10,C,4,4,"li",12),n.TgZ(11,"li",13)(12,"button",14,7),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).onNext()}),n._UZ(14,"nx-icon",8),n.qZA()(),n.TgZ(15,"li",5)(16,"button",15,7),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).onLast()}),n._UZ(18,"nx-icon",8),n.qZA()()()}if(2&e){const t=n.oxw(2);n.uIk("aria-label",t.paginationTexts.ariaLabel),n.xp6(2),n.ekj("is-disabled",t._isPaginationPreviousDisabled()),n.Q6J("disabled",t._isPaginationPreviousDisabled()),n.uIk("aria-label",t.paginationTexts.first),n.xp6(2),n.Q6J("name",t._isRTL?"arrow-last":"arrow-first"),n.xp6(2),n.ekj("is-disabled",t._isPaginationPreviousDisabled()),n.Q6J("disabled",t._isPaginationPreviousDisabled()),n.uIk("aria-label",t.paginationTexts.previous),n.xp6(2),n.Q6J("name",t._isRTL?"arrow-right":"arrow-left"),n.xp6(1),n.Q6J("ngForOf",t.getPages()),n.xp6(1),n.Q6J("ngForOf",t.getMobilePages()),n.xp6(2),n.ekj("is-disabled",t._isPaginationNextDisabled()),n.Q6J("disabled",t._isPaginationNextDisabled()),n.uIk("aria-label",t.paginationTexts.next),n.xp6(2),n.Q6J("name",t._isRTL?"arrow-left":"arrow-right"),n.xp6(2),n.ekj("is-disabled",t._isPaginationNextDisabled()),n.Q6J("disabled",t._isPaginationNextDisabled()),n.uIk("aria-label",t.paginationTexts.last),n.xp6(2),n.Q6J("name",t._isRTL?"arrow-first":"arrow-last")}}function v(e,s){if(1&e&&(n.TgZ(0,"nav",2),n.YNc(1,M,19,23,"ul",3),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.isPaginationContainerVisible())}}function k(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"nav",21)(1,"button",22,7),n.NdJ("click",function(){return n.CHM(t),n.oxw().onPrev()}),n._UZ(3,"nx-icon",8),n.TgZ(4,"span",23),n._uU(5),n.qZA()(),n.TgZ(6,"div",24)(7,"span",25),n._uU(8),n.qZA(),n.TgZ(9,"span",26),n._uU(10),n.qZA(),n.TgZ(11,"span",27),n._uU(12),n.qZA()(),n.TgZ(13,"button",28,7),n.NdJ("click",function(){return n.CHM(t),n.oxw().onNext()}),n.TgZ(15,"span",23),n._uU(16),n.qZA(),n._UZ(17,"nx-icon",8),n.qZA()()}if(2&e){const t=n.oxw();n.uIk("aria-label",t.paginationTexts.ariaLabel),n.xp6(1),n.ekj("is-disabled",t._isPaginationPreviousDisabled()),n.Q6J("disabled",t._isPaginationPreviousDisabled()),n.uIk("aria-label",t.paginationTexts.previous),n.xp6(2),n.Q6J("name",t._isRTL?"arrow-right":"arrow-left"),n.xp6(2),n.hij(" ",t.paginationTexts.previous," "),n.xp6(3),n.Oqu(t.page),n.xp6(2),n.hij(" ",t.paginationTexts.ofLabel," "),n.xp6(2),n.Oqu(t.totalNumberPages),n.xp6(1),n.ekj("is-disabled",t._isPaginationNextDisabled()),n.Q6J("disabled",t._isPaginationNextDisabled()),n.uIk("aria-label",t.paginationTexts.next),n.xp6(3),n.hij(" ",t.paginationTexts.next," "),n.xp6(1),n.Q6J("name",t._isRTL?"arrow-left":"arrow-right")}}const O={previous:"Previous",next:"Next",first:"First",last:"Last",ofLabel:"of",ariaLabel:"Please select your page"},p=new n.OlP("nx-pagination-texts");let x=(()=>{class e{constructor(){this._pagesMobile=3,this._elipsisText="...",this._classExpanded="expanded-view"}getPages(t,i){let a=[],o=[],_=[],g=[];return o=this.getStartArray(t,i),_=this.getMiddleArray(t,i),g=this.getEndArray(t,i),a=[...o,..._,...g],a}getMiddleArray(t,i){let a=t<6?4:t-1;const o=[];for(;o.length<3&&a>=2&&a<=i-3&&a<=t+1&&a>=t-1;)o.push(this.createPaginationItem(a,a)),a++;return o}getEndArray(t,i){const a=[];let o=i<=3?i+1:i<=6?i-(i-4):i-2;const _=t<i-4;for(;o<=i;){const g=this.createPaginationItem(0===a.length&&_?this._elipsisText:o,o,!0);a.push(g),o++}return a}getStartArray(t,i){let a=0;const o=[];for(;a<3&&a<i;){const g=2===a&&t>5?this.createPaginationItem(this._elipsisText,a,!0):this.createPaginationItem(a+1,a+1,!0);o.push(g),a++}return o}getMobilePages(t,i){if(i<this._pagesMobile)return Array.from(Array(i).keys()).map(a=>this.createPaginationItem(a+1,a+1));switch(t){case 1:return[1,2,3].map(a=>this.createPaginationItem(a,a));case i:return[i-2,i-1,i].map(a=>this.createPaginationItem(a,a));default:return[t-1,t,t+1].map(a=>this.createPaginationItem(a,a))}}createPaginationItem(t,i,a){return{label:t,value:i,class:a?this._classExpanded:""}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),N=(()=>{class e{constructor(t,i,a,o,_){this._dir=i,this.paginationUtilsService=a,this._cdr=o,this._focusMonitor=_,this._type="simple",this.totalNumberPages=0,this.nxGoPrev=new n.vpe,this.nxGoNext=new n.vpe,this.nxGoPage=new n.vpe,this.paginationTexts=t||O,this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._cdr.detectChanges()})}get page(){return this._page}set page(t){this._page=t,this._cdr.markForCheck()}get count(){return this._count}set count(t){this._count=t,this.totalNumberPages=this.calculateTotalPages(),this._cdr.markForCheck()}get perPage(){return this._perPage}set perPage(t){this._perPage=t,this.totalNumberPages=this.calculateTotalPages(),this._cdr.markForCheck()}get type(){return this._type}set type(t){this._type=t,this._cdr.markForCheck()}ngOnInit(){this.totalNumberPages=this.calculateTotalPages()}ngAfterContentInit(){"advanced"===this.type&&(!this.paginationTexts.last||!this.paginationTexts.first)&&console.warn("Please define aria labels for the last and first arrows.")}ngAfterViewInit(){this._linkElements.forEach(t=>this._focusMonitor.monitor(t)),this._linkElementsPrevious=this._linkElements,this._linkElements.changes.subscribe(t=>{this._linkElementsPrevious.forEach(i=>this._focusMonitor.stopMonitoring(i)),this._linkElementsPrevious=this._linkElements,this._linkElements.forEach(i=>this._focusMonitor.monitor(i))})}ngOnDestroy(){var t;null===(t=this._linkElements)||void 0===t||t.forEach(i=>this._focusMonitor.stopMonitoring(i)),this._dirChangeSubscription.unsubscribe()}getMin(){return this.totalNumberPages>0?1:0}getMax(){let t=this._perPage*this._page;return t>this._count&&(t=this._count),t}calculateTotalPages(){return Math.ceil(this._count/this._perPage)||0}onPage(t){this.nxGoPage.emit(t)}onPrev(){this._isPaginationPreviousDisabled()||this.nxGoPrev.emit()}onNext(){this._isPaginationNextDisabled()||this.nxGoNext.emit()}onFirst(){this._isPaginationPreviousDisabled()||this.onPage(1)}onLast(){this._isPaginationNextDisabled()||this.onPage(this.totalNumberPages)}lastPage(){return this._perPage*this._page>=this._count}getPages(){return this.paginationUtilsService.getPages(this._page,this.totalNumberPages)}getMobilePages(){return this.paginationUtilsService.getMobilePages(this._page,this.totalNumberPages)}getPaginationItemClasses(t){return{"is-ellipsis":"..."===t.label,"nx-pagination__item--expanded-view":"expanded-view"===t.class}}getPaginationNumberClasses(t){return{"is-active":t.value===this.page,"nx-pagination__ellipsis":"..."===t.label,"nx-pagination__link":"..."!==t.label}}isPaginationVisible(){return this.count>0}isPaginationCompactVisible(){return this.type.includes("simple")&&this.count>0}isPaginationContainerVisible(){return this.type.includes("advanced")}_isPaginationPreviousDisabled(){return this.page===this.getMin()}_isPaginationNextDisabled(){return this.page===this.totalNumberPages}get _isRTL(){return"rtl"===this._dir.value}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(p,8),n.Y36(u.Is,8),n.Y36(x),n.Y36(n.sBO),n.Y36(m.tE))},e.\u0275cmp=n.Xpm({type:e,selectors:[["nx-pagination"]],viewQuery:function(t,i){if(1&t&&n.Gf(h,5),2&t){let a;n.iGM(a=n.CRH())&&(i._linkElements=a)}},inputs:{page:["nxPage","page"],count:["nxCount","count"],perPage:["nxPerPage","perPage"],type:["nxType","type"]},outputs:{nxGoPrev:"nxGoPrev",nxGoNext:"nxGoNext",nxGoPage:"nxGoPage"},decls:2,vars:2,consts:[["aria-label","Page navigation","class","nx-pagination",4,"ngIf"],["class","nx-pagination-compact",4,"ngIf"],["aria-label","Page navigation",1,"nx-pagination"],["class","nx-pagination__container",4,"ngIf"],[1,"nx-pagination__container"],[1,"nx-pagination__item"],[1,"nx-pagination__link","nx-pagination__link--first",3,"disabled","click"],["link",""],[1,"nx-pagination__arrow",3,"name"],[1,"nx-pagination__item","nx-pagination__item-previous"],[1,"nx-pagination__link","nx-pagination__link--previous",3,"disabled","click"],["class","nx-pagination__item nx-pagination__item--desktop",3,"ngClass",4,"ngFor","ngForOf"],["class","nx-pagination__item nx-pagination__item--mobile",3,"ngClass",4,"ngFor","ngForOf"],[1,"nx-pagination__item","nx-pagination__item-next"],[1,"nx-pagination__link","nx-pagination__link--next",3,"disabled","click"],[1,"nx-pagination__link","nx-pagination__link--last",3,"disabled","click"],[1,"nx-pagination__item","nx-pagination__item--desktop",3,"ngClass"],["class","nx-pagination--number",3,"ngClass","click",4,"ngIf"],[4,"ngIf"],[1,"nx-pagination--number",3,"ngClass","click"],[1,"nx-pagination__item","nx-pagination__item--mobile",3,"ngClass"],[1,"nx-pagination-compact"],[1,"nx-pagination-compact__previous",3,"disabled","click"],[1,"nx-pagination-compact__direction-label"],[1,"nx-pagination-compact__display"],[1,"nx-pagination-compact__current-page"],[1,"nx-pagination-compact__page-separator"],[1,"nx-pagination-compact__total-pages"],[1,"nx-pagination-compact__next",3,"disabled","click"]],template:function(t,i){1&t&&(n.YNc(0,v,2,1,"nav",0),n.YNc(1,k,18,16,"nav",1)),2&t&&(n.Q6J("ngIf",i.isPaginationVisible()),n.xp6(1),n.Q6J("ngIf",i.isPaginationCompactVisible()))},directives:[l.O8,c.O5,c.sg,c.mk],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-pagination__container[_ngcontent-%COMP%]{display:flex;font-size:var(--pagination-font-size);line-height:var(--pagination-line-height);font-weight:var(--pagination-font-weight);letter-spacing:var(--pagination-letter-spacing);padding:0}.nx-pagination__item[_ngcontent-%COMP%]{margin:0 16px;list-style:none;font-weight:var(--pagination-item-font-weight)}.nx-pagination__item[_ngcontent-%COMP%]:first-child{margin:0}.nx-pagination__item[_ngcontent-%COMP%]:last-child{margin:0}.nx-pagination__item.is-ellipsis[_ngcontent-%COMP%]{color:var(--pagination-text-color)}.nx-pagination__item--expanded-view[_ngcontent-%COMP%]{display:block}.nx-pagination__link[_ngcontent-%COMP%]{color:var(--pagination-link-color);padding:0;text-decoration:none;background-color:transparent;border:0;cursor:pointer}.nx-pagination__link.is-active[_ngcontent-%COMP%]{color:var(--pagination-text-color);font-weight:700;cursor:default}@media screen and (-ms-high-contrast: active){.nx-pagination__link.is-active[_ngcontent-%COMP%]{border-bottom:4px solid windowText}}nx-icon.nx-pagination__arrow[_ngcontent-%COMP%], nx-icon.nx-pagination__arrow[_ngcontent-%COMP%]{font-size:var(--pagination-icon-size)}.nx-pagination-compact[_ngcontent-%COMP%]{display:flex;font-size:var(--pagination-font-size);line-height:var(--pagination-line-height);font-weight:var(--pagination-font-weight);letter-spacing:var(--pagination-letter-spacing);padding:0}.nx-pagination-compact__display[_ngcontent-%COMP%]{color:var(--pagination-text-color);display:flex}.nx-pagination-compact__current-page[_ngcontent-%COMP%]{font-weight:700;margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__current-page[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__current-page[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}.nx-pagination-compact__total-pages[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__total-pages[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__total-pages[_ngcontent-%COMP%]{margin-right:8px;margin-left:0;margin-left:initial}.nx-pagination-compact__next[_ngcontent-%COMP%], .nx-pagination-compact__previous[_ngcontent-%COMP%], .nx-pagination__arrow-last[_ngcontent-%COMP%], .nx-pagination__arrow-first[_ngcontent-%COMP%]{color:var(--pagination-link-color);font-weight:var(--pagination-icon-font-weight);text-decoration:none;text-transform:uppercase;display:flex;align-items:center;padding:0;background-color:transparent;cursor:pointer;border:0}.nx-pagination-compact__previous[_ngcontent-%COMP%]{margin-right:32px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__previous[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__previous[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:32px}.nx-pagination-compact__next[_ngcontent-%COMP%]{margin-left:32px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__next[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__next[_ngcontent-%COMP%]{margin-right:32px;margin-left:0;margin-left:initial}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]{display:block;font-size:var(--pagination-compact-direction-font-size);line-height:var(--pagination-compact-direction-line-height);font-weight:var(--pagination-compact-direction-font-weight);letter-spacing:var(--pagination-compact-direction-letter-spacing)}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child{margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child, [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child{margin-right:0;margin-right:initial;margin-left:8px}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child{margin-right:8px;margin-left:0;margin-left:initial}.nx-pagination-compact__previous.is-disabled[_ngcontent-%COMP%], .nx-pagination-compact__next.is-disabled[_ngcontent-%COMP%], .nx-pagination__link.is-disabled[_ngcontent-%COMP%]{color:var(--pagination-link-disabled-color);cursor:not-allowed}@media screen and (-ms-high-contrast: active){.nx-pagination-compact__previous.is-disabled[_ngcontent-%COMP%], .nx-pagination-compact__next.is-disabled[_ngcontent-%COMP%], .nx-pagination__link.is-disabled[_ngcontent-%COMP%]{color:GrayText}}.nx-pagination-compact__previous.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination-compact__next.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination__link.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination--number.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active),(forced-colors: active){.nx-pagination-compact__previous.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination-compact__next.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination__link.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination--number.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-pagination__link--next[_ngcontent-%COMP%], .nx-pagination__link--previous[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%]{display:flex;align-items:center}.nx-pagination__item-next[_ngcontent-%COMP%]{margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination__item-next[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination__item-next[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}.nx-pagination__item-previous[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination__item-previous[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination__item-previous[_ngcontent-%COMP%]{margin-right:8px;margin-left:0;margin-left:initial}.nx-pagination-compact__direction-label[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%], .nx-pagination__item--desktop[_ngcontent-%COMP%]{display:flex}@media (max-width: 703px){.nx-pagination-compact__direction-label[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%], .nx-pagination__item--desktop[_ngcontent-%COMP%]{display:none}}.nx-pagination__item--mobile[_ngcontent-%COMP%]{display:none}@media (max-width: 703px){.nx-pagination__item--mobile[_ngcontent-%COMP%]{display:block}}"],changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[x],imports:[[c.ez,l.cf]]}),e})()}}]);