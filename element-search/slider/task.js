let btn = (direction) => {
    let ourBtn = document.getElementsByClassName('slider__arrow_'+direction);
    
    let slides = document.getElementsByClassName('slider__item');
    
    function plusOrMinus() {
        if (direction == 'next') {
            return Number(1);
        }
        if (direction == 'prev') {
            return Number(-1);
        }
    }

    ourBtn.item(0).onclick = function() {
        let activeElement = Array.from(slides).filter(element => element.classList.contains('slider__item_active'));
        let activeSlideIndex = Array.from(slides).indexOf(activeElement[0]) + plusOrMinus();
      
        if (activeSlideIndex == -1) {
          activeSlideIndex = slides.length - 1;
        } else if (activeSlideIndex == slides.length) {
          activeSlideIndex = 0;
        }
      
        Array.from(slides).map(element => element.classList.remove('slider__item_active'));
        slides[activeSlideIndex].classList.add('slider__item_active');
        console.log(counter);
    }
}

btn('next');
btn('prev');
