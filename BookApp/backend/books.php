<?php

include './conn.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $description = $_POST['description'];
    $user_id = $_POST['user_id'];
    $file = $_FILES["cover_image"];
    print_r($_POST);

    // Validate that the uploaded file is an image
    $fileType = exif_imagetype($file["tmp_name"]);
    if ($fileType === false) {
        echo "Error: File is not an image.";
        exit;
    }

    $targetDir = "../frontend/src/images";
    // $targetDir = "./upload";
    $fileName = basename($file["name"]);
    $targetPath = $targetDir . $fileName;
  
    if (move_uploaded_file($file["tmp_name"], $targetPath)) {
        echo "File uploaded successfully";
        $sql = "INSERT INTO books (title ,author, description , cover_image , user_id)
                VALUES ( ? , ? , ? , ? , ?)" ;
        $query = $conn->prepare($sql);
        $query->execute([ $title , $author , $description , $fileName ,$user_id]);
    } else {
        echo "Error uploading file";
    }
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "SELECT * FROM books";
    $query = $conn->prepare($sql);
    $query->execute();
    $books = $query->fetchAll(PDO::FETCH_ASSOC);
    // print_r($users);
        echo json_encode($books);
  } 

// Update
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $put_vars);
    $id = $_POST['id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $description = $_POST['description'];
    $cover_image = $_POST['cover_image'];
    $user_id = $_POST['user_id'];

    $stmt = $conn->prepare("UPDATE books SET title = ?, author = ?, description = ?, cover_image = ?, user_id = ? WHERE id = ?");
    $stmt->execute([$title, $author, $description, $cover_image, $user_id, $id]);

    header("Content-type: application/json");
    echo json_encode(["message" => "Book updated"]);
}

// Delete
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    parse_str(file_get_contents("php://input"), $delete_vars);

    $id = $delete_vars['id'];

    $stmt = $conn->prepare("DELETE FROM books WHERE id = ?");
    $stmt->execute([$id]);

    header("Content-type: application/json");
    echo json_encode(["message" => "Book deleted"]);
}