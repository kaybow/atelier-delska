(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(e,t,r){"use strict";var a=r(8);t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.hasImageArray=t.convertProps=t.stripRemainingProps=t.isString=void 0;var i=a(r(84)),n=(r(213),["resolutions","sizes","fixed","fluid","fadeIn","durationFadeIn","title","id","alt","className","critical","crossOrigin","style","backgroundColor","onLoad","onError","onStartLoad","Tag","classId"]),s=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=s;t.stripRemainingProps=function(e){var t=(0,i.default)({},e);return n.forEach(function(e){Object.prototype.hasOwnProperty.call(t,e)&&delete t[e]}),t};t.convertProps=function(e){var t=(0,i.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t};t.hasImageArray=function(e){return e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed)};t.toCamelCase=function(e){return s(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return s(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!s(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return s(e)&&[].reduce.call(e,function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))},0)};t.filteredJoin=function(e){return e.filter(function(e){return""!==e}).join()};t.combineArray=function(e,t){return e.map(function(e,r){return e||t[r]})}},213:function(e,t,r){"use strict";var a=r(8);t.__esModule=!0,t.imageLoaded=t.imageReferenceCompleted=t.createDummyImageArray=t.initialBgImage=t.imageArrayPropsChanged=t.imagePropsChanged=t.getUrlString=t.getCurrentFromData=t.switchImageSettings=t.noscriptImg=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=t.hasPictureElement=t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var i=a(r(84)),n=r(210),s=Object.create({}),o=function(e){var t=(0,n.convertProps)(e);if((0,n.hasImageArray)(t))return d(e);var r=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;return s[r]||!1};t.inImageCache=o;var d=function(e){var t=(0,n.convertProps)(e);return(t.fluid||t.fixed).every(function(e){return t.fluid?o({fluid:e}):o({fixed:e})})};t.allInImageCache=d;var u=function(e){var t=(0,n.convertProps)(e);if((0,n.hasImageArray)(t))return c(e);var r=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;r&&(s[r]=!0)};t.activateCacheForImage=u;var c=function(e){var t=(0,n.convertProps)(e);(t.fluid||t.fixed).forEach(function(e){t.fluid?u({fluid:e}):u({fixed:e})})};t.activateCacheForMultipleImages=c;t.resetImageCache=function(){for(var e in s)delete s[e]};var l=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};t.hasPictureElement=l;var f=function(e,t){var r=(0,n.convertProps)(e);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,n.hasImageArray)(r))return g(e,t);var a=new Image;return a.onload=function(){return t()},a.complete||"function"!=typeof r.onLoad||a.addEventListener("load",r.onLoad),"function"==typeof r.onError&&a.addEventListener("error",r.onError),r.crossOrigin&&(a.crossOrigin=r.crossOrigin),r.critical||r.isVisible?p(a,r):a}return null};t.createPictureRef=f;var g=function(e,t){var r=(0,n.convertProps)(e);return(r.fluid||r.fixed).map(function(e){return r.fluid?f((0,i.default)({},r,{fluid:e}),t):f((0,i.default)({},r,{fixed:e}),t)})};t.createMultiplePictureRefs=g;var p=function(e,t){var r=(0,n.convertProps)(t);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,n.hasImageArray)(r))return m(e,t);var a=r.fluid?r.fluid:r.fixed;if(l()){var i=document.createElement("picture");if(a.srcSetWebp){var s=document.createElement("source");s.type="image/webp",s.srcset=a.srcSetWebp,s.sizes=a.sizes,i.appendChild(s)}i.appendChild(e)}return e.srcset=a.srcSet?a.srcSet:"",e.src=a.src?a.src:"",e}return null};t.activatePictureRef=p;var m=function(e,t){var r=(0,n.convertProps)(t);return e.map(function(e,t){return r.fluid?p(e,(0,i.default)({},r,{fluid:r.fluid[t]})):p(e,(0,i.default)({},r,{fixed:r.fixed[t]}))})};t.activateMultiplePictureRefs=m;t.noscriptImg=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s",f="<img "+o+d+r+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;z-index:-1;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/>';return l()?"<picture>"+a+f+"</picture>":f};t.switchImageSettings=function(e){var t,r,a=e.image,i=e.bgImage,s=e.imageRef,o=e.state,d=y({data:s,propName:"currentSrc"}),u=Array.isArray(a),c=Array.isArray(i)?(0,n.filteredJoin)(i):i;if(u){t=y({data:a,propName:"tracedSVG",returnArray:u}),t=(0,n.combineArray)(y({data:a,propName:"base64",returnArray:u}),t),t=(0,n.combineArray)(y({data:a,propName:"CSS_STRING",addUrl:!1,returnArray:u}),t),o.imgLoaded&&o.isVisible&&(t=d?(0,n.combineArray)(y({data:s,propName:"currentSrc",returnArray:u}),t):(0,n.combineArray)(y({data:s,propName:"src",returnArray:u}),t)),t=(0,n.combineArray)(t,i);var l=b(a.length);r=t=(0,n.combineArray)(t,l),t=(0,n.filteredJoin)(t)}else t="",a.tracedSVG&&(t=y({data:a,propName:"tracedSVG"})),a.base64&&!a.tracedSVG&&(t=y({data:a,propName:"base64"})),o.imgLoaded&&o.isVisible&&(t=d);var f=o.imageState%2;!u&&""===t&&o.imgLoaded&&o.isVisible&&s&&!s.currentSrc&&(t=y({data:s,propName:"src"})),t||(t=c);var g={lastImage:c,nextImage:t,afterOpacity:f};return r&&(g.nextImageArray=r),g};var y=function(e){var t=e.data,r=e.propName,a=e.addUrl,i=void 0===a||a,s=e.returnArray,o=void 0!==s&&s;if(!t||!r)return"";var d="tracedSVG"===r;if(Array.isArray(t)){var u=t.map(function(e){return"currentSrc"===r?S(e)&&e[r]||"":"CSS_STRING"===r&&(0,n.isString)(e)?e:e[r]||""});return h({imageString:u,tracedSVG:d,addUrl:i,returnArray:o})}return"currentSrc"===r&&r in t?h({imageString:S(t)&&t[r]||""}):r in t?h({imageString:t[r],tracedSVG:d,addUrl:i}):""};t.getCurrentFromData=y;var h=function(e){var t=e.imageString,r=e.tracedSVG,a=void 0!==r&&r,i=e.addUrl,s=void 0===i||i,o=e.returnArray,d=void 0!==o&&o;if(Array.isArray(t)){var u=t.map(function(e){var t=a&&e?'"'+e+'"':e;return s&&e?"url("+t+")":t});return d?u:(0,n.filteredJoin)(u)}var c=a&&t?'"'+t+'"':t;return t?s?"url("+c+")":c:""};t.getUrlString=h;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||v(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var v=function(e,t){var r=Array.isArray(e.fluid),a=Array.isArray(t.fluid),i=Array.isArray(e.fixed),n=Array.isArray(t.fixed);return!!(r&&!a||i&&!n||!r&&a||!i&&n)||(r&&a?e.fluid.length!==t.fluid.length||e.fluid.every(function(e,r){return e.src!==t.fluid[r].src}):i&&n?e.fixed.length!==t.fixed.length||e.fixed.every(function(e,r){return e.src!==t.fixed[r].src}):void 0)};t.imageArrayPropsChanged=v;t.initialBgImage=function(e,t){void 0===t&&(t=!0);var r=(0,n.convertProps)(e),a=r.fluid||r.fixed;if(!a)return"";var i,s=(0,n.hasImageArray)(r);if(s){if(i=y({data:a,propName:"tracedSVG",returnArray:s}),i=(0,n.combineArray)(y({data:a,propName:"base64",returnArray:s}),i),i=(0,n.combineArray)(y({data:a,propName:"CSS_STRING",addUrl:!1,returnArray:s}),i),t){var o=b(a.length);i=(0,n.combineArray)(i,o)}}else i="",a.tracedSVG&&(i=y({data:a,propName:"tracedSVG"})),a.base64&&!a.tracedSVG&&(i=y({data:a,propName:"base64"}));return i};var b=function(e){var t=h({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};t.createDummyImageArray=b;t.imageReferenceCompleted=function(e){return!!e&&(Array.isArray(e)?e.every(function(e){return S(e)}):S(e))};var S=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=S},236:function(e,t,r){"use strict";var a=r(8);t.__esModule=!0,t.default=void 0;var i=a(r(87)),n=a(r(84)),s=a(r(36)),o=a(r(7)),d=a(r(37)),u=a(r(0)),c=a(r(4)),l=a(r(237)),f=r(210),g=r(213),p=r(238),m=r(239),y=function(e){function t(t){var r;r=e.call(this,t)||this,(0,d.default)((0,s.default)(r),"cleanUpListeners",void 0),(0,d.default)((0,s.default)(r),"intersectionListener",function(){var e=(0,g.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,g.activatePictureRef)(r.imageRef,r.props),r.setState({isVisible:!0,imageState:r.state.imageState+1},function(){r.setState({imgLoaded:e,imgCached:!!r.imageRef.currentSrc,imageState:r.state.imageState+1})})});var a=!0,i=!1,o=t.fadeIn,u=(0,g.inImageCache)(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,i=!1);var c=!(t.critical&&!o),f=(0,p.fixClassName)(t);return r.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:o,hasNoScript:c,seenBefore:u,imageState:0,currentClassNames:f},r.backgroundStyles=(0,p.presetBackgroundStyles)((0,l.default)(t.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,s.default)(r)),r.handleRef=r.handleRef.bind((0,s.default)(r)),r.imageRef=(0,g.createPictureRef)((0,n.default)({},t,{isVisible:a}),r.handleImageLoaded),r.bgImage=(0,g.initialBgImage)(t),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,p.presetBackgroundStyles)((0,l.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,g.inImageCache)(this.props)}),this.props.critical&&(0,g.imageReferenceCompleted)(this.imageRef)&&this.handleImageLoaded()},r.componentDidUpdate=function(e){var t=this;if((0,g.imagePropsChanged)(this.props,e)){var r=(0,g.inImageCache)(this.props);this.setState({isVisible:r||this.props.critical,imgLoaded:r},function(){t.bgImage=(0,g.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,g.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,g.createPictureRef)((0,n.default)({},t.props,{isVisible:t.state.isVisible}),t.handleImageLoaded)})}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach(function(e){return e.onload=null}):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.state.IOSupported&&e&&(this.cleanUpListeners=(0,m.listenToIntersections)(e,this.intersectionListener))},r.handleImageLoaded=function(){(0,g.activateCacheForImage)(this.props),this.setState({imgLoaded:!0,imageState:this.state.imageState+1}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e,t,r=(0,p.fixOpacity)((0,f.convertProps)(this.props)),a=r.title,s=r.alt,o=r.className,d=r.style,c=void 0===d?{}:d,l=r.fluid,m=r.fixed,y=r.backgroundColor,h=r.durationFadeIn,v=r.Tag,b=r.children,S=r.classId,A=void 0===S?o?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":S,I=(0,i.default)(r,["title","alt","className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),C=(0,f.stripRemainingProps)(I),x="boolean"==typeof y?"lightgray":void 0!==y?y:"",w=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,R=this.state.imgLoaded?h+"ms":"0.25s",O=(0,n.default)({position:"relative",overflow:"hidden",opacity:.99},c);if(l)e=l,t=Array.isArray(l)?l[0]:l;else{if(!m)return null;e=m,O.width=e.width,O.height=e.height,O.display="inline-block","inherit"===c.display&&delete O.display,t=Array.isArray(m)?m[0]:m}var k=(0,g.switchImageSettings)({image:e,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=k.nextImageArray||k.nextImage||this.bgImage;var P=(0,p.createPseudoStyles)((0,n.default)({classId:A,className:this.state.currentClassNames,transitionDelay:R,bgColor:x,backgroundStyles:this.backgroundStyles,style:c,fadeIn:w},k)),L=""+(l&&"fluid")+(m&&"fixed")+"-"+JSON.stringify(t.srcSet);return u.default.createElement(v,(0,n.default)({className:""+(this.state.currentClassNames||"")+(A&&" gatsby-background-image-"+A)+" gatsby-image-wrapper",style:(0,n.default)({},O,this.backgroundStyles),title:a,ref:this.handleRef,key:L},C),u.default.createElement("style",{dangerouslySetInnerHTML:{__html:P}}),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:(0,g.noscriptImg)((0,n.default)({alt:s,title:a},O.width&&O.width,O.height&&O.height,t))}}),b)},t}(u.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",title:"",Tag:"div"};var h=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:c.default.oneOfType([h,c.default.arrayOf(c.default.oneOfType([h,c.default.string]))]),sizes:c.default.oneOfType([v,c.default.arrayOf(c.default.oneOfType([v,c.default.string]))]),fixed:c.default.oneOfType([h,c.default.arrayOf(c.default.oneOfType([h,c.default.string]))]),fluid:c.default.oneOfType([v,c.default.arrayOf(c.default.oneOfType([v,c.default.string]))]),fadeIn:c.default.oneOfType([c.default.string,c.default.bool]),durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.oneOfType([c.default.object,c.default.array]),backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,classId:c.default.string};var b=y;t.default=b},237:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var a=r(210),i=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var a=void 0;try{a=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(s){}if(a){var i=Array.prototype.slice.call(a).reduce(function(t,r){return r.selectorText===e&&""===t?r:t},"");if(i){var n=i.cssText?i.cssText:i.style.cssText;return-1===n.indexOf(i.selectorText)?i.selectorText+"{"+n+"}":n}}}};t.getStyle=i;var n=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=e,t.body.appendChild(r),r.sheet.cssRules}return{}};t.rulesForCssText=n;var s=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach(function(r){t[(0,a.toCamelCase)(r)]=e[0].style[r]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=s;var o=function(e){if((0,a.isString)(e)){var t=i("."+e),r=n(t);if(r.length>0&&void 0!==r[0].style)return Object.keys(s(r)).filter(function(e){return 0===e.indexOf("background")&&""!==r[0].style[e]}).reduce(function(e,t){return e[t]=r[0].style[t],e},{})}return{}};t.getBackgroundStylesForSingleClass=o;var d=function(e){if("undefined"!=typeof window){var t=(0,a.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach(function(e){return r.push(o(e))}),Object.assign.apply(Object,r)}return o(e)}return{}};t.default=d},238:function(e,t,r){"use strict";var a=r(8);t.__esModule=!0,t.createPseudoStyles=t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.fixClassName=t.createPseudoElement=t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var i=a(r(84)),n=a(r(87)),s=r(210),o=Object.create({}),d=function(e){return o[e]||!1};t.inComponentClassCache=d;var u=function(e){e&&(o[e]=!0)};t.activateCacheForComponentClass=u;t.resetComponentClassCache=function(){for(var e in o)delete o[e]};var c=function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=":before");var a=(0,s.stringToArray)(e),i="";return a instanceof Array&&a.length>0&&""!==a[0]&&(i="."+a.join(".")+r),""!==t&&(i+=(i&&",\n")+".gatsby-background-image-"+t+r),i};t.createPseudoElement=c;t.fixClassName=function(e){var t=e.className,r=(0,n.default)(e,["className"]),a=(0,s.convertProps)(r),i=d(t),o=a.fluid?Array.isArray(a.fluid)?a.fluid[0]:a.fluid:Array.isArray(a.fixed)?a.fixed[0]:a.fixed,c=" gbi-"+(0,s.hashString)(o&&o.srcSet||t),l=(""+(t||"")+((i?c:"")||"")).trim();return!i&&u(t),l};var l=function(e){return(0,s.isString)(e)?e:e instanceof Object?Object.keys(e).filter(function(t){return 0===t.indexOf("background")&&""!==e[t]}).reduce(function(t,r){return""+t+(0,s.toKebabCase)(r)+": "+e[r]+";\n"},""):""};t.kebabifyBackgroundStyles=l;var f=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.setTransitionStyles=f;t.fixOpacity=function(e){var t=(0,i.default)({},e);try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,i.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e)};t.createPseudoStyles=function(e){var t=e.classId,r=e.className,a=e.transitionDelay,n=e.lastImage,s=e.nextImage,o=e.afterOpacity,d=e.bgColor,u=e.fadeIn,g=e.backgroundStyles,p=e.style,m=c(r,t),y=c(r,t,":after");return"\n          "+m+",\n          "+y+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(d&&"background-color: "+d+";")+"\n            "+f(a,u)+"\n            "+l((0,i.default)({},g,p))+"\n          }\n          "+m+" {\n            z-index: -100;\n            "+(o&&s?"background-image: "+s+";":"")+"\n            "+(!o&&n?"background-image: "+n+";":"")+"\n            opacity: "+o+"; \n          }\n          "+y+" {\n            z-index: -101;\n            "+(!o&&s?"background-image: "+s+";":"")+"\n            "+(o&&n?"background-image: "+n+";":"")+"\n          }\n        "}},239:function(e,t,r){"use strict";var a;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var i=new WeakMap,n=function(e){e.forEach(function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}})};t.callbackIO=n;var s=function(){return void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(n,{rootMargin:"200px"})),a};t.getIO=s;t.listenToIntersections=function(e,t){var r=s();return r?(r.observe(e),i.set(e,t),function(){r.unobserve(e),i.delete(e)}):function(){}}}}]);
//# sourceMappingURL=11-b8081537b9fd81a8044f.js.map