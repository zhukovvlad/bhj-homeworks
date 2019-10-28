'use strict';

let tabList = document.querySelectorAll('div.tab');
let tabContent = document.querySelectorAll('div.tab__content');

for (let index=0; index<tabList.length; index++) {
    tabList[index].addEventListener('click', () => {
        Array.from(tabList).map(element => element.classList.remove('tab_active'));
        Array.from(tabContent).map(element => element.classList.remove('tab__content_active'));
        tabList[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
}