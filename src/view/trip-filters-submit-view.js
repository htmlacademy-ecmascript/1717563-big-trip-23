import {createElement} from '../render';

function createTripFiltersSubmitTemplate() {
  return `
    <button
      class="visually-hidden"
      type="submit"
    >
      Accept filter
    </button>
  `;
}

export default class TripFiltersSubmitView {
  getTemplate() {
    return createTripFiltersSubmitTemplate();
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
