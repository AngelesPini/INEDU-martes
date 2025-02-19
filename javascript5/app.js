/*
OBJETOS

propiedades -> valores agrupados = clave -> valor



let nombre = "Rafael"

let edad = 23

let calle = "Cabildo y Juramento"

//Las variables anteriores estan todas realcionadas entre si, entonces mejor utilizo un objeto

const persona1  = {nombre: "Rafael", edad: 23, calle: "Cabildo y Juramento"}
*/
/*
const persona1  = {
    nombre: "Rafael", 
    edad: 23, 
    calle: "Cabildo y Juramento"
}

console.log(persona1.nombre)

console.log(persona1.edad)

console.log(persona1.calle)

console.log(persona1["nombre"])//menos practico

persona1.nombre = "Angeles"

console.log("nuevo nombre " + persona1.nombre)*/



/* Objetos -> Constructores */
/*
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("Rafael", 23, "Cabildo y Juramento")
const persona2 = new Persona("Angeles", 28, "Aristobulo del Valle")

console.log(persona1)*/

/*function f1(){
    return this
}*/
/*
let cadena = "ESTA ES LA CLASE 5"

//evaluar el largo de la cadena de texto
console.log(cadena.length)

//convertir el texto a minusculas
console.log(cadena.toLowerCase())


let cadena2 = "un texto comun y corriente"
//convertir a mayusculas
console.log(cadena2.toUpperCase())*/

/*
function Persona(nombre, edad, calle, mascota){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.mascota = mascota;

    this.hablar = function(){ console.log("Hola, soy " + this.nombre + ", mi edad es " + this.edad + ", y tengo un gato que se llama " + this.mascota)}
}

const persona1 = new Persona("Rafael", 23, "Cabildo y Juramento", "Pelusa")
const persona2 = new Persona("Angeles", 28, "Aristobulo del Valle", "Cumbia")

persona1.hablar();

persona2.hablar();*/


/*Operador IN, y FOR...IN */

/*
const persona1  = {nombre: "Rafael", edad: 23, calle: "Cabildo y Juramento"}

console.log("nombre" in persona1)
console.log("perro" in persona1)



for(const propiedad in persona1){
    console.log(persona1[propiedad])
}*/

/*Clases */

/*
class Persona{

    constructor(nombre,edad,calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    hablar(){
        console.log("Hola, soy " + this.nombre)
    }
}

const persona3 = new Persona("Esteban", 27, "Monroe y Roosvelt")
persona3.hablar()*/


//Ejemplo práctico

class Producto{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false
    }

    sumaIva(){
        this.precio = this.precio * 1.21
    }
    vender(){
        this.vendido = true
    }
}

const producto = new Producto('correa para gato', 200)
const producto2 = new Producto('bebedero de hamster', 50)

producto.sumaIva()
console.log(`El precio del producto es ${producto.precio}`)
producto2.sumaIva()
console.log(`El precio del producto es ${producto2.precio}`)
producto.vender()

console.log(`El producto "${producto.nombre}" está vendido?:`
)

if(producto.vendido === true){
    console.log("si")
}else{
    console.log("No")
}

console.log(`El producto "${producto2.nombre}" está vendido?:`
)
if(producto2.vendido === true){
    console.log("si")
}else{
    console.log("No")
}