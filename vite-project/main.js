import { CLOSE_ICON, MESSAGE_ICON, BOT_ICON, SEND_ICON, BOX_ICON, styles, botMessageBubble } from "./assets.js";
import { askQuestionListener, scrollToBottomObserver } from './chatEvent.js';
import { SwitchModel } from "./switchModel.js";

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;

    this.switchModel = new SwitchModel();

    this.initialize();
    this.injectStyles();

    this.switchModel.setUpListeners();

    askQuestionListener();
    scrollToBottomObserver();
  }

  position = "";
  open = false;
  widgetContent = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    // Create and append a div element to the document body
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    // Create a button element and give it a class of button__container
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    // Create a span element for the widget icon, give it a class of 'widget__icon', update it's innerHTML property to an icon which would serve as the widget icon.
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    // Create a span element for the close icon, give it a class of 'widget__icon' and 'widget__hidden' which would be removed whenever the widget is closed, update it's innerHTML property to an icon which would serve as the widget icon during that state.
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    // Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    // Create a container for the widget and add the following classes:- "widget__hidden", "widget__container"
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    // Invoke the `createWidget()` method
    this.createWidgetContent();

    // Append the widget's content and the button to the container
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
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
              <input required id="send-input" placeholder="Type a message">

              <div class="send-buttons-container">
                <button type="button" id="box-button" class="icon-button-container">${BOX_ICON}</button>
                <button type="submit" id="send-button" class="icon-button-container">${SEND_ICON}</button>
              </div>
            </form>
          </div>
        </div>
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();
