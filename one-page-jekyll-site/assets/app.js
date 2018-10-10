---
---

{% include_relative _js/jquery.js %}
{% include_relative _js/bootstrap.min.js %}

$("nav a").click(function(){
	var id, target, new_position;

	id = $(this).attr('href');
	if ( id == "#" ) {
		target = $('html');
	} else {
		target = document.getElementById(id.substring(1));
	}
	new_position = $(target).offset().top;

	$('button.navbar-toggler').click();

	$('html, body').stop().animate({
		scrollTop: new_position
	},1000);
	return false;
});