function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  const chat = document.querySelector('.chat-widget');
  chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
  })
  
  const chatMessages = document.getElementById('chat-widget__messages');
  console.log(chatMessages);
  const chatInput = document.getElementById('chat-widget__input');
  
  const answerList = ['Нам не очень приятно вас видеть.', 'Это может подождать', 'Вы слишком торопитесь.', 'Свяжемся с вами через 15 лет']
  
  chatInput.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
      const date = new Date();
      chatMessages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
          <div class="message__text">
            ${chatInput.value}
          </div>
        </div>
        <div class="message">
          <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
          <div class="message__text">
            ${answerList[randomInteger(0, answerList.length-1)]}
          </div>
        </div>`
    }

    const messageContainer = document.querySelector('.chat-widget__messages-container');
    console.log(messageContainer);
    //console.log(messageContainer[0].hasChildNodes);
    const allMessages = document.querySelectorAll('.message');
    console.log(allMessages);
    const lastMessage = messageContainer.lastChild;
    console.log(lastMessage);
    //console.log(lastMessage.getBoundingClientRect().bottom);
    //lastMessage.getBoundingClientRect.top = 200;
    messageContainer.scrollTo(0, 9999);
    console.log('Top: ', messageContainer.getBoundingClientRect().top);
    console.log('Bottom: ', messageContainer.getBoundingClientRect().bottom);
  })