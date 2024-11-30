// Mot de passe prédéfini pour la comparaison
const correctPassword = "securePassword123";

// Sélection des éléments du formulaire
const form = document.getElementById('signin-form');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Ajout de l'écouteur d'événements pour le formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Vérifie si le mot de passe entré est correct
    if (passwordInput.value === correctPassword) {
        alert("Welcome! You have successfully signed in.");
        // Redirection ou autre logique de connexion peut être ajoutée ici
    } else {
        errorMessage.style.display = 'block'; // Affiche le message d'erreur
    }
});
