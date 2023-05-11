const scrollToTop = document.querySelector(".material-symbols-outlined");
scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
