let modal = document.getElementById("modal_main");
console.log(modal);
modal.classList.add("modal_active");

let toDoGood = document.getElementsByClassName("show-success")[0];
console.log(toDoGood);
toDoGood.onclick = function() {
  document.getElementById("modal_success").classList.add("modal_active");
  document.getElementById("modal_main").classList.remove("modal_active");
}

let closeButton = document.querySelectorAll("div.modal__close_times");
console.log(closeButton);

for (let index = 0; index < closeButton.length; index++) {
  console.log(closeButton.item(index));
  closeButton.item(index).onclick = function () {
    closeButton.item(index).closest("div.modal_active").classList.remove("modal_active");
  }
}
