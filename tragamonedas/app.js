//Destruimos el proyecto ->
/*
Tragamonedas:
- numeros -> random que se muestran al azar
- cantidad de tiros
- tiradas ganadas
- tiradas perdidas
- cantidad de monedas
- condiciones -> cantidad de monedas = cantidad de tiradas / coincidencias entre los numeros arrojados 
- mensajes para el usuario
*/

let cantidadMonedas
let cantidadTiros
let ganados = 0

alert('Bienvenido a nuestro tragamonedas 🤑​')

while(true){
    cantidadMonedas = prompt('Ingrese la cantidad de monedas (solo hasta 10 monedas)💰​')

    if(cantidadMonedas >= 1 && cantidadMonedas <= 10){
        alert(`Ya puede juegar, tenés ${cantidadMonedas} tiros`)


        for(cantidadTiros = 0; cantidadTiros < cantidadMonedas; cantidadTiros++){
            let num1 = Math.floor(Math.random() * 3) + 1
            let num2 = Math.floor(Math.random() * 3) + 1
            let num3 = Math.floor(Math.random() * 3) + 1

            if(num1 === num2 && num1 === num3){
                alert(`${num1} ${num2} ${num3} \n¡Ganaste esta tirada! 🥳​🥳​🥳​`)
                ganados++
            }else{
                alert(`${num1} ${num2} ${num3} \nSeguí intentando 😥​😥​😥​​`)
            }
        }
        if(ganados > 2){
            alert(`GANASTE ${ganados} veces!! 😎​😎​❤️‍🔥​❤️‍🔥​🔥​🔥​🔥​`)
        }else{
            alert(`Ganaste ${ganados} \nMejor suerte la próxima vez 😭​😭​😭​`)
        }
        break;
    } else{
        alert(`Ingrese un monto válido ❌​❌​❌​`)
        continue
    }
}