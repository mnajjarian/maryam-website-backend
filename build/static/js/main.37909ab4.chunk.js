(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/save.70f9c9cd.svg"},150:function(e,t,a){e.exports=a(318)},176:function(e,t,a){e.exports=a.p+"static/media/bio-image.4cec5674.jpg"},280:function(e,t){},282:function(e,t){},299:function(e,t,a){var n={"./Blockquote.svg":300,"./Bold.svg":301,"./CodeBlock.svg":302,"./Image.svg":303,"./Italic.svg":304,"./Monospace.svg":305,"./OL.svg":306,"./Strike.svg":307,"./UL.svg":308,"./Underline.svg":309,"./bubble.svg":93,"./clock-thin.svg":310,"./facebook-2.svg":311,"./facebook.svg":312,"./iconCheck.svg":313,"./linkedin-2.svg":314,"./linkedin.svg":315,"./save.svg":144,"./time-3.svg":91,"./twitter-2.svg":316,"./user.svg":92};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=299},300:function(e,t,a){e.exports=a.p+"static/media/Blockquote.5244267c.svg"},301:function(e,t,a){e.exports=a.p+"static/media/Bold.24e86c54.svg"},302:function(e,t,a){e.exports=a.p+"static/media/CodeBlock.a2745814.svg"},303:function(e,t,a){e.exports=a.p+"static/media/Image.0195355f.svg"},304:function(e,t,a){e.exports=a.p+"static/media/Italic.431c4f8a.svg"},305:function(e,t,a){e.exports=a.p+"static/media/Monospace.a4c355c1.svg"},306:function(e,t,a){e.exports=a.p+"static/media/OL.735619e1.svg"},307:function(e,t,a){e.exports=a.p+"static/media/Strike.e35d7f33.svg"},308:function(e,t,a){e.exports=a.p+"static/media/UL.ff2d3d11.svg"},309:function(e,t,a){e.exports=a.p+"static/media/Underline.2f0cc38b.svg"},310:function(e,t,a){e.exports=a.p+"static/media/clock-thin.565fe25f.svg"},311:function(e,t,a){e.exports=a.p+"static/media/facebook-2.210cfb81.svg"},312:function(e,t,a){e.exports=a.p+"static/media/facebook.30cb7c0a.svg"},313:function(e,t,a){e.exports=a.p+"static/media/iconCheck.a0b8efcf.svg"},314:function(e,t,a){e.exports=a.p+"static/media/linkedin-2.1ee6dbdf.svg"},315:function(e,t,a){e.exports=a.p+"static/media/linkedin.86bb45b8.svg"},316:function(e,t,a){e.exports=a.p+"static/media/twitter-2.1ef99c59.svg"},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(37),c=a.n(r),o=a(9),s=a(3),i=a(4),m={user:localStorage.getItem("user"),token:localStorage.getItem("token"),isLoggedIn:null!==localStorage.getItem("token"),id:localStorage.getItem("userId"),error:null},u=function(e,t){switch(console.log(t),t.type){case"SIGNIN_ERROR":case"SIGNUP_ERROR":return Object(i.a)({},e,{error:t.payload});case"SIGNIN_SUCCESS":return Object(i.a)({},e,{user:t.payload.firstName+" "+t.payload.lastName,id:t.payload._id,token:t.payload.token,isLoggedIn:!0,error:null});case"LOGOUT_USER":return Object(i.a)({},e,{isLoggedIn:!1,error:null});default:return e}},d=a(58),p=a.n(d),E=p.a.create({baseURL:"/api"}),_=function(e){e&&(E.defaults.headers.common.Authorization="Bearer ".concat(e))},f=Object(n.createContext)({}),g=a(149),b=a(19),v=a(8),h=a(12),N=a.n(h),y=function(e){return l.a.createElement("div",{className:"section"},l.a.createElement("section",{className:N()(Object(v.a)({section__content:!0},"section__content--".concat(e.flexDirect),!0))},l.a.createElement("img",{className:"section__img",style:{borderRadius:e.borderRadius},src:e.imgUrl?e.imgUrl:a(60),alt:"biography"}),l.a.createElement("article",{className:"section__article"},l.a.createElement("h2",{className:"section__article--title"},e.title),l.a.createElement("span",{className:"section__article--span"}),l.a.createElement("p",{className:"section__article--text"},e.text),e.text.length>20&&l.a.createElement("div",{className:"section__article__link"},l.a.createElement(o.b,{to:e.href},e.btnText)))))},O=function(){var e=l.a.useState(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(f).authState.isLoggedIn;return Object(n.useEffect)((function(){var e=document.getElementById("nav");if(e){var t=e.offsetTop,a=window.addEventListener("scroll",(function(){window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}));return function(){return window.removeEventListener("scroll",a)}}}),[]),l.a.createElement("div",{id:"nav",className:"navbar"},l.a.createElement("div",{className:N()({navbar__menu:!0,navbar__menu__change:a}),onClick:function(){return r(!a)}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("nav",{id:"nav",className:N()({show:!a})},l.a.createElement("ul",null,l.a.createElement(o.c,{to:"/"},"Home"),l.a.createElement(o.c,{to:"/about"},"About"),l.a.createElement(o.c,{to:"/blog"},"Blog"),c&&l.a.createElement(o.c,{to:"/dashboard"},"Dashboard"))))},C=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__content"},l.a.createElement("h1",{className:"header__title"},"maryam tavakkoli"),l.a.createElement("span",null,"cloud engineer"))),l.a.createElement("div",{className:"nav__wrapper"},l.a.createElement(O,null)))},k=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("section",{className:"footer__section"},l.a.createElement("h2",{className:"footer__section-h2"},"Contact"),l.a.createElement("ul",{className:"footer__section__list"},l.a.createElement("li",{className:"footer__section__items"},l.a.createElement("a",{className:"footer__section__link",href:"https://www.linkedin.com/in/maryam-tavakoli/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("div",{className:"footer__section__linkedin"}))),l.a.createElement("li",{className:"footer__section__items"},l.a.createElement("a",{className:"footer__section__link",href:"https://www.facebook.com/maryam.tavakkoli.39566",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("div",{className:"footer__section__facebook"}))))),l.a.createElement("div",{className:"footer__subtitle"},"site by"," ",l.a.createElement("a",{className:"footer__subtitle__link",href:"https://github.com/mnajjarian",rel:"noopener noreferrer",target:"_blank"},"mahdi najjarian")))},S={blogs:[],users:[],gallery:[]},j=function(e,t){switch(t.type){case"FETCH_USERS":return Object(i.a)({},e,{users:t.payload});case"UPDATE_USER":return Object(i.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:t.payload}))});case"UPDATE_USER_IMAGE":var a=e.users.filter((function(e){return e._id===t.payload.userId}))[0];return a.imageUrl=t.payload.obj.imageUrl,Object(i.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:a}))});case"FETCH_POSTS":return Object(i.a)({},e,{blogs:(r=t.payload,r.sort((function(e,t){return Number(new Date(t.createdAt))-Number(new Date(e.createdAt))})))});case"FETCH_GALLERY":return Object(i.a)({},e,{gallery:t.payload});case"SET_AVATAR":return Object(i.a)({},e);case"ADD_GALLERY":return Object(i.a)({},e,{gallery:e.gallery.concat(t.payload)});case"ADD_POST":return Object(i.a)({},e,{blogs:e.blogs.concat(t.payload)});case"REMOVE_POST":return Object(i.a)({},e,{blogs:e.blogs.filter((function(e){return e.id!==t.payload}))});case"REMOVE_IMAGE":return Object(i.a)({},e,{gallery:e.gallery.filter((function(e){return e.public_id!==t.payload}))});case"ADD_COMMENT":var n=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return n.comments=n.comments.concat(t.payload),Object(i.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload._id?n:e}))});case"REMOVE_COMMENT":var l=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return l.comments=l.comments.filter((function(e){return e._id!==t.payload._id})),Object(i.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload.post?l:e}))});default:return e}var r},x=Object(n.createContext)({}),I=function(e){var t=e.text,a=e.handleClick;return l.a.createElement("button",{type:"submit",className:"button",onClick:a},t)},w=function(){var e=Object(n.useContext)(f).authService,t=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;c(Object(i.a)({},r,Object(v.a)({},a,n)))},m=r.firstName,u=r.lastName,d=r.email,p=r.password;return l.a.createElement("div",{className:"login"},l.a.createElement("form",{className:"form",onSubmit:function(){e.signup(r)}},l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"firstName"},"First Name"),l.a.createElement("input",{className:"form__input",type:"text",name:"firstName",placeholder:"First Name",value:m,onChange:o})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{className:"form__input",type:"text",name:"lastName",placeholder:"Last Name",value:u,onChange:o})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form__input",type:"text",name:"email",placeholder:"Email",value:d,onChange:o})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"Password",value:p,onChange:o})),l.a.createElement("div",{className:"form__button"},l.a.createElement(I,{text:"Create account"}))))},T=function(){var e=Object(n.useContext)(f).authState,t=Object(n.useContext)(x).data.users;if(!t.length||!e)return l.a.createElement(w,null);console.log(t,e);var a=t.filter((function(t){return t._id===e.id}))[0],r=a.firstName,c=a.lastName,o=a.bio,s=a.imageUrl,i=r+" "+c;return l.a.createElement(n.Fragment,null,l.a.createElement(C,null),l.a.createElement(y,{imgUrl:s,title:i,href:"/about",btnText:"read more",flexDirect:"row",borderRadius:"50%",text:o}),l.a.createElement(k,null))},R=a(176),U=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(C,null),l.a.createElement(y,{imgUrl:R,title:"About Me",href:"/",btnText:"download full CV",flexDirect:"row-reverse",borderRadius:"0",text:'I am a second-year master student in "Cloud computing and services" with minors in "Entrepreneurship and business". I am doing my studies in \u201cEIT Digital Master School\u201d, where I will obtain a double-degree from two universities which I have studied in: Aalto University in Finland, and TU Delft in the Netherlands. Currently, I am working at Nokia Bell Labs, in Finland, as a thesis writer. In this position, I am conducting a research study on containerizing of a current telco IoT publish/subscribe application, and suitability of Kubernetes to be used for its deployment. Docker, Kubernetes, Nokia\u2019s cloud environment (NESC), Apache Kafka and GIT are technologies and tools which I am using during my work in Nokia.'}),l.a.createElement(k,null))},D=function(e){var t=e.posts.slice(1);return l.a.createElement("div",{className:"block"},l.a.createElement("h2",{className:"block__title"},"Latest Posts"),l.a.createElement("div",{className:"block__content"},t.map((function(e){return l.a.createElement("div",{key:e.id,className:"block__items"},l.a.createElement("time",{className:"block__time"},(t=e.createdAt,new Intl.DateTimeFormat("en-us",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(t)))),l.a.createElement("a",{className:"block__link",target:"_blank",rel:"noopener noreferrer",href:"/blog/".concat(L(e.content).title.split(" ").join("-"))},L(e.content).title));var t}))))},L=function(e){var t=JSON.parse(e),a=t.blocks.filter((function(e){return e.text.length})),n=a.filter((function(e){return"header-one"===e.type}))[0],l=a.filter((function(e){return"unstyled"===e.type}))[0],r=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:n.text,p:l.text,url:r}},A=function(e){return e.posts[0]?l.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(".concat(L(e.posts[0].content).url,")")}},l.a.createElement("div",{className:"jumbotron__overlay"},l.a.createElement("div",{className:"jumbotron__post"},l.a.createElement("h1",{className:"jumbotron__title"},L(e.posts[0].content).title),l.a.createElement("p",{className:"jumbotron__text"},L(e.posts[0].content).p.substring(0,200),"..."),l.a.createElement("a",{href:"/blog/".concat(L(e.posts[0].content).title.split(" ").join("-")),className:"jumbotron__button",rel:"noopener noreferrer",target:"_blank"},"Read more")),l.a.createElement(D,{posts:e.posts}))):l.a.createElement("div",null)},P=a(91),F=a(92),B=a(93),M=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},Y=function(e){var t=e.post,a=e.post.content,n=JSON.parse(a),r=n.blocks.filter((function(e){return e.text.length})),c=r.filter((function(e){return"header-one"===e.type}))[0],s=r.filter((function(e){return"unstyled"===e.type}))[0],i=n.entityMap[0]?n.entityMap[0].data.src:null;return l.a.createElement("div",{className:"card__post"},l.a.createElement("section",{className:"card__post__section"},l.a.createElement("div",{className:"card__post__content"},l.a.createElement("h2",null,c.text),l.a.createElement("div",{className:"card__post__header"},l.a.createElement("span",{className:"card__post__icon"},l.a.createElement("img",{src:P,alt:"clock icon"}),l.a.createElement("strong",null,l.a.createElement("time",{dateTime:"2019-09-12",itemProp:t.createdAt},M(t.createdAt)))),l.a.createElement("span",{className:"card__post__icon"},l.a.createElement("img",{src:F,alt:"user icon"}),l.a.createElement("strong",null,t.author)),l.a.createElement("span",{className:"card__post__icon"},l.a.createElement("img",{src:B,alt:"comment icon"}),l.a.createElement("strong",null,0===t.comments.length?"No":t.comments.length," Comments"))),l.a.createElement("div",{className:"card__post__items"},l.a.createElement("p",null,s.text.substring(0,380)+"... ",l.a.createElement(o.b,{to:"/blog/".concat(c.text.split(" ").join("-"))},"read more")),i&&l.a.createElement("div",{className:"card__post__image"},l.a.createElement("img",{className:"card__post__image",src:i,alt:c.text}))),l.a.createElement("ul",{className:"card__post__tags"}))))},K=function(e){var t=e.posts;return t.length<1?l.a.createElement("div",{className:"blog"},l.a.createElement("div",{className:"blog__empty"},l.a.createElement("div",null,"You don't have any post in your blog!"),l.a.createElement("div",null,"You can create new posts through your ",l.a.createElement("a",{className:"blog__empty__link",href:"/dashboard/create"},"Dashboard"),"."))):l.a.createElement("div",{className:"blog"},l.a.createElement("div",{className:"blog__posts"},t.map((function(e){return l.a.createElement(Y,{key:e.id,post:e})}))))},G=function(){var e=Object(n.useContext)(x).data.blogs;return l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement(A,{posts:e}),l.a.createElement(K,{posts:e}),l.a.createElement(k,null))},H=a(6),J=a(147),V=a.n(J),q=a(148),z=function(e){var t=Object(n.useState)({commenter:"",email:"",comment:"",post:e.postId}),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useContext)(x).dataService,m=function(e){var t=e.target,a=t.name,n=t.value;c(Object(i.a)({},r,Object(v.a)({},a,n)))},u=e.closeForm,d=r.commenter,p=r.email,E=r.comment;return l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();try{o.addComment(r)}catch(t){console.log(t)}}},l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"commentor"},"Name"),l.a.createElement("input",{className:"form__input",type:"text",name:"commenter",value:d,onChange:m})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form__input",type:"email",name:"email",value:p,onChange:m})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"comment"},"Comment"),l.a.createElement("textarea",{className:"form__textarea",name:"comment",value:E,onChange:m,rows:10,cols:14})),l.a.createElement("div",{className:"form__button"},l.a.createElement(I,{text:"Cancel",handleClick:u}),l.a.createElement(I,{text:"ADD"})))},W=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(){return c(!r)};return l.a.createElement("div",{className:"comment"},l.a.createElement("div",{className:"comment__board"},l.a.createElement("h3",null,"Comments"),!r&&l.a.createElement(I,{text:"ADD",handleClick:o})),r&&l.a.createElement(z,{closeForm:o,postId:e.postId}),e.comments.length>0&&e.comments.map((function(e){return l.a.createElement("div",{className:"comment__card"},l.a.createElement("div",{className:"comment__body",key:e._id},l.a.createElement("div",{className:"comment__title"},l.a.createElement("strong",null,e.commenter),l.a.createElement("div",null,M(e.createdAt),",  "+(t=e.createdAt,new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(t))))),l.a.createElement("p",{className:"comment__text"},e.comment)));var t})))},Q=function(){return l.a.createElement("div",{className:"loading"},"Loading")},X=function(e){var t=e.match,a=Object(n.useContext)(x).data.blogs,r=t.params.id;if(!r)return l.a.createElement("div",null);var c=r.split("-").join(" "),o=a.find((function(e){return e.content.includes(c)}));if(!o)return l.a.createElement(Q,null);var s=JSON.parse(o.content),i=Object(H.convertFromRaw)(s),m=H.EditorState.createWithContent(i),u=Object(q.a)(m.getCurrentContent());return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"nav__wrapper"},l.a.createElement(O,null)),l.a.createElement("main",{className:"post"},l.a.createElement("article",{className:"post__article"},l.a.createElement("header",{className:"post__header"},l.a.createElement("p",null,"By ",o.author,l.a.createElement("time",{className:"post__time"}," . ",new Intl.DateTimeFormat("en-us",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(o.createdAt)))," ")),V()(u),l.a.createElement("footer",{className:"post__footer"},l.a.createElement("div",{className:"post__social"},l.a.createElement("div",{className:"post__social__buttons"},l.a.createElement("div",{className:"post__social__facebook"}),l.a.createElement("div",{className:"post__social__linkedin"}),l.a.createElement("div",{className:"post__social__twitter"})))),l.a.createElement(W,{comments:o.comments,postId:o.id}))))},Z=a(81),$=a.n(Z),ee={email:"",password:""},te=function(){var e=Object(n.useState)(ee),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(f),o=c.authService,m=c.authState.isLoggedIn,u=a.email,d=a.password,p=function(e){var t=e.target,n=t.name,l=t.value;r(Object(i.a)({},a,Object(v.a)({},n,l)))};return m?l.a.createElement(b.a,{to:"/dashboard"}):l.a.createElement("div",{className:"login"},l.a.createElement("form",{className:"form",onSubmit:function(e){return $.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,$.a.awrap(o.signin(a));case 4:return t.abrupt("return",l.a.createElement(b.a,{to:"/dashboard"}));case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0.message);case 10:case"end":return t.stop()}}),null,null,[[1,7]])}},l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"username"},"Username"),l.a.createElement("input",{className:"form__input",type:"text",name:"email",placeholder:"Username",value:u,onChange:p})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"Password",value:d,onChange:p})),l.a.createElement("div",{className:"form__button"},l.a.createElement(I,{text:"Login"}))))},ae=function(e,t){Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t])},ne=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),r=t[0],c=t[1],i=Object(n.useContext)(f).authService,m=Object(n.useContext)(x).data.users.filter((function(e){return e.firstName+" "+e.lastName===localStorage.getItem("user")}))[0],u=m?m.imageUrl:a(60),d=function(){i.logout()},p=Object(n.useRef)(null);ae(p,(function(){return c(!1)}));var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav__list__group"},l.a.createElement(o.b,{to:"/dashboard/profile"},"Profile")),l.a.createElement("div",{className:"nav__list__group"},l.a.createElement(o.b,{to:"/dashboard/gallery"},"Gallery")),l.a.createElement("div",{className:"nav__list__group"},l.a.createElement(o.b,{to:"/dashboard/posts"},"Posts")),l.a.createElement("div",{className:"nav__list__group"},l.a.createElement(o.b,{to:"/dashboard/create"},"Create new")),l.a.createElement("div",{className:"nav__list__logout"},l.a.createElement("li",{onClick:d},"Logout")))};return l.a.createElement("div",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},E()),l.a.createElement("div",{ref:p,className:"nav__icon",onClick:function(){return c(!r)}},l.a.createElement("img",{className:"nav__icon__image",src:u,alt:"admin"}),l.a.createElement("ul",{className:N()({nav__logout:!0,"nav__logout-hide":!r})},l.a.createElement("li",{onClick:d},"Logout")),l.a.createElement("ul",{className:N()({nav__menu:!0,"nav__menu-hide":!r})},E())))},le=function(e){var t=e.children;return l.a.createElement("div",{className:"dashboard"},l.a.createElement(ne,null),t)},re=function(e){var t=e.imgUrl,a=e.publicId,n=e.handleClick,r=e.checked;return l.a.createElement("div",{className:"picture",key:a,onClick:n(a)},l.a.createElement("img",{className:"picture__image",src:t,alt:"pic"}),l.a.createElement("input",{type:"checkbox",readOnly:!0,checked:r,className:"picture__checked"}))},ce=function(e){var t=Object(n.useContext)(x),a=t.data.gallery,r=t.dataDispatch,c=t.dataService,o=a.reduce((function(e,t){return e[t.public_id]=!1,e}),[]),m=Object(n.useState)(o),u=Object(s.a)(m,2),d=u[0],p=u[1],E=function(){window.cloudinary.openUploadWidget({cloudName:"maryam47web",uploadPreset:"no2bkme1",tags:["xmas"]},(function(e,t){"success"===t.event&&r({type:"ADD_GALLERY",payload:t.info})}))},_=function(t){return function(){e.withCb&&e.cb(t),p(Object(i.a)({},d,Object(v.a)({},t,!d[t])))}},f=a.reduce((function(e,t){return d[t.public_id]&&e.push(t.public_id),e}),[]);return l.a.createElement("div",{className:"gallery"},a.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(I,{text:"Add",handleClick:E}),f[0]&&l.a.createElement(I,{text:f.length>1?"Delete all":"Delete",handleClick:function(){c.removeImage(f[0])}})),l.a.createElement("div",{className:"gallery__contents"},a.map((function(e){return l.a.createElement(re,{checked:d[e.public_id],handleClick:_,key:e.public_id,publicId:e.public_id,imgUrl:"https://res.cloudinary.com/".concat("maryam47web","/image/upload/").concat(e.public_id,".jpg")})})))):l.a.createElement("div",{className:"gallery__empty"},"The gallery is empty!  ",l.a.createElement(I,{text:"Add picture",handleClick:E})," "))},oe=function(){var e=Object(n.useContext)(x),t=e.data.users,r=e.dataDispatch,c=e.dataService,o=Object(n.useContext)(f).authState,m=t.filter((function(e){return e._id===o.id}))[0],u={email:m?m.email:"",fullname:m?m.firstName+" "+m.lastName:"",bio:m?m.bio:"",imageUrl:m?m.imageUrl:""},d=Object(n.useState)(u),p=Object(s.a)(d,2),E=p[0],_=p[1],g=function(e){var t=e.target,a=t.name,n=t.value;_(Object(i.a)({},E,Object(v.a)({},a,n)))},b=E.fullname,h=E.email,N=E.bio,y=E.imageUrl,O=y?y.split("/"):"",C=O.length?O[O.length-1].split(".")[0]:"";return l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile__content"},l.a.createElement("div",{className:"profile__photo"},l.a.createElement("img",{className:"profile__img",src:y||a(60),height:"200px",alt:"avatar"}),l.a.createElement("div",{className:"profile__photo__overlay"},l.a.createElement("button",{className:"profile__photo__edit",onClick:function(){window.cloudinary.openUploadWidget({cloudName:"dfjemz4f7",uploadPreset:"no2bkme1",tags:["profile"]},(function(e,t){"success"===t.event&&(r({type:"UPDATE_USER_IMAGE",payload:{userId:m._id,obj:{imageUrl:t.info.url}}}),c.updateUser(m._id,{imageUrl:t.info.url},C))}))}},"Change"))),l.a.createElement("form",{className:"form",onSubmit:function(){c.updateUser(m._id,E)}},l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"fullname"},"Name"),l.a.createElement("input",{className:"form__input",type:"text",name:"fullname",value:b,onChange:g,placeholder:"First name and Last Name"})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form__input",type:"text",name:"email",value:h,onChange:g,placeholder:"Email"})),l.a.createElement("div",{className:"form__group"},l.a.createElement("label",{className:"form__label",htmlFor:"bio"},"About"),l.a.createElement("textarea",{className:"form__textarea",cols:12,rows:9,name:"bio",value:N,onChange:g,placeholder:"Biography"})),l.a.createElement("div",{className:"form__button"},l.a.createElement(I,{text:"Save"})))))},se=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},ie=function(e){var t=e.onToggle,a=e.active,n=e.headerOptions;return l.a.createElement("div",{className:"RichEditor-headers"},l.a.createElement("select",{className:"RichEditor-headers-select",value:a,onChange:function(e){var a=e.target.value;t(a)}},l.a.createElement("option",{className:"RichEditor-headers-option",key:"unstyled",value:"unstyled"},"Normal"),n.map((function(e){return l.a.createElement("option",{className:"RichEditor-headers-option",key:e.label,value:e.style},e.label)}))))},me=function(e){var t,n=e.active,r=e.style,c=e.onToggle,o=e.label;return l.a.createElement("span",{className:N()("RichEditor-styleButton",(t={},Object(v.a)(t,"RichEditor-styleButton-".concat(o),!0),Object(v.a)(t,"RichEditor-activeButton",n),t)),onMouseDown:function(e){e.preventDefault(),c(r)}},l.a.createElement("img",{className:"RichEditor-styleButton-icon",src:a(299)("./".concat(o,".svg")),alt:"icon"}))},ue=[{label:"Bold",style:"BOLD",type:"INLINE_TYPE"},{label:"Italic",style:"ITALIC",type:"INLINE_TYPE"},{label:"Underline",style:"UNDERLINE",type:"INLINE_TYPE"},{label:"UL",style:"unordered-list-item",type:"BLOCK_TYPE"},{label:"OL",style:"ordered-list-item",type:"BLOCK_TYPE"},{label:"Blockquote",style:"blockquote",type:"BLOCK_TYPE"},{label:"CodeBlock",style:"code-block",type:"BLOCK_TYPE"},{label:"Monospace",style:"CODE",type:"INLINE_TYPE"},{label:"Strike",style:"STRIKETHROUGH",type:"INLINE_TYPE"},{label:"Image",style:"image",type:"IMAGE"}],de=[{label:"Heading 1",style:"header-one",type:"BLOCK_TYPE"},{label:"Heading 2",style:"header-two",type:"BLOCK_TYPE"},{label:"Heading 3",style:"header-three",type:"BLOCK_TYPE"},{label:"Heading 4",style:"header-four",type:"BLOCK_TYPE"},{label:"Heading 5",style:"header-five",type:"BLOCK_TYPE"},{label:"Heading 6",style:"header-six",type:"BLOCK_TYPE"}],pe=function(e){var t=e.editorState,a=e.onToggleBlock,r=e.onToggleInline,c=t.getSelection(),o=t.getCurrentContent().getBlockForKey(c.getStartKey()).getType(),s=t.getCurrentInlineStyle();return l.a.createElement(n.Fragment,null,l.a.createElement(ie,{headerOptions:de,active:o,onToggle:a}),ue.map((function(e){return l.a.createElement(me,{active:"BLOCK_TYPE"===e.type?e.style===o:s.has(e.style),label:e.label,onToggle:"BLOCK_TYPE"===e.type?a:r,style:e.style,key:e.label})})))},Ee=function(e){var t=e.handleClose,a=e.isOpen,n=e.children;return l.a.createElement("div",{className:N()({modal:!0,"modal-isOpen":a})},l.a.createElement("div",{className:"modal__content"},l.a.createElement("div",{className:"modal__close",onClick:t},"\xd7"),n))},_e=function(e){var t=Object(n.useState)(!1),r=Object(s.a)(t,2),c=r[0],o=r[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],d=m[1],p=e.editorState,E=e.handleChange,_=e.onAddImage,f=e.handleSave,g=e.variant,b=Object(n.useRef)(null);return ae(b,(function(){return o(!1)})),l.a.createElement("div",{ref:b,className:"toolbar"},l.a.createElement("div",{className:"RichEditor-controls"},l.a.createElement(pe,{editorState:p,onToggleBlock:function(e){E(H.RichUtils.toggleBlockType(p,e))},onToggleInline:function(e){"image"===e&&o(!c),E(H.RichUtils.toggleInlineStyle(p,e))}})),l.a.createElement("div",{className:"toolbar__toggle",onClick:function(){return d(!u)}},l.a.createElement("img",{src:a(144),alt:"menu"})),l.a.createElement("div",{className:N()({toolbar__buttons:!0,"toolbar__buttons-hide":!u})},l.a.createElement(I,{text:g,handleClick:f(g)})),l.a.createElement(Ee,{isOpen:c,handleClose:function(){return o(!1)}},l.a.createElement(ce,{withCb:!0,cb:function(e){_(e),o(!1)}})))},fe=function(e){return e.src?l.a.createElement("img",{src:e.src,alt:"upload to cloud"}):null},ge=function(e){var t,a=e.contentState.getEntity(e.block.getEntityAt(0)),n=a.getData().src;return"image"===a.getType()&&(t=l.a.createElement(fe,{src:n})),t},be=function(e){return"atomic"===e.getType()?{component:ge,editable:!1}:null},ve=function(e){var t=Object(n.useContext)(x),a=t.data,r=t.dataService,c=e.blogId?a.blogs.filter((function(t){return t.id===e.blogId.id}))[0]:null,o=c?H.EditorState.createWithContent(Object(H.convertFromRaw)(JSON.parse(c.content))):H.EditorState.createEmpty(),i=Object(n.useState)(o),m=Object(s.a)(i,2),u=m[0],d=m[1],p=u.getCurrentContent(),E=Object(n.useState)(JSON.stringify(Object(H.convertToRaw)(p))),_=Object(s.a)(E,2),g=_[0],b=_[1],v=Object(n.useContext)(f).authState,h=Object(n.createRef)(),N=function(){h.current&&h.current.focus()},y=function(e){d(e),b(JSON.stringify(Object(H.convertToRaw)(p)))},O=u.getCurrentContent(),C="RichEditor-editor";return O.hasText()||"unstyled"!==O.getBlockMap().first().getType()&&(C+=" RichEditor-hidePlaceholder"),l.a.createElement("div",{className:"editor"},l.a.createElement("div",{className:"RichEditor"},l.a.createElement(_e,{variant:e.blogId?"Save":"Publish",onAddImage:function(e){var t="https://res.cloudinary.com/dfjemz4f7/image/upload/".concat(e,".jpg"),a=u.getCurrentContent().createEntity("image","IMMUTABLE",{src:t}),n=a.getLastCreatedEntityKey(),l=H.EditorState.set(u,{currentContent:a});d(H.AtomicBlockUtils.insertAtomicBlock(l,n," ")),setTimeout((function(){return N()}),0)},editorState:u,handleChange:y,handleSave:function(t){return function(){"Publish"===t?r.createNewPost({content:g,author:v.user}):r.updatePost(e.blogId.id,g)}}}),l.a.createElement("div",{className:C,onClick:N},l.a.createElement(H.Editor,{ref:h,blockStyleFn:se,blockRendererFn:be,editorState:u,handleKeyCommand:function(e,t){var a=H.RichUtils.handleKeyCommand(t,e);return a?(y(a),"handled"):"not-handled"},keyBindingFn:function(e){if(9===e.keyCode){var t=H.RichUtils.onTab(e,u,4);return t!==u&&y(t),null}return Object(H.getDefaultKeyBinding)(e)},onChange:y,placeholder:"Tell a story..."}))))},he=function(e){var t=Object(n.useContext)(x).dataService;return l.a.createElement("div",{className:"comments"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"Comment"),l.a.createElement("th",null,"Commenter"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,e.comments.map((function(e,a){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,e.comment),l.a.createElement("td",null,e.commenter),l.a.createElement("td",null,e.email),l.a.createElement("td",null,l.a.createElement(I,{text:"Delete",handleClick:(n=e._id,function(){t.removeComment(n)})})));var n})))))},Ne=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([{commenter:"",email:"",comment:"",createdAt:"",_id:"",post:""}]),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(n.useContext)(x),d=u.data.blogs,p=u.dataService;if(!d.length)return l.a.createElement("div",{className:"posts"},"You don't have any post in your blog.");return l.a.createElement("div",{className:"posts"},l.a.createElement(Ee,{isOpen:a,handleClose:function(){return r(!a)}},l.a.createElement(he,{comments:i})),l.a.createElement("div",{className:"posts-table"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Post"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Created"),l.a.createElement("th",null,"Updated"),l.a.createElement("th",null,"Comments"),l.a.createElement("th",null,"Edit"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,d.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,t+1),l.a.createElement("td",null,l.a.createElement("a",{href:"/blog/".concat(L(e.content).title.split(" ").join("-"))},L(e.content).title)),l.a.createElement("td",null,new Date(e.createdAt).toISOString().slice(0,10)),l.a.createElement("td",null,new Date(e.updatedAt).toISOString().slice(0,10)),l.a.createElement("td",null,l.a.createElement("a",{href:"/#",onClick:(c=e.comments,function(){m(c),r(!a)})},e.comments.length)),l.a.createElement("td",null,l.a.createElement("a",{href:"/dashboard/edit/".concat(e.id)},l.a.createElement(I,{text:"Edit"}))),l.a.createElement("td",null,l.a.createElement(I,{text:"Delete",handleClick:(n=e.id,function(){p.removePost(n)})})));var n,c}))))))},ye=function(){var e=Object(n.useContext)(f).authState.isLoggedIn,t=Object(n.useContext)(x).dataService;Object(n.useEffect)((function(){t.getPosts(),t.getGallery(),t.getUsers()}),[]);return l.a.createElement("div",null,l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:"/",component:T}),l.a.createElement(b.b,{exact:!0,path:"/login",component:te}),l.a.createElement(b.b,{exact:!0,path:"/about",component:U}),l.a.createElement(b.b,{exact:!0,path:"/blog",component:G}),l.a.createElement(b.b,{exact:!0,path:"/blog/:id",component:function(e){return e?l.a.createElement(X,e):null}}),l.a.createElement((function(t){var a=t.component,n=t.path,r=Object(g.a)(t,["component","path"]);return l.a.createElement(b.b,{path:n,render:function(t){return e?l.a.createElement(a,Object.assign({},t,r)):l.a.createElement(b.a,{to:{pathname:"/",state:{from:t.location}}})}})}),{path:"/dashboard",component:function(e){var t=e.match.url;return l.a.createElement(le,null,l.a.createElement(b.b,{path:"".concat(t,"/profile"),component:oe,exact:!0}),l.a.createElement(b.b,{path:"".concat(t,"/gallery"),component:ce,exact:!0}),l.a.createElement(b.b,{path:"".concat(t,"/create"),component:ve,exact:!0}),l.a.createElement(b.b,{path:"".concat(t,"/edit/:id"),component:function(e){var t=e.match;return l.a.createElement(ve,{blogId:t.params})},exact:!0}),l.a.createElement(b.b,{path:"".concat(t,"/posts"),component:Ne,exact:!0}))}})))};a(317);c.a.render(l.a.createElement((function(e){var t,a=e.children,r=Object(n.useReducer)(u,m),c=Object(s.a)(r,2),o=c[0],i=c[1],d={authState:o,authDispatch:i,authService:(t=i,{signup:function(e){E.post("/signup",e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",e.data.firstName+" "+e.data.lastName),localStorage.setItem("userId",e.data._id),_(e.data.token),t({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){t({type:"SET_ERRORS",payload:e.message})}))},signin:function(e){E.post("/login",e,{withCredentials:!0}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",e.data.firstName+" "+e.data.lastName),localStorage.setItem("userId",e.data._id),_(e.data.token),console.log(e.data),t({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){t({type:"SET_ERRORS",payload:e.message})}))},logout:function(){localStorage.removeItem("token"),t({type:"LOGOUT_USER"})}})};return l.a.createElement(f.Provider,{value:d},a)}),null,l.a.createElement((function(e){var t,a=e.children,r=Object(n.useReducer)(j,S),c=Object(s.a)(r,2),o=c[0],i=c[1],m={data:o,dataDispatch:i,dataService:(t=i,{getPosts:function(){E.get("/posts").then((function(e){t({type:"FETCH_POSTS",payload:e.data})})).catch((function(e){console.log(e)}))},getGallery:function(){p.a.get("https://res.cloudinary.com/".concat("maryam47web","/image/list/xmas.json")).then((function(e){t({type:"FETCH_GALLERY",payload:e.data.resources})})).catch((function(e){console.log(e)}))},createNewPost:function(e){E.post("/posts",e).then((function(e){t({type:"ADD_POST",payload:e.data})})).catch((function(e){console.log(e)}))},updatePost:function(e,t){E.put("/posts/".concat(e),{content:t}).then((function(e){console.log(e.data)}))},removePost:function(e){E.delete("/posts/".concat(e)).then((function(a){t({type:"REMOVE_POST",payload:e})}))},getUsers:function(){E.get("/users").then((function(e){t({type:"FETCH_USERS",payload:e.data})}))},updateUser:function(e,a,n){E.put("/users/".concat(e),{obj:a,publicId:n}).then((function(e){t({type:"UPDATE_USER",payload:e.data})}))},removeAssets:function(e){E.post("/assets",e).then((function(e){console.log(e.data)}))},removeImage:function(e){E.delete("/assets/".concat(e)).then((function(a){t({type:"REMOVE_IMAGE",payload:e})}))},addComment:function(e){E.post("/comments",e).then((function(e){t({type:"ADD_COMMENT",payload:e.data})})).catch((function(e){console.log(e)}))},removeComment:function(e){E.delete("/comments/".concat(e)).then((function(e){t({type:"REMOVE_COMMENT",payload:e.data})})).catch((function(e){console.log(e)}))}})};return l.a.createElement(x.Provider,{value:m},a)}),null,l.a.createElement(o.a,null,l.a.createElement(ye,null)))),document.getElementById("root"))},60:function(e,t,a){e.exports=a.p+"static/media/avatar.41c9a2b3.png"},91:function(e,t,a){e.exports=a.p+"static/media/time-3.9c3f305b.svg"},92:function(e,t,a){e.exports=a.p+"static/media/user.8702dc53.svg"},93:function(e,t,a){e.exports=a.p+"static/media/bubble.3eaa3469.svg"}},[[150,1,2]]]);
//# sourceMappingURL=main.37909ab4.chunk.js.map