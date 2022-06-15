import outsideClick from './outsideClick';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="btn"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];
  const active = 'ativo';

  function openMenu() {
    menuList.classList.add(active);
    menuBtn.classList.add(active);
    console.log('abriu');
    outsideClick(menuList, events, () => {
      menuList.classList.remove(active);
      menuBtn.classList.remove(active);
      console.log('fechou');
    });
  }

  if (menuBtn) {
    openMenu();

    events.forEach((userEvent) => {
      menuBtn.addEventListener(userEvent, openMenu);
    });
  }
}
