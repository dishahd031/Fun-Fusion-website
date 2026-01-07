<?php
include "db.php";

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();

    if (password_verify($password, $row['password'])) {
        echo "Login successful";
        // header("Location: home.html");
        // exit();
    } else {
        echo "Wrong password";
    }
} else {
    echo "User not found";
}
?>
