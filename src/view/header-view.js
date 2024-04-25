import {createElement} from '../render';

function createHeaderTemplate() {
  return `
    <header class="page-header">
      <div class="page-body__container  page-header__container"></div>
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
