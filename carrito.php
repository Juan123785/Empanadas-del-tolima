<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$basededatos = "pagina";

$enlace = mysqli_connect($servidor, $usuario, $clave, $basededatos);

// Verificar si la conexión fue exitosa
if (!$enlace) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Verificar si el formulario fue enviado
if (isset($_POST['enviar'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $direccion = $_POST['direccion'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $metodopago = $_POST['metodopago'];

    // Corregir la consulta SQL
    $insertardatos = "INSERT INTO pagina VALUES('', '$nombre', '$apellido', '$direccion', '$correo', '$telefono', '$metodopago')";
    
    $ejecutarinsertar = mysqli_query($enlace, $insertardatos);

    // Verificar si la consulta fue exitosa
    if (!$ejecutarinsertar) {
        echo "Error en la inserción: " . mysqli_error($enlace);
    }
}

// Cerrar la conexión
mysqli_close($enlace);
?>

