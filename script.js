document.addEventListener('DOMContentLoaded', function () {
	var burgerMenu = document.querySelector('.burger__menu');
	var dashboardSidebar = document.querySelector('.dashboard__sidebar');
	var sidebarLogoText = document.querySelector('.sidebar__logo-text');
	var body = document.body;

	burgerMenu.addEventListener('click', function (event) {
		burgerMenu.classList.toggle('active');
		dashboardSidebar.classList.toggle('active');
		sidebarLogoText.classList.toggle('active');
		body.classList.toggle('lock');
	});
});