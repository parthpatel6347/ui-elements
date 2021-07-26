const search = document.querySelector(".search");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const icons = document.querySelectorAll("i");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  icons.forEach((icon) => icon.classList.toggle("active-icon"));
  input.focus();
});
