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






// Esercizio 2 Permetto all'utente di inserire numeri tramite un input, stampo a video i valori aggiornati e mostro il valore piu grande


// Dichiarazione delle variabili 

const ex_two_ArrayNumbers = [4, 12, 56, 78, 34, 65, 3, 9, 44]; // Definito l'array numerico

const ex_two_btnAdd = document.getElementById('ex_two_btnAdd'); // Bottone Add


const ex_two_showBtn = document.getElementById('ex_two_btnShow'); // Bottone Show


const ex_two_maxValueBtn = document.getElementById('ex_two_btnMaxValue'); // Bottone Max value


const ex_two_btnReset = document.getElementById('ex_two_btnReset'); // Bottone reset


let ex_two_arrayList = document.getElementById('ex_two_arraylist'); // Ul html


let ex_two_msg = document.getElementById('ex_two_msg'); // Messaggio all'utente


// Debugging 



// Gestione evento Add
ex_two_btnAdd.addEventListener('click', function () {

    let ex_two_inputNumber = parseInt(document.getElementById('ex_two_inputNumber').value); // Catturo il valore del campo input

    ex_two_ArrayNumbers.push(ex_two_inputNumber); // Aggiungo in coda il valore del campo input

    console.log(ex_two_ArrayNumbers); // MOstro in console il risultato

});


// Gestione evento Show
ex_two_showBtn.addEventListener('click', function () {


    ex_two_arrayList.innerHTML = ''; // Reset preventivo contenuto della Ul html


    for (let i = 0; i < ex_two_ArrayNumbers.length; i++) { // Ciclo for scorro tutti gli elementi dell'array numerico


        let ex_two_listItems = document.createElement('li'); // Ogni iterazione crea un elemento lista


        ex_two_listItems.innerHTML = ex_two_ArrayNumbers[i]; // Inietto come valore ai (li) l'elemento i-esimo dell'array


        ex_two_arrayList.appendChild(ex_two_listItems); // Appendo gli elementi creati alla Ul Html


        ex_two_arrayList.classList.add('list-style-none'); // Classi css 


        ex_two_listItems.classList.add('p-1', 'bg-cadetblue', 'txt-white', 'border-white'); // Classi css

    };

});



// Gestione evento MaxValue
ex_two_maxValueBtn.addEventListener('click', function () {

    console.log(this);

});
// Gestione evento Reset
ex_two_btnReset.addEventListener('click', function () {

    console.log(this);

});