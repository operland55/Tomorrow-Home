
const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,


  // items: 3,
  // slideBy: 'page',
  // navContainer는 네비게이션이다 즉 이 버튼을누르면 container slider-list로 넘어갈것이다
});