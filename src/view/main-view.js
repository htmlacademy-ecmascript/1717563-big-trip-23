import {createElement} from '../render';

function createMainTemplate() {
  return `
    <main class="page-body__page-main page-main">
      <div class="page-body__container">
        <section class="trip-events">
          <h2 class="visually-hidden">Trip events</h2>
        </section>
      </div>
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
