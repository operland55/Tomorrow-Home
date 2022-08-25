const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button');

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length == 0) return; // list 자식이0개라면 기록창 열리지않게하는법

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}


function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistories() {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active')
}


deleteAllButton.addEventListener('click', deleteAllSearchHistories)