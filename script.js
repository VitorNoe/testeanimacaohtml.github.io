const card = document.querySelector('.card');
const container = document.querySelector('.container');
const loadingBar = document.querySelector('.loading-bar');

// Animação de carregamento da barra
setTimeout(() => {
    loadingBar.style.display = 'none';  // Esconde a barra de carregamento
    container.style.opacity = 1;        // Faz o container aparecer
    card.style.opacity = 1;             // Torna o cartão visível
    card.style.transform = 'translateY(0)'; // Animação para o cartão aparecer
}, 2000);

// Efeito parallax
container.addEventListener('mousemove', (e) => {
    let xOffset = (window.innerWidth / 2 - e.pageX) / 25;
    let yOffset = (window.innerHeight / 2 - e.pageY) / 25;
    container.style.backgroundPosition = `${xOffset}px ${yOffset}px`;
    
    // Efeito de rotação do cartão
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // Efeito de sombra do cartão
    const shadowX = (e.pageX - window.innerWidth / 2) / 10;
    const shadowY = (e.pageY - window.innerHeight / 2) / 10;
    card.style.boxShadow = `${-shadowX}px ${-shadowY}px 60px rgba(0, 0, 0, 0.3), 
                            ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.1)`;
});

// Evento de clique para "afundar" o cartão
card.addEventListener('mousedown', () => {
    card.style.transform += ' scale(0.95)';
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
});

// Evento de soltar para voltar ao normal
card.addEventListener('mouseup', () => {
    card.style.transform = card.style.transform.replace(' scale(0.95)', '');
    card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
});

// Remove o efeito de clique ao sair do cartão
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
});
