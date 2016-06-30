$(document).ready(function () {
    
    var $face = $(".face");
    var $card = $(".card");

    var $front, $inside, $back;
    
    function cardsTilt() {

        $front = $card.children(".front");
        $inside = $card.children(".inside");
        $back = $card.children(".back");
		
        if($inside.css('opacity') === '1') {
            onCloseCard(e);
        } else {
            TweenMax.killTweensOf($front);
            TweenMax.killTweensOf($inside);
            TweenMax.killTweensOf($back);

            TweenMax.to($front, .3, {rotationY:"-20_ccw", ease:Power0.easeNone});
            TweenMax.to($inside, .3, {rotationY:"0_cw", opacity:0, ease:Power2.easeOut});
            TweenMax.to($back, .3, {rotationY:"0_ccw", ease:Power0.easeNone});
        }   
	};
    
    $card.click(function(e) {
	    if($(this).attr("data-opened") === "1"){
            $(this).attr("data-opened", "0");
            onCloseCard($(this));
        } else {
            $(this).attr("data-opened", "1");
            $front = $(this).children(".front");
            $inside = $(this).children(".inside");
            $back = $(this).children(".back");

            TweenMax.killTweensOf($front);
            TweenMax.killTweensOf($inside);
            TweenMax.killTweensOf($back);
            TweenMax.killTweensOf($(".bgcolor"));
            TweenMax.killTweensOf($(".displayFooterRule"));

            TweenMax.to($(".bgcolor"), .6, {width:(window.innerWidth), ease:Power2.easeOut});
            TweenMax.to($(".displayFooterRule"), .3, {opacity:1, ease:Power2.easeOut});
            $(this).parent().children(".face").css('left','50%');

            TweenMax.to($front, .6, {rotationY:"-165_ccw", ease:Power2.easeIn});
            TweenMax.to($front, .0, {delay:.3, opacity:0, ease:Power0.easeNone});
            TweenMax.to($inside, .0, {delay:.3, opacity:1, ease:Power0.easeNone});
            TweenMax.to($inside, .6, {delay:.1,rotationY:"-165deg_ccw", ease:Power2.easeOut});    
            TweenMax.to($back, .6, {delay:.2, rotationY:"-20_ccw", ease:Power2.easeOut});
        }
    });
    
    function onCloseCard (e) {
        $front = e.children(".front");
        $inside = e.children(".inside");
        $back = e.children(".back");

        TweenMax.killTweensOf($front);
        TweenMax.killTweensOf($inside);
        TweenMax.killTweensOf($back);
        TweenMax.killTweensOf($(".bgcolor"));
        TweenMax.killTweensOf($(".displayFooterRule"));

        TweenMax.to($(".bgcolor"), .6, {width:0, ease:Power2.easeOut});
        TweenMax.to($(".displayFooterRule"), .3, {opacity:0, ease:Power2.easeOut});
        $("#"+(e.target.parentElement.id)+"").children(".face").css('left','33%');

        TweenMax.to($inside, .6, {rotationY:"0_cw", ease:Power0.easeNone});
        TweenMax.to($front, .6, {delay:.1, rotationY:"0_cw", ease:Power2.easeOut});
        TweenMax.to($back, .6, {rotationY:"0_cw", ease:Power2.easeOut});

        if($inside.css('opacity') === "1"){
            TweenMax.to($inside, 0, {delay:.3, opacity:0, ease:Power0.easeNone});
            TweenMax.to($front, 0, {delay:.3, opacity:1, ease:Power0.easeNone});
        }
    }
    
    function drawScreen() {        
        $card.height(($face.height()) + 40);
        $card.css('-webkit-perspective', ""+ Math.round($card.width()+500) + "px");
        $card.css('-moz-perspective', ""+ Math.round($card.width()+500) + "px");
        $card.css('-ms-perspective', ""+ Math.round($card.width()+500) + "px");

        $('.bgcolor').height(window.innerHeight);
        
        requestAnimationFrame(drawScreen);
    }
	
	cardsTilt();
    drawScreen();
    
});