(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"41e9":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"flex items-center font-semibold text-lg text-left py-1 focus-primary",class:{"text-primary":!t.question.selected,"text-green-700":t.question.selected},attrs:{"data-id":t.question.id,"data-tree":t.question.tree_id,role:"checkbox","aria-checked":t.question.selected,title:t.title},on:{click:function(e){return e.preventDefault(),t.toggleActive(t.question.id)}}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.question.selected?s("span",{key:"selected",staticClass:"flex-shrink-0 h-8 w-8 mr-4"},[s("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",alt:t.$t("check")}},[s("title",[t._v(t._s(t.$t("check")))]),s("path",{attrs:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])]):s("span",{key:"notselected",staticClass:"flex-shrink-0 h-8 w-8 mr-4"},[s("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",alt:t.$t("circle")}},[s("title",[t._v(t._s(t.$t("circle")))]),s("path",{attrs:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"}})])])]),s("span",[t._v(" "+t._s(t.question.question_text[this.$i18n.locale])+" ")])],1)},n=[],a=s("5530"),l=s("2f62"),c={name:"BaseQuestion",props:{question:{required:!0,type:Object}},data:function(){return{}},watch:{},computed:{title:function(){return this.question.selected?this.$t("unselect_question"):this.$t("select_question")}},methods:Object(a["a"])({},Object(l["b"])(["toggleActive"]))},r=c,o=s("2877"),u=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=u.exports},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("BaseHeadline",[t._v(" "+t._s(t.$t("headline_home"))+" ")]),s("div",{staticClass:"flex flex-col"},t._l(t.questions,(function(t,e){return s("div",{key:e,staticClass:"my-1"},[s("BaseQuestion",{attrs:{question:t}})],1)})),0),s("div",{staticClass:"flex justify-between items-center mt-12"},[s("div",{staticClass:"w-1/2 p-4"},[s("a",{staticClass:"flex items-center border-2 border-primary rounded-md px-4 py-2 text-base leading-none font-bold text-primary focus-primary",attrs:{href:t.link_previous}},[s("span",{staticClass:"flex-center w-4 h-4"},[s("svg",{staticClass:"fill-current w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512",alt:t.$t("left")}},[s("title",[t._v(t._s(t.$t("left")))]),s("path",{attrs:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}})])]),s("span",{staticClass:"ml-4"},[s("span",{staticClass:"block font-bold text-base"},[t._v(t._s(t.$t("previous_step")))]),s("span",{staticClass:"block font-medium text-xs"},[t._v(t._s(t.$t("application_easy_mode")))])])])]),s("div",{staticClass:"flex flex-col sm:flex-row justify-end items-center w-1/2 p-4"},[t.disabled?s("div",{staticClass:"text-xs leading-snug font-semibold text-nav-end text-right pr-4"},[t._v(" "+t._s(t.$t("info_no_selection"))+" ")]):t._e(),s("BaseButton",{attrs:{disabled:t.disabled}},[t._v(t._s(t.$t("next")))])],1)])],1)},n=[],a=s("5530"),l=s("82ea"),c=s("41e9"),r=s("79a2"),o=s("2f62"),u={name:"Home",components:{BaseQuestion:c["a"],BaseHeadline:r["a"],BaseButton:l["a"]},data:function(){return{init:!1}},computed:{questions:function(){return this.$store.getters.getHome},disabled:function(){return!this.$store.getters.hasSelected},link_previous:function(){return"/"+this.$i18n.locale+"/apply/"}},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["toggleActive","setTree"])),{},{next:function(){this.$router.push({name:"Tree",params:{id:this.$store.getters.getNextTree}})}}),beforeMount:function(){this.setTree()}},d=u,f=s("2877"),p=Object(f["a"])(d,i,n,!1,null,null,null);e["default"]=p.exports}}]);