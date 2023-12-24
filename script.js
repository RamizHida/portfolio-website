// let dropDown = document.querySelector('#menu-icon');
// let navigationMenu = document.querySelector('.navigation-list');
// let pageHeader = document.querySelector('.page_header');

// let expand = true;

// dropDown.addEventListener('click', () => {
//   if (expand) {
//     expand = false;
//     console.log('notexpanded');
//     navigationMenu.classList.add('collapsed');
//     pageHeader.classList.add('x');
//   } else {
//     console.log('expanded');
//     navigationMenu.classList.remove('collapsed');
//     expand = true;
//   }
// });

let dropDown = document.querySelector('.menu-icon');
let menu = document.querySelector('.heading');
let headerContainer = document.querySelector('.heading--container');
let expand = true;
dropDown.addEventListener('click', () => {
  console.log('p');
  if (expand) {
    expand = false;
    menu.classList.remove('collapsed');
  } else {
    menu.classList.add('collapsed');
    menu.removeAttribute('collapsed');
    expand = true;
  }
});
