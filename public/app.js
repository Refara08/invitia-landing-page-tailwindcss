const burger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const logoTextLeft = document.querySelector("#logo-text-left");
const logoTextRight = document.querySelector("#logo-text-right");

burger.addEventListener("click", () => {
  console.log("hello");
  // BUKA burger menu -------------------------------------------------------//
  if (mobileMenu.classList.contains("hidden")) {
    // display block mobile menu
    mobileMenu.classList.remove("hidden");

    // ----- jeda untuk display block mobile menu -----

    setTimeout(() => {
      // nav
      nav.classList.remove("bg-white");
      nav.classList.add("bg-black");

      // logo remove attr from unused link
      logoTextLeft.setAttribute("href", "#");
      logoTextRight.removeAttribute("href");
      // logo transition
      logoTextLeft.classList.remove("translate-x-10");
      logoTextRight.classList.remove("-translate-x-0");
      logoTextLeft.classList.add("translate-x-0");
      logoTextRight.classList.add("-translate-x-10");

      // burger menu animation
      burger.classList.add("hamburger-active");
    }, 25);

    // -------- jeda 300 ms -----------

    setTimeout(() => {
      // mobile menu transition
      mobileMenu.classList.remove("opacity-0");
      mobileMenu.classList.remove("-translate-y-5");
      mobileMenu.classList.add("-translate-y-0");
    }, 325);

    // TUTUP burger menu -------------------------------------------------------//
  } else {
    setTimeout(() => {
      // mobile menu transition
      mobileMenu.classList.remove("-translate-y-0");
      mobileMenu.classList.add("-translate-y-5");
      mobileMenu.classList.add("opacity-0");
    }, 25);

    // -------- jeda 300 ms -----------

    setTimeout(() => {
      // nav
      nav.classList.remove("bg-black");
      nav.classList.add("bg-white");

      // logo remove attr
      logoTextRight.setAttribute("href", "#");
      logoTextLeft.removeAttribute("href");

      // logo transition
      logoTextLeft.classList.remove("translate-x-0");
      logoTextLeft.classList.add("translate-x-10");
      logoTextRight.classList.remove("-translate-x-10");
      logoTextRight.classList.add("-translate-x-0");

      // burger menu animation
      burger.classList.remove("hamburger-active");
    }, 325);

    // ---- jeda 150 ms untuk display none mobile menu --------

    setTimeout(() => {
      // mobile menu display none
      mobileMenu.classList.add("hidden");
    }, 200);
  }
});
