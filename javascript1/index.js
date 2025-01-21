/*
esto es un
comentario
de bloque
*/

//comentario de linea
// ctrl ó comand + } -> hacer un comentario

/* Reglas básicas en JavaScript
- No se tienen en cuenta los espacios en blanco entre linea y linea (al igual que HTML) 
- Case sensitive : distingue entre mayusculas y minusculas
- Se pueden inclui bloques y líneas de comentarios
*/

/*Palabras reservadas:
break, case, catch, continue, const, default, let, delete, do, else, false, finally, for, function, if, in, instaceof, new, return, switch, this, throw, try, typeof, true, var, void, while, with, etc
*/

/* Variables y valores 

Variable -> es un espacio reservado en la memoria que, como su nombre lo indica, puede cambiar de contenido a lo largo de la ejecucion del programa o algoritmo generado. Almacenan distintos tipos de datos.
*/

//Declaracion de una variable

//"var" -> está obsoleto (se utilizaba hasta ES5)

//declarar variables ES6 -> "let"

let apellido = "Doe"
const CURSO = "programacion"  //constante



//console.log('Hola Mundo!') //este es un mensaje
//console.log(apellido)


//sintaxis correcta

let nombre
let edad
let anioNacimiento //camelCase o PascalCase o metodologia_BEM-paraDesarrolladores

//sintaxis incorrecta
let años 
// let telefono de contacto ->no está bien

/*Asignacion de valores:
En una variable podemos asignar distintos tipos de valores mediante el operador de asignacion que es el simblo =
*/

nombre = 'jane'
edad = 35
anioNacimiento = 1990
apellido = 'Gomez'

// console.log('nuevo apellido:')
// console.log(apellido)


//Operaciones básicas:

let numeroA = 1
let numeroB = 2
let numeroC = 3

let resultadoSuma = numeroA + numeroB

let resultadoResta = numeroC - numeroA

let resultadoProducto = numeroB * numeroC


// console.log('Resultado producto:')
// console.log(resultadoProducto)


//console.log('Resultado suma:')
//console.log(resultadoSuma)

numeroA = 5

//console.log('Resultado resta:')
//console.log(resultadoResta)

let textoA = "Angeles"
let textoB = "Pini"

const espacio = " "

//concatenacion de textos:

let textoCompleto = textoA + espacio + textoB

//console.log(textoCompleto)

// let nombreIngresado = prompt('Ingrese su nombre')

// console.log('Nombre ingresado: ' + nombreIngresado)
// alert('Nombre ingresado: ' + nombreIngresado)

console.log('console log comun')
console.error('Error de navegacion')
