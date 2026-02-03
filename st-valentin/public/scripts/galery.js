/**
 * Script d'entrée pour la page Galerie
 * Importe les modules nécessaires à cette page
 */

import { initLoader } from './modules/loader.js';
import { initNavigation } from './modules/navigation.js';

function initGaleryPage() {
    initLoader();
    initNavigation();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGaleryPage);
} else {
    initGaleryPage();
}
