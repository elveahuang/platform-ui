var Y=Object.defineProperty;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var K=(r,o,i)=>o in r?Y(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,P=(r,o)=>{for(var i in o||(o={}))Z.call(o,i)&&K(r,i,o[i]);if(S)for(var i of S(o))J.call(o,i)&&K(r,i,o[i]);return r};var _=(r,o,i)=>new Promise((w,h)=>{var C=m=>{try{u(i.next(m))}catch(p){h(p)}},g=m=>{try{u(i.throw(m))}catch(p){h(p)}},u=m=>m.done?w(m.value):Promise.resolve(m.value).then(C,g);u((i=i.apply(r,o)).next())});import{d as Q,U as W,V as E,r as b,o as X,l as x,e as ee,g as te,k as l,i as t,w as n,j as F,n as y,t as v,m as T,F as oe,ak as le,al as ae,D as ne,H as se,ai as ie,Y as de,Z as me,ao as re,ap as ue,a1 as pe,G as ce}from"./index-oE9LyhP1.js";/* empty css                 *//* empty css                     */import{e as fe,A as _e,a as be,b as ye,d as ve,f as Ve,g as he}from"./validation-BzpbV662.js";/* empty css                 */import"./el-progress-B57OA--b.js";/* empty css                */import{u as we}from"./data-table-DX8W42FZ.js";import{_ as ge}from"./DateRangePicker.vue_vue_type_script_setup_true_lang-NK1Y2EL8.js";import{A as $e}from"./AEditor-lSpvMYvp.js";import"./index.min-onUI6r0s.js";const ke=["innerHTML"],Ee={class:"app-modal-body"},Fe={class:"app-modal-footer"},He=Q({__name:"index",setup(r){const{t:o}=W(),{initialize:i,handleResult:w,handleParams:h}=we(),g={columns:[{title:o("common.field_title"),dataKey:"title",key:"title",width:360},{title:o("common.field_publish_status"),dataKey:"status",key:"status",width:150},{title:o("common.field_publish_period"),dataKey:"publishPeriod",key:"publishPeriod",width:500},{title:o("common.field_last_modified_at"),dataKey:"lastModifiedAt",key:"lastModifiedAt",width:200},{title:o("common.label_action"),dataKey:"operation",key:"operation",width:160}]},u=E(i(g)),m=b(),p=b(!1),L=()=>_(this,null,function*(){yield ye(h(u)).then(a=>{w(u,a)})}),D=b(""),c=b(!1),$=b(),d=E({}),B=E({title:[{required:!0,message:o("common.field_title_validation")}],content:[{required:!0,message:o("common.field_description_validation"),validator:fe}]}),H=a=>_(this,null,function*(){var e;(e=$.value)==null||e.clearValidate(),D.value=o("common.announcement_pages_add_title"),Object.assign(d,P({},ve)),c.value=!0}),I=()=>{c.value=!1},M=()=>_(this,null,function*(){yield $.value.validate(a=>_(this,null,function*(){a&&Ve(d).then(e=>{e.code=="200"&&(c.value=!1,m.value.refresh())})}))}),N=(a=0)=>_(this,null,function*(){const e=a>0?[a]:m.value.selectedRowKeys();if(le(e)){ae({message:o("common.label_please_select_one_record")}).then();return}he({ids:e}).then(f=>{f.code=="200"&&(c.value=!1,m.value.refresh())})}),k=b(!1),O=b("");return X(()=>_(this,null,function*(){x("Page <<UserSessionIndexPage>> mounted.")})),(a,e)=>{const f=ne,G=se,A=ie,R=de,V=me,U=re,j=ue,q=pe,z=ce;return ee(),te(oe,null,[l(t(_e),{title:a.$t("common.announcement_management")},null,8,["title"]),l(G,{shadow:"never"},{default:n(()=>[l(t(be),{ref_key:"dataTableRef",ref:m,modelValue:t(u),"onUpdate:modelValue":e[3]||(e[3]=s=>F(u)?u.value=s:null),"row-selection-enabled":t(p),"toolbar-enabled":!0,onGetDataList:L},{toolbar:n(()=>[l(f,{type:"primary",onClick:e[0]||(e[0]=s=>H(0))},{default:n(()=>[y(v(a.$t("common.button_add")),1)]),_:1}),l(f,{onClick:e[1]||(e[1]=s=>p.value=!t(p))},{default:n(()=>[y(v(t(p)?a.$t("common.label_batch_operation_cancel"):a.$t("common.label_batch_operation")),1)]),_:1}),l(f,{danger:"",onClick:e[2]||(e[2]=s=>N(0))},{default:n(()=>[y(v(a.$t("common.button_delete")),1)]),_:1})]),body:n(()=>[]),_:1},8,["modelValue","row-selection-enabled"])]),_:1}),l(A,{modelValue:t(k),"onUpdate:modelValue":e[4]||(e[4]=s=>F(k)?k.value=s:null),class:"app-modal",title:a.$t("common.label_preview"),"destroy-on-close":""},{default:n(()=>[T("div",{innerHTML:t(O)},null,8,ke)]),_:1},8,["modelValue","title"]),l(A,{modelValue:t(c),"onUpdate:modelValue":e[11]||(e[11]=s=>F(c)?c.value=s:null),class:"app-modal",title:t(D),"destroy-on-close":""},{default:n(()=>[T("div",Ee,[l(q,{ref_key:"entityFormRef",ref:$,"label-width":"auto",model:t(d),rules:t(B),onFinish:M},{default:n(()=>[l(V,{prop:"title",label:a.$t("common.field_title")},{default:n(()=>[l(R,{modelValue:t(d).title,"onUpdate:modelValue":e[5]||(e[5]=s=>t(d).title=s),placeholder:t(o)("common.field_title_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(V,{prop:"content",label:a.$t("common.field_content")},{default:n(()=>[l(t($e),{value:t(d).content,"onUpdate:value":e[6]||(e[6]=s=>t(d).content=s)},null,8,["value"])]),_:1},8,["label"]),l(V,{prop:"status",label:a.$t("common.field_publish_status")},{default:n(()=>[l(j,{modelValue:t(d).status,"onUpdate:modelValue":e[7]||(e[7]=s=>t(d).status=s)},{default:n(()=>[l(U,{value:1},{default:n(()=>[y(v(t(o)("common.field_publish_status_finish")),1)]),_:1}),l(U,{value:0},{default:n(()=>[y(v(t(o)("common.field_publish_status_unfinished")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(V,{label:a.$t("common.field_publish_period")},{default:n(()=>[l(t(ge),{from:t(d).startDatetime,"onUpdate:from":e[8]||(e[8]=s=>t(d).startDatetime=s),to:t(d).endDatetime,"onUpdate:to":e[9]||(e[9]=s=>t(d).endDatetime=s),type:"datetime"},null,8,["from","to"])]),_:1},8,["label"]),l(V,{prop:"description",label:a.$t("common.field_description")},{default:n(()=>[l(R,{modelValue:t(d).description,"onUpdate:modelValue":e[10]||(e[10]=s=>t(d).description=s),placeholder:t(o)("common.field_description_placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),footer:n(()=>[T("div",Fe,[l(z,null,{default:n(()=>[l(f,{"native-type":"submit",type:"primary",onClick:M},{default:n(()=>[y(v(a.$t("common.button_submit")),1)]),_:1}),l(f,{"native-type":"reset",onClick:I},{default:n(()=>[y(v(a.$t("common.button_cancel")),1)]),_:1})]),_:1})])]),_:1},8,["modelValue","title"])],64)}}});export{He as default};
