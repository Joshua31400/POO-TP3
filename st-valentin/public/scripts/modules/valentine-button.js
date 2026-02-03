/**
 * Module Valentine Button
 * Gère l'interaction ludique du bouton "Non"
 */

// Configuration
const CONFIG = {
    messages: [
        "Tu es sûre ?",
        "Vraiment ?",
        "Réfléchis bien...",
        "Mauvais choix !",
        "Essaie encore 😏",
        "Non non non !",
        "Impossible !",
        "💔 ?!"
    ],
    padding: 30,
    minDistance: 150,
    maxAttempts: 15,
    scaleIncrement: 0.08,
    maxScale: 2
};

/**
 * Calcule une position aléatoire évitant le curseur
 */
function getRandomPosition(button, cursorX, cursorY) {
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const minX = CONFIG.padding;
    const maxX = window.innerWidth - btnWidth - CONFIG.padding;
    const minY = CONFIG.padding;
    const maxY = window.innerHeight - btnHeight - CONFIG.padding;

    let randomX, randomY;
    let attempts = 0;

    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
        attempts++;
    } while (
        Math.abs(randomX - cursorX) < CONFIG.minDistance &&
        Math.abs(randomY - cursorY) < CONFIG.minDistance &&
        attempts < CONFIG.maxAttempts
    );

    return {
        x: Math.max(minX, Math.min(maxX, randomX)),
        y: Math.max(minY, Math.min(maxY, randomY))
    };
}

/**
 * Initialise le comportement du bouton
 */
export function initValentineButton() {
    const buttons = document.querySelectorAll('.question button');
    if (buttons.length < 2) return;

    const noButton = buttons[1];
    const yesButton = buttons[0];
    const form = document.querySelector('.form');

    let messageIndex = 0;
    let scale = 1;
    let isFirstHover = true;

    /**
     * Initialise la position fixe du bouton
     */
    function initButtonPosition() {
        const rect = noButton.getBoundingClientRect();

        if (form) {
            form.style.transition = 'box-shadow 0.3s ease';
            form.style.transform = 'none';
        }

        noButton.style.position = 'fixed';
        noButton.style.left = `${rect.left}px`;
        noButton.style.top = `${rect.top}px`;
        noButton.style.zIndex = '9999';
        noButton.style.margin = '0';
    }

    /**
     * Gère le survol du bouton Non
     */
    function handleNoButtonHover(e) {
        if (isFirstHover) {
            initButtonPosition();
            isFirstHover = false;
        }

        noButton.textContent = CONFIG.messages[messageIndex % CONFIG.messages.length];
        messageIndex++;

        const { x, y } = getRandomPosition(noButton, e.clientX, e.clientY);

        noButton.style.transition = 'left 0.25s ease-out, top 0.25s ease-out';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        scale = Math.min(scale + CONFIG.scaleIncrement, CONFIG.maxScale);
        yesButton.style.transform = `scale(${scale})`;
        yesButton.style.transition = 'transform 0.3s ease';
    }

    /**
     * Ajuste la position au redimensionnement
     */
    function handleResize() {
        if (isFirstHover) return;

        const maxX = window.innerWidth - noButton.offsetWidth - CONFIG.padding;
        const maxY = window.innerHeight - noButton.offsetHeight - CONFIG.padding;

        noButton.style.left = `${Math.min(parseFloat(noButton.style.left), maxX)}px`;
        noButton.style.top = `${Math.min(parseFloat(noButton.style.top), maxY)}px`;
    }

    // Event listeners
    noButton.addEventListener('mouseenter', handleNoButtonHover);
    window.addEventListener('resize', handleResize);

    // Accessibilité
    yesButton.setAttribute('aria-label', 'Oui, je veux être ta Valentine');
    noButton.setAttribute('aria-label', 'Non, je refuse');
}

export default { initValentineButton };
