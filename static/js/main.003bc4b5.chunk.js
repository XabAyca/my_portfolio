(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{38:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(31),r=c.n(s),i=(c(38),c(16)),o=c(15),l=Object(a.createContext)(null),j=c(2),d=function(e){var t=Object(a.useContext)(l).darkMode;return Object(j.jsx)("div",{className:t?"scroll-bottom dark":"scroll-bottom",children:Object(j.jsxs)("div",{className:"sb-main",children:[e.left&&Object(j.jsx)(o.b,{to:e.left,className:"left hover",children:Object(j.jsx)("span",{children:"\u276c"})}),Object(j.jsx)("p",{className:"center",children:"scroll"}),e.right&&Object(j.jsx)(o.b,{to:e.right,className:"right hover",children:Object(j.jsx)("span",{children:"\u276d"})})]})})},b=c(33),u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(""),u=Object(i.a)(d,2),m=u[0],h=u[1];return Object(j.jsxs)("form",{className:"contact-form",children:[Object(j.jsx)("h2",{children:"Contactez-moi"}),Object(j.jsxs)("div",{className:"form-content",children:[Object(j.jsx)("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return n(e.target.value)},placeholder:"Nom *",value:c}),Object(j.jsxs)("div",{className:"email-content",children:[Object(j.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(j.jsx)("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return l(e.target.value)},placeholder:"Email *",value:o})]}),Object(j.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return h(e.target.value)},placeholder:"Message *",value:m,required:!0})]}),Object(j.jsx)("input",{className:"button hover",type:"submit",value:"Envoyer",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("name"),a=document.getElementById("email"),s=document.getElementById("message"),r=document.querySelector(".form-message");c&&function(){var e=document.getElementById("not-mail");return o.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&m?(t.classList.remove("red"),a.classList.remove("red"),s.classList.remove("red"),r.innerHTML="Message en cours d'envoi...",r.style.background="#00c1ec",r.style.opacity="1",b.a.send("service_di4zk59","template_xgdwxe3",{name:c,email:o,message:m},"user_6hpAE04b3NtHvMSxv3xxV").then((function(){r.innerHTML="Message envoy\xe9 ! Je vous recontacterai d\xe8s que possible.",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),n(""),l(""),h(""),setTimeout((function(){r.style.opacity="0"}),5e3)}),(function(e){console.log(e),r.style.background="rgb(253, 87, 87)",r.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))):(r.innerHTML="Merci de remplir correctement les champs requis *",r.style.background="rgb(253, 87, 87)",r.style.opacity="1",c||t.classList.add("error"),o||a.classList.add("error"),m||s.classList.add("error"))}(e)}}),Object(j.jsx)("div",{className:"form-message"})]})},m=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:e?"logo dark":"logo",children:"Xabi"})})},h=[{id:1,title:"Hel-J",date:"Juillet 2021",languages:["Ruby","RubyOnRails","Sass"],infos:"Projet The Hacking Project: Il peut \xeatre difficile de cr\xe9er des projets digitaux de qualit\xe9 professionnel. Hel-J \xe0 pour vocation de vous aider \xe0 apprendre \xe0 collaborer en \xe9x\xe9cutant des projets en \xe9quipe et \xe9galement de performer dans votre code \xe0 travers le peer-learning.",img:"https://drive.google.com/uc?id=1XmOSVkBx3lk91S9cRxAVDT07nd7KS9uv",link:"https://hel-j.herokuapp.com/",github:"https://github.com/XabAyca/HelJ"},{id:2,title:"The Hyper Progam",date:"Ao\xfbt 2021",languages:["Javascript Vannilla","Sass","API"],infos:"Projet The Hacking Project: Cr\xe9ation d'une SPA pr\xe9sentant des jeux vid\xe9os. Utilisation de l'API RAWG.IO",img:"https://drive.google.com/uc?id=12OG6Jl56RajPLCdvnsoQRjjpaH2QbpKq",link:"https://github.com/XabAyca/the_hyper_propram",github:"https://github.com/XabAyca/the_hyper_propram"},{id:3,title:"  Question for a Dev",date:"Juillet 2021",languages:["JavaScript Vanilla","Sass","API"],infos:"Projet The Hacking Project: Cr\xe9ation d'un jeux type quizz en Javascript Vanilla.",img:"https://drive.google.com/uc?id=1Pvr6tJrcFLbZbp2bQ17-vNuW69FSnm0C",link:"https://github.com/XabAyca/question_for_a_dev",github:"https://github.com/XabAyca/question_for_a_dev"},{id:4,title:"My Portfolio",date:"Ao\xfbt 2021",languages:["React","JavaScript","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"https://drive.google.com/uc?id=1xqJwkjEloTrr9miVL6VbuaM73Hr1W0j4",link:"https://xabayca.github.io/my_portfolio/",github:"https://github.com/XabAyca/my_portfolio"}],x=function(){var e=n.a.useState(h),t=Object(i.a)(e,1)[0],c=Object(a.useContext)(l).darkMode;return Object(j.jsx)("div",{className:c?"navigation dark":"navigation",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(o.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(j.jsx)("li",{children:"Accueil"})}),Object(j.jsxs)("li",{className:"nav-portfolio",children:["Portfolio",Object(j.jsx)("ul",{className:"nav-projects",children:t.map((function(e){return Object(j.jsx)(o.b,{to:"/project-"+e.id,activeClassName:"nav-active",className:"hover",children:Object(j.jsx)("li",{children:e.title})},e.id)}))})]}),Object(j.jsx)(o.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(j.jsx)("li",{children:"Contact"})})]})})},p=function(){var e=Object(a.useContext)(l).darkMode,t=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var c=t.offsetX-20,a=t.offsetY-13;e.style.transform="translate(".concat(c,"px, ").concat(a,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return Object(j.jsx)("div",{className:e?"social-network dark":"social-network",children:Object(j.jsxs)("ul",{className:"content",children:[Object(j.jsx)("a",{onMouseOver:t,href:"https://www.facebook.com/profile.php?id=100004295178969",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(j.jsx)("a",{onMouseOver:t,href:"https://github.com/XabAyca",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-github"})})}),Object(j.jsx)("a",{onMouseOver:t,href:"https://www.linkedin.com/in/xabi-aycaguer/",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})})]})})},O=c(29),v=c.n(O),f=c(50),g=function(){var e=Object(a.useContext)(l).darkMode;return Object(a.useEffect)((function(){window.addEventListener("mousemove",(function(e){var t=e.clientX+"px",c=e.clientY+"px";document.querySelector(".cursor").style.top=c,document.querySelector(".cursor").style.left=t}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},t=function(){document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(c){c.addEventListener("mouseover",e),c.addEventListener("mouseleave",t)}))}),[]),Object(j.jsx)("span",{className:e?"cursor dark":"cursor"})},y=function(){var e=Object(a.useContext)(l),t=e.darkMode,c=e.toggleMode;return console.log(t),Object(j.jsxs)(f.a.span,{drag:!0,onDragEnd:!0,className:t?"dark-btn hover dark":"dark-btn hover",onClick:c,children:["Mode\xa0",t?Object(j.jsx)("i",{className:"far fa-sun"}):Object(j.jsx)("i",{className:"far fa-moon"})]})},k=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("main",{children:Object(j.jsxs)(f.a.div,{className:e?"contact dark":"contact",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-800}},children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"contact-infos",children:[Object(j.jsx)("div",{className:"address",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h4",{children:"Adresse"}),Object(j.jsx)("p",{children:"D\xe9placement & remote"}),Object(j.jsx)("p",{children:"64 000 Pau"})]})}),Object(j.jsx)("div",{className:"phone",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h4",{children:"T\xe9l\xe9phone"}),Object(j.jsx)(v.a,{text:"0679694587",className:"hover",children:Object(j.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Num\xe9ro de t\xe9l\xe9phon\xe9 copi\xe9 !")},children:"06 79 69 45 87"})})]})}),Object(j.jsx)("div",{className:"email",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h4",{children:"Email"}),Object(j.jsx)(v.a,{text:"xabi.aycaguer@gmail.com",className:"hover",children:Object(j.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")},children:"xabi.aycaguer@gmail.com"})})]})}),Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"credits",children:Object(j.jsx)("p",{children:"Create with by \u2665 Xabi AYCAGUER - \xa9 2021"})})]}),Object(j.jsx)(d,{left:"/project-4"})]})})},N=function(){var e=Object(a.useContext)(l).darkMode;return n.a.useEffect((function(){var e=document.getElementById("text-target"),t=["Front-end","Back-end","Full-stack</>"],c=0,a=0;!function n(){setTimeout((function(){c>=t.length?(c=0,a=0,n()):a<t[c].length?(!function(){var n=document.createElement("span");e.appendChild(n),n.classList.add("letter"),n.style.opacity="0",n.style.animation="anim 5s ease forwards",n.textContent=t[c][a],setTimeout((function(){e.lastChild.remove()}),3e3)}(),a++,n()):(a=0,c++,setTimeout((function(){n()}),3e3))}),150)}()}),[]),Object(j.jsxs)("span",{className:e?"dynamic-text dark":"dynamic-text",children:[Object(j.jsx)("span",{className:"simply",children:"D\xe9veloppeur"}),Object(j.jsx)("span",{id:"text-target"})]})},M=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsxs)("main",{children:[Object(j.jsx)(g,{}),Object(j.jsxs)(f.a.div,{className:e?"home dark":"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}},children:[Object(j.jsx)(y,{}),Object(j.jsx)(x,{}),Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"home-main",children:Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)(f.a.h1,{drag:!0,onDragEnd:!0,children:"Xabi AYCAGUER"}),Object(j.jsx)(f.a.h2,{drag:!0,onDragEnd:!0,children:Object(j.jsx)(N,{})})]})}),Object(j.jsx)(d,{right:"/project-1"})]})]})},C=function(e){var t=Object(a.useState)(h),c=Object(i.a)(t,1)[0][e.projectNumber],n=Object(a.useContext)(l).darkMode,s=Math.floor(200*Math.random()+700)+"px",r=Math.floor(200*Math.random()+150)+"px",o="scale("+(Math.random()+.7)+")",d=Math.random()>.4?1:-1,b={initial:{opacity:0,x:350*Math.random()*d,y:120*Math.random()*d},visible:{opacity:1,x:0,y:0}};return Object(j.jsxs)(f.a.div,{className:n?"project-main dark":"project-main",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}},children:[Object(j.jsxs)("div",{className:"project-content",children:[Object(j.jsxs)("h1",{children:[c.title," "]}),Object(j.jsx)("p",{children:c.date}),Object(j.jsx)("ul",{className:"languages",children:c.languages.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]}),Object(j.jsxs)(f.a.div,{className:"img-content",initial:"initial",animate:"visible",variants:b,transition:{duration:1.2},children:[Object(j.jsxs)("div",{className:"img-container hover",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("h3",{children:c.title}),Object(j.jsx)("p",{children:c.infos})]}),Object(j.jsx)("img",{src:c.img,alt:c.title})]}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(j.jsx)("span",{className:"button",children:"Voir le site"})}),Object(j.jsx)("a",{href:c.github,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(j.jsx)("i",{className:"fab fa-github git"})})]})]}),Object(j.jsx)("span",{className:"random-circle",style:{left:s,top:r,transform:o}})]})},E=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:e?"project dark":"project",children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)(C,{projectNumber:0}),Object(j.jsx)(d,{left:"/",right:"/project-2"})]})})},w=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:e?"project dark":"project",children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)(C,{projectNumber:1}),Object(j.jsx)(d,{left:"/project-1",right:"/project-3"})]})})},S=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:e?"project dark":"project",children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)(C,{projectNumber:2}),Object(j.jsx)(d,{left:"/project-2",right:"/project-4"})]})})},A=function(){var e=Object(a.useContext)(l).darkMode;return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:e?"project dark":"project",children:[Object(j.jsx)(g,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{}),Object(j.jsx)(m,{}),Object(j.jsx)(C,{projectNumber:3}),Object(j.jsx)(d,{left:"/project-3",right:"/contact"})]})})},L=c(4),q=c(51),T=function(){var e=Object(L.h)(),t=Object(L.g)(),c=Object(a.useState)(null),s=Object(i.a)(c,2),r=s[0],o=s[1];return n.a.useEffect((function(){window.addEventListener("wheel",(function(e){var c=window.location.origin+"/",a=function(c,a){e.wheelDeltaY<0?setTimeout((function(){t.push(c)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(a)}),500)};switch(window.location.href.toString()){case c:e.wheelDeltaY<0&&setTimeout((function(){t.push("project-1")}),500);break;case c+"project-1":a("project-2","");break;case c+"project-2":a("project-3","project-1");break;case c+"project-3":a("project-4","project-2");break;case c+"project-4":a("contact","project-3");break;case c+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("project-4")}),500);break;default:console.log("nothing")}}))}),[t]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("ThemeContext:darkMode"));void 0!==e&&null!==e?o(e):window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&o(!1)}),[]),Object(j.jsx)(l.Provider,{value:{darkMode:r,toggleMode:function(){localStorage.setItem("ThemeContext:darkMode",String(!r)),o(!r)}},children:Object(j.jsx)(q.a,{children:Object(j.jsxs)(L.d,{location:e,children:[Object(j.jsx)(L.b,{exact:!0,path:"/",component:M}),Object(j.jsx)(L.b,{exact:!0,path:"/project-1",component:E}),Object(j.jsx)(L.b,{exact:!0,path:"/project-2",component:w}),Object(j.jsx)(L.b,{exact:!0,path:"/project-3",component:S}),Object(j.jsx)(L.b,{exact:!0,path:"/project-4",component:A}),Object(j.jsx)(L.b,{exact:!0,path:"/contact",component:k}),Object(j.jsx)(L.a,{to:"/"})]},e.pathname)})})};r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.003bc4b5.chunk.js.map