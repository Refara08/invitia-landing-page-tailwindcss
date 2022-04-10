// ### Variables ### =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=--
const burger = document.querySelector("#hamburger");
const burgerLineArr = burger.children;
const mobileMenu = document.querySelector("#menu-mobile");
const desktopMenu = document.querySelector("#menu-desktop");
const nav = document.querySelector("#nav");
const logoTextLeft = document.querySelector("#logo-text-left");
const logoTextRight = document.querySelector("#logo-text-right");

// ### Functions ### =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=--
const navBlack = () => {
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

  // transisi warna untuk logo dan nav desktop
  if (window.innerWidth > 768) {
    logoTextLeft.classList.remove("md:text-black");
  }

  //nav desktop
  desktopMenu.classList.add("text-white");
};

const navWhite = () => {
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

  // transisi warna untuk logo desktop
  if (window.innerWidth > 768) {
    logoTextLeft.classList.add("md:text-black");
  }

  //nav desktop
  desktopMenu.classList.remove("text-white");
};

const mobileActive = () => {
  // mobile menu transition
  mobileMenu.classList.remove("opacity-0");
  mobileMenu.classList.remove("-translate-y-5");
  mobileMenu.classList.add("-translate-y-0");
};

const mobileDeactive = () => {
  // mobile menu transition
  mobileMenu.classList.remove("-translate-y-0");
  mobileMenu.classList.add("-translate-y-5");
  mobileMenu.classList.add("opacity-0");
};

// ### Events ### =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=---=-=-=

// 1 - hamburger click event // =============================================================
burger.addEventListener("click", () => {
  console.log("hello");
  // BUKA burger menu -------------------------------------------------------//
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");

    setTimeout(() => {
      navBlack();

      // burger menu animation
      burger.classList.add("hamburger-active");
    }, 25);

    setTimeout(() => {
      // mobile nav active
      mobileActive();
    }, 325);

    // TUTUP burger menu -------------------------------------------------------//
  } else {
    setTimeout(() => {
      mobileDeactive();
    }, 25);

    setTimeout(() => {
      if (window.scrollY > 100) {
        navBlack();
      } else {
        navWhite();
      }

      // burger menu animation
      burger.classList.remove("hamburger-active");
    }, 325);

    setTimeout(() => {
      // mobile menu display none
      mobileMenu.classList.add("hidden");
    }, 200);
  }
});

// 2 - nav scroll bg-color change // =============================================================
document.addEventListener("scroll", () => {
  // ## merubah warna bg nav ketika scroll ##
  if (window.scrollY > 100) {
    // console.log("hitam");
    navBlack();

    Array.from(burgerLineArr).forEach((line) => {
      line.classList.remove("bg-black");
      line.classList.add("bg-white");
    });
  } else {
    // console.log("putih");
    navWhite();
    Array.from(burgerLineArr).forEach((line) => {
      line.classList.remove("bg-white");
      line.classList.add("bg-black");
    });
  }

  // ## close mobile nav ketika scroll ##
  if (!mobileMenu.classList.contains("hidden")) {
    console.log("hubahubahuba");
    setTimeout(() => {
      mobileDeactive();
    }, 25);

    setTimeout(() => {
      // burger menu animation
      burger.classList.remove("hamburger-active");
    }, 325);

    setTimeout(() => {
      // mobile menu display none
      mobileMenu.classList.add("hidden");
    }, 200);
  }
});
