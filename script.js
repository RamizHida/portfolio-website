toggleMenu = () => {
  if (expand) {
    expand = false;
    menu.classList.remove('collapsed');
  } else {
    menu.classList.add('collapsed');
    menu.removeAttribute('collapsed');
    expand = true;
  }
};

let dropDown = document.querySelector('.menu-icon');
let menu = document.querySelector('.heading');
let headerContainer = document.querySelector('.heading--container');
let expand = true;

dropDown.addEventListener('click', (e) => {
  toggleMenu();
});

menu.addEventListener('click', () => {
  toggleMenu();
});
