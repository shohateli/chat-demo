import { DARK_MODE, LIGHT_MODE } from "./colors";

export const styles = `
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
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    background-color: ${LIGHT_MODE.defaultColor};
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
    background: ${LIGHT_MODE.inputBackground};
    border: 1px solid ${LIGHT_MODE.inputBorder};
    border-radius: 50px;
    margin: 0 auto 0px;
  }
  #send-form-container {
    position: relative;
    width: 100%;
    background: ${LIGHT_MODE.backgroundColor};
    padding-top: 20px;
    border-top: 1px solid ${LIGHT_MODE.borderColor};
    display: flex;
    flex-direction: column;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 30px;
    background: transparent;
    color: ${LIGHT_MODE.inputColor};
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
    background-color: ${LIGHT_MODE.responseBackgroundColor};
    color: ${LIGHT_MODE.responseTextColor};
    padding: 14px 20px 15px 40px;
  }
  .message-bubble.request {
    background-color: ${LIGHT_MODE.questionBackgroundColor};
    color: ${LIGHT_MODE.questionTextColor};
    padding: 14px 20px 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 51px;
    width: 51px;
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
    background-color: ${LIGHT_MODE.backgroundColor};
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

  .powered-by {
    height: 46px;
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


  @media (prefers-color-scheme: dark) {
    .button__container {
      background-color: ${DARK_MODE.defaultColor};
    }

    .widget__header {
      background-color: ${DARK_MODE.defaultColor};
    }

    .message-bubble.response {
      background-color: ${DARK_MODE.responseBackgroundColor};
      color: ${DARK_MODE.responseTextColor};
    }
    .message-bubble.request {
      background-color: ${DARK_MODE.questionBackgroundColor};
      color: ${DARK_MODE.questionTextColor};
    }
    #message-bubble-response-icon {
      border: 4px solid ${DARK_MODE.backgroundColor};
      background-color: ${DARK_MODE.defaultColor};
    }

    #send-form {
      background: ${DARK_MODE.inputBackground};
      border: 1px solid ${DARK_MODE.inputBorder};
    }
    #send-form-container {
      background: ${DARK_MODE.backgroundColor};
      border-top: 1px solid ${DARK_MODE.borderColor};
    }
    #send-form input {
      color: ${DARK_MODE.inputColor};
    }

    .chat {
      background-color: ${DARK_MODE.backgroundColor};
    }

    .chat::-webkit-scrollbar-track {
      background-color: ${DARK_MODE.scrollbarBackground};
    }
    .chat::-webkit-scrollbar-thumb {
      background-color: ${DARK_MODE.scrollbarThumb};
      border: 4px solid ${DARK_MODE.scrollbarBackground};
    }

    .powered-by {
      background-color: ${DARK_MODE.backgroundColor};
    }
    .powered-by span {
      color: ${DARK_MODE.responseTextColor};
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
