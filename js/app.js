const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

document.querySelectorAll('.project').forEach(project => {
	project.addEventListener('click', () => {
		const isActive = project.classList.contains('active');
		// Remove active class from all projects
		document
			.querySelectorAll('.project')
			.forEach(p => p.classList.remove('active'));
		// Toggle active class on the clicked project
		if (!isActive) project.classList.add('active');
	});
});
