<?php
// Файлы phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$title = "Заявка с сайта AQUABLAST VLADIKAVKAZ";

$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'khaevkk@mail.ru'; // Логин на почте
  $mail->Password   = 'SXm6KvF2LFFhWciaCRG7'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('khaevkk@mail.ru', 'Заявка с сайта AQUABLAST VLADIKAVKAZ'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('khaevkk@mail.ru');


  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}