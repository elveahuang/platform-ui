import{d as e,L as a,m as t,o,g as s,f as n,bb as r,bc as i,b4 as c,ao as u}from"./index-cb371d87.js";/* empty css              */import{C as d}from"./core.service-9265dc03.js";const p={class:"app-page-content"},h=e({__name:"wechat",setup:e=>(a((async()=>{t("Component - <<WeChat>> is mounted."),await d.initialize().then(),await(async()=>{let e=r.currentRoute.value.query||{};t(`WeChat Page setup - Current location is [${location.href}]...`),e.code&&!i(e.code)?t(`Current OAuth Code - ${e.code}`):(t("Empty code, redirect to WeChat oauth..."),await c.auth(""))})().then()})),(e,a)=>{const t=u;return o(),s("div",p,[n(t)])})});export{h as default};
