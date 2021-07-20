$('.post-content-container').on("click", function(){
	title = $(this).find('.post-header').text();
	image = $(this).find('.post-image').html();
	content = $(this).find('.post-body').text();
	$('.modal-title').html(
		title
		);
	$('.modal-body').html(
		image
		);
	$('.modal-footer').html(
		content
		);
	console.log('selected')
});