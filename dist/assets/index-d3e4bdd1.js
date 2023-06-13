var M=Object.defineProperty;var $=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var h=(t,e,o)=>($(t,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}})();const E=`
  <div class="darkmode-toggle-container">
    <input type="checkbox" id="darkmode-toggle"/>
    <label for="darkmode-toggle" id="darkmode-toggle-label">
      <svg version="1.1" class="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 499 496" style="enable-background:new 0 0 496 496;" xml:space="preserve">
        <rect x="152.994" y="58.921" transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)" width="40.001" height="16"/>
        <rect x="46.9" y="164.979" transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)" width="40.001" height="16"/>
        <rect x="46.947" y="315.048" transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)" width="40.001" height="16"/>
          <rect x="164.966" y="409.112" transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)" width="16" height="39.999"/>
          <rect x="303.031" y="421.036" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)" width="40.001" height="16"/>
          <rect x="409.088" y="315.018" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)" width="40.001" height="16"/>
          <rect x="409.054" y="165.011" transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)" width="40.001" height="16"/>
        <rect x="315.001" y="46.895" transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)" width="16" height="39.999"/>
        <path d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
          c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"/>
        <rect x="240" width="16" height="72"/>
        <rect x="62.097" y="90.096" transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)" width="71.999" height="16"/>
        <rect y="240" width="72" height="16"/>
          <rect x="90.091" y="361.915" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)" width="16" height="71.999"/>
        <rect x="240" y="424" width="16" height="72"/>
          <rect x="361.881" y="389.915" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)" width="71.999" height="16"/>
        <rect x="424" y="240" width="72" height="16"/>
        <rect x="389.911" y="62.091" transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)" width="16" height="71.999"/>
      </svg>
      <svg version="1.1" class="moon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 49.739 49.739" style="enable-background:new 0 0 49.739 49.739;" xml:space="preserve">
        <path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
        c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
        c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
        C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
        c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
        c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"/>
      </svg>
    </label>
  </div>
`,k=[".button__container",".widget__header",".message-bubble","#message-bubble-response-icon","#send-form","#send-form input","#send-form-container",".chat",".powered-by",".powered-by span",".send-icon",".box-icon",".box-icon.selected",".close-popup-icon",".checkmark-icon",".down-icon",".switch-model",".switch-model-header h4",".arrow-down",".dropdown-data",".dropdown-item",".dropdown-item.selected"];function B(){const t=document.getElementById("darkmode-toggle");t.addEventListener("change",()=>{t.checked?u():m()});const e=window.matchMedia("(prefers-color-scheme: dark)");e.addEventListener("change",()=>{e.matches?(t.checked=!0,u()):(t.checked=!1,m())})}const u=()=>{k.forEach(t=>{try{const e=document.querySelectorAll(t);Array.from(e).forEach(o=>o.classList.add("dark"))}catch{}})},m=()=>{k.forEach(t=>{try{const e=document.querySelectorAll(t);Array.from(e).forEach(o=>o.classList.remove("dark"))}catch{}})},a="#a16dfd",r={defaultColor:a,backgroundColor:"white",borderColor:"#E8E8E8",questionBackgroundColor:a,questionTextColor:"white",responseBackgroundColor:"#EDEDEF",responseTextColor:"#5F5968",popupBackgroundColor:"white",closePopupColor:"#B3ABC2",dropdownBackground:"#EDEDEF",dropdownBorder:"none",dropdownSelectedTextColor:a,dropdownTextColor:"#5F5968",boxMuted:"#A599BA",boxHighlighted:a,inputBackground:"#F6F7F9",inputBorder:"#E8E8E8",inputColor:"#5F5968",scrollbarBackground:"#EDEDEF",scrollbarThumb:"#A599BA"},i={defaultColor:a,backgroundColor:"#272727",borderColor:"#454545",questionBackgroundColor:a,questionTextColor:"white",responseBackgroundColor:"#454545",responseTextColor:"#F4F4F4",popupBackgroundColor:"#383838",closePopupColor:"#8F8F8F",dropdownBackground:"#4A4A4A",dropdownBorder:"1px solid #565656",boxMuted:"#898989",boxHighlighted:"white",dropdownSelectedTextColor:"white",dropdownTextColor:"#C4C4C4",inputBackground:"#454545",inputBorder:"#636363",inputColor:"#C4C4C4",scrollbarBackground:"#4F4F4F",scrollbarThumb:"#8A8592"};window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;const T=()=>{document.getElementById("send-form").addEventListener("submit",e=>{e.preventDefault();const o=w(new Date),n=document.getElementById("send-input");if(!n.value)return;const s=document.getElementById("chat");s.innerHTML+=I(n.value,o);let d="...";const c=`${Date.now()}`;s.innerHTML+=v(d),D(n.value).then(p=>{const y=w(new Date),L=document.getElementById(`time${c}`);L.innerHTML=y;const _=document.getElementById(c);_.innerHTML=p}).catch(p=>alert(p)),n.value=""})},D=t=>new Promise((o,n)=>{setTimeout(()=>{o(t)},1e3)}),S=()=>{const t=document.querySelector(".chat"),e=new MutationObserver(H),o={childList:!0};e.observe(t,o)};function H(){chat.scrollTop=chat.scrollHeight}function w(t){var e=t.getHours(),o=t.getMinutes(),n=e>=12?"PM":"AM";e=e%12,e=e||12,o=o<10?"0"+o:o;var s=e+":"+o+" "+n;return s}const v=(t,e=`${Date.now()}`)=>`
    <div class="message-bubble response ${l()}">
      <div id="message-bubble-response-icon" class="${l()}">
        <img width="70%" height="70%" src="${x(f)}">
      </div>

      <span id=${e} class="question">
        ${t}
      </span>

      <span class="timestamp left" id="time${e}">
          ${e==="start"?w(new Date):""}
      </span>
    </div>`,I=(t,e="")=>`
    <div class="message-bubble request ${l()}">
      <span class="question">
        ${t}
      </span>

      <span class="timestamp right">${e}</span>
    </div>
    <div style="clear: right;"></div>
  `,l=()=>{const t=document.getElementById("darkmode-toggle");return t!=null&&t.checked?"dark":""},f=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="white"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="165" cy="20" r="20" fill="white"/>
<rect x="156" y="31" width="17" height="32" fill="white"/>
</svg>`,A=`
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`,O=`<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="#A06DFD"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="165" cy="20" r="20" fill="#A06DFD"/>
<rect x="156" y="31" width="17" height="32" fill="#A06DFD"/>
</svg>`,F=`<svg class="send-icon" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.003 495.003" xml:space="preserve">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g id="XMLID_51_">
      <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path>
      <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path>
    </g>
  </g>
</svg>`,j=`<svg width="20px" height="20px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="box-icon" d="M17.0005 4.19014C17.0266 4.17598 17.0483 4.15572 17.0634 4.13137C17.0784 4.10701 17.0864 4.07942 17.0864 4.05133C17.0864 4.02325 17.0784 3.99565 17.0634 3.9713C17.0483 3.94695 17.0266 3.92668 17.0005 3.91253L10.3916 0.347434C9.96869 0.119853 9.48859 0 8.99981 0C8.51103 0 8.03093 0.119853 7.60806 0.347434L1.00041 3.91253C0.974284 3.92668 0.952608 3.94695 0.937543 3.9713C0.922478 3.99565 0.914551 4.02325 0.914551 4.05133C0.914551 4.07942 0.922478 4.10701 0.937543 4.13137C0.952608 4.15572 0.974284 4.17598 1.00041 4.19014L8.91349 8.51212C8.94011 8.52668 8.97043 8.53436 9.00132 8.53436C9.03222 8.53436 9.06254 8.52668 9.08916 8.51212L17.0005 4.19014Z" />
<path class="box-icon" d="M0.259619 5.28325C0.233226 5.2691 0.203276 5.26167 0.172799 5.26172C0.142323 5.26176 0.112399 5.26928 0.0860545 5.28351C0.0597101 5.29774 0.0378793 5.31817 0.0227692 5.34274C0.00765922 5.36732 -0.000194053 5.39516 3.64236e-06 5.42346V12.4094C0.00065688 12.7461 0.096221 13.0767 0.277192 13.3684C0.458163 13.6602 0.718234 13.9028 1.03154 14.0723L8.04808 17.9784C8.07438 17.9925 8.10421 18 8.13457 18C8.16494 18 8.19478 17.9926 8.22108 17.9785C8.24739 17.9644 8.26924 17.9441 8.28444 17.9197C8.29965 17.8953 8.30767 17.8676 8.3077 17.8394V9.7342C8.30767 9.70602 8.29965 9.67834 8.28446 9.65394C8.26927 9.62954 8.24744 9.60928 8.22116 9.59519L0.259619 5.28325Z" />
<path class="box-icon" d="M9.69238 9.76218V17.8373C9.69241 17.8655 9.70043 17.8932 9.71564 17.9176C9.73084 17.942 9.75269 17.9622 9.779 17.9763C9.8053 17.9904 9.83514 17.9978 9.8655 17.9978C9.89587 17.9978 9.9257 17.9904 9.952 17.9763L16.9681 14.0701C17.2812 13.9009 17.5411 13.6586 17.7222 13.3672C17.9032 13.0759 17.999 12.7456 18.0001 12.4093V5.42332C18 5.39516 17.9919 5.36752 17.9767 5.34317C17.9614 5.31882 17.9396 5.29861 17.9133 5.28457C17.887 5.27053 17.8572 5.26316 17.8268 5.26318C17.7965 5.26321 17.7667 5.27063 17.7405 5.28471L9.77892 9.62357C9.7527 9.63763 9.73091 9.65783 9.71572 9.68215C9.70054 9.70647 9.69249 9.73406 9.69238 9.76218Z" />
</svg>`,z=`<svg width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero">
  <g class="close-popup-icon" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
    <g transform="scale(5.12,5.12)">
    <path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z">
    </path>
    </g>
  </g>
</svg>`,V=()=>`
<svg class="checkmark-icon ${l()}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="14px" height="14px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
`,N=()=>`<svg class="down-icon ${l()}" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>`,x=t=>{const e=new Blob([t],{type:"image/svg+xml"});return URL.createObjectURL(e)},q="linear-gradient(180deg,#ffcc89,#d8860b)",P=`
  #darkmode-toggle-label {
    width: 70px;
    height: 28px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
    cursor: pointer;
  }

  #darkmode-toggle-label:after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 2px;
    left: 2px;
    background: ${q};
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  }

  #darkmode-toggle {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  #darkmode-toggle:checked + label {
    background: #383838;
  }
  #darkmode-toggle:checked + label:after {
    left: 68px;
    transform: translateX(-100%);
    background: linear-gradient(180deg,#777,#3a3a3a);
  }
  label, label:after {
    transition: 0.3s
  }
  label:active:after{
    width: 36px;
  }

  .darkmode-toggle-container {
    display: flex;
    flex-direction: row;
    margin-top: 2px;
  }


  #darkmode-toggle-label svg {
    position: absolute;
    width: 16px;
    top: 6px;
    z-index: 100;
  }
  #darkmode-toggle-label svg.sun {
    left: 6px;
    fill:#fff;
    transition: 0.3s;
  }
  #darkmode-toggle-label svg.moon {
    left: 48px;
    fill:#7e7e7e;
    transition: 0.3s;
  }
  #darkmode-toggle:checked + #darkmode-toggle-label svg.sun {
    fill:#7e7e7e;
  }
  #darkmode-toggle:checked + #darkmode-toggle-label svg.moon {
    fill:#fff;
  }
`,R=`
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


  /* dark mode stuff */
  .send-icon.dark {
    fill: ${i.boxHighlighted};
  }

  .box-icon.dark {
    fill: ${i.boxMuted};
  }
  .box-icon.selected.dark {
    fill: ${i.boxHighlighted};
  }

  .close-popup-icon.dark {
    fill: ${i.closePopupColor}
  }

  .checkmark-icon.dark {
    fill: ${i.boxHighlighted};
  }

  .down-icon.dark {
    fill: ${i.responseTextColor}
  }
`,G=`
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
        height: 624px;
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
      background-color: ${r.defaultColor};
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
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${r.defaultColor};
  }
  .widget__header__data {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  #widget__header__icon {
    width: 44px;
    height: 44px;
    border: 2px solid ${r.backgroundColor};
  }
  .widget__header h3 {
    margin-top: 2px;
    margin-left: 11px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }

  #send-form-container {
    position: relative;
    width: 100%;
    background: ${r.backgroundColor};
    border-top: 1px solid ${r.borderColor};
    height: 115px;
    padding-top: 15px;
  }
  #switch-model-relative-container {
    height: 1px;
    position: relative;
  }
  #send-form-wrapper {
    height: 47px;
  }
  #send-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 392px;
    background: ${r.inputBackground};
    border: 1px solid ${r.inputBorder};
    border-radius: 50px;
    margin: 0 auto 0px;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 46px;
    background: transparent;
    color: ${r.inputColor};
    font-size: 14px;
  }
  #send-form input:focus {
    outline: none;
  }
  #send-form input::placeholder {
    color: ${r.closePopupColor};
    opacity: 1;
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
    border-radius: 10px;
    width: 228px;
    min-height: 53px;
    padding: 18px;
    margin: 18px 18px 29px 18px;
  }
  .message-bubble.response {
    background-color: ${r.responseBackgroundColor};
    color: ${r.responseTextColor};
    padding-left: 32px;
    padding-bottom: 19px
  }
  .message-bubble.request {
    background-color: ${r.questionBackgroundColor};
    color: ${r.questionTextColor};
    padding: 14px 20px 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 44px;
    width: 44px;
    position: absolute;
    left: -22px;
    top: -22px;
    border: 4px solid ${r.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${r.defaultColor};
    border-radius: 50%;
  }
  .timestamp {
    position: absolute;
    bottom: -19px;
    font-weight: 500;
    height: 13px;
    font-size: 11px;
    color: #b4abc2;
  }
  .timestamp.left { left: 10px; }
  .timestamp.right { right: 10px; }
  .question {
    overflow-wrap: break-word;
    font-size: 14px;
    line-height: 17px;
    width: 178px;
    height: 17px;
  }

  .chat {
    background-color: ${r.backgroundColor};
    height: 444px;
    width: 100%;
    padding: 18px;
    padding-right: 0px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
  }

  .chat::-webkit-scrollbar {
    width: 15px;
  }
  .chat::-webkit-scrollbar-track {
    background-color: ${r.scrollbarBackground};
  }
  .chat::-webkit-scrollbar-thumb {
    background-color: ${r.scrollbarThumb};
    border-radius: 10px;
    border: 4px solid ${r.scrollbarBackground};
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

  .powered-by-container {
    height: 20px;
    position: absolute;
    bottom: 17px;
    width: 100%;
    margin: 0 auto;
  }
  .powered-by {
    background-color: ${r.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .powered-by span {
    font-size: 12px;
    color: ${r.responseTextColor};
  }
  #grey-text {
    color: #B3ABC2;
  }

  /* dark mode */
  .button__container.dark {
    background-color: ${i.defaultColor};
  }

  .message-bubble.response.dark {
    background-color: ${i.responseBackgroundColor};
    color: ${i.responseTextColor};
  }
  .message-bubble.request.dark {
    background-color: ${i.questionBackgroundColor};
    color: ${i.questionTextColor};
  }
  #message-bubble-response-icon.dark {
    border: 4px solid ${i.backgroundColor};
    background-color: ${i.defaultColor};
  }

  #send-form.dark {
    background: ${i.inputBackground};
    border: 1px solid ${i.inputBorder};
  }
  #send-form-container.dark {
    background: ${i.backgroundColor};
    border-top: 1px solid ${i.borderColor};
  }
  #send-form input.dark {
    color: ${i.inputColor};
  }
  #send-form input.dark::placeholder {
    color: ${i.inputColor};
    opacity: 1;
  }

  .chat.dark {
    background-color: ${i.backgroundColor};
  }

  .chat.dark::-webkit-scrollbar-track {
    background-color: ${i.scrollbarBackground};
  }
  .chat.dark::-webkit-scrollbar-thumb {
    background-color: ${i.scrollbarThumb};
    border: 4px solid ${i.scrollbarBackground};
  }

  .powered-by.dark {
    background-color: ${i.backgroundColor};
  }
  .powered-by span.dark {
    color: ${i.responseTextColor};
  }

`,g=t=>{let e=document.createElement("style");return e.type="text/css",e.innerText=t,document.head.appendChild(e),e},Z=`
<div class="chat-container">
  <header class="widget__header">
    <div class="widget__header__data">
      <span class="button__container" id="widget__header__icon">
        <img width="70%" height="70%" src="${x(f)}">
      </span>
      <h3>Majic Chatbot</h3>
    </div>

    ${E}
  </header>

  <div class="chat" id="chat">
    ${v("How can I help?","start")}
  </div>

  <div class="chat-top-bottom" id="send-form-container">

    <div id="send-form-wrapper">
      <div id="switch-model-relative-container"></div>
      <form id="send-form">
        <input required id="send-input" placeholder="Type a message" autocomplete="off">

        <div class="send-buttons-container">
          <button type="submit" id="send-button" class="icon-button-container">
            ${F}
          </button>

          ${`
            <span id="divider"></span>
            <button type="button" id="box-button" class="icon-button-container">
              ${j}
            </button>
          `}
        </div>
      </form>
    <div>

    <div class="powered-by-container">
    <div class="powered-by">
      <span id="grey-text">Powered by </span>&nbsp;
      <img width="20px" src="${x(O)}">
      &nbsp;<span> Majic Chatbot<span/>
    </div>
    </div>
  </div>

</div>
`,W=`
  .switch-model-container {
    display: none;
    position: absolute;
    bottom: -1px;
    width: 100%;
  }

  .switch-model-container.active {
    display: flex;
    animation:scale-up-bottom 0.2s;
  }

  .switch-model {
    width: 409px;
    margin: 0 auto;
    border-radius: 12px;
    padding: 18px 15px;
    background-color: ${r.popupBackgroundColor};
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
    align-items: flex-start;
  }
  .switch-model-header h4 {
    margin: 0px;
    padding: 0px;
    margin-left: 10px;
    color: ${r.responseTextColor};
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
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
    border-top: 15px solid ${r.popupBackgroundColor};
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


  /* dark mode styles */
  .switch-model.dark {
    background-color: ${i.popupBackgroundColor};
  }

  .switch-model-header h4.dark {
    color: ${i.responseTextColor};
  }

  .arrow-down.dark {
    border-top: 15px solid ${i.popupBackgroundColor};
  }
`,X=`
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
    color: ${r.boxHighlighted};

    display: flex;
    background-color: ${r.dropdownBackground};
    border-radius: 12px;
  }

  .dropdown-data.closed {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    cursor: pointer;
  }

  .dropdown-data.open {
    flex-direction: column;
    padding: 8px 15px;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 6px 0px;
    height: 15px;
    color: ${r.dropdownTextColor};
    cursor: pointer;
  }
  .dropdown-item.selected {
    color: ${r.dropdownSelectedTextColor};
  }

  .dropdown-data h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  .dropdown-item h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }


  /* dark mode styles */
  .dropdown-data.dark {
    color: ${i.boxHighlighted};
    background-color: ${i.dropdownBackground};
  }

  .dropdown-item.dark {
    color: ${i.dropdownTextColor};
  }
  .dropdown-item.selected.dark {
    color: ${i.dropdownSelectedTextColor};
  }
`;class K{constructor(e,o,n=null){this.items=e,this.current=n,this.container=document.getElementById(o),this.current||(this.current=e[0]),this.show(),g(X)}show(){const e=document.createElement("div");e.innerHTML=this.html(),e.classList.add("dropdown-container"),e.addEventListener("click",o=>{this.justChanged?this.justChanged=!1:this.expand()}),this.container.appendChild(e)}html(){return`<div class="dropdown">
      <div class="dropdown-data closed ${l()}">
        <h4>${this.current}</h4>
        ${N()}
      </div>
    </div>
    `}expand(){const e=document.getElementsByClassName("dropdown-data")[0];e.classList.remove("closed"),e.classList.add("open");const o=this.items.map(d=>`<div class="dropdown-item${d===this.current?" selected":""} ${l()}">
        <h4>${d}</h4>
        <span>
          ${d===this.current?V():""}
        </span>
      </div>`);e.innerHTML=o.join(""),document.getElementsByClassName("switch-model-container")[0].classList.add("expand"),document.querySelectorAll(".dropdown-item").forEach(d=>{d.addEventListener("click",c=>{const p=d.querySelector("h4").textContent;this.current=p,this.close()})})}close(){document.getElementsByClassName("switch-model-container")[0].classList.remove("expand");const o=document.getElementsByClassName("dropdown-container")[0];this.container.removeChild(o),this.justChanged=!0,this.show(),document.getElementsByClassName("switch-model-container")[0].classList.remove("active"),b("close")}}const C=["Faster but less accurate 3.5","Slower but more accurate 3.5","Fast but less accurate 3.5"],Y=`<div class="switch-model" id="switch-model">
  <div class="switch-model-header">
    <h4>Switch your model</h4>
    <div id="close-switch-model">${z}</div>
  </div>
</div>
<div class="arrow-down"/>
`;class U{constructor(){this.switchModelContainer=document.createElement("div"),this.switchModelContainer.innerHTML=Y,this.switchModelContainer.classList.add("switch-model-container"),this.showSwitchModel=!1,this.current=C[0]}addSwitchModel(){document.getElementById("switch-model-relative-container").prepend(this.switchModelContainer),new K(C,"switch-model",this.current),g(W)}setUpListeners(){this.addSwitchModel();const e=document.getElementById("box-button"),o=document.getElementById("close-switch-model");e.addEventListener("click",n=>this.toggleShowSwitchModel()),o.addEventListener("click",n=>this.toggleShowSwitchModel(!0))}toggleShowSwitchModel(e=!1){this.showSwitchModel=!this.showSwitchModel;const o=document.getElementsByClassName("switch-model-container")[0];this.showSwitchModel&&!e||!o.classList.contains("active")?(o.classList.add("active"),b("open")):(o.classList.remove("active"),b("close"))}}function b(t="close"){const e=document.getElementsByClassName("box-icon");Array.from(e).forEach(o=>{t==="open"?o.classList.add("selected"):o.classList.remove("selected")})}class Q{constructor(e="bottom-right"){h(this,"position","");h(this,"open",!1);h(this,"widgetContent",null);var n;this.position=this.getPosition(e),this.open=!1;const o=(n=document.getElementById("majicai-chatbot"))==null?void 0:n.getAttribute("data-chat-bot-id");console.log("Chatbot Id -",o),this.switchModel=new U,this.initialize(),this.injectStyles(),this.switchModel.setUpListeners(),T(),S(),B()}getPosition(e){const[o,n]=e.split("-");return{[o]:"30px",[n]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",Object.keys(this.position).forEach(d=>e.style[d]=this.position[d]),document.body.appendChild(e);const o=document.createElement("button");o.classList.add("button__container");const n=document.createElement("span");n.innerHTML=f,n.classList.add("widget__icon"),this.widgetIcon=n;const s=document.createElement("span");s.innerHTML=A,s.classList.add("widget__icon","widget__hidden"),this.closeIcon=s,o.appendChild(this.widgetIcon),o.appendChild(this.closeIcon),o.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(o)}createWidgetContent(){this.widgetContainer.innerHTML=Z}injectStyles(){const e=document.createElement("style");e.innerHTML=G.replace(/^\s+|\n/gm,""),document.head.appendChild(e),g(R),g(P);const o=window.matchMedia("(prefers-color-scheme: dark)"),n=document.getElementById("darkmode-toggle");o.matches?(n.checked=!0,u()):(n.checked=!1,m())}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function J(){return new Q}J();
