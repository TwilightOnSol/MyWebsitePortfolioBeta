const texts = ["Graphic Design", "Coding And Scripting", "Interface Creation", "Cryptocurrency", "Mobile Investing", "Content Creation", "Mobile Investing", "On-Chain Development"];
let index = 0;

function typeWriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    typewriterText.textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(() => {
        typewriterText.textContent = '';
        setTimeout(typeWriter, 1000); // Wait before typing next text
    }, 2000); // Wait before clearing text
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});