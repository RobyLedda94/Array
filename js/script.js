// Creazione di un array di numeri, stamparlo in console, sommare tra loro gli elementi e trovare il massimo

const numbers_Array = [5, 12, 8, 21, 7];


console.log('Array numerico :', numbers_Array); // Stampo l'array in console


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


const ex_two_showBtn = document.getElementById('ex_two_btnShow'); // Bottone Show


const ex_two_btnAdd = document.getElementById('ex_two_btnAdd'); // Bottone Add


const ex_two_maxValueBtn = document.getElementById('ex_two_btnMaxValue'); // Bottone Max value


const ex_two_btnReset = document.getElementById('ex_two_btnReset'); // Bottone reset


let ex_two_arrayList = document.getElementById('ex_two_arraylist'); // Ul html


let ex_two_msg = document.getElementById('ex_two_msg'); // Messaggio all'utente





// Debugging 






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

// Gestione evento Add
ex_two_btnAdd.addEventListener('click', function () {

    let ex_two_inputNumber = parseInt(document.getElementById('ex_two_inputNumber').value); // Catturo il valore del campo input


    ex_two_msg.classList = ''; // Reset preventivo delle classi css 


    let ex_two_flagFound = false; // Varibile flag settata a false 



    if (isNaN(ex_two_inputNumber)) { // Controllo la validità del dato (se non è un numero eseguo il seguente blocco)

        ex_two_msg.innerHTML = 'Prego inserire un dato valido !!'; // Inner del contenuto al messaggo

        ex_two_msg.classList.add('txt-red'); // Classi Css

        return;

    };


    for (let i = 0; i < ex_two_ArrayNumbers.length; i++) { // Scorro tutti gli elementi dell'array numerico

        if (ex_two_ArrayNumbers[i] === ex_two_inputNumber) { // Se trova corrispondeza tra l'elemento i-esimo dell'array e il campo di input

            ex_two_flagFound = true; // Setto la variabile flag a true
        };

    };


    if (ex_two_flagFound === true) { // Se la variabile flag risulta (true) non aggiungo il valore


        ex_two_msg.innerHTML = `Il valore ${ex_two_inputNumber} è gia presente nella lista !!`; // Inner del contenuto al messaggio

        ex_two_msg.classList.add('txt-red'); // Class List


    } else { // Altrimenti non trova corrispondenza (false)

        ex_two_ArrayNumbers.push(ex_two_inputNumber); // Aggiungo in coda il nuovo valore nell'array

        ex_two_msg.innerHTML = `Il valore ${ex_two_inputNumber} è stato aggiunto correttamente !!`; // Inner del contenuto

        ex_two_msg.classList.add('txt-green'); // Classi css
    };

});



// Gestione evento MaxValue
ex_two_maxValueBtn.addEventListener('click', function () {

    ex_two_msg.classList = ''; // Reset preventivo classi css


    let ex_two_maxValue = ex_two_ArrayNumbers[0]; // Variabile che tiene traccia del valore massimo dell'array


    for (let i = 0; i < ex_two_ArrayNumbers.length; i++) { // Scorro tutti gli elementi dell'array

        if (ex_two_ArrayNumbers[i] > ex_two_maxValue) {  // Condizione dove indico se l'elemento corrente è maggiore del valore iniziale di maxValue

            ex_two_maxValue = ex_two_ArrayNumbers[i]; // se risulta vero assegno il nuovo valore alla variabile maxValue


        };

    };

    ex_two_msg.innerHTML = `Il valore massimo trovato è ${ex_two_maxValue} !!`; // Inietto dinamicamente il contenuto al messaggio

    ex_two_msg.classList.add('txt-green'); // Classi css


    let listItems = ex_two_arrayList.getElementsByTagName('li'); // Recupero tutti i list items (restituisce una htmlCollection)





    for (let i = 0; i < listItems.length; i++) {  // Ciclo For per scorrere gli elementi della HTMLCollection



        let item_value = parseInt(listItems[i].textContent); // 




        if (item_value === ex_two_maxValue) { // confronto il valore dei list items attualmente iterato con il valore di max value


            listItems[i].classList.add('bg-green'); // Se corrispondono aggiungo la classe css

        } else {

            listItems[i].classList.remove('bg-green'); // Altrimenti la rimuovo
        }

    };



});


// Gestione evento Reset
ex_two_btnReset.addEventListener('click', function () {

    ex_two_arrayList.innerHTML = ''; // Svuoto il contenuto della lista

    document.getElementById('ex_two_inputNumber').value = ''; // Svuoto il valore del campo input

    ex_two_msg.innerHTML = ''; // Svuoto il contenuto del messaggio

    ex_two_msg.classList = ''; // Reset classi css

});



// Esercizio 3 In base alla fasci d'età aggiungo in uno specifico array e creo le corrispondenti liste a video


// Dichiarazione delle variabili

// Strutture dati


let ex_three_adultsArray = [];

let ex_three_minorsArray = [];

let ex_three_overArray = [];


// Elementi di interazione

const ex_three_btnAdd = document.getElementById('ex_three_btnAdd'); // Bottone Add


const ex_three_btnShow = document.getElementById('ex_three_btnShow'); // Bottone show


const ex_three_btnReset = document.getElementById('ex_three_btnReset'); // Bottone reset


// Elementi di visualizazzione


let ex_three_adultsContainer = document.getElementById('ex_three_adultsContainer'); // Contenitore adulti

let ex_three_adultsContent = ''; // Variabile conenuto (vuoto)



let ex_three_minorsContainer = document.getElementById('ex_three_minorsContainer'); // Contenitore minori

let ex_three_minorsContent = ''; // Variabile contenuto (vuoto)


let ex_three_overContainer = document.getElementById('ex_three_overContainer'); // Contenitore over65

let ex_three_overContent = ''; // Variabile contenuto (vuoto)


let ex_three_msg = document.getElementById('ex_three_msg'); // Messaggio all'utente


// Debugging




// Gestione evento Add

ex_three_btnAdd.addEventListener('click', function () {

    let ex_three_inputName = document.getElementById('ex_three_inputName').value; // Recupero l'input e catturo il valore


    let ex_three_selectAge = document.getElementById('ex_three_selectAge').value; // Recupero la select e catturo il valore


    ex_three_msg.classList = ''; // Reset preventivo delle classi


    if (ex_three_inputName === '' || ex_three_selectAge === '0') { // Condizione di controllo sul dato

        ex_three_msg.innerHTML = 'Prego inserire un dato valido !!'; // Inner del contenuto

        ex_three_msg.classList.add('txt-red'); // classi css



    } else if (ex_three_selectAge === '1') { // Condizione agginta (array) dei minorenni

        ex_three_adultsArray.push(`${ex_three_inputName} : Maggiorenne`); // Aggiungo in coda (adultsArray)

        ex_three_msg.innerHTML = 'Lista Maggiorenni aggiornata premi su mostra !!'; // Inner del contenuto

        ex_three_msg.classList.add('txt-green'); // Classi css

    } else if (ex_three_selectAge === '2') { // Condizione aggiunta (array) dei maggiorenni

        ex_three_minorsArray.push(`${ex_three_inputName} : Minorenne`); // Aggiungo in coda (minorsArray)

        ex_three_msg.innerHTML = 'Lista Minorenni aggiornata premi su mostra !!'; // Inner del contenuto

        ex_three_msg.classList.add('txt-green'); // Classi css

    } else if (ex_three_selectAge === '3') { // Condizione aggiunta (array) over65

        ex_three_overArray.push(`${ex_three_inputName} : Over65`); // Aggiungo in coda (over65Array)

        ex_three_msg.innerHTML = 'Lista Over65 aggiornata premi su mostra !!'; // Inietto il contenuto

        ex_three_msg.classList.add('txt-green'); // Classi css

    };

});




// Gestione evento show

ex_three_btnShow.addEventListener('click', function () {

    ex_three_msg.innerHTML = ''; // Reset preventivo contenuto del messaggio


    if (ex_three_adultsArray.length === 0 && ex_three_minorsArray.length === 0 && ex_three_overArray.length === 0) { // Condizione di controllo lunchezze array


        ex_three_msg.innerHTML = 'Al momento le liste sono vuote !!'; // Inietto il contenuto al messaggio

        ex_three_msg.classList.add('txt-red'); // classi css


    } else {


        ex_three_adultsContainer.innerHTML = ''; // Reset Preventivo al contenitore

        ex_three_adultsContent = `<h3>Maggiorenni</h3>`; // Reset al contenuto (sto resettando una stringa non utilizzo innerHTML)

        for (let i = 0; i < ex_three_adultsArray.length; i++) { //  Ciclo for (adults Array)

            // Creazione dinamica struttura Html 
            ex_three_adultsContent += ` 
                        <ul class = 'list-style-none'>
                            <li class= ' p-1 bg-cadetblue txt-white border-white'>${i + 1} ${ex_three_adultsArray[i]}</li>
                        </ul> 
            `

        };

        ex_three_adultsContainer.innerHTML += ex_three_adultsContent; // Concateno i valori delle variabili (Contenitore += Contenuto)




        ex_three_minorsContainer.innerHTML = ''; // Reset al contenutore

        ex_three_minorsContent = `<h3>Minorenni</h3>`; // Reset al contenuto

        for (let i = 0; i < ex_three_minorsArray.length; i++) { // Ciclo for (minors Array)

            // Creazione dinamica struttura Html 
            ex_three_minorsContent += `
                        <ul class = 'list-style-none'>
                            <li class= ' p-1 bg-cadetblue txt-white border-white'>${i + 1} ${ex_three_minorsArray[i]}</li>
                        </ul> 
            `


        };

        ex_three_minorsContainer.innerHTML += ex_three_minorsContent; // Concateno i valori delle variabili (Contenitore += Contenuto)




        ex_three_overContainer.innerHTML = '' // Reset al contenitore

        ex_three_overContent = `<h3>Over65</h3>`; // Reset al contenuto

        for (let i = 0; i < ex_three_overArray.length; i++) { // Ciclo for (over65 Array)

            // Creazione dinamica struttura Html 
            ex_three_overContent += `
                        <ul class = 'list-style-none'>
                            <li class= ' p-1 bg-cadetblue txt-white border-white'>${i + 1} ${ex_three_overArray[i]}</li>
                        </ul> 
            `

        };

        ex_three_overContainer.innerHTML += ex_three_overContent; // Concateno i valori delle variabili (Contenitore += Contenuto)

    };

});


// Gestione evento reset

ex_three_btnReset.addEventListener('click', function () {

    // Svuoto il contenuto degli array

    ex_three_adultsArray = [];

    ex_three_minorsArray = [];

    ex_three_overArray = [];



    // Svuoto i contenitori

    ex_three_adultsContainer.innerHTML = '';

    ex_three_minorsContainer.innerHTML = '';

    ex_three_overContainer.innerHTML = '';



    // Resetto i campi di input

    document.getElementById('ex_three_inputName').value = '';

    document.getElementById('ex_three_selectAge').value = '0';


    // Svuoto il contenuto del messaggio e resetto le classi di stile

    ex_three_msg.innerHTML = '';

    ex_three_msg.classList = '';

});