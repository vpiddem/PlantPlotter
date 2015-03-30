// JavaScript Document
window.speechSynthesis.cancel();

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function colorize() {
	if (getUrlParameter('l1') == 'y') {
		$('#icon1').attr('src',  "images/location1.png");
	}
}
$( document ).ready(function() {
	colorize();    
});

jQuery(function () {
    jQuery(".icon_img").click(function (e) {
	if (e.target.id != 'icon1') {
		e.preventDefault();
		alert('That is not your current location. Try again');
	}
	});
});
