(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"4ba4":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.clarifications.length>0?i("div",{staticClass:"q-ma-md"},[i("div",{staticClass:"q-mt-md text-h6 text-black"},[t._v(" 通告 ")]),t._l(t.clarifications,(function(a,s){return i("q-card",{key:s,staticClass:"q-mt-lg q-pa-md",attrs:{flat:"",bordered:""}},[i("div",{staticClass:"row"},[i("span",{staticClass:"text-h6 text-red col-6"},[t._v(t._s(a.head))]),i("span",{staticClass:"text-orange"},[t._v(" "+t._s(a.created_at)+" ")])]),i("div",{staticClass:"q-pl-md"},[i("div",{staticClass:"q-mt-md text-black",staticStyle:{"font-size":"18px"},domProps:{innerHTML:t._s(a.content_html)}})])])}))],2):i("div",{staticClass:"q-ma-md q-mt-md text-h6 text-black"},[t._v("\n     暂无公告\n  ")]),i("div",{staticClass:"q-ma-md"},[i("q-separator",{staticClass:"q-mt-md"}),i("div",{staticClass:"row q-mt-md"},[t._m(0),i("Input",{staticStyle:{width:"300px"},model:{value:t.clarify.head,callback:function(a){t.$set(t.clarify,"head",a)},expression:"clarify.head"}})],1),i("div",{staticClass:"row q-mt-md"},[t._m(1),i("mavon-editor",{ref:"clarify",staticStyle:{width:"1500px"},model:{value:t.clarify.content,callback:function(a){t.$set(t.clarify,"content",a)},expression:"clarify.content"}})],1),i("Button",{staticClass:"q-mt-md",attrs:{type:"primary"},on:{click:t.addClarification}},[t._v(" 添加通告 ")])],1)])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{width:"100px"}},[i("div",{staticClass:"text-red",staticStyle:{"font-size":"18px"}},[t._v("标题")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{width:"100px"}},[i("div",{staticClass:"text-red",staticStyle:{"font-size":"18px"}},[t._v("内容")])])}],c={name:"clarifications",data:function(){return{contest_id:0,clarify:{head:"",created_at:"",content:"",content_html:""},clarifications:[]}},methods:{addClarification:function(){var t=this;if(this.clarify.head=this.clarify.head.trim(),""!=this.clarify.head){this.clarify.created_at=(new Date).Format("yyyy-MM-dd HH:mm:ss"),this.clarify.content_html=this.$refs.clarify.d_render;var a=new FormData;a.set("id",this.contest_id),a.set("clarification",JSON.stringify(this.clarify)),this.$req.post("updateClarification",a).then((function(a){void 0==a.errno&&(t.$notify("success","发布成功"),t.clarifications.unshift(JSON.parse(JSON.stringify(t.clarify))),t.clarify.head=t.clarify.content="")}))}else this.$notify("error","标题不能为空")},updateClarifications:function(){}},mounted:function(){var t=this;void 0==this.$route.params.id?this.$router.push({name:"contestManage"}):(this.contest_id=this.$route.params.id,this.$req.get("getClarification",{id:this.contest_id}).then((function(a){if(void 0==a.errno){t.clarifications=a.data;for(var i=0;i<t.clarifications.length;i++)t.clarifications[i]=JSON.parse(t.clarifications[i])}})))}},n=c,r=i("4023"),l=i("f09f"),o=i("eb85"),d=i("b2a3"),f=i.n(d),h=Object(r["a"])(n,s,e,!1,null,"8abc9570",null);a["default"]=h.exports;f()(h,"components",{QCard:l["a"],QSeparator:o["a"]})}}]);