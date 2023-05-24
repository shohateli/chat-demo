export const COLOR = "#a16dfd";

export const MESSAGE_ICON = `
    <img src="./media/chatbot_logo_white.svg" width="32" height="32">
`;

export const CLOSE_ICON = `
  <svg fill="white" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(270)" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg>
`

export const BOT_ICON = `
  <img src="./media/chatbot_logo_purple.svg" width="32" height="32">
`;

export const SEND_ICON = `
  <svg height="40" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z" fill="#a16dfd"></path> </g></svg>
`;

export const BOX_ICON = `
  <img src="./media/cube_icon.svg" width="20" height="20">
`

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

`;

export const botMessageBubble = (text, id=`${Date.now()}`) => {
  return `
    <div class="message-bubble response">
      <div class="button__container" id="message-bubble-response-icon">
        ${MESSAGE_ICON}
      </div>

      <span id=${id} class="question">
        ${text}
      </span>

      <span class="timestamp left" id="time${id}"></span>
    </div>`
}

export const messageBubble = (text, time="") => {
  return `
    <div class="message-bubble request">
      <span class="question">
        ${text}
      </span>

      <span class="timestamp right">${time}</span>
    </div>
    <div style="clear: right;"></div>
  `
}

export const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};
