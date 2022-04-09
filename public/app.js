const burger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const logoTextLeft = document.querySelector("#logo-text-left");
const logoTextRight = document.querySelector("#logo-text-right");

burger.addEventListener("click", () => {
  console.log("hello");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");

    nav.classList.remove("bg-white");
    nav.classList.add("bg-black");
    burger.classList.add("hamburger-active");
    logoTextLeft.classList.remove("translate-x-10");
    logoTextRight.classList.add("-translate-x-10");

    setTimeout(() => {
      logoTextLeft.setAttribute("href", "#");
      logoTextRight.removeAttribute("href");
    }, 25);

    setTimeout(() => {
      mobileMenu.classList.remove("-translate-y-1");
      mobileMenu.classList.remove("opacity-0");
      mobileMenu.classList.remove("bg-white");
      mobileMenu.classList.add("-translate-y-0");
      mobileMenu.classList.add("opacity-100");
      mobileMenu.classList.add("bg-black");
    }, 100);
  } else {
    mobileMenu.classList.remove("-translate-y-0");
    mobileMenu.classList.remove("opacity-100");
    mobileMenu.classList.remove("bg-black");
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.add("-translate-y-1");
    mobileMenu.classList.add("bg-white");

    // setTimeout(() => {}, 225);
    setTimeout(() => {
      logoTextRight.setAttribute("href", "#");
      logoTextLeft.removeAttribute("href");
      nav.classList.remove("bg-black");
      nav.classList.add("bg-white");
      burger.classList.remove("hamburger-active");
      logoTextLeft.classList.add("translate-x-10");
      logoTextRight.classList.remove("-translate-x-10");

      mobileMenu.classList.add("hidden");
    }, 100);
  }
});
