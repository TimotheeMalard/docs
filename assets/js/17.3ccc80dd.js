(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{446:function(t,e,a){"use strict";a.r(e);var s=a(39),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pre-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-compilation"}},[t._v("#")]),t._v(" (Pre-)Compilation")]),t._v(" "),a("h2",{attrs:{id:"handlebars-compile-template-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-compile-template-options"}},[t._v("#")]),t._v(" "),a("code",[t._v("Handlebars.compile(template, options)")])]),t._v(" "),a("p",[t._v("Compiles a template so it can be executed immediately.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Supports a variety of options that alter how the template executes.")]),t._v(" "),a("div",{pre:!0},[a("ul",[a("li",[a("code",[t._v("data")]),t._v(": Set to false to disable "),a("code",[t._v("@data")]),t._v(" tracking.")]),t._v(" "),a("li",[a("code",[t._v("compat")]),t._v(": Set to true to enable recursive field lookup.")]),t._v(" "),a("li",[a("code",[t._v("knownHelpers")]),t._v(": Hash containing list of helpers that are known to exist (truthy) at template execution time. Passing\nthis allows the compiler to optimize a number of cases. Builtin helpers are automatically included in this list and\nmay be omitted by setting that value to "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("knownHelpersOnly")]),t._v(": Set to true to allow further optimzations based on the known helpers list.")]),t._v(" "),a("li",[a("code",[t._v("noEscape")]),t._v(": Set to true to not HTML escape any content.")]),t._v(" "),a("li",[a("code",[t._v("strict")]),t._v(": Run in strict mode. In this mode, templates will throw rather than silently ignore missing fields. This has\nthe side effect of disabling inverse operations such as "),a("code",[t._v("{{^foo}}{{/foo}}")]),t._v(" unless fields are explicitly included in\nthe source object.")]),t._v(" "),a("li",[a("code",[t._v("assumeObjects")]),t._v(": Removes object existence checks when traversing paths. This is a subset of "),a("code",[t._v("strict")]),t._v(" mode that\ngenerates optimized templates when the data inputs are known to be safe.")]),t._v(" "),a("li",[a("code",[t._v("preventIndent")]),t._v(": By default, an indented partial-call causes the output of the whole partial being indented by the\nsame amount. This can lead to unexpected behavior when the partial writes "),a("code",[t._v("pre")]),t._v("-tags. Setting this option to "),a("code",[t._v("true")]),t._v("\nwill disable the auto-indent feature.")]),t._v(" "),a("li",[a("code",[t._v("ignoreStandalone")]),t._v(": Disables standalone tag removal when set to "),a("code",[t._v("true")]),t._v(". When set, blocks and partials that are on\ntheir own line will not remove the whitespace on that line.")]),t._v(" "),a("li",[a("code",[t._v("explicitPartialContext")]),t._v(": Disables implicit context for partials. When enabled, partials that are not passed a context\nvalue will execute against an empty object.")])])]),a("h2",{attrs:{id:"handlebars-precompile-template-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-precompile-template-options"}},[t._v("#")]),t._v(" "),a("code",[t._v("Handlebars.precompile(template, options)")])]),t._v(" "),a("p",[t._v("Precompiles a given template so it can be sent to the client and executed without compilation.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" templateSpec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("precompile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Supports all of the same options parameters as the "),a("code",[t._v("Handlebars.compile")]),t._v(" method. Additionally may pass:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("srcName")]),t._v(": Passed to generate the source map for the input file. When run in this manner, the return structure is\n"),a("code",[t._v("{code, map}")]),t._v(" with "),a("code",[t._v("code")]),t._v(" containing the template definition and "),a("code",[t._v("map")]),t._v(" containing the source map.")]),t._v(" "),a("li",[a("code",[t._v("destName")]),t._v(": Optional parameter used in conjunction with "),a("code",[t._v("srcName")]),t._v(" to provide a destination file name when generating\nsource maps.")])]),t._v(" "),a("h2",{attrs:{id:"handlebars-template-templatespec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-template-templatespec"}},[t._v("#")]),t._v(" "),a("code",[t._v("Handlebars.template(templateSpec)")])]),t._v(" "),a("p",[t._v("Sets up a template that was precompiled with "),a("code",[t._v("Handlebars.precompile")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateSpec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);