<?php
$conn = new mysqli("localhost", "root", "Disha!123", "funfusion");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Database connected successfully";
?>
