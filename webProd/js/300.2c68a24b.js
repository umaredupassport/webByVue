"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[300],{5860:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(6252),i=o(3577);const s={class:"profile-l-container"},n={class:"profile-photo-container"},l={class:"l-container"},r={class:"l-item"},c=(0,a.Uk)("Overview"),u={class:"l-item"},d=(0,a.Uk)("My Favorites"),f={class:"l-item"},m=(0,a.Uk)("My Account & Profile"),v=(0,a.Uk)("My Account & Profile"),g=(0,a.Uk)("My Account & Profile"),_={key:0,class:"l-item"},p=(0,a.Uk)("My Jobs"),w={key:1,class:"l-item"},y=(0,a.Uk)("My Deals"),k={key:2,class:"l-item"},h=(0,a.Uk)("Post a Job"),b={key:3,class:"l-item"},x=(0,a.Uk)("Offer a Deal"),W={class:"l-item"},D=(0,a.Uk)("Privacy Policy"),P={key:4,class:"l-item"},U=(0,a.Uk)("My Applications");function A(e,t,o,A,I,M){const q=(0,a.up)("el-image"),j=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",n,[(0,a.Wm)(q,{class:"profile-photo",src:""!=M.userAvatar?M.userAvatar:I.defaultAvatar},null,8,["src"]),(0,a._)("div",null,[(0,a._)("span",null,(0,i.zw)(M.username),1)])]),(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(j,{to:"/overview",exact:""},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("div",u,[(0,a.Wm)(j,{to:"/favorites",exact:""},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("div",f,[1==M.identity?((0,a.wg)(),(0,a.j4)(j,{key:0,to:"/educator/profile",exact:""},{default:(0,a.w5)((()=>[m])),_:1})):(0,a.kq)("",!0),2==M.identity?((0,a.wg)(),(0,a.j4)(j,{key:1,to:"/business/profile",exact:""},{default:(0,a.w5)((()=>[v])),_:1})):(0,a.kq)("",!0),3==M.identity?((0,a.wg)(),(0,a.j4)(j,{key:2,to:"/vendor/profile",exact:""},{default:(0,a.w5)((()=>[g])),_:1})):(0,a.kq)("",!0)]),2==M.identity?((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(j,{to:"/jobs/myJobs",exact:""},{default:(0,a.w5)((()=>[p])),_:1})])):(0,a.kq)("",!0),3==M.identity?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(j,{to:"/deals/myDeals",exact:""},{default:(0,a.w5)((()=>[y])),_:1})])):(0,a.kq)("",!0),2==M.identity?((0,a.wg)(),(0,a.iD)("div",k,[(0,a.Wm)(j,{to:{path:"/jobs/post",query:{version_time:I.versionTime}},exact:""},{default:(0,a.w5)((()=>[h])),_:1},8,["to"])])):(0,a.kq)("",!0),3==M.identity?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(j,{to:"/deals/offer",exact:""},{default:(0,a.w5)((()=>[x])),_:1})])):(0,a.kq)("",!0),(0,a._)("div",W,[(0,a.Wm)(j,{to:"/privacy/policy",exact:""},{default:(0,a.w5)((()=>[D])),_:1})]),2==M.identity?((0,a.wg)(),(0,a.iD)("div",P,[(0,a.Wm)(j,{to:"/",exact:""},{default:(0,a.w5)((()=>[U])),_:1})])):(0,a.kq)("",!0)])])}var I=o(2325),M=o(43),q=o(5323),j={name:"meSideMenu",data(){return{defaultAvatar:q,accountInfo:{},accountPhotoValue:"",versionTime:(0,I.O1)()}},computed:{username:{get(){return this.$store.state.username}},userAvatar:{get(){return this.$store.state.userAvatar}},identity:{get(){return this.$store.state.identity}}},mounted(){},methods:{getBasicInfo(){let e=localStorage.getItem("uid"),t=localStorage.getItem("identity"),o={id:e,token:localStorage.getItem("token")};(0,M.zP)(o).then((e=>{console.log(e),200==e.code&&(this.phone=e.message.phone,1==t&&e.message.educator_info&&(this.accountInfo=e.message.educator_info,this.accountPhotoValue=e.message.educator_info.profile_photo),2==t&&e.message.business_info&&(this.accountInfo=e.message.business_info,this.accountPhotoValue=e.message.business_info.logo),3==t&&e.message.vendor_info&&(this.accountInfo=e.message.vendor_info,this.accountPhotoValue=e.message.vendor_info.logo))}))}}},S=o(8118);const V=(0,S.Z)(j,[["render",A],["__scopeId","data-v-5dba358c"]]);var Z=V},6300:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var a=o(6252);const i=e=>((0,a.dD)("data-v-684f1251"),e=e(),(0,a.Cn)(),e),s={class:"container"},n=i((()=>(0,a._)("iframe",{width:"90%",height:"800",src:"https://www.unilei.cn/policy.pdf",frameborder:"0"},"\r\n\r\n        ",-1)));function l(e,t,o,i,l,r){const c=(0,a.up)("meSideMenu"),u=(0,a.up)("el-col"),d=(0,a.up)("el-row");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,{align:"top",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{xs:4,sm:4,md:4,lg:4,xl:4},{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1}),(0,a.Wm)(u,{xs:20,sm:20,md:20,lg:20,xl:20},{default:(0,a.w5)((()=>[n])),_:1})])),_:1})])}var r=o(5860),c={name:"policy",components:{meSideMenu:r.Z},data(){return{}}},u=o(8118);const d=(0,u.Z)(c,[["render",l],["__scopeId","data-v-684f1251"]]);var f=d}}]);
//# sourceMappingURL=300.2c68a24b.js.map