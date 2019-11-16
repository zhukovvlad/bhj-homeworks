var request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.send();
console.log(request);
let element = document.getElementById('items');
console.log(element);

request.addEventListener('readystatechange', function () {
  if (this.readyState == this.DONE && this.status == 200) {
    console.log('Ok');
    let loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
    let data = JSON.parse(this.responseText);
    console.log(data['response']);
    let currencies = data['response'].Valute;
    console.log(currencies);
    for (let key in currencies) {
      element.innerHTML += `
<div class="item">
  <div class="item__code">
    ${currencies[key].CharCode}
  </div>
  <div class="item__value">
    ${currencies[key].Value}
  </div>
  <div class="item__currency">
    руб.
  </div>
</div>`
    }
  }
})
             