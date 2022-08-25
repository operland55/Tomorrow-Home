const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button');
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('li .delete-button');



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

// 하나만 지우는  삭제클릭

function deleteSearchHistoryItem(e) {
  e.stopPropagation();  // 이벤트 전파를 막을 수 있다.
  const itemToDelete = this.parentNode;
  gnbSearchHistoryList.removeChild(itemToDelete);

  if (gnbSearchHistoryList.children.length == 0) {
    gnbSearchHistory.classList.remove('is-active')
  }
}

deleteButtonList.forEach(i => {
  i.addEventListener('click', deleteSearchHistoryItem)
})

deleteButton.addEventListener('click', deleteSearchHistoryItem)


deleteAllButton.addEventListener('click', deleteAllSearchHistories)