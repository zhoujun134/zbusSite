"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3939],{6053:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=t(5893),r=t(1151);const i={slug:"double-pointer",title:"03-\u53cc\u6307\u9488",date:new Date("2023-12-05T08:33:19.000Z"),author:"zhouJun134",tags:["java","\u5251\u6307offer","\u6570\u7ec4","\u53cc\u6307\u9488"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898","\u6570\u7ec4","\u53cc\u6307\u9488"]},s="03 \u53cc\u6307\u9488",l={unversionedId:"skill/codeOffer/c2-double-pointer/\u53cc\u6307\u9488",id:"skill/codeOffer/c2-double-pointer/\u53cc\u6307\u9488",title:"03-\u53cc\u6307\u9488",description:"\u65b9\u5411\u76f8\u53cd\u7684\u53cc\u6307\u9488\u7ecf\u5e38\u7528\u6765\u6c42\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u548c\u3002\u4e00\u4e2a\u6307\u9488P1\u6307\u5411\u6570\u7ec4\u7684\u7b2c1\u4e2a\u6570\u5b57\uff0c\u53e6\u4e00\u4e2a\u6307\u9488P2\u6307\u5411\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u53ca\u4e00\u4e2a\u76ee\u6807\u503c\u3002\u5982\u679c\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u5927\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u5de6\u79fb\u52a8\u6307\u9488P2\uff1b\u5982\u679c\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u5c0f\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u53f3\u79fb\u52a8\u6307\u9488P1\u3002\u6b64\u65f6\u4e24\u4e2a\u6307\u9488\u7684\u79fb\u52a8\u65b9\u5411\u662f\u76f8\u53cd\u7684\u3002",source:"@site/docs/skill/codeOffer/c2-double-pointer/03-\u53cc\u6307\u9488.md",sourceDirName:"skill/codeOffer/c2-double-pointer",slug:"/skill/codeOffer/c2-double-pointer/double-pointer",permalink:"/docs/skill/codeOffer/c2-double-pointer/double-pointer",draft:!1,unlisted:!1,tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u6570\u7ec4",permalink:"/docs/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/docs/tags/\u53cc\u6307\u9488"}],version:"current",sidebarPosition:3,frontMatter:{slug:"double-pointer",title:"03-\u53cc\u6307\u9488",date:"2023-12-05T08:33:19.000Z",author:"zhouJun134",tags:["java","\u5251\u6307offer","\u6570\u7ec4","\u53cc\u6307\u9488"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898","\u6570\u7ec4","\u53cc\u6307\u9488"]},sidebar:"skill",previous:{title:"02-\u4e8c\u8fdb\u5236\u8fd0\u7b97",permalink:"/docs/skill/codeOffer/c1-one-integer/code-offer-integer-binary"},next:{title:"OpenTools",permalink:"/docs/category/opentools"}},c={},u=[{value:"\u5206\u6790",id:"\u5206\u6790",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",img:"img",blockquote:"blockquote",strong:"strong",h2:"h2"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"03-\u53cc\u6307\u9488",children:"03 \u53cc\u6307\u9488"}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u5411\u76f8\u53cd\u7684\u53cc\u6307\u9488\u7ecf\u5e38\u7528\u6765\u6c42\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u548c\u3002\u4e00\u4e2a\u6307\u9488P1\u6307\u5411\u6570\u7ec4\u7684\u7b2c1\u4e2a\u6570\u5b57\uff0c\u53e6\u4e00\u4e2a\u6307\u9488P2\u6307\u5411\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u53ca\u4e00\u4e2a\u76ee\u6807\u503c\u3002\u5982\u679c\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u5927\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u5de6\u79fb\u52a8\u6307\u9488P2\uff1b\u5982\u679c\u4e24\u4e2a\u6307\u9488\u6307\u5411\u7684\u6570\u5b57\u4e4b\u548c\u5c0f\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u53f3\u79fb\u52a8\u6307\u9488P1\u3002\u6b64\u65f6\u4e24\u4e2a\u6307\u9488\u7684\u79fb\u52a8\u65b9\u5411\u662f\u76f8\u53cd\u7684\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u5411\u76f8\u540c\u7684\u53cc\u6307\u9488\u901a\u5e38\u7528\u6765\u6c42\u6b63\u6570\u6570\u7ec4\u4e2d\u5b50\u6570\u7ec4\u7684\u548c\u6216\u4e58\u79ef\u3002\u521d\u59cb\u5316\u7684\u65f6\u5019\u4e24\u4e2a\u6307\u9488P1\u548cP2\u90fd\u6307\u5411\u6570\u7ec4\u7684\u7b2c1\u4e2a\u6570\u5b57\u3002\u5982\u679c\u4e24\u4e2a\u6307\u9488\u4e4b\u95f4\u7684\u5b50\u6570\u7ec4\u7684\u548c\u6216\u4e58\u79ef\u5927\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u53f3\u79fb\u52a8\u6307\u9488P1\u5220\u9664\u5b50\u6570\u7ec4\u6700\u5de6\u8fb9\u7684\u6570\u5b57\uff1b\u5982\u679c\u4e24\u4e2a\u6307\u9488\u4e4b\u95f4\u7684\u5b50\u6570\u7ec4\u7684\u548c\u6216\u4e58\u79ef\u5c0f\u4e8e\u76ee\u6807\u503c\uff0c\u5219\u5411\u53f3\u79fb\u52a8\u6307\u9488P2\u5728\u5b50\u6570\u7ec4\u7684\u53f3\u8fb9\u589e\u52a0\u65b0\u7684\u6570\u5b57\u3002\u6b64\u65f6\u4e24\u4e2a\u6307\u9488\u7684\u79fb\u52a8\u65b9\u5411\u662f\u76f8\u540c\u7684\u3002\u4e0b\u9762\u7528\u53cc\u6307\u9488\u6765\u89e3\u51b3\u51e0\u9053\u5178\u578b\u7684\u6570\u7ec4\u9762\u8bd5\u9898\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://img.zbus.top//zbus/blog/202312050835006.webp",alt:"image-20231205083547634"})}),"\n",(0,o.jsx)(n.h1,{id:"\u9762\u8bd5\u9898-6-\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u548c",children:"\u9762\u8bd5\u9898 6 \u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u548c"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u9898\u76ee\uff1a"})," \u8f93\u5165\u4e00\u4e2a\u9012\u589e\u6392\u5e8f\u7684\u6570\u7ec4\u548c\u4e00\u4e2a\u503ck\uff0c\u8bf7\u95ee\u5982\u4f55\u5728\u6570\u7ec4\u4e2d\u627e\u51fa\u4e24\u4e2a\u548c\u4e3ak\u7684\u6570\u5b57\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u4e0b\u6807\uff1f\u5047\u8bbe\u6570\u7ec4\u4e2d\u5b58\u5728\u4e14\u53ea\u5b58\u5728\u4e00\u5bf9\u7b26\u5408\u6761\u4ef6\u7684\u6570\u5b57\uff0c\u540c\u65f6\u4e00\u4e2a\u6570\u5b57\u4e0d\u80fd\u4f7f\u7528\u4e24\u6b21\u3002\u4f8b\u5982\uff0c\u8f93\u5165\u6570\u7ec4[1\uff0c2\uff0c4\uff0c6\uff0c10]\uff0ck\u7684\u503c\u4e3a8\uff0c\u6570\u7ec4\u4e2d\u7684\u6570\u5b572\u4e0e6\u7684\u548c\u4e3a8\uff0c\u5b83\u4eec\u7684\u4e0b\u6807\u5206\u522b\u4e3a1\u4e0e3\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,o.jsx)(n.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},1151:function(e,n,t){t.d(n,{Zo:function(){return l},ah:function(){return i}});var o=t(7294);const r=o.createContext({});function i(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||s:i(e),o.createElement(r.Provider,{value:l},n)}}}]);