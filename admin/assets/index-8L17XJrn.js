var H=Object.defineProperty;var U=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var z=(a,t,i)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,L=(a,t)=>{for(var i in t||(t={}))K.call(t,i)&&z(a,i,t[i]);if(U)for(var i of U(t))J.call(t,i)&&z(a,i,t[i]);return a};var f=(a,t,i)=>new Promise((C,$)=>{var w=s=>{try{c(i.next(s))}catch(u){$(u)}},y=s=>{try{c(i.throw(s))}catch(u){$(u)}},c=s=>s.done?C(s.value):Promise.resolve(s.value).then(w,y);c((i=i.apply(a,t)).next())});/* empty css             */import{u as Q,_ as W,E as X,a as Y}from"./checkbox-cbt2KhmF.js";import{a as Z,E as x}from"./pagination-E6r1dt-g.js";import{E as ee}from"./card-33XvV49l.js";import{E as te}from"./page-header-qisSPiPz.js";import{p as E,d as ne,n as oe,q as T,r as k,o as le,l as ae,e as N,g as ie,j as n,w as l,k as me,v as b,t as v,i as r,f as se,x as de,y as re,F as ce,z as ue,A as pe}from"./index-FwjQvVHk.js";import{E as _e,a as fe,b as be}from"./index-7AmMDhsh.js";import"./index-neY9xiOE.js";import"./event-Bjhng1YN.js";import"./strings-fKtl8Kxh.js";const ve=a=>E("/api/v1/admin/announcement/list",a),ye=a=>E("/api/v1/admin/announcement/details",a),ke=a=>E("/api/v1/admin/announcement/save",a),$e=a=>E("/api/v1/admin/announcement/delete",a),ge={class:"pb-4"},Re=ne({__name:"index",setup(a){const{t}=oe(),{initialize:i,handleResult:C,handleParams:$}=Q(),w=[{title:t("common.field_title"),dataIndex:"title",key:"title",width:300,sorter:!0},{title:t("common.field_content"),dataIndex:"content",key:"content"},{title:t("common.field_last_modified_at"),dataIndex:"lastModifiedAt",key:"lastModifiedAt",sorter:!0},{title:t("common.label_action"),dataIndex:"operation",key:"operation",width:200}],y=T(i(w)),c=k(),s=()=>f(this,null,function*(){yield ve($(y)).then(e=>{C(y,e)})}),u=k(""),p=k(!1),D=k(),g=k(!1),d=T({}),P=T({title:[{required:!0,message:t("common.field_title_validation")}],content:[{required:!0,message:t("common.field_description_validation")}]}),I=e=>f(this,null,function*(){p.value=!0,e&&e>0?(u.value=t("common.announcement_pages_edit_title"),yield ye({id:e}).then(o=>{Object.assign(d,L({},o.data))})):u.value=t("common.announcement_pages_add_title")}),q=()=>{p.value=!1},V=()=>f(this,null,function*(){yield D.value.validate().then(()=>f(this,null,function*(){ke(d).then(e=>{e.code=="200"&&(p.value=!1,c.value.refresh())})}))}),R=(e=0)=>f(this,null,function*(){const o=e>0?[e]:c.value.selectedRowKeys();if(ue(o)){pe({message:"请选择"}).then();return}$e({ids:o}).then(F=>{F.code=="200"&&(p.value=!1,c.value.refresh())})});return le(()=>f(this,null,function*(){ae("Page <<AnnouncementAdminListPage>> mounted.")})),(e,o)=>{const F=te,_=Z,B=x,h=X,S=ee,A=_e,M=fe,j=be,O=Y;return N(),ie(ce,null,[n(F,{title:e.$t("common.announcement_management")},null,8,["title"]),n(S,null,{default:l(()=>[me("div",ge,[n(B,null,{default:l(()=>[n(_,{type:"primary",onClick:o[0]||(o[0]=m=>I(0))},{default:l(()=>[b(v(e.$t("common.button_add")),1)]),_:1}),n(_,{onClick:o[1]||(o[1]=m=>g.value=!r(g))},{default:l(()=>[b(v(r(g)?e.$t("common.label_batch_operation_cancel"):e.$t("common.label_batch_operation")),1)]),_:1}),n(_,{onClick:o[2]||(o[2]=m=>R(0))},{default:l(()=>[b(v(e.$t("common.button_delete")),1)]),_:1})]),_:1})]),n(r(W),{ref_key:"dataTableRef",ref:c,model:y,"onUpdate:model":o[3]||(o[3]=m=>y=m),onGetDataList:s},{default:l(()=>[r(g)?(N(),se(h,{key:0,type:"selection",width:"30",class:"text-center"})):de("",!0),n(h,{label:e.$t("common.field_title"),prop:"title"},null,8,["label"]),n(h,{label:e.$t("common.field_content"),prop:"content"},null,8,["label"]),n(h,{fixed:"right",label:e.$t("common.label_action"),width:"200"},{default:l(m=>[n(_,{link:"",type:"primary",size:"small",onClick:G=>I(m.row.id)},{default:l(()=>[b(v(e.$t("common.button_edit")),1)]),_:2},1032,["onClick"]),n(_,{link:"",type:"primary",size:"small",onClick:G=>R(m.row.id)},{default:l(()=>[b(v(e.$t("common.button_delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1}),n(O,{class:"app-modal",modelValue:r(p),"onUpdate:modelValue":o[7]||(o[7]=m=>re(p)?p.value=m:null),title:r(u)},{footer:l(()=>[n(B,null,{default:l(()=>[n(_,{type:"primary",onClick:V},{default:l(()=>[b(v(e.$t("common.button_submit")),1)]),_:1}),n(_,{onClick:q},{default:l(()=>[b(v(e.$t("common.button_cancel")),1)]),_:1})]),_:1})]),default:l(()=>[n(S,null,{default:l(()=>[n(j,{ref_key:"entityForm",ref:D,model:d,rules:P,onFinish:V},{default:l(()=>[n(M,{name:"title",label:e.$t("common.field_title")},{default:l(()=>[n(A,{value:d.title,"onUpdate:value":o[4]||(o[4]=m=>d.title=m),placeholder:r(t)("common.field_title_placeholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),n(M,{name:"content",label:e.$t("common.field_content")},{default:l(()=>[n(A,{value:d.content,"onUpdate:value":o[5]||(o[5]=m=>d.content=m),placeholder:r(t)("common.field_content_placeholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),n(M,{name:"description",label:e.$t("common.field_description")},{default:l(()=>[n(A,{value:d.description,"onUpdate:value":o[6]||(o[6]=m=>d.description=m),placeholder:r(t)("common.field_description_placeholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["modelValue","title"])],64)}}});export{Re as default};
