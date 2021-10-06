// const sass = require('sass');
// const result = sass.renderSync({ file: "style.scss" });
// console.log(result.css.toString());


const barsMenu = document.querySelector('.header__bars-btn');
const headerBarsList = document.querySelector('.header__bars-list');
console.log(headerBarsList);
barsMenu.addEventListener('click', function (e) {
      console.log('object')
      if (headerBarsList.style.maxHeight) {
            headerBarsList.style.maxHeight = null;
      } else {
            headerBarsList.style.display = 'block';
            headerBarsList.style.overflow = 'scroll';
            headerBarsList.style.maxHeight = headerBarsList.scrollHeight + 'px';
      }
});

const headerBarsHeading = document.querySelectorAll('.header__bars-heading');
console.log(headerBarsHeading);
const subHeaderList = document.querySelectorAll('.sub-header__list');
console.log(subHeaderList);
const mobileArrow = document.querySelectorAll('.mobile-arrow i');
console.log(mobileArrow)

headerBarsHeading.forEach((item, index) => {
      const subHeaderItem = subHeaderList[index];
      const mobileArrowItem = mobileArrow[index];
      item.onclick = () => {
            item.style.color = '#3fd0d4';
            console.log([item])
            if (subHeaderItem.style.maxHeight) {
                  subHeaderItem.style.maxHeight = null;
                  mobileArrowItem.style.transform = 'rotate(0deg)';
            } else {
                  subHeaderItem.style.maxHeight = subHeaderItem.scrollHeight + 'px';
                  mobileArrowItem.style.transform = 'rotate(90deg)';
                  headerBarsList.style.maxHeight = (headerBarsList.scrollHeight + 50) + 'px';
            }
      }
});