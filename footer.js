window.addEventListener("scroll", function () {
	var elements = document.querySelectorAll(".animate");

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var bounding = element.getBoundingClientRect();
		var windowHeight =
			window.innerHeight || document.documentElement.clientHeight;

		if (bounding.top >= 0) {
			element.classList.add("animated");
		}
	}
});
