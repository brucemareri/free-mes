import{f as e,r as a,d as t,e as l,g as o,o as r,G as s,w as p,j as i,k as n,a as d,X as m,Z as u,a0 as c,_ as b}from"./index-4bfb878d.js";import{c as w}from"./index-6c8a85ac.js";import{c as y}from"./index-529a6cde.js";e([{type:"input",label:"订单编码",prop:"workorderCode",placeholder:"请输入订单编码"},{type:"input",label:"订单名称",prop:"workorderName",placeholder:"请输入订单名称"},{type:"input",label:"产品编号",prop:"productCode",placeholder:"请输入产品编号"},{type:"input",label:"产品名称",prop:"productName",placeholder:"请输入产品名称"},{type:"input",label:"客户名称",prop:"clientName",placeholder:"请输入客户名称"},{type:"date",label:"需求日期",prop:"requestDate",placeholder:"请选择需求日期"},{type:"date",label:"订单日期",prop:"orderDate",placeholder:"生产订单日期"},{type:"date",label:"生产日期",prop:"produceDate",placeholder:"生产日期"}]);const h=[{slot:"taskCode",label:"任务编号",width:"150"},{prop:"workorderName",label:"任务名称",width:"150"},{prop:"workorderCode",label:"订单编号",width:"150"},{prop:"workstationName",label:"工作站名称",width:"150"},{prop:"quantity",label:"排产数量"},{prop:"teamCode",label:"班组编号",width:"100"},{prop:"teamName",label:"班组名称",width:"100"},{prop:"startTime",label:"开始时间",width:"170"},{prop:"duration",label:"生产时长"},{prop:"endTime",label:"预计完成时间",width:"170"},{label:"操作",slot:"operation",width:"120",fixed:"right"}],k=e([{type:"primary",icon:"plus",state:"save",label:"新增",disabled:!1,permissions:[]},{type:"success",icon:"edit",state:"edit",label:"修改",disabled:!0,permissions:[]},{type:"danger",icon:"delete",state:"remove",label:"删除",disabled:!0,permissions:[]},{type:"primary",icon:"printer",state:"printer",disabled:!0,label:"打印",loading:!1,permissions:[]}]),g=e([{type:"input",label:"工作站编号",prop:"workstationCode",placeholder:"请输入工作站编号"},{type:"select",label:"所属工序",prop:"processName",placeholder:"请选择工序",options:[]},{type:"select",label:"所在车间",prop:"workshopName",placeholder:"请选择车间",options:[]}]),f=[{label:"工作站编号",prop:"workstationCode"},{label:"工作站名称",prop:"workstationName"},{prop:"workstationAddress",label:"工作站地点"},{prop:"workshopName",label:"所在车间名称"},{prop:"processName",label:"所属工序"},{prop:"remark",label:"备注"}],v=async e=>await a.get({url:`/admin-api/mes/pro/routeProcess/listProductProcess/${e}`}),C=async e=>await a.post({url:"/admin-api/mes/pro/task/save",data:e}),_=async e=>await a.get({url:"/admin-api/mes/pro/task/list",params:e}),S=async e=>await a.get({url:`/admin-api/mes/pro/task/get/${e}`}),N=async e=>await a.put({url:"/admin-api/mes/pro/task/update",data:e}),x=async e=>await a.delete({url:"/admin-api/mes/pro/task/batch",data:e}),D=async e=>await a.get({url:"/admin-api/mes/pro/task/findTaskByOrderCode",params:e}),j=async e=>await a.get({url:"/admin-api/mes/pro/task/taskResidueQuantity",params:e}),P={class:"dialog-footer"},R=b(t({__name:"workStationSelect",props:{processId:{type:null,required:!0}},emits:["handleCurrentSubmit"],setup(t,{expose:b,emit:h}){const k=t,v=l(null),C=l(null),_=l(!1),S=l(!1),N=e({workstationCode:"",processId:"",workshopId:""});let x=e([]),D=l("");const j=e({total:0,pageSize:10,pageSizes:[5,10,15,20],currentPage:1}),R=e=>{D.value=e},z=()=>{A()},I=()=>{h("handleCurrentSubmit",D.value),q()},T=()=>{q()},q=()=>{D.value="",v.value.handleResetData(),_.value=!1,C.value.clearCurrentRow()},A=()=>{const e={...N,processId:k.processId,pageNo:j.currentPage,pageSize:j.pageSize};S.value=!0,(async e=>await a.get({url:"/admin-api/mes/md/workstation/list",params:e}))(e).then((e=>{const{list:a=[],total:t}=e||{};x=a,j.total=t})).finally((()=>{S.value=!1}))},M=()=>{(async()=>await a.get({url:"/admin-api/mes/pro/process/listAll"}))().then((e=>{g[1].options=e.map((e=>({label:e.processName,value:e.id})))}))},O=()=>{(async()=>await a.get({url:"/admin-api/mes/md/workshop/listAll"}))().then((e=>{g[2].options=e.map((e=>({label:e.workshopName,value:e.id})))}))};return o((()=>{A(),M(),O()})),b({visibleClient:_}),(e,a)=>{const t=u,l=c;return r(),s(l,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e),title:"工作站选择",width:"80%"},{footer:p((()=>[i("span",P,[n(t,{type:"primary",onClick:I,disabled:!d(D)},{default:p((()=>[m("确 定")])),_:1},8,["disabled"]),n(t,{onClick:T},{default:p((()=>[m("取 消")])),_:1})])])),default:p((()=>[n(y,{"conditions-list":d(g),"search-model":N,onQueryData:z,ref_key:"CommonSearchRef",ref:v},null,8,["conditions-list","search-model"]),n(w,{style:{"margin-top":"20px"},ref_key:"commonTableRef",ref:C,currentRow:"",pagination:j,columns:d(f),tableData:d(x),loading:S.value,onCurrentChange:R},null,8,["pagination","columns","tableData","loading"])])),_:1},8,["modelValue"])}}}),[["__file","/Users/alex/Downloads/万界星空/产品研发/MES框架/dev/xiejinrun/new_open_mes_front/src/views/prodMgmt/productionScheduling/components/workStationSelect.vue"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{C as a,k as b,j as c,x as d,v as e,D as f,S as g,z as h,_ as q,h as t,N as u,R as w};