webpackJsonp([12],{"/61n":function(t,e){},NHnr:function(t,e,n){"use strict";function i(t){n("jame")}function s(t){n("o6p1")}function a(t){n("gFFe")}function o(t){n("/61n")}function r(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:ne,params:t},e)}function u(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Qt,params:t},e)}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Xt,params:t},e)}function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Zt,params:t},e)}function d(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:zt,params:t},e)}function h(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Gt,params:t},e)}function m(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Jt,params:t},e)}function p(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:Kt,params:t},e)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="";return n=t.type?Yt:te,se({url:n,params:t},e)}function v(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se({url:ee,params:t},e)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return se({url:ie,params:t},e)}Object.defineProperty(e,"__esModule",{value:!0});var w={};n.d(w,"precheck",function(){return r}),n.d(w,"create",function(){return u}),n.d(w,"getReminderList",function(){return l}),n.d(w,"getReminderDetail",function(){return c}),n.d(w,"getEmails",function(){return d}),n.d(w,"getAttach",function(){return h}),n.d(w,"reToReminder",function(){return m}),n.d(w,"getStaffsOrDepartments",function(){return p}),n.d(w,"sendMail",function(){return f}),n.d(w,"register",function(){return v}),n.d(w,"getWxConfig",function(){return g});var b=n("7+uW"),_=n("NYxO"),x=n("mtWM"),S=n.n(x),y=n("v5o6"),$=n.n(y),C=n("Dd8w"),I=n.n(C),T=n("piuB"),k=(T.b,String,{mounted:function(){},name:"tabbar",mixins:[T.b],props:{iconClass:String}}),V=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},L=[],B={render:V,staticRenderFns:L},N=B,O=n("VU/8"),M=i,P=O(k,N,!1,M,null,null),R=P.exports,A=(String,Number,{name:"badge",props:{text:[String,Number]}}),j=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},D=[],E={render:j,staticRenderFns:D},F=E,U=n("VU/8"),W=s,q=U(A,F,!1,W,null,null),H=q.exports,Q=(T.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:H},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[T.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},Z=[],z={render:X,staticRenderFns:Z},G=z,J=n("VU/8"),K=J(Q,G,!1,null,null,null),Y=K.exports,tt=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},nt=[],it={render:et,staticRenderFns:nt},st=it,at=n("VU/8"),ot=a,rt=at(tt,st,!1,ot,null,null),ut=rt.exports,lt=n("63CM"),ct=n.n(lt),dt=n("17Ff"),ht=n.n(dt),mt=(ct.a,I()({},Object(_.b)(["isLoading","isTabShow","isVis"]),{isShow:function(){return"Register"!==this.$route.name&&"Error"!==this.$route.name&&"RedirectPage"!==this.$route.name},isCreate:function(){return"Create"===this.$route.name},isHandle:function(){return"TodoList"===this.$route.name||"Detail"===this.$route.name&&"todo"===this.$route.query.type},isQuery:function(){return"QueryList"===this.$route.name||"Detail"===this.$route.name&&"todo"!==this.$route.query.type}}),{components:{Loading:ut,Tabbar:R,TabbarItem:Y},directives:{TransferDom:ct.a},name:"app",computed:I()({},Object(_.b)(["isLoading","isTabShow","isVis"]),{isShow:function(){return"Register"!==this.$route.name&&"Error"!==this.$route.name&&"RedirectPage"!==this.$route.name},isCreate:function(){return"Create"===this.$route.name},isHandle:function(){return"TodoList"===this.$route.name||"Detail"===this.$route.name&&"todo"===this.$route.query.type},isQuery:function(){return"QueryList"===this.$route.name||"Detail"===this.$route.name&&"todo"!==this.$route.query.type}}),data:function(){return{rooturl:window.location.origin+window.location.pathname,appId:"",timestamp:"",noncestr:"",signature:""}},watch:{$route:function(t,e){this.$store.dispatch("setVisible",!1),this.shareInit()}},created:function(){this.$store.dispatch("setVisible",!1)},mounted:function(){var t=this;this.publicApi.getWxConfig({url:encodeURIComponent(window.location.href.split("#")[0])}).then(function(e){200===e.data.status?(t.appId=e.data.data.appid,t.timestamp=e.data.data.timestamp,t.noncestr=e.data.data.noncestr,t.signature=e.data.data.signature,t.shareInit()):setTimeout(function(){t.$wechat.hideOptionMenu()},100)})},methods:{gotoPage:function(t){this.$router.replace(t)},shareInit:function(){var t=this,e=this.$router.currentRoute.name,n=(this.$router.currentRoute.query.type,this.$router.currentRoute.fullPath);this.$wechat.config({debug:!1,appId:this.appId,timestamp:this.timestamp,nonceStr:this.noncestr,signature:this.signature,jsApiList:["showMenuItems","onMenuShareAppMessage","hideMenuItems"]}),this.$wechat.ready(function(){if("Detail"===e){t.$wechat.showOptionMenu(),t.$wechat.showMenuItems({menuList:["menuItem:share:appMessage"]}),t.$wechat.hideMenuItems({menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone"]});t.rooturl.split(";jsessionid")[0];t.$wechat.onMenuShareAppMessage({title:"标题",desc:"平台",link:window.location.origin+"/mashangban/nos!14?turnto="+encodeURIComponent(n),success:function(){},cancel:function(){}})}else t.$wechat.hideOptionMenu()}),this.$wechat.error(function(e){t.$wechat.hideOptionMenu()})}}}),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-p",attrs:{id:"app"}},[n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isVis,expression:"isVis"}],staticClass:"g-viewbox"},[n("router-view",{staticClass:"rview"}),t._v(" "),n("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isTabShow&&t.isShow,expression:"isTabShow && isShow"}],staticClass:"g-tabbar"},[n("tabbar-item",{attrs:{selected:t.isCreate},nativeOn:{click:function(e){t.gotoPage({path:"/Create"})}}},[n("svg",{staticClass:"svg-icon",attrs:{slot:"icon"},slot:"icon"},[n("use",{attrs:{"xlink:href":"#icon-tab-create"}})]),t._v(" "),n("svg",{staticClass:"svg-icon",attrs:{slot:"icon-active"},slot:"icon-active"},[n("use",{attrs:{"xlink:href":"#icon-tab-create-active"}})]),t._v(" "),n("span",{attrs:{slot:"label"},slot:"label"},[t._v("创建")])]),t._v(" "),n("tabbar-item",{attrs:{selected:t.isHandle},nativeOn:{click:function(e){t.gotoPage({path:"/"})}}},[n("svg",{staticClass:"svg-icon",attrs:{slot:"icon"},slot:"icon"},[n("use",{attrs:{"xlink:href":"#icon-tab-handle"}})]),t._v(" "),n("svg",{staticClass:"svg-icon",attrs:{slot:"icon-active"},slot:"icon-active"},[n("use",{attrs:{"xlink:href":"#icon-tab-handle-active"}})]),t._v(" "),n("span",{attrs:{slot:"label"},slot:"label"},[t._v("办理")])]),t._v(" "),n("tabbar-item",{attrs:{selected:t.isQuery},nativeOn:{click:function(e){t.gotoPage({path:"/QueryList"})}}},[n("svg",{staticClass:"svg-icon",attrs:{slot:"icon"},slot:"icon"},[n("use",{attrs:{"xlink:href":"#icon-tab-query"}})]),t._v(" "),n("svg",{staticClass:"svg-icon",attrs:{slot:"icon-active"},slot:"icon-active"},[n("use",{attrs:{"xlink:href":"#icon-tab-query-active"}})]),t._v(" "),n("span",{attrs:{slot:"label"},slot:"label"},[t._v("查询")])])],1)],1)])},ft=[],vt={render:pt,staticRenderFns:ft},gt=vt,wt=n("VU/8"),bt=o,_t=wt(mt,gt,!1,bt,null,null),xt=_t.exports,St=n("/ocq"),yt=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"zwgt"))},$t=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"otl1"))},Ct=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"cypb"))},It=function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"W66y"))},Tt=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"P7Pr"))},kt=function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"v3Qr"))},Vt=function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"S2NW"))},Lt=function(){return n.e(6).then(n.bind(null,"f2KA"))},Bt=function(){return n.e(7).then(n.bind(null,"VOm7"))},Nt=function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"/Mey"))};b.a.use(St.a);var Ot,Mt=new St.a({routes:[{path:"/",name:"TodoList",component:It},{path:"/Register",name:"Register",component:Vt},{path:"/Create",name:"Create",component:yt},{path:"/Detail",name:"Detail",component:$t},{path:"/MailTo",name:"MailTo",component:Ct},{path:"/TodoList",name:"TodoList",component:It},{path:"/QueryList",name:"QueryList",component:Tt},{path:"/Handle/:id",name:"Handle",component:kt},{path:"/Error",name:"Error",component:Lt},{path:"/LoginTo",name:"LoginTo",component:Bt},{path:"/RedirectPage",name:"RedirectPage",component:Nt}]}),Pt=Mt,Rt=n("bOdI"),At=n.n(Rt),jt={isVis:!1,isLoading:!1,isTabShow:!0,curTabIndex:0},Dt={isVis:function(t){return t.isVis},isLoading:function(t){return t.isLoading},isTabShow:function(t){return t.isTabShow},curTabIndex:function(t){return t.curTabIndex}},Et=(Ot={},At()(Ot,"IS_LOADING",function(t,e){t.isLoading=e}),At()(Ot,"IS_TABSHOW",function(t,e){t.isTabShow=e}),At()(Ot,"IS_VIS",function(t,e){t.isVis=e}),At()(Ot,"CUR_TABINDEX",function(t,e){t.curTabIndex=e}),Ot),Ft={globalLoading:function(t,e){(0,t.commit)("IS_LOADING",e)},setTabShow:function(t,e){(0,t.commit)("IS_TABSHOW",e)},setVisible:function(t,e){(0,t.commit)("IS_VIS",e)},setCurTabIndex:function(t,e){(0,t.commit)("CUR_TABINDEX",e)}},Ut={state:jt,getters:Dt,mutations:Et,actions:Ft};b.a.use(_.a);var Wt=new _.a.Store({modules:{app:Ut},strict:!1}),qt=n("//Fk"),Ht=n.n(qt),Qt="",Xt="",Zt="",zt="",Gt="",Jt="",Kt="",Yt="",te="",ee="",ne="",ie="";Qt="/nis!2",Xt="/nis!7",Zt="/nis!10",Kt="/nis!3",zt="/nis!6",Gt="/nis!5",Jt="/nis!4",Yt="/nis!9",te="/nis!11",ee="/nis!13",ne="/nis!15",ie="/getWxConfig",S.a.defaults.baseURL="/mashangban/",S.a.defaults.timeout=3e4,S.a.withCredentials=!0,S.a.interceptors.request.use(function(t){return t.params.token=ht.a.get("token"),t},function(t){}),S.a.interceptors.response.use(function(t){return t},function(t){return Ht.a.reject({status:-1,msg:"response error"})});var se=function(t,e){return t.method||(t.method="post"),e&&setTimeout(function(){Wt.dispatch("globalLoading",!0)},0),new Ht.a(function(n,i){S()(t).then(function(t){if(122===t.data.status){var i=encodeURIComponent(ue.$route.fullPath);ue.$router.replace("/LoginTo?reuri="+i)}else e&&setTimeout(function(){Wt.dispatch("setVisible",!0),Wt.dispatch("globalLoading",!1)},0),n(t)}).catch(function(t){e&&(Wt.dispatch("setVisible",!0),Wt.dispatch("globalLoading",!1)),n(t)})})},ae=n("3BeM"),oe=n("Peep"),re=n("n6Wb");n("hKoQ").polyfill(),$.a.attach(document.body),b.a.config.productionTip=!1,b.a.prototype.publicApi=w,b.a.prototype.$http=S.a,b.a.use(ae.a),b.a.use(oe.a),b.a.use(re.a);var ue=e.default=new b.a({router:Pt,store:Wt,render:function(t){return t(xt)}}).$mount("#app-box")},gFFe:function(t,e){},hjBQ:function(t,e){},hsWN:function(t,e){},"j+Mp":function(t,e){},jame:function(t,e){},mzja:function(t,e,n){"use strict";function i(t){n("hjBQ")}function s(t){n("hsWN")}var a=n("JkZY"),o=(a.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},u=[],l={render:r,staticRenderFns:u},c=l,d=n("VU/8"),h=i,m=d(o,c,!1,h,null,null),p=m.exports,f=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:p},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},g=[],w={render:v,staticRenderFns:g},b=w,_=n("VU/8"),x=s,S=_(f,b,!1,x,null,null);e.a=S.exports},o6p1:function(t,e){},rLAy:function(t,e,n){"use strict";function i(t){n("j+Mp")}var s=n("xNvf"),a=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},r=[],u={render:o,staticRenderFns:r},l=u,c=n("VU/8"),d=i,h=c(a,l,!1,d,null,null);e.a=h.exports}},["NHnr"]);