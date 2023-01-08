const arrow = document.querySelector(".video-img-1");
const explore = document.querySelector(".btn-explore");

const btnReset = document.querySelector(".btn-reset");
const input = document.querySelectorAll(".form-control");

const arrow_2 = document.querySelector(".video-img-2");
arrow.addEventListener("click", function () {
  window.scrollTo(0, 2343.199951171875);
});

explore.addEventListener("click", function () {
  window.scrollTo(0, 831.2000122070312);
});

btnReset.addEventListener("click", function () {
  input.forEach((reset) => {
    reset.value = "";
  });
});
