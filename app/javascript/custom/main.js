let toggleDropDown = function(element) {	
	let dropDown = $('.dropdown-menu');
	if(element.target.value.length > 0 || element.keyCode == 13) {
		if(!dropDown.is(":visible")) {	
			dropDown.fadeIn("slow");		
		}
	}
}
$(document).click(function(event) {
	if(event.target.className != 'searchRepository') $('.dropdown-menu').fadeOut("slow");
});