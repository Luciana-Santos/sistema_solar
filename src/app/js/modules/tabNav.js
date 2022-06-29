export default class initTabNav {
  constructor(menu, content) {
    this.planetas = document.querySelectorAll(menu);
    this.planetasDesc = document.querySelectorAll(content);
    this.ativo = 'ativo';
  }

  // ativa a tab de acordo com o index
  ativarTab(index) {
    this.planetasDesc.forEach((section) => {
      section.classList.remove(this.ativo);
    });
    const direcao = this.planetasDesc[index].dataset.anime;
    this.planetasDesc[index].classList.add(this.ativo, direcao);
  }

  // adiciona os eventos aos tabs
  addTabNavEvent() {
    this.planetas.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => this.ativarTab(index));
    });
  }

  init() {
    if (this.planetas.length && this.planetasDesc.length) {
      // ativar primeiro item
      this.ativarTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
