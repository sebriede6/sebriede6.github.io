<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$to = "sebriede6@gmail.com";
$subject = "Neue Nachricht von Ihrer Website";

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$nachricht = htmlspecialchars($_POST['nachricht']);

$message = "
Name: $name
E-Mail: $email
Nachricht: $nachricht
";

$headers = "From: sebriede6.github.io";

if (mail($to, $subject, $message, $headers)) {
    echo "Nachricht erfolgreich gesendet!";
} else {
    echo "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.";
}
?>