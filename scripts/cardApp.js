$(document).ready(function () {
    var $face = $(".face");
    var $card = $(".card");
    var $cardWrapper = $(".card-wrapper");
    var $logo = $('.logo-wrapper')
    var $share = $(".shareIcon");
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

    var openIconRight = "26%"
    var $front, $inside, $back, $form;

    if ($('.card-wrapper .card').length == 1) $('.card-wrapper').css('width', '100%')

	$card.click(function() {
	    if($(this).attr("data-opened") === "1"){
            $(this).attr("data-opened", "0");
            onCloseCard($(this));
        } else {
            $(this).attr("data-opened", "1");
            $front = $(this).children(".front");
            $inside = $(this).children(".inside");
            $back = $(this).children(".back");
            $form = $(this).parent().children(".cardform");
            $openIcon = $(this).children(".openIcon");

            TweenMax.killTweensOf($front);
            TweenMax.killTweensOf($inside);
            TweenMax.killTweensOf($back);
            TweenMax.killTweensOf($form);
            TweenMax.killTweensOf($openIcon);

            TweenMax.to($front, .6, {rotationY:"-165_ccw", ease:Power2.easeIn});
            TweenMax.to($front, .0, {delay:.3, opacity:0, ease:Power0.easeNone});
            TweenMax.to($inside, .0, {delay:.3, opacity:1, ease:Power0.easeNone});
            TweenMax.to($inside, .6, {delay:.1,rotationY:"-165deg_ccw", ease:Power2.easeOut});
            TweenMax.to($back, .6, {delay:.2, rotationY:"-20_ccw", ease:Power2.easeOut});
            if (!isMobile) TweenMax.to($form, .6, {right:"-31%", opacity:1, ease:Power2.easeOut, onComplete:function(){$form.css('z-index',10);}});
			// TweenMax.to($openIcon, .6, {right:"40%", opacity:0, ease:Power2.easeOut});
        }
    });
    
    $share.click(function(e) {
	    e.stopPropagation();
	    TweenMax.to($(".cardBlackout"), .6, {left:"0%", ease:Power2.easeOut});
	    $(this).parent().parent().children(".cardform").fadeIn(600);
    });
    
    $(".cardform input[type=submit], .cardform button, .cardform .close").click(function(e) {
	    var $closeform = $(this).closest('.cardform');
	    if (isMobile) {
	    	TweenMax.to($(".cardBlackout"), .6, {left:"100%", ease:Power2.easeOut});
	    	$closeform.fadeOut(600);
	    } else {
		    TweenMax.to($closeform, .6, {right:"38%", opacity:0, ease:Power2.easeOut, startAt:{onComplete:function(){$closeform.css('z-index',0)}}});
	    }
    });
    
    function cardsTilt() {
		$card.attr("data-opened", "0");
        $front = $card.children(".front");
        $inside = $card.children(".inside");
        $back = $card.children(".back");
        $openIcon = $card.children(".openIcon");
        
        TweenMax.killTweensOf($front);
        TweenMax.killTweensOf($inside);
        TweenMax.killTweensOf($openIcon);

        TweenMax.to($front, .3, {rotationY:"-25_ccw", ease:Power0.easeNone});
        TweenMax.to($inside, .3, {rotationY:"0_cw", opacity:0, ease:Power2.easeOut});
        // TweenMax.to($openIcon, .3, {right:openIconRight, opacity:1, ease:Power2.easeOut});

	};
    
    function onCloseCard (e) {
        $front = e.children(".front");
        $inside = e.children(".inside");
        $back = e.children(".back");
        $form = e.parent().children(".cardform");
        $openIcon = e.children(".openIcon");

        TweenMax.killTweensOf($front);
        TweenMax.killTweensOf($inside);
        TweenMax.killTweensOf($back);
        TweenMax.killTweensOf($form);
        TweenMax.killTweensOf($openIcon);

        TweenMax.to($inside, .6, {rotationY:"0_cw", ease:Power0.easeNone});
        TweenMax.to($front, .6, {delay:.1, rotationY:"-25_cw", ease:Power2.easeOut});
        TweenMax.to($back, .6, {rotationY:"0_cw", ease:Power2.easeOut});
        // TweenMax.to($openIcon, .6, {right:openIconRight, opacity:1, ease:Power2.easeOut});
		if (!isMobile) TweenMax.to($form, .6, {right:"38%", opacity:0, ease:Power2.easeOut, startAt:{onComplete:function(){$form.css('z-index',0)}}});

        if($inside.css('opacity') === "1"){
            TweenMax.to($inside, 0, {delay:.3, opacity:0, ease:Power0.easeNone});
            TweenMax.to($front, 0, {delay:.3, opacity:1, ease:Power0.easeNone});
        }
    }
    
    function drawScreen(){

        // $card.height();
        $card.css('-webkit-perspective', ""+ Math.round($card.width()+500) + "px");
        $card.css('-moz-perspective', ""+ Math.round($card.width()+500) + "px");
        $card.css('-ms-perspective', ""+ Math.round($card.width()+500) + "px");
        if ($logo) $logo.css('height', $(window).height()-$('.logo-wrapper').position().top)
        $cardWrapper.css('height', $(window).height())
        $('.card').css('marginTop', $(window).height() / 2 - ($('.card').height() + 100) / 2)

        requestAnimationFrame(drawScreen);
        
    }
	
	cardsTilt();
    drawScreen();
    
});