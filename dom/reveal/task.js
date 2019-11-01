const divReveal = document.querySelectorAll('div.reveal');

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;

  for (let index = 0; index < divReveal.length; index++) {
    const revealTop = divReveal[index].getBoundingClientRect().top;
    const revealBottom = divReveal[index].getBoundingClientRect().bottom;
    const revealHeight = revealBottom - revealTop;
    
    if (revealTop < windowHeight && revealTop > -revealHeight) {
      divReveal[index].classList.add('reveal_active');
    } else {
      divReveal[index].classList.remove('reveal_active');
    }
  }
})