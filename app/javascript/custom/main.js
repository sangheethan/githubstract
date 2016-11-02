let toggleDropDown = function(event) {	
	let dropDown = $('.dropdown-menu');
	if(event.type == 'click' && event.target.value.length > 0 || event.keyCode == 13) {
		if(!dropDown.is(":visible")) {	
			dropDown.fadeIn("slow");		
		}
	}
}
$(document).click(function(event) {
	if(event.target.className != 'searchRepository') $('.dropdown-menu').fadeOut("slow");
});