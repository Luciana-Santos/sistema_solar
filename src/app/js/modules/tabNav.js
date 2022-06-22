export default function initTabNav() {
  const planetas = document.querySelectorAll('[data-tab="menu"] li');
  const planetasDesc = document.querySelectorAll(
    '[data-tab="content"] section',
  );
  const ativo = 'ativo';

  if (planetas.length === planetasDesc.length) {
    planetasDesc[0].classList.add(ativo);

    function ativarTab(index) {
      planetasDesc.forEach((section) => {
        section.classList.remove(ativo);
      });
      const direcao = planetasDesc[index].dataset.anime;
      planetasDesc[index].classList.add('ativo', direcao);
    }
    planetas.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => ativarTab(index));
    });
  }
}
