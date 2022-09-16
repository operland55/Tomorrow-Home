const buttonGroup = document.querySelector('.button-group');
const loginBtn = buttonGroup.querySelector('.login-btn');


const login = true;
const loginScreen = `<div class="button-group">
  <button class="gnb-icon-button is-search lg-hidden" type="button" aria-label="검색창 열기 버튼">
    <i class="ic-search"></i>
  </button>

  <button class="gnb-icon-button sm-hidden" href="/" aria-label="스크랩 페이지로 이동">
    <i class="ic-bookmark"></i>
  </button>

  <button  class="gnb-icon-button sm-hidden" href="/" aria-label="내소식 페이지로 이동">
    <i class="ic-bell"></i>
  </button>


  <button  class="gnb-icon-button" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">1</strong>
  </button>

  <div class="my-menu sm-hidden">
    <button class="my-menu-button" type="button" aria-label="">
      <img src="./assets/img/오타니프로필.jpg" alt="오타니">
    </button>

    <div class="my-menu-content">
      <ul class="my-menu-list">
        <li class="my-menu-item"><a href="/">마이페이지</a></li>
        <li class="my-menu-item"><a href="/">나의쇼핑</a></li>
        <li class="my-menu-item"><a href="/">이벤트</a></li>
        <li class="my-menu-item"><button>로그아웃</button></li>
      </ul>
    </div>
  </div>
</div>`

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (true) {
    buttonGroup.innerHTML = loginScreen;

  } else {

    login = true;
  }
})




