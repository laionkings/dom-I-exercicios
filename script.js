const frutas = ['banana', 'maçã', 'laranja', 'uva'];
const listaDeFrutas = document.querySelector('#lista-de-frutas');
const novaFrutaInput = document.querySelector('#nova-fruta');

console.log(novaFrutaInput.value);


for (let i = 0; i < frutas.length; i++) {
  const frutaAtual = frutas[i];
  const li = document.querySelector(`#fruta-${i + 1}`);
  li.textContent = frutaAtual;
  
}

function adicionarFruta() {
    // Obtém o valor do input
    const novaFruta = document.getElementById('nova-fruta').value;
  
    // Cria um novo elemento li
    const li = document.createElement('li');
    li.textContent = novaFruta;
  
    // Obtém a lista de frutas
    const listaDeFrutas = document.getElementById('lista-de-frutas');
  
    // Adiciona o novo elemento li à lista
    listaDeFrutas.appendChild(li);
  }
  
  // Obtém o botão Limpar
const botaoLimpar = document.getElementById('botao-limpar');

// Adiciona um event listener de clique ao botão
botaoLimpar.addEventListener('click', limparInputs);

function limparInputs() {
  // Obtém todos os inputs da página
  const inputs = document.querySelectorAll('input');

  // Limpa o valor de cada input
  inputs.forEach(input => input.value = '');
}

  


