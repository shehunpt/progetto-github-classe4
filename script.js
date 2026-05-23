document.querySelectorAll('.faq-item').forEach(item => {
    const title = item.querySelector('.faq-title');
    title.addEventListener('click', () => {
        // Chiude tutti gli altri elementi
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('aperto');
        });
        // Apre/chiude solo quello cliccato
        item.classList.toggle('aperto');
    });
});
