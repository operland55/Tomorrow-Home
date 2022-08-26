const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

let currentActive = productTab.querySelector('.is-active');

function toggleActiveTab() {
  const tabItem = this.parentNode;

  if (currentActive !== tabItem) {
    tabItem.classList.add('is-active');
    currentActive.classList.remove('is-active');
    currentActive = tabItem;
  }
}




productTabButtonList.forEach(button => {
  button.addEventListener('click', toggleActiveTab)
})