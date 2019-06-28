(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(200),c=t(202),i=t(207);a.default=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:"Contact"}),l.a.createElement(r.a,null),l.a.createElement("main",null,l.a.createElement("div",{className:"grid"},l.a.createElement("section",{className:"unit xs-1 s-1 m-1 l-1-3 island contact"},l.a.createElement("h3",{className:"intouch"},"get in touch"),l.a.createElement("div",null,l.a.createElement("form",{className:"push-0",method:"POST",action:"https://formspree.io/caitlin@delska.ca"},l.a.createElement("div",{className:"milli push-half"},l.a.createElement("label",{htmlFor:"name"},"name"),l.a.createElement("br",null),l.a.createElement("input",{className:"micro",id:"name",name:"name",required:!0})),l.a.createElement("div",{className:"milli push-half"},l.a.createElement("label",{htmlFor:"email"},"email address"),l.a.createElement("br",null),l.a.createElement("input",{className:"micro",id:"email",type:"email",placeholder:"",name:"email",required:!0})),l.a.createElement("div",{className:"milli push-half"},l.a.createElement("label",{htmlFor:"subject"},"subject"),l.a.createElement("br",null),l.a.createElement("input",{className:"micro",id:"subject",name:"_subject"})),l.a.createElement("div",{className:"milli push-half"},l.a.createElement("label",{htmlFor:"details"},"message"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"micro pad-b-2",id:"details",name:"message",required:!0})),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"micro send-btn",type:"submit"},"SEND"))))),l.a.createElement("div",{className:"unit xs-1 s-1 m-1 l-2-3"},l.a.createElement("div",{className:"studio-container"},l.a.createElement("div",{className:"studio"},l.a.createElement("div",null),l.a.createElement("p",{className:"gutter-1-2"},"Atalier Delska’s studio is located in Alexandria, 40 minutes east of Ottawa, Ontario.")))))),l.a.createElement(c.a,null))}},195:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a});t(196);var m=l.a.createContext({}),o=function(e){return l.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},196:function(e,a,t){var n;e.exports=(n=t(197))&&n.default||n},197:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(60),s=t(2),m=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},198:function(e,a,t){"use strict";var n=t(199),l=t(0),r=t.n(l),c=t(4),i=t.n(c),s=t(208),m=t.n(s);function o(e){var a=e.description,t=e.lang,l=e.meta,c=e.keywords,i=e.title,s=e.children,o=n.data.site,d=a||o.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l),children:s})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=o},199:function(e){e.exports={data:{site:{siteMetadata:{title:"",description:"",author:"@kaybowdesign"}}}}},200:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(195),c=t(201),i=t.n(c);a.a=function(e){return l.a.createElement("header",{className:"grid island-1-2 gutter",id:"top"},l.a.createElement("div",{className:"unit xs-1 s-1 m-1-4 l-1-4"},l.a.createElement("div",{className:"logo"},l.a.createElement(r.a,{to:"/"},l.a.createElement("img",{className:"logosize",src:i.a,alt:"Atelier Delska logo to homepage"})))),l.a.createElement("div",{className:"unit xs-1 s-1 m-3-4 l-3-4"},l.a.createElement("nav",{className:"push-t"},l.a.createElement("ol",{className:"nano"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/designs",activeClassName:"active-nav"},"CUSTOM DESIGNS")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/about",activeClassName:"active-nav"},"ABOUT THE ATELIER")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/contact",activeClassName:"active-nav"},"GET IN TOUCH"))))))}},201:function(e,a,t){e.exports=t.p+"static/delska-logo-46501da159efd2d8d0334a751fd2df3a.svg"},202:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(195),c=t(203),i=t.n(c),s=t(204),m=t.n(s),o=t(205),d=t.n(o),u=t(206),p=t.n(u);a.a=function(e){return l.a.createElement("footer",{className:"island-1-2 gutter"},l.a.createElement("div",{className:"grid"},l.a.createElement("nav",{className:"footernav unit xs-2-3 s-2-3 m-2-3 l-2-3 micro grid"},l.a.createElement("ol",{className:"push-0"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"home |")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/designs"},"custom designs |")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/about"},"about the atelier |")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/contact"},"get in touch")))),l.a.createElement("div",{className:"unit xs-1-3 s-1-3 m-1-3 l-1-3 micro top text-right top"},l.a.createElement("a",{href:"#top"},"back to top"))),l.a.createElement("div",{className:"pad-t-1-2"},l.a.createElement("div",{className:"social"},l.a.createElement("a",{className:"badge",href:"https://www.facebook.com/AtelierDelska/"},l.a.createElement("img",{alt:"Facebook",src:i.a})),l.a.createElement("a",{className:"badge",href:"https://www.pinterest.ca/cwmargaret67/"},l.a.createElement("img",{alt:"Pinterest",src:m.a})),l.a.createElement("a",{className:"badge",href:"https://delska.blog/"},l.a.createElement("img",{alt:"Wordpress",src:d.a})),l.a.createElement("a",{href:"https://www.instagram.com/atelierdelska/"},l.a.createElement("img",{alt:"Instagram",src:p.a})))),l.a.createElement("div",{className:"kaybow pico"},l.a.createElement("a",{href:"http://kaybow.design/",className:"pico push-0"},"kaybow design | www.kaybow.design. All rights reserved.")))}},203:function(e,a,t){e.exports=t.p+"static/socialmedia_facebook-699836d6619f7ade58463c5958d3a223.png"},204:function(e,a,t){e.exports=t.p+"static/socialmedia_pinterest-167a0b2748351720e93d1d4e2c76b55f.png"},205:function(e,a,t){e.exports=t.p+"static/socialmedia_wordpress-c27b8ec0d1d3e57064d7d8de4edf5784.png"},206:function(e,a,t){e.exports=t.p+"static/socialmedia_instagram-d14c39cf2af7decff7f37016432b7304.png"},207:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(198);a.a=function(e){return l.a.createElement(r.a,e,l.a.createElement("meta",{charset:"utf-8"}),l.a.createElement("title",null,"Home | Atelier Delska"),l.a.createElement("meta",{property:"og:type",content:"article"}),l.a.createElement("meta",{property:"og:title",content:"Atelier Delska, Historical and Vintage Creations"}),l.a.createElement("meta",{property:"og:url",content:"https://kaybow.github.io/atelier-delska/"}),l.a.createElement("meta",{name:"handheldfriendly",content:"true"}),l.a.createElement("meta",{name:"mobileoptimized",content:"240"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-389379db74d4461f2eb6.js.map