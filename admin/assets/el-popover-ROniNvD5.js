var p=(a,r,l)=>new Promise((c,t)=>{var o=e=>{try{i(l.next(e))}catch(d){t(d)}},s=e=>{try{i(l.throw(e))}catch(d){t(d)}},i=e=>e.done?c(e.value):Promise.resolve(e.value).then(o,s);i((l=l.apply(a,r)).next())});import{d as _,o as y,l as S,e as h,g as v,m as f,ae as b,_ as k,G as m,r as z,c as g,aX as C,aY as K,k as w,w as P,aZ as q,a_ as B}from"./index-D6izgmYW.js";import"./el-progress-CCsg546T.js";/* empty css                 */import{D,i as $}from"./data-table-s0SF3upW.js";const A={class:"app-page-header"},V={class:"title"},T=_({__name:"PageHeader",setup(a){return y(()=>p(this,null,function*(){S("Page <<AppPageHeader>> mounted.")})),(r,l)=>(h(),v("div",A,[f("div",V,[b(r.$slots,"title",{},void 0,!0)])]))}}),Z=k(T,[["__scopeId","data-v-5211be51"]]),H={class:"data-table"},L={class:"data-table-toolbar"},M={class:"data-table-body"},N={class:"data-table-footer"},F=_({__name:"Table",props:{model:{type:D,require:!1,default:()=>$()},toolbarEnabled:{type:Boolean,require:!1,default:!1},rowSelectionEnabled:{type:Boolean,require:!1,default:!1},rowSelectionMultipleEnabled:{type:Boolean,require:!1,default:!0},rowSelection:{type:Object,require:!1,default:null},rowKey:{type:String,require:!1,default:"id"},fixed:{type:Boolean,require:!1,default:!1}},emits:["getDataList"],setup(a,{expose:r,emit:l}){const c=l,t=a,o=m(t.model),s=m({tableSelectedRowKeys:[],tableSelectedRows:[]}),i=z(),e=g(()=>({showSizeChanger:!1,defaultPageSize:10,pageSize:o.pagination.size,current:o.pagination.page,total:o.pagination.total}));return g(()=>t.rowSelectionEnabled?t.rowSelection?t.rowSelection:{type:t.rowSelectionMultipleEnabled?"checkbox":"radio",onChange:(n,u)=>{s.tableSelectedRowKeys=n,s.tableSelectedRows=u},getCheckboxProps:n=>({id:n[t.rowKey]})}:null),r({refresh:()=>p(this,null,function*(){o.pagination.page=1,c("getDataList")}),selectedRowKeys:()=>Array.from(s.tableSelectedRowKeys),selectedRows:()=>Array.from(s.tableSelectedRows)}),y(()=>p(this,null,function*(){S("Component <<DataTable>> mounted."),c("getDataList")})),(n,u)=>{const R=q,x=B;return h(),v("div",H,[C(f("div",L,[b(n.$slots,"toolbar")],512),[[K,a.toolbarEnabled]]),f("div",M,[w(R,{ref_key:"tableRef",ref:i,class:"w-full",fixed:a.fixed,columns:o.columns,data:o.items,"row-key":a.rowKey,onSelectionChange:a.rowSelection},{default:P(()=>[b(n.$slots,"body")]),_:3},8,["fixed","columns","data","row-key","onSelectionChange"])]),f("div",N,[w(x,{modelValue:e.value.current,"onUpdate:modelValue":u[0]||(u[0]=E=>e.value.current=E),total:e.value.total,"page-size":e.value.pageSize},null,8,["modelValue","total","page-size"])])])}}});export{Z as A,F as _};