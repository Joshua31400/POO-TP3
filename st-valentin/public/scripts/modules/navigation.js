/**
 * Module Navigation
 * Gère l'accessibilité et les interactions de la navigation
 */

/**
 * Ajoute les attributs d'accessibilité à la navigation
 */
function enhanceAccessibility() {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a');

    if (!nav) return;

    // Attributs de navigation
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation principale');

    if (navList) {
        navList.setAttribute('role', 'list');
    }

    // Marque le lien actif
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        const isActive = href === currentPage ||
                        (currentPage === '' && href === 'home.html');

        if (isActive) {
            link.setAttribute('aria-current', 'page');
        }

        // Améliore l'accessibilité des liens
        link.setAttribute('role', 'link');
    });
}

/**
 * Gère le focus visible pour la navigation au clavier
 */
function setupKeyboardNavigation() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
}

/**
 * Initialise la navigation
 */
export function initNavigation() {
    enhanceAccessibility();
    setupKeyboardNavigation();
}

export default { initNavigation };
