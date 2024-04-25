import {createElement} from '../render';

function createTripMainTemplate() {
  return '<div class="trip-main"></div>';
}

export default class TripMainView {
  getTemplate() {
    return createTripMainTemplate();
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
