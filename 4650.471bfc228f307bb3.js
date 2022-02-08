"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[4650],{4650:(C,r,a)=>{a.r(r),a.d(r,{VideoExamplesModule:()=>w});var s=a(3191),t=a(5e3),g=a(2313),M=a(5583),d=a(9209),u=a(9808);const y=["playButton"];function h(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",3,4),t.NdJ("click",function(){return t.CHM(e),t.oxw().select()})("keydown.enter",function(){return t.CHM(e),t.oxw().select()}),t._UZ(3,"nx-icon",5),t.qZA(),t.TgZ(4,"img",6),t.NdJ("click",function(){return t.CHM(e),t.oxw().select()})("keydown.enter",function(){return t.CHM(e),t.oxw().select()}),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.uIk("aria-label",e.playButtonAriaLabel),t.xp6(3),t.Q6J("src",e.imgSrc,t.LSH)("alt",e.altText)}}function v(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"iframe",7),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.videoSrc,t.uOi),t.uIk("allowfullscreen",e.allowFullScreen)}}let c=(()=>{class n{constructor(e,i,l){this.sanitizer=e,this._cdr=i,this._focusMonitor=l,this._videoId=null,this._altText="",this._playButtonAriaLabel="",this._previewImageSrc=null,this._showPlayerControls=!0,this._allowFullScreen=!0,this._interfaceLanguage=null,this.showPlayer=!1}set videoId(e){this._videoId!==e&&(this._videoId=e,this._cdr.markForCheck())}get videoId(){return this._videoId}set altText(e){this._altText!==e&&(this._altText=e,this._cdr.markForCheck())}get altText(){return this._altText}set nxPlayButtonAriaLabel(e){this._playButtonAriaLabel!==e&&(this._playButtonAriaLabel=e,this._cdr.markForCheck())}get nxPlayButtonAriaLabel(){return this._playButtonAriaLabel}set previewImageSrc(e){this._previewImageSrc!==e&&(this._previewImageSrc=e,this._cdr.markForCheck())}get previewImageSrc(){return this._previewImageSrc}set showPlayerControls(e){this._showPlayerControls=(0,s.Ig)(e),this._cdr.markForCheck()}get showPlayerControls(){return this._showPlayerControls}set allowFullScreen(e){this._allowFullScreen=(0,s.Ig)(e),this._cdr.markForCheck()}get allowFullScreen(){return this._allowFullScreen}set interfaceLanguage(e){this._interfaceLanguage!==e&&(this._interfaceLanguage=e,this._cdr.markForCheck())}get interfaceLanguage(){return this._interfaceLanguage}ngAfterViewInit(){this._focusMonitor.monitor(this._playButton)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._playButton)}select(){this.showPlayer=!0,this._cdr.markForCheck()}get videoSrc(){let e=`https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&autoplay=1`;return this.showPlayerControls||(e+="&controls=0"),this.allowFullScreen||(e+="&fs=0"),this.interfaceLanguage&&(e+=`&hl=${this.interfaceLanguage}`),this.sanitizer.bypassSecurityTrustResourceUrl(e)}get imgSrc(){return this.previewImageSrc?this.previewImageSrc:`https://img.youtube.com/vi/${this.videoId}/sddefault.jpg`}get playButtonAriaLabel(){return this.nxPlayButtonAriaLabel?this.nxPlayButtonAriaLabel:this.altText?`${this.altText} - Play Video`:"Play Video"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.H7),t.Y36(t.sBO),t.Y36(M.tE))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nx-video"]],viewQuery:function(e,i){if(1&e&&t.Gf(y,5),2&e){let l;t.iGM(l=t.CRH())&&(i._playButton=l.first)}},inputs:{videoId:["nxVideoId","videoId"],altText:["nxAltText","altText"],nxPlayButtonAriaLabel:"nxPlayButtonAriaLabel",previewImageSrc:["nxPreviewImageSrc","previewImageSrc"],showPlayerControls:["nxShowPlayerControls","showPlayerControls"],allowFullScreen:["nxAllowFullScreen","allowFullScreen"],interfaceLanguage:["nxInterfaceLanguage","interfaceLanguage"]},decls:4,vars:2,consts:[[1,"nx-video"],[1,"nx-video__iframe"],[4,"ngIf"],[1,"nx-video__play-button",3,"click","keydown.enter"],["playButton",""],["name","play","size","s",1,"nx-video__high-contrast-icon"],[1,"nx-video__thumbnail",3,"src","alt","click","keydown.enter"],["title","video",1,"nx-video__iframe",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,h,5,3,"div",2),t.YNc(3,v,2,2,"div",2),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",!i.showPlayer),t.xp6(1),t.Q6J("ngIf",i.videoId&&i.showPlayer))},directives:[u.O5,d.O8],styles:[".nx-video[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:auto}.nx-video__iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.nx-video__thumbnail[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.7}.nx-video__play-button[_ngcontent-%COMP%]{border:none;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nODhweCcgaGVpZ2h0PSc1NnB4JyB2aWV3Qm94PScwIDAgODggNTYnIHZlcnNpb249JzEuMSc+PHRpdGxlPkF0b20gLyBNZWRpYSAvIFlvdVR1YmUgUGxheWVyIC8gW0Fzc2V0c10gLyBQbGF5IEJ1dHRvbjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PHJlY3QgaWQ9J3BhdGgtMScgeD0nMCcgeT0nMCcgd2lkdGg9Jzg4JyBoZWlnaHQ9JzU2JyByeD0nOCcvPjxmaWx0ZXIgeD0nLTQwLjklJyB5PSctNjQuMyUnIHdpZHRoPScxODEuOCUnIGhlaWdodD0nMjI4LjYlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMic+PGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMScvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEyJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnLz48L2ZpbHRlcj48L2RlZnM+PGcgaWQ9J0F0b20tLy1NZWRpYS0vLVlvdVR1YmUtUGxheWVyLS8tW0Fzc2V0c10tLy1QbGF5LUJ1dHRvbicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PGcgaWQ9J0JhY2tncm91bmQnIG9wYWNpdHk9JzAuODAxMjM0MTQ5Jz48dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMiknIHhsaW5rOmhyZWY9JyNwYXRoLTEnLz48dXNlIGZpbGw9JyM0MTQxNDEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMScvPjwvZz48cGF0aCBkPSdNNTQuMjExMTQ1NiwyOC44OTQ0MjcyIEwzMy40NDcyMTM2LDM5LjI3NjM5MzIgQzMyLjk1MzIzNTEsMzkuNTIzMzgyNSAzMi4zNTI1NjIxLDM5LjMyMzE1ODEgMzIuMTA1NTcyOCwzOC44MjkxNzk2IEMzMi4wMzYxNDUxLDM4LjY5MDMyNDIgMzIsMzguNTM3MjExMSAzMiwzOC4zODE5NjYgTDMyLDE3LjYxODAzNCBDMzIsMTcuMDY1NzQ5MiAzMi40NDc3MTUzLDE2LjYxODAzNCAzMywxNi42MTgwMzQgQzMzLjE1NTI0NTEsMTYuNjE4MDM0IDMzLjMwODM1ODIsMTYuNjU0MTc5MSAzMy40NDcyMTM2LDE2LjcyMzYwNjggTDU0LjIxMTE0NTYsMjcuMTA1NTcyOCBDNTQuNzA1MTI0MSwyNy4zNTI1NjIxIDU0LjkwNTM0ODUsMjcuOTUzMjM1MSA1NC42NTgzNTkyLDI4LjQ0NzIxMzYgQzU0LjU2MTU5NTUsMjguNjQwNzQxIDU0LjQwNDY3MywyOC43OTc2NjM1IDU0LjIxMTE0NTYsMjguODk0NDI3MiBaJyBpZD0nVHJpYW5nbGUnIGZpbGw9JyNGRkZGRkYnLz48L2c+PC9zdmc+) center no-repeat;cursor:pointer;position:absolute;width:88px;height:56px;z-index:1;border-radius:4px}.nx-video__play-button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-video__play-button[_ngcontent-%COMP%]:focus{outline:none}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:none}.nx-video__play-button[_ngcontent-%COMP%], .nx-video__play-button[_ngcontent-%COMP%]:before{top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (-ms-high-contrast: active){.nx-video__play-button[_ngcontent-%COMP%]{background:buttonFace;border:1px solid buttonText;color:buttonText}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}}.nx-video__play-button.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){.nx-video__play-button.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),n})(),_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,d.cf]]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["video-advanced-example"]],decls:1,vars:1,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxInterfaceLanguage","fr",3,"nxAllowFullScreen"]],template:function(e,i){1&e&&t._UZ(0,"nx-video",0),2&e&&t.Q6J("nxAllowFullScreen",!1)},directives:[c],styles:[""]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["video-custom-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxPreviewImageSrc","http://placehold.it/828x600?text=Video"]],template:function(e,i){1&e&&t._UZ(0,"nx-video",0)},directives:[c],styles:[""]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["video-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video"]],template:function(e,i){1&e&&t._UZ(0,"nx-video",0)},directives:[c],styles:[""]}),n})(),w=(()=>{class n{static components(){return{video:m,"video-advanced":x,"video-custom":p}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_]]}),n})()}}]);