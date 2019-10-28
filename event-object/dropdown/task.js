'use strict';

let dropDown = document.getElementsByClassName('dropdown__list')[0];
let btn = document.getElementsByClassName('dropdown__value')[0];

let elem = document.getElementsByClassName('dropdown__item');

btn.addEventListener('click', function() {
  if (dropDown.classList.contains('dropdown__list_active')) {
    dropDown.classList.remove('dropdown__list_active');
  } else {
    dropDown.classList.add('dropdown__list_active');
  }
})

for (let index=0; index < elem.length; index++) {
    elem[index].addEventListener('click', function(event) {
        btn.textContent = elem[index].textContent;
        event.preventDefault();
    });
}

//for github