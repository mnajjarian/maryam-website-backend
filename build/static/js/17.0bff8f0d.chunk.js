(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[17],{168:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return s}));var r=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},a=function(e){return new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(e))},c=function(e){return e.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)},i=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},o=function(e){var t=JSON.parse(e),n=t.blocks.filter((function(e){return e.text.length})),r=n.filter((function(e){return"header-one"===e.type}))[0],a=n.filter((function(e){return"unstyled"===e.type}))[0],c=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:r.text,p:a.text,url:c}},s=function(e){return new Intl.DateTimeFormat("en-us",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e))}},176:function(e,t,n){e.exports=n.p+"static/media/time-3.9c3f305b.svg"},177:function(e,t,n){e.exports=n.p+"static/media/user.8702dc53.svg"},178:function(e,t,n){e.exports=n.p+"static/media/bubble.3eaa3469.svg"},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),i=n(176),o=n.n(i),s=n(177),u=n.n(s),m=n(178),l=n.n(m),p=n(168);function d(e){var t=e.post,n=e.type,r=t.user.firstName+" "+t.user.lastName,c=0===t.comments.length?"No Comments":t.comments.length+" Comments",i=a.a.createElement("time",{dateTime:"2019-09-12",itemProp:t.createdAt},Object(p.c)(t.createdAt));return a.a.createElement("span",{className:"card__post__icon"},a.a.createElement("img",{src:"comment"===n?l.a:"user"===n?u.a:o.a,alt:"comment icon"}),a.a.createElement("strong",null,"comment"===n?c:"user"===n?r:i))}t.default=function(e){var t=e.post,n=e.post.content,r=JSON.parse(n),i=r.blocks.filter((function(e){return e.text.length})),o=i.filter((function(e){return"header-one"===e.type}))[0],s=i.filter((function(e){return"unstyled"===e.type}))[0],u=r.entityMap[0]?r.entityMap[0].data.src:null;return a.a.createElement("div",{className:"card__post"},a.a.createElement("section",{className:"card__post__section"},a.a.createElement("div",{className:"card__post__content"},a.a.createElement("h2",null,o.text),a.a.createElement("div",{className:"card__post__header"},a.a.createElement(d,{post:t,type:"time"}),a.a.createElement(d,{post:t,type:"user"}),a.a.createElement(d,{post:t,type:"comment"})),a.a.createElement("div",{className:"card__post__items"},a.a.createElement("p",null,s.text.substring(0,380)+"... ",a.a.createElement(c.b,{to:"/blog/".concat(o.text.split(" ").join("-"))},"read more")),u&&a.a.createElement("div",{className:"card__post__image"},a.a.createElement("img",{className:"card__post__image",src:u,alt:o.text}))),a.a.createElement("ul",{className:"card__post__tags"}))))}}}]);
//# sourceMappingURL=17.0bff8f0d.chunk.js.map