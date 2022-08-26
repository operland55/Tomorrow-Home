const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;


let currentActive = productTab.querySelector('.is-active');

function toggleActiveTab() {
  const tabItem = this.parentNode;

  if (currentActive !== tabItem) {
    tabItem.classList.add('is-active');
    currentActive.classList.remove('is-active');
    currentActive = tabItem;
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth > 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}


productTabButtonList.forEach(button => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})