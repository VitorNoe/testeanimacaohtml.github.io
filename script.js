const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Efeito de rotação 3D
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // Efeito de sombra de acordo com a posição do mouse
    const shadowX = (e.pageX - window.innerWidth / 2) / 10;
    const shadowY = (e.pageY - window.innerHeight / 2) / 10;
    card.style.boxShadow = `${-shadowX}px ${-shadowY}px 60px rgba(0, 0, 0, 0.3), 
                            ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.1)`;

    // Cálculo para luminosidade na borda
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;  // Posição X dentro do cartão
    let y = e.clientY - rect.top;   // Posição Y dentro do cartão
    
    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let distanceX = Math.abs(x - centerX);
    let distanceY = Math.abs(y - centerY);

    // Intensidade do brilho baseada na distância
    let intensityX = 1 - (distanceX / centerX);
    let intensityY = 1 - (distanceY / centerY);

    let intensity = (intensityX + intensityY) / 2;

    // Aplica o brilho dinâmico nas bordas
    card.style.boxShadow += `, 0 0 ${intensity * 30}px rgba(255, 255, 255, ${intensity * 0.8})`;
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
