(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[155],{14896:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var a=n(66252),o=n(3577),i={class:"profile-l-container"},s={class:"profile-photo-container"},l={class:"l-container"},r={class:"l-item"},c=(0,a.Uk)("Overview"),u={class:"l-item"},d=(0,a.Uk)("My Favorites"),f={class:"l-item"},g=(0,a.Uk)("My Account & Profile"),m=(0,a.Uk)("My Account & Profile"),p=(0,a.Uk)("My Account & Profile"),v={key:0,class:"l-item"},h=(0,a.Uk)("My Jobs"),b={key:1,class:"l-item"},w=(0,a.Uk)("My Deals"),y={key:2,class:"l-item"},_=(0,a.Uk)("Post a Job"),k={key:3,class:"l-item"},C=(0,a.Uk)("Offer a Deal"),T={class:"l-item"},D=(0,a.Uk)("Privacy Policy"),V={key:4,class:"l-item"},F=(0,a.Uk)("My Applications");function j(e,t,n,j,x,W){var A=(0,a.up)("el-image"),U=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a.Wm)(A,{class:"profile-photo",src:""!=W.userAvatar?W.userAvatar:x.defaultAvatar},null,8,["src"]),(0,a._)("div",null,[(0,a._)("span",null,(0,o.zw)(W.username),1)])]),(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(U,{to:"/overview",exact:""},{default:(0,a.w5)((function(){return[c]})),_:1})]),(0,a._)("div",u,[(0,a.Wm)(U,{to:"/favorites",exact:""},{default:(0,a.w5)((function(){return[d]})),_:1})]),(0,a._)("div",f,[1==W.identity?((0,a.wg)(),(0,a.j4)(U,{key:0,to:"/educator/profile",exact:""},{default:(0,a.w5)((function(){return[g]})),_:1})):(0,a.kq)("",!0),2==W.identity?((0,a.wg)(),(0,a.j4)(U,{key:1,to:"/business/profile",exact:""},{default:(0,a.w5)((function(){return[m]})),_:1})):(0,a.kq)("",!0),3==W.identity?((0,a.wg)(),(0,a.j4)(U,{key:2,to:"/vendor/profile",exact:""},{default:(0,a.w5)((function(){return[p]})),_:1})):(0,a.kq)("",!0)]),2==W.identity?((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(U,{to:"/jobs/myJobs",exact:""},{default:(0,a.w5)((function(){return[h]})),_:1})])):(0,a.kq)("",!0),3==W.identity?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(U,{to:"/deals/myDeals",exact:""},{default:(0,a.w5)((function(){return[w]})),_:1})])):(0,a.kq)("",!0),2==W.identity?((0,a.wg)(),(0,a.iD)("div",y,[(0,a.Wm)(U,{to:{path:"/jobs/post",query:{version_time:x.versionTime}},exact:""},{default:(0,a.w5)((function(){return[_]})),_:1},8,["to"])])):(0,a.kq)("",!0),3==W.identity?((0,a.wg)(),(0,a.iD)("div",k,[(0,a.Wm)(U,{to:"/deals/offer",exact:""},{default:(0,a.w5)((function(){return[C]})),_:1})])):(0,a.kq)("",!0),(0,a._)("div",T,[(0,a.Wm)(U,{to:"/privacy/policy",exact:""},{default:(0,a.w5)((function(){return[D]})),_:1})]),1==W.identity?((0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(U,{to:"/me/applications",exact:""},{default:(0,a.w5)((function(){return[F]})),_:1})])):(0,a.kq)("",!0)])])}var x=n(42325),W=n(30043),A=n(45323),U={name:"meSideMenu",data:function(){return{defaultAvatar:A,accountInfo:{},accountPhotoValue:"",versionTime:(0,x.O1)()}},computed:{username:{get:function(){return this.$store.state.username}},userAvatar:{get:function(){return this.$store.state.userAvatar}},identity:{get:function(){return this.$store.state.identity}}},mounted:function(){},methods:{getBasicInfo:function(){var e=this,t=localStorage.getItem("uid"),n=localStorage.getItem("identity"),a={id:t,token:localStorage.getItem("token")};(0,W.zP)(a).then((function(t){console.log(t),200==t.code&&(e.phone=t.message.phone,1==n&&t.message.educator_info&&(e.accountInfo=t.message.educator_info,e.accountPhotoValue=t.message.educator_info.profile_photo),2==n&&t.message.business_info&&(e.accountInfo=t.message.business_info,e.accountPhotoValue=t.message.business_info.logo),3==n&&t.message.vendor_info&&(e.accountInfo=t.message.vendor_info,e.accountPhotoValue=t.message.vendor_info.logo))}))}}},O=n(48118);const L=(0,O.Z)(U,[["render",j],["__scopeId","data-v-44f783df"]]);var S=L},24155:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(66252),o=n(3577),i=function(e){return(0,a.dD)("data-v-4498095c"),e=e(),(0,a.Cn)(),e},s={class:"bg"},l={class:"profile-container"},r={class:"basic-form"},c=i((function(){return(0,a._)("div",{class:"tags-tips"}," Tags help people search for and discover you more easily. Add tags to improve your chances of discovery. ",-1)})),u={class:"object-tags-container"},d={class:"object-tags"},f=["onClick"],g={class:"object-tags"},m=["onClick"],p={class:"object-tags"},v={class:"object-tags-add"},h={key:0,class:"object-tags-item-add"},b={class:"object-tags-item-btn-container"},w=(0,a.Uk)("Confirm "),y=(0,a.Uk)("Cancel "),_=i((function(){return(0,a._)("div",{class:"deals-tips"}," This deal is only available online ",-1)})),k={class:"deals-location-select-container"},C=i((function(){return(0,a._)("div",{class:"map-container"},[(0,a._)("div",{id:"mapContainer",class:"basemap"})],-1)})),T=i((function(){return(0,a._)("div",{class:"deals-tips"}," This deal is available online and at the location below ",-1)})),D={class:"deals-location-select-container"},V=i((function(){return(0,a._)("div",{class:"map-container"},[(0,a._)("div",{id:"mapContainer1",class:"basemap"})],-1)})),F=i((function(){return(0,a._)("div",{class:"deal-agreement"}," I understand this deal will need ESL Passport's approval. ",-1)})),j=(0,a.Uk)(" Submit "),x=(0,a.Uk)("Reset");function W(e,t,n,i,W,A){var U=(0,a.up)("meSideMenu"),O=(0,a.up)("el-col"),L=(0,a.up)("el-input"),S=(0,a.up)("el-form-item"),I=(0,a.up)("el-button"),P=(0,a.up)("el-tab-pane"),M=(0,a.up)("el-option"),q=(0,a.up)("el-select"),Y=(0,a.up)("el-tabs"),H=(0,a.up)("el-form"),E=(0,a.up)("el-row");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",l,[(0,a.Wm)(E,{align:"top",justify:"center"},{default:(0,a.w5)((function(){return[(0,a.Wm)(O,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,a.w5)((function(){return[(0,a.Wm)(U)]})),_:1}),(0,a.Wm)(O,{class:"jobs-r-container",xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,a.w5)((function(){return[(0,a._)("div",r,[(0,a.Wm)(H,{ref:"basicForm",model:W.basicForm,rules:W.basicRules,"label-width":"120px","label-position":"top",class:"demo-ruleForm"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S,{label:"Deal Name",prop:"title"},{default:(0,a.w5)((function(){return[(0,a.Wm)(L,{modelValue:W.basicForm.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return W.basicForm.title=e}),placeholder:"Example:50% off all pizzas.."},null,8,["modelValue"])]})),_:1}),(0,a.Wm)(S,{label:"Deal Description",prop:"desc"},{default:(0,a.w5)((function(){return[(0,a.Wm)(L,{modelValue:W.basicForm.desc,"onUpdate:modelValue":t[1]||(t[1]=function(e){return W.basicForm.desc=e}),type:"textarea",placeholder:"Deal Details"},null,8,["modelValue"])]})),_:1}),(0,a.Wm)(S,{label:"Tags"},{default:(0,a.w5)((function(){return[c,(0,a._)("div",u,[(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.tagsData,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["object-tags-item",-1==W.selectTagsList.indexOf(e.id)?"":"tags-active"]),key:t,onClick:function(t){return A.selectTagA(e)}},(0,o.zw)(e.name_en),11,f)})),128))]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.ownTagsList,(function(t,n){return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["object-tags-item",-1==W.selectTagsList.indexOf(t)?"":"tags-active"]),key:n,onClick:function(n){return e.selectTag(t)}},(0,o.zw)(t),11,m)})),128))]),(0,a._)("div",p,[0==W.addTagsStatus?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"object-tags-item",onClick:t[2]||(t[2]=function(e){return W.addTagsStatus=!0})},"Add+ ")):(0,a.kq)("",!0)]),(0,a._)("div",v,[W.addTagsStatus?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(L,{type:"text",modelValue:W.ownTagsValue,"onUpdate:modelValue":t[3]||(t[3]=function(e){return W.ownTagsValue=e}),placeholder:"Add tag"},null,8,["modelValue"]),(0,a._)("div",b,[W.ownTagsValue.length>0?((0,a.wg)(),(0,a.j4)(I,{key:0,class:"object-tags-item-btn",type:"primary",onClick:A.addOwnTag},{default:(0,a.w5)((function(){return[w]})),_:1},8,["onClick"])):(0,a.kq)("",!0),0==W.ownTagsValue.length?((0,a.wg)(),(0,a.j4)(I,{key:1,class:"object-tags-item-btn",type:"primary",onClick:t[4]||(t[4]=function(e){return W.addTagsStatus=!1})},{default:(0,a.w5)((function(){return[y]})),_:1})):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)])])]})),_:1}),(0,a.Wm)(S,{label:"Deal Location"},{default:(0,a.w5)((function(){return[(0,a.Wm)(Y,{class:"deals-tabs-container",type:"border-card",modelValue:W.dealLocationTypeValue,"onUpdate:modelValue":t[11]||(t[11]=function(e){return W.dealLocationTypeValue=e})},{default:(0,a.w5)((function(){return[(0,a.Wm)(P,{label:"Online",name:"1"},{default:(0,a.w5)((function(){return[_]})),_:1}),(0,a.Wm)(P,{label:"Offline",name:"2"},{default:(0,a.w5)((function(){return[(0,a._)("div",k,[(0,a.Wm)(q,{modelValue:W.basicForm.province,"onUpdate:modelValue":t[5]||(t[5]=function(e){return W.basicForm.province=e}),onChange:A.provinceChange,placeholder:"Select Province"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.provinceOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,a.Wm)(q,{modelValue:W.basicForm.city,"onUpdate:modelValue":t[6]||(t[6]=function(e){return W.basicForm.city=e}),onChange:A.cityChange,placeholder:"Select City"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.cityOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,a.Wm)(q,{modelValue:W.basicForm.district,"onUpdate:modelValue":t[7]||(t[7]=function(e){return W.basicForm.district=e}),onChange:A.districtChange,placeholder:"Select District"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.districtOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]),C]})),_:1}),(0,a.Wm)(P,{label:"Both",name:"3"},{default:(0,a.w5)((function(){return[T,(0,a._)("div",D,[(0,a.Wm)(q,{modelValue:W.basicForm.province,"onUpdate:modelValue":t[8]||(t[8]=function(e){return W.basicForm.province=e}),onChange:A.provinceChange,placeholder:"Select Province"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.provinceOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,a.Wm)(q,{modelValue:W.basicForm.city,"onUpdate:modelValue":t[9]||(t[9]=function(e){return W.basicForm.city=e}),onChange:A.cityChange,placeholder:"Select City"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.cityOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,a.Wm)(q,{modelValue:W.basicForm.district,"onUpdate:modelValue":t[10]||(t[10]=function(e){return W.basicForm.district=e}),onChange:A.districtChange,placeholder:"Select District"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(W.districtOptions,(function(e,t){return(0,a.wg)(),(0,a.j4)(M,{key:t,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]),V]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,a.Wm)(S,{label:"Deal Agreement"},{default:(0,a.w5)((function(){return[F]})),_:1}),(0,a.Wm)(S,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(I,{type:"primary",onClick:t[12]||(t[12]=function(e){return A.submitForm("basicForm")})},{default:(0,a.w5)((function(){return[j]})),_:1}),(0,a.Wm)(I,{onClick:t[13]||(t[13]=function(e){return A.resetForm("basicForm")})},{default:(0,a.w5)((function(){return[x]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])])]})),_:1})]})),_:1})])])}n(40561),n(69600);var A=n(14896),U=n(30043),O=n(6158),L=n.n(O),S=n(19651),I=n.n(S),P={name:"jobs",components:{meSideMenu:A.Z},data:function(){return{accessToken:"pk.eyJ1Ijoic3JrbGluZ2UiLCJhIjoiY2t2NnR4anI2OWU5NDJ3bWE1dHd3c3h1aSJ9.O0JfjqiyBBkFuf4G-DQ-DQ",mapStyle:"mapbox://styles/mapbox/streets-v11",dealLocationTypeValue:"1",userInfo:{},basicUserInfo:{},tagsData:[],addTagsStatus:!1,ownTagsValue:"",ownTagsList:[],selectTagsList:[],selectTagsArr:[],tagsCnData:[],tagsEnData:[],provinceOptions:[],provinceName:"",cityOptions:[],cityName:"",districtOptions:[],districtName:"",basicForm:{token:localStorage.getItem("token"),user_id:localStorage.getItem("uid"),title:"",desc:"",tag:"",is_online:0,location:"",province:"",city:"",district:"",lng:"",lat:"",tags_cn:"",tags_en:""},basicRules:{title:[{required:!0,message:"Please input",trigger:"blur"}],desc:[{required:!0,message:"Please input",trigger:"blur"}]}}},mounted:function(){this.getTagsList(),this.getAllAreas(0),this.initMap(),this.initMap1()},methods:{initMap:function(){var e=this;L().accessToken=this.accessToken;var t=new(L().Map)({container:"mapContainer",center:[115.64673,34.42592],style:this.mapStyle,zoom:12}),n=new(L().NavigationControl);t.addControl(n,"top-right");var a=new(L().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});t.addControl(a,"top-right");var o=new(I())({accessToken:this.accessToken,mapboxgl:L()});t.addControl(o,"top-left");var i=new(L().Marker);o.on("result",(function(n){console.log(n),i.setLngLat(n.result.center).addTo(t),e.basicForm.location=n.result.place_name,e.basicForm.lng=n.result.center[0],e.basicForm.lat=n.result.center[1]})),o.on("clear",(function(t){console.log(t),e.basicForm.location="",e.basicForm.lng="",e.basicForm.lat=""}))},initMap1:function(){var e=this;L().accessToken=this.accessToken;var t=new(L().Map)({container:"mapContainer1",center:[115.64673,34.42592],style:this.mapStyle,zoom:12}),n=new(L().NavigationControl);t.addControl(n,"top-right");var a=new(L().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});t.addControl(a,"top-right");var o=new(I())({accessToken:this.accessToken,mapboxgl:L()});t.addControl(o,"top-left");var i=new(L().Marker);o.on("result",(function(n){console.log(n),i.setLngLat(n.result.center).addTo(t),e.basicForm.location=n.result.place_name,e.basicForm.lng=n.result.center[0],e.basicForm.lat=n.result.center[1]})),o.on("clear",(function(t){console.log(t),e.basicForm.location="",e.basicForm.lng="",e.basicForm.lat=""}))},getAllAreas:function(e){var t=this,n={pid:e};(0,U.Yu)(n).then((function(e){console.log(e),200==e.code&&(t.provinceOptions=e.message)}))},getAllCitys:function(e){var t=this,n={pid:e};(0,U.Yu)(n).then((function(e){console.log(e),200==e.code&&(t.cityOptions=e.message)}))},getAllDistricts:function(e){var t=this,n={pid:e};(0,U.Yu)(n).then((function(e){console.log(e),200==e.code&&(t.districtOptions=e.message)}))},provinceChange:function(e){console.log(e),this.getAllCitys(e)},cityChange:function(e){console.log(e),this.getAllDistricts(e)},districtChange:function(e){console.log(e)},getTagsList:function(){var e=this,t={page:1,limit:1e3};(0,U.dD)(t).then((function(t){console.log(t),200==t.code&&(e.tagsData=t.message.data)}))},addOwnTag:function(){var e=this;this.addTagsStatus=!1;var t=localStorage.getItem("token"),n={token:t,tag_name:this.ownTagsValue};(0,U.D)(n).then((function(t){if(console.log(t),200==t.code&&0==t.message){var n=e.ownTagsList.indexOf(e.ownTagsValue);-1==n&&e.ownTagsList.push(e.ownTagsValue);var a=e.selectTagsList.indexOf(e.ownTagsValue);-1==a?(e.selectTagsList.push(e.ownTagsValue),e.tagsCnData.push(e.ownTagsValue),e.tagsEnData.push(e.ownTagsValue)):(e.selectTagsList.splice(a,1),e.tagsCnData.splice(a,1),e.tagsEnData.splice(a,1)),e.ownTagsValue=""}}))},selectTagA:function(e){var t=this.selectTagsList.indexOf(e.id);-1==t?(this.selectTagsList.push(e.id),this.tagsCnData.push(e.name_cn),this.tagsEnData.push(e.name_en)):(this.selectTagsList.splice(t,1),this.tagsCnData.splice(t,1),this.tagsEnData.splice(t,1))},getVisitorBasicInfo:function(){var e=this,t=localStorage.getItem("uid"),n=localStorage.getItem("identity"),a={id:t,identity:n};(0,U.P9)(a).then((function(t){console.log(t),200==t.code&&(e.basicUserInfo=t.message,1==n&&t.message.educator_info&&(e.userInfo=t.message.educator_info),2==n&&t.message.business_info&&(e.userInfo=t.message.business_info),3==n&&t.message.vendor_info&&(e.userInfo=t.message.vendor_info))}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.basicForm.tag=t.selectTagsList,t.basicForm.tags_cn=t.tagsCnData.join(","),t.basicForm.tags_en=t.tagsEnData.join(","),t.$loading({text:"Loading..."});var n=Object.assign({},t.basicForm);(0,U.$z)(n).then((function(e){console.log(e),200==e.code&&(t.$router.push("/deals/myDeals"),t.$loading().close())}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},M=n(48118);const q=(0,M.Z)(P,[["render",W],["__scopeId","data-v-4498095c"]]);var Y=q},81194:function(e,t,n){var a=n(47293),o=n(5112),i=n(7392),s=o("species");e.exports=function(e){return i>=51||!a((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:function(e,t,n){"use strict";var a=n(47293);e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))}},77475:function(e,t,n){var a=n(17854),o=n(43157),i=n(4411),s=n(70111),l=n(5112),r=l("species"),c=a.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,i(t)&&(t===c||o(t.prototype))?t=void 0:s(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?c:t}},65417:function(e,t,n){var a=n(77475);e.exports=function(e,t){return new(a(e))(0===t?0:t)}},86135:function(e,t,n){"use strict";var a=n(34948),o=n(3070),i=n(79114);e.exports=function(e,t,n){var s=a(t);s in e?o.f(e,s,i(0,n)):e[s]=n}},43157:function(e,t,n){var a=n(84326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},69600:function(e,t,n){"use strict";var a=n(82109),o=n(1702),i=n(68361),s=n(45656),l=n(9341),r=o([].join),c=i!=Object,u=l("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(e){return r(s(this),void 0===e?",":e)}})},40561:function(e,t,n){"use strict";var a=n(82109),o=n(17854),i=n(51400),s=n(19303),l=n(26244),r=n(47908),c=n(65417),u=n(86135),d=n(81194),f=d("splice"),g=o.TypeError,m=Math.max,p=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,a,o,d,f,b,w=r(this),y=l(w),_=i(e,y),k=arguments.length;if(0===k?n=a=0:1===k?(n=0,a=y-_):(n=k-2,a=p(m(s(t),0),y-_)),y+n-a>v)throw g(h);for(o=c(w,a),d=0;d<a;d++)f=_+d,f in w&&u(o,d,w[f]);if(o.length=a,n<a){for(d=_;d<y-a;d++)f=d+a,b=d+n,f in w?w[b]=w[f]:delete w[b];for(d=y;d>y-a+n;d--)delete w[d-1]}else if(n>a)for(d=y-a;d>_;d--)f=d+a-1,b=d+n-1,f in w?w[b]=w[f]:delete w[b];for(d=0;d<n;d++)w[d+_]=arguments[d+2];return w.length=y-a+n,o}})}}]);
//# sourceMappingURL=155-legacy.0f06a269.js.map