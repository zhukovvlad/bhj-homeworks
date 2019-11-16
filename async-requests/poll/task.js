let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();

let pollTitle = document.getElementById('poll__title');
let pollAnswer = document.getElementById('poll__answers');
console.log(pollTitle);
console.log(pollAnswer);

request.addEventListener('readystatechange', function () {
  if (this.readyState == request.DONE && this.status == 200) {
    console.log('Ok');
    let pollItem = JSON.parse(this.responseText);
    let question = pollItem.data.title;
    let answers = pollItem.data.answers;
    console.log(answers);
    
    pollTitle.innerHTML += question;
    
    for (let answer of answers) {
      pollAnswer.innerHTML += `
        <button class="poll__answer">
          ${answer}
        </button>`;
    }
    
    let allButtons = document.getElementsByTagName('button');
    console.log(allButtons);
    
    for (let button of allButtons) {
      button.addEventListener('click', () => {
        alert('Спасибо. Ваш голос учтён!');
      })
    }
    
  }
})