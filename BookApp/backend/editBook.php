<?php require('./conn.php');?>

<?php

error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');


// Update
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $put_vars);
    $id = $put_vars['id'];
    $title = $put_vars['title'];
    $author = $put_vars['author'];
    $description = $put_vars['description'];
    $cover_image = $put_vars['cover_image'];
    $user_id = $put_vars['user_id'];

    $stmt = $conn->prepare("UPDATE books SET title = ?, author = ?, description = ?, cover_image = ?, user_id = ? WHERE id = ?");
    $stmt->execute([$title, $author, $description, $cover_image, $user_id, $id]);

    header("Content-type: application/json");
    echo json_encode(["message" => "Book updated"]);
}
// $method = $_SERVER['REQUEST_METHOD'];


// switch($method){
//     case "POST":
//         $title = $_POST["title"];
//         $author = $_POST['author'];
//         $description = $_POST['description'];
//         $path = explode('/' , $_SERVER['REQUEST_URI']);
//         $book_id = $path[5];  

//         if($_FILES["file"] == null){
//         $file = "";
//         } else {
//             $file = $_FILES["file"] ;
//         }
//         if( ($_POST["title"] == 'undefined') ){
//             $title = "";
//         }
   
//         if($_POST["author"] == 'undefined'){
//             $author = "";
//         }
//         if($_POST["description"] == 'undefined'){
//             $description = "";
//         }

//         if($file != ""){
//             $targetDir = "../frontend/src/images";
//             $fileName = basename($file["name"]);
//             $targetPath = $targetDir . $fileName;
        
//             if (move_uploaded_file($file["tmp_name"], $targetPath)) {
//             echo "File uploaded successfully";
//                 $sql = "UPDATE books SET "; 
//                 if($title != ""){$sql .= "title = ? , ";}
//                 if($author != ""){$sql .= " author = ? , ";}
//                 if($description != ""){$sql .= " description = ? , ";}
//                 if($cover_image != ""){$sql .= " cover_image = ? , ";}
//                 $sql .= " WHERE id = ? WHERE user_id = ? ";
//                 $query = $conn->prepare($sql);
//                 $userArray = [$title  , $author , $description];
//                 $updateArray = [];
//                 for($i=0 ; $i<=2 ; $i++){
//                     if($userArray[$i] != ""){
//                         array_push($updateArray ,$userArray[$i]);
//                     }
//                 }
//                 array_push($updateArray ,$fileName);
//                 array_push($updateArray ,$book_id);
//                 print_r($updateArray);
//                 $query->execute([...$updateArray]);

//                 break;
//             } else {
//             echo "Error uploading file";
//             }
//         } else {
//             $sql = "UPDATE books SET"; 
//                 if($title != ""){$sql .= " title = ? ,";}
//                 if($auther != ""){$sql .= " auther = ? ,";}
//                 if($description != ""){$sql .= " description = ? ,";}  
//                 $sql .= " WHERE id = ? ";
//                 $stmt = substr_replace($sql,"",-15 , -14);
//                 $query = $conn->prepare($stmt);
//                 $userArray = [$title , $auther , $description];
//                 $updateArray = [];
//                 for($i=0 ; $i<=2 ; $i++){
//                     if($userArray[$i] != ""){
//                         array_push($updateArray ,$userArray[$i]);
//                     }
//                 }
//                 array_push($updateArray ,$book_id);
//                 $query->execute([...$updateArray]);
//             break;
//         }
// }
