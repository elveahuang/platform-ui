System.register(["./index-legacy-96c00248.js","./card-legacy-6f428e5c.js","./table-legacy-a4a6d8e5.js","./tag-legacy-b3f7efe1.js","./tooltip-legacy-518b8698.js","./table-v2-legacy-eb465def.js","./use-form-item-legacy-4c6c7914.js","./typescript-legacy-c05703b5.js","./castArray-legacy-249543af.js"],(function(a,e){"use strict";var l,t,n,s,i,r,u,d,o,c,m,g,y,h,f,p,w;return{setters:[a=>{l=a.bl,t=a.t,n=a.y,s=a.r,i=a.H,r=a.A,u=a.B,d=a.L,o=a.T,c=a.X,m=a.$,g=a.E},a=>{y=a.E},a=>{h=a.u,f=a.E},null,null,a=>{p=a.a,w=a.E},null,null,null],execute:function(){const e={class:"app-main"},b={style:{height:"400px"}};a("default",t({__name:"index",setup(a){const t=n(h({columns:[{name:"username",label:"用户名",field:"username",sortable:!0},{name:"display_name",label:"昵称",field:"display_name",sortable:!0},{name:"name",label:"全面",field:"name"},{name:"status",label:"状态",field:"status"}]})),$=async a=>{var e;t.toggleLoadingStatus(!0),(e=t.processTableParams(a.pagination,a.filter),l("/admin/announcement/search",e)).then((async a=>{await t.handlePageResponse(a)})).finally((()=>{t.toggleLoadingStatus(!1)}))};s(!1);const j=((a=10,e="column-",l)=>Array.from({length:a}).map(((a,t)=>({...l,key:`${e}${t}`,dataKey:`${e}${t}`,title:`Column ${t}`,width:150}))))(10),v=((a,e=200,l="row-")=>Array.from({length:e}).map(((e,t)=>a.reduce(((a,e,l)=>(a[e.dataKey]=`Row ${t} - Col ${l}`,a)),{id:`${l}${t}`,parentId:null}))))(j,1e3);return i((async()=>{await $({pagination:t.pagination,filter:void 0})})),(a,l)=>{const n=w,s=f,i=y;return r(),u("div",e,[d(i,{shadow:"never"},{header:o((()=>[c("用户")])),default:o((()=>[m("div",b,[d(g(p),null,{default:o((({height:a,width:e})=>[d(n,{columns:g(j),data:g(v),width:e,height:a,fixed:""},null,8,["columns","data","width","height"])])),_:1})]),m("div",null,[d(s,{columns:t.columns,data:t.rows,fixed:""},null,8,["columns","data"])])])),_:1})])}}}))}}}));