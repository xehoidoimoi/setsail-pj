// todo set Height effect
const barsMenu = document.querySelector('.header__bars-btn');
const headerBarsList = document.querySelector('.header__bars-list');
// ? Option 1: Vanilla JS 
barsMenu.addEventListener('click', function (e) {
      console.log('object')
      if (headerBarsList.style.maxHeight) {
            headerBarsList.style.maxHeight = null;
            headerBarsList.style.borderBottom = '0';
      } else {
            headerBarsList.style.display = 'block';
            headerBarsList.style.overflow = 'scroll';
            headerBarsList.style.borderBottom = '1px solid #ebebeb';
            headerBarsList.style.maxHeight = headerBarsList.scrollHeight + 'px';
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

const headerBarsHeading = document.querySelectorAll('.header__bars-heading'); // get heading menu 
const subHeaderList = document.querySelectorAll('.sub-header__list'); // get sub-header list
const mobileArrow = document.querySelectorAll('.mobile-arrow i');

headerBarsHeading.forEach((item, index) => {
      const subHeaderListItem = subHeaderList[index]; // get sub-header item one by sub-header list
      const mobileArrowItem = mobileArrow[index];
      item.onclick = () => {
            const headerBarsHeadingHasActive = document.querySelector('.header__bars-heading.active-color');
            headerBarsHeadingHasActive.classList.remove('active-color');
            item.classList.add('active-color');
            if (subHeaderListItem.style.maxHeight) {
                  subHeaderListItem.style.maxHeight = null;
                  mobileArrowItem.style.transform = 'rotate(0deg)';
            } else {
                  subHeaderListItem.style.maxHeight = subHeaderListItem.scrollHeight + 'px';
                  mobileArrowItem.style.transform = 'rotate(90deg)';
                  headerBarsList.style.maxHeight = (headerBarsList.scrollHeight + 50) + 'px';
            }
      }
});

const subHeaderLinks = document.querySelectorAll('.sub-header__link');
subHeaderLinks.forEach((item) => {
      item.onclick = () => {
            const subHeaderLinkActive = document.querySelector('.sub-header__link.active-color');
            subHeaderLinkActive.classList.remove('active-color');
            item.classList.add('active-color');
      }
});

// todo Nav tabs Modal
const modalListBtn = document.querySelectorAll('.modal__list-btn');
console.log(modalListBtn);
modalListBtn.forEach((item) => {
      item.onclick = () => {
            const modalListBtnHasActive = document.querySelector('.modal__list-btn.active-2');
            modalListBtnHasActive.classList.remove('active-2');
            item.classList.add('active-2');
      }
})

// todo Slider Winter
const swiper = new Swiper("#slider-tour", {
      slidesPerView: 1,
      pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
      },
});



