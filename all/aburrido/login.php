<?php
// Verificar si se enviaron datos de inicio de sesión
if(isset($_POST['usuario']) && isset($_POST['clave'])) {
    // Definir las credenciales permitidas
    $credenciales = array(
        'luis' => '1234' // Usuario => Clave
    );

    // Obtener los datos del formulario
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    // Verificar si las credenciales son válidas
    if(array_key_exists($usuario, $credenciales) && $credenciales[$usuario] === $clave) {
        // Inicio de sesión exitoso, redirigir a la página protegida
        header("Location: pagina_protegida.html");
        exit;
    } else {
        // Credenciales incorrectas, redirigir de vuelta al formulario de inicio de sesión
        header("Location: index.html");
        exit;
    }
} else {
    // Si no se enviaron datos de inicio de sesión, redirigir de vuelta al formulario
    header("Location: index.html");
    exit;
}
?>