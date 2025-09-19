const pinCorrecto = '2025';
const pinInput = document.getElementById('pinInput');

pinInput.addEventListener('input', () => {
    if (pinInput.value.length === 4) {
        verificarPIN();
    }
});

pinInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarPIN();
    }
});

function agregarNumero(num) {
    if (pinInput.value.length < 4) {
        pinInput.value += num;
    }
}

function borrar() {
    pinInput.value = pinInput.value.slice(0, -1);
}

function verificarPIN() {
    if (pinInput.value === pinCorrecto) {
        document.getElementById('login').classList.add('oculto');
        document.getElementById('principal').classList.remove('oculto');

        const video = document.getElementById('video');
        video.play(); // Reproduce el video con sonido (gracias a la interacción)

        iniciarCorazones();
    } else {
        alert('❌ PIN incorrecto. Intenta nuevamente.');
        pinInput.value = '';
    }
}

function crearCorazon() {
    const corazones = document.querySelector('.corazones');
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '❤️';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = (Math.random() * 20 + 10) + 'px';
    corazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 4000);
}

function iniciarCorazones() {
    setInterval(crearCorazon, 400);
}