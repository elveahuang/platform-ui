import{D as a,H as s,B as e,Q as t,J as n,K as l,V as o,a1 as i,a5 as r,a8 as m}from"./index-527a7af3.js";import{E as d}from"./card-79b59d5f.js";import{u,E as p}from"./table-151f077c.js";import"./tag-6c9808f2.js";import"./tooltip-4ed993c7.js";import{a as f}from"./user-45680ed1.js";import"./use-form-item-9fce7dbb.js";const c={class:"app-main"},g=a({__name:"center",setup(a){const g=s(u({columns:[{name:"username",label:"用户名",field:"username",sortable:!0},{name:"display_name",label:"昵称",field:"display_name",sortable:!0},{name:"name",label:"全面",field:"name"},{name:"status",label:"状态",field:"status"}]}));return e(!1),t((async()=>{await(async a=>{g.toggleLoadingStatus(!0),f(g.processTableParams(a.pagination,a.filter)).then((async a=>{await g.handlePageResponse(a)})).finally((()=>{g.toggleLoadingStatus(!1)}))})({pagination:g.pagination,filter:void 0})})),(a,s)=>{const e=p,t=d;return n(),l("div",c,[o(t,{shadow:"never"},{header:i((()=>[r("用户")])),default:i((()=>[m("div",null,[o(e,{columns:g.columns,data:g.rows,fixed:""},null,8,["columns","data"])])])),_:1})])}}});export{g as default};
