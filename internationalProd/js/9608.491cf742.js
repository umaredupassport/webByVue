"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[9608],{1207:function(e,a,s){s.r(a),s.d(a,{default:function(){return le}});var t=s(261),i=s(6995),l=s(6252),o=s(6612);const d=e=>((0,l.dD)("data-v-198fe4fe"),e=e(),(0,l.Cn)(),e),n={class:"bg"},r={class:"favorites-container"},c={class:"purchase-btn-contianer"},m=(0,l.Uk)("Back"),g={class:"redeem-container"},u={class:"container"},b={key:0,class:"ads-banner"},p={key:1,class:"ads-desc"},h=d((()=>(0,l._)("div",{class:"ads-desc-1"},"Description:",-1))),v={class:"ads-desc-2"},k={class:"ads-wrap"},_={class:"ads-upload"},y=d((()=>(0,l._)("div",{class:"el-upload__text"},[(0,l.Uk)(" Drop file here or "),(0,l._)("em",null,"click to upload")],-1))),w=d((()=>(0,l._)("div",{class:"el-upload__tip"}," Upload your banner ",-1))),f={key:0},C={class:"ads-link"},D=d((()=>(0,l._)("div",{class:"ads-link-title"},"I would like to link my banner to:",-1))),L={key:0,class:"ads-link-tabs"},j={key:1,class:"ads-link-tabs"},I={key:2,class:"ads-link-tabs"},P={key:3,class:"ads-link-tabs"},T={class:"ads-link-tab-content"},V={key:0,class:"ads-jobs"},q=["onClick"],W={class:"ads-job-title"},$={class:"ads-job-salary"},x={class:"ads-jobs-pg"},U={class:"ads-jobs-pg-l"},S=(0,l.Uk)(" Prev "),z={class:"ads-jobs-pg-m"},E={class:"ads-jobs-pg-r"},J=(0,l.Uk)(" Next "),F={key:1,class:"ads-deals"},A=["onClick"],H={class:"ads-deal-title"},M={key:2,class:"ads-events"},O=["onClick"],Z={class:"ads-event-name"},B={key:3,class:"ads-others"},N={class:"ads-submit"},R=(0,l.Uk)("Submit"),K={class:"ads-container"};function Y(e,a,s,d,Y,Q){const G=i.Z,X=(0,l.up)("el-col"),ee=(0,l.up)("el-button"),ae=(0,l.up)("el-image"),se=(0,l.up)("upload-filled"),te=(0,l.up)("el-icon"),ie=(0,l.up)("el-upload"),le=(0,l.up)("el-input"),oe=(0,l.up)("el-form-item"),de=(0,l.up)("el-form"),ne=(0,l.up)("el-row"),re=t.Z;return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",r,[(0,l.Wm)(ne,{align:"top",justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,l.w5)((()=>[(0,l.Wm)(G)])),_:1}),(0,l.Wm)(X,{class:"list-col",xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l.Wm)(ee,{plain:"",round:"",onClick:a[0]||(a[0]=e=>Q.turnBack())},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l._)("div",g,[(0,l._)("div",u,[Y.adCategoryDetail.ad_category?((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(ae,{class:"ads-banner-image",src:Y.adCategoryDetail.ad_category.image_url},null,8,["src"])])):(0,l.kq)("",!0),Y.adCategoryDetail.ad_category?((0,l.wg)(),(0,l.iD)("div",p,[h,(0,l._)("div",v,(0,o.zw)(Y.adCategoryDetail.ad_category.desc_en),1)])):(0,l.kq)("",!0),(0,l._)("div",k,[(0,l._)("div",_,[(0,l.Wm)(ie,{drag:"",class:"resume-uploader",action:"",headers:Y.uploadHeaders,"show-file-list":!0,"http-request":Q.bannerHttpRequest,"before-upload":Q.beforeUpload},{tip:(0,l.w5)((()=>[w])),default:(0,l.w5)((()=>[(0,l.Wm)(te,{class:"el-icon--upload",size:80},{default:(0,l.w5)((()=>[(0,l.Wm)(se)])),_:1}),y])),_:1},8,["headers","http-request","before-upload"])]),Y.bannerImageUrl?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(ae,{src:Y.bannerImageUrl},null,8,["src"])])):(0,l.kq)("",!0)]),(0,l._)("div",C,[D,0==Y.identity?((0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",8==Y.adsTabValue?"ads-tab-active":""]),onClick:a[1]||(a[1]=e=>Q.adsTabEvent(8))}," Others ",2)])):(0,l.kq)("",!0),1==Y.identity?((0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",8==Y.adsTabValue?"ads-tab-active":""]),onClick:a[2]||(a[2]=e=>Q.adsTabEvent(8))}," Others ",2)])):(0,l.kq)("",!0),2==Y.identity?((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",4==Y.adsTabValue?"ads-tab-active":""]),onClick:a[3]||(a[3]=e=>Q.adsTabEvent(4))}," My Job ",2),(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",2==Y.adsTabValue?"ads-tab-active":""]),onClick:a[4]||(a[4]=e=>Q.adsTabEvent(2))}," My Company ",2),(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",8==Y.adsTabValue?"ads-tab-active":""]),onClick:a[5]||(a[5]=e=>Q.adsTabEvent(8))}," Others ",2)])):(0,l.kq)("",!0),3==Y.identity?((0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",5==Y.adsTabValue?"ads-tab-active":""]),onClick:a[6]||(a[6]=e=>Q.adsTabEvent(5))}," My Deals ",2),(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",6==Y.adsTabValue?"ads-tab-active":""]),onClick:a[7]||(a[7]=e=>Q.adsTabEvent(6))}," My Events ",2),(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",3==Y.adsTabValue?"ads-tab-active":""]),onClick:a[8]||(a[8]=e=>Q.adsTabEvent(3))}," My Profile ",2),(0,l._)("div",{class:(0,o.C_)(["ads-link-tab",8==Y.adsTabValue?"ads-tab-active":""]),onClick:a[9]||(a[9]=e=>Q.adsTabEvent(8))}," Others ",2)])):(0,l.kq)("",!0),(0,l._)("div",T,[4==Y.adsTabValue?((0,l.wg)(),(0,l.iD)("div",V,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Y.myApprovedJobsData,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["ads-job",e.id==Y.typeId?"link-active":""]),key:a,onClick:a=>Q.selectLinkTypeId(e.id)},[(0,l._)("div",W,(0,o.zw)(e.job_title),1),(0,l._)("div",$,(0,o.zw)(e.currency)+" "+(0,o.zw)(e.salary_min)+" - "+(0,o.zw)(e.salary_max),1)],10,q)))),128)),(0,l._)("div",x,[(0,l._)("div",U,[(0,l.Wm)(ee,{disabled:1==Y.jobPage,type:"info",onClick:a[10]||(a[10]=e=>Q.prevJobs())},{default:(0,l.w5)((()=>[S])),_:1},8,["disabled"])]),(0,l._)("div",z,(0,o.zw)(Y.jobCurrentPage)+" / "+(0,o.zw)(Y.jobLastPage),1),(0,l._)("div",E,[(0,l.Wm)(ee,{disabled:Y.jobPage==Y.jobLastPage,type:"info",onClick:a[11]||(a[11]=e=>Q.nextJobs())},{default:(0,l.w5)((()=>[J])),_:1},8,["disabled"])])])])):(0,l.kq)("",!0),5==Y.adsTabValue?((0,l.wg)(),(0,l.iD)("div",F,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Y.myDealsData,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["ads-deal",e.id==Y.typeId?"link-active":""]),key:a,onClick:a=>Q.selectLinkTypeId(e.id)},[(0,l._)("div",H,(0,o.zw)(e.title),1)],10,A)))),128))])):(0,l.kq)("",!0),6==Y.adsTabValue?((0,l.wg)(),(0,l.iD)("div",M,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Y.myEventsData,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["ads-event",e.id==Y.typeId?"link-active":""]),key:a,onClick:a=>Q.selectLinkTypeId(e.id)},[(0,l._)("div",Z,(0,o.zw)(e.name),1)],10,O)))),128))])):(0,l.kq)("",!0),8==Y.adsTabValue?((0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(de,{model:Y.basicForm,rules:Y.basicRules,ref:"basicForm","label-width":"160px","label-position":"top",class:"demo-ruleForm"},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{label:"Name",prop:"name",required:""},{default:(0,l.w5)((()=>[(0,l.Wm)(le,{size:"medium",placeholder:"Name",modelValue:Y.basicForm.name,"onUpdate:modelValue":a[12]||(a[12]=e=>Y.basicForm.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(oe,{label:"Contact #",prop:"contact",required:""},{default:(0,l.w5)((()=>[(0,l.Wm)(le,{size:"medium",placeholder:"Contact #",modelValue:Y.basicForm.contact,"onUpdate:modelValue":a[13]||(a[13]=e=>Y.basicForm.contact=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(oe,{label:"Wechat ID",prop:"wx_id",required:""},{default:(0,l.w5)((()=>[(0,l.Wm)(le,{size:"medium",placeholder:"Wechat ID",modelValue:Y.basicForm.wx_id,"onUpdate:modelValue":a[14]||(a[14]=e=>Y.basicForm.wx_id=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])):(0,l.kq)("",!0)])]),(0,l._)("div",N,[(0,l.Wm)(ee,{class:"ads-submit-btn",type:"primary",onClick:a[15]||(a[15]=e=>Q.submit())},{default:(0,l.w5)((()=>[R])),_:1})])])]),(0,l._)("div",K,[(0,l.Wm)(ae,{src:Y.dashboardAdsImg},null,8,["src"])])])),_:1})])),_:1})]),(0,l.Wm)(re,{show:Y.uploadLoadingStatus,onOnCancel:a[16]||(a[16]=e=>Q.cancelUpload())},null,8,["show"])])}var Q=s(1836),G=s(4116),X=s(4276),ee=s(8005),ae=s.n(ee),se={name:"redeem",components:{meSideMenu:i.Z,xllLoading:t.Z},data(){return{uploadLoadingStatus:!1,dashboardAdsImg:G,uploadActionUrl:"https://api.edupassport.io/api/user/uploadImg",uploadHeaders:{platform:4},uploadData:{token:localStorage.getItem("token")},identity:0,jobPage:1,jobLimit:5,jobLastPage:0,jobCurrentPage:0,myApprovedJobsData:[],myDealsData:[],myEventsData:[],dealPage:1,dealLimit:100,dealLastPage:0,eventPage:1,eventLimit:100,eventLastPage:0,basicForm:{name:"",contact:"",wx_id:""},basicRules:{name:[{required:!0,message:"Please fill out your name.",trigger:"blur"}],contact:[{required:!0,message:"Please enter your contact",trigger:"blur"}],wx_id:[{required:!1,message:"Please enter your wechat id",trigger:"blur"}]},adsTabValue:0,type:0,typeId:0,bannerImageUrl:"",adCategoryDetail:{}}},mounted(){let e=this.$route.query.info,a=(0,X.Jx)(e);this.adCategoryDetail=JSON.parse(a);let s=localStorage.getItem("identity");this.identity=s,2==s&&this.getJobListApproved(this.jobPage,this.jobLimit),3==s&&(this.getDealsList(this.dealPage,this.dealLimit),this.getEventsList(this.eventPage,this.eventLimit))},methods:{turnBack(){this.$router.push("/me/ads")},bannerHttpRequest(e){let a=this;new(ae())(e.file,{quality:.6,success(e){const s=new FormData;s.append("token",localStorage.getItem("token"));let t="no";"yes"===t&&(s.append("file[]",e,e.name),(0,Q._p)(s).then((e=>{if(200==e.code){let s=e.data[0]["file_url"];a.uploadLoadingStatus=!1,a.bannerImageUrl=s}})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))),"no"===t&&(s.append("file",e,e.name),(0,Q.Qz)(s).then((e=>{if(200==e.code){let s=e.message.file_path;a.uploadLoadingStatus=!1,a.bannerImageUrl=s}})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)})))},error(e){console.log(e.message)}})},beforeUpload(e){this.uploadLoadingStatus=!0;const a=e.size/1024/1024<20;return a||this.$message.error("Avatar picture size can not exceed 20MB"),a},cancelUpload(){this.uploadLoadingStatus=!1},getJobListApproved(e,a){let s=localStorage.getItem("token"),t={token:s,page:e,limit:a,status:0};(0,Q.pg)(t).then((e=>{if(200==e.code){let a=e.message.data;this.jobLastPage=e.message.last_page,this.jobCurrentPage=e.message.current_page,this.myApprovedJobsData=a}else this.$message.error(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))},getDealsList(e,a){let s={token:localStorage.getItem("token"),page:e,limit:a};(0,Q.Jq)(s).then((e=>{console.log(e),200==e.code?this.myDealsData=e.message.data:this.$message.error(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))},getEventsList(e,a){let s={token:localStorage.getItem("token"),page:e,limit:a};(0,Q.J4)(s).then((e=>{console.log(e),200==e.code?this.myEventsData=e.message.data:this.$message.error(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))},submit(){let e=this.adCategoryDetail,a=this.adsTabValue,s=this.typeId,t=this.bannerImageUrl,i=e.ad_category_id,l=e.id;if(""==t)return this.$message.error("Please upload your banner");let o={ad_category_id:i,my_ads_id:l,type:a,type_id:s,image_url:t,token:localStorage.getItem("token")};8==a&&this.$refs["basicForm"].validate((e=>{if(!e)return console.log("error submit!!"),this.submitLoginLoadingStatus=!1,!1;o.name=this.basicForm.name,o.contact=this.basicForm.contact,o.wx_id=this.basicForm.wx_id})),(0,Q.SQ)(o).then((e=>{console.log(e),200==e.code?this.$message.success(e.msg):this.$message.error(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))},adsTabEvent(e){this.adsTabValue=e,this.typeId=0,2!=e&&3!=e||(this.typeId=localStorage.getItem("uid")),8==e&&console.log("8")},selectLinkTypeId(e){this.typeId=e},prevJobs(){this.jobPage--,this.jobPage<=1&&(this.jobPage=1),this.getJobListApproved(this.jobPage,this.jobLimit)},nextJobs(){this.jobPage++,this.jobPage>=this.jobLastPage&&(this.jobPage=this.jobLastPage),this.getJobListApproved(this.jobPage,this.jobLimit)}}},te=s(8118);const ie=(0,te.Z)(se,[["render",Y],["__scopeId","data-v-198fe4fe"]]);var le=ie},4116:function(e,a,s){e.exports=s.p+"img/2.58f8e2b8.png"}}]);
//# sourceMappingURL=9608.491cf742.js.map