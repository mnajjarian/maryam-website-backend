(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[30,35],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"BlockCard",(function(){return l})),n.d(t,"PostBlock",(function(){return s}));var a=n(0),c=n.n(a),r=n(9),o=n(4);function l(e){var t=e.block;return c.a.createElement("div",{key:t.id,className:"block__items"},c.a.createElement("time",{className:"block__time"},Object(r.d)(t.createdAt)),c.a.createElement("a",{className:"block__link",target:"_blank",rel:"noopener noreferrer",href:"/blog/".concat(Object(r.b)(t.content).title.split(" ").join("-"))},Object(r.b)(t.content).title))}function s(){var e=Object(a.useContext)(o.a).data.blogs.slice(1);return c.a.createElement("div",{className:"block"},c.a.createElement("h2",{className:"block__title"},"Latest Posts"),c.a.createElement("div",{className:"block__content"},e.map((function(e){return c.a.createElement(l,{key:e.id,block:e})}))))}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"Jumbotron",(function(){return s}));var a=n(0),c=n.n(a),r=n(70),o=n(9),l=n(4);function s(){var e=Object(a.useContext)(l.a).data.blogs;return e[0]?c.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(".concat(Object(o.b)(e[0].content).url,")")}},c.a.createElement("div",{className:"jumbotron__overlay"},c.a.createElement("div",{className:"jumbotron__post"},c.a.createElement("h1",{className:"jumbotron__title"},Object(o.b)(e[0].content).title),c.a.createElement("p",{className:"jumbotron__text"},Object(o.b)(e[0].content).p.substring(0,200),"..."),c.a.createElement("a",{href:"/blog/".concat(Object(o.b)(e[0].content).title.split(" ").join("-")),className:"jumbotron__button",rel:"noopener noreferrer",target:"_blank"},"Read more")),e.length>1&&c.a.createElement(r.PostBlock,null))):c.a.createElement("div",null)}}}]);
//# sourceMappingURL=30.a9df2e55.chunk.js.map