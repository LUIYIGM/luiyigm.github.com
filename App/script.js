// CONFIGURACIÓN INICIAL
const ADMIN_PASSWORD = "admin2026"; 
let prestamos = JSON.parse(localStorage.getItem('sgp_data')) || [];

document.getElementById('current-date').innerText = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
});

function checkLogin() {
    const input = document.getElementById('pass-input').value;
    if (input === ADMIN_PASSWORD) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-dashboard').style.display = 'block';
        renderData();
    } else {
        const err = document.getElementById('error-msg');
        err.style.display = 'block';
        setTimeout(() => err.style.display = 'none', 2000);
    }
}

function logout() { location.reload(); }

function createLoan() {
    const name = document.getElementById('c-name').value;
    const address = document.getElementById('c-address').value; // Nueva captura
    const capital = parseFloat(document.getElementById('c-amount').value);
    const tasaMensual = parseFloat(document.getElementById('c-interest').value);
    const meses = parseInt(document.getElementById('c-installments').value);

    if (!name || !address || isNaN(capital) || isNaN(meses)) {
        return alert("Por favor, completa todos los campos, incluyendo la dirección.");
    }

    const interesTotal = capital * (tasaMensual / 100) * meses;
    const totalADeber = capital + interesTotal;
    const valorCuota = totalADeber / meses;

    const nuevoPrestamo = {
        id: Date.now(),
        nombre: name,
        direccion: address, // Guardar dirección
        capitalOriginal: capital,
        totalADeber: totalADeber,
        saldoRestante: totalADeber,
        mesesTotales: meses,
        cuotasPagadas: 0,
        valorCuota: valorCuota
    };

    prestamos.push(nuevoPrestamo);
    saveAndRefresh();
    
    // Limpiar campos
    document.getElementById('c-name').value = '';
    document.getElementById('c-address').value = '';
    document.getElementById('c-amount').value = '';
    document.getElementById('c-installments').value = '1';
}

function cobrarCuota(id) {
    prestamos = prestamos.map(p => {
        if (p.id === id) {
            if (p.saldoRestante > 0.01) {
                p.saldoRestante = Math.max(0, p.saldoRestante - p.valorCuota);
                p.cuotasPagadas += 1;
            }
        }
        return p;
    });
    saveAndRefresh();
}

function eliminarCliente(id) {
    if (confirm("¿Eliminar registro permanentemente?")) {
        prestamos = prestamos.filter(p => p.id !== id);
        saveAndRefresh();
    }
}

function saveAndRefresh() {
    localStorage.setItem('sgp_data', JSON.stringify(prestamos));
    renderData();
}

function renderData() {
    const tbody = document.getElementById('loan-table-body');
    tbody.innerHTML = '';
    
    let totalCartera = 0;
    let totalCuotasPendientes = 0;

    prestamos.forEach(p => {
        totalCartera += p.saldoRestante;
        totalCuotasPendientes += (p.mesesTotales - p.cuotasPagadas);
        
        const estaPagado = p.saldoRestante <= 0.1;
        const statusBadge = estaPagado ? 'bg-success' : 'bg-danger';

        tbody.innerHTML += `
            <tr>
                <td>
                    <strong>${p.nombre}</strong>
                    <span class="address-text">📍 ${p.direccion}</span>
                </td>
                <td>
                    <small style="color:var(--text-muted)">Cap: $${p.capitalOriginal.toLocaleString()}</small><br>
                    <strong>$${p.totalADeber.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong>
                </td>
                <td>
                    <span class="badge ${statusBadge}">
                        ${p.cuotasPagadas} / ${p.mesesTotales} Meses
                    </span>
                </td>
                <td>$${p.valorCuota.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                <td style="color:var(--primary); font-weight:800;">
                    $${p.saldoRestante.toLocaleString(undefined, {minimumFractionDigits: 2})}
                </td>
                <td>
                    <button class="btn-action btn-pay" onclick="cobrarCuota(${p.id})">Cobrar Mes</button>
                    <button class="btn-action btn-del" onclick="eliminarCliente(${p.id})">✕</button>
                </td>
            </tr>
        `;
    });

    document.getElementById('stat-total').innerText = `$${totalCartera.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    document.getElementById('stat-clientes').innerText = prestamos.length;
    document.getElementById('stat-cuotas').innerText = totalCuotasPendientes;
}