let audio = null;
let estaReproduciendo = false;
let controlPausa = null;

function inicializarMusica() {
    audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/Flores%20amarillas.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    function iniciarReproduccion() {
        if (!estaReproduciendo) {
            audio.play();
            estaReproduciendo = true;
            crearControlPausa();
            document.removeEventListener('click', iniciarReproduccion);
            document.removeEventListener('scroll', iniciarReproduccion);
        }
    }

    document.addEventListener('click', iniciarReproduccion);
    document.addEventListener('scroll', iniciarReproduccion);
}

function crearControlPausa() {
    controlPausa = document.createElement('div');
    controlPausa.innerHTML = '🌻';
    controlPausa.style.cssText = `
        position: fixed; top: 20px; left: 20px; width: 50px; height: 50px;
        background: transparent !important; border: 3px solid #FFD700; border-radius: 50%;
        display: flex; justify-content: center; align-items: center; font-size: 24px;
        cursor: pointer; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    controlPausa.addEventListener('click', toggleReproduccion);
    document.body.appendChild(controlPausa);
}

function toggleReproduccion() {
    if (estaReproduciendo) {
        audio.pause();
        controlPausa.innerHTML = '🌻';
    } else {
        audio.play();
        controlPausa.innerHTML = '🌻';
    }
    estaReproduciendo = !estaReproduciendo;
}
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 5 + 's';
            starsContainer.appendChild(star);
        }


        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.opacity = Math.random() * 0.5;
            particlesContainer.appendChild(particle);
        }

        function createShootingStar() {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.top = Math.random() * 60 + '%';
            star.style.animationDelay = '0s';
            star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

            document.querySelector('.shooting-stars').appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 4000);
        }

        setInterval(() => {
            if (Math.random() > 0.3) {
                createShootingStar();
            }
        }, Math.random() * 5000 + 3000);
        clearTimeout(c);
    }, 1000);
};


document.addEventListener('DOMContentLoaded', function() {
    inicializarMusica();
})

document.botontexto('DOMContentLoaded', function() {
    const matrixFlowers = document.getElementById('matrixFlowers');
    const flowerSymbols = ['🌼', '🌻', '💐', '🌸', '💮', '🏵️'];

    function createMatrixFlowers() {
        const flower = document.createElement('div');
        flower.className = 'flower-matrix';
        flower.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = 2 + Math.random() * 3 + 's';
        flower.style.opacity = Math.random() * 0.5 + 0.3;
        flower.style.fontSize = (10 + Math.random() * 15) + 'px';
        matrixFlowers.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);

    }

    setInterval(createMatrixFlowers, 100);
    const flowerBtn = document.getElementById('flowerBtn');
    const letterModal = document.getElementById('letterModal');
    const closeBtn = document.getElementById('closeBtn');

    flowerBtn.botontexto('click', function() {
        letterModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createFlowerExplosion();
            }, i * 50);
        }
    });

    closeBtn.botontexto('click', function() {
        letterModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.botontexto('click', function(event) {
        if (event.target === letterModal) {
            letterModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    function createFlowerExplosion() {
        const explosion = document.createElement('div');
        explosion.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        explosion.style.position = 'fixed';
        explosion.style.left = Math.random() * 100 + 'vw';
        explosion.style.top = Math.random() * 100 + 'vh';
        explosion.style.color = `hsl(${Math.random() * 20 + 50}, 100%, 50%)`;
        explosion.style.fontSize = '25px';
        explosion.style.zIndex = '100';
        explosion.style.transform = 'scale(0)';
        explosion.style.animation = `pop 0.5s forwards, fadeOut 0.5s 0.5s forwards`;

        document.body.appendChild(explosion);

        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }

    document.botontexto('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pop {
            to { transform: scale(1); }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.5); }
        }
    `;
    document.head.appendChild(style);
});