
// loader
let load = document.querySelector('.loader');
function loader() {
    load.style.display = 'none';
};
//menu
let menu = document.querySelector('#menu');
let nav = document.querySelector('nav')
let  cross= document.querySelector('#cross');
menu.addEventListener( 'click', () => {
    nav.classList.add('nav_after');

})
cross.addEventListener( 'click', () => {
    nav.classList.remove('nav_after');

})

// typed
let typed = new Typed('#element', {
    stringsElement: '#typed',
    typeSpeed: 100,
    startDelay: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  loopCount: Infinity,

  });