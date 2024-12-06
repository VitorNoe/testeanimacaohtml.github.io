const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;  // Posição X dentro do cartão
    let y = e.clientY - rect.top;   // Posição Y dentro do cartão
    
    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let distanceX = Math.abs(x - centerX);
    let distanceY = Math.abs(y - centerY);

    // Calcular a intensidade do brilho (inversamente proporcional à distância do centro)
    let intensityX = 1 - (distanceX / centerX);
    let intensityY = 1 - (distanceY / centerY);

    let intensity = (intensityX + intensityY) / 2;  // Média das intensidades

    card.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.2), 
                            0 0 40px ${intensity * 30}px rgba(255, 255, 255, ${intensity * 0.8})`; // Ajuste do brilho
});

container.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)'; // Resetar a sombra
});
