"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[79],{4891:function(e,a,o){o.d(a,{Z:function(){return M}});var t=o(6252),s=o(3577);const l={class:"profile-l-container"},i={class:"profile-photo-container"},n={class:"l-container"},r={class:"l-item"},u=(0,t.Uk)("Overview"),c={class:"l-item"},m=(0,t.Uk)("My Favorites"),d={class:"l-item"},f=(0,t.Uk)("My Account & Profile"),p=(0,t.Uk)("My Account & Profile"),_=(0,t.Uk)("My Account & Profile"),g={key:0,class:"l-item"},b=(0,t.Uk)("My Jobs"),v={key:1,class:"l-item"},h=(0,t.Uk)("My Deals"),w={key:2,class:"l-item"},k=(0,t.Uk)("Post a Job"),y={key:3,class:"l-item"},U=(0,t.Uk)("Offer a Deal"),W={class:"l-item"},P=(0,t.Uk)("Privacy Policy"),F={key:4,class:"l-item"},I=(0,t.Uk)("My Applications");function x(e,a,o,x,D,V){const S=(0,t.up)("el-image"),q=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",i,[V.userAvatar?((0,t.wg)(),(0,t.j4)(S,{key:0,class:"profile-photo",src:V.userAvatar},null,8,["src"])):(0,t.kq)("",!0),(0,t._)("div",null,[(0,t._)("span",null,(0,s.zw)(V.username),1)])]),(0,t._)("div",n,[(0,t._)("div",r,[(0,t.Wm)(q,{to:"/overview",exact:""},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t._)("div",c,[(0,t.Wm)(q,{to:"/favorites",exact:""},{default:(0,t.w5)((()=>[m])),_:1})]),(0,t._)("div",d,[1==V.identity?((0,t.wg)(),(0,t.j4)(q,{key:0,to:"/educator/profile",exact:""},{default:(0,t.w5)((()=>[f])),_:1})):(0,t.kq)("",!0),2==V.identity?((0,t.wg)(),(0,t.j4)(q,{key:1,to:"/business/profile",exact:""},{default:(0,t.w5)((()=>[p])),_:1})):(0,t.kq)("",!0),3==V.identity?((0,t.wg)(),(0,t.j4)(q,{key:2,to:"/vendor/profile",exact:""},{default:(0,t.w5)((()=>[_])),_:1})):(0,t.kq)("",!0)]),2==V.identity?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(q,{to:"/jobs/myJobs",exact:""},{default:(0,t.w5)((()=>[b])),_:1})])):(0,t.kq)("",!0),3==V.identity?((0,t.wg)(),(0,t.iD)("div",v,[(0,t.Wm)(q,{to:"/deals/myDeals",exact:""},{default:(0,t.w5)((()=>[h])),_:1})])):(0,t.kq)("",!0),2==V.identity?((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Wm)(q,{to:{path:"/jobs/post",query:{version_time:D.versionTime}},exact:""},{default:(0,t.w5)((()=>[k])),_:1},8,["to"])])):(0,t.kq)("",!0),3==V.identity?((0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)(q,{to:"/deals/offer",exact:""},{default:(0,t.w5)((()=>[U])),_:1})])):(0,t.kq)("",!0),(0,t._)("div",W,[(0,t.Wm)(q,{to:"/privacy/policy",exact:""},{default:(0,t.w5)((()=>[P])),_:1})]),2==V.identity?((0,t.wg)(),(0,t.iD)("div",F,[(0,t.Wm)(q,{to:"/",exact:""},{default:(0,t.w5)((()=>[I])),_:1})])):(0,t.kq)("",!0)])])}var D=o(2325),V=o(43),S={name:"meSideMenu",data(){return{accountInfo:{},accountPhotoValue:"",versionTime:(0,D.O1)()}},computed:{username:{get(){return this.$store.state.username}},userAvatar:{get(){return this.$store.state.userAvatar}},identity:{get(){return this.$store.state.identity}}},mounted(){},methods:{getBasicInfo(){let e=localStorage.getItem("uid"),a=localStorage.getItem("identity"),o={id:e,token:localStorage.getItem("token")};(0,V.zP)(o).then((e=>{console.log(e),200==e.code&&(this.phone=e.message.phone,1==a&&e.message.educator_info&&(this.accountInfo=e.message.educator_info,this.accountPhotoValue=e.message.educator_info.profile_photo),2==a&&e.message.business_info&&(this.accountInfo=e.message.business_info,this.accountPhotoValue=e.message.business_info.logo),3==a&&e.message.vendor_info&&(this.accountInfo=e.message.vendor_info,this.accountPhotoValue=e.message.vendor_info.logo))}))}}},q=o(8118);const A=(0,q.Z)(S,[["render",x],["__scopeId","data-v-834530f6"]]);var M=A},7079:function(e,a,o){o.r(a),o.d(a,{default:function(){return w}});var t=o(6252);const s={class:"bg"},l={class:"basic-container"},i={class:"basic-breadcrumb-container"},n=(0,t.Uk)("Home"),r=(0,t.Uk)("Profile"),u=(0,t.Uk)("Basic"),c={class:"basic-form"},m={key:1,class:"el-icon-plus avatar-uploader-icon"},d=(0,t.Uk)(" Submit "),f=(0,t.Uk)("Reset");function p(e,a,o,p,_,g){const b=(0,t.up)("meSideMenu"),v=(0,t.up)("el-col"),h=(0,t.up)("el-breadcrumb-item"),w=(0,t.up)("el-breadcrumb"),k=(0,t.up)("el-input"),y=(0,t.up)("el-form-item"),U=(0,t.up)("el-image"),W=(0,t.up)("el-upload"),P=(0,t.up)("el-button"),F=(0,t.up)("el-form"),I=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",l,[(0,t.Wm)(I,{align:"top",justify:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,t.w5)((()=>[(0,t.Wm)(b)])),_:1}),(0,t.Wm)(v,{class:"basic-r-container",xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(w,{separator:"/"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{to:{path:"/"}},{default:(0,t.w5)((()=>[n])),_:1}),(0,t.Wm)(h,{to:{path:"/vendor/profile"}},{default:(0,t.w5)((()=>[r])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[u])),_:1})])),_:1})]),(0,t._)("div",c,[(0,t.Wm)(F,{ref:"basicForm",model:_.basicForm,rules:_.basicRules,"label-width":"120px","label-position":"top",class:"demo-ruleForm"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{label:"Company Name",prop:"vendor_name_en"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:_.basicForm.vendor_name_en,"onUpdate:modelValue":a[0]||(a[0]=e=>_.basicForm.vendor_name_en=e),placeholder:"Company Name"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(y,{label:"Legal Company Name"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:_.basicForm.legal_company_name,"onUpdate:modelValue":a[1]||(a[1]=e=>_.basicForm.legal_company_name=e),placeholder:"Legal Company Name"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(y,{label:"Business Registration ID"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:_.basicForm.busin_reg_num,"onUpdate:modelValue":a[2]||(a[2]=e=>_.basicForm.busin_reg_num=e),placeholder:"Business Registration ID"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(y,{label:"Business License"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{class:"profile-uploader",action:_.uploadActionUrl,headers:_.uploadHeaders,data:_.uploadData,"show-file-list":!1,name:"file[]","on-success":g.handleProfilePhotoSuccess,"before-upload":g.beforeProfilePhotoUpload},{default:(0,t.w5)((()=>[_.businessRegImgUrl?((0,t.wg)(),(0,t.j4)(U,{key:0,src:_.businessRegImgUrl,class:"profile-avatar"},null,8,["src"])):((0,t.wg)(),(0,t.iD)("i",m))])),_:1},8,["action","headers","data","on-success","before-upload"])])),_:1}),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,{type:"primary",onClick:a[3]||(a[3]=e=>g.submitForm("basicForm"))},{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)(P,{onClick:a[4]||(a[4]=e=>g.resetForm("basicForm"))},{default:(0,t.w5)((()=>[f])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1})])),_:1})])])}var _=o(4891),g=o(43),b={name:"legalInfo",components:{meSideMenu:_.Z},data(){return{uploadActionUrl:"http://dev.api.eslpassport.com/api/user/uploadImg",uploadHeaders:{platform:4},uploadData:{token:localStorage.getItem("token")},businessRegImgUrl:"",basicForm:{vendor_name_en:"",legal_company_name:"",busin_reg_num:"",busin_reg_img:"",token:localStorage.getItem("token")},basicRules:{vendor_name_en:[{required:!0,message:"Please input",trigger:"blur"}]}}},mounted(){},methods:{handleProfilePhotoSuccess(e,a){this.businessRegImgUrl=URL.createObjectURL(a.raw),this.basicForm.busin_reg_img=e.data[0]["file_url"]},beforeProfilePhotoUpload(e){const a=e.size/1024/1024<20;return a||this.$message.error("Avatar picture size can not exceed 20MB"),a},submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;{let e=Object.assign({},this.basicForm);(0,g.YS)(e).then((e=>{console.log(e),200==e.code&&this.$router.push("/vendor/profile")}))}}))},resetForm(e){this.$refs[e].resetFields()},handleChange(e){console.log(e)}}},v=o(8118);const h=(0,v.Z)(b,[["render",p],["__scopeId","data-v-45ab7013"]]);var w=h}}]);
//# sourceMappingURL=79.4b3487a3.js.map