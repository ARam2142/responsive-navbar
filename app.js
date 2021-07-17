const hamburger = document.querySelector("#hamburger");
const modal = document.querySelector(".modal-show");
console.log(modal);

function isItMobile() {
  modal.classList.add("modal-hide");
}
isItMobile();

hamburger.addEventListener("click", () => {
  modal.classList.remove("modal-hide");
});
