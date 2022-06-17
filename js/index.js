$(document).ready(function(){
    $('.slider').slick({
		infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    adaptiveHeight: true,
	    prevArrow: '.arrow-top',
	    nextArrow: '.arrow-bottom',
    });

    var $sliderItem = 1;

    $( ".arrow-bottom" ).click(function(){ 
	  	if ($sliderItem == 6) {
	  		$sliderItem = 1;
	  	} else {
	  		$sliderItem = $sliderItem + 1;
	  	}	  	
	    $(".slider-info-item").removeClass("active");
	    $('.slider-info-item:nth-child('+ $sliderItem +')').addClass("active");	
    });

    $( ".arrow-top" ).click(function(){ 
	  	if ($sliderItem == 1) {
	  		$sliderItem = 6;
	  	} else {
	  		$sliderItem = $sliderItem - 1;
	  	}	  	
	    $(".slider-info-item").removeClass("active");
	    $('.slider-info-item:nth-child('+ $sliderItem +')').addClass("active");
  });

});