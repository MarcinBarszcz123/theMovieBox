var toTop = document.getElementById('toTop');

window.onscroll = function() {
	if (window.pageYOffset >= 400) {
		// console.log(window.pageYOffset);
		toTop.style.display = 'block';
		toTop.style.animation = 'fadeIn 1s';
	} else {
		toTop.style.display = 'none';
	}
};

toTop.onclick = function() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	toTop.style.animation = 'fadeOut 1s';
};
