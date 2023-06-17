/*
Estoy aprendiendo Objetivo: Crear un programa que imprima en la 
consola 50 veces el texto Estoy aprendiendo. Puedes utilizar while o for. 
Cada vez que se imprime el texto, debe aparecer al inicio el 
número de veces que se ha impreso:

1 Estoy aprendiendo
2 Estoy aprendiendo
...
50 Estoy aprendiendo
*/

// ciclo for
console.log("\n");
console.log("*** Ciclo for ***")

let i = 1;
for(let i=0; i<= 50; i++){
    console.log([i] + " - " + "Estoy aprendiendo (for)")
    
}

console.log("\n");
// ciclo while
console.log(" *** Ciclo While ***")
let x2 = 0;
    while(x2 <= 50){
        console.log([x2] + " - " + "Estoy aprendiendo (while)")
        x2++;
}

