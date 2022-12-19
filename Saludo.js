# Parametros
App de saludo.
let horaActual = new Date();
function Saludo(Nombre) {
    if (Nombre == "Fabricio") 
        console.log("Buenos días Fabricio", "la hora actual del dia es:",(horaActual.toLocaleTimeString()));
    else{
        (Nombre == "Count Dooku")
        console.log("¡Voy por ti, Dooku!");
    }
    }

Saludo("Fabricio");
Saludo("Count Dooku");
