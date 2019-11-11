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
      chatInput.value='';
    }

    const messageContainer = document.querySelector('.chat-widget__messages-container');
    messageContainer.scrollTo(0, 9999);
  })