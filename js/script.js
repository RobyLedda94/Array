// Creazione di un array di numeri, stamparlo in console, sommare tra loro gli elementi e trovare il massimo

const numbers_Array = [5, 12, 8, 21, 7];

console.log(`Array numerico :`, numbers_Array); // Stampo l'array in console


// Somma degli elementi

let sum = 0; // Dichiarazione variabile che tiene traccia della somma

for (let i = 0; i < numbers_Array.length; i++) { // Definisco un ciclo for per scorrere tutti gli elementi dell'array

    sum = sum + numbers_Array[i]; // Ad ogni iterazione aggiungo alla variabile somma, il valore dell'elemento corrente dell'array e lo sommo

};

console.log(`La somma tra i numeri è di : ${sum}`); // Stampo in console il risultato




// Trovare il valore più grande nell'array

let max = numbers_Array[0]; // Dichiaro una variabile a cui assegno il primo valore dell'array


for (let i = 0; i < numbers_Array.length; i++) { // Definisco un ciclo for per scorrere tutti gli elementi dell'array

    if (numbers_Array[i] > max) { // Condizione dove indico se l'elemento corrente è maggiore del valore iniziale di max

        max = numbers_Array[i]; // Aggiorno il valore di max con il valore piu grande che trova

    };

};

console.log(`${max}`); // Srampo in console il valore più grande