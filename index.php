<!doctype html>
<html>
<head>
<meta charset="UTF-8">

<meta property="og:site_name" content="Greetings from the Closet"/>
<meta property="og:url" content="http://greetingsfromthecloset.com/" />
<meta property="og:description" content="I just sent a greeting from the closet, find yours here. #PrideTO #Pride2015" />
<meta property="og:image" content="http://greetingsfromthecloset.com/img/SocialPost_Facebook_1200x630.jpg" /> 
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    
    
<title>Closet Cards</title>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="scripts/raf.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"></script>
<script src="scripts/cardApp.js"></script>
<script src="scripts/share.js"></script>
<link rel="stylesheet" href="css/cards.css">
</head>
<?php
	
$cards = array(
	1 => array(
		"front" => "ClosetCards_front_C01.jpg",
		"inside" => "ClosetCards_inside_C01.jpg",
		"back" => "ClosetCards_back_C01.jpg",
		"color" => "#64227E"
	),
	2 => array(
		"front" => "ClosetCards_front_C02.jpg",
		"inside" => "ClosetCards_inside_C02.jpg",
		"back" => "ClosetCards_back_C02.jpg",
		"color" => "#16237F"
	),
	3 => array(
		"front" => "ClosetCards_front_C03.jpg",
		"inside" => "ClosetCards_inside_C03.jpg",
		"back" => "ClosetCards_back_C03.jpg",
		"color" => "#0C4A22"
	),
	4 => array(
		"front" => "ClosetCards_front_C04.jpg",
		"inside" => "ClosetCards_inside_C04.jpg",
		"back" => "ClosetCards_back_C04.jpg",
		"color" => "#E89623"
	),
	5 => array(
		"front" => "ClosetCards_front_C05.jpg",
		"inside" => "ClosetCards_inside_C05.jpg",
		"back" => "ClosetCards_back_C05.jpg",
		"color" => "#D14B0F"
	),
	6 => array(
		"front" => "ClosetCards_front_C06.jpg",
		"inside" => "ClosetCards_inside_C06.jpg",
		"back" => "ClosetCards_back_C06.jpg",
		"color" => "#D60013"
	)
);

if (isset($_GET['card']) && isset($cards[$_GET['card']])) {
	$cards = array(
		$cards[$_GET['card']]
	);
}

?>
<body class="<? if (count($cards) == 1) echo 'shared' ?>">
    <div>
        <div class='cards row row-fluid'>
            <? if (count($cards) > 1) : ?>

                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 logo-wrapper">
                    <img class="logo" src="img/Website/PrideCards-HeaderLogo.png">
                    <img class="scroll-right" src="img/Website/scrollright.png">
                </div>

                <div class="col-lg-6 col-lg-offset-2 col-md-8 instructions-wrapper">
                    <img class="logo" src="img/Website/PrideCards-Instructions.png">
                </div>

			<? endif; ?>
            
            <? foreach ($cards as $key => $card) : ?>
    
                <div class="col-xs-12 col-md-5 card-wrapper">
                    <p>&nbsp;</p>
                    <div class="cardform">
	                    <div class="close">&times;</div>
	                    <h2>Share with Email</h2>
	                    <form action="#">
		                    <div class="row">
			                    <div class="col-xs-12 form-group">
				                    <div class="row">
					                    <div class="col-xs-12">
				                    		<label for="form1_fromname">Sender</label>
					                    </div>
				                    </div>
				                    <div class="col-xs-12 col-md-6"><input type="text" id="form1_fromname" name="from_name" class="form_fromname form-control" placeholder="Your Name"></div>
				                    <label class="sr-only" for="form1_fromemail">Your Email address</label>
				                    <div class="col-xs-12 col-md-6"><input type="email" id="form1_fromemail" name="from" class="form_fromemail form-control" placeholder="Your Email"></div>
			                    </div>
		                    </div>
		                    <div class="row">
			                    <div class="col-xs-12 form-group">
				                    <div class="row">
					                    <div class="col-xs-12">
				                    		<label for="form1_toname">Receiver</label>
					                    </div>
				                    </div>
				                    <div class="col-xs-12 col-md-6"><input type="text" id="form1_toname" name="toname" class="form_toname form-control" placeholder="Name"></div>
				                    <label class="sr-only" for="form1_toemail">Email address</label>
				                    <div class="col-xs-12 col-md-6"><input type="email" id="form1_toemail" name="to" class="form_toemail form-control" placeholder="Email"></div>
				                    <input type="hidden" name="url" class="form_url" value="http://greetingsfromthecloset.com/?card=<?=$key?>">
				                </div>
		                    </div>
		                    <div class="row">
			                    <div class="col-xs-12"><input type="submit" class="btn full-size" value="Send"></div>
		                    </div>
	                    </form>
	                    <div class="row">
		                    <div class="col-xs-12"><p class="text-center">or</p></div>
	                    </div>
	                    <div class="row">
		                    <div class="col-xs-12"><button class="btn full-size fbsend" data-page="?card=<?=$key?>">Send to a friend on Facebook</div>
	                    </div>
                    </div>
                    <div class='card'>
                        <div class='front face'>
                            <img class="cardFace" src="img/<?=$card['front']?>" />
                        </div>
                        <div class='inside face'>
                            <img class="cardFace" src="img/<?=$card['inside']?>" />
                        </div>
                        <div class="back face">
                            <img class="cardFace" src="img/<?=$card['back']?>" />
                        </div>
                        <img src="img/cardCover.png" class="cardCover" />
                        <img src="img/PrideCards-OpenCardIcon.png" class="openIcon" />
                        <? if (count($cards) > 1) : ?>
                        <img src="img/ClosetCards_Tab_Share.png" class="shareIcon" />
                        <? endif; ?>
                    </div>
                    <div class="cardBlackout" style="background-color: <?=$card['color']?>">&nbsp;</div>
                </div>
            <? endforeach; ?>

            <? if (count($cards) == 1) : ?>
            <div class="row shared-footer" style="background-color: <?=$card['color']?>">
                <div class="col-xs-3">
                    <img class="twshare" src="img/DisplaySite/twitFtrBtn.png" style="max-width: 45%" />
                    <img class="fbshare" src="img/DisplaySite/FBFtrBtn.png" style="max-width: 45%" />
                </div>
                <div class="col-xs-9">
                    <p style="height: 7px; margin: 0; padding: 0;">&nbsp;</p>
                    <a href="/"><img src="img/DisplaySite/PrideCards-Display_LogoLockUp.png" style="max-width: 100%"/></a>
                </div>
            </div>
            <? endif; ?>
        </div>
    </div>
    <script>
    	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
		ga('create', 'UA-64528318-1', 'auto');
		ga('require', 'displayfeatures');
		ga('send', 'pageview');
    </script>
</body>
</html>