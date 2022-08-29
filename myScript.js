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
let userNumber = Math.floor(number * 6)
console.log(userNumber)

const array = [1, 2, 3, 4, 5, 6]



for (random = 0; random < array.length; random++){
    //il numero random generato * 6 genererà un numero compreso tra 0 e 5
    //che sarà da arrotondare per difetto in modo che generi valori compresi tra 0 e 5
    //successivamente verra confrontato con l'array e comparato al numero assegnato
    //stampo il risultato
    console.log(array[userNumber])    
}

    //genero un altro numero random
const number2 = Math.random()
let computerNumber = Math.floor(number2 * 6)
console.log(computerNumber)

for (random = 0; random < array.length; random++){

    console.log(array[computerNumber])
}

document.getElementById("utente").innerHTML = userNumber
document.getElementById("computer").innerHTML = computerNumber

let result = document.getElementById("bg-change")

    //confronto i risultati
if (userNumber < computerNumber){
    console.log('Hai perso')
    //result.innerHTML.append('Hai perso')
    document.getElementById("risultato").innerHTML = ('Hai perso');
    result.classList.add('bg-danger')
}

else if (userNumber > computerNumber) {
    console.log('Hai vinto')
    //result.innerHTML.append ('Hai vinto')
    result.classList.add('bg-success')
    document.getElementById("risultato").innerHTML = ('Hai vinto');
} 

else {
    console.log('Pareggio') 
    //result.innerHTML.append('Hai pareggiato')
    result.classList.add('bg-warning')
    document.getElementById("risultato").innerHTML = ('Hai pareggiato');
}
    //dichiaro il vincitore
