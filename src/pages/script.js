let index = 0;

function showNextCard() {
    const cards = document.querySelector('.main-cards');
    const totalCards = document.querySelectorAll('.card').length;
    index = (index + 1) % (totalCards - 1); // Ajuste para não ultrapassar o número de cards
    const offset = -index * 50; // Mover para a esquerda (cada card ocupa 50%)
    cards.style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada 3 segundos
setInterval(showNextCard, 3000);