/**
 * Point d'entrée principal des scripts
 * Ce fichier gère l'initialisation de tous les modules
 */

// Import des modules - type="module" requis dans le HTML
import { initLoader } from './modules/loader.js';
import { initNavigation } from './modules/navigation.js';

/**
 * Initialisation de l'application
 */
function initApp() {
    // Loader (commun à toutes les pages)
    initLoader();

    // Navigation accessible
    initNavigation();
}

// Lancement de l'application au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
