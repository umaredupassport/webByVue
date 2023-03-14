"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[5100],{5100:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var o=a(6252),n=a(6612);const l=e=>((0,o.dD)("data-v-1e5a6c22"),e=e(),(0,o.Cn)(),e),s={class:"event-detail-bg"},i=l((()=>(0,o._)("h3",{class:"event-label"},"Event Details",-1))),r={class:"event-container"},d={class:"event-detail"},m={class:"event-title"},c=l((()=>(0,o._)("div",{class:"event-title-underline"},null,-1))),u={class:"event-desc"},v={class:"event-tags"},g={key:0,class:"event-tag"},_={key:1,class:"event-tag"},p={key:2,class:"event-tag"},k={key:3,class:"event-tag"},b={key:4,class:"event-tag"},D={key:5,class:"event-tag"},w={key:6,class:"event-tag"},f={key:7,class:"event-tag"},h={class:"event-location"},y={key:0,class:"event-date"},q={class:"event-date"},F={class:"event-date"},z={class:"event-time"},W={class:"event-date"},V={key:0,class:"event-detail-form"},S={class:"event-detail-form-input"},E={class:"event-detail-form-item2"},I=l((()=>(0,o._)("span",null,"Bookings",-1))),L={class:"submit-btn-container"},$=(0,o.Uk)(" Book "),B=(0,o.Uk)(" Inquiries "),U={key:0},x={class:"book-applications-container"},P=l((()=>(0,o._)("h4",null,"Booked List",-1))),A={class:"book-applications"},j={class:"book-application-l"},C={class:"book-application-r"},H={class:"vendor-info"},O=l((()=>(0,o._)("div",{class:"vendor-label"},"Vendor Bio",-1))),R=l((()=>(0,o._)("div",{class:"vendor-label-underline"},null,-1))),Y={class:"vendor-content"},N={key:0,class:"event-flyer"};function T(e,t,a,l,T,K){const Z=(0,o.up)("el-image"),G=(0,o.up)("el-col"),J=(0,o.up)("el-row"),M=(0,o.up)("el-input"),Q=(0,o.up)("el-form-item"),X=(0,o.up)("el-input-number"),ee=(0,o.up)("el-form"),te=(0,o.up)("el-button"),ae=(0,o.up)("el-avatar");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(J,{class:"detail-banner-row",gutter:0,align:"middle",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{class:"detail-banner-bg",xs:24,sm:24,md:24,lg:24,xl:24},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{src:T.detailBannerImg,fit:"cover"},null,8,["src"])])),_:1})])),_:1}),(0,o.Wm)(J,{class:"event-detail-row",gutter:0,align:"top",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{class:"event-detail-container",xs:24,sm:16,md:16,lg:16,xl:16},{default:(0,o.w5)((()=>[i,(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("div",m,(0,n.zw)(T.eventData.name),1),c,(0,o._)("div",u,(0,n.zw)(T.eventData.desc),1),(0,o._)("div",v,[1==T.eventData.is_online?((0,o.wg)(),(0,o.iD)("div",g,"Online")):(0,o.kq)("",!0),2==T.eventData.is_online?((0,o.wg)(),(0,o.iD)("div",_,"Offline")):(0,o.kq)("",!0),3==T.eventData.is_online?((0,o.wg)(),(0,o.iD)("div",p,"Both")):(0,o.kq)("",!0),1==T.eventData.is_all?((0,o.wg)(),(0,o.iD)("div",k,"Social")):(0,o.kq)("",!0),2==T.eventData.is_all?((0,o.wg)(),(0,o.iD)("div",b,"Professional")):(0,o.kq)("",!0),T.eventData.countries?((0,o.wg)(),(0,o.iD)("div",D,(0,n.zw)(T.eventData.countries.name),1)):(0,o.kq)("",!0),T.eventData.states?((0,o.wg)(),(0,o.iD)("div",w,(0,n.zw)(T.eventData.states.name),1)):(0,o.kq)("",!0),T.eventData.towns?((0,o.wg)(),(0,o.iD)("div",f,(0,n.zw)(T.eventData.towns.name),1)):(0,o.kq)("",!0)]),(0,o._)("div",h,[2==T.eventData.is_online||3==T.eventData.is_online?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Uk)(" Location: "+(0,n.zw)(T.eventData.location),1)],64)):(0,o.kq)("",!0)]),1==T.eventData.is_online||3==T.eventData.is_online?((0,o.wg)(),(0,o.iD)("div",y," Event Link: "+(0,n.zw)(T.eventData.online_url),1)):(0,o.kq)("",!0),(0,o._)("div",q," Event Ticket Price: "+(0,n.zw)(T.eventData.pay_money),1),(0,o._)("div",F," Date: "+(0,n.zw)(e.$filters.ymdFormatEvent(T.eventData.date)),1),(0,o._)("div",z," Time: "+(0,n.zw)(e.$filters.timeFormatEvent(T.eventData.start_time,T.eventData.end_time)),1),(0,o._)("div",W," Venue: "+(0,n.zw)(T.eventData.event_place),1)]),1==T.tValue?((0,o.wg)(),(0,o.iD)("div",V,[(0,o.Wm)(ee,{model:T.bookForm,rules:T.bookRules,ref:"bookForm","label-width":"0","label-position":"top",class:"demo-ruleForm"},{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o._)("div",E,[(0,o.Wm)(Q,{prop:"first_name",required:""},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{size:"medium",placeholder:"First Name",modelValue:T.bookForm.first_name,"onUpdate:modelValue":t[0]||(t[0]=e=>T.bookForm.first_name=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(Q,{prop:"last_name",required:""},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{size:"medium",placeholder:"Last Name",modelValue:T.bookForm.last_name,"onUpdate:modelValue":t[1]||(t[1]=e=>T.bookForm.last_name=e)},null,8,["modelValue"])])),_:1})]),(0,o.Wm)(Q,{prop:"contact",required:""},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{size:"medium",placeholder:"Email",modelValue:T.bookForm.contact,"onUpdate:modelValue":t[2]||(t[2]=e=>T.bookForm.contact=e)},null,8,["modelValue"])])),_:1})]),(0,o.Wm)(Q,{class:"event-detail-form-book",prop:"bookings",required:""},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{modelValue:T.bookForm.bookings,"onUpdate:modelValue":t[3]||(t[3]=e=>T.bookForm.bookings=e),size:"large"},null,8,["modelValue"]),I])),_:1})])),_:1},8,["model","rules"]),(0,o._)("div",L,[(0,o.Wm)(te,{class:"submit-btn",type:"primary",round:"",loading:T.submitLoadingStatus,onClick:t[4]||(t[4]=e=>K.submitForm("bookForm"))},{default:(0,o.w5)((()=>[$])),_:1},8,["loading"]),(0,o.Wm)(te,{class:"inquire-btn",type:"primary",round:""},{default:(0,o.w5)((()=>[B])),_:1})])])):(0,o.kq)("",!0)]),2==T.tValue?((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",x,[P,(0,o._)("div",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(T.eventApplicationsData,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"book-application",key:t},[(0,o._)("div",j,(0,n.zw)(e.first_name)+" "+(0,n.zw)(e.last_name),1),(0,o._)("div",C,(0,n.zw)(e.contact),1)])))),128))])])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(G,{class:"vendor-detail-bg",xs:24,sm:8,md:8,lg:8,xl:8},{default:(0,o.w5)((()=>[(0,o._)("div",H,[O,R,(0,o._)("div",Y,[(0,o.Wm)(ae,{class:"vendor-company-logo",src:T.eventData.third_company_logo?T.eventData.third_company_logo:T.eventData.company_logo},null,8,["src"]),(0,o._)("p",null,[T.eventData.company?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Uk)((0,n.zw)(T.eventData.company.desc),1)],64)):(0,o.kq)("",!0)])])]),T.eventData.file?((0,o.wg)(),(0,o.iD)("div",N,[(0,o.Wm)(Z,{src:T.eventData.file,class:"event-flyer-img"},null,8,["src"])])):(0,o.kq)("",!0)])),_:1})])),_:1})])}var K=a(8802),Z=a(1836),G={name:"detail",setup(){},data(){return{bookForm:{first_name:"",last_name:"",contact:"",bookings:1,apply_user_id:void 0,user_id:void 0,event_id:void 0},bookRules:{first_name:[{required:!0,message:"Please input",trigger:"blur"}],last_name:[{required:!0,message:"Please input",trigger:"blur"}],contact:[{required:!0,message:"Please input",trigger:"blur"}],bookings:[{required:!0,message:"Please input",trigger:"change"}]},detailBannerImg:K,eventData:{},submitLoadingStatus:!1,tValue:0,eventApplicationsData:[]}},mounted(){let e=this.$route.query.id,t=localStorage.getItem("token"),a=this.$route.query.t;this.tValue=a,2==a&&this.getEventApplications(e),t&&(this.bookForm.first_name=localStorage.getItem("first_name"),this.bookForm.last_name=localStorage.getItem("last_name"),this.bookForm.contact=localStorage.getItem("email")),this.getEventDetail(e)},methods:{getEventApplications(e){let t={event_id:e};(0,Z.wR)(t).then((e=>{console.log(e),200==e.code&&(this.eventApplicationsData=e.message.data)})).catch((e=>{console.log(e)}))},getEventDetail(e){let t={event_id:e};(0,Z.j1)(t).then((e=>{console.log(e),200==e.code&&(this.eventData=e.message)})).catch((e=>{console.log(e)}))},resetBookForm(){this.bookForm={first_name:"",last_name:"",contact:"",bookings:1,user_id:void 0,event_id:void 0}},submitForm(e){let t=localStorage.getItem("uid");this.submitLoadingStatus=!0,this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),this.submitLoadingStatus=!1,!1;{t&&(this.bookForm.apply_user_id=t),this.bookForm.user_id=this.eventData.user_id,this.bookForm.event_id=this.$route.query.id;let e=Object.assign({},this.bookForm);(0,Z.i$)(e).then((e=>{console.log(e),200==e.code&&(this.$message.success("Success"),this.submitLoadingStatus=!1)})).catch((e=>{console.log(e),this.$message.error(e.msg)})),console.log("submit")}}))}}},J=a(8118);const M=(0,J.Z)(G,[["render",T],["__scopeId","data-v-1e5a6c22"]]);var Q=M},8802:function(e,t,a){e.exports=a.p+"img/banner.1233c215.png"}}]);
//# sourceMappingURL=5100.89aeda80.js.map