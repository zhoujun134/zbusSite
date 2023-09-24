"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6992],{6947:function(e,n,s){s.r(n),s.d(n,{assets:function(){return o},contentTitle:function(){return l},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return d}});var t=s(5893),i=s(1151);const c={id:"zj-common",slug:"/open/zj-common",title:"zj Common \u901a\u7528\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",date:new Date("2023-09-23T00:00:00.000Z"),author:"zhouJun134",tags:["open"],keywords:["zj common\uff0cjava\uff0c\u901a\u7528\u5f02\u5e38\u5904\u7406\uff0cjson"]},l=void 0,r={unversionedId:"skill/open/zj-common",id:"skill/open/zj-common",title:"zj Common \u901a\u7528\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",description:"\u80cc\u666f",source:"@site/docs/skill/open/zjCommon \u5de5\u5177\u7c7b.md",sourceDirName:"skill/open",slug:"/open/zj-common",permalink:"/docs/open/zj-common",draft:!1,unlisted:!1,tags:[{label:"open",permalink:"/docs/tags/open"}],version:"current",frontMatter:{id:"zj-common",slug:"/open/zj-common",title:"zj Common \u901a\u7528\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",date:"2023-09-23T00:00:00.000Z",author:"zhouJun134",tags:["open"],keywords:["zj common\uff0cjava\uff0c\u901a\u7528\u5f02\u5e38\u5904\u7406\uff0cjson"]},sidebar:"skill",previous:{title:"\u81ea\u5df1\u5f00\u53d1\u7684\u4e00\u4e9b\u5c0f\u7ec4\u4ef6",permalink:"/docs/open"},next:{title:"Java",permalink:"/docs/category/java"}},o={},d=[{value:"1.1 \u7b80\u4ecb",id:"11-\u7b80\u4ecb",level:2},{value:"1.2 \u4f7f\u7528\u65b9\u6cd5",id:"12-\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"2.1 <code>ResultCode</code> \u7edf\u4e00\u8fd4\u56de code \u679a\u4e3e",id:"21-resultcode-\u7edf\u4e00\u8fd4\u56de-code-\u679a\u4e3e",level:2},{value:"2.2 <code>BusinessException</code> \u4e1a\u52a1\u5f02\u5e38\u7c7b",id:"22-businessexception-\u4e1a\u52a1\u5f02\u5e38\u7c7b",level:2},{value:"2.3 <code>ValidateUtil</code> \u6700\u597d\u7684\u4e00\u79cd\u4e1a\u52a1\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",id:"23-validateutil-\u6700\u597d\u7684\u4e00\u79cd\u4e1a\u52a1\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",level:2},{value:"6. etc. \u5f85\u66f4\u65b0",id:"6-etc-\u5f85\u66f4\u65b0",level:2}];function a(e){const n=Object.assign({p:"p",img:"img",h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",br:"br"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.zbus.top//zbus/blog/202309241756137.webp",alt:"\u80cc\u666f"})}),"\n",(0,t.jsx)(n.h1,{id:"1-zj-commom-java-\u5de5\u5177\u7c7b",children:"1. zj Commom java \u5de5\u5177\u7c7b"}),"\n",(0,t.jsx)(n.h2,{id:"11-\u7b80\u4ecb",children:"1.1 \u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"\u5e38\u7528\u7684 \u5de5\u5177\u7c7b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"com.zj.common.exception \u5f02\u5e38\u5904\u7406\u76f8\u5173\u7684\u5305"}),"\n",(0,t.jsx)(n.li,{children:"com.zj.common.file \u6587\u4ef6\u5904\u7406\u76f8\u5173\u7684\u5de5\u5177\u7c7b"}),"\n",(0,t.jsx)(n.li,{children:"com.zj.common.json Json \u8f6c\u6362\u7684\u5de5\u5177\u7c7b"}),"\n",(0,t.jsx)(n.li,{children:"com.zj.common.mybatis mybatis \u751f\u6210\u76f8\u5173\u7684 mapper.xml \u6587\u4ef6\u7684\u5de5\u5177"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"12-\u4f7f\u7528\u65b9\u6cd5",children:"1.2 \u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 maven \u7684 pom.xml \u4e2d\u3002\u5982\u679c\u6ca1\u6709\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"repositories"})," \uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"repositories"}),", \u5982\u679c\u6dfb\u52a0\u4e86\uff0c\u5c31\u76f4\u63a5\u8ffd\u52a0  ",(0,t.jsx)(n.code,{children:"<repository>...</repository>"})," \u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"    <repositories>\n        <repository>\n            <id>zj-maven</id>\n            <url>https://gitee.com/junzhou134/maven/raw/master</url>\n        </repository>\n    </repositories>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u518d\u5728 ",(0,t.jsx)(n.code,{children:"<dependencies>...</dependencies>"})," \u5f15\u5165\u5373\u53ef\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"        <dependency>\n            <groupId>com.zj</groupId>\n            <artifactId>common</artifactId>\n            <version>0.0.1</version>\n        </dependency>\n"})}),"\n",(0,t.jsx)(n.h1,{id:"2-\u5f02\u5e38\u5904\u7406\u7c7b",children:"2. \u5f02\u5e38\u5904\u7406\u7c7b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5f00\u53d1\u4e00\u4e9b\u540e\u7aef\u9879\u76ee\u65f6\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u5b9a\u4e49\u4e00\u4e9b\u901a\u7528\u7684\u5904\u7406\u7c7b\uff0c\u6765\u5904\u7406\u5f02\u5e38\u4fe1\u606f\uff0c\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"json"})," \u6570\u636e\u65f6\uff0c\u7b49\u7b49\u573a\u666f\uff0c\u4e00\u822c\u90fd\u662f\u56fa\u5b9a\u7684\u683c\u5f0f\uff0c\u7136\u800c\u5e38\u5e38\u6211\u4eec\u5728\u6bcf\u6b21\u65b0\u5efa\u9879\u76ee\u65f6\uff0c\u90fd\u9700\u8981\u53bb\u65b0\u5efa\u8fd9\u4e9b\u5b9e\u4f53\u7c7b\u6216\u8005\u5de5\u5177\u7c7b\uff0c\u8fd9\u91cc\u7684 ",(0,t.jsx)(n.code,{children:"com.zj.common.exception"})," \u5305\u4e0b\uff0c\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u4e00\u4e9b\u5f02\u5e38\u5904\u7406\u5de5\u5177\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"21-resultcode-\u7edf\u4e00\u8fd4\u56de-code-\u679a\u4e3e",children:["2.1 ",(0,t.jsx)(n.code,{children:"ResultCode"})," \u7edf\u4e00\u8fd4\u56de code \u679a\u4e3e"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"com.zj.common.exception.ResultCode"})," \u679a\u4e3e\u7c7b\u4e3b\u8981\u5b9a\u4e49\u4e86\u9519\u8bef\u7684\u8fd4\u56de\u6570\u636e\u7ed3\u6784\uff0c\u5176\u4e2d\u4e3b\u8981\u5305\u542b ",(0,t.jsx)(n.code,{children:"code"})," \u548c ",(0,t.jsx)(n.code,{children:"message"})," \u53bb\u63cf\u8ff0\u4e00\u4e2a\u5f02\u5e38\u4fe1\u606f\uff0c\u6bcf\u6b21\u5728\u5904\u7406\u4e00\u4e9b\u4e1a\u52a1\u5f02\u5e38\u65f6\uff0c\u6211\u4eec\u901a\u8fc7\u589e\u52a0\u679a\u4e3e\u6765\u63cf\u8ff0\u5f02\u5e38\u7684\u4e00\u4e9b\u60c5\u51b5\uff0c\u8fd9\u6837\u7684\u597d\u5904\u5c31\u662f\u65b9\u4fbf\u6211\u4eec\u65e5\u5e38\u5f00\u53d1\u4e2d\u7684\u9519\u8bef\u5904\u7406\u3002\u66f4\u597d\u7684\u5b9a\u4f4d\u5f02\u5e38\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"22-businessexception-\u4e1a\u52a1\u5f02\u5e38\u7c7b",children:["2.2 ",(0,t.jsx)(n.code,{children:"BusinessException"})," \u4e1a\u52a1\u5f02\u5e38\u7c7b"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"com.zj.common.exception.BusinessException"})," \u4e1a\u52a1\u5f02\u5e38\u7c7b\uff0c\u4e3b\u8981\u65b9\u4fbf\u6211\u4eec\u5728\u629b\u4e00\u4e9b\u4e1a\u52a1\u5f02\u5e38\u65f6\uff0c\u8fdb\u884c\u7edf\u4e00\u5904\u7406\u3002\u5176\u4e2d\u5305\u542b\u4e86 ",(0,t.jsx)(n.code,{children:"com.zj.common.exception.ResultCode"})," \u7684\u4e00\u4e9b\u63cf\u8ff0\uff0c\u53ef\u4ee5\u65b9\u4fbf\u6211\u4eec\u5bf9\u5f02\u5e38\u63cf\u8ff0\u548c\u7edf\u4e00\u5904\u7406\uff0c\u4f7f\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u66f4\u52a0\u6e05\u6670\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"23-validateutil-\u6700\u597d\u7684\u4e00\u79cd\u4e1a\u52a1\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b",children:["2.3 ",(0,t.jsx)(n.code,{children:"ValidateUtil"})," \u6700\u597d\u7684\u4e00\u79cd\u4e1a\u52a1\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"com.zj.common.exception.ValidateUtil"})," \u4e3a\u4ec0\u4e48\u662f\u6700\u597d\u7684\u4e00\u79cd\u4e1a\u52a1\u5f02\u5e38\u5904\u7406\u5de5\u5177\u7c7b\uff1f"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u51cf\u5c11   ",(0,t.jsx)(n.code,{children:"if ... else ... "})," \u6761\u4ef6\u5224\u65ad\uff0c\u5728\u65e5\u5e38\u7684\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u9700\u8981\u5224\u65ad\u67d0\u4e2a\u6570\u636e\u662f\u5426\u4e3a\u6ee1\u8db3\u67d0\u4e2a\u6761\u4ef6\u7684\u60c5\u51b5\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u629b\u51fa\u5bf9\u5e94\u7684\u4e1a\u52a1\u5f02\u5e38\uff0c\u6bd4\u5982\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'...\n    public void updateFill(MetaObject metaObject) {\n        log.info("updateFill start ...");\n        final LoginUserDTO currentUser = userUtils.getCurrentUser();\n        if (Objects.isNull(currentUser) || StringUtils.isBlank(currentUser.getUsername())) {\n            throw new BusinessException(ResultCode.DB_USER_NOT_LOGIN_NO_PERMIT);\n        }\n        LocalDateTime currentTime = LocalDateTime.now();\n        this.setFieldValByName("updateTime", currentTime, metaObject);\n        this.setFieldValByName("updateId", currentUser.getUsername(), metaObject);\n    }\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u7684 if \u5224\u65ad\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5de5\u5177\u7c7b\u8fdb\u884c\u7edf\u4e00\u5904\u7406\u3002\u5982\u4e0b: \u53ef\u4ee5\u770b\u5230\u4e0a\u9762\u7684 5-7 \u884c\u7684\u4ee3\u7801\uff0c\u7edf\u4e00\u7531 \u4e0b\u9762\u7684\u7b2c4 \u884c\u4ee3\u7801\u4ee3\u66ff\u4e86\uff0c\u610f\u601d\u4e5f\u4e00\u6837\uff0c\u7b80\u660e\u7684\u76f4\u5230\uff0c\u8fd9\u4e2a\u5730\u65b9\u505a\u4e86\u5f02\u5e38\u5224\u65ad\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'    public void updateFill(MetaObject metaObject) {\n        log.info("updateFill start ...");\n        final LoginUserDTO currentUser = userUtils.getCurrentUser();\n        ValidateUtil.exceptionByTrue(Objects.isNull(currentUser) || StringUtils.isBlank(currentUser.getUsername()),\n                ResultCode.DB_USER_NOT_LOGIN_NO_PERMIT);\n        LocalDateTime currentTime = LocalDateTime.now();\n        this.setFieldValByName("updateTime", currentTime, metaObject);\n        this.setFieldValByName("updateId", currentUser.getUsername(), metaObject);\n    }\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ValidateUtil"})," \u5305\u542b\u7684\u65b9\u6cd5\u5982\u56fe\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.zbus.top//zbus/blog/202309241756710.webp",alt:""})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u65b9\u6cd5\u540d"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exceptionByNotNull"}),(0,t.jsxs)(n.td,{children:["1. object: \u5f85\u5224\u65ad\u7684\u5bf9\u8c61\u3002",(0,t.jsx)(n.br,{}),"2.exception:  \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u8fd4\u56de\u7684\u5f02\u5e38\u4fe1\u606f"]}),(0,t.jsx)(n.td,{children:"\u5982\u679c object \u4e0d\u4e3a null\uff0c \u5219\u629b\u51fa\u5bf9\u5e94\u7684\u5f02\u5e38\u4fe1\u606f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exceptionByNull"}),(0,t.jsxs)(n.td,{children:["1. object: \u5f85\u5224\u65ad\u7684\u5bf9\u8c61\u3002",(0,t.jsx)(n.br,{}),"2.exception:  \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u8fd4\u56de\u7684\u5f02\u5e38\u4fe1\u606f"]}),(0,t.jsx)(n.td,{children:"\u5982\u679c object \u4e3a null\uff0c \u5219\u629b\u51fa\u5bf9\u5e94\u7684\u5f02\u5e38\u4fe1\u606f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"requireNonNull"}),(0,t.jsxs)(n.td,{children:["1. object: \u5f85\u5224\u65ad\u7684\u5bf9\u8c61\u3002",(0,t.jsx)(n.br,{}),"2.exception:  \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u8fd4\u56de\u7684\u5f02\u5e38\u4fe1\u606f"]}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42\u975e\u7a7a\u5bf9\u8c61\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u629b\u51fa\u5bf9\u5e94\u7684 exception \u5bf9\u8c61\u3002\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u76f4\u63a5\u8fd4\u56de\u5bf9\u5e94\u7684\u5bf9\u8c61"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exceptionByTrue"}),(0,t.jsxs)(n.td,{children:["1. flag: \u662f\u5426\u6ee1\u8db3\u6761\u4ef6 ",(0,t.jsx)(n.br,{}),"2. resultCode: \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u629b\u51fa\u5bf9\u5e94\u7684\u4e1a\u52a1\u5f02\u5e38"]}),(0,t.jsx)(n.td,{children:"\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u629b\u51fa\u5bf9\u5e94\u7684\u4e1a\u52a1\u5f02\u5e38"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"exceptionByFalse"}),(0,t.jsxs)(n.td,{children:["1. flag: \u662f\u5426\u6ee1\u8db3\u6761\u4ef6 ",(0,t.jsx)(n.br,{}),"2. resultCode: \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u629b\u51fa\u5bf9\u5e94\u7684\u4e1a\u52a1\u5f02\u5e38"]}),(0,t.jsx)(n.td,{children:"\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u629b\u51fa\u5bf9\u5e94\u7684\u4e1a\u52a1\u5f02\u5e38"})]})]})]}),"\n",(0,t.jsxs)(n.h1,{id:"3--\u6587\u4ef6\u5904\u7406\u7c7b-fileutils",children:["3.  \u6587\u4ef6\u5904\u7406\u7c7b ",(0,t.jsx)(n.code,{children:"FileUtils"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List<String> readLines(String pathString)"}),": \u83b7\u53d6 pathString \u6587\u4ef6\u4e2d\u7684\u6240\u6709\u884c\u6570\u636e\u3002\u653e\u5728\u4e00\u4e2a List \u4e2d\u8fd4\u56de\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Map<Integer, String> findContentByKeyWord(String pathString, String keyword)"}),": \u4ece\u8def\u5f84 pathString \u4e2d\u67e5\u8be2\u6307\u5b9a\u5173\u952e\u5b57 keyword \u7684\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.h1,{id:"4-json-\u8f6c\u6362\u5de5\u5177\u7c7b-jsonutil",children:["4. json \u8f6c\u6362\u5de5\u5177\u7c7b ",(0,t.jsx)(n.code,{children:"JsonUtil"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u5305\u542b\u7684\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.zbus.top//zbus/blog/202309241756314.webp",alt:"json \u8f6c\u6362\u5de5\u5177\u7c7b"})}),"\n",(0,t.jsxs)(n.h1,{id:"5-mybatis-\u7ed3\u679c\u8f6c\u6362\u7c7b-mybatisresultmaputil",children:["5. mybatis \u7ed3\u679c\u8f6c\u6362\u7c7b ",(0,t.jsx)(n.code,{children:"MybatisResultMapUtil"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"String getResultMap(Class<?> clazz) "}),": \u5c06 clazz \u8f6c\u6362\u4e3a mybatis \u7684 xml \u4e2d\u4f7f\u7528\u7684 resultMap\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"6-etc-\u5f85\u66f4\u65b0",children:"6. etc. \u5f85\u66f4\u65b0"})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},1151:function(e,n,s){s.d(n,{Zo:function(){return r},ah:function(){return c}});var t=s(7294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:c(e),t.createElement(i.Provider,{value:r},n)}}}]);