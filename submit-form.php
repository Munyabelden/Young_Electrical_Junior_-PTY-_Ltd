<?php
// Check if the form is submitted
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['textarea'];

    // Validate the form data (perform any necessary validation)

    // Set up the email parameters
    $to = 'munyaradzi045@gmail.com'; // Replace with your own email address
    $subject = 'New form submission';
    $body = "Name: $name\nEmail: $email\nPhone Number: $number\nMessage: $message";
    $headers = "From: $email";

    // Send the email
    $success = mail($to, $subject, $body, $headers);

    // Check if the email was sent successfully
    if ($success) {
        // Email sent successfully
        echo 'Thank you for your submission! We will get back to you shortly.';
    } else {
        // Failed to send email
        echo 'Sorry, there was an error sending your message. Please try again later.';
    }
  }
?>
