<?php
require('./conn.php');

error_reporting(E_ALL);
ini_set('display_error', 1);
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Origin:*');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        $name = $_REQUEST["name"] ?? "";
        $password = $_REQUEST['password'] ?? "";
        $email = $_REQUEST['email'] ?? "";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $user_id = $path[5];

        if (!isset($_FILES["file"]) || $_FILES["file"]["error"] != 0) {
            $file = "";
        } else {
            $file = $_FILES["file"];
        }

        if ($name == 'undefined') {
            $name = "";
        }

        if ($password == 'undefined') {
            $password = "";
        }

        if ($email == 'undefined') {
            $email = "";
        }

        if ($file != "") {
            $targetDir = "../src/images/";
            $fileName = basename($file["name"]);
            $targetPath = $targetDir . $fileName;

            if (move_uploaded_file($file["tmp_name"], $targetPath)) {
                echo "File uploaded successfully";
                $sql = "UPDATE users SET ";
                if ($name != "") {
                    $sql .= "name = ? , ";
                }
                if ($password != "") {
                    $sql .= " password = ? , ";
                }
                if ($email != "") {
                    $sql .= " email = ? , ";
                }
                $sql .= " profile_pic = ? WHERE id = ? ";
                $query = $conn->prepare($sql);
                $userArray = [$name, $password, $email];
                $updateArray = [];
                for ($i = 0; $i < 3; $i++) {
                    if ($userArray[$i] != "") {
                        array_push($updateArray, $userArray[$i]);
                    }
                }
                array_push($updateArray, $fileName);
                array_push($updateArray, $user_id);
                print_r($updateArray);
                $query->execute($updateArray);

                break;
            } else {
                echo "Error uploading file";
            }
        } else {
            $sql = "UPDATE users SET";
            if ($name != "") {
                $sql .= " name = ? ,";
            }
            if ($password != "") {
                $sql .= " password = ? ,";
            }
            if ($email != "") {
                $sql .= " email = ? ,";
            }
            $sql = rtrim($sql, ',');
            $sql .= " WHERE id = ? ";
            $query = $conn->prepare($sql);
            $userArray = [$name, $password, $email, $user_id];
            $updateArray = [];
            for ($i = 0; $i < 4; $i++) {
                if ($userArray[$i] != "") {
                    array_push($updateArray, $userArray[$i]);
                }
            }
            $query->execute($updateArray);
            break;
        }
}

?>
