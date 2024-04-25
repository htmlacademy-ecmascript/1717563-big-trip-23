import {createElement} from '../render';

function createEventSaveTemplate() {
  return '<button class="event__save-btn btn btn--blue" type="submit">Save</button>';
}

export default class EventSaveView {
  getTemplate() {
    return createEventSaveTemplate();
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
