(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{513:function(e,t,a){"use strict";a.r(t);var s=a(39),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("h2",{attrs:{id:"what-is-handlebars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-handlebars"}},[e._v("#")]),e._v(" What is Handlebars?")]),e._v(" "),a("p",[e._v("Handlebars is a simple "),a("strong",[e._v("templating language")]),e._v(".")]),e._v(" "),a("p",[e._v("It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular\ntext with embedded Handlebars expressions.")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/simple-expressions",show:"template"}}),e._v(" "),a("p",[e._v("A handlebars expression is a "),a("code",[e._v("{{")]),e._v(", some contents, followed by a "),a("code",[e._v("}}")]),e._v(". When the template is executed, these expressions\nare replaced with values from an input object.")]),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/expressions.html"}},[e._v("Learn More: Expressions")])],1),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("The fastest way to test Handlebars is to use into load it from a "),a("em",[e._v("CDN")]),e._v(" and and embed it in an HTML file.")]),e._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("\x3c!-- Include Handlebars from a CDN --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("src")]),e._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"')]),e._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// compile the template")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" template = Handlebars.compile("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Handlebars <b>{{doesWhat}}</b>"')]),e._v(");\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// execute the compiled template and print the output to the console")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(template({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("doesWhat")]),e._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"rocks!"')]),e._v(" }));\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This method can be used for small pages and for testing. There are several other ways to use Handlebars, when you target\nreal production systems.")]),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/installation/"}},[e._v("Learn more: Installation")])],1)]),e._v(" "),a("h1",{attrs:{id:"language-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language-features"}},[e._v("#")]),e._v(" Language features")]),e._v(" "),a("h2",{attrs:{id:"simple-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-expressions"}},[e._v("#")]),e._v(" Simple expressions")]),e._v(" "),a("p",[e._v("As shown before, the following template defines two Handlebars expressions")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/simple-expressions",show:"template"}}),e._v(" "),a("p",[e._v("If applied to the input object")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/simple-expressions",show:"input"}}),e._v(" "),a("p",[e._v("the expressions will be replaced by the corresponding properties. The result is then")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/simple-expressions",show:"output"}}),e._v(" "),a("h2",{attrs:{id:"nested-input-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-input-objects"}},[e._v("#")]),e._v(" Nested input objects")]),e._v(" "),a("p",[e._v("Sometimes, the input objects contains other objects or arrays. For example:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/path-expressions-dot",show:"input"}}),e._v(" "),a("p",[e._v("In such a case, you can use a dot-notation to gain access to the nested properties")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/path-expressions-dot",show:"template"}}),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/expressions.html"}},[e._v("Learn more: Expressions")])],1),e._v(" "),a("p",[e._v("Some built-in helpers allow you to change the current context to a nested object. You can then access this object as if\nit were the root object")]),e._v(" "),a("h2",{attrs:{id:"evaluation-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluation-context"}},[e._v("#")]),e._v(" Evaluation context")]),e._v(" "),a("p",[e._v("The built-in block-helpers "),a("code",[e._v("each")]),e._v(" and "),a("code",[e._v("with")]),e._v(" allow you to change the current evaluation context.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("with")]),e._v("-helper dives into an object-property, giving you access to its properties")]),e._v(" "),a("Flex",[a("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-with-block",show:"template"}}),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-with-block",show:"input"}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("each")]),e._v("-helper iterates an array, allowing to you access the properties of each object via simple handlebars\nexpressions.")]),e._v(" "),a("Flex",[a("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block",show:"template"}}),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block",show:"input"}})],1),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/builtin-helpers.html"}},[e._v("Learn more: Built-in helpers")])],1),e._v(" "),a("h2",{attrs:{id:"template-comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-comments"}},[e._v("#")]),e._v(" Template comments")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("You can use comments in your handlebars code just as you would in your code. Since there is generally some level of\nlogic, this is a good practice.")]),e._v(" "),a("p",[e._v("The comments will not be in the resulting output. If you'd like the comments to show up. Just use html comments, and\nthey will be output.")]),e._v(" "),a("p",[e._v("Any comments that must contain "),a("code",[e._v("}}")]),e._v(" or other handlebars tokens should use the "),a("code",[e._v("{{!-- --}}")]),e._v(" syntax.")])]),a("ExamplePart",{attrs:{examplePage:"/examples/comments",show:"template"}}),e._v(" "),a("h2",{attrs:{id:"custom-helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-helpers"}},[e._v("#")]),e._v(" Custom Helpers")]),e._v(" "),a("p",[e._v("Handlebars helpers can be accessed from any context in a template. You can register a helper with the\nHandlebars.registerHelper method.")]),e._v(" "),a("Flex",[a("ExamplePart",{attrs:{examplePage:"/examples/helper-simple",show:"template"}}),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/helper-simple",show:"preparationScript"}})],1),e._v(" "),a("p",[e._v("Helpers receive the current context as the "),a("code",[e._v("this")]),e._v("-context of the function.")]),e._v(" "),a("Flex",[a("ExamplePart",{attrs:{examplePage:"/examples/helper-this-context",show:"template"}}),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/helper-this-context",show:"preparationScript"}})],1),e._v(" "),a("h2",{attrs:{id:"block-helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-helpers"}},[e._v("#")]),e._v(" Block Helpers")]),e._v(" "),a("p",[e._v("Block expressions allow you to define helpers that will invoke a section of your template with a different context than\nthe current. These block helpers are identified by a "),a("code",[e._v("#")]),e._v(" preceeding the helper name and require a matching closing\nmustache, "),a("code",[e._v("/")]),e._v(", of the same name. Let's consider a helper that will generate an HTML list:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/helper-block",show:"preparationScript"}}),e._v(" "),a("p",[e._v("The example creates a helper named "),a("code",[e._v("list")]),e._v(" to generate our HTML list. The helper receives the "),a("code",[e._v("people")]),e._v(" as its first\nparameter, and an "),a("code",[e._v("options")]),e._v(" hash as its second parameter. The options hash contains a property named "),a("code",[e._v("fn")]),e._v(", which you can\ninvoke with a context just as you would invoke a normal Handlebars template.")]),e._v(" "),a("p",[e._v("When executed, the template will render:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/helper-block",show:"output"}}),e._v(" "),a("p",[e._v("Block helpers have more features, such as the ability to create an "),a("code",[e._v("else")]),e._v(" section (used, for instance, by the built-in\n"),a("code",[e._v("if")]),e._v(" helper).")]),e._v(" "),a("p",[e._v("Since the contents of a block helper are escaped when you call "),a("code",[e._v("options.fn(context)")]),e._v(", Handlebars does not escape the\nresults of a block helper. If it did, inner content would be double-escaped!")]),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/block-helpers.html"}},[e._v("Learn More: Block Helpers")])],1),e._v(" "),a("h2",{attrs:{id:"html-escaping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-escaping"}},[e._v("#")]),e._v(" HTML Escaping")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("Because it was originally designed to generate HTML, Handlebars escapes values returned by a "),a("code",[e._v("{{expression}}")]),e._v('. If you\ndon\'t want Handlebars to escape a value, use the "triple-stash", '),a("code",[e._v("{{{")]),e._v(".")])]),a("ExamplePart",{attrs:{examplePage:"/examples/html-escaping",show:"template"}}),e._v(" "),a("p",[e._v("The special characters in the second line will be escaped:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/html-escaping",show:"output"}}),e._v(" "),a("p",[e._v("Handlebars will not escape a "),a("code",[e._v("Handlebars.SafeString")]),e._v(". If you write a helper that generates its own HTML, you will\nusually want to return a "),a("code",[e._v("new Handlebars.SafeString(result)")]),e._v(". In such a circumstance, you will want to manually escape\nparameters.")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/helper-safestring",show:"preparationScript"}}),e._v(" "),a("p",[e._v('This will escape the passed in parameters, but mark the response as safe, so Handlebars will not try to escape it even\nif the "triple-stash" is not used.')]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Handlebars does not escape JavaScript strings. Using Handlebars to generate JavaScript, such as inline event handlers,\ncould potentially lead to cross-site scripting vulnerabilities.")])]),e._v(" "),a("h2",{attrs:{id:"partials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partials"}},[e._v("#")]),e._v(" Partials")]),e._v(" "),a("p",[e._v("Handlebars partials allow for code reuse by creating shared templates. You can register a partial using the\n"),a("code",[e._v("registerPartial")]),e._v("-method:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/partials/register",show:"preparationScript"}}),e._v(" "),a("p",[e._v("The following template and input:")]),e._v(" "),a("Flex",[a("ExamplePart",{attrs:{examplePage:"/examples/partials/register",show:"template"}}),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/partials/register",show:"input"}})],1),e._v(" "),a("p",[e._v("will then provide the following result:")]),e._v(" "),a("ExamplePart",{attrs:{examplePage:"/examples/partials/register",show:"output"}}),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/partials.html"}},[e._v("Learn More: Partials")])],1),e._v(" "),a("h2",{attrs:{id:"built-in-helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-helpers"}},[e._v("#")]),e._v(" Built-In Helpers")]),e._v(" "),a("p",[e._v("Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.")]),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/guide/builtin-helpers.html"}},[e._v("Learn More: Built-In Helpers")])],1),e._v(" "),a("h2",{attrs:{id:"api-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[e._v("#")]),e._v(" API Reference")]),e._v(" "),a("p",[e._v("Handlebars offers a variety of APIs and utility methods for applications and helpers.")]),e._v(" "),a("p",[a("RouterLink",{staticClass:"button-link",attrs:{to:"/api-reference/"}},[e._v("Learn More: API Reference")])],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);