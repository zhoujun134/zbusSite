"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3085],{4269:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});t(7294);var a=t(6010),s=t(9488),r=t(3702),c=t(2922),i=t(1413),l=t(6474),o={mdxPageWrapper:"mdxPageWrapper_yV3F"},d=t(5893);function u(e){var n=e.content,t=n.metadata,u=t.title,m=t.description,h=t.frontMatter,f=h.wrapperClassName,p=h.hide_table_of_contents;return(0,d.jsxs)(s.FG,{className:(0,a.Z)(null!=f?f:r.k.wrapper.mdxPages,r.k.page.mdxPage),children:[(0,d.jsx)(s.d,{title:u,description:m}),(0,d.jsx)(c.Z,{children:(0,d.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,d.jsxs)("div",{className:(0,a.Z)("row",o.mdxPageWrapper),children:[(0,d.jsx)("div",{className:(0,a.Z)("col","col--8"),children:(0,d.jsx)(i.Z,{children:(0,d.jsx)(n,{})})}),!p&&n.toc&&(0,d.jsx)("div",{className:"col col--2",children:(0,d.jsx)(l.Z,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})})]})}},6474:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(3366),s=t(7294),r=t(6010),c=t(5832),i=t(2728),l={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"},o=t(8263),d=t(4025),u=function(){var e=(0,s.useState)(0),n=e[0],t=e[1],a=(0,s.useRef)(null),r=(0,o.v)({container:a}).scrollYProgress;return(0,s.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,d.W)(r,"change",(function(e){t(e)})),{readPercent:(0,s.useMemo)((function(){return Math.round(100*n)}),[n])}},m=t(5893),h=["className"],f="table-of-contents__link toc-highlight",p="table-of-contents__link--active";function g(e){var n=e.className,t=(0,a.Z)(e,h),s=u().readPercent;return(0,m.jsxs)(c.E.div,{className:(0,r.Z)(l.tableOfContents,"thin-scrollbar",n),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:[(0,m.jsx)(i.Z,Object.assign({},t,{linkClassName:f,linkActiveClassName:p})),(0,m.jsx)("hr",{className:l.hr}),(0,m.jsxs)("span",{className:l.percent,children:[s+"%"," "]})]})}}}]);