// // 1-Crear una app que tome 2 números a través del teclado (prompt) y pasarlos a una funcion llamada Calculos la cual deberá realizar la suma , resta y deberá mostrar en el documento ambos resultados si el usuario no ingresa ningún numero deberá decirle que “debe ingresar los valores”.

let num1; //se declara una variable para almacenar un nro
let num2; //se declara una variable para almacenar otro nro

//ciclo do while para que pida ingresar dos nros y validar que sean nros
do{
    num1 = parseInt(prompt("Ingrese el primer numero para calcular")) // ingresamos por teclado el primero nro
    num2 = parseInt(prompt("Ingrese el segundo numero para calcular")) // ingresamos por teclado el segundo nro

    if(isNaN(num1)||isNaN(num2)){ //if para validar que son numeros
        alert("Debe ingresar un valor correcto") //si no es un nro mostramos un mensaje por pantalla
    }
    else
    calculos(num1,num2) //si ambos son nros entonces se realiza el calculo
} while( isNaN(num1)||isNaN(num2)) //mientras que alguno no sea un nro no terminara el bucle do while



function calculos(num1,num2){ //funcion que recibe dos nros
    let suma = num1+num2 // se declara una variable que toma el resultado de la suma de ambos nros
    let resta = num1-num2    // se declara una variable que toma el resultado de la resta de ambos nros
    document.write(`La suma es ${suma}  <br> La resta es ${resta}`) // se escribe en el documento el resultado de la suma y la resta    
}


// // 2-Crear una función llamada CalcPromedio que reciba un array de 5 números y luego deberán mostrar x pantalla el promedio total de esos números los cuales deberán ser pedidos al usuario a través de prompts y almacenados en un array 

let numeros=[] // se declara un array

for (let i = 0; i<5;i++) { //se usa un for para cargar el array con 5 numeros    
    numeros.push(parseInt(prompt(`Ingrese el ${i+1}º nro`))) //se agregan los nros al array de numeros
}

function CalcPromedio(numeros){ // se declara una funcion que recibe un array de numeros
    let suma = 0 // se declara una variable acumuladora
    let promedio //se declara una variable para almacenar el promedio

    for (numero of numeros){ // se utiliza un for of para recorrer el array y agregar los valores al acumulador
        suma += numero//se suman los valores
    }
    promedio = suma / numeros.length //se calcula el promedio dividiendo la suma por la longitud del array
 alert(`El promedio del array es ${promedio}`)//se muestra un mensaje mostrando el promedio
}

CalcPromedio(numeros);//se llama a la funcion CalcPromedio

// // 3-En el ejercicio anterior deberán agregar las validaciones correspondientes (puede ser con metodos) para que el usuario no ingrese valores nulos, valores vacios “ ” ni tampoco espacios en blanco informar al usuario en caso contrario

let numeros2=[]//se declara una variable de tipo array

function ingresarNumerosValidado(){ //se declara una funcion que no recibe parametros
for (let i = 0; i<5;i++){//con un for se cargan 5 numeros
    
    //ciclo do while, lo usamos para validar que si o si se ingrese un nro
    do{
    numeroIngresado =parseInt(prompt(`Ingrese el ${i+1}º nro`)) //se ingresa por teclado el nro
        if(isNaN(numeroIngresado)){ //se utiliza un if para saber si no es un numero
            alert("Por favor ingrese un valor correcto") //si no se ingresa un nro se advierte  
        } else
        numeros2.push(numeroIngresado)// si es un numero entonces se agrega al array
    } while(isNaN(numeroIngresado)) // si no es un numero, se vuelve a pedir que ingrese el nro de la posicion actual
}
}
ingresarNumerosValidado();// se llama a la funcion ingresarNumerosValidado

function CalcPromedio2(numeros){ //se declara una funcion que recibe un array como parametro
    let suma = 0 //se declara una variable acumuladora
    let promedio //se declara una variable para almacenar el promedio

    for (numero of numeros){// se utiliza un for of para recorrer el array y agregar los valores al acumulador
        suma += numero //se suman los valores
    }
    promedio = suma / numeros.length //se calcula el promedio dividiendo la suma por la longitud del array
 alert(`El promedio del array es ${promedio}`) //se muestra un mensaje mostrando el promedio
}
 CalcPromedio2(numeros2); //se llama a la funcion CalcPromedio2

// // 4-Debera crer una funcion SaludarPersona que reciba un nombre y una edad x argumentos esos valores pedirlos al usuario x prompts y si la edad ingresada es mayor a 18 mostrar un mensaje en el documento que diga “Bienvenido Senior” de lo contrario “Welcome Junior” 

let edad = parseInt(prompt("Ingrese su edad")) //se declara una variable y se le asigna un valor por teclado convertido a int
let nombre = prompt("Ingrese su nombre") //se declara una variable y se le asigna un valor por teclado

function SaludarPersona(nombre,edad){// se declara una funcion que recibe dos parametros
       edad>18?alert(`Bienvenido Senior ${nombre}`):alert(`Welcome Junior ${nombre}`) ; //se utiliza un if ternario con la condicion de que sea mayor a 18, en el caso positivo se muestra un mensaje y en el else(:) se muestra otro
}

SaludarPersona(nombre,edad) //se llama a la funcion SaludarPersona

// // 5-Crear una funcion llamada numRango que tome 2 valores como argumentos (inicio y fin) y devuelva un array de numeros que incluya todos los enteros dentro de ese rango y mostrarlos a traves del documento 

let inicio = parseInt(prompt("ingrese el numero de inicio")) //se declara una variable y se le asigna un valor por teclado que representa el inicio
let fin = parseInt(prompt("ingrese el numero de fin")) //se declara una variable y se le asigna un valor por teclado que representa el fin

function numRango(inicio,fin){ //se declara una funcion que recibe dos parametros
    let numeros = [] //se declara una variable de tipo array
    for(let i = inicio; i<=fin;i++){ //se utiliza un for para cargar el array con valores enteros desde el inicio hasta el fin
        numeros.push(i); //se agrega un valor al array
    }
    return numeros //devuelve un array
}
document.write(numRango(inicio,fin)) //se escribe el array en el documento llamando a la funcion

// 6-Cree una funcion flecha llamada MixVectores que reciba 2 arrays de numeros deberan unir esos 2 arrays y luego sumar todos esos numeros y mostrarlos x consola.

let array1 = [1,2,4,6]//se declara un array con 4 numeros
let array2 = [2,6,7]//se declara un array con 3 numeros
const MixVectores = (array1,array2) =>{//se utiliza una funcion flecha que recibe 2 parametros
    let array3 = array1.concat(array2) ;//se declara un array nuevo que concatenara ambos arrays previamente definidos
    let sumaTotal=0//se declara un acumulador y se le asigna un valor en 0
    for (numero of array3){//se utiliza un for of para recorrer los numeros del array
        sumaTotal += numero//se suman todos los numeros y se los guarda en el acumulador
    }
    return sumaTotal;//se retorna el valor del acumulador sumaTotal
}


console.log(MixVectores(array1,array2))//se muestra por consola el nuevo array

// 7-Dado el siguiente vector de nombres
// const nombres = [ “ roxana  ”,”  ricardo ”,”camila”, ”pablo ”, ”maria   ”,”    carlitos  ”,” luciana  ” ] //note que hay espacios en blanco 
// Deberá crear una función llamada BuscarNombre para buscar dentro ese array el nombre que introduzca el usuario y luego mostrar x pantalla si se encuentra o no dentro del array.

const nombres = [ " roxana  ","  ricardo ","camila", "pablo ", "maria   ","    carlitos  "," luciana  " ] //se declara un array de nombres

function BuscarNombre(nombres){
    let nombresTrim = [] // se declara un nuevo array de nombres
    for(nombre of nombres){
        nombresTrim.push(nombre.trim()) //se agregan los nombres sin espacios al nuevo array
    }

    let nombreBuscado = prompt("ingrese el nombre que desea buscar") //se ingresa por teclado el nombre que se quiere buscar
    let seEncontro = nombresTrim.includes(nombreBuscado)//si se encuentra es true si no es false

    if(seEncontro){
        alert("Si se encontro el nombre buscado")//si seEncontro es true se muestra este mensaje
    }else
    alert("No se encontro el nombre")//Si seEncontro es false se muestra este otro mensaje
}
BuscarNombre(nombres);//se llama a la funcion y se le pasa el nombre como argumento

/*8-Crear una funcion (arrow function) llamada numPrimos que reciba un array con numeros del 1 al 1000 esta funcion debera calcular todos los numeros primos que hay entre estos numeros y luego mostrarlos a traves del documento separados de un guion intermedio y sin espacios en blanco ej:(2 - 3 - 5 - 7 - etc).debera contar y mostrar la cantidad de numeros primos que encontro con su funcion.*/

function esPrimo(numero) { //Se crea una función para determinar si un nro es primo o no
    if (numero <= 1) return false; //Comprueba si el nro es mayor o igual a 1 porque los nros primos son mayores a 1
    if (numero <= 3) return true; //Comprueba si el nro es 2 o 3, que son primos
    if (numero % 2 === 0 ||  numero % 3 === 0) return false;//Comprueba si el nro es divisible por 2 o 3, si es así, es primo.
  //Se utiliza un for para comprobar la divisibilidad por nros de la forma 6k+-1, donde k es un nro entero hasta la raiz cuadrada del nro.
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) { //Comprueba si el nro es divisible por i o por i+2, si es así, no es primo.
        return false;
      }
    }
    return true;//Si no se ha encontrado ninguna divisibilidad, el nro es primo
  }
const numPrimos = () => {//Se declara una arrow function 
    let nrosPrimos = [];//Se declara una variable de tipo array
    for (let i = 1; i <= 1000; i++) {//Se utiliza un bucle para recorrer los nros del 1 al 1000
        if (esPrimo(i)) {//Si el nro es primo, se lo carga al array
            nrosPrimos.push(i);
        }        
    }
    document.write(nrosPrimos);//Se muestran los nros primos en el documento.
}
numPrimos();//Se llama a la función.

// 9-Escribe una funcion flecha llamada BuscarLetra que reciba un array de palabras y una letra como argumentos la funcion debera retornar un array que solo contenga palabras que contienen esa letra recibida como argumento luego debera mostrar el array resultante en el documento. 

palabras = ["manzana", "perro", "sol", "montaña", "agua"]//se declara un array de palabras
let letra = prompt("ingrese la letra que quiere buscar")//se pide al usuario que ingrese una letra por teclado
const BuscarLetra = (palabras,letra)=>{//se declara una funcion que recibe dos parametros
    let palabrasFiltradas = palabras.filter(palabra => palabra.includes(letra))//se utiliza filter para filtrar el array con las palabras que incluyan esa letra, y se la asigna a un nuevo array
    return palabrasFiltradas//se retorna el nuevo array con las palabras filtradas por letra
}

document.write(BuscarLetra(palabras,letra))//se escribe el documento con las palabras filtradas por letra

// 10-Deberan crear 2 arrays de numeros los cuales deberan ser completamente aleatorios googlear math.random y math.floor para lograrlo. El usuario debera ingresar x teclado el largo de cada array e ir rellenandolos con esos numeros aleatorios, una vez hecho esto deberan crear una Funcion Flecha llamada DeTodoUnPoco la cual debe recibir esos 2 arrays y hacer los siguiente:
// A) Concatenar ambos arrays 
// B) Encontrar el valor mas alto y el mas bajo
// C) Calcular la cantidad de numeros pares e impares
// D) Calcular el promedio 
// E) Sumar todos sus elementos
// Todo esto deberan mostrar en su documento si quieren pueden utilizar mas de una funcion para las operaciones (queda a su eleccion)

let aleatorios1 = []; //Se declara una variable de tipo array
let aleatorios2 = [];//Se declara una variable de tipo array
let largo1 = parseInt(prompt("Ingrese la longitud del primer arreglo:"));//Se declara una variable y se asigna su valor por teclado como entero
let largo2 = parseInt(prompt("Ingrese la longitud del segundo arreglo:"));//Se declara una variable y se asigna su valor por teclado como entero
for (let i = 1; i <= largo1; i++) {//Se utiliza un for para cargar el primer array con numeros aleatorios del 1 al 99
    let numeroAleatorio = Math.floor(Math.random()*99)+1;//Se declara una variable y se le asigna un valor aleatorio entre 1 y 99
    aleatorios1.push(numeroAleatorio);//Se carga el numero aleatorio en el primer array
}
for (let i = 1; i <= largo2; i++) {//Se utiliza un for para cargar el segundo array con numeros aleatorios del 1 al 99
    let numeroAleatorio = Math.floor(Math.random()*99)+1;//Se declara una variable y se le asigna un valor aleatorio entre 1 y 99    
    aleatorios2.push(numeroAleatorio);//Se carga el numero aleatorio en el segundo array
}
const DeTodoUnPoco = ()=>{//Se declara una funcion 
    do{//Se utiliza un ciclo do while para mostrar un menu hasta que el usuario decida 
        let opcion = prompt("Ingrese una opcion del 1 al 5:\n 1-Concatenar ambos arrays\n 2-Encontrar el valor mas alto y el mas bajo\n 3-Calcular la cantidad de numeros pares o impares\n 4-Calcular el promedio\n 5-Sumar todos sus elementos");//Se muestra el menu y se le pide al usuario que ingrese una opcion del 1 y 5
        let aleatorios3 = aleatorios1.concat(aleatorios2);//Se declara un array que concatena los dos arrays previamente definidos
        let suma = 0;//Se declara una variable acumuladora
        for (numero of aleatorios3) {//Se utiliza un forof para realizar la suma de todos los elementos del array
            suma+=numero;
        }
        switch (opcion) {//Se utiliza un switch realizar la operacion que se escoge en el menu
            case "1":
                alert(aleatorios3);//Si elige 1 se muestra el array con ambos arreglos concatenados.
                break;
            case "2":
                let mayor = Math.max(...aleatorios3);//Se declara una variable que contiene el numero mayor del arreglo
                let menor = Math.min(...aleatorios3);//Se declara una variable que contiene el numero menor del arreglo
                alert(`El numero mayor es: ${mayor}\nEl numero menor es: ${menor}`);//Se muestra en pantalla el nro mayor y el menor
                break;
            case "3":
                let impares=0;//Se declara un acumulador de impares
                let pares=0;//Se declara un acumulador de pares
                for (numero of aleatorios3) {//Se utiliza un forof para determinar si los numeros son pares o impares y acumular la variable correspondiente
                     if (numero%2===0) {
                        pares++;
                     }else{
                        impares++;
                     }
                }
                alert(`La cantidad de numeros pares es: ${pares}\nLa cantidad de numeros impares es: ${impares}`);//Se muestra en pantalla la cantidad de pares e impares
                break;
            case "4":
                let promedio = suma/aleatorios3.length;//Se declara una variable que calcula el promedio de la suma de todos los numeros
                alert(`El promedio de la suma de los numeros ingresados es ${promedio}`);//Se muestra en pantalla el promedio
                break;
            case "5":
                alert(`La suma de todos los elementos es ${suma}`);//Se muestra en pantalla la suma de todos los numeros
                break;
            default://Si no se selecciona un numero del 1 al 5 muestra un mensaje de advertencia
                alert("Seleccione una opcion valida");
                break;
        }
    }while (confirm("Presione cancelar para salir o aceptar para continuar."));//Se le pregunta al usuario si desea volver a ver el menu
}
DeTodoUnPoco();//Se llama a la funcion DeTodoUnPoco