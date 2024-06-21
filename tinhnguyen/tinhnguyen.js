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

//chiều cao filler
function setFillerHeight() {
	const mainWrapperHeight =
		document.querySelector(".nav-container").offsetHeight;
	document.querySelector(".filler").style.height = mainWrapperHeight + "px";
}

window.addEventListener("load", setFillerHeight);
window.addEventListener("resize", setFillerHeight);

//back-to-top
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
