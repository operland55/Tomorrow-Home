const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

console.log(myMenuButton)
function toggleMenu() {
  if (myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)

  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMenu)


function closeMyMenuOnClickingOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)

  }

}
