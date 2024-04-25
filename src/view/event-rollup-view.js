import {createElement} from '../render';

function createEventRollupTemplate() {
  return `
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  `;
}

export default class EventRollupView {
  getTemplate() {
    return createEventRollupTemplate();
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
