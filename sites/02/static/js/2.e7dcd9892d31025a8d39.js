webpackJsonp([2],{"++mS":function(t,e){var n=!1;try{var a=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,a)}catch(t){}t.exports=n},"C+iz":function(t,e,n){var a=n("Rjsw");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("fd043b9a",a,!0,{})},DXN1:function(t,e,n){var a=n("VJcA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("de7612e4",a,!0,{})},HD9R:function(t,e,n){"use strict";function a(t){n("DXN1")}var i=n("fZjL"),o=n.n(i),s=n("pFYg"),l=n.n(s),r=n("++mS"),p="object"===("undefined"==typeof window?"undefined":l()(window));p&&(window.__$vuxPopups=window.__$vuxPopups||{});var u=function(t){var e=this;if(p){this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={hideOnBlur:t.hideOnBlur,onOpen:t.onOpen||function(){},onClose:t.onClose||function(){},showMask:t.showMask}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.dataset.uuid="",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var n=void 0;n=t.container?t.container:document.createElement("div"),n.className+=" vux-popup-dialog vux-popup-dialog-"+this.uuid,this.params.hideOnBlur||(n.className+=" vux-popup-mask-disabled"),this.div=n,t.container||document.body.appendChild(n),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this.mask=document.querySelector(".vux-popup-mask"),this.mask.dataset.uuid+=","+this.uuid,this._bindEvents(),t=null,this.containerHandler=function(){e.mask&&!/show/.test(e.mask.className)&&setTimeout(function(){!/show/.test(e.mask.className)&&(e.mask.style.zIndex=-1)},200)},this.container&&this.container.addEventListener("webkitTransitionEnd",this.containerHandler),this.container&&this.container.addEventListener("transitionend",this.containerHandler)}};u.prototype.onClickMask=function(){this.params.hideOnBlur&&this.params.onClose()},u.prototype._bindEvents=function(){this.params.hideOnBlur&&(this.mask.addEventListener("click",this.onClickMask.bind(this),!1),this.mask.addEventListener("touchmove",function(t){return t.preventDefault()},!!r&&{passive:!1}))},u.prototype.show=function(){this.params.showMask&&(this.mask.classList.add("vux-popup-show"),this.mask.style.zIndex=500),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this),p&&(window.__$vuxPopups[this.uuid]=1)},u.prototype.hide=function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||(this.mask.classList.remove("vux-popup-show"),setTimeout(function(){t.mask&&!/show/.test(t.mask.className)&&(t.mask.style.zIndex=-1)},400)),!1===e&&this.params.onClose&&this.params.hideOnBlur&&this.params.onClose(this),this.isShow=!1,p&&delete window.__$vuxPopups[this.uuid]},u.prototype.destroy=function(){this.mask.dataset.uuid=this.mask.dataset.uuid.replace(new RegExp(","+this.uuid,"g"),""),this.mask.dataset.uuid?this.hide():(this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)),this.container.removeEventListener("webkitTransitionEnd",this.containerHandler),this.container.removeEventListener("transitionend",this.containerHandler),p&&delete window.__$vuxPopups[this.uuid]};var d=u,c=n("te2A"),h=(Boolean,String,String,Boolean,Boolean,Boolean,String,String,Object,Boolean,{name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object,hideOnDeactivated:{type:Boolean,default:!0}},created:function(){this.$vux&&this.$vux.config&&"VIEW_BOX"===this.$vux.config.$layout&&(this.layout="VIEW_BOX")},mounted:function(){var t=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var e=t;t.popup=new d({showMask:e.showMask,container:e.$el,hideOnBlur:e.hideOnBlur,onOpen:function(){e.fixSafariOverflowScrolling("auto"),e.show=!0},onClose:function(){e.show=!1,window.__$vuxPopups&&o()(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){e.fixSafariOverflowScrolling("touch")},300)}}),t.value&&t.popup.show(),t.initialShow=!1})},deactivated:function(){this.hideOnDeactivated&&(this.show=!1),this.removeModalClassName()},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var e=0;e<this.$overflowScrollingList.length;e++)this.$overflowScrollingList[e].style.webkitOverflowScrolling=t},removeModalClassName:function(){"VIEW_BOX"===this.layout&&c.a.removeClass(document.body,"vux-modal-open")}},data:function(){return{layout:"",initialShow:!0,hasFirstShow:!1,show:this.value}},computed:{styles:function(){var t={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?t.width=this.width:t.height=this.height,this.maxHeight&&(t["max-height"]=this.maxHeight),this.isTransparent&&(t.background="transparent"),this.popupStyle)for(var e in this.popupStyle)t[e]=this.popupStyle[e];return t}},watch:{value:function(t){this.show=t},show:function(t){var e=this;this.$emit("input",t),t?(this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),"VIEW_BOX"===this.layout&&c.a.addClass(document.body,"vux-modal-open"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||e.fixSafariOverflowScrolling("touch"),e.removeModalClassName()},200))}},beforeDestroy:function(){this.popup&&this.popup.destroy(),this.fixSafariOverflowScrolling("touch"),this.removeModalClassName()}}),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-popup-animate-"+t.position}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&!t.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+t.position,t.show?"vux-popup-show":""],style:t.styles},[t._t("default")],2)])},f=[],m={render:v,staticRenderFns:f},w=m,g=n("VU/8"),x=a,_=g(h,w,!1,x,null,null);e.a=_.exports},Rjsw:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.vux-popup-mask,.vux-popup-dialog{\n  position: absolute !important;\n  overflow-y: hidden !important;\n}\n",""])},VJcA:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-modal-open {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n}\n.vux-modal-open-for-container {\n  overflow: hidden!important;\n}\n.vux-popup-dialog {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #f4f4f4;\n  z-index: 501;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  max-height: 100%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.vux-popup-dialog.vux-popup-left {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-dialog.vux-popup-right {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\n.vux-popup-dialog.vux-popup-top {\n  width: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-mask {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  z-index: -1;\n  -webkit-transition: opacity 400ms;\n  transition: opacity 400ms;\n}\n.vux-popup-mask.vux-popup-show {\n  opacity: 1;\n}\n.vux-popup-animate-bottom-enter,\n.vux-popup-animate-bottom-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n.vux-popup-animate-left-enter,\n.vux-popup-animate-left-leave-active {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n.vux-popup-animate-right-enter,\n.vux-popup-animate-right-leave-active {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.vux-popup-animate-top-enter,\n.vux-popup-animate-top-leave-active {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n",""])},gH7q:function(t,e,n){var a=n("v25Y");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1a41066d",a,!0,{})},otl1:function(t,e,n){"use strict";function a(t){n("gH7q")}function i(t){n("C+iz")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("rHil"),s=n("1DHf"),l=n("ALGc"),r=n("HD9R"),p=n("63CM"),u=n.n(p),d={name:"foldPart",props:["value"],data:function(){return{MAXHEIGHT:44,height:"",isUnfold:!1}},computed:{},mounted:function(){this.getHeight()},methods:{getHeight:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.height=t.$refs.p.clientHeight},0)})}}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-fold-part"},[t.height>t.MAXHEIGHT?n("i",{staticClass:"btn-folded",on:{click:function(e){t.isUnfold=!t.isUnfold}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isUnfold,expression:"!isUnfold"}]},[t._v("...")]),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.isUnfold,expression:"isUnfold"}],staticClass:"iconfont icon-arrow-up"})]):t._e(),t._v(" "),n("div",{staticClass:"pwrap",class:{"z-unfold":t.isUnfold}},[n("p",{ref:"p"},[t._v(t._s(t.value))])])])},h=[],v={render:c,staticRenderFns:h},f=v,m=n("VU/8"),w=a,g=m(d,f,!1,w,"data-v-82158cc0",null),x=g.exports,_=(r.a,l.a,s.a,o.a,u.a,{name:"detail",components:{Popup:r.a,XTextarea:l.a,Cell:s.a,Group:o.a,mFoldPart:x},directives:{TransferDom:u.a},data:function(){return{id:this.$route.query.id,type:this.$route.query.type,dataDetail:{},showPopup:!1,popupType:0,dataOpinionList:[],showBtnHandle:!1,showBtnUrge:!1}},computed:{cPopupTitle:function(){var t="";switch(this.popupType){case 0:t="查看未办人员";break;case 1:t="查看置办意见";break;default:t="标题未定义"}return t}},mounted:function(){this.initData()},methods:{initData:function(){this.getData(this.id)},getData:function(t){var e=this;this.publicApi.getReminderDetail({reminderId:t}).then(function(t){200===t.data.status?t.data.data.title?(e.dataDetail=t.data.data,e.showBtn()):e.$vux.alert.show({content:"当前查询项目为空，请返回！",buttonText:"返回置办列表",onHide:function(){e.$router.replace("/TodoList")}}):131===t.data.status?e.$vux.alert.show({content:"抱歉，您不是该项目的置办人员，无法查看该信息！",buttonText:"返回置办列表",onShow:function(){},onHide:function(){e.$router.replace("/TodoList")}}):e.$vux.toast.show({text:t.data.message,type:"warn"})})},getModeText:function(t){var e="";switch(t){case 1:e="立即发送";break;case 2:e="定时发送";break;case 3:e="随机发送"}return e},checkUnhandleStaffs:function(){this.showPopup=!0,this.popupType=0},checkOpinions:function(){this.showPopup=!0,this.popupType=1},nameArrayToStr:function(t){var e="";for(var n in t)e+=t[n].name,n<=t.length-2&&(e+="、");return e},gotoPage:function(t){var e=this;if(0===t)this.$router.push({path:"/Handle/"+this.id+"?title="+this.dataDetail.title});else if(1===t){var n=[];this.dataDetail.unhandledStaffs.forEach(function(t,e){n.push(t.userId)}),this.publicApi.getEmails({ids:n.toString()}).then(function(t){200===t.data.status?e.$router.push({name:"MailTo",params:{emails:t.data.data,attach:"",type:0,title:e.dataDetail.title}}):e.$vux.toast.text("获取邮箱列表失败，请重试")})}},transferReponseTime:function(t){var e=0,n=0;return t<60||(n=parseInt(t/60))<24||(e=parseInt(n/24)),n%=24,t%=60,0===n&&0===e?t+"分钟":0!==n&&0===e?n+"小时"+t+"分钟":e+"天"+n+"小时"+t+"分钟"},popupShow:function(){document.querySelector(".g-viewbox .rview").style.overflow="hidden",1===this.popupType&&(this.dataOpinionList=this.dataDetail.handledStaffs)},popupHide:function(){document.querySelector(".g-viewbox .rview").style.overflow="auto"},showBtn:function(){switch(parseInt(this.dataDetail.userStatus)){case 1:this.showBtnHandle=!1,this.dataDetail.sendTime&&(new Date).getTime()-new Date(this.dataDetail.sendTime.replace(/-/g,"/")).getTime()>0&&this.dataDetail.unhandledStaffs.length>0?this.showBtnUrge=!0:this.showBtnUrge=!1;break;case 2:this.showBtnHandle=!1,this.showBtnUrge=!1;break;case 3:this.showBtnHandle=!0,this.showBtnUrge=!1}}}}),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-content ju-todo-detail"},[n("group",{staticClass:"g-group",attrs:{"label-width":"5.2em",gutter:0}},[n("cell",{attrs:{title:"标题","value-align":"left"}},[t._v(t._s(t.dataDetail.title))]),t._v(" "),n("cell",{attrs:{title:"创建人","value-align":"left"}},[t._v(t._s(t.dataDetail.creator))]),t._v(" "),n("cell",{attrs:{title:"创建时间","value-align":"left"}},[t._v(t._s(t.dataDetail.createTime))]),t._v(" "),n("cell",{attrs:{title:"截止时间","value-align":"left"}},[t._v(t._s(t.dataDetail.endTime))]),t._v(" "),n("cell",{attrs:{title:"置办人员","value-align":"left"}},[n("div",{staticClass:"cont-wrap"},[n("span",{staticClass:"cont"},[t._v("\n          "+t._s(t.nameArrayToStr(t.dataDetail.staffs))+"\n        ")])])]),t._v(" "),n("cell",{attrs:{title:"已办人员","value-align":"left"}},[n("div",{staticClass:"cont-wrap"},[n("span",{staticClass:"cont"},[t._v("\n          "+t._s(t.nameArrayToStr(t.dataDetail.handledStaffs))+"\n        ")])])]),t._v(" "),n("cell",{attrs:{title:"未办人员","value-align":"left"}},[n("div",{staticClass:"cont-wrap unhandle-wrap"},[n("span",{staticClass:"cont"},[t._v("\n          "+t._s(t.nameArrayToStr(t.dataDetail.unhandledStaffs))+"\n        ")]),t._v(" "),n("span",{staticClass:"btn-check",on:{click:t.checkUnhandleStaffs}},[t._v("查看")])])]),t._v(" "),n("cell",{attrs:{title:"响应人数","value-align":"left"}},[t._v(t._s(t.dataDetail.responseNum)+"/"+t._s(t.dataDetail.attendNum))]),t._v(" "),n("cell",{attrs:{title:"发送模式","value-align":"left"}},[t._v(t._s(t.getModeText(t.dataDetail.sendMode)))]),t._v(" "),t.dataDetail.sendTime?n("cell",{attrs:{title:"发送时间","value-align":"left"}},[t._v(t._s(t.dataDetail.sendTime))]):t._e(),t._v(" "),n("x-textarea",{attrs:{readonly:!0,title:"内容",autosize:!0,rows:2},model:{value:t.dataDetail.content,callback:function(e){t.$set(t.dataDetail,"content",e)},expression:"dataDetail.content"}})],1),t._v(" "),n("group",{staticClass:"g-group",staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"5.2em",gutter:4}},[n("cell",{attrs:{title:"置办意见","value-align":"left"}},[n("span",{staticClass:"btn-check",on:{click:t.checkOpinions}},[t._v("查看")])])],1),t._v(" "),t.showBtnHandle?n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showPopup,expression:"!showPopup"}],staticClass:"g-btn-fix-bottom",on:{click:function(e){t.gotoPage(0)}}},[t._v("置办")]):t._e(),t._v(" "),t.showBtnUrge?n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showPopup,expression:"!showPopup"}],staticClass:"g-btn-fix-bottom",on:{click:function(e){t.gotoPage(1)}}},[t._v("催单")]):t._e(),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("popup",{attrs:{height:"90%","hide-on-blur":!1,width:"100%"},on:{"on-show":t.popupShow,"on-hide":t.popupHide},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[n("div",{staticClass:"ju-detail-popup g-p"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.cPopupTitle))]),t._v(" "),n("i",{staticClass:"iconfont icon-close close",staticStyle:{padding:"5px 10px",margin:"-5px -10px 0 0"},on:{click:function(e){t.showPopup=!1}}})]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.popupType,expression:"popupType===0"}],staticClass:"ju-detail-unhandle-list"},t._l(t.dataDetail.unhandledStaffs,function(e,a){return n("group",{key:a,staticClass:"g-group item",attrs:{"label-width":"5.2em",title:e.name}},[n("cell",{attrs:{title:"所属单位","value-align":"left"}},[t._v(t._s(e.departName))]),t._v(" "),n("cell",{attrs:{title:"职务","value-align":"left"}},[t._v(t._s(e.position))]),t._v(" "),n("cell",{attrs:{title:"地址","value-align":"left"}},[t._v(t._s(e.address))]),t._v(" "),n("cell",{attrs:{title:"电话","value-align":"left"}},[t._v(t._s(e.officePhone))]),t._v(" "),n("cell",{attrs:{title:"手机","value-align":"left"}},[t._v(t._s(e.cellPhone))]),t._v(" "),n("cell",{attrs:{title:"邮箱","value-align":"left"}},[t._v(t._s(e.email))])],1)})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.popupType,expression:"popupType===1"}],staticClass:"ju-detail-opinion-list"},t._l(t.dataOpinionList,function(e,a){return n("group",{key:a,staticClass:"g-group item",attrs:{title:e.name,"label-width":"5.2em"}},[n("cell",{attrs:{"value-align":"left"}},[n("span",{staticClass:"title-label",attrs:{slot:"title"},slot:"title"},[t._v("置办意见")]),t._v(" "),n("m-fold-part",{model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"item.content"}})],1),t._v(" "),n("cell",{attrs:{title:"响应时长","value-align":"left"}},[t._v(t._s(t.transferReponseTime(e.reDuration)))]),t._v(" "),n("cell",{attrs:{title:"回复时间","value-align":"left"}},[t._v(t._s(e.time))])],1)}))])])])],1)],1)},b=[],y={render:k,staticRenderFns:b},S=y,C=n("VU/8"),T=i,D=C(_,S,!1,T,null,null);e.default=D.exports},v25Y:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.m-fold-part[data-v-82158cc0] {\n  position: relative;\n  font-size: 15px;\n}\n.m-fold-part .btn-folded[data-v-82158cc0] {\n  display: inline-block;\n  width: 1em;\n  text-align: center;\n  color: #3988ff;\n  background: #fff;\n  line-height: 22px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.m-fold-part > .pwrap[data-v-82158cc0] {\n  max-height: 44px;\n  line-height: 22px;\n  overflow: hidden;\n  text-align: justify;\n}\n.m-fold-part > .pwrap.z-unfold[data-v-82158cc0] {\n  max-height: none;\n  height: auto;\n  text-align: left;\n}\n",""])}});