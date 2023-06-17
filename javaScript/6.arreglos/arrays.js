let array= [1, 'lina', 'orozco', 2 , 100];
let posicion = array[4];
console.log(posicion);
console.log("Array " + array)

// para recorrer el arreglo

for (let i= 0; i < array.length; i++){
    console.log("Posicion " + i + ": " + array [i])
}

// reasigna valor

array[3]="Hola";
console.log(array) 