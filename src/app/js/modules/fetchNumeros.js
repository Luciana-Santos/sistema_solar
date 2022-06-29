import AnimaNumeros from './animaNumeros';

export default function fetchNumeros(url, target) {
  // cria a div contendendo as informações
  function criarDiv(num) {
    const div = document.createElement('div');
    div.classList.add('numero-data');
    div.innerHTML = `<h2>${num.label}<span data-numero>${num.total}</span></h2>`;
    return div;
  }

  // preeche cada numero no dom
  const wrapper = document.querySelector(target);
  function preencherNumeros(numero) {
    const divNumero = criarDiv(numero);
    wrapper.appendChild(divNumero);
  }

  // anima os numeros de cada dado
  function animaDataNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // faz o fetch dos animais atravez de um arquivo json
  async function criarDados() {
    try {
      const numResponse = await fetch(url);
      const numJson = await numResponse.json();

      // após transformar em json, ativa as funções
      // para preecher e animar os dados
      numJson.forEach((numero) => preencherNumeros(numero));
      animaDataNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  return criarDados();
}
