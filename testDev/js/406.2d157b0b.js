"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[406],{8507:function(e,a,l){l.d(a,{Z:function(){return q}});var t=l(6252),s=l(3577);const i=e=>((0,t.dD)("data-v-58c03710"),e=e(),(0,t.Cn)(),e),o={class:"featured-jobs-container"},n=i((()=>(0,t._)("div",{class:"featured-jobs-label"},"Featured Jobs",-1))),u={class:"featured-jobs-content"},r={class:"featured-jobs-card"},d={class:"featured-jobs-card-images"},c={class:"featured-jobs-title"},b={class:"featured-business-name"},g={class:"featured-jobs-location"},m={class:"featured-jobs-tags"},p={class:"featured-jobs-tags-l"},j={class:"featured-jobs-work-type"},_=i((()=>(0,t._)("i",{class:"iconfont el-icon-alishijian"},null,-1))),h={key:0},w={key:1},y={key:2},v={key:0,class:"featured-jobs-gender"},f=i((()=>(0,t._)("i",{class:"iconfont el-icon-alimale-female"},null,-1))),k={key:0},V={key:1},L=i((()=>(0,t._)("view",{class:"featured-jobs-work-exp"},[(0,t._)("i",{class:"iconfont el-icon-aligongzuojingyan"}),(0,t.Uk)(" 1-2 yrs ")],-1))),D={class:"featured-jobs-salary"},C={class:"featured-jobs-b"},z={class:"featured-jobs-b-l"},W=(0,t.Uk)("Quick Apply"),x={class:"featured-jobs-b-r"};function A(e,a,l,i,A,J){const P=(0,t.up)("el-image"),F=(0,t.up)("router-link"),S=(0,t.up)("LocationFilled"),T=(0,t.up)("el-icon"),O=(0,t.up)("el-button"),q=(0,t.up)("Calendar"),U=(0,t.up)("swiper-slide"),K=(0,t.up)("swiper");return(0,t.wg)(),(0,t.iD)("div",o,[n,(0,t._)("div",u,[(0,t.Wm)(K,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},navigation:!1,class:"mySwiper"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(A.jobFeaturedListData,((a,l)=>((0,t.wg)(),(0,t.j4)(U,{key:l},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",d,[(0,t.Wm)(P,{class:"featured-jobs-card-image",src:a.logo,fit:"fill"},null,8,["src"])]),(0,t._)("div",c,[(0,t.Wm)(F,{to:{path:"/jobs/detail",query:{id:a.id}}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.job_title),1)])),_:2},1032,["to"])]),(0,t._)("div",b,(0,s.zw)(a.business_name),1),(0,t._)("div",g,[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S)])),_:1}),(0,t.Uk)(" "+(0,s.zw)(a.address),1)]),(0,t._)("div",m,[(0,t._)("view",p,[(0,t._)("view",j,[_,1==a.employment_type?((0,t.wg)(),(0,t.iD)("span",h,"FT")):(0,t.kq)("",!0),2==a.employment_type?((0,t.wg)(),(0,t.iD)("span",w,"PT")):(0,t.kq)("",!0),3==a.employment_type?((0,t.wg)(),(0,t.iD)("span",y,"S")):(0,t.kq)("",!0)]),1==a.sex||2==a.sex?((0,t.wg)(),(0,t.iD)("view",v,[f,1==a.sex?((0,t.wg)(),(0,t.iD)("span",k,"Male")):(0,t.kq)("",!0),2==a.sex?((0,t.wg)(),(0,t.iD)("span",V,"Female")):(0,t.kq)("",!0)])):(0,t.kq)("",!0),L]),(0,t._)("view",D,(0,s.zw)(a.currency)+" "+(0,s.zw)(a.salary_min)+" - "+(0,s.zw)(a.salary_max),1)]),(0,t._)("div",C,[(0,t._)("div",z,[(0,t.Wm)(O,{class:"featured-jobs-apply-btn",onClick:e=>J.applyJobs(a.id)},{default:(0,t.w5)((()=>[W])),_:2},1032,["onClick"])]),(0,t._)("div",x,[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q)])),_:1}),(0,t.Uk)("  "+(0,s.zw)(e.$filters.howLongFormat(a.c_time)),1)])])])])),_:2},1024)))),128))])),_:1})])])}var J=l(3181),P=l(3971),F=l(43);P.ZP.use([P.tl,P.pt,P.W_,P.LG]);var S={name:"featuredJobs",data(){return{jobFeaturedListData:[]}},components:{Swiper:J.t,SwiperSlide:J.o},mounted(){this.getJobFeaturedList()},methods:{getJobFeaturedList(){let e={ad_type:2};(0,F.Rn)(e).then((e=>{console.log(e),200===e.code?this.jobFeaturedListData=e.message:console.log(e.msg)}))},applyJobs(e){let a=localStorage.getItem("identity"),l=localStorage.getItem("token");if(1==a){let a={job_id:e,token:l};(0,F.P)(a).then((e=>{200==e.code&&this.$message.success("Apply Success")}))}else this.$message.warning("Only Educator Can Apply")}}},T=l(8118);const O=(0,T.Z)(S,[["render",A],["__scopeId","data-v-58c03710"]]);var q=O},6851:function(e,a,l){l.d(a,{Z:function(){return h}});var t=l(6252),s=l(3577);const i=e=>((0,t.dD)("data-v-517a0a56"),e=e(),(0,t.Cn)(),e),o={class:"articles-container"},n=i((()=>(0,t._)("div",{class:"articles-label"},"Latest Industry Articles",-1))),u={class:"articles-content"},r={class:"articles-item-l"},d={class:"articles-item-r"},c={class:"articles-title"},b={class:"articles-date"};function g(e,a,l,i,g,m){const p=(0,t.up)("el-image"),j=(0,t.up)("el-link");return(0,t.wg)(),(0,t.iD)("div",o,[n,(0,t._)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(g.articleListData,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"articles-item",key:l},[(0,t._)("div",r,[(0,t.Wm)(p,{class:"articles-item-banner",src:""!=a.user_url?a.user_url:a.url,fit:"cover"},null,8,["src"])]),(0,t._)("div",d,[(0,t._)("div",c,[(0,t.Wm)(j,{class:"articles-title-link",href:a.link,target:"_blank",underline:!1},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.title),1)])),_:2},1032,["href"])]),(0,t._)("div",b,(0,s.zw)(e.$filters.newsDateFormat(a.u_time)),1)])])))),128))])])}var m=l(43),p={name:"latestIndustryNews",data(){return{articleListData:[]}},mounted(){this.getAdsList()},methods:{getAdsList(){let e=localStorage.getItem("identity"),a={page:1,limit:1e4};(0,m.tb)(a).then((a=>{if(console.log(a),200==a.code){let l=a.message,t=[];0!=e&&e||(t=l.filter((e=>"guest_industry_news"==e.name))),1==e&&(t=l.filter((e=>"educator_industry_news"==e.name))),2==e&&(t=l.filter((e=>"business_industry_news"==e.name))),3==e&&(t=l.filter((e=>"vendor_industry_news"==e.name)));let s=t[0].data;this.articleListData=s,this.articleListLimitData=s.slice(0,2)}}))}}},j=l(8118);const _=(0,j.Z)(p,[["render",g],["__scopeId","data-v-517a0a56"]]);var h=_},1406:function(e,a,l){l.r(a),l.d(a,{default:function(){return R}});var t=l(6252),s=l(3577);const i=e=>((0,t.dD)("data-v-053ca054"),e=e(),(0,t.Cn)(),e),o={class:"bg"},n={class:"jobs-filter-container"},u=i((()=>(0,t._)("div",{class:"jobs-filter-label"},"Find a job",-1))),r={class:"jobs-filter-location"},d={class:"jobs-filter-salary"},c={class:"jobs-filter-gender"},b={class:"jobs-filter-job-type"},g={class:"jobs-filter-student-age"},m={class:"jobs-filter-work-exp"},p={class:"jobs-list-container"},j={class:"jobs-list-label"},_={class:"jobs-list-content"},h={class:"jobs-list-item-l"},w={class:"jobs-list-item-r"},y={class:"jobs-list-item-title"},v={class:"jobs-list-item-name"},f={class:"jobs-list-item-address"},k={class:"jobs-list-item-desc"},V={class:"jobs-list-item-readmore"},L=(0,t.Uk)("Read More..."),D={class:"jobs-list-item-b"},C={class:"jobs-list-item-b-l"},z={class:"jobs-list-item-work-type"},W=i((()=>(0,t._)("i",{class:"iconfont el-icon-alishijian"},null,-1))),x={key:0},A={key:1},J={key:2},P={key:0,class:"jobs-list-item-gender"},F=i((()=>(0,t._)("i",{class:"iconfont el-icon-alimale-female"},null,-1))),S={key:0},T={key:1},O={class:"jobs-list-item-b-r"},q={class:"jobs-list-item-date"},U={class:"jobs-list-item-salary"},K={class:"jobs-list-pagination"};function I(e,a,l,i,I,H){const Y=(0,t.up)("el-option"),E=(0,t.up)("el-select"),N=(0,t.up)("featuredJobs"),Z=(0,t.up)("latestIndustryNews"),$=(0,t.up)("el-col"),M=(0,t.up)("el-image"),R=(0,t.up)("router-link"),G=(0,t.up)("Calendar"),B=(0,t.up)("el-icon"),Q=(0,t.up)("el-pagination"),X=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(X,{class:"bg-container",align:"top",justify:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{xs:24,sm:24,md:8,lg:8,xl:8},{default:(0,t.w5)((()=>[(0,t._)("div",n,[u,(0,t._)("div",r,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.locationValue,"onUpdate:modelValue":a[0]||(a[0]=e=>I.locationValue=e),clearable:"",placeholder:"Location",onChange:H.locationChange,size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.locationOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.id,label:e.CityPinyin,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])]),(0,t._)("div",d,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.salaryValue,"onUpdate:modelValue":a[1]||(a[1]=e=>I.salaryValue=e),clearable:"",onChange:H.salaryChange,placeholder:"Salary",size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.salaryOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])]),(0,t._)("div",c,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.genderValue,"onUpdate:modelValue":a[2]||(a[2]=e=>I.genderValue=e),clearable:"",onChange:H.genderChange,placeholder:"Gender",size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.genderOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])]),(0,t._)("div",b,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.jobTypeValue,"onUpdate:modelValue":a[3]||(a[3]=e=>I.jobTypeValue=e),clearable:"",onChange:H.jobTypeChange,placeholder:"Job Type",size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.jobTypeOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])]),(0,t._)("div",g,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.studentAgeValue,"onUpdate:modelValue":a[4]||(a[4]=e=>I.studentAgeValue=e),clearable:"",onChange:H.studentAgeChange,placeholder:"Student Age",size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.studentAgeOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])]),(0,t._)("div",m,[(0,t.Wm)(E,{class:"jobs-filter-select",modelValue:I.workExpValue,"onUpdate:modelValue":a[5]||(a[5]=e=>I.workExpValue=e),clearable:"",placeholder:"Work Experience",size:"medium"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.workExpOptions,(e=>((0,t.wg)(),(0,t.j4)(Y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),(0,t.Wm)(N),(0,t.Wm)(Z)])),_:1}),(0,t.Wm)($,{xs:24,sm:24,md:16,lg:16,xl:16},{default:(0,t.w5)((()=>[(0,t._)("div",p,[(0,t._)("div",j,"We've found you "+(0,s.zw)(I.jobTotalNum)+" open jobs",1),(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(I.jobListData,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"jobs-list-item",key:l},[(0,t._)("div",h,[(0,t.Wm)(M,{class:"jobs-item-logo",src:a.logo,fit:"cover"},null,8,["src"])]),(0,t._)("div",w,[(0,t._)("div",y,[(0,t.Wm)(R,{to:{path:"/jobs/detail",query:{id:a.id}}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.job_title),1)])),_:2},1032,["to"])]),(0,t._)("div",v,(0,s.zw)(a.business_name),1),(0,t._)("div",f,(0,s.zw)(a.address),1),(0,t._)("div",k,(0,s.zw)(a.desc),1),(0,t._)("div",V,[(0,t.Wm)(R,{to:{path:"/jobs/detail",query:{id:a.id}}},{default:(0,t.w5)((()=>[L])),_:2},1032,["to"])])]),(0,t._)("div",D,[(0,t._)("div",C,[(0,t._)("view",z,[W,1==a.employment_type?((0,t.wg)(),(0,t.iD)("span",x,"FT")):(0,t.kq)("",!0),2==a.employment_type?((0,t.wg)(),(0,t.iD)("span",A,"PT")):(0,t.kq)("",!0),3==a.employment_type?((0,t.wg)(),(0,t.iD)("span",J,"S")):(0,t.kq)("",!0)]),1==a.sex||2==a.sex?((0,t.wg)(),(0,t.iD)("view",P,[F,1==a.sex?((0,t.wg)(),(0,t.iD)("span",S,"Male")):(0,t.kq)("",!0),2==a.sex?((0,t.wg)(),(0,t.iD)("span",T,"Female")):(0,t.kq)("",!0)])):(0,t.kq)("",!0)]),(0,t._)("div",O,[(0,t._)("view",q,[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(G)])),_:1}),(0,t.Uk)("  "+(0,s.zw)(e.$filters.howLongFormat(a.c_time)),1)]),(0,t._)("view",U,(0,s.zw)(a.currency)+" "+(0,s.zw)(a.salary_min)+" - "+(0,s.zw)(a.salary_max),1)])])])))),128))]),(0,t._)("div",K,[(0,t.Wm)(Q,{layout:"prev, pager, next","default-current-page":1,onSizeChange:H.jobPageSizeChange,onCurrentChange:H.jobPageChange,"current-page":I.jobPage,"page-size":I.jobLimit,total:I.jobTotalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])),_:1})])),_:1})])}var H=l(2119),Y=l(43),E=l(8507),N=l(6851),Z={name:"list",data(){return{locationValue:"",locationOptions:[],salaryValue:"",salaryOptions:[{label:"0-5K",value:1},{label:"5K-10K",value:2},{label:"10K-15K",value:3},{label:"15K+",value:4}],genderValue:"",genderOptions:[{label:"Male",value:1},{label:"Female",value:2}],jobTypeValue:"",jobTypeOptions:[{label:"Full-time",value:1},{label:"Part-time",value:2},{label:"Seasonal",value:3}],studentAgeValue:"",studentAgeOptions:[],workExpValue:"",workExpOptions:[],jobFeaturedListData:[],jobListData:[],articleListData:[],jobPage:1,jobLimit:5,jobTotalNum:0}},components:{featuredJobs:E.Z,latestIndustryNews:N.Z},setup(){let e=(0,H.tv)();const a=e=>{console.log(e)},l=()=>{console.log("slide change")},t=a=>{e.push({path:"/jobs",query:a})};return{onSwiper:a,onSlideChange:l,skipJobsList:t}},mounted(){this.getJobsAreaList(),this.getUserObjectList();let e=this.$route.query.city;e&&""!=e&&(this.locationValue=Number(e)),this.getJobList(this.jobPage,this.jobLimit)},methods:{getJobsAreaList(){let e={};(0,Y.ff)(e).then((e=>{console.log(e),200==e.code&&(this.locationOptions=e.message)}))},jobPageSizeChange(e){console.log(e)},jobPageChange(e){this.jobPage=e,this.getJobList(e,this.jobLimit),console.log(e)},getJobList(e,a){let l={page:e,limit:a},t=this.salaryValue;""!=t&&(1==t&&(l.salary_begin=0,l.salary_end=5e3),2==t&&(l.salary_begin=5e3,l.salary_end=1e4),3==t&&(l.salary_begin=1e4,l.salary_end=15e3),4==t&&(l.salary_begin=15e3)),""!=this.locationValue&&(l.city=this.locationValue),""!=this.genderValue&&(l.sex=this.genderValue),""!=this.jobTypeValue&&(l.employment_type=this.jobTypeValue),""!=this.studentAgeValue&&(l.age_to_teach=this.studentAgeValue),(0,Y.DR)(l).then((e=>{200==e.code?(this.jobListData=e.message.data,this.jobTotalNum=e.message.total):console.log(e.msg)}))},getUserObjectList(){let e={};(0,Y.hF)(e).then((e=>{if(console.log(e),200==e.code){let a=e.message.filter((e=>4==e.pid));a.forEach((e=>{let a={label:e.object_en,value:e.id};this.studentAgeOptions.push(a)}))}}))},locationChange(e){this.locationValue=e,this.getJobList(this.jobPage,this.jobLimit)},salaryChange(e){this.salaryValue=e,this.getJobList(this.jobPage,this.jobLimit)},genderChange(e){this.genderValue=e,this.getJobList(this.jobPage,this.jobLimit)},jobTypeChange(e){this.jobTypeValue=e,this.getJobList(this.jobPage,this.jobLimit)},studentAgeChange(e){this.studentAgeValue=e,this.getJobList(this.jobPage,this.jobLimit)}}},$=l(8118);const M=(0,$.Z)(Z,[["render",I],["__scopeId","data-v-053ca054"]]);var R=M}}]);
//# sourceMappingURL=406.2d157b0b.js.map