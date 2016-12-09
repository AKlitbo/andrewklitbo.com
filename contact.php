<?php
require_once 'PHPMailer/class.phpmailer.php';
require_once 'PHPMailer/class.smtp.php';
date_default_timezone_set('America/Toronto');

if (isset($_POST['txtName']) && isset($_POST['txtEmail']) && isset($_POST['txtMessage'])) {
    if (empty($_POST['txtName']) || empty($_POST['txtEmail']) || empty($_POST['txtMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 0; // 0 for Prod
    $mail->Host = "";
    $mail->Port = 25;
    $mail->SMTPAuth = true;
    $mail->Username = "";
    $mail->Password = "";
    $mail->From = $_POST['txtEmail'];
    $mail->FromName = $_POST['txtName'];
    $mail->AddAddress('');
    $mail->Subject = 'Mail from Website';
    $mail->Body = "Name: " . $_POST['txtName'] . "\r\n\r\nMessage: " . stripslashes($_POST['txtMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if (!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! Your message has been sent.');
    echo json_encode($data);
} else {
    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);
}
