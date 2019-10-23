let btn = (direction) => {
    let ourBtn = document.getElementsByClassName('slider__arrow_'+direction);
    console.log(Array.from(ourBtn)[0]);
    let slides = document.getElementsByClassName('slider__item');
    let counter = {
        'prev': 0,
        'next': 0
    };

    ourBtn.item(0).onclick = function() {
        counter[direction] = (counter[direction]) % (slides.length)+1;
        Array.from(slides).map(element => element.classList.remove('slider__item_active'));
        slides[Math.abs(1-counter[direction])].classList.add('slider__item_active');
        console.log(counter);
    }
}

btn('next');
btn('prev');