webpackJsonp([7],{"+0nn":function(t,e,a){var n=a("2plY");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("70da504e",n,!0,{})},"2plY":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.detail-dialog .avator[data-v-fb9b7212] {\n  height: 64px;\n  width: 64px;\n  border-radius: 50%;\n}\n.detail-dialog .name[data-v-fb9b7212] {\n  vertical-align: 20px;\n  margin: 0 0 0 20px;\n}\n",""])},"B7+v":function(t,e,a){"use strict";function n(t){a("hhfS")}var s=a("//Fk"),l=a.n(s),i=a("woOf"),o=a.n(i),r=a("Cz8s"),c=a("rHil"),d=a("1DHf"),g=(r.a,c.a,d.a,{name:"OrgSelection",components:{mHeader:r.a,Group:c.a,Cell:d.a},data:function(){return{mleftbtn:'<i class="iconfont icon-arrow-left"></i>',selectedOrgList:[{text:"总部",code:44,type:"folder"}],selectedOrgCodes:{44:!0},selectedOrgCode:0,dataList:[],showHeader:!1,oldSelectedOrgList:[{text:"总部",code:44,type:"folder"}],cacheOrgList:[]}},computed:{},props:{},mounted:function(){},methods:{showAndSelectOrg:function(t){this.showHeader=!0,this.oldSelectedOrgList=o()([],this.selectedOrgList),this.actionSelectOrg(t)},actionSelectOrg:function(t){var e=this;if(t.code!==this.selectedOrgCode||44==t.code){var a=[];"folder"!==t.type||this.cacheOrgList[t.code]||a.push(this.publicApi.ajax(this.URL.LIST.ORG,{parent:t.code},!0)),l.a.all(a).then(function(a){var n=a[0];if(e.cacheOrgList[t.code]?e.dataList=e.cacheOrgList[t.code]:n&&(200===n.data.status?n.data.data.length>0&&(e.dataList=n.data.data,e.cacheOrgList[t.code]=n.data.data):e.$vux.toast.show("获取数据失败，请重试")),t.code.toString().length>e.selectedOrgList[e.selectedOrgList.length-1].code.toString().length)e.selectedOrgCodes[t.code]||(e.selectedOrgCodes[t.code]=!0,e.selectedOrgList.push(t));else{var s=e.selectedOrgList,l=[];for(var i in s)s[i].code.toString().length<t.code.toString().length?l.push(s[i]):e.selectedOrgCodes[s[i].code]=!1;e.selectedOrgCodes[t.code]=!0,e.selectedOrgList=l,e.selectedOrgList.push(t)}e.selectedOrgCode=e.selectedOrgList[e.selectedOrgList.length-1].code,e.$nextTick(function(){document.querySelectorAll(".org-sel-inner").forEach(function(t){t.scrollLeft=99999})})})}},selectCurOrg:function(){this.oldSelectedOrgList=o()([],this.selectedOrgList),this.$nextTick(function(){document.querySelectorAll(".org-sel-inner").forEach(function(t){t.scrollLeft=99999})}),this.showHeader=!1,this.$emit("actionChange",this.selectedOrgList[this.selectedOrgList.length-1])},cancelSelect:function(){this.selectedOrgList=o()([],this.oldSelectedOrgList),this.dataList=[],this.showHeader=!1}}}),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-org-selection"},[a("group",{attrs:{gutter:0,"label-width":"4em"}},[a("cell",{staticClass:"org-sel-cell",attrs:{title:"组织机构"}},[a("div",{staticClass:"org-sel-outer"},[a("div",{ref:"orgsel",staticClass:"org-sel-inner"},[a("ul",{staticClass:"org-sel-ul"},[t._l(t.oldSelectedOrgList,function(e,n){return[a("li",{key:n,class:{active:n===t.oldSelectedOrgList.length-1},on:{click:function(a){t.showAndSelectOrg(e)}}},[t._v(t._s(e.text)),a("i",{staticClass:"iconfont icon-right"})])]})],2)])])])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showHeader,expression:"showHeader"}],staticClass:"popup-selection"},[a("m-header",{attrs:{mTitle:"查询范围",rightBtn:"查看全部",defaultBack:!1,leftBtn:t.mleftbtn},on:{actionLeft:t.cancelSelect,actionRight:t.selectCurOrg}}),t._v(" "),a("div",{staticClass:"g-content"},[a("group",{attrs:{gutter:0,"label-width":"4em"}},[a("cell",{staticClass:"org-sel-cell",attrs:{title:"组织机构"}},[a("div",{staticClass:"org-sel-outer"},[a("div",{ref:"orgsel",staticClass:"org-sel-inner"},[a("ul",{staticClass:"org-sel-ul"},[t._l(t.selectedOrgList,function(e,n){return[a("li",{key:n,class:{active:n===t.selectedOrgList.length-1},on:{click:function(a){t.actionSelectOrg(e)}}},[t._v(t._s(e.text)),a("i",{staticClass:"iconfont icon-right"})])]})],2)])])])],1),t._v(" "),a("group",{staticClass:"org-list-wrap",attrs:{gutter:0}},t._l(t.dataList,function(e,n){return a("cell",{key:n,attrs:{"value-align":"left","is-link":"folder"===e.type},nativeOn:{click:function(a){t.actionSelectOrg(e)}}},[a("span",{staticClass:"item",class:{active:t.selectedOrgCode===e.code}},[t._v(t._s(e.text))])])}))],1)],1)],1)},u=[],f={render:h,staticRenderFns:u},v=f,p=a("VU/8"),m=n,O=p(g,v,!1,m,"data-v-22a4c83e",null);e.a=O.exports},HTUZ:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.g-org-selection .org-sel-cell[data-v-22a4c83e] {\n  position: relative;\n}\n.g-org-selection .org-sel-cell .org-sel-outer[data-v-22a4c83e] {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 44px;\n}\n.g-org-selection .popup-selection[data-v-22a4c83e] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n.g-org-selection .org-sel-outer[data-v-22a4c83e] {\n  width: 250px;\n  height: 44px;\n  overflow: hidden;\n}\n.g-org-selection .org-sel-inner[data-v-22a4c83e] {\n  width: 250px;\n  line-height: 44px;\n  height: 58px;\n  overflow: scroll;\n}\n.g-org-selection .org-sel-inner[data-v-22a4c83e] {\n  /*width: 200px;*/\n  /*overflow-x: scroll;*/\n  /*overflow-y: hidden;*/\n  /*height: 32px;*/\n}\n.g-org-selection .org-sel-ul[data-v-22a4c83e] {\n  display: inline-block;\n  white-space: nowrap;\n}\n.g-org-selection .org-sel-ul > li[data-v-22a4c83e] {\n  display: inline-block;\n}\n.g-org-selection .org-sel-ul > li > .iconfont[data-v-22a4c83e] {\n  font-size: 12px;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  font-weight: 700;\n  vertical-align: 1px;\n  padding: 0 3px 0 1px;\n}\n.g-org-selection .org-sel-ul > li.active[data-v-22a4c83e] {\n  color: #024ea4;\n}\n.g-org-selection .org-list-wrap[data-v-22a4c83e] {\n  position: absolute;\n  top: 44px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: scroll;\n  background: #fff;\n}\n.g-org-selection .org-list-wrap .item[data-v-22a4c83e] {\n  color: #292929;\n}\n.g-org-selection .org-list-wrap .item.active[data-v-22a4c83e] {\n  color: #024ea4;\n}\n",""])},hhfS:function(t,e,a){var n=a("HTUZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("5f72d71a",n,!0,{})},nmGS:function(t,e,a){"use strict";function n(t){a("+0nn")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("Cz8s"),l=a("B7+v"),i=a("IOI1"),o=a("rHil"),r=a("32ER"),c=a("1DHf"),d=a("2sLL"),g=a("ODCk"),h=a("/kga"),u=a("63CM"),f=(o.a,r.a,c.a,d.a,g.a,s.a,l.a,i.a,h.a,u.a,{name:"ContactList",components:{Group:o.a,CellBox:r.a,Cell:c.a,XButton:d.a,dateFormat:g.a,mHeader:s.a,orgSelection:l.a,meScroll:i.a,XDialog:h.a},directives:{TransferDom:u.a},data:function(){return{dataList:[],meScroll:null,detail:{},detailShow:!1}},mounted:function(){},activated:function(){},computed:{},methods:{getList:function(){var t=this;this.publicApi.ajax(this.URL.LIST.CONTACT,{},1).then(function(e){200===e.data.status?(t.dataList=e.data.data,t.meScroll.endSuccess(20,!0)):alert("error")})},search:function(){},actionOrgChange:function(){this.getList()},getScroll:function(t){this.meScroll=t},refresh:function(){console.log("下拉刷新"),this.getList()},loadmore:function(){console.log("上拉加载"),this.getList()},showDetail:function(t){console.log(t),this.detailShow=!0,this.detail=[t]}}}),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address"},[a("m-header",{attrs:{mTitle:"通讯录",defaultSearch:!0},on:{actionSearch:t.search}}),t._v(" "),a("div",{staticClass:"g-content"},[a("orgSelection",{on:{actionChange:t.actionOrgChange}}),t._v(" "),a("div",{staticClass:"mescroll-wrap"},[a("me-scroll",{on:{meScrollDom:t.getScroll,downRefresh:t.refresh,loadMore:t.loadmore}},[a("group",{attrs:{gutter:10}},t._l(t.dataList,function(e){return a("cell",{key:e.id,attrs:{title:e.name},nativeOn:{click:function(a){t.showDetail(e)}}},[t._v(t._s(e.phonenum))])}))],1)],1)],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("x-dialog",{staticClass:"detail-dialog",attrs:{"hide-on-blur":!0},model:{value:t.detailShow,callback:function(e){t.detailShow=e},expression:"detailShow"}},t._l(t.detail,function(e){return a("group",{key:e.id,attrs:{gutter:0,"label-width":"4em","label-margin-right":"2em"}},[a("cell",{attrs:{"value-align":"left"}},[a("img",{staticClass:"avator",attrs:{src:e.detail.photo}}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(e.name))])]),t._v(" "),a("cell",{attrs:{title:"电话号码"}},[t._v(t._s(e.phonenum))]),t._v(" "),a("cell",{attrs:{title:"备用号码"}},[t._v(t._s(e.detail.phonenum2))]),t._v(" "),a("cell",{attrs:{title:"地址"}},[t._v(t._s(e.detail.address))]),t._v(" "),a("cell",{attrs:{title:"爱好"}},[t._v(t._s(e.detail.hobits))])],1)}))],1)],1)},p=[],m={render:v,staticRenderFns:p},O=m,L=a("VU/8"),C=n,w=L(f,O,!1,C,"data-v-fb9b7212",null);e.default=w.exports}});