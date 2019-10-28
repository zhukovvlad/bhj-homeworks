let tabList = document.querySelectorAll('div.tab');
let tabContent = document.querySelectorAll('div.tab__content');
console.log(tabList);
console.log(tabContent);

for (let index=0; index<tabList.length; index++) {
    tabList[index].addEventListener('click', () => {
        if (tabList[index].classList.contains('tab_active')) {
            return true;
        } else {
            Array.from(tabList).map(element => element.classList.remove('tab_active'));
            Array.from(tabContent).map(element => element.classList.remove('tab__content_active'));
            tabList[index].classList.add('tab_active');
            tabContent[index].classList.add('tab__content_active');
        }
    })
}