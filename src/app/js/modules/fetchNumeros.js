import initAnimaNumeros from './animaNumeros';

export default function initFetchNumeros() {
  async function fetchNumeros(url) {
    try {
      const numResponse = await fetch(url);
      const numJson = await numResponse.json();
      const wrapper = document.querySelector('.numeros__wrapper');
      numJson.forEach((num) => {
        const divNumero = createData(num);
        wrapper.appendChild(divNumero);
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  function createData(num) {
    const div = document.createElement('div');
    div.classList.add('numero-data');
    div.innerHTML = `<h2>${num.label}<span data-numero>${num.total}</span></h2>`;
    return div;
  }

  fetchNumeros('./dados.json');
}
