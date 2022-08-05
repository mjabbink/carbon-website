"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[14956],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),s=a.n(r),l=a(1597),o=a(64905),i=a(81151),d=a(75900),u=a.n(d);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:i}=a||r,d=`${s}/edit/${i}${o}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},c=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===r,i=new RegExp(`${r}/?(#.*)?$`),d=a.replace(i,t);return n.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var k=h,b=a(17680),f=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:d}=e;const{frontmatter:u={},relativePagePath:g,titleType:h}=t,{tabs:y,title:v,theme:w,description:C,keywords:E,date:T}=u,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,l.useStaticQuery)("2456312558"),L=P?r.pathname.replace(P,""):r.pathname,A=y?L.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",B=w||x;return n.createElement(i.Z,{tabs:y,homepage:!1,theme:B,pageTitle:v,pageDescription:C,pageKeywords:E,titleType:h},n.createElement(m,{title:d?n.createElement(d,null):v,label:"label",tabs:y,theme:B}),y&&n.createElement(k,{title:v,slug:L,tabs:y,currentTab:A}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(N,{date:T})),n.createElement(c.Z,{pageContext:t,location:r,slug:L,tabs:y,currentTab:A}),n.createElement(o.Z,null))}},5116:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return b}});var n=a(45987),r=(a(67294),a(64983)),s=a(28399);const l=["components"],o={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=i("PageDescription"),u=i("AnchorLinks"),m=i("AnchorLink"),p=i("Row"),c=i("Column"),g=i("ResourceCard"),h={_frontmatter:o},k=s.Z;function b(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(k,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Welcome to Carbon! If you’re just starting out designing with Carbon, you’re in\nthe right place. Here’s a checklist of everything you need to get up and\nrunning.")),(0,r.kt)(u,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Install design kits"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Learn about foundational guidance"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Review our usage guidance"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Connect with us")),(0,r.kt)("h2",null,"Install design kits"),(0,r.kt)("p",null,"Our primary design kits are built in ",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/figma"},"Figma"),",\n",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/sketch"},"Sketch"),", and ",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/adobe-xd"},"Adobe XD"),". All\nthree tools are supported by Carbon for the foreseeable future with Figma having\npriority over Sketch and Adobe XD for support and maintenance. The design kits\nare also available in both the latest versions of Carbon with support for v11\nprioritized over v10."),(0,r.kt)("p",null,"These primary kits include all the Carbon core components and styles for your\nreuse in your product and web experiences to create Carbon compliant designs. By\nusing the kits you will automatically receive updates made to the Carbon\nlibraries ensuring your designs stay up to date with the latest release as well\nas ensuring consistency between design assets and code."),(0,r.kt)("p",null,"Head on over to the ",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/sketch"},"Design kits")," section and follow the\ninstall instructions to get set up."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Design tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Carbon version"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Figma")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://carbondesignsystem.com/designing/kits/figma"},"v11")),(0,r.kt)("td",{parentName:"tr",align:null},"Beta available – ","_","IBMers only)"),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon Figma Guild")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://v10.carbondesignsystem.com/designing/kits/figma"},"v10")),(0,r.kt)("td",{parentName:"tr",align:null},"Available – ",(0,r.kt)("em",{parentName:"td"},"limited supportt")),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon Figma Guild")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sketch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://carbondesignsystem.com/designing/kits/sketch"},"v11")),(0,r.kt)("td",{parentName:"tr",align:null},"Available"),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon Sketch Guild")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://v10.carbondesignsystem.com/designing/kits/sketch"},"v10")),(0,r.kt)("td",{parentName:"tr",align:null},"Available – ",(0,r.kt)("em",{parentName:"td"},"limited support")),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon core team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Adobe XD")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://carbondesignsystem.com/designing/kits/adobe-xd"},"v11")),(0,r.kt)("td",{parentName:"tr",align:null},"Available"),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon core team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://v10.carbondesignsystem.com/designing/kits/adobe-xd"},"v10")),(0,r.kt)("td",{parentName:"tr",align:null},"Available – ",(0,r.kt)("em",{parentName:"td"},"limited support")),(0,r.kt)("td",{parentName:"tr",align:null},"Carbon core team")))),(0,r.kt)("h3",null,"Additional design assets"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/designing/design-resources/"},"Other resources"),", you’ll find links to icon\nlibraries, color palettes, grid and shell templates, the IBM Plex font, and the\nGithub repos. As well as additional kits for mid-fidelity wireframing and\nprototyping tools like Invision Freehand and Axure."),(0,r.kt)("h2",null,"Learn about foundational guidance"),(0,r.kt)("p",null,"Carbon expresses the IBM Design Language in product and delivers it through\ntools for designers and developers including guidance, tooling, components, and\nsupport. Learn what drives IBM’s design philosophy and principles so that you\ncan make informed decisions in your product work."),(0,r.kt)("p",null,"The IBM brand systems have been developed for various IBM businesses, audiences,\ncategories, and offerings. Read them to understand the rationale behind every\nvisual and verbal detail to ensure your work is built on these important\nfoundations. ",(0,r.kt)("em",{parentName:"p"},"This content is accessible to IBMers only.")),(0,r.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(c,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(g,{subTitle:"IBM Design Language",href:"https://www.ibm.com/design/language/",mdxType:"ResourceCard"},(0,r.kt)("img",{src:"/861b9a29a58f4581b945d88efdf050f6/bee.svg",alt:"Bee icon"}))),(0,r.kt)(c,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(g,{subTitle:"IBM Brand Systems",href:"https://www.ibm.com/brand/systems",mdxType:"ResourceCard"},(0,r.kt)("img",{src:"/861b9a29a58f4581b945d88efdf050f6/bee.svg",alt:"Bee icon"})))),(0,r.kt)("h2",null,"Review our usage guidance"),(0,r.kt)("p",null,"Our usage guidance is detailed and thorough, and you’ll learn a lot about the\nsystem by reading through the components and patterns documentation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/components/overview"},"Components"),": Carbon provides in-depth design usage and\nstyle guidance for all components. It’s important to be familiar with this\nadditional UX and visual guidance when you are designing with our components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/patterns/overview"},"Patterns"),": We also offer a range of key patterns—best\npractice solutions for how a user achieves a goal. These design patterns have\nbeen harvested from products built with Carbon, and have been reviewed and\napproved for use by the Carbon governance team."))),(0,r.kt)("h2",null,"Connect with us"),(0,r.kt)("h3",null,"Join us and the Carbon community"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For IBMers only:")," If you have a question about any aspect of the kits or tools,\nyou can reach out to us on Slack and use that as a way to connect with your\nfellow designers. Chances are someone has had a similar problem to you and will\njump in to help you out."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C046Y0YUD"},"#carbon-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CJUGA7P6H"},"#carbon-tutorial"))),(0,r.kt)("p",null,"And be sure to sign up for the latest Carbon news at\n",(0,r.kt)("a",{parentName:"p",href:"https://ibm-studios.slack.com/archives/CJ35H36MP"},"#carbon-announcements"),"."),(0,r.kt)("h3",null,"Learn about what we’re doing"),(0,r.kt)("p",null,"You can find out about Carbon’s latest changes and future plans on the\n",(0,r.kt)("a",{parentName:"p",href:"/all-about-carbon/releases/"},"Releases")," page."),(0,r.kt)("p",null,"If you have questions, here are all the ways to ",(0,r.kt)("a",{parentName:"p",href:"/help/contact-us"},"contact us"),"."),(0,r.kt)("h3",null,"Join us at a meetup"),(0,r.kt)("p",null,"Attend one of our ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/meetups"},"meetups")," to connect with us and\nlevel up your skills. The bi-weekly design playback is great for getting\nfeedback on work in progress from a group of designers and design leaders\ndedicated to your success."),(0,r.kt)("p",null,"If there’s something in particular you’re interested in, we’d love to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new/choose"},"hear from you"),"."),(0,r.kt)("h3",null,"Learn about the benefits"),(0,r.kt)("p",null,"Learn more about the\n",(0,r.kt)("a",{parentName:"p",href:"/all-about-carbon/who-uses-carbon/"},"benefits of using Carbon")," as a designer,\nand how Carbon benefits all members of a product team."))}b.isMDXComponent=!0}}]);