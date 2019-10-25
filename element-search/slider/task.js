let btn = (direction) => {
    let ourBtn = document.getElementsByClassName('slider__arrow_'+direction);
    console.log(Array.from(ourBtn)[0]);
    let slides = document.getElementsByClassName('slider__item');
    console.log(slides);
    let activeElement = Array.from(slides).filter(element => element.classList.contains('slider__item_active'));
    console.log("Our active element: ", activeElement);
    let activeSlideIndex = Array.from(slides).indexOf(activeElement[0]);
    console.log(activeSlideIndex);
    let counter = {
        'prev': 0,
        'next': 0
    };

    function plusOrMinus() {
        if (direction == 'next') {
            return Number(1);
        }
        if (direction == 'prev') {
            return Number(-1);
        }
    }

    //function 

    ourBtn.item(0).onclick = function() {
        console.log(plusOrMinus());
        
        counter[direction] = (counter[direction]) % (slides.length)+1;
        Array.from(slides).map(element => element.classList.remove('slider__item_active'));
        slides[Math.abs(1-counter[direction])].classList.add('slider__item_active');
        console.log(counter);
    }
}

btn('next');
btn('prev');