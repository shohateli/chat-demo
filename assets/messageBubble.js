import { MESSAGE_ICON } from "./icons"

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