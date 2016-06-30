<?php
	
require_once '../../vendor/autoload.php';

$response = array(
	'status' => 'fail',
	'data' => array(),
	'error' => array(
		'code' => 0,
		'message' => ''
	)
);

function clean_string($string) {
	return trim(strip_tags($string));
}

$from = clean_string($_POST['from']);
$from_name = clean_string($_POST['from_name']);
$to = clean_string($_POST['to']);
$to_name = clean_string($_POST['to_name']);
$url = (strpos($_REQUEST['url'], "http://greetingsfromthecloset.com/") === 0) ? $_REQUEST['url'] : "http://greetingsfromthecloset.com/";

error_log(print_r($_POST, 1));

try {
	$mandrill = new Mandrill('6HZmFDDPBE1oNg4uCuGEwg');
	$message = array(
		'html' => '<a href="'.$url.'"><img src="cid:genvelope" alt=""This card was chosen just for you, the words inside may change your view. Click to open."></a>',
		'text' => 'This card was chosen just for you, the words inside may change your view. Click the url to open. ' . $url,
		'subject' => 'I have something to tell you',
		'from_email' => $from,
		'from_name' => $from_name,
		'to' => array(
			array(
				'email' => $to,
				'name' => $to_name,
				'type' => 'to'
			)
		),
		'signing_domain' => 'greetingsfromthecloset.com',
		'headers' => array('Reply-To' => $from),
		'track_opens' => true,
		'images' => array(
			array(
				'type' => 'image/png',
				'name' => 'genvelope',
				'content' => base64_encode(file_get_contents("email.png"))
			)
		)
	);
	$async = false;
	$result = $mandrill->messages->send($message, $async, null, null);
	$response = array(
		'status' => 'success',
		'data' => $result,
		'error' => array(
			'code' => 200,
			'message' => 'OK'
		)
	);
} catch(Mandrill_Error $e) {
	$response = array(
		'status' => 'fail',
		'data' => array(),
		'error' => array(
			'code' => 500,
			'message' => 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage()
		)
	);
	throw $e;
}
if (!$response['error']['code']) {
	$response = array(
		'status' => 'error',
		'data' => array(),
		'error' => array(
			'code' => 412,
			'message' => 'Precondition Failed.'
		)
	);
}

echo json_encode($response);