<?php
require "./conn.php";

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $title = $_POST["title"];
    $author = $_POST["author"];
    $description = $_POST["description"];
    $user_id = $_POST["user_id"];
    $file = $_FILES["file"];

    print_r($_POST);
    print_r($file);
  
    $targetDir = "../src/images/";
    $fileName = basename($file["name"]);
    $targetPath = $targetDir . $fileName;
  
    if (move_uploaded_file($file["tmp_name"], $targetPath)) {
      echo "File uploaded successfully";
        $sql = "INSERT INTO books (name , author , description , cover_image ,user_id)
                VALUES (? , ? , ? , ? , ?)" ;
        $query = $conn->prepare($sql);
        $query->execute([ $title, $author , $description ,$fileName , $user_id ]);
    } else {
      echo "Error uploading file";
    }
  
  } elseif ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "SELECT * 
            FROM books
         " ;
    $query = $conn->prepare($sql);
    $query->execute();
    $users = $query->fetchAll(PDO::FETCH_ASSOC);
    // print_r($users);
        echo json_encode($users);
  } elseif ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $sql = "DELETE FROM books WHERE id = ?" ;
    $path = explode('/' , $_SERVER['REQUEST_URI']);
    if(isset($path[4]) && is_numeric($path[5])){
        $query = $conn->prepare($sql);
        $query->execute([$path[5]]);
    }
    }
  

  ?>