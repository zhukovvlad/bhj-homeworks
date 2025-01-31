const btnList = document.getElementsByClassName('font-size');
const book = document.querySelector('div.book');

const divColorList = document.querySelector('div.book__control_color');
const btnColorList = divColorList.getElementsByClassName('color');

const divBackList = document.querySelector('div.book__control_background');
const backgroundList = divBackList.getElementsByClassName('color');

for (let btn of btnList) {
  btn.addEventListener('click', (event) => {
    Array.from(btnList).map(element => element.classList.remove('font-size_active'));
    btn.classList.add('font-size_active');
    if (btn.classList.contains('font-size_small')) {
      book.classList.remove('book_fs-big', 'book_fs-small');
      book.classList.add('book_fs-small');
    } else if (btn.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-big', 'book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-big', 'book_fs-small');
    }
    event.preventDefault();
  })
}

for (let btn of btnColorList) {
    btn.addEventListener('click', (event) => {
        Array.from(btnColorList).map(element => element.classList.remove('color_active'));
        btn.classList.add('color_active');
        if (btn.classList.contains('color_gray')) {
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
            book.classList.add('book_color-gray');
        } else if (btn.classList.contains('color_whitesmoke')) {
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
            book.classList.add('book_color-whitesmoke');
        } else {
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
        }
        event.preventDefault();
    })
}

for (let btn of backgroundList) {
    btn.addEventListener('click', (event) => {
        Array.from(backgroundList).map(element => element.classList.remove('color_active'));
        btn.classList.add('color_active');
        if (btn.classList.contains('color_gray')) {
            book.classList.remove('book_bg-gray', 'book_bg-white');
            book.classList.add('book_bg-gray');
        } else if (btn.classList.contains('color_white')) {
            book.classList.remove('book_bg-gray', 'book_bg-white');
            book.classList.add('book_bg-white');
        } else {
            book.classList.remove('book_bg-gray', 'book_bg-white');
        }
        event.preventDefault();        
    })
}