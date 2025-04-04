// Esempio di animazioni e funzionalità interattive

// Funzionalità per il form di contatto (esempio base di validazione)
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', function(e) {
e.preventDefault();
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const messaggio = document.getElementById('messaggio').value;
const formMessage = document.getElementById('form-message');
if (nome === "" || email === "" || messaggio === "") {
formMessage.textContent = "Per favore, compila tutti i campi.";
formMessage.style.color = "red";
} else {
formMessage.textContent = "Grazie per averci contattato!";
formMessage.style.color = "green";
// Qui puoi aggiungere il codice per inviare il form via AJAX
}
});
}

// Funzionalità per l'accordion FAQ
const accButtons = document.getElementsByClassName("accordion-button");
for (let i = 0; i < accButtons.length; i++) {
accButtons[i].addEventListener("click", function() {
this.classList.toggle("active");
const panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
}
});
