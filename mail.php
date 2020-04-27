<?php
    echo "<h1>Привет</h1>";
    
    $_POST = json_decode(file_get_contents("php://input"), true);

    var_dump($_POST);
    
    $message  = "Имя пользователя: " . $_POST['name'] . "<br/>"; 
    $message .= "Email: " . $_POST['email'] . "<br/>";
    $message .= "Телефон: " . $_POST['phone'] . "<br/>";
    
    send_mail($message); 
     
    function send_mail($message){
        $mail_to = "kir.dontsov@gmail.com";
        $subject = "Заявка с сайта lesnaya-gavan.ru";
         
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
        $headers .= "From: Заявка с сайта <no-reply@rti-torg.com>\r\n"; 

        mail($mail_to, $subject, $message, $headers);
    }
    

?>