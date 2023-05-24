var f=Object.defineProperty;var x=(i,e,t)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>(x(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const a="#a16dfd",p=`
    <img src="./media/chatbot_logo_white.svg" width="32" height="32">
`,v=`
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`,_=`
  <img src="./media/chatbot_logo_purple.svg" width="32" height="32">
`,L=`
  <svg height="40" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z" fill="#a16dfd"></path> </g></svg>
`,C=`
  <img src="./media/cube_icon.svg" width="20" height="20">
`,y=`
    .widget__container * {
        box-sizing: border-box;
        font-size: 18px;
    }
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 425px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 12px;
        box-sizing: border-box;
    }
    .widget__icon {
      cursor: pointer;
      width: 60%;
      position: absolute;
      margin: 0 auto;
      transition: transform .3s ease;
  }
  .widget__hidden {
      transform: scale(0);
  }
  .button__container {
      border: none;
      background-color: #a16dfd;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .widget__container.hidden {
      max-height: 0px;
  }

  .widget__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    background-color: #a16dfd;
  }
  #widget__header__icon {
    background-color: white;
    width: 50px;
    height: 50px;
  }
  .widget__header h3 {
    color: white;
    margin-top: 2px;
    margin-left: 10px;
  }

  #send-form {
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
    background-color: white;
    border-top: 1px solid #ededef;
  }
  #send-form-container {
    position: relative;
  }
  #send-form input {
    border: none;
    width: 265px;
  }
  #send-form input:focus {
    outline: none;
  }
  .icon-button-container {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #send-button {
    height: 50px;
    width: 50px;
  }
  #box-button {
    height: 30;
    width: 30px;
  }
  .send-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .message-bubble {
    position: relative;
    border-radius: 12px;
    max-width: 250px;
    font-size: 20px;
    margin: 20px;
  }
  .message-bubble.response {
    background-color: #ededef;
    color: #333;
    padding: 15px 0px 15px 40px;
  }
  .message-bubble.request {
    background-color: #9f69fd;
    color: white;
    padding: 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 60px;
    width: 60px;
    position: absolute;
    left: -25px;
    top: -25px;
    border: 5px solid white;
  }
  .timestamp {
    position: absolute;
    bottom: -20px;
    font-size: 14px;
    color: #b4abc2;
  }
  .timestamp.left { left: 10px; }
  .timestamp.right { right: 10px; }
  .question {
    overflow-wrap: break-word;
  }

  .chat {
    background-color: white;
    height: 450px;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  .scale-up-bottom{
    animation:scale-up-bottom 0.4s;
  }
  @keyframes scale-up-bottom{
    0%{
      transform:scale(.5);
      transform-origin:center bottom;
    }
    100%{
      transform:scale(1);
      transform-origin:center bottom;
    }
  }

`,m=(i,e=`${Date.now()}`)=>`
    <div class="message-bubble response">
      <div class="button__container" id="message-bubble-response-icon">
        ${p}
      </div>

      <span id=${e} class="question">
        ${i}
      </span>

      <span class="timestamp left" id="time${e}"></span>
    </div>`,M=(i,e="")=>`
    <div class="message-bubble request">
      <span class="question">
        ${i}
      </span>

      <span class="timestamp right">${e}</span>
    </div>
    <div style="clear: right;"></div>
  `,g=i=>{let e=document.createElement("style");return e.type="text/css",e.innerText=i,document.head.appendChild(e),e},E=()=>{document.getElementById("send-form").addEventListener("submit",e=>{e.preventDefault();const t=l(new Date),s=document.getElementById("send-input");if(!s.value)return;const o=document.getElementById("chat");o.innerHTML+=M(s.value,t);let n="...";const r=`${Date.now()}`;o.innerHTML+=m(n),S(s.value).then(d=>{const u=l(new Date),w=document.getElementById(`time${r}`);w.innerHTML=u;const b=document.getElementById(r);b.innerHTML=d}).catch(d=>alert(d)),s.value=""})},S=i=>new Promise((t,s)=>{setTimeout(()=>{t(i)},1e3)}),k=()=>{const i=document.querySelector(".chat"),e=new MutationObserver(I),t={childList:!0};e.observe(i,t)};function I(){chat.scrollTop=chat.scrollHeight}function l(i){var e=i.getHours(),t=i.getMinutes(),s=e>=12?"pm":"am";e=e%12,e=e||12,t=t<10?"0"+t:t;var o=e+":"+t+" "+s;return o}const T=`
  .dropdown-container {
    margin-top: 10px;
    width: 100%;
  }

  .dropdown {
    width: 100%;
    border-radius: 12px;
  }

  .dropdown-data {
    width: 100%;
    color: ${a};

    display: flex;
    background-color: #ededef;
    border-radius: 12px;
  }

  .dropdown-data.closed {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding: 0 20px;
    cursor: pointer;
  }

  .dropdown-data.open {
    flex-direction: column;
    height: 130px;
    overflow-y: scroll;
    padding: 5px 0px;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: #706c79;
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${a};
  }
  .dropdown-item h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 400;
  }

  .dropdown-data::-webkit-scrollbar {
    background-color: #ededef;
    border-radius: 12px;
  }
  .dropdown-data::-webkit-scrollbar-thumb {
    background-color: #9f69fd;
    border-radius: 12px;
    border: 2px solid #ededef;
  }
`;class B{constructor(e,t,s=null){this.items=e,this.current=s,this.container=document.getElementById(t),this.current||(this.current=e[0]),this.show(),g(T)}show(){const e=document.createElement("div");e.innerHTML=this.html(),e.classList.add("dropdown-container"),e.addEventListener("click",t=>{this.justChanged?this.justChanged=!1:this.expand()}),this.container.appendChild(e)}html(){return`<div class="dropdown">
      <div class="dropdown-data closed">
        <h4>${this.current}</h4>
        <svg fill="black" height="15" width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
      </div>
    </div>`}expand(){const e=document.getElementsByClassName("dropdown-data")[0];e.classList.remove("closed"),e.classList.add("open");const t=this.items.map(n=>`<div class="dropdown-item${n===this.current?" selected":""}">
        <h4>${n}</h4>
        <span>
          ${n===this.current?`
          <svg fill="${a}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
          `:""}
        </span>
      </div>`);e.innerHTML=t.join(""),document.getElementsByClassName("switch-model-container")[0].classList.add("expand"),document.querySelectorAll(".dropdown-item").forEach(n=>{n.addEventListener("click",r=>{const d=n.querySelector("h4").textContent;this.current=d,this.close()})})}close(){document.getElementsByClassName("switch-model-container")[0].classList.remove("expand");const t=document.getElementsByClassName("dropdown-container")[0];this.container.removeChild(t),this.justChanged=!0,this.show(),document.getElementsByClassName("switch-model-container")[0].classList.remove("active")}}const h=["model1","model2","model3","model4"],O=`<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model"><img src="./media/close.svg" height="32" width="32"></div>
  </div>

</div>`,j=`
  .switch-model-container {
    display: none;
    position: absolute;
    top: -120px;
    height: 130px;
    width: 100%;
  }

  .switch-model-container.expand {
    top: -190px;
    height: 200px;
  }

  .switch-model-container.active {
    display: flex;
    animation:scale-up-bottom 0.2s;
  }

  .switch-model {
    width: 95%;
    margin: 0 auto;
    border-radius: 12px;
    padding: 20px 20px;
    background-color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .switch-model-header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .switch-model-header h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 500;
    margin-left: 10px;
    color: #5e5969;
  }

  #close-switch-model {
    cursor: pointer;
  }

  @keyframes scale-up-bottom{
    0%{
      transform:scale(.5);
      transform-origin:center bottom;
    }
    100%{
      transform:scale(1);
      transform-origin:center bottom;
    }
  }
`;class ${constructor(){this.switchModelContainer=document.createElement("div"),this.switchModelContainer.innerHTML=O,this.switchModelContainer.classList.add("switch-model-container"),this.showSwitchModel=!1,this.current=h[0]}addSwitchModel(){document.getElementById("send-form-container").prepend(this.switchModelContainer),new B(h,"switch-model",this.current),g(j)}setUpListeners(){this.addSwitchModel();const e=document.getElementById("box-button"),t=document.getElementById("close-switch-model");e.addEventListener("click",s=>this.toggleShowSwitchModel()),t.addEventListener("click",s=>this.toggleShowSwitchModel(!0))}toggleShowSwitchModel(e=!1){this.showSwitchModel=!this.showSwitchModel;const t=document.getElementsByClassName("switch-model-container")[0];this.showSwitchModel&&!e||!t.classList.contains("active")?t.classList.add("active"):t.classList.remove("active")}}class H{constructor(e="bottom-right"){c(this,"position","");c(this,"open",!1);c(this,"widgetContent",null);this.position=this.getPosition(e),this.open=!1,this.switchModel=new $,this.initialize(),this.injectStyles(),this.switchModel.setUpListeners(),E(),k()}getPosition(e){const[t,s]=e.split("-");return{[t]:"30px",[s]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(n=>e.style[n]=this.position[n]),document.body.appendChild(e);const t=document.createElement("button");t.classList.add("button__container");const s=document.createElement("span");s.innerHTML=p,s.classList.add("widget__icon"),this.widgetIcon=s;const o=document.createElement("span");o.innerHTML=v,o.classList.add("widget__icon","widget__hidden"),this.closeIcon=o,t.appendChild(this.widgetIcon),t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(t)}createWidgetContent(){this.widgetContainer.innerHTML=`
        <div class="chat-container">
          <header class="widget__header">
            <span class="button__container" id="widget__header__icon">${_}</span>
            <h3>Majic Chatbot</h3>
          </header>

          <div class="chat" id="chat">
            ${m("How can I help?","start")}
          </div>

          <div class="chat-top-bottom" id="send-form-container">

            <form id="send-form">
              <input required id="send-input" placeholder="Type a message">

              <div class="send-buttons-container">
                <button type="button" id="box-button" class="icon-button-container">${C}</button>
                <button type="submit" id="send-button" class="icon-button-container">${L}</button>
              </div>
            </form>
          </div>
        </div>
    `}injectStyles(){const e=document.createElement("style");e.innerHTML=y.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function N(){return new H}N();
