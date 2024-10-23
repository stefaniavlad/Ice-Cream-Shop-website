// script for popup.js

// Selectăm butoanele și modalurile
const locationsButton = document.querySelector('.button-our-locations');
const franchiseButton = document.querySelector('.button-franchise');
const locationsModal = document.getElementById('mapsModalLocations');
const franchiseModal = document.getElementById('mapsModalFranchise');
const closeButtons = document.querySelectorAll('.close');

// Funcția pentru a deschide modalul corespunzător
locationsButton.addEventListener('click', function () {
    locationsModal.style.display = 'block';
});

franchiseButton.addEventListener('click', function () {
    franchiseModal.style.display = 'block';
});

// Funcția pentru a închide modalul
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        locationsModal.style.display = 'none';
        franchiseModal.style.display = 'none';
    });
});

// Închide modalul când faci clic în afara acestuia
window.addEventListener('click', function (event) {
    if (event.target === locationsModal) {
        locationsModal.style.display = 'none';
    }
    if (event.target === franchiseModal) {
        franchiseModal.style.display = 'none';
    }
});
