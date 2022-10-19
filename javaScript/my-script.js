// Creo una variabile che chiede all'utente di inserire il suo nome
const firstName = prompt("Inserisci il tuo nome:");
// Lo stampo sul console.log
console.log(firstName);

// Creo una variabile che chiede all'utente di inserire il suo cognome
const lastName = prompt("Inserisci il tuo cognome:");
// Lo stampo sul console.log
console.log(lastName);

// Creo una variabile che chiede all'utente di inserire il suo colore preferito
const favoriteColor = prompt("Inserisci il tuo colore preferito:");
// Lo stampo sul console.log
console.log(favoriteColor);

// Creo una variabile password che risulta la concatenzaione di nome + cognome + colore preferito + numero 76
const personalPassword = `La tua password personale è:
"${firstName}${lastName}${favoriteColor}76"`;
// Lo stampo sul console.log
console.log(personalPassword);
// La scrivo nel tag h2 con id #your-password con metodo getElementById
// document.getElementById("your-password").innerHTML = personalPassword;
// La scrivo nel tag h2 con id #your-password con metodo querySelector
document.querySelector('#your-password').innerHTML = personalPassword;