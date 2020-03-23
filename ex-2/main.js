// casi limite e controlli vari che vi vengono in mente (in questo caso invece creiamo copia degli ex in sottocartelle nel repo)

// genero i due numeri random
var dadiUtente = Math.floor(Math.random() * 12 + 1);
var dadiComputer = Math.floor(Math.random() * 12 + 1);
console.log("numero dell'utente: " + dadiUtente);
console.log("numero del computer: " + dadiComputer);
// confrpnto i numeri e stampo il messaggio del vincitore

if (dadiUtente > dadiComputer) {
  document.getElementById('my-id').innerHTML = "L'utente ha vinto";
}else {
  document.getElementById('my-id').innerHTML = "Il computer ha vinto";
}
