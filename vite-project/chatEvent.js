import { botMessageBubble, messageBubble } from "./assets";

export const askQuestionListener = () => {
  const form = document.getElementById("send-form");

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('send-input');
    console.log(input.value)
    if (!input.value) return;

    const chatBox = document.getElementById('chat');
    chatBox.innerHTML += messageBubble(input.value);

    let response = "..."
    const now = `${Date.now()}`
    chatBox.innerHTML += botMessageBubble(response);

    getResponse(input.value)
      .then(r => {
        const answer = document.getElementById(now);
        answer.innerHTML = r;
      })
      .catch(err=>alert(err))

    input.value = "";
  });
}

const getResponse = (input) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input);
    }, 1000);
  });

  return myPromise;
}

export const scrollToBottomObserver = () => {
  // Get a reference to the div we want to auto-scroll.
  const chat = document.querySelector('.chat');
  // Create an observer and pass it a callback.
  const observer = new MutationObserver(scrollToBottom);
  // Tell it to look for new children that will change the height.
  const config = {childList: true};
  observer.observe(chat, config);
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}
