// INICIALIZAR VARIABLES
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");
let objetoActual = "";
let objetoActual2 = "";
let operadorActual = "";

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const botonElegido = boton.textContent;
        comando(botonElegido);
    });
});


// FUNCION PARA OPERADORES
function comando(botonElegido) {
    switch (botonElegido) {
        case "+":
        case "-":
        case "*":
        case "/":
            asignarOperador(botonElegido);
            break;
        case "=":
            calculador();
            break;
        case ".":
            decimales();
            break;
        case "C":
            limpiarPantalla();
            break;
        default:
            asignarNumero(botonElegido);
    }
}


// FUNCIÓN PARA MOSTRAR EN PANTALLA
function mostrarEnPantalla(botonElegido) {
    pantalla.value += botonElegido;
}

// FUNCION PARA ASIGNAR OPERADOR
function asignarOperador(botonElegido) {
    if (operadorActual === "" && pantalla.value !== "") {
        operadorActual = botonElegido;
    }
    mostrarEnPantalla(botonElegido);
}

// FUNCION PARA ASIGNAR NUMERO
function asignarNumero (botonElegido) {
    if (operadorActual === "") {
        objetoActual += botonElegido;
    } else if (objetoActual !== "" && operadorActual !== "") {
        objetoActual2 += botonElegido;
    }
    mostrarEnPantalla(botonElegido);
}

// FUNCION PARA CALCULAR
function calculador() {
    debugger;
    if (objetoActual !== "" && objetoActual2 !== "" && operadorActual !== "") {

        const numero1 = parseFloat(objetoActual);
        const numero2 = parseFloat(objetoActual2);
        const result = operando(numero1, numero2, operadorActual);
        limpiarPantalla();

        mostrarEnPantalla(result.toString());
        objetoActual = result.toString();
    }
}

// FUNCION PARA EJECUTAR OPERACION MATEMATICA
function operando(numero1, numero2, operadorActual) {
    switch (operadorActual) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                alert("No se puede dividir entre cero");
                return "";
            }
        default:
            return numero2;
    }
}


// FUNCIÓN PARA INTEGRAR DECIMALES
function decimales() {
    if (operadorActual === "") {
        objetoActual += ".";
    } else if (objetoActual !== "" && operadorActual !== "") {
        objetoActual2 += ".";
    }
    mostrarEnPantalla(".");
}


// FUNCIÓN PARA LIMPIAR PANTALLA
function limpiarPantalla() {
    pantalla.value = "";
    objetoActual = "";
    objetoActual2 = "";
    operadorActual = "";
}





