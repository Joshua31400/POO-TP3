/** Module Confetti Avancé
 * Lance une animation de confettis spectaculaire avec physique réaliste
 */

const CONFETTI_CONFIG = {
    count: 150,
    colors: ['#D4508A', '#FFD1DC', '#FFF', '#F7B801', '#A259F7', '#FF6B6B', '#4ECDC4'],
    shapes: ['square', 'circle', 'strip'],
    gravity: 0.015,
    drag: 0.02,
    terminalVelocity: 3,
    flipSpeed: 0.03
};

class ConfettiPiece {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.reset();
    }

    reset() {
        // Position initiale au centre-haut avec dispersion
        this.x = this.canvas.width / 2 + (Math.random() - 0.5) * 200;
        this.y = this.canvas.height / 2 - 100;

        // Vélocité explosive
        const angle = Math.random() * Math.PI * 2;
        const velocity = 8 + Math.random() * 12;
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity - 10;

        // Propriétés visuelles
        this.color = CONFETTI_CONFIG.colors[Math.floor(Math.random() * CONFETTI_CONFIG.colors.length)];
        this.shape = CONFETTI_CONFIG.shapes[Math.floor(Math.random() * CONFETTI_CONFIG.shapes.length)];
        this.size = 6 + Math.random() * 10;

        // Rotation 3D
        this.rotateX = Math.random() * Math.PI * 2;
        this.rotateY = Math.random() * Math.PI * 2;
        this.rotateZ = Math.random() * Math.PI * 2;
        this.rotateSpeedX = (Math.random() - 0.5) * 0.2;
        this.rotateSpeedY = (Math.random() - 0.5) * 0.2;
        this.rotateSpeedZ = (Math.random() - 0.5) * 0.15;

        // Oscillation latérale
        this.wobble = Math.random() * 10;
        this.wobbleSpeed = 0.05 + Math.random() * 0.1;

        this.opacity = 1;
        this.alive = true;
    }

    update() {
        // Physique
        this.vy += CONFETTI_CONFIG.gravity;
        this.vx *= (1 - CONFETTI_CONFIG.drag);
        this.vy = Math.min(this.vy, CONFETTI_CONFIG.terminalVelocity);

        // Mouvement oscillant
        this.wobble += this.wobbleSpeed;
        this.x += this.vx + Math.sin(this.wobble) * 0.5;
        this.y += this.vy;

        // Rotation 3D continue
        this.rotateX += this.rotateSpeedX;
        this.rotateY += this.rotateSpeedY;
        this.rotateZ += this.rotateSpeedZ;

        // Fade out en bas de l'écran
        if (this.y > this.canvas.height - 100) {
            this.opacity -= 0.02;
        }

        if (this.y > this.canvas.height + 50 || this.opacity <= 0) {
            this.alive = false;
        }
    }

    draw() {
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(this.x, this.y);

        // Appliquer rotation 3D simulée
        const scaleX = Math.cos(this.rotateY);
        const scaleY = Math.cos(this.rotateX);
        ctx.rotate(this.rotateZ);
        ctx.scale(scaleX, scaleY);

        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        // Dessiner selon la forme
        switch (this.shape) {
            case 'square':
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'strip':
                ctx.fillRect(-this.size / 2, -this.size * 1.5, this.size, this.size * 3);
                break;
        }

        ctx.restore();
    }
}

let animationId = null;
let canvas = null;

export function launchConfetti() {
    // Nettoyer animation précédente
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    if (canvas) {
        canvas.remove();
    }

    // Créer le canvas
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
    `;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const confetti = [];

    // Créer les confettis en plusieurs vagues
    function spawnWave(count) {
        for (let i = 0; i < count; i++) {
            confetti.push(new ConfettiPiece(canvas, ctx));
        }
    }

    // Vagues d'explosion
    spawnWave(80);
    setTimeout(() => spawnWave(40), 150);
    setTimeout(() => spawnWave(30), 300);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Mettre à jour et dessiner
        for (let i = confetti.length - 1; i >= 0; i--) {
            confetti[i].update();
            if (confetti[i].alive) {
                confetti[i].draw();
            } else {
                confetti.splice(i, 1);
            }
        }

        // Continuer ou nettoyer
        if (confetti.length > 0) {
            animationId = requestAnimationFrame(animate);
        } else {
            canvas.remove();
            canvas = null;
            animationId = null;
        }
    }

    animate();
    // Redimensionnement
    const handleResize = () => {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    };
    window.addEventListener('resize', handleResize);

    // Nettoyage après 5s max
    setTimeout(() => {
        window.removeEventListener('resize', handleResize);
    }, 5000);
}

export default { launchConfetti };
