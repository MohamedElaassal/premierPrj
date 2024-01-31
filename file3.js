// JavaScript simple pour changer le texte au clic
document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.querySelector('h1');

    welcomeText.addEventListener('click', function() {
        welcomeText.textContent = 'Bonjour à tous!';
        welcomeText.style.color = '#28a745';
    });
});
