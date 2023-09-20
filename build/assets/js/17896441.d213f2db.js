"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7918],{6086:function(e,t,n){n.d(t,{Z:function(){return x}});n(7294);var a=n(6010),s=n(3702),i=n(5019),r=n(9003),l=n(3699),o=n(7325),d=n(9524),c=n(5893);function u(e){return(0,c.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}var m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,d.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(l.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,c.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,c.jsx)(l.Z,{className:a,href:n,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:a,children:t})}function p(e){var t=e.children,n=e.active,s=e.index,i=e.addMicrodata;return(0,c.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(s+1)})]}))}function x(){var e=(0,i.s1)(),t=(0,r.Ns)();return e?(0,c.jsx)("nav",{className:(0,a.Z)(s.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map((function(t,n){var a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(p,{active:a,index:n,addMicrodata:!!s,children:(0,c.jsx)(b,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},968:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(7294),s=n(9488),i=n(8755),r=n(5893),l=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:n,children:t})}function d(){var e=(0,a.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function c(){var e,t=d(),n=t.metadata,a=t.frontMatter,i=t.assets;return(0,r.jsx)(s.d,{title:n.title,description:n.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=n(6010),m=n(3488),h=n(1792);function v(){var e=d().metadata;return(0,r.jsx)(h.Z,{previous:e.previous,next:e.next})}var b=n(5350),p=n(4617),x=n(3702),g=n(7325);function j(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function f(e){var t=e.lastUpdatedBy;return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function Z(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:x.k.common.lastUpdated,children:[(0,r.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,r.jsx)(j,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,r.jsx)(f,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var _=n(3699),N=n(3366),C={iconEdit:"iconEdit_Z9Sw"},k=["className"];function L(e){var t=e.className,n=(0,N.Z)(e,k);return(0,r.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(C.iconEdit,t),"aria-hidden":"true"},n,{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function T(e){var t=e.editUrl;return(0,r.jsxs)(_.Z,{to:t,className:x.k.common.editThisPage,children:[(0,r.jsx)(L,{}),(0,r.jsx)(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var U=n(4597),y={lastUpdated:"lastUpdated_vwxv"};function w(e){return(0,r.jsx)("div",{className:(0,u.Z)(x.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(U.Z,Object.assign({},e))})})}function A(e){var t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return(0,r.jsxs)("div",{className:(0,u.Z)(x.k.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(T,{editUrl:t})}),(0,r.jsx)("div",{className:(0,u.Z)("col",y.lastUpdated),children:(n||a)&&(0,r.jsx)(Z,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function M(){var e=d().metadata,t=e.editUrl,n=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,i=e.tags,l=i.length>0,o=!!(t||n||s);return l||o?(0,r.jsxs)("footer",{className:(0,u.Z)(x.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,r.jsx)(w,{tags:i}),o&&(0,r.jsx)(A,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var B=n(4639),I=n(2728),E={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},O=["collapsed"];function P(e){var t=e.collapsed,n=(0,N.Z)(e,O);return(0,r.jsx)("button",Object.assign({type:"button"},n,{className:(0,u.Z)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}var H={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function V(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,B.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.Z)(H.tocCollapsible,!l&&H.tocCollapsibleExpanded,n),children:[(0,r.jsx)(P,{collapsed:l,onClick:o}),(0,r.jsx)(B.z,{lazy:!0,className:H.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(I.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}var S={tocMobile:"tocMobile_ITEo"};function D(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(V,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(x.k.docs.docTocMobile,S.tocMobile)})}var R=n(6474);function F(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(R.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:x.k.docs.docTocDesktop})}var z=n(3899),W=n(1413);function G(e){var t,n,a,s,i=e.children,l=(t=d(),n=t.metadata,a=t.frontMatter,s=t.contentTitle,a.hide_title||void 0!==s?null:n.title);return(0,r.jsxs)("div",{className:(0,u.Z)(x.k.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(z.Z,{as:"h1",children:l})}),(0,r.jsx)(W.Z,{children:i})]})}var q=n(6086),J=n(9501),X={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Y(e){var t,n,a,s,i,l,o=e.children,c=(t=d(),n=t.frontMatter,a=t.toc,s=(0,m.i)(),i=n.hide_table_of_contents,l=!i&&a.length>0,{hidden:i,mobile:l?(0,r.jsx)(D,{}):void 0,desktop:!l||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(F,{})}),h=d().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!c.hidden&&X.docItemCol),children:[h&&(0,r.jsx)(J.Z,{}),(0,r.jsx)(b.Z,{}),(0,r.jsxs)("div",{className:X.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(q.Z,{}),(0,r.jsx)(p.Z,{}),c.mobile,(0,r.jsx)(G,{children:o}),(0,r.jsx)(M,{})]}),(0,r.jsx)(v,{})]})]}),c.desktop&&(0,r.jsx)("div",{className:"col col--3",children:c.desktop})]})}function K(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(s.FG,{className:t,children:[(0,r.jsx)(c,{}),(0,r.jsx)(Y,{children:(0,r.jsx)(n,{})})]})})}},1792:function(e,t,n){n.d(t,{Z:function(){return r}});n(7294);var a=n(7325),s=n(1397),i=n(5893);function r(e){var t=e.previous,n=e.next;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.Z,Object.assign({},t,{subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,i.jsx)(s.Z,Object.assign({},n,{subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4617:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var a=n(6010),s=n(7325),i=n(3702),r=n(8801),l=n(5893);function o(e){var t=e.className,n=(0,r.E)();return n.badge?(0,l.jsx)("span",{className:(0,a.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},5350:function(e,t,n){n.d(t,{Z:function(){return p}});n(7294);var a=n(6010),s=n(9962),i=n(3699),r=n(7325),l=n(868),o=n(3702),d=n(6409),c=n(8801),u=n(5893);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var t=m[e.versionMetadata.banner];return(0,u.jsx)(t,Object.assign({},e))}function v(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:n,onClick:a,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var t,n=e.className,i=e.versionMetadata,r=(0,s.Z)().siteConfig.title,c=(0,l.gA)({failfast:!0}).pluginId,m=(0,d.J)(c).savePreferredVersionName,b=(0,l.Jo)(c),p=b.latestDocSuggestion,x=b.latestVersionSuggestion,g=null!=p?p:(t=x).docs.find((function(e){return e.id===t.mainDocId}));return(0,u.jsxs)("div",{className:(0,a.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:i})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:g.path,onClick:function(){return m(x.name)}})})]})}function p(e){var t=e.className,n=(0,c.E)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},4597:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var a=n(6010),s=n(7325),i=n(6864),r={tags:"tags_jXut",tag:"tag_QGVx"},l=n(5893);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,n=e.permalink;return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.Z,{label:t,permalink:n})},n)}))})]})}},9501:function(e,t,n){n.d(t,{Z:function(){return h}});n(7294);var a=n(6010),s=n(7325),i=n(1514),r=n(5893);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=n(3702),u=n(8201);function m(e){var t=e.className;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,c.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,Object.assign({},e))]})}},1397:function(e,t,n){n.d(t,{Z:function(){return r}});n(7294);var a=n(6010),s=n(3699),i=n(5893);function r(e){var t=e.permalink,n=e.title,r=e.subLabel,l=e.isNext;return(0,i.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6474:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3366),s=n(7294),i=n(6010),r=n(5832),l=n(2728),o={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"},d=n(8263),c=n(4025),u=function(){var e=(0,s.useState)(0),t=e[0],n=e[1],a=(0,s.useRef)(null),i=(0,d.v)({container:a}).scrollYProgress;return(0,s.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,c.W)(i,"change",(function(e){n(e)})),{readPercent:(0,s.useMemo)((function(){return Math.round(100*t)}),[t])}},m=n(5893),h=["className"],v="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function p(e){var t=e.className,n=(0,a.Z)(e,h),s=u().readPercent;return(0,m.jsxs)(r.E.div,{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",t),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3},children:[(0,m.jsx)(l.Z,Object.assign({},n,{linkClassName:v,linkActiveClassName:b})),(0,m.jsx)("hr",{className:o.hr}),(0,m.jsxs)("span",{className:o.percent,children:[s+"%"," "]})]})}},6864:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var a=n(6010),s=n(3699),i={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"},r=n(5893);function l(e){var t=e.permalink,n=e.label,l=e.count,o=e.className;return(0,r.jsxs)(s.Z,{href:t,className:(0,a.Z)(o,i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}}}]);