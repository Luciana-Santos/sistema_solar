export default class Modal {
  constructor(abrirBtn, fecharBtn, containerModal) {
    this.abrirBtn = document.querySelector(abrirBtn);
    this.fecharBtn = document.querySelector(fecharBtn);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback
    // para fazer referência
    // ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    event.preventDefault();
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.abrirBtn.addEventListener('click', this.eventToggleModal);
    this.fecharBtn.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.abrirBtn && this.fecharBtn && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
