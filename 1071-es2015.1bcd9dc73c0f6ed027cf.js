(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[1071],{11071:function(n,e,i){var r;!function(t){"use strict";var s,o,u,c=9e15,f=1e9,a="0123456789abcdef",h="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",l="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",d={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},p=!0,g="[DecimalError] ",w=g+"Invalid argument: ",m=g+"Precision limit exceeded",v=g+"crypto unavailable",N="[object Decimal]",b=Math.floor,E=Math.pow,x=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,y=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,M=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,q=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,O=1e7,F=h.length-1,A=l.length-1,Z={toStringTag:N};function D(n){var e,i,r,t=n.length-1,s="",o=n[0];if(t>0){for(s+=o,e=1;e<t;e++)(i=7-(r=n[e]+"").length)&&(s+=H(i)),s+=r;(i=7-(r=(o=n[e])+"").length)&&(s+=H(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function _(n,e,i){if(n!==~~n||n<e||n>i)throw Error(w+n)}function k(n,e,i,r){var t,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,t=0):(t=Math.ceil((e+1)/7),e%=7),s=E(10,7-e),u=n[t]%s|0,null==r?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=i<4&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(n[t+1]/s/100|0)==E(10,e-2)-1||(u==s/2||0==u)&&0==(n[t+1]/s/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(r||i<4)&&9999==u||!r&&i>3&&4999==u):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(n[t+1]/s/1e3|0)==E(10,e-3)-1,o}function P(n,e,i){for(var r,t,s=[0],o=0,u=n.length;o<u;){for(t=s.length;t--;)s[t]*=e;for(s[0]+=a.indexOf(n.charAt(o++)),r=0;r<s.length;r++)s[r]>i-1&&(void 0===s[r+1]&&(s[r+1]=0),s[r+1]+=s[r]/i|0,s[r]%=i)}return s.reverse()}Z.absoluteValue=Z.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),T(n)},Z.ceil=function(){return T(new this.constructor(this),this.e+1,2)},Z.clampedTo=Z.clamp=function(n,e){var i=this,r=i.constructor;if(n=new r(n),e=new r(e),!n.s||!e.s)return new r(NaN);if(n.gt(e))throw Error(w+e);return i.cmp(n)<0?n:i.cmp(e)>0?e:new r(i)},Z.comparedTo=Z.cmp=function(n){var e,i,r,t,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(r=o.length)<(t=u.length)?r:t;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return r===t?0:r>t^c<0?1:-1},Z.cosine=Z.cos=function(){var n,e,i=this,r=i.constructor;return i.d?i.d[0]?(e=r.rounding,r.precision=(n=r.precision)+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r,t;if(e.isZero())return e;(r=e.d.length)<32?t=(1/K(4,i=Math.ceil(r/3))).toString():(i=16,t="2.3283064365386962890625e-10"),n.precision+=i,e=G(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(r,Q(r,i)),r.precision=n,r.rounding=e,T(2==u||3==u?i.neg():i,n,e,!0)):new r(1):new r(NaN)},Z.cubeRoot=Z.cbrt=function(){var n,e,i,r,t,s,o,u,c,f,a=this,h=a.constructor;if(!a.isFinite()||a.isZero())return new h(a);for(p=!1,(s=a.s*E(a.s*a,1/3))&&Math.abs(s)!=1/0?r=new h(s.toString()):(i=D(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=E(i,1/3),n=b((n+1)/3)-(n%3==(n<0?-1:2)),(r=new h(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=h.precision)+3;;)if(f=(c=(u=r).times(u).times(u)).plus(a),r=R(f.plus(a).times(u),f.plus(c),o+2,1),D(u.d).slice(0,o)===(i=D(r.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(t||"4999"!=i)){(!+i||!+i.slice(1)&&"5"==i.charAt(0))&&(T(r,n+1,1),e=!r.times(r).times(r).eq(a));break}if(!t&&(T(u,n+1,0),u.times(u).times(u).eq(a))){r=u;break}o+=4,t=1}return p=!0,T(r,n,h.rounding,e)},Z.decimalPlaces=Z.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=7*((n=e.length-1)-b(this.e/7)),n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},Z.dividedBy=Z.div=function(n){return R(this,new this.constructor(n))},Z.dividedToIntegerBy=Z.divToInt=function(n){var e=this.constructor;return T(R(this,new e(n),0,1,1),e.precision,e.rounding)},Z.equals=Z.eq=function(n){return 0===this.cmp(n)},Z.floor=function(){return T(new this.constructor(this),this.e+1,3)},Z.greaterThan=Z.gt=function(n){return this.cmp(n)>0},Z.greaterThanOrEqualTo=Z.gte=function(n){var e=this.cmp(n);return 1==e||0===e},Z.hyperbolicCosine=Z.cosh=function(){var n,e,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;r=o.rounding,o.precision=(i=o.precision)+Math.max(s.e,s.sd())+4,o.rounding=1,(t=s.d.length)<32?e=(1/K(4,n=Math.ceil(t/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=G(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return T(s,o.precision=i,o.rounding=r,!0)},Z.hyperbolicSine=Z.sinh=function(){var n,e,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(i=s.rounding,s.precision=(e=s.precision)+Math.max(t.e,t.sd())+4,s.rounding=1,(r=t.d.length)<3)t=G(s,2,t,t,!0);else{n=1.4*Math.sqrt(r),t=G(s,2,t=t.times(1/K(5,n=n>16?16:0|n)),t,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=t.times(t),t=t.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=e,s.rounding=i,T(t,e,i,!0)},Z.hyperbolicTangent=Z.tanh=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+7,r.rounding=1,R(i.sinh(),i.cosh(),r.precision=n,r.rounding=e)):new r(i.s)},Z.inverseCosine=Z.acos=function(){var n,e=this,i=e.constructor,r=e.abs().cmp(1),t=i.precision,s=i.rounding;return-1!==r?0===r?e.isNeg()?C(i,t,s):new i(0):new i(NaN):e.isZero()?C(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,e=e.asin(),n=C(i,t+4,s).times(.5),i.precision=t,i.rounding=s,n.minus(e))},Z.inverseHyperbolicCosine=Z.acosh=function(){var n,e,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(e=r.rounding,r.precision=(n=r.precision)+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,p=!1,i=i.times(i).minus(1).sqrt().plus(i),p=!0,r.precision=n,r.rounding=e,i.ln()):new r(i)},Z.inverseHyperbolicSine=Z.asinh=function(){var n,e,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,p=!1,i=i.times(i).plus(1).sqrt().plus(i),p=!0,r.precision=n,r.rounding=e,i.ln())},Z.inverseHyperbolicTangent=Z.atanh=function(){var n,e,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(n=s.precision,e=s.rounding,r=t.sd(),Math.max(r,n)<2*-t.e-1?T(new s(t),n,e,!0):(s.precision=i=r-t.e,t=R(t.plus(1),new s(1).minus(t),i+n,1),s.precision=n+4,s.rounding=1,t=t.ln(),s.precision=n,s.rounding=e,t.times(.5))):new s(NaN)},Z.inverseSine=Z.asin=function(){var n,e,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(e=t.abs().cmp(1),i=s.precision,r=s.rounding,-1!==e?0===e?((n=C(s,i+4,r).times(.5)).s=t.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))},Z.inverseTangent=Z.atan=function(){var n,e,i,r,t,s,o,u,c,f=this,a=f.constructor,h=a.precision,l=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&h+4<=A)return(o=C(a,h+4,l).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(h+4<=A)return(o=C(a,h+4,l).times(.5)).s=f.s,o}for(a.precision=u=h+10,a.rounding=1,n=i=Math.min(28,u/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(p=!1,e=Math.ceil(u/7),r=1,c=f.times(f),o=new a(f),t=f;-1!==n;)if(t=t.times(c),s=o.minus(t.div(r+=2)),t=t.times(c),void 0!==(o=s.plus(t.div(r+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),p=!0,T(o,a.precision=h,a.rounding=l,!0)},Z.isFinite=function(){return!!this.d},Z.isInteger=Z.isInt=function(){return!!this.d&&b(this.e/7)>this.d.length-2},Z.isNaN=function(){return!this.s},Z.isNegative=Z.isNeg=function(){return this.s<0},Z.isPositive=Z.isPos=function(){return this.s>0},Z.isZero=function(){return!!this.d&&0===this.d[0]},Z.lessThan=Z.lt=function(n){return this.cmp(n)<0},Z.lessThanOrEqualTo=Z.lte=function(n){return this.cmp(n)<1},Z.logarithm=Z.log=function(n){var e,i,r,t,s,o,u,c,f=this,a=f.constructor,h=a.precision,l=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(i.length>1)s=!0;else{for(t=i[0];t%10==0;)t/=10;s=1!==t}if(p=!1,o=W(f,u=h+5),r=e?U(a,u+10):W(n,u),k((c=R(o,r,u,1)).d,t=h,l))do{if(o=W(f,u+=10),r=e?U(a,u+10):W(n,u),c=R(o,r,u,1),!s){+D(c.d).slice(t+1,t+15)+1==1e14&&(c=T(c,h+1,0));break}}while(k(c.d,t+=10,l));return p=!0,T(c,h,l)},Z.minus=Z.sub=function(n){var e,i,r,t,s,o,u,c,f,a,h,l,d=this,g=d.constructor;if(n=new g(n),!d.d||!n.d)return d.s&&n.s?d.d?n.s=-n.s:n=new g(n.d||d.s!==n.s?d:NaN):n=new g(NaN),n;if(d.s!=n.s)return n.s=-n.s,d.plus(n);if(l=n.d,u=g.precision,c=g.rounding,!(f=d.d)[0]||!l[0]){if(l[0])n.s=-n.s;else{if(!f[0])return new g(3===c?-0:0);n=new g(d)}return p?T(n,u,c):n}if(i=b(n.e/7),a=b(d.e/7),f=f.slice(),s=a-i){for((h=s<0)?(e=f,s=-s,o=l.length):(e=l,i=a,o=f.length),s>(r=Math.max(Math.ceil(u/7),o)+2)&&(s=r,e.length=1),e.reverse(),r=s;r--;)e.push(0);e.reverse()}else{for((h=(r=f.length)<(o=l.length))&&(o=r),r=0;r<o;r++)if(f[r]!=l[r]){h=f[r]<l[r];break}s=0}for(h&&(e=f,f=l,l=e,n.s=-n.s),r=l.length-(o=f.length);r>0;--r)f[o++]=0;for(r=l.length;r>s;){if(f[--r]<l[r]){for(t=r;t&&0===f[--t];)f[t]=O-1;--f[t],f[r]+=O}f[r]-=l[r]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=L(f,i),p?T(n,u,c):n):new g(3===c?-0:0)},Z.modulo=Z.mod=function(n){var e,i=this,r=i.constructor;return n=new r(n),!i.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||i.d&&!i.d[0]?T(new r(i),r.precision,r.rounding):(p=!1,9==r.modulo?(e=R(i,n.abs(),0,3,1)).s*=n.s:e=R(i,n,0,r.modulo,1),e=e.times(n),p=!0,i.minus(e))},Z.naturalExponential=Z.exp=function(){return j(this)},Z.naturalLogarithm=Z.ln=function(){return W(this)},Z.negated=Z.neg=function(){var n=new this.constructor(this);return n.s=-n.s,T(n)},Z.plus=Z.add=function(n){var e,i,r,t,s,o,u,c,f,a,h=this,l=h.constructor;if(n=new l(n),!h.d||!n.d)return h.s&&n.s?h.d||(n=new l(n.d||h.s===n.s?h:NaN)):n=new l(NaN),n;if(h.s!=n.s)return n.s=-n.s,h.minus(n);if(a=n.d,u=l.precision,c=l.rounding,!(f=h.d)[0]||!a[0])return a[0]||(n=new l(h)),p?T(n,u,c):n;if(s=b(h.e/7),r=b(n.e/7),f=f.slice(),t=s-r){for(t<0?(i=f,t=-t,o=a.length):(i=a,r=s,o=f.length),t>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for((o=f.length)-(t=a.length)<0&&(t=o,i=a,a=f,f=i),e=0;t;)e=(f[--t]=f[t]+a[t]+e)/O|0,f[t]%=O;for(e&&(f.unshift(e),++r),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=L(f,r),p?T(n,u,c):n},Z.precision=Z.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(w+n);return i.d?(e=I(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},Z.round=function(){var n=this,e=n.constructor;return T(new e(n),n.e+1,e.rounding)},Z.sine=Z.sin=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r=e.d.length;if(r<3)return e.isZero()?e:G(n,2,e,e);i=1.4*Math.sqrt(r),e=G(n,2,e=e.times(1/K(5,i=i>16?16:0|i)),e);for(var t,s=new n(5),o=new n(16),u=new n(20);i--;)t=e.times(e),e=e.times(s.plus(t.times(o.times(t).minus(u))));return e}(r,Q(r,i)),r.precision=n,r.rounding=e,T(u>2?i.neg():i,n,e,!0)):new r(NaN)},Z.squareRoot=Z.sqrt=function(){var n,e,i,r,t,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(p=!1,0==(f=Math.sqrt(+o))||f==1/0?(((e=D(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=b((c+1)/2)-(c<0||c%2),r=new a(e=f==1/0?"5e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):r=new a(f.toString()),i=(c=a.precision)+3;;)if(r=(s=r).plus(R(o,s,i+2,1)).times(.5),D(s.d).slice(0,i)===(e=D(r.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(t||"4999"!=e)){(!+e||!+e.slice(1)&&"5"==e.charAt(0))&&(T(r,c+1,1),n=!r.times(r).eq(o));break}if(!t&&(T(s,c+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}return p=!0,T(r,c,a.rounding,n)},Z.tangent=Z.tan=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.rounding,r.precision=(n=r.precision)+10,r.rounding=1,(i=i.sin()).s=1,i=R(i,new r(1).minus(i.times(i)).sqrt(),n+10,0),r.precision=n,r.rounding=e,T(2==u||4==u?i.neg():i,n,e,!0)):new r(NaN)},Z.times=Z.mul=function(n){var e,i,r,t,s,o,u,c,f,a=this,h=a.constructor,l=a.d,d=(n=new h(n)).d;if(n.s*=a.s,!(l&&l[0]&&d&&d[0]))return new h(!n.s||l&&!l[0]&&!d||d&&!d[0]&&!l?NaN:l&&d?0*n.s:n.s/0);for(i=b(a.e/7)+b(n.e/7),(c=l.length)<(f=d.length)&&(s=l,l=d,d=s,o=c,c=f,f=o),s=[],r=o=c+f;r--;)s.push(0);for(r=f;--r>=0;){for(e=0,t=c+r;t>r;)u=s[t]+d[r]*l[t-r-1]+e,s[t--]=u%O|0,e=u/O|0;s[t]=(s[t]+e)%O|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=L(s,i),p?T(n,h.precision,h.rounding):n},Z.toBinary=function(n,e){return X(this,2,n,e)},Z.toDecimalPlaces=Z.toDP=function(n,e){var i=this,r=i.constructor;return i=new r(i),void 0===n?i:(_(n,0,f),void 0===e?e=r.rounding:_(e,0,8),T(i,n+i.e+1,e))},Z.toExponential=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=S(r,!0):(_(n,0,f),void 0===e?e=t.rounding:_(e,0,8),i=S(r=T(new t(r),n+1,e),!0,n+1)),r.isNeg()&&!r.isZero()?"-"+i:i},Z.toFixed=function(n,e){var i,r,t=this,s=t.constructor;return void 0===n?i=S(t):(_(n,0,f),void 0===e?e=s.rounding:_(e,0,8),i=S(r=T(new s(t),n+t.e+1,e),!1,n+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i},Z.toFraction=function(n){var e,i,r,t,s,o,u,c,f,a,h,l,d=this,g=d.d,m=d.constructor;if(!g)return new m(d);if(f=i=new m(1),r=c=new m(0),s=(e=new m(r)).e=I(g)-d.e-1,e.d[0]=E(10,(o=s%7)<0?7+o:o),null==n)n=s>0?e:f;else{if(!(u=new m(n)).isInt()||u.lt(f))throw Error(w+u);n=u.gt(e)?s>0?e:f:u}for(p=!1,u=new m(D(g)),a=m.precision,m.precision=s=7*g.length*2;h=R(u,e,0,1,1),1!=(t=i.plus(h.times(r))).cmp(n);)i=r,r=t,f=c.plus(h.times(t=f)),c=t,e=u.minus(h.times(t=e)),u=t;return t=R(n.minus(i),r,0,1,1),c=c.plus(t.times(f)),i=i.plus(t.times(r)),c.s=f.s=d.s,l=R(f,r,s,1).minus(d).abs().cmp(R(c,i,s,1).minus(d).abs())<1?[f,r]:[c,i],m.precision=a,p=!0,l},Z.toHexadecimal=Z.toHex=function(n,e){return X(this,16,n,e)},Z.toNearest=function(n,e){var i=this,r=i.constructor;if(i=new r(i),null==n){if(!i.d)return i;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0===e?e=r.rounding:_(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(p=!1,i=R(i,n,0,e,1).times(n),p=!0,T(i)):(n.s=i.s,i=n),i},Z.toNumber=function(){return+this},Z.toOctal=function(n,e){return X(this,8,n,e)},Z.toPower=Z.pow=function(n){var e,i,r,t,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new c(E(+u,f));if((u=new c(u)).eq(1))return u;if(r=c.precision,s=c.rounding,n.eq(1))return T(u,r,s);if((e=b(n.e/7))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return t=B(c,u,i,r),n.s<0?new c(1).div(t):T(t,r,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=E(+u,f))&&isFinite(i)?new c(i+"").e:b(f*(Math.log("0."+D(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(e>0?o/0:0):(p=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(t=j(n.times(W(u,r+i)),r)).d&&k((t=T(t,r+5,1)).d,r,s)&&+D((t=T(j(n.times(W(u,(e=r+10)+i)),e),e+5,1)).d).slice(r+1,r+15)+1==1e14&&(t=T(t,r+1,0)),t.s=o,p=!0,c.rounding=s,T(t,r,s))},Z.toPrecision=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=S(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(_(n,1,f),void 0===e?e=t.rounding:_(e,0,8),i=S(r=T(new t(r),n,e),n<=r.e||r.e<=t.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+i:i},Z.toSignificantDigits=Z.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(_(n,1,f),void 0===e?e=i.rounding:_(e,0,8)),T(new i(this),n,e)},Z.toString=function(){var n=this,e=n.constructor,i=S(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},Z.truncated=Z.trunc=function(){return T(new this.constructor(this),this.e+1,1)},Z.valueOf=Z.toJSON=function(){var n=this,e=n.constructor,i=S(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var R=function(){function n(n,e,i){var r,t=0,s=n.length;for(n=n.slice();s--;)n[s]=(r=n[s]*e+t)%i|0,t=r/i|0;return t&&n.unshift(t),n}function e(n,e,i,r){var t,s;if(i!=r)s=i>r?1:-1;else for(t=s=0;t<i;t++)if(n[t]!=e[t]){s=n[t]>e[t]?1:-1;break}return s}function i(n,e,i,r){for(var t=0;i--;)n[i]-=t,n[i]=(t=n[i]<e[i]?1:0)*r+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(r,t,s,u,c,f){var a,h,l,d,p,g,w,m,v,N,E,x,y,M,q,F,A,Z,D,_,k=r.constructor,P=r.s==t.s?1:-1,R=r.d,S=t.d;if(!(R&&R[0]&&S&&S[0]))return new k(r.s&&t.s&&(R?!S||R[0]!=S[0]:S)?R&&0==R[0]||!S?0*P:P/0:NaN);for(f?(p=1,h=r.e-t.e):(f=O,h=b(r.e/(p=7))-b(t.e/p)),D=S.length,A=R.length,N=(v=new k(P)).d=[],l=0;S[l]==(R[l]||0);l++);if(S[l]>(R[l]||0)&&h--,null==s?(M=s=k.precision,u=k.rounding):M=c?s+(r.e-t.e)+1:s,M<0)N.push(1),g=!0;else{if(M=M/p+2|0,l=0,1==D){for(d=0,S=S[0],M++;(l<A||d)&&M--;l++)N[l]=(q=d*f+(R[l]||0))/S|0,d=q%S|0;g=d||l<A}else{for((d=f/(S[0]+1)|0)>1&&(S=n(S,d,f),R=n(R,d,f),D=S.length,A=R.length),F=D,x=(E=R.slice(0,D)).length;x<D;)E[x++]=0;(_=S.slice()).unshift(0),Z=S[0],S[1]>=f/2&&++Z;do{d=0,(a=e(S,E,D,x))<0?(y=E[0],D!=x&&(y=y*f+(E[1]||0)),(d=y/Z|0)>1?(d>=f&&(d=f-1),1==(a=e(w=n(S,d,f),E,m=w.length,x=E.length))&&(d--,i(w,D<m?_:S,m,f))):(0==d&&(a=d=1),w=S.slice()),(m=w.length)<x&&w.unshift(0),i(E,w,x,f),-1==a&&(a=e(S,E,D,x=E.length))<1&&(d++,i(E,D<x?_:S,x,f)),x=E.length):0===a&&(d++,E=[0]),N[l++]=d,a&&E[0]?E[x++]=R[F]||0:(E=[R[F]],x=1)}while((F++<A||void 0!==E[0])&&M--);g=void 0!==E[0]}N[0]||N.shift()}if(1==p)v.e=h,o=g;else{for(l=1,d=N[0];d>=10;d/=10)l++;v.e=l+h*p-1,T(v,c?s+v.e+1:s,u,g)}return v}}();function T(n,e,i,r){var t,s,o,u,c,f,a,h,l,d=n.constructor;n:if(null!=e){if(!(h=n.d))return n;for(t=1,u=h[0];u>=10;u/=10)t++;if((s=e-t)<0)s+=7,c=(a=h[l=0])/E(10,t-(o=e)-1)%10|0;else if((l=Math.ceil((s+1)/7))>=(u=h.length)){if(!r)break n;for(;u++<=l;)h.push(0);a=c=0,t=1,o=(s%=7)-7+1}else{for(a=u=h[l],t=1;u>=10;u/=10)t++;c=(o=(s%=7)-7+t)<0?0:a/E(10,t-o-1)%10|0}if(r=r||e<0||void 0!==h[l+1]||(o<0?a:a%E(10,t-o-1)),f=i<4?(c||r)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||r||6==i&&(s>0?o>0?a/E(10,t-o):0:h[l-1])%10&1||i==(n.s<0?8:7)),e<1||!h[0])return h.length=0,f?(h[0]=E(10,(7-(e-=n.e+1)%7)%7),n.e=-e||0):h[0]=n.e=0,n;if(0==s?(h.length=l,u=1,l--):(h.length=l+1,u=E(10,7-s),h[l]=o>0?(a/E(10,t-o)%E(10,o)|0)*u:0),f)for(;;){if(0==l){for(s=1,o=h[0];o>=10;o/=10)s++;for(o=h[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,h[0]==O&&(h[0]=1));break}if(h[l]+=u,h[l]!=O)break;h[l--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return p&&(n.e>d.maxE?(n.d=null,n.e=NaN):n.e<d.minE&&(n.e=0,n.d=[0])),n}function S(n,e,i){if(!n.isFinite())return J(n);var r,t=n.e,s=D(n.d),o=s.length;return e?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+H(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):t<0?(s="0."+H(-t-1)+s,i&&(r=i-o)>0&&(s+=H(r))):t>=o?(s+=H(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+H(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=H(r))),s}function L(n,e){var i=n[0];for(e*=7;i>=10;i/=10)e++;return e}function U(n,e,i){if(e>F)throw p=!0,i&&(n.precision=i),Error(m);return T(new n(h),e,1,!0)}function C(n,e,i){if(e>A)throw Error(m);return T(new n(l),e,i,!0)}function I(n){var e=n.length-1,i=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function H(n){for(var e="";n--;)e+="0";return e}function B(n,e,i,r){var t,s=new n(1),o=Math.ceil(r/7+4);for(p=!1;;){if(i%2&&Y((s=s.times(e)).d,o)&&(t=!0),0===(i=b(i/2))){i=s.d.length-1,t&&0===s.d[i]&&++s.d[i];break}Y((e=e.times(e)).d,o)}return p=!0,s}function V(n){return 1&n.d[n.d.length-1]}function $(n,e,i){for(var r,t=new n(e[0]),s=0;++s<e.length;){if(!(r=new n(e[s])).s){t=r;break}t[i](r)&&(t=r)}return t}function j(n,e){var i,r,t,s,o,u,c,f=0,a=0,h=0,l=n.constructor,d=l.rounding,g=l.precision;if(!n.d||!n.d[0]||n.e>17)return new l(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==e?(p=!1,c=g):c=e,u=new l(.03125);n.e>-2;)n=n.times(u),h+=5;for(c+=r=Math.log(E(2,h))/Math.LN10*2+5|0,i=s=o=new l(1),l.precision=c;;){if(s=T(s.times(n),c,1),i=i.times(++a),D((u=o.plus(R(s,i,c,1))).d).slice(0,c)===D(o.d).slice(0,c)){for(t=h;t--;)o=T(o.times(o),c,1);if(null!=e)return l.precision=g,o;if(!(f<3&&k(o.d,c-r,d,f)))return T(o,l.precision=g,d,p=!0);l.precision=c+=10,i=s=u=new l(1),a=0,f++}o=u}}function W(n,e){var i,r,t,s,o,u,c,f,a,h,l,d=1,g=n,w=g.d,m=g.constructor,v=m.rounding,N=m.precision;if(g.s<0||!w||!w[0]||!g.e&&1==w[0]&&1==w.length)return new m(w&&!w[0]?-1/0:1!=g.s?NaN:w?0:g);if(null==e?(p=!1,a=N):a=e,m.precision=a+=10,r=(i=D(w)).charAt(0),!(Math.abs(s=g.e)<15e14))return f=U(m,a+2,N).times(s+""),g=W(new m(r+"."+i.slice(1)),a-10).plus(f),m.precision=N,null==e?T(g,N,v,p=!0):g;for(;r<7&&1!=r||1==r&&i.charAt(1)>3;)r=(i=D((g=g.times(n)).d)).charAt(0),d++;for(s=g.e,r>1?(g=new m("0."+i),s++):g=new m(r+"."+i.slice(1)),h=g,c=o=g=R(g.minus(1),g.plus(1),a,1),l=T(g.times(g),a,1),t=3;;){if(o=T(o.times(l),a,1),D((f=c.plus(R(o,new m(t),a,1))).d).slice(0,a)===D(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(U(m,a+2,N).times(s+""))),c=R(c,new m(d),a,1),null!=e)return m.precision=N,c;if(!k(c.d,a-10,v,u))return T(c,m.precision=N,v,p=!0);m.precision=a+=10,f=o=g=R(h.minus(1),h.plus(1),a,1),l=T(g.times(g),a,1),t=u=1}c=f,t+=2}}function J(n){return String(n.s*n.s/0)}function z(n,e){var i,r,t;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;48===e.charCodeAt(r);r++);for(t=e.length;48===e.charCodeAt(t-1);--t);if(e=e.slice(r,t)){if(t-=r,n.e=i=i-r-1,n.d=[],r=(i+1)%7,i<0&&(r+=7),r<t){for(r&&n.d.push(+e.slice(0,r)),t-=7;r<t;)n.d.push(+e.slice(r,r+=7));r=7-(e=e.slice(r)).length}else r-=t;for(;r--;)e+="0";n.d.push(+e),p&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function G(n,e,i,r,t){var s,o,u,c,f=n.precision,a=Math.ceil(f/7);for(p=!1,c=i.times(i),u=new n(r);;){if(o=R(u.times(c),new n(e++*e++),f,1),u=t?r.plus(o):r.minus(o),r=R(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(r)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=r,r=o,o=s}return p=!0,o.d.length=a+1,o}function K(n,e){for(var i=n;--e;)i*=n;return i}function Q(n,e){var i,r=e.s<0,t=C(n,n.precision,1),s=t.times(.5);if((e=e.abs()).lte(s))return u=r?4:1,e;if((i=e.divToInt(t)).isZero())u=r?3:2;else{if((e=e.minus(i.times(t))).lte(s))return u=V(i)?r?2:3:r?4:1,e;u=V(i)?r?1:4:r?3:2}return e.minus(t).abs()}function X(n,e,i,r){var t,s,u,c,h,l,d,p,g,w=n.constructor,m=void 0!==i;if(m?(_(i,1,f),void 0===r?r=w.rounding:_(r,0,8)):(i=w.precision,r=w.rounding),n.isFinite()){for(m?(t=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):t=e,(u=(d=S(n)).indexOf("."))>=0&&(d=d.replace(".",""),(g=new w(1)).e=d.length-u,g.d=P(S(g),10,t),g.e=g.d.length),s=h=(p=P(d,10,t)).length;0==p[--h];)p.pop();if(p[0]){if(u<0?s--:((n=new w(n)).d=p,n.e=s,p=(n=R(n,g,i,r,0,t)).d,s=n.e,l=o),u=p[i],c=t/2,l=l||void 0!==p[i+1],l=r<4?(void 0!==u||l)&&(0===r||r===(n.s<0?3:2)):u>c||u===c&&(4===r||l||6===r&&1&p[i-1]||r===(n.s<0?8:7)),p.length=i,l)for(;++p[--i]>t-1;)p[i]=0,i||(++s,p.unshift(1));for(h=p.length;!p[h-1];--h);for(u=0,d="";u<h;u++)d+=a.charAt(p[u]);if(m){if(h>1)if(16==e||8==e){for(u=16==e?4:3,--h;h%u;h++)d+="0";for(h=(p=P(d,t,e)).length;!p[h-1];--h);for(u=1,d="1.";u<h;u++)d+=a.charAt(p[u])}else d=d.charAt(0)+"."+d.slice(1);d=d+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)d="0"+d;d="0."+d}else if(++s>h)for(s-=h;s--;)d+="0";else s<h&&(d=d.slice(0,s)+"."+d.slice(s))}else d=m?"0p+0":"0";d=(16==e?"0x":2==e?"0b":8==e?"0o":"")+d}else d=J(n);return n.s<0?"-"+d:d}function Y(n,e){if(n.length>e)return n.length=e,!0}function nn(n){return new this(n).abs()}function en(n){return new this(n).acos()}function rn(n){return new this(n).acosh()}function tn(n,e){return new this(n).plus(e)}function sn(n){return new this(n).asin()}function on(n){return new this(n).asinh()}function un(n){return new this(n).atan()}function cn(n){return new this(n).atanh()}function fn(n,e){n=new this(n),e=new this(e);var i,r=this.precision,t=this.rounding,s=r+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?C(this,r,t):new this(0)).s=n.s:!n.d||e.isZero()?(i=C(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,i=this.atan(R(n,e,s,1)),e=C(this,s,1),this.precision=r,this.rounding=t,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(R(n,e,s,1)):(i=C(this,s,1).times(e.s>0?.25:.75)).s=n.s:i=new this(NaN),i}function an(n){return new this(n).cbrt()}function hn(n){return T(n=new this(n),n.e+1,2)}function ln(n,e,i){return new this(n).clamp(e,i)}function dn(n){if(!n||"object"!=typeof n)throw Error(g+"Object expected");var e,i,r,t=!0===n.defaults,s=["precision",1,f,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(i=s[e],t&&(this[i]=d[i]),void 0!==(r=n[i])){if(!(b(r)===r&&r>=s[e+1]&&r<=s[e+2]))throw Error(w+i+": "+r);this[i]=r}if(i="crypto",t&&(this[i]=d[i]),void 0!==(r=n[i])){if(!0!==r&&!1!==r&&0!==r&&1!==r)throw Error(w+i+": "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(v);this[i]=!0}else this[i]=!1}return this}function pn(n){return new this(n).cos()}function gn(n){return new this(n).cosh()}function wn(n,e){return new this(n).div(e)}function mn(n){return new this(n).exp()}function vn(n){return T(n=new this(n),n.e+1,3)}function Nn(){var n,e,i=new this(0);for(p=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return p=!0,new this(1/0);i=e}return p=!0,i.sqrt()}function bn(n){return n instanceof s||n&&n.toStringTag===N||!1}function En(n){return new this(n).ln()}function xn(n,e){return new this(n).log(e)}function yn(n){return new this(n).log(2)}function Mn(n){return new this(n).log(10)}function qn(){return $(this,arguments,"lt")}function On(){return $(this,arguments,"gt")}function Fn(n,e){return new this(n).mod(e)}function An(n,e){return new this(n).mul(e)}function Zn(n,e){return new this(n).pow(e)}function Dn(n){var e,i,r,t,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:_(n,1,f),r=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));s<r;)(t=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else{if(!crypto.randomBytes)throw Error(v);for(e=crypto.randomBytes(r*=4);s<r;)(t=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(u.push(t%1e7),s+=4);s=r/4}else for(;s<r;)u[s++]=1e7*Math.random()|0;for(n%=7,(r=u[--s])&&n&&(t=E(10,7-n),u[s]=(r/t|0)*t);0===u[s];s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;0===u[0];i-=7)u.shift();for(r=1,t=u[0];t>=10;t/=10)r++;r<7&&(i-=7-r)}return o.e=i,o.d=u,o}function _n(n){return T(n=new this(n),n.e+1,this.rounding)}function kn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function Pn(n){return new this(n).sin()}function Rn(n){return new this(n).sinh()}function Tn(n){return new this(n).sqrt()}function Sn(n,e){return new this(n).sub(e)}function Ln(){var n=0,e=arguments,i=new this(e[n]);for(p=!1;i.s&&++n<e.length;)i=i.plus(e[n]);return p=!0,T(i,this.precision,this.rounding)}function Un(n){return new this(n).tan()}function Cn(n){return new this(n).tanh()}function In(n){return T(n=new this(n),n.e+1,1)}(s=function n(e){var i,r,t;function o(n){var e,i,r,t=this;if(!(t instanceof o))return new o(n);if(t.constructor=o,bn(n))return t.s=n.s,void(p?!n.d||n.e>o.maxE?(t.e=NaN,t.d=null):n.e<o.minE?(t.e=0,t.d=[0]):(t.e=n.e,t.d=n.d.slice()):(t.e=n.e,t.d=n.d?n.d.slice():n.d));if("number"==(r=typeof n)){if(0===n)return t.s=1/n<0?-1:1,t.e=0,void(t.d=[0]);if(n<0?(n=-n,t.s=-1):t.s=1,n===~~n&&n<1e7){for(e=0,i=n;i>=10;i/=10)e++;return void(p?e>o.maxE?(t.e=NaN,t.d=null):e<o.minE?(t.e=0,t.d=[0]):(t.e=e,t.d=[n]):(t.e=e,t.d=[n]))}return 0*n!=0?(n||(t.s=NaN),t.e=NaN,void(t.d=null)):z(t,n.toString())}if("string"!==r)throw Error(w+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),t.s=-1):(43===i&&(n=n.slice(1)),t.s=1),q.test(n)?z(t,n):function(n,e){var i,r,t,o,u,c,f,a,h;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),q.test(e))return z(n,e)}else if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(y.test(e))i=16,e=e.toLowerCase();else if(x.test(e))i=2;else{if(!M.test(e))throw Error(w+e);i=8}for((o=e.search(/p/i))>0?(f=+e.slice(o+1),e=e.substring(2,o)):e=e.slice(2),o=e.indexOf("."),r=n.constructor,(u=o>=0)&&(o=(c=(e=e.replace(".","")).length)-o,t=B(r,new r(i),o,2*o)),o=h=(a=P(e,i,O)).length-1;0===a[o];--o)a.pop();return o<0?new r(0*n.s):(n.e=L(a,h),n.d=a,p=!1,u&&(n=R(n,t,4*c)),f&&(n=n.times(Math.abs(f)<54?E(2,f):s.pow(2,f))),p=!0,n)}(t,n)}if(o.prototype=Z,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=dn,o.clone=n,o.isDecimal=bn,o.abs=nn,o.acos=en,o.acosh=rn,o.add=tn,o.asin=sn,o.asinh=on,o.atan=un,o.atanh=cn,o.atan2=fn,o.cbrt=an,o.ceil=hn,o.clamp=ln,o.cos=pn,o.cosh=gn,o.div=wn,o.exp=mn,o.floor=vn,o.hypot=Nn,o.ln=En,o.log=xn,o.log10=Mn,o.log2=yn,o.max=qn,o.min=On,o.mod=Fn,o.mul=An,o.pow=Zn,o.random=Dn,o.round=_n,o.sign=kn,o.sin=Pn,o.sinh=Rn,o.sqrt=Tn,o.sub=Sn,o.sum=Ln,o.tan=Un,o.tanh=Cn,o.trunc=In,void 0===e&&(e={}),e&&!0!==e.defaults)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<t.length;)e.hasOwnProperty(r=t[i++])||(e[r]=this[r]);return o.config(e),o}(d)).prototype.constructor=s,s.default=s.Decimal=s,h=new s(h),l=new s(l),void 0!==(r=(function(){return s}).call(e,i,e,n))&&(n.exports=r)}()}}]);