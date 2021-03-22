var numero1 = 5;
var numero2 = 10;
var numero3 = 20;

//Codigo if, dependiendo de la condición ejecutará las instrucciones dentro de las llaves {}.
if ((numero1 < numero2) && (numero2 < numero3)) {
    console.log ("Entraste al IF");
}
//Codigo else if: si no se ejecutaron las instrucciones dentro del IF, comprobará una nueva condición.
else if (numero1 < numero3) {
    consola.log ("Entraste al ELSE IF")
    
}
//codigo else: si no se ha cumplido ninguna condición, se ejecutarán estas instrucciones por defecto.
else {
    console.log ("Entraste al ELSE");
}
