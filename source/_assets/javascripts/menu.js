$(function() {
	if($('#nav-menu').length) {
		$(".collapsibleListOpen, .collapsibleListClosed").toggleClass("collapsibleListOpen collapsibleListClosed");
		CollapsibleLists.applyTo(document.getElementById('nav-menu'));
	}

	$.ajax({
		url: "https://sendgrid.com/user/checkLogin",
		method: "GET",
		success: function (data) {
			if(data.logged_in === true){
				$("body").removeClass("logged-out");
				$("body").addClass("logged-in");
			}
		},
		dataType: "jsonp"
	});

	$('#nav-menu').click(function (e) {
		if(e.target == this){
			$(this).toggleClass("shown");
		}
	});

});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
