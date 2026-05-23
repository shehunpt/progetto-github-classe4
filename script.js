const form = document.getElementById('mio-form');
const feedback = document.getElementById('feedback-message');

form.addEventListener('submit', (event) => {
    // Blocca il comportamento di default del browser
    event.preventDefault();

    // Crea un nuovo elemento <p> per il messaggio
    const messaggio = document.createElement('p');
    messaggio.textContent = "Grazie! Il tuo messaggio è stato inviato con successo.";
    
    // Aggiunge il messaggio al div di feedback
    feedback.appendChild(messaggio);
    
    // Pulisce i campi del form
    form.reset();
});
