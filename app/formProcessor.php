<?php
//if (isset($_POST["name"])) {$name= $_POST["name"]};
//if (isset ($_POST["email"])) {$email= $_POST["email"]};
//if (isset($_POST["message"])) {$message= $_POST["message"]};
//if (isset ($_POST["website"])) {$website = $_POST["website"]};

$name= trim( $_POST["name"]);
$email= trim( $_POST["email"]);
$message= trim( $_POST["message"]);
$website = trim( $_POST["website"]);

$errorMSG= "";



$EmailTo= "info@savitskaya.esy.es";
$Subject= "Получено новое сообщение";


$Body.= "Имя: ";
$Body.= $name;
$Body.= "\n";

$Body.= "Email: ";
$Body.= $email;
$Body.= "\n";

$Body.= "Сообщение: ";
$Body.= $message;
$Body.= "\n";

//$headers = "Content-type: text/html; charset=\"utf-8\"";


$success= mail("info@savitskaya.esy.es", "$Subject", "$Body"); // "From:".$email
//$success= mail("info@savitskaya.esy.es", "test mail", "this is our test mail");

if($success && !$errorMSG){
   return true;
}else{
    return false;
}
?>