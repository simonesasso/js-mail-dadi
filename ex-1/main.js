// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// dichiaro larray con le mail
var arrayMail = ["sasso.96@libero.it", "sasso.95@libero.it", "sasso.94@libero.it", "sasso.93@libero.it", "sasso.99@libero.it"];
var test = 0;

// chiedo allutente la sua arrayMail
mailUtente = prompt("inserisci la tua mail");

// controllo che la mail sia in lista
for (var i = 0; i < arrayMail.length; i++) {
  if (arrayMail[i] == mailUtente) {
    document.getElementById('my-id').innerHTML = "La tua mail  è compresa nella lista";
    test = 1;
  }
}
if(test == 0){
  document.getElementById('my-id').innerHTML = "La tua mail non è compresa nella lista";
}
