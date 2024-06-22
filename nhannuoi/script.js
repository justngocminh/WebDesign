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
window.addEventListener("scroll", function () {
    var element = document.getElementsByClassName("top-nav")[0];
    if (element) { 
        if (window.scrollY > 0) { 
            element.style.display = "none"; 
        } else {
             element.style.display = "flex"; 
        }
    }
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

