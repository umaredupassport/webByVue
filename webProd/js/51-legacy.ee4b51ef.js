"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[51],{88741:function(e,t,a){a.d(t,{Z:function(){return $}});var i=a(66252),n=a(3577),s=function(e){return(0,i.dD)("data-v-7c214fbb"),e=e(),(0,i.Cn)(),e},l={class:"featured-jobs-container"},o=s((function(){return(0,i._)("div",{class:"featured-jobs-label"},"Featured Jobs",-1)})),r={class:"featured-jobs-content"},c={class:"featured-jobs-card"},u=s((function(){return(0,i._)("div",{class:"featured-jobs-card-image"},null,-1)})),d=["onClick"],f=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart-filled xll-heart-icon"},null,-1)})),g=[f],_=["onClick"],m=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart xll-heart-icon"},null,-1)})),v=[m],h={class:"featured-jobs-title"},p={class:"featured-business-name"},w={class:"featured-jobs-location"},y={class:"featured-jobs-tags"},k={class:"featured-jobs-tags-l"},b={class:"featured-jobs-work-type"},D=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alishijian"},null,-1)})),L={key:0},C={key:1},j={key:2},S={key:0,class:"featured-jobs-gender"},I=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alimale-female"},null,-1)})),F={key:0},x={key:1},z=s((function(){return(0,i._)("view",{class:"featured-jobs-work-exp"},[(0,i._)("i",{class:"iconfont el-icon-aligongzuojingyan"}),(0,i.Uk)(" 1-2 yrs ")],-1)})),W={class:"featured-jobs-salary"},V={class:"featured-jobs-b"},P={class:"featured-jobs-b-l"},q=(0,i.Uk)("Quick Apply"),Z={class:"featured-jobs-b-r"};function U(e,t,a,s,f,m){var U=(0,i.up)("router-link"),H=(0,i.up)("LocationFilled"),Y=(0,i.up)("el-icon"),A=(0,i.up)("el-button"),J=(0,i.up)("Calendar"),O=(0,i.up)("swiper-slide"),T=(0,i.up)("swiper");return(0,i.wg)(),(0,i.iD)("div",l,[o,(0,i._)("div",r,[(0,i.Wm)(T,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!1,class:"mySwiper"},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.jobFeaturedListData,(function(t,a){return(0,i.wg)(),(0,i.j4)(O,{key:a},{default:(0,i.w5)((function(){return[(0,i._)("div",c,[(0,i._)("div",{class:"featured-jobs-card-images",style:(0,n.j5)(""!=t.logo?"background-image:url("+t.logo+")":"")},[u,t.is_favorite&&1==t.is_favorite?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"featured-jobs-favorite",onClick:function(e){return m.cancelFavorite(1,t.id,a)}},g,8,d)):((0,i.wg)(),(0,i.iD)("div",{key:1,class:"featured-jobs-favorite",onClick:function(e){return m.addFavorite(t.id,1,t.job_title,t.logo,a)}},v,8,_))],4),(0,i._)("div",h,[(0,i.Wm)(U,{to:{path:"/jobs/detail",query:{id:t.id}}},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,n.zw)(t.job_title),1)]})),_:2},1032,["to"])]),(0,i._)("div",p,(0,n.zw)(t.business_name),1),(0,i._)("div",w,[(0,i.Wm)(Y,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(H)]})),_:1}),(0,i.Uk)(" "+(0,n.zw)(t.address),1)]),(0,i._)("div",y,[(0,i._)("view",k,[(0,i._)("view",b,[D,1==t.employment_type?((0,i.wg)(),(0,i.iD)("span",L,"FT")):(0,i.kq)("",!0),2==t.employment_type?((0,i.wg)(),(0,i.iD)("span",C,"PT")):(0,i.kq)("",!0),3==t.employment_type?((0,i.wg)(),(0,i.iD)("span",j,"S")):(0,i.kq)("",!0)]),1==t.sex||2==t.sex?((0,i.wg)(),(0,i.iD)("view",S,[I,1==t.sex?((0,i.wg)(),(0,i.iD)("span",F,"Male")):(0,i.kq)("",!0),2==t.sex?((0,i.wg)(),(0,i.iD)("span",x,"Female")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),z]),(0,i._)("view",W,(0,n.zw)(t.currency)+" "+(0,n.zw)(t.salary_min)+" - "+(0,n.zw)(t.salary_max),1)]),(0,i._)("div",V,[(0,i._)("div",P,[(0,i.Wm)(A,{class:"featured-jobs-apply-btn",round:"",onClick:function(e){return m.applyJobs(t.id)}},{default:(0,i.w5)((function(){return[q]})),_:2},1032,["onClick"])]),(0,i._)("div",Z,[(0,i.Wm)(Y,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(J)]})),_:1}),(0,i.Uk)("  "+(0,n.zw)(e.$filters.howLongFormat(t.c_time)),1)])])])]})),_:2},1024)})),128))]})),_:1})])])}var H=a(73181),Y=a(71911),A=a(30043);Y.ZP.use([Y.tl,Y.pt,Y.W_,Y.LG]);var J={name:"featuredJobs",data:function(){return{jobFeaturedListData:[]}},components:{Swiper:H.t,SwiperSlide:H.o},mounted:function(){this.getJobFeaturedList()},methods:{getJobFeaturedList:function(){var e=this,t={ad_type:2};(0,A.Rn)(t).then((function(t){console.log(t),200===t.code?e.jobFeaturedListData=t.message:console.log(t.msg)}))},applyJobs:function(e){var t=this,a=localStorage.getItem("identity"),i=localStorage.getItem("token");if(1==a){var n={job_id:e,token:i};(0,A.P)(n).then((function(e){200==e.code&&t.$message.success("Apply Success")}))}else this.$message.warning("Only Educator Can Apply")},addFavorite:function(e,t,a,i,n){var s=this,l={token:localStorage.getItem("token"),type:t,type_id:e,type_title:a,type_url:i};(0,A.q8)(l).then((function(e){console.log(e),200==e.code&&(s.$message.success("Success"),s.jobFeaturedListData[n]["is_favorite"]=1)}))},cancelFavorite:function(e,t,a){var i=this,n={token:localStorage.getItem("token"),type:e,type_id:t};(0,A.Bv)(n).then((function(e){console.log(e),200==e.code&&(i.jobFeaturedListData[a]["is_favorite"]=0)}))}}},O=a(48118);const T=(0,O.Z)(J,[["render",U],["__scopeId","data-v-7c214fbb"]]);var $=T},42776:function(e,t,a){a.d(t,{Z:function(){return p}});a(29254);var i=a(66252),n=a(3577),s=function(e){return(0,i.dD)("data-v-5abe61cc"),e=e(),(0,i.Cn)(),e},l={class:"articles-container"},o=s((function(){return(0,i._)("div",{class:"articles-label"},"Latest Industry Articles",-1)})),r={class:"articles-content"},c={class:"articles-item-l"},u={class:"articles-item-r"},d={class:"articles-title"},f={class:"articles-date"};function g(e,t,a,s,g,_){var m=(0,i.up)("el-image"),v=(0,i.up)("el-link");return(0,i.wg)(),(0,i.iD)("div",l,[o,(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.articleListData,(function(t,a){return(0,i.wg)(),(0,i.iD)("div",{class:"articles-item",key:a},[(0,i._)("div",c,[(0,i.Wm)(m,{class:"articles-item-banner",src:""!=t.user_url?t.user_url:t.url,fit:"cover"},null,8,["src"])]),(0,i._)("div",u,[(0,i._)("div",d,[(0,i.Wm)(v,{class:"articles-title-link",href:t.link,target:"_blank",underline:!1},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,n.zw)(t.title),1)]})),_:2},1032,["href"])]),(0,i._)("div",f,(0,n.zw)(e.$filters.newsDateFormat(t.u_time)),1)])])})),128))])])}a(57327),a(41539),a(68309),a(47042);var _=a(30043),m={name:"latestIndustryNews",data:function(){return{articleListData:[]}},mounted:function(){this.getAdsList()},methods:{getAdsList:function(){var e=this,t=localStorage.getItem("identity"),a={page:1,limit:1e4};(0,_.tb)(a).then((function(a){if(console.log(a),200==a.code){var i=a.message,n=[];0!=t&&t||(n=i.filter((function(e){return"guest_industry_news"==e.name}))),1==t&&(n=i.filter((function(e){return"educator_industry_news"==e.name}))),2==t&&(n=i.filter((function(e){return"business_industry_news"==e.name}))),3==t&&(n=i.filter((function(e){return"vendor_industry_news"==e.name})));var s=n[0].data;e.articleListData=s,e.articleListLimitData=s.slice(0,2)}}))}}},v=a(48118);const h=(0,v.Z)(m,[["render",g],["__scopeId","data-v-5abe61cc"]]);var p=h},77051:function(e,t,a){a.r(t),a.d(t,{default:function(){return oe}});var i=a(66252),n=a(3577),s=function(e){return(0,i.dD)("data-v-49d01448"),e=e(),(0,i.Cn)(),e},l={class:"bg"},o={class:"xll-container"},r=["onClick"],c={class:"deals-events-filter-container"},u=s((function(){return(0,i._)("div",{class:"deals-events-filter-label"},"Deals & Events",-1)})),d={class:"deals-events-filter-location"},f={class:"deals-events-filter-tags"},g={class:"deals-container"},_={class:"deals-item-t"},m={class:"deals-item-t-l"},v=["onClick"],h=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart-filled xll-heart-icon"},null,-1)})),p=[h],w=["onClick"],y=s((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart xll-heart-icon"},null,-1)})),k=[y],b={class:"deals-item-name-container"},D=["onClick"],L={class:"deals-item-name"},C={class:"deals-item-b"},j={class:"deals-item-b-l"},S={class:"deals-item-b-r"},I={class:"deals-pagination"};function F(e,t,a,s,h,y){var F=(0,i.up)("el-image"),x=(0,i.up)("el-col"),z=(0,i.up)("el-row"),W=(0,i.up)("el-option"),V=(0,i.up)("el-select"),P=(0,i.up)("featuredJobs"),q=(0,i.up)("featuredDeals"),Z=(0,i.up)("latestIndustryNews"),U=(0,i.up)("el-pagination"),H=(0,i.Q2)("loading");return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",o,[(0,i.Wm)(z,{align:"middle",justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(x,{class:"sub-cate-container",xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.subCateData,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["sub-cate-item",h.sCateId==e.id?"sub-cate-item-active":""]),key:t,onClick:function(t){return y.selectSubCate(e.id)}},[(0,i.Wm)(F,{class:"sub-cate-icon",src:e.icon_url},null,8,["src"]),(0,i._)("span",null,(0,n.zw)(e.identity_name),1)],10,r)})),128))]})),_:1})]})),_:1}),(0,i.Wm)(z,{class:"content-container",align:"top",justify:"center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(x,{xs:24,sm:24,md:8,lg:8,xl:8},{default:(0,i.w5)((function(){return[(0,i._)("div",c,[u,(0,i._)("div",d,[(0,i.Wm)(V,{class:"deals-events-filter-select",modelValue:h.locationValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.locationValue=e}),clearable:"",placeholder:"Location",size:"medium",onChange:y.locationChange},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.locationOptions,(function(e){return(0,i.wg)(),(0,i.j4)(W,{key:e.id,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]),(0,i._)("div",f,[(0,i.Wm)(V,{class:"deals-events-filter-select",modelValue:h.tagValue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.tagValue=e}),clearable:"",multiple:"",placeholder:"Tags",size:"medium",onChange:y.tagChange},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.tagsData,(function(e){return(0,i.wg)(),(0,i.j4)(W,{key:e.id,label:e.name_en,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])])]),(0,i.Wm)(P),(0,i.Wm)(q),(0,i.Wm)(Z)]})),_:1}),(0,i.Wm)(x,{xs:24,sm:24,md:16,lg:16,xl:16},{default:(0,i.w5)((function(){return[(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.dealsListData,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:"deals-item",key:t},[(0,i._)("div",{class:"deals-item-bg",style:(0,n.j5)(""!=e.user_info.header_photo?"background-image:url("+e.user_info.header_photo+")":"")},[(0,i._)("div",_,[(0,i._)("div",m,[e.user_info?((0,i.wg)(),(0,i.j4)(F,{key:0,class:"deals-logo",src:e.user_info.logo},null,8,["src"])):(0,i.kq)("",!0)]),e.is_favorite&&1==e.is_favorite?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"deals-item-t-r",onClick:function(a){return y.cancelFavorite(2,e.id,t)}},p,8,v)):((0,i.wg)(),(0,i.iD)("div",{key:1,class:"deals-item-t-r",onClick:function(a){return y.addFavorite(e.id,2,e.title,e.user_info.logo,t)}},k,8,w))]),(0,i._)("div",b,[(0,i._)("div",{class:"deals-item-title",onClick:function(t){return y.turnDealDetail(e.id)}},(0,n.zw)(e.desc),9,D),(0,i._)("div",L,[e.user_info?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,n.zw)(e.user_info.vendor_name_en),1)],64)):(0,i.kq)("",!0)])])],4),(0,i._)("div",C,[(0,i._)("div",j,[e.vendor_type_icon?((0,i.wg)(),(0,i.j4)(F,{key:0,class:"hot-deal-type-icon",src:e.vendor_type_icon.icon_url},null,8,["src"])):(0,i.kq)("",!0)]),(0,i._)("div",S,(0,n.zw)(e.location),1)])])})),128))]),(0,i._)("div",I,[(0,i.Wm)(U,{layout:"prev, pager, next","default-current-page":1,onSizeChange:y.dealPageSizeChange,onCurrentChange:y.dealPageChange,"current-page":h.dealPage,"page-size":h.dealLimit,total:h.dealTotalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]})),_:1})]})),_:1})])],512)),[[H,h.showLoadingStatus]])}var x=a(88741),z=function(e){return(0,i.dD)("data-v-00813c59"),e=e(),(0,i.Cn)(),e},W={class:"featured-deals-container"},V=z((function(){return(0,i._)("div",{class:"featured-deals-label"},"Featured Deals",-1)})),P={class:"featured-deals-content"},q={class:"hot-deals-item"},Z={class:"hot-deals-item-t"},U={class:"hot-deals-item-t-l"},H=["onClick"],Y=z((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart-filled xll-heart-icon"},null,-1)})),A=[Y],J=["onClick"],O=z((function(){return(0,i._)("i",{class:"iconfont el-icon-alixll-heart xll-heart-icon"},null,-1)})),T=[O],$={class:"hot-deals-item-name-container"},B={class:"hot-deals-item-title"},K={class:"hot-deals-item-name"},N={class:"hot-deals-item-b"},E={class:"hot-deals-item-b-l"},M={class:"hot-deals-item-b-r"};function G(e,t,a,s,l,o){var r=(0,i.up)("el-image"),c=(0,i.up)("router-link"),u=(0,i.up)("swiper-slide"),d=(0,i.up)("swiper");return(0,i.wg)(),(0,i.iD)("div",W,[V,(0,i._)("div",P,[(0,i.Wm)(d,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!1,class:"mySwiper"},{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.dealsListData,(function(e,t){return(0,i.wg)(),(0,i.j4)(u,{key:t},{default:(0,i.w5)((function(){return[(0,i._)("div",q,[(0,i._)("div",{class:"hot-deals-item-bg",style:(0,n.j5)(""!=e.user_info.header_photo?"background-image:url("+e.user_info.header_photo+")":"")},[(0,i._)("div",Z,[(0,i._)("div",U,[e.user_info?((0,i.wg)(),(0,i.j4)(r,{key:0,class:"hot-deals-logo",src:e.user_info.logo},null,8,["src"])):(0,i.kq)("",!0)]),e.is_favorite&&1==e.is_favorite?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"hot-deals-item-t-r",onClick:function(a){return o.cancelFavorite(2,e.id,t)}},A,8,H)):((0,i.wg)(),(0,i.iD)("div",{key:1,class:"hot-deals-item-t-r",onClick:function(a){return o.addFavorite(e.id,2,e.title,e.user_info.logo,t)}},T,8,J))]),(0,i._)("div",$,[(0,i._)("div",B,[(0,i.Wm)(c,{to:{path:"/deals/detail",query:{id:e.id}}},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,n.zw)(e.desc),1)]})),_:2},1032,["to"])]),(0,i._)("div",K,[e.user_info?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,n.zw)(e.user_info.vendor_name_en),1)],64)):(0,i.kq)("",!0)])])],4),(0,i._)("div",N,[(0,i._)("div",E,[e.vendor_type_icon?((0,i.wg)(),(0,i.j4)(r,{key:0,class:"hot-deal-type-icon",src:e.vendor_type_icon.icon_url},null,8,["src"])):(0,i.kq)("",!0)]),(0,i._)("div",M,(0,n.zw)(e.location),1)])])]})),_:2},1024)})),128))]})),_:1})])])}var Q=a(73181),R=a(71911),X=a(30043);R.ZP.use([R.tl,R.pt,R.W_,R.LG]);var ee={name:"featuredDeals",data:function(){return{dealsListData:[]}},components:{Swiper:Q.t,SwiperSlide:Q.o},mounted:function(){this.getFeaturedDealsList()},methods:{getFeaturedDealsList:function(){var e=this,t={};(0,X.dV)(t).then((function(t){console.log(t),200==t.code&&(e.dealsListData=t.message)}))},getDealsList:function(){var e=this,t={page:1,limit:5};(0,X.BZ)(t).then((function(t){console.log(t),200==t.code&&(e.dealsListData=t.message.data)})).catch((function(e){console.log(e.response)}))},addFavorite:function(e,t,a,i,n){var s=this,l={token:localStorage.getItem("token"),type:t,type_id:e,type_title:a,type_url:i};(0,X.q8)(l).then((function(e){console.log(e),200==e.code&&(s.$message.success("Success"),s.dealsListData[n]["is_favorite"]=1)}))},cancelFavorite:function(e,t,a){var i=this,n={token:localStorage.getItem("token"),type:e,type_id:t};(0,X.Bv)(n).then((function(e){console.log(e),200==e.code&&(i.dealsListData[a]["is_favorite"]=0)}))}}},te=a(48118);const ae=(0,te.Z)(ee,[["render",G],["__scopeId","data-v-00813c59"]]);var ie=ae,ne=a(42776),se={name:"index",components:{featuredJobs:x.Z,featuredDeals:ie,latestIndustryNews:ne.Z},data:function(){return{subCateData:[],locationValue:"",locationOptions:[],tagValue:[],tagsData:[],dealsListData:[],dealPage:1,dealLimit:10,dealTotalNum:0,sCateId:0,showLoadingStatus:!0}},mounted:function(){this.getSubCateList(3),this.getTagsList(),this.getDealsAreaList(),this.getDealsList(this.dealPage,this.dealLimit,this.sCateId)},methods:{turnDealDetail:function(e){this.$router.push({path:"/deals/detail",query:{id:e}})},selectSubCate:function(e){this.dealsListData=[],this.showLoadingStatus=!0,this.sCateId==e?this.sCateId=0:this.sCateId=e,this.getDealsList(this.dealPage,this.dealLimit,this.sCateId)},locationChange:function(e){this.dealsListData=[],this.showLoadingStatus=!0,this.locationValue=e,this.getDealsList(this.dealPage,this.dealLimit,this.sCateId)},tagChange:function(e){this.dealsListData=[],this.showLoadingStatus=!0,this.tagValue=e,this.getDealsList(this.dealPage,this.dealLimit,this.sCateId)},getSubCateList:function(e){var t=this,a={pid:e,tree:0};(0,X._k)(a).then((function(e){console.log(e),200==e.code&&(t.subCateData=e.message)}))},getTagsList:function(){var e=this,t={page:1,limit:1e3};(0,X.g_)(t).then((function(t){console.log(t),200==t.code&&(e.tagsData=t.message.data)}))},getDealsList:function(e,t,a){var i=this,n={page:e,limit:t};0!=a&&(n.vendor_type_id=a),""!=this.locationValue&&(n.city=this.locationValue);var s=this.tagValue;s.length>0&&(n.tag_name=this.tagValue),(0,X.BZ)(n).then((function(e){console.log(e),200==e.code&&(i.dealsListData=e.message.data,i.dealTotalNum=e.message.total,i.showLoadingStatus=!1)})).catch((function(e){console.log(e.response)}))},getDealsAreaList:function(){var e=this;(0,X.DP)({}).then((function(t){console.log(t),200==t.code&&(e.locationOptions=t.message)}))},dealPageSizeChange:function(e){console.log(e)},dealPageChange:function(e){this.showLoadingStatus=!0,this.dealPage=e,this.getDealsList(e,this.dealLimit,this.sCateId)},addFavorite:function(e,t,a,i,n){var s=this,l={token:localStorage.getItem("token"),type:t,type_id:e,type_title:a,type_url:i};(0,X.q8)(l).then((function(e){console.log(e),200==e.code&&(s.$message.success("Success"),s.dealsListData[n]["is_favorite"]=1)}))},cancelFavorite:function(e,t,a){var i=this,n={token:localStorage.getItem("token"),type:e,type_id:t};(0,X.Bv)(n).then((function(e){console.log(e),200==e.code&&(i.dealsListData[a]["is_favorite"]=0)}))}}};const le=(0,te.Z)(se,[["render",F],["__scopeId","data-v-49d01448"]]);var oe=le}}]);
//# sourceMappingURL=51-legacy.ee4b51ef.js.map