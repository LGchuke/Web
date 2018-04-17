let header = document.querySelector('.header');
let menu = document.querySelector('.menu');


// function toggleClassMenu() {
//   menu.classList.add('menu--animatable');
//   menu.classList.add('menu--visible');
//   menu.addEventListener('transitionend', onTransitionEnd, false);
// }

function toggleClassMenu() {
	menu.classList.add("menu--animatable");
	if(!menu.classList.contains("menu--visible")) {
		menu.classList.add("menu--visible");
	} else {
		menu.classList.remove('menu--visible');
	}
}

function onTransitionEnd() {
  menu.classList.remove('menu--animatable');
}

menu.addEventListener('transitionend', onTransitionEnd, false);

header.addEventListener('click', toggleClassMenu, false);
menu.addEventListener("click", toggleClassMenu, false);
