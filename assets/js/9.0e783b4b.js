(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,e,n){"use strict";var r=n(148),a=n(15),o=n(19),i=n(21),s=n(149),u=n(150);r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=a(t),c=String(this);if(!i.global)return u(i,c);var h=i.unicode;i.lastIndex=0;for(var d,l=[],f=0;null!==(d=u(i,c));){var p=String(d[0]);l[f]=p,""===p&&(i.lastIndex=s(c,o(i.lastIndex),h)),f++}return 0===f?null:l}]}))},298:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){var r=n(21),a="["+n(298)+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},304:function(t,e,n){"use strict";var r=n(2),a=n(29).find,o=n(91),i=n(16),s=!0,u=i("find");"find"in[]&&Array(1).find((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},307:function(t,e,n){var r=n(7),a=n(153);t.exports=function(t,e,n){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(t,i),t}},443:function(t,e,n){"use strict";n.r(e);var r=n(362),a=n(358),o=n(359),i=n(363),s=n(286),u={name:"Layout",components:{Home:r.a,Page:o.a,Sidebar:i.a,Navbar:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(s.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=n(39),h=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=h.exports}}]);