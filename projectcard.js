var gall = document.querySelector("#gall");
var getVal = function (elem, style) {
	return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
	return item.querySelector(".content").getBoundingClientRect().height;
};
var resizeAll = function () {
	var altura = getVal(gall, "grid-auto-rows");
	var gap = getVal(gall, "grid-row-gap");
	gall.querySelectorAll(".gall-item").forEach(function (item) {
		var el = item;
		el.style.gridRowEnd =
			"span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
	});
};
gall.querySelectorAll("img").forEach(function (item) {
	item.classList.add("byebye");
	if (item.complete) {
		console.log(item.src);
	} else {
		item.addEventListener("load", function () {
			var altura = getVal(gall, "grid-auto-rows");
			var gap = getVal(gall, "grid-row-gap");
			var gitem = item.parentElement.parentElement;
			gitem.style.gridRowEnd =
				"span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
			item.classList.remove("byebye");
		});
	}
});
window.addEventListener("resize", resizeAll);
gall.querySelectorAll(".gall-item").forEach(function (item) {
	item.addEventListener("click", function () {
		item.classList.toggle("full");
	});
});
