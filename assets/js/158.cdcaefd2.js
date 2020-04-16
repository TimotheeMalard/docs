(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{584:function(e,a,s){"use strict";s.r(a);var t=s(39),l=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[e._v("#")]),e._v(" 钩子")]),e._v(" "),s("p",[e._v("你可以在几个地方使用钩子挂接到 Handlebars 的函数调用。")]),e._v(" "),s("h2",{attrs:{id:"helpermissing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpermissing"}},[e._v("#")]),e._v(" helperMissing")]),e._v(" "),s("p",[e._v("当 Mustache 或表达式是如下情况时钩子会被调用：")]),e._v(" "),s("ul",[s("li",[e._v("Mustache 表达式不是一个已经注册的助手代码，"),s("strong",[e._v("并且")])]),e._v(" "),s("li",[e._v("不是当前上下文的计算属性。")])]),e._v(" "),s("p",[e._v("你可以通过注册 "),s("code",[e._v("helperMissing")]),e._v(" 助手代码为这些情况添加自定义处理：")]),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing.md",show:"template"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing.md",show:"preparationScript"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing.md",show:"output"}}),e._v(" "),s("p",[e._v("与任何自定义助手代码或块助手代码一样，该助手代码接收相同的参数和选项（"),s("code",[e._v("hash")]),e._v("，"),s("code",[e._v("name")]),e._v("等）。 "),s("code",[e._v("option.name")]),e._v(" 是被调用的助手\n代码的名称。")]),e._v(" "),s("h3",{attrs:{id:"默认行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认行为"}},[e._v("#")]),e._v(" 默认行为")]),e._v(" "),s("p",[e._v("如果没有参数传递给 Mustache，则默认行为是不执行任何操作并忽略整个表达式或代码块：")]),e._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing-default-no-param.md",show:"template"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing-default-no-param.md",show:"output"}})],1),e._v(" "),s("p",[e._v("如果有参数传递给 Mustache，则 Handlebars 将引发异常：")]),e._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing-default-param.md",show:"template"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-helper-missing-default-param.md",show:"error"}})],1),e._v(" "),s("h2",{attrs:{id:"blockhelpermissing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockhelpermissing"}},[e._v("#")]),e._v(" blockHelperMissing")]),e._v(" "),s("p",[e._v("遇到如下情况时，钩子将会被调用：")]),e._v(" "),s("ul",[s("li",[e._v("代码块表达式尝试调用未注册的助手代码，")]),e._v(" "),s("li",[e._v("但是这个助手代码的名称与当前计算上下文中的某个属性相同。")])]),e._v(" "),s("p",[e._v("你可以通过注册一个名为 "),s("code",[e._v("blockHelperMissing")]),e._v(" 的助手代码来处理这种情况。")]),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-block-helper-missing.md",show:"template"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-block-helper-missing.md",show:"preparationScript"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-block-helper-missing.md",show:"output"}}),e._v(" "),s("h3",{attrs:{id:"默认行为-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认行为-2"}},[e._v("#")]),e._v(" 默认行为")]),e._v(" "),s("p",[e._v("钩子将在当前上下文中使用已解析的属性值作为参数进行调用，并且将 "),s("code",[e._v("options.name")]),e._v(" 字段设置为属性的名称。")]),e._v(" "),s("p",[e._v("如果钩子没有被覆盖，则默认实现将模仿 Mustache 的行为：只调用代码块。")]),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-block-helper-missing-default.md",show:"template"}}),e._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/hook-block-helper-missing-default.md",show:"output"}})],1)}),[],!1,null,null,null);a.default=l.exports}}]);