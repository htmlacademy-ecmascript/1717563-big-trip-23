import {createElement} from '../render';

function createMainTemplate() {
  return `
    <main class="page-body__page-main page-main">
      <div class="page-body__container"></div>
    </main>
  `;
}

export default class MainView {
  getTemplate() {
    return createMainTemplate();
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
