"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[6866],{6866:function(e,o,l){l.d(o,{Z:function(){return F}});var t=l(6252),s=l(6612);const a={key:0},i={class:"switch-container"},r={class:"forgot-form-container"},d={class:"xll-input-container"},n={class:"xll-input-input"},m={class:"submit-container"},u=(0,t.Uk)(" Submit "),c={class:"xll-input-container"},h={class:"xll-input-input"},g={class:"submit-container"},p=(0,t.Uk)(" Submit ");function f(e,o,l,f,w,b){const _=(0,t.up)("el-input"),C=(0,t.up)("el-form-item"),V=(0,t.up)("el-button"),F=(0,t.up)("el-form"),k=(0,t.up)("el-dialog");return l.isShow?((0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(k,{"model-value":l.isShow,onClose:o[14]||(o[14]=e=>f.handleClose()),title:"Forgot Password",width:w.dialogWidthValue,center:""},{default:(0,t.w5)((()=>[(0,t._)("div",i,[l.showEmail?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,s.C_)(["switch-item",1===f.switchValue?"switch-item-active":""]),onClick:o[0]||(o[0]=e=>f.handleSwitch(1))}," By Email ",2)):(0,t.kq)("",!0),l.showPhone?((0,t.wg)(),(0,t.iD)("div",{key:1,class:(0,s.C_)(["switch-item",2===f.switchValue?"switch-item-active":""]),onClick:o[1]||(o[1]=e=>f.handleSwitch(2))}," By Phone # ",2)):(0,t.kq)("",!0)]),(0,t._)("div",r,[1===f.switchValue?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Wm)(F,{model:w.forgotForm1,rules:w.forgotRules1,ref:"forgotForm1","label-width":"250px","label-position":w.formLabelPosition,class:"demo-ruleForm"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{label:"Email",prop:"email",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"Email",modelValue:w.forgotForm1.email,"onUpdate:modelValue":o[2]||(o[2]=e=>w.forgotForm1.email=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(C,{label:"6 Digit Code",prop:"email_code",required:""},{default:(0,t.w5)((()=>[(0,t._)("div",d,[(0,t._)("div",n,[(0,t.Wm)(_,{placeholder:"Code",modelValue:w.forgotForm1.email_code,"onUpdate:modelValue":o[3]||(o[3]=e=>w.forgotForm1.email_code=e)},null,8,["modelValue"])]),(0,t.Wm)(V,{class:"xll-input-btn",type:"primary",round:"",loading:f.checkCodeBtn.loading,disabled:f.checkCodeBtn.disabled,onClick:o[4]||(o[4]=e=>b.sendEmailCode("forgotForm1"))},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(f.checkCodeBtn.text),1)])),_:1},8,["loading","disabled"])])])),_:1}),(0,t.Wm)(C,{label:"New Password",prop:"password",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"New Password",type:"password",modelValue:w.forgotForm1.password,"onUpdate:modelValue":o[5]||(o[5]=e=>w.forgotForm1.password=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(C,{label:"Confirm Password",prop:"confirm_password",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"Confirm Your New Password",type:"password",modelValue:w.forgotForm1.confirm_password,"onUpdate:modelValue":o[6]||(o[6]=e=>w.forgotForm1.confirm_password=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules","label-position"]),(0,t._)("div",m,[(0,t.Wm)(V,{class:"submit-btn",round:"",type:"primary",loading:f.submitLoadingStatus,onClick:o[7]||(o[7]=e=>b.submitForm1("forgotForm1"))},{default:(0,t.w5)((()=>[u])),_:1},8,["loading"])])],64)):(0,t.kq)("",!0),2===f.switchValue?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t.Wm)(F,{model:w.forgotForm2,rules:w.forgotRules2,ref:"forgotForm2","label-width":"250px","label-position":w.formLabelPosition,class:"demo-ruleForm"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{label:"Phone #",prop:"phone",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"Phone #",modelValue:w.forgotForm2.phone,"onUpdate:modelValue":o[8]||(o[8]=e=>w.forgotForm2.phone=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(C,{label:"6 Digit Code",prop:"phone_code",required:""},{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t._)("div",h,[(0,t.Wm)(_,{placeholder:"Code",modelValue:w.forgotForm2.phone_code,"onUpdate:modelValue":o[9]||(o[9]=e=>w.forgotForm2.phone_code=e)},null,8,["modelValue"])]),(0,t.Wm)(V,{class:"xll-input-btn",type:"primary",round:"",loading:f.checkCodeBtn.loading,disabled:f.checkCodeBtn.disabled,onClick:o[10]||(o[10]=e=>b.getCheckCode())},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(f.checkCodeBtn.text),1)])),_:1},8,["loading","disabled"])])])),_:1}),(0,t.Wm)(C,{label:"New Password",prop:"password",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"New Password",type:"password",modelValue:w.forgotForm2.password,"onUpdate:modelValue":o[11]||(o[11]=e=>w.forgotForm2.password=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(C,{label:"Confirm Password",prop:"confirm_password",required:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{placeholder:"Confirm Your New Password",type:"password",modelValue:w.forgotForm2.confirm_password,"onUpdate:modelValue":o[12]||(o[12]=e=>w.forgotForm2.confirm_password=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules","label-position"]),(0,t._)("div",g,[(0,t.Wm)(V,{class:"submit-btn",round:"",type:"primary",loading:f.submitLoadingStatus,onClick:o[13]||(o[13]=e=>b.submitForm2("forgotForm2"))},{default:(0,t.w5)((()=>[p])),_:1},8,["loading"])])],64)):(0,t.kq)("",!0)])])),_:1},8,["model-value","width"])])):(0,t.kq)("",!0)}var w=l(2931),b=l(1836),_={name:"forgotPassword",props:{isShow:{type:Boolean,default:!1},showEmail:{type:Boolean,default:!0},showPhone:{type:Boolean,default:!0},emailValue:{type:String,default:""},phoneValue:{type:String,default:""}},setup(e,o){const l=()=>{o.emit("close",!1)},t=(0,w.iH)(1),s=e=>{t.value=e},a=(0,w.iH)(!1);let i=(0,w.qj)({text:"Get Code",loading:!1,disabled:!1,duration:10,timer:null});const r=()=>{10!==i.duration&&(i.disabled=!0,i.loading=!0),i.timer&&clearInterval(i.timer),i.timer=setInterval((()=>{const e=i.duration--;i.text=`${e} S`,i.loading=!0,i.disabled=!0,e<=0&&(clearInterval(i.timer),i.duration=10,i.text="Reacquire",i.disabled=!1,i.loading=!1),console.log(i)}),1e3)};return{handleClose:l,switchValue:t,handleSwitch:s,getCheckCodeTimer:r,checkCodeBtn:i,submitLoadingStatus:a}},data(){return{formLabelPosition:"left",dialogWidthValue:"50%",forgotForm1:{email:"",email_code:"",password:"",confirm_password:""},forgotRules1:{email_code:[{required:!0,message:"Please fill out your code.",trigger:"blur"}],email:[{type:"email",required:!0,message:"Please fill out your email address.",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"}],confirm_password:[{required:!0,message:"Please enter your password again",trigger:"blur"}]},forgotForm2:{phone:"",phone_code:"",password:"",confirm_password:""},forgotRules2:{phone_code:[{required:!0,message:"Please fill out your code.",trigger:"blur"}],phone:[{required:!0,message:"Please fill out your phone #.",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"}],confirm_password:[{required:!0,message:"Please enter your password again",trigger:"blur"}]}}},mounted(){let e=document.body.clientWidth;Math.floor(e)<=768&&(this.dialogWidthValue="90%",this.formLabelPosition="top"),Math.floor(e)>768&&Math.floor(e)<=992&&(this.dialogWidthValue="90%",this.formLabelPosition="top"),Math.floor(e)>992&&Math.floor(e)<=1200&&(this.dialogWidthValue="50%",this.formLabelPosition="left"),Math.floor(e)>1200&&(this.dialogWidthValue="50%",this.formLabelPosition="left"),window.onresize=()=>{let e=document.body.clientWidth;Math.floor(e)<=768&&(this.dialogWidthValue="90%",this.formLabelPosition="top"),Math.floor(e)>768&&Math.floor(e)<=992&&(this.dialogWidthValue="90%",this.formLabelPosition="top"),Math.floor(e)>992&&Math.floor(e)<=1200&&(this.dialogWidthValue="50%",this.formLabelPosition="left"),Math.floor(e)>1200&&(this.dialogWidthValue="50%",this.formLabelPosition="left")}},unmounted(){window.onresize=null},methods:{getCheckCode(){let e=this.forgotForm2.phone;if(e){let o={phone:e};(0,b.eo)(o).then((e=>{console.log(e),200===e.code&&(this.getCheckCodeTimer(),this.$message.success("Success"))})).catch((e=>{this.$message.error(e.msg)}))}},sendEmailCode(e){let o=this,l=this.forgotForm1.email;this.$refs[e].validateField("email",(e=>{if(!e)return console.log("error submit!!"),this.$message({type:"warning",message:"Please enter a valid email address",grouping:!0});if(l){let e={email:l};(0,b.Ng)(e).then((e=>{200==e.code&&(o.getCheckCodeTimer(),o.$message.success("Success"))})).catch((e=>(console.log(e),this.$message.error(e.msg))))}}))},submitForm1(e){this.submitLoadingStatus=!0,this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),this.submitLoadingStatus=!1,!1;{let e=Object.assign({},this.forgotForm1);(0,b.OW)(e).then((e=>{console.log(e),200==e.code&&(this.$message.success(e.msg),this.submitLoadingStatus=!1,this.handleClose())})).catch((e=>{console.log(e),this.submitLoadingStatus=!1,this.$message.error(e.msg)}))}}))},submitForm2(e){this.submitLoadingStatus=!0,this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),this.submitLoadingStatus=!1,!1;{let e=Object.assign({},this.forgotForm2);(0,b.UM)(e).then((e=>{console.log(e),200==e.code&&(this.$message.success(e.msg),this.submitLoadingStatus=!1,this.handleClose())})).catch((e=>{console.log(e),this.submitLoadingStatus=!1,this.$message.error(e.msg)}))}}))}}},C=l(8118);const V=(0,C.Z)(_,[["render",f],["__scopeId","data-v-1e5b5674"]]);var F=V}}]);
//# sourceMappingURL=6866.ce15ab3d.js.map