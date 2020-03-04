$(document).ready(function() {
	let linkTab = $('.choice-preview__link');

	linkTab.on('click', function(event) {
		event.preventDefault();

		$('.tab-item_active').removeClass('tab-item_active');
		$('.choice-preview').css('background', '#F3F2DA')

		let target = $(this).attr('href');
		
		$(target).toggleClass('tab-item_active'); 

		$(this).children('.choice-preview__arrow')
					.toggleClass('choice-preview__arrow_active');
	});
});