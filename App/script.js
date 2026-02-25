// CONFIGURACIÓN DE SEGURIDAD
const PASSWORD_SGP = "admin2026"; // Cambia esta contraseña
let prestamos = JSON.parse(localStorage.getItem('datos_prestamos')) || [];

// Mostrar fecha
document.getElementById('current-date').innerText = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', day: 'numeric', month: 'long' 
});

// Función de Login
function checkLogin() {
    const passValue = document.getElementById('pass-input').value;
    if (passValue === PASSWORD_SGP) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-dashboard').style.display = 'block';
        renderTable();
    } else {
        const error = document.getElementById('error-msg');
        error.style.display = 'block';
        setTimeout(() => error.style.display = 'none', 2000);
    }
}

function logout() { location.reload(); }

// Crear Préstamo
function createLoan() {
    const name = document.getElementById('c-name').value;
    const amount = parseFloat(document.getElementById('c-amount').value);
    const interest = parseFloat(document.getElementById('c-interest').value);

    if (!name || isNaN(amount)) return alert("Por favor, llena los campos correctamente.");

    const totalDeuda = amount + (amount * (interest / 100));

    const nuevo = {
        id: Date.now(),
        nombre: name,
        base: amount,
        restante: totalDeuda,
        estado: 'Pendiente'
    };

    prestamos.push(nuevo);
    saveData();
    renderTable();
    
    // Resetear formulario
    document.getElementById('c-name').value = '';
    document.getElementById('c-amount').value = '';
}

// Registrar un Pago (Abono)
function registrarAbono(id) {
    const abono = parseFloat(prompt("¿Cuánto desea abonar el cliente?"));
    if (isNaN(abono) || abono <= 0) return;

    prestamos = prestamos.map(p => {
        if (p.id === id) {
            p.restante = Math.max(0, p.restante - abono);
            if (p.restante === 0) p.estado = 'Pagado';
        }
        return p;
    });

    saveData();
    renderTable();
}

// Eliminar Registro
function eliminarRegistro(id) {
    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
        prestamos = prestamos.filter(p => p.id !== id);
        saveData();
        renderTable();
    }
}

function saveData() {
    localStorage.setItem('datos_prestamos', JSON.stringify(prestamos));
}

function renderTable() {
    const tbody = document.getElementById('loan-table-body');
    tbody.innerHTML = '';
    let capitalTotal = 0;

    prestamos.forEach(p => {
        capitalTotal += p.restante;
        const badgeClass = p.estado === 'Pagado' ? 'bg-success' : 'bg-danger';

        tbody.innerHTML += `
            <tr>
                <td><strong>${p.nombre}</strong></td>
                <td>$${p.base.toLocaleString()}</td>
                <td style="font-weight:700; color:var(--primary)">$${p.restante.toLocaleString()}</td>
                <td><span class="badge ${badgeClass}">${p.estado}</span></td>
                <td>
                    <button class="btn-action btn-pay" onclick="registrarAbono(${p.id})">Abonar</button>
                    <button class="btn-action btn-del" onclick="eliminarRegistro(${p.id})">✕</button>
                </td>
            </tr>
        `;
    });

    // Actualizar Widgets de arriba
    document.getElementById('stat-total').innerText = `$${capitalTotal.toLocaleString()}`;
    document.getElementById('stat-clientes').innerText = prestamos.length;
    document.getElementById('stat-pagos').innerText = prestamos.filter(p => p.estado === 'Pagado').length;
}