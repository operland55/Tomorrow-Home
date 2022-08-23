const drawerMenu = document.querySelectorAll('.drawer-menu');


for (let i = 0; i <= drawerMenu.length; i++) {
  drawerMenu[i].addEventListener('click', () => {
    drawerMenu[i].classList.toggle('is-open');
  })
}