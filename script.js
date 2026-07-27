// ===============================
// SEBAS CARWASH V3.0
// ===============================

let ganancia = 0;
let motos = 0;
let carros = 0;
let camionetas = 0;

const txtGanancia = document.getElementById("ganancia");
const txtMotos = document.getElementById("motos");
const txtCarros = document.getElementById("carros");
const txtCamionetas = document.getElementById("camionetas");

const historial = document.getElementById("historial");

function actualizarPantalla() {
    txtGanancia.textContent = "$" + ganancia.toFixed(2);
    txtMotos.textContent = motos;
    txtCarros.textContent = carros;
    txtCamionetas.textContent = camionetas;
}

function agregarHistorial(texto) {

    if (historial.querySelector(".vacio")) {
        historial.innerHTML = "";
    }

    const item = document.createElement("div");

    item.style.padding = "10px";
    item.style.marginBottom = "10px";
    item.style.background = "#374151";
    item.style.borderRadius = "10px";

    item.textContent = texto;

    historial.prepend(item);
}

actualizarPantalla();
