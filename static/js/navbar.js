
$('.menu-toggle').click(function () {
	$(".nav").toggleClass("mobile-nav");
	$(this).toggleClass("is-active");
});

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-section");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});