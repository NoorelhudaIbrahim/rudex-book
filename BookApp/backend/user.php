<?php require("./conn.php") ?>

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");


$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {

    case 'GET' :
        $sql = "SELECT * FROM users" ;
        $path = explode('/' , $_SERVER['REQUEST_URI']);
        // print_r($path);
        if(isset($path[6]) && is_numeric($path[6])){
            $sql .= " WHERE id = ?";
            $query = $conn->prepare($sql);
            $query->execute([$path[6]]);
            $users = $query->fetch(PDO::FETCH_ASSOC);
        } else {
            $query = $conn->prepare($sql);
            $query->execute();
            $users = $query->fetch(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        // $path = explode('/' , $_SERVER['REQUEST_URI']);
        // $user_id = $path[4];
        // $sql = "SELECT * FROM `users` WHERE id = '$user_id'" ;
        // $query = $conn->prepare($sql);
        // // $query->execute();
        // $query->execute([$path[4]]);
        // $user = $query->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($user);
        break;

}