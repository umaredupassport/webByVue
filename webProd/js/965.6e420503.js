"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[965],{3965:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var a=i(6252),l=i(3577);const s=t=>((0,a.dD)("data-v-4f6b89fc"),t=t(),(0,a.Cn)(),t),o={class:"us-bg"},n=s((()=>(0,a._)("h1",null,"Industry News",-1))),d=s((()=>(0,a._)("div",{class:"news-t"},[(0,a._)("div",{class:"news-left-line"}),(0,a._)("div",{class:"news-label"},"Industry News")],-1))),r={class:"news-content"},c={class:"news-item-img-container"},u={class:"news-item-title"},g={class:"news-item-desc"},h={class:"news-item-operation"},w={class:"news-item-readmore"},m=(0,a.Uk)("Continue Reading "),p={class:"social-share-container"},_=s((()=>(0,a._)("i",{class:"iconfont el-icon-alitwitter xll-icon"},null,-1))),v=s((()=>(0,a._)("i",{class:"iconfont el-icon-alilinkedin xll-icon"},null,-1))),f=s((()=>(0,a._)("i",{class:"iconfont el-icon-alifacebook xll-icon"},null,-1)));function S(t,e,i,s,S,b){const k=(0,a.up)("el-col"),y=(0,a.up)("el-row"),C=(0,a.up)("el-image"),x=(0,a.up)("el-button"),L=(0,a.up)("Share"),W=(0,a.up)("el-icon"),q=(0,a.up)("ShareNetwork"),D=(0,a.up)("el-pagination"),z=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(y,{class:"banner-row",gutter:0,align:"middle",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"banner-bg",xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,a.w5)((()=>[n])),_:1})])),_:1}),(0,a.wy)((0,a.Wm)(y,{class:"news-container",align:"middle",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,a.w5)((()=>[d,(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(S.blogListData,((t,i)=>((0,a.wg)(),(0,a.iD)("div",{class:"news-item",key:i},[(0,a._)("div",c,[(0,a.Wm)(C,{class:"news-item-img",src:t.image_url,fit:"cover"},null,8,["src"])]),(0,a._)("div",u,(0,l.zw)(t.title),1),(0,a._)("div",g,(0,l.zw)(t.desc),1),(0,a._)("div",h,[(0,a._)("div",w,[(0,a.Wm)(x,{type:"primary",round:"",onClick:e=>b.turnDetail(t.id)},{default:(0,a.w5)((()=>[m])),_:2},1032,["onClick"])]),(0,a._)("div",p,[(0,a._)("div",{class:"social-share-icon-container",onMouseover:e[0]||(e[0]=t=>S.showSocialShareExpandStatus=!0),onClick:e[1]||(e[1]=t=>S.showSocialShareExpandStatus=!S.showSocialShareExpandStatus)},[(0,a.Wm)(W,{size:30},{default:(0,a.w5)((()=>[(0,a.Wm)(L)])),_:1})],32),S.showSocialShareExpandStatus?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"social-share-icon-expand",onMouseleave:e[2]||(e[2]=t=>S.showSocialShareExpandStatus=!1)},[(0,a.Wm)(q,{network:"Twitter",url:S.locationUrl+"/blog/detail?id="+t.id,title:void 0==t.title?"":t.title,hashtags:void 0==t.tags?"":t.tags},{default:(0,a.w5)((()=>[_])),_:2},1032,["url","title","hashtags"]),(0,a.Wm)(q,{network:"LinkedIn",url:S.locationUrl+"/blog/detail?id="+t.id,title:void 0==t.title?"":t.title},{default:(0,a.w5)((()=>[v])),_:2},1032,["url","title"]),(0,a.Wm)(q,{network:"Facebook",url:S.locationUrl+"/blog/detail?id="+t.id,title:void 0==t.title?"":t.title,description:void 0==t.content?"":t.content,quote:void 0==t.title?"":t.title,hashtags:void 0==t.tags?"":t.tags},{default:(0,a.w5)((()=>[f])),_:2},1032,["url","title","description","quote","hashtags"])],32)):(0,a.kq)("",!0)])])])))),128))]),(0,a._)("div",null,[(0,a.Wm)(D,{layout:"prev, pager, next","default-current-page":1,onSizeChange:b.pageSizeChange,onCurrentChange:b.pageChange,"current-page":S.page,"page-size":S.limit,total:S.totalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),_:1})])),_:1},512),[[z,S.showLoadingStatus]])])}var b=i(43),k={name:"news",beforeRouteUpdate(t){console.log(t,"=====");let e=t.query.cate_id,i=t.query.admin_id;this.getBlogList(e,i)},data(){return{blogListData:[],showSocialShareExpandStatus:!1,locationUrl:"",page:1,limit:5,totalNum:0,showLoadingStatus:!0}},created(){let t=this.$route.query.cate_id,e=this.$route.query.admin_id;this.getBlogList(t,e)},mounted(){console.log("abc");let t=window.location.href,e=t.split("/");this.locationUrl=e[0]+"//"+e[2]},methods:{pageSizeChange(t){console.log(t)},pageChange(t){this.showLoadingStatus=!0,this.page=t;let e=this.$route.query.cate_id,i=this.$route.query.admin_id;this.getBlogList(e,i)},getBlogList(t,e){let i={page:this.page,limit:this.limit};t&&void 0!=t&&(i.cate_id=t),e&&void 0!=e&&(i.admin_id=e),(0,b.N1)(i).then((t=>{console.log(t),200==t.code&&(this.blogListData=t.message.data,this.totalNum=t.message.total,this.showLoadingStatus=!1)}))},turnDetail(t){this.$router.push({path:"/blog/detail",query:{id:t}})}}},y=i(8118);const C=(0,y.Z)(k,[["render",S],["__scopeId","data-v-4f6b89fc"]]);var x=C}}]);
//# sourceMappingURL=965.6e420503.js.map