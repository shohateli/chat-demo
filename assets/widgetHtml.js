import { canChangeModels } from "../lib/canChangeModels";
import { LIGHT_MODE, DARK_MODE, COLORS } from "./colors";
import { DARK_MODE_TOGGLE_HTML } from "./darkModeToggle";
import { BOT_ICON, getImageFromSvgText, BOX_ICON, SEND_ICON, MESSAGE_ICON } from "./icons";
import { botMessageBubble } from "./messageBubble";

export const WIDGET_HTML = `
<div class="chat-container">
  <header class="widget__header">
    <div class="widget__header__data">
      <span class="button__container" id="widget__header__icon">
        <img width="70%" height="70%" src="${getImageFromSvgText(MESSAGE_ICON)}">
      </span>
      <h3>Majic Chatbot</h3>
    </div>

    ${DARK_MODE_TOGGLE_HTML}
  </header>

  <div class="chat" id="chat">
    ${botMessageBubble("How can I help?", "start")}
  </div>

  <div class="chat-top-bottom" id="send-form-container">

    <div id="send-form-wrapper">
      <div id="switch-model-relative-container"></div>
      <form id="send-form">
        <input required id="send-input" placeholder="Type a message" autocomplete="off">

        <div class="send-buttons-container">
          <button type="submit" id="send-button" class="icon-button-container">
            ${SEND_ICON}
          </button>

          ${ canChangeModels() ? `
            <span id="divider"></span>
            <button type="button" id="box-button" class="icon-button-container">
              ${BOX_ICON}
            </button>
          ` : "" }
        </div>
      </form>
    <div>

    <div class="powered-by-container">
    <div class="powered-by">
      <span id="grey-text">Powered by </span>&nbsp;
      <img width="20px" src="${getImageFromSvgText(BOT_ICON)}">
      &nbsp;<span> Majic Chatbot<span/>
    </div>
    </div>
  </div>

</div>
`;

//<img height="100%" width="100%" src="${getImageFromSvgText(SEND_ICON)}">