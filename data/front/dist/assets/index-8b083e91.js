import{r as e,q as t,f as a,D as l,d as s,e as i,C as o,o as r,c as n,k as d,w as u,a as m,I as p,j as c,t as f,z as h,F as g,L as w,M as T,N as b,H as x,a1 as _,a0 as C,_ as y}from"./index-4bfb878d.js";import{u as S}from"./useVxeCrudSchemas-092b8963.js";import{u as v}from"./useXTable-309dffed.js";const k=t=>e.get({url:"/admin-api/system/operate-log/page",params:t}),j=t=>e.download({url:"/admin-api/system/operate-log/export",params:t}),{t:A}=t(),D=a({primaryKey:"id",primaryType:"id",primaryTitle:"日志编号",action:!0,actionWidth:"80px",columns:[{title:"操作模块",field:"module",isSearch:!0},{title:"操作名",field:"name"},{title:"操作类型",field:"type",dictType:l.SYSTEM_OPERATE_TYPE,dictClass:"number",isSearch:!0},{title:"请求方法名",field:"requestMethod",isTable:!1},{title:"请求地址",field:"requestUrl",isTable:!1},{title:"操作人员",field:"userNickname",isSearch:!0},{title:"操作明细",field:"content",isTable:!1},{title:"用户 IP",field:"userIp",isTable:!1},{title:"userAgent",field:"userAgent"},{title:"操作结果",field:"resultCode",table:{slots:{default:"resultCode"}}},{title:"操作结果",field:"success",isTable:!1,isDetail:!1,search:{show:!0,itemRender:{name:"$select",props:{placeholder:A("common.selectText")},options:[{label:"成功",value:"true"},{label:"失败",value:"false"}]}}},{title:"操作日期",field:"startTime",formatter:"formatDate",isForm:!1,search:{show:!0,itemRender:{name:"XDataTimePicker"}}},{title:"执行时长",field:"duration",table:{slots:{default:"duration"}}}]}),{allSchemas:E}=S(D),I=s({name:"OperateLog"}),L=y(s({...I,setup(e){const{t:a}=t(),[l,{exportList:s}]=v({allSchemas:E,getListApi:k,exportListApi:j}),y=i(!1),S=i(!1),A=i();return(e,t)=>{const i=w,v=T,k=b,j=x,D=_,I=C,L=o("hasPermi");return r(),n(g,null,[d(j,null,{default:u((()=>[d(k,{onRegister:m(l)},{toolbar_buttons:u((()=>[p(d(i,{type:"warning",preIcon:"ep:download",title:m(a)("action.export"),onClick:t[0]||(t[0]=e=>m(s)("操作日志.xls"))},null,8,["title"]),[[L,["system:operate-log:export"]]])])),duration:u((({row:e})=>[c("span",null,f(e.duration+"ms"),1)])),resultCode:u((({row:e})=>[c("span",null,f(0===e.resultCode?"成功":"失败"),1)])),actionbtns_default:u((({row:e})=>[d(v,{preIcon:"ep:view",title:m(a)("action.detail"),onClick:t=>(e=>{A.value=e,y.value=!0})(e)},null,8,["title","onClick"])])),_:1},8,["onRegister"])])),_:1}),d(I,{id:"postModel",modelValue:m(y),"onUpdate:modelValue":t[2]||(t[2]=e=>h(y)?y.value=e:null),title:m(a)("action.detail")},{footer:u((()=>[d(i,{loading:m(S),title:m(a)("dialog.close"),onClick:t[1]||(t[1]=e=>y.value=!1)},null,8,["loading","title"])])),default:u((()=>[d(D,{schema:m(E).detailSchema,data:m(A)},{resultCode:u((({row:e})=>[c("span",null,f(0===e.resultCode?"成功":"失败"),1)])),duration:u((({row:e})=>[c("span",null,f(e.duration+"ms"),1)])),_:1},8,["schema","data"])])),_:1},8,["modelValue","title"])],64)}}}),[["__file","/Users/alex/Downloads/万界星空/产品研发/MES框架/dev/xiejinrun/new_open_mes_front/src/views/system/operatelog/index.vue"]]);export{L as default};