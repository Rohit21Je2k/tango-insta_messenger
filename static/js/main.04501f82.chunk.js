(this["webpackJsonptango-insta_messenger"]=this["webpackJsonptango-insta_messenger"]||[]).push([[0],[,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(0),n=t(1),i=t.n(n),r=t(4),m=t.n(r),c=t(2);t(10);function d(){return Object(a.jsxs)("header",{className:"main-page",children:[Object(a.jsx)("h1",{children:"Tango"}),Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxtjn4FO15TqY7pnoNd-XE6uhcGpu3e_DYw&usqp=CAU",alt:"pic"})]})}t(11);function l(){return Object(a.jsxs)("div",{className:"menu-bar",children:[Object(a.jsx)("div",{className:"chats",children:Object(a.jsx)("p",{children:"Chats"})}),Object(a.jsx)("div",{className:"friends",children:Object(a.jsx)("p",{children:"Friends"})}),Object(a.jsx)("div",{className:"posts",children:Object(a.jsx)("p",{children:"Posts"})})]})}var o=[{id:"Batman",messages:[{user:"jamesgr123",lastMsg:{time:"",sender:"",message:""}},{user:"jokerisdad",lastMsg:{time:"",sender:"",message:""}},{user:"sidekick",lastMsg:{time:"",sender:"",message:""}},{user:"sastabatman",lastMsg:{time:"",sender:"",message:""}},{user:"mrbutler",lastMsg:{time:"",sender:"",message:""}},{user:"lalbatman",lastMsg:{time:"",sender:"",message:""}}]},{id:"jamesgr123",messages:["","",""]},{id:"jokerisdad",messages:["","",""]},{id:"sidekick",messages:["","",""]},{id:"sastabatman",messages:["","",""]},{id:"mrbutler",messages:["","",""]},{id:"lalBatman",messages:["","",""]}],g=[{name:"Batman",id:"Batman",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxtjn4FO15TqY7pnoNd-XE6uhcGpu3e_DYw&usqp=CAU"},{name:"James Gordon",id:"jamesgr123",image:"https://comicvine1.cbsistatic.com/uploads/original/12/124813/2496965-james_gordon.png"},{name:"Joker",id:"jokerisdad",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzN9ybRnUtzSOkPB7-ShH5eaV7v8CO8lKtuQ&usqp=CAU"},{name:"Robin",id:"sidekick",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNrcN3E5LwEsk9dA9qN0BKuYOPZrP32koWg&usqp=CAU"},{name:"Nightwing",id:"sastabatman",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmG8DHGb0Z_8YgkrGSvL0XwtSXWhPvX9ZCuw&usqp=CAU"},{name:"Alfred J. Pennyworth",id:"mrbutler",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOM9Ixp0uScWouPpfkNQcpDZ4VQUsZArfk6Q&usqp=CAU"},{name:"Red Hood",id:"lalbatman",image:"https://i.ytimg.com/vi/ox3yzZXK1Bc/maxresdefault.jpg"}];t(12);function j(e){var s=Object(n.useState)(),t=Object(c.a)(s,2);t[0],t[1];return Object(a.jsx)("div",{className:"all-chat",children:o.filter((function(e){return"Batman"===e.id}))[0].messages.map((function(s){var t=g.filter((function(e){return e.id===s.user}))[0];return Object(a.jsxs)("div",{className:"chat-box",id:t.id,onClick:e.onClick,children:[Object(a.jsx)("img",{className:"friend-image",alt:"friend-img",src:t.image}),Object(a.jsxs)("div",{className:"friend-info",children:[Object(a.jsxs)("h5",{className:"friend-name",children:["Name : ",t.name]}),Object(a.jsx)("p",{className:"friend-msg",children:"Message:  "})]})]},s.user)}))})}var b=[{id:"jamesgr123:Batman",person1:"jamesgr123",person2:"Batman",lastMsg:"meet me at the rooftop",messages:[{time:"2020-12-22",sender:"jamesgr123",message:"we need help"},{time:"2020-12-22",sender:"Batman",message:"meet me at the rooftop"},{time:"2020-12-22",sender:"jamesgr123",message:"i ll be there in 10 mins"}]},{id:"jokerisdad:Batman",person1:"jokerisdad",person2:"Batman",lastMsg:"\ud83e\udd87\ud83e\udd87\ud83e\udd87",messages:[{time:"2020-12-22",sender:"jokerisdad",message:"why so serious"},{time:"2020-12-22",sender:"Batman",message:"\ud83e\udd87\ud83e\udd87\ud83e\udd87"},{time:"2020-12-22",sender:"jokerisdad",message:"i like killing bats"}]},{id:"sidekick:Batman",person1:"sidekick",person2:"Batman",lastMsg:"Dont touch my batmobile",messages:[{time:"2020-12-22",sender:"sidekick",message:"i m taking the car out"},{time:"2020-12-22",sender:"Batman",message:"Dont touch my batmobile"},{time:"2020-12-22",sender:"sidekick",message:"ok i m taking the bike then"}]},{id:"sastabatman:Batman",person1:"sastabatman",person2:"Batman",lastMsg:"no sighting so far",messages:[{time:"2020-12-22",sender:"sastabatman",message:"any updates on bane"},{time:"2020-12-22",sender:"Batman",message:"no sighting so far"},{time:"2020-12-22",sender:"sastabatman",message:"what the bank robbery last week"}]},{id:"mrbutler:Batman",person1:"mrbutler",person2:"Batman",lastMsg:"paneer tikka roll",messages:[{time:"2020-12-22",sender:"mrbutler",message:"what u want for dinner"},{time:"2020-12-22",sender:"Batman",message:"paneer tikka roll"},{time:"2020-12-22",sender:"mrbutler",message:"and what for dessert, sir"}]},{id:"lalbatman:Batman",person1:"lalbatman",person2:"Batman",lastMsg:"killing people is not justice",messages:[{time:"2020-12-22",sender:"lalbatman",message:"justice is served"},{time:"2020-12-22",sender:"Batman",message:"killing people is not justice"},{time:"2020-12-22",sender:"lalbatman",message:"they dont deserve to live"}]}];t(13);function u(e){var s=Object(n.useState)(""),t=Object(c.a)(s,2),i=t[0],r=t[1],m=Object(n.useState)([]),d=Object(c.a)(m,2),l=d[0],o=d[1],j=Object(n.useState)(),u=Object(c.a)(j,2),p=u[0],h=u[1];return Object(n.useEffect)((function(){h(g.filter((function(s){return s.id===e.pid}))[0]),o(b.filter((function(s){return s.id==="".concat(e.pid,":Batman")||s.id==="Batman:".concat(e.pid)}))[0].messages)}),[e.pid]),Object(a.jsxs)("div",{className:"messenger-box",children:[p&&Object(a.jsxs)("header",{className:"messenger-header",children:[Object(a.jsx)("button",{type:"backButton",onClick:e.onClick,children:Object(a.jsx)("p",{children:"\u2190"})}),Object(a.jsx)("img",{className:"friend-image",alt:"friend-img",src:p.image}),Object(a.jsx)("div",{children:Object(a.jsxs)("h1",{children:[p.name," "]})})]}),Object(a.jsxs)("div",{className:"messages",children:[Object(a.jsx)("div",{className:"all-chats",children:0!==l.length&&l.map((function(e,s){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"Batman"===e.sender?"right":"left",children:e.message})},s)}))}),Object(a.jsxs)("div",{className:"textfield",children:[Object(a.jsx)("span",{children:Object(a.jsx)("p",{children:"\ud83d\ude0a"})}),Object(a.jsxs)("form",{className:"textfield-form",onSubmit:function(e){o((function(e){return e.concat({time:"2020-12-22",sender:"Batman",message:i})})),r(""),e.preventDefault()},children:[Object(a.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},value:i}),Object(a.jsx)("button",{type:"submit"})]}),Object(a.jsx)("span",{children:Object(a.jsx)("p",{children:"\ud83d\udcce"})}),Object(a.jsx)("span",{children:Object(a.jsx)("p",{children:"\ud83d\udcf7"})})]})]})]})}t(14);var p=function(){var e=Object(n.useState)(!1),s=Object(c.a)(e,2),t=s[0],r=s[1],m=Object(n.useState)(),o=Object(c.a)(m,2),g=o[0],b=o[1];function p(e){r((function(e){return!e})),b(e.target.parentElement.parentElement.id)}return Object(a.jsxs)("div",{className:"App",children:[!t&&Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(l,{}),Object(a.jsx)(j,{onClick:p})]}),t&&Object(a.jsx)(u,{onClick:p,pid:g})]})};m.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.04501f82.chunk.js.map