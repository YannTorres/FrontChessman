let index = 0;

function showNextCard() {
    const cards = document.querySelector('.main-cards');
    const totalCards = document.querySelectorAll('.card').length;
    index = (index + 1) % (totalCards - 1); 
    const offset = -index * 50; 
    cards.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextCard, 3000);