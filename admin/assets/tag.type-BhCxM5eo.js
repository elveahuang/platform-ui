var s=Object.defineProperty;var p=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var a=(t,e,n)=>(p(t,typeof e!="symbol"?e+"":e,n),n);import{G as i}from"./index-CLSrHFfR.js";import{B as d}from"./el-progress-DrA7EKYw.js";const g=t=>i("/api/v1/admin/tag/type/list",t),o=t=>i("/api/v1/admin/tag/type/delete",t),c=t=>i("/api/v1/admin/tag/type/details",t),u=t=>i("/api/v1/admin/tag/type/save",t),v=t=>i("/api/v1/admin/tag/list",t),m=t=>i("/api/v1/admin/tag/details",t),E=t=>i("/api/v1/admin/tag/save",t),T=t=>i("/api/v1/admin/tag/delete",t);class A{constructor(){a(this,"id",0);a(this,"code","");a(this,"title","");a(this,"label","");a(this,"description","");a(this,"source",0);a(this,"active",!1);a(this,"created_at",null);a(this,"created_by",null);a(this,"updated_at",null);a(this,"updated_by",null);a(this,"deleted_at",null);a(this,"deleted_by",null)}}class _ extends d{constructor(){super(...arguments);a(this,"code","");a(this,"tagTypeId",0);a(this,"sortOrder",999);a(this,"title","");a(this,"description","");a(this,"source",2);a(this,"data")}}export{A as T,c as a,u as b,o as c,_ as d,v as e,m as f,E as g,T as h,g as t};
