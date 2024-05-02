import {createElement} from '../render';

function createHeaderTemplate() {
  return `
    <header class="page-header">
      <div class="page-body__container page-header__container">
        <img
          class="page-header__logo"
          src="img/logo.png"
          width="42"
          height="42"
          alt="Trip logo"
         >
      </div>
    </header>
  `;
}

export default class HeaderView {
  getTemplate() {
    return createHeaderTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
