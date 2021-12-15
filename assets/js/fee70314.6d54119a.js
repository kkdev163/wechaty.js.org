"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1348],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},s),{},{components:n})):a.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(86010),i="tabItem_vU9c",l="tabItemActive_cw6a";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,y=o(),b=y.tabGroupChoices,v=y.setTabGroupChoices,g=(0,a.useState)(f),w=g[0],k=g[1],O=[];if(null!=p){var T=b[p];null!=T&&T!==w&&h.some((function(e){return e.value===T}))&&k(T)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;k(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,c,i,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,c=window,i=c.innerHeight,u=c.innerWidth,n>=0&&o<=u&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.target)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.target)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},97250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=n(55064),i=n(58215),l=["components"],u={title:"Create a bot"},s=void 0,p={unversionedId:"howto/degraded/degraded-wechaty",id:"howto/degraded/degraded-wechaty",isDocsHomePage:!1,title:"Create a bot",description:"We have the world's shortest lines code of chatbot in all programming languages!",source:"@site/docs/howto/degraded/degraded-wechaty.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-wechaty",permalink:"/docs/howto/degraded/degraded-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/degraded/degraded-wechaty.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634707553,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Create a bot"}},d=[],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We have the world's shortest lines code of chatbot in all programming languages!"))),(0,o.kt)(c.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  // TODO: init your bot at here...\n  // bot.on('scan', console.info)\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n"))),(0,o.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n  bot = Wechaty()\n  # TODO: init your bot at here\n  await bot.start()\n\nasyncio.run(main())\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  bot = wechaty.NewWechaty()\n  // TODO: init your bot at here...\n  bot.Start()\n}\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = new Wechaty()\n    // TODO: init your bot at here...\n    bot.start(true);\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$bot = \\IO\\Github\\Wechaty\\Wechaty::getInstance();\n// TODO: init your bot at here...\n$bot->start();\n"))),(0,o.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    bot = new Wechaty()\n    // TODO: init your bot at here\n    bot.start()\n    Thread.currentThread().join()\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var bot = new Wechaty()\n// TODO: init your bot at here...\nbot.Start();\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use std::env;\n\nuse wechaty::prelude::*;\nuse wechaty_puppet_service::PuppetService;\n\nlet bot = Wechaty::new();\n// TODO: init your bot at here...\nbot\n  .start()\n  .await;\n")))))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);