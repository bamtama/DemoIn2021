(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96f3a23e"],{"0eb8":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"m-main"},[e("Slider",{attrs:{slots:t.imgs},scopedSlots:t._u([t._l(t.imgs,(function(n,a){return{key:n.key,fn:function(){return[e("img",{key:"slider_img_"+a,staticClass:"slider_img",attrs:{src:t.getImg(n.key)}})]},proxy:!0}}))],null,!0)}),e("div",{staticClass:"enters_wrap"},[e("ul",{staticClass:"cate_tabs"},t._l(t.categories,(function(n,a){return e("li",{key:"cate_tab_"+a,staticClass:"item",class:{cur:t.curTab==a},on:{click:function(n){return t.tabChange(a)}}},[e("i",{staticClass:"iconfont",class:"icon-"+n.icon})])})),0),e("Slider",{attrs:{slots:t.categories,showIndicator:!1,showArrows:!1,auto:!1,activeIndex:t.curTab},on:{change:t.pageChange},scopedSlots:t._u([t._l(t.categories,(function(n,a){return{key:n.key,fn:function(){return[e("div",{key:"slider_page_"+a,staticClass:"cate_page"},t._l(n.list,(function(t,n){return e("router-link",{key:"enter_"+n,attrs:{to:"/"}},[e("i",{staticClass:"iconfont icon-lab"})])})),1)]},proxy:!0}}))],null,!0)})],1),e("div",{staticClass:"list_wrap"},[e("h5",[e("span",[t._v("推荐")]),e("router-link",{attrs:{to:"/"}},[t._v(" 查看更多 "),e("i",{staticClass:"iconfont icon-arrow-right"})])],1),e("ul",{staticClass:"cont"},t._l(10,(function(n){return e("li",{key:"list_"+n},[t._v("内容00"+t._s(n))])})),0)])],1)},i=[],c=(e("cb29"),e("b893")),r={name:"mainPage",components:{},data:function(){for(var t=[],n=1;n<4;n++)t.push({key:"banner".concat(n,".jpg")});return{imgs:t,categories:[],cateIndicator:[],curTab:0}},mounted:function(){this.initData()},methods:{initData:function(){for(var t=[],n=0;n<4;n++)t.push({key:"cate_".concat(n),title:"品类 ".concat(n),icon:"category",imguri:"banner".concat(n,".jpg"),list:new Array(c["a"].randomInt(7,16)).fill(0)});this.categories=JSON.parse(JSON.stringify(t)),console.log("main cateindicator",this.cateIndicator)},getImg:function(t){return e("fe9e")("./".concat(t))},tabChange:function(t){this.curTab=t},pageChange:function(t){this.curTab=t}}},s=r,o=(e("747c"),e("2877")),u=Object(o["a"])(s,a,i,!1,null,"2c457cf2",null);n["default"]=u.exports},"1c11":function(t,n,e){t.exports=e.p+"img/banner3.c773af4f.jpg"},"28d3":function(t,n,e){t.exports=e.p+"img/banner2.1af6acf1.jpg"},"4edd":function(t,n,e){},"747c":function(t,n,e){"use strict";e("4edd")},"81cc":function(t,n,e){t.exports=e.p+"img/banner1.38092bb9.jpg"},fe9e:function(t,n,e){var a={"./banner1.jpg":"81cc","./banner2.jpg":"28d3","./banner3.jpg":"1c11"};function i(t){var n=c(t);return e(n)}function c(t){if(!e.o(a,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=c,t.exports=i,i.id="fe9e"}}]);