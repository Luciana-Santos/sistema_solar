export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona o evento nos itens da lista
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // inicia a função
  init() {
    if (this.accordionList.length) {
      // ativa o primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
