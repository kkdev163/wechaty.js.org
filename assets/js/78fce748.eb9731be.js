"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2605],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(a),m=r,h=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),i="tabItem_vU9c",c="tabItemActive_cw6a";var p=function(e){var t,a=e.lazy,r=e.block,p=e.defaultValue,u=e.values,s=e.groupId,f=e.className,m=n.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),d=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),y=k.tabGroupChoices,w=k.setTabGroupChoices,g=(0,n.useState)(d),b=g[0],v=g[1],N=[];if(null!=s){var O=y[s];null!=O&&O!==b&&h.some((function(e){return e.value===O}))&&v(O)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=h[a].value;v(n),null!=s&&(w(s,n),setTimeout((function(){var e,a,n,r,o,l,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&o<=p&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},f)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},96423:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return f},default:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(55064),i=a(58215),c=["components"],p={title:"Deploy in WeChat Official Account"},u=void 0,s={unversionedId:"howto/wechat-official",id:"howto/wechat-official",isDocsHomePage:!1,title:"Deploy in WeChat Official Account",description:"WeChat Official Account is a perfect enforcement of the concept of SoLoMo(Social, Local, Mobile) Marketing and has tonnes of features to interact with the audience. In this how to guide, you will learn how to deploy the bot in WeChat Official Account locally and integrate bot from the list of examples present in starter templete.",source:"@site/docs/howto/wechat-official.mdx",sourceDirName:"howto",slug:"/howto/wechat-official",permalink:"/docs/howto/wechat-official",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/wechat-official.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634541176,formattedLastUpdatedAt:"10/18/2021",frontMatter:{title:"Deploy in WeChat Official Account"},sidebar:"docs",previous:{title:"Deploy in Gitter",permalink:"/docs/howto/deploy-gitter"},next:{title:"Deploying with Heroku",permalink:"/docs/howto/heroku"}},f=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integration",id:"integration",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]},{value:"References",id:"references",children:[]},{value:"Blogs",id:"blogs",children:[]}],m={toc:f};function h(e){var t=e.components,p=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WeChat Official Account is a perfect enforcement of the concept of SoLoMo(Social, Local, Mobile) Marketing and has tonnes of features to interact with the audience. In this how to guide, you will learn how to deploy the bot in WeChat Official Account locally and integrate bot from the list of examples present in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy in Lark",src:a(51659).Z})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-puppet-official-account"},"Wechaty puppet official account"),".")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nexport WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n"))),(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nexport WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n"))),(0,o.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-official-account\nset WECHATY_PUPPET=wechaty-puppet-official-account\nnpm start\n")))),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to WeChat Official Account. The step is similar for all other bots as well."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Official Wechaty package: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,o.kt)("li",{parentName:"ol"},"Address of the service provider that supports HTTP and HTTPS such as 80, 443. Several internet penetration tools: ",(0,o.kt)("a",{parentName:"li",href:"https://localtunnel.github.io/www/"},"localtunnel"),"."),(0,o.kt)("li",{parentName:"ol"},"Permanent external network address: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ngrok"},"ngrok"),".")),(0,o.kt)("p",null,"You can follow up the steps mentioned below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize the project by creating a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mkdir my-bot\ncd my-bot\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the dependencies using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Develop temporary internet address as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm install -g localtunnel lt \u2013port 80\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add the dependencies for using the bot with WeChat Official Account:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty-puppet-official-account\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," and add a file ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot.js"),". Add any of the functions from ",(0,o.kt)("a",{href:"#"}," add functionality to the bot")," section to the snippet below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n} from 'wechaty'\nconsole.log(welcome)\nconst bot = new Wechaty()\n/*\n *Your function goes here\n */\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Configure your ",(0,o.kt)("inlineCode",{parentName:"li"},"appId"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"appSecret"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"token"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"port")," as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const bot = new Wechaty({\n    name: \'<your bot name>\',\n  puppet: new PuppetOA({\n    appId: "wxbd801c28fbe1bbbd",\n    appSecret: "6959408a3ba1c82db1a11d941df65764",\n    token: "token",\n    port: 80\n  })\n})\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"After you are done with the file, you can run the bot using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-official-account\nnode src/my-bot.js\n")),(0,o.kt)("p",null,"Now, you are ready to play with the bot!"),(0,o.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out the more bot repository from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out the Wechat Official Account repository at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account"},"wechaty-puppet-official-account"),".")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/11/06/wechaty-puppet-oa-released-en/"},"Official-Account Puppet Released"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/"},"Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty"),".")))}h.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},51659:function(e,t,a){t.Z=a.p+"assets/images/wechaty-official-account-464a8aba36b03d40fa1ed37a90e9644c.webp"}}]);