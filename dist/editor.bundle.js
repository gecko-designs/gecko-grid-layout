!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/wp-content/plugins/gecko-grid-layout/dist/",a(a.s=35)}([function(e,t){e.exports=React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.editor},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){var r=n(21),a=n(12);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},function(e,t,n){var r=n(22);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(24),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},function(e,t,n){var r=n(14).Symbol;e.exports=r},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=window.wp.hooks},function(U,D,G){var q;!function(f){var g=/^\s+/,d=/\s+$/,r=0,i=f.round,h=f.min,m=f.max,e=f.random;function u(e,t){if(t=t||{},(e=e||"")instanceof u)return e;if(!(this instanceof u))return new u(e,t);var n=function(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,o=null,i=!1,l=!1;"string"==typeof e&&(e=function(e){e=e.replace(g,"").replace(d,"").toLowerCase();var t,n=!1;if(O[e])e=O[e],n=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=F.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=F.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=F.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=F.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=F.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=F.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=F.hex8.exec(e))return{r:L(t[1]),g:L(t[2]),b:L(t[3]),a:N(t[4]),format:n?"name":"hex8"};if(t=F.hex6.exec(e))return{r:L(t[1]),g:L(t[2]),b:L(t[3]),format:n?"name":"hex"};if(t=F.hex4.exec(e))return{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),a:N(t[4]+""+t[4]),format:n?"name":"hex8"};if(t=F.hex3.exec(e))return{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),format:n?"name":"hex"};return!1}(e));"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(c=e.r,s=e.g,u=e.b,t={r:255*A(c,255),g:255*A(s,255),b:255*A(u,255)},i=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(r=R(e.s),a=R(e.v),t=function(e,t,n){e=6*A(e,360),t=A(t,100),n=A(n,100);var r=f.floor(e),a=e-r,o=n*(1-t),i=n*(1-a*t),l=n*(1-(1-a)*t),c=r%6;return{r:255*[n,i,o,o,l,n][c],g:255*[l,n,n,i,o,o][c],b:255*[o,o,l,n,n,i][c]}}(e.h,r,a),i=!0,l="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(r=R(e.s),o=R(e.l),t=function(e,t,n){var r,a,o;function i(e,t,n){return n<0&&(n+=1),1<n&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=A(e,360),t=A(t,100),n=A(n,100),0===t)r=a=o=n;else{var l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=i(c,l,e+1/3),a=i(c,l,e),o=i(c,l,e-1/3)}return{r:255*r,g:255*a,b:255*o}}(e.h,r,o),i=!0,l="hsl"),e.hasOwnProperty("a")&&(n=e.a));var c,s,u;return n=C(n),{ok:i,format:e.format||l,r:h(255,m(t.r,0)),g:h(255,m(t.g,0)),b:h(255,m(t.b,0)),a:n}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=i(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=i(this._r)),this._g<1&&(this._g=i(this._g)),this._b<1&&(this._b=i(this._b)),this._ok=n.ok,this._tc_id=r++}function a(e,t,n){e=A(e,255),t=A(t,255),n=A(n,255);var r,a,o=m(e,t,n),i=h(e,t,n),l=(o+i)/2;if(o==i)r=a=0;else{var c=o-i;switch(a=.5<l?c/(2-o-i):c/(o+i),o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,l:l}}function o(e,t,n){e=A(e,255),t=A(t,255),n=A(n,255);var r,a,o=m(e,t,n),i=h(e,t,n),l=o,c=o-i;if(a=0===o?0:c/o,o==i)r=0;else{switch(o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,v:l}}function t(e,t,n,r){var a=[M(i(e).toString(16)),M(i(t).toString(16)),M(i(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function l(e,t,n,r){return[M(H(r)),M(i(e).toString(16)),M(i(t).toString(16)),M(i(n).toString(16))].join("")}function n(e,t){t=0===t?0:t||10;var n=u(e).toHsl();return n.s-=t/100,n.s=B(n.s),u(n)}function c(e,t){t=0===t?0:t||10;var n=u(e).toHsl();return n.s+=t/100,n.s=B(n.s),u(n)}function s(e){return u(e).desaturate(100)}function b(e,t){t=0===t?0:t||10;var n=u(e).toHsl();return n.l+=t/100,n.l=B(n.l),u(n)}function p(e,t){t=0===t?0:t||10;var n=u(e).toRgb();return n.r=m(0,h(255,n.r-i(-t/100*255))),n.g=m(0,h(255,n.g-i(-t/100*255))),n.b=m(0,h(255,n.b-i(-t/100*255))),u(n)}function y(e,t){t=0===t?0:t||10;var n=u(e).toHsl();return n.l-=t/100,n.l=B(n.l),u(n)}function v(e,t){var n=u(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,u(n)}function _(e){var t=u(e).toHsl();return t.h=(t.h+180)%360,u(t)}function k(e){var t=u(e).toHsl(),n=t.h;return[u(e),u({h:(n+120)%360,s:t.s,l:t.l}),u({h:(n+240)%360,s:t.s,l:t.l})]}function w(e){var t=u(e).toHsl(),n=t.h;return[u(e),u({h:(n+90)%360,s:t.s,l:t.l}),u({h:(n+180)%360,s:t.s,l:t.l}),u({h:(n+270)%360,s:t.s,l:t.l})]}function x(e){var t=u(e).toHsl(),n=t.h;return[u(e),u({h:(n+72)%360,s:t.s,l:t.l}),u({h:(n+216)%360,s:t.s,l:t.l})]}function E(e,t,n){t=t||6,n=n||30;var r=u(e).toHsl(),a=360/n,o=[u(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,o.push(u(r));return o}function S(e,t){t=t||6;for(var n=u(e).toHsv(),r=n.h,a=n.s,o=n.v,i=[],l=1/t;t--;)i.push(u({h:r,s:a,v:o})),o=(o+l)%1;return i}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:f.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:f.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:f.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=C(e),this._roundA=i(100*this._a)/100,this},toHsv:function(){var e=o(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=o(this._r,this._g,this._b),t=i(360*e.h),n=i(100*e.s),r=i(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=a(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=a(this._r,this._g,this._b),t=i(360*e.h),n=i(100*e.s),r=i(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return t(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,n,r,a){var o=[M(i(e).toString(16)),M(i(t).toString(16)),M(i(n).toString(16)),M(H(r))];if(a&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0);return o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:i(this._r),g:i(this._g),b:i(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+i(this._r)+", "+i(this._g)+", "+i(this._b)+")":"rgba("+i(this._r)+", "+i(this._g)+", "+i(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:i(100*A(this._r,255))+"%",g:i(100*A(this._g,255))+"%",b:i(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+i(100*A(this._r,255))+"%, "+i(100*A(this._g,255))+"%, "+i(100*A(this._b,255))+"%)":"rgba("+i(100*A(this._r,255))+"%, "+i(100*A(this._g,255))+"%, "+i(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(j[t(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+l(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=u(e);n="#"+l(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&0<=this._a;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return u(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(n,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(s,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(E,arguments)},complement:function(){return this._applyCombination(_,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(k,arguments)},tetrad:function(){return this._applyCombination(w,arguments)}},u.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:R(e[r]));e=n}return u(e,t)},u.equals=function(e,t){return!(!e||!t)&&u(e).toRgbString()==u(t).toRgbString()},u.random=function(){return u.fromRatio({r:e(),g:e(),b:e()})},u.mix=function(e,t,n){n=0===n?0:n||50;var r=u(e).toRgb(),a=u(t).toRgb(),o=n/100;return u({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},u.readability=function(e,t){var n=u(e),r=u(t);return(f.max(n.getLuminance(),r.getLuminance())+.05)/(f.min(n.getLuminance(),r.getLuminance())+.05)},u.isReadable=function(e,t,n){var r,a,o=u.readability(e,t);switch(a=!1,(r=function(e){var t,n;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==n&&"large"!==n&&(n="small");return{level:t,size:n}}(n)).level+r.size){case"AAsmall":case"AAAlarge":a=4.5<=o;break;case"AAlarge":a=3<=o;break;case"AAAsmall":a=7<=o}return a},u.mostReadable=function(e,t,n){var r,a,o,i,l=null,c=0;a=(n=n||{}).includeFallbackColors,o=n.level,i=n.size;for(var s=0;s<t.length;s++)c<(r=u.readability(e,t[s]))&&(c=r,l=u(t[s]));return u.isReadable(e,l,{level:o,size:i})||!a?l:(n.includeFallbackColors=!1,u.mostReadable(e,["#fff","#000"],n))};var O=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},j=u.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(O);function C(e){return e=parseFloat(e),(isNaN(e)||e<0||1<e)&&(e=1),e}function A(e,t){var n;"string"==typeof(n=e)&&-1!=n.indexOf(".")&&1===parseFloat(n)&&(e="100%");var r,a="string"==typeof(r=e)&&-1!=r.indexOf("%");return e=h(t,m(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),f.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function B(e){return h(1,m(0,e))}function L(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function R(e){return e<=1&&(e=100*e+"%"),e}function H(e){return f.round(255*parseFloat(e)).toString(16)}function N(e){return L(e)/255}var I,P,T,F=(P="[\\s|\\(]+("+(I="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",T="[\\s|\\(]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",{CSS_UNIT:new RegExp(I),rgb:new RegExp("rgb"+P),rgba:new RegExp("rgba"+T),hsl:new RegExp("hsl"+P),hsla:new RegExp("hsla"+T),hsv:new RegExp("hsv"+P),hsva:new RegExp("hsva"+T),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function z(e){return!!F.CSS_UNIT.exec(e)}U.exports?U.exports=u:void 0===(q=function(){return u}.call(D,G,D,U))||(U.exports=q)}(Math)},function(e,t){e.exports=window.wp.deprecated},function(e,t,n){var y=n(13),v=n(23),_=n(26),k=Math.max,w=Math.min;e.exports=function(r,a,e){var o,i,l,c,s,u,f=0,g=!1,d=!1,t=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function h(e){var t=o,n=i;return o=i=void 0,f=e,c=r.apply(n,t)}function m(e){var t=e-u;return void 0===u||a<=t||t<0||d&&l<=e-f}function b(){var e,t,n=v();if(m(n))return p(n);s=setTimeout(b,(t=a-((e=n)-u),d?w(t,l-(e-f)):t))}function p(e){return s=void 0,t&&o?h(e):(o=i=void 0,c)}function n(){var e,t=v(),n=m(t);if(o=arguments,i=this,u=t,n){if(void 0===s)return f=e=u,s=setTimeout(b,a),g?h(e):c;if(d)return s=setTimeout(b,a),h(u)}return void 0===s&&(s=setTimeout(b,a)),c}return a=_(a)||0,y(e)&&(g=!!e.leading,l=(d="maxWait"in e)?k(_(e.maxWait)||0,a):l,t="trailing"in e?!!e.trailing:t),n.cancel=function(){void 0!==s&&clearTimeout(s),o=u=i=s=void(f=0)},n.flush=function(){return void 0===s?c:p(v())},n}},function(t,e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},function(e,t,n){var r=n(14);e.exports=function(){return r.Date.now()}},function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(25))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(13),a=n(27),o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},function(e,t,n){var r=n(28),a=n(31);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},function(e,t,n){var r=n(15),a=n(29),o=n(30),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},function(e,t,n){var r=n(15),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),n=e[l];try{var r=!(e[l]=void 0)}catch(e){}var a=i.call(e);return r&&(t?e[l]=n:delete e[l]),a}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},,,,function(e,t,n){"use strict";n.r(t);var u=n(4),b=n(5),r=n(0),p=n.n(r),y=n(2),v=n(1),_=n(3),k=n(6),a=n(7),o=n.n(a),i=n(8),l=n.n(i),c=n(9),s=n.n(c),f=n(10),g=n.n(f),d=n(12),h=n.n(d),m=n(11),w=n.n(m),x=n(16),E=n.n(x),S=n(17);var O=function(e){function t(){return o()(this,t),s()(this,g()(t).apply(this,arguments))}return w()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.layout;return p.a.createElement("div",{className:"gecko-grid-layout-template-preview"},e.map(function(e,t){var n={gridColumnEnd:"span "+e[1].w,gridRowEnd:"span "+e[1].h};return p.a.createElement("div",{key:t,className:"gecko-grid-layout-template-preview__item",style:n})}))}}]),t}(p.a.PureComponent),j=function(e){function n(e){var t;return o()(this,n),t=s()(this,g()(n).call(this,e)),E()(h()(t),"setTemplate",function(e){t.setState({selected:e})}),t.state={selected:null},t}return w()(n,e),l()(n,[{key:"render",value:function(){var e,n=this,t=this.props,r=t.hasInnnerBlocks,a=t.allowedBlocks,o=this.state.selected,i=[["gecko/grid-layout-basic",{w:6}]];return r||o?p.a.createElement(_.InnerBlocks,{template:o,templateLock:!1,allowedBlocks:a}):p.a.createElement("div",{className:"gecko-grid-layout-template-select"},p.a.createElement("h2",null,Object(y.__)("Choose a Template")),p.a.createElement("p",null,Object(y.__)("This is a starting point. Templates make it easy to choose a layout. Blocks can be changed once they are selected.")),p.a.createElement("div",{className:"gecko-grid-layout-template-select__templates"},(e=[{label:Object(y.__)("2 Columns"),layout:[["gecko/grid-layout-basic",{w:6}],["gecko/grid-layout-basic",{w:6}]]},{label:Object(y.__)("3 Columns"),layout:[["gecko/grid-layout-basic",{w:4}],["gecko/grid-layout-basic",{w:4}],["gecko/grid-layout-basic",{w:4}]]}],Object(S.applyFilters)("gecko.grid-layout.templates",e)).map(function(e,t){return p.a.createElement("div",{key:t,className:"gecko-grid-layout-template-select__template",onClick:function(){return n.setTemplate(e.layout)}},p.a.createElement(O,{layout:e.layout}),p.a.createElement("p",null,e.label))}),p.a.createElement("div",{className:"gecko-grid-layout-template-select__template",onClick:function(){return n.setTemplate(i)}},p.a.createElement(O,{layout:i}),p.a.createElement("p",null,Object(y.__)("Create New")))))}}]),n}(p.a.Component),C=["gecko/grid-layout-item","gecko/grid-layout-image","gecko/grid-layout-basic"],A={title:Object(y.__)("Grid"),icon:p.a.createElement(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),p.a.createElement(v.G,null,p.a.createElement(v.Path,{d:"M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z"}))),category:"layout",description:Object(y.__)("Use CSS Grid to build layouts and, then add whatever content blocks you’d like."),supports:{align:["wide","full"],html:!1},deprecated:[{migrate:function(){},save:function(){return p.a.createElement(_.InnerBlocks.Content,null)}}],transforms:{from:[{type:"block",blocks:["core/columns"],transform:function(e){var t=Object(k.select)("core/editor").getSelectedBlock().innerBlocks,n=t.length,r=Math.floor(12/n),a=[];return t.map(function(e){var t=Object(u.createBlock)("gecko/grid-layout-basic",{w:r},e.innerBlocks);a.push(t)}),Object(u.createBlock)("gecko/grid-layout",{},a)}}]},styles:[{name:"default",label:Object(y.__)("Default"),isDefault:!0},{name:"no-gap",label:Object(y.__)("No Gap")}],edit:function(e){var t=e.insertBlocksAfter,n=e.clientId,r=Object(k.select)("core/editor").getBlocksByClientId(n)[0],a=!(!r||!r.innerBlocks)&&0<r.innerBlocks.length;return p.a.createElement(b.Fragment,null,p.a.createElement("div",{className:"wp-block-gecko-grid-layout-editor"},"function"==typeof t?p.a.createElement(j,{hasInnnerBlocks:a,allowedBlocks:C}):p.a.createElement("p",null,Object(y.__)("Preview Not Available"))))},save:function(){return p.a.createElement("div",null,p.a.createElement(_.InnerBlocks.Content,null))}},B=n(18),L=n.n(B),M=n(19),R=n.n(M),H={title:Object(y.__)("Item (deprecated)"),parent:["gecko/grid-layout"],icon:p.a.createElement(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},p.a.createElement(v.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),p.a.createElement(v.Path,{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"})),description:Object(y.__)("This block is deprecated. Please use basic or image block instead."),category:"common",supports:{inserter:!1},styles:[{name:"default",label:Object(y.__)("Default"),isDefault:!0},{name:"hover",label:Object(y.__)("Hover")}],attributes:{type:{type:"string",default:void 0},h:{type:"number",default:1},w:{type:"number"},minHeight:{type:"number",default:200},opacity:{type:"number",default:1},bgMedia:{type:"number"},bgMediaUrl:{type:"string"},bgColor:{type:"string"},bgColorSlug:{type:"string"},bgColorBrightness:{type:"number"}},deprecated:[{migrate:function(e,t){var n=e.h,r=e.w,a=e.bgMedia,o=e.bgMediaUrl,i=e.minHeight;return a?Object(u.createBlock)("gecko/grid-layout-image",{h:n,w:r,imgId:a,imgUrl:o,minHeight:i},t):Object(u.createBlock)("gecko/grid-layout-basic",{h:n,w:r},t)},save:function(){return p.a.createElement(_.InnerBlocks.Content,null)}}],edit:function(e){var t=e.attributes,a=e.setAttributes,n=(e.className,e.insertBlocksAfter),r=t.opacity,o=t.h,i=t.w,l=t.type,c=(t.padding,t.bgMedia),s=t.bgMediaUrl,u=t.bgColor,f=t.bgColorBrightness,g=t.bgColorSlug,d=t.minHeight;R()("Grid Layout Idem",{alternative:"Basic or Image",plugin:"Gecko Grid Layout"});var h={"--background":u,"--opacity":r,gridColumnEnd:"span "+i,gridRowEnd:"span "+o,backgroundColor:u,backgroundImage:"url("+s+")",minHeight:d+"px"},m="light";return f<130&&(m="dark"),p.a.createElement(b.Fragment,null,p.a.createElement(_.InspectorControls,null,p.a.createElement(v.PanelBody,{title:"Settings"},p.a.createElement(v.RangeControl,{label:Object(y.__)("Width"),value:i,onChange:function(e){a({w:e})},min:1,max:12}),p.a.createElement(v.RangeControl,{label:Object(y.__)("Span Rows"),value:o,onChange:function(e){a({h:e})},min:1,max:12})),p.a.createElement(v.PanelBody,{title:"Style"},p.a.createElement(v.RangeControl,{label:Object(y.__)("Minimum Height"),value:d,onChange:function(e){a({minHeight:e})},min:"50",max:"600",step:"1"}),"solid"!==l&&p.a.createElement(_.MediaUpload,{onSelect:function(e){a({bgMedia:e.id,bgMediaUrl:e.url})},type:["image","video"],value:c||null,render:function(e){var t=e.open;return p.a.createElement("div",null,s&&p.a.createElement("img",{src:s,onClick:t,width:"100%",height:"auto",style:{cursor:"pointer"}}),!s&&p.a.createElement("div",{className:"button button-large",onClick:t},"Choose Background"))}}),p.a.createElement("hr",null),p.a.createElement("div",null,p.a.createElement(_.ColorPalette,{label:"Background Color",value:u?u.color:void 0,onChange:function(e){var t=Object(k.select)("core/editor").getEditorSettings(),n=e?Object(_.getColorObjectByColorValue)(t.colors,e).slug:void 0;a({bgColorSlug:n});var r=e?L()(e).getBrightness():void 0;a({bgColorBrightness:r}),a({bgColor:e})}}),p.a.createElement("hr",null)))),p.a.createElement("div",{className:"gecko-grid-layout-editor-styles",style:h}),p.a.createElement("div",{className:"wp-block-gecko-grid-layout-editor__wrap".concat(l," ").concat(t.className," has-").concat(g,"-background-color is-").concat(m,"-background")},("image"===l||"image-content"===l)&&!c&&p.a.createElement(_.MediaPlaceholder,{onSelect:function(e){a({bgMedia:e.id,bgMediaUrl:e.url})},allowedTypes:["image"],accept:"image/*"}),"function"==typeof n&&p.a.createElement(_.InnerBlocks,{templateLock:!1})))},save:function(){return p.a.createElement("div",null,p.a.createElement(_.InnerBlocks.Content,null))}},N=n(20),I=n.n(N),P=["core/paragraph","core/heading","core/button","core/list","core/quote"],T={title:Object(y.__)("Image"),parent:["gecko/grid-layout"],icon:p.a.createElement(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement(v.Path,{d:"M0,0h24v24H0V0z",fill:"none"}),p.a.createElement(v.Path,{d:"m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"}),p.a.createElement(v.Path,{d:"m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"})),description:Object(y.__)("An image Grid Block."),category:"common",supports:{className:!0,inserter:!0,reusable:!1,html:!1},styles:[{name:"default",label:Object(y.__)("Default"),isDefault:!0},{name:"hover",label:Object(y.__)("Hover")},{name:"no-caption",label:Object(y.__)("No Caption")}],attributes:{h:{type:"number",default:1},w:{type:"number",default:1},minHeight:{type:"number",default:200},imgId:{type:"number"},imgUrl:{type:"string"}},transforms:{from:[{type:"block",blocks:["gecko/grid-layout-basic","gecko/grid-layout-item"],transform:function(e,t){var n=Object(k.select)("core/editor").getSelectedBlock(),r=e.h,a=e.w,o=e.bgMedia,i=e.bgMediaUrl,l=e.mediaId,c=e.mediaUrl,s=e.minHeight;return Object(u.createBlock)("gecko/grid-layout-image",{h:r,w:a,imgId:o||l,imgUrl:i||c,minHeight:s},n.innerBlocks)}}]},deprecated:[{migrate:function(){},save:function(){return p.a.createElement(_.InnerBlocks.Content,null)}}],edit:function(e){var t=e.attributes,c=e.setAttributes,n=(e.className,e.insertBlocksAfter),o=e.toggleSelection,r=t.h,s=t.w,a=t.imgId,i=t.imgUrl,l=t.minHeight,u={gridColumnEnd:"span "+s,gridRowEnd:"span "+r,minHeight:l+"px"};return p.a.createElement(b.Fragment,null,p.a.createElement(_.InspectorControls,null,p.a.createElement(v.PanelBody,{title:"Grid Item"},p.a.createElement(v.RangeControl,{label:Object(y.__)("Minimum Height"),value:l,onChange:function(e){c({minHeight:e})},min:"50",max:"600",step:"1"}),p.a.createElement(v.RangeControl,{label:Object(y.__)("Width"),value:s,onChange:function(e){c({w:e})},min:1,max:12}),p.a.createElement(v.RangeControl,{label:Object(y.__)("Span Rows"),value:r,onChange:function(e){c({h:e})},min:1,max:12}))),p.a.createElement(_.BlockControls,null,p.a.createElement(v.Toolbar,null,p.a.createElement(_.MediaUpload,{onSelect:function(e){c({imgId:e.id,imgUrl:e.url})},type:["image"],value:a||null,render:function(e){var t=e.open;return p.a.createElement(v.IconButton,{className:"components-icon-button components-toolbar__control",label:Object(y.__)("Edit image"),onClick:t,icon:"edit"})}}))),p.a.createElement("div",{className:"gecko-grid-layout-editor-styles",style:u}),p.a.createElement(v.ResizableBox,{size:{width:"",height:"100%"},className:"wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ".concat(t.className),enable:{top:!1,right:!0,bottom:!0,left:!1},onResizeStart:function(e,t,n,r){o(!1)},onResize:I()(function(e,t,n,r){if("bottom"===t){var a=600<n.clientHeight?600:n.clientHeight;c({minHeight:a}),n.style.height="100%"}if("right"===t){var o=Math.floor(n.parentNode.offsetWidth/s),i=(Math.floor(n.parentNode.offsetWidth/o),Math.floor(n.clientWidth/s),Math.floor(n.clientWidth/o)),l=(Math.floor(parseInt(r.width,10)/o),i);12<l&&(l=12),l<1&&(l=1),c({w:l}),n.style.width="100%"}},250),onResizeStop:function(e,t,n,r){if(n.style.width="100%","bottom"===t){var a=600<n.clientHeight?600:n.clientHeight;c({minHeight:a}),o(!0)}}},!a&&p.a.createElement(_.MediaPlaceholder,{onSelect:function(e){c({imgId:e.id,imgUrl:e.url})},allowedTypes:["image"],accept:"image/*"}),i&&p.a.createElement("img",{className:"gecko-grid-layout-image__image",src:i}),a&&p.a.createElement("figcaption",{className:"gecko-grid-layout-image__caption"},"function"==typeof n?p.a.createElement(_.InnerBlocks,{templateLock:!1,allowedBlocks:P}):p.a.createElement("p",null,"Lorem Ipsum"))))},save:function(){return p.a.createElement("div",null,p.a.createElement(_.InnerBlocks.Content,null))}},F={title:Object(y.__)("Basic"),parent:["gecko/grid-layout"],icon:p.a.createElement(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement(v.Path,{d:"M0,0h24v24H0V0z M0,0h24v24H0V0z",fill:"none"}),p.a.createElement(v.Path,{d:"m20 7v10h-16v-10h16m0-2h-16c-1.1 0-1.99 0.9-1.99 2l-0.01 10c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z"}),p.a.createElement(v.Rect,{x:"11",y:"8",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"11",y:"11",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"8",y:"8",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"8",y:"11",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"5",y:"11",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"5",y:"8",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"8",y:"14",width:"8",height:"2"}),p.a.createElement(v.Rect,{x:"14",y:"11",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"14",y:"8",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"17",y:"11",width:"2",height:"2"}),p.a.createElement(v.Rect,{x:"17",y:"8",width:"2",height:"2"})),description:Object(y.__)("An image grid block."),category:"common",supports:{className:!0,inserter:!0,reusable:!1,html:!1},styles:[{name:"default",label:Object(y.__)("Default"),isDefault:!0}],attributes:{h:{type:"number",default:1},w:{type:"number",default:1}},transforms:{from:[{type:"block",blocks:["gecko/grid-layout-image","gecko/grid-layout-item"],transform:function(e,t){var n=Object(k.select)("core/editor").getSelectedBlock(),r=e.h,a=e.w;return Object(u.createBlock)("gecko/grid-layout-basic",{h:r,w:a},n.innerBlocks)}}]},deprecated:[{migrate:function(){},save:function(){return p.a.createElement(_.InnerBlocks.Content,null)}}],edit:function(e){var t=e.attributes,n=e.setAttributes,r=(e.className,e.insertBlocksAfter),a=t.h,o=t.w,i={gridColumnEnd:"span "+o,gridRowEnd:"span "+a};return p.a.createElement(b.Fragment,null,p.a.createElement(_.InspectorControls,null,p.a.createElement(v.PanelBody,{title:"Grid Item"},p.a.createElement(v.RangeControl,{label:Object(y.__)("Width"),value:o,onChange:function(e){n({w:e})},min:1,max:12}),p.a.createElement(v.RangeControl,{label:Object(y.__)("Span Rows"),value:a,onChange:function(e){n({h:e})},min:1,max:12}))),p.a.createElement("div",{className:"gecko-grid-layout-editor-styles",style:i}),p.a.createElement("div",{className:"wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-basic ".concat(t.className)},"function"==typeof r?p.a.createElement(_.InnerBlocks,{templateLock:!1}):p.a.createElement("p",null,"Lorem Ipsum")))},save:function(){return p.a.createElement("div",null,p.a.createElement(_.InnerBlocks.Content,null))}};Object(u.registerBlockType)("gecko/grid-layout",A),Object(u.registerBlockType)("gecko/grid-layout-basic",F),Object(u.registerBlockType)("gecko/grid-layout-image",T),Object(u.registerBlockType)("gecko/grid-layout-item",H),document.addEventListener("DOMContentLoaded",function(){var l=new MutationObserver(function(e){e.forEach(function(e){var t=e.target.closest('[data-type^="gecko/grid-layout-"]');if(t){var n=e.target.getAttribute("style");t.style=n}})});function i(e){var t=e.querySelector(".gecko-grid-layout-editor-styles").getAttribute("style");e.style=t}new MutationObserver(function(e){e.forEach(function(e){if(e.addedNodes)for(var t=0;t<e.addedNodes.length;t++){var n=e.addedNodes[t];if("function"!=typeof n.matches)return;if(!n.matches('[data-type^="gecko/grid-layout-"]'))return;return i(n)}})}).observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),function(){var e=document.querySelectorAll('[data-type^="gecko/grid-layout-"]');if(!(0<!e.length)){var t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0)i(a.value)}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}(),document.addEventListener("DOMNodeInserted",function(){var e=document.querySelectorAll(".gecko-grid-layout-editor-styles");if(!(0<!e.length)){var t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;l.observe(i,{attributes:!0,attributeFilter:["style"]})}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}})})}]);