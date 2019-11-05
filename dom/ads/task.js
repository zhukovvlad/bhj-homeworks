let delay = Number(document.getElementsByClassName('rotator__case_active')[0].getAttribute('data-speed'));

function rotate() {
  let rotatorList = document.getElementsByClassName('rotator__case');
  let rotatorListArray = Array.from(rotatorList);
  let activeElement = rotatorListArray.filter(element => element.classList.contains('rotator__case_active'));
  let activeSlideIndex = rotatorListArray.indexOf(activeElement[0])+1;
  if (activeSlideIndex == rotatorList.length) {
    activeSlideIndex = 0;
  }
  
  rotatorListArray.map(element => element.classList.remove('rotator__case_active'));
  rotatorList[activeSlideIndex].classList.add('rotator__case_active');
  rotatorList[activeSlideIndex].style.color = rotatorList[activeSlideIndex].getAttribute('data-color');
  delay = Number(rotatorList[activeSlideIndex].getAttribute('data-speed'));

  setTimeout(rotate, delay);
}

setTimeout(rotate, delay);