var pe=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var K=(u,a,m)=>a in u?pe(u,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):u[a]=m,J=(u,a)=>{for(var m in a||(a={}))ce.call(a,m)&&K(u,m,a[m]);if(G)for(var m of G(a))_e.call(a,m)&&K(u,m,a[m]);return u};var b=(u,a,m)=>new Promise((d,T)=>{var M=p=>{try{_(m.next(p))}catch(h){T(h)}},f=p=>{try{_(m.throw(p))}catch(h){T(h)}},_=p=>p.done?d(p.value):Promise.resolve(p.value).then(M,f);_((m=m.apply(u,a)).next())});import{u as fe}from"./data-table-hoyaBoX8.js";import{d as te,c as Q,r as c,B as ve,b as D,e as ae,H as j,I as W,J as ye,T as be,K as O,L as we,N as X,O as Y,P as ge,Q as he,S as ke,x as N,z as Ce,A as Z,o as De,l as Te,f as I,h as t,w as l,k as $,t as g,i as o,m as $e,C as B,F as ee,j as Me,U as Ae,D as Pe,E as Fe,G as Ee,M as Ie,V as Ve}from"./index-LAUg_gIy.js";import"./ThemeDropdown.vue_vue_type_style_index_0_scoped_8799785f_lang-OjP0H7qd.js";import{_ as z}from"./AppIcon.vue_vue_type_script_setup_true_lang-Wvo-JpA-.js";import{A as He}from"./index-v-rewEHM.js";import{R as Ne}from"./dayjs-kLGDAtiY.js";import{_ as Re}from"./DataTable.vue_vue_type_script_setup_true_lang-XP2qJvzK.js";import{_ as Ue}from"./index.min-btp6Ld-y.js";import{e as Le}from"./validation-KYXQxgKu.js";import{C as Se}from"./index-UFit2KBP.js";import"./index-6Ge2kbvk.js";import{I as Oe,_ as Be}from"./index-3hLfEFUH.js";import{R as ze,_ as xe}from"./index-us7MUnSq.js";import{_ as qe,F as Ge}from"./index-kv_-l96w.js";import{_ as Ke}from"./index-3F_NwFdG.js";import{_ as Je}from"./index-4JvN5SzC.js";import"./index-h-oJ0oAC.js";import"./responsiveObserve-mytNdmoG.js";import"./index-Ic3M0CEW.js";import"./shallowequal-XAMZcpI1.js";import"./css-_TWCHoR_.js";import"./LeftOutlined-TcHUoKEl.js";import"./RightOutlined-Gno4rF9I.js";import"./isMobile-FiHTxwE3.js";import"./useMemo-frD2wUf7.js";import"./useMergedState-LOGGdAbX.js";import"./index-q0ZxKEMH.js";import"./move-2Au08NNy.js";import"./index-1g2Z8dMg.js";import"./dropdown-bNQOYC7Q.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./user-RWLBcD52.js";import"./EyeOutlined-8rYBzzG9.js";import"./Col-NgnTZqcx.js";import"./useFlexGapSupport-a8fynpvT.js";const Qe=te({__name:"date-range-picker",props:{with:{type:Number,required:!1,default:360},type:{type:String,default:"datetime"},from:{type:String,default:""},to:{type:String,default:""}},emits:["update:from","update:to"],setup(u,{emit:a}){const m=a,d=u,T=()=>d.type==="datetime"?{hideDisabledOptions:!0,defaultValue:[j("00:00:00","HH:mm:ss"),j("23:59:59","HH:mm:ss")]}:!1,M=r=>r==="datetime"?W:r==="date"?ye:r==="time"?be:W,f=(r,v)=>d.type==="datetime"?[O(r),O(v)]:d.type==="date"?[we(r),O(v)]:d.type==="time"?[X(r),X(v)]:[null,null],_=r=>{if(!Y(r)){if(d.type==="datetime")return ge(r,"");if(d.type==="date")return he(r,"");if(d.type==="time")return ke(r,"")}return""},p=Q(()=>d.from),h=Q(()=>d.to),k=c(f(d.from,d.to)),w=c(M(d.type)),A=c([!0,!0]),i=c(!0),R=c(T()),U=r=>{Y(r)?(m("update:from",""),m("update:to","")):(m("update:from",_(r[0])),m("update:to",_(r[1])))};return ve([p,h],([r,v])=>{k.value=f(r,v)}),(r,v)=>{const V=Ne;return D(),ae(V,{"allow-clear":i.value,"allow-empty":A.value,value:k.value,"onUpdate:value":v[0]||(v[0]=P=>k.value=P),"show-time":R.value,format:w.value,onChange:U},null,8,["allow-clear","allow-empty","value","show-time","format"])}}}),je=u=>N("/api/v1/admin/announcement/list",u),We=u=>N("/api/v1/admin/announcement/details",u),Xe=u=>N("/api/v1/admin/announcement/save",u),Ye=u=>N("/api/v1/admin/announcement/delete",u),Ze={id:0,title:"",content:"",description:"",status:!1,startDatetime:"",endDatetime:""},et=["innerHTML"],tt={key:0},at={key:1},nt=["innerHTML"],Ot=te({__name:"index",setup(u){const{t:a}=Ce(),{initialize:m,handleResult:d,handleParams:T}=fe(),M=[{title:a("common.field_title"),dataIndex:"title",key:"title",width:200,ellipsis:!0,fixed:"left"},{title:a("common.field_publish_status"),dataIndex:"status",key:"status",width:100,ellipsis:!0},{title:a("common.field_publish_period"),dataIndex:"publishPeriod",key:"publishPeriod",width:200,ellipsis:!0},{title:a("common.field_last_modified_at"),dataIndex:"lastModifiedAt",key:"lastModifiedAt",width:100,ellipsis:!0},{title:a("common.label_action"),dataIndex:"operation",key:"operation",width:45,ellipsis:!0,fixed:"right"}],f=Z(m(M)),_=c(),p=c(!1),h=()=>b(this,null,function*(){yield je(T(f)).then(n=>{d(f,n)})}),k=c(""),w=c(!1),A=c(),i=Z(Ze),R={title:[{required:!0,message:a("common.field_title_validation")}],content:[{required:!0,message:a("common.field_description_validation"),validator:Le}]},U=()=>{i.id=0,i.title="",i.content="",i.description="",i.status=!1,i.startDatetime="",i.endDatetime=""},r=n=>b(this,null,function*(){var e;(e=A.value)==null||e.clearValidate(),n&&n>0?(k.value=a("common.announcement_pages_edit_title"),yield We({id:n}).then(y=>{w.value=!0,Object.assign(i,J({},y.data))})):(w.value=!0,k.value=a("common.announcement_pages_add_title"),U())}),v=()=>{w.value=!1},V=()=>b(this,null,function*(){yield A.value.validate().then(()=>b(this,null,function*(){Xe(i).then(n=>{n.code=="200"&&(w.value=!1,_.value.refresh())})}))}),P=(n=0)=>b(this,null,function*(){const e=n>0?[n]:_.value.selectedRowKeys();if(Pe(e)){Fe({message:a("common.label_please_select_one_record")}).then();return}Ye({ids:e}).then(y=>{y.code=="200"&&(w.value=!1,_.value.refresh())})}),F=c(!1),H=c(""),ne=n=>b(this,null,function*(){H.value=n.content,F.value=!0}),oe=()=>b(this,null,function*(){H.value="",F.value=!1}),le=()=>b(this,null,function*(){H.value="",F.value=!1});return De(()=>b(this,null,function*(){Te("Page <<AnnouncementAdminListPage>> mounted.")})),(n,e)=>{const y=Ee,ie=Ke,se=Je,L=Se,x=Ie,me=Oe,E=qe,q=ze,re=xe,ue=Be,de=Ge;return D(),I(ee,null,[t(o(He),null,{title:l(()=>[$(g(n.$t("common.announcement_management")),1)]),_:1}),t(L,null,{default:l(()=>[t(o(Re),{ref_key:"dataTableRef",ref:_,model:o(f),"onUpdate:model":e[3]||(e[3]=s=>$e(f)?f.value=s:null),onGetDataList:h,"row-selection-enabled":p.value,"tool-bar-enabled":!0},{toolBar:l(()=>[t(y,{type:"primary",onClick:e[0]||(e[0]=s=>r(0))},{default:l(()=>[$(g(n.$t("common.button_add")),1)]),_:1}),t(y,{onClick:e[1]||(e[1]=s=>p.value=!p.value)},{default:l(()=>[$(g(p.value?n.$t("common.label_batch_operation_cancel"):n.$t("common.label_batch_operation")),1)]),_:1}),t(y,{danger:"",onClick:e[2]||(e[2]=s=>P(0))},{default:l(()=>[$(g(n.$t("common.button_delete")),1)]),_:1})]),bodyCell:l(({column:s,record:C})=>[s.dataIndex==="publishPeriod"?(D(),I("div",{key:0,innerHTML:o(Ve)(C.startDatetime,C.endDatetime)},null,8,et)):B("",!0),s.dataIndex==="status"?(D(),I(ee,{key:1},[C.status?(D(),I("div",tt,g(n.$t("common.field_publish_status_on")),1)):(D(),I("div",at,g(n.$t("common.field_publish_status_off")),1))],64)):B("",!0),s.dataIndex==="operation"?(D(),ae(se,{key:2},{default:l(()=>[t(y,{type:"primary",size:"small",onClick:S=>ne(C)},{icon:l(()=>[t(o(z),{icon:"mdi:eye-outline"})]),_:2},1032,["onClick"]),t(y,{type:"primary",size:"small",onClick:S=>r(C.id)},{icon:l(()=>[t(o(z),{icon:"ant-design:edit-outlined"})]),_:2},1032,["onClick"]),t(ie,{title:n.$t("common.label_confirm_delete_record"),onConfirm:S=>P(C.id)},{default:l(()=>[t(y,{danger:"",type:"primary",size:"small",onConfirm:S=>P(C.id)},{icon:l(()=>[t(o(z),{icon:"ant-design:close-outlined"})]),_:2},1032,["onConfirm"])]),_:2},1032,["title","onConfirm"])]),_:2},1024)):B("",!0)]),_:1},8,["model","row-selection-enabled"])]),_:1}),t(x,{class:"app-modal",open:F.value,"onUpdate:open":e[4]||(e[4]=s=>F.value=s),title:n.$t("common.label_preview"),onOk:oe,onCancel:le},{default:l(()=>[t(L,null,{default:l(()=>[Me("div",{innerHTML:H.value},null,8,nt)]),_:1})]),_:1},8,["open","title"]),t(x,{class:"app-modal",open:w.value,"onUpdate:open":e[11]||(e[11]=s=>w.value=s),title:k.value,onOk:V,onCancel:v},{default:l(()=>[t(L,null,{default:l(()=>[t(de,Ae({ref_key:"entityForm",ref:A,model:o(i),rules:R,onFinish:V},{labelCol:{span:4},wrapperCol:{span:16}}),{default:l(()=>[t(E,{name:"title",label:n.$t("common.field_title")},{default:l(()=>[t(me,{value:o(i).title,"onUpdate:value":e[5]||(e[5]=s=>o(i).title=s),placeholder:o(a)("common.field_title_placeholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),t(E,{name:"content",label:n.$t("common.field_content")},{default:l(()=>[t(o(Ue),{value:o(i).content,"onUpdate:value":e[6]||(e[6]=s=>o(i).content=s)},null,8,["value"])]),_:1},8,["label"]),t(E,{name:"status",label:n.$t("common.field_publish_status"),"label-col":{span:4},"wrapper-col":{span:16}},{default:l(()=>[t(re,{value:o(i).status,"onUpdate:value":e[7]||(e[7]=s=>o(i).status=s)},{default:l(()=>[t(q,{value:!0},{default:l(()=>[$(g(o(a)("common.field_publish_status_finish")),1)]),_:1}),t(q,{value:!1},{default:l(()=>[$(g(o(a)("common.field_publish_status_unfinished")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),t(E,{name:"endDatetime",label:n.$t("common.field_publish_period")},{default:l(()=>[t(o(Qe),{from:o(i).startDatetime,"onUpdate:from":e[8]||(e[8]=s=>o(i).startDatetime=s),to:o(i).endDatetime,"onUpdate:to":e[9]||(e[9]=s=>o(i).endDatetime=s)},null,8,["from","to"])]),_:1},8,["label"]),t(E,{name:"description",label:n.$t("common.field_description")},{default:l(()=>[t(ue,{value:o(i).description,"onUpdate:value":e[10]||(e[10]=s=>o(i).description=s),placeholder:o(a)("common.field_description_placeholder"),"allow-clear":""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},16,["model"])]),_:1})]),_:1},8,["open","title"])],64)}}});export{Ot as default};
