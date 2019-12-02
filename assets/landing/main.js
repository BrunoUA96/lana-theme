$('a.scroll-to').on('click', function (e) {
	e.preventDefault();
	$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top - 0)}, 600);
});

$('label._checkbox').on('click',function(){
	if($(this).find('i').hasClass('fa fa-circle-thin')){
		$(this).find('i').removeClass('fa fa-circle-thin');
		$(this).find('i').addClass('fa fa-check-circle');
	} else {
		$(this).find('i').removeClass('fa fa-check-circle');
		$(this).find('i').addClass('fa fa-circle-thin');
	}
});

$('._c').css('color', function() {
	return $(this).data('color');
});

$('._bgc').css('background-color', function() {
	return $(this).data('bgcolor');
});

$('._pr').css('top', function() {
	if($(this).data('top')){
		return $(this).data('top');
	}
});

$('._pr').css('right', function() {
	if($(this).data('right')){
		return $(this).data('right');
	}
});

$('._pr').css('bottom', function() {
	if($(this).data('bottom')){
		return $(this).data('bottom');
	}
});

$('._pr').css('left', function() {
	if($(this).data('left')){
		return $(this).data('left');
	}
});

//

$('._pa').css('top', function() {
	if($(this).data('top')){
		return $(this).data('top');
	}
});

$('._pa').css('right', function() {
	if($(this).data('right')){
		return $(this).data('right');
	}
});

$('._pa').css('bottom', function() {
	if($(this).data('bottom')){
		return $(this).data('bottom');
	}
});

$('._pa').css('left', function() {
	if($(this).data('left')){
		return $(this).data('left');
	}
});