let interests = document.querySelectorAll('div>ul>li');
for (let item of interests) {
  console.log(item);
  let labelElement = item.querySelector('li input.interest__check');
  let listElement = item.querySelectorAll('li ul li input.interest__check');
  console.log(listElement);
  labelElement.addEventListener('click', () => {
    if (labelElement.checked == true) {
    console.log('This is checked');
    for (let element of listElement) {
      console.log(element);
      element.checked = true;
    }
  } else {
    console.log('UNCHECKED');
    for (let element of listElement) {
      console.log(element);
      element.checked = false;
    }
  }
  })
  console.log(labelElement);
}