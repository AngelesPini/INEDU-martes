//Funciones

/*

Funciones: cuando desarrollamos una app, una web, lo que sea, es muy habitual utilizar una y otra y otra y ooootra vez las mismas instrucciones
Una funcion es un conjunto de instrucciones que se agrupan para realizar una tarea concreta. 

*/


//Declarar la funcion -> function

/*function saludar(){
    console.log('hola')
}

//llamado a la función

saludar()*/


//Ejemplo práctico:

/*function solicitarNombre(){
    let nombreIngresado = prompt('Ingrese su nombre: ')

    alert('El nombre ingresado es ' + nombreIngresado)    
}

solicitarNombre()*/


//Parametros

/*function conParametros(parametro1, parametro2){
    alert(parametro1 + " " + parametro2)
}

conParametros("hola", 5)
conParametros("como", "están?")*/

//Ejemplo aplicado

/*let resultado = 0 

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero
}

function mostrar(mensaje){
    console.log("El resultado es: " + mensaje)
}

sumar(6, 3)
mostrar(resultado)*/

//Resultados de una funcion -> retornos


/*function suma(primerNumero, segundoNumero){
    return primerNumero + segundoNumero
}

let resultado = suma(5, 8)

console.log(resultado)*/


//Ejemplo práctico: 


/*function calculadora(primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero
            break;
        case "-":
            return primerNumero - segundoNumero
            break;
        case "*":
            return primerNumero * segundoNumero
            break;
        case "/":
            return primerNumero / segundoNumero
            break;
        default:
            return 0
            break;
    }
}

console.log(calculadora(10, 5, "+"))
console.log(calculadora(10, 5, "-"))
console.log(calculadora(10, 5, "*"))
console.log(calculadora(10, 5, "/"))*/


//Scope -> o ámbito

/*
Existen dos tipo de variables en programación, variables globales y variables locales.

Globales -> existen en la base del código general. Por ejemplo
let nombre = "anshi"


Locales -> existen unicamente dentro de un ámbito o scope

for(let i = 0) {
"i" solo existe dentro de este ciclo
}-> "i" es una variable local: solo existe en el ciclo "for"

*/

/*
let resultado = 0 //variable global -> sirve para todo el codigo

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero
}

sumar(5, 6)
console.log(resultado)


function sumar2(primerNumero, segundoNumero){
    let resultado2 = primerNumero + segundoNumero // variable local
    console.log(resultado2)
}

sumar2(4,8)

*/


//Funciones anónimas:una funcion anonima es aquella que se define sin nombre y se utiliza para ser pasada como parámetro o ser asignada a una variable. 

/*const suma = function(a, b){return a +b}

console.log(suma(15,20))*/

//Funcion flecha: se identifican como funciones anonimas de sintaxis simplificada

/*const resta = (a, b) => {return a - b}
console.log(resta (20, 5))*/


//Ejemplo práctico: 


const suma = (a,b) => a + b
const resta = (a , b) => a - b 

const iva = x => x * 0.21


let precioProducto = 500
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio)
