$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
 
        var id = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 800);
    });
    var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
    $(function(){

    $('.menuToggle').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
    });

    });
        $('.menu a').click(function() {

        $('.menu').removeAttr('style');

    });
});
});