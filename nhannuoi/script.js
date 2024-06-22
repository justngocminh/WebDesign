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

