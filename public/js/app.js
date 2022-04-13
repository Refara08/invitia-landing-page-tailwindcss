// ### Variables ### =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=--
const burger = document.querySelector("#hamburger");
const burgerLineArr = burger.children;
const mobileMenu = document.querySelector("#menu-mobile");
const desktopMenu = document.querySelector("#menu-desktop");
const nav = document.querySelector("#nav");
const signInDesktop = document.querySelector("#sign-in-desktop");
const logoTextLeft = document.querySelector("#logo-text-left");
const logoTextRight = document.querySelector("#logo-text-right");
const cardParent = document.querySelector("#card-parent");

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

  // nav desktop
  desktopMenu.classList.add("text-white");

  // sign in desktop
  signInDesktop.classList.remove("sign-in-desktop");
  signInDesktop.classList.add("sign-in-desktop-scroll");
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

  // sign in desktop
  signInDesktop.classList.remove("sign-in-desktop-scroll");
  signInDesktop.classList.add("sign-in-desktop");
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

// ## card fitur algorithm ##

const clickCardFiturAuto = (currCardIndex) => {
  let cardNumsTop = [0, 1, 2, 3];
  let cardNumsBot = [4, 5, 6, 7, 8];

  // hilangin card expand dari semua card
  Array.from(cardParent.children).forEach((cardElement) => {
    cardElement.classList.remove("card-expand");
  });

  // console.log(cardNums);

  // pasang card expand ke card yg di klik dan keluarin dari array
  cardParent.children[currCardIndex].classList.add("card-expand");

  // kalo ngeklik card baris atas
  if (currCardIndex <= 3) {
    // keluarin currCardIndex dari arr cardnumstop
    cardNumsTop.splice(currCardIndex, 1);

    // ambil random number, masing2 satu dari cardNumsTop dan cardNumsBot
    let n = [];
    n.push(cardNumsTop[Math.floor(Math.random() * cardNumsTop.length)]);
    n.push(cardNumsBot[Math.floor(Math.random() * cardNumsBot.length)]);

    console.log(n);

    // pake nomor yang udah masuk di array n
    // dan pake buat ambil card dengan index dari arr n
    n.forEach((i) => {
      cardParent.children[i].classList.add("card-expand");
    });

    // kalo ngeklik card baris bawah
  } else if (currCardIndex > 3) {
    // keluarin currCardIndex dari arr cardnumsbot
    cardNumsBot.splice(currCardIndex, 1);

    // ambil DUA random number dari cardNumsTop
    let n = [];
    for (let i = 0; i < 2; i++) {
      let rand = Math.floor(Math.random() * cardNumsTop.length);
      n.push(cardNumsTop[rand]);
      cardNumsTop.splice(rand, 1);
    }
    console.log(n);

    // pake nomor yang udah masuk di array n
    // dan pake buat ambil card dengan index dari arr n
    n.forEach((i) => {
      cardParent.children[i].classList.add("card-expand");
    });
  }
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
      burger.classList.remove("burger-deactive");
      burger.classList.add("burger-active");
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
      burger.classList.remove("burger-active");
      burger.classList.add("burger-deactive");
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
      burger.classList.remove("burger-active");
      burger.classList.add("burger-deactive");
    }, 325);

    setTimeout(() => {
      // mobile menu display none
      mobileMenu.classList.add("hidden");
    }, 200);
  }
});

// 3 - fitur card mobile slider // =============================================================

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(cardNums);

cardParent.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("card")) {
    let card = e.target.parentElement;
    let currCardIndex = parseInt(card.id.split("-")[1]);

    if (!card.classList.contains("card-expand")) {
      clickCardFiturAuto(currCardIndex);
    }
  } else if (e.target.parentElement.parentElement.classList.contains("card")) {
    card = e.target.parentElement.parentElement;
    currCardIndex = card.id.split("-")[1];

    if (!card.classList.contains("card-expand")) {
      clickCardFiturAuto(currCardIndex);
    }
  }
});
