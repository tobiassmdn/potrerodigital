(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function volverAtras(){
	window.history.back();
}

function alphaOnly(event) {
	var value = String.fromCharCode(event.which);
	var pattern = new RegExp(/[a-zA-Z]/i);
	return pattern.test(value);
 }

 $('#input').bind('keypress', alphaOnly);