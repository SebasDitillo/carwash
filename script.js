let ganancia = 0;
let historial = [];

function registrar(tipo, monto){

    ganancia += monto;

    document.getElementById("ganancia").textContent =
        "$" + ganancia.toFixed(2);

    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-ES",{
        hour:"2-digit",
        minute:"2-digit"
    });

    historial.unshift({
        tipo,
        monto,
        hora
    });

    actualizarHistorial();

}

function actualizarHistorial(){

    const lista = document.getElementById("historial");

    lista.innerHTML = "";

    historial.forEach(item=>{

        lista.innerHTML += `
        <div class="registro">
            <h3>${item.tipo}</h3>
            <p>Ganancia: $${item.monto.toFixed(2)}</p>
            <p>Hora: ${item.hora}</p>
        </div>
        `;

    });

}
