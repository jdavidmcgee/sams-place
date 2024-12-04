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

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', e => {
    const isFront = e.target.closest('.card-front'); // Check if click is on front
		const isBack = e.target.closest('.card-back'); // Check if click is on back
    
		if (isBack) {
      // If clicked on the back, toggle the flipped state to flip it back
			card.classList.remove('flipped');
		} else if (isFront) {
      // If clicked on the front, flip the card and reset others
			document.querySelectorAll('.card').forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('flipped');
				}
			});
      
			card.classList.add('flipped');
		}
	});
});


// set year
// date.innerHTML = new Date().getFullYear();
