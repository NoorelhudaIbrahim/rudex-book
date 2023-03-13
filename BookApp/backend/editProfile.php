<?php require('./conn.php');?>

<?php

error_reporting(E_ALL);
ini_set('display_error',1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');
// if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
//     parse_str(file_get_contents("php://input"), $put_vars);
// $id = $_POST['id'];
// $name = $_POST['name'];
// $email = $_POST['email'];
// $password = $_POST['password'];
// $new_image = $_FILES['profile_pic']['name'];
// $image_size = $_FILES['profile_pic']['size'];
// $image_tmp_name = $_FILES['profile_pic']['tmp_name'];
// $image_folder =  'uploads/'.$new_image; 
// $old_image = $_POST['old_image'];  

// if($new_image != ""){
//    $update_image = $new_image ;
// }
// else
// {
//     $update_image = $old_image ;
// }


// $sql = "UPDATE `users` SET name='$name' ,email='$email' , password='$password' , profile_pic='$update_image' WHERE id='$id'" ;
// // $update_query_run = mysqli_query($con , $update_query);
// $query = $conn->prepare($sql);
// $query->execute();
//  if ($query)
//  {
//     if($_FILES['image']['name'] != "")
//    {
//      move_uploaded_file($image_tmp_name , $image_folder);
//      if(file_exists("../uploads/".$old_image))
//      {
//         unlink("../uploads/".$old_image);
//      }
//    }
//  }
// }


$method = $_SERVER['REQUEST_METHOD'];


switch($method){
    case "POST":
        $name = $_POST["name"];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $path = explode('/' , $_SERVER['REQUEST_URI']);
        $user_id = $path[6];
        print_r($path);

        if($_FILES["file"] == null){
        $file = "";
        } else {
            $file = $_FILES["file"] ;
        }
        if( ($_POST["name"] == 'undefined') ){
            $name = "";
        }
   
        if($_POST["password"] == 'undefined'){
            $password = "";
        }
        if($_POST["email"] == 'undefined'){
            $email = "";
        }

        if($file != ""){
            $targetDir = "../src/images/";
            $fileName = basename($file["name"]);
            $targetPath = $targetDir . $fileName;
        
            if (move_uploaded_file($file["tmp_name"], $targetPath)) {
            echo "File uploaded successfully";
                $sql = "UPDATE users SET "; 
                if($name != ""){$sql .= "name = ? , ";}
                if($password != ""){$sql .= " password = ? , ";}
                if($email != ""){$sql .= " email = ? , ";}
                $sql .= " profile_pic = ? WHERE id = ? ";
                $query = $conn->prepare($sql);
                $userArray = [$name  , $password , $email];
                $updateArray = [];
                for($i=0 ; $i<=3 ; $i++){
                    if($userArray[$i] != ""){
                        array_push($updateArray ,$userArray[$i]);
                    }
                }
                array_push($updateArray ,$fileName);
                array_push($updateArray ,$user_id);
                print_r($updateArray);
                $query->execute([...$updateArray]);

                break;
            } else {
            echo "Error uploading file";
            }
        } else {
            $sql = "UPDATE users SET"; 
                if($name != ""){$sql .= " name = ? ,";}
                // if($password != ""){$sql .= " password = ? ,";}
                if($email != ""){$sql .= " email = ?,";}  
                $sql .= " WHERE id = ? ";
                $stmt = substr_replace($sql,"",-15 , -14);
                $query = $conn->prepare($stmt);
             $userArray = [$name , $password , $email];

                // $userArray = [$name , $password , $email];
                $updateArray = [];
                for($i=0 ; $i<=3 ; $i++){
                    if($userArray[$i] != ""){
                        array_push($updateArray ,$userArray[$i]);
                    }
                }
                array_push($updateArray ,$user_id);
                $query->execute([...$updateArray]);
            break;
        }
}

?>