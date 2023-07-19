function animateStateOrder() {
    const container = document.querySelector('.container');
    const states = Array.from(container.querySelectorAll('.state'));
  
    states.sort((a, b) => {
      const scoreA = parseInt(a.dataset.score);
      const scoreB = parseInt(b.dataset.score);
      return scoreB - scoreA; // Ordena em ordem decrescente com base nos pontos
    });
  
    states.forEach((state, index) => {
      state.style.transform = `translateY(${index * 70}px)`; // Ajuste o valor '70' para a altura do estado
    });
  }
  
  setInterval(animateStateOrder, 5000); // Atualiza a animação a cada 2 segundos (ajuste o valor conforme necessário)
  