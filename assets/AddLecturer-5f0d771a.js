/* empty css               */import{n as k,r as V,f as o,o as d,c as p,g as e,h as a,b as g,q as y,d as U,x as B,j as _}from"./index-961d9fd8.js";const A={class:"addBox"},N=g("div",{class:"txt"},"请输入讲师相关信息",-1),C=["src"],M={__name:"AddLecturer",setup(h){const t=k({name:"",price:"",resource:"",jsjs:"",xxjs:""}),i=()=>{console.log("submit!")},c=V(""),f=(r,l)=>{c.value=URL.createObjectURL(l.raw)},x=r=>r.type!=="image/jpeg"?(ElMessage.error("Avatar picture must be JPG format!"),!1):r.size/1024/1024>2?(ElMessage.error("Avatar picture size can not exceed 2MB!"),!1):!0;return(r,l)=>{const u=o("el-input"),s=o("el-form-item"),v=o("el-icon"),b=o("el-upload"),m=o("el-button"),j=o("el-form");return d(),p("div",A,[N,e(j,{model:t,class:"form"},{default:a(()=>[e(s,{label:"讲师名称",class:"kcName"},{default:a(()=>[e(u,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=n=>t.name=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"讲师头像",class:"kcName"},{default:a(()=>[e(b,{class:"avatar-uploader",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","show-file-list":!1,"on-success":f,"before-upload":x},{default:a(()=>[c.value?(d(),p("img",{key:0,src:c.value,class:"avatar"},null,8,C)):(d(),y(v,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[e(U(B))]),_:1}))]),_:1})]),_:1}),e(s,{label:"讲师简介",class:"kcjs"},{default:a(()=>[e(u,{modelValue:t.kcjj,"onUpdate:modelValue":l[1]||(l[1]=n=>t.kcjj=n),type:"textarea"},null,8,["modelValue"])]),_:1}),e(s,{label:"详细介绍",class:"xxjs"},{default:a(()=>[e(u,{modelValue:t.xxjs,"onUpdate:modelValue":l[2]||(l[2]=n=>t.xxjs=n),type:"textarea"},null,8,["modelValue"])]),_:1}),e(s,{style:{margin:"20px 0 0 154px"}},{default:a(()=>[e(m,{type:"primary",onClick:i},{default:a(()=>[_("确认")]),_:1}),e(m,null,{default:a(()=>[_("Cancel")]),_:1})]),_:1})]),_:1},8,["model"])])}}};export{M as default};
