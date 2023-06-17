/* Escribir un programa que imprima Buenos días si el 
número asignado a la variable time es menor que 12. 
Si el numero es mayor o igual a 12 y menor o igual a 18, 
el programa debe imprimir Buenas tardes, 
de lo contrario debe imprimir Buenas noches.
*/
let timer = 12;

if (timer <12){
    console.log("Buenos dias")
}
else if(timer >= 12 && timer <= 18){
    console.log("Buenas tardes")
} 
else {
    console.log("Buenas noches")
}



