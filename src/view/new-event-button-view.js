import {createElement} from '../render';

function createNewEventButtonViewTemplate() {
  return `
    <button
      class="trip-main__event-add-btn btn btn--big btn--yellow"
      type="button"
    >
      New event
    </button>
  `;
}

export default class NewEventButtonView {
  getTemplate() {
    return createNewEventButtonViewTemplate();
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
