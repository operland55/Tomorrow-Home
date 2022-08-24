const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;
let value = true;

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

function openOrderModal() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

function closeOrderModal() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark(e) {
  const [icon, countSpan] = this.children;  //[아이콘,span]
  let count = Number(countSpan.innerHTML.replace(',', ''))
  let newCount = count;

  if (this.classList.contains('is-active')) {
    // Note :활성화가 된 상태이니 -> 비활성화 (ic-bookmark)
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1;
  } else {
    // Note :비활성화가 된 상태이니 -> 활성화 (ic-bookmark-filled)
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1;
  }
  countSpan.innerHTML = newCount.toLocaleString();
  countSpan.setAttribute('aria-label', `북마크${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active');
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)


