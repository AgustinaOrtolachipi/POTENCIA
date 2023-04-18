import * as rls from "readline-sync";

function poTencias (){
    let numeroA: number = rls.questionInt ("Ingrese el primer numero: ");
    let numeroB: number = rls.questionInt ("Ingrese el segundo numero: "); 
    while (numeroA <0){
        console.log ("El numero base no puede ser un numero negativo");
        numeroA = rls.questionInt ("Ingrese nuevamente un numero: ");
        
    }
        while (numeroB <0){
            console.log ("El numero exponente no puede ser un numero negativo");
            numeroB = rls.questionInt ("Ingrese nuevamente un numero: ");
        }
    let resultado = Math.pow (numeroA, numeroB);
    console.log (resultado);
        }
poTencias (); 