/**
 * Module Loader
 * Affiche un écran de chargement animé
 */

// Configuration du loader
const LOADER_CONFIG = {
    duration: 2500,
    fadeOutDuration: 800,
    skinColor: '#E11D48',
    messages: {
        default: 'Préparation de l\'amour...'
    }
};

// Styles du loader (injectés dynamiquement)
const LOADER_STYLES = `
    #loading-screen {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        z-index: 9999;
        overflow: hidden;
        background: #fff;
    }

    .loader-bg-animate {
        position: absolute;
        inset: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at center, transparent 0%, #fff 100%),
                    conic-gradient(from 0deg, #ffcee6, #e3f2fd, #fff0f5, #ffe4e1, #ffcee6);
        filter: blur(80px);
        opacity: 0.8;
        animation: spin-slow 10s linear infinite;
        z-index: -2;
    }

    @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .loader-grain {
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        opacity: 0.04;
        pointer-events: none;
        z-index: -1;
    }

    .loader-hand {
        --skin-color: ${LOADER_CONFIG.skinColor};
        --tap-speed: 0.6s;
        --tap-stagger: 0.1s;
        position: relative;
        width: 80px;
        height: 60px;
        margin-left: 80px;
        z-index: 10;
    }

    .loader-hand::before {
        content: '';
        display: block;
        width: 180%;
        height: 75%;
        position: absolute;
        top: 70%;
        right: 20%;
        background-color: rgba(212, 80, 138, 0.2);
        border-radius: 40px 10px;
        filter: blur(10px);
        opacity: 0.3;
    }

    .loader-palm {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--skin-color);
        border-radius: 10px 40px;
    }

    .loader-thumb {
        position: absolute;
        width: 120%;
        height: 38px;
        background-color: var(--skin-color);
        bottom: -18%;
        right: 1%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-20deg);
        border-radius: 30px 20px 20px 10px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        border-left: 2px solid rgba(0, 0, 0, 0.1);
    }

    .loader-thumb::after {
        width: 20%;
        height: 60%;
        content: '';
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        bottom: -8%;
        left: 5px;
        border-radius: 60% 10% 10% 30%;
        border-right: 2px solid rgba(0, 0, 0, 0.05);
    }

    .loader-finger {
        position: absolute;
        width: 80%;
        height: 35px;
        background-color: var(--skin-color);
        bottom: 32%;
        right: 64%;
        transform-origin: 100% 20px;
        animation-duration: calc(var(--tap-speed) * 2);
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        transform: rotate(10deg);
    }

    .loader-finger::before {
        content: '';
        position: absolute;
        width: 140%;
        height: 30px;
        background-color: var(--skin-color);
        bottom: 8%;
        right: 65%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-60deg);
        border-radius: 20px;
    }

    .loader-finger:nth-child(1) { animation-delay: 0; filter: brightness(90%); animation-name: tap-upper-1; }
    .loader-finger:nth-child(2) { animation-delay: var(--tap-stagger); filter: brightness(95%); animation-name: tap-upper-2; }
    .loader-finger:nth-child(3) { animation-delay: calc(var(--tap-stagger) * 2); filter: brightness(100%); animation-name: tap-upper-3; }
    .loader-finger:nth-child(4) { animation-delay: calc(var(--tap-stagger) * 3); filter: brightness(105%); animation-name: tap-upper-4; }

    @keyframes tap-upper-1 { 0%, 50%, 100% { transform: rotate(10deg) scale(0.4); } 40% { transform: rotate(50deg) scale(0.4); } }
    @keyframes tap-upper-2 { 0%, 50%, 100% { transform: rotate(10deg) scale(0.6); } 40% { transform: rotate(50deg) scale(0.6); } }
    @keyframes tap-upper-3 { 0%, 50%, 100% { transform: rotate(10deg) scale(0.8); } 40% { transform: rotate(50deg) scale(0.8); } }
    @keyframes tap-upper-4 { 0%, 50%, 100% { transform: rotate(10deg) scale(1); } 40% { transform: rotate(50deg) scale(1); } }

    .loader-text {
        color: #881337;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        z-index: 10;
        opacity: 0.9;
        margin-top: 20px;
    }

    #loading-screen.fade-out {
        opacity: 0;
        filter: blur(10px);
        transition: all 0.8s ease;
    }
`;

/**
 * Crée le HTML du loader
 */
function createLoaderHTML() {
    return `
        <div class="loader-bg-animate" aria-hidden="true"></div>
        <div class="loader-grain" aria-hidden="true"></div>
        <div class="loader-hand" aria-hidden="true">
            <div class="loader-finger"></div>
            <div class="loader-finger"></div>
            <div class="loader-finger"></div>
            <div class="loader-finger"></div>
            <div class="loader-palm"></div>
            <div class="loader-thumb"></div>
        </div>
        <p class="loader-text" role="status" aria-live="polite">${LOADER_CONFIG.messages.default}</p>
    `;
}

/**
 * Injecte les styles du loader
 */
function injectStyles() {
    const style = document.createElement('style');
    style.id = 'loader-styles';
    style.textContent = LOADER_STYLES;
    document.head.appendChild(style);
    return style;
}

/**
 * Crée l'élément loader
 */
function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'loading-screen';
    loader.setAttribute('role', 'alert');
    loader.setAttribute('aria-busy', 'true');
    loader.innerHTML = createLoaderHTML();
    document.body.appendChild(loader);
    return loader;
}

/**
 * Supprime le loader avec animation
 */
function removeLoader(loader, style) {
    loader.classList.add('fade-out');
    loader.setAttribute('aria-busy', 'false');

    setTimeout(() => {
        loader.remove();
        style.remove();
    }, LOADER_CONFIG.fadeOutDuration);
}

/**
 * Initialise le loader
 */
export function initLoader() {
    const style = injectStyles();
    const loader = createLoader();

    setTimeout(() => {
        removeLoader(loader, style);
    }, LOADER_CONFIG.duration);
}

export default { initLoader };
