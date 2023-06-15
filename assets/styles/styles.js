import { DARK_MODE, LIGHT_MODE } from "../colors";

export const STYLES = `
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
      background-color: ${LIGHT_MODE.defaultColor};
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
    background-color: ${LIGHT_MODE.defaultColor};
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
    aspect-ratio: 1/1;
    border: 2px solid ${LIGHT_MODE.backgroundColor};
  }
  .widget__header h3 {
    margin-top: 2px;
    margin-left: 11px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .widget__header__toggles {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #close-button-mobile {
    margin-left: 20px;
  }

  .icon__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #send-form-container {
    position: relative;
    width: 100%;
    background: ${LIGHT_MODE.backgroundColor};
    border-top: 1px solid ${LIGHT_MODE.borderColor};
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
    background: ${LIGHT_MODE.inputBackground};
    border: 1px solid ${LIGHT_MODE.inputBorder};
    border-radius: 50px;
    margin: 0 auto 0px;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 46px;
    background: transparent;
    color: ${LIGHT_MODE.inputColor};
    font-size: 14px;
  }
  #send-form input:focus {
    outline: none;
  }
  #send-form input::placeholder {
    color: ${LIGHT_MODE.closePopupColor};
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
    background-color: ${LIGHT_MODE.responseBackgroundColor};
    color: ${LIGHT_MODE.responseTextColor};
    padding-left: 32px;
    padding-bottom: 19px
  }
  .message-bubble.request {
    background-color: ${LIGHT_MODE.questionBackgroundColor};
    color: ${LIGHT_MODE.questionTextColor};
    padding: 14px 20px 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 44px;
    width: 44px;
    position: absolute;
    left: -22px;
    top: -22px;
    border: 4px solid ${LIGHT_MODE.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${LIGHT_MODE.defaultColor};
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
    background-color: ${LIGHT_MODE.backgroundColor};
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
    background-color: ${LIGHT_MODE.scrollbarBackground};
  }
  .chat::-webkit-scrollbar-thumb {
    background-color: ${LIGHT_MODE.scrollbarThumb};
    border-radius: 10px;
    border: 4px solid ${LIGHT_MODE.scrollbarBackground};
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
    background-color: ${LIGHT_MODE.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .powered-by span {
    font-size: 12px;
    color: ${LIGHT_MODE.responseTextColor};
  }
  #grey-text {
    color: #B3ABC2;
  }

  /* dark mode */
  .button__container.dark {
    background-color: ${DARK_MODE.defaultColor};
  }

  .message-bubble.response.dark {
    background-color: ${DARK_MODE.responseBackgroundColor};
    color: ${DARK_MODE.responseTextColor};
  }
  .message-bubble.request.dark {
    background-color: ${DARK_MODE.questionBackgroundColor};
    color: ${DARK_MODE.questionTextColor};
  }
  #message-bubble-response-icon.dark {
    border: 4px solid ${DARK_MODE.backgroundColor};
    background-color: ${DARK_MODE.defaultColor};
  }

  #send-form.dark {
    background: ${DARK_MODE.inputBackground};
    border: 1px solid ${DARK_MODE.inputBorder};
  }
  #send-form-container.dark {
    background: ${DARK_MODE.backgroundColor};
    border-top: 1px solid ${DARK_MODE.borderColor};
  }
  #send-form input.dark {
    color: ${DARK_MODE.inputColor};
  }
  #send-form input.dark::placeholder {
    color: ${DARK_MODE.inputColor};
    opacity: 1;
  }

  .chat.dark {
    background-color: ${DARK_MODE.backgroundColor};
  }

  .chat.dark::-webkit-scrollbar-track {
    background-color: ${DARK_MODE.scrollbarBackground};
  }
  .chat.dark::-webkit-scrollbar-thumb {
    background-color: ${DARK_MODE.scrollbarThumb};
    border: 4px solid ${DARK_MODE.scrollbarBackground};
  }

  .powered-by.dark {
    background-color: ${DARK_MODE.backgroundColor};
  }
  .powered-by span.dark {
    color: ${DARK_MODE.responseTextColor};
  }


  /* mobile styles */
  @media screen and (max-width: 768px) {
    .widget__container {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0px;
      right: 0px;
      transition: max-height .2s ease;
      border-radius: 0px;

      z-index: 1000;
    }

    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .chat {
      min-height: 444px;
      flex-grow: 1;
    }

    #send-form {
      width: 90%;
    }
    #send-form input {
      width: 70%;
    }

    .message-bubble {
      max-width: 70vw;
    }
  }
`;

export const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};
