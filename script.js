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

function addShadowEffect() {
	document.querySelectorAll(".card").forEach((box) => {
		box.addEventListener("mouseover", () => {
			box.querySelector(".card-info").classList.toggle("shadow-effect");
			box.querySelector(".pic").classList.toggle("tilt");
		});
		box.addEventListener("mouseout", () => {
			box.querySelector(".card-info").classList.toggle("shadow-effect");
			box.querySelector(".pic").classList.toggle("tilt");
		});
	});
}

addShadowEffect();
