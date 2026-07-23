let total = 0;
let historial = JSON.parse(localStorage.getItem("historial")) || [];
let total = Number(localStorage.getItem("total")) || 0;

const fecha = document.getElementById("fecha");

const hoy = new Date();

fecha.textContent = hoy.toLocaleDateString("es-ES",{
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
});

function registrar(nombre, precio, ganancia){

    total += ganancia;

    document.getElementById("ganancia").textContent =
    "$" + total.toFixed(2);

    const hora = new Date().toLocaleTimeString("es-ES",{
        hour:"2-digit",
        minute:"2-digit"
    });

    historial.unshift({
        nombre,
        precio,
        ganancia,
        hora
    });

    mostrarHistorial();

}

function mostrarHistorial(){localStorage.setItem("historial", JSON.stringify(historial));
localStorage.setItem("total", total);

    const lista = document.getElementById("historial");

    lista.innerHTML="";

    historial.forEach(item=>{

        lista.innerHTML += `
        <div class="registro">
            <h3>${item.nombre}</h3>
            <p>Precio del servicio: $${item.precio}</p>
            <p>Mi ganancia: $${item.ganancia.toFixed(2)}</p>
            <p>Hora: ${item.hora}</p>
        </div>
        `;

    });
document.getElementById("ganancia").textContent = "$" + total.toFixed(2);

if (historial.length > 0) {
    mostrarHistorial();
}
}
