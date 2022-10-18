import{M as u}from"./MapArea.634454d2.js";import{o as t,a,i as e,d,c as p,F as h,e as f,b as y,u as C,t as k,f as c,j as v,k as w,h as x}from"./index.8ca6bbdc.js";const F={class:"markdown-body"},g=e("pre",null,[e("code",null,`import { tryCatch } from '@wise/tools'
/**
 * asyncFunction: \u8FD4\u56DEpromise\u7684\u5F02\u6B65\u51FD\u6570
 * params\uFF1A \u5355\u72EC\u8C03\u7528asyncFunction\u6240\u9700\u7684\u5B9E\u53C2
 */
let [err, res] = await tryCatch(asyncFunction, params)
`)],-1),B=e("p",null,"\u5982\uFF1A",-1),I=e("pre",null,[e("code",null,`getUserInfo(userId).then(res => {}).catch(err => {})
`)],-1),N=e("p",null,"\u6539\u4E3A",-1),$=e("pre",null,[e("code",null,`let [err, res] = await tryCatch(getUserInfo, userId)
`)],-1),L=[g,B,I,N,$],V={__name:"doc",setup(l,{expose:n}){return n({frontmatter:{}}),(o,i)=>(t(),a("div",F,L))}},b={class:"flex"},D={class:"w-full"},M=["name"],j=d({__name:"index",setup(l){const n=[{name:"tryCatch",doc:V}],r=p(()=>n.map(o=>o.name));return(o,i)=>{const _=x("RuleCreator");return t(),a("div",b,[e("div",D,[e("ul",null,[(t(),a(h,null,f(n,(s,m)=>e("li",{key:m,class:"plant"},[e("a",{name:s.name,class:"title"},k(s.name),9,M),s.name==="ruleCreator"?(t(),c(_,{key:0})):v("",!0),(t(),c(w(s.doc)))])),64))])]),y(u,{list:C(r)},null,8,["list"])])}}});export{j as default};
