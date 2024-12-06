const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    // Adiciona sombra com base na posição do mouse
    const shadowX = (e.pageX - window.innerWidth / 2) / 10;
    const shadowY = (e.pageY - window.innerHeight / 2) / 10;
    card.style.boxShadow = `${-shadowX}px ${-shadowY}px 60px rgba(0, 0, 0, 0.3), 
                            ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.1)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.2)`;
});
