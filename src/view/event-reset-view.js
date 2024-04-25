import {createElement} from '../render';

function createEventResetTemplate(value) {
  return `<button class="event__reset-btn" type="reset">${value}</button>`;
}

export default class EventResetView {
  constructor(value) {
    this.value = value;
  }

  getTemplate() {
    return createEventResetTemplate(this.value);
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
