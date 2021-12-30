"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9647],{9647:(Y,A,p)=>{p.r(A),p.d(A,{AutocompleteExamplesModule:()=>K});var m=p(520),O=p(9508),U=p(9609),w=p(7711),B=p(5410),e=p(5e3),u=p(7826),s=p(829),d=p(9808),C=p(7455);function J(o,a){if(1&o&&(e.TgZ(0,"nx-autocomplete-option",3),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}let g=(()=>{class o{constructor(){this.options="Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,\n    Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,\n    Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["autocomplete-basic-example"]],decls:4,vars:2,consts:[["type","text",3,"nxAutocomplete"],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(e._UZ(0,"input",0),e.TgZ(1,"nx-autocomplete",null,1),e.YNc(3,J,2,2,"nx-autocomplete-option",2),e.qZA()),2&t){const l=e.MAs(2);e.Q6J("nxAutocomplete",l),e.xp6(3),e.Q6J("ngForOf",n.options)}},directives:[u.Kl,s.E,d.sg,C.e],styles:[""]}),o})();var r=p(3075),x=p(4850),h=p(7222),v=p(693),M=p(2070),D=p(386),L=p(6155);function Q(o,a){if(1&o&&(e.TgZ(0,"nx-autocomplete-option",12),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",e.lcZ(2,2,t)," ")}}let y=(()=>{class o{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const n=(i=t,`${this.WIKIPEDIA_URL}?${(new m.LE).append("action","opensearch").append("search",encodeURIComponent(i)).append("format","json").toString()}`);var i;return this.client.jsonp(n,"callback").pipe((0,x.U)(i=>i[1].map(c=>({value:c}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Z=(()=>{class o{constructor(t){this.wikipediaService=t,this.modelBoundData="asdf",this.testForm=(new r.qu).group({autocomplete:[null,r.kI.required]}),this.dynamicBackendOptions=n=>t.search(n).pipe((0,x.U)(l=>l.map(i=>i.value)))}simpleFilteredOptions(t){return t?"Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",").filter(l=>l.toLowerCase().indexOf(t.toLowerCase())>=0):[]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["autocomplete-data-binding-example"]],features:[e._Bn([y])],decls:21,vars:10,consts:[["nxLabel","Template bound"],["nxInput","","type","text","nxAutocompleteDebounce","0",3,"nxAutocomplete","ngModel","ngModelChange"],["auto3","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"formGroup"],["nxLabel","Reactive bound"],["nxInput","","type","text","formControlName","autocomplete",3,"nxAutocomplete","nxAutocompleteItems"],["auto4",""],["nxLabel","Provide this required field"],["nxInput","","ngModel","","required","",3,"nxAutocomplete","nxAutocompleteItems"],["nxError",""],["auto5","nxAutocomplete"],[3,"value"]],template:function(t,n){if(1&t&&(e.TgZ(0,"nx-formfield",0),e.TgZ(1,"input",1),e.NdJ("ngModelChange",function(i){return n.modelBoundData=i}),e.qZA(),e.qZA(),e.TgZ(2,"nx-autocomplete",null,2),e.YNc(4,Q,3,4,"nx-autocomplete-option",3),e.qZA(),e._uU(5),e.TgZ(6,"form",4),e.TgZ(7,"nx-formfield",5),e._UZ(8,"input",6),e._UZ(9,"nx-autocomplete",null,7),e.qZA(),e.qZA(),e._uU(11),e.TgZ(12,"nx-natural-language-form"),e._uU(13," Here is a word "),e.TgZ(14,"nx-word",8),e._UZ(15,"input",9),e.TgZ(16,"div",10),e._uU(17,"This field is required."),e.qZA(),e._UZ(18,"nx-autocomplete",null,11),e.qZA(),e._uU(20," with some following copy.\n"),e.qZA()),2&t){const l=e.MAs(3),i=e.MAs(10),c=e.MAs(19);e.xp6(1),e.Q6J("nxAutocomplete",l)("ngModel",n.modelBoundData),e.xp6(3),e.Q6J("ngForOf",n.simpleFilteredOptions(n.modelBoundData)),e.xp6(1),e.hij("\nTemplate bound: ",n.modelBoundData," "),e.xp6(1),e.Q6J("formGroup",n.testForm),e.xp6(2),e.Q6J("nxAutocomplete",i)("nxAutocompleteItems",n.dynamicBackendOptions),e.xp6(3),e.hij("\nReactive form: ",n.testForm.controls.autocomplete.value," "),e.xp6(4),e.Q6J("nxAutocomplete",c)("nxAutocompleteItems",n.dynamicBackendOptions)}},directives:[h.V,v.a,u.Kl,r.Fj,r.JJ,r.On,s.E,d.sg,r._Y,r.JL,r.sg,r.u,M.m,D.u,r.Q7,L.S,C.e],pipes:[d.i8],styles:[""]}),o})(),E=(()=>{class o{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const n=(i=t,`${this.WIKIPEDIA_URL}?${(new m.LE).append("action","opensearch").append("search",encodeURIComponent(i)).append("format","json").toString()}`);var i;return this.client.jsonp(n,"callback").pipe((0,x.U)(i=>i[1].map(c=>({value:c}))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),F=(()=>{class o{constructor(t){this.wikipediaService=t,this.dynamicBackendOptions=n=>t.search(n).pipe((0,x.U)(l=>l.map(i=>i.value)))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(E))},o.\u0275cmp=e.Xpm({type:o,selectors:[["autocomplete-default-rendering-example"]],features:[e._Bn([E])],decls:3,vars:2,consts:[["type","text",3,"nxAutocomplete","nxAutocompleteItems"],["auto2","nxAutocomplete"]],template:function(t,n){if(1&t&&(e._UZ(0,"input",0),e._UZ(1,"nx-autocomplete",null,1)),2&t){const l=e.MAs(2);e.Q6J("nxAutocomplete",l)("nxAutocompleteItems",n.dynamicBackendOptions)}},directives:[u.Kl,s.E],styles:[""]}),o})();function R(o,a){if(1&o&&(e.TgZ(0,"nx-autocomplete-option",4),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}let T=(()=>{class o{constructor(){this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}filter(t){this.filteredOptions=this.options.filter(n=>new RegExp(t,"gi").test(n))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["autocomplete-filtering-example"]],decls:5,vars:2,consts:[["type","text",3,"nxAutocomplete","input"],["animalInput",""],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("input",function(){e.CHM(l);const c=e.MAs(1);return n.filter(c.value)}),e.qZA(),e.TgZ(2,"nx-autocomplete",null,2),e.YNc(4,R,2,2,"nx-autocomplete-option",3),e.qZA()}if(2&t){const l=e.MAs(3);e.Q6J("nxAutocomplete",l),e.xp6(4),e.Q6J("ngForOf",n.filteredOptions)}},directives:[u.Kl,s.E,d.sg,C.e],styles:[""]}),o})();var j=p(8826),k=p(3234),S=p(7919),N=p(2822);function W(o,a){if(1&o&&(e.TgZ(0,"nx-autocomplete-option",9),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}let I=(()=>{class o{constructor(){this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}filter(t){this.filteredOptions=this.options.filter(n=>new RegExp(t,"gi").test(n))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["autocomplete-outline-example"]],decls:11,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxLabel","Animals","appearance","outline","nxFloatLabel","always"],["nxInput","","type","text",3,"nxAutocomplete","input"],["animalInput",""],["animal1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4",3),e._uU(4,"Autocomplete with appearance outline"),e.qZA(),e.TgZ(5,"nx-formfield",4),e.TgZ(6,"input",5,6),e.NdJ("input",function(){e.CHM(l);const c=e.MAs(7);return n.filter(c.value)}),e.qZA(),e.TgZ(8,"nx-autocomplete",null,7),e.YNc(10,W,2,2,"nx-autocomplete-option",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const l=e.MAs(9);e.xp6(6),e.Q6J("nxAutocomplete",l),e.xp6(4),e.Q6J("ngForOf",n.filteredOptions)}},directives:[j.R,k.y,S.s,N.s,h.V,v.a,u.Kl,s.E,d.sg,C.e],styles:[""]}),o})(),K=(()=>{class o{static components(){return{"autocomplete-basic":g,"autocomplete-data-binding":Z,"autocomplete-default-rendering":F,"autocomplete-filtering":T,"autocomplete-outline":I}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[w._R,U.ZI,B.iQ,O.f,m.Ed,m.JF]]}),o})()}}]);