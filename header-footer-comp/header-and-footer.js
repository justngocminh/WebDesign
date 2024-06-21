// Lấy tất cả các phần tử có lớp fade-in-up
const fadeInUpElements = document.querySelectorAll(".fade-in-up");

// Kiểm tra xem phần tử có nằm trong khung nhìn không
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

// Hàm kích hoạt hiệu ứng
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
