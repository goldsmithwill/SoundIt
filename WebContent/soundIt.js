var stars = [ "red", "orange", "yellow", "lime", "green", ]

window.onload = function() {
//	visualize();
	// var colors = ["red", "green", "blue"];
	// for (var i = 0; i < 10; i++) {
	// setTimeout(function(){ document.getElementById("body").style.background =
	// colors[i % 3]; }, 1000);
	// }
};

function highlightStar(starNum) {
	// alert(starNum);
	var starId = "";
	var star;
	for (var i = 1; i <= 5; i++) {
		starId = i + "star";
		star = document.getElementById(starId);
		if (i <= starNum) {
			star.src = "images/stars/" + stars[starNum - 1] + "_star.png";
		} else {
			star.src = "images/stars/blank_star.png";
		}
	}
}

