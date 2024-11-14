// DOM elementlarini bir marta tanlab, o'zgaruvchiga saqlaymiz
const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
const dayNightIcon = dayNight.querySelector("i");

// Style switcher ochish / yopish
styleSwitcherToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  styleSwitcher.classList.toggle("open");
});

// Style switcherni scroll paytida yopish
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

// Ranglar panelini o'zgartirish
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

dayNight.addEventListener("click", () => {
  dayNightIcon.classList.toggle("fa-sun");
  dayNightIcon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNightIcon.classList.add("fa-sun");
  } else {
    dayNightIcon.classList.add("fa-moon");
  }
});
