const form = document.getElementById("send-form");

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.getElementById('send-input');
  const question = input.value;

  const chatBox = document.getElementById('chat');
  chatBox.innerHTML += `<div class="message-bubble"><span class="question">${question}</span></div><br>`;

  let response = "..."
  const now = `${Date.now()}`
  chatBox.innerHTML += `<div class="message-bubble-response"><span id="${now}" class="question">${response}</span></div><br><br><br>`;

  getResponse(question)
    .then(r => {
      const answer = document.getElementById(now);
      answer.innerHTML = r;
    })
    .catch(err=>alert(err))

  input.value = "";
});

const getResponse = (input) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input);
    }, 1000);
  });

  return myPromise;
}

// Get a reference to the div you want to auto-scroll.
const chat = document.querySelector('.chat');
// Create an observer and pass it a callback.
const observer = new MutationObserver(scrollToBottom);
// Tell it to look for new children that will change the height.
const config = {childList: true};
observer.observe(chat, config);

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}

