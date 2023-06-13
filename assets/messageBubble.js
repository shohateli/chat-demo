import { formatAMPM } from "../chatBot/chatEvent"
import { MESSAGE_ICON, getImageFromSvgText } from "./icons"

export const botMessageBubble = (text, id=`${Date.now()}`) => {
  return `
    <div class="message-bubble response ${addDarkClass()}">
      <div id="message-bubble-response-icon" class="${addDarkClass()}">
        <img width="70%" height="70%" src="${getImageFromSvgText(MESSAGE_ICON)}">
      </div>

      <span id=${id} class="question">
        ${text}
      </span>

      <span class="timestamp left" id="time${id}">
          ${ id === "start" ? formatAMPM(new Date()) : "" }
      </span>
    </div>`
}

export const messageBubble = (text, time="") => {
  return `
    <div class="message-bubble request ${addDarkClass()}">
      <span class="question">
        ${text}
      </span>

      <span class="timestamp right">${time}</span>
    </div>
    <div style="clear: right;"></div>
  `
}

export const addDarkClass = () => {
  const checkbox = document.getElementById('darkmode-toggle');
  if (checkbox?.checked) return 'dark';
  return '';
}

