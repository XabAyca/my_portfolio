(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{38:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(31),i=c.n(n),r=(c(38),c(15)),o=c(2),l=function(e){return Object(o.jsx)("div",{className:"scroll-bottom",children:Object(o.jsxs)("div",{className:"sb-main",children:[e.left&&Object(o.jsx)(r.b,{to:e.left,className:"left hover",children:Object(o.jsx)("span",{children:"\u276c"})}),Object(o.jsx)("p",{className:"center",children:"scroll"}),e.right&&Object(o.jsx)(r.b,{to:e.right,className:"right hover",children:Object(o.jsx)("span",{children:"\u276d"})})]})})},j=c(17),d=c(33),m=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(j.a)(n,2),r=i[0],l=i[1],m=Object(a.useState)(""),b=Object(j.a)(m,2),u=b[0],h=b[1];return Object(o.jsxs)("form",{className:"contact-form",children:[Object(o.jsx)("h2",{children:"Contactez-moi"}),Object(o.jsxs)("div",{className:"form-content",children:[Object(o.jsx)("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return s(e.target.value)},placeholder:"nom *",value:c}),Object(o.jsxs)("div",{className:"email-content",children:[Object(o.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(o.jsx)("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return l(e.target.value)},placeholder:"email *",value:r})]}),Object(o.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return h(e.target.value)},placeholder:"message *",value:u,required:!0})]}),Object(o.jsx)("input",{className:"button hover",type:"submit",value:"envoyer",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("name"),a=document.getElementById("email"),n=document.getElementById("message"),i=document.querySelector(".form-message");c&&function(){var e=document.getElementById("not-mail");return r.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&u?(t.classList.remove("red"),a.classList.remove("red"),n.classList.remove("red"),i.innerHTML="Message en cours d'envoi...",i.style.background="#00c1ec",i.style.opacity="1",d.a.send("service_di4zk59","template_xgdwxe3",{name:c,email:r,message:u},"user_6hpAE04b3NtHvMSxv3xxV").then((function(){i.innerHTML="Message envoy\xe9 ! Je vous recontacterai d\xe8s que possible.",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),s(""),l(""),h(""),setTimeout((function(){i.style.opacity="0"}),5e3)}),(function(e){console.log(e),i.style.background="rgb(253, 87, 87)",i.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))):(i.innerHTML="Merci de remplir correctement les champs requis *",i.style.background="rgb(253, 87, 87)",i.style.opacity="1",c||t.classList.add("error"),r||a.classList.add("error"),u||n.classList.add("error"))}(e)}}),Object(o.jsx)("div",{className:"form-message"})]})},b=function(){return Object(o.jsx)("span",{className:"logo",children:"Xabi"})},u=[{id:1,title:"Hel-J",date:"Juillet 2021",languages:["Ruby","RubyOnRails","Sass"],infos:"Projet The Hacking Project: Il peut \xeatre difficile de cr\xe9er des projets digitaux de qualit\xe9 professionnel. Hel-J \xe0 pour vocation de vous aider \xe0 apprendre \xe0 collaborer en \xe9x\xe9cutant des projets en \xe9quipe et \xe9galement de performer dans votre code \xe0 travers le peer-learning.",img:"https://drive.google.com/uc?id=1XmOSVkBx3lk91S9cRxAVDT07nd7KS9uv",link:"https://hel-j.herokuapp.com/",github:"https://github.com/XabAyca/HelJ"},{id:2,title:"The Hyper Progam",date:"Ao\xfbt 2021",languages:["Javascript Vannilla","Sass","API"],infos:"Projet The Hacking Project: Cr\xe9ation d'une SPA pr\xe9sentant des jeux vid\xe9os. Utilisation de l'API RAWG.IO",img:"https://drive.google.com/uc?id=12OG6Jl56RajPLCdvnsoQRjjpaH2QbpKq",link:"https://github.com/XabAyca/the_hyper_propram",github:"https://github.com/XabAyca/the_hyper_propram"},{id:3,title:"  Question for a Dev",date:"Juillet 2021",languages:["JavaScript Vanilla","Sass","API"],infos:"Projet The Hacking Project: Cr\xe9ation d'un jeux type quizz en Javascript Vanilla.",img:"https://drive.google.com/uc?id=1Pvr6tJrcFLbZbp2bQ17-vNuW69FSnm0C",link:"https://github.com/XabAyca/question_for_a_dev",github:"https://github.com/XabAyca/question_for_a_dev"},{id:4,title:"My Portfolio",date:"Ao\xfbt 2021",languages:["React","JavaScript","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"https://drive.google.com/uc?id=1xqJwkjEloTrr9miVL6VbuaM73Hr1W0j4",link:"https://xabayca.github.io/my_portfolio/",github:"https://github.com/XabAyca/my_portfolio"}],h=function(){var e=s.a.useState(u),t=Object(j.a)(e,1)[0];return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)(r.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"Accueil"})}),Object(o.jsxs)("li",{className:"nav-portfolio",children:["Portfolio",Object(o.jsx)("ul",{className:"nav-projects",children:t.map((function(e){return Object(o.jsx)(r.b,{to:"/project-"+e.id,activeClassName:"nav-active",className:"hover",children:Object(o.jsx)("li",{children:e.title})},e.id)}))})]}),Object(o.jsx)(r.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active",children:Object(o.jsx)("li",{children:"Contact"})})]})})},p=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var c=t.offsetX-20,a=t.offsetY-13;e.style.transform="translate(".concat(c,"px, ").concat(a,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return Object(o.jsx)("div",{className:"social-network",children:Object(o.jsxs)("ul",{className:"content",children:[Object(o.jsx)("a",{onMouseOver:e,href:"https://www.facebook.com/profile.php?id=100004295178969",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(o.jsx)("a",{onMouseOver:e,href:"https://github.com/XabAyca",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-github"})})}),Object(o.jsx)("a",{onMouseOver:e,href:"https://www.linkedin.com/in/xabi-aycaguer/",target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fab fa-linkedin"})})})]})})},x=c(29),O=c.n(x),v=c(50),f=function(){return Object(a.useEffect)((function(){window.addEventListener("mousemove",(function(e){var t=e.clientX+"px",c=e.clientY+"px";document.querySelector(".cursor").style.top=c,document.querySelector(".cursor").style.left=t}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},t=function(){document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(c){c.addEventListener("mouseover",e),c.addEventListener("mouseleave",t)}))}),[]),Object(o.jsx)("span",{className:"cursor"})},g=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(v.a.div,{className:"contact",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-800}},children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(m,{}),Object(o.jsxs)("div",{className:"contact-infos",children:[Object(o.jsx)("div",{className:"address",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"Adresse"}),Object(o.jsx)("p",{children:"D\xe9placement & remote"}),Object(o.jsx)("p",{children:"64 000 Pau"})]})}),Object(o.jsx)("div",{className:"phone",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"T\xe9l\xe9phone"}),Object(o.jsx)(O.a,{text:"0679694587",className:"hover",children:Object(o.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Num\xe9ro de t\xe9l\xe9phon\xe9 copi\xe9 !")},children:"06 79 69 45 87"})})]})}),Object(o.jsx)("div",{className:"email",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h4",{children:"Email"}),Object(o.jsx)(O.a,{text:"xabi.aycaguer@gmail.com",className:"hover",children:Object(o.jsx)("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")},children:"xabi.aycaguer@gmail.com"})})]})}),Object(o.jsx)(p,{}),Object(o.jsx)("div",{className:"credits",children:Object(o.jsx)("p",{children:"Create with by \u2665 Xabi AYCAGUER - \xa9 2021"})})]}),Object(o.jsx)(l,{left:"/project-4"})]})})},y=function(){return s.a.useEffect((function(){var e=document.getElementById("text-target"),t=["Front-end","Back-end","Full-stack</>"],c=0,a=0;!function s(){setTimeout((function(){c>=t.length?(c=0,a=0,s()):a<t[c].length?(!function(){var s=document.createElement("span");e.appendChild(s),s.classList.add("letter"),s.style.opacity="0",s.style.animation="anim 5s ease forwards",s.textContent=t[c][a],setTimeout((function(){e.lastChild.remove()}),3e3)}(),a++,s()):(a=0,c++,setTimeout((function(){s()}),3e3))}),150)}()}),[]),Object(o.jsxs)("span",{className:"dynamic-text",children:[Object(o.jsx)("span",{className:"simply",children:"D\xe9veloppeur"}),Object(o.jsx)("span",{id:"text-target"})]})},N=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(f,{}),Object(o.jsxs)(v.a.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}},children:[Object(o.jsx)(h,{}),Object(o.jsx)(p,{}),Object(o.jsx)("div",{className:"home-main",children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)(v.a.h1,{drag:!0,onDragEnd:!0,children:"Xabi AYCAGUER"}),Object(o.jsx)(v.a.h2,{drag:!0,onDragEnd:!0,children:Object(o.jsx)(y,{})})]})}),Object(o.jsx)(l,{right:"/project-1"})]})]})},k=function(e){var t=Object(a.useState)(u),c=Object(j.a)(t,1)[0][e.projectNumber],s=Math.floor(200*Math.random()+700)+"px",n=Math.floor(200*Math.random()+150)+"px",i="scale("+(Math.random()+.7)+")",r=Math.random()>.4?1:-1,l={initial:{opacity:0,x:350*Math.random()*r,y:120*Math.random()*r},visible:{opacity:1,x:0,y:0}};return Object(o.jsxs)(v.a.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}},children:[Object(o.jsxs)("div",{className:"project-content",children:[Object(o.jsxs)("h1",{children:[c.title," "]}),Object(o.jsx)("p",{children:c.date}),Object(o.jsx)("ul",{className:"languages",children:c.languages.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]}),Object(o.jsxs)(v.a.div,{className:"img-content",initial:"initial",animate:"visible",variants:l,transition:{duration:1.2},children:[Object(o.jsxs)("div",{className:"img-container hover",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:c.title}),Object(o.jsx)("p",{children:c.infos})]}),Object(o.jsx)("img",{src:c.img,alt:c.title})]}),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsx)("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("span",{className:"button",children:"Voir le site"})}),Object(o.jsx)("a",{href:c.github,target:"_blank",rel:"noopener noreferrer",className:"hover",children:Object(o.jsx)("i",{className:"fab fa-github git"})})]})]}),Object(o.jsx)("span",{className:"random-circle",style:{left:s,top:n,transform:i}})]})},E=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(k,{projectNumber:0}),Object(o.jsx)(l,{left:"/",right:"/project-2"})]})})},w=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(k,{projectNumber:1}),Object(o.jsx)(l,{left:"/project-1",right:"/project-3"})]})})},A=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(k,{projectNumber:2}),Object(o.jsx)(l,{left:"/project-2",right:"/project-4"})]})})},L=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(k,{projectNumber:3}),Object(o.jsx)(l,{left:"/project-3",right:"/contact"})]})})},S=c(4),q=c(51),C=function(){var e=Object(S.h)(),t=Object(S.g)();return s.a.useEffect((function(){window.addEventListener("wheel",(function(e){var c=window.location.origin+"/",a=function(c,a){e.wheelDeltaY<0?setTimeout((function(){t.push(c)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(a)}),500)};switch(window.location.href.toString()){case c:e.wheelDeltaY<0&&setTimeout((function(){t.push("project-1")}),500);break;case c+"project-1":a("project-2","");break;case c+"project-2":a("project-3","project-1");break;case c+"project-3":a("project-4","project-2");break;case c+"project-4":a("contact","project-3");break;case c+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("project-4")}),500);break;default:console.log("nothing")}}))}),[t]),Object(o.jsx)(q.a,{children:Object(o.jsxs)(S.d,{location:e,children:[Object(o.jsx)(S.b,{exact:!0,path:"/",component:N}),Object(o.jsx)(S.b,{exact:!0,path:"/project-1",component:E}),Object(o.jsx)(S.b,{exact:!0,path:"/project-2",component:w}),Object(o.jsx)(S.b,{exact:!0,path:"/project-3",component:A}),Object(o.jsx)(S.b,{exact:!0,path:"/project-4",component:L}),Object(o.jsx)(S.b,{exact:!0,path:"/contact",component:g}),Object(o.jsx)(S.a,{to:"/"})]},e.pathname)})};i.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.40189eaa.chunk.js.map