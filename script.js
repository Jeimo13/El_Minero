function showScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Mostrar la pantalla seleccionada
    document.getElementById(screenId).classList.add('active');
}

function selectCharacter(element) {
    // Remover selección previa
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    // Seleccionar nuevo personaje
    element.classList.add('selected');
}