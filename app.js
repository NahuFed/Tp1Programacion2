// 1-Crear una app que tome 2 números a través del teclado (prompt) y pasarlos a una funcion llamada Calculos la cual deberá realizar la suma , resta y deberá mostrar en el documento ambos resultados si el usuario no ingresa ningún numero deberá decirle que “debe ingresar los valores”.

// let num1;
// let num2;

// do{
//     num1 = parseInt(prompt("Ingrese el primer numero para calcular"))
//     num2 = parseInt(prompt("Ingrese el segundo numero para calcular")) 

//     if(isNaN(num1)||isNaN(num2)){
//         alert("Debe ingresar un valor correcto")
//     }
//     else
//     calculos(num1,num2)
// } while( isNaN(num1)||isNaN(num2))



// function calculos(num1,num2){
//     let suma = num1+num2 
//     let resta = num1-num2    
//     document.write(`La suma es ${suma}  <br> La resta es ${resta}`)
// }


// // 2-Crear una función llamada CalcPromedio que reciba un array de 5 números y luego deberán mostrar x pantalla el promedio total de esos números los cuales deberán ser pedidos al usuario a través de prompts y almacenados en un array 

// let numeros=[]

// for (let i = 0; i<5;i++){
//     // numeros[i] = parseInt(prompt(`Ingrese el ${i+1}º nro`))
//     numeros.push(parseInt(prompt(`Ingrese el ${i+1}º nro`)))
// }

// function CalcPromedio(numeros){
//     let suma = 0
//     let promedio

//     for (numero of numeros){
//         suma += numero
//     }
//     promedio = suma / numeros.length
//  alert(`El promedio del array es ${promedio}`)
// }

// CalcPromedio(numeros);

// 3-En el ejercicio anterior deberán agregar las validaciones correspondientes (puede ser con metodos) para que el usuario no ingrese valores nulos, valores vacios “ ” ni tampoco espacios en blanco informar al usuario en caso contrario

// let numeros2=[]

// function ingresarNumerosValidado(){
// for (let i = 0; i<5;i++){
//     do{
//     numeroIngresado =parseInt(prompt(`Ingrese el ${i+1}º nro`))
//         if(isNaN(numeroIngresado)){
//             alert("Por favor ingrese un valor correcto")
//         } else
//         numeros2.push(numeroIngresado)
//     } while(isNaN(numeroIngresado))
// }
// }
// ingresarNumerosValidado();
// function CalcPromedio2(numeros){
//     let suma = 0
//     let promedio

//     for (numero of numeros){
//         suma += numero
//     }
//     promedio = suma / numeros.length
//  alert(`El promedio del array es ${promedio}`)
// }
//  CalcPromedio2(numeros2);

// 4-Debera crer una funcion SaludarPersona que reciba un nombre y una edad x argumentos esos valores pedirlos al usuario x prompts y si la edad ingresada es mayor a 18 mostrar un mensaje en el documento que diga “Bienvenido Senior” de lo contrario “Welcome Junior” 

// let edad = parseInt(prompt("Ingrese su edad"))
// let nombre = prompt("Ingrese su nombre")

// function SaludarPersona(nombre,edad){
//        edad>18?alert(`Bienvenido Senior ${nombre}`):alert(`Welcome Junior ${nombre}`) ;
// }

// SaludarPersona(nombre,edad)

// 5-Crear una funcion llamada numRango que tome 2 valores como argumentos (inicio y fin) y devuelva un array de numeros que incluya todos los enteros dentro de ese rango y mostrarlos a traves del documento 

// let inicio = parseInt(prompt("ingrese el numero de inicio"))
// let fin = parseInt(prompt("ingrese el numero de fin"))

// function numRango(inicio,fin){
//     let numeros = []
//     for(let i = inicio; i<=fin;i++){
//         numeros.push(i);
//     }
//     return numeros
// }
// document.write(numRango(inicio,fin))

// 6-Cree una funcion flecha llamada MixVectores que reciba 2 arrays de numeros deberan unir esos 2 arrays y luego sumar todos esos numeros y mostrarlos x consola.

let array1 = [1,2,4,6]
let array2 = [2,6,7]
const MixVectores = (array1,array2) =>{
    let array3 = array1.concat(array2) ;
    let sumaTotal=0
    for (numero of array3){
        sumaTotal += numero
    }
    return sumaTotal;
}


console.log(MixVectores(array1,array2))