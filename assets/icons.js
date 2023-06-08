import { DARK_MODE, LIGHT_MODE } from "./colors";
import { injectCSS } from "./styles";

export const MESSAGE_ICON = `<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="white"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="white"/>
<circle cx="165" cy="20" r="20" fill="white"/>
<rect x="156" y="31" width="17" height="32" fill="white"/>
</svg>`
// `<img src="./media/chatbot_logo_white.svg" width="32" height="32">`;

export const CLOSE_ICON = `
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`

export const BOT_ICON = `<svg width="32" height="32" viewBox="0 0 330 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77 369L114.5 289H235L77 369Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 136H20C8.95431 136 0 144.954 0 156V194C0 205.046 8.9543 214 20 214H30V136Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 214L310 214C321.046 214 330 205.046 330 194L330 156C330 144.954 321.046 136 310 136L300 136L300 214Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M241.886 95H88.1143C90.3105 71.0337 123.894 52 165 52C206.106 52 239.689 71.0337 241.886 95Z" fill="#A06DFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 111C19 88.9086 36.9086 71 59 71H271C293.091 71 311 88.9086 311 111V253C311 275.091 293.091 293 271 293H59C36.9086 293 19 275.091 19 253V111ZM126 251H204C204 262.598 194.598 272 183 272H147C135.402 272 126 262.598 126 251ZM82 122C59.9086 122 42 139.909 42 162V194C42 216.091 59.9086 234 82 234H248C270.091 234 288 216.091 288 194V162C288 139.909 270.091 122 248 122H82Z" fill="#A06DFD"/>
<circle cx="104.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="219.5" cy="178.5" r="18.5" fill="#A06DFD"/>
<circle cx="165" cy="20" r="20" fill="#A06DFD"/>
<rect x="156" y="31" width="17" height="32" fill="#A06DFD"/>
</svg>`
// `<img src="./media/chatbot_logo_purple.svg" width="32" height="32">`;

export const SEND_ICON = `
<svg class="send-icon" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.003 495.003" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg>
`;;

export const BOX_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="box-icon" d="M17.0005 4.19014C17.0266 4.17598 17.0483 4.15572 17.0634 4.13137C17.0784 4.10701 17.0864 4.07942 17.0864 4.05133C17.0864 4.02325 17.0784 3.99565 17.0634 3.9713C17.0483 3.94695 17.0266 3.92668 17.0005 3.91253L10.3916 0.347434C9.96869 0.119853 9.48859 0 8.99981 0C8.51103 0 8.03093 0.119853 7.60806 0.347434L1.00041 3.91253C0.974284 3.92668 0.952608 3.94695 0.937543 3.9713C0.922478 3.99565 0.914551 4.02325 0.914551 4.05133C0.914551 4.07942 0.922478 4.10701 0.937543 4.13137C0.952608 4.15572 0.974284 4.17598 1.00041 4.19014L8.91349 8.51212C8.94011 8.52668 8.97043 8.53436 9.00132 8.53436C9.03222 8.53436 9.06254 8.52668 9.08916 8.51212L17.0005 4.19014Z" />
<path class="box-icon" d="M0.259619 5.28325C0.233226 5.2691 0.203276 5.26167 0.172799 5.26172C0.142323 5.26176 0.112399 5.26928 0.0860545 5.28351C0.0597101 5.29774 0.0378793 5.31817 0.0227692 5.34274C0.00765922 5.36732 -0.000194053 5.39516 3.64236e-06 5.42346V12.4094C0.00065688 12.7461 0.096221 13.0767 0.277192 13.3684C0.458163 13.6602 0.718234 13.9028 1.03154 14.0723L8.04808 17.9784C8.07438 17.9925 8.10421 18 8.13457 18C8.16494 18 8.19478 17.9926 8.22108 17.9785C8.24739 17.9644 8.26924 17.9441 8.28444 17.9197C8.29965 17.8953 8.30767 17.8676 8.3077 17.8394V9.7342C8.30767 9.70602 8.29965 9.67834 8.28446 9.65394C8.26927 9.62954 8.24744 9.60928 8.22116 9.59519L0.259619 5.28325Z" />
<path class="box-icon" d="M9.69238 9.76218V17.8373C9.69241 17.8655 9.70043 17.8932 9.71564 17.9176C9.73084 17.942 9.75269 17.9622 9.779 17.9763C9.8053 17.9904 9.83514 17.9978 9.8655 17.9978C9.89587 17.9978 9.9257 17.9904 9.952 17.9763L16.9681 14.0701C17.2812 13.9009 17.5411 13.6586 17.7222 13.3672C17.9032 13.0759 17.999 12.7456 18.0001 12.4093V5.42332C18 5.39516 17.9919 5.36752 17.9767 5.34317C17.9614 5.31882 17.9396 5.29861 17.9133 5.28457C17.887 5.27053 17.8572 5.26316 17.8268 5.26318C17.7965 5.26321 17.7667 5.27063 17.7405 5.28471L9.77892 9.62357C9.7527 9.63763 9.73091 9.65783 9.71572 9.68215C9.70054 9.70647 9.69249 9.73406 9.69238 9.76218Z" />
</svg>`;

export const CLOSE_POPUP_ICON = `<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero">
  <g class="close-popup-icon" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
    <g transform="scale(5.12,5.12)">
    <path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z">
    </path>
    </g>
  </g>
</svg>`

export const CHECKMARK_ICON = `
<svg class="checkmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
`;

export const DOWN_ICON = `<svg class="down-icon" height="15" width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>`

export const getImageFromSvgText = (svgText) => {
  const blob = new Blob([svgText], {type: 'image/svg+xml'});
  return URL.createObjectURL(blob);
}

export const iconStyles = `
  .send-icon {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .box-icon {
    fill: ${LIGHT_MODE.boxMuted};
  }
  .box-icon.selected {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .close-popup-icon {
    fill: ${LIGHT_MODE.closePopupColor}
  }

  .checkmark-icon {
    fill: ${LIGHT_MODE.boxHighlighted};
  }

  .down-icon {
    fill: ${LIGHT_MODE.responseTextColor}
  }


  @media (prefers-color-scheme: dark) {
    .send-icon {
      fill: ${DARK_MODE.boxHighlighted};
    }

    .box-icon {
      fill: ${DARK_MODE.boxMuted};
    }
    .box-icon.selected {
      fill: ${DARK_MODE.boxHighlighted};
    }

    .close-popup-icon {
      fill: ${DARK_MODE.closePopupColor}
    }

    .checkmark-icon {
      fill: ${DARK_MODE.boxHighlighted};
    }

    .down-icon {
      fill: ${DARK_MODE.responseTextColor}
    }
  }
`;
