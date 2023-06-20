<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ld104@wellesley.edu";
    $subject = "HTML email";

    $message = "
    <html>
    <head>
    <title>HTML email</title>
    </head>
    <body>
    <p>This email contains HTML Tags!</p>
    <table>
    <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    </tr>
    <tr>
    <td>{$_POST['firstname']}</td>
    <td>{$_POST['lastname']}</td>
    </tr>
    </table>
    <p>{$_POST['subject']}</p>
    </body>
    </html>
    ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Set the "From" header
    $headers .= 'From: sender@example.com' . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
