webpackJsonp([9],{HlT8:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.g-viewbox > .dw-handling {\n  background: #ffffff;\n}\n.g-viewbox > .dw-handling .weui-cells__title {\n  margin: 1.8vh 3%;\n  padding: 0px;\n  font-size: 15px;\n  color: #292929;\n}\n.g-viewbox > .dw-handling .weui-cell {\n  background: #f4f4f4;\n  font-size: 15px;\n  padding: 1.8vh 3%;\n}\n.g-viewbox > .dw-handling .weui-cell .weui-textarea {\n  background: #f4f4f4;\n}\n.g-viewbox > .dw-handling .weui-btn {\n  width: 80%;\n}\n.g-viewbox > .dw-handling .btn.weui-btn:after {\n  border: 4px solid #dfdfdf;\n}\n",""])},oDhH:function(t,n,e){var i=e("HlT8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("d89e897e",i,!0,{})},v3Qr:function(t,n,e){"use strict";function i(t){e("oDhH")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("2sLL"),a=e("ALGc"),r=e("rHil"),c=e("pDNl"),l=e("YxJB"),s=e("3Lt7"),u=e("QTi7"),d=(e("17Ff"),o.a,a.a,r.a,c.a,l.a,s.a,u.a,{name:"handle",components:{XButton:o.a,XTextarea:a.a,Group:r.a,XInput:c.a,Flexbox:l.a,FlexboxItem:s.a,Box:u.a},data:function(){return{id:this.$route.params.id,content:""}},computed:{cTitle:function(){var t=this.$route.query.title;return"undefined"===t&&(t=""),t}},mounted:function(){this.$store.dispatch("setVisible",!0),window.onresize=function(){document.querySelector("textarea").scrollIntoView(!0)}},methods:{actionSubmit:function(){var t=this,n={reminderId:this.id,content:this.content};this.publicApi.reToReminder(n).then(function(n){200===n.data.status?t.$vux.toast.show({text:"操作成功，即将返回列表页",isShowMask:!0,time:1e3,onHide:function(){t.$router.replace({path:"/TodoList"})}}):t.$vux.toast.show({text:n.data.message,type:"warn"})})},actionCancel:function(){this.$router.go(-1)}}}),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dw-handling g-content"},[e("div",[e("group",{attrs:{title:t.cTitle}},[e("x-textarea",{attrs:{placeholder:"点击输入您的意见",height:120},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)],1),t._v(" "),e("box",{attrs:{gap:"4.5vh 2%"}},[e("flexbox",[e("flexbox-item",[e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.actionSubmit(n)}}},[t._v("提交")])],1),t._v(" "),e("flexbox-item",[e("x-button",{staticClass:"btn",attrs:{typeof:"primary"},nativeOn:{click:function(n){t.actionCancel(n)}}},[t._v("取消")])],1)],1)],1)],1)},x=[],h={render:f,staticRenderFns:x},p=h,b=e("VU/8"),w=i,v=b(d,p,!1,w,null,null);n.default=v.exports}});