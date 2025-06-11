const tarotCards = ["card1.jpg", "card2.jpg", "card3.jpg"]; 
const runes = {
    Algiz: "Protection - Golden glow",
    Berkana: "Growth - Green glow",
    Gebo: "Love - Soft pink glow",
    Freya: "Feminine Power - Soft pink glow",
    Wunjo: "Joy - Bright blue glow"
};

function shuffleCards() {
    let randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById("tarot-card").src = randomCard;
}

function drawRune() {
    let runeKeys = Object.keys(runes);
    let randomRune = runeKeys[Math.floor(Math.random() * runeKeys.length)];
    document.getElementById("rune-result").innerText = `${randomRune}: ${runes[randomRune]}`;
}