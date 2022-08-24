const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;


const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

function orderOpenButton() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

function orderCloseButton() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderCtaBuyButton.addEventListener('click', orderOpenButton)
orderModalOverlay.addEventListener('click', orderCloseButton)