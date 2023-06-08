import { canChangeModels } from "../lib/canChangeModels";
import { LIGHT_MODE, DARK_MODE, COLORS } from "./colors";
import { BOT_ICON, getImageFromSvgText, BOX_ICON, SEND_ICON } from "./icons";
import { botMessageBubble } from "./messageBubble";

export const WIDGET_HTML = `
<div class="chat-container">
  <header class="widget__header">
    <span class="button__container" id="widget__header__icon">${BOT_ICON}</span>
    <h3>Majic Chatbot</h3>
  </header>

  <div class="chat" id="chat">
    ${botMessageBubble("How can I help?", "start")}
  </div>

  <div class="chat-top-bottom" id="send-form-container">

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

    <div class="powered-by">
      <span id="grey-text">Powered by </span>&nbsp;
      <img width="20px" src="${getImageFromSvgText(BOT_ICON)}">
      &nbsp;<span> Majic Chatbot<span/>
    </div>
  </div>
</div>
`;

//<img height="100%" width="100%" src="${getImageFromSvgText(SEND_ICON)}">