"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function poTencias() {
    var numeroA = rls.questionInt("Ingrese el primer numero: ");
    var numeroB = rls.questionInt("Ingrese el segundo numero: ");
    while (numeroA < 0) {
        console.log("El numero base no puede ser un numero negativo");
        numeroA = rls.questionInt("Ingrese nuevamente un numero: ");
    }
    while (numeroB < 0) {
        console.log("El numero exponente no puede ser un numero negativo");
        numeroB = rls.questionInt("Ingrese nuevamente un numero: ");
    }
    var resultado = Math.pow(numeroA, numeroB);
    console.log(resultado);
}
poTencias();
