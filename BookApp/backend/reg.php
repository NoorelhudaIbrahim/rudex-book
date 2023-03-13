<?php
require "./conn.php";

$username  = $_REQUEST['name'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);




$sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$username,$email,$password]);

?>