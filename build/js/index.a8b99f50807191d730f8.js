(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,t,e){(function(t){var e=function(n){return n&&n.Math==Math&&n};n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,e(30))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(4),o=e(18),i=e(14);n.exports=r?function(n,t,e){return o.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(1);n.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(6);n.exports=function(n){if(!r(n))throw TypeError(String(n)+" is not an object");return n}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(32),o=e(5);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(0),o=e(3);n.exports=function(n,t){try{o(r,n,t)}catch(e){r[n]=t}return t}},function(n,t,e){var r=e(0),o=e(10),i="__core-js_shared__",a=r[i]||o(i,{});n.exports=a},function(n,t,e){"use strict";var r,o,i=e(49),a=e(50),c=RegExp.prototype.exec,s=String.prototype.replace,u=c,l=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||f)&&(u=function(n){var t,e,r,o,a=this,u=f&&a.sticky,v=i.call(a),d=a.source,h=0,g=n;return u&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(n).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==n[a.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),e=new RegExp("^(?:"+d+")",v)),p&&(e=new RegExp("^"+d+"$(?!\\s)",v)),l&&(t=a.lastIndex),r=c.call(u?e:a,g),u?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:l&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),p&&r&&r.length>1&&s.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),n.exports=u},function(n,t,e){var r=e(4),o=e(31),i=e(14),a=e(9),c=e(16),s=e(2),u=e(17),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(n,t){if(n=a(n),t=c(t,!0),u)try{return l(n,t)}catch(n){}if(s(n,t))return i(!o.f.call(n,t),n[t])}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(6);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(4),o=e(1),i=e(33);n.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(4),o=e(17),i=e(7),a=e(16),c=Object.defineProperty;t.f=r?c:function(n,t,e){if(i(n),t=a(t,!0),i(e),o)try{return c(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(0),o=e(3),i=e(2),a=e(10),c=e(20),s=e(34),u=s.get,l=s.enforce,f=String(String).split("String");(n.exports=function(n,t,e,c){var s,u=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof t||i(e,"name")||o(e,"name",t),(s=l(e)).source||(s.source=f.join("string"==typeof t?t:""))),n!==r?(u?!v&&n[t]&&(p=!0):delete n[t],p?n[t]=e:o(n,t,e)):p?n[t]=e:a(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},function(n,t,e){var r=e(11),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(n){return o.call(n)}),n.exports=r.inspectSource},function(n,t,e){var r=e(37),o=e(11);(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol("+String(void 0===n?"":n)+")_"+(++e+r).toString(36)}},function(n,t){n.exports={}},function(n,t,e){var r=e(8),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){var r=e(1);n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(n,t,e){"use strict";var r=e(27),o=e(7),i=e(53),a=e(24),c=e(8),s=e(5),u=e(54),l=e(56),f=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(n,t,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(e,r){var o=s(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):t.call(String(o),e,r)},function(n,r){if(!g&&m||"string"==typeof r&&-1===r.indexOf(x)){var i=e(t,n,this,r);if(i.done)return i.value}var s=o(n),v=String(this),d="function"==typeof r;d||(r=String(r));var h=s.global;if(h){var b=s.unicode;s.lastIndex=0}for(var E=[];;){var w=l(s,v);if(null===w)break;if(E.push(w),!h)break;""===String(w[0])&&(s.lastIndex=u(v,a(s.lastIndex),b))}for(var S,k="",O=0,P=0;P<E.length;P++){w=E[P];for(var j=String(w[0]),T=f(p(c(w.index),v.length),0),I=[],R=1;R<w.length;R++)I.push(void 0===(S=w[R])?S:String(S));var _=w.groups;if(d){var A=[j].concat(I,T,v);void 0!==_&&A.push(_);var M=String(r.apply(void 0,A))}else M=y(j,v,T,I,_,r);T>=O&&(k+=v.slice(O,T)+M,O=T+j.length)}return k+v.slice(O)}];function y(n,e,r,o,a,c){var s=r+n.length,u=o.length,l=h;return void 0!==a&&(a=i(a),l=d),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return n;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var f=v(l/10);return 0===f?t:f<=u?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):t}c=o[l-1]}return void 0===c?"":c}))}}))},function(n,t,e){"use strict";e(28);var r=e(19),o=e(1),i=e(51),a=e(12),c=e(3),s=i("species"),u=!o((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),l="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),v=!o((function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));n.exports=function(n,t,e,f){var d=i(n),h=!o((function(){var t={};return t[d]=function(){return 7},7!=""[n](t)})),g=h&&!o((function(){var t=!1,e=/a/;return"split"===n&&((e={}).constructor={},e.constructor[s]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return t=!0,null},e[d](""),!t}));if(!h||!g||"replace"===n&&(!u||!l||p)||"split"===n&&!v){var m=/./[d],x=e(d,""[n],(function(n,t,e,r,o){return t.exec===a?h&&!o?{done:!0,value:m.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=x[0],b=x[1];r(String.prototype,n,y),r(RegExp.prototype,d,2==t?function(n,t){return b.call(n,this,t)}:function(n){return b.call(n,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},function(n,t,e){"use strict";var r=e(29),o=e(12);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(n,t,e){var r=e(0),o=e(13).f,i=e(3),a=e(19),c=e(10),s=e(38),u=e(48);n.exports=function(n,t){var e,l,f,p,v,d=n.target,h=n.global,g=n.stat;if(e=h?r:g?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in t){if(p=t[l],f=n.noTargetGet?(v=o(e,l))&&v.value:e[l],!u(h?l:d+(g?".":"#")+l,n.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(n.sham||f&&f.sham)&&i(p,"sham",!0),a(e,l,p,n)}}},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(n){var t=o(this,n);return!!t&&t.enumerable}:r},function(n,t,e){var r=e(1),o=e(15),i="".split;n.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==o(n)?i.call(n,""):Object(n)}:Object},function(n,t,e){var r=e(0),o=e(6),i=r.document,a=o(i)&&o(i.createElement);n.exports=function(n){return a?i.createElement(n):{}}},function(n,t,e){var r,o,i,a=e(35),c=e(0),s=e(6),u=e(3),l=e(2),f=e(11),p=e(36),v=e(23),d=c.WeakMap;if(a){var h=f.state||(f.state=new d),g=h.get,m=h.has,x=h.set;r=function(n,t){return t.facade=n,x.call(h,n,t),t},o=function(n){return g.call(h,n)||{}},i=function(n){return m.call(h,n)}}else{var y=p("state");v[y]=!0,r=function(n,t){return t.facade=n,u(n,y,t),t},o=function(n){return l(n,y)?n[y]:{}},i=function(n){return l(n,y)}}n.exports={set:r,get:o,has:i,enforce:function(n){return i(n)?o(n):r(n,{})},getterFor:function(n){return function(t){var e;if(!s(t)||(e=o(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(n,t,e){var r=e(0),o=e(20),i=r.WeakMap;n.exports="function"==typeof i&&/native code/.test(o(i))},function(n,t,e){var r=e(21),o=e(22),i=r("keys");n.exports=function(n){return i[n]||(i[n]=o(n))}},function(n,t){n.exports=!1},function(n,t,e){var r=e(2),o=e(39),i=e(13),a=e(18);n.exports=function(n,t){for(var e=o(t),c=a.f,s=i.f,u=0;u<e.length;u++){var l=e[u];r(n,l)||c(n,l,s(t,l))}}},function(n,t,e){var r=e(40),o=e(42),i=e(47),a=e(7);n.exports=r("Reflect","ownKeys")||function(n){var t=o.f(a(n)),e=i.f;return e?t.concat(e(n)):t}},function(n,t,e){var r=e(41),o=e(0),i=function(n){return"function"==typeof n?n:void 0};n.exports=function(n,t){return arguments.length<2?i(r[n])||i(o[n]):r[n]&&r[n][t]||o[n]&&o[n][t]}},function(n,t,e){var r=e(0);n.exports=r},function(n,t,e){var r=e(43),o=e(46).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},function(n,t,e){var r=e(2),o=e(9),i=e(44).indexOf,a=e(23);n.exports=function(n,t){var e,c=o(n),s=0,u=[];for(e in c)!r(a,e)&&r(c,e)&&u.push(e);for(;t.length>s;)r(c,e=t[s++])&&(~i(u,e)||u.push(e));return u}},function(n,t,e){var r=e(9),o=e(24),i=e(45),a=function(n){return function(t,e,a){var c,s=r(t),u=o(s.length),l=i(a,u);if(n&&e!=e){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((n||l in s)&&s[l]===e)return n||l||0;return!n&&-1}};n.exports={includes:a(!0),indexOf:a(!1)}},function(n,t,e){var r=e(8),o=Math.max,i=Math.min;n.exports=function(n,t){var e=r(n);return e<0?o(e+t,0):i(e,t)}},function(n,t){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var r=e(1),o=/#|\.prototype\./,i=function(n,t){var e=c[a(n)];return e==u||e!=s&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(n){return String(n).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";n.exports=i},function(n,t,e){"use strict";var r=e(7);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.dotAll&&(t+="s"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},function(n,t,e){"use strict";var r=e(1);function o(n,t){return RegExp(n,t)}t.UNSUPPORTED_Y=r((function(){var n=o("a","y");return n.lastIndex=2,null!=n.exec("abcd")})),t.BROKEN_CARET=r((function(){var n=o("^r","gy");return n.lastIndex=2,null!=n.exec("str")}))},function(n,t,e){var r=e(0),o=e(21),i=e(2),a=e(22),c=e(25),s=e(52),u=o("wks"),l=r.Symbol,f=s?l:l&&l.withoutSetter||a;n.exports=function(n){return i(u,n)||(c&&i(l,n)?u[n]=l[n]:u[n]=f("Symbol."+n)),u[n]}},function(n,t,e){var r=e(25);n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(n,t,e){var r=e(5);n.exports=function(n){return Object(r(n))}},function(n,t,e){"use strict";var r=e(55).charAt;n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},function(n,t,e){var r=e(8),o=e(5),i=function(n){return function(t,e){var i,a,c=String(o(t)),s=r(e),u=c.length;return s<0||s>=u?n?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?n?c.charAt(s):i:n?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}};n.exports={codeAt:i(!1),charAt:i(!0)}},function(n,t,e){var r=e(15),o=e(12);n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var i=e.call(n,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(n))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},function(n,t,e){"use strict";e.r(t);e(26);var r=()=>'\n        <section class="home-page-hero">\n            <div class="container">\n                <div class="home-page-hero-content">\n                    <h1 class="h1">Fashion Guide 2020</h1>\n                    <p class="description">Products designed for modern passionate individuals. We\'ve curated groups of items that make fashion up exciting.</p>\n                    <a class="btn" href="/explore">\n                        <span>Discover</span>\n                        <i class="fas fa-arrow-right"></i>\n                    </a>\n                </div>\n                <div class="home-page-hero-image">\n                    <img src="https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">\n                </div>\n            </div>\n        </section>\n        <section class="gender-selection">\n            <div class="container">\n                <div class="col-left">\n                    <div class="content">\n                        <h2 class="h2">Women</h2>\n                        <a class="btn" href="/explore">\n                            <span>Shop Now</span>\n                            <i class="fas fa-arrow-right"></i>\n                        </a>\n                    </div>\n                    <figure class="image-left">\n                        <img src="//cdn.shopify.com/s/files/1/0017/9686/6113/files/woman-haerfest-harvest-bags-indiegogo-backpack-tote-duffel-apollo_990x.jpg?v=1578084620">\n                    </figure>\n                </div>\n                <div class="col-right">\n                    <div class="content">\n                        <h2 class="h2">Men</h2>\n                        <a class="btn" href="/explore">\n                            <span>Show Now</span>\n                            <i class="fas fa-arrow-right"></i>\n                        </a>\n                    </div>\n                    <figure class="image-right">\n                        <img src="//cdn.shopify.com/s/files/1/0017/9686/6113/files/man-haerfest-harvest-bags-indiegogo-backpack-tote-duffel-apollo_990x.jpg?v=1578084620">\n                    </figure>\n                </div>\n            </div>\n        </section>\n        <section class="featured-category">\n            <div class="container">\n                <div class="featured-image">\n                    <img src="https://cdn.shopify.com/s/files/1/0017/9686/6113/files/backpack-black-side-haerfest-harvest-bag-bags-luggage-daypack-backpack-rucksack-knapsack-quality-size-fits-unisex-men-women-ladies-review-small-large-medium-color-travel-commute-carry-on-work-professi_750x.jpg?v=1555441676">\n                </div>\n                <div class="featured-content">\n                    <h2 class="h2">Your Everyday, <br>Everywhere Bag</h2>\n                    <p class="description">Featuring the Travel Backpack. Carry it to your next workout, your next pitch, your next big thing.</p>\n                    <a class="btn btn-black" href="/explore">\n                        <span>Show Now</span>\n                        <i class="fas fa-arrow-right"></i>\n                    </a>\n                </div>\n            </div>\n        </section>\n    ';var o=n=>`\n        <h1>This is the project screen ${n.id}</h1>\n    `;var i=()=>"\n        <h1>Page Not Found</h1>\n    ";var a=()=>'\n        <div class="container">\n            <div class="header-brand-container">\n                <a href="/" class="brand">H&HAPPAREL</a>\n            </div>\n            <div class="main-navigation-container">\n                <div class="nav-primary">\n                    <ul class="menu-items-list">\n                        <li class="menu-item">\n                            <a class="ui-sidebar-category-toggler" href="/men" data-gender="men" data-link>Men</a>\n                        </li>\n                        <li class="menu-item">\n                            <a class="ui-sidebar-category-toggler" href="/women" data-gender="women" data-link>Women</a>\n                        </li>\n                        <li class="menu-item">\n                            <a class="ui-sidebar-category-toggler" href="/explore" data-gender="explore" data-link>Explore</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="nav-secondary">\n                    <ul class="menu-items-list">\n                        <li class="menu-item">\n                            <a href="#!">\n                                <i class="fas fa-search"></i>\n                            </a>\n                        </li>\n                        <li class="menu-item">\n                            <a href="#!">\n                                <i class="far fa-user"></i>\n                            </a>\n                        </li>\n                        <li class="menu-item">\n                            <a href="#!">\n                                <i class="fas fa-shopping-bag"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ';const c=async()=>{let n=[{path:"/",screen:r},{path:"/projects/:id",screen:o}].map((n=>{return{route:n,result:location.pathname.match((t=n.path,new RegExp("^"+t.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$")))};var t})).find((n=>null!==n.result));n||(n={route:{path:location.pathname,screen:i},result:[location.pathname]});const t=n.route.screen;document.getElementById("header-container").innerHTML=await a(),document.getElementById("main-container").innerHTML=await t((n=>{const t=n.result.slice(1),e=Array.from(n.route.path.matchAll(/:(\w+)/g)).map((n=>n[1]));return Object.fromEntries(e.map(((n,e)=>[n,t[e]])))})(n))};document.addEventListener("DOMContentLoaded",(()=>{document.body.addEventListener("click",(n=>{var t;n.target.matches("[data-link]")&&(n.preventDefault(),t=n.target.href,history.pushState(null,null,t),c())})),c()})),window.addEventListener("popstate",c)}],[[57,1]]]);