import{f as e,d as l,e as a,u as t,$ as s,a6 as o,C as i,o as u,G as n,w as r,k as d,a as f,D as m,X as p,t as c,J as y,I as _,z as v,ao as k,M as w,ap as C,aq as h,N as g,a0 as b,H as x,_ as S}from"./index-4bfb878d.js";import{g as V,a as T}from"./index-d0a64031.js";import{u as j}from"./useVxeCrudSchemas-092b8963.js";import{b as I}from"./formCreate-a3356cdc.js";import{u as D}from"./useXTable-309dffed.js";const q=e({primaryKey:"id",primaryType:null,action:!0,columns:[{title:"定义编号",field:"id",table:{width:360}},{title:"定义名称",field:"name",table:{slots:{default:"name_default"}}},{title:"定义分类",field:"category",table:{slots:{default:"category_default"}}},{title:"表单信息",field:"formId",table:{slots:{default:"formId_default"}}},{title:"流程版本",field:"version",table:{slots:{default:"version_default"}}},{title:"激活状态",field:"suspensionState",table:{slots:{default:"suspensionState_default"}}},{title:"部署时间",field:"deploymentTime",isForm:!1,formatter:"formatDate"}]}),{allSchemas:M}=j(q),P=S(l({__name:"index",setup(l){const S=a(null),j=a(!1),q=a({prefix:"flowable"}),P=t(),{query:R}=s(),U=e({key:R.key}),[A]=D({allSchemas:M,getListApi:V,params:U}),E=a(!1),L=a({rule:[],option:{}}),N=async e=>{10==e.formType?(I(L,e.formConf,e.formFields),E.value=!0):await P.push({path:e.formCustomCreatePath})};return(e,l)=>{const a=w,t=C,s=h,V=g,I=o("form-create"),D=b,M=o("my-process-viewer"),R=x,U=i("hasPermi");return u(),n(R,null,{default:r((()=>[d(V,{onRegister:f(A)},{name_default:r((({row:e})=>[d(a,{title:e.name,onClick:l=>(e=>{console.log(e),T(e).then((e=>{console.log(e,"response"),S.value=e,j.value=!0}))})(e.id)},null,8,["title","onClick"])])),category_default:r((({row:e})=>[d(t,{type:f(m).BPM_MODEL_CATEGORY,value:Number(null==e?void 0:e.category)},null,8,["type","value"])])),formId_default:r((({row:e})=>[10===e.formType?(u(),n(a,{key:0,title:e.formName,onClick:l=>N(e)},null,8,["title","onClick"])):(u(),n(a,{key:1,title:e.formCustomCreatePath,onClick:l=>N(e)},null,8,["title","onClick"]))])),version_default:r((({row:e})=>[d(s,null,{default:r((()=>[p("v"+c(e.version),1)])),_:2},1024)])),suspensionState_default:r((({row:e})=>[1===e.suspensionState?(u(),n(s,{key:0,type:"success"},{default:r((()=>[p("激活")])),_:1})):y("",!0),2===e.suspensionState?(u(),n(s,{key:1,type:"warning"},{default:r((()=>[p("挂起")])),_:1})):y("",!0)])),actionbtns_default:r((({row:e})=>[_(d(a,{preIcon:"ep:user",title:"分配规则",onClick:l=>(e=>{P.push({name:"BpmTaskAssignRuleList",query:{processDefinitionId:e.id}})})(e)},null,8,["onClick"]),[[U,["bpm:task-assign-rule:query"]]])])),_:1},8,["onRegister"]),d(D,{modelValue:f(E),"onUpdate:modelValue":l[0]||(l[0]=e=>v(E)?E.value=e:null),width:"800",title:"表单详情","show-footer":!1},{default:r((()=>[f(E)?(u(),n(I,{key:0,rule:f(L).rule,option:f(L).option},null,8,["rule","option"])):y("",!0)])),_:1},8,["modelValue"]),d(D,{title:"流程图",modelValue:f(j),"onUpdate:modelValue":l[2]||(l[2]=e=>v(j)?j.value=e:null),width:"80%",height:"90%"},{default:r((()=>[d(M,k({key:"designer",modelValue:f(S),"onUpdate:modelValue":l[1]||(l[1]=e=>v(S)?S.value=e:null),value:f(S)},f(q),{prefix:f(q).prefix}),null,16,["modelValue","value","prefix"])])),_:1},8,["modelValue"])])),_:1})}}}),[["__file","/Users/alex/Downloads/万界星空/产品研发/MES框架/dev/xiejinrun/new_open_mes_front/src/views/bpm/definition/index.vue"]]);export{P as default};