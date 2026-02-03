/**
 * Script d'entrée pour la page Home
 * Importe les modules nécessaires à cette page
 */

import { initLoader } from './modules/loader.js';
import { initNavigation } from './modules/navigation.js';
import { initValentineButton } from './modules/valentine-button.js';

function initHomePage() {
    initLoader();
    initNavigation();
    initValentineButton();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
} else {
    initHomePage();
}
