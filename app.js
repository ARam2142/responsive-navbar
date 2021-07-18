const hamburger = document.querySelector("#hamburger");
const modal = document.querySelector(".modal-hide");
const header = document.querySelector(".header");
const xBtn = document.querySelector(".hide-xbtn");

hamburger.addEventListener("click", () => {
  modal.classList.toggle("modal-hide");
  // hamburger.remove();
  // xBtn.classList.add("show-xbtn");

  // modal.classList.add("modal-hide");
  // modal.classList.remove("modal-hide");
  // xBtn.classList.remove("hide-xbtn");
  modal.classList.toggle("modal-show");
});

// xBtn.addEventListener("click", () => {
//   modal.classList.remove("modal-show");
//   modal.classList.add("modal-hide");
//   xBtn.remove();
//   hamburger.classList.add("modal-show");
// });

function checkMediaQuery() {
  if (window.innerWidth > 520) {
    console.log("media query matched");
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
  }
}

window.addEventListener("resize", checkMediaQuery);
