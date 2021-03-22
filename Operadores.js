//Operador de +
var operandoN1 = 123;
var operandoN2 = 345;

var resultado = operandoN1 + operandoN2;
console.log ( resultado );

//Operador de *
var operandoN3 = 15;
var operandoN4 = 4;

var resultado2 = 15 * 4;
console.log (resultado2);

//Operador de /
var resultado3 = operandoN1 / operandoN4;
console.log ( "El resultado de la operación es:" + resultado3 );

//Operador de ++
resultado3 ++;
console.log ( "El resultado del incremento de la variable resultado3 es:" + resultado3);

//Operadores de ASIGNACIÓN.

//Operador de =
operandoN1 = operandoN2;
console.log ( operandoN1 );

//Operador de +=
//Operación completa:
//operandoN3 = operandoN3 + operandoN4;

//Operación resumida
operandoN3 += operandoN4;
console.log ( operandoN3 );

//Comparadores de comparación

var nComparacion1 = 6;
var nComparacion2 = 6;
var resultadoComparación = ( nComparacion1 == nComparacion2 );
console.log ( "El resultado de la comparación es:" + resultadoComparación ); 

//Operador ===
var resultadoComparación2 = ( nComparacion1 ===nComparacion2 );
console.log ("El resultado de la comparación de valor y tipo es:"+ resultadoComparación2);

//Operador !=
var resultadoComparación3 = ( nComparacion1 != nComparacion2 );
console.log ("El resultado de la compración de != es:"+resultadoComparación3);
//Operador >
var resultadoComparación4 = ( nComparacion1 > nComparacion2 );
console.log ("El resultado de la comparación > es:"+ resultadoComparación4);

//SESIÓN DEL 6 DE MARZO: OPERADORES LÓGICOS.

//Resultados de la operación AND:
//Cuando tenemos dos condiciones verdaderas el resultado será TRUE
//Cuando tenemos una condición verdadera y una falsa, el resultado será FALSE
//Cuando tenemos una condición falsa y una verdadera, el resultado será FALSE
//Cuando tenemos dos conidiciones falsas el resultado será FALSE

//Resultados de la operación OR:
//Cuando tenemos dos conidicones verdaderas el resultado será TRUE
//Cuando tenemos una condición verdadera y una falsa, el resultado será TRUE
//Cuando tenemos una condición falsa y una verdadera, el resultado será TRUE
//Cuando tenemos dos condiciones falsas el resultado será FALSE

var opLn1 = 3;
var opLn2 = 40;
var opLn3 = 20;

//Operador && (AND ó Y)
var resultadoOperlogY = ( opLn1 < opLn2 ) && (opLn2 < opLn3);
console.log ("El resultado del operador Y es:" + resultadoOperlogY);

//Operador || (OR ó ||)
var resultadoOperLogÓ = ( opLn1 < opLn2 ) || ( opLn2 < opLn3 );
console.log ("El resultado del operador Ó es:" + resultadoOperLogÓ);

//Operador NEGACIÓN !
var resultadoOperLono =  !resultadoOperLogÓ;
console.log ( "El resultado del operador NEGACIÓN es:"+ resultadoOperLono );

//Esta es una edición para probar el sistema de versiones de GitHub 