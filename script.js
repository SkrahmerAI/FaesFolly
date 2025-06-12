const tarotCards = [
    { image: 'images/tarot1.jpg', meaning: 'A new beginning awaits.' },
    { image: 'images/tarot2.jpg', meaning: 'Trust your intuition.' },
    // Add more cards here
];

const runes = [
    { image: 'images/rune1.jpg', meaning: 'Strength and guidance.' },
    { image: 'images/rune2.jpg', meaning: 'Mystical protection.' },
    // Add more runes here
];

function drawTarot() {
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('tarotImage').src = randomCard.image;
    document.getElementById('tarotMeaning').innerText = randomCard.meaning;
}

function castRune() {
    const randomRune = runes[Math.floor(Math.random() * runes.length)];
    document.getElementById('runeImage').src = randomRune.image;
    document