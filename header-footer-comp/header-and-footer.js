// footer animation
window.addEventListener("scroll", function () {
	var elements = document.querySelectorAll(".animate");
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var bounding = element.getBoundingClientRect();
		if (bounding.top >= 0) {
			element.classList.add("animated");
		}
	}
});

// nav nav animation
function hamburgerClicked() {
	const navnav = document.querySelector(".nav-nav");
	navnav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", hamburgerClicked);
});
