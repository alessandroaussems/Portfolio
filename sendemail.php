<?php
$emailtomailto="hello@alessandroaussems.be";
$email = $_POST["email"];
$message =$_POST["message"];

$headers  = "Reply-To: ". strip_tags($email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$confirmation = "";

$text=
"<!DOCTYPE html>
<html>
<head>
	<title>New Email: alessandroaussems.be</title>
</head>
<style>
.wrapper
{
	width: 75%;
	margin: 0 auto;
}
</style>
<body>
<div class='wrapper'>
<p><b>Email:</b> " . $email . "</p>
<p><b>Bericht:</b></p><br>
<p>" . $message . "</p>
</div>
</body>
</html>";

if(filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message))
{
    $header='From: '+$email . "\r\n" ;
    $sendmail=mail($emailtomailto,"New email: alessandroaussems.be",$text,$headers);
    if($sendmail)
    {
        $confirmation="SEND";
    }
    else
    {
        $confirmation="ERROR";
    }
}
else
{
    $confirmation="ERROR";
}
echo $confirmation
 ?>
