(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(n,e,t){},435:function(n,e,t){"use strict";var a=t(342);t.n(a).a},445:function(n,e,t){"use strict";t.r(e);var a=t(428),r=t.n(a),s=(t(430),t(431),t(434),{components:{CodeMirror:r.a},props:{value:{type:String,default:""},cssClass:{type:String,default:""},language:{type:String,required:!0}},data:function(){return{frozenValue:null}},computed:{codeMirrorOptions:function(){return{mode:i[this.language],theme:"base16-dark",lineWrapping:!0}}},methods:{onCodeChanged:function(n){this.$emit("input",n)}}}),i={handlebars:{name:"handlebars"},json:{name:"javascript"},javascript:{name:"javascript"},html:{name:"xml",html:!0}},o=s,l=(t(435),t(39)),u=Object(l.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("ClientOnly",[e("div",{class:this.cssClass},[e("code-mirror",{attrs:{value:this.value,options:this.codeMirrorOptions},on:{change:this.onCodeChanged}})],1)])}),[],!1,null,null,null);e.default=u.exports}}]);