function animateStateOrder() {
  const container = document.querySelector('.container');
  const states = Array.from(container.querySelectorAll('.state'));

  // Redefine as transformações de todos os estados
  states.forEach((state) => {
    state.style.transform = '';
  });

  // Ordena os estados com base nos pontos
  states.sort((a, b) => {
    const scoreA = parseInt(a.dataset.score);
    const scoreB = parseInt(b.dataset.score);
    return scoreB - scoreA; // Ordena em ordem decrescente com base nos pontos
  });

  let offsetY = 0;
  states.forEach((state, index) => {
    const stateHeight = state.offsetHeight + 45; // Ajuste o valor '5' conforme necessário para o espaçamento entre estados
    state.style.transform = `translateY(${offsetY}px)`;
    offsetY += stateHeight;
  });
}

animateStateOrder(); // Chama a função uma vez para fazer a animação inicial
setInterval(animateStateOrder, 2000); // Atualiza a animação a cada 2 segundos (ajuste o valor conforme necessário)
