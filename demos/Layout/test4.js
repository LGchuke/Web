(function() {
  var toggle = document.querySelector("#flexy-nav__toggle");
  var nav = document.querySelector("#flexy-nav__items");
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.contains("flexy-nav__items--visible") ?
      nav.classList.remove("flexy-nav__items--visible") :
      nav.classList.add("flexy-nav__items--visible");
  });
})();