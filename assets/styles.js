export const styles = `
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
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 392px;
    height: 46px;
    background: #F6F7F9;
    border: 1px solid #E8E8E8;
    border-radius: 50px;
    margin: 0 auto 5px;
  }
  #send-form-container {
    position: relative;
    width: 100%;
    background: white;
    padding-top: 20px;
    border-top: 1px solid #E8E8E8;
    display: flex;
    flex-direction: column;
  }
  #send-form input {
    border: none;
    width: 284px;
    height: 30px;
    background: transparent;
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
  #divider {
    height: 24px;
    width: 0px;
    border: 1px solid #D6D6D6;
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

  .powered-by {
    height: 46px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .powered-by span {
    font-size: 12px;
  }

`;

export const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};
