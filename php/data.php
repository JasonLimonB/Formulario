<?php

require('Conexion.php');

$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
$pass = $_POST['pass'];

if ($usuario == '' || $correo=='' || $pass=='') {
    echo ('Error');
}else {
    $statement = $conexion->prepare("INSERT INTO usuario (id,usuario,correo,pass) VAlUES 
    (null, '$usuario','$correo','$pass') ");
    $statement->execute();
    echo ('Registro exitoso');
}
mysqli_close($conexion);

// echo json_encode($_POST);

?>