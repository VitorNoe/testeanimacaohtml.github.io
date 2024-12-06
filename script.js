const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    const shadowX = (e.pageX - window.innerWidth / 2) / 10;
    const shadowY = (e.pageY - window.innerHeight / 2) / 10;
    card.style.boxShadow = `${-shadowX}px ${-shadowY}px 60px rgba(0, 0, 0, 0.3), 
                            ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.1)`;
});

// Evento de clique para "afundar"
card.addEventListener('mousedown', () => {
    card.style.transform += ' scale(0.95)';  // Reduz o tamanho para afundar
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';  // Reduz a sombra
});

// Evento de soltar para voltar ao normal
card.addEventListener('mouseup', () => {
    card.style.transform = card.style.transform.replace(' scale(0.95)', '');  // Volta ao tamanho normal
    card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';  // Restaura a sombra original
});

// Remove o efeito de clique ao sair do cartão
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;  // Restabelece a posição
    card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
});
