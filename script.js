// Logica Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const title = item.querySelector('.faq-title');
    title.addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('aperto');
        });
        item.classList.toggle('aperto');
    });
});

// Logica Form
const form = document.getElementById('mio-form');
const feedback = document.getElementById('feedback-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messaggio = document.createElement('p');
    messaggio.textContent = "Grazie! Il tuo messaggio è stato inviato con successo.";
    feedback.appendChild(messaggio);
    form.reset();
});
