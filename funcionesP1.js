//FUNCIONES:
//Ejecuta una instrucción específica cuando la función es llamada:
/*
function nombreDelaFuncion (parámetros){

}
*/
function multiplica (primerOperando){
    var resultado = primerOperando * 2;
    console.log ("El resultado es: "+ resultado);
}
//Para llamar la función:
multiplica (12)

//DECLARAR UNA FUNCION COMO EXPRESIÓN (El nombre de la función es opcional)
/* 
variable = nombreFuncion(PARÁMETROS ){
    intrucciones
}
*/
var resultado = function multiplicaN2 ( primerOperando ) {
    //2 * 25 --> 50
    //return nos sirve para asignar el resultado: 50, a la variable resultado. 
    return 2 * primerOperando;
}

resultado (25);
console.log (resultado (25) );

//SEGUNDO EJEMPLO DE FUNCIÓN NORMAL SIN PARAMETROS ASIGNADOS:
function multiplicaN3 () {
    var resultado2 = 12*12;
    console.log ("El resultado es: " + parseInt (resultado2));
}
multiplicaN3 ();
//USANDO DOS OPERANDOS:

function multiplicaN4 (operandoN1, operandoN2) {
    var resultado3 = operandoN1 * operandoN2;
    console.log ("El resultado es: " + resultado3);
}
multiplicaN4 (5,5);

//FUNCIONES FLECHA:
//Permiten una sintaxis mas corta para escribir expresiones de funciones
//no necesita "function" ni "return" ni tampoco llaves, se guarda en una variable o constante
/*
variable = (parametros) => instrucciones 
*/

const saludaPersona = (nombre) => console.log ("¿Que fue " + nombre);
saludaPersona ("Christian?"); 

const suma = (numero) => console.log ("La suma es: " + numero * 2)
suma (12);

//EJERCICIO 1
//Escribir un programa que tenga una función a la que se le pasa como parámetro
//un número y devuelve como resultado con un texto que indica si es par o impar

function determinaNumero ( numeroIng ) {
    if ((numeroIng % 2) == 1){
        console.log ("El número es impar");
        }
    else if ((numeroIng %2)==0){
        console.log ("El número es par");
        }
}

determinaNumero (100);

//EJERCICIO 2
//Definir una función que muestre la información de un texto que se introduce
//como argumento y determina si el texto contiene mayúsculas, minúsculas o ambas.

function determinaTexto (texto) {
    if (texto == texto.toUpperCase () ) {
        console.log ("El texto está en mayúscuas");
    }
    else if (texto == texto.toLowerCase () ){
        console.log ("El texto esta en minúsculas");
    }
    else {
        console.log ("El texto tiene mayúsculas y minúsculas")
    }
}

determinaTexto ("Hola");

//Este es un comentariio para porbar las pull request 
