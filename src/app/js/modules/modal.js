export default function initModal() {
  const abrirBtn = document.querySelector('[data-modal="abrir"]');
  const fecharBtn = document.querySelector('[data-menu="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    event.preventDefault();
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (abrirBtn && fecharBtn && containerModal) {
    abrirBtn.addEventListener('click', toggleModal);
    fecharBtn.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
