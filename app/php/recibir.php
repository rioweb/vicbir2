<?php 
include('conexion.php');


    $data = json_decode(file_get_contents("php://input")); 
    $title      = $dbhandle -> real_escape_string($data->title);    
    $description     =$dbhandle ->  real_escape_string($data->description);
    $image      =$dbhandle ->  real_escape_string($data->image);    


    $query = 'INSERT INTO galeria (title,description,image) VALUES ("' . $title  . '","' . $description . '","' . $image . '")';

    $dbhandle->query($query);


?>