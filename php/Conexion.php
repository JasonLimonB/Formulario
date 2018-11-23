<?php

$conexion = new mysqli('localhost','root','','login');

if ($conexion->connect_errno) {
    die ('Error en la conexión');
}
// else {
    // echo 'Conexión exitosa';
    // echo '<br/>';
// }


?>