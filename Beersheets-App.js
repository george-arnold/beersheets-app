$('.type-item, .QB-item, .team-item').on('click', function () {
	$(this).addClass('selected').siblings().removeClass('selected');
	console.log($(this).text());
});
