(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,6],{274:function(e,a,t){},275:function(e,a,t){e.exports=t.p+"static/media/behance-footer.0284b2cb.svg"},276:function(e,a,t){e.exports=t.p+"static/media/vk-footer.b076e61f.svg"},284:function(e,a,t){e.exports=t.p+"static/media/loading.bb533f76.gif"},285:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),l=t(2),c=t(14),s=t(0),i=t.n(s),o=t(9),m=t(22),u=t(87),d=(t(274),t(271)),p=t(272),f=function(){return i.a.createElement("div",{className:"contactForm"},i.a.createElement(p.a,{placeholder:"Your beautiful name",type:"text",name:"name",component:"input"}),i.a.createElement(p.a,{placeholder:"Your number, please",type:"tel",name:"number",component:"input"}),i.a.createElement(p.a,{placeholder:"Your email adress",type:"email",name:"email",component:"input"}),i.a.createElement(p.a,{placeholder:"Leave your message",rows:"5",name:"message",component:"textarea"}))},b=(t(275),t(91)),E=t.n(b),g=t(92),v=t.n(g),h=(t(276),function(){return i.a.createElement("div",{className:"contactInfo"},i.a.createElement("p",null,"E-mail",i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:jassemgaaloul123@gmail.com"},"jassemgaaloul123@gmail.com")),i.a.createElement("p",null,"Phone ",i.a.createElement("br",null),i.a.createElement("a",{href:"tel:+21629587189"},"+216189587")),i.a.createElement("p",null,"Adress",i.a.createElement("br",null),"Tunisia, sousse"),i.a.createElement("div",{className:"contactSocial"},i.a.createElement("p",null,"for more about me, i'm ",i.a.createElement("br",null),"also on social:"),i.a.createElement("div",{className:"socialList"},i.a.createElement("a",{href:"https://www.instagram.com/jassem__gaaloul/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"socialEllipse instagramEllipse"},i.a.createElement("img",{src:E.a}))),i.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"socialEllipse linkedinEllipse"},i.a.createElement("img",{src:v.a}))))))}),k=Object(d.a)({form:"feedback"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:"contactWindow"},i.a.createElement(f,null),i.a.createElement(h,null)),i.a.createElement("div",{className:"buttonPage buttonSend"},i.a.createElement("button",{disabled:e.loading},"Send message")))})),y=function(e){return i.a.createElement("div",{className:"contactMe contactMeOnPage wrapper"},i.a.createElement("div",{className:"titleContact"},i.a.createElement("h2",null,"Ways to contact me"),i.a.createElement("hr",null),i.a.createElement("p",null,"You have a desire to get acquainted closer or to specify details? Use this form and i will surely answer you.")),i.a.createElement(k,{onSubmit:e.sendFeedback,loading:e.loading}),i.a.createElement("p",null,e.error))};a.default=Object(o.b)((function(e){return{status:e.feedback.status,error:e.feedback.error,token:e.admin.token}}),{setError:u.b})((function(e){var a=Object(m.a)(),t=a.loading,n=a.error,o=a.request,u=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("/api/feedback/sendFeedback","POST",Object(l.a)({},a));case 3:a.name=null,a.number=null,a.email=null,a.message=null,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){e.setError(n)}),[n]),i.a.createElement(y,{status:e.status,error:e.error,sendFeedback:u,loading:t})}))},286:function(e,a,t){e.exports=t.p+"static/media/Adaptive-skills.c0f52d70.svg"},287:function(e,a,t){e.exports=t.p+"static/media/Front-end-skills.9b8f4e29.svg"},288:function(e,a,t){e.exports=t.p+"static/media/cross-browsers-skills.60a47257.svg"},289:function(e,a,t){e.exports=t.p+"static/media/design-skills.1e408912.svg"},290:function(e,a,t){e.exports=t.p+"static/media/idea-skills.75fbf612.svg"},304:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(274),t(17)),c=t(11),s=function(e){return r.a.createElement("div",{className:"intro wrapper",id:"intro",ref:e.section},r.a.createElement(l.a,{titleclassName:"titleLines titleLines1",blockTitleText:"A brief Introduction"}),r.a.createElement("div",{className:"introText","data-aos":"fade-up","data-aos-duration":"1500"},r.a.createElement("p",null,"Hi I am a fullstack js web developer & designer based in sousse in tunisia. I believe working in a multi-disciplined approach brings creative inspiration to my work. I am passionate about creating websites that incorporate interactive design and modern technologies. I see every new experience as an opportunity to learn. My favorite projects are those that require me to push beyond my boundaries and acquire new skills and knowledge in order to succeed.")),r.a.createElement("div",{className:"buttonPage"},r.a.createElement(c.b,{to:"/about-me",className:"buttonRMargin"},r.a.createElement("button",null,"LEARN MORE ABOUT ME"))))},i=t(286),o=t.n(i),m=t(287),u=t.n(m),d=t(288),p=t.n(d),f=t(289),b=t.n(f),E=t(290),g=t.n(E),v=function(e){return r.a.createElement("div",{className:"skillCard","data-aos":"flip-right","data-aos-delay":e.aosDelay},r.a.createElement("img",{src:e.img,alt:e.imgDescr}),r.a.createElement("p",null,e.skillText))},h=function(){return r.a.createElement("div",{className:"skills wrapper"},r.a.createElement(l.a,{titleclassName:"titleLines titleLines1",blockTitleText:"This is what i do"}),r.a.createElement("div",{className:"skillsCards"},r.a.createElement(v,{img:g.a,imgDescr:"Great ideas skill",skillText:"Great ideas",aosDelay:"0"}),r.a.createElement(v,{img:b.a,imgDescr:"design skill",skillText:"Professional design",aosDelay:"200"}),r.a.createElement(v,{img:u.a,imgDescr:"front-end skill",skillText:"HTMl + CSS + JS",aosDelay:"400"}),r.a.createElement(v,{img:o.a,imgDescr:"adaptive skill",skillText:"Clean code and responsive layout",aosDelay:"600"}),r.a.createElement(v,{img:p.a,imgDescr:"cross-browsers skill",skillText:"Browser Compatibility",aosDelay:"800"})))},k=t(8),y=t.n(k),w=t(14),x=t(90),N=t.n(x),j=(t(146),t(284)),T=t.n(j),O=function(e){var a=e.works.map((function(a){var t=[];return void 0!==e.images&&e.images.map((function(e){if(e.owner===a._id){var n="data:".concat(e.imgType,";charset=utf-8;base64,").concat(e.img.toString("base64"));t.push({imgSrc:n})}})),r.a.createElement("div",{className:"workCard",key:a._id},r.a.createElement("div",{className:"cardInfoOverlay"},r.a.createElement("div",{className:"cardHeader"},r.a.createElement("div",{className:"elipses"},r.a.createElement("div",{className:"elipse"}),r.a.createElement("div",{className:"elipse"}),r.a.createElement("div",{className:"elipse"})),r.a.createElement("div",{className:"toggleCard"},r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("hr",null))),r.a.createElement("div",{className:"cardBody"},r.a.createElement("img",{src:0!==t.length?t[0].imgSrc:null,alt:e.previewDescription})),r.a.createElement("div",{className:"workCardInfo"},r.a.createElement("p",null,a.smallDescription),r.a.createElement("h3",null,a.workName),r.a.createElement("div",{className:"buttonPage workCardButton"},r.a.createElement(c.b,{to:"/work/"+a.urlAdress},r.a.createElement("button",null,"View project"))))))}));return r.a.createElement("div",{className:"latestWorks wrapper"},r.a.createElement(l.a,{titleclassName:"titleLines titleLines1 titleWrapper",blockTitleText:"Latest works"}),r.a.createElement("div",{className:"workCards"},e.loading?r.a.createElement("div",{className:"loadingBlock"},r.a.createElement("img",{className:"loadingGif",src:T.a,alt:"loading"}),r.a.createElement("img",{className:"loadingGif mobileLoading",src:T.a,alt:"loading"}),r.a.createElement("img",{className:"loadingGif mobileLoading",src:T.a,alt:"loading"})):r.a.createElement(N.a,e.params,a)),r.a.createElement("div",{className:"buttonPage"},r.a.createElement(c.b,{to:"/portfolio/"},r.a.createElement("button",null,"View more projects"))))},S=t(9),A=t(22),C=t(12),I=Object(S.b)((function(e){return{works:e.works.works,images:e.works.images}}),{setWork:C.f,setImagesData:C.c})((function(e){var a=Object(A.a)(),t=a.loading,l=a.request;return Object(n.useEffect)((function(){(function(){var a=Object(w.a)(y.a.mark((function a(){var t,n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l("/api/works","GET",null);case 2:if(t=a.sent,e.setWork(t),0===t.length){a.next=9;break}return a.next=7,l("/api/works/getMainPhotos/workPreview","GET",null);case 7:n=a.sent,e.setImagesData(n);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),r.a.createElement(O,{works:e.works,images:e.images,params:e.params,loading:t})})),_=function(e){var a=e.articles.map((function(a){var t=e.images.map((function(t){if(a._id===t.owner){var n=0!==e.images.length&&"data:".concat(t.imgType,";charset=utf-8;base64,").concat(t.img.toString("base64"));return r.a.createElement("div",{className:"articleImg",key:t._id},r.a.createElement("img",{src:n,alt:t.descr}))}}));return r.a.createElement("div",{className:"articleCard",key:a._id},t,r.a.createElement("div",{className:"articleDate"},r.a.createElement("div",{className:"dateText"},r.a.createElement("p",null,a.articleDate))),r.a.createElement("div",{className:"atricleText"},r.a.createElement("h3",null,a.articleName),r.a.createElement("hr",null),r.a.createElement("p",null,a.articleSmallDescription)),r.a.createElement("div",{className:"socialLine"},r.a.createElement("div",{className:"articleSocial"},r.a.createElement("div",{className:"articleComments"},r.a.createElement("p",null,a.comments?a.comments:0," comments")),r.a.createElement("div",{className:"articleShare"},r.a.createElement("p",null,a.likes?a.likes:0," likes")))),r.a.createElement("div",{className:"articleHover"},r.a.createElement(c.b,{to:"/article/"+a.urlAdress},r.a.createElement("h3",null,"Read more..."))))}));return r.a.createElement("div",{className:"latestBlogArticles wrapper"},r.a.createElement(l.a,{titleclassName:"titleLines titleLines1 titleWrapper",blockTitleText:"Latest Blog Articles"}),r.a.createElement("div",{className:"articlesCards"},e.loading?r.a.createElement("div",{className:"loadingBlock"},r.a.createElement("img",{className:"loadingGif",src:T.a,alt:"loading"}),r.a.createElement("img",{className:"loadingGif mobileLoading",src:T.a,alt:"loading"}),r.a.createElement("img",{className:"loadingGif mobileLoading",src:T.a,alt:"loading"})):r.a.createElement(N.a,e.params,a)),r.a.createElement("div",{className:"buttonPage"},r.a.createElement(c.b,{to:"/blog/"},r.a.createElement("button",null,"View more articles"))))},D=t(15),L=Object(S.b)((function(e){return{articles:e.articles.articles,images:e.articles.images}}),{setArticles:D.h,setArticlesMainImages:D.i})((function(e){var a=Object(A.a)(),t=a.loading,l=a.request;return Object(n.useEffect)((function(){(function(){var a=Object(w.a)(y.a.mark((function a(){var t,n,r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l("/api/articles","GET",null);case 2:return t=a.sent,n=t.reverse(),e.setArticles(n),a.next=7,l("/api/articles/getArticleMainImages","GET",null);case 7:r=a.sent,e.setArticlesMainImages(r);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),r.a.createElement(_,{articles:e.articles,images:e.images,params:e.params,loading:t})})),M=t(80);function P(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var B=t(88);function G(e){return function(e){if(Array.isArray(e))return Object(M.a)(e)}(e)||P(e)||Object(B.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=t(104),q=t(105);function F(e){return Object(W.a)(e)||P(e)||Object(B.a)(e)||Object(q.a)()}function R(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(B.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}var U=y.a.mark(ee),V=y.a.mark(ae),Y=y.a.mark(te);function H(e){return J.apply(this,arguments)}function J(){return(J=Object(w.a)(y.a.mark((function e(a){var t,n,r,l,c,s,i=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=i.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=i[r];l=0,c=n;case 2:if(!(l<c.length)){e.next=21;break}s=c[l],e.t0=typeof s,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,K(a,s);case 9:return e.abrupt("break",18);case 10:return e.next=12,z(s);case 12:return e.abrupt("break",18);case 13:return e.next=15,s.apply(void 0,[a].concat(n));case 15:return e.abrupt("break",18);case 16:return e.next=18,s;case 18:l++,e.next=2;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,a){return X.apply(this,arguments)}function X(){return(X=Object(w.a)(y.a.mark((function e(a,t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ne(a.textContent,t),e.next=3,Z(a,[].concat(G(te(a.textContent,n)),G(ae(t,n))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(w.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,a)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,a){return $.apply(this,arguments)}function $(){return($=Object(w.a)(y.a.mark((function e(a,t){var n,r,l,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.length>2&&void 0!==c[2]?c[2]:60,r=R(ee(t)),e.prev=2,r.s();case 4:if((l=r.n()).done){e.next=11;break}return(0,l.value)(a),e.next=9,z(n+n*(Math.random()-.5));case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),r.e(e.t0);case 16:return e.prev=16,r.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}function ee(e){var a,t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=R(e),r.prev=1,n=y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=a}))};case 3:case"end":return e.stop()}}),e)})),a.s();case 4:if((t=a.n()).done){r.next=8;break}return r.delegateYield(n(),"t0",6);case 6:r.next=4;break;case 8:r.next=13;break;case 10:r.prev=10,r.t1=r.catch(1),a.e(r.t1);case 13:return r.prev=13,a.f(),r.finish(13);case 16:case"end":return r.stop()}}),U,null,[[1,10,13,16]])}function ae(e){var a,t,n,r,l=arguments;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:a=F(e),t=a.slice(0),n=l.length>1&&void 0!==l[1]?l[1]:0,r=l.length>2&&void 0!==l[2]?l[2]:t.length;case 3:if(!(n<r)){c.next=8;break}return c.next=6,t.slice(0,++n).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),V)}function te(e){var a,t,n,r,l=arguments;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:a=F(e),t=a.slice(0),n=l.length>1&&void 0!==l[1]?l[1]:0,r=l.length>2&&void 0!==l[2]?l[2]:t.length;case 3:if(!(r>n)){c.next=8;break}return c.next=6,t.slice(0,--r).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),Y)}function ne(e,a){var t=F(a).slice(0);return[].concat(G(e),[NaN]).findIndex((function(e,a){return t[a]!==e}))}var re="styles_typicalWrapper__1_Uvh";!function(e,a){void 0===a&&(a={});var t=a.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var le=function(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)},ce=Object(n.memo)((function(e){var a=e.steps,t=e.loop,l=e.className,c=e.wrapper,s=void 0===c?"p":c,i=Object(n.useRef)(null),o=s,m=[re];return l&&m.unshift(l),Object(n.useEffect)((function(){t===1/0?H.apply(void 0,[i.current].concat(le(a),[H])):"number"===typeof t?H.apply(void 0,[i.current].concat(le(Array(t).fill(a).flat()))):H.apply(void 0,[i.current].concat(le(a)))})),r.a.createElement(o,{ref:i,className:m.join(" ")})})),se=function(e){return r.a.createElement("div",{className:"aboutMeMain wrapper"},r.a.createElement("div",{className:"aboutMeMainText"},r.a.createElement("h1",null,"I'm jassem gaaloul, a FullStack Web Developer & UI/UX Designer ."),r.a.createElement(ce,{steps:["I code cool websites",1e3,"Just call me maybe",1e3,"I love Tesla",500,"I like everything space related",1e3],loop:1/0,wrapper:"p"}),r.a.createElement("span",{id:"typed"})),r.a.createElement("div",{className:"scrollIndicator",id:"scroll-indicator",onClick:e.gotoSection},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},ie=t(285);a.default=function(){var e=Object(n.useRef)(null),a={grabCursor:!0,slidesPerView:"1.2",spaceBetween:30,breakpoints:{0:{centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0}},500:{centeredSlides:!1,pagination:!1,slidesPerView:"auto"},950:{allowTouchMove:!1,slidesPerView:"auto"}}};return r.a.createElement("div",{className:"bgBlue"},r.a.createElement("header",{className:"aboutMePage"},r.a.createElement(se,{gotoSection:function(){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})}})),r.a.createElement(s,{section:e}),r.a.createElement(h,null),r.a.createElement(I,{params:a}),r.a.createElement(L,{params:a}),r.a.createElement(ie.default,null))}}}]);
//# sourceMappingURL=4.d442f173.chunk.js.map