let ganancia = 0;

let historial = JSON.parse(localStorage.getItem("historial")) || [];

function agregar(tipo, dinero){

    ganancia += dinero;

    document.getElementById("ganancia").innerHTML="$"+ganancia.toFixed(2);

    const ahora = new Date();

    const hora = ahora.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    });

    historial.unshift({
        tipo:tipo,
        dinero:dinero,
        hora:hora
    });

    localStorage.setItem("historial",JSON.stringify(historial));

    mostrarHistorial();
}

function mostrarHistorial(){

    let lista="";

    historial.forEach(item=>{

        lista+=`
        <div class="resumen">
        <b>${item.tipo.toUpperCase()}</b><br>
        Hora: ${item.hora}<br>
        Ganancia: $${item.dinero.toFixed(2)}
        </div>
        `;

    });

    document.getElementById("historial").innerHTML=lista;

}

mostrarHistorial();