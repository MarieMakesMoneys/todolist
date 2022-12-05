(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),o=n.n(r),l=n(645),c=n.n(l),i=n(667),d=n.n(i),a=new URL(n(367),n.b),s=new URL(n(241),n.b),u=c()(o()),f=d()(a),p=d()(s);u.push([e.id,"/* palette {\n    background creme #cfcfcf\n    super dark #130f1a\n    old rose #997578\n    golden yellow #cea73c\n    light blue green #5f998c\n} */\n\n@font-face {\n    font-family: comfortaa;\n    src: url("+f+");\n}\n\n:root {\n    background-color: #cfcfcf;\n    background-image: url("+p+");\n    background-size: cover;\n    font-family: comfortaa, sans-serif;\n}\n\nbody {\n    position: relative;\n    margin: 1rem auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1rem;\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    width: min(80vw, 1100px);\n    height: fit-content;\n    min-width: fit-content;\n}\n\nheader {\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    font-size: 3rem;\n    font-weight: 900;\n    text-align: center;\n    justify-self: center;\n}\n\n.main {\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 210px 1fr;\n    gap: 1rem;\n    height: 600px;\n    min-width: fit-content;\n}\n\n.sidebar {\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    padding-right: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-size: 1.5rem;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar .header {\n    display: flex;\n    gap: .5rem;\n    align-items: flex-end;\n}\n\n.sidebar .header:hover {\n    cursor: pointer;\n    font-size: 1.6rem;\n}\n\n.sidebar .logo {\n    width: 2rem;\n}\n\n.projects-container {\n    margin-top: .5rem;\n    font-size: 1.2rem;\n    margin-left: 1rem;\n}\n\n.projects-container .title:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.container {\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    min-width: 210px;\n    display: flex;\n    flex-direction: column;\n    gap: .3rem;\n    overflow: auto;\n}\n\n.task {\n    background-color: #cfcfcf;\n    color: #130f1a;\n    border-radius: .2rem;\n    padding: .5rem;\n    display: flex;\n   justify-content: space-between;\n}\n\n.task-content {\n    display: grid;\n    grid-template-columns: 25px 1fr;\n}\n\nbutton.check {\n    width: 15px;\n    border: none;\n    border-radius: .3rem;\n}\n\nbutton.check.red {\n    background-color: #985359;\n}\n\nbutton.check.green {\n    background-color: #5f998c;\n}\n\nbutton.check.blank {\n    background-color: #cfcfcf;\n}\n\nbutton.check:hover {\n    cursor: pointer;\n}\n\n.task .title {\n    font-weight: 600;\n}\n\n.task .descr {\n    font-style: italic;\n}\n\n.task.priority-zero {\n    border-left: solid 5px #5f998c;\n}\n\n.task.priority-one {\n    border-left: solid 5px #cea73c;\n}\n\n.task.priority-two {\n    border-left: solid 5px #997578;\n}\n\n.task-options {\n    display: flex;\n    gap: 1rem;\n}\n\nbutton.delete {\n    height: fit-content;\n    width: fit-content;\n    padding: .2rem;\n    border-radius: 1rem;\n    border: none;\n    background-color: #985359;\n    align-self: center;\n    color: #cfcfcf;\n}\n\nbutton.delete:hover {\n    cursor: pointer;\n    color: #130f1a;\n    border: solid 2px #130f1a;\n}\n\nbutton.edit {\n    height: fit-content;\n    width: fit-content;\n    padding: .2rem;\n    border-radius: 1rem;\n    border: none;\n    background-color: #5f998c;\n    align-self: center;\n    color: #cfcfcf;\n}\n\nbutton.edit:hover {\n    cursor: pointer;\n    color: #130f1a;\n    border: solid 2px #130f1a;\n}\n\n.project {\n    background-color: #cfcfcf;\n    color: #130f1a;\n    border-radius: .2rem;\n    padding: .5rem;\n    font-weight: 600;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 25px;\n}\n\n.project-descr {\n    font-weight: 100;\n    font-style: italic;\n}\n\n.project-options {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n}\n\n.project li {\n    font-weight: 100;\n    list-style-type: circle;\n}\n\n.project li.green {\n    list-style-type: disc;\n}\n\n.notes-container {\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n\n.note {\n    background-color: #cfcfcf;\n    color: #130f1a;\n    border-radius: .2rem;\n    padding: .5rem;\n    height: 180px;\n    width: 160px;\n    text-overflow: ellipsis;\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 1fr 25px;\n}\n\n.note-options {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n}\n\n.form-container {\n    position: fixed;\n    top: 1rem;\n    justify-self: center;\n    background-color: #130f1a;\n    box-shadow: 2px 2px 10px #cfcfcf;\n    z-index: 9;\n    padding: 2rem 3rem;\n    border-radius: 1rem;\n    display: none;\n    flex-direction: column;\n}\n\n.form-container>button {\n    margin-bottom: 2rem;\n    align-self: flex-end;\n    border-radius: 1rem;\n    border: none;\n    background-color: #985359;\n    height: fit-content;\n}\n\n.form-container>button:hover {\n    cursor: pointer;\n    color: #cfcfcf;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\nform>legend {\n    font-size: 2rem;\n}\n\nfieldset legend {\n    font-size: 1.2rem;\n}\n\nfieldset {\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\nfieldset.new-project {\n    display: none;\n}\n\nfieldset.new-task {\n    display: none;\n}\n\nfieldset.new-note {\n    display: none;\n}\n\nbutton.save {\n    display: none;\n}\n\nbutton.save-edit {\n    display: none;\n}\n\nform button {\n    border: none;\n    border-radius: 1rem;\n    width: fit-content;\n    padding: .5rem 1rem;\n    align-self: center;\n    font-size: 1rem;\n}\n\nfieldset.select>button:hover {\n    cursor: pointer;\n    background-color: #cea73c;\n}\n\nform>button:hover {\n    cursor: pointer;\n    background-color: #88CEBE;\n}\n\nfooter {\n    background-color: #130f1a56;\n    border-radius: 1rem;\n    color: #cfcfcf;\n    padding: 1rem;\n    text-align: center;\n}\n\nfooter a:link, footer a:visited {\n    color: inherit;\n    cursor: pointer;\n}",""]);const m=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,l){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&c[s[0]]||(void 0!==l&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=l),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var l={},c=[],i=0;i<e.length;i++){var d=e[i],a=r.base?d[0]+r.base:d[0],s=l[a]||0,u="".concat(a," ").concat(s);l[a]=s+1;var f=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var l=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<l.length;c++){var i=n(l[c]);t[i].references--}for(var d=r(e,o),a=0;a<l.length;a++){var s=n(l[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}l=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},367:(e,t,n)=>{e.exports=n.p+"4d2ab5de91c4d193a69f.ttf"},241:(e,t,n)=>{e.exports=n.p+"28bb2e66b64fa3065e4f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{ex:()=>G,c8:()=>W,s3:()=>Q,r4:()=>B,ZT:()=>se,TJ:()=>ee,n0:()=>X,Wq:()=>_});let e=document.querySelectorAll("button.delete"),t=document.querySelectorAll("button.edit");const o=document.querySelector("fieldset.select"),l=document.querySelector("fieldset.new-project"),c=document.querySelector("fieldset.new-task"),i=document.querySelector("fieldset.new-note"),d=document.querySelector("button.save-edit");function a(n){for(;B.firstChild;)B.removeChild(B.firstChild);for(const e of n){let t=document.createElement("div");t.classList.add("task"),"0"===e.priority?t.classList.add("priority-zero"):"1"===e.priority?t.classList.add("priority-one"):"2"===e.priority&&t.classList.add("priority-two");let r=document.createElement("div");r.classList.add("task-content");let o=document.createElement("button");o.classList.add("check"),o.setAttribute("data-array-index",n.indexOf(e)),"red"===e.status?o.classList.add("red"):"green"===e.status?o.classList.add("green"):"blank"===e.status&&o.classList.add("blank"),r.appendChild(o);let l=document.createElement("div");l.classList.add("task-text"),r.appendChild(l);let c=document.createElement("div");c.classList.add("title"),c.textContent=e.title,l.appendChild(c);let i=document.createElement("div");i.classList.add("descr"),i.textContent=e.descr,l.appendChild(i);let d=document.createElement("div");d.classList.add("dueDate"),d.textContent=s(e),l.appendChild(d);let a=document.createElement("div");a.classList.add("task-options");let u=document.createElement("button");u.classList.add("edit"),u.setAttribute("data-array-index",n.indexOf(e)),u.setAttribute("data-project",`${e.project}`),u.textContent="edit",a.appendChild(u);let f=document.createElement("button");f.classList.add("delete"),f.setAttribute("data-array-index",n.indexOf(e)),f.setAttribute("data-project",`${e.project}`),f.textContent="x",a.appendChild(f),t.appendChild(r),t.appendChild(a),B.appendChild(t)}e=document.querySelectorAll("button.delete"),e.forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-array-index");document.querySelectorAll(`.form-container [data-array-index="${t}"]`).forEach((e=>{e.parentNode.removeChild(e)}));let n=e.getAttribute("data-project");for(let e=0;e<W.length;e++)if(n===W[e].title){let n=W[e],r=Q[t].title;for(let e=0;e<n.content.length;e++)r===n.content[e].title&&n.content.splice(e,1)}Q.splice(t,1);let r=JSON.stringify(Q);localStorage.setItem("tasks",r),a(Q)}))})),t=document.querySelectorAll("button.edit"),t.forEach((e=>{e.addEventListener("click",(function(){let t,n=e.getAttribute("data-array-index");document.querySelector(".form-container").style.display="flex",o.style.display="none",l.style.display="none",c.style.display="flex",i.style.display="none",d.style.display="block",document.querySelector("fieldset.new-task>select#project").value=Q[n].project;let r=e.getAttribute("data-project");for(let e=0;e<W.length;e++)r===W[e].title&&(document.querySelector("fieldset.new-task>select#project").selectedIndex=e,t=e);document.querySelector("fieldset.new-task>input#title").value=Q[n].title,document.querySelector("fieldset.new-task>input#descr").value=Q[n].descr;let s=Q[n].dueDate,u=s.slice(0,4)+"-"+s.slice(4,6)+"-"+s.slice(6);document.querySelector("fieldset.new-task>input#due-date").value=u,document.querySelector("fieldset.new-task>input#priority").value=Q[n].priority,d.addEventListener("click",(()=>{let e=document.querySelector("fieldset.new-task>select#project").value,r=document.querySelector("fieldset.new-task>select#project").selectedIndex,o=document.querySelector("fieldset.new-task>input#title").value,l=document.querySelector("fieldset.new-task>input#descr").value,c=document.querySelector("fieldset.new-task>input#due-date").value;c=c.replaceAll("-","");let i=document.querySelector("fieldset.new-task>input#priority").value,s=(document.querySelector(`button[data-array-index="${n}"]`).classList.value.split(" ")[1],W[t].content),u=W[r].content,f=Q[n].title;if(t===r){for(let e=0;e<u.length;e++)f===u[e].title&&(u[e].title=o,u[e].descr=l,u[e].dueDate=c,u[e].project=u,u[e].priority=i);Q[n].project=e,Q[n].title=o,Q[n].descr=l,Q[n].dueDate=c,Q[n].priority=i;let t=JSON.stringify(Q);localStorage.setItem("tasks",t)}else{let n=Q[t].title;for(let e=0;e<s.length;e++)n===s[e].title&&s.splice(e,1);Q.splice(t,1);let r=_(n,l,c,e,i);Q.push(r),u.push(r);let o=JSON.stringify(Q);localStorage.setItem("tasks",o)}a(Q),document.querySelector(".form-container").style.display="none",d.style.display="none",document.querySelector("fieldset.new-task>select#project").selectedIndex=0,document.querySelector("fieldset.new-task>input#title").value="",document.querySelector("fieldset.new-task>input#descr").value="",document.querySelector("fieldset.new-task>input#due-date").value="",document.querySelector("fieldset.new-task>input#priority").value=""}),{once:!0})}))})),u(n)}function s(e){let t=e.dueDate,n=t.slice(0,4),r=t.slice(4,6);return t.slice(6)+"/"+r+"/"+n}function u(e){document.querySelectorAll("button.check").forEach((t=>{t.addEventListener("click",(()=>{let n=t.getAttribute("data-array-index");console.log(n);let r=e[n].status;"red"===r?e[n].status="green":"green"===r?e[n].status="blank":"blank"===r&&(e[n].status="red"),a(e)}))}))}let f,p=document.querySelectorAll("button.delete"),m=document.querySelectorAll("button.edit");const y=document.querySelector("fieldset.select"),b=document.querySelector("fieldset.new-project"),h=document.querySelector("fieldset.new-task"),g=document.querySelector("fieldset.new-note"),v=document.querySelector("button.save-edit");function x(){for(;B.firstChild;)B.removeChild(B.firstChild);for(const e of W){let t=document.createElement("div");t.classList.add("project"),t.setAttribute("data-array-index",`${W.indexOf(e)}`);let n=document.createElement("div");n.textContent=e.title;let r=document.createElement("div");r.classList.add("project-descr"),r.textContent=e.descr;let o=document.createElement("ul");for(const t of e.content){let e=document.createElement("li");"green"===t.status&&e.classList.add("green"),e.textContent=t.title,o.appendChild(e)}let l=document.createElement("div");l.classList.add("project-options");let c=document.createElement("button");c.classList.add("delete"),c.setAttribute("data-array-index",`${W.indexOf(e)}`),c.textContent="x";let i=document.createElement("button");i.classList.add("edit"),i.setAttribute("data-array-index",`${W.indexOf(e)}`),i.textContent="edit",n.appendChild(r),n.appendChild(o),l.appendChild(c),l.appendChild(i),t.appendChild(n),t.appendChild(l),B.appendChild(t)}p=document.querySelectorAll("button.delete"),p.forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-array-index");W.splice(t,1),document.querySelectorAll(`[data-array-index="${t}"]`).forEach((e=>{e.parentNode.removeChild(e)}));let n=JSON.stringify(W);localStorage.setItem("projects",n),x(),X(),se()}))})),m=document.querySelectorAll("button.edit"),m.forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-array-index");document.querySelector(".form-container").style.display="flex",y.style.display="none",b.style.display="flex",h.style.display="none",g.style.display="none",v.style.display="block",document.querySelector("fieldset.new-project>input#title").value=W[t].title,document.querySelector("fieldset.new-project>textarea#descr").value=W[t].descr,v.addEventListener("click",(()=>{let e=document.querySelector("fieldset.new-project>input#title").value,n=document.querySelector("fieldset.new-project>textarea#descr").value,r=W[t].content;W[t].title=e,W[t].descr=n,W[t].content=r;let o=JSON.stringify(W);localStorage.setItem("projects",o),x(),X(),se(),ee(),document.querySelector(".form-container").style.display="none",document.querySelector("fieldset.new-project>input#title").value="",document.querySelector("fieldset.new-project>textarea#descr").value="",v.style.display="none"}),{once:!0})}))}))}let S=document.querySelectorAll("button.delete"),k=document.querySelectorAll("button.edit");const w=document.querySelector("fieldset.select"),q=document.querySelector("fieldset.new-project"),C=document.querySelector("fieldset.new-task"),j=document.querySelector("fieldset.new-note"),E=document.querySelector("button.save-edit");function L(){for(;B.firstChild;)B.removeChild(B.firstChild);let e=document.createElement("div");e.classList.add("notes-container");for(let t of G){let n=document.createElement("div");n.classList.add("note"),n.setAttribute("data-array-index",`${G.indexOf(t)}`);let r=document.createElement("div");r.classList.add("note-text"),r.textContent=t.content;let o=document.createElement("div");o.classList.add("note-options");let l=document.createElement("button");l.classList.add("delete"),l.setAttribute("data-array-index",`${G.indexOf(t)}`),l.textContent="x";let c=document.createElement("button");c.classList.add("edit"),c.setAttribute("data-array-index",`${G.indexOf(t)}`),c.textContent="edit",n.appendChild(r),o.appendChild(l),o.appendChild(c),n.appendChild(o),e.appendChild(n)}B.appendChild(e),S=document.querySelectorAll("button.delete"),S.forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-array-index");document.querySelectorAll(`[data-array-index="${t}"]`).forEach((e=>{e.parentNode.removeChild(e)})),G.forEach((e=>{localStorage.removeItem(`notecontent${G.indexOf(e)}`)})),G.splice(t,1),L();let n=JSON.stringify(G);localStorage.setItem("notes",n)}))})),k=document.querySelectorAll("button.edit"),k.forEach((e=>{e.addEventListener("click",(function(){let t=e.getAttribute("data-array-index");document.querySelector(".form-container").style.display="flex",w.style.display="none",q.style.display="none",C.style.display="none",j.style.display="flex",E.style.display="block",document.querySelector("fieldset.new-note>textarea").value=G[t].content,E.addEventListener("click",(()=>{let e=document.querySelector("fieldset.new-note>textarea").value;G[t].content=e;let n=JSON.stringify(G);localStorage.setItem("notes",n),L(),document.querySelector(".form-container").style.display="none",document.querySelector("fieldset.new-note>textarea").value="",E.style.display="none"}),{once:!0})}))}))}var A=n(379),O=n.n(A),I=n(795),N=n.n(I),$=n(569),J=n.n($),T=n(565),z=n.n(T),D=n(216),M=n.n(D),Z=n(589),P=n.n(Z),R=n(426),U={};U.styleTagTransform=P(),U.setAttributes=z(),U.insert=J().bind(null,"head"),U.domAPI=N(),U.insertStyleElement=M(),O()(R.Z,U),R.Z&&R.Z.locals&&R.Z.locals;const _=(e,t,n,r,o,l)=>({title:e,descr:t,dueDate:n,project:r,priority:o,status:l}),F=(e,t,n)=>({title:e,descr:t,content:n}),B=document.querySelector(".container");let H=F("To do list","find all your tasks here",[]),Q=[],W=[H],G=[];const K=Object.keys(localStorage);for(let e of K){if("notes"===e){let t=localStorage.getItem(e);G=JSON.parse(t)}if("projects"===e){let t=localStorage.getItem(e);W=JSON.parse(t)}if("tasks"===e){let t=localStorage.getItem(e);Q=JSON.parse(t)}}const V=document.querySelector(".projects-container");function X(){for(;V.firstChild;)V.removeChild(V.firstChild);for(let e of W){let t=document.createElement("div");t.classList.add("title"),t.setAttribute("data-array-index",W.indexOf(e)),t.textContent=e.title,V.appendChild(t)}}X(),a(Q),document.querySelector(".home>.header").addEventListener("click",(()=>{a(Q),u(Q)})),document.querySelector(".timeline>.header").addEventListener("click",(()=>{f=[...Q],f.sort((function(e,t){return e.dueDate-t.dueDate})),a(f),u(f)})),document.querySelector(".projects>.header").addEventListener("click",(()=>{x()}));let Y=document.querySelectorAll(".projects-container>.title");function ee(){Y=document.querySelectorAll(".projects-container>.title");for(let e of Y){let t=e.getAttribute("data-array-index"),n=W[t];e.addEventListener("click",(()=>{for(;B.firstChild;)B.removeChild(B.firstChild);a(n.content),u(n.content)}))}}ee(),document.querySelector(".notes>.header").addEventListener("click",(()=>{L()})),document.querySelector(".new.header").addEventListener("click",(()=>{document.querySelector(".form-container").style.display="flex",te.style.display="flex",le.style.display="none",ce.style.display="none",ie.style.display="none",ae.style.display="none",de.style.display="none"})),document.querySelector(".close-form").addEventListener("click",(()=>{document.querySelector(".form-container").style.display="none"}));const te=document.querySelector("fieldset.select"),ne=document.querySelector("button.new-project"),re=document.querySelector("button.new-task"),oe=document.querySelector("button.new-note"),le=document.querySelector("fieldset.new-project"),ce=document.querySelector("fieldset.new-task"),ie=document.querySelector("fieldset.new-note"),de=document.querySelector("button.save"),ae=document.querySelector("button.save-edit");function se(){const e=document.querySelector(".new-task>select#project");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t of W){let n=document.createElement("option");n.setAttribute("value",`${t.title.toLowerCase()}`),n.setAttribute("id",W.indexOf(t)),n.textContent=t.title,e.appendChild(n)}}ne.addEventListener("click",(()=>{le.style.display="flex",de.style.display="block",te.style.display="none"})),re.addEventListener("click",(()=>{ce.style.display="flex",de.style.display="block",te.style.display="none"})),oe.addEventListener("click",(()=>{ie.style.display="flex",de.style.display="block",te.style.display="none"})),se(),de.addEventListener("click",(()=>{if("flex"==le.style.display){let e=document.querySelector("fieldset.new-project>input#title").value,t=document.querySelector("fieldset.new-project>textarea#descr").value,n=F(e,t,[]);W.push(n);let r=JSON.stringify(W);localStorage.setItem("projects",r),X(),Y=document.querySelectorAll(".projects-container>.title"),document.querySelector(".form-container").style.display="none",de.style.display="none",document.querySelector("fieldset.new-project>input#title").value="",document.querySelector("fieldset.new-project>textarea#descr").value="",se(),x(),ee()}else if("flex"==ce.style.display){let e=document.querySelector("fieldset.new-task>select#project").value,t=document.querySelector("fieldset.new-task>select#project").selectedIndex,n=document.querySelector("fieldset.new-task>input#title").value,r=document.querySelector("fieldset.new-task>input#descr").value,o=document.querySelector("fieldset.new-task>input#due-date").value,l=document.querySelector("fieldset.new-task>input#priority").value,c="red";o=o.replaceAll("-","");let i=_(n,r,o,e,l,c);Q.push(i);let d=W[t];d=d.content,d.push(i);let s=JSON.stringify(Q);localStorage.setItem("tasks",s),a(Q),document.querySelector(".form-container").style.display="none",document.querySelector("fieldset.new-task>input#title").value="",document.querySelector("fieldset.new-task>input#descr").value="",de.style.display="none"}else if("flex"==ie.style.display){let e={content:document.querySelector("fieldset.new-note>textarea").value};G.push(e);let t=JSON.stringify(G);localStorage.setItem("notes",t),L(),document.querySelector(".form-container").style.display="none",document.querySelector("fieldset.new-note>textarea").value="",de.style.display="none"}}))})()})();