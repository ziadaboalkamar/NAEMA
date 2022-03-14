$(function() {
	// var windowheight = $(window).height(),
	// 	navbar = $('.navbar').innerHeight();
	// $('.h1_h1').height(windowheight - navbar);
	// $('.carousel-inner').height(windowheight - navbar);
	$("._11").click(function (){
        $('html, body').animate({
        scrollTop: $(".feauters").offset().top
        }, 2000);
     });
});