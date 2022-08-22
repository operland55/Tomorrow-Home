
const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true, //자동으로 슬라이드
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,


  // items: 3,
  // slideBy: 'page',
  // navContainer는 네비게이션이다 즉 이 버튼을누르면 container slider-list로 넘어갈것이다
});

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  gutter: 4,  //slide할 item의 간격을 주는것  4라고적으면 px가 따로붙는다
  edgePadding: 16, //가장끝에 패딩을주는것
  controls: false,  // 위에 next prev가있는데 그걸 없애주는것 false로하면사라진다
  navContainer: '.user-gallery.is-mobile  .thumbnail-list',
  navAsThumbnails: true,
  loop: false, //무한슬라이더가 보기싫으면 false로바꿔주자
  arrowKeys: true, // 키보드 이동키로 움직일수있다
  preventScrollOnTouch: true,


})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  gutter: 6,  //slide할 item의 간격을 주는것  4라고적으면 px가 따로붙는다
  edgePadding: 75, //가장끝에 패딩을주는것
  controls: true,  // 위에 next prev가있는데 그걸 없애주는것 false로하면사라진다
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  loop: false, //무한슬라이더가 보기싫으면 false로바꿔주자
  arrowKeys: true, // 키보드 이동키로 움직일수있다
  preventScrollOnTouch: true,

})