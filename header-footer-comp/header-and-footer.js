const fadeInUpElements = document.querySelectorAll(".fade-in-up");

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
}

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top < window.innerHeight && rect.bottom > 0
//     );
// }

function handleScroll() {
	fadeInUpElements.forEach((element) => {
		if (isInViewport(element)) {
			element.classList.add("visible");
		}
	});
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);

// nav nav animation
function hamburgerClicked() {
	const navnav = document.querySelector(".nav-nav");
	navnav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", hamburgerClicked);
});
