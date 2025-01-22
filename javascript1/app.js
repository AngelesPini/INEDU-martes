/*let nombre = "Juana" //declaracion de una variable y asignación de un valor

console.log("tu nombre es " + nombre) //concatenación

nombre = "Esteban" //reasignación del valor de la variable

console.log("El nuevo nombre es " + nombre) //concatenación con el nuevo valor. "Juana" deja de existir*/

// const se utiliza para delcaraciones constantes -> no cambian su valor

/*const PI = "3.14"
const PI2 = 3.141592
console.log(PI)
console.log(PI2)*/


/*let numeroIngresado = prompt('Ingrese un número para sumarlo al siguiente: ')
console.log(numeroIngresado)

let numeroIngresado2 = prompt('Ingrese el siguiente numero para sumar al anterior: ')
console.log(numeroIngresado2)

let resultado = numeroIngresado + numeroIngresado2

console.log(resultado)
console.log(typeof(resultado))*/


//Number

/*let numero1 = Number(prompt('Ingrese un número para sumarlo al siguiente: '))
console.log(numero1)

let numero2 = Number(prompt('Ingrese el siguiente numero para sumar al anterior: '))
console.log(numero2)

let resultado2 = numero1 + numero2

console.log("El resultado de la suma es: " + resultado2)
console.log(typeof(resultado2))*/


//ParseInt - > convierte a numero entero la entrada del user, si el dato no es válido, devuelve NaN -> Not a Number


/*let numero3 = parseInt(prompt('ingrese un numero con coma: '))
console.log(numero3)*/

//ParseFloat 

/*let numero4 = Number(prompt('Ingrese un numero con decimales: '))
console.log(parseFloat(numero4))
console.log(typeof(numero4))*/


//operadores básicos -> Los operadores son simbolos que realizan operaciones matematicas o logicas dentro del código
/*

//suma

let suma = 5 + 3

//resta

let resta = 5 - 3

//multiplicacion

let multiplicacion = 5 * 3

//division

let division = 6 / 3 

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)*/


/*let factor1 = Number(prompt('ingrese el numero 1: '))

let factor2 = Number(prompt('ingrese el numero 2: '))

// let factor1 =prompt('ingrese el numero 1: ')
// let factor2 = prompt('ingrese el numero 2: ')

let resultado = factor1 + factor2

alert('La suma de ' + factor1 + " y " + factor2 + " da como resultado = " + resultado)

*/

//Ejercicios prácticos

//Solicitud de datos y calculos de la edad


/*let nombre = prompt('Ingrese su nombre: ')
let anio = Number(prompt('Ingrese su año de nacimiento: '))
let anioVigente = 2025

let edad = 2025 - anio


alert(' Hola! ' + nombre + ", naciste en el año " + anio + ". Este año cumplis: " + edad)

console.log(nombre, anio, anioVigente, edad)*/


//Calculo de dos numeros

/*let numero = Number(prompt('Ingrese el primer numero: '))
let numero2 = Number(prompt('Ingrese el segundo numero: '))

let suma = numero + numero2
let doble = numero * 2
let mitad = numero2 / 2
let resta = numero - numero2

alert('La suma de ' + numero + " + " + numero2 + " es = " + suma) 
alert('El doble de ' + numero + " es = " + doble) 
alert('La mitad de ' + numero2 + " es = " + mitad) 
alert('La resta de ' + numero + " - " + numero2 + " es = " + resta) */

//conversor de temperatura


/*let celsius = Number(prompt('Ingrese la temperatura en grados Celsius: '))
let farenheit = (celsius * 9/5) + 32

alert('la temperatura en grados Farenheit es: ' + farenheit)*/

//conversor de divisas

let pesos = Number(prompt(' cuantos pesos desea convertir a dolares? '))
let dolar = (pesos / 1066.50)

alert('Obtendrás ' + dolar + ' dólares')