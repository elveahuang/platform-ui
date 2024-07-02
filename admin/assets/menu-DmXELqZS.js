import{d as y,a as _,I as k,o as f,l as M,e as x,f as w,w as a,k as i,m as c,t as u,i as o,s as A,D as z,J as v,K as D,L,M as C,N as S,O as E}from"./index-DnwLZJOM.js";/* empty css                 */import"./el-progress-CRgrIIOP.js";import{_ as m}from"./Icon.vue_vue_type_script_setup_true_lang-DKR2ybp1.js";const I={class:"ml-2"},N={class:"ml-2"},R=y({__name:"AvatarDropdown",setup(e){const t=_(),{user:n,logout:s}=k(),l=()=>{s().then(()=>{t.push(A.app.getLogoutSuccessUrl())})};return f(()=>{M("Component <<AvatarDropdown>> is mounted.")}),(d,p)=>{const h=z,r=v,g=D,b=L;return x(),w(b,{placement:"bottom-end"},{dropdown:a(()=>[i(g,{style:{width:"250px"}},{default:a(()=>[i(r,{class:"!p-2"},{default:a(()=>[c("span",null,u(o(n).displayName),1)]),_:1}),i(r,{class:"!p-2",onClick:p[0]||(p[0]=U=>o(t).push("/user-center"))},{default:a(()=>[i(o(m),{icon:"mdi:account-circle-outline"}),c("span",I,u(d.$t("common.label_user_center")),1)]),_:1}),i(r,{class:"!p-2",onClick:l},{default:a(()=>[i(o(m),{icon:"mdi:logout"}),c("span",N,u(d.$t("common.label_logout")),1)]),_:1})]),_:1})]),default:a(()=>[i(h,{text:"",circle:"",size:"large"},{icon:a(()=>[i(o(m),{size:24,icon:"mdi:account"})]),_:1})]),_:1})}}}),G=[{key:"workbench",label:"common.label_workbench",icon:"mdi:view-dashboard-outline",authorities:["workbench"],path:"/workbench"},{key:"dashboard",label:"common.label_dashboard",icon:"mdi:view-dashboard-outline",authorities:["dashboard"],path:"/dashboard"},{key:"home",label:"common.site_management",icon:"mdi:apps",authorities:["site"],enabled:!0,items:[{key:"announcement-management",label:"common.announcement_management",icon:"mdi:bullhorn-outline",authorities:["site:announcement"],enabled:!0,path:"/announcement/index"},{key:"poster-management",label:"common.banner_management",icon:"mdi:bullhorn-outline",authorities:["site:poster"],enabled:!0,path:"/poster/index"},{key:"product-management",label:"common.product_management",icon:"mdi:map-outline",authorities:["site:product"],enabled:!1,path:"/product/index"}]},{key:"organization",label:"common.organization_management",icon:"mdi:account-group-outline",authorities:["organization"],items:[{key:"organization-organization",title:"Organization",icon:"mdiAccountMultiple",authorities:["organization:organization"],enabled:!1,path:"/organization/index"},{key:"organization-position",title:"Position",icon:"mdiAccountMultiple",authorities:["organization:position"],enabled:!1,path:"/position/index"},{key:"organization-user",label:"common.user_management",icon:"mdiAccountMultiple",authorities:["organization:user"],enabled:!0,path:"/user/index"},{key:"organization-vip",label:"common.vip_management",icon:"mdiAccountMultiple",authorities:["organization:user"],enabled:!0,path:"/account/index"},{key:"organization-group",title:"Group",icon:"mdiAccountMultiple",authorities:["organization:group"],enabled:!1,path:"/group/index"}]},{key:"resource",label:"common.resource_management",icon:"mdi:view-dashboard-outline",authorities:["resource"],enabled:!0,items:[{key:"resource-dict",label:"common.dict_management",icon:"mdiAccountMultiple",authorities:["resource:dict"],enabled:!0,path:"/dict/index"},{key:"resource-tag",label:"标签管理",icon:"mdiAccountMultiple",authorities:["resource:tag"],enabled:!0,path:"/tag/index"},{key:"resource:area",title:"Area",icon:"mdiAccountMultiple",authorities:["resource:area"],enabled:!1,path:"/admin/area/index"},{key:"resource-attachment",title:"Attachment",icon:"mdiAccountMultiple",authorities:["resource:attachment"],enabled:!1,path:"/admin/attachment/index"},{key:"resource-label",title:"Label",icon:"mdiAccountMultiple",authorities:["resource:label"],enabled:!1,path:"/admin/label/index"},{key:"resource-message",title:"Message",icon:"mdiAccountMultiple",authorities:["resource:message"],enabled:!1,path:"/admin/message/index"}]},{key:"system",title:"系统设置",icon:"mdi:cog-outline",authorities:["system"],enabled:!0,items:[{key:"system-authority",title:"AuthorityMiddleware",icon:"mdiAccountMultiple",authorities:["system:authority"],enabled:!1,path:"/admin/authority/index"},{key:"system-role",title:"RoleModel",icon:"mdiAccountMultiple",authorities:["system:role"],enabled:!1,path:"/admin/role/index"},{key:"system-setting",title:"System Settings",icon:"mdiAccountMultiple",authorities:["system:setting"],enabled:!1,path:"/admin/system/settings"},{key:"system-user",title:"On-Line UserModel",icon:"mdiAccountMultiple",authorities:["system:user"],enabled:!1,path:"/admin/on-line-user/index"},{key:"system-logging",title:"Logging",icon:"mdiAccountMultiple",authorities:["system:logging"],enabled:!1,path:"/admin/logging/index"},{key:"system-task",title:"Task",icon:"mdiAccountMultiple",authorities:["system:task"],enabled:!1,path:"/admin/task/index"},{key:"system-application",title:"ApplicationMiddleware",icon:"mdiAccountMultiple",authorities:["system:application"],enabled:!1,path:"/admin/application/index"},{key:"system-message",title:"消息管理",authorities:["system:message"],enabled:!0,path:"/message/notice/index"},{key:"system-online-users",title:"在线用户管理",authorities:["system:online-users"],enabled:!0,path:"/online/users/index"}]},{key:"tenant",title:"Tenant",icon:"mdiSitemap",authorities:["tenant"],enabled:!1,items:[{key:"tenant-tenant",title:"Tenant",icon:"mdiViewList",authorities:["tenant:tenant"],enabled:!1,path:"/admin/tenant/index"}]}],J=[{key:"user-center",label:"common.user_pages_user_center_title",icon:"mdi:shield-account-outline",path:"/user-center"},{key:"user-notice",label:"common.user_label_my_notice",icon:"mdi:message-outline",path:"/user-center/notice"},{key:"user-profile",label:"common.user_label_my_profile",icon:"mdi:information-outline",path:"/user-center/account"},{key:"user-password",label:"common.user_pages_change_password_title",icon:"mdi:lock-outline",path:"/user-center/password"},{key:"user-email",label:"common.user_pages_change_email_title",icon:"ant-design:mail-twotone",path:"/user-center/email"}],B=e=>e.filter(t=>C(t.enabled)||S(t.enabled)||t.enabled).map(t=>O(t));function O(e){var n;const{t}=E();return e.title=(n=e==null?void 0:e.title)!=null?n:t(e.label),e.items&&e.items.length&&e.items.length>0&&(e.items=B(e.items)),e}const P=(e,t)=>e.filter(n=>{var s;return(s=n==null?void 0:n.items)==null?void 0:s.find(l=>l.path===t)}).map(n=>n.key);export{R as _,P as a,B as g,G as m,J as u};
