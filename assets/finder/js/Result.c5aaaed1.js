(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Result"],{"0cb2":function(t,e,r){var n=r("7b0b"),i=Math.floor,a="".replace,s=/\$([$&'`]|\d\d?|<[^>]*>)/g,l=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,r,c,o,u){var d=r+t.length,f=c.length,h=l;return void 0!==o&&(o=n(o),h=s),a.call(u,h,(function(n,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":s=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>f){var u=i(l/10);return 0===u?n:u<=f?void 0===c[u-1]?a.charAt(1):c[u-1]+a.charAt(1):n}s=c[l-1]}return void 0===s?"":s}))}},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"466d":function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("50c4"),s=r("1d80"),l=r("8aa5"),c=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var s=i(t),o=String(this);if(!s.global)return c(s,o);var u=s.unicode;s.lastIndex=0;var d,f=[],h=0;while(null!==(d=c(s,o))){var p=String(d[0]);f[h]=p,""===p&&(s.lastIndex=l(o,a(s.lastIndex),u)),h++}return 0===h?null:f}]}))},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("50c4"),s=r("a691"),l=r("1d80"),c=r("8aa5"),o=r("0cb2"),u=r("14c3"),d=Math.max,f=Math.min,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(r,n){var i=l(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!p&&v||"string"===typeof n&&-1===n.indexOf(g)){var l=r(e,t,this,n);if(l.done)return l.value}var x=i(t),m=String(this),_="function"===typeof n;_||(n=String(n));var b=x.global;if(b){var w=x.unicode;x.lastIndex=0}var y=[];while(1){var E=u(x,m);if(null===E)break;if(y.push(E),!b)break;var C=String(E[0]);""===C&&(x.lastIndex=c(m,a(x.lastIndex),w))}for(var $="",R=0,S=0;S<y.length;S++){E=y[S];for(var k=String(E[0]),I=d(f(s(E.index),m.length),0),A=[],O=1;O<E.length;O++)A.push(h(E[O]));var T=E.groups;if(_){var B=[k].concat(A,I,m);void 0!==T&&B.push(T);var P=String(n.apply(void 0,B))}else P=o(k,m,I,A,T,n);I>=R&&($+=m.slice(R,I)+P,R=I+k.length)}return $+m.slice(R)}]}))},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),a=function(t){return function(e,r){var a,s,l=String(i(e)),c=n(r),o=l.length;return c<0||c>=o?t?"":void 0:(a=l.charCodeAt(c),a<55296||a>56319||c+1===o||(s=l.charCodeAt(c+1))<56320||s>57343?t?l.charAt(c):a:t?l.slice(c,c+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||o;d&&(l=function(t){var e,r,i,l,d=this,f=o&&d.sticky,h=n.call(d),p=d.source,v=0,g=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),r=new RegExp("^(?:"+p+")",h)),u&&(r=new RegExp("^"+p+"$(?!\\s)",h)),c&&(e=d.lastIndex),i=a.call(f?r:d,g),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&s.call(i[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),t.exports=l},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,s=a.toString,l=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(t){return""}}})},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),s=r("9263"),l=r("9112"),c=a("species"),o=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=a(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!g||"replace"===t&&(!o||!u||f)||"split"===t&&!h){var x=/./[p],m=r(p,""[t],(function(t,e,r,n,i){return e.exec===s?v&&!i?{done:!0,value:x.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),_=m[0],b=m[1];n(String.prototype,t,_),n(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&l(RegExp.prototype[p],"sham",!0)}},eeac:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.init?r("div",[t.has_result?r("BaseHeadline",{attrs:{icon:"result"}},[t._v(" "+t._s(t.$tc("headline_result",t.result.length,{count:t.result.length}))+" ")]):r("BaseHeadline",{attrs:{icon:"no_result"}},[t._v(" "+t._s(t.$t("headlines.no_result"))+" ")]),r("div",{staticClass:"border-t-2 border-gray-400 border-dashed"},[t.has_result?t._e():r("div",{staticClass:"border-b-2 border-gray-400 border-dashed text-base font-regular p-4"},[t._v(" "+t._s(t.$t("info_no_result"))+" ")])]),t._l(t.result,(function(t,e){return r("BaseAccordion",{key:e,attrs:{item:t}})})),r("div",{staticClass:"flex flex-col sm:flex-row justify-between items-center mt-12"},[r("div",{staticClass:"p-4"},[r("BaseButton",{attrs:{direction:"top"}},[t._v(t._s(t.$t("restart")))])],1),t.has_result?r("div",{staticClass:"p-4"},[r("a",{staticClass:"flex items-center border-2 border-primary rounded-md px-6 py-4 text-base leading-none font-bold text-primary focus-primary",attrs:{href:t.link_apply}},[t._v(" "+t._s(t.$t("start_application"))+" "),r("span",{staticClass:"flex-shrink-0 flex-center w-4 h-4 ml-4"},[r("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512",alt:t.$t("right")}},[r("title",[t._v(t._s(t.$t("right")))]),r("path",{attrs:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}})])])])]):t._e()])],2):t._e()},i=[],a=(r("c975"),r("b0c0"),r("ac1f"),r("466d"),r("5319"),r("5530")),s=r("79a2"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-b-2 border-gray-400 border-dashed my-4 p-4 pb-8",attrs:{"data-weight":t.item.weight}},[r("button",{staticClass:"w-full flex justify-between items-center text-left focus-primary px-1 -ml-1",attrs:{id:"accordion-button-"+t.id,type:"button","aria-controls":"accordion-content-"+t.id},on:{click:function(e){return e.preventDefault(),t.toggle(t.item.id)}}},[r("span",{staticClass:"flex-grow mr-12"},[r("span",{staticClass:"block text-lg font-semibold text-primary mb-1"},[t._v(" "+t._s(t.$t("results_headline",{ministery:t.$t("qualifications_"+t.item.ministry),regulation:t.item.regulation_no}))+" ")]),r("span",{staticClass:"block text-base font-semibold"},[t._v(" "+t._s(t.$t("results_answer"))+" "),r("span",{staticClass:"italic text-gray-700 font-medium"},[t._v(t._s(t.getQuestion(t.item.questions[0])))])])]),r("span",{staticClass:"flex-shrink-0 flex-center w-8 h-8 text-primary"},[t.details?r("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",alt:t.$t("minus")}},[r("title",[t._v(t._s(t.$t("minus")))]),r("path",{attrs:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}})]):r("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",alt:t.$t("plus")}},[r("title",[t._v(t._s(t.$t("plus")))]),r("path",{attrs:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}})])])]),r("transition",{attrs:{name:"slide"}},[t.details?r("div",{staticClass:"block text-base mt-4",attrs:{id:"accordion-content-"+t.id,"aria-expanded":t.details,hidden:!t.details}},[t.has_info?r("div",{staticClass:"flex items-center mb-8"},[r("span",{staticClass:"flex-shrink-0 flex-center w-3 text-orange-500"},[r("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512",alt:t.$t("exclamation")}},[r("title",[t._v(t._s(t.$t("exclamation")))]),r("path",{attrs:{d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"}})])]),r("span",{staticClass:"font-medium ml-4 italic"},[t._v(" "+t._s(t.item.info[t.locale])+" ")])]):t._e(),t.has_provide?r("div",{staticClass:"mb-4"},[r("div",{staticClass:"font-bold"},[t._v(t._s(t.$t("results_provide")))]),r("div",{staticClass:"copy",domProps:{innerHTML:t._s(t.item.provide[t.locale])}})]):r("div",{staticClass:"text-sm mb-4"},[t._v(" "+t._s(t.item.notes[t.locale])+" ")]),r("div",{staticClass:"flex justify-between items-center pt-4"},[r("a",{staticClass:"flex items-center text-primary font-bold focus-primary",attrs:{href:t.item.link[t.locale]}},[r("span",{staticClass:"flex-shrink-0 w-3 mr-2"},[r("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512",alt:t.$t("next")}},[r("title",[t._v(t._s(t.$t("next")))]),r("path",{attrs:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}})])]),t._v(" "+t._s(t.$t("results_details"))+" "+t._s(t.$t("qualifications_"+t.item.ministry))+" ")])])]):t._e()])],1)},c=[],o={name:"BaseAccordion",props:{item:{required:!0,type:Object}},data:function(){return{details:!1}},watch:{},computed:{has_info:function(){return""!==this.item.info[this.$i18n.locale]},has_provide:function(){return""!==this.item.provide[this.$i18n.locale]},locale:function(){return this.$i18n.locale},id:function(){return this.item.ministry+this.item.regulation_no}},methods:{getQuestion:function(t){var e=this.$store.getters.getQuestion(t);return e.question_text[this.$i18n.locale]},toggle:function(){this.details=!this.details}}},u=o,d=r("2877"),f=Object(d["a"])(u,l,c,!1,null,null,null),h=f.exports,p=r("82ea"),v=r("2f62"),g={name:"Result",components:{BaseHeadline:s["a"],BaseButton:p["a"],BaseAccordion:h},props:["hash"],data:function(){return{init:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(v["c"])(["questions","tree_list"])),{},{has_result:function(){return this.result.length>0},result:function(){return this.$store.getters.getQualifications},link_apply:function(){return"/"+this.$i18n.locale+"/apply/step-2/"}}),methods:{setStorage:function(t,e){try{return localStorage.setItem(t,e),!0}catch(r){return"NS_ERROR_FILE_CORRUPTED"==r.name&&alert(this.message),this.setCookie(t,e),!1}},getStorage:function(t){try{return localStorage.getItem(t).replace(/(<([^>]+)>)/gi,"")}catch(e){return"NS_ERROR_FILE_CORRUPTED"==e.name&&alert(this.message),this.getCookie(t)}},setCookie:function(t,e){var r="",n=new Date;n.setTime(n.getTime()+31104e6),r="; expires="+n.toUTCString(),document.cookie=t+"="+e+r+"; path=/"},getCookie:function(t){var e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2].replace(/(<([^>]+)>)/gi,""):null}},beforeMount:function(){if(this.tree_list.length<1)this.$router.push({name:"Home"});else{var t=this.getStorage("ta-check.application");if(null===t)t=[];else try{t=JSON.parse(t)}catch(e){console.warn("Visa Finder - storage file corrupted"),t=[]}this.setStorage("tgc_visa_finder",this.result.length),this.has_result&&(-1===t.indexOf(this.hash)&&t.push(this.hash),this.setStorage("ta-check.application",JSON.stringify(t))),this.init=!0}}},x=g,m=Object(d["a"])(x,n,i,!1,null,null,null);e["default"]=m.exports}}]);