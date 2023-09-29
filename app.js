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

// let array1 = [1,2,4,6]
// let array2 = [2,6,7]
// const MixVectores = (array1,array2) =>{
//     let array3 = array1.concat(array2) ;
//     let sumaTotal=0
//     for (numero of array3){
//         sumaTotal += numero
//     }
//     return sumaTotal;
// }


// console.log(MixVectores(array1,array2))

// 7-Dado el siguiente vector de nombres
// const nombres = [ “ roxana  ”,”  ricardo ”,”camila”, ”pablo ”, ”maria   ”,”    carlitos  ”,” luciana  ” ] //note que hay espacios en blanco 
// Deberá crear una función llamada BuscarNombre para buscar dentro ese array el nombre que introduzca el usuario y luego mostrar x pantalla si se encuentra o no dentro del array.

// const nombres = [ " roxana  ","  ricardo ","camila", "pablo ", "maria   ","    carlitos  "," luciana  " ] //se declara un array de nombres

// function BuscarNombre(nombres){
//     let nombresTrim = [] // se declara un nuevo array de nombres
//     for(nombre of nombres){
//         nombresTrim.push(nombre.trim()) //se agregan los nombres sin espacios al nuevo array
//     }

//     let nombreBuscado = prompt("ingrese el nombre que desea buscar") //se ingresa por teclado el nombre que se quiere buscar
//     let seEncontro = nombresTrim.includes(nombreBuscado)//si se encuentra es true si no es false

//     if(seEncontro){
//         alert("Si se encontro el nombre buscado")//si seEncontro es true se muestra este mensaje
//     }else
//     alert("No se encontro el nombre")//Si seEncontro es false se muestra este otro mensaje
// }
// BuscarNombre(nombres);//se llama a la funcion y se le pasa el nombre como argumento

// 8-Crear una funcion (arrow function) llamada numPrimos que reciba un array con numeros del 1 al 1000 esta funcion debera calcular todos los numeros primos que hay entre estos numeros y luego mostrarlos a traves del documento separados de un guion intermedio y sin espacios en blanco ej:(2 - 3 - 5 - 7 - etc).debera contar y mostrar la cantidad de numeros primos que encontro con su funcion.

// 9-Escribe una funcion flecha llamada BuscarLetra que reciba un array de palabras y una letra como argumentos la funcion debera retornar un array que solo contenga palabras que contienen esa letra recibida como argumento luego debera mostrar el array resultante en el documento. 

// let palabras = ["asd","qqweeeqwq","eeeeeeeeeeee"]
// let letra = prompt("ingrese la letra que quiere buscar")
// const BuscarLetra = (palabras,letra)=>{
//     let palabrasFiltradas = palabras.filter(palabra => palabra.includes(letra))
//     return palabrasFiltradas
// }

// document.write(BuscarLetra(nombres,letra))
// 10-Deberan crear 2 arrays de numeros los cuales deberan ser completamente aleatorios googlear math.random y math.floor para lograrlo. El usuario debera ingresar x teclado el largo de cada array e ir rellenandolos con esos numeros aleatorios, una vez hecho esto deberan crear una Funcion Flecha llamada DeTodoUnPoco la cual debe recibir esos 2 arrays y hacer los siguiente:
// A) Concatenar ambos arrays 
// B) Encontrar el valor mas alto y el mas bajo
// C) Calcular la cantidad de numeros pares e impares
// D) Calcular el promedio 
// E) Sumar todos sus elementos
// Todo esto deberan mostrar en su documento si quieren pueden utilizar mas de una funcion para las operaciones (queda a su eleccion)
