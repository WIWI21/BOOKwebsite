// Sélection de tous les éléments avec la classe "book-card"
var bookCards = document.querySelectorAll('.book-card');

// Ajout d'un écouteur d'événements de clic à chaque carte de livre
bookCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Recherche de l'élément avec la classe "card" à l'intérieur de la carte de livre
        var cardElement = card.querySelector('.card');
        // Basculement de la classe CSS "flipped" de l'élément de la carte
        cardElement.classList.toggle('flipped');
    });
});
