export default class ScrollSuave {
  constructor(links) {
    this.linksInternos = document.querySelectorAll(links);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop - 60;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
