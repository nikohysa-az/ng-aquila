(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{zLIi:function(e,t,n){"use strict";n.r(t),n.d(t,"VideoExamplesModule",function(){return p});var o=n("ofXK"),c=n("mN63"),i=n("fXoL");let a=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[o.c,c.c]]}),e})();var r=n("8LU1"),l=n("jhN1"),s=n("u47x"),d=n("+vaC");const u=["playButton"];function g(e,t){if(1&e){const e=i.Wb();i.Vb(0,"div"),i.Vb(1,"button",3,4),i.cc("click",function(){return i.xc(e),i.gc().select()})("keydown.enter",function(){return i.xc(e),i.gc().select()}),i.Qb(3,"nx-icon",5),i.Ub(),i.Vb(4,"img",6),i.cc("click",function(){return i.xc(e),i.gc().select()})("keydown.enter",function(){return i.xc(e),i.gc().select()}),i.Ub(),i.Ub()}if(2&e){const e=i.gc();i.Db(1),i.Eb("aria-label",e.playButtonAriaLabel),i.Db(3),i.mc("src",e.imgSrc,i.Ac)("alt",e.altText)}}function h(e,t){if(1&e&&(i.Vb(0,"div"),i.Qb(1,"iframe",7),i.Ub()),2&e){const e=i.gc();i.Db(1),i.mc("src",e.videoSrc,i.zc),i.Eb("allowfullscreen",e.allowFullScreen)}}let b=(()=>{class e{constructor(e,t,n){this.sanitizer=e,this._changeDetectorRef=t,this._focusMonitor=n,this._videoId=null,this._altText="",this._playButtonAriaLabel="",this._previewImageSrc=null,this._showPlayerControls=!0,this._allowFullScreen=!0,this._interfaceLanguage=null,this.showPlayer=!1}set videoId(e){this._videoId!==e&&(this._videoId=e,this._changeDetectorRef.markForCheck())}get videoId(){return this._videoId}set altText(e){this._altText!==e&&(this._altText=e,this._changeDetectorRef.markForCheck())}get altText(){return this._altText}set nxPlayButtonAriaLabel(e){this._playButtonAriaLabel!==e&&(this._playButtonAriaLabel=e,this._changeDetectorRef.markForCheck())}get nxPlayButtonAriaLabel(){return this._playButtonAriaLabel}set previewImageSrc(e){this._previewImageSrc!==e&&(this._previewImageSrc=e,this._changeDetectorRef.markForCheck())}get previewImageSrc(){return this._previewImageSrc}set showPlayerControls(e){this._showPlayerControls=Object(r.b)(e),this._changeDetectorRef.markForCheck()}get showPlayerControls(){return this._showPlayerControls}set allowFullScreen(e){this._allowFullScreen=Object(r.b)(e),this._changeDetectorRef.markForCheck()}get allowFullScreen(){return this._allowFullScreen}set interfaceLanguage(e){this._interfaceLanguage!==e&&(this._interfaceLanguage=e,this._changeDetectorRef.markForCheck())}get interfaceLanguage(){return this._interfaceLanguage}ngAfterViewInit(){this._focusMonitor.monitor(this._playButton)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._playButton)}select(){this.showPlayer=!0,this._changeDetectorRef.markForCheck()}get videoSrc(){let e=`https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&autoplay=1`;return this.showPlayerControls||(e+="&controls=0"),this.allowFullScreen||(e+="&fs=0"),this.interfaceLanguage&&(e+="&hl="+this.interfaceLanguage),this.sanitizer.bypassSecurityTrustResourceUrl(e)}get imgSrc(){return this.previewImageSrc?this.previewImageSrc:`https://img.youtube.com/vi/${this.videoId}/sddefault.jpg`}get playButtonAriaLabel(){return this.nxPlayButtonAriaLabel?this.nxPlayButtonAriaLabel:this.altText?this.altText+" - Play Video":"Play Video"}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(l.b),i.Pb(i.h),i.Pb(s.g))},e.\u0275cmp=i.Jb({type:e,selectors:[["nx-video"]],viewQuery:function(e,t){if(1&e&&i.Nc(u,1),2&e){let e;i.sc(e=i.dc())&&(t._playButton=e.first)}},inputs:{videoId:["nxVideoId","videoId"],altText:["nxAltText","altText"],nxPlayButtonAriaLabel:"nxPlayButtonAriaLabel",previewImageSrc:["nxPreviewImageSrc","previewImageSrc"],showPlayerControls:["nxShowPlayerControls","showPlayerControls"],allowFullScreen:["nxAllowFullScreen","allowFullScreen"],interfaceLanguage:["nxInterfaceLanguage","interfaceLanguage"]},decls:4,vars:2,consts:[[1,"nx-video"],[1,"nx-video__iframe"],[4,"ngIf"],[1,"nx-video__play-button",3,"click","keydown.enter"],["playButton",""],["name","play","size","s",1,"nx-video__high-contrast-icon"],[1,"nx-video__thumbnail",3,"src","alt","click","keydown.enter"],["title","video",1,"nx-video__iframe",3,"src"]],template:function(e,t){1&e&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Hc(2,g,5,3,"div",2),i.Hc(3,h,2,2,"div",2),i.Ub(),i.Ub()),2&e&&(i.Db(2),i.mc("ngIf",!t.showPlayer),i.Db(1),i.mc("ngIf",t.videoId&&t.showPlayer))},directives:[o.q,d.a],styles:['.nx-video[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:auto}.nx-video__iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.nx-video__thumbnail[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.7}.nx-video__play-button[_ngcontent-%COMP%]{border:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nODhweCcgaGVpZ2h0PSc1NnB4JyB2aWV3Qm94PScwIDAgODggNTYnIHZlcnNpb249JzEuMSc+PHRpdGxlPkF0b20gLyBNZWRpYSAvIFlvdVR1YmUgUGxheWVyIC8gW0Fzc2V0c10gLyBQbGF5IEJ1dHRvbjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PHJlY3QgaWQ9J3BhdGgtMScgeD0nMCcgeT0nMCcgd2lkdGg9Jzg4JyBoZWlnaHQ9JzU2JyByeD0nOCcvPjxmaWx0ZXIgeD0nLTQwLjklJyB5PSctNjQuMyUnIHdpZHRoPScxODEuOCUnIGhlaWdodD0nMjI4LjYlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMic+PGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMScvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEyJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnLz48L2ZpbHRlcj48L2RlZnM+PGcgaWQ9J0F0b20tLy1NZWRpYS0vLVlvdVR1YmUtUGxheWVyLS8tW0Fzc2V0c10tLy1QbGF5LUJ1dHRvbicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PGcgaWQ9J0JhY2tncm91bmQnIG9wYWNpdHk9JzAuODAxMjM0MTQ5Jz48dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMiknIHhsaW5rOmhyZWY9JyNwYXRoLTEnLz48dXNlIGZpbGw9JyM0MTQxNDEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMScvPjwvZz48cGF0aCBkPSdNNTQuMjExMTQ1NiwyOC44OTQ0MjcyIEwzMy40NDcyMTM2LDM5LjI3NjM5MzIgQzMyLjk1MzIzNTEsMzkuNTIzMzgyNSAzMi4zNTI1NjIxLDM5LjMyMzE1ODEgMzIuMTA1NTcyOCwzOC44MjkxNzk2IEMzMi4wMzYxNDUxLDM4LjY5MDMyNDIgMzIsMzguNTM3MjExMSAzMiwzOC4zODE5NjYgTDMyLDE3LjYxODAzNCBDMzIsMTcuMDY1NzQ5MiAzMi40NDc3MTUzLDE2LjYxODAzNCAzMywxNi42MTgwMzQgQzMzLjE1NTI0NTEsMTYuNjE4MDM0IDMzLjMwODM1ODIsMTYuNjU0MTc5MSAzMy40NDcyMTM2LDE2LjcyMzYwNjggTDU0LjIxMTE0NTYsMjcuMTA1NTcyOCBDNTQuNzA1MTI0MSwyNy4zNTI1NjIxIDU0LjkwNTM0ODUsMjcuOTUzMjM1MSA1NC42NTgzNTkyLDI4LjQ0NzIxMzYgQzU0LjU2MTU5NTUsMjguNjQwNzQxIDU0LjQwNDY3MywyOC43OTc2NjM1IDU0LjIxMTE0NTYsMjguODk0NDI3MiBaJyBpZD0nVHJpYW5nbGUnIGZpbGw9JyNGRkZGRkYnLz48L2c+PC9zdmc+") 50% no-repeat;cursor:pointer;position:absolute;width:88px;height:56px;z-index:1;border-radius:4px}.nx-video__play-button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-video__play-button[_ngcontent-%COMP%]:focus{outline:none}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:none}.nx-video__play-button[_ngcontent-%COMP%], .nx-video__play-button[_ngcontent-%COMP%]:before{top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (-ms-high-contrast:active){.nx-video__play-button[_ngcontent-%COMP%]{background:buttonFace;border:1px solid buttonText;color:buttonText}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}}.nx-video__play-button.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-video__play-button.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}'],changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["video-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video"]],template:function(e,t){1&e&&i.Qb(0,"nx-video",0)},directives:[b],styles:[""]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["video-advanced-example"]],decls:1,vars:1,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxInterfaceLanguage","fr",3,"nxAllowFullScreen"]],template:function(e,t){1&e&&i.Qb(0,"nx-video",0),2&e&&i.mc("nxAllowFullScreen",!1)},directives:[b],styles:[""]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["video-custom-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxPreviewImageSrc","http://placehold.it/828x600?text=Video"]],template:function(e,t){1&e&&i.Qb(0,"nx-video",0)},directives:[b],styles:[""]}),e})(),p=(()=>{class e{static components(){return{video:M,"video-advanced":y,"video-custom":x}}}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[a]]}),e})()}}]);