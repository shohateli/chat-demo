var y=Object.defineProperty;var L=(n,e,o)=>e in n?y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var p=(n,e,o)=>(L(n,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const a="#a16dfd",t={defaultColor:a,backgroundColor:"white",borderColor:"#E8E8E8",questionBackgroundColor:a,questionTextColor:"white",responseBackgroundColor:"#EDEDEF",responseTextColor:"#5F5968",popupBackgroundColor:"white",closePopupColor:"#B3ABC2",dropdownBackground:"#EDEDEF",dropdownBorder:"none",boxMuted:"#A599BA",boxHighlighted:a,inputBackground:"#F6F7F9",inputBorder:"#E8E8E8",inputColor:"#5F5968",scrollbarBackground:"#EDEDEF",scrollbarThumb:"#A599BA"},r={defaultColor:a,backgroundColor:"#272727",borderColor:"#454545",questionBackgroundColor:a,questionTextColor:"white",responseBackgroundColor:"#454545",responseTextColor:"#F4F4F4",popupBackgroundColor:"#383838",closePopupColor:"#8F8F8F",dropdownBackground:"#4A4A4A",dropdownBorder:"1px solid #565656",boxMuted:"#898989",boxHighlighted:"white",dropdownSelectedTextColor:"white",dropdownTextColor:"#C4C4C4",inputBackground:"#454545",inputBorder:"#636363",inputColor:"#C4C4C4",scrollbarBackground:"#4F4F4F",scrollbarThumb:"#8A8592"};window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;const _=`
    .widget__container * {
      box-sizing: border-box;
      font-size: 18px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
    }
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 428px;
        overflow: hidden;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 20px;
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
      background-color: ${t.defaultColor};
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
    background-color: ${t.defaultColor};
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
    font-weight: 600;
    font-size: 16px;
  }

  #send-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 392px;
    height: 46px;
    background: ${t.inputBackground};
    border: 1px solid ${t.inputBorder};
    border-radius: 50px;
    margin: 0 auto 0px;
  }
  #send-form-container {
    position: relative;
    width: 100%;
    background: ${t.backgroundColor};
    padding-top: 20px;
    border-top: 1px solid ${t.borderColor};
    display: flex;
    flex-direction: column;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 30px;
    background: transparent;
    color: ${t.inputColor};
    font-size: 14px;
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
    height: 32px;
    width: 32px;
    margin-right: 5px;
  }
  #box-button {
    height: 30px;
    width: 30px;
    margin-left: 5px;
  }
  .send-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #divider {
    height: 24px;
    width: 0px;
    border: 1px solid #D6D6D6;
  }

  .message-bubble {
    position: relative;
    border-radius: 12px;
    margin: 20px;
    width: 228px;
    min-height: 53px;
  }
  .message-bubble.response {
    background-color: ${t.responseBackgroundColor};
    color: ${t.responseTextColor};
    padding: 14px 20px 15px 40px;
  }
  .message-bubble.request {
    background-color: ${t.questionBackgroundColor};
    color: ${t.questionTextColor};
    padding: 14px 20px 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 51px;
    width: 51px;
    position: absolute;
    left: -22px;
    top: -22px;
    border: 4px solid ${t.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${t.defaultColor};
    border-radius: 50%;
  }
  .timestamp {
    position: absolute;
    bottom: -15px;
    font-weight: 500;
    font-size: 11px;
    color: #b4abc2;
  }
  .timestamp.left { left: 10px; }
  .timestamp.right { right: 10px; }
  .question {
    overflow-wrap: break-word;
    font-size: 14px;
  }

  .chat {
    background-color: ${t.backgroundColor};
    height: 450px;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
  }

  .chat::-webkit-scrollbar {
    width: 15px;
  }
  .chat::-webkit-scrollbar-track {
    background-color: ${t.scrollbarBackground};
  }
  .chat::-webkit-scrollbar-thumb {
    background-color: ${t.scrollbarThumb};
    border-radius: 10px;
    border: 4px solid ${t.scrollbarBackground};
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

  .powered-by {
    height: 46px;
    background-color: ${t.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .powered-by span {
    font-size: 12px;
    color: ${t.responseTextColor};
  }
  #grey-text {
    color: #B3ABC2;
  }


  @media (prefers-color-scheme: dark) {
    .button__container {
      background-color: ${r.defaultColor};
    }

    .widget__header {
      background-color: ${r.defaultColor};
    }

    .message-bubble.response {
      background-color: ${r.responseBackgroundColor};
      color: ${r.responseTextColor};
    }
    .message-bubble.request {
      background-color: ${r.questionBackgroundColor};
      color: ${r.questionTextColor};
    }
    #message-bubble-response-icon {
      border: 4px solid ${r.backgroundColor};
      background-color: ${r.defaultColor};
    }

    #send-form {
      background: ${r.inputBackground};
      border: 1px solid ${r.inputBorder};
    }
    #send-form-container {
      background: ${r.backgroundColor};
      border-top: 1px solid ${r.borderColor};
    }
    #send-form input {
      color: ${r.inputColor};
    }

    .chat {
      background-color: ${r.backgroundColor};
    }

    .chat::-webkit-scrollbar-track {
      background-color: ${r.scrollbarBackground};
    }
    .chat::-webkit-scrollbar-thumb {
      background-color: ${r.scrollbarThumb};
      border: 4px solid ${r.scrollbarBackground};
    }

    .powered-by {
      background-color: ${r.backgroundColor};
    }
    .powered-by span {
      color: ${r.responseTextColor};
    }
  }

`,u=n=>{let e=document.createElement("style");return e.type="text/css",e.innerText=n,document.head.appendChild(e),e},b=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="white"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="165" cy="20" r="20" fill="white"/>
<rect x="156" y="31" width="17" height="32" fill="white"/>
</svg>`,$=`
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`,w=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="#A06DFD"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="165" cy="20" r="20" fill="#A06DFD"/>
<rect x="156" y="31" width="17" height="32" fill="#A06DFD"/>
</svg>`,M=`
<svg class="send-icon" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.003 495.003" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg>
`,B=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="box-icon" d="M17.0005 4.19014C17.0266 4.17598 17.0483 4.15572 17.0634 4.13137C17.0784 4.10701 17.0864 4.07942 17.0864 4.05133C17.0864 4.02325 17.0784 3.99565 17.0634 3.9713C17.0483 3.94695 17.0266 3.92668 17.0005 3.91253L10.3916 0.347434C9.96869 0.119853 9.48859 0 8.99981 0C8.51103 0 8.03093 0.119853 7.60806 0.347434L1.00041 3.91253C0.974284 3.92668 0.952608 3.94695 0.937543 3.9713C0.922478 3.99565 0.914551 4.02325 0.914551 4.05133C0.914551 4.07942 0.922478 4.10701 0.937543 4.13137C0.952608 4.15572 0.974284 4.17598 1.00041 4.19014L8.91349 8.51212C8.94011 8.52668 8.97043 8.53436 9.00132 8.53436C9.03222 8.53436 9.06254 8.52668 9.08916 8.51212L17.0005 4.19014Z" />
<path class="box-icon" d="M0.259619 5.28325C0.233226 5.2691 0.203276 5.26167 0.172799 5.26172C0.142323 5.26176 0.112399 5.26928 0.0860545 5.28351C0.0597101 5.29774 0.0378793 5.31817 0.0227692 5.34274C0.00765922 5.36732 -0.000194053 5.39516 3.64236e-06 5.42346V12.4094C0.00065688 12.7461 0.096221 13.0767 0.277192 13.3684C0.458163 13.6602 0.718234 13.9028 1.03154 14.0723L8.04808 17.9784C8.07438 17.9925 8.10421 18 8.13457 18C8.16494 18 8.19478 17.9926 8.22108 17.9785C8.24739 17.9644 8.26924 17.9441 8.28444 17.9197C8.29965 17.8953 8.30767 17.8676 8.3077 17.8394V9.7342C8.30767 9.70602 8.29965 9.67834 8.28446 9.65394C8.26927 9.62954 8.24744 9.60928 8.22116 9.59519L0.259619 5.28325Z" />
<path class="box-icon" d="M9.69238 9.76218V17.8373C9.69241 17.8655 9.70043 17.8932 9.71564 17.9176C9.73084 17.942 9.75269 17.9622 9.779 17.9763C9.8053 17.9904 9.83514 17.9978 9.8655 17.9978C9.89587 17.9978 9.9257 17.9904 9.952 17.9763L16.9681 14.0701C17.2812 13.9009 17.5411 13.6586 17.7222 13.3672C17.9032 13.0759 17.999 12.7456 18.0001 12.4093V5.42332C18 5.39516 17.9919 5.36752 17.9767 5.34317C17.9614 5.31882 17.9396 5.29861 17.9133 5.28457C17.887 5.27053 17.8572 5.26316 17.8268 5.26318C17.7965 5.26321 17.7667 5.27063 17.7405 5.28471L9.77892 9.62357C9.7527 9.63763 9.73091 9.65783 9.71572 9.68215C9.70054 9.70647 9.69249 9.73406 9.69238 9.76218Z" />
</svg>`,E=`<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero">
  <g class="close-popup-icon" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
    <g transform="scale(5.12,5.12)">
    <path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z">
    </path>
    </g>
  </g>
</svg>`,T=`
<svg class="checkmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
`,H='<svg class="down-icon" height="15" width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>',x=n=>{const e=new Blob([n],{type:"image/svg+xml"});return URL.createObjectURL(e)},D=`
  .send-icon {
    fill: ${t.boxHighlighted};
  }

  .box-icon {
    fill: ${t.boxMuted};
  }
  .box-icon.selected {
    fill: ${t.boxHighlighted};
  }

  .close-popup-icon {
    fill: ${t.closePopupColor}
  }

  .checkmark-icon {
    fill: ${t.boxHighlighted};
  }

  .down-icon {
    fill: ${t.responseTextColor}
  }


  @media (prefers-color-scheme: dark) {
    .send-icon {
      fill: ${r.boxHighlighted};
    }

    .box-icon {
      fill: ${r.boxMuted};
    }
    .box-icon.selected {
      fill: ${r.boxHighlighted};
    }

    .close-popup-icon {
      fill: ${r.closePopupColor}
    }

    .checkmark-icon {
      fill: ${r.boxHighlighted};
    }

    .down-icon {
      fill: ${r.responseTextColor}
    }
  }
`,S=()=>{document.getElementById("send-form").addEventListener("submit",e=>{e.preventDefault();const o=h(new Date),d=document.getElementById("send-input");if(!d.value)return;const i=document.getElementById("chat");i.innerHTML+=F(d.value,o);let s="...";const l=`${Date.now()}`;i.innerHTML+=C(s),I(d.value).then(c=>{const f=h(new Date),v=document.getElementById(`time${l}`);v.innerHTML=f;const k=document.getElementById(l);k.innerHTML=c}).catch(c=>alert(c)),d.value=""})},I=n=>new Promise((o,d)=>{setTimeout(()=>{o(n)},1e3)}),A=()=>{const n=document.querySelector(".chat"),e=new MutationObserver(O),o={childList:!0};e.observe(n,o)};function O(){chat.scrollTop=chat.scrollHeight}function h(n){var e=n.getHours(),o=n.getMinutes(),d=e>=12?"pm":"am";e=e%12,e=e||12,o=o<10?"0"+o:o;var i=e+":"+o+" "+d;return i}const C=(n,e=`${Date.now()}`)=>`
    <div class="message-bubble response">
      <div id="message-bubble-response-icon">
        <img width="25px" height="25px" src="${x(b)}">
      </div>

      <span id=${e} class="question">
        ${n}
      </span>

      <span class="timestamp left" id="time${e}">
          ${e==="start"?h(new Date):""}
      </span>
    </div>`,F=(n,e="")=>`
    <div class="message-bubble request">
      <span class="question">
        ${n}
      </span>

      <span class="timestamp right">${e}</span>
    </div>
    <div style="clear: right;"></div>
  `,j=`
<div class="chat-container">
  <header class="widget__header">
    <span class="button__container" id="widget__header__icon">${w}</span>
    <h3>Majic Chatbot</h3>
  </header>

  <div class="chat" id="chat">
    ${C("How can I help?","start")}
  </div>

  <div class="chat-top-bottom" id="send-form-container">

    <form id="send-form">
      <input required id="send-input" placeholder="Type a message" autocomplete="off">

      <div class="send-buttons-container">
        <button type="submit" id="send-button" class="icon-button-container">
          ${M}
        </button>

        ${`
          <span id="divider"></span>
          <button type="button" id="box-button" class="icon-button-container">
            ${B}
          </button>
        `}
      </div>
    </form>

    <div class="powered-by">
      <span id="grey-text">Powered by </span>&nbsp;
      <img width="20px" src="${x(w)}">
      &nbsp;<span> Majic Chatbot<span/>
    </div>
  </div>
</div>
`,V=`
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
    color: ${t.boxHighlighted};

    display: flex;
    background-color: ${t.dropdownBackground};
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
    color: ${t.dropdownTextColor};
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${t.dropdownSelectedTextColor};
  }
  .dropdown-item h4 {
    margin: 0px;
    padding: 0px;
    font-weight: 400;
  }

  .dropdown-data::-webkit-scrollbar {
    background-color: ${t.dropdownBackgroundColor};
    border-radius: 12px;
    width: 7px;
  }
  .dropdown-data::-webkit-scrollbar-thumb {
    background-color: ${t.boxHighlighted};
    border-radius: 12px;
    border: 2px solid ${t.dropdownBackgroundColor};
  }

  @media (prefers-color-scheme: dark) {
    .dropdown-data {
      color: ${r.boxHighlighted};
      background-color: ${r.dropdownBackground};
    }

    .dropdown-item {
      color: ${r.dropdownTextColor};
    }
    .dropdown-item.selected {
      color: ${r.dropdownSelectedTextColor};
    }

    .dropdown-data::-webkit-scrollbar {
      background-color: ${r.dropdownBackgroundColor};
      border-radius: 12px;
      width: 7px;
    }
    .dropdown-data::-webkit-scrollbar-thumb {
      background-color: ${r.boxHighlighted};
      border-radius: 12px;
      border: 2px solid ${r.dropdownBackgroundColor};
    }
  }
`;class z{constructor(e,o,d=null){this.items=e,this.current=d,this.container=document.getElementById(o),this.current||(this.current=e[0]),this.show(),u(V)}show(){const e=document.createElement("div");e.innerHTML=this.html(),e.classList.add("dropdown-container"),e.addEventListener("click",o=>{this.justChanged?this.justChanged=!1:this.expand()}),this.container.appendChild(e)}html(){return`<div class="dropdown">
      <div class="dropdown-data closed">
        <h4>${this.current}</h4>
        ${H}
      </div>
    </div>
    `}expand(){const e=document.getElementsByClassName("dropdown-data")[0];e.classList.remove("closed"),e.classList.add("open");const o=this.items.map(s=>`<div class="dropdown-item${s===this.current?" selected":""}">
        <h4>${s}</h4>
        <span>
          ${s===this.current?T:""}
        </span>
      </div>`);e.innerHTML=o.join(""),document.getElementsByClassName("switch-model-container")[0].classList.add("expand"),document.querySelectorAll(".dropdown-item").forEach(s=>{s.addEventListener("click",l=>{const c=s.querySelector("h4").textContent;this.current=c,this.close()})})}close(){document.getElementsByClassName("switch-model-container")[0].classList.remove("expand");const o=document.getElementsByClassName("dropdown-container")[0];this.container.removeChild(o),this.justChanged=!0,this.show(),document.getElementsByClassName("switch-model-container")[0].classList.remove("active"),g("close")}}const m=["model1","model2","model3","model4"],N=`<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${E}</div>
  </div>
</div>
<div class="arrow-down"/>
`,q=`
  .switch-model-container {
    display: none;
    position: absolute;
    top: -108px;
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
    background-color: ${t.popupBackgroundColor};
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
    color: ${t.responseTextColor};
  }

  #close-switch-model {
    cursor: pointer;
  }

  .arrow-down {
    position: absolute;
    right: 44px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid ${t.popupBackgroundColor};
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

  @media (prefers-color-scheme: dark) {
    .switch-model {
      background-color: ${r.popupBackgroundColor};
    }

    .switch-model-header h4 {
      color: ${r.responseTextColor};
    }

    .arrow-down {
      border-top: 15px solid ${r.popupBackgroundColor};
    }
  }
`;class P{constructor(){this.switchModelContainer=document.createElement("div"),this.switchModelContainer.innerHTML=N,this.switchModelContainer.classList.add("switch-model-container"),this.showSwitchModel=!1,this.current=m[0]}addSwitchModel(){document.getElementById("send-form-container").prepend(this.switchModelContainer),new z(m,"switch-model",this.current),u(q)}setUpListeners(){this.addSwitchModel();const e=document.getElementById("box-button"),o=document.getElementById("close-switch-model");e.addEventListener("click",d=>this.toggleShowSwitchModel()),o.addEventListener("click",d=>this.toggleShowSwitchModel(!0))}toggleShowSwitchModel(e=!1){this.showSwitchModel=!this.showSwitchModel;const o=document.getElementsByClassName("switch-model-container")[0];this.showSwitchModel&&!e||!o.classList.contains("active")?(o.classList.add("active"),g("open")):(o.classList.remove("active"),g("close"))}}function g(n="close"){const e=document.getElementsByClassName("box-icon");Array.from(e).forEach(o=>{n==="open"?o.classList.add("selected"):o.classList.remove("selected")})}class Z{constructor(e="bottom-right"){p(this,"position","");p(this,"open",!1);p(this,"widgetContent",null);this.position=this.getPosition(e),this.open=!1,this.switchModel=new P,this.initialize(),this.injectStyles(),this.switchModel.setUpListeners(),S(),A()}getPosition(e){const[o,d]=e.split("-");return{[o]:"30px",[d]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(s=>e.style[s]=this.position[s]),document.body.appendChild(e);const o=document.createElement("button");o.classList.add("button__container");const d=document.createElement("span");d.innerHTML=b,d.classList.add("widget__icon"),this.widgetIcon=d;const i=document.createElement("span");i.innerHTML=$,i.classList.add("widget__icon","widget__hidden"),this.closeIcon=i,o.appendChild(this.widgetIcon),o.appendChild(this.closeIcon),o.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(o)}createWidgetContent(){this.widgetContainer.innerHTML=j}injectStyles(){const e=document.createElement("style");e.innerHTML=_.replace(/^\s+|\n/gm,""),document.head.appendChild(e),u(D)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function R(){return new Z}R();
