(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b70f97"],{"057f":function(t,e,n){var s=n("fc6a"),i=n("241c").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==o.call(t)?a(t):i(s(t))}},"3ca3":function(t,e,n){"use strict";var s=n("6547").charAt,i=n("69f3"),o=n("7dd0"),r="String Iterator",a=i.set,c=i.getterFor(r);o(String,"String",(function(t){a(this,{type:r,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=s(n,i),e.index+=t.length,{value:t,done:!1})}))},"4de4":function(t,e,n){"use strict";var s=n("23e7"),i=n("b727").filter,o=n("1dde"),r=o("filter");s({target:"Array",proto:!0,forced:!r},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"6e78":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page_index THEME"},[s("el-container",[s("el-aside",{attrs:{width:t.isCollapse?"64px":"200px"}},[s("el-button",{staticClass:"menubuttom",class:t.isCollapse?"menubuttom menubuttomss":"menubuttom",attrs:{icon:"el-icon-menu"},on:{click:t.handleSwitch},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[t._v("开关")]),s("div",{staticClass:"mainlogo"},[s("span",{staticClass:"logo-mini",attrs:{hidden:!t.isCollapse}},[s("img",{attrs:{src:n("cf05"),alt:""}})]),s("img",{attrs:{src:n("cf05"),alt:"",hidden:t.isCollapse}})]),s("div",{staticClass:"el_menu_wrap"},[s("div",{staticClass:"state",style:t.isCollapse?"margin-bottom:0":""},[s("div",{class:t.isCollapse?"imglogo":""},[s("img",{attrs:{src:n("cf05"),alt:""}})]),s("div",{style:t.isCollapse?"display:none":""},[s("p",{staticClass:"username",domProps:{textContent:t._s(this.C.user.username)}}),s("span",{staticClass:"onlines"},[s("i",{staticClass:"zt"}),s("i",[t._v(" Online")])])])]),s("el-menu",{attrs:{"default-openeds":t.default_openeds_array,"unique-opened":"",collapse:t.isCollapse,"collapse-transition":"","default-active":t.menuIndex},on:{open:t.handleOpen}},[t._l(this.$router.options.routes,(function(e){return[t._l(e.children,(function(e,n){return[e.nav1?s("div",{key:"group_"+n,staticClass:"el-menu-group",attrs:{index:e.name},domProps:{textContent:t._s(e.title)}}):t._e(),e.children?s("el-submenu",{key:"sub_"+n,attrs:{index:e.name}},[s("template",{slot:"title"},[s("i",{class:e.meta.icon}),s("span",{domProps:{textContent:t._s(e.meta.title)}})]),t._l(e.children,(function(e,n){return s("el-menu-item-group",{key:n},[s("el-menu-item",{attrs:{index:e.name},domProps:{textContent:t._s(e.meta.title)},on:{click:function(n){return t.gotoPage(e)}}})],1)}))],2):s("el-menu-item",{key:"sub_"+n,attrs:{index:e.name},on:{click:function(n){return t.gotoPage(e)}}},[s("i",{class:e.meta.icon}),s("span",{attrs:{slot:"title"},domProps:{textContent:t._s(e.meta.title)},slot:"title"})])]}))]}))],2)],1)],1),s("el-container",[s("el-header",{staticStyle:{"text-align":"right","font-size":"12px",display:"flex"}},[s("el-tabs",{staticStyle:{flex:"1",overflow:"hidden"},attrs:{type:"card",closable:""},on:{"tab-remove":t.removeTab,"tab-click":t.clickTab},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,(function(t){return s("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}})})),1),s("MessageTip"),s("el-dropdown",[s("div",{staticClass:"userinfo "},[s("img",{attrs:{src:n("cf05"),alt:""}}),s("span",{domProps:{textContent:t._s(this.C.user.username)}})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("div",{staticClass:"loginsta"},[s("img",{attrs:{src:n("cf05"),alt:""}}),s("p",[t._v("username")]),s("p",[t._v("department")]),s("p",[t._v("some info")])]),s("div",{staticClass:"loutb"},[s("changePas"),s("el-button",{on:{click:t.onLogout}},[t._v("log out")])],1)])],1)],1),s("el-main",[s("router-view"),s("el-footer",{staticClass:"main-footer"},[s("div",{},[t._v("Copyright © 2020 All rights reserved.")]),s("div",{staticClass:"right"},[t._v("Version 4.0.0")])])],1)],1)],1)],1)},i=[];n("4de4"),n("b0c0"),n("159b"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var r=n("2b0e"),a={LOGIN:1,HEART:2,SEND_MSG:3,MSG_COUNT:4},c={get C(){return r["default"].prototype.C},get SOCKET_URL(){return r["default"].prototype.SOCKET_URL},connect:function(t){this.log_send("connecting");var e=this;this.connected=this.logined=!1,this.isFirst=!0,this.winAlert=null,t||(this.count=0,this.timeRe=setTimeout(this.reconnection.bind(this),2e4)),this.MAX=5,this.isReconnect=t,this.socket=new WebSocket(this.SOCKET_URL),this.socket.onclose=this.connect_close.bind(this),this.socket.onopen=this.connect_result.bind(this),this.socket.onerror=this.connect_error.bind(this),this.socket.onmessage=function(t){"xxx"===t.data?e.close():e.on_msg(t.data)},console.log("this.socket",this.socket)},send:function(t){this.connected&&this.socket.send(JSON.stringify(t))},send_heart:function(){this.send({cmd:a.HEART,uid:this.C.user.user_id,token:this.C.user.token}),this.log_send("hearting")},connect_result:function(){this.log_get("connect success"),this.connected=!0,this.login()},connect_error:function(t){this.C.tip("Message service connection error","error"),this.log_get("Server connection error",t),this.logined=!1},connect_close:function(t){this.C.tip("Message service connection lost","error"),this.log_get("Server closed",t),this.logined=!1,(this.connected||this.isReconnect)&&this.reconnection()},close:function(){this.socket&&(this.connected=this.logined=!1,this.socket.onclose=null,this.socket.onopen=null,this.socket.onerror=null,this.socket.onmessage=null,this.C.tip("Message service connection lost","error"),this.log_send("closed"),clearTimeout(this.timeRe),clearInterval(this.heart),this.socket.close(),this.socket=null)},reconnection:function(){this.count=this.count+1,console.log("reconnection...【"+this.count+"】"),this.count>=this.MAX||this.logined?(this.count>=this.MAX&&!this.logined&&clearInterval(this.heart),clearTimeout(this.timeRe)):(this.connected=this.logined=!1,this.connect(!0),clearTimeout(this.timeRe),this.timeRe=setTimeout(this.reconnection.bind(this),2e4))},login:function(){this.logined||(this.user_id=this.C.user.user_id,this.send({cmd:a.LOGIN,uid:this.user_id,token:this.C.user.token,user_acc:this.C.user.username,acc_type:this.C.user.acc_type}),this.log_send("login",this.user_id,this.C.user.token))},login_result:function(t){this.C.tip("Message service connection success","success"),this.log_get("login",t),this.logined=!0,this.count=0,clearTimeout(this.timeRe),this.heart&&clearInterval(this.heart),this.heart=setInterval(this.send_heart.bind(this),1e4)},sendMsg:function(t,e,n){this.logined?(this.send({cmd:a.SEND_MSG,uid:this.user_id,token:this.C.user.token,user_acc:this.C.user.username,acc_type:this.C.user.acc_type,to:t,title:e,content:n}),this.log_send("message sending",t,e)):this.C.alert("Message service connection lost")},on_msg:function(t){"object"!==o(t)&&(t=JSON.parse(t)),this.formatMsg(t)},formatMsg:function(t){switch(t.cmd){case a.LOGIN:1===t.status?this.login_result():this.close();break;case a.SEND_MSG:window.eventHub.$emit("MessageTip",t);break;case a.MSG_COUNT:window.eventHub.$emit("MessageCount",t);break;default:this.log_get("unknown message",t);break}},log_send:function(t,e){var n=this.C.dateFormat(new Date);console.log("%c[send]"+t,"color:blue",e||"",n)},log_get:function(t,e){var n=this.C.dateFormat(new Date);console.log("%c[received]"+t,"color:green",e||"",n)}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},u=[],d={},h=d,f=n("2877"),p=Object(f["a"])(h,l,u,!1,null,null,null),g=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[n("el-button",{on:{click:function(e){t.dialogVisible=!0}}},[t._v("修改密码")]),n("el-dialog",{attrs:{title:"修改密码",visible:t.dialogVisible,width:"35%","before-close":t.handleClose,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"lis"},[n("span",[t._v("账号：")]),n("el-input",{attrs:{disabled:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("div",{staticClass:"lis"},[n("span",[t._v("密码设置：")]),n("el-input",{attrs:{"show-password":"",type:"password"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}})],1),n("div",{staticClass:"lis"},[n("span",[t._v("确认密码：")]),n("el-input",{attrs:{"show-password":"",type:"password"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1),n("div",{staticClass:"errorMsg",domProps:{textContent:t._s(t.errorMsg)}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.onChangePassword}},[t._v("确 定")])],1)])],1)},m=[],v={components:{},name:"changePass",data:function(){return{account:this.C.user.username,user_id:this.C.user.user_id,password1:"",password2:"",errorMsg:"",dialogVisible:!1}},methods:{onChangePassword:function(){var t=this,e=this;e.password1===e.password2?e.password2?/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(e.password2)?(this.C.showLoading("请求中"),this.C.httpSend(this.HTTP_HOST_LOT+"/util/change_ps",{password:e.password2},(function(n){e.C.hideLoading(),0===n&&(e.dialogVisible=!1,t.C.alert("操作成功"))}),"post")):e.errorMsg="密码必须为6~12位字母和数字组合！\n":e.errorMsg="密码不能为空!":e.errorMsg="两次密码不一致!"},handleClose:function(t){t()}}},y=v,_=(n("f562"),Object(f["a"])(y,b,m,!1,null,null,null)),C=_.exports,w={components:{MessageTip:g,changePas:C},name:"index",data:function(){return{isCollapse:!1,editableTabsValue:"",editableTabs:[],menuIndex:"",default_openeds_array:[]}},created:function(){},destroyed:function(){c.close()},mounted:function(){this.$nextTick(this.resizeMenu),window.onresize=this.resizeMenu,this.loadTab()},watch:{$route:{handler:function(){this.setSelectByRoute()},immediate:!0}},computed:{},methods:{onLogout:function(){this.$router.push("/")},addTab:function(t){var e=-1,n=this.editableTabs;n.forEach((function(n,s){if(n.name===t.name)return e=s,!1})),e>-1?this.editableTabsValue=t.name:(this.editableTabs.push({title:t.meta.title,name:t.name,content:t}),this.editableTabsValue=t.name,this.saveTab())},removeTab:function(t){var e,n=this.editableTabs,s=this.editableTabsValue;n.length<=1||(s===t&&(n.forEach((function(i,o){i.name===t&&(e=n[o+1]||n[o-1],e&&(s=e.name))})),console.log("removeTab",s,e,JSON.parse(JSON.stringify(e))),this.gotoPage(JSON.parse(JSON.stringify(e)).content)),this.editableTabsValue=s,this.editableTabs=n.filter((function(e){return e.name!==t})),this.saveTab())},clickTab:function(t){var e=this;console.log("clickTab",t);var n=this.editableTabs;n.forEach((function(n){n.name===t.name&&e.gotoPage(JSON.parse(JSON.stringify(n)).content)}))},gotoPage:function(t){t.name!==this.$route.name&&(this.menuIndex=t.name,this.$router.push(t.path),this.addTab(t))},handleSwitch:function(){this.isCollapse=!this.isCollapse},handleOpen:function(t){this.default_openeds_array.push(t)},saveTab:function(){localStorage.setItem("tabs_save_"+this.C.user.user_id,JSON.stringify(this.editableTabs))},loadTab:function(){var t=localStorage.getItem("tabs_save_"+this.C.user.user_id);t?(this.editableTabs=JSON.parse(t),this.setSelectByRoute()):this.gotoPage({name:"dashboard_menu"})},setSelectByRoute:function(){this.menuIndex=this.$route.name,this.editableTabsValue=this.$route.name,console.log("setSelectByRoute",this.menuIndex)},resizeMenu:function(){document.body.clientWidth<1200?this.isCollapse=!0:this.isCollapse=!1}}},S=w,k=Object(f["a"])(S,s,i,!1,null,null,null);e["default"]=k.exports},"746f":function(t,e,n){var s=n("428f"),i=n("5135"),o=n("e538"),r=n("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});i(e,t)||r(e,t,{value:o.f(t)})}},a4d3:function(t,e,n){"use strict";var s=n("23e7"),i=n("da84"),o=n("d066"),r=n("c430"),a=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),d=n("5135"),h=n("e8b5"),f=n("861d"),p=n("825a"),g=n("7b0b"),b=n("fc6a"),m=n("c04e"),v=n("5c6c"),y=n("7c73"),_=n("df75"),C=n("241c"),w=n("057f"),S=n("7418"),k=n("06cf"),T=n("9bf2"),O=n("d1e7"),x=n("9112"),M=n("6eeb"),P=n("5692"),N=n("f772"),E=n("d012"),$=n("90e3"),R=n("b622"),I=n("e538"),V=n("746f"),j=n("d44e"),J=n("69f3"),A=n("b727").forEach,L=N("hidden"),z="Symbol",G="prototype",F=R("toPrimitive"),H=J.set,D=J.getterFor(z),U=Object[G],B=i.Symbol,K=o("JSON","stringify"),W=k.f,X=T.f,Z=w.f,q=O.f,Q=P("symbols"),Y=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),nt=P("wks"),st=i.QObject,it=!st||!st[G]||!st[G].findChild,ot=a&&u((function(){return 7!=y(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var s=W(U,e);s&&delete U[e],X(t,e,n),s&&t!==U&&X(U,e,s)}:X,rt=function(t,e){var n=Q[t]=y(B[G]);return H(n,{type:z,tag:t,description:e}),a||(n.description=e),n},at=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,n){t===U&&ct(Y,e,n),p(t);var s=m(e,!0);return p(n),d(Q,s)?(n.enumerable?(d(t,L)&&t[L][s]&&(t[L][s]=!1),n=y(n,{enumerable:v(0,!1)})):(d(t,L)||X(t,L,v(1,{})),t[L][s]=!0),ot(t,s,n)):X(t,s,n)},lt=function(t,e){p(t);var n=b(e),s=_(n).concat(pt(n));return A(s,(function(e){a&&!dt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=m(t,!0),n=q.call(this,e);return!(this===U&&d(Q,e)&&!d(Y,e))&&(!(n||!d(this,e)||!d(Q,e)||d(this,L)&&this[L][e])||n)},ht=function(t,e){var n=b(t),s=m(e,!0);if(n!==U||!d(Q,s)||d(Y,s)){var i=W(n,s);return!i||!d(Q,s)||d(n,L)&&n[L][s]||(i.enumerable=!0),i}},ft=function(t){var e=Z(b(t)),n=[];return A(e,(function(t){d(Q,t)||d(E,t)||n.push(t)})),n},pt=function(t){var e=t===U,n=Z(e?Y:b(t)),s=[];return A(n,(function(t){!d(Q,t)||e&&!d(U,t)||s.push(Q[t])})),s};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===U&&n.call(Y,t),d(this,L)&&d(this[L],e)&&(this[L][e]=!1),ot(this,e,v(1,t))};return a&&it&&ot(U,e,{configurable:!0,set:n}),rt(e,t)},M(B[G],"toString",(function(){return D(this).tag})),M(B,"withoutSetter",(function(t){return rt($(t),t)})),O.f=dt,T.f=ct,k.f=ht,C.f=w.f=ft,S.f=pt,I.f=function(t){return rt(R(t),t)},a&&(X(B[G],"description",{configurable:!0,get:function(){return D(this).description}}),r||M(U,"propertyIsEnumerable",dt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),A(_(nt),(function(t){V(t)})),s({target:z,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=B(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ht}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),s({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),K){var gt=!c||u((function(){var t=B();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));s({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var s,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(s=e,(f(e)||void 0!==t)&&!at(t))return h(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!at(e))return e}),i[1]=e,K.apply(null,i)}})}B[G][F]||x(B[G],F,B[G].valueOf),j(B,z),E[L]=!0},b0c0:function(t,e,n){var s=n("83ab"),i=n("9bf2").f,o=Function.prototype,r=o.toString,a=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d28b:function(t,e,n){var s=n("746f");s("iterator")},ddb0:function(t,e,n){var s=n("da84"),i=n("fdbc"),o=n("e260"),r=n("9112"),a=n("b622"),c=a("iterator"),l=a("toStringTag"),u=o.values;for(var d in i){var h=s[d],f=h&&h.prototype;if(f){if(f[c]!==u)try{r(f,c,u)}catch(g){f[c]=u}if(f[l]||r(f,l,d),i[d])for(var p in o)if(f[p]!==o[p])try{r(f,p,o[p])}catch(g){f[p]=o[p]}}}},e01a:function(t,e,n){"use strict";var s=n("23e7"),i=n("83ab"),o=n("da84"),r=n("5135"),a=n("861d"),c=n("9bf2").f,l=n("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(h,u);var f=h.prototype=u.prototype;f.constructor=h;var p=f.toString,g="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(r(d,t))return"";var n=g?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),s({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var s=n("b622");e.f=s},f562:function(t,e,n){"use strict";n("f919")},f919:function(t,e,n){}}]);
//# sourceMappingURL=chunk-76b70f97.ed549dfc.js.map