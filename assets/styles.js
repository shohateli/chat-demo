import { COLORS } from "./colors";

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
        overflow: auto;
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
      background-color: ${COLORS.defaultColor};
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
    background-color: ${COLORS.defaultColor};
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
    background: ${COLORS.inputBackground};
    border: 1px solid ${COLORS.inputBorder};
    border-radius: 50px;
    margin: 0 auto 0px;
  }
  #send-form-container {
    position: relative;
    width: 100%;
    background: ${COLORS.backgroundColor};
    padding-top: 20px;
    border-top: 1px solid ${COLORS.borderColor};
    display: flex;
    flex-direction: column;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 30px;
    background: transparent;
    color: ${COLORS.inputColor};
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
    background-color: ${COLORS.responseBackgroundColor};
    color: ${COLORS.responseTextColor};
    padding: 14px 20px 15px 40px;
  }
  .message-bubble.request {
    background-color: ${COLORS.questionBackgroundColor};
    color: ${COLORS.questionTextColor};
    padding: 14px 20px 15px;
    float: right;
  }
  #message-bubble-response-icon {
    height: 51px;
    width: 51px;
    position: absolute;
    left: -22px;
    top: -22px;
    border: 4px solid ${COLORS.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.defaultColor};
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
    background-color: ${COLORS.backgroundColor};
    height: 450px;
    width: 100%;
    padding: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${COLORS.scrollbarBackground};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.scrollbarThumb};
    border-radius: 10px;
    border: 4px solid ${COLORS.scrollbarBackground};
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
    background-color: ${COLORS.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .powered-by span {
    font-size: 12px;
    color: ${COLORS.responseTextColor};
  }
  #grey-text {
    color: #B3ABC2;
  }

`;

export const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};
