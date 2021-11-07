// todo set Height effect
const barsMenu = document.querySelector(".header__bars-btn");
const headerBarsList = document.querySelector(".header__bars-list");
// ? Option 1: Vanilla JS
barsMenu.addEventListener("click", function (e) {
      console.log("object");
      if (headerBarsList.style.maxHeight) {
            headerBarsList.style.maxHeight = null;
            headerBarsList.style.borderBottom = "0";
      } else {
            headerBarsList.style.display = "block";
            headerBarsList.style.overflow = "scroll";
            headerBarsList.style.borderBottom = "1px solid #ebebeb";
            headerBarsList.style.maxHeight = headerBarsList.scrollHeight + "px";
      }
});
//? Option 2: JQuery
// $(document).ready(function () {
//       $(".header__bars-btn").click(function () {
//             $(".header__bars-list").animate({
//                   height: 'toggle'
//             }, 'slow');
//       });
// });
// ? Option 3: JQuery
// $(document).ready(function () {
//       $(".header__bars-btn").click(function () {
//             $(".header__bars-list").slideToggle("slow");
//       });
// });

const headerBarsHeading = document.querySelectorAll(".header__bars-heading"); // get heading menu
const subHeaderList = document.querySelectorAll(".sub-header__list"); // get sub-header list
const mobileArrow = document.querySelectorAll(".mobile-arrow i");

headerBarsHeading.forEach((item, index) => {
      const subHeaderListItem = subHeaderList[index]; // get sub-header item one by sub-header list
      const mobileArrowItem = mobileArrow[index];
      item.onclick = () => {
            const headerBarsHeadingHasActive = document.querySelector(
                  ".header__bars-heading.active-color"
            );
            headerBarsHeadingHasActive.classList.remove("active-color");
            item.classList.add("active-color");
            if (subHeaderListItem.style.maxHeight) {
                  subHeaderListItem.style.maxHeight = null;
                  mobileArrowItem.style.transform = "rotate(0deg)";
            } else {
                  subHeaderListItem.style.maxHeight = subHeaderListItem.scrollHeight + "px";
                  mobileArrowItem.style.transform = "rotate(90deg)";
                  headerBarsList.style.maxHeight = headerBarsList.scrollHeight + 50 + "px";
            }
      };
});

const subHeaderLinks = document.querySelectorAll(".sub-header__link");
subHeaderLinks.forEach((item) => {
      item.onclick = () => {
            const subHeaderLinkActive = document.querySelector(
                  ".sub-header__link.active-color"
            );
            subHeaderLinkActive.classList.remove("active-color");
            item.classList.add("active-color");
      };
});

// todo Nav tabs Modal
const modalListBtn = document.querySelectorAll(".modal__list-btn");
console.log(modalListBtn);
modalListBtn.forEach((item) => {
      item.onclick = () => {
            const modalListBtnHasActive = document.querySelector(
                  ".modal__list-btn.active-2"
            );
            modalListBtnHasActive.classList.remove("active-2");
            item.classList.add("active-2");
      };
});

// todo Slider Tour
const swiperTour = new Swiper("#slider-tour", {
      speed: 600,
      slidesPerView: "auto",
      pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
      },
      autoplay: {
            delay: 5000,
      },
      loop: true,
      //* Responsive breakpoints
      breakpoints: {
            //? when window width is >= 768px
            768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
            },
            //? when window width is >= 1024px
            1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 25,
                  pagination: {
                        dynamicBullets: true,
                  },
            },
      }
});

// todo Slider Top Review
const swiperTopReview = new Swiper("#top-review", {
      speed: 1200,
      spaceBetween: 15,
      slidesPerView: 1,
      autoplay: {
            delay: 5000,
      },
      loop: true,

      //*  Responsive breakpoints
      breakpoints: {
            //?  when window width is >= 768px
            768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 25,
                  pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                  },
            },
            //? when window width is >= 1024px
            1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 25,
                  pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                  },
            },
      }
});

// todo Slider Our team
const ourTeam = new Swiper("#our-team__slider", {
      speed: 600,
      slidesPerView: "auto",
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "bullets",
      //   clickable: true,
      // },
      autoplay: {
            delay: 5000,
      },
      loop: true,
      // Responsive breakpoints
      breakpoints: {
            // when window width is >= 768px
            768: {
                  slidesPerView: 2,
            }
      }
});

// todo Count up
$(".counter").countUp({
      time: 1000,
      delay: 20,
});

// todo Nav top
const navTop = document.querySelector('.nav-top');
const navHeader = document.querySelector('#header');
console.log(navHeader)
// * Scroll to top when clicked
navTop.onclick = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}
// * Auto hide/show when scroll
window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navTop.style.display = 'block';
            // navHeader.style.top = '0';
      } else {
            navTop.style.display = 'none';
            // navHeader.style.top = '-50px';
      }
}
// todo Auto show Nav header when scroll
let lastScrollTop = 0;
const headerMenu = document.querySelector('.header');
window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > lastScrollTop) {//scroll down
            headerMenu.style.position = 'relative';
            headerMenu.style.transform = 'translateY(-100%)';
            headerMenu.parentElement.style.marginBottom = 0 + 'px';
      } else {//scroll up
            headerMenu.style.position = 'fixed';
            headerMenu.style.transform = 'none';
            headerMenu.parentElement.style.marginBottom = 69 + 'px';
            // console.log('scroll up')
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}
