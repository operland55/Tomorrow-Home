#내일의 집

### 1.GNB

- 로그인을 하지 않을 경우

```HTML

    <div class="button-group">
                <button
                class="gnb-icon-button is-search lg-hidden"
                type="button"
                aria-label="검색창 열기 버튼">
                  <i class="ic-search"></i>
                </button>

                <a
                class="gnb-icon-button"
                href="/"
                aria-label="장바구니 페이지로 이동">
                  <i class="ic-cart"></i>
                </a>

                <div class="gnb-auth sm-hidden">
                  <a href="/">로그인</a>
                  <a href="/">회원가입</a>
                </div>
              </div>
```

- 로그인을 했을 경우

```HTML

        <div class="button-group">
                <button
                class="gnb-icon-button is-search lg-hidden"
                type="button"
                aria-label="검색창 열기 버튼">
                  <i class="ic-search"></i>
                </button>

                <a
                class="gnb-icon-button sm-hidden"
                href="/"
                aria-label="스크랩 페이지로 이동">
                  <i class="ic-bookmark"></i>
                </a>

                <a
                class="gnb-icon-button sm-hidden"
                href="/"
                aria-label="내소식 페이지로 이동">
                  <i class="ic-bell"></i>
                </a>


                <a class="gnb-icon-button" href="/"
                 aria-label="장바구니 페이지로 이동">
                  <i class="ic-cart"></i>
                  <strong class="badge">1</strong>
                </a>

                <button 
                class="gnb-avatar-button sm-hidden"
                type="button" aria-label="">
                  <div class="avatar-32">
                    <img src="/assets/img/201671837_1280.jpg" alt="사달라아저씨">
                  </div>
                </button>

```