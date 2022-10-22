const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navigation = document.querySelector(".navigation");
const navWrapper = document.querySelector(".navigation-wrapper");

document.addEventListener("DOMContentLoaded", () => {
	menu.addEventListener("click", () => {
		navigation.classList.add("open-nav");
		navWrapper.classList.add("review");
	});

	close.addEventListener("click", () => {
		navigation.classList.remove("open-nav");
		navWrapper.classList.remove("review");
	});

	navWrapper.addEventListener("click", () => {
		navigation.classList.remove("open-nav");
		navWrapper.classList.remove("review");
	});
});
