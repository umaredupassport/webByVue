"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[798],{3798:function(a,e,i){i.r(e),i.d(e,{default:function(){return y}});var o=i(6252);const n={class:"bg"},r={class:"basic-container"},l={class:"basic-breadcrumb-container"},t=(0,o.Uk)("Home"),s=(0,o.Uk)("Profile"),u=(0,o.Uk)("Educator"),d={class:"basic-form"},c={key:1,class:"el-icon-plus avatar-uploader-icon"},m=(0,o.Uk)(" Submit "),g=(0,o.Uk)("Reset");function p(a,e,i,p,b,h){const f=(0,o.up)("el-breadcrumb-item"),k=(0,o.up)("el-breadcrumb"),S=(0,o.up)("el-input"),y=(0,o.up)("el-form-item"),w=(0,o.up)("el-image"),v=(0,o.up)("el-upload"),C=(0,o.up)("el-button"),M=(0,o.up)("el-form"),P=(0,o.up)("el-col"),I=(0,o.up)("el-row");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",r,[(0,o.Wm)(I,{align:"top",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{class:"basic-r-container",xs:24,sm:24,md:18,lg:18,xl:18},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o.Wm)(k,{separator:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{to:{path:"/"}},{default:(0,o.w5)((()=>[t])),_:1}),(0,o.Wm)(f,{to:{path:"/educator/profile"}},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:1})]),(0,o._)("div",d,[(0,o.Wm)(M,{ref:"basicForm",model:b.basicForm,rules:b.basicRules,"label-width":"120px","label-position":"top",class:"demo-ruleForm"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{label:"First Name",prop:"first_name"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{modelValue:b.basicForm.first_name,"onUpdate:modelValue":e[0]||(e[0]=a=>b.basicForm.first_name=a),placeholder:"First Name"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(y,{label:"Wechat ID",prop:"wx_id"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{modelValue:b.basicForm.wx_id,"onUpdate:modelValue":e[1]||(e[1]=a=>b.basicForm.wx_id=a),placeholder:"Wechat ID"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(y,{label:"Profile Photo",prop:"profile_photo"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"profile-uploader",action:b.uploadActionUrl,headers:b.uploadHeaders,data:b.uploadData,"show-file-list":!1,name:"file[]","on-success":h.handleProfilePhotoSuccess,"before-upload":h.beforeProfilePhotoUpload},{default:(0,o.w5)((()=>[b.profilePhotoUrl?((0,o.wg)(),(0,o.j4)(w,{key:0,src:b.profilePhotoUrl,class:"profile-avatar"},null,8,["src"])):((0,o.wg)(),(0,o.iD)("i",c))])),_:1},8,["action","headers","data","on-success","before-upload"])])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,{type:"primary",onClick:e[2]||(e[2]=a=>h.submitForm("basicForm"))},{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(C,{onClick:e[3]||(e[3]=a=>h.resetForm("basicForm"))},{default:(0,o.w5)((()=>[g])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1})])),_:1})])])}var b=i(5589),h=i(43),f={name:"educator",components:{},data(){return{uploadActionUrl:"https://dev.api.eslpassport.com/api/user/uploadImg",uploadHeaders:{platform:4},uploadData:{token:localStorage.getItem("token")},profilePhotoUrl:"",logoPhotoUrl:"",nationalityOptions:b.i,basicForm:{first_name:"",wx_id:"",profile_photo:"",token:localStorage.getItem("token")},basicRules:{first_name:[{required:!0,message:"First Name",trigger:"blur"}],wx_id:[{required:!0,message:"Wechat ID",trigger:"blur"}],profile_photo:[{required:!0,message:"Choose Your Profile Photo",trigger:"change"}]}}},mounted(){},methods:{handleProfilePhotoSuccess(a,e){this.profilePhotoUrl=URL.createObjectURL(e.raw),this.basicForm.profile_photo=a.data[0]["file_url"]},beforeProfilePhotoUpload(a){const e=a.size/1024/1024<20;return e||this.$message.error("Avatar picture size can not exceed 20MB"),e},submitForm(a){this.$refs[a].validate((a=>{if(!a)return console.log("error submit!!"),!1;{console.log(this.basicForm);let a=Object.assign({},this.basicForm);(0,h.GU)(a).then((a=>{console.log(a),200==a.code&&this.changeIdentity(1)})).catch((a=>{console.log(a),this.$message.error(a.msg)}))}}))},resetForm(a){this.$refs[a].resetFields()},changeIdentity(a){let e={token:localStorage.getItem("token"),identity:a};(0,h.YU)(e).then((e=>{console.log(e),200==e.code&&(console.log("success"),localStorage.setItem("identity",a),this.$router.push("/home"))})).catch((a=>{console.log(a),this.$message.error(a.msg)}))}}},k=i(8118);const S=(0,k.Z)(f,[["render",p],["__scopeId","data-v-ebe74566"]]);var y=S},5589:function(a,e,i){i.d(e,{i:function(){return t}});const o=["阿富汗","阿尔巴尼亚","阿尔及利亚","美属萨摩亚群岛","安道尔","安哥拉共和国","安圭拉","安提瓜岛","阿根廷","亚美尼亚","阿鲁巴","澳大利亚","奥地利共和国","阿塞拜疆共和国","巴哈马国","巴林王国","孟加拉人民共和国","巴巴多斯","白俄罗斯共和国","比利时王国 (België)","伯利兹","贝宁共和国 (Bénin)","百慕大群岛","不丹王国","玻利维亚国","波斯尼亚和黑塞哥维那","博茨瓦纳","巴西联邦共和国","英属印度洋领地","英属维尔京群岛","文莱达鲁萨兰国","保加利亚共和国","布基纳法索","布隆迪共和国","柬埔寨王国","喀麦隆共和国","加拿大","佛得角共和国","荷兰王国","开曼群岛","中非共和国","乍得共和国","智利共和国","中国","圣诞岛","科科斯群岛","哥伦比亚共和国","科摩罗联盟","刚果民主共和国","刚果共和国","库克群岛","哥斯达黎加共和国","科特迪瓦","克罗地亚共和国","古巴共和国","库拉索","塞浦路斯","捷克共和国","丹麦","吉布提共和国","多米尼克国","多米尼加共和国","厄瓜多尔","埃及","萨尔瓦","赤道几内亚","厄立特里亚","爱沙尼亚共和国","埃塞俄比亚","马尔维纳斯群岛","法罗群岛","斐济共和国","芬兰","法国","法属圭亚那","法属波利尼西亚","加蓬","冈比亚","格鲁吉亚","德国","加纳","直布罗陀","希腊","格陵兰","格林纳达","瓜德罗普岛","关岛","危地马拉","根西","几内亚","几内亚比绍共和国","圭亚那","海地","洪都拉斯","中国香港","匈牙利","冰岛","印度","印度尼西亚","地拉那","伊拉克共和国","爱尔兰","马恩岛","以色列国","意大利","牙买加","日本","泽西","约旦哈希姆王国","哈萨克斯坦共和国","肯尼亚","基里巴斯","科索沃","科威特国","吉尔吉斯共和国","老挝人民民主共和国","拉脱维亚共和国","黎巴嫩共和国","莱索托","利比里亚","利比亚","列支敦士登","立陶宛共和国","卢森堡","中國澳門","马其顿","马达加斯加共和国","马拉维","马来西亚","马尔代夫","马里","马耳他","马绍尔群岛共和国","马提尼克岛","毛里塔尼亚","毛里求斯","马约特","墨西哥","密克罗尼西亚","摩尔多瓦共和国","摩纳哥","蒙古","黑山共和国","蒙特塞拉特岛","摩洛哥","莫桑比克","缅甸联邦共和国","纳米比亚","瑙鲁","尼泊尔","荷兰","新喀里多尼亚","新西兰","尼加拉瓜","尼日尔","尼日利亚","纽埃","诺福克岛","North Korea (조선 민주주의 인민 공화국)","北马里亚纳群岛","挪威","阿曼苏丹国","巴基斯坦","帕劳共和国","巴勒斯坦国","巴拿马","巴布亚新几内亚独立国","巴拉圭","秘鲁","菲律宾共和国","波兰","葡萄牙","波多黎各岛","卡塔尔国","留尼旺岛","罗马尼亚","俄罗斯","卢旺达","圣巴托洛缪岛","圣海伦娜岛","圣基茨和尼维斯联邦","圣卢西亚","圣马丁岛","圣皮埃尔岛和密克隆岛","圣文森特和格林纳丁斯","西萨摩亚","圣马利诺","São Tomé and Príncipe (São Tomé e Príncipe)","沙特阿拉伯王国","塞内加尔","塞尔维亚共和国","塞舌尔","塞拉利昂共和国","新加坡","圣马丁岛","斯洛伐克共和国","斯洛文尼亚","所罗门群岛","索马里","南非","韩国","南苏丹共和国","西班牙","斯里兰卡","苏丹","苏里南","斯瓦尔巴群岛","斯威士兰","瑞典","瑞士","阿拉伯叙利亚共和国","中国台灣","塔吉克斯坦共和国","坦桑尼亚","泰国","东帝汶民主共和国","多哥","托克劳群岛","汤加","特立尼达和多巴哥共和国","突尼斯","土耳其","土库曼斯坦","特克斯和凯科斯群岛","图瓦卢","美属维尔京群岛","乌干达共和国","乌克兰","阿拉伯联合酋长国","大不列颠联合王国","美国","乌拉圭","乌兹别克斯坦共和国","瓦努阿图","梵蒂冈","委内瑞拉","越南","瓦利斯群岛和富图纳群岛","阿拉伯撒哈拉民主共和国","也门共和国","赞比亚","津巴布韦","奥兰群岛"];for(var n=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (中国香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (中國澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (中国台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],r=0;r<n.length;r++){var l=n[r];n[r]={name:l[0],nameCN:o[r],iso2:l[1],dialCode:l[2],priority:l[3]||0,areaCodes:l[4]||null}}const t=n}}]);
//# sourceMappingURL=798.b1fe1336.js.map