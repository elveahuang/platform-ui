var x=Object.defineProperty;var j=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var q=(u,n,s)=>n in u?x(u,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[n]=s,F=(u,n)=>{for(var s in n||(n={}))ee.call(n,s)&&q(u,s,n[s]);if(j)for(var s of j(n))te.call(n,s)&&q(u,s,n[s]);return u};var f=(u,n,s)=>new Promise((V,w)=>{var L=m=>{try{p(s.next(m))}catch(_){w(_)}},k=m=>{try{p(s.throw(m))}catch(_){w(_)}},p=m=>m.done?V(m.value):Promise.resolve(m.value).then(L,k);p((s=s.apply(u,n)).next())});import{d as oe,U as le,V as A,r as b,o as ae,l as ne,e as R,g as U,k as e,i,w as a,j as ie,n as v,t as c,m as $,ak as se,F as de,al as me,am as re,D as ue,an as pe,ao as ce,G as _e,H as fe,ai as be,Y as ve,Z as ye,ap as he,aq as we,a1 as ge}from"./index-DnwLZJOM.js";/* empty css                     */import{e as $e,A as Ve,a as ke,b as Ce,c as De,d as Ee,f as Me,g as Te}from"./validation-B7S5MWm7.js";/* empty css                 */import"./el-progress-CRgrIIOP.js";/* empty css                *//* empty css                 *//* empty css                   */import{A as Fe}from"./AEditor-CrAJp-6X.js";import"./index.min-Di2gdxwh.js";import{u as Ae}from"./data-table-C82IfYUR.js";import{_ as P}from"./Icon.vue_vue_type_script_setup_true_lang-DKR2ybp1.js";import{_ as Re}from"./DateRangePicker.vue_vue_type_script_setup_true_lang-DZ5QEZvZ.js";const Ue=["innerHTML"],Pe={key:0},Le={key:1},He=["innerHTML"],Ke={class:"app-modal-body"},Se={class:"app-modal-footer"},xe=oe({__name:"notice",setup(u){const{t:n}=le(),{initialize:s,handleResult:V,handleParams:w}=Ae(),k={columns:[{title:n("common.field_title"),dataKey:"title",key:"title",width:360},{title:n("common.field_publish_status"),dataKey:"status",key:"status",width:150},{title:n("common.field_publish_period"),dataKey:"publishPeriod",key:"publishPeriod",width:500},{title:n("common.field_last_modified_at"),dataKey:"lastModifiedAt",key:"lastModifiedAt",width:200},{title:n("common.label_action"),dataKey:"operation",key:"operation",width:160}]},p=A(s(k)),m=b(),_=b(!1),G=()=>f(this,null,function*(){yield Ce(w(p)).then(t=>{V(p,t)})}),C=b(""),y=b(!1),D=b(),d=A({}),I=A({title:[{required:!0,message:n("common.field_title_validation")}],content:[{required:!0,message:n("common.field_description_validation"),validator:$e}]}),H=t=>f(this,null,function*(){var o;(o=D.value)==null||o.clearValidate(),t&&t>0?(C.value=n("common.announcement_pages_edit_title"),yield De({id:t}).then(r=>{Object.assign(d,F({},r.data))})):(C.value=n("common.announcement_pages_add_title"),Object.assign(d,F({},Ee))),y.value=!0}),Y=()=>{y.value=!1},K=()=>f(this,null,function*(){yield D.value.validate(t=>f(this,null,function*(){t&&Me(d).then(o=>{o.code=="200"&&(y.value=!1,m.value.refresh())})}))}),E=(t=0)=>f(this,null,function*(){const o=t>0?[t]:m.value.selectedRowKeys();if(me(o)){re({message:n("common.label_please_select_one_record")}).then();return}Te({ids:o}).then(r=>{r.code=="200"&&(y.value=!1,m.value.refresh())})}),M=b(!1),S=b(""),Z=t=>f(this,null,function*(){S.value=t.content,M.value=!0});return ae(()=>f(this,null,function*(){ne("Page <<MessageNoticePage>> mounted.")})),(t,o)=>{const r=ue,g=pe,J=ce,N=_e,Q=fe,O=be,z=ve,h=ye,B=he,W=we,X=ge;return R(),U(de,null,[e(i(Ve),{title:t.$t("common.announcement_management")},null,8,["title"]),e(Q,{shadow:"never"},{default:a(()=>[e(i(ke),{ref_key:"dataTableRef",ref:m,modelValue:i(p),"onUpdate:modelValue":o[3]||(o[3]=l=>ie(p)?p.value=l:null),"row-selection-enabled":_.value,"toolbar-enabled":!0,onGetDataList:G},{toolbar:a(()=>[e(r,{type:"primary",onClick:o[0]||(o[0]=l=>H(0))},{default:a(()=>[v(c(t.$t("common.button_add")),1)]),_:1}),e(r,{onClick:o[1]||(o[1]=l=>_.value=!_.value)},{default:a(()=>[v(c(_.value?t.$t("common.label_batch_operation_cancel"):t.$t("common.label_batch_operation")),1)]),_:1}),e(r,{danger:"",onClick:o[2]||(o[2]=l=>E(0))},{default:a(()=>[v(c(t.$t("common.button_delete")),1)]),_:1})]),body:a(()=>[e(g,{prop:"title",label:t.$t("common.field_title"),fixed:"left"},null,8,["label"]),e(g,{label:t.$t("common.field_publish_period"),width:300},{default:a(l=>[$("div",{innerHTML:i(se)(l.row.startDatetime,l.row.endDatetime)},null,8,Ue)]),_:1},8,["label"]),e(g,{label:t.$t("common.field_publish_status"),width:800},{default:a(l=>[l.row.status?(R(),U("div",Pe,c(t.$t("common.field_publish_status_on")),1)):(R(),U("div",Le,c(t.$t("common.field_publish_status_off")),1))]),_:1},8,["label"]),e(g,{label:i(n)("common.label_action"),width:200,fixed:"right"},{default:a(l=>[e(N,null,{default:a(()=>[e(r,{type:"primary",size:"small",onClick:T=>Z(l.row)},{icon:a(()=>[e(i(P),{icon:"mdi:eye-outline"})]),_:2},1032,["onClick"]),e(r,{type:"primary",size:"small",onClick:T=>H(l.row.id)},{icon:a(()=>[e(i(P),{icon:"ant-design:edit-outlined"})]),_:2},1032,["onClick"]),e(J,{title:t.$t("common.label_confirm_delete_record"),onConfirm:T=>E(l.row.id)},{reference:a(()=>[e(r,{danger:"",type:"danger",size:"small",onConfirm:T=>E(l.row.id)},{icon:a(()=>[e(i(P),{icon:"ant-design:close-outlined"})]),_:2},1032,["onConfirm"])]),_:2},1032,["title","onConfirm"])]),_:2},1024)]),_:1},8,["label"])]),_:1},8,["modelValue","row-selection-enabled"])]),_:1}),e(O,{modelValue:M.value,"onUpdate:modelValue":o[4]||(o[4]=l=>M.value=l),class:"app-modal",title:t.$t("common.label_preview"),"destroy-on-close":""},{default:a(()=>[$("div",{innerHTML:S.value},null,8,He)]),_:1},8,["modelValue","title"]),e(O,{modelValue:y.value,"onUpdate:modelValue":o[11]||(o[11]=l=>y.value=l),class:"app-modal",title:C.value,"destroy-on-close":""},{default:a(()=>[$("div",Ke,[e(X,{ref_key:"entityFormRef",ref:D,"label-width":"auto",model:i(d),rules:i(I),onFinish:K},{default:a(()=>[e(h,{prop:"title",label:t.$t("common.field_title")},{default:a(()=>[e(z,{modelValue:i(d).title,"onUpdate:modelValue":o[5]||(o[5]=l=>i(d).title=l),placeholder:i(n)("common.field_title_placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(h,{prop:"content",label:t.$t("common.field_content")},{default:a(()=>[e(i(Fe),{value:i(d).content,"onUpdate:value":o[6]||(o[6]=l=>i(d).content=l)},null,8,["value"])]),_:1},8,["label"]),e(h,{prop:"status",label:t.$t("common.field_publish_status")},{default:a(()=>[e(W,{modelValue:i(d).status,"onUpdate:modelValue":o[7]||(o[7]=l=>i(d).status=l)},{default:a(()=>[e(B,{value:1},{default:a(()=>[v(c(i(n)("common.field_publish_status_finish")),1)]),_:1}),e(B,{value:0},{default:a(()=>[v(c(i(n)("common.field_publish_status_unfinished")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(h,{label:t.$t("common.field_publish_period")},{default:a(()=>[e(i(Re),{from:i(d).startDatetime,"onUpdate:from":o[8]||(o[8]=l=>i(d).startDatetime=l),to:i(d).endDatetime,"onUpdate:to":o[9]||(o[9]=l=>i(d).endDatetime=l),type:"datetime"},null,8,["from","to"])]),_:1},8,["label"]),e(h,{prop:"description",label:t.$t("common.field_description")},{default:a(()=>[e(z,{modelValue:i(d).description,"onUpdate:modelValue":o[10]||(o[10]=l=>i(d).description=l),placeholder:i(n)("common.field_description_placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),footer:a(()=>[$("div",Se,[e(N,null,{default:a(()=>[e(r,{"native-type":"submit",type:"primary",onClick:K},{default:a(()=>[v(c(t.$t("common.button_submit")),1)]),_:1}),e(r,{"native-type":"reset",onClick:Y},{default:a(()=>[v(c(t.$t("common.button_cancel")),1)]),_:1})]),_:1})])]),_:1},8,["modelValue","title"])],64)}}});export{xe as default};