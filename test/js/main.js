$(document).ready(function() {
	let tab = $('.choice-preview__item');

	tab.on('click', function(event) {
		event.preventDefault();

		$('a.choice-header__link').removeClass('choice-header__link_active');
		$('.tab-item_active').removeClass('tab-item_active');

		let data = $(this).attr('data-id');
		let target = $(this).children('a[data-toggle="tab"]').attr('href');

		$('html, body').animate({
			scrollTop: $('#choice').offset().top
		}, 500);

		$("a[href='#"+data+"'].choice-header__link").toggleClass('choice-header__link_active');
		$(target).toggleClass('tab-item_active');
	});

	let linkTab = $('.choice-header__link');

	linkTab.on('click', function(event) {
		event.preventDefault();

		$('a.choice-header__link').removeClass('choice-header__link_active');
		$('.tab-item_active').removeClass('tab-item_active');

		$(this).toggleClass('choice-header__link_active');

		let target = $(this).attr('href');
		$(target).toggleClass('tab-item_active');
	});
});
