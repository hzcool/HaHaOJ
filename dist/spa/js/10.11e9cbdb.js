(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{2940:function(t,e,i){"use strict";var a=i("87f0"),s=i.n(a);s.a},"39fb":function(t,e,i){t.exports=i.p+"img/logo1.c41279f1.svg"},"713b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",{staticStyle:{"min-width":"1400px"}},[a("div",{staticStyle:{"box-shadow":"0 5px 5px #888888"}},[a("div",{staticClass:"flex_between",staticStyle:{background:"#0073ff"}},[a("div",{staticStyle:{width:"22rem",padding:"0.3rem"}},[a("div",{staticClass:"flex_around"},[a("q-btn",{staticClass:"text-white",attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),a("img",{staticStyle:{width:"2.8rem",height:"2.8rem","border-radius":"2em"},attrs:{src:i("39fb")}}),a("span",{staticStyle:{"font-size":"1.6rem",color:"white"}},[t._v(" Happy Online Judge ")])],1)]),t.$store.state.user.is_login?a("div",{staticClass:"flex_center q-gutter-sm"},[a("q-btn",{attrs:{dense:"",flat:"",color:"white",round:"",icon:"email"},on:{click:function(e){return t.$router.push({name:"message"})}}},[t.$store.state.user.message_count?a("q-badge",{attrs:{color:"red",floating:""}},[t._v("\n            "+t._s(t.$store.state.user.message_count)+"\n          ")]):t._e(),a("q-tooltip",[t._v("私信")])],1),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"}},[t.$store.state.user.notification_count?a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            "+t._s(t.$store.state.user.notification_count)+"\n          ")]):t._e(),a("q-tooltip",[t._v("通知")])],1),a("q-chip",[a("q-avatar",{attrs:{size:"2.5rem"}},[a("img",{attrs:{src:t.$store.state.user.avatar}})]),a("q-btn-dropdown",{attrs:{color:"primary",label:t.$store.state.user.username,flat:"",dense:"","no-caps":""}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[a("router-link",{attrs:{to:{name:"userinfo",params:{username:t.$store.state.user.username}}}},[t._v(" 查看信息 ")])],1)],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.to_personal_center}},[a("q-item-section",[a("q-item-label",[a("router-link",{attrs:{to:"#"}},[t._v(" 修改信息 ")])],1)],1)],1)],1)],1)],1),a("q-btn",{attrs:{color:"purple",label:"退 出"},on:{click:t.logout}}),a("span",[t._v("   ")])],1):a("div",{staticClass:"flex_center q-gutter-sm"},[a("q-btn",{staticStyle:{background:"#FF0080",color:"white"},attrs:{label:"登 陆"},on:{click:function(e){return t.$router.push({name:"login"})}}}),a("q-btn",{attrs:{color:"purple",label:"注 册"},on:{click:function(e){return t.$router.push({name:"register"})}}}),a("span",[t._v("   ")])],1)]),a("div",{staticStyle:{background:"#0073ff","margin-top":"-0.1rem"}},[a("div",{staticStyle:{display:"flex"}},t._l(t.menuArr,(function(e,i){return a("div",{key:i,class:"flex_center menuHover "+t.activeClass(i),staticStyle:{width:"11rem",height:"3rem",color:"white",cursor:"default"},on:{click:function(e){return t.chooseMenuItem(i)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])]),a("div",{staticStyle:{display:"flex"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.left,expression:"left"}],staticClass:"flex_column bg-grey-1",staticStyle:{"border-right":"#eeeeee solid","min-height":"80rem",width:"60px","margin-top":"0.1rem"}},[a("div",{staticClass:"flex_center navHover",staticStyle:{width:"60px","margin-top":"0.5rem",height:"3rem"}},[a("Tooltip",{attrs:{content:"系统公告",placement:"right"}},[a("svg",{staticClass:"icon",attrs:{t:"1592978214280",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10575",width:"32",height:"32"}},[a("path",{attrs:{d:"M530.944 77.312c6.712889 0 13.141333 2.702222 17.863111 7.480889 4.750222 4.807111 7.395556 11.292444 7.395556 18.090667v818.232888a25.713778 25.713778 0 0 1-7.395556 18.090667 25.144889 25.144889 0 0 1-17.863111 7.480889 20.992 20.992 0 0 1-6.826667 0l-231.822222-226.304-6.286222-6.371556-7.850667-5.632a125.297778 125.297778 0 0 0-64.199111-17.379555H101.205333a25.429333 25.429333 0 0 1-25.258666-25.6V358.599111c0-14.108444 11.292444-25.571556 25.258666-25.571555h112.753778a125.297778 125.297778 0 0 0 64.199111-17.351112l7.850667-4.636444 6.314667-6.371556 231.537777-227.328a20.992 20.992 0 0 1 7.111111 0z m0-76.714667a97.991111 97.991111 0 0 0-50.545778 14.307556L240.241778 249.400889c-7.68 4.579556-16.384 7.054222-25.287111 7.168H101.205333c-55.836444 0-101.12 45.795556-101.12 102.257778v306.602666c0 27.107556 10.666667 53.134222 29.639111 72.305778a100.522667 100.522667 0 0 0 71.480889 29.952h112.753778c8.903111 0.113778 17.635556 2.56 25.287111 7.168l241.152 234.24c15.246222 9.272889 32.711111 14.222222 50.545778 14.307556 55.836444 0 101.12-45.795556 101.12-102.286223V102.883556C632.035556 46.364444 586.780444 0.568889 530.944 0.568889z m341.248 460.259556H745.813333a38.115556 38.115556 0 0 0-37.916444 38.371555 38.115556 38.115556 0 0 0 37.916444 38.343112h126.378667a38.115556 38.115556 0 0 0 37.944889-38.343112 38.115556 38.115556 0 0 0-37.944889-38.371555zM863.601778 173.226667c-6.542222 0.056889-12.999111 1.820444-18.688 5.12l-109.710222 63.914666c-14.933333 8.704-22.186667 26.453333-17.692445 43.292445 4.522667 16.810667 19.683556 28.444444 36.892445 28.302222 6.570667-0.056889 12.999111-1.820444 18.716444-5.12l109.710222-63.914667c14.933333-8.704 22.186667-26.453333 17.664-43.292444-4.494222-16.810667-19.655111-28.444444-36.892444-28.302222z m-109.198222 511.402666a37.973333 37.973333 0 0 0-36.892445 28.302223 38.542222 38.542222 0 0 0 17.692445 43.292444l109.710222 63.914667c5.688889 3.299556 12.145778 5.063111 18.688 5.12a37.973333 37.973333 0 0 0 36.892444-28.302223 38.542222 38.542222 0 0 0-17.664-43.292444l-109.710222-62.634667a38.087111 38.087111 0 0 0-18.716444-5.12v-1.28z","p-id":"10576",fill:"#1296db"}})])])],1),a("div",{staticClass:"flex_center navHover",staticStyle:{width:"60px",height:"3rem"},on:{click:function(e){return t.$router.push({name:"blogs"})}}},[a("Tooltip",{attrs:{content:"博 客",placement:"right"}},[a("svg",{staticClass:"icon",attrs:{t:"1592978625849",viewBox:"0 0 1025 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13803",width:"32",height:"32"}},[a("path",{attrs:{d:"M384 0l0 96c73.472 0 144.704 14.368 211.712 42.72 64.768 27.392 122.944 66.624 172.96 116.608s89.216 108.192 116.64 172.96c28.352 67.008 42.72 138.24 42.72 211.712l96 0c0-353.472-286.528-640-640-640z","p-id":"13804",fill:"#1296db"}}),a("path",{attrs:{d:"M384 192l0 96c94.016 0 182.432 36.608 248.896 103.104s103.104 154.88 103.104 248.896l96 0c0-247.424-200.576-448-448-448z","p-id":"13805",fill:"#1296db"}}),a("path",{attrs:{d:"M480 384l-64 64-224 64-192 416 25.376 25.376 232.8-232.8c-1.408-5.28-2.176-10.848-2.176-16.576 0-35.36 28.64-64 64-64s64 28.64 64 64-28.64 64-64 64c-5.728 0-11.296-0.768-16.576-2.176l-232.8 232.8 25.376 25.376 416-192 64-224 64-64-160-160z","p-id":"13806",fill:"#1296db"}})])])],1),a("div",{staticClass:"flex_center navHover",staticStyle:{width:"60px",height:"3rem"},on:{click:function(e){return t.$router.push({name:"discussions"})}}},[a("Tooltip",{attrs:{content:"讨论帖",placement:"right"}},[a("svg",{staticClass:"icon",attrs:{t:"1592978699634",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14628",width:"32",height:"32"}},[a("path",{attrs:{d:"M501.221053 695.242105c-43.115789 0-75.452632 32.336842-75.452632 75.452632v5.389474c0 37.726316 37.726316 70.063158 75.452632 70.063157h5.389473c37.726316 0 70.063158-32.336842 70.063158-75.452631v-5.389474c0-37.726316-32.336842-70.063158-75.452631-70.063158z",fill:"#1296db","p-id":"14629"}}),a("path",{attrs:{d:"M512 0C231.747368 0 0 231.747368 0 512S231.747368 1024 512 1024 1024 792.252632 1024 512 792.252632 0 512 0z m0 970.105263C258.694737 970.105263 53.894737 765.305263 53.894737 512S258.694737 53.894737 512 53.894737 970.105263 258.694737 970.105263 512 765.305263 970.105263 512 970.105263z",fill:"#1296db","p-id":"14630"}}),a("path",{attrs:{d:"M517.389474 199.410526c-70.063158 0-140.126316 32.336842-188.631579 91.621053l53.894737 53.894737c26.947368-37.726316 75.452632-59.284211 123.957894-64.673684h16.168421c43.115789 0 80.842105 43.115789 75.452632 86.231579 0 91.621053-161.684211 129.347368-140.126316 264.08421h86.231579c-16.168421-123.957895 150.905263-145.515789 150.905263-274.863158 0-97.010526-75.452632-156.294737-177.852631-156.294737z",fill:"#1296db","p-id":"14631"}})])])],1),a("div",{staticClass:"flex_center navHover",staticStyle:{width:"60px",height:"3rem"},on:{click:t.to_personal_center}},[a("Tooltip",{attrs:{content:"个人首页",placement:"right"}},[a("svg",{staticClass:"icon",attrs:{t:"1592979214986",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15486",width:"32",height:"32"}},[a("path",{attrs:{d:"M1009.158986 66.316476L889.662378 943.696842c-0.019961 0-0.039922 0.009981-0.059883 0.009981a28.937481 28.937481 0 0 1-40.640624 25.41037l-0.029941 0.029942-325.594074-137.960546-64.474074 132.750721a28.904546 28.904546 0 0 1-54.475603-0.179649L324.865497 787.461988l39.810246-45.70074L796.913528 242.219914 225.66924 705.052943 21.37625 618.482027c0.03094-0.089825 0.058885-0.179649 0.088826-0.269473a29.867665 29.867665 0 0 1 0.424172-54.952671L966.681949 33.494581c0.059883 0.077848 0.109786 0.152702 0.169669 0.23055a28.904546 28.904546 0 0 1 42.307368 32.591345z",fill:"#d81e06","p-id":"15487"}})])])],1),t.$store.state.user.is_admin?a("div",{staticClass:"flex_center navHover",staticStyle:{width:"60px",height:"3rem"},on:{click:function(e){return t.$router.push({name:"admin"})}}},[a("Tooltip",{attrs:{content:"后台管理",placement:"right"}},[a("svg",{staticClass:"icon",attrs:{t:"1594051958221",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1328",width:"32",height:"32"}},[a("path",{attrs:{d:"M819.182933 955.716267a34.1504 34.1504 0 0 1 0 68.283733H204.8a34.1504 34.1504 0 0 1 0-68.283733H819.2z m34.133334-955.716267C947.5072 0 1024 71.406933 1024 159.232v568.951467c-0.136533 87.842133-76.629333 159.232-170.683733 159.232H170.666667C76.6464 887.432533 0 816.042667 0 728.200533V159.249067C0 71.406933 76.629333 0 170.683733 0H853.333333z m0 68.283733H170.666667c-56.507733 0-102.4 40.789333-102.4 90.965334v568.9344c0 50.158933 45.892267 90.965333 102.4 90.965333h682.615466c56.5248 0 102.417067-40.8064 102.417067-90.965333V159.249067C955.733333 109.090133 909.824 68.266667 853.333333 68.266667zM578.816 310.442667l6.2464 3.584c11.52 7.0144 15.633067 22.528 9.233067 34.8672l-98.986667 184.098133c-5.9904 11.52-19.182933 16.1792-30.378667 11.144533l-2.7136-1.4336h0.068267l-6.314667-3.584c-11.52-7.031467-15.633067-22.528-9.233066-34.884266l98.986666-184.081067c6.724267-12.202667 21.4016-16.520533 33.092267-9.728z m-298.103467 4.676266a23.944533 23.944533 0 0 1 33.6384-1.877333l2.286934 2.218667c9.079467 9.898667 9.591467 25.463467 1.604266 36.010666l-1.8432 2.184534L248.32 426.666667l68.5568 73.045333a28.672 28.672 0 0 1-0.034133 38.4512c-9.216 9.898667-23.773867 10.5472-33.6896 1.9456l-2.048-1.979733-85.896534-91.767467a29.781333 29.781333 0 0 1-1.860266-37.137067l1.877333-2.269866 85.504-91.869867z m426.461867 0.034134a23.944533 23.944533 0 0 1 33.672533-1.928534l2.048 1.979734 85.879467 92.3136c4.949333 4.898133 7.68 11.8784 7.458133 19.114666 0.1024 6.365867-1.877333 12.509867-5.495466 17.442134l-1.962667 2.3552-85.879467 91.648c-9.2672 10.052267-23.671467 10.717867-33.6896 2.013866l-2.218666-2.184533a28.535467 28.535467 0 0 1-1.6896-35.976533l1.8432-2.184534 68.0448-73.1136-68.0448-73.0112a28.689067 28.689067 0 0 1 0.034133-38.468266z",fill:"#d4237a","p-id":"1329"}})])])],1):t._e()]),a("div",{staticStyle:{width:"100%","align-items":"flex-start","min-height":"80rem"}},[a("router-view")],1)]),a("div",{staticClass:"bg-grey-8 text-white",staticStyle:{"text-align":"center"}},[a("q-toolbar",[a("q-toolbar-title",[t._v("\n      "+t._s(t.date)+"\n    ")])],1)],1)]):t._e()},s=[],n=(i("b54a"),{data:function(){return{left:!0,miniState:!0,gg:!0,loaded:!1,menuArr:[{name:"首页",link:"home",active:!0},{name:"题库",link:"problemset",active:!1},{name:"比赛",link:"contests",active:!1},{name:"用户",link:"users",active:!1},{name:"测评记录",link:"submissions",active:!1},{name:"网站说明",link:"describe",active:!1}],activeIndex:0,date:new Date}},computed:{activeClass:function(t){var e=this;return function(t){return e.menuArr[t].active?"menuActive":""}}},methods:{logout:function(){var t=this;this.$req.get("logout").then((function(e){void 0==e.errno&&(t.$store.commit("logout"),t.$notify("success","退出成功"),t.$router.push({name:"home"}))}))},to_personal_center:function(){this.$store.state.user.is_login?this.$router.push({path:"/personalCenter"}):(this.$notify("error","请先登陆"),this.$router.push({name:"login"}))},chooseMenuItem:function(t){this.menuArr[this.activeIndex].active=!1,this.menuArr[t].active=!0,this.activeIndex=t,this.$router.push({name:this.menuArr[t].link})}},mounted:function(){var t=this;this.$store.state.user.is_login?this.loaded=!0:this.$req.autologin().then((function(){t.loaded=!0}));var e=this;this.timer=setInterval((function(){e.date=new Date}),1e3),setTimeout((function(){t.gg=!1}),500)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}}),r=n,o=(i("2940"),i("4023")),c=i("9c40"),l=i("58a8"),u=i("05c0"),d=i("b047"),h=i("cb32"),m=i("f20b"),p=i("1c1c"),v=i("66e5"),f=i("4074"),g=i("0170"),w=i("65c6"),b=i("6ac5"),_=i("7f67"),x=i("b2a3"),y=i.n(x),C=Object(o["a"])(r,a,s,!1,null,"5404ebee",null);e["default"]=C.exports;y()(C,"components",{QBtn:c["a"],QBadge:l["a"],QTooltip:u["a"],QChip:d["a"],QAvatar:h["a"],QBtnDropdown:m["a"],QList:p["a"],QItem:v["a"],QItemSection:f["a"],QItemLabel:g["a"],QToolbar:w["a"],QToolbarTitle:b["a"]}),y()(C,"directives",{ClosePopup:_["a"]})},"87f0":function(t,e,i){}}]);