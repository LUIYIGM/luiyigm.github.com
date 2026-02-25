document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const account = document.getElementById('account').value;
    const key = document.getElementById('licenseKey').value;
    const messageDiv = document.getElementById('message');

    // Base de datos local (Simulada)
    // En un entorno real, estos datos deberían coincidir con los del .mq5
    const validUsers = [
        { acc: "12345678", pass: "VIP2026" },
        { acc: "1114823601", pass: "raul2130*" }
        
    ];

    // Buscar coincidencia
    const user = validUsers.find(u => u.acc === account && u.pass === key);

    if (user) {
        messageDiv.textContent = "✅ Acceso concedido. Configurando robot...";
        messageDiv.className = "message success";
        
        // Aquí podrías redirigir o dar instrucciones de descarga
        setTimeout(() => {
            alert("Licencia validada. Ya puedes usar el archivo .mq5 en tu terminal.");
        }, 1000);
    } else {
        messageDiv.textContent = "❌ Error: Cuenta o clave incorrecta.";
        messageDiv.className = "message error";
    }
});