$('.tab').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
    	$('.tab').removeClass('active')
        $(this).addClass('active')

        // if($(this).hasClass('photo-button')){
        // 	$('.album-container').hide(1000);
        // 	$('.photo-container').show(1000);
        // }
        // else if ($(this).hasClass('album-button')) {
        // 	$('.album-container').show(1000);
        // 	$('.photo-container').hide(1000);
        // }
    }
});

$('.following-status').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
        $(this).text('following')
    } else {
        $(this).addClass('active')
        $(this).text('follow')
    }
});