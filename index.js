const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "vertical",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Filler
function setFillerHeight() {
	const mainWrapperHeight =
		document.querySelector(".nav-container").offsetHeight;
	document.querySelector(".filler").style.height = mainWrapperHeight + "px";
}

window.addEventListener("load", setFillerHeight);
window.addEventListener("resize", setFillerHeight);

//Chiều ngang slide
function adjustCarouselItemsHeight() {
	const items = document.querySelectorAll("swiper-slide");
	const viewportWidth = window.innerWidth;
	const itemHeight = (4 / 9) * viewportWidth;

	items.forEach((item) => {
		item.style.height = itemHeight + "px";
	});
}

window.addEventListener("load", adjustCarouselItemsHeight);
window.addEventListener("resize", adjustCarouselItemsHeight);

// Hàm đếm số
function countUp(element) {
	let start = 0;
	const end = parseInt(element.getAttribute("data-count"), 10);
	const duration = 4000; // thời gian đếm (ms)
	const increment = Math.ceil(end / (duration / 16)); // tính toán bước nhảy

	function updateCounter() {
		start += increment;
		if (start >= end) {
			element.textContent = end;
		} else {
			element.textContent = start;
			requestAnimationFrame(updateCounter);
		}
	}

	requestAnimationFrame(updateCounter);
}

// Intersection Observer
const observerOptions = {
	threshold: 0.5, // 50% phần tử trong khung nhìn
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			countUp(entry.target);
			observer.unobserve(entry.target); // Ngừng quan sát sau khi đếm
		}
	});
}, observerOptions);

document.querySelectorAll(".number").forEach((counter) => {
	observer.observe(counter);
});

document.addEventListener("DOMContentLoaded", function () {
	var backToTopButton = document.getElementById("back-to-top");

	// Hiển thị hoặc ẩn nút khi scroll
	window.addEventListener("scroll", function () {
		if (window.scrollY > 300) {
			// Số 300 là vị trí xuống trang web
			backToTopButton.style.display = "block";
		} else {
			backToTopButton.style.display = "none";
		}
	});

	// Thực hiện cuộn lên đầu khi click vào nút
	backToTopButton.addEventListener("click", function (e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
