(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7,12,14,24],{133:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return i}));var a=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},r=function(e){return new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(e))},c=function(e){return e.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)},l=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},o=function(e){var t=JSON.parse(e),n=t.blocks.filter((function(e){return e.text.length})),a=n.filter((function(e){return"header-one"===e.type}))[0],r=n.filter((function(e){return"unstyled"===e.type}))[0],c=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:a.text,p:r.text,url:c}},i=function(e){var t=JSON.parse(e).blocks,n=t.filter((function(e){return"header-one"===e.type}))[0],a=t.filter((function(e){return"unstyled"===e.type})).filter((function(e){return e.text.length>1}));return void 0!==n&&a.length>0}},137:function(e,t,n){e.exports=n.p+"static/media/bubble.3eaa3469.svg"},138:function(e,t,n){e.exports=n.p+"static/media/linkedin-2.4c13d5e4.svg"},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(9),l=n(8),o=n(7),i=n(10);function u(){var e=Object(a.useContext)(i.a).authState.isLoggedIn,t=Object(a.useState)(""),n=Object(c.a)(t,2),u=n[0],s=n[1];Object(a.useEffect)((function(){var e=document.getElementById("navbar"),t=function(){window.scrollY>=50&&e?e.classList.add("sticky"):e&&e.classList.remove("sticky")};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[]);var m=Object(l.g)().location.pathname,d=function(e){return function(){return s(e)}},f=document.getElementById(u);return Object(a.useEffect)((function(){if(f)return f.scrollIntoView({behavior:"smooth",block:"end"})}),[u,f]),r.a.createElement("div",{id:"navbar",className:"navbar sticky"},r.a.createElement("nav",{id:"nav",className:"navbar__items"},r.a.createElement("ul",{className:"navbar__items__list"},r.a.createElement(o.c,{to:{pathname:"/"}},"home"),r.a.createElement(o.c,{onClick:d("about"),to:{pathname:"/",state:{fromBlog:"/blog"===m}}},"about"),r.a.createElement(o.c,{onClick:d("contact"),to:{pathname:m}},"contact"),r.a.createElement(o.c,{to:"/blog"},"blog"),e&&r.a.createElement(o.c,{to:"/dashboard"},"Dashboard"))))}var s=n(138),m=n.n(s),d=n(26),f=n(133),b=n(21),E=n.n(b);function v(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!1),i=Object(c.a)(o,2),u=i[0],s=i[1],m=Object(a.useState)(null),b=Object(c.a)(m,2),v=b[0],p=b[1];return r.a.createElement("div",{className:"subscription col-sm-12 col-md-12"},r.a.createElement("h2",null,"or subscribe"),r.a.createElement("div",{className:"subscription__text"},"Recive updates and latest post direct in your email, Simply enter your email below"),r.a.createElement("div",{className:"form"},r.a.createElement("p",{className:E()({subscription__error:!0,subscription__shake:u})},v),r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{className:"form__input",type:"email",name:"email",placeholder:"Enter your email",onChange:function(e){l(e.target.value)},onBlur:function(){console.log("blur"),n.length>0&&!Object(f.a)(n)?p("Please enter a valid email address"):p(null)}}),r.a.createElement(d.a,{text:"submit",handleClick:function(){Object(f.a)(n)||(s(!0),setTimeout((function(){s(!1)}),500))}}))))}function p(){return r.a.createElement("section",{id:"contact",className:"footer col-sm-12 col-md-6"},r.a.createElement("h1",null,"let's get in touch!"),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{className:"navbar__social__link",href:"https://www.linkedin.com/in/maryam-tavakoli/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"navbar__social__icon",src:m.a,alt:"icon"}))),r.a.createElement(v,null))}function h(){var e=Object(l.g)();Object(a.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}}),[e]);return function(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.scrollY)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),n}()<400?r.a.createElement("div",null):r.a.createElement("div",{className:"scroll",onClick:function(){return window.scrollTo(0,0)}},r.a.createElement("div",null),r.a.createElement("div",null))}n.d(t,"a",(function(){return g}));var g=function(e){var t=e.children;return r.a.createElement("div",{className:"container--fluid"},r.a.createElement(u,null),t,r.a.createElement(h,null),r.a.createElement(p,null))}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"CardPost",(function(){return u}));var a=n(0),r=n.n(a),c=n(7),l=n(133),o=n(137),i=n.n(o);function u(e){var t=e.post,n=e.post.content,a=JSON.parse(n).blocks.filter((function(e){return e.text.length})),o=a.filter((function(e){return"header-one"===e.type}))[0],u=a.filter((function(e){return"unstyled"===e.type}))[0];return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement(c.b,{to:"/blog/".concat(o.text.split(" ").join("-")),className:"card__title"},r.a.createElement("h5",null,o.text)),t.comments.length>0&&r.a.createElement("div",{className:"card__icon"},r.a.createElement("span",null,t.comments.length),r.a.createElement("img",{src:i.a,alt:"comment icon"}))),r.a.createElement("div",{className:"card__text"},u.text),r.a.createElement("div",{className:"card__footer"},r.a.createElement("time",{dateTime:t.createdAt},Object(l.c)(t.createdAt))))}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogBody",(function(){return o}));var a=n(0),r=n.n(a),c=n(59),l=n(12);function o(){var e=Object(a.useContext)(l.a).data.blogs.filter((function(e){return!1!==e.draft}));return e.length?r.a.createElement("div",{className:"row articles"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},e.map((function(e){return r.a.createElement(c.CardPost,{key:e.id,post:e})})))):r.a.createElement("div",{className:"blog"},r.a.createElement("div",{className:"blog__empty"},r.a.createElement("div",null,"There is nothing here!"),r.a.createElement("div",null,"You can create new post through your"," ",r.a.createElement("a",{className:"blog__empty__link",href:"/dashboard/create"},"Dashboard"),".")))}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"Jumbotron",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("section",{className:"row jumbotron"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},r.a.createElement("h1",{className:"jumbotron__title"},"articles"),r.a.createElement("p",{className:"jumbotron__text"},r.a.createElement("em",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget. Feugiat nibh sed pulvinar proin gravida hendrerit. Vitae justo eget magna fermentum. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Venenatis urna cursus eget nunc scelerisque viverra mauris in."))))}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"Blog",(function(){return u}));var a=n(0),r=n.n(a),c=n(64),l=n(12),o=n(183),i=n(65);function u(){return Object(a.useContext)(l.a).data.blogs.length?r.a.createElement(o.a,null,r.a.createElement(i.Jumbotron,null),r.a.createElement(c.BlogBody,null)):r.a.createElement("div",null)}}}]);
//# sourceMappingURL=7.e2c03abc.chunk.js.map