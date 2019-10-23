let unitWithSubMenu = document.querySelectorAll("ul.menu_sub");
console.log(unitWithSubMenu);

for (let index = 0; index < unitWithSubMenu.length; index++) {
    //unitWithSubMenu[index].classList.add('menu_active');
    console.log(unitWithSubMenu.item(index));
    let previousHref = unitWithSubMenu.item(index).previousElementSibling;
    let unitWithSubMenuArr = Array.from(unitWithSubMenu);
    console.log(unitWithSubMenuArr);
    previousHref.onclick = function() {
        if (unitWithSubMenu.item(index).classList.contains('menu_active')) {
            unitWithSubMenuArr.map(element => element.classList.remove('menu_active'));
            return false;
        } else {
            unitWithSubMenuArr.map(element => element.classList.remove('menu_active'));
            unitWithSubMenu.item(index).classList.add('menu_active');
            return false;
        }
    }
}