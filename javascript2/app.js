//Condicionales -> Si....condicion, entonces.....operación
//Control de flujos - Estructura IF

//si...condicion
// if(true){
//     //entonces....
//     console.log('Veras este mensaje')
// }

///Operador de comparacion -> == equivalencia 
//No es lo mismo === - > Estrictamente igual a. 
// = -> asignación
// let numero = 3
// let numero1 = "3"

//Ejemplos de condicionales: 
// let unNumero = 5
// //Con (unNumero == 5) comparo si unNumero es igual que 5

// if (unNumero == 5){
//     console.log("es igual que 5")
// }

//Con (unNumero == 6) comparo si unNumero es igual que 5

// if (unNumero == 6){
//     console.log("no verás esto")
// }


//if... else

// let unColor = 'rojo'
// //con unColor == "rojo" -> comparo si es igual que 'rojo'

// if (unColor == 'rojo'){
//     console.log('El color es Rojo')
// } else{
//     console.log('El color NO es rojo')
// }

//ejemplo:

// let nombreUsuario = prompt('Ingrese su nombre')

// if(nombreUsuario == ""){
//     alert('NO INGRESASTE NINGUN NOMBRE')
// }else{
//     alert('Bienvenido! ' + nombreUsuario)
// }

// let precio = Number(prompt('Ingrese el precio: '))

// if(precio < 20){
//     alert('El precio es menor que 20')
// }else if(precio < 50){
//     alert('El precio es menor que 50')
// }else if(precio < 100){
//     alert('El precio es menor que 100')
// }else{
//     alert('El precio es mayor que 100')
// }

//Variables Booleanas -> True o False (verdadero o falso)


// let numero = 10
// let esMayor = (numero > 5) //esto es TRUE

// if(esValida){
//     alert('El boolean es true')
// }


//Operadores lógicos

/*
== -> Es igual -> A == B 
=== -> Es estrictamente igual -> A === B
!= -> distinto que -> A != B
!== -> es estrictamente distinto -> A !== B
<, <=. >, >= -> menor, menor o igual, mayor, mayor o igual -> A <= B
&& -> operador and ("y") A && B
|| -> operador or ("o") A || B
! -> operador not ("no") !A
*/

// let nombreIngresado = prompt('Ingrese su nombre')
// let apellidoIngresado = prompt(' Ingrese el apellido')

// if((nombreIngresado != "") && (apellidoIngresado != "")){
//     alert('Bienvenido! Nombre: ' + nombreIngresado + '\nApellido: ' + apellidoIngresado ) 
// }else{
//     alert('ERROR! Ingrese nombre y apellido')
//     console.error('No se registraron datos')
// }

//Comparador || OR

// let nombreIngresado = prompt('Ingrese su nombre')

// if((nombreIngresado == "ANA") || (nombreIngresado == "ana")){
//     alert('Bienvenido! Nombre: ' + nombreIngresado ) 
// }else{
//     alert('ERROR! Ingrese nombre válido')
//     console.error('No se registraron datos')    
// }

//combinar operadores || y &&

/*let nombreIngresado = prompt('Ingrese su nombre')

if((nombreIngresado != "") && (nombreIngresado == "EMA") || (nombreIngresado == "ema")){
    alert('Bienvenido! Nombre: ' + nombreIngresado ) 
}else{
    alert('ERROR! Ingrese nombre válido')
    console.error('No se registraron datos')    
}*/

/* NO ES LO MISMO

if((nombreIngresado != "")) && ((nombreIngresado == "EMA")) || ((nombreIngresado =="ema"))){
}

if (((nombreIngresado != '') && (nombreIngresado == "EMA")) || (nombreIngresado =="ema")){
}
*/
