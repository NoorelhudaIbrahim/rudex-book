<?php
require "./conn.php";


    $email    =  $_REQUEST['email'];
   
    $password = md5($_REQUEST['password']);

    // echo("good")

    // try {
        // $sql = "SELECT * FROM `users` WHERE email = $email AND password=$password";
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        $results = $stmt->fetch(PDO::FETCH_ASSOC);
        // $results = $results[0];
        

        // $q = $conn->query($sql);
        // $q->setFetchMode(PDO::FETCH_ASSOC);

        // $row = $q->fetch();
        echo(json_encode($results));
        // echo(htmlspecialchars($results['email'].' '.$results['name']));


    // }
    //  catch (PDOException $e) {
    //     die("Could not connect to the database $dbname :" . $e->getMessage());
    // }
    //  while ($row = $q->fetch()): 
    //         echo htmlspecialchars($row['email'].' '.$row['name']);
    //  endwhile; 
     ?>