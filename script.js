// Seleção dos elementos
const gear = document.getElementById('gear');
const modeCard = document.getElementById('modeCard');
const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');

// Estado de visibilidade
let isCardVisible = false;

// Animação da engrenagem e do cartão
gear.addEventListener('click', () => {
    // Gira a engrenagem
    gear.classList.add('spin');

    // Mostra ou esconde o cartão de opções
    if (!isCardVisible) {
        modeCard.classList.add('visible');
    } else {
        modeCard.classList.remove('visible');
    }
    isCardVisible = !isCardVisible;

    // Reseta a rotação da engrenagem após a animação
    setTimeout(() => {
        gear.classList.remove('spin');
    }, 1000);
});

// Alterna para o modo claro
lightModeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#333';
});

// Alterna para o modo escuro
darkModeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#111';
    document.body.style.color = '#fff';
});
