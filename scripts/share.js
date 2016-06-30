var sharetext = "I just sent a greeting from the closet, find yours here. #PrideTO #Pride2015"
var loc = window.location.href;

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1466740540285047',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function validateEmail(email) {
	return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );
}

$(function() {
	$('.fbshare').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		FB.ui({
			method: 'share',
			href: loc,
		}, function(response){});
	});
	$('.fbsend').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var fbshareloc = "http://greetingsfromthecloset.com/" + $(this).attr('data-page');
		FB.ui({
			method: 'send',
			link: fbshareloc
		});
	});
	$('.twshare').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		window.open('http://twitter.com/share?url=' + loc + '&text=' + sharetext, 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	});
	
	$('.cardform form').on('submit', function(e) {
		var _self = $(this);
		e.preventDefault();
		e.stopPropagation();
		var data = $(this).serialize();
				
		$.ajax({
			url: "./api/send/index.php",
			data: data,
			type: "POST",
			dataType: "json",
			complete: function(jqxhr, status) {
				_self.reset();
			}
		});

	});
});