var opener = document.querySelector('.menu-opener');
var menu = document.querySelector('.menu');

function clickHandler(event) {
    console.log('Opener was clicked');
    menu.classList.toggle('is-active');
}

opener.addEventListener('click', clickHandler);