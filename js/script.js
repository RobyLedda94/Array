// Creazione di un array di numeri, stamparlo in console, sommare tra loro gli elementi e trovare il massimo

const numbers_Array = [5, 12, 8, 21, 7];

console.log(`Array numerico :`, numbers_Array); // Stampo l'array in console


// Somma degli elementi

let sum = 0; // Dichiarazione variabile che tiene traccia della somma

for (let i = 0; i < numbers_Array.length; i++) { // Definisco un ciclo for per scorrere tutti gli elementi dell'array

    sum = sum + numbers_Array[i]; // Ad ogni iterazione aggiungo alla variabile somma, il valore dell'elemento corrente dell'array e lo sommo

};

console.log(`La somma tra i numeri è di : ${sum}`); // Stampo in console il risultato