const links = document.querySelectorAll('a.has-tooltip');
console.log(links);

for (let item of links) {
    console.log(item);
    console.log(item.getAttribute('title'));
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const itemTitle = item.getAttribute('title');
        const tip = '<div class="tooltip tooltip_active">' + itemTitle + '</div>';
        item.insertAdjacentHTML("afterBegin", tip);
    })
}