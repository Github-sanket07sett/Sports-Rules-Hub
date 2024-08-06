function toggleMobileMenu(){
	document.getElementById("Menu").classList.toggle("active");
}
document.querySelector('.back-to-top').addEventListener('click', function(e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});