const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchInput = gnbSearch.querySelector('input')

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}
// console.log(gnbSearch.classList.contains('.input-group'))
function openGnbSearchHistory() {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}



gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
