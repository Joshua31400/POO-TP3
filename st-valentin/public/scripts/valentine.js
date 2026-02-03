/**
 * Script d'entrée pour la page valentine
 * Importe les modules nécessaires à cette page
 */
import { launchConfetti } from './modules/confetti.js';

function initGalleryPage() {
    launchConfetti();

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleryPage);
} else {
    initGalleryPage();
}