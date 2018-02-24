function animate_skill_bars() {
	$('.bar').each(function() {
		var max = $(this).attr('width');
		$(this).animate({ width: max }, { duration: 2000 });
	});
}
