(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1PdU":function(e,t,r){"use strict";r.r(t);var s={metaInfo:{title:"Login"},layout:r("WKAJ").a,data:function(){return{form:{email:"",password:"",remember:null}}},methods:{login:function(){this.$inertia.post(this.$route("laradash.login"),this.form)}}},a=r("KHd+"),l=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"rounded-md bg-white shadow-xl",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("div",{staticClass:"px-10 py-12"},[e._m(0),e._v(" "),r("div",{staticClass:"mt-10"},[r("laradash-input",{attrs:{errors:e.$page.errors.email,type:"email",label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("div",{staticClass:"mt-5"},[r("laradash-input",{attrs:{errors:e.$page.errors.password,type:"password",label:"Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("label",{staticClass:"mt-6 select-none flex items-center",attrs:{for:"remember"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.remember,expression:"form.remember"}],staticClass:"mr-1",attrs:{id:"remember",type:"checkbox"},domProps:{checked:Array.isArray(e.form.remember)?e._i(e.form.remember,null)>-1:e.form.remember},on:{change:function(t){var r=e.form.remember,s=t.target,a=!!s.checked;if(Array.isArray(r)){var l=e._i(r,null);s.checked?l<0&&e.$set(e.form,"remember",r.concat([null])):l>-1&&e.$set(e.form,"remember",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.form,"remember",a)}}}),e._v(" "),r("span",{staticClass:"text-sm"},[e._v("Remember Me")])])]),e._v(" "),r("div",{staticClass:"rounded-md flex items-center justify-between h-20 px-10 bg-gray-100"},[r("inertia-link",{staticClass:"text-gray-700 hover:underline",attrs:{href:e.$route("laradash.password.request")}},[e._v("\n            Forgot password?\n        ")]),e._v(" "),r("laradash-button",{attrs:{type:"submit"}},[e._v("\n            Login\n        ")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",{staticClass:"text-center font-bold text-3xl text-gray-700"},[this._v("\n                Welcome back!\n            ")])])}],!1,null,null,null);t.default=l.exports},WKAJ:function(e,t,r){"use strict";var s={},a=r("KHd+"),l=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"h-screen w-full flex flex-col items-center justify-center bg-indigo-600"},[t("div",{staticClass:"w-full max-w-md"},[t("main",[this._t("default")],2)])])}),[],!1,null,null,null);t.a=l.exports}}]);
//# sourceMappingURL=2.js.map?id=c53b17c77a0aebe91047