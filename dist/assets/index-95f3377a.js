var x=Object.defineProperty;var C=(o,e,t)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>(C(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const l="#a16dfd",p=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="white"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="165" cy="20" r="20" fill="white"/>
<rect x="156" y="31" width="17" height="32" fill="white"/>
</svg>`,b=`
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`,v=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="#A06DFD"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="165" cy="20" r="20" fill="#A06DFD"/>
<rect x="156" y="31" width="17" height="32" fill="#A06DFD"/>
</svg>`,L=`
  <svg height="40" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z" fill="#a16dfd"></path> </g></svg>
`,y=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0005 4.19014C17.0266 4.17598 17.0483 4.15572 17.0634 4.13137C17.0784 4.10701 17.0864 4.07942 17.0864 4.05133C17.0864 4.02325 17.0784 3.99565 17.0634 3.9713C17.0483 3.94695 17.0266 3.92668 17.0005 3.91253L10.3916 0.347434C9.96869 0.119853 9.48859 0 8.99981 0C8.51103 0 8.03093 0.119853 7.60806 0.347434L1.00041 3.91253C0.974284 3.92668 0.952608 3.94695 0.937543 3.9713C0.922478 3.99565 0.914551 4.02325 0.914551 4.05133C0.914551 4.07942 0.922478 4.10701 0.937543 4.13137C0.952608 4.15572 0.974284 4.17598 1.00041 4.19014L8.91349 8.51212C8.94011 8.52668 8.97043 8.53436 9.00132 8.53436C9.03222 8.53436 9.06254 8.52668 9.08916 8.51212L17.0005 4.19014Z" fill="#A599BA"/>
<path d="M0.259619 5.28325C0.233226 5.2691 0.203276 5.26167 0.172799 5.26172C0.142323 5.26176 0.112399 5.26928 0.0860545 5.28351C0.0597101 5.29774 0.0378793 5.31817 0.0227692 5.34274C0.00765922 5.36732 -0.000194053 5.39516 3.64236e-06 5.42346V12.4094C0.00065688 12.7461 0.096221 13.0767 0.277192 13.3684C0.458163 13.6602 0.718234 13.9028 1.03154 14.0723L8.04808 17.9784C8.07438 17.9925 8.10421 18 8.13457 18C8.16494 18 8.19478 17.9926 8.22108 17.9785C8.24739 17.9644 8.26924 17.9441 8.28444 17.9197C8.29965 17.8953 8.30767 17.8676 8.3077 17.8394V9.7342C8.30767 9.70602 8.29965 9.67834 8.28446 9.65394C8.26927 9.62954 8.24744 9.60928 8.22116 9.59519L0.259619 5.28325Z" fill="#A599BA"/>
<path d="M9.69238 9.76218V17.8373C9.69241 17.8655 9.70043 17.8932 9.71564 17.9176C9.73084 17.942 9.75269 17.9622 9.779 17.9763C9.8053 17.9904 9.83514 17.9978 9.8655 17.9978C9.89587 17.9978 9.9257 17.9904 9.952 17.9763L16.9681 14.0701C17.2812 13.9009 17.5411 13.6586 17.7222 13.3672C17.9032 13.0759 17.999 12.7456 18.0001 12.4093V5.42332C18 5.39516 17.9919 5.36752 17.9767 5.34317C17.9614 5.31882 17.9396 5.29861 17.9133 5.28457C17.887 5.27053 17.8572 5.26316 17.8268 5.26318C17.7965 5.26321 17.7667 5.27063 17.7405 5.28471L9.77892 9.62357C9.7527 9.63763 9.73091 9.65783 9.71572 9.68215C9.70054 9.70647 9.69249 9.73406 9.69238 9.76218Z" fill="#A599BA"/>
</svg>`,_=`
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

`,m=(o,e=`${Date.now()}`)=>`
    <div class="message-bubble response">
      <div class="button__container" id="message-bubble-response-icon">
        ${p}
      </div>

      <span id=${e} class="question">
        ${o}
      </span>

      <span class="timestamp left" id="time${e}"></span>
    </div>`,M=(o,e="")=>`
    <div class="message-bubble request">
      <span class="question">
        ${o}
      </span>

      <span class="timestamp right">${e}</span>
    </div>
    <div style="clear: right;"></div>
  `,w=o=>{let e=document.createElement("style");return e.type="text/css",e.innerText=o,document.head.appendChild(e),e},k=()=>{document.getElementById("send-form").addEventListener("submit",e=>{e.preventDefault();const t=a(new Date),s=document.getElementById("send-input");if(!s.value)return;const i=document.getElementById("chat");i.innerHTML+=M(s.value,t);let n="...";const r=`${Date.now()}`;i.innerHTML+=m(n),E(s.value).then(d=>{const g=a(new Date),u=document.getElementById(`time${r}`);u.innerHTML=g;const f=document.getElementById(r);f.innerHTML=d}).catch(d=>alert(d)),s.value=""})},E=o=>new Promise((t,s)=>{setTimeout(()=>{t(o)},1e3)}),S=()=>{const o=document.querySelector(".chat"),e=new MutationObserver(H),t={childList:!0};e.observe(o,t)};function H(){chat.scrollTop=chat.scrollHeight}function a(o){var e=o.getHours(),t=o.getMinutes(),s=e>=12?"pm":"am";e=e%12,e=e||12,t=t<10?"0"+t:t;var i=e+":"+t+" "+s;return i}const B=`
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
    color: ${l};

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
    color: ${l};
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
`;class I{constructor(e,t,s=null){this.items=e,this.current=s,this.container=document.getElementById(t),this.current||(this.current=e[0]),this.show(),w(B)}show(){const e=document.createElement("div");e.innerHTML=this.html(),e.classList.add("dropdown-container"),e.addEventListener("click",t=>{this.justChanged?this.justChanged=!1:this.expand()}),this.container.appendChild(e)}html(){return`<div class="dropdown">
      <div class="dropdown-data closed">
        <h4>${this.current}</h4>
        <svg fill="black" height="15" width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
      </div>
    </div>`}expand(){const e=document.getElementsByClassName("dropdown-data")[0];e.classList.remove("closed"),e.classList.add("open");const t=this.items.map(n=>`<div class="dropdown-item${n===this.current?" selected":""}">
        <h4>${n}</h4>
        <span>
          ${n===this.current?`
          <svg fill="${l}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
          `:""}
        </span>
      </div>`);e.innerHTML=t.join(""),document.getElementsByClassName("switch-model-container")[0].classList.add("expand"),document.querySelectorAll(".dropdown-item").forEach(n=>{n.addEventListener("click",r=>{const d=n.querySelector("h4").textContent;this.current=d,this.close()})})}close(){document.getElementsByClassName("switch-model-container")[0].classList.remove("expand");const t=document.getElementsByClassName("dropdown-container")[0];this.container.removeChild(t),this.justChanged=!0,this.show(),document.getElementsByClassName("switch-model-container")[0].classList.remove("active")}}const h=["model1","model2","model3","model4"],D='<svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="#b1a8c0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z"></path></g></g></svg>',T=`<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${D}</div>
  </div>

</div>`,A=`
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
`;class O{constructor(){this.switchModelContainer=document.createElement("div"),this.switchModelContainer.innerHTML=T,this.switchModelContainer.classList.add("switch-model-container"),this.showSwitchModel=!1,this.current=h[0]}addSwitchModel(){document.getElementById("send-form-container").prepend(this.switchModelContainer),new I(h,"switch-model",this.current),w(A)}setUpListeners(){this.addSwitchModel();const e=document.getElementById("box-button"),t=document.getElementById("close-switch-model");e.addEventListener("click",s=>this.toggleShowSwitchModel()),t.addEventListener("click",s=>this.toggleShowSwitchModel(!0))}toggleShowSwitchModel(e=!1){this.showSwitchModel=!this.showSwitchModel;const t=document.getElementsByClassName("switch-model-container")[0];this.showSwitchModel&&!e||!t.classList.contains("active")?t.classList.add("active"):t.classList.remove("active")}}class V{constructor(e="bottom-right"){c(this,"position","");c(this,"open",!1);c(this,"widgetContent",null);this.position=this.getPosition(e),this.open=!1,this.switchModel=new O,this.initialize(),this.injectStyles(),this.switchModel.setUpListeners(),k(),S()}getPosition(e){const[t,s]=e.split("-");return{[t]:"30px",[s]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(n=>e.style[n]=this.position[n]),document.body.appendChild(e);const t=document.createElement("button");t.classList.add("button__container");const s=document.createElement("span");s.innerHTML=p,s.classList.add("widget__icon"),this.widgetIcon=s;const i=document.createElement("span");i.innerHTML=b,i.classList.add("widget__icon","widget__hidden"),this.closeIcon=i,t.appendChild(this.widgetIcon),t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(t)}createWidgetContent(){this.widgetContainer.innerHTML=`
        <div class="chat-container">
          <header class="widget__header">
            <span class="button__container" id="widget__header__icon">${v}</span>
            <h3>Majic Chatbot</h3>
          </header>

          <div class="chat" id="chat">
            ${m("How can I help?","start")}
          </div>

          <div class="chat-top-bottom" id="send-form-container">

            <form id="send-form">
              <input required id="send-input" placeholder="Type a message">

              <div class="send-buttons-container">
                <button type="button" id="box-button" class="icon-button-container">${y}</button>
                <button type="submit" id="send-button" class="icon-button-container">${L}</button>
              </div>
            </form>
          </div>
        </div>
    `}injectStyles(){const e=document.createElement("style");e.innerHTML=_.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function j(){return new V}j();
