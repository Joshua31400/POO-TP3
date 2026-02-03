/**
 * Module Love Generator
 * Génère des messages d'amour aléatoires avec animation
 */

// Messages d'amour
const LOVE_MESSAGES = [
    "Tu es mon rayon de soleil ☀️",
    "Je t'aime plus que tout 💖",
    "Chaque jour à tes côtés est un cadeau 🎁",
    "Ton sourire illumine ma vie ✨",
    "Avec toi, tout est plus beau 🌹",
    "Tu es mon univers 🌌",
    "Je pense à toi tout le temps 🥰",
    "Merci d'être toi 💞",
    "Je veux te serrer dans mes bras pour toujours 🤗",
    "Mon cœur bat pour toi 💓"
];

// Styles d'animation
const ANIMATION_STYLES = `
    #love-message {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
    
    #love-message.fade-out {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
        filter: blur(4px);
    }
    
    #love-message.fade-in {
        animation: fadeInMessage 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    
    @keyframes fadeInMessage {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            filter: blur(8px);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
        }
    }
    
    #generate-love:active {
        transform: scale(0.95);
    }
`;

/**
 * Injecte les styles d'animation
 */
function injectStyles() {
    const existingStyle = document.getElementById('love-generator-styles');
    if (existingStyle) return;

    const style = document.createElement('style');
    style.id = 'love-generator-styles';
    style.textContent = ANIMATION_STYLES;
    document.head.appendChild(style);
}

/**
 * Génère un index aléatoire différent du précédent
 */
function getRandomIndex(lastIndex, arrayLength) {
    if (arrayLength <= 1) return 0;

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayLength);
    } while (randomIndex === lastIndex);

    return randomIndex;
}

/**
 * Initialise le générateur de messages d'amour
 */
export function initLoveGenerator() {
    const btn = document.getElementById('generate-love');
    const msg = document.getElementById('love-message');

    if (!btn || !msg) return;

    injectStyles();

    let lastIndex = -1;

    btn.addEventListener('click', () => {
        const randomIndex = getRandomIndex(lastIndex, LOVE_MESSAGES.length);
        lastIndex = randomIndex;

        // Animation de sortie
        msg.classList.remove('fade-in');
        msg.classList.add('fade-out');

        // Après la sortie, change le texte et anime l'entrée
        setTimeout(() => {
            msg.textContent = LOVE_MESSAGES[randomIndex];
            msg.classList.remove('fade-out');
            msg.classList.add('fade-in');
        }, 400);
    });

    // Accessibilité
    btn.setAttribute('aria-label', 'Générer un nouveau message d\'amour');
    msg.setAttribute('aria-live', 'polite');
    msg.setAttribute('role', 'status');
}

export default { initLoveGenerator };
