const barsMenu = document.querySelector('.header__bars-btn');
const headerBarsList = document.querySelector('.header__bars-list')
console.log(headerBarsList);
barsMenu.addEventListener('click', function (e) {
      console.log('object')
      if (headerBarsList.style.maxHeight) {
            headerBarsList.style.maxHeight = null;
      } else {
            headerBarsList.style.display = 'block';
            headerBarsList.style.overflow = 'hidden';
            headerBarsList.style.maxHeight = headerBarsList.scrollHeight + 'px';
      }
})