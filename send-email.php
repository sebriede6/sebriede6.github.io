<?php
// send_email.php
$to = "sebriede6@gmail.com";
$subject = "Neue Nachricht von Ihrer Website";
$message = "
Name: ".$_POST['name']."
E-Mail: ".$_POST['email'];

$headers = "From: noreply@yourdomain.com";

mail($to, $subject, $message, $headers);
?>