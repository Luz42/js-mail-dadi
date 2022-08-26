console.log('JS-OK')

/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:

Che ci sia un array da qualche parte?

Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/

//GENERO UN NUMERO RANDOM DA O A 5
//perchè gli elementi presenti nell'ARRAY si iniziano a contare da zero e qui ci sono 6 valori
const number = Math.random()
let naturalNumber = Math.floor(number * 6)
console.log(naturalNumber)

const array = [1, 2, 3, 4, 5, 6]



for (random = 0; random < array.length; random++){
    //il numero random generato * 6 genererà un numero compreso tra 0 e 5
    //che sarà da arrotondare per difetto in modo che generi valori compresi tra 0 e 5
    console.log(array[naturalNumber])
    //successivamente verra confrontato con l'array e comparato al numero assegnato
    //stampo il risultato
    //genero un altro numero random
    //confronto i risultati
    //dichiaro il vincitore
}