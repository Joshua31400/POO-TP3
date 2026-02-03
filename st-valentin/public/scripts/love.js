/**
 * Script d'entrée pour la page Love
 * Importe les modules nécessaires à cette page
 */

import { initLoader } from './modules/loader.js';
import { initNavigation } from './modules/navigation.js';
import { initLoveGenerator } from './modules/love-generator.js';

function initLovePage() {
    initLoader();
    initNavigation();
    initLoveGenerator();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLovePage);
} else {
    initLovePage();
}
