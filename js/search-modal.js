const searchModal = document.querySelector('.search-modal');
const searchButton = document.querySelector('.gnb-icon-button.is-search.lg-hidden')
const searchOverlay = document.querySelector('.overlay')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

searchButton.addEventListener('click', openSearchModal)


function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}
searchModalCloseButton.addEventListener('click', closeSearchModal)