// Função auxiliar para encontrar o algarismo romano na lista
function encontrarAlgarismoRomano(romano, algarismosRomanos) {
  for (let i = 0; i < algarismosRomanos.length; i++) {
    if (algarismosRomanos[i][0] === romano) {
      return algarismosRomanos[i];
    }
  }
}


// Função para converter algarismos romanos em arábicos
function converterAlgarismosRomanos(romano) {
  const algarismosRomanos = [
    ['M', 1000],['D', 500],['C', 100],['L', 50],['X', 10],['V', 5],['I', 1]
  ];

  let resultado = 0;

  // Percorre cada algarismo romano na string de entrada
  for (let i = 0; i < romano.length; i++) {
    const algarismoAtual = encontrarAlgarismoRomano(romano[i], algarismosRomanos);
    const algarismoProximo = encontrarAlgarismoRomano(romano[i + 1], algarismosRomanos);

    // Verifica se o próximo algarismo existe e se seu valor é maior que o algarismo atual
    if (algarismoProximo && algarismoAtual[1] < algarismoProximo[1]) {
      resultado -= algarismoAtual[1];  // Se for o caso, subtrai o valor do algarismo atual
    } else {
      resultado += algarismoAtual[1];  // Caso contrário, adiciona o valor do algarismo atual
    }
  }

  return resultado;  // Retorna o resultado da conversão
}


// Função para converter e exibir o resultado
function converter() {
  const romanoInput = document.getElementById('romano');   // Obtém o valor digitado
  const resultadoElement = document.getElementById('resultado');  // Elemento para exibir o resultado

  const numero = converterAlgarismosRomanos(romanoInput.value);  // Converte o número romano
  resultadoElement.textContent = 'O número correspondente é: ' + numero;  // Exibe o resultado na página
}