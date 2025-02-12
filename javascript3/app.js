// CICLOS 
/*
Los ciclos (bucles o iteraciones) son una manera rapida y sencilla para hacer que algo se repita
- CICLOS POR CONTEO: repeticion de un bloque de codigo mientras que la condicion evaluada sea verdadera -> While / do ... While
-
- For -> se ejecuta en base a los valores establecidos inicialmente. Son los que controlan el ciclo
*/


// FOR -> desde, hasta, actualizacion

/* desde: es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo
hasta: el elemento que decide si el ciclo continua o se detiene  
actualizacion: es el nuevo valor que se le asigna despues de cada repeticion a la/las variable/es que contorlan el bucle

Estructura:

for(desde; hasta; actualizacion){
lo que sucede mientras dure el ciclo
}
*/


/*console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")
console.log("hola")*/

/*for(let milanesa = 1; milanesa < 11; milanesa++){ //el operador ++ incrementa los valores numericos de 1 en 1
console.log(milanesa)
}*/

//Ejemplo práctico:

//solicito un valor
/*let numeroIngresado = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicar'))

//en cada repeticion, calculo el numero ingresado x el numero de repeticion (i)
for(let i = 1; i <= 10; i++){
    let resultado = numeroIngresado * i;
    alert(numeroIngresado + " x" + i + " = " + resultado)
}*/

//Ejemplo nro 2 - > turnero

/*for (let i = 1; i <= 5; i++){
    //en cada iteracion solicito un nombre
    let nombreIngresado = prompt('Ingrese su nombre')
    //Informo el turno asignado usando el numero de repeticion (i)
    alert('Turno Nro ' + i +  'Nombre: ' + nombreIngresado)
}*/


//Sentencia break
/*
for(let i = 1; i <= 10; i++){
    //si la variable es igual a 5, FOR se interrumpe
    if (i == 5){
        break;
    }
    alert(i)
}*/

//Sentencia continue


/*for(let i = 1; i<= 10; i++ ){
    if( i == 5){
        continue;
    }
    alert(i)
}*/

//While -> While nos permite crear bucles que se ejecutan desde 0 hasta infinitas veces (infinito no es recomendable) 

/* EJEMPLO DE BUCLE INFINITO: 

let repetir = true

while(repetir){
console.log('Al ifinito y  mas allá!')}

*/


/*let entrada = prompt('Ingrese un dato')

while(entrada != "ESC"){
    alert('El usuario ingresó: ' + entrada)
    entrada = prompt(' Ingrese otro dato: ')

    if(entrada === "ESC"){
        alert('Ciclo terminado')
    }
}*/


//Do ... while


/*let repetir = false

do{
    alert('Solo una vez!')
}while(repetir)*/


//Ejemplo aplicado de DO ... WHILE 

/*let numero = 0

do{
    //repetir con do...while mientras el usuario ingresa un nro que no sea 0
    numero = prompt('Ingrese un numero')
    alert(numero)
    //si el parseo no resulta un numero se interrumple el bucle
}while(parseInt(numero))*/


//Switch
/*
Switch esta pensado para manejar de forma sencilla multiples condiciones sobre la misma variable (se puede resolver con un if, pero switch es mas ordenado -> codigo eficiente, limpio y prolijo)

Cada condicion en SWITCH se evalua, si se cumple, se ejecuta lo que está indicado dentro de cada caso
Despues de cada instruccion de cada caso se incluye la sentencia break

si ningun valor de la variable coincide con los casos del SWITCH, se ejecuta el valor default


switch(condicion){
case 1:
....
break;

case 2:
....
break;
case 3:
....
break;
case 4:
....
break;
default:
    ...
    break;

}
*/

//while & switch 

/*let entrada = prompt('Ingrese un nombre')

//Repetir hasta que se ingrese "ESC"

while(entrada != "ESC"){
    switch(entrada){
        case "ANSHI":
            alert('Hola Anshi!')
            break;
        case "JUAN":
            alert('Hola Juan!')
            break;    
        case "RAFA":
            alert('Hola Rafa!')
            break;
        default:
            alert('Hola Extraño')
            break;
    }
    entrada = prompt('Ingrese un nombre')
}*/